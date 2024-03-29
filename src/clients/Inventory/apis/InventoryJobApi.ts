/* tslint:disable */
/* eslint-disable */
/**
 * Inventory
 * Swagger JSON for inventory apis
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
  AdjustFutureDate404Response,
  JobIDResponse,
  JobQueueResponse,
} from '../models';


export namespace inventoryJobApiParams { 
    export interface DeleteAllOldInventoryRequest {
        months: number;
    }
    export interface DeleteOldInventoryRequest {
        months: number;
    }
    export interface GetJobRequest {
        jobID: number;
    }
    export interface GetJobsRequest {
        locationCode?: string;
        limit?: number;
        owner?: string;
        types?: Array<GetJobsTypesEnum>;
        originalFilename?: string;
    }
}
/**
* InventoryJobApiService - interface
* 
* @export
* @interface InventoryJobApi
*/
export interface InventoryJobApiService {
    /**
    * Deletes older records from inventory table of all silos
    * @summary Delete All Old Inventory
    * @param {number} months The x months before which we want the records to get deleted
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof InventoryJobApiInterface
    */
    deleteAllOldInventoryRaw(requestParameters: inventoryJobApiParams.DeleteAllOldInventoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<JobIDResponse>>>;

    /**
    * Deletes older records from inventory table of all silos
    * Delete All Old Inventory
    */
    deleteAllOldInventory(requestParameters: inventoryJobApiParams.DeleteAllOldInventoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<JobIDResponse>>;

    /**
    * Deletes older records from inventory table
    * @summary Delete Old Inventory
    * @param {number} months The x months before which we want the records to get deleted
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof InventoryJobApiInterface
    */
    deleteOldInventoryRaw(requestParameters: inventoryJobApiParams.DeleteOldInventoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JobIDResponse>>;

    /**
    * Deletes older records from inventory table
    * Delete Old Inventory
    */
    deleteOldInventory(requestParameters: inventoryJobApiParams.DeleteOldInventoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JobIDResponse>;

    /**
    * Get the specified job
    * @summary Get Job
    * @param {number} jobID Id of bin to get
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof InventoryJobApiInterface
    */
    getJobRaw(requestParameters: inventoryJobApiParams.GetJobRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JobQueueResponse>>;

    /**
    * Get the specified job
    * Get Job
    */
    getJob(requestParameters: inventoryJobApiParams.GetJobRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JobQueueResponse>;

    /**
    * Get the requested jobs
    * @summary Get Jobs
    * @param {string} [locationCode] Tenant specified unique Identifier of the owning location
    * @param {number} [limit] The maximum number of results to return, defaults to 100 for most
    * @param {string} [owner] User that owns the job
    * @param {Array<'REFRESH' | 'ADJUST' | 'RELEASE_SHIPMENTS' | 'CREATE_PICK_WAVE' | 'CLOSE_PICK_WAVE' | 'PUT_AWAY_FILE' | 'SHORT_PICK_ERROR' | 'BIN_AUDIT_START' | 'BIN_AUDIT_COMPLETION' | 'CREATE_BIN_AUDIT' | 'RELEASE_PENDING_ITEMS'>} [types] Type of the Job Queue Request
    * @param {string} [originalFilename] The full name of the file that was picked up at the secure droppoint server before being split up by location.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof InventoryJobApiInterface
    */
    getJobsRaw(requestParameters: inventoryJobApiParams.GetJobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<JobQueueResponse>>>;

    /**
    * Get the requested jobs
    * Get Jobs
    */
    getJobs(requestParameters: inventoryJobApiParams.GetJobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<JobQueueResponse>>;

}


/**
 * 
 */
export class InventoryJobApi extends runtime.BaseAPI implements InventoryJobApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Deletes older records from inventory table of all silos
     * Delete All Old Inventory
     */


    async deleteAllOldInventoryRaw(requestParameters: inventoryJobApiParams.DeleteAllOldInventoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<JobIDResponse>>> {
        if (requestParameters.months === null || requestParameters.months === undefined) {
            throw new runtime.RequiredError('months','Required parameter requestParameters.months was null or undefined when calling deleteAllOldInventory.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/inventory/v1/deleteOldInventory/allSilo/{months}`.replace(`{${"months"}}`, encodeURIComponent(String(requestParameters.months))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Deletes older records from inventory table of all silos
     * Delete All Old Inventory
     */
    async deleteAllOldInventory(requestParameters: inventoryJobApiParams.DeleteAllOldInventoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<JobIDResponse>> {
        const response = await this.deleteAllOldInventoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes older records from inventory table
     * Delete Old Inventory
     */


    async deleteOldInventoryRaw(requestParameters: inventoryJobApiParams.DeleteOldInventoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JobIDResponse>> {
        if (requestParameters.months === null || requestParameters.months === undefined) {
            throw new runtime.RequiredError('months','Required parameter requestParameters.months was null or undefined when calling deleteOldInventory.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/inventory/v1/deleteOldInventory/{months}`.replace(`{${"months"}}`, encodeURIComponent(String(requestParameters.months))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Deletes older records from inventory table
     * Delete Old Inventory
     */
    async deleteOldInventory(requestParameters: inventoryJobApiParams.DeleteOldInventoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JobIDResponse> {
        const response = await this.deleteOldInventoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get the specified job
     * Get Job
     */


    async getJobRaw(requestParameters: inventoryJobApiParams.GetJobRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JobQueueResponse>> {
        if (requestParameters.jobID === null || requestParameters.jobID === undefined) {
            throw new runtime.RequiredError('jobID','Required parameter requestParameters.jobID was null or undefined when calling getJob.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/inventory/v1/queue/{jobID}`.replace(`{${"jobID"}}`, encodeURIComponent(String(requestParameters.jobID))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get the specified job
     * Get Job
     */
    async getJob(requestParameters: inventoryJobApiParams.GetJobRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JobQueueResponse> {
        const response = await this.getJobRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get the requested jobs
     * Get Jobs
     */


    async getJobsRaw(requestParameters: inventoryJobApiParams.GetJobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<JobQueueResponse>>> {
        const queryParameters: any = {};

        if (requestParameters.locationCode !== undefined) {
            queryParameters['locationCode'] = requestParameters.locationCode;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.owner !== undefined) {
            queryParameters['owner'] = requestParameters.owner;
        }

        if (requestParameters.types) {
            queryParameters['types'] = requestParameters.types;
        }

        if (requestParameters.originalFilename !== undefined) {
            queryParameters['originalFilename'] = requestParameters.originalFilename;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/inventory/v1/queue`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get the requested jobs
     * Get Jobs
     */
    async getJobs(requestParameters: inventoryJobApiParams.GetJobsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<JobQueueResponse>> {
        const response = await this.getJobsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetJobsTypesEnum = {
    Refresh: 'REFRESH',
    Adjust: 'ADJUST',
    ReleaseShipments: 'RELEASE_SHIPMENTS',
    CreatePickWave: 'CREATE_PICK_WAVE',
    ClosePickWave: 'CLOSE_PICK_WAVE',
    PutAwayFile: 'PUT_AWAY_FILE',
    ShortPickError: 'SHORT_PICK_ERROR',
    BinAuditStart: 'BIN_AUDIT_START',
    BinAuditCompletion: 'BIN_AUDIT_COMPLETION',
    CreateBinAudit: 'CREATE_BIN_AUDIT',
    ReleasePendingItems: 'RELEASE_PENDING_ITEMS'
} as const;
export type GetJobsTypesEnum = typeof GetJobsTypesEnum[keyof typeof GetJobsTypesEnum];
