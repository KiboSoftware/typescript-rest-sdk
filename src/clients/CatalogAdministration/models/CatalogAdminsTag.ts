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
/**
 * A generic tag that can be used for any purpose.
 * @export
 * @interface CatalogAdminsTag
 */
export interface CatalogAdminsTag {
    /**
     * A unique code per catalog. Limit 500 characters.
     * @type {string}
     * @memberof CatalogAdminsTag
     */
    tagCode: string;
    /**
     * Readonly and computed from TagCode. If using hierarchical tag-codes, only the last node
     * @type {string}
     * @memberof CatalogAdminsTag
     */
    readonly tagName?: string | null;
    /**
     * Readonly and computed from TagCode. If using hierarchical tag-codes, the node path without the TagName
     * @type {string}
     * @memberof CatalogAdminsTag
     */
    readonly tagPath?: string | null;
}

/**
 * Check if a given object implements the CatalogAdminsTag interface.
 */
export function instanceOfCatalogAdminsTag(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "tagCode" in value;

    return isInstance;
}

export function CatalogAdminsTagFromJSON(json: any): CatalogAdminsTag {
    return CatalogAdminsTagFromJSONTyped(json, false);
}

export function CatalogAdminsTagFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogAdminsTag {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tagCode': json['tagCode'],
        'tagName': !exists(json, 'tagName') ? undefined : json['tagName'],
        'tagPath': !exists(json, 'tagPath') ? undefined : json['tagPath'],
    };
}

export function CatalogAdminsTagToJSON(value?: CatalogAdminsTag | null): any {
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

