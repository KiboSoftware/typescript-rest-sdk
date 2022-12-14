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
import type { Discount } from './Discount';
import {
    DiscountFromJSON,
    DiscountFromJSONTyped,
    DiscountToJSON,
} from './Discount';

/**
 * Collection of discounts returned as a whole. A collection is not paged.
 * @export
 * @interface DiscountCollection
 */
export interface DiscountCollection {
    /**
     * 
     * @type {number}
     * @memberof DiscountCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof DiscountCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof DiscountCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof DiscountCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<Discount>}
     * @memberof DiscountCollection
     */
    items?: Array<Discount> | null;
}

/**
 * Check if a given object implements the DiscountCollection interface.
 */
export function instanceOfDiscountCollection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DiscountCollectionFromJSON(json: any): DiscountCollection {
    return DiscountCollectionFromJSONTyped(json, false);
}

export function DiscountCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiscountCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'startIndex': !exists(json, 'startIndex') ? undefined : json['startIndex'],
        'pageSize': !exists(json, 'pageSize') ? undefined : json['pageSize'],
        'pageCount': !exists(json, 'pageCount') ? undefined : json['pageCount'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(DiscountFromJSON)),
    };
}

export function DiscountCollectionToJSON(value?: DiscountCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'startIndex': value.startIndex,
        'pageSize': value.pageSize,
        'pageCount': value.pageCount,
        'totalCount': value.totalCount,
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(DiscountToJSON)),
    };
}

