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
  SubscriptionSettings,
} from '../models';
import {
    SubscriptionSettingsFromJSON,
    SubscriptionSettingsToJSON,
} from '../models';

export interface SubscriptionSettingsApiCreateSubscriptionSettingsRequest {
    subscriptionSettings?: SubscriptionSettings;
}

export interface SubscriptionSettingsApiUpdateSubscriptionSettingsRequest {
    subscriptionSettings?: SubscriptionSettings;
}

/**
 * 
 */
export class SubscriptionSettingsApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Creates new subscription settings for a site
     * Create subscription settings
     */


    async createSubscriptionSettingsRaw(requestParameters: SubscriptionSettingsApiCreateSubscriptionSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionSettings>> {
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
            path: `/commerce/settings/subscription/subscriptionsettings`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SubscriptionSettingsToJSON(requestParameters.subscriptionSettings),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionSettingsFromJSON(jsonValue));
    }

    /**
     * Creates new subscription settings for a site
     * Create subscription settings
     */
    async createSubscriptionSettings(requestParameters: SubscriptionSettingsApiCreateSubscriptionSettingsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionSettings> {
        const response = await this.createSubscriptionSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves existing subscription settings for a site
     * Retrieves existing subscription settings
     */


    async getSubscriptionSettingsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionSettings>> {
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
            path: `/commerce/settings/subscription/subscriptionsettings`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionSettingsFromJSON(jsonValue));
    }

    /**
     * Retrieves existing subscription settings for a site
     * Retrieves existing subscription settings
     */
    async getSubscriptionSettings(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionSettings> {
        const response = await this.getSubscriptionSettingsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Modifies existing subscription settings for a site
     * Update Subscription Settings
     */


    async updateSubscriptionSettingsRaw(requestParameters: SubscriptionSettingsApiUpdateSubscriptionSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionSettings>> {
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
            path: `/commerce/settings/subscription/subscriptionsettings`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: SubscriptionSettingsToJSON(requestParameters.subscriptionSettings),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionSettingsFromJSON(jsonValue));
    }

    /**
     * Modifies existing subscription settings for a site
     * Update Subscription Settings
     */
    async updateSubscriptionSettings(requestParameters: SubscriptionSettingsApiUpdateSubscriptionSettingsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionSettings> {
        const response = await this.updateSubscriptionSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}