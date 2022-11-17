/* tslint:disable */
/* eslint-disable */
/**
 * Kibo AppDev Service
 * OpenAPI Spec for Kibo AppDev Service
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
 * @interface RenameInfo
 */
export interface RenameInfo {
    /**
     * 
     * @type {string}
     * @memberof RenameInfo
     */
    oldFullPath?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RenameInfo
     */
    newFullPath?: string | null;
}

/**
 * Check if a given object implements the RenameInfo interface.
 */
export function instanceOfRenameInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RenameInfoFromJSON(json: any): RenameInfo {
    return RenameInfoFromJSONTyped(json, false);
}

export function RenameInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): RenameInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'oldFullPath': !exists(json, 'oldFullPath') ? undefined : json['oldFullPath'],
        'newFullPath': !exists(json, 'newFullPath') ? undefined : json['newFullPath'],
    };
}

export function RenameInfoToJSON(value?: RenameInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'oldFullPath': value.oldFullPath,
        'newFullPath': value.newFullPath,
    };
}

