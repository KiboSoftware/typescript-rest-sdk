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
import type { FutureInventory } from './FutureInventory';
import {
    FutureInventoryFromJSON,
    FutureInventoryFromJSONTyped,
    FutureInventoryToJSON,
} from './FutureInventory';

/**
 * 
 * @export
 * @interface ProductStock
 */
export interface ProductStock {
    /**
     * 
     * @type {boolean}
     * @memberof ProductStock
     */
    manageStock?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ProductStock
     */
    isOnBackOrder?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof ProductStock
     */
    availableDate?: Date | null;
    /**
     * 
     * @type {number}
     * @memberof ProductStock
     */
    stockAvailable?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ProductStock
     */
    aggregateInventory?: number | null;
    /**
     * 
     * @type {Array<FutureInventory>}
     * @memberof ProductStock
     */
    futureInventories?: Array<FutureInventory> | null;
}

/**
 * Check if a given object implements the ProductStock interface.
 */
export function instanceOfProductStock(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductStockFromJSON(json: any): ProductStock {
    return ProductStockFromJSONTyped(json, false);
}

export function ProductStockFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductStock {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'manageStock': !exists(json, 'manageStock') ? undefined : json['manageStock'],
        'isOnBackOrder': !exists(json, 'isOnBackOrder') ? undefined : json['isOnBackOrder'],
        'availableDate': !exists(json, 'availableDate') ? undefined : (json['availableDate'] === null ? null : new Date(json['availableDate'])),
        'stockAvailable': !exists(json, 'stockAvailable') ? undefined : json['stockAvailable'],
        'aggregateInventory': !exists(json, 'aggregateInventory') ? undefined : json['aggregateInventory'],
        'futureInventories': !exists(json, 'futureInventories') ? undefined : (json['futureInventories'] === null ? null : (json['futureInventories'] as Array<any>).map(FutureInventoryFromJSON)),
    };
}

export function ProductStockToJSON(value?: ProductStock | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'manageStock': value.manageStock,
        'isOnBackOrder': value.isOnBackOrder,
        'availableDate': value.availableDate === undefined ? undefined : (value.availableDate === null ? null : value.availableDate.toISOString()),
        'stockAvailable': value.stockAvailable,
        'aggregateInventory': value.aggregateInventory,
        'futureInventories': value.futureInventories === undefined ? undefined : (value.futureInventories === null ? null : (value.futureInventories as Array<any>).map(FutureInventoryToJSON)),
    };
}

