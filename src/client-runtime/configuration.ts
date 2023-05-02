import { querystring } from './index'
import {
  getApiHeaders,
  constants,
  apiAuthMemCache,
  getTenantApiUrl,
  isKiboHosted,
} from '../utilities'
import { APIAuthClient } from '@kibocommerce/sdk-authentication'
import { TenantManager } from './tenant-data-manager'
import fetch from 'isomorphic-fetch'
import type { FetchAPI, Middleware, HTTPQuery, HTTPHeaders } from './index'
import type { ApiContext, ConfigurationParameters } from '../types'
import { KiboApiContext, KiboHostedContext } from './api-context'

export class Configuration {
  isKiboHosted: boolean
  context: ApiContext
  middleware: Middleware[]
  private _authClient: APIAuthClient
  private _tenantDataManager: TenantManager
  fetchApi: FetchAPI
  constructor(params: ConfigurationParameters) {
    this.isKiboHosted = isKiboHosted()
    this.middleware = params.middleware || []
    this.fetchApi = params.fetchApi || fetch
    if (this.isKiboHosted) {
      this.context = new KiboHostedContext(params.apiContext)
    } else {
      this.context = new KiboApiContext(params)

      const { sharedSecret, clientId, authHost = constants.defaults.AUTH_HOST } = this.context
      if (sharedSecret && clientId && authHost) {
        this._authClient = new APIAuthClient(
          { sharedSecret, clientId, authHost } as any,
          this.fetchApi,
          apiAuthMemCache as any
        )
        this._tenantDataManager = new TenantManager(this._authClient, authHost)
      }
    }
  }
  get appClaims(): string {
    return this.context.appClaims
  }
  get userClaims(): string {
    return this.context.userClaims
  }
  get headers(): HTTPHeaders | undefined {
    return getApiHeaders(this.context as any)
  }
  get queryParamsStringify(): (params: HTTPQuery) => string {
    return querystring
  }
  get accessToken(): (() => string | Promise<string>) | undefined {
    const accessToken = this.context.accessToken
    if (accessToken) {
      return accessToken
    }
    if (this._authClient) {
      return async () => this._authClient.getAccessToken()
    }
    return undefined
  }
  set accessToken(value: () => string | Promise<string> | string | undefined) {
    this.context.accessToken = value
  }

  clearUserClaims() {
    this.context.userClaims = null
  }
  setUserClaims(userClaims: string) {
    this.context.userClaims = userClaims
  }
  async getBaseAPIUrl(template?: string): Promise<string> {
    if (template?.includes('{homePod}') && this.context.authHost) {
      return template.replace('{homePod}', this.context.authHost)
    }
    if (this._tenantDataManager) {
      const { domain } = await this._tenantDataManager.getTenant(this.context.tenantId)
      if (domain) {
        return `https://${domain}/api`
      }
    }
    return getTenantApiUrl(this.context) + '/api'
  }
}

// export interface SDKConfiguration {
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

// // export class Configuration implements SDKConfiguration {
// //   private _authClient: APIAuthClient
// //   private _tenantData: TenantManager
// //   public isKiboHosted: boolean
// //   private configuration: ConfigurationParameters
// //   constructor(configurationParams?: ConfigurationParameters | ApiExtensionContext) {
// //     if ((this.isKiboHosted = isKiboHosted())) {
// //       this.configuration = new KiboHostedConfiguration(configurationParams as ApiExtensionContext)
// //     } else {
// //       this.configuration = configurationParams as ConfigurationParameters
// //       const { sharedSecret, clientId, authHost = constants.defaults.AUTH_HOST } = this.configuration
// //       if (sharedSecret && clientId && authHost) {
// //         this._authClient = new APIAuthClient(
// //           { sharedSecret, clientId, authHost } as any,
// //           fetch,
// //           null
// //         )
// //       }
// //       this._tenantData = new TenantManager(this._authClient, authHost)
// //     }
// //   }
// //   async getAccessToken(): Promise<string> {
// //     return this._authClient.getAccessToken()
// //   }
// //   set config(configuration: Configuration) {
// //     this.configuration = configuration
// //   }
// //   get basePath(): string {
// //     return this.configuration.basePath
// //   }
// //   get apiHost(): string {
// //     return this.configuration.apiHost
// //   }
// //   get fetchApi(): FetchAPI | undefined {
// //     return this.configuration.fetchApi
// //   }
// //   get middleware(): Middleware[] {
// //     return this.configuration.middleware || []
// //   }
// //   get headers(): HTTPHeaders | undefined {
// //     return getApiHeaders(this.configuration as any)
// //   }
// //   get credentials(): RequestCredentials | undefined {
// //     return this.configuration.credentials
// //   }
// //   get tenantId(): string | undefined {
// //     return this.configuration.tenantId
// //   }
// //   get siteId(): string | undefined {
// //     return this.configuration.siteId
// //   }
// //   get currency(): string | undefined {
// //     return this.configuration.currency
// //   }
// //   get catalog(): string | undefined {
// //     return this.configuration.catalog
// //   }
// //   get masterCatalog(): string | undefined {
// //     return this.configuration.masterCatalog
// //   }
// //   get locale(): string | undefined {
// //     return this.configuration.locale
// //   }
// //   get clientId(): string | undefined {
// //     return this.configuration.clientId
// //   }
// //   get sharedSecret(): string | undefined {
// //     return this.configuration.sharedSecret
// //   }
// //   get authHost(): string {
// //     return this.configuration.authHost || constants.defaults.AUTH_HOST
// //   }
// //   get appClaims(): string {
// //     return this.configuration.appClaims
// //   }
// //   get userClaims(): string {
// //     return this.configuration.userClaims
// //   }
// //   async getBaseAPIUrl(template?: string): Promise<string> {
// //     if (template?.includes('{homePod}') && this.authHost) {
// //       return template.replaceAll('{homePod}', this.authHost)
// //     }
// //     if (this.basePath) {
// //       return this.basePath
// //     }
// //     if (this.apiHost) {
// //       return `https://${this.apiHost}/api`
// //     }
// //     const { domain } = await this._tenantData.getTenant(this.configuration.tenantId)
// //     if (domain) {
// //       return `https://${domain}/api`
// //     }
// //     return getTenantApiUrl(this.configuration) + '/api'
// //   }
// //   public clearUserClaims() {
// //     this.configuration.userClaims = null
// //   }
// //   public setUserClaims(userClaims: string) {
// //     this.configuration.userClaims = userClaims
// //   }
// //   get queryParamsStringify(): (params: HTTPQuery) => string {
// //     return this.configuration.queryParamsStringify || querystring
// //   }
// //   get accessToken(): ((name?: string, scopes?: string[]) => string | Promise<string>) | undefined {
// //     const accessToken = this.configuration.accessToken
// //     if (accessToken) {
// //       return typeof accessToken === 'function' ? accessToken : async () => accessToken
// //     }
// //     if (this._authClient) {
// //       return async () => this._authClient.getAccessToken()
// //     }
// //     return undefined
// //   }

// //   static fromEnv() {
// //     // return new Configuration(getConfigFromEnv())
// //   }
// // }
