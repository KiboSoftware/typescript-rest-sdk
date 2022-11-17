/* tslint:disable */
/* eslint-disable */
/**
 * Kibo AppDev Service
 * OpenAPI Spec for Kibo AppDev Service
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
  ApplicationSummary,
  ApplicationSummaryCollection,
  Package,
  PackageCollection,
  PackageRequest,
  PackageSummaryCollection,
} from '../models';
import {
    ApplicationSummaryFromJSON,
    ApplicationSummaryToJSON,
    ApplicationSummaryCollectionFromJSON,
    ApplicationSummaryCollectionToJSON,
    PackageFromJSON,
    PackageToJSON,
    PackageCollectionFromJSON,
    PackageCollectionToJSON,
    PackageRequestFromJSON,
    PackageRequestToJSON,
    PackageSummaryCollectionFromJSON,
    PackageSummaryCollectionToJSON,
} from '../models';

export interface PackageApiClonePackageRequest {
    applicationKey: string;
    packageName: string;
}

export interface PackageApiCreateNewCorePackageRequest {
    packageRequest?: PackageRequest;
}

export interface PackageApiCreatePackageRequest {
    projectId?: number;
    _package?: Package;
}

export interface PackageApiDeletePackageRequest {
    applicationKey: string;
}

export interface PackageApiGetAllPackagesRequest {
    startIndex?: number;
    pageSize?: number;
    sortBy?: string;
    filter?: string;
}

export interface PackageApiGetApplicationSummaryChildrenRequest {
    appId: string;
}

export interface PackageApiGetApplicationSummaryParentsRequest {
    startIndex?: number;
    pageSize?: number;
    sortBy?: string;
    filter?: string;
}

export interface PackageApiGetPackageRequest {
    applicationKey: string;
    includeChildren?: boolean;
    skipDevAccountCheck?: boolean;
}

export interface PackageApiGetPackagesRequest {
    applicationKey: string;
    startIndex?: number;
    pageSize?: number;
    sortBy?: string;
    filter?: string;
}

export interface PackageApiUpdatePackageRequest {
    applicationKey: string;
    _package?: Package;
}

/**
 * 
 */
