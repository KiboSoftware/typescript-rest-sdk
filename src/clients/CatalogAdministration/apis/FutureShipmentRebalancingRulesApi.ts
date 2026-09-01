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
  FutureShipmentRebalancingRule,
  FutureShipmentRebalancingRuleCollection,
  UpdateRankRequest,
} from '../models';


export namespace futureShipmentRebalancingRulesApiParams { 
    export interface CreateRuleRequest {
        responseFields?: string;
        futureShipmentRebalancingRule?: FutureShipmentRebalancingRule;
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
        futureShipmentRebalancingRule?: FutureShipmentRebalancingRule;
    }
}
/**
* FutureShipmentRebalancingRulesApiService - interface
* 
* @export
* @interface FutureShipmentRebalancingRulesApi
*/
export interface FutureShipmentRebalancingRulesApiService {
    /**
    * Creates a new future shipment rebalancing rule.
    * @summary Create future shipment rebalancing rule
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {FutureShipmentRebalancingRule} [futureShipmentRebalancingRule] The rule to create. Code is auto-generated if omitted.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof FutureShipmentRebalancingRulesApiInterface
    */
    createRuleRaw(requestParameters: futureShipmentRebalancingRulesApiParams.CreateRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FutureShipmentRebalancingRule>>;

    /**
    * Creates a new future shipment rebalancing rule.
    * Create future shipment rebalancing rule
    */
    createRule(requestParameters: futureShipmentRebalancingRulesApiParams.CreateRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FutureShipmentRebalancingRule>;

    /**
    * Deletes a future shipment rebalancing rule by code.
    * @summary Delete future shipment rebalancing rule
    * @param {string} code The rule code to delete.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof FutureShipmentRebalancingRulesApiInterface
    */
    deleteRuleRaw(requestParameters: futureShipmentRebalancingRulesApiParams.DeleteRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Deletes a future shipment rebalancing rule by code.
    * Delete future shipment rebalancing rule
    */
    deleteRule(requestParameters: futureShipmentRebalancingRulesApiParams.DeleteRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Gets a future shipment rebalancing rule details by code.
    * @summary Get future shipment rebalancing rule by code
    * @param {string} code The unique rule code.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof FutureShipmentRebalancingRulesApiInterface
    */
    getRuleRaw(requestParameters: futureShipmentRebalancingRulesApiParams.GetRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FutureShipmentRebalancingRule>>;

    /**
    * Gets a future shipment rebalancing rule details by code.
    * Get future shipment rebalancing rule by code
    */
    getRule(requestParameters: futureShipmentRebalancingRulesApiParams.GetRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FutureShipmentRebalancingRule>;

    /**
    * Gets a collection of future shipment rebalancing rules according to any specified filter criteria and sort options.
    * @summary Get future shipment rebalancing rules
    * @param {number} [startIndex] Zero-based start index for pagination.
    * @param {number} [pageSize] Number of items per page.
    * @param {string} [sortBy] Sort expression (e.g. \&#39;rank asc\&#39;).
    * @param {string} [filter] Filter expression (e.g. \&#39;enabled eq true\&#39;).
    * @param {string} [responseGroups] Response groups (currently unused).
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof FutureShipmentRebalancingRulesApiInterface
    */
    getRulesRaw(requestParameters: futureShipmentRebalancingRulesApiParams.GetRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FutureShipmentRebalancingRuleCollection>>;

    /**
    * Gets a collection of future shipment rebalancing rules according to any specified filter criteria and sort options.
    * Get future shipment rebalancing rules
    */
    getRules(requestParameters: futureShipmentRebalancingRulesApiParams.GetRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FutureShipmentRebalancingRuleCollection>;

    /**
    * Updates the rank for a future shipment rebalancing rule and rearranges the ranks of all other rules accordingly.
    * @summary Update future shipment rebalancing rule rank
    * @param {string} code The rule code whose rank to update.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {UpdateRankRequest} [updateRankRequest] Contains OldRank and NewRank values.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof FutureShipmentRebalancingRulesApiInterface
    */
    updateRankRaw(requestParameters: futureShipmentRebalancingRulesApiParams.UpdateRankOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Updates the rank for a future shipment rebalancing rule and rearranges the ranks of all other rules accordingly.
    * Update future shipment rebalancing rule rank
    */
    updateRank(requestParameters: futureShipmentRebalancingRulesApiParams.UpdateRankOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Updates an existing future shipment rebalancing rule.
    * @summary Update future shipment rebalancing rule
    * @param {string} code The rule code to update.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {FutureShipmentRebalancingRule} [futureShipmentRebalancingRule] The updated rule. Code in body must match URL code.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof FutureShipmentRebalancingRulesApiInterface
    */
    updateRuleRaw(requestParameters: futureShipmentRebalancingRulesApiParams.UpdateRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FutureShipmentRebalancingRule>>;

    /**
    * Updates an existing future shipment rebalancing rule.
    * Update future shipment rebalancing rule
    */
    updateRule(requestParameters: futureShipmentRebalancingRulesApiParams.UpdateRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FutureShipmentRebalancingRule>;

}


/**
 * 
 */
export class FutureShipmentRebalancingRulesApi extends runtime.BaseAPI implements FutureShipmentRebalancingRulesApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Creates a new future shipment rebalancing rule.
     * Create future shipment rebalancing rule
     */


    async createRuleRaw(requestParameters: futureShipmentRebalancingRulesApiParams.CreateRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FutureShipmentRebalancingRule>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/futureshipmentrebalancing`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.futureShipmentRebalancingRule,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates a new future shipment rebalancing rule.
     * Create future shipment rebalancing rule
     */
    async createRule(requestParameters: futureShipmentRebalancingRulesApiParams.CreateRuleRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FutureShipmentRebalancingRule> {
        const response = await this.createRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a future shipment rebalancing rule by code.
     * Delete future shipment rebalancing rule
     */


    async deleteRuleRaw(requestParameters: futureShipmentRebalancingRulesApiParams.DeleteRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling deleteRule.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/futureshipmentrebalancing/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a future shipment rebalancing rule by code.
     * Delete future shipment rebalancing rule
     */
    async deleteRule(requestParameters: futureShipmentRebalancingRulesApiParams.DeleteRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteRuleRaw(requestParameters, initOverrides);
    }

    /**
     * Gets a future shipment rebalancing rule details by code.
     * Get future shipment rebalancing rule by code
     */


    async getRuleRaw(requestParameters: futureShipmentRebalancingRulesApiParams.GetRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FutureShipmentRebalancingRule>> {
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
            path: `/commerce/rules/futureshipmentrebalancing/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Gets a future shipment rebalancing rule details by code.
     * Get future shipment rebalancing rule by code
     */
    async getRule(requestParameters: futureShipmentRebalancingRulesApiParams.GetRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FutureShipmentRebalancingRule> {
        const response = await this.getRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets a collection of future shipment rebalancing rules according to any specified filter criteria and sort options.
     * Get future shipment rebalancing rules
     */


    async getRulesRaw(requestParameters: futureShipmentRebalancingRulesApiParams.GetRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FutureShipmentRebalancingRuleCollection>> {
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
            path: `/commerce/rules/futureshipmentrebalancing`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Gets a collection of future shipment rebalancing rules according to any specified filter criteria and sort options.
     * Get future shipment rebalancing rules
     */
    async getRules(requestParameters: futureShipmentRebalancingRulesApiParams.GetRulesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FutureShipmentRebalancingRuleCollection> {
        const response = await this.getRulesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates the rank for a future shipment rebalancing rule and rearranges the ranks of all other rules accordingly.
     * Update future shipment rebalancing rule rank
     */


    async updateRankRaw(requestParameters: futureShipmentRebalancingRulesApiParams.UpdateRankOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
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
            path: `/commerce/rules/futureshipmentrebalancing/{code}/rank`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.updateRankRequest,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates the rank for a future shipment rebalancing rule and rearranges the ranks of all other rules accordingly.
     * Update future shipment rebalancing rule rank
     */
    async updateRank(requestParameters: futureShipmentRebalancingRulesApiParams.UpdateRankOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateRankRaw(requestParameters, initOverrides);
    }

    /**
     * Updates an existing future shipment rebalancing rule.
     * Update future shipment rebalancing rule
     */


    async updateRuleRaw(requestParameters: futureShipmentRebalancingRulesApiParams.UpdateRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FutureShipmentRebalancingRule>> {
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
            path: `/commerce/rules/futureshipmentrebalancing/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.futureShipmentRebalancingRule,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates an existing future shipment rebalancing rule.
     * Update future shipment rebalancing rule
     */
    async updateRule(requestParameters: futureShipmentRebalancingRulesApiParams.UpdateRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FutureShipmentRebalancingRule> {
        const response = await this.updateRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
