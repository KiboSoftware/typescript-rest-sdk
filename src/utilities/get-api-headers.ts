import { KiboConfig } from '../types/index'

export const getApiHeaders = (config: KiboConfig) => {
  return {
    'x-vol-tenant': config.tenantId,
    'x-vol-site': config.siteId,
    'x-vol-master-catalog': config.masterCatalog,
    'x-vol-catalog': config.catalog,
    'x-vol-dataview-mode': config.dataViewMode,
    'x-vol-version': '1', // ????
  }
}
