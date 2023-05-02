// import { querystring } from './index'
// import { getApiHeaders, constants, authenticationCache, getConfigFromEnv } from '../utilities'
// import { APIAuthClient } from '@kibocommerce/sdk-authentication'
// import { TenantManager } from './tenant-data-manager'
// import fetch from 'isomorphic-fetch'
// import type { FetchAPI, Middleware, HTTPQuery, HTTPHeaders } from './index'
// import type { ApiExtensionContext, ConfigurationParameters } from '../types'
// import { KiboHostedConfiguration } from '../utilities/get-config-from-env'
// import { getTenantApiUrl } from '../utilities/get-api-url'

// const isKiboHosted = () => !!process.env.mozuHosted
// interface SDKConfiguration {
//   headers: HTTPHeaders | undefined
//   credentials: RequestCredentials | undefined
//   tenantId: string | undefined
//   siteId: string | undefined
//   currency: string | undefined
//   catalog: string | undefined
//   masterCatalog: string | undefined
//   locale: string | undefined
//   clientId: string | undefined
//   sharedSecret: string | undefined
//   authHost: string
//   isKiboHosted: boolean
//   appClaims: string | undefined
//   userClaims: string | undefined
//   getBaseAPIUrl: (urlTemplate: string) => Promise<string>
//   setUserClaims: (userClaims: string) => void
//   getAccessToken: () => Promise<string> | undefined
//   clearUserClaims: () => void
// }

// export class Configuration implements SDKConfiguration {
//   private _authClient: APIAuthClient
//   private _tenantData: TenantManager
//   public isKiboHosted: boolean
//   mw: Middleware[]
//   private configuration: ConfigurationParameters
//   constructor(apiContext?: ApiExtensionContext, middleware?: Middleware[]) {
//     this.isKiboHosted = isKiboHosted()
//     this.configuration = new KiboHostedConfiguration(apiContext)
//     this.mw = middleware || []
//   }
//   set config(configuration: Configuration) {
//     this.configuration = configuration
//   }
//   get basePath(): string {
//     return this.configuration.basePath
//   }
//   get apiHost(): string {
//     return this.configuration.apiHost
//   }
//   get fetchApi(): FetchAPI | undefined {
//     return this.configuration.fetchApi || fetch
//   }
//   get middleware(): Middleware[] {
//     return this.mw || []
//   }
//   get headers(): HTTPHeaders | undefined {
//     return getApiHeaders(this.configuration as any)
//   }
//   get credentials(): RequestCredentials | undefined {
//     return this.configuration.credentials
//   }
//   get tenantId(): string | undefined {
//     return this.configuration.tenantId
//   }
//   get siteId(): string | undefined {
//     return this.configuration.siteId
//   }
//   get currency(): string | undefined {
//     return this.configuration.currency
//   }
//   get catalog(): string | undefined {
//     return this.configuration.catalog
//   }
//   get masterCatalog(): string | undefined {
//     return this.configuration.masterCatalog
//   }
//   get locale(): string | undefined {
//     return this.configuration.locale
//   }
//   get clientId(): string | undefined {
//     return this.configuration.clientId
//   }
//   get sharedSecret(): string | undefined {
//     return this.configuration.sharedSecret
//   }
//   get authHost(): string {
//     return this.configuration.authHost || constants.defaults.AUTH_HOST
//   }
//   get appClaims(): string {
//     return this.configuration.appClaims
//   }
//   get userClaims(): string {
//     return this.configuration.userClaims
//   }
//   get queryParamsStringify(): (params: HTTPQuery) => string {
//     return this.configuration.queryParamsStringify || querystring
//   }
//   get accessToken(): ((name?: string, scopes?: string[]) => string | Promise<string>) | undefined {
//     const accessToken = this.configuration.accessToken
//     if (accessToken) {
//       return typeof accessToken === 'function' ? accessToken : async () => accessToken
//     }
//     if (this._authClient) {
//       return async () => this._authClient.getAccessToken()
//     }
//     return undefined
//   }
//   public async getBaseAPIUrl(template?: string): Promise<string> {
//     if (template?.includes('{homePod}') && this.authHost) {
//       return template.replaceAll('{homePod}', this.authHost)
//     }
//     const tenantUrl = getTenantApiUrl(this.configuration)
//     return `${tenantUrl}/api`
//   }
//   public clearUserClaims() {
//     this.configuration.userClaims = null
//   }
//   public setUserClaims(userClaims: string) {
//     this.configuration.userClaims = userClaims
//   }
//   public async getAccessToken(): Promise<string> {
//     return this._authClient.getAccessToken()
//   }
//   static fromEnv() {
//     // return new Configuration(getConfigFromEnv())
//   }
// }
