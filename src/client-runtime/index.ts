/* tslint:disable */
/* eslint-disable */

/**
 * This is the base class for all generated API classes.
 */

// middleware
// //accessToken
// // appClaims
// // userClaims
// // queryParamsStringify
// // headers
// // credentials
// getBaseAPIUrl
// fetchApi

export class BaseAPI {
  public middleware: Middleware[]
  public basePathTemplate?: string
  protected configuration
  constructor(configuration?) {
    this.configuration = configuration
    if (!this.configuration) {
      throw new Error('API Configuration must be provided for client creation')
    }
    this.middleware = configuration.middleware || []
  }

  withMiddleware<T extends BaseAPI>(this: T, ...middlewares: Middleware[]) {
    const next = this.clone<T>()
    next.middleware = next.middleware.concat(...middlewares)
    return next
  }

  withPreMiddleware<T extends BaseAPI>(this: T, ...preMiddlewares: Array<Middleware['pre']>) {
    const middlewares = preMiddlewares.map((pre) => ({ pre }))
    return this.withMiddleware<T>(...middlewares)
  }

  withPostMiddleware<T extends BaseAPI>(this: T, ...postMiddlewares: Array<Middleware['post']>) {
    const middlewares = postMiddlewares.map((post) => ({ post }))
    return this.withMiddleware<T>(...middlewares)
  }
  protected async addAuthorizationHeaders(headers: HTTPHeaders) {
    //console.log('addAuthorizationHeaders')
    if (this.configuration.accessToken) {
      //console.log('addAuthorizationHeaders: accessToken')
      const token = await this.configuration.accessToken
      const tokenString = await token()
      if (tokenString) {
        headers['Authorization'] = `Bearer ${tokenString}`
      }
    } else if (this.configuration.userClaims || this.configuration.appClaims) {
      //console.log('addAuthorizationHeaders: userClaims')
      headers['x-vol-app-claims'] = this.configuration.appClaims
      headers['x-vol-user-claims'] = this.configuration.userClaims
    }
  }
  protected async request(
    context: RequestOpts,
    initOverrides?: RequestInit | InitOverrideFunction
  ): Promise<Response> {
    const { url, init } = await this.createFetchParams(context, initOverrides)
    const response = await this.fetchApi(url, init)
    if (response && response.status >= 200 && response.status < 300) {
      return response
    }
    const responseBody = await response.text()
    const apiError = JSON.parse(responseBody)
    throw new ResponseError(
      response,
      apiError?.message || 'Response returned an error code',
      apiError
    )
  }

  private async createFetchParams(
    context: RequestOpts,
    initOverrides?: RequestInit | InitOverrideFunction
  ) {
    const apiUrl = await this.configuration.getBaseAPIUrl(this.basePathTemplate)
    let url = apiUrl + context.path
    if (context.query !== undefined && Object.keys(context.query).length !== 0) {
      // only add the querystring to the URL if there are query parameters.
      // this is done to avoid urls ending with a "?" character which buggy webservers
      // do not handle correctly sometimes.
      url += '?' + this.configuration.queryParamsStringify(context.query)
    }

    const headers = Object.assign({}, this.configuration.headers, context.headers)
    Object.keys(headers).forEach((key) => (headers[key] === undefined ? delete headers[key] : {}))

    const initOverrideFn =
      typeof initOverrides === 'function' ? initOverrides : async () => initOverrides

    const initParams = {
      method: context.method,
      headers,
      body: context.body,
      credentials: this.configuration.credentials,
    }

    const overridedInit: RequestInit = {
      ...initParams,
      ...(await initOverrideFn({
        init: initParams,
        context,
      })),
    }
    function isURLSearchParams(obj) {
      // Duck-typing as a necessary condition.
      if (
        typeof obj !== 'object' ||
        typeof obj.append !== 'function' ||
        typeof obj.delete !== 'function' ||
        typeof obj.get !== 'function' ||
        typeof obj.getAll !== 'function' ||
        typeof obj.has !== 'function' ||
        typeof obj.set !== 'function'
      ) {
        return false
      }

      // Brand-checking and more duck-typing as optional condition.
      return (
        obj.constructor.name === 'URLSearchParams' ||
        Object.prototype.toString.call(obj) === '[object URLSearchParams]' ||
        typeof obj.sort === 'function'
      )
    }
    const init: RequestInit = {
      ...overridedInit,
      body:
        isFormData(overridedInit.body) ||
        isURLSearchParams(overridedInit.body) ||
        isBlob(overridedInit.body)
          ? overridedInit.body
          : JSON.stringify(overridedInit.body),
    }

    return { url, init }
  }

