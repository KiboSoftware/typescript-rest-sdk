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
  ProductVariation,
  ProductVariationCollection,
  ProductVariationDeltaPrice,
  ProductVariationFixedPrice,
  ProductVariationPagedCollection,
} from '../models';


export namespace productVariationsApiParams { 
    export interface AddProductVariationLocalizedDeltaPriceRequest {
        productCode: string;
        variationKey: string;
        responseFields?: string;
        productVariationDeltaPrice?: ProductVariationDeltaPrice;
    }
    export interface AddProductVariationLocalizedPriceRequest {
        productCode: string;
        variationKey: string;
        responseFields?: string;
        productVariationFixedPrice?: ProductVariationFixedPrice;
    }
    export interface DeleteProductVariationRequest {
        productCode: string;
        variationKey: string;
    }
    export interface DeleteProductVariationLocalizedDeltaPriceRequest {
        productCode: string;
        variationKey: string;
        currencyCode: string;
    }
    export interface DeleteProductVariationLocalizedPriceRequest {
        productCode: string;
        variationKey: string;
        currencyCode: string;
    }
    export interface GetProductVariationRequest {
        productCode: string;
        variationKey: string;
        responseFields?: string;
    }
    export interface GetProductVariationLocalizedDeltaPriceRequest {
        productCode: string;
        variationKey: string;
        currencyCode: string;
        responseFields?: string;
    }
    export interface GetProductVariationLocalizedDeltaPricesRequest {
        productCode: string;
        variationKey: string;
        responseFields?: string;
    }
    export interface GetProductVariationLocalizedPriceRequest {
        productCode: string;
        variationKey: string;
        currencyCode: string;
        responseFields?: string;
    }
    export interface GetProductVariationLocalizedPricesRequest {
        productCode: string;
        variationKey: string;
        responseFields?: string;
    }
    export interface GetProductVariationsRequest {
        productCode: string;
        startIndex?: number;
        pageSize?: number;
        sortBy?: string;
        filter?: string;
        responseFields?: string;
    }
    export interface UpdateProductVariationRequest {
        productCode: string;
        variationKey: string;
        responseFields?: string;
        productVariation?: ProductVariation;
    }
    export interface UpdateProductVariationLocalizedDeltaPriceRequest {
        productCode: string;
        variationKey: string;
        currencyCode: string;
        responseFields?: string;
        productVariationDeltaPrice?: ProductVariationDeltaPrice;
    }
    export interface UpdateProductVariationLocalizedDeltaPricesRequest {
        productCode: string;
        variationKey: string;
        responseFields?: string;
        productVariationDeltaPrice?: Array<ProductVariationDeltaPrice>;
    }
    export interface UpdateProductVariationLocalizedPriceRequest {
        productCode: string;
        variationKey: string;
        currencyCode: string;
        responseFields?: string;
        productVariationFixedPrice?: ProductVariationFixedPrice;
    }
    export interface UpdateProductVariationLocalizedPricesRequest {
        productCode: string;
        variationKey: string;
        responseFields?: string;
        productVariationFixedPrice?: Array<ProductVariationFixedPrice>;
    }
    export interface UpdateProductVariationsRequest {
        productCode: string;
        responseFields?: string;
        productVariationCollection?: ProductVariationCollection;
    }
}
/**
* ProductVariationsApiService - interface
* 
* @export
* @interface ProductVariationsApi
*/
export interface ProductVariationsApiService {
    /**
    * Add a product variation localized delta price.
    * @summary Add Product Variation Localized Delta Price
    * @param {string} productCode 
    * @param {string} variationKey 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {ProductVariationDeltaPrice} [productVariationDeltaPrice] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductVariationsApiInterface
    */
    addProductVariationLocalizedDeltaPriceRaw(requestParameters: productVariationsApiParams.AddProductVariationLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductVariationDeltaPrice>>;

    /**
    * Add a product variation localized delta price.
    * Add Product Variation Localized Delta Price
    */
    addProductVariationLocalizedDeltaPrice(requestParameters: productVariationsApiParams.AddProductVariationLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductVariationDeltaPrice>;

    /**
    * Add a product variation localized price.
    * @summary Add Product Variation Localized Price
    * @param {string} productCode 
    * @param {string} variationKey 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {ProductVariationFixedPrice} [productVariationFixedPrice] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductVariationsApiInterface
    */
    addProductVariationLocalizedPriceRaw(requestParameters: productVariationsApiParams.AddProductVariationLocalizedPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductVariationFixedPrice>>;

    /**
    * Add a product variation localized price.
    * Add Product Variation Localized Price
    */
    addProductVariationLocalizedPrice(requestParameters: productVariationsApiParams.AddProductVariationLocalizedPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductVariationFixedPrice>;

    /**
    * Deletes an existing product variation. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Delete Product Variation
    * @param {string} productCode Merchant-created code associated with the product, for example, a SKU. Required.
    * @param {string} variationKey Unique identifier for a single product variation. System-supplied and read-only.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductVariationsApiInterface
    */
    deleteProductVariationRaw(requestParameters: productVariationsApiParams.DeleteProductVariationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Deletes an existing product variation. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Delete Product Variation
    */
    deleteProductVariation(requestParameters: productVariationsApiParams.DeleteProductVariationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Delete the product variation localized delta prices for a specific currency.
    * @summary Delete Product Variation Localized Delta Price
    * @param {string} productCode 
    * @param {string} variationKey 
    * @param {string} currencyCode 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductVariationsApiInterface
    */
    deleteProductVariationLocalizedDeltaPriceRaw(requestParameters: productVariationsApiParams.DeleteProductVariationLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Delete the product variation localized delta prices for a specific currency.
    * Delete Product Variation Localized Delta Price
    */
    deleteProductVariationLocalizedDeltaPrice(requestParameters: productVariationsApiParams.DeleteProductVariationLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Delete the product variation localized price for a specific currency code.
    * @summary Delete Product Variation Localized Price by Currency
    * @param {string} productCode 
    * @param {string} variationKey 
    * @param {string} currencyCode 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductVariationsApiInterface
    */
    deleteProductVariationLocalizedPriceRaw(requestParameters: productVariationsApiParams.DeleteProductVariationLocalizedPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Delete the product variation localized price for a specific currency code.
    * Delete Product Variation Localized Price by Currency
    */
    deleteProductVariationLocalizedPrice(requestParameters: productVariationsApiParams.DeleteProductVariationLocalizedPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Retrieves an existing product variation for a specific product and variation key. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
    * @summary Get Product Variation
    * @param {string} productCode Merchant-created code associated with the product, for example, a SKU. Required.
    * @param {string} variationKey Unique identifier for a single product variation. System-supplied and read-only.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductVariationsApiInterface
    */
    getProductVariationRaw(requestParameters: productVariationsApiParams.GetProductVariationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductVariation>>;

    /**
    * Retrieves an existing product variation for a specific product and variation key. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
    * Get Product Variation
    */
    getProductVariation(requestParameters: productVariationsApiParams.GetProductVariationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductVariation>;

    /**
    * Retrieve the product variation localized delta prices for a specific currency.
    * @summary Get Product Variation Localized Delta Price
    * @param {string} productCode 
    * @param {string} variationKey 
    * @param {string} currencyCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductVariationsApiInterface
    */
    getProductVariationLocalizedDeltaPriceRaw(requestParameters: productVariationsApiParams.GetProductVariationLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductVariationDeltaPrice>>;

    /**
    * Retrieve the product variation localized delta prices for a specific currency.
    * Get Product Variation Localized Delta Price
    */
    getProductVariationLocalizedDeltaPrice(requestParameters: productVariationsApiParams.GetProductVariationLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductVariationDeltaPrice>;

    /**
    * Get product variation localized delta prices.
    * @summary Get Product Variation Localized Delta Prices
    * @param {string} productCode 
    * @param {string} variationKey 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductVariationsApiInterface
    */
    getProductVariationLocalizedDeltaPricesRaw(requestParameters: productVariationsApiParams.GetProductVariationLocalizedDeltaPricesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProductVariationDeltaPrice>>>;

    /**
    * Get product variation localized delta prices.
    * Get Product Variation Localized Delta Prices
    */
    getProductVariationLocalizedDeltaPrices(requestParameters: productVariationsApiParams.GetProductVariationLocalizedDeltaPricesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProductVariationDeltaPrice>>;

    /**
    * Get the product variation localized price for a specific currency code.
    * @summary Get Product Variation Localized Price by Currency
    * @param {string} productCode 
    * @param {string} variationKey 
    * @param {string} currencyCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductVariationsApiInterface
    */
    getProductVariationLocalizedPriceRaw(requestParameters: productVariationsApiParams.GetProductVariationLocalizedPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductVariationFixedPrice>>;

    /**
    * Get the product variation localized price for a specific currency code.
    * Get Product Variation Localized Price by Currency
    */
    getProductVariationLocalizedPrice(requestParameters: productVariationsApiParams.GetProductVariationLocalizedPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductVariationFixedPrice>;

    /**
    * Get product variation localized prices.
    * @summary Get Product Variation Localized Prices
    * @param {string} productCode 
    * @param {string} variationKey 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductVariationsApiInterface
    */
    getProductVariationLocalizedPricesRaw(requestParameters: productVariationsApiParams.GetProductVariationLocalizedPricesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProductVariationFixedPrice>>>;

    /**
    * Get product variation localized prices.
    * Get Product Variation Localized Prices
    */
    getProductVariationLocalizedPrices(requestParameters: productVariationsApiParams.GetProductVariationLocalizedPricesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProductVariationFixedPrice>>;

    /**
    * Retrieves a paged list of product variations for a specific product according to any specified filter criteria and sort options. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
    * @summary Get Product Variations
    * @param {string} productCode Merchant-supplied code associated with the product, for example, a SKU. Required.
    * @param {number} [startIndex] Used to page results from a query. Indicates the zero-based offset in the complete result set where the returned entities begin. For example, with a PageSize of 25, to get the 51st through the 75th items, startIndex&#x3D;3. The default value is 0. Optional.
    * @param {number} [pageSize] Used to page results from a query. Indicates the maximum number of entities to return from a query. The default value is 20 and the maximum value is 200. Optional.
    * @param {string} [sortBy] The element to sort the results by and the order in which the results appear. Either ascending (a-z) or descending (z-a) order. Optional.
    * @param {string} [filter] A set of filter expressions representing the search parameters for a query: eq&#x3D;equals, ne&#x3D;not equals, gt&#x3D;greater than, lt &#x3D; less than or equals, gt &#x3D; greater than or equals, lt &#x3D; less than or equals, sw &#x3D; starts with, or cont &#x3D; contains. Optional.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductVariationsApiInterface
    */
    getProductVariationsRaw(requestParameters: productVariationsApiParams.GetProductVariationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductVariationPagedCollection>>;

    /**
    * Retrieves a paged list of product variations for a specific product according to any specified filter criteria and sort options. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
    * Get Product Variations
    */
    getProductVariations(requestParameters: productVariationsApiParams.GetProductVariationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductVariationPagedCollection>;

    /**
    * Modifies an existing product variation specified by its variation key. Typically used to change the price or inventory count of an existing product variation. Read-only options are ignored.<br><br>This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Update Product Variation
    * @param {string} productCode Merchant-created code associated with the product, for example, a SKU. Required.
    * @param {string} variationKey Unique identifier for a single variation. System-supplied and read-only.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {ProductVariation} [productVariation] Properties of the product variation that you are modifying. Required.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductVariationsApiInterface
    */
    updateProductVariationRaw(requestParameters: productVariationsApiParams.UpdateProductVariationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductVariation>>;

    /**
    * Modifies an existing product variation specified by its variation key. Typically used to change the price or inventory count of an existing product variation. Read-only options are ignored.<br><br>This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Update Product Variation
    */
    updateProductVariation(requestParameters: productVariationsApiParams.UpdateProductVariationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductVariation>;

    /**
    * Update the product variation localized delta prices for a specific currency.
    * @summary Update Product Variation Localized Delta Price
    * @param {string} productCode 
    * @param {string} variationKey 
    * @param {string} currencyCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {ProductVariationDeltaPrice} [productVariationDeltaPrice] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductVariationsApiInterface
    */
    updateProductVariationLocalizedDeltaPriceRaw(requestParameters: productVariationsApiParams.UpdateProductVariationLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductVariationDeltaPrice>>;

    /**
    * Update the product variation localized delta prices for a specific currency.
    * Update Product Variation Localized Delta Price
    */
    updateProductVariationLocalizedDeltaPrice(requestParameters: productVariationsApiParams.UpdateProductVariationLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductVariationDeltaPrice>;

    /**
    * Update product variation localized delta prices.
    * @summary Update Product Variation Localized Delta Prices
    * @param {string} productCode 
    * @param {string} variationKey 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {Array<ProductVariationDeltaPrice>} [productVariationDeltaPrice] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductVariationsApiInterface
    */
    updateProductVariationLocalizedDeltaPricesRaw(requestParameters: productVariationsApiParams.UpdateProductVariationLocalizedDeltaPricesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProductVariationDeltaPrice>>>;

    /**
    * Update product variation localized delta prices.
    * Update Product Variation Localized Delta Prices
    */
    updateProductVariationLocalizedDeltaPrices(requestParameters: productVariationsApiParams.UpdateProductVariationLocalizedDeltaPricesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProductVariationDeltaPrice>>;

    /**
    * Update the product variation localized price for a specific currency code.
    * @summary Update Product Variation Localized Price by Currency
    * @param {string} productCode 
    * @param {string} variationKey 
    * @param {string} currencyCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {ProductVariationFixedPrice} [productVariationFixedPrice] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductVariationsApiInterface
    */
    updateProductVariationLocalizedPriceRaw(requestParameters: productVariationsApiParams.UpdateProductVariationLocalizedPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductVariationFixedPrice>>;

    /**
    * Update the product variation localized price for a specific currency code.
    * Update Product Variation Localized Price by Currency
    */
    updateProductVariationLocalizedPrice(requestParameters: productVariationsApiParams.UpdateProductVariationLocalizedPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductVariationFixedPrice>;

    /**
    * Update product variation localized prices
    * @summary Update Product Variation Localized Prices
    * @param {string} productCode 
    * @param {string} variationKey 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {Array<ProductVariationFixedPrice>} [productVariationFixedPrice] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductVariationsApiInterface
    */
    updateProductVariationLocalizedPricesRaw(requestParameters: productVariationsApiParams.UpdateProductVariationLocalizedPricesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProductVariationFixedPrice>>>;

    /**
    * Update product variation localized prices
    * Update Product Variation Localized Prices
    */
    updateProductVariationLocalizedPrices(requestParameters: productVariationsApiParams.UpdateProductVariationLocalizedPricesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProductVariationFixedPrice>>;

    /**
    * Modifies multiple product variations for an existing product in one operation. Use to set IsActive to true for variations that represent configurable options for sale. Also use to change the price or inventory count of an existing product variation. Read-only options are ignored.<br><br>This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Update Product Variations
    * @param {string} productCode Merchant-supplied code associated with the product, for example, a SKU. Required.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {ProductVariationCollection} [productVariationCollection] Properties of the product variations that you are modifying. Required.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductVariationsApiInterface
    */
    updateProductVariationsRaw(requestParameters: productVariationsApiParams.UpdateProductVariationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductVariationCollection>>;

    /**
    * Modifies multiple product variations for an existing product in one operation. Use to set IsActive to true for variations that represent configurable options for sale. Also use to change the price or inventory count of an existing product variation. Read-only options are ignored.<br><br>This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Update Product Variations
    */
    updateProductVariations(requestParameters: productVariationsApiParams.UpdateProductVariationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductVariationCollection>;

}


/**
 * 
 */
export class ProductVariationsApi extends runtime.BaseAPI implements ProductVariationsApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Add a product variation localized delta price.
     * Add Product Variation Localized Delta Price
     */


    async addProductVariationLocalizedDeltaPriceRaw(requestParameters: productVariationsApiParams.AddProductVariationLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductVariationDeltaPrice>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling addProductVariationLocalizedDeltaPrice.');
        }

        if (requestParameters.variationKey === null || requestParameters.variationKey === undefined) {
            throw new runtime.RequiredError('variationKey','Required parameter requestParameters.variationKey was null or undefined when calling addProductVariationLocalizedDeltaPrice.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/variations/{variationKey}/localizedDeltaPrice`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"variationKey"}}`, encodeURIComponent(String(requestParameters.variationKey))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.productVariationDeltaPrice,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Add a product variation localized delta price.
     * Add Product Variation Localized Delta Price
     */
    async addProductVariationLocalizedDeltaPrice(requestParameters: productVariationsApiParams.AddProductVariationLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductVariationDeltaPrice> {
        const response = await this.addProductVariationLocalizedDeltaPriceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Add a product variation localized price.
     * Add Product Variation Localized Price
     */


    async addProductVariationLocalizedPriceRaw(requestParameters: productVariationsApiParams.AddProductVariationLocalizedPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductVariationFixedPrice>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling addProductVariationLocalizedPrice.');
        }

        if (requestParameters.variationKey === null || requestParameters.variationKey === undefined) {
            throw new runtime.RequiredError('variationKey','Required parameter requestParameters.variationKey was null or undefined when calling addProductVariationLocalizedPrice.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/variations/{variationKey}/localizedPrice`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"variationKey"}}`, encodeURIComponent(String(requestParameters.variationKey))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.productVariationFixedPrice,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Add a product variation localized price.
     * Add Product Variation Localized Price
     */
    async addProductVariationLocalizedPrice(requestParameters: productVariationsApiParams.AddProductVariationLocalizedPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductVariationFixedPrice> {
        const response = await this.addProductVariationLocalizedPriceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes an existing product variation. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Delete Product Variation
     */


    async deleteProductVariationRaw(requestParameters: productVariationsApiParams.DeleteProductVariationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling deleteProductVariation.');
        }

        if (requestParameters.variationKey === null || requestParameters.variationKey === undefined) {
            throw new runtime.RequiredError('variationKey','Required parameter requestParameters.variationKey was null or undefined when calling deleteProductVariation.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/variations/{variationKey}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"variationKey"}}`, encodeURIComponent(String(requestParameters.variationKey))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes an existing product variation. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Delete Product Variation
     */
    async deleteProductVariation(requestParameters: productVariationsApiParams.DeleteProductVariationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteProductVariationRaw(requestParameters, initOverrides);
    }

    /**
     * Delete the product variation localized delta prices for a specific currency.
     * Delete Product Variation Localized Delta Price
     */


    async deleteProductVariationLocalizedDeltaPriceRaw(requestParameters: productVariationsApiParams.DeleteProductVariationLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling deleteProductVariationLocalizedDeltaPrice.');
        }

        if (requestParameters.variationKey === null || requestParameters.variationKey === undefined) {
            throw new runtime.RequiredError('variationKey','Required parameter requestParameters.variationKey was null or undefined when calling deleteProductVariationLocalizedDeltaPrice.');
        }

        if (requestParameters.currencyCode === null || requestParameters.currencyCode === undefined) {
            throw new runtime.RequiredError('currencyCode','Required parameter requestParameters.currencyCode was null or undefined when calling deleteProductVariationLocalizedDeltaPrice.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/variations/{variationKey}/localizedDeltaPrice/{currencyCode}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"variationKey"}}`, encodeURIComponent(String(requestParameters.variationKey))).replace(`{${"currencyCode"}}`, encodeURIComponent(String(requestParameters.currencyCode))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete the product variation localized delta prices for a specific currency.
     * Delete Product Variation Localized Delta Price
     */
    async deleteProductVariationLocalizedDeltaPrice(requestParameters: productVariationsApiParams.DeleteProductVariationLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteProductVariationLocalizedDeltaPriceRaw(requestParameters, initOverrides);
    }

    /**
     * Delete the product variation localized price for a specific currency code.
     * Delete Product Variation Localized Price by Currency
     */


    async deleteProductVariationLocalizedPriceRaw(requestParameters: productVariationsApiParams.DeleteProductVariationLocalizedPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling deleteProductVariationLocalizedPrice.');
        }

        if (requestParameters.variationKey === null || requestParameters.variationKey === undefined) {
            throw new runtime.RequiredError('variationKey','Required parameter requestParameters.variationKey was null or undefined when calling deleteProductVariationLocalizedPrice.');
        }

        if (requestParameters.currencyCode === null || requestParameters.currencyCode === undefined) {
            throw new runtime.RequiredError('currencyCode','Required parameter requestParameters.currencyCode was null or undefined when calling deleteProductVariationLocalizedPrice.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/variations/{variationKey}/localizedPrice/{currencyCode}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"variationKey"}}`, encodeURIComponent(String(requestParameters.variationKey))).replace(`{${"currencyCode"}}`, encodeURIComponent(String(requestParameters.currencyCode))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete the product variation localized price for a specific currency code.
     * Delete Product Variation Localized Price by Currency
     */
    async deleteProductVariationLocalizedPrice(requestParameters: productVariationsApiParams.DeleteProductVariationLocalizedPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteProductVariationLocalizedPriceRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves an existing product variation for a specific product and variation key. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
     * Get Product Variation
     */


    async getProductVariationRaw(requestParameters: productVariationsApiParams.GetProductVariationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductVariation>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling getProductVariation.');
        }

        if (requestParameters.variationKey === null || requestParameters.variationKey === undefined) {
            throw new runtime.RequiredError('variationKey','Required parameter requestParameters.variationKey was null or undefined when calling getProductVariation.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/variations/{variationKey}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"variationKey"}}`, encodeURIComponent(String(requestParameters.variationKey))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves an existing product variation for a specific product and variation key. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
     * Get Product Variation
     */
    async getProductVariation(requestParameters: productVariationsApiParams.GetProductVariationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductVariation> {
        const response = await this.getProductVariationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve the product variation localized delta prices for a specific currency.
     * Get Product Variation Localized Delta Price
     */


    async getProductVariationLocalizedDeltaPriceRaw(requestParameters: productVariationsApiParams.GetProductVariationLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductVariationDeltaPrice>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling getProductVariationLocalizedDeltaPrice.');
        }

        if (requestParameters.variationKey === null || requestParameters.variationKey === undefined) {
            throw new runtime.RequiredError('variationKey','Required parameter requestParameters.variationKey was null or undefined when calling getProductVariationLocalizedDeltaPrice.');
        }

        if (requestParameters.currencyCode === null || requestParameters.currencyCode === undefined) {
            throw new runtime.RequiredError('currencyCode','Required parameter requestParameters.currencyCode was null or undefined when calling getProductVariationLocalizedDeltaPrice.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/variations/{variationKey}/localizedDeltaPrice/{currencyCode}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"variationKey"}}`, encodeURIComponent(String(requestParameters.variationKey))).replace(`{${"currencyCode"}}`, encodeURIComponent(String(requestParameters.currencyCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieve the product variation localized delta prices for a specific currency.
     * Get Product Variation Localized Delta Price
     */
    async getProductVariationLocalizedDeltaPrice(requestParameters: productVariationsApiParams.GetProductVariationLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductVariationDeltaPrice> {
        const response = await this.getProductVariationLocalizedDeltaPriceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get product variation localized delta prices.
     * Get Product Variation Localized Delta Prices
     */


    async getProductVariationLocalizedDeltaPricesRaw(requestParameters: productVariationsApiParams.GetProductVariationLocalizedDeltaPricesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProductVariationDeltaPrice>>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling getProductVariationLocalizedDeltaPrices.');
        }

        if (requestParameters.variationKey === null || requestParameters.variationKey === undefined) {
            throw new runtime.RequiredError('variationKey','Required parameter requestParameters.variationKey was null or undefined when calling getProductVariationLocalizedDeltaPrices.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/variations/{variationKey}/localizedDeltaPrice`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"variationKey"}}`, encodeURIComponent(String(requestParameters.variationKey))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get product variation localized delta prices.
     * Get Product Variation Localized Delta Prices
     */
    async getProductVariationLocalizedDeltaPrices(requestParameters: productVariationsApiParams.GetProductVariationLocalizedDeltaPricesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProductVariationDeltaPrice>> {
        const response = await this.getProductVariationLocalizedDeltaPricesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get the product variation localized price for a specific currency code.
     * Get Product Variation Localized Price by Currency
     */


    async getProductVariationLocalizedPriceRaw(requestParameters: productVariationsApiParams.GetProductVariationLocalizedPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductVariationFixedPrice>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling getProductVariationLocalizedPrice.');
        }

        if (requestParameters.variationKey === null || requestParameters.variationKey === undefined) {
            throw new runtime.RequiredError('variationKey','Required parameter requestParameters.variationKey was null or undefined when calling getProductVariationLocalizedPrice.');
        }

        if (requestParameters.currencyCode === null || requestParameters.currencyCode === undefined) {
            throw new runtime.RequiredError('currencyCode','Required parameter requestParameters.currencyCode was null or undefined when calling getProductVariationLocalizedPrice.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/variations/{variationKey}/localizedPrice/{currencyCode}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"variationKey"}}`, encodeURIComponent(String(requestParameters.variationKey))).replace(`{${"currencyCode"}}`, encodeURIComponent(String(requestParameters.currencyCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get the product variation localized price for a specific currency code.
     * Get Product Variation Localized Price by Currency
     */
    async getProductVariationLocalizedPrice(requestParameters: productVariationsApiParams.GetProductVariationLocalizedPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductVariationFixedPrice> {
        const response = await this.getProductVariationLocalizedPriceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get product variation localized prices.
     * Get Product Variation Localized Prices
     */


    async getProductVariationLocalizedPricesRaw(requestParameters: productVariationsApiParams.GetProductVariationLocalizedPricesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProductVariationFixedPrice>>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling getProductVariationLocalizedPrices.');
        }

        if (requestParameters.variationKey === null || requestParameters.variationKey === undefined) {
            throw new runtime.RequiredError('variationKey','Required parameter requestParameters.variationKey was null or undefined when calling getProductVariationLocalizedPrices.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/variations/{variationKey}/localizedPrice`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"variationKey"}}`, encodeURIComponent(String(requestParameters.variationKey))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get product variation localized prices.
     * Get Product Variation Localized Prices
     */
    async getProductVariationLocalizedPrices(requestParameters: productVariationsApiParams.GetProductVariationLocalizedPricesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProductVariationFixedPrice>> {
        const response = await this.getProductVariationLocalizedPricesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a paged list of product variations for a specific product according to any specified filter criteria and sort options. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
     * Get Product Variations
     */


    async getProductVariationsRaw(requestParameters: productVariationsApiParams.GetProductVariationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductVariationPagedCollection>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling getProductVariations.');
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

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/variations`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a paged list of product variations for a specific product according to any specified filter criteria and sort options. This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
     * Get Product Variations
     */
    async getProductVariations(requestParameters: productVariationsApiParams.GetProductVariationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductVariationPagedCollection> {
        const response = await this.getProductVariationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Modifies an existing product variation specified by its variation key. Typically used to change the price or inventory count of an existing product variation. Read-only options are ignored.<br><br>This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Update Product Variation
     */


    async updateProductVariationRaw(requestParameters: productVariationsApiParams.UpdateProductVariationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductVariation>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling updateProductVariation.');
        }

        if (requestParameters.variationKey === null || requestParameters.variationKey === undefined) {
            throw new runtime.RequiredError('variationKey','Required parameter requestParameters.variationKey was null or undefined when calling updateProductVariation.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/variations/{variationKey}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"variationKey"}}`, encodeURIComponent(String(requestParameters.variationKey))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.productVariation,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Modifies an existing product variation specified by its variation key. Typically used to change the price or inventory count of an existing product variation. Read-only options are ignored.<br><br>This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Update Product Variation
     */
    async updateProductVariation(requestParameters: productVariationsApiParams.UpdateProductVariationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductVariation> {
        const response = await this.updateProductVariationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update the product variation localized delta prices for a specific currency.
     * Update Product Variation Localized Delta Price
     */


    async updateProductVariationLocalizedDeltaPriceRaw(requestParameters: productVariationsApiParams.UpdateProductVariationLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductVariationDeltaPrice>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling updateProductVariationLocalizedDeltaPrice.');
        }

        if (requestParameters.variationKey === null || requestParameters.variationKey === undefined) {
            throw new runtime.RequiredError('variationKey','Required parameter requestParameters.variationKey was null or undefined when calling updateProductVariationLocalizedDeltaPrice.');
        }

        if (requestParameters.currencyCode === null || requestParameters.currencyCode === undefined) {
            throw new runtime.RequiredError('currencyCode','Required parameter requestParameters.currencyCode was null or undefined when calling updateProductVariationLocalizedDeltaPrice.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/variations/{variationKey}/localizedDeltaPrice/{currencyCode}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"variationKey"}}`, encodeURIComponent(String(requestParameters.variationKey))).replace(`{${"currencyCode"}}`, encodeURIComponent(String(requestParameters.currencyCode))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.productVariationDeltaPrice,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update the product variation localized delta prices for a specific currency.
     * Update Product Variation Localized Delta Price
     */
    async updateProductVariationLocalizedDeltaPrice(requestParameters: productVariationsApiParams.UpdateProductVariationLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductVariationDeltaPrice> {
        const response = await this.updateProductVariationLocalizedDeltaPriceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update product variation localized delta prices.
     * Update Product Variation Localized Delta Prices
     */


    async updateProductVariationLocalizedDeltaPricesRaw(requestParameters: productVariationsApiParams.UpdateProductVariationLocalizedDeltaPricesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProductVariationDeltaPrice>>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling updateProductVariationLocalizedDeltaPrices.');
        }

        if (requestParameters.variationKey === null || requestParameters.variationKey === undefined) {
            throw new runtime.RequiredError('variationKey','Required parameter requestParameters.variationKey was null or undefined when calling updateProductVariationLocalizedDeltaPrices.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/variations/{variationKey}/localizedDeltaPrice`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"variationKey"}}`, encodeURIComponent(String(requestParameters.variationKey))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.productVariationDeltaPrice,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update product variation localized delta prices.
     * Update Product Variation Localized Delta Prices
     */
    async updateProductVariationLocalizedDeltaPrices(requestParameters: productVariationsApiParams.UpdateProductVariationLocalizedDeltaPricesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProductVariationDeltaPrice>> {
        const response = await this.updateProductVariationLocalizedDeltaPricesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update the product variation localized price for a specific currency code.
     * Update Product Variation Localized Price by Currency
     */


    async updateProductVariationLocalizedPriceRaw(requestParameters: productVariationsApiParams.UpdateProductVariationLocalizedPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductVariationFixedPrice>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling updateProductVariationLocalizedPrice.');
        }

        if (requestParameters.variationKey === null || requestParameters.variationKey === undefined) {
            throw new runtime.RequiredError('variationKey','Required parameter requestParameters.variationKey was null or undefined when calling updateProductVariationLocalizedPrice.');
        }

        if (requestParameters.currencyCode === null || requestParameters.currencyCode === undefined) {
            throw new runtime.RequiredError('currencyCode','Required parameter requestParameters.currencyCode was null or undefined when calling updateProductVariationLocalizedPrice.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/variations/{variationKey}/localizedPrice/{currencyCode}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"variationKey"}}`, encodeURIComponent(String(requestParameters.variationKey))).replace(`{${"currencyCode"}}`, encodeURIComponent(String(requestParameters.currencyCode))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.productVariationFixedPrice,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update the product variation localized price for a specific currency code.
     * Update Product Variation Localized Price by Currency
     */
    async updateProductVariationLocalizedPrice(requestParameters: productVariationsApiParams.UpdateProductVariationLocalizedPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductVariationFixedPrice> {
        const response = await this.updateProductVariationLocalizedPriceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update product variation localized prices
     * Update Product Variation Localized Prices
     */


    async updateProductVariationLocalizedPricesRaw(requestParameters: productVariationsApiParams.UpdateProductVariationLocalizedPricesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProductVariationFixedPrice>>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling updateProductVariationLocalizedPrices.');
        }

        if (requestParameters.variationKey === null || requestParameters.variationKey === undefined) {
            throw new runtime.RequiredError('variationKey','Required parameter requestParameters.variationKey was null or undefined when calling updateProductVariationLocalizedPrices.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/variations/{variationKey}/localizedPrice`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"variationKey"}}`, encodeURIComponent(String(requestParameters.variationKey))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.productVariationFixedPrice,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update product variation localized prices
     * Update Product Variation Localized Prices
     */
    async updateProductVariationLocalizedPrices(requestParameters: productVariationsApiParams.UpdateProductVariationLocalizedPricesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProductVariationFixedPrice>> {
        const response = await this.updateProductVariationLocalizedPricesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Modifies multiple product variations for an existing product in one operation. Use to set IsActive to true for variations that represent configurable options for sale. Also use to change the price or inventory count of an existing product variation. Read-only options are ignored.<br><br>This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Update Product Variations
     */


    async updateProductVariationsRaw(requestParameters: productVariationsApiParams.UpdateProductVariationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductVariationCollection>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling updateProductVariations.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/variations`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.productVariationCollection,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Modifies multiple product variations for an existing product in one operation. Use to set IsActive to true for variations that represent configurable options for sale. Also use to change the price or inventory count of an existing product variation. Read-only options are ignored.<br><br>This current version of the Products API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access product data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Update Product Variations
     */
    async updateProductVariations(requestParameters: productVariationsApiParams.UpdateProductVariationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductVariationCollection> {
        const response = await this.updateProductVariationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
