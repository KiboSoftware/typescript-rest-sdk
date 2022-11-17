/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Reservation Web API
 * OpenAPI Spec for Kibo Reservation Web API
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BundledProdu } from './BundledProdu';
import {
    BundledProduFromJSON,
    BundledProduFromJSONTyped,
    BundledProduToJSON,
} from './BundledProdu';

/**
 * 
 * @export
 * @interface Produ
 */
export interface Produ {
    /**
     * 
     * @type {string}
     * @memberof Produ
     */
    productCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Produ
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Produ
     */
    productType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Produ
     */
    mfgPartNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Produ
     */
    variationProductCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Produ
     */
    sku?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Produ
     */
    goodsType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Produ
     */
    productUsage?: string | null;
    /**
     * 
     * @type {Array<BundledProdu>}
     * @memberof Produ
     */
    bundledProducts?: Array<BundledProdu> | null;
    /**
     * 
     * @type {boolean}
     * @memberof Produ
     */
    isSplitExtrasInShipment?: boolean;
}

/**
 * Check if a given object implements the Produ interface.
 */
export function instanceOfProdu(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProduFromJSON(json: any): Produ {
    return ProduFromJSONTyped(json, false);
}

export function ProduFromJSONTyped(json: any, ignoreDiscriminator: boolean): Produ {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'productCode': !exists(json, 'productCode') ? undefined : json['productCode'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'productType': !exists(json, 'productType') ? undefined : json['productType'],
        'mfgPartNumber': !exists(json, 'mfgPartNumber') ? undefined : json['mfgPartNumber'],
        'variationProductCode': !exists(json, 'variationProductCode') ? undefined : json['variationProductCode'],
        'sku': !exists(json, 'sku') ? undefined : json['sku'],
        'goodsType': !exists(json, 'goodsType') ? undefined : json['goodsType'],
        'productUsage': !exists(json, 'productUsage') ? undefined : json['productUsage'],
        'bundledProducts': !exists(json, 'bundledProducts') ? undefined : (json['bundledProducts'] === null ? null : (json['bundledProducts'] as Array<any>).map(BundledProduFromJSON)),
        'isSplitExtrasInShipment': !exists(json, 'isSplitExtrasInShipment') ? undefined : json['isSplitExtrasInShipment'],
    };
}

export function ProduToJSON(value?: Produ | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'productCode': value.productCode,
        'name': value.name,
        'productType': value.productType,
        'mfgPartNumber': value.mfgPartNumber,
        'variationProductCode': value.variationProductCode,
        'sku': value.sku,
        'goodsType': value.goodsType,
        'productUsage': value.productUsage,
        'bundledProducts': value.bundledProducts === undefined ? undefined : (value.bundledProducts === null ? null : (value.bundledProducts as Array<any>).map(BundledProduToJSON)),
        'isSplitExtrasInShipment': value.isSplitExtrasInShipment,
    };
}
