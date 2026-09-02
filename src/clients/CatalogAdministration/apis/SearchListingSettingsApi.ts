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
  ListingSettings,
} from '../models';


export namespace searchListingSettingsApiParams { 
    export interface DeleteListingSettingsRequest {
        name: string;
    }
    export interface GetListingSettingsRequest {
        name: string;
        responseFields?: string;
    }
    export interface UpdateListingSettingsRequest {
        name: string;
        responseFields?: string;
        listingSettings?: ListingSettings;
    }
}
/**
* SearchListingSettingsApiService - interface
* 
* @export
* @interface SearchListingSettingsApi
*/
export interface SearchListingSettingsApiService {
    /**
    * Deletes the ListingSettings for a specific SearchSetting by name.
    * @summary Delete Search Listing Settings
    * @param {string} name 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SearchListingSettingsApiInterface
    */
    deleteListingSettingsRaw(requestParameters: searchListingSettingsApiParams.DeleteListingSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Deletes the ListingSettings for a specific SearchSetting by name.
    * Delete Search Listing Settings
    */
    deleteListingSettings(requestParameters: searchListingSettingsApiParams.DeleteListingSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Get ListingSettings for a specific SearchSettings by name.
    * @summary Get Search Listing Settings
    * @param {string} name 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SearchListingSettingsApiInterface
    */
    getListingSettingsRaw(requestParameters: searchListingSettingsApiParams.GetListingSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListingSettings>>;

    /**
    * Get ListingSettings for a specific SearchSettings by name.
    * Get Search Listing Settings
    */
    getListingSettings(requestParameters: searchListingSettingsApiParams.GetListingSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListingSettings>;

    /**
    * Adds or updates the ListingSettings for a specific SearchSetting by name.
    * @summary Update Search Listing Settings
    * @param {string} name 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {ListingSettings} [listingSettings] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SearchListingSettingsApiInterface
    */
    updateListingSettingsRaw(requestParameters: searchListingSettingsApiParams.UpdateListingSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListingSettings>>;

    /**
    * Adds or updates the ListingSettings for a specific SearchSetting by name.
    * Update Search Listing Settings
    */
    updateListingSettings(requestParameters: searchListingSettingsApiParams.UpdateListingSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListingSettings>;

}


/**
 * 
 */
export class SearchListingSettingsApi extends runtime.BaseAPI implements SearchListingSettingsApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Deletes the ListingSettings for a specific SearchSetting by name.
     * Delete Search Listing Settings
     */


    async deleteListingSettingsRaw(requestParameters: searchListingSettingsApiParams.DeleteListingSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling deleteListingSettings.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/search/{name}/listingsettings`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes the ListingSettings for a specific SearchSetting by name.
     * Delete Search Listing Settings
     */
    async deleteListingSettings(requestParameters: searchListingSettingsApiParams.DeleteListingSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteListingSettingsRaw(requestParameters, initOverrides);
    }

    /**
     * Get ListingSettings for a specific SearchSettings by name.
     * Get Search Listing Settings
     */


    async getListingSettingsRaw(requestParameters: searchListingSettingsApiParams.GetListingSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListingSettings>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling getListingSettings.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/search/{name}/listingsettings`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get ListingSettings for a specific SearchSettings by name.
     * Get Search Listing Settings
     */
    async getListingSettings(requestParameters: searchListingSettingsApiParams.GetListingSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListingSettings> {
        const response = await this.getListingSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Adds or updates the ListingSettings for a specific SearchSetting by name.
     * Update Search Listing Settings
     */


    async updateListingSettingsRaw(requestParameters: searchListingSettingsApiParams.UpdateListingSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListingSettings>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling updateListingSettings.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/search/{name}/listingsettings`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.listingSettings,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Adds or updates the ListingSettings for a specific SearchSetting by name.
     * Update Search Listing Settings
     */
    async updateListingSettings(requestParameters: searchListingSettingsApiParams.UpdateListingSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListingSettings> {
        const response = await this.updateListingSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
