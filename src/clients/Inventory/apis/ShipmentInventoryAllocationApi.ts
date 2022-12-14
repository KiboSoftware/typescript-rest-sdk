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
  GetShipmentInventoryAllocations500Response,
  ShipmentInventoryAllocationRequest,
  ShipmentInventoryAllocationResponse,
} from '../models';
import {
    GetShipmentInventoryAllocations500ResponseFromJSON,
    GetShipmentInventoryAllocations500ResponseToJSON,
    ShipmentInventoryAllocationRequestFromJSON,
    ShipmentInventoryAllocationRequestToJSON,
    ShipmentInventoryAllocationResponseFromJSON,
    ShipmentInventoryAllocationResponseToJSON,
} from '../models';

export interface ShipmentInventoryAllocationApiGetShipmentInventoryAllocationsRequest {
    xVolTenant: number;
    shipmentInventoryAllocationRequest: ShipmentInventoryAllocationRequest;
}

/**
 * 
 */
export class ShipmentInventoryAllocationApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Get future Inventory Allocations by shipment Ids
     * Get Shipment Inventory Allocations
     */


    async getShipmentInventoryAllocationsRaw(requestParameters: ShipmentInventoryAllocationApiGetShipmentInventoryAllocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ShipmentInventoryAllocationResponse>> {
        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling getShipmentInventoryAllocations.');
        }

        if (requestParameters.shipmentInventoryAllocationRequest === null || requestParameters.shipmentInventoryAllocationRequest === undefined) {
            throw new runtime.RequiredError('shipmentInventoryAllocationRequest','Required parameter requestParameters.shipmentInventoryAllocationRequest was null or undefined when calling getShipmentInventoryAllocations.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

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
            path: `/commerce/inventory/api/v5/inventory/shipmentInventoryAllocations`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ShipmentInventoryAllocationRequestToJSON(requestParameters.shipmentInventoryAllocationRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ShipmentInventoryAllocationResponseFromJSON(jsonValue));
    }

    /**
     * Get future Inventory Allocations by shipment Ids
     * Get Shipment Inventory Allocations
     */
    async getShipmentInventoryAllocations(requestParameters: ShipmentInventoryAllocationApiGetShipmentInventoryAllocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ShipmentInventoryAllocationResponse> {
        const response = await this.getShipmentInventoryAllocationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
