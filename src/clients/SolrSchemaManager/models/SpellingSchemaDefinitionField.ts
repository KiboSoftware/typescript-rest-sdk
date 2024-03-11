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
/**
 * 
 * @export
 * @interface SpellingSchemaDefinitionField
 */
export interface SpellingSchemaDefinitionField {
    /**
     * 
     * @type {string}
     * @memberof SpellingSchemaDefinitionField
     */
    ingestFieldName?: string | null;
}

/**
 * Check if a given object implements the SpellingSchemaDefinitionField interface.
 */
export function instanceOfSpellingSchemaDefinitionField(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SpellingSchemaDefinitionFieldFromJSON(json: any): SpellingSchemaDefinitionField {
    return SpellingSchemaDefinitionFieldFromJSONTyped(json, false);
}

export function SpellingSchemaDefinitionFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpellingSchemaDefinitionField {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ingestFieldName': !exists(json, 'ingestFieldName') ? undefined : json['ingestFieldName'],
    };
}

export function SpellingSchemaDefinitionFieldToJSON(value?: SpellingSchemaDefinitionField | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ingestFieldName': value.ingestFieldName,
    };
}
