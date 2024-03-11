/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Runtime Services
 * OpenAPI Spec for Kibo Catalog Runtime Services
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
 * Discount Selections
 * @export
 * @interface DiscountSelections
 */
export interface DiscountSelections {
    /**
     * Discount Ids
     * @type {Array<number>}
     * @memberof DiscountSelections
     */
    discountIds?: Array<number> | null;
}

/**
 * Check if a given object implements the DiscountSelections interface.
 */
export function instanceOfDiscountSelections(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DiscountSelectionsFromJSON(json: any): DiscountSelections {
    return DiscountSelectionsFromJSONTyped(json, false);
}

export function DiscountSelectionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiscountSelections {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'discountIds': !exists(json, 'discountIds') ? undefined : json['discountIds'],
    };
}

export function DiscountSelectionsToJSON(value?: DiscountSelections | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'discountIds': value.discountIds,
    };
}
