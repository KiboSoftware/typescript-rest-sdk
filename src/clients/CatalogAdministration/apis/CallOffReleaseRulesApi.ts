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
  CallOffReleaseRule,
  CallOffReleaseRuleCollection,
  UpdateRankRequest,
} from '../models';


export namespace callOffReleaseRulesApiParams { 
    export interface CreateCallOffReleaseRuleRequest {
        responseFields?: string;
        callOffReleaseRule?: CallOffReleaseRule;
    }
    export interface DeleteCallOffReleaseRuleRequest {
        code: string;
    }
    export interface GetCallOffReleaseRuleRequest {
        code: string;
        responseFields?: string;
    }
    export interface GetCallOffReleaseRulesRequest {
        startIndex?: number;
        pageSize?: number;
        sortBy?: string;
        filter?: string;
        responseFields?: string;
    }
    export interface UpdateCallOffReleaseRuleRequest {
        code: string;
        responseFields?: string;
        callOffReleaseRule?: CallOffReleaseRule;
    }
    export interface UpdateRankOperationRequest {
        code: string;
        responseFields?: string;
        updateRankRequest?: UpdateRankRequest;
    }
}
/**
* CallOffReleaseRulesApiService - interface
* 
* @export
* @interface CallOffReleaseRulesApi
*/
export interface CallOffReleaseRulesApiService {
    /**
    * Creates a new call-off release rule.
    * @summary Create call-off release rule
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CallOffReleaseRule} [callOffReleaseRule] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CallOffReleaseRulesApiInterface
    */
    createCallOffReleaseRuleRaw(requestParameters: callOffReleaseRulesApiParams.CreateCallOffReleaseRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CallOffReleaseRule>>;

    /**
    * Creates a new call-off release rule.
    * Create call-off release rule
    */
    createCallOffReleaseRule(requestParameters: callOffReleaseRulesApiParams.CreateCallOffReleaseRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CallOffReleaseRule>;

    /**
    * Permanently deletes a call-off release rule (FR-013 hard delete).
    * @summary Delete call-off release rule
    * @param {string} code 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CallOffReleaseRulesApiInterface
    */
    deleteCallOffReleaseRuleRaw(requestParameters: callOffReleaseRulesApiParams.DeleteCallOffReleaseRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Permanently deletes a call-off release rule (FR-013 hard delete).
    * Delete call-off release rule
    */
    deleteCallOffReleaseRule(requestParameters: callOffReleaseRulesApiParams.DeleteCallOffReleaseRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Gets a call-off release rule by its unique code.
    * @summary Get call-off release rule by code
    * @param {string} code 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CallOffReleaseRulesApiInterface
    */
    getCallOffReleaseRuleRaw(requestParameters: callOffReleaseRulesApiParams.GetCallOffReleaseRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CallOffReleaseRule>>;

    /**
    * Gets a call-off release rule by its unique code.
    * Get call-off release rule by code
    */
    getCallOffReleaseRule(requestParameters: callOffReleaseRulesApiParams.GetCallOffReleaseRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CallOffReleaseRule>;

    /**
    * Gets a paged collection of call-off release rules according to any specified filter criteria and sort options.
    * @summary Get call-off release rules
    * @param {number} [startIndex] 
    * @param {number} [pageSize] 
    * @param {string} [sortBy] 
    * @param {string} [filter] 
    * @param {string} [responseFields] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CallOffReleaseRulesApiInterface
    */
    getCallOffReleaseRulesRaw(requestParameters: callOffReleaseRulesApiParams.GetCallOffReleaseRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CallOffReleaseRuleCollection>>;

    /**
    * Gets a paged collection of call-off release rules according to any specified filter criteria and sort options.
    * Get call-off release rules
    */
    getCallOffReleaseRules(requestParameters: callOffReleaseRulesApiParams.GetCallOffReleaseRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CallOffReleaseRuleCollection>;

    /**
    * Updates an existing call-off release rule with full replacement semantics (FR-009).
    * @summary Update call-off release rule
    * @param {string} code 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CallOffReleaseRule} [callOffReleaseRule] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CallOffReleaseRulesApiInterface
    */
    updateCallOffReleaseRuleRaw(requestParameters: callOffReleaseRulesApiParams.UpdateCallOffReleaseRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CallOffReleaseRule>>;

    /**
    * Updates an existing call-off release rule with full replacement semantics (FR-009).
    * Update call-off release rule
    */
    updateCallOffReleaseRule(requestParameters: callOffReleaseRulesApiParams.UpdateCallOffReleaseRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CallOffReleaseRule>;

    /**
    * Atomically reorders ranks within the current master catalog. Returns 204 No Content (FR-019).
    * @summary Update call-off release rule rank
    * @param {string} code 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {UpdateRankRequest} [updateRankRequest] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CallOffReleaseRulesApiInterface
    */
    updateRankRaw(requestParameters: callOffReleaseRulesApiParams.UpdateRankOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Atomically reorders ranks within the current master catalog. Returns 204 No Content (FR-019).
    * Update call-off release rule rank
    */
    updateRank(requestParameters: callOffReleaseRulesApiParams.UpdateRankOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

}


/**
 * 
 */
export class CallOffReleaseRulesApi extends runtime.BaseAPI implements CallOffReleaseRulesApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Creates a new call-off release rule.
     * Create call-off release rule
     */


    async createCallOffReleaseRuleRaw(requestParameters: callOffReleaseRulesApiParams.CreateCallOffReleaseRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CallOffReleaseRule>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/calloffrelease`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.callOffReleaseRule,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates a new call-off release rule.
     * Create call-off release rule
     */
    async createCallOffReleaseRule(requestParameters: callOffReleaseRulesApiParams.CreateCallOffReleaseRuleRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CallOffReleaseRule> {
        const response = await this.createCallOffReleaseRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Permanently deletes a call-off release rule (FR-013 hard delete).
     * Delete call-off release rule
     */


    async deleteCallOffReleaseRuleRaw(requestParameters: callOffReleaseRulesApiParams.DeleteCallOffReleaseRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling deleteCallOffReleaseRule.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/calloffrelease/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Permanently deletes a call-off release rule (FR-013 hard delete).
     * Delete call-off release rule
     */
    async deleteCallOffReleaseRule(requestParameters: callOffReleaseRulesApiParams.DeleteCallOffReleaseRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCallOffReleaseRuleRaw(requestParameters, initOverrides);
    }

    /**
     * Gets a call-off release rule by its unique code.
     * Get call-off release rule by code
     */


    async getCallOffReleaseRuleRaw(requestParameters: callOffReleaseRulesApiParams.GetCallOffReleaseRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CallOffReleaseRule>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling getCallOffReleaseRule.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/calloffrelease/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Gets a call-off release rule by its unique code.
     * Get call-off release rule by code
     */
    async getCallOffReleaseRule(requestParameters: callOffReleaseRulesApiParams.GetCallOffReleaseRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CallOffReleaseRule> {
        const response = await this.getCallOffReleaseRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets a paged collection of call-off release rules according to any specified filter criteria and sort options.
     * Get call-off release rules
     */


    async getCallOffReleaseRulesRaw(requestParameters: callOffReleaseRulesApiParams.GetCallOffReleaseRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CallOffReleaseRuleCollection>> {
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

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/calloffrelease`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Gets a paged collection of call-off release rules according to any specified filter criteria and sort options.
     * Get call-off release rules
     */
    async getCallOffReleaseRules(requestParameters: callOffReleaseRulesApiParams.GetCallOffReleaseRulesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CallOffReleaseRuleCollection> {
        const response = await this.getCallOffReleaseRulesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates an existing call-off release rule with full replacement semantics (FR-009).
     * Update call-off release rule
     */


    async updateCallOffReleaseRuleRaw(requestParameters: callOffReleaseRulesApiParams.UpdateCallOffReleaseRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CallOffReleaseRule>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling updateCallOffReleaseRule.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/calloffrelease/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.callOffReleaseRule,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates an existing call-off release rule with full replacement semantics (FR-009).
     * Update call-off release rule
     */
    async updateCallOffReleaseRule(requestParameters: callOffReleaseRulesApiParams.UpdateCallOffReleaseRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CallOffReleaseRule> {
        const response = await this.updateCallOffReleaseRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Atomically reorders ranks within the current master catalog. Returns 204 No Content (FR-019).
     * Update call-off release rule rank
     */


    async updateRankRaw(requestParameters: callOffReleaseRulesApiParams.UpdateRankOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling updateRank.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/calloffrelease/{code}/rank`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.updateRankRequest,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Atomically reorders ranks within the current master catalog. Returns 204 No Content (FR-019).
     * Update call-off release rule rank
     */
    async updateRank(requestParameters: callOffReleaseRulesApiParams.UpdateRankOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateRankRaw(requestParameters, initOverrides);
    }

}
