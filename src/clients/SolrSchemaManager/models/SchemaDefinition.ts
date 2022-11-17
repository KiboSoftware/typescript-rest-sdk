/* tslint:disable */
/* eslint-disable */
/**
 * Kibo ProductRuntime Service
 * OpenAPI Spec for Kibo ProductRuntime Service
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
import type { SchemaDefinitionField } from './SchemaDefinitionField';
import {
    SchemaDefinitionFieldFromJSON,
    SchemaDefinitionFieldFromJSONTyped,
    SchemaDefinitionFieldToJSON,
} from './SchemaDefinitionField';
import type { SpellingSchemaDefinitionField } from './SpellingSchemaDefinitionField';
import {
    SpellingSchemaDefinitionFieldFromJSON,
    SpellingSchemaDefinitionFieldFromJSONTyped,
    SpellingSchemaDefinitionFieldToJSON,
} from './SpellingSchemaDefinitionField';

/**
 * 
 * @export
 * @interface SchemaDefinition
 */
export interface SchemaDefinition {
    /**
     * 
     * @type {string}
     * @memberof SchemaDefinition
     */
    language: string;
    /**
     * 
     * @type {boolean}
     * @memberof SchemaDefinition
     */
    isPublished?: boolean;
    /**
     * 
     * @type {Array<SchemaDefinitionField>}
     * @memberof SchemaDefinition
     */
    fields: Array<SchemaDefinitionField>;
    /**
     * List of attributes used in the spelling dictionary
     * @type {Array<SpellingSchemaDefinitionField>}
     * @memberof SchemaDefinition
     */
    spellingFields?: Array<SpellingSchemaDefinitionField> | null;
    /**
     * Returns boolean if contains any SpellingFields members.
     * @type {boolean}
     * @memberof SchemaDefinition
     */
    spellCorrectEnabled?: boolean | null;
    /**
     * 
     * @type {AuditInfo}
     * @memberof SchemaDefinition
     */
    auditInfo?: AuditInfo;
}

/**
 * Check if a given object implements the SchemaDefinition interface.
 */
export function instanceOfSchemaDefinition(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "language" in value;
    isInstance = isInstance && "fields" in value;

    return isInstance;
}

export function SchemaDefinitionFromJSON(json: any): SchemaDefinition {
    return SchemaDefinitionFromJSONTyped(json, false);
}

export function SchemaDefinitionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SchemaDefinition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'language': json['language'],
        'isPublished': !exists(json, 'isPublished') ? undefined : json['isPublished'],
        'fields': ((json['fields'] as Array<any>).map(SchemaDefinitionFieldFromJSON)),
        'spellingFields': !exists(json, 'spellingFields') ? undefined : (json['spellingFields'] === null ? null : (json['spellingFields'] as Array<any>).map(SpellingSchemaDefinitionFieldFromJSON)),
        'spellCorrectEnabled': !exists(json, 'spellCorrectEnabled') ? undefined : json['spellCorrectEnabled'],
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AuditInfoFromJSON(json['auditInfo']),
    };
}

export function SchemaDefinitionToJSON(value?: SchemaDefinition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'language': value.language,
        'isPublished': value.isPublished,
        'fields': ((value.fields as Array<any>).map(SchemaDefinitionFieldToJSON)),
        'spellingFields': value.spellingFields === undefined ? undefined : (value.spellingFields === null ? null : (value.spellingFields as Array<any>).map(SpellingSchemaDefinitionFieldToJSON)),
        'spellCorrectEnabled': value.spellCorrectEnabled,
        'auditInfo': AuditInfoToJSON(value.auditInfo),
    };
}

