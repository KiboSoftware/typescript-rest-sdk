/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Runtime Services
 * OpenAPI Spec for Kibo Catalog Runtime Services
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
 * 
 * @export
 * @interface AdminUserAuditInfo
 */
export interface AdminUserAuditInfo {
    /**
     * 
     * @type {Date}
     * @memberof AdminUserAuditInfo
     */
    updateDate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof AdminUserAuditInfo
     */
    createDate?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof AdminUserAuditInfo
     */
    updateBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AdminUserAuditInfo
     */
    createBy?: string | null;
}

/**
 * Check if a given object implements the AdminUserAuditInfo interface.
 */
export function instanceOfAdminUserAuditInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AdminUserAuditInfoFromJSON(json: any): AdminUserAuditInfo {
    return AdminUserAuditInfoFromJSONTyped(json, false);
}

export function AdminUserAuditInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdminUserAuditInfo {
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

export function AdminUserAuditInfoToJSON(value?: AdminUserAuditInfo | null): any {
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

