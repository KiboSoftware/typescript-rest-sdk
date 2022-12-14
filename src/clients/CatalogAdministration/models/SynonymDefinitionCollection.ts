/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Admin Services
 * OpenAPI Spec for Kibo Catalog Admin Services
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { SynonymDefinition } from './SynonymDefinition';
import {
    SynonymDefinitionFromJSON,
    SynonymDefinitionFromJSONTyped,
    SynonymDefinitionToJSON,
} from './SynonymDefinition';

/**
 * Non-paged collection of all synonyms for a Site-Locale. Used for bulk operations
 * @export
 * @interface SynonymDefinitionCollection
 */
export interface SynonymDefinitionCollection {
    /**
     * Read-only TenantId
     * @type {number}
     * @memberof SynonymDefinitionCollection
     */
    tenantId?: number;
    /**
     * Read-only  Site Id
     * @type {number}
     * @memberof SynonymDefinitionCollection
     */
    siteId?: number;
    /**
     * The locale code to which this definition applies
     * @type {string}
     * @memberof SynonymDefinitionCollection
     */
    localeCode?: string | null;
    /**
     * List of mappings for this definition
     * @type {Array<SynonymDefinition>}
     * @memberof SynonymDefinitionCollection
     */
    synonymDefinitions?: Array<SynonymDefinition> | null;
}

/**
 * Check if a given object implements the SynonymDefinitionCollection interface.
 */
export function instanceOfSynonymDefinitionCollection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SynonymDefinitionCollectionFromJSON(json: any): SynonymDefinitionCollection {
    return SynonymDefinitionCollectionFromJSONTyped(json, false);
}

export function SynonymDefinitionCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SynonymDefinitionCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tenantId': !exists(json, 'tenantId') ? undefined : json['tenantId'],
        'siteId': !exists(json, 'siteId') ? undefined : json['siteId'],
        'localeCode': !exists(json, 'localeCode') ? undefined : json['localeCode'],
        'synonymDefinitions': !exists(json, 'synonymDefinitions') ? undefined : (json['synonymDefinitions'] === null ? null : (json['synonymDefinitions'] as Array<any>).map(SynonymDefinitionFromJSON)),
    };
}

export function SynonymDefinitionCollectionToJSON(value?: SynonymDefinitionCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tenantId': value.tenantId,
        'siteId': value.siteId,
        'localeCode': value.localeCode,
        'synonymDefinitions': value.synonymDefinitions === undefined ? undefined : (value.synonymDefinitions === null ? null : (value.synonymDefinitions as Array<any>).map(SynonymDefinitionToJSON)),
    };
}

