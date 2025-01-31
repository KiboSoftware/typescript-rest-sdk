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
  APIErrorResponse,
  AbstractFilter,
  CustomDataListFilter,
  CustomDataValueFilter,
  LocationCriteriaSetFilter,
} from '../models';


export namespace orderRoutingFilterApiParams { 
    export interface DeleteFilter2Request {
        filterID: number;
        xVolTenant: number;
        xVolSite: number;
    }
    export interface GetFilterRequest {
        filterID: number;
        xVolTenant: number;
        xVolSite: number;
    }
    export interface SaveCriteriaSetFilterRequest {
        xVolTenant: number;
        xVolSite: number;
        locationCriteriaSetFilter: LocationCriteriaSetFilter;
    }
    export interface SaveCustomDataListFilterRequest {
        xVolTenant: number;
        xVolSite: number;
        customDataListFilter: CustomDataListFilter;
    }
    export interface SaveCustomDataValueFilterRequest {
        xVolTenant: number;
        xVolSite: number;
        customDataValueFilter: CustomDataValueFilter;
    }
    export interface TestFilterRequest {
        xVolTenant: number;
        xVolSite: number;
    }
    export interface TestSetFilterRequest {
        xVolTenant: number;
        xVolSite: number;
    }
}
/**
* OrderRoutingFilterApiService - interface
* 
* @export
* @interface OrderRoutingFilterApi
*/
export interface OrderRoutingFilterApiService {
    /**
    * Delete Filter_2
    * @summary Delete Filter_2
    * @param {number} filterID 
    * @param {number} xVolTenant Tenant
    * @param {number} xVolSite Site
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof OrderRoutingFilterApiInterface
    */
    deleteFilter2Raw(requestParameters: orderRoutingFilterApiParams.DeleteFilter2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Delete Filter_2
    * Delete Filter_2
    */
    deleteFilter2(requestParameters: orderRoutingFilterApiParams.DeleteFilter2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Get Filter
    * @summary Get Filter
    * @param {number} filterID 
    * @param {number} xVolTenant Tenant
    * @param {number} xVolSite Site
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof OrderRoutingFilterApiInterface
    */
    getFilterRaw(requestParameters: orderRoutingFilterApiParams.GetFilterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AbstractFilter>>;

    /**
    * Get Filter
    * Get Filter
    */
    getFilter(requestParameters: orderRoutingFilterApiParams.GetFilterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AbstractFilter>;

    /**
    * Save Criteria Set Filter
    * @summary Save Criteria Set Filter
    * @param {number} xVolTenant Tenant
    * @param {number} xVolSite Site
    * @param {LocationCriteriaSetFilter} locationCriteriaSetFilter 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof OrderRoutingFilterApiInterface
    */
    saveCriteriaSetFilterRaw(requestParameters: orderRoutingFilterApiParams.SaveCriteriaSetFilterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AbstractFilter>>;

    /**
    * Save Criteria Set Filter
    * Save Criteria Set Filter
    */
    saveCriteriaSetFilter(requestParameters: orderRoutingFilterApiParams.SaveCriteriaSetFilterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AbstractFilter>;

    /**
    * Save Custom Data List Filter
    * @summary Save Custom Data List Filter
    * @param {number} xVolTenant Tenant
    * @param {number} xVolSite Site
    * @param {CustomDataListFilter} customDataListFilter 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof OrderRoutingFilterApiInterface
    */
    saveCustomDataListFilterRaw(requestParameters: orderRoutingFilterApiParams.SaveCustomDataListFilterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AbstractFilter>>;

    /**
    * Save Custom Data List Filter
    * Save Custom Data List Filter
    */
    saveCustomDataListFilter(requestParameters: orderRoutingFilterApiParams.SaveCustomDataListFilterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AbstractFilter>;

    /**
    * Save Custom Data Value Filter
    * @summary Save Custom Data Value Filter
    * @param {number} xVolTenant Tenant
    * @param {number} xVolSite Site
    * @param {CustomDataValueFilter} customDataValueFilter 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof OrderRoutingFilterApiInterface
    */
    saveCustomDataValueFilterRaw(requestParameters: orderRoutingFilterApiParams.SaveCustomDataValueFilterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AbstractFilter>>;

    /**
    * Save Custom Data Value Filter
    * Save Custom Data Value Filter
    */
    saveCustomDataValueFilter(requestParameters: orderRoutingFilterApiParams.SaveCustomDataValueFilterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AbstractFilter>;

    /**
    * Test Filter
    * @summary Test Filter
    * @param {number} xVolTenant Tenant
    * @param {number} xVolSite Site
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof OrderRoutingFilterApiInterface
    */
    testFilterRaw(requestParameters: orderRoutingFilterApiParams.TestFilterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AbstractFilter>>;

    /**
    * Test Filter
    * Test Filter
    */
    testFilter(requestParameters: orderRoutingFilterApiParams.TestFilterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AbstractFilter>;

    /**
    * Test Set Filter
    * @summary Test Set Filter
    * @param {number} xVolTenant Tenant
    * @param {number} xVolSite Site
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof OrderRoutingFilterApiInterface
    */
    testSetFilterRaw(requestParameters: orderRoutingFilterApiParams.TestSetFilterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AbstractFilter>>;

    /**
    * Test Set Filter
    * Test Set Filter
    */
    testSetFilter(requestParameters: orderRoutingFilterApiParams.TestSetFilterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AbstractFilter>;

}


/**
 * 
 */
export class OrderRoutingFilterApi extends runtime.BaseAPI implements OrderRoutingFilterApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Delete Filter_2
     * Delete Filter_2
     */


    async deleteFilter2Raw(requestParameters: orderRoutingFilterApiParams.DeleteFilter2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.filterID === null || requestParameters.filterID === undefined) {
            throw new runtime.RequiredError('filterID','Required parameter requestParameters.filterID was null or undefined when calling deleteFilter2.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling deleteFilter2.');
        }

        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling deleteFilter2.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/orders/orderrouting/api/v1/filter/delete/{filterID}`.replace(`{${"filterID"}}`, encodeURIComponent(String(requestParameters.filterID))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete Filter_2
     * Delete Filter_2
     */
    async deleteFilter2(requestParameters: orderRoutingFilterApiParams.DeleteFilter2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteFilter2Raw(requestParameters, initOverrides);
    }

    /**
     * Get Filter
     * Get Filter
     */


    async getFilterRaw(requestParameters: orderRoutingFilterApiParams.GetFilterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AbstractFilter>> {
        if (requestParameters.filterID === null || requestParameters.filterID === undefined) {
            throw new runtime.RequiredError('filterID','Required parameter requestParameters.filterID was null or undefined when calling getFilter.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling getFilter.');
        }

        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling getFilter.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/orders/orderrouting/api/v1/filter/{filterID}`.replace(`{${"filterID"}}`, encodeURIComponent(String(requestParameters.filterID))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get Filter
     * Get Filter
     */
    async getFilter(requestParameters: orderRoutingFilterApiParams.GetFilterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AbstractFilter> {
        const response = await this.getFilterRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Save Criteria Set Filter
     * Save Criteria Set Filter
     */


    async saveCriteriaSetFilterRaw(requestParameters: orderRoutingFilterApiParams.SaveCriteriaSetFilterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AbstractFilter>> {
        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling saveCriteriaSetFilter.');
        }

        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling saveCriteriaSetFilter.');
        }

        if (requestParameters.locationCriteriaSetFilter === null || requestParameters.locationCriteriaSetFilter === undefined) {
            throw new runtime.RequiredError('locationCriteriaSetFilter','Required parameter requestParameters.locationCriteriaSetFilter was null or undefined when calling saveCriteriaSetFilter.');
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
            path: `/commerce/orders/orderrouting/api/v1/filter/criteriaSet`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.locationCriteriaSetFilter,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Save Criteria Set Filter
     * Save Criteria Set Filter
     */
    async saveCriteriaSetFilter(requestParameters: orderRoutingFilterApiParams.SaveCriteriaSetFilterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AbstractFilter> {
        const response = await this.saveCriteriaSetFilterRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Save Custom Data List Filter
     * Save Custom Data List Filter
     */


    async saveCustomDataListFilterRaw(requestParameters: orderRoutingFilterApiParams.SaveCustomDataListFilterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AbstractFilter>> {
        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling saveCustomDataListFilter.');
        }

        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling saveCustomDataListFilter.');
        }

        if (requestParameters.customDataListFilter === null || requestParameters.customDataListFilter === undefined) {
            throw new runtime.RequiredError('customDataListFilter','Required parameter requestParameters.customDataListFilter was null or undefined when calling saveCustomDataListFilter.');
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
            path: `/commerce/orders/orderrouting/api/v1/filter/customDataListFilter`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.customDataListFilter,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Save Custom Data List Filter
     * Save Custom Data List Filter
     */
    async saveCustomDataListFilter(requestParameters: orderRoutingFilterApiParams.SaveCustomDataListFilterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AbstractFilter> {
        const response = await this.saveCustomDataListFilterRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Save Custom Data Value Filter
     * Save Custom Data Value Filter
     */


    async saveCustomDataValueFilterRaw(requestParameters: orderRoutingFilterApiParams.SaveCustomDataValueFilterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AbstractFilter>> {
        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling saveCustomDataValueFilter.');
        }

        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling saveCustomDataValueFilter.');
        }

        if (requestParameters.customDataValueFilter === null || requestParameters.customDataValueFilter === undefined) {
            throw new runtime.RequiredError('customDataValueFilter','Required parameter requestParameters.customDataValueFilter was null or undefined when calling saveCustomDataValueFilter.');
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
            path: `/commerce/orders/orderrouting/api/v1/filter/customDataValueFilter`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.customDataValueFilter,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Save Custom Data Value Filter
     * Save Custom Data Value Filter
     */
    async saveCustomDataValueFilter(requestParameters: orderRoutingFilterApiParams.SaveCustomDataValueFilterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AbstractFilter> {
        const response = await this.saveCustomDataValueFilterRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Test Filter
     * Test Filter
     */


    async testFilterRaw(requestParameters: orderRoutingFilterApiParams.TestFilterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AbstractFilter>> {
        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling testFilter.');
        }

        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling testFilter.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/orders/orderrouting/api/v1/filter/testcriteria`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Test Filter
     * Test Filter
     */
    async testFilter(requestParameters: orderRoutingFilterApiParams.TestFilterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AbstractFilter> {
        const response = await this.testFilterRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Test Set Filter
     * Test Set Filter
     */


    async testSetFilterRaw(requestParameters: orderRoutingFilterApiParams.TestSetFilterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AbstractFilter>> {
        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling testSetFilter.');
        }

        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling testSetFilter.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/orders/orderrouting/api/v1/filter/testset`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Test Set Filter
     * Test Set Filter
     */
    async testSetFilter(requestParameters: orderRoutingFilterApiParams.TestSetFilterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AbstractFilter> {
        const response = await this.testSetFilterRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