  private fetchApi = async (url: string, init: RequestInit) => {
    let fetchParams = { url, init }
    //console.log(url, init)
    for (const middleware of this.middleware) {
      if (middleware.pre) {
        fetchParams =
          (await middleware.pre({
            fetch: this.fetchApi,
            ...fetchParams,
          })) || fetchParams
      }
    }
    let response = undefined
    try {
      response = await (this.configuration.fetchApi || fetch)(fetchParams.url, fetchParams.init)
    } catch (e) {
      for (const middleware of this.middleware) {
        if (middleware.onError) {
          response =
            (await middleware.onError({
              fetch: this.fetchApi,
              url: fetchParams.url,
              init: fetchParams.init,
              error: e,
              response: response ? response.clone() : undefined,
            })) || response
        }
      }
      if (response === undefined) {
        if (e instanceof Error) {
          throw new FetchError(
            e,
            'The request failed and the interceptors did not return an alternative response'
          )
        } else {
          throw e
        }
      }
    }
    for (const middleware of this.middleware) {
      if (middleware.post) {
        const partialClonedResponse = {
          headers: response.headers,
          status: response.status,
          statusText: response.statusText,
        }
        response =
          (await middleware.post({
            fetch: this.fetchApi,
            url: fetchParams.url,
            init: fetchParams.init,
            response: partialClonedResponse as any,
          })) || response
      }
    }
    return response
  }

  /**
   * Create a shallow clone of `this` by constructing a new instance
   * and then shallow cloning data members.
   */
  private clone<T extends BaseAPI>(this: T): T {
    const constructor = this.constructor as any
    const next = new constructor(this.configuration)
    next.middleware = this.middleware.slice()
    return next
  }
}

function isBlob(value: any): value is Blob {
  return typeof Blob !== 'undefined' && value instanceof Blob
}

function isFormData(value: any): value is FormData {
  return typeof FormData !== 'undefined' && value instanceof FormData
}

export class ResponseError extends Error {
  public apiError: { [key: string]: any }
  public response: { url: any; status: any; statusText: any; correlationId: any }
  override name: 'ResponseError' = 'ResponseError'
  constructor(response: Response, msg?: string, apiError?: any) {
    super(msg)
    const correlationId = response?.headers?.get('x-vol-correlation') || {}

    this.response = {
      url: response?.url,
      status: response?.status,
      statusText: response?.statusText,
      correlationId,
    }
    if (apiError?.additionalErrorData) {
      apiError.additionalErrorData = JSON.stringify(apiError.additionalErrorData)
    }
    this.apiError = apiError
  }
}

export class FetchError extends Error {
  override name: 'FetchError' = 'FetchError'
  constructor(public cause: Error, msg?: string) {
    super(msg)
  }
}

export class RequiredError extends Error {
  override name: 'RequiredError' = 'RequiredError'
  constructor(public field: string, msg?: string) {
    super(msg)
  }
}

export const COLLECTION_FORMATS = {
  csv: ',',
  ssv: ' ',
  tsv: '\t',
  pipes: '|',
}

export type FetchAPI = WindowOrWorkerGlobalScope['fetch']

export type Json = any
export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD'
export type HTTPHeaders = { [key: string]: string }
export type HTTPQuery = {
  [key: string]:
    | string
    | number
    | null
    | boolean
    | Array<string | number | null | boolean>
    | Set<string | number | null | boolean>
    | HTTPQuery
}
export type HTTPBody = Json | FormData | URLSearchParams
export type HTTPRequestInit = {
  headers?: HTTPHeaders
  method: HTTPMethod
  credentials?: RequestCredentials
  body?: HTTPBody
}
export type ModelPropertyNaming = 'camelCase' | 'snake_case' | 'PascalCase' | 'original'

