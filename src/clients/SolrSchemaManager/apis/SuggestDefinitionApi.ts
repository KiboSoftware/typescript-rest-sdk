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
  Suggester,
} from '../models';


export namespace suggestDefinitionApiParams { 
    export interface DownLoadSuggestRequest {
        language: string;
        responseFields?: string;
    }
    export interface GetSuggestSettingsRequest {
        language: string;
        responseFields?: string;
    }
    export interface UpdateSuggestSettingsRequest {
        language: string;
        responseFields?: string;
        suggester?: Suggester;
    }
    export interface UploadSuggestRequest {
        language: string;
        responseFields?: string;
    }
}
/**
* SuggestDefinitionApiService - interface
* 
* @export
* @interface SuggestDefinitionApi
*/
export interface SuggestDefinitionApiService {
    /**
    * Downloads the suggest file for the site
    * @summary Downloads the suggest file for the site
    * @param {string} language Language code used by the site (en, es, fr)
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SuggestDefinitionApiInterface
    */
    downLoadSuggestRaw(requestParameters: suggestDefinitionApiParams.DownLoadSuggestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Downloads the suggest file for the site
    * Downloads the suggest file for the site
    */
    downLoadSuggest(requestParameters: suggestDefinitionApiParams.DownLoadSuggestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Gets the suggester settings for the site
    * @summary Gets the suggester settings for the site
    * @param {string} language Language code use by the site (en, es, fr)
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SuggestDefinitionApiInterface
    */
    getSuggestSettingsRaw(requestParameters: suggestDefinitionApiParams.GetSuggestSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Suggester>>;

    /**
    * Gets the suggester settings for the site
    * Gets the suggester settings for the site
    */
    getSuggestSettings(requestParameters: suggestDefinitionApiParams.GetSuggestSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Suggester>;

    /**
    * Updates the suggester settings for the site
    * @summary Updates the suggester settings for the site
    * @param {string} language Language code use by the site (en, es, fr)
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {Suggester} [suggester] Suggest definition in
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SuggestDefinitionApiInterface
    */
    updateSuggestSettingsRaw(requestParameters: suggestDefinitionApiParams.UpdateSuggestSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Suggester>>;

    /**
    * Updates the suggester settings for the site
    * Updates the suggester settings for the site
    */
    updateSuggestSettings(requestParameters: suggestDefinitionApiParams.UpdateSuggestSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Suggester>;

    /**
    * Uploads a suggest file for the site in tab separated format)
    * @summary Uploads a suggest file for the site in tab separated format)
    * @param {string} language language code use by the site (en, es, fr)
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SuggestDefinitionApiInterface
    */
    uploadSuggestRaw(requestParameters: suggestDefinitionApiParams.UploadSuggestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<string>>>;

    /**
    * Uploads a suggest file for the site in tab separated format)
    * Uploads a suggest file for the site in tab separated format)
    */
    uploadSuggest(requestParameters: suggestDefinitionApiParams.UploadSuggestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<string>>;

}


/**
 * 
 */
export class SuggestDefinitionApi extends runtime.BaseAPI implements SuggestDefinitionApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Downloads the suggest file for the site
     * Downloads the suggest file for the site
     */


    async downLoadSuggestRaw(requestParameters: suggestDefinitionApiParams.DownLoadSuggestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.language === null || requestParameters.language === undefined) {
            throw new runtime.RequiredError('language','Required parameter requestParameters.language was null or undefined when calling downLoadSuggest.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/searchSchema/suggest/{language}`.replace(`{${"language"}}`, encodeURIComponent(String(requestParameters.language))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Downloads the suggest file for the site
     * Downloads the suggest file for the site
     */
    async downLoadSuggest(requestParameters: suggestDefinitionApiParams.DownLoadSuggestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.downLoadSuggestRaw(requestParameters, initOverrides);
    }

    /**
     * Gets the suggester settings for the site
     * Gets the suggester settings for the site
     */


    async getSuggestSettingsRaw(requestParameters: suggestDefinitionApiParams.GetSuggestSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Suggester>> {
        if (requestParameters.language === null || requestParameters.language === undefined) {
            throw new runtime.RequiredError('language','Required parameter requestParameters.language was null or undefined when calling getSuggestSettings.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/searchSchema/suggest/settings/{language}`.replace(`{${"language"}}`, encodeURIComponent(String(requestParameters.language))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Gets the suggester settings for the site
     * Gets the suggester settings for the site
     */
    async getSuggestSettings(requestParameters: suggestDefinitionApiParams.GetSuggestSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Suggester> {
        const response = await this.getSuggestSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates the suggester settings for the site
     * Updates the suggester settings for the site
     */


    async updateSuggestSettingsRaw(requestParameters: suggestDefinitionApiParams.UpdateSuggestSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Suggester>> {
        if (requestParameters.language === null || requestParameters.language === undefined) {
            throw new runtime.RequiredError('language','Required parameter requestParameters.language was null or undefined when calling updateSuggestSettings.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/searchSchema/suggest/settings/{language}`.replace(`{${"language"}}`, encodeURIComponent(String(requestParameters.language))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.suggester,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates the suggester settings for the site
     * Updates the suggester settings for the site
     */
    async updateSuggestSettings(requestParameters: suggestDefinitionApiParams.UpdateSuggestSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Suggester> {
        const response = await this.updateSuggestSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Uploads a suggest file for the site in tab separated format)
     * Uploads a suggest file for the site in tab separated format)
     */


    async uploadSuggestRaw(requestParameters: suggestDefinitionApiParams.UploadSuggestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<string>>> {
        if (requestParameters.language === null || requestParameters.language === undefined) {
            throw new runtime.RequiredError('language','Required parameter requestParameters.language was null or undefined when calling uploadSuggest.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/searchSchema/suggest/{language}`.replace(`{${"language"}}`, encodeURIComponent(String(requestParameters.language))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Uploads a suggest file for the site in tab separated format)
     * Uploads a suggest file for the site in tab separated format)
     */
    async uploadSuggest(requestParameters: suggestDefinitionApiParams.UploadSuggestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<string>> {
        const response = await this.uploadSuggestRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
