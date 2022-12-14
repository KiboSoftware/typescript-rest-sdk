/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Shipping Admin Service
 * OpenAPI Spec for Kibo Shipping Admin Service
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
  CarrierConfiguration,
  CarrierConfigurationCollection,
} from '../models';
import {
    CarrierConfigurationFromJSON,
    CarrierConfigurationToJSON,
    CarrierConfigurationCollectionFromJSON,
    CarrierConfigurationCollectionToJSON,
} from '../models';

export interface CarrierConfigurationApiCreateConfigurationRequest {
    carrierId: string;
    carrierConfiguration?: CarrierConfiguration;
}

export interface CarrierConfigurationApiDeleteConfigurationRequest {
    carrierId: string;
}

export interface CarrierConfigurationApiGetConfigurationRequest {
    carrierId: string;
}

export interface CarrierConfigurationApiGetConfigurationsRequest {
    startIndex?: number;
    pageSize?: number;
    sortBy?: string;
    filter?: string;
}

export interface CarrierConfigurationApiUpdateConfigurationRequest {
    carrierId: string;
    carrierConfiguration?: CarrierConfiguration;
}

/**
 * 
 */
export class CarrierConfigurationApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Create Carrier Configuration
     * Create Carrier Configuration
     */


    async createConfigurationRaw(requestParameters: CarrierConfigurationApiCreateConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CarrierConfiguration>> {
        if (requestParameters.carrierId === null || requestParameters.carrierId === undefined) {
            throw new runtime.RequiredError('carrierId','Required parameter requestParameters.carrierId was null or undefined when calling createConfiguration.');
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
            path: `/commerce/shipping/admin/carriers/{carrierId}`.replace(`{${"carrierId"}}`, encodeURIComponent(String(requestParameters.carrierId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CarrierConfigurationToJSON(requestParameters.carrierConfiguration),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CarrierConfigurationFromJSON(jsonValue));
    }

    /**
     * Create Carrier Configuration
     * Create Carrier Configuration
     */
    async createConfiguration(requestParameters: CarrierConfigurationApiCreateConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CarrierConfiguration> {
        const response = await this.createConfigurationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete an existing Carrier Configuration
     * Delete an existing Carrier Configuration
     */


    async deleteConfigurationRaw(requestParameters: CarrierConfigurationApiDeleteConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.carrierId === null || requestParameters.carrierId === undefined) {
            throw new runtime.RequiredError('carrierId','Required parameter requestParameters.carrierId was null or undefined when calling deleteConfiguration.');
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
            path: `/commerce/shipping/admin/carriers/{carrierId}`.replace(`{${"carrierId"}}`, encodeURIComponent(String(requestParameters.carrierId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete an existing Carrier Configuration
     * Delete an existing Carrier Configuration
     */
    async deleteConfiguration(requestParameters: CarrierConfigurationApiDeleteConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteConfigurationRaw(requestParameters, initOverrides);
    }

    /**
     * Get Carrier Configuration (for this particular site)
     * Get Carrier Configuration (for this particular site)
     */


    async getConfigurationRaw(requestParameters: CarrierConfigurationApiGetConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CarrierConfiguration>> {
        if (requestParameters.carrierId === null || requestParameters.carrierId === undefined) {
            throw new runtime.RequiredError('carrierId','Required parameter requestParameters.carrierId was null or undefined when calling getConfiguration.');
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
            path: `/commerce/shipping/admin/carriers/{carrierId}`.replace(`{${"carrierId"}}`, encodeURIComponent(String(requestParameters.carrierId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CarrierConfigurationFromJSON(jsonValue));
    }

    /**
     * Get Carrier Configuration (for this particular site)
     * Get Carrier Configuration (for this particular site)
     */
    async getConfiguration(requestParameters: CarrierConfigurationApiGetConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CarrierConfiguration> {
        const response = await this.getConfigurationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Retrieves a list of Carrier Configurations according to any specified filter criteria and sort options
     */


    async getConfigurationsRaw(requestParameters: CarrierConfigurationApiGetConfigurationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CarrierConfigurationCollection>> {
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
            path: `/commerce/shipping/admin/carriers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CarrierConfigurationCollectionFromJSON(jsonValue));
    }

    /**
     * 
     * Retrieves a list of Carrier Configurations according to any specified filter criteria and sort options
     */
    async getConfigurations(requestParameters: CarrierConfigurationApiGetConfigurationsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CarrierConfigurationCollection> {
        const response = await this.getConfigurationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update an existing Carrier Configuration
     * Update an existing Carrier Configuration
     */


    async updateConfigurationRaw(requestParameters: CarrierConfigurationApiUpdateConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CarrierConfiguration>> {
        if (requestParameters.carrierId === null || requestParameters.carrierId === undefined) {
            throw new runtime.RequiredError('carrierId','Required parameter requestParameters.carrierId was null or undefined when calling updateConfiguration.');
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
            path: `/commerce/shipping/admin/carriers/{carrierId}`.replace(`{${"carrierId"}}`, encodeURIComponent(String(requestParameters.carrierId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CarrierConfigurationToJSON(requestParameters.carrierConfiguration),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CarrierConfigurationFromJSON(jsonValue));
    }

    /**
     * Update an existing Carrier Configuration
     * Update an existing Carrier Configuration
     */
    async updateConfiguration(requestParameters: CarrierConfigurationApiUpdateConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CarrierConfiguration> {
        const response = await this.updateConfigurationRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
