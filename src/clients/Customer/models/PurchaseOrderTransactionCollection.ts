/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Customer Service
 * OpenAPI Spec for Kibo Customer Service
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { PurchaseOrderTransaction } from './PurchaseOrderTransaction';
import {
    PurchaseOrderTransactionFromJSON,
    PurchaseOrderTransactionFromJSONTyped,
    PurchaseOrderTransactionToJSON,
} from './PurchaseOrderTransaction';

/**
 * Collection of purchase order transactions returned as a whole. 
 * A collection is not paged.
 * @export
 * @interface PurchaseOrderTransactionCollection
 */
export interface PurchaseOrderTransactionCollection {
    /**
     * 
     * @type {number}
     * @memberof PurchaseOrderTransactionCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof PurchaseOrderTransactionCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof PurchaseOrderTransactionCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof PurchaseOrderTransactionCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<PurchaseOrderTransaction>}
     * @memberof PurchaseOrderTransactionCollection
     */
    items?: Array<PurchaseOrderTransaction> | null;
}

/**
 * Check if a given object implements the PurchaseOrderTransactionCollection interface.
 */
export function instanceOfPurchaseOrderTransactionCollection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PurchaseOrderTransactionCollectionFromJSON(json: any): PurchaseOrderTransactionCollection {
    return PurchaseOrderTransactionCollectionFromJSONTyped(json, false);
}

export function PurchaseOrderTransactionCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PurchaseOrderTransactionCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'startIndex': !exists(json, 'startIndex') ? undefined : json['startIndex'],
        'pageSize': !exists(json, 'pageSize') ? undefined : json['pageSize'],
        'pageCount': !exists(json, 'pageCount') ? undefined : json['pageCount'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(PurchaseOrderTransactionFromJSON)),
    };
}

export function PurchaseOrderTransactionCollectionToJSON(value?: PurchaseOrderTransactionCollection | null): any {
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
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(PurchaseOrderTransactionToJSON)),
    };
}

