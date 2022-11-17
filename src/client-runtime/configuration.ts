import { querystring } from './index'
import {
  getApiHeaders,
  constants,
  authenticationCache,
  getApiUrl,
  getConfigFromEnv,
} from '../utilities'
import { APIAuthClient } from '@kibocommerce/sdk-authentication'
import { TenantManager } from './tenant-manager'
import fetch from 'isomorphic-fetch'
import type { FetchAPI, Middleware, HTTPQuery, HTTPHeaders } from './index'
import type { ConfigurationParameters } from '../types'

export class Configuration {
  private _authClient: APIAuthClient
  private _tenantData: TenantManager
  constructor(private configuration: ConfigurationParameters = {}) {
    const { sharedSecret, clientId, authHost = constants.defaults.AUTH_HOST } = configuration
    if (sharedSecret && clientId && authHost) {
      this._authClient = new APIAuthClient({ sharedSecret, clientId, authHost } as any, fetch, null)
    }
    this._tenantData = new TenantManager(this._authClient, authHost)
  }
  async getBaseAPIUrl(template?: string): Promise<string> {
    if (this.basePath) {
      return this.basePath
    }
    if (template && template.includes('{homePod}')) {
      return this._buildUrlFromTemplate(template)
    }
    if (this.apiHost) {
      return `https://${this.apiHost}/api`
    }
    const { domain } = await this._tenantData.getTenant(this.configuration.tenantId)
    if (domain) {
      return `https://${domain}/api`
    }
    return getApiUrl(this.configuration) + '/api'
  }
  private _buildUrlFromTemplate(template: string) {
    template = template.replaceAll('{homePod}', this.authHost)
    return template
  }
  async getAccessToken(): Promise<string> {
    return this._authClient.getAccessToken()
  }
  set config(configuration: Configuration) {
    this.configuration = configuration
  }
  get basePath(): string {
    return this.configuration.basePath
  }
  get apiHost(): string {
    return this.configuration.apiHost
  }
  get fetchApi(): FetchAPI | undefined {
    return this.configuration.fetchApi
  }
  get middleware(): Middleware[] {
    return this.configuration.middleware || []
  }
  get queryParamsStringify(): (params: HTTPQuery) => string {
    return this.configuration.queryParamsStringify || querystring
  }
  get accessToken(): ((name?: string, scopes?: string[]) => string | Promise<string>) | undefined {
    const accessToken = this.configuration.accessToken
    if (accessToken) {
      return typeof accessToken === 'function' ? accessToken : async () => accessToken
    }
    if (this._authClient) {
      return async () => this._authClient.getAccessToken()
    }
    return undefined
  }
  get jwt(): (() => string | Promise<string>) | undefined {
    const jwt = this.configuration.jwt
    if (jwt) {
      return typeof jwt === 'function' ? jwt : async () => jwt
    }
    return undefined
  }
  get headers(): HTTPHeaders | undefined {
    return getApiHeaders(this.configuration as any)
  }
  get credentials(): RequestCredentials | undefined {
    return this.configuration.credentials
  }
  get tenantId(): string | undefined {
    return this.configuration.tenantId
  }
  get siteId(): string | undefined {
    return this.configuration.siteId
  }
  get currency(): string | undefined {
    return this.configuration.currency
  }
  get catalog(): string | undefined {
    return this.configuration.catalog
  }
  get masterCatalog(): string | undefined {
    return this.configuration.masterCatalog
  }
  get locale(): string | undefined {
    return this.configuration.locale
  }
  get clientId(): string | undefined {
    return this.configuration.clientId
  }
  get sharedSecret(): string | undefined {
    return this.configuration.sharedSecret
  }
  get authHost(): string {
    return this.configuration.authHost || constants.defaults.AUTH_HOST
  }
  static fromEnv() {
    return new Configuration(getConfigFromEnv())
  }
}
