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
  CatalogAdminsTag,
  TagCollection,
  TagNodeTree,
} from '../models';


export namespace tagApiParams { 
    export interface CreateTagRequest {
        responseFields?: string;
        catalogAdminsTag?: CatalogAdminsTag;
    }
    export interface DeleteTagRequest {
        tagCode: string;
    }
    export interface GetNodeTreeRequest {
        tagCode?: string;
        responseFields?: string;
    }
    export interface GetTagRequest {
        tagCode: string;
        responseFields?: string;
    }
    export interface GetTagsRequest {
        path?: string;
        startIndex?: number;
        pageSize?: number;
        sortBy?: string;
        filter?: string;
        responseGroups?: string;
        responseFields?: string;
    }
    export interface UpdateTagRequest {
        tagCode: string;
        responseFields?: string;
        catalogAdminsTag?: CatalogAdminsTag;
    }
}
/**
* TagApiService - interface
* 
* @export
* @interface TagApi
*/
export interface TagApiService {
    /**
    * Creates a tag.
    * @summary Create Tag
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CatalogAdminsTag} [catalogAdminsTag] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof TagApiInterface
    */
    createTagRaw(requestParameters: tagApiParams.CreateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsTag>>;

    /**
    * Creates a tag.
    * Create Tag
    */
    createTag(requestParameters: tagApiParams.CreateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsTag>;

    /**
    * Deletes a Tag specified by its tagCode.
    * @summary Delete Tag
    * @param {string} tagCode 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof TagApiInterface
    */
    deleteTagRaw(requestParameters: tagApiParams.DeleteTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Deletes a Tag specified by its tagCode.
    * Delete Tag
    */
    deleteTag(requestParameters: tagApiParams.DeleteTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Retrieves the tag collection as tag tree for specified tagCode.
    * @summary Get Tag Collection as Tag Tree
    * @param {string} [tagCode] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof TagApiInterface
    */
    getNodeTreeRaw(requestParameters: tagApiParams.GetNodeTreeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TagNodeTree>>;

    /**
    * Retrieves the tag collection as tag tree for specified tagCode.
    * Get Tag Collection as Tag Tree
    */
    getNodeTree(requestParameters: tagApiParams.GetNodeTreeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TagNodeTree>;

    /**
    * Retrieves the details of a single tag.
    * @summary Get Tag
    * @param {string} tagCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof TagApiInterface
    */
    getTagRaw(requestParameters: tagApiParams.GetTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsTag>>;

    /**
    * Retrieves the details of a single tag.
    * Get Tag
    */
    getTag(requestParameters: tagApiParams.GetTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsTag>;

    /**
    * Retrieves a list of tags.
    * @summary Get Tags
    * @param {string} [path] 
    * @param {number} [startIndex] 
    * @param {number} [pageSize] 
    * @param {string} [sortBy] 
    * @param {string} [filter] 
    * @param {string} [responseGroups] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof TagApiInterface
    */
    getTagsRaw(requestParameters: tagApiParams.GetTagsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TagCollection>>;

    /**
    * Retrieves a list of tags.
    * Get Tags
    */
    getTags(requestParameters: tagApiParams.GetTagsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TagCollection>;

    /**
    * Modifies a tag.
    * @summary Update Tag
    * @param {string} tagCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CatalogAdminsTag} [catalogAdminsTag] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof TagApiInterface
    */
    updateTagRaw(requestParameters: tagApiParams.UpdateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsTag>>;

    /**
    * Modifies a tag.
    * Update Tag
    */
    updateTag(requestParameters: tagApiParams.UpdateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsTag>;

}


/**
 * 
 */
export class TagApi extends runtime.BaseAPI implements TagApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Creates a tag.
     * Create Tag
     */


    async createTagRaw(requestParameters: tagApiParams.CreateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsTag>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/tags`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsTag,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates a tag.
     * Create Tag
     */
    async createTag(requestParameters: tagApiParams.CreateTagRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsTag> {
        const response = await this.createTagRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a Tag specified by its tagCode.
     * Delete Tag
     */


    async deleteTagRaw(requestParameters: tagApiParams.DeleteTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.tagCode === null || requestParameters.tagCode === undefined) {
            throw new runtime.RequiredError('tagCode','Required parameter requestParameters.tagCode was null or undefined when calling deleteTag.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/tags/{tagCode}`.replace(`{${"tagCode"}}`, encodeURIComponent(String(requestParameters.tagCode))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a Tag specified by its tagCode.
     * Delete Tag
     */
    async deleteTag(requestParameters: tagApiParams.DeleteTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteTagRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves the tag collection as tag tree for specified tagCode.
     * Get Tag Collection as Tag Tree
     */


    async getNodeTreeRaw(requestParameters: tagApiParams.GetNodeTreeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TagNodeTree>> {
        const queryParameters: any = {};

        if (requestParameters.tagCode !== undefined) {
            queryParameters['tagCode'] = requestParameters.tagCode;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/tags/node/tree`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves the tag collection as tag tree for specified tagCode.
     * Get Tag Collection as Tag Tree
     */
    async getNodeTree(requestParameters: tagApiParams.GetNodeTreeRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TagNodeTree> {
        const response = await this.getNodeTreeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the details of a single tag.
     * Get Tag
     */


    async getTagRaw(requestParameters: tagApiParams.GetTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsTag>> {
        if (requestParameters.tagCode === null || requestParameters.tagCode === undefined) {
            throw new runtime.RequiredError('tagCode','Required parameter requestParameters.tagCode was null or undefined when calling getTag.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/tags/{tagCode}`.replace(`{${"tagCode"}}`, encodeURIComponent(String(requestParameters.tagCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves the details of a single tag.
     * Get Tag
     */
    async getTag(requestParameters: tagApiParams.GetTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsTag> {
        const response = await this.getTagRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a list of tags.
     * Get Tags
     */


    async getTagsRaw(requestParameters: tagApiParams.GetTagsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TagCollection>> {
        const queryParameters: any = {};

        if (requestParameters.path !== undefined) {
            queryParameters['path'] = requestParameters.path;
        }

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

        if (requestParameters.responseGroups !== undefined) {
            queryParameters['responseGroups'] = requestParameters.responseGroups;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/tags`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a list of tags.
     * Get Tags
     */
    async getTags(requestParameters: tagApiParams.GetTagsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TagCollection> {
        const response = await this.getTagsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Modifies a tag.
     * Update Tag
     */


    async updateTagRaw(requestParameters: tagApiParams.UpdateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsTag>> {
        if (requestParameters.tagCode === null || requestParameters.tagCode === undefined) {
            throw new runtime.RequiredError('tagCode','Required parameter requestParameters.tagCode was null or undefined when calling updateTag.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/tags/{tagCode}`.replace(`{${"tagCode"}}`, encodeURIComponent(String(requestParameters.tagCode))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsTag,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Modifies a tag.
     * Update Tag
     */
    async updateTag(requestParameters: tagApiParams.UpdateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsTag> {
        const response = await this.updateTagRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
