/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Fulfillment Service
 * OpenAPI Spec for Kibo Fulfillment Service
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
 * @interface FulfillmentAuditInfo
 */
export interface FulfillmentAuditInfo {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAuditInfo
     */
    createBy?: string;
    /**
     * 
     * @type {Date}
     * @memberof FulfillmentAuditInfo
     */
    createDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAuditInfo
     */
    updateBy?: string;
    /**
     * 
     * @type {Date}
     * @memberof FulfillmentAuditInfo
     */
    updateDate?: Date;
}

/**
 * Check if a given object implements the FulfillmentAuditInfo interface.
 */
export function instanceOfFulfillmentAuditInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FulfillmentAuditInfoFromJSON(json: any): FulfillmentAuditInfo {
    return FulfillmentAuditInfoFromJSONTyped(json, false);
}

export function FulfillmentAuditInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): FulfillmentAuditInfo {
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

export function FulfillmentAuditInfoToJSON(value?: FulfillmentAuditInfo | null): any {
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

