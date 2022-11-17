/* tslint:disable */
/* eslint-disable */
/**
 * Kibo SubscriptionRuntime Service
 * OpenAPI Spec for Kibo SubscriptionRuntime Service
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
 * Price of the product with any sale and discounts applied.
 * @export
 * @interface ProductPrice
 */
export interface ProductPrice {
    /**
     * Price of the product. This is the price that the merchant intends to sell the product if no sale price is present.
     * @type {number}
     * @memberof ProductPrice
     */
    price?: number | null;
    /**
     * Current sale price of the product, which is a specific numerical amount (not a percentage off).
     * @type {number}
     * @memberof ProductPrice
     */
    salePrice?: number | null;
    /**
     * An override price applied on the product by the tenant.
     * @type {number}
     * @memberof ProductPrice
     */
    tenantOverridePrice?: number | null;
    /**
     * MSRP of product.
     * @type {number}
     * @memberof ProductPrice
     */
    msrp?: number | null;
    /**
     * Credit Value when the product happens to be a gift card or similar product
     * @type {number}
     * @memberof ProductPrice
     */
    creditValue?: number | null;
    /**
     * Pricelist code for the product
     * @type {string}
     * @memberof ProductPrice
     */
    priceListCode?: string | null;
    /**
     * Pricelist entry mode of the product.
     * Note: possible values are below
     * 1. null : Product doesn't participate in pricelist
     * 2. Bulk : Bulk volume price available(unit price vary based on quantity)
     * 3. Simple:
     * @type {string}
     * @memberof ProductPrice
     */
    priceListEntryMode?: string | null;
}

/**
 * Check if a given object implements the ProductPrice interface.
 */
export function instanceOfProductPrice(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductPriceFromJSON(json: any): ProductPrice {
    return ProductPriceFromJSONTyped(json, false);
}

export function ProductPriceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductPrice {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'price': !exists(json, 'price') ? undefined : json['price'],
        'salePrice': !exists(json, 'salePrice') ? undefined : json['salePrice'],
        'tenantOverridePrice': !exists(json, 'tenantOverridePrice') ? undefined : json['tenantOverridePrice'],
        'msrp': !exists(json, 'msrp') ? undefined : json['msrp'],
        'creditValue': !exists(json, 'creditValue') ? undefined : json['creditValue'],
        'priceListCode': !exists(json, 'priceListCode') ? undefined : json['priceListCode'],
        'priceListEntryMode': !exists(json, 'priceListEntryMode') ? undefined : json['priceListEntryMode'],
    };
}

export function ProductPriceToJSON(value?: ProductPrice | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'price': value.price,
        'salePrice': value.salePrice,
        'tenantOverridePrice': value.tenantOverridePrice,
        'msrp': value.msrp,
        'creditValue': value.creditValue,
        'priceListCode': value.priceListCode,
        'priceListEntryMode': value.priceListEntryMode,
    };
}

