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
import type { ProductPropertyValue } from './ProductPropertyValue';
import {
    ProductPropertyValueFromJSON,
    ProductPropertyValueFromJSONTyped,
    ProductPropertyValueToJSON,
} from './ProductPropertyValue';

/**
 * Product options for configurable or stand-alone products. A configurable option is one that the shopper chooses when ordering, for example, 
 * the color of a T-shirt. A stand-alone option is independent of the product and can be added to the product order. For example, a monogram.
 * @export
 * @interface ProductProperty
 */
export interface ProductProperty {
    /**
     * Unique identifier of the Attribute.
     * @type {string}
     * @memberof ProductProperty
     */
    attributeFQN?: string | null;
    /**
     * 
     * @type {Array<ProductPropertyValue>}
     * @memberof ProductProperty
     */
    values?: Array<ProductPropertyValue> | null;
}

/**
 * Check if a given object implements the ProductProperty interface.
 */
export function instanceOfProductProperty(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductPropertyFromJSON(json: any): ProductProperty {
    return ProductPropertyFromJSONTyped(json, false);
}

export function ProductPropertyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductProperty {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attributeFQN': !exists(json, 'attributeFQN') ? undefined : json['attributeFQN'],
        'values': !exists(json, 'values') ? undefined : (json['values'] === null ? null : (json['values'] as Array<any>).map(ProductPropertyValueFromJSON)),
    };
}

export function ProductPropertyToJSON(value?: ProductProperty | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attributeFQN': value.attributeFQN,
        'values': value.values === undefined ? undefined : (value.values === null ? null : (value.values as Array<any>).map(ProductPropertyValueToJSON)),
    };
}

