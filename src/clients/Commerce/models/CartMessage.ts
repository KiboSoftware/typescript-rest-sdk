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
import type { Product } from './Product';
import {
    ProductFromJSON,
    ProductFromJSONTyped,
    ProductToJSON,
} from './Product';

/**
 * 
 * @export
 * @interface CartMessage
 */
export interface CartMessage {
    /**
     * 
     * @type {string}
     * @memberof CartMessage
     */
    message?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CartMessage
     */
    messageType?: string | null;
    /**
     * 
     * @type {Array<Product>}
     * @memberof CartMessage
     */
    productsRemoved?: Array<Product> | null;
}

/**
 * Check if a given object implements the CartMessage interface.
 */
export function instanceOfCartMessage(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CartMessageFromJSON(json: any): CartMessage {
    return CartMessageFromJSONTyped(json, false);
}

export function CartMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): CartMessage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
        'messageType': !exists(json, 'messageType') ? undefined : json['messageType'],
        'productsRemoved': !exists(json, 'productsRemoved') ? undefined : (json['productsRemoved'] === null ? null : (json['productsRemoved'] as Array<any>).map(ProductFromJSON)),
    };
}

export function CartMessageToJSON(value?: CartMessage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
        'messageType': value.messageType,
        'productsRemoved': value.productsRemoved === undefined ? undefined : (value.productsRemoved === null ? null : (value.productsRemoved as Array<any>).map(ProductToJSON)),
    };
}

