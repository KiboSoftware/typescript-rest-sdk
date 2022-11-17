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
 * @interface SearchMerchandizingImpactItem
 */
export interface SearchMerchandizingImpactItem {
    /**
     * 
     * @type {string}
     * @memberof SearchMerchandizingImpactItem
     */
    productCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SearchMerchandizingImpactItem
     */
    sliceValue?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SearchMerchandizingImpactItem
     */
    position?: number;
    /**
     * 
     * @type {boolean}
     * @memberof SearchMerchandizingImpactItem
     */
    isPinned?: boolean;
}

/**
 * Check if a given object implements the SearchMerchandizingImpactItem interface.
 */
export function instanceOfSearchMerchandizingImpactItem(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SearchMerchandizingImpactItemFromJSON(json: any): SearchMerchandizingImpactItem {
    return SearchMerchandizingImpactItemFromJSONTyped(json, false);
}

export function SearchMerchandizingImpactItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchMerchandizingImpactItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'productCode': !exists(json, 'productCode') ? undefined : json['productCode'],
        'sliceValue': !exists(json, 'sliceValue') ? undefined : json['sliceValue'],
        'position': !exists(json, 'position') ? undefined : json['position'],
        'isPinned': !exists(json, 'isPinned') ? undefined : json['isPinned'],
    };
}

export function SearchMerchandizingImpactItemToJSON(value?: SearchMerchandizingImpactItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'productCode': value.productCode,
        'sliceValue': value.sliceValue,
        'position': value.position,
        'isPinned': value.isPinned,
    };
}

