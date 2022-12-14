/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Admin Services
 * OpenAPI Spec for Kibo Catalog Admin Services
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
 * @interface ExtensibleAttributeMetadataItem
 */
export interface ExtensibleAttributeMetadataItem {
    /**
     * 
     * @type {string}
     * @memberof ExtensibleAttributeMetadataItem
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof ExtensibleAttributeMetadataItem
     */
    value: string;
}

/**
 * Check if a given object implements the ExtensibleAttributeMetadataItem interface.
 */
export function instanceOfExtensibleAttributeMetadataItem(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "key" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function ExtensibleAttributeMetadataItemFromJSON(json: any): ExtensibleAttributeMetadataItem {
    return ExtensibleAttributeMetadataItemFromJSONTyped(json, false);
}

export function ExtensibleAttributeMetadataItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExtensibleAttributeMetadataItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': json['key'],
        'value': json['value'],
    };
}

export function ExtensibleAttributeMetadataItemToJSON(value?: ExtensibleAttributeMetadataItem | null): any {
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

