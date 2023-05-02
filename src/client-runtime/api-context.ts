import { ApiExtensionContext, KiboConfig } from '@/types'
import { getTenantHostFromConfig } from '../utilities'
type ApiContext = {
  accessToken?: any
  pricePlanCode?: string
  priceListCode?: string
  purchaseLocation?: string
  userClaims?: string
  region?: any
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
export class KiboHostedContext implements ApiContext {
  context?: ApiExtensionContext
  config: any
  constructor(context?: ApiExtensionContext) {
    this.context = context
    this.config = this.getHostedConfigFromEnv()
  }
  getHostedConfigFromEnv() {
    try {
      return JSON.parse(process.env.mozuHosted).sdkConfig
    } catch (error) {
      throw new Error('Mozu hosted configuration was unreadable: ' + error.message)
    }
  }
  get apiHost(): string {
    return this.config?.tenantPod
  }
  get authHost(): string {
    return this.config?.baseUrl
  }
  get tenantId(): string {
    return this.config?.tenant
  }
  get siteId(): string {
    return this.config?.site
  }
  get masterCatalog(): string {
    return this.config?.['master-catalog']
  }
  get catalog(): string {
    return this.config?.catalog
  }
  get appClaims(): string {
    return this.config?.['app-claims']
  }
  get dataViewMode(): string {
    return this.config?.['dataview-mode']
  }
  get userClaims(): string {
    return this.context?.userClaims
  }
  get purchaseLocation(): string {
    return this.context?.purchaseLocation
  }
  get priceListCode(): string {
    return this.context?.priceListCode
  }
  get pricePlanCode(): string {
    return this.context?.pricePlanCode
  }
}

export class KiboApiContext implements ApiContext {
  context: KiboConfig
  constructor(context: any) {
    this.context = context
  }
  get apiHost(): string {
    return getTenantHostFromConfig(this.context)
  }
  get authHost(): string {
    return this.context?.authHost
  }
  get pciHost(): string {
    return this.context?.pciHost
  }
  get tenantId(): string {
    return this.context?.tenantId
  }
  get sharedSecret(): string {
    return this.context?.sharedSecret
  }
  get clientId(): string {
    return this.context?.clientId
  }
  get siteId(): string {
    return this.context?.siteId
  }
  get masterCatalog(): string {
    return this.context?.masterCatalog
  }
  get catalog(): string {
    return this.context?.catalog
  }
  get appClaims(): string {
    return this.context?.appClaims
  }
  get userClaims(): string {
    return this.context?.userClaims
  }
  get dataViewMode(): string {
    return this.context?.dataViewMode
  }
  get purchaseLocation(): string {
    return this.context?.purchaseLocation
  }
  get priceListCode(): string {
    return this.context?.priceListCode
  }
  get pricePlanCode(): string {
    return this.context?.pricePlanCode
  }
  get currency(): string {
    return this.context?.currency
  }
  get region(): string {
    return this.context?.region
  }
  get locale(): string {
    return this.context?.locale
  }
  get apiEnv(): string {
    return this.context?.apiEnv
  }
  get accessToken(): ((name?: string, scopes?: string[]) => string | Promise<string>) | undefined {
    const accessToken = this.context.accessToken
    if (accessToken) {
      return typeof accessToken === 'function' ? accessToken : async () => accessToken
    }
    return
  }
  set accessToken(
    value: ((name?: string, scopes?: string[]) => string | Promise<string>) | undefined
  ) {
    this.context.accessToken = value
  }
}
