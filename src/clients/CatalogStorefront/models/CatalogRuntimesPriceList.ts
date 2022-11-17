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
import type { PriceListNode } from './PriceListNode';
import {
    PriceListNodeFromJSON,
    PriceListNodeFromJSONTyped,
    PriceListNodeToJSON,
} from './PriceListNode';

/**
 * 
 * @export
 * @interface CatalogRuntimesPriceList
 */
export interface CatalogRuntimesPriceList {
    /**
     * 
     * @type {string}
     * @memberof CatalogRuntimesPriceList
     */
    priceListCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CatalogRuntimesPriceList
     */
    priceListId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CatalogRuntimesPriceList
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CatalogRuntimesPriceList
     */
    name?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CatalogRuntimesPriceList
     */
    resolvable?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CatalogRuntimesPriceList
     */
    isIndexed?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CatalogRuntimesPriceList
     */
    filteredInStoreFront?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CatalogRuntimesPriceList
     */
    isSiteDefault?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CatalogRuntimesPriceList
     */
    description?: string | null;
    /**
     * 
     * @type {Array<PriceListNode>}
     * @memberof CatalogRuntimesPriceList
     */
    ancestors?: Array<PriceListNode> | null;
    /**
     * 
     * @type {Array<PriceListNode>}
     * @memberof CatalogRuntimesPriceList
     */
    descendants?: Array<PriceListNode> | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof CatalogRuntimesPriceList
     */
    validSites?: Array<number> | null;
}

/**
 * Check if a given object implements the CatalogRuntimesPriceList interface.
 */
export function instanceOfCatalogRuntimesPriceList(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CatalogRuntimesPriceListFromJSON(json: any): CatalogRuntimesPriceList {
    return CatalogRuntimesPriceListFromJSONTyped(json, false);
}

export function CatalogRuntimesPriceListFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogRuntimesPriceList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'priceListCode': !exists(json, 'priceListCode') ? undefined : json['priceListCode'],
        'priceListId': !exists(json, 'priceListId') ? undefined : json['priceListId'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'resolvable': !exists(json, 'resolvable') ? undefined : json['resolvable'],
        'isIndexed': !exists(json, 'isIndexed') ? undefined : json['isIndexed'],
        'filteredInStoreFront': !exists(json, 'filteredInStoreFront') ? undefined : json['filteredInStoreFront'],
        'isSiteDefault': !exists(json, 'isSiteDefault') ? undefined : json['isSiteDefault'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'ancestors': !exists(json, 'ancestors') ? undefined : (json['ancestors'] === null ? null : (json['ancestors'] as Array<any>).map(PriceListNodeFromJSON)),
        'descendants': !exists(json, 'descendants') ? undefined : (json['descendants'] === null ? null : (json['descendants'] as Array<any>).map(PriceListNodeFromJSON)),
        'validSites': !exists(json, 'validSites') ? undefined : json['validSites'],
    };
}

export function CatalogRuntimesPriceListToJSON(value?: CatalogRuntimesPriceList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'priceListCode': value.priceListCode,
        'priceListId': value.priceListId,
        'enabled': value.enabled,
        'name': value.name,
        'resolvable': value.resolvable,
        'isIndexed': value.isIndexed,
        'filteredInStoreFront': value.filteredInStoreFront,
        'isSiteDefault': value.isSiteDefault,
        'description': value.description,
        'ancestors': value.ancestors === undefined ? undefined : (value.ancestors === null ? null : (value.ancestors as Array<any>).map(PriceListNodeToJSON)),
        'descendants': value.descendants === undefined ? undefined : (value.descendants === null ? null : (value.descendants as Array<any>).map(PriceListNodeToJSON)),
        'validSites': value.validSites,
    };
}