export class PackageApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Use this operation to clone an existing package.
     * Clone Package
     */


    async clonePackageRaw(requestParameters: PackageApiClonePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Package>> {
        if (requestParameters.applicationKey === null || requestParameters.applicationKey === undefined) {
            throw new runtime.RequiredError('applicationKey','Required parameter requestParameters.applicationKey was null or undefined when calling clonePackage.');
        }

        if (requestParameters.packageName === null || requestParameters.packageName === undefined) {
            throw new runtime.RequiredError('packageName','Required parameter requestParameters.packageName was null or undefined when calling clonePackage.');
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
            path: `/platform/appdev/apppackages/{applicationKey}/clone/{packageName}`.replace(`{${"applicationKey"}}`, encodeURIComponent(String(requestParameters.applicationKey))).replace(`{${"packageName"}}`, encodeURIComponent(String(requestParameters.packageName))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PackageFromJSON(jsonValue));
    }

    /**
     * Use this operation to clone an existing package.
     * Clone Package
     */
    async clonePackage(requestParameters: PackageApiClonePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Package> {
        const response = await this.clonePackageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Save as new version of the application core with only a release package included.
     * Create New Core Package
     */


    async createNewCorePackageRaw(requestParameters: PackageApiCreateNewCorePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Package>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





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
            path: `/platform/appdev/apppackages/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PackageRequestToJSON(requestParameters.packageRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PackageFromJSON(jsonValue));
    }

    /**
     * Save as new version of the application core with only a release package included.
     * Create New Core Package
     */
    async createNewCorePackage(requestParameters: PackageApiCreateNewCorePackageRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Package> {
        const response = await this.createNewCorePackageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Create Package
     */


    async createPackageRaw(requestParameters: PackageApiCreatePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Package>> {
        const queryParameters: any = {};

        if (requestParameters.projectId !== undefined) {
            queryParameters['projectId'] = requestParameters.projectId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





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
            path: `/platform/appdev/apppackages/project`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PackageToJSON(requestParameters._package),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PackageFromJSON(jsonValue));
    }

    /**
     * 
     * Create Package
     */
    async createPackage(requestParameters: PackageApiCreatePackageRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Package> {
        const response = await this.createPackageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Use thi operatin to logically delete a package.
     * Delete Package
     */


    async deletePackageRaw(requestParameters: PackageApiDeletePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.applicationKey === null || requestParameters.applicationKey === undefined) {
            throw new runtime.RequiredError('applicationKey','Required parameter requestParameters.applicationKey was null or undefined when calling deletePackage.');
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
            path: `/platform/appdev/apppackages/{applicationKey}`.replace(`{${"applicationKey"}}`, encodeURIComponent(String(requestParameters.applicationKey))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Use thi operatin to logically delete a package.
     * Delete Package
     */
    async deletePackage(requestParameters: PackageApiDeletePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePackageRaw(requestParameters, initOverrides);
    }

    /**
     * Get all packages for a given Developer Account.
     * Get All Packages
     */


    async getAllPackagesRaw(requestParameters: PackageApiGetAllPackagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PackageSummaryCollection>> {
        const queryParameters: any = {};

        if (requestParameters.startIndex !== undefined) {
            queryParameters['startIndex'] = requestParameters.startIndex;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.sortBy !== undefined) {
            queryParameters['sortBy'] = requestParameters.sortBy;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
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
            path: `/platform/appdev/apppackages`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PackageSummaryCollectionFromJSON(jsonValue));
    }

    /**
     * Get all packages for a given Developer Account.
     * Get All Packages
     */
    async getAllPackages(requestParameters: PackageApiGetAllPackagesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PackageSummaryCollection> {
        const response = await this.getAllPackagesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Get Application Summary Children
     */


    async getApplicationSummaryChildrenRaw(requestParameters: PackageApiGetApplicationSummaryChildrenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ApplicationSummary>>> {
        if (requestParameters.appId === null || requestParameters.appId === undefined) {
            throw new runtime.RequiredError('appId','Required parameter requestParameters.appId was null or undefined when calling getApplicationSummaryChildren.');
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
            path: `/platform/appdev/apppackages/apps/{appId}`.replace(`{${"appId"}}`, encodeURIComponent(String(requestParameters.appId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ApplicationSummaryFromJSON));
    }

    /**
     * 
     * Get Application Summary Children
     */
    async getApplicationSummaryChildren(requestParameters: PackageApiGetApplicationSummaryChildrenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ApplicationSummary>> {
        const response = await this.getApplicationSummaryChildrenRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Get Application Summary Parents
     */


    async getApplicationSummaryParentsRaw(requestParameters: PackageApiGetApplicationSummaryParentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApplicationSummaryCollection>> {
        const queryParameters: any = {};

        if (requestParameters.startIndex !== undefined) {
            queryParameters['startIndex'] = requestParameters.startIndex;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.sortBy !== undefined) {
            queryParameters['sortBy'] = requestParameters.sortBy;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
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
            path: `/platform/appdev/apppackages/collection`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApplicationSummaryCollectionFromJSON(jsonValue));
    }

    /**
     * 
     * Get Application Summary Parents
     */
    async getApplicationSummaryParents(requestParameters: PackageApiGetApplicationSummaryParentsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApplicationSummaryCollection> {
        const response = await this.getApplicationSummaryParentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Use this operation to retrieve the package for the requested  package and its associated application core information.
     * Get Package
     */


    async getPackageRaw(requestParameters: PackageApiGetPackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Package>> {
        if (requestParameters.applicationKey === null || requestParameters.applicationKey === undefined) {
            throw new runtime.RequiredError('applicationKey','Required parameter requestParameters.applicationKey was null or undefined when calling getPackage.');
        }

        const queryParameters: any = {};

        if (requestParameters.includeChildren !== undefined) {
            queryParameters['includeChildren'] = requestParameters.includeChildren;
        }

        if (requestParameters.skipDevAccountCheck !== undefined) {
            queryParameters['skipDevAccountCheck'] = requestParameters.skipDevAccountCheck;
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
            path: `/platform/appdev/apppackages/{applicationKey}`.replace(`{${"applicationKey"}}`, encodeURIComponent(String(requestParameters.applicationKey))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PackageFromJSON(jsonValue));
    }

    /**
     * Use this operation to retrieve the package for the requested  package and its associated application core information.
     * Get Package
     */
    async getPackage(requestParameters: PackageApiGetPackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Package> {
        const response = await this.getPackageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Use this operation to retieve all packages for a given applicationKey.
     * Get Packages
     */


    async getPackagesRaw(requestParameters: PackageApiGetPackagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PackageCollection>> {
        if (requestParameters.applicationKey === null || requestParameters.applicationKey === undefined) {
            throw new runtime.RequiredError('applicationKey','Required parameter requestParameters.applicationKey was null or undefined when calling getPackages.');
        }

        const queryParameters: any = {};

        if (requestParameters.startIndex !== undefined) {
            queryParameters['startIndex'] = requestParameters.startIndex;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.sortBy !== undefined) {
            queryParameters['sortBy'] = requestParameters.sortBy;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
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
            path: `/platform/appdev/apppackages/applications/{applicationKey}/packages`.replace(`{${"applicationKey"}}`, encodeURIComponent(String(requestParameters.applicationKey))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PackageCollectionFromJSON(jsonValue));
    }

    /**
     * Use this operation to retieve all packages for a given applicationKey.
     * Get Packages
     */
    async getPackages(requestParameters: PackageApiGetPackagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PackageCollection> {
        const response = await this.getPackagesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Update Package
     */


    async updatePackageRaw(requestParameters: PackageApiUpdatePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Package>> {
        if (requestParameters.applicationKey === null || requestParameters.applicationKey === undefined) {
            throw new runtime.RequiredError('applicationKey','Required parameter requestParameters.applicationKey was null or undefined when calling updatePackage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





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
            path: `/platform/appdev/apppackages/{applicationKey}`.replace(`{${"applicationKey"}}`, encodeURIComponent(String(requestParameters.applicationKey))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PackageToJSON(requestParameters._package),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PackageFromJSON(jsonValue));
    }

    /**
     * 
     * Update Package
     */
    async updatePackage(requestParameters: PackageApiUpdatePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Package> {
        const response = await this.updatePackageRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
