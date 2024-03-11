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
import type { Address } from './Address';
import {
    AddressFromJSON,
    AddressFromJSONTyped,
    AddressToJSON,
} from './Address';

/**
 * 
 * @export
 * @interface PricingTaxContext
 */
export interface PricingTaxContext {
    /**
     * 
     * @type {string}
     * @memberof PricingTaxContext
     */
    taxContextId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PricingTaxContext
     */
    customerId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PricingTaxContext
     */
    taxExemptId?: string | null;
    /**
     * 
     * @type {Address}
     * @memberof PricingTaxContext
     */
    originAddress?: Address;
    /**
     * 
     * @type {Address}
     * @memberof PricingTaxContext
     */
    destinationAddress?: Address;
}

/**
 * Check if a given object implements the PricingTaxContext interface.
 */
export function instanceOfPricingTaxContext(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PricingTaxContextFromJSON(json: any): PricingTaxContext {
    return PricingTaxContextFromJSONTyped(json, false);
}

export function PricingTaxContextFromJSONTyped(json: any, ignoreDiscriminator: boolean): PricingTaxContext {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'taxContextId': !exists(json, 'taxContextId') ? undefined : json['taxContextId'],
        'customerId': !exists(json, 'customerId') ? undefined : json['customerId'],
        'taxExemptId': !exists(json, 'taxExemptId') ? undefined : json['taxExemptId'],
        'originAddress': !exists(json, 'originAddress') ? undefined : AddressFromJSON(json['originAddress']),
        'destinationAddress': !exists(json, 'destinationAddress') ? undefined : AddressFromJSON(json['destinationAddress']),
    };
}

export function PricingTaxContextToJSON(value?: PricingTaxContext | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'taxContextId': value.taxContextId,
        'customerId': value.customerId,
        'taxExemptId': value.taxExemptId,
        'originAddress': AddressToJSON(value.originAddress),
        'destinationAddress': AddressToJSON(value.destinationAddress),
    };
}
