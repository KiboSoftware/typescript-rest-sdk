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
  CollectionModelOfManifest,
  CollectionModelOfShipment,
  EntityModelOfManifest,
  ManifestRequest,
} from '../models';
import {
    CollectionModelOfManifestFromJSON,
    CollectionModelOfManifestToJSON,
    CollectionModelOfShipmentFromJSON,
    CollectionModelOfShipmentToJSON,
    EntityModelOfManifestFromJSON,
    EntityModelOfManifestToJSON,
    ManifestRequestFromJSON,
    ManifestRequestToJSON,
} from '../models';

export interface ShippingManifestApiCreateManifestUsingPOSTRequest {
    manifestRequest?: ManifestRequest;
}

export interface ShippingManifestApiGetEligibleShipmentsUsingGETRequest {
    fulfillmentLocationCode: string;
    carrier: string;
    fromDays?: number;
}

export interface ShippingManifestApiGetManifestUsingGETRequest {
    manifestId: string;
}

export interface ShippingManifestApiGetManifestsUsingGETRequest {
    fulfillmentLocationCode: string;
    fromDays?: number;
}

/**
 * 
 */
export class ShippingManifestApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Create Manifest
     * Create Manifest
     */


    async createManifestUsingPOSTRaw(requestParameters: ShippingManifestApiCreateManifestUsingPOSTRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfManifest>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';


        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/fulfillment/shipping/manifests`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ManifestRequestToJSON(requestParameters.manifestRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntityModelOfManifestFromJSON(jsonValue));
    }

    /**
     * Create Manifest
     * Create Manifest
     */
    async createManifestUsingPOST(requestParameters: ShippingManifestApiCreateManifestUsingPOSTRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfManifest> {
        const response = await this.createManifestUsingPOSTRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Eligible Shipments
     * Get Eligible Shipments
     */


    async getEligibleShipmentsUsingGETRaw(requestParameters: ShippingManifestApiGetEligibleShipmentsUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionModelOfShipment>> {
        if (requestParameters.fulfillmentLocationCode === null || requestParameters.fulfillmentLocationCode === undefined) {
            throw new runtime.RequiredError('fulfillmentLocationCode','Required parameter requestParameters.fulfillmentLocationCode was null or undefined when calling getEligibleShipmentsUsingGET.');
        }

        if (requestParameters.carrier === null || requestParameters.carrier === undefined) {
            throw new runtime.RequiredError('carrier','Required parameter requestParameters.carrier was null or undefined when calling getEligibleShipmentsUsingGET.');
        }

        const queryParameters: any = {};

        if (requestParameters.fulfillmentLocationCode !== undefined) {
            queryParameters['fulfillmentLocationCode'] = requestParameters.fulfillmentLocationCode;
        }

        if (requestParameters.carrier !== undefined) {
            queryParameters['carrier'] = requestParameters.carrier;
        }

        if (requestParameters.fromDays !== undefined) {
            queryParameters['fromDays'] = requestParameters.fromDays;
        }

        const headerParameters: runtime.HTTPHeaders = {};


        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/fulfillment/shipping/manifests/eligibleShipments`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionModelOfShipmentFromJSON(jsonValue));
    }

    /**
     * Get Eligible Shipments
     * Get Eligible Shipments
     */
    async getEligibleShipmentsUsingGET(requestParameters: ShippingManifestApiGetEligibleShipmentsUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionModelOfShipment> {
        const response = await this.getEligibleShipmentsUsingGETRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Manifest
     * Get Manifest
     */


    async getManifestUsingGETRaw(requestParameters: ShippingManifestApiGetManifestUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfManifest>> {
        if (requestParameters.manifestId === null || requestParameters.manifestId === undefined) {
            throw new runtime.RequiredError('manifestId','Required parameter requestParameters.manifestId was null or undefined when calling getManifestUsingGET.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/fulfillment/shipping/manifests/{manifestId}`.replace(`{${"manifestId"}}`, encodeURIComponent(String(requestParameters.manifestId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntityModelOfManifestFromJSON(jsonValue));
    }

    /**
     * Get Manifest
     * Get Manifest
     */
    async getManifestUsingGET(requestParameters: ShippingManifestApiGetManifestUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfManifest> {
        const response = await this.getManifestUsingGETRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Manifests
     * Get Manifests
     */


    async getManifestsUsingGETRaw(requestParameters: ShippingManifestApiGetManifestsUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionModelOfManifest>> {
        if (requestParameters.fulfillmentLocationCode === null || requestParameters.fulfillmentLocationCode === undefined) {
            throw new runtime.RequiredError('fulfillmentLocationCode','Required parameter requestParameters.fulfillmentLocationCode was null or undefined when calling getManifestsUsingGET.');
        }

        const queryParameters: any = {};

        if (requestParameters.fulfillmentLocationCode !== undefined) {
            queryParameters['fulfillmentLocationCode'] = requestParameters.fulfillmentLocationCode;
        }

        if (requestParameters.fromDays !== undefined) {
            queryParameters['fromDays'] = requestParameters.fromDays;
        }

        const headerParameters: runtime.HTTPHeaders = {};


        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/fulfillment/shipping/manifests`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionModelOfManifestFromJSON(jsonValue));
    }

    /**
     * Get Manifests
     * Get Manifests
     */
    async getManifestsUsingGET(requestParameters: ShippingManifestApiGetManifestsUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionModelOfManifest> {
        const response = await this.getManifestsUsingGETRaw(requestParameters, initOverrides);
        return await response.value();
    }

}