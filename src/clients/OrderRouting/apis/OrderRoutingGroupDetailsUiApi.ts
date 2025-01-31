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
  ChangeHoldStatusRequestData,
  ChangeLocationRankData,
  EditGroupDetailsForm,
  LocationsData,
  ModelAndView,
  UserContextInformation,
} from '../models';


export namespace orderRoutingGroupDetailsUiApiParams { 
    export interface ChangeLocationHoldStatusRequest {
        tenantID: number;
        xVolTenant: number;
        xVolSite: number;
        changeHoldStatusRequestData: ChangeHoldStatusRequestData;
    }
    export interface ChangeLocationRankRequest {
        tenantID: number;
        xVolTenant: number;
        xVolSite: number;
        changeLocationRankData: ChangeLocationRankData;
    }
    export interface ChangeLocationRanksRequest {
        tenantID: number;
        xVolTenant: number;
        xVolSite: number;
        changeLocationRankData: Array<ChangeLocationRankData>;
    }
    export interface GroupLocations1Request {
        tenantID: number;
        xVolTenant: number;
        xVolSite: number;
        locationsData: LocationsData;
    }
    export interface LinkLocationsRequest {
        tenantID: number;
        xVolTenant: number;
        xVolSite: number;
        locationsData: LocationsData;
    }
    export interface SaveEditGroupRequest {
        userContextInformation: UserContextInformation;
        xVolTenant: number;
        xVolSite: number;
        editGroupDetailsForm?: EditGroupDetailsForm;
    }
    export interface UngroupLocationsRequest {
        tenantID: number;
        xVolTenant: number;
        xVolSite: number;
        locationsData: LocationsData;
    }
    export interface UnlinkLocationsRequest {
        tenantID: number;
        xVolTenant: number;
        xVolSite: number;
        locationsData: LocationsData;
    }
}
/**
* OrderRoutingGroupDetailsUiApiService - interface
* 
* @export
* @interface OrderRoutingGroupDetailsUiApi
*/
export interface OrderRoutingGroupDetailsUiApiService {
    /**
    * Change Location Hold Status
    * @summary Change Location Hold Status
    * @param {number} tenantID 
    * @param {number} xVolTenant Tenant
    * @param {number} xVolSite Site
    * @param {ChangeHoldStatusRequestData} changeHoldStatusRequestData 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof OrderRoutingGroupDetailsUiApiInterface
    */
    changeLocationHoldStatusRaw(requestParameters: orderRoutingGroupDetailsUiApiParams.ChangeLocationHoldStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>>;

    /**
    * Change Location Hold Status
    * Change Location Hold Status
    */
    changeLocationHoldStatus(requestParameters: orderRoutingGroupDetailsUiApiParams.ChangeLocationHoldStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse>;

    /**
    * Change Location Rank
    * @summary Change Location Rank
    * @param {number} tenantID 
    * @param {number} xVolTenant Tenant
    * @param {number} xVolSite Site
    * @param {ChangeLocationRankData} changeLocationRankData 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof OrderRoutingGroupDetailsUiApiInterface
    */
    changeLocationRankRaw(requestParameters: orderRoutingGroupDetailsUiApiParams.ChangeLocationRankRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>>;

    /**
    * Change Location Rank
    * Change Location Rank
    */
    changeLocationRank(requestParameters: orderRoutingGroupDetailsUiApiParams.ChangeLocationRankRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse>;

    /**
    * Change Location Ranks
    * @summary Change Location Ranks
    * @param {number} tenantID 
    * @param {number} xVolTenant Tenant
    * @param {number} xVolSite Site
    * @param {Array<ChangeLocationRankData>} changeLocationRankData 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof OrderRoutingGroupDetailsUiApiInterface
    */
    changeLocationRanksRaw(requestParameters: orderRoutingGroupDetailsUiApiParams.ChangeLocationRanksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>>;

    /**
    * Change Location Ranks
    * Change Location Ranks
    */
    changeLocationRanks(requestParameters: orderRoutingGroupDetailsUiApiParams.ChangeLocationRanksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse>;

    /**
    * Group Locations_1
    * @summary Group Locations_1
    * @param {number} tenantID 
    * @param {number} xVolTenant Tenant
    * @param {number} xVolSite Site
    * @param {LocationsData} locationsData 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof OrderRoutingGroupDetailsUiApiInterface
    */
    groupLocations1Raw(requestParameters: orderRoutingGroupDetailsUiApiParams.GroupLocations1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>>;

    /**
    * Group Locations_1
    * Group Locations_1
    */
    groupLocations1(requestParameters: orderRoutingGroupDetailsUiApiParams.GroupLocations1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse>;

    /**
    * Link Locations
    * @summary Link Locations
    * @param {number} tenantID 
    * @param {number} xVolTenant Tenant
    * @param {number} xVolSite Site
    * @param {LocationsData} locationsData 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof OrderRoutingGroupDetailsUiApiInterface
    */
    linkLocationsRaw(requestParameters: orderRoutingGroupDetailsUiApiParams.LinkLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>>;

    /**
    * Link Locations
    * Link Locations
    */
    linkLocations(requestParameters: orderRoutingGroupDetailsUiApiParams.LinkLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse>;

    /**
    * Save Edit Group
    * @summary Save Edit Group
    * @param {UserContextInformation} userContextInformation 
    * @param {number} xVolTenant Tenant
    * @param {number} xVolSite Site
    * @param {EditGroupDetailsForm} [editGroupDetailsForm] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof OrderRoutingGroupDetailsUiApiInterface
    */
    saveEditGroupRaw(requestParameters: orderRoutingGroupDetailsUiApiParams.SaveEditGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>>;

    /**
    * Save Edit Group
    * Save Edit Group
    */
    saveEditGroup(requestParameters: orderRoutingGroupDetailsUiApiParams.SaveEditGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse>;

    /**
    * Ungroup Locations
    * @summary Ungroup Locations
    * @param {number} tenantID 
    * @param {number} xVolTenant Tenant
    * @param {number} xVolSite Site
    * @param {LocationsData} locationsData 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof OrderRoutingGroupDetailsUiApiInterface
    */
    ungroupLocationsRaw(requestParameters: orderRoutingGroupDetailsUiApiParams.UngroupLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>>;

    /**
    * Ungroup Locations
    * Ungroup Locations
    */
    ungroupLocations(requestParameters: orderRoutingGroupDetailsUiApiParams.UngroupLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse>;

    /**
    * Unlink Locations
    * @summary Unlink Locations
    * @param {number} tenantID 
    * @param {number} xVolTenant Tenant
    * @param {number} xVolSite Site
    * @param {LocationsData} locationsData 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof OrderRoutingGroupDetailsUiApiInterface
    */
    unlinkLocationsRaw(requestParameters: orderRoutingGroupDetailsUiApiParams.UnlinkLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>>;

    /**
    * Unlink Locations
    * Unlink Locations
    */
    unlinkLocations(requestParameters: orderRoutingGroupDetailsUiApiParams.UnlinkLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse>;

}


/**
 * 
 */
export class OrderRoutingGroupDetailsUiApi extends runtime.BaseAPI implements OrderRoutingGroupDetailsUiApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Change Location Hold Status
     * Change Location Hold Status
     */


    async changeLocationHoldStatusRaw(requestParameters: orderRoutingGroupDetailsUiApiParams.ChangeLocationHoldStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>> {
        if (requestParameters.tenantID === null || requestParameters.tenantID === undefined) {
            throw new runtime.RequiredError('tenantID','Required parameter requestParameters.tenantID was null or undefined when calling changeLocationHoldStatus.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling changeLocationHoldStatus.');
        }

        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling changeLocationHoldStatus.');
        }

        if (requestParameters.changeHoldStatusRequestData === null || requestParameters.changeHoldStatusRequestData === undefined) {
            throw new runtime.RequiredError('changeHoldStatusRequestData','Required parameter requestParameters.changeHoldStatusRequestData was null or undefined when calling changeLocationHoldStatus.');
        }

        const queryParameters: any = {};

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
            path: `/{tenantID}/{siteID}/{environmentID}/group-details/change-hold-status`.replace(`{${"tenantID"}}`, encodeURIComponent(String(requestParameters.tenantID))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.changeHoldStatusRequestData,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Change Location Hold Status
     * Change Location Hold Status
     */
    async changeLocationHoldStatus(requestParameters: orderRoutingGroupDetailsUiApiParams.ChangeLocationHoldStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse> {
        const response = await this.changeLocationHoldStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Change Location Rank
     * Change Location Rank
     */


    async changeLocationRankRaw(requestParameters: orderRoutingGroupDetailsUiApiParams.ChangeLocationRankRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>> {
        if (requestParameters.tenantID === null || requestParameters.tenantID === undefined) {
            throw new runtime.RequiredError('tenantID','Required parameter requestParameters.tenantID was null or undefined when calling changeLocationRank.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling changeLocationRank.');
        }

        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling changeLocationRank.');
        }

        if (requestParameters.changeLocationRankData === null || requestParameters.changeLocationRankData === undefined) {
            throw new runtime.RequiredError('changeLocationRankData','Required parameter requestParameters.changeLocationRankData was null or undefined when calling changeLocationRank.');
        }

        const queryParameters: any = {};

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
            path: `/{tenantID}/{siteID}/{environmentID}/group-details/changeLocationRank`.replace(`{${"tenantID"}}`, encodeURIComponent(String(requestParameters.tenantID))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.changeLocationRankData,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Change Location Rank
     * Change Location Rank
     */
    async changeLocationRank(requestParameters: orderRoutingGroupDetailsUiApiParams.ChangeLocationRankRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse> {
        const response = await this.changeLocationRankRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Change Location Ranks
     * Change Location Ranks
     */


    async changeLocationRanksRaw(requestParameters: orderRoutingGroupDetailsUiApiParams.ChangeLocationRanksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>> {
        if (requestParameters.tenantID === null || requestParameters.tenantID === undefined) {
            throw new runtime.RequiredError('tenantID','Required parameter requestParameters.tenantID was null or undefined when calling changeLocationRanks.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling changeLocationRanks.');
        }

        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling changeLocationRanks.');
        }

        if (requestParameters.changeLocationRankData === null || requestParameters.changeLocationRankData === undefined) {
            throw new runtime.RequiredError('changeLocationRankData','Required parameter requestParameters.changeLocationRankData was null or undefined when calling changeLocationRanks.');
        }

        const queryParameters: any = {};

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
            path: `/{tenantID}/{siteID}/{environmentID}/group-details/changeLocationRanks`.replace(`{${"tenantID"}}`, encodeURIComponent(String(requestParameters.tenantID))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.changeLocationRankData,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Change Location Ranks
     * Change Location Ranks
     */
    async changeLocationRanks(requestParameters: orderRoutingGroupDetailsUiApiParams.ChangeLocationRanksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse> {
        const response = await this.changeLocationRanksRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Group Locations_1
     * Group Locations_1
     */


    async groupLocations1Raw(requestParameters: orderRoutingGroupDetailsUiApiParams.GroupLocations1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>> {
        if (requestParameters.tenantID === null || requestParameters.tenantID === undefined) {
            throw new runtime.RequiredError('tenantID','Required parameter requestParameters.tenantID was null or undefined when calling groupLocations1.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling groupLocations1.');
        }

        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling groupLocations1.');
        }

        if (requestParameters.locationsData === null || requestParameters.locationsData === undefined) {
            throw new runtime.RequiredError('locationsData','Required parameter requestParameters.locationsData was null or undefined when calling groupLocations1.');
        }

        const queryParameters: any = {};

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
            path: `/{tenantID}/{siteID}/{environmentID}/group-details/groupLocations`.replace(`{${"tenantID"}}`, encodeURIComponent(String(requestParameters.tenantID))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.locationsData,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Group Locations_1
     * Group Locations_1
     */
    async groupLocations1(requestParameters: orderRoutingGroupDetailsUiApiParams.GroupLocations1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse> {
        const response = await this.groupLocations1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Link Locations
     * Link Locations
     */


    async linkLocationsRaw(requestParameters: orderRoutingGroupDetailsUiApiParams.LinkLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>> {
        if (requestParameters.tenantID === null || requestParameters.tenantID === undefined) {
            throw new runtime.RequiredError('tenantID','Required parameter requestParameters.tenantID was null or undefined when calling linkLocations.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling linkLocations.');
        }

        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling linkLocations.');
        }

        if (requestParameters.locationsData === null || requestParameters.locationsData === undefined) {
            throw new runtime.RequiredError('locationsData','Required parameter requestParameters.locationsData was null or undefined when calling linkLocations.');
        }

        const queryParameters: any = {};

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
            path: `/{tenantID}/{siteID}/{environmentID}/group-details/linkLocations`.replace(`{${"tenantID"}}`, encodeURIComponent(String(requestParameters.tenantID))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.locationsData,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Link Locations
     * Link Locations
     */
    async linkLocations(requestParameters: orderRoutingGroupDetailsUiApiParams.LinkLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse> {
        const response = await this.linkLocationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Save Edit Group
     * Save Edit Group
     */


    async saveEditGroupRaw(requestParameters: orderRoutingGroupDetailsUiApiParams.SaveEditGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>> {
        if (requestParameters.userContextInformation === null || requestParameters.userContextInformation === undefined) {
            throw new runtime.RequiredError('userContextInformation','Required parameter requestParameters.userContextInformation was null or undefined when calling saveEditGroup.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling saveEditGroup.');
        }

        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling saveEditGroup.');
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
            path: `/{tenantID}/{siteID}/{environmentID}/group-details/save-edit`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.editGroupDetailsForm,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Save Edit Group
     * Save Edit Group
     */
    async saveEditGroup(requestParameters: orderRoutingGroupDetailsUiApiParams.SaveEditGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse> {
        const response = await this.saveEditGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Ungroup Locations
     * Ungroup Locations
     */


    async ungroupLocationsRaw(requestParameters: orderRoutingGroupDetailsUiApiParams.UngroupLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>> {
        if (requestParameters.tenantID === null || requestParameters.tenantID === undefined) {
            throw new runtime.RequiredError('tenantID','Required parameter requestParameters.tenantID was null or undefined when calling ungroupLocations.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling ungroupLocations.');
        }

        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling ungroupLocations.');
        }

        if (requestParameters.locationsData === null || requestParameters.locationsData === undefined) {
            throw new runtime.RequiredError('locationsData','Required parameter requestParameters.locationsData was null or undefined when calling ungroupLocations.');
        }

        const queryParameters: any = {};

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
            path: `/{tenantID}/{siteID}/{environmentID}/group-details/ungroupLocations`.replace(`{${"tenantID"}}`, encodeURIComponent(String(requestParameters.tenantID))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.locationsData,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Ungroup Locations
     * Ungroup Locations
     */
    async ungroupLocations(requestParameters: orderRoutingGroupDetailsUiApiParams.UngroupLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse> {
        const response = await this.ungroupLocationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Unlink Locations
     * Unlink Locations
     */


    async unlinkLocationsRaw(requestParameters: orderRoutingGroupDetailsUiApiParams.UnlinkLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AjaxResponse>> {
        if (requestParameters.tenantID === null || requestParameters.tenantID === undefined) {
            throw new runtime.RequiredError('tenantID','Required parameter requestParameters.tenantID was null or undefined when calling unlinkLocations.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling unlinkLocations.');
        }

        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling unlinkLocations.');
        }

        if (requestParameters.locationsData === null || requestParameters.locationsData === undefined) {
            throw new runtime.RequiredError('locationsData','Required parameter requestParameters.locationsData was null or undefined when calling unlinkLocations.');
        }

        const queryParameters: any = {};

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
            path: `/{tenantID}/{siteID}/{environmentID}/group-details/unlinkLocations`.replace(`{${"tenantID"}}`, encodeURIComponent(String(requestParameters.tenantID))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.locationsData,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Unlink Locations
     * Unlink Locations
     */
    async unlinkLocations(requestParameters: orderRoutingGroupDetailsUiApiParams.UnlinkLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AjaxResponse> {
        const response = await this.unlinkLocationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
