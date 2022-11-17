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
import type { ChangeMessage } from './ChangeMessage';
import {
    ChangeMessageFromJSON,
    ChangeMessageFromJSONTyped,
    ChangeMessageToJSON,
} from './ChangeMessage';
import type { Contact } from './Contact';
import {
    ContactFromJSON,
    ContactFromJSONTyped,
    ContactToJSON,
} from './Contact';
import type { OrderNote } from './OrderNote';
import {
    OrderNoteFromJSON,
    OrderNoteFromJSONTyped,
    OrderNoteToJSON,
} from './OrderNote';
import type { Package } from './Package';
import {
    PackageFromJSON,
    PackageFromJSONTyped,
    PackageToJSON,
} from './Package';
import type { Payment } from './Payment';
import {
    PaymentFromJSON,
    PaymentFromJSONTyped,
    PaymentToJSON,
} from './Payment';
import type { ReturnItem } from './ReturnItem';
import {
    ReturnItemFromJSON,
    ReturnItemFromJSONTyped,
    ReturnItemToJSON,
} from './ReturnItem';

/**
 * 
 * @export
 * @interface Return
 */
export interface Return {
    /**
     * Unique Identifier for this Return
     * @type {string}
     * @memberof Return
     */
    id?: string | null;
    /**
     * Unique identifier of the customer account.
     * @type {number}
     * @memberof Return
     */
    customerAccountId?: number | null;
    /**
     * Identifies the Visit ID that was current when the order was placed or when the cart was last updated.
     * @type {string}
     * @memberof Return
     */
    visitId?: string | null;
    /**
     * Identifies the web session used to place the order or last update the cart.
     * @type {string}
     * @memberof Return
     */
    webSessionId?: string | null;
    /**
     * Determines the interaction type that a customer will use to create this object.
     * Valid values are: Website, Store, Call, Unknown
     * @type {string}
     * @memberof Return
     */
    customerInteractionType?: string | null;
    /**
     * Current available actions.
     * @type {Array<string>}
     * @memberof Return
     */
    availableActions?: Array<string> | null;
    /**
     * A human-facing identifier that is unique within a tenant to represent the sequential ordering of Returns.
     * @type {number}
     * @memberof Return
     */
    returnNumber?: number | null;
    /**
     * 
     * @type {Contact}
     * @memberof Return
     */
    contact?: Contact;
    /**
     * Location code where the return was made/processed
     * @type {string}
     * @memberof Return
     */
    locationCode?: string | null;
    /**
     * The Id of the Order that this Return was generated from.
     * @type {string}
     * @memberof Return
     */
    originalOrderId?: string | null;
    /**
     * The order number that this return was generated from.
     * @type {number}
     * @memberof Return
     */
    originalOrderNumber?: number | null;
    /**
     * The Id of the Order that represents the items shipped to the shopper for this Return.
     * @type {string}
     * @memberof Return
     */
    returnOrderId?: string | null;
    /**
     * ISO Currency Code. Currently, only USD is supported.
     * @type {string}
     * @memberof Return
     */
    currencyCode?: string | null;
    /**
     * The Status of the Return.  Valid values are 
     *     Null, Created, ReturnAuthorized, ReturnPending, ReturnReceived, ReplacementShipped, Cancelled, and Closed.
     * @type {string}
     * @memberof Return
     */
    status?: string | null;
    /**
     * A rollup status describing whether the return items have been received.
     * See Mozu.CommerceRuntime.Contracts.Returns.Return.ReceiveStatusConst for possible values.
     * @type {string}
     * @memberof Return
     */
    receiveStatus?: string | null;
    /**
     * A rollup status describing whether the return items have been refunded.
     * See Mozu.CommerceRuntime.Contracts.Returns.Return.RefundStatusConst for possible values.
     * @type {string}
     * @memberof Return
     */
    refundStatus?: string | null;
    /**
     * A rollup status describing whether the return items have been marked as replaced.
     * See Mozu.CommerceRuntime.Contracts.Returns.Return.ReplaceStatusConst for possible values.
     * @type {string}
     * @memberof Return
     */
    replaceStatus?: string | null;
    /**
     * The list of items being returned by the Shopper and replaced by the Merchant in this Return.
     * @type {Array<ReturnItem>}
     * @memberof Return
     */
    items?: Array<ReturnItem> | null;
    /**
     * Any Merchant Notes for this Return.
     * @type {Array<OrderNote>}
     * @memberof Return
     */
    notes?: Array<OrderNote> | null;
    /**
     * The deadline for a Shopper to ship the items in this Return to the Merchant.
     * @type {Date}
     * @memberof Return
     */
    rmaDeadline?: Date | null;
    /**
     * Specifies whether this Return was a Refund or a Replace
     * @type {string}
     * @memberof Return
     */
    returnType?: string | null;
    /**
     * If this Return was refunded,  how much was credited to the shopper? This amount is summed from the refund payments.
     * @type {number}
     * @memberof Return
     */
    refundAmount?: number | null;
    /**
     * 
     * @type {AuditInfo}
     * @memberof Return
     */
    auditInfo?: AuditInfo;
    /**
     * Any Refund payments associated with this Return.
     * @type {Array<Payment>}
     * @memberof Return
     */
    payments?: Array<Payment> | null;
    /**
     * Shipping package associated with this return.
     * @type {Array<Package>}
     * @memberof Return
     */
    packages?: Array<Package> | null;
    /**
     * The Total Loss Amount is equal to the (cost of item) * quantity of item returned.
     * It is meant to represent the product value to the merchant of the items damaged or returned by a shopper.
     * @type {number}
     * @memberof Return
     */
    productLossTotal?: number | null;
    /**
     * The Shipping Loss Total is equal to the (shipping cost of item) * quantity of item returned.
     * It is meant to represent the product value to the merchant of the items damaged or returned by a shopper.
     * @type {number}
     * @memberof Return
     */
    shippingLossTotal?: number | null;
    /**
     * Sum of the ProductLossTotal and the ShippingLossTotal.
     * @type {number}
     * @memberof Return
     */
    lossTotal?: number | null;
    /**
     * The Total Taxes assessed on the product loss.
     * @type {number}
     * @memberof Return
     */
    productLossTaxTotal?: number | null;
    /**
     * The Total Taxes assessed on the shipping loss.
     * @type {number}
     * @memberof Return
     */
    shippingLossTaxTotal?: number | null;
    /**
     * Unique identifier of the Tenant.
     * @type {number}
     * @memberof Return
     */
    tenantId?: number | null;
    /**
     * Unique identifier of the Site.
     * @type {number}
     * @memberof Return
     */
    siteId?: number | null;
    /**
     * Unique identifier of the current user.
     * @type {string}
     * @memberof Return
     */
    userId?: string | null;
    /**
     * Unique identifier of the channel for this item.
     * @type {string}
     * @memberof Return
     */
    channelCode?: string | null;
    /**
     * Change messages related to the return.
     * @type {Array<ChangeMessage>}
     * @memberof Return
     */
    changeMessages?: Array<ChangeMessage> | null;
    /**
     * To find Returns that have failed to refund.
     * @type {boolean}
     * @memberof Return
     */
    actionRequired?: boolean;
    /**
     * Was this return created by the Unified platform.
     * @type {boolean}
     * @memberof Return
     */
    isUnified?: boolean;
    /**
     * To identify Return is refundable or not.
     * @type {boolean}
     * @memberof Return
     */
    canInitiateRefund?: boolean;
    /**
     * If this Flag is true, Refund will be done on new Gift Card.
     * @type {boolean}
     * @memberof Return
     */
    refundToGC?: boolean;
}

