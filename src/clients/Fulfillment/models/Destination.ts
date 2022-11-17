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
import type { Contact } from './Contact';
import {
    ContactFromJSON,
    ContactFromJSONTyped,
    ContactToJSON,
} from './Contact';

/**
 * 
 * @export
 * @interface Destination
 */
export interface Destination {
    /**
     * 
     * @type {object}
     * @memberof Destination
     */
    data?: object;
    /**
     * 
     * @type {Contact}
     * @memberof Destination
     */
    destinationContact?: Contact;
    /**
     * 
     * @type {boolean}
     * @memberof Destination
     */
    isDestinationCommercial?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Destination
     */
    locationCode?: string;
}

/**
 * Check if a given object implements the Destination interface.
 */
export function instanceOfDestination(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DestinationFromJSON(json: any): Destination {
    return DestinationFromJSONTyped(json, false);
}

export function DestinationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Destination {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : json['data'],
        'destinationContact': !exists(json, 'destinationContact') ? undefined : ContactFromJSON(json['destinationContact']),
        'isDestinationCommercial': !exists(json, 'isDestinationCommercial') ? undefined : json['isDestinationCommercial'],
        'locationCode': !exists(json, 'locationCode') ? undefined : json['locationCode'],
    };
}

export function DestinationToJSON(value?: Destination | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data,
        'destinationContact': ContactToJSON(value.destinationContact),
        'isDestinationCommercial': value.isDestinationCommercial,
        'locationCode': value.locationCode,
    };
}

