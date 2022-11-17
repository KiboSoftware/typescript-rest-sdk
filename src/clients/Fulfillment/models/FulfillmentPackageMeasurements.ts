/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Fulfillment Service
 * OpenAPI Spec for Kibo Fulfillment Service
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FulfillmentMeasurement } from './FulfillmentMeasurement';
import {
    FulfillmentMeasurementFromJSON,
    FulfillmentMeasurementFromJSONTyped,
    FulfillmentMeasurementToJSON,
} from './FulfillmentMeasurement';

/**
 * 
 * @export
 * @interface FulfillmentPackageMeasurements
 */
export interface FulfillmentPackageMeasurements {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentPackageMeasurements
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentMeasurement}
     * @memberof FulfillmentPackageMeasurements
     */
    height?: FulfillmentMeasurement;
    /**
     * 
     * @type {FulfillmentMeasurement}
     * @memberof FulfillmentPackageMeasurements
     */
    length?: FulfillmentMeasurement;
    /**
     * 
     * @type {FulfillmentMeasurement}
     * @memberof FulfillmentPackageMeasurements
     */
    weight?: FulfillmentMeasurement;
    /**
     * 
     * @type {FulfillmentMeasurement}
     * @memberof FulfillmentPackageMeasurements
     */
    width?: FulfillmentMeasurement;
}

/**
 * Check if a given object implements the FulfillmentPackageMeasurements interface.
 */
export function instanceOfFulfillmentPackageMeasurements(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FulfillmentPackageMeasurementsFromJSON(json: any): FulfillmentPackageMeasurements {
    return FulfillmentPackageMeasurementsFromJSONTyped(json, false);
}

export function FulfillmentPackageMeasurementsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FulfillmentPackageMeasurements {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attributes': !exists(json, 'attributes') ? undefined : json['attributes'],
        'height': !exists(json, 'height') ? undefined : FulfillmentMeasurementFromJSON(json['height']),
        'length': !exists(json, 'length') ? undefined : FulfillmentMeasurementFromJSON(json['length']),
        'weight': !exists(json, 'weight') ? undefined : FulfillmentMeasurementFromJSON(json['weight']),
        'width': !exists(json, 'width') ? undefined : FulfillmentMeasurementFromJSON(json['width']),
    };
}

export function FulfillmentPackageMeasurementsToJSON(value?: FulfillmentPackageMeasurements | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attributes': value.attributes,
        'height': FulfillmentMeasurementToJSON(value.height),
        'length': FulfillmentMeasurementToJSON(value.length),
        'weight': FulfillmentMeasurementToJSON(value.weight),
        'width': FulfillmentMeasurementToJSON(value.width),
    };
}

