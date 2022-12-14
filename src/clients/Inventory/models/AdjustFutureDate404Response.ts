/* tslint:disable */
/* eslint-disable */
/**
 * Inventory
 * Swagger JSON for inventory apis
 *
 * The version of the OpenAPI document: 5.0
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
 * @interface AdjustFutureDate404Response
 */
export interface AdjustFutureDate404Response {
    /**
     * 
     * @type {string}
     * @memberof AdjustFutureDate404Response
     */
    error?: string;
    /**
     * 
     * @type {string}
     * @memberof AdjustFutureDate404Response
     */
    message?: string;
}

/**
 * Check if a given object implements the AdjustFutureDate404Response interface.
 */
export function instanceOfAdjustFutureDate404Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AdjustFutureDate404ResponseFromJSON(json: any): AdjustFutureDate404Response {
    return AdjustFutureDate404ResponseFromJSONTyped(json, false);
}

export function AdjustFutureDate404ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdjustFutureDate404Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : json['error'],
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function AdjustFutureDate404ResponseToJSON(value?: AdjustFutureDate404Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': value.error,
        'message': value.message,
    };
}

