import { Configuration } from '../../../src/client-runtime/configuration'
import { APIAuthClient } from '@kibocommerce/sdk-authentication'

const mockAuthClientGetToken = jest.fn(async () => {
  return 'accessToken'
})
jest.mock('@kibocommerce/sdk-authentication', () => ({
  APIAuthClient: jest.fn().mockImplementation(() => {
    return {
      getAccessToken: mockAuthClientGetToken,
    }
  }),
}))
jest.mock('../../../src/client-runtime/tenant-data-manager', () => ({
  TenantManager: jest.fn().mockImplementation(() => {
    return {
      getTenant: jest.fn(async () => {
        return {}
      }),
      getSite: jest.fn(async () => {
        return {}
      }),
    }
  }),
}))

describe('unit test @kibocommerce/rest-sdk/client-runtime/configuration ', function () {
  it('should get authhost url (homePod) from config', async function () {
    const params = {
      tenantId: 26507,
      siteId: 41315,
      catalog: 1,
      masterCatalog: 1,
      sharedSecret: '12345_Secret',
      clientId: 'KIBO_APP.1.0.0.Release',
      pciHost: 'pmts.mozu.com',
      authHost: 'home.mozu.com',
      apiEnv: 'sandbox',
    }
    const config = new Configuration(params as any)
    const authHost = await config.getBaseAPIUrl('https://{homePod}/')
    expect(authHost).toEqual('https://home.mozu.com/')
  })
  it('should get apihost (tenantPod) from config', async function () {
    const params = {
      tenantId: 26507,
      siteId: 41315,
      catalog: 1,
      masterCatalog: 1,
      sharedSecret: '12345_Secret',
      clientId: 'KIBO_APP.1.0.0.Release',
      pciHost: 'pmts.mozu.com',
      authHost: 'home.mozu.com',
      apiEnv: 'sandbox',
    }
    const config = new Configuration(params as any)
    const authHost = await config.getBaseAPIUrl('homePod')
    expect(authHost).toEqual('https://t26507-s41315.sandbox.mozu.com/api')
  })

  describe('when getting middleware from config', function () {
    it('should return arry of 2 middleware items', async function () {
      let params = {
        middleware: [
          {
            pre: async (context: any) => {},
            post: async (context: any) => {},
            onError: async (context: any) => {},
          },
          {
            onError: async (context: any) => {},
          },
        ],
      }
      const config = new Configuration(params)
      expect(config.middleware.length).toEqual(params.middleware.length)
    })
    it('should empty middleware array', async function () {
      let params = {}
      const config = new Configuration(params)
      expect(config.middleware.length).toEqual(0)
    })
  })
  describe('when accesstoken is provided as parameter ', function () {
    it('should return accesstoken as provided string ', async function () {
      const params = {
        tenantId: 26507,
        siteId: 41315,
        catalog: 1,
        masterCatalog: 1,
        sharedSecret: '12345_Secret',
        clientId: 'KIBO_APP.1.0.0.Release',
        pciHost: 'pmts.mozu.com',
        authHost: 'home.mozu.com',
        apiEnv: 'sandbox',
        accessToken: 'token',
      }
      const config = new Configuration(params as any)
      const tokenAccessor = config.accessToken as any
      const token = await tokenAccessor()
      expect(token).toEqual('token')
    })
    it('should call provided accesstoken as function', async function () {
      const params = {
        tenantId: 26507,
        siteId: 41315,
        catalog: 1,
        masterCatalog: 1,
        sharedSecret: '12345_Secret',
        clientId: 'KIBO_APP.1.0.0.Release',
        pciHost: 'pmts.mozu.com',
        authHost: 'home.mozu.com',
        apiEnv: 'sandbox',
        accessToken: jest.fn().mockResolvedValue('token'),
      }
      const config = new Configuration(params as any)
      const tokenAccessor = config.accessToken as any
      const token = await tokenAccessor()
      expect(token).toEqual('token')
    })
  })
  describe('when accesstoken is not provided as parameter ', function () {
    it('should use config values to make API oauth call', async function () {
      const params = {
        tenantId: 26507,
        siteId: 41315,
        catalog: 1,
        masterCatalog: 1,
        sharedSecret: '12345_Secret',
        clientId: 'KIBO_APP.1.0.0.Release',
        pciHost: 'pmts.mozu.com',
        authHost: 'home.mozu.com',
        apiEnv: 'sandbox',
        accessToken: undefined,
      }
      const config = new Configuration(params as any)
      const tokenAccessor = config.accessToken as any
      const token = await tokenAccessor()

      expect(token).toEqual('accessToken')
      expect(APIAuthClient).toBeCalled()
      expect(mockAuthClientGetToken).toBeCalled()
    })
    // it('should throw an error for missing accesstoken, app-claims and client credentials ', async function () {
    //   const params = {
    //     tenantId: 26507,
    //     siteId: 41315,
    //     catalog: 1,
    //     masterCatalog: 1,
    //     pciHost: 'pmts.mozu.com',
    //     authHost: 'home.mozu.com',
    //     apiEnv: 'sandbox',
    //     accessToken: undefined,
    //   }
    //   expect(() => new Configuration(params as any)).toThrowError(
    //     'Missing required parameters: accessToken, app-claims, client-credentials'
    //   )
    // })
  })
  describe('when getting api context headers from config', function () {
    it('should build api context headers from config', async function () {
      const params = {
        tenantId: 26507,
        siteId: 41315,
        catalog: 1,
        masterCatalog: 1,
        sharedSecret: '12345_Secret',
        clientId: 'KIBO_APP.1.0.0.Release',
        pciHost: 'pmts.mozu.com',
        authHost: 'home.mozu.com',
        apiEnv: 'sandbox',
      }
      const context = new Configuration(params as any)
      const headers = context.headers
      expect(headers).toEqual({
        'x-vol-tenant': '26507',
        'x-vol-site': '41315',
        'x-vol-master-catalog': '1',
        'x-vol-catalog': '1',
        'x-vol-dataview-mode': 'LIVE',
        'x-vol-version': '1',
      })
    })
  })
  it('should clear user claims', async function () {})
})
