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
import type { AuditInfo } from './AuditInfo';
import {
    AuditInfoFromJSON,
    AuditInfoFromJSONTyped,
    AuditInfoToJSON,
} from './AuditInfo';

/**
 * Category
 * @export
 * @interface PriceList
 */
export interface PriceList {
    /**
     * External unique identifier of the PriceList. Must be unique an only contain url sanitized characters. Max length is 50
     * @type {string}
     * @memberof PriceList
     */
    priceListCode: string;
    /**
     * 
     * @type {number}
     * @memberof PriceList
     */
    priceListSequence?: number;
    /**
     * Parent PriceList code, Can be null for root level priceLists
     * @type {string}
     * @memberof PriceList
     */
    parentPriceListCode?: string | null;
    /**
     * Parent PriceList name, Can be null for root level priceLists. Read only in contract.
     * @type {string}
     * @memberof PriceList
     */
    parentPriceListName?: string | null;
    /**
     * Name of the priceList. Max length is 100
     * @type {string}
     * @memberof PriceList
     */
    name: string;
    /**
     * Description of the price list. Max length is 300
     * @type {string}
     * @memberof PriceList
     */
    description?: string | null;
    /**
     * Is the price list enabled and valid in the storefront. Default is true.
     * @type {boolean}
     * @memberof PriceList
     */
    enabled?: boolean | null;
    /**
     * When true, only products with valid price list entries will be visible in the storefront. Default is false
     * @type {boolean}
     * @memberof PriceList
     */
    filteredInStorefront?: boolean | null;
    /**
     * When true, no valid sites need to be specifiied. Price list is considered valid for all sites. Default is true
     * @type {boolean}
     * @memberof PriceList
     */
    validForAllSites?: boolean | null;
    /**
     * When ValidForAllSites = false, a list of siteIDs that the price list is valid for should be supplied
     * @type {Array<number>}
     * @memberof PriceList
     */
    validSites?: Array<number> | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof PriceList
     */
    defaultForSites?: Array<number> | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof PriceList
     */
    indexedSites?: Array<number> | null;
    /**
     * List of customer segment code associated with this price list.
     * Used to resolve default price list
     * @type {Array<string>}
     * @memberof PriceList
     */
    mappedCustomerSegments?: Array<string> | null;
    /**
     * Used to prioritize price list resolution when more than 1 price list maps
     * @type {number}
     * @memberof PriceList
     */
    rank?: number | null;
    /**
     * Determines if this price list can be resolved as the current price list 
     * within a session.
     * @type {boolean}
     * @memberof PriceList
     */
    resolvable?: boolean | null;
    /**
     * 
     * @type {AuditInfo}
     * @memberof PriceList
     */
    auditInfo?: AuditInfo;
}

/**
 * Check if a given object implements the PriceList interface.
 */
export function instanceOfPriceList(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "priceListCode" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function PriceListFromJSON(json: any): PriceList {
    return PriceListFromJSONTyped(json, false);
}

export function PriceListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PriceList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'priceListCode': json['priceListCode'],
        'priceListSequence': !exists(json, 'priceListSequence') ? undefined : json['priceListSequence'],
        'parentPriceListCode': !exists(json, 'parentPriceListCode') ? undefined : json['parentPriceListCode'],
        'parentPriceListName': !exists(json, 'parentPriceListName') ? undefined : json['parentPriceListName'],
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'filteredInStorefront': !exists(json, 'filteredInStorefront') ? undefined : json['filteredInStorefront'],
        'validForAllSites': !exists(json, 'validForAllSites') ? undefined : json['validForAllSites'],
        'validSites': !exists(json, 'validSites') ? undefined : json['validSites'],
        'defaultForSites': !exists(json, 'defaultForSites') ? undefined : json['defaultForSites'],
        'indexedSites': !exists(json, 'indexedSites') ? undefined : json['indexedSites'],
        'mappedCustomerSegments': !exists(json, 'mappedCustomerSegments') ? undefined : json['mappedCustomerSegments'],
        'rank': !exists(json, 'rank') ? undefined : json['rank'],
        'resolvable': !exists(json, 'resolvable') ? undefined : json['resolvable'],
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AuditInfoFromJSON(json['auditInfo']),
    };
}

export function PriceListToJSON(value?: PriceList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'priceListCode': value.priceListCode,
        'priceListSequence': value.priceListSequence,
        'parentPriceListCode': value.parentPriceListCode,
        'parentPriceListName': value.parentPriceListName,
        'name': value.name,
        'description': value.description,
        'enabled': value.enabled,
        'filteredInStorefront': value.filteredInStorefront,
        'validForAllSites': value.validForAllSites,
        'validSites': value.validSites,
        'defaultForSites': value.defaultForSites,
        'indexedSites': value.indexedSites,
        'mappedCustomerSegments': value.mappedCustomerSegments,
        'rank': value.rank,
        'resolvable': value.resolvable,
        'auditInfo': AuditInfoToJSON(value.auditInfo),
    };
}
