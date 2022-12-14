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
 * @interface Address
 */
export interface Address {
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    address1?: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    address2?: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    address3?: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    address4?: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    addressType?: AddressAddressTypeEnum;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof Address
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    cityOrTown?: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    countryCode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Address
     */
    isValidated?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    latitude?: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    longitude?: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    postalOrZipCode?: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    stateOrProvince?: string;
}


/**
 * @export
 */
export const AddressAddressTypeEnum = {
    Commercial: 'Commercial',
    Residential: 'Residential'
} as const;
export type AddressAddressTypeEnum = typeof AddressAddressTypeEnum[keyof typeof AddressAddressTypeEnum];


/**
 * Check if a given object implements the Address interface.
 */
export function instanceOfAddress(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AddressFromJSON(json: any): Address {
    return AddressFromJSONTyped(json, false);
}

export function AddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): Address {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address1': !exists(json, 'address1') ? undefined : json['address1'],
        'address2': !exists(json, 'address2') ? undefined : json['address2'],
        'address3': !exists(json, 'address3') ? undefined : json['address3'],
        'address4': !exists(json, 'address4') ? undefined : json['address4'],
        'addressType': !exists(json, 'addressType') ? undefined : json['addressType'],
        'attributes': !exists(json, 'attributes') ? undefined : json['attributes'],
        'cityOrTown': !exists(json, 'cityOrTown') ? undefined : json['cityOrTown'],
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'isValidated': !exists(json, 'isValidated') ? undefined : json['isValidated'],
        'latitude': !exists(json, 'latitude') ? undefined : json['latitude'],
        'longitude': !exists(json, 'longitude') ? undefined : json['longitude'],
        'postalOrZipCode': !exists(json, 'postalOrZipCode') ? undefined : json['postalOrZipCode'],
        'stateOrProvince': !exists(json, 'stateOrProvince') ? undefined : json['stateOrProvince'],
    };
}

export function AddressToJSON(value?: Address | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address1': value.address1,
        'address2': value.address2,
        'address3': value.address3,
        'address4': value.address4,
        'addressType': value.addressType,
        'attributes': value.attributes,
        'cityOrTown': value.cityOrTown,
        'countryCode': value.countryCode,
        'isValidated': value.isValidated,
        'latitude': value.latitude,
        'longitude': value.longitude,
        'postalOrZipCode': value.postalOrZipCode,
        'stateOrProvince': value.stateOrProvince,
    };
}

