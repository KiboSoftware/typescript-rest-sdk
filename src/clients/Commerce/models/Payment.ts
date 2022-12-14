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
import type { BillingInfo } from './BillingInfo';
import {
    BillingInfoFromJSON,
    BillingInfoFromJSONTyped,
    BillingInfoToJSON,
} from './BillingInfo';
import type { ChangeMessage } from './ChangeMessage';
import {
    ChangeMessageFromJSON,
    ChangeMessageFromJSONTyped,
    ChangeMessageToJSON,
} from './ChangeMessage';
import type { GatewayGiftCard } from './GatewayGiftCard';
import {
    GatewayGiftCardFromJSON,
    GatewayGiftCardFromJSONTyped,
    GatewayGiftCardToJSON,
} from './GatewayGiftCard';
import type { PaymentActionTarget } from './PaymentActionTarget';
import {
    PaymentActionTargetFromJSON,
    PaymentActionTargetFromJSONTyped,
    PaymentActionTargetToJSON,
} from './PaymentActionTarget';
import type { PaymentInteraction } from './PaymentInteraction';
import {
    PaymentInteractionFromJSON,
    PaymentInteractionFromJSONTyped,
    PaymentInteractionToJSON,
} from './PaymentInteraction';
import type { SubPayment } from './SubPayment';
import {
    SubPaymentFromJSON,
    SubPaymentFromJSONTyped,
    SubPaymentToJSON,
} from './SubPayment';

/**
 * Payment transaction associated with this order. It is the entire payment interchange between the merchant who is forwarding the customer's payment 
 * information and the payment service who is authorizing and capturing payment. Payment can be either by credit card, check, or PayPal. (PayPal not
 * currently supported.)
 * @export
 * @interface Payment
 */
export interface Payment {
    /**
     * Unique identifier of this order transaction.
     * @type {string}
     * @memberof Payment
     */
    id?: string | null;
    /**
     * 
     * @type {PaymentActionTarget}
     * @memberof Payment
     */
    groupId?: PaymentActionTarget;
    /**
     * Unique identifier of the transaction, specified by the payment service processesing this transaction.
     * @type {string}
     * @memberof Payment
     */
    paymentServiceTransactionId?: string | null;
    /**
     * Actions available to the payment
     * @type {Array<string>}
     * @memberof Payment
     */
    availableActions?: Array<string> | null;
    /**
     * Unique identifier of the order with which this transaction is associated.
     * @type {string}
     * @memberof Payment
     */
    orderId?: string | null;
    /**
     * Type of Payment
     * @type {string}
     * @memberof Payment
     */
    paymentType?: string | null;
    /**
     * The source of data for this payment.  By default, this will be set to 'mozu'
     * @type {string}
     * @memberof Payment
     */
    paymentWorkflow?: string | null;
    /**
     * The external/third party transaction Id for this payment. This is used to store the transaction Id from digital wallet like Visa Checkout
     * @type {string}
     * @memberof Payment
     */
    externalTransactionId?: string | null;
    /**
     * 
     * @type {BillingInfo}
     * @memberof Payment
     */
    billingInfo?: BillingInfo;
    /**
     * Custom data from payment providers
     * @type {object}
     * @memberof Payment
     */
    data?: object | null;
    /**
     * Current status of this transaction which are described by the PaymentStatusConst class.
     * @type {string}
     * @memberof Payment
     */
    status?: string | null;
    /**
     * List of sub payments that correspond to child orders in case of multiship orders.
     * @type {Array<SubPayment>}
     * @memberof Payment
     */
    subPayments?: Array<SubPayment> | null;
    /**
     * List of intereactions for this transaction. A transaction is created upon authorization and lasts across the payment 
     * interchange, which can consist of multiple interactions, such as consecutive captures.
     * @type {Array<PaymentInteraction>}
     * @memberof Payment
     */
    interactions?: Array<PaymentInteraction> | null;
    /**
     * If true, the product is purchased or fulfilled at regular intervals, for example, 
     * monthly billing or a subscription. (Not currently supported.)
     * @type {boolean}
     * @memberof Payment
     */
    isRecurring?: boolean;
    /**
     * Amount collected on the payment
     * @type {number}
     * @memberof Payment
     */
    amountCollected?: number;
    /**
     * Amount credited back to the payment.
     * @type {number}
     * @memberof Payment
     */
    amountCredited?: number;
    /**
     * Derived from the Amount on the initial payment create, used to help storefront determine how much can be captured for multiple payments.
     * See Order.AmountRemainingForPayment for an example.
     * @type {number}
     * @memberof Payment
     */
    amountRequested?: number;
    /**
     * Change messages related to the payment.
     * @type {Array<ChangeMessage>}
     * @memberof Payment
     */
    changeMessages?: Array<ChangeMessage> | null;
    /**
     * 
     * @type {AuditInfo}
     * @memberof Payment
     */
    auditInfo?: AuditInfo;
    /**
     * 
     * @type {GatewayGiftCard}
     * @memberof Payment
     */
    gatewayGiftCard?: GatewayGiftCard;
}

