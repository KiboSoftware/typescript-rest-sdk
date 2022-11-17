/* tslint:disable */
/* eslint-disable */
/**
 * Kibo PricingRuntime Service
 * OpenAPI Spec for Kibo PricingRuntime Service
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
    address1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    address2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    address3?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    address4?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    cityOrTown?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    stateOrProvince?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    postalOrZipCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    countryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    addressType?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof Address
     */
    isValidated?: boolean | null;
}

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
        'cityOrTown': !exists(json, 'cityOrTown') ? undefined : json['cityOrTown'],
        'stateOrProvince': !exists(json, 'stateOrProvince') ? undefined : json['stateOrProvince'],
        'postalOrZipCode': !exists(json, 'postalOrZipCode') ? undefined : json['postalOrZipCode'],
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'addressType': !exists(json, 'addressType') ? undefined : json['addressType'],
        'isValidated': !exists(json, 'isValidated') ? undefined : json['isValidated'],
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
        'cityOrTown': value.cityOrTown,
        'stateOrProvince': value.stateOrProvince,
        'postalOrZipCode': value.postalOrZipCode,
        'countryCode': value.countryCode,
        'addressType': value.addressType,
        'isValidated': value.isValidated,
    };
}

