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
  CatalogAdminsProduct,
  CatalogAdminsProductCollection,
  ProductCodeRename,
  ProductInCatalogInfo,
  ProductTypeChangeRequest,
  ProductTypeChangeResponse,
} from '../models';


export namespace productsApiParams { 
    export interface AddProductRequest {
        batchJobCode?: string;
        responseFields?: string;
        catalogAdminsProduct?: CatalogAdminsProduct;
    }
    export interface AddProductInCatalogRequest {
        productCode: string;
        responseFields?: string;
        productInCatalogInfo?: ProductInCatalogInfo;
    }
    export interface ChangeProductTypeRequest {
        productCode: string;
        responseFields?: string;
        productTypeChangeRequest?: ProductTypeChangeRequest;
    }
    export interface DeleteProductRequest {
        productCode: string;
        batchJobCode?: string;
    }
    export interface DeleteProductInCatalogRequest {
        productCode: string;
        catalogId: number;
    }
    export interface GetProductRequest {
        productCode: string;
        responseGroups?: string;
        responseFields?: string;
    }
    export interface GetProductInCatalogRequest {
        productCode: string;
        catalogId: number;
        responseFields?: string;
    }
    export interface GetProductInCatalogsRequest {
        productCode: string;
        responseFields?: string;
    }
    export interface GetProductsRequest {
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
    export interface RenameProductCodesRequest {
        responseFields?: string;
        productCodeRename?: Array<ProductCodeRename>;
    }
    export interface UpdateProductRequest {
        productCode: string;
        batchJobCode?: string;
        responseFields?: string;
        catalogAdminsProduct?: CatalogAdminsProduct;
    }
    export interface UpdateProductInCatalogRequest {
        productCode: string;
        catalogId: number;
        responseFields?: string;
        productInCatalogInfo?: ProductInCatalogInfo;
    }
    export interface UpdateProductInCatalogsRequest {
        productCode: string;
        responseFields?: string;
        productInCatalogInfo?: Array<ProductInCatalogInfo>;
    }
}
/**
* ProductsApiService - interface
* 
* @export
* @interface ProductsApi
*/
export interface ProductsApiService {
    /**
    * Creates a new product. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
    * @summary Add Product
    * @param {string} [batchJobCode] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CatalogAdminsProduct} [catalogAdminsProduct] Properties of the new product. Required properties: ProductCode, Content.ProductName, and Price.ListPrice. Mozu.ProductAdmin.Contracts.Product
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductsApiInterface
    */
    addProductRaw(requestParameters: productsApiParams.AddProductRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsProduct>>;

    /**
    * Creates a new product. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
    * Add Product
    */
    addProduct(requestParameters: productsApiParams.AddProductRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsProduct>;

    /**
    * Add a product to catalogs. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Add Product in Catalogs
    * @param {string} productCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {ProductInCatalogInfo} [productInCatalogInfo] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductsApiInterface
    */
    addProductInCatalogRaw(requestParameters: productsApiParams.AddProductInCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductInCatalogInfo>>;

    /**
    * Add a product to catalogs. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Add Product in Catalogs
    */
    addProductInCatalog(requestParameters: productsApiParams.AddProductInCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductInCatalogInfo>;

    /**
    * Change a product\'s product type. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Change product type.
    * @param {string} productCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {ProductTypeChangeRequest} [productTypeChangeRequest] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductsApiInterface
    */
    changeProductTypeRaw(requestParameters: productsApiParams.ChangeProductTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductTypeChangeResponse>>;

    /**
    * Change a product\'s product type. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Change product type.
    */
    changeProductType(requestParameters: productsApiParams.ChangeProductTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductTypeChangeResponse>;

    /**
    * Deletes the product specified by its product code.
    * @summary Delete Product
    * @param {string} productCode Merchant-created code associated with the product, for example, a SKU. Required.
    * @param {string} [batchJobCode] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductsApiInterface
    */
    deleteProductRaw(requestParameters: productsApiParams.DeleteProductRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Deletes the product specified by its product code.
    * Delete Product
    */
    deleteProduct(requestParameters: productsApiParams.DeleteProductRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Delete a product in a particular catalog.
    * @summary Delete Product in Catalog
    * @param {string} productCode 
    * @param {number} catalogId 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductsApiInterface
    */
    deleteProductInCatalogRaw(requestParameters: productsApiParams.DeleteProductInCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Delete a product in a particular catalog.
    * Delete Product in Catalog
    */
    deleteProductInCatalog(requestParameters: productsApiParams.DeleteProductInCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Retrieves details about a product based on the specified response group. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
    * @summary Get Product
    * @param {string} productCode Merchant-created code associated with the product, for example, a SKU. Required.
    * @param {string} [responseGroups] Used to get more specific information from the request. For example to get discounts applied to a product use the AppliedProducts response group. Available response groups: ApplicableDiscounts, VariationOptions, and BaseProductCode.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductsApiInterface
    */
    getProductRaw(requestParameters: productsApiParams.GetProductRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsProduct>>;

    /**
    * Retrieves details about a product based on the specified response group. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
    * Get Product
    */
    getProduct(requestParameters: productsApiParams.GetProductRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsProduct>;

    /**
    * Retrieves a product in a particular catalog. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Get Product in Catalog
    * @param {string} productCode 
    * @param {number} catalogId 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductsApiInterface
    */
    getProductInCatalogRaw(requestParameters: productsApiParams.GetProductInCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductInCatalogInfo>>;

    /**
    * Retrieves a product in a particular catalog. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Get Product in Catalog
    */
    getProductInCatalog(requestParameters: productsApiParams.GetProductInCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductInCatalogInfo>;

    /**
    * Retrieve products in catalogs. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Get Products in Catalogs
    * @param {string} productCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductsApiInterface
    */
    getProductInCatalogsRaw(requestParameters: productsApiParams.GetProductInCatalogsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProductInCatalogInfo>>>;

    /**
    * Retrieve products in catalogs. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Get Products in Catalogs
    */
    getProductInCatalogs(requestParameters: productsApiParams.GetProductInCatalogsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProductInCatalogInfo>>;

    /**
    * Retrieves a list of products according to any specified filter criteria and sort options. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
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
    * @memberof ProductsApiInterface
    */
    getProductsRaw(requestParameters: productsApiParams.GetProductsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsProductCollection>>;

    /**
    * Retrieves a list of products according to any specified filter criteria and sort options. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
    * Get Products
    */
    getProducts(requestParameters: productsApiParams.GetProductsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsProductCollection>;

    /**
    * Action that allows productCodes to be renamed.
    * @summary Rename Product Codes
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {Array<ProductCodeRename>} [productCodeRename] An array specifying the existing productCode and the new productCode it should be renamed to
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductsApiInterface
    */
    renameProductCodesRaw(requestParameters: productsApiParams.RenameProductCodesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Action that allows productCodes to be renamed.
    * Rename Product Codes
    */
    renameProductCodes(requestParameters: productsApiParams.RenameProductCodesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Modifies an existing product. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Update Product
    * @param {string} productCode Merchant-created code associated with the product, for example, a SKU. Required.
    * @param {string} [batchJobCode] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CatalogAdminsProduct} [catalogAdminsProduct] Properties of the product that you want to update. Required properties: ProductCode, Content.ProductName, and Price.ListPrice.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductsApiInterface
    */
    updateProductRaw(requestParameters: productsApiParams.UpdateProductRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsProduct>>;

    /**
    * Modifies an existing product. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Update Product
    */
    updateProduct(requestParameters: productsApiParams.UpdateProductRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsProduct>;

    /**
    * Update a product in a particular catalog. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Update Product in Catalog
    * @param {string} productCode 
    * @param {number} catalogId 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {ProductInCatalogInfo} [productInCatalogInfo] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductsApiInterface
    */
    updateProductInCatalogRaw(requestParameters: productsApiParams.UpdateProductInCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductInCatalogInfo>>;

    /**
    * Update a product in a particular catalog. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Update Product in Catalog
    */
    updateProductInCatalog(requestParameters: productsApiParams.UpdateProductInCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductInCatalogInfo>;

    /**
    * Updates existing products across your catalogs. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
    * @summary Update Product in Catalogs
    * @param {string} productCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {Array<ProductInCatalogInfo>} [productInCatalogInfo] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductsApiInterface
    */
    updateProductInCatalogsRaw(requestParameters: productsApiParams.UpdateProductInCatalogsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProductInCatalogInfo>>>;

    /**
    * Updates existing products across your catalogs. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
    * Update Product in Catalogs
    */
    updateProductInCatalogs(requestParameters: productsApiParams.UpdateProductInCatalogsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProductInCatalogInfo>>;

}


/**
 * 
 */
export class ProductsApi extends runtime.BaseAPI implements ProductsApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Creates a new product. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
     * Add Product
     */


    async addProductRaw(requestParameters: productsApiParams.AddProductRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsProduct>> {
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
            path: `/commerce/catalog/admin/products`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsProduct,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates a new product. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
     * Add Product
     */
    async addProduct(requestParameters: productsApiParams.AddProductRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsProduct> {
        const response = await this.addProductRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Add a product to catalogs. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Add Product in Catalogs
     */


    async addProductInCatalogRaw(requestParameters: productsApiParams.AddProductInCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductInCatalogInfo>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling addProductInCatalog.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/ProductInCatalogs`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.productInCatalogInfo,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Add a product to catalogs. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Add Product in Catalogs
     */
    async addProductInCatalog(requestParameters: productsApiParams.AddProductInCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductInCatalogInfo> {
        const response = await this.addProductInCatalogRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Change a product\'s product type. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Change product type.
     */


    async changeProductTypeRaw(requestParameters: productsApiParams.ChangeProductTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductTypeChangeResponse>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling changeProductType.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/changeproducttype`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.productTypeChangeRequest,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Change a product\'s product type. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Change product type.
     */
    async changeProductType(requestParameters: productsApiParams.ChangeProductTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductTypeChangeResponse> {
        const response = await this.changeProductTypeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes the product specified by its product code.
     * Delete Product
     */


    async deleteProductRaw(requestParameters: productsApiParams.DeleteProductRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling deleteProduct.');
        }

        const queryParameters: any = {};

        if (requestParameters.batchJobCode !== undefined) {
            queryParameters['batchJobCode'] = requestParameters.batchJobCode;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes the product specified by its product code.
     * Delete Product
     */
    async deleteProduct(requestParameters: productsApiParams.DeleteProductRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteProductRaw(requestParameters, initOverrides);
    }

    /**
     * Delete a product in a particular catalog.
     * Delete Product in Catalog
     */


    async deleteProductInCatalogRaw(requestParameters: productsApiParams.DeleteProductInCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling deleteProductInCatalog.');
        }

        if (requestParameters.catalogId === null || requestParameters.catalogId === undefined) {
            throw new runtime.RequiredError('catalogId','Required parameter requestParameters.catalogId was null or undefined when calling deleteProductInCatalog.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/ProductInCatalogs/{catalogId}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"catalogId"}}`, encodeURIComponent(String(requestParameters.catalogId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a product in a particular catalog.
     * Delete Product in Catalog
     */
    async deleteProductInCatalog(requestParameters: productsApiParams.DeleteProductInCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteProductInCatalogRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves details about a product based on the specified response group. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
     * Get Product
     */


    async getProductRaw(requestParameters: productsApiParams.GetProductRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsProduct>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling getProduct.');
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
            path: `/commerce/catalog/admin/products/{productCode}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves details about a product based on the specified response group. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
     * Get Product
     */
    async getProduct(requestParameters: productsApiParams.GetProductRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsProduct> {
        const response = await this.getProductRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a product in a particular catalog. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Get Product in Catalog
     */


    async getProductInCatalogRaw(requestParameters: productsApiParams.GetProductInCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductInCatalogInfo>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling getProductInCatalog.');
        }

        if (requestParameters.catalogId === null || requestParameters.catalogId === undefined) {
            throw new runtime.RequiredError('catalogId','Required parameter requestParameters.catalogId was null or undefined when calling getProductInCatalog.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/ProductInCatalogs/{catalogId}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"catalogId"}}`, encodeURIComponent(String(requestParameters.catalogId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a product in a particular catalog. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Get Product in Catalog
     */
    async getProductInCatalog(requestParameters: productsApiParams.GetProductInCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductInCatalogInfo> {
        const response = await this.getProductInCatalogRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve products in catalogs. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Get Products in Catalogs
     */


    async getProductInCatalogsRaw(requestParameters: productsApiParams.GetProductInCatalogsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProductInCatalogInfo>>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling getProductInCatalogs.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/ProductInCatalogs`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieve products in catalogs. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Get Products in Catalogs
     */
    async getProductInCatalogs(requestParameters: productsApiParams.GetProductInCatalogsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProductInCatalogInfo>> {
        const response = await this.getProductInCatalogsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a list of products according to any specified filter criteria and sort options. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
     * Get Products
     */


    async getProductsRaw(requestParameters: productsApiParams.GetProductsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsProductCollection>> {
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
            path: `/commerce/catalog/admin/products`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a list of products according to any specified filter criteria and sort options. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
     * Get Products
     */
    async getProducts(requestParameters: productsApiParams.GetProductsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsProductCollection> {
        const response = await this.getProductsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Action that allows productCodes to be renamed.
     * Rename Product Codes
     */


    async renameProductCodesRaw(requestParameters: productsApiParams.RenameProductCodesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/Actions/RenameProductCodes`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.productCodeRename,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Action that allows productCodes to be renamed.
     * Rename Product Codes
     */
    async renameProductCodes(requestParameters: productsApiParams.RenameProductCodesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.renameProductCodesRaw(requestParameters, initOverrides);
    }

    /**
     * Modifies an existing product. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Update Product
     */


    async updateProductRaw(requestParameters: productsApiParams.UpdateProductRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsProduct>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling updateProduct.');
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
            path: `/commerce/catalog/admin/products/{productCode}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsProduct,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Modifies an existing product. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Update Product
     */
    async updateProduct(requestParameters: productsApiParams.UpdateProductRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsProduct> {
        const response = await this.updateProductRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a product in a particular catalog. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Update Product in Catalog
     */


    async updateProductInCatalogRaw(requestParameters: productsApiParams.UpdateProductInCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductInCatalogInfo>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling updateProductInCatalog.');
        }

        if (requestParameters.catalogId === null || requestParameters.catalogId === undefined) {
            throw new runtime.RequiredError('catalogId','Required parameter requestParameters.catalogId was null or undefined when calling updateProductInCatalog.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/ProductInCatalogs/{catalogId}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"catalogId"}}`, encodeURIComponent(String(requestParameters.catalogId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.productInCatalogInfo,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update a product in a particular catalog. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Update Product in Catalog
     */
    async updateProductInCatalog(requestParameters: productsApiParams.UpdateProductInCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductInCatalogInfo> {
        const response = await this.updateProductInCatalogRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates existing products across your catalogs. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
     * Update Product in Catalogs
     */


    async updateProductInCatalogsRaw(requestParameters: productsApiParams.UpdateProductInCatalogsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProductInCatalogInfo>>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling updateProductInCatalogs.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/ProductInCatalogs`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.productInCatalogInfo,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates existing products across your catalogs. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
     * Update Product in Catalogs
     */
    async updateProductInCatalogs(requestParameters: productsApiParams.UpdateProductInCatalogsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProductInCatalogInfo>> {
        const response = await this.updateProductInCatalogsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
