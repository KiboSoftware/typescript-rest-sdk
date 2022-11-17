import type { AuthTicket } from '../types'
import { MemoryCache } from 'memory-cache-node'

const itemsExpirationCheckIntervalInSecs = 5 * 60
const maxItemCount = 1000000
const authTicketMemCache = new MemoryCache<string, AuthTicket>(
  itemsExpirationCheckIntervalInSecs,
  maxItemCount
)
const authenticationCache = {
  getAuthTicket: async (cacheKey: string) =>
    authTicketMemCache.hasItem(cacheKey) && authTicketMemCache.retrieveItemValue(cacheKey),
  setAuthTicket: (cacheKey: string, data: AuthTicket) =>
    authTicketMemCache.storeExpiringItem(cacheKey, data, data.expires_in),
}
export { authenticationCache }
