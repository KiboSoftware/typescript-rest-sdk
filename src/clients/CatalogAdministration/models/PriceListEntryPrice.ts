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
/**
 * 
 * @export
 * @interface PriceListEntryPrice
 */
export interface PriceListEntryPrice {
    /**
     * 
     * @type {number}
     * @memberof PriceListEntryPrice
     */
    minQty?: number;
    /**
     * 
     * @type {string}
     * @memberof PriceListEntryPrice
     */
    listPriceMode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PriceListEntryPrice
     */
    listPrice?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PriceListEntryPrice
     */
    salePriceMode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PriceListEntryPrice
     */
    salePrice?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PriceListEntryPrice
     */
    subscriptionPriceMode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PriceListEntryPrice
     */
    subscriptionPrice?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PriceListEntryPrice
     */
    subscriptionSalePriceMode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PriceListEntryPrice
     */
    subscriptionSalePrice?: number | null;
}

/**
 * Check if a given object implements the PriceListEntryPrice interface.
 */
export function instanceOfPriceListEntryPrice(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PriceListEntryPriceFromJSON(json: any): PriceListEntryPrice {
    return PriceListEntryPriceFromJSONTyped(json, false);
}

export function PriceListEntryPriceFromJSONTyped(json: any, ignoreDiscriminator: boolean): PriceListEntryPrice {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'minQty': !exists(json, 'minQty') ? undefined : json['minQty'],
        'listPriceMode': !exists(json, 'listPriceMode') ? undefined : json['listPriceMode'],
        'listPrice': !exists(json, 'listPrice') ? undefined : json['listPrice'],
        'salePriceMode': !exists(json, 'salePriceMode') ? undefined : json['salePriceMode'],
        'salePrice': !exists(json, 'salePrice') ? undefined : json['salePrice'],
        'subscriptionPriceMode': !exists(json, 'subscriptionPriceMode') ? undefined : json['subscriptionPriceMode'],
        'subscriptionPrice': !exists(json, 'subscriptionPrice') ? undefined : json['subscriptionPrice'],
        'subscriptionSalePriceMode': !exists(json, 'subscriptionSalePriceMode') ? undefined : json['subscriptionSalePriceMode'],
        'subscriptionSalePrice': !exists(json, 'subscriptionSalePrice') ? undefined : json['subscriptionSalePrice'],
    };
}

export function PriceListEntryPriceToJSON(value?: PriceListEntryPrice | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'minQty': value.minQty,
        'listPriceMode': value.listPriceMode,
        'listPrice': value.listPrice,
        'salePriceMode': value.salePriceMode,
        'salePrice': value.salePrice,
        'subscriptionPriceMode': value.subscriptionPriceMode,
        'subscriptionPrice': value.subscriptionPrice,
        'subscriptionSalePriceMode': value.subscriptionSalePriceMode,
        'subscriptionSalePrice': value.subscriptionSalePrice,
    };
}

