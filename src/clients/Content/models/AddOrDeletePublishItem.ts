/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Content Service
 * OpenAPI Spec for Kibo Content Service
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
 * 
 * @export
 * @interface AddOrDeletePublishItem
 */
export interface AddOrDeletePublishItem {
    /**
     * 
     * @type {string}
     * @memberof AddOrDeletePublishItem
     */
    documentId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddOrDeletePublishItem
     */
    docListFQN?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddOrDeletePublishItem
     */
    scopeType?: string | null;
    /**
     * 
     * @type {number}
     * @memberof AddOrDeletePublishItem
     */
    scopeId?: number;
}

/**
 * Check if a given object implements the AddOrDeletePublishItem interface.
 */
export function instanceOfAddOrDeletePublishItem(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AddOrDeletePublishItemFromJSON(json: any): AddOrDeletePublishItem {
    return AddOrDeletePublishItemFromJSONTyped(json, false);
}

export function AddOrDeletePublishItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddOrDeletePublishItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'docListFQN': !exists(json, 'docListFQN') ? undefined : json['docListFQN'],
        'scopeType': !exists(json, 'scopeType') ? undefined : json['scopeType'],
        'scopeId': !exists(json, 'scopeId') ? undefined : json['scopeId'],
    };
}

export function AddOrDeletePublishItemToJSON(value?: AddOrDeletePublishItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'documentId': value.documentId,
        'docListFQN': value.docListFQN,
        'scopeType': value.scopeType,
        'scopeId': value.scopeId,
    };
}

