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
 * @interface FulfillmentServiceSubstituteReason
 */
export interface FulfillmentServiceSubstituteReason {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceSubstituteReason
     */
    moreInfo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceSubstituteReason
     */
    reasonCode?: string | null;
}

/**
 * Check if a given object implements the FulfillmentServiceSubstituteReason interface.
 */
export function instanceOfFulfillmentServiceSubstituteReason(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FulfillmentServiceSubstituteReasonFromJSON(json: any): FulfillmentServiceSubstituteReason {
    return FulfillmentServiceSubstituteReasonFromJSONTyped(json, false);
}

export function FulfillmentServiceSubstituteReasonFromJSONTyped(json: any, ignoreDiscriminator: boolean): FulfillmentServiceSubstituteReason {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'moreInfo': !exists(json, 'moreInfo') ? undefined : json['moreInfo'],
        'reasonCode': !exists(json, 'reasonCode') ? undefined : json['reasonCode'],
    };
}

export function FulfillmentServiceSubstituteReasonToJSON(value?: FulfillmentServiceSubstituteReason | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'moreInfo': value.moreInfo,
        'reasonCode': value.reasonCode,
    };
}
