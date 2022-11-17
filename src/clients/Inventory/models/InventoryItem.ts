/* tslint:disable */
/* eslint-disable */
/**
 * Inventory
 * Swagger JSON for inventory apis
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
 * Item
 * @export
 * @interface InventoryItem
 */
export interface InventoryItem {
    /**
     * Part/Product Number
     * @type {string}
     * @memberof InventoryItem
     */
    partNumber?: string;
    /**
     * Universal Product Code
     * @type {string}
     * @memberof InventoryItem
     */
    upc?: string;
    /**
     * Stock Keeping Unit
     * @type {string}
     * @memberof InventoryItem
     */
    sku?: string;
}

/**
 * Check if a given object implements the InventoryItem interface.
 */
export function instanceOfInventoryItem(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InventoryItemFromJSON(json: any): InventoryItem {
    return InventoryItemFromJSONTyped(json, false);
}

export function InventoryItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): InventoryItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'partNumber': !exists(json, 'partNumber') ? undefined : json['partNumber'],
        'upc': !exists(json, 'upc') ? undefined : json['upc'],
        'sku': !exists(json, 'sku') ? undefined : json['sku'],
    };
}

export function InventoryItemToJSON(value?: InventoryItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'partNumber': value.partNumber,
        'upc': value.upc,
        'sku': value.sku,
    };
}

