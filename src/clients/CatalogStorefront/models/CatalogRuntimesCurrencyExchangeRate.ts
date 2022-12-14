/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Runtime Services
 * OpenAPI Spec for Kibo Catalog Runtime Services
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * The currency exchange rates from one currency to another.
 * @export
 * @interface CatalogRuntimesCurrencyExchangeRate
 */
export interface CatalogRuntimesCurrencyExchangeRate {
    /**
     * The source currency code
     * @type {string}
     * @memberof CatalogRuntimesCurrencyExchangeRate
     */
    fromCurrencyCode?: string | null;
    /**
     * The target currency code
     * @type {string}
     * @memberof CatalogRuntimesCurrencyExchangeRate
     */
    toCurrencyCode?: string | null;
    /**
     * The exchange rate
     * @type {number}
     * @memberof CatalogRuntimesCurrencyExchangeRate
     */
    rate?: number | null;
    /**
     * An additional multiplier to use in calculations
     * @type {number}
     * @memberof CatalogRuntimesCurrencyExchangeRate
     */
    multiplier?: number | null;
    /**
     * Number of decimal places
     * @type {number}
     * @memberof CatalogRuntimesCurrencyExchangeRate
     */
    decimalPlaces?: number | null;
    /**
     * Rounding strategy
     * @type {number}
     * @memberof CatalogRuntimesCurrencyExchangeRate
     */
    roundingStrategy?: number | null;
    /**
     * Reference data for miscellaneous metadata from updates
     * @type {string}
     * @memberof CatalogRuntimesCurrencyExchangeRate
     */
    referenceData?: string | null;
}

/**
 * Check if a given object implements the CatalogRuntimesCurrencyExchangeRate interface.
 */
export function instanceOfCatalogRuntimesCurrencyExchangeRate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CatalogRuntimesCurrencyExchangeRateFromJSON(json: any): CatalogRuntimesCurrencyExchangeRate {
    return CatalogRuntimesCurrencyExchangeRateFromJSONTyped(json, false);
}

export function CatalogRuntimesCurrencyExchangeRateFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogRuntimesCurrencyExchangeRate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fromCurrencyCode': !exists(json, 'fromCurrencyCode') ? undefined : json['fromCurrencyCode'],
        'toCurrencyCode': !exists(json, 'toCurrencyCode') ? undefined : json['toCurrencyCode'],
        'rate': !exists(json, 'rate') ? undefined : json['rate'],
        'multiplier': !exists(json, 'multiplier') ? undefined : json['multiplier'],
        'decimalPlaces': !exists(json, 'decimalPlaces') ? undefined : json['decimalPlaces'],
        'roundingStrategy': !exists(json, 'roundingStrategy') ? undefined : json['roundingStrategy'],
        'referenceData': !exists(json, 'referenceData') ? undefined : json['referenceData'],
    };
}

export function CatalogRuntimesCurrencyExchangeRateToJSON(value?: CatalogRuntimesCurrencyExchangeRate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fromCurrencyCode': value.fromCurrencyCode,
        'toCurrencyCode': value.toCurrencyCode,
        'rate': value.rate,
        'multiplier': value.multiplier,
        'decimalPlaces': value.decimalPlaces,
        'roundingStrategy': value.roundingStrategy,
        'referenceData': value.referenceData,
    };
}

