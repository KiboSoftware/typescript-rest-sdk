/* tslint:disable */
/* eslint-disable */
/**
 * Kibo CommerceRuntime Service
 * OpenAPI Spec for Kibo CommerceRuntime Service
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
import type { CheckPayment } from './CheckPayment';
import {
    CheckPaymentFromJSON,
    CheckPaymentFromJSONTyped,
    CheckPaymentToJSON,
} from './CheckPayment';
import type { Contact } from './Contact';
import {
    ContactFromJSON,
    ContactFromJSONTyped,
    ContactToJSON,
} from './Contact';
import type { PaymentCard } from './PaymentCard';
import {
    PaymentCardFromJSON,
    PaymentCardFromJSONTyped,
    PaymentCardToJSON,
} from './PaymentCard';
import type { PaymentToken } from './PaymentToken';
import {
    PaymentTokenFromJSON,
    PaymentTokenFromJSONTyped,
    PaymentTokenToJSON,
} from './PaymentToken';
import type { PurchaseOrderPayment } from './PurchaseOrderPayment';
import {
    PurchaseOrderPaymentFromJSON,
    PurchaseOrderPaymentFromJSONTyped,
    PurchaseOrderPaymentToJSON,
} from './PurchaseOrderPayment';

/**
 * Customer's payment details such as payment type (credit card, check by mail, or PayPal)
 * and cardholder information if payment is by credit card.
 * @export
 * @interface BillingInfo
 */
export interface BillingInfo {
    /**
     * Type of payment, such as credit card, check by mail, or PayPal.
     * see Mozu.CommerceRuntime.Contracts.Payments.PaymentTypeConst for valid values
     * @type {string}
     * @memberof BillingInfo
     */
    paymentType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BillingInfo
     */
    paymentWorkflow?: string | null;
    /**
     * 
     * @type {Contact}
     * @memberof BillingInfo
     */
    billingContact?: Contact;
    /**
     * Indicates that billing and shipping address are the same
     * @type {boolean}
     * @memberof BillingInfo
     */
    isSameBillingShippingAddress?: boolean;
    /**
     * 
     * @type {PaymentCard}
     * @memberof BillingInfo
     */
    card?: PaymentCard;
    /**
     * 
     * @type {PaymentToken}
     * @memberof BillingInfo
     */
    token?: PaymentToken;
    /**
     * 
     * @type {PurchaseOrderPayment}
     * @memberof BillingInfo
     */
    purchaseOrder?: PurchaseOrderPayment;
    /**
     * 
     * @type {CheckPayment}
     * @memberof BillingInfo
     */
    check?: CheckPayment;
    /**
     * 
     * @type {AuditInfo}
     * @memberof BillingInfo
     */
    auditInfo?: AuditInfo;
    /**
     * The store credit to use for this purchase
     * @type {string}
     * @memberof BillingInfo
     */
    storeCreditCode?: string | null;
    /**
     * The type of store credit used for this purchase
     * @type {string}
     * @memberof BillingInfo
     */
    storeCreditType?: string | null;
    /**
     * Name of custom stored credit type
     * @type {string}
     * @memberof BillingInfo
     */
    customCreditType?: string | null;
    /**
     * Transaction Id from third party payment source like Visa Checkout, Amazon
     * @type {string}
     * @memberof BillingInfo
     */
    externalTransactionId?: string | null;
    /**
     * Indicates whether the payment is used in recurring transactions. ex- subscription payments
     * @type {boolean}
     * @memberof BillingInfo
     */
    isRecurring?: boolean;
    /**
     * Recurring Payment Id returned by Payment Gateway
     * networkTransactionId for vantiv
     * previousTransactionId for cybersource etc
     * @type {string}
     * @memberof BillingInfo
     */
    recurringTransactionId?: string | null;
    /**
     * Custom data from payment providers
     * @type {object}
     * @memberof BillingInfo
     */
    data?: object | null;
}

/**
 * Check if a given object implements the BillingInfo interface.
 */
export function instanceOfBillingInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BillingInfoFromJSON(json: any): BillingInfo {
    return BillingInfoFromJSONTyped(json, false);
}

export function BillingInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BillingInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'paymentType': !exists(json, 'paymentType') ? undefined : json['paymentType'],
        'paymentWorkflow': !exists(json, 'paymentWorkflow') ? undefined : json['paymentWorkflow'],
        'billingContact': !exists(json, 'billingContact') ? undefined : ContactFromJSON(json['billingContact']),
        'isSameBillingShippingAddress': !exists(json, 'isSameBillingShippingAddress') ? undefined : json['isSameBillingShippingAddress'],
        'card': !exists(json, 'card') ? undefined : PaymentCardFromJSON(json['card']),
        'token': !exists(json, 'token') ? undefined : PaymentTokenFromJSON(json['token']),
        'purchaseOrder': !exists(json, 'purchaseOrder') ? undefined : PurchaseOrderPaymentFromJSON(json['purchaseOrder']),
        'check': !exists(json, 'check') ? undefined : CheckPaymentFromJSON(json['check']),
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AuditInfoFromJSON(json['auditInfo']),
        'storeCreditCode': !exists(json, 'storeCreditCode') ? undefined : json['storeCreditCode'],
        'storeCreditType': !exists(json, 'storeCreditType') ? undefined : json['storeCreditType'],
        'customCreditType': !exists(json, 'customCreditType') ? undefined : json['customCreditType'],
        'externalTransactionId': !exists(json, 'externalTransactionId') ? undefined : json['externalTransactionId'],
        'isRecurring': !exists(json, 'isRecurring') ? undefined : json['isRecurring'],
        'recurringTransactionId': !exists(json, 'recurringTransactionId') ? undefined : json['recurringTransactionId'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function BillingInfoToJSON(value?: BillingInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'paymentType': value.paymentType,
        'paymentWorkflow': value.paymentWorkflow,
        'billingContact': ContactToJSON(value.billingContact),
        'isSameBillingShippingAddress': value.isSameBillingShippingAddress,
        'card': PaymentCardToJSON(value.card),
        'token': PaymentTokenToJSON(value.token),
        'purchaseOrder': PurchaseOrderPaymentToJSON(value.purchaseOrder),
        'check': CheckPaymentToJSON(value.check),
        'auditInfo': AuditInfoToJSON(value.auditInfo),
        'storeCreditCode': value.storeCreditCode,
        'storeCreditType': value.storeCreditType,
        'customCreditType': value.customCreditType,
        'externalTransactionId': value.externalTransactionId,
        'isRecurring': value.isRecurring,
        'recurringTransactionId': value.recurringTransactionId,
        'data': value.data,
    };
}

