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
import type { ItemTaxContext } from './ItemTaxContext';
import {
    ItemTaxContextFromJSON,
    ItemTaxContextFromJSONTyped,
    ItemTaxContextToJSON,
} from './ItemTaxContext';

/**
 * 
 * @export
 * @interface OrderTaxContext
 */
export interface OrderTaxContext {
    /**
     * Taxes applied to each item in the order.
     * @type {Array<ItemTaxContext>}
     * @memberof OrderTaxContext
     */
    itemTaxContexts?: Array<ItemTaxContext> | null;
    /**
     * Rollup shipping tax for this order
     * @type {number}
     * @memberof OrderTaxContext
     */
    shippingTax?: number;
    /**
     * The handling fee tax amount for this line item
     * @type {number}
     * @memberof OrderTaxContext
     */
    handlingFeeTax?: number;
    /**
     * Rollup tax on the order not including shipping
     * @type {number}
     * @memberof OrderTaxContext
     */
    orderTax?: number;
    /**
     * Storage for any additional/custom tax data.
     * @type {any}
     * @memberof OrderTaxContext
     */
    taxData?: any | null;
}

/**
 * Check if a given object implements the OrderTaxContext interface.
 */
export function instanceOfOrderTaxContext(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrderTaxContextFromJSON(json: any): OrderTaxContext {
    return OrderTaxContextFromJSONTyped(json, false);
}

export function OrderTaxContextFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderTaxContext {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'itemTaxContexts': !exists(json, 'itemTaxContexts') ? undefined : (json['itemTaxContexts'] === null ? null : (json['itemTaxContexts'] as Array<any>).map(ItemTaxContextFromJSON)),
        'shippingTax': !exists(json, 'shippingTax') ? undefined : json['shippingTax'],
        'handlingFeeTax': !exists(json, 'handlingFeeTax') ? undefined : json['handlingFeeTax'],
        'orderTax': !exists(json, 'orderTax') ? undefined : json['orderTax'],
        'taxData': !exists(json, 'taxData') ? undefined : json['taxData'],
    };
}

export function OrderTaxContextToJSON(value?: OrderTaxContext | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'itemTaxContexts': value.itemTaxContexts === undefined ? undefined : (value.itemTaxContexts === null ? null : (value.itemTaxContexts as Array<any>).map(ItemTaxContextToJSON)),
        'shippingTax': value.shippingTax,
        'handlingFeeTax': value.handlingFeeTax,
        'orderTax': value.orderTax,
        'taxData': value.taxData,
    };
}

