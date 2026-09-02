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
  CatalogAdminsMasterCatalog,
  MasterCatalogCollection,
} from '../models';


export namespace masterCatalogPublishSettingsApiParams { 
    export interface GetMasterCatalogRequest {
        masterCatalogId: number;
        responseFields?: string;
    }
    export interface GetMasterCatalogsRequest {
        responseFields?: string;
    }
    export interface UpdateMasterCatalogRequest {
        masterCatalogId: number;
        responseFields?: string;
        catalogAdminsMasterCatalog?: CatalogAdminsMasterCatalog;
    }
}
/**
* MasterCatalogPublishSettingsApiService - interface
* 
* @export
* @interface MasterCatalogPublishSettingsApi
*/
export interface MasterCatalogPublishSettingsApiService {
    /**
    * Retrieves a specific master catalog by its Id.
    * @summary Get Master Catalog
    * @param {number} masterCatalogId 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof MasterCatalogPublishSettingsApiInterface
    */
    getMasterCatalogRaw(requestParameters: masterCatalogPublishSettingsApiParams.GetMasterCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsMasterCatalog>>;

    /**
    * Retrieves a specific master catalog by its Id.
    * Get Master Catalog
    */
    getMasterCatalog(requestParameters: masterCatalogPublishSettingsApiParams.GetMasterCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsMasterCatalog>;

    /**
    * Retrieves all master catalogs.
    * @summary Get Master Catalogs
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof MasterCatalogPublishSettingsApiInterface
    */
    getMasterCatalogsRaw(requestParameters: masterCatalogPublishSettingsApiParams.GetMasterCatalogsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MasterCatalogCollection>>;

    /**
    * Retrieves all master catalogs.
    * Get Master Catalogs
    */
    getMasterCatalogs(requestParameters: masterCatalogPublishSettingsApiParams.GetMasterCatalogsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MasterCatalogCollection>;

    /**
    * Update the publishing mode of a master catalog
    * @summary Update Master Catalog
    * @param {number} masterCatalogId 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CatalogAdminsMasterCatalog} [catalogAdminsMasterCatalog] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof MasterCatalogPublishSettingsApiInterface
    */
    updateMasterCatalogRaw(requestParameters: masterCatalogPublishSettingsApiParams.UpdateMasterCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsMasterCatalog>>;

    /**
    * Update the publishing mode of a master catalog
    * Update Master Catalog
    */
    updateMasterCatalog(requestParameters: masterCatalogPublishSettingsApiParams.UpdateMasterCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsMasterCatalog>;

}


/**
 * 
 */
export class MasterCatalogPublishSettingsApi extends runtime.BaseAPI implements MasterCatalogPublishSettingsApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Retrieves a specific master catalog by its Id.
     * Get Master Catalog
     */


    async getMasterCatalogRaw(requestParameters: masterCatalogPublishSettingsApiParams.GetMasterCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsMasterCatalog>> {
        if (requestParameters.masterCatalogId === null || requestParameters.masterCatalogId === undefined) {
            throw new runtime.RequiredError('masterCatalogId','Required parameter requestParameters.masterCatalogId was null or undefined when calling getMasterCatalog.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/mastercatalogs/{masterCatalogId}`.replace(`{${"masterCatalogId"}}`, encodeURIComponent(String(requestParameters.masterCatalogId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a specific master catalog by its Id.
     * Get Master Catalog
     */
    async getMasterCatalog(requestParameters: masterCatalogPublishSettingsApiParams.GetMasterCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsMasterCatalog> {
        const response = await this.getMasterCatalogRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves all master catalogs.
     * Get Master Catalogs
     */


    async getMasterCatalogsRaw(requestParameters: masterCatalogPublishSettingsApiParams.GetMasterCatalogsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MasterCatalogCollection>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/mastercatalogs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves all master catalogs.
     * Get Master Catalogs
     */
    async getMasterCatalogs(requestParameters: masterCatalogPublishSettingsApiParams.GetMasterCatalogsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MasterCatalogCollection> {
        const response = await this.getMasterCatalogsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update the publishing mode of a master catalog
     * Update Master Catalog
     */


    async updateMasterCatalogRaw(requestParameters: masterCatalogPublishSettingsApiParams.UpdateMasterCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsMasterCatalog>> {
        if (requestParameters.masterCatalogId === null || requestParameters.masterCatalogId === undefined) {
            throw new runtime.RequiredError('masterCatalogId','Required parameter requestParameters.masterCatalogId was null or undefined when calling updateMasterCatalog.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/mastercatalogs/{masterCatalogId}`.replace(`{${"masterCatalogId"}}`, encodeURIComponent(String(requestParameters.masterCatalogId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsMasterCatalog,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update the publishing mode of a master catalog
     * Update Master Catalog
     */
    async updateMasterCatalog(requestParameters: masterCatalogPublishSettingsApiParams.UpdateMasterCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsMasterCatalog> {
        const response = await this.updateMasterCatalogRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
