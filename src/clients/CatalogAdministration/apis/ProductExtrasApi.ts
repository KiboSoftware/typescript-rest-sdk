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
  ProductExtra,
  ProductExtraValueDeltaPrice,
} from '../models';


export namespace productExtrasApiParams { 
    export interface AddExtraRequest {
        productCode: string;
        responseFields?: string;
        productExtra?: ProductExtra;
    }
    export interface AddExtraValueLocalizedDeltaPriceRequest {
        productCode: string;
        attributeFQN: string;
        value: string;
        responseFields?: string;
        productExtraValueDeltaPrice?: ProductExtraValueDeltaPrice;
    }
    export interface DeleteExtraRequest {
        productCode: string;
        attributeFQN: string;
    }
    export interface DeleteExtraValueLocalizedDeltaPriceRequest {
        productCode: string;
        attributeFQN: string;
        value: string;
        currencyCode: string;
    }
    export interface GetExtraRequest {
        productCode: string;
        attributeFQN: string;
        responseFields?: string;
    }
    export interface GetExtraValueLocalizedDeltaPriceRequest {
        productCode: string;
        attributeFQN: string;
        value: string;
        currencyCode: string;
        responseFields?: string;
    }
    export interface GetExtraValueLocalizedDeltaPricesRequest {
        productCode: string;
        attributeFQN: string;
        value: string;
        responseFields?: string;
    }
    export interface GetExtrasRequest {
        productCode: string;
        responseFields?: string;
    }
    export interface UpdateExtraRequest {
        productCode: string;
        attributeFQN: string;
        responseFields?: string;
        productExtra?: ProductExtra;
    }
    export interface UpdateExtraValueLocalizedDeltaPriceRequest {
        productCode: string;
        attributeFQN: string;
        value: string;
        currencyCode: string;
        responseFields?: string;
        productExtraValueDeltaPrice?: ProductExtraValueDeltaPrice;
    }
    export interface UpdateExtraValueLocalizedDeltaPricesRequest {
        productCode: string;
        attributeFQN: string;
        value: string;
        responseFields?: string;
        productExtraValueDeltaPrice?: Array<ProductExtraValueDeltaPrice>;
    }
}
/**
* ProductExtrasApiService - interface
* 
* @export
* @interface ProductExtrasApi
*/
export interface ProductExtrasApiService {
    /**
    * Add extra. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Add Product Extra
    * @param {string} productCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {ProductExtra} [productExtra] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductExtrasApiInterface
    */
    addExtraRaw(requestParameters: productExtrasApiParams.AddExtraRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductExtra>>;

    /**
    * Add extra. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Add Product Extra
    */
    addExtra(requestParameters: productExtrasApiParams.AddExtraRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductExtra>;

    /**
    * Add a extra value localized delta price. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Add Extra Localized Delta Price
    * @param {string} productCode 
    * @param {string} attributeFQN 
    * @param {string} value 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {ProductExtraValueDeltaPrice} [productExtraValueDeltaPrice] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductExtrasApiInterface
    */
    addExtraValueLocalizedDeltaPriceRaw(requestParameters: productExtrasApiParams.AddExtraValueLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductExtraValueDeltaPrice>>;

    /**
    * Add a extra value localized delta price. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Add Extra Localized Delta Price
    */
    addExtraValueLocalizedDeltaPrice(requestParameters: productExtrasApiParams.AddExtraValueLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductExtraValueDeltaPrice>;

    /**
    * Delete extra
    * @summary Delete Product Extra
    * @param {string} productCode 
    * @param {string} attributeFQN 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductExtrasApiInterface
    */
    deleteExtraRaw(requestParameters: productExtrasApiParams.DeleteExtraRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Delete extra
    * Delete Product Extra
    */
    deleteExtra(requestParameters: productExtrasApiParams.DeleteExtraRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Delete extra value localized delta price.
    * @summary Delete Extra Localized Delta Price
    * @param {string} productCode 
    * @param {string} attributeFQN 
    * @param {string} value 
    * @param {string} currencyCode 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductExtrasApiInterface
    */
    deleteExtraValueLocalizedDeltaPriceRaw(requestParameters: productExtrasApiParams.DeleteExtraValueLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Delete extra value localized delta price.
    * Delete Extra Localized Delta Price
    */
    deleteExtraValueLocalizedDeltaPrice(requestParameters: productExtrasApiParams.DeleteExtraValueLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Get individual extra. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Get Product Extra
    * @param {string} productCode 
    * @param {string} attributeFQN 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductExtrasApiInterface
    */
    getExtraRaw(requestParameters: productExtrasApiParams.GetExtraRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductExtra>>;

    /**
    * Get individual extra. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Get Product Extra
    */
    getExtra(requestParameters: productExtrasApiParams.GetExtraRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductExtra>;

    /**
    * Get extra value localized delta price. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Get Extra Localized Delta Price by Currency
    * @param {string} productCode 
    * @param {string} attributeFQN 
    * @param {string} value 
    * @param {string} currencyCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductExtrasApiInterface
    */
    getExtraValueLocalizedDeltaPriceRaw(requestParameters: productExtrasApiParams.GetExtraValueLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductExtraValueDeltaPrice>>;

    /**
    * Get extra value localized delta price. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Get Extra Localized Delta Price by Currency
    */
    getExtraValueLocalizedDeltaPrice(requestParameters: productExtrasApiParams.GetExtraValueLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductExtraValueDeltaPrice>;

    /**
    * Get extra value localized delta price. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Get Extra Localized Delta Price
    * @param {string} productCode 
    * @param {string} attributeFQN 
    * @param {string} value 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductExtrasApiInterface
    */
    getExtraValueLocalizedDeltaPricesRaw(requestParameters: productExtrasApiParams.GetExtraValueLocalizedDeltaPricesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProductExtraValueDeltaPrice>>>;

    /**
    * Get extra value localized delta price. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Get Extra Localized Delta Price
    */
    getExtraValueLocalizedDeltaPrices(requestParameters: productExtrasApiParams.GetExtraValueLocalizedDeltaPricesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProductExtraValueDeltaPrice>>;

    /**
    * Get extras for the product. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Get Product Extras
    * @param {string} productCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductExtrasApiInterface
    */
    getExtrasRaw(requestParameters: productExtrasApiParams.GetExtrasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProductExtra>>>;

    /**
    * Get extras for the product. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Get Product Extras
    */
    getExtras(requestParameters: productExtrasApiParams.GetExtrasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProductExtra>>;

    /**
    * Update extra. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Update Product Extra
    * @param {string} productCode 
    * @param {string} attributeFQN 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {ProductExtra} [productExtra] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductExtrasApiInterface
    */
    updateExtraRaw(requestParameters: productExtrasApiParams.UpdateExtraRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductExtra>>;

    /**
    * Update extra. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Update Product Extra
    */
    updateExtra(requestParameters: productExtrasApiParams.UpdateExtraRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductExtra>;

    /**
    * Update extra value localized delta price. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Update Extra Localized Delta Price by Currency
    * @param {string} productCode 
    * @param {string} attributeFQN 
    * @param {string} value 
    * @param {string} currencyCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {ProductExtraValueDeltaPrice} [productExtraValueDeltaPrice] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductExtrasApiInterface
    */
    updateExtraValueLocalizedDeltaPriceRaw(requestParameters: productExtrasApiParams.UpdateExtraValueLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductExtraValueDeltaPrice>>;

    /**
    * Update extra value localized delta price. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Update Extra Localized Delta Price by Currency
    */
    updateExtraValueLocalizedDeltaPrice(requestParameters: productExtrasApiParams.UpdateExtraValueLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductExtraValueDeltaPrice>;

    /**
    * Update extra value localized delta price. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Update Extra Localized Delta Price
    * @param {string} productCode 
    * @param {string} attributeFQN 
    * @param {string} value 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {Array<ProductExtraValueDeltaPrice>} [productExtraValueDeltaPrice] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductExtrasApiInterface
    */
    updateExtraValueLocalizedDeltaPricesRaw(requestParameters: productExtrasApiParams.UpdateExtraValueLocalizedDeltaPricesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProductExtraValueDeltaPrice>>>;

    /**
    * Update extra value localized delta price. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Update Extra Localized Delta Price
    */
    updateExtraValueLocalizedDeltaPrices(requestParameters: productExtrasApiParams.UpdateExtraValueLocalizedDeltaPricesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProductExtraValueDeltaPrice>>;

}


/**
 * 
 */
export class ProductExtrasApi extends runtime.BaseAPI implements ProductExtrasApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Add extra. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Add Product Extra
     */


    async addExtraRaw(requestParameters: productExtrasApiParams.AddExtraRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductExtra>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling addExtra.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/Extras`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.productExtra,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Add extra. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Add Product Extra
     */
    async addExtra(requestParameters: productExtrasApiParams.AddExtraRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductExtra> {
        const response = await this.addExtraRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Add a extra value localized delta price. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Add Extra Localized Delta Price
     */


    async addExtraValueLocalizedDeltaPriceRaw(requestParameters: productExtrasApiParams.AddExtraValueLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductExtraValueDeltaPrice>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling addExtraValueLocalizedDeltaPrice.');
        }

        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling addExtraValueLocalizedDeltaPrice.');
        }

        if (requestParameters.value === null || requestParameters.value === undefined) {
            throw new runtime.RequiredError('value','Required parameter requestParameters.value was null or undefined when calling addExtraValueLocalizedDeltaPrice.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/Extras/{attributeFQN}/Values/{value}/localizedDeltaPrice`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))).replace(`{${"value"}}`, encodeURIComponent(String(requestParameters.value))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.productExtraValueDeltaPrice,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Add a extra value localized delta price. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Add Extra Localized Delta Price
     */
    async addExtraValueLocalizedDeltaPrice(requestParameters: productExtrasApiParams.AddExtraValueLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductExtraValueDeltaPrice> {
        const response = await this.addExtraValueLocalizedDeltaPriceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete extra
     * Delete Product Extra
     */


    async deleteExtraRaw(requestParameters: productExtrasApiParams.DeleteExtraRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling deleteExtra.');
        }

        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling deleteExtra.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/Extras/{attributeFQN}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete extra
     * Delete Product Extra
     */
    async deleteExtra(requestParameters: productExtrasApiParams.DeleteExtraRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteExtraRaw(requestParameters, initOverrides);
    }

    /**
     * Delete extra value localized delta price.
     * Delete Extra Localized Delta Price
     */


    async deleteExtraValueLocalizedDeltaPriceRaw(requestParameters: productExtrasApiParams.DeleteExtraValueLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling deleteExtraValueLocalizedDeltaPrice.');
        }

        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling deleteExtraValueLocalizedDeltaPrice.');
        }

        if (requestParameters.value === null || requestParameters.value === undefined) {
            throw new runtime.RequiredError('value','Required parameter requestParameters.value was null or undefined when calling deleteExtraValueLocalizedDeltaPrice.');
        }

        if (requestParameters.currencyCode === null || requestParameters.currencyCode === undefined) {
            throw new runtime.RequiredError('currencyCode','Required parameter requestParameters.currencyCode was null or undefined when calling deleteExtraValueLocalizedDeltaPrice.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/Extras/{attributeFQN}/Values/{value}/localizedDeltaPrice/{currencyCode}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))).replace(`{${"value"}}`, encodeURIComponent(String(requestParameters.value))).replace(`{${"currencyCode"}}`, encodeURIComponent(String(requestParameters.currencyCode))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete extra value localized delta price.
     * Delete Extra Localized Delta Price
     */
    async deleteExtraValueLocalizedDeltaPrice(requestParameters: productExtrasApiParams.DeleteExtraValueLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteExtraValueLocalizedDeltaPriceRaw(requestParameters, initOverrides);
    }

    /**
     * Get individual extra. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Get Product Extra
     */


    async getExtraRaw(requestParameters: productExtrasApiParams.GetExtraRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductExtra>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling getExtra.');
        }

        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling getExtra.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/Extras/{attributeFQN}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get individual extra. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Get Product Extra
     */
    async getExtra(requestParameters: productExtrasApiParams.GetExtraRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductExtra> {
        const response = await this.getExtraRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get extra value localized delta price. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Get Extra Localized Delta Price by Currency
     */


    async getExtraValueLocalizedDeltaPriceRaw(requestParameters: productExtrasApiParams.GetExtraValueLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductExtraValueDeltaPrice>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling getExtraValueLocalizedDeltaPrice.');
        }

        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling getExtraValueLocalizedDeltaPrice.');
        }

        if (requestParameters.value === null || requestParameters.value === undefined) {
            throw new runtime.RequiredError('value','Required parameter requestParameters.value was null or undefined when calling getExtraValueLocalizedDeltaPrice.');
        }

        if (requestParameters.currencyCode === null || requestParameters.currencyCode === undefined) {
            throw new runtime.RequiredError('currencyCode','Required parameter requestParameters.currencyCode was null or undefined when calling getExtraValueLocalizedDeltaPrice.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/Extras/{attributeFQN}/Values/{value}/localizedDeltaPrice/{currencyCode}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))).replace(`{${"value"}}`, encodeURIComponent(String(requestParameters.value))).replace(`{${"currencyCode"}}`, encodeURIComponent(String(requestParameters.currencyCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get extra value localized delta price. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Get Extra Localized Delta Price by Currency
     */
    async getExtraValueLocalizedDeltaPrice(requestParameters: productExtrasApiParams.GetExtraValueLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductExtraValueDeltaPrice> {
        const response = await this.getExtraValueLocalizedDeltaPriceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get extra value localized delta price. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Get Extra Localized Delta Price
     */


    async getExtraValueLocalizedDeltaPricesRaw(requestParameters: productExtrasApiParams.GetExtraValueLocalizedDeltaPricesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProductExtraValueDeltaPrice>>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling getExtraValueLocalizedDeltaPrices.');
        }

        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling getExtraValueLocalizedDeltaPrices.');
        }

        if (requestParameters.value === null || requestParameters.value === undefined) {
            throw new runtime.RequiredError('value','Required parameter requestParameters.value was null or undefined when calling getExtraValueLocalizedDeltaPrices.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/Extras/{attributeFQN}/Values/{value}/localizedDeltaPrice`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))).replace(`{${"value"}}`, encodeURIComponent(String(requestParameters.value))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get extra value localized delta price. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Get Extra Localized Delta Price
     */
    async getExtraValueLocalizedDeltaPrices(requestParameters: productExtrasApiParams.GetExtraValueLocalizedDeltaPricesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProductExtraValueDeltaPrice>> {
        const response = await this.getExtraValueLocalizedDeltaPricesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get extras for the product. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Get Product Extras
     */


    async getExtrasRaw(requestParameters: productExtrasApiParams.GetExtrasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProductExtra>>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling getExtras.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/Extras`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get extras for the product. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Get Product Extras
     */
    async getExtras(requestParameters: productExtrasApiParams.GetExtrasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProductExtra>> {
        const response = await this.getExtrasRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update extra. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Update Product Extra
     */


    async updateExtraRaw(requestParameters: productExtrasApiParams.UpdateExtraRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductExtra>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling updateExtra.');
        }

        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling updateExtra.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/Extras/{attributeFQN}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.productExtra,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update extra. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Update Product Extra
     */
    async updateExtra(requestParameters: productExtrasApiParams.UpdateExtraRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductExtra> {
        const response = await this.updateExtraRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update extra value localized delta price. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Update Extra Localized Delta Price by Currency
     */


    async updateExtraValueLocalizedDeltaPriceRaw(requestParameters: productExtrasApiParams.UpdateExtraValueLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductExtraValueDeltaPrice>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling updateExtraValueLocalizedDeltaPrice.');
        }

        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling updateExtraValueLocalizedDeltaPrice.');
        }

        if (requestParameters.value === null || requestParameters.value === undefined) {
            throw new runtime.RequiredError('value','Required parameter requestParameters.value was null or undefined when calling updateExtraValueLocalizedDeltaPrice.');
        }

        if (requestParameters.currencyCode === null || requestParameters.currencyCode === undefined) {
            throw new runtime.RequiredError('currencyCode','Required parameter requestParameters.currencyCode was null or undefined when calling updateExtraValueLocalizedDeltaPrice.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/Extras/{attributeFQN}/Values/{value}/localizedDeltaPrice/{currencyCode}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))).replace(`{${"value"}}`, encodeURIComponent(String(requestParameters.value))).replace(`{${"currencyCode"}}`, encodeURIComponent(String(requestParameters.currencyCode))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.productExtraValueDeltaPrice,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update extra value localized delta price. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Update Extra Localized Delta Price by Currency
     */
    async updateExtraValueLocalizedDeltaPrice(requestParameters: productExtrasApiParams.UpdateExtraValueLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductExtraValueDeltaPrice> {
        const response = await this.updateExtraValueLocalizedDeltaPriceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update extra value localized delta price. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Update Extra Localized Delta Price
     */


    async updateExtraValueLocalizedDeltaPricesRaw(requestParameters: productExtrasApiParams.UpdateExtraValueLocalizedDeltaPricesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProductExtraValueDeltaPrice>>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling updateExtraValueLocalizedDeltaPrices.');
        }

        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling updateExtraValueLocalizedDeltaPrices.');
        }

        if (requestParameters.value === null || requestParameters.value === undefined) {
            throw new runtime.RequiredError('value','Required parameter requestParameters.value was null or undefined when calling updateExtraValueLocalizedDeltaPrices.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/Extras/{attributeFQN}/Values/{value}/localizedDeltaPrice`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))).replace(`{${"value"}}`, encodeURIComponent(String(requestParameters.value))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.productExtraValueDeltaPrice,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update extra value localized delta price. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Update Extra Localized Delta Price
     */
    async updateExtraValueLocalizedDeltaPrices(requestParameters: productExtrasApiParams.UpdateExtraValueLocalizedDeltaPricesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProductExtraValueDeltaPrice>> {
        const response = await this.updateExtraValueLocalizedDeltaPricesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
