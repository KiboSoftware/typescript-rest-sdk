import { ApiContext } from '../types/index'

export const getApiHeaders = (context: ApiContext) => {
  return {
    'x-vol-tenant': context.tenantId?.toString(),
    'x-vol-site': context.siteId?.toString(),
    'x-vol-master-catalog': context.masterCatalog?.toString(),
    'x-vol-catalog': context.catalog?.toString(),
    'x-vol-dataview-mode': context.dataViewMode || 'LIVE',
    'x-vol-version': '1', // ????
  }
}
