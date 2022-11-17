import { MemoryCache } from 'memory-cache-node'

const itemsExpirationCheckIntervalInSecs = 5 * 60
const maxItemCount = 1000000
const tenantMemCache = new MemoryCache<string, any>(
  itemsExpirationCheckIntervalInSecs,
  maxItemCount
)
const tenantCache = {
  get: async (cacheKey: string) => tenantMemCache.retrieveItemValue(cacheKey),
  add: (cacheKey: string, data: any) =>
    tenantMemCache.storeExpiringItem(cacheKey, data, itemsExpirationCheckIntervalInSecs),
  has: (cacheKey: string) => tenantMemCache.hasItem(cacheKey),
}

export { tenantCache }
