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
 * @interface Owner
 */
export interface Owner {
    /**
     * 
     * @type {string}
     * @memberof Owner
     */
    type?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Owner
     */
    id?: string | null;
}

/**
 * Check if a given object implements the Owner interface.
 */
export function instanceOfOwner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OwnerFromJSON(json: any): Owner {
    return OwnerFromJSONTyped(json, false);
}

export function OwnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Owner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : json['type'],
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function OwnerToJSON(value?: Owner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
    };
}

