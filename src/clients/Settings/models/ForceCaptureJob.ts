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
 * Contains settings for when payments should be auto-captured regardless of shipment status.
 * @export
 * @interface ForceCaptureJob
 */
export interface ForceCaptureJob {
    /**
     * 
     * @type {number}
     * @memberof ForceCaptureJob
     */
    captureAfterDays?: number;
    /**
     * Specifies whether this job should run.
     * @type {boolean}
     * @memberof ForceCaptureJob
     */
    isEnabled?: boolean;
    /**
     * How often this job should run in minutes.
     * @type {number}
     * @memberof ForceCaptureJob
     */
    interval?: number;
}

/**
 * Check if a given object implements the ForceCaptureJob interface.
 */
export function instanceOfForceCaptureJob(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ForceCaptureJobFromJSON(json: any): ForceCaptureJob {
    return ForceCaptureJobFromJSONTyped(json, false);
}

export function ForceCaptureJobFromJSONTyped(json: any, ignoreDiscriminator: boolean): ForceCaptureJob {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'captureAfterDays': !exists(json, 'captureAfterDays') ? undefined : json['captureAfterDays'],
        'isEnabled': !exists(json, 'isEnabled') ? undefined : json['isEnabled'],
        'interval': !exists(json, 'interval') ? undefined : json['interval'],
    };
}

export function ForceCaptureJobToJSON(value?: ForceCaptureJob | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'captureAfterDays': value.captureAfterDays,
        'isEnabled': value.isEnabled,
        'interval': value.interval,
    };
}

