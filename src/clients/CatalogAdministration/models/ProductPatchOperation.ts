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
 * 
 * @export
 * @interface ProductPatchOperation
 */
export interface ProductPatchOperation {
    /**
     * 
     * @type {any}
     * @memberof ProductPatchOperation
     */
    value?: any | null;
    /**
     * 
     * @type {string}
     * @memberof ProductPatchOperation
     */
    path?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductPatchOperation
     */
    op?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductPatchOperation
     */
    from?: string | null;
}

/**
 * Check if a given object implements the ProductPatchOperation interface.
 */
export function instanceOfProductPatchOperation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductPatchOperationFromJSON(json: any): ProductPatchOperation {
    return ProductPatchOperationFromJSONTyped(json, false);
}

export function ProductPatchOperationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductPatchOperation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'op': !exists(json, 'op') ? undefined : json['op'],
        'from': !exists(json, 'from') ? undefined : json['from'],
    };
}

export function ProductPatchOperationToJSON(value?: ProductPatchOperation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
        'path': value.path,
        'op': value.op,
        'from': value.from,
    };
}

