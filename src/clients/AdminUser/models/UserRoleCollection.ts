/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Admin User Service
 * OpenAPI Spec for Kibo Admin User Service
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { UserRole } from './UserRole';
import {
    UserRoleFromJSON,
    UserRoleFromJSONTyped,
    UserRoleToJSON,
} from './UserRole';

/**
 * Collection of UserRoles for given user.
 * @export
 * @interface UserRoleCollection
 */
export interface UserRoleCollection {
    /**
     * 
     * @type {number}
     * @memberof UserRoleCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<UserRole>}
     * @memberof UserRoleCollection
     */
    items?: Array<UserRole> | null;
}

/**
 * Check if a given object implements the UserRoleCollection interface.
 */
export function instanceOfUserRoleCollection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UserRoleCollectionFromJSON(json: any): UserRoleCollection {
    return UserRoleCollectionFromJSONTyped(json, false);
}

export function UserRoleCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserRoleCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(UserRoleFromJSON)),
    };
}

export function UserRoleCollectionToJSON(value?: UserRoleCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'totalCount': value.totalCount,
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(UserRoleToJSON)),
    };
}

