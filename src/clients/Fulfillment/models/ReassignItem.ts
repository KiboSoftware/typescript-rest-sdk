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
import type { ReassignedReason } from './ReassignedReason';
import {
    ReassignedReasonFromJSON,
    ReassignedReasonFromJSONTyped,
    ReassignedReasonToJSON,
} from './ReassignedReason';

/**
 * 
 * @export
 * @interface ReassignItem
 */
export interface ReassignItem {
    /**
     * If true, order routing will not suggest that any shipments with these items be assigned to the original location. This persists until the inventory records for these items are updated. When the records are updated, blockAssignment will automatically be disabled again to allow new assignments. This is an optional parameter and defaults to false if not provided in the request.
     * @type {boolean}
     * @memberof ReassignItem
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReassignItem
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {number}
     * @memberof ReassignItem
     */
    lineId: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignItem
     */
    quantity: number;
    /**
     * 
     * @type {ReassignedReason}
     * @memberof ReassignItem
     */
    reassignedReason?: ReassignedReason;
}

/**
 * Check if a given object implements the ReassignItem interface.
 */
export function instanceOfReassignItem(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "lineId" in value;
    isInstance = isInstance && "quantity" in value;

    return isInstance;
}

export function ReassignItemFromJSON(json: any): ReassignItem {
    return ReassignItemFromJSONTyped(json, false);
}

export function ReassignItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReassignItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockAssignment': !exists(json, 'blockAssignment') ? undefined : json['blockAssignment'],
        'fulfillmentLocationCode': !exists(json, 'fulfillmentLocationCode') ? undefined : json['fulfillmentLocationCode'],
        'lineId': json['lineId'],
        'quantity': json['quantity'],
        'reassignedReason': !exists(json, 'reassignedReason') ? undefined : ReassignedReasonFromJSON(json['reassignedReason']),
    };
}

export function ReassignItemToJSON(value?: ReassignItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockAssignment': value.blockAssignment,
        'fulfillmentLocationCode': value.fulfillmentLocationCode,
        'lineId': value.lineId,
        'quantity': value.quantity,
        'reassignedReason': ReassignedReasonToJSON(value.reassignedReason),
    };
}
