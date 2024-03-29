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
  BaseResponse,
  DeletedResponse,
  FetchFileConfigRequest,
  FetchFileConnectionResponse,
  MFetchFileConfig,
} from '../models';


export namespace inventoryFetchFileConfigApiParams { 
    export interface DeleteFetchConfigRequest {
        fetchFileConfigID: number;
    }
    export interface SaveFetchConfigRequest {
        fetchFileConfigRequest: FetchFileConfigRequest;
    }
    export interface TestConnectionRequest {
        fetchFileConfigID: number;
    }
}
/**
* InventoryFetchFileConfigApiService - interface
* 
* @export
* @interface InventoryFetchFileConfigApi
*/
export interface InventoryFetchFileConfigApiService {
    /**
    * Deletes a fetch file config
    * @summary Delete Fetch Config
    * @param {number} fetchFileConfigID Id of fetch file config
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof InventoryFetchFileConfigApiInterface
    */
    deleteFetchConfigRaw(requestParameters: inventoryFetchFileConfigApiParams.DeleteFetchConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeletedResponse>>;

    /**
    * Deletes a fetch file config
    * Delete Fetch Config
    */
    deleteFetchConfig(requestParameters: inventoryFetchFileConfigApiParams.DeleteFetchConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeletedResponse>;

    /**
    * Get the Fetch File Configs for the current tenant
    * @summary Get Fetch Config
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof InventoryFetchFileConfigApiInterface
    */
    getFetchConfigRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MFetchFileConfig>>;

    /**
    * Get the Fetch File Configs for the current tenant
    * Get Fetch Config
    */
    getFetchConfig(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MFetchFileConfig>;

    /**
    * Save a new Fetch File Config
    * @summary Save Fetch Config
    * @param {FetchFileConfigRequest} fetchFileConfigRequest Request to fetch file configs
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof InventoryFetchFileConfigApiInterface
    */
    saveFetchConfigRaw(requestParameters: inventoryFetchFileConfigApiParams.SaveFetchConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BaseResponse>>;

    /**
    * Save a new Fetch File Config
    * Save Fetch Config
    */
    saveFetchConfig(requestParameters: inventoryFetchFileConfigApiParams.SaveFetchConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BaseResponse>;

    /**
    * Attempts to connect to a fetch file endpoint and lists current files if successful
    * @summary Test Connection
    * @param {number} fetchFileConfigID Id of fetch file config
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof InventoryFetchFileConfigApiInterface
    */
    testConnectionRaw(requestParameters: inventoryFetchFileConfigApiParams.TestConnectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FetchFileConnectionResponse>>;

    /**
    * Attempts to connect to a fetch file endpoint and lists current files if successful
    * Test Connection
    */
    testConnection(requestParameters: inventoryFetchFileConfigApiParams.TestConnectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FetchFileConnectionResponse>;

}


/**
 * 
 */
export class InventoryFetchFileConfigApi extends runtime.BaseAPI implements InventoryFetchFileConfigApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Deletes a fetch file config
     * Delete Fetch Config
     */


    async deleteFetchConfigRaw(requestParameters: inventoryFetchFileConfigApiParams.DeleteFetchConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeletedResponse>> {
        if (requestParameters.fetchFileConfigID === null || requestParameters.fetchFileConfigID === undefined) {
            throw new runtime.RequiredError('fetchFileConfigID','Required parameter requestParameters.fetchFileConfigID was null or undefined when calling deleteFetchConfig.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/inventory/v1/config/fetchfile/{fetchFileConfigID}`.replace(`{${"fetchFileConfigID"}}`, encodeURIComponent(String(requestParameters.fetchFileConfigID))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Deletes a fetch file config
     * Delete Fetch Config
     */
    async deleteFetchConfig(requestParameters: inventoryFetchFileConfigApiParams.DeleteFetchConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeletedResponse> {
        const response = await this.deleteFetchConfigRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get the Fetch File Configs for the current tenant
     * Get Fetch Config
     */


    async getFetchConfigRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MFetchFileConfig>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/inventory/v1/config/fetchfile`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get the Fetch File Configs for the current tenant
     * Get Fetch Config
     */
    async getFetchConfig(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MFetchFileConfig> {
        const response = await this.getFetchConfigRaw(initOverrides);
        return await response.value();
    }

    /**
     * Save a new Fetch File Config
     * Save Fetch Config
     */


    async saveFetchConfigRaw(requestParameters: inventoryFetchFileConfigApiParams.SaveFetchConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BaseResponse>> {
        if (requestParameters.fetchFileConfigRequest === null || requestParameters.fetchFileConfigRequest === undefined) {
            throw new runtime.RequiredError('fetchFileConfigRequest','Required parameter requestParameters.fetchFileConfigRequest was null or undefined when calling saveFetchConfig.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/inventory/v1/config/fetchfile`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.fetchFileConfigRequest,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Save a new Fetch File Config
     * Save Fetch Config
     */
    async saveFetchConfig(requestParameters: inventoryFetchFileConfigApiParams.SaveFetchConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BaseResponse> {
        const response = await this.saveFetchConfigRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Attempts to connect to a fetch file endpoint and lists current files if successful
     * Test Connection
     */


    async testConnectionRaw(requestParameters: inventoryFetchFileConfigApiParams.TestConnectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FetchFileConnectionResponse>> {
        if (requestParameters.fetchFileConfigID === null || requestParameters.fetchFileConfigID === undefined) {
            throw new runtime.RequiredError('fetchFileConfigID','Required parameter requestParameters.fetchFileConfigID was null or undefined when calling testConnection.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/inventory/v1/config/fetchfile/testConnection/{fetchFileConfigID}`.replace(`{${"fetchFileConfigID"}}`, encodeURIComponent(String(requestParameters.fetchFileConfigID))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Attempts to connect to a fetch file endpoint and lists current files if successful
     * Test Connection
     */
    async testConnection(requestParameters: inventoryFetchFileConfigApiParams.TestConnectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FetchFileConnectionResponse> {
        const response = await this.testConnectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
