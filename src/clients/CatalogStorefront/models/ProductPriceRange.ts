/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Runtime Services
 * OpenAPI Spec for Kibo Catalog Runtime Services
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ProductPrice } from './ProductPrice';
import {
    ProductPriceFromJSON,
    ProductPriceFromJSONTyped,
    ProductPriceToJSON,
} from './ProductPrice';

/**
 * For products with options that vary the cost of the product, the range between lowest and highest possible price of the product based on the current selection of options.
 * @export
 * @interface ProductPriceRange
 */
export interface ProductPriceRange {
    /**
     * 
     * @type {ProductPrice}
     * @memberof ProductPriceRange
     */
    lower?: ProductPrice;
    /**
     * 
     * @type {ProductPrice}
     * @memberof ProductPriceRange
     */
    upper?: ProductPrice;
}

/**
 * Check if a given object implements the ProductPriceRange interface.
 */
export function instanceOfProductPriceRange(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductPriceRangeFromJSON(json: any): ProductPriceRange {
    return ProductPriceRangeFromJSONTyped(json, false);
}

export function ProductPriceRangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductPriceRange {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lower': !exists(json, 'lower') ? undefined : ProductPriceFromJSON(json['lower']),
        'upper': !exists(json, 'upper') ? undefined : ProductPriceFromJSON(json['upper']),
    };
}

export function ProductPriceRangeToJSON(value?: ProductPriceRange | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lower': ProductPriceToJSON(value.lower),
        'upper': ProductPriceToJSON(value.upper),
    };
}
