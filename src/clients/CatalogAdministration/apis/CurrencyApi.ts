/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Admin Services
 * OpenAPI Spec for Kibo Catalog Admin Services
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
  CurrencyExchangeRate,
  CurrencyExchangeRateCollection,
  CurrencyLocalization,
  CurrencyLocalizationCollection,
} from '../models';
import {
    CurrencyExchangeRateFromJSON,
    CurrencyExchangeRateToJSON,
    CurrencyExchangeRateCollectionFromJSON,
    CurrencyExchangeRateCollectionToJSON,
    CurrencyLocalizationFromJSON,
    CurrencyLocalizationToJSON,
    CurrencyLocalizationCollectionFromJSON,
    CurrencyLocalizationCollectionToJSON,
} from '../models';

export interface CurrencyApiAddCurrencyExchangeRatesRequest {
    currencyCode: string;
    currencyExchangeRate?: Array<CurrencyExchangeRate>;
}

export interface CurrencyApiAddCurrencyLocalizationRequest {
    currencyLocalization?: CurrencyLocalization;
}

export interface CurrencyApiDeleteCurrencyExchangeRateRequest {
    currencyCode: string;
    toCurrencyCode: string;
}

export interface CurrencyApiDeleteCurrencyLocalizationRequest {
    currencyCode: string;
}

export interface CurrencyApiGetCurrencyExchangeRateRequest {
    currencyCode: string;
    toCurrencyCode: string;
}

export interface CurrencyApiGetCurrencyExchangeRatesRequest {
    currencyCode: string;
}

export interface CurrencyApiGetCurrencyLocalizationRequest {
    currencyCode: string;
}

export interface CurrencyApiUpdateCurrencyExchangeRatesRequest {
    currencyCode: string;
    currencyExchangeRate?: Array<CurrencyExchangeRate>;
}

export interface CurrencyApiUpdateCurrencyLocalizationRequest {
    currencyCode: string;
    currencyLocalization?: CurrencyLocalization;
}

/**
 * 
 */
