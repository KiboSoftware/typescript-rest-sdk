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
/**
 * 
 * @export
 * @interface ReasonCollection
 */
export interface ReasonCollection {
    /**
     * 
     * @type {number}
     * @memberof ReasonCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReasonCollection
     */
    items?: Array<string> | null;
}

/**
 * Check if a given object implements the ReasonCollection interface.
 */
export function instanceOfReasonCollection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReasonCollectionFromJSON(json: any): ReasonCollection {
    return ReasonCollectionFromJSONTyped(json, false);
}

export function ReasonCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReasonCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
        'items': !exists(json, 'items') ? undefined : json['items'],
    };
}

export function ReasonCollectionToJSON(value?: ReasonCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'totalCount': value.totalCount,
        'items': value.items,
    };
}

