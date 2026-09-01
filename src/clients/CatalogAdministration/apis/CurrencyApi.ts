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
  CatalogAdminsCurrencyExchangeRate,
  CurrencyExchangeRateCollection,
  CurrencyLocalization,
  CurrencyLocalizationCollection,
} from '../models';


export namespace currencyApiParams { 
    export interface AddCurrencyExchangeRatesRequest {
        currencyCode: string;
        responseFields?: string;
        catalogAdminsCurrencyExchangeRate?: Array<CatalogAdminsCurrencyExchangeRate>;
    }
    export interface AddCurrencyLocalizationRequest {
        responseFields?: string;
        currencyLocalization?: CurrencyLocalization;
    }
    export interface DeleteCurrencyExchangeRateRequest {
        currencyCode: string;
        toCurrencyCode: string;
    }
    export interface DeleteCurrencyLocalizationRequest {
        currencyCode: string;
    }
    export interface GetCurrencyExchangeRateRequest {
        currencyCode: string;
        toCurrencyCode: string;
        responseFields?: string;
    }
    export interface GetCurrencyExchangeRatesRequest {
        currencyCode: string;
        responseFields?: string;
    }
    export interface GetCurrencyLocalizationRequest {
        currencyCode: string;
        responseFields?: string;
    }
    export interface GetCurrencyLocalizationsRequest {
        responseFields?: string;
    }
    export interface UpdateCurrencyExchangeRatesRequest {
        currencyCode: string;
        responseFields?: string;
        catalogAdminsCurrencyExchangeRate?: Array<CatalogAdminsCurrencyExchangeRate>;
    }
    export interface UpdateCurrencyLocalizationRequest {
        currencyCode: string;
        responseFields?: string;
        currencyLocalization?: CurrencyLocalization;
    }
}
/**
* CurrencyApiService - interface
* 
* @export
* @interface CurrencyApi
*/
export interface CurrencyApiService {
    /**
    * Updates the details of a currency localization.
    * @summary Update Currency Exchange Rates
    * @param {string} currencyCode Currency code
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {Array<CatalogAdminsCurrencyExchangeRate>} [catalogAdminsCurrencyExchangeRate] Exchange rates for the currency
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CurrencyApiInterface
    */
    addCurrencyExchangeRatesRaw(requestParameters: currencyApiParams.AddCurrencyExchangeRatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Updates the details of a currency localization.
    * Update Currency Exchange Rates
    */
    addCurrencyExchangeRates(requestParameters: currencyApiParams.AddCurrencyExchangeRatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Adds a new currency localization.
    * @summary Add Currency Localization
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CurrencyLocalization} [currencyLocalization] Properties of the currency-localization to create. Required properties: CurrencyCode
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CurrencyApiInterface
    */
    addCurrencyLocalizationRaw(requestParameters: currencyApiParams.AddCurrencyLocalizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CurrencyLocalization>>;

    /**
    * Adds a new currency localization.
    * Add Currency Localization
    */
    addCurrencyLocalization(requestParameters: currencyApiParams.AddCurrencyLocalizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CurrencyLocalization>;

    /**
    * Delete a single exchange rate for a specified currency code and target currency code.
    * @summary Delete Currency Exchange Rate
    * @param {string} currencyCode Currency code
    * @param {string} toCurrencyCode C
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CurrencyApiInterface
    */
    deleteCurrencyExchangeRateRaw(requestParameters: currencyApiParams.DeleteCurrencyExchangeRateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Delete a single exchange rate for a specified currency code and target currency code.
    * Delete Currency Exchange Rate
    */
    deleteCurrencyExchangeRate(requestParameters: currencyApiParams.DeleteCurrencyExchangeRateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Deletes the currency localization specified by its currency code.
    * @summary Delete Currency Localization
    * @param {string} currencyCode Currency code.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CurrencyApiInterface
    */
    deleteCurrencyLocalizationRaw(requestParameters: currencyApiParams.DeleteCurrencyLocalizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Deletes the currency localization specified by its currency code.
    * Delete Currency Localization
    */
    deleteCurrencyLocalization(requestParameters: currencyApiParams.DeleteCurrencyLocalizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Retrieves a single exchange rate for a specified currency code and target currency code.
    * @summary Get Currency Exchange Rate
    * @param {string} currencyCode Currency code
    * @param {string} toCurrencyCode Target currency code
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CurrencyApiInterface
    */
    getCurrencyExchangeRateRaw(requestParameters: currencyApiParams.GetCurrencyExchangeRateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsCurrencyExchangeRate>>;

    /**
    * Retrieves a single exchange rate for a specified currency code and target currency code.
    * Get Currency Exchange Rate
    */
    getCurrencyExchangeRate(requestParameters: currencyApiParams.GetCurrencyExchangeRateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsCurrencyExchangeRate>;

    /**
    * Retrieves a list of exchange rates for a specified currency code and filter criteria.
    * @summary Get Currency Exchange Rates
    * @param {string} currencyCode Currency code
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CurrencyApiInterface
    */
    getCurrencyExchangeRatesRaw(requestParameters: currencyApiParams.GetCurrencyExchangeRatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CurrencyExchangeRateCollection>>;

    /**
    * Retrieves a list of exchange rates for a specified currency code and filter criteria.
    * Get Currency Exchange Rates
    */
    getCurrencyExchangeRates(requestParameters: currencyApiParams.GetCurrencyExchangeRatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CurrencyExchangeRateCollection>;

    /**
    * Gets a single currency localization.
    * @summary Get Currency Localization
    * @param {string} currencyCode Currency code.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CurrencyApiInterface
    */
    getCurrencyLocalizationRaw(requestParameters: currencyApiParams.GetCurrencyLocalizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CurrencyLocalization>>;

    /**
    * Gets a single currency localization.
    * Get Currency Localization
    */
    getCurrencyLocalization(requestParameters: currencyApiParams.GetCurrencyLocalizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CurrencyLocalization>;

    /**
    * Gets all currency localizations.
    * @summary Get Currency Localizations
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CurrencyApiInterface
    */
    getCurrencyLocalizationsRaw(requestParameters: currencyApiParams.GetCurrencyLocalizationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CurrencyLocalizationCollection>>;

    /**
    * Gets all currency localizations.
    * Get Currency Localizations
    */
    getCurrencyLocalizations(requestParameters: currencyApiParams.GetCurrencyLocalizationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CurrencyLocalizationCollection>;

    /**
    * Update multiple exchange rates for a specified currency code.
    * @summary Bulk Update Currency Exchange Rates
    * @param {string} currencyCode Currency code
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {Array<CatalogAdminsCurrencyExchangeRate>} [catalogAdminsCurrencyExchangeRate] Exchange rates for the currency
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CurrencyApiInterface
    */
    updateCurrencyExchangeRatesRaw(requestParameters: currencyApiParams.UpdateCurrencyExchangeRatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Update multiple exchange rates for a specified currency code.
    * Bulk Update Currency Exchange Rates
    */
    updateCurrencyExchangeRates(requestParameters: currencyApiParams.UpdateCurrencyExchangeRatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Updates the details of a currency localization.
    * @summary Update Currency Localization
    * @param {string} currencyCode Currency code.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CurrencyLocalization} [currencyLocalization] Properties of the currency-localization to update.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CurrencyApiInterface
    */
    updateCurrencyLocalizationRaw(requestParameters: currencyApiParams.UpdateCurrencyLocalizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CurrencyLocalization>>;

    /**
    * Updates the details of a currency localization.
    * Update Currency Localization
    */
    updateCurrencyLocalization(requestParameters: currencyApiParams.UpdateCurrencyLocalizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CurrencyLocalization>;

}


/**
 * 
 */
export class CurrencyApi extends runtime.BaseAPI implements CurrencyApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Updates the details of a currency localization.
     * Update Currency Exchange Rates
     */


    async addCurrencyExchangeRatesRaw(requestParameters: currencyApiParams.AddCurrencyExchangeRatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.currencyCode === null || requestParameters.currencyCode === undefined) {
            throw new runtime.RequiredError('currencyCode','Required parameter requestParameters.currencyCode was null or undefined when calling addCurrencyExchangeRates.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/currency/{currencyCode}/exchangerates`.replace(`{${"currencyCode"}}`, encodeURIComponent(String(requestParameters.currencyCode))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsCurrencyExchangeRate,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates the details of a currency localization.
     * Update Currency Exchange Rates
     */
    async addCurrencyExchangeRates(requestParameters: currencyApiParams.AddCurrencyExchangeRatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.addCurrencyExchangeRatesRaw(requestParameters, initOverrides);
    }

    /**
     * Adds a new currency localization.
     * Add Currency Localization
     */


    async addCurrencyLocalizationRaw(requestParameters: currencyApiParams.AddCurrencyLocalizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CurrencyLocalization>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/currency`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.currencyLocalization,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Adds a new currency localization.
     * Add Currency Localization
     */
    async addCurrencyLocalization(requestParameters: currencyApiParams.AddCurrencyLocalizationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CurrencyLocalization> {
        const response = await this.addCurrencyLocalizationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a single exchange rate for a specified currency code and target currency code.
     * Delete Currency Exchange Rate
     */


    async deleteCurrencyExchangeRateRaw(requestParameters: currencyApiParams.DeleteCurrencyExchangeRateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.currencyCode === null || requestParameters.currencyCode === undefined) {
            throw new runtime.RequiredError('currencyCode','Required parameter requestParameters.currencyCode was null or undefined when calling deleteCurrencyExchangeRate.');
        }

        if (requestParameters.toCurrencyCode === null || requestParameters.toCurrencyCode === undefined) {
            throw new runtime.RequiredError('toCurrencyCode','Required parameter requestParameters.toCurrencyCode was null or undefined when calling deleteCurrencyExchangeRate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/currency/{currencyCode}/exchangerates/{toCurrencyCode}`.replace(`{${"currencyCode"}}`, encodeURIComponent(String(requestParameters.currencyCode))).replace(`{${"toCurrencyCode"}}`, encodeURIComponent(String(requestParameters.toCurrencyCode))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a single exchange rate for a specified currency code and target currency code.
     * Delete Currency Exchange Rate
     */
    async deleteCurrencyExchangeRate(requestParameters: currencyApiParams.DeleteCurrencyExchangeRateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCurrencyExchangeRateRaw(requestParameters, initOverrides);
    }

    /**
     * Deletes the currency localization specified by its currency code.
     * Delete Currency Localization
     */


    async deleteCurrencyLocalizationRaw(requestParameters: currencyApiParams.DeleteCurrencyLocalizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.currencyCode === null || requestParameters.currencyCode === undefined) {
            throw new runtime.RequiredError('currencyCode','Required parameter requestParameters.currencyCode was null or undefined when calling deleteCurrencyLocalization.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/currency/{currencyCode}`.replace(`{${"currencyCode"}}`, encodeURIComponent(String(requestParameters.currencyCode))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes the currency localization specified by its currency code.
     * Delete Currency Localization
     */
    async deleteCurrencyLocalization(requestParameters: currencyApiParams.DeleteCurrencyLocalizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCurrencyLocalizationRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves a single exchange rate for a specified currency code and target currency code.
     * Get Currency Exchange Rate
     */


    async getCurrencyExchangeRateRaw(requestParameters: currencyApiParams.GetCurrencyExchangeRateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsCurrencyExchangeRate>> {
        if (requestParameters.currencyCode === null || requestParameters.currencyCode === undefined) {
            throw new runtime.RequiredError('currencyCode','Required parameter requestParameters.currencyCode was null or undefined when calling getCurrencyExchangeRate.');
        }

        if (requestParameters.toCurrencyCode === null || requestParameters.toCurrencyCode === undefined) {
            throw new runtime.RequiredError('toCurrencyCode','Required parameter requestParameters.toCurrencyCode was null or undefined when calling getCurrencyExchangeRate.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/currency/{currencyCode}/exchangerates/{toCurrencyCode}`.replace(`{${"currencyCode"}}`, encodeURIComponent(String(requestParameters.currencyCode))).replace(`{${"toCurrencyCode"}}`, encodeURIComponent(String(requestParameters.toCurrencyCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a single exchange rate for a specified currency code and target currency code.
     * Get Currency Exchange Rate
     */
    async getCurrencyExchangeRate(requestParameters: currencyApiParams.GetCurrencyExchangeRateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsCurrencyExchangeRate> {
        const response = await this.getCurrencyExchangeRateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a list of exchange rates for a specified currency code and filter criteria.
     * Get Currency Exchange Rates
     */


    async getCurrencyExchangeRatesRaw(requestParameters: currencyApiParams.GetCurrencyExchangeRatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CurrencyExchangeRateCollection>> {
        if (requestParameters.currencyCode === null || requestParameters.currencyCode === undefined) {
            throw new runtime.RequiredError('currencyCode','Required parameter requestParameters.currencyCode was null or undefined when calling getCurrencyExchangeRates.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/currency/{currencyCode}/exchangerates`.replace(`{${"currencyCode"}}`, encodeURIComponent(String(requestParameters.currencyCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a list of exchange rates for a specified currency code and filter criteria.
     * Get Currency Exchange Rates
     */
    async getCurrencyExchangeRates(requestParameters: currencyApiParams.GetCurrencyExchangeRatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CurrencyExchangeRateCollection> {
        const response = await this.getCurrencyExchangeRatesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets a single currency localization.
     * Get Currency Localization
     */


    async getCurrencyLocalizationRaw(requestParameters: currencyApiParams.GetCurrencyLocalizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CurrencyLocalization>> {
        if (requestParameters.currencyCode === null || requestParameters.currencyCode === undefined) {
            throw new runtime.RequiredError('currencyCode','Required parameter requestParameters.currencyCode was null or undefined when calling getCurrencyLocalization.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/currency/{currencyCode}`.replace(`{${"currencyCode"}}`, encodeURIComponent(String(requestParameters.currencyCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Gets a single currency localization.
     * Get Currency Localization
     */
    async getCurrencyLocalization(requestParameters: currencyApiParams.GetCurrencyLocalizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CurrencyLocalization> {
        const response = await this.getCurrencyLocalizationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets all currency localizations.
     * Get Currency Localizations
     */


    async getCurrencyLocalizationsRaw(requestParameters: currencyApiParams.GetCurrencyLocalizationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CurrencyLocalizationCollection>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/currency`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Gets all currency localizations.
     * Get Currency Localizations
     */
    async getCurrencyLocalizations(requestParameters: currencyApiParams.GetCurrencyLocalizationsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CurrencyLocalizationCollection> {
        const response = await this.getCurrencyLocalizationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update multiple exchange rates for a specified currency code.
     * Bulk Update Currency Exchange Rates
     */


    async updateCurrencyExchangeRatesRaw(requestParameters: currencyApiParams.UpdateCurrencyExchangeRatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.currencyCode === null || requestParameters.currencyCode === undefined) {
            throw new runtime.RequiredError('currencyCode','Required parameter requestParameters.currencyCode was null or undefined when calling updateCurrencyExchangeRates.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/currency/{currencyCode}/exchangerates`.replace(`{${"currencyCode"}}`, encodeURIComponent(String(requestParameters.currencyCode))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsCurrencyExchangeRate,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update multiple exchange rates for a specified currency code.
     * Bulk Update Currency Exchange Rates
     */
    async updateCurrencyExchangeRates(requestParameters: currencyApiParams.UpdateCurrencyExchangeRatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateCurrencyExchangeRatesRaw(requestParameters, initOverrides);
    }

    /**
     * Updates the details of a currency localization.
     * Update Currency Localization
     */


    async updateCurrencyLocalizationRaw(requestParameters: currencyApiParams.UpdateCurrencyLocalizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CurrencyLocalization>> {
        if (requestParameters.currencyCode === null || requestParameters.currencyCode === undefined) {
            throw new runtime.RequiredError('currencyCode','Required parameter requestParameters.currencyCode was null or undefined when calling updateCurrencyLocalization.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/currency/{currencyCode}`.replace(`{${"currencyCode"}}`, encodeURIComponent(String(requestParameters.currencyCode))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.currencyLocalization,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates the details of a currency localization.
     * Update Currency Localization
     */
    async updateCurrencyLocalization(requestParameters: currencyApiParams.UpdateCurrencyLocalizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CurrencyLocalization> {
        const response = await this.updateCurrencyLocalizationRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
