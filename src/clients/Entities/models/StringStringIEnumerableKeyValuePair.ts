/* tslint:disable */
/* eslint-disable */
/**
 * Kibo MZDB Service
 * OpenAPI Spec for Kibo MZDB Service
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
 * @interface StringStringIEnumerableKeyValuePair
 */
export interface StringStringIEnumerableKeyValuePair {
    /**
     * 
     * @type {string}
     * @memberof StringStringIEnumerableKeyValuePair
     */
    key?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof StringStringIEnumerableKeyValuePair
     */
    value?: Array<string> | null;
}

/**
 * Check if a given object implements the StringStringIEnumerableKeyValuePair interface.
 */
export function instanceOfStringStringIEnumerableKeyValuePair(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StringStringIEnumerableKeyValuePairFromJSON(json: any): StringStringIEnumerableKeyValuePair {
    return StringStringIEnumerableKeyValuePairFromJSONTyped(json, false);
}

export function StringStringIEnumerableKeyValuePairFromJSONTyped(json: any, ignoreDiscriminator: boolean): StringStringIEnumerableKeyValuePair {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': !exists(json, 'key') ? undefined : json['key'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function StringStringIEnumerableKeyValuePairToJSON(value?: StringStringIEnumerableKeyValuePair | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'key': value.key,
        'value': value.value,
    };
}

