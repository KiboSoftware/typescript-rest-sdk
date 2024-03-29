/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Shipping Admin Service
 * OpenAPI Spec for Kibo Shipping Admin Service
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
  CarrierDefinition,
} from '../models';


export namespace carrierDefinitionApiParams { 
    export interface GetCarrierDefinitionRequest {
        carrierId: string;
        responseFields?: string;
    }
    export interface GetCarrierDefinitionsRequest {
        responseFields?: string;
    }
}
/**
* CarrierDefinitionApiService - interface
* 
* @export
* @interface CarrierDefinitionApi
*/
export interface CarrierDefinitionApiService {
    /**
    * hippingAdmin.Contracts.Carriers.CarrierDefinition for the specified carrier.
    * @summary Returns a Mozu
    * @param {string} carrierId The carrier ID.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CarrierDefinitionApiInterface
    */
    getCarrierDefinitionRaw(requestParameters: carrierDefinitionApiParams.GetCarrierDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CarrierDefinition>>;

    /**
    * hippingAdmin.Contracts.Carriers.CarrierDefinition for the specified carrier.
    * Returns a Mozu
    */
    getCarrierDefinition(requestParameters: carrierDefinitionApiParams.GetCarrierDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CarrierDefinition>;

    /**
    * hippingAdmin.Contracts.Carriers.CarrierDefinitions for the specified tenant.
    * @summary Returns a list of Mozu
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CarrierDefinitionApiInterface
    */
    getCarrierDefinitionsRaw(requestParameters: carrierDefinitionApiParams.GetCarrierDefinitionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CarrierDefinition>>>;

    /**
    * hippingAdmin.Contracts.Carriers.CarrierDefinitions for the specified tenant.
    * Returns a list of Mozu
    */
    getCarrierDefinitions(requestParameters: carrierDefinitionApiParams.GetCarrierDefinitionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CarrierDefinition>>;

}


/**
 * 
 */
export class CarrierDefinitionApi extends runtime.BaseAPI implements CarrierDefinitionApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * hippingAdmin.Contracts.Carriers.CarrierDefinition for the specified carrier.
     * Returns a Mozu
     */


    async getCarrierDefinitionRaw(requestParameters: carrierDefinitionApiParams.GetCarrierDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CarrierDefinition>> {
        if (requestParameters.carrierId === null || requestParameters.carrierId === undefined) {
            throw new runtime.RequiredError('carrierId','Required parameter requestParameters.carrierId was null or undefined when calling getCarrierDefinition.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/shipping/admin/carriers/definitions/{carrierId}`.replace(`{${"carrierId"}}`, encodeURIComponent(String(requestParameters.carrierId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * hippingAdmin.Contracts.Carriers.CarrierDefinition for the specified carrier.
     * Returns a Mozu
     */
    async getCarrierDefinition(requestParameters: carrierDefinitionApiParams.GetCarrierDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CarrierDefinition> {
        const response = await this.getCarrierDefinitionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * hippingAdmin.Contracts.Carriers.CarrierDefinitions for the specified tenant.
     * Returns a list of Mozu
     */


    async getCarrierDefinitionsRaw(requestParameters: carrierDefinitionApiParams.GetCarrierDefinitionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CarrierDefinition>>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/shipping/admin/carriers/definitions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * hippingAdmin.Contracts.Carriers.CarrierDefinitions for the specified tenant.
     * Returns a list of Mozu
     */
    async getCarrierDefinitions(requestParameters: carrierDefinitionApiParams.GetCarrierDefinitionsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CarrierDefinition>> {
        const response = await this.getCarrierDefinitionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
