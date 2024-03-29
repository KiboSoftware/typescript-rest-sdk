/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Fulfillment API - Production Profile
 * REST API backing the Kibo Fulfiller User Interface
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


export namespace shipmentResendEmailApiParams { 
    export interface ResendShipmentCancelEmailRequest {
        shipmentNumber: number;
    }
    export interface ResendShipmentFulfillEmailRequest {
        shipmentNumber: number;
    }
}
/**
* ShipmentResendEmailApiService - interface
* 
* @export
* @interface ShipmentResendEmailApi
*/
export interface ShipmentResendEmailApiService {
    /**
    * resendShipmentCancelEmail
    * @summary resendShipmentCancelEmail
    * @param {number} shipmentNumber shipmentNumber
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ShipmentResendEmailApiInterface
    */
    resendShipmentCancelEmailRaw(requestParameters: shipmentResendEmailApiParams.ResendShipmentCancelEmailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * resendShipmentCancelEmail
    * resendShipmentCancelEmail
    */
    resendShipmentCancelEmail(requestParameters: shipmentResendEmailApiParams.ResendShipmentCancelEmailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * resendShipmentFulfillEmail
    * @summary resendShipmentFulfillEmail
    * @param {number} shipmentNumber shipmentNumber
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ShipmentResendEmailApiInterface
    */
    resendShipmentFulfillEmailRaw(requestParameters: shipmentResendEmailApiParams.ResendShipmentFulfillEmailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * resendShipmentFulfillEmail
    * resendShipmentFulfillEmail
    */
    resendShipmentFulfillEmail(requestParameters: shipmentResendEmailApiParams.ResendShipmentFulfillEmailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

}


/**
 * 
 */
export class ShipmentResendEmailApi extends runtime.BaseAPI implements ShipmentResendEmailApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * resendShipmentCancelEmail
     * resendShipmentCancelEmail
     */


    async resendShipmentCancelEmailRaw(requestParameters: shipmentResendEmailApiParams.ResendShipmentCancelEmailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.shipmentNumber === null || requestParameters.shipmentNumber === undefined) {
            throw new runtime.RequiredError('shipmentNumber','Required parameter requestParameters.shipmentNumber was null or undefined when calling resendShipmentCancelEmail.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/shipments/{shipmentNumber}/resendCanceledEmail`.replace(`{${"shipmentNumber"}}`, encodeURIComponent(String(requestParameters.shipmentNumber))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * resendShipmentCancelEmail
     * resendShipmentCancelEmail
     */
    async resendShipmentCancelEmail(requestParameters: shipmentResendEmailApiParams.ResendShipmentCancelEmailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.resendShipmentCancelEmailRaw(requestParameters, initOverrides);
    }

    /**
     * resendShipmentFulfillEmail
     * resendShipmentFulfillEmail
     */


    async resendShipmentFulfillEmailRaw(requestParameters: shipmentResendEmailApiParams.ResendShipmentFulfillEmailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.shipmentNumber === null || requestParameters.shipmentNumber === undefined) {
            throw new runtime.RequiredError('shipmentNumber','Required parameter requestParameters.shipmentNumber was null or undefined when calling resendShipmentFulfillEmail.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/shipments/{shipmentNumber}/resendFulfilledEmail`.replace(`{${"shipmentNumber"}}`, encodeURIComponent(String(requestParameters.shipmentNumber))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * resendShipmentFulfillEmail
     * resendShipmentFulfillEmail
     */
    async resendShipmentFulfillEmail(requestParameters: shipmentResendEmailApiParams.ResendShipmentFulfillEmailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.resendShipmentFulfillEmailRaw(requestParameters, initOverrides);
    }

}
