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
 * How much more a product variation costs above the cost of the base product. If the price of the base product changes, this price is adjusted automatically.
 * @export
 * @interface ProductVariationDeltaPrice
 */
export interface ProductVariationDeltaPrice {
    /**
     * Which currency is in use.
     * @type {string}
     * @memberof ProductVariationDeltaPrice
     */
    currencyCode?: string | null;
    /**
     * How much more the variation costs above the cost of the base product.
     * @type {number}
     * @memberof ProductVariationDeltaPrice
     */
    value?: number | null;
    /**
     * Manufacturer Suggested Retail Price.
     * @type {number}
     * @memberof ProductVariationDeltaPrice
     */
    msrp?: number | null;
    /**
     * Credit amt of the product
     * @type {number}
     * @memberof ProductVariationDeltaPrice
     */
    creditValue?: number | null;
}

/**
 * Check if a given object implements the ProductVariationDeltaPrice interface.
 */
export function instanceOfProductVariationDeltaPrice(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductVariationDeltaPriceFromJSON(json: any): ProductVariationDeltaPrice {
    return ProductVariationDeltaPriceFromJSONTyped(json, false);
}

export function ProductVariationDeltaPriceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductVariationDeltaPrice {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'msrp': !exists(json, 'msrp') ? undefined : json['msrp'],
        'creditValue': !exists(json, 'creditValue') ? undefined : json['creditValue'],
    };
}

export function ProductVariationDeltaPriceToJSON(value?: ProductVariationDeltaPrice | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'currencyCode': value.currencyCode,
        'value': value.value,
        'msrp': value.msrp,
        'creditValue': value.creditValue,
    };
}

