/* tslint:disable */
/* eslint-disable */
/**
 * Kibo SiteSettings Service
 * OpenAPI Spec for Kibo SiteSettings Service
 *
 * The version of the OpenAPI document: v1
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
 * @interface ReturnSettings
 */
export interface ReturnSettings {
    /**
     * 
     * @type {number}
     * @memberof ReturnSettings
     */
    defaultProcessingFee?: number;
    /**
     * 
     * @type {string}
     * @memberof ReturnSettings
     */
    defaultShippingLocation?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ReturnSettings
     */
    createLabelOnFulfillment?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ReturnSettings
     */
    displayRefundToNewGiftCard?: boolean;
    /**
     * 
     * @type {AuditInfo}
     * @memberof ReturnSettings
     */
    auditInfo?: AuditInfo;
    /**
     * 
     * @type {boolean}
     * @memberof ReturnSettings
     */
    returnOrCreditOnImportedOrders?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ReturnSettings
     */
    refundShippingAndHandling?: boolean;
}

/**
 * Check if a given object implements the ReturnSettings interface.
 */
export function instanceOfReturnSettings(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReturnSettingsFromJSON(json: any): ReturnSettings {
    return ReturnSettingsFromJSONTyped(json, false);
}

export function ReturnSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReturnSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'defaultProcessingFee': !exists(json, 'defaultProcessingFee') ? undefined : json['defaultProcessingFee'],
        'defaultShippingLocation': !exists(json, 'defaultShippingLocation') ? undefined : json['defaultShippingLocation'],
        'createLabelOnFulfillment': !exists(json, 'createLabelOnFulfillment') ? undefined : json['createLabelOnFulfillment'],
        'displayRefundToNewGiftCard': !exists(json, 'displayRefundToNewGiftCard') ? undefined : json['displayRefundToNewGiftCard'],
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AuditInfoFromJSON(json['auditInfo']),
        'returnOrCreditOnImportedOrders': !exists(json, 'returnOrCreditOnImportedOrders') ? undefined : json['returnOrCreditOnImportedOrders'],
        'refundShippingAndHandling': !exists(json, 'refundShippingAndHandling') ? undefined : json['refundShippingAndHandling'],
    };
}

export function ReturnSettingsToJSON(value?: ReturnSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'defaultProcessingFee': value.defaultProcessingFee,
        'defaultShippingLocation': value.defaultShippingLocation,
        'createLabelOnFulfillment': value.createLabelOnFulfillment,
        'displayRefundToNewGiftCard': value.displayRefundToNewGiftCard,
        'auditInfo': AuditInfoToJSON(value.auditInfo),
        'returnOrCreditOnImportedOrders': value.returnOrCreditOnImportedOrders,
        'refundShippingAndHandling': value.refundShippingAndHandling,
    };
}
