import { querystring } from './index'
import {
  getApiHeaders,
  constants,
  apiAuthMemCache,
  getTenantApiUrl,
  isKiboHosted,
  getConfigFromEnv,
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
        const cacheHandler = {
          getAuthTicket: async () => {
            return apiAuthMemCache.getAuthTicket(clientId)
          },
          setAuthTicket: async (authTicket: any) => {
            await apiAuthMemCache.setAuthTicket(clientId, authTicket)
          },
        }
        this._authClient = new APIAuthClient(
          { sharedSecret, clientId, authHost } as any,
          this.fetchApi,
          cacheHandler as any
        )
        this._tenantDataManager = new TenantManager(this._authClient, authHost, params.fetchApi)
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
  static fromEnv() {
    return new Configuration(getConfigFromEnv())
  }
}
