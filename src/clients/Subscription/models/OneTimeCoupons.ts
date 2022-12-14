/* tslint:disable */
/* eslint-disable */
/**
 * Kibo SubscriptionRuntime Service
 * OpenAPI Spec for Kibo SubscriptionRuntime Service
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
 * @interface OneTimeCoupons
 */
export interface OneTimeCoupons {
    /**
     * 
     * @type {Array<string>}
     * @memberof OneTimeCoupons
     */
    couponCodes?: Array<string> | null;
}

/**
 * Check if a given object implements the OneTimeCoupons interface.
 */
export function instanceOfOneTimeCoupons(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OneTimeCouponsFromJSON(json: any): OneTimeCoupons {
    return OneTimeCouponsFromJSONTyped(json, false);
}

export function OneTimeCouponsFromJSONTyped(json: any, ignoreDiscriminator: boolean): OneTimeCoupons {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'couponCodes': !exists(json, 'couponCodes') ? undefined : json['couponCodes'],
    };
}

export function OneTimeCouponsToJSON(value?: OneTimeCoupons | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'couponCodes': value.couponCodes,
    };
}

