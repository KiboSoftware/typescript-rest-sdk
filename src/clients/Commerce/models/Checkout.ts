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
import type { AlternateContact } from './AlternateContact';
import {
    AlternateContactFromJSON,
    AlternateContactFromJSONTyped,
    AlternateContactToJSON,
} from './AlternateContact';
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
import type { CheckoutGrouping } from './CheckoutGrouping';
import {
    CheckoutGroupingFromJSON,
    CheckoutGroupingFromJSONTyped,
    CheckoutGroupingToJSON,
} from './CheckoutGrouping';
import type { Destination } from './Destination';
import {
    DestinationFromJSON,
    DestinationFromJSONTyped,
    DestinationToJSON,
} from './Destination';
import type { InvalidCoupon } from './InvalidCoupon';
import {
    InvalidCouponFromJSON,
    InvalidCouponFromJSONTyped,
    InvalidCouponToJSON,
} from './InvalidCoupon';
import type { OrderAttribute } from './OrderAttribute';
import {
    OrderAttributeFromJSON,
    OrderAttributeFromJSONTyped,
    OrderAttributeToJSON,
} from './OrderAttribute';
import type { OrderItem } from './OrderItem';
import {
    OrderItemFromJSON,
    OrderItemFromJSONTyped,
    OrderItemToJSON,
} from './OrderItem';
import type { Payment } from './Payment';
import {
    PaymentFromJSON,
    PaymentFromJSONTyped,
    PaymentToJSON,
} from './Payment';
import type { ShopperNotes } from './ShopperNotes';
import {
    ShopperNotesFromJSON,
    ShopperNotesFromJSONTyped,
    ShopperNotesToJSON,
} from './ShopperNotes';
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
 * 
 * @export
 * @interface Checkout
 */
