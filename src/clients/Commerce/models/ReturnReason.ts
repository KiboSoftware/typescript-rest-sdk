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
 * Represents a quantity associated with a given reason for a return
 * @export
 * @interface ReturnReason
 */
export interface ReturnReason {
    /**
     * The reason this item has been returned.
     * @type {string}
     * @memberof ReturnReason
     */
    reason?: string | null;
    /**
     * The quantity associated with this Reason.
     * @type {number}
     * @memberof ReturnReason
     */
    quantity?: number;
}

/**
 * Check if a given object implements the ReturnReason interface.
 */
export function instanceOfReturnReason(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReturnReasonFromJSON(json: any): ReturnReason {
    return ReturnReasonFromJSONTyped(json, false);
}

export function ReturnReasonFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReturnReason {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
    };
}

export function ReturnReasonToJSON(value?: ReturnReason | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'reason': value.reason,
        'quantity': value.quantity,
    };
}
