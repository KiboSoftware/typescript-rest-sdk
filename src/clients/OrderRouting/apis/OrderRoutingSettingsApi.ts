/* tslint:disable */
/* eslint-disable */
/**
 * Api Documentation
 * Api Documentation
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
  FilterAttribute,
  OrderRoutingSettings,
} from '../models';


export namespace orderRoutingSettingsApiParams { 
    export interface DeleteFilterAttributeRequest {
        attributeName: string;
    }
    export interface DeleteSettingsRequest {
        tenantID: number;
        siteID?: number;
    }
    export interface GetFilterAttributeRequest {
        attributeName: string;
    }
    export interface GetSettingsRequest {
        getDefaults?: boolean;
        siteID?: number;
        tenantID?: number;
    }
    export interface SaveFilterAttributeRequest {
        attribute: FilterAttribute;
    }
    export interface SaveSettingsRequest {
        settings: OrderRoutingSettings;
    }
}
/**
* OrderRoutingSettingsApiService - interface
* 
* @export
* @interface OrderRoutingSettingsApi
*/
export interface OrderRoutingSettingsApiService {
    /**
    * deleteFilterAttribute
    * @summary deleteFilterAttribute
    * @param {string} attributeName attributeName
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof OrderRoutingSettingsApiInterface
    */
    deleteFilterAttributeRaw(requestParameters: orderRoutingSettingsApiParams.DeleteFilterAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FilterAttribute>>;

    /**
    * deleteFilterAttribute
    * deleteFilterAttribute
    */
    deleteFilterAttribute(requestParameters: orderRoutingSettingsApiParams.DeleteFilterAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FilterAttribute>;

    /**
    * deleteSettings
    * @summary deleteSettings
    * @param {number} tenantID tenantID
    * @param {number} [siteID] siteID
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof OrderRoutingSettingsApiInterface
    */
    deleteSettingsRaw(requestParameters: orderRoutingSettingsApiParams.DeleteSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>>;

    /**
    * deleteSettings
    * deleteSettings
    */
    deleteSettings(requestParameters: orderRoutingSettingsApiParams.DeleteSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean>;

    /**
    * getFilterAttribute
    * @summary getFilterAttribute
    * @param {string} attributeName attributeName
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof OrderRoutingSettingsApiInterface
    */
    getFilterAttributeRaw(requestParameters: orderRoutingSettingsApiParams.GetFilterAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FilterAttribute>>;

    /**
    * getFilterAttribute
    * getFilterAttribute
    */
    getFilterAttribute(requestParameters: orderRoutingSettingsApiParams.GetFilterAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FilterAttribute>;

    /**
    * getFilterAttributes
    * @summary getFilterAttributes
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof OrderRoutingSettingsApiInterface
    */
    getFilterAttributesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<FilterAttribute>>>;

    /**
    * getFilterAttributes
    * getFilterAttributes
    */
    getFilterAttributes(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<FilterAttribute>>;

    /**
    * getSettings
    * @summary getSettings
    * @param {boolean} [getDefaults] getDefaults
    * @param {number} [siteID] siteID
    * @param {number} [tenantID] tenantID
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof OrderRoutingSettingsApiInterface
    */
    getSettingsRaw(requestParameters: orderRoutingSettingsApiParams.GetSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OrderRoutingSettings>>;

    /**
    * getSettings
    * getSettings
    */
    getSettings(requestParameters: orderRoutingSettingsApiParams.GetSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OrderRoutingSettings>;

    /**
    * saveFilterAttribute
    * @summary saveFilterAttribute
    * @param {FilterAttribute} attribute attribute
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof OrderRoutingSettingsApiInterface
    */
    saveFilterAttributeRaw(requestParameters: orderRoutingSettingsApiParams.SaveFilterAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FilterAttribute>>;

    /**
    * saveFilterAttribute
    * saveFilterAttribute
    */
    saveFilterAttribute(requestParameters: orderRoutingSettingsApiParams.SaveFilterAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FilterAttribute>;

    /**
    * saveSettings
    * @summary saveSettings
    * @param {OrderRoutingSettings} settings settings
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof OrderRoutingSettingsApiInterface
    */
    saveSettingsRaw(requestParameters: orderRoutingSettingsApiParams.SaveSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OrderRoutingSettings>>;

    /**
    * saveSettings
    * saveSettings
    */
    saveSettings(requestParameters: orderRoutingSettingsApiParams.SaveSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OrderRoutingSettings>;

}


/**
 * 
 */
export class OrderRoutingSettingsApi extends runtime.BaseAPI implements OrderRoutingSettingsApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * deleteFilterAttribute
     * deleteFilterAttribute
     */


    async deleteFilterAttributeRaw(requestParameters: orderRoutingSettingsApiParams.DeleteFilterAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FilterAttribute>> {
        if (requestParameters.attributeName === null || requestParameters.attributeName === undefined) {
            throw new runtime.RequiredError('attributeName','Required parameter requestParameters.attributeName was null or undefined when calling deleteFilterAttribute.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/orders/orderrouting/api/v1/settings/filterAttributes/{attributeName}`.replace(`{${"attributeName"}}`, encodeURIComponent(String(requestParameters.attributeName))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * deleteFilterAttribute
     * deleteFilterAttribute
     */
    async deleteFilterAttribute(requestParameters: orderRoutingSettingsApiParams.DeleteFilterAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FilterAttribute> {
        const response = await this.deleteFilterAttributeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * deleteSettings
     * deleteSettings
     */


    async deleteSettingsRaw(requestParameters: orderRoutingSettingsApiParams.DeleteSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>> {
        if (requestParameters.tenantID === null || requestParameters.tenantID === undefined) {
            throw new runtime.RequiredError('tenantID','Required parameter requestParameters.tenantID was null or undefined when calling deleteSettings.');
        }

        const queryParameters: any = {};

        if (requestParameters.siteID !== undefined) {
            queryParameters['siteID'] = requestParameters.siteID;
        }

        if (requestParameters.tenantID !== undefined) {
            queryParameters['tenantID'] = requestParameters.tenantID;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/orders/orderrouting/api/v1/settings`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * deleteSettings
     * deleteSettings
     */
    async deleteSettings(requestParameters: orderRoutingSettingsApiParams.DeleteSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean> {
        const response = await this.deleteSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * getFilterAttribute
     * getFilterAttribute
     */


    async getFilterAttributeRaw(requestParameters: orderRoutingSettingsApiParams.GetFilterAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FilterAttribute>> {
        if (requestParameters.attributeName === null || requestParameters.attributeName === undefined) {
            throw new runtime.RequiredError('attributeName','Required parameter requestParameters.attributeName was null or undefined when calling getFilterAttribute.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/orders/orderrouting/api/v1/settings/filterAttributes/{attributeName}`.replace(`{${"attributeName"}}`, encodeURIComponent(String(requestParameters.attributeName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * getFilterAttribute
     * getFilterAttribute
     */
    async getFilterAttribute(requestParameters: orderRoutingSettingsApiParams.GetFilterAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FilterAttribute> {
        const response = await this.getFilterAttributeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * getFilterAttributes
     * getFilterAttributes
     */


    async getFilterAttributesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<FilterAttribute>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/orders/orderrouting/api/v1/settings/filterAttributes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * getFilterAttributes
     * getFilterAttributes
     */
    async getFilterAttributes(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<FilterAttribute>> {
        const response = await this.getFilterAttributesRaw(initOverrides);
        return await response.value();
    }

    /**
     * getSettings
     * getSettings
     */


    async getSettingsRaw(requestParameters: orderRoutingSettingsApiParams.GetSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OrderRoutingSettings>> {
        const queryParameters: any = {};

        if (requestParameters.getDefaults !== undefined) {
            queryParameters['getDefaults'] = requestParameters.getDefaults;
        }

        if (requestParameters.siteID !== undefined) {
            queryParameters['siteID'] = requestParameters.siteID;
        }

        if (requestParameters.tenantID !== undefined) {
            queryParameters['tenantID'] = requestParameters.tenantID;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/orders/orderrouting/api/v1/settings`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * getSettings
     * getSettings
     */
    async getSettings(requestParameters: orderRoutingSettingsApiParams.GetSettingsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OrderRoutingSettings> {
        const response = await this.getSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * saveFilterAttribute
     * saveFilterAttribute
     */


    async saveFilterAttributeRaw(requestParameters: orderRoutingSettingsApiParams.SaveFilterAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FilterAttribute>> {
        if (requestParameters.attribute === null || requestParameters.attribute === undefined) {
            throw new runtime.RequiredError('attribute','Required parameter requestParameters.attribute was null or undefined when calling saveFilterAttribute.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/orders/orderrouting/api/v1/settings/filterAttributes`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.attribute,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * saveFilterAttribute
     * saveFilterAttribute
     */
    async saveFilterAttribute(requestParameters: orderRoutingSettingsApiParams.SaveFilterAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FilterAttribute> {
        const response = await this.saveFilterAttributeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * saveSettings
     * saveSettings
     */


    async saveSettingsRaw(requestParameters: orderRoutingSettingsApiParams.SaveSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OrderRoutingSettings>> {
        if (requestParameters.settings === null || requestParameters.settings === undefined) {
            throw new runtime.RequiredError('settings','Required parameter requestParameters.settings was null or undefined when calling saveSettings.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/orders/orderrouting/api/v1/settings`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.settings,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * saveSettings
     * saveSettings
     */
    async saveSettings(requestParameters: orderRoutingSettingsApiParams.SaveSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OrderRoutingSettings> {
        const response = await this.saveSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
