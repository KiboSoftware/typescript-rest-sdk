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
import type { UserContextInformation } from './UserContextInformation';
import {
    UserContextInformationFromJSON,
    UserContextInformationFromJSONTyped,
    UserContextInformationToJSON,
} from './UserContextInformation';

/**
 * 
 * @export
 * @interface GroupAfterAction
 */
export interface GroupAfterAction {
    /**
     * 
     * @type {number}
     * @memberof GroupAfterAction
     */
    actionID?: number;
    /**
     * 
     * @type {Date}
     * @memberof GroupAfterAction
     */
    created?: Date;
    /**
     * 
     * @type {string}
     * @memberof GroupAfterAction
     */
    creatorUsername?: string;
    /**
     * 
     * @type {number}
     * @memberof GroupAfterAction
     */
    environmentID?: number;
    /**
     * 
     * @type {string}
     * @memberof GroupAfterAction
     */
    failoverAction?: GroupAfterActionFailoverActionEnum;
    /**
     * 
     * @type {string}
     * @memberof GroupAfterAction
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof GroupAfterAction
     */
    pathString?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GroupAfterAction
     */
    persisted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GroupAfterAction
     */
    restartAttempt?: GroupAfterActionRestartAttemptEnum;
    /**
     * 
     * @type {number}
     * @memberof GroupAfterAction
     */
    siteID?: number;
    /**
     * 
     * @type {number}
     * @memberof GroupAfterAction
     */
    tenantID?: number;
    /**
     * 
     * @type {Date}
     * @memberof GroupAfterAction
     */
    updated?: Date;
    /**
     * 
     * @type {string}
     * @memberof GroupAfterAction
     */
    updaterUsername?: string;
    /**
     * 
     * @type {UserContextInformation}
     * @memberof GroupAfterAction
     */
    userContext?: UserContextInformation;
}


/**
 * @export
 */
export const GroupAfterActionFailoverActionEnum = {
    LineItemSplitAssignIfFulfilled: 'LINE_ITEM_SPLIT_ASSIGN_IF_FULFILLED',
    LineItemSplitCancelWithoutInventory: 'LINE_ITEM_SPLIT_CANCEL_WITHOUT_INVENTORY',
    QuantitySplitAssignIfFulfilled: 'QUANTITY_SPLIT_ASSIGN_IF_FULFILLED',
    QuantitySplitCancelWithoutInventory: 'QUANTITY_SPLIT_CANCEL_WITHOUT_INVENTORY',
    CancelOrder: 'CANCEL_ORDER',
    AssignToCustomerCare: 'ASSIGN_TO_CUSTOMER_CARE',
    AssignToGroup: 'ASSIGN_TO_GROUP',
    LineItemSplitAssignCustomerCareWithoutInventory: 'LINE_ITEM_SPLIT_ASSIGN_CUSTOMER_CARE_WITHOUT_INVENTORY',
    QuantitySplitAssignCustomerCareWithoutInventory: 'QUANTITY_SPLIT_ASSIGN_CUSTOMER_CARE_WITHOUT_INVENTORY',
    SendOrderToBidding: 'SEND_ORDER_TO_BIDDING',
    LineItemSplitBackorderWithoutInventory: 'LINE_ITEM_SPLIT_BACKORDER_WITHOUT_INVENTORY',
    QuantitySplitBackorderWithoutInventory: 'QUANTITY_SPLIT_BACKORDER_WITHOUT_INVENTORY',
    AssignToBackorder: 'ASSIGN_TO_BACKORDER'
} as const;
export type GroupAfterActionFailoverActionEnum = typeof GroupAfterActionFailoverActionEnum[keyof typeof GroupAfterActionFailoverActionEnum];

/**
 * @export
 */
export const GroupAfterActionRestartAttemptEnum = {
    StartAtBeginning: 'START_AT_BEGINNING',
    CurrentGroup: 'CURRENT_GROUP',
    GroupRank: 'GROUP_RANK'
} as const;
export type GroupAfterActionRestartAttemptEnum = typeof GroupAfterActionRestartAttemptEnum[keyof typeof GroupAfterActionRestartAttemptEnum];


/**
 * Check if a given object implements the GroupAfterAction interface.
 */
export function instanceOfGroupAfterAction(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GroupAfterActionFromJSON(json: any): GroupAfterAction {
    return GroupAfterActionFromJSONTyped(json, false);
}

export function GroupAfterActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): GroupAfterAction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actionID': !exists(json, 'actionID') ? undefined : json['actionID'],
        'created': !exists(json, 'created') ? undefined : (new Date(json['created'])),
        'creatorUsername': !exists(json, 'creatorUsername') ? undefined : json['creatorUsername'],
        'environmentID': !exists(json, 'environmentID') ? undefined : json['environmentID'],
        'failoverAction': !exists(json, 'failoverAction') ? undefined : json['failoverAction'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'pathString': !exists(json, 'pathString') ? undefined : json['pathString'],
        'persisted': !exists(json, 'persisted') ? undefined : json['persisted'],
        'restartAttempt': !exists(json, 'restartAttempt') ? undefined : json['restartAttempt'],
        'siteID': !exists(json, 'siteID') ? undefined : json['siteID'],
        'tenantID': !exists(json, 'tenantID') ? undefined : json['tenantID'],
        'updated': !exists(json, 'updated') ? undefined : (new Date(json['updated'])),
        'updaterUsername': !exists(json, 'updaterUsername') ? undefined : json['updaterUsername'],
        'userContext': !exists(json, 'userContext') ? undefined : UserContextInformationFromJSON(json['userContext']),
    };
}

export function GroupAfterActionToJSON(value?: GroupAfterAction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actionID': value.actionID,
        'created': value.created === undefined ? undefined : (value.created.toISOString()),
        'creatorUsername': value.creatorUsername,
        'environmentID': value.environmentID,
        'failoverAction': value.failoverAction,
        'name': value.name,
        'pathString': value.pathString,
        'persisted': value.persisted,
        'restartAttempt': value.restartAttempt,
        'siteID': value.siteID,
        'tenantID': value.tenantID,
        'updated': value.updated === undefined ? undefined : (value.updated.toISOString()),
        'updaterUsername': value.updaterUsername,
        'userContext': UserContextInformationToJSON(value.userContext),
    };
}

