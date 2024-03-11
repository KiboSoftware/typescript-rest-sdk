/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Content Service
 * OpenAPI Spec for Kibo Content Service
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
 * @interface KeyValuePair2
 */
export interface KeyValuePair2 {
    /**
     * 
     * @type {string}
     * @memberof KeyValuePair2
     */
    key?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof KeyValuePair2
     */
    value?: Array<string> | null;
}

/**
 * Check if a given object implements the KeyValuePair2 interface.
 */
export function instanceOfKeyValuePair2(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function KeyValuePair2FromJSON(json: any): KeyValuePair2 {
    return KeyValuePair2FromJSONTyped(json, false);
}

export function KeyValuePair2FromJSONTyped(json: any, ignoreDiscriminator: boolean): KeyValuePair2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': !exists(json, 'key') ? undefined : json['key'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function KeyValuePair2ToJSON(value?: KeyValuePair2 | null): any {
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
