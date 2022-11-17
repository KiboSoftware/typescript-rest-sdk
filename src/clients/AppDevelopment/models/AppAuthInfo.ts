/* tslint:disable */
/* eslint-disable */
/**
 * Kibo AppDev Service
 * OpenAPI Spec for Kibo AppDev Service
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
 * @interface AppAuthInfo
 */
export interface AppAuthInfo {
    /**
     * 
     * @type {string}
     * @memberof AppAuthInfo
     */
    applicationId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppAuthInfo
     */
    sharedSecret?: string | null;
}

/**
 * Check if a given object implements the AppAuthInfo interface.
 */
export function instanceOfAppAuthInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppAuthInfoFromJSON(json: any): AppAuthInfo {
    return AppAuthInfoFromJSONTyped(json, false);
}

export function AppAuthInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppAuthInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'applicationId': !exists(json, 'applicationId') ? undefined : json['applicationId'],
        'sharedSecret': !exists(json, 'sharedSecret') ? undefined : json['sharedSecret'],
    };
}

export function AppAuthInfoToJSON(value?: AppAuthInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'applicationId': value.applicationId,
        'sharedSecret': value.sharedSecret,
    };
}

