/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Fulfillment Service
 * OpenAPI Spec for Kibo Fulfillment Service
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CanceledReason } from './CanceledReason';
import {
    CanceledReasonFromJSON,
    CanceledReasonFromJSONTyped,
    CanceledReasonToJSON,
} from './CanceledReason';

/**
 * 
 * @export
 * @interface CancelShipment
 */
export interface CancelShipment {
    /**
     * 
     * @type {boolean}
     * @memberof CancelShipment
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {CanceledReason}
     * @memberof CancelShipment
     */
    canceledReason?: CanceledReason;
    /**
     * 
     * @type {boolean}
     * @memberof CancelShipment
     */
    sendNotifications?: boolean;
}

/**
 * Check if a given object implements the CancelShipment interface.
 */
export function instanceOfCancelShipment(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CancelShipmentFromJSON(json: any): CancelShipment {
    return CancelShipmentFromJSONTyped(json, false);
}

export function CancelShipmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): CancelShipment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockAssignment': !exists(json, 'blockAssignment') ? undefined : json['blockAssignment'],
        'canceledReason': !exists(json, 'canceledReason') ? undefined : CanceledReasonFromJSON(json['canceledReason']),
        'sendNotifications': !exists(json, 'sendNotifications') ? undefined : json['sendNotifications'],
    };
}

export function CancelShipmentToJSON(value?: CancelShipment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockAssignment': value.blockAssignment,
        'canceledReason': CanceledReasonToJSON(value.canceledReason),
        'sendNotifications': value.sendNotifications,
    };
}
