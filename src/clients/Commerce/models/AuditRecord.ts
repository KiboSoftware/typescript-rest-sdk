/* tslint:disable */
/* eslint-disable */
/**
 * Kibo CommerceRuntime Service
 * OpenAPI Spec for Kibo CommerceRuntime Service
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
import type { AuditRecordChange } from './AuditRecordChange';
import {
    AuditRecordChangeFromJSON,
    AuditRecordChangeFromJSONTyped,
    AuditRecordChangeToJSON,
} from './AuditRecordChange';

/**
 * Group a set of changes made by a single user into a single audit history entry.
 * @export
 * @interface AuditRecord
 */
export interface AuditRecord {
    /**
     * 
     * @type {string}
     * @memberof AuditRecord
     */
    id?: string | null;
    /**
     * List of changes for this audit history entry.
     * @type {Array<AuditRecordChange>}
     * @memberof AuditRecord
     */
    changes?: Array<AuditRecordChange> | null;
    /**
     * 
     * @type {AuditInfo}
     * @memberof AuditRecord
     */
    auditInfo?: AuditInfo;
}

/**
 * Check if a given object implements the AuditRecord interface.
 */
export function instanceOfAuditRecord(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AuditRecordFromJSON(json: any): AuditRecord {
    return AuditRecordFromJSONTyped(json, false);
}

export function AuditRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuditRecord {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'changes': !exists(json, 'changes') ? undefined : (json['changes'] === null ? null : (json['changes'] as Array<any>).map(AuditRecordChangeFromJSON)),
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AuditInfoFromJSON(json['auditInfo']),
    };
}

export function AuditRecordToJSON(value?: AuditRecord | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'changes': value.changes === undefined ? undefined : (value.changes === null ? null : (value.changes as Array<any>).map(AuditRecordChangeToJSON)),
        'auditInfo': AuditInfoToJSON(value.auditInfo),
    };
}
