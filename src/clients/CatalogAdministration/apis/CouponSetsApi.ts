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
  AssignedDiscount,
  Coupon,
  CouponCollection,
  CouponSet,
  CouponSetCollection,
} from '../models';
import {
    AssignedDiscountFromJSON,
    AssignedDiscountToJSON,
    CouponFromJSON,
    CouponToJSON,
    CouponCollectionFromJSON,
    CouponCollectionToJSON,
    CouponSetFromJSON,
    CouponSetToJSON,
    CouponSetCollectionFromJSON,
    CouponSetCollectionToJSON,
} from '../models';

export interface CouponSetsApiAddCouponSetRequest {
    couponSet?: CouponSet;
}

export interface CouponSetsApiAddCouponsRequest {
    couponSetCode: string;
    coupon?: Array<Coupon>;
}

export interface CouponSetsApiAssignDiscountRequest {
    couponSetCode: string;
    assignedDiscount?: AssignedDiscount;
}

export interface CouponSetsApiDeleteCouponRequest {
    couponSetCode: string;
    couponCode: string;
}

export interface CouponSetsApiDeleteCouponSetRequest {
    couponSetCode: string;
}

export interface CouponSetsApiDeleteCouponsRequest {
    couponSetCode: string;
    requestBody?: Array<string>;
}

export interface CouponSetsApiGetAssignedDiscountsRequest {
    couponSetCode: string;
}

export interface CouponSetsApiGetCouponRequest {
    couponSetCode: string;
    couponCode: string;
    includeCounts?: boolean;
    responseGroups?: string;
}

export interface CouponSetsApiGetCouponSetRequest {
    couponSetCode: string;
    includeCounts?: boolean;
    responseGroups?: string;
}

export interface CouponSetsApiGetCouponSetsRequest {
    startIndex?: number;
    pageSize?: number;
    sortBy?: string;
    filter?: string;
    includeCounts?: boolean;
    responseGroups?: string;
}

export interface CouponSetsApiGetCouponsRequest {
    couponSetCode: string;
    startIndex?: number;
    pageSize?: number;
    sortBy?: string;
    filter?: string;
    includeCounts?: boolean;
    responseGroups?: string;
}

export interface CouponSetsApiUnAssignDiscountRequest {
    couponSetCode: string;
    discountId: number;
}

export interface CouponSetsApiUpdateCouponSetRequest {
    couponSetCode: string;
    couponSet?: CouponSet;
}

export interface CouponSetsApiValidateUniqueCouponSetCodeRequest {
    code?: string;
}

/**
 * 
 */
