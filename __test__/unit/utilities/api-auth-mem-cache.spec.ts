import { apiAuthMemCache } from '../../../src/utilities/api-auth-mem-cache'

describe('unit test @kibocommerce/rest-sdk/utilties/api-auth-mem-cach ', function () {
  it('should set and get auth ticket in the cache', async function () {
    const ticket = {
      access_token: 'at',
      token_type: 'bearer',
      expires_in: 20,
      expires_at: 400,
      refresh_token: '',
    }
    apiAuthMemCache.setAuthTicket('123', ticket)
    const cachedTicket = await apiAuthMemCache.getAuthTicket('123')
    expect(cachedTicket).toEqual(ticket)
  })
  it('should set and get auth ticket in the cache with default ttl', async function () {
    const ticket = {
      access_token: 'at',
      token_type: 'bearer',
      expires_in: null,
      expires_at: 400,
      refresh_token: '',
    }
    apiAuthMemCache.setAuthTicket('321', ticket as any)
    const cachedTicket = await apiAuthMemCache.getAuthTicket('321')
    expect(cachedTicket).toEqual(ticket)
  })
  it('should try get an expired cache item ', async function () {
    const ticket = {
      access_token: 'at',
      token_type: 'bearer',
      expires_in: 1,
      expires_at: 400,
      refresh_token: '',
    }
    apiAuthMemCache.setAuthTicket('abc', ticket)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const cachedTicket = await apiAuthMemCache.getAuthTicket('abc')
    expect(cachedTicket).toEqual(false)
  })
})
