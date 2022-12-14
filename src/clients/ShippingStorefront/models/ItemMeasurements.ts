/* tslint:disable */
/* eslint-disable */
/**
 * Kibo ShippingRuntime Service
 * OpenAPI Spec for Kibo ShippingRuntime Service
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
 * 
 * @export
 * @interface ItemMeasurements
 */
export interface ItemMeasurements {
    /**
     * 
     * @type {Measurement}
     * @memberof ItemMeasurements
     */
    height?: Measurement;
    /**
     * 
     * @type {Measurement}
     * @memberof ItemMeasurements
     */
    width?: Measurement;
    /**
     * 
     * @type {Measurement}
     * @memberof ItemMeasurements
     */
    length?: Measurement;
    /**
     * 
     * @type {Measurement}
     * @memberof ItemMeasurements
     */
    weight?: Measurement;
    /**
     * Not exposed publicly
     * @type {number}
     * @memberof ItemMeasurements
     */
    girth?: number | null;
}

/**
 * Check if a given object implements the ItemMeasurements interface.
 */
export function instanceOfItemMeasurements(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ItemMeasurementsFromJSON(json: any): ItemMeasurements {
    return ItemMeasurementsFromJSONTyped(json, false);
}

export function ItemMeasurementsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemMeasurements {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'height': !exists(json, 'height') ? undefined : MeasurementFromJSON(json['height']),
        'width': !exists(json, 'width') ? undefined : MeasurementFromJSON(json['width']),
        'length': !exists(json, 'length') ? undefined : MeasurementFromJSON(json['length']),
        'weight': !exists(json, 'weight') ? undefined : MeasurementFromJSON(json['weight']),
        'girth': !exists(json, 'girth') ? undefined : json['girth'],
    };
}

export function ItemMeasurementsToJSON(value?: ItemMeasurements | null): any {
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
        'girth': value.girth,
    };
}

