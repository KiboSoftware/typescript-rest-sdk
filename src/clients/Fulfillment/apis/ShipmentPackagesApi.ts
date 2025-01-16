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
  EntityModelShipmentDto,
  ErrorItem,
  PackageDto,
  RemoveSpecificShipmentFromConsolidationGroup400Response,
  SaveMpsPackagesRequestDto,
  ShipmentDto,
} from '../models';


export namespace shipmentPackagesApiParams { 
    export interface DeleteShipmentPackageRequest {
        shipmentNumber: number;
        packageId: string;
        ifMatch?: string;
    }
    export interface DeleteShipmentPackagesRequest {
        shipmentNumber: number;
        ifMatch?: string;
    }
    export interface NewPackageRequest {
        shipmentNumber: number;
        packageDto: PackageDto;
        ifMatch?: string;
    }
    export interface NewPackagesRequest {
        shipmentNumber: number;
        packageDto: Array<PackageDto>;
        ifMatch?: string;
    }
    export interface RemoveShippingInformationRequest {
        shipmentNumber: number;
        ifMatch?: string;
    }
    export interface SaveMultiPieceShipmentPackagesRequest {
        shipmentNumber: number;
        saveMpsPackagesRequestDto: SaveMpsPackagesRequestDto;
        ifMatch?: string;
    }
    export interface UpdatePackageRequest {
        shipmentNumber: number;
        packageId: string;
        packageDto: PackageDto;
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
    * Delete Shipment Package
    * @summary Delete Shipment Package
    * @param {number} shipmentNumber 
    * @param {string} packageId 
    * @param {string} [ifMatch] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ShipmentPackagesApiInterface
    */
    deleteShipmentPackageRaw(requestParameters: shipmentPackagesApiParams.DeleteShipmentPackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Delete Shipment Package
    * Delete Shipment Package
    */
    deleteShipmentPackage(requestParameters: shipmentPackagesApiParams.DeleteShipmentPackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Delete Shipment Packages
    * @summary Delete Shipment Packages
    * @param {number} shipmentNumber 
    * @param {string} [ifMatch] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ShipmentPackagesApiInterface
    */
    deleteShipmentPackagesRaw(requestParameters: shipmentPackagesApiParams.DeleteShipmentPackagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelShipmentDto>>;

    /**
    * Delete Shipment Packages
    * Delete Shipment Packages
    */
    deleteShipmentPackages(requestParameters: shipmentPackagesApiParams.DeleteShipmentPackagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelShipmentDto>;

    /**
    * Create Shipment Package
    * @summary Create Shipment Package
    * @param {number} shipmentNumber 
    * @param {PackageDto} packageDto 
    * @param {string} [ifMatch] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ShipmentPackagesApiInterface
    */
    newPackageRaw(requestParameters: shipmentPackagesApiParams.NewPackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelShipmentDto>>;

    /**
    * Create Shipment Package
    * Create Shipment Package
    */
    newPackage(requestParameters: shipmentPackagesApiParams.NewPackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelShipmentDto>;

    /**
    * Bulk Create Shipment Packages
    * @summary Bulk Create Shipment Packages
    * @param {number} shipmentNumber 
    * @param {Array<PackageDto>} packageDto 
    * @param {string} [ifMatch] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ShipmentPackagesApiInterface
    */
    newPackagesRaw(requestParameters: shipmentPackagesApiParams.NewPackagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelShipmentDto>>;

    /**
    * Bulk Create Shipment Packages
    * Bulk Create Shipment Packages
    */
    newPackages(requestParameters: shipmentPackagesApiParams.NewPackagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelShipmentDto>;

    /**
    * Delete Shipment Packages Information
    * @summary Delete Shipment Packages Information
    * @param {number} shipmentNumber 
    * @param {string} [ifMatch] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ShipmentPackagesApiInterface
    */
    removeShippingInformationRaw(requestParameters: shipmentPackagesApiParams.RemoveShippingInformationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelShipmentDto>>;

    /**
    * Delete Shipment Packages Information
    * Delete Shipment Packages Information
    */
    removeShippingInformation(requestParameters: shipmentPackagesApiParams.RemoveShippingInformationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelShipmentDto>;

    /**
    * Save Multi-Piece Shipment Packages
    * @summary Save Multi-Piece Shipment Packages
    * @param {number} shipmentNumber 
    * @param {SaveMpsPackagesRequestDto} saveMpsPackagesRequestDto 
    * @param {string} [ifMatch] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ShipmentPackagesApiInterface
    */
    saveMultiPieceShipmentPackagesRaw(requestParameters: shipmentPackagesApiParams.SaveMultiPieceShipmentPackagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ShipmentDto>>;

    /**
    * Save Multi-Piece Shipment Packages
    * Save Multi-Piece Shipment Packages
    */
    saveMultiPieceShipmentPackages(requestParameters: shipmentPackagesApiParams.SaveMultiPieceShipmentPackagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ShipmentDto>;

    /**
    * Update Shipment Package
    * @summary Update Shipment Package
    * @param {number} shipmentNumber 
    * @param {string} packageId 
    * @param {PackageDto} packageDto 
    * @param {string} [ifMatch] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ShipmentPackagesApiInterface
    */
    updatePackageRaw(requestParameters: shipmentPackagesApiParams.UpdatePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelShipmentDto>>;

    /**
    * Update Shipment Package
    * Update Shipment Package
    */
    updatePackage(requestParameters: shipmentPackagesApiParams.UpdatePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelShipmentDto>;

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
     * Delete Shipment Package
     * Delete Shipment Package
     */


    async deleteShipmentPackageRaw(requestParameters: shipmentPackagesApiParams.DeleteShipmentPackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.shipmentNumber === null || requestParameters.shipmentNumber === undefined) {
            throw new runtime.RequiredError('shipmentNumber','Required parameter requestParameters.shipmentNumber was null or undefined when calling deleteShipmentPackage.');
        }

        if (requestParameters.packageId === null || requestParameters.packageId === undefined) {
            throw new runtime.RequiredError('packageId','Required parameter requestParameters.packageId was null or undefined when calling deleteShipmentPackage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.ifMatch !== undefined && requestParameters.ifMatch !== null) {
            headerParameters['If-Match'] = String(requestParameters.ifMatch);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/shipments/{shipmentNumber}/packages/{packageId}`.replace(`{${"shipmentNumber"}}`, encodeURIComponent(String(requestParameters.shipmentNumber))).replace(`{${"packageId"}}`, encodeURIComponent(String(requestParameters.packageId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete Shipment Package
     * Delete Shipment Package
     */
    async deleteShipmentPackage(requestParameters: shipmentPackagesApiParams.DeleteShipmentPackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteShipmentPackageRaw(requestParameters, initOverrides);
    }

    /**
     * Delete Shipment Packages
     * Delete Shipment Packages
     */


    async deleteShipmentPackagesRaw(requestParameters: shipmentPackagesApiParams.DeleteShipmentPackagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelShipmentDto>> {
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
     * Delete Shipment Packages
     * Delete Shipment Packages
     */
    async deleteShipmentPackages(requestParameters: shipmentPackagesApiParams.DeleteShipmentPackagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelShipmentDto> {
        const response = await this.deleteShipmentPackagesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create Shipment Package
     * Create Shipment Package
     */


    async newPackageRaw(requestParameters: shipmentPackagesApiParams.NewPackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelShipmentDto>> {
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
     * Create Shipment Package
     * Create Shipment Package
     */
    async newPackage(requestParameters: shipmentPackagesApiParams.NewPackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelShipmentDto> {
        const response = await this.newPackageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Bulk Create Shipment Packages
     * Bulk Create Shipment Packages
     */


    async newPackagesRaw(requestParameters: shipmentPackagesApiParams.NewPackagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelShipmentDto>> {
        if (requestParameters.shipmentNumber === null || requestParameters.shipmentNumber === undefined) {
            throw new runtime.RequiredError('shipmentNumber','Required parameter requestParameters.shipmentNumber was null or undefined when calling newPackages.');
        }

        if (requestParameters.packageDto === null || requestParameters.packageDto === undefined) {
            throw new runtime.RequiredError('packageDto','Required parameter requestParameters.packageDto was null or undefined when calling newPackages.');
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
            body: requestParameters.packageDto,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Bulk Create Shipment Packages
     * Bulk Create Shipment Packages
     */
    async newPackages(requestParameters: shipmentPackagesApiParams.NewPackagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelShipmentDto> {
        const response = await this.newPackagesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete Shipment Packages Information
     * Delete Shipment Packages Information
     */


    async removeShippingInformationRaw(requestParameters: shipmentPackagesApiParams.RemoveShippingInformationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelShipmentDto>> {
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
     * Delete Shipment Packages Information
     * Delete Shipment Packages Information
     */
    async removeShippingInformation(requestParameters: shipmentPackagesApiParams.RemoveShippingInformationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelShipmentDto> {
        const response = await this.removeShippingInformationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Save Multi-Piece Shipment Packages
     * Save Multi-Piece Shipment Packages
     */


    async saveMultiPieceShipmentPackagesRaw(requestParameters: shipmentPackagesApiParams.SaveMultiPieceShipmentPackagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ShipmentDto>> {
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
     * Save Multi-Piece Shipment Packages
     * Save Multi-Piece Shipment Packages
     */
    async saveMultiPieceShipmentPackages(requestParameters: shipmentPackagesApiParams.SaveMultiPieceShipmentPackagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ShipmentDto> {
        const response = await this.saveMultiPieceShipmentPackagesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Shipment Package
     * Update Shipment Package
     */


    async updatePackageRaw(requestParameters: shipmentPackagesApiParams.UpdatePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelShipmentDto>> {
        if (requestParameters.shipmentNumber === null || requestParameters.shipmentNumber === undefined) {
            throw new runtime.RequiredError('shipmentNumber','Required parameter requestParameters.shipmentNumber was null or undefined when calling updatePackage.');
        }

        if (requestParameters.packageId === null || requestParameters.packageId === undefined) {
            throw new runtime.RequiredError('packageId','Required parameter requestParameters.packageId was null or undefined when calling updatePackage.');
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
            path: `/commerce/shipments/{shipmentNumber}/packages/{packageId}`.replace(`{${"shipmentNumber"}}`, encodeURIComponent(String(requestParameters.shipmentNumber))).replace(`{${"packageId"}}`, encodeURIComponent(String(requestParameters.packageId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.packageDto,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update Shipment Package
     * Update Shipment Package
     */
    async updatePackage(requestParameters: shipmentPackagesApiParams.UpdatePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelShipmentDto> {
        const response = await this.updatePackageRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
