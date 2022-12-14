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
import type { InventoryTags } from './InventoryTags';
import {
    InventoryTagsFromJSON,
    InventoryTagsFromJSONTyped,
    InventoryTagsToJSON,
} from './InventoryTags';
import type { OrderNote } from './OrderNote';
import {
    OrderNoteFromJSON,
    OrderNoteFromJSONTyped,
    OrderNoteToJSON,
} from './OrderNote';
import type { Product } from './Product';
import {
    ProductFromJSON,
    ProductFromJSONTyped,
    ProductToJSON,
} from './Product';
import type { ReturnBundle } from './ReturnBundle';
import {
    ReturnBundleFromJSON,
    ReturnBundleFromJSONTyped,
    ReturnBundleToJSON,
} from './ReturnBundle';
import type { ReturnReason } from './ReturnReason';
import {
    ReturnReasonFromJSON,
    ReturnReasonFromJSONTyped,
    ReturnReasonToJSON,
} from './ReturnReason';

/**
 * 
 * @export
 * @interface ReturnItem
 */
export interface ReturnItem {
    /**
     * The identifer of the return
     * @type {string}
     * @memberof ReturnItem
     */
    id?: string | null;
    /**
     * The OrderItem that this ReturnItem is associated with. Either the Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.Product or the OrderItemId must be present.
     * @type {string}
     * @memberof ReturnItem
     */
    orderItemId?: string | null;
    /**
     * The OrderLineId that this ReturnItem is associated with. If Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.OrderItemId is present, the OrderLineId should be present also.
     * @type {number}
     * @memberof ReturnItem
     */
    orderLineId?: number | null;
    /**
     * If this item refers to a product extra, provide the item's corresponding OptionAttributeFQN.
     * @type {string}
     * @memberof ReturnItem
     */
    orderItemOptionAttributeFQN?: string | null;
    /**
     * 
     * @type {Product}
     * @memberof ReturnItem
     */
    product?: Product;
    /**
     * For a given return reason (Damaged, Defective, MissingParts, DifferentExpectations, Late, NoLongerWanted, Other),
     * how many of the above OrderItem are to be replaced.  This value is provided by the Shopper when they request a Return.
     * @type {Array<ReturnReason>}
     * @memberof ReturnItem
     */
    reasons?: Array<ReturnReason> | null;
    /**
     * If this return item refers to a product/bundle that has product extras, this specifies whether those child items should be included or excluded.
     * For backward compatibility, a null value will be treated as false, i.e. include the extras.
     * @type {boolean}
     * @memberof ReturnItem
     */
    excludeProductExtras?: boolean | null;
    /**
     * Specifies whether the requested resolution for this item is Refund or Replace.
     * @type {string}
     * @memberof ReturnItem
     */
    returnType?: string | null;
    /**
     * Specifies whether this item should be returned to the merchant, e.g. if the item is irreparably damaged and it's not worth shipping back.
     * Even if this is set to true, Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.QuantityShipped should still be set to the quantity of items involved in the return.
     * @type {boolean}
     * @memberof ReturnItem
     */
    returnNotRequired?: boolean;
    /**
     * The amount of this item actually received from the shopper. It may differ from the sum of the ReturnReasons.
     * This is populated by the system when the Receive action is performed.
     * @type {number}
     * @memberof ReturnItem
     */
    quantityReceived?: number;
    /**
     * Describes the receive status of this item.
     * If Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.ReturnNotRequired is {true}, then this should be Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.ItemReceiveStatusConst.NOT_REQUESTED.
     * Otherwise the value should be Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.ItemReceiveStatusConst.RECEIVED or Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.ItemReceiveStatusConst.WAITING depending on Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.QuantityReceived.
     * @type {string}
     * @memberof ReturnItem
     */
    receiveStatus?: string | null;
    /**
     * The quantity of this item fulfilled on the parent order.
     * @type {number}
     * @memberof ReturnItem
     */
    quantityShipped?: number;
    /**
     * Describes the replace status of this item.
     * If Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.ReturnType is Mozu.CommerceRuntime.Contracts.Returns.Return.ReturnTypeConst.REFUND, then this should be Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.ItemReplaceStatusConst.NOT_REQUESTED.
     * Otherwise the value should be Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.ItemReplaceStatusConst.REPLACED or Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.ItemReplaceStatusConst.NOT_REPLACED depending on Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.QuantityReplaced.
     * @type {string}
     * @memberof ReturnItem
     */
    replaceStatus?: string | null;
    /**
     * Of the quantity returned, how many of this item can be added back into the inventory? This item is set by the merchant via an UpdateReturn call.
     * It is used during the Restock action to set some quantity of this item back into the inventory management system.
     * @type {number}
     * @memberof ReturnItem
     */
    quantityRestockable?: number;
    /**
     * Field to specify How many items added to inventory
     * @type {number}
     * @memberof ReturnItem
     */
    quantityRestocked?: number;
    /**
     * If a refund is issued for the return, how much of the refund amount is for this particular item.
     * @type {number}
     * @memberof ReturnItem
     */
    refundAmount?: number | null;
    /**
     * The processing fee on the item that gets persisted into the database
     * @type {number}
     * @memberof ReturnItem
     */
    returnProcessingFeeApplied?: number | null;
    /**
     * Determines if shipping and handling is returned on the item
     * @type {boolean}
     * @memberof ReturnItem
     */
    shippingAndHandlingRefunded?: boolean | null;
    /**
     * The quantity of the item being refunded is specified in this field
     * @type {number}
     * @memberof ReturnItem
     */
    quantityRefunded?: number;
    /**
     * Describes the refund status of this item.
     * If Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.ReturnType is Mozu.CommerceRuntime.Contracts.Returns.Return.ReturnTypeConst.REPLACE, then this should be Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.ItemRefundStatusConst.NOT_REQUESTED.
     * Otherwise the value should be Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.ItemRefundStatusConst.REFUNDED or Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.ItemRefundStatusConst.NOT_REFUNDED depending on Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.RefundAmount.
     * @type {string}
     * @memberof ReturnItem
     */
    refundStatus?: string | null;
    /**
     * Specifies the quantity of this item that has been marked as replaced, i.e. it has been used to generate a replacement order for the return.
     * Note that the quantity replaced may not line up with the quantity of the item actually sent back to the shopper,
     * such as in the case of an exchange, e.g. swapping a medium shirt for a large shirt.
     * @type {number}
     * @memberof ReturnItem
     */
    quantityReplaced?: number | null;
    /**
     * Any merchant-supplied notes for this ReturnItem.
     * @type {Array<OrderNote>}
     * @memberof ReturnItem
     */
    notes?: Array<OrderNote> | null;
    /**
     * The loss incurred of the returned products, used for accounting purposes.
     * @type {number}
     * @memberof ReturnItem
     */
    productLossAmount?: number | null;
    /**
     * The tax on the returned products, used for accounting purposes.
     * @type {number}
     * @memberof ReturnItem
     */
    productLossTaxAmount?: number | null;
    /**
     * The loss incurred of the returned product shipping, used for accounting purposes.
     * @type {number}
     * @memberof ReturnItem
     */
    shippingLossAmount?: number | null;
    /**
     * The tax on the returned product shipping, used for accounting purposes.
     * @type {number}
     * @memberof ReturnItem
     */
    shippingLossTaxAmount?: number | null;
    /**
     * Deprecated. Not used.
     * @type {Array<ReturnBundle>}
     * @memberof ReturnItem
     * @deprecated
     */
    bundledProducts?: Array<ReturnBundle> | null;
    /**
     * Taxable Subtotal including Weighted Order amounts
     * @type {number}
     * @memberof ReturnItem
     */
    totalWithoutWeightedShippingAndHandling?: number | null;
    /**
     * Line item total with line item, Tax, Weighted Tax with Weighted shipping and handling costs
     * @type {number}
     * @memberof ReturnItem
     */
    totalWithWeightedShippingAndHandling?: number | null;
    /**
     * The identifer of the item
     * @type {number}
     * @memberof ReturnItem
     */
    shipmentItemId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ReturnItem
     */
    shipmentNumber?: number | null;
    /**
     * Custom data for a given vendor set within the commerce process.
     * @type {object}
     * @memberof ReturnItem
     */
    data?: object | null;
    /**
     * 
     * @type {Array<InventoryTags>}
     * @memberof ReturnItem
     */
    inventoryTags?: Array<InventoryTags> | null;
}

