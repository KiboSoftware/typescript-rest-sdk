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
  ClosePickWaveDto,
  CollectionModelPickWaveDto,
  CollectionModelShipmentDto,
  CreatePickWaveDto,
  EntityModelPickWaveDetailDto,
  EntityModelPickWaveDto,
  EntityModelRenderedContentDto,
  ErrorItem,
  GetPickWaveRequest,
  RemoveSpecificShipmentFromConsolidationGroup400Response,
} from '../models';


export namespace pickWaveApiParams { 
    export interface ClosePickWaveRequest {
        pickWaveNumber: number;
        closePickWaveDto: ClosePickWaveDto;
    }
    export interface CreatePickWaveRequest {
        createPickWaveDto: CreatePickWaveDto;
    }
    export interface GetOpenPickWavesRequest {
        fulfillmentLocationCode: string;
        shipmentType?: string;
        userId?: string;
        userDisplayName?: string;
    }
    export interface GetPickWaveOperationRequest {
        pickWaveNumber: number;
        request: GetPickWaveRequest;
    }
    export interface GetPickWaveDetailsRequest {
        pickWaveNumber: number;
        sortContentsByLocator?: string;
    }
    export interface GetShipmentsInPickWaveRequest {
        pickWaveNumber: number;
    }
    export interface IsPickWaveEnabledRequest {
        locationCode: string;
    }
    export interface RenderOrderPickSheetsRequest {
        pickWaveNumber: number;
    }
    export interface RenderPickWaveRequest {
        pickWaveNumber: number;
        printPickWave?: boolean;
        printPackingLists?: boolean;
        printSingleOrderSheets?: boolean;
    }
}
/**
* PickWaveApiService - interface
* 
* @export
* @interface PickWaveApi
*/
export interface PickWaveApiService {
    /**
    * Close Pick Wave
    * @summary Close Pick Wave
    * @param {number} pickWaveNumber 
    * @param {ClosePickWaveDto} closePickWaveDto 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PickWaveApiInterface
    */
    closePickWaveRaw(requestParameters: pickWaveApiParams.ClosePickWaveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelPickWaveDto>>;

    /**
    * Close Pick Wave
    * Close Pick Wave
    */
    closePickWave(requestParameters: pickWaveApiParams.ClosePickWaveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelPickWaveDto>;

    /**
    * Create Pick Wave
    * @summary Create Pick Wave
    * @param {CreatePickWaveDto} createPickWaveDto 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PickWaveApiInterface
    */
    createPickWaveRaw(requestParameters: pickWaveApiParams.CreatePickWaveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelPickWaveDto>>;

    /**
    * Create Pick Wave
    * Create Pick Wave
    */
    createPickWave(requestParameters: pickWaveApiParams.CreatePickWaveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelPickWaveDto>;

    /**
    * Get Open Pick Waves
    * @summary Get Open Pick Waves
    * @param {string} fulfillmentLocationCode 
    * @param {string} [shipmentType] 
    * @param {string} [userId] 
    * @param {string} [userDisplayName] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PickWaveApiInterface
    */
    getOpenPickWavesRaw(requestParameters: pickWaveApiParams.GetOpenPickWavesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionModelPickWaveDto>>;

    /**
    * Get Open Pick Waves
    * Get Open Pick Waves
    */
    getOpenPickWaves(requestParameters: pickWaveApiParams.GetOpenPickWavesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionModelPickWaveDto>;

    /**
    * Get Pick Wave
    * @summary Get Pick Wave
    * @param {number} pickWaveNumber 
    * @param {GetPickWaveRequest} request 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PickWaveApiInterface
    */
    getPickWaveRaw(requestParameters: pickWaveApiParams.GetPickWaveOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelPickWaveDto>>;

    /**
    * Get Pick Wave
    * Get Pick Wave
    */
    getPickWave(requestParameters: pickWaveApiParams.GetPickWaveOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelPickWaveDto>;

    /**
    * Get Pick Wave Details
    * @summary Get Pick Wave Details
    * @param {number} pickWaveNumber 
    * @param {string} [sortContentsByLocator] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PickWaveApiInterface
    */
    getPickWaveDetailsRaw(requestParameters: pickWaveApiParams.GetPickWaveDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelPickWaveDetailDto>>;

    /**
    * Get Pick Wave Details
    * Get Pick Wave Details
    */
    getPickWaveDetails(requestParameters: pickWaveApiParams.GetPickWaveDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelPickWaveDetailDto>;

    /**
    * Get Shipments in Pick Wave
    * @summary Get Shipments in Pick Wave
    * @param {number} pickWaveNumber 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PickWaveApiInterface
    */
    getShipmentsInPickWaveRaw(requestParameters: pickWaveApiParams.GetShipmentsInPickWaveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionModelShipmentDto>>;

    /**
    * Get Shipments in Pick Wave
    * Get Shipments in Pick Wave
    */
    getShipmentsInPickWave(requestParameters: pickWaveApiParams.GetShipmentsInPickWaveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionModelShipmentDto>;

    /**
    * Check if Pick Waves Enabled for Location
    * @summary Check if Pick Waves Enabled for Location
    * @param {string} locationCode 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PickWaveApiInterface
    */
    isPickWaveEnabledRaw(requestParameters: pickWaveApiParams.IsPickWaveEnabledRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>>;

    /**
    * Check if Pick Waves Enabled for Location
    * Check if Pick Waves Enabled for Location
    */
    isPickWaveEnabled(requestParameters: pickWaveApiParams.IsPickWaveEnabledRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean>;

    /**
    * Render pick wave order pick sheets in HTML format for printing
    * @summary Render Pick Wave Order Sheets
    * @param {number} pickWaveNumber 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PickWaveApiInterface
    */
    renderOrderPickSheetsRaw(requestParameters: pickWaveApiParams.RenderOrderPickSheetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelRenderedContentDto>>;

    /**
    * Render pick wave order pick sheets in HTML format for printing
    * Render Pick Wave Order Sheets
    */
    renderOrderPickSheets(requestParameters: pickWaveApiParams.RenderOrderPickSheetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelRenderedContentDto>;

    /**
    * Render pick wave in HTML format for printing
    * @summary Render Pick Wave
    * @param {number} pickWaveNumber 
    * @param {boolean} [printPickWave] 
    * @param {boolean} [printPackingLists] 
    * @param {boolean} [printSingleOrderSheets] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PickWaveApiInterface
    */
    renderPickWaveRaw(requestParameters: pickWaveApiParams.RenderPickWaveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelRenderedContentDto>>;

    /**
    * Render pick wave in HTML format for printing
    * Render Pick Wave
    */
    renderPickWave(requestParameters: pickWaveApiParams.RenderPickWaveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelRenderedContentDto>;

}


/**
 * 
 */
export class PickWaveApi extends runtime.BaseAPI implements PickWaveApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Close Pick Wave
     * Close Pick Wave
     */


    async closePickWaveRaw(requestParameters: pickWaveApiParams.ClosePickWaveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelPickWaveDto>> {
        if (requestParameters.pickWaveNumber === null || requestParameters.pickWaveNumber === undefined) {
            throw new runtime.RequiredError('pickWaveNumber','Required parameter requestParameters.pickWaveNumber was null or undefined when calling closePickWave.');
        }

        if (requestParameters.closePickWaveDto === null || requestParameters.closePickWaveDto === undefined) {
            throw new runtime.RequiredError('closePickWaveDto','Required parameter requestParameters.closePickWaveDto was null or undefined when calling closePickWave.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/pickwaves/{pickWaveNumber}/closed`.replace(`{${"pickWaveNumber"}}`, encodeURIComponent(String(requestParameters.pickWaveNumber))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.closePickWaveDto,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Close Pick Wave
     * Close Pick Wave
     */
    async closePickWave(requestParameters: pickWaveApiParams.ClosePickWaveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelPickWaveDto> {
        const response = await this.closePickWaveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create Pick Wave
     * Create Pick Wave
     */


    async createPickWaveRaw(requestParameters: pickWaveApiParams.CreatePickWaveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelPickWaveDto>> {
        if (requestParameters.createPickWaveDto === null || requestParameters.createPickWaveDto === undefined) {
            throw new runtime.RequiredError('createPickWaveDto','Required parameter requestParameters.createPickWaveDto was null or undefined when calling createPickWave.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/pickwaves`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.createPickWaveDto,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Create Pick Wave
     * Create Pick Wave
     */
    async createPickWave(requestParameters: pickWaveApiParams.CreatePickWaveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelPickWaveDto> {
        const response = await this.createPickWaveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Open Pick Waves
     * Get Open Pick Waves
     */


    async getOpenPickWavesRaw(requestParameters: pickWaveApiParams.GetOpenPickWavesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionModelPickWaveDto>> {
        if (requestParameters.fulfillmentLocationCode === null || requestParameters.fulfillmentLocationCode === undefined) {
            throw new runtime.RequiredError('fulfillmentLocationCode','Required parameter requestParameters.fulfillmentLocationCode was null or undefined when calling getOpenPickWaves.');
        }

        const queryParameters: any = {};

        if (requestParameters.shipmentType !== undefined) {
            queryParameters['shipmentType'] = requestParameters.shipmentType;
        }

        if (requestParameters.userId !== undefined) {
            queryParameters['userId'] = requestParameters.userId;
        }

        if (requestParameters.userDisplayName !== undefined) {
            queryParameters['userDisplayName'] = requestParameters.userDisplayName;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/pickwaves/open/{fulfillmentLocationCode}`.replace(`{${"fulfillmentLocationCode"}}`, encodeURIComponent(String(requestParameters.fulfillmentLocationCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get Open Pick Waves
     * Get Open Pick Waves
     */
    async getOpenPickWaves(requestParameters: pickWaveApiParams.GetOpenPickWavesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionModelPickWaveDto> {
        const response = await this.getOpenPickWavesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Pick Wave
     * Get Pick Wave
     */


    async getPickWaveRaw(requestParameters: pickWaveApiParams.GetPickWaveOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelPickWaveDto>> {
        if (requestParameters.pickWaveNumber === null || requestParameters.pickWaveNumber === undefined) {
            throw new runtime.RequiredError('pickWaveNumber','Required parameter requestParameters.pickWaveNumber was null or undefined when calling getPickWave.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling getPickWave.');
        }

        const queryParameters: any = {};

        if (requestParameters.request !== undefined) {
            queryParameters['request'] = requestParameters.request;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/pickwaves/{pickWaveNumber}`.replace(`{${"pickWaveNumber"}}`, encodeURIComponent(String(requestParameters.pickWaveNumber))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get Pick Wave
     * Get Pick Wave
     */
    async getPickWave(requestParameters: pickWaveApiParams.GetPickWaveOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelPickWaveDto> {
        const response = await this.getPickWaveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Pick Wave Details
     * Get Pick Wave Details
     */


    async getPickWaveDetailsRaw(requestParameters: pickWaveApiParams.GetPickWaveDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelPickWaveDetailDto>> {
        if (requestParameters.pickWaveNumber === null || requestParameters.pickWaveNumber === undefined) {
            throw new runtime.RequiredError('pickWaveNumber','Required parameter requestParameters.pickWaveNumber was null or undefined when calling getPickWaveDetails.');
        }

        const queryParameters: any = {};

        if (requestParameters.sortContentsByLocator !== undefined) {
            queryParameters['sortContentsByLocator'] = requestParameters.sortContentsByLocator;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/pickwaves/{pickWaveNumber}/pickWaveDetails`.replace(`{${"pickWaveNumber"}}`, encodeURIComponent(String(requestParameters.pickWaveNumber))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get Pick Wave Details
     * Get Pick Wave Details
     */
    async getPickWaveDetails(requestParameters: pickWaveApiParams.GetPickWaveDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelPickWaveDetailDto> {
        const response = await this.getPickWaveDetailsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Shipments in Pick Wave
     * Get Shipments in Pick Wave
     */


    async getShipmentsInPickWaveRaw(requestParameters: pickWaveApiParams.GetShipmentsInPickWaveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionModelShipmentDto>> {
        if (requestParameters.pickWaveNumber === null || requestParameters.pickWaveNumber === undefined) {
            throw new runtime.RequiredError('pickWaveNumber','Required parameter requestParameters.pickWaveNumber was null or undefined when calling getShipmentsInPickWave.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/pickwaves/{pickWaveNumber}/shipments`.replace(`{${"pickWaveNumber"}}`, encodeURIComponent(String(requestParameters.pickWaveNumber))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get Shipments in Pick Wave
     * Get Shipments in Pick Wave
     */
    async getShipmentsInPickWave(requestParameters: pickWaveApiParams.GetShipmentsInPickWaveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionModelShipmentDto> {
        const response = await this.getShipmentsInPickWaveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Check if Pick Waves Enabled for Location
     * Check if Pick Waves Enabled for Location
     */


    async isPickWaveEnabledRaw(requestParameters: pickWaveApiParams.IsPickWaveEnabledRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>> {
        if (requestParameters.locationCode === null || requestParameters.locationCode === undefined) {
            throw new runtime.RequiredError('locationCode','Required parameter requestParameters.locationCode was null or undefined when calling isPickWaveEnabled.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/pickwaves/enabled/{locationCode}`.replace(`{${"locationCode"}}`, encodeURIComponent(String(requestParameters.locationCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Check if Pick Waves Enabled for Location
     * Check if Pick Waves Enabled for Location
     */
    async isPickWaveEnabled(requestParameters: pickWaveApiParams.IsPickWaveEnabledRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean> {
        const response = await this.isPickWaveEnabledRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Render pick wave order pick sheets in HTML format for printing
     * Render Pick Wave Order Sheets
     */


    async renderOrderPickSheetsRaw(requestParameters: pickWaveApiParams.RenderOrderPickSheetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelRenderedContentDto>> {
        if (requestParameters.pickWaveNumber === null || requestParameters.pickWaveNumber === undefined) {
            throw new runtime.RequiredError('pickWaveNumber','Required parameter requestParameters.pickWaveNumber was null or undefined when calling renderOrderPickSheets.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/pickwaves/{pickWaveNumber}/order-pick-sheets/html`.replace(`{${"pickWaveNumber"}}`, encodeURIComponent(String(requestParameters.pickWaveNumber))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Render pick wave order pick sheets in HTML format for printing
     * Render Pick Wave Order Sheets
     */
    async renderOrderPickSheets(requestParameters: pickWaveApiParams.RenderOrderPickSheetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelRenderedContentDto> {
        const response = await this.renderOrderPickSheetsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Render pick wave in HTML format for printing
     * Render Pick Wave
     */


    async renderPickWaveRaw(requestParameters: pickWaveApiParams.RenderPickWaveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelRenderedContentDto>> {
        if (requestParameters.pickWaveNumber === null || requestParameters.pickWaveNumber === undefined) {
            throw new runtime.RequiredError('pickWaveNumber','Required parameter requestParameters.pickWaveNumber was null or undefined when calling renderPickWave.');
        }

        const queryParameters: any = {};

        if (requestParameters.printPickWave !== undefined) {
            queryParameters['printPickWave'] = requestParameters.printPickWave;
        }

        if (requestParameters.printPackingLists !== undefined) {
            queryParameters['printPackingLists'] = requestParameters.printPackingLists;
        }

        if (requestParameters.printSingleOrderSheets !== undefined) {
            queryParameters['printSingleOrderSheets'] = requestParameters.printSingleOrderSheets;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/pickwaves/{pickWaveNumber}/rendition/html`.replace(`{${"pickWaveNumber"}}`, encodeURIComponent(String(requestParameters.pickWaveNumber))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Render pick wave in HTML format for printing
     * Render Pick Wave
     */
    async renderPickWave(requestParameters: pickWaveApiParams.RenderPickWaveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelRenderedContentDto> {
        const response = await this.renderPickWaveRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
