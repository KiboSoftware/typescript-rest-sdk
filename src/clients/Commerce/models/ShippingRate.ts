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
 * How much the customer and merchant pay for shipping based on the current shipping rate. 
 * The cost can differ between the merchant and customer depending on any merchant discounts or 
 * extra fees.
 * @export
 * @interface ShippingRate
 */
export interface ShippingRate {
    /**
     * Code that uniquely identifies the selected shipping method.
     * @type {string}
     * @memberof ShippingRate
     */
    shippingMethodCode?: string | null;
    /**
     * Shipping Method Name
     * @type {string}
     * @memberof ShippingRate
     */
    shippingMethodName?: string | null;
    /**
     * The shipping zone to which this rate applies.
     * @type {string}
     * @memberof ShippingRate
     */
    shippingZoneCode?: string | null;
    /**
     * If true, the shipping rate is valid.
     * @type {boolean}
     * @memberof ShippingRate
     */
    isValid?: boolean | null;
    /**
     * Messages and detail about why the shipping rate may be invalid.
     * @type {Array<string>}
     * @memberof ShippingRate
     */
    messages?: Array<string> | null;
    /**
     * Custom data returned by the shipping service.
     * @type {object}
     * @memberof ShippingRate
     */
    data?: object | null;
    /**
     * ISO currency code such as US dollars. Currently, only USD is supported.
     * @type {string}
     * @memberof ShippingRate
     */
    currencyCode?: string | null;
    /**
     * How much the customer pays for shipping which includes any shipping discounts that the merchant offers.
     * @type {number}
     * @memberof ShippingRate
     */
    price?: number | null;
}

/**
 * Check if a given object implements the ShippingRate interface.
 */
export function instanceOfShippingRate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ShippingRateFromJSON(json: any): ShippingRate {
    return ShippingRateFromJSONTyped(json, false);
}

export function ShippingRateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShippingRate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'shippingMethodCode': !exists(json, 'shippingMethodCode') ? undefined : json['shippingMethodCode'],
        'shippingMethodName': !exists(json, 'shippingMethodName') ? undefined : json['shippingMethodName'],
        'shippingZoneCode': !exists(json, 'shippingZoneCode') ? undefined : json['shippingZoneCode'],
        'isValid': !exists(json, 'isValid') ? undefined : json['isValid'],
        'messages': !exists(json, 'messages') ? undefined : json['messages'],
        'data': !exists(json, 'data') ? undefined : json['data'],
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'price': !exists(json, 'price') ? undefined : json['price'],
    };
}

export function ShippingRateToJSON(value?: ShippingRate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'shippingMethodCode': value.shippingMethodCode,
        'shippingMethodName': value.shippingMethodName,
        'shippingZoneCode': value.shippingZoneCode,
        'isValid': value.isValid,
        'messages': value.messages,
        'data': value.data,
        'currencyCode': value.currencyCode,
        'price': value.price,
    };
}

