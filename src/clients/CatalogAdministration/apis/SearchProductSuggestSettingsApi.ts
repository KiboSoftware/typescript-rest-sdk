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
  ProductSuggestSettings,
  SuggestSettings,
} from '../models';


export namespace searchProductSuggestSettingsApiParams { 
    export interface DeleteProductSuggestSettingsRequest {
        name: string;
    }
    export interface GetProductSuggestSettingsRequest {
        name: string;
        responseFields?: string;
    }
    export interface UpdateProductSuggestSettingsRequest {
        name: string;
        responseFields?: string;
        productSuggestSettings?: ProductSuggestSettings;
    }
}
/**
* SearchProductSuggestSettingsApiService - interface
* 
* @export
* @interface SearchProductSuggestSettingsApi
*/
export interface SearchProductSuggestSettingsApiService {
    /**
    * Deletes the ProductSuggestSettings for a specific SearchSetting by name.
    * @summary Delete Product Suggest Settings
    * @param {string} name 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SearchProductSuggestSettingsApiInterface
    */
    deleteProductSuggestSettingsRaw(requestParameters: searchProductSuggestSettingsApiParams.DeleteProductSuggestSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Deletes the ProductSuggestSettings for a specific SearchSetting by name.
    * Delete Product Suggest Settings
    */
    deleteProductSuggestSettings(requestParameters: searchProductSuggestSettingsApiParams.DeleteProductSuggestSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Get ProductSuggestSettings for a specific SearchSettings by name.
    * @summary Get Product Suggest Settings
    * @param {string} name 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SearchProductSuggestSettingsApiInterface
    */
    getProductSuggestSettingsRaw(requestParameters: searchProductSuggestSettingsApiParams.GetProductSuggestSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuggestSettings>>;

    /**
    * Get ProductSuggestSettings for a specific SearchSettings by name.
    * Get Product Suggest Settings
    */
    getProductSuggestSettings(requestParameters: searchProductSuggestSettingsApiParams.GetProductSuggestSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuggestSettings>;

    /**
    * Adds or updates the ProductSuggestSettings for a specific SearchSetting by name.
    * @summary Update Product Suggest Settings
    * @param {string} name 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {ProductSuggestSettings} [productSuggestSettings] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SearchProductSuggestSettingsApiInterface
    */
    updateProductSuggestSettingsRaw(requestParameters: searchProductSuggestSettingsApiParams.UpdateProductSuggestSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductSuggestSettings>>;

    /**
    * Adds or updates the ProductSuggestSettings for a specific SearchSetting by name.
    * Update Product Suggest Settings
    */
    updateProductSuggestSettings(requestParameters: searchProductSuggestSettingsApiParams.UpdateProductSuggestSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductSuggestSettings>;

}


/**
 * 
 */
export class SearchProductSuggestSettingsApi extends runtime.BaseAPI implements SearchProductSuggestSettingsApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Deletes the ProductSuggestSettings for a specific SearchSetting by name.
     * Delete Product Suggest Settings
     */


    async deleteProductSuggestSettingsRaw(requestParameters: searchProductSuggestSettingsApiParams.DeleteProductSuggestSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling deleteProductSuggestSettings.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/search/{name}/productsuggestsettings`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes the ProductSuggestSettings for a specific SearchSetting by name.
     * Delete Product Suggest Settings
     */
    async deleteProductSuggestSettings(requestParameters: searchProductSuggestSettingsApiParams.DeleteProductSuggestSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteProductSuggestSettingsRaw(requestParameters, initOverrides);
    }

    /**
     * Get ProductSuggestSettings for a specific SearchSettings by name.
     * Get Product Suggest Settings
     */


    async getProductSuggestSettingsRaw(requestParameters: searchProductSuggestSettingsApiParams.GetProductSuggestSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuggestSettings>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling getProductSuggestSettings.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/search/{name}/productsuggestsettings`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get ProductSuggestSettings for a specific SearchSettings by name.
     * Get Product Suggest Settings
     */
    async getProductSuggestSettings(requestParameters: searchProductSuggestSettingsApiParams.GetProductSuggestSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuggestSettings> {
        const response = await this.getProductSuggestSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Adds or updates the ProductSuggestSettings for a specific SearchSetting by name.
     * Update Product Suggest Settings
     */


    async updateProductSuggestSettingsRaw(requestParameters: searchProductSuggestSettingsApiParams.UpdateProductSuggestSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductSuggestSettings>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling updateProductSuggestSettings.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/search/{name}/productsuggestsettings`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.productSuggestSettings,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Adds or updates the ProductSuggestSettings for a specific SearchSetting by name.
     * Update Product Suggest Settings
     */
    async updateProductSuggestSettings(requestParameters: searchProductSuggestSettingsApiParams.UpdateProductSuggestSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductSuggestSettings> {
        const response = await this.updateProductSuggestSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
