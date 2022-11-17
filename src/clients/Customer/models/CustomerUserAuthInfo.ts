/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Customer Service
 * OpenAPI Spec for Kibo Customer Service
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
 * @interface CustomerUserAuthInfo
 */
export interface CustomerUserAuthInfo {
    /**
     * 
     * @type {string}
     * @memberof CustomerUserAuthInfo
     */
    username?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerUserAuthInfo
     */
    password?: string | null;
}

/**
 * Check if a given object implements the CustomerUserAuthInfo interface.
 */
export function instanceOfCustomerUserAuthInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerUserAuthInfoFromJSON(json: any): CustomerUserAuthInfo {
    return CustomerUserAuthInfoFromJSONTyped(json, false);
}

export function CustomerUserAuthInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerUserAuthInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'username': !exists(json, 'username') ? undefined : json['username'],
        'password': !exists(json, 'password') ? undefined : json['password'],
    };
}

export function CustomerUserAuthInfoToJSON(value?: CustomerUserAuthInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'username': value.username,
        'password': value.password,
    };
}

