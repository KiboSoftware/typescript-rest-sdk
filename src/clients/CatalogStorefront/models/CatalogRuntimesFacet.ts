/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Runtime Services
 * OpenAPI Spec for Kibo Catalog Runtime Services
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FacetValue } from './FacetValue';
import {
    FacetValueFromJSON,
    FacetValueFromJSONTyped,
    FacetValueToJSON,
} from './FacetValue';

/**
 * For faceted searches, name of the facet and list of facet values. For example, a facet called "Brands" may have the facet values "Apple," "Motorola," and "Samsung."
 * @export
 * @interface CatalogRuntimesFacet
 */
export interface CatalogRuntimesFacet {
    /**
     * 
     * @type {string}
     * @memberof CatalogRuntimesFacet
     */
    label?: string | null;
    /**
     * Value, RangeQuery, Hierarchy
     * @type {string}
     * @memberof CatalogRuntimesFacet
     */
    facetType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogRuntimesFacet
     */
    field?: string | null;
    /**
     * 
     * @type {Array<FacetValue>}
     * @memberof CatalogRuntimesFacet
     */
    values?: Array<FacetValue> | null;
}

/**
 * Check if a given object implements the CatalogRuntimesFacet interface.
 */
export function instanceOfCatalogRuntimesFacet(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CatalogRuntimesFacetFromJSON(json: any): CatalogRuntimesFacet {
    return CatalogRuntimesFacetFromJSONTyped(json, false);
}

export function CatalogRuntimesFacetFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogRuntimesFacet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'label': !exists(json, 'label') ? undefined : json['label'],
        'facetType': !exists(json, 'facetType') ? undefined : json['facetType'],
        'field': !exists(json, 'field') ? undefined : json['field'],
        'values': !exists(json, 'values') ? undefined : (json['values'] === null ? null : (json['values'] as Array<any>).map(FacetValueFromJSON)),
    };
}

export function CatalogRuntimesFacetToJSON(value?: CatalogRuntimesFacet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'label': value.label,
        'facetType': value.facetType,
        'field': value.field,
        'values': value.values === undefined ? undefined : (value.values === null ? null : (value.values as Array<any>).map(FacetValueToJSON)),
    };
}

