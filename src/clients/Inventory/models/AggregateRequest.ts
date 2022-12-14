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
import type { Item } from './Item';
import {
    ItemFromJSON,
    ItemFromJSONTyped,
    ItemToJSON,
} from './Item';

/**
 * Request for aggregating inventory
 * @export
 * @interface AggregateRequest
 */
export interface AggregateRequest {
    /**
     * List of Items to search on
     * @type {Array<Item>}
     * @memberof AggregateRequest
     */
    items: Array<Item>;
    /**
     * Whether to ignore the safety stock buffer put in place
     * @type {boolean}
     * @memberof AggregateRequest
     */
    ignoreSafetyStock?: boolean;
    /**
     * Whether to allow items with negative inventory in the results
     * @type {boolean}
     * @memberof AggregateRequest
     */
    includeNegativeInventory?: boolean;
    /**
     * Whether to limit results to locations that are shipping enabled
     * @type {boolean}
     * @memberof AggregateRequest
     */
    directShip?: boolean;
    /**
     * Filter results by locations that apply tax (true) or don't (false)
     * @type {boolean}
     * @memberof AggregateRequest
     */
    transferEnabled?: boolean;
    /**
     * Filter results by pickup enabled (true) or not (false)
     * @type {boolean}
     * @memberof AggregateRequest
     */
    pickup?: boolean;
    /**
     * Associative Map of <String, String> for tagCategoryName => tagName
     * @type {{ [key: string]: string; }}
     * @memberof AggregateRequest
     */
    tags?: { [key: string]: string; };
}

/**
 * Check if a given object implements the AggregateRequest interface.
 */
export function instanceOfAggregateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "items" in value;

    return isInstance;
}

export function AggregateRequestFromJSON(json: any): AggregateRequest {
    return AggregateRequestFromJSONTyped(json, false);
}

export function AggregateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AggregateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': ((json['items'] as Array<any>).map(ItemFromJSON)),
        'ignoreSafetyStock': !exists(json, 'ignoreSafetyStock') ? undefined : json['ignoreSafetyStock'],
        'includeNegativeInventory': !exists(json, 'includeNegativeInventory') ? undefined : json['includeNegativeInventory'],
        'directShip': !exists(json, 'directShip') ? undefined : json['directShip'],
        'transferEnabled': !exists(json, 'transferEnabled') ? undefined : json['transferEnabled'],
        'pickup': !exists(json, 'pickup') ? undefined : json['pickup'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
    };
}

export function AggregateRequestToJSON(value?: AggregateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'items': ((value.items as Array<any>).map(ItemToJSON)),
        'ignoreSafetyStock': value.ignoreSafetyStock,
        'includeNegativeInventory': value.includeNegativeInventory,
        'directShip': value.directShip,
        'transferEnabled': value.transferEnabled,
        'pickup': value.pickup,
        'tags': value.tags,
    };
}

