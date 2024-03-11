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
 * 
 * @export
 * @interface ProductPricingBehaviorInfo
 */
export interface ProductPricingBehaviorInfo {
    /**
     * 
     * @type {boolean}
     * @memberof ProductPricingBehaviorInfo
     */
    discountsRestricted?: boolean | null;
    /**
     * 
     * @type {Date}
     * @memberof ProductPricingBehaviorInfo
     */
    discountsRestrictedStartDate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof ProductPricingBehaviorInfo
     */
    discountsRestrictedEndDate?: Date | null;
}

/**
 * Check if a given object implements the ProductPricingBehaviorInfo interface.
 */
export function instanceOfProductPricingBehaviorInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductPricingBehaviorInfoFromJSON(json: any): ProductPricingBehaviorInfo {
    return ProductPricingBehaviorInfoFromJSONTyped(json, false);
}

export function ProductPricingBehaviorInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductPricingBehaviorInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'discountsRestricted': !exists(json, 'discountsRestricted') ? undefined : json['discountsRestricted'],
        'discountsRestrictedStartDate': !exists(json, 'discountsRestrictedStartDate') ? undefined : (json['discountsRestrictedStartDate'] === null ? null : new Date(json['discountsRestrictedStartDate'])),
        'discountsRestrictedEndDate': !exists(json, 'discountsRestrictedEndDate') ? undefined : (json['discountsRestrictedEndDate'] === null ? null : new Date(json['discountsRestrictedEndDate'])),
    };
}

export function ProductPricingBehaviorInfoToJSON(value?: ProductPricingBehaviorInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'discountsRestricted': value.discountsRestricted,
        'discountsRestrictedStartDate': value.discountsRestrictedStartDate === undefined ? undefined : (value.discountsRestrictedStartDate === null ? null : value.discountsRestrictedStartDate.toISOString()),
        'discountsRestrictedEndDate': value.discountsRestrictedEndDate === undefined ? undefined : (value.discountsRestrictedEndDate === null ? null : value.discountsRestrictedEndDate.toISOString()),
    };
}
