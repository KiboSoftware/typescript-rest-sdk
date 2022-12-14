/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Fulfillment Service
 * OpenAPI Spec for Kibo Fulfillment Service
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
  EntityModelOfWorkflowProcess,
  PagedModelOfEntityModelOfWorkflowProcess,
} from '../models';
import {
    EntityModelOfWorkflowProcessFromJSON,
    EntityModelOfWorkflowProcessToJSON,
    PagedModelOfEntityModelOfWorkflowProcessFromJSON,
    PagedModelOfEntityModelOfWorkflowProcessToJSON,
} from '../models';

export interface FulfillmentWorkflowApiGetDefinitionImageUsingGETRequest {
    containerIdOrAlias: string;
    processId: string;
}

export interface FulfillmentWorkflowApiGetWorkflowProcessByShipmentTypeLocationCodeUsingGETRequest {
    shipmentType: string;
    locationCode: string;
}

export interface FulfillmentWorkflowApiGetWorkflowProcessByShipmentTypeLocationGroupCodeUsingGETRequest {
    shipmentType: string;
    locationGroupCode: string;
}

export interface FulfillmentWorkflowApiGetWorkflowProcessByShipmentTypeUsingGETRequest {
    shipmentType: string;
}

export interface FulfillmentWorkflowApiGetWorkflowProcessUsingGETRequest {
    containerIdOrAlias: string;
    processId: string;
}

export interface FulfillmentWorkflowApiGetWorkflowProcessesUsingGETRequest {
    page?: number;
    pageSize?: number;
    sort?: string;
}

/**
 * 
 */
