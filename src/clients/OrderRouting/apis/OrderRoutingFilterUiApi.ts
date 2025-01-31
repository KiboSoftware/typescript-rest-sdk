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
  AddFilterToGroupsData,
  AjaxResponse,
  FilterForm,
  ModelAndView,
  PostCreateFromGroupPageRequest,
  UserContextInformation,
} from '../models';


export namespace orderRoutingFilterUiApiParams { 
    export interface AddFilterToGroupsRequest {
        userContextInformation: UserContextInformation;
        xVolTenant: number;
        xVolSite: number;
        addFilterToGroupsData: AddFilterToGroupsData;
    }
    export interface DeleteFilter1Request {
        filterID: number;
        userContextInformation: UserContextInformation;
        xVolTenant: number;
        xVolSite: number;
    }
    export interface OpenDeleteFilterConfirmationRequest {
        filterID: number;
        userContextInformation: UserContextInformation;
        xVolTenant: number;
        xVolSite: number;
    }
    export interface PostCreateFromGroupPageOperationRequest {
        userContextInformation: UserContextInformation;
        xVolTenant: number;
        xVolSite: number;
        postCreateFromGroupPageRequest?: PostCreateFromGroupPageRequest;
    }
    export interface PostFilterCreateRequest {
        userContextInformation: UserContextInformation;
        xVolTenant: number;
        xVolSite: number;
        filterForm?: FilterForm;
    }
    export interface PostFilterCreate1Request {
        userContextInformation: UserContextInformation;
        xVolTenant: number;
        xVolSite: number;
        filterForm?: FilterForm;
    }
    export interface PostFilterCreate2Request {
        userContextInformation: UserContextInformation;
        xVolTenant: number;
        xVolSite: number;
        filterForm?: FilterForm;
    }
    export interface RemoveFilterFromGroup1Request {
        groupID: number;
        filterID: number;
        userContextInformation: UserContextInformation;
        xVolTenant: number;
        xVolSite: number;
    }
    export interface RemoveFilterFromGroupsRequest {
        userContextInformation: UserContextInformation;
        xVolTenant: number;
        xVolSite: number;
        addFilterToGroupsData: AddFilterToGroupsData;
    }
}
/**
* OrderRoutingFilterUiApiService - interface
* 
* @export
* @interface OrderRoutingFilterUiApi
*/
export interface OrderRoutingFilterUiApiService {
    /**
    * Add Filter To Groups
    * @summary Add Filter To Groups
    * @param {UserContextInformation} userContextInformation 
    * @param {number} xVolTenant Tenant
    * @param {number} xVolSite Site
    * @param {AddFilterToGroupsData} addFilterToGroupsData 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof OrderRoutingFilterUiApiInterface
    */
    addFilterToGroupsRaw(requestParameters: orderRoutingFilterUiApiParams.AddFilterToGroupsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>>;

    /**
    * Add Filter To Groups
    * Add Filter To Groups
    */
    addFilterToGroups(requestParameters: orderRoutingFilterUiApiParams.AddFilterToGroupsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse>;

    /**
    * Delete Filter_1
    * @summary Delete Filter_1
    * @param {number} filterID 
    * @param {UserContextInformation} userContextInformation 
    * @param {number} xVolTenant Tenant
    * @param {number} xVolSite Site
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof OrderRoutingFilterUiApiInterface
    */
    deleteFilter1Raw(requestParameters: orderRoutingFilterUiApiParams.DeleteFilter1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>>;

    /**
    * Delete Filter_1
    * Delete Filter_1
    */
    deleteFilter1(requestParameters: orderRoutingFilterUiApiParams.DeleteFilter1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse>;

    /**
    * Open Delete Filter Confirmation
    * @summary Open Delete Filter Confirmation
    * @param {number} filterID 
    * @param {UserContextInformation} userContextInformation 
    * @param {number} xVolTenant Tenant
    * @param {number} xVolSite Site
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof OrderRoutingFilterUiApiInterface
    */
    openDeleteFilterConfirmationRaw(requestParameters: orderRoutingFilterUiApiParams.OpenDeleteFilterConfirmationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>>;

    /**
    * Open Delete Filter Confirmation
    * Open Delete Filter Confirmation
    */
    openDeleteFilterConfirmation(requestParameters: orderRoutingFilterUiApiParams.OpenDeleteFilterConfirmationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse>;

    /**
    * Post Create From Group Page
    * @summary Post Create From Group Page
    * @param {UserContextInformation} userContextInformation 
    * @param {number} xVolTenant Tenant
    * @param {number} xVolSite Site
    * @param {PostCreateFromGroupPageRequest} [postCreateFromGroupPageRequest] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof OrderRoutingFilterUiApiInterface
    */
    postCreateFromGroupPageRaw(requestParameters: orderRoutingFilterUiApiParams.PostCreateFromGroupPageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>>;

    /**
    * Post Create From Group Page
    * Post Create From Group Page
    */
    postCreateFromGroupPage(requestParameters: orderRoutingFilterUiApiParams.PostCreateFromGroupPageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse>;

    /**
    * Post Filter Create
    * @summary Post Filter Create
    * @param {UserContextInformation} userContextInformation 
    * @param {number} xVolTenant Tenant
    * @param {number} xVolSite Site
    * @param {FilterForm} [filterForm] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof OrderRoutingFilterUiApiInterface
    */
    postFilterCreateRaw(requestParameters: orderRoutingFilterUiApiParams.PostFilterCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>>;

    /**
    * Post Filter Create
    * Post Filter Create
    */
    postFilterCreate(requestParameters: orderRoutingFilterUiApiParams.PostFilterCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse>;

    /**
    * Post Filter Create_1
    * @summary Post Filter Create_1
    * @param {UserContextInformation} userContextInformation 
    * @param {number} xVolTenant Tenant
    * @param {number} xVolSite Site
    * @param {FilterForm} [filterForm] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof OrderRoutingFilterUiApiInterface
    */
    postFilterCreate1Raw(requestParameters: orderRoutingFilterUiApiParams.PostFilterCreate1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>>;

    /**
    * Post Filter Create_1
    * Post Filter Create_1
    */
    postFilterCreate1(requestParameters: orderRoutingFilterUiApiParams.PostFilterCreate1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse>;

    /**
    * Post Filter Create_2
    * @summary Post Filter Create_2
    * @param {UserContextInformation} userContextInformation 
    * @param {number} xVolTenant Tenant
    * @param {number} xVolSite Site
    * @param {FilterForm} [filterForm] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof OrderRoutingFilterUiApiInterface
    */
    postFilterCreate2Raw(requestParameters: orderRoutingFilterUiApiParams.PostFilterCreate2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>>;

    /**
    * Post Filter Create_2
    * Post Filter Create_2
    */
    postFilterCreate2(requestParameters: orderRoutingFilterUiApiParams.PostFilterCreate2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse>;

    /**
    * Remove Filter From Group_1
    * @summary Remove Filter From Group_1
    * @param {number} groupID 
    * @param {number} filterID 
    * @param {UserContextInformation} userContextInformation 
    * @param {number} xVolTenant Tenant
    * @param {number} xVolSite Site
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof OrderRoutingFilterUiApiInterface
    */
    removeFilterFromGroup1Raw(requestParameters: orderRoutingFilterUiApiParams.RemoveFilterFromGroup1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>>;

    /**
    * Remove Filter From Group_1
    * Remove Filter From Group_1
    */
    removeFilterFromGroup1(requestParameters: orderRoutingFilterUiApiParams.RemoveFilterFromGroup1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse>;

    /**
    * Remove Filter From Groups
    * @summary Remove Filter From Groups
    * @param {UserContextInformation} userContextInformation 
    * @param {number} xVolTenant Tenant
    * @param {number} xVolSite Site
    * @param {AddFilterToGroupsData} addFilterToGroupsData 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof OrderRoutingFilterUiApiInterface
    */
    removeFilterFromGroupsRaw(requestParameters: orderRoutingFilterUiApiParams.RemoveFilterFromGroupsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>>;

    /**
    * Remove Filter From Groups
    * Remove Filter From Groups
    */
    removeFilterFromGroups(requestParameters: orderRoutingFilterUiApiParams.RemoveFilterFromGroupsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse>;

}


/**
 * 
 */
export class OrderRoutingFilterUiApi extends runtime.BaseAPI implements OrderRoutingFilterUiApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Add Filter To Groups
     * Add Filter To Groups
     */


    async addFilterToGroupsRaw(requestParameters: orderRoutingFilterUiApiParams.AddFilterToGroupsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>> {
        if (requestParameters.userContextInformation === null || requestParameters.userContextInformation === undefined) {
            throw new runtime.RequiredError('userContextInformation','Required parameter requestParameters.userContextInformation was null or undefined when calling addFilterToGroups.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling addFilterToGroups.');
        }

        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling addFilterToGroups.');
        }

        if (requestParameters.addFilterToGroupsData === null || requestParameters.addFilterToGroupsData === undefined) {
            throw new runtime.RequiredError('addFilterToGroupsData','Required parameter requestParameters.addFilterToGroupsData was null or undefined when calling addFilterToGroups.');
        }

        const queryParameters: any = {};

        if (requestParameters.userContextInformation !== undefined) {
            queryParameters['userContextInformation'] = requestParameters.userContextInformation;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/{tenantID}/{siteID}/{environmentID}/filter/add-filter-to-groups`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.addFilterToGroupsData,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Add Filter To Groups
     * Add Filter To Groups
     */
    async addFilterToGroups(requestParameters: orderRoutingFilterUiApiParams.AddFilterToGroupsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse> {
        const response = await this.addFilterToGroupsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete Filter_1
     * Delete Filter_1
     */


    async deleteFilter1Raw(requestParameters: orderRoutingFilterUiApiParams.DeleteFilter1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>> {
        if (requestParameters.filterID === null || requestParameters.filterID === undefined) {
            throw new runtime.RequiredError('filterID','Required parameter requestParameters.filterID was null or undefined when calling deleteFilter1.');
        }

        if (requestParameters.userContextInformation === null || requestParameters.userContextInformation === undefined) {
            throw new runtime.RequiredError('userContextInformation','Required parameter requestParameters.userContextInformation was null or undefined when calling deleteFilter1.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling deleteFilter1.');
        }

        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling deleteFilter1.');
        }

        const queryParameters: any = {};

        if (requestParameters.filterID !== undefined) {
            queryParameters['filterID'] = requestParameters.filterID;
        }

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
            path: `/{tenantID}/{siteID}/{environmentID}/filter/delete`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Delete Filter_1
     * Delete Filter_1
     */
    async deleteFilter1(requestParameters: orderRoutingFilterUiApiParams.DeleteFilter1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse> {
        const response = await this.deleteFilter1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Open Delete Filter Confirmation
     * Open Delete Filter Confirmation
     */


    async openDeleteFilterConfirmationRaw(requestParameters: orderRoutingFilterUiApiParams.OpenDeleteFilterConfirmationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>> {
        if (requestParameters.filterID === null || requestParameters.filterID === undefined) {
            throw new runtime.RequiredError('filterID','Required parameter requestParameters.filterID was null or undefined when calling openDeleteFilterConfirmation.');
        }

        if (requestParameters.userContextInformation === null || requestParameters.userContextInformation === undefined) {
            throw new runtime.RequiredError('userContextInformation','Required parameter requestParameters.userContextInformation was null or undefined when calling openDeleteFilterConfirmation.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling openDeleteFilterConfirmation.');
        }

        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling openDeleteFilterConfirmation.');
        }

        const queryParameters: any = {};

        if (requestParameters.filterID !== undefined) {
            queryParameters['filterID'] = requestParameters.filterID;
        }

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
            path: `/{tenantID}/{siteID}/{environmentID}/filter/delete-confirmation`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Open Delete Filter Confirmation
     * Open Delete Filter Confirmation
     */
    async openDeleteFilterConfirmation(requestParameters: orderRoutingFilterUiApiParams.OpenDeleteFilterConfirmationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse> {
        const response = await this.openDeleteFilterConfirmationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Post Create From Group Page
     * Post Create From Group Page
     */


    async postCreateFromGroupPageRaw(requestParameters: orderRoutingFilterUiApiParams.PostCreateFromGroupPageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>> {
        if (requestParameters.userContextInformation === null || requestParameters.userContextInformation === undefined) {
            throw new runtime.RequiredError('userContextInformation','Required parameter requestParameters.userContextInformation was null or undefined when calling postCreateFromGroupPage.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling postCreateFromGroupPage.');
        }

        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling postCreateFromGroupPage.');
        }

        const queryParameters: any = {};

        if (requestParameters.userContextInformation !== undefined) {
            queryParameters['userContextInformation'] = requestParameters.userContextInformation;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/{tenantID}/{siteID}/{environmentID}/filter/create-from-group-page`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.postCreateFromGroupPageRequest,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Post Create From Group Page
     * Post Create From Group Page
     */
    async postCreateFromGroupPage(requestParameters: orderRoutingFilterUiApiParams.PostCreateFromGroupPageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse> {
        const response = await this.postCreateFromGroupPageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Post Filter Create
     * Post Filter Create
     */


    async postFilterCreateRaw(requestParameters: orderRoutingFilterUiApiParams.PostFilterCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>> {
        if (requestParameters.userContextInformation === null || requestParameters.userContextInformation === undefined) {
            throw new runtime.RequiredError('userContextInformation','Required parameter requestParameters.userContextInformation was null or undefined when calling postFilterCreate.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling postFilterCreate.');
        }

        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling postFilterCreate.');
        }

        const queryParameters: any = {};

        if (requestParameters.userContextInformation !== undefined) {
            queryParameters['userContextInformation'] = requestParameters.userContextInformation;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/{tenantID}/{siteID}/{environmentID}/filter/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.filterForm,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Post Filter Create
     * Post Filter Create
     */
    async postFilterCreate(requestParameters: orderRoutingFilterUiApiParams.PostFilterCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse> {
        const response = await this.postFilterCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Post Filter Create_1
     * Post Filter Create_1
     */


    async postFilterCreate1Raw(requestParameters: orderRoutingFilterUiApiParams.PostFilterCreate1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>> {
        if (requestParameters.userContextInformation === null || requestParameters.userContextInformation === undefined) {
            throw new runtime.RequiredError('userContextInformation','Required parameter requestParameters.userContextInformation was null or undefined when calling postFilterCreate1.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling postFilterCreate1.');
        }

        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling postFilterCreate1.');
        }

        const queryParameters: any = {};

        if (requestParameters.userContextInformation !== undefined) {
            queryParameters['userContextInformation'] = requestParameters.userContextInformation;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/{tenantID}/{siteID}/{environmentID}/filter/edit/*`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.filterForm,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Post Filter Create_1
     * Post Filter Create_1
     */
    async postFilterCreate1(requestParameters: orderRoutingFilterUiApiParams.PostFilterCreate1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse> {
        const response = await this.postFilterCreate1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Post Filter Create_2
     * Post Filter Create_2
     */


    async postFilterCreate2Raw(requestParameters: orderRoutingFilterUiApiParams.PostFilterCreate2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>> {
        if (requestParameters.userContextInformation === null || requestParameters.userContextInformation === undefined) {
            throw new runtime.RequiredError('userContextInformation','Required parameter requestParameters.userContextInformation was null or undefined when calling postFilterCreate2.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling postFilterCreate2.');
        }

        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling postFilterCreate2.');
        }

        const queryParameters: any = {};

        if (requestParameters.userContextInformation !== undefined) {
            queryParameters['userContextInformation'] = requestParameters.userContextInformation;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/{tenantID}/{siteID}/{environmentID}/filter/copy/*`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.filterForm,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Post Filter Create_2
     * Post Filter Create_2
     */
    async postFilterCreate2(requestParameters: orderRoutingFilterUiApiParams.PostFilterCreate2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse> {
        const response = await this.postFilterCreate2Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Remove Filter From Group_1
     * Remove Filter From Group_1
     */


    async removeFilterFromGroup1Raw(requestParameters: orderRoutingFilterUiApiParams.RemoveFilterFromGroup1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>> {
        if (requestParameters.groupID === null || requestParameters.groupID === undefined) {
            throw new runtime.RequiredError('groupID','Required parameter requestParameters.groupID was null or undefined when calling removeFilterFromGroup1.');
        }

        if (requestParameters.filterID === null || requestParameters.filterID === undefined) {
            throw new runtime.RequiredError('filterID','Required parameter requestParameters.filterID was null or undefined when calling removeFilterFromGroup1.');
        }

        if (requestParameters.userContextInformation === null || requestParameters.userContextInformation === undefined) {
            throw new runtime.RequiredError('userContextInformation','Required parameter requestParameters.userContextInformation was null or undefined when calling removeFilterFromGroup1.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling removeFilterFromGroup1.');
        }

        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling removeFilterFromGroup1.');
        }

        const queryParameters: any = {};

        if (requestParameters.groupID !== undefined) {
            queryParameters['groupID'] = requestParameters.groupID;
        }

        if (requestParameters.filterID !== undefined) {
            queryParameters['filterID'] = requestParameters.filterID;
        }

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
            path: `/{tenantID}/{siteID}/{environmentID}/filter/remove-filter-from-group`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Remove Filter From Group_1
     * Remove Filter From Group_1
     */
    async removeFilterFromGroup1(requestParameters: orderRoutingFilterUiApiParams.RemoveFilterFromGroup1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse> {
        const response = await this.removeFilterFromGroup1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Remove Filter From Groups
     * Remove Filter From Groups
     */


    async removeFilterFromGroupsRaw(requestParameters: orderRoutingFilterUiApiParams.RemoveFilterFromGroupsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>> {
        if (requestParameters.userContextInformation === null || requestParameters.userContextInformation === undefined) {
            throw new runtime.RequiredError('userContextInformation','Required parameter requestParameters.userContextInformation was null or undefined when calling removeFilterFromGroups.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling removeFilterFromGroups.');
        }

        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling removeFilterFromGroups.');
        }

        if (requestParameters.addFilterToGroupsData === null || requestParameters.addFilterToGroupsData === undefined) {
            throw new runtime.RequiredError('addFilterToGroupsData','Required parameter requestParameters.addFilterToGroupsData was null or undefined when calling removeFilterFromGroups.');
        }

        const queryParameters: any = {};

        if (requestParameters.userContextInformation !== undefined) {
            queryParameters['userContextInformation'] = requestParameters.userContextInformation;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/{tenantID}/{siteID}/{environmentID}/filter/remove-filter-from-groups`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.addFilterToGroupsData,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Remove Filter From Groups
     * Remove Filter From Groups
     */
    async removeFilterFromGroups(requestParameters: orderRoutingFilterUiApiParams.RemoveFilterFromGroupsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse> {
        const response = await this.removeFilterFromGroupsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
