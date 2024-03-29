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
  AdjustFutureDateRequest,
  JobQueueResponse,
} from '../models';


export namespace inventoryFutureDateApiParams { 
    export interface AdjustFutureDateOperationRequest {
        futureInventoryID: number;
        adjustFutureDateRequest: AdjustFutureDateRequest;
    }
}
/**
* InventoryFutureDateApiService - interface
* 
* @export
* @interface InventoryFutureDateApi
*/
export interface InventoryFutureDateApiService {
    /**
    * Adjust future_date of future inventory
    * @summary Adjust Future Date
    * @param {number} futureInventoryID id of the future_inventory row in db
    * @param {AdjustFutureDateRequest} adjustFutureDateRequest Request for adjusting the future date
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof InventoryFutureDateApiInterface
    */
    adjustFutureDateRaw(requestParameters: inventoryFutureDateApiParams.AdjustFutureDateOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JobQueueResponse>>;

    /**
    * Adjust future_date of future inventory
    * Adjust Future Date
    */
    adjustFutureDate(requestParameters: inventoryFutureDateApiParams.AdjustFutureDateOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JobQueueResponse>;

}


/**
 * 
 */
export class InventoryFutureDateApi extends runtime.BaseAPI implements InventoryFutureDateApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Adjust future_date of future inventory
     * Adjust Future Date
     */


    async adjustFutureDateRaw(requestParameters: inventoryFutureDateApiParams.AdjustFutureDateOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JobQueueResponse>> {
        if (requestParameters.futureInventoryID === null || requestParameters.futureInventoryID === undefined) {
            throw new runtime.RequiredError('futureInventoryID','Required parameter requestParameters.futureInventoryID was null or undefined when calling adjustFutureDate.');
        }

        if (requestParameters.adjustFutureDateRequest === null || requestParameters.adjustFutureDateRequest === undefined) {
            throw new runtime.RequiredError('adjustFutureDateRequest','Required parameter requestParameters.adjustFutureDateRequest was null or undefined when calling adjustFutureDate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/adjustFutureDate/{futureInventoryID}`.replace(`{${"futureInventoryID"}}`, encodeURIComponent(String(requestParameters.futureInventoryID))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.adjustFutureDateRequest,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Adjust future_date of future inventory
     * Adjust Future Date
     */
    async adjustFutureDate(requestParameters: inventoryFutureDateApiParams.AdjustFutureDateOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JobQueueResponse> {
        const response = await this.adjustFutureDateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
