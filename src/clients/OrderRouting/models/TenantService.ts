/* tslint:disable */
/* eslint-disable */
/**
 * Api Documentation
 * Api Documentation
 *
 * The version of the OpenAPI document: 1.0
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
 * @interface TenantService
 */
export interface TenantService {
    /**
     * 
     * @type {object}
     * @memberof TenantService
     */
    tenantClient?: object;
}

/**
 * Check if a given object implements the TenantService interface.
 */
export function instanceOfTenantService(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TenantServiceFromJSON(json: any): TenantService {
    return TenantServiceFromJSONTyped(json, false);
}

export function TenantServiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): TenantService {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tenantClient': !exists(json, 'tenantClient') ? undefined : json['tenantClient'],
    };
}

export function TenantServiceToJSON(value?: TenantService | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tenantClient': value.tenantClient,
    };
}
