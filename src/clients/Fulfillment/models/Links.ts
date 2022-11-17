/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Fulfillment Service
 * OpenAPI Spec for Kibo Fulfillment Service
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
 * @interface Links
 */
export interface Links {
    /**
     * 
     * @type {boolean}
     * @memberof Links
     */
    empty?: boolean;
}

/**
 * Check if a given object implements the Links interface.
 */
export function instanceOfLinks(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LinksFromJSON(json: any): Links {
    return LinksFromJSONTyped(json, false);
}

export function LinksFromJSONTyped(json: any, ignoreDiscriminator: boolean): Links {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'empty': !exists(json, 'empty') ? undefined : json['empty'],
    };
}

export function LinksToJSON(value?: Links | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'empty': value.empty,
    };
}

