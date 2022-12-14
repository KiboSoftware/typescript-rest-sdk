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
import type { CancelReasonItem } from './CancelReasonItem';
import {
    CancelReasonItemFromJSON,
    CancelReasonItemFromJSONTyped,
    CancelReasonItemToJSON,
} from './CancelReasonItem';

/**
 * 
 * @export
 * @interface CancelReasonCollection
 */
export interface CancelReasonCollection {
    /**
     * 
     * @type {number}
     * @memberof CancelReasonCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<CancelReasonItem>}
     * @memberof CancelReasonCollection
     */
    items?: Array<CancelReasonItem> | null;
}

/**
 * Check if a given object implements the CancelReasonCollection interface.
 */
export function instanceOfCancelReasonCollection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CancelReasonCollectionFromJSON(json: any): CancelReasonCollection {
    return CancelReasonCollectionFromJSONTyped(json, false);
}

export function CancelReasonCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CancelReasonCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(CancelReasonItemFromJSON)),
    };
}

export function CancelReasonCollectionToJSON(value?: CancelReasonCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'totalCount': value.totalCount,
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(CancelReasonItemToJSON)),
    };
}

