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
import type { AuditInfo } from './AuditInfo';
import {
    AuditInfoFromJSON,
    AuditInfoFromJSONTyped,
    AuditInfoToJSON,
} from './AuditInfo';

/**
 * 
 * @export
 * @interface LocationGroup
 */
export interface LocationGroup {
    /**
     * 
     * @type {number}
     * @memberof LocationGroup
     */
    locationGroupId?: number;
    /**
     * 
     * @type {string}
     * @memberof LocationGroup
     */
    locationGroupCode?: string | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof LocationGroup
     */
    siteIds?: Array<number> | null;
    /**
     * 
     * @type {string}
     * @memberof LocationGroup
     */
    name?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof LocationGroup
     */
    locationCodes?: Array<string> | null;
    /**
     * 
     * @type {AuditInfo}
     * @memberof LocationGroup
     */
    auditInfo?: AuditInfo;
}

/**
 * Check if a given object implements the LocationGroup interface.
 */
export function instanceOfLocationGroup(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LocationGroupFromJSON(json: any): LocationGroup {
    return LocationGroupFromJSONTyped(json, false);
}

export function LocationGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocationGroup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'locationGroupId': !exists(json, 'locationGroupId') ? undefined : json['locationGroupId'],
        'locationGroupCode': !exists(json, 'locationGroupCode') ? undefined : json['locationGroupCode'],
        'siteIds': !exists(json, 'siteIds') ? undefined : json['siteIds'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'locationCodes': !exists(json, 'locationCodes') ? undefined : json['locationCodes'],
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AuditInfoFromJSON(json['auditInfo']),
    };
}

export function LocationGroupToJSON(value?: LocationGroup | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'locationGroupId': value.locationGroupId,
        'locationGroupCode': value.locationGroupCode,
        'siteIds': value.siteIds,
        'name': value.name,
        'locationCodes': value.locationCodes,
        'auditInfo': AuditInfoToJSON(value.auditInfo),
    };
}
