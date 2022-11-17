/* tslint:disable */
/* eslint-disable */
/**
 * Kibo SubscriptionRuntime Service
 * OpenAPI Spec for Kibo SubscriptionRuntime Service
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
 * @interface DigitalPackageItem
 */
export interface DigitalPackageItem {
    /**
     * 
     * @type {string}
     * @memberof DigitalPackageItem
     */
    giftCardCode?: string | null;
    /**
     * Code of the Product to be fulfilled.
     * @type {string}
     * @memberof DigitalPackageItem
     */
    productCode?: string | null;
    /**
     * Quantity of the order item
     * @type {number}
     * @memberof DigitalPackageItem
     */
    quantity?: number;
    /**
     * The type of fulfillment item
     * @type {string}
     * @memberof DigitalPackageItem
     */
    fulfillmentItemType?: string | null;
    /**
     * The line id associated with the fulfillment.
     * @type {number}
     * @memberof DigitalPackageItem
     */
    lineId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof DigitalPackageItem
     */
    optionAttributeFQN?: string | null;
}

/**
 * Check if a given object implements the DigitalPackageItem interface.
 */
export function instanceOfDigitalPackageItem(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DigitalPackageItemFromJSON(json: any): DigitalPackageItem {
    return DigitalPackageItemFromJSONTyped(json, false);
}

export function DigitalPackageItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): DigitalPackageItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'giftCardCode': !exists(json, 'giftCardCode') ? undefined : json['giftCardCode'],
        'productCode': !exists(json, 'productCode') ? undefined : json['productCode'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'fulfillmentItemType': !exists(json, 'fulfillmentItemType') ? undefined : json['fulfillmentItemType'],
        'lineId': !exists(json, 'lineId') ? undefined : json['lineId'],
        'optionAttributeFQN': !exists(json, 'optionAttributeFQN') ? undefined : json['optionAttributeFQN'],
    };
}

export function DigitalPackageItemToJSON(value?: DigitalPackageItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'giftCardCode': value.giftCardCode,
        'productCode': value.productCode,
        'quantity': value.quantity,
        'fulfillmentItemType': value.fulfillmentItemType,
        'lineId': value.lineId,
        'optionAttributeFQN': value.optionAttributeFQN,
    };
}

