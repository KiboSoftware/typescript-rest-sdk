/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Content Service
 * OpenAPI Spec for Kibo Content Service
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Document } from './Document';
import {
    DocumentFromJSON,
    DocumentFromJSONTyped,
    DocumentToJSON,
} from './Document';

/**
 * 
 * @export
 * @interface DocumentCollection
 */
export interface DocumentCollection {
    /**
     * 
     * @type {Array<string>}
     * @memberof DocumentCollection
     */
    subPaths?: Array<string> | null;
    /**
     * 
     * @type {number}
     * @memberof DocumentCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<Document>}
     * @memberof DocumentCollection
     */
    items?: Array<Document> | null;
}

/**
 * Check if a given object implements the DocumentCollection interface.
 */
export function instanceOfDocumentCollection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DocumentCollectionFromJSON(json: any): DocumentCollection {
    return DocumentCollectionFromJSONTyped(json, false);
}

export function DocumentCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): DocumentCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'subPaths': !exists(json, 'subPaths') ? undefined : json['subPaths'],
        'startIndex': !exists(json, 'startIndex') ? undefined : json['startIndex'],
        'pageSize': !exists(json, 'pageSize') ? undefined : json['pageSize'],
        'pageCount': !exists(json, 'pageCount') ? undefined : json['pageCount'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(DocumentFromJSON)),
    };
}

export function DocumentCollectionToJSON(value?: DocumentCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'subPaths': value.subPaths,
        'startIndex': value.startIndex,
        'pageSize': value.pageSize,
        'pageCount': value.pageCount,
        'totalCount': value.totalCount,
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(DocumentToJSON)),
    };
}

