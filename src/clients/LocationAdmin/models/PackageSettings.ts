/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Location Admin Service
 * OpenAPI Spec for Kibo Location Admin Service
 *
 * The version of the OpenAPI document: v1_admin
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
 * @interface PackageSettings
 */
export interface PackageSettings {
    /**
     * 
     * @type {string}
     * @memberof PackageSettings
     */
    unitType?: string | null;
}

/**
 * Check if a given object implements the PackageSettings interface.
 */
export function instanceOfPackageSettings(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PackageSettingsFromJSON(json: any): PackageSettings {
    return PackageSettingsFromJSONTyped(json, false);
}

export function PackageSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PackageSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'unitType': !exists(json, 'unitType') ? undefined : json['unitType'],
    };
}

export function PackageSettingsToJSON(value?: PackageSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'unitType': value.unitType,
    };
}

