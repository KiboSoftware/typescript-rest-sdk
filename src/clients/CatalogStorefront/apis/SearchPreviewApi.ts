/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Runtime Services
 * OpenAPI Spec for Kibo Catalog Runtime Services
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
  FindProductsPreviewParameters,
  ProductSearchPreviewResult,
} from '../models';
import {
    FindProductsPreviewParametersFromJSON,
    FindProductsPreviewParametersToJSON,
    ProductSearchPreviewResultFromJSON,
    ProductSearchPreviewResultToJSON,
} from '../models';

export interface SearchPreviewApiSearchPreviewAsyncRequest {
    findProductsPreviewParameters?: FindProductsPreviewParameters;
}

export interface SearchPreviewApiSiteSearchPreviewAsyncRequest {
    findProductsPreviewParameters?: FindProductsPreviewParameters;
}

/**
 * 
 */
export class SearchPreviewApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Though this endpoint only returns data, the decision has been made to make it a POST because the request body will be larger than what a url length can contain.
     * Search preview
     */


    async searchPreviewAsyncRaw(requestParameters: SearchPreviewApiSearchPreviewAsyncRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductSearchPreviewResult>> {
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
            path: `/commerce/catalog/storefront/productsearch/preview`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: FindProductsPreviewParametersToJSON(requestParameters.findProductsPreviewParameters),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductSearchPreviewResultFromJSON(jsonValue));
    }

    /**
     * Though this endpoint only returns data, the decision has been made to make it a POST because the request body will be larger than what a url length can contain.
     * Search preview
     */
    async searchPreviewAsync(requestParameters: SearchPreviewApiSearchPreviewAsyncRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductSearchPreviewResult> {
        const response = await this.searchPreviewAsyncRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Though this endpoint only returns data, the decision has been made to make it a POST because the request body will be larger than what a url length can contain.
     * Site search preview
     */


    async siteSearchPreviewAsyncRaw(requestParameters: SearchPreviewApiSiteSearchPreviewAsyncRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductSearchPreviewResult>> {
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
            path: `/commerce/catalog/storefront/productsearch/sitesearchpreview`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: FindProductsPreviewParametersToJSON(requestParameters.findProductsPreviewParameters),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductSearchPreviewResultFromJSON(jsonValue));
    }

    /**
     * Though this endpoint only returns data, the decision has been made to make it a POST because the request body will be larger than what a url length can contain.
     * Site search preview
     */
    async siteSearchPreviewAsync(requestParameters: SearchPreviewApiSiteSearchPreviewAsyncRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductSearchPreviewResult> {
        const response = await this.siteSearchPreviewAsyncRaw(requestParameters, initOverrides);
        return await response.value();
    }

}