/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Admin Services
 * <div id=\"overview_CATALOG_ADMIN\">             <h2>CATALOG ADMINISTRATION</h2>             <p>The Catalog Administration APIs are a collection of resources for configuring the catalogs and products offered to your shoppers, including                 discounts and coupon sets, faceting, price lists, and different types or variations of products. See the                 <a href=\"/concept-guides/catalog\">Catalog user guides</a>                 for information about the related features in the Unified Commerce Admin.</p>             <p>Use the <strong>Attributes</strong> resource to manage localization and attribute configurations for your catalogs. This current version of the Attributes API includes localizedContent to                 support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the legacy API model. If                 you were a client prior to May 2024 and have upgraded your implementation to support this feature,                 you can still access attribute data that has not yet been rewritten to the new model by providing                 an x-api-version header set to \"1\". </p>             <p>Use the <strong>Categories</strong> resource to organize products and control where they appear on the storefront. Create                 and maintain a hierarchy of categories and subcategories where the site will store properties. This current version of the Categories API includes localizedContent to                 support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the legacy API model. If                 you were a client prior to May 2024 and have upgraded your implementation to support this feature,                 you can still access category data that has not yet been rewritten to the new model by providing                 an x-api-version header set to \"1\". </p>             <p>Use the <strong>Coupon Sets</strong> resource to view and create coupon sets. You can use coupon sets to group multiple                 coupon codes together and associate them with one or more discounts.</p>             <p>Use the <strong>Currency</strong> resource to manage the currency localization rules and exchange rates for any of the                 currencies that are supported for placing orders in.</p>             <p>Use the <strong>Discounts</strong> and <strong>Discount Settings</strong> resources to define and manage discounts to apply to products, product categories, or                 orders. This current version of the Discounts API includes localizedContent to                 support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the legacy Products API model. If                 you were a client prior to May 2024 and have upgraded your implementation to support this feature,                 you can still access discount data that has not yet been rewritten to the new model by providing                 an x-api-version header set to \"1\". </p>             <p>Use the <strong>Facets</strong> resource to manage the facets shoppers use to filter product display results on a                 storefront. Facets can include categories, product attributes, or prices, and use either a range of                 values or discrete values.</p>             <p>Use the <strong>Master Catalog</strong> resource to view details of the master catalogs associated with a tenant and to                 manage the product publishing mode for each master catalog.</p>             <p>Use the <strong>Price Lists</strong> resources to view and create price lists. You can use price lists to override the                 catalog pricing of products for specific customer segments and/or sites.</p>             <p>Use the <strong>Products</strong>, <strong>Product Types/Extras/Options/Properties</strong>, and <strong>Product Sort Definitions</strong> resources to create new product definitions in the master catalog and determine which                 catalogs will feature products. This current version of the Products API includes localizedContent to                 support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the legacy Products API model. If                 you were a client prior to May 2024 and have upgraded your implementation to support this feature,                 you can still access product data that has not yet been rewritten to the new model by providing                 an x-api-version header set to \"1\".</p>             <p>Use the <strong>Publishing</strong> resource to publish pending product updates together as part of a set.</p>             <p>Use the <strong>Search</strong> resource to manage all settings and options for providing product search on your site, as                 well as search tuning rules.</p>         </div>
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