/**
 * Check if a given object implements the Payment interface.
 */
export function instanceOfPayment(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PaymentFromJSON(json: any): Payment {
    return PaymentFromJSONTyped(json, false);
}

export function PaymentFromJSONTyped(json: any, ignoreDiscriminator: boolean): Payment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'groupId': !exists(json, 'groupId') ? undefined : PaymentActionTargetFromJSON(json['groupId']),
        'paymentServiceTransactionId': !exists(json, 'paymentServiceTransactionId') ? undefined : json['paymentServiceTransactionId'],
        'availableActions': !exists(json, 'availableActions') ? undefined : json['availableActions'],
        'orderId': !exists(json, 'orderId') ? undefined : json['orderId'],
        'paymentType': !exists(json, 'paymentType') ? undefined : json['paymentType'],
        'paymentWorkflow': !exists(json, 'paymentWorkflow') ? undefined : json['paymentWorkflow'],
        'externalTransactionId': !exists(json, 'externalTransactionId') ? undefined : json['externalTransactionId'],
        'billingInfo': !exists(json, 'billingInfo') ? undefined : BillingInfoFromJSON(json['billingInfo']),
        'data': !exists(json, 'data') ? undefined : json['data'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'subPayments': !exists(json, 'subPayments') ? undefined : (json['subPayments'] === null ? null : (json['subPayments'] as Array<any>).map(SubPaymentFromJSON)),
        'interactions': !exists(json, 'interactions') ? undefined : (json['interactions'] === null ? null : (json['interactions'] as Array<any>).map(PaymentInteractionFromJSON)),
        'isRecurring': !exists(json, 'isRecurring') ? undefined : json['isRecurring'],
        'amountCollected': !exists(json, 'amountCollected') ? undefined : json['amountCollected'],
        'amountCredited': !exists(json, 'amountCredited') ? undefined : json['amountCredited'],
        'amountRequested': !exists(json, 'amountRequested') ? undefined : json['amountRequested'],
        'changeMessages': !exists(json, 'changeMessages') ? undefined : (json['changeMessages'] === null ? null : (json['changeMessages'] as Array<any>).map(ChangeMessageFromJSON)),
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AuditInfoFromJSON(json['auditInfo']),
        'gatewayGiftCard': !exists(json, 'gatewayGiftCard') ? undefined : GatewayGiftCardFromJSON(json['gatewayGiftCard']),
    };
}

export function PaymentToJSON(value?: Payment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'groupId': PaymentActionTargetToJSON(value.groupId),
        'paymentServiceTransactionId': value.paymentServiceTransactionId,
        'availableActions': value.availableActions,
        'orderId': value.orderId,
        'paymentType': value.paymentType,
        'paymentWorkflow': value.paymentWorkflow,
        'externalTransactionId': value.externalTransactionId,
        'billingInfo': BillingInfoToJSON(value.billingInfo),
        'data': value.data,
        'status': value.status,
        'subPayments': value.subPayments === undefined ? undefined : (value.subPayments === null ? null : (value.subPayments as Array<any>).map(SubPaymentToJSON)),
        'interactions': value.interactions === undefined ? undefined : (value.interactions === null ? null : (value.interactions as Array<any>).map(PaymentInteractionToJSON)),
        'isRecurring': value.isRecurring,
        'amountCollected': value.amountCollected,
        'amountCredited': value.amountCredited,
        'amountRequested': value.amountRequested,
        'changeMessages': value.changeMessages === undefined ? undefined : (value.changeMessages === null ? null : (value.changeMessages as Array<any>).map(ChangeMessageToJSON)),
        'auditInfo': AuditInfoToJSON(value.auditInfo),
        'gatewayGiftCard': GatewayGiftCardToJSON(value.gatewayGiftCard),
    };
}

