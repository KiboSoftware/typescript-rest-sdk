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

/**
 * Internal notes that a merchant may add to the order. Maximum 250 characters.
 * @export
 * @interface OrderNote
 */
export interface OrderNote {
    /**
     * Unique identifier of the note. System-supplied and read-only.
     * @type {string}
     * @memberof OrderNote
     */
    id?: string | null;
    /**
     * Text of the note. Maximum 250 characters.
     * @type {string}
     * @memberof OrderNote
     */
    text?: string | null;
    /**
     * 
     * @type {AuditInfo}
     * @memberof OrderNote
     */
    auditInfo?: AuditInfo;
}

/**
 * Check if a given object implements the OrderNote interface.
 */
export function instanceOfOrderNote(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrderNoteFromJSON(json: any): OrderNote {
    return OrderNoteFromJSONTyped(json, false);
}

export function OrderNoteFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderNote {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'text': !exists(json, 'text') ? undefined : json['text'],
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AuditInfoFromJSON(json['auditInfo']),
    };
}

export function OrderNoteToJSON(value?: OrderNote | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'text': value.text,
        'auditInfo': AuditInfoToJSON(value.auditInfo),
    };
}
