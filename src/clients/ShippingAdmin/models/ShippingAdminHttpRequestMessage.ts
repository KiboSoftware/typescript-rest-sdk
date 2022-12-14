/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Shipping Admin Service
 * OpenAPI Spec for Kibo Shipping Admin Service
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
import type { HttpMethod } from './HttpMethod';
import {
    HttpMethodFromJSON,
    HttpMethodFromJSONTyped,
    HttpMethodToJSON,
} from './HttpMethod';
import type { HttpVersionPolicy } from './HttpVersionPolicy';
import {
    HttpVersionPolicyFromJSON,
    HttpVersionPolicyFromJSONTyped,
    HttpVersionPolicyToJSON,
} from './HttpVersionPolicy';
import type { StringStringIEnumerableKeyValuePair } from './StringStringIEnumerableKeyValuePair';
import {
    StringStringIEnumerableKeyValuePairFromJSON,
    StringStringIEnumerableKeyValuePairFromJSONTyped,
    StringStringIEnumerableKeyValuePairToJSON,
} from './StringStringIEnumerableKeyValuePair';

/**
 * 
 * @export
 * @interface ShippingAdminHttpRequestMessage
 */
export interface ShippingAdminHttpRequestMessage {
    /**
     * 
     * @type {string}
     * @memberof ShippingAdminHttpRequestMessage
     */
    version?: string | null;
    /**
     * 
     * @type {HttpVersionPolicy}
     * @memberof ShippingAdminHttpRequestMessage
     */
    versionPolicy?: HttpVersionPolicy;
    /**
     * 
     * @type {AppDevHttpContent}
     * @memberof ShippingAdminHttpRequestMessage
     */
    content?: AppDevHttpContent;
    /**
     * 
     * @type {HttpMethod}
     * @memberof ShippingAdminHttpRequestMessage
     */
    method?: HttpMethod;
    /**
     * 
     * @type {string}
     * @memberof ShippingAdminHttpRequestMessage
     */
    requestUri?: string | null;
    /**
     * 
     * @type {Array<StringStringIEnumerableKeyValuePair>}
     * @memberof ShippingAdminHttpRequestMessage
     */
    readonly headers?: Array<StringStringIEnumerableKeyValuePair> | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ShippingAdminHttpRequestMessage
     * @deprecated
     */
    readonly properties?: { [key: string]: any; } | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ShippingAdminHttpRequestMessage
     */
    readonly options?: { [key: string]: any; } | null;
}

/**
 * Check if a given object implements the ShippingAdminHttpRequestMessage interface.
 */
export function instanceOfShippingAdminHttpRequestMessage(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ShippingAdminHttpRequestMessageFromJSON(json: any): ShippingAdminHttpRequestMessage {
    return ShippingAdminHttpRequestMessageFromJSONTyped(json, false);
}

export function ShippingAdminHttpRequestMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShippingAdminHttpRequestMessage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'versionPolicy': !exists(json, 'versionPolicy') ? undefined : HttpVersionPolicyFromJSON(json['versionPolicy']),
        'content': !exists(json, 'content') ? undefined : AppDevHttpContentFromJSON(json['content']),
        'method': !exists(json, 'method') ? undefined : HttpMethodFromJSON(json['method']),
        'requestUri': !exists(json, 'requestUri') ? undefined : json['requestUri'],
        'headers': !exists(json, 'headers') ? undefined : (json['headers'] === null ? null : (json['headers'] as Array<any>).map(StringStringIEnumerableKeyValuePairFromJSON)),
        'properties': !exists(json, 'properties') ? undefined : json['properties'],
        'options': !exists(json, 'options') ? undefined : json['options'],
    };
}

export function ShippingAdminHttpRequestMessageToJSON(value?: ShippingAdminHttpRequestMessage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
        'versionPolicy': HttpVersionPolicyToJSON(value.versionPolicy),
        'content': AppDevHttpContentToJSON(value.content),
        'method': HttpMethodToJSON(value.method),
        'requestUri': value.requestUri,
    };
}

