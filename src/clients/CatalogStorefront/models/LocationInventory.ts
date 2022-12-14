/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Runtime Services
 * OpenAPI Spec for Kibo Catalog Runtime Services
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
 * The inventory for a product at a specific Location
 * @export
 * @interface LocationInventory
 */
export interface LocationInventory {
    /**
     * 
     * @type {string}
     * @memberof LocationInventory
     */
    productCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationInventory
     */
    locationCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof LocationInventory
     */
    stockAvailable?: number | null;
    /**
     * 
     * @type {number}
     * @memberof LocationInventory
     */
    softStockAvailable?: number | null;
    /**
     * 
     * @type {string}
     * @memberof LocationInventory
     */
    sku?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationInventory
     */
    mfgPartNumber?: string | null;
    /**
     * 
     * @type {Array<FutureInventory>}
     * @memberof LocationInventory
     */
    futureInventories?: Array<FutureInventory> | null;
}

/**
 * Check if a given object implements the LocationInventory interface.
 */
export function instanceOfLocationInventory(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LocationInventoryFromJSON(json: any): LocationInventory {
    return LocationInventoryFromJSONTyped(json, false);
}

export function LocationInventoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocationInventory {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'productCode': !exists(json, 'productCode') ? undefined : json['productCode'],
        'locationCode': !exists(json, 'locationCode') ? undefined : json['locationCode'],
        'stockAvailable': !exists(json, 'stockAvailable') ? undefined : json['stockAvailable'],
        'softStockAvailable': !exists(json, 'softStockAvailable') ? undefined : json['softStockAvailable'],
        'sku': !exists(json, 'sku') ? undefined : json['sku'],
        'mfgPartNumber': !exists(json, 'mfgPartNumber') ? undefined : json['mfgPartNumber'],
        'futureInventories': !exists(json, 'futureInventories') ? undefined : (json['futureInventories'] === null ? null : (json['futureInventories'] as Array<any>).map(FutureInventoryFromJSON)),
    };
}

export function LocationInventoryToJSON(value?: LocationInventory | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'productCode': value.productCode,
        'locationCode': value.locationCode,
        'stockAvailable': value.stockAvailable,
        'softStockAvailable': value.softStockAvailable,
        'sku': value.sku,
        'mfgPartNumber': value.mfgPartNumber,
        'futureInventories': value.futureInventories === undefined ? undefined : (value.futureInventories === null ? null : (value.futureInventories as Array<any>).map(FutureInventoryToJSON)),
    };
}

