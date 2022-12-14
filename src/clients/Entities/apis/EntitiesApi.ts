/* tslint:disable */
/* eslint-disable */
/**
 * Kibo MZDB Service
 * OpenAPI Spec for Kibo MZDB Service
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
  EntityCollection,
  HttpRequestMessage,
} from '../models';
import {
    EntityCollectionFromJSON,
    EntityCollectionToJSON,
    HttpRequestMessageFromJSON,
    HttpRequestMessageToJSON,
} from '../models';

export interface EntitiesApiDeleteEntityRequest {
    entityListFullName: string;
    id: string;
}

export interface EntitiesApiGetEntitiesRequest {
    entityListFullName: string;
    pageSize?: number;
    startIndex?: number;
    filter?: string;
    sortBy?: string;
}

export interface EntitiesApiGetEntityRequest {
    entityListFullName: string;
    id: string;
}

export interface EntitiesApiGetViewEntitiesRequest {
    entityListFullName: string;
    viewName: string;
    pageSize?: number;
    startIndex?: number;
    filter?: string;
}

export interface EntitiesApiGetViewEntityRequest {
    entityListFullName: string;
    viewName: string;
    entityId: string;
}

export interface EntitiesApiInsertEntityRequest {
    entityListFullName: string;
    httpRequestMessage?: HttpRequestMessage;
}

export interface EntitiesApiUpdateEntityRequest {
    entityListFullName: string;
    id: string;
    httpRequestMessage?: HttpRequestMessage;
}

/**
 * 
 */
