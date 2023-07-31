# KiboCommerce Typescript Rest SDK

## Prerequisites 
* NodeJS
* KiboCommerce Developer Account
* KiboCommerce Application ClientID / Secret
* KiboCommerce Tenant
  
## Getting Started

Install package

```bash
npm install @kibocommerce/rest-sdk
```

Create env file (optional)

```bash
KIBO_LOCALE=
KIBO_TENANT=
KIBO_SITE=
KIBO_MASTER_CATALOG=
KIBO_CATALOG=
KIBO_CURRENCY=
KIBO_AUTH_HOST=
KIBO_CLIENT_ID=
KIBO_SHARED_SECRET=
KIBO_API_ENV=
```

## Create an API Client

1. Import and create a Configuration object
2. Import API client and pass it as an argument to your client constructor

```typescript
import { Configuration } from '@kibocommerce/rest-sdk'
import { ProductSearchApi } from '@kibocommerce/rest-sdk/clients/CatalogStorefront'

const configuration = new Configuration({
  tenantId: 26507,
  siteId: 41315,
  catalog: 1,
  masterCatalog: 1,
  sharedSecret: '12345_Secret',
  clientId: 'KIBO_APP.1.0.0.Release',
  pciHost: 'pmts.mozu.com',
  authHost: 'home.mozu.com',
  apiEnv: 'sandbox',
})
const client = new ProductSearchApi(configuration)
const response = await client.storefrontSearch({ query: 'shoes' })
```

## Locating the API Clients

Clients are separated by different domain and should align with the [Kibo API Docs](https://apidocs.kibocommerce.com/)
You can find and import these under the `clients` folder

```typescript
import { SomeApi } from '@kibocommerce/rest-sdk/clients/*'
```

For example, If you are looking for APIs under the "Inventory" section of the [documentation](https://apidocs.kibocommerce.com/?spec=inventory#overview) you can find the related Api clients under `'@kibocommerce/rest-sdk/clients/Inventory'`

```typescript
import { InventoryApi } from '@kibocommerce/rest-sdk/clients/Inventory'

const client = new InventoryApi(config)
const resp = await client.getInventory({ items: [{ upc: '1234' }] })
```

## Creating API Client using Environment Variables

```typescript
import 'dotenv/config'
import { Configuration } from '@kibocommerce/rest-sdk'
import { ProductSearchApi } from '@kibocommerce/rest-sdk/clients/CatalogStorefront'

// create a configuration object from ENV variables (note: you must load env variables yourself)
const configuration = Configuration.fromEnv()
// create new api client instance with configuration
const client = new ProductSearchApi(configuration)
// perform api calls
const response = await client.storefrontSearch({ query: 'shoes' })
```

## Middleware

Every API client supports custom middleware that can execute before and after request execution and on any error during the request.

Define a class that implements the Middleware interface and provide to the configuration object.

Example use case would be request logging

```typescript
// LoggerMiddleware.ts
import {
  Middleware,
  RequestContext,
  ResponseContext,
  FetchParams,
  ErrorContext,
} from '@kibocommerce/rest-sdk/types'

export class LoggerMiddleware implements Middleware {
  public async pre(context: RequestContext): Promise<FetchParams | void> {
    console.log(`sending METHOD: ${context.init.method} URL: ${context.url}`)
  }
  public async post(context: ResponseContext): Promise<Response | void> {
    console.log(`response STATUS: ${context.response.status}`)
  }
  public async onError(context: ErrorContext): Promise<Response | void> {
    console.error('logging error', context.error)
  }
}
```

```typescript
import { Configuration } from '@kibocommerce/rest-sdk'
import { ProductSearchApi } from '@kibocommerce/rest-sdk/clients/CatalogStorefront'

const loggerMiddleware = new LoggerMiddleware()
const configuration = new Configuration({
  tenantId: 26507,
  siteId: 41315,
  catalog: 1,
  masterCatalog: 1,
  sharedSecret: '12345_Secret',
  clientId: 'KIBO_APP.1.0.0.Release',
  pciHost: 'pmts.mozu.com',
  authHost: 'home.mozu.com',
  apiEnv: 'sandbox',
  middleware: [loggerMiddleware],
})
const client = new ProductSearchApi(configuration)
```

Middleware can also be added after an Api client has been created

```typescript
import { Configuration } from '@kibocommerce/rest-sdk'
import { ProductSearchApi } from '@kibocommerce/rest-sdk/clients/CatalogStorefront'

const loggerMiddleware = new LoggerMiddleware()
const client = new ProductSearchApi(configuration)
client.withMiddleware([loggerMiddleware])
```

## Issues
