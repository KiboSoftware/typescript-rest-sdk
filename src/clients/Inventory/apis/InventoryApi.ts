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
  AggregateRequest,
  AggregateResponse,
  InventoryInventoryResponse,
  InventoryRequest,
} from '../models';


export namespace inventoryApiParams { 
    export interface AggregateOperationRequest {
        aggregateRequest: AggregateRequest;
    }
    export interface PostQueryInventoryRequest {
        inventoryRequest: InventoryRequest;
    }
}
/**
* InventoryApiService - interface
* 
* @export
* @interface InventoryApi
*/
export interface InventoryApiService {
    /**
    * Aggregates Inventory
    * @summary Aggregate
    * @param {AggregateRequest} aggregateRequest Request to aggregate inventory
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof InventoryApiInterface
    */
    aggregateRaw(requestParameters: inventoryApiParams.AggregateOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<AggregateResponse>>>;

    /**
    * Aggregates Inventory
    * Aggregate
    */
    aggregate(requestParameters: inventoryApiParams.AggregateOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<AggregateResponse>>;

    /**
    * Queries for specified inventory at given location
    * @summary Post Query Inventory
    * @param {InventoryRequest} inventoryRequest Request to get inventory
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof InventoryApiInterface
    */
    postQueryInventoryRaw(requestParameters: inventoryApiParams.PostQueryInventoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<InventoryInventoryResponse>>>;

    /**
    * Queries for specified inventory at given location
    * Post Query Inventory
    */
    postQueryInventory(requestParameters: inventoryApiParams.PostQueryInventoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<InventoryInventoryResponse>>;

}


/**
 * 
 */
export class InventoryApi extends runtime.BaseAPI implements InventoryApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Aggregates Inventory
     * Aggregate
     */


    async aggregateRaw(requestParameters: inventoryApiParams.AggregateOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<AggregateResponse>>> {
        if (requestParameters.aggregateRequest === null || requestParameters.aggregateRequest === undefined) {
            throw new runtime.RequiredError('aggregateRequest','Required parameter requestParameters.aggregateRequest was null or undefined when calling aggregate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/inventory/v5/inventory/aggregate`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.aggregateRequest,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Aggregates Inventory
     * Aggregate
     */
    async aggregate(requestParameters: inventoryApiParams.AggregateOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<AggregateResponse>> {
        const response = await this.aggregateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Queries for specified inventory at given location
     * Post Query Inventory
     */


    async postQueryInventoryRaw(requestParameters: inventoryApiParams.PostQueryInventoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<InventoryInventoryResponse>>> {
        if (requestParameters.inventoryRequest === null || requestParameters.inventoryRequest === undefined) {
            throw new runtime.RequiredError('inventoryRequest','Required parameter requestParameters.inventoryRequest was null or undefined when calling postQueryInventory.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/inventory/v5/inventory`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.inventoryRequest,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Queries for specified inventory at given location
     * Post Query Inventory
     */
    async postQueryInventory(requestParameters: inventoryApiParams.PostQueryInventoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<InventoryInventoryResponse>> {
        const response = await this.postQueryInventoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
