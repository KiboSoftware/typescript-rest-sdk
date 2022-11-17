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
import type { ShipmentInventoryAllocationResponse } from './ShipmentInventoryAllocationResponse';
import {
    ShipmentInventoryAllocationResponseFromJSON,
    ShipmentInventoryAllocationResponseFromJSONTyped,
    ShipmentInventoryAllocationResponseToJSON,
} from './ShipmentInventoryAllocationResponse';

/**
 * 
 * @export
 * @interface GetShipmentInventoryAllocations500Response
 */
export interface GetShipmentInventoryAllocations500Response {
    /**
     * 
     * @type {string}
     * @memberof GetShipmentInventoryAllocations500Response
     */
    error?: string;
    /**
     * 
     * @type {ShipmentInventoryAllocationResponse}
     * @memberof GetShipmentInventoryAllocations500Response
     */
    message?: ShipmentInventoryAllocationResponse;
}

/**
 * Check if a given object implements the GetShipmentInventoryAllocations500Response interface.
 */
export function instanceOfGetShipmentInventoryAllocations500Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetShipmentInventoryAllocations500ResponseFromJSON(json: any): GetShipmentInventoryAllocations500Response {
    return GetShipmentInventoryAllocations500ResponseFromJSONTyped(json, false);
}

export function GetShipmentInventoryAllocations500ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetShipmentInventoryAllocations500Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : json['error'],
        'message': !exists(json, 'message') ? undefined : ShipmentInventoryAllocationResponseFromJSON(json['message']),
    };
}

export function GetShipmentInventoryAllocations500ResponseToJSON(value?: GetShipmentInventoryAllocations500Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': value.error,
        'message': ShipmentInventoryAllocationResponseToJSON(value.message),
    };
}

