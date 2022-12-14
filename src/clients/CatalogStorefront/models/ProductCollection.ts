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
import type { Product } from './Product';
import {
    ProductFromJSON,
    ProductFromJSONTyped,
    ProductToJSON,
} from './Product';

/**
 * 
 * @export
 * @interface ProductCollection
 */
export interface ProductCollection {
    /**
     * If a cursorMark is provided on the request, then the nextCursorMark will be populated on the response.
     * Provide this value as the cursorMark argument on the next request. If a cursorMark is provided on the request and the nextCursorMark value is null, then the end of the resultset was reached
     * @type {string}
     * @memberof ProductCollection
     */
    nextCursorMark?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ProductCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<Product>}
     * @memberof ProductCollection
     */
    items?: Array<Product> | null;
}

/**
 * Check if a given object implements the ProductCollection interface.
 */
export function instanceOfProductCollection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductCollectionFromJSON(json: any): ProductCollection {
    return ProductCollectionFromJSONTyped(json, false);
}

export function ProductCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nextCursorMark': !exists(json, 'nextCursorMark') ? undefined : json['nextCursorMark'],
        'startIndex': !exists(json, 'startIndex') ? undefined : json['startIndex'],
        'pageSize': !exists(json, 'pageSize') ? undefined : json['pageSize'],
        'pageCount': !exists(json, 'pageCount') ? undefined : json['pageCount'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(ProductFromJSON)),
    };
}

export function ProductCollectionToJSON(value?: ProductCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nextCursorMark': value.nextCursorMark,
        'startIndex': value.startIndex,
        'pageSize': value.pageSize,
        'pageCount': value.pageCount,
        'totalCount': value.totalCount,
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(ProductToJSON)),
    };
}

