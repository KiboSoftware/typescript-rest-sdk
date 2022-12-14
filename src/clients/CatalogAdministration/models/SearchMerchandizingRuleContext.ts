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
import type { SearchMerchandizingRuleCondition } from './SearchMerchandizingRuleCondition';
import {
    SearchMerchandizingRuleConditionFromJSON,
    SearchMerchandizingRuleConditionFromJSONTyped,
    SearchMerchandizingRuleConditionToJSON,
} from './SearchMerchandizingRuleCondition';
import type { SearchType } from './SearchType';
import {
    SearchTypeFromJSON,
    SearchTypeFromJSONTyped,
    SearchTypeToJSON,
} from './SearchType';

/**
 * SearchMerchandizingRule Condition
 * @export
 * @interface SearchMerchandizingRuleContext
 */
export interface SearchMerchandizingRuleContext {
    /**
     * 
     * @type {SearchType}
     * @memberof SearchMerchandizingRuleContext
     */
    searchType?: SearchType;
    /**
     * StartDate
     * @type {Date}
     * @memberof SearchMerchandizingRuleContext
     */
    startDate?: Date | null;
    /**
     * Defaults to MAXDATE
     * @type {Date}
     * @memberof SearchMerchandizingRuleContext
     */
    endDate?: Date | null;
    /**
     * 
     * @type {SearchMerchandizingRuleCondition}
     * @memberof SearchMerchandizingRuleContext
     */
    condition?: SearchMerchandizingRuleCondition;
}

/**
 * Check if a given object implements the SearchMerchandizingRuleContext interface.
 */
export function instanceOfSearchMerchandizingRuleContext(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SearchMerchandizingRuleContextFromJSON(json: any): SearchMerchandizingRuleContext {
    return SearchMerchandizingRuleContextFromJSONTyped(json, false);
}

export function SearchMerchandizingRuleContextFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchMerchandizingRuleContext {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'searchType': !exists(json, 'searchType') ? undefined : SearchTypeFromJSON(json['searchType']),
        'startDate': !exists(json, 'startDate') ? undefined : (json['startDate'] === null ? null : new Date(json['startDate'])),
        'endDate': !exists(json, 'endDate') ? undefined : (json['endDate'] === null ? null : new Date(json['endDate'])),
        'condition': !exists(json, 'condition') ? undefined : SearchMerchandizingRuleConditionFromJSON(json['condition']),
    };
}

export function SearchMerchandizingRuleContextToJSON(value?: SearchMerchandizingRuleContext | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'searchType': SearchTypeToJSON(value.searchType),
        'startDate': value.startDate === undefined ? undefined : (value.startDate === null ? null : value.startDate.toISOString()),
        'endDate': value.endDate === undefined ? undefined : (value.endDate === null ? null : value.endDate.toISOString()),
        'condition': SearchMerchandizingRuleConditionToJSON(value.condition),
    };
}

