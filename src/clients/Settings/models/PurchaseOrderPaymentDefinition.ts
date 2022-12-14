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
import type { PurchaseOrderCustomField } from './PurchaseOrderCustomField';
import {
    PurchaseOrderCustomFieldFromJSON,
    PurchaseOrderCustomFieldFromJSONTyped,
    PurchaseOrderCustomFieldToJSON,
} from './PurchaseOrderCustomField';
import type { PurchaseOrderPaymentTerm } from './PurchaseOrderPaymentTerm';
import {
    PurchaseOrderPaymentTermFromJSON,
    PurchaseOrderPaymentTermFromJSONTyped,
    PurchaseOrderPaymentTermToJSON,
} from './PurchaseOrderPaymentTerm';

/**
 * 
 * @export
 * @interface PurchaseOrderPaymentDefinition
 */
export interface PurchaseOrderPaymentDefinition {
    /**
     * Is purchase order payment enabled
     * @type {boolean}
     * @memberof PurchaseOrderPaymentDefinition
     */
    isEnabled?: boolean;
    /**
     * Allowed net terms
     * @type {Array<PurchaseOrderPaymentTerm>}
     * @memberof PurchaseOrderPaymentDefinition
     */
    paymentTerms?: Array<PurchaseOrderPaymentTerm> | null;
    /**
     * Indicates whether another payment can be used with the purchase order
     * @type {boolean}
     * @memberof PurchaseOrderPaymentDefinition
     */
    allowSplitPayment?: boolean;
    /**
     * 
     * @type {Array<PurchaseOrderCustomField>}
     * @memberof PurchaseOrderPaymentDefinition
     */
    customFields?: Array<PurchaseOrderCustomField> | null;
}

/**
 * Check if a given object implements the PurchaseOrderPaymentDefinition interface.
 */
export function instanceOfPurchaseOrderPaymentDefinition(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PurchaseOrderPaymentDefinitionFromJSON(json: any): PurchaseOrderPaymentDefinition {
    return PurchaseOrderPaymentDefinitionFromJSONTyped(json, false);
}

export function PurchaseOrderPaymentDefinitionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PurchaseOrderPaymentDefinition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isEnabled': !exists(json, 'isEnabled') ? undefined : json['isEnabled'],
        'paymentTerms': !exists(json, 'paymentTerms') ? undefined : (json['paymentTerms'] === null ? null : (json['paymentTerms'] as Array<any>).map(PurchaseOrderPaymentTermFromJSON)),
        'allowSplitPayment': !exists(json, 'allowSplitPayment') ? undefined : json['allowSplitPayment'],
        'customFields': !exists(json, 'customFields') ? undefined : (json['customFields'] === null ? null : (json['customFields'] as Array<any>).map(PurchaseOrderCustomFieldFromJSON)),
    };
}

export function PurchaseOrderPaymentDefinitionToJSON(value?: PurchaseOrderPaymentDefinition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'isEnabled': value.isEnabled,
        'paymentTerms': value.paymentTerms === undefined ? undefined : (value.paymentTerms === null ? null : (value.paymentTerms as Array<any>).map(PurchaseOrderPaymentTermToJSON)),
        'allowSplitPayment': value.allowSplitPayment,
        'customFields': value.customFields === undefined ? undefined : (value.customFields === null ? null : (value.customFields as Array<any>).map(PurchaseOrderCustomFieldToJSON)),
    };
}

