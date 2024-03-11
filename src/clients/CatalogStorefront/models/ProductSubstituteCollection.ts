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
import type { ProductSubstitution } from './ProductSubstitution';
import {
    ProductSubstitutionFromJSON,
    ProductSubstitutionFromJSONTyped,
    ProductSubstitutionToJSON,
} from './ProductSubstitution';

/**
 * 
 * @export
 * @interface ProductSubstituteCollection
 */
export interface ProductSubstituteCollection {
    /**
     * 
     * @type {number}
     * @memberof ProductSubstituteCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<ProductSubstitution>}
     * @memberof ProductSubstituteCollection
     */
    items?: Array<ProductSubstitution> | null;
}

/**
 * Check if a given object implements the ProductSubstituteCollection interface.
 */
export function instanceOfProductSubstituteCollection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductSubstituteCollectionFromJSON(json: any): ProductSubstituteCollection {
    return ProductSubstituteCollectionFromJSONTyped(json, false);
}

export function ProductSubstituteCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductSubstituteCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(ProductSubstitutionFromJSON)),
    };
}

export function ProductSubstituteCollectionToJSON(value?: ProductSubstituteCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'totalCount': value.totalCount,
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(ProductSubstitutionToJSON)),
    };
}
