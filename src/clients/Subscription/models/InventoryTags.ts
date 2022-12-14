/* tslint:disable */
/* eslint-disable */
/**
 * Kibo SubscriptionRuntime Service
 * OpenAPI Spec for Kibo SubscriptionRuntime Service
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
 * @interface InventoryTags
 */
export interface InventoryTags {
    /**
     * 
     * @type {string}
     * @memberof InventoryTags
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InventoryTags
     */
    value?: string | null;
}

/**
 * Check if a given object implements the InventoryTags interface.
 */
export function instanceOfInventoryTags(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InventoryTagsFromJSON(json: any): InventoryTags {
    return InventoryTagsFromJSONTyped(json, false);
}

export function InventoryTagsFromJSONTyped(json: any, ignoreDiscriminator: boolean): InventoryTags {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function InventoryTagsToJSON(value?: InventoryTags | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'value': value.value,
    };
}

