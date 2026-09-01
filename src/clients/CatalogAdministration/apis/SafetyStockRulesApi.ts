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
  SafetyStockRule,
  SafetyStockRuleCollection,
  UpdateRankRequest,
} from '../models';


export namespace safetyStockRulesApiParams { 
    export interface CreateSafetyStockRuleRequest {
        responseFields?: string;
        safetyStockRule?: SafetyStockRule;
    }
    export interface DeleteSafetyStockRuleRequest {
        code: string;
    }
    export interface GetSafetyStockRuleRequest {
        code: string;
        responseFields?: string;
    }
    export interface GetSafetyStockRulesRequest {
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
    export interface UpdateSafetyStockRuleRequest {
        code: string;
        responseFields?: string;
        safetyStockRule?: SafetyStockRule;
    }
}
/**
* SafetyStockRulesApiService - interface
* 
* @export
* @interface SafetyStockRulesApi
*/
export interface SafetyStockRulesApiService {
    /**
    * Creates a new <a href=\"/pages/safety-stock-rules\">safety stock rule</a>.
    * @summary Create Safety Stock Rule
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {SafetyStockRule} [safetyStockRule] The safety stock rule to create.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SafetyStockRulesApiInterface
    */
    createSafetyStockRuleRaw(requestParameters: safetyStockRulesApiParams.CreateSafetyStockRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SafetyStockRule>>;

    /**
    * Creates a new <a href=\"/pages/safety-stock-rules\">safety stock rule</a>.
    * Create Safety Stock Rule
    */
    createSafetyStockRule(requestParameters: safetyStockRulesApiParams.CreateSafetyStockRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SafetyStockRule>;

    /**
    * Deletes a <a href=\"/pages/safety-stock-rules\">safety stock rule</a> by code.
    * @summary Delete Safety Stock Rule
    * @param {string} code The code of the safety stock rule to delete.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SafetyStockRulesApiInterface
    */
    deleteSafetyStockRuleRaw(requestParameters: safetyStockRulesApiParams.DeleteSafetyStockRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Deletes a <a href=\"/pages/safety-stock-rules\">safety stock rule</a> by code.
    * Delete Safety Stock Rule
    */
    deleteSafetyStockRule(requestParameters: safetyStockRulesApiParams.DeleteSafetyStockRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Gets <a href=\"/pages/safety-stock-rules\">safety stock rule details</a> by code.
    * @summary Get Safety Stock Rule by Code
    * @param {string} code The code of the safety stock rule.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SafetyStockRulesApiInterface
    */
    getSafetyStockRuleRaw(requestParameters: safetyStockRulesApiParams.GetSafetyStockRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SafetyStockRule>>;

    /**
    * Gets <a href=\"/pages/safety-stock-rules\">safety stock rule details</a> by code.
    * Get Safety Stock Rule by Code
    */
    getSafetyStockRule(requestParameters: safetyStockRulesApiParams.GetSafetyStockRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SafetyStockRule>;

    /**
    * Gets a collection of <a href=\"/pages/safety-stock-rules\">safety stock rules</a> according to any specified filter criteria and sort options.
    * @summary Get Safety Stock Rules
    * @param {number} [startIndex] The start index for pagination.
    * @param {number} [pageSize] The page size for pagination.
    * @param {string} [sortBy] The sort by parameter.
    * @param {string} [filter] The filter parameter.
    * @param {string} [responseGroups] The response groups parameter.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SafetyStockRulesApiInterface
    */
    getSafetyStockRulesRaw(requestParameters: safetyStockRulesApiParams.GetSafetyStockRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SafetyStockRuleCollection>>;

    /**
    * Gets a collection of <a href=\"/pages/safety-stock-rules\">safety stock rules</a> according to any specified filter criteria and sort options.
    * Get Safety Stock Rules
    */
    getSafetyStockRules(requestParameters: safetyStockRulesApiParams.GetSafetyStockRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SafetyStockRuleCollection>;

    /**
    * Updates the rank for a <a href=\"/pages/safety-stock-rules\">safety stock rule</a> and rearranges the ranks of all other rules accordingly.
    * @summary Update Safety Stock Rule Rank
    * @param {string} code 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {UpdateRankRequest} [updateRankRequest] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SafetyStockRulesApiInterface
    */
    updateRankRaw(requestParameters: safetyStockRulesApiParams.UpdateRankOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Updates the rank for a <a href=\"/pages/safety-stock-rules\">safety stock rule</a> and rearranges the ranks of all other rules accordingly.
    * Update Safety Stock Rule Rank
    */
    updateRank(requestParameters: safetyStockRulesApiParams.UpdateRankOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Updates an existing <a href=\"/pages/safety-stock-rules\">safety stock rule</a>.
    * @summary Update Safety Stock Rule
    * @param {string} code The code of the safety stock rule to update.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {SafetyStockRule} [safetyStockRule] The updated safety stock rule.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SafetyStockRulesApiInterface
    */
    updateSafetyStockRuleRaw(requestParameters: safetyStockRulesApiParams.UpdateSafetyStockRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SafetyStockRule>>;

    /**
    * Updates an existing <a href=\"/pages/safety-stock-rules\">safety stock rule</a>.
    * Update Safety Stock Rule
    */
    updateSafetyStockRule(requestParameters: safetyStockRulesApiParams.UpdateSafetyStockRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SafetyStockRule>;

}


/**
 * 
 */
export class SafetyStockRulesApi extends runtime.BaseAPI implements SafetyStockRulesApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Creates a new <a href=\"/pages/safety-stock-rules\">safety stock rule</a>.
     * Create Safety Stock Rule
     */


    async createSafetyStockRuleRaw(requestParameters: safetyStockRulesApiParams.CreateSafetyStockRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SafetyStockRule>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/safetystock`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.safetyStockRule,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates a new <a href=\"/pages/safety-stock-rules\">safety stock rule</a>.
     * Create Safety Stock Rule
     */
    async createSafetyStockRule(requestParameters: safetyStockRulesApiParams.CreateSafetyStockRuleRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SafetyStockRule> {
        const response = await this.createSafetyStockRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a <a href=\"/pages/safety-stock-rules\">safety stock rule</a> by code.
     * Delete Safety Stock Rule
     */


    async deleteSafetyStockRuleRaw(requestParameters: safetyStockRulesApiParams.DeleteSafetyStockRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling deleteSafetyStockRule.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/safetystock/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a <a href=\"/pages/safety-stock-rules\">safety stock rule</a> by code.
     * Delete Safety Stock Rule
     */
    async deleteSafetyStockRule(requestParameters: safetyStockRulesApiParams.DeleteSafetyStockRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteSafetyStockRuleRaw(requestParameters, initOverrides);
    }

    /**
     * Gets <a href=\"/pages/safety-stock-rules\">safety stock rule details</a> by code.
     * Get Safety Stock Rule by Code
     */


    async getSafetyStockRuleRaw(requestParameters: safetyStockRulesApiParams.GetSafetyStockRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SafetyStockRule>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling getSafetyStockRule.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/safetystock/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Gets <a href=\"/pages/safety-stock-rules\">safety stock rule details</a> by code.
     * Get Safety Stock Rule by Code
     */
    async getSafetyStockRule(requestParameters: safetyStockRulesApiParams.GetSafetyStockRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SafetyStockRule> {
        const response = await this.getSafetyStockRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets a collection of <a href=\"/pages/safety-stock-rules\">safety stock rules</a> according to any specified filter criteria and sort options.
     * Get Safety Stock Rules
     */


    async getSafetyStockRulesRaw(requestParameters: safetyStockRulesApiParams.GetSafetyStockRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SafetyStockRuleCollection>> {
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
            path: `/commerce/rules/safetystock`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Gets a collection of <a href=\"/pages/safety-stock-rules\">safety stock rules</a> according to any specified filter criteria and sort options.
     * Get Safety Stock Rules
     */
    async getSafetyStockRules(requestParameters: safetyStockRulesApiParams.GetSafetyStockRulesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SafetyStockRuleCollection> {
        const response = await this.getSafetyStockRulesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates the rank for a <a href=\"/pages/safety-stock-rules\">safety stock rule</a> and rearranges the ranks of all other rules accordingly.
     * Update Safety Stock Rule Rank
     */


    async updateRankRaw(requestParameters: safetyStockRulesApiParams.UpdateRankOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
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
            path: `/commerce/rules/safetystock/{code}/rank`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.updateRankRequest,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates the rank for a <a href=\"/pages/safety-stock-rules\">safety stock rule</a> and rearranges the ranks of all other rules accordingly.
     * Update Safety Stock Rule Rank
     */
    async updateRank(requestParameters: safetyStockRulesApiParams.UpdateRankOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateRankRaw(requestParameters, initOverrides);
    }

    /**
     * Updates an existing <a href=\"/pages/safety-stock-rules\">safety stock rule</a>.
     * Update Safety Stock Rule
     */


    async updateSafetyStockRuleRaw(requestParameters: safetyStockRulesApiParams.UpdateSafetyStockRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SafetyStockRule>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling updateSafetyStockRule.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/safetystock/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.safetyStockRule,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates an existing <a href=\"/pages/safety-stock-rules\">safety stock rule</a>.
     * Update Safety Stock Rule
     */
    async updateSafetyStockRule(requestParameters: safetyStockRulesApiParams.UpdateSafetyStockRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SafetyStockRule> {
        const response = await this.updateSafetyStockRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
