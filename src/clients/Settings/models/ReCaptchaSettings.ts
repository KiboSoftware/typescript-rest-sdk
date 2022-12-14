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
 * @interface ReCaptchaSettings
 */
export interface ReCaptchaSettings {
    /**
     * 
     * @type {string}
     * @memberof ReCaptchaSettings
     */
    siteKey?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ReCaptchaSettings
     */
    validScore?: number;
    /**
     * 
     * @type {string}
     * @memberof ReCaptchaSettings
     */
    secret?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReCaptchaSettings
     */
    actions?: Array<string> | null;
}

/**
 * Check if a given object implements the ReCaptchaSettings interface.
 */
export function instanceOfReCaptchaSettings(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReCaptchaSettingsFromJSON(json: any): ReCaptchaSettings {
    return ReCaptchaSettingsFromJSONTyped(json, false);
}

export function ReCaptchaSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReCaptchaSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'siteKey': !exists(json, 'siteKey') ? undefined : json['siteKey'],
        'validScore': !exists(json, 'validScore') ? undefined : json['validScore'],
        'secret': !exists(json, 'secret') ? undefined : json['secret'],
        'actions': !exists(json, 'actions') ? undefined : json['actions'],
    };
}

export function ReCaptchaSettingsToJSON(value?: ReCaptchaSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'siteKey': value.siteKey,
        'validScore': value.validScore,
        'secret': value.secret,
        'actions': value.actions,
    };
}

