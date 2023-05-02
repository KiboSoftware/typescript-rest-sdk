import NodeCache from 'node-cache'

// set default API authentication cache TTL for 1 hour
const defaultTTL = 60 * 60
const tenantMemCache = new NodeCache()
const tenantDataMemCache = {
  get: async (cacheKey: string) => tenantMemCache.get(cacheKey),
  set: (cacheKey: string, data: any) => tenantMemCache.set(cacheKey, data, defaultTTL),
  has: (cacheKey: string) => tenantMemCache.has(cacheKey),
}

export { tenantDataMemCache }
