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


import * as runtime from '../../../client-runtime';
import { basePathTemplate } from '../api-path';
import type {
  AppAuthInfo,
  AuthTicket,
  AuthTicketRequest,
  OAuthAccessTokenResponse,
  OauthAuthRequest,
} from '../models';
import {
    AppAuthInfoFromJSON,
    AppAuthInfoToJSON,
    AuthTicketFromJSON,
    AuthTicketToJSON,
    AuthTicketRequestFromJSON,
    AuthTicketRequestToJSON,
    OAuthAccessTokenResponseFromJSON,
    OAuthAccessTokenResponseToJSON,
    OauthAuthRequestFromJSON,
    OauthAuthRequestToJSON,
} from '../models';

export interface AppAuthTicketsApiAuthenticateAppRequest {
    appAuthInfo?: AppAuthInfo;
}

export interface AppAuthTicketsApiDeleteAppAuthTicketRequest {
    refreshToken: string;
}

export interface AppAuthTicketsApiOauthAuthenticateAppRequest {
    oauthAuthRequest?: OauthAuthRequest;
}

export interface AppAuthTicketsApiRefreshAppAuthTicketRequest {
    authTicketRequest?: AuthTicketRequest;
}

/**
 * 
 */
export class AppAuthTicketsApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Authenticates an application using shared secret and application id. The method returns a set of authentication tokens used to manage application authentication.
     * App Authenticate
     */


    async authenticateAppRaw(requestParameters: AppAuthTicketsApiAuthenticateAppRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AuthTicket>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        if (this.configuration && (this.configuration.accessToken || this.configuration.clientId && this.configuration.sharedSecret)) {
            const token = await this.configuration.accessToken;
            const tokenString = await token();
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        
        if (this.configuration && this.configuration.jwt) {
            const token = this.configuration.jwt;
            const tokenString = await token();

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/platform/applications/authtickets`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AppAuthInfoToJSON(requestParameters.appAuthInfo),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AuthTicketFromJSON(jsonValue));
    }

    /**
     * Authenticates an application using shared secret and application id. The method returns a set of authentication tokens used to manage application authentication.
     * App Authenticate
     */
    async authenticateApp(requestParameters: AppAuthTicketsApiAuthenticateAppRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AuthTicket> {
        const response = await this.authenticateAppRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This method is used to expire an application\'s current refresh token which   will force the application to reauthenticate once the current access token expires.
     * Delete App Auth Ticket
     */


    async deleteAppAuthTicketRaw(requestParameters: AppAuthTicketsApiDeleteAppAuthTicketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.refreshToken === null || requestParameters.refreshToken === undefined) {
            throw new runtime.RequiredError('refreshToken','Required parameter requestParameters.refreshToken was null or undefined when calling deleteAppAuthTicket.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        if (this.configuration && (this.configuration.accessToken || this.configuration.clientId && this.configuration.sharedSecret)) {
            const token = await this.configuration.accessToken;
            const tokenString = await token();
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        
        if (this.configuration && this.configuration.jwt) {
            const token = this.configuration.jwt;
            const tokenString = await token();

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/platform/applications/authtickets/{refreshToken}`.replace(`{${"refreshToken"}}`, encodeURIComponent(String(requestParameters.refreshToken))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This method is used to expire an application\'s current refresh token which   will force the application to reauthenticate once the current access token expires.
     * Delete App Auth Ticket
     */
    async deleteAppAuthTicket(requestParameters: AppAuthTicketsApiDeleteAppAuthTicketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteAppAuthTicketRaw(requestParameters, initOverrides);
    }

    /**
     * Oauth Authenticate App
     * Oauth Authenticate App
     */


    async oauthAuthenticateAppRaw(requestParameters: AppAuthTicketsApiOauthAuthenticateAppRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OAuthAccessTokenResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        if (this.configuration && (this.configuration.accessToken || this.configuration.clientId && this.configuration.sharedSecret)) {
            const token = await this.configuration.accessToken;
            const tokenString = await token();
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        
        if (this.configuration && this.configuration.jwt) {
            const token = this.configuration.jwt;
            const tokenString = await token();

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/platform/applications/authtickets/oauth`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OauthAuthRequestToJSON(requestParameters.oauthAuthRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OAuthAccessTokenResponseFromJSON(jsonValue));
    }

    /**
     * Oauth Authenticate App
     * Oauth Authenticate App
     */
    async oauthAuthenticateApp(requestParameters: AppAuthTicketsApiOauthAuthenticateAppRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OAuthAccessTokenResponse> {
        const response = await this.oauthAuthenticateAppRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the AppAuthTicket with a refreshed AccessToken
     * Refresh App Auth Ticket
     */


    async refreshAppAuthTicketRaw(requestParameters: AppAuthTicketsApiRefreshAppAuthTicketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AuthTicket>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        if (this.configuration && (this.configuration.accessToken || this.configuration.clientId && this.configuration.sharedSecret)) {
            const token = await this.configuration.accessToken;
            const tokenString = await token();
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        
        if (this.configuration && this.configuration.jwt) {
            const token = this.configuration.jwt;
            const tokenString = await token();

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/platform/applications/authtickets/refresh-ticket`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: AuthTicketRequestToJSON(requestParameters.authTicketRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AuthTicketFromJSON(jsonValue));
    }

    /**
     * Returns the AppAuthTicket with a refreshed AccessToken
     * Refresh App Auth Ticket
     */
    async refreshAppAuthTicket(requestParameters: AppAuthTicketsApiRefreshAppAuthTicketRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AuthTicket> {
        const response = await this.refreshAppAuthTicketRaw(requestParameters, initOverrides);
        return await response.value();
    }

}