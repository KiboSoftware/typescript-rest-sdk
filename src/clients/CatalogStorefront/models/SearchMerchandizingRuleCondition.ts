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
import type { SearchMerchandizingRuleField } from './SearchMerchandizingRuleField';
import {
    SearchMerchandizingRuleFieldFromJSON,
    SearchMerchandizingRuleFieldFromJSONTyped,
    SearchMerchandizingRuleFieldToJSON,
} from './SearchMerchandizingRuleField';

/**
 * 
 * @export
 * @interface SearchMerchandizingRuleCondition
 */
export interface SearchMerchandizingRuleCondition {
    /**
     * 
     * @type {Array<string>}
     * @memberof SearchMerchandizingRuleCondition
     */
    terms?: Array<string> | null;
    /**
     * 
     * @type {Array<SearchMerchandizingRuleField>}
     * @memberof SearchMerchandizingRuleCondition
     */
    fields?: Array<SearchMerchandizingRuleField> | null;
}

/**
 * Check if a given object implements the SearchMerchandizingRuleCondition interface.
 */
export function instanceOfSearchMerchandizingRuleCondition(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SearchMerchandizingRuleConditionFromJSON(json: any): SearchMerchandizingRuleCondition {
    return SearchMerchandizingRuleConditionFromJSONTyped(json, false);
}

export function SearchMerchandizingRuleConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchMerchandizingRuleCondition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'terms': !exists(json, 'terms') ? undefined : json['terms'],
        'fields': !exists(json, 'fields') ? undefined : (json['fields'] === null ? null : (json['fields'] as Array<any>).map(SearchMerchandizingRuleFieldFromJSON)),
    };
}

export function SearchMerchandizingRuleConditionToJSON(value?: SearchMerchandizingRuleCondition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'terms': value.terms,
        'fields': value.fields === undefined ? undefined : (value.fields === null ? null : (value.fields as Array<any>).map(SearchMerchandizingRuleFieldToJSON)),
    };
}

