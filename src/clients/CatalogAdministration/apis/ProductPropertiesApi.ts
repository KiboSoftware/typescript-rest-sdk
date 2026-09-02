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
  CatalogAdminsProductProperty,
  ProductPropertyValueLocalizedContent,
} from '../models';


export namespace productPropertiesApiParams { 
    export interface AddPropertyRequest {
        productCode: string;
        batchJobCode?: string;
        responseFields?: string;
        catalogAdminsProductProperty?: CatalogAdminsProductProperty;
    }
    export interface AddPropertyValueLocalizedContentRequest {
        productCode: string;
        attributeFQN: string;
        value: string;
        responseFields?: string;
        productPropertyValueLocalizedContent?: ProductPropertyValueLocalizedContent;
    }
    export interface DeletePropertyRequest {
        productCode: string;
        attributeFQN: string;
        batchJobCode?: string;
    }
    export interface DeletePropertyValueLocalizedContentRequest {
        productCode: string;
        attributeFQN: string;
        value: string;
        localeCode: string;
    }
    export interface GetPropertiesRequest {
        productCode: string;
        responseFields?: string;
    }
    export interface GetPropertyRequest {
        productCode: string;
        attributeFQN: string;
        responseFields?: string;
    }
    export interface GetPropertyValueLocalizedContentRequest {
        productCode: string;
        attributeFQN: string;
        value: string;
        localeCode: string;
        responseFields?: string;
    }
    export interface GetPropertyValueLocalizedContentsRequest {
        productCode: string;
        attributeFQN: string;
        value: string;
        responseFields?: string;
    }
    export interface UpdatePropertyRequest {
        productCode: string;
        attributeFQN: string;
        batchJobCode?: string;
        allowSyscalcValueUpdates?: boolean;
        responseFields?: string;
        catalogAdminsProductProperty?: CatalogAdminsProductProperty;
    }
    export interface UpdatePropertyValueLocalizedContentRequest {
        productCode: string;
        attributeFQN: string;
        value: string;
        localeCode: string;
        responseFields?: string;
        productPropertyValueLocalizedContent?: ProductPropertyValueLocalizedContent;
    }
    export interface UpdatePropertyValueLocalizedContentsRequest {
        productCode: string;
        attributeFQN: string;
        value: string;
        responseFields?: string;
        productPropertyValueLocalizedContent?: Array<ProductPropertyValueLocalizedContent>;
    }
}
/**
* ProductPropertiesApiService - interface
* 
* @export
* @interface ProductPropertiesApi
*/
export interface ProductPropertiesApiService {
    /**
    * Add a property to a product. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Add Product Property
    * @param {string} productCode 
    * @param {string} [batchJobCode] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CatalogAdminsProductProperty} [catalogAdminsProductProperty] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductPropertiesApiInterface
    */
    addPropertyRaw(requestParameters: productPropertiesApiParams.AddPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsProductProperty>>;

    /**
    * Add a property to a product. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Add Product Property
    */
    addProperty(requestParameters: productPropertiesApiParams.AddPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsProductProperty>;

    /**
    * Add property value localized content.
    * @summary Add Product Property Localized Content
    * @param {string} productCode 
    * @param {string} attributeFQN 
    * @param {string} value 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {ProductPropertyValueLocalizedContent} [productPropertyValueLocalizedContent] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductPropertiesApiInterface
    */
    addPropertyValueLocalizedContentRaw(requestParameters: productPropertiesApiParams.AddPropertyValueLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductPropertyValueLocalizedContent>>;

    /**
    * Add property value localized content.
    * Add Product Property Localized Content
    */
    addPropertyValueLocalizedContent(requestParameters: productPropertiesApiParams.AddPropertyValueLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductPropertyValueLocalizedContent>;

    /**
    * Delete a specific product property.
    * @summary Delete Product Property
    * @param {string} productCode 
    * @param {string} attributeFQN 
    * @param {string} [batchJobCode] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductPropertiesApiInterface
    */
    deletePropertyRaw(requestParameters: productPropertiesApiParams.DeletePropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Delete a specific product property.
    * Delete Product Property
    */
    deleteProperty(requestParameters: productPropertiesApiParams.DeletePropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Delete property value localized content by locale code.
    * @summary Delete Product Property Localized Content by Locale
    * @param {string} productCode 
    * @param {string} attributeFQN 
    * @param {string} value 
    * @param {string} localeCode 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductPropertiesApiInterface
    */
    deletePropertyValueLocalizedContentRaw(requestParameters: productPropertiesApiParams.DeletePropertyValueLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Delete property value localized content by locale code.
    * Delete Product Property Localized Content by Locale
    */
    deletePropertyValueLocalizedContent(requestParameters: productPropertiesApiParams.DeletePropertyValueLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Get properties for a product. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Get Product Properties
    * @param {string} productCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductPropertiesApiInterface
    */
    getPropertiesRaw(requestParameters: productPropertiesApiParams.GetPropertiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CatalogAdminsProductProperty>>>;

    /**
    * Get properties for a product. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Get Product Properties
    */
    getProperties(requestParameters: productPropertiesApiParams.GetPropertiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CatalogAdminsProductProperty>>;

    /**
    * Get a specific product property. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Get Product Property
    * @param {string} productCode 
    * @param {string} attributeFQN 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductPropertiesApiInterface
    */
    getPropertyRaw(requestParameters: productPropertiesApiParams.GetPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsProductProperty>>;

    /**
    * Get a specific product property. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Get Product Property
    */
    getProperty(requestParameters: productPropertiesApiParams.GetPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsProductProperty>;

    /**
    * Get property value localized content.
    * @summary Get Product Property Localized Content by Locale
    * @param {string} productCode 
    * @param {string} attributeFQN 
    * @param {string} value 
    * @param {string} localeCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductPropertiesApiInterface
    */
    getPropertyValueLocalizedContentRaw(requestParameters: productPropertiesApiParams.GetPropertyValueLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductPropertyValueLocalizedContent>>;

    /**
    * Get property value localized content.
    * Get Product Property Localized Content by Locale
    */
    getPropertyValueLocalizedContent(requestParameters: productPropertiesApiParams.GetPropertyValueLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductPropertyValueLocalizedContent>;

    /**
    * Get property value localized content.
    * @summary Get Product Property Localized Contents
    * @param {string} productCode 
    * @param {string} attributeFQN 
    * @param {string} value 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductPropertiesApiInterface
    */
    getPropertyValueLocalizedContentsRaw(requestParameters: productPropertiesApiParams.GetPropertyValueLocalizedContentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProductPropertyValueLocalizedContent>>>;

    /**
    * Get property value localized content.
    * Get Product Property Localized Contents
    */
    getPropertyValueLocalizedContents(requestParameters: productPropertiesApiParams.GetPropertyValueLocalizedContentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProductPropertyValueLocalizedContent>>;

    /**
    * Update a specific product property. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Update Product Property
    * @param {string} productCode 
    * @param {string} attributeFQN 
    * @param {string} [batchJobCode] 
    * @param {boolean} [allowSyscalcValueUpdates] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CatalogAdminsProductProperty} [catalogAdminsProductProperty] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductPropertiesApiInterface
    */
    updatePropertyRaw(requestParameters: productPropertiesApiParams.UpdatePropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsProductProperty>>;

    /**
    * Update a specific product property. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Update Product Property
    */
    updateProperty(requestParameters: productPropertiesApiParams.UpdatePropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsProductProperty>;

    /**
    * Update property value localized content by locale code.
    * @summary Update Product Property Localized Content by Locale
    * @param {string} productCode 
    * @param {string} attributeFQN 
    * @param {string} value 
    * @param {string} localeCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {ProductPropertyValueLocalizedContent} [productPropertyValueLocalizedContent] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductPropertiesApiInterface
    */
    updatePropertyValueLocalizedContentRaw(requestParameters: productPropertiesApiParams.UpdatePropertyValueLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductPropertyValueLocalizedContent>>;

    /**
    * Update property value localized content by locale code.
    * Update Product Property Localized Content by Locale
    */
    updatePropertyValueLocalizedContent(requestParameters: productPropertiesApiParams.UpdatePropertyValueLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductPropertyValueLocalizedContent>;

    /**
    * Update property value localized content.
    * @summary Update Product Property Localized Content
    * @param {string} productCode 
    * @param {string} attributeFQN 
    * @param {string} value 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {Array<ProductPropertyValueLocalizedContent>} [productPropertyValueLocalizedContent] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductPropertiesApiInterface
    */
    updatePropertyValueLocalizedContentsRaw(requestParameters: productPropertiesApiParams.UpdatePropertyValueLocalizedContentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProductPropertyValueLocalizedContent>>>;

    /**
    * Update property value localized content.
    * Update Product Property Localized Content
    */
    updatePropertyValueLocalizedContents(requestParameters: productPropertiesApiParams.UpdatePropertyValueLocalizedContentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProductPropertyValueLocalizedContent>>;

}


/**
 * 
 */
export class ProductPropertiesApi extends runtime.BaseAPI implements ProductPropertiesApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Add a property to a product. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Add Product Property
     */


    async addPropertyRaw(requestParameters: productPropertiesApiParams.AddPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsProductProperty>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling addProperty.');
        }

        const queryParameters: any = {};

        if (requestParameters.batchJobCode !== undefined) {
            queryParameters['batchJobCode'] = requestParameters.batchJobCode;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/Properties`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsProductProperty,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Add a property to a product. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Add Product Property
     */
    async addProperty(requestParameters: productPropertiesApiParams.AddPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsProductProperty> {
        const response = await this.addPropertyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Add property value localized content.
     * Add Product Property Localized Content
     */


    async addPropertyValueLocalizedContentRaw(requestParameters: productPropertiesApiParams.AddPropertyValueLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductPropertyValueLocalizedContent>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling addPropertyValueLocalizedContent.');
        }

        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling addPropertyValueLocalizedContent.');
        }

        if (requestParameters.value === null || requestParameters.value === undefined) {
            throw new runtime.RequiredError('value','Required parameter requestParameters.value was null or undefined when calling addPropertyValueLocalizedContent.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/Properties/{attributeFQN}/values/{value}/LocalizedContent`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))).replace(`{${"value"}}`, encodeURIComponent(String(requestParameters.value))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.productPropertyValueLocalizedContent,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Add property value localized content.
     * Add Product Property Localized Content
     */
    async addPropertyValueLocalizedContent(requestParameters: productPropertiesApiParams.AddPropertyValueLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductPropertyValueLocalizedContent> {
        const response = await this.addPropertyValueLocalizedContentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a specific product property.
     * Delete Product Property
     */


    async deletePropertyRaw(requestParameters: productPropertiesApiParams.DeletePropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling deleteProperty.');
        }

        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling deleteProperty.');
        }

        const queryParameters: any = {};

        if (requestParameters.batchJobCode !== undefined) {
            queryParameters['batchJobCode'] = requestParameters.batchJobCode;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/Properties/{attributeFQN}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a specific product property.
     * Delete Product Property
     */
    async deleteProperty(requestParameters: productPropertiesApiParams.DeletePropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePropertyRaw(requestParameters, initOverrides);
    }

    /**
     * Delete property value localized content by locale code.
     * Delete Product Property Localized Content by Locale
     */


    async deletePropertyValueLocalizedContentRaw(requestParameters: productPropertiesApiParams.DeletePropertyValueLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling deletePropertyValueLocalizedContent.');
        }

        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling deletePropertyValueLocalizedContent.');
        }

        if (requestParameters.value === null || requestParameters.value === undefined) {
            throw new runtime.RequiredError('value','Required parameter requestParameters.value was null or undefined when calling deletePropertyValueLocalizedContent.');
        }

        if (requestParameters.localeCode === null || requestParameters.localeCode === undefined) {
            throw new runtime.RequiredError('localeCode','Required parameter requestParameters.localeCode was null or undefined when calling deletePropertyValueLocalizedContent.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/Properties/{attributeFQN}/values/{value}/LocalizedContent/{localeCode}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))).replace(`{${"value"}}`, encodeURIComponent(String(requestParameters.value))).replace(`{${"localeCode"}}`, encodeURIComponent(String(requestParameters.localeCode))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete property value localized content by locale code.
     * Delete Product Property Localized Content by Locale
     */
    async deletePropertyValueLocalizedContent(requestParameters: productPropertiesApiParams.DeletePropertyValueLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePropertyValueLocalizedContentRaw(requestParameters, initOverrides);
    }

    /**
     * Get properties for a product. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Get Product Properties
     */


    async getPropertiesRaw(requestParameters: productPropertiesApiParams.GetPropertiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CatalogAdminsProductProperty>>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling getProperties.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/Properties`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get properties for a product. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Get Product Properties
     */
    async getProperties(requestParameters: productPropertiesApiParams.GetPropertiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CatalogAdminsProductProperty>> {
        const response = await this.getPropertiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a specific product property. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Get Product Property
     */


    async getPropertyRaw(requestParameters: productPropertiesApiParams.GetPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsProductProperty>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling getProperty.');
        }

        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling getProperty.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/Properties/{attributeFQN}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get a specific product property. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Get Product Property
     */
    async getProperty(requestParameters: productPropertiesApiParams.GetPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsProductProperty> {
        const response = await this.getPropertyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get property value localized content.
     * Get Product Property Localized Content by Locale
     */


    async getPropertyValueLocalizedContentRaw(requestParameters: productPropertiesApiParams.GetPropertyValueLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductPropertyValueLocalizedContent>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling getPropertyValueLocalizedContent.');
        }

        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling getPropertyValueLocalizedContent.');
        }

        if (requestParameters.value === null || requestParameters.value === undefined) {
            throw new runtime.RequiredError('value','Required parameter requestParameters.value was null or undefined when calling getPropertyValueLocalizedContent.');
        }

        if (requestParameters.localeCode === null || requestParameters.localeCode === undefined) {
            throw new runtime.RequiredError('localeCode','Required parameter requestParameters.localeCode was null or undefined when calling getPropertyValueLocalizedContent.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/Properties/{attributeFQN}/values/{value}/LocalizedContent/{localeCode}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))).replace(`{${"value"}}`, encodeURIComponent(String(requestParameters.value))).replace(`{${"localeCode"}}`, encodeURIComponent(String(requestParameters.localeCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get property value localized content.
     * Get Product Property Localized Content by Locale
     */
    async getPropertyValueLocalizedContent(requestParameters: productPropertiesApiParams.GetPropertyValueLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductPropertyValueLocalizedContent> {
        const response = await this.getPropertyValueLocalizedContentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get property value localized content.
     * Get Product Property Localized Contents
     */


    async getPropertyValueLocalizedContentsRaw(requestParameters: productPropertiesApiParams.GetPropertyValueLocalizedContentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProductPropertyValueLocalizedContent>>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling getPropertyValueLocalizedContents.');
        }

        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling getPropertyValueLocalizedContents.');
        }

        if (requestParameters.value === null || requestParameters.value === undefined) {
            throw new runtime.RequiredError('value','Required parameter requestParameters.value was null or undefined when calling getPropertyValueLocalizedContents.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/Properties/{attributeFQN}/values/{value}/LocalizedContent`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))).replace(`{${"value"}}`, encodeURIComponent(String(requestParameters.value))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get property value localized content.
     * Get Product Property Localized Contents
     */
    async getPropertyValueLocalizedContents(requestParameters: productPropertiesApiParams.GetPropertyValueLocalizedContentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProductPropertyValueLocalizedContent>> {
        const response = await this.getPropertyValueLocalizedContentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a specific product property. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Update Product Property
     */


    async updatePropertyRaw(requestParameters: productPropertiesApiParams.UpdatePropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsProductProperty>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling updateProperty.');
        }

        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling updateProperty.');
        }

        const queryParameters: any = {};

        if (requestParameters.batchJobCode !== undefined) {
            queryParameters['batchJobCode'] = requestParameters.batchJobCode;
        }

        if (requestParameters.allowSyscalcValueUpdates !== undefined) {
            queryParameters['allowSyscalcValueUpdates'] = requestParameters.allowSyscalcValueUpdates;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/Properties/{attributeFQN}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsProductProperty,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update a specific product property. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Update Product Property
     */
    async updateProperty(requestParameters: productPropertiesApiParams.UpdatePropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsProductProperty> {
        const response = await this.updatePropertyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update property value localized content by locale code.
     * Update Product Property Localized Content by Locale
     */


    async updatePropertyValueLocalizedContentRaw(requestParameters: productPropertiesApiParams.UpdatePropertyValueLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductPropertyValueLocalizedContent>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling updatePropertyValueLocalizedContent.');
        }

        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling updatePropertyValueLocalizedContent.');
        }

        if (requestParameters.value === null || requestParameters.value === undefined) {
            throw new runtime.RequiredError('value','Required parameter requestParameters.value was null or undefined when calling updatePropertyValueLocalizedContent.');
        }

        if (requestParameters.localeCode === null || requestParameters.localeCode === undefined) {
            throw new runtime.RequiredError('localeCode','Required parameter requestParameters.localeCode was null or undefined when calling updatePropertyValueLocalizedContent.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/Properties/{attributeFQN}/values/{value}/LocalizedContent/{localeCode}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))).replace(`{${"value"}}`, encodeURIComponent(String(requestParameters.value))).replace(`{${"localeCode"}}`, encodeURIComponent(String(requestParameters.localeCode))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.productPropertyValueLocalizedContent,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update property value localized content by locale code.
     * Update Product Property Localized Content by Locale
     */
    async updatePropertyValueLocalizedContent(requestParameters: productPropertiesApiParams.UpdatePropertyValueLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductPropertyValueLocalizedContent> {
        const response = await this.updatePropertyValueLocalizedContentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update property value localized content.
     * Update Product Property Localized Content
     */


    async updatePropertyValueLocalizedContentsRaw(requestParameters: productPropertiesApiParams.UpdatePropertyValueLocalizedContentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProductPropertyValueLocalizedContent>>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling updatePropertyValueLocalizedContents.');
        }

        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling updatePropertyValueLocalizedContents.');
        }

        if (requestParameters.value === null || requestParameters.value === undefined) {
            throw new runtime.RequiredError('value','Required parameter requestParameters.value was null or undefined when calling updatePropertyValueLocalizedContents.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/Properties/{attributeFQN}/values/{value}/LocalizedContent`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))).replace(`{${"value"}}`, encodeURIComponent(String(requestParameters.value))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.productPropertyValueLocalizedContent,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update property value localized content.
     * Update Product Property Localized Content
     */
    async updatePropertyValueLocalizedContents(requestParameters: productPropertiesApiParams.UpdatePropertyValueLocalizedContentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProductPropertyValueLocalizedContent>> {
        const response = await this.updatePropertyValueLocalizedContentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
