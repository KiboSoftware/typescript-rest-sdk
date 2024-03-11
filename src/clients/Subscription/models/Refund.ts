/* tslint:disable */
/* eslint-disable */
/**
 * Kibo SubscriptionRuntime Service
 * OpenAPI Spec for Kibo SubscriptionRuntime Service
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
import type { Payment } from './Payment';
import {
    PaymentFromJSON,
    PaymentFromJSONTyped,
    PaymentToJSON,
} from './Payment';

/**
 * Refund associated with an order. A refund is a single exchange of money from merchant to customer
 * that either encapsulates a refund to a credit card or an issuance of a store credit.
 * A refund does not reduce the 'amount collected' on an order and it is possible for a refund to exceed the total order amount.
 * @export
 * @interface Refund
 */
export interface Refund {
    /**
     * Unique identifier of this order transaction.
     * @type {string}
     * @memberof Refund
     */
    id?: string | null;
    /**
     * Unique identifier of the order with which this refund is associated.
     * @type {string}
     * @memberof Refund
     */
    orderId?: string | null;
    /**
     * Merchant-entered reason for this refund.
     * @type {string}
     * @memberof Refund
     */
    reason?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Refund
     */
    reasonCode?: string | null;
    /**
     * 
     * @type {Payment}
     * @memberof Refund
     */
    payment?: Payment;
    /**
     * Amount refunded.
     * @type {number}
     * @memberof Refund
     */
    amount?: number;
    /**
     * Refund Method.
     * @type {string}
     * @memberof Refund
     */
    refundMethod?: string | null;
    /**
     * 
     * @type {AuditInfo}
     * @memberof Refund
     */
    auditInfo?: AuditInfo;
}

/**
 * Check if a given object implements the Refund interface.
 */
export function instanceOfRefund(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RefundFromJSON(json: any): Refund {
    return RefundFromJSONTyped(json, false);
}

export function RefundFromJSONTyped(json: any, ignoreDiscriminator: boolean): Refund {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'orderId': !exists(json, 'orderId') ? undefined : json['orderId'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'reasonCode': !exists(json, 'reasonCode') ? undefined : json['reasonCode'],
        'payment': !exists(json, 'payment') ? undefined : PaymentFromJSON(json['payment']),
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'refundMethod': !exists(json, 'refundMethod') ? undefined : json['refundMethod'],
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AuditInfoFromJSON(json['auditInfo']),
    };
}

export function RefundToJSON(value?: Refund | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'orderId': value.orderId,
        'reason': value.reason,
        'reasonCode': value.reasonCode,
        'payment': PaymentToJSON(value.payment),
        'amount': value.amount,
        'refundMethod': value.refundMethod,
        'auditInfo': AuditInfoToJSON(value.auditInfo),
    };
}