export class FulfillmentWorkflowApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Get Definition Image
     * Get Definition Image
     */


    async getDefinitionImageUsingGETRaw(requestParameters: FulfillmentWorkflowApiGetDefinitionImageUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.containerIdOrAlias === null || requestParameters.containerIdOrAlias === undefined) {
            throw new runtime.RequiredError('containerIdOrAlias','Required parameter requestParameters.containerIdOrAlias was null or undefined when calling getDefinitionImageUsingGET.');
        }

        if (requestParameters.processId === null || requestParameters.processId === undefined) {
            throw new runtime.RequiredError('processId','Required parameter requestParameters.processId was null or undefined when calling getDefinitionImageUsingGET.');
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
    async getDefinitionImageUsingGET(requestParameters: FulfillmentWorkflowApiGetDefinitionImageUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.getDefinitionImageUsingGETRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Workflow Process by Shipment Type and Location Code
     * Get Workflow Process by Shipment Type and Location Code
     */


    async getWorkflowProcessByShipmentTypeLocationCodeUsingGETRaw(requestParameters: FulfillmentWorkflowApiGetWorkflowProcessByShipmentTypeLocationCodeUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfWorkflowProcess>> {
        if (requestParameters.shipmentType === null || requestParameters.shipmentType === undefined) {
            throw new runtime.RequiredError('shipmentType','Required parameter requestParameters.shipmentType was null or undefined when calling getWorkflowProcessByShipmentTypeLocationCodeUsingGET.');
        }

        if (requestParameters.locationCode === null || requestParameters.locationCode === undefined) {
            throw new runtime.RequiredError('locationCode','Required parameter requestParameters.locationCode was null or undefined when calling getWorkflowProcessByShipmentTypeLocationCodeUsingGET.');
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
            path: `/commerce/processes/shipmentType/{shipmentType}/location/{locationCode}`.replace(`{${"shipmentType"}}`, encodeURIComponent(String(requestParameters.shipmentType))).replace(`{${"locationCode"}}`, encodeURIComponent(String(requestParameters.locationCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntityModelOfWorkflowProcessFromJSON(jsonValue));
    }

    /**
     * Get Workflow Process by Shipment Type and Location Code
     * Get Workflow Process by Shipment Type and Location Code
     */
    async getWorkflowProcessByShipmentTypeLocationCodeUsingGET(requestParameters: FulfillmentWorkflowApiGetWorkflowProcessByShipmentTypeLocationCodeUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfWorkflowProcess> {
        const response = await this.getWorkflowProcessByShipmentTypeLocationCodeUsingGETRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Workflow Process by Shipment Type and Location Group Code
     * Get Workflow Process by Shipment Type and Location Group Code
     */


    async getWorkflowProcessByShipmentTypeLocationGroupCodeUsingGETRaw(requestParameters: FulfillmentWorkflowApiGetWorkflowProcessByShipmentTypeLocationGroupCodeUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfWorkflowProcess>> {
        if (requestParameters.shipmentType === null || requestParameters.shipmentType === undefined) {
            throw new runtime.RequiredError('shipmentType','Required parameter requestParameters.shipmentType was null or undefined when calling getWorkflowProcessByShipmentTypeLocationGroupCodeUsingGET.');
        }

        if (requestParameters.locationGroupCode === null || requestParameters.locationGroupCode === undefined) {
            throw new runtime.RequiredError('locationGroupCode','Required parameter requestParameters.locationGroupCode was null or undefined when calling getWorkflowProcessByShipmentTypeLocationGroupCodeUsingGET.');
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
            path: `/commerce/processes/shipmentType/{shipmentType}/locationGroup/{locationGroupCode}`.replace(`{${"shipmentType"}}`, encodeURIComponent(String(requestParameters.shipmentType))).replace(`{${"locationGroupCode"}}`, encodeURIComponent(String(requestParameters.locationGroupCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntityModelOfWorkflowProcessFromJSON(jsonValue));
    }

    /**
     * Get Workflow Process by Shipment Type and Location Group Code
     * Get Workflow Process by Shipment Type and Location Group Code
     */
    async getWorkflowProcessByShipmentTypeLocationGroupCodeUsingGET(requestParameters: FulfillmentWorkflowApiGetWorkflowProcessByShipmentTypeLocationGroupCodeUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfWorkflowProcess> {
        const response = await this.getWorkflowProcessByShipmentTypeLocationGroupCodeUsingGETRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Workflow Process by Shipment Type
     * Get Workflow Process by Shipment Type
     */


    async getWorkflowProcessByShipmentTypeUsingGETRaw(requestParameters: FulfillmentWorkflowApiGetWorkflowProcessByShipmentTypeUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfWorkflowProcess>> {
        if (requestParameters.shipmentType === null || requestParameters.shipmentType === undefined) {
            throw new runtime.RequiredError('shipmentType','Required parameter requestParameters.shipmentType was null or undefined when calling getWorkflowProcessByShipmentTypeUsingGET.');
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
            path: `/commerce/processes/shipmentType/{shipmentType}`.replace(`{${"shipmentType"}}`, encodeURIComponent(String(requestParameters.shipmentType))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntityModelOfWorkflowProcessFromJSON(jsonValue));
    }

    /**
     * Get Workflow Process by Shipment Type
     * Get Workflow Process by Shipment Type
     */
    async getWorkflowProcessByShipmentTypeUsingGET(requestParameters: FulfillmentWorkflowApiGetWorkflowProcessByShipmentTypeUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfWorkflowProcess> {
        const response = await this.getWorkflowProcessByShipmentTypeUsingGETRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Workflow Process
     * Get Workflow Process
     */


    async getWorkflowProcessUsingGETRaw(requestParameters: FulfillmentWorkflowApiGetWorkflowProcessUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfWorkflowProcess>> {
        if (requestParameters.containerIdOrAlias === null || requestParameters.containerIdOrAlias === undefined) {
            throw new runtime.RequiredError('containerIdOrAlias','Required parameter requestParameters.containerIdOrAlias was null or undefined when calling getWorkflowProcessUsingGET.');
        }

        if (requestParameters.processId === null || requestParameters.processId === undefined) {
            throw new runtime.RequiredError('processId','Required parameter requestParameters.processId was null or undefined when calling getWorkflowProcessUsingGET.');
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
            path: `/commerce/processes/definitions/{containerIdOrAlias}/{processId}`.replace(`{${"containerIdOrAlias"}}`, encodeURIComponent(String(requestParameters.containerIdOrAlias))).replace(`{${"processId"}}`, encodeURIComponent(String(requestParameters.processId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntityModelOfWorkflowProcessFromJSON(jsonValue));
    }

    /**
     * Get Workflow Process
     * Get Workflow Process
     */
    async getWorkflowProcessUsingGET(requestParameters: FulfillmentWorkflowApiGetWorkflowProcessUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfWorkflowProcess> {
        const response = await this.getWorkflowProcessUsingGETRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Workflow Processes
     * Get Workflow Processes
     */


    async getWorkflowProcessesUsingGETRaw(requestParameters: FulfillmentWorkflowApiGetWorkflowProcessesUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PagedModelOfEntityModelOfWorkflowProcess>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
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
            path: `/commerce/processes/definitions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PagedModelOfEntityModelOfWorkflowProcessFromJSON(jsonValue));
    }

    /**
     * Get Workflow Processes
     * Get Workflow Processes
     */
    async getWorkflowProcessesUsingGET(requestParameters: FulfillmentWorkflowApiGetWorkflowProcessesUsingGETRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PagedModelOfEntityModelOfWorkflowProcess> {
        const response = await this.getWorkflowProcessesUsingGETRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
