/* tslint:disable */
/* eslint-disable */
/**
 * Kibo ProductRuntime Service
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
  SchemaDefinition,
} from '../models';


export namespace schemaDefinitionApiParams { 
    export interface GetSchemaDefinitionRequest {
        language: string;
        published?: boolean;
        responseFields?: string;
    }
    export interface ListSchemaDefinitionsRequest {
        responseFields?: string;
    }
    export interface PublishRequest {
        language: string;
        reindex?: boolean;
        responseFields?: string;
    }
    export interface RevertRequest {
        language: string;
        responseFields?: string;
    }
    export interface UpdateSchemaDefinitionRequest {
        language: string;
        responseFields?: string;
        schemaDefinition?: SchemaDefinition;
    }
}
/**
* SchemaDefinitionApiService - interface
* 
* @export
* @interface SchemaDefinitionApi
*/
export interface SchemaDefinitionApiService {
    /**
    * Get Schema Definition
    * @summary Get Schema Definition
    * @param {string} language 
    * @param {boolean} [published] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SchemaDefinitionApiInterface
    */
    getSchemaDefinitionRaw(requestParameters: schemaDefinitionApiParams.GetSchemaDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SchemaDefinition>>;

    /**
    * Get Schema Definition
    * Get Schema Definition
    */
    getSchemaDefinition(requestParameters: schemaDefinitionApiParams.GetSchemaDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SchemaDefinition>;

    /**
    * List Schema Definitions
    * @summary List Schema Definitions
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SchemaDefinitionApiInterface
    */
    listSchemaDefinitionsRaw(requestParameters: schemaDefinitionApiParams.ListSchemaDefinitionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<SchemaDefinition>>>;

    /**
    * List Schema Definitions
    * List Schema Definitions
    */
    listSchemaDefinitions(requestParameters: schemaDefinitionApiParams.ListSchemaDefinitionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<SchemaDefinition>>;

    /**
    * Publish
    * @summary Publish
    * @param {string} language 
    * @param {boolean} [reindex] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SchemaDefinitionApiInterface
    */
    publishRaw(requestParameters: schemaDefinitionApiParams.PublishRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>>;

    /**
    * Publish
    * Publish
    */
    publish(requestParameters: schemaDefinitionApiParams.PublishRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean>;

    /**
    * Revert
    * @summary Revert
    * @param {string} language 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SchemaDefinitionApiInterface
    */
    revertRaw(requestParameters: schemaDefinitionApiParams.RevertRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>>;

    /**
    * Revert
    * Revert
    */
    revert(requestParameters: schemaDefinitionApiParams.RevertRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean>;

    /**
    * Update Schema Definition
    * @summary Update Schema Definition
    * @param {string} language 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {SchemaDefinition} [schemaDefinition] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SchemaDefinitionApiInterface
    */
    updateSchemaDefinitionRaw(requestParameters: schemaDefinitionApiParams.UpdateSchemaDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SchemaDefinition>>;

    /**
    * Update Schema Definition
    * Update Schema Definition
    */
    updateSchemaDefinition(requestParameters: schemaDefinitionApiParams.UpdateSchemaDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SchemaDefinition>;

}


/**
 * 
 */
export class SchemaDefinitionApi extends runtime.BaseAPI implements SchemaDefinitionApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Get Schema Definition
     * Get Schema Definition
     */


    async getSchemaDefinitionRaw(requestParameters: schemaDefinitionApiParams.GetSchemaDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SchemaDefinition>> {
        if (requestParameters.language === null || requestParameters.language === undefined) {
            throw new runtime.RequiredError('language','Required parameter requestParameters.language was null or undefined when calling getSchemaDefinition.');
        }

        const queryParameters: any = {};

        if (requestParameters.published !== undefined) {
            queryParameters['published'] = requestParameters.published;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/searchSchema/definition/{language}`.replace(`{${"language"}}`, encodeURIComponent(String(requestParameters.language))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get Schema Definition
     * Get Schema Definition
     */
    async getSchemaDefinition(requestParameters: schemaDefinitionApiParams.GetSchemaDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SchemaDefinition> {
        const response = await this.getSchemaDefinitionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List Schema Definitions
     * List Schema Definitions
     */


    async listSchemaDefinitionsRaw(requestParameters: schemaDefinitionApiParams.ListSchemaDefinitionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<SchemaDefinition>>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/searchSchema/definition`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * List Schema Definitions
     * List Schema Definitions
     */
    async listSchemaDefinitions(requestParameters: schemaDefinitionApiParams.ListSchemaDefinitionsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<SchemaDefinition>> {
        const response = await this.listSchemaDefinitionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Publish
     * Publish
     */


    async publishRaw(requestParameters: schemaDefinitionApiParams.PublishRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>> {
        if (requestParameters.language === null || requestParameters.language === undefined) {
            throw new runtime.RequiredError('language','Required parameter requestParameters.language was null or undefined when calling publish.');
        }

        const queryParameters: any = {};

        if (requestParameters.reindex !== undefined) {
            queryParameters['reindex'] = requestParameters.reindex;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/searchSchema/definition/{language}/publish`.replace(`{${"language"}}`, encodeURIComponent(String(requestParameters.language))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Publish
     * Publish
     */
    async publish(requestParameters: schemaDefinitionApiParams.PublishRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean> {
        const response = await this.publishRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Revert
     * Revert
     */


    async revertRaw(requestParameters: schemaDefinitionApiParams.RevertRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>> {
        if (requestParameters.language === null || requestParameters.language === undefined) {
            throw new runtime.RequiredError('language','Required parameter requestParameters.language was null or undefined when calling revert.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/searchSchema/definition/{language}/revert`.replace(`{${"language"}}`, encodeURIComponent(String(requestParameters.language))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Revert
     * Revert
     */
    async revert(requestParameters: schemaDefinitionApiParams.RevertRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean> {
        const response = await this.revertRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Schema Definition
     * Update Schema Definition
     */


    async updateSchemaDefinitionRaw(requestParameters: schemaDefinitionApiParams.UpdateSchemaDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SchemaDefinition>> {
        if (requestParameters.language === null || requestParameters.language === undefined) {
            throw new runtime.RequiredError('language','Required parameter requestParameters.language was null or undefined when calling updateSchemaDefinition.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/searchSchema/definition/{language}`.replace(`{${"language"}}`, encodeURIComponent(String(requestParameters.language))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.schemaDefinition,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update Schema Definition
     * Update Schema Definition
     */
    async updateSchemaDefinition(requestParameters: schemaDefinitionApiParams.UpdateSchemaDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SchemaDefinition> {
        const response = await this.updateSchemaDefinitionRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
