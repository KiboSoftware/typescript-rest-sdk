/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Admin Services
 * OpenAPI Spec for Kibo Catalog Admin Services
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
 * Individual update action result
 * @export
 * @interface QuickEditResult
 */
export interface QuickEditResult {
    /**
     * The unique resouce identifier
     * @type {string}
     * @memberof QuickEditResult
     */
    resourceId?: string | null;
    /**
     * true if the patch succeeded.
     * @type {boolean}
     * @memberof QuickEditResult
     */
    success?: boolean;
    /**
     * Error message if any.
     * @type {string}
     * @memberof QuickEditResult
     */
    message?: string | null;
}

/**
 * Check if a given object implements the QuickEditResult interface.
 */
export function instanceOfQuickEditResult(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function QuickEditResultFromJSON(json: any): QuickEditResult {
    return QuickEditResultFromJSONTyped(json, false);
}

export function QuickEditResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuickEditResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'resourceId': !exists(json, 'resourceId') ? undefined : json['resourceId'],
        'success': !exists(json, 'success') ? undefined : json['success'],
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function QuickEditResultToJSON(value?: QuickEditResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'resourceId': value.resourceId,
        'success': value.success,
        'message': value.message,
    };
}

