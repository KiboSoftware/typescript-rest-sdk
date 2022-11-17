/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Fulfillment Service
 * OpenAPI Spec for Kibo Fulfillment Service
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AuditInfo } from './AuditInfo';
import {
    AuditInfoFromJSON,
    AuditInfoFromJSONTyped,
    AuditInfoToJSON,
} from './AuditInfo';
import type { ProductOption0 } from './ProductOption0';
import {
    ProductOption0FromJSON,
    ProductOption0FromJSONTyped,
    ProductOption0ToJSON,
} from './ProductOption0';

/**
 * 
 * @export
 * @interface PickWaveContent0
 */
export interface PickWaveContent0 {
    /**
     * 
     * @type {number}
     * @memberof PickWaveContent0
     */
    actualQuantity?: number;
    /**
     * 
     * @type {AuditInfo}
     * @memberof PickWaveContent0
     */
    auditInfo?: AuditInfo;
    /**
     * 
     * @type {number}
     * @memberof PickWaveContent0
     */
    binId?: number;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent0
     */
    binName?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent0
     */
    contentId?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent0
     */
    externalOrderId?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent0
     */
    imageUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof PickWaveContent0
     */
    itemLineId?: number;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent0
     */
    locatorName?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent0
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent0
     */
    optionAttributeFQN?: string;
    /**
     * 
     * @type {Array<ProductOption0>}
     * @memberof PickWaveContent0
     */
    options?: Array<ProductOption0>;
    /**
     * 
     * @type {number}
     * @memberof PickWaveContent0
     */
    orderNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent0
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent0
     */
    productCode?: string;
    /**
     * 
     * @type {number}
     * @memberof PickWaveContent0
     */
    quantity?: number;
    /**
     * 
     * @type {number}
     * @memberof PickWaveContent0
     */
    shipmentNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent0
     */
    sku?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent0
     */
    status?: PickWaveContent0StatusEnum;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent0
     */
    upc?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent0
     */
    variationProductCode?: string;
}


/**
 * @export
 */
export const PickWaveContent0StatusEnum = {
    InProgress: 'IN_PROGRESS',
    Picked: 'PICKED',
    Removed: 'REMOVED'
} as const;
export type PickWaveContent0StatusEnum = typeof PickWaveContent0StatusEnum[keyof typeof PickWaveContent0StatusEnum];


/**
 * Check if a given object implements the PickWaveContent0 interface.
 */
export function instanceOfPickWaveContent0(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PickWaveContent0FromJSON(json: any): PickWaveContent0 {
    return PickWaveContent0FromJSONTyped(json, false);
}

export function PickWaveContent0FromJSONTyped(json: any, ignoreDiscriminator: boolean): PickWaveContent0 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actualQuantity': !exists(json, 'actualQuantity') ? undefined : json['actualQuantity'],
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AuditInfoFromJSON(json['auditInfo']),
        'binId': !exists(json, 'binId') ? undefined : json['binId'],
        'binName': !exists(json, 'binName') ? undefined : json['binName'],
        'contentId': !exists(json, 'contentId') ? undefined : json['contentId'],
        'externalOrderId': !exists(json, 'externalOrderId') ? undefined : json['externalOrderId'],
        'imageUrl': !exists(json, 'imageUrl') ? undefined : json['imageUrl'],
        'itemLineId': !exists(json, 'itemLineId') ? undefined : json['itemLineId'],
        'locatorName': !exists(json, 'locatorName') ? undefined : json['locatorName'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'optionAttributeFQN': !exists(json, 'optionAttributeFQN') ? undefined : json['optionAttributeFQN'],
        'options': !exists(json, 'options') ? undefined : ((json['options'] as Array<any>).map(ProductOption0FromJSON)),
        'orderNumber': !exists(json, 'orderNumber') ? undefined : json['orderNumber'],
        'partNumber': !exists(json, 'partNumber') ? undefined : json['partNumber'],
        'productCode': !exists(json, 'productCode') ? undefined : json['productCode'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'shipmentNumber': !exists(json, 'shipmentNumber') ? undefined : json['shipmentNumber'],
        'sku': !exists(json, 'sku') ? undefined : json['sku'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'upc': !exists(json, 'upc') ? undefined : json['upc'],
        'variationProductCode': !exists(json, 'variationProductCode') ? undefined : json['variationProductCode'],
    };
}

export function PickWaveContent0ToJSON(value?: PickWaveContent0 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actualQuantity': value.actualQuantity,
        'auditInfo': AuditInfoToJSON(value.auditInfo),
        'binId': value.binId,
        'binName': value.binName,
        'contentId': value.contentId,
        'externalOrderId': value.externalOrderId,
        'imageUrl': value.imageUrl,
        'itemLineId': value.itemLineId,
        'locatorName': value.locatorName,
        'name': value.name,
        'optionAttributeFQN': value.optionAttributeFQN,
        'options': value.options === undefined ? undefined : ((value.options as Array<any>).map(ProductOption0ToJSON)),
        'orderNumber': value.orderNumber,
        'partNumber': value.partNumber,
        'productCode': value.productCode,
        'quantity': value.quantity,
        'shipmentNumber': value.shipmentNumber,
        'sku': value.sku,
        'status': value.status,
        'upc': value.upc,
        'variationProductCode': value.variationProductCode,
    };
}

