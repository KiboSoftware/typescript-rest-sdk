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
import type { CategoryImage } from './CategoryImage';
import {
    CategoryImageFromJSON,
    CategoryImageFromJSONTyped,
    CategoryImageToJSON,
} from './CategoryImage';

/**
 * Name of the category and optionally, a description, page title, friendly URL, associated images, and any metadata.
 * @export
 * @interface CategoryContent
 */
export interface CategoryContent {
    /**
     * Images associated with the category.
     * @type {Array<CategoryImage>}
     * @memberof CategoryContent
     */
    categoryImages?: Array<CategoryImage> | null;
    /**
     * Name of the category as it appears on the storefront.
     * @type {string}
     * @memberof CategoryContent
     */
    name?: string | null;
    /**
     * Description of the category as it appears on the storefront.
     * @type {string}
     * @memberof CategoryContent
     */
    description?: string | null;
    /**
     * Title that appears at the top of new pages.
     * @type {string}
     * @memberof CategoryContent
     */
    pageTitle?: string | null;
    /**
     * Metadata title. Metadata can be used to manage information internally.
     * @type {string}
     * @memberof CategoryContent
     */
    metaTagTitle?: string | null;
    /**
     * Metadata description. Metadata can be used to manage information internally.
     * @type {string}
     * @memberof CategoryContent
     */
    metaTagDescription?: string | null;
    /**
     * Metadata keywords. Metadata can be used to manage information internally.
     * @type {string}
     * @memberof CategoryContent
     */
    metaTagKeywords?: string | null;
    /**
     * Human-readable identifier given to the category to create friendly URLs.
     * @type {string}
     * @memberof CategoryContent
     */
    slug?: string | null;
}

/**
 * Check if a given object implements the CategoryContent interface.
 */
export function instanceOfCategoryContent(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CategoryContentFromJSON(json: any): CategoryContent {
    return CategoryContentFromJSONTyped(json, false);
}

export function CategoryContentFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategoryContent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'categoryImages': !exists(json, 'categoryImages') ? undefined : (json['categoryImages'] === null ? null : (json['categoryImages'] as Array<any>).map(CategoryImageFromJSON)),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'pageTitle': !exists(json, 'pageTitle') ? undefined : json['pageTitle'],
        'metaTagTitle': !exists(json, 'metaTagTitle') ? undefined : json['metaTagTitle'],
        'metaTagDescription': !exists(json, 'metaTagDescription') ? undefined : json['metaTagDescription'],
        'metaTagKeywords': !exists(json, 'metaTagKeywords') ? undefined : json['metaTagKeywords'],
        'slug': !exists(json, 'slug') ? undefined : json['slug'],
    };
}

export function CategoryContentToJSON(value?: CategoryContent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'categoryImages': value.categoryImages === undefined ? undefined : (value.categoryImages === null ? null : (value.categoryImages as Array<any>).map(CategoryImageToJSON)),
        'name': value.name,
        'description': value.description,
        'pageTitle': value.pageTitle,
        'metaTagTitle': value.metaTagTitle,
        'metaTagDescription': value.metaTagDescription,
        'metaTagKeywords': value.metaTagKeywords,
        'slug': value.slug,
    };
}

