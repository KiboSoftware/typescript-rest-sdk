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
import type { ProductPropertyValue } from './ProductPropertyValue';
import {
    ProductPropertyValueFromJSON,
    ProductPropertyValueFromJSONTyped,
    ProductPropertyValueToJSON,
} from './ProductPropertyValue';

/**
 * 
 * @export
 * @interface ProductProperty
 */
export interface ProductProperty {
    /**
     * 
     * @type {string}
     * @memberof ProductProperty
     */
    attributeFQN?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductProperty
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductProperty
     */
    dataType?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ProductProperty
     */
    isMultiValue?: boolean;
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
        'name': !exists(json, 'name') ? undefined : json['name'],
        'dataType': !exists(json, 'dataType') ? undefined : json['dataType'],
        'isMultiValue': !exists(json, 'isMultiValue') ? undefined : json['isMultiValue'],
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
        'name': value.name,
        'dataType': value.dataType,
        'isMultiValue': value.isMultiValue,
        'values': value.values === undefined ? undefined : (value.values === null ? null : (value.values as Array<any>).map(ProductPropertyValueToJSON)),
    };
}

