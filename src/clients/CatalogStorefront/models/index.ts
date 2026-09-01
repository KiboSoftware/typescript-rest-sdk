/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface AdminUserAuditInfo
 */
export interface AdminUserAuditInfo {
    /**
     * 
     * @type {string}
     * @memberof AdminUserAuditInfo
     */
    createBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AdminUserAuditInfo
     */
    createDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AdminUserAuditInfo
     */
    updateBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AdminUserAuditInfo
     */
    updateDate?: string | null;
}
/**
 * Product Attribute properties common between a Product Propery, Option, and Extra
 * @export
 * @interface AttributeDetail
 */
export interface AttributeDetail {
    /**
     * Indicates whether the attribute should be able to be used in filters, facets, and sorting on the public storefront.
     * @type {boolean}
     * @memberof AttributeDetail
     */
    allowFilteringAndSortingInStorefront?: boolean;
    /**
     * Indicates whether the attribute is available for order routing
     * @type {boolean}
     * @memberof AttributeDetail
     */
    availableForOrderRouting?: boolean;
    /**
     * Indicates whether the attribtue value is indexed so that it can have a custom relevency weight compared to other attributes in a tokenized text search
     * @type {boolean}
     * @memberof AttributeDetail
     */
    customWeightInStorefrontSearch?: boolean | null;
    /**
     * The DataType of the attribute. Valid values for DataType are defined in DataTypeTypeConst.
     * @type {string}
     * @memberof AttributeDetail
     */
    dataType?: string | null;
    /**
     * A unique sequence of the attribute By dataType (used for common naming of fields in search index)
     * @type {number}
     * @memberof AttributeDetail
     */
    dataTypeSequence?: number;
    /**
     * Description of the attribute in the language specified by LocaleCode.
     * @type {string}
     * @memberof AttributeDetail
     */
    description?: string | null;
    /**
     * Am optional hint to the theme about how this attribute should be displayed (what control to use)
     * @type {string}
     * @memberof AttributeDetail
     */
    displayIntention?: string | null;
    /**
     * Indicates whether the attribtue value is indexed with case or not
     * @type {boolean}
     * @memberof AttributeDetail
     */
    indexValueWithCase?: boolean | null;
    /**
     * The InputType type of the attribute. Valid values for InputType are defined in InputTypeConst.
     * @type {string}
     * @memberof AttributeDetail
     */
    inputType?: string | null;
    /**
     * Name of the attribute in the language specified by LocaleCode.
     * @type {string}
     * @memberof AttributeDetail
     */
    name?: string | null;
    /**
     * If true, the system will index the display value of string attributes instead of the canonical value for searching. 
     * The canonical value will always be used for filtering. Does not apply for for non-string attributes.
     * @type {boolean}
     * @memberof AttributeDetail
     */
    searchDisplayValue?: boolean;
    /**
     * Indicates whether the attribute value is searchable.
     * @type {boolean}
     * @memberof AttributeDetail
     */
    searchableInStorefront?: boolean;
    /**
     * The UsageType of the attribute. Valid values for the usageType are defined in UsageTypeConst .
     * @type {string}
     * @memberof AttributeDetail
     */
    usageType?: string | null;
    /**
     * 
     * @type {CatalogRuntimesAttributeValidation}
     * @memberof AttributeDetail
     */
    validation?: CatalogRuntimesAttributeValidation;
    /**
     * The ValueType of the attribute. Valid values for ValueType are defined in ValueTypeTypeConst.
     * @type {string}
     * @memberof AttributeDetail
     */
    valueType?: string | null;
}
/**
 * 
 * @export
 * @interface BoostField
 */
export interface BoostField {
    /**
     * 
     * @type {string}
     * @memberof BoostField
     */
    fieldName?: string | null;
    /**
     * 
     * @type {Array<BoostValue>}
     * @memberof BoostField
     */
    valueExpressions?: Array<BoostValue> | null;
}
/**
 * 
 * @export
 * @interface BoostValue
 */
export interface BoostValue {
    /**
     * 
     * @type {number}
     * @memberof BoostValue
     */
    boost?: number;
    /**
     * 
     * @type {string}
     * @memberof BoostValue
     */
    operator?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BoostValue
     */
    value?: string | null;
}
/**
 * Details of a product, including its product code, name, description, options (if any), and current state--whether the product can be purchased given the options selected currently.
 * @export
 * @interface BundledProductBase
 */
export interface BundledProductBase {
    /**
     * Credit Value applicable to this product. Should only be present on DigitalCredit goodsType....
     * @type {number}
     * @memberof BundledProductBase
     */
    creditValue?: number | null;
    /**
     * The GoodsType of this product (Physical, Digital, DigitalCredit)
     * @type {string}
     * @memberof BundledProductBase
     */
    goodsType?: string | null;
    /**
     * 
     * @type {CatalogRuntimesProductInventoryInfo}
     * @memberof BundledProductBase
     */
    inventoryInfo?: CatalogRuntimesProductInventoryInfo;
    /**
     * Is this product shipped in its own package
     * @type {boolean}
     * @memberof BundledProductBase
     */
    isPackagedStandAlone?: boolean | null;
    /**
     * 
     * @type {CatalogRuntimesPackageMeasurements}
     * @memberof BundledProductBase
     */
    measurements?: CatalogRuntimesPackageMeasurements;
    /**
     * Fully Qualified Name of the selected option's attribute (only applies to Products as extras)
     * @type {string}
     * @memberof BundledProductBase
     */
    optionAttributeFQN?: string | null;
    /**
     * Value of the selected option (only applies to Products as extras)
     * @type {any}
     * @memberof BundledProductBase
     */
    optionValue?: any | null;
    /**
     * Merchant-created code associated with the product, for example, a SKU.
     * @type {string}
     * @memberof BundledProductBase
     */
    productCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BundledProductBase
     */
    productType?: string | null;
    /**
     * The quantity of the bundled product
     * @type {number}
     * @memberof BundledProductBase
     */
    quantity?: number;
}
/**
 * 
 * @export
 * @interface BundledProductSummary
 */
export interface BundledProductSummary {
    /**
     * Credit Value applicable to this product. Should only be present on DigitalCredit goodsType....
     * @type {number}
     * @memberof BundledProductSummary
     */
    creditValue?: number | null;
    /**
     * The GoodsType of this product (Physical, Digital, DigitalCredit)
     * @type {string}
     * @memberof BundledProductSummary
     */
    goodsType?: string | null;
    /**
     * 
     * @type {CatalogRuntimesProductInventoryInfo}
     * @memberof BundledProductSummary
     */
    inventoryInfo?: CatalogRuntimesProductInventoryInfo;
    /**
     * Is this product shipped in its own package
     * @type {boolean}
     * @memberof BundledProductSummary
     */
    isPackagedStandAlone?: boolean | null;
    /**
     * 
     * @type {CatalogRuntimesPackageMeasurements}
     * @memberof BundledProductSummary
     */
    measurements?: CatalogRuntimesPackageMeasurements;
    /**
     * Fully Qualified Name of the selected option's attribute (only applies to Products as extras)
     * @type {string}
     * @memberof BundledProductSummary
     */
    optionAttributeFQN?: string | null;
    /**
     * Value of the selected option (only applies to Products as extras)
     * @type {any}
     * @memberof BundledProductSummary
     */
    optionValue?: any | null;
    /**
     * Merchant-created code associated with the product, for example, a SKU.
     * @type {string}
     * @memberof BundledProductSummary
     */
    productCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BundledProductSummary
     */
    productType?: string | null;
    /**
     * The quantity of the bundled product
     * @type {number}
     * @memberof BundledProductSummary
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof BundledProductSummary
     */
    productName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BundledProductSummary
     */
    productShortDescription?: string | null;
}
/**
 * 
 * @export
 * @interface BundledProductSummaryAllOf
 */
export interface BundledProductSummaryAllOf {
    /**
     * 
     * @type {string}
     * @memberof BundledProductSummaryAllOf
     */
    productName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BundledProductSummaryAllOf
     */
    productShortDescription?: string | null;
}
/**
 * 
 * @export
 * @interface CampaignListingSettings
 */
export interface CampaignListingSettings {
    /**
     * 
     * @type {FieldValueBoost}
     * @memberof CampaignListingSettings
     */
    fieldValueBoost?: FieldValueBoost;
}
/**
 * 
 * @export
 * @interface CampaignProductSuggestSettings
 */
export interface CampaignProductSuggestSettings {
    /**
     * 
     * @type {FieldValueBoost}
     * @memberof CampaignProductSuggestSettings
     */
    fieldValueBoost?: FieldValueBoost;
    /**
     * 
     * @type {Array<string>}
     * @memberof CampaignProductSuggestSettings
     */
    searchTermAssociations?: Array<string> | null;
}
/**
 * Campaign result from db
 * @export
 * @interface CampaignResult
 */
export interface CampaignResult {
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CampaignResult
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof CampaignResult
     */
    campaignDescription?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CampaignResult
     */
    campaignEndDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CampaignResult
     */
    campaignId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CampaignResult
     */
    campaignName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CampaignResult
     */
    campaignStartDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CampaignResult
     */
    json?: string | null;
    /**
     * 
     * @type {CampaignListingSettings}
     * @memberof CampaignResult
     */
    listingSettings?: CampaignListingSettings;
    /**
     * 
     * @type {CampaignProductSuggestSettings}
     * @memberof CampaignResult
     */
    productSuggestSettings?: CampaignProductSuggestSettings;
    /**
     * 
     * @type {number}
     * @memberof CampaignResult
     */
    siteId?: number;
    /**
     * 
     * @type {CampaignSiteSearchSettings}
     * @memberof CampaignResult
     */
    siteSearchSettings?: CampaignSiteSearchSettings;
    /**
     * 
     * @type {number}
     * @memberof CampaignResult
     */
    statusId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CampaignResult
     */
    tenantId?: number;
}
/**
 * 
 * @export
 * @interface CampaignSiteSearchSettings
 */
export interface CampaignSiteSearchSettings {
    /**
     * 
     * @type {FieldValueBoost}
     * @memberof CampaignSiteSearchSettings
     */
    fieldValueBoost?: FieldValueBoost;
    /**
     * 
     * @type {Array<string>}
     * @memberof CampaignSiteSearchSettings
     */
    searchTermAssociations?: Array<string> | null;
}
/**
 * Spell correction
 * @export
 * @interface CandidateCorrection
 */
export interface CandidateCorrection {
    /**
     * Collation query from search engine
     * @type {string}
     * @memberof CandidateCorrection
     */
    query?: string | null;
}
/**
 * Discount applied to the product.
 * @export
 * @interface CatalogRuntimesAppliedDiscount
 */
export interface CatalogRuntimesAppliedDiscount {
    /**
     * If the discount is a coupon, code associated with the coupon.
     * @type {string}
     * @memberof CatalogRuntimesAppliedDiscount
     */
    couponCode?: string | null;
    /**
     * 
     * @type {CatalogRuntimesDiscount}
     * @memberof CatalogRuntimesAppliedDiscount
     */
    discount?: CatalogRuntimesDiscount;
    /**
     * Discount name and expiration date.
     * @type {Array<CatalogRuntimesDiscount>}
     * @memberof CatalogRuntimesAppliedDiscount
     */
    discounts?: Array<CatalogRuntimesDiscount> | null;
    /**
     * The new calculated price of the product. That is, the product price minus the discount amount.
     * @type {number}
     * @memberof CatalogRuntimesAppliedDiscount
     */
    impact?: number;
}
/**
 * Used to validate attributes.
 * @export
 * @interface CatalogRuntimesAttributeValidation
 */
export interface CatalogRuntimesAttributeValidation {
    /**
     * For validating a DateTime attribute value, maximum datetime allowed.
     * @type {string}
     * @memberof CatalogRuntimesAttributeValidation
     */
    maxDateValue?: string | null;
    /**
     * For validating Number attribute value, maximum number allowed.
     * @type {number}
     * @memberof CatalogRuntimesAttributeValidation
     */
    maxNumericValue?: number | null;
    /**
     * For validating strings, maximum length allowed for a string.
     * @type {number}
     * @memberof CatalogRuntimesAttributeValidation
     */
    maxStringLength?: number | null;
    /**
     * For validating a DateTime attribute value, minimum datetime allowed.
     * @type {string}
     * @memberof CatalogRuntimesAttributeValidation
     */
    minDateValue?: string | null;
    /**
     * For validating Number attribute value, minimum number allowed.
     * @type {number}
     * @memberof CatalogRuntimesAttributeValidation
     */
    minNumericValue?: number | null;
    /**
     * For validating strings, minimum length allowed for a string.
     * @type {number}
     * @memberof CatalogRuntimesAttributeValidation
     */
    minStringLength?: number | null;
    /**
     * Regular expression to run against the attribute value. This should follow JavaScript/EMCA's Regular Expression syntax.
     * @type {string}
     * @memberof CatalogRuntimesAttributeValidation
     */
    regularExpression?: string | null;
}
/**
 * Product Attribute properties common between a Product Propery, Option, and Extra
 * @export
 * @interface CatalogRuntimesAttributeVocabularyValueDisplayInfo
 */
export interface CatalogRuntimesAttributeVocabularyValueDisplayInfo {
    /**
     * Id of the image in the CMS.
     * @type {string}
     * @memberof CatalogRuntimesAttributeVocabularyValueDisplayInfo
     */
    cmsId?: string | null;
    /**
     * Hex Color value to display in a color picker
     * @type {string}
     * @memberof CatalogRuntimesAttributeVocabularyValueDisplayInfo
     */
    colorValue?: string | null;
    /**
     * URL of the image.
     * @type {string}
     * @memberof CatalogRuntimesAttributeVocabularyValueDisplayInfo
     */
    imageUrl?: string | null;
}
/**
 * 
 * @export
 * @interface CatalogRuntimesBundledProduct
 */
export interface CatalogRuntimesBundledProduct {
    /**
     * Credit Value applicable to this product. Should only be present on DigitalCredit goodsType....
     * @type {number}
     * @memberof CatalogRuntimesBundledProduct
     */
    creditValue?: number | null;
    /**
     * The GoodsType of this product (Physical, Digital, DigitalCredit)
     * @type {string}
     * @memberof CatalogRuntimesBundledProduct
     */
    goodsType?: string | null;
    /**
     * 
     * @type {CatalogRuntimesProductInventoryInfo}
     * @memberof CatalogRuntimesBundledProduct
     */
    inventoryInfo?: CatalogRuntimesProductInventoryInfo;
    /**
     * Is this product shipped in its own package
     * @type {boolean}
     * @memberof CatalogRuntimesBundledProduct
     */
    isPackagedStandAlone?: boolean | null;
    /**
     * 
     * @type {CatalogRuntimesPackageMeasurements}
     * @memberof CatalogRuntimesBundledProduct
     */
    measurements?: CatalogRuntimesPackageMeasurements;
    /**
     * Fully Qualified Name of the selected option's attribute (only applies to Products as extras)
     * @type {string}
     * @memberof CatalogRuntimesBundledProduct
     */
    optionAttributeFQN?: string | null;
    /**
     * Value of the selected option (only applies to Products as extras)
     * @type {any}
     * @memberof CatalogRuntimesBundledProduct
     */
    optionValue?: any | null;
    /**
     * Merchant-created code associated with the product, for example, a SKU.
     * @type {string}
     * @memberof CatalogRuntimesBundledProduct
     */
    productCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogRuntimesBundledProduct
     */
    productType?: string | null;
    /**
     * The quantity of the bundled product
     * @type {number}
     * @memberof CatalogRuntimesBundledProduct
     */
    quantity?: number;
    /**
     * 
     * @type {ProductContent}
     * @memberof CatalogRuntimesBundledProduct
     */
    content?: ProductContent;
}
/**
 * 
 * @export
 * @interface CatalogRuntimesBundledProductAllOf
 */
