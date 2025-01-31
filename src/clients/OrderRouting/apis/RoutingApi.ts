/* tslint:disable */
/* eslint-disable */
/**
 * Order Routing
 * Order Routing API
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
  APIErrorResponse,
  CandidateSuggestionsRequest,
  CandidateSuggestionsResponse,
  SuggestionRequest,
  SuggestionResponse,
  SuggestionTestRequest,
} from '../models';


export namespace routingApiParams { 
    export interface GetSampleRequestRequest {
        xVolTenant: number;
        xVolSite: number;
    }
    export interface GetSuggestionLog2Request {
        xVolTenant: number;
        xVolSite: number;
        orderID?: number;
        suggestionID?: number;
        responseID?: number;
        externalResponseID?: string;
    }
    export interface SuggestCandidatesRequest {
        xVolTenant: number;
        xVolSite: number;
        candidateSuggestionsRequest: CandidateSuggestionsRequest;
    }
    export interface SuggestRoutingRequest {
        xVolTenant: number;
        xVolSite: number;
        suggestionRequest: SuggestionRequest;
        returnSuggestionLog?: boolean;
    }
    export interface SuggestRoutingTestRequest {
        xVolTenant: number;
        xVolSite: number;
        suggestionTestRequest: SuggestionTestRequest;
        returnSuggestionLog?: boolean;
    }
}
/**
* RoutingApiService - interface
* 
* @export
* @interface RoutingApi
*/
export interface RoutingApiService {
    /**
    * Get Sample Request
    * @summary Get Sample Request
    * @param {number} xVolTenant Tenant
    * @param {number} xVolSite Site
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof RoutingApiInterface
    */
    getSampleRequestRaw(requestParameters: routingApiParams.GetSampleRequestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuggestionRequest>>;

    /**
    * Get Sample Request
    * Get Sample Request
    */
    getSampleRequest(requestParameters: routingApiParams.GetSampleRequestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuggestionRequest>;

    /**
    * Get Suggestion Log_2
    * @summary Get Suggestion Log_2
    * @param {number} xVolTenant Tenant
    * @param {number} xVolSite Site
    * @param {number} [orderID] 
    * @param {number} [suggestionID] 
    * @param {number} [responseID] 
    * @param {string} [externalResponseID] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof RoutingApiInterface
    */
    getSuggestionLog2Raw(requestParameters: routingApiParams.GetSuggestionLog2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<object>>>;

    /**
    * Get Suggestion Log_2
    * Get Suggestion Log_2
    */
    getSuggestionLog2(requestParameters: routingApiParams.GetSuggestionLog2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<object>>;

    /**
    * Suggest Candidates
    * @summary Suggest Candidates
    * @param {number} xVolTenant Tenant
    * @param {number} xVolSite Site
    * @param {CandidateSuggestionsRequest} candidateSuggestionsRequest 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof RoutingApiInterface
    */
    suggestCandidatesRaw(requestParameters: routingApiParams.SuggestCandidatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CandidateSuggestionsResponse>>;

    /**
    * Suggest Candidates
    * Suggest Candidates
    */
    suggestCandidates(requestParameters: routingApiParams.SuggestCandidatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CandidateSuggestionsResponse>;

    /**
    * Suggest Routing
    * @summary Suggest Routing
    * @param {number} xVolTenant Tenant
    * @param {number} xVolSite Site
    * @param {SuggestionRequest} suggestionRequest 
    * @param {boolean} [returnSuggestionLog] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof RoutingApiInterface
    */
    suggestRoutingRaw(requestParameters: routingApiParams.SuggestRoutingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuggestionResponse>>;

    /**
    * Suggest Routing
    * Suggest Routing
    */
    suggestRouting(requestParameters: routingApiParams.SuggestRoutingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuggestionResponse>;

    /**
    * Suggest Routing Test
    * @summary Suggest Routing Test
    * @param {number} xVolTenant Tenant
    * @param {number} xVolSite Site
    * @param {SuggestionTestRequest} suggestionTestRequest 
    * @param {boolean} [returnSuggestionLog] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof RoutingApiInterface
    */
    suggestRoutingTestRaw(requestParameters: routingApiParams.SuggestRoutingTestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuggestionResponse>>;

    /**
    * Suggest Routing Test
    * Suggest Routing Test
    */
    suggestRoutingTest(requestParameters: routingApiParams.SuggestRoutingTestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuggestionResponse>;

}


/**
 * 
 */
export class RoutingApi extends runtime.BaseAPI implements RoutingApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Get Sample Request
     * Get Sample Request
     */


    async getSampleRequestRaw(requestParameters: routingApiParams.GetSampleRequestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuggestionRequest>> {
        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling getSampleRequest.');
        }

        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling getSampleRequest.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/orders/orderrouting/api/v1/routing/samplerequest`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get Sample Request
     * Get Sample Request
     */
    async getSampleRequest(requestParameters: routingApiParams.GetSampleRequestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuggestionRequest> {
        const response = await this.getSampleRequestRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Suggestion Log_2
     * Get Suggestion Log_2
     */


    async getSuggestionLog2Raw(requestParameters: routingApiParams.GetSuggestionLog2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<object>>> {
        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling getSuggestionLog2.');
        }

        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling getSuggestionLog2.');
        }

        const queryParameters: any = {};

        if (requestParameters.orderID !== undefined) {
            queryParameters['orderID'] = requestParameters.orderID;
        }

        if (requestParameters.suggestionID !== undefined) {
            queryParameters['suggestionID'] = requestParameters.suggestionID;
        }

        if (requestParameters.responseID !== undefined) {
            queryParameters['responseID'] = requestParameters.responseID;
        }

        if (requestParameters.externalResponseID !== undefined) {
            queryParameters['externalResponseID'] = requestParameters.externalResponseID;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/orders/orderrouting/api/v1/routing/suggestionLog`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Get Suggestion Log_2
     * Get Suggestion Log_2
     */
    async getSuggestionLog2(requestParameters: routingApiParams.GetSuggestionLog2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<object>> {
        const response = await this.getSuggestionLog2Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Suggest Candidates
     * Suggest Candidates
     */


    async suggestCandidatesRaw(requestParameters: routingApiParams.SuggestCandidatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CandidateSuggestionsResponse>> {
        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling suggestCandidates.');
        }

        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling suggestCandidates.');
        }

        if (requestParameters.candidateSuggestionsRequest === null || requestParameters.candidateSuggestionsRequest === undefined) {
            throw new runtime.RequiredError('candidateSuggestionsRequest','Required parameter requestParameters.candidateSuggestionsRequest was null or undefined when calling suggestCandidates.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/orders/orderrouting/api/v1/routing/candidates`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.candidateSuggestionsRequest,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Suggest Candidates
     * Suggest Candidates
     */
    async suggestCandidates(requestParameters: routingApiParams.SuggestCandidatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CandidateSuggestionsResponse> {
        const response = await this.suggestCandidatesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Suggest Routing
     * Suggest Routing
     */


    async suggestRoutingRaw(requestParameters: routingApiParams.SuggestRoutingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuggestionResponse>> {
        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling suggestRouting.');
        }

        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling suggestRouting.');
        }

        if (requestParameters.suggestionRequest === null || requestParameters.suggestionRequest === undefined) {
            throw new runtime.RequiredError('suggestionRequest','Required parameter requestParameters.suggestionRequest was null or undefined when calling suggestRouting.');
        }

        const queryParameters: any = {};

        if (requestParameters.returnSuggestionLog !== undefined) {
            queryParameters['returnSuggestionLog'] = requestParameters.returnSuggestionLog;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/orders/orderrouting/api/v1/routing/suggestion`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.suggestionRequest,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Suggest Routing
     * Suggest Routing
     */
    async suggestRouting(requestParameters: routingApiParams.SuggestRoutingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuggestionResponse> {
        const response = await this.suggestRoutingRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Suggest Routing Test
     * Suggest Routing Test
     */


    async suggestRoutingTestRaw(requestParameters: routingApiParams.SuggestRoutingTestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuggestionResponse>> {
        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling suggestRoutingTest.');
        }

        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling suggestRoutingTest.');
        }

        if (requestParameters.suggestionTestRequest === null || requestParameters.suggestionTestRequest === undefined) {
            throw new runtime.RequiredError('suggestionTestRequest','Required parameter requestParameters.suggestionTestRequest was null or undefined when calling suggestRoutingTest.');
        }

        const queryParameters: any = {};

        if (requestParameters.returnSuggestionLog !== undefined) {
            queryParameters['returnSuggestionLog'] = requestParameters.returnSuggestionLog;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/orders/orderrouting/api/v1/routing/suggestionTest`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.suggestionTestRequest,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Suggest Routing Test
     * Suggest Routing Test
     */
    async suggestRoutingTest(requestParameters: routingApiParams.SuggestRoutingTestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuggestionResponse> {
        const response = await this.suggestRoutingTestRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
