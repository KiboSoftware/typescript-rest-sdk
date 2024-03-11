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
/**
 * 
 * @export
 * @interface BackorderItem
 */
export interface BackorderItem {
    /**
     * 
     * @type {Date}
     * @memberof BackorderItem
     */
    backorderReleaseDate?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof BackorderItem
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BackorderItem
     */
    lineId: number;
    /**
     * 
     * @type {number}
     * @memberof BackorderItem
     */
    quantity: number;
}

/**
 * Check if a given object implements the BackorderItem interface.
 */
export function instanceOfBackorderItem(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "lineId" in value;
    isInstance = isInstance && "quantity" in value;

    return isInstance;
}

export function BackorderItemFromJSON(json: any): BackorderItem {
    return BackorderItemFromJSONTyped(json, false);
}

export function BackorderItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): BackorderItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'backorderReleaseDate': !exists(json, 'backorderReleaseDate') ? undefined : (new Date(json['backorderReleaseDate'])),
        'blockAssignment': !exists(json, 'blockAssignment') ? undefined : json['blockAssignment'],
        'lineId': json['lineId'],
        'quantity': json['quantity'],
    };
}

export function BackorderItemToJSON(value?: BackorderItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'backorderReleaseDate': value.backorderReleaseDate === undefined ? undefined : (value.backorderReleaseDate.toISOString()),
        'blockAssignment': value.blockAssignment,
        'lineId': value.lineId,
        'quantity': value.quantity,
    };
}
