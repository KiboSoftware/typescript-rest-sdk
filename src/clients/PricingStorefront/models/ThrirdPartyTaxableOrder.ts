/* tslint:disable */
/* eslint-disable */
/**
 * Kibo PricingRuntime Service
 * OpenAPI Spec for Kibo PricingRuntime Service
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
import type { AppliedOrderShippingDiscount } from './AppliedOrderShippingDiscount';
import {
    AppliedOrderShippingDiscountFromJSON,
    AppliedOrderShippingDiscountFromJSONTyped,
    AppliedOrderShippingDiscountToJSON,
} from './AppliedOrderShippingDiscount';
import type { TaxAttribute } from './TaxAttribute';
import {
    TaxAttributeFromJSON,
    TaxAttributeFromJSONTyped,
    TaxAttributeToJSON,
} from './TaxAttribute';
import type { TaxableLineItem } from './TaxableLineItem';
import {
    TaxableLineItemFromJSON,
    TaxableLineItemFromJSONTyped,
    TaxableLineItemToJSON,
} from './TaxableLineItem';
import type { ThrirdPartyTaxContext } from './ThrirdPartyTaxContext';
import {
    ThrirdPartyTaxContextFromJSON,
    ThrirdPartyTaxContextFromJSONTyped,
    ThrirdPartyTaxContextToJSON,
} from './ThrirdPartyTaxContext';

/**
 * An order sent to a thirdparty implementation for calculating taxes
 * @export
 * @interface ThrirdPartyTaxableOrder
 */
export interface ThrirdPartyTaxableOrder {
    /**
     * Date on which the order is/was submitted.
     * Cannot be a future date.
     * @type {Date}
     * @memberof ThrirdPartyTaxableOrder
     */
    orderDate?: Date;
    /**
     * 
     * @type {ThrirdPartyTaxContext}
     * @memberof ThrirdPartyTaxableOrder
     */
    taxContext?: ThrirdPartyTaxContext;
    /**
     * List of taxable items.
     * @type {Array<TaxableLineItem>}
     * @memberof ThrirdPartyTaxableOrder
     */
    lineItems?: Array<TaxableLineItem> | null;
    /**
     * Shipping Amount rolled up for the order
     * @type {number}
     * @memberof ThrirdPartyTaxableOrder
     */
    shippingAmount?: number;
    /**
     * The currency code for this order
     * @type {string}
     * @memberof ThrirdPartyTaxableOrder
     */
    currencyCode?: string | null;
    /**
     * Handling Fee
     * @type {number}
     * @memberof ThrirdPartyTaxableOrder
     */
    handlingFee?: number;
    /**
     * The order id of the original order.  This can be used to track changes to the order for taxing purposes.
     * @type {string}
     * @memberof ThrirdPartyTaxableOrder
     */
    originalDocumentCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ThrirdPartyTaxableOrder
     */
    orderId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ThrirdPartyTaxableOrder
     */
    orderNumber?: number | null;
    /**
     * The date of the original order.  This is used when calculating changes to the Taxable Order, evaluating them at this time rather than the present.
     * @type {Date}
     * @memberof ThrirdPartyTaxableOrder
     */
    originalOrderDate?: Date;
    /**
     * Used to differentiate between an Order and a Return being used as the source of this Taxable Order
     * @type {string}
     * @memberof ThrirdPartyTaxableOrder
     */
    taxRequestType?: string | null;
    /**
     * 
     * @type {Array<TaxAttribute>}
     * @memberof ThrirdPartyTaxableOrder
     */
    attributes?: Array<TaxAttribute> | null;
    /**
     * 
     * @type {Array<AppliedOrderShippingDiscount>}
     * @memberof ThrirdPartyTaxableOrder
     */
    shippingDiscounts?: Array<AppliedOrderShippingDiscount> | null;
    /**
     * 
     * @type {AppliedOrderShippingDiscount}
     * @memberof ThrirdPartyTaxableOrder
     */
    shippingDiscount?: AppliedOrderShippingDiscount;
    /**
     * The discount that has been applied to the cart itself. If multiple discounts exist, this is the discount that the system applies because it offers the best savings for the shopper. This is a negative number.
     * @type {Array<AppliedDiscount>}
     * @memberof ThrirdPartyTaxableOrder
     */
    orderDiscounts?: Array<AppliedDiscount> | null;
    /**
     * 
     * @type {AppliedDiscount}
     * @memberof ThrirdPartyTaxableOrder
     */
    orderDiscount?: AppliedDiscount;
    /**
     * The list of historically-applied handling discounts.  The active one will have IsExcluded == false
     * @type {Array<AppliedDiscount>}
     * @memberof ThrirdPartyTaxableOrder
     */
    handlingDiscounts?: Array<AppliedDiscount> | null;
    /**
     * 
     * @type {AppliedDiscount}
     * @memberof ThrirdPartyTaxableOrder
     */
    handlingDiscount?: AppliedDiscount;
    /**
     * Code that uniquely identifies the shipping method such as "Ground," "Overnight," or "Digital."
     * The site's shipping settings lists the valid shipping methods specified for this site.
     * @type {string}
     * @memberof ThrirdPartyTaxableOrder
     */
    shippingMethodCode?: string | null;
    /**
     * Readable name of the shipping method
     * @type {string}
     * @memberof ThrirdPartyTaxableOrder
     */
    shippingMethodName?: string | null;
}

