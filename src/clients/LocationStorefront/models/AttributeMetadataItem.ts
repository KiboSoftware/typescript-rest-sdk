/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Location Storefront Service
 * OpenAPI Spec for Kibo Location Storefront Service
 *
 * The version of the OpenAPI document: v1_storefront
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
 * @interface AttributeMetadataItem
 */
export interface AttributeMetadataItem {
    /**
     * 
     * @type {string}
     * @memberof AttributeMetadataItem
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof AttributeMetadataItem
     */
    value: string;
}

/**
 * Check if a given object implements the AttributeMetadataItem interface.
 */
export function instanceOfAttributeMetadataItem(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "key" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function AttributeMetadataItemFromJSON(json: any): AttributeMetadataItem {
    return AttributeMetadataItemFromJSONTyped(json, false);
}

export function AttributeMetadataItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttributeMetadataItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': json['key'],
        'value': json['value'],
    };
}

export function AttributeMetadataItemToJSON(value?: AttributeMetadataItem | null): any {
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

