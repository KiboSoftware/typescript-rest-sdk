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
import type { Tag } from './Tag';
import {
    TagFromJSON,
    TagFromJSONTyped,
    TagToJSON,
} from './Tag';

/**
 * Collection of Tags returned as a whole. A collection is not paged.
 * @export
 * @interface TagCollection
 */
export interface TagCollection {
    /**
     * 
     * @type {number}
     * @memberof TagCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof TagCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof TagCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof TagCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<Tag>}
     * @memberof TagCollection
     */
    items?: Array<Tag> | null;
}

/**
 * Check if a given object implements the TagCollection interface.
 */
export function instanceOfTagCollection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TagCollectionFromJSON(json: any): TagCollection {
    return TagCollectionFromJSONTyped(json, false);
}

export function TagCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): TagCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'startIndex': !exists(json, 'startIndex') ? undefined : json['startIndex'],
        'pageSize': !exists(json, 'pageSize') ? undefined : json['pageSize'],
        'pageCount': !exists(json, 'pageCount') ? undefined : json['pageCount'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(TagFromJSON)),
    };
}

export function TagCollectionToJSON(value?: TagCollection | null): any {
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
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(TagToJSON)),
    };
}

