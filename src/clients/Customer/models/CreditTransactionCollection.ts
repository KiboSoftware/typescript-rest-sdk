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
import type { CreditTransaction } from './CreditTransaction';
import {
    CreditTransactionFromJSON,
    CreditTransactionFromJSONTyped,
    CreditTransactionToJSON,
} from './CreditTransaction';

/**
 * 
 * @export
 * @interface CreditTransactionCollection
 */
export interface CreditTransactionCollection {
    /**
     * 
     * @type {number}
     * @memberof CreditTransactionCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof CreditTransactionCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof CreditTransactionCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof CreditTransactionCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<CreditTransaction>}
     * @memberof CreditTransactionCollection
     */
    items?: Array<CreditTransaction> | null;
}

/**
 * Check if a given object implements the CreditTransactionCollection interface.
 */
export function instanceOfCreditTransactionCollection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreditTransactionCollectionFromJSON(json: any): CreditTransactionCollection {
    return CreditTransactionCollectionFromJSONTyped(json, false);
}

export function CreditTransactionCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreditTransactionCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'startIndex': !exists(json, 'startIndex') ? undefined : json['startIndex'],
        'pageSize': !exists(json, 'pageSize') ? undefined : json['pageSize'],
        'pageCount': !exists(json, 'pageCount') ? undefined : json['pageCount'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(CreditTransactionFromJSON)),
    };
}

export function CreditTransactionCollectionToJSON(value?: CreditTransactionCollection | null): any {
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
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(CreditTransactionToJSON)),
    };
}

