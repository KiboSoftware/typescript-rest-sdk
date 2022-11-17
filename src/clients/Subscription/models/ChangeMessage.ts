/* tslint:disable */
/* eslint-disable */
/**
 * Kibo SubscriptionRuntime Service
 * OpenAPI Spec for Kibo SubscriptionRuntime Service
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
 * A message displayed by the system based on the last  action, for example, when a product price has changed. System-supplied and read-only.
 * @export
 * @interface ChangeMessage
 */
export interface ChangeMessage {
    /**
     * Unique identifier of the  message. System-supplied. Read-only.
     * @type {string}
     * @memberof ChangeMessage
     */
    id?: string | null;
    /**
     * Correlation Id
     * @type {string}
     * @memberof ChangeMessage
     */
    correlationId?: string | null;
    /**
     * User Id that identifies the user that performed the related change
     * @type {string}
     * @memberof ChangeMessage
     */
    userId?: string | null;
    /**
     * User First Name
     * @type {string}
     * @memberof ChangeMessage
     */
    userFirstName?: string | null;
    /**
     * User Last Name
     * @type {string}
     * @memberof ChangeMessage
     */
    userLastName?: string | null;
    /**
     * User Type (e.g. Shopper, Admin, etc.)
     * @type {string}
     * @memberof ChangeMessage
     */
    userScopeType?: string | null;
    /**
     * App Id that identifies the user that performed the related change
     * @type {string}
     * @memberof ChangeMessage
     */
    appId?: string | null;
    /**
     * App Key
     * @type {string}
     * @memberof ChangeMessage
     */
    appKey?: string | null;
    /**
     * App Name
     * @type {string}
     * @memberof ChangeMessage
     */
    appName?: string | null;
    /**
     * Subject of the message, for example, "Product." System-supplied. Read-only.
     * @type {string}
     * @memberof ChangeMessage
     */
    subjectType?: string | null;
    /**
     * Indicates if the message is related to a success or failure.
     * @type {boolean}
     * @memberof ChangeMessage
     */
    success?: boolean | null;
    /**
     * Unique identifier to what the message pertains, which can be a cart item, cart or another generic entity. System-supplied. Read-only.
     * @type {string}
     * @memberof ChangeMessage
     */
    identifier?: string | null;
    /**
     * Text on the subject line of the message, for example, the product name. System-supplied. Read-only.
     * @type {string}
     * @memberof ChangeMessage
     */
    subject?: string | null;
    /**
     * Action applicable to the message. This can be "Increased," when the product price has increased, "Decreased," when the 
     * product price has decreased, and "Invalidated," when the product is no longer available. System-supplied. Read-only.
     * @type {string}
     * @memberof ChangeMessage
     */
    verb?: string | null;
    /**
     * Human readable message. System-supplied. Read-only.
     * @type {string}
     * @memberof ChangeMessage
     */
    message?: string | null;
    /**
     * Data. This property will be a JSON array that will contain 0-N items, when there is 1 item it will still be an array containing only one item. System-supplied. Read-only.
     * @type {any}
     * @memberof ChangeMessage
     */
    metadata?: any | null;
    /**
     * Original price of the item. System-supplied. Read-only.
     * @type {string}
     * @memberof ChangeMessage
     * @deprecated
     */
    oldValue?: string | null;
    /**
     * Current price of the item. System-supplied. Read-only.
     * @type {string}
     * @memberof ChangeMessage
     * @deprecated
     */
    newValue?: string | null;
    /**
     * Monetary amount that pertains to the change if applicable
     * @type {number}
     * @memberof ChangeMessage
     * @deprecated
     */
    amount?: number | null;
    /**
     * When the message was created. System-supplied. Read-only.
     * @type {Date}
     * @memberof ChangeMessage
     */
    createDate?: Date | null;
    /**
     * Additional Data. This property will be a Dictionary of objects.
     * @type {{ [key: string]: any; }}
     * @memberof ChangeMessage
     */
    attributes?: { [key: string]: any; } | null;
}

/**
 * Check if a given object implements the ChangeMessage interface.
 */
export function instanceOfChangeMessage(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChangeMessageFromJSON(json: any): ChangeMessage {
    return ChangeMessageFromJSONTyped(json, false);
}

export function ChangeMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeMessage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'correlationId': !exists(json, 'correlationId') ? undefined : json['correlationId'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'userFirstName': !exists(json, 'userFirstName') ? undefined : json['userFirstName'],
        'userLastName': !exists(json, 'userLastName') ? undefined : json['userLastName'],
        'userScopeType': !exists(json, 'userScopeType') ? undefined : json['userScopeType'],
        'appId': !exists(json, 'appId') ? undefined : json['appId'],
        'appKey': !exists(json, 'appKey') ? undefined : json['appKey'],
        'appName': !exists(json, 'appName') ? undefined : json['appName'],
        'subjectType': !exists(json, 'subjectType') ? undefined : json['subjectType'],
        'success': !exists(json, 'success') ? undefined : json['success'],
        'identifier': !exists(json, 'identifier') ? undefined : json['identifier'],
        'subject': !exists(json, 'subject') ? undefined : json['subject'],
        'verb': !exists(json, 'verb') ? undefined : json['verb'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'oldValue': !exists(json, 'oldValue') ? undefined : json['oldValue'],
        'newValue': !exists(json, 'newValue') ? undefined : json['newValue'],
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'createDate': !exists(json, 'createDate') ? undefined : (json['createDate'] === null ? null : new Date(json['createDate'])),
        'attributes': !exists(json, 'attributes') ? undefined : json['attributes'],
    };
}

export function ChangeMessageToJSON(value?: ChangeMessage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'correlationId': value.correlationId,
        'userId': value.userId,
        'userFirstName': value.userFirstName,
        'userLastName': value.userLastName,
        'userScopeType': value.userScopeType,
        'appId': value.appId,
        'appKey': value.appKey,
        'appName': value.appName,
        'subjectType': value.subjectType,
        'success': value.success,
        'identifier': value.identifier,
        'subject': value.subject,
        'verb': value.verb,
        'message': value.message,
        'metadata': value.metadata,
        'oldValue': value.oldValue,
        'newValue': value.newValue,
        'amount': value.amount,
        'createDate': value.createDate === undefined ? undefined : (value.createDate === null ? null : value.createDate.toISOString()),
        'attributes': value.attributes,
    };
}

