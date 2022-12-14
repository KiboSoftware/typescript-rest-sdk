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
import type { AutoCaptureJob } from './AutoCaptureJob';
import {
    AutoCaptureJobFromJSON,
    AutoCaptureJobFromJSONTyped,
    AutoCaptureJobToJSON,
} from './AutoCaptureJob';
import type { ForceCaptureJob } from './ForceCaptureJob';
import {
    ForceCaptureJobFromJSON,
    ForceCaptureJobFromJSONTyped,
    ForceCaptureJobToJSON,
} from './ForceCaptureJob';

/**
 * Contains settings for the auto-capture payment feature.
 * @export
 * @interface OrderJobSettings
 */
export interface OrderJobSettings {
    /**
     * 
     * @type {AutoCaptureJob}
     * @memberof OrderJobSettings
     */
    autoCaptureJob?: AutoCaptureJob;
    /**
     * 
     * @type {ForceCaptureJob}
     * @memberof OrderJobSettings
     */
    forceCaptureJob?: ForceCaptureJob;
}

/**
 * Check if a given object implements the OrderJobSettings interface.
 */
export function instanceOfOrderJobSettings(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrderJobSettingsFromJSON(json: any): OrderJobSettings {
    return OrderJobSettingsFromJSONTyped(json, false);
}

export function OrderJobSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderJobSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'autoCaptureJob': !exists(json, 'autoCaptureJob') ? undefined : AutoCaptureJobFromJSON(json['autoCaptureJob']),
        'forceCaptureJob': !exists(json, 'forceCaptureJob') ? undefined : ForceCaptureJobFromJSON(json['forceCaptureJob']),
    };
}

export function OrderJobSettingsToJSON(value?: OrderJobSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'autoCaptureJob': AutoCaptureJobToJSON(value.autoCaptureJob),
        'forceCaptureJob': ForceCaptureJobToJSON(value.forceCaptureJob),
    };
}

