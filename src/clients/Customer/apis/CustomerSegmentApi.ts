/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Customer Service
 * OpenAPI Spec for Kibo Customer Service
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
  CustomerCustomerSegment,
  CustomerSegmentCollection,
} from '../models';


export namespace customerSegmentApiParams { 
    export interface AddSegmentRequest {
        responseFields?: string;
        customerCustomerSegment?: CustomerCustomerSegment;
    }
    export interface AddSegmentAccountsRequest {
        id: number;
        responseFields?: string;
        requestBody?: Array<number>;
    }
    export interface DeleteSegmentRequest {
        id: number;
    }
    export interface GetSegmentRequest {
        id: number;
        responseFields?: string;
    }
    export interface GetSegmentsRequest {
        startIndex?: number;
        pageSize?: number;
        sortBy?: string;
        filter?: string;
        responseFields?: string;
    }
    export interface RemoveSegmentAccountRequest {
        id: number;
        accountId: number;
    }
    export interface UpdateSegmentRequest {
        id: number;
        responseFields?: string;
        customerCustomerSegment?: CustomerCustomerSegment;
    }
}
/**
* CustomerSegmentApiService - interface
* 
* @export
* @interface CustomerSegmentApi
*/
export interface CustomerSegmentApiService {
    /**
    * Creates a new segment. Merchants create segments of customers, for example,   to offer discounts to particular groups or assign VIP status to a set of customers.
    * @summary Adds Segment
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CustomerCustomerSegment} [customerCustomerSegment] Name of the customer segment to create.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CustomerSegmentApiInterface
    */
    addSegmentRaw(requestParameters: customerSegmentApiParams.AddSegmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerCustomerSegment>>;

    /**
    * Creates a new segment. Merchants create segments of customers, for example,   to offer discounts to particular groups or assign VIP status to a set of customers.
    * Adds Segment
    */
    addSegment(requestParameters: customerSegmentApiParams.AddSegmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerCustomerSegment>;

    /**
    * Adds segments to an account.
    * @summary Add Segments Accounts
    * @param {number} id Unique identifer of the segment.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {Array<number>} [requestBody] Unique identifiers of the accounts.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CustomerSegmentApiInterface
    */
    addSegmentAccountsRaw(requestParameters: customerSegmentApiParams.AddSegmentAccountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Adds segments to an account.
    * Add Segments Accounts
    */
    addSegmentAccounts(requestParameters: customerSegmentApiParams.AddSegmentAccountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Deletes a segement specified by its unique code. Note that the group is deleted in all accounts that contain this segment.
    * @summary Delete Segment
    * @param {number} id 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CustomerSegmentApiInterface
    */
    deleteSegmentRaw(requestParameters: customerSegmentApiParams.DeleteSegmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Deletes a segement specified by its unique code. Note that the group is deleted in all accounts that contain this segment.
    * Delete Segment
    */
    deleteSegment(requestParameters: customerSegmentApiParams.DeleteSegmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Retrieves a segment specified the segment Id.
    * @summary Get Segment
    * @param {number} id 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CustomerSegmentApiInterface
    */
    getSegmentRaw(requestParameters: customerSegmentApiParams.GetSegmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerCustomerSegment>>;

    /**
    * Retrieves a segment specified the segment Id.
    * Get Segment
    */
    getSegment(requestParameters: customerSegmentApiParams.GetSegmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerCustomerSegment>;

    /**
    * Retrieves a list of all segments defined for the site according to any specified filter criteria and sort options.
    * @summary Get Segments
    * @param {number} [startIndex] Used to page results from a query. Indicates the zero-based offset in the complete result set where the returned entities begin.               For example, with a PageSize of 25, to get the 51st through the 75th items, startIndex&#x3D;3. The default value is 0. Optional.
    * @param {number} [pageSize] Used to page results from a query.               Indicates the maximum number of entities to return from a query. The default value is 20 and the maximum value is 200. Optional.
    * @param {string} [sortBy] The element to sort the results by and the order in which the results appear. Either ascending (a-z) or descending (z-a) order. Optional.
    * @param {string} [filter] A set of filter expressions representing the search parameters for a query: eq&#x3D;equals, ne&#x3D;not equals, gt&#x3D;greater than, lt &#x3D; less than or equals, gt &#x3D; greater than or equals, lt &#x3D; less than or equals, sw &#x3D; starts with, or cont &#x3D; contains. Optional.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CustomerSegmentApiInterface
    */
    getSegmentsRaw(requestParameters: customerSegmentApiParams.GetSegmentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerSegmentCollection>>;

    /**
    * Retrieves a list of all segments defined for the site according to any specified filter criteria and sort options.
    * Get Segments
    */
    getSegments(requestParameters: customerSegmentApiParams.GetSegmentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerSegmentCollection>;

    /**
    * Removes single account from a segment.
    * @summary Remove Segment Account
    * @param {number} id Unique identifer of the segment.
    * @param {number} accountId Unique identifiers of the account.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CustomerSegmentApiInterface
    */
    removeSegmentAccountRaw(requestParameters: customerSegmentApiParams.RemoveSegmentAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Removes single account from a segment.
    * Remove Segment Account
    */
    removeSegmentAccount(requestParameters: customerSegmentApiParams.RemoveSegmentAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Update the code, name, or description of an existing segment.
    * @summary Update Segment
    * @param {number} id 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CustomerCustomerSegment} [customerCustomerSegment] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CustomerSegmentApiInterface
    */
    updateSegmentRaw(requestParameters: customerSegmentApiParams.UpdateSegmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerCustomerSegment>>;

    /**
    * Update the code, name, or description of an existing segment.
    * Update Segment
    */
    updateSegment(requestParameters: customerSegmentApiParams.UpdateSegmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerCustomerSegment>;

}


/**
 * 
 */
export class CustomerSegmentApi extends runtime.BaseAPI implements CustomerSegmentApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Creates a new segment. Merchants create segments of customers, for example,   to offer discounts to particular groups or assign VIP status to a set of customers.
     * Adds Segment
     */


    async addSegmentRaw(requestParameters: customerSegmentApiParams.AddSegmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerCustomerSegment>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/customer/segments`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.customerCustomerSegment,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates a new segment. Merchants create segments of customers, for example,   to offer discounts to particular groups or assign VIP status to a set of customers.
     * Adds Segment
     */
    async addSegment(requestParameters: customerSegmentApiParams.AddSegmentRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerCustomerSegment> {
        const response = await this.addSegmentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Adds segments to an account.
     * Add Segments Accounts
     */


    async addSegmentAccountsRaw(requestParameters: customerSegmentApiParams.AddSegmentAccountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling addSegmentAccounts.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/customer/segments/{id}/accounts`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.requestBody,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Adds segments to an account.
     * Add Segments Accounts
     */
    async addSegmentAccounts(requestParameters: customerSegmentApiParams.AddSegmentAccountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.addSegmentAccountsRaw(requestParameters, initOverrides);
    }

    /**
     * Deletes a segement specified by its unique code. Note that the group is deleted in all accounts that contain this segment.
     * Delete Segment
     */


    async deleteSegmentRaw(requestParameters: customerSegmentApiParams.DeleteSegmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteSegment.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/customer/segments/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a segement specified by its unique code. Note that the group is deleted in all accounts that contain this segment.
     * Delete Segment
     */
    async deleteSegment(requestParameters: customerSegmentApiParams.DeleteSegmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteSegmentRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves a segment specified the segment Id.
     * Get Segment
     */


    async getSegmentRaw(requestParameters: customerSegmentApiParams.GetSegmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerCustomerSegment>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getSegment.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/customer/segments/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a segment specified the segment Id.
     * Get Segment
     */
    async getSegment(requestParameters: customerSegmentApiParams.GetSegmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerCustomerSegment> {
        const response = await this.getSegmentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a list of all segments defined for the site according to any specified filter criteria and sort options.
     * Get Segments
     */


    async getSegmentsRaw(requestParameters: customerSegmentApiParams.GetSegmentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerSegmentCollection>> {
        const queryParameters: any = {};

        if (requestParameters.startIndex !== undefined) {
            queryParameters['startIndex'] = requestParameters.startIndex;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.sortBy !== undefined) {
            queryParameters['sortBy'] = requestParameters.sortBy;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/customer/segments`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a list of all segments defined for the site according to any specified filter criteria and sort options.
     * Get Segments
     */
    async getSegments(requestParameters: customerSegmentApiParams.GetSegmentsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerSegmentCollection> {
        const response = await this.getSegmentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Removes single account from a segment.
     * Remove Segment Account
     */


    async removeSegmentAccountRaw(requestParameters: customerSegmentApiParams.RemoveSegmentAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling removeSegmentAccount.');
        }

        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling removeSegmentAccount.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/customer/segments/{id}/accounts/{accountId}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"accountId"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Removes single account from a segment.
     * Remove Segment Account
     */
    async removeSegmentAccount(requestParameters: customerSegmentApiParams.RemoveSegmentAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.removeSegmentAccountRaw(requestParameters, initOverrides);
    }

    /**
     * Update the code, name, or description of an existing segment.
     * Update Segment
     */


    async updateSegmentRaw(requestParameters: customerSegmentApiParams.UpdateSegmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerCustomerSegment>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateSegment.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/customer/segments/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.customerCustomerSegment,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update the code, name, or description of an existing segment.
     * Update Segment
     */
    async updateSegment(requestParameters: customerSegmentApiParams.UpdateSegmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerCustomerSegment> {
        const response = await this.updateSegmentRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
