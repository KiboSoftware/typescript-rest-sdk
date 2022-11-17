import { KiboConfig } from '../types/index'

export const getApiUrl = (config: KiboConfig) => {
  if (config.apiHost) return `https://${config.apiHost}`

  if (config.tenantId && config.siteId && config.apiEnv)
    return `https://t${config.tenantId}-s${config.siteId}.${config.apiEnv}.mozu.com`

  if (config.tenantId && config.apiEnv)
    return `https://t${config.tenantId}.${config.apiEnv}.mozu.com`
}
