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
 * 
 * @export
 * @interface ChangeUserPasswordInfo
 */
export interface ChangeUserPasswordInfo {
    /**
     * 
     * @type {string}
     * @memberof ChangeUserPasswordInfo
     */
    newPassword?: string | null;
}

/**
 * Check if a given object implements the ChangeUserPasswordInfo interface.
 */
export function instanceOfChangeUserPasswordInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChangeUserPasswordInfoFromJSON(json: any): ChangeUserPasswordInfo {
    return ChangeUserPasswordInfoFromJSONTyped(json, false);
}

export function ChangeUserPasswordInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeUserPasswordInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'newPassword': !exists(json, 'newPassword') ? undefined : json['newPassword'],
    };
}

export function ChangeUserPasswordInfoToJSON(value?: ChangeUserPasswordInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'newPassword': value.newPassword,
    };
}

