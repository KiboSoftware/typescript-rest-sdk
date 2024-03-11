/* tslint:disable */
/* eslint-disable */
/**
 * Inventory
 * Swagger JSON for inventory apis
 *
 * The version of the OpenAPI document: 5.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Item for Transitioning Cart allocations
 * @export
 * @interface TransitionCartItem
 */
export interface TransitionCartItem {
    /**
     * order item ID
     * @type {number}
     * @memberof TransitionCartItem
     */
    orderItemID: number;
    /**
     * Cart Item ID (GUID)
     * @type {string}
     * @memberof TransitionCartItem
     */
    cartItemID: string;
    /**
     * shipment ID
     * @type {number}
     * @memberof TransitionCartItem
     */
    shipmentID: number;
}

/**
 * Check if a given object implements the TransitionCartItem interface.
 */
export function instanceOfTransitionCartItem(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "orderItemID" in value;
    isInstance = isInstance && "cartItemID" in value;
    isInstance = isInstance && "shipmentID" in value;

    return isInstance;
}

export function TransitionCartItemFromJSON(json: any): TransitionCartItem {
    return TransitionCartItemFromJSONTyped(json, false);
}

export function TransitionCartItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransitionCartItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'orderItemID': json['orderItemID'],
        'cartItemID': json['cartItemID'],
        'shipmentID': json['shipmentID'],
    };
}

export function TransitionCartItemToJSON(value?: TransitionCartItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'orderItemID': value.orderItemID,
        'cartItemID': value.cartItemID,
        'shipmentID': value.shipmentID,
    };
}
