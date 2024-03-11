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
 * @interface CustomTableRateContent
 */
export interface CustomTableRateContent {
    /**
     * 
     * @type {string}
     * @memberof CustomTableRateContent
     */
    localeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomTableRateContent
     */
    name?: string | null;
}

/**
 * Check if a given object implements the CustomTableRateContent interface.
 */
export function instanceOfCustomTableRateContent(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomTableRateContentFromJSON(json: any): CustomTableRateContent {
    return CustomTableRateContentFromJSONTyped(json, false);
}

export function CustomTableRateContentFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomTableRateContent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'localeCode': !exists(json, 'localeCode') ? undefined : json['localeCode'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function CustomTableRateContentToJSON(value?: CustomTableRateContent | null): any {
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
