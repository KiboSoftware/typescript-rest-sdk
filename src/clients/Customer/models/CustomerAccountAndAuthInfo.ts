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
import type { CustomerAccount } from './CustomerAccount';
import {
    CustomerAccountFromJSON,
    CustomerAccountFromJSONTyped,
    CustomerAccountToJSON,
} from './CustomerAccount';

/**
 * 
 * @export
 * @interface CustomerAccountAndAuthInfo
 */
export interface CustomerAccountAndAuthInfo {
    /**
     * 
     * @type {CustomerAccount}
     * @memberof CustomerAccountAndAuthInfo
     */
    account?: CustomerAccount;
    /**
     * 
     * @type {string}
     * @memberof CustomerAccountAndAuthInfo
     */
    password?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerAccountAndAuthInfo
     */
    externalPassword?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerAccountAndAuthInfo
     */
    isImport?: boolean;
}

/**
 * Check if a given object implements the CustomerAccountAndAuthInfo interface.
 */
export function instanceOfCustomerAccountAndAuthInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerAccountAndAuthInfoFromJSON(json: any): CustomerAccountAndAuthInfo {
    return CustomerAccountAndAuthInfoFromJSONTyped(json, false);
}

export function CustomerAccountAndAuthInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerAccountAndAuthInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'account': !exists(json, 'account') ? undefined : CustomerAccountFromJSON(json['account']),
        'password': !exists(json, 'password') ? undefined : json['password'],
        'externalPassword': !exists(json, 'externalPassword') ? undefined : json['externalPassword'],
        'isImport': !exists(json, 'isImport') ? undefined : json['isImport'],
    };
}

export function CustomerAccountAndAuthInfoToJSON(value?: CustomerAccountAndAuthInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account': CustomerAccountToJSON(value.account),
        'password': value.password,
        'externalPassword': value.externalPassword,
        'isImport': value.isImport,
    };
}

