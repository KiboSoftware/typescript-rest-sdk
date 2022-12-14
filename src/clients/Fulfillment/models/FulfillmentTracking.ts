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
 * @interface FulfillmentTracking
 */
export interface FulfillmentTracking {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentTracking
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof FulfillmentTracking
     */
    number?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentTracking
     */
    url?: string;
}

/**
 * Check if a given object implements the FulfillmentTracking interface.
 */
export function instanceOfFulfillmentTracking(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FulfillmentTrackingFromJSON(json: any): FulfillmentTracking {
    return FulfillmentTrackingFromJSONTyped(json, false);
}

export function FulfillmentTrackingFromJSONTyped(json: any, ignoreDiscriminator: boolean): FulfillmentTracking {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attributes': !exists(json, 'attributes') ? undefined : json['attributes'],
        'number': !exists(json, 'number') ? undefined : json['number'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function FulfillmentTrackingToJSON(value?: FulfillmentTracking | null): any {
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

