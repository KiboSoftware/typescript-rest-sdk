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
  EntityModelWorkflowProcessDto,
  ErrorItem,
  GetProcessesRequest,
  PagedModelEntityModelWorkflowProcessDto,
  RemoveSpecificShipmentFromConsolidationGroup400Response,
} from '../models';


export namespace fulfillmentWorkflowApiParams { 
    export interface GetDefinitionImageRequest {
        containerIdOrAlias: string;
        processId: string;
    }
    export interface GetWorkflowProcessRequest {
        containerIdOrAlias: string;
        processId: string;
    }
    export interface GetWorkflowProcessByShipmentTypeRequest {
        shipmentType: string;
    }
    export interface GetWorkflowProcessByShipmentTypeLocationCodeRequest {
        shipmentType: string;
        locationCode: string;
    }
    export interface GetWorkflowProcessByShipmentTypeLocationGroupCodeRequest {
        shipmentType: string;
        locationGroupCode: string;
    }
    export interface GetWorkflowProcessesRequest {
        request: GetProcessesRequest;
    }
}
/**
* FulfillmentWorkflowApiService - interface
* 
* @export
* @interface FulfillmentWorkflowApi
*/
export interface FulfillmentWorkflowApiService {
    /**
    * Get Definition Image
    * @summary Get Definition Image
    * @param {string} containerIdOrAlias 
    * @param {string} processId 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof FulfillmentWorkflowApiInterface
    */
    getDefinitionImageRaw(requestParameters: fulfillmentWorkflowApiParams.GetDefinitionImageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>>;

    /**
    * Get Definition Image
    * Get Definition Image
    */
    getDefinitionImage(requestParameters: fulfillmentWorkflowApiParams.GetDefinitionImageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string>;

    /**
    * Get Workflow Process
    * @summary Get Workflow Process
    * @param {string} containerIdOrAlias 
    * @param {string} processId 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof FulfillmentWorkflowApiInterface
    */
    getWorkflowProcessRaw(requestParameters: fulfillmentWorkflowApiParams.GetWorkflowProcessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelWorkflowProcessDto>>;

    /**
    * Get Workflow Process
    * Get Workflow Process
    */
    getWorkflowProcess(requestParameters: fulfillmentWorkflowApiParams.GetWorkflowProcessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelWorkflowProcessDto>;

    /**
    * Get Workflow Process by Shipment Type
    * @summary Get Workflow Process by Shipment Type
    * @param {string} shipmentType 
    * @param {*} [options] Override http request option.
    * @deprecated
    * @throws {RequiredError}
    * @memberof FulfillmentWorkflowApiInterface
    */
    getWorkflowProcessByShipmentTypeRaw(requestParameters: fulfillmentWorkflowApiParams.GetWorkflowProcessByShipmentTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelWorkflowProcessDto>>;

    /**
    * Get Workflow Process by Shipment Type
    * Get Workflow Process by Shipment Type
    */
    getWorkflowProcessByShipmentType(requestParameters: fulfillmentWorkflowApiParams.GetWorkflowProcessByShipmentTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelWorkflowProcessDto>;

    /**
    * Get Workflow Process by Shipment Type and Location Code
    * @summary Get Workflow Process by Shipment Type and Location Code
    * @param {string} shipmentType 
    * @param {string} locationCode 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof FulfillmentWorkflowApiInterface
    */
    getWorkflowProcessByShipmentTypeLocationCodeRaw(requestParameters: fulfillmentWorkflowApiParams.GetWorkflowProcessByShipmentTypeLocationCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelWorkflowProcessDto>>;

    /**
    * Get Workflow Process by Shipment Type and Location Code
    * Get Workflow Process by Shipment Type and Location Code
    */
    getWorkflowProcessByShipmentTypeLocationCode(requestParameters: fulfillmentWorkflowApiParams.GetWorkflowProcessByShipmentTypeLocationCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelWorkflowProcessDto>;

    /**
    * Get Workflow Process by Shipment Type and Location Group Code
    * @summary Get Workflow Process by Shipment Type and Location Group Code
    * @param {string} shipmentType 
    * @param {string} locationGroupCode 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof FulfillmentWorkflowApiInterface
    */
    getWorkflowProcessByShipmentTypeLocationGroupCodeRaw(requestParameters: fulfillmentWorkflowApiParams.GetWorkflowProcessByShipmentTypeLocationGroupCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelWorkflowProcessDto>>;

    /**
    * Get Workflow Process by Shipment Type and Location Group Code
    * Get Workflow Process by Shipment Type and Location Group Code
    */
    getWorkflowProcessByShipmentTypeLocationGroupCode(requestParameters: fulfillmentWorkflowApiParams.GetWorkflowProcessByShipmentTypeLocationGroupCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelWorkflowProcessDto>;

    /**
    * Get Workflow Processes
    * @summary Get Workflow Processes
    * @param {GetProcessesRequest} request 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof FulfillmentWorkflowApiInterface
    */
    getWorkflowProcessesRaw(requestParameters: fulfillmentWorkflowApiParams.GetWorkflowProcessesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PagedModelEntityModelWorkflowProcessDto>>;

    /**
    * Get Workflow Processes
    * Get Workflow Processes
    */
    getWorkflowProcesses(requestParameters: fulfillmentWorkflowApiParams.GetWorkflowProcessesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PagedModelEntityModelWorkflowProcessDto>;

}


/**
 * 
 */
export class FulfillmentWorkflowApi extends runtime.BaseAPI implements FulfillmentWorkflowApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Get Definition Image
     * Get Definition Image
     */


    async getDefinitionImageRaw(requestParameters: fulfillmentWorkflowApiParams.GetDefinitionImageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.containerIdOrAlias === null || requestParameters.containerIdOrAlias === undefined) {
            throw new runtime.RequiredError('containerIdOrAlias','Required parameter requestParameters.containerIdOrAlias was null or undefined when calling getDefinitionImage.');
        }

        if (requestParameters.processId === null || requestParameters.processId === undefined) {
            throw new runtime.RequiredError('processId','Required parameter requestParameters.processId was null or undefined when calling getDefinitionImage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/processes/definitionImage/{containerIdOrAlias}/{processId}`.replace(`{${"containerIdOrAlias"}}`, encodeURIComponent(String(requestParameters.containerIdOrAlias))).replace(`{${"processId"}}`, encodeURIComponent(String(requestParameters.processId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Get Definition Image
     * Get Definition Image
     */
    async getDefinitionImage(requestParameters: fulfillmentWorkflowApiParams.GetDefinitionImageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.getDefinitionImageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Workflow Process
     * Get Workflow Process
     */


    async getWorkflowProcessRaw(requestParameters: fulfillmentWorkflowApiParams.GetWorkflowProcessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelWorkflowProcessDto>> {
        if (requestParameters.containerIdOrAlias === null || requestParameters.containerIdOrAlias === undefined) {
            throw new runtime.RequiredError('containerIdOrAlias','Required parameter requestParameters.containerIdOrAlias was null or undefined when calling getWorkflowProcess.');
        }

        if (requestParameters.processId === null || requestParameters.processId === undefined) {
            throw new runtime.RequiredError('processId','Required parameter requestParameters.processId was null or undefined when calling getWorkflowProcess.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/processes/definitions/{containerIdOrAlias}/{processId}`.replace(`{${"containerIdOrAlias"}}`, encodeURIComponent(String(requestParameters.containerIdOrAlias))).replace(`{${"processId"}}`, encodeURIComponent(String(requestParameters.processId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get Workflow Process
     * Get Workflow Process
     */
    async getWorkflowProcess(requestParameters: fulfillmentWorkflowApiParams.GetWorkflowProcessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelWorkflowProcessDto> {
        const response = await this.getWorkflowProcessRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Workflow Process by Shipment Type
     * Get Workflow Process by Shipment Type
     */


    async getWorkflowProcessByShipmentTypeRaw(requestParameters: fulfillmentWorkflowApiParams.GetWorkflowProcessByShipmentTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelWorkflowProcessDto>> {
        if (requestParameters.shipmentType === null || requestParameters.shipmentType === undefined) {
            throw new runtime.RequiredError('shipmentType','Required parameter requestParameters.shipmentType was null or undefined when calling getWorkflowProcessByShipmentType.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/processes/shipmentType/{shipmentType}`.replace(`{${"shipmentType"}}`, encodeURIComponent(String(requestParameters.shipmentType))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get Workflow Process by Shipment Type
     * Get Workflow Process by Shipment Type
     */
    async getWorkflowProcessByShipmentType(requestParameters: fulfillmentWorkflowApiParams.GetWorkflowProcessByShipmentTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelWorkflowProcessDto> {
        const response = await this.getWorkflowProcessByShipmentTypeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Workflow Process by Shipment Type and Location Code
     * Get Workflow Process by Shipment Type and Location Code
     */


    async getWorkflowProcessByShipmentTypeLocationCodeRaw(requestParameters: fulfillmentWorkflowApiParams.GetWorkflowProcessByShipmentTypeLocationCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelWorkflowProcessDto>> {
        if (requestParameters.shipmentType === null || requestParameters.shipmentType === undefined) {
            throw new runtime.RequiredError('shipmentType','Required parameter requestParameters.shipmentType was null or undefined when calling getWorkflowProcessByShipmentTypeLocationCode.');
        }

        if (requestParameters.locationCode === null || requestParameters.locationCode === undefined) {
            throw new runtime.RequiredError('locationCode','Required parameter requestParameters.locationCode was null or undefined when calling getWorkflowProcessByShipmentTypeLocationCode.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/processes/shipmentType/{shipmentType}/location/{locationCode}`.replace(`{${"shipmentType"}}`, encodeURIComponent(String(requestParameters.shipmentType))).replace(`{${"locationCode"}}`, encodeURIComponent(String(requestParameters.locationCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get Workflow Process by Shipment Type and Location Code
     * Get Workflow Process by Shipment Type and Location Code
     */
    async getWorkflowProcessByShipmentTypeLocationCode(requestParameters: fulfillmentWorkflowApiParams.GetWorkflowProcessByShipmentTypeLocationCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelWorkflowProcessDto> {
        const response = await this.getWorkflowProcessByShipmentTypeLocationCodeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Workflow Process by Shipment Type and Location Group Code
     * Get Workflow Process by Shipment Type and Location Group Code
     */


    async getWorkflowProcessByShipmentTypeLocationGroupCodeRaw(requestParameters: fulfillmentWorkflowApiParams.GetWorkflowProcessByShipmentTypeLocationGroupCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelWorkflowProcessDto>> {
        if (requestParameters.shipmentType === null || requestParameters.shipmentType === undefined) {
            throw new runtime.RequiredError('shipmentType','Required parameter requestParameters.shipmentType was null or undefined when calling getWorkflowProcessByShipmentTypeLocationGroupCode.');
        }

        if (requestParameters.locationGroupCode === null || requestParameters.locationGroupCode === undefined) {
            throw new runtime.RequiredError('locationGroupCode','Required parameter requestParameters.locationGroupCode was null or undefined when calling getWorkflowProcessByShipmentTypeLocationGroupCode.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/processes/shipmentType/{shipmentType}/locationGroup/{locationGroupCode}`.replace(`{${"shipmentType"}}`, encodeURIComponent(String(requestParameters.shipmentType))).replace(`{${"locationGroupCode"}}`, encodeURIComponent(String(requestParameters.locationGroupCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get Workflow Process by Shipment Type and Location Group Code
     * Get Workflow Process by Shipment Type and Location Group Code
     */
    async getWorkflowProcessByShipmentTypeLocationGroupCode(requestParameters: fulfillmentWorkflowApiParams.GetWorkflowProcessByShipmentTypeLocationGroupCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelWorkflowProcessDto> {
        const response = await this.getWorkflowProcessByShipmentTypeLocationGroupCodeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Workflow Processes
     * Get Workflow Processes
     */


    async getWorkflowProcessesRaw(requestParameters: fulfillmentWorkflowApiParams.GetWorkflowProcessesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PagedModelEntityModelWorkflowProcessDto>> {
        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling getWorkflowProcesses.');
        }

        const queryParameters: any = {};

        if (requestParameters.request !== undefined) {
            queryParameters['request'] = requestParameters.request;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/processes/definitions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get Workflow Processes
     * Get Workflow Processes
     */
    async getWorkflowProcesses(requestParameters: fulfillmentWorkflowApiParams.GetWorkflowProcessesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PagedModelEntityModelWorkflowProcessDto> {
        const response = await this.getWorkflowProcessesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
