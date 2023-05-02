import fetchMock from 'jest-fetch-mock'

const tenantDataMemCache = {
  get: jest.fn(async () => {
    return {}
  }),
  set: jest.fn(),
  has: jest.fn(async () => {
    return false
  }),
}
jest.mock('../../../src/utilities/tenant-data-mem-cache', () => ({
  tenantDataMemCache: tenantDataMemCache,
}))
import { TenantManager } from '../../../src/client-runtime/tenant-data-manager'

describe('unit test @kibocommerce/rest-sdk/client-runtime/tenant-data-manager ', function () {
  const mockSDKAuth = {
    getAccessToken: jest.fn(async () => {
      return 'accessToken'
    }),
  }

  it('should fetch tenant data by tenantid ', async function () {
    tenantDataMemCache.has.mockResolvedValueOnce(false)
    fetchMock.mockResponseOnce(JSON.stringify({}))
    const tenantManager = new TenantManager(mockSDKAuth, 'http://homepod')
    const tenantData = await tenantManager.getTenant('tenantId')
    expect(tenantData).toEqual({})
  })
  it('should get tenant data from cache by tenantid', async function () {
    tenantDataMemCache.has.mockResolvedValueOnce(true)
    tenantDataMemCache.get.mockResolvedValueOnce({})
    const tenantManager = new TenantManager(mockSDKAuth, 'http://homepod')
    const tenantData = await tenantManager.getTenant('tenantId')
    expect(tenantData).toEqual({})
  })
  it('should get site from tenant by siteId  ', async function () {
    tenantDataMemCache.has.mockResolvedValueOnce(true)
    tenantDataMemCache.get.mockResolvedValueOnce({
      sites: [{ siteId: 'siteId' }],
    })
    const tenantManager = new TenantManager(mockSDKAuth, 'http://homepod')
    const siteData = await tenantManager.getSite({ tenantId: 'tenantId', siteId: 'siteId' })
    expect(siteData).toEqual({ siteId: 'siteId' })
  })
  it('should throw an error if site data is not found ', async function () {
    tenantDataMemCache.has.mockResolvedValueOnce(true)
    tenantDataMemCache.get.mockResolvedValueOnce({
      sites: [{ siteId: 'siteId' }],
    })
    const tenantManager = new TenantManager(mockSDKAuth, 'http://homepod')
    await expect(
      tenantManager.getSite({ tenantId: 'tenantId', siteId: 'siteId2' })
    ).rejects.toThrowError(`Unable to find site: siteId2 for tenant tenantId`)
  })
})
