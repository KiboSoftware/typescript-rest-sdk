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
  CatalogAdminsProductOption,
} from '../models';


export namespace productOptionsApiParams { 
    export interface AddOptionRequest {
        productCode: string;
        responseFields?: string;
        catalogAdminsProductOption?: CatalogAdminsProductOption;
    }
    export interface DeleteOptionRequest {
        productCode: string;
        attributeFQN: string;
    }
    export interface GetOptionRequest {
        productCode: string;
        attributeFQN: string;
        responseFields?: string;
    }
    export interface GetOptionsRequest {
        productCode: string;
        responseFields?: string;
    }
    export interface UpdateOptionRequest {
        productCode: string;
        attributeFQN: string;
        responseFields?: string;
        catalogAdminsProductOption?: CatalogAdminsProductOption;
    }
}
/**
* ProductOptionsApiService - interface
* 
* @export
* @interface ProductOptionsApi
*/
export interface ProductOptionsApiService {
    /**
    * Add an option to a product. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Add Product Option
    * @param {string} productCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CatalogAdminsProductOption} [catalogAdminsProductOption] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductOptionsApiInterface
    */
    addOptionRaw(requestParameters: productOptionsApiParams.AddOptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsProductOption>>;

    /**
    * Add an option to a product. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Add Product Option
    */
    addOption(requestParameters: productOptionsApiParams.AddOptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsProductOption>;

    /**
    * Delete a individual option for a product.
    * @summary Delete Product Option
    * @param {string} productCode 
    * @param {string} attributeFQN 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductOptionsApiInterface
    */
    deleteOptionRaw(requestParameters: productOptionsApiParams.DeleteOptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Delete a individual option for a product.
    * Delete Product Option
    */
    deleteOption(requestParameters: productOptionsApiParams.DeleteOptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Get an individual option for a product. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Get Product Option
    * @param {string} productCode 
    * @param {string} attributeFQN 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductOptionsApiInterface
    */
    getOptionRaw(requestParameters: productOptionsApiParams.GetOptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsProductOption>>;

    /**
    * Get an individual option for a product. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Get Product Option
    */
    getOption(requestParameters: productOptionsApiParams.GetOptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsProductOption>;

    /**
    * Get options for a product. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Get Product Options
    * @param {string} productCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductOptionsApiInterface
    */
    getOptionsRaw(requestParameters: productOptionsApiParams.GetOptionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CatalogAdminsProductOption>>>;

    /**
    * Get options for a product. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Get Product Options
    */
    getOptions(requestParameters: productOptionsApiParams.GetOptionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CatalogAdminsProductOption>>;

    /**
    * Update an individual option for a product. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Update Product Option
    * @param {string} productCode 
    * @param {string} attributeFQN 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CatalogAdminsProductOption} [catalogAdminsProductOption] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductOptionsApiInterface
    */
    updateOptionRaw(requestParameters: productOptionsApiParams.UpdateOptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsProductOption>>;

    /**
    * Update an individual option for a product. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Update Product Option
    */
    updateOption(requestParameters: productOptionsApiParams.UpdateOptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsProductOption>;

}


/**
 * 
 */
export class ProductOptionsApi extends runtime.BaseAPI implements ProductOptionsApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Add an option to a product. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Add Product Option
     */


    async addOptionRaw(requestParameters: productOptionsApiParams.AddOptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsProductOption>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling addOption.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/Options`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsProductOption,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Add an option to a product. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Add Product Option
     */
    async addOption(requestParameters: productOptionsApiParams.AddOptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsProductOption> {
        const response = await this.addOptionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a individual option for a product.
     * Delete Product Option
     */


    async deleteOptionRaw(requestParameters: productOptionsApiParams.DeleteOptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling deleteOption.');
        }

        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling deleteOption.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/Options/{attributeFQN}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a individual option for a product.
     * Delete Product Option
     */
    async deleteOption(requestParameters: productOptionsApiParams.DeleteOptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteOptionRaw(requestParameters, initOverrides);
    }

    /**
     * Get an individual option for a product. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Get Product Option
     */


    async getOptionRaw(requestParameters: productOptionsApiParams.GetOptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsProductOption>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling getOption.');
        }

        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling getOption.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/Options/{attributeFQN}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get an individual option for a product. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Get Product Option
     */
    async getOption(requestParameters: productOptionsApiParams.GetOptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsProductOption> {
        const response = await this.getOptionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get options for a product. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Get Product Options
     */


    async getOptionsRaw(requestParameters: productOptionsApiParams.GetOptionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CatalogAdminsProductOption>>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling getOptions.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/Options`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get options for a product. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Get Product Options
     */
    async getOptions(requestParameters: productOptionsApiParams.GetOptionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CatalogAdminsProductOption>> {
        const response = await this.getOptionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update an individual option for a product. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Update Product Option
     */


    async updateOptionRaw(requestParameters: productOptionsApiParams.UpdateOptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsProductOption>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling updateOption.');
        }

        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling updateOption.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/Options/{attributeFQN}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsProductOption,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update an individual option for a product. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Update Product Option
     */
    async updateOption(requestParameters: productOptionsApiParams.UpdateOptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsProductOption> {
        const response = await this.updateOptionRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
