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
  SearchSettings,
  SearchSettingsCollection,
  SiteSearchSettings,
  SpellcheckUpdate,
} from '../models';


export namespace searchSettingsApiParams { 
    export interface AddSearchSettingRequest {
        fromSystemDefault?: boolean;
        copyFromName?: string;
        name?: string;
        makeDefault?: boolean;
        responseFields?: string;
        searchSettings?: SearchSettings;
    }
    export interface DeleteSearchSettingRequest {
        name: string;
    }
    export interface DeleteSiteSearchSettingsRequest {
        name: string;
    }
    export interface GetSearchSettingRequest {
        name: string;
        responseFields?: string;
    }
    export interface GetSearchSettingsRequest {
        responseFields?: string;
    }
    export interface GetSiteSearchSettingsRequest {
        name: string;
        responseFields?: string;
    }
    export interface GetSystemDefaultSettingsRequest {
        responseFields?: string;
    }
    export interface UpdateSearchSettingRequest {
        name: string;
        responseFields?: string;
        searchSettings?: SearchSettings;
    }
    export interface UpdateSiteSearchSettingsRequest {
        name: string;
        responseFields?: string;
        siteSearchSettings?: SiteSearchSettings;
    }
    export interface UpdateSpellCheckRequest {
        responseFields?: string;
        spellcheckUpdate?: SpellcheckUpdate;
    }
}
/**
* SearchSettingsApiService - interface
* 
* @export
* @interface SearchSettingsApi
*/
export interface SearchSettingsApiService {
    /**
    * Adds the Search Settings for a specific site.
    * @summary Add Search Settings
    * @param {boolean} [fromSystemDefault] 
    * @param {string} [copyFromName] 
    * @param {string} [name] 
    * @param {boolean} [makeDefault] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {SearchSettings} [searchSettings] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SearchSettingsApiInterface
    */
    addSearchSettingRaw(requestParameters: searchSettingsApiParams.AddSearchSettingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchSettings>>;

    /**
    * Adds the Search Settings for a specific site.
    * Add Search Settings
    */
    addSearchSetting(requestParameters: searchSettingsApiParams.AddSearchSettingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchSettings>;

    /**
    * Delete the Search Settings for a specific site by name.
    * @summary Delete Search Settings by Name
    * @param {string} name 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SearchSettingsApiInterface
    */
    deleteSearchSettingRaw(requestParameters: searchSettingsApiParams.DeleteSearchSettingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchSettings>>;

    /**
    * Delete the Search Settings for a specific site by name.
    * Delete Search Settings by Name
    */
    deleteSearchSetting(requestParameters: searchSettingsApiParams.DeleteSearchSettingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchSettings>;

    /**
    * Deletes the SiteSearchSettings for a specific SearchSetting by name.
    * @summary Delete Site Search Settings
    * @param {string} name 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SearchSettingsApiInterface
    */
    deleteSiteSearchSettingsRaw(requestParameters: searchSettingsApiParams.DeleteSiteSearchSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Deletes the SiteSearchSettings for a specific SearchSetting by name.
    * Delete Site Search Settings
    */
    deleteSiteSearchSettings(requestParameters: searchSettingsApiParams.DeleteSiteSearchSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Get specific site search settings by name.
    * @summary Get Search Settings by Name
    * @param {string} name 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SearchSettingsApiInterface
    */
    getSearchSettingRaw(requestParameters: searchSettingsApiParams.GetSearchSettingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchSettings>>;

    /**
    * Get specific site search settings by name.
    * Get Search Settings by Name
    */
    getSearchSetting(requestParameters: searchSettingsApiParams.GetSearchSettingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchSettings>;

    /**
    * Get site search settings list.
    * @summary Get Search Settings
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SearchSettingsApiInterface
    */
    getSearchSettingsRaw(requestParameters: searchSettingsApiParams.GetSearchSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchSettingsCollection>>;

    /**
    * Get site search settings list.
    * Get Search Settings
    */
    getSearchSettings(requestParameters: searchSettingsApiParams.GetSearchSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchSettingsCollection>;

    /**
    * Get SiteSearchSettings for a specific SearchSettings by name.
    * @summary Get Site Search Settings
    * @param {string} name 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SearchSettingsApiInterface
    */
    getSiteSearchSettingsRaw(requestParameters: searchSettingsApiParams.GetSiteSearchSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SiteSearchSettings>>;

    /**
    * Get SiteSearchSettings for a specific SearchSettings by name.
    * Get Site Search Settings
    */
    getSiteSearchSettings(requestParameters: searchSettingsApiParams.GetSiteSearchSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SiteSearchSettings>;

    /**
    * Get the system default search settings.
    * @summary Get System Default Search Settings
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SearchSettingsApiInterface
    */
    getSystemDefaultSettingsRaw(requestParameters: searchSettingsApiParams.GetSystemDefaultSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchSettings>>;

    /**
    * Get the system default search settings.
    * Get System Default Search Settings
    */
    getSystemDefaultSettings(requestParameters: searchSettingsApiParams.GetSystemDefaultSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchSettings>;

    /**
    * Update site search settings for a specific site by name.
    * @summary Update Search Settings by Name
    * @param {string} name 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {SearchSettings} [searchSettings] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SearchSettingsApiInterface
    */
    updateSearchSettingRaw(requestParameters: searchSettingsApiParams.UpdateSearchSettingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchSettings>>;

    /**
    * Update site search settings for a specific site by name.
    * Update Search Settings by Name
    */
    updateSearchSetting(requestParameters: searchSettingsApiParams.UpdateSearchSettingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchSettings>;

    /**
    * Updates the SiteSearchSettings for a specific SearchSetting by name.
    * @summary Update Site Search Settings
    * @param {string} name 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {SiteSearchSettings} [siteSearchSettings] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SearchSettingsApiInterface
    */
    updateSiteSearchSettingsRaw(requestParameters: searchSettingsApiParams.UpdateSiteSearchSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SiteSearchSettings>>;

    /**
    * Updates the SiteSearchSettings for a specific SearchSetting by name.
    * Update Site Search Settings
    */
    updateSiteSearchSettings(requestParameters: searchSettingsApiParams.UpdateSiteSearchSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SiteSearchSettings>;

    /**
    * Update Spellcheck for SiteSearchSettings.
    * @summary Update Spellcheck Settings
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {SpellcheckUpdate} [spellcheckUpdate] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SearchSettingsApiInterface
    */
    updateSpellCheckRaw(requestParameters: searchSettingsApiParams.UpdateSpellCheckRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Update Spellcheck for SiteSearchSettings.
    * Update Spellcheck Settings
    */
    updateSpellCheck(requestParameters: searchSettingsApiParams.UpdateSpellCheckRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

}


/**
 * 
 */
export class SearchSettingsApi extends runtime.BaseAPI implements SearchSettingsApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Adds the Search Settings for a specific site.
     * Add Search Settings
     */


    async addSearchSettingRaw(requestParameters: searchSettingsApiParams.AddSearchSettingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchSettings>> {
        const queryParameters: any = {};

        if (requestParameters.fromSystemDefault !== undefined) {
            queryParameters['fromSystemDefault'] = requestParameters.fromSystemDefault;
        }

        if (requestParameters.copyFromName !== undefined) {
            queryParameters['copyFromName'] = requestParameters.copyFromName;
        }

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        if (requestParameters.makeDefault !== undefined) {
            queryParameters['makeDefault'] = requestParameters.makeDefault;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/search/settings`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.searchSettings,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Adds the Search Settings for a specific site.
     * Add Search Settings
     */
    async addSearchSetting(requestParameters: searchSettingsApiParams.AddSearchSettingRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchSettings> {
        const response = await this.addSearchSettingRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete the Search Settings for a specific site by name.
     * Delete Search Settings by Name
     */


    async deleteSearchSettingRaw(requestParameters: searchSettingsApiParams.DeleteSearchSettingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchSettings>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling deleteSearchSetting.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/search/settings/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Delete the Search Settings for a specific site by name.
     * Delete Search Settings by Name
     */
    async deleteSearchSetting(requestParameters: searchSettingsApiParams.DeleteSearchSettingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchSettings> {
        const response = await this.deleteSearchSettingRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes the SiteSearchSettings for a specific SearchSetting by name.
     * Delete Site Search Settings
     */


    async deleteSiteSearchSettingsRaw(requestParameters: searchSettingsApiParams.DeleteSiteSearchSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling deleteSiteSearchSettings.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/search/{name}/sitesearchsettings`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes the SiteSearchSettings for a specific SearchSetting by name.
     * Delete Site Search Settings
     */
    async deleteSiteSearchSettings(requestParameters: searchSettingsApiParams.DeleteSiteSearchSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteSiteSearchSettingsRaw(requestParameters, initOverrides);
    }

    /**
     * Get specific site search settings by name.
     * Get Search Settings by Name
     */


    async getSearchSettingRaw(requestParameters: searchSettingsApiParams.GetSearchSettingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchSettings>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling getSearchSetting.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/search/settings/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get specific site search settings by name.
     * Get Search Settings by Name
     */
    async getSearchSetting(requestParameters: searchSettingsApiParams.GetSearchSettingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchSettings> {
        const response = await this.getSearchSettingRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get site search settings list.
     * Get Search Settings
     */


    async getSearchSettingsRaw(requestParameters: searchSettingsApiParams.GetSearchSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchSettingsCollection>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/search/settings`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get site search settings list.
     * Get Search Settings
     */
    async getSearchSettings(requestParameters: searchSettingsApiParams.GetSearchSettingsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchSettingsCollection> {
        const response = await this.getSearchSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get SiteSearchSettings for a specific SearchSettings by name.
     * Get Site Search Settings
     */


    async getSiteSearchSettingsRaw(requestParameters: searchSettingsApiParams.GetSiteSearchSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SiteSearchSettings>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling getSiteSearchSettings.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/search/{name}/sitesearchsettings`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get SiteSearchSettings for a specific SearchSettings by name.
     * Get Site Search Settings
     */
    async getSiteSearchSettings(requestParameters: searchSettingsApiParams.GetSiteSearchSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SiteSearchSettings> {
        const response = await this.getSiteSearchSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get the system default search settings.
     * Get System Default Search Settings
     */


    async getSystemDefaultSettingsRaw(requestParameters: searchSettingsApiParams.GetSystemDefaultSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchSettings>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/search/settings/systemdefault`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get the system default search settings.
     * Get System Default Search Settings
     */
    async getSystemDefaultSettings(requestParameters: searchSettingsApiParams.GetSystemDefaultSettingsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchSettings> {
        const response = await this.getSystemDefaultSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update site search settings for a specific site by name.
     * Update Search Settings by Name
     */


    async updateSearchSettingRaw(requestParameters: searchSettingsApiParams.UpdateSearchSettingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchSettings>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling updateSearchSetting.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/search/settings/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.searchSettings,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update site search settings for a specific site by name.
     * Update Search Settings by Name
     */
    async updateSearchSetting(requestParameters: searchSettingsApiParams.UpdateSearchSettingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchSettings> {
        const response = await this.updateSearchSettingRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates the SiteSearchSettings for a specific SearchSetting by name.
     * Update Site Search Settings
     */


    async updateSiteSearchSettingsRaw(requestParameters: searchSettingsApiParams.UpdateSiteSearchSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SiteSearchSettings>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling updateSiteSearchSettings.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/search/{name}/sitesearchsettings`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.siteSearchSettings,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates the SiteSearchSettings for a specific SearchSetting by name.
     * Update Site Search Settings
     */
    async updateSiteSearchSettings(requestParameters: searchSettingsApiParams.UpdateSiteSearchSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SiteSearchSettings> {
        const response = await this.updateSiteSearchSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Spellcheck for SiteSearchSettings.
     * Update Spellcheck Settings
     */


    async updateSpellCheckRaw(requestParameters: searchSettingsApiParams.UpdateSpellCheckRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/search/spellcheck`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.spellcheckUpdate,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update Spellcheck for SiteSearchSettings.
     * Update Spellcheck Settings
     */
    async updateSpellCheck(requestParameters: searchSettingsApiParams.UpdateSpellCheckRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateSpellCheckRaw(requestParameters, initOverrides);
    }

}
