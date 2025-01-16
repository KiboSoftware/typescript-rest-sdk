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
  EntityModelRenderedContentDto,
  ErrorItem,
  RemoveSpecificShipmentFromConsolidationGroup400Response,
} from '../models';


export namespace renditionApiParams { 
    export interface RenderOrderSummary1Request {
        orderId: string;
    }
    export interface RenderReturnReceiptRequest {
        returnId: string;
    }
}
/**
* RenditionApiService - interface
* 
* @export
* @interface RenditionApi
*/
export interface RenditionApiService {
    /**
    * Render order summary in HTML format for printing
    * @summary Render Order Summary
    * @param {string} orderId 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof RenditionApiInterface
    */
    renderOrderSummary1Raw(requestParameters: renditionApiParams.RenderOrderSummary1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelRenderedContentDto>>;

    /**
    * Render order summary in HTML format for printing
    * Render Order Summary
    */
    renderOrderSummary1(requestParameters: renditionApiParams.RenderOrderSummary1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelRenderedContentDto>;

    /**
    * Render return receipt in HTML format for printing
    * @summary Render Return Receipt
    * @param {string} returnId 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof RenditionApiInterface
    */
    renderReturnReceiptRaw(requestParameters: renditionApiParams.RenderReturnReceiptRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelRenderedContentDto>>;

    /**
    * Render return receipt in HTML format for printing
    * Render Return Receipt
    */
    renderReturnReceipt(requestParameters: renditionApiParams.RenderReturnReceiptRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelRenderedContentDto>;

}


/**
 * 
 */
export class RenditionApi extends runtime.BaseAPI implements RenditionApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Render order summary in HTML format for printing
     * Render Order Summary
     */


    async renderOrderSummary1Raw(requestParameters: renditionApiParams.RenderOrderSummary1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelRenderedContentDto>> {
        if (requestParameters.orderId === null || requestParameters.orderId === undefined) {
            throw new runtime.RequiredError('orderId','Required parameter requestParameters.orderId was null or undefined when calling renderOrderSummary1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/fulfillment/orders/{orderId}/summary/html`.replace(`{${"orderId"}}`, encodeURIComponent(String(requestParameters.orderId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Render order summary in HTML format for printing
     * Render Order Summary
     */
    async renderOrderSummary1(requestParameters: renditionApiParams.RenderOrderSummary1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelRenderedContentDto> {
        const response = await this.renderOrderSummary1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Render return receipt in HTML format for printing
     * Render Return Receipt
     */


    async renderReturnReceiptRaw(requestParameters: renditionApiParams.RenderReturnReceiptRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelRenderedContentDto>> {
        if (requestParameters.returnId === null || requestParameters.returnId === undefined) {
            throw new runtime.RequiredError('returnId','Required parameter requestParameters.returnId was null or undefined when calling renderReturnReceipt.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/fulfillment/returns/{returnId}/receipt/html`.replace(`{${"returnId"}}`, encodeURIComponent(String(requestParameters.returnId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Render return receipt in HTML format for printing
     * Render Return Receipt
     */
    async renderReturnReceipt(requestParameters: renditionApiParams.RenderReturnReceiptRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelRenderedContentDto> {
        const response = await this.renderReturnReceiptRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
