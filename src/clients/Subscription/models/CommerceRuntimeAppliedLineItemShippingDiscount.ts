/* tslint:disable */
/* eslint-disable */
/**
 * Kibo SubscriptionRuntime Service
 * OpenAPI Spec for Kibo SubscriptionRuntime Service
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CommerceRuntimeAppliedDiscount } from './CommerceRuntimeAppliedDiscount';
import {
    CommerceRuntimeAppliedDiscountFromJSON,
    CommerceRuntimeAppliedDiscountFromJSONTyped,
    CommerceRuntimeAppliedDiscountToJSON,
} from './CommerceRuntimeAppliedDiscount';

/**
 * 
 * @export
 * @interface CommerceRuntimeAppliedLineItemShippingDiscount
 */
export interface CommerceRuntimeAppliedLineItemShippingDiscount {
    /**
     * Unique identifier of the shipping method discount.
     * @type {string}
     * @memberof CommerceRuntimeAppliedLineItemShippingDiscount
     */
    methodCode?: string | null;
    /**
     * 
     * @type {CommerceRuntimeAppliedDiscount}
     * @memberof CommerceRuntimeAppliedLineItemShippingDiscount
     */
    discount?: CommerceRuntimeAppliedDiscount;
    /**
     * The number of the line item that can be used for this particular discount.
     * @type {number}
     * @memberof CommerceRuntimeAppliedLineItemShippingDiscount
     */
    discountQuantity?: number;
    /**
     * The impact of this discount pur discount quantity.
     * @type {number}
     * @memberof CommerceRuntimeAppliedLineItemShippingDiscount
     */
    impactPerUnit?: number;
}

/**
 * Check if a given object implements the CommerceRuntimeAppliedLineItemShippingDiscount interface.
 */
export function instanceOfCommerceRuntimeAppliedLineItemShippingDiscount(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommerceRuntimeAppliedLineItemShippingDiscountFromJSON(json: any): CommerceRuntimeAppliedLineItemShippingDiscount {
    return CommerceRuntimeAppliedLineItemShippingDiscountFromJSONTyped(json, false);
}

export function CommerceRuntimeAppliedLineItemShippingDiscountFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommerceRuntimeAppliedLineItemShippingDiscount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'methodCode': !exists(json, 'methodCode') ? undefined : json['methodCode'],
        'discount': !exists(json, 'discount') ? undefined : CommerceRuntimeAppliedDiscountFromJSON(json['discount']),
        'discountQuantity': !exists(json, 'discountQuantity') ? undefined : json['discountQuantity'],
        'impactPerUnit': !exists(json, 'impactPerUnit') ? undefined : json['impactPerUnit'],
    };
}

export function CommerceRuntimeAppliedLineItemShippingDiscountToJSON(value?: CommerceRuntimeAppliedLineItemShippingDiscount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'methodCode': value.methodCode,
        'discount': CommerceRuntimeAppliedDiscountToJSON(value.discount),
        'discountQuantity': value.discountQuantity,
        'impactPerUnit': value.impactPerUnit,
    };
}

