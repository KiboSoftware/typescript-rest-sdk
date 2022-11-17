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
 * Represents a coupon that is considered invalid by the Mozu pricing service.
 * @export
 * @interface InvalidCoupon
 */
export interface InvalidCoupon {
    /**
     * Code that identifies the coupon.
     * @type {string}
     * @memberof InvalidCoupon
     */
    couponCode?: string | null;
    /**
     * Code that identifies the reason the coupon was invalid.
     * @type {number}
     * @memberof InvalidCoupon
     */
    reasonCode?: number;
    /**
     * Description text of the reason.
     * @type {string}
     * @memberof InvalidCoupon
     */
    reason?: string | null;
    /**
     * Create date of the invalid coupon.
     * @type {Date}
     * @memberof InvalidCoupon
     */
    createDate?: Date;
    /**
     * 
     * @type {number}
     * @memberof InvalidCoupon
     */
    discountId?: number;
}

/**
 * Check if a given object implements the InvalidCoupon interface.
 */
export function instanceOfInvalidCoupon(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InvalidCouponFromJSON(json: any): InvalidCoupon {
    return InvalidCouponFromJSONTyped(json, false);
}

export function InvalidCouponFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvalidCoupon {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'couponCode': !exists(json, 'couponCode') ? undefined : json['couponCode'],
        'reasonCode': !exists(json, 'reasonCode') ? undefined : json['reasonCode'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'createDate': !exists(json, 'createDate') ? undefined : (new Date(json['createDate'])),
        'discountId': !exists(json, 'discountId') ? undefined : json['discountId'],
    };
}

export function InvalidCouponToJSON(value?: InvalidCoupon | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'couponCode': value.couponCode,
        'reasonCode': value.reasonCode,
        'reason': value.reason,
        'createDate': value.createDate === undefined ? undefined : (value.createDate.toISOString()),
        'discountId': value.discountId,
    };
}

