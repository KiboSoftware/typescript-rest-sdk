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
 * @interface CommerceRuntimePurchaseOrderCustomField
 */
export interface CommerceRuntimePurchaseOrderCustomField {
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimePurchaseOrderCustomField
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimePurchaseOrderCustomField
     */
    label?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimePurchaseOrderCustomField
     */
    value?: string | null;
}

/**
 * Check if a given object implements the CommerceRuntimePurchaseOrderCustomField interface.
 */
export function instanceOfCommerceRuntimePurchaseOrderCustomField(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommerceRuntimePurchaseOrderCustomFieldFromJSON(json: any): CommerceRuntimePurchaseOrderCustomField {
    return CommerceRuntimePurchaseOrderCustomFieldFromJSONTyped(json, false);
}

export function CommerceRuntimePurchaseOrderCustomFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommerceRuntimePurchaseOrderCustomField {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function CommerceRuntimePurchaseOrderCustomFieldToJSON(value?: CommerceRuntimePurchaseOrderCustomField | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'label': value.label,
        'value': value.value,
    };
}
