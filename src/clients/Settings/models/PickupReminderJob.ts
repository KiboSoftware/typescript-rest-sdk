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
 * @interface PickupReminderJob
 */
export interface PickupReminderJob {
    /**
     * 
     * @type {boolean}
     * @memberof PickupReminderJob
     */
    isEnabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PickupReminderJob
     */
    interval?: number;
}

/**
 * Check if a given object implements the PickupReminderJob interface.
 */
export function instanceOfPickupReminderJob(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PickupReminderJobFromJSON(json: any): PickupReminderJob {
    return PickupReminderJobFromJSONTyped(json, false);
}

export function PickupReminderJobFromJSONTyped(json: any, ignoreDiscriminator: boolean): PickupReminderJob {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isEnabled': !exists(json, 'isEnabled') ? undefined : json['isEnabled'],
        'interval': !exists(json, 'interval') ? undefined : json['interval'],
    };
}

export function PickupReminderJobToJSON(value?: PickupReminderJob | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'isEnabled': value.isEnabled,
        'interval': value.interval,
    };
}

