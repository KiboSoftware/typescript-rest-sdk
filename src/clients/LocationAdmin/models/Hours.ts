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
 * @interface Hours
 */
export interface Hours {
    /**
     * 
     * @type {string}
     * @memberof Hours
     */
    label?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Hours
     */
    openTime?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Hours
     */
    closeTime?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof Hours
     */
    isClosed?: boolean;
}

/**
 * Check if a given object implements the Hours interface.
 */
export function instanceOfHours(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HoursFromJSON(json: any): Hours {
    return HoursFromJSONTyped(json, false);
}

export function HoursFromJSONTyped(json: any, ignoreDiscriminator: boolean): Hours {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'label': !exists(json, 'label') ? undefined : json['label'],
        'openTime': !exists(json, 'openTime') ? undefined : json['openTime'],
        'closeTime': !exists(json, 'closeTime') ? undefined : json['closeTime'],
        'isClosed': !exists(json, 'isClosed') ? undefined : json['isClosed'],
    };
}

export function HoursToJSON(value?: Hours | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'label': value.label,
        'openTime': value.openTime,
        'closeTime': value.closeTime,
        'isClosed': value.isClosed,
    };
}

