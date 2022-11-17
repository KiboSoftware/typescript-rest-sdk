/* tslint:disable */
/* eslint-disable */
/**
 * Kibo SubscriptionRuntime Service
 * OpenAPI Spec for Kibo SubscriptionRuntime Service
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Item that goes into the pickup to determine which items will be picked up.
 * @export
 * @interface CommerceRuntimePickupItem
 */
export interface CommerceRuntimePickupItem {
    /**
     * Code of the Product to be fulfilled.
     * @type {string}
     * @memberof CommerceRuntimePickupItem
     */
    productCode?: string | null;
    /**
     * Quantity of the order item
     * @type {number}
     * @memberof CommerceRuntimePickupItem
     */
    quantity?: number;
    /**
     * The type of fulfillment item
     * @type {string}
     * @memberof CommerceRuntimePickupItem
     */
    fulfillmentItemType?: string | null;
    /**
     * The line id associated with the fulfillment.
     * @type {number}
     * @memberof CommerceRuntimePickupItem
     */
    lineId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimePickupItem
     */
    optionAttributeFQN?: string | null;
}

/**
 * Check if a given object implements the CommerceRuntimePickupItem interface.
 */
export function instanceOfCommerceRuntimePickupItem(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommerceRuntimePickupItemFromJSON(json: any): CommerceRuntimePickupItem {
    return CommerceRuntimePickupItemFromJSONTyped(json, false);
}

export function CommerceRuntimePickupItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommerceRuntimePickupItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'productCode': !exists(json, 'productCode') ? undefined : json['productCode'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'fulfillmentItemType': !exists(json, 'fulfillmentItemType') ? undefined : json['fulfillmentItemType'],
        'lineId': !exists(json, 'lineId') ? undefined : json['lineId'],
        'optionAttributeFQN': !exists(json, 'optionAttributeFQN') ? undefined : json['optionAttributeFQN'],
    };
}

export function CommerceRuntimePickupItemToJSON(value?: CommerceRuntimePickupItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'productCode': value.productCode,
        'quantity': value.quantity,
        'fulfillmentItemType': value.fulfillmentItemType,
        'lineId': value.lineId,
        'optionAttributeFQN': value.optionAttributeFQN,
    };
}

