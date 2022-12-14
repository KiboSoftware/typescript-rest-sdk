/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Fulfillment Service
 * OpenAPI Spec for Kibo Fulfillment Service
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
 * @interface AppeasementReason
 */
export interface AppeasementReason {
    /**
     * 
     * @type {string}
     * @memberof AppeasementReason
     */
    moreInfo?: string;
    /**
     * 
     * @type {string}
     * @memberof AppeasementReason
     */
    reasonCode?: string;
}

/**
 * Check if a given object implements the AppeasementReason interface.
 */
export function instanceOfAppeasementReason(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppeasementReasonFromJSON(json: any): AppeasementReason {
    return AppeasementReasonFromJSONTyped(json, false);
}

export function AppeasementReasonFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppeasementReason {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'moreInfo': !exists(json, 'moreInfo') ? undefined : json['moreInfo'],
        'reasonCode': !exists(json, 'reasonCode') ? undefined : json['reasonCode'],
    };
}

export function AppeasementReasonToJSON(value?: AppeasementReason | null): any {
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

