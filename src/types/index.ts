import type { HTTPQuery, HTTPHeaders } from '../client-runtime/index'

export interface FetchParams {
  url: string
  init: RequestInit
}

export type FetchAPI = WindowOrWorkerGlobalScope['fetch']

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

export type KiboConfig = {
  apiHost?: string
  apiEnv?: string
  tenantId?: string
  siteId?: string
  currency?: string
  catalog?: string
  masterCatalog?: string
  locale?: string
  sharedSecret?: string
  clientId?: string
  pciHost?: string
  authHost?: string
  dataViewMode?: string
}

export type ClientConfig = {
  middleware: any[]
  headers: any
}

export interface ConfigurationParameters {
  basePath?: string // override base path
  fetchApi?: FetchAPI // override for fetch implementation
  middleware?: Middleware[] // middleware to apply before/after fetch requests
  queryParamsStringify?: (params: HTTPQuery) => string // stringify function for query strings
  apiKey?: string | ((name: string) => string) // parameter for apiKey security
  accessToken?:
    | string
    | Promise<string>
    | ((name?: string, scopes?: string[]) => string | Promise<string>) // parameter for oauth2 security
  jwt?: string | Promise<string> | (() => string | Promise<string>) // parameter for bearer security
  headers?: HTTPHeaders //header params we want to use on every request
  credentials?: RequestCredentials //value for the credentials param we want to use on each request
  apiHost?: string
  apiEnv?: string
  tenantId?: string
  siteId?: string
  currency?: string
  catalog?: string
  masterCatalog?: string
  locale?: string
  sharedSecret?: string
  clientId?: string
  pciHost?: string
  authHost?: string
  dataViewMode?: string
}

export interface AuthTicket {
  access_token: string
  token_type: string
  expires_in: number
  expires_at: number
  refresh_token: string | null
}
