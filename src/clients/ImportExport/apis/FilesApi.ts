/* tslint:disable */
/* eslint-disable */
/**
 * Kibo MongoAdmin Service
 * OpenAPI Spec for Kibo MongoAdmin Service
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
  DropLocation,
} from '../models';
import {
    DropLocationFromJSON,
    DropLocationToJSON,
} from '../models';

export interface FilesApiDownloadRequest {
    id: string;
}

export interface FilesApiGetRequest {
    id: string;
}

export interface FilesApiGetPublicLinkRequest {
    id: string;
    hourDuration?: number;
}

export interface FilesApiUploadRequest {
    fileType?: string;
    fileName?: string;
    body?: Blob;
}

/**
 * 
 */
export class FilesApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Download
     * Download
     */


    async downloadRaw(requestParameters: FilesApiDownloadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling download.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        if (this.configuration && (this.configuration.accessToken || this.configuration.clientId && this.configuration.sharedSecret)) {
            const token = await this.configuration.accessToken;
            const tokenString = await token();
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        
        if (this.configuration && this.configuration.jwt) {
            const token = this.configuration.jwt;
            const tokenString = await token();

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
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
    async download(requestParameters: FilesApiDownloadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.downloadRaw(requestParameters, initOverrides);
    }

    /**
     * Get
     * Get
     */


    async getRaw(requestParameters: FilesApiGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DropLocation>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling get.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        if (this.configuration && (this.configuration.accessToken || this.configuration.clientId && this.configuration.sharedSecret)) {
            const token = await this.configuration.accessToken;
            const tokenString = await token();
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        
        if (this.configuration && this.configuration.jwt) {
            const token = this.configuration.jwt;
            const tokenString = await token();

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/platform/data/files/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DropLocationFromJSON(jsonValue));
    }

    /**
     * Get
     * Get
     */
    async get(requestParameters: FilesApiGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DropLocation> {
        const response = await this.getRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Public Link
     * Get Public Link
     */


    async getPublicLinkRaw(requestParameters: FilesApiGetPublicLinkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getPublicLink.');
        }

        const queryParameters: any = {};

        if (requestParameters.hourDuration !== undefined) {
            queryParameters['hourDuration'] = requestParameters.hourDuration;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        if (this.configuration && (this.configuration.accessToken || this.configuration.clientId && this.configuration.sharedSecret)) {
            const token = await this.configuration.accessToken;
            const tokenString = await token();
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        
        if (this.configuration && this.configuration.jwt) {
            const token = this.configuration.jwt;
            const tokenString = await token();

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
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
    async getPublicLink(requestParameters: FilesApiGetPublicLinkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.getPublicLinkRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Upload
     * Upload
     */


    async uploadRaw(requestParameters: FilesApiUploadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DropLocation>> {
        const queryParameters: any = {};

        if (requestParameters.fileType !== undefined) {
            queryParameters['fileType'] = requestParameters.fileType;
        }

        if (requestParameters.fileName !== undefined) {
            queryParameters['fileName'] = requestParameters.fileName;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/octet-stream';





        if (this.configuration && (this.configuration.accessToken || this.configuration.clientId && this.configuration.sharedSecret)) {
            const token = await this.configuration.accessToken;
            const tokenString = await token();
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        
        if (this.configuration && this.configuration.jwt) {
            const token = this.configuration.jwt;
            const tokenString = await token();

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/platform/data/files`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DropLocationFromJSON(jsonValue));
    }

    /**
     * Upload
     * Upload
     */
    async upload(requestParameters: FilesApiUploadRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DropLocation> {
        const response = await this.uploadRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
