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
  ReservationStealForRule,
  ReservationStealForRuleCollection,
  UpdateRankRequest,
} from '../models';


export namespace reservationStealForRulesApiParams { 
    export interface CreateReservationStealForRuleRequest {
        responseFields?: string;
        reservationStealForRule?: ReservationStealForRule;
    }
    export interface DeleteReservationStealForRuleRequest {
        code: string;
    }
    export interface GetReservationStealForRuleRequest {
        code: string;
        responseFields?: string;
    }
    export interface GetReservationStealForRulesRequest {
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
    export interface UpdateReservationStealForRuleRequest {
        code: string;
        responseFields?: string;
        reservationStealForRule?: ReservationStealForRule;
    }
}
/**
* ReservationStealForRulesApiService - interface
* 
* @export
* @interface ReservationStealForRulesApi
*/
export interface ReservationStealForRulesApiService {
    /**
    * Creates a new reservation steal-for rule.
    * @summary Create reservation steal-for rule
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {ReservationStealForRule} [reservationStealForRule] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ReservationStealForRulesApiInterface
    */
    createReservationStealForRuleRaw(requestParameters: reservationStealForRulesApiParams.CreateReservationStealForRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReservationStealForRule>>;

    /**
    * Creates a new reservation steal-for rule.
    * Create reservation steal-for rule
    */
    createReservationStealForRule(requestParameters: reservationStealForRulesApiParams.CreateReservationStealForRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReservationStealForRule>;

    /**
    * Permanently deletes a reservation steal-for rule (FR-013 hard delete).
    * @summary Delete reservation steal-for rule
    * @param {string} code 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ReservationStealForRulesApiInterface
    */
    deleteReservationStealForRuleRaw(requestParameters: reservationStealForRulesApiParams.DeleteReservationStealForRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Permanently deletes a reservation steal-for rule (FR-013 hard delete).
    * Delete reservation steal-for rule
    */
    deleteReservationStealForRule(requestParameters: reservationStealForRulesApiParams.DeleteReservationStealForRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Gets a reservation steal-for rule by its unique code.
    * @summary Get reservation steal-for rule by code
    * @param {string} code 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ReservationStealForRulesApiInterface
    */
    getReservationStealForRuleRaw(requestParameters: reservationStealForRulesApiParams.GetReservationStealForRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReservationStealForRule>>;

    /**
    * Gets a reservation steal-for rule by its unique code.
    * Get reservation steal-for rule by code
    */
    getReservationStealForRule(requestParameters: reservationStealForRulesApiParams.GetReservationStealForRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReservationStealForRule>;

    /**
    * Gets a collection of reservation steal-for rules according to any specified filter criteria and sort options.
    * @summary Get reservation steal-for rules
    * @param {number} [startIndex] 
    * @param {number} [pageSize] 
    * @param {string} [sortBy] 
    * @param {string} [filter] 
    * @param {string} [responseGroups] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ReservationStealForRulesApiInterface
    */
    getReservationStealForRulesRaw(requestParameters: reservationStealForRulesApiParams.GetReservationStealForRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReservationStealForRuleCollection>>;

    /**
    * Gets a collection of reservation steal-for rules according to any specified filter criteria and sort options.
    * Get reservation steal-for rules
    */
    getReservationStealForRules(requestParameters: reservationStealForRulesApiParams.GetReservationStealForRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReservationStealForRuleCollection>;

    /**
    * Updates the rank for a reservation steal-for rule and atomically reorders all other rules of this type in the current master catalog.
    * @summary Update reservation steal-for rule rank
    * @param {string} code 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {UpdateRankRequest} [updateRankRequest] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ReservationStealForRulesApiInterface
    */
    updateRankRaw(requestParameters: reservationStealForRulesApiParams.UpdateRankOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Updates the rank for a reservation steal-for rule and atomically reorders all other rules of this type in the current master catalog.
    * Update reservation steal-for rule rank
    */
    updateRank(requestParameters: reservationStealForRulesApiParams.UpdateRankOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Updates an existing reservation steal-for rule with full replacement semantics (FR-009).
    * @summary Update reservation steal-for rule
    * @param {string} code 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {ReservationStealForRule} [reservationStealForRule] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ReservationStealForRulesApiInterface
    */
    updateReservationStealForRuleRaw(requestParameters: reservationStealForRulesApiParams.UpdateReservationStealForRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReservationStealForRule>>;

    /**
    * Updates an existing reservation steal-for rule with full replacement semantics (FR-009).
    * Update reservation steal-for rule
    */
    updateReservationStealForRule(requestParameters: reservationStealForRulesApiParams.UpdateReservationStealForRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReservationStealForRule>;

}


/**
 * 
 */
export class ReservationStealForRulesApi extends runtime.BaseAPI implements ReservationStealForRulesApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Creates a new reservation steal-for rule.
     * Create reservation steal-for rule
     */


    async createReservationStealForRuleRaw(requestParameters: reservationStealForRulesApiParams.CreateReservationStealForRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReservationStealForRule>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/reservationstealfor`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.reservationStealForRule,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates a new reservation steal-for rule.
     * Create reservation steal-for rule
     */
    async createReservationStealForRule(requestParameters: reservationStealForRulesApiParams.CreateReservationStealForRuleRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReservationStealForRule> {
        const response = await this.createReservationStealForRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Permanently deletes a reservation steal-for rule (FR-013 hard delete).
     * Delete reservation steal-for rule
     */


    async deleteReservationStealForRuleRaw(requestParameters: reservationStealForRulesApiParams.DeleteReservationStealForRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling deleteReservationStealForRule.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/reservationstealfor/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Permanently deletes a reservation steal-for rule (FR-013 hard delete).
     * Delete reservation steal-for rule
     */
    async deleteReservationStealForRule(requestParameters: reservationStealForRulesApiParams.DeleteReservationStealForRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteReservationStealForRuleRaw(requestParameters, initOverrides);
    }

    /**
     * Gets a reservation steal-for rule by its unique code.
     * Get reservation steal-for rule by code
     */


    async getReservationStealForRuleRaw(requestParameters: reservationStealForRulesApiParams.GetReservationStealForRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReservationStealForRule>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling getReservationStealForRule.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/reservationstealfor/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Gets a reservation steal-for rule by its unique code.
     * Get reservation steal-for rule by code
     */
    async getReservationStealForRule(requestParameters: reservationStealForRulesApiParams.GetReservationStealForRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReservationStealForRule> {
        const response = await this.getReservationStealForRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets a collection of reservation steal-for rules according to any specified filter criteria and sort options.
     * Get reservation steal-for rules
     */


    async getReservationStealForRulesRaw(requestParameters: reservationStealForRulesApiParams.GetReservationStealForRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReservationStealForRuleCollection>> {
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
            path: `/commerce/rules/reservationstealfor`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Gets a collection of reservation steal-for rules according to any specified filter criteria and sort options.
     * Get reservation steal-for rules
     */
    async getReservationStealForRules(requestParameters: reservationStealForRulesApiParams.GetReservationStealForRulesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReservationStealForRuleCollection> {
        const response = await this.getReservationStealForRulesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates the rank for a reservation steal-for rule and atomically reorders all other rules of this type in the current master catalog.
     * Update reservation steal-for rule rank
     */


    async updateRankRaw(requestParameters: reservationStealForRulesApiParams.UpdateRankOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
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
            path: `/commerce/rules/reservationstealfor/{code}/rank`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.updateRankRequest,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates the rank for a reservation steal-for rule and atomically reorders all other rules of this type in the current master catalog.
     * Update reservation steal-for rule rank
     */
    async updateRank(requestParameters: reservationStealForRulesApiParams.UpdateRankOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateRankRaw(requestParameters, initOverrides);
    }

    /**
     * Updates an existing reservation steal-for rule with full replacement semantics (FR-009).
     * Update reservation steal-for rule
     */


    async updateReservationStealForRuleRaw(requestParameters: reservationStealForRulesApiParams.UpdateReservationStealForRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReservationStealForRule>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling updateReservationStealForRule.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/reservationstealfor/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.reservationStealForRule,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates an existing reservation steal-for rule with full replacement semantics (FR-009).
     * Update reservation steal-for rule
     */
    async updateReservationStealForRule(requestParameters: reservationStealForRulesApiParams.UpdateReservationStealForRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReservationStealForRule> {
        const response = await this.updateReservationStealForRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
