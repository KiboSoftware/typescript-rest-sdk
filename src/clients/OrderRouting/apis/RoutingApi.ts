/* tslint:disable */
/* eslint-disable */
/**
 * Api Documentation
 * Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../../../client-runtime';
import { basePathTemplate } from '../api-path';
import type {
  CandidateSuggestionsRequest,
  CandidateSuggestionsResponse,
  SuggestionLog,
  SuggestionRequest,
  SuggestionResponse,
  SuggestionTestRequest,
} from '../models';
import {
    CandidateSuggestionsRequestFromJSON,
    CandidateSuggestionsRequestToJSON,
    CandidateSuggestionsResponseFromJSON,
    CandidateSuggestionsResponseToJSON,
    SuggestionLogFromJSON,
    SuggestionLogToJSON,
    SuggestionRequestFromJSON,
    SuggestionRequestToJSON,
    SuggestionResponseFromJSON,
    SuggestionResponseToJSON,
    SuggestionTestRequestFromJSON,
    SuggestionTestRequestToJSON,
} from '../models';

export interface RoutingApiGetSampleRequestUsingGETRequest {
    xVolSite: number;
    xVolTenant: number;
}

export interface RoutingApiGetSuggestionLogUsingGETRequest {
    xVolSite: number;
    xVolTenant: number;
    externalResponseID?: string;
    orderID?: number;
    responseID?: number;
    suggestionID?: number;
}

export interface RoutingApiSuggestCandidatesUsingPOSTRequest {
    xVolSite: number;
    xVolTenant: number;
    request: CandidateSuggestionsRequest;
}

export interface RoutingApiSuggestRoutingTestUsingPOSTRequest {
    xVolSite: number;
    xVolTenant: number;
    request: SuggestionTestRequest;
    returnSuggestionLog?: boolean;
}

export interface RoutingApiSuggestRoutingUsingPOSTRequest {
    xVolSite: number;
    xVolTenant: number;
    request: SuggestionRequest;
    returnSuggestionLog?: boolean;
}

/**
 * 
 */
export class RoutingApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * getSampleRequest
     * getSampleRequest
     */


    async getSampleRequestUsingGETRaw(requestParameters: RoutingApiGetSampleRequestUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuggestionRequest>> {
        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling getSampleRequestUsingGET.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling getSampleRequestUsingGET.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }


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
            path: `/commerce/orderrouting/api/v1/routing/samplerequest`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuggestionRequestFromJSON(jsonValue));
    }

    /**
     * getSampleRequest
     * getSampleRequest
     */
    async getSampleRequestUsingGET(requestParameters: RoutingApiGetSampleRequestUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuggestionRequest> {
        const response = await this.getSampleRequestUsingGETRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * getSuggestionLog
     * getSuggestionLog
     */


    async getSuggestionLogUsingGETRaw(requestParameters: RoutingApiGetSuggestionLogUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<SuggestionLog>>> {
        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling getSuggestionLogUsingGET.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling getSuggestionLogUsingGET.');
        }

        const queryParameters: any = {};

        if (requestParameters.externalResponseID !== undefined) {
            queryParameters['externalResponseID'] = requestParameters.externalResponseID;
        }

        if (requestParameters.orderID !== undefined) {
            queryParameters['orderID'] = requestParameters.orderID;
        }

        if (requestParameters.responseID !== undefined) {
            queryParameters['responseID'] = requestParameters.responseID;
        }

        if (requestParameters.suggestionID !== undefined) {
            queryParameters['suggestionID'] = requestParameters.suggestionID;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }


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
            path: `/commerce/orderrouting/api/v1/routing/suggestionLog`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SuggestionLogFromJSON));
    }

    /**
     * getSuggestionLog
     * getSuggestionLog
     */
    async getSuggestionLogUsingGET(requestParameters: RoutingApiGetSuggestionLogUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<SuggestionLog>> {
        const response = await this.getSuggestionLogUsingGETRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * suggestCandidates
     * suggestCandidates
     */


    async suggestCandidatesUsingPOSTRaw(requestParameters: RoutingApiSuggestCandidatesUsingPOSTRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CandidateSuggestionsResponse>> {
        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling suggestCandidatesUsingPOST.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling suggestCandidatesUsingPOST.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling suggestCandidatesUsingPOST.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }


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
            path: `/commerce/orderrouting/api/v1/routing/candidates`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CandidateSuggestionsRequestToJSON(requestParameters.request),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CandidateSuggestionsResponseFromJSON(jsonValue));
    }

    /**
     * suggestCandidates
     * suggestCandidates
     */
    async suggestCandidatesUsingPOST(requestParameters: RoutingApiSuggestCandidatesUsingPOSTRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CandidateSuggestionsResponse> {
        const response = await this.suggestCandidatesUsingPOSTRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * suggestRoutingTest
     * suggestRoutingTest
     */


    async suggestRoutingTestUsingPOSTRaw(requestParameters: RoutingApiSuggestRoutingTestUsingPOSTRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuggestionResponse>> {
        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling suggestRoutingTestUsingPOST.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling suggestRoutingTestUsingPOST.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling suggestRoutingTestUsingPOST.');
        }

        const queryParameters: any = {};

        if (requestParameters.returnSuggestionLog !== undefined) {
            queryParameters['returnSuggestionLog'] = requestParameters.returnSuggestionLog;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }


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
            path: `/commerce/orderrouting/api/v1/routing/suggestionTest`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SuggestionTestRequestToJSON(requestParameters.request),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuggestionResponseFromJSON(jsonValue));
    }

    /**
     * suggestRoutingTest
     * suggestRoutingTest
     */
    async suggestRoutingTestUsingPOST(requestParameters: RoutingApiSuggestRoutingTestUsingPOSTRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuggestionResponse> {
        const response = await this.suggestRoutingTestUsingPOSTRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * suggestRouting
     * suggestRouting
     */


    async suggestRoutingUsingPOSTRaw(requestParameters: RoutingApiSuggestRoutingUsingPOSTRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuggestionResponse>> {
        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling suggestRoutingUsingPOST.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling suggestRoutingUsingPOST.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling suggestRoutingUsingPOST.');
        }

        const queryParameters: any = {};

        if (requestParameters.returnSuggestionLog !== undefined) {
            queryParameters['returnSuggestionLog'] = requestParameters.returnSuggestionLog;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }


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
            path: `/commerce/orderrouting/api/v1/routing/suggestion`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SuggestionRequestToJSON(requestParameters.request),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuggestionResponseFromJSON(jsonValue));
    }

    /**
     * suggestRouting
     * suggestRouting
     */
    async suggestRoutingUsingPOST(requestParameters: RoutingApiSuggestRoutingUsingPOSTRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuggestionResponse> {
        const response = await this.suggestRoutingUsingPOSTRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
