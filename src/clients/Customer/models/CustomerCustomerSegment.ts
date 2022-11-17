/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Customer Service
 * OpenAPI Spec for Kibo Customer Service
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AdminUserAuditInfo } from './AdminUserAuditInfo';
import {
    AdminUserAuditInfoFromJSON,
    AdminUserAuditInfoFromJSONTyped,
    AdminUserAuditInfoToJSON,
} from './AdminUserAuditInfo';

/**
 * A customer segment.
 * @export
 * @interface CustomerCustomerSegment
 */
export interface CustomerCustomerSegment {
    /**
     * Unique identifier of the customer segment.
     * @type {number}
     * @memberof CustomerCustomerSegment
     */
    id?: number;
    /**
     * Unique identifier of the customer segment.
     * @type {string}
     * @memberof CustomerCustomerSegment
     */
    code?: string | null;
    /**
     * Name of the customer segment.
     * @type {string}
     * @memberof CustomerCustomerSegment
     */
    name?: string | null;
    /**
     * Description of the customer segment.
     * @type {string}
     * @memberof CustomerCustomerSegment
     */
    description?: string | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CustomerCustomerSegment
     */
    auditInfo?: AdminUserAuditInfo;
}

/**
 * Check if a given object implements the CustomerCustomerSegment interface.
 */
export function instanceOfCustomerCustomerSegment(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerCustomerSegmentFromJSON(json: any): CustomerCustomerSegment {
    return CustomerCustomerSegmentFromJSONTyped(json, false);
}

export function CustomerCustomerSegmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerCustomerSegment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AdminUserAuditInfoFromJSON(json['auditInfo']),
    };
}

export function CustomerCustomerSegmentToJSON(value?: CustomerCustomerSegment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'code': value.code,
        'name': value.name,
        'description': value.description,
        'auditInfo': AdminUserAuditInfoToJSON(value.auditInfo),
    };
}

