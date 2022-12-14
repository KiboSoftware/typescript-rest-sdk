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
 * This is the key of the product collection member.  For now, it's just product code, but may expand in future
 * @export
 * @interface ProductCollectionMemberKey
 */
export interface ProductCollectionMemberKey {
    /**
     * 
     * @type {string}
     * @memberof ProductCollectionMemberKey
     */
    value?: string | null;
}

/**
 * Check if a given object implements the ProductCollectionMemberKey interface.
 */
export function instanceOfProductCollectionMemberKey(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductCollectionMemberKeyFromJSON(json: any): ProductCollectionMemberKey {
    return ProductCollectionMemberKeyFromJSONTyped(json, false);
}

export function ProductCollectionMemberKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductCollectionMemberKey {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function ProductCollectionMemberKeyToJSON(value?: ProductCollectionMemberKey | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
    };
}

