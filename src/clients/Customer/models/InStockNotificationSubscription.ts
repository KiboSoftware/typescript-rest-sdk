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
import type { AuditInfo } from './AuditInfo';
import {
    AuditInfoFromJSON,
    AuditInfoFromJSONTyped,
    AuditInfoToJSON,
} from './AuditInfo';

/**
 * Inventory in-stock notification subscription.  Notification sender/processor view.  Generally for internal consumption only.
 * @export
 * @interface InStockNotificationSubscription
 */
export interface InStockNotificationSubscription {
    /**
     * Unique identifier
     * @type {number}
     * @memberof InStockNotificationSubscription
     */
    id?: number | null;
    /**
     * Email.  E-mail or CustomerId are required.
     * @type {string}
     * @memberof InStockNotificationSubscription
     */
    email?: string | null;
    /**
     * Id of the N:Mozu.Customer
     * that this subscription is assigned to.
     * Optional.  E-mail or CustomerId are required.
     * @type {number}
     * @memberof InStockNotificationSubscription
     */
    customerId?: number | null;
    /**
     * Product Code
     * @type {string}
     * @memberof InStockNotificationSubscription
     */
    productCode?: string | null;
    /**
     * Location Code
     * @type {string}
     * @memberof InStockNotificationSubscription
     */
    locationCode?: string | null;
    /**
     * User Id for multi-user b2b accounts
     * @type {string}
     * @memberof InStockNotificationSubscription
     */
    userId?: string | null;
    /**
     * 
     * @type {AuditInfo}
     * @memberof InStockNotificationSubscription
     */
    auditInfo?: AuditInfo;
}

/**
 * Check if a given object implements the InStockNotificationSubscription interface.
 */
export function instanceOfInStockNotificationSubscription(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InStockNotificationSubscriptionFromJSON(json: any): InStockNotificationSubscription {
    return InStockNotificationSubscriptionFromJSONTyped(json, false);
}

export function InStockNotificationSubscriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): InStockNotificationSubscription {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'customerId': !exists(json, 'customerId') ? undefined : json['customerId'],
        'productCode': !exists(json, 'productCode') ? undefined : json['productCode'],
        'locationCode': !exists(json, 'locationCode') ? undefined : json['locationCode'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AuditInfoFromJSON(json['auditInfo']),
    };
}

export function InStockNotificationSubscriptionToJSON(value?: InStockNotificationSubscription | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'email': value.email,
        'customerId': value.customerId,
        'productCode': value.productCode,
        'locationCode': value.locationCode,
        'userId': value.userId,
        'auditInfo': AuditInfoToJSON(value.auditInfo),
    };
}

