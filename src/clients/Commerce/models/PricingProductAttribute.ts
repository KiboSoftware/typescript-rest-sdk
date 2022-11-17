/* tslint:disable */
/* eslint-disable */
/**
 * Kibo CommerceRuntime Service
 * OpenAPI Spec for Kibo CommerceRuntime Service
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
 * @interface PricingProductAttribute
 */
export interface PricingProductAttribute {
    /**
     * 
     * @type {string}
     * @memberof PricingProductAttribute
     */
    inputType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PricingProductAttribute
     */
    valueType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PricingProductAttribute
     */
    dataType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PricingProductAttribute
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PricingProductAttribute
     */
    description?: string | null;
}

/**
 * Check if a given object implements the PricingProductAttribute interface.
 */
export function instanceOfPricingProductAttribute(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PricingProductAttributeFromJSON(json: any): PricingProductAttribute {
    return PricingProductAttributeFromJSONTyped(json, false);
}

export function PricingProductAttributeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PricingProductAttribute {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'inputType': !exists(json, 'inputType') ? undefined : json['inputType'],
        'valueType': !exists(json, 'valueType') ? undefined : json['valueType'],
        'dataType': !exists(json, 'dataType') ? undefined : json['dataType'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function PricingProductAttributeToJSON(value?: PricingProductAttribute | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'inputType': value.inputType,
        'valueType': value.valueType,
        'dataType': value.dataType,
        'name': value.name,
        'description': value.description,
    };
}

