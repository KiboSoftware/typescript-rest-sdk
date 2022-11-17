/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Shipping Admin Service
 * OpenAPI Spec for Kibo Shipping Admin Service
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { StringStringIEnumerableKeyValuePair } from './StringStringIEnumerableKeyValuePair';
import {
    StringStringIEnumerableKeyValuePairFromJSON,
    StringStringIEnumerableKeyValuePairFromJSONTyped,
    StringStringIEnumerableKeyValuePairToJSON,
} from './StringStringIEnumerableKeyValuePair';

/**
 * 
 * @export
 * @interface AppDevHttpContent
 */
export interface AppDevHttpContent {
    /**
     * 
     * @type {Array<StringStringIEnumerableKeyValuePair>}
     * @memberof AppDevHttpContent
     */
    readonly headers?: Array<StringStringIEnumerableKeyValuePair> | null;
}

/**
 * Check if a given object implements the AppDevHttpContent interface.
 */
export function instanceOfAppDevHttpContent(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppDevHttpContentFromJSON(json: any): AppDevHttpContent {
    return AppDevHttpContentFromJSONTyped(json, false);
}

export function AppDevHttpContentFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppDevHttpContent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'headers': !exists(json, 'headers') ? undefined : (json['headers'] === null ? null : (json['headers'] as Array<any>).map(StringStringIEnumerableKeyValuePairFromJSON)),
    };
}

export function AppDevHttpContentToJSON(value?: AppDevHttpContent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}

