/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Reference Service
 * OpenAPI Spec for Kibo Reference Service
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Behavior } from './Behavior';
import {
    BehaviorFromJSON,
    BehaviorFromJSONTyped,
    BehaviorToJSON,
} from './Behavior';

/**
 * 
 * @export
 * @interface BehaviorCollectionBase
 */
export interface BehaviorCollectionBase {
    /**
     * 
     * @type {number}
     * @memberof BehaviorCollectionBase
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<Behavior>}
     * @memberof BehaviorCollectionBase
     */
    items?: Array<Behavior> | null;
}

/**
 * Check if a given object implements the BehaviorCollectionBase interface.
 */
export function instanceOfBehaviorCollectionBase(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BehaviorCollectionBaseFromJSON(json: any): BehaviorCollectionBase {
    return BehaviorCollectionBaseFromJSONTyped(json, false);
}

export function BehaviorCollectionBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BehaviorCollectionBase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(BehaviorFromJSON)),
    };
}

export function BehaviorCollectionBaseToJSON(value?: BehaviorCollectionBase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'totalCount': value.totalCount,
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(BehaviorToJSON)),
    };
}

