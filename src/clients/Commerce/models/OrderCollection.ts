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
import type { Order } from './Order';
import {
    OrderFromJSON,
    OrderFromJSONTyped,
    OrderToJSON,
} from './Order';

/**
 * Paged collection of orders. This is paged in case it's returning a long list the orders. 
 * for a store.
 * @export
 * @interface OrderCollection
 */
export interface OrderCollection {
    /**
     * 
     * @type {number}
     * @memberof OrderCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<Order>}
     * @memberof OrderCollection
     */
    items?: Array<Order> | null;
}

/**
 * Check if a given object implements the OrderCollection interface.
 */
export function instanceOfOrderCollection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrderCollectionFromJSON(json: any): OrderCollection {
    return OrderCollectionFromJSONTyped(json, false);
}

export function OrderCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'startIndex': !exists(json, 'startIndex') ? undefined : json['startIndex'],
        'pageSize': !exists(json, 'pageSize') ? undefined : json['pageSize'],
        'pageCount': !exists(json, 'pageCount') ? undefined : json['pageCount'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(OrderFromJSON)),
    };
}

export function OrderCollectionToJSON(value?: OrderCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'startIndex': value.startIndex,
        'pageSize': value.pageSize,
        'pageCount': value.pageCount,
        'totalCount': value.totalCount,
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(OrderToJSON)),
    };
}

