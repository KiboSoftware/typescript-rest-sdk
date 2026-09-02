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
  SearchRedirect,
  SearchRedirectCollection,
} from '../models';


export namespace searchRedirectApiParams { 
    export interface AddSearchRedirectRequest {
        fromSystemDefault?: boolean;
        responseFields?: string;
        searchRedirect?: SearchRedirect;
    }
    export interface DeleteSearchRedirectRequest {
        redirectId: string;
    }
    export interface GetSearchRedirectRequest {
        redirectId: string;
        responseFields?: string;
    }
    export interface GetSearchRedirectsRequest {
        responseFields?: string;
    }
    export interface UpdateSearchRedirectRequest {
        redirectId: string;
        responseFields?: string;
        searchRedirect?: SearchRedirect;
    }
}
/**
* SearchRedirectApiService - interface
* 
* @export
* @interface SearchRedirectApi
*/
export interface SearchRedirectApiService {
    /**
    * Adds a search redirect for a specific site.
    * @summary Add Search Redirect
    * @param {boolean} [fromSystemDefault] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {SearchRedirect} [searchRedirect] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SearchRedirectApiInterface
    */
    addSearchRedirectRaw(requestParameters: searchRedirectApiParams.AddSearchRedirectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchRedirect>>;

    /**
    * Adds a search redirect for a specific site.
    * Add Search Redirect
    */
    addSearchRedirect(requestParameters: searchRedirectApiParams.AddSearchRedirectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchRedirect>;

    /**
    * Deletes a specific redirect for a site.
    * @summary Delete Search Redirect
    * @param {string} redirectId 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SearchRedirectApiInterface
    */
    deleteSearchRedirectRaw(requestParameters: searchRedirectApiParams.DeleteSearchRedirectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchRedirect>>;

    /**
    * Deletes a specific redirect for a site.
    * Delete Search Redirect
    */
    deleteSearchRedirect(requestParameters: searchRedirectApiParams.DeleteSearchRedirectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchRedirect>;

    /**
    * Get search redirect by redirect id.
    * @summary Get Search Redirect
    * @param {string} redirectId 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SearchRedirectApiInterface
    */
    getSearchRedirectRaw(requestParameters: searchRedirectApiParams.GetSearchRedirectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchRedirect>>;

    /**
    * Get search redirect by redirect id.
    * Get Search Redirect
    */
    getSearchRedirect(requestParameters: searchRedirectApiParams.GetSearchRedirectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchRedirect>;

    /**
    * Get search redirect list.
    * @summary Get Search Redirects
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SearchRedirectApiInterface
    */
    getSearchRedirectsRaw(requestParameters: searchRedirectApiParams.GetSearchRedirectsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchRedirectCollection>>;

    /**
    * Get search redirect list.
    * Get Search Redirects
    */
    getSearchRedirects(requestParameters: searchRedirectApiParams.GetSearchRedirectsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchRedirectCollection>;

    /**
    * Update a search redirect for a specific site.
    * @summary Update Search Redirect
    * @param {string} redirectId 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {SearchRedirect} [searchRedirect] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SearchRedirectApiInterface
    */
    updateSearchRedirectRaw(requestParameters: searchRedirectApiParams.UpdateSearchRedirectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchRedirect>>;

    /**
    * Update a search redirect for a specific site.
    * Update Search Redirect
    */
    updateSearchRedirect(requestParameters: searchRedirectApiParams.UpdateSearchRedirectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchRedirect>;

}


/**
 * 
 */
export class SearchRedirectApi extends runtime.BaseAPI implements SearchRedirectApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Adds a search redirect for a specific site.
     * Add Search Redirect
     */


    async addSearchRedirectRaw(requestParameters: searchRedirectApiParams.AddSearchRedirectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchRedirect>> {
        const queryParameters: any = {};

        if (requestParameters.fromSystemDefault !== undefined) {
            queryParameters['fromSystemDefault'] = requestParameters.fromSystemDefault;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/search/redirect`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.searchRedirect,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Adds a search redirect for a specific site.
     * Add Search Redirect
     */
    async addSearchRedirect(requestParameters: searchRedirectApiParams.AddSearchRedirectRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchRedirect> {
        const response = await this.addSearchRedirectRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a specific redirect for a site.
     * Delete Search Redirect
     */


    async deleteSearchRedirectRaw(requestParameters: searchRedirectApiParams.DeleteSearchRedirectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchRedirect>> {
        if (requestParameters.redirectId === null || requestParameters.redirectId === undefined) {
            throw new runtime.RequiredError('redirectId','Required parameter requestParameters.redirectId was null or undefined when calling deleteSearchRedirect.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/search/redirect/{redirectId}`.replace(`{${"redirectId"}}`, encodeURIComponent(String(requestParameters.redirectId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Deletes a specific redirect for a site.
     * Delete Search Redirect
     */
    async deleteSearchRedirect(requestParameters: searchRedirectApiParams.DeleteSearchRedirectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchRedirect> {
        const response = await this.deleteSearchRedirectRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get search redirect by redirect id.
     * Get Search Redirect
     */


    async getSearchRedirectRaw(requestParameters: searchRedirectApiParams.GetSearchRedirectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchRedirect>> {
        if (requestParameters.redirectId === null || requestParameters.redirectId === undefined) {
            throw new runtime.RequiredError('redirectId','Required parameter requestParameters.redirectId was null or undefined when calling getSearchRedirect.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/search/redirect/{redirectId}`.replace(`{${"redirectId"}}`, encodeURIComponent(String(requestParameters.redirectId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get search redirect by redirect id.
     * Get Search Redirect
     */
    async getSearchRedirect(requestParameters: searchRedirectApiParams.GetSearchRedirectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchRedirect> {
        const response = await this.getSearchRedirectRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get search redirect list.
     * Get Search Redirects
     */


    async getSearchRedirectsRaw(requestParameters: searchRedirectApiParams.GetSearchRedirectsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchRedirectCollection>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/search/redirect`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get search redirect list.
     * Get Search Redirects
     */
    async getSearchRedirects(requestParameters: searchRedirectApiParams.GetSearchRedirectsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchRedirectCollection> {
        const response = await this.getSearchRedirectsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a search redirect for a specific site.
     * Update Search Redirect
     */


    async updateSearchRedirectRaw(requestParameters: searchRedirectApiParams.UpdateSearchRedirectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchRedirect>> {
        if (requestParameters.redirectId === null || requestParameters.redirectId === undefined) {
            throw new runtime.RequiredError('redirectId','Required parameter requestParameters.redirectId was null or undefined when calling updateSearchRedirect.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/search/redirect/{redirectId}`.replace(`{${"redirectId"}}`, encodeURIComponent(String(requestParameters.redirectId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.searchRedirect,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update a search redirect for a specific site.
     * Update Search Redirect
     */
    async updateSearchRedirect(requestParameters: searchRedirectApiParams.UpdateSearchRedirectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchRedirect> {
        const response = await this.updateSearchRedirectRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
