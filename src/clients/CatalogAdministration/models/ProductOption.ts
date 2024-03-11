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
import type { ProductOptionValue } from './ProductOptionValue';
import {
    ProductOptionValueFromJSON,
    ProductOptionValueFromJSONTyped,
    ProductOptionValueToJSON,
} from './ProductOptionValue';

/**
 * Product options for configurable or stand-alone products. A configurable option is one that the shopper chooses when ordering, for example, 
 * the color of a T-shirt. A stand-alone option is independent of the product and can be added to the product order. For example, a monogram.
 * @export
 * @interface ProductOption
 */
export interface ProductOption {
    /**
     * Unique identifier of the Attribute.
     * @type {string}
     * @memberof ProductOption
     */
    attributeFQN?: string | null;
    /**
     * Defines whether or not this option can be used to segment product images
     * @type {boolean}
     * @memberof ProductOption
     */
    isProductImageGroupSelector?: boolean | null;
    /**
     * List of all the values for this product option.
     * @type {Array<ProductOptionValue>}
     * @memberof ProductOption
     */
    values?: Array<ProductOptionValue> | null;
}

/**
 * Check if a given object implements the ProductOption interface.
 */
export function instanceOfProductOption(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductOptionFromJSON(json: any): ProductOption {
    return ProductOptionFromJSONTyped(json, false);
}

export function ProductOptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductOption {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attributeFQN': !exists(json, 'attributeFQN') ? undefined : json['attributeFQN'],
        'isProductImageGroupSelector': !exists(json, 'isProductImageGroupSelector') ? undefined : json['isProductImageGroupSelector'],
        'values': !exists(json, 'values') ? undefined : (json['values'] === null ? null : (json['values'] as Array<any>).map(ProductOptionValueFromJSON)),
    };
}

export function ProductOptionToJSON(value?: ProductOption | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attributeFQN': value.attributeFQN,
        'isProductImageGroupSelector': value.isProductImageGroupSelector,
        'values': value.values === undefined ? undefined : (value.values === null ? null : (value.values as Array<any>).map(ProductOptionValueToJSON)),
    };
}
