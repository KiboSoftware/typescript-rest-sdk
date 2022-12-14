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
 * @interface CustomerLoginInfo
 */
export interface CustomerLoginInfo {
    /**
     * 
     * @type {string}
     * @memberof CustomerLoginInfo
     */
    emailAddress?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerLoginInfo
     */
    username?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerLoginInfo
     */
    password?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerLoginInfo
     */
    externalPassword?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerLoginInfo
     */
    isImport?: boolean | null;
}

/**
 * Check if a given object implements the CustomerLoginInfo interface.
 */
export function instanceOfCustomerLoginInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerLoginInfoFromJSON(json: any): CustomerLoginInfo {
    return CustomerLoginInfoFromJSONTyped(json, false);
}

export function CustomerLoginInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerLoginInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'emailAddress': !exists(json, 'emailAddress') ? undefined : json['emailAddress'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'externalPassword': !exists(json, 'externalPassword') ? undefined : json['externalPassword'],
        'isImport': !exists(json, 'isImport') ? undefined : json['isImport'],
    };
}

export function CustomerLoginInfoToJSON(value?: CustomerLoginInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'emailAddress': value.emailAddress,
        'username': value.username,
        'password': value.password,
        'externalPassword': value.externalPassword,
        'isImport': value.isImport,
    };
}

