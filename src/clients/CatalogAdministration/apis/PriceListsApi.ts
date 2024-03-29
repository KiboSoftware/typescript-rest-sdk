/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Admin Services
 * OpenAPI Spec for Kibo Catalog Admin Services
 *
 * The version of the OpenAPI document: 1.0.0
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
    * 
    * @summary Add price list
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CatalogAdminsPriceList} [catalogAdminsPriceList] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PriceListsApiInterface
    */
    addPriceListRaw(requestParameters: priceListsApiParams.AddPriceListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsPriceList>>;

    /**
    * 
    * Add price list
    */
    addPriceList(requestParameters: priceListsApiParams.AddPriceListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsPriceList>;

    /**
    * 
    * @summary Delete price list
    * @param {string} priceListCode 
    * @param {boolean} [cascadeDeleteEntries] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PriceListsApiInterface
    */
    deletePriceListRaw(requestParameters: priceListsApiParams.DeletePriceListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * 
    * Delete price list
    */
    deletePriceList(requestParameters: priceListsApiParams.DeletePriceListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * 
    * @summary Get price list
    * @param {string} priceListCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PriceListsApiInterface
    */
    getPriceListRaw(requestParameters: priceListsApiParams.GetPriceListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsPriceList>>;

    /**
    * 
    * Get price list
    */
    getPriceList(requestParameters: priceListsApiParams.GetPriceListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsPriceList>;

    /**
    * 
    * @summary Get price lists
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
    * 
    * Get price lists
    */
    getPriceLists(requestParameters: priceListsApiParams.GetPriceListsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PriceListCollection>;

    /**
    * 
    * @summary Update price list
    * @param {string} priceListCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CatalogAdminsPriceList} [catalogAdminsPriceList] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PriceListsApiInterface
    */
    updatePriceListRaw(requestParameters: priceListsApiParams.UpdatePriceListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsPriceList>>;

    /**
    * 
    * Update price list
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
     * 
     * Add price list
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
     * 
     * Add price list
     */
    async addPriceList(requestParameters: priceListsApiParams.AddPriceListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsPriceList> {
        const response = await this.addPriceListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Delete price list
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
     * 
     * Delete price list
     */
    async deletePriceList(requestParameters: priceListsApiParams.DeletePriceListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePriceListRaw(requestParameters, initOverrides);
    }

    /**
     * 
     * Get price list
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
     * 
     * Get price list
     */
    async getPriceList(requestParameters: priceListsApiParams.GetPriceListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsPriceList> {
        const response = await this.getPriceListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Get price lists
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
     * 
     * Get price lists
     */
    async getPriceLists(requestParameters: priceListsApiParams.GetPriceListsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PriceListCollection> {
        const response = await this.getPriceListsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Update price list
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
     * 
     * Update price list
     */
    async updatePriceList(requestParameters: priceListsApiParams.UpdatePriceListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsPriceList> {
        const response = await this.updatePriceListRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
