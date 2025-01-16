/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Customer Service
 * OpenAPI Spec for Kibo Customer Service
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../../../client-runtime';
import { basePathTemplate } from '../api-path';
import type {
  CartAuthTicketRequest,
  CustomerAuthTicket,
  CustomerUserAuthInfo,
} from '../models';


export namespace storefrontAuthTicketApiParams { 
    export interface CreateAnonymousShopperAuthTicketRequest {
        responseFields?: string;
    }
    export interface CreateUserAuthTicketRequest {
        responseFields?: string;
        customerUserAuthInfo?: CustomerUserAuthInfo;
    }
    export interface ImpersonateCartRequest {
        responseFields?: string;
        cartAuthTicketRequest?: CartAuthTicketRequest;
    }
    export interface RefreshUserAuthTicketRequest {
        refreshToken?: string;
        accountId?: number;
        responseFields?: string;
    }
}
/**
* StorefrontAuthTicketApiService - interface
* 
* @export
* @interface StorefrontAuthTicketApi
*/
export interface StorefrontAuthTicketApiService {
    /**
    * Authenticates anonymous shopper for the site.
    * @summary Create Anonymous Shopper Auth Ticket
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof StorefrontAuthTicketApiInterface
    */
    createAnonymousShopperAuthTicketRaw(requestParameters: storefrontAuthTicketApiParams.CreateAnonymousShopperAuthTicketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerAuthTicket>>;

    /**
    * Authenticates anonymous shopper for the site.
    * Create Anonymous Shopper Auth Ticket
    */
    createAnonymousShopperAuthTicket(requestParameters: storefrontAuthTicketApiParams.CreateAnonymousShopperAuthTicketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerAuthTicket>;

    /**
    * Authenticates a user for a particular site given a set of user credentials.
    * @summary Create User Auth Ticket
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CustomerUserAuthInfo} [customerUserAuthInfo] User\&#39;s email address and password.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof StorefrontAuthTicketApiInterface
    */
    createUserAuthTicketRaw(requestParameters: storefrontAuthTicketApiParams.CreateUserAuthTicketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerAuthTicket>>;

    /**
    * Authenticates a user for a particular site given a set of user credentials.
    * Create User Auth Ticket
    */
    createUserAuthTicket(requestParameters: storefrontAuthTicketApiParams.CreateUserAuthTicketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerAuthTicket>;

    /**
    * 
    * @summary Impersonate Cart
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CartAuthTicketRequest} [cartAuthTicketRequest] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof StorefrontAuthTicketApiInterface
    */
    impersonateCartRaw(requestParameters: storefrontAuthTicketApiParams.ImpersonateCartRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerAuthTicket>>;

    /**
    * 
    * Impersonate Cart
    */
    impersonateCart(requestParameters: storefrontAuthTicketApiParams.ImpersonateCartRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerAuthTicket>;

    /**
    * Refreshes a user\'s authentication.
    * @summary Refresh User Auth Ticket
    * @param {string} [refreshToken] The user\&#39;s refresh token.
    * @param {number} [accountId] Account Id specifies the account for which the user requests an authentication token.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof StorefrontAuthTicketApiInterface
    */
    refreshUserAuthTicketRaw(requestParameters: storefrontAuthTicketApiParams.RefreshUserAuthTicketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerAuthTicket>>;

    /**
    * Refreshes a user\'s authentication.
    * Refresh User Auth Ticket
    */
    refreshUserAuthTicket(requestParameters: storefrontAuthTicketApiParams.RefreshUserAuthTicketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerAuthTicket>;

}


/**
 * 
 */
export class StorefrontAuthTicketApi extends runtime.BaseAPI implements StorefrontAuthTicketApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Authenticates anonymous shopper for the site.
     * Create Anonymous Shopper Auth Ticket
     */


    async createAnonymousShopperAuthTicketRaw(requestParameters: storefrontAuthTicketApiParams.CreateAnonymousShopperAuthTicketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerAuthTicket>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/customer/authtickets/anonymousshopper`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Authenticates anonymous shopper for the site.
     * Create Anonymous Shopper Auth Ticket
     */
    async createAnonymousShopperAuthTicket(requestParameters: storefrontAuthTicketApiParams.CreateAnonymousShopperAuthTicketRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerAuthTicket> {
        const response = await this.createAnonymousShopperAuthTicketRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Authenticates a user for a particular site given a set of user credentials.
     * Create User Auth Ticket
     */


    async createUserAuthTicketRaw(requestParameters: storefrontAuthTicketApiParams.CreateUserAuthTicketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerAuthTicket>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/customer/authtickets`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.customerUserAuthInfo,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Authenticates a user for a particular site given a set of user credentials.
     * Create User Auth Ticket
     */
    async createUserAuthTicket(requestParameters: storefrontAuthTicketApiParams.CreateUserAuthTicketRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerAuthTicket> {
        const response = await this.createUserAuthTicketRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Impersonate Cart
     */


    async impersonateCartRaw(requestParameters: storefrontAuthTicketApiParams.ImpersonateCartRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerAuthTicket>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/customer/authtickets/impersonatecart`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.cartAuthTicketRequest,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 
     * Impersonate Cart
     */
    async impersonateCart(requestParameters: storefrontAuthTicketApiParams.ImpersonateCartRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerAuthTicket> {
        const response = await this.impersonateCartRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Refreshes a user\'s authentication.
     * Refresh User Auth Ticket
     */


    async refreshUserAuthTicketRaw(requestParameters: storefrontAuthTicketApiParams.RefreshUserAuthTicketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerAuthTicket>> {
        const queryParameters: any = {};

        if (requestParameters.refreshToken !== undefined) {
            queryParameters['refreshToken'] = requestParameters.refreshToken;
        }

        if (requestParameters.accountId !== undefined) {
            queryParameters['accountId'] = requestParameters.accountId;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/customer/authtickets/refresh`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Refreshes a user\'s authentication.
     * Refresh User Auth Ticket
     */
    async refreshUserAuthTicket(requestParameters: storefrontAuthTicketApiParams.RefreshUserAuthTicketRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerAuthTicket> {
        const response = await this.refreshUserAuthTicketRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