export interface Checkout {
    /**
     * Unique identifier.
     * @type {string}
     * @memberof Checkout
     */
    id?: string | null;
    /**
     * Unique identifier of the Site.
     * @type {number}
     * @memberof Checkout
     */
    siteId?: number;
    /**
     * Unique identifier of the Tenant.
     * @type {number}
     * @memberof Checkout
     */
    tenantId?: number;
    /**
     * A checkout number that is only assigned after the checkout is placed.
     * @type {number}
     * @memberof Checkout
     */
    number?: number | null;
    /**
     * Unique identifier for the cart that was converted to checkout.
     * @type {string}
     * @memberof Checkout
     */
    originalCartId?: string | null;
    /**
     * When the customer placed (submitted) the order.
     * @type {Date}
     * @memberof Checkout
     */
    submittedDate?: Date | null;
    /**
     * Is this Order Online or Offline? Online means shopper entered at checkout, offline means a phone order.
     * @type {string}
     * @memberof Checkout
     */
    type?: string | null;
    /**
     * List of items in the checkout.
     * @type {Array<OrderItem>}
     * @memberof Checkout
     */
    items?: Array<OrderItem> | null;
    /**
     * List of checkout grouping.
     * @type {Array<CheckoutGrouping>}
     * @memberof Checkout
     */
    groupings?: Array<CheckoutGrouping> | null;
    /**
     * 
     * @type {AuditInfo}
     * @memberof Checkout
     */
    auditInfo?: AuditInfo;
    /**
     * 
     * @type {Array<Destination>}
     * @memberof Checkout
     */
    destinations?: Array<Destination> | null;
    /**
     * Payment transaction associated with this checkout. It is the entire payment interchange between the merchant 
     * who is forwarding the customer's payment information and the payment service who is authorizing and 
     * capturing payment. Payment can be either by credit card, check, or PayPal.
     * @type {Array<Payment>}
     * @memberof Checkout
     */
    payments?: Array<Payment> | null;
    /**
     * A counter for how much of the total has not been claimed by payments.
     * This is computed by Total - (sum of Payments where State is not Voided/Declined)
     * @type {number}
     * @memberof Checkout
     */
    amountRemainingForPayment?: number;
    /**
     * Does the customer accept marketing
     * @type {boolean}
     * @memberof Checkout
     */
    acceptsMarketing?: boolean | null;
    /**
     * Unique identifier of the customer account.
     * @type {number}
     * @memberof Checkout
     */
    customerAccountId?: number | null;
    /**
     * Email address for checkout
     * @type {string}
     * @memberof Checkout
     */
    email?: string | null;
    /**
     * 
     * @type {AlternateContact}
     * @memberof Checkout
     */
    alternateContact?: AlternateContact;
    /**
     * The customers tax ID. If Customer Account ID exists in the system, will set this.
     * @type {string}
     * @memberof Checkout
     */
    readonly customerTaxId?: string | null;
    /**
     * Unique identifier of the customer account.
     * @type {boolean}
     * @memberof Checkout
     */
    readonly isTaxExempt?: boolean | null;
    /**
     * ISO Currency Code.
     * @type {string}
     * @memberof Checkout
     */
    currencyCode?: string | null;
    /**
     * Pricelist code for the checkout
     * @type {string}
     * @memberof Checkout
     */
    priceListCode?: string | null;
    /**
     * 
     * @type {Array<OrderAttribute>}
     * @memberof Checkout
     */
    attributes?: Array<OrderAttribute> | null;
    /**
     * 
     * @type {ShopperNotes}
     * @memberof Checkout
     */
    shopperNotes?: ShopperNotes;
    /**
     * 
     * @type {Array<string>}
     * @memberof Checkout
     */
    availableActions?: Array<string> | null;
    /**
     * Custom data for a given vendor set within the commerce process.
     * @type {object}
     * @memberof Checkout
     */
    data?: object | null;
    /**
     * Storage for any additional/custom tax data.
     * @type {object}
     * @memberof Checkout
     */
    taxData?: object | null;
    /**
     * Unique identifier of the channel for this item.
     * @type {string}
     * @memberof Checkout
     */
    channelCode?: string | null;
    /**
     * Identifies the location at which the order was placed if the order was placed externally.
     * @type {string}
     * @memberof Checkout
     */
    locationCode?: string | null;
    /**
     * IP address of the user placing the order. (User or customer?)
     * @type {string}
     * @memberof Checkout
     */
    ipAddress?: string | null;
    /**
     * Source device of the user placing the order. (User or customer?)
     * @type {string}
     * @memberof Checkout
     */
    sourceDevice?: string | null;
    /**
     * Identifies the Visit ID that was current when the order was placed or when the cart was last updated.
     * @type {string}
     * @memberof Checkout
     */
    visitId?: string | null;
    /**
     * Identifies the web session used to place the order or last update the cart.
     * @type {string}
     * @memberof Checkout
     */
    webSessionId?: string | null;
    /**
     * Determines the interaction type that a customer will use to create this object.
     * Valid values are: Website, Store, Call, Unknown
     * @type {string}
     * @memberof Checkout
     */
    customerInteractionType?: string | null;
    /**
     * 
     * @type {Array<AppliedDiscount>}
     * @memberof Checkout
     */
    orderDiscounts?: Array<AppliedDiscount> | null;
    /**
     * Coupon codes associated with this order.
     * @type {Array<string>}
     * @memberof Checkout
     */
    couponCodes?: Array<string> | null;
    /**
     * A list of invalid coupons that were attempted on the order.
     * @type {Array<InvalidCoupon>}
     * @memberof Checkout
     */
    invalidCoupons?: Array<InvalidCoupon> | null;
    /**
     * 
     * @type {Array<SuggestedDiscount>}
     * @memberof Checkout
     */
    suggestedDiscounts?: Array<SuggestedDiscount> | null;
    /**
     * List of Mozu.CommerceRuntime.Contracts.Commerce.ThresholdMessage objects that are valid for the current value of the cart/order.
     * @type {Array<ThresholdMessage>}
     * @memberof Checkout
     */
    discountThresholdMessages?: Array<ThresholdMessage> | null;
    /**
     * Total duty fees
     * @type {number}
     * @memberof Checkout
     */
    dutyTotal?: number | null;
    /**
     * Total Fees
     * @type {number}
     * @memberof Checkout
     */
    feeTotal?: number;
    /**
     * Subtotal before any coupon codes, taxes, fees, etc.
     * @type {number}
     * @memberof Checkout
     */
    subTotal?: number;
    /**
     * The total value of item-level product discounts.
     * @type {number}
     * @memberof Checkout
     */
    itemLevelProductDiscountTotal?: number;
    /**
     * The total value of order-level (group-level) product discounts.
     * @type {number}
     * @memberof Checkout
     */
    orderLevelProductDiscountTotal?: number;
    /**
     * Total tax on products.
     * @type {number}
     * @memberof Checkout
     */
    itemTaxTotal?: number;
    /**
     * The total product cost, accounting for discounts and tax.
     * @type {number}
     * @memberof Checkout
     */
    itemTotal?: number;
    /**
     * Shipping does not appear on cart.
     * @type {number}
     * @memberof Checkout
     */
    shippingSubTotal?: number;
    /**
     * The total value of item-level shipping discounts.
     * @type {number}
     * @memberof Checkout
     */
    itemLevelShippingDiscountTotal?: number;
    /**
     * The total value of order-level (group-level) shipping discounts.
     * @type {number}
     * @memberof Checkout
     */
    orderLevelShippingDiscountTotal?: number;
    /**
     * Total tax on shipping.
     * @type {number}
     * @memberof Checkout
     */
    shippingTaxTotal?: number;
    /**
     * Overall shipping total, accounting for item and order-level shipping costs, any shipping discounts, and shipping tax.
     * @type {number}
     * @memberof Checkout
     */
    shippingTotal?: number;
    /**
     * Pre-Discounted Handling Subtotal of the CommerceAggregate and its Items.
     * Returns {null} if the calculated value is negative.
     * @type {number}
     * @memberof Checkout
     */
    handlingSubTotal?: number;
    /**
     * The total value of item-level handling discounts.
     * @type {number}
     * @memberof Checkout
     */
    itemLevelHandlingDiscountTotal?: number;
    /**
     * The total value of order-level (group-level) handling discounts.
     * @type {number}
     * @memberof Checkout
     */
    orderLevelHandlingDiscountTotal?: number;
    /**
     * Total tax on handling.
     * @type {number}
     * @memberof Checkout
     */
    handlingTaxTotal?: number;
    /**
     * Overall handling total, accounting for line and order-level handling costs, any handling discounts, and handling tax.
     * @type {number}
     * @memberof Checkout
     */
    handlingTotal?: number;
    /**
     * Final total
     * @type {number}
     * @memberof Checkout
     */
    total?: number;
}

