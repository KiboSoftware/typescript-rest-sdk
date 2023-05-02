import type { AuthTicket } from '../types'
import NodeCache from 'node-cache'

// set default API authentication cache TTL for 3 hours
const defaultTTL = 60 * 60 * 3
const authTicketMemCache = new NodeCache()
const apiAuthMemCache = {
  getAuthTicket: async (cacheKey: string): Promise<AuthTicket> =>
    authTicketMemCache.has(cacheKey) && authTicketMemCache.get(cacheKey),
  setAuthTicket: (cacheKey: string, data: AuthTicket) =>
    authTicketMemCache.set(cacheKey, data, data.expires_in || defaultTTL),
}
export { apiAuthMemCache }
