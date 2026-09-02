/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Admin Services
 * <div id=\"overview_CATALOG_ADMIN\">             <h2>CATALOG ADMINISTRATION</h2>             <p>The Catalog Administration APIs are a collection of resources for configuring the catalogs and products offered to your shoppers, including                 discounts and coupon sets, faceting, price lists, and different types or variations of products. See the                 <a href=\"/concept-guides/catalog\">Catalog user guides</a>                 for information about the related features in the Unified Commerce Admin.</p>             <p>Use the <strong>Attributes</strong> resource to manage localization and attribute configurations for your catalogs. This current version of the Attributes API includes localizedContent to                 support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the legacy API model. If                 you were a client prior to May 2024 and have upgraded your implementation to support this feature,                 you can still access attribute data that has not yet been rewritten to the new model by providing                 an x-api-version header set to \"1\". </p>             <p>Use the <strong>Categories</strong> resource to organize products and control where they appear on the storefront. Create                 and maintain a hierarchy of categories and subcategories where the site will store properties. This current version of the Categories API includes localizedContent to                 support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the legacy API model. If                 you were a client prior to May 2024 and have upgraded your implementation to support this feature,                 you can still access category data that has not yet been rewritten to the new model by providing                 an x-api-version header set to \"1\". </p>             <p>Use the <strong>Coupon Sets</strong> resource to view and create coupon sets. You can use coupon sets to group multiple                 coupon codes together and associate them with one or more discounts.</p>             <p>Use the <strong>Currency</strong> resource to manage the currency localization rules and exchange rates for any of the                 currencies that are supported for placing orders in.</p>             <p>Use the <strong>Discounts</strong> and <strong>Discount Settings</strong> resources to define and manage discounts to apply to products, product categories, or                 orders. This current version of the Discounts API includes localizedContent to                 support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the legacy Products API model. If                 you were a client prior to May 2024 and have upgraded your implementation to support this feature,                 you can still access discount data that has not yet been rewritten to the new model by providing                 an x-api-version header set to \"1\". </p>             <p>Use the <strong>Facets</strong> resource to manage the facets shoppers use to filter product display results on a                 storefront. Facets can include categories, product attributes, or prices, and use either a range of                 values or discrete values.</p>             <p>Use the <strong>Master Catalog</strong> resource to view details of the master catalogs associated with a tenant and to                 manage the product publishing mode for each master catalog.</p>             <p>Use the <strong>Price Lists</strong> resources to view and create price lists. You can use price lists to override the                 catalog pricing of products for specific customer segments and/or sites.</p>             <p>Use the <strong>Products</strong>, <strong>Product Types/Extras/Options/Properties</strong>, and <strong>Product Sort Definitions</strong> resources to create new product definitions in the master catalog and determine which                 catalogs will feature products. This current version of the Products API includes localizedContent to                 support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the legacy Products API model. If                 you were a client prior to May 2024 and have upgraded your implementation to support this feature,                 you can still access product data that has not yet been rewritten to the new model by providing                 an x-api-version header set to \"1\".</p>             <p>Use the <strong>Publishing</strong> resource to publish pending product updates together as part of a set.</p>             <p>Use the <strong>Search</strong> resource to manage all settings and options for providing product search on your site, as                 well as search tuning rules.</p>         </div>
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../../../client-runtime';
import { basePathTemplate } from '../api-path';
import type {
  ProductCollectionV1,
  ProductInCatalogInfoV1,
  ProductV1,
} from '../models';


