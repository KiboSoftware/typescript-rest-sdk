/* tslint:disable */
/* eslint-disable */
/**
 * Kibo SiteSettings Service
 * OpenAPI Spec for Kibo SiteSettings Service
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
 * @interface CacheSettings
 */
export interface CacheSettings {
    /**
     * 
     * @type {string}
     * @memberof CacheSettings
     */
    cdnCacheBustKey?: string | null;
}

/**
 * Check if a given object implements the CacheSettings interface.
 */
export function instanceOfCacheSettings(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CacheSettingsFromJSON(json: any): CacheSettings {
    return CacheSettingsFromJSONTyped(json, false);
}

export function CacheSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CacheSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cdnCacheBustKey': !exists(json, 'cdnCacheBustKey') ? undefined : json['cdnCacheBustKey'],
    };
}

export function CacheSettingsToJSON(value?: CacheSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cdnCacheBustKey': value.cdnCacheBustKey,
    };
}

