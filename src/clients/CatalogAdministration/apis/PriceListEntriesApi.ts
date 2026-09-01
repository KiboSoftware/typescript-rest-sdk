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
  PriceListBulkResult,
  PriceListEntry,
  PriceListEntryCollection,
} from '../models';


export namespace priceListEntriesApiParams { 
    export interface AddPriceListEntryRequest {
        priceListCode: string;
        responseFields?: string;
        priceListEntry?: PriceListEntry;
    }
    export interface BulkAddPriceListEntriesRequest {
        publishEvents?: boolean;
        invalidateCache?: boolean;
        allowPartialSuccess?: boolean;
        batchJobCode?: string;
        responseFields?: string;
        priceListEntry?: Array<PriceListEntry>;
    }
    export interface BulkDeletePriceListEntriesRequest {
        publishEvents?: boolean;
        invalidateCache?: boolean;
        allowPartialSuccess?: boolean;
        batchJobCode?: string;
        responseFields?: string;
        priceListEntry?: Array<PriceListEntry>;
    }
    export interface BulkUpdatePriceListEntriesRequest {
        publishEvents?: boolean;
        invalidateCache?: boolean;
        allowPartialSuccess?: boolean;
        batchJobCode?: string;
        responseFields?: string;
        priceListEntry?: Array<PriceListEntry>;
    }
    export interface DeletePriceListEntryRequest {
        priceListCode: string;
        productCode: string;
        currencyCode: string;
        startDate?: string;
    }
    export interface GetPriceListEntriesRequest {
        priceListCode: string;
        startIndex?: number;
        pageSize?: number;
        sortBy?: string;
        filter?: string;
        responseFields?: string;
    }
    export interface GetPriceListEntryRequest {
        priceListCode: string;
        productCode: string;
        currencyCode: string;
        startDate?: string;
        responseFields?: string;
    }
    export interface UpdatePriceListEntryRequest {
        priceListCode: string;
        productCode: string;
        currencyCode: string;
        startDate?: string;
        responseFields?: string;
        priceListEntry?: PriceListEntry;
    }
}
/**
* PriceListEntriesApiService - interface
* 
* @export
* @interface PriceListEntriesApi
*/
export interface PriceListEntriesApiService {
    /**
    * Adds an entry to a price list.
    * @summary Add Price List Entry
    * @param {string} priceListCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {PriceListEntry} [priceListEntry] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PriceListEntriesApiInterface
    */
    addPriceListEntryRaw(requestParameters: priceListEntriesApiParams.AddPriceListEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PriceListEntry>>;

    /**
    * Adds an entry to a price list.
    * Add Price List Entry
    */
    addPriceListEntry(requestParameters: priceListEntriesApiParams.AddPriceListEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PriceListEntry>;

    /**
    * Add bulk price list entries. By default, any single error will cause the entire batch to fail. If desired, set allowPartialSuccess=true to allow valid entries to be completed even if others in the batch fail.
    * @summary Bulk Add Price List Entries
    * @param {boolean} [publishEvents] 
    * @param {boolean} [invalidateCache] 
    * @param {boolean} [allowPartialSuccess] Returns status codes of 200 (complete success), 206 (some entries failed validation), 409 (all entries failed validation), or 500 (unexpected failure)
    * @param {string} [batchJobCode] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {Array<PriceListEntry>} [priceListEntry] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PriceListEntriesApiInterface
    */
    bulkAddPriceListEntriesRaw(requestParameters: priceListEntriesApiParams.BulkAddPriceListEntriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PriceListBulkResult>>;

    /**
    * Add bulk price list entries. By default, any single error will cause the entire batch to fail. If desired, set allowPartialSuccess=true to allow valid entries to be completed even if others in the batch fail.
    * Bulk Add Price List Entries
    */
    bulkAddPriceListEntries(requestParameters: priceListEntriesApiParams.BulkAddPriceListEntriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PriceListBulkResult>;

    /**
    * Deletes up to 5000 price list entries in bulk. By default, any single error will cause the entire batch to fail. If desired, set allowPartialSuccess=true to allow valid entries to be completed even if others in the batch fail.
    * @summary Bulk Delete Price List Entries
    * @param {boolean} [publishEvents] 
    * @param {boolean} [invalidateCache] 
    * @param {boolean} [allowPartialSuccess] 
    * @param {string} [batchJobCode] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {Array<PriceListEntry>} [priceListEntry] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PriceListEntriesApiInterface
    */
    bulkDeletePriceListEntriesRaw(requestParameters: priceListEntriesApiParams.BulkDeletePriceListEntriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PriceListBulkResult>>;

    /**
    * Deletes up to 5000 price list entries in bulk. By default, any single error will cause the entire batch to fail. If desired, set allowPartialSuccess=true to allow valid entries to be completed even if others in the batch fail.
    * Bulk Delete Price List Entries
    */
    bulkDeletePriceListEntries(requestParameters: priceListEntriesApiParams.BulkDeletePriceListEntriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PriceListBulkResult>;

    /**
    * Updates up to 5000 price list entries in bulk. By default, any single error will cause the entire batch to fail. If desired, set allowPartialSuccess=true to allow valid entries to be completed even if others in the batch fail. <p>This method performs an upsert, which will add missing entries if they do not exist. It can be used in place of Bulk Add Price List Entries to simplify application logic when the desired behavior is to update an entry or add the entry if it does not exist.</p> <p>Disable the publishEvents parameter to prevent publishing the event related to updating price list entries in the system. Disabling this property helps you prevent performance delays if you expect the event to trigger the re-indexing of a large number of products, or if you want to postpone the operations of other applications and services listening for the event. Disable the invalidateCache parameter if you expect to encounter unacceptable performance hits related to clearing the cache for each product in the price list entries.</p>
    * @summary Bulk Update Price List Entries.
    * @param {boolean} [publishEvents] 
    * @param {boolean} [invalidateCache] 
    * @param {boolean} [allowPartialSuccess] 
    * @param {string} [batchJobCode] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {Array<PriceListEntry>} [priceListEntry] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PriceListEntriesApiInterface
    */
    bulkUpdatePriceListEntriesRaw(requestParameters: priceListEntriesApiParams.BulkUpdatePriceListEntriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PriceListBulkResult>>;

    /**
    * Updates up to 5000 price list entries in bulk. By default, any single error will cause the entire batch to fail. If desired, set allowPartialSuccess=true to allow valid entries to be completed even if others in the batch fail. <p>This method performs an upsert, which will add missing entries if they do not exist. It can be used in place of Bulk Add Price List Entries to simplify application logic when the desired behavior is to update an entry or add the entry if it does not exist.</p> <p>Disable the publishEvents parameter to prevent publishing the event related to updating price list entries in the system. Disabling this property helps you prevent performance delays if you expect the event to trigger the re-indexing of a large number of products, or if you want to postpone the operations of other applications and services listening for the event. Disable the invalidateCache parameter if you expect to encounter unacceptable performance hits related to clearing the cache for each product in the price list entries.</p>
    * Bulk Update Price List Entries.
    */
    bulkUpdatePriceListEntries(requestParameters: priceListEntriesApiParams.BulkUpdatePriceListEntriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PriceListBulkResult>;

    /**
    * Deletes a price liste entry for a particular product and currency code.
    * @summary Delete Price List Entry by Currency
    * @param {string} priceListCode 
    * @param {string} productCode 
    * @param {string} currencyCode 
    * @param {string} [startDate] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PriceListEntriesApiInterface
    */
    deletePriceListEntryRaw(requestParameters: priceListEntriesApiParams.DeletePriceListEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Deletes a price liste entry for a particular product and currency code.
    * Delete Price List Entry by Currency
    */
    deletePriceListEntry(requestParameters: priceListEntriesApiParams.DeletePriceListEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Retrieves the entries within a price list.
    * @summary Get Price List Entries
    * @param {string} priceListCode 
    * @param {number} [startIndex] 
    * @param {number} [pageSize] 
    * @param {string} [sortBy] 
    * @param {string} [filter] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PriceListEntriesApiInterface
    */
    getPriceListEntriesRaw(requestParameters: priceListEntriesApiParams.GetPriceListEntriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PriceListEntryCollection>>;

    /**
    * Retrieves the entries within a price list.
    * Get Price List Entries
    */
    getPriceListEntries(requestParameters: priceListEntriesApiParams.GetPriceListEntriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PriceListEntryCollection>;

    /**
    * Retrieves price list entries for a particular product and currency code.
    * @summary Get Price List Entries by Currency
    * @param {string} priceListCode 
    * @param {string} productCode 
    * @param {string} currencyCode 
    * @param {string} [startDate] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PriceListEntriesApiInterface
    */
    getPriceListEntryRaw(requestParameters: priceListEntriesApiParams.GetPriceListEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PriceListEntry>>;

    /**
    * Retrieves price list entries for a particular product and currency code.
    * Get Price List Entries by Currency
    */
    getPriceListEntry(requestParameters: priceListEntriesApiParams.GetPriceListEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PriceListEntry>;

    /**
    * Updates price list entry for a particular product and currency code.
    * @summary Update Price List Entry by Currency
    * @param {string} priceListCode 
    * @param {string} productCode 
    * @param {string} currencyCode 
    * @param {string} [startDate] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {PriceListEntry} [priceListEntry] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PriceListEntriesApiInterface
    */
    updatePriceListEntryRaw(requestParameters: priceListEntriesApiParams.UpdatePriceListEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PriceListEntry>>;

    /**
    * Updates price list entry for a particular product and currency code.
    * Update Price List Entry by Currency
    */
    updatePriceListEntry(requestParameters: priceListEntriesApiParams.UpdatePriceListEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PriceListEntry>;

}


/**
 * 
 */
export class PriceListEntriesApi extends runtime.BaseAPI implements PriceListEntriesApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Adds an entry to a price list.
     * Add Price List Entry
     */


    async addPriceListEntryRaw(requestParameters: priceListEntriesApiParams.AddPriceListEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PriceListEntry>> {
        if (requestParameters.priceListCode === null || requestParameters.priceListCode === undefined) {
            throw new runtime.RequiredError('priceListCode','Required parameter requestParameters.priceListCode was null or undefined when calling addPriceListEntry.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/pricelists/{priceListCode}/entries`.replace(`{${"priceListCode"}}`, encodeURIComponent(String(requestParameters.priceListCode))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.priceListEntry,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Adds an entry to a price list.
     * Add Price List Entry
     */
    async addPriceListEntry(requestParameters: priceListEntriesApiParams.AddPriceListEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PriceListEntry> {
        const response = await this.addPriceListEntryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Add bulk price list entries. By default, any single error will cause the entire batch to fail. If desired, set allowPartialSuccess=true to allow valid entries to be completed even if others in the batch fail.
     * Bulk Add Price List Entries
     */


    async bulkAddPriceListEntriesRaw(requestParameters: priceListEntriesApiParams.BulkAddPriceListEntriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PriceListBulkResult>> {
        const queryParameters: any = {};

        if (requestParameters.publishEvents !== undefined) {
            queryParameters['publishEvents'] = requestParameters.publishEvents;
        }

        if (requestParameters.invalidateCache !== undefined) {
            queryParameters['invalidateCache'] = requestParameters.invalidateCache;
        }

        if (requestParameters.allowPartialSuccess !== undefined) {
            queryParameters['allowPartialSuccess'] = requestParameters.allowPartialSuccess;
        }

        if (requestParameters.batchJobCode !== undefined) {
            queryParameters['batchJobCode'] = requestParameters.batchJobCode;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/pricelists/bulkaddentries`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.priceListEntry,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Add bulk price list entries. By default, any single error will cause the entire batch to fail. If desired, set allowPartialSuccess=true to allow valid entries to be completed even if others in the batch fail.
     * Bulk Add Price List Entries
     */
    async bulkAddPriceListEntries(requestParameters: priceListEntriesApiParams.BulkAddPriceListEntriesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PriceListBulkResult> {
        const response = await this.bulkAddPriceListEntriesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes up to 5000 price list entries in bulk. By default, any single error will cause the entire batch to fail. If desired, set allowPartialSuccess=true to allow valid entries to be completed even if others in the batch fail.
     * Bulk Delete Price List Entries
     */


    async bulkDeletePriceListEntriesRaw(requestParameters: priceListEntriesApiParams.BulkDeletePriceListEntriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PriceListBulkResult>> {
        const queryParameters: any = {};

        if (requestParameters.publishEvents !== undefined) {
            queryParameters['publishEvents'] = requestParameters.publishEvents;
        }

        if (requestParameters.invalidateCache !== undefined) {
            queryParameters['invalidateCache'] = requestParameters.invalidateCache;
        }

        if (requestParameters.allowPartialSuccess !== undefined) {
            queryParameters['allowPartialSuccess'] = requestParameters.allowPartialSuccess;
        }

        if (requestParameters.batchJobCode !== undefined) {
            queryParameters['batchJobCode'] = requestParameters.batchJobCode;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/pricelists/bulkdeleteentries`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.priceListEntry,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Deletes up to 5000 price list entries in bulk. By default, any single error will cause the entire batch to fail. If desired, set allowPartialSuccess=true to allow valid entries to be completed even if others in the batch fail.
     * Bulk Delete Price List Entries
     */
    async bulkDeletePriceListEntries(requestParameters: priceListEntriesApiParams.BulkDeletePriceListEntriesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PriceListBulkResult> {
        const response = await this.bulkDeletePriceListEntriesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates up to 5000 price list entries in bulk. By default, any single error will cause the entire batch to fail. If desired, set allowPartialSuccess=true to allow valid entries to be completed even if others in the batch fail. <p>This method performs an upsert, which will add missing entries if they do not exist. It can be used in place of Bulk Add Price List Entries to simplify application logic when the desired behavior is to update an entry or add the entry if it does not exist.</p> <p>Disable the publishEvents parameter to prevent publishing the event related to updating price list entries in the system. Disabling this property helps you prevent performance delays if you expect the event to trigger the re-indexing of a large number of products, or if you want to postpone the operations of other applications and services listening for the event. Disable the invalidateCache parameter if you expect to encounter unacceptable performance hits related to clearing the cache for each product in the price list entries.</p>
     * Bulk Update Price List Entries.
     */


    async bulkUpdatePriceListEntriesRaw(requestParameters: priceListEntriesApiParams.BulkUpdatePriceListEntriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PriceListBulkResult>> {
        const queryParameters: any = {};

        if (requestParameters.publishEvents !== undefined) {
            queryParameters['publishEvents'] = requestParameters.publishEvents;
        }

        if (requestParameters.invalidateCache !== undefined) {
            queryParameters['invalidateCache'] = requestParameters.invalidateCache;
        }

        if (requestParameters.allowPartialSuccess !== undefined) {
            queryParameters['allowPartialSuccess'] = requestParameters.allowPartialSuccess;
        }

        if (requestParameters.batchJobCode !== undefined) {
            queryParameters['batchJobCode'] = requestParameters.batchJobCode;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/pricelists/bulkupdateentries`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.priceListEntry,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates up to 5000 price list entries in bulk. By default, any single error will cause the entire batch to fail. If desired, set allowPartialSuccess=true to allow valid entries to be completed even if others in the batch fail. <p>This method performs an upsert, which will add missing entries if they do not exist. It can be used in place of Bulk Add Price List Entries to simplify application logic when the desired behavior is to update an entry or add the entry if it does not exist.</p> <p>Disable the publishEvents parameter to prevent publishing the event related to updating price list entries in the system. Disabling this property helps you prevent performance delays if you expect the event to trigger the re-indexing of a large number of products, or if you want to postpone the operations of other applications and services listening for the event. Disable the invalidateCache parameter if you expect to encounter unacceptable performance hits related to clearing the cache for each product in the price list entries.</p>
     * Bulk Update Price List Entries.
     */
    async bulkUpdatePriceListEntries(requestParameters: priceListEntriesApiParams.BulkUpdatePriceListEntriesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PriceListBulkResult> {
        const response = await this.bulkUpdatePriceListEntriesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a price liste entry for a particular product and currency code.
     * Delete Price List Entry by Currency
     */


    async deletePriceListEntryRaw(requestParameters: priceListEntriesApiParams.DeletePriceListEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.priceListCode === null || requestParameters.priceListCode === undefined) {
            throw new runtime.RequiredError('priceListCode','Required parameter requestParameters.priceListCode was null or undefined when calling deletePriceListEntry.');
        }

        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling deletePriceListEntry.');
        }

        if (requestParameters.currencyCode === null || requestParameters.currencyCode === undefined) {
            throw new runtime.RequiredError('currencyCode','Required parameter requestParameters.currencyCode was null or undefined when calling deletePriceListEntry.');
        }

        const queryParameters: any = {};

        if (requestParameters.startDate !== undefined) {
            queryParameters['startDate'] = requestParameters.startDate;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/pricelists/{priceListCode}/entries/{productCode}/{currencyCode}`.replace(`{${"priceListCode"}}`, encodeURIComponent(String(requestParameters.priceListCode))).replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"currencyCode"}}`, encodeURIComponent(String(requestParameters.currencyCode))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a price liste entry for a particular product and currency code.
     * Delete Price List Entry by Currency
     */
    async deletePriceListEntry(requestParameters: priceListEntriesApiParams.DeletePriceListEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePriceListEntryRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves the entries within a price list.
     * Get Price List Entries
     */


    async getPriceListEntriesRaw(requestParameters: priceListEntriesApiParams.GetPriceListEntriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PriceListEntryCollection>> {
        if (requestParameters.priceListCode === null || requestParameters.priceListCode === undefined) {
            throw new runtime.RequiredError('priceListCode','Required parameter requestParameters.priceListCode was null or undefined when calling getPriceListEntries.');
        }

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
            path: `/commerce/catalog/admin/pricelists/{priceListCode}/entries`.replace(`{${"priceListCode"}}`, encodeURIComponent(String(requestParameters.priceListCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves the entries within a price list.
     * Get Price List Entries
     */
    async getPriceListEntries(requestParameters: priceListEntriesApiParams.GetPriceListEntriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PriceListEntryCollection> {
        const response = await this.getPriceListEntriesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves price list entries for a particular product and currency code.
     * Get Price List Entries by Currency
     */


    async getPriceListEntryRaw(requestParameters: priceListEntriesApiParams.GetPriceListEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PriceListEntry>> {
        if (requestParameters.priceListCode === null || requestParameters.priceListCode === undefined) {
            throw new runtime.RequiredError('priceListCode','Required parameter requestParameters.priceListCode was null or undefined when calling getPriceListEntry.');
        }

        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling getPriceListEntry.');
        }

        if (requestParameters.currencyCode === null || requestParameters.currencyCode === undefined) {
            throw new runtime.RequiredError('currencyCode','Required parameter requestParameters.currencyCode was null or undefined when calling getPriceListEntry.');
        }

        const queryParameters: any = {};

        if (requestParameters.startDate !== undefined) {
            queryParameters['startDate'] = requestParameters.startDate;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/pricelists/{priceListCode}/entries/{productCode}/{currencyCode}`.replace(`{${"priceListCode"}}`, encodeURIComponent(String(requestParameters.priceListCode))).replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"currencyCode"}}`, encodeURIComponent(String(requestParameters.currencyCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves price list entries for a particular product and currency code.
     * Get Price List Entries by Currency
     */
    async getPriceListEntry(requestParameters: priceListEntriesApiParams.GetPriceListEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PriceListEntry> {
        const response = await this.getPriceListEntryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates price list entry for a particular product and currency code.
     * Update Price List Entry by Currency
     */


    async updatePriceListEntryRaw(requestParameters: priceListEntriesApiParams.UpdatePriceListEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PriceListEntry>> {
        if (requestParameters.priceListCode === null || requestParameters.priceListCode === undefined) {
            throw new runtime.RequiredError('priceListCode','Required parameter requestParameters.priceListCode was null or undefined when calling updatePriceListEntry.');
        }

        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling updatePriceListEntry.');
        }

        if (requestParameters.currencyCode === null || requestParameters.currencyCode === undefined) {
            throw new runtime.RequiredError('currencyCode','Required parameter requestParameters.currencyCode was null or undefined when calling updatePriceListEntry.');
        }

        const queryParameters: any = {};

        if (requestParameters.startDate !== undefined) {
            queryParameters['startDate'] = requestParameters.startDate;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/pricelists/{priceListCode}/entries/{productCode}/{currencyCode}`.replace(`{${"priceListCode"}}`, encodeURIComponent(String(requestParameters.priceListCode))).replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"currencyCode"}}`, encodeURIComponent(String(requestParameters.currencyCode))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.priceListEntry,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates price list entry for a particular product and currency code.
     * Update Price List Entry by Currency
     */
    async updatePriceListEntry(requestParameters: priceListEntriesApiParams.UpdatePriceListEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PriceListEntry> {
        const response = await this.updatePriceListEntryRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
