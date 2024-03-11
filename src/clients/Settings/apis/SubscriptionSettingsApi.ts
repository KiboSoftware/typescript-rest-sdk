/* tslint:disable */
/* eslint-disable */
/**
 * Kibo SiteSettings Service
 * OpenAPI Spec for Kibo SiteSettings Service
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
  SubscriptionSettings,
} from '../models';

export interface SubscriptionSettingsApiCreateSubscriptionSettingsRequest {
    responseFields?: string;
    subscriptionSettings?: SubscriptionSettings;
}

export interface SubscriptionSettingsApiGetSubscriptionSettingsRequest {
    responseFields?: string;
}

export interface SubscriptionSettingsApiUpdateSubscriptionSettingsRequest {
    responseFields?: string;
    subscriptionSettings?: SubscriptionSettings;
}

/**
 * SubscriptionSettingsApi - interface
 * 
 * @export
 * @interface SubscriptionSettingsApiInterface
 */
export interface SubscriptionSettingsApiInterface {
    /**
     * Creates new subscription settings for a site
     * @summary Create subscription settings
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {SubscriptionSettings} [subscriptionSettings] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionSettingsApiInterface
     */
    createSubscriptionSettingsRaw(requestParameters: SubscriptionSettingsApiCreateSubscriptionSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionSettings>>;

    /**
     * Creates new subscription settings for a site
     * Create subscription settings
     */
    createSubscriptionSettings(requestParameters: SubscriptionSettingsApiCreateSubscriptionSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionSettings>;

    /**
     * Retrieves existing subscription settings for a site
     * @summary Retrieves existing subscription settings
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionSettingsApiInterface
     */
    getSubscriptionSettingsRaw(requestParameters: SubscriptionSettingsApiGetSubscriptionSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionSettings>>;

    /**
     * Retrieves existing subscription settings for a site
     * Retrieves existing subscription settings
     */
    getSubscriptionSettings(requestParameters: SubscriptionSettingsApiGetSubscriptionSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionSettings>;

    /**
     * Modifies existing subscription settings for a site
     * @summary Update Subscription Settings
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {SubscriptionSettings} [subscriptionSettings] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionSettingsApiInterface
     */
    updateSubscriptionSettingsRaw(requestParameters: SubscriptionSettingsApiUpdateSubscriptionSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionSettings>>;

    /**
     * Modifies existing subscription settings for a site
     * Update Subscription Settings
     */
    updateSubscriptionSettings(requestParameters: SubscriptionSettingsApiUpdateSubscriptionSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionSettings>;

}

/**
 * 
 */
export class SubscriptionSettingsApi extends runtime.BaseAPI implements SubscriptionSettingsApiInterface {
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

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/settings/subscription/subscriptionsettings`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.subscriptionSettings,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
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


    async getSubscriptionSettingsRaw(requestParameters: SubscriptionSettingsApiGetSubscriptionSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionSettings>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/settings/subscription/subscriptionsettings`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves existing subscription settings for a site
     * Retrieves existing subscription settings
     */
    async getSubscriptionSettings(requestParameters: SubscriptionSettingsApiGetSubscriptionSettingsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionSettings> {
        const response = await this.getSubscriptionSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Modifies existing subscription settings for a site
     * Update Subscription Settings
     */


    async updateSubscriptionSettingsRaw(requestParameters: SubscriptionSettingsApiUpdateSubscriptionSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionSettings>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/settings/subscription/subscriptionsettings`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.subscriptionSettings,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
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
