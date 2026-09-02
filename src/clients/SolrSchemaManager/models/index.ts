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
 * 
 * @export
 * @interface AttributeVocabularyValueLocalizedContent
 */
export interface AttributeVocabularyValueLocalizedContent {
    /**
     * 
     * @type {any}
     * @memberof AttributeVocabularyValueLocalizedContent
     */
    stringValue?: any | null;
}
/**
 * 
 * @export
 * @interface CatalogAdminsAttributeVocabularyValue
 */
export interface CatalogAdminsAttributeVocabularyValue {
    /**
     * 
     * @type {any}
     * @memberof CatalogAdminsAttributeVocabularyValue
     */
    mappedGenericValues?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CatalogAdminsAttributeVocabularyValue
     */
    value?: any | null;
}
/**
 * 
 * @export
 * @interface CatalogAdminsBundledProduct
 */
export interface CatalogAdminsBundledProduct {
    /**
     * 
     * @type {any}
     * @memberof CatalogAdminsBundledProduct
     */
    quantity?: any | null;
}
/**
 * 
 * @export
 * @interface CatalogAdminsDiscount
 */
export interface CatalogAdminsDiscount {
    /**
     * 
     * @type {any}
     * @memberof CatalogAdminsDiscount
     */
    amount?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CatalogAdminsDiscount
     */
    amountType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CatalogAdminsDiscount
     */
    canBeDeleted?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CatalogAdminsDiscount
     */
    code?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CatalogAdminsDiscount
     */
    hasPurchaseConditions?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CatalogAdminsDiscount
     */
    maximumDiscountImpactPerOrder?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CatalogAdminsDiscount
     */
    maximumDiscountImpactPerRedemption?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CatalogAdminsDiscount
     */
    maximumRedemptionsPerOrder?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CatalogAdminsDiscount
     */
    maximumUsesPerUser?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CatalogAdminsDiscount
     */
    scope?: any | null;
}
/**
 * 
 * @export
 * @interface CatalogAdminsDiscountCondition
 */
export interface CatalogAdminsDiscountCondition {
    /**
     * 
     * @type {any}
     * @memberof CatalogAdminsDiscountCondition
     */
    maxRedemptionCount?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CatalogAdminsDiscountCondition
     */
    minimumQuantityProductsRequiredInCategories?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CatalogAdminsDiscountCondition
     */
    minimumQuantityRequiredProducts?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CatalogAdminsDiscountCondition
     */
    requiresAuthenticatedUser?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CatalogAdminsDiscountCondition
     */
    requiresCoupon?: any | null;
}
/**
 * 
 * @export
 * @interface CatalogAdminsDiscountTarget
 */
export interface CatalogAdminsDiscountTarget {
    /**
     * 
     * @type {any}
     * @memberof CatalogAdminsDiscountTarget
     */
    maximumQuantityPerRedemption?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CatalogAdminsDiscountTarget
     */
    type?: any | null;
}
/**
 * 
 * @export
 * @interface CatalogAdminsProduct
 */
export interface CatalogAdminsProduct {
    /**
     * 
     * @type {any}
     * @memberof CatalogAdminsProduct
     */
    hasConfigurableOptions?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CatalogAdminsProduct
     */
    hasStandAloneOptions?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CatalogAdminsProduct
     */
    isVariation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CatalogAdminsProduct
     */
    productCollectionProducts?: any | null;
}
/**
 * 
 * @export
 * @interface CatalogAdminsProductImageGroup
 */
export interface CatalogAdminsProductImageGroup {
    /**
     * 
     * @type {any}
     * @memberof CatalogAdminsProductImageGroup
     */
    productImageGroupId?: any | null;
}
/**
 * 
 * @export
 * @interface CatalogAdminsProductImageGroupTag
 */
export interface CatalogAdminsProductImageGroupTag {
    /**
     * 
     * @type {any}
     * @memberof CatalogAdminsProductImageGroupTag
     */
    fqn?: any | null;
}
/**
 * 
 * @export
 * @interface CatalogAdminsProductPrice
 */
export interface CatalogAdminsProductPrice {
    /**
     * 
     * @type {any}
     * @memberof CatalogAdminsProductPrice
     */
    price?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CatalogAdminsProductPrice
     */
    salePrice?: any | null;
}
/**
 * 
 * @export
 * @interface CatalogAdminsTargetedShippingMethod
 */
export interface CatalogAdminsTargetedShippingMethod {
    /**
     * 
     * @type {any}
     * @memberof CatalogAdminsTargetedShippingMethod
     */
    code?: any | null;
}
/**
 * 
 * @export
 * @interface CatalogAdminsTargetedShippingZone
 */
export interface CatalogAdminsTargetedShippingZone {
    /**
     * 
     * @type {any}
     * @memberof CatalogAdminsTargetedShippingZone
     */
    zone?: any | null;
}
/**
 * 
 * @export
 * @interface CatalogAdminsThresholdMessage
 */
export interface CatalogAdminsThresholdMessage {
    /**
     * 
     * @type {any}
     * @memberof CatalogAdminsThresholdMessage
     */
    discountId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CatalogAdminsThresholdMessage
     */
    isActive?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CatalogAdminsThresholdMessage
     */
    requiresCouponCode?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CatalogAdminsThresholdMessage
     */
    showInCart?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CatalogAdminsThresholdMessage
     */
    showOnCheckout?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CatalogAdminsThresholdMessage
     */
    thresholdValue?: any | null;
}
/**
 * 
 * @export
 * @interface CategoryDiscountCondition
 */
