/* tslint:disable */
/* eslint-disable */
/**
 * Kibo SiteSettings Service
 * OpenAPI Spec for Kibo SiteSettings Service
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
  InventorySettings,
} from '../models';
import {
    InventorySettingsFromJSON,
    InventorySettingsToJSON,
} from '../models';

export interface InventorySettingsApiCreateInventorySettingsRequest {
    inventorySettings?: InventorySettings;
}

export interface InventorySettingsApiUpdateInventorySettingsRequest {
    inventorySettings?: InventorySettings;
}

/**
 * 
 */
export class InventorySettingsApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Creates inventory settings for the site
     * Create Inventory Settings
     */


    async createInventorySettingsRaw(requestParameters: InventorySettingsApiCreateInventorySettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InventorySettings>> {
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
            path: `/commerce/settings/inventory/inventorySettings`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InventorySettingsToJSON(requestParameters.inventorySettings),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InventorySettingsFromJSON(jsonValue));
    }

    /**
     * Creates inventory settings for the site
     * Create Inventory Settings
     */
    async createInventorySettings(requestParameters: InventorySettingsApiCreateInventorySettingsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InventorySettings> {
        const response = await this.createInventorySettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves existing inventory settings for the site which contain inventory export job settings.
     * Get Inventory Settings
     */


    async getInventorySettingsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InventorySettings>> {
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
            path: `/commerce/settings/inventory/inventorySettings`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InventorySettingsFromJSON(jsonValue));
    }

    /**
     * Retrieves existing inventory settings for the site which contain inventory export job settings.
     * Get Inventory Settings
     */
    async getInventorySettings(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InventorySettings> {
        const response = await this.getInventorySettingsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Modifies existing inventory settings
     * Update Inventory Settings
     */


    async updateInventorySettingsRaw(requestParameters: InventorySettingsApiUpdateInventorySettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InventorySettings>> {
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
            path: `/commerce/settings/inventory/inventorySettings`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: InventorySettingsToJSON(requestParameters.inventorySettings),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InventorySettingsFromJSON(jsonValue));
    }

    /**
     * Modifies existing inventory settings
     * Update Inventory Settings
     */
    async updateInventorySettings(requestParameters: InventorySettingsApiUpdateInventorySettingsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InventorySettings> {
        const response = await this.updateInventorySettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}