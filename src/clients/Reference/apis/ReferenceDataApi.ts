/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Reference Service
 * OpenAPI Spec for Kibo Reference Service
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
  AddressSchema,
  AddressSchemaCollection,
  Behavior,
  BehaviorCategory,
  BehaviorCategoryCollection,
  BehaviorCollection,
  ContentLocaleCollection,
  CountryCollection,
  CountryWithStatesCollection,
  CurrencyCollection,
  TimeZoneCollection,
  TopLevelDomainCollection,
  UnitOfMeasureCollection,
} from '../models';
import {
    AddressSchemaFromJSON,
    AddressSchemaToJSON,
    AddressSchemaCollectionFromJSON,
    AddressSchemaCollectionToJSON,
    BehaviorFromJSON,
    BehaviorToJSON,
    BehaviorCategoryFromJSON,
    BehaviorCategoryToJSON,
    BehaviorCategoryCollectionFromJSON,
    BehaviorCategoryCollectionToJSON,
    BehaviorCollectionFromJSON,
    BehaviorCollectionToJSON,
    ContentLocaleCollectionFromJSON,
    ContentLocaleCollectionToJSON,
    CountryCollectionFromJSON,
    CountryCollectionToJSON,
    CountryWithStatesCollectionFromJSON,
    CountryWithStatesCollectionToJSON,
    CurrencyCollectionFromJSON,
    CurrencyCollectionToJSON,
    TimeZoneCollectionFromJSON,
    TimeZoneCollectionToJSON,
    TopLevelDomainCollectionFromJSON,
    TopLevelDomainCollectionToJSON,
    UnitOfMeasureCollectionFromJSON,
    UnitOfMeasureCollectionToJSON,
} from '../models';

export interface ReferenceDataApiGetAddressSchemaRequest {
    countryCode: string;
}

export interface ReferenceDataApiGetBehaviorRequest {
    behaviorId: number;
}

export interface ReferenceDataApiGetBehaviorCategoryRequest {
    categoryId: number;
}

export interface ReferenceDataApiGetBehaviorsRequest {
    userType?: string;
}

export interface ReferenceDataApiGetUnitsOfMeasureRequest {
    filter?: string;
}

/**
 * 
 */
export class ReferenceDataApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Get Address Schema
     * Get Address Schema
     */


    async getAddressSchemaRaw(requestParameters: ReferenceDataApiGetAddressSchemaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AddressSchema>> {
        if (requestParameters.countryCode === null || requestParameters.countryCode === undefined) {
            throw new runtime.RequiredError('countryCode','Required parameter requestParameters.countryCode was null or undefined when calling getAddressSchema.');
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
            path: `/platform/reference/addressschema/{countryCode}`.replace(`{${"countryCode"}}`, encodeURIComponent(String(requestParameters.countryCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AddressSchemaFromJSON(jsonValue));
    }

    /**
     * Get Address Schema
     * Get Address Schema
     */
    async getAddressSchema(requestParameters: ReferenceDataApiGetAddressSchemaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AddressSchema> {
        const response = await this.getAddressSchemaRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Address Schemas
     * Get Address Schemas
     */


    async getAddressSchemasRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AddressSchemaCollection>> {
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
            path: `/platform/reference/addressschemas`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AddressSchemaCollectionFromJSON(jsonValue));
    }

    /**
     * Get Address Schemas
     * Get Address Schemas
     */
    async getAddressSchemas(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AddressSchemaCollection> {
        const response = await this.getAddressSchemasRaw(initOverrides);
        return await response.value();
    }

    /**
     * 
     * Retrieves the details of a behavior specified by its behavior ID
     */


    async getBehaviorRaw(requestParameters: ReferenceDataApiGetBehaviorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Behavior>> {
        if (requestParameters.behaviorId === null || requestParameters.behaviorId === undefined) {
            throw new runtime.RequiredError('behaviorId','Required parameter requestParameters.behaviorId was null or undefined when calling getBehavior.');
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
            path: `/platform/reference/behaviors/{behaviorId}`.replace(`{${"behaviorId"}}`, encodeURIComponent(String(requestParameters.behaviorId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BehaviorFromJSON(jsonValue));
    }

    /**
     * 
     * Retrieves the details of a behavior specified by its behavior ID
     */
    async getBehavior(requestParameters: ReferenceDataApiGetBehaviorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Behavior> {
        const response = await this.getBehaviorRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Retrieves a list of all behavior categories
     */


    async getBehaviorCategoriesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BehaviorCategoryCollection>> {
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
            path: `/platform/reference/behaviors/categories`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BehaviorCategoryCollectionFromJSON(jsonValue));
    }

    /**
     * 
     * Retrieves a list of all behavior categories
     */
    async getBehaviorCategories(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BehaviorCategoryCollection> {
        const response = await this.getBehaviorCategoriesRaw(initOverrides);
        return await response.value();
    }

    /**
     * 
     * Retrieves the details of a behavior specified by its behavior ID
     */


    async getBehaviorCategoryRaw(requestParameters: ReferenceDataApiGetBehaviorCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BehaviorCategory>> {
        if (requestParameters.categoryId === null || requestParameters.categoryId === undefined) {
            throw new runtime.RequiredError('categoryId','Required parameter requestParameters.categoryId was null or undefined when calling getBehaviorCategory.');
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
            path: `/platform/reference/behaviors/categories/{categoryId}`.replace(`{${"categoryId"}}`, encodeURIComponent(String(requestParameters.categoryId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BehaviorCategoryFromJSON(jsonValue));
    }

    /**
     * 
     * Retrieves the details of a behavior specified by its behavior ID
     */
    async getBehaviorCategory(requestParameters: ReferenceDataApiGetBehaviorCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BehaviorCategory> {
        const response = await this.getBehaviorCategoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Retrieves a list of all behaviors
     */


    async getBehaviorsRaw(requestParameters: ReferenceDataApiGetBehaviorsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BehaviorCollection>> {
        const queryParameters: any = {};

        if (requestParameters.userType !== undefined) {
            queryParameters['userType'] = requestParameters.userType;
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
            path: `/platform/reference/behaviors`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BehaviorCollectionFromJSON(jsonValue));
    }

    /**
     * 
     * Retrieves a list of all behaviors
     */
    async getBehaviors(requestParameters: ReferenceDataApiGetBehaviorsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BehaviorCollection> {
        const response = await this.getBehaviorsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get the full list of Content Locales supported by the system
     * Get the full list of Content Locales supported by the system
     */


    async getContentLocalesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ContentLocaleCollection>> {
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
            path: `/platform/reference/contentLocales`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ContentLocaleCollectionFromJSON(jsonValue));
    }

    /**
     * Get the full list of Content Locales supported by the system
     * Get the full list of Content Locales supported by the system
     */
    async getContentLocales(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ContentLocaleCollection> {
        const response = await this.getContentLocalesRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get the full list of Countries supported by the system
     * Get the full list of Countries supported by the system
     */


    async getCountriesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CountryCollection>> {
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
            path: `/platform/reference/countries`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CountryCollectionFromJSON(jsonValue));
    }

    /**
     * Get the full list of Countries supported by the system
     * Get the full list of Countries supported by the system
     */
    async getCountries(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CountryCollection> {
        const response = await this.getCountriesRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get the full list of Countries supported by the system
     * Get the full list of Countries supported by the system
     */


    async getCountriesWithStatesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CountryWithStatesCollection>> {
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
            path: `/platform/reference/countrieswithstates`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CountryWithStatesCollectionFromJSON(jsonValue));
    }

    /**
     * Get the full list of Countries supported by the system
     * Get the full list of Countries supported by the system
     */
    async getCountriesWithStates(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CountryWithStatesCollection> {
        const response = await this.getCountriesWithStatesRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get the full list of Currencies supported by the system
     * Get the full list of Currencies supported by the system
     */


    async getCurrenciesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CurrencyCollection>> {
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
            path: `/platform/reference/currencies`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CurrencyCollectionFromJSON(jsonValue));
    }

    /**
     * Get the full list of Currencies supported by the system
     * Get the full list of Currencies supported by the system
     */
    async getCurrencies(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CurrencyCollection> {
        const response = await this.getCurrenciesRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get the full list of TimeZones supported by the system
     * Get the full list of TimeZones supported by the system
     */


    async getTimeZonesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TimeZoneCollection>> {
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
            path: `/platform/reference/timezones`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TimeZoneCollectionFromJSON(jsonValue));
    }

    /**
     * Get the full list of TimeZones supported by the system
     * Get the full list of TimeZones supported by the system
     */
    async getTimeZones(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TimeZoneCollection> {
        const response = await this.getTimeZonesRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get a full list of the supported top level domains
     * Get a full list of the supported top level domains
     */


    async getTopLevelDomainsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TopLevelDomainCollection>> {
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
            path: `/platform/reference/topleveldomains`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TopLevelDomainCollectionFromJSON(jsonValue));
    }

    /**
     * Get a full list of the supported top level domains
     * Get a full list of the supported top level domains
     */
    async getTopLevelDomains(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TopLevelDomainCollection> {
        const response = await this.getTopLevelDomainsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get a full list of the units of measure
     * Get a full list of the units of measure
     */


    async getUnitsOfMeasureRaw(requestParameters: ReferenceDataApiGetUnitsOfMeasureRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UnitOfMeasureCollection>> {
        const queryParameters: any = {};

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
            path: `/platform/reference/unitsofmeasure`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UnitOfMeasureCollectionFromJSON(jsonValue));
    }

    /**
     * Get a full list of the units of measure
     * Get a full list of the units of measure
     */
    async getUnitsOfMeasure(requestParameters: ReferenceDataApiGetUnitsOfMeasureRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UnitOfMeasureCollection> {
        const response = await this.getUnitsOfMeasureRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
