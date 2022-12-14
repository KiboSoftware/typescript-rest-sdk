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
 * @interface ProductPropertyPatchOperation
 */
export interface ProductPropertyPatchOperation {
    /**
     * 
     * @type {any}
     * @memberof ProductPropertyPatchOperation
     */
    value?: any | null;
    /**
     * 
     * @type {string}
     * @memberof ProductPropertyPatchOperation
     */
    path?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductPropertyPatchOperation
     */
    op?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductPropertyPatchOperation
     */
    from?: string | null;
}

/**
 * Check if a given object implements the ProductPropertyPatchOperation interface.
 */
export function instanceOfProductPropertyPatchOperation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductPropertyPatchOperationFromJSON(json: any): ProductPropertyPatchOperation {
    return ProductPropertyPatchOperationFromJSONTyped(json, false);
}

export function ProductPropertyPatchOperationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductPropertyPatchOperation {
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

export function ProductPropertyPatchOperationToJSON(value?: ProductPropertyPatchOperation | null): any {
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

