import type { AuthTicket } from '../types'
import NodeCache from 'node-cache'

// set default API authentication cache TTL for 3 hours
const defaultTTL = 60 * 60 * 3
const authTicketMemCache = new NodeCache()
const apiAuthMemCache = {
  getAuthTicket: async (cacheKey: string): Promise<AuthTicket> =>{
    if ( !cacheKey ) {
      cacheKey  ="default";
    }
    return authTicketMemCache.has(cacheKey) && authTicketMemCache.get(cacheKey)
  },    
  setAuthTicket: (cacheKey: string, data: AuthTicket) =>{
    if ( !data ) {
      data = <AuthTicket><unknown>cacheKey;
      cacheKey  ="default";
    }
    return authTicketMemCache.set(cacheKey, data, data.expires_in || defaultTTL)
  }
    
}
export { apiAuthMemCache }
