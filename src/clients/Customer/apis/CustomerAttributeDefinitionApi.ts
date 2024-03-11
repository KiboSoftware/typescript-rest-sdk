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
  CommerceRuntimeAttribute,
  CommerceRuntimeAttributeCollection,
  CommerceRuntimeAttributeVocabularyValue,
} from '../models';

export interface CustomerAttributeDefinitionApiCreateAttributeRequest {
    responseFields?: string;
    commerceRuntimeAttribute?: CommerceRuntimeAttribute;
}

export interface CustomerAttributeDefinitionApiGetAttributeRequest {
    attributeFQN: string;
    responseGroups?: string;
    responseFields?: string;
}

export interface CustomerAttributeDefinitionApiGetAttributeVocabularyValuesRequest {
    attributeFQN: string;
    responseGroups?: string;
    responseFields?: string;
}

export interface CustomerAttributeDefinitionApiGetAttributesRequest {
    startIndex?: number;
    pageSize?: number;
    sortBy?: string;
    responseGroups?: string;
    filter?: string;
    responseFields?: string;
}

export interface CustomerAttributeDefinitionApiUpdateAttributeRequest {
    attributeFQN: string;
    responseFields?: string;
    commerceRuntimeAttribute?: CommerceRuntimeAttribute;
}

/**
 * CustomerAttributeDefinitionApi - interface
 * 
 * @export
 * @interface CustomerAttributeDefinitionApiInterface
 */
