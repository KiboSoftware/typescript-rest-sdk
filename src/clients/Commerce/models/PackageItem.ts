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
 * An item in a package representing a particular product.
 * @export
 * @interface PackageItem
 */
export interface PackageItem {
    /**
     * Code of the Product to be fulfilled.
     * @type {string}
     * @memberof PackageItem
     */
    productCode?: string | null;
    /**
     * Quantity of the order item
     * @type {number}
     * @memberof PackageItem
     */
    quantity?: number;
    /**
     * The type of fulfillment item
     * @type {string}
     * @memberof PackageItem
     */
    fulfillmentItemType?: string | null;
    /**
     * The line id associated with the fulfillment.
     * @type {number}
     * @memberof PackageItem
     */
    lineId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PackageItem
     */
    optionAttributeFQN?: string | null;
}

/**
 * Check if a given object implements the PackageItem interface.
 */
export function instanceOfPackageItem(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PackageItemFromJSON(json: any): PackageItem {
    return PackageItemFromJSONTyped(json, false);
}

export function PackageItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): PackageItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'productCode': !exists(json, 'productCode') ? undefined : json['productCode'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'fulfillmentItemType': !exists(json, 'fulfillmentItemType') ? undefined : json['fulfillmentItemType'],
        'lineId': !exists(json, 'lineId') ? undefined : json['lineId'],
        'optionAttributeFQN': !exists(json, 'optionAttributeFQN') ? undefined : json['optionAttributeFQN'],
    };
}

export function PackageItemToJSON(value?: PackageItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'productCode': value.productCode,
        'quantity': value.quantity,
        'fulfillmentItemType': value.fulfillmentItemType,
        'lineId': value.lineId,
        'optionAttributeFQN': value.optionAttributeFQN,
    };
}

