/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Runtime Services
 * OpenAPI Spec for Kibo Catalog Runtime Services
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Category } from './Category';
import {
    CategoryFromJSON,
    CategoryFromJSONTyped,
    CategoryToJSON,
} from './Category';

/**
 * Collection of categories returned as a whole. A collection is not paged.
 * @export
 * @interface CategoryCollection
 */
export interface CategoryCollection {
    /**
     * 
     * @type {number}
     * @memberof CategoryCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<Category>}
     * @memberof CategoryCollection
     */
    items?: Array<Category> | null;
}

/**
 * Check if a given object implements the CategoryCollection interface.
 */
export function instanceOfCategoryCollection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CategoryCollectionFromJSON(json: any): CategoryCollection {
    return CategoryCollectionFromJSONTyped(json, false);
}

export function CategoryCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategoryCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(CategoryFromJSON)),
    };
}

export function CategoryCollectionToJSON(value?: CategoryCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'totalCount': value.totalCount,
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(CategoryToJSON)),
    };
}

