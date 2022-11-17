/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Admin User Service
 * OpenAPI Spec for Kibo Admin User Service
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
 * Email address of the user who is requesting a new password.
 * @export
 * @interface AdminUserResetPasswordInfo
 */
export interface AdminUserResetPasswordInfo {
    /**
     * 
     * @type {string}
     * @memberof AdminUserResetPasswordInfo
     */
    emailAddress?: string | null;
}

/**
 * Check if a given object implements the AdminUserResetPasswordInfo interface.
 */
export function instanceOfAdminUserResetPasswordInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AdminUserResetPasswordInfoFromJSON(json: any): AdminUserResetPasswordInfo {
    return AdminUserResetPasswordInfoFromJSONTyped(json, false);
}

export function AdminUserResetPasswordInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdminUserResetPasswordInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'emailAddress': !exists(json, 'emailAddress') ? undefined : json['emailAddress'],
    };
}

export function AdminUserResetPasswordInfoToJSON(value?: AdminUserResetPasswordInfo | null): any {
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
