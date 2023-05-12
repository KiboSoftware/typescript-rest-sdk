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
 * 
 * @export
 * @interface AggregateRequestAllOf
 */
export interface AggregateRequestAllOf {
    /**
     * List of Items to search on
     * @type {Array<Item>}
     * @memberof AggregateRequestAllOf
     */
    items?: Array<Item>;
    /**
     * Whether to ignore the safety stock buffer put in place
     * @type {boolean}
     * @memberof AggregateRequestAllOf
     */
    ignoreSafetyStock?: boolean;
    /**
     * Whether to allow items with negative inventory in the results
     * @type {boolean}
     * @memberof AggregateRequestAllOf
     */
    includeNegativeInventory?: boolean;
    /**
     * Whether to limit results to locations that are shipping enabled
     * @type {boolean}
     * @memberof AggregateRequestAllOf
     */
    directShip?: boolean;
    /**
     * Filter results by locations that apply tax (true) or don't (false)
     * @type {boolean}
     * @memberof AggregateRequestAllOf
     */
    transferEnabled?: boolean;
    /**
     * Filter results by pickup enabled (true) or not (false)
     * @type {boolean}
     * @memberof AggregateRequestAllOf
     */
    pickup?: boolean;
    /**
     * Associative Map of <String, String> for tagCategoryName => tagName
     * @type {{ [key: string]: string; }}
     * @memberof AggregateRequestAllOf
     */
    tags?: { [key: string]: string; };
    /**
     * Include future inventory or not
     * @type {string}
     * @memberof AggregateRequestAllOf
     */
    includeFutureInventory?: AggregateRequestAllOfIncludeFutureInventoryEnum;
    /**
     * Whether to allow items with negative future inventory in the results
     * @type {boolean}
     * @memberof AggregateRequestAllOf
     */
    includeNegativeFutureInventory?: boolean;
    /**
     * Future start Date at which the inventory should be allocated against.
     * @type {Date}
     * @memberof AggregateRequestAllOf
     */
    futureStartDate?: Date;
    /**
     * Future end Date at which the inventory should be allocated against.
     * @type {Date}
     * @memberof AggregateRequestAllOf
     */
    futureEndDate?: Date;
    /**
     * Whether to force populate default tags onto the request if they are unspecified for any tag category
     * @type {boolean}
     * @memberof AggregateRequestAllOf
     */
    forceDefaultsForUnspecifiedTagCategories?: boolean;
}


/**
 * @export
 */
export const AggregateRequestAllOfIncludeFutureInventoryEnum = {
    Only: 'FUTURE_ONLY',
    AndCurrent: 'FUTURE_AND_CURRENT'
} as const;
export type AggregateRequestAllOfIncludeFutureInventoryEnum = typeof AggregateRequestAllOfIncludeFutureInventoryEnum[keyof typeof AggregateRequestAllOfIncludeFutureInventoryEnum];


/**
 * Check if a given object implements the AggregateRequestAllOf interface.
 */
export function instanceOfAggregateRequestAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AggregateRequestAllOfFromJSON(json: any): AggregateRequestAllOf {
    return AggregateRequestAllOfFromJSONTyped(json, false);
}

export function AggregateRequestAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): AggregateRequestAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(ItemFromJSON)),
        'ignoreSafetyStock': !exists(json, 'ignoreSafetyStock') ? undefined : json['ignoreSafetyStock'],
        'includeNegativeInventory': !exists(json, 'includeNegativeInventory') ? undefined : json['includeNegativeInventory'],
        'directShip': !exists(json, 'directShip') ? undefined : json['directShip'],
        'transferEnabled': !exists(json, 'transferEnabled') ? undefined : json['transferEnabled'],
        'pickup': !exists(json, 'pickup') ? undefined : json['pickup'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'includeFutureInventory': !exists(json, 'includeFutureInventory') ? undefined : json['includeFutureInventory'],
        'includeNegativeFutureInventory': !exists(json, 'includeNegativeFutureInventory') ? undefined : json['includeNegativeFutureInventory'],
        'futureStartDate': !exists(json, 'futureStartDate') ? undefined : json['futureStartDate'],
        'futureEndDate': !exists(json, 'futureEndDate') ? undefined : json['futureEndDate'],
        'forceDefaultsForUnspecifiedTagCategories': !exists(json, 'forceDefaultsForUnspecifiedTagCategories') ? undefined : json['forceDefaultsForUnspecifiedTagCategories'],
    };
}

export function AggregateRequestAllOfToJSON(value?: AggregateRequestAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(ItemToJSON)),
        'ignoreSafetyStock': value.ignoreSafetyStock,
        'includeNegativeInventory': value.includeNegativeInventory,
        'directShip': value.directShip,
        'transferEnabled': value.transferEnabled,
        'pickup': value.pickup,
        'tags': value.tags,
        'includeFutureInventory': value.includeFutureInventory,
        'includeNegativeFutureInventory': value.includeNegativeFutureInventory,
        'futureStartDate': value.futureStartDate,
        'futureEndDate': value.futureEndDate,
        'forceDefaultsForUnspecifiedTagCategories': value.forceDefaultsForUnspecifiedTagCategories,
    };
}