export interface CatalogRuntimesBundledProductAllOf {
    /**
     * 
     * @type {ProductContent}
     * @memberof CatalogRuntimesBundledProductAllOf
     */
    content?: ProductContent;
}
/**
 * The category hierarchy of your store as it appears on the storefront. This is the category heirarchy defined with the admin/category resource except for any categories with an IsDisplayed value set to false.
 * @export
 * @interface CatalogRuntimesCategory
 */
export interface CatalogRuntimesCategory {
    /**
     * 
     * @type {Array<CatalogRuntimesCategoryAttribute>}
     * @memberof CatalogRuntimesCategory
     */
    attributes?: Array<CatalogRuntimesCategoryAttribute> | null;
    /**
     * External unique identifier of the category.
     * @type {string}
     * @memberof CatalogRuntimesCategory
     */
    categoryCode?: string | null;
    /**
     * Internal unique identifier of the category. System-supplied and read-only.
     * @type {number}
     * @memberof CatalogRuntimesCategory
     */
    categoryId?: number;
    /**
     * List of subcategories that belong to this category.
     * @type {Array<CatalogRuntimesCategory>}
     * @memberof CatalogRuntimesCategory
     */
    childrenCategories?: Array<CatalogRuntimesCategory> | null;
    /**
     * 
     * @type {CategoryContent}
     * @memberof CatalogRuntimesCategory
     */
    content?: CategoryContent;
    /**
     * Indicates whether the category should be displayed.
     * @type {number}
     * @memberof CatalogRuntimesCategory
     */
    count?: number | null;
    /**
     * Indicates whether the category should be displayed.
     * @type {boolean}
     * @memberof CatalogRuntimesCategory
     */
    isDisplayed?: boolean;
    /**
     * 
     * @type {CatalogRuntimesCategory}
     * @memberof CatalogRuntimesCategory
     */
    parentCategory?: CatalogRuntimesCategory;
    /**
     * Order in which categories appear when they are at the same level (siblings). For example, categories can be sequenced so that a specific category always appears first (or last).
     * @type {number}
     * @memberof CatalogRuntimesCategory
     */
    sequence?: number | null;
    /**
     * Indicates whether the category should be sliced
     * @type {boolean}
     * @memberof CatalogRuntimesCategory
     */
    shouldSlice?: boolean;
    /**
     * Last Modified Date Time
     * @type {string}
     * @memberof CatalogRuntimesCategory
     */
    updateDate?: string;
}
/**
 * 
 * @export
 * @interface CatalogRuntimesCategoryAttribute
 */
export interface CatalogRuntimesCategoryAttribute {
    /**
     * 
     * @type {number}
     * @memberof CatalogRuntimesCategoryAttribute
     */
    dataType?: number;
    /**
     * 
     * @type {string}
     * @memberof CatalogRuntimesCategoryAttribute
     */
    fullyQualifiedName?: string | null;
    /**
     * 
     * @type {Array<any>}
     * @memberof CatalogRuntimesCategoryAttribute
     */
    values?: Array<any> | null;
}
/**
 * Collection of categories returned as a whole. A collection is not paged.
 * @export
 * @interface CatalogRuntimesCategoryCollection
 */
export interface CatalogRuntimesCategoryCollection {
    /**
     * 
     * @type {Array<CatalogRuntimesCategory>}
     * @memberof CatalogRuntimesCategoryCollection
     */
    items?: Array<CatalogRuntimesCategory> | null;
    /**
     * 
     * @type {number}
     * @memberof CatalogRuntimesCategoryCollection
     */
    totalCount?: number;
}
/**
 * Collection of categories where categories are returned in a series of pages.
 * @export
 * @interface CatalogRuntimesCategoryPagedCollection
 */
export interface CatalogRuntimesCategoryPagedCollection {
    /**
     * 
     * @type {Array<CatalogRuntimesCategory>}
     * @memberof CatalogRuntimesCategoryPagedCollection
     */
    items?: Array<CatalogRuntimesCategory> | null;
    /**
     * 
     * @type {number}
     * @memberof CatalogRuntimesCategoryPagedCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof CatalogRuntimesCategoryPagedCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof CatalogRuntimesCategoryPagedCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof CatalogRuntimesCategoryPagedCollection
     */
    totalCount?: number;
}
/**
 * The currency exchange rates from one currency to another.
 * @export
 * @interface CatalogRuntimesCurrencyExchangeRate
 */
export interface CatalogRuntimesCurrencyExchangeRate {
    /**
     * Number of decimal places
     * @type {number}
     * @memberof CatalogRuntimesCurrencyExchangeRate
     */
    decimalPlaces?: number | null;
    /**
     * The source currency code
     * @type {string}
     * @memberof CatalogRuntimesCurrencyExchangeRate
     */
    fromCurrencyCode?: string | null;
    /**
     * An additional multiplier to use in calculations
     * @type {number}
     * @memberof CatalogRuntimesCurrencyExchangeRate
     */
    multiplier?: number | null;
    /**
     * The exchange rate
     * @type {number}
     * @memberof CatalogRuntimesCurrencyExchangeRate
     */
    rate?: number | null;
    /**
     * Reference data for miscellaneous metadata from updates
     * @type {string}
     * @memberof CatalogRuntimesCurrencyExchangeRate
     */
    referenceData?: string | null;
    /**
     * Rounding strategy
     * @type {number}
     * @memberof CatalogRuntimesCurrencyExchangeRate
     */
    roundingStrategy?: number | null;
    /**
     * The target currency code
     * @type {string}
     * @memberof CatalogRuntimesCurrencyExchangeRate
     */
    toCurrencyCode?: string | null;
}
/**
 * Discount name and expiration date.
 * @export
 * @interface CatalogRuntimesDiscount
 */
export interface CatalogRuntimesDiscount {
    /**
     * Unique identifier of the discount.
     * @type {number}
     * @memberof CatalogRuntimesDiscount
     */
    discountId?: number;
    /**
     * Date when the discount expires.
     * @type {string}
     * @memberof CatalogRuntimesDiscount
     */
    expirationDate?: string | null;
    /**
     * Description of the discount.
     * @type {string}
     * @memberof CatalogRuntimesDiscount
     */
    friendlyDescription?: string | null;
    /**
     * The Impact of the individual Discount
     * @type {number}
     * @memberof CatalogRuntimesDiscount
     */
    impact?: number;
    /**
     * Name of the discount.
     * @type {string}
     * @memberof CatalogRuntimesDiscount
     */
    name?: string | null;
}
/**
 * Category
 * @export
 * @interface CatalogRuntimesDynamicExpression
 */
export interface CatalogRuntimesDynamicExpression {
    /**
     * 
     * @type {string}
     * @memberof CatalogRuntimesDynamicExpression
     */
    text?: string | null;
}
/**
 * For faceted searches, name of the facet and list of facet values. For example, a facet called "Brands" may have the facet values "Apple," "Motorola," and "Samsung."
 * @export
 * @interface CatalogRuntimesFacet
 */
export interface CatalogRuntimesFacet {
    /**
     * Value, RangeQuery, Hierarchy
     * @type {string}
     * @memberof CatalogRuntimesFacet
     */
    facetType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogRuntimesFacet
     */
    field?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogRuntimesFacet
     */
    label?: string | null;
    /**
     * 
     * @type {Array<FacetValue>}
     * @memberof CatalogRuntimesFacet
     */
    values?: Array<FacetValue> | null;
}
/**
 * The future inventory for a product at a specific Location
 * @export
 * @interface CatalogRuntimesFutureInventory
 */
export interface CatalogRuntimesFutureInventory {
    /**
     * 
     * @type {number}
     * @memberof CatalogRuntimesFutureInventory
     */
    allocated?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CatalogRuntimesFutureInventory
     */
    available?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CatalogRuntimesFutureInventory
     */
    bopisProcessingTimeDate?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CatalogRuntimesFutureInventory
     */
    bopisProcessingTimeHours?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogRuntimesFutureInventory
     */
    createDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogRuntimesFutureInventory
     */
    deliveryDate?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CatalogRuntimesFutureInventory
     */
    futureInventoryID?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CatalogRuntimesFutureInventory
     */
    onhand?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CatalogRuntimesFutureInventory
     */
    pending?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogRuntimesFutureInventory
     */
    sthFulfillmentDate?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CatalogRuntimesFutureInventory
     */
    sthProcessingTimeHours?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogRuntimesFutureInventory
     */
    transferFulfillmentDate?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CatalogRuntimesFutureInventory
     */
    transferProcessingTimeHours?: number | null;
}
/**
 * The tags for the inventory
 * @export
 * @interface CatalogRuntimesInventoryTag
 */
export interface CatalogRuntimesInventoryTag {
    /**
     * 
     * @type {string}
     * @memberof CatalogRuntimesInventoryTag
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogRuntimesInventoryTag
     */
    value?: string | null;
}
/**
 * Physical dimensions of the package required to ship the product and its weight.
 * @export
 * @interface CatalogRuntimesPackageMeasurements
 */
export interface CatalogRuntimesPackageMeasurements {
    /**
     * 
     * @type {CommerceRuntimeMeasurement}
     * @memberof CatalogRuntimesPackageMeasurements
     */
    packageHeight?: CommerceRuntimeMeasurement;
    /**
     * 
     * @type {CommerceRuntimeMeasurement}
     * @memberof CatalogRuntimesPackageMeasurements
     */
    packageLength?: CommerceRuntimeMeasurement;
    /**
     * 
     * @type {CommerceRuntimeMeasurement}
     * @memberof CatalogRuntimesPackageMeasurements
     */
    packageWeight?: CommerceRuntimeMeasurement;
    /**
     * 
     * @type {CommerceRuntimeMeasurement}
     * @memberof CatalogRuntimesPackageMeasurements
     */
    packageWidth?: CommerceRuntimeMeasurement;
}
/**
 * 
 * @export
 * @interface CatalogRuntimesPriceList
 */
export interface CatalogRuntimesPriceList {
    /**
     * 
     * @type {Array<PriceListNode>}
     * @memberof CatalogRuntimesPriceList
     */
    ancestors?: Array<PriceListNode> | null;
    /**
     * 
     * @type {Array<PriceListNode>}
     * @memberof CatalogRuntimesPriceList
     */
    descendants?: Array<PriceListNode> | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogRuntimesPriceList
     */
    description?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CatalogRuntimesPriceList
     */
    enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CatalogRuntimesPriceList
     */
    filteredInStoreFront?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CatalogRuntimesPriceList
     */
    isIndexed?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CatalogRuntimesPriceList
     */
    isSiteDefault?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CatalogRuntimesPriceList
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogRuntimesPriceList
     */
    priceListCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CatalogRuntimesPriceList
     */
    priceListId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CatalogRuntimesPriceList
     */
    resolvable?: boolean;
    /**
     * 
     * @type {Array<number>}
     * @memberof CatalogRuntimesPriceList
     */
    validSites?: Array<number> | null;
}
/**
 * Details of a product, including its product code, name, description, options (if any), and current state--whether the product can be purchased given the options selected currently.
 * @export
 * @interface CatalogRuntimesProduct
 */
