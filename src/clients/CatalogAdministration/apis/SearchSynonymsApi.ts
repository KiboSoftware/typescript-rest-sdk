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
  SynonymDefinition,
  SynonymDefinitionCollection,
  SynonymDefinitionPagedCollection,
} from '../models';


export namespace searchSynonymsApiParams { 
    export interface AddSynonymDefinitionRequest {
        responseFields?: string;
        synonymDefinition?: SynonymDefinition;
    }
    export interface DeleteSynonymDefinitionRequest {
        synonymId: number;
    }
    export interface GetAllSynonymDefinitionCollectionsForMasterCatalogRequest {
        languageCode: string;
        responseFields?: string;
    }
    export interface GetSynonymDefinitionRequest {
        synonymId: number;
        responseFields?: string;
    }
    export interface GetSynonymDefinitionCollectionRequest {
        localeCode: string;
        responseFields?: string;
    }
    export interface GetSynonymDefinitionsRequest {
        startIndex?: number;
        pageSize?: number;
        sortBy?: string;
        filter?: string;
        responseFields?: string;
    }
    export interface UpdateSynonymDefinitionRequest {
        synonymId: number;
        responseFields?: string;
        synonymDefinition?: SynonymDefinition;
    }
    export interface UpdateSynonymDefinitionCollectionRequest {
        localeCode: string;
        responseFields?: string;
        synonymDefinitionCollection?: SynonymDefinitionCollection;
    }
}
/**
* SearchSynonymsApiService - interface
* 
* @export
* @interface SearchSynonymsApi
*/
export interface SearchSynonymsApiService {
    /**
    * Add synonym definition
    * @summary Add Synonym Definition
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {SynonymDefinition} [synonymDefinition] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SearchSynonymsApiInterface
    */
    addSynonymDefinitionRaw(requestParameters: searchSynonymsApiParams.AddSynonymDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SynonymDefinition>>;

    /**
    * Add synonym definition
    * Add Synonym Definition
    */
    addSynonymDefinition(requestParameters: searchSynonymsApiParams.AddSynonymDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SynonymDefinition>;

    /**
    * Delete a specific synonym definition by ID.
    * @summary Delete Synonym Definition
    * @param {number} synonymId 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SearchSynonymsApiInterface
    */
    deleteSynonymDefinitionRaw(requestParameters: searchSynonymsApiParams.DeleteSynonymDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Delete a specific synonym definition by ID.
    * Delete Synonym Definition
    */
    deleteSynonymDefinition(requestParameters: searchSynonymsApiParams.DeleteSynonymDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Get synonym definition collections.
    * @summary Get Synonym Definition Collections
    * @param {string} languageCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SearchSynonymsApiInterface
    */
    getAllSynonymDefinitionCollectionsForMasterCatalogRaw(requestParameters: searchSynonymsApiParams.GetAllSynonymDefinitionCollectionsForMasterCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SynonymDefinitionCollection>>;

    /**
    * Get synonym definition collections.
    * Get Synonym Definition Collections
    */
    getAllSynonymDefinitionCollectionsForMasterCatalog(requestParameters: searchSynonymsApiParams.GetAllSynonymDefinitionCollectionsForMasterCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SynonymDefinitionCollection>;

    /**
    * Get a specific synonym definition by ID.
    * @summary Get Synonym Definition
    * @param {number} synonymId 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SearchSynonymsApiInterface
    */
    getSynonymDefinitionRaw(requestParameters: searchSynonymsApiParams.GetSynonymDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SynonymDefinition>>;

    /**
    * Get a specific synonym definition by ID.
    * Get Synonym Definition
    */
    getSynonymDefinition(requestParameters: searchSynonymsApiParams.GetSynonymDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SynonymDefinition>;

    /**
    * Get synonym definition collection.
    * @summary Get Synonym Definition Collection
    * @param {string} localeCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SearchSynonymsApiInterface
    */
    getSynonymDefinitionCollectionRaw(requestParameters: searchSynonymsApiParams.GetSynonymDefinitionCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SynonymDefinitionCollection>>;

    /**
    * Get synonym definition collection.
    * Get Synonym Definition Collection
    */
    getSynonymDefinitionCollection(requestParameters: searchSynonymsApiParams.GetSynonymDefinitionCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SynonymDefinitionCollection>;

    /**
    * Get synonym definitions.
    * @summary Get Synonym Definitions
    * @param {number} [startIndex] 
    * @param {number} [pageSize] 
    * @param {string} [sortBy] 
    * @param {string} [filter] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SearchSynonymsApiInterface
    */
    getSynonymDefinitionsRaw(requestParameters: searchSynonymsApiParams.GetSynonymDefinitionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SynonymDefinitionPagedCollection>>;

    /**
    * Get synonym definitions.
    * Get Synonym Definitions
    */
    getSynonymDefinitions(requestParameters: searchSynonymsApiParams.GetSynonymDefinitionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SynonymDefinitionPagedCollection>;

    /**
    * Update a specific synonym definition by ID.
    * @summary Update Synonym Definition
    * @param {number} synonymId 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {SynonymDefinition} [synonymDefinition] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SearchSynonymsApiInterface
    */
    updateSynonymDefinitionRaw(requestParameters: searchSynonymsApiParams.UpdateSynonymDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SynonymDefinition>>;

    /**
    * Update a specific synonym definition by ID.
    * Update Synonym Definition
    */
    updateSynonymDefinition(requestParameters: searchSynonymsApiParams.UpdateSynonymDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SynonymDefinition>;

    /**
    * Add or update a synonym definition collection.
    * @summary Add Synonym Definition Collection
    * @param {string} localeCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {SynonymDefinitionCollection} [synonymDefinitionCollection] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SearchSynonymsApiInterface
    */
    updateSynonymDefinitionCollectionRaw(requestParameters: searchSynonymsApiParams.UpdateSynonymDefinitionCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SynonymDefinitionCollection>>;

    /**
    * Add or update a synonym definition collection.
    * Add Synonym Definition Collection
    */
    updateSynonymDefinitionCollection(requestParameters: searchSynonymsApiParams.UpdateSynonymDefinitionCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SynonymDefinitionCollection>;

}


/**
 * 
 */
export class SearchSynonymsApi extends runtime.BaseAPI implements SearchSynonymsApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Add synonym definition
     * Add Synonym Definition
     */


    async addSynonymDefinitionRaw(requestParameters: searchSynonymsApiParams.AddSynonymDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SynonymDefinition>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/search/synonyms`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.synonymDefinition,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Add synonym definition
     * Add Synonym Definition
     */
    async addSynonymDefinition(requestParameters: searchSynonymsApiParams.AddSynonymDefinitionRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SynonymDefinition> {
        const response = await this.addSynonymDefinitionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a specific synonym definition by ID.
     * Delete Synonym Definition
     */


    async deleteSynonymDefinitionRaw(requestParameters: searchSynonymsApiParams.DeleteSynonymDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.synonymId === null || requestParameters.synonymId === undefined) {
            throw new runtime.RequiredError('synonymId','Required parameter requestParameters.synonymId was null or undefined when calling deleteSynonymDefinition.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/search/synonyms/{synonymId}`.replace(`{${"synonymId"}}`, encodeURIComponent(String(requestParameters.synonymId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a specific synonym definition by ID.
     * Delete Synonym Definition
     */
    async deleteSynonymDefinition(requestParameters: searchSynonymsApiParams.DeleteSynonymDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteSynonymDefinitionRaw(requestParameters, initOverrides);
    }

    /**
     * Get synonym definition collections.
     * Get Synonym Definition Collections
     */


    async getAllSynonymDefinitionCollectionsForMasterCatalogRaw(requestParameters: searchSynonymsApiParams.GetAllSynonymDefinitionCollectionsForMasterCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SynonymDefinitionCollection>> {
        if (requestParameters.languageCode === null || requestParameters.languageCode === undefined) {
            throw new runtime.RequiredError('languageCode','Required parameter requestParameters.languageCode was null or undefined when calling getAllSynonymDefinitionCollectionsForMasterCatalog.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/search/master-catalog-synonym-definitions/{languageCode}`.replace(`{${"languageCode"}}`, encodeURIComponent(String(requestParameters.languageCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get synonym definition collections.
     * Get Synonym Definition Collections
     */
    async getAllSynonymDefinitionCollectionsForMasterCatalog(requestParameters: searchSynonymsApiParams.GetAllSynonymDefinitionCollectionsForMasterCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SynonymDefinitionCollection> {
        const response = await this.getAllSynonymDefinitionCollectionsForMasterCatalogRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a specific synonym definition by ID.
     * Get Synonym Definition
     */


    async getSynonymDefinitionRaw(requestParameters: searchSynonymsApiParams.GetSynonymDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SynonymDefinition>> {
        if (requestParameters.synonymId === null || requestParameters.synonymId === undefined) {
            throw new runtime.RequiredError('synonymId','Required parameter requestParameters.synonymId was null or undefined when calling getSynonymDefinition.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/search/synonyms/{synonymId}`.replace(`{${"synonymId"}}`, encodeURIComponent(String(requestParameters.synonymId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get a specific synonym definition by ID.
     * Get Synonym Definition
     */
    async getSynonymDefinition(requestParameters: searchSynonymsApiParams.GetSynonymDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SynonymDefinition> {
        const response = await this.getSynonymDefinitionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get synonym definition collection.
     * Get Synonym Definition Collection
     */


    async getSynonymDefinitionCollectionRaw(requestParameters: searchSynonymsApiParams.GetSynonymDefinitionCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SynonymDefinitionCollection>> {
        if (requestParameters.localeCode === null || requestParameters.localeCode === undefined) {
            throw new runtime.RequiredError('localeCode','Required parameter requestParameters.localeCode was null or undefined when calling getSynonymDefinitionCollection.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/search/synonym-definitions/{localeCode}`.replace(`{${"localeCode"}}`, encodeURIComponent(String(requestParameters.localeCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get synonym definition collection.
     * Get Synonym Definition Collection
     */
    async getSynonymDefinitionCollection(requestParameters: searchSynonymsApiParams.GetSynonymDefinitionCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SynonymDefinitionCollection> {
        const response = await this.getSynonymDefinitionCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get synonym definitions.
     * Get Synonym Definitions
     */


    async getSynonymDefinitionsRaw(requestParameters: searchSynonymsApiParams.GetSynonymDefinitionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SynonymDefinitionPagedCollection>> {
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

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/search/synonyms`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get synonym definitions.
     * Get Synonym Definitions
     */
    async getSynonymDefinitions(requestParameters: searchSynonymsApiParams.GetSynonymDefinitionsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SynonymDefinitionPagedCollection> {
        const response = await this.getSynonymDefinitionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a specific synonym definition by ID.
     * Update Synonym Definition
     */


    async updateSynonymDefinitionRaw(requestParameters: searchSynonymsApiParams.UpdateSynonymDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SynonymDefinition>> {
        if (requestParameters.synonymId === null || requestParameters.synonymId === undefined) {
            throw new runtime.RequiredError('synonymId','Required parameter requestParameters.synonymId was null or undefined when calling updateSynonymDefinition.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/search/synonyms/{synonymId}`.replace(`{${"synonymId"}}`, encodeURIComponent(String(requestParameters.synonymId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.synonymDefinition,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update a specific synonym definition by ID.
     * Update Synonym Definition
     */
    async updateSynonymDefinition(requestParameters: searchSynonymsApiParams.UpdateSynonymDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SynonymDefinition> {
        const response = await this.updateSynonymDefinitionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Add or update a synonym definition collection.
     * Add Synonym Definition Collection
     */


    async updateSynonymDefinitionCollectionRaw(requestParameters: searchSynonymsApiParams.UpdateSynonymDefinitionCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SynonymDefinitionCollection>> {
        if (requestParameters.localeCode === null || requestParameters.localeCode === undefined) {
            throw new runtime.RequiredError('localeCode','Required parameter requestParameters.localeCode was null or undefined when calling updateSynonymDefinitionCollection.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/search/synonym-definitions/{localeCode}`.replace(`{${"localeCode"}}`, encodeURIComponent(String(requestParameters.localeCode))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.synonymDefinitionCollection,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Add or update a synonym definition collection.
     * Add Synonym Definition Collection
     */
    async updateSynonymDefinitionCollection(requestParameters: searchSynonymsApiParams.UpdateSynonymDefinitionCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SynonymDefinitionCollection> {
        const response = await this.updateSynonymDefinitionCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