export namespace couponSetsApiParams { 
    export interface AddCouponSetRequest {
        responseFields?: string;
        couponSet?: CouponSet;
    }
    export interface AddCouponsRequest {
        couponSetCode: string;
        responseFields?: string;
        coupon?: Array<Coupon>;
    }
    export interface AssignDiscountRequest {
        couponSetCode: string;
        responseFields?: string;
        assignedDiscount?: AssignedDiscount;
    }
    export interface DeleteCouponRequest {
        couponSetCode: string;
        couponCode: string;
    }
    export interface DeleteCouponSetRequest {
        couponSetCode: string;
    }
    export interface DeleteCouponsRequest {
        couponSetCode: string;
        responseFields?: string;
        requestBody?: Array<string>;
    }
    export interface GetAssignedDiscountsRequest {
        couponSetCode: string;
        responseFields?: string;
    }
    export interface GetCouponRequest {
        couponSetCode: string;
        couponCode: string;
        includeCounts?: boolean;
        responseGroups?: string;
        responseFields?: string;
    }
    export interface GetCouponSetRequest {
        couponSetCode: string;
        includeCounts?: boolean;
        responseGroups?: string;
        responseFields?: string;
    }
    export interface GetCouponSetsRequest {
        startIndex?: number;
        pageSize?: number;
        sortBy?: string;
        filter?: string;
        includeCounts?: boolean;
        responseGroups?: string;
        responseFields?: string;
    }
    export interface GetCouponsRequest {
        couponSetCode: string;
        startIndex?: number;
        pageSize?: number;
        sortBy?: string;
        filter?: string;
        includeCounts?: boolean;
        responseGroups?: string;
        responseFields?: string;
    }
    export interface GetUniqueCouponSetCodeRequest {
        responseFields?: string;
    }
    export interface UnAssignDiscountRequest {
        couponSetCode: string;
        discountId: number;
    }
    export interface UpdateCouponSetRequest {
        couponSetCode: string;
        responseFields?: string;
        couponSet?: CouponSet;
    }
    export interface ValidateUniqueCouponSetCodeRequest {
        responseFields?: string;
        body?: string;
    }
}
/**
* CouponSetsApiService - interface
* 
* @export
* @interface CouponSetsApi
*/
export interface CouponSetsApiService {
    /**
    * Adds a single CouponSet
    * @summary Add Coupon Set
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CouponSet} [couponSet] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CouponSetsApiInterface
    */
    addCouponSetRaw(requestParameters: couponSetsApiParams.AddCouponSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CouponSet>>;

    /**
    * Adds a single CouponSet
    * Add Coupon Set
    */
    addCouponSet(requestParameters: couponSetsApiParams.AddCouponSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CouponSet>;

    /**
    * Adds coupon codes to a coupon set.
    * @summary Add Coupons
    * @param {string} couponSetCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {Array<Coupon>} [coupon] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CouponSetsApiInterface
    */
    addCouponsRaw(requestParameters: couponSetsApiParams.AddCouponsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Adds coupon codes to a coupon set.
    * Add Coupons
    */
    addCoupons(requestParameters: couponSetsApiParams.AddCouponsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Assigns or associates an existing discount to a specified coupon set. Use the couponSetCode parameter to specify the coupon set.
    * @summary Assign Discount to Coupon Set
    * @param {string} couponSetCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {AssignedDiscount} [assignedDiscount] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CouponSetsApiInterface
    */
    assignDiscountRaw(requestParameters: couponSetsApiParams.AssignDiscountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Assigns or associates an existing discount to a specified coupon set. Use the couponSetCode parameter to specify the coupon set.
    * Assign Discount to Coupon Set
    */
    assignDiscount(requestParameters: couponSetsApiParams.AssignDiscountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Deletes a single coupon by its coupon code.
    * @summary Delete Coupon
    * @param {string} couponSetCode 
    * @param {string} couponCode 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CouponSetsApiInterface
    */
    deleteCouponRaw(requestParameters: couponSetsApiParams.DeleteCouponRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Deletes a single coupon by its coupon code.
    * Delete Coupon
    */
    deleteCoupon(requestParameters: couponSetsApiParams.DeleteCouponRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Deletes a CouponSet.
    * @summary Delete Coupon Set
    * @param {string} couponSetCode 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CouponSetsApiInterface
    */
    deleteCouponSetRaw(requestParameters: couponSetsApiParams.DeleteCouponSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Deletes a CouponSet.
    * Delete Coupon Set
    */
    deleteCouponSet(requestParameters: couponSetsApiParams.DeleteCouponSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Deletes coupons from a coupon set.
    * @summary Delete Coupons
    * @param {string} couponSetCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {Array<string>} [requestBody] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CouponSetsApiInterface
    */
    deleteCouponsRaw(requestParameters: couponSetsApiParams.DeleteCouponsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Deletes coupons from a coupon set.
    * Delete Coupons
    */
    deleteCoupons(requestParameters: couponSetsApiParams.DeleteCouponsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Retrieves the discountIds of any assigned discounts for the specified coupon set.
    * @summary Get Assigned Discounts
    * @param {string} couponSetCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CouponSetsApiInterface
    */
    getAssignedDiscountsRaw(requestParameters: couponSetsApiParams.GetAssignedDiscountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<AssignedDiscount>>>;

    /**
    * Retrieves the discountIds of any assigned discounts for the specified coupon set.
    * Get Assigned Discounts
    */
    getAssignedDiscounts(requestParameters: couponSetsApiParams.GetAssignedDiscountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<AssignedDiscount>>;

    /**
    * Retrieves a single coupon by its coupon code.
    * @summary Get Coupon
    * @param {string} couponSetCode 
    * @param {string} couponCode 
    * @param {boolean} [includeCounts] 
    * @param {string} [responseGroups] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CouponSetsApiInterface
    */
    getCouponRaw(requestParameters: couponSetsApiParams.GetCouponRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Coupon>>;

    /**
    * Retrieves a single coupon by its coupon code.
    * Get Coupon
    */
    getCoupon(requestParameters: couponSetsApiParams.GetCouponRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Coupon>;

    /**
    * Returns a single CouponSet
    * @summary Get Coupon Set
    * @param {string} couponSetCode CouponSetCode for the requested CouponSet
    * @param {boolean} [includeCounts] Include the redemption counts and coupon counts
    * @param {string} [responseGroups] \&quot;counts\&quot; includes the number of redemptions, coupon codes, and assigned discounts.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CouponSetsApiInterface
    */
    getCouponSetRaw(requestParameters: couponSetsApiParams.GetCouponSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CouponSet>>;

    /**
    * Returns a single CouponSet
    * Get Coupon Set
    */
    getCouponSet(requestParameters: couponSetsApiParams.GetCouponSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CouponSet>;

    /**
    * Returns a paged collection of CouponSets
    * @summary Get Coupon Sets
    * @param {number} [startIndex] 
    * @param {number} [pageSize] 
    * @param {string} [sortBy] 
    * @param {string} [filter] 
    * @param {boolean} [includeCounts] Include coupon and redemption counts
    * @param {string} [responseGroups] \&quot;counts\&quot; returns discount and couponCode counts
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CouponSetsApiInterface
    */
    getCouponSetsRaw(requestParameters: couponSetsApiParams.GetCouponSetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CouponSetCollection>>;

    /**
    * Returns a paged collection of CouponSets
    * Get Coupon Sets
    */
    getCouponSets(requestParameters: couponSetsApiParams.GetCouponSetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CouponSetCollection>;

    /**
    * Returns a paged collection of Coupons.
    * @summary Get Coupons
    * @param {string} couponSetCode 
    * @param {number} [startIndex] 
    * @param {number} [pageSize] 
    * @param {string} [sortBy] 
    * @param {string} [filter] 
    * @param {boolean} [includeCounts] Includes coupon redemption counts
    * @param {string} [responseGroups] counts
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CouponSetsApiInterface
    */
    getCouponsRaw(requestParameters: couponSetsApiParams.GetCouponsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CouponCollection>>;

    /**
    * Returns a paged collection of Coupons.
    * Get Coupons
    */
    getCoupons(requestParameters: couponSetsApiParams.GetCouponsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CouponCollection>;

    /**
    * Returns a random 4 character code that is unique as a coupon set code.
    * @summary Get Unique Coupon Set Code
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CouponSetsApiInterface
    */
    getUniqueCouponSetCodeRaw(requestParameters: couponSetsApiParams.GetUniqueCouponSetCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>>;

    /**
    * Returns a random 4 character code that is unique as a coupon set code.
    * Get Unique Coupon Set Code
    */
    getUniqueCouponSetCode(requestParameters: couponSetsApiParams.GetUniqueCouponSetCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string>;

    /**
    * Unassigns or disassociates the specified discount with the specified coupon set.
    * @summary Unassign Discount from Coupon Set
    * @param {string} couponSetCode 
    * @param {number} discountId 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CouponSetsApiInterface
    */
    unAssignDiscountRaw(requestParameters: couponSetsApiParams.UnAssignDiscountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Unassigns or disassociates the specified discount with the specified coupon set.
    * Unassign Discount from Coupon Set
    */
    unAssignDiscount(requestParameters: couponSetsApiParams.UnAssignDiscountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Update a CouponSet. You can not update the Code or ID once the set is created.
    * @summary Update Coupon Set
    * @param {string} couponSetCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CouponSet} [couponSet] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CouponSetsApiInterface
    */
    updateCouponSetRaw(requestParameters: couponSetsApiParams.UpdateCouponSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CouponSet>>;

    /**
    * Update a CouponSet. You can not update the Code or ID once the set is created.
    * Update Coupon Set
    */
    updateCouponSet(requestParameters: couponSetsApiParams.UpdateCouponSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CouponSet>;

    /**
    * Tests a coupone set code for uniqueness and validity.
    * @summary Validate Unique Coupon Set Code
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {string} [body] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CouponSetsApiInterface
    */
    validateUniqueCouponSetCodeRaw(requestParameters: couponSetsApiParams.ValidateUniqueCouponSetCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Tests a coupone set code for uniqueness and validity.
    * Validate Unique Coupon Set Code
    */
    validateUniqueCouponSetCode(requestParameters: couponSetsApiParams.ValidateUniqueCouponSetCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

}


/**
 * 
 */
export class CouponSetsApi extends runtime.BaseAPI implements CouponSetsApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Adds a single CouponSet
     * Add Coupon Set
     */


    async addCouponSetRaw(requestParameters: couponSetsApiParams.AddCouponSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CouponSet>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/couponsets`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.couponSet,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Adds a single CouponSet
     * Add Coupon Set
     */
    async addCouponSet(requestParameters: couponSetsApiParams.AddCouponSetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CouponSet> {
        const response = await this.addCouponSetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Adds coupon codes to a coupon set.
     * Add Coupons
     */


    async addCouponsRaw(requestParameters: couponSetsApiParams.AddCouponsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.couponSetCode === null || requestParameters.couponSetCode === undefined) {
            throw new runtime.RequiredError('couponSetCode','Required parameter requestParameters.couponSetCode was null or undefined when calling addCoupons.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/couponsets/{couponSetCode}/couponcodes`.replace(`{${"couponSetCode"}}`, encodeURIComponent(String(requestParameters.couponSetCode))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.coupon,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Adds coupon codes to a coupon set.
     * Add Coupons
     */
    async addCoupons(requestParameters: couponSetsApiParams.AddCouponsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.addCouponsRaw(requestParameters, initOverrides);
    }

    /**
     * Assigns or associates an existing discount to a specified coupon set. Use the couponSetCode parameter to specify the coupon set.
     * Assign Discount to Coupon Set
     */


    async assignDiscountRaw(requestParameters: couponSetsApiParams.AssignDiscountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.couponSetCode === null || requestParameters.couponSetCode === undefined) {
            throw new runtime.RequiredError('couponSetCode','Required parameter requestParameters.couponSetCode was null or undefined when calling assignDiscount.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/couponsets/{couponSetCode}/assigneddiscounts`.replace(`{${"couponSetCode"}}`, encodeURIComponent(String(requestParameters.couponSetCode))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.assignedDiscount,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Assigns or associates an existing discount to a specified coupon set. Use the couponSetCode parameter to specify the coupon set.
     * Assign Discount to Coupon Set
     */
    async assignDiscount(requestParameters: couponSetsApiParams.AssignDiscountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.assignDiscountRaw(requestParameters, initOverrides);
    }

    /**
     * Deletes a single coupon by its coupon code.
     * Delete Coupon
     */


    async deleteCouponRaw(requestParameters: couponSetsApiParams.DeleteCouponRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.couponSetCode === null || requestParameters.couponSetCode === undefined) {
            throw new runtime.RequiredError('couponSetCode','Required parameter requestParameters.couponSetCode was null or undefined when calling deleteCoupon.');
        }

        if (requestParameters.couponCode === null || requestParameters.couponCode === undefined) {
            throw new runtime.RequiredError('couponCode','Required parameter requestParameters.couponCode was null or undefined when calling deleteCoupon.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/couponsets/{couponSetCode}/couponcodes/{couponCode}`.replace(`{${"couponSetCode"}}`, encodeURIComponent(String(requestParameters.couponSetCode))).replace(`{${"couponCode"}}`, encodeURIComponent(String(requestParameters.couponCode))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a single coupon by its coupon code.
     * Delete Coupon
     */
    async deleteCoupon(requestParameters: couponSetsApiParams.DeleteCouponRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCouponRaw(requestParameters, initOverrides);
    }

    /**
     * Deletes a CouponSet.
     * Delete Coupon Set
     */


    async deleteCouponSetRaw(requestParameters: couponSetsApiParams.DeleteCouponSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.couponSetCode === null || requestParameters.couponSetCode === undefined) {
            throw new runtime.RequiredError('couponSetCode','Required parameter requestParameters.couponSetCode was null or undefined when calling deleteCouponSet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/couponsets/{couponSetCode}`.replace(`{${"couponSetCode"}}`, encodeURIComponent(String(requestParameters.couponSetCode))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a CouponSet.
     * Delete Coupon Set
     */
    async deleteCouponSet(requestParameters: couponSetsApiParams.DeleteCouponSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCouponSetRaw(requestParameters, initOverrides);
    }

    /**
     * Deletes coupons from a coupon set.
     * Delete Coupons
     */


    async deleteCouponsRaw(requestParameters: couponSetsApiParams.DeleteCouponsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.couponSetCode === null || requestParameters.couponSetCode === undefined) {
            throw new runtime.RequiredError('couponSetCode','Required parameter requestParameters.couponSetCode was null or undefined when calling deleteCoupons.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
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
     * Deletes coupons from a coupon set.
     * Delete Coupons
     */
    async deleteCoupons(requestParameters: couponSetsApiParams.DeleteCouponsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCouponsRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves the discountIds of any assigned discounts for the specified coupon set.
     * Get Assigned Discounts
     */


    async getAssignedDiscountsRaw(requestParameters: couponSetsApiParams.GetAssignedDiscountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<AssignedDiscount>>> {
        if (requestParameters.couponSetCode === null || requestParameters.couponSetCode === undefined) {
            throw new runtime.RequiredError('couponSetCode','Required parameter requestParameters.couponSetCode was null or undefined when calling getAssignedDiscounts.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/couponsets/{couponSetCode}/assigneddiscounts`.replace(`{${"couponSetCode"}}`, encodeURIComponent(String(requestParameters.couponSetCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves the discountIds of any assigned discounts for the specified coupon set.
     * Get Assigned Discounts
     */
    async getAssignedDiscounts(requestParameters: couponSetsApiParams.GetAssignedDiscountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<AssignedDiscount>> {
        const response = await this.getAssignedDiscountsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a single coupon by its coupon code.
     * Get Coupon
     */


    async getCouponRaw(requestParameters: couponSetsApiParams.GetCouponRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Coupon>> {
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

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/couponsets/{couponSetCode}/couponcodes/{couponCode}`.replace(`{${"couponSetCode"}}`, encodeURIComponent(String(requestParameters.couponSetCode))).replace(`{${"couponCode"}}`, encodeURIComponent(String(requestParameters.couponCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a single coupon by its coupon code.
     * Get Coupon
     */
    async getCoupon(requestParameters: couponSetsApiParams.GetCouponRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Coupon> {
        const response = await this.getCouponRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a single CouponSet
     * Get Coupon Set
     */


    async getCouponSetRaw(requestParameters: couponSetsApiParams.GetCouponSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CouponSet>> {
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

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/couponsets/{couponSetCode}`.replace(`{${"couponSetCode"}}`, encodeURIComponent(String(requestParameters.couponSetCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a single CouponSet
     * Get Coupon Set
     */
    async getCouponSet(requestParameters: couponSetsApiParams.GetCouponSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CouponSet> {
        const response = await this.getCouponSetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a paged collection of CouponSets
     * Get Coupon Sets
     */


    async getCouponSetsRaw(requestParameters: couponSetsApiParams.GetCouponSetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CouponSetCollection>> {
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

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/couponsets`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a paged collection of CouponSets
     * Get Coupon Sets
     */
    async getCouponSets(requestParameters: couponSetsApiParams.GetCouponSetsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CouponSetCollection> {
        const response = await this.getCouponSetsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a paged collection of Coupons.
     * Get Coupons
     */


    async getCouponsRaw(requestParameters: couponSetsApiParams.GetCouponsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CouponCollection>> {
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

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/couponsets/{couponSetCode}/couponcodes`.replace(`{${"couponSetCode"}}`, encodeURIComponent(String(requestParameters.couponSetCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a paged collection of Coupons.
     * Get Coupons
     */
    async getCoupons(requestParameters: couponSetsApiParams.GetCouponsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CouponCollection> {
        const response = await this.getCouponsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a random 4 character code that is unique as a coupon set code.
     * Get Unique Coupon Set Code
     */


    async getUniqueCouponSetCodeRaw(requestParameters: couponSetsApiParams.GetUniqueCouponSetCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
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
     * Get Unique Coupon Set Code
     */
    async getUniqueCouponSetCode(requestParameters: couponSetsApiParams.GetUniqueCouponSetCodeRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.getUniqueCouponSetCodeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Unassigns or disassociates the specified discount with the specified coupon set.
     * Unassign Discount from Coupon Set
     */


    async unAssignDiscountRaw(requestParameters: couponSetsApiParams.UnAssignDiscountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.couponSetCode === null || requestParameters.couponSetCode === undefined) {
            throw new runtime.RequiredError('couponSetCode','Required parameter requestParameters.couponSetCode was null or undefined when calling unAssignDiscount.');
        }

        if (requestParameters.discountId === null || requestParameters.discountId === undefined) {
            throw new runtime.RequiredError('discountId','Required parameter requestParameters.discountId was null or undefined when calling unAssignDiscount.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/couponsets/{couponSetCode}/assigneddiscounts/{discountId}`.replace(`{${"couponSetCode"}}`, encodeURIComponent(String(requestParameters.couponSetCode))).replace(`{${"discountId"}}`, encodeURIComponent(String(requestParameters.discountId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Unassigns or disassociates the specified discount with the specified coupon set.
     * Unassign Discount from Coupon Set
     */
    async unAssignDiscount(requestParameters: couponSetsApiParams.UnAssignDiscountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.unAssignDiscountRaw(requestParameters, initOverrides);
    }

    /**
     * Update a CouponSet. You can not update the Code or ID once the set is created.
     * Update Coupon Set
     */


    async updateCouponSetRaw(requestParameters: couponSetsApiParams.UpdateCouponSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CouponSet>> {
        if (requestParameters.couponSetCode === null || requestParameters.couponSetCode === undefined) {
            throw new runtime.RequiredError('couponSetCode','Required parameter requestParameters.couponSetCode was null or undefined when calling updateCouponSet.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/couponsets/{couponSetCode}`.replace(`{${"couponSetCode"}}`, encodeURIComponent(String(requestParameters.couponSetCode))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.couponSet,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update a CouponSet. You can not update the Code or ID once the set is created.
     * Update Coupon Set
     */
    async updateCouponSet(requestParameters: couponSetsApiParams.UpdateCouponSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CouponSet> {
        const response = await this.updateCouponSetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Tests a coupone set code for uniqueness and validity.
     * Validate Unique Coupon Set Code
     */


    async validateUniqueCouponSetCodeRaw(requestParameters: couponSetsApiParams.ValidateUniqueCouponSetCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/couponsets/validate-unique-code`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Tests a coupone set code for uniqueness and validity.
     * Validate Unique Coupon Set Code
     */
    async validateUniqueCouponSetCode(requestParameters: couponSetsApiParams.ValidateUniqueCouponSetCodeRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.validateUniqueCouponSetCodeRaw(requestParameters, initOverrides);
    }

}