export interface CatalogRuntimesProduct {
    /**
     * List of potential shipping discounts available for this product.
     * @type {Array<CatalogRuntimesDiscount>}
     * @memberof CatalogRuntimesProduct
     */
    availableShippingDiscounts?: Array<CatalogRuntimesDiscount> | null;
    /**
     * The list of Bundled products included in this product. This is only populated when ProductUsage=Bundle
     * @type {Array<CatalogRuntimesBundledProduct>}
     * @memberof CatalogRuntimesProduct
     */
    bundledProducts?: Array<CatalogRuntimesBundledProduct> | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogRuntimesProduct
     */
    catalogEndDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogRuntimesProduct
     */
    catalogStartDate?: string | null;
    /**
     * List of categories to which this product belongs.
     * @type {Array<CatalogRuntimesCategory>}
     * @memberof CatalogRuntimesProduct
     */
    categories?: Array<CatalogRuntimesCategory> | null;
    /**
     * Only used for indexing
     * @type {Array<ProductContent>}
     * @memberof CatalogRuntimesProduct
     */
    collectionMembersProductContent?: Array<ProductContent> | null;
    /**
     * 
     * @type {ProductContent}
     * @memberof CatalogRuntimesProduct
     */
    content?: ProductContent;
    /**
     * 
     * @type {number}
     * @memberof CatalogRuntimesProduct
     */
    costPriceMargin?: number | null;
    /**
     * When the product was created with the product admin resource.
     * @type {string}
     * @memberof CatalogRuntimesProduct
     */
    createDate?: string;
    /**
     * 
     * @type {string}
     * @memberof CatalogRuntimesProduct
     */
    dateFirstAvailableInCatalog?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CatalogRuntimesProduct
     */
    daysAvailableInCatalog?: number | null;
    /**
     * Indicates the fulfillment types the product supports.
     * @type {Array<string>}
     * @memberof CatalogRuntimesProduct
     */
    fulfillmentTypesSupported?: Array<string> | null;
    /**
     * The GoodsType of the product (Physical, Digital, DigitalCredit....)
     * @type {string}
     * @memberof CatalogRuntimesProduct
     */
    goodsType?: string | null;
    /**
     * 
     * @type {CatalogRuntimesProductInventoryInfo}
     * @memberof CatalogRuntimesProduct
     */
    inventoryInfo?: CatalogRuntimesProductInventoryInfo;
    /**
     * If true, the product exists. If not, the product should not appear in search results.
     * @type {boolean}
     * @memberof CatalogRuntimesProduct
     */
    isActive?: boolean | null;
    /**
     * Is this product shipped in its own package
     * @type {boolean}
     * @memberof CatalogRuntimesProduct
     */
    isPackagedStandAlone?: boolean | null;
    /**
     * If true, the product can be purchased or fulfilled at regular intervals, for example, monthly billing or a subscription.
     * @type {boolean}
     * @memberof CatalogRuntimesProduct
     */
    isRecurring?: boolean;
    /**
     * If true, the product is subject to tax.
     * @type {boolean}
     * @memberof CatalogRuntimesProduct
     */
    isTaxable?: boolean;
    /**
     * Any location code (eq) or array of location codes which are in stock.
     * @type {Array<string>}
     * @memberof CatalogRuntimesProduct
     */
    locationsInStock?: Array<string> | null;
    /**
     * 
     * @type {CatalogRuntimesPackageMeasurements}
     * @memberof CatalogRuntimesProduct
     */
    measurements?: CatalogRuntimesPackageMeasurements;
    /**
     * Manufacturer part number.
     * @type {string}
     * @memberof CatalogRuntimesProduct
     */
    mfgPartNumber?: string | null;
    /**
     * Manufacturer part numbers (populated for configurable products).
     * @type {Array<string>}
     * @memberof CatalogRuntimesProduct
     */
    mfgPartNumbers?: Array<string> | null;
    /**
     * List of the product's configurable options and extras. 
     * Includes whether an option is configurable (for example, a T-shirt) or an Extra (for example, monogram or gift-wrapping).
     * @type {Array<CatalogRuntimesProductOption>}
     * @memberof CatalogRuntimesProduct
     */
    options?: Array<CatalogRuntimesProductOption> | null;
    /**
     * 
     * @type {number}
     * @memberof CatalogRuntimesProduct
     */
    personalizationScore?: number;
    /**
     * 
     * @type {CatalogRuntimesProductPrice}
     * @memberof CatalogRuntimesProduct
     */
    price?: CatalogRuntimesProductPrice;
    /**
     * 
     * @type {ProductPriceRange}
     * @memberof CatalogRuntimesProduct
     */
    priceRange?: ProductPriceRange;
    /**
     * 
     * @type {CatalogRuntimesProductPricingBehaviorInfo}
     * @memberof CatalogRuntimesProduct
     */
    pricingBehavior?: CatalogRuntimesProductPricingBehaviorInfo;
    /**
     * Merchant-created code associated with the product, for example, a SKU.
     * @type {string}
     * @memberof CatalogRuntimesProduct
     */
    productCode?: string | null;
    /**
     * list of member products that are part of the collection
     * This requires that the ProductUsage be set to Collection
     * @type {Array<ProductCollectionMember>}
     * @memberof CatalogRuntimesProduct
     */
    productCollectionMembers?: Array<ProductCollectionMember> | null;
    /**
     * List of product codes of product collections that this product is a member of.
     * @type {Array<CatalogRuntimesProductCollectionInfo>}
     * @memberof CatalogRuntimesProduct
     */
    productCollections?: Array<CatalogRuntimesProductCollectionInfo> | null;
    /**
     * List of the image groups this product uses.
     * Image groups are used to map different images to different product options.
     * If the product doesn't have options then all images will be in the default
     * image group.
     * @type {Array<CatalogRuntimesProductImageGroup>}
     * @memberof CatalogRuntimesProduct
     */
    productImageGroups?: Array<CatalogRuntimesProductImageGroup> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof CatalogRuntimesProduct
     */
    productRules?: Array<string> | null;
    /**
     * System generated monotonically increasing sequence
     * @type {number}
     * @memberof CatalogRuntimesProduct
     */
    productSequence?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogRuntimesProduct
     */
    productType?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CatalogRuntimesProduct
     */
    productTypeId?: number | null;
    /**
     * The UsageType of this product (Standard, Configurable, Bundle, Component, Collection)
     * @type {string}
     * @memberof CatalogRuntimesProduct
     */
    productUsage?: string | null;
    /**
     * List of product properties. These are attributes that might apply to multiple products, for example, price, size, manufacturer. These attributes cannot be configured by the shopper.
     * @type {Array<CatalogRuntimesProductProperty>}
     * @memberof CatalogRuntimesProduct
     */
    properties?: Array<CatalogRuntimesProductProperty> | null;
    /**
     * Represents the published state of the product returned. Valid values for ValueType are defined in PublishStateConst.
     * @type {string}
     * @memberof CatalogRuntimesProduct
     */
    publishState?: string | null;
    /**
     * 
     * @type {ProductPurchasableState}
     * @memberof CatalogRuntimesProduct
     */
    purchasableState?: ProductPurchasableState;
    /**
     * The location where the product is being purchased.. default is null. Products can have different prices
     * by purchaseLocation via custom priceListResolution....
     * @type {string}
     * @memberof CatalogRuntimesProduct
     */
    purchaseLocation?: string | null;
    /**
     * The item's search engine relevancy score.
     * @type {number}
     * @memberof CatalogRuntimesProduct
     */
    score?: number;
    /**
     * Readonly value of the selected value of the option corresponding to the Mozu.ProductRuntime.Contracts.Product.SlicingAttributeFQN
     * @type {string}
     * @memberof CatalogRuntimesProduct
     */
    sliceValue?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogRuntimesProduct
     */
    slicingAttributeFQN?: string | null;
    /**
     * UPC code of the products (populated for configurable products).
     * @type {Array<string>}
     * @memberof CatalogRuntimesProduct
     */
    upCs?: Array<string> | null;
    /**
     * UPC code of the product.
     * @type {string}
     * @memberof CatalogRuntimesProduct
     */
    upc?: string | null;
    /**
     * When the product was last modified with the product admin resource.
     * @type {string}
     * @memberof CatalogRuntimesProduct
     */
    updateDate?: string;
    /**
     * List of valid pricelists for the product
     * @type {Array<string>}
     * @memberof CatalogRuntimesProduct
     */
    validPriceLists?: Array<string> | null;
    /**
     * When a configurable product has IsPurchasable=true on a GetProduct, this property will be populated for submission to cart.
     * @type {string}
     * @memberof CatalogRuntimesProduct
     */
    variationProductCode?: string | null;
    /**
     * 
     * @type {Array<VariationSummary>}
     * @memberof CatalogRuntimesProduct
     */
    variations?: Array<VariationSummary> | null;
    /**
     * For products with bulk pricing... this will be populated with pricebands, depending on what options have been selected...
     * @type {Array<ProductVolumePrice>}
     * @memberof CatalogRuntimesProduct
     */
    volumePriceBands?: Array<ProductVolumePrice> | null;
    /**
     * 
     * @type {ProductPriceRange}
     * @memberof CatalogRuntimesProduct
     */
    volumePriceRange?: ProductPriceRange;
}
/**
 * 
 * @export
 * @interface CatalogRuntimesProductCollection
 */