/**
 * Check if a given object implements the Return interface.
 */
export function instanceOfReturn(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReturnFromJSON(json: any): Return {
    return ReturnFromJSONTyped(json, false);
}

export function ReturnFromJSONTyped(json: any, ignoreDiscriminator: boolean): Return {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'customerAccountId': !exists(json, 'customerAccountId') ? undefined : json['customerAccountId'],
        'visitId': !exists(json, 'visitId') ? undefined : json['visitId'],
        'webSessionId': !exists(json, 'webSessionId') ? undefined : json['webSessionId'],
        'customerInteractionType': !exists(json, 'customerInteractionType') ? undefined : json['customerInteractionType'],
        'availableActions': !exists(json, 'availableActions') ? undefined : json['availableActions'],
        'returnNumber': !exists(json, 'returnNumber') ? undefined : json['returnNumber'],
        'contact': !exists(json, 'contact') ? undefined : ContactFromJSON(json['contact']),
        'locationCode': !exists(json, 'locationCode') ? undefined : json['locationCode'],
        'originalOrderId': !exists(json, 'originalOrderId') ? undefined : json['originalOrderId'],
        'originalOrderNumber': !exists(json, 'originalOrderNumber') ? undefined : json['originalOrderNumber'],
        'returnOrderId': !exists(json, 'returnOrderId') ? undefined : json['returnOrderId'],
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'receiveStatus': !exists(json, 'receiveStatus') ? undefined : json['receiveStatus'],
        'refundStatus': !exists(json, 'refundStatus') ? undefined : json['refundStatus'],
        'replaceStatus': !exists(json, 'replaceStatus') ? undefined : json['replaceStatus'],
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(ReturnItemFromJSON)),
        'notes': !exists(json, 'notes') ? undefined : (json['notes'] === null ? null : (json['notes'] as Array<any>).map(OrderNoteFromJSON)),
        'rmaDeadline': !exists(json, 'rmaDeadline') ? undefined : (json['rmaDeadline'] === null ? null : new Date(json['rmaDeadline'])),
        'returnType': !exists(json, 'returnType') ? undefined : json['returnType'],
        'refundAmount': !exists(json, 'refundAmount') ? undefined : json['refundAmount'],
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AuditInfoFromJSON(json['auditInfo']),
        'payments': !exists(json, 'payments') ? undefined : (json['payments'] === null ? null : (json['payments'] as Array<any>).map(PaymentFromJSON)),
        'packages': !exists(json, 'packages') ? undefined : (json['packages'] === null ? null : (json['packages'] as Array<any>).map(PackageFromJSON)),
        'productLossTotal': !exists(json, 'productLossTotal') ? undefined : json['productLossTotal'],
        'shippingLossTotal': !exists(json, 'shippingLossTotal') ? undefined : json['shippingLossTotal'],
        'lossTotal': !exists(json, 'lossTotal') ? undefined : json['lossTotal'],
        'productLossTaxTotal': !exists(json, 'productLossTaxTotal') ? undefined : json['productLossTaxTotal'],
        'shippingLossTaxTotal': !exists(json, 'shippingLossTaxTotal') ? undefined : json['shippingLossTaxTotal'],
        'tenantId': !exists(json, 'tenantId') ? undefined : json['tenantId'],
        'siteId': !exists(json, 'siteId') ? undefined : json['siteId'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'channelCode': !exists(json, 'channelCode') ? undefined : json['channelCode'],
        'changeMessages': !exists(json, 'changeMessages') ? undefined : (json['changeMessages'] === null ? null : (json['changeMessages'] as Array<any>).map(ChangeMessageFromJSON)),
        'actionRequired': !exists(json, 'actionRequired') ? undefined : json['actionRequired'],
        'isUnified': !exists(json, 'isUnified') ? undefined : json['isUnified'],
        'canInitiateRefund': !exists(json, 'canInitiateRefund') ? undefined : json['canInitiateRefund'],
        'refundToGC': !exists(json, 'refundToGC') ? undefined : json['refundToGC'],
    };
}

