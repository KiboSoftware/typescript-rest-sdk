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
  QuickEditChangeProductTypeActions,
  QuickEditChangeProductTypeResponse,
  QuickEditProductActions,
  QuickEditProductInCatalogActions,
  QuickEditProductPropertyActions,
  QuickEditResponse,
} from '../models';


export namespace productQuickEditApiParams { 
    export interface UpdateProductInCatalogRequest {
        responseFields?: string;
        quickEditProductInCatalogActions?: QuickEditProductInCatalogActions;
    }
    export interface UpdateProductPropertiesRequest {
        responseFields?: string;
        quickEditProductPropertyActions?: QuickEditProductPropertyActions;
    }
    export interface UpdateProductTypeRequest {
        responseFields?: string;
        quickEditChangeProductTypeActions?: QuickEditChangeProductTypeActions;
    }
    export interface UpdateProductsRequest {
        responseFields?: string;
        quickEditProductActions?: QuickEditProductActions;
    }
}
/**
* ProductQuickEditApiService - interface
* 
* @export
* @interface ProductQuickEditApi
*/
export interface ProductQuickEditApiService {
    /**
    * Updates products in catalog through quick edit. Values will be     added, not replaced. The Quick Edit APIs are designed primarily for the Quick Edit UI. They are not advised for bulk product updates through a batch job. For efficiently updating your catalog through a batch job, use the Import Export APIs or the Catalog Administration APIs directly.
    * @summary Quick Edit Product in Catalog
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {QuickEditProductInCatalogActions} [quickEditProductInCatalogActions] Mozu.ProductAdmin.Contracts.QuickEditProductInCatalogActions
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductQuickEditApiInterface
    */
    updateProductInCatalogRaw(requestParameters: productQuickEditApiParams.UpdateProductInCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuickEditResponse>>;

    /**
    * Updates products in catalog through quick edit. Values will be     added, not replaced. The Quick Edit APIs are designed primarily for the Quick Edit UI. They are not advised for bulk product updates through a batch job. For efficiently updating your catalog through a batch job, use the Import Export APIs or the Catalog Administration APIs directly.
    * Quick Edit Product in Catalog
    */
    updateProductInCatalog(requestParameters: productQuickEditApiParams.UpdateProductInCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuickEditResponse>;

    /**
    * Updates product properties through quick edits. Values will be added, not replaced. The Quick Edit APIs are designed primarily for the Quick Edit UI. They are not advised for bulk product updates through a batch job. For efficiently updating your catalog through a batch job, use the Import Export APIs or the Catalog Administration APIs directly.
    * @summary Quick Edit Properties
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {QuickEditProductPropertyActions} [quickEditProductPropertyActions] Mozu.ProductAdmin.Contracts.QuickEditProductPropertyActions
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductQuickEditApiInterface
    */
    updateProductPropertiesRaw(requestParameters: productQuickEditApiParams.UpdateProductPropertiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuickEditResponse>>;

    /**
    * Updates product properties through quick edits. Values will be added, not replaced. The Quick Edit APIs are designed primarily for the Quick Edit UI. They are not advised for bulk product updates through a batch job. For efficiently updating your catalog through a batch job, use the Import Export APIs or the Catalog Administration APIs directly.
    * Quick Edit Properties
    */
    updateProductProperties(requestParameters: productQuickEditApiParams.UpdateProductPropertiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuickEditResponse>;

    /**
    * Endpoint used to apply updates for product type
    * @summary Endpoint used to apply updates for product type
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {QuickEditChangeProductTypeActions} [quickEditChangeProductTypeActions] Mozu.ProductAdmin.Contracts.QuickEditChangeProductTypeActions
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductQuickEditApiInterface
    */
    updateProductTypeRaw(requestParameters: productQuickEditApiParams.UpdateProductTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuickEditChangeProductTypeResponse>>;

    /**
    * Endpoint used to apply updates for product type
    * Endpoint used to apply updates for product type
    */
    updateProductType(requestParameters: productQuickEditApiParams.UpdateProductTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuickEditChangeProductTypeResponse>;

    /**
    * Applies top level product updates. The Quick Edit APIs are designed primarily for the Quick Edit UI. They are not advised for bulk product updates through a batch job. For efficiently updating your catalog through a batch job, use the Import Export APIs or the Catalog Administration APIs directly.
    * @summary Quick Edit Products
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {QuickEditProductActions} [quickEditProductActions] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductQuickEditApiInterface
    */
    updateProductsRaw(requestParameters: productQuickEditApiParams.UpdateProductsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuickEditResponse>>;

    /**
    * Applies top level product updates. The Quick Edit APIs are designed primarily for the Quick Edit UI. They are not advised for bulk product updates through a batch job. For efficiently updating your catalog through a batch job, use the Import Export APIs or the Catalog Administration APIs directly.
    * Quick Edit Products
    */
    updateProducts(requestParameters: productQuickEditApiParams.UpdateProductsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuickEditResponse>;

}


/**
 * 
 */
export class ProductQuickEditApi extends runtime.BaseAPI implements ProductQuickEditApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Updates products in catalog through quick edit. Values will be     added, not replaced. The Quick Edit APIs are designed primarily for the Quick Edit UI. They are not advised for bulk product updates through a batch job. For efficiently updating your catalog through a batch job, use the Import Export APIs or the Catalog Administration APIs directly.
     * Quick Edit Product in Catalog
     */


    async updateProductInCatalogRaw(requestParameters: productQuickEditApiParams.UpdateProductInCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuickEditResponse>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/quickedit/products/productincatalog`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.quickEditProductInCatalogActions,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates products in catalog through quick edit. Values will be     added, not replaced. The Quick Edit APIs are designed primarily for the Quick Edit UI. They are not advised for bulk product updates through a batch job. For efficiently updating your catalog through a batch job, use the Import Export APIs or the Catalog Administration APIs directly.
     * Quick Edit Product in Catalog
     */
    async updateProductInCatalog(requestParameters: productQuickEditApiParams.UpdateProductInCatalogRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuickEditResponse> {
        const response = await this.updateProductInCatalogRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates product properties through quick edits. Values will be added, not replaced. The Quick Edit APIs are designed primarily for the Quick Edit UI. They are not advised for bulk product updates through a batch job. For efficiently updating your catalog through a batch job, use the Import Export APIs or the Catalog Administration APIs directly.
     * Quick Edit Properties
     */


    async updateProductPropertiesRaw(requestParameters: productQuickEditApiParams.UpdateProductPropertiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuickEditResponse>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/quickedit/products/properties`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.quickEditProductPropertyActions,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates product properties through quick edits. Values will be added, not replaced. The Quick Edit APIs are designed primarily for the Quick Edit UI. They are not advised for bulk product updates through a batch job. For efficiently updating your catalog through a batch job, use the Import Export APIs or the Catalog Administration APIs directly.
     * Quick Edit Properties
     */
    async updateProductProperties(requestParameters: productQuickEditApiParams.UpdateProductPropertiesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuickEditResponse> {
        const response = await this.updateProductPropertiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Endpoint used to apply updates for product type
     * Endpoint used to apply updates for product type
     */


    async updateProductTypeRaw(requestParameters: productQuickEditApiParams.UpdateProductTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuickEditChangeProductTypeResponse>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/quickedit/products/producttype`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.quickEditChangeProductTypeActions,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Endpoint used to apply updates for product type
     * Endpoint used to apply updates for product type
     */
    async updateProductType(requestParameters: productQuickEditApiParams.UpdateProductTypeRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuickEditChangeProductTypeResponse> {
        const response = await this.updateProductTypeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Applies top level product updates. The Quick Edit APIs are designed primarily for the Quick Edit UI. They are not advised for bulk product updates through a batch job. For efficiently updating your catalog through a batch job, use the Import Export APIs or the Catalog Administration APIs directly.
     * Quick Edit Products
     */


    async updateProductsRaw(requestParameters: productQuickEditApiParams.UpdateProductsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuickEditResponse>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/quickedit/products`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.quickEditProductActions,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Applies top level product updates. The Quick Edit APIs are designed primarily for the Quick Edit UI. They are not advised for bulk product updates through a batch job. For efficiently updating your catalog through a batch job, use the Import Export APIs or the Catalog Administration APIs directly.
     * Quick Edit Products
     */
    async updateProducts(requestParameters: productQuickEditApiParams.UpdateProductsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuickEditResponse> {
        const response = await this.updateProductsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
