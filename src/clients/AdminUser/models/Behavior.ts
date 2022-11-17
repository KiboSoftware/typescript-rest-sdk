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
 * @interface Behavior
 */
export interface Behavior {
    /**
     * 
     * @type {number}
     * @memberof Behavior
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof Behavior
     */
    categoryId?: number;
    /**
     * 
     * @type {string}
     * @memberof Behavior
     */
    name?: string | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof Behavior
     */
    requiresBehaviorIds?: Array<number> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Behavior
     */
    validUserTypes?: Array<string> | null;
    /**
     * 
     * @type {boolean}
     * @memberof Behavior
     */
    isPrivate?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof Behavior
     */
    systemRoles?: Array<string> | null;
}

/**
 * Check if a given object implements the Behavior interface.
 */
export function instanceOfBehavior(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BehaviorFromJSON(json: any): Behavior {
    return BehaviorFromJSONTyped(json, false);
}

export function BehaviorFromJSONTyped(json: any, ignoreDiscriminator: boolean): Behavior {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'categoryId': !exists(json, 'categoryId') ? undefined : json['categoryId'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'requiresBehaviorIds': !exists(json, 'requiresBehaviorIds') ? undefined : json['requiresBehaviorIds'],
        'validUserTypes': !exists(json, 'validUserTypes') ? undefined : json['validUserTypes'],
        'isPrivate': !exists(json, 'isPrivate') ? undefined : json['isPrivate'],
        'systemRoles': !exists(json, 'systemRoles') ? undefined : json['systemRoles'],
    };
}

export function BehaviorToJSON(value?: Behavior | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'categoryId': value.categoryId,
        'name': value.name,
        'requiresBehaviorIds': value.requiresBehaviorIds,
        'validUserTypes': value.validUserTypes,
        'isPrivate': value.isPrivate,
        'systemRoles': value.systemRoles,
    };
}

