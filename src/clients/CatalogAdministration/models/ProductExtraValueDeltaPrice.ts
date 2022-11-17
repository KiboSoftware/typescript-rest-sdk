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
 * How much a product option costs above the cost of the base product, if at all.
 * @export
 * @interface ProductExtraValueDeltaPrice
 */
export interface ProductExtraValueDeltaPrice {
    /**
     * Which currency to use.
     * @type {string}
     * @memberof ProductExtraValueDeltaPrice
     */
    currencyCode?: string | null;
    /**
     * Amount of money saved when discounts are applied.
     * @type {number}
     * @memberof ProductExtraValueDeltaPrice
     */
    deltaPrice?: number;
}

/**
 * Check if a given object implements the ProductExtraValueDeltaPrice interface.
 */
export function instanceOfProductExtraValueDeltaPrice(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductExtraValueDeltaPriceFromJSON(json: any): ProductExtraValueDeltaPrice {
    return ProductExtraValueDeltaPriceFromJSONTyped(json, false);
}

export function ProductExtraValueDeltaPriceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductExtraValueDeltaPrice {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'deltaPrice': !exists(json, 'deltaPrice') ? undefined : json['deltaPrice'],
    };
}

export function ProductExtraValueDeltaPriceToJSON(value?: ProductExtraValueDeltaPrice | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'currencyCode': value.currencyCode,
        'deltaPrice': value.deltaPrice,
    };
}

