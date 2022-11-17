/* tslint:disable */
/* eslint-disable */
/**
 * Kibo CommerceRuntime Service
 * OpenAPI Spec for Kibo CommerceRuntime Service
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
 * @interface Measurement
 */
export interface Measurement {
    /**
     * 
     * @type {string}
     * @memberof Measurement
     */
    unit?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Measurement
     */
    value?: number | null;
}

/**
 * Check if a given object implements the Measurement interface.
 */
export function instanceOfMeasurement(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MeasurementFromJSON(json: any): Measurement {
    return MeasurementFromJSONTyped(json, false);
}

export function MeasurementFromJSONTyped(json: any, ignoreDiscriminator: boolean): Measurement {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'unit': !exists(json, 'unit') ? undefined : json['unit'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function MeasurementToJSON(value?: Measurement | null): any {
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

