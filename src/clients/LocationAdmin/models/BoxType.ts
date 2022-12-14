/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Location Admin Service
 * OpenAPI Spec for Kibo Location Admin Service
 *
 * The version of the OpenAPI document: v1_admin
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
 * @interface BoxType
 */
export interface BoxType {
    /**
     * 
     * @type {string}
     * @memberof BoxType
     */
    name?: string | null;
    /**
     * 
     * @type {number}
     * @memberof BoxType
     */
    height?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BoxType
     */
    width?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BoxType
     */
    length?: number | null;
}

/**
 * Check if a given object implements the BoxType interface.
 */
export function instanceOfBoxType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BoxTypeFromJSON(json: any): BoxType {
    return BoxTypeFromJSONTyped(json, false);
}

export function BoxTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BoxType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'height': !exists(json, 'height') ? undefined : json['height'],
        'width': !exists(json, 'width') ? undefined : json['width'],
        'length': !exists(json, 'length') ? undefined : json['length'],
    };
}

export function BoxTypeToJSON(value?: BoxType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'height': value.height,
        'width': value.width,
        'length': value.length,
    };
}