/**
 * Check if a given object implements the Checkout interface.
 */
export function instanceOfCheckout(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CheckoutFromJSON(json: any): Checkout {
    return CheckoutFromJSONTyped(json, false);
}

export function CheckoutFromJSONTyped(json: any, ignoreDiscriminator: boolean): Checkout {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'siteId': !exists(json, 'siteId') ? undefined : json['siteId'],
        'tenantId': !exists(json, 'tenantId') ? undefined : json['tenantId'],
        'number': !exists(json, 'number') ? undefined : json['number'],
        'originalCartId': !exists(json, 'originalCartId') ? undefined : json['originalCartId'],
        'submittedDate': !exists(json, 'submittedDate') ? undefined : (json['submittedDate'] === null ? null : new Date(json['submittedDate'])),
        'type': !exists(json, 'type') ? undefined : json['type'],
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(OrderItemFromJSON)),
        'groupings': !exists(json, 'groupings') ? undefined : (json['groupings'] === null ? null : (json['groupings'] as Array<any>).map(CheckoutGroupingFromJSON)),
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AuditInfoFromJSON(json['auditInfo']),
        'destinations': !exists(json, 'destinations') ? undefined : (json['destinations'] === null ? null : (json['destinations'] as Array<any>).map(DestinationFromJSON)),
        'payments': !exists(json, 'payments') ? undefined : (json['payments'] === null ? null : (json['payments'] as Array<any>).map(PaymentFromJSON)),
        'amountRemainingForPayment': !exists(json, 'amountRemainingForPayment') ? undefined : json['amountRemainingForPayment'],
        'acceptsMarketing': !exists(json, 'acceptsMarketing') ? undefined : json['acceptsMarketing'],
        'customerAccountId': !exists(json, 'customerAccountId') ? undefined : json['customerAccountId'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'alternateContact': !exists(json, 'alternateContact') ? undefined : AlternateContactFromJSON(json['alternateContact']),
        'customerTaxId': !exists(json, 'customerTaxId') ? undefined : json['customerTaxId'],
        'isTaxExempt': !exists(json, 'isTaxExempt') ? undefined : json['isTaxExempt'],
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'priceListCode': !exists(json, 'priceListCode') ? undefined : json['priceListCode'],
        'attributes': !exists(json, 'attributes') ? undefined : (json['attributes'] === null ? null : (json['attributes'] as Array<any>).map(OrderAttributeFromJSON)),
        'shopperNotes': !exists(json, 'shopperNotes') ? undefined : ShopperNotesFromJSON(json['shopperNotes']),
        'availableActions': !exists(json, 'availableActions') ? undefined : json['availableActions'],
        'data': !exists(json, 'data') ? undefined : json['data'],
        'taxData': !exists(json, 'taxData') ? undefined : json['taxData'],
        'channelCode': !exists(json, 'channelCode') ? undefined : json['channelCode'],
        'locationCode': !exists(json, 'locationCode') ? undefined : json['locationCode'],
        'ipAddress': !exists(json, 'ipAddress') ? undefined : json['ipAddress'],
        'sourceDevice': !exists(json, 'sourceDevice') ? undefined : json['sourceDevice'],
        'visitId': !exists(json, 'visitId') ? undefined : json['visitId'],
        'webSessionId': !exists(json, 'webSessionId') ? undefined : json['webSessionId'],
        'customerInteractionType': !exists(json, 'customerInteractionType') ? undefined : json['customerInteractionType'],
        'orderDiscounts': !exists(json, 'orderDiscounts') ? undefined : (json['orderDiscounts'] === null ? null : (json['orderDiscounts'] as Array<any>).map(AppliedDiscountFromJSON)),
        'couponCodes': !exists(json, 'couponCodes') ? undefined : json['couponCodes'],
        'invalidCoupons': !exists(json, 'invalidCoupons') ? undefined : (json['invalidCoupons'] === null ? null : (json['invalidCoupons'] as Array<any>).map(InvalidCouponFromJSON)),
        'suggestedDiscounts': !exists(json, 'suggestedDiscounts') ? undefined : (json['suggestedDiscounts'] === null ? null : (json['suggestedDiscounts'] as Array<any>).map(SuggestedDiscountFromJSON)),
        'discountThresholdMessages': !exists(json, 'discountThresholdMessages') ? undefined : (json['discountThresholdMessages'] === null ? null : (json['discountThresholdMessages'] as Array<any>).map(ThresholdMessageFromJSON)),
        'dutyTotal': !exists(json, 'dutyTotal') ? undefined : json['dutyTotal'],
        'feeTotal': !exists(json, 'feeTotal') ? undefined : json['feeTotal'],
        'subTotal': !exists(json, 'subTotal') ? undefined : json['subTotal'],
        'itemLevelProductDiscountTotal': !exists(json, 'itemLevelProductDiscountTotal') ? undefined : json['itemLevelProductDiscountTotal'],
        'orderLevelProductDiscountTotal': !exists(json, 'orderLevelProductDiscountTotal') ? undefined : json['orderLevelProductDiscountTotal'],
        'itemTaxTotal': !exists(json, 'itemTaxTotal') ? undefined : json['itemTaxTotal'],
        'itemTotal': !exists(json, 'itemTotal') ? undefined : json['itemTotal'],
        'shippingSubTotal': !exists(json, 'shippingSubTotal') ? undefined : json['shippingSubTotal'],
        'itemLevelShippingDiscountTotal': !exists(json, 'itemLevelShippingDiscountTotal') ? undefined : json['itemLevelShippingDiscountTotal'],
        'orderLevelShippingDiscountTotal': !exists(json, 'orderLevelShippingDiscountTotal') ? undefined : json['orderLevelShippingDiscountTotal'],
        'shippingTaxTotal': !exists(json, 'shippingTaxTotal') ? undefined : json['shippingTaxTotal'],
        'shippingTotal': !exists(json, 'shippingTotal') ? undefined : json['shippingTotal'],
        'handlingSubTotal': !exists(json, 'handlingSubTotal') ? undefined : json['handlingSubTotal'],
        'itemLevelHandlingDiscountTotal': !exists(json, 'itemLevelHandlingDiscountTotal') ? undefined : json['itemLevelHandlingDiscountTotal'],
        'orderLevelHandlingDiscountTotal': !exists(json, 'orderLevelHandlingDiscountTotal') ? undefined : json['orderLevelHandlingDiscountTotal'],
        'handlingTaxTotal': !exists(json, 'handlingTaxTotal') ? undefined : json['handlingTaxTotal'],
        'handlingTotal': !exists(json, 'handlingTotal') ? undefined : json['handlingTotal'],
        'total': !exists(json, 'total') ? undefined : json['total'],
    };
}

