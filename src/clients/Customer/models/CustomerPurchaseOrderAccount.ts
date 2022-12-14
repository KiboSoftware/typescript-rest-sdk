/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Customer Service
 * OpenAPI Spec for Kibo Customer Service
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AuditInfo } from './AuditInfo';
import {
    AuditInfoFromJSON,
    AuditInfoFromJSONTyped,
    AuditInfoToJSON,
} from './AuditInfo';
import type { CustomerPurchaseOrderPaymentTerm } from './CustomerPurchaseOrderPaymentTerm';
import {
    CustomerPurchaseOrderPaymentTermFromJSON,
    CustomerPurchaseOrderPaymentTermFromJSONTyped,
    CustomerPurchaseOrderPaymentTermToJSON,
} from './CustomerPurchaseOrderPaymentTerm';

/**
 * 
 * @export
 * @interface CustomerPurchaseOrderAccount
 */
export interface CustomerPurchaseOrderAccount {
    /**
     * 
     * @type {number}
     * @memberof CustomerPurchaseOrderAccount
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerPurchaseOrderAccount
     */
    accountId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerPurchaseOrderAccount
     */
    isEnabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CustomerPurchaseOrderAccount
     */
    creditLimit?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerPurchaseOrderAccount
     */
    availableBalance?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerPurchaseOrderAccount
     */
    totalAvailableBalance?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerPurchaseOrderAccount
     */
    overdraftAllowance?: number | null;
    /**
     * Indicates type of overdraft. Possible values are "Percent" and "Amount"
     * @type {string}
     * @memberof CustomerPurchaseOrderAccount
     */
    overdraftAllowanceType?: string | null;
    /**
     * 
     * @type {Array<CustomerPurchaseOrderPaymentTerm>}
     * @memberof CustomerPurchaseOrderAccount
     */
    customerPurchaseOrderPaymentTerms?: Array<CustomerPurchaseOrderPaymentTerm> | null;
    /**
     * 
     * @type {AuditInfo}
     * @memberof CustomerPurchaseOrderAccount
     */
    auditInfo?: AuditInfo;
}

/**
 * Check if a given object implements the CustomerPurchaseOrderAccount interface.
 */
export function instanceOfCustomerPurchaseOrderAccount(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerPurchaseOrderAccountFromJSON(json: any): CustomerPurchaseOrderAccount {
    return CustomerPurchaseOrderAccountFromJSONTyped(json, false);
}

export function CustomerPurchaseOrderAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerPurchaseOrderAccount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'accountId': !exists(json, 'accountId') ? undefined : json['accountId'],
        'isEnabled': !exists(json, 'isEnabled') ? undefined : json['isEnabled'],
        'creditLimit': !exists(json, 'creditLimit') ? undefined : json['creditLimit'],
        'availableBalance': !exists(json, 'availableBalance') ? undefined : json['availableBalance'],
        'totalAvailableBalance': !exists(json, 'totalAvailableBalance') ? undefined : json['totalAvailableBalance'],
        'overdraftAllowance': !exists(json, 'overdraftAllowance') ? undefined : json['overdraftAllowance'],
        'overdraftAllowanceType': !exists(json, 'overdraftAllowanceType') ? undefined : json['overdraftAllowanceType'],
        'customerPurchaseOrderPaymentTerms': !exists(json, 'customerPurchaseOrderPaymentTerms') ? undefined : (json['customerPurchaseOrderPaymentTerms'] === null ? null : (json['customerPurchaseOrderPaymentTerms'] as Array<any>).map(CustomerPurchaseOrderPaymentTermFromJSON)),
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AuditInfoFromJSON(json['auditInfo']),
    };
}

export function CustomerPurchaseOrderAccountToJSON(value?: CustomerPurchaseOrderAccount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'accountId': value.accountId,
        'isEnabled': value.isEnabled,
        'creditLimit': value.creditLimit,
        'availableBalance': value.availableBalance,
        'totalAvailableBalance': value.totalAvailableBalance,
        'overdraftAllowance': value.overdraftAllowance,
        'overdraftAllowanceType': value.overdraftAllowanceType,
        'customerPurchaseOrderPaymentTerms': value.customerPurchaseOrderPaymentTerms === undefined ? undefined : (value.customerPurchaseOrderPaymentTerms === null ? null : (value.customerPurchaseOrderPaymentTerms as Array<any>).map(CustomerPurchaseOrderPaymentTermToJSON)),
        'auditInfo': AuditInfoToJSON(value.auditInfo),
    };
}