/**
 * Check if a given object implements the ThrirdPartyTaxableOrder interface.
 */
export function instanceOfThrirdPartyTaxableOrder(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ThrirdPartyTaxableOrderFromJSON(json: any): ThrirdPartyTaxableOrder {
    return ThrirdPartyTaxableOrderFromJSONTyped(json, false);
}

export function ThrirdPartyTaxableOrderFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThrirdPartyTaxableOrder {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'orderDate': !exists(json, 'orderDate') ? undefined : (new Date(json['orderDate'])),
        'taxContext': !exists(json, 'taxContext') ? undefined : ThrirdPartyTaxContextFromJSON(json['taxContext']),
        'lineItems': !exists(json, 'lineItems') ? undefined : (json['lineItems'] === null ? null : (json['lineItems'] as Array<any>).map(TaxableLineItemFromJSON)),
        'shippingAmount': !exists(json, 'shippingAmount') ? undefined : json['shippingAmount'],
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'handlingFee': !exists(json, 'handlingFee') ? undefined : json['handlingFee'],
        'originalDocumentCode': !exists(json, 'originalDocumentCode') ? undefined : json['originalDocumentCode'],
        'orderId': !exists(json, 'orderId') ? undefined : json['orderId'],
        'orderNumber': !exists(json, 'orderNumber') ? undefined : json['orderNumber'],
        'originalOrderDate': !exists(json, 'originalOrderDate') ? undefined : (new Date(json['originalOrderDate'])),
        'taxRequestType': !exists(json, 'taxRequestType') ? undefined : json['taxRequestType'],
        'attributes': !exists(json, 'attributes') ? undefined : (json['attributes'] === null ? null : (json['attributes'] as Array<any>).map(TaxAttributeFromJSON)),
        'shippingDiscounts': !exists(json, 'shippingDiscounts') ? undefined : (json['shippingDiscounts'] === null ? null : (json['shippingDiscounts'] as Array<any>).map(AppliedOrderShippingDiscountFromJSON)),
        'shippingDiscount': !exists(json, 'shippingDiscount') ? undefined : AppliedOrderShippingDiscountFromJSON(json['shippingDiscount']),
        'orderDiscounts': !exists(json, 'orderDiscounts') ? undefined : (json['orderDiscounts'] === null ? null : (json['orderDiscounts'] as Array<any>).map(AppliedDiscountFromJSON)),
        'orderDiscount': !exists(json, 'orderDiscount') ? undefined : AppliedDiscountFromJSON(json['orderDiscount']),
        'handlingDiscounts': !exists(json, 'handlingDiscounts') ? undefined : (json['handlingDiscounts'] === null ? null : (json['handlingDiscounts'] as Array<any>).map(AppliedDiscountFromJSON)),
        'handlingDiscount': !exists(json, 'handlingDiscount') ? undefined : AppliedDiscountFromJSON(json['handlingDiscount']),
        'shippingMethodCode': !exists(json, 'shippingMethodCode') ? undefined : json['shippingMethodCode'],
        'shippingMethodName': !exists(json, 'shippingMethodName') ? undefined : json['shippingMethodName'],
    };
}

export function ThrirdPartyTaxableOrderToJSON(value?: ThrirdPartyTaxableOrder | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'orderDate': value.orderDate === undefined ? undefined : (value.orderDate.toISOString()),
        'taxContext': ThrirdPartyTaxContextToJSON(value.taxContext),
        'lineItems': value.lineItems === undefined ? undefined : (value.lineItems === null ? null : (value.lineItems as Array<any>).map(TaxableLineItemToJSON)),
        'shippingAmount': value.shippingAmount,
        'currencyCode': value.currencyCode,
        'handlingFee': value.handlingFee,
        'originalDocumentCode': value.originalDocumentCode,
        'orderId': value.orderId,
        'orderNumber': value.orderNumber,
        'originalOrderDate': value.originalOrderDate === undefined ? undefined : (value.originalOrderDate.toISOString()),
        'taxRequestType': value.taxRequestType,
        'attributes': value.attributes === undefined ? undefined : (value.attributes === null ? null : (value.attributes as Array<any>).map(TaxAttributeToJSON)),
        'shippingDiscounts': value.shippingDiscounts === undefined ? undefined : (value.shippingDiscounts === null ? null : (value.shippingDiscounts as Array<any>).map(AppliedOrderShippingDiscountToJSON)),
        'shippingDiscount': AppliedOrderShippingDiscountToJSON(value.shippingDiscount),
        'orderDiscounts': value.orderDiscounts === undefined ? undefined : (value.orderDiscounts === null ? null : (value.orderDiscounts as Array<any>).map(AppliedDiscountToJSON)),
        'orderDiscount': AppliedDiscountToJSON(value.orderDiscount),
        'handlingDiscounts': value.handlingDiscounts === undefined ? undefined : (value.handlingDiscounts === null ? null : (value.handlingDiscounts as Array<any>).map(AppliedDiscountToJSON)),
        'handlingDiscount': AppliedDiscountToJSON(value.handlingDiscount),
        'shippingMethodCode': value.shippingMethodCode,
        'shippingMethodName': value.shippingMethodName,
    };
}

