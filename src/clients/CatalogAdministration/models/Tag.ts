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
/**
 * A generic tag that can be used for any purpose.
 * @export
 * @interface Tag
 */
export interface Tag {
    /**
     * A unique code per catalog. Limit 500 characters.
     * @type {string}
     * @memberof Tag
     */
    tagCode: string;
    /**
     * Readonly and computed from TagCode. If using hierarchical tag-codes, only the last node
     * @type {string}
     * @memberof Tag
     */
    readonly tagName?: string | null;
    /**
     * Readonly and computed from TagCode. If using hierarchical tag-codes, the node path without the TagName
     * @type {string}
     * @memberof Tag
     */
    readonly tagPath?: string | null;
}

/**
 * Check if a given object implements the Tag interface.
 */
export function instanceOfTag(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "tagCode" in value;

    return isInstance;
}

export function TagFromJSON(json: any): Tag {
    return TagFromJSONTyped(json, false);
}

export function TagFromJSONTyped(json: any, ignoreDiscriminator: boolean): Tag {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tagCode': json['tagCode'],
        'tagName': !exists(json, 'tagName') ? undefined : json['tagName'],
        'tagPath': !exists(json, 'tagPath') ? undefined : json['tagPath'],
    };
}

export function TagToJSON(value?: Tag | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tagCode': value.tagCode,
    };
}
