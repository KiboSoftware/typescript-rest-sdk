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
  CatalogAdminsFacet,
  FacetCollection,
  FacetSet,
} from '../models';


export namespace facetsApiParams { 
    export interface AddFacetRequest {
        responseFields?: string;
        catalogAdminsFacet?: CatalogAdminsFacet;
    }
    export interface DeleteFacetByIdRequest {
        facetId: number;
    }
    export interface GetFacetRequest {
        facetId: number;
        validate?: boolean;
        responseFields?: string;
    }
    export interface GetFacetCategoryListRequest {
        categoryId?: number;
        categoryCode?: string;
        includeAvailable?: boolean;
        validate?: boolean;
        responseFields?: string;
    }
    export interface GetFacetCategoryListLegacyRequest {
        categoryId: number;
        includeAvailable?: boolean;
        validate?: boolean;
        responseFields?: string;
    }
    export interface GetFacetsRequest {
        responseFields?: string;
    }
    export interface UpdateFacetRequest {
        facetId: number;
        responseFields?: string;
        catalogAdminsFacet?: CatalogAdminsFacet;
    }
    export interface UpdateFacetSetRequest {
        categoryId?: number;
        categoryCode?: string;
        responseFields?: string;
        facetSet?: FacetSet;
    }
}
/**
* FacetsApiService - interface
* 
* @export
* @interface FacetsApi
*/
export interface FacetsApiService {
    /**
    * Adds a new Facet to a category in a catalog.
    * @summary Add Facet
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CatalogAdminsFacet} [catalogAdminsFacet] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof FacetsApiInterface
    */
    addFacetRaw(requestParameters: facetsApiParams.AddFacetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsFacet>>;

    /**
    * Adds a new Facet to a category in a catalog.
    * Add Facet
    */
    addFacet(requestParameters: facetsApiParams.AddFacetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsFacet>;

    /**
    * Deletes the Facet definition from the store.
    * @summary Delete Facet
    * @param {number} facetId 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof FacetsApiInterface
    */
    deleteFacetByIdRaw(requestParameters: facetsApiParams.DeleteFacetByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Deletes the Facet definition from the store.
    * Delete Facet
    */
    deleteFacetById(requestParameters: facetsApiParams.DeleteFacetByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Retrieves the details of a Facet definition.
    * @summary Get Facet
    * @param {number} facetId 
    * @param {boolean} [validate] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof FacetsApiInterface
    */
    getFacetRaw(requestParameters: facetsApiParams.GetFacetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsFacet>>;

    /**
    * Retrieves the details of a Facet definition.
    * Get Facet
    */
    getFacet(requestParameters: facetsApiParams.GetFacetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsFacet>;

    /**
    * Retrieves a list of configured, and optionally available, Facet configurations for the specified category.
    * @summary Get Facet Category List
    * @param {number} [categoryId] 
    * @param {string} [categoryCode] 
    * @param {boolean} [includeAvailable] 
    * @param {boolean} [validate] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof FacetsApiInterface
    */
    getFacetCategoryListRaw(requestParameters: facetsApiParams.GetFacetCategoryListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FacetSet>>;

    /**
    * Retrieves a list of configured, and optionally available, Facet configurations for the specified category.
    * Get Facet Category List
    */
    getFacetCategoryList(requestParameters: facetsApiParams.GetFacetCategoryListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FacetSet>;

    /**
    * Retrieves a list of configured, and optionally available, Facet configurations for the specified category. 
    * @summary Get Facet Category List (Legacy)
    * @param {number} categoryId 
    * @param {boolean} [includeAvailable] 
    * @param {boolean} [validate] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof FacetsApiInterface
    */
    getFacetCategoryListLegacyRaw(requestParameters: facetsApiParams.GetFacetCategoryListLegacyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FacetSet>>;

    /**
    * Retrieves a list of configured, and optionally available, Facet configurations for the specified category. 
    * Get Facet Category List (Legacy)
    */
    getFacetCategoryListLegacy(requestParameters: facetsApiParams.GetFacetCategoryListLegacyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FacetSet>;

    /**
    * Retrieves the list of Facet Definition
    * @summary Get facets
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof FacetsApiInterface
    */
    getFacetsRaw(requestParameters: facetsApiParams.GetFacetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FacetCollection>>;

    /**
    * Retrieves the list of Facet Definition
    * Get facets
    */
    getFacets(requestParameters: facetsApiParams.GetFacetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FacetCollection>;

    /**
    * Modifies a Facet definition.
    * @summary Update Facet
    * @param {number} facetId 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CatalogAdminsFacet} [catalogAdminsFacet] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof FacetsApiInterface
    */
    updateFacetRaw(requestParameters: facetsApiParams.UpdateFacetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsFacet>>;

    /**
    * Modifies a Facet definition.
    * Update Facet
    */
    updateFacet(requestParameters: facetsApiParams.UpdateFacetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsFacet>;

    /**
    * Modifies a Facet definition.
    * @summary Update Facet Set
    * @param {number} [categoryId] 
    * @param {string} [categoryCode] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {FacetSet} [facetSet] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof FacetsApiInterface
    */
    updateFacetSetRaw(requestParameters: facetsApiParams.UpdateFacetSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FacetSet>>;

    /**
    * Modifies a Facet definition.
    * Update Facet Set
    */
    updateFacetSet(requestParameters: facetsApiParams.UpdateFacetSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FacetSet>;

}


/**
 * 
 */
export class FacetsApi extends runtime.BaseAPI implements FacetsApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Adds a new Facet to a category in a catalog.
     * Add Facet
     */


    async addFacetRaw(requestParameters: facetsApiParams.AddFacetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsFacet>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/facets`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsFacet,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Adds a new Facet to a category in a catalog.
     * Add Facet
     */
    async addFacet(requestParameters: facetsApiParams.AddFacetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsFacet> {
        const response = await this.addFacetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes the Facet definition from the store.
     * Delete Facet
     */


    async deleteFacetByIdRaw(requestParameters: facetsApiParams.DeleteFacetByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.facetId === null || requestParameters.facetId === undefined) {
            throw new runtime.RequiredError('facetId','Required parameter requestParameters.facetId was null or undefined when calling deleteFacetById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/facets/{facetId}`.replace(`{${"facetId"}}`, encodeURIComponent(String(requestParameters.facetId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes the Facet definition from the store.
     * Delete Facet
     */
    async deleteFacetById(requestParameters: facetsApiParams.DeleteFacetByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteFacetByIdRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves the details of a Facet definition.
     * Get Facet
     */


    async getFacetRaw(requestParameters: facetsApiParams.GetFacetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsFacet>> {
        if (requestParameters.facetId === null || requestParameters.facetId === undefined) {
            throw new runtime.RequiredError('facetId','Required parameter requestParameters.facetId was null or undefined when calling getFacet.');
        }

        const queryParameters: any = {};

        if (requestParameters.validate !== undefined) {
            queryParameters['validate'] = requestParameters.validate;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/facets/{facetId}`.replace(`{${"facetId"}}`, encodeURIComponent(String(requestParameters.facetId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves the details of a Facet definition.
     * Get Facet
     */
    async getFacet(requestParameters: facetsApiParams.GetFacetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsFacet> {
        const response = await this.getFacetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a list of configured, and optionally available, Facet configurations for the specified category.
     * Get Facet Category List
     */


    async getFacetCategoryListRaw(requestParameters: facetsApiParams.GetFacetCategoryListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FacetSet>> {
        const queryParameters: any = {};

        if (requestParameters.categoryId !== undefined) {
            queryParameters['categoryId'] = requestParameters.categoryId;
        }

        if (requestParameters.categoryCode !== undefined) {
            queryParameters['categoryCode'] = requestParameters.categoryCode;
        }

        if (requestParameters.includeAvailable !== undefined) {
            queryParameters['includeAvailable'] = requestParameters.includeAvailable;
        }

        if (requestParameters.validate !== undefined) {
            queryParameters['validate'] = requestParameters.validate;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/facets/category`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a list of configured, and optionally available, Facet configurations for the specified category.
     * Get Facet Category List
     */
    async getFacetCategoryList(requestParameters: facetsApiParams.GetFacetCategoryListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FacetSet> {
        const response = await this.getFacetCategoryListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a list of configured, and optionally available, Facet configurations for the specified category. 
     * Get Facet Category List (Legacy)
     */


    async getFacetCategoryListLegacyRaw(requestParameters: facetsApiParams.GetFacetCategoryListLegacyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FacetSet>> {
        if (requestParameters.categoryId === null || requestParameters.categoryId === undefined) {
            throw new runtime.RequiredError('categoryId','Required parameter requestParameters.categoryId was null or undefined when calling getFacetCategoryListLegacy.');
        }

        const queryParameters: any = {};

        if (requestParameters.includeAvailable !== undefined) {
            queryParameters['includeAvailable'] = requestParameters.includeAvailable;
        }

        if (requestParameters.validate !== undefined) {
            queryParameters['validate'] = requestParameters.validate;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/facets/category/{categoryId}`.replace(`{${"categoryId"}}`, encodeURIComponent(String(requestParameters.categoryId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a list of configured, and optionally available, Facet configurations for the specified category. 
     * Get Facet Category List (Legacy)
     */
    async getFacetCategoryListLegacy(requestParameters: facetsApiParams.GetFacetCategoryListLegacyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FacetSet> {
        const response = await this.getFacetCategoryListLegacyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the list of Facet Definition
     * Get facets
     */


    async getFacetsRaw(requestParameters: facetsApiParams.GetFacetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FacetCollection>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/facets`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves the list of Facet Definition
     * Get facets
     */
    async getFacets(requestParameters: facetsApiParams.GetFacetsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FacetCollection> {
        const response = await this.getFacetsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Modifies a Facet definition.
     * Update Facet
     */


    async updateFacetRaw(requestParameters: facetsApiParams.UpdateFacetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsFacet>> {
        if (requestParameters.facetId === null || requestParameters.facetId === undefined) {
            throw new runtime.RequiredError('facetId','Required parameter requestParameters.facetId was null or undefined when calling updateFacet.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/facets/{facetId}`.replace(`{${"facetId"}}`, encodeURIComponent(String(requestParameters.facetId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsFacet,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Modifies a Facet definition.
     * Update Facet
     */
    async updateFacet(requestParameters: facetsApiParams.UpdateFacetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsFacet> {
        const response = await this.updateFacetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Modifies a Facet definition.
     * Update Facet Set
     */


    async updateFacetSetRaw(requestParameters: facetsApiParams.UpdateFacetSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FacetSet>> {
        const queryParameters: any = {};

        if (requestParameters.categoryId !== undefined) {
            queryParameters['categoryId'] = requestParameters.categoryId;
        }

        if (requestParameters.categoryCode !== undefined) {
            queryParameters['categoryCode'] = requestParameters.categoryCode;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/facets/set/edit`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.facetSet,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Modifies a Facet definition.
     * Update Facet Set
     */
    async updateFacetSet(requestParameters: facetsApiParams.UpdateFacetSetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FacetSet> {
        const response = await this.updateFacetSetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
