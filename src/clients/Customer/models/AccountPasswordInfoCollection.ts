/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Customer Service
 * OpenAPI Spec for Kibo Customer Service
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AccountPasswordInfo } from './AccountPasswordInfo';
import {
    AccountPasswordInfoFromJSON,
    AccountPasswordInfoFromJSONTyped,
    AccountPasswordInfoToJSON,
} from './AccountPasswordInfo';

/**
 * 
 * @export
 * @interface AccountPasswordInfoCollection
 */
export interface AccountPasswordInfoCollection {
    /**
     * 
     * @type {number}
     * @memberof AccountPasswordInfoCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<AccountPasswordInfo>}
     * @memberof AccountPasswordInfoCollection
     */
    items?: Array<AccountPasswordInfo> | null;
}

/**
 * Check if a given object implements the AccountPasswordInfoCollection interface.
 */
export function instanceOfAccountPasswordInfoCollection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountPasswordInfoCollectionFromJSON(json: any): AccountPasswordInfoCollection {
    return AccountPasswordInfoCollectionFromJSONTyped(json, false);
}

export function AccountPasswordInfoCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountPasswordInfoCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(AccountPasswordInfoFromJSON)),
    };
}

export function AccountPasswordInfoCollectionToJSON(value?: AccountPasswordInfoCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'totalCount': value.totalCount,
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(AccountPasswordInfoToJSON)),
    };
}
