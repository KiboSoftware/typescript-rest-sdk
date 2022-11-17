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
 * @interface AuditInfo0
 */
export interface AuditInfo0 {
    /**
     * 
     * @type {string}
     * @memberof AuditInfo0
     */
    createBy?: string;
    /**
     * 
     * @type {Date}
     * @memberof AuditInfo0
     */
    createDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof AuditInfo0
     */
    updateBy?: string;
    /**
     * 
     * @type {Date}
     * @memberof AuditInfo0
     */
    updateDate?: Date;
}

/**
 * Check if a given object implements the AuditInfo0 interface.
 */
export function instanceOfAuditInfo0(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AuditInfo0FromJSON(json: any): AuditInfo0 {
    return AuditInfo0FromJSONTyped(json, false);
}

export function AuditInfo0FromJSONTyped(json: any, ignoreDiscriminator: boolean): AuditInfo0 {
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

export function AuditInfo0ToJSON(value?: AuditInfo0 | null): any {
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

