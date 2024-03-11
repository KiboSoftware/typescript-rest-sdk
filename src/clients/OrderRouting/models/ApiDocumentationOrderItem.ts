/* tslint:disable */
/* eslint-disable */
/**
 * Api Documentation
 * Api Documentation
 *
 * The version of the OpenAPI document: 1.0.0
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
 * @interface ApiDocumentationOrderItem
 */
export interface ApiDocumentationOrderItem {
    /**
     * 
     * @type {boolean}
     * @memberof ApiDocumentationOrderItem
     */
    backorderable?: boolean;
    /**
     * 
     * @type {object}
     * @memberof ApiDocumentationOrderItem
     */
    customItemData?: object;
    /**
     * 
     * @type {boolean}
     * @memberof ApiDocumentationOrderItem
     */
    futureOrderable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ApiDocumentationOrderItem
     */
    itemDependency?: number;
    /**
     * 
     * @type {number}
     * @memberof ApiDocumentationOrderItem
     */
    orderItemID?: number;
    /**
     * 
     * @type {string}
     * @memberof ApiDocumentationOrderItem
     */
    partNumber?: string;
    /**
     * 
     * @type {number}
     * @memberof ApiDocumentationOrderItem
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof ApiDocumentationOrderItem
     */
    sku?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiDocumentationOrderItem
     */
    upc?: string;
}

/**
 * Check if a given object implements the ApiDocumentationOrderItem interface.
 */
export function instanceOfApiDocumentationOrderItem(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApiDocumentationOrderItemFromJSON(json: any): ApiDocumentationOrderItem {
    return ApiDocumentationOrderItemFromJSONTyped(json, false);
}

export function ApiDocumentationOrderItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiDocumentationOrderItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'backorderable': !exists(json, 'backorderable') ? undefined : json['backorderable'],
        'customItemData': !exists(json, 'customItemData') ? undefined : json['customItemData'],
        'futureOrderable': !exists(json, 'futureOrderable') ? undefined : json['futureOrderable'],
        'itemDependency': !exists(json, 'itemDependency') ? undefined : json['itemDependency'],
        'orderItemID': !exists(json, 'orderItemID') ? undefined : json['orderItemID'],
        'partNumber': !exists(json, 'partNumber') ? undefined : json['partNumber'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'sku': !exists(json, 'sku') ? undefined : json['sku'],
        'upc': !exists(json, 'upc') ? undefined : json['upc'],
    };
}

export function ApiDocumentationOrderItemToJSON(value?: ApiDocumentationOrderItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'backorderable': value.backorderable,
        'customItemData': value.customItemData,
        'futureOrderable': value.futureOrderable,
        'itemDependency': value.itemDependency,
        'orderItemID': value.orderItemID,
        'partNumber': value.partNumber,
        'quantity': value.quantity,
        'sku': value.sku,
        'upc': value.upc,
    };
}
