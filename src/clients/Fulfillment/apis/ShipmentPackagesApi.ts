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
  EntityModelOfShipment,
  FulfillmentAPIProductionProfilePackage,
  SaveMpsPackagesRequest,
} from '../models';


export namespace shipmentPackagesApiParams { 
    export interface DeleteShipmentPackageRequest {
        packageId: string;
        shipmentNumber: number;
        ifMatch?: string;
    }
    export interface DeleteShipmentPackagesRequest {
        shipmentNumber: number;
        ifMatch?: string;
    }
    export interface NewPackageRequest {
        shipmentNumber: number;
        packageDto: FulfillmentAPIProductionProfilePackage;
        ifMatch?: string;
    }
    export interface NewPackagesRequest {
        shipmentNumber: number;
        packageDtoList: Array<FulfillmentAPIProductionProfilePackage>;
        ifMatch?: string;
    }
    export interface RemoveShippingInformationRequest {
        shipmentNumber: number;
        ifMatch?: string;
    }
    export interface SaveMultiPieceShipmentPackagesRequest {
        shipmentNumber: number;
        saveMpsPackagesRequestDto: SaveMpsPackagesRequest;
        ifMatch?: string;
    }
    export interface UpdatePackageRequest {
        packageId: string;
        shipmentNumber: number;
        packageDto: FulfillmentAPIProductionProfilePackage;
        ifMatch?: string;
    }
}
/**
* ShipmentPackagesApiService - interface
* 
* @export
* @interface ShipmentPackagesApi
*/
export interface ShipmentPackagesApiService {
    /**
    * deleteShipmentPackage
    * @summary deleteShipmentPackage
    * @param {string} packageId packageId
    * @param {number} shipmentNumber shipmentNumber
    * @param {string} [ifMatch] If-Match
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ShipmentPackagesApiInterface
    */
    deleteShipmentPackageRaw(requestParameters: shipmentPackagesApiParams.DeleteShipmentPackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * deleteShipmentPackage
    * deleteShipmentPackage
    */
    deleteShipmentPackage(requestParameters: shipmentPackagesApiParams.DeleteShipmentPackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * deleteShipmentPackages
    * @summary deleteShipmentPackages
    * @param {number} shipmentNumber shipmentNumber
    * @param {string} [ifMatch] If-Match
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ShipmentPackagesApiInterface
    */
    deleteShipmentPackagesRaw(requestParameters: shipmentPackagesApiParams.DeleteShipmentPackagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfShipment>>;

    /**
    * deleteShipmentPackages
    * deleteShipmentPackages
    */
    deleteShipmentPackages(requestParameters: shipmentPackagesApiParams.DeleteShipmentPackagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfShipment>;

    /**
    * newPackage
    * @summary newPackage
    * @param {number} shipmentNumber shipmentNumber
    * @param {FulfillmentAPIProductionProfilePackage} packageDto packageDto
    * @param {string} [ifMatch] If-Match
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ShipmentPackagesApiInterface
    */
    newPackageRaw(requestParameters: shipmentPackagesApiParams.NewPackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfShipment>>;

    /**
    * newPackage
    * newPackage
    */
    newPackage(requestParameters: shipmentPackagesApiParams.NewPackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfShipment>;

    /**
    * newPackages
    * @summary newPackages
    * @param {number} shipmentNumber shipmentNumber
    * @param {Array<FulfillmentAPIProductionProfilePackage>} packageDtoList packageDtoList
    * @param {string} [ifMatch] If-Match
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ShipmentPackagesApiInterface
    */
    newPackagesRaw(requestParameters: shipmentPackagesApiParams.NewPackagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfShipment>>;

    /**
    * newPackages
    * newPackages
    */
    newPackages(requestParameters: shipmentPackagesApiParams.NewPackagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfShipment>;

    /**
    * removeShippingInformation
    * @summary removeShippingInformation
    * @param {number} shipmentNumber shipmentNumber
    * @param {string} [ifMatch] If-Match
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ShipmentPackagesApiInterface
    */
    removeShippingInformationRaw(requestParameters: shipmentPackagesApiParams.RemoveShippingInformationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfShipment>>;

    /**
    * removeShippingInformation
    * removeShippingInformation
    */
    removeShippingInformation(requestParameters: shipmentPackagesApiParams.RemoveShippingInformationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfShipment>;

    /**
    * saveMultiPieceShipmentPackages
    * @summary saveMultiPieceShipmentPackages
    * @param {number} shipmentNumber shipmentNumber
    * @param {SaveMpsPackagesRequest} saveMpsPackagesRequestDto saveMpsPackagesRequestDto
    * @param {string} [ifMatch] If-Match
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ShipmentPackagesApiInterface
    */
    saveMultiPieceShipmentPackagesRaw(requestParameters: shipmentPackagesApiParams.SaveMultiPieceShipmentPackagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfShipment>>;

    /**
    * saveMultiPieceShipmentPackages
    * saveMultiPieceShipmentPackages
    */
    saveMultiPieceShipmentPackages(requestParameters: shipmentPackagesApiParams.SaveMultiPieceShipmentPackagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfShipment>;

    /**
    * updatePackage
    * @summary updatePackage
    * @param {string} packageId packageId
    * @param {number} shipmentNumber shipmentNumber
    * @param {FulfillmentAPIProductionProfilePackage} packageDto packageDto
    * @param {string} [ifMatch] If-Match
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ShipmentPackagesApiInterface
    */
    updatePackageRaw(requestParameters: shipmentPackagesApiParams.UpdatePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfShipment>>;

    /**
    * updatePackage
    * updatePackage
    */
    updatePackage(requestParameters: shipmentPackagesApiParams.UpdatePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfShipment>;

}


/**
 * 
 */
export class ShipmentPackagesApi extends runtime.BaseAPI implements ShipmentPackagesApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * deleteShipmentPackage
     * deleteShipmentPackage
     */


    async deleteShipmentPackageRaw(requestParameters: shipmentPackagesApiParams.DeleteShipmentPackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.packageId === null || requestParameters.packageId === undefined) {
            throw new runtime.RequiredError('packageId','Required parameter requestParameters.packageId was null or undefined when calling deleteShipmentPackage.');
        }

        if (requestParameters.shipmentNumber === null || requestParameters.shipmentNumber === undefined) {
            throw new runtime.RequiredError('shipmentNumber','Required parameter requestParameters.shipmentNumber was null or undefined when calling deleteShipmentPackage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.ifMatch !== undefined && requestParameters.ifMatch !== null) {
            headerParameters['If-Match'] = String(requestParameters.ifMatch);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/shipments/{shipmentNumber}/packages/{packageId}`.replace(`{${"packageId"}}`, encodeURIComponent(String(requestParameters.packageId))).replace(`{${"shipmentNumber"}}`, encodeURIComponent(String(requestParameters.shipmentNumber))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * deleteShipmentPackage
     * deleteShipmentPackage
     */
    async deleteShipmentPackage(requestParameters: shipmentPackagesApiParams.DeleteShipmentPackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteShipmentPackageRaw(requestParameters, initOverrides);
    }

    /**
     * deleteShipmentPackages
     * deleteShipmentPackages
     */


    async deleteShipmentPackagesRaw(requestParameters: shipmentPackagesApiParams.DeleteShipmentPackagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfShipment>> {
        if (requestParameters.shipmentNumber === null || requestParameters.shipmentNumber === undefined) {
            throw new runtime.RequiredError('shipmentNumber','Required parameter requestParameters.shipmentNumber was null or undefined when calling deleteShipmentPackages.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.ifMatch !== undefined && requestParameters.ifMatch !== null) {
            headerParameters['If-Match'] = String(requestParameters.ifMatch);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/shipments/{shipmentNumber}/packages/bulk`.replace(`{${"shipmentNumber"}}`, encodeURIComponent(String(requestParameters.shipmentNumber))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * deleteShipmentPackages
     * deleteShipmentPackages
     */
    async deleteShipmentPackages(requestParameters: shipmentPackagesApiParams.DeleteShipmentPackagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfShipment> {
        const response = await this.deleteShipmentPackagesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * newPackage
     * newPackage
     */


    async newPackageRaw(requestParameters: shipmentPackagesApiParams.NewPackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfShipment>> {
        if (requestParameters.shipmentNumber === null || requestParameters.shipmentNumber === undefined) {
            throw new runtime.RequiredError('shipmentNumber','Required parameter requestParameters.shipmentNumber was null or undefined when calling newPackage.');
        }

        if (requestParameters.packageDto === null || requestParameters.packageDto === undefined) {
            throw new runtime.RequiredError('packageDto','Required parameter requestParameters.packageDto was null or undefined when calling newPackage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.ifMatch !== undefined && requestParameters.ifMatch !== null) {
            headerParameters['If-Match'] = String(requestParameters.ifMatch);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/shipments/{shipmentNumber}/packages`.replace(`{${"shipmentNumber"}}`, encodeURIComponent(String(requestParameters.shipmentNumber))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.packageDto,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * newPackage
     * newPackage
     */
    async newPackage(requestParameters: shipmentPackagesApiParams.NewPackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfShipment> {
        const response = await this.newPackageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * newPackages
     * newPackages
     */


    async newPackagesRaw(requestParameters: shipmentPackagesApiParams.NewPackagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfShipment>> {
        if (requestParameters.shipmentNumber === null || requestParameters.shipmentNumber === undefined) {
            throw new runtime.RequiredError('shipmentNumber','Required parameter requestParameters.shipmentNumber was null or undefined when calling newPackages.');
        }

        if (requestParameters.packageDtoList === null || requestParameters.packageDtoList === undefined) {
            throw new runtime.RequiredError('packageDtoList','Required parameter requestParameters.packageDtoList was null or undefined when calling newPackages.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.ifMatch !== undefined && requestParameters.ifMatch !== null) {
            headerParameters['If-Match'] = String(requestParameters.ifMatch);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/shipments/{shipmentNumber}/packages/bulk`.replace(`{${"shipmentNumber"}}`, encodeURIComponent(String(requestParameters.shipmentNumber))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.packageDtoList,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * newPackages
     * newPackages
     */
    async newPackages(requestParameters: shipmentPackagesApiParams.NewPackagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfShipment> {
        const response = await this.newPackagesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * removeShippingInformation
     * removeShippingInformation
     */


    async removeShippingInformationRaw(requestParameters: shipmentPackagesApiParams.RemoveShippingInformationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfShipment>> {
        if (requestParameters.shipmentNumber === null || requestParameters.shipmentNumber === undefined) {
            throw new runtime.RequiredError('shipmentNumber','Required parameter requestParameters.shipmentNumber was null or undefined when calling removeShippingInformation.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.ifMatch !== undefined && requestParameters.ifMatch !== null) {
            headerParameters['If-Match'] = String(requestParameters.ifMatch);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/shipments/{shipmentNumber}/packages/bulk/shipping`.replace(`{${"shipmentNumber"}}`, encodeURIComponent(String(requestParameters.shipmentNumber))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * removeShippingInformation
     * removeShippingInformation
     */
    async removeShippingInformation(requestParameters: shipmentPackagesApiParams.RemoveShippingInformationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfShipment> {
        const response = await this.removeShippingInformationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * saveMultiPieceShipmentPackages
     * saveMultiPieceShipmentPackages
     */


    async saveMultiPieceShipmentPackagesRaw(requestParameters: shipmentPackagesApiParams.SaveMultiPieceShipmentPackagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfShipment>> {
        if (requestParameters.shipmentNumber === null || requestParameters.shipmentNumber === undefined) {
            throw new runtime.RequiredError('shipmentNumber','Required parameter requestParameters.shipmentNumber was null or undefined when calling saveMultiPieceShipmentPackages.');
        }

        if (requestParameters.saveMpsPackagesRequestDto === null || requestParameters.saveMpsPackagesRequestDto === undefined) {
            throw new runtime.RequiredError('saveMpsPackagesRequestDto','Required parameter requestParameters.saveMpsPackagesRequestDto was null or undefined when calling saveMultiPieceShipmentPackages.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.ifMatch !== undefined && requestParameters.ifMatch !== null) {
            headerParameters['If-Match'] = String(requestParameters.ifMatch);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/shipments/{shipmentNumber}/packages/mps`.replace(`{${"shipmentNumber"}}`, encodeURIComponent(String(requestParameters.shipmentNumber))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.saveMpsPackagesRequestDto,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * saveMultiPieceShipmentPackages
     * saveMultiPieceShipmentPackages
     */
    async saveMultiPieceShipmentPackages(requestParameters: shipmentPackagesApiParams.SaveMultiPieceShipmentPackagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfShipment> {
        const response = await this.saveMultiPieceShipmentPackagesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * updatePackage
     * updatePackage
     */


    async updatePackageRaw(requestParameters: shipmentPackagesApiParams.UpdatePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfShipment>> {
        if (requestParameters.packageId === null || requestParameters.packageId === undefined) {
            throw new runtime.RequiredError('packageId','Required parameter requestParameters.packageId was null or undefined when calling updatePackage.');
        }

        if (requestParameters.shipmentNumber === null || requestParameters.shipmentNumber === undefined) {
            throw new runtime.RequiredError('shipmentNumber','Required parameter requestParameters.shipmentNumber was null or undefined when calling updatePackage.');
        }

        if (requestParameters.packageDto === null || requestParameters.packageDto === undefined) {
            throw new runtime.RequiredError('packageDto','Required parameter requestParameters.packageDto was null or undefined when calling updatePackage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.ifMatch !== undefined && requestParameters.ifMatch !== null) {
            headerParameters['If-Match'] = String(requestParameters.ifMatch);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/shipments/{shipmentNumber}/packages/{packageId}`.replace(`{${"packageId"}}`, encodeURIComponent(String(requestParameters.packageId))).replace(`{${"shipmentNumber"}}`, encodeURIComponent(String(requestParameters.shipmentNumber))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.packageDto,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * updatePackage
     * updatePackage
     */
    async updatePackage(requestParameters: shipmentPackagesApiParams.UpdatePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfShipment> {
        const response = await this.updatePackageRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
