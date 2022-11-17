/* tslint:disable */
/* eslint-disable */
/**
 * Kibo PricingRuntime Service
 * OpenAPI Spec for Kibo PricingRuntime Service
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
  AutoAddDiscountTarget,
} from '../models';
import {
    AutoAddDiscountTargetFromJSON,
    AutoAddDiscountTargetToJSON,
} from '../models';

export interface DiscountRuntimeApiGetAutoAddTargetRequest {
    discountId: number;
}

/**
 * 
 */
export class DiscountRuntimeApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Get Auto Add Target
     * Get Auto Add Target
     */


    async getAutoAddTargetRaw(requestParameters: DiscountRuntimeApiGetAutoAddTargetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AutoAddDiscountTarget>> {
        if (requestParameters.discountId === null || requestParameters.discountId === undefined) {
            throw new runtime.RequiredError('discountId','Required parameter requestParameters.discountId was null or undefined when calling getAutoAddTarget.');
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
            path: `/commerce/catalog/storefront/discounts/autoaddtarget/{discountId}`.replace(`{${"discountId"}}`, encodeURIComponent(String(requestParameters.discountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AutoAddDiscountTargetFromJSON(jsonValue));
    }

    /**
     * Get Auto Add Target
     * Get Auto Add Target
     */
    async getAutoAddTarget(requestParameters: DiscountRuntimeApiGetAutoAddTargetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AutoAddDiscountTarget> {
        const response = await this.getAutoAddTargetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
