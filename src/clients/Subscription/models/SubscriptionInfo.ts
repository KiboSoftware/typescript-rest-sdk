/* tslint:disable */
/* eslint-disable */
/**
 * Kibo SubscriptionRuntime Service
 * OpenAPI Spec for Kibo SubscriptionRuntime Service
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Frequency } from './Frequency';
import {
    FrequencyFromJSON,
    FrequencyFromJSONTyped,
    FrequencyToJSON,
} from './Frequency';
import type { Trial } from './Trial';
import {
    TrialFromJSON,
    TrialFromJSONTyped,
    TrialToJSON,
} from './Trial';

/**
 * 
 * @export
 * @interface SubscriptionInfo
 */
export interface SubscriptionInfo {
    /**
     * Indicates commerce item is subscribed or not.
     * @type {boolean}
     * @memberof SubscriptionInfo
     */
    required?: boolean | null;
    /**
     * 
     * @type {Frequency}
     * @memberof SubscriptionInfo
     */
    frequency?: Frequency;
    /**
     * 
     * @type {Trial}
     * @memberof SubscriptionInfo
     */
    trial?: Trial;
}

/**
 * Check if a given object implements the SubscriptionInfo interface.
 */
export function instanceOfSubscriptionInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubscriptionInfoFromJSON(json: any): SubscriptionInfo {
    return SubscriptionInfoFromJSONTyped(json, false);
}

export function SubscriptionInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'required': !exists(json, 'required') ? undefined : json['required'],
        'frequency': !exists(json, 'frequency') ? undefined : FrequencyFromJSON(json['frequency']),
        'trial': !exists(json, 'trial') ? undefined : TrialFromJSON(json['trial']),
    };
}

export function SubscriptionInfoToJSON(value?: SubscriptionInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'required': value.required,
        'frequency': FrequencyToJSON(value.frequency),
        'trial': TrialToJSON(value.trial),
    };
}
