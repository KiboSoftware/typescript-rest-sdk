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
import type { AppliedDiscount } from './AppliedDiscount';
import {
    AppliedDiscountFromJSON,
    AppliedDiscountFromJSONTyped,
    AppliedDiscountToJSON,
} from './AppliedDiscount';
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
import type { ExtendedProperty } from './ExtendedProperty';
import {
    ExtendedPropertyFromJSON,
    ExtendedPropertyFromJSONTyped,
    ExtendedPropertyToJSON,
} from './ExtendedProperty';
import type { FulfillmentInfo } from './FulfillmentInfo';
import {
    FulfillmentInfoFromJSON,
    FulfillmentInfoFromJSONTyped,
    FulfillmentInfoToJSON,
} from './FulfillmentInfo';
import type { SuggestedDiscount } from './SuggestedDiscount';
import {
    SuggestedDiscountFromJSON,
    SuggestedDiscountFromJSONTyped,
    SuggestedDiscountToJSON,
} from './SuggestedDiscount';
import type { ThresholdMessage } from './ThresholdMessage';
import {
    ThresholdMessageFromJSON,
    ThresholdMessageFromJSONTyped,
    ThresholdMessageToJSON,
} from './ThresholdMessage';

/**
 * Base class for cart and order
 * @export
 * @interface CommerceAggregate
 */
