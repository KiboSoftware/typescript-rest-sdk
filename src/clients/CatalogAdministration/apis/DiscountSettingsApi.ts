/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Admin Services
 * OpenAPI Spec for Kibo Catalog Admin Services
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
  DiscountSettings,
} from '../models';
import {
    DiscountSettingsFromJSON,
    DiscountSettingsToJSON,
} from '../models';

export interface DiscountSettingsApiGetDiscountSettingsRequest {
    catalogId: number;
}

export interface DiscountSettingsApiUpdateDiscountSettingsRequest {
    catalogId: number;
    discountSettings?: DiscountSettings;
}

/**
 * 
 */
export class DiscountSettingsApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * 
     * Get discount settings
     */


    async getDiscountSettingsRaw(requestParameters: DiscountSettingsApiGetDiscountSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DiscountSettings>> {
        if (requestParameters.catalogId === null || requestParameters.catalogId === undefined) {
            throw new runtime.RequiredError('catalogId','Required parameter requestParameters.catalogId was null or undefined when calling getDiscountSettings.');
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
            path: `/commerce/catalog/admin/discountsettings/{catalogId}`.replace(`{${"catalogId"}}`, encodeURIComponent(String(requestParameters.catalogId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DiscountSettingsFromJSON(jsonValue));
    }

    /**
     * 
     * Get discount settings
     */
    async getDiscountSettings(requestParameters: DiscountSettingsApiGetDiscountSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DiscountSettings> {
        const response = await this.getDiscountSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Update discount settings
     */


    async updateDiscountSettingsRaw(requestParameters: DiscountSettingsApiUpdateDiscountSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DiscountSettings>> {
        if (requestParameters.catalogId === null || requestParameters.catalogId === undefined) {
            throw new runtime.RequiredError('catalogId','Required parameter requestParameters.catalogId was null or undefined when calling updateDiscountSettings.');
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
            path: `/commerce/catalog/admin/discountsettings/{catalogId}`.replace(`{${"catalogId"}}`, encodeURIComponent(String(requestParameters.catalogId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: DiscountSettingsToJSON(requestParameters.discountSettings),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DiscountSettingsFromJSON(jsonValue));
    }

    /**
     * 
     * Update discount settings
     */
    async updateDiscountSettings(requestParameters: DiscountSettingsApiUpdateDiscountSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DiscountSettings> {
        const response = await this.updateDiscountSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
