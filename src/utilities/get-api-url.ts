import { ApiContext } from '../types/index'

const getEnvironmentType = (config: ApiContext) => {
  if (config.apiEnv) {
    return config.apiEnv
  }
  let apiEnv = config.apiEnv
  if (!apiEnv) {
    if (config.region?.startsWith('eu')) {
      apiEnv = 'sb'
    } else {
      apiEnv = 'sandbox'
    }
  }
  return apiEnv
}
const getRegionPart = (config: ApiContext) => {
  // if no apiEnv is provided and eu region, default to "sb"
  if (config.region?.startsWith('eu')) {
    return config.region
  }
  return
}
const getTopLevelDomainForRegion = (config: ApiContext) => {
  if (config.region?.startsWith('eu')) {
    return 'kibocommerce.com'
  }
  return 'mozu.com'
}
const getTenantAndSiteFromConfig = (config: ApiContext) => {
  if (config.tenantId && config.siteId) {
    return `t${config.tenantId}-s${config.siteId}`
  }
  return `t${config.tenantId}`
}
/*
  Utility function to build the tenant host from the config object.
  If the apiHost is provided, it will be used. 
  Otherwise, the tenantId, siteId, apiEnv and region will be used to build the host name.

  Example: t123-s456.sandbox.mozu.com
  Example: t123.sandbox.mozu.com
  Example: t123.tp1.mozu.com
  Example: t123-s456.sb.euw1.kibocommerce.com
*/
export const getTenantHostFromConfig = (config: ApiContext): string => {
  if (config.apiHost) return config.apiHost
  if (!config.tenantId) {
    throw new Error('Unable to build Tenant Host Name with current config.')
  }
  const tenantAndSite = getTenantAndSiteFromConfig(config)
  const regionPart = getRegionPart(config)
  const environmentType = getEnvironmentType(config)
  const topLevelDomain = getTopLevelDomainForRegion(config)
  if (regionPart) {
    return `${tenantAndSite}.${environmentType}.${regionPart}.${topLevelDomain}`
  }
  return `${tenantAndSite}.${environmentType}.${topLevelDomain}`
}

export const getTenantApiUrl = (config: ApiContext) => {
  const tenantHost = getTenantHostFromConfig(config)
  if (tenantHost.startsWith('http')) {
    return tenantHost
  }
  return `https://${tenantHost}`
}
