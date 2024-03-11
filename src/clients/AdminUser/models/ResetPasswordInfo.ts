/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Admin User Service
 * OpenAPI Spec for Kibo Admin User Service
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
 * Email address of the user who is requesting a new password.
 * @export
 * @interface ResetPasswordInfo
 */
export interface ResetPasswordInfo {
    /**
     * 
     * @type {string}
     * @memberof ResetPasswordInfo
     */
    emailAddress?: string | null;
}

/**
 * Check if a given object implements the ResetPasswordInfo interface.
 */
export function instanceOfResetPasswordInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResetPasswordInfoFromJSON(json: any): ResetPasswordInfo {
    return ResetPasswordInfoFromJSONTyped(json, false);
}

export function ResetPasswordInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResetPasswordInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'emailAddress': !exists(json, 'emailAddress') ? undefined : json['emailAddress'],
    };
}

export function ResetPasswordInfoToJSON(value?: ResetPasswordInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'emailAddress': value.emailAddress,
    };
}
