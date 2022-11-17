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
import type { FulfillmentContact } from './FulfillmentContact';
import {
    FulfillmentContactFromJSON,
    FulfillmentContactFromJSONTyped,
    FulfillmentContactToJSON,
} from './FulfillmentContact';

/**
 * 
 * @export
 * @interface FulfillmentDestination
 */
export interface FulfillmentDestination {
    /**
     * 
     * @type {object}
     * @memberof FulfillmentDestination
     */
    data?: object;
    /**
     * 
     * @type {FulfillmentContact}
     * @memberof FulfillmentDestination
     */
    destinationContact?: FulfillmentContact;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentDestination
     */
    isDestinationCommercial?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentDestination
     */
    locationCode?: string;
}

/**
 * Check if a given object implements the FulfillmentDestination interface.
 */
export function instanceOfFulfillmentDestination(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FulfillmentDestinationFromJSON(json: any): FulfillmentDestination {
    return FulfillmentDestinationFromJSONTyped(json, false);
}

export function FulfillmentDestinationFromJSONTyped(json: any, ignoreDiscriminator: boolean): FulfillmentDestination {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : json['data'],
        'destinationContact': !exists(json, 'destinationContact') ? undefined : FulfillmentContactFromJSON(json['destinationContact']),
        'isDestinationCommercial': !exists(json, 'isDestinationCommercial') ? undefined : json['isDestinationCommercial'],
        'locationCode': !exists(json, 'locationCode') ? undefined : json['locationCode'],
    };
}

export function FulfillmentDestinationToJSON(value?: FulfillmentDestination | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data,
        'destinationContact': FulfillmentContactToJSON(value.destinationContact),
        'isDestinationCommercial': value.isDestinationCommercial,
        'locationCode': value.locationCode,
    };
}