/**
 * Check if a given object implements the ReturnItem interface.
 */
export function instanceOfReturnItem(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReturnItemFromJSON(json: any): ReturnItem {
    return ReturnItemFromJSONTyped(json, false);
}

export function ReturnItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReturnItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'orderItemId': !exists(json, 'orderItemId') ? undefined : json['orderItemId'],
        'orderLineId': !exists(json, 'orderLineId') ? undefined : json['orderLineId'],
        'orderItemOptionAttributeFQN': !exists(json, 'orderItemOptionAttributeFQN') ? undefined : json['orderItemOptionAttributeFQN'],
        'product': !exists(json, 'product') ? undefined : ProductFromJSON(json['product']),
        'reasons': !exists(json, 'reasons') ? undefined : (json['reasons'] === null ? null : (json['reasons'] as Array<any>).map(ReturnReasonFromJSON)),
        'excludeProductExtras': !exists(json, 'excludeProductExtras') ? undefined : json['excludeProductExtras'],
        'returnType': !exists(json, 'returnType') ? undefined : json['returnType'],
        'returnNotRequired': !exists(json, 'returnNotRequired') ? undefined : json['returnNotRequired'],
        'quantityReceived': !exists(json, 'quantityReceived') ? undefined : json['quantityReceived'],
        'receiveStatus': !exists(json, 'receiveStatus') ? undefined : json['receiveStatus'],
        'quantityShipped': !exists(json, 'quantityShipped') ? undefined : json['quantityShipped'],
        'replaceStatus': !exists(json, 'replaceStatus') ? undefined : json['replaceStatus'],
        'quantityRestockable': !exists(json, 'quantityRestockable') ? undefined : json['quantityRestockable'],
        'quantityRestocked': !exists(json, 'quantityRestocked') ? undefined : json['quantityRestocked'],
        'refundAmount': !exists(json, 'refundAmount') ? undefined : json['refundAmount'],
        'returnProcessingFeeApplied': !exists(json, 'returnProcessingFeeApplied') ? undefined : json['returnProcessingFeeApplied'],
        'shippingAndHandlingRefunded': !exists(json, 'shippingAndHandlingRefunded') ? undefined : json['shippingAndHandlingRefunded'],
        'quantityRefunded': !exists(json, 'quantityRefunded') ? undefined : json['quantityRefunded'],
        'refundStatus': !exists(json, 'refundStatus') ? undefined : json['refundStatus'],
        'quantityReplaced': !exists(json, 'quantityReplaced') ? undefined : json['quantityReplaced'],
        'notes': !exists(json, 'notes') ? undefined : (json['notes'] === null ? null : (json['notes'] as Array<any>).map(OrderNoteFromJSON)),
        'productLossAmount': !exists(json, 'productLossAmount') ? undefined : json['productLossAmount'],
        'productLossTaxAmount': !exists(json, 'productLossTaxAmount') ? undefined : json['productLossTaxAmount'],
        'shippingLossAmount': !exists(json, 'shippingLossAmount') ? undefined : json['shippingLossAmount'],
        'shippingLossTaxAmount': !exists(json, 'shippingLossTaxAmount') ? undefined : json['shippingLossTaxAmount'],
        'bundledProducts': !exists(json, 'bundledProducts') ? undefined : (json['bundledProducts'] === null ? null : (json['bundledProducts'] as Array<any>).map(ReturnBundleFromJSON)),
        'totalWithoutWeightedShippingAndHandling': !exists(json, 'totalWithoutWeightedShippingAndHandling') ? undefined : json['totalWithoutWeightedShippingAndHandling'],
        'totalWithWeightedShippingAndHandling': !exists(json, 'totalWithWeightedShippingAndHandling') ? undefined : json['totalWithWeightedShippingAndHandling'],
        'shipmentItemId': !exists(json, 'shipmentItemId') ? undefined : json['shipmentItemId'],
        'shipmentNumber': !exists(json, 'shipmentNumber') ? undefined : json['shipmentNumber'],
        'data': !exists(json, 'data') ? undefined : json['data'],
        'inventoryTags': !exists(json, 'inventoryTags') ? undefined : (json['inventoryTags'] === null ? null : (json['inventoryTags'] as Array<any>).map(InventoryTagsFromJSON)),
    };
}

