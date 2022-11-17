/* tslint:disable */
/* eslint-disable */
/**
 * Kibo SiteSettings Service
 * OpenAPI Spec for Kibo SiteSettings Service
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
 * @interface CreateShipmentsOnPendingReview
 */
export interface CreateShipmentsOnPendingReview {
    /**
     * 
     * @type {boolean}
     * @memberof CreateShipmentsOnPendingReview
     */
    isEnabled?: boolean;
}

/**
 * Check if a given object implements the CreateShipmentsOnPendingReview interface.
 */
export function instanceOfCreateShipmentsOnPendingReview(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateShipmentsOnPendingReviewFromJSON(json: any): CreateShipmentsOnPendingReview {
    return CreateShipmentsOnPendingReviewFromJSONTyped(json, false);
}

export function CreateShipmentsOnPendingReviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateShipmentsOnPendingReview {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isEnabled': !exists(json, 'isEnabled') ? undefined : json['isEnabled'],
    };
}

export function CreateShipmentsOnPendingReviewToJSON(value?: CreateShipmentsOnPendingReview | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'isEnabled': value.isEnabled,
    };
}
