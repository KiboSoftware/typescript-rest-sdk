/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Admin User Service
 * OpenAPI Spec for Kibo Admin User Service
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
  DeveloperAdminUserAuthTicket,
  UserAuthInfo,
} from '../models';
import {
    DeveloperAdminUserAuthTicketFromJSON,
    DeveloperAdminUserAuthTicketToJSON,
    UserAuthInfoFromJSON,
    UserAuthInfoToJSON,
} from '../models';

export interface DeveloperAdminAuthTicketApiCreateDeveloperUserAuthTicketRequest {
    developerAccountId?: number;
    userAuthInfo?: UserAuthInfo;
}

export interface DeveloperAdminAuthTicketApiDeleteUserAuthTicketRequest {
    refreshToken?: string;
}

export interface DeveloperAdminAuthTicketApiRefreshDeveloperAuthTicketRequest {
    developerAccountId?: number;
    developerAdminUserAuthTicket?: DeveloperAdminUserAuthTicket;
}

/**
 * 
 */
export class DeveloperAdminAuthTicketApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Authenticates a user for a particular tenant given a set of user credentials adn a tenantId.
     * Create Developer User Auth Ticket
     */


    async createDeveloperUserAuthTicketRaw(requestParameters: DeveloperAdminAuthTicketApiCreateDeveloperUserAuthTicketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeveloperAdminUserAuthTicket>> {
        const queryParameters: any = {};

        if (requestParameters.developerAccountId !== undefined) {
            queryParameters['developerAccountId'] = requestParameters.developerAccountId;
        }

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
            path: `/platform/developer/authtickets`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserAuthInfoToJSON(requestParameters.userAuthInfo),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeveloperAdminUserAuthTicketFromJSON(jsonValue));
    }

    /**
     * Authenticates a user for a particular tenant given a set of user credentials adn a tenantId.
     * Create Developer User Auth Ticket
     */
    async createDeveloperUserAuthTicket(requestParameters: DeveloperAdminAuthTicketApiCreateDeveloperUserAuthTicketRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeveloperAdminUserAuthTicket> {
        const response = await this.createDeveloperUserAuthTicketRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Logs out a user by deleting the refresh token
     * Delete User Auth Ticket
     */


    async deleteUserAuthTicketRaw(requestParameters: DeveloperAdminAuthTicketApiDeleteUserAuthTicketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.refreshToken !== undefined) {
            queryParameters['refreshToken'] = requestParameters.refreshToken;
        }

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
            path: `/platform/developer/authtickets`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Logs out a user by deleting the refresh token
     * Delete User Auth Ticket
     */
    async deleteUserAuthTicket(requestParameters: DeveloperAdminAuthTicketApiDeleteUserAuthTicketRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteUserAuthTicketRaw(requestParameters, initOverrides);
    }

    /**
     * Reauthenticates the current user for a different tenant. If the user does not have access to the tenant, the operation fails.
     * Refresh Developer Auth Ticket
     */


    async refreshDeveloperAuthTicketRaw(requestParameters: DeveloperAdminAuthTicketApiRefreshDeveloperAuthTicketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeveloperAdminUserAuthTicket>> {
        const queryParameters: any = {};

        if (requestParameters.developerAccountId !== undefined) {
            queryParameters['developerAccountId'] = requestParameters.developerAccountId;
        }

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
            path: `/platform/developer/authtickets`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: DeveloperAdminUserAuthTicketToJSON(requestParameters.developerAdminUserAuthTicket),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeveloperAdminUserAuthTicketFromJSON(jsonValue));
    }

    /**
     * Reauthenticates the current user for a different tenant. If the user does not have access to the tenant, the operation fails.
     * Refresh Developer Auth Ticket
     */
    async refreshDeveloperAuthTicket(requestParameters: DeveloperAdminAuthTicketApiRefreshDeveloperAuthTicketRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeveloperAdminUserAuthTicket> {
        const response = await this.refreshDeveloperAuthTicketRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
