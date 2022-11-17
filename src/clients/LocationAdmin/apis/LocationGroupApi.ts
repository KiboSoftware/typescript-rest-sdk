/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Location Admin Service
 * OpenAPI Spec for Kibo Location Admin Service
 *
 * The version of the OpenAPI document: v1_admin
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../../../client-runtime';
import { basePathTemplate } from '../api-path';
import type {
  LocationGroup,
  LocationGroupCollection,
} from '../models';
import {
    LocationGroupFromJSON,
    LocationGroupToJSON,
    LocationGroupCollectionFromJSON,
    LocationGroupCollectionToJSON,
} from '../models';

export interface LocationGroupApiAddLocationGroupRequest {
    locationGroup?: LocationGroup;
}

export interface LocationGroupApiDeleteLocationGroupRequest {
    locationGroupCode: string;
}

export interface LocationGroupApiGetLocationGroupRequest {
    locationGroupCode: string;
}

export interface LocationGroupApiGetLocationGroupsRequest {
    startIndex?: number;
    pageSize?: number;
    sortBy?: string;
    filter?: string;
}

export interface LocationGroupApiUpdateLocationGroupRequest {
    locationGroupCode: string;
    locationGroup?: LocationGroup;
}

/**
 * 
 */
export class LocationGroupApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Add a location group.
     * Add Location Group
     */


    async addLocationGroupRaw(requestParameters: LocationGroupApiAddLocationGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationGroup>> {
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
            path: `/commerce/admin/locationGroups`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LocationGroupToJSON(requestParameters.locationGroup),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LocationGroupFromJSON(jsonValue));
    }

    /**
     * Add a location group.
     * Add Location Group
     */
    async addLocationGroup(requestParameters: LocationGroupApiAddLocationGroupRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationGroup> {
        const response = await this.addLocationGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a location group specified by location group code.
     * Delete Location Group
     */


    async deleteLocationGroupRaw(requestParameters: LocationGroupApiDeleteLocationGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.locationGroupCode === null || requestParameters.locationGroupCode === undefined) {
            throw new runtime.RequiredError('locationGroupCode','Required parameter requestParameters.locationGroupCode was null or undefined when calling deleteLocationGroup.');
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
            path: `/commerce/admin/locationGroups/{locationGroupCode}`.replace(`{${"locationGroupCode"}}`, encodeURIComponent(String(requestParameters.locationGroupCode))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a location group specified by location group code.
     * Delete Location Group
     */
    async deleteLocationGroup(requestParameters: LocationGroupApiDeleteLocationGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteLocationGroupRaw(requestParameters, initOverrides);
    }

    /**
     * Gets a location group by code.
     * Get Location Group
     */


    async getLocationGroupRaw(requestParameters: LocationGroupApiGetLocationGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationGroup>> {
        if (requestParameters.locationGroupCode === null || requestParameters.locationGroupCode === undefined) {
            throw new runtime.RequiredError('locationGroupCode','Required parameter requestParameters.locationGroupCode was null or undefined when calling getLocationGroup.');
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
            path: `/commerce/admin/locationGroups/{locationGroupCode}`.replace(`{${"locationGroupCode"}}`, encodeURIComponent(String(requestParameters.locationGroupCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LocationGroupFromJSON(jsonValue));
    }

    /**
     * Gets a location group by code.
     * Get Location Group
     */
    async getLocationGroup(requestParameters: LocationGroupApiGetLocationGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationGroup> {
        const response = await this.getLocationGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets a collection of location groups.
     * Get Location Groups
     */


    async getLocationGroupsRaw(requestParameters: LocationGroupApiGetLocationGroupsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationGroupCollection>> {
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
            path: `/commerce/admin/locationGroups`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LocationGroupCollectionFromJSON(jsonValue));
    }

    /**
     * Gets a collection of location groups.
     * Get Location Groups
     */
    async getLocationGroups(requestParameters: LocationGroupApiGetLocationGroupsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationGroupCollection> {
        const response = await this.getLocationGroupsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update an existing location group.
     * Update Location Group
     */


    async updateLocationGroupRaw(requestParameters: LocationGroupApiUpdateLocationGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationGroup>> {
        if (requestParameters.locationGroupCode === null || requestParameters.locationGroupCode === undefined) {
            throw new runtime.RequiredError('locationGroupCode','Required parameter requestParameters.locationGroupCode was null or undefined when calling updateLocationGroup.');
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
            path: `/commerce/admin/locationGroups/{locationGroupCode}`.replace(`{${"locationGroupCode"}}`, encodeURIComponent(String(requestParameters.locationGroupCode))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: LocationGroupToJSON(requestParameters.locationGroup),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LocationGroupFromJSON(jsonValue));
    }

    /**
     * Update an existing location group.
     * Update Location Group
     */
    async updateLocationGroup(requestParameters: LocationGroupApiUpdateLocationGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationGroup> {
        const response = await this.updateLocationGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

}