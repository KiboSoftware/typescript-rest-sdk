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
 * @interface FacetValidity
 */
export interface FacetValidity {
    /**
     * 
     * @type {boolean}
     * @memberof FacetValidity
     */
    isValid?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FacetValidity
     */
    reasonCode?: string | null;
}

/**
 * Check if a given object implements the FacetValidity interface.
 */
export function instanceOfFacetValidity(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FacetValidityFromJSON(json: any): FacetValidity {
    return FacetValidityFromJSONTyped(json, false);
}

export function FacetValidityFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacetValidity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isValid': !exists(json, 'isValid') ? undefined : json['isValid'],
        'reasonCode': !exists(json, 'reasonCode') ? undefined : json['reasonCode'],
    };
}

export function FacetValidityToJSON(value?: FacetValidity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'isValid': value.isValid,
        'reasonCode': value.reasonCode,
    };
}
