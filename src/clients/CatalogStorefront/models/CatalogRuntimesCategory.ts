/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Runtime Services
 * OpenAPI Spec for Kibo Catalog Runtime Services
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CatalogRuntimesCategoryAttribute } from './CatalogRuntimesCategoryAttribute';
import {
    CatalogRuntimesCategoryAttributeFromJSON,
    CatalogRuntimesCategoryAttributeFromJSONTyped,
    CatalogRuntimesCategoryAttributeToJSON,
} from './CatalogRuntimesCategoryAttribute';
import type { CategoryContent } from './CategoryContent';
import {
    CategoryContentFromJSON,
    CategoryContentFromJSONTyped,
    CategoryContentToJSON,
} from './CategoryContent';

/**
 * The category hierarchy of your store as it appears on the storefront. This is the category heirarchy defined with the admin/category resource except for any categories with an IsDisplayed value set to false.
 * @export
 * @interface CatalogRuntimesCategory
 */
export interface CatalogRuntimesCategory {
    /**
     * Internal unique identifier of the category. System-supplied and read-only.
     * @type {number}
     * @memberof CatalogRuntimesCategory
     */
    categoryId?: number;
    /**
     * 
     * @type {CatalogRuntimesCategory}
     * @memberof CatalogRuntimesCategory
     */
    parentCategory?: CatalogRuntimesCategory;
    /**
     * 
     * @type {CategoryContent}
     * @memberof CatalogRuntimesCategory
     */
    content?: CategoryContent;
    /**
     * List of subcategories that belong to this category.
     * @type {Array<CatalogRuntimesCategory>}
     * @memberof CatalogRuntimesCategory
     */
    childrenCategories?: Array<CatalogRuntimesCategory> | null;
    /**
     * Order in which categories appear when they are at the same level (siblings). For example, categories can be sequenced so that a specific category always appears first (or last).
     * @type {number}
     * @memberof CatalogRuntimesCategory
     */
    sequence?: number | null;
    /**
     * Indicates whether the category should be displayed.
     * @type {boolean}
     * @memberof CatalogRuntimesCategory
     */
    isDisplayed?: boolean;
    /**
     * External unique identifier of the category.
     * @type {string}
     * @memberof CatalogRuntimesCategory
     */
    categoryCode?: string | null;
    /**
     * Indicates whether the category should be displayed.
     * @type {number}
     * @memberof CatalogRuntimesCategory
     */
    count?: number | null;
    /**
     * Last Modified Date Time
     * @type {Date}
     * @memberof CatalogRuntimesCategory
     */
    updateDate?: Date;
    /**
     * Indicates whether the category should be sliced
     * @type {boolean}
     * @memberof CatalogRuntimesCategory
     */
    shouldSlice?: boolean;
    /**
     * 
     * @type {Array<CatalogRuntimesCategoryAttribute>}
     * @memberof CatalogRuntimesCategory
     */
    attributes?: Array<CatalogRuntimesCategoryAttribute> | null;
}

/**
 * Check if a given object implements the CatalogRuntimesCategory interface.
 */
export function instanceOfCatalogRuntimesCategory(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CatalogRuntimesCategoryFromJSON(json: any): CatalogRuntimesCategory {
    return CatalogRuntimesCategoryFromJSONTyped(json, false);
}

export function CatalogRuntimesCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogRuntimesCategory {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'categoryId': !exists(json, 'categoryId') ? undefined : json['categoryId'],
        'parentCategory': !exists(json, 'parentCategory') ? undefined : CatalogRuntimesCategoryFromJSON(json['parentCategory']),
        'content': !exists(json, 'content') ? undefined : CategoryContentFromJSON(json['content']),
        'childrenCategories': !exists(json, 'childrenCategories') ? undefined : (json['childrenCategories'] === null ? null : (json['childrenCategories'] as Array<any>).map(CatalogRuntimesCategoryFromJSON)),
        'sequence': !exists(json, 'sequence') ? undefined : json['sequence'],
        'isDisplayed': !exists(json, 'isDisplayed') ? undefined : json['isDisplayed'],
        'categoryCode': !exists(json, 'categoryCode') ? undefined : json['categoryCode'],
        'count': !exists(json, 'count') ? undefined : json['count'],
        'updateDate': !exists(json, 'updateDate') ? undefined : (new Date(json['updateDate'])),
        'shouldSlice': !exists(json, 'shouldSlice') ? undefined : json['shouldSlice'],
        'attributes': !exists(json, 'attributes') ? undefined : (json['attributes'] === null ? null : (json['attributes'] as Array<any>).map(CatalogRuntimesCategoryAttributeFromJSON)),
    };
}

export function CatalogRuntimesCategoryToJSON(value?: CatalogRuntimesCategory | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'categoryId': value.categoryId,
        'parentCategory': CatalogRuntimesCategoryToJSON(value.parentCategory),
        'content': CategoryContentToJSON(value.content),
        'childrenCategories': value.childrenCategories === undefined ? undefined : (value.childrenCategories === null ? null : (value.childrenCategories as Array<any>).map(CatalogRuntimesCategoryToJSON)),
        'sequence': value.sequence,
        'isDisplayed': value.isDisplayed,
        'categoryCode': value.categoryCode,
        'count': value.count,
        'updateDate': value.updateDate === undefined ? undefined : (value.updateDate.toISOString()),
        'shouldSlice': value.shouldSlice,
        'attributes': value.attributes === undefined ? undefined : (value.attributes === null ? null : (value.attributes as Array<any>).map(CatalogRuntimesCategoryAttributeToJSON)),
    };
}