export function ReturnItemToJSON(value?: ReturnItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'orderItemId': value.orderItemId,
        'orderLineId': value.orderLineId,
        'orderItemOptionAttributeFQN': value.orderItemOptionAttributeFQN,
        'product': ProductToJSON(value.product),
        'reasons': value.reasons === undefined ? undefined : (value.reasons === null ? null : (value.reasons as Array<any>).map(ReturnReasonToJSON)),
        'excludeProductExtras': value.excludeProductExtras,
        'returnType': value.returnType,
        'returnNotRequired': value.returnNotRequired,
        'quantityReceived': value.quantityReceived,
        'receiveStatus': value.receiveStatus,
        'quantityShipped': value.quantityShipped,
        'replaceStatus': value.replaceStatus,
        'quantityRestockable': value.quantityRestockable,
        'quantityRestocked': value.quantityRestocked,
        'refundAmount': value.refundAmount,
        'returnProcessingFeeApplied': value.returnProcessingFeeApplied,
        'shippingAndHandlingRefunded': value.shippingAndHandlingRefunded,
        'quantityRefunded': value.quantityRefunded,
        'refundStatus': value.refundStatus,
        'quantityReplaced': value.quantityReplaced,
        'notes': value.notes === undefined ? undefined : (value.notes === null ? null : (value.notes as Array<any>).map(OrderNoteToJSON)),
        'productLossAmount': value.productLossAmount,
        'productLossTaxAmount': value.productLossTaxAmount,
        'shippingLossAmount': value.shippingLossAmount,
        'shippingLossTaxAmount': value.shippingLossTaxAmount,
        'bundledProducts': value.bundledProducts === undefined ? undefined : (value.bundledProducts === null ? null : (value.bundledProducts as Array<any>).map(ReturnBundleToJSON)),
        'totalWithoutWeightedShippingAndHandling': value.totalWithoutWeightedShippingAndHandling,
        'totalWithWeightedShippingAndHandling': value.totalWithWeightedShippingAndHandling,
        'shipmentItemId': value.shipmentItemId,
        'shipmentNumber': value.shipmentNumber,
        'data': value.data,
        'inventoryTags': value.inventoryTags === undefined ? undefined : (value.inventoryTags === null ? null : (value.inventoryTags as Array<any>).map(InventoryTagsToJSON)),
    };
}

