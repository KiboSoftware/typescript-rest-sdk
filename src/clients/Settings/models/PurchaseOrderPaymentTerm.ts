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
 * @interface PurchaseOrderPaymentTerm
 */
export interface PurchaseOrderPaymentTerm {
    /**
     * A unique code for purchase order payment term
     * @type {string}
     * @memberof PurchaseOrderPaymentTerm
     */
    code?: string | null;
    /**
     * Sequence Number
     * @type {number}
     * @memberof PurchaseOrderPaymentTerm
     */
    sequenceNumber?: number;
    /**
     * Value of the net term
     * @type {string}
     * @memberof PurchaseOrderPaymentTerm
     */
    description?: string | null;
}

/**
 * Check if a given object implements the PurchaseOrderPaymentTerm interface.
 */
export function instanceOfPurchaseOrderPaymentTerm(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PurchaseOrderPaymentTermFromJSON(json: any): PurchaseOrderPaymentTerm {
    return PurchaseOrderPaymentTermFromJSONTyped(json, false);
}

export function PurchaseOrderPaymentTermFromJSONTyped(json: any, ignoreDiscriminator: boolean): PurchaseOrderPaymentTerm {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'sequenceNumber': !exists(json, 'sequenceNumber') ? undefined : json['sequenceNumber'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function PurchaseOrderPaymentTermToJSON(value?: PurchaseOrderPaymentTerm | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'sequenceNumber': value.sequenceNumber,
        'description': value.description,
    };
}

