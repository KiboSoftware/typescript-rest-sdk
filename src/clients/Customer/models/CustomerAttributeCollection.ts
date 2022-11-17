/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Customer Service
 * OpenAPI Spec for Kibo Customer Service
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CustomerAttribute } from './CustomerAttribute';
import {
    CustomerAttributeFromJSON,
    CustomerAttributeFromJSONTyped,
    CustomerAttributeToJSON,
} from './CustomerAttribute';

/**
 * Collection of notes added to a customer account returned as a whole. A collection is not paged.
 * @export
 * @interface CustomerAttributeCollection
 */
export interface CustomerAttributeCollection {
    /**
     * 
     * @type {number}
     * @memberof CustomerAttributeCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerAttributeCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerAttributeCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerAttributeCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<CustomerAttribute>}
     * @memberof CustomerAttributeCollection
     */
    items?: Array<CustomerAttribute> | null;
}

/**
 * Check if a given object implements the CustomerAttributeCollection interface.
 */
export function instanceOfCustomerAttributeCollection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerAttributeCollectionFromJSON(json: any): CustomerAttributeCollection {
    return CustomerAttributeCollectionFromJSONTyped(json, false);
}

export function CustomerAttributeCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerAttributeCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'startIndex': !exists(json, 'startIndex') ? undefined : json['startIndex'],
        'pageSize': !exists(json, 'pageSize') ? undefined : json['pageSize'],
        'pageCount': !exists(json, 'pageCount') ? undefined : json['pageCount'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(CustomerAttributeFromJSON)),
    };
}

export function CustomerAttributeCollectionToJSON(value?: CustomerAttributeCollection | null): any {
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
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(CustomerAttributeToJSON)),
    };
}