export interface CatalogRuntimesProductCollection {
    /**
     * 
     * @type {Array<CatalogRuntimesProduct>}
     * @memberof CatalogRuntimesProductCollection
     */
    items?: Array<CatalogRuntimesProduct> | null;
    /**
     * If a cursorMark is provided on the request, then the nextCursorMark will be populated on the response.
     * Provide this value as the cursorMark argument on the next request. If a cursorMark is provided on the request and the nextCursorMark value is null, then the end of the resultset was reached
     * @type {string}
     * @memberof CatalogRuntimesProductCollection
     */
    nextCursorMark?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CatalogRuntimesProductCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof CatalogRuntimesProductCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof CatalogRuntimesProductCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof CatalogRuntimesProductCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface CatalogRuntimesProductCollectionInfo
 */
export interface CatalogRuntimesProductCollectionInfo {
    /**
     * True if the collection is the primary collection for the containing product.
     * @type {boolean}
     * @memberof CatalogRuntimesProductCollectionInfo
     */
    isPrimary?: boolean;
    /**
     * Product Code of the collection
     * @type {string}
     * @memberof CatalogRuntimesProductCollectionInfo
     */
    productCode?: string | null;
}
/**
 * This is the key of the product collection member.  For now, it's just product code, but may expand in future
 * @export
 * @interface CatalogRuntimesProductCollectionMemberKey
 */
export interface CatalogRuntimesProductCollectionMemberKey {
    /**
     * 
     * @type {string}
     * @memberof CatalogRuntimesProductCollectionMemberKey
     */
    value?: string | null;
}
/**
 * The inventory for a product at a specific Location
 * @export
 * @interface CatalogRuntimesProductCost
 */
export interface CatalogRuntimesProductCost {
    /**
     * 
     * @type {number}
     * @memberof CatalogRuntimesProductCost
     */
    cost?: number;
    /**
     * 
     * @type {string}
     * @memberof CatalogRuntimesProductCost
     */
    productCode?: string | null;
}
/**
 * 
 * @export
 * @interface CatalogRuntimesProductImageGroup
 */
export interface CatalogRuntimesProductImageGroup {
    /**
     * 
     * @type {string}
     * @memberof CatalogRuntimesProductImageGroup
     */
    productImageGroupId: string;
    /**
     * 
     * @type {Array<CatalogRuntimesProductImageGroupTag>}
     * @memberof CatalogRuntimesProductImageGroup
     */
    productImageGroupTags?: Array<CatalogRuntimesProductImageGroupTag> | null;
}
/**
 * 
 * @export
 * @interface CatalogRuntimesProductImageGroupTag
 */
export interface CatalogRuntimesProductImageGroupTag {
    /**
     * 
     * @type {string}
     * @memberof CatalogRuntimesProductImageGroupTag
     */
    attributeFqn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogRuntimesProductImageGroupTag
     */
    value?: string | null;
}
/**
 * Use the Products resource to create and manage products for your store. You can create products with options that a shopper configures (such as a T-shirt color and size). The system can manage inventory for all combinations of your product options, and can calculate tax and shipping costs.
 * @export
 * @interface CatalogRuntimesProductInventoryInfo
 */
export interface CatalogRuntimesProductInventoryInfo {
    /**
     * Date the item will become available for back order if out of stock
     * @type {string}
     * @memberof CatalogRuntimesProductInventoryInfo
     */
    availableDate?: string | null;
    /**
     * ReadOnly flag indicates is the product has substitutions defined
     * @type {boolean}
     * @memberof CatalogRuntimesProductInventoryInfo
     */
    isSubstitutable?: boolean;
    /**
     * If true, the Products service manages inventory for this product.
     * @type {boolean}
     * @memberof CatalogRuntimesProductInventoryInfo
     */
    manageStock?: boolean | null;
    /**
     * Directship location code for OnlineStockAvailable
     * @type {string}
     * @memberof CatalogRuntimesProductInventoryInfo
     */
    onlineLocationCode?: string | null;
    /**
     * Number of product items currently available for purchase.
     * @type {number}
     * @memberof CatalogRuntimesProductInventoryInfo
     */
    onlineSoftStockAvailable?: number | null;
    /**
     * Number of product items currently available for purchase.
     * @type {number}
     * @memberof CatalogRuntimesProductInventoryInfo
     */
    onlineStockAvailable?: number | null;
    /**
     * The behvior when the ManageStock is true and the product is not in stock.
     * @type {string}
     * @memberof CatalogRuntimesProductInventoryInfo
     */
    outOfStockBehavior?: string | null;
}
/**
 * An option for a product and its list of values, if any. Also includes whether the option is configurable or stand-alone, whether it is required, whether it can have mulitple values and whether the shopper can supply its value (for example, engraved initials).
 * @export
 * @interface CatalogRuntimesProductOption
 */
export interface CatalogRuntimesProductOption {
    /**
     * 
     * @type {AttributeDetail}
     * @memberof CatalogRuntimesProductOption
     */
    attributeDetail?: AttributeDetail;
    /**
     * Attribute fully qualified name
     * @type {string}
     * @memberof CatalogRuntimesProductOption
     */
    attributeFQN?: string | null;
    /**
     * If true, more than one value can be assigned to an option. Only possible with stand-alone options.
     * @type {boolean}
     * @memberof CatalogRuntimesProductOption
     */
    isMultiValue?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CatalogRuntimesProductOption
     */
    isProductImageGroupSelector?: boolean;
    /**
     * If true, the shopper must provide a value for the option before it can be purchased.
     * @type {boolean}
     * @memberof CatalogRuntimesProductOption
     */
    isRequired?: boolean | null;
    /**
     * Possible choices for an option, for example, values of the option "Color" can be "red," "white," and "blue."
     * @type {Array<CatalogRuntimesProductOptionValue>}
     * @memberof CatalogRuntimesProductOption
     */
    values?: Array<CatalogRuntimesProductOptionValue> | null;
}
/**
 * Value of product option..."red," "white," "blue."
 * @export
 * @interface CatalogRuntimesProductOptionValue
 */
export interface CatalogRuntimesProductOptionValue {
    /**
     * Unique Id for the Value
     * @type {number}
     * @memberof CatalogRuntimesProductOptionValue
     */
    attributeValueId?: number;
    /**
     * 
     * @type {CatalogRuntimesBundledProduct}
     * @memberof CatalogRuntimesProductOptionValue
     */
    bundledProduct?: CatalogRuntimesBundledProduct;
    /**
     * How much this option costs above the cost of the product.
     * @type {number}
     * @memberof CatalogRuntimesProductOptionValue
     */
    deltaPrice?: number | null;
    /**
     * How much this option weighs above the weight of the product.
     * @type {number}
     * @memberof CatalogRuntimesProductOptionValue
     */
    deltaWeight?: number | null;
    /**
     * 
     * @type {CatalogRuntimesAttributeVocabularyValueDisplayInfo}
     * @memberof CatalogRuntimesProductOptionValue
     */
    displayInfo?: CatalogRuntimesAttributeVocabularyValueDisplayInfo;
    /**
     * If true, this is the default value that the merchant supplied.
     * @type {boolean}
     * @memberof CatalogRuntimesProductOptionValue
     */
    isDefault?: boolean | null;
    /**
     * If true, this option is enabled and can be selected. During configuration, this returns false of this option value is invalid with other current selected options.
     * @type {boolean}
     * @memberof CatalogRuntimesProductOptionValue
     */
    isEnabled?: boolean | null;
    /**
     * If true, this is the option that is currently selected. It can be either the default value or one that the shopper has selected.
     * @type {boolean}
     * @memberof CatalogRuntimesProductOptionValue
     */
    isSelected?: boolean | null;
    /**
     * How much this option costs above the cost of the product.
     * @type {any}
     * @memberof CatalogRuntimesProductOptionValue
     */
    shopperEnteredValue?: any | null;
    /**
     * Localized Value in the language of the locale code only available for dataType string
     * @type {string}
     * @memberof CatalogRuntimesProductOptionValue
     */
    stringValue?: string | null;
    /**
     * 
     * @type {any}
     * @memberof CatalogRuntimesProductOptionValue
     */
    value?: any | null;
}
/**
 * Price of the product with any sale and discounts applied.
 * @export
 * @interface CatalogRuntimesProductPrice
 */
export interface CatalogRuntimesProductPrice {
    /**
     * Current Price Listed in the catalog.
     * @type {number}
     * @memberof CatalogRuntimesProductPrice
     */
    catalogListPrice?: number | null;
    /**
     * Current sale price of the product listed in the catalog. This is not typically dispalyed directly to the user as it will be listed in SalePrice if applicable.
     * @type {number}
     * @memberof CatalogRuntimesProductPrice
     */
    catalogSalePrice?: number | null;
    /**
     * Credit Value applicable to this product. Should only be present on DigitalCredit goodsType....
     * @type {number}
     * @memberof CatalogRuntimesProductPrice
     */
    creditValue?: number | null;
    /**
     * 
     * @type {CatalogRuntimesAppliedDiscount}
     * @memberof CatalogRuntimesProductPrice
     */
    discount?: CatalogRuntimesAppliedDiscount;
    /**
     * The priceList that was applied to this product
     * @type {string}
     * @memberof CatalogRuntimesProductPrice
     */
    effectivePricelistCode?: string | null;
    /**
     * Manufacturer suggested Retail price, this may be null if one is not set in the catalog.
     * @type {number}
     * @memberof CatalogRuntimesProductPrice
     */
    msrp?: number | null;
    /**
     * Listed Price of the product. This is the price that the merchant intends to sell the product for if no sale is active.
     * @type {number}
     * @memberof CatalogRuntimesProductPrice
     */
    price?: number | null;
    /**
     * The specific PriceListCode that was applied (includes inheritence
     * @type {string}
     * @memberof CatalogRuntimesProductPrice
     */
    priceListEntryCode?: string | null;
    /**
     * EndDate if PriceListEntry present.
     * @type {string}
     * @memberof CatalogRuntimesProductPrice
     */
    priceListEntryEndDate?: string | null;
    /**
     * IF a PriceList Entry was applied to this price it will be (simple, bulk...)
     * @type {string}
     * @memberof CatalogRuntimesProductPrice
     */
    priceListEntryMode?: string | null;
    /**
     * Futher clarification of what value is being returned in the Price field
     * @type {string}
     * @memberof CatalogRuntimesProductPrice
     */
    priceType?: string | null;
    /**
     * Current sale price of the product. This can be either a specific numerical amount or it can be calculated based on an active discount. Optional.
     * @type {number}
     * @memberof CatalogRuntimesProductPrice
     */
    salePrice?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogRuntimesProductPrice
     */
    salePriceType?: string | null;
}
/**
 * 
 * @export
 * @interface CatalogRuntimesProductPricingBehaviorInfo
 */
export interface CatalogRuntimesProductPricingBehaviorInfo {
    /**
     * 
     * @type {boolean}
     * @memberof CatalogRuntimesProductPricingBehaviorInfo
     */
    discountsRestricted?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogRuntimesProductPricingBehaviorInfo
     */
    discountsRestrictedEndDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogRuntimesProductPricingBehaviorInfo
     */
    discountsRestrictedStartDate?: string | null;
}
/**
 * An attribute used as a property of a product
 * @export
 * @interface CatalogRuntimesProductProperty
 */
export interface CatalogRuntimesProductProperty {
    /**
     * 
     * @type {AttributeDetail}
     * @memberof CatalogRuntimesProductProperty
     */
    attributeDetail?: AttributeDetail;
    /**
     * Attribute fully qualified name
     * @type {string}
     * @memberof CatalogRuntimesProductProperty
     */
    attributeFQN?: string | null;
    /**
     * Indicates whether the product property should be hidden from the customer
     * @type {boolean}
     * @memberof CatalogRuntimesProductProperty
     */
    isHidden?: boolean | null;
    /**
     * Indicates whether it's possible for there to be more than one value in the Values field
     * @type {boolean}
     * @memberof CatalogRuntimesProductProperty
     */
    isMultiValue?: boolean | null;
    /**
     * Property Type of the Property
     * @type {string}
     * @memberof CatalogRuntimesProductProperty
     */
    propertyType?: string | null;
    /**
     * Value(s) of the product property
     * @type {Array<CatalogRuntimesProductPropertyValue>}
     * @memberof CatalogRuntimesProductProperty
     */
    values?: Array<CatalogRuntimesProductPropertyValue> | null;
}
/**
 * Value of product property
 * @export
 * @interface CatalogRuntimesProductPropertyValue
 */
export interface CatalogRuntimesProductPropertyValue {
    /**
     * 
     * @type {CatalogRuntimesAttributeVocabularyValueDisplayInfo}
     * @memberof CatalogRuntimesProductPropertyValue
     */
    displayInfo?: CatalogRuntimesAttributeVocabularyValueDisplayInfo;
    /**
     * Localized Value in the language of the locale code
     * @type {string}
     * @memberof CatalogRuntimesProductPropertyValue
     */
    stringValue?: string | null;
    /**
     * 
     * @type {any}
     * @memberof CatalogRuntimesProductPropertyValue
     */
    value?: any | null;
}
/**
 * 
 * @export
 * @interface CatalogRuntimesProductRule
 */
export interface CatalogRuntimesProductRule {
    /**
     * Unique identifier of the ProductRule. System-supplied and read-only.
     * @type {string}
     * @memberof CatalogRuntimesProductRule
     */
    code?: string | null;
    /**
     * ProductRule description
     * @type {string}
     * @memberof CatalogRuntimesProductRule
     */
    description?: string | null;
    /**
     * 
     * @type {CatalogRuntimesDynamicExpression}
     * @memberof CatalogRuntimesProductRule
     */
    expression?: CatalogRuntimesDynamicExpression;
    /**
     * ProductRule name
     * @type {string}
     * @memberof CatalogRuntimesProductRule
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogRuntimesProductRule
     */
    scope?: string | null;
}
/**
 * Search Merchandizing Rule
 * @export
 * @interface CatalogRuntimesSearchMerchandizingRule
 */
export interface CatalogRuntimesSearchMerchandizingRule {
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CatalogRuntimesSearchMerchandizingRule
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * Unique identifier. Will be generated if not provided.
     * @type {string}
     * @memberof CatalogRuntimesSearchMerchandizingRule
     */
    code?: string | null;
    /**
     * 
     * @type {CatalogRuntimesSearchMerchandizingRuleContext}
     * @memberof CatalogRuntimesSearchMerchandizingRule
     */
    context?: CatalogRuntimesSearchMerchandizingRuleContext;
    /**
     * 
     * @type {string}
     * @memberof CatalogRuntimesSearchMerchandizingRule
     */
    description?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CatalogRuntimesSearchMerchandizingRule
     */
    isPersonalizationEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CatalogRuntimesSearchMerchandizingRule
     */
    name?: string | null;
    /**
     * 
     * @type {SearchMerchandizingRuleImpact}
     * @memberof CatalogRuntimesSearchMerchandizingRule
     */
    ruleImpact?: SearchMerchandizingRuleImpact;
    /**
     * 
     * @type {Array<string>}
     * @memberof CatalogRuntimesSearchMerchandizingRule
     */
    tags?: Array<string> | null;
}
/**
 * 
 * @export
 * @interface CatalogRuntimesSearchMerchandizingRuleCondition
 */
export interface CatalogRuntimesSearchMerchandizingRuleCondition {
    /**
     * 
     * @type {Array<SearchMerchandizingRuleField>}
     * @memberof CatalogRuntimesSearchMerchandizingRuleCondition
     */
    fields?: Array<SearchMerchandizingRuleField> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof CatalogRuntimesSearchMerchandizingRuleCondition
     */
    terms?: Array<string> | null;
}
/**
 * SearchMerchandizingRule Condition
 * @export
 * @interface CatalogRuntimesSearchMerchandizingRuleContext
 */
export interface CatalogRuntimesSearchMerchandizingRuleContext {
    /**
     * 
     * @type {CatalogRuntimesSearchMerchandizingRuleCondition}
     * @memberof CatalogRuntimesSearchMerchandizingRuleContext
     */
    condition?: CatalogRuntimesSearchMerchandizingRuleCondition;
    /**
     * Defaults to MAXDATE
     * @type {string}
     * @memberof CatalogRuntimesSearchMerchandizingRuleContext
     */
    endDate?: string | null;
    /**
     * 
     * @type {SearchType}
     * @memberof CatalogRuntimesSearchMerchandizingRuleContext
     */
    searchType?: SearchType;
    /**
     * StartDate
     * @type {string}
     * @memberof CatalogRuntimesSearchMerchandizingRuleContext
     */
    startDate?: string | null;
}
/**
 * Spellcheck related results
 * @export
 * @interface CatalogRuntimesSpellcheck
 */
export interface CatalogRuntimesSpellcheck {
    /**
     * 
     * @type {boolean}
     * @memberof CatalogRuntimesSpellcheck
     */
    autoCorrected?: boolean | null;
    /**
     * 
     * @type {Array<CandidateCorrection>}
     * @memberof CatalogRuntimesSpellcheck
     */
    candidateCorrections?: Array<CandidateCorrection> | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogRuntimesSpellcheck
     */
    correctedQuery?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogRuntimesSpellcheck
     */
    originalQuery?: string | null;
}
/**
 * Name of the category and optionally, a description, page title, friendly URL, associated images, and any metadata.
 * @export
 * @interface CategoryContent
 */
export interface CategoryContent {
    /**
     * Images associated with the category.
     * @type {Array<CategoryImage>}
     * @memberof CategoryContent
     */
    categoryImages?: Array<CategoryImage> | null;
    /**
     * Description of the category as it appears on the storefront.
     * @type {string}
     * @memberof CategoryContent
     */
    description?: string | null;
    /**
     * Metadata description. Metadata can be used to manage information internally.
     * @type {string}
     * @memberof CategoryContent
     */
    metaTagDescription?: string | null;
    /**
     * Metadata keywords. Metadata can be used to manage information internally.
     * @type {string}
     * @memberof CategoryContent
     */
    metaTagKeywords?: string | null;
    /**
     * Metadata title. Metadata can be used to manage information internally.
     * @type {string}
     * @memberof CategoryContent
     */
    metaTagTitle?: string | null;
    /**
     * Name of the category as it appears on the storefront.
     * @type {string}
     * @memberof CategoryContent
     */
    name?: string | null;
    /**
     * Title that appears at the top of new pages.
     * @type {string}
     * @memberof CategoryContent
     */
    pageTitle?: string | null;
    /**
     * Human-readable identifier given to the category to create friendly URLs.
     * @type {string}
     * @memberof CategoryContent
     */
    slug?: string | null;
}
/**
 * Image or video associated with a category.
 * @export
 * @interface CategoryImage
 */
export interface CategoryImage {
    /**
     * Descriptive text associated with the image. Unicode data with a maximum length of 200 characters.
     * @type {string}
     * @memberof CategoryImage
     */
    altText?: string | null;
    /**
     * Id of the image in the CMS.
     * @type {string}
     * @memberof CategoryImage
     */
    cmsId?: string | null;
    /**
     * Image title.  Unicode data with a maximum length of 50 characters.
     * @type {string}
     * @memberof CategoryImage
     */
    imageLabel?: string | null;
    /**
     * Image URL. Unicode data with a maximum length of 4000 characters.
     * @type {string}
     * @memberof CategoryImage
     */
    imageUrl?: string | null;
    /**
     * Type of media. Used by the client to determine how to render the image or video or what have you.
     * @type {string}
     * @memberof CategoryImage
     */
    mediaType?: string | null;
    /**
     * For categories with multiple images, the sequence is the order in which this image appears. Whole number data. Required.
     * @type {number}
     * @memberof CategoryImage
     */
    sequence?: number | null;
    /**
     * URL of the video. Unicode data with a maximum length of 4000 characters.
     * @type {string}
     * @memberof CategoryImage
     */
    videoUrl?: string | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeMeasurement
 */
export interface CommerceRuntimeMeasurement {
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeMeasurement
     */
    unit?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeMeasurement
     */
    value?: number | null;
}
/**
 * Product as it is currently configured on the storefront. The configuration changes each time the shopper changes the product order.
 * @export
 * @interface ConfiguredProduct
 */
export interface ConfiguredProduct {
    /**
     * List of potential shipping discounts available for this product.
     * @type {Array<CatalogRuntimesDiscount>}
     * @memberof ConfiguredProduct
     */
    availableShippingDiscounts?: Array<CatalogRuntimesDiscount> | null;
    /**
     * Indicates the fulfillment types the product supports.
     * @type {Array<string>}
     * @memberof ConfiguredProduct
     */
    fulfillmentTypesSupported?: Array<string> | null;
    /**
     * 
     * @type {CatalogRuntimesProductInventoryInfo}
     * @memberof ConfiguredProduct
     */
    inventoryInfo?: CatalogRuntimesProductInventoryInfo;
    /**
     * 
     * @type {CatalogRuntimesPackageMeasurements}
     * @memberof ConfiguredProduct
     */
    measurements?: CatalogRuntimesPackageMeasurements;
    /**
     * Manufacturer part number.
     * @type {string}
     * @memberof ConfiguredProduct
     */
    mfgPartNumber?: string | null;
    /**
     * Remaining options and option values that can be selected given the shopper's current selection of options.
     * @type {Array<CatalogRuntimesProductOption>}
     * @memberof ConfiguredProduct
     */
    options?: Array<CatalogRuntimesProductOption> | null;
    /**
     * 
     * @type {CatalogRuntimesProductPrice}
     * @memberof ConfiguredProduct
     */
    price?: CatalogRuntimesProductPrice;
    /**
     * 
     * @type {CatalogRuntimesProductProperty}
     * @memberof ConfiguredProduct
     */
    priceListEntryTypeProperty?: CatalogRuntimesProductProperty;
    /**
     * 
     * @type {ProductPriceRange}
     * @memberof ConfiguredProduct
     */
    priceRange?: ProductPriceRange;
    /**
     * Merchant-created code associated with the product, for example, a SKU.
     * @type {string}
     * @memberof ConfiguredProduct
     */
    productCode?: string | null;
    /**
     * Images associated with the product.
     * @type {Array<ProductImage>}
     * @memberof ConfiguredProduct
     */
    productImages?: Array<ProductImage> | null;
    /**
     * Remaining options and option values that can be selected given the shopper's current selection of options.
     * @type {Array<CatalogRuntimesProductProperty>}
     * @memberof ConfiguredProduct
     */
    properties?: Array<CatalogRuntimesProductProperty> | null;
    /**
     * 
     * @type {ProductPurchasableState}
     * @memberof ConfiguredProduct
     */
    purchasableState?: ProductPurchasableState;
    /**
     * The location where the product is being purchased.. default is null. Products can have different prices
     * by purchaseLocation via custom priceListResolution....
     * @type {string}
     * @memberof ConfiguredProduct
     */
    purchaseLocation?: string | null;
    /**
     * UPC code of the product.
     * @type {string}
     * @memberof ConfiguredProduct
     */
    upc?: string | null;
    /**
     * For a product with options, the code of the product variation that represents the current selection of product options. 
     * Question: is this right?
     * @type {string}
     * @memberof ConfiguredProduct
     */
    variationProductCode?: string | null;
    /**
     * For products with bulk pricing... this will be populated with pricebands, depending on what options have been selected...
     * @type {Array<ProductVolumePrice>}
     * @memberof ConfiguredProduct
     */
    volumePriceBands?: Array<ProductVolumePrice> | null;
    /**
     * 
     * @type {ProductPriceRange}
     * @memberof ConfiguredProduct
     */
    volumePriceRange?: ProductPriceRange;
}
/**
 * Discount Selections
 * @export
 * @interface DiscountSelections
 */
export interface DiscountSelections {
    /**
     * Discount Ids
     * @type {Array<number>}
     * @memberof DiscountSelections
     */
    discountIds?: Array<number> | null;
}
/**
 * Provides a summary (more accurately it is a container) for valid discounts for potentially valid discounts for a product
 * @export
 * @interface DiscountValidationSummary
 */
export interface DiscountValidationSummary {
    /**
     * Applicable/Valid Discounts
     * @type {Array<CatalogRuntimesDiscount>}
     * @memberof DiscountValidationSummary
     */
    applicableDiscounts?: Array<CatalogRuntimesDiscount> | null;
}
/**
 * 
 * @export
 * @interface FacetValue
 */
export interface FacetValue {
    /**
     * When hierarchical Facet
     * @type {Array<FacetValue>}
     * @memberof FacetValue
     */
    childrenFacetValues?: Array<FacetValue> | null;
    /**
     * Number of occurrences of FacetValue in result set.
     * @type {number}
     * @memberof FacetValue
     */
    count?: number;
    /**
     * Submit this as a facet value filter
     * @type {string}
     * @memberof FacetValue
     */
    filterValue?: string | null;
    /**
     * True if this FacetValue was supplied as a facet value filter in the current search
     * @type {boolean}
     * @memberof FacetValue
     */
    isApplied?: boolean | null;
    /**
     * Indicates whether the FacetValue should be displayed
     * @type {boolean}
     * @memberof FacetValue
     */
    isDisplayed?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FacetValue
     */
    label?: string | null;
    /**
     * When hierarchical Facet
     * @type {string}
     * @memberof FacetValue
     */
    parentFacetValue?: string | null;
    /**
     * When range query Facet
     * @type {string}
     * @memberof FacetValue
     */
    rangeQueryValueEnd?: string | null;
    /**
     * When range query Facet
     * @type {string}
     * @memberof FacetValue
     */
    rangeQueryValueStart?: string | null;
    /**
     * String representation of Facet Value
     * @type {string}
     * @memberof FacetValue
     */
    value?: string | null;
}
/**
 * 
 * @export
 * @interface FieldValueBoost
 */
export interface FieldValueBoost {
    /**
     * 
     * @type {string}
     * @memberof FieldValueBoost
     */
    boostType?: string | null;
    /**
     * 
     * @type {Array<BoostField>}
     * @memberof FieldValueBoost
     */
    fields?: Array<BoostField> | null;
}
/**
 * This should follow the immutable DTO pattern
 * @export
 * @interface FindProductsPreviewParameters
 */
export interface FindProductsPreviewParameters {
    /**
     * 
     * @type {PreviewCampaignSettings}
     * @memberof FindProductsPreviewParameters
     */
    campaignSettings?: PreviewCampaignSettings;
    /**
     * 
     * @type {Array<string>}
     * @memberof FindProductsPreviewParameters
     */
    fieldList?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof FindProductsPreviewParameters
     */
    mid?: string | null;
    /**
     * 
     * @type {number}
     * @memberof FindProductsPreviewParameters
     */
    pageSize?: number | null;
    /**
     * 
     * @type {string}
     * @memberof FindProductsPreviewParameters
     */
    query?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FindProductsPreviewParameters
     */
    searchSettings?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FindProductsPreviewParameters
     */
    searchType?: string | null;
    /**
     * 
     * @type {number}
     * @memberof FindProductsPreviewParameters
     */
    startIndex?: number | null;
}
/**
 * Inventory for a product at a specific location
 * @export
 * @interface GranularInventoryField
 */
export interface GranularInventoryField {
    /**
     * Condition
     * @type {string}
     * @memberof GranularInventoryField
     */
    condition?: string | null;
    /**
     * Serial Number
     * @type {string}
     * @memberof GranularInventoryField
     */
    serialNumber?: string | null;
}
/**
 * The inventory for a product at a specific Location
 * @export
 * @interface LocationInventory
 */
export interface LocationInventory {
    /**
     * 
     * @type {string}
     * @memberof LocationInventory
     */
    bopisFulfillmentDate?: string | null;
    /**
     * 
     * @type {number}
     * @memberof LocationInventory
     */
    bopisProcessingTimeHours?: number | null;
    /**
     * 
     * @type {Array<CatalogRuntimesFutureInventory>}
     * @memberof LocationInventory
     */
    futureInventories?: Array<CatalogRuntimesFutureInventory> | null;
    /**
     * 
     * @type {boolean}
     * @memberof LocationInventory
     */
    infiniteInventory?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof LocationInventory
     */
    locationCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationInventory
     */
    mfgPartNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationInventory
     */
    productCode?: string | null;
    /**
     * 
     * @type {Array<SegmentedQuantity>}
     * @memberof LocationInventory
     */
    segmentedQuantities?: Array<SegmentedQuantity> | null;
    /**
     * 
     * @type {string}
     * @memberof LocationInventory
     */
    sku?: string | null;
    /**
     * 
     * @type {number}
     * @memberof LocationInventory
     */
    softStockAvailable?: number | null;
    /**
     * 
     * @type {string}
     * @memberof LocationInventory
     */
    sthFulfillmentDate?: string | null;
    /**
     * 
     * @type {number}
     * @memberof LocationInventory
     */
    sthProcessingTimeHours?: number | null;
    /**
     * 
     * @type {number}
     * @memberof LocationInventory
     */
    stockAvailable?: number | null;
    /**
     * 
     * @type {string}
     * @memberof LocationInventory
     */
    transferFulfillmentDate?: string | null;
    /**
     * 
     * @type {number}
     * @memberof LocationInventory
     */
    transferProcessingTimeHours?: number | null;
}
/**
 * 
 * @export
 * @interface LocationInventoryCollection
 */
export interface LocationInventoryCollection {
    /**
     * 
     * @type {Array<LocationInventory>}
     * @memberof LocationInventoryCollection
     */
    items?: Array<LocationInventory> | null;
    /**
     * 
     * @type {number}
     * @memberof LocationInventoryCollection
     */
    totalCount?: number;
}
/**
 * The inventory for a product at a specific Location
 * @export
 * @interface LocationInventoryQuery
 */
export interface LocationInventoryQuery {
    /**
     * 
     * @type {boolean}
     * @memberof LocationInventoryQuery
     * @deprecated
     */
    forceDefaultsForUnspecifiedTagCategories?: boolean;
    /**
     * 
     * @type {GranularInventoryField}
     * @memberof LocationInventoryQuery
     */
    granularInventoryFields?: GranularInventoryField;
    /**
     * 
     * @type {boolean}
     * @memberof LocationInventoryQuery
     */
    includeFutureInventory?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LocationInventoryQuery
     */
    includeInfiniteInventory?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LocationInventoryQuery
     */
    includeSegmentedInventory?: boolean;
    /**
     * 
     * @type {Array<CatalogRuntimesInventoryTag>}
     * @memberof LocationInventoryQuery
     */
    inventoryTags?: Array<CatalogRuntimesInventoryTag> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof LocationInventoryQuery
     */
    locationCodes?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof LocationInventoryQuery
     */
    productCodes?: Array<string> | null;
}
/**
 * 
 * @export
 * @interface PreviewCampaignSettings
 */
export interface PreviewCampaignSettings {
    /**
     * 
     * @type {string}
     * @memberof PreviewCampaignSettings
     */
    campaignEndDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PreviewCampaignSettings
     */
    campaignName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PreviewCampaignSettings
     */
    campaignStartDate?: string | null;
    /**
     * 
     * @type {CampaignListingSettings}
     * @memberof PreviewCampaignSettings
     */
    listingSettings?: CampaignListingSettings;
    /**
     * 
     * @type {CampaignProductSuggestSettings}
     * @memberof PreviewCampaignSettings
     */
    productSuggestSettings?: CampaignProductSuggestSettings;
    /**
     * 
     * @type {CampaignSiteSearchSettings}
     * @memberof PreviewCampaignSettings
     */
    siteSearchSettings?: CampaignSiteSearchSettings;
}
/**
 * 
 * @export
 * @interface PriceListNode
 */
export interface PriceListNode {
    /**
     * 
     * @type {number}
     * @memberof PriceListNode
     */
    parentPriceListId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PriceListNode
     */
    priceListCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PriceListNode
     */
    priceListId?: number;
    /**
     * 
     * @type {number}
     * @memberof PriceListNode
     */
    priceListLevel?: number;
}
/**
 * 
 * @export
 * @interface ProductBaseProductSearchResult
 */
export interface ProductBaseProductSearchResult {
    /**
     * 
     * @type {Array<CatalogRuntimesFacet>}
     * @memberof ProductBaseProductSearchResult
     */
    facets?: Array<CatalogRuntimesFacet> | null;
    /**
     * 
     * @type {Array<CatalogRuntimesProduct>}
     * @memberof ProductBaseProductSearchResult
     */
    items?: Array<CatalogRuntimesProduct> | null;
    /**
     * 
     * @type {string}
     * @memberof ProductBaseProductSearchResult
     */
    nextCursorMark?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ProductBaseProductSearchResult
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductBaseProductSearchResult
     */
    pageSize?: number;
    /**
     * 
     * @type {string}
     * @memberof ProductBaseProductSearchResult
     */
    searchEngine?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductBaseProductSearchResult
     */
    searchRedirect?: string | null;
    /**
     * 
     * @type {SolrDebugInfo}
     * @memberof ProductBaseProductSearchResult
     */
    solrDebugInfo?: SolrDebugInfo;
    /**
     * 
     * @type {CatalogRuntimesSpellcheck}
     * @memberof ProductBaseProductSearchResult
     */
    spellcheck?: CatalogRuntimesSpellcheck;
    /**
     * 
     * @type {number}
     * @memberof ProductBaseProductSearchResult
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductBaseProductSearchResult
     */
    totalCount?: number;
}
/**
 * List of products that belong to a product collection product.
 * @export
 * @interface ProductCollectionMember
 */
export interface ProductCollectionMember {
    /**
     * 
     * @type {CatalogRuntimesProductCollectionMemberKey}
     * @memberof ProductCollectionMember
     */
    memberKey?: CatalogRuntimesProductCollectionMemberKey;
}
/**
 * Name of the product and, if supplied, description, metatags, friendly URL, and associated images.
 * @export
 * @interface ProductContent
 */
export interface ProductContent {
    /**
     * Metadata description used to manage information internally.
     * @type {string}
     * @memberof ProductContent
     */
    metaTagDescription?: string | null;
    /**
     * Metadata keywords used to manage information internally.
     * @type {string}
     * @memberof ProductContent
     */
    metaTagKeywords?: string | null;
    /**
     * Metadata title used to manage information internally.
     * @type {string}
     * @memberof ProductContent
     */
    metaTagTitle?: string | null;
    /**
     * Detailed description of the product typically used for a product details page.
     * @type {string}
     * @memberof ProductContent
     */
    productFullDescription?: string | null;
    /**
     * Images associated with the product.
     * @type {Array<ProductImage>}
     * @memberof ProductContent
     */
    productImages?: Array<ProductImage> | null;
    /**
     * Name of the product.
     * @type {string}
     * @memberof ProductContent
     */
    productName?: string | null;
    /**
     * Brief description of the product typically used when the product is displayed in a list or search results.
     * @type {string}
     * @memberof ProductContent
     */
    productShortDescription?: string | null;
    /**
     * Human-readable identifier defined for the product to create friendly URLs.
     * @type {string}
     * @memberof ProductContent
     */
    seoFriendlyUrl?: string | null;
}
/**
 * 
 * @export
 * @interface ProductCostCollection
 */
export interface ProductCostCollection {
    /**
     * 
     * @type {Array<CatalogRuntimesProductCost>}
     * @memberof ProductCostCollection
     */
    items?: Array<CatalogRuntimesProductCost> | null;
    /**
     * 
     * @type {number}
     * @memberof ProductCostCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface ProductCostQuery
 */
export interface ProductCostQuery {
    /**
     * 
     * @type {Array<string>}
     * @memberof ProductCostQuery
     */
    productCodes?: Array<string> | null;
}
/**
 * 
 * @export
 * @interface ProductForIndexing
 */
export interface ProductForIndexing {
    /**
     * List of potential shipping discounts available for this product.
     * @type {Array<CatalogRuntimesDiscount>}
     * @memberof ProductForIndexing
     */
    availableShippingDiscounts?: Array<CatalogRuntimesDiscount> | null;
    /**
     * The list of Bundled products included in this product. This is only populated when ProductUsage=Bundle
     * @type {Array<CatalogRuntimesBundledProduct>}
     * @memberof ProductForIndexing
     */
    bundledProducts?: Array<CatalogRuntimesBundledProduct> | null;
    /**
     * 
     * @type {string}
     * @memberof ProductForIndexing
     */
    catalogEndDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductForIndexing
     */
    catalogStartDate?: string | null;
    /**
     * List of categories to which this product belongs.
     * @type {Array<CatalogRuntimesCategory>}
     * @memberof ProductForIndexing
     */
    categories?: Array<CatalogRuntimesCategory> | null;
    /**
     * Only used for indexing
     * @type {Array<ProductContent>}
     * @memberof ProductForIndexing
     */
    collectionMembersProductContent?: Array<ProductContent> | null;
    /**
     * 
     * @type {ProductContent}
     * @memberof ProductForIndexing
     */
    content?: ProductContent;
    /**
     * 
     * @type {number}
     * @memberof ProductForIndexing
     */
    costPriceMargin?: number | null;
    /**
     * When the product was created with the product admin resource.
     * @type {string}
     * @memberof ProductForIndexing
     */
    createDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductForIndexing
     */
    dateFirstAvailableInCatalog?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ProductForIndexing
     */
    daysAvailableInCatalog?: number | null;
    /**
     * Indicates the fulfillment types the product supports.
     * @type {Array<string>}
     * @memberof ProductForIndexing
     */
    fulfillmentTypesSupported?: Array<string> | null;
    /**
     * The GoodsType of the product (Physical, Digital, DigitalCredit....)
     * @type {string}
     * @memberof ProductForIndexing
     */
    goodsType?: string | null;
    /**
     * 
     * @type {CatalogRuntimesProductInventoryInfo}
     * @memberof ProductForIndexing
     */
    inventoryInfo?: CatalogRuntimesProductInventoryInfo;
    /**
     * If true, the product exists. If not, the product should not appear in search results.
     * @type {boolean}
     * @memberof ProductForIndexing
     */
    isActive?: boolean | null;
    /**
     * Is this product shipped in its own package
     * @type {boolean}
     * @memberof ProductForIndexing
     */
    isPackagedStandAlone?: boolean | null;
    /**
     * If true, the product can be purchased or fulfilled at regular intervals, for example, monthly billing or a subscription.
     * @type {boolean}
     * @memberof ProductForIndexing
     */
    isRecurring?: boolean;
    /**
     * If true, the product is subject to tax.
     * @type {boolean}
     * @memberof ProductForIndexing
     */
    isTaxable?: boolean;
    /**
     * Any location code (eq) or array of location codes which are in stock.
     * @type {Array<string>}
     * @memberof ProductForIndexing
     */
    locationsInStock?: Array<string> | null;
    /**
     * 
     * @type {CatalogRuntimesPackageMeasurements}
     * @memberof ProductForIndexing
     */
    measurements?: CatalogRuntimesPackageMeasurements;
    /**
     * Manufacturer part number.
     * @type {string}
     * @memberof ProductForIndexing
     */
    mfgPartNumber?: string | null;
    /**
     * Manufacturer part numbers (populated for configurable products).
     * @type {Array<string>}
     * @memberof ProductForIndexing
     */
    mfgPartNumbers?: Array<string> | null;
    /**
     * List of the product's configurable options and extras. 
     * Includes whether an option is configurable (for example, a T-shirt) or an Extra (for example, monogram or gift-wrapping).
     * @type {Array<CatalogRuntimesProductOption>}
     * @memberof ProductForIndexing
     */
    options?: Array<CatalogRuntimesProductOption> | null;
    /**
     * 
     * @type {number}
     * @memberof ProductForIndexing
     */
    personalizationScore?: number;
    /**
     * 
     * @type {CatalogRuntimesProductPrice}
     * @memberof ProductForIndexing
     */
    price?: CatalogRuntimesProductPrice;
    /**
     * 
     * @type {ProductPriceRange}
     * @memberof ProductForIndexing
     */
    priceRange?: ProductPriceRange;
    /**
     * 
     * @type {CatalogRuntimesProductPricingBehaviorInfo}
     * @memberof ProductForIndexing
     */
    pricingBehavior?: CatalogRuntimesProductPricingBehaviorInfo;
    /**
     * Merchant-created code associated with the product, for example, a SKU.
     * @type {string}
     * @memberof ProductForIndexing
     */
    productCode?: string | null;
    /**
     * list of member products that are part of the collection
     * This requires that the ProductUsage be set to Collection
     * @type {Array<ProductCollectionMember>}
     * @memberof ProductForIndexing
     */
    productCollectionMembers?: Array<ProductCollectionMember> | null;
    /**
     * List of product codes of product collections that this product is a member of.
     * @type {Array<CatalogRuntimesProductCollectionInfo>}
     * @memberof ProductForIndexing
     */
    productCollections?: Array<CatalogRuntimesProductCollectionInfo> | null;
    /**
     * List of the image groups this product uses.
     * Image groups are used to map different images to different product options.
     * If the product doesn't have options then all images will be in the default
     * image group.
     * @type {Array<CatalogRuntimesProductImageGroup>}
     * @memberof ProductForIndexing
     */
    productImageGroups?: Array<CatalogRuntimesProductImageGroup> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProductForIndexing
     */
    productRules?: Array<string> | null;
    /**
     * System generated monotonically increasing sequence
     * @type {number}
     * @memberof ProductForIndexing
     */
    productSequence?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ProductForIndexing
     */
    productType?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ProductForIndexing
     */
    productTypeId?: number | null;
    /**
     * The UsageType of this product (Standard, Configurable, Bundle, Component, Collection)
     * @type {string}
     * @memberof ProductForIndexing
     */
    productUsage?: string | null;
    /**
     * List of product properties. These are attributes that might apply to multiple products, for example, price, size, manufacturer. These attributes cannot be configured by the shopper.
     * @type {Array<CatalogRuntimesProductProperty>}
     * @memberof ProductForIndexing
     */
    properties?: Array<CatalogRuntimesProductProperty> | null;
    /**
     * Represents the published state of the product returned. Valid values for ValueType are defined in PublishStateConst.
     * @type {string}
     * @memberof ProductForIndexing
     */
    publishState?: string | null;
    /**
     * 
     * @type {ProductPurchasableState}
     * @memberof ProductForIndexing
     */
    purchasableState?: ProductPurchasableState;
    /**
     * The location where the product is being purchased.. default is null. Products can have different prices
     * by purchaseLocation via custom priceListResolution....
     * @type {string}
     * @memberof ProductForIndexing
     */
    purchaseLocation?: string | null;
    /**
     * The item's search engine relevancy score.
     * @type {number}
     * @memberof ProductForIndexing
     */
    score?: number;
    /**
     * Readonly value of the selected value of the option corresponding to the Mozu.ProductRuntime.Contracts.Product.SlicingAttributeFQN
     * @type {string}
     * @memberof ProductForIndexing
     */
    sliceValue?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductForIndexing
     */
    slicingAttributeFQN?: string | null;
    /**
     * UPC code of the products (populated for configurable products).
     * @type {Array<string>}
     * @memberof ProductForIndexing
     */
    upCs?: Array<string> | null;
    /**
     * UPC code of the product.
     * @type {string}
     * @memberof ProductForIndexing
     */
    upc?: string | null;
    /**
     * When the product was last modified with the product admin resource.
     * @type {string}
     * @memberof ProductForIndexing
     */
    updateDate?: string;
    /**
     * List of valid pricelists for the product
     * @type {Array<string>}
     * @memberof ProductForIndexing
     */
    validPriceLists?: Array<string> | null;
    /**
     * When a configurable product has IsPurchasable=true on a GetProduct, this property will be populated for submission to cart.
     * @type {string}
     * @memberof ProductForIndexing
     */
    variationProductCode?: string | null;
    /**
     * 
     * @type {Array<VariationSummary>}
     * @memberof ProductForIndexing
     */
    variations?: Array<VariationSummary> | null;
    /**
     * For products with bulk pricing... this will be populated with pricebands, depending on what options have been selected...
     * @type {Array<ProductVolumePrice>}
     * @memberof ProductForIndexing
     */
    volumePriceBands?: Array<ProductVolumePrice> | null;
    /**
     * 
     * @type {ProductPriceRange}
     * @memberof ProductForIndexing
     */
    volumePriceRange?: ProductPriceRange;
    /**
     * 
     * @type {Array<CatalogRuntimesProduct>}
     * @memberof ProductForIndexing
     */
    slices?: Array<CatalogRuntimesProduct> | null;
    /**
     * 
     * @type {Array<CatalogRuntimesProduct>}
     * @memberof ProductForIndexing
     */
    variationProducts?: Array<CatalogRuntimesProduct> | null;
}
/**
 * 
 * @export
 * @interface ProductForIndexingAllOf
 */
export interface ProductForIndexingAllOf {
    /**
     * 
     * @type {Array<CatalogRuntimesProduct>}
     * @memberof ProductForIndexingAllOf
     */
    slices?: Array<CatalogRuntimesProduct> | null;
    /**
     * 
     * @type {Array<CatalogRuntimesProduct>}
     * @memberof ProductForIndexingAllOf
     */
    variationProducts?: Array<CatalogRuntimesProduct> | null;
}
/**
 * Image or video associated with a product.
 * @export
 * @interface ProductImage
 */
export interface ProductImage {
    /**
     * Descriptive text associated with the image. Unicode data with a maximum length of 200 characters.
     * @type {string}
     * @memberof ProductImage
     */
    altText?: string | null;
    /**
     * Id of the image in the CMS.
     * @type {string}
     * @memberof ProductImage
     */
    cmsId?: string | null;
    /**
     * Image title.  Unicode data with a maximum length of 50 characters.
     * @type {string}
     * @memberof ProductImage
     */
    imageLabel?: string | null;
    /**
     * Image URL. Unicode data with a maximum length of 4000 characters.
     * @type {string}
     * @memberof ProductImage
     */
    imageUrl?: string | null;
    /**
     * Type of media. Used by the client to determine how to render the image or video or what have you.
     * @type {string}
     * @memberof ProductImage
     */
    mediaType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductImage
     */
    productImageGroupId?: string | null;
    /**
     * For products with multiple images, the sequence is the order in which this image appears. Whole number data. Required.
     * @type {number}
     * @memberof ProductImage
     */
    sequence?: number | null;
    /**
     * URL of the video. Unicode data with a maximum length of 4000 characters.
     * @type {string}
     * @memberof ProductImage
     */
    videoUrl?: string | null;
}
/**
 * Name of the option that has been selected, and, if this is a stand-alone option, the value that the shopper entered.
 * @export
 * @interface ProductOptionSelection
 */
export interface ProductOptionSelection {
    /**
     * Fully Qualified Name of the selected option's attribute
     * @type {string}
     * @memberof ProductOptionSelection
     */
    attributeFQN?: string | null;
    /**
     * The unique ValueId of the Attribute (this can be sent as an alternative the to the AttributeFqn and Value)
     * @type {number}
     * @memberof ProductOptionSelection
     */
    attributeValueId?: number | null;
    /**
     * Value that shopper entered if this is an Extra of VaolueType ShopperEntered.  This allows shopper data entry (such as the shopper's initials).
     * @type {any}
     * @memberof ProductOptionSelection
     */
    shopperEnteredValue?: any | null;
    /**
     * Value of the selected option
     * @type {any}
     * @memberof ProductOptionSelection
     */
    value?: any | null;
}
/**
 * If the product has configurable options, the current state of the shopper's selections.
 * @export
 * @interface ProductOptionSelections
 */
export interface ProductOptionSelections {
    /**
     * List of the product options that the shopper has currently selected.
     * @type {Array<ProductOptionSelection>}
     * @memberof ProductOptionSelections
     */
    options?: Array<ProductOptionSelection> | null;
    /**
     * For a product with options, the code of the product variation that represents the current selection of product options.
     * @type {string}
     * @memberof ProductOptionSelections
     */
    variationProductCode?: string | null;
}
/**
 * For products with options that vary the cost of the product, the range between lowest and highest possible price of the product based on the current selection of options.
 * @export
 * @interface ProductPriceRange
 */
export interface ProductPriceRange {
    /**
     * 
     * @type {CatalogRuntimesProductPrice}
     * @memberof ProductPriceRange
     */
    lower?: CatalogRuntimesProductPrice;
    /**
     * 
     * @type {CatalogRuntimesProductPrice}
     * @memberof ProductPriceRange
     */
    upper?: CatalogRuntimesProductPrice;
}
/**
 * Current state of the product purchase, that is, whether it is ready to be purchased. For products with configurable options,     /// the product is purchaseable if the shopper has selected all required options. If not, a message lists which required options are missing.
 * @export
 * @interface ProductPurchasableState
 */
export interface ProductPurchasableState {
    /**
     * If true, this product is currently available for purchase. For products with options, this is false until the shopper selects all required options.
     * @type {boolean}
     * @memberof ProductPurchasableState
     */
    isPurchasable?: boolean;
    /**
     * Message associated with this product if it is not ready to be purchased. For products with options, message contains which required options are missing.
     * @type {Array<ValidationMessage>}
     * @memberof ProductPurchasableState
     */
    messages?: Array<ValidationMessage> | null;
}
/**
 * Products and search information returned for search preview query.
 * @export
 * @interface ProductSearchPreviewResult
 */
export interface ProductSearchPreviewResult {
    /**
     * 
     * @type {Array<CatalogRuntimesFacet>}
     * @memberof ProductSearchPreviewResult
     */
    facets?: Array<CatalogRuntimesFacet> | null;
    /**
     * 
     * @type {Array<CatalogRuntimesProduct>}
     * @memberof ProductSearchPreviewResult
     */
    items?: Array<CatalogRuntimesProduct> | null;
    /**
     * 
     * @type {string}
     * @memberof ProductSearchPreviewResult
     */
    nextCursorMark?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ProductSearchPreviewResult
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductSearchPreviewResult
     */
    pageSize?: number;
    /**
     * 
     * @type {string}
     * @memberof ProductSearchPreviewResult
     */
    searchEngine?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductSearchPreviewResult
     */
    searchRedirect?: string | null;
    /**
     * 
     * @type {SolrDebugInfo}
     * @memberof ProductSearchPreviewResult
     */
    solrDebugInfo?: SolrDebugInfo;
    /**
     * 
     * @type {CatalogRuntimesSpellcheck}
     * @memberof ProductSearchPreviewResult
     */
    spellcheck?: CatalogRuntimesSpellcheck;
    /**
     * 
     * @type {number}
     * @memberof ProductSearchPreviewResult
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductSearchPreviewResult
     */
    totalCount?: number;
}
/**
 * A calculated set of cursor marks for a given query that can be accessed in any order, providing the ability to page through all results in random/paralellized order
 * @export
 * @interface ProductSearchRandomAccessCursor
 */
export interface ProductSearchRandomAccessCursor {
    /**
     * The list of cursor marks for the query. Provide a given cursor mark to the product search or getProducts cursorMark parameter to retrieve the associated products
     * @type {Array<string>}
     * @memberof ProductSearchRandomAccessCursor
     */
    cursorMarks?: Array<string> | null;
}
/**
 * Products and facets returned from search criteria supplied in a ProductSearch query.
 * @export
 * @interface ProductSearchResult
 */
export interface ProductSearchResult {
    /**
     * 
     * @type {Array<CatalogRuntimesFacet>}
     * @memberof ProductSearchResult
     */
    facets?: Array<CatalogRuntimesFacet> | null;
    /**
     * 
     * @type {Array<CatalogRuntimesProduct>}
     * @memberof ProductSearchResult
     */
    items?: Array<CatalogRuntimesProduct> | null;
    /**
     * 
     * @type {string}
     * @memberof ProductSearchResult
     */
    nextCursorMark?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ProductSearchResult
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductSearchResult
     */
    pageSize?: number;
    /**
     * 
     * @type {string}
     * @memberof ProductSearchResult
     */
    searchEngine?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductSearchResult
     */
    searchRedirect?: string | null;
    /**
     * 
     * @type {SolrDebugInfo}
     * @memberof ProductSearchResult
     */
    solrDebugInfo?: SolrDebugInfo;
    /**
     * 
     * @type {CatalogRuntimesSpellcheck}
     * @memberof ProductSearchResult
     */
    spellcheck?: CatalogRuntimesSpellcheck;
    /**
     * 
     * @type {number}
     * @memberof ProductSearchResult
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductSearchResult
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface ProductSearchSimplifiedResult
 */
export interface ProductSearchSimplifiedResult {
    /**
     * 
     * @type {Array<CatalogRuntimesFacet>}
     * @memberof ProductSearchSimplifiedResult
     */
    facets?: Array<CatalogRuntimesFacet> | null;
    /**
     * 
     * @type {Array<{ [key: string]: any; }>}
     * @memberof ProductSearchSimplifiedResult
     */
    items?: Array<{ [key: string]: any; }> | null;
    /**
     * 
     * @type {string}
     * @memberof ProductSearchSimplifiedResult
     */
    nextCursorMark?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ProductSearchSimplifiedResult
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductSearchSimplifiedResult
     */
    pageSize?: number;
    /**
     * 
     * @type {string}
     * @memberof ProductSearchSimplifiedResult
     */
    searchRedirect?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ProductSearchSimplifiedResult
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductSearchSimplifiedResult
     */
    totalCount?: number;
}
/**
 * Collection used for product substitutions
 * @export
 * @interface ProductSubstituteCollection
 */
export interface ProductSubstituteCollection {
    /**
     * Indicates if a product allows automatic substitutions
     * @type {boolean}
     * @memberof ProductSubstituteCollection
     */
    allowAutoSubstitutions?: boolean;
    /**
     * 
     * @type {Array<ProductSubstitution>}
     * @memberof ProductSubstituteCollection
     */
    items?: Array<ProductSubstitution> | null;
    /**
     * 
     * @type {number}
     * @memberof ProductSubstituteCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface ProductSubstitution
 */
export interface ProductSubstitution {
    /**
     * When a configurable product has IsPurchasable=true on a GetProduct, this property will be populated for submission to cart.
     * @type {string}
     * @memberof ProductSubstitution
     */
    baseProductCode?: string | null;
    /**
     * The list of Bundled products included in this product. This is only populated when ProductUsage=Bundle
     * @type {Array<CatalogRuntimesBundledProduct>}
     * @memberof ProductSubstitution
     */
    bundledProducts?: Array<CatalogRuntimesBundledProduct> | null;
    /**
     * Manufacturer part number.
     * @type {string}
     * @memberof ProductSubstitution
     */
    mfgPartNumber?: string | null;
    /**
     * 
     * @type {CatalogRuntimesProductPrice}
     * @memberof ProductSubstitution
     */
    price?: CatalogRuntimesProductPrice;
    /**
     * Merchant-created code associated with the product, for example, a SKU.
     * @type {string}
     * @memberof ProductSubstitution
     */
    productCode?: string | null;
    /**
     * 
     * @type {Array<ProductImage>}
     * @memberof ProductSubstitution
     */
    productImages?: Array<ProductImage> | null;
    /**
     * 
     * @type {string}
     * @memberof ProductSubstitution
     */
    productName?: string | null;
    /**
     * The UsageType of this product (Standard, Configurable, Bundle, Component, Collection)
     * @type {string}
     * @memberof ProductSubstitution
     */
    productUsage?: string | null;
    /**
     * UPC code of the products (populated for configurable products).
     * @type {string}
     * @memberof ProductSubstitution
     */
    upc?: string | null;
}
/**
 * 
 * @export
 * @interface ProductValidationSummary
 */
export interface ProductValidationSummary {
    /**
     * The list of Bundled products included in this product. This is only populated when ProductUsage=Bundle
     * @type {Array<BundledProductSummary>}
     * @memberof ProductValidationSummary
     */
    bundledProducts?: Array<BundledProductSummary> | null;
    /**
     * Categories to which the product belongs.
     * @type {Array<CatalogRuntimesCategory>}
     * @memberof ProductValidationSummary
     */
    categories?: Array<CatalogRuntimesCategory> | null;
    /**
     * Indicates the fulfillment types the product supports.
     * @type {Array<string>}
     * @memberof ProductValidationSummary
     */
    fulfillmentTypesSupported?: Array<string> | null;
    /**
     * The GoodsType of the product (Physical, Digital, DigitalCredit....)
     * @type {string}
     * @memberof ProductValidationSummary
     */
    goodsType?: string | null;
    /**
     * 
     * @type {ProductImage}
     * @memberof ProductValidationSummary
     */
    image?: ProductImage;
    /**
     * 
     * @type {CatalogRuntimesProductInventoryInfo}
     * @memberof ProductValidationSummary
     */
    inventoryInfo?: CatalogRuntimesProductInventoryInfo;
    /**
     * Is this product shipped in its own package
     * @type {boolean}
     * @memberof ProductValidationSummary
     */
    isPackagedStandAlone?: boolean | null;
    /**
     * If true, the product listed on the live order is subject to tax.
     * @type {boolean}
     * @memberof ProductValidationSummary
     */
    isTaxable?: boolean;
    /**
     * 
     * @type {CatalogRuntimesPackageMeasurements}
     * @memberof ProductValidationSummary
     */
    measurements?: CatalogRuntimesPackageMeasurements;
    /**
     * Manufacturer part number.
     * @type {string}
     * @memberof ProductValidationSummary
     */
    mfgPartNumber?: string | null;
    /**
     * 
     * @type {CatalogRuntimesProductPrice}
     * @memberof ProductValidationSummary
     */
    price?: CatalogRuntimesProductPrice;
    /**
     * 
     * @type {CatalogRuntimesProductPricingBehaviorInfo}
     * @memberof ProductValidationSummary
     */
    pricingBehavior?: CatalogRuntimesProductPricingBehaviorInfo;
    /**
     * Merchant-created code associated with the product, for example, a SKU.
     * @type {string}
     * @memberof ProductValidationSummary
     */
    productCode?: string | null;
    /**
     * Name of the product.
     * @type {string}
     * @memberof ProductValidationSummary
     */
    productName?: string | null;
    /**
     * Brief description of the product typically used when the product is displayed in a list or search results.
     * @type {string}
     * @memberof ProductValidationSummary
     */
    productShortDescription?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductValidationSummary
     */
    productType?: string | null;
    /**
     * The UsageType of this product (Standard, Configurable, Bundle, Component)
     * @type {string}
     * @memberof ProductValidationSummary
     */
    productUsage?: string | null;
    /**
     * List of product Properties.
     * @type {Array<CatalogRuntimesProductProperty>}
     * @memberof ProductValidationSummary
     */
    properties?: Array<CatalogRuntimesProductProperty> | null;
    /**
     * 
     * @type {ProductPurchasableState}
     * @memberof ProductValidationSummary
     */
    purchasableState?: ProductPurchasableState;
    /**
     * The location where the product is being purchased.. default is null. Products can have different prices
     * by purchaseLocation via custom priceListResolution....
     * @type {string}
     * @memberof ProductValidationSummary
     */
    purchaseLocation?: string | null;
    /**
     * UPC code of the product.
     * @type {string}
     * @memberof ProductValidationSummary
     */
    upc?: string | null;
    /**
     * For a product with options, the code of the product variation that represents the current selection of product options.
     * @type {string}
     * @memberof ProductValidationSummary
     */
    variationProductCode?: string | null;
}
/**
 * 
 * @export
 * @interface ProductVolumePrice
 */
export interface ProductVolumePrice {
    /**
     * 
     * @type {boolean}
     * @memberof ProductVolumePrice
     */
    isCurrent?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ProductVolumePrice
     */
    maxQty?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ProductVolumePrice
     */
    minQty?: number;
    /**
     * 
     * @type {CatalogRuntimesProductPrice}
     * @memberof ProductVolumePrice
     */
    price?: CatalogRuntimesProductPrice;
    /**
     * 
     * @type {ProductPriceRange}
     * @memberof ProductVolumePrice
     */
    priceRange?: ProductPriceRange;
}
/**
 * Request parameters for evaluating purchase limit
 * @export
 * @interface PurchaseLimitEvalRequest
 */
export interface PurchaseLimitEvalRequest {
    /**
     * Customer ID
     * @type {number}
     * @memberof PurchaseLimitEvalRequest
     */
    customerId: number;
    /**
     * List of items to evaluate
     * @type {Array<PurchaseLimitEvalRequestItems>}
     * @memberof PurchaseLimitEvalRequest
     */
    items: Array<PurchaseLimitEvalRequestItems> | null;
}
/**
 * Items for purchase limit rule evaluation request
 * @export
 * @interface PurchaseLimitEvalRequestItems
 */
export interface PurchaseLimitEvalRequestItems {
    /**
     * Product code for evaluation
     * @type {string}
     * @memberof PurchaseLimitEvalRequestItems
     */
    productCode?: string | null;
    /**
     * Variation product code for evaluation
     * @type {string}
     * @memberof PurchaseLimitEvalRequestItems
     */
    variationProductCode?: string | null;
}
/**
 * Collection of purchase limit evaluation response items
 * @export
 * @interface PurchaseLimitEvalResponseCollection
 */
export interface PurchaseLimitEvalResponseCollection {
    /**
     * 
     * @type {Array<PurchaseLimitEvalResponseItem>}
     * @memberof PurchaseLimitEvalResponseCollection
     */
    items?: Array<PurchaseLimitEvalResponseItem> | null;
    /**
     * 
     * @type {number}
     * @memberof PurchaseLimitEvalResponseCollection
     */
    totalCount?: number;
}
/**
 * Purchase limit evaluation response item
 * @export
 * @interface PurchaseLimitEvalResponseItem
 */
export interface PurchaseLimitEvalResponseItem {
    /**
     * Maximum quantity of the product that can be purchased
     * @type {number}
     * @memberof PurchaseLimitEvalResponseItem
     */
    maxQty?: number | null;
    /**
     * Product code evaluated for purchase limit
     * @type {string}
     * @memberof PurchaseLimitEvalResponseItem
     */
    productCode?: string | null;
    /**
     * Rule code that affected the purchase limit for the product
     * @type {string}
     * @memberof PurchaseLimitEvalResponseItem
     */
    ruleCode?: string | null;
    /**
     * Variation product code evaluated for purchase limit
     * @type {string}
     * @memberof PurchaseLimitEvalResponseItem
     */
    variationProductCode?: string | null;
}
/**
 * 
 * @export
 * @interface RequestFilter
 */
export interface RequestFilter {
    /**
     * 
     * @type {string}
     * @memberof RequestFilter
     */
    name?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof RequestFilter
     */
    values?: Array<string> | null;
}
/**
 * 
 * @export
 * @interface ResolvedPriceList
 */
export interface ResolvedPriceList {
    /**
     * 
     * @type {string}
     * @memberof ResolvedPriceList
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ResolvedPriceList
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ResolvedPriceList
     */
    priceListCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ResolvedPriceList
     */
    priceListId?: number;
}
/**
 * Request parameters for evaluating returns
 * @export
 * @interface ReturnEvalRequest
 */
export interface ReturnEvalRequest {
    /**
     * Customer ID
     * @type {number}
     * @memberof ReturnEvalRequest
     */
    customerId: number;
    /**
     * List of items to evaluate
     * @type {Array<ReturnEvalRequestItems>}
     * @memberof ReturnEvalRequest
     */
    items: Array<ReturnEvalRequestItems> | null;
}
/**
 * Items for return rule evaluation request
 * @export
 * @interface ReturnEvalRequestItems
 */
export interface ReturnEvalRequestItems {
    /**
     * Product code for evaluation
     * @type {string}
     * @memberof ReturnEvalRequestItems
     */
    productCode?: string | null;
    /**
     * Variation product code for evaluation
     * @type {string}
     * @memberof ReturnEvalRequestItems
     */
    variationProductCode?: string | null;
}
/**
 * Collection of return evaluation response items
 * @export
 * @interface ReturnEvalResponseCollection
 */
export interface ReturnEvalResponseCollection {
    /**
     * 
     * @type {Array<ReturnEvalResponseItem>}
     * @memberof ReturnEvalResponseCollection
     */
    items?: Array<ReturnEvalResponseItem> | null;
    /**
     * 
     * @type {number}
     * @memberof ReturnEvalResponseCollection
     */
    totalCount?: number;
}
/**
 * Return evaluation response item
 * @export
 * @interface ReturnEvalResponseItem
 */
export interface ReturnEvalResponseItem {
    /**
     * Flag indicating whether the product can be returned
     * @type {boolean}
     * @memberof ReturnEvalResponseItem
     */
    isReturnable?: boolean | null;
    /**
     * Maximum number of days that the product can be returned
     * @type {number}
     * @memberof ReturnEvalResponseItem
     */
    maxDays?: number | null;
    /**
     * Maximum quantity of the product that can be returned
     * @type {number}
     * @memberof ReturnEvalResponseItem
     */
    maxQty?: number | null;
    /**
     * Product code evaluated for return
     * @type {string}
     * @memberof ReturnEvalResponseItem
     */
    productCode?: string | null;
    /**
     * Return rule code that affected the return for the product
     * @type {string}
     * @memberof ReturnEvalResponseItem
     */
    ruleCode?: string | null;
    /**
     * Variation product code for evaluation
     * @type {string}
     * @memberof ReturnEvalResponseItem
     */
    variationProductCode?: string | null;
}
/**
 * Request parameters for evaluating purchase limit
 * @export
 * @interface SafetyStockEvalRequest
 */
export interface SafetyStockEvalRequest {
    /**
     * List of items to evaluate
     * @type {string}
     * @memberof SafetyStockEvalRequest
     */
    locationCode: string | null;
    /**
     * Customer ID
     * @type {string}
     * @memberof SafetyStockEvalRequest
     */
    productCode: string | null;
}
/**
 * 
 * @export
 * @interface SafetyStockEvalResponse
 */
export interface SafetyStockEvalResponse {
    /**
     * List of items to evaluate
     * @type {string}
     * @memberof SafetyStockEvalResponse
     */
    locationCode: string | null;
    /**
     * Customer ID
     * @type {string}
     * @memberof SafetyStockEvalResponse
     */
    productCode: string | null;
    /**
     * List of items to evaluate
     * @type {number}
     * @memberof SafetyStockEvalResponse
     */
    quantity?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SafetyStockEvalResponse
     */
    rank?: number | null;
    /**
     * List of items to evaluate
     * @type {string}
     * @memberof SafetyStockEvalResponse
     */
    ruleCode?: string | null;
}
/**
 * 
 * @export
 * @interface SearchMerchandizingBoostField
 */
export interface SearchMerchandizingBoostField {
    /**
     * 
     * @type {string}
     * @memberof SearchMerchandizingBoostField
     */
    fieldName?: string | null;
    /**
     * 
     * @type {Array<SearchMerchandizingBoostValueExpression>}
     * @memberof SearchMerchandizingBoostField
     */
    valueExpressions?: Array<SearchMerchandizingBoostValueExpression> | null;
}

/**
 * 
 * @export
 */
export const SearchMerchandizingBoostType = {
    NUMBER_1: 1
} as const;
export type SearchMerchandizingBoostType = typeof SearchMerchandizingBoostType[keyof typeof SearchMerchandizingBoostType];

/**
 * 
 * @export
 * @interface SearchMerchandizingBoostValueExpression
 */
export interface SearchMerchandizingBoostValueExpression {
    /**
     * 
     * @type {number}
     * @memberof SearchMerchandizingBoostValueExpression
     */
    boostNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof SearchMerchandizingBoostValueExpression
     */
    operator?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SearchMerchandizingBoostValueExpression
     */
    value?: string | null;
}
/**
 * 
 * @export
 * @interface SearchMerchandizingFieldValueBoost
 */
export interface SearchMerchandizingFieldValueBoost {
    /**
     * 
     * @type {SearchMerchandizingBoostType}
     * @memberof SearchMerchandizingFieldValueBoost
     */
    boostType?: SearchMerchandizingBoostType;
    /**
     * 
     * @type {Array<SearchMerchandizingBoostField>}
     * @memberof SearchMerchandizingFieldValueBoost
     */
    fields?: Array<SearchMerchandizingBoostField> | null;
}
/**
 * 
 * @export
 * @interface SearchMerchandizingFilter
 */
export interface SearchMerchandizingFilter {
    /**
     * 
     * @type {string}
     * @memberof SearchMerchandizingFilter
     */
    exclusion?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SearchMerchandizingFilter
     */
    inclusion?: string | null;
}
/**
 * 
 * @export
 * @interface SearchMerchandizingImpactItem
 */
export interface SearchMerchandizingImpactItem {
    /**
     * 
     * @type {boolean}
     * @memberof SearchMerchandizingImpactItem
     */
    isPinned?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SearchMerchandizingImpactItem
     */
    position?: number;
    /**
     * 
     * @type {string}
     * @memberof SearchMerchandizingImpactItem
     */
    productCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SearchMerchandizingImpactItem
     */
    sliceValue?: string | null;
}
/**
 * 
 * @export
 * @interface SearchMerchandizingRuleField
 */
export interface SearchMerchandizingRuleField {
    /**
     * 
     * @type {string}
     * @memberof SearchMerchandizingRuleField
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SearchMerchandizingRuleField
     */
    value?: string | null;
}
/**
 * SearchMerchandizingRule Condition
 * @export
 * @interface SearchMerchandizingRuleImpact
 */
export interface SearchMerchandizingRuleImpact {
    /**
     * 
     * @type {Array<SearchMerchandizingImpactItem>}
     * @memberof SearchMerchandizingRuleImpact
     */
    buriedItems?: Array<SearchMerchandizingImpactItem> | null;
    /**
     * 
     * @type {Array<SearchMerchandizingImpactItem>}
     * @memberof SearchMerchandizingRuleImpact
     */
    excludedItems?: Array<SearchMerchandizingImpactItem> | null;
    /**
     * 
     * @type {SearchMerchandizingFieldValueBoost}
     * @memberof SearchMerchandizingRuleImpact
     */
    fieldValueBoost?: SearchMerchandizingFieldValueBoost;
    /**
     * 
     * @type {SearchMerchandizingFilter}
     * @memberof SearchMerchandizingRuleImpact
     */
    filter?: SearchMerchandizingFilter;
    /**
     * 
     * @type {Array<SearchMerchandizingImpactItem>}
     * @memberof SearchMerchandizingRuleImpact
     */
    rankedItems?: Array<SearchMerchandizingImpactItem> | null;
    /**
     * 
     * @type {Array<SearchMerchandizingSortField>}
     * @memberof SearchMerchandizingRuleImpact
     */
    sortFields?: Array<SearchMerchandizingSortField> | null;
}
/**
 * 
 * @export
 * @interface SearchMerchandizingRuleParameters
 */
export interface SearchMerchandizingRuleParameters {
    /**
     * 
     * @type {string}
     * @memberof SearchMerchandizingRuleParameters
     */
    categoryCode?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof SearchMerchandizingRuleParameters
     */
    collapse?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof SearchMerchandizingRuleParameters
     */
    pageSize?: number | null;
    /**
     * User specific personalization ID.
     * For Monetate users (AKA MID), it follows this format 2.x.y, where x and y are integers
     * @type {string}
     * @memberof SearchMerchandizingRuleParameters
     */
    personalizationUserId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SearchMerchandizingRuleParameters
     */
    query?: string | null;
    /**
     * 
     * @type {CatalogRuntimesSearchMerchandizingRule}
     * @memberof SearchMerchandizingRuleParameters
     */
    searchMerchandizingRule?: CatalogRuntimesSearchMerchandizingRule;
    /**
     * 
     * @type {number}
     * @memberof SearchMerchandizingRuleParameters
     */
    startIndex?: number | null;
}
/**
 * The additional properties is only relevant when the preview endpoint is used
 * @export
 * @interface SearchMerchandizingRuleProduct
 */
export interface SearchMerchandizingRuleProduct {
    /**
     * List of potential shipping discounts available for this product.
     * @type {Array<CatalogRuntimesDiscount>}
     * @memberof SearchMerchandizingRuleProduct
     */
    availableShippingDiscounts?: Array<CatalogRuntimesDiscount> | null;
    /**
     * The list of Bundled products included in this product. This is only populated when ProductUsage=Bundle
     * @type {Array<CatalogRuntimesBundledProduct>}
     * @memberof SearchMerchandizingRuleProduct
     */
    bundledProducts?: Array<CatalogRuntimesBundledProduct> | null;
    /**
     * 
     * @type {string}
     * @memberof SearchMerchandizingRuleProduct
     */
    catalogEndDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SearchMerchandizingRuleProduct
     */
    catalogStartDate?: string | null;
    /**
     * List of categories to which this product belongs.
     * @type {Array<CatalogRuntimesCategory>}
     * @memberof SearchMerchandizingRuleProduct
     */
    categories?: Array<CatalogRuntimesCategory> | null;
    /**
     * Only used for indexing
     * @type {Array<ProductContent>}
     * @memberof SearchMerchandizingRuleProduct
     */
    collectionMembersProductContent?: Array<ProductContent> | null;
    /**
     * 
     * @type {ProductContent}
     * @memberof SearchMerchandizingRuleProduct
     */
    content?: ProductContent;
    /**
     * 
     * @type {number}
     * @memberof SearchMerchandizingRuleProduct
     */
    costPriceMargin?: number | null;
    /**
     * When the product was created with the product admin resource.
     * @type {string}
     * @memberof SearchMerchandizingRuleProduct
     */
    createDate?: string;
    /**
     * 
     * @type {string}
     * @memberof SearchMerchandizingRuleProduct
     */
    dateFirstAvailableInCatalog?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SearchMerchandizingRuleProduct
     */
    daysAvailableInCatalog?: number | null;
    /**
     * Indicates the fulfillment types the product supports.
     * @type {Array<string>}
     * @memberof SearchMerchandizingRuleProduct
     */
    fulfillmentTypesSupported?: Array<string> | null;
    /**
     * The GoodsType of the product (Physical, Digital, DigitalCredit....)
     * @type {string}
     * @memberof SearchMerchandizingRuleProduct
     */
    goodsType?: string | null;
    /**
     * 
     * @type {CatalogRuntimesProductInventoryInfo}
     * @memberof SearchMerchandizingRuleProduct
     */
    inventoryInfo?: CatalogRuntimesProductInventoryInfo;
    /**
     * If true, the product exists. If not, the product should not appear in search results.
     * @type {boolean}
     * @memberof SearchMerchandizingRuleProduct
     */
    isActive?: boolean | null;
    /**
     * Is this product shipped in its own package
     * @type {boolean}
     * @memberof SearchMerchandizingRuleProduct
     */
    isPackagedStandAlone?: boolean | null;
    /**
     * If true, the product can be purchased or fulfilled at regular intervals, for example, monthly billing or a subscription.
     * @type {boolean}
     * @memberof SearchMerchandizingRuleProduct
     */
    isRecurring?: boolean;
    /**
     * If true, the product is subject to tax.
     * @type {boolean}
     * @memberof SearchMerchandizingRuleProduct
     */
    isTaxable?: boolean;
    /**
     * Any location code (eq) or array of location codes which are in stock.
     * @type {Array<string>}
     * @memberof SearchMerchandizingRuleProduct
     */
    locationsInStock?: Array<string> | null;
    /**
     * 
     * @type {CatalogRuntimesPackageMeasurements}
     * @memberof SearchMerchandizingRuleProduct
     */
    measurements?: CatalogRuntimesPackageMeasurements;
    /**
     * Manufacturer part number.
     * @type {string}
     * @memberof SearchMerchandizingRuleProduct
     */
    mfgPartNumber?: string | null;
    /**
     * Manufacturer part numbers (populated for configurable products).
     * @type {Array<string>}
     * @memberof SearchMerchandizingRuleProduct
     */
    mfgPartNumbers?: Array<string> | null;
    /**
     * List of the product's configurable options and extras. 
     * Includes whether an option is configurable (for example, a T-shirt) or an Extra (for example, monogram or gift-wrapping).
     * @type {Array<CatalogRuntimesProductOption>}
     * @memberof SearchMerchandizingRuleProduct
     */
    options?: Array<CatalogRuntimesProductOption> | null;
    /**
     * 
     * @type {number}
     * @memberof SearchMerchandizingRuleProduct
     */
    personalizationScore?: number;
    /**
     * 
     * @type {CatalogRuntimesProductPrice}
     * @memberof SearchMerchandizingRuleProduct
     */
    price?: CatalogRuntimesProductPrice;
    /**
     * 
     * @type {ProductPriceRange}
     * @memberof SearchMerchandizingRuleProduct
     */
    priceRange?: ProductPriceRange;
    /**
     * 
     * @type {CatalogRuntimesProductPricingBehaviorInfo}
     * @memberof SearchMerchandizingRuleProduct
     */
    pricingBehavior?: CatalogRuntimesProductPricingBehaviorInfo;
    /**
     * Merchant-created code associated with the product, for example, a SKU.
     * @type {string}
     * @memberof SearchMerchandizingRuleProduct
     */
    productCode?: string | null;
    /**
     * list of member products that are part of the collection
     * This requires that the ProductUsage be set to Collection
     * @type {Array<ProductCollectionMember>}
     * @memberof SearchMerchandizingRuleProduct
     */
    productCollectionMembers?: Array<ProductCollectionMember> | null;
    /**
     * List of product codes of product collections that this product is a member of.
     * @type {Array<CatalogRuntimesProductCollectionInfo>}
     * @memberof SearchMerchandizingRuleProduct
     */
    productCollections?: Array<CatalogRuntimesProductCollectionInfo> | null;
    /**
     * List of the image groups this product uses.
     * Image groups are used to map different images to different product options.
     * If the product doesn't have options then all images will be in the default
     * image group.
     * @type {Array<CatalogRuntimesProductImageGroup>}
     * @memberof SearchMerchandizingRuleProduct
     */
    productImageGroups?: Array<CatalogRuntimesProductImageGroup> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SearchMerchandizingRuleProduct
     */
    productRules?: Array<string> | null;
    /**
     * System generated monotonically increasing sequence
     * @type {number}
     * @memberof SearchMerchandizingRuleProduct
     */
    productSequence?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SearchMerchandizingRuleProduct
     */
    productType?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SearchMerchandizingRuleProduct
     */
    productTypeId?: number | null;
    /**
     * The UsageType of this product (Standard, Configurable, Bundle, Component, Collection)
     * @type {string}
     * @memberof SearchMerchandizingRuleProduct
     */
    productUsage?: string | null;
    /**
     * List of product properties. These are attributes that might apply to multiple products, for example, price, size, manufacturer. These attributes cannot be configured by the shopper.
     * @type {Array<CatalogRuntimesProductProperty>}
     * @memberof SearchMerchandizingRuleProduct
     */
    properties?: Array<CatalogRuntimesProductProperty> | null;
    /**
     * Represents the published state of the product returned. Valid values for ValueType are defined in PublishStateConst.
     * @type {string}
     * @memberof SearchMerchandizingRuleProduct
     */
    publishState?: string | null;
    /**
     * 
     * @type {ProductPurchasableState}
     * @memberof SearchMerchandizingRuleProduct
     */
    purchasableState?: ProductPurchasableState;
    /**
     * The location where the product is being purchased.. default is null. Products can have different prices
     * by purchaseLocation via custom priceListResolution....
     * @type {string}
     * @memberof SearchMerchandizingRuleProduct
     */
    purchaseLocation?: string | null;
    /**
     * The item's search engine relevancy score.
     * @type {number}
     * @memberof SearchMerchandizingRuleProduct
     */
    score?: number;
    /**
     * Readonly value of the selected value of the option corresponding to the Mozu.ProductRuntime.Contracts.Product.SlicingAttributeFQN
     * @type {string}
     * @memberof SearchMerchandizingRuleProduct
     */
    sliceValue?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SearchMerchandizingRuleProduct
     */
    slicingAttributeFQN?: string | null;
    /**
     * UPC code of the products (populated for configurable products).
     * @type {Array<string>}
     * @memberof SearchMerchandizingRuleProduct
     */
    upCs?: Array<string> | null;
    /**
     * UPC code of the product.
     * @type {string}
     * @memberof SearchMerchandizingRuleProduct
     */
    upc?: string | null;
    /**
     * When the product was last modified with the product admin resource.
     * @type {string}
     * @memberof SearchMerchandizingRuleProduct
     */
    updateDate?: string;
    /**
     * List of valid pricelists for the product
     * @type {Array<string>}
     * @memberof SearchMerchandizingRuleProduct
     */
    validPriceLists?: Array<string> | null;
    /**
     * When a configurable product has IsPurchasable=true on a GetProduct, this property will be populated for submission to cart.
     * @type {string}
     * @memberof SearchMerchandizingRuleProduct
     */
    variationProductCode?: string | null;
    /**
     * 
     * @type {Array<VariationSummary>}
     * @memberof SearchMerchandizingRuleProduct
     */
    variations?: Array<VariationSummary> | null;
    /**
     * For products with bulk pricing... this will be populated with pricebands, depending on what options have been selected...
     * @type {Array<ProductVolumePrice>}
     * @memberof SearchMerchandizingRuleProduct
     */
    volumePriceBands?: Array<ProductVolumePrice> | null;
    /**
     * 
     * @type {ProductPriceRange}
     * @memberof SearchMerchandizingRuleProduct
     */
    volumePriceRange?: ProductPriceRange;
    /**
     * 
     * @type {boolean}
     * @memberof SearchMerchandizingRuleProduct
     */
    isBuried?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SearchMerchandizingRuleProduct
     */
    isPinned?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SearchMerchandizingRuleProduct
     */
    isRanked?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SearchMerchandizingRuleProduct
     */
    position?: number;
}
/**
 * 
 * @export
 * @interface SearchMerchandizingRuleProductAllOf
 */
export interface SearchMerchandizingRuleProductAllOf {
    /**
     * 
     * @type {boolean}
     * @memberof SearchMerchandizingRuleProductAllOf
     */
    isBuried?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SearchMerchandizingRuleProductAllOf
     */
    isPinned?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SearchMerchandizingRuleProductAllOf
     */
    isRanked?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SearchMerchandizingRuleProductAllOf
     */
    position?: number;
}
/**
 * 
 * @export
 * @interface SearchMerchandizingSortField
 */
export interface SearchMerchandizingSortField {
    /**
     * 
     * @type {string}
     * @memberof SearchMerchandizingSortField
     */
    direction?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SearchMerchandizingSortField
     */
    propertyName?: string | null;
}
/**
 * A suggested result based on the search query
 * @export
 * @interface SearchSuggestion
 */
export interface SearchSuggestion {
    /**
     * A suggested entity based on the search query. Use the SuggestionType to determine the type of entity.
     * Could be a SearchTerm, Product, or Category
     * @type {any}
     * @memberof SearchSuggestion
     */
    suggestion?: any | null;
    /**
     * The type of Suggestion (e.g. Term, Product, Category). 
     * Will be one of the values of the SuggestionTypeConst type.
     * @type {string}
     * @memberof SearchSuggestion
     */
    suggestionType?: string | null;
}
/**
 * 
 * @export
 * @interface SearchSuggestionGroup
 */
export interface SearchSuggestionGroup {
    /**
     * Group Name
     * @type {string}
     * @memberof SearchSuggestionGroup
     */
    name?: string | null;
    /**
     * List of related SearchSuggestions
     * @type {Array<SearchSuggestion>}
     * @memberof SearchSuggestionGroup
     */
    suggestions?: Array<SearchSuggestion> | null;
}
/**
 * List of items to suggest to the shopper who is entering a search query, for example, a search box on the storefront.
 * @export
 * @interface SearchSuggestionResult
 */
export interface SearchSuggestionResult {
    /**
     * Text that the shopper types in a search query.
     * @type {string}
     * @memberof SearchSuggestionResult
     */
    query?: string | null;
    /**
     * List of SearchSuggestionGroups
     * @type {Array<SearchSuggestionGroup>}
     * @memberof SearchSuggestionResult
     */
    suggestionGroups?: Array<SearchSuggestionGroup> | null;
}

/**
 * 
 * @export
 */
export const SearchType = {
    NUMBER_1: 1,
    NUMBER_2: 2
} as const;
export type SearchType = typeof SearchType[keyof typeof SearchType];

/**
 * 
 * @export
 * @interface SegmentedQuantity
 */
export interface SegmentedQuantity {
    /**
     * 
     * @type {string}
     * @memberof SegmentedQuantity
     */
    bopisFulfillmentDate?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SegmentedQuantity
     */
    bopisProcessingTimeHours?: number | null;
    /**
     * 
     * @type {Array<CatalogRuntimesFutureInventory>}
     * @memberof SegmentedQuantity
     */
    futureInventory?: Array<CatalogRuntimesFutureInventory> | null;
    /**
     * 
     * @type {boolean}
     * @memberof SegmentedQuantity
     */
    infiniteInventory?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof SegmentedQuantity
     */
    isAvailable?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof SegmentedQuantity
     */
    quantity?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SegmentedQuantity
     */
    sthFulfillmentDate?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SegmentedQuantity
     */
    sthProcessingTimeHours?: number | null;
    /**
     * 
     * @type {Array<TagData>}
     * @memberof SegmentedQuantity
     */
    tags?: Array<TagData> | null;
    /**
     * 
     * @type {string}
     * @memberof SegmentedQuantity
     */
    transferFulfillmentDate?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SegmentedQuantity
     */
    transferProcessingTimeHours?: number | null;
}
/**
 * 
 * @export
 * @interface SolrDebugInfo
 */
export interface SolrDebugInfo {
    /**
     * 
     * @type {Array<string>}
     * @memberof SolrDebugInfo
     */
    blockedProductCodes?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SolrDebugInfo
     */
    boostFunctions?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SolrDebugInfo
     */
    boostQueries?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SolrDebugInfo
     */
    boostedProductCodes?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof SolrDebugInfo
     */
    searchTuningRuleCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SolrDebugInfo
     */
    solrUrl?: string | null;
}
/**
 * 
 * @export
 * @interface TagData
 */
export interface TagData {
    /**
     * 
     * @type {string}
     * @memberof TagData
     */
    category?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TagData
     */
    tag?: string | null;
}
/**
 * 
 * @export
 * @interface ValidationMessage
 */
export interface ValidationMessage {
    /**
     * Message displayed to the user when this validation failure occurred.
     * @type {string}
     * @memberof ValidationMessage
     */
    message?: string | null;
    /**
     * Severity level of the validation failure.
     *  Must be one of the values in SeverityConst.
     * @type {string}
     * @memberof ValidationMessage
     */
    severity?: string | null;
    /**
     * What invoked the validation.  Must be one of the values in SourceTypeConst.
     * @type {string}
     * @memberof ValidationMessage
     */
    source?: string | null;
    /**
     * Unique identifier of the source that invoked the validation failure.
     * @type {string}
     * @memberof ValidationMessage
     */
    sourceId?: string | null;
    /**
     * Type of validation error that occurred. This can be checked programatically. 
     *  Must be one of the values in ValidationTypeConst.
     * @type {string}
     * @memberof ValidationMessage
     */
    validationType?: string | null;
}
/**
 * 
 * @export
 * @interface VariationOption
 */
export interface VariationOption {
    /**
     * 
     * @type {string}
     * @memberof VariationOption
     */
    attributeFQN?: string | null;
    /**
     * 
     * @type {any}
     * @memberof VariationOption
     */
    value?: any | null;
    /**
     * 
     * @type {number}
     * @memberof VariationOption
     */
    valueSequence?: number;
}
/**
 * Details of a product, including its product code, name, description, options (if any), and current state--whether the product can be purchased given the options selected currently.
 * @export
 * @interface VariationSummary
 */
export interface VariationSummary {
    /**
     * 
     * @type {CatalogRuntimesProductInventoryInfo}
     * @memberof VariationSummary
     */
    inventoryInfo?: CatalogRuntimesProductInventoryInfo;
    /**
     * The combination of options that resolve to this variation product
     * @type {Array<VariationOption>}
     * @memberof VariationSummary
     */
    options?: Array<VariationOption> | null;
    /**
     * Merchant-created code associated with the variation product, for example, a SKU.
     * @type {string}
     * @memberof VariationSummary
     */
    productCode?: string | null;
    /**
     * UPC code of the variant product
     * @type {string}
     * @memberof VariationSummary
     */
    upc?: string | null;
}
/**
 * 
 * @export
 * @interface VisualSearchResult
 */
export interface VisualSearchResult {
    /**
     * 
     * @type {string}
     * @memberof VisualSearchResult
     */
    pageId?: string | null;
    /**
     * 
     * @type {Array<{ [key: string]: any; }>}
     * @memberof VisualSearchResult
     */
    results?: Array<{ [key: string]: any; }> | null;
    /**
     * 
     * @type {string}
     * @memberof VisualSearchResult
     */
    trackingId?: string | null;
}
