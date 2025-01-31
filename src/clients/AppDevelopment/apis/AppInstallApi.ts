/* tslint:disable */
/* eslint-disable */
/**
 * Kibo AppDev Service
 * OpenAPI Spec for Kibo AppDev Service
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
  ApplicationEntitlement,
} from '../models';


export namespace appInstallApiParams { 
    export interface GetAppRequest {
        applicationEntitlementId: number;
        responseFields?: string;
    }
    export interface GetAppsRequest {
        responseFields?: string;
    }
    export interface GetEntitlementsByApplicationRequest {
        applicationId: number;
        responseFields?: string;
    }
    export interface GetEntitlementsByTenantRequest {
        tenantId: number;
        responseFields?: string;
    }
    export interface InstallAppRequest {
        responseFields?: string;
        applicationEntitlement?: ApplicationEntitlement;
    }
    export interface InstallAppToProductionTenantRequest {
        responseFields?: string;
        applicationEntitlement?: ApplicationEntitlement;
    }
}
/**
* AppInstallApiService - interface
* 
* @export
* @interface AppInstallApi
*/
export interface AppInstallApiService {
    /**
    * 
    * @summary Get App
    * @param {number} applicationEntitlementId 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof AppInstallApiInterface
    */
    getAppRaw(requestParameters: appInstallApiParams.GetAppRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApplicationEntitlement>>;

    /**
    * 
    * Get App
    */
    getApp(requestParameters: appInstallApiParams.GetAppRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApplicationEntitlement>;

    /**
    * 
    * @summary Get Apps
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof AppInstallApiInterface
    */
    getAppsRaw(requestParameters: appInstallApiParams.GetAppsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ApplicationEntitlement>>>;

    /**
    * 
    * Get Apps
    */
    getApps(requestParameters: appInstallApiParams.GetAppsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ApplicationEntitlement>>;

    /**
    * 
    * @summary Get Entitlements By Application
    * @param {number} applicationId 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof AppInstallApiInterface
    */
    getEntitlementsByApplicationRaw(requestParameters: appInstallApiParams.GetEntitlementsByApplicationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ApplicationEntitlement>>>;

    /**
    * 
    * Get Entitlements By Application
    */
    getEntitlementsByApplication(requestParameters: appInstallApiParams.GetEntitlementsByApplicationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ApplicationEntitlement>>;

    /**
    * 
    * @summary Get Entitlements By Tenant
    * @param {number} tenantId 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof AppInstallApiInterface
    */
    getEntitlementsByTenantRaw(requestParameters: appInstallApiParams.GetEntitlementsByTenantRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ApplicationEntitlement>>>;

    /**
    * 
    * Get Entitlements By Tenant
    */
    getEntitlementsByTenant(requestParameters: appInstallApiParams.GetEntitlementsByTenantRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ApplicationEntitlement>>;

    /**
    * 
    * @summary Install App
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {ApplicationEntitlement} [applicationEntitlement] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof AppInstallApiInterface
    */
    installAppRaw(requestParameters: appInstallApiParams.InstallAppRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApplicationEntitlement>>;

    /**
    * 
    * Install App
    */
    installApp(requestParameters: appInstallApiParams.InstallAppRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApplicationEntitlement>;

    /**
    * 
    * @summary Install App To Production Tenant
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {ApplicationEntitlement} [applicationEntitlement] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof AppInstallApiInterface
    */
    installAppToProductionTenantRaw(requestParameters: appInstallApiParams.InstallAppToProductionTenantRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApplicationEntitlement>>;

    /**
    * 
    * Install App To Production Tenant
    */
    installAppToProductionTenant(requestParameters: appInstallApiParams.InstallAppToProductionTenantRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApplicationEntitlement>;

}


/**
 * 
 */
export class AppInstallApi extends runtime.BaseAPI implements AppInstallApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * 
     * Get App
     */


    async getAppRaw(requestParameters: appInstallApiParams.GetAppRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApplicationEntitlement>> {
        if (requestParameters.applicationEntitlementId === null || requestParameters.applicationEntitlementId === undefined) {
            throw new runtime.RequiredError('applicationEntitlementId','Required parameter requestParameters.applicationEntitlementId was null or undefined when calling getApp.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/appdev/appinstall/application/entitlement/{applicationEntitlementId}`.replace(`{${"applicationEntitlementId"}}`, encodeURIComponent(String(requestParameters.applicationEntitlementId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 
     * Get App
     */
    async getApp(requestParameters: appInstallApiParams.GetAppRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApplicationEntitlement> {
        const response = await this.getAppRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Get Apps
     */


    async getAppsRaw(requestParameters: appInstallApiParams.GetAppsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ApplicationEntitlement>>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/appdev/appinstall/application/entitlement`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 
     * Get Apps
     */
    async getApps(requestParameters: appInstallApiParams.GetAppsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ApplicationEntitlement>> {
        const response = await this.getAppsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Get Entitlements By Application
     */


    async getEntitlementsByApplicationRaw(requestParameters: appInstallApiParams.GetEntitlementsByApplicationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ApplicationEntitlement>>> {
        if (requestParameters.applicationId === null || requestParameters.applicationId === undefined) {
            throw new runtime.RequiredError('applicationId','Required parameter requestParameters.applicationId was null or undefined when calling getEntitlementsByApplication.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/appdev/appinstall/applicationversion/{applicationId}/entitlements`.replace(`{${"applicationId"}}`, encodeURIComponent(String(requestParameters.applicationId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 
     * Get Entitlements By Application
     */
    async getEntitlementsByApplication(requestParameters: appInstallApiParams.GetEntitlementsByApplicationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ApplicationEntitlement>> {
        const response = await this.getEntitlementsByApplicationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Get Entitlements By Tenant
     */


    async getEntitlementsByTenantRaw(requestParameters: appInstallApiParams.GetEntitlementsByTenantRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ApplicationEntitlement>>> {
        if (requestParameters.tenantId === null || requestParameters.tenantId === undefined) {
            throw new runtime.RequiredError('tenantId','Required parameter requestParameters.tenantId was null or undefined when calling getEntitlementsByTenant.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/appdev/appinstall/tenant/{tenantId}/entitlements`.replace(`{${"tenantId"}}`, encodeURIComponent(String(requestParameters.tenantId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 
     * Get Entitlements By Tenant
     */
    async getEntitlementsByTenant(requestParameters: appInstallApiParams.GetEntitlementsByTenantRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ApplicationEntitlement>> {
        const response = await this.getEntitlementsByTenantRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Install App
     */


    async installAppRaw(requestParameters: appInstallApiParams.InstallAppRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApplicationEntitlement>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/appdev/appinstall/application/entitlement`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.applicationEntitlement,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 
     * Install App
     */
    async installApp(requestParameters: appInstallApiParams.InstallAppRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApplicationEntitlement> {
        const response = await this.installAppRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Install App To Production Tenant
     */


    async installAppToProductionTenantRaw(requestParameters: appInstallApiParams.InstallAppToProductionTenantRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApplicationEntitlement>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/appdev/appinstall/toproductiontenant`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.applicationEntitlement,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 
     * Install App To Production Tenant
     */
    async installAppToProductionTenant(requestParameters: appInstallApiParams.InstallAppToProductionTenantRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApplicationEntitlement> {
        const response = await this.installAppToProductionTenantRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
