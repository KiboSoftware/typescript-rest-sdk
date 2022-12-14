/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Content Service
 * OpenAPI Spec for Kibo Content Service
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
  AddOrDeletePublishItem,
  DocumentDraftSummaryPagedCollection,
  PublishSetSummaryPagedCollection,
} from '../models';
import {
    AddOrDeletePublishItemFromJSON,
    AddOrDeletePublishItemToJSON,
    DocumentDraftSummaryPagedCollectionFromJSON,
    DocumentDraftSummaryPagedCollectionToJSON,
    PublishSetSummaryPagedCollectionFromJSON,
    PublishSetSummaryPagedCollectionToJSON,
} from '../models';

export interface DocumentPublishSetApiAddPublishSetItemsRequest {
    code: string;
    addOrDeletePublishItem?: Array<AddOrDeletePublishItem>;
}

export interface DocumentPublishSetApiDeletePublishSetRequest {
    code: string;
    shouldDiscard?: boolean;
}

export interface DocumentPublishSetApiGetPublishSetItemsRequest {
    code: string;
    pageSize?: number;
    startIndex?: number;
    sortBy?: string;
    filter?: string;
}

export interface DocumentPublishSetApiGetPublishSetsRequest {
    pageSize?: number;
    startIndex?: number;
}

/**
 * 
 */
export class DocumentPublishSetApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Adds a set of documents by id to a publish set.
     * Add Publish Set Items
     */


    async addPublishSetItemsRaw(requestParameters: DocumentPublishSetApiAddPublishSetItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling addPublishSetItems.');
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
            path: `/content/publishsets/{code}/items`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.addOrDeletePublishItem.map(AddOrDeletePublishItemToJSON),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Adds a set of documents by id to a publish set.
     * Add Publish Set Items
     */
    async addPublishSetItems(requestParameters: DocumentPublishSetApiAddPublishSetItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.addPublishSetItemsRaw(requestParameters, initOverrides);
    }

    /**
     * Adds a set of documents by id to a publish set.
     * Delete Publish Set
     */


    async deletePublishSetRaw(requestParameters: DocumentPublishSetApiDeletePublishSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling deletePublishSet.');
        }

        const queryParameters: any = {};

        if (requestParameters.shouldDiscard !== undefined) {
            queryParameters['shouldDiscard'] = requestParameters.shouldDiscard;
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
            path: `/content/publishsets/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Adds a set of documents by id to a publish set.
     * Delete Publish Set
     */
    async deletePublishSet(requestParameters: DocumentPublishSetApiDeletePublishSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePublishSetRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieve a paged collection of publish set Items.
     * Get Publish Set Items
     */


    async getPublishSetItemsRaw(requestParameters: DocumentPublishSetApiGetPublishSetItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DocumentDraftSummaryPagedCollection>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling getPublishSetItems.');
        }

        const queryParameters: any = {};

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.startIndex !== undefined) {
            queryParameters['startIndex'] = requestParameters.startIndex;
        }

        if (requestParameters.sortBy !== undefined) {
            queryParameters['sortBy'] = requestParameters.sortBy;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
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
            path: `/content/publishsets/{code}/items`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DocumentDraftSummaryPagedCollectionFromJSON(jsonValue));
    }

    /**
     * Retrieve a paged collection of publish set Items.
     * Get Publish Set Items
     */
    async getPublishSetItems(requestParameters: DocumentPublishSetApiGetPublishSetItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DocumentDraftSummaryPagedCollection> {
        const response = await this.getPublishSetItemsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a List of current Publishing sets with counts of drafts in each.
     * Get Publish Set
     */


    async getPublishSetsRaw(requestParameters: DocumentPublishSetApiGetPublishSetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PublishSetSummaryPagedCollection>> {
        const queryParameters: any = {};

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.startIndex !== undefined) {
            queryParameters['startIndex'] = requestParameters.startIndex;
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
            path: `/content/publishsets`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PublishSetSummaryPagedCollectionFromJSON(jsonValue));
    }

    /**
     * Returns a List of current Publishing sets with counts of drafts in each.
     * Get Publish Set
     */
    async getPublishSets(requestParameters: DocumentPublishSetApiGetPublishSetsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PublishSetSummaryPagedCollection> {
        const response = await this.getPublishSetsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