export interface CommerceAggregate {
    /**
     * Unique identifier of the shopper who created the cart.
     * @type {string}
     * @memberof CommerceAggregate
     */
    userId?: string | null;
    /**
     * Unique identifier of the CommerceAggregate object (e.g. order, cart, wishlist, etc.).
     * @type {string}
     * @memberof CommerceAggregate
     */
    id?: string | null;
    /**
     * Unique identifier of the Tenant.
     * @type {number}
     * @memberof CommerceAggregate
     */
    tenantId?: number | null;
    /**
     * Unique identifier of the Site.
     * @type {number}
     * @memberof CommerceAggregate
     */
    siteId?: number | null;
    /**
     * Unique identifier of the channel for this item.
     * @type {string}
     * @memberof CommerceAggregate
     */
    channelCode?: string | null;
    /**
     * ISO Currency Code. Currently, only USD is supported.
     * @type {string}
     * @memberof CommerceAggregate
     */
    currencyCode?: string | null;
    /**
     * Identifies the Visit ID that was current when the order was placed or when the cart was last updated.
     * @type {string}
     * @memberof CommerceAggregate
     */
    visitId?: string | null;
    /**
     * Identifies the web session used to place the order or last update the cart.
     * @type {string}
     * @memberof CommerceAggregate
     */
    webSessionId?: string | null;
    /**
     * Determines the interaction type that a customer will use to create this object.
     * Valid values are: Website, Store, Call, Unknown
     * @type {string}
     * @memberof CommerceAggregate
     */
    customerInteractionType?: string | null;
    /**
     * 
     * @type {FulfillmentInfo}
     * @memberof CommerceAggregate
     */
    fulfillmentInfo?: FulfillmentInfo;
    /**
     * The discount that has been applied to the cart itself. If multiple discounts exist, this is the discount that the system applies because it offers the best savings for the shopper. This is a negative number.
     * @type {Array<AppliedDiscount>}
     * @memberof CommerceAggregate
     */
    orderDiscounts?: Array<AppliedDiscount> | null;
    /**
     * 
     * @type {Array<SuggestedDiscount>}
     * @memberof CommerceAggregate
     */
    suggestedDiscounts?: Array<SuggestedDiscount> | null;
    /**
     * 
     * @type {Array<SuggestedDiscount>}
     * @memberof CommerceAggregate
     */
    rejectedDiscounts?: Array<SuggestedDiscount> | null;
    /**
     * Custom data for a given vendor set within the commerce process.
     * @type {object}
     * @memberof CommerceAggregate
     */
    data?: object | null;
    /**
     * Storage for any additional/custom tax data.
     * @type {object}
     * @memberof CommerceAggregate
     */
    taxData?: object | null;
    /**
     * Combined price for all cart items, including all selected options but excluding any discounts.
     * @type {number}
     * @memberof CommerceAggregate
     */
    subtotal?: number | null;
    /**
     * Combined price for all cart items, including all selected options as well as any discounts.
     * @type {number}
     * @memberof CommerceAggregate
     */
    discountedSubtotal?: number | null;
    /**
     * Amount of the discounts applied to all items in the cart. This is a negative number.  This also includes the order level discounts.
     * @type {number}
     * @memberof CommerceAggregate
     */
    discountTotal?: number | null;
    /**
     * Subtotal minus the discounted total
     * @type {number}
     * @memberof CommerceAggregate
     */
    discountedTotal?: number | null;
    /**
     * Shipping does not appear on cart.
     * @type {number}
     * @memberof CommerceAggregate
     */
    shippingTotal?: number | null;
    /**
     * Shipping total without discounts applied.
     * @type {number}
     * @memberof CommerceAggregate
     */
    shippingSubTotal?: number | null;
    /**
     * Not implemented. Tax does not appear on cart.
     * @type {number}
     * @memberof CommerceAggregate
     */
    shippingTaxTotal?: number | null;
    /**
     * Total tax on handling
     * @type {number}
     * @memberof CommerceAggregate
     */
    handlingTaxTotal?: number | null;
    /**
     * Not implemented. Tax does not appear on cart.
     * @type {number}
     * @memberof CommerceAggregate
     */
    itemTaxTotal?: number | null;
    /**
     * Tax does not appear on cart.
     * @type {number}
     * @memberof CommerceAggregate
     */
    taxTotal?: number | null;
    /**
     * Not implemented. Total cost of fees for all items in the cart.
     * @type {number}
     * @memberof CommerceAggregate
     */
    feeTotal?: number | null;
    /**
     * Final total amount of the order including all discounts, shipping, and tax.
     * @type {number}
     * @memberof CommerceAggregate
     */
    total?: number | null;
    /**
     * Line Item Subtotals with Order Adjustments
     * @type {number}
     * @memberof CommerceAggregate
     */
    lineItemSubtotalWithOrderAdjustments?: number | null;
    /**
     * Shipping Amount before discount and adjustments
     * @type {number}
     * @memberof CommerceAggregate
     */
    shippingAmountBeforeDiscountsAndAdjustments?: number | null;
    /**
     * Occasionally the commerce runtime may validate that item/product names, descriptions, and prices have not changed. 
     * If changed, it updates LastValidationDate.
     * @type {Date}
     * @memberof CommerceAggregate
     */
    lastValidationDate?: Date | null;
    /**
     * When the order will no longer be active. That is, the order is considered abandoned. 
     * Orders of anonymous shoppers expire after 14 days of inactivity. 
     * An order never expires for shoppers who are logged into their account. 
     * Date in UTC Date/Time.
     * @type {Date}
     * @memberof CommerceAggregate
     */
    expirationDate?: Date | null;
    /**
     * List of messages displayed by the system based on the last cart action, for example, when a product price has changed or is out-of-stock. System-supplied and read-only.
     * @type {Array<ChangeMessage>}
     * @memberof CommerceAggregate
     */
    changeMessages?: Array<ChangeMessage> | null;
    /**
     * Extra properties (key-value pairs) that extend the primary object. Think of this as a property bag of string keys and string values.
     * @type {Array<ExtendedProperty>}
     * @memberof CommerceAggregate
     */
    extendedProperties?: Array<ExtendedProperty> | null;
    /**
     * List of Mozu.CommerceRuntime.Contracts.Commerce.ThresholdMessage objects that are valid for the current value of the cart/order.
     * @type {Array<ThresholdMessage>}
     * @memberof CommerceAggregate
     */
    discountThresholdMessages?: Array<ThresholdMessage> | null;
    /**
     * 
     * @type {AuditInfo}
     * @memberof CommerceAggregate
     */
    auditInfo?: AuditInfo;
}

