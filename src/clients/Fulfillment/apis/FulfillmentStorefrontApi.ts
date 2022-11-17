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
  EntityModelOfShipment,
  PagedModelOfEntityModelOfShipment,
} from '../models';
import {
    EntityModelOfShipmentFromJSON,
    EntityModelOfShipmentToJSON,
    PagedModelOfEntityModelOfShipmentFromJSON,
    PagedModelOfEntityModelOfShipmentToJSON,
} from '../models';

export interface FulfillmentStorefrontApiGetShipmentUsingGET1Request {
    shipmentNumber: number;
}

export interface FulfillmentStorefrontApiGetShipmentsUsingGET1Request {
    bypassSearchIndex?: boolean;
    filter?: string;
    isLate?: boolean;
    page?: number;
    pageSize?: number;
    quickSearch?: string;
    sort?: string;
    workflowTaskName?: string;
}

/**
 * 
 */
export class FulfillmentStorefrontApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Get shipment information. Note that the schema supports both assignedLocationCode and fulfillmentLocationCode fields at the shipment level. These fields are usually the same, except when assignedLocationCode becomes the receiving location code after a transfer shipment is shipped.
     * Get Shipment
     */


    async getShipmentUsingGET1Raw(requestParameters: FulfillmentStorefrontApiGetShipmentUsingGET1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfShipment>> {
        if (requestParameters.shipmentNumber === null || requestParameters.shipmentNumber === undefined) {
            throw new runtime.RequiredError('shipmentNumber','Required parameter requestParameters.shipmentNumber was null or undefined when calling getShipmentUsingGET1.');
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
            path: `/commerce/fulfillment/storefront/shipments/{shipmentNumber}`.replace(`{${"shipmentNumber"}}`, encodeURIComponent(String(requestParameters.shipmentNumber))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntityModelOfShipmentFromJSON(jsonValue));
    }

    /**
     * Get shipment information. Note that the schema supports both assignedLocationCode and fulfillmentLocationCode fields at the shipment level. These fields are usually the same, except when assignedLocationCode becomes the receiving location code after a transfer shipment is shipped.
     * Get Shipment
     */
    async getShipmentUsingGET1(requestParameters: FulfillmentStorefrontApiGetShipmentUsingGET1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfShipment> {
        const response = await this.getShipmentUsingGET1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Shipments
     * Get Shipments
     */


    async getShipmentsUsingGET1Raw(requestParameters: FulfillmentStorefrontApiGetShipmentsUsingGET1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PagedModelOfEntityModelOfShipment>> {
        const queryParameters: any = {};

        if (requestParameters.bypassSearchIndex !== undefined) {
            queryParameters['bypassSearchIndex'] = requestParameters.bypassSearchIndex;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.isLate !== undefined) {
            queryParameters['isLate'] = requestParameters.isLate;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.quickSearch !== undefined) {
            queryParameters['quickSearch'] = requestParameters.quickSearch;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.workflowTaskName !== undefined) {
            queryParameters['workflowTaskName'] = requestParameters.workflowTaskName;
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
            path: `/commerce/fulfillment/storefront/shipments`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PagedModelOfEntityModelOfShipmentFromJSON(jsonValue));
    }

    /**
     * Get Shipments
     * Get Shipments
     */
    async getShipmentsUsingGET1(requestParameters: FulfillmentStorefrontApiGetShipmentsUsingGET1Request = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PagedModelOfEntityModelOfShipment> {
        const response = await this.getShipmentsUsingGET1Raw(requestParameters, initOverrides);
        return await response.value();
    }

}
