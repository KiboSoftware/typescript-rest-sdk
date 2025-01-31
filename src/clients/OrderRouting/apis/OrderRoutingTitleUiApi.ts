/* tslint:disable */
/* eslint-disable */
/**
 * Order Routing
 * Order Routing API
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
  AjaxResponse,
  ModelAndView,
  UserContextInformation,
} from '../models';


export namespace orderRoutingTitleUiApiParams { 
    export interface ChangeEnvironmentRequest {
        environmentID: number;
        userContextInformation: UserContextInformation;
        xVolTenant: number;
        xVolSite: number;
    }
    export interface ChangeEnvironment1Request {
        environmentID: number;
        userContextInformation: UserContextInformation;
        xVolTenant: number;
        xVolSite: number;
    }
    export interface GetEnvironmentsForDropdownRequest {
        userContextInformation: UserContextInformation;
        xVolTenant: number;
        xVolSite: number;
    }
    export interface GetEnvironmentsForDropdown1Request {
        userContextInformation: UserContextInformation;
        xVolTenant: number;
        xVolSite: number;
    }
}
/**
* OrderRoutingTitleUiApiService - interface
* 
* @export
* @interface OrderRoutingTitleUiApi
*/
export interface OrderRoutingTitleUiApiService {
    /**
    * Change Environment
    * @summary Change Environment
    * @param {number} environmentID 
    * @param {UserContextInformation} userContextInformation 
    * @param {number} xVolTenant Tenant
    * @param {number} xVolSite Site
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof OrderRoutingTitleUiApiInterface
    */
    changeEnvironmentRaw(requestParameters: orderRoutingTitleUiApiParams.ChangeEnvironmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>>;

    /**
    * Change Environment
    * Change Environment
    */
    changeEnvironment(requestParameters: orderRoutingTitleUiApiParams.ChangeEnvironmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse>;

    /**
    * Change Environment_1
    * @summary Change Environment_1
    * @param {number} environmentID 
    * @param {UserContextInformation} userContextInformation 
    * @param {number} xVolTenant Tenant
    * @param {number} xVolSite Site
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof OrderRoutingTitleUiApiInterface
    */
    changeEnvironment1Raw(requestParameters: orderRoutingTitleUiApiParams.ChangeEnvironment1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>>;

    /**
    * Change Environment_1
    * Change Environment_1
    */
    changeEnvironment1(requestParameters: orderRoutingTitleUiApiParams.ChangeEnvironment1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse>;

    /**
    * Get Environments For Dropdown
    * @summary Get Environments For Dropdown
    * @param {UserContextInformation} userContextInformation 
    * @param {number} xVolTenant Tenant
    * @param {number} xVolSite Site
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof OrderRoutingTitleUiApiInterface
    */
    getEnvironmentsForDropdownRaw(requestParameters: orderRoutingTitleUiApiParams.GetEnvironmentsForDropdownRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>>;

    /**
    * Get Environments For Dropdown
    * Get Environments For Dropdown
    */
    getEnvironmentsForDropdown(requestParameters: orderRoutingTitleUiApiParams.GetEnvironmentsForDropdownRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse>;

    /**
    * Get Environments For Dropdown_1
    * @summary Get Environments For Dropdown_1
    * @param {UserContextInformation} userContextInformation 
    * @param {number} xVolTenant Tenant
    * @param {number} xVolSite Site
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof OrderRoutingTitleUiApiInterface
    */
    getEnvironmentsForDropdown1Raw(requestParameters: orderRoutingTitleUiApiParams.GetEnvironmentsForDropdown1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>>;

    /**
    * Get Environments For Dropdown_1
    * Get Environments For Dropdown_1
    */
    getEnvironmentsForDropdown1(requestParameters: orderRoutingTitleUiApiParams.GetEnvironmentsForDropdown1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse>;

}


/**
 * 
 */
export class OrderRoutingTitleUiApi extends runtime.BaseAPI implements OrderRoutingTitleUiApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Change Environment
     * Change Environment
     */


    async changeEnvironmentRaw(requestParameters: orderRoutingTitleUiApiParams.ChangeEnvironmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>> {
        if (requestParameters.environmentID === null || requestParameters.environmentID === undefined) {
            throw new runtime.RequiredError('environmentID','Required parameter requestParameters.environmentID was null or undefined when calling changeEnvironment.');
        }

        if (requestParameters.userContextInformation === null || requestParameters.userContextInformation === undefined) {
            throw new runtime.RequiredError('userContextInformation','Required parameter requestParameters.userContextInformation was null or undefined when calling changeEnvironment.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling changeEnvironment.');
        }

        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling changeEnvironment.');
        }

        const queryParameters: any = {};

        if (requestParameters.userContextInformation !== undefined) {
            queryParameters['userContextInformation'] = requestParameters.userContextInformation;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/change-environment/{environmentID}`.replace(`{${"environmentID"}}`, encodeURIComponent(String(requestParameters.environmentID))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Change Environment
     * Change Environment
     */
    async changeEnvironment(requestParameters: orderRoutingTitleUiApiParams.ChangeEnvironmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse> {
        const response = await this.changeEnvironmentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Change Environment_1
     * Change Environment_1
     */


    async changeEnvironment1Raw(requestParameters: orderRoutingTitleUiApiParams.ChangeEnvironment1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>> {
        if (requestParameters.environmentID === null || requestParameters.environmentID === undefined) {
            throw new runtime.RequiredError('environmentID','Required parameter requestParameters.environmentID was null or undefined when calling changeEnvironment1.');
        }

        if (requestParameters.userContextInformation === null || requestParameters.userContextInformation === undefined) {
            throw new runtime.RequiredError('userContextInformation','Required parameter requestParameters.userContextInformation was null or undefined when calling changeEnvironment1.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling changeEnvironment1.');
        }

        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling changeEnvironment1.');
        }

        const queryParameters: any = {};

        if (requestParameters.userContextInformation !== undefined) {
            queryParameters['userContextInformation'] = requestParameters.userContextInformation;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/{tenantID}/{siteID}/{environmentID}/change-environment/{environmentID}`.replace(`{${"environmentID"}}`, encodeURIComponent(String(requestParameters.environmentID))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Change Environment_1
     * Change Environment_1
     */
    async changeEnvironment1(requestParameters: orderRoutingTitleUiApiParams.ChangeEnvironment1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse> {
        const response = await this.changeEnvironment1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Environments For Dropdown
     * Get Environments For Dropdown
     */


    async getEnvironmentsForDropdownRaw(requestParameters: orderRoutingTitleUiApiParams.GetEnvironmentsForDropdownRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>> {
        if (requestParameters.userContextInformation === null || requestParameters.userContextInformation === undefined) {
            throw new runtime.RequiredError('userContextInformation','Required parameter requestParameters.userContextInformation was null or undefined when calling getEnvironmentsForDropdown.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling getEnvironmentsForDropdown.');
        }

        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling getEnvironmentsForDropdown.');
        }

        const queryParameters: any = {};

        if (requestParameters.userContextInformation !== undefined) {
            queryParameters['userContextInformation'] = requestParameters.userContextInformation;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/get-environments`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get Environments For Dropdown
     * Get Environments For Dropdown
     */
    async getEnvironmentsForDropdown(requestParameters: orderRoutingTitleUiApiParams.GetEnvironmentsForDropdownRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse> {
        const response = await this.getEnvironmentsForDropdownRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Environments For Dropdown_1
     * Get Environments For Dropdown_1
     */


    async getEnvironmentsForDropdown1Raw(requestParameters: orderRoutingTitleUiApiParams.GetEnvironmentsForDropdown1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>> {
        if (requestParameters.userContextInformation === null || requestParameters.userContextInformation === undefined) {
            throw new runtime.RequiredError('userContextInformation','Required parameter requestParameters.userContextInformation was null or undefined when calling getEnvironmentsForDropdown1.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling getEnvironmentsForDropdown1.');
        }

        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling getEnvironmentsForDropdown1.');
        }

        const queryParameters: any = {};

        if (requestParameters.userContextInformation !== undefined) {
            queryParameters['userContextInformation'] = requestParameters.userContextInformation;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/{tenantID}/{siteID}/{environmentID}/get-environments`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get Environments For Dropdown_1
     * Get Environments For Dropdown_1
     */
    async getEnvironmentsForDropdown1(requestParameters: orderRoutingTitleUiApiParams.GetEnvironmentsForDropdown1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse> {
        const response = await this.getEnvironmentsForDropdown1Raw(requestParameters, initOverrides);
        return await response.value();
    }

}
