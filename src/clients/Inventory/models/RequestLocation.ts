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
 * Request Location
 * @export
 * @interface RequestLocation
 */
export interface RequestLocation {
    /**
     * Unit of distance used for radius
     * @type {string}
     * @memberof RequestLocation
     */
    unit?: RequestLocationUnitEnum;
    /**
     * Distance from location
     * @type {number}
     * @memberof RequestLocation
     */
    radius?: number;
    /**
     * Postal Code of this location
     * @type {string}
     * @memberof RequestLocation
     */
    postalCode?: string;
    /**
     * Latitude coordinate of this location
     * @type {number}
     * @memberof RequestLocation
     */
    latitude?: number;
    /**
     * Longitude coordinate of this location
     * @type {number}
     * @memberof RequestLocation
     */
    longitude?: number;
    /**
     * Country Code for this location
     * @type {string}
     * @memberof RequestLocation
     */
    countryCode?: string;
    /**
     * Location Code for this location. This being set will trigger GetInventoryByLocation
     * @type {string}
     * @memberof RequestLocation
     */
    locationCode?: string;
    /**
     * Address ID for this location
     * @type {number}
     * @memberof RequestLocation
     */
    addressID?: number;
    /**
     * CustomerID ID for this location
     * @type {number}
     * @memberof RequestLocation
     */
    customerID?: number;
    /**
     * Address line 1 for this location
     * @type {string}
     * @memberof RequestLocation
     */
    addressLine1?: string;
    /**
     * Phone number for this location
     * @type {string}
     * @memberof RequestLocation
     */
    phone?: string;
    /**
     * City for this location
     * @type {string}
     * @memberof RequestLocation
     */
    city?: string;
    /**
     * State for this location
     * @type {string}
     * @memberof RequestLocation
     */
    state?: string;
}


/**
 * @export
 */
export const RequestLocationUnitEnum = {
    Miles: 'MILES',
    Km: 'KM'
} as const;
export type RequestLocationUnitEnum = typeof RequestLocationUnitEnum[keyof typeof RequestLocationUnitEnum];


/**
 * Check if a given object implements the RequestLocation interface.
 */
export function instanceOfRequestLocation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RequestLocationFromJSON(json: any): RequestLocation {
    return RequestLocationFromJSONTyped(json, false);
}

export function RequestLocationFromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestLocation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'unit': !exists(json, 'unit') ? undefined : json['unit'],
        'radius': !exists(json, 'radius') ? undefined : json['radius'],
        'postalCode': !exists(json, 'postalCode') ? undefined : json['postalCode'],
        'latitude': !exists(json, 'latitude') ? undefined : json['latitude'],
        'longitude': !exists(json, 'longitude') ? undefined : json['longitude'],
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'locationCode': !exists(json, 'locationCode') ? undefined : json['locationCode'],
        'addressID': !exists(json, 'addressID') ? undefined : json['addressID'],
        'customerID': !exists(json, 'customerID') ? undefined : json['customerID'],
        'addressLine1': !exists(json, 'addressLine1') ? undefined : json['addressLine1'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'state': !exists(json, 'state') ? undefined : json['state'],
    };
}

export function RequestLocationToJSON(value?: RequestLocation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'unit': value.unit,
        'radius': value.radius,
        'postalCode': value.postalCode,
        'latitude': value.latitude,
        'longitude': value.longitude,
        'countryCode': value.countryCode,
        'locationCode': value.locationCode,
        'addressID': value.addressID,
        'customerID': value.customerID,
        'addressLine1': value.addressLine1,
        'phone': value.phone,
        'city': value.city,
        'state': value.state,
    };
}
