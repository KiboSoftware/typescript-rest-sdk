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
 * @interface ProductPropertyValue
 */
export interface ProductPropertyValue {
    /**
     * 
     * @type {string}
     * @memberof ProductPropertyValue
     */
    stringValue?: string | null;
    /**
     * 
     * @type {any}
     * @memberof ProductPropertyValue
     */
    value?: any | null;
}

/**
 * Check if a given object implements the ProductPropertyValue interface.
 */
export function instanceOfProductPropertyValue(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductPropertyValueFromJSON(json: any): ProductPropertyValue {
    return ProductPropertyValueFromJSONTyped(json, false);
}

export function ProductPropertyValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductPropertyValue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stringValue': !exists(json, 'stringValue') ? undefined : json['stringValue'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function ProductPropertyValueToJSON(value?: ProductPropertyValue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'stringValue': value.stringValue,
        'value': value.value,
    };
}

