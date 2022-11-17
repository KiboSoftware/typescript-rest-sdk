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
/**
 * 
 * @export
 * @interface UserScope
 */
export interface UserScope {
    /**
     * 
     * @type {string}
     * @memberof UserScope
     */
    type?: string | null;
    /**
     * 
     * @type {number}
     * @memberof UserScope
     */
    id?: number | null;
    /**
     * 
     * @type {string}
     * @memberof UserScope
     */
    name?: string | null;
}

/**
 * Check if a given object implements the UserScope interface.
 */
export function instanceOfUserScope(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UserScopeFromJSON(json: any): UserScope {
    return UserScopeFromJSONTyped(json, false);
}

export function UserScopeFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserScope {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : json['type'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function UserScopeToJSON(value?: UserScope | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'name': value.name,
    };
}
