/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Admin User Service
 * OpenAPI Spec for Kibo Admin User Service
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
 * @interface AuditInfo
 */
export interface AuditInfo {
    /**
     * 
     * @type {Date}
     * @memberof AuditInfo
     */
    updateDate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof AuditInfo
     */
    createDate?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof AuditInfo
     */
    updateBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AuditInfo
     */
    createBy?: string | null;
}

/**
 * Check if a given object implements the AuditInfo interface.
 */
export function instanceOfAuditInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AuditInfoFromJSON(json: any): AuditInfo {
    return AuditInfoFromJSONTyped(json, false);
}

export function AuditInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuditInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'updateDate': !exists(json, 'updateDate') ? undefined : (json['updateDate'] === null ? null : new Date(json['updateDate'])),
        'createDate': !exists(json, 'createDate') ? undefined : (json['createDate'] === null ? null : new Date(json['createDate'])),
        'updateBy': !exists(json, 'updateBy') ? undefined : json['updateBy'],
        'createBy': !exists(json, 'createBy') ? undefined : json['createBy'],
    };
}

export function AuditInfoToJSON(value?: AuditInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'updateDate': value.updateDate === undefined ? undefined : (value.updateDate === null ? null : value.updateDate.toISOString()),
        'createDate': value.createDate === undefined ? undefined : (value.createDate === null ? null : value.createDate.toISOString()),
        'updateBy': value.updateBy,
        'createBy': value.createBy,
    };
}

