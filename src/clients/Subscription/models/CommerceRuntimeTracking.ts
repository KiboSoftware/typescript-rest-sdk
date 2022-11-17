/* tslint:disable */
/* eslint-disable */
/**
 * Kibo SubscriptionRuntime Service
 * OpenAPI Spec for Kibo SubscriptionRuntime Service
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
 * @interface CommerceRuntimeTracking
 */
export interface CommerceRuntimeTracking {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof CommerceRuntimeTracking
     */
    attributes?: { [key: string]: any; } | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeTracking
     */
    number?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeTracking
     */
    url?: string | null;
}

/**
 * Check if a given object implements the CommerceRuntimeTracking interface.
 */
export function instanceOfCommerceRuntimeTracking(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommerceRuntimeTrackingFromJSON(json: any): CommerceRuntimeTracking {
    return CommerceRuntimeTrackingFromJSONTyped(json, false);
}

export function CommerceRuntimeTrackingFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommerceRuntimeTracking {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attributes': !exists(json, 'attributes') ? undefined : json['attributes'],
        'number': !exists(json, 'number') ? undefined : json['number'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function CommerceRuntimeTrackingToJSON(value?: CommerceRuntimeTracking | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attributes': value.attributes,
        'number': value.number,
        'url': value.url,
    };
}

