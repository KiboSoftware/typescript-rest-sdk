/* tslint:disable */
/* eslint-disable */
/**
 * Kibo CommerceRuntime Service
 * OpenAPI Spec for Kibo CommerceRuntime Service
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
 * @interface CommerceRuntimeFulfillmentShopperNotes
 */
export interface CommerceRuntimeFulfillmentShopperNotes {
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeFulfillmentShopperNotes
     */
    comments?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeFulfillmentShopperNotes
     */
    deliveryInstructions?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeFulfillmentShopperNotes
     */
    giftMessage?: string | null;
}

/**
 * Check if a given object implements the CommerceRuntimeFulfillmentShopperNotes interface.
 */
export function instanceOfCommerceRuntimeFulfillmentShopperNotes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommerceRuntimeFulfillmentShopperNotesFromJSON(json: any): CommerceRuntimeFulfillmentShopperNotes {
    return CommerceRuntimeFulfillmentShopperNotesFromJSONTyped(json, false);
}

export function CommerceRuntimeFulfillmentShopperNotesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommerceRuntimeFulfillmentShopperNotes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'comments': !exists(json, 'comments') ? undefined : json['comments'],
        'deliveryInstructions': !exists(json, 'deliveryInstructions') ? undefined : json['deliveryInstructions'],
        'giftMessage': !exists(json, 'giftMessage') ? undefined : json['giftMessage'],
    };
}

export function CommerceRuntimeFulfillmentShopperNotesToJSON(value?: CommerceRuntimeFulfillmentShopperNotes | null): any {
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

