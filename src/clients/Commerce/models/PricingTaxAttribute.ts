/* tslint:disable */
/* eslint-disable */
/**
 * Kibo CommerceRuntime Service
 * OpenAPI Spec for Kibo CommerceRuntime Service
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
 * @interface PricingTaxAttribute
 */
export interface PricingTaxAttribute {
    /**
     * 
     * @type {string}
     * @memberof PricingTaxAttribute
     */
    fullyQualifiedName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PricingTaxAttribute
     */
    attributeDefinitionId?: number | null;
    /**
     * 
     * @type {Array<any>}
     * @memberof PricingTaxAttribute
     */
    values?: Array<any> | null;
}

/**
 * Check if a given object implements the PricingTaxAttribute interface.
 */
export function instanceOfPricingTaxAttribute(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PricingTaxAttributeFromJSON(json: any): PricingTaxAttribute {
    return PricingTaxAttributeFromJSONTyped(json, false);
}

export function PricingTaxAttributeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PricingTaxAttribute {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fullyQualifiedName': !exists(json, 'fullyQualifiedName') ? undefined : json['fullyQualifiedName'],
        'attributeDefinitionId': !exists(json, 'attributeDefinitionId') ? undefined : json['attributeDefinitionId'],
        'values': !exists(json, 'values') ? undefined : json['values'],
    };
}

export function PricingTaxAttributeToJSON(value?: PricingTaxAttribute | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fullyQualifiedName': value.fullyQualifiedName,
        'attributeDefinitionId': value.attributeDefinitionId,
        'values': value.values,
    };
}

