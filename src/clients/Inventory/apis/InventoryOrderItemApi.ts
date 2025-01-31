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
  OrderItemInformation,
  OrderItemInformationRequest,
} from '../models';


export namespace inventoryOrderItemApiParams { 
    export interface GetOrderItemInformationRequest {
        orderItemInformationRequest: OrderItemInformationRequest;
    }
}
/**
* InventoryOrderItemApiService - interface
* 
* @export
* @interface InventoryOrderItemApi
*/
export interface InventoryOrderItemApiService {
    /**
    * Get Order Item Information
    * @summary Get Order Item Information
    * @param {OrderItemInformationRequest} orderItemInformationRequest Request to retrieve order item information
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof InventoryOrderItemApiInterface
    */
    getOrderItemInformationRaw(requestParameters: inventoryOrderItemApiParams.GetOrderItemInformationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<OrderItemInformation>>>;

    /**
    * Get Order Item Information
    * Get Order Item Information
    */
    getOrderItemInformation(requestParameters: inventoryOrderItemApiParams.GetOrderItemInformationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<OrderItemInformation>>;

}


/**
 * 
 */
export class InventoryOrderItemApi extends runtime.BaseAPI implements InventoryOrderItemApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Get Order Item Information
     * Get Order Item Information
     */


    async getOrderItemInformationRaw(requestParameters: inventoryOrderItemApiParams.GetOrderItemInformationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<OrderItemInformation>>> {
        if (requestParameters.orderItemInformationRequest === null || requestParameters.orderItemInformationRequest === undefined) {
            throw new runtime.RequiredError('orderItemInformationRequest','Required parameter requestParameters.orderItemInformationRequest was null or undefined when calling getOrderItemInformation.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/inventory/v5/inventory/getOrderItemInformation`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.orderItemInformationRequest,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get Order Item Information
     * Get Order Item Information
     */
    async getOrderItemInformation(requestParameters: inventoryOrderItemApiParams.GetOrderItemInformationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<OrderItemInformation>> {
        const response = await this.getOrderItemInformationRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
