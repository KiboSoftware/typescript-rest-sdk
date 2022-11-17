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
 * Name of the option that has been selected, and, if this is a stand-alone option, the value that the shopper entered.
 * @export
 * @interface ProductOptionSelection
 */
export interface ProductOptionSelection {
    /**
     * Fully Qualified Name of the selected option's attribute
     * @type {string}
     * @memberof ProductOptionSelection
     */
    attributeFQN?: string | null;
    /**
     * Value of the selected option
     * @type {any}
     * @memberof ProductOptionSelection
     */
    value?: any | null;
    /**
     * The unique ValueId of the Attribute (this can be sent as an alternative the to the AttributeFqn and Value)
     * @type {number}
     * @memberof ProductOptionSelection
     */
    attributeValueId?: number | null;
    /**
     * Value that shopper entered if this is an Extra of VaolueType ShopperEntered.  This allows shopper data entry (such as the shopper's initials).
     * @type {any}
     * @memberof ProductOptionSelection
     */
    shopperEnteredValue?: any | null;
}

/**
 * Check if a given object implements the ProductOptionSelection interface.
 */
export function instanceOfProductOptionSelection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductOptionSelectionFromJSON(json: any): ProductOptionSelection {
    return ProductOptionSelectionFromJSONTyped(json, false);
}

export function ProductOptionSelectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductOptionSelection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attributeFQN': !exists(json, 'attributeFQN') ? undefined : json['attributeFQN'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'attributeValueId': !exists(json, 'attributeValueId') ? undefined : json['attributeValueId'],
        'shopperEnteredValue': !exists(json, 'shopperEnteredValue') ? undefined : json['shopperEnteredValue'],
    };
}

export function ProductOptionSelectionToJSON(value?: ProductOptionSelection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attributeFQN': value.attributeFQN,
        'value': value.value,
        'attributeValueId': value.attributeValueId,
        'shopperEnteredValue': value.shopperEnteredValue,
    };
}

