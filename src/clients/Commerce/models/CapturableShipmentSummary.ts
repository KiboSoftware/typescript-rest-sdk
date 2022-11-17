/* tslint:disable */
/* eslint-disable */
/**
 * Kibo CommerceRuntime Service
 * OpenAPI Spec for Kibo CommerceRuntime Service
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CapturableShipmentSummary
 */
export interface CapturableShipmentSummary {
    /**
     * The identifying number of the shipment affected by the payment action
     * @type {number}
     * @memberof CapturableShipmentSummary
     */
    shipmentNumber?: number;
    /**
     * The shipment's total when the payment action occurred
     * @type {number}
     * @memberof CapturableShipmentSummary
     */
    shipmentTotal?: number;
    /**
     * The amount applied by the payment action
     * @type {number}
     * @memberof CapturableShipmentSummary
     */
    amountApplied?: number;
}

/**
 * Check if a given object implements the CapturableShipmentSummary interface.
 */
export function instanceOfCapturableShipmentSummary(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CapturableShipmentSummaryFromJSON(json: any): CapturableShipmentSummary {
    return CapturableShipmentSummaryFromJSONTyped(json, false);
}

export function CapturableShipmentSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): CapturableShipmentSummary {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'shipmentNumber': !exists(json, 'shipmentNumber') ? undefined : json['shipmentNumber'],
        'shipmentTotal': !exists(json, 'shipmentTotal') ? undefined : json['shipmentTotal'],
        'amountApplied': !exists(json, 'amountApplied') ? undefined : json['amountApplied'],
    };
}

export function CapturableShipmentSummaryToJSON(value?: CapturableShipmentSummary | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'shipmentNumber': value.shipmentNumber,
        'shipmentTotal': value.shipmentTotal,
        'amountApplied': value.amountApplied,
    };
}

