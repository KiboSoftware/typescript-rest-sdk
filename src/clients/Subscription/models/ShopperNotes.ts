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
 * Notes that the shopper has added to this order, for example, a gift message or other comments.
 * @export
 * @interface ShopperNotes
 */
export interface ShopperNotes {
    /**
     * Gift message associated with this order.
     * @type {string}
     * @memberof ShopperNotes
     */
    giftMessage?: string | null;
    /**
     * Comments associated with this order.
     * @type {string}
     * @memberof ShopperNotes
     */
    comments?: string | null;
    /**
     * DeliveryInstructions associated with this order.
     * @type {string}
     * @memberof ShopperNotes
     */
    deliveryInstructions?: string | null;
}

/**
 * Check if a given object implements the ShopperNotes interface.
 */
export function instanceOfShopperNotes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ShopperNotesFromJSON(json: any): ShopperNotes {
    return ShopperNotesFromJSONTyped(json, false);
}

export function ShopperNotesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShopperNotes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'giftMessage': !exists(json, 'giftMessage') ? undefined : json['giftMessage'],
        'comments': !exists(json, 'comments') ? undefined : json['comments'],
        'deliveryInstructions': !exists(json, 'deliveryInstructions') ? undefined : json['deliveryInstructions'],
    };
}

export function ShopperNotesToJSON(value?: ShopperNotes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'giftMessage': value.giftMessage,
        'comments': value.comments,
        'deliveryInstructions': value.deliveryInstructions,
    };
}

