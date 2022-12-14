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
import type { PricingDiscount } from './PricingDiscount';
import {
    PricingDiscountFromJSON,
    PricingDiscountFromJSONTyped,
    PricingDiscountToJSON,
} from './PricingDiscount';

/**
 * 
 * @export
 * @interface PricingAppliedLineItemDiscount
 */
export interface PricingAppliedLineItemDiscount {
    /**
     * 
     * @type {number}
     * @memberof PricingAppliedLineItemDiscount
     */
    quantity?: number;
    /**
     * 
     * @type {number}
     * @memberof PricingAppliedLineItemDiscount
     */
    impactPerUnit?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PricingAppliedLineItemDiscount
     */
    isForced?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PricingAppliedLineItemDiscount
     */
    normalizedImpact?: number;
    /**
     * 
     * @type {number}
     * @memberof PricingAppliedLineItemDiscount
     */
    impact?: number;
    /**
     * 
     * @type {PricingDiscount}
     * @memberof PricingAppliedLineItemDiscount
     */
    discount?: PricingDiscount;
    /**
     * 
     * @type {string}
     * @memberof PricingAppliedLineItemDiscount
     */
    couponCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PricingAppliedLineItemDiscount
     */
    couponSetId?: number | null;
}

/**
 * Check if a given object implements the PricingAppliedLineItemDiscount interface.
 */
export function instanceOfPricingAppliedLineItemDiscount(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PricingAppliedLineItemDiscountFromJSON(json: any): PricingAppliedLineItemDiscount {
    return PricingAppliedLineItemDiscountFromJSONTyped(json, false);
}

export function PricingAppliedLineItemDiscountFromJSONTyped(json: any, ignoreDiscriminator: boolean): PricingAppliedLineItemDiscount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'impactPerUnit': !exists(json, 'impactPerUnit') ? undefined : json['impactPerUnit'],
        'isForced': !exists(json, 'isForced') ? undefined : json['isForced'],
        'normalizedImpact': !exists(json, 'normalizedImpact') ? undefined : json['normalizedImpact'],
        'impact': !exists(json, 'impact') ? undefined : json['impact'],
        'discount': !exists(json, 'discount') ? undefined : PricingDiscountFromJSON(json['discount']),
        'couponCode': !exists(json, 'couponCode') ? undefined : json['couponCode'],
        'couponSetId': !exists(json, 'couponSetId') ? undefined : json['couponSetId'],
    };
}

export function PricingAppliedLineItemDiscountToJSON(value?: PricingAppliedLineItemDiscount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'quantity': value.quantity,
        'impactPerUnit': value.impactPerUnit,
        'isForced': value.isForced,
        'normalizedImpact': value.normalizedImpact,
        'impact': value.impact,
        'discount': PricingDiscountToJSON(value.discount),
        'couponCode': value.couponCode,
        'couponSetId': value.couponSetId,
    };
}

