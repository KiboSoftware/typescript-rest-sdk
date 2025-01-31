/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Fulfillment Service
 * OpenAPI Spec for Kibo Fulfillment Service
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
  CollectionModelSubstitutableItemResponseDto,
  EntityModelShipmentDto,
  ErrorItem,
  GetSubstitutableItemsRequest,
  RemoveSpecificShipmentFromConsolidationGroup400Response,
  SubstituteItemsRequestDto,
} from '../models';


export namespace substitutionsApiParams { 
    export interface AddSubstituteItemsRequest {
        shipmentNumber: number;
        substituteItemsRequestDto: SubstituteItemsRequestDto;
        ifMatch?: string;
    }
    export interface GetSubstituteItemsRequest {
        shipmentNumber: number;
        request: GetSubstitutableItemsRequest;
    }
    export interface RemoveSubstituteItemsRequest {
        shipmentNumber: number;
        substituteItemsRequestDto: SubstituteItemsRequestDto;
        ifMatch?: string;
    }
}
/**
* SubstitutionsApiService - interface
* 
* @export
* @interface SubstitutionsApi
*/
export interface SubstitutionsApiService {
    /**
    * Add Substitute Items to Shipment
    * @summary Add Substitute Items to Shipment
    * @param {number} shipmentNumber 
    * @param {SubstituteItemsRequestDto} substituteItemsRequestDto 
    * @param {string} [ifMatch] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SubstitutionsApiInterface
    */
    addSubstituteItemsRaw(requestParameters: substitutionsApiParams.AddSubstituteItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelShipmentDto>>;

    /**
    * Add Substitute Items to Shipment
    * Add Substitute Items to Shipment
    */
    addSubstituteItems(requestParameters: substitutionsApiParams.AddSubstituteItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelShipmentDto>;

    /**
    * Get Substitutable Items for Shipment
    * @summary Get Substitutable Items for Shipment
    * @param {number} shipmentNumber 
    * @param {GetSubstitutableItemsRequest} request 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SubstitutionsApiInterface
    */
    getSubstituteItemsRaw(requestParameters: substitutionsApiParams.GetSubstituteItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionModelSubstitutableItemResponseDto>>;

    /**
    * Get Substitutable Items for Shipment
    * Get Substitutable Items for Shipment
    */
    getSubstituteItems(requestParameters: substitutionsApiParams.GetSubstituteItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionModelSubstitutableItemResponseDto>;

    /**
    * Remove Substitute Items from Shipment
    * @summary Remove Substitute Items from Shipment
    * @param {number} shipmentNumber 
    * @param {SubstituteItemsRequestDto} substituteItemsRequestDto 
    * @param {string} [ifMatch] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SubstitutionsApiInterface
    */
    removeSubstituteItemsRaw(requestParameters: substitutionsApiParams.RemoveSubstituteItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelShipmentDto>>;

    /**
    * Remove Substitute Items from Shipment
    * Remove Substitute Items from Shipment
    */
    removeSubstituteItems(requestParameters: substitutionsApiParams.RemoveSubstituteItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelShipmentDto>;

}


/**
 * 
 */
export class SubstitutionsApi extends runtime.BaseAPI implements SubstitutionsApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Add Substitute Items to Shipment
     * Add Substitute Items to Shipment
     */


    async addSubstituteItemsRaw(requestParameters: substitutionsApiParams.AddSubstituteItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelShipmentDto>> {
        if (requestParameters.shipmentNumber === null || requestParameters.shipmentNumber === undefined) {
            throw new runtime.RequiredError('shipmentNumber','Required parameter requestParameters.shipmentNumber was null or undefined when calling addSubstituteItems.');
        }

        if (requestParameters.substituteItemsRequestDto === null || requestParameters.substituteItemsRequestDto === undefined) {
            throw new runtime.RequiredError('substituteItemsRequestDto','Required parameter requestParameters.substituteItemsRequestDto was null or undefined when calling addSubstituteItems.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.ifMatch !== undefined && requestParameters.ifMatch !== null) {
            headerParameters['If-Match'] = String(requestParameters.ifMatch);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/shipments/{shipmentNumber}/substituteItems`.replace(`{${"shipmentNumber"}}`, encodeURIComponent(String(requestParameters.shipmentNumber))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.substituteItemsRequestDto,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Add Substitute Items to Shipment
     * Add Substitute Items to Shipment
     */
    async addSubstituteItems(requestParameters: substitutionsApiParams.AddSubstituteItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelShipmentDto> {
        const response = await this.addSubstituteItemsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Substitutable Items for Shipment
     * Get Substitutable Items for Shipment
     */


    async getSubstituteItemsRaw(requestParameters: substitutionsApiParams.GetSubstituteItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionModelSubstitutableItemResponseDto>> {
        if (requestParameters.shipmentNumber === null || requestParameters.shipmentNumber === undefined) {
            throw new runtime.RequiredError('shipmentNumber','Required parameter requestParameters.shipmentNumber was null or undefined when calling getSubstituteItems.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling getSubstituteItems.');
        }

        const queryParameters: any = {};

        if (requestParameters.request !== undefined) {
            queryParameters['request'] = requestParameters.request;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/shipments/{shipmentNumber}/substituteItems`.replace(`{${"shipmentNumber"}}`, encodeURIComponent(String(requestParameters.shipmentNumber))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get Substitutable Items for Shipment
     * Get Substitutable Items for Shipment
     */
    async getSubstituteItems(requestParameters: substitutionsApiParams.GetSubstituteItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionModelSubstitutableItemResponseDto> {
        const response = await this.getSubstituteItemsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Remove Substitute Items from Shipment
     * Remove Substitute Items from Shipment
     */


    async removeSubstituteItemsRaw(requestParameters: substitutionsApiParams.RemoveSubstituteItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelShipmentDto>> {
        if (requestParameters.shipmentNumber === null || requestParameters.shipmentNumber === undefined) {
            throw new runtime.RequiredError('shipmentNumber','Required parameter requestParameters.shipmentNumber was null or undefined when calling removeSubstituteItems.');
        }

        if (requestParameters.substituteItemsRequestDto === null || requestParameters.substituteItemsRequestDto === undefined) {
            throw new runtime.RequiredError('substituteItemsRequestDto','Required parameter requestParameters.substituteItemsRequestDto was null or undefined when calling removeSubstituteItems.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.ifMatch !== undefined && requestParameters.ifMatch !== null) {
            headerParameters['If-Match'] = String(requestParameters.ifMatch);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/shipments/{shipmentNumber}/substituteItems/remove`.replace(`{${"shipmentNumber"}}`, encodeURIComponent(String(requestParameters.shipmentNumber))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.substituteItemsRequestDto,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Remove Substitute Items from Shipment
     * Remove Substitute Items from Shipment
     */
    async removeSubstituteItems(requestParameters: substitutionsApiParams.RemoveSubstituteItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelShipmentDto> {
        const response = await this.removeSubstituteItemsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
