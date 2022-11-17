/* tslint:disable */
/* eslint-disable */
/**
 * Kibo MZDB Service
 * OpenAPI Spec for Kibo MZDB Service
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { EntityContainer } from './EntityContainer';
import {
    EntityContainerFromJSON,
    EntityContainerFromJSONTyped,
    EntityContainerToJSON,
} from './EntityContainer';

/**
 * 
 * @export
 * @interface EntityContainerCollection
 */
export interface EntityContainerCollection {
    /**
     * 
     * @type {number}
     * @memberof EntityContainerCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityContainerCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityContainerCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityContainerCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<EntityContainer>}
     * @memberof EntityContainerCollection
     */
    items?: Array<EntityContainer> | null;
}

/**
 * Check if a given object implements the EntityContainerCollection interface.
 */
export function instanceOfEntityContainerCollection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EntityContainerCollectionFromJSON(json: any): EntityContainerCollection {
    return EntityContainerCollectionFromJSONTyped(json, false);
}

export function EntityContainerCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntityContainerCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'startIndex': !exists(json, 'startIndex') ? undefined : json['startIndex'],
        'pageSize': !exists(json, 'pageSize') ? undefined : json['pageSize'],
        'pageCount': !exists(json, 'pageCount') ? undefined : json['pageCount'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(EntityContainerFromJSON)),
    };
}

export function EntityContainerCollectionToJSON(value?: EntityContainerCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'startIndex': value.startIndex,
        'pageSize': value.pageSize,
        'pageCount': value.pageCount,
        'totalCount': value.totalCount,
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(EntityContainerToJSON)),
    };
}
