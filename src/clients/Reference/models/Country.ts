/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Reference Service
 * OpenAPI Spec for Kibo Reference Service
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
 * @interface Country
 */
export interface Country {
    /**
     * 
     * @type {string}
     * @memberof Country
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Country
     */
    name?: string | null;
}

/**
 * Check if a given object implements the Country interface.
 */
export function instanceOfCountry(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CountryFromJSON(json: any): Country {
    return CountryFromJSONTyped(json, false);
}

export function CountryFromJSONTyped(json: any, ignoreDiscriminator: boolean): Country {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function CountryToJSON(value?: Country | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'name': value.name,
    };
}

