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
 * @interface CommerceRuntimeAddress
 */
export interface CommerceRuntimeAddress {
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAddress
     */
    address1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAddress
     */
    address2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAddress
     */
    address3?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAddress
     */
    address4?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAddress
     */
    cityOrTown?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAddress
     */
    stateOrProvince?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAddress
     */
    postalOrZipCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAddress
     */
    countryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAddress
     */
    addressType?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeAddress
     */
    isValidated?: boolean | null;
}

/**
 * Check if a given object implements the CommerceRuntimeAddress interface.
 */
export function instanceOfCommerceRuntimeAddress(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommerceRuntimeAddressFromJSON(json: any): CommerceRuntimeAddress {
    return CommerceRuntimeAddressFromJSONTyped(json, false);
}

export function CommerceRuntimeAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommerceRuntimeAddress {
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

export function CommerceRuntimeAddressToJSON(value?: CommerceRuntimeAddress | null): any {
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

