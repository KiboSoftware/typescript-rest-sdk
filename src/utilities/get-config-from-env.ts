import { ApiExtensionContext, KiboConfig } from '../types'
import constants from './constants'

export const getConfigFromEnv = (): any => {
  return {
    tenantId: process.env.KIBO_TENANT,
    region: process.env.KIBO_REGION,
    siteId: process.env.KIBO_SITE,
    currency: process.env.KIBO_CURRENCY,
    catalog: process.env.KIBO_CATALOG,
    masterCatalog: process.env.KIBO_MASTER_CATALOG,
    locale: process.env.KIBO_LOCALE,
    sharedSecret: process.env.KIBO_SHARED_SECRET,
    clientId: process.env.KIBO_CLIENT_ID,
    pciHost: process.env.KIBO_PCI_HOST || 'pmts.mozu.com',
    authHost: process.env.KIBO_AUTH_HOST || 'home.mozu.com',
    apiEnv: process.env.KIBO_API_ENV || 'sandbox',
    dataViewMode: process.env.KIBO_DATA_VIEW_MODE || constants.dataViewModes.LIVE,
  }
}

// type HostedConfig = {
//   baseUrl: string
//   basePciUrl: string
//   tenantPod: string
//   'app-claims': string
//   'user-claims': string
//   tenant: string
//   site: string
//   'master-catalog': string
//   catalog: string
//   'dataview-mode': string
// }
