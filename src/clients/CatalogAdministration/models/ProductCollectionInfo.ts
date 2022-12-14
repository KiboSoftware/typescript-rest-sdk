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
 * Information about the relationship between a Mozu.ProductAdmin.Contracts.Product and a productCollection (product with usagetype of collection)
 * This is only represented on the product member side of the relationship.
 * @export
 * @interface ProductCollectionInfo
 */
export interface ProductCollectionInfo {
    /**
     * Product code of the product that is the collection that the containing product belongs to
     * @type {string}
     * @memberof ProductCollectionInfo
     */
    collectionProductCode?: string | null;
    /**
     * Collection name in the language of the master catalog
     * @type {string}
     * @memberof ProductCollectionInfo
     */
    collectionName?: string | null;
    /**
     * True when this is the primary collection for the containing product.
     * @type {boolean}
     * @memberof ProductCollectionInfo
     */
    isPrimaryCollection?: boolean | null;
}

/**
 * Check if a given object implements the ProductCollectionInfo interface.
 */
export function instanceOfProductCollectionInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductCollectionInfoFromJSON(json: any): ProductCollectionInfo {
    return ProductCollectionInfoFromJSONTyped(json, false);
}

export function ProductCollectionInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductCollectionInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'collectionProductCode': !exists(json, 'collectionProductCode') ? undefined : json['collectionProductCode'],
        'collectionName': !exists(json, 'collectionName') ? undefined : json['collectionName'],
        'isPrimaryCollection': !exists(json, 'isPrimaryCollection') ? undefined : json['isPrimaryCollection'],
    };
}

export function ProductCollectionInfoToJSON(value?: ProductCollectionInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'collectionProductCode': value.collectionProductCode,
        'collectionName': value.collectionName,
        'isPrimaryCollection': value.isPrimaryCollection,
    };
}

