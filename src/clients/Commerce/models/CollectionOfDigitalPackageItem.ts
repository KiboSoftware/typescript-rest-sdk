/* tslint:disable */
/* eslint-disable */
/**
 * Kibo CommerceRuntime Service
 * OpenAPI Spec for Kibo CommerceRuntime Service
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
import type { ChangeMessage } from './ChangeMessage';
import {
    ChangeMessageFromJSON,
    ChangeMessageFromJSONTyped,
    ChangeMessageToJSON,
} from './ChangeMessage';
import type { DigitalPackageItem } from './DigitalPackageItem';
import {
    DigitalPackageItemFromJSON,
    DigitalPackageItemFromJSONTyped,
    DigitalPackageItemToJSON,
} from './DigitalPackageItem';

/**
 * 
 * @export
 * @interface CollectionOfDigitalPackageItem
 */
export interface CollectionOfDigitalPackageItem {
    /**
     * ID of the fulfillment unit.
     * @type {string}
     * @memberof CollectionOfDigitalPackageItem
     */
    id?: string | null;
    /**
     * A human-readable identifier for this fulfillment unit.  If not set on create, will be autogenerated as a string of the form
     *     {fulfillmentUnitType} #{next available int}
     * @type {string}
     * @memberof CollectionOfDigitalPackageItem
     */
    code?: string | null;
    /**
     * Status of the fulfillment unit
     * See FulfillmentStatusConst
     * @type {string}
     * @memberof CollectionOfDigitalPackageItem
     */
    status?: string | null;
    /**
     * List of items in the fulfillment unit
     * @type {Array<DigitalPackageItem>}
     * @memberof CollectionOfDigitalPackageItem
     */
    items?: Array<DigitalPackageItem> | null;
    /**
     * Date of the pickup
     * @type {Date}
     * @memberof CollectionOfDigitalPackageItem
     */
    fulfillmentDate?: Date | null;
    /**
     * Location code from which to obtain this item
     * @type {string}
     * @memberof CollectionOfDigitalPackageItem
     */
    fulfillmentLocationCode?: string | null;
    /**
     * 
     * @type {AuditInfo}
     * @memberof CollectionOfDigitalPackageItem
     */
    auditInfo?: AuditInfo;
    /**
     * Actions that can be taken on this fulfillment unit
     * @type {Array<string>}
     * @memberof CollectionOfDigitalPackageItem
     */
    availableActions?: Array<string> | null;
    /**
     * Change messages related to the fulfillment unit.
     * @type {Array<ChangeMessage>}
     * @memberof CollectionOfDigitalPackageItem
     */
    changeMessages?: Array<ChangeMessage> | null;
}

/**
 * Check if a given object implements the CollectionOfDigitalPackageItem interface.
 */
export function instanceOfCollectionOfDigitalPackageItem(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CollectionOfDigitalPackageItemFromJSON(json: any): CollectionOfDigitalPackageItem {
    return CollectionOfDigitalPackageItemFromJSONTyped(json, false);
}

export function CollectionOfDigitalPackageItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): CollectionOfDigitalPackageItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(DigitalPackageItemFromJSON)),
        'fulfillmentDate': !exists(json, 'fulfillmentDate') ? undefined : (json['fulfillmentDate'] === null ? null : new Date(json['fulfillmentDate'])),
        'fulfillmentLocationCode': !exists(json, 'fulfillmentLocationCode') ? undefined : json['fulfillmentLocationCode'],
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AuditInfoFromJSON(json['auditInfo']),
        'availableActions': !exists(json, 'availableActions') ? undefined : json['availableActions'],
        'changeMessages': !exists(json, 'changeMessages') ? undefined : (json['changeMessages'] === null ? null : (json['changeMessages'] as Array<any>).map(ChangeMessageFromJSON)),
    };
}

export function CollectionOfDigitalPackageItemToJSON(value?: CollectionOfDigitalPackageItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'code': value.code,
        'status': value.status,
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(DigitalPackageItemToJSON)),
        'fulfillmentDate': value.fulfillmentDate === undefined ? undefined : (value.fulfillmentDate === null ? null : value.fulfillmentDate.toISOString()),
        'fulfillmentLocationCode': value.fulfillmentLocationCode,
        'auditInfo': AuditInfoToJSON(value.auditInfo),
        'availableActions': value.availableActions,
        'changeMessages': value.changeMessages === undefined ? undefined : (value.changeMessages === null ? null : (value.changeMessages as Array<any>).map(ChangeMessageToJSON)),
    };
}