export class CurrencyApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Updates the details of a currency-localization.
     * Update currency localization
     */


    async addCurrencyExchangeRatesRaw(requestParameters: CurrencyApiAddCurrencyExchangeRatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.currencyCode === null || requestParameters.currencyCode === undefined) {
            throw new runtime.RequiredError('currencyCode','Required parameter requestParameters.currencyCode was null or undefined when calling addCurrencyExchangeRates.');
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
            path: `/commerce/catalog/admin/currency/{currencyCode}/exchangerates`.replace(`{${"currencyCode"}}`, encodeURIComponent(String(requestParameters.currencyCode))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.currencyExchangeRate.map(CurrencyExchangeRateToJSON),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates the details of a currency-localization.
     * Update currency localization
     */
    async addCurrencyExchangeRates(requestParameters: CurrencyApiAddCurrencyExchangeRatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.addCurrencyExchangeRatesRaw(requestParameters, initOverrides);
    }

    /**
     * Adds a new currency localization
     * Add currency localization
     */


    async addCurrencyLocalizationRaw(requestParameters: CurrencyApiAddCurrencyLocalizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CurrencyLocalization>> {
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
            path: `/commerce/catalog/admin/currency`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CurrencyLocalizationToJSON(requestParameters.currencyLocalization),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CurrencyLocalizationFromJSON(jsonValue));
    }

    /**
     * Adds a new currency localization
     * Add currency localization
     */
    async addCurrencyLocalization(requestParameters: CurrencyApiAddCurrencyLocalizationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CurrencyLocalization> {
        const response = await this.addCurrencyLocalizationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a single exchange rate for a specified currency-code and target currency-code.
     * Delete currency exchange rate
     */


    async deleteCurrencyExchangeRateRaw(requestParameters: CurrencyApiDeleteCurrencyExchangeRateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.currencyCode === null || requestParameters.currencyCode === undefined) {
            throw new runtime.RequiredError('currencyCode','Required parameter requestParameters.currencyCode was null or undefined when calling deleteCurrencyExchangeRate.');
        }

        if (requestParameters.toCurrencyCode === null || requestParameters.toCurrencyCode === undefined) {
            throw new runtime.RequiredError('toCurrencyCode','Required parameter requestParameters.toCurrencyCode was null or undefined when calling deleteCurrencyExchangeRate.');
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
            path: `/commerce/catalog/admin/currency/{currencyCode}/exchangerates/{toCurrencyCode}`.replace(`{${"currencyCode"}}`, encodeURIComponent(String(requestParameters.currencyCode))).replace(`{${"toCurrencyCode"}}`, encodeURIComponent(String(requestParameters.toCurrencyCode))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a single exchange rate for a specified currency-code and target currency-code.
     * Delete currency exchange rate
     */
    async deleteCurrencyExchangeRate(requestParameters: CurrencyApiDeleteCurrencyExchangeRateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCurrencyExchangeRateRaw(requestParameters, initOverrides);
    }

    /**
     * Deletes the currency-localization specified by its currency code.
     * Delete currency localization
     */


    async deleteCurrencyLocalizationRaw(requestParameters: CurrencyApiDeleteCurrencyLocalizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.currencyCode === null || requestParameters.currencyCode === undefined) {
            throw new runtime.RequiredError('currencyCode','Required parameter requestParameters.currencyCode was null or undefined when calling deleteCurrencyLocalization.');
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
            path: `/commerce/catalog/admin/currency/{currencyCode}`.replace(`{${"currencyCode"}}`, encodeURIComponent(String(requestParameters.currencyCode))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes the currency-localization specified by its currency code.
     * Delete currency localization
     */
    async deleteCurrencyLocalization(requestParameters: CurrencyApiDeleteCurrencyLocalizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCurrencyLocalizationRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves a single exchange rate for a specified currency-code and target-currency-code.
     * Get currency exchange rate
     */


    async getCurrencyExchangeRateRaw(requestParameters: CurrencyApiGetCurrencyExchangeRateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CurrencyExchangeRate>> {
        if (requestParameters.currencyCode === null || requestParameters.currencyCode === undefined) {
            throw new runtime.RequiredError('currencyCode','Required parameter requestParameters.currencyCode was null or undefined when calling getCurrencyExchangeRate.');
        }

        if (requestParameters.toCurrencyCode === null || requestParameters.toCurrencyCode === undefined) {
            throw new runtime.RequiredError('toCurrencyCode','Required parameter requestParameters.toCurrencyCode was null or undefined when calling getCurrencyExchangeRate.');
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
            path: `/commerce/catalog/admin/currency/{currencyCode}/exchangerates/{toCurrencyCode}`.replace(`{${"currencyCode"}}`, encodeURIComponent(String(requestParameters.currencyCode))).replace(`{${"toCurrencyCode"}}`, encodeURIComponent(String(requestParameters.toCurrencyCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CurrencyExchangeRateFromJSON(jsonValue));
    }

    /**
     * Retrieves a single exchange rate for a specified currency-code and target-currency-code.
     * Get currency exchange rate
     */
    async getCurrencyExchangeRate(requestParameters: CurrencyApiGetCurrencyExchangeRateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CurrencyExchangeRate> {
        const response = await this.getCurrencyExchangeRateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a list of exchange rates for a specified currency-code and filter criteria.
     * Get currency exchange rates
     */


    async getCurrencyExchangeRatesRaw(requestParameters: CurrencyApiGetCurrencyExchangeRatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CurrencyExchangeRateCollection>> {
        if (requestParameters.currencyCode === null || requestParameters.currencyCode === undefined) {
            throw new runtime.RequiredError('currencyCode','Required parameter requestParameters.currencyCode was null or undefined when calling getCurrencyExchangeRates.');
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
            path: `/commerce/catalog/admin/currency/{currencyCode}/exchangerates`.replace(`{${"currencyCode"}}`, encodeURIComponent(String(requestParameters.currencyCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CurrencyExchangeRateCollectionFromJSON(jsonValue));
    }

    /**
     * Retrieves a list of exchange rates for a specified currency-code and filter criteria.
     * Get currency exchange rates
     */
    async getCurrencyExchangeRates(requestParameters: CurrencyApiGetCurrencyExchangeRatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CurrencyExchangeRateCollection> {
        const response = await this.getCurrencyExchangeRatesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets a single currency-localization.
     * Get currency localization
     */


    async getCurrencyLocalizationRaw(requestParameters: CurrencyApiGetCurrencyLocalizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CurrencyLocalization>> {
        if (requestParameters.currencyCode === null || requestParameters.currencyCode === undefined) {
            throw new runtime.RequiredError('currencyCode','Required parameter requestParameters.currencyCode was null or undefined when calling getCurrencyLocalization.');
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
            path: `/commerce/catalog/admin/currency/{currencyCode}`.replace(`{${"currencyCode"}}`, encodeURIComponent(String(requestParameters.currencyCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CurrencyLocalizationFromJSON(jsonValue));
    }

    /**
     * Gets a single currency-localization.
     * Get currency localization
     */
    async getCurrencyLocalization(requestParameters: CurrencyApiGetCurrencyLocalizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CurrencyLocalization> {
        const response = await this.getCurrencyLocalizationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets all currency-localizations.
     * Get currency localizations
     */


    async getCurrencyLocalizationsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CurrencyLocalizationCollection>> {
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
            path: `/commerce/catalog/admin/currency`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CurrencyLocalizationCollectionFromJSON(jsonValue));
    }

    /**
     * Gets all currency-localizations.
     * Get currency localizations
     */
    async getCurrencyLocalizations(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CurrencyLocalizationCollection> {
        const response = await this.getCurrencyLocalizationsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Update multiple exchange rates for a specified currency-code.
     * Update currency exchange rates
     */


    async updateCurrencyExchangeRatesRaw(requestParameters: CurrencyApiUpdateCurrencyExchangeRatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.currencyCode === null || requestParameters.currencyCode === undefined) {
            throw new runtime.RequiredError('currencyCode','Required parameter requestParameters.currencyCode was null or undefined when calling updateCurrencyExchangeRates.');
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
            path: `/commerce/catalog/admin/currency/{currencyCode}/exchangerates`.replace(`{${"currencyCode"}}`, encodeURIComponent(String(requestParameters.currencyCode))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.currencyExchangeRate.map(CurrencyExchangeRateToJSON),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update multiple exchange rates for a specified currency-code.
     * Update currency exchange rates
     */
    async updateCurrencyExchangeRates(requestParameters: CurrencyApiUpdateCurrencyExchangeRatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateCurrencyExchangeRatesRaw(requestParameters, initOverrides);
    }

    /**
     * Updates the details of a currency-localization.
     * Update currency localization
     */


    async updateCurrencyLocalizationRaw(requestParameters: CurrencyApiUpdateCurrencyLocalizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CurrencyLocalization>> {
        if (requestParameters.currencyCode === null || requestParameters.currencyCode === undefined) {
            throw new runtime.RequiredError('currencyCode','Required parameter requestParameters.currencyCode was null or undefined when calling updateCurrencyLocalization.');
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
            path: `/commerce/catalog/admin/currency/{currencyCode}`.replace(`{${"currencyCode"}}`, encodeURIComponent(String(requestParameters.currencyCode))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CurrencyLocalizationToJSON(requestParameters.currencyLocalization),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CurrencyLocalizationFromJSON(jsonValue));
    }

    /**
     * Updates the details of a currency-localization.
     * Update currency localization
     */
    async updateCurrencyLocalization(requestParameters: CurrencyApiUpdateCurrencyLocalizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CurrencyLocalization> {
        const response = await this.updateCurrencyLocalizationRaw(requestParameters, initOverrides);
        return await response.value();
    }

}