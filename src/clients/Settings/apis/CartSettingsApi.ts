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
  CartSettings,
} from '../models';
import {
    CartSettingsFromJSON,
    CartSettingsToJSON,
} from '../models';

export interface CartSettingsApiCreateCartSettingsRequest {
    cartSettings?: CartSettings;
}

export interface CartSettingsApiUpdateCartSettingsRequest {
    cartSettings?: CartSettings;
}

/**
 * 
 */
export class CartSettingsApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Creates new cart settings for a site
     * Create cart settings
     */


    async createCartSettingsRaw(requestParameters: CartSettingsApiCreateCartSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CartSettings>> {
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
            path: `/commerce/settings/cart/cartsettings`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CartSettingsToJSON(requestParameters.cartSettings),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CartSettingsFromJSON(jsonValue));
    }

    /**
     * Creates new cart settings for a site
     * Create cart settings
     */
    async createCartSettings(requestParameters: CartSettingsApiCreateCartSettingsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CartSettings> {
        const response = await this.createCartSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves existing cart settings for a site
     * Retrieves existing cart settings
     */


    async getCartSettingsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CartSettings>> {
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
            path: `/commerce/settings/cart/cartsettings`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CartSettingsFromJSON(jsonValue));
    }

    /**
     * Retrieves existing cart settings for a site
     * Retrieves existing cart settings
     */
    async getCartSettings(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CartSettings> {
        const response = await this.getCartSettingsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Modifies existing cart settings for a site
     * Update Cart Settings
     */


    async updateCartSettingsRaw(requestParameters: CartSettingsApiUpdateCartSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CartSettings>> {
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
            path: `/commerce/settings/cart/cartsettings`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CartSettingsToJSON(requestParameters.cartSettings),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CartSettingsFromJSON(jsonValue));
    }

    /**
     * Modifies existing cart settings for a site
     * Update Cart Settings
     */
    async updateCartSettings(requestParameters: CartSettingsApiUpdateCartSettingsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CartSettings> {
        const response = await this.updateCartSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
