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
import type { CurrencyExchangeRate } from './CurrencyExchangeRate';
import {
    CurrencyExchangeRateFromJSON,
    CurrencyExchangeRateFromJSONTyped,
    CurrencyExchangeRateToJSON,
} from './CurrencyExchangeRate';

/**
 * Non-pages collection of currency-exchange-rates.
 * @export
 * @interface CurrencyExchangeRateCollection
 */
export interface CurrencyExchangeRateCollection {
    /**
     * 
     * @type {number}
     * @memberof CurrencyExchangeRateCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<CurrencyExchangeRate>}
     * @memberof CurrencyExchangeRateCollection
     */
    items?: Array<CurrencyExchangeRate> | null;
}

/**
 * Check if a given object implements the CurrencyExchangeRateCollection interface.
 */
export function instanceOfCurrencyExchangeRateCollection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CurrencyExchangeRateCollectionFromJSON(json: any): CurrencyExchangeRateCollection {
    return CurrencyExchangeRateCollectionFromJSONTyped(json, false);
}

export function CurrencyExchangeRateCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CurrencyExchangeRateCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(CurrencyExchangeRateFromJSON)),
    };
}

export function CurrencyExchangeRateCollectionToJSON(value?: CurrencyExchangeRateCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'totalCount': value.totalCount,
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(CurrencyExchangeRateToJSON)),
    };
}
