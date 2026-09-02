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
  ShipmentReleaseRule,
  ShipmentReleaseRuleCollection,
  UpdateRankRequest,
} from '../models';


export namespace shipmentReleaseRulesApiParams { 
    export interface CreateRuleRequest {
        responseFields?: string;
        shipmentReleaseRule?: ShipmentReleaseRule;
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
        shipmentReleaseRule?: ShipmentReleaseRule;
    }
}
/**
* ShipmentReleaseRulesApiService - interface
* 
* @export
* @interface ShipmentReleaseRulesApi
*/
export interface ShipmentReleaseRulesApiService {
    /**
    * Creates a new shipment release rule.
    * @summary Create shipment release rule
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {ShipmentReleaseRule} [shipmentReleaseRule] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ShipmentReleaseRulesApiInterface
    */
    createRuleRaw(requestParameters: shipmentReleaseRulesApiParams.CreateRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ShipmentReleaseRule>>;

    /**
    * Creates a new shipment release rule.
    * Create shipment release rule
    */
    createRule(requestParameters: shipmentReleaseRulesApiParams.CreateRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ShipmentReleaseRule>;

    /**
    * Deletes a shipment release rule by code.
    * @summary Delete shipment release rule
    * @param {string} code 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ShipmentReleaseRulesApiInterface
    */
    deleteRuleRaw(requestParameters: shipmentReleaseRulesApiParams.DeleteRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Deletes a shipment release rule by code.
    * Delete shipment release rule
    */
    deleteRule(requestParameters: shipmentReleaseRulesApiParams.DeleteRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Gets a shipment release rule details by code.
    * @summary Get shipment release rule by code
    * @param {string} code 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ShipmentReleaseRulesApiInterface
    */
    getRuleRaw(requestParameters: shipmentReleaseRulesApiParams.GetRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ShipmentReleaseRule>>;

    /**
    * Gets a shipment release rule details by code.
    * Get shipment release rule by code
    */
    getRule(requestParameters: shipmentReleaseRulesApiParams.GetRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ShipmentReleaseRule>;

    /**
    * Gets a collection of shipment release rules according to any specified filter criteria and sort options.
    * @summary Get shipment release rules
    * @param {number} [startIndex] 
    * @param {number} [pageSize] 
    * @param {string} [sortBy] 
    * @param {string} [filter] 
    * @param {string} [responseGroups] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ShipmentReleaseRulesApiInterface
    */
    getRulesRaw(requestParameters: shipmentReleaseRulesApiParams.GetRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ShipmentReleaseRuleCollection>>;

    /**
    * Gets a collection of shipment release rules according to any specified filter criteria and sort options.
    * Get shipment release rules
    */
    getRules(requestParameters: shipmentReleaseRulesApiParams.GetRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ShipmentReleaseRuleCollection>;

    /**
    * Updates the rank for a shipment release rule and rearranges the ranks of all other rules accordingly.
    * @summary Update shipment release rule rank
    * @param {string} code 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {UpdateRankRequest} [updateRankRequest] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ShipmentReleaseRulesApiInterface
    */
    updateRankRaw(requestParameters: shipmentReleaseRulesApiParams.UpdateRankOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Updates the rank for a shipment release rule and rearranges the ranks of all other rules accordingly.
    * Update shipment release rule rank
    */
    updateRank(requestParameters: shipmentReleaseRulesApiParams.UpdateRankOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Updates an existing shipment release rule.
    * @summary Update shipment release rule
    * @param {string} code 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {ShipmentReleaseRule} [shipmentReleaseRule] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ShipmentReleaseRulesApiInterface
    */
    updateRuleRaw(requestParameters: shipmentReleaseRulesApiParams.UpdateRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ShipmentReleaseRule>>;

    /**
    * Updates an existing shipment release rule.
    * Update shipment release rule
    */
    updateRule(requestParameters: shipmentReleaseRulesApiParams.UpdateRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ShipmentReleaseRule>;

}


/**
 * 
 */
export class ShipmentReleaseRulesApi extends runtime.BaseAPI implements ShipmentReleaseRulesApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Creates a new shipment release rule.
     * Create shipment release rule
     */


    async createRuleRaw(requestParameters: shipmentReleaseRulesApiParams.CreateRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ShipmentReleaseRule>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/shipmentrelease`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.shipmentReleaseRule,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates a new shipment release rule.
     * Create shipment release rule
     */
    async createRule(requestParameters: shipmentReleaseRulesApiParams.CreateRuleRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ShipmentReleaseRule> {
        const response = await this.createRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a shipment release rule by code.
     * Delete shipment release rule
     */


    async deleteRuleRaw(requestParameters: shipmentReleaseRulesApiParams.DeleteRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling deleteRule.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/shipmentrelease/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a shipment release rule by code.
     * Delete shipment release rule
     */
    async deleteRule(requestParameters: shipmentReleaseRulesApiParams.DeleteRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteRuleRaw(requestParameters, initOverrides);
    }

    /**
     * Gets a shipment release rule details by code.
     * Get shipment release rule by code
     */


    async getRuleRaw(requestParameters: shipmentReleaseRulesApiParams.GetRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ShipmentReleaseRule>> {
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
            path: `/commerce/rules/shipmentrelease/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Gets a shipment release rule details by code.
     * Get shipment release rule by code
     */
    async getRule(requestParameters: shipmentReleaseRulesApiParams.GetRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ShipmentReleaseRule> {
        const response = await this.getRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets a collection of shipment release rules according to any specified filter criteria and sort options.
     * Get shipment release rules
     */


    async getRulesRaw(requestParameters: shipmentReleaseRulesApiParams.GetRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ShipmentReleaseRuleCollection>> {
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
            path: `/commerce/rules/shipmentrelease`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Gets a collection of shipment release rules according to any specified filter criteria and sort options.
     * Get shipment release rules
     */
    async getRules(requestParameters: shipmentReleaseRulesApiParams.GetRulesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ShipmentReleaseRuleCollection> {
        const response = await this.getRulesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates the rank for a shipment release rule and rearranges the ranks of all other rules accordingly.
     * Update shipment release rule rank
     */


    async updateRankRaw(requestParameters: shipmentReleaseRulesApiParams.UpdateRankOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
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
            path: `/commerce/rules/shipmentrelease/{code}/rank`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.updateRankRequest,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates the rank for a shipment release rule and rearranges the ranks of all other rules accordingly.
     * Update shipment release rule rank
     */
    async updateRank(requestParameters: shipmentReleaseRulesApiParams.UpdateRankOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateRankRaw(requestParameters, initOverrides);
    }

    /**
     * Updates an existing shipment release rule.
     * Update shipment release rule
     */


    async updateRuleRaw(requestParameters: shipmentReleaseRulesApiParams.UpdateRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ShipmentReleaseRule>> {
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
            path: `/commerce/rules/shipmentrelease/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.shipmentReleaseRule,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates an existing shipment release rule.
     * Update shipment release rule
     */
    async updateRule(requestParameters: shipmentReleaseRulesApiParams.UpdateRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ShipmentReleaseRule> {
        const response = await this.updateRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
