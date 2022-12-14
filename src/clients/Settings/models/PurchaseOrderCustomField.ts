/* tslint:disable */
/* eslint-disable */
/**
 * Kibo SiteSettings Service
 * OpenAPI Spec for Kibo SiteSettings Service
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
 * @interface PurchaseOrderCustomField
 */
export interface PurchaseOrderCustomField {
    /**
     * Unique code/name for memo field
     * @type {string}
     * @memberof PurchaseOrderCustomField
     */
    code?: string | null;
    /**
     * Memo field label that appers on the store front
     * @type {string}
     * @memberof PurchaseOrderCustomField
     */
    label?: string | null;
    /**
     * Sequence Number
     * @type {number}
     * @memberof PurchaseOrderCustomField
     */
    sequenceNumber?: number;
    /**
     * Whether this memo field is enabled
     * @type {boolean}
     * @memberof PurchaseOrderCustomField
     */
    isEnabled?: boolean;
    /**
     * Whether this memo field is mandatory to be filled in when placing an order
     * @type {boolean}
     * @memberof PurchaseOrderCustomField
     */
    isRequired?: boolean;
}

/**
 * Check if a given object implements the PurchaseOrderCustomField interface.
 */
export function instanceOfPurchaseOrderCustomField(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PurchaseOrderCustomFieldFromJSON(json: any): PurchaseOrderCustomField {
    return PurchaseOrderCustomFieldFromJSONTyped(json, false);
}

export function PurchaseOrderCustomFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): PurchaseOrderCustomField {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'sequenceNumber': !exists(json, 'sequenceNumber') ? undefined : json['sequenceNumber'],
        'isEnabled': !exists(json, 'isEnabled') ? undefined : json['isEnabled'],
        'isRequired': !exists(json, 'isRequired') ? undefined : json['isRequired'],
    };
}

export function PurchaseOrderCustomFieldToJSON(value?: PurchaseOrderCustomField | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'label': value.label,
        'sequenceNumber': value.sequenceNumber,
        'isEnabled': value.isEnabled,
        'isRequired': value.isRequired,
    };
}

