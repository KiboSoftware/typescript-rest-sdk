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
  BackorderRebalancingRule,
  BackorderRebalancingRuleCollection,
  UpdateRankRequest,
} from '../models';


export namespace backorderRebalancingRulesApiParams { 
    export interface CreateRuleRequest {
        responseFields?: string;
        backorderRebalancingRule?: BackorderRebalancingRule;
    }
    export interface DeleteRuleRequest {
        code: string;
    }
    export interface GetRuleRequest {
        code: string;
        responseFields?: string;
    }
    export interface GetRulesRequest {
        startIndex?: number;
        pageSize?: number;
        sortBy?: string;
        filter?: string;
        responseGroups?: string;
        responseFields?: string;
    }
    export interface UpdateRankOperationRequest {
        code: string;
        responseFields?: string;
        updateRankRequest?: UpdateRankRequest;
    }
    export interface UpdateRuleRequest {
        code: string;
        responseFields?: string;
        backorderRebalancingRule?: BackorderRebalancingRule;
    }
}
/**
* BackorderRebalancingRulesApiService - interface
* 
* @export
* @interface BackorderRebalancingRulesApi
*/
export interface BackorderRebalancingRulesApiService {
    /**
    * Creates a new back order rebalancing rule.
    * @summary Create back order rebalancing rule
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {BackorderRebalancingRule} [backorderRebalancingRule] The rule to create. Code is auto-generated if omitted.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof BackorderRebalancingRulesApiInterface
    */
    createRuleRaw(requestParameters: backorderRebalancingRulesApiParams.CreateRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BackorderRebalancingRule>>;

    /**
    * Creates a new back order rebalancing rule.
    * Create back order rebalancing rule
    */
    createRule(requestParameters: backorderRebalancingRulesApiParams.CreateRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BackorderRebalancingRule>;

    /**
    * Deletes a back order rebalancing rule by code.
    * @summary Delete back order rebalancing rule
    * @param {string} code The rule code to delete.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof BackorderRebalancingRulesApiInterface
    */
    deleteRuleRaw(requestParameters: backorderRebalancingRulesApiParams.DeleteRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Deletes a back order rebalancing rule by code.
    * Delete back order rebalancing rule
    */
    deleteRule(requestParameters: backorderRebalancingRulesApiParams.DeleteRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Gets a back order rebalancing rule details by code.
    * @summary Get back order rebalancing rule by code
    * @param {string} code The unique rule code.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof BackorderRebalancingRulesApiInterface
    */
    getRuleRaw(requestParameters: backorderRebalancingRulesApiParams.GetRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BackorderRebalancingRule>>;

    /**
    * Gets a back order rebalancing rule details by code.
    * Get back order rebalancing rule by code
    */
    getRule(requestParameters: backorderRebalancingRulesApiParams.GetRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BackorderRebalancingRule>;

    /**
    * Gets a collection of back order rebalancing rules according to any specified filter criteria and sort options.
    * @summary Get back order rebalancing rules
    * @param {number} [startIndex] Zero-based start index for pagination.
    * @param {number} [pageSize] Number of items per page.
    * @param {string} [sortBy] Sort expression (e.g. \&#39;rank asc\&#39;).
    * @param {string} [filter] Filter expression (e.g. \&#39;enabled eq true\&#39;).
    * @param {string} [responseGroups] Response groups (currently unused).
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof BackorderRebalancingRulesApiInterface
    */
    getRulesRaw(requestParameters: backorderRebalancingRulesApiParams.GetRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BackorderRebalancingRuleCollection>>;

    /**
    * Gets a collection of back order rebalancing rules according to any specified filter criteria and sort options.
    * Get back order rebalancing rules
    */
    getRules(requestParameters: backorderRebalancingRulesApiParams.GetRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BackorderRebalancingRuleCollection>;

    /**
    * Updates the rank for a back order rebalancing rule and rearranges the ranks of all other rules accordingly.
    * @summary Update back order rebalancing rule rank
    * @param {string} code The rule code whose rank to update.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {UpdateRankRequest} [updateRankRequest] Contains OldRank and NewRank values.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof BackorderRebalancingRulesApiInterface
    */
    updateRankRaw(requestParameters: backorderRebalancingRulesApiParams.UpdateRankOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Updates the rank for a back order rebalancing rule and rearranges the ranks of all other rules accordingly.
    * Update back order rebalancing rule rank
    */
    updateRank(requestParameters: backorderRebalancingRulesApiParams.UpdateRankOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Updates an existing back order rebalancing rule.
    * @summary Update back order rebalancing rule
    * @param {string} code The rule code to update.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {BackorderRebalancingRule} [backorderRebalancingRule] The updated rule. Code in body must match URL code.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof BackorderRebalancingRulesApiInterface
    */
    updateRuleRaw(requestParameters: backorderRebalancingRulesApiParams.UpdateRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BackorderRebalancingRule>>;

    /**
    * Updates an existing back order rebalancing rule.
    * Update back order rebalancing rule
    */
    updateRule(requestParameters: backorderRebalancingRulesApiParams.UpdateRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BackorderRebalancingRule>;

}


/**
 * 
 */
export class BackorderRebalancingRulesApi extends runtime.BaseAPI implements BackorderRebalancingRulesApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Creates a new back order rebalancing rule.
     * Create back order rebalancing rule
     */


    async createRuleRaw(requestParameters: backorderRebalancingRulesApiParams.CreateRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BackorderRebalancingRule>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/backorderrebalancing`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.backorderRebalancingRule,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates a new back order rebalancing rule.
     * Create back order rebalancing rule
     */
    async createRule(requestParameters: backorderRebalancingRulesApiParams.CreateRuleRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BackorderRebalancingRule> {
        const response = await this.createRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a back order rebalancing rule by code.
     * Delete back order rebalancing rule
     */


    async deleteRuleRaw(requestParameters: backorderRebalancingRulesApiParams.DeleteRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling deleteRule.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/backorderrebalancing/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a back order rebalancing rule by code.
     * Delete back order rebalancing rule
     */
    async deleteRule(requestParameters: backorderRebalancingRulesApiParams.DeleteRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteRuleRaw(requestParameters, initOverrides);
    }

    /**
     * Gets a back order rebalancing rule details by code.
     * Get back order rebalancing rule by code
     */


    async getRuleRaw(requestParameters: backorderRebalancingRulesApiParams.GetRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BackorderRebalancingRule>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling getRule.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/backorderrebalancing/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Gets a back order rebalancing rule details by code.
     * Get back order rebalancing rule by code
     */
    async getRule(requestParameters: backorderRebalancingRulesApiParams.GetRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BackorderRebalancingRule> {
        const response = await this.getRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets a collection of back order rebalancing rules according to any specified filter criteria and sort options.
     * Get back order rebalancing rules
     */


    async getRulesRaw(requestParameters: backorderRebalancingRulesApiParams.GetRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BackorderRebalancingRuleCollection>> {
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

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/backorderrebalancing`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Gets a collection of back order rebalancing rules according to any specified filter criteria and sort options.
     * Get back order rebalancing rules
     */
    async getRules(requestParameters: backorderRebalancingRulesApiParams.GetRulesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BackorderRebalancingRuleCollection> {
        const response = await this.getRulesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates the rank for a back order rebalancing rule and rearranges the ranks of all other rules accordingly.
     * Update back order rebalancing rule rank
     */


    async updateRankRaw(requestParameters: backorderRebalancingRulesApiParams.UpdateRankOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
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
            path: `/commerce/rules/backorderrebalancing/{code}/rank`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.updateRankRequest,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates the rank for a back order rebalancing rule and rearranges the ranks of all other rules accordingly.
     * Update back order rebalancing rule rank
     */
    async updateRank(requestParameters: backorderRebalancingRulesApiParams.UpdateRankOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateRankRaw(requestParameters, initOverrides);
    }

    /**
     * Updates an existing back order rebalancing rule.
     * Update back order rebalancing rule
     */


    async updateRuleRaw(requestParameters: backorderRebalancingRulesApiParams.UpdateRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BackorderRebalancingRule>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling updateRule.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/backorderrebalancing/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.backorderRebalancingRule,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates an existing back order rebalancing rule.
     * Update back order rebalancing rule
     */
    async updateRule(requestParameters: backorderRebalancingRulesApiParams.UpdateRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BackorderRebalancingRule> {
        const response = await this.updateRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
