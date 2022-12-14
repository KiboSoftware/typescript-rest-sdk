/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Customer Service
 * OpenAPI Spec for Kibo Customer Service
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AuditInfo } from './AuditInfo';
import {
    AuditInfoFromJSON,
    AuditInfoFromJSONTyped,
    AuditInfoToJSON,
} from './AuditInfo';

/**
 * A customer segment.
 * @export
 * @interface CustomerSegment
 */
export interface CustomerSegment {
    /**
     * Unique identifier of the customer segment.
     * @type {number}
     * @memberof CustomerSegment
     */
    id?: number;
    /**
     * Unique identifier of the customer segment.
     * @type {string}
     * @memberof CustomerSegment
     */
    code?: string | null;
    /**
     * Name of the customer segment.
     * @type {string}
     * @memberof CustomerSegment
     */
    name?: string | null;
    /**
     * Description of the customer segment.
     * @type {string}
     * @memberof CustomerSegment
     */
    description?: string | null;
    /**
     * 
     * @type {AuditInfo}
     * @memberof CustomerSegment
     */
    auditInfo?: AuditInfo;
}

/**
 * Check if a given object implements the CustomerSegment interface.
 */
export function instanceOfCustomerSegment(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerSegmentFromJSON(json: any): CustomerSegment {
    return CustomerSegmentFromJSONTyped(json, false);
}

export function CustomerSegmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerSegment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AuditInfoFromJSON(json['auditInfo']),
    };
}

export function CustomerSegmentToJSON(value?: CustomerSegment | null): any {
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
        'auditInfo': AuditInfoToJSON(value.auditInfo),
    };
}

