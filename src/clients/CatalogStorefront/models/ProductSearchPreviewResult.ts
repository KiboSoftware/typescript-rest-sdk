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
import type { Facet } from './Facet';
import {
    FacetFromJSON,
    FacetFromJSONTyped,
    FacetToJSON,
} from './Facet';
import type { Product } from './Product';
import {
    ProductFromJSON,
    ProductFromJSONTyped,
    ProductToJSON,
} from './Product';
import type { SolrDebugInfo } from './SolrDebugInfo';
import {
    SolrDebugInfoFromJSON,
    SolrDebugInfoFromJSONTyped,
    SolrDebugInfoToJSON,
} from './SolrDebugInfo';
import type { Spellcheck } from './Spellcheck';
import {
    SpellcheckFromJSON,
    SpellcheckFromJSONTyped,
    SpellcheckToJSON,
} from './Spellcheck';

/**
 * Products and search information returned for search preview query.
 * @export
 * @interface ProductSearchPreviewResult
 */
export interface ProductSearchPreviewResult {
    /**
     * 
     * @type {Array<Facet>}
     * @memberof ProductSearchPreviewResult
     */
    facets?: Array<Facet> | null;
    /**
     * 
     * @type {SolrDebugInfo}
     * @memberof ProductSearchPreviewResult
     */
    solrDebugInfo?: SolrDebugInfo;
    /**
     * 
     * @type {string}
     * @memberof ProductSearchPreviewResult
     */
    searchRedirect?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductSearchPreviewResult
     */
    searchEngine?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductSearchPreviewResult
     */
    nextCursorMark?: string | null;
    /**
     * 
     * @type {Spellcheck}
     * @memberof ProductSearchPreviewResult
     */
    spellcheck?: Spellcheck;
    /**
     * 
     * @type {number}
     * @memberof ProductSearchPreviewResult
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductSearchPreviewResult
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductSearchPreviewResult
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductSearchPreviewResult
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<Product>}
     * @memberof ProductSearchPreviewResult
     */
    items?: Array<Product> | null;
}

/**
 * Check if a given object implements the ProductSearchPreviewResult interface.
 */
export function instanceOfProductSearchPreviewResult(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductSearchPreviewResultFromJSON(json: any): ProductSearchPreviewResult {
    return ProductSearchPreviewResultFromJSONTyped(json, false);
}

export function ProductSearchPreviewResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductSearchPreviewResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facets': !exists(json, 'facets') ? undefined : (json['facets'] === null ? null : (json['facets'] as Array<any>).map(FacetFromJSON)),
        'solrDebugInfo': !exists(json, 'solrDebugInfo') ? undefined : SolrDebugInfoFromJSON(json['solrDebugInfo']),
        'searchRedirect': !exists(json, 'searchRedirect') ? undefined : json['searchRedirect'],
        'searchEngine': !exists(json, 'searchEngine') ? undefined : json['searchEngine'],
        'nextCursorMark': !exists(json, 'nextCursorMark') ? undefined : json['nextCursorMark'],
        'spellcheck': !exists(json, 'spellcheck') ? undefined : SpellcheckFromJSON(json['spellcheck']),
        'startIndex': !exists(json, 'startIndex') ? undefined : json['startIndex'],
        'pageSize': !exists(json, 'pageSize') ? undefined : json['pageSize'],
        'pageCount': !exists(json, 'pageCount') ? undefined : json['pageCount'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(ProductFromJSON)),
    };
}

export function ProductSearchPreviewResultToJSON(value?: ProductSearchPreviewResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facets': value.facets === undefined ? undefined : (value.facets === null ? null : (value.facets as Array<any>).map(FacetToJSON)),
        'solrDebugInfo': SolrDebugInfoToJSON(value.solrDebugInfo),
        'searchRedirect': value.searchRedirect,
        'searchEngine': value.searchEngine,
        'nextCursorMark': value.nextCursorMark,
        'spellcheck': SpellcheckToJSON(value.spellcheck),
        'startIndex': value.startIndex,
        'pageSize': value.pageSize,
        'pageCount': value.pageCount,
        'totalCount': value.totalCount,
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(ProductToJSON)),
    };
}

