/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Admin Services
 * OpenAPI Spec for Kibo Catalog Admin Services
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AdminUserAuditInfo } from './AdminUserAuditInfo';
import {
    AdminUserAuditInfoFromJSON,
    AdminUserAuditInfoFromJSONTyped,
    AdminUserAuditInfoToJSON,
} from './AdminUserAuditInfo';
import type { FacetRangeQuery } from './FacetRangeQuery';
import {
    FacetRangeQueryFromJSON,
    FacetRangeQueryFromJSONTyped,
    FacetRangeQueryToJSON,
} from './FacetRangeQuery';
import type { FacetSource } from './FacetSource';
import {
    FacetSourceFromJSON,
    FacetSourceFromJSONTyped,
    FacetSourceToJSON,
} from './FacetSource';
import type { FacetValidity } from './FacetValidity';
import {
    FacetValidityFromJSON,
    FacetValidityFromJSONTyped,
    FacetValidityToJSON,
} from './FacetValidity';

/**
 * The definition of a Facet
 * @export
 * @interface CatalogAdminsFacet
 */
export interface CatalogAdminsFacet {
    /**
     * The unique identifier for the facet definition
     * @type {number}
     * @memberof CatalogAdminsFacet
     */
    facetId?: number | null;
    /**
     * 
     * @type {FacetSource}
     * @memberof CatalogAdminsFacet
     */
    source?: FacetSource;
    /**
     * The type of facet. Allowable values are: Value, RangeQuery 
     * Must be a valid value for DataType defined in FacetTypeConst.
     * @type {string}
     * @memberof CatalogAdminsFacet
     */
    facetType?: string | null;
    /**
     * Used to order the display of the facets within a section
     * @type {number}
     * @memberof CatalogAdminsFacet
     */
    order?: number;
    /**
     * The category that the facet is being configured at
     * @type {number}
     * @memberof CatalogAdminsFacet
     */
    categoryId?: number | null;
    /**
     * The category that the facet is being configured at
     * @type {string}
     * @memberof CatalogAdminsFacet
     */
    categoryCode?: string | null;
    /**
     * Determines how the facet values will be sorted in the store. 
     * Must be a valid value for DataType defined in FacetValueSortTypeConst. 
     * Allowable values are: CountAscending, CountDescending, ValuesAscending, ValuesDescending, AttributeDefinition, AttributeDefinitionDescending.
     * The default if no value is specified will be CountDescending.
     * @type {string}
     * @memberof CatalogAdminsFacet
     */
    valueSortType?: string | null;
    /**
     * The ID of a parent category's facet being overriden
     * @type {number}
     * @memberof CatalogAdminsFacet
     */
    overrideFacetId?: number | null;
    /**
     * Indicates whether the facet is hidden for the given category
     * @type {boolean}
     * @memberof CatalogAdminsFacet
     */
    isHidden?: boolean;
    /**
     * 
     * @type {FacetValidity}
     * @memberof CatalogAdminsFacet
     */
    validity?: FacetValidity;
    /**
     * List of ranges if the Facet is of type Range
     * @type {Array<FacetRangeQuery>}
     * @memberof CatalogAdminsFacet
     */
    rangeQueries?: Array<FacetRangeQuery> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CatalogAdminsFacet
     */
    auditInfo?: AdminUserAuditInfo;
}

/**
 * Check if a given object implements the CatalogAdminsFacet interface.
 */
export function instanceOfCatalogAdminsFacet(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CatalogAdminsFacetFromJSON(json: any): CatalogAdminsFacet {
    return CatalogAdminsFacetFromJSONTyped(json, false);
}

export function CatalogAdminsFacetFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogAdminsFacet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facetId': !exists(json, 'facetId') ? undefined : json['facetId'],
        'source': !exists(json, 'source') ? undefined : FacetSourceFromJSON(json['source']),
        'facetType': !exists(json, 'facetType') ? undefined : json['facetType'],
        'order': !exists(json, 'order') ? undefined : json['order'],
        'categoryId': !exists(json, 'categoryId') ? undefined : json['categoryId'],
        'categoryCode': !exists(json, 'categoryCode') ? undefined : json['categoryCode'],
        'valueSortType': !exists(json, 'valueSortType') ? undefined : json['valueSortType'],
        'overrideFacetId': !exists(json, 'overrideFacetId') ? undefined : json['overrideFacetId'],
        'isHidden': !exists(json, 'isHidden') ? undefined : json['isHidden'],
        'validity': !exists(json, 'validity') ? undefined : FacetValidityFromJSON(json['validity']),
        'rangeQueries': !exists(json, 'rangeQueries') ? undefined : (json['rangeQueries'] === null ? null : (json['rangeQueries'] as Array<any>).map(FacetRangeQueryFromJSON)),
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AdminUserAuditInfoFromJSON(json['auditInfo']),
    };
}

export function CatalogAdminsFacetToJSON(value?: CatalogAdminsFacet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facetId': value.facetId,
        'source': FacetSourceToJSON(value.source),
        'facetType': value.facetType,
        'order': value.order,
        'categoryId': value.categoryId,
        'categoryCode': value.categoryCode,
        'valueSortType': value.valueSortType,
        'overrideFacetId': value.overrideFacetId,
        'isHidden': value.isHidden,
        'validity': FacetValidityToJSON(value.validity),
        'rangeQueries': value.rangeQueries === undefined ? undefined : (value.rangeQueries === null ? null : (value.rangeQueries as Array<any>).map(FacetRangeQueryToJSON)),
        'auditInfo': AdminUserAuditInfoToJSON(value.auditInfo),
    };
}

