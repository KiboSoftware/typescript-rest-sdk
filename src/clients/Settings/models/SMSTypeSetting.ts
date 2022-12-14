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
 * @interface SMSTypeSetting
 */
export interface SMSTypeSetting {
    /**
     * 
     * @type {string}
     * @memberof SMSTypeSetting
     */
    id?: string | null;
}

/**
 * Check if a given object implements the SMSTypeSetting interface.
 */
export function instanceOfSMSTypeSetting(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SMSTypeSettingFromJSON(json: any): SMSTypeSetting {
    return SMSTypeSettingFromJSONTyped(json, false);
}

export function SMSTypeSettingFromJSONTyped(json: any, ignoreDiscriminator: boolean): SMSTypeSetting {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function SMSTypeSettingToJSON(value?: SMSTypeSetting | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
    };
}

