/* tslint:disable */
/* eslint-disable */
/**
 * Kibo CommerceRuntime Service
 * OpenAPI Spec for Kibo CommerceRuntime Service
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Product option for the product listed on this order item. If the product contains 
 * configurable or stand-alone options, this is a product option that the shopper has selected.
 * @export
 * @interface CommerceRuntimeProductOption
 */
export interface CommerceRuntimeProductOption {
    /**
     * Name of the product option that appears with the order item in the language specified by LocaleCode.
     * @type {string}
     * @memberof CommerceRuntimeProductOption
     */
    name?: string | null;
    /**
     * Value of the product option.
     * @type {any}
     * @memberof CommerceRuntimeProductOption
     */
    value?: any | null;
    /**
     * The value entered by the shopper if this is an option that requires shopper input, for example, a monogram.
     * @type {any}
     * @memberof CommerceRuntimeProductOption
     */
    shopperEnteredValue?: any | null;
    /**
     * Value of the product option.
     * @type {string}
     * @memberof CommerceRuntimeProductOption
     */
    attributeFQN?: string | null;
    /**
     * Value of the product option.
     * @type {string}
     * @memberof CommerceRuntimeProductOption
     */
    dataType?: string | null;
    /**
     * Value of the product option.
     * @type {string}
     * @memberof CommerceRuntimeProductOption
     */
    stringValue?: string | null;
}

/**
 * Check if a given object implements the CommerceRuntimeProductOption interface.
 */
export function instanceOfCommerceRuntimeProductOption(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommerceRuntimeProductOptionFromJSON(json: any): CommerceRuntimeProductOption {
    return CommerceRuntimeProductOptionFromJSONTyped(json, false);
}

export function CommerceRuntimeProductOptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommerceRuntimeProductOption {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'shopperEnteredValue': !exists(json, 'shopperEnteredValue') ? undefined : json['shopperEnteredValue'],
        'attributeFQN': !exists(json, 'attributeFQN') ? undefined : json['attributeFQN'],
        'dataType': !exists(json, 'dataType') ? undefined : json['dataType'],
        'stringValue': !exists(json, 'stringValue') ? undefined : json['stringValue'],
    };
}

export function CommerceRuntimeProductOptionToJSON(value?: CommerceRuntimeProductOption | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'value': value.value,
        'shopperEnteredValue': value.shopperEnteredValue,
        'attributeFQN': value.attributeFQN,
        'dataType': value.dataType,
        'stringValue': value.stringValue,
    };
}