export namespace productsV1ApiParams { 
    export interface AddProduct2Request {
        batchJobCode?: string;
        responseFields?: string;
        productV1?: ProductV1;
    }
    export interface AddProductInCatalog1Request {
        productCode: string;
        responseFields?: string;
        productInCatalogInfoV1?: ProductInCatalogInfoV1;
    }
    export interface GetProduct5Request {
        productCode: string;
        responseGroups?: string;
        responseFields?: string;
    }
    export interface GetProductInCatalog3Request {
        productCode: string;
        catalogId: number;
        responseFields?: string;
    }
    export interface GetProductInCatalogs4Request {
        productCode: string;
        responseFields?: string;
    }
    export interface GetProducts6Request {
        startIndex?: number;
        pageSize?: number;
        sortBy?: string;
        responseGroups?: string;
        filter?: string;
        q?: string;
        qLimit?: number;
        noCount?: boolean;
        responseFields?: string;
    }
    export interface UpdateProduct9Request {
        productCode: string;
        batchJobCode?: string;
        responseFields?: string;
        productV1?: ProductV1;
    }
    export interface UpdateProductInCatalog7Request {
        productCode: string;
        catalogId: number;
        responseFields?: string;
        productInCatalogInfoV1?: ProductInCatalogInfoV1;
    }
    export interface UpdateProductInCatalogs8Request {
        productCode: string;
        responseFields?: string;
        productInCatalogInfoV1?: Array<ProductInCatalogInfoV1>;
    }
}
/**
* ProductsV1ApiService - interface
* 
* @export
* @interface ProductsV1Api
*/
export interface ProductsV1ApiService {
    /**
    * Creates a new product. This is the legacy version of the Products API,  which allows you to access product data that hasn\'t yet been rewritten to the newer  API model with localizedContent. If possible, Kibo recommends calling the /products endpoint with an x-api-version header set to \"1\" instead of using this V1 endpoint (as it may be deprecated at some point). This is only necessary if you upgraded your implementation to use the new API version by default to  support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>.
    * @summary Add Product
    * @param {string} [batchJobCode] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {ProductV1} [productV1] Properties of the new product. Required properties: ProductCode, Content.ProductName, and Price.ListPrice. Mozu.ProductAdmin.Contracts.Product
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductsV1ApiInterface
    */
    addProduct2Raw(requestParameters: productsV1ApiParams.AddProduct2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductV1>>;

    /**
    * Creates a new product. This is the legacy version of the Products API,  which allows you to access product data that hasn\'t yet been rewritten to the newer  API model with localizedContent. If possible, Kibo recommends calling the /products endpoint with an x-api-version header set to \"1\" instead of using this V1 endpoint (as it may be deprecated at some point). This is only necessary if you upgraded your implementation to use the new API version by default to  support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>.
    * Add Product
    */
    addProduct2(requestParameters: productsV1ApiParams.AddProduct2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductV1>;

    /**
    * Adds a new product to your catalogs. This is the legacy version of the Products API, which allows you to access product data that hasn\'t yet been rewritten to the newer API model with localizedContent. If possible, Kibo recommends calling the /products endpoint with an x-api-version header set to \"1\" instead of using this V1 endpoint (as it may be deprecated at some point). This is only necessary if you upgraded your implementation to use the new API version by default to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>.
    * @summary Add Product in Catalogs
    * @param {string} productCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {ProductInCatalogInfoV1} [productInCatalogInfoV1] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductsV1ApiInterface
    */
    addProductInCatalog1Raw(requestParameters: productsV1ApiParams.AddProductInCatalog1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductInCatalogInfoV1>>;

    /**
    * Adds a new product to your catalogs. This is the legacy version of the Products API, which allows you to access product data that hasn\'t yet been rewritten to the newer API model with localizedContent. If possible, Kibo recommends calling the /products endpoint with an x-api-version header set to \"1\" instead of using this V1 endpoint (as it may be deprecated at some point). This is only necessary if you upgraded your implementation to use the new API version by default to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>.
    * Add Product in Catalogs
    */
    addProductInCatalog1(requestParameters: productsV1ApiParams.AddProductInCatalog1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductInCatalogInfoV1>;

    /**
    * Retrieves details about a product based on the specified response group. This is the legacy version of the Products API,  which allows you to access product data that hasn\'t yet been rewritten to the newer  API model with localizedContent. If possible, Kibo recommends calling the /products endpoint with an x-api-version header set to \"1\" instead of using this V1 endpoint (as it may be deprecated at some point). This is only necessary if you upgraded your implementation to use the new API version by default to  support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>.
    * @summary Get Product
    * @param {string} productCode Merchant-created code associated with the product, for example, a SKU. Required.
    * @param {string} [responseGroups] Used to get more specific information from the request. For example to get discounts applied to a product use the AppliedProducts response group. Available response groups: ApplicableDiscounts, VariationOptions, and BaseProductCode.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductsV1ApiInterface
    */
    getProduct5Raw(requestParameters: productsV1ApiParams.GetProduct5Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductV1>>;

    /**
    * Retrieves details about a product based on the specified response group. This is the legacy version of the Products API,  which allows you to access product data that hasn\'t yet been rewritten to the newer  API model with localizedContent. If possible, Kibo recommends calling the /products endpoint with an x-api-version header set to \"1\" instead of using this V1 endpoint (as it may be deprecated at some point). This is only necessary if you upgraded your implementation to use the new API version by default to  support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>.
    * Get Product
    */
    getProduct5(requestParameters: productsV1ApiParams.GetProduct5Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductV1>;

    /**
    * Retrieves a product in a particular catalog. This is the legacy version of the Products API, which allows you to access product data that hasn\'t yet been rewritten to the newer API model with localizedContent. If possible, Kibo recommends calling the /products endpoint with an x-api-version header set to \"1\" instead of using this V1 endpoint (as it may be deprecated at some point). This is only necessary if you upgraded your implementation to use the new API version by default to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>.
    * @summary Get Product in Catalog
    * @param {string} productCode 
    * @param {number} catalogId 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductsV1ApiInterface
    */
    getProductInCatalog3Raw(requestParameters: productsV1ApiParams.GetProductInCatalog3Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductInCatalogInfoV1>>;

    /**
    * Retrieves a product in a particular catalog. This is the legacy version of the Products API, which allows you to access product data that hasn\'t yet been rewritten to the newer API model with localizedContent. If possible, Kibo recommends calling the /products endpoint with an x-api-version header set to \"1\" instead of using this V1 endpoint (as it may be deprecated at some point). This is only necessary if you upgraded your implementation to use the new API version by default to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>.
    * Get Product in Catalog
    */
    getProductInCatalog3(requestParameters: productsV1ApiParams.GetProductInCatalog3Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductInCatalogInfoV1>;

    /**
    * Retrieve existing products across all catalog. This is the legacy version of the Products API, which allows you to access product data that hasn\'t yet been rewritten to the newer API model with localizedContent. If possible, Kibo recommends calling the /products endpoint with an x-api-version header set to \"1\" instead of using this V1 endpoint (as it may be deprecated at some point). This is only necessary if you upgraded your implementation to use the new API version by default to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>.
    * @summary Get Products in Catalogs
    * @param {string} productCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductsV1ApiInterface
    */
    getProductInCatalogs4Raw(requestParameters: productsV1ApiParams.GetProductInCatalogs4Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProductInCatalogInfoV1>>>;

    /**
    * Retrieve existing products across all catalog. This is the legacy version of the Products API, which allows you to access product data that hasn\'t yet been rewritten to the newer API model with localizedContent. If possible, Kibo recommends calling the /products endpoint with an x-api-version header set to \"1\" instead of using this V1 endpoint (as it may be deprecated at some point). This is only necessary if you upgraded your implementation to use the new API version by default to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>.
    * Get Products in Catalogs
    */
    getProductInCatalogs4(requestParameters: productsV1ApiParams.GetProductInCatalogs4Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProductInCatalogInfoV1>>;

    /**
    * Retrieves a list of products according to any specified filter criteria and sort options. This is the legacy version of the Products API,  which allows you to access product data that hasn\'t yet been rewritten to the newer  API model with localizedContent. If possible, Kibo recommends calling the /products endpoint with an x-api-version header set to \"1\" instead of using this V1 endpoint (as it may be deprecated at some point). This is only necessary if you upgraded your implementation to use the new API version by default to  support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>.
    * @summary Get Products
    * @param {number} [startIndex] Used to page results from a query. Indicates the zero-based offset in the complete result set where the returned entities begin. For example, with a PageSize of 25, to get the 51st through the 75th items, startIndex&#x3D;3. The default value is 0.
    * @param {number} [pageSize] Used to page results from a query. Indicates the maximum number of entities to return from a single query. The default value is 20 and the maximum value is 200.
    * @param {string} [sortBy] The element to sort the results by and the order in which the results appear. Either ascending or descending order. For example, to sort the results by “ID” ascending then by “CreateDate” descending, use: id asc,createdate desc.
    * @param {string} [responseGroups] Used to get more specific information from the request. For example to get discounts applied to a product use the AppliedProducts response group. Available response groups: ApplicableDiscounts, VariationOptions, and BaseProductCode.
    * @param {string} [filter] A set of filter expressions representing the search parameters for a query: eq&#x3D;equals, ne&#x3D;not equals, gt&#x3D;greater than, lt &#x3D; less than or equals, gt &#x3D; greater than or equals, lt &#x3D; less than or equals, sw &#x3D; starts with, or cont &#x3D; contains. Optional.
    * @param {string} [q] 
    * @param {number} [qLimit] 
    * @param {boolean} [noCount] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductsV1ApiInterface
    */
    getProducts6Raw(requestParameters: productsV1ApiParams.GetProducts6Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductCollectionV1>>;

    /**
    * Retrieves a list of products according to any specified filter criteria and sort options. This is the legacy version of the Products API,  which allows you to access product data that hasn\'t yet been rewritten to the newer  API model with localizedContent. If possible, Kibo recommends calling the /products endpoint with an x-api-version header set to \"1\" instead of using this V1 endpoint (as it may be deprecated at some point). This is only necessary if you upgraded your implementation to use the new API version by default to  support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>.
    * Get Products
    */
    getProducts6(requestParameters: productsV1ApiParams.GetProducts6Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductCollectionV1>;

    /**
    * Modifies an existing product. This is the legacy version of the Products API, which allows you to access product data that hasn\'t yet been rewritten to the newer API model with localizedContent. If possible, Kibo recommends calling the /products endpoint with an x-api-version header set to \"1\" instead of using this V1 endpoint (as it may be deprecated at some point). This is only necessary if you upgraded your implementation to use the new API version by default to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>.
    * @summary Update Product
    * @param {string} productCode Merchant-created code associated with the product, for example, a SKU. Required.
    * @param {string} [batchJobCode] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {ProductV1} [productV1] Properties of the product that you want to update. Required properties: ProductCode, Content.ProductName, and Price.ListPrice.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductsV1ApiInterface
    */
    updateProduct9Raw(requestParameters: productsV1ApiParams.UpdateProduct9Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductV1>>;

    /**
    * Modifies an existing product. This is the legacy version of the Products API, which allows you to access product data that hasn\'t yet been rewritten to the newer API model with localizedContent. If possible, Kibo recommends calling the /products endpoint with an x-api-version header set to \"1\" instead of using this V1 endpoint (as it may be deprecated at some point). This is only necessary if you upgraded your implementation to use the new API version by default to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>.
    * Update Product
    */
    updateProduct9(requestParameters: productsV1ApiParams.UpdateProduct9Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductV1>;

    /**
    * Updates products in a particular catalog. This is the legacy version of the Products API, which allows you to access product data that hasn\'t yet been rewritten to the newer API model with localizedContent. If possible, Kibo recommends calling the /products endpoint with an x-api-version header set to \"1\" instead of using this V1 endpoint (as it may be deprecated at some point). This is only necessary if you upgraded your implementation to use the new API version by default to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>.
    * @summary Update Product in Catalog
    * @param {string} productCode 
    * @param {number} catalogId 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {ProductInCatalogInfoV1} [productInCatalogInfoV1] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductsV1ApiInterface
    */
    updateProductInCatalog7Raw(requestParameters: productsV1ApiParams.UpdateProductInCatalog7Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductInCatalogInfoV1>>;

    /**
    * Updates products in a particular catalog. This is the legacy version of the Products API, which allows you to access product data that hasn\'t yet been rewritten to the newer API model with localizedContent. If possible, Kibo recommends calling the /products endpoint with an x-api-version header set to \"1\" instead of using this V1 endpoint (as it may be deprecated at some point). This is only necessary if you upgraded your implementation to use the new API version by default to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>.
    * Update Product in Catalog
    */
    updateProductInCatalog7(requestParameters: productsV1ApiParams.UpdateProductInCatalog7Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductInCatalogInfoV1>;

    /**
    * Updates existing products across your catalogs. This is the legacy version of the Products API, which allows you to access product data that hasn\'t yet been rewritten to the newer API model with localizedContent. If possible, Kibo recommends calling the /products endpoint with an x-api-version header set to \"1\" instead of using this V1 endpoint (as it may be deprecated at some point). This is only necessary if you upgraded your implementation to use the new API version by default to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>.
    * @summary Update Products in Catalogs
    * @param {string} productCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {Array<ProductInCatalogInfoV1>} [productInCatalogInfoV1] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductsV1ApiInterface
    */
    updateProductInCatalogs8Raw(requestParameters: productsV1ApiParams.UpdateProductInCatalogs8Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProductInCatalogInfoV1>>>;

    /**
    * Updates existing products across your catalogs. This is the legacy version of the Products API, which allows you to access product data that hasn\'t yet been rewritten to the newer API model with localizedContent. If possible, Kibo recommends calling the /products endpoint with an x-api-version header set to \"1\" instead of using this V1 endpoint (as it may be deprecated at some point). This is only necessary if you upgraded your implementation to use the new API version by default to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>.
    * Update Products in Catalogs
    */
    updateProductInCatalogs8(requestParameters: productsV1ApiParams.UpdateProductInCatalogs8Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProductInCatalogInfoV1>>;

}


/**
 * 
 */
export class ProductsV1Api extends runtime.BaseAPI implements ProductsV1ApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Creates a new product. This is the legacy version of the Products API,  which allows you to access product data that hasn\'t yet been rewritten to the newer  API model with localizedContent. If possible, Kibo recommends calling the /products endpoint with an x-api-version header set to \"1\" instead of using this V1 endpoint (as it may be deprecated at some point). This is only necessary if you upgraded your implementation to use the new API version by default to  support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>.
     * Add Product
     */


    async addProduct2Raw(requestParameters: productsV1ApiParams.AddProduct2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductV1>> {
        const queryParameters: any = {};

        if (requestParameters.batchJobCode !== undefined) {
            queryParameters['batchJobCode'] = requestParameters.batchJobCode;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/productsV1`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.productV1,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates a new product. This is the legacy version of the Products API,  which allows you to access product data that hasn\'t yet been rewritten to the newer  API model with localizedContent. If possible, Kibo recommends calling the /products endpoint with an x-api-version header set to \"1\" instead of using this V1 endpoint (as it may be deprecated at some point). This is only necessary if you upgraded your implementation to use the new API version by default to  support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>.
     * Add Product
     */
    async addProduct2(requestParameters: productsV1ApiParams.AddProduct2Request = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductV1> {
        const response = await this.addProduct2Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Adds a new product to your catalogs. This is the legacy version of the Products API, which allows you to access product data that hasn\'t yet been rewritten to the newer API model with localizedContent. If possible, Kibo recommends calling the /products endpoint with an x-api-version header set to \"1\" instead of using this V1 endpoint (as it may be deprecated at some point). This is only necessary if you upgraded your implementation to use the new API version by default to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>.
     * Add Product in Catalogs
     */


    async addProductInCatalog1Raw(requestParameters: productsV1ApiParams.AddProductInCatalog1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductInCatalogInfoV1>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling addProductInCatalog1.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/productsV1/{productCode}/ProductInCatalogs`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.productInCatalogInfoV1,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Adds a new product to your catalogs. This is the legacy version of the Products API, which allows you to access product data that hasn\'t yet been rewritten to the newer API model with localizedContent. If possible, Kibo recommends calling the /products endpoint with an x-api-version header set to \"1\" instead of using this V1 endpoint (as it may be deprecated at some point). This is only necessary if you upgraded your implementation to use the new API version by default to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>.
     * Add Product in Catalogs
     */
    async addProductInCatalog1(requestParameters: productsV1ApiParams.AddProductInCatalog1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductInCatalogInfoV1> {
        const response = await this.addProductInCatalog1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves details about a product based on the specified response group. This is the legacy version of the Products API,  which allows you to access product data that hasn\'t yet been rewritten to the newer  API model with localizedContent. If possible, Kibo recommends calling the /products endpoint with an x-api-version header set to \"1\" instead of using this V1 endpoint (as it may be deprecated at some point). This is only necessary if you upgraded your implementation to use the new API version by default to  support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>.
     * Get Product
     */


    async getProduct5Raw(requestParameters: productsV1ApiParams.GetProduct5Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductV1>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling getProduct5.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseGroups !== undefined) {
            queryParameters['responseGroups'] = requestParameters.responseGroups;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/productsV1/{productCode}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves details about a product based on the specified response group. This is the legacy version of the Products API,  which allows you to access product data that hasn\'t yet been rewritten to the newer  API model with localizedContent. If possible, Kibo recommends calling the /products endpoint with an x-api-version header set to \"1\" instead of using this V1 endpoint (as it may be deprecated at some point). This is only necessary if you upgraded your implementation to use the new API version by default to  support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>.
     * Get Product
     */
    async getProduct5(requestParameters: productsV1ApiParams.GetProduct5Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductV1> {
        const response = await this.getProduct5Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a product in a particular catalog. This is the legacy version of the Products API, which allows you to access product data that hasn\'t yet been rewritten to the newer API model with localizedContent. If possible, Kibo recommends calling the /products endpoint with an x-api-version header set to \"1\" instead of using this V1 endpoint (as it may be deprecated at some point). This is only necessary if you upgraded your implementation to use the new API version by default to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>.
     * Get Product in Catalog
     */


    async getProductInCatalog3Raw(requestParameters: productsV1ApiParams.GetProductInCatalog3Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductInCatalogInfoV1>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling getProductInCatalog3.');
        }

        if (requestParameters.catalogId === null || requestParameters.catalogId === undefined) {
            throw new runtime.RequiredError('catalogId','Required parameter requestParameters.catalogId was null or undefined when calling getProductInCatalog3.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/productsV1/{productCode}/ProductInCatalogs/{catalogId}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"catalogId"}}`, encodeURIComponent(String(requestParameters.catalogId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a product in a particular catalog. This is the legacy version of the Products API, which allows you to access product data that hasn\'t yet been rewritten to the newer API model with localizedContent. If possible, Kibo recommends calling the /products endpoint with an x-api-version header set to \"1\" instead of using this V1 endpoint (as it may be deprecated at some point). This is only necessary if you upgraded your implementation to use the new API version by default to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>.
     * Get Product in Catalog
     */
    async getProductInCatalog3(requestParameters: productsV1ApiParams.GetProductInCatalog3Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductInCatalogInfoV1> {
        const response = await this.getProductInCatalog3Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve existing products across all catalog. This is the legacy version of the Products API, which allows you to access product data that hasn\'t yet been rewritten to the newer API model with localizedContent. If possible, Kibo recommends calling the /products endpoint with an x-api-version header set to \"1\" instead of using this V1 endpoint (as it may be deprecated at some point). This is only necessary if you upgraded your implementation to use the new API version by default to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>.
     * Get Products in Catalogs
     */


    async getProductInCatalogs4Raw(requestParameters: productsV1ApiParams.GetProductInCatalogs4Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProductInCatalogInfoV1>>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling getProductInCatalogs4.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/productsV1/{productCode}/ProductInCatalogs`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieve existing products across all catalog. This is the legacy version of the Products API, which allows you to access product data that hasn\'t yet been rewritten to the newer API model with localizedContent. If possible, Kibo recommends calling the /products endpoint with an x-api-version header set to \"1\" instead of using this V1 endpoint (as it may be deprecated at some point). This is only necessary if you upgraded your implementation to use the new API version by default to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>.
     * Get Products in Catalogs
     */
    async getProductInCatalogs4(requestParameters: productsV1ApiParams.GetProductInCatalogs4Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProductInCatalogInfoV1>> {
        const response = await this.getProductInCatalogs4Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a list of products according to any specified filter criteria and sort options. This is the legacy version of the Products API,  which allows you to access product data that hasn\'t yet been rewritten to the newer  API model with localizedContent. If possible, Kibo recommends calling the /products endpoint with an x-api-version header set to \"1\" instead of using this V1 endpoint (as it may be deprecated at some point). This is only necessary if you upgraded your implementation to use the new API version by default to  support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>.
     * Get Products
     */


    async getProducts6Raw(requestParameters: productsV1ApiParams.GetProducts6Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductCollectionV1>> {
        const queryParameters: any = {};

        if (requestParameters.startIndex !== undefined) {
            queryParameters['startIndex'] = requestParameters.startIndex;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.sortBy !== undefined) {
            queryParameters['sortBy'] = requestParameters.sortBy;
        }

        if (requestParameters.responseGroups !== undefined) {
            queryParameters['responseGroups'] = requestParameters.responseGroups;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.q !== undefined) {
            queryParameters['q'] = requestParameters.q;
        }

        if (requestParameters.qLimit !== undefined) {
            queryParameters['qLimit'] = requestParameters.qLimit;
        }

        if (requestParameters.noCount !== undefined) {
            queryParameters['noCount'] = requestParameters.noCount;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/productsV1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a list of products according to any specified filter criteria and sort options. This is the legacy version of the Products API,  which allows you to access product data that hasn\'t yet been rewritten to the newer  API model with localizedContent. If possible, Kibo recommends calling the /products endpoint with an x-api-version header set to \"1\" instead of using this V1 endpoint (as it may be deprecated at some point). This is only necessary if you upgraded your implementation to use the new API version by default to  support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>.
     * Get Products
     */
    async getProducts6(requestParameters: productsV1ApiParams.GetProducts6Request = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductCollectionV1> {
        const response = await this.getProducts6Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Modifies an existing product. This is the legacy version of the Products API, which allows you to access product data that hasn\'t yet been rewritten to the newer API model with localizedContent. If possible, Kibo recommends calling the /products endpoint with an x-api-version header set to \"1\" instead of using this V1 endpoint (as it may be deprecated at some point). This is only necessary if you upgraded your implementation to use the new API version by default to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>.
     * Update Product
     */


    async updateProduct9Raw(requestParameters: productsV1ApiParams.UpdateProduct9Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductV1>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling updateProduct9.');
        }

        const queryParameters: any = {};

        if (requestParameters.batchJobCode !== undefined) {
            queryParameters['batchJobCode'] = requestParameters.batchJobCode;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/productsV1/{productCode}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.productV1,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Modifies an existing product. This is the legacy version of the Products API, which allows you to access product data that hasn\'t yet been rewritten to the newer API model with localizedContent. If possible, Kibo recommends calling the /products endpoint with an x-api-version header set to \"1\" instead of using this V1 endpoint (as it may be deprecated at some point). This is only necessary if you upgraded your implementation to use the new API version by default to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>.
     * Update Product
     */
    async updateProduct9(requestParameters: productsV1ApiParams.UpdateProduct9Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductV1> {
        const response = await this.updateProduct9Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates products in a particular catalog. This is the legacy version of the Products API, which allows you to access product data that hasn\'t yet been rewritten to the newer API model with localizedContent. If possible, Kibo recommends calling the /products endpoint with an x-api-version header set to \"1\" instead of using this V1 endpoint (as it may be deprecated at some point). This is only necessary if you upgraded your implementation to use the new API version by default to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>.
     * Update Product in Catalog
     */


    async updateProductInCatalog7Raw(requestParameters: productsV1ApiParams.UpdateProductInCatalog7Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductInCatalogInfoV1>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling updateProductInCatalog7.');
        }

        if (requestParameters.catalogId === null || requestParameters.catalogId === undefined) {
            throw new runtime.RequiredError('catalogId','Required parameter requestParameters.catalogId was null or undefined when calling updateProductInCatalog7.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/productsV1/{productCode}/ProductInCatalogs/{catalogId}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"catalogId"}}`, encodeURIComponent(String(requestParameters.catalogId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.productInCatalogInfoV1,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates products in a particular catalog. This is the legacy version of the Products API, which allows you to access product data that hasn\'t yet been rewritten to the newer API model with localizedContent. If possible, Kibo recommends calling the /products endpoint with an x-api-version header set to \"1\" instead of using this V1 endpoint (as it may be deprecated at some point). This is only necessary if you upgraded your implementation to use the new API version by default to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>.
     * Update Product in Catalog
     */
    async updateProductInCatalog7(requestParameters: productsV1ApiParams.UpdateProductInCatalog7Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductInCatalogInfoV1> {
        const response = await this.updateProductInCatalog7Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates existing products across your catalogs. This is the legacy version of the Products API, which allows you to access product data that hasn\'t yet been rewritten to the newer API model with localizedContent. If possible, Kibo recommends calling the /products endpoint with an x-api-version header set to \"1\" instead of using this V1 endpoint (as it may be deprecated at some point). This is only necessary if you upgraded your implementation to use the new API version by default to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>.
     * Update Products in Catalogs
     */


    async updateProductInCatalogs8Raw(requestParameters: productsV1ApiParams.UpdateProductInCatalogs8Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProductInCatalogInfoV1>>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling updateProductInCatalogs8.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/productsV1/{productCode}/ProductInCatalogs`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.productInCatalogInfoV1,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates existing products across your catalogs. This is the legacy version of the Products API, which allows you to access product data that hasn\'t yet been rewritten to the newer API model with localizedContent. If possible, Kibo recommends calling the /products endpoint with an x-api-version header set to \"1\" instead of using this V1 endpoint (as it may be deprecated at some point). This is only necessary if you upgraded your implementation to use the new API version by default to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>.
     * Update Products in Catalogs
     */
    async updateProductInCatalogs8(requestParameters: productsV1ApiParams.UpdateProductInCatalogs8Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProductInCatalogInfoV1>> {
        const response = await this.updateProductInCatalogs8Raw(requestParameters, initOverrides);
        return await response.value();
    }

}
