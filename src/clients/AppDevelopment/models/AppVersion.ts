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
 * @interface AppVersion
 */
export interface AppVersion {
    /**
     * 
     * @type {number}
     * @memberof AppVersion
     */
    majorVersion?: number;
    /**
     * 
     * @type {number}
     * @memberof AppVersion
     */
    minorVersion?: number;
    /**
     * 
     * @type {number}
     * @memberof AppVersion
     */
    revision?: number;
}

/**
 * Check if a given object implements the AppVersion interface.
 */
export function instanceOfAppVersion(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppVersionFromJSON(json: any): AppVersion {
    return AppVersionFromJSONTyped(json, false);
}

export function AppVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppVersion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'majorVersion': !exists(json, 'majorVersion') ? undefined : json['majorVersion'],
        'minorVersion': !exists(json, 'minorVersion') ? undefined : json['minorVersion'],
        'revision': !exists(json, 'revision') ? undefined : json['revision'],
    };
}

export function AppVersionToJSON(value?: AppVersion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'majorVersion': value.majorVersion,
        'minorVersion': value.minorVersion,
        'revision': value.revision,
    };
}

