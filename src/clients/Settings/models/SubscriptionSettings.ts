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
 * Subscription settings defined or this site
 * @export
 * @interface SubscriptionSettings
 */
export interface SubscriptionSettings {
    /**
     * Specifies the number of days before the next order date to create the continuity order.
     * @type {number}
     * @memberof SubscriptionSettings
     */
    continuityOrderDateOffset?: number;
    /**
     * Specifies the number of continuity orders should be placed before activating the subscription.
     * @type {number}
     * @memberof SubscriptionSettings
     */
    pauseSubscriptionOffset?: number | null;
    /**
     * Specifies the number of days to update the next order date from existing next order date.
     * @type {number}
     * @memberof SubscriptionSettings
     */
    nextOrderDateOffset?: number | null;
    /**
     * Specifies the number of times the subscription can be skipped
     * @type {number}
     * @memberof SubscriptionSettings
     */
    skipSubscriptionOffset?: number | null;
    /**
     * 
     * @type {AuditInfo}
     * @memberof SubscriptionSettings
     */
    auditInfo?: AuditInfo;
}

/**
 * Check if a given object implements the SubscriptionSettings interface.
 */
export function instanceOfSubscriptionSettings(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubscriptionSettingsFromJSON(json: any): SubscriptionSettings {
    return SubscriptionSettingsFromJSONTyped(json, false);
}

export function SubscriptionSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'continuityOrderDateOffset': !exists(json, 'continuityOrderDateOffset') ? undefined : json['continuityOrderDateOffset'],
        'pauseSubscriptionOffset': !exists(json, 'pauseSubscriptionOffset') ? undefined : json['pauseSubscriptionOffset'],
        'nextOrderDateOffset': !exists(json, 'nextOrderDateOffset') ? undefined : json['nextOrderDateOffset'],
        'skipSubscriptionOffset': !exists(json, 'skipSubscriptionOffset') ? undefined : json['skipSubscriptionOffset'],
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AuditInfoFromJSON(json['auditInfo']),
    };
}

export function SubscriptionSettingsToJSON(value?: SubscriptionSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'continuityOrderDateOffset': value.continuityOrderDateOffset,
        'pauseSubscriptionOffset': value.pauseSubscriptionOffset,
        'nextOrderDateOffset': value.nextOrderDateOffset,
        'skipSubscriptionOffset': value.skipSubscriptionOffset,
        'auditInfo': AuditInfoToJSON(value.auditInfo),
    };
}

