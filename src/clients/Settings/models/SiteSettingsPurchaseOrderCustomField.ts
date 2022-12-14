/* tslint:disable */
/* eslint-disable */
/**
 * Kibo SiteSettings Service
 * OpenAPI Spec for Kibo SiteSettings Service
 *
 * The version of the OpenAPI document: 1.0.0
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
 * @interface SiteSettingsPurchaseOrderCustomField
 */
export interface SiteSettingsPurchaseOrderCustomField {
    /**
     * Unique code/name for memo field
     * @type {string}
     * @memberof SiteSettingsPurchaseOrderCustomField
     */
    code?: string | null;
    /**
     * Memo field label that appers on the store front
     * @type {string}
     * @memberof SiteSettingsPurchaseOrderCustomField
     */
    label?: string | null;
    /**
     * Sequence Number
     * @type {number}
     * @memberof SiteSettingsPurchaseOrderCustomField
     */
    sequenceNumber?: number;
    /**
     * Whether this memo field is enabled
     * @type {boolean}
     * @memberof SiteSettingsPurchaseOrderCustomField
     */
    isEnabled?: boolean;
    /**
     * Whether this memo field is mandatory to be filled in when placing an order
     * @type {boolean}
     * @memberof SiteSettingsPurchaseOrderCustomField
     */
    isRequired?: boolean;
}

/**
 * Check if a given object implements the SiteSettingsPurchaseOrderCustomField interface.
 */
export function instanceOfSiteSettingsPurchaseOrderCustomField(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SiteSettingsPurchaseOrderCustomFieldFromJSON(json: any): SiteSettingsPurchaseOrderCustomField {
    return SiteSettingsPurchaseOrderCustomFieldFromJSONTyped(json, false);
}

export function SiteSettingsPurchaseOrderCustomFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): SiteSettingsPurchaseOrderCustomField {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'sequenceNumber': !exists(json, 'sequenceNumber') ? undefined : json['sequenceNumber'],
        'isEnabled': !exists(json, 'isEnabled') ? undefined : json['isEnabled'],
        'isRequired': !exists(json, 'isRequired') ? undefined : json['isRequired'],
    };
}

export function SiteSettingsPurchaseOrderCustomFieldToJSON(value?: SiteSettingsPurchaseOrderCustomField | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'label': value.label,
        'sequenceNumber': value.sequenceNumber,
        'isEnabled': value.isEnabled,
        'isRequired': value.isRequired,
    };
}

