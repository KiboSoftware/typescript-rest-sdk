/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Fulfillment Service
 * OpenAPI Spec for Kibo Fulfillment Service
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AuditInfo0 } from './AuditInfo0';
import {
    AuditInfo0FromJSON,
    AuditInfo0FromJSONTyped,
    AuditInfo0ToJSON,
} from './AuditInfo0';
import type { ChangeMessage } from './ChangeMessage';
import {
    ChangeMessageFromJSON,
    ChangeMessageFromJSONTyped,
    ChangeMessageToJSON,
} from './ChangeMessage';
import type { PickWaveContent } from './PickWaveContent';
import {
    PickWaveContentFromJSON,
    PickWaveContentFromJSONTyped,
    PickWaveContentToJSON,
} from './PickWaveContent';

/**
 * 
 * @export
 * @interface PickWave
 */
export interface PickWave {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof PickWave
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {AuditInfo0}
     * @memberof PickWave
     */
    auditInfo?: AuditInfo0;
    /**
     * 
     * @type {Array<ChangeMessage>}
     * @memberof PickWave
     */
    changeMessages?: Array<ChangeMessage>;
    /**
     * 
     * @type {Array<PickWaveContent>}
     * @memberof PickWave
     */
    contents?: Array<PickWaveContent>;
    /**
     * 
     * @type {string}
     * @memberof PickWave
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {number}
     * @memberof PickWave
     */
    maxShipments?: number;
    /**
     * 
     * @type {number}
     * @memberof PickWave
     */
    parentPickWaveNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof PickWave
     */
    pickType?: PickWavePickTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof PickWave
     */
    pickWaveId?: string;
    /**
     * 
     * @type {number}
     * @memberof PickWave
     */
    pickWaveNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof PickWave
     */
    pickWaveStatus?: PickWavePickWaveStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof PickWave
     */
    recoveryPickWaveNumber?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof PickWave
     */
    shipmentNumbers?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof PickWave
     */
    shipmentType?: string;
    /**
     * 
     * @type {number}
     * @memberof PickWave
     */
    tenantId?: number;
    /**
     * 
     * @type {string}
     * @memberof PickWave
     */
    userDisplayName?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWave
     */
    userId?: string;
}


/**
 * @export
 */
export const PickWavePickTypeEnum = {
    Multiple: 'MULTIPLE',
    Normal: 'NORMAL',
    Single: 'SINGLE'
} as const;
export type PickWavePickTypeEnum = typeof PickWavePickTypeEnum[keyof typeof PickWavePickTypeEnum];

/**
 * @export
 */
export const PickWavePickWaveStatusEnum = {
    Closed: 'CLOSED',
    Error: 'ERROR',
    InProgress: 'IN_PROGRESS',
    Pending: 'PENDING',
    PendingRecovery: 'PENDING_RECOVERY'
} as const;
export type PickWavePickWaveStatusEnum = typeof PickWavePickWaveStatusEnum[keyof typeof PickWavePickWaveStatusEnum];


/**
 * Check if a given object implements the PickWave interface.
 */
export function instanceOfPickWave(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PickWaveFromJSON(json: any): PickWave {
    return PickWaveFromJSONTyped(json, false);
}

export function PickWaveFromJSONTyped(json: any, ignoreDiscriminator: boolean): PickWave {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attributes': !exists(json, 'attributes') ? undefined : json['attributes'],
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AuditInfo0FromJSON(json['auditInfo']),
        'changeMessages': !exists(json, 'changeMessages') ? undefined : ((json['changeMessages'] as Array<any>).map(ChangeMessageFromJSON)),
        'contents': !exists(json, 'contents') ? undefined : ((json['contents'] as Array<any>).map(PickWaveContentFromJSON)),
        'fulfillmentLocationCode': !exists(json, 'fulfillmentLocationCode') ? undefined : json['fulfillmentLocationCode'],
        'maxShipments': !exists(json, 'maxShipments') ? undefined : json['maxShipments'],
        'parentPickWaveNumber': !exists(json, 'parentPickWaveNumber') ? undefined : json['parentPickWaveNumber'],
        'pickType': !exists(json, 'pickType') ? undefined : json['pickType'],
        'pickWaveId': !exists(json, 'pickWaveId') ? undefined : json['pickWaveId'],
        'pickWaveNumber': !exists(json, 'pickWaveNumber') ? undefined : json['pickWaveNumber'],
        'pickWaveStatus': !exists(json, 'pickWaveStatus') ? undefined : json['pickWaveStatus'],
        'recoveryPickWaveNumber': !exists(json, 'recoveryPickWaveNumber') ? undefined : json['recoveryPickWaveNumber'],
        'shipmentNumbers': !exists(json, 'shipmentNumbers') ? undefined : json['shipmentNumbers'],
        'shipmentType': !exists(json, 'shipmentType') ? undefined : json['shipmentType'],
        'tenantId': !exists(json, 'tenantId') ? undefined : json['tenantId'],
        'userDisplayName': !exists(json, 'userDisplayName') ? undefined : json['userDisplayName'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
    };
}

export function PickWaveToJSON(value?: PickWave | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attributes': value.attributes,
        'auditInfo': AuditInfo0ToJSON(value.auditInfo),
        'changeMessages': value.changeMessages === undefined ? undefined : ((value.changeMessages as Array<any>).map(ChangeMessageToJSON)),
        'contents': value.contents === undefined ? undefined : ((value.contents as Array<any>).map(PickWaveContentToJSON)),
        'fulfillmentLocationCode': value.fulfillmentLocationCode,
        'maxShipments': value.maxShipments,
        'parentPickWaveNumber': value.parentPickWaveNumber,
        'pickType': value.pickType,
        'pickWaveId': value.pickWaveId,
        'pickWaveNumber': value.pickWaveNumber,
        'pickWaveStatus': value.pickWaveStatus,
        'recoveryPickWaveNumber': value.recoveryPickWaveNumber,
        'shipmentNumbers': value.shipmentNumbers,
        'shipmentType': value.shipmentType,
        'tenantId': value.tenantId,
        'userDisplayName': value.userDisplayName,
        'userId': value.userId,
    };
}