/**
 * Check if a given object implements the CommerceAggregate interface.
 */
export function instanceOfCommerceAggregate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommerceAggregateFromJSON(json: any): CommerceAggregate {
    return CommerceAggregateFromJSONTyped(json, false);
}

export function CommerceAggregateFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommerceAggregate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'tenantId': !exists(json, 'tenantId') ? undefined : json['tenantId'],
        'siteId': !exists(json, 'siteId') ? undefined : json['siteId'],
        'channelCode': !exists(json, 'channelCode') ? undefined : json['channelCode'],
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'visitId': !exists(json, 'visitId') ? undefined : json['visitId'],
        'webSessionId': !exists(json, 'webSessionId') ? undefined : json['webSessionId'],
        'customerInteractionType': !exists(json, 'customerInteractionType') ? undefined : json['customerInteractionType'],
        'fulfillmentInfo': !exists(json, 'fulfillmentInfo') ? undefined : FulfillmentInfoFromJSON(json['fulfillmentInfo']),
        'orderDiscounts': !exists(json, 'orderDiscounts') ? undefined : (json['orderDiscounts'] === null ? null : (json['orderDiscounts'] as Array<any>).map(AppliedDiscountFromJSON)),
        'suggestedDiscounts': !exists(json, 'suggestedDiscounts') ? undefined : (json['suggestedDiscounts'] === null ? null : (json['suggestedDiscounts'] as Array<any>).map(SuggestedDiscountFromJSON)),
        'rejectedDiscounts': !exists(json, 'rejectedDiscounts') ? undefined : (json['rejectedDiscounts'] === null ? null : (json['rejectedDiscounts'] as Array<any>).map(SuggestedDiscountFromJSON)),
        'data': !exists(json, 'data') ? undefined : json['data'],
        'taxData': !exists(json, 'taxData') ? undefined : json['taxData'],
        'subtotal': !exists(json, 'subtotal') ? undefined : json['subtotal'],
        'discountedSubtotal': !exists(json, 'discountedSubtotal') ? undefined : json['discountedSubtotal'],
        'discountTotal': !exists(json, 'discountTotal') ? undefined : json['discountTotal'],
        'discountedTotal': !exists(json, 'discountedTotal') ? undefined : json['discountedTotal'],
        'shippingTotal': !exists(json, 'shippingTotal') ? undefined : json['shippingTotal'],
        'shippingSubTotal': !exists(json, 'shippingSubTotal') ? undefined : json['shippingSubTotal'],
        'shippingTaxTotal': !exists(json, 'shippingTaxTotal') ? undefined : json['shippingTaxTotal'],
        'handlingTaxTotal': !exists(json, 'handlingTaxTotal') ? undefined : json['handlingTaxTotal'],
        'itemTaxTotal': !exists(json, 'itemTaxTotal') ? undefined : json['itemTaxTotal'],
        'taxTotal': !exists(json, 'taxTotal') ? undefined : json['taxTotal'],
        'feeTotal': !exists(json, 'feeTotal') ? undefined : json['feeTotal'],
        'total': !exists(json, 'total') ? undefined : json['total'],
        'lineItemSubtotalWithOrderAdjustments': !exists(json, 'lineItemSubtotalWithOrderAdjustments') ? undefined : json['lineItemSubtotalWithOrderAdjustments'],
        'shippingAmountBeforeDiscountsAndAdjustments': !exists(json, 'shippingAmountBeforeDiscountsAndAdjustments') ? undefined : json['shippingAmountBeforeDiscountsAndAdjustments'],
        'lastValidationDate': !exists(json, 'lastValidationDate') ? undefined : (json['lastValidationDate'] === null ? null : new Date(json['lastValidationDate'])),
        'expirationDate': !exists(json, 'expirationDate') ? undefined : (json['expirationDate'] === null ? null : new Date(json['expirationDate'])),
        'changeMessages': !exists(json, 'changeMessages') ? undefined : (json['changeMessages'] === null ? null : (json['changeMessages'] as Array<any>).map(ChangeMessageFromJSON)),
        'extendedProperties': !exists(json, 'extendedProperties') ? undefined : (json['extendedProperties'] === null ? null : (json['extendedProperties'] as Array<any>).map(ExtendedPropertyFromJSON)),
        'discountThresholdMessages': !exists(json, 'discountThresholdMessages') ? undefined : (json['discountThresholdMessages'] === null ? null : (json['discountThresholdMessages'] as Array<any>).map(ThresholdMessageFromJSON)),
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AuditInfoFromJSON(json['auditInfo']),
    };
}