export type InitOverrideFunction = (requestContext: {
  init: HTTPRequestInit
  context: RequestOpts
}) => Promise<RequestInit>

export interface FetchParams {
  url: string
  init: RequestInit
}

export interface RequestOpts {
  path: string
  method: HTTPMethod
  headers: HTTPHeaders
  query?: HTTPQuery
  body?: HTTPBody
  basePathTemplate?: string
}

// {{^withoutRuntimeChecks}}
// export function exists(json: any, key: string) {
//     const value = json[key];
//     return value !== null && value !== undefined;
// }
// {{/withoutRuntimeChecks}}

export function querystring(params: HTTPQuery, prefix: string = ''): string {
  return Object.keys(params)
    .map((key) => querystringSingleKey(key, params[key], prefix))
    .filter((part) => part.length > 0)
    .join('&')
}

function querystringSingleKey(
  key: string,
  value:
    | string
    | number
    | null
    | undefined
    | boolean
    | Array<string | number | null | boolean>
    | Set<string | number | null | boolean>
    | HTTPQuery,
  keyPrefix: string = ''
): string {
  const fullKey = keyPrefix + (keyPrefix.length ? `[${key}]` : key)
  if (value instanceof Array) {
    const multiValue = value
      .map((singleValue) => encodeURIComponent(String(singleValue)))
      .join(`&${encodeURIComponent(fullKey)}=`)
    return `${encodeURIComponent(fullKey)}=${multiValue}`
  }
  if (value instanceof Set) {
    const valueAsArray = Array.from(value)
    return querystringSingleKey(key, valueAsArray, keyPrefix)
  }
  if (value instanceof Date) {
    return `${encodeURIComponent(fullKey)}=${encodeURIComponent(value.toISOString())}`
  }
  if (value instanceof Object) {
    return querystring(value as HTTPQuery, fullKey)
  }
  return `${encodeURIComponent(fullKey)}=${encodeURIComponent(String(value))}`
}

// {{^withoutRuntimeChecks}}
// export function mapValues(data: any, fn: (item: any) => any) {
//   return Object.keys(data).reduce(
//     (acc, key) => ({ ...acc, [key]: fn(data[key]) }),
//     {}
//   );
// }
// {{/withoutRuntimeChecks}}

export function canConsumeForm(consumes: Consume[]): boolean {
  for (const consume of consumes) {
    if ('multipart/form-data' === consume.contentType) {
      return true
    }
  }
  return false
}

export interface Consume {
  contentType: string
}

export interface RequestContext {
  fetch: FetchAPI
  url: string
  init: RequestInit
}

export interface ResponseContext {
  fetch: FetchAPI
  url: string
  init: RequestInit
  response: Response
}

export interface ErrorContext {
  fetch: FetchAPI
  url: string
  init: RequestInit
  error: unknown
  response?: Response
}

export interface Middleware {
  pre?(context: RequestContext): Promise<FetchParams | void>
  post?(context: ResponseContext): Promise<Response | void>
  onError?(context: ErrorContext): Promise<Response | void>
}

export interface ApiResponse<T> {
  raw: Response
  value(): Promise<T>
}

export interface ResponseTransformer<T> {
  (json: any): T
}

export class JSONApiResponse<T> {
  constructor(
    public raw: Response,
    private transformer: ResponseTransformer<T> = (jsonValue: any) => jsonValue
  ) {}

  async value(): Promise<T> {
    return this.transformer(await this.raw.json())
  }
}

export class VoidApiResponse {
  constructor(public raw: Response) {}

  async value(): Promise<void> {
    return undefined
  }
}

export class BlobApiResponse {
  constructor(public raw: Response) {}

  async value(): Promise<Blob> {
    return await this.raw.blob()
  }
}

export class TextApiResponse {
  constructor(public raw: Response) {}

  async value(): Promise<string> {
    return await this.raw.text()
  }
}
