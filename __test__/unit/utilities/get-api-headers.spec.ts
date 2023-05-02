import { getApiHeaders } from '../../../src/utilities/get-api-headers'

describe('unit test @kibocommerce/rest-sdk/utilties/get-api-headers', function () {
  it('should build api context headers from config', function () {
    const context = {
      tenantId: '123',
      siteId: '456',
      masterCatalog: '789',
      catalog: '101112',
      dataViewMode: 'LIVE',
    }
    const contextHeaders = getApiHeaders(context)
    expect(contextHeaders).toEqual({
      'x-vol-tenant': '123',
      'x-vol-site': '456',
      'x-vol-master-catalog': '789',
      'x-vol-catalog': '101112',
      'x-vol-dataview-mode': 'LIVE',
      'x-vol-version': '1',
    })
  })
})
