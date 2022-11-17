/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Location Storefront Service
 * OpenAPI Spec for Kibo Location Storefront Service
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
 * 
 * @export
 * @interface CommerceRuntimeAttributeValidation
 */
export interface CommerceRuntimeAttributeValidation {
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttributeValidation
     */
    regularExpression?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeAttributeValidation
     */
    minStringLength?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeAttributeValidation
     */
    maxStringLength?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeAttributeValidation
     */
    minNumericValue?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeAttributeValidation
     */
    maxNumericValue?: number | null;
    /**
     * 
     * @type {Date}
     * @memberof CommerceRuntimeAttributeValidation
     */
    minDateTime?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof CommerceRuntimeAttributeValidation
     */
    maxDateTime?: Date | null;
}

/**
 * Check if a given object implements the CommerceRuntimeAttributeValidation interface.
 */
export function instanceOfCommerceRuntimeAttributeValidation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommerceRuntimeAttributeValidationFromJSON(json: any): CommerceRuntimeAttributeValidation {
    return CommerceRuntimeAttributeValidationFromJSONTyped(json, false);
}

export function CommerceRuntimeAttributeValidationFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommerceRuntimeAttributeValidation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'regularExpression': !exists(json, 'regularExpression') ? undefined : json['regularExpression'],
        'minStringLength': !exists(json, 'minStringLength') ? undefined : json['minStringLength'],
        'maxStringLength': !exists(json, 'maxStringLength') ? undefined : json['maxStringLength'],
        'minNumericValue': !exists(json, 'minNumericValue') ? undefined : json['minNumericValue'],
        'maxNumericValue': !exists(json, 'maxNumericValue') ? undefined : json['maxNumericValue'],
        'minDateTime': !exists(json, 'minDateTime') ? undefined : (json['minDateTime'] === null ? null : new Date(json['minDateTime'])),
        'maxDateTime': !exists(json, 'maxDateTime') ? undefined : (json['maxDateTime'] === null ? null : new Date(json['maxDateTime'])),
    };
}

export function CommerceRuntimeAttributeValidationToJSON(value?: CommerceRuntimeAttributeValidation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'regularExpression': value.regularExpression,
        'minStringLength': value.minStringLength,
        'maxStringLength': value.maxStringLength,
        'minNumericValue': value.minNumericValue,
        'maxNumericValue': value.maxNumericValue,
        'minDateTime': value.minDateTime === undefined ? undefined : (value.minDateTime === null ? null : value.minDateTime.toISOString()),
        'maxDateTime': value.maxDateTime === undefined ? undefined : (value.maxDateTime === null ? null : value.maxDateTime.toISOString()),
    };
}

