/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Tenant Service
 * OpenAPI Spec for Kibo Tenant Service
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
  Tenant,
} from '../models';
import {
    TenantFromJSON,
    TenantToJSON,
} from '../models';

export interface TenantsApiGetTenantRequest {
    tenantId: number;
}

/**
 * 
 */
export class TenantsApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Get Tenant by ID
     * Get Tenant by ID
     */


    async getTenantRaw(requestParameters: TenantsApiGetTenantRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Tenant>> {
        if (requestParameters.tenantId === null || requestParameters.tenantId === undefined) {
            throw new runtime.RequiredError('tenantId','Required parameter requestParameters.tenantId was null or undefined when calling getTenant.');
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
            path: `/platform/tenants/{tenantId}`.replace(`{${"tenantId"}}`, encodeURIComponent(String(requestParameters.tenantId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TenantFromJSON(jsonValue));
    }

    /**
     * Get Tenant by ID
     * Get Tenant by ID
     */
    async getTenant(requestParameters: TenantsApiGetTenantRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Tenant> {
        const response = await this.getTenantRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
