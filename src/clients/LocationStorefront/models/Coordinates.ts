/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Location Storefront Service
 * OpenAPI Spec for Kibo Location Storefront Service
 *
 * The version of the OpenAPI document: v1_storefront
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
 * @interface Coordinates
 */
export interface Coordinates {
    /**
     * 
     * @type {number}
     * @memberof Coordinates
     */
    lat?: number;
    /**
     * 
     * @type {number}
     * @memberof Coordinates
     */
    lng?: number;
}

/**
 * Check if a given object implements the Coordinates interface.
 */
export function instanceOfCoordinates(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CoordinatesFromJSON(json: any): Coordinates {
    return CoordinatesFromJSONTyped(json, false);
}

export function CoordinatesFromJSONTyped(json: any, ignoreDiscriminator: boolean): Coordinates {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lat': !exists(json, 'lat') ? undefined : json['lat'],
        'lng': !exists(json, 'lng') ? undefined : json['lng'],
    };
}

export function CoordinatesToJSON(value?: Coordinates | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lat': value.lat,
        'lng': value.lng,
    };
}

