/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Fulfillment Service
 * OpenAPI Spec for Kibo Fulfillment Service
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
     * @type {string}
     * @memberof AuditInfo
     */
    createBy?: string;
    /**
     * 
     * @type {Date}
     * @memberof AuditInfo
     */
    createDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof AuditInfo
     */
    updateBy?: string;
    /**
     * 
     * @type {Date}
     * @memberof AuditInfo
     */
    updateDate?: Date;
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
        
        'createBy': !exists(json, 'createBy') ? undefined : json['createBy'],
        'createDate': !exists(json, 'createDate') ? undefined : (new Date(json['createDate'])),
        'updateBy': !exists(json, 'updateBy') ? undefined : json['updateBy'],
        'updateDate': !exists(json, 'updateDate') ? undefined : (new Date(json['updateDate'])),
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
        
        'createBy': value.createBy,
        'createDate': value.createDate === undefined ? undefined : (value.createDate.toISOString()),
        'updateBy': value.updateBy,
        'updateDate': value.updateDate === undefined ? undefined : (value.updateDate.toISOString()),
    };
}

