/* tslint:disable */
/* eslint-disable */
/**
 * Kibo CommerceRuntime Service
 * OpenAPI Spec for Kibo CommerceRuntime Service
 *
 * The version of the OpenAPI document: 1.0.0
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
 * @interface CommerceRuntimeCanceledReason
 */
export interface CommerceRuntimeCanceledReason {
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeCanceledReason
     */
    reasonCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeCanceledReason
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeCanceledReason
     */
    moreInfo?: string | null;
}

/**
 * Check if a given object implements the CommerceRuntimeCanceledReason interface.
 */
export function instanceOfCommerceRuntimeCanceledReason(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommerceRuntimeCanceledReasonFromJSON(json: any): CommerceRuntimeCanceledReason {
    return CommerceRuntimeCanceledReasonFromJSONTyped(json, false);
}

export function CommerceRuntimeCanceledReasonFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommerceRuntimeCanceledReason {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'reasonCode': !exists(json, 'reasonCode') ? undefined : json['reasonCode'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'moreInfo': !exists(json, 'moreInfo') ? undefined : json['moreInfo'],
    };
}

export function CommerceRuntimeCanceledReasonToJSON(value?: CommerceRuntimeCanceledReason | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'reasonCode': value.reasonCode,
        'description': value.description,
        'moreInfo': value.moreInfo,
    };
}

