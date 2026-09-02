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
  PublishSet,
  PublishSetCollection,
  PublishingScope,
} from '../models';


export namespace productPublishingApiParams { 
    export interface AssignProductsToPublishSetRequest {
        responseFields?: string;
        publishSet?: PublishSet;
    }
    export interface DeletePublishSetRequest {
        publishSetCode: string;
        discardDrafts?: boolean;
    }
    export interface GetPublishSetRequest {
        publishSetCode: string;
        responseFields?: string;
    }
    export interface GetPublishSetsRequest {
        responseFields?: string;
    }
    export interface PublishDraftsRequest {
        responseFields?: string;
        publishingScope?: PublishingScope;
    }
}
/**
* ProductPublishingApiService - interface
* 
* @export
* @interface ProductPublishingApi
*/
export interface ProductPublishingApiService {
    /**
    * Assign products to publish sets.
    * @summary Assign Products to Publish Sets
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {PublishSet} [publishSet] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductPublishingApiInterface
    */
    assignProductsToPublishSetRaw(requestParameters: productPublishingApiParams.AssignProductsToPublishSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PublishSet>>;

    /**
    * Assign products to publish sets.
    * Assign Products to Publish Sets
    */
    assignProductsToPublishSet(requestParameters: productPublishingApiParams.AssignProductsToPublishSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PublishSet>;

    /**
    * Removes all details about a PublishSet from the product service. If the discardDrafts param is true, it also deletes the product drafts.
    * @summary Delete Publish Set
    * @param {string} publishSetCode The code of the PublishSet to delete
    * @param {boolean} [discardDrafts] Whether to also discard the drafts for this publish set.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductPublishingApiInterface
    */
    deletePublishSetRaw(requestParameters: productPublishingApiParams.DeletePublishSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Removes all details about a PublishSet from the product service. If the discardDrafts param is true, it also deletes the product drafts.
    * Delete Publish Set
    */
    deletePublishSet(requestParameters: productPublishingApiParams.DeletePublishSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Retrieves the details of a single PublishSet.
    * @summary Get Publish Set
    * @param {string} publishSetCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductPublishingApiInterface
    */
    getPublishSetRaw(requestParameters: productPublishingApiParams.GetPublishSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PublishSet>>;

    /**
    * Retrieves the details of a single PublishSet.
    * Get Publish Set
    */
    getPublishSet(requestParameters: productPublishingApiParams.GetPublishSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PublishSet>;

    /**
    * Retrieves a list of PublishSets including the product counts.
    * @summary Get Publish Sets
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductPublishingApiInterface
    */
    getPublishSetsRaw(requestParameters: productPublishingApiParams.GetPublishSetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PublishSetCollection>>;

    /**
    * Retrieves a list of PublishSets including the product counts.
    * Get Publish Sets
    */
    getPublishSets(requestParameters: productPublishingApiParams.GetPublishSetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PublishSetCollection>;

    /**
    * Publis draft products.
    * @summary Publish Draft Products
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {PublishingScope} [publishingScope] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductPublishingApiInterface
    */
    publishDraftsRaw(requestParameters: productPublishingApiParams.PublishDraftsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Publis draft products.
    * Publish Draft Products
    */
    publishDrafts(requestParameters: productPublishingApiParams.PublishDraftsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

}


/**
 * 
 */
export class ProductPublishingApi extends runtime.BaseAPI implements ProductPublishingApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Assign products to publish sets.
     * Assign Products to Publish Sets
     */


    async assignProductsToPublishSetRaw(requestParameters: productPublishingApiParams.AssignProductsToPublishSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PublishSet>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/publishing/publishsets`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.publishSet,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Assign products to publish sets.
     * Assign Products to Publish Sets
     */
    async assignProductsToPublishSet(requestParameters: productPublishingApiParams.AssignProductsToPublishSetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PublishSet> {
        const response = await this.assignProductsToPublishSetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Removes all details about a PublishSet from the product service. If the discardDrafts param is true, it also deletes the product drafts.
     * Delete Publish Set
     */


    async deletePublishSetRaw(requestParameters: productPublishingApiParams.DeletePublishSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.publishSetCode === null || requestParameters.publishSetCode === undefined) {
            throw new runtime.RequiredError('publishSetCode','Required parameter requestParameters.publishSetCode was null or undefined when calling deletePublishSet.');
        }

        const queryParameters: any = {};

        if (requestParameters.discardDrafts !== undefined) {
            queryParameters['discardDrafts'] = requestParameters.discardDrafts;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/publishing/publishsets/{publishSetCode}`.replace(`{${"publishSetCode"}}`, encodeURIComponent(String(requestParameters.publishSetCode))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Removes all details about a PublishSet from the product service. If the discardDrafts param is true, it also deletes the product drafts.
     * Delete Publish Set
     */
    async deletePublishSet(requestParameters: productPublishingApiParams.DeletePublishSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePublishSetRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves the details of a single PublishSet.
     * Get Publish Set
     */


    async getPublishSetRaw(requestParameters: productPublishingApiParams.GetPublishSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PublishSet>> {
        if (requestParameters.publishSetCode === null || requestParameters.publishSetCode === undefined) {
            throw new runtime.RequiredError('publishSetCode','Required parameter requestParameters.publishSetCode was null or undefined when calling getPublishSet.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/publishing/publishsets/{publishSetCode}`.replace(`{${"publishSetCode"}}`, encodeURIComponent(String(requestParameters.publishSetCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves the details of a single PublishSet.
     * Get Publish Set
     */
    async getPublishSet(requestParameters: productPublishingApiParams.GetPublishSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PublishSet> {
        const response = await this.getPublishSetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a list of PublishSets including the product counts.
     * Get Publish Sets
     */


    async getPublishSetsRaw(requestParameters: productPublishingApiParams.GetPublishSetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PublishSetCollection>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/publishing/publishsets`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a list of PublishSets including the product counts.
     * Get Publish Sets
     */
    async getPublishSets(requestParameters: productPublishingApiParams.GetPublishSetsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PublishSetCollection> {
        const response = await this.getPublishSetsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Publis draft products.
     * Publish Draft Products
     */


    async publishDraftsRaw(requestParameters: productPublishingApiParams.PublishDraftsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/publishing/publishdrafts`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.publishingScope,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Publis draft products.
     * Publish Draft Products
     */
    async publishDrafts(requestParameters: productPublishingApiParams.PublishDraftsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.publishDraftsRaw(requestParameters, initOverrides);
    }

}
