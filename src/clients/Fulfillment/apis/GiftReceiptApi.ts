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
import type {
  CollectionModelOfShipment,
  EntityModelOfShipment,
  ItemGiftReceiptRequest,
  ShipmentGiftReceiptRequest,
} from '../models';


export namespace giftReceiptApiParams { 
    export interface ItemGiftReceiptUpdateRequest {
        shipmentNumber: number;
        itemGiftReceiptRequestDto: ItemGiftReceiptRequest;
    }
    export interface ShipmentGiftReceiptUpdateRequest {
        orderId: string;
        shipmentGiftReceiptRequestDto: ShipmentGiftReceiptRequest;
    }
}
/**
* GiftReceiptApiService - interface
* 
* @export
* @interface GiftReceiptApi
*/
export interface GiftReceiptApiService {
    /**
    * itemGiftReceiptUpdate
    * @summary itemGiftReceiptUpdate
    * @param {number} shipmentNumber shipmentNumber
    * @param {ItemGiftReceiptRequest} itemGiftReceiptRequestDto itemGiftReceiptRequestDto
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof GiftReceiptApiInterface
    */
    itemGiftReceiptUpdateRaw(requestParameters: giftReceiptApiParams.ItemGiftReceiptUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfShipment>>;

    /**
    * itemGiftReceiptUpdate
    * itemGiftReceiptUpdate
    */
    itemGiftReceiptUpdate(requestParameters: giftReceiptApiParams.ItemGiftReceiptUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfShipment>;

    /**
    * shipmentGiftReceiptUpdate
    * @summary shipmentGiftReceiptUpdate
    * @param {string} orderId orderId
    * @param {ShipmentGiftReceiptRequest} shipmentGiftReceiptRequestDto shipmentGiftReceiptRequestDto
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof GiftReceiptApiInterface
    */
    shipmentGiftReceiptUpdateRaw(requestParameters: giftReceiptApiParams.ShipmentGiftReceiptUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionModelOfShipment>>;

    /**
    * shipmentGiftReceiptUpdate
    * shipmentGiftReceiptUpdate
    */
    shipmentGiftReceiptUpdate(requestParameters: giftReceiptApiParams.ShipmentGiftReceiptUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionModelOfShipment>;

}


/**
 * 
 */
export class GiftReceiptApi extends runtime.BaseAPI implements GiftReceiptApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * itemGiftReceiptUpdate
     * itemGiftReceiptUpdate
     */


    async itemGiftReceiptUpdateRaw(requestParameters: giftReceiptApiParams.ItemGiftReceiptUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfShipment>> {
        if (requestParameters.shipmentNumber === null || requestParameters.shipmentNumber === undefined) {
            throw new runtime.RequiredError('shipmentNumber','Required parameter requestParameters.shipmentNumber was null or undefined when calling itemGiftReceiptUpdate.');
        }

        if (requestParameters.itemGiftReceiptRequestDto === null || requestParameters.itemGiftReceiptRequestDto === undefined) {
            throw new runtime.RequiredError('itemGiftReceiptRequestDto','Required parameter requestParameters.itemGiftReceiptRequestDto was null or undefined when calling itemGiftReceiptUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/shipments/{shipmentNumber}/itemGiftReceipt`.replace(`{${"shipmentNumber"}}`, encodeURIComponent(String(requestParameters.shipmentNumber))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.itemGiftReceiptRequestDto,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * itemGiftReceiptUpdate
     * itemGiftReceiptUpdate
     */
    async itemGiftReceiptUpdate(requestParameters: giftReceiptApiParams.ItemGiftReceiptUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfShipment> {
        const response = await this.itemGiftReceiptUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * shipmentGiftReceiptUpdate
     * shipmentGiftReceiptUpdate
     */


    async shipmentGiftReceiptUpdateRaw(requestParameters: giftReceiptApiParams.ShipmentGiftReceiptUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionModelOfShipment>> {
        if (requestParameters.orderId === null || requestParameters.orderId === undefined) {
            throw new runtime.RequiredError('orderId','Required parameter requestParameters.orderId was null or undefined when calling shipmentGiftReceiptUpdate.');
        }

        if (requestParameters.shipmentGiftReceiptRequestDto === null || requestParameters.shipmentGiftReceiptRequestDto === undefined) {
            throw new runtime.RequiredError('shipmentGiftReceiptRequestDto','Required parameter requestParameters.shipmentGiftReceiptRequestDto was null or undefined when calling shipmentGiftReceiptUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/shipments/{orderId}/shipmentGiftReceipt`.replace(`{${"orderId"}}`, encodeURIComponent(String(requestParameters.orderId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.shipmentGiftReceiptRequestDto,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * shipmentGiftReceiptUpdate
     * shipmentGiftReceiptUpdate
     */
    async shipmentGiftReceiptUpdate(requestParameters: giftReceiptApiParams.ShipmentGiftReceiptUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionModelOfShipment> {
        const response = await this.shipmentGiftReceiptUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
