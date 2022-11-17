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
/**
 * 
 * @export
 * @interface Frequency
 */
export interface Frequency {
    /**
     * 
     * @type {string}
     * @memberof Frequency
     */
    unit?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Frequency
     */
    value?: number;
}

/**
 * Check if a given object implements the Frequency interface.
 */
export function instanceOfFrequency(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FrequencyFromJSON(json: any): Frequency {
    return FrequencyFromJSONTyped(json, false);
}

export function FrequencyFromJSONTyped(json: any, ignoreDiscriminator: boolean): Frequency {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'unit': !exists(json, 'unit') ? undefined : json['unit'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function FrequencyToJSON(value?: Frequency | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'unit': value.unit,
        'value': value.value,
    };
}

