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
 * The inventory for a product at a specific Location
 * @export
 * @interface ProductCost
 */
export interface ProductCost {
    /**
     * 
     * @type {string}
     * @memberof ProductCost
     */
    productCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ProductCost
     */
    cost?: number;
}

/**
 * Check if a given object implements the ProductCost interface.
 */
export function instanceOfProductCost(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductCostFromJSON(json: any): ProductCost {
    return ProductCostFromJSONTyped(json, false);
}

export function ProductCostFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductCost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'productCode': !exists(json, 'productCode') ? undefined : json['productCode'],
        'cost': !exists(json, 'cost') ? undefined : json['cost'],
    };
}

export function ProductCostToJSON(value?: ProductCost | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'productCode': value.productCode,
        'cost': value.cost,
    };
}

