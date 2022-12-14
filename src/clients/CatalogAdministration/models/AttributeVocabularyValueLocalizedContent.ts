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
 * @interface AttributeVocabularyValueLocalizedContent
 */
export interface AttributeVocabularyValueLocalizedContent {
    /**
     * Language used for the string attribute value. Currently, only en_US is supported.
     * @type {string}
     * @memberof AttributeVocabularyValueLocalizedContent
     */
    localeCode?: string | null;
    /**
     * Localized Value in the language of the locale code
     * @type {string}
     * @memberof AttributeVocabularyValueLocalizedContent
     */
    stringValue?: string | null;
}

/**
 * Check if a given object implements the AttributeVocabularyValueLocalizedContent interface.
 */
export function instanceOfAttributeVocabularyValueLocalizedContent(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AttributeVocabularyValueLocalizedContentFromJSON(json: any): AttributeVocabularyValueLocalizedContent {
    return AttributeVocabularyValueLocalizedContentFromJSONTyped(json, false);
}

export function AttributeVocabularyValueLocalizedContentFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttributeVocabularyValueLocalizedContent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'localeCode': !exists(json, 'localeCode') ? undefined : json['localeCode'],
        'stringValue': !exists(json, 'stringValue') ? undefined : json['stringValue'],
    };
}

export function AttributeVocabularyValueLocalizedContentToJSON(value?: AttributeVocabularyValueLocalizedContent | null): any {
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

