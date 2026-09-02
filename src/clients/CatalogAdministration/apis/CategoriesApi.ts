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
  CatalogAdminsCategory,
  CatalogAdminsCategoryAttribute,
  CatalogAdminsCategoryCollection,
  CatalogAdminsCategoryPagedCollection,
  CatalogAdminsDynamicExpression,
  CategoryAttributeCollection,
} from '../models';


export namespace categoriesApiParams { 
    export interface AddCategoryRequest {
        incrementSequence?: boolean;
        useProvidedId?: boolean;
        responseFields?: string;
        catalogAdminsCategory?: CatalogAdminsCategory;
    }
    export interface AddCategoryAttributeRequest {
        categoryId: number;
        responseFields?: string;
        catalogAdminsCategoryAttribute?: CatalogAdminsCategoryAttribute;
    }
    export interface AddProductsToCategoryRequest {
        categoryId: number;
        responseFields?: string;
        requestBody?: Array<string>;
    }
    export interface DeleteCategoryAttributeRequest {
        categoryId: number;
        attributeFQN: string;
    }
    export interface DeleteCategoryByIdRequest {
        categoryId: number;
        cascadeDelete?: boolean;
        forceDelete?: boolean;
        reassignToParent?: boolean;
    }
    export interface GetCategoriesRequest {
        startIndex?: number;
        pageSize?: number;
        sortBy?: string;
        filter?: string;
        includeAttributes?: boolean;
        responseGroups?: string;
        responseFields?: string;
    }
    export interface GetCategoryRequest {
        categoryId: number;
        includeAttributes?: boolean;
        responseFields?: string;
    }
    export interface GetCategoryAttributeRequest {
        categoryId: number;
        attributeFQN: string;
        responseFields?: string;
    }
    export interface GetCategoryAttributesRequest {
        categoryId: number;
        startIndex?: number;
        pageSize?: number;
        sortBy?: string;
        filter?: string;
        responseFields?: string;
    }
    export interface GetChildCategoriesRequest {
        categoryId: number;
        responseFields?: string;
    }
    export interface RemoveProductsFromCategoryRequest {
        categoryId: number;
        responseFields?: string;
        requestBody?: Array<string>;
    }
    export interface SearchCategoryAttributesRequest {
        startIndex?: number;
        pageSize?: number;
        sortBy?: string;
        filter?: string;
        includeAttributes?: boolean;
        responseGroups?: string;
        responseFields?: string;
    }
    export interface UpdateCategoryRequest {
        categoryId: number;
        cascadeVisibility?: boolean;
        responseFields?: string;
        catalogAdminsCategory?: CatalogAdminsCategory;
    }
    export interface UpdateCategoryAttributeRequest {
        categoryId: number;
        attributeFQN: string;
        responseFields?: string;
        catalogAdminsCategoryAttribute?: CatalogAdminsCategoryAttribute;
    }
    export interface ValidateDynamicExpressionRequest {
        responseFields?: string;
        catalogAdminsDynamicExpression?: CatalogAdminsDynamicExpression;
    }
    export interface ValidateRealTimeDynamicExpressionRequest {
        responseFields?: string;
        catalogAdminsDynamicExpression?: CatalogAdminsDynamicExpression;
    }
}
/**
* CategoriesApiService - interface
* 
* @export
* @interface CategoriesApi
*/
export interface CategoriesApiService {
    /**
    * Adds a new category to the catalog\'s category hierarchy. Specify a ParentCategoryID to determine where to locate the category in the hierarchy; if not specified it becomes a top-level category. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
    * @summary Add Category
    * @param {boolean} [incrementSequence] Sets the sequence number of the category to the current max sequence value plus 1 (e.g. 5 + 1 &#x3D; 6)
    * @param {boolean} [useProvidedId] If true, the provided Id value will be used as the CategoryId. If omitted or false, the system will generate a CategoryId
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CatalogAdminsCategory} [catalogAdminsCategory] Properties of the new category. Required properties ParentCategoryID and Content.Name.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CategoriesApiInterface
    */
    addCategoryRaw(requestParameters: categoriesApiParams.AddCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsCategory>>;

    /**
    * Adds a new category to the catalog\'s category hierarchy. Specify a ParentCategoryID to determine where to locate the category in the hierarchy; if not specified it becomes a top-level category. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
    * Add Category
    */
    addCategory(requestParameters: categoriesApiParams.AddCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsCategory>;

    /**
    * Adds a new category attribute to the category. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Add Category Attribute
    * @param {number} categoryId 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CatalogAdminsCategoryAttribute} [catalogAdminsCategoryAttribute] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CategoriesApiInterface
    */
    addCategoryAttributeRaw(requestParameters: categoriesApiParams.AddCategoryAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsCategoryAttribute>>;

    /**
    * Adds a new category attribute to the category. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Add Category Attribute
    */
    addCategoryAttribute(requestParameters: categoriesApiParams.AddCategoryAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsCategoryAttribute>;

    /**
    * Adds the products in the provided product code list to the specified category.
    * @summary Add Products to Category
    * @param {number} categoryId Unique identifier of the category that you want produts added to.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {Array<string>} [requestBody] A list of products to be added to the category.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CategoriesApiInterface
    */
    addProductsToCategoryRaw(requestParameters: categoriesApiParams.AddProductsToCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Adds the products in the provided product code list to the specified category.
    * Add Products to Category
    */
    addProductsToCategory(requestParameters: categoriesApiParams.AddProductsToCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Deletes the category attribute specified by its attributeFQN.
    * @summary Delete Category Attribute
    * @param {number} categoryId 
    * @param {string} attributeFQN 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CategoriesApiInterface
    */
    deleteCategoryAttributeRaw(requestParameters: categoriesApiParams.DeleteCategoryAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Deletes the category attribute specified by its attributeFQN.
    * Delete Category Attribute
    */
    deleteCategoryAttribute(requestParameters: categoriesApiParams.DeleteCategoryAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Deletes the category specified by its category ID. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Delete Category
    * @param {number} categoryId Unique identifier of the category that you want to delete.
    * @param {boolean} [cascadeDelete] If true, any subcategories of a category are deleted when this category is deleted. Otherwise only the given category is deleted. Default is false.
    * @param {boolean} [forceDelete] If true, category (and optionally subcategories) will be deleted even if there are products referecing them.  Default is false.
    * @param {boolean} [reassignToParent] If true, and child categories of the given category will be reassigned to the parent of the given category. Only applies if cascadeDelete is false. Default is false.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CategoriesApiInterface
    */
    deleteCategoryByIdRaw(requestParameters: categoriesApiParams.DeleteCategoryByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Deletes the category specified by its category ID. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Delete Category
    */
    deleteCategoryById(requestParameters: categoriesApiParams.DeleteCategoryByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Retrieves a list of categories according to any specified filter criteria and sort options. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
    * @summary Get Categories
    * @param {number} [startIndex] Used to page results from a query. Indicates the zero-based offset in the complete result set where the returned entities begin. The default value is 0.
    * @param {number} [pageSize] Used to page results from a query. Indicates the maximum number of entities to return from a query. The default value is 20 and the maximum value is 200.
    * @param {string} [sortBy] The element to sort the results by and the order in which the results appear. Either ascending (a-z) or descending (z-a) order.
    * @param {string} [filter] A set of filter expressions representing the search parameters for a query: eq&#x3D;equals, ne&#x3D;not equals, gt&#x3D;greater than, lt &#x3D; less than or equals, gt &#x3D; greater than or equals, lt &#x3D; less than or equals, sw &#x3D; starts with, or cont &#x3D; contains. Optional.
    * @param {boolean} [includeAttributes] 
    * @param {string} [responseGroups] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CategoriesApiInterface
    */
    getCategoriesRaw(requestParameters: categoriesApiParams.GetCategoriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsCategoryPagedCollection>>;

    /**
    * Retrieves a list of categories according to any specified filter criteria and sort options. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
    * Get Categories
    */
    getCategories(requestParameters: categoriesApiParams.GetCategoriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsCategoryPagedCollection>;

    /**
    * Retrieves the details of a single category. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Get Category
    * @param {number} categoryId Unique identifier of the category.
    * @param {boolean} [includeAttributes] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CategoriesApiInterface
    */
    getCategoryRaw(requestParameters: categoriesApiParams.GetCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsCategory>>;

    /**
    * Retrieves the details of a single category. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Get Category
    */
    getCategory(requestParameters: categoriesApiParams.GetCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsCategory>;

    /**
    * Retrieves the details of a single category attribute. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Get Category Attribute
    * @param {number} categoryId 
    * @param {string} attributeFQN 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CategoriesApiInterface
    */
    getCategoryAttributeRaw(requestParameters: categoriesApiParams.GetCategoryAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsCategoryAttribute>>;

    /**
    * Retrieves the details of a single category attribute. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Get Category Attribute
    */
    getCategoryAttribute(requestParameters: categoriesApiParams.GetCategoryAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsCategoryAttribute>;

    /**
    * Retrieves a list of category attributes. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Get Category Attributes
    * @param {number} categoryId 
    * @param {number} [startIndex] 
    * @param {number} [pageSize] 
    * @param {string} [sortBy] 
    * @param {string} [filter] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CategoriesApiInterface
    */
    getCategoryAttributesRaw(requestParameters: categoriesApiParams.GetCategoryAttributesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CategoryAttributeCollection>>;

    /**
    * Retrieves a list of category attributes. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Get Category Attributes
    */
    getCategoryAttributes(requestParameters: categoriesApiParams.GetCategoryAttributesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CategoryAttributeCollection>;

    /**
    * Retrieves the immediate subcategories of a category. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Get Child Categories
    * @param {number} categoryId Unique identifier of the category whose subcategories you want to get.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CategoriesApiInterface
    */
    getChildCategoriesRaw(requestParameters: categoriesApiParams.GetChildCategoriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsCategoryCollection>>;

    /**
    * Retrieves the immediate subcategories of a category. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Get Child Categories
    */
    getChildCategories(requestParameters: categoriesApiParams.GetChildCategoriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsCategoryCollection>;

    /**
    * Removes the products in the provided product code list from the specified category.
    * @summary Remove Products from Category
    * @param {number} categoryId Unique identifier of the category that you want products removed from.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {Array<string>} [requestBody] A list of products to be removed from the category.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CategoriesApiInterface
    */
    removeProductsFromCategoryRaw(requestParameters: categoriesApiParams.RemoveProductsFromCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Removes the products in the provided product code list from the specified category.
    * Remove Products from Category
    */
    removeProductsFromCategory(requestParameters: categoriesApiParams.RemoveProductsFromCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Retrieves a list of categories according to any specified filter criteria and sort options for attributes. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
    * @summary Search Category Attributes
    * @param {number} [startIndex] 
    * @param {number} [pageSize] 
    * @param {string} [sortBy] 
    * @param {string} [filter] 
    * @param {boolean} [includeAttributes] 
    * @param {string} [responseGroups] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CategoriesApiInterface
    */
    searchCategoryAttributesRaw(requestParameters: categoriesApiParams.SearchCategoryAttributesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsCategoryPagedCollection>>;

    /**
    * Retrieves a list of categories according to any specified filter criteria and sort options for attributes. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
    * Search Category Attributes
    */
    searchCategoryAttributes(requestParameters: categoriesApiParams.SearchCategoryAttributesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsCategoryPagedCollection>;

    /**
    * Modifies a category such as moving it to another location in the category tree, or changing whether it is visible on the storefront. This PUT replaces the existing resource, so be sure to include all the information that you want to maintain for the category. Any unspecified properties are set to null.<br><br>This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Update Category
    * @param {number} categoryId Unique identifier of the category that you want to modify. Required.
    * @param {boolean} [cascadeVisibility] If true, when changing the display option for the category, change it for all subcategories also. Optional.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CatalogAdminsCategory} [catalogAdminsCategory] Properties of the category that you want to modify. Required properties ParentCategoryID and Content.Name.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CategoriesApiInterface
    */
    updateCategoryRaw(requestParameters: categoriesApiParams.UpdateCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsCategory>>;

    /**
    * Modifies a category such as moving it to another location in the category tree, or changing whether it is visible on the storefront. This PUT replaces the existing resource, so be sure to include all the information that you want to maintain for the category. Any unspecified properties are set to null.<br><br>This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Update Category
    */
    updateCategory(requestParameters: categoriesApiParams.UpdateCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsCategory>;

    /**
    * Modifies the category attribute. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Update Category Attribute
    * @param {number} categoryId 
    * @param {string} attributeFQN 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CatalogAdminsCategoryAttribute} [catalogAdminsCategoryAttribute] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CategoriesApiInterface
    */
    updateCategoryAttributeRaw(requestParameters: categoriesApiParams.UpdateCategoryAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsCategoryAttribute>>;

    /**
    * Modifies the category attribute. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Update Category Attribute
    */
    updateCategoryAttribute(requestParameters: categoriesApiParams.UpdateCategoryAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsCategoryAttribute>;

    /**
    * Validate an expression for a dynamic category.
    * @summary Validate Dynamic Category Expression
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CatalogAdminsDynamicExpression} [catalogAdminsDynamicExpression] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CategoriesApiInterface
    */
    validateDynamicExpressionRaw(requestParameters: categoriesApiParams.ValidateDynamicExpressionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsDynamicExpression>>;

    /**
    * Validate an expression for a dynamic category.
    * Validate Dynamic Category Expression
    */
    validateDynamicExpression(requestParameters: categoriesApiParams.ValidateDynamicExpressionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsDynamicExpression>;

    /**
    * Validate an expression for a realtime dynamic category.
    * @summary Validate Realtime Dynamic Category Expression
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CatalogAdminsDynamicExpression} [catalogAdminsDynamicExpression] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CategoriesApiInterface
    */
    validateRealTimeDynamicExpressionRaw(requestParameters: categoriesApiParams.ValidateRealTimeDynamicExpressionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsDynamicExpression>>;

    /**
    * Validate an expression for a realtime dynamic category.
    * Validate Realtime Dynamic Category Expression
    */
    validateRealTimeDynamicExpression(requestParameters: categoriesApiParams.ValidateRealTimeDynamicExpressionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsDynamicExpression>;

}


/**
 * 
 */
export class CategoriesApi extends runtime.BaseAPI implements CategoriesApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Adds a new category to the catalog\'s category hierarchy. Specify a ParentCategoryID to determine where to locate the category in the hierarchy; if not specified it becomes a top-level category. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
     * Add Category
     */


    async addCategoryRaw(requestParameters: categoriesApiParams.AddCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsCategory>> {
        const queryParameters: any = {};

        if (requestParameters.incrementSequence !== undefined) {
            queryParameters['incrementSequence'] = requestParameters.incrementSequence;
        }

        if (requestParameters.useProvidedId !== undefined) {
            queryParameters['useProvidedId'] = requestParameters.useProvidedId;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/categories`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsCategory,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Adds a new category to the catalog\'s category hierarchy. Specify a ParentCategoryID to determine where to locate the category in the hierarchy; if not specified it becomes a top-level category. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
     * Add Category
     */
    async addCategory(requestParameters: categoriesApiParams.AddCategoryRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsCategory> {
        const response = await this.addCategoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Adds a new category attribute to the category. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Add Category Attribute
     */


    async addCategoryAttributeRaw(requestParameters: categoriesApiParams.AddCategoryAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsCategoryAttribute>> {
        if (requestParameters.categoryId === null || requestParameters.categoryId === undefined) {
            throw new runtime.RequiredError('categoryId','Required parameter requestParameters.categoryId was null or undefined when calling addCategoryAttribute.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/categories/{categoryId}/attributes`.replace(`{${"categoryId"}}`, encodeURIComponent(String(requestParameters.categoryId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsCategoryAttribute,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Adds a new category attribute to the category. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Add Category Attribute
     */
    async addCategoryAttribute(requestParameters: categoriesApiParams.AddCategoryAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsCategoryAttribute> {
        const response = await this.addCategoryAttributeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Adds the products in the provided product code list to the specified category.
     * Add Products to Category
     */


    async addProductsToCategoryRaw(requestParameters: categoriesApiParams.AddProductsToCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.categoryId === null || requestParameters.categoryId === undefined) {
            throw new runtime.RequiredError('categoryId','Required parameter requestParameters.categoryId was null or undefined when calling addProductsToCategory.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/categories/{categoryId}/add-products`.replace(`{${"categoryId"}}`, encodeURIComponent(String(requestParameters.categoryId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.requestBody,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Adds the products in the provided product code list to the specified category.
     * Add Products to Category
     */
    async addProductsToCategory(requestParameters: categoriesApiParams.AddProductsToCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.addProductsToCategoryRaw(requestParameters, initOverrides);
    }

    /**
     * Deletes the category attribute specified by its attributeFQN.
     * Delete Category Attribute
     */


    async deleteCategoryAttributeRaw(requestParameters: categoriesApiParams.DeleteCategoryAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.categoryId === null || requestParameters.categoryId === undefined) {
            throw new runtime.RequiredError('categoryId','Required parameter requestParameters.categoryId was null or undefined when calling deleteCategoryAttribute.');
        }

        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling deleteCategoryAttribute.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/categories/{categoryId}/attributes/{attributeFQN}`.replace(`{${"categoryId"}}`, encodeURIComponent(String(requestParameters.categoryId))).replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes the category attribute specified by its attributeFQN.
     * Delete Category Attribute
     */
    async deleteCategoryAttribute(requestParameters: categoriesApiParams.DeleteCategoryAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCategoryAttributeRaw(requestParameters, initOverrides);
    }

    /**
     * Deletes the category specified by its category ID. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Delete Category
     */


    async deleteCategoryByIdRaw(requestParameters: categoriesApiParams.DeleteCategoryByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.categoryId === null || requestParameters.categoryId === undefined) {
            throw new runtime.RequiredError('categoryId','Required parameter requestParameters.categoryId was null or undefined when calling deleteCategoryById.');
        }

        const queryParameters: any = {};

        if (requestParameters.cascadeDelete !== undefined) {
            queryParameters['cascadeDelete'] = requestParameters.cascadeDelete;
        }

        if (requestParameters.forceDelete !== undefined) {
            queryParameters['forceDelete'] = requestParameters.forceDelete;
        }

        if (requestParameters.reassignToParent !== undefined) {
            queryParameters['reassignToParent'] = requestParameters.reassignToParent;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/categories/{categoryId}`.replace(`{${"categoryId"}}`, encodeURIComponent(String(requestParameters.categoryId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes the category specified by its category ID. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Delete Category
     */
    async deleteCategoryById(requestParameters: categoriesApiParams.DeleteCategoryByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCategoryByIdRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves a list of categories according to any specified filter criteria and sort options. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
     * Get Categories
     */


    async getCategoriesRaw(requestParameters: categoriesApiParams.GetCategoriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsCategoryPagedCollection>> {
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

        if (requestParameters.includeAttributes !== undefined) {
            queryParameters['includeAttributes'] = requestParameters.includeAttributes;
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
            path: `/commerce/catalog/admin/categories`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a list of categories according to any specified filter criteria and sort options. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
     * Get Categories
     */
    async getCategories(requestParameters: categoriesApiParams.GetCategoriesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsCategoryPagedCollection> {
        const response = await this.getCategoriesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the details of a single category. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Get Category
     */


    async getCategoryRaw(requestParameters: categoriesApiParams.GetCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsCategory>> {
        if (requestParameters.categoryId === null || requestParameters.categoryId === undefined) {
            throw new runtime.RequiredError('categoryId','Required parameter requestParameters.categoryId was null or undefined when calling getCategory.');
        }

        const queryParameters: any = {};

        if (requestParameters.includeAttributes !== undefined) {
            queryParameters['includeAttributes'] = requestParameters.includeAttributes;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/categories/{categoryId}`.replace(`{${"categoryId"}}`, encodeURIComponent(String(requestParameters.categoryId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves the details of a single category. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Get Category
     */
    async getCategory(requestParameters: categoriesApiParams.GetCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsCategory> {
        const response = await this.getCategoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the details of a single category attribute. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Get Category Attribute
     */


    async getCategoryAttributeRaw(requestParameters: categoriesApiParams.GetCategoryAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsCategoryAttribute>> {
        if (requestParameters.categoryId === null || requestParameters.categoryId === undefined) {
            throw new runtime.RequiredError('categoryId','Required parameter requestParameters.categoryId was null or undefined when calling getCategoryAttribute.');
        }

        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling getCategoryAttribute.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/categories/{categoryId}/attributes/{attributeFQN}`.replace(`{${"categoryId"}}`, encodeURIComponent(String(requestParameters.categoryId))).replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves the details of a single category attribute. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Get Category Attribute
     */
    async getCategoryAttribute(requestParameters: categoriesApiParams.GetCategoryAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsCategoryAttribute> {
        const response = await this.getCategoryAttributeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a list of category attributes. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Get Category Attributes
     */


    async getCategoryAttributesRaw(requestParameters: categoriesApiParams.GetCategoryAttributesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CategoryAttributeCollection>> {
        if (requestParameters.categoryId === null || requestParameters.categoryId === undefined) {
            throw new runtime.RequiredError('categoryId','Required parameter requestParameters.categoryId was null or undefined when calling getCategoryAttributes.');
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
            path: `/commerce/catalog/admin/categories/{categoryId}/attributes`.replace(`{${"categoryId"}}`, encodeURIComponent(String(requestParameters.categoryId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a list of category attributes. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Get Category Attributes
     */
    async getCategoryAttributes(requestParameters: categoriesApiParams.GetCategoryAttributesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CategoryAttributeCollection> {
        const response = await this.getCategoryAttributesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the immediate subcategories of a category. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Get Child Categories
     */


    async getChildCategoriesRaw(requestParameters: categoriesApiParams.GetChildCategoriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsCategoryCollection>> {
        if (requestParameters.categoryId === null || requestParameters.categoryId === undefined) {
            throw new runtime.RequiredError('categoryId','Required parameter requestParameters.categoryId was null or undefined when calling getChildCategories.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/categories/{categoryId}/children`.replace(`{${"categoryId"}}`, encodeURIComponent(String(requestParameters.categoryId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves the immediate subcategories of a category. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Get Child Categories
     */
    async getChildCategories(requestParameters: categoriesApiParams.GetChildCategoriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsCategoryCollection> {
        const response = await this.getChildCategoriesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Removes the products in the provided product code list from the specified category.
     * Remove Products from Category
     */


    async removeProductsFromCategoryRaw(requestParameters: categoriesApiParams.RemoveProductsFromCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.categoryId === null || requestParameters.categoryId === undefined) {
            throw new runtime.RequiredError('categoryId','Required parameter requestParameters.categoryId was null or undefined when calling removeProductsFromCategory.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/categories/{categoryId}/remove-products`.replace(`{${"categoryId"}}`, encodeURIComponent(String(requestParameters.categoryId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.requestBody,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Removes the products in the provided product code list from the specified category.
     * Remove Products from Category
     */
    async removeProductsFromCategory(requestParameters: categoriesApiParams.RemoveProductsFromCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.removeProductsFromCategoryRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves a list of categories according to any specified filter criteria and sort options for attributes. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
     * Search Category Attributes
     */


    async searchCategoryAttributesRaw(requestParameters: categoriesApiParams.SearchCategoryAttributesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsCategoryPagedCollection>> {
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

        if (requestParameters.includeAttributes !== undefined) {
            queryParameters['includeAttributes'] = requestParameters.includeAttributes;
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
            path: `/commerce/catalog/admin/categories/searchCategoryAttributes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a list of categories according to any specified filter criteria and sort options for attributes. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\". 
     * Search Category Attributes
     */
    async searchCategoryAttributes(requestParameters: categoriesApiParams.SearchCategoryAttributesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsCategoryPagedCollection> {
        const response = await this.searchCategoryAttributesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Modifies a category such as moving it to another location in the category tree, or changing whether it is visible on the storefront. This PUT replaces the existing resource, so be sure to include all the information that you want to maintain for the category. Any unspecified properties are set to null.<br><br>This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Update Category
     */


    async updateCategoryRaw(requestParameters: categoriesApiParams.UpdateCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsCategory>> {
        if (requestParameters.categoryId === null || requestParameters.categoryId === undefined) {
            throw new runtime.RequiredError('categoryId','Required parameter requestParameters.categoryId was null or undefined when calling updateCategory.');
        }

        const queryParameters: any = {};

        if (requestParameters.cascadeVisibility !== undefined) {
            queryParameters['cascadeVisibility'] = requestParameters.cascadeVisibility;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/categories/{categoryId}`.replace(`{${"categoryId"}}`, encodeURIComponent(String(requestParameters.categoryId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsCategory,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Modifies a category such as moving it to another location in the category tree, or changing whether it is visible on the storefront. This PUT replaces the existing resource, so be sure to include all the information that you want to maintain for the category. Any unspecified properties are set to null.<br><br>This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Update Category
     */
    async updateCategory(requestParameters: categoriesApiParams.UpdateCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsCategory> {
        const response = await this.updateCategoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Modifies the category attribute. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Update Category Attribute
     */


    async updateCategoryAttributeRaw(requestParameters: categoriesApiParams.UpdateCategoryAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsCategoryAttribute>> {
        if (requestParameters.categoryId === null || requestParameters.categoryId === undefined) {
            throw new runtime.RequiredError('categoryId','Required parameter requestParameters.categoryId was null or undefined when calling updateCategoryAttribute.');
        }

        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling updateCategoryAttribute.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/categories/{categoryId}/attributes/{attributeFQN}`.replace(`{${"categoryId"}}`, encodeURIComponent(String(requestParameters.categoryId))).replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsCategoryAttribute,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Modifies the category attribute. This current version of the Categories API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access category data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Update Category Attribute
     */
    async updateCategoryAttribute(requestParameters: categoriesApiParams.UpdateCategoryAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsCategoryAttribute> {
        const response = await this.updateCategoryAttributeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Validate an expression for a dynamic category.
     * Validate Dynamic Category Expression
     */


    async validateDynamicExpressionRaw(requestParameters: categoriesApiParams.ValidateDynamicExpressionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsDynamicExpression>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/categories/ValidateDynamicExpression`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsDynamicExpression,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Validate an expression for a dynamic category.
     * Validate Dynamic Category Expression
     */
    async validateDynamicExpression(requestParameters: categoriesApiParams.ValidateDynamicExpressionRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsDynamicExpression> {
        const response = await this.validateDynamicExpressionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Validate an expression for a realtime dynamic category.
     * Validate Realtime Dynamic Category Expression
     */


    async validateRealTimeDynamicExpressionRaw(requestParameters: categoriesApiParams.ValidateRealTimeDynamicExpressionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsDynamicExpression>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/categories/ValidateRealTimeDynamicExpression`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsDynamicExpression,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Validate an expression for a realtime dynamic category.
     * Validate Realtime Dynamic Category Expression
     */
    async validateRealTimeDynamicExpression(requestParameters: categoriesApiParams.ValidateRealTimeDynamicExpressionRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsDynamicExpression> {
        const response = await this.validateRealTimeDynamicExpressionRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
