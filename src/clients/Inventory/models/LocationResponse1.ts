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
 * Location Response Object
 * @export
 * @interface LocationResponse1
 */
export interface LocationResponse1 {
    /**
     * Internal Location ID
     * @type {number}
     * @memberof LocationResponse1
     */
    locationID?: number;
    /**
     * Tenant ID
     * @type {number}
     * @memberof LocationResponse1
     */
    tenantID?: number;
    /**
     * Location Code
     * @type {string}
     * @memberof LocationResponse1
     */
    locationCode?: string;
    /**
     * Flag for whether the location is express enabled or not
     * @type {boolean}
     * @memberof LocationResponse1
     */
    express?: boolean;
    /**
     * Flag for whether the location is to be included in location exports
     * @type {boolean}
     * @memberof LocationResponse1
     */
    includeInLocationExport?: boolean;
    /**
     * Flag for whether the location is to be included in aggregate exports
     * @type {boolean}
     * @memberof LocationResponse1
     */
    includeInAggregate?: boolean;
    /**
     * Flag for whether the location is active
     * @type {boolean}
     * @memberof LocationResponse1
     */
    active?: boolean;
    /**
     * Flag for whether the location allows Direct Ship (STH) orders
     * @type {boolean}
     * @memberof LocationResponse1
     */
    directShip?: boolean;
    /**
     * Flag for whether the location allows Pickup (BOPIS) orders
     * @type {boolean}
     * @memberof LocationResponse1
     */
    pickup?: boolean;
    /**
     * Flag for whether the location allows Transfer orders
     * @type {boolean}
     * @memberof LocationResponse1
     */
    transferEnabled?: boolean;
    /**
     * Postal Code
     * @type {string}
     * @memberof LocationResponse1
     */
    postalCode?: string;
    /**
     * Country Code
     * @type {string}
     * @memberof LocationResponse1
     */
    countryCode?: string;
    /**
     * Latitude
     * @type {number}
     * @memberof LocationResponse1
     */
    latitude?: number;
    /**
     * Longitude
     * @type {number}
     * @memberof LocationResponse1
     */
    longitude?: number;
    /**
     * Location Name
     * @type {string}
     * @memberof LocationResponse1
     */
    locationName?: string;
    /**
     * Flag for whether the location is WMS Enabled
     * @type {boolean}
     * @memberof LocationResponse1
     */
    wmsEnabled?: boolean;
}

/**
 * Check if a given object implements the LocationResponse1 interface.
 */
export function instanceOfLocationResponse1(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LocationResponse1FromJSON(json: any): LocationResponse1 {
    return LocationResponse1FromJSONTyped(json, false);
}

export function LocationResponse1FromJSONTyped(json: any, ignoreDiscriminator: boolean): LocationResponse1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'locationID': !exists(json, 'locationID') ? undefined : json['locationID'],
        'tenantID': !exists(json, 'tenantID') ? undefined : json['tenantID'],
        'locationCode': !exists(json, 'locationCode') ? undefined : json['locationCode'],
        'express': !exists(json, 'express') ? undefined : json['express'],
        'includeInLocationExport': !exists(json, 'includeInLocationExport') ? undefined : json['includeInLocationExport'],
        'includeInAggregate': !exists(json, 'includeInAggregate') ? undefined : json['includeInAggregate'],
        'active': !exists(json, 'active') ? undefined : json['active'],
        'directShip': !exists(json, 'directShip') ? undefined : json['directShip'],
        'pickup': !exists(json, 'pickup') ? undefined : json['pickup'],
        'transferEnabled': !exists(json, 'transferEnabled') ? undefined : json['transferEnabled'],
        'postalCode': !exists(json, 'postalCode') ? undefined : json['postalCode'],
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'latitude': !exists(json, 'latitude') ? undefined : json['latitude'],
        'longitude': !exists(json, 'longitude') ? undefined : json['longitude'],
        'locationName': !exists(json, 'locationName') ? undefined : json['locationName'],
        'wmsEnabled': !exists(json, 'wmsEnabled') ? undefined : json['wmsEnabled'],
    };
}

export function LocationResponse1ToJSON(value?: LocationResponse1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'locationID': value.locationID,
        'tenantID': value.tenantID,
        'locationCode': value.locationCode,
        'express': value.express,
        'includeInLocationExport': value.includeInLocationExport,
        'includeInAggregate': value.includeInAggregate,
        'active': value.active,
        'directShip': value.directShip,
        'pickup': value.pickup,
        'transferEnabled': value.transferEnabled,
        'postalCode': value.postalCode,
        'countryCode': value.countryCode,
        'latitude': value.latitude,
        'longitude': value.longitude,
        'locationName': value.locationName,
        'wmsEnabled': value.wmsEnabled,
    };
}

