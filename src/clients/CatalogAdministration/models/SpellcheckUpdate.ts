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
/**
 * 
 * @export
 * @interface SpellcheckUpdate
 */
export interface SpellcheckUpdate {
    /**
     * Spellcheck true/false
     * @type {boolean}
     * @memberof SpellcheckUpdate
     */
    spellcheckEnabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SpellcheckUpdate
     */
    tenantId?: number;
    /**
     * 
     * @type {number}
     * @memberof SpellcheckUpdate
     */
    masterCatalogId?: number;
    /**
     * e.g en-US
     * @type {string}
     * @memberof SpellcheckUpdate
     */
    localeCode?: string | null;
}

/**
 * Check if a given object implements the SpellcheckUpdate interface.
 */
export function instanceOfSpellcheckUpdate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SpellcheckUpdateFromJSON(json: any): SpellcheckUpdate {
    return SpellcheckUpdateFromJSONTyped(json, false);
}

export function SpellcheckUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpellcheckUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'spellcheckEnabled': !exists(json, 'spellcheckEnabled') ? undefined : json['spellcheckEnabled'],
        'tenantId': !exists(json, 'tenantId') ? undefined : json['tenantId'],
        'masterCatalogId': !exists(json, 'masterCatalogId') ? undefined : json['masterCatalogId'],
        'localeCode': !exists(json, 'localeCode') ? undefined : json['localeCode'],
    };
}

export function SpellcheckUpdateToJSON(value?: SpellcheckUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'spellcheckEnabled': value.spellcheckEnabled,
        'tenantId': value.tenantId,
        'masterCatalogId': value.masterCatalogId,
        'localeCode': value.localeCode,
    };
}