export class EntitiesApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Delete an existing Entity from an EntityList instance
     * Delete Entity
     */


    async deleteEntityRaw(requestParameters: EntitiesApiDeleteEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.entityListFullName === null || requestParameters.entityListFullName === undefined) {
            throw new runtime.RequiredError('entityListFullName','Required parameter requestParameters.entityListFullName was null or undefined when calling deleteEntity.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteEntity.');
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
            path: `/platform/entitylists/{entityListFullName}/entities/{id}`.replace(`{${"entityListFullName"}}`, encodeURIComponent(String(requestParameters.entityListFullName))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete an existing Entity from an EntityList instance
     * Delete Entity
     */
    async deleteEntity(requestParameters: EntitiesApiDeleteEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteEntityRaw(requestParameters, initOverrides);
    }

    /**
     * Get a filtered collection of Entities from an EntityList instance
     * Get Entities
     */


    async getEntitiesRaw(requestParameters: EntitiesApiGetEntitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityCollection>> {
        if (requestParameters.entityListFullName === null || requestParameters.entityListFullName === undefined) {
            throw new runtime.RequiredError('entityListFullName','Required parameter requestParameters.entityListFullName was null or undefined when calling getEntities.');
        }

        const queryParameters: any = {};

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.startIndex !== undefined) {
            queryParameters['startIndex'] = requestParameters.startIndex;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.sortBy !== undefined) {
            queryParameters['sortBy'] = requestParameters.sortBy;
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
            path: `/platform/entitylists/{entityListFullName}/entities`.replace(`{${"entityListFullName"}}`, encodeURIComponent(String(requestParameters.entityListFullName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntityCollectionFromJSON(jsonValue));
    }

    /**
     * Get a filtered collection of Entities from an EntityList instance
     * Get Entities
     */
    async getEntities(requestParameters: EntitiesApiGetEntitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityCollection> {
        const response = await this.getEntitiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a specific Entity from an EntityList instance
     * Get Entity
     */


    async getEntityRaw(requestParameters: EntitiesApiGetEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.entityListFullName === null || requestParameters.entityListFullName === undefined) {
            throw new runtime.RequiredError('entityListFullName','Required parameter requestParameters.entityListFullName was null or undefined when calling getEntity.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getEntity.');
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
            path: `/platform/entitylists/{entityListFullName}/entities/{id}`.replace(`{${"entityListFullName"}}`, encodeURIComponent(String(requestParameters.entityListFullName))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Get a specific Entity from an EntityList instance
     * Get Entity
     */
    async getEntity(requestParameters: EntitiesApiGetEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.getEntityRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a filtered collection of Entities for a ListView on an EntityList
     * Get View Entities
     */


    async getViewEntitiesRaw(requestParameters: EntitiesApiGetViewEntitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityCollection>> {
        if (requestParameters.entityListFullName === null || requestParameters.entityListFullName === undefined) {
            throw new runtime.RequiredError('entityListFullName','Required parameter requestParameters.entityListFullName was null or undefined when calling getViewEntities.');
        }

        if (requestParameters.viewName === null || requestParameters.viewName === undefined) {
            throw new runtime.RequiredError('viewName','Required parameter requestParameters.viewName was null or undefined when calling getViewEntities.');
        }

        const queryParameters: any = {};

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.startIndex !== undefined) {
            queryParameters['startIndex'] = requestParameters.startIndex;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
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
            path: `/platform/entitylists/{entityListFullName}/views/{viewName}/entities`.replace(`{${"entityListFullName"}}`, encodeURIComponent(String(requestParameters.entityListFullName))).replace(`{${"viewName"}}`, encodeURIComponent(String(requestParameters.viewName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntityCollectionFromJSON(jsonValue));
    }

    /**
     * Get a filtered collection of Entities for a ListView on an EntityList
     * Get View Entities
     */
    async getViewEntities(requestParameters: EntitiesApiGetViewEntitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityCollection> {
        const response = await this.getViewEntitiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a specific Entity in a ListView on an EntityList
     * Get View Entity
     */


    async getViewEntityRaw(requestParameters: EntitiesApiGetViewEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.entityListFullName === null || requestParameters.entityListFullName === undefined) {
            throw new runtime.RequiredError('entityListFullName','Required parameter requestParameters.entityListFullName was null or undefined when calling getViewEntity.');
        }

        if (requestParameters.viewName === null || requestParameters.viewName === undefined) {
            throw new runtime.RequiredError('viewName','Required parameter requestParameters.viewName was null or undefined when calling getViewEntity.');
        }

        if (requestParameters.entityId === null || requestParameters.entityId === undefined) {
            throw new runtime.RequiredError('entityId','Required parameter requestParameters.entityId was null or undefined when calling getViewEntity.');
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
            path: `/platform/entitylists/{entityListFullName}/views/{viewName}/entities/{entityId}`.replace(`{${"entityListFullName"}}`, encodeURIComponent(String(requestParameters.entityListFullName))).replace(`{${"viewName"}}`, encodeURIComponent(String(requestParameters.viewName))).replace(`{${"entityId"}}`, encodeURIComponent(String(requestParameters.entityId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Get a specific Entity in a ListView on an EntityList
     * Get View Entity
     */
    async getViewEntity(requestParameters: EntitiesApiGetViewEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.getViewEntityRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Insert an Entity into an EntityList instance
     * Add Entity
     */


    async insertEntityRaw(requestParameters: EntitiesApiInsertEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.entityListFullName === null || requestParameters.entityListFullName === undefined) {
            throw new runtime.RequiredError('entityListFullName','Required parameter requestParameters.entityListFullName was null or undefined when calling insertEntity.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





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
            path: `/platform/entitylists/{entityListFullName}/entities`.replace(`{${"entityListFullName"}}`, encodeURIComponent(String(requestParameters.entityListFullName))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: HttpRequestMessageToJSON(requestParameters.httpRequestMessage),
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Insert an Entity into an EntityList instance
     * Add Entity
     */
    async insertEntity(requestParameters: EntitiesApiInsertEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.insertEntityRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update an existing Entity in an EntityList instance
     * Update Entity
     */


    async updateEntityRaw(requestParameters: EntitiesApiUpdateEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.entityListFullName === null || requestParameters.entityListFullName === undefined) {
            throw new runtime.RequiredError('entityListFullName','Required parameter requestParameters.entityListFullName was null or undefined when calling updateEntity.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateEntity.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





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
            path: `/platform/entitylists/{entityListFullName}/entities/{id}`.replace(`{${"entityListFullName"}}`, encodeURIComponent(String(requestParameters.entityListFullName))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: HttpRequestMessageToJSON(requestParameters.httpRequestMessage),
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Update an existing Entity in an EntityList instance
     * Update Entity
     */
    async updateEntity(requestParameters: EntitiesApiUpdateEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.updateEntityRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
