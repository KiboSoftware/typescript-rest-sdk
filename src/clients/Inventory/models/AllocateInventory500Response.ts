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
import type { BaseResponse } from './BaseResponse';
import {
    BaseResponseFromJSON,
    BaseResponseFromJSONTyped,
    BaseResponseToJSON,
} from './BaseResponse';

/**
 * 
 * @export
 * @interface AllocateInventory500Response
 */
export interface AllocateInventory500Response {
    /**
     * 
     * @type {string}
     * @memberof AllocateInventory500Response
     */
    error?: string;
    /**
     * 
     * @type {BaseResponse}
     * @memberof AllocateInventory500Response
     */
    message?: BaseResponse;
}

/**
 * Check if a given object implements the AllocateInventory500Response interface.
 */
export function instanceOfAllocateInventory500Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AllocateInventory500ResponseFromJSON(json: any): AllocateInventory500Response {
    return AllocateInventory500ResponseFromJSONTyped(json, false);
}

export function AllocateInventory500ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AllocateInventory500Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : json['error'],
        'message': !exists(json, 'message') ? undefined : BaseResponseFromJSON(json['message']),
    };
}

export function AllocateInventory500ResponseToJSON(value?: AllocateInventory500Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': value.error,
        'message': BaseResponseToJSON(value.message),
    };
}

