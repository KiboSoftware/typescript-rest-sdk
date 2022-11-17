/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Runtime Services
 * OpenAPI Spec for Kibo Catalog Runtime Services
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CatalogRuntimesAttributeVocabularyValueDisplayInfo } from './CatalogRuntimesAttributeVocabularyValueDisplayInfo';
import {
    CatalogRuntimesAttributeVocabularyValueDisplayInfoFromJSON,
    CatalogRuntimesAttributeVocabularyValueDisplayInfoFromJSONTyped,
    CatalogRuntimesAttributeVocabularyValueDisplayInfoToJSON,
} from './CatalogRuntimesAttributeVocabularyValueDisplayInfo';
import type { CatalogRuntimesBundledProduct } from './CatalogRuntimesBundledProduct';
import {
    CatalogRuntimesBundledProductFromJSON,
    CatalogRuntimesBundledProductFromJSONTyped,
    CatalogRuntimesBundledProductToJSON,
} from './CatalogRuntimesBundledProduct';

/**
 * Value of product option..."red," "white," "blue."
 * @export
 * @interface CatalogRuntimesProductOptionValue
 */
export interface CatalogRuntimesProductOptionValue {
    /**
     * 
     * @type {any}
     * @memberof CatalogRuntimesProductOptionValue
     */
    value?: any | null;
    /**
     * Unique Id for the Value
     * @type {number}
     * @memberof CatalogRuntimesProductOptionValue
     */
    attributeValueId?: number;
    /**
     * Localized Value in the language of the locale code only available for dataType string
     * @type {string}
     * @memberof CatalogRuntimesProductOptionValue
     */
    stringValue?: string | null;
    /**
     * If true, this option is enabled and can be selected. During configuration, this returns false of this option value is invalid with other current selected options.
     * @type {boolean}
     * @memberof CatalogRuntimesProductOptionValue
     */
    isEnabled?: boolean | null;
    /**
     * If true, this is the option that is currently selected. It can be either the default value or one that the shopper has selected.
     * @type {boolean}
     * @memberof CatalogRuntimesProductOptionValue
     */
    isSelected?: boolean | null;
    /**
     * If true, this is the default value that the merchant supplied.
     * @type {boolean}
     * @memberof CatalogRuntimesProductOptionValue
     */
    isDefault?: boolean | null;
    /**
     * How much this option weighs above the weight of the product.
     * @type {number}
     * @memberof CatalogRuntimesProductOptionValue
     */
    deltaWeight?: number | null;
    /**
     * How much this option costs above the cost of the product.
     * @type {number}
     * @memberof CatalogRuntimesProductOptionValue
     */
    deltaPrice?: number | null;
    /**
     * How much this option costs above the cost of the product.
     * @type {any}
     * @memberof CatalogRuntimesProductOptionValue
     */
    shopperEnteredValue?: any | null;
    /**
     * 
     * @type {CatalogRuntimesBundledProduct}
     * @memberof CatalogRuntimesProductOptionValue
     */
    bundledProduct?: CatalogRuntimesBundledProduct;
    /**
     * 
     * @type {CatalogRuntimesAttributeVocabularyValueDisplayInfo}
     * @memberof CatalogRuntimesProductOptionValue
     */
    displayInfo?: CatalogRuntimesAttributeVocabularyValueDisplayInfo;
}

/**
 * Check if a given object implements the CatalogRuntimesProductOptionValue interface.
 */
export function instanceOfCatalogRuntimesProductOptionValue(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CatalogRuntimesProductOptionValueFromJSON(json: any): CatalogRuntimesProductOptionValue {
    return CatalogRuntimesProductOptionValueFromJSONTyped(json, false);
}

export function CatalogRuntimesProductOptionValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogRuntimesProductOptionValue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
        'attributeValueId': !exists(json, 'attributeValueId') ? undefined : json['attributeValueId'],
        'stringValue': !exists(json, 'stringValue') ? undefined : json['stringValue'],
        'isEnabled': !exists(json, 'isEnabled') ? undefined : json['isEnabled'],
        'isSelected': !exists(json, 'isSelected') ? undefined : json['isSelected'],
        'isDefault': !exists(json, 'isDefault') ? undefined : json['isDefault'],
        'deltaWeight': !exists(json, 'deltaWeight') ? undefined : json['deltaWeight'],
        'deltaPrice': !exists(json, 'deltaPrice') ? undefined : json['deltaPrice'],
        'shopperEnteredValue': !exists(json, 'shopperEnteredValue') ? undefined : json['shopperEnteredValue'],
        'bundledProduct': !exists(json, 'bundledProduct') ? undefined : CatalogRuntimesBundledProductFromJSON(json['bundledProduct']),
        'displayInfo': !exists(json, 'displayInfo') ? undefined : CatalogRuntimesAttributeVocabularyValueDisplayInfoFromJSON(json['displayInfo']),
    };
}

export function CatalogRuntimesProductOptionValueToJSON(value?: CatalogRuntimesProductOptionValue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
        'attributeValueId': value.attributeValueId,
        'stringValue': value.stringValue,
        'isEnabled': value.isEnabled,
        'isSelected': value.isSelected,
        'isDefault': value.isDefault,
        'deltaWeight': value.deltaWeight,
        'deltaPrice': value.deltaPrice,
        'shopperEnteredValue': value.shopperEnteredValue,
        'bundledProduct': CatalogRuntimesBundledProductToJSON(value.bundledProduct),
        'displayInfo': CatalogRuntimesAttributeVocabularyValueDisplayInfoToJSON(value.displayInfo),
    };
}

