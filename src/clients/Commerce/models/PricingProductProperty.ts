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
import type { PricingProductAttribute } from './PricingProductAttribute';
import {
    PricingProductAttributeFromJSON,
    PricingProductAttributeFromJSONTyped,
    PricingProductAttributeToJSON,
} from './PricingProductAttribute';
import type { PricingProductPropertyValue } from './PricingProductPropertyValue';
import {
    PricingProductPropertyValueFromJSON,
    PricingProductPropertyValueFromJSONTyped,
    PricingProductPropertyValueToJSON,
} from './PricingProductPropertyValue';

/**
 * 
 * @export
 * @interface PricingProductProperty
 */
export interface PricingProductProperty {
    /**
     * 
     * @type {string}
     * @memberof PricingProductProperty
     */
    attributeFQN?: string | null;
    /**
     * 
     * @type {Array<PricingProductPropertyValue>}
     * @memberof PricingProductProperty
     */
    values?: Array<PricingProductPropertyValue> | null;
    /**
     * 
     * @type {PricingProductAttribute}
     * @memberof PricingProductProperty
     */
    attributeDetail?: PricingProductAttribute;
    /**
     * 
     * @type {boolean}
     * @memberof PricingProductProperty
     */
    isHidden?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof PricingProductProperty
     */
    isMultiValue?: boolean | null;
}

/**
 * Check if a given object implements the PricingProductProperty interface.
 */
export function instanceOfPricingProductProperty(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PricingProductPropertyFromJSON(json: any): PricingProductProperty {
    return PricingProductPropertyFromJSONTyped(json, false);
}

export function PricingProductPropertyFromJSONTyped(json: any, ignoreDiscriminator: boolean): PricingProductProperty {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attributeFQN': !exists(json, 'attributeFQN') ? undefined : json['attributeFQN'],
        'values': !exists(json, 'values') ? undefined : (json['values'] === null ? null : (json['values'] as Array<any>).map(PricingProductPropertyValueFromJSON)),
        'attributeDetail': !exists(json, 'attributeDetail') ? undefined : PricingProductAttributeFromJSON(json['attributeDetail']),
        'isHidden': !exists(json, 'isHidden') ? undefined : json['isHidden'],
        'isMultiValue': !exists(json, 'isMultiValue') ? undefined : json['isMultiValue'],
    };
}

export function PricingProductPropertyToJSON(value?: PricingProductProperty | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attributeFQN': value.attributeFQN,
        'values': value.values === undefined ? undefined : (value.values === null ? null : (value.values as Array<any>).map(PricingProductPropertyValueToJSON)),
        'attributeDetail': PricingProductAttributeToJSON(value.attributeDetail),
        'isHidden': value.isHidden,
        'isMultiValue': value.isMultiValue,
    };
}

