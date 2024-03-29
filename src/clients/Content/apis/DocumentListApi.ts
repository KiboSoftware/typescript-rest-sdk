/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Content Service
 * OpenAPI Spec for Kibo Content Service
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
  DocumentList,
  DocumentListCollection,
} from '../models';


export namespace documentListApiParams { 
    export interface CreateDocumentListRequest {
        responseFields?: string;
        documentList?: DocumentList;
    }
    export interface DeleteDocumentListRequest {
        documentListName: string;
    }
    export interface GetDocumentListRequest {
        documentListName: string;
        responseFields?: string;
    }
    export interface GetDocumentListsRequest {
        pageSize?: number;
        startIndex?: number;
        responseFields?: string;
    }
    export interface UpdateDocumentListRequest {
        documentListName: string;
        responseFields?: string;
        documentList?: DocumentList;
    }
}
/**
* DocumentListApiService - interface
* 
* @export
* @interface DocumentListApi
*/
export interface DocumentListApiService {
    /**
    * Create DocumentList
    * @summary Create DocumentList
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {DocumentList} [documentList] DocumentListName
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof DocumentListApiInterface
    */
    createDocumentListRaw(requestParameters: documentListApiParams.CreateDocumentListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DocumentList>>;

    /**
    * Create DocumentList
    * Create DocumentList
    */
    createDocumentList(requestParameters: documentListApiParams.CreateDocumentListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DocumentList>;

    /**
    * Delete Document List
    * @summary Delete Document List
    * @param {string} documentListName Name of content documentListName to delete
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof DocumentListApiInterface
    */
    deleteDocumentListRaw(requestParameters: documentListApiParams.DeleteDocumentListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Delete Document List
    * Delete Document List
    */
    deleteDocumentList(requestParameters: documentListApiParams.DeleteDocumentListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Get Document List
    * @summary Get Document List
    * @param {string} documentListName Name of document documentListName to retrieve
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof DocumentListApiInterface
    */
    getDocumentListRaw(requestParameters: documentListApiParams.GetDocumentListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DocumentList>>;

    /**
    * Get Document List
    * Get Document List
    */
    getDocumentList(requestParameters: documentListApiParams.GetDocumentListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DocumentList>;

    /**
    * Retrieve a paged documentListName of all document lists
    * @summary Get Document Lists
    * @param {number} [pageSize] maximum number of items to return
    * @param {number} [startIndex] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof DocumentListApiInterface
    */
    getDocumentListsRaw(requestParameters: documentListApiParams.GetDocumentListsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DocumentListCollection>>;

    /**
    * Retrieve a paged documentListName of all document lists
    * Get Document Lists
    */
    getDocumentLists(requestParameters: documentListApiParams.GetDocumentListsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DocumentListCollection>;

    /**
    * Update Document List
    * @summary Update Document List
    * @param {string} documentListName The name of the documentList to update
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {DocumentList} [documentList] Content Collection values to apply
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof DocumentListApiInterface
    */
    updateDocumentListRaw(requestParameters: documentListApiParams.UpdateDocumentListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DocumentList>>;

    /**
    * Update Document List
    * Update Document List
    */
    updateDocumentList(requestParameters: documentListApiParams.UpdateDocumentListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DocumentList>;

}


/**
 * 
 */
export class DocumentListApi extends runtime.BaseAPI implements DocumentListApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Create DocumentList
     * Create DocumentList
     */


    async createDocumentListRaw(requestParameters: documentListApiParams.CreateDocumentListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DocumentList>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/content/documentlists`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.documentList,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Create DocumentList
     * Create DocumentList
     */
    async createDocumentList(requestParameters: documentListApiParams.CreateDocumentListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DocumentList> {
        const response = await this.createDocumentListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete Document List
     * Delete Document List
     */


    async deleteDocumentListRaw(requestParameters: documentListApiParams.DeleteDocumentListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.documentListName === null || requestParameters.documentListName === undefined) {
            throw new runtime.RequiredError('documentListName','Required parameter requestParameters.documentListName was null or undefined when calling deleteDocumentList.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/content/documentlists/{documentListName}`.replace(`{${"documentListName"}}`, encodeURIComponent(String(requestParameters.documentListName))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete Document List
     * Delete Document List
     */
    async deleteDocumentList(requestParameters: documentListApiParams.DeleteDocumentListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteDocumentListRaw(requestParameters, initOverrides);
    }

    /**
     * Get Document List
     * Get Document List
     */


    async getDocumentListRaw(requestParameters: documentListApiParams.GetDocumentListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DocumentList>> {
        if (requestParameters.documentListName === null || requestParameters.documentListName === undefined) {
            throw new runtime.RequiredError('documentListName','Required parameter requestParameters.documentListName was null or undefined when calling getDocumentList.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/content/documentlists/{documentListName}`.replace(`{${"documentListName"}}`, encodeURIComponent(String(requestParameters.documentListName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get Document List
     * Get Document List
     */
    async getDocumentList(requestParameters: documentListApiParams.GetDocumentListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DocumentList> {
        const response = await this.getDocumentListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a paged documentListName of all document lists
     * Get Document Lists
     */


    async getDocumentListsRaw(requestParameters: documentListApiParams.GetDocumentListsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DocumentListCollection>> {
        const queryParameters: any = {};

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.startIndex !== undefined) {
            queryParameters['startIndex'] = requestParameters.startIndex;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/content/documentlists`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieve a paged documentListName of all document lists
     * Get Document Lists
     */
    async getDocumentLists(requestParameters: documentListApiParams.GetDocumentListsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DocumentListCollection> {
        const response = await this.getDocumentListsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Document List
     * Update Document List
     */


    async updateDocumentListRaw(requestParameters: documentListApiParams.UpdateDocumentListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DocumentList>> {
        if (requestParameters.documentListName === null || requestParameters.documentListName === undefined) {
            throw new runtime.RequiredError('documentListName','Required parameter requestParameters.documentListName was null or undefined when calling updateDocumentList.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/content/documentlists/{documentListName}`.replace(`{${"documentListName"}}`, encodeURIComponent(String(requestParameters.documentListName))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.documentList,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update Document List
     * Update Document List
     */
    async updateDocumentList(requestParameters: documentListApiParams.UpdateDocumentListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DocumentList> {
        const response = await this.updateDocumentListRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