export function CheckoutToJSON(value?: Checkout | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'siteId': value.siteId,
        'tenantId': value.tenantId,
        'number': value.number,
        'originalCartId': value.originalCartId,
        'submittedDate': value.submittedDate === undefined ? undefined : (value.submittedDate === null ? null : value.submittedDate.toISOString()),
        'type': value.type,
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(OrderItemToJSON)),
        'groupings': value.groupings === undefined ? undefined : (value.groupings === null ? null : (value.groupings as Array<any>).map(CheckoutGroupingToJSON)),
        'auditInfo': AuditInfoToJSON(value.auditInfo),
        'destinations': value.destinations === undefined ? undefined : (value.destinations === null ? null : (value.destinations as Array<any>).map(DestinationToJSON)),
        'payments': value.payments === undefined ? undefined : (value.payments === null ? null : (value.payments as Array<any>).map(PaymentToJSON)),
        'amountRemainingForPayment': value.amountRemainingForPayment,
        'acceptsMarketing': value.acceptsMarketing,
        'customerAccountId': value.customerAccountId,
        'email': value.email,
        'alternateContact': AlternateContactToJSON(value.alternateContact),
        'currencyCode': value.currencyCode,
        'priceListCode': value.priceListCode,
        'attributes': value.attributes === undefined ? undefined : (value.attributes === null ? null : (value.attributes as Array<any>).map(OrderAttributeToJSON)),
        'shopperNotes': ShopperNotesToJSON(value.shopperNotes),
        'availableActions': value.availableActions,
        'data': value.data,
        'taxData': value.taxData,
        'channelCode': value.channelCode,
        'locationCode': value.locationCode,
        'ipAddress': value.ipAddress,
        'sourceDevice': value.sourceDevice,
        'visitId': value.visitId,
        'webSessionId': value.webSessionId,
        'customerInteractionType': value.customerInteractionType,
        'orderDiscounts': value.orderDiscounts === undefined ? undefined : (value.orderDiscounts === null ? null : (value.orderDiscounts as Array<any>).map(AppliedDiscountToJSON)),
        'couponCodes': value.couponCodes,
        'invalidCoupons': value.invalidCoupons === undefined ? undefined : (value.invalidCoupons === null ? null : (value.invalidCoupons as Array<any>).map(InvalidCouponToJSON)),
        'suggestedDiscounts': value.suggestedDiscounts === undefined ? undefined : (value.suggestedDiscounts === null ? null : (value.suggestedDiscounts as Array<any>).map(SuggestedDiscountToJSON)),
        'discountThresholdMessages': value.discountThresholdMessages === undefined ? undefined : (value.discountThresholdMessages === null ? null : (value.discountThresholdMessages as Array<any>).map(ThresholdMessageToJSON)),
        'dutyTotal': value.dutyTotal,
        'feeTotal': value.feeTotal,
        'subTotal': value.subTotal,
        'itemLevelProductDiscountTotal': value.itemLevelProductDiscountTotal,
        'orderLevelProductDiscountTotal': value.orderLevelProductDiscountTotal,
        'itemTaxTotal': value.itemTaxTotal,
        'itemTotal': value.itemTotal,
        'shippingSubTotal': value.shippingSubTotal,
        'itemLevelShippingDiscountTotal': value.itemLevelShippingDiscountTotal,
        'orderLevelShippingDiscountTotal': value.orderLevelShippingDiscountTotal,
        'shippingTaxTotal': value.shippingTaxTotal,
        'shippingTotal': value.shippingTotal,
        'handlingSubTotal': value.handlingSubTotal,
        'itemLevelHandlingDiscountTotal': value.itemLevelHandlingDiscountTotal,
        'orderLevelHandlingDiscountTotal': value.orderLevelHandlingDiscountTotal,
        'handlingTaxTotal': value.handlingTaxTotal,
        'handlingTotal': value.handlingTotal,
        'total': value.total,
    };
}

