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
/**
 * Represents a product that is positioned out of its normal sort position.
 * It can be boosted to the top of the list, positioned exactly or buried at the bottom
 * @export
 * @interface ProductSortOverride
 */
export interface ProductSortOverride {
    /**
     * The product code of the product being overridden
     * @type {string}
     * @memberof ProductSortOverride
     */
    productCode: string;
    /**
     * The slicing value of the product being overridden
     * @type {string}
     * @memberof ProductSortOverride
     */
    sliceValue?: string | null;
    /**
     * Indicates the relative position of the product to other overridden products.
     * Position is absolute if IsPinned is true.
     * Not applicable to buried products. Buried products will be given a default
     * position of -1
     * @type {number}
     * @memberof ProductSortOverride
     */
    position?: number | null;
    /**
     * Flag to indicate that the product is pinned at the specified position.
     * Not applicable to buried products
     * @type {boolean}
     * @memberof ProductSortOverride
     */
    isPinned?: boolean | null;
}

/**
 * Check if a given object implements the ProductSortOverride interface.
 */
export function instanceOfProductSortOverride(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "productCode" in value;

    return isInstance;
}

export function ProductSortOverrideFromJSON(json: any): ProductSortOverride {
    return ProductSortOverrideFromJSONTyped(json, false);
}

export function ProductSortOverrideFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductSortOverride {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'productCode': json['productCode'],
        'sliceValue': !exists(json, 'sliceValue') ? undefined : json['sliceValue'],
        'position': !exists(json, 'position') ? undefined : json['position'],
        'isPinned': !exists(json, 'isPinned') ? undefined : json['isPinned'],
    };
}

export function ProductSortOverrideToJSON(value?: ProductSortOverride | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'productCode': value.productCode,
        'sliceValue': value.sliceValue,
        'position': value.position,
        'isPinned': value.isPinned,
    };
}

