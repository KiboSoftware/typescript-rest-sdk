/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Reference Service
 * OpenAPI Spec for Kibo Reference Service
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ContentLocale } from './ContentLocale';
import {
    ContentLocaleFromJSON,
    ContentLocaleFromJSONTyped,
    ContentLocaleToJSON,
} from './ContentLocale';

/**
 * 
 * @export
 * @interface ContentLocaleCollection
 */
export interface ContentLocaleCollection {
    /**
     * 
     * @type {number}
     * @memberof ContentLocaleCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<ContentLocale>}
     * @memberof ContentLocaleCollection
     */
    items?: Array<ContentLocale> | null;
}

/**
 * Check if a given object implements the ContentLocaleCollection interface.
 */
export function instanceOfContentLocaleCollection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ContentLocaleCollectionFromJSON(json: any): ContentLocaleCollection {
    return ContentLocaleCollectionFromJSONTyped(json, false);
}

export function ContentLocaleCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContentLocaleCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(ContentLocaleFromJSON)),
    };
}

export function ContentLocaleCollectionToJSON(value?: ContentLocaleCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'totalCount': value.totalCount,
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(ContentLocaleToJSON)),
    };
}
