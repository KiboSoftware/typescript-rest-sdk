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
 * @interface SearchTuningRuleSortFields
 */
export interface SearchTuningRuleSortFields {
    /**
     * 
     * @type {Array<string>}
     * @memberof SearchTuningRuleSortFields
     */
    sortFields?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof SearchTuningRuleSortFields
     */
    inclusionExclusionType?: string | null;
}

/**
 * Check if a given object implements the SearchTuningRuleSortFields interface.
 */
export function instanceOfSearchTuningRuleSortFields(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SearchTuningRuleSortFieldsFromJSON(json: any): SearchTuningRuleSortFields {
    return SearchTuningRuleSortFieldsFromJSONTyped(json, false);
}

export function SearchTuningRuleSortFieldsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchTuningRuleSortFields {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sortFields': !exists(json, 'sortFields') ? undefined : json['sortFields'],
        'inclusionExclusionType': !exists(json, 'inclusionExclusionType') ? undefined : json['inclusionExclusionType'],
    };
}

export function SearchTuningRuleSortFieldsToJSON(value?: SearchTuningRuleSortFields | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sortFields': value.sortFields,
        'inclusionExclusionType': value.inclusionExclusionType,
    };
}

