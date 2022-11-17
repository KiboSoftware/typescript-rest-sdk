/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Runtime Services
 * OpenAPI Spec for Kibo Catalog Runtime Services
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { SearchSuggestion } from './SearchSuggestion';
import {
    SearchSuggestionFromJSON,
    SearchSuggestionFromJSONTyped,
    SearchSuggestionToJSON,
} from './SearchSuggestion';

/**
 * 
 * @export
 * @interface SearchSuggestionGroup
 */
export interface SearchSuggestionGroup {
    /**
     * Group Name
     * @type {string}
     * @memberof SearchSuggestionGroup
     */
    name?: string | null;
    /**
     * List of related SearchSuggestions
     * @type {Array<SearchSuggestion>}
     * @memberof SearchSuggestionGroup
     */
    suggestions?: Array<SearchSuggestion> | null;
}

/**
 * Check if a given object implements the SearchSuggestionGroup interface.
 */
export function instanceOfSearchSuggestionGroup(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SearchSuggestionGroupFromJSON(json: any): SearchSuggestionGroup {
    return SearchSuggestionGroupFromJSONTyped(json, false);
}

export function SearchSuggestionGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchSuggestionGroup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'suggestions': !exists(json, 'suggestions') ? undefined : (json['suggestions'] === null ? null : (json['suggestions'] as Array<any>).map(SearchSuggestionFromJSON)),
    };
}

export function SearchSuggestionGroupToJSON(value?: SearchSuggestionGroup | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'suggestions': value.suggestions === undefined ? undefined : (value.suggestions === null ? null : (value.suggestions as Array<any>).map(SearchSuggestionToJSON)),
    };
}

