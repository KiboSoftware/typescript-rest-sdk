/* tslint:disable */
/* eslint-disable */
/**
 * Kibo ShippingRuntime Service
 * OpenAPI Spec for Kibo ShippingRuntime Service
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
 * The shipping rate for a particular line item
 * @export
 * @interface ShippingItemRate
 */
export interface ShippingItemRate {
    /**
     * 
     * @type {string}
     * @memberof ShippingItemRate
     */
    itemId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ShippingItemRate
     */
    quantity?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ShippingItemRate
     */
    amount?: number | null;
}

/**
 * Check if a given object implements the ShippingItemRate interface.
 */
export function instanceOfShippingItemRate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ShippingItemRateFromJSON(json: any): ShippingItemRate {
    return ShippingItemRateFromJSONTyped(json, false);
}

export function ShippingItemRateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShippingItemRate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'itemId': !exists(json, 'itemId') ? undefined : json['itemId'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
    };
}

export function ShippingItemRateToJSON(value?: ShippingItemRate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'itemId': value.itemId,
        'quantity': value.quantity,
        'amount': value.amount,
    };
}
