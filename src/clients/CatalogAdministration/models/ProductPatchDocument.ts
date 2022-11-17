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
import type { ProductPatchOperation } from './ProductPatchOperation';
import {
    ProductPatchOperationFromJSON,
    ProductPatchOperationFromJSONTyped,
    ProductPatchOperationToJSON,
} from './ProductPatchOperation';

/**
 * 
 * @export
 * @interface ProductPatchDocument
 */
export interface ProductPatchDocument {
    /**
     * 
     * @type {Array<ProductPatchOperation>}
     * @memberof ProductPatchDocument
     */
    operations?: Array<ProductPatchOperation> | null;
}

/**
 * Check if a given object implements the ProductPatchDocument interface.
 */
export function instanceOfProductPatchDocument(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductPatchDocumentFromJSON(json: any): ProductPatchDocument {
    return ProductPatchDocumentFromJSONTyped(json, false);
}

export function ProductPatchDocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductPatchDocument {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'operations': !exists(json, 'operations') ? undefined : (json['operations'] === null ? null : (json['operations'] as Array<any>).map(ProductPatchOperationFromJSON)),
    };
}

export function ProductPatchDocumentToJSON(value?: ProductPatchDocument | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'operations': value.operations === undefined ? undefined : (value.operations === null ? null : (value.operations as Array<any>).map(ProductPatchOperationToJSON)),
    };
}

