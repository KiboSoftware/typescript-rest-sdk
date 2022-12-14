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
import type { CapturableShipmentSummary } from './CapturableShipmentSummary';
import {
    CapturableShipmentSummaryFromJSON,
    CapturableShipmentSummaryFromJSONTyped,
    CapturableShipmentSummaryToJSON,
} from './CapturableShipmentSummary';
import type { PaymentActionTarget } from './PaymentActionTarget';
import {
    PaymentActionTargetFromJSON,
    PaymentActionTargetFromJSONTyped,
    PaymentActionTargetToJSON,
} from './PaymentActionTarget';
import type { PaymentGatewayResponseData } from './PaymentGatewayResponseData';
import {
    PaymentGatewayResponseDataFromJSON,
    PaymentGatewayResponseDataFromJSONTyped,
    PaymentGatewayResponseDataToJSON,
} from './PaymentGatewayResponseData';

/**
 * A single interaction of a potential list of intereactions for a transaction. The scope of the transaction is the entire payment
 * interchange. It is created upon authorization and is used for all subsequent interactions performed against the authorize,
 * such as consecutive captures.
 * @export
 * @interface PaymentInteraction
 */
export interface PaymentInteraction {
    /**
     * Unique identifier of this payment transaction interaction.
     * @type {string}
     * @memberof PaymentInteraction
     */
    id?: string | null;
    /**
     * Unique identifier of the gateway interaction. Used for credit card transactions, where the
     * payment service creates a GatewayInteractionId for each transaction interaction.
     * @type {number}
     * @memberof PaymentInteraction
     */
    gatewayInteractionId?: number | null;
    /**
     * Unique identifier of the original transaction of which this current interaction is a part.
     * @type {string}
     * @memberof PaymentInteraction
     */
    paymentId?: string | null;
    /**
     * Unique identifier of the order with which this transaction is associated.
     * @type {string}
     * @memberof PaymentInteraction
     */
    orderId?: string | null;
    /**
     * 
     * @type {PaymentActionTarget}
     * @memberof PaymentInteraction
     */
    target?: PaymentActionTarget;
    /**
     * ISO currency code for the transaction. Currently, only USD is supported.
     * @type {string}
     * @memberof PaymentInteraction
     */
    currencyCode?: string | null;
    /**
     * Types of transaction interactions which can be "Authorization," "Capture," "AuthorizeAndCapture,"
     * "Void," or "Credit," "CheckRequested," or "CheckReceived."
     * @type {string}
     * @memberof PaymentInteraction
     */
    interactionType?: string | null;
    /**
     * If paying by check, the check number.
     * @type {string}
     * @memberof PaymentInteraction
     */
    checkNumber?: string | null;
    /**
     * Status of the payment transaction interaction which can be either "Success" or "Failure."
     * @type {string}
     * @memberof PaymentInteraction
     */
    status?: string | null;
    /**
     * Status of the payment when the transaction interaction was created
     * @type {string}
     * @memberof PaymentInteraction
     */
    paymentEntryStatus?: string | null;
    /**
     * If true, the product is purchased or fulfilled at regular intervals, for example, a monthly billing or a subscription. (Not currently implemented.)
     * @type {boolean}
     * @memberof PaymentInteraction
     */
    isRecurring?: boolean | null;
    /**
     * If the payment is a manual payment, this is set to true
     * @type {boolean}
     * @memberof PaymentInteraction
     */
    isManual?: boolean;
    /**
     * Unique identifier of the transaction supplied by PCIaaS.
     * @type {string}
     * @memberof PaymentInteraction
     */
    gatewayTransactionId?: string | null;
    /**
     * If required by the payment gateway, the authorization code of the transaction. Supplied by PCIaaS.
     * @type {string}
     * @memberof PaymentInteraction
     */
    gatewayAuthCode?: string | null;
    /**
     * Gateway AVS Codes. Supplied by PCIaaS.
     * @type {string}
     * @memberof PaymentInteraction
     */
    gatewayAVSCodes?: string | null;
    /**
     * Gateway CVV2 Codes. Supplied by PCIaaS.
     * @type {string}
     * @memberof PaymentInteraction
     */
    gatewayCVV2Codes?: string | null;
    /**
     * Gateway response code. Supplied by PCIaaS.
     * @type {string}
     * @memberof PaymentInteraction
     */
    gatewayResponseCode?: string | null;
    /**
     * Gateway response text. Supplied by PCIaaS.
     * @type {string}
     * @memberof PaymentInteraction
     */
    gatewayResponseText?: string | null;
    /**
     * A List of payment response data required to act on authorization when using external order management systems
     * @type {Array<PaymentGatewayResponseData>}
     * @memberof PaymentInteraction
     */
    gatewayResponseData?: Array<PaymentGatewayResponseData> | null;
    /**
     * Unique identifier of previous PaymentTransactionInteraction that this PaymentTransactionInteraction is modifying.
     * For instance, when crediting a capture, set the PaymentTransactionInteractionIdReference to the capture PaymentTransactionInteractionID.
     * @type {number}
     * @memberof PaymentInteraction
     */
    paymentTransactionInteractionIdReference?: number | null;
    /**
     * Amount of funds associated with this interaction.
     * @type {number}
     * @memberof PaymentInteraction
     */
    amount?: number | null;
    /**
     * Note to be entered by merchant/application
     * @type {string}
     * @memberof PaymentInteraction
     */
    note?: string | null;
    /**
     * Date the interaction occurred
     * @type {Date}
     * @memberof PaymentInteraction
     */
    interactionDate?: Date | null;
    /**
     * 
     * @type {AuditInfo}
     * @memberof PaymentInteraction
     */
    auditInfo?: AuditInfo;
    /**
     * Return Id, if the interaction is a Credit for a return-refund.
     * @type {string}
     * @memberof PaymentInteraction
     */
    returnId?: string | null;
    /**
     * Refund Id, if the interaction is for a stand alone refund.
     * @type {string}
     * @memberof PaymentInteraction
     */
    refundId?: string | null;
    /**
     * Stores pairings of shipment number to shipment total for all captured shipments. This was added for generating TLogs.
     * @type {Array<CapturableShipmentSummary>}
     * @memberof PaymentInteraction
     */
    capturableShipmentsSummary?: Array<CapturableShipmentSummary> | null;
}

