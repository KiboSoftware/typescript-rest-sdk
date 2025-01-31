/* tslint:disable */
/* eslint-disable */
/**
 * Kibo MongoAdmin Service
 * OpenAPI Spec for Kibo MongoAdmin Service
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
  DropLocation,
} from '../models';


export namespace filesApiParams { 
    export interface DownloadRequest {
        id: string;
        responseFields?: string;
    }
    export interface GetRequest {
        id: string;
        responseFields?: string;
    }
    export interface GetPublicLinkRequest {
        id: string;
        hourDuration?: number;
        responseFields?: string;
    }
    export interface UploadRequest {
        fileType?: string;
        fileName?: string;
        responseFields?: string;
        body?: Blob | Buffer;
    }
}
/**
* FilesApiService - interface
* 
* @export
* @interface FilesApi
*/
export interface FilesApiService {
    /**
    * Download
    * @summary Download
    * @param {string} id 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof FilesApiInterface
    */
    downloadRaw(requestParameters: filesApiParams.DownloadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Download
    * Download
    */
    download(requestParameters: filesApiParams.DownloadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Get
    * @summary Get
    * @param {string} id 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof FilesApiInterface
    */
    getRaw(requestParameters: filesApiParams.GetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DropLocation>>;

    /**
    * Get
    * Get
    */
    get(requestParameters: filesApiParams.GetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DropLocation>;

    /**
    * Get Public Link
    * @summary Get Public Link
    * @param {string} id 
    * @param {number} [hourDuration] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof FilesApiInterface
    */
    getPublicLinkRaw(requestParameters: filesApiParams.GetPublicLinkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>>;

    /**
    * Get Public Link
    * Get Public Link
    */
    getPublicLink(requestParameters: filesApiParams.GetPublicLinkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string>;

    /**
    * Upload
    * @summary Upload
    * @param {string} [fileType] 
    * @param {string} [fileName] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {Blob} [body] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof FilesApiInterface
    */
    uploadRaw(requestParameters: filesApiParams.UploadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DropLocation>>;

    /**
    * Upload
    * Upload
    */
    upload(requestParameters: filesApiParams.UploadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DropLocation>;

}


/**
 * 
 */
export class FilesApi extends runtime.BaseAPI implements FilesApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Download
     * Download
     */


    async downloadRaw(requestParameters: filesApiParams.DownloadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling download.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/data/files/{id}/content`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Download
     * Download
     */
    async download(requestParameters: filesApiParams.DownloadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.downloadRaw(requestParameters, initOverrides);
    }

    /**
     * Get
     * Get
     */


    async getRaw(requestParameters: filesApiParams.GetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DropLocation>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling get.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/data/files/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get
     * Get
     */
    async get(requestParameters: filesApiParams.GetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DropLocation> {
        const response = await this.getRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Public Link
     * Get Public Link
     */


    async getPublicLinkRaw(requestParameters: filesApiParams.GetPublicLinkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getPublicLink.');
        }

        const queryParameters: any = {};

        if (requestParameters.hourDuration !== undefined) {
            queryParameters['hourDuration'] = requestParameters.hourDuration;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/data/files/{id}/generatelink`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Get Public Link
     * Get Public Link
     */
    async getPublicLink(requestParameters: filesApiParams.GetPublicLinkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.getPublicLinkRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Upload
     * Upload
     */


    async uploadRaw(requestParameters: filesApiParams.UploadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DropLocation>> {
        const queryParameters: any = {};

        if (requestParameters.fileType !== undefined) {
            queryParameters['fileType'] = requestParameters.fileType;
        }

        if (requestParameters.fileName !== undefined) {
            queryParameters['fileName'] = requestParameters.fileName;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/octet-stream';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/data/files`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Upload
     * Upload
     */
    async upload(requestParameters: filesApiParams.UploadRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DropLocation> {
        const response = await this.uploadRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
