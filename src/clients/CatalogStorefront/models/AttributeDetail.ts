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
import type { AttributeValidation } from './AttributeValidation';
import {
    AttributeValidationFromJSON,
    AttributeValidationFromJSONTyped,
    AttributeValidationToJSON,
} from './AttributeValidation';

/**
 * Product Attribute properties common between a Product Propery, Option, and Extra
 * @export
 * @interface AttributeDetail
 */
export interface AttributeDetail {
    /**
     * The ValueType of the attribute. Valid values for ValueType are defined in ValueTypeTypeConst.
     * @type {string}
     * @memberof AttributeDetail
     */
    valueType?: string | null;
    /**
     * The InputType type of the attribute. Valid values for InputType are defined in InputTypeConst.
     * @type {string}
     * @memberof AttributeDetail
     */
    inputType?: string | null;
    /**
     * The DataType of the attribute. Valid values for DataType are defined in DataTypeTypeConst.
     * @type {string}
     * @memberof AttributeDetail
     */
    dataType?: string | null;
    /**
     * The UsageType of the attribute. Valid values for the usageType are defined in UsageTypeConst .
     * @type {string}
     * @memberof AttributeDetail
     */
    usageType?: string | null;
    /**
     * A unique sequence of the attribute By dataType (used for common naming of fields in search index)
     * @type {number}
     * @memberof AttributeDetail
     */
    dataTypeSequence?: number;
    /**
     * Name of the attribute in the language specified by LocaleCode.
     * @type {string}
     * @memberof AttributeDetail
     */
    name?: string | null;
    /**
     * Description of the attribute in the language specified by LocaleCode.
     * @type {string}
     * @memberof AttributeDetail
     */
    description?: string | null;
    /**
     * 
     * @type {AttributeValidation}
     * @memberof AttributeDetail
     */
    validation?: AttributeValidation;
    /**
     * Indicates whether the attribute value is searchable.
     * @type {boolean}
     * @memberof AttributeDetail
     */
    searchableInStorefront?: boolean;
    /**
     * If true, the system will index the display value of string attributes instead of the canonical value for searching. 
     * The canonical value will always be used for filtering. Does not apply for for non-string attributes.
     * @type {boolean}
     * @memberof AttributeDetail
     */
    searchDisplayValue?: boolean;
    /**
     * Indicates whether the attribute should be able to be used in filters, facets, and sorting on the public storefront.
     * @type {boolean}
     * @memberof AttributeDetail
     */
    allowFilteringAndSortingInStorefront?: boolean;
    /**
     * Indicates whether the attribtue value is indexed with case or not
     * @type {boolean}
     * @memberof AttributeDetail
     */
    indexValueWithCase?: boolean | null;
    /**
     * Indicates whether the attribtue value is indexed so that it can have a custom relevency weight compared to other attributes in a tokenized text search
     * @type {boolean}
     * @memberof AttributeDetail
     */
    customWeightInStorefrontSearch?: boolean | null;
    /**
     * Am optional hint to the theme about how this attribute should be displayed (what control to use)
     * @type {string}
     * @memberof AttributeDetail
     */
    displayIntention?: string | null;
}

/**
 * Check if a given object implements the AttributeDetail interface.
 */
export function instanceOfAttributeDetail(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AttributeDetailFromJSON(json: any): AttributeDetail {
    return AttributeDetailFromJSONTyped(json, false);
}

export function AttributeDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttributeDetail {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'valueType': !exists(json, 'valueType') ? undefined : json['valueType'],
        'inputType': !exists(json, 'inputType') ? undefined : json['inputType'],
        'dataType': !exists(json, 'dataType') ? undefined : json['dataType'],
        'usageType': !exists(json, 'usageType') ? undefined : json['usageType'],
        'dataTypeSequence': !exists(json, 'dataTypeSequence') ? undefined : json['dataTypeSequence'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'validation': !exists(json, 'validation') ? undefined : AttributeValidationFromJSON(json['validation']),
        'searchableInStorefront': !exists(json, 'searchableInStorefront') ? undefined : json['searchableInStorefront'],
        'searchDisplayValue': !exists(json, 'searchDisplayValue') ? undefined : json['searchDisplayValue'],
        'allowFilteringAndSortingInStorefront': !exists(json, 'allowFilteringAndSortingInStorefront') ? undefined : json['allowFilteringAndSortingInStorefront'],
        'indexValueWithCase': !exists(json, 'indexValueWithCase') ? undefined : json['indexValueWithCase'],
        'customWeightInStorefrontSearch': !exists(json, 'customWeightInStorefrontSearch') ? undefined : json['customWeightInStorefrontSearch'],
        'displayIntention': !exists(json, 'displayIntention') ? undefined : json['displayIntention'],
    };
}

export function AttributeDetailToJSON(value?: AttributeDetail | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'valueType': value.valueType,
        'inputType': value.inputType,
        'dataType': value.dataType,
        'usageType': value.usageType,
        'dataTypeSequence': value.dataTypeSequence,
        'name': value.name,
        'description': value.description,
        'validation': AttributeValidationToJSON(value.validation),
        'searchableInStorefront': value.searchableInStorefront,
        'searchDisplayValue': value.searchDisplayValue,
        'allowFilteringAndSortingInStorefront': value.allowFilteringAndSortingInStorefront,
        'indexValueWithCase': value.indexValueWithCase,
        'customWeightInStorefrontSearch': value.customWeightInStorefrontSearch,
        'displayIntention': value.displayIntention,
    };
}

