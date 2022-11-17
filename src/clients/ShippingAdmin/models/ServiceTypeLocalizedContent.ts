/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Shipping Admin Service
 * OpenAPI Spec for Kibo Shipping Admin Service
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
 * @interface ServiceTypeLocalizedContent
 */
export interface ServiceTypeLocalizedContent {
    /**
     * 
     * @type {string}
     * @memberof ServiceTypeLocalizedContent
     */
    localeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ServiceTypeLocalizedContent
     */
    name?: string | null;
}

/**
 * Check if a given object implements the ServiceTypeLocalizedContent interface.
 */
export function instanceOfServiceTypeLocalizedContent(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ServiceTypeLocalizedContentFromJSON(json: any): ServiceTypeLocalizedContent {
    return ServiceTypeLocalizedContentFromJSONTyped(json, false);
}

export function ServiceTypeLocalizedContentFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceTypeLocalizedContent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'localeCode': !exists(json, 'localeCode') ? undefined : json['localeCode'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function ServiceTypeLocalizedContentToJSON(value?: ServiceTypeLocalizedContent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'localeCode': value.localeCode,
        'name': value.name,
    };
}

