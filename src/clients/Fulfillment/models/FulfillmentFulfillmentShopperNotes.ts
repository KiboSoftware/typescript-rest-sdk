/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Fulfillment Service
 * OpenAPI Spec for Kibo Fulfillment Service
 *
 * The version of the OpenAPI document: 1.0.0
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
 * @interface FulfillmentFulfillmentShopperNotes
 */
export interface FulfillmentFulfillmentShopperNotes {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentFulfillmentShopperNotes
     */
    comments?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentFulfillmentShopperNotes
     */
    deliveryInstructions?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentFulfillmentShopperNotes
     */
    giftMessage?: string;
}

/**
 * Check if a given object implements the FulfillmentFulfillmentShopperNotes interface.
 */
export function instanceOfFulfillmentFulfillmentShopperNotes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FulfillmentFulfillmentShopperNotesFromJSON(json: any): FulfillmentFulfillmentShopperNotes {
    return FulfillmentFulfillmentShopperNotesFromJSONTyped(json, false);
}

export function FulfillmentFulfillmentShopperNotesFromJSONTyped(json: any, ignoreDiscriminator: boolean): FulfillmentFulfillmentShopperNotes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'comments': !exists(json, 'comments') ? undefined : json['comments'],
        'deliveryInstructions': !exists(json, 'deliveryInstructions') ? undefined : json['deliveryInstructions'],
        'giftMessage': !exists(json, 'giftMessage') ? undefined : json['giftMessage'],
    };
}

export function FulfillmentFulfillmentShopperNotesToJSON(value?: FulfillmentFulfillmentShopperNotes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'comments': value.comments,
        'deliveryInstructions': value.deliveryInstructions,
        'giftMessage': value.giftMessage,
    };
}
