/* tslint:disable */
/* eslint-disable */
/**
 * Kibo SiteSettings Service
 * OpenAPI Spec for Kibo SiteSettings Service
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
 * @interface FutureDateLimit
 */
export interface FutureDateLimit {
    /**
     * 
     * @type {string}
     * @memberof FutureDateLimit
     */
    futureDateLimitUnit?: string | null;
    /**
     * 
     * @type {number}
     * @memberof FutureDateLimit
     */
    futureDateLimitQuantity?: number;
}

/**
 * Check if a given object implements the FutureDateLimit interface.
 */
export function instanceOfFutureDateLimit(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FutureDateLimitFromJSON(json: any): FutureDateLimit {
    return FutureDateLimitFromJSONTyped(json, false);
}

export function FutureDateLimitFromJSONTyped(json: any, ignoreDiscriminator: boolean): FutureDateLimit {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'futureDateLimitUnit': !exists(json, 'futureDateLimitUnit') ? undefined : json['futureDateLimitUnit'],
        'futureDateLimitQuantity': !exists(json, 'futureDateLimitQuantity') ? undefined : json['futureDateLimitQuantity'],
    };
}

export function FutureDateLimitToJSON(value?: FutureDateLimit | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'futureDateLimitUnit': value.futureDateLimitUnit,
        'futureDateLimitQuantity': value.futureDateLimitQuantity,
    };
}