export interface CategoryDiscountCondition {
    /**
     * 
     * @type {any}
     * @memberof CategoryDiscountCondition
     */
    categoryId?: any | null;
}
/**
 * 
 * @export
 * @interface DiscountLocalizedContent
 */
export interface DiscountLocalizedContent {
    /**
     * 
     * @type {any}
     * @memberof DiscountLocalizedContent
     */
    localeCode?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DiscountLocalizedContent
     */
    name?: any | null;
}
/**
 * 
 * @export
 * @interface FieldTypeDefinitionRepositoryEntry
 */
export interface FieldTypeDefinitionRepositoryEntry {
    /**
     * 
     * @type {string}
     * @memberof FieldTypeDefinitionRepositoryEntry
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FieldTypeDefinitionRepositoryEntry
     */
    name?: string | null;
    /**
     * 
     * @type {any}
     * @memberof FieldTypeDefinitionRepositoryEntry
     */
    solrFieldType?: any | null;
    /**
     * 
     * @type {string}
     * @memberof FieldTypeDefinitionRepositoryEntry
     */
    suffix?: string | null;
    /**
     * Restricts the fields used by specific SOLR analyzer.
     * Originally developed for entity extraction/ aka noun_extraction
     * (e.g. searching for sofa tables should return tables, not sofas)
     * @type {any}
     * @memberof FieldTypeDefinitionRepositoryEntry
     */
    usageRestrictions?: any | null;
}
/**
 * 
 * @export
 * @interface PricingRuntimeCustomerSegment
 */
export interface PricingRuntimeCustomerSegment {
    /**
     * 
     * @type {any}
     * @memberof PricingRuntimeCustomerSegment
     */
    id?: any | null;
}
/**
 * 
 * @export
 * @interface ProductCategory
 */
export interface ProductCategory {
    /**
     * 
     * @type {any}
     * @memberof ProductCategory
     */
    categoryId?: any | null;
}
/**
 * 
 * @export
 * @interface ProductExtraValueDeltaPrice
 */
export interface ProductExtraValueDeltaPrice {
    /**
     * 
     * @type {any}
     * @memberof ProductExtraValueDeltaPrice
     */
    deltaPrice?: any | null;
}
/**
 * Use the Products resource to create and manage products for your store. You can create products with options that a shopper configures (such as a T-shirt color and size). The system can manage inventory for all combinations of your product options, and can calculate tax and shipping costs.
 * @export
 * @interface ProductInCatalogInfo
 */
export interface ProductInCatalogInfo {
    /**
     * 
     * @type {any}
     * @memberof ProductInCatalogInfo
     */
    catalogId?: any | null;
}
/**
 * 
 * @export
 * @interface ProductLocalizedContent
 */
export interface ProductLocalizedContent {
    /**
     * 
     * @type {any}
     * @memberof ProductLocalizedContent
     */
    productName?: any | null;
}
/**
 * 
 * @export
 * @interface SchemaDefinition
 */
export interface SchemaDefinition {
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof SchemaDefinition
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {Array<SchemaDefinitionField>}
     * @memberof SchemaDefinition
     */
    fields: Array<SchemaDefinitionField>;
    /**
     * 
     * @type {boolean}
     * @memberof SchemaDefinition
     */
    readonly isPublished?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SchemaDefinition
     */
    language: string;
    /**
     * Returns boolean if contains any SpellingFields members.
     * @type {boolean}
     * @memberof SchemaDefinition
     */
    spellCorrectEnabled?: boolean | null;
    /**
     * List of attributes used in the spelling dictionary
     * @type {Array<SpellingSchemaDefinitionField>}
     * @memberof SchemaDefinition
     */
    spellingFields?: Array<SpellingSchemaDefinitionField> | null;
}
/**
 * 
 * @export
 * @interface SchemaDefinitionField
 */
export interface SchemaDefinitionField {
    /**
     * 
     * @type {string}
     * @memberof SchemaDefinitionField
     */
    fieldDefinition: string;
    /**
     * 
     * @type {string}
     * @memberof SchemaDefinitionField
     */
    fieldName: string;
    /**
     * 
     * @type {string}
     * @memberof SchemaDefinitionField
     */
    friendlyName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SchemaDefinitionField
     */
    readonly ingestFieldName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SchemaDefinitionField
     */
    readonly searchFieldName?: string | null;
}
/**
 * 
 * @export
 * @interface SpellingSchemaDefinitionField
 */
export interface SpellingSchemaDefinitionField {
    /**
     * 
     * @type {string}
     * @memberof SpellingSchemaDefinitionField
     */
    ingestFieldName?: string | null;
}
/**
 * 
 * @export
 * @interface Suggester
 */
export interface Suggester {
    /**
     * 
     * @type {string}
     * @memberof Suggester
     */
    allTermsRequired?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Suggester
     */
    highlight?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Suggester
     */
    name?: string | null;
}
/**
 * 
 * @export
 * @interface ThresholdMessageLocalizedContent
 */
export interface ThresholdMessageLocalizedContent {
    /**
     * 
     * @type {any}
     * @memberof ThresholdMessageLocalizedContent
     */
    localeCode?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ThresholdMessageLocalizedContent
     */
    messageTemplate?: any | null;
}
