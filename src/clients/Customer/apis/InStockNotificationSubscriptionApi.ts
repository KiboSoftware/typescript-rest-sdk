/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Customer Service
 * OpenAPI Spec for Kibo Customer Service
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
  InStockNotificationSubscription,
  InStockNotificationSubscriptionCollection,
} from '../models';
import {
    InStockNotificationSubscriptionFromJSON,
    InStockNotificationSubscriptionToJSON,
    InStockNotificationSubscriptionCollectionFromJSON,
    InStockNotificationSubscriptionCollectionToJSON,
} from '../models';

export interface InStockNotificationSubscriptionApiAddInStockNotificationSubscriptionRequest {
    inStockNotificationSubscription?: InStockNotificationSubscription;
}

export interface InStockNotificationSubscriptionApiDeleteInStockNotificationSubscriptionRequest {
    id: number;
}

export interface InStockNotificationSubscriptionApiGetInStockNotificationSubscriptionRequest {
    id: number;
}

export interface InStockNotificationSubscriptionApiGetInStockNotificationSubscriptionsRequest {
    startIndex?: number;
    pageSize?: number;
    sortBy?: string;
    filter?: string;
}

/**
 * 
 */
export class InStockNotificationSubscriptionApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Creates a new notification subscription.
     * Add In Stock Notification Subscription
     */


    async addInStockNotificationSubscriptionRaw(requestParameters: InStockNotificationSubscriptionApiAddInStockNotificationSubscriptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InStockNotificationSubscription>> {
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
            path: `/commerce/instocknotifications`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InStockNotificationSubscriptionToJSON(requestParameters.inStockNotificationSubscription),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InStockNotificationSubscriptionFromJSON(jsonValue));
    }

    /**
     * Creates a new notification subscription.
     * Add In Stock Notification Subscription
     */
    async addInStockNotificationSubscription(requestParameters: InStockNotificationSubscriptionApiAddInStockNotificationSubscriptionRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InStockNotificationSubscription> {
        const response = await this.addInStockNotificationSubscriptionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes an in stock notification subscription.
     * Delete In Stock Notification Subscription
     */


    async deleteInStockNotificationSubscriptionRaw(requestParameters: InStockNotificationSubscriptionApiDeleteInStockNotificationSubscriptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteInStockNotificationSubscription.');
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
            path: `/commerce/instocknotifications/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes an in stock notification subscription.
     * Delete In Stock Notification Subscription
     */
    async deleteInStockNotificationSubscription(requestParameters: InStockNotificationSubscriptionApiDeleteInStockNotificationSubscriptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteInStockNotificationSubscriptionRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves the details of an inventory back in stock notification.
     * Get In Stock Notification Subscription
     */


    async getInStockNotificationSubscriptionRaw(requestParameters: InStockNotificationSubscriptionApiGetInStockNotificationSubscriptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InStockNotificationSubscription>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getInStockNotificationSubscription.');
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
            path: `/commerce/instocknotifications/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InStockNotificationSubscriptionFromJSON(jsonValue));
    }

    /**
     * Retrieves the details of an inventory back in stock notification.
     * Get In Stock Notification Subscription
     */
    async getInStockNotificationSubscription(requestParameters: InStockNotificationSubscriptionApiGetInStockNotificationSubscriptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InStockNotificationSubscription> {
        const response = await this.getInStockNotificationSubscriptionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a list of inventory back in stock notification subscriptions according to any filter criteria and sort options.
     * Get In Stock Notification Subscriptions
     */


    async getInStockNotificationSubscriptionsRaw(requestParameters: InStockNotificationSubscriptionApiGetInStockNotificationSubscriptionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InStockNotificationSubscriptionCollection>> {
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
            path: `/commerce/instocknotifications`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InStockNotificationSubscriptionCollectionFromJSON(jsonValue));
    }

    /**
     * Retrieves a list of inventory back in stock notification subscriptions according to any filter criteria and sort options.
     * Get In Stock Notification Subscriptions
     */
    async getInStockNotificationSubscriptions(requestParameters: InStockNotificationSubscriptionApiGetInStockNotificationSubscriptionsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InStockNotificationSubscriptionCollection> {
        const response = await this.getInStockNotificationSubscriptionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}