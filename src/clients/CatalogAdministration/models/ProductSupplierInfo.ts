/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Admin Services
 * OpenAPI Spec for Kibo Catalog Admin Services
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ProductCost } from './ProductCost';
import {
    ProductCostFromJSON,
    ProductCostFromJSONTyped,
    ProductCostToJSON,
} from './ProductCost';

/**
 * Supplier info for the product
 * @export
 * @interface ProductSupplierInfo
 */
export interface ProductSupplierInfo {
    /**
     * 
     * @type {string}
     * @memberof ProductSupplierInfo
     */
    mfgPartNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductSupplierInfo
     */
    distPartNumber?: string | null;
    /**
     * 
     * @type {ProductCost}
     * @memberof ProductSupplierInfo
     */
    cost?: ProductCost;
}

/**
 * Check if a given object implements the ProductSupplierInfo interface.
 */
export function instanceOfProductSupplierInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductSupplierInfoFromJSON(json: any): ProductSupplierInfo {
    return ProductSupplierInfoFromJSONTyped(json, false);
}

export function ProductSupplierInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductSupplierInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mfgPartNumber': !exists(json, 'mfgPartNumber') ? undefined : json['mfgPartNumber'],
        'distPartNumber': !exists(json, 'distPartNumber') ? undefined : json['distPartNumber'],
        'cost': !exists(json, 'cost') ? undefined : ProductCostFromJSON(json['cost']),
    };
}

export function ProductSupplierInfoToJSON(value?: ProductSupplierInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mfgPartNumber': value.mfgPartNumber,
        'distPartNumber': value.distPartNumber,
        'cost': ProductCostToJSON(value.cost),
    };
}

