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
  PropertyType,
  PropertyTypeCollection,
} from '../models';
import {
    PropertyTypeFromJSON,
    PropertyTypeToJSON,
    PropertyTypeCollectionFromJSON,
    PropertyTypeCollectionToJSON,
} from '../models';

export interface DocumentPropertyTypeApiCreatePropertyTypeRequest {
    propertyType?: PropertyType;
}

export interface DocumentPropertyTypeApiDeletePropertyTypeRequest {
    propertyTypeName: string;
}

export interface DocumentPropertyTypeApiGetPropertyTypeRequest {
    propertyTypeName: string;
}

export interface DocumentPropertyTypeApiGetPropertyTypesRequest {
    pageSize?: number;
    startIndex?: number;
}

export interface DocumentPropertyTypeApiUpdatePropertyTypeRequest {
    propertyTypeName: string;
    propertyType?: PropertyType;
}

/**
 * 
 */
export class DocumentPropertyTypeApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Create Property Type
     * Create Property Type
     */


    async createPropertyTypeRaw(requestParameters: DocumentPropertyTypeApiCreatePropertyTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PropertyType>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';




        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/content/propertytypes`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PropertyTypeToJSON(requestParameters.propertyType),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PropertyTypeFromJSON(jsonValue));
    }

    /**
     * Create Property Type
     * Create Property Type
     */
    async createPropertyType(requestParameters: DocumentPropertyTypeApiCreatePropertyTypeRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PropertyType> {
        const response = await this.createPropertyTypeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete Property Type
     * Delete Property Type
     */


    async deletePropertyTypeRaw(requestParameters: DocumentPropertyTypeApiDeletePropertyTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.propertyTypeName === null || requestParameters.propertyTypeName === undefined) {
            throw new runtime.RequiredError('propertyTypeName','Required parameter requestParameters.propertyTypeName was null or undefined when calling deletePropertyType.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/content/propertytypes/{propertyTypeName}`.replace(`{${"propertyTypeName"}}`, encodeURIComponent(String(requestParameters.propertyTypeName))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete Property Type
     * Delete Property Type
     */
    async deletePropertyType(requestParameters: DocumentPropertyTypeApiDeletePropertyTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePropertyTypeRaw(requestParameters, initOverrides);
    }

    /**
     * Get Property Type
     * Get Property Type
     */


    async getPropertyTypeRaw(requestParameters: DocumentPropertyTypeApiGetPropertyTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PropertyType>> {
        if (requestParameters.propertyTypeName === null || requestParameters.propertyTypeName === undefined) {
            throw new runtime.RequiredError('propertyTypeName','Required parameter requestParameters.propertyTypeName was null or undefined when calling getPropertyType.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/content/propertytypes/{propertyTypeName}`.replace(`{${"propertyTypeName"}}`, encodeURIComponent(String(requestParameters.propertyTypeName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PropertyTypeFromJSON(jsonValue));
    }

    /**
     * Get Property Type
     * Get Property Type
     */
    async getPropertyType(requestParameters: DocumentPropertyTypeApiGetPropertyTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PropertyType> {
        const response = await this.getPropertyTypeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a PagedCollection of PropertyTypes
     * Get Property Types
     */


    async getPropertyTypesRaw(requestParameters: DocumentPropertyTypeApiGetPropertyTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PropertyTypeCollection>> {
        const queryParameters: any = {};

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.startIndex !== undefined) {
            queryParameters['startIndex'] = requestParameters.startIndex;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/content/propertytypes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PropertyTypeCollectionFromJSON(jsonValue));
    }

    /**
     * Retrieves a PagedCollection of PropertyTypes
     * Get Property Types
     */
    async getPropertyTypes(requestParameters: DocumentPropertyTypeApiGetPropertyTypesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PropertyTypeCollection> {
        const response = await this.getPropertyTypesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Property Type
     * Update Property Type
     */


    async updatePropertyTypeRaw(requestParameters: DocumentPropertyTypeApiUpdatePropertyTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PropertyType>> {
        if (requestParameters.propertyTypeName === null || requestParameters.propertyTypeName === undefined) {
            throw new runtime.RequiredError('propertyTypeName','Required parameter requestParameters.propertyTypeName was null or undefined when calling updatePropertyType.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';




        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/content/propertytypes/{propertyTypeName}`.replace(`{${"propertyTypeName"}}`, encodeURIComponent(String(requestParameters.propertyTypeName))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PropertyTypeToJSON(requestParameters.propertyType),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PropertyTypeFromJSON(jsonValue));
    }

    /**
     * Update Property Type
     * Update Property Type
     */
    async updatePropertyType(requestParameters: DocumentPropertyTypeApiUpdatePropertyTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PropertyType> {
        const response = await this.updatePropertyTypeRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
