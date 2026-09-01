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
  CatalogAdminsSearchMerchandizingRule,
  SearchMerchandizingRuleCollection,
} from '../models';


export namespace searchMerchandizingRuleApiParams { 
    export interface CloneSearchMerchandizingRuleRequest {
        code: string;
        responseFields?: string;
    }
    export interface CreateSearchMerchandizingRuleRequest {
        responseFields?: string;
        catalogAdminsSearchMerchandizingRule?: CatalogAdminsSearchMerchandizingRule;
    }
    export interface DeleteSearchMerchandizingRuleRequest {
        code: string;
    }
    export interface GetSearchMerchandizingRuleRequest {
        code: string;
        responseFields?: string;
    }
    export interface GetSearchMerchandizingRulesRequest {
        startIndex?: number;
        pageSize?: number;
        sortBy?: string;
        filter?: string;
        responseGroups?: string;
        q?: string;
        responseFields?: string;
    }
    export interface UpdateSearchMerchandizingRuleRequest {
        code: string;
        responseFields?: string;
        catalogAdminsSearchMerchandizingRule?: CatalogAdminsSearchMerchandizingRule;
    }
}
/**
* SearchMerchandizingRuleApiService - interface
* 
* @export
* @interface SearchMerchandizingRuleApi
*/
export interface SearchMerchandizingRuleApiService {
    /**
    * Clones a search merchandizing rule.
    * @summary Clone Search Merchandizing Rule
    * @param {string} code 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SearchMerchandizingRuleApiInterface
    */
    cloneSearchMerchandizingRuleRaw(requestParameters: searchMerchandizingRuleApiParams.CloneSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsSearchMerchandizingRule>>;

    /**
    * Clones a search merchandizing rule.
    * Clone Search Merchandizing Rule
    */
    cloneSearchMerchandizingRule(requestParameters: searchMerchandizingRuleApiParams.CloneSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsSearchMerchandizingRule>;

    /**
    * Create a new search merchandizing rule.
    * @summary Create Search Merchandizing Rule
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CatalogAdminsSearchMerchandizingRule} [catalogAdminsSearchMerchandizingRule] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SearchMerchandizingRuleApiInterface
    */
    createSearchMerchandizingRuleRaw(requestParameters: searchMerchandizingRuleApiParams.CreateSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsSearchMerchandizingRule>>;

    /**
    * Create a new search merchandizing rule.
    * Create Search Merchandizing Rule
    */
    createSearchMerchandizingRule(requestParameters: searchMerchandizingRuleApiParams.CreateSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsSearchMerchandizingRule>;

    /**
    * Deletes a search merchandizing rule.
    * @summary Delete Search Merchandizing Rule
    * @param {string} code 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SearchMerchandizingRuleApiInterface
    */
    deleteSearchMerchandizingRuleRaw(requestParameters: searchMerchandizingRuleApiParams.DeleteSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Deletes a search merchandizing rule.
    * Delete Search Merchandizing Rule
    */
    deleteSearchMerchandizingRule(requestParameters: searchMerchandizingRuleApiParams.DeleteSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Retrieves a search merchandizing rule based on its code.
    * @summary Get Search Merchandizing Rule
    * @param {string} code 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SearchMerchandizingRuleApiInterface
    */
    getSearchMerchandizingRuleRaw(requestParameters: searchMerchandizingRuleApiParams.GetSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsSearchMerchandizingRule>>;

    /**
    * Retrieves a search merchandizing rule based on its code.
    * Get Search Merchandizing Rule
    */
    getSearchMerchandizingRule(requestParameters: searchMerchandizingRuleApiParams.GetSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsSearchMerchandizingRule>;

    /**
    * Retrieve a list of all search merchandizing rules. You can filter this query by CategoryCode, which supports an EQ (equals) filter with the syntax /catalog/admin/searchmerchandizingrules/?filter=categorycode eq AAA
    * @summary Get Search Merchandizing Rules
    * @param {number} [startIndex] 
    * @param {number} [pageSize] 
    * @param {string} [sortBy] 
    * @param {string} [filter] 
    * @param {string} [responseGroups] 
    * @param {string} [q] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SearchMerchandizingRuleApiInterface
    */
    getSearchMerchandizingRulesRaw(requestParameters: searchMerchandizingRuleApiParams.GetSearchMerchandizingRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchMerchandizingRuleCollection>>;

    /**
    * Retrieve a list of all search merchandizing rules. You can filter this query by CategoryCode, which supports an EQ (equals) filter with the syntax /catalog/admin/searchmerchandizingrules/?filter=categorycode eq AAA
    * Get Search Merchandizing Rules
    */
    getSearchMerchandizingRules(requestParameters: searchMerchandizingRuleApiParams.GetSearchMerchandizingRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchMerchandizingRuleCollection>;

    /**
    * Updates an existing search merchandizing rule.
    * @summary Update Search Merchandizing Rule
    * @param {string} code 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CatalogAdminsSearchMerchandizingRule} [catalogAdminsSearchMerchandizingRule] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SearchMerchandizingRuleApiInterface
    */
    updateSearchMerchandizingRuleRaw(requestParameters: searchMerchandizingRuleApiParams.UpdateSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsSearchMerchandizingRule>>;

    /**
    * Updates an existing search merchandizing rule.
    * Update Search Merchandizing Rule
    */
    updateSearchMerchandizingRule(requestParameters: searchMerchandizingRuleApiParams.UpdateSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsSearchMerchandizingRule>;

}


/**
 * 
 */
export class SearchMerchandizingRuleApi extends runtime.BaseAPI implements SearchMerchandizingRuleApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Clones a search merchandizing rule.
     * Clone Search Merchandizing Rule
     */


    async cloneSearchMerchandizingRuleRaw(requestParameters: searchMerchandizingRuleApiParams.CloneSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsSearchMerchandizingRule>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling cloneSearchMerchandizingRule.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/searchmerchandizingrules/{code}/clone`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Clones a search merchandizing rule.
     * Clone Search Merchandizing Rule
     */
    async cloneSearchMerchandizingRule(requestParameters: searchMerchandizingRuleApiParams.CloneSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsSearchMerchandizingRule> {
        const response = await this.cloneSearchMerchandizingRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a new search merchandizing rule.
     * Create Search Merchandizing Rule
     */


    async createSearchMerchandizingRuleRaw(requestParameters: searchMerchandizingRuleApiParams.CreateSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsSearchMerchandizingRule>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/searchmerchandizingrules`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsSearchMerchandizingRule,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Create a new search merchandizing rule.
     * Create Search Merchandizing Rule
     */
    async createSearchMerchandizingRule(requestParameters: searchMerchandizingRuleApiParams.CreateSearchMerchandizingRuleRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsSearchMerchandizingRule> {
        const response = await this.createSearchMerchandizingRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a search merchandizing rule.
     * Delete Search Merchandizing Rule
     */


    async deleteSearchMerchandizingRuleRaw(requestParameters: searchMerchandizingRuleApiParams.DeleteSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling deleteSearchMerchandizingRule.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/searchmerchandizingrules/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a search merchandizing rule.
     * Delete Search Merchandizing Rule
     */
    async deleteSearchMerchandizingRule(requestParameters: searchMerchandizingRuleApiParams.DeleteSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteSearchMerchandizingRuleRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves a search merchandizing rule based on its code.
     * Get Search Merchandizing Rule
     */


    async getSearchMerchandizingRuleRaw(requestParameters: searchMerchandizingRuleApiParams.GetSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsSearchMerchandizingRule>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling getSearchMerchandizingRule.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/searchmerchandizingrules/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a search merchandizing rule based on its code.
     * Get Search Merchandizing Rule
     */
    async getSearchMerchandizingRule(requestParameters: searchMerchandizingRuleApiParams.GetSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsSearchMerchandizingRule> {
        const response = await this.getSearchMerchandizingRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a list of all search merchandizing rules. You can filter this query by CategoryCode, which supports an EQ (equals) filter with the syntax /catalog/admin/searchmerchandizingrules/?filter=categorycode eq AAA
     * Get Search Merchandizing Rules
     */


    async getSearchMerchandizingRulesRaw(requestParameters: searchMerchandizingRuleApiParams.GetSearchMerchandizingRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchMerchandizingRuleCollection>> {
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

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.responseGroups !== undefined) {
            queryParameters['responseGroups'] = requestParameters.responseGroups;
        }

        if (requestParameters.q !== undefined) {
            queryParameters['q'] = requestParameters.q;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/searchmerchandizingrules`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieve a list of all search merchandizing rules. You can filter this query by CategoryCode, which supports an EQ (equals) filter with the syntax /catalog/admin/searchmerchandizingrules/?filter=categorycode eq AAA
     * Get Search Merchandizing Rules
     */
    async getSearchMerchandizingRules(requestParameters: searchMerchandizingRuleApiParams.GetSearchMerchandizingRulesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchMerchandizingRuleCollection> {
        const response = await this.getSearchMerchandizingRulesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates an existing search merchandizing rule.
     * Update Search Merchandizing Rule
     */


    async updateSearchMerchandizingRuleRaw(requestParameters: searchMerchandizingRuleApiParams.UpdateSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsSearchMerchandizingRule>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling updateSearchMerchandizingRule.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/searchmerchandizingrules/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsSearchMerchandizingRule,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates an existing search merchandizing rule.
     * Update Search Merchandizing Rule
     */
    async updateSearchMerchandizingRule(requestParameters: searchMerchandizingRuleApiParams.UpdateSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsSearchMerchandizingRule> {
        const response = await this.updateSearchMerchandizingRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
