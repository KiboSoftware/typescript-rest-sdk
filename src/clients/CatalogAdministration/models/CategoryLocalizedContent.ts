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
import type { CategoryLocalizedImage } from './CategoryLocalizedImage';
import {
    CategoryLocalizedImageFromJSON,
    CategoryLocalizedImageFromJSONTyped,
    CategoryLocalizedImageToJSON,
} from './CategoryLocalizedImage';

/**
 * Container for language-specific content to display on the storefront. You'll have a container for each supported language (LocaleCode). This enables you to display a category in multiple languages yet manage it as a single category internally.
 * @export
 * @interface CategoryLocalizedContent
 */
export interface CategoryLocalizedContent {
    /**
     * List of images associated with the category.
     * @type {Array<CategoryLocalizedImage>}
     * @memberof CategoryLocalizedContent
     */
    categoryImages?: Array<CategoryLocalizedImage> | null;
    /**
     * Name of the category.
     * @type {string}
     * @memberof CategoryLocalizedContent
     */
    name?: string | null;
    /**
     * Description of the category to display on the storefront.
     * @type {string}
     * @memberof CategoryLocalizedContent
     */
    description?: string | null;
    /**
     * Title that appears at the top of new pages.
     * @type {string}
     * @memberof CategoryLocalizedContent
     */
    pageTitle?: string | null;
    /**
     * Lanugage used for category content. Currently, only en_US is supported.
     * @type {string}
     * @memberof CategoryLocalizedContent
     */
    localeCode?: string | null;
    /**
     * Metadata title. Metadata can be used to manage information internally. Sometimes used for SEO.
     * @type {string}
     * @memberof CategoryLocalizedContent
     */
    metaTagTitle?: string | null;
    /**
     * Metadata description. Metadata can be used to manage information internally. Sometimes used for SEO.
     * @type {string}
     * @memberof CategoryLocalizedContent
     */
    metaTagDescription?: string | null;
    /**
     * Metadata keywords. Metadata can be used to manage information internally. Sometimes used for SEO.
     * @type {string}
     * @memberof CategoryLocalizedContent
     */
    metaTagKeywords?: string | null;
    /**
     * Human-readable identifier that you can give to the category to create friendly URLs. For example, 
     * instead of "http: //example.com/products?category=2&id=25," the friendly URL can be "http: //example.com/products/category/2/25."
     * @type {string}
     * @memberof CategoryLocalizedContent
     */
    slug?: string | null;
}

/**
 * Check if a given object implements the CategoryLocalizedContent interface.
 */
export function instanceOfCategoryLocalizedContent(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CategoryLocalizedContentFromJSON(json: any): CategoryLocalizedContent {
    return CategoryLocalizedContentFromJSONTyped(json, false);
}

export function CategoryLocalizedContentFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategoryLocalizedContent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'categoryImages': !exists(json, 'categoryImages') ? undefined : (json['categoryImages'] === null ? null : (json['categoryImages'] as Array<any>).map(CategoryLocalizedImageFromJSON)),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'pageTitle': !exists(json, 'pageTitle') ? undefined : json['pageTitle'],
        'localeCode': !exists(json, 'localeCode') ? undefined : json['localeCode'],
        'metaTagTitle': !exists(json, 'metaTagTitle') ? undefined : json['metaTagTitle'],
        'metaTagDescription': !exists(json, 'metaTagDescription') ? undefined : json['metaTagDescription'],
        'metaTagKeywords': !exists(json, 'metaTagKeywords') ? undefined : json['metaTagKeywords'],
        'slug': !exists(json, 'slug') ? undefined : json['slug'],
    };
}

export function CategoryLocalizedContentToJSON(value?: CategoryLocalizedContent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'categoryImages': value.categoryImages === undefined ? undefined : (value.categoryImages === null ? null : (value.categoryImages as Array<any>).map(CategoryLocalizedImageToJSON)),
        'name': value.name,
        'description': value.description,
        'pageTitle': value.pageTitle,
        'localeCode': value.localeCode,
        'metaTagTitle': value.metaTagTitle,
        'metaTagDescription': value.metaTagDescription,
        'metaTagKeywords': value.metaTagKeywords,
        'slug': value.slug,
    };
}
