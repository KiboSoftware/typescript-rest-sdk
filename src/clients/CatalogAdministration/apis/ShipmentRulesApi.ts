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
  CatalogAdminsDynamicExpression,
  ShipmentRule,
  ShipmentRuleCollection,
} from '../models';


export namespace shipmentRulesApiParams { 
    export interface CreateShipmentRuleRequest {
        responseFields?: string;
        shipmentRule?: ShipmentRule;
    }
    export interface DeleteShipmentRuleRequest {
        code: string;
    }
    export interface GetShipmentRuleRequest {
        code: string;
        responseFields?: string;
    }
    export interface GetShipmentRulesRequest {
        startIndex?: number;
        pageSize?: number;
        sortBy?: string;
        filter?: string;
        responseGroups?: string;
        responseFields?: string;
    }
    export interface ParseShipmentExpressionRequest {
        fulfillmentLocationCode?: string;
        responseFields?: string;
        catalogAdminsDynamicExpression?: CatalogAdminsDynamicExpression;
    }
    export interface UpdateShipmentRuleRequest {
        code: string;
        responseFields?: string;
        shipmentRule?: ShipmentRule;
    }
}
/**
* ShipmentRulesApiService - interface
* 
* @export
* @interface ShipmentRulesApi
*/
export interface ShipmentRulesApiService {
    /**
    * Creates a new shipment rule.
    * @summary Create shipment rule
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {ShipmentRule} [shipmentRule] The shipment rule to create.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ShipmentRulesApiInterface
    */
    createShipmentRuleRaw(requestParameters: shipmentRulesApiParams.CreateShipmentRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ShipmentRule>>;

    /**
    * Creates a new shipment rule.
    * Create shipment rule
    */
    createShipmentRule(requestParameters: shipmentRulesApiParams.CreateShipmentRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ShipmentRule>;

    /**
    * Delete a shipment rule.
    * @summary Delete shipment rule
    * @param {string} code The code of the rule to delete.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ShipmentRulesApiInterface
    */
    deleteShipmentRuleRaw(requestParameters: shipmentRulesApiParams.DeleteShipmentRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Delete a shipment rule.
    * Delete shipment rule
    */
    deleteShipmentRule(requestParameters: shipmentRulesApiParams.DeleteShipmentRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Retrieves the details of a single shipment rule.
    * @summary Get shipment rule by code
    * @param {string} code The code of the rule.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ShipmentRulesApiInterface
    */
    getShipmentRuleRaw(requestParameters: shipmentRulesApiParams.GetShipmentRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ShipmentRule>>;

    /**
    * Retrieves the details of a single shipment rule.
    * Get shipment rule by code
    */
    getShipmentRule(requestParameters: shipmentRulesApiParams.GetShipmentRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ShipmentRule>;

    /**
    * Retrieves a list of shipment rules.
    * @summary Get shipment rules
    * @param {number} [startIndex] The start index.
    * @param {number} [pageSize] The page size.
    * @param {string} [sortBy] The sort by.
    * @param {string} [filter] The filter.
    * @param {string} [responseGroups] The response groups.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ShipmentRulesApiInterface
    */
    getShipmentRulesRaw(requestParameters: shipmentRulesApiParams.GetShipmentRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ShipmentRuleCollection>>;

    /**
    * Retrieves a list of shipment rules.
    * Get shipment rules
    */
    getShipmentRules(requestParameters: shipmentRulesApiParams.GetShipmentRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ShipmentRuleCollection>;

    /**
    * Parses a shipment expression and returns the query string for retrieving shipments that match the criteria.
    * @summary Parse Shipment Expression
    * @param {string} [fulfillmentLocationCode] The fulfillment location code to filter by.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CatalogAdminsDynamicExpression} [catalogAdminsDynamicExpression] The dynamic expression to parse.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ShipmentRulesApiInterface
    */
    parseShipmentExpressionRaw(requestParameters: shipmentRulesApiParams.ParseShipmentExpressionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>>;

    /**
    * Parses a shipment expression and returns the query string for retrieving shipments that match the criteria.
    * Parse Shipment Expression
    */
    parseShipmentExpression(requestParameters: shipmentRulesApiParams.ParseShipmentExpressionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string>;

    /**
    * Update an existing shipment rule.
    * @summary Update shipment rule
    * @param {string} code The code of the rule to update.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {ShipmentRule} [shipmentRule] The updated shipment rule.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ShipmentRulesApiInterface
    */
    updateShipmentRuleRaw(requestParameters: shipmentRulesApiParams.UpdateShipmentRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ShipmentRule>>;

    /**
    * Update an existing shipment rule.
    * Update shipment rule
    */
    updateShipmentRule(requestParameters: shipmentRulesApiParams.UpdateShipmentRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ShipmentRule>;

}


/**
 * 
 */
export class ShipmentRulesApi extends runtime.BaseAPI implements ShipmentRulesApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Creates a new shipment rule.
     * Create shipment rule
     */


    async createShipmentRuleRaw(requestParameters: shipmentRulesApiParams.CreateShipmentRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ShipmentRule>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/shipment`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.shipmentRule,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates a new shipment rule.
     * Create shipment rule
     */
    async createShipmentRule(requestParameters: shipmentRulesApiParams.CreateShipmentRuleRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ShipmentRule> {
        const response = await this.createShipmentRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a shipment rule.
     * Delete shipment rule
     */


    async deleteShipmentRuleRaw(requestParameters: shipmentRulesApiParams.DeleteShipmentRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling deleteShipmentRule.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/shipment/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a shipment rule.
     * Delete shipment rule
     */
    async deleteShipmentRule(requestParameters: shipmentRulesApiParams.DeleteShipmentRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteShipmentRuleRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves the details of a single shipment rule.
     * Get shipment rule by code
     */


    async getShipmentRuleRaw(requestParameters: shipmentRulesApiParams.GetShipmentRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ShipmentRule>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling getShipmentRule.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/shipment/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves the details of a single shipment rule.
     * Get shipment rule by code
     */
    async getShipmentRule(requestParameters: shipmentRulesApiParams.GetShipmentRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ShipmentRule> {
        const response = await this.getShipmentRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a list of shipment rules.
     * Get shipment rules
     */


    async getShipmentRulesRaw(requestParameters: shipmentRulesApiParams.GetShipmentRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ShipmentRuleCollection>> {
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
            path: `/commerce/rules/shipment`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a list of shipment rules.
     * Get shipment rules
     */
    async getShipmentRules(requestParameters: shipmentRulesApiParams.GetShipmentRulesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ShipmentRuleCollection> {
        const response = await this.getShipmentRulesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Parses a shipment expression and returns the query string for retrieving shipments that match the criteria.
     * Parse Shipment Expression
     */


    async parseShipmentExpressionRaw(requestParameters: shipmentRulesApiParams.ParseShipmentExpressionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        const queryParameters: any = {};

        if (requestParameters.fulfillmentLocationCode !== undefined) {
            queryParameters['fulfillmentLocationCode'] = requestParameters.fulfillmentLocationCode;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/shipment/expression/parse`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsDynamicExpression,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Parses a shipment expression and returns the query string for retrieving shipments that match the criteria.
     * Parse Shipment Expression
     */
    async parseShipmentExpression(requestParameters: shipmentRulesApiParams.ParseShipmentExpressionRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.parseShipmentExpressionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update an existing shipment rule.
     * Update shipment rule
     */


    async updateShipmentRuleRaw(requestParameters: shipmentRulesApiParams.UpdateShipmentRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ShipmentRule>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling updateShipmentRule.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/shipment/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.shipmentRule,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update an existing shipment rule.
     * Update shipment rule
     */
    async updateShipmentRule(requestParameters: shipmentRulesApiParams.UpdateShipmentRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ShipmentRule> {
        const response = await this.updateShipmentRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
