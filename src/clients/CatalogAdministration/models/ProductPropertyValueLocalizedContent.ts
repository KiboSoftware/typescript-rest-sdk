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
 * Attribute Value Localized Resource
 * @export
 * @interface ProductPropertyValueLocalizedContent
 */
export interface ProductPropertyValueLocalizedContent {
    /**
     * Language used for the string attribute value.
     * @type {string}
     * @memberof ProductPropertyValueLocalizedContent
     */
    localeCode?: string | null;
    /**
     * Localized Value in the language of the locale code
     * @type {string}
     * @memberof ProductPropertyValueLocalizedContent
     */
    stringValue?: string | null;
}

/**
 * Check if a given object implements the ProductPropertyValueLocalizedContent interface.
 */
export function instanceOfProductPropertyValueLocalizedContent(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductPropertyValueLocalizedContentFromJSON(json: any): ProductPropertyValueLocalizedContent {
    return ProductPropertyValueLocalizedContentFromJSONTyped(json, false);
}

export function ProductPropertyValueLocalizedContentFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductPropertyValueLocalizedContent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'localeCode': !exists(json, 'localeCode') ? undefined : json['localeCode'],
        'stringValue': !exists(json, 'stringValue') ? undefined : json['stringValue'],
    };
}

export function ProductPropertyValueLocalizedContentToJSON(value?: ProductPropertyValueLocalizedContent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'localeCode': value.localeCode,
        'stringValue': value.stringValue,
    };
}

