/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Customer Service
 * OpenAPI Spec for Kibo Customer Service
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
 * @interface CustomerResetPasswordInfo
 */
export interface CustomerResetPasswordInfo {
    /**
     * 
     * @type {string}
     * @memberof CustomerResetPasswordInfo
     */
    emailAddress?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerResetPasswordInfo
     */
    userName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerResetPasswordInfo
     */
    customerSetCode?: string | null;
}

/**
 * Check if a given object implements the CustomerResetPasswordInfo interface.
 */
export function instanceOfCustomerResetPasswordInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerResetPasswordInfoFromJSON(json: any): CustomerResetPasswordInfo {
    return CustomerResetPasswordInfoFromJSONTyped(json, false);
}

export function CustomerResetPasswordInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerResetPasswordInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'emailAddress': !exists(json, 'emailAddress') ? undefined : json['emailAddress'],
        'userName': !exists(json, 'userName') ? undefined : json['userName'],
        'customerSetCode': !exists(json, 'customerSetCode') ? undefined : json['customerSetCode'],
    };
}

export function CustomerResetPasswordInfoToJSON(value?: CustomerResetPasswordInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'emailAddress': value.emailAddress,
        'userName': value.userName,
        'customerSetCode': value.customerSetCode,
    };
}

