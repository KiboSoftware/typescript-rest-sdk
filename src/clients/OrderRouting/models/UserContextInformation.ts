/* tslint:disable */
/* eslint-disable */
/**
 * Api Documentation
 * Api Documentation
 *
 * The version of the OpenAPI document: 1.0
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
 * @interface UserContextInformation
 */
export interface UserContextInformation {
    /**
     * 
     * @type {number}
     * @memberof UserContextInformation
     */
    environmentID?: number;
    /**
     * 
     * @type {boolean}
     * @memberof UserContextInformation
     */
    loaded?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserContextInformation
     */
    pathString?: string;
    /**
     * 
     * @type {number}
     * @memberof UserContextInformation
     */
    siteID?: number;
    /**
     * 
     * @type {object}
     * @memberof UserContextInformation
     */
    siteService?: object;
    /**
     * 
     * @type {number}
     * @memberof UserContextInformation
     */
    tenantID?: number;
    /**
     * 
     * @type {object}
     * @memberof UserContextInformation
     */
    tenantService?: object;
}

/**
 * Check if a given object implements the UserContextInformation interface.
 */
export function instanceOfUserContextInformation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UserContextInformationFromJSON(json: any): UserContextInformation {
    return UserContextInformationFromJSONTyped(json, false);
}

export function UserContextInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserContextInformation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'environmentID': !exists(json, 'environmentID') ? undefined : json['environmentID'],
        'loaded': !exists(json, 'loaded') ? undefined : json['loaded'],
        'pathString': !exists(json, 'pathString') ? undefined : json['pathString'],
        'siteID': !exists(json, 'siteID') ? undefined : json['siteID'],
        'siteService': !exists(json, 'siteService') ? undefined : json['siteService'],
        'tenantID': !exists(json, 'tenantID') ? undefined : json['tenantID'],
        'tenantService': !exists(json, 'tenantService') ? undefined : json['tenantService'],
    };
}

export function UserContextInformationToJSON(value?: UserContextInformation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'environmentID': value.environmentID,
        'loaded': value.loaded,
        'pathString': value.pathString,
        'siteID': value.siteID,
        'siteService': value.siteService,
        'tenantID': value.tenantID,
        'tenantService': value.tenantService,
    };
}

