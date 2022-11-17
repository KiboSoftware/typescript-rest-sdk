/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Content Service
 * OpenAPI Spec for Kibo Content Service
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
  DocumentType,
  DocumentTypeCollection,
} from '../models';
import {
    DocumentTypeFromJSON,
    DocumentTypeToJSON,
    DocumentTypeCollectionFromJSON,
    DocumentTypeCollectionToJSON,
} from '../models';

export interface DocumentTypeApiCreateDocumentTypeRequest {
    documentType?: DocumentType;
}

export interface DocumentTypeApiGetDocumentTypeRequest {
    documentTypeName: string;
}

export interface DocumentTypeApiGetDocumentTypesRequest {
    pageSize?: number;
    startIndex?: number;
}

export interface DocumentTypeApiUpdateDocumentTypeRequest {
    documentTypeName: string;
    documentType?: DocumentType;
}

/**
 * 
 */
export class DocumentTypeApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Create Document Type
     * Create Document Type
     */


    async createDocumentTypeRaw(requestParameters: DocumentTypeApiCreateDocumentTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DocumentType>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'text/plain';





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
            path: `/content/documenttypes`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DocumentTypeToJSON(requestParameters.documentType),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DocumentTypeFromJSON(jsonValue));
    }

    /**
     * Create Document Type
     * Create Document Type
     */
    async createDocumentType(requestParameters: DocumentTypeApiCreateDocumentTypeRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DocumentType> {
        const response = await this.createDocumentTypeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Document Type
     * Get Document Type
     */


    async getDocumentTypeRaw(requestParameters: DocumentTypeApiGetDocumentTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DocumentType>> {
        if (requestParameters.documentTypeName === null || requestParameters.documentTypeName === undefined) {
            throw new runtime.RequiredError('documentTypeName','Required parameter requestParameters.documentTypeName was null or undefined when calling getDocumentType.');
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
            path: `/content/documenttypes/{documentTypeName}`.replace(`{${"documentTypeName"}}`, encodeURIComponent(String(requestParameters.documentTypeName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DocumentTypeFromJSON(jsonValue));
    }

    /**
     * Get Document Type
     * Get Document Type
     */
    async getDocumentType(requestParameters: DocumentTypeApiGetDocumentTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DocumentType> {
        const response = await this.getDocumentTypeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Document Types
     * Get Document Types
     */


    async getDocumentTypesRaw(requestParameters: DocumentTypeApiGetDocumentTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DocumentTypeCollection>> {
        const queryParameters: any = {};

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.startIndex !== undefined) {
            queryParameters['startIndex'] = requestParameters.startIndex;
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
            path: `/content/documenttypes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DocumentTypeCollectionFromJSON(jsonValue));
    }

    /**
     * Get Document Types
     * Get Document Types
     */
    async getDocumentTypes(requestParameters: DocumentTypeApiGetDocumentTypesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DocumentTypeCollection> {
        const response = await this.getDocumentTypesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Document Type
     * Update Document Type
     */


    async updateDocumentTypeRaw(requestParameters: DocumentTypeApiUpdateDocumentTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DocumentType>> {
        if (requestParameters.documentTypeName === null || requestParameters.documentTypeName === undefined) {
            throw new runtime.RequiredError('documentTypeName','Required parameter requestParameters.documentTypeName was null or undefined when calling updateDocumentType.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'text/plain';





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
            path: `/content/documenttypes/{documentTypeName}`.replace(`{${"documentTypeName"}}`, encodeURIComponent(String(requestParameters.documentTypeName))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: DocumentTypeToJSON(requestParameters.documentType),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DocumentTypeFromJSON(jsonValue));
    }

    /**
     * Update Document Type
     * Update Document Type
     */
    async updateDocumentType(requestParameters: DocumentTypeApiUpdateDocumentTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DocumentType> {
        const response = await this.updateDocumentTypeRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
