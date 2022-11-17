/* tslint:disable */
/* eslint-disable */
/**
 * Kibo PricingRuntime Service
 * OpenAPI Spec for Kibo PricingRuntime Service
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
 * Duplicate definition from ProductRuntime
 * @export
 * @interface ProductAttribute
 */
export interface ProductAttribute {
    /**
     * The InputType type of the attribute. Valid values for InputType are defined in InputTypeConst.
     * @type {string}
     * @memberof ProductAttribute
     */
    inputType?: string | null;
    /**
     * The ValueType of the attribute. Valid values for ValueType are defined in ValueTypeTypeConst.
     * @type {string}
     * @memberof ProductAttribute
     */
    valueType?: string | null;
    /**
     * The DataType of the attribute. Valid values for DataType are defined in DataTypeTypeConst.
     * @type {string}
     * @memberof ProductAttribute
     */
    dataType?: string | null;
    /**
     * Name of the attribute in the language specified by LocaleCode.
     * @type {string}
     * @memberof ProductAttribute
     */
    name?: string | null;
    /**
     * Description of the attribute in the language specified by LocaleCode.
     * @type {string}
     * @memberof ProductAttribute
     */
    description?: string | null;
}

/**
 * Check if a given object implements the ProductAttribute interface.
 */
export function instanceOfProductAttribute(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductAttributeFromJSON(json: any): ProductAttribute {
    return ProductAttributeFromJSONTyped(json, false);
}

export function ProductAttributeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductAttribute {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'inputType': !exists(json, 'inputType') ? undefined : json['inputType'],
        'valueType': !exists(json, 'valueType') ? undefined : json['valueType'],
        'dataType': !exists(json, 'dataType') ? undefined : json['dataType'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function ProductAttributeToJSON(value?: ProductAttribute | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'inputType': value.inputType,
        'valueType': value.valueType,
        'dataType': value.dataType,
        'name': value.name,
        'description': value.description,
    };
}

