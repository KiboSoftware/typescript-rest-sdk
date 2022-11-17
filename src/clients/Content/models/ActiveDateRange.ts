/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Content Service
 * OpenAPI Spec for Kibo Content Service
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
 * @interface ActiveDateRange
 */
export interface ActiveDateRange {
    /**
     * The beginning of the active date range of this document
     * @type {Date}
     * @memberof ActiveDateRange
     */
    startDate?: Date | null;
    /**
     * The end of the active date range for this document
     * @type {Date}
     * @memberof ActiveDateRange
     */
    endDate?: Date | null;
}

/**
 * Check if a given object implements the ActiveDateRange interface.
 */
export function instanceOfActiveDateRange(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ActiveDateRangeFromJSON(json: any): ActiveDateRange {
    return ActiveDateRangeFromJSONTyped(json, false);
}

export function ActiveDateRangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActiveDateRange {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'startDate': !exists(json, 'startDate') ? undefined : (json['startDate'] === null ? null : new Date(json['startDate'])),
        'endDate': !exists(json, 'endDate') ? undefined : (json['endDate'] === null ? null : new Date(json['endDate'])),
    };
}

export function ActiveDateRangeToJSON(value?: ActiveDateRange | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'startDate': value.startDate === undefined ? undefined : (value.startDate === null ? null : value.startDate.toISOString()),
        'endDate': value.endDate === undefined ? undefined : (value.endDate === null ? null : value.endDate.toISOString()),
    };
}
