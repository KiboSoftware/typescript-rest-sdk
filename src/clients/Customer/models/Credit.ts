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

/**
 * Represetation of a store credit or gift card.
 * @export
 * @interface Credit
 */
export interface Credit {
    /**
     * Unique number identifier representing this credit.
     * Number may be generated or set by the Tenant
     * Number is unique within the Tenant context.
     * ReadOnly after credit creation
     * @type {string}
     * @memberof Credit
     */
    code?: string | null;
    /**
     * Date the credit was activated.  Null if card is not active.
     * Credits must be activated before they can be used.
     * ReadOnly after activation
     * @type {Date}
     * @memberof Credit
     */
    activationDate?: Date | null;
    /**
     * Type of Credit.
     * Mozu.Customer.Contracts.Credit.Credit.CreditTypeConst
     * Required.
     * ReadOnly after credit creation
     * @type {string}
     * @memberof Credit
     */
    creditType?: string | null;
    /**
     * Name of custom credit type
     * Optional.
     * @type {string}
     * @memberof Credit
     */
    customCreditType?: string | null;
    /**
     * Currency Code
     * @type {string}
     * @memberof Credit
     */
    currencyCode?: string | null;
    /**
     * Balance assigned when credit was initially created.
     * May be zero and updated later.
     * ReadOnly after intial credit creation
     * @type {number}
     * @memberof Credit
     */
    initialBalance?: number | null;
    /**
     * Do we want to track this here?
     * Current Balance
     * ReadOnly
     * @type {number}
     * @memberof Credit
     */
    currentBalance?: number | null;
    /**
     * Date after which this credit is no longer valid
     * Optional
     * Defaults to 365 days
     * @type {Date}
     * @memberof Credit
     */
    expirationDate?: Date | null;
    /**
     * Id of the N:Mozu.Customer
     * that this credit is assigned to.
     * Optional.
     * @type {number}
     * @memberof Credit
     */
    customerId?: number | null;
    /**
     * 
     * @type {AuditInfo}
     * @memberof Credit
     */
    auditInfo?: AuditInfo;
    /**
     * 
     * @type {number}
     * @memberof Credit
     */
    creditTypeId?: number;
}

/**
 * Check if a given object implements the Credit interface.
 */
export function instanceOfCredit(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreditFromJSON(json: any): Credit {
    return CreditFromJSONTyped(json, false);
}

export function CreditFromJSONTyped(json: any, ignoreDiscriminator: boolean): Credit {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'activationDate': !exists(json, 'activationDate') ? undefined : (json['activationDate'] === null ? null : new Date(json['activationDate'])),
        'creditType': !exists(json, 'creditType') ? undefined : json['creditType'],
        'customCreditType': !exists(json, 'customCreditType') ? undefined : json['customCreditType'],
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'initialBalance': !exists(json, 'initialBalance') ? undefined : json['initialBalance'],
        'currentBalance': !exists(json, 'currentBalance') ? undefined : json['currentBalance'],
        'expirationDate': !exists(json, 'expirationDate') ? undefined : (json['expirationDate'] === null ? null : new Date(json['expirationDate'])),
        'customerId': !exists(json, 'customerId') ? undefined : json['customerId'],
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AuditInfoFromJSON(json['auditInfo']),
        'creditTypeId': !exists(json, 'creditTypeId') ? undefined : json['creditTypeId'],
    };
}

export function CreditToJSON(value?: Credit | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'activationDate': value.activationDate === undefined ? undefined : (value.activationDate === null ? null : value.activationDate.toISOString()),
        'creditType': value.creditType,
        'customCreditType': value.customCreditType,
        'currencyCode': value.currencyCode,
        'initialBalance': value.initialBalance,
        'currentBalance': value.currentBalance,
        'expirationDate': value.expirationDate === undefined ? undefined : (value.expirationDate === null ? null : value.expirationDate.toISOString()),
        'customerId': value.customerId,
        'auditInfo': AuditInfoToJSON(value.auditInfo),
        'creditTypeId': value.creditTypeId,
    };
}

