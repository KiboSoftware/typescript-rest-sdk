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
 * @interface CommerceRuntimeAppeasementReason
 */
export interface CommerceRuntimeAppeasementReason {
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAppeasementReason
     */
    reasonCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAppeasementReason
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAppeasementReason
     */
    moreInfo?: string | null;
}

/**
 * Check if a given object implements the CommerceRuntimeAppeasementReason interface.
 */
export function instanceOfCommerceRuntimeAppeasementReason(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommerceRuntimeAppeasementReasonFromJSON(json: any): CommerceRuntimeAppeasementReason {
    return CommerceRuntimeAppeasementReasonFromJSONTyped(json, false);
}

export function CommerceRuntimeAppeasementReasonFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommerceRuntimeAppeasementReason {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'reasonCode': !exists(json, 'reasonCode') ? undefined : json['reasonCode'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'moreInfo': !exists(json, 'moreInfo') ? undefined : json['moreInfo'],
    };
}

export function CommerceRuntimeAppeasementReasonToJSON(value?: CommerceRuntimeAppeasementReason | null): any {
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

