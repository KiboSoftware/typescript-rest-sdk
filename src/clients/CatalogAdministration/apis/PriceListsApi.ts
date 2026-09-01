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
  CatalogAdminsPriceList,
  PriceListCollection,
} from '../models';


export namespace priceListsApiParams { 
    export interface AddPriceListRequest {
        responseFields?: string;
        catalogAdminsPriceList?: CatalogAdminsPriceList;
    }
    export interface DeletePriceListRequest {
        priceListCode: string;
        cascadeDeleteEntries?: boolean;
    }
    export interface GetPriceListRequest {
        priceListCode: string;
        responseFields?: string;
    }
    export interface GetPriceListsRequest {
        startIndex?: number;
        pageSize?: number;
        sortBy?: string;
        filter?: string;
        responseFields?: string;
    }
    export interface UpdatePriceListRequest {
        priceListCode: string;
        responseFields?: string;
        catalogAdminsPriceList?: CatalogAdminsPriceList;
    }
}
/**
* PriceListsApiService - interface
* 
* @export
* @interface PriceListsApi
*/
export interface PriceListsApiService {
    /**
    * Creates a price list.
    * @summary Add Price List
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CatalogAdminsPriceList} [catalogAdminsPriceList] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PriceListsApiInterface
    */
    addPriceListRaw(requestParameters: priceListsApiParams.AddPriceListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsPriceList>>;

    /**
    * Creates a price list.
    * Add Price List
    */
    addPriceList(requestParameters: priceListsApiParams.AddPriceListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsPriceList>;

    /**
    * Deletes a price list by its code.
    * @summary Delete Price List
    * @param {string} priceListCode 
    * @param {boolean} [cascadeDeleteEntries] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PriceListsApiInterface
    */
    deletePriceListRaw(requestParameters: priceListsApiParams.DeletePriceListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Deletes a price list by its code.
    * Delete Price List
    */
    deletePriceList(requestParameters: priceListsApiParams.DeletePriceListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Retrieves a price list by its code.
    * @summary Get Price List
    * @param {string} priceListCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PriceListsApiInterface
    */
    getPriceListRaw(requestParameters: priceListsApiParams.GetPriceListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsPriceList>>;

    /**
    * Retrieves a price list by its code.
    * Get Price List
    */
    getPriceList(requestParameters: priceListsApiParams.GetPriceListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsPriceList>;

    /**
    * Retrieve a list of all price lists.
    * @summary Get Price Lists
    * @param {number} [startIndex] 
    * @param {number} [pageSize] 
    * @param {string} [sortBy] 
    * @param {string} [filter] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PriceListsApiInterface
    */
    getPriceListsRaw(requestParameters: priceListsApiParams.GetPriceListsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PriceListCollection>>;

    /**
    * Retrieve a list of all price lists.
    * Get Price Lists
    */
    getPriceLists(requestParameters: priceListsApiParams.GetPriceListsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PriceListCollection>;

    /**
    * Updates a price list by its code.
    * @summary Update Price List
    * @param {string} priceListCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CatalogAdminsPriceList} [catalogAdminsPriceList] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PriceListsApiInterface
    */
    updatePriceListRaw(requestParameters: priceListsApiParams.UpdatePriceListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsPriceList>>;

    /**
    * Updates a price list by its code.
    * Update Price List
    */
    updatePriceList(requestParameters: priceListsApiParams.UpdatePriceListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsPriceList>;

}


/**
 * 
 */
export class PriceListsApi extends runtime.BaseAPI implements PriceListsApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Creates a price list.
     * Add Price List
     */


    async addPriceListRaw(requestParameters: priceListsApiParams.AddPriceListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsPriceList>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/pricelists`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsPriceList,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates a price list.
     * Add Price List
     */
    async addPriceList(requestParameters: priceListsApiParams.AddPriceListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsPriceList> {
        const response = await this.addPriceListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a price list by its code.
     * Delete Price List
     */


    async deletePriceListRaw(requestParameters: priceListsApiParams.DeletePriceListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.priceListCode === null || requestParameters.priceListCode === undefined) {
            throw new runtime.RequiredError('priceListCode','Required parameter requestParameters.priceListCode was null or undefined when calling deletePriceList.');
        }

        const queryParameters: any = {};

        if (requestParameters.cascadeDeleteEntries !== undefined) {
            queryParameters['cascadeDeleteEntries'] = requestParameters.cascadeDeleteEntries;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/pricelists/{priceListCode}`.replace(`{${"priceListCode"}}`, encodeURIComponent(String(requestParameters.priceListCode))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a price list by its code.
     * Delete Price List
     */
    async deletePriceList(requestParameters: priceListsApiParams.DeletePriceListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePriceListRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves a price list by its code.
     * Get Price List
     */


    async getPriceListRaw(requestParameters: priceListsApiParams.GetPriceListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsPriceList>> {
        if (requestParameters.priceListCode === null || requestParameters.priceListCode === undefined) {
            throw new runtime.RequiredError('priceListCode','Required parameter requestParameters.priceListCode was null or undefined when calling getPriceList.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/pricelists/{priceListCode}`.replace(`{${"priceListCode"}}`, encodeURIComponent(String(requestParameters.priceListCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a price list by its code.
     * Get Price List
     */
    async getPriceList(requestParameters: priceListsApiParams.GetPriceListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsPriceList> {
        const response = await this.getPriceListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a list of all price lists.
     * Get Price Lists
     */


    async getPriceListsRaw(requestParameters: priceListsApiParams.GetPriceListsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PriceListCollection>> {
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
            path: `/commerce/catalog/admin/pricelists`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieve a list of all price lists.
     * Get Price Lists
     */
    async getPriceLists(requestParameters: priceListsApiParams.GetPriceListsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PriceListCollection> {
        const response = await this.getPriceListsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a price list by its code.
     * Update Price List
     */


    async updatePriceListRaw(requestParameters: priceListsApiParams.UpdatePriceListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsPriceList>> {
        if (requestParameters.priceListCode === null || requestParameters.priceListCode === undefined) {
            throw new runtime.RequiredError('priceListCode','Required parameter requestParameters.priceListCode was null or undefined when calling updatePriceList.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/pricelists/{priceListCode}`.replace(`{${"priceListCode"}}`, encodeURIComponent(String(requestParameters.priceListCode))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsPriceList,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates a price list by its code.
     * Update Price List
     */
    async updatePriceList(requestParameters: priceListsApiParams.UpdatePriceListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsPriceList> {
        const response = await this.updatePriceListRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
