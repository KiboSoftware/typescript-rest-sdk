/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Location Storefront Service
 * OpenAPI Spec for Kibo Location Storefront Service
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
 * @interface CommerceRuntimeAttributeLocalizedContent
 */
export interface CommerceRuntimeAttributeLocalizedContent {
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttributeLocalizedContent
     */
    localeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttributeLocalizedContent
     */
    value?: string | null;
}

/**
 * Check if a given object implements the CommerceRuntimeAttributeLocalizedContent interface.
 */
export function instanceOfCommerceRuntimeAttributeLocalizedContent(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommerceRuntimeAttributeLocalizedContentFromJSON(json: any): CommerceRuntimeAttributeLocalizedContent {
    return CommerceRuntimeAttributeLocalizedContentFromJSONTyped(json, false);
}

export function CommerceRuntimeAttributeLocalizedContentFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommerceRuntimeAttributeLocalizedContent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'localeCode': !exists(json, 'localeCode') ? undefined : json['localeCode'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function CommerceRuntimeAttributeLocalizedContentToJSON(value?: CommerceRuntimeAttributeLocalizedContent | null): any {
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

