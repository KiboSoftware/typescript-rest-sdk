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
import type { OrderReturnableItem } from './OrderReturnableItem';
import {
    OrderReturnableItemFromJSON,
    OrderReturnableItemFromJSONTyped,
    OrderReturnableItemToJSON,
} from './OrderReturnableItem';

/**
 * Collection of fulfillment information for items on an order.
 * @export
 * @interface OrderReturnableItemCollection
 */
export interface OrderReturnableItemCollection {
    /**
     * 
     * @type {number}
     * @memberof OrderReturnableItemCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<OrderReturnableItem>}
     * @memberof OrderReturnableItemCollection
     */
    items?: Array<OrderReturnableItem> | null;
}

/**
 * Check if a given object implements the OrderReturnableItemCollection interface.
 */
export function instanceOfOrderReturnableItemCollection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrderReturnableItemCollectionFromJSON(json: any): OrderReturnableItemCollection {
    return OrderReturnableItemCollectionFromJSONTyped(json, false);
}

export function OrderReturnableItemCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderReturnableItemCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(OrderReturnableItemFromJSON)),
    };
}

export function OrderReturnableItemCollectionToJSON(value?: OrderReturnableItemCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'totalCount': value.totalCount,
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(OrderReturnableItemToJSON)),
    };
}

