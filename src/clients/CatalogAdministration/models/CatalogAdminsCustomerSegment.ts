/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Admin Services
 * OpenAPI Spec for Kibo Catalog Admin Services
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Represents a customer segment
 * @export
 * @interface CatalogAdminsCustomerSegment
 */
export interface CatalogAdminsCustomerSegment {
    /**
     * The Customer segment Id.
     * This is the  system Id not the code.
     * @type {number}
     * @memberof CatalogAdminsCustomerSegment
     */
    id?: number;
}

/**
 * Check if a given object implements the CatalogAdminsCustomerSegment interface.
 */
export function instanceOfCatalogAdminsCustomerSegment(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CatalogAdminsCustomerSegmentFromJSON(json: any): CatalogAdminsCustomerSegment {
    return CatalogAdminsCustomerSegmentFromJSONTyped(json, false);
}

export function CatalogAdminsCustomerSegmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogAdminsCustomerSegment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function CatalogAdminsCustomerSegmentToJSON(value?: CatalogAdminsCustomerSegment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
    };
}

