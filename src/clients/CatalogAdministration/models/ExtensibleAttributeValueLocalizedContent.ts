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
 * @interface ExtensibleAttributeValueLocalizedContent
 */
export interface ExtensibleAttributeValueLocalizedContent {
    /**
     * 
     * @type {string}
     * @memberof ExtensibleAttributeValueLocalizedContent
     */
    localeCode: string;
    /**
     * 
     * @type {string}
     * @memberof ExtensibleAttributeValueLocalizedContent
     */
    value: string;
}

/**
 * Check if a given object implements the ExtensibleAttributeValueLocalizedContent interface.
 */
export function instanceOfExtensibleAttributeValueLocalizedContent(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "localeCode" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function ExtensibleAttributeValueLocalizedContentFromJSON(json: any): ExtensibleAttributeValueLocalizedContent {
    return ExtensibleAttributeValueLocalizedContentFromJSONTyped(json, false);
}

export function ExtensibleAttributeValueLocalizedContentFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExtensibleAttributeValueLocalizedContent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'localeCode': json['localeCode'],
        'value': json['value'],
    };
}

export function ExtensibleAttributeValueLocalizedContentToJSON(value?: ExtensibleAttributeValueLocalizedContent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'localeCode': value.localeCode,
        'value': value.value,
    };
}

