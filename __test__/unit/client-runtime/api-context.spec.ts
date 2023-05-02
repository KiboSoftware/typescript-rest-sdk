import { KiboApiContext, KiboHostedContext } from '../../../src/client-runtime/api-context'
import { mockHostedConfig } from '../../fixtures/hosted-sdk-config'

const mockContextConfig = {
  tenantId: '123',
  region: 'eu',
  siteId: '456',
  currency: 'usd',
  catalog: 1,
  masterCatalog: 2,
  locale: 'en-us',
  sharedSecret: 'secret',
  clientId: 'clientid',
  pciHost: 'pmts.mozu.com',
  authHost: 'home.mozu.com',
  apiEnv: 'sandbox',
  dataViewMode: 'live',
}
describe('unit test @kibocommerce/rest-sdk/client-runtime/api-context ', function () {
  beforeEach(function () {
    process.env.mozuHosted = undefined
  })
  describe('kibo api context', function () {
    it('should build api context from config parameters', async function () {
      const apiContext = new KiboApiContext(mockContextConfig)
      expect(apiContext.tenantId).toEqual(mockContextConfig.tenantId)
      expect(apiContext.siteId).toEqual(mockContextConfig.siteId)
      expect(apiContext.region).toEqual(mockContextConfig.region)
      expect(apiContext.siteId).toEqual(mockContextConfig.siteId)
      expect(apiContext.masterCatalog).toEqual(mockContextConfig.masterCatalog)
      expect(apiContext.catalog).toEqual(mockContextConfig.catalog)
      expect(apiContext.dataViewMode).toEqual(mockContextConfig.dataViewMode)
      expect(apiContext.locale).toEqual(mockContextConfig.locale)
      expect(apiContext.currency).toEqual(mockContextConfig.currency)
      expect(apiContext.sharedSecret).toEqual(mockContextConfig.sharedSecret)
      expect(apiContext.clientId).toEqual(mockContextConfig.clientId)
      expect(apiContext.pciHost).toEqual(mockContextConfig.pciHost)
      expect(apiContext.authHost).toEqual(mockContextConfig.authHost)
      expect(apiContext.apiEnv).toEqual(mockContextConfig.apiEnv)
    })
  })
  describe('when creating KiboHosted ApiContext', function () {
    it('should build api context from env sdkconfig', async function () {
      process.env.mozuHosted = JSON.stringify(mockHostedConfig)
      const apiContext = new KiboHostedContext()
      expect(apiContext.authHost).toEqual('http://token.mozu.com/')
      expect(apiContext.apiHost).toEqual('http://tenant.mozu.com/')
      expect(apiContext.tenantId).toEqual('123')
      expect(apiContext.siteId).toEqual('456')
      expect(apiContext.masterCatalog).toEqual('1')
      expect(apiContext.catalog).toEqual('2')
      expect(apiContext.dataViewMode).toEqual('Live')
    })
    it('should set user claims, purchase location, price list from arcjs context', async function () {
      process.env.mozuHosted = JSON.stringify(mockHostedConfig)
      const apiContext = new KiboHostedContext({
        userClaims: 'user',
        purchaseLocation: 'US',
        priceListCode: '123',
      })
      expect(apiContext.userClaims).toEqual('user')
      expect(apiContext.purchaseLocation).toEqual('US')
      expect(apiContext.priceListCode).toEqual('123')
    })
    it('should throw error if env sdkconfig is not readable', async function () {
      // this is regex expression to check for message " Mozu hosted configuration was unreadable:"

      expect(() => new KiboHostedContext()).toThrowError(
        /.*Mozu hosted configuration was unreadable:.*/
      )
    })
  })
})
