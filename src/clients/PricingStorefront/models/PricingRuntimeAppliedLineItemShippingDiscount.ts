/* tslint:disable */
/* eslint-disable */
/**
 * Kibo PricingRuntime Service
 * OpenAPI Spec for Kibo PricingRuntime Service
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { PricingRuntimeDiscount } from './PricingRuntimeDiscount';
import {
    PricingRuntimeDiscountFromJSON,
    PricingRuntimeDiscountFromJSONTyped,
    PricingRuntimeDiscountToJSON,
} from './PricingRuntimeDiscount';

/**
 * 
 * @export
 * @interface PricingRuntimeAppliedLineItemShippingDiscount
 */
export interface PricingRuntimeAppliedLineItemShippingDiscount {
    /**
     * Unique identifier of the shipping method discount.
     * @type {string}
     * @memberof PricingRuntimeAppliedLineItemShippingDiscount
     */
    shippingMethodCode?: string | null;
    /**
     * Value of the discount, that is how much the shopper saves if discount is applied.
     * @type {number}
     * @memberof PricingRuntimeAppliedLineItemShippingDiscount
     */
    impact?: number;
    /**
     * 
     * @type {PricingRuntimeDiscount}
     * @memberof PricingRuntimeAppliedLineItemShippingDiscount
     */
    discount?: PricingRuntimeDiscount;
    /**
     * Code of the coupon associated with the discount (if a coupon code is required in order to receive the discount).
     * @type {string}
     * @memberof PricingRuntimeAppliedLineItemShippingDiscount
     */
    couponCode?: string | null;
    /**
     * Contains coupon set id if there is one
     * @type {number}
     * @memberof PricingRuntimeAppliedLineItemShippingDiscount
     */
    couponSetId?: number | null;
}

/**
 * Check if a given object implements the PricingRuntimeAppliedLineItemShippingDiscount interface.
 */
export function instanceOfPricingRuntimeAppliedLineItemShippingDiscount(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PricingRuntimeAppliedLineItemShippingDiscountFromJSON(json: any): PricingRuntimeAppliedLineItemShippingDiscount {
    return PricingRuntimeAppliedLineItemShippingDiscountFromJSONTyped(json, false);
}

export function PricingRuntimeAppliedLineItemShippingDiscountFromJSONTyped(json: any, ignoreDiscriminator: boolean): PricingRuntimeAppliedLineItemShippingDiscount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'shippingMethodCode': !exists(json, 'shippingMethodCode') ? undefined : json['shippingMethodCode'],
        'impact': !exists(json, 'impact') ? undefined : json['impact'],
        'discount': !exists(json, 'discount') ? undefined : PricingRuntimeDiscountFromJSON(json['discount']),
        'couponCode': !exists(json, 'couponCode') ? undefined : json['couponCode'],
        'couponSetId': !exists(json, 'couponSetId') ? undefined : json['couponSetId'],
    };
}

export function PricingRuntimeAppliedLineItemShippingDiscountToJSON(value?: PricingRuntimeAppliedLineItemShippingDiscount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'shippingMethodCode': value.shippingMethodCode,
        'impact': value.impact,
        'discount': PricingRuntimeDiscountToJSON(value.discount),
        'couponCode': value.couponCode,
        'couponSetId': value.couponSetId,
    };
}

