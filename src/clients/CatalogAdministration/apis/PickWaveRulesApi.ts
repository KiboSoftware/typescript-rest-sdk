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
  PickWaveRule,
  PickWaveRuleCollection,
} from '../models';


export namespace pickWaveRulesApiParams { 
    export interface CreatePickWaveRuleRequest {
        responseFields?: string;
        pickWaveRule?: PickWaveRule;
    }
    export interface DeletePickWaveRuleRequest {
        code: string;
    }
    export interface GetPickWaveRuleRequest {
        code: string;
        responseFields?: string;
    }
    export interface GetPickWaveRulesRequest {
        startIndex?: number;
        pageSize?: number;
        sortBy?: string;
        filter?: string;
        responseGroups?: string;
        responseFields?: string;
    }
    export interface UpdatePickWaveRuleRequest {
        code: string;
        responseFields?: string;
        pickWaveRule?: PickWaveRule;
    }
}
/**
* PickWaveRulesApiService - interface
* 
* @export
* @interface PickWaveRulesApi
*/
export interface PickWaveRulesApiService {
    /**
    * Creates a new <a href=\"/pages/pick-wave-rules\">pick wave rule</a>.
    * @summary Create Pick Wave Rule
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {PickWaveRule} [pickWaveRule] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PickWaveRulesApiInterface
    */
    createPickWaveRuleRaw(requestParameters: pickWaveRulesApiParams.CreatePickWaveRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PickWaveRule>>;

    /**
    * Creates a new <a href=\"/pages/pick-wave-rules\">pick wave rule</a>.
    * Create Pick Wave Rule
    */
    createPickWaveRule(requestParameters: pickWaveRulesApiParams.CreatePickWaveRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PickWaveRule>;

    /**
    * Deletes a <a href=\"/pages/pick-wave-rules\">pick wave rule</a> by code.
    * @summary Delete Pick Wave Rule
    * @param {string} code 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PickWaveRulesApiInterface
    */
    deletePickWaveRuleRaw(requestParameters: pickWaveRulesApiParams.DeletePickWaveRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Deletes a <a href=\"/pages/pick-wave-rules\">pick wave rule</a> by code.
    * Delete Pick Wave Rule
    */
    deletePickWaveRule(requestParameters: pickWaveRulesApiParams.DeletePickWaveRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Gets a <a href=\"/pages/pick-wave-rules\">pick wave rule</a> details by code.
    * @summary Get Pick Wave Rule by Code
    * @param {string} code 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PickWaveRulesApiInterface
    */
    getPickWaveRuleRaw(requestParameters: pickWaveRulesApiParams.GetPickWaveRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PickWaveRule>>;

    /**
    * Gets a <a href=\"/pages/pick-wave-rules\">pick wave rule</a> details by code.
    * Get Pick Wave Rule by Code
    */
    getPickWaveRule(requestParameters: pickWaveRulesApiParams.GetPickWaveRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PickWaveRule>;

    /**
    * Gets a collection of <a href=\"/pages/pick-wave-rules\">pick wave rules</a> according to any specified filter criteria and sort options.
    * @summary Get Pick Wave Rules
    * @param {number} [startIndex] 
    * @param {number} [pageSize] 
    * @param {string} [sortBy] 
    * @param {string} [filter] 
    * @param {string} [responseGroups] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PickWaveRulesApiInterface
    */
    getPickWaveRulesRaw(requestParameters: pickWaveRulesApiParams.GetPickWaveRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PickWaveRuleCollection>>;

    /**
    * Gets a collection of <a href=\"/pages/pick-wave-rules\">pick wave rules</a> according to any specified filter criteria and sort options.
    * Get Pick Wave Rules
    */
    getPickWaveRules(requestParameters: pickWaveRulesApiParams.GetPickWaveRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PickWaveRuleCollection>;

    /**
    * Updates an existing <a href=\"/pages/pick-wave-rules\">pick wave rule</a>.
    * @summary Update Pick Wave Rule
    * @param {string} code 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {PickWaveRule} [pickWaveRule] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PickWaveRulesApiInterface
    */
    updatePickWaveRuleRaw(requestParameters: pickWaveRulesApiParams.UpdatePickWaveRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PickWaveRule>>;

    /**
    * Updates an existing <a href=\"/pages/pick-wave-rules\">pick wave rule</a>.
    * Update Pick Wave Rule
    */
    updatePickWaveRule(requestParameters: pickWaveRulesApiParams.UpdatePickWaveRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PickWaveRule>;

}


/**
 * 
 */
export class PickWaveRulesApi extends runtime.BaseAPI implements PickWaveRulesApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Creates a new <a href=\"/pages/pick-wave-rules\">pick wave rule</a>.
     * Create Pick Wave Rule
     */


    async createPickWaveRuleRaw(requestParameters: pickWaveRulesApiParams.CreatePickWaveRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PickWaveRule>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/pickwave`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.pickWaveRule,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates a new <a href=\"/pages/pick-wave-rules\">pick wave rule</a>.
     * Create Pick Wave Rule
     */
    async createPickWaveRule(requestParameters: pickWaveRulesApiParams.CreatePickWaveRuleRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PickWaveRule> {
        const response = await this.createPickWaveRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a <a href=\"/pages/pick-wave-rules\">pick wave rule</a> by code.
     * Delete Pick Wave Rule
     */


    async deletePickWaveRuleRaw(requestParameters: pickWaveRulesApiParams.DeletePickWaveRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling deletePickWaveRule.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/pickwave/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a <a href=\"/pages/pick-wave-rules\">pick wave rule</a> by code.
     * Delete Pick Wave Rule
     */
    async deletePickWaveRule(requestParameters: pickWaveRulesApiParams.DeletePickWaveRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePickWaveRuleRaw(requestParameters, initOverrides);
    }

    /**
     * Gets a <a href=\"/pages/pick-wave-rules\">pick wave rule</a> details by code.
     * Get Pick Wave Rule by Code
     */


    async getPickWaveRuleRaw(requestParameters: pickWaveRulesApiParams.GetPickWaveRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PickWaveRule>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling getPickWaveRule.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/pickwave/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Gets a <a href=\"/pages/pick-wave-rules\">pick wave rule</a> details by code.
     * Get Pick Wave Rule by Code
     */
    async getPickWaveRule(requestParameters: pickWaveRulesApiParams.GetPickWaveRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PickWaveRule> {
        const response = await this.getPickWaveRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets a collection of <a href=\"/pages/pick-wave-rules\">pick wave rules</a> according to any specified filter criteria and sort options.
     * Get Pick Wave Rules
     */


    async getPickWaveRulesRaw(requestParameters: pickWaveRulesApiParams.GetPickWaveRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PickWaveRuleCollection>> {
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
            path: `/commerce/rules/pickwave`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Gets a collection of <a href=\"/pages/pick-wave-rules\">pick wave rules</a> according to any specified filter criteria and sort options.
     * Get Pick Wave Rules
     */
    async getPickWaveRules(requestParameters: pickWaveRulesApiParams.GetPickWaveRulesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PickWaveRuleCollection> {
        const response = await this.getPickWaveRulesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates an existing <a href=\"/pages/pick-wave-rules\">pick wave rule</a>.
     * Update Pick Wave Rule
     */


    async updatePickWaveRuleRaw(requestParameters: pickWaveRulesApiParams.UpdatePickWaveRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PickWaveRule>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling updatePickWaveRule.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/pickwave/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.pickWaveRule,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates an existing <a href=\"/pages/pick-wave-rules\">pick wave rule</a>.
     * Update Pick Wave Rule
     */
    async updatePickWaveRule(requestParameters: pickWaveRulesApiParams.UpdatePickWaveRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PickWaveRule> {
        const response = await this.updatePickWaveRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
