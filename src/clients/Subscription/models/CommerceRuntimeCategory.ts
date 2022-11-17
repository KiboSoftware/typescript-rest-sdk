/* tslint:disable */
/* eslint-disable */
/**
 * Kibo SubscriptionRuntime Service
 * OpenAPI Spec for Kibo SubscriptionRuntime Service
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
 * Categories to which the product belongs. Discounts can apply to categories where any product in the category is discounted.
 * @export
 * @interface CommerceRuntimeCategory
 */
export interface CommerceRuntimeCategory {
    /**
     * Unique identifier of the category. System-supplied and read-only.
     * @type {number}
     * @memberof CommerceRuntimeCategory
     */
    id?: number | null;
    /**
     * 
     * @type {CommerceRuntimeCategory}
     * @memberof CommerceRuntimeCategory
     */
    parent?: CommerceRuntimeCategory;
}

/**
 * Check if a given object implements the CommerceRuntimeCategory interface.
 */
export function instanceOfCommerceRuntimeCategory(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommerceRuntimeCategoryFromJSON(json: any): CommerceRuntimeCategory {
    return CommerceRuntimeCategoryFromJSONTyped(json, false);
}

export function CommerceRuntimeCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommerceRuntimeCategory {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'parent': !exists(json, 'parent') ? undefined : CommerceRuntimeCategoryFromJSON(json['parent']),
    };
}

export function CommerceRuntimeCategoryToJSON(value?: CommerceRuntimeCategory | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'parent': CommerceRuntimeCategoryToJSON(value.parent),
    };
}

