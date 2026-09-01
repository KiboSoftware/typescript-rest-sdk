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
  ReservationStealFromRule,
  ReservationStealFromRuleCollection,
  UpdateRankRequest,
} from '../models';


export namespace reservationStealFromRulesApiParams { 
    export interface CreateReservationStealFromRuleRequest {
        responseFields?: string;
        reservationStealFromRule?: ReservationStealFromRule;
    }
    export interface DeleteReservationStealFromRuleRequest {
        code: string;
    }
    export interface GetReservationStealFromRuleRequest {
        code: string;
        responseFields?: string;
    }
    export interface GetReservationStealFromRulesRequest {
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
    export interface UpdateReservationStealFromRuleRequest {
        code: string;
        responseFields?: string;
        reservationStealFromRule?: ReservationStealFromRule;
    }
}
/**
* ReservationStealFromRulesApiService - interface
* 
* @export
* @interface ReservationStealFromRulesApi
*/
export interface ReservationStealFromRulesApiService {
    /**
    * Creates a new reservation steal-from rule.
    * @summary Create reservation steal-from rule
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {ReservationStealFromRule} [reservationStealFromRule] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ReservationStealFromRulesApiInterface
    */
    createReservationStealFromRuleRaw(requestParameters: reservationStealFromRulesApiParams.CreateReservationStealFromRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReservationStealFromRule>>;

    /**
    * Creates a new reservation steal-from rule.
    * Create reservation steal-from rule
    */
    createReservationStealFromRule(requestParameters: reservationStealFromRulesApiParams.CreateReservationStealFromRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReservationStealFromRule>;

    /**
    * Permanently deletes a reservation steal-from rule (FR-013 hard delete).
    * @summary Delete reservation steal-from rule
    * @param {string} code 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ReservationStealFromRulesApiInterface
    */
    deleteReservationStealFromRuleRaw(requestParameters: reservationStealFromRulesApiParams.DeleteReservationStealFromRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Permanently deletes a reservation steal-from rule (FR-013 hard delete).
    * Delete reservation steal-from rule
    */
    deleteReservationStealFromRule(requestParameters: reservationStealFromRulesApiParams.DeleteReservationStealFromRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Gets a reservation steal-from rule by its unique code.
    * @summary Get reservation steal-from rule by code
    * @param {string} code 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ReservationStealFromRulesApiInterface
    */
    getReservationStealFromRuleRaw(requestParameters: reservationStealFromRulesApiParams.GetReservationStealFromRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReservationStealFromRule>>;

    /**
    * Gets a reservation steal-from rule by its unique code.
    * Get reservation steal-from rule by code
    */
    getReservationStealFromRule(requestParameters: reservationStealFromRulesApiParams.GetReservationStealFromRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReservationStealFromRule>;

    /**
    * Gets a collection of reservation steal-from rules according to any specified filter criteria and sort options.
    * @summary Get reservation steal-from rules
    * @param {number} [startIndex] 
    * @param {number} [pageSize] 
    * @param {string} [sortBy] 
    * @param {string} [filter] 
    * @param {string} [responseGroups] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ReservationStealFromRulesApiInterface
    */
    getReservationStealFromRulesRaw(requestParameters: reservationStealFromRulesApiParams.GetReservationStealFromRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReservationStealFromRuleCollection>>;

    /**
    * Gets a collection of reservation steal-from rules according to any specified filter criteria and sort options.
    * Get reservation steal-from rules
    */
    getReservationStealFromRules(requestParameters: reservationStealFromRulesApiParams.GetReservationStealFromRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReservationStealFromRuleCollection>;

    /**
    * Updates the rank for a reservation steal-from rule and atomically reorders all other rules of this type in the current master catalog.
    * @summary Update reservation steal-from rule rank
    * @param {string} code 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {UpdateRankRequest} [updateRankRequest] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ReservationStealFromRulesApiInterface
    */
    updateRankRaw(requestParameters: reservationStealFromRulesApiParams.UpdateRankOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Updates the rank for a reservation steal-from rule and atomically reorders all other rules of this type in the current master catalog.
    * Update reservation steal-from rule rank
    */
    updateRank(requestParameters: reservationStealFromRulesApiParams.UpdateRankOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Updates an existing reservation steal-from rule with full replacement semantics (FR-009).
    * @summary Update reservation steal-from rule
    * @param {string} code 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {ReservationStealFromRule} [reservationStealFromRule] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ReservationStealFromRulesApiInterface
    */
    updateReservationStealFromRuleRaw(requestParameters: reservationStealFromRulesApiParams.UpdateReservationStealFromRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReservationStealFromRule>>;

    /**
    * Updates an existing reservation steal-from rule with full replacement semantics (FR-009).
    * Update reservation steal-from rule
    */
    updateReservationStealFromRule(requestParameters: reservationStealFromRulesApiParams.UpdateReservationStealFromRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReservationStealFromRule>;

}


/**
 * 
 */
export class ReservationStealFromRulesApi extends runtime.BaseAPI implements ReservationStealFromRulesApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Creates a new reservation steal-from rule.
     * Create reservation steal-from rule
     */


    async createReservationStealFromRuleRaw(requestParameters: reservationStealFromRulesApiParams.CreateReservationStealFromRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReservationStealFromRule>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/reservationstealfrom`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.reservationStealFromRule,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates a new reservation steal-from rule.
     * Create reservation steal-from rule
     */
    async createReservationStealFromRule(requestParameters: reservationStealFromRulesApiParams.CreateReservationStealFromRuleRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReservationStealFromRule> {
        const response = await this.createReservationStealFromRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Permanently deletes a reservation steal-from rule (FR-013 hard delete).
     * Delete reservation steal-from rule
     */


    async deleteReservationStealFromRuleRaw(requestParameters: reservationStealFromRulesApiParams.DeleteReservationStealFromRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling deleteReservationStealFromRule.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/reservationstealfrom/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Permanently deletes a reservation steal-from rule (FR-013 hard delete).
     * Delete reservation steal-from rule
     */
    async deleteReservationStealFromRule(requestParameters: reservationStealFromRulesApiParams.DeleteReservationStealFromRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteReservationStealFromRuleRaw(requestParameters, initOverrides);
    }

    /**
     * Gets a reservation steal-from rule by its unique code.
     * Get reservation steal-from rule by code
     */


    async getReservationStealFromRuleRaw(requestParameters: reservationStealFromRulesApiParams.GetReservationStealFromRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReservationStealFromRule>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling getReservationStealFromRule.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/reservationstealfrom/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Gets a reservation steal-from rule by its unique code.
     * Get reservation steal-from rule by code
     */
    async getReservationStealFromRule(requestParameters: reservationStealFromRulesApiParams.GetReservationStealFromRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReservationStealFromRule> {
        const response = await this.getReservationStealFromRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets a collection of reservation steal-from rules according to any specified filter criteria and sort options.
     * Get reservation steal-from rules
     */


    async getReservationStealFromRulesRaw(requestParameters: reservationStealFromRulesApiParams.GetReservationStealFromRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReservationStealFromRuleCollection>> {
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
            path: `/commerce/rules/reservationstealfrom`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Gets a collection of reservation steal-from rules according to any specified filter criteria and sort options.
     * Get reservation steal-from rules
     */
    async getReservationStealFromRules(requestParameters: reservationStealFromRulesApiParams.GetReservationStealFromRulesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReservationStealFromRuleCollection> {
        const response = await this.getReservationStealFromRulesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates the rank for a reservation steal-from rule and atomically reorders all other rules of this type in the current master catalog.
     * Update reservation steal-from rule rank
     */


    async updateRankRaw(requestParameters: reservationStealFromRulesApiParams.UpdateRankOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
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
            path: `/commerce/rules/reservationstealfrom/{code}/rank`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.updateRankRequest,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates the rank for a reservation steal-from rule and atomically reorders all other rules of this type in the current master catalog.
     * Update reservation steal-from rule rank
     */
    async updateRank(requestParameters: reservationStealFromRulesApiParams.UpdateRankOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateRankRaw(requestParameters, initOverrides);
    }

    /**
     * Updates an existing reservation steal-from rule with full replacement semantics (FR-009).
     * Update reservation steal-from rule
     */


    async updateReservationStealFromRuleRaw(requestParameters: reservationStealFromRulesApiParams.UpdateReservationStealFromRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReservationStealFromRule>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling updateReservationStealFromRule.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/reservationstealfrom/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.reservationStealFromRule,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates an existing reservation steal-from rule with full replacement semantics (FR-009).
     * Update reservation steal-from rule
     */
    async updateReservationStealFromRule(requestParameters: reservationStealFromRulesApiParams.UpdateReservationStealFromRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReservationStealFromRule> {
        const response = await this.updateReservationStealFromRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
