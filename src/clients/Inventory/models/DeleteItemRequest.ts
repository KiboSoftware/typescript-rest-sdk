/* tslint:disable */
/* eslint-disable */
/**
 * Inventory
 * Swagger JSON for inventory apis
 *
 * The version of the OpenAPI document: 5.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Request needed for deleting inventory
 * @export
 * @interface DeleteItemRequest
 */
export interface DeleteItemRequest {
    /**
     * Flag used to differentiate between a test and a non-test run.
     * @type {boolean}
     * @memberof DeleteItemRequest
     */
    dryRun?: boolean;
    /**
     * Flag used to request explicit inventory, location, pick wave, and audit information for each request item.
     * @type {boolean}
     * @memberof DeleteItemRequest
     */
    explicit?: boolean;
    /**
     * An array of locationCodes to be considered for item-deletion purposes. Optional.
     *     All locationCodes associated with the requesting tenant will be considered if no locationCodes are provided.
     * @type {Array<string>}
     * @memberof DeleteItemRequest
     */
    locationCodes?: Array<string>;
    /**
     * Flag used to request deletion of inventory across all locations (overrides locationCodes).
     * @type {boolean}
     * @memberof DeleteItemRequest
     */
    allLocations?: boolean;
    /**
     * The part number of the item to be deleted. Supports basic regex operators: .*+?^$[]
     * @type {string}
     * @memberof DeleteItemRequest
     */
    partNumber?: string;
    /**
     * The upc of the item to be deleted. Supports basic regex operators: .*+?^$[]
     * @type {string}
     * @memberof DeleteItemRequest
     */
    upc?: string;
    /**
     * The sku of the item to be deleted. Supports basic regex operators: .*+?^$[]
     * @type {string}
     * @memberof DeleteItemRequest
     */
    sku?: string;
    /**
     * Associative Map of <String, String> for tagCategoryName => tagName
     * @type {{ [key: string]: string; }}
     * @memberof DeleteItemRequest
     */
    tags?: { [key: string]: string; };
}

/**
 * Check if a given object implements the DeleteItemRequest interface.
 */
export function instanceOfDeleteItemRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeleteItemRequestFromJSON(json: any): DeleteItemRequest {
    return DeleteItemRequestFromJSONTyped(json, false);
}

export function DeleteItemRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteItemRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dryRun': !exists(json, 'dryRun') ? undefined : json['dryRun'],
        'explicit': !exists(json, 'explicit') ? undefined : json['explicit'],
        'locationCodes': !exists(json, 'locationCodes') ? undefined : json['locationCodes'],
        'allLocations': !exists(json, 'allLocations') ? undefined : json['allLocations'],
        'partNumber': !exists(json, 'partNumber') ? undefined : json['partNumber'],
        'upc': !exists(json, 'upc') ? undefined : json['upc'],
        'sku': !exists(json, 'sku') ? undefined : json['sku'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
    };
}

export function DeleteItemRequestToJSON(value?: DeleteItemRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dryRun': value.dryRun,
        'explicit': value.explicit,
        'locationCodes': value.locationCodes,
        'allLocations': value.allLocations,
        'partNumber': value.partNumber,
        'upc': value.upc,
        'sku': value.sku,
        'tags': value.tags,
    };
}

