import * as utilities from '../../../src/utilities/get-api-url'

describe('unit test @kibocommerce/rest-sdk/utilties/get-api-url ', function () {
  describe('when calling getTenantHostFromConfig', function () {
    it('should return apiHost and ignore other parameters ', function () {
      let config = {
        tenantId: '123',
        siteId: '456',
        apiEnv: 'sandbox',
        region: 'euw1',
        apiHost: 'test.com',
      }
      let host = utilities.getTenantHostFromConfig(config)
      expect(host).toEqual('test.com')
    })
    it('should return an eu host with tenant & siteid in a sandbox environment ', function () {
      let config = {
        tenantId: '123',
        siteId: '456',
        apiEnv: 'sb',
        region: 'euw1',
      }
      let host = utilities.getTenantHostFromConfig(config)
      expect(host).toEqual('t123-s456.sb.euw1.kibocommerce.com')
    })
    it('should return an us host with tenant & siteid in a tp1 environment ', function () {
      let config = {
        tenantId: '123',
        siteId: '456',
        apiEnv: 'tp1',
      }
      let host = utilities.getTenantHostFromConfig(config)
      expect(host).toEqual('t123-s456.tp1.mozu.com')
    })
    it('should return an us host with tenant & siteid in a sandbox environment ', function () {
      let config = {
        tenantId: '123',
        siteId: '456',
      }
      let host = utilities.getTenantHostFromConfig(config)
      expect(host).toEqual('t123-s456.sandbox.mozu.com')
    })
  })
})
