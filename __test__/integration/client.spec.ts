import fetchMock from 'jest-fetch-mock'
import { mockHostedConfig } from '../fixtures/hosted-sdk-config'
import { Configuration } from '../../src/client-runtime/configuration'
import { ProductSearchApi } from '../../src/clients/CatalogStorefront/apis/ProductSearchApi'

describe('integration test @kibocommerce/rest-sdk clients', function () {
  beforeEach(function () {
    process.env.mozuHosted = undefined
  })
  describe('kibo hosted (api-extensions) environment', function () {
    it('should perform product search using ProductSearchApi client', async function () {
      process.env.mozuHosted = JSON.stringify(mockHostedConfig)
    })
  })
  describe('standard nodejs environment', function () {
    it('should perform product search using ProductSearchApi client', async function () {
      fetchMock.mockResponse(JSON.stringify({}))
      const params = {}
      const config = new Configuration(params)
      const api = new ProductSearchApi(config)
      const result = await api.storefrontSearch({ query: 'stuff' })
    })
  })
})
