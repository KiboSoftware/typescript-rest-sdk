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
import type { SuggestionEvent } from './SuggestionEvent';
import {
    SuggestionEventFromJSON,
    SuggestionEventFromJSONTyped,
    SuggestionEventToJSON,
} from './SuggestionEvent';

/**
 * 
 * @export
 * @interface SuggestionLog
 */
export interface SuggestionLog {
    /**
     * 
     * @type {Date}
     * @memberof SuggestionLog
     */
    created?: Date;
    /**
     * 
     * @type {string}
     * @memberof SuggestionLog
     */
    creatorUsername?: string;
    /**
     * 
     * @type {number}
     * @memberof SuggestionLog
     */
    environmentID?: number;
    /**
     * 
     * @type {Array<SuggestionEvent>}
     * @memberof SuggestionLog
     */
    events?: Array<SuggestionEvent>;
    /**
     * 
     * @type {string}
     * @memberof SuggestionLog
     */
    externalResponseID?: string;
    /**
     * 
     * @type {number}
     * @memberof SuggestionLog
     */
    orderID?: number;
    /**
     * 
     * @type {string}
     * @memberof SuggestionLog
     */
    pathString?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SuggestionLog
     */
    persisted?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SuggestionLog
     */
    siteID?: number;
    /**
     * 
     * @type {number}
     * @memberof SuggestionLog
     */
    suggestionID?: number;
    /**
     * 
     * @type {number}
     * @memberof SuggestionLog
     */
    tenantID?: number;
    /**
     * 
     * @type {Date}
     * @memberof SuggestionLog
     */
    updated?: Date;
    /**
     * 
     * @type {string}
     * @memberof SuggestionLog
     */
    updaterUsername?: string;
}

/**
 * Check if a given object implements the SuggestionLog interface.
 */
export function instanceOfSuggestionLog(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SuggestionLogFromJSON(json: any): SuggestionLog {
    return SuggestionLogFromJSONTyped(json, false);
}

export function SuggestionLogFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuggestionLog {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'created': !exists(json, 'created') ? undefined : (new Date(json['created'])),
        'creatorUsername': !exists(json, 'creatorUsername') ? undefined : json['creatorUsername'],
        'environmentID': !exists(json, 'environmentID') ? undefined : json['environmentID'],
        'events': !exists(json, 'events') ? undefined : ((json['events'] as Array<any>).map(SuggestionEventFromJSON)),
        'externalResponseID': !exists(json, 'externalResponseID') ? undefined : json['externalResponseID'],
        'orderID': !exists(json, 'orderID') ? undefined : json['orderID'],
        'pathString': !exists(json, 'pathString') ? undefined : json['pathString'],
        'persisted': !exists(json, 'persisted') ? undefined : json['persisted'],
        'siteID': !exists(json, 'siteID') ? undefined : json['siteID'],
        'suggestionID': !exists(json, 'suggestionID') ? undefined : json['suggestionID'],
        'tenantID': !exists(json, 'tenantID') ? undefined : json['tenantID'],
        'updated': !exists(json, 'updated') ? undefined : (new Date(json['updated'])),
        'updaterUsername': !exists(json, 'updaterUsername') ? undefined : json['updaterUsername'],
    };
}

export function SuggestionLogToJSON(value?: SuggestionLog | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created': value.created === undefined ? undefined : (value.created.toISOString()),
        'creatorUsername': value.creatorUsername,
        'environmentID': value.environmentID,
        'events': value.events === undefined ? undefined : ((value.events as Array<any>).map(SuggestionEventToJSON)),
        'externalResponseID': value.externalResponseID,
        'orderID': value.orderID,
        'pathString': value.pathString,
        'persisted': value.persisted,
        'siteID': value.siteID,
        'suggestionID': value.suggestionID,
        'tenantID': value.tenantID,
        'updated': value.updated === undefined ? undefined : (value.updated.toISOString()),
        'updaterUsername': value.updaterUsername,
    };
}

