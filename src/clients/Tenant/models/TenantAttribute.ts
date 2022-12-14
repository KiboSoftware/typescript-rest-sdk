/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Tenant Service
 * OpenAPI Spec for Kibo Tenant Service
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
 * @interface TenantAttribute
 */
export interface TenantAttribute {
    /**
     * 
     * @type {string}
     * @memberof TenantAttribute
     */
    name?: string | null;
    /**
     * 
     * @type {any}
     * @memberof TenantAttribute
     */
    value?: any | null;
    /**
     * 
     * @type {string}
     * @memberof TenantAttribute
     */
    createBy?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof TenantAttribute
     */
    createDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof TenantAttribute
     */
    updateBy?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof TenantAttribute
     */
    updateDate?: Date;
}

/**
 * Check if a given object implements the TenantAttribute interface.
 */
export function instanceOfTenantAttribute(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TenantAttributeFromJSON(json: any): TenantAttribute {
    return TenantAttributeFromJSONTyped(json, false);
}

export function TenantAttributeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TenantAttribute {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'createBy': !exists(json, 'createBy') ? undefined : json['createBy'],
        'createDate': !exists(json, 'createDate') ? undefined : (new Date(json['createDate'])),
        'updateBy': !exists(json, 'updateBy') ? undefined : json['updateBy'],
        'updateDate': !exists(json, 'updateDate') ? undefined : (new Date(json['updateDate'])),
    };
}

export function TenantAttributeToJSON(value?: TenantAttribute | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'value': value.value,
        'createBy': value.createBy,
        'createDate': value.createDate === undefined ? undefined : (value.createDate.toISOString()),
        'updateBy': value.updateBy,
        'updateDate': value.updateDate === undefined ? undefined : (value.updateDate.toISOString()),
    };
}

