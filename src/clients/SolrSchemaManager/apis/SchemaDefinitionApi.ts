/* tslint:disable */
/* eslint-disable */
/**
 * Kibo ProductRuntime Service
 * OpenAPI Spec for Kibo ProductRuntime Service
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
  SchemaDefinition,
} from '../models';
import {
    SchemaDefinitionFromJSON,
    SchemaDefinitionToJSON,
} from '../models';

export interface SchemaDefinitionApiGetSchemaDefinitionRequest {
    language: string;
    published?: boolean;
}

export interface SchemaDefinitionApiPublishRequest {
    language: string;
    reindex?: boolean;
}

export interface SchemaDefinitionApiRevertRequest {
    language: string;
}

export interface SchemaDefinitionApiUpdateSchemaDefinitionRequest {
    language: string;
    schemaDefinition?: SchemaDefinition;
}

/**
 * 
 */
export class SchemaDefinitionApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Get Schema Definition
     * Get Schema Definition
     */


    async getSchemaDefinitionRaw(requestParameters: SchemaDefinitionApiGetSchemaDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SchemaDefinition>> {
        if (requestParameters.language === null || requestParameters.language === undefined) {
            throw new runtime.RequiredError('language','Required parameter requestParameters.language was null or undefined when calling getSchemaDefinition.');
        }

        const queryParameters: any = {};

        if (requestParameters.published !== undefined) {
            queryParameters['published'] = requestParameters.published;
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
            path: `/commerce/catalog/admin/searchSchema/definition/{language}`.replace(`{${"language"}}`, encodeURIComponent(String(requestParameters.language))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SchemaDefinitionFromJSON(jsonValue));
    }

    /**
     * Get Schema Definition
     * Get Schema Definition
     */
    async getSchemaDefinition(requestParameters: SchemaDefinitionApiGetSchemaDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SchemaDefinition> {
        const response = await this.getSchemaDefinitionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List Schema Definitions
     * List Schema Definitions
     */


    async listSchemaDefinitionsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<SchemaDefinition>>> {
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
            path: `/commerce/catalog/admin/searchSchema/definition`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SchemaDefinitionFromJSON));
    }

    /**
     * List Schema Definitions
     * List Schema Definitions
     */
    async listSchemaDefinitions(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<SchemaDefinition>> {
        const response = await this.listSchemaDefinitionsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Publish
     * Publish
     */


    async publishRaw(requestParameters: SchemaDefinitionApiPublishRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>> {
        if (requestParameters.language === null || requestParameters.language === undefined) {
            throw new runtime.RequiredError('language','Required parameter requestParameters.language was null or undefined when calling publish.');
        }

        const queryParameters: any = {};

        if (requestParameters.reindex !== undefined) {
            queryParameters['reindex'] = requestParameters.reindex;
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
            path: `/commerce/catalog/admin/searchSchema/definition/{language}/publish`.replace(`{${"language"}}`, encodeURIComponent(String(requestParameters.language))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Publish
     * Publish
     */
    async publish(requestParameters: SchemaDefinitionApiPublishRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean> {
        const response = await this.publishRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Revert
     * Revert
     */


    async revertRaw(requestParameters: SchemaDefinitionApiRevertRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>> {
        if (requestParameters.language === null || requestParameters.language === undefined) {
            throw new runtime.RequiredError('language','Required parameter requestParameters.language was null or undefined when calling revert.');
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
            path: `/commerce/catalog/admin/searchSchema/definition/{language}/revert`.replace(`{${"language"}}`, encodeURIComponent(String(requestParameters.language))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Revert
     * Revert
     */
    async revert(requestParameters: SchemaDefinitionApiRevertRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean> {
        const response = await this.revertRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Schema Definition
     * Update Schema Definition
     */


    async updateSchemaDefinitionRaw(requestParameters: SchemaDefinitionApiUpdateSchemaDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SchemaDefinition>> {
        if (requestParameters.language === null || requestParameters.language === undefined) {
            throw new runtime.RequiredError('language','Required parameter requestParameters.language was null or undefined when calling updateSchemaDefinition.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'text/plain';





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
            path: `/commerce/catalog/admin/searchSchema/definition/{language}`.replace(`{${"language"}}`, encodeURIComponent(String(requestParameters.language))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: SchemaDefinitionToJSON(requestParameters.schemaDefinition),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SchemaDefinitionFromJSON(jsonValue));
    }

    /**
     * Update Schema Definition
     * Update Schema Definition
     */
    async updateSchemaDefinition(requestParameters: SchemaDefinitionApiUpdateSchemaDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SchemaDefinition> {
        const response = await this.updateSchemaDefinitionRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