export interface CustomerAttributeDefinitionApiInterface {
    /**
     * Create Attribute
     * @summary Create Attribute
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {CommerceRuntimeAttribute} [commerceRuntimeAttribute] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerAttributeDefinitionApiInterface
     */
    createAttributeRaw(requestParameters: CustomerAttributeDefinitionApiCreateAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CommerceRuntimeAttribute>>;

    /**
     * Create Attribute
     * Create Attribute
     */
    createAttribute(requestParameters: CustomerAttributeDefinitionApiCreateAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CommerceRuntimeAttribute>;

    /**
     * Get Attribute
     * @summary Get Attribute
     * @param {string} attributeFQN 
     * @param {string} [responseGroups] 
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerAttributeDefinitionApiInterface
     */
    getAttributeRaw(requestParameters: CustomerAttributeDefinitionApiGetAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CommerceRuntimeAttribute>>;

    /**
     * Get Attribute
     * Get Attribute
     */
    getAttribute(requestParameters: CustomerAttributeDefinitionApiGetAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CommerceRuntimeAttribute>;

    /**
     * Get Attribute Vocabulary Values
     * @summary Get Attribute Vocabulary Values
     * @param {string} attributeFQN 
     * @param {string} [responseGroups] 
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerAttributeDefinitionApiInterface
     */
    getAttributeVocabularyValuesRaw(requestParameters: CustomerAttributeDefinitionApiGetAttributeVocabularyValuesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CommerceRuntimeAttributeVocabularyValue>>>;

    /**
     * Get Attribute Vocabulary Values
     * Get Attribute Vocabulary Values
     */
    getAttributeVocabularyValues(requestParameters: CustomerAttributeDefinitionApiGetAttributeVocabularyValuesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CommerceRuntimeAttributeVocabularyValue>>;

    /**
     * Get Attributes
     * @summary Get Attributes
     * @param {number} [startIndex] 
     * @param {number} [pageSize] 
     * @param {string} [sortBy] 
     * @param {string} [responseGroups] 
     * @param {string} [filter] 
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerAttributeDefinitionApiInterface
     */
    getAttributesRaw(requestParameters: CustomerAttributeDefinitionApiGetAttributesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CommerceRuntimeAttributeCollection>>;

    /**
     * Get Attributes
     * Get Attributes
     */
    getAttributes(requestParameters: CustomerAttributeDefinitionApiGetAttributesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CommerceRuntimeAttributeCollection>;

    /**
     * Update Attribute
     * @summary Update Attribute
     * @param {string} attributeFQN 
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {CommerceRuntimeAttribute} [commerceRuntimeAttribute] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerAttributeDefinitionApiInterface
     */
    updateAttributeRaw(requestParameters: CustomerAttributeDefinitionApiUpdateAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CommerceRuntimeAttribute>>;

    /**
     * Update Attribute
     * Update Attribute
     */
    updateAttribute(requestParameters: CustomerAttributeDefinitionApiUpdateAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CommerceRuntimeAttribute>;

}

/**
 * 
 */
export class CustomerAttributeDefinitionApi extends runtime.BaseAPI implements CustomerAttributeDefinitionApiInterface {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Create Attribute
     * Create Attribute
     */


    async createAttributeRaw(requestParameters: CustomerAttributeDefinitionApiCreateAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CommerceRuntimeAttribute>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/customer/attributedefinition/attributes`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.commerceRuntimeAttribute,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Create Attribute
     * Create Attribute
     */
    async createAttribute(requestParameters: CustomerAttributeDefinitionApiCreateAttributeRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CommerceRuntimeAttribute> {
        const response = await this.createAttributeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Attribute
     * Get Attribute
     */


    async getAttributeRaw(requestParameters: CustomerAttributeDefinitionApiGetAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CommerceRuntimeAttribute>> {
        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling getAttribute.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseGroups !== undefined) {
            queryParameters['responseGroups'] = requestParameters.responseGroups;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/customer/attributedefinition/attributes/{attributeFQN}`.replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get Attribute
     * Get Attribute
     */
    async getAttribute(requestParameters: CustomerAttributeDefinitionApiGetAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CommerceRuntimeAttribute> {
        const response = await this.getAttributeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Attribute Vocabulary Values
     * Get Attribute Vocabulary Values
     */


    async getAttributeVocabularyValuesRaw(requestParameters: CustomerAttributeDefinitionApiGetAttributeVocabularyValuesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CommerceRuntimeAttributeVocabularyValue>>> {
        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling getAttributeVocabularyValues.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseGroups !== undefined) {
            queryParameters['responseGroups'] = requestParameters.responseGroups;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/customer/attributedefinition/attributes/{attributeFQN}/VocabularyValues`.replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get Attribute Vocabulary Values
     * Get Attribute Vocabulary Values
     */
    async getAttributeVocabularyValues(requestParameters: CustomerAttributeDefinitionApiGetAttributeVocabularyValuesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CommerceRuntimeAttributeVocabularyValue>> {
        const response = await this.getAttributeVocabularyValuesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Attributes
     * Get Attributes
     */


    async getAttributesRaw(requestParameters: CustomerAttributeDefinitionApiGetAttributesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CommerceRuntimeAttributeCollection>> {
        const queryParameters: any = {};

        if (requestParameters.startIndex !== undefined) {
            queryParameters['startIndex'] = requestParameters.startIndex;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.sortBy !== undefined) {
            queryParameters['sortBy'] = requestParameters.sortBy;
        }

        if (requestParameters.responseGroups !== undefined) {
            queryParameters['responseGroups'] = requestParameters.responseGroups;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/customer/attributedefinition/attributes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get Attributes
     * Get Attributes
     */
    async getAttributes(requestParameters: CustomerAttributeDefinitionApiGetAttributesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CommerceRuntimeAttributeCollection> {
        const response = await this.getAttributesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Attribute
     * Update Attribute
     */


    async updateAttributeRaw(requestParameters: CustomerAttributeDefinitionApiUpdateAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CommerceRuntimeAttribute>> {
        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling updateAttribute.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/customer/attributedefinition/attributes/{attributeFQN}`.replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.commerceRuntimeAttribute,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update Attribute
     * Update Attribute
     */
    async updateAttribute(requestParameters: CustomerAttributeDefinitionApiUpdateAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CommerceRuntimeAttribute> {
        const response = await this.updateAttributeRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
