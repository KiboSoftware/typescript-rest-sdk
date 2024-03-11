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
import type { SearchTuningRule } from './SearchTuningRule';
import {
    SearchTuningRuleFromJSON,
    SearchTuningRuleFromJSONTyped,
    SearchTuningRuleToJSON,
} from './SearchTuningRule';

/**
 * 
 * @export
 * @interface SearchTuningRuleCollection
 */
export interface SearchTuningRuleCollection {
    /**
     * 
     * @type {number}
     * @memberof SearchTuningRuleCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof SearchTuningRuleCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof SearchTuningRuleCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof SearchTuningRuleCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<SearchTuningRule>}
     * @memberof SearchTuningRuleCollection
     */
    items?: Array<SearchTuningRule> | null;
}

/**
 * Check if a given object implements the SearchTuningRuleCollection interface.
 */
export function instanceOfSearchTuningRuleCollection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SearchTuningRuleCollectionFromJSON(json: any): SearchTuningRuleCollection {
    return SearchTuningRuleCollectionFromJSONTyped(json, false);
}

export function SearchTuningRuleCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchTuningRuleCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'startIndex': !exists(json, 'startIndex') ? undefined : json['startIndex'],
        'pageSize': !exists(json, 'pageSize') ? undefined : json['pageSize'],
        'pageCount': !exists(json, 'pageCount') ? undefined : json['pageCount'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(SearchTuningRuleFromJSON)),
    };
}

export function SearchTuningRuleCollectionToJSON(value?: SearchTuningRuleCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'startIndex': value.startIndex,
        'pageSize': value.pageSize,
        'pageCount': value.pageCount,
        'totalCount': value.totalCount,
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(SearchTuningRuleToJSON)),
    };
}
