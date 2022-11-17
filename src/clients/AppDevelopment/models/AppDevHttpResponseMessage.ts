/* tslint:disable */
/* eslint-disable */
/**
 * Kibo AppDev Service
 * OpenAPI Spec for Kibo AppDev Service
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AppDevHttpContent } from './AppDevHttpContent';
import {
    AppDevHttpContentFromJSON,
    AppDevHttpContentFromJSONTyped,
    AppDevHttpContentToJSON,
} from './AppDevHttpContent';
import type { AppDevHttpRequestMessage } from './AppDevHttpRequestMessage';
import {
    AppDevHttpRequestMessageFromJSON,
    AppDevHttpRequestMessageFromJSONTyped,
    AppDevHttpRequestMessageToJSON,
} from './AppDevHttpRequestMessage';
import type { HttpStatusCode } from './HttpStatusCode';
import {
    HttpStatusCodeFromJSON,
    HttpStatusCodeFromJSONTyped,
    HttpStatusCodeToJSON,
} from './HttpStatusCode';
import type { StringStringIEnumerableKeyValuePair } from './StringStringIEnumerableKeyValuePair';
import {
    StringStringIEnumerableKeyValuePairFromJSON,
    StringStringIEnumerableKeyValuePairFromJSONTyped,
    StringStringIEnumerableKeyValuePairToJSON,
} from './StringStringIEnumerableKeyValuePair';

/**
 * 
 * @export
 * @interface AppDevHttpResponseMessage
 */
export interface AppDevHttpResponseMessage {
    /**
     * 
     * @type {string}
     * @memberof AppDevHttpResponseMessage
     */
    version?: string | null;
    /**
     * 
     * @type {AppDevHttpContent}
     * @memberof AppDevHttpResponseMessage
     */
    content?: AppDevHttpContent;
    /**
     * 
     * @type {HttpStatusCode}
     * @memberof AppDevHttpResponseMessage
     */
    statusCode?: HttpStatusCode;
    /**
     * 
     * @type {string}
     * @memberof AppDevHttpResponseMessage
     */
    reasonPhrase?: string | null;
    /**
     * 
     * @type {Array<StringStringIEnumerableKeyValuePair>}
     * @memberof AppDevHttpResponseMessage
     */
    readonly headers?: Array<StringStringIEnumerableKeyValuePair> | null;
    /**
     * 
     * @type {Array<StringStringIEnumerableKeyValuePair>}
     * @memberof AppDevHttpResponseMessage
     */
    readonly trailingHeaders?: Array<StringStringIEnumerableKeyValuePair> | null;
    /**
     * 
     * @type {AppDevHttpRequestMessage}
     * @memberof AppDevHttpResponseMessage
     */
    requestMessage?: AppDevHttpRequestMessage;
    /**
     * 
     * @type {boolean}
     * @memberof AppDevHttpResponseMessage
     */
    readonly isSuccessStatusCode?: boolean;
}

/**
 * Check if a given object implements the AppDevHttpResponseMessage interface.
 */
export function instanceOfAppDevHttpResponseMessage(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppDevHttpResponseMessageFromJSON(json: any): AppDevHttpResponseMessage {
    return AppDevHttpResponseMessageFromJSONTyped(json, false);
}

export function AppDevHttpResponseMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppDevHttpResponseMessage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'content': !exists(json, 'content') ? undefined : AppDevHttpContentFromJSON(json['content']),
        'statusCode': !exists(json, 'statusCode') ? undefined : HttpStatusCodeFromJSON(json['statusCode']),
        'reasonPhrase': !exists(json, 'reasonPhrase') ? undefined : json['reasonPhrase'],
        'headers': !exists(json, 'headers') ? undefined : (json['headers'] === null ? null : (json['headers'] as Array<any>).map(StringStringIEnumerableKeyValuePairFromJSON)),
        'trailingHeaders': !exists(json, 'trailingHeaders') ? undefined : (json['trailingHeaders'] === null ? null : (json['trailingHeaders'] as Array<any>).map(StringStringIEnumerableKeyValuePairFromJSON)),
        'requestMessage': !exists(json, 'requestMessage') ? undefined : AppDevHttpRequestMessageFromJSON(json['requestMessage']),
        'isSuccessStatusCode': !exists(json, 'isSuccessStatusCode') ? undefined : json['isSuccessStatusCode'],
    };
}

export function AppDevHttpResponseMessageToJSON(value?: AppDevHttpResponseMessage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
        'content': AppDevHttpContentToJSON(value.content),
        'statusCode': HttpStatusCodeToJSON(value.statusCode),
        'reasonPhrase': value.reasonPhrase,
        'requestMessage': AppDevHttpRequestMessageToJSON(value.requestMessage),
    };
}
