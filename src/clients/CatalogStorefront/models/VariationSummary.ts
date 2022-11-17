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
import type { ProductInventoryInfo } from './ProductInventoryInfo';
import {
    ProductInventoryInfoFromJSON,
    ProductInventoryInfoFromJSONTyped,
    ProductInventoryInfoToJSON,
} from './ProductInventoryInfo';
import type { VariationOption } from './VariationOption';
import {
    VariationOptionFromJSON,
    VariationOptionFromJSONTyped,
    VariationOptionToJSON,
} from './VariationOption';

/**
 * Details of a product, including its product code, name, description, options (if any), and current state--whether the product can be purchased given the options selected currently.
 * @export
 * @interface VariationSummary
 */
export interface VariationSummary {
    /**
     * Merchant-created code associated with the variation product, for example, a SKU.
     * @type {string}
     * @memberof VariationSummary
     */
    productCode?: string | null;
    /**
     * The combination of options that resolve to this variation product
     * @type {Array<VariationOption>}
     * @memberof VariationSummary
     */
    options?: Array<VariationOption> | null;
    /**
     * 
     * @type {ProductInventoryInfo}
     * @memberof VariationSummary
     */
    inventoryInfo?: ProductInventoryInfo;
}

/**
 * Check if a given object implements the VariationSummary interface.
 */
export function instanceOfVariationSummary(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function VariationSummaryFromJSON(json: any): VariationSummary {
    return VariationSummaryFromJSONTyped(json, false);
}

export function VariationSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): VariationSummary {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'productCode': !exists(json, 'productCode') ? undefined : json['productCode'],
        'options': !exists(json, 'options') ? undefined : (json['options'] === null ? null : (json['options'] as Array<any>).map(VariationOptionFromJSON)),
        'inventoryInfo': !exists(json, 'inventoryInfo') ? undefined : ProductInventoryInfoFromJSON(json['inventoryInfo']),
    };
}

export function VariationSummaryToJSON(value?: VariationSummary | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'productCode': value.productCode,
        'options': value.options === undefined ? undefined : (value.options === null ? null : (value.options as Array<any>).map(VariationOptionToJSON)),
        'inventoryInfo': ProductInventoryInfoToJSON(value.inventoryInfo),
    };
}