/**
 * Check if a given object implements the PaymentInteraction interface.
 */
export function instanceOfPaymentInteraction(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PaymentInteractionFromJSON(json: any): PaymentInteraction {
    return PaymentInteractionFromJSONTyped(json, false);
}

export function PaymentInteractionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentInteraction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'gatewayInteractionId': !exists(json, 'gatewayInteractionId') ? undefined : json['gatewayInteractionId'],
        'paymentId': !exists(json, 'paymentId') ? undefined : json['paymentId'],
        'orderId': !exists(json, 'orderId') ? undefined : json['orderId'],
        'target': !exists(json, 'target') ? undefined : PaymentActionTargetFromJSON(json['target']),
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'interactionType': !exists(json, 'interactionType') ? undefined : json['interactionType'],
        'checkNumber': !exists(json, 'checkNumber') ? undefined : json['checkNumber'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'paymentEntryStatus': !exists(json, 'paymentEntryStatus') ? undefined : json['paymentEntryStatus'],
        'isRecurring': !exists(json, 'isRecurring') ? undefined : json['isRecurring'],
        'isManual': !exists(json, 'isManual') ? undefined : json['isManual'],
        'gatewayTransactionId': !exists(json, 'gatewayTransactionId') ? undefined : json['gatewayTransactionId'],
        'gatewayAuthCode': !exists(json, 'gatewayAuthCode') ? undefined : json['gatewayAuthCode'],
        'gatewayAVSCodes': !exists(json, 'gatewayAVSCodes') ? undefined : json['gatewayAVSCodes'],
        'gatewayCVV2Codes': !exists(json, 'gatewayCVV2Codes') ? undefined : json['gatewayCVV2Codes'],
        'gatewayResponseCode': !exists(json, 'gatewayResponseCode') ? undefined : json['gatewayResponseCode'],
        'gatewayResponseText': !exists(json, 'gatewayResponseText') ? undefined : json['gatewayResponseText'],
        'gatewayResponseData': !exists(json, 'gatewayResponseData') ? undefined : (json['gatewayResponseData'] === null ? null : (json['gatewayResponseData'] as Array<any>).map(PaymentGatewayResponseDataFromJSON)),
        'paymentTransactionInteractionIdReference': !exists(json, 'paymentTransactionInteractionIdReference') ? undefined : json['paymentTransactionInteractionIdReference'],
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'note': !exists(json, 'note') ? undefined : json['note'],
        'interactionDate': !exists(json, 'interactionDate') ? undefined : (json['interactionDate'] === null ? null : new Date(json['interactionDate'])),
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AuditInfoFromJSON(json['auditInfo']),
        'returnId': !exists(json, 'returnId') ? undefined : json['returnId'],
        'refundId': !exists(json, 'refundId') ? undefined : json['refundId'],
        'capturableShipmentsSummary': !exists(json, 'capturableShipmentsSummary') ? undefined : (json['capturableShipmentsSummary'] === null ? null : (json['capturableShipmentsSummary'] as Array<any>).map(CapturableShipmentSummaryFromJSON)),
    };
}

export function PaymentInteractionToJSON(value?: PaymentInteraction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'gatewayInteractionId': value.gatewayInteractionId,
        'paymentId': value.paymentId,
        'orderId': value.orderId,
        'target': PaymentActionTargetToJSON(value.target),
        'currencyCode': value.currencyCode,
        'interactionType': value.interactionType,
        'checkNumber': value.checkNumber,
        'status': value.status,
        'paymentEntryStatus': value.paymentEntryStatus,
        'isRecurring': value.isRecurring,
        'isManual': value.isManual,
        'gatewayTransactionId': value.gatewayTransactionId,
        'gatewayAuthCode': value.gatewayAuthCode,
        'gatewayAVSCodes': value.gatewayAVSCodes,
        'gatewayCVV2Codes': value.gatewayCVV2Codes,
        'gatewayResponseCode': value.gatewayResponseCode,
        'gatewayResponseText': value.gatewayResponseText,
        'gatewayResponseData': value.gatewayResponseData === undefined ? undefined : (value.gatewayResponseData === null ? null : (value.gatewayResponseData as Array<any>).map(PaymentGatewayResponseDataToJSON)),
        'paymentTransactionInteractionIdReference': value.paymentTransactionInteractionIdReference,
        'amount': value.amount,
        'note': value.note,
        'interactionDate': value.interactionDate === undefined ? undefined : (value.interactionDate === null ? null : value.interactionDate.toISOString()),
        'auditInfo': AuditInfoToJSON(value.auditInfo),
        'returnId': value.returnId,
        'refundId': value.refundId,
        'capturableShipmentsSummary': value.capturableShipmentsSummary === undefined ? undefined : (value.capturableShipmentsSummary === null ? null : (value.capturableShipmentsSummary as Array<any>).map(CapturableShipmentSummaryToJSON)),
    };
}