export function ReturnToJSON(value?: Return | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'customerAccountId': value.customerAccountId,
        'visitId': value.visitId,
        'webSessionId': value.webSessionId,
        'customerInteractionType': value.customerInteractionType,
        'availableActions': value.availableActions,
        'returnNumber': value.returnNumber,
        'contact': ContactToJSON(value.contact),
        'locationCode': value.locationCode,
        'originalOrderId': value.originalOrderId,
        'originalOrderNumber': value.originalOrderNumber,
        'returnOrderId': value.returnOrderId,
        'currencyCode': value.currencyCode,
        'status': value.status,
        'receiveStatus': value.receiveStatus,
        'refundStatus': value.refundStatus,
        'replaceStatus': value.replaceStatus,
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(ReturnItemToJSON)),
        'notes': value.notes === undefined ? undefined : (value.notes === null ? null : (value.notes as Array<any>).map(OrderNoteToJSON)),
        'rmaDeadline': value.rmaDeadline === undefined ? undefined : (value.rmaDeadline === null ? null : value.rmaDeadline.toISOString()),
        'returnType': value.returnType,
        'refundAmount': value.refundAmount,
        'auditInfo': AuditInfoToJSON(value.auditInfo),
        'payments': value.payments === undefined ? undefined : (value.payments === null ? null : (value.payments as Array<any>).map(PaymentToJSON)),
        'packages': value.packages === undefined ? undefined : (value.packages === null ? null : (value.packages as Array<any>).map(PackageToJSON)),
        'productLossTotal': value.productLossTotal,
        'shippingLossTotal': value.shippingLossTotal,
        'lossTotal': value.lossTotal,
        'productLossTaxTotal': value.productLossTaxTotal,
        'shippingLossTaxTotal': value.shippingLossTaxTotal,
        'tenantId': value.tenantId,
        'siteId': value.siteId,
        'userId': value.userId,
        'channelCode': value.channelCode,
        'changeMessages': value.changeMessages === undefined ? undefined : (value.changeMessages === null ? null : (value.changeMessages as Array<any>).map(ChangeMessageToJSON)),
        'actionRequired': value.actionRequired,
        'isUnified': value.isUnified,
        'canInitiateRefund': value.canInitiateRefund,
        'refundToGC': value.refundToGC,
    };
}
