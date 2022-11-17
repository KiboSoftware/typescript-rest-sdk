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
/**
 * 
 * @export
 * @interface CommerceRuntimeThresholdMessage
 */
export interface CommerceRuntimeThresholdMessage {
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeThresholdMessage
     */
    discountId?: number;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeThresholdMessage
     */
    message?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeThresholdMessage
     */
    thresholdValue?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeThresholdMessage
     */
    showOnCheckout?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeThresholdMessage
     */
    showInCart?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeThresholdMessage
     */
    requiresCouponCode?: boolean;
}

/**
 * Check if a given object implements the CommerceRuntimeThresholdMessage interface.
 */
export function instanceOfCommerceRuntimeThresholdMessage(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommerceRuntimeThresholdMessageFromJSON(json: any): CommerceRuntimeThresholdMessage {
    return CommerceRuntimeThresholdMessageFromJSONTyped(json, false);
}

export function CommerceRuntimeThresholdMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommerceRuntimeThresholdMessage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'discountId': !exists(json, 'discountId') ? undefined : json['discountId'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'thresholdValue': !exists(json, 'thresholdValue') ? undefined : json['thresholdValue'],
        'showOnCheckout': !exists(json, 'showOnCheckout') ? undefined : json['showOnCheckout'],
        'showInCart': !exists(json, 'showInCart') ? undefined : json['showInCart'],
        'requiresCouponCode': !exists(json, 'requiresCouponCode') ? undefined : json['requiresCouponCode'],
    };
}

export function CommerceRuntimeThresholdMessageToJSON(value?: CommerceRuntimeThresholdMessage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'discountId': value.discountId,
        'message': value.message,
        'thresholdValue': value.thresholdValue,
        'showOnCheckout': value.showOnCheckout,
        'showInCart': value.showInCart,
        'requiresCouponCode': value.requiresCouponCode,
    };
}

