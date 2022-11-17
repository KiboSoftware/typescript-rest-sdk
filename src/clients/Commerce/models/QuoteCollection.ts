/* tslint:disable */
/* eslint-disable */
/**
 * Kibo CommerceRuntime Service
 * OpenAPI Spec for Kibo CommerceRuntime Service
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Quote } from './Quote';
import {
    QuoteFromJSON,
    QuoteFromJSONTyped,
    QuoteToJSON,
} from './Quote';

/**
 * 
 * @export
 * @interface QuoteCollection
 */
export interface QuoteCollection {
    /**
     * 
     * @type {number}
     * @memberof QuoteCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof QuoteCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof QuoteCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof QuoteCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<Quote>}
     * @memberof QuoteCollection
     */
    items?: Array<Quote> | null;
}

/**
 * Check if a given object implements the QuoteCollection interface.
 */
export function instanceOfQuoteCollection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function QuoteCollectionFromJSON(json: any): QuoteCollection {
    return QuoteCollectionFromJSONTyped(json, false);
}

export function QuoteCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuoteCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'startIndex': !exists(json, 'startIndex') ? undefined : json['startIndex'],
        'pageSize': !exists(json, 'pageSize') ? undefined : json['pageSize'],
        'pageCount': !exists(json, 'pageCount') ? undefined : json['pageCount'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(QuoteFromJSON)),
    };
}

export function QuoteCollectionToJSON(value?: QuoteCollection | null): any {
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
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(QuoteToJSON)),
    };
}

