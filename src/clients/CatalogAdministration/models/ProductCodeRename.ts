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
 * A tuple used to rename the productCode of a product
 * @export
 * @interface ProductCodeRename
 */
export interface ProductCodeRename {
    /**
     * The existing ProductCode that should be renamed
     * @type {string}
     * @memberof ProductCodeRename
     */
    existingProductCode?: string | null;
    /**
     * The new ProductCode that will be the result of the rename
     * @type {string}
     * @memberof ProductCodeRename
     */
    newProductCode?: string | null;
}

/**
 * Check if a given object implements the ProductCodeRename interface.
 */
export function instanceOfProductCodeRename(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductCodeRenameFromJSON(json: any): ProductCodeRename {
    return ProductCodeRenameFromJSONTyped(json, false);
}

export function ProductCodeRenameFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductCodeRename {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'existingProductCode': !exists(json, 'existingProductCode') ? undefined : json['existingProductCode'],
        'newProductCode': !exists(json, 'newProductCode') ? undefined : json['newProductCode'],
    };
}

export function ProductCodeRenameToJSON(value?: ProductCodeRename | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'existingProductCode': value.existingProductCode,
        'newProductCode': value.newProductCode,
    };
}

