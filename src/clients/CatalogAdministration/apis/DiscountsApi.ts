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
  CatalogAdminsDiscount,
  CatalogAdminsDiscountCollection,
  CatalogAdminsDiscountTarget,
  DiscountLocalizedContent,
  DiscountTag,
  DiscountTagCollection,
  ExpressionValidationResult,
  TagCollection,
} from '../models';


export namespace discountsApiParams { 
    export interface CreateDiscountRequest {
        tagCode?: string;
        responseFields?: string;
        catalogAdminsDiscount?: CatalogAdminsDiscount;
    }
    export interface DeleteDiscountRequest {
        discountId: number;
    }
    export interface GenerateRandomCouponRequest {
        responseFields?: string;
    }
    export interface GetDiscountRequest {
        discountId: number;
        responseFields?: string;
    }
    export interface GetDiscountContentRequest {
        discountId: number;
        responseFields?: string;
    }
    export interface GetDiscountTargetRequest {
        discountId: number;
        responseFields?: string;
    }
    export interface GetDiscountsRequest {
        startIndex?: number;
        pageSize?: number;
        sortBy?: string;
        filter?: string;
        responseGroups?: string;
        responseFields?: string;
    }
    export interface GetTagsRequest {
        discountId: number;
        responseFields?: string;
    }
    export interface UpdateDiscountRequest {
        discountId: number;
        responseFields?: string;
        catalogAdminsDiscount?: CatalogAdminsDiscount;
    }
    export interface UpdateDiscountContentRequest {
        discountId: number;
        responseFields?: string;
        discountLocalizedContent?: DiscountLocalizedContent;
    }
    export interface UpdateDiscountTagsRequest {
        responseFields?: string;
        discountTag?: Array<DiscountTag>;
    }
    export interface UpdateDiscountTargetRequest {
        discountId: number;
        responseFields?: string;
        catalogAdminsDiscountTarget?: CatalogAdminsDiscountTarget;
    }
    export interface ValidateDiscountExpressionRequest {
        responseFields?: string;
        catalogAdminsDiscount?: CatalogAdminsDiscount;
    }
}
/**
* DiscountsApiService - interface
* 
* @export
* @interface DiscountsApi
*/
export interface DiscountsApiService {
    /**
    * Creates a discount. This current version of the Discounts API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access discount data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Create Discount
    * @param {string} [tagCode] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CatalogAdminsDiscount} [catalogAdminsDiscount] Properties of the discount to create. Required properties: Content.Name, AmountType, StartDate, and Target.Type.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof DiscountsApiInterface
    */
    createDiscountRaw(requestParameters: discountsApiParams.CreateDiscountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsDiscount>>;

    /**
    * Creates a discount. This current version of the Discounts API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access discount data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Create Discount
    */
    createDiscount(requestParameters: discountsApiParams.CreateDiscountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsDiscount>;

    /**
    * Deletes a discount specified by its discount ID.
    * @summary Delete Discount
    * @param {number} discountId Unique identifier of the discount. System-supplied and read-only.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof DiscountsApiInterface
    */
    deleteDiscountRaw(requestParameters: discountsApiParams.DeleteDiscountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Deletes a discount specified by its discount ID.
    * Delete Discount
    */
    deleteDiscount(requestParameters: discountsApiParams.DeleteDiscountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Generates a random code for a coupon.
    * @summary Generate Random Coupon
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof DiscountsApiInterface
    */
    generateRandomCouponRaw(requestParameters: discountsApiParams.GenerateRandomCouponRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>>;

    /**
    * Generates a random code for a coupon.
    * Generate Random Coupon
    */
    generateRandomCoupon(requestParameters: discountsApiParams.GenerateRandomCouponRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string>;

    /**
    * Retrieves the details of a single discount. This current version of the Discounts API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access discount data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Get Discount
    * @param {number} discountId Unique identifier of the discount. System-supplied and read-only.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof DiscountsApiInterface
    */
    getDiscountRaw(requestParameters: discountsApiParams.GetDiscountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsDiscount>>;

    /**
    * Retrieves the details of a single discount. This current version of the Discounts API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access discount data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Get Discount
    */
    getDiscount(requestParameters: discountsApiParams.GetDiscountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsDiscount>;

    /**
    * Retrieves the localized content specified for the specified discount.
    * @summary Get Discount Content
    * @param {number} discountId Unique identifier of the discount. System-supplied and read-only.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof DiscountsApiInterface
    */
    getDiscountContentRaw(requestParameters: discountsApiParams.GetDiscountContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DiscountLocalizedContent>>;

    /**
    * Retrieves the localized content specified for the specified discount.
    * Get Discount Content
    */
    getDiscountContent(requestParameters: discountsApiParams.GetDiscountContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DiscountLocalizedContent>;

    /**
    * Retrieves the discount target, that is which products, categories, or shipping methods are eligible for the discount.
    * @summary Get Discount Target
    * @param {number} discountId Unique identifier of the discount. System-supplied and read-only.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof DiscountsApiInterface
    */
    getDiscountTargetRaw(requestParameters: discountsApiParams.GetDiscountTargetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsDiscountTarget>>;

    /**
    * Retrieves the discount target, that is which products, categories, or shipping methods are eligible for the discount.
    * Get Discount Target
    */
    getDiscountTarget(requestParameters: discountsApiParams.GetDiscountTargetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsDiscountTarget>;

    /**
    * Retrieves a list of discounts according to any specified filter criteria and sort options. This current version of the Discounts API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access discount data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
    * @summary Get Discounts
    * @param {number} [startIndex] Used to page results from a query. Indicates the zero-based offset in the complete result set where the returned entities begin. For example, with a PageSize of 25, to get the 51st through the 75th items, startIndex&#x3D;3. The default value is 0. Optional.
    * @param {number} [pageSize] Used to page results from a query. Indicates the maximum number of entities to return from a query. The default value is 20 and the maximum value is 200. Optional.
    * @param {string} [sortBy] The element to sort the results by and the order in which the results appear. Either ascending (a-z) or descending (z-a) order. Optional.
    * @param {string} [filter] A set of filter expressions representing the search parameters for a query: eq&#x3D;equals, ne&#x3D;not equals, gt&#x3D;greater than, lt &#x3D; less than or equals, gt &#x3D; greater than or equals, lt &#x3D; less than or equals, sw &#x3D; starts with, or cont &#x3D; contains. Optional.
    * @param {string} [responseGroups] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof DiscountsApiInterface
    */
    getDiscountsRaw(requestParameters: discountsApiParams.GetDiscountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsDiscountCollection>>;

    /**
    * Retrieves a list of discounts according to any specified filter criteria and sort options. This current version of the Discounts API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access discount data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
    * Get Discounts
    */
    getDiscounts(requestParameters: discountsApiParams.GetDiscountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsDiscountCollection>;

    /**
    * Retrieves all tags associated to a discount
    * @summary Get Discount Tags
    * @param {number} discountId 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof DiscountsApiInterface
    */
    getTagsRaw(requestParameters: discountsApiParams.GetTagsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TagCollection>>;

    /**
    * Retrieves all tags associated to a discount
    * Get Discount Tags
    */
    getTags(requestParameters: discountsApiParams.GetTagsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TagCollection>;

    /**
    * Modifies a discount. This current version of the Discounts API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access discount data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Update Discount
    * @param {number} discountId Unique identifier of the discount. System-supplied and read-only.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CatalogAdminsDiscount} [catalogAdminsDiscount] Properties of the discount to update.              Required properties: Content.Name, AmountType, StartDate, and Target.Type.              Any unspecified properties are set to null and boolean variables are set to false.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof DiscountsApiInterface
    */
    updateDiscountRaw(requestParameters: discountsApiParams.UpdateDiscountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsDiscount>>;

    /**
    * Modifies a discount. This current version of the Discounts API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access discount data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Update Discount
    */
    updateDiscount(requestParameters: discountsApiParams.UpdateDiscountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsDiscount>;

    /**
    * Modifies the localized content for the specified discount. Allows you to rename the discount without modifying any other discount properties.
    * @summary Update Discount Content
    * @param {number} discountId Unique identifier of the discount. System-supplied and read-only.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {DiscountLocalizedContent} [discountLocalizedContent] New Name and/or LocaleCode. Properties of the content to update. Required property: Name.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof DiscountsApiInterface
    */
    updateDiscountContentRaw(requestParameters: discountsApiParams.UpdateDiscountContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DiscountLocalizedContent>>;

    /**
    * Modifies the localized content for the specified discount. Allows you to rename the discount without modifying any other discount properties.
    * Update Discount Content
    */
    updateDiscountContent(requestParameters: discountsApiParams.UpdateDiscountContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DiscountLocalizedContent>;

    /**
    * Modifies tags of the discount. The original tags are overwritten.
    * @summary Update Discount Tags
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {Array<DiscountTag>} [discountTag] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof DiscountsApiInterface
    */
    updateDiscountTagsRaw(requestParameters: discountsApiParams.UpdateDiscountTagsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DiscountTagCollection>>;

    /**
    * Modifies tags of the discount. The original tags are overwritten.
    * Update Discount Tags
    */
    updateDiscountTags(requestParameters: discountsApiParams.UpdateDiscountTagsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DiscountTagCollection>;

    /**
    * Modifies properties of the discount target, for example, the dollar amount, or percentage off the price.
    * @summary Update Discount Target
    * @param {number} discountId Unique identifier of the discount. System-supplied and read-only.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CatalogAdminsDiscountTarget} [catalogAdminsDiscountTarget] Properties of the discount target to modify.              Required properties: Target.Type. Any unspecified properties are set to null and boolean variables to false.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof DiscountsApiInterface
    */
    updateDiscountTargetRaw(requestParameters: discountsApiParams.UpdateDiscountTargetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsDiscountTarget>>;

    /**
    * Modifies properties of the discount target, for example, the dollar amount, or percentage off the price.
    * Update Discount Target
    */
    updateDiscountTarget(requestParameters: discountsApiParams.UpdateDiscountTargetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsDiscountTarget>;

    /**
    * Validate a discount expression.
    * @summary Validate Discount Expression
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CatalogAdminsDiscount} [catalogAdminsDiscount] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof DiscountsApiInterface
    */
    validateDiscountExpressionRaw(requestParameters: discountsApiParams.ValidateDiscountExpressionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExpressionValidationResult>>;

    /**
    * Validate a discount expression.
    * Validate Discount Expression
    */
    validateDiscountExpression(requestParameters: discountsApiParams.ValidateDiscountExpressionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExpressionValidationResult>;

}


/**
 * 
 */
export class DiscountsApi extends runtime.BaseAPI implements DiscountsApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Creates a discount. This current version of the Discounts API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access discount data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Create Discount
     */


    async createDiscountRaw(requestParameters: discountsApiParams.CreateDiscountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsDiscount>> {
        const queryParameters: any = {};

        if (requestParameters.tagCode !== undefined) {
            queryParameters['tagCode'] = requestParameters.tagCode;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/discounts`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsDiscount,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates a discount. This current version of the Discounts API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access discount data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Create Discount
     */
    async createDiscount(requestParameters: discountsApiParams.CreateDiscountRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsDiscount> {
        const response = await this.createDiscountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a discount specified by its discount ID.
     * Delete Discount
     */


    async deleteDiscountRaw(requestParameters: discountsApiParams.DeleteDiscountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.discountId === null || requestParameters.discountId === undefined) {
            throw new runtime.RequiredError('discountId','Required parameter requestParameters.discountId was null or undefined when calling deleteDiscount.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/discounts/{discountId}`.replace(`{${"discountId"}}`, encodeURIComponent(String(requestParameters.discountId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a discount specified by its discount ID.
     * Delete Discount
     */
    async deleteDiscount(requestParameters: discountsApiParams.DeleteDiscountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteDiscountRaw(requestParameters, initOverrides);
    }

    /**
     * Generates a random code for a coupon.
     * Generate Random Coupon
     */


    async generateRandomCouponRaw(requestParameters: discountsApiParams.GenerateRandomCouponRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/discounts/generate-random-coupon`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Generates a random code for a coupon.
     * Generate Random Coupon
     */
    async generateRandomCoupon(requestParameters: discountsApiParams.GenerateRandomCouponRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.generateRandomCouponRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the details of a single discount. This current version of the Discounts API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access discount data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Get Discount
     */


    async getDiscountRaw(requestParameters: discountsApiParams.GetDiscountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsDiscount>> {
        if (requestParameters.discountId === null || requestParameters.discountId === undefined) {
            throw new runtime.RequiredError('discountId','Required parameter requestParameters.discountId was null or undefined when calling getDiscount.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/discounts/{discountId}`.replace(`{${"discountId"}}`, encodeURIComponent(String(requestParameters.discountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves the details of a single discount. This current version of the Discounts API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access discount data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Get Discount
     */
    async getDiscount(requestParameters: discountsApiParams.GetDiscountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsDiscount> {
        const response = await this.getDiscountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the localized content specified for the specified discount.
     * Get Discount Content
     */


    async getDiscountContentRaw(requestParameters: discountsApiParams.GetDiscountContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DiscountLocalizedContent>> {
        if (requestParameters.discountId === null || requestParameters.discountId === undefined) {
            throw new runtime.RequiredError('discountId','Required parameter requestParameters.discountId was null or undefined when calling getDiscountContent.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/discounts/{discountId}/content`.replace(`{${"discountId"}}`, encodeURIComponent(String(requestParameters.discountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves the localized content specified for the specified discount.
     * Get Discount Content
     */
    async getDiscountContent(requestParameters: discountsApiParams.GetDiscountContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DiscountLocalizedContent> {
        const response = await this.getDiscountContentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the discount target, that is which products, categories, or shipping methods are eligible for the discount.
     * Get Discount Target
     */


    async getDiscountTargetRaw(requestParameters: discountsApiParams.GetDiscountTargetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsDiscountTarget>> {
        if (requestParameters.discountId === null || requestParameters.discountId === undefined) {
            throw new runtime.RequiredError('discountId','Required parameter requestParameters.discountId was null or undefined when calling getDiscountTarget.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/discounts/{discountId}/target`.replace(`{${"discountId"}}`, encodeURIComponent(String(requestParameters.discountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves the discount target, that is which products, categories, or shipping methods are eligible for the discount.
     * Get Discount Target
     */
    async getDiscountTarget(requestParameters: discountsApiParams.GetDiscountTargetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsDiscountTarget> {
        const response = await this.getDiscountTargetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a list of discounts according to any specified filter criteria and sort options. This current version of the Discounts API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access discount data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
     * Get Discounts
     */


    async getDiscountsRaw(requestParameters: discountsApiParams.GetDiscountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsDiscountCollection>> {
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

        if (requestParameters.responseGroups !== undefined) {
            queryParameters['responseGroups'] = requestParameters.responseGroups;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/discounts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a list of discounts according to any specified filter criteria and sort options. This current version of the Discounts API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access discount data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
     * Get Discounts
     */
    async getDiscounts(requestParameters: discountsApiParams.GetDiscountsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsDiscountCollection> {
        const response = await this.getDiscountsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves all tags associated to a discount
     * Get Discount Tags
     */


    async getTagsRaw(requestParameters: discountsApiParams.GetTagsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TagCollection>> {
        if (requestParameters.discountId === null || requestParameters.discountId === undefined) {
            throw new runtime.RequiredError('discountId','Required parameter requestParameters.discountId was null or undefined when calling getTags.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/discounts/{discountId}/tags`.replace(`{${"discountId"}}`, encodeURIComponent(String(requestParameters.discountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves all tags associated to a discount
     * Get Discount Tags
     */
    async getTags(requestParameters: discountsApiParams.GetTagsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TagCollection> {
        const response = await this.getTagsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Modifies a discount. This current version of the Discounts API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access discount data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Update Discount
     */


    async updateDiscountRaw(requestParameters: discountsApiParams.UpdateDiscountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsDiscount>> {
        if (requestParameters.discountId === null || requestParameters.discountId === undefined) {
            throw new runtime.RequiredError('discountId','Required parameter requestParameters.discountId was null or undefined when calling updateDiscount.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/discounts/{discountId}`.replace(`{${"discountId"}}`, encodeURIComponent(String(requestParameters.discountId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsDiscount,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Modifies a discount. This current version of the Discounts API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access discount data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Update Discount
     */
    async updateDiscount(requestParameters: discountsApiParams.UpdateDiscountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsDiscount> {
        const response = await this.updateDiscountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Modifies the localized content for the specified discount. Allows you to rename the discount without modifying any other discount properties.
     * Update Discount Content
     */


    async updateDiscountContentRaw(requestParameters: discountsApiParams.UpdateDiscountContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DiscountLocalizedContent>> {
        if (requestParameters.discountId === null || requestParameters.discountId === undefined) {
            throw new runtime.RequiredError('discountId','Required parameter requestParameters.discountId was null or undefined when calling updateDiscountContent.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/discounts/{discountId}/content`.replace(`{${"discountId"}}`, encodeURIComponent(String(requestParameters.discountId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.discountLocalizedContent,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Modifies the localized content for the specified discount. Allows you to rename the discount without modifying any other discount properties.
     * Update Discount Content
     */
    async updateDiscountContent(requestParameters: discountsApiParams.UpdateDiscountContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DiscountLocalizedContent> {
        const response = await this.updateDiscountContentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Modifies tags of the discount. The original tags are overwritten.
     * Update Discount Tags
     */


    async updateDiscountTagsRaw(requestParameters: discountsApiParams.UpdateDiscountTagsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DiscountTagCollection>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/discounts/tags`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.discountTag,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Modifies tags of the discount. The original tags are overwritten.
     * Update Discount Tags
     */
    async updateDiscountTags(requestParameters: discountsApiParams.UpdateDiscountTagsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DiscountTagCollection> {
        const response = await this.updateDiscountTagsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Modifies properties of the discount target, for example, the dollar amount, or percentage off the price.
     * Update Discount Target
     */


    async updateDiscountTargetRaw(requestParameters: discountsApiParams.UpdateDiscountTargetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsDiscountTarget>> {
        if (requestParameters.discountId === null || requestParameters.discountId === undefined) {
            throw new runtime.RequiredError('discountId','Required parameter requestParameters.discountId was null or undefined when calling updateDiscountTarget.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/discounts/{discountId}/target`.replace(`{${"discountId"}}`, encodeURIComponent(String(requestParameters.discountId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsDiscountTarget,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Modifies properties of the discount target, for example, the dollar amount, or percentage off the price.
     * Update Discount Target
     */
    async updateDiscountTarget(requestParameters: discountsApiParams.UpdateDiscountTargetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsDiscountTarget> {
        const response = await this.updateDiscountTargetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Validate a discount expression.
     * Validate Discount Expression
     */


    async validateDiscountExpressionRaw(requestParameters: discountsApiParams.ValidateDiscountExpressionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExpressionValidationResult>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/discounts/expressions/validate`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsDiscount,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Validate a discount expression.
     * Validate Discount Expression
     */
    async validateDiscountExpression(requestParameters: discountsApiParams.ValidateDiscountExpressionRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExpressionValidationResult> {
        const response = await this.validateDiscountExpressionRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
