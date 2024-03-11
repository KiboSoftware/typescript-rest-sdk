/* tslint:disable */
/* eslint-disable */
/**
 * Kibo ShippingRuntime Service
 * OpenAPI Spec for Kibo ShippingRuntime Service
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CustomAttribute } from './CustomAttribute';
import {
    CustomAttributeFromJSON,
    CustomAttributeFromJSONTyped,
    CustomAttributeToJSON,
} from './CustomAttribute';
import type { ShippingItemRate } from './ShippingItemRate';
import {
    ShippingItemRateFromJSON,
    ShippingItemRateFromJSONTyped,
    ShippingItemRateToJSON,
} from './ShippingItemRate';
import type { ShippingRateLocalizedContent } from './ShippingRateLocalizedContent';
import {
    ShippingRateLocalizedContentFromJSON,
    ShippingRateLocalizedContentFromJSONTyped,
    ShippingRateLocalizedContentToJSON,
} from './ShippingRateLocalizedContent';
import type { ShippingRateValidationMessage } from './ShippingRateValidationMessage';
import {
    ShippingRateValidationMessageFromJSON,
    ShippingRateValidationMessageFromJSONTyped,
    ShippingRateValidationMessageToJSON,
} from './ShippingRateValidationMessage';

/**
 * 
 * @export
 * @interface ShippingRuntimeShippingRate
 */
export interface ShippingRuntimeShippingRate {
    /**
     * 
     * @type {string}
     * @memberof ShippingRuntimeShippingRate
     */
    code?: string | null;
    /**
     * 
     * @type {ShippingRateLocalizedContent}
     * @memberof ShippingRuntimeShippingRate
     */
    content?: ShippingRateLocalizedContent;
    /**
     * 
     * @type {number}
     * @memberof ShippingRuntimeShippingRate
     */
    amount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ShippingRuntimeShippingRate
     */
    daysInTransit?: number | null;
    /**
     * 
     * @type {Array<ShippingItemRate>}
     * @memberof ShippingRuntimeShippingRate
     */
    shippingItemRates?: Array<ShippingItemRate> | null;
    /**
     * 
     * @type {Array<CustomAttribute>}
     * @memberof ShippingRuntimeShippingRate
     */
    customAttributes?: Array<CustomAttribute> | null;
    /**
     * 
     * @type {Array<ShippingRateValidationMessage>}
     * @memberof ShippingRuntimeShippingRate
     */
    messages?: Array<ShippingRateValidationMessage> | null;
    /**
     * 
     * @type {object}
     * @memberof ShippingRuntimeShippingRate
     */
    data?: object | null;
}

/**
 * Check if a given object implements the ShippingRuntimeShippingRate interface.
 */
export function instanceOfShippingRuntimeShippingRate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ShippingRuntimeShippingRateFromJSON(json: any): ShippingRuntimeShippingRate {
    return ShippingRuntimeShippingRateFromJSONTyped(json, false);
}

export function ShippingRuntimeShippingRateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShippingRuntimeShippingRate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'content': !exists(json, 'content') ? undefined : ShippingRateLocalizedContentFromJSON(json['content']),
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'daysInTransit': !exists(json, 'daysInTransit') ? undefined : json['daysInTransit'],
        'shippingItemRates': !exists(json, 'shippingItemRates') ? undefined : (json['shippingItemRates'] === null ? null : (json['shippingItemRates'] as Array<any>).map(ShippingItemRateFromJSON)),
        'customAttributes': !exists(json, 'customAttributes') ? undefined : (json['customAttributes'] === null ? null : (json['customAttributes'] as Array<any>).map(CustomAttributeFromJSON)),
        'messages': !exists(json, 'messages') ? undefined : (json['messages'] === null ? null : (json['messages'] as Array<any>).map(ShippingRateValidationMessageFromJSON)),
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function ShippingRuntimeShippingRateToJSON(value?: ShippingRuntimeShippingRate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'content': ShippingRateLocalizedContentToJSON(value.content),
        'amount': value.amount,
        'daysInTransit': value.daysInTransit,
        'shippingItemRates': value.shippingItemRates === undefined ? undefined : (value.shippingItemRates === null ? null : (value.shippingItemRates as Array<any>).map(ShippingItemRateToJSON)),
        'customAttributes': value.customAttributes === undefined ? undefined : (value.customAttributes === null ? null : (value.customAttributes as Array<any>).map(CustomAttributeToJSON)),
        'messages': value.messages === undefined ? undefined : (value.messages === null ? null : (value.messages as Array<any>).map(ShippingRateValidationMessageToJSON)),
        'data': value.data,
    };
}
