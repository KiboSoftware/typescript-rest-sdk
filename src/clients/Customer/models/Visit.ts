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
import type { Transaction } from './Transaction';
import {
    TransactionFromJSON,
    TransactionFromJSONTyped,
    TransactionToJSON,
} from './Transaction';

/**
 * 
 * @export
 * @interface Visit
 */
export interface Visit {
    /**
     * 
     * @type {string}
     * @memberof Visit
     */
    id?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Visit
     */
    accountId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Visit
     */
    type?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof Visit
     */
    date?: Date;
    /**
     * 
     * @type {Array<Transaction>}
     * @memberof Visit
     */
    transactions?: Array<Transaction> | null;
    /**
     * 
     * @type {string}
     * @memberof Visit
     */
    userId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Visit
     */
    webSiteId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Visit
     */
    webReferrer?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Visit
     */
    webSessionId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Visit
     */
    webUserAgent?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Visit
     */
    browserLocationCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Visit
     */
    locationCode?: string | null;
}

/**
 * Check if a given object implements the Visit interface.
 */
export function instanceOfVisit(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function VisitFromJSON(json: any): Visit {
    return VisitFromJSONTyped(json, false);
}

export function VisitFromJSONTyped(json: any, ignoreDiscriminator: boolean): Visit {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'accountId': !exists(json, 'accountId') ? undefined : json['accountId'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'date': !exists(json, 'date') ? undefined : (new Date(json['date'])),
        'transactions': !exists(json, 'transactions') ? undefined : (json['transactions'] === null ? null : (json['transactions'] as Array<any>).map(TransactionFromJSON)),
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'webSiteId': !exists(json, 'webSiteId') ? undefined : json['webSiteId'],
        'webReferrer': !exists(json, 'webReferrer') ? undefined : json['webReferrer'],
        'webSessionId': !exists(json, 'webSessionId') ? undefined : json['webSessionId'],
        'webUserAgent': !exists(json, 'webUserAgent') ? undefined : json['webUserAgent'],
        'browserLocationCode': !exists(json, 'browserLocationCode') ? undefined : json['browserLocationCode'],
        'locationCode': !exists(json, 'locationCode') ? undefined : json['locationCode'],
    };
}

export function VisitToJSON(value?: Visit | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'accountId': value.accountId,
        'type': value.type,
        'date': value.date === undefined ? undefined : (value.date.toISOString()),
        'transactions': value.transactions === undefined ? undefined : (value.transactions === null ? null : (value.transactions as Array<any>).map(TransactionToJSON)),
        'userId': value.userId,
        'webSiteId': value.webSiteId,
        'webReferrer': value.webReferrer,
        'webSessionId': value.webSessionId,
        'webUserAgent': value.webUserAgent,
        'browserLocationCode': value.browserLocationCode,
        'locationCode': value.locationCode,
    };
}
