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
  ClosePickWave,
  CollectionModelOfPickWave,
  CollectionModelOfShipment,
  CreatePickWave,
  EntityModelOfPickWave,
  EntityModelOfPickWaveDetail,
  EntityModelOfRenderedContent,
} from '../models';


export namespace pickWaveApiParams { 
    export interface ClosePickWaveRequest {
        pickWaveNumber: number;
        closePickWaveDto: ClosePickWave;
    }
    export interface CreatePickWaveRequest {
        createPickWaveDto: CreatePickWave;
    }
    export interface GetOpenPickWavesRequest {
        fulfillmentLocationCode: string;
        shipmentType?: string;
        userDisplayName?: string;
        userId?: string;
    }
    export interface GetPickWaveRequest {
        pickWaveNumber: number;
        sortContents?: string;
    }
    export interface GetPickWaveDetailsRequest {
        pickWaveNumber: number;
        sortContentsByLocator?: string;
    }
    export interface GetShipmentsInPickWaveRequest {
        pickWaveNumber: number;
    }
    export interface RenderOrderPickSheetsRequest {
        pickWaveNumber: number;
    }
    export interface RenderPickWaveRequest {
        pickWaveNumber: number;
        printPackingLists?: boolean;
        printPickWave?: boolean;
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
    * closePickWave
    * @summary closePickWave
    * @param {number} pickWaveNumber pickWaveNumber
    * @param {ClosePickWave} closePickWaveDto closePickWaveDto
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PickWaveApiInterface
    */
    closePickWaveRaw(requestParameters: pickWaveApiParams.ClosePickWaveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfPickWave>>;

    /**
    * closePickWave
    * closePickWave
    */
    closePickWave(requestParameters: pickWaveApiParams.ClosePickWaveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfPickWave>;

    /**
    * createPickWave
    * @summary createPickWave
    * @param {CreatePickWave} createPickWaveDto createPickWaveDto
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PickWaveApiInterface
    */
    createPickWaveRaw(requestParameters: pickWaveApiParams.CreatePickWaveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfPickWave>>;

    /**
    * createPickWave
    * createPickWave
    */
    createPickWave(requestParameters: pickWaveApiParams.CreatePickWaveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfPickWave>;

    /**
    * getOpenPickWaves
    * @summary getOpenPickWaves
    * @param {string} fulfillmentLocationCode fulfillmentLocationCode
    * @param {string} [shipmentType] shipmentType
    * @param {string} [userDisplayName] userDisplayName
    * @param {string} [userId] userId
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PickWaveApiInterface
    */
    getOpenPickWavesRaw(requestParameters: pickWaveApiParams.GetOpenPickWavesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionModelOfPickWave>>;

    /**
    * getOpenPickWaves
    * getOpenPickWaves
    */
    getOpenPickWaves(requestParameters: pickWaveApiParams.GetOpenPickWavesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionModelOfPickWave>;

    /**
    * getPickWave
    * @summary getPickWave
    * @param {number} pickWaveNumber pickWaveNumber
    * @param {string} [sortContents] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PickWaveApiInterface
    */
    getPickWaveRaw(requestParameters: pickWaveApiParams.GetPickWaveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfPickWave>>;

    /**
    * getPickWave
    * getPickWave
    */
    getPickWave(requestParameters: pickWaveApiParams.GetPickWaveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfPickWave>;

    /**
    * getPickWaveDetails
    * @summary getPickWaveDetails
    * @param {number} pickWaveNumber pickWaveNumber
    * @param {string} [sortContentsByLocator] sortContentsByLocator
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PickWaveApiInterface
    */
    getPickWaveDetailsRaw(requestParameters: pickWaveApiParams.GetPickWaveDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfPickWaveDetail>>;

    /**
    * getPickWaveDetails
    * getPickWaveDetails
    */
    getPickWaveDetails(requestParameters: pickWaveApiParams.GetPickWaveDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfPickWaveDetail>;

    /**
    * getShipmentsInPickWave
    * @summary getShipmentsInPickWave
    * @param {number} pickWaveNumber pickWaveNumber
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PickWaveApiInterface
    */
    getShipmentsInPickWaveRaw(requestParameters: pickWaveApiParams.GetShipmentsInPickWaveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionModelOfShipment>>;

    /**
    * getShipmentsInPickWave
    * getShipmentsInPickWave
    */
    getShipmentsInPickWave(requestParameters: pickWaveApiParams.GetShipmentsInPickWaveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionModelOfShipment>;

    /**
    * renderOrderPickSheets
    * @summary renderOrderPickSheets
    * @param {number} pickWaveNumber pickWaveNumber
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PickWaveApiInterface
    */
    renderOrderPickSheetsRaw(requestParameters: pickWaveApiParams.RenderOrderPickSheetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfRenderedContent>>;

    /**
    * renderOrderPickSheets
    * renderOrderPickSheets
    */
    renderOrderPickSheets(requestParameters: pickWaveApiParams.RenderOrderPickSheetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfRenderedContent>;

    /**
    * renderPickWave
    * @summary renderPickWave
    * @param {number} pickWaveNumber pickWaveNumber
    * @param {boolean} [printPackingLists] printPackingLists
    * @param {boolean} [printPickWave] printPickWave
    * @param {boolean} [printSingleOrderSheets] printSingleOrderSheets
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PickWaveApiInterface
    */
    renderPickWaveRaw(requestParameters: pickWaveApiParams.RenderPickWaveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfRenderedContent>>;

    /**
    * renderPickWave
    * renderPickWave
    */
    renderPickWave(requestParameters: pickWaveApiParams.RenderPickWaveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfRenderedContent>;

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
     * closePickWave
     * closePickWave
     */


    async closePickWaveRaw(requestParameters: pickWaveApiParams.ClosePickWaveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfPickWave>> {
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
     * closePickWave
     * closePickWave
     */
    async closePickWave(requestParameters: pickWaveApiParams.ClosePickWaveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfPickWave> {
        const response = await this.closePickWaveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * createPickWave
     * createPickWave
     */


    async createPickWaveRaw(requestParameters: pickWaveApiParams.CreatePickWaveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfPickWave>> {
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
     * createPickWave
     * createPickWave
     */
    async createPickWave(requestParameters: pickWaveApiParams.CreatePickWaveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfPickWave> {
        const response = await this.createPickWaveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * getOpenPickWaves
     * getOpenPickWaves
     */


    async getOpenPickWavesRaw(requestParameters: pickWaveApiParams.GetOpenPickWavesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionModelOfPickWave>> {
        if (requestParameters.fulfillmentLocationCode === null || requestParameters.fulfillmentLocationCode === undefined) {
            throw new runtime.RequiredError('fulfillmentLocationCode','Required parameter requestParameters.fulfillmentLocationCode was null or undefined when calling getOpenPickWaves.');
        }

        const queryParameters: any = {};

        if (requestParameters.shipmentType !== undefined) {
            queryParameters['shipmentType'] = requestParameters.shipmentType;
        }

        if (requestParameters.userDisplayName !== undefined) {
            queryParameters['userDisplayName'] = requestParameters.userDisplayName;
        }

        if (requestParameters.userId !== undefined) {
            queryParameters['userId'] = requestParameters.userId;
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
     * getOpenPickWaves
     * getOpenPickWaves
     */
    async getOpenPickWaves(requestParameters: pickWaveApiParams.GetOpenPickWavesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionModelOfPickWave> {
        const response = await this.getOpenPickWavesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * getPickWave
     * getPickWave
     */


    async getPickWaveRaw(requestParameters: pickWaveApiParams.GetPickWaveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfPickWave>> {
        if (requestParameters.pickWaveNumber === null || requestParameters.pickWaveNumber === undefined) {
            throw new runtime.RequiredError('pickWaveNumber','Required parameter requestParameters.pickWaveNumber was null or undefined when calling getPickWave.');
        }

        const queryParameters: any = {};

        if (requestParameters.sortContents !== undefined) {
            queryParameters['sortContents'] = requestParameters.sortContents;
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
     * getPickWave
     * getPickWave
     */
    async getPickWave(requestParameters: pickWaveApiParams.GetPickWaveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfPickWave> {
        const response = await this.getPickWaveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * getPickWaveDetails
     * getPickWaveDetails
     */


    async getPickWaveDetailsRaw(requestParameters: pickWaveApiParams.GetPickWaveDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfPickWaveDetail>> {
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
     * getPickWaveDetails
     * getPickWaveDetails
     */
    async getPickWaveDetails(requestParameters: pickWaveApiParams.GetPickWaveDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfPickWaveDetail> {
        const response = await this.getPickWaveDetailsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * getShipmentsInPickWave
     * getShipmentsInPickWave
     */


    async getShipmentsInPickWaveRaw(requestParameters: pickWaveApiParams.GetShipmentsInPickWaveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionModelOfShipment>> {
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
     * getShipmentsInPickWave
     * getShipmentsInPickWave
     */
    async getShipmentsInPickWave(requestParameters: pickWaveApiParams.GetShipmentsInPickWaveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionModelOfShipment> {
        const response = await this.getShipmentsInPickWaveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * renderOrderPickSheets
     * renderOrderPickSheets
     */


    async renderOrderPickSheetsRaw(requestParameters: pickWaveApiParams.RenderOrderPickSheetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfRenderedContent>> {
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
     * renderOrderPickSheets
     * renderOrderPickSheets
     */
    async renderOrderPickSheets(requestParameters: pickWaveApiParams.RenderOrderPickSheetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfRenderedContent> {
        const response = await this.renderOrderPickSheetsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * renderPickWave
     * renderPickWave
     */


    async renderPickWaveRaw(requestParameters: pickWaveApiParams.RenderPickWaveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfRenderedContent>> {
        if (requestParameters.pickWaveNumber === null || requestParameters.pickWaveNumber === undefined) {
            throw new runtime.RequiredError('pickWaveNumber','Required parameter requestParameters.pickWaveNumber was null or undefined when calling renderPickWave.');
        }

        const queryParameters: any = {};

        if (requestParameters.printPackingLists !== undefined) {
            queryParameters['printPackingLists'] = requestParameters.printPackingLists;
        }

        if (requestParameters.printPickWave !== undefined) {
            queryParameters['printPickWave'] = requestParameters.printPickWave;
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
     * renderPickWave
     * renderPickWave
     */
    async renderPickWave(requestParameters: pickWaveApiParams.RenderPickWaveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfRenderedContent> {
        const response = await this.renderPickWaveRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
