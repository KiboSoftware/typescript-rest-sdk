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
 * @interface FulfillmentServiceInventoryTag
 */
export interface FulfillmentServiceInventoryTag {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceInventoryTag
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceInventoryTag
     */
    value?: string | null;
}

/**
 * Check if a given object implements the FulfillmentServiceInventoryTag interface.
 */
export function instanceOfFulfillmentServiceInventoryTag(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FulfillmentServiceInventoryTagFromJSON(json: any): FulfillmentServiceInventoryTag {
    return FulfillmentServiceInventoryTagFromJSONTyped(json, false);
}

export function FulfillmentServiceInventoryTagFromJSONTyped(json: any, ignoreDiscriminator: boolean): FulfillmentServiceInventoryTag {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function FulfillmentServiceInventoryTagToJSON(value?: FulfillmentServiceInventoryTag | null): any {
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
