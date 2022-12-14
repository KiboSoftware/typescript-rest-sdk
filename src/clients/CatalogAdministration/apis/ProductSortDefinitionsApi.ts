/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Admin Services
 * OpenAPI Spec for Kibo Catalog Admin Services
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
  ProductSortDefinition,
  ProductSortDefinitionPagedCollection,
} from '../models';
import {
    ProductSortDefinitionFromJSON,
    ProductSortDefinitionToJSON,
    ProductSortDefinitionPagedCollectionFromJSON,
    ProductSortDefinitionPagedCollectionToJSON,
} from '../models';

export interface ProductSortDefinitionsApiAddProductSortDefinitionRequest {
    useProvidedId?: boolean;
    productSortDefinition?: ProductSortDefinition;
}

export interface ProductSortDefinitionsApiDeleteProductSortDefinitionRequest {
    productSortDefinitionId: number;
}

export interface ProductSortDefinitionsApiGetProductSortDefinitionRequest {
    productSortDefinitionId: number;
}

export interface ProductSortDefinitionsApiGetProductSortDefinitionsRequest {
    startIndex?: number;
    pageSize?: number;
    sortBy?: string;
    filter?: string;
}

export interface ProductSortDefinitionsApiUpdateProductSortDefinitionRequest {
    productSortDefinitionId: number;
    productSortDefinition?: ProductSortDefinition;
}

/**
 * 
 */
export class ProductSortDefinitionsApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Adds a new product sort definition.
     * Add product sort definition
     */


    async addProductSortDefinitionRaw(requestParameters: ProductSortDefinitionsApiAddProductSortDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductSortDefinition>> {
        const queryParameters: any = {};

        if (requestParameters.useProvidedId !== undefined) {
            queryParameters['useProvidedId'] = requestParameters.useProvidedId;
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
            path: `/commerce/catalog/admin/productsortdefinitions`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ProductSortDefinitionToJSON(requestParameters.productSortDefinition),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductSortDefinitionFromJSON(jsonValue));
    }

    /**
     * Adds a new product sort definition.
     * Add product sort definition
     */
    async addProductSortDefinition(requestParameters: ProductSortDefinitionsApiAddProductSortDefinitionRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductSortDefinition> {
        const response = await this.addProductSortDefinitionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes the product sort definition specified by its ProductSortDefinitionID.
     * Delete product sort definition
     */


    async deleteProductSortDefinitionRaw(requestParameters: ProductSortDefinitionsApiDeleteProductSortDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.productSortDefinitionId === null || requestParameters.productSortDefinitionId === undefined) {
            throw new runtime.RequiredError('productSortDefinitionId','Required parameter requestParameters.productSortDefinitionId was null or undefined when calling deleteProductSortDefinition.');
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
            path: `/commerce/catalog/admin/productsortdefinitions/{productSortDefinitionId}`.replace(`{${"productSortDefinitionId"}}`, encodeURIComponent(String(requestParameters.productSortDefinitionId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes the product sort definition specified by its ProductSortDefinitionID.
     * Delete product sort definition
     */
    async deleteProductSortDefinition(requestParameters: ProductSortDefinitionsApiDeleteProductSortDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteProductSortDefinitionRaw(requestParameters, initOverrides);
    }

    /**
     * Gets a single product sort definition.
     * Get product sort definition
     */


    async getProductSortDefinitionRaw(requestParameters: ProductSortDefinitionsApiGetProductSortDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductSortDefinition>> {
        if (requestParameters.productSortDefinitionId === null || requestParameters.productSortDefinitionId === undefined) {
            throw new runtime.RequiredError('productSortDefinitionId','Required parameter requestParameters.productSortDefinitionId was null or undefined when calling getProductSortDefinition.');
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
            path: `/commerce/catalog/admin/productsortdefinitions/{productSortDefinitionId}`.replace(`{${"productSortDefinitionId"}}`, encodeURIComponent(String(requestParameters.productSortDefinitionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductSortDefinitionFromJSON(jsonValue));
    }

    /**
     * Gets a single product sort definition.
     * Get product sort definition
     */
    async getProductSortDefinition(requestParameters: ProductSortDefinitionsApiGetProductSortDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductSortDefinition> {
        const response = await this.getProductSortDefinitionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a list of product sort definitions according to any specified filter criteria and sort options.
     * Get product sort definitions
     */


    async getProductSortDefinitionsRaw(requestParameters: ProductSortDefinitionsApiGetProductSortDefinitionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductSortDefinitionPagedCollection>> {
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
            path: `/commerce/catalog/admin/productsortdefinitions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductSortDefinitionPagedCollectionFromJSON(jsonValue));
    }

    /**
     * Retrieves a list of product sort definitions according to any specified filter criteria and sort options.
     * Get product sort definitions
     */
    async getProductSortDefinitions(requestParameters: ProductSortDefinitionsApiGetProductSortDefinitionsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductSortDefinitionPagedCollection> {
        const response = await this.getProductSortDefinitionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates the details of a product sort definition.
     * Update product sort definition
     */


    async updateProductSortDefinitionRaw(requestParameters: ProductSortDefinitionsApiUpdateProductSortDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductSortDefinition>> {
        if (requestParameters.productSortDefinitionId === null || requestParameters.productSortDefinitionId === undefined) {
            throw new runtime.RequiredError('productSortDefinitionId','Required parameter requestParameters.productSortDefinitionId was null or undefined when calling updateProductSortDefinition.');
        }

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
            path: `/commerce/catalog/admin/productsortdefinitions/{productSortDefinitionId}`.replace(`{${"productSortDefinitionId"}}`, encodeURIComponent(String(requestParameters.productSortDefinitionId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ProductSortDefinitionToJSON(requestParameters.productSortDefinition),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductSortDefinitionFromJSON(jsonValue));
    }

    /**
     * Updates the details of a product sort definition.
     * Update product sort definition
     */
    async updateProductSortDefinition(requestParameters: ProductSortDefinitionsApiUpdateProductSortDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductSortDefinition> {
        const response = await this.updateProductSortDefinitionRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
