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
import type { CustomAttribute } from './CustomAttribute';
import {
    CustomAttributeFromJSON,
    CustomAttributeFromJSONTyped,
    CustomAttributeToJSON,
} from './CustomAttribute';
import type { ShippingRate } from './ShippingRate';
import {
    ShippingRateFromJSON,
    ShippingRateFromJSONTyped,
    ShippingRateToJSON,
} from './ShippingRate';

/**
 * 
 * @export
 * @interface CarrierRatesResponse
 */
export interface CarrierRatesResponse {
    /**
     * 
     * @type {string}
     * @memberof CarrierRatesResponse
     */
    carrierId?: string | null;
    /**
     * 
     * @type {Array<ShippingRate>}
     * @memberof CarrierRatesResponse
     */
    shippingRates?: Array<ShippingRate> | null;
    /**
     * 
     * @type {Array<CustomAttribute>}
     * @memberof CarrierRatesResponse
     * @deprecated
     */
    customAttributes?: Array<CustomAttribute> | null;
}

/**
 * Check if a given object implements the CarrierRatesResponse interface.
 */
export function instanceOfCarrierRatesResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CarrierRatesResponseFromJSON(json: any): CarrierRatesResponse {
    return CarrierRatesResponseFromJSONTyped(json, false);
}

export function CarrierRatesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CarrierRatesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'carrierId': !exists(json, 'carrierId') ? undefined : json['carrierId'],
        'shippingRates': !exists(json, 'shippingRates') ? undefined : (json['shippingRates'] === null ? null : (json['shippingRates'] as Array<any>).map(ShippingRateFromJSON)),
        'customAttributes': !exists(json, 'customAttributes') ? undefined : (json['customAttributes'] === null ? null : (json['customAttributes'] as Array<any>).map(CustomAttributeFromJSON)),
    };
}

export function CarrierRatesResponseToJSON(value?: CarrierRatesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'carrierId': value.carrierId,
        'shippingRates': value.shippingRates === undefined ? undefined : (value.shippingRates === null ? null : (value.shippingRates as Array<any>).map(ShippingRateToJSON)),
        'customAttributes': value.customAttributes === undefined ? undefined : (value.customAttributes === null ? null : (value.customAttributes as Array<any>).map(CustomAttributeToJSON)),
    };
}

