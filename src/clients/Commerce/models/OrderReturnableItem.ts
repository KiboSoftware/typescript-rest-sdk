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
import type { FulfillmentField } from './FulfillmentField';
import {
    FulfillmentFieldFromJSON,
    FulfillmentFieldFromJSONTyped,
    FulfillmentFieldToJSON,
} from './FulfillmentField';

/**
 * 
 * @export
 * @interface OrderReturnableItem
 */
export interface OrderReturnableItem {
    /**
     * The product code of the associated item.
     * @type {string}
     * @memberof OrderReturnableItem
     */
    productCode?: string | null;
    /**
     * The name of the associated product.
     * @type {string}
     * @memberof OrderReturnableItem
     */
    productName?: string | null;
    /**
     * Shipment Number associated with product
     * @type {number}
     * @memberof OrderReturnableItem
     */
    shipmentNumber?: number | null;
    /**
     * Shipment Item Id Number associated with product
     * @type {number}
     * @memberof OrderReturnableItem
     */
    shipmentItemId?: number | null;
    /**
     * The number of units ordered.
     * @type {number}
     * @memberof OrderReturnableItem
     */
    quantityOrdered?: number;
    /**
     * The number of units fulfilled.
     * @type {number}
     * @memberof OrderReturnableItem
     */
    quantityFulfilled?: number;
    /**
     * The number if times this item configuration was found in live returns (not cancelled or rejected).
     * @type {number}
     * @memberof OrderReturnableItem
     */
    quantityReturned?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderReturnableItem
     */
    quantityRejected?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderReturnableItem
     */
    readonly quantityReturnable?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderReturnableItem
     */
    fulfillmentStatus?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderReturnableItem
     */
    orderItemId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof OrderReturnableItem
     */
    orderLineId?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderReturnableItem
     */
    orderItemOptionAttributeFQN?: string | null;
    /**
     * 
     * @type {number}
     * @memberof OrderReturnableItem
     */
    unitQuantity?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderReturnableItem
     */
    parentProductCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderReturnableItem
     */
    parentProductName?: string | null;
    /**
     * List of unique product identifiers for an item on shipment
     * @type {Array<FulfillmentField>}
     * @memberof OrderReturnableItem
     */
    fulfillmentFields?: Array<FulfillmentField> | null;
    /**
     * 
     * @type {string}
     * @memberof OrderReturnableItem
     */
    sku?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderReturnableItem
     */
    mfgPartNumber?: string | null;
}

/**
 * Check if a given object implements the OrderReturnableItem interface.
 */
export function instanceOfOrderReturnableItem(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrderReturnableItemFromJSON(json: any): OrderReturnableItem {
    return OrderReturnableItemFromJSONTyped(json, false);
}

export function OrderReturnableItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderReturnableItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'productCode': !exists(json, 'productCode') ? undefined : json['productCode'],
        'productName': !exists(json, 'productName') ? undefined : json['productName'],
        'shipmentNumber': !exists(json, 'shipmentNumber') ? undefined : json['shipmentNumber'],
        'shipmentItemId': !exists(json, 'shipmentItemId') ? undefined : json['shipmentItemId'],
        'quantityOrdered': !exists(json, 'quantityOrdered') ? undefined : json['quantityOrdered'],
        'quantityFulfilled': !exists(json, 'quantityFulfilled') ? undefined : json['quantityFulfilled'],
        'quantityReturned': !exists(json, 'quantityReturned') ? undefined : json['quantityReturned'],
        'quantityRejected': !exists(json, 'quantityRejected') ? undefined : json['quantityRejected'],
        'quantityReturnable': !exists(json, 'quantityReturnable') ? undefined : json['quantityReturnable'],
        'fulfillmentStatus': !exists(json, 'fulfillmentStatus') ? undefined : json['fulfillmentStatus'],
        'orderItemId': !exists(json, 'orderItemId') ? undefined : json['orderItemId'],
        'orderLineId': !exists(json, 'orderLineId') ? undefined : json['orderLineId'],
        'orderItemOptionAttributeFQN': !exists(json, 'orderItemOptionAttributeFQN') ? undefined : json['orderItemOptionAttributeFQN'],
        'unitQuantity': !exists(json, 'unitQuantity') ? undefined : json['unitQuantity'],
        'parentProductCode': !exists(json, 'parentProductCode') ? undefined : json['parentProductCode'],
        'parentProductName': !exists(json, 'parentProductName') ? undefined : json['parentProductName'],
        'fulfillmentFields': !exists(json, 'fulfillmentFields') ? undefined : (json['fulfillmentFields'] === null ? null : (json['fulfillmentFields'] as Array<any>).map(FulfillmentFieldFromJSON)),
        'sku': !exists(json, 'sku') ? undefined : json['sku'],
        'mfgPartNumber': !exists(json, 'mfgPartNumber') ? undefined : json['mfgPartNumber'],
    };
}

export function OrderReturnableItemToJSON(value?: OrderReturnableItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'productCode': value.productCode,
        'productName': value.productName,
        'shipmentNumber': value.shipmentNumber,
        'shipmentItemId': value.shipmentItemId,
        'quantityOrdered': value.quantityOrdered,
        'quantityFulfilled': value.quantityFulfilled,
        'quantityReturned': value.quantityReturned,
        'quantityRejected': value.quantityRejected,
        'fulfillmentStatus': value.fulfillmentStatus,
        'orderItemId': value.orderItemId,
        'orderLineId': value.orderLineId,
        'orderItemOptionAttributeFQN': value.orderItemOptionAttributeFQN,
        'unitQuantity': value.unitQuantity,
        'parentProductCode': value.parentProductCode,
        'parentProductName': value.parentProductName,
        'fulfillmentFields': value.fulfillmentFields === undefined ? undefined : (value.fulfillmentFields === null ? null : (value.fulfillmentFields as Array<any>).map(FulfillmentFieldToJSON)),
        'sku': value.sku,
        'mfgPartNumber': value.mfgPartNumber,
    };
}

