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
import type { BackorderItem } from './BackorderItem';
import {
    BackorderItemFromJSON,
    BackorderItemFromJSONTyped,
    BackorderItemToJSON,
} from './BackorderItem';

/**
 * 
 * @export
 * @interface BackorderItemsRequest
 */
export interface BackorderItemsRequest {
    /**
     * 
     * @type {boolean}
     * @memberof BackorderItemsRequest
     */
    isUserAction?: boolean;
    /**
     * 
     * @type {Array<BackorderItem>}
     * @memberof BackorderItemsRequest
     */
    items?: Array<BackorderItem>;
}

/**
 * Check if a given object implements the BackorderItemsRequest interface.
 */
export function instanceOfBackorderItemsRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BackorderItemsRequestFromJSON(json: any): BackorderItemsRequest {
    return BackorderItemsRequestFromJSONTyped(json, false);
}

export function BackorderItemsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BackorderItemsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isUserAction': !exists(json, 'isUserAction') ? undefined : json['isUserAction'],
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(BackorderItemFromJSON)),
    };
}

export function BackorderItemsRequestToJSON(value?: BackorderItemsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'isUserAction': value.isUserAction,
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(BackorderItemToJSON)),
    };
}
