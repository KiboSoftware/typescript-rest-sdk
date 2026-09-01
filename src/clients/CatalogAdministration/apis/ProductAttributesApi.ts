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
  AttributeTypeRuleCollection,
  AttributeVocabularyValueLocalizedContent,
  CatalogAdminsAttribute,
  CatalogAdminsAttributeCollection,
  CatalogAdminsAttributeLocalizedContent,
  CatalogAdminsAttributeVocabularyValue,
} from '../models';


export namespace productAttributesApiParams { 
    export interface AddAttributeRequest {
        responseFields?: string;
        catalogAdminsAttribute?: CatalogAdminsAttribute;
    }
    export interface AddAttributeVocabularyValueRequest {
        attributeFQN: string;
        responseFields?: string;
        catalogAdminsAttributeVocabularyValue?: CatalogAdminsAttributeVocabularyValue;
    }
    export interface AddAttributeVocabularyValueLocalizedContentRequest {
        attributeFQN: string;
        value: string;
        responseFields?: string;
        attributeVocabularyValueLocalizedContent?: AttributeVocabularyValueLocalizedContent;
    }
    export interface AddLocalizedContentRequest {
        attributeFQN: string;
        responseFields?: string;
        catalogAdminsAttributeLocalizedContent?: CatalogAdminsAttributeLocalizedContent;
    }
    export interface DeleteAttributeRequest {
        attributeFQN: string;
    }
    export interface DeleteAttributeVocabularyValueRequest {
        attributeFQN: string;
        value: string;
    }
    export interface DeleteAttributeVocabularyValueLocalizedContentRequest {
        attributeFQN: string;
        value: string;
        localeCode: string;
    }
    export interface DeleteLocalizedContentRequest {
        attributeFQN: string;
        localeCode: string;
    }
    export interface GetAttributeRequest {
        attributeFQN: string;
        responseGroups?: string;
        responseFields?: string;
    }
    export interface GetAttributeLocalizedContentRequest {
        attributeFQN: string;
        localeCode: string;
        responseFields?: string;
    }
    export interface GetAttributeLocalizedContentsRequest {
        attributeFQN: string;
        responseFields?: string;
    }
    export interface GetAttributeTypeRulesRequest {
        startIndex?: number;
        pageSize?: number;
        sortBy?: string;
        filter?: string;
        responseFields?: string;
    }
    export interface GetAttributeVocabularyValueRequest {
        attributeFQN: string;
        value: string;
        responseFields?: string;
    }
    export interface GetAttributeVocabularyValueLocalizedContentRequest {
        attributeFQN: string;
        value: string;
        localeCode: string;
        responseFields?: string;
    }
    export interface GetAttributeVocabularyValueLocalizedContentsRequest {
        attributeFQN: string;
        value: string;
        responseFields?: string;
    }
    export interface GetAttributeVocabularyValuesRequest {
        attributeFQN: string;
        responseGroups?: string;
        responseFields?: string;
    }
    export interface GetAttributesRequest {
        startIndex?: number;
        pageSize?: number;
        sortBy?: string;
        filter?: string;
        responseGroups?: string;
        responseFields?: string;
    }
    export interface UpdateAttributeRequest {
        attributeFQN: string;
        responseFields?: string;
        catalogAdminsAttribute?: CatalogAdminsAttribute;
    }
    export interface UpdateAttributeVocabularyValueRequest {
        attributeFQN: string;
        value: string;
        responseFields?: string;
        catalogAdminsAttributeVocabularyValue?: CatalogAdminsAttributeVocabularyValue;
    }
    export interface UpdateAttributeVocabularyValueLocalizedContentRequest {
        attributeFQN: string;
        value: string;
        localeCode: string;
        responseFields?: string;
        attributeVocabularyValueLocalizedContent?: AttributeVocabularyValueLocalizedContent;
    }
    export interface UpdateAttributeVocabularyValueLocalizedContentsRequest {
        attributeFQN: string;
        value: string;
        responseFields?: string;
        attributeVocabularyValueLocalizedContent?: Array<AttributeVocabularyValueLocalizedContent>;
    }
    export interface UpdateAttributeVocabularyValuesRequest {
        attributeFQN: string;
        responseFields?: string;
        catalogAdminsAttributeVocabularyValue?: Array<CatalogAdminsAttributeVocabularyValue>;
    }
    export interface UpdateLocalizedContentRequest {
        attributeFQN: string;
        localeCode: string;
        responseFields?: string;
        catalogAdminsAttributeLocalizedContent?: CatalogAdminsAttributeLocalizedContent;
    }
    export interface UpdateLocalizedContentsRequest {
        attributeFQN: string;
        responseFields?: string;
        catalogAdminsAttributeLocalizedContent?: Array<CatalogAdminsAttributeLocalizedContent>;
    }
}
/**
* ProductAttributesApiService - interface
* 
* @export
* @interface ProductAttributesApi
*/
export interface ProductAttributesApiService {
    /**
    * Create a new attribute. The attribute name, attribute type, input type, and data type are required. This current version of the Attributes API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access attribute data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Add Product Attribute
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CatalogAdminsAttribute} [catalogAdminsAttribute] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductAttributesApiInterface
    */
    addAttributeRaw(requestParameters: productAttributesApiParams.AddAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsAttribute>>;

    /**
    * Create a new attribute. The attribute name, attribute type, input type, and data type are required. This current version of the Attributes API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access attribute data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Add Product Attribute
    */
    addAttribute(requestParameters: productAttributesApiParams.AddAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsAttribute>;

    /**
    * Creates product attribute vocabulary values
    * @summary Add Vocabulary Value
    * @param {string} attributeFQN 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CatalogAdminsAttributeVocabularyValue} [catalogAdminsAttributeVocabularyValue] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductAttributesApiInterface
    */
    addAttributeVocabularyValueRaw(requestParameters: productAttributesApiParams.AddAttributeVocabularyValueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsAttributeVocabularyValue>>;

    /**
    * Creates product attribute vocabulary values
    * Add Vocabulary Value
    */
    addAttributeVocabularyValue(requestParameters: productAttributesApiParams.AddAttributeVocabularyValueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsAttributeVocabularyValue>;

    /**
    * Creates vocabulary value localized content
    * @summary Add Vocabulary Value Localized Content
    * @param {string} attributeFQN 
    * @param {string} value 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {AttributeVocabularyValueLocalizedContent} [attributeVocabularyValueLocalizedContent] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductAttributesApiInterface
    */
    addAttributeVocabularyValueLocalizedContentRaw(requestParameters: productAttributesApiParams.AddAttributeVocabularyValueLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AttributeVocabularyValueLocalizedContent>>;

    /**
    * Creates vocabulary value localized content
    * Add Vocabulary Value Localized Content
    */
    addAttributeVocabularyValueLocalizedContent(requestParameters: productAttributesApiParams.AddAttributeVocabularyValueLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AttributeVocabularyValueLocalizedContent>;

    /**
    * Creates product attribute localized content
    * @summary Add Localized Content
    * @param {string} attributeFQN 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CatalogAdminsAttributeLocalizedContent} [catalogAdminsAttributeLocalizedContent] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductAttributesApiInterface
    */
    addLocalizedContentRaw(requestParameters: productAttributesApiParams.AddLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsAttributeLocalizedContent>>;

    /**
    * Creates product attribute localized content
    * Add Localized Content
    */
    addLocalizedContent(requestParameters: productAttributesApiParams.AddLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsAttributeLocalizedContent>;

    /**
    * Deletes a product attribute by its FQN
    * @summary Delete Product Attribute
    * @param {string} attributeFQN 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductAttributesApiInterface
    */
    deleteAttributeRaw(requestParameters: productAttributesApiParams.DeleteAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Deletes a product attribute by its FQN
    * Delete Product Attribute
    */
    deleteAttribute(requestParameters: productAttributesApiParams.DeleteAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Deletes a product attribute vocabulary value
    * @summary Delete Vocabulary Value
    * @param {string} attributeFQN 
    * @param {string} value 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductAttributesApiInterface
    */
    deleteAttributeVocabularyValueRaw(requestParameters: productAttributesApiParams.DeleteAttributeVocabularyValueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Deletes a product attribute vocabulary value
    * Delete Vocabulary Value
    */
    deleteAttributeVocabularyValue(requestParameters: productAttributesApiParams.DeleteAttributeVocabularyValueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Delete product attribute vocabulary value localized content by its locale code
    * @summary Delete Vocabulary Value Localized Content by Locale Code
    * @param {string} attributeFQN 
    * @param {string} value 
    * @param {string} localeCode 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductAttributesApiInterface
    */
    deleteAttributeVocabularyValueLocalizedContentRaw(requestParameters: productAttributesApiParams.DeleteAttributeVocabularyValueLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Delete product attribute vocabulary value localized content by its locale code
    * Delete Vocabulary Value Localized Content by Locale Code
    */
    deleteAttributeVocabularyValueLocalizedContent(requestParameters: productAttributesApiParams.DeleteAttributeVocabularyValueLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Deletes localized content by its locale code
    * @summary Delete Localized Content by Locale Code
    * @param {string} attributeFQN 
    * @param {string} localeCode 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductAttributesApiInterface
    */
    deleteLocalizedContentRaw(requestParameters: productAttributesApiParams.DeleteLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Deletes localized content by its locale code
    * Delete Localized Content by Locale Code
    */
    deleteLocalizedContent(requestParameters: productAttributesApiParams.DeleteLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Retrieves a product attribute by its FQN. This current version of the Attributes API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access attribute data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Get Product Attribute
    * @param {string} attributeFQN 
    * @param {string} [responseGroups] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductAttributesApiInterface
    */
    getAttributeRaw(requestParameters: productAttributesApiParams.GetAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsAttribute>>;

    /**
    * Retrieves a product attribute by its FQN. This current version of the Attributes API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access attribute data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Get Product Attribute
    */
    getAttribute(requestParameters: productAttributesApiParams.GetAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsAttribute>;

    /**
    * Retrieves localized content by its locale code
    * @summary Get Localized Content by Locale Code
    * @param {string} attributeFQN 
    * @param {string} localeCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductAttributesApiInterface
    */
    getAttributeLocalizedContentRaw(requestParameters: productAttributesApiParams.GetAttributeLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsAttributeLocalizedContent>>;

    /**
    * Retrieves localized content by its locale code
    * Get Localized Content by Locale Code
    */
    getAttributeLocalizedContent(requestParameters: productAttributesApiParams.GetAttributeLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsAttributeLocalizedContent>;

    /**
    * Retrieves product attribute localized content
    * @summary Get Localized Content
    * @param {string} attributeFQN 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductAttributesApiInterface
    */
    getAttributeLocalizedContentsRaw(requestParameters: productAttributesApiParams.GetAttributeLocalizedContentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CatalogAdminsAttributeLocalizedContent>>>;

    /**
    * Retrieves product attribute localized content
    * Get Localized Content
    */
    getAttributeLocalizedContents(requestParameters: productAttributesApiParams.GetAttributeLocalizedContentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CatalogAdminsAttributeLocalizedContent>>;

    /**
    * Retrieves a paged list of attribute type rules according to any specified filter criteria and sort options.
    * @summary Get Attribute Type Rules
    * @param {number} [startIndex] Used to page results from a query. Indicates the zero-based offset in the complete result set where the returned entities begin. For example, with a PageSize of 25, to get the 51st through the 75th items, startIndex&#x3D;3. The default value is 0. Optional.
    * @param {number} [pageSize] Used to page results from a query. Indicates the maximum number of entities to return from a query. The default value is 20 and the maximum value is 200. Optional.
    * @param {string} [sortBy] The element to sort the results by and the order in which the results appear. Either ascending (a-z) or descending (z-a) order. Optional.
    * @param {string} [filter] A set of filter expressions representing the search parameters for a query: eq&#x3D;equals, ne&#x3D;not equals, gt&#x3D;greater than, lt &#x3D; less than or equals, gt &#x3D; greater than or equals, lt &#x3D; less than or equals, sw &#x3D; starts with, or cont &#x3D; contains. Optional.
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductAttributesApiInterface
    */
    getAttributeTypeRulesRaw(requestParameters: productAttributesApiParams.GetAttributeTypeRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AttributeTypeRuleCollection>>;

    /**
    * Retrieves a paged list of attribute type rules according to any specified filter criteria and sort options.
    * Get Attribute Type Rules
    */
    getAttributeTypeRules(requestParameters: productAttributesApiParams.GetAttributeTypeRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AttributeTypeRuleCollection>;

    /**
    * Retrieves a product attribute vocabulary value
    * @summary Get Vocabulary Value
    * @param {string} attributeFQN 
    * @param {string} value 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductAttributesApiInterface
    */
    getAttributeVocabularyValueRaw(requestParameters: productAttributesApiParams.GetAttributeVocabularyValueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsAttributeVocabularyValue>>;

    /**
    * Retrieves a product attribute vocabulary value
    * Get Vocabulary Value
    */
    getAttributeVocabularyValue(requestParameters: productAttributesApiParams.GetAttributeVocabularyValueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsAttributeVocabularyValue>;

    /**
    * Get product attribute vocabulary value localized content by its locale code
    * @summary Get Vocabulary Value Localized Content by Locale Code
    * @param {string} attributeFQN 
    * @param {string} value 
    * @param {string} localeCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductAttributesApiInterface
    */
    getAttributeVocabularyValueLocalizedContentRaw(requestParameters: productAttributesApiParams.GetAttributeVocabularyValueLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AttributeVocabularyValueLocalizedContent>>;

    /**
    * Get product attribute vocabulary value localized content by its locale code
    * Get Vocabulary Value Localized Content by Locale Code
    */
    getAttributeVocabularyValueLocalizedContent(requestParameters: productAttributesApiParams.GetAttributeVocabularyValueLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AttributeVocabularyValueLocalizedContent>;

    /**
    * Retrieves vocabulary value localized content
    * @summary Get Vocabulary Value Localized Content
    * @param {string} attributeFQN 
    * @param {string} value 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductAttributesApiInterface
    */
    getAttributeVocabularyValueLocalizedContentsRaw(requestParameters: productAttributesApiParams.GetAttributeVocabularyValueLocalizedContentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<AttributeVocabularyValueLocalizedContent>>>;

    /**
    * Retrieves vocabulary value localized content
    * Get Vocabulary Value Localized Content
    */
    getAttributeVocabularyValueLocalizedContents(requestParameters: productAttributesApiParams.GetAttributeVocabularyValueLocalizedContentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<AttributeVocabularyValueLocalizedContent>>;

    /**
    * Retrieves product attribute vocabulary values
    * @summary Get Vocabulary Values
    * @param {string} attributeFQN 
    * @param {string} [responseGroups] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductAttributesApiInterface
    */
    getAttributeVocabularyValuesRaw(requestParameters: productAttributesApiParams.GetAttributeVocabularyValuesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CatalogAdminsAttributeVocabularyValue>>>;

    /**
    * Retrieves product attribute vocabulary values
    * Get Vocabulary Values
    */
    getAttributeVocabularyValues(requestParameters: productAttributesApiParams.GetAttributeVocabularyValuesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CatalogAdminsAttributeVocabularyValue>>;

    /**
    * Get product attributes. This current version of the Attributes API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access attribute data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Get Product Attributes.
    * @param {number} [startIndex] 
    * @param {number} [pageSize] 
    * @param {string} [sortBy] 
    * @param {string} [filter] 
    * @param {string} [responseGroups] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductAttributesApiInterface
    */
    getAttributesRaw(requestParameters: productAttributesApiParams.GetAttributesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsAttributeCollection>>;

    /**
    * Get product attributes. This current version of the Attributes API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access attribute data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Get Product Attributes.
    */
    getAttributes(requestParameters: productAttributesApiParams.GetAttributesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsAttributeCollection>;

    /**
    * Updates a product attribute by its FQN. This current version of the Attributes API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access attribute data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * @summary Update Product Attribute
    * @param {string} attributeFQN 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CatalogAdminsAttribute} [catalogAdminsAttribute] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductAttributesApiInterface
    */
    updateAttributeRaw(requestParameters: productAttributesApiParams.UpdateAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsAttribute>>;

    /**
    * Updates a product attribute by its FQN. This current version of the Attributes API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access attribute data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
    * Update Product Attribute
    */
    updateAttribute(requestParameters: productAttributesApiParams.UpdateAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsAttribute>;

    /**
    * Updates a product attribute vocabulary value
    * @summary Update Vocabulary Value
    * @param {string} attributeFQN 
    * @param {string} value 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CatalogAdminsAttributeVocabularyValue} [catalogAdminsAttributeVocabularyValue] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductAttributesApiInterface
    */
    updateAttributeVocabularyValueRaw(requestParameters: productAttributesApiParams.UpdateAttributeVocabularyValueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsAttributeVocabularyValue>>;

    /**
    * Updates a product attribute vocabulary value
    * Update Vocabulary Value
    */
    updateAttributeVocabularyValue(requestParameters: productAttributesApiParams.UpdateAttributeVocabularyValueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsAttributeVocabularyValue>;

    /**
    * Update product attribute vocabulary value localized content by its locale code
    * @summary Update Vocabulary Value Localized Content by Locale Code
    * @param {string} attributeFQN 
    * @param {string} value 
    * @param {string} localeCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {AttributeVocabularyValueLocalizedContent} [attributeVocabularyValueLocalizedContent] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductAttributesApiInterface
    */
    updateAttributeVocabularyValueLocalizedContentRaw(requestParameters: productAttributesApiParams.UpdateAttributeVocabularyValueLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AttributeVocabularyValueLocalizedContent>>;

    /**
    * Update product attribute vocabulary value localized content by its locale code
    * Update Vocabulary Value Localized Content by Locale Code
    */
    updateAttributeVocabularyValueLocalizedContent(requestParameters: productAttributesApiParams.UpdateAttributeVocabularyValueLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AttributeVocabularyValueLocalizedContent>;

    /**
    * Updates vocabulary value localized content
    * @summary Update Vocabulary Value Localized Content
    * @param {string} attributeFQN 
    * @param {string} value 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {Array<AttributeVocabularyValueLocalizedContent>} [attributeVocabularyValueLocalizedContent] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductAttributesApiInterface
    */
    updateAttributeVocabularyValueLocalizedContentsRaw(requestParameters: productAttributesApiParams.UpdateAttributeVocabularyValueLocalizedContentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<AttributeVocabularyValueLocalizedContent>>>;

    /**
    * Updates vocabulary value localized content
    * Update Vocabulary Value Localized Content
    */
    updateAttributeVocabularyValueLocalizedContents(requestParameters: productAttributesApiParams.UpdateAttributeVocabularyValueLocalizedContentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<AttributeVocabularyValueLocalizedContent>>;

    /**
    * Updates product attribute vocabulary values
    * @summary Update Vocabulary Values
    * @param {string} attributeFQN 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {Array<CatalogAdminsAttributeVocabularyValue>} [catalogAdminsAttributeVocabularyValue] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductAttributesApiInterface
    */
    updateAttributeVocabularyValuesRaw(requestParameters: productAttributesApiParams.UpdateAttributeVocabularyValuesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CatalogAdminsAttributeVocabularyValue>>>;

    /**
    * Updates product attribute vocabulary values
    * Update Vocabulary Values
    */
    updateAttributeVocabularyValues(requestParameters: productAttributesApiParams.UpdateAttributeVocabularyValuesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CatalogAdminsAttributeVocabularyValue>>;

    /**
    * Updates localized content by its locale code
    * @summary Update Localized Content by Locale Code
    * @param {string} attributeFQN 
    * @param {string} localeCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CatalogAdminsAttributeLocalizedContent} [catalogAdminsAttributeLocalizedContent] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductAttributesApiInterface
    */
    updateLocalizedContentRaw(requestParameters: productAttributesApiParams.UpdateLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsAttributeLocalizedContent>>;

    /**
    * Updates localized content by its locale code
    * Update Localized Content by Locale Code
    */
    updateLocalizedContent(requestParameters: productAttributesApiParams.UpdateLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsAttributeLocalizedContent>;

    /**
    * Updates product attribute localized content
    * @summary Update Localized Content
    * @param {string} attributeFQN 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {Array<CatalogAdminsAttributeLocalizedContent>} [catalogAdminsAttributeLocalizedContent] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductAttributesApiInterface
    */
    updateLocalizedContentsRaw(requestParameters: productAttributesApiParams.UpdateLocalizedContentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CatalogAdminsAttributeLocalizedContent>>>;

    /**
    * Updates product attribute localized content
    * Update Localized Content
    */
    updateLocalizedContents(requestParameters: productAttributesApiParams.UpdateLocalizedContentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CatalogAdminsAttributeLocalizedContent>>;

}


/**
 * 
 */
export class ProductAttributesApi extends runtime.BaseAPI implements ProductAttributesApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Create a new attribute. The attribute name, attribute type, input type, and data type are required. This current version of the Attributes API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access attribute data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Add Product Attribute
     */


    async addAttributeRaw(requestParameters: productAttributesApiParams.AddAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsAttribute>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/attributedefinition/attributes`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsAttribute,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Create a new attribute. The attribute name, attribute type, input type, and data type are required. This current version of the Attributes API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access attribute data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Add Product Attribute
     */
    async addAttribute(requestParameters: productAttributesApiParams.AddAttributeRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsAttribute> {
        const response = await this.addAttributeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates product attribute vocabulary values
     * Add Vocabulary Value
     */


    async addAttributeVocabularyValueRaw(requestParameters: productAttributesApiParams.AddAttributeVocabularyValueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsAttributeVocabularyValue>> {
        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling addAttributeVocabularyValue.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/VocabularyValues`.replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsAttributeVocabularyValue,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates product attribute vocabulary values
     * Add Vocabulary Value
     */
    async addAttributeVocabularyValue(requestParameters: productAttributesApiParams.AddAttributeVocabularyValueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsAttributeVocabularyValue> {
        const response = await this.addAttributeVocabularyValueRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates vocabulary value localized content
     * Add Vocabulary Value Localized Content
     */


    async addAttributeVocabularyValueLocalizedContentRaw(requestParameters: productAttributesApiParams.AddAttributeVocabularyValueLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AttributeVocabularyValueLocalizedContent>> {
        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling addAttributeVocabularyValueLocalizedContent.');
        }

        if (requestParameters.value === null || requestParameters.value === undefined) {
            throw new runtime.RequiredError('value','Required parameter requestParameters.value was null or undefined when calling addAttributeVocabularyValueLocalizedContent.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/VocabularyValues/{value}/LocalizedContent`.replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))).replace(`{${"value"}}`, encodeURIComponent(String(requestParameters.value))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.attributeVocabularyValueLocalizedContent,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates vocabulary value localized content
     * Add Vocabulary Value Localized Content
     */
    async addAttributeVocabularyValueLocalizedContent(requestParameters: productAttributesApiParams.AddAttributeVocabularyValueLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AttributeVocabularyValueLocalizedContent> {
        const response = await this.addAttributeVocabularyValueLocalizedContentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates product attribute localized content
     * Add Localized Content
     */


    async addLocalizedContentRaw(requestParameters: productAttributesApiParams.AddLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsAttributeLocalizedContent>> {
        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling addLocalizedContent.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/LocalizedContent`.replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsAttributeLocalizedContent,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates product attribute localized content
     * Add Localized Content
     */
    async addLocalizedContent(requestParameters: productAttributesApiParams.AddLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsAttributeLocalizedContent> {
        const response = await this.addLocalizedContentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a product attribute by its FQN
     * Delete Product Attribute
     */


    async deleteAttributeRaw(requestParameters: productAttributesApiParams.DeleteAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling deleteAttribute.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}`.replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a product attribute by its FQN
     * Delete Product Attribute
     */
    async deleteAttribute(requestParameters: productAttributesApiParams.DeleteAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteAttributeRaw(requestParameters, initOverrides);
    }

    /**
     * Deletes a product attribute vocabulary value
     * Delete Vocabulary Value
     */


    async deleteAttributeVocabularyValueRaw(requestParameters: productAttributesApiParams.DeleteAttributeVocabularyValueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling deleteAttributeVocabularyValue.');
        }

        if (requestParameters.value === null || requestParameters.value === undefined) {
            throw new runtime.RequiredError('value','Required parameter requestParameters.value was null or undefined when calling deleteAttributeVocabularyValue.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/VocabularyValues/{value}`.replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))).replace(`{${"value"}}`, encodeURIComponent(String(requestParameters.value))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a product attribute vocabulary value
     * Delete Vocabulary Value
     */
    async deleteAttributeVocabularyValue(requestParameters: productAttributesApiParams.DeleteAttributeVocabularyValueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteAttributeVocabularyValueRaw(requestParameters, initOverrides);
    }

    /**
     * Delete product attribute vocabulary value localized content by its locale code
     * Delete Vocabulary Value Localized Content by Locale Code
     */


    async deleteAttributeVocabularyValueLocalizedContentRaw(requestParameters: productAttributesApiParams.DeleteAttributeVocabularyValueLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling deleteAttributeVocabularyValueLocalizedContent.');
        }

        if (requestParameters.value === null || requestParameters.value === undefined) {
            throw new runtime.RequiredError('value','Required parameter requestParameters.value was null or undefined when calling deleteAttributeVocabularyValueLocalizedContent.');
        }

        if (requestParameters.localeCode === null || requestParameters.localeCode === undefined) {
            throw new runtime.RequiredError('localeCode','Required parameter requestParameters.localeCode was null or undefined when calling deleteAttributeVocabularyValueLocalizedContent.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/VocabularyValues/{value}/LocalizedContent/{localeCode}`.replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))).replace(`{${"value"}}`, encodeURIComponent(String(requestParameters.value))).replace(`{${"localeCode"}}`, encodeURIComponent(String(requestParameters.localeCode))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete product attribute vocabulary value localized content by its locale code
     * Delete Vocabulary Value Localized Content by Locale Code
     */
    async deleteAttributeVocabularyValueLocalizedContent(requestParameters: productAttributesApiParams.DeleteAttributeVocabularyValueLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteAttributeVocabularyValueLocalizedContentRaw(requestParameters, initOverrides);
    }

    /**
     * Deletes localized content by its locale code
     * Delete Localized Content by Locale Code
     */


    async deleteLocalizedContentRaw(requestParameters: productAttributesApiParams.DeleteLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling deleteLocalizedContent.');
        }

        if (requestParameters.localeCode === null || requestParameters.localeCode === undefined) {
            throw new runtime.RequiredError('localeCode','Required parameter requestParameters.localeCode was null or undefined when calling deleteLocalizedContent.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/LocalizedContent/{localeCode}`.replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))).replace(`{${"localeCode"}}`, encodeURIComponent(String(requestParameters.localeCode))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes localized content by its locale code
     * Delete Localized Content by Locale Code
     */
    async deleteLocalizedContent(requestParameters: productAttributesApiParams.DeleteLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteLocalizedContentRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves a product attribute by its FQN. This current version of the Attributes API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access attribute data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Get Product Attribute
     */


    async getAttributeRaw(requestParameters: productAttributesApiParams.GetAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsAttribute>> {
        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling getAttribute.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseGroups !== undefined) {
            queryParameters['responseGroups'] = requestParameters.responseGroups;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}`.replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a product attribute by its FQN. This current version of the Attributes API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access attribute data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Get Product Attribute
     */
    async getAttribute(requestParameters: productAttributesApiParams.GetAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsAttribute> {
        const response = await this.getAttributeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves localized content by its locale code
     * Get Localized Content by Locale Code
     */


    async getAttributeLocalizedContentRaw(requestParameters: productAttributesApiParams.GetAttributeLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsAttributeLocalizedContent>> {
        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling getAttributeLocalizedContent.');
        }

        if (requestParameters.localeCode === null || requestParameters.localeCode === undefined) {
            throw new runtime.RequiredError('localeCode','Required parameter requestParameters.localeCode was null or undefined when calling getAttributeLocalizedContent.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/LocalizedContent/{localeCode}`.replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))).replace(`{${"localeCode"}}`, encodeURIComponent(String(requestParameters.localeCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves localized content by its locale code
     * Get Localized Content by Locale Code
     */
    async getAttributeLocalizedContent(requestParameters: productAttributesApiParams.GetAttributeLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsAttributeLocalizedContent> {
        const response = await this.getAttributeLocalizedContentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves product attribute localized content
     * Get Localized Content
     */


    async getAttributeLocalizedContentsRaw(requestParameters: productAttributesApiParams.GetAttributeLocalizedContentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CatalogAdminsAttributeLocalizedContent>>> {
        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling getAttributeLocalizedContents.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/LocalizedContent`.replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves product attribute localized content
     * Get Localized Content
     */
    async getAttributeLocalizedContents(requestParameters: productAttributesApiParams.GetAttributeLocalizedContentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CatalogAdminsAttributeLocalizedContent>> {
        const response = await this.getAttributeLocalizedContentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a paged list of attribute type rules according to any specified filter criteria and sort options.
     * Get Attribute Type Rules
     */


    async getAttributeTypeRulesRaw(requestParameters: productAttributesApiParams.GetAttributeTypeRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AttributeTypeRuleCollection>> {
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
            path: `/commerce/catalog/admin/attributedefinition/attributes/typerules`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a paged list of attribute type rules according to any specified filter criteria and sort options.
     * Get Attribute Type Rules
     */
    async getAttributeTypeRules(requestParameters: productAttributesApiParams.GetAttributeTypeRulesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AttributeTypeRuleCollection> {
        const response = await this.getAttributeTypeRulesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a product attribute vocabulary value
     * Get Vocabulary Value
     */


    async getAttributeVocabularyValueRaw(requestParameters: productAttributesApiParams.GetAttributeVocabularyValueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsAttributeVocabularyValue>> {
        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling getAttributeVocabularyValue.');
        }

        if (requestParameters.value === null || requestParameters.value === undefined) {
            throw new runtime.RequiredError('value','Required parameter requestParameters.value was null or undefined when calling getAttributeVocabularyValue.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/VocabularyValues/{value}`.replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))).replace(`{${"value"}}`, encodeURIComponent(String(requestParameters.value))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a product attribute vocabulary value
     * Get Vocabulary Value
     */
    async getAttributeVocabularyValue(requestParameters: productAttributesApiParams.GetAttributeVocabularyValueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsAttributeVocabularyValue> {
        const response = await this.getAttributeVocabularyValueRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get product attribute vocabulary value localized content by its locale code
     * Get Vocabulary Value Localized Content by Locale Code
     */


    async getAttributeVocabularyValueLocalizedContentRaw(requestParameters: productAttributesApiParams.GetAttributeVocabularyValueLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AttributeVocabularyValueLocalizedContent>> {
        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling getAttributeVocabularyValueLocalizedContent.');
        }

        if (requestParameters.value === null || requestParameters.value === undefined) {
            throw new runtime.RequiredError('value','Required parameter requestParameters.value was null or undefined when calling getAttributeVocabularyValueLocalizedContent.');
        }

        if (requestParameters.localeCode === null || requestParameters.localeCode === undefined) {
            throw new runtime.RequiredError('localeCode','Required parameter requestParameters.localeCode was null or undefined when calling getAttributeVocabularyValueLocalizedContent.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/VocabularyValues/{value}/LocalizedContent/{localeCode}`.replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))).replace(`{${"value"}}`, encodeURIComponent(String(requestParameters.value))).replace(`{${"localeCode"}}`, encodeURIComponent(String(requestParameters.localeCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get product attribute vocabulary value localized content by its locale code
     * Get Vocabulary Value Localized Content by Locale Code
     */
    async getAttributeVocabularyValueLocalizedContent(requestParameters: productAttributesApiParams.GetAttributeVocabularyValueLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AttributeVocabularyValueLocalizedContent> {
        const response = await this.getAttributeVocabularyValueLocalizedContentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves vocabulary value localized content
     * Get Vocabulary Value Localized Content
     */


    async getAttributeVocabularyValueLocalizedContentsRaw(requestParameters: productAttributesApiParams.GetAttributeVocabularyValueLocalizedContentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<AttributeVocabularyValueLocalizedContent>>> {
        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling getAttributeVocabularyValueLocalizedContents.');
        }

        if (requestParameters.value === null || requestParameters.value === undefined) {
            throw new runtime.RequiredError('value','Required parameter requestParameters.value was null or undefined when calling getAttributeVocabularyValueLocalizedContents.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/VocabularyValues/{value}/LocalizedContent`.replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))).replace(`{${"value"}}`, encodeURIComponent(String(requestParameters.value))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves vocabulary value localized content
     * Get Vocabulary Value Localized Content
     */
    async getAttributeVocabularyValueLocalizedContents(requestParameters: productAttributesApiParams.GetAttributeVocabularyValueLocalizedContentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<AttributeVocabularyValueLocalizedContent>> {
        const response = await this.getAttributeVocabularyValueLocalizedContentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves product attribute vocabulary values
     * Get Vocabulary Values
     */


    async getAttributeVocabularyValuesRaw(requestParameters: productAttributesApiParams.GetAttributeVocabularyValuesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CatalogAdminsAttributeVocabularyValue>>> {
        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling getAttributeVocabularyValues.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseGroups !== undefined) {
            queryParameters['responseGroups'] = requestParameters.responseGroups;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/VocabularyValues`.replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves product attribute vocabulary values
     * Get Vocabulary Values
     */
    async getAttributeVocabularyValues(requestParameters: productAttributesApiParams.GetAttributeVocabularyValuesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CatalogAdminsAttributeVocabularyValue>> {
        const response = await this.getAttributeVocabularyValuesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get product attributes. This current version of the Attributes API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access attribute data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Get Product Attributes.
     */


    async getAttributesRaw(requestParameters: productAttributesApiParams.GetAttributesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsAttributeCollection>> {
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
            path: `/commerce/catalog/admin/attributedefinition/attributes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get product attributes. This current version of the Attributes API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access attribute data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Get Product Attributes.
     */
    async getAttributes(requestParameters: productAttributesApiParams.GetAttributesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsAttributeCollection> {
        const response = await this.getAttributesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a product attribute by its FQN. This current version of the Attributes API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access attribute data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Update Product Attribute
     */


    async updateAttributeRaw(requestParameters: productAttributesApiParams.UpdateAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsAttribute>> {
        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling updateAttribute.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}`.replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsAttribute,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates a product attribute by its FQN. This current version of the Attributes API includes localizedContent to support <a href=\"/pages/catalog-structure#multi-locale-catalogs\">multi-locale catalogs</a>, which was not present in the previous API model. If you were a client prior to May 2024 and have upgraded your implementation to support this feature, you can still access attribute data that has not yet been rewritten to the new model by providing an x-api-version header set to \"1\".
     * Update Product Attribute
     */
    async updateAttribute(requestParameters: productAttributesApiParams.UpdateAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsAttribute> {
        const response = await this.updateAttributeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a product attribute vocabulary value
     * Update Vocabulary Value
     */


    async updateAttributeVocabularyValueRaw(requestParameters: productAttributesApiParams.UpdateAttributeVocabularyValueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsAttributeVocabularyValue>> {
        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling updateAttributeVocabularyValue.');
        }

        if (requestParameters.value === null || requestParameters.value === undefined) {
            throw new runtime.RequiredError('value','Required parameter requestParameters.value was null or undefined when calling updateAttributeVocabularyValue.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/VocabularyValues/{value}`.replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))).replace(`{${"value"}}`, encodeURIComponent(String(requestParameters.value))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsAttributeVocabularyValue,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates a product attribute vocabulary value
     * Update Vocabulary Value
     */
    async updateAttributeVocabularyValue(requestParameters: productAttributesApiParams.UpdateAttributeVocabularyValueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsAttributeVocabularyValue> {
        const response = await this.updateAttributeVocabularyValueRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update product attribute vocabulary value localized content by its locale code
     * Update Vocabulary Value Localized Content by Locale Code
     */


    async updateAttributeVocabularyValueLocalizedContentRaw(requestParameters: productAttributesApiParams.UpdateAttributeVocabularyValueLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AttributeVocabularyValueLocalizedContent>> {
        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling updateAttributeVocabularyValueLocalizedContent.');
        }

        if (requestParameters.value === null || requestParameters.value === undefined) {
            throw new runtime.RequiredError('value','Required parameter requestParameters.value was null or undefined when calling updateAttributeVocabularyValueLocalizedContent.');
        }

        if (requestParameters.localeCode === null || requestParameters.localeCode === undefined) {
            throw new runtime.RequiredError('localeCode','Required parameter requestParameters.localeCode was null or undefined when calling updateAttributeVocabularyValueLocalizedContent.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/VocabularyValues/{value}/LocalizedContent/{localeCode}`.replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))).replace(`{${"value"}}`, encodeURIComponent(String(requestParameters.value))).replace(`{${"localeCode"}}`, encodeURIComponent(String(requestParameters.localeCode))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.attributeVocabularyValueLocalizedContent,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update product attribute vocabulary value localized content by its locale code
     * Update Vocabulary Value Localized Content by Locale Code
     */
    async updateAttributeVocabularyValueLocalizedContent(requestParameters: productAttributesApiParams.UpdateAttributeVocabularyValueLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AttributeVocabularyValueLocalizedContent> {
        const response = await this.updateAttributeVocabularyValueLocalizedContentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates vocabulary value localized content
     * Update Vocabulary Value Localized Content
     */


    async updateAttributeVocabularyValueLocalizedContentsRaw(requestParameters: productAttributesApiParams.UpdateAttributeVocabularyValueLocalizedContentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<AttributeVocabularyValueLocalizedContent>>> {
        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling updateAttributeVocabularyValueLocalizedContents.');
        }

        if (requestParameters.value === null || requestParameters.value === undefined) {
            throw new runtime.RequiredError('value','Required parameter requestParameters.value was null or undefined when calling updateAttributeVocabularyValueLocalizedContents.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/VocabularyValues/{value}/LocalizedContent`.replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))).replace(`{${"value"}}`, encodeURIComponent(String(requestParameters.value))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.attributeVocabularyValueLocalizedContent,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates vocabulary value localized content
     * Update Vocabulary Value Localized Content
     */
    async updateAttributeVocabularyValueLocalizedContents(requestParameters: productAttributesApiParams.UpdateAttributeVocabularyValueLocalizedContentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<AttributeVocabularyValueLocalizedContent>> {
        const response = await this.updateAttributeVocabularyValueLocalizedContentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates product attribute vocabulary values
     * Update Vocabulary Values
     */


    async updateAttributeVocabularyValuesRaw(requestParameters: productAttributesApiParams.UpdateAttributeVocabularyValuesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CatalogAdminsAttributeVocabularyValue>>> {
        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling updateAttributeVocabularyValues.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/VocabularyValues`.replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsAttributeVocabularyValue,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates product attribute vocabulary values
     * Update Vocabulary Values
     */
    async updateAttributeVocabularyValues(requestParameters: productAttributesApiParams.UpdateAttributeVocabularyValuesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CatalogAdminsAttributeVocabularyValue>> {
        const response = await this.updateAttributeVocabularyValuesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates localized content by its locale code
     * Update Localized Content by Locale Code
     */


    async updateLocalizedContentRaw(requestParameters: productAttributesApiParams.UpdateLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsAttributeLocalizedContent>> {
        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling updateLocalizedContent.');
        }

        if (requestParameters.localeCode === null || requestParameters.localeCode === undefined) {
            throw new runtime.RequiredError('localeCode','Required parameter requestParameters.localeCode was null or undefined when calling updateLocalizedContent.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/LocalizedContent/{localeCode}`.replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))).replace(`{${"localeCode"}}`, encodeURIComponent(String(requestParameters.localeCode))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsAttributeLocalizedContent,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates localized content by its locale code
     * Update Localized Content by Locale Code
     */
    async updateLocalizedContent(requestParameters: productAttributesApiParams.UpdateLocalizedContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsAttributeLocalizedContent> {
        const response = await this.updateLocalizedContentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates product attribute localized content
     * Update Localized Content
     */


    async updateLocalizedContentsRaw(requestParameters: productAttributesApiParams.UpdateLocalizedContentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CatalogAdminsAttributeLocalizedContent>>> {
        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling updateLocalizedContents.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/LocalizedContent`.replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsAttributeLocalizedContent,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates product attribute localized content
     * Update Localized Content
     */
    async updateLocalizedContents(requestParameters: productAttributesApiParams.UpdateLocalizedContentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CatalogAdminsAttributeLocalizedContent>> {
        const response = await this.updateLocalizedContentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
