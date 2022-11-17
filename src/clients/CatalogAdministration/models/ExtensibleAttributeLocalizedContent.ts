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
 * @interface ExtensibleAttributeLocalizedContent
 */
export interface ExtensibleAttributeLocalizedContent {
    /**
     * 
     * @type {string}
     * @memberof ExtensibleAttributeLocalizedContent
     */
    localeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExtensibleAttributeLocalizedContent
     */
    value?: string | null;
}

/**
 * Check if a given object implements the ExtensibleAttributeLocalizedContent interface.
 */
export function instanceOfExtensibleAttributeLocalizedContent(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExtensibleAttributeLocalizedContentFromJSON(json: any): ExtensibleAttributeLocalizedContent {
    return ExtensibleAttributeLocalizedContentFromJSONTyped(json, false);
}

export function ExtensibleAttributeLocalizedContentFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExtensibleAttributeLocalizedContent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'localeCode': !exists(json, 'localeCode') ? undefined : json['localeCode'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function ExtensibleAttributeLocalizedContentToJSON(value?: ExtensibleAttributeLocalizedContent | null): any {
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
