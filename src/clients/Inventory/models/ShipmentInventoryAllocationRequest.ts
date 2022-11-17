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

import { exists, mapValues } from '../runtime';
/**
 * ShipmentInventoryAllocation Request Object
 * @export
 * @interface ShipmentInventoryAllocationRequest
 */
export interface ShipmentInventoryAllocationRequest {
    /**
     * Shipment Ids
     * @type {any}
     * @memberof ShipmentInventoryAllocationRequest
     */
    shipmentIDs: any | null;
}

/**
 * Check if a given object implements the ShipmentInventoryAllocationRequest interface.
 */
export function instanceOfShipmentInventoryAllocationRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "shipmentIDs" in value;

    return isInstance;
}

export function ShipmentInventoryAllocationRequestFromJSON(json: any): ShipmentInventoryAllocationRequest {
    return ShipmentInventoryAllocationRequestFromJSONTyped(json, false);
}

export function ShipmentInventoryAllocationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShipmentInventoryAllocationRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'shipmentIDs': json['shipmentIDs'],
    };
}

export function ShipmentInventoryAllocationRequestToJSON(value?: ShipmentInventoryAllocationRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'shipmentIDs': value.shipmentIDs,
    };
}

