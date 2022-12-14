/* tslint:disable */
/* eslint-disable */
/**
 * Inventory
 * Swagger JSON for inventory apis
 *
 * The version of the OpenAPI document: 5.0
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
  JobQueueResponse,
} from '../models';
import {
    AdjustFutureDate404ResponseFromJSON,
    AdjustFutureDate404ResponseToJSON,
    JobQueueResponseFromJSON,
    JobQueueResponseToJSON,
} from '../models';

export interface InventoryFutureDateApiAdjustFutureDateRequest {
    xVolTenant: number;
    futureInventoryID: number;
}

/**
 * 
 */
export class InventoryFutureDateApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Adjust future_date of future inventory
     * Adjust Future Date
     */


    async adjustFutureDateRaw(requestParameters: InventoryFutureDateApiAdjustFutureDateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JobQueueResponse>> {
        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling adjustFutureDate.');
        }

        if (requestParameters.futureInventoryID === null || requestParameters.futureInventoryID === undefined) {
            throw new runtime.RequiredError('futureInventoryID','Required parameter requestParameters.futureInventoryID was null or undefined when calling adjustFutureDate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }


        if (this.configuration && (this.configuration.accessToken || this.configuration.clientId && this.configuration.sharedSecret)) {
            const token = await this.configuration.accessToken;
            const tokenString = await token();
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        
        if (this.configuration && this.configuration.jwt) {
            const token = this.configuration.jwt;
            const tokenString = await token();

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/adjustFutureDate/{futureInventoryID}`.replace(`{${"futureInventoryID"}}`, encodeURIComponent(String(requestParameters.futureInventoryID))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JobQueueResponseFromJSON(jsonValue));
    }

    /**
     * Adjust future_date of future inventory
     * Adjust Future Date
     */
    async adjustFutureDate(requestParameters: InventoryFutureDateApiAdjustFutureDateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JobQueueResponse> {
        const response = await this.adjustFutureDateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
