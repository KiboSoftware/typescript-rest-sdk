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
  CatalogAdminsProductRule,
  ProductRuleCollection,
} from '../models';


export namespace productRulesApiParams { 
    export interface CreateProductRuleRequest {
        responseFields?: string;
        catalogAdminsProductRule?: CatalogAdminsProductRule;
    }
    export interface DeleteProductRuleRequest {
        code: string;
    }
    export interface GetExpressionFieldDefinitionsRequest {
        responseFields?: string;
    }
    export interface GetProductRuleRequest {
        code: string;
        responseFields?: string;
    }
    export interface GetProductRulesRequest {
        startIndex?: number;
        pageSize?: number;
        sortBy?: string;
        filter?: string;
        responseGroups?: string;
        responseFields?: string;
    }
    export interface UpdateProductRuleRequest {
        code: string;
        responseFields?: string;
        catalogAdminsProductRule?: CatalogAdminsProductRule;
    }
    export interface ValidateExpressionRequest {
        responseFields?: string;
        catalogAdminsDynamicExpression?: CatalogAdminsDynamicExpression;
    }
}
/**
* ProductRulesApiService - interface
* 
* @export
* @interface ProductRulesApi
*/
export interface ProductRulesApiService {
    /**
    * Creates a new product rule.
    * @summary Create Product Rule
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CatalogAdminsProductRule} [catalogAdminsProductRule] The product rule to create.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductRulesApiInterface
    */
    createProductRuleRaw(requestParameters: productRulesApiParams.CreateProductRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsProductRule>>;

    /**
    * Creates a new product rule.
    * Create Product Rule
    */
    createProductRule(requestParameters: productRulesApiParams.CreateProductRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsProductRule>;

    /**
    * Delete a product rules.
    * @summary Delete Product Rules
    * @param {string} code The code of the rule to delete.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductRulesApiInterface
    */
    deleteProductRuleRaw(requestParameters: productRulesApiParams.DeleteProductRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Delete a product rules.
    * Delete Product Rules
    */
    deleteProductRule(requestParameters: productRulesApiParams.DeleteProductRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Get expression field definition
    * @summary Get Expression Field Definition
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductRulesApiInterface
    */
    getExpressionFieldDefinitionsRaw(requestParameters: productRulesApiParams.GetExpressionFieldDefinitionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>>;

    /**
    * Get expression field definition
    * Get Expression Field Definition
    */
    getExpressionFieldDefinitions(requestParameters: productRulesApiParams.GetExpressionFieldDefinitionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object>;

    /**
    * Retrieves the details of a single product rule.
    * @summary Get Product Rule by Code
    * @param {string} code The code of the rule.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductRulesApiInterface
    */
    getProductRuleRaw(requestParameters: productRulesApiParams.GetProductRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsProductRule>>;

    /**
    * Retrieves the details of a single product rule.
    * Get Product Rule by Code
    */
    getProductRule(requestParameters: productRulesApiParams.GetProductRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsProductRule>;

    /**
    * Retrieves a list of product rules according to any specified filter criteria and sort options.
    * @summary Get Product Rules
    * @param {number} [startIndex] The start index.
    * @param {number} [pageSize] The page size.
    * @param {string} [sortBy] The sort by.
    * @param {string} [filter] The filter.
    * @param {string} [responseGroups] The response groups.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductRulesApiInterface
    */
    getProductRulesRaw(requestParameters: productRulesApiParams.GetProductRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductRuleCollection>>;

    /**
    * Retrieves a list of product rules according to any specified filter criteria and sort options.
    * Get Product Rules
    */
    getProductRules(requestParameters: productRulesApiParams.GetProductRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductRuleCollection>;

    /**
    * Update an existing product rules.
    * @summary Update Product Rule
    * @param {string} code The code of the rule to update.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CatalogAdminsProductRule} [catalogAdminsProductRule] The updated product rule.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductRulesApiInterface
    */
    updateProductRuleRaw(requestParameters: productRulesApiParams.UpdateProductRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsProductRule>>;

    /**
    * Update an existing product rules.
    * Update Product Rule
    */
    updateProductRule(requestParameters: productRulesApiParams.UpdateProductRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsProductRule>;

    /**
    * Validate the expression for a product rules
    * @summary Validate Expression
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CatalogAdminsDynamicExpression} [catalogAdminsDynamicExpression] The expression to validate.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductRulesApiInterface
    */
    validateExpressionRaw(requestParameters: productRulesApiParams.ValidateExpressionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsDynamicExpression>>;

    /**
    * Validate the expression for a product rules
    * Validate Expression
    */
    validateExpression(requestParameters: productRulesApiParams.ValidateExpressionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsDynamicExpression>;

}


/**
 * 
 */
export class ProductRulesApi extends runtime.BaseAPI implements ProductRulesApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Creates a new product rule.
     * Create Product Rule
     */


    async createProductRuleRaw(requestParameters: productRulesApiParams.CreateProductRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsProductRule>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/product`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsProductRule,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates a new product rule.
     * Create Product Rule
     */
    async createProductRule(requestParameters: productRulesApiParams.CreateProductRuleRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsProductRule> {
        const response = await this.createProductRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a product rules.
     * Delete Product Rules
     */


    async deleteProductRuleRaw(requestParameters: productRulesApiParams.DeleteProductRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling deleteProductRule.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/product/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a product rules.
     * Delete Product Rules
     */
    async deleteProductRule(requestParameters: productRulesApiParams.DeleteProductRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteProductRuleRaw(requestParameters, initOverrides);
    }

    /**
     * Get expression field definition
     * Get Expression Field Definition
     */


    async getExpressionFieldDefinitionsRaw(requestParameters: productRulesApiParams.GetExpressionFieldDefinitionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/product/product-rule-fields`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Get expression field definition
     * Get Expression Field Definition
     */
    async getExpressionFieldDefinitions(requestParameters: productRulesApiParams.GetExpressionFieldDefinitionsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.getExpressionFieldDefinitionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the details of a single product rule.
     * Get Product Rule by Code
     */


    async getProductRuleRaw(requestParameters: productRulesApiParams.GetProductRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsProductRule>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling getProductRule.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/product/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves the details of a single product rule.
     * Get Product Rule by Code
     */
    async getProductRule(requestParameters: productRulesApiParams.GetProductRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsProductRule> {
        const response = await this.getProductRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a list of product rules according to any specified filter criteria and sort options.
     * Get Product Rules
     */


    async getProductRulesRaw(requestParameters: productRulesApiParams.GetProductRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductRuleCollection>> {
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
            path: `/commerce/rules/product`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a list of product rules according to any specified filter criteria and sort options.
     * Get Product Rules
     */
    async getProductRules(requestParameters: productRulesApiParams.GetProductRulesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductRuleCollection> {
        const response = await this.getProductRulesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update an existing product rules.
     * Update Product Rule
     */


    async updateProductRuleRaw(requestParameters: productRulesApiParams.UpdateProductRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsProductRule>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling updateProductRule.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/product/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsProductRule,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update an existing product rules.
     * Update Product Rule
     */
    async updateProductRule(requestParameters: productRulesApiParams.UpdateProductRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsProductRule> {
        const response = await this.updateProductRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Validate the expression for a product rules
     * Validate Expression
     */


    async validateExpressionRaw(requestParameters: productRulesApiParams.ValidateExpressionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsDynamicExpression>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/rules/product/validate`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsDynamicExpression,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Validate the expression for a product rules
     * Validate Expression
     */
    async validateExpression(requestParameters: productRulesApiParams.ValidateExpressionRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsDynamicExpression> {
        const response = await this.validateExpressionRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
