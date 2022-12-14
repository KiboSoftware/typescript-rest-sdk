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
import type { Measurement } from './Measurement';
import {
    MeasurementFromJSON,
    MeasurementFromJSONTyped,
    MeasurementToJSON,
} from './Measurement';

/**
 * Physical dimensions of the package required to ship the product and its weight.
 * @export
 * @interface PackageMeasurements
 */
export interface PackageMeasurements {
    /**
     * 
     * @type {Measurement}
     * @memberof PackageMeasurements
     */
    height?: Measurement;
    /**
     * 
     * @type {Measurement}
     * @memberof PackageMeasurements
     */
    width?: Measurement;
    /**
     * 
     * @type {Measurement}
     * @memberof PackageMeasurements
     */
    length?: Measurement;
    /**
     * 
     * @type {Measurement}
     * @memberof PackageMeasurements
     */
    weight?: Measurement;
}

/**
 * Check if a given object implements the PackageMeasurements interface.
 */
export function instanceOfPackageMeasurements(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PackageMeasurementsFromJSON(json: any): PackageMeasurements {
    return PackageMeasurementsFromJSONTyped(json, false);
}

export function PackageMeasurementsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PackageMeasurements {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'height': !exists(json, 'height') ? undefined : MeasurementFromJSON(json['height']),
        'width': !exists(json, 'width') ? undefined : MeasurementFromJSON(json['width']),
        'length': !exists(json, 'length') ? undefined : MeasurementFromJSON(json['length']),
        'weight': !exists(json, 'weight') ? undefined : MeasurementFromJSON(json['weight']),
    };
}

export function PackageMeasurementsToJSON(value?: PackageMeasurements | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'height': MeasurementToJSON(value.height),
        'width': MeasurementToJSON(value.width),
        'length': MeasurementToJSON(value.length),
        'weight': MeasurementToJSON(value.weight),
    };
}