export function CommerceAggregateToJSON(value?: CommerceAggregate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userId': value.userId,
        'id': value.id,
        'tenantId': value.tenantId,
        'siteId': value.siteId,
        'channelCode': value.channelCode,
        'currencyCode': value.currencyCode,
        'visitId': value.visitId,
        'webSessionId': value.webSessionId,
        'customerInteractionType': value.customerInteractionType,
        'fulfillmentInfo': FulfillmentInfoToJSON(value.fulfillmentInfo),
        'orderDiscounts': value.orderDiscounts === undefined ? undefined : (value.orderDiscounts === null ? null : (value.orderDiscounts as Array<any>).map(AppliedDiscountToJSON)),
        'suggestedDiscounts': value.suggestedDiscounts === undefined ? undefined : (value.suggestedDiscounts === null ? null : (value.suggestedDiscounts as Array<any>).map(SuggestedDiscountToJSON)),
        'rejectedDiscounts': value.rejectedDiscounts === undefined ? undefined : (value.rejectedDiscounts === null ? null : (value.rejectedDiscounts as Array<any>).map(SuggestedDiscountToJSON)),
        'data': value.data,
        'taxData': value.taxData,
        'subtotal': value.subtotal,
        'discountedSubtotal': value.discountedSubtotal,
        'discountTotal': value.discountTotal,
        'discountedTotal': value.discountedTotal,
        'shippingTotal': value.shippingTotal,
        'shippingSubTotal': value.shippingSubTotal,
        'shippingTaxTotal': value.shippingTaxTotal,
        'handlingTaxTotal': value.handlingTaxTotal,
        'itemTaxTotal': value.itemTaxTotal,
        'taxTotal': value.taxTotal,
        'feeTotal': value.feeTotal,
        'total': value.total,
        'lineItemSubtotalWithOrderAdjustments': value.lineItemSubtotalWithOrderAdjustments,
        'shippingAmountBeforeDiscountsAndAdjustments': value.shippingAmountBeforeDiscountsAndAdjustments,
        'lastValidationDate': value.lastValidationDate === undefined ? undefined : (value.lastValidationDate === null ? null : value.lastValidationDate.toISOString()),
        'expirationDate': value.expirationDate === undefined ? undefined : (value.expirationDate === null ? null : value.expirationDate.toISOString()),
        'changeMessages': value.changeMessages === undefined ? undefined : (value.changeMessages === null ? null : (value.changeMessages as Array<any>).map(ChangeMessageToJSON)),
        'extendedProperties': value.extendedProperties === undefined ? undefined : (value.extendedProperties === null ? null : (value.extendedProperties as Array<any>).map(ExtendedPropertyToJSON)),
        'discountThresholdMessages': value.discountThresholdMessages === undefined ? undefined : (value.discountThresholdMessages === null ? null : (value.discountThresholdMessages as Array<any>).map(ThresholdMessageToJSON)),
        'auditInfo': AuditInfoToJSON(value.auditInfo),
    };
}

