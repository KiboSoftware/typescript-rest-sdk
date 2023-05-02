import fetch from 'isomorphic-fetch'
import { tenantDataMemCache } from '../utilities/tenant-data-mem-cache'

export class TenantManager {
  private _sdkAuth: any
  private _homeApiUrl: string

  constructor(sdkAuth: any, homeHost?: string) {
    if (!sdkAuth) {
      throw new Error('Tenant manager requires sdk auth client instance')
    }
    if (!homeHost) {
      homeHost = process.env.KIBO_AUTH_HOST || 'home.mozu.com'
    }
    this._homeApiUrl = `https://${homeHost}/api`
    this._sdkAuth = sdkAuth
  }

  async getTenant(tenantId: number | string) {
    try {
      if (tenantDataMemCache.has(tenantId.toString())) {
        return tenantDataMemCache.get(tenantId.toString())
      }
      const authToken = await this._sdkAuth.getAccessToken()
      const response = await fetch(`${this._homeApiUrl}/platform/tenants/${tenantId}`, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      if (response.status > 200) {
        throw new Error(`error fetching tenant data`)
      }
      const tenant = await response.json()
      tenantDataMemCache.set(tenantId.toString(), tenant)
      return tenant
    } catch (error) {
      throw error
    }
  }

  async getSite({ tenantId, siteId }: { tenantId: number | string; siteId: number | string }) {
    const tenant = await this.getTenant(tenantId)
    const site = tenant.sites.find((site: any) => site.siteId == siteId)
    if (!site) {
      throw new Error(`Unable to find site: ${siteId} for tenant ${tenantId}`)
    }
    return site
  }
}
