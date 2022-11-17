/* tslint:disable */
/* eslint-disable */
/**
 * Kibo CommerceRuntime Service
 * OpenAPI Spec for Kibo CommerceRuntime Service
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
 * @interface CommerceRuntimeAttributeMetadataItem
 */
export interface CommerceRuntimeAttributeMetadataItem {
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttributeMetadataItem
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttributeMetadataItem
     */
    value: string;
}

/**
 * Check if a given object implements the CommerceRuntimeAttributeMetadataItem interface.
 */
export function instanceOfCommerceRuntimeAttributeMetadataItem(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "key" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function CommerceRuntimeAttributeMetadataItemFromJSON(json: any): CommerceRuntimeAttributeMetadataItem {
    return CommerceRuntimeAttributeMetadataItemFromJSONTyped(json, false);
}

export function CommerceRuntimeAttributeMetadataItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommerceRuntimeAttributeMetadataItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': json['key'],
        'value': json['value'],
    };
}

export function CommerceRuntimeAttributeMetadataItemToJSON(value?: CommerceRuntimeAttributeMetadataItem | null): any {
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

