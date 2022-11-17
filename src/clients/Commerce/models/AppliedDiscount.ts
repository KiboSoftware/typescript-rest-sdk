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
import type { Discount } from './Discount';
import {
    DiscountFromJSON,
    DiscountFromJSONTyped,
    DiscountToJSON,
} from './Discount';

/**
 * Discount applied to the order, which is a negative number to be subtracted from the original price to get the final price. 
 * If multiple discounts for the order exist, this is the value most advantageous to the shopper.
 * @export
 * @interface AppliedDiscount
 */
export interface AppliedDiscount {
    /**
     * Value of the discount applied. This is a negative number to be subtracted from the original price to get the final price.
     * @type {number}
     * @memberof AppliedDiscount
     */
    impact?: number | null;
    /**
     * 
     * @type {Discount}
     * @memberof AppliedDiscount
     */
    discount?: Discount;
    /**
     * Code of the coupon associated with the discount if a coupon code is required to get the discount.
     * @type {string}
     * @memberof AppliedDiscount
     */
    couponCode?: string | null;
    /**
     * Determines whether or not this discount is set up to be ignored by the pricing runtime.
     * @type {boolean}
     * @memberof AppliedDiscount
     */
    excluded?: boolean | null;
}

/**
 * Check if a given object implements the AppliedDiscount interface.
 */
export function instanceOfAppliedDiscount(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppliedDiscountFromJSON(json: any): AppliedDiscount {
    return AppliedDiscountFromJSONTyped(json, false);
}

export function AppliedDiscountFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppliedDiscount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'impact': !exists(json, 'impact') ? undefined : json['impact'],
        'discount': !exists(json, 'discount') ? undefined : DiscountFromJSON(json['discount']),
        'couponCode': !exists(json, 'couponCode') ? undefined : json['couponCode'],
        'excluded': !exists(json, 'excluded') ? undefined : json['excluded'],
    };
}

export function AppliedDiscountToJSON(value?: AppliedDiscount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'impact': value.impact,
        'discount': DiscountToJSON(value.discount),
        'couponCode': value.couponCode,
        'excluded': value.excluded,
    };
}

