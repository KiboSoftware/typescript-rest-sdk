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
import type { Currency } from './Currency';
import {
    CurrencyFromJSON,
    CurrencyFromJSONTyped,
    CurrencyToJSON,
} from './Currency';

/**
 * 
 * @export
 * @interface CurrencyCollection
 */
export interface CurrencyCollection {
    /**
     * 
     * @type {number}
     * @memberof CurrencyCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<Currency>}
     * @memberof CurrencyCollection
     */
    items?: Array<Currency> | null;
}

/**
 * Check if a given object implements the CurrencyCollection interface.
 */
export function instanceOfCurrencyCollection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CurrencyCollectionFromJSON(json: any): CurrencyCollection {
    return CurrencyCollectionFromJSONTyped(json, false);
}

export function CurrencyCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CurrencyCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(CurrencyFromJSON)),
    };
}

export function CurrencyCollectionToJSON(value?: CurrencyCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'totalCount': value.totalCount,
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(CurrencyToJSON)),
    };
}

