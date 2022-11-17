/* tslint:disable */
/* eslint-disable */
/**
 * Kibo AppDev Service
 * OpenAPI Spec for Kibo AppDev Service
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
 * 
 * @export
 * @interface OAuthAccessTokenResponse
 */
export interface OAuthAccessTokenResponse {
    /**
     * 
     * @type {string}
     * @memberof OAuthAccessTokenResponse
     */
    accessToken?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OAuthAccessTokenResponse
     */
    tokenType?: string | null;
    /**
     * 
     * @type {number}
     * @memberof OAuthAccessTokenResponse
     */
    expiresIn?: number;
    /**
     * 
     * @type {string}
     * @memberof OAuthAccessTokenResponse
     */
    refreshToken?: string | null;
}

/**
 * Check if a given object implements the OAuthAccessTokenResponse interface.
 */
export function instanceOfOAuthAccessTokenResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OAuthAccessTokenResponseFromJSON(json: any): OAuthAccessTokenResponse {
    return OAuthAccessTokenResponseFromJSONTyped(json, false);
}

export function OAuthAccessTokenResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OAuthAccessTokenResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accessToken': !exists(json, 'access_token') ? undefined : json['access_token'],
        'tokenType': !exists(json, 'token_type') ? undefined : json['token_type'],
        'expiresIn': !exists(json, 'expires_in') ? undefined : json['expires_in'],
        'refreshToken': !exists(json, 'refresh_token') ? undefined : json['refresh_token'],
    };
}

export function OAuthAccessTokenResponseToJSON(value?: OAuthAccessTokenResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'access_token': value.accessToken,
        'token_type': value.tokenType,
        'expires_in': value.expiresIn,
        'refresh_token': value.refreshToken,
    };
}

