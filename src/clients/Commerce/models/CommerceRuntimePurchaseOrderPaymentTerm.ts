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
 * 
 * @export
 * @interface CommerceRuntimePurchaseOrderPaymentTerm
 */
export interface CommerceRuntimePurchaseOrderPaymentTerm {
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimePurchaseOrderPaymentTerm
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimePurchaseOrderPaymentTerm
     */
    description?: string | null;
}

/**
 * Check if a given object implements the CommerceRuntimePurchaseOrderPaymentTerm interface.
 */
export function instanceOfCommerceRuntimePurchaseOrderPaymentTerm(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommerceRuntimePurchaseOrderPaymentTermFromJSON(json: any): CommerceRuntimePurchaseOrderPaymentTerm {
    return CommerceRuntimePurchaseOrderPaymentTermFromJSONTyped(json, false);
}

export function CommerceRuntimePurchaseOrderPaymentTermFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommerceRuntimePurchaseOrderPaymentTerm {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function CommerceRuntimePurchaseOrderPaymentTermToJSON(value?: CommerceRuntimePurchaseOrderPaymentTerm | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'description': value.description,
    };
}

