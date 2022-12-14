/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Location Admin Service
 * OpenAPI Spec for Kibo Location Admin Service
 *
 * The version of the OpenAPI document: v1_admin
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Attribute } from './Attribute';
import {
    AttributeFromJSON,
    AttributeFromJSONTyped,
    AttributeToJSON,
} from './Attribute';

/**
 * 
 * @export
 * @interface AttributeCollection
 */
export interface AttributeCollection {
    /**
     * 
     * @type {number}
     * @memberof AttributeCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof AttributeCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof AttributeCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof AttributeCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<Attribute>}
     * @memberof AttributeCollection
     */
    items?: Array<Attribute> | null;
}

/**
 * Check if a given object implements the AttributeCollection interface.
 */
export function instanceOfAttributeCollection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AttributeCollectionFromJSON(json: any): AttributeCollection {
    return AttributeCollectionFromJSONTyped(json, false);
}

export function AttributeCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttributeCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'startIndex': !exists(json, 'startIndex') ? undefined : json['startIndex'],
        'pageSize': !exists(json, 'pageSize') ? undefined : json['pageSize'],
        'pageCount': !exists(json, 'pageCount') ? undefined : json['pageCount'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(AttributeFromJSON)),
    };
}

export function AttributeCollectionToJSON(value?: AttributeCollection | null): any {
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
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(AttributeToJSON)),
    };
}

