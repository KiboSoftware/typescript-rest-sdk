/* tslint:disable */
/* eslint-disable */
/**
 * Inventory
 * Swagger JSON for inventory apis
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Request/Response object for a tag
 * @export
 * @interface InventoryTag
 */
export interface InventoryTag {
    /**
     * Tag ID
     * @type {number}
     * @memberof InventoryTag
     */
    tagID?: number;
    /**
     * Tag Value
     * @type {string}
     * @memberof InventoryTag
     */
    tagValue?: string;
    /**
     * Whether or not this tag is the default tag for its category.
     * @type {boolean}
     * @memberof InventoryTag
     */
    isDefault?: boolean;
    /**
     * Percentage of available inventory this tag will get when the percentage update is performed. Must be between 0 and 100 (inclusive).
     * @type {number}
     * @memberof InventoryTag
     */
    percent?: number;
    /**
     * Date this tag was created
     * @type {string}
     * @memberof InventoryTag
     */
    created?: string;
    /**
     * Date this tag was last updated
     * @type {string}
     * @memberof InventoryTag
     */
    updated?: string;
}

/**
 * Check if a given object implements the InventoryTag interface.
 */
export function instanceOfInventoryTag(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InventoryTagFromJSON(json: any): InventoryTag {
    return InventoryTagFromJSONTyped(json, false);
}

export function InventoryTagFromJSONTyped(json: any, ignoreDiscriminator: boolean): InventoryTag {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tagID': !exists(json, 'tagID') ? undefined : json['tagID'],
        'tagValue': !exists(json, 'tagValue') ? undefined : json['tagValue'],
        'isDefault': !exists(json, 'isDefault') ? undefined : json['isDefault'],
        'percent': !exists(json, 'percent') ? undefined : json['percent'],
        'created': !exists(json, 'created') ? undefined : json['created'],
        'updated': !exists(json, 'updated') ? undefined : json['updated'],
    };
}

export function InventoryTagToJSON(value?: InventoryTag | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tagID': value.tagID,
        'tagValue': value.tagValue,
        'isDefault': value.isDefault,
        'percent': value.percent,
        'created': value.created,
        'updated': value.updated,
    };
}

