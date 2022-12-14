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
 * @interface TaskReason
 */
export interface TaskReason {
    /**
     * 
     * @type {string}
     * @memberof TaskReason
     */
    moreInfo?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskReason
     */
    reasonCode?: string;
}

/**
 * Check if a given object implements the TaskReason interface.
 */
export function instanceOfTaskReason(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TaskReasonFromJSON(json: any): TaskReason {
    return TaskReasonFromJSONTyped(json, false);
}

export function TaskReasonFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskReason {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'moreInfo': !exists(json, 'moreInfo') ? undefined : json['moreInfo'],
        'reasonCode': !exists(json, 'reasonCode') ? undefined : json['reasonCode'],
    };
}

export function TaskReasonToJSON(value?: TaskReason | null): any {
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

