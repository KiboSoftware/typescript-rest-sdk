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
/**
 * 
 * @export
 * @interface CustomerSetSite
 */
export interface CustomerSetSite {
    /**
     * 
     * @type {number}
     * @memberof CustomerSetSite
     */
    siteId?: number;
    /**
     * 
     * @type {string}
     * @memberof CustomerSetSite
     */
    customerSetCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerSetSite
     */
    name?: string | null;
}

/**
 * Check if a given object implements the CustomerSetSite interface.
 */
export function instanceOfCustomerSetSite(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerSetSiteFromJSON(json: any): CustomerSetSite {
    return CustomerSetSiteFromJSONTyped(json, false);
}

export function CustomerSetSiteFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerSetSite {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'siteId': !exists(json, 'siteId') ? undefined : json['siteId'],
        'customerSetCode': !exists(json, 'customerSetCode') ? undefined : json['customerSetCode'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function CustomerSetSiteToJSON(value?: CustomerSetSite | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'siteId': value.siteId,
        'customerSetCode': value.customerSetCode,
        'name': value.name,
    };
}

