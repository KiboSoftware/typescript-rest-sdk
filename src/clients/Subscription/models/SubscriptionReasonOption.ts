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
 * @interface SubscriptionReasonOption
 */
export interface SubscriptionReasonOption {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionReasonOption
     */
    reasonCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionReasonOption
     */
    name?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionReasonOption
     */
    needsMoreInfo?: boolean;
}

/**
 * Check if a given object implements the SubscriptionReasonOption interface.
 */
export function instanceOfSubscriptionReasonOption(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubscriptionReasonOptionFromJSON(json: any): SubscriptionReasonOption {
    return SubscriptionReasonOptionFromJSONTyped(json, false);
}

export function SubscriptionReasonOptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionReasonOption {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'reasonCode': !exists(json, 'reasonCode') ? undefined : json['reasonCode'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'needsMoreInfo': !exists(json, 'needsMoreInfo') ? undefined : json['needsMoreInfo'],
    };
}

export function SubscriptionReasonOptionToJSON(value?: SubscriptionReasonOption | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'reasonCode': value.reasonCode,
        'name': value.name,
        'needsMoreInfo': value.needsMoreInfo,
    };
}