export class CouponSetsApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Adds a single CouponSet
     * Add coupon set
     */


    async addCouponSetRaw(requestParameters: CouponSetsApiAddCouponSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CouponSet>> {
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
            path: `/commerce/catalog/admin/couponsets`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CouponSetToJSON(requestParameters.couponSet),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CouponSetFromJSON(jsonValue));
    }

    /**
     * Adds a single CouponSet
     * Add coupon set
     */
    async addCouponSet(requestParameters: CouponSetsApiAddCouponSetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CouponSet> {
        const response = await this.addCouponSetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Add coupons
     */


    async addCouponsRaw(requestParameters: CouponSetsApiAddCouponsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.couponSetCode === null || requestParameters.couponSetCode === undefined) {
            throw new runtime.RequiredError('couponSetCode','Required parameter requestParameters.couponSetCode was null or undefined when calling addCoupons.');
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
            path: `/commerce/catalog/admin/couponsets/{couponSetCode}/couponcodes`.replace(`{${"couponSetCode"}}`, encodeURIComponent(String(requestParameters.couponSetCode))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.coupon.map(CouponToJSON),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 
     * Add coupons
     */
    async addCoupons(requestParameters: CouponSetsApiAddCouponsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.addCouponsRaw(requestParameters, initOverrides);
    }

    /**
     * 
     * Assign discount
     */


    async assignDiscountRaw(requestParameters: CouponSetsApiAssignDiscountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.couponSetCode === null || requestParameters.couponSetCode === undefined) {
            throw new runtime.RequiredError('couponSetCode','Required parameter requestParameters.couponSetCode was null or undefined when calling assignDiscount.');
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
            path: `/commerce/catalog/admin/couponsets/{couponSetCode}/assigneddiscounts`.replace(`{${"couponSetCode"}}`, encodeURIComponent(String(requestParameters.couponSetCode))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AssignedDiscountToJSON(requestParameters.assignedDiscount),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 
     * Assign discount
     */
    async assignDiscount(requestParameters: CouponSetsApiAssignDiscountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.assignDiscountRaw(requestParameters, initOverrides);
    }

    /**
     * 
     * Delete coupon
     */


    async deleteCouponRaw(requestParameters: CouponSetsApiDeleteCouponRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.couponSetCode === null || requestParameters.couponSetCode === undefined) {
            throw new runtime.RequiredError('couponSetCode','Required parameter requestParameters.couponSetCode was null or undefined when calling deleteCoupon.');
        }

        if (requestParameters.couponCode === null || requestParameters.couponCode === undefined) {
            throw new runtime.RequiredError('couponCode','Required parameter requestParameters.couponCode was null or undefined when calling deleteCoupon.');
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
            path: `/commerce/catalog/admin/couponsets/{couponSetCode}/couponcodes/{couponCode}`.replace(`{${"couponSetCode"}}`, encodeURIComponent(String(requestParameters.couponSetCode))).replace(`{${"couponCode"}}`, encodeURIComponent(String(requestParameters.couponCode))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 
     * Delete coupon
     */
    async deleteCoupon(requestParameters: CouponSetsApiDeleteCouponRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCouponRaw(requestParameters, initOverrides);
    }

    /**
     * 
     * Delete coupon set
     */


    async deleteCouponSetRaw(requestParameters: CouponSetsApiDeleteCouponSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.couponSetCode === null || requestParameters.couponSetCode === undefined) {
            throw new runtime.RequiredError('couponSetCode','Required parameter requestParameters.couponSetCode was null or undefined when calling deleteCouponSet.');
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
            path: `/commerce/catalog/admin/couponsets/{couponSetCode}`.replace(`{${"couponSetCode"}}`, encodeURIComponent(String(requestParameters.couponSetCode))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 
     * Delete coupon set
     */
    async deleteCouponSet(requestParameters: CouponSetsApiDeleteCouponSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCouponSetRaw(requestParameters, initOverrides);
    }

    /**
     * 
     * Delete coupons
     */


    async deleteCouponsRaw(requestParameters: CouponSetsApiDeleteCouponsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.couponSetCode === null || requestParameters.couponSetCode === undefined) {
            throw new runtime.RequiredError('couponSetCode','Required parameter requestParameters.couponSetCode was null or undefined when calling deleteCoupons.');
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
            path: `/commerce/catalog/admin/couponsets/{couponSetCode}/couponcodes/remove`.replace(`{${"couponSetCode"}}`, encodeURIComponent(String(requestParameters.couponSetCode))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.requestBody,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 
     * Delete coupons
     */
    async deleteCoupons(requestParameters: CouponSetsApiDeleteCouponsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCouponsRaw(requestParameters, initOverrides);
    }

    /**
     * 
     * Get assigned discounts
     */


    async getAssignedDiscountsRaw(requestParameters: CouponSetsApiGetAssignedDiscountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<AssignedDiscount>>> {
        if (requestParameters.couponSetCode === null || requestParameters.couponSetCode === undefined) {
            throw new runtime.RequiredError('couponSetCode','Required parameter requestParameters.couponSetCode was null or undefined when calling getAssignedDiscounts.');
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
            path: `/commerce/catalog/admin/couponsets/{couponSetCode}/assigneddiscounts`.replace(`{${"couponSetCode"}}`, encodeURIComponent(String(requestParameters.couponSetCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(AssignedDiscountFromJSON));
    }

    /**
     * 
     * Get assigned discounts
     */
    async getAssignedDiscounts(requestParameters: CouponSetsApiGetAssignedDiscountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<AssignedDiscount>> {
        const response = await this.getAssignedDiscountsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Get coupon
     */


    async getCouponRaw(requestParameters: CouponSetsApiGetCouponRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Coupon>> {
        if (requestParameters.couponSetCode === null || requestParameters.couponSetCode === undefined) {
            throw new runtime.RequiredError('couponSetCode','Required parameter requestParameters.couponSetCode was null or undefined when calling getCoupon.');
        }

        if (requestParameters.couponCode === null || requestParameters.couponCode === undefined) {
            throw new runtime.RequiredError('couponCode','Required parameter requestParameters.couponCode was null or undefined when calling getCoupon.');
        }

        const queryParameters: any = {};

        if (requestParameters.includeCounts !== undefined) {
            queryParameters['includeCounts'] = requestParameters.includeCounts;
        }

        if (requestParameters.responseGroups !== undefined) {
            queryParameters['responseGroups'] = requestParameters.responseGroups;
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
            path: `/commerce/catalog/admin/couponsets/{couponSetCode}/couponcodes/{couponCode}`.replace(`{${"couponSetCode"}}`, encodeURIComponent(String(requestParameters.couponSetCode))).replace(`{${"couponCode"}}`, encodeURIComponent(String(requestParameters.couponCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CouponFromJSON(jsonValue));
    }

    /**
     * 
     * Get coupon
     */
    async getCoupon(requestParameters: CouponSetsApiGetCouponRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Coupon> {
        const response = await this.getCouponRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a single CouponSet
     * Get coupon set
     */


    async getCouponSetRaw(requestParameters: CouponSetsApiGetCouponSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CouponSet>> {
        if (requestParameters.couponSetCode === null || requestParameters.couponSetCode === undefined) {
            throw new runtime.RequiredError('couponSetCode','Required parameter requestParameters.couponSetCode was null or undefined when calling getCouponSet.');
        }

        const queryParameters: any = {};

        if (requestParameters.includeCounts !== undefined) {
            queryParameters['includeCounts'] = requestParameters.includeCounts;
        }

        if (requestParameters.responseGroups !== undefined) {
            queryParameters['responseGroups'] = requestParameters.responseGroups;
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
            path: `/commerce/catalog/admin/couponsets/{couponSetCode}`.replace(`{${"couponSetCode"}}`, encodeURIComponent(String(requestParameters.couponSetCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CouponSetFromJSON(jsonValue));
    }

    /**
     * Returns a single CouponSet
     * Get coupon set
     */
    async getCouponSet(requestParameters: CouponSetsApiGetCouponSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CouponSet> {
        const response = await this.getCouponSetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a paged collection of CouponSets
     * Get coupon sets
     */


    async getCouponSetsRaw(requestParameters: CouponSetsApiGetCouponSetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CouponSetCollection>> {
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

        if (requestParameters.includeCounts !== undefined) {
            queryParameters['includeCounts'] = requestParameters.includeCounts;
        }

        if (requestParameters.responseGroups !== undefined) {
            queryParameters['responseGroups'] = requestParameters.responseGroups;
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
            path: `/commerce/catalog/admin/couponsets`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CouponSetCollectionFromJSON(jsonValue));
    }

    /**
     * Returns a paged collection of CouponSets
     * Get coupon sets
     */
    async getCouponSets(requestParameters: CouponSetsApiGetCouponSetsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CouponSetCollection> {
        const response = await this.getCouponSetsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a paged collection of Coupons
     * Get coupons
     */


    async getCouponsRaw(requestParameters: CouponSetsApiGetCouponsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CouponCollection>> {
        if (requestParameters.couponSetCode === null || requestParameters.couponSetCode === undefined) {
            throw new runtime.RequiredError('couponSetCode','Required parameter requestParameters.couponSetCode was null or undefined when calling getCoupons.');
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

        if (requestParameters.includeCounts !== undefined) {
            queryParameters['includeCounts'] = requestParameters.includeCounts;
        }

        if (requestParameters.responseGroups !== undefined) {
            queryParameters['responseGroups'] = requestParameters.responseGroups;
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
            path: `/commerce/catalog/admin/couponsets/{couponSetCode}/couponcodes`.replace(`{${"couponSetCode"}}`, encodeURIComponent(String(requestParameters.couponSetCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CouponCollectionFromJSON(jsonValue));
    }

    /**
     * Returns a paged collection of Coupons
     * Get coupons
     */
    async getCoupons(requestParameters: CouponSetsApiGetCouponsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CouponCollection> {
        const response = await this.getCouponsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a random 4 character code that is unique as a coupon set code.
     * Get unique coupon set code
     */


    async getUniqueCouponSetCodeRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
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
            path: `/commerce/catalog/admin/couponsets/unique-code`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Returns a random 4 character code that is unique as a coupon set code.
     * Get unique coupon set code
     */
    async getUniqueCouponSetCode(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.getUniqueCouponSetCodeRaw(initOverrides);
        return await response.value();
    }

    /**
     * 
     * UnAssign discount
     */


    async unAssignDiscountRaw(requestParameters: CouponSetsApiUnAssignDiscountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.couponSetCode === null || requestParameters.couponSetCode === undefined) {
            throw new runtime.RequiredError('couponSetCode','Required parameter requestParameters.couponSetCode was null or undefined when calling unAssignDiscount.');
        }

        if (requestParameters.discountId === null || requestParameters.discountId === undefined) {
            throw new runtime.RequiredError('discountId','Required parameter requestParameters.discountId was null or undefined when calling unAssignDiscount.');
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
            path: `/commerce/catalog/admin/couponsets/{couponSetCode}/assigneddiscounts/{discountId}`.replace(`{${"couponSetCode"}}`, encodeURIComponent(String(requestParameters.couponSetCode))).replace(`{${"discountId"}}`, encodeURIComponent(String(requestParameters.discountId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 
     * UnAssign discount
     */
    async unAssignDiscount(requestParameters: CouponSetsApiUnAssignDiscountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.unAssignDiscountRaw(requestParameters, initOverrides);
    }

    /**
     * Update a CouponSet.     You can not update the Code or ID once the set is created.
     * Update coupon set
     */


    async updateCouponSetRaw(requestParameters: CouponSetsApiUpdateCouponSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CouponSet>> {
        if (requestParameters.couponSetCode === null || requestParameters.couponSetCode === undefined) {
            throw new runtime.RequiredError('couponSetCode','Required parameter requestParameters.couponSetCode was null or undefined when calling updateCouponSet.');
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
            path: `/commerce/catalog/admin/couponsets/{couponSetCode}`.replace(`{${"couponSetCode"}}`, encodeURIComponent(String(requestParameters.couponSetCode))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CouponSetToJSON(requestParameters.couponSet),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CouponSetFromJSON(jsonValue));
    }

    /**
     * Update a CouponSet.     You can not update the Code or ID once the set is created.
     * Update coupon set
     */
    async updateCouponSet(requestParameters: CouponSetsApiUpdateCouponSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CouponSet> {
        const response = await this.updateCouponSetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     *  Tests code for uniqueness and validity.
     * Validate unique coupon set code
     */


    async validateUniqueCouponSetCodeRaw(requestParameters: CouponSetsApiValidateUniqueCouponSetCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.code !== undefined) {
            queryParameters['code'] = requestParameters.code;
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
            path: `/commerce/catalog/admin/couponsets/validate-unique-code`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     *  Tests code for uniqueness and validity.
     * Validate unique coupon set code
     */
    async validateUniqueCouponSetCode(requestParameters: CouponSetsApiValidateUniqueCouponSetCodeRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.validateUniqueCouponSetCodeRaw(requestParameters, initOverrides);
    }

}
