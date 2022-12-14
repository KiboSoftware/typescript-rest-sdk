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
/**
 * 
 * @export
 * @interface BackorderShipmentRequest
 */
export interface BackorderShipmentRequest {
    /**
     * 
     * @type {Date}
     * @memberof BackorderShipmentRequest
     */
    backorderReleaseDate?: Date;
}

/**
 * Check if a given object implements the BackorderShipmentRequest interface.
 */
export function instanceOfBackorderShipmentRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BackorderShipmentRequestFromJSON(json: any): BackorderShipmentRequest {
    return BackorderShipmentRequestFromJSONTyped(json, false);
}

export function BackorderShipmentRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BackorderShipmentRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'backorderReleaseDate': !exists(json, 'backorderReleaseDate') ? undefined : (new Date(json['backorderReleaseDate'])),
    };
}

export function BackorderShipmentRequestToJSON(value?: BackorderShipmentRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'backorderReleaseDate': value.backorderReleaseDate === undefined ? undefined : (value.backorderReleaseDate.toISOString()),
    };
}

