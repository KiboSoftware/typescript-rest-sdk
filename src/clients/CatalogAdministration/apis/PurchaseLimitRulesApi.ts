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
  PurchaseLimitRule,
  PurchaseLimitRuleCollection,
  UpdateRankRequest,
} from '../models';


export namespace purchaseLimitRulesApiParams { 
    export interface CreatePurchaseLimitRuleRequest {
        responseFields?: string;
        purchaseLimitRule?: PurchaseLimitRule;
    }
    export interface DeletePurchaseLimitRuleRequest {
        code: string;
    }
    export interface GetPurchaseLimitRuleRequest {
        code: string;
        responseFields?: string;
    }
    export interface GetPurchaseLimitRulesRequest {
        startIndex?: number;
        pageSize?: number;
        sortBy?: string;
        filter?: string;
        responseGroups?: string;
        responseFields?: string;
    }
    export interface UpdatePurchaseLimitRuleRequest {
        code: string;
        responseFields?: string;
        purchaseLimitRule?: PurchaseLimitRule;
    }
    export interface UpdateRankOperationRequest {
        code: string;
        responseFields?: string;
        updateRankRequest?: UpdateRankRequest;
    }
}
/**
* PurchaseLimitRulesApiService - interface
* 
* @export
* @interface PurchaseLimitRulesApi
*/
export interface PurchaseLimitRulesApiService {
    /**
    * Creates a new <a href=\"/pages/purchase-limit-rules\">purchase limit rule</a>.
    * @summary Create Purchase Limit Rule
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {PurchaseLimitRule} [purchaseLimitRule] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PurchaseLimitRulesApiInterface
    */
    createPurchaseLimitRuleRaw(requestParameters: purchaseLimitRulesApiParams.CreatePurchaseLimitRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PurchaseLimitRule>>;

    /**
    * Creates a new <a href=\"/pages/purchase-limit-rules\">purchase limit rule</a>.
    * Create Purchase Limit Rule
    */
    createPurchaseLimitRule(requestParameters: purchaseLimitRulesApiParams.CreatePurchaseLimitRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PurchaseLimitRule>;

    /**
    * Deletes a <a href=\"/pages/purchase-limit-rules\">purchase limit rule</a> by code.
    * @summary Delete Purchase Limit Rule
    * @param {string} code The code of the purchase limit rule to delete.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PurchaseLimitRulesApiInterface
    */
    deletePurchaseLimitRuleRaw(requestParameters: purchaseLimitRulesApiParams.DeletePurchaseLimitRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Deletes a <a href=\"/pages/purchase-limit-rules\">purchase limit rule</a> by code.
    * Delete Purchase Limit Rule
    */
    deletePurchaseLimitRule(requestParameters: purchaseLimitRulesApiParams.DeletePurchaseLimitRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Gets <a href=\"/pages/purchase-limit-rules\">purchase limit rule</a> details by code.
    * @summary Get Purchase Limit Rule by Code
    * @param {string} code The code of the purchase limit rule.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PurchaseLimitRulesApiInterface
    */
    getPurchaseLimitRuleRaw(requestParameters: purchaseLimitRulesApiParams.GetPurchaseLimitRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PurchaseLimitRule>>;

    /**
    * Gets <a href=\"/pages/purchase-limit-rules\">purchase limit rule</a> details by code.
    * Get Purchase Limit Rule by Code
    */
    getPurchaseLimitRule(requestParameters: purchaseLimitRulesApiParams.GetPurchaseLimitRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PurchaseLimitRule>;

    /**
    * Gets a collection of <a href=\"/pages/purchase-limit-rules\">purchase limit rules</a> according to any specified filter criteria and sort options.
    * @summary Get Purchase Limit Rules
    * @param {number} [startIndex] The start index for pagination.
    * @param {number} [pageSize] The page size for pagination.
    * @param {string} [sortBy] The sort by parameter.
    * @param {string} [filter] The filter parameter.
    * @param {string} [responseGroups] The response groups parameter.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PurchaseLimitRulesApiInterface
    */
    getPurchaseLimitRulesRaw(requestParameters: purchaseLimitRulesApiParams.GetPurchaseLimitRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PurchaseLimitRuleCollection>>;

    /**
    * Gets a collection of <a href=\"/pages/purchase-limit-rules\">purchase limit rules</a> according to any specified filter criteria and sort options.
    * Get Purchase Limit Rules
    */
    getPurchaseLimitRules(requestParameters: purchaseLimitRulesApiParams.GetPurchaseLimitRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PurchaseLimitRuleCollection>;

    /**
    * Updates an existing <a href=\"/pages/purchase-limit-rules\">purchase limit rule</a>.
    * @summary Update Purchase Limit Rule
    * @param {string} code The code of the purchase limit rule to update.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {PurchaseLimitRule} [purchaseLimitRule] The updated purchase limit rule.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PurchaseLimitRulesApiInterface
    */
    updatePurchaseLimitRuleRaw(requestParameters: purchaseLimitRulesApiParams.UpdatePurchaseLimitRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PurchaseLimitRule>>;

    /**
    * Updates an existing <a href=\"/pages/purchase-limit-rules\">purchase limit rule</a>.
    * Update Purchase Limit Rule
    */
    updatePurchaseLimitRule(requestParameters: purchaseLimitRulesApiParams.UpdatePurchaseLimitRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PurchaseLimitRule>;

    /**
    * Updates the rank for a <a href=\"/pages/purchase-limit-rules\">purchase limit rule</a> and rearranges the ranks of all other rules accordingly.
    * @summary Update Purchase Limit Rule Rank
    * @param {string} code 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {UpdateRankRequest} [updateRankRequest] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PurchaseLimitRulesApiInterface
    */
    updateRankRaw(requestParameters: purchaseLimitRulesApiParams.UpdateRankOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Updates the rank for a <a href=\"/pages/purchase-limit-rules\">purchase limit rule</a> and rearranges the ranks of all other rules accordingly.
    * Update Purchase Limit Rule Rank
    */
    updateRank(requestParameters: purchaseLimitRulesApiParams.UpdateRankOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

}


/**
 * 
 */
export class PurchaseLimitRulesApi extends runtime.BaseAPI implements PurchaseLimitRulesApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Creates a new <a href=\"/pages/purchase-limit-rules\">purchase limit rule</a>.
     * Create Purchase Limit Rule
     */


    async createPurchaseLimitRuleRaw(requestParameters: purchaseLimitRulesApiParams.CreatePurchaseLimitRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PurchaseLimitRule>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/purchaselimit`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.purchaseLimitRule,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates a new <a href=\"/pages/purchase-limit-rules\">purchase limit rule</a>.
     * Create Purchase Limit Rule
     */
    async createPurchaseLimitRule(requestParameters: purchaseLimitRulesApiParams.CreatePurchaseLimitRuleRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PurchaseLimitRule> {
        const response = await this.createPurchaseLimitRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a <a href=\"/pages/purchase-limit-rules\">purchase limit rule</a> by code.
     * Delete Purchase Limit Rule
     */


    async deletePurchaseLimitRuleRaw(requestParameters: purchaseLimitRulesApiParams.DeletePurchaseLimitRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling deletePurchaseLimitRule.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/purchaselimit/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a <a href=\"/pages/purchase-limit-rules\">purchase limit rule</a> by code.
     * Delete Purchase Limit Rule
     */
    async deletePurchaseLimitRule(requestParameters: purchaseLimitRulesApiParams.DeletePurchaseLimitRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePurchaseLimitRuleRaw(requestParameters, initOverrides);
    }

    /**
     * Gets <a href=\"/pages/purchase-limit-rules\">purchase limit rule</a> details by code.
     * Get Purchase Limit Rule by Code
     */


    async getPurchaseLimitRuleRaw(requestParameters: purchaseLimitRulesApiParams.GetPurchaseLimitRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PurchaseLimitRule>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling getPurchaseLimitRule.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/purchaselimit/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Gets <a href=\"/pages/purchase-limit-rules\">purchase limit rule</a> details by code.
     * Get Purchase Limit Rule by Code
     */
    async getPurchaseLimitRule(requestParameters: purchaseLimitRulesApiParams.GetPurchaseLimitRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PurchaseLimitRule> {
        const response = await this.getPurchaseLimitRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets a collection of <a href=\"/pages/purchase-limit-rules\">purchase limit rules</a> according to any specified filter criteria and sort options.
     * Get Purchase Limit Rules
     */


    async getPurchaseLimitRulesRaw(requestParameters: purchaseLimitRulesApiParams.GetPurchaseLimitRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PurchaseLimitRuleCollection>> {
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
            path: `/commerce/rules/purchaselimit`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Gets a collection of <a href=\"/pages/purchase-limit-rules\">purchase limit rules</a> according to any specified filter criteria and sort options.
     * Get Purchase Limit Rules
     */
    async getPurchaseLimitRules(requestParameters: purchaseLimitRulesApiParams.GetPurchaseLimitRulesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PurchaseLimitRuleCollection> {
        const response = await this.getPurchaseLimitRulesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates an existing <a href=\"/pages/purchase-limit-rules\">purchase limit rule</a>.
     * Update Purchase Limit Rule
     */


    async updatePurchaseLimitRuleRaw(requestParameters: purchaseLimitRulesApiParams.UpdatePurchaseLimitRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PurchaseLimitRule>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling updatePurchaseLimitRule.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/purchaselimit/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.purchaseLimitRule,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates an existing <a href=\"/pages/purchase-limit-rules\">purchase limit rule</a>.
     * Update Purchase Limit Rule
     */
    async updatePurchaseLimitRule(requestParameters: purchaseLimitRulesApiParams.UpdatePurchaseLimitRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PurchaseLimitRule> {
        const response = await this.updatePurchaseLimitRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates the rank for a <a href=\"/pages/purchase-limit-rules\">purchase limit rule</a> and rearranges the ranks of all other rules accordingly.
     * Update Purchase Limit Rule Rank
     */


    async updateRankRaw(requestParameters: purchaseLimitRulesApiParams.UpdateRankOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
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
            path: `/commerce/rules/purchaselimit/{code}/rank`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.updateRankRequest,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates the rank for a <a href=\"/pages/purchase-limit-rules\">purchase limit rule</a> and rearranges the ranks of all other rules accordingly.
     * Update Purchase Limit Rule Rank
     */
    async updateRank(requestParameters: purchaseLimitRulesApiParams.UpdateRankOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateRankRaw(requestParameters, initOverrides);
    }

}
