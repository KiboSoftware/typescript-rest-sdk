/* tslint:disable */
/* eslint-disable */
/**
 * Api Documentation
 * Api Documentation
 *
 * The version of the OpenAPI document: 1.0
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
 * @interface ExclusionListEntryLocationCode
 */
export interface ExclusionListEntryLocationCode {
    /**
     * 
     * @type {string}
     * @memberof ExclusionListEntryLocationCode
     */
    locationCode?: string;
    /**
     * 
     * @type {number}
     * @memberof ExclusionListEntryLocationCode
     */
    orderItemID?: number;
}

/**
 * Check if a given object implements the ExclusionListEntryLocationCode interface.
 */
export function instanceOfExclusionListEntryLocationCode(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExclusionListEntryLocationCodeFromJSON(json: any): ExclusionListEntryLocationCode {
    return ExclusionListEntryLocationCodeFromJSONTyped(json, false);
}

export function ExclusionListEntryLocationCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExclusionListEntryLocationCode {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'locationCode': !exists(json, 'locationCode') ? undefined : json['locationCode'],
        'orderItemID': !exists(json, 'orderItemID') ? undefined : json['orderItemID'],
    };
}

export function ExclusionListEntryLocationCodeToJSON(value?: ExclusionListEntryLocationCode | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'locationCode': value.locationCode,
        'orderItemID': value.orderItemID,
    };
}

