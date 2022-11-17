/* tslint:disable */
/* eslint-disable */
/**
 * Kibo ShippingRuntime Service
 * OpenAPI Spec for Kibo ShippingRuntime Service
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
    dataType?: string | null;
    /**
     * 
     * @type {Array<any>}
     * @memberof ProductProperty
     */
    values?: Array<any> | null;
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
        'dataType': !exists(json, 'dataType') ? undefined : json['dataType'],
        'values': !exists(json, 'values') ? undefined : json['values'],
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
        'dataType': value.dataType,
        'values': value.values,
    };
}

