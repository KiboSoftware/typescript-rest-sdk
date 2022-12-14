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
import type { Allocati } from './Allocati';
import {
    AllocatiFromJSON,
    AllocatiFromJSONTyped,
    AllocatiToJSON,
} from './Allocati';
import type { Produ } from './Produ';
import {
    ProduFromJSON,
    ProduFromJSONTyped,
    ProduToJSON,
} from './Produ';

/**
 * 
 * @export
 * @interface ReservationItem
 */
export interface ReservationItem {
    /**
     * 
     * @type {number}
     * @memberof ReservationItem
     */
    lineId?: number;
    /**
     * 
     * @type {string}
     * @memberof ReservationItem
     */
    id?: string | null;
    /**
     * 
     * @type {Produ}
     * @memberof ReservationItem
     */
    product?: Produ;
    /**
     * 
     * @type {number}
     * @memberof ReservationItem
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof ReservationItem
     */
    fulfillmentLocationCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationItem
     */
    fulfillmentMethod?: string | null;
    /**
     * 
     * @type {Array<Allocati>}
     * @memberof ReservationItem
     */
    allocations?: Array<Allocati> | null;
    /**
     * 
     * @type {boolean}
     * @memberof ReservationItem
     */
    allowsBackOrder?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReservationItem
     */
    allocationStatus?: string | null;
}

/**
 * Check if a given object implements the ReservationItem interface.
 */
export function instanceOfReservationItem(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationItemFromJSON(json: any): ReservationItem {
    return ReservationItemFromJSONTyped(json, false);
}

export function ReservationItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lineId': !exists(json, 'lineId') ? undefined : json['lineId'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'product': !exists(json, 'product') ? undefined : ProduFromJSON(json['product']),
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'fulfillmentLocationCode': !exists(json, 'fulfillmentLocationCode') ? undefined : json['fulfillmentLocationCode'],
        'fulfillmentMethod': !exists(json, 'fulfillmentMethod') ? undefined : json['fulfillmentMethod'],
        'allocations': !exists(json, 'allocations') ? undefined : (json['allocations'] === null ? null : (json['allocations'] as Array<any>).map(AllocatiFromJSON)),
        'allowsBackOrder': !exists(json, 'allowsBackOrder') ? undefined : json['allowsBackOrder'],
        'allocationStatus': !exists(json, 'allocationStatus') ? undefined : json['allocationStatus'],
    };
}

export function ReservationItemToJSON(value?: ReservationItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lineId': value.lineId,
        'id': value.id,
        'product': ProduToJSON(value.product),
        'quantity': value.quantity,
        'fulfillmentLocationCode': value.fulfillmentLocationCode,
        'fulfillmentMethod': value.fulfillmentMethod,
        'allocations': value.allocations === undefined ? undefined : (value.allocations === null ? null : (value.allocations as Array<any>).map(AllocatiToJSON)),
        'allowsBackOrder': value.allowsBackOrder,
        'allocationStatus': value.allocationStatus,
    };
}

