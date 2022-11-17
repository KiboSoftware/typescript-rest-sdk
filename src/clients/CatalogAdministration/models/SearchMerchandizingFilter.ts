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
 * @interface SearchMerchandizingFilter
 */
export interface SearchMerchandizingFilter {
    /**
     * 
     * @type {string}
     * @memberof SearchMerchandizingFilter
     */
    inclusion?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SearchMerchandizingFilter
     */
    exclusion?: string | null;
}

/**
 * Check if a given object implements the SearchMerchandizingFilter interface.
 */
export function instanceOfSearchMerchandizingFilter(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SearchMerchandizingFilterFromJSON(json: any): SearchMerchandizingFilter {
    return SearchMerchandizingFilterFromJSONTyped(json, false);
}

export function SearchMerchandizingFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchMerchandizingFilter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'inclusion': !exists(json, 'inclusion') ? undefined : json['inclusion'],
        'exclusion': !exists(json, 'exclusion') ? undefined : json['exclusion'],
    };
}

export function SearchMerchandizingFilterToJSON(value?: SearchMerchandizingFilter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'inclusion': value.inclusion,
        'exclusion': value.exclusion,
    };
}

