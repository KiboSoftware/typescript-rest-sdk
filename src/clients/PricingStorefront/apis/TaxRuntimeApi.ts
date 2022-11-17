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
  OrderTaxContext,
  TaxableOrder,
} from '../models';
import {
    OrderTaxContextFromJSON,
    OrderTaxContextToJSON,
    TaxableOrderFromJSON,
    TaxableOrderToJSON,
} from '../models';

export interface TaxRuntimeApiEstimateTaxesRequest {
    taxableOrder?: TaxableOrder;
}

/**
 * 
 */
export class TaxRuntimeApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Estimate Taxes
     * Estimate Taxes
     */


    async estimateTaxesRaw(requestParameters: TaxRuntimeApiEstimateTaxesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OrderTaxContext>> {
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
            path: `/commerce/catalog/storefront/tax/estimate-order`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TaxableOrderToJSON(requestParameters.taxableOrder),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OrderTaxContextFromJSON(jsonValue));
    }

    /**
     * Estimate Taxes
     * Estimate Taxes
     */
    async estimateTaxes(requestParameters: TaxRuntimeApiEstimateTaxesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OrderTaxContext> {
        const response = await this.estimateTaxesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}