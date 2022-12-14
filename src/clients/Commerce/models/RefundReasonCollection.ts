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
import type { RefundReasonItem } from './RefundReasonItem';
import {
    RefundReasonItemFromJSON,
    RefundReasonItemFromJSONTyped,
    RefundReasonItemToJSON,
} from './RefundReasonItem';

/**
 * 
 * @export
 * @interface RefundReasonCollection
 */
export interface RefundReasonCollection {
    /**
     * 
     * @type {number}
     * @memberof RefundReasonCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<RefundReasonItem>}
     * @memberof RefundReasonCollection
     */
    items?: Array<RefundReasonItem> | null;
}

/**
 * Check if a given object implements the RefundReasonCollection interface.
 */
export function instanceOfRefundReasonCollection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RefundReasonCollectionFromJSON(json: any): RefundReasonCollection {
    return RefundReasonCollectionFromJSONTyped(json, false);
}

export function RefundReasonCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): RefundReasonCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(RefundReasonItemFromJSON)),
    };
}

export function RefundReasonCollectionToJSON(value?: RefundReasonCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'totalCount': value.totalCount,
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(RefundReasonItemToJSON)),
    };
}

