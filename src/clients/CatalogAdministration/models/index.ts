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
    updateDate?: string | null;
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
    createBy?: string | null;
}
/**
 * 
 * @export
 * @interface AssignedDiscount
 */
export interface AssignedDiscount {
    /**
     * ReadOnly, CouponSetCode copied from URI
     * @type {string}
     * @memberof AssignedDiscount
     */
    couponSetCode?: string | null;
    /**
     * ReadOnly, CouponSetId
     * @type {number}
     * @memberof AssignedDiscount
     */
    couponSetId?: number;
    /**
     * Discount Id for the associated discount
     * @type {number}
     * @memberof AssignedDiscount
     */
    discountId: number;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof AssignedDiscount
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * 
 * @export
 * @interface AttributeInProductType
 */
export interface AttributeInProductType {
    /**
     * Unique identifier of the Attribute. Must be an attribute fully qualilfied name that already exists. If no namespace is specified Tenant is assumed
     * @type {string}
     * @memberof AttributeInProductType
     */
    attributeFQN?: string | null;
    /**
     * If True, the attribute is part of the base product type and can only have order modified.
     * @type {boolean}
     * @memberof AttributeInProductType
     */
    isInheritedFromBaseType?: boolean | null;
    /**
     * Used to order the display of the attributes within a section
     * @type {number}
     * @memberof AttributeInProductType
     */
    order?: number | null;
    /**
     * If True, the admin must include this attribute in products of this productType
     * @type {boolean}
     * @memberof AttributeInProductType
     */
    isRequiredByAdmin?: boolean | null;
    /**
     * If True, the property is hidden in the storefront. This field only applies to properties.
     * @type {boolean}
     * @memberof AttributeInProductType
     */
    isHiddenProperty?: boolean | null;
    /**
     * If true, this property is not available on the storefront. If false, this property will be available on storefront. The IsHiddenProperty hides the property from the customer, but is still available from the API.
     * @type {boolean}
     * @memberof AttributeInProductType
     */
    isAdminOnlyProperty?: boolean | null;
    /**
     * If True this property will not be returned  storefront product listings (Search,GetProduct) it will still be returned on GetProduct, ValidateProduct...)
     * @type {boolean}
     * @memberof AttributeInProductType
     */
    isProductDetailsOnlyProperty?: boolean | null;
    /**
     * If True, the property can have multiple values selected on the product. Only applies to PredefinedVocabulary properties.
     * @type {boolean}
     * @memberof AttributeInProductType
     */
    isMultiValueProperty?: boolean | null;
    /**
     * 
     * @type {AttributeInProductTypeDisplayInfo}
     * @memberof AttributeInProductType
     */
    displayInfo?: AttributeInProductTypeDisplayInfo;
    /**
     * The collection of vocabulary values included in this product type.
     * @type {Array<AttributeVocabularyValueInProductType>}
     * @memberof AttributeInProductType
     */
    vocabularyValues?: Array<AttributeVocabularyValueInProductType> | null;
    /**
     * 
     * @type {CatalogAdminsAttribute}
     * @memberof AttributeInProductType
     */
    attributeDetail?: CatalogAdminsAttribute;
}
/**
 * 
 * @export
 * @interface AttributeInProductTypeDisplayInfo
 */
export interface AttributeInProductTypeDisplayInfo {
    /**
     * Defines the intended display of this Attribute in the storeFront (ex. DropDown, ImagePicker, RadioButtons....)
     * @type {string}
     * @memberof AttributeInProductTypeDisplayInfo
     */
    displayIntention?: string | null;
}
/**
 * Attribute Search Settings. A container for all of the search and indexing settings of an Attribute
 * @export
 * @interface AttributeSearchSettings
 */
export interface AttributeSearchSettings {
    /**
     * Indicates whether the attribute value should be searchable on the public storefront.
     * @type {boolean}
     * @memberof AttributeSearchSettings
     */
    searchableInStorefront?: boolean;
    /**
     * Indicates whether the attribute value should be searchable in the merchant catalog admin.
     * @type {boolean}
     * @memberof AttributeSearchSettings
     */
    searchableInAdmin?: boolean;
    /**
     * If true, the system will index the display value of string attributes instead of the canonical value for searching. 
     * The canonical value will always be used for filtering. Does not apply for for non-string attributes.
     * @type {boolean}
     * @memberof AttributeSearchSettings
     */
    searchDisplayValue?: boolean;
    /**
     * Indicates whether the attribute should be able to be used in filters, facets, and sorting on the public storefront.
     * @type {boolean}
     * @memberof AttributeSearchSettings
     */
    allowFilteringAndSortingInStorefront?: boolean | null;
    /**
     * Indicates whether the attribute value is case sensative for filtering and faceting. This applies to Text Admin entered attributes. 
     * A null value means it is not case sensative
     * @type {boolean}
     * @memberof AttributeSearchSettings
     */
    indexValueWithCase?: boolean | null;
    /**
     * Indicates whether the attribute is indevidually stored as a tokenized field in search for custom term search weight
     * @type {boolean}
     * @memberof AttributeSearchSettings
     */
    customWeightInStorefrontSearch?: boolean | null;
}
/**
 * Attribute Value Localized Resource
 * @export
 * @interface AttributeTypeRule
 */
export interface AttributeTypeRule {
    /**
     * AttributeInputType identifier
     * @type {string}
     * @memberof AttributeTypeRule
     */
    attributeInputType?: string | null;
    /**
     * AttributeDataType identifier
     * @type {string}
     * @memberof AttributeTypeRule
     */
    attributeDataType?: string | null;
    /**
     * AttributeValueType identifier
     * @type {string}
     * @memberof AttributeTypeRule
     */
    attributeValueType?: string | null;
    /**
     * AttributeUsageType identifier
     * @type {string}
     * @memberof AttributeTypeRule
     */
    attributeUsageType?: string | null;
}
/**
 * A collection of AttributeType rules
 * @export
 * @interface AttributeTypeRuleCollection
 */
export interface AttributeTypeRuleCollection {
    /**
     * 
     * @type {number}
     * @memberof AttributeTypeRuleCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof AttributeTypeRuleCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof AttributeTypeRuleCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof AttributeTypeRuleCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<AttributeTypeRule>}
     * @memberof AttributeTypeRuleCollection
     */
    items?: Array<AttributeTypeRule> | null;
}
/**
 * 
 * @export
 * @interface AttributeVocabularyValueInProductType
 */
export interface AttributeVocabularyValueInProductType {
    /**
     * The actual value of the attribute vocabulary. This must be an existing value defined in the attribute vocabulary
     * @type {any}
     * @memberof AttributeVocabularyValueInProductType
     */
    value?: any | null;
    /**
     * Used to order the display of the attribute values in the storefront....
     * @type {number}
     * @memberof AttributeVocabularyValueInProductType
     */
    order?: number | null;
    /**
     * 
     * @type {CatalogAdminsAttributeVocabularyValueDisplayInfo}
     * @memberof AttributeVocabularyValueInProductType
     */
    displayInfo?: CatalogAdminsAttributeVocabularyValueDisplayInfo;
    /**
     * 
     * @type {CatalogAdminsAttributeVocabularyValue}
     * @memberof AttributeVocabularyValueInProductType
     */
    vocabularyValueDetail?: CatalogAdminsAttributeVocabularyValue;
}
/**
 * Attribute Value Localized Resource
 * @export
 * @interface AttributeVocabularyValueLocalizedContent
 */
export interface AttributeVocabularyValueLocalizedContent {
    /**
     * Language used for the string attribute value. Currently, only en_US is supported.
     * @type {string}
     * @memberof AttributeVocabularyValueLocalizedContent
     */
    localeCode?: string | null;
    /**
     * Localized Value in the language of the locale code
     * @type {string}
     * @memberof AttributeVocabularyValueLocalizedContent
     */
    stringValue?: string | null;
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
     * @type {string}
     * @memberof BoostValue
     */
    value?: string | null;
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
}
/**
 * Active Effectivity Dates
 * @export
 * @interface CatalogAdminsActiveDateRange
 */
export interface CatalogAdminsActiveDateRange {
    /**
     * 
     * @type {string}
     * @memberof CatalogAdminsActiveDateRange
     */
    startDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogAdminsActiveDateRange
     */
    endDate?: string | null;
}
/**
 * Attribute
 * @export
 * @interface CatalogAdminsAttribute
 */
export interface CatalogAdminsAttribute {
    /**
     * Name of the product displayed in the admin, This field does not need to be unqiue, but is required. It can include spaces...and is limited to a length of 50.
     * @type {string}
     * @memberof CatalogAdminsAttribute
     */
    adminName?: string | null;
    /**
     * NameSpace, each application creating attributes will have a uniqe namespace to avoid name (Code) collisions. The namespace provided must be a valid registered
     * namespace. If no namespace is specified it is assumed to be the namespace of the Tenant.
     * @type {string}
     * @memberof CatalogAdminsAttribute
     */
    namespace?: string | null;
    /**
     * Unique identifier of the Attribute. Must be unique within a namespace and cannot be changed once the attribute is created. This value will be generated and match the attribute
     * sequence if not provided on create.
     * @type {string}
     * @memberof CatalogAdminsAttribute
     */
    attributeCode?: string | null;
    /**
     * Attribute fully qualified name, Read only value that combines namespace and attribute code as NameSpace~AttributeCode
     * @type {string}
     * @memberof CatalogAdminsAttribute
     */
    attributeFQN?: string | null;
    /**
     * Specifies if this attribute can can be used to generalize values of another attribute
     * @type {boolean}
     * @memberof CatalogAdminsAttribute
     */
    isValueMappingAttribute?: boolean | null;
    /**
     * Attribute fully qualified name of a corresponding value mapping atribuite
     * @type {string}
     * @memberof CatalogAdminsAttribute
     */
    valueMappingAttributeFQN?: string | null;
    /**
     * Read only System generated monotonically increasing unique sequence for each attribute created.
     * @type {number}
     * @memberof CatalogAdminsAttribute
     */
    attributeSequence?: number | null;
    /**
     * Read only System generated monotonically increasing unique sequence for each attribute,DataType created (this is used to optimize indexed field names in search).
     * @type {number}
     * @memberof CatalogAdminsAttribute
     */
    attributeDataTypeSequence?: number | null;
    /**
     * Indentifier of the master that this attribute is a member of. System-supplied and read-only. Attributes will be created in the MasterCatalog of the supplied context.
     * @type {number}
     * @memberof CatalogAdminsAttribute
     */
    masterCatalogId?: number | null;
    /**
     * The InputType type of the attribute. Must be a valid value for InputType defined in InputTypeConst and the combination of types set must match an entry in the AttributeTypeRules resource. 
     * This value cannot be changed after create
     * @type {string}
     * @memberof CatalogAdminsAttribute
     */
    inputType?: string | null;
    /**
     * The ValueType of the attribute.  Must be a valid value for ValueType defined in ValueTypeTypeConst and the combination of types set must match an entry in the AttributeTypeRules resource. 
     * This value cannot be changed after create
     * @type {string}
     * @memberof CatalogAdminsAttribute
     */
    valueType?: string | null;
    /**
     * The DataType of the attribute.  Must be a valid value for DataType defined in DataTypeTypeConst and the combination of types set must match an entry in the AttributeTypeRules resource. 
     * This value cannot be changed after create
     * @type {string}
     * @memberof CatalogAdminsAttribute
     */
    dataType?: string | null;
    /**
     * Specifies if this attribute can have a usage type of Option in a ProductType. This value can only be true when when it matches an AttributeTypeRule in the AttributeTypeRules resource.
     * @type {boolean}
     * @memberof CatalogAdminsAttribute
     */
    isOption?: boolean | null;
    /**
     * Specifies if this attribute can have a usage type of Extra in a ProductType. This value can only be true when when it matches an AttributeTypeRule in the AttributeTypeRules resource.
     * @type {boolean}
     * @memberof CatalogAdminsAttribute
     */
    isExtra?: boolean | null;
    /**
     * Specifies if this attribute can have a usage type of Property in a ProductType. This value can only be true when when it matches an AttributeTypeRule in the AttributeTypeRules resource.
     * @type {boolean}
     * @memberof CatalogAdminsAttribute
     */
    isProperty?: boolean | null;
    /**
     * Specifies if this attribute is available for order routing
     * @type {boolean}
     * @memberof CatalogAdminsAttribute
     */
    availableForOrderRouting?: boolean;
    /**
     * Attribute Metadata. This list can contain opaque data (key value pairs) that can be used as a property bag for UI concerns.
     * @type {Array<CatalogAdminsAttributeMetadataItem>}
     * @memberof CatalogAdminsAttribute
     */
    attributeMetadata?: Array<CatalogAdminsAttributeMetadataItem> | null;
    /**
     * 
     * @type {CatalogAdminsAttributeLocalizedContent}
     * @memberof CatalogAdminsAttribute
     */
    content?: CatalogAdminsAttributeLocalizedContent;
    /**
     * The Content of an attribute. This content is always in the default language of the MasterCatalog.
     * @type {Array<CatalogAdminsAttributeLocalizedContent>}
     * @memberof CatalogAdminsAttribute
     */
    localizedContent?: Array<CatalogAdminsAttributeLocalizedContent> | null;
    /**
     * 
     * @type {CatalogAdminsAttributeValidation}
     * @memberof CatalogAdminsAttribute
     */
    validation?: CatalogAdminsAttributeValidation;
    /**
     * The list of Values for this attribute. Only available for ValueType:PredefinedVocabulary
     * @type {Array<CatalogAdminsAttributeVocabularyValue>}
     * @memberof CatalogAdminsAttribute
     */
    vocabularyValues?: Array<CatalogAdminsAttributeVocabularyValue> | null;
    /**
     * 
     * @type {AttributeSearchSettings}
     * @memberof CatalogAdminsAttribute
     */
    searchSettings?: AttributeSearchSettings;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CatalogAdminsAttribute
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * Collection of attributes.
 * @export
 * @interface CatalogAdminsAttributeCollection
 */
export interface CatalogAdminsAttributeCollection {
    /**
     * 
     * @type {number}
     * @memberof CatalogAdminsAttributeCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof CatalogAdminsAttributeCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof CatalogAdminsAttributeCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof CatalogAdminsAttributeCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<CatalogAdminsAttribute>}
     * @memberof CatalogAdminsAttributeCollection
     */
    items?: Array<CatalogAdminsAttribute> | null;
}
/**
 * Container for language-specific content to display on the storefront. You'll have a container for each supported language (LocaleCode). This enables you to display an attribute in multiple languages yet manage it as a single attribute internally.
 * @export
 * @interface CatalogAdminsAttributeLocalizedContent
 */
export interface CatalogAdminsAttributeLocalizedContent {
    /**
     * Language used for the attribute name and description. Currently, only en_US is supported.
     * @type {string}
     * @memberof CatalogAdminsAttributeLocalizedContent
     */
    localeCode?: string | null;
    /**
     * Name of the attribute in the language specified by LocaleCode.
     * @type {string}
     * @memberof CatalogAdminsAttributeLocalizedContent
     */
    name?: string | null;
    /**
     * Description of the attribute in the language specified by LocaleCode.
     * @type {string}
     * @memberof CatalogAdminsAttributeLocalizedContent
     */
    description?: string | null;
}
/**
 * Attribute Metadata Item.  It can be utilized for storing abitrary key/value pairs of data related to an attribute.
 * @export
 * @interface CatalogAdminsAttributeMetadataItem
 */
export interface CatalogAdminsAttributeMetadataItem {
    /**
     * The key
     * @type {string}
     * @memberof CatalogAdminsAttributeMetadataItem
     */
    key?: string | null;
    /**
     * The value
     * @type {string}
     * @memberof CatalogAdminsAttributeMetadataItem
     */
    value?: string | null;
}
/**
 * Used to validate attributes.
 * @export
 * @interface CatalogAdminsAttributeValidation
 */
export interface CatalogAdminsAttributeValidation {
    /**
     * Regular expression to run against the attribute value. This should follow JavaScript/EMCA's Regular Expression syntax.
     * @type {string}
     * @memberof CatalogAdminsAttributeValidation
     */
    regularExpression?: string | null;
    /**
     * For validating strings, minimum length allowed for a string.
     * @type {number}
     * @memberof CatalogAdminsAttributeValidation
     */
    minStringLength?: number | null;
    /**
     * For validating strings, maximum length allowed for a string.
     * @type {number}
     * @memberof CatalogAdminsAttributeValidation
     */
    maxStringLength?: number | null;
    /**
     * For validating Number attribute value, minimum number allowed.
     * @type {number}
     * @memberof CatalogAdminsAttributeValidation
     */
    minNumericValue?: number | null;
    /**
     * For validating Number attribute value, maximum number allowed.
     * @type {number}
     * @memberof CatalogAdminsAttributeValidation
     */
    maxNumericValue?: number | null;
    /**
     * For validating a DateTime attribute value, minimum datetime allowed.
     * @type {string}
     * @memberof CatalogAdminsAttributeValidation
     */
    minDateValue?: string | null;
    /**
     * For validating a DateTime attribute value, maximum datetime allowed.
     * @type {string}
     * @memberof CatalogAdminsAttributeValidation
     */
    maxDateValue?: string | null;
}
/**
 * Value of an attribute
 * @export
 * @interface CatalogAdminsAttributeVocabularyValue
 */
export interface CatalogAdminsAttributeVocabularyValue {
    /**
     * Read only System generated monotonically increasing unique sequence.
     * @type {number}
     * @memberof CatalogAdminsAttributeVocabularyValue
     */
    valueSequence?: number | null;
    /**
     * The actual value of the attribute vocabulary. This value must be unique within the vocabulary for a single attribute and match the datatype of the attribute. 
     * String data type requires a canonical value here or one will be system generated if null. The actual string content displayed to users should be stored as Content. 
     * String values require content to be present.
     * Once this value is set it cannot be changed.
     * @type {any}
     * @memberof CatalogAdminsAttributeVocabularyValue
     */
    value?: any | null;
    /**
     * The actual values of the related generic attribute. This value must match the datatype of the attribute and already exist 
     * within the Vocabulary values of the related ValueMappingAttribute. Only supporting string at this time.
     * @type {Array<any>}
     * @memberof CatalogAdminsAttributeVocabularyValue
     */
    mappedGenericValues?: Array<any> | null;
    /**
     * The ProductName when the Attribute DataType is ProductCode.
     * @type {string}
     * @memberof CatalogAdminsAttributeVocabularyValue
     */
    productName?: string | null;
    /**
     * 
     * @type {AttributeVocabularyValueLocalizedContent}
     * @memberof CatalogAdminsAttributeVocabularyValue
     */
    content?: AttributeVocabularyValueLocalizedContent;
    /**
     * The Content of an attribute value. This content is in multiple locals supported by the master catalog and is only valid for String DataType.
     * @type {Array<AttributeVocabularyValueLocalizedContent>}
     * @memberof CatalogAdminsAttributeVocabularyValue
     */
    localizedContent?: Array<AttributeVocabularyValueLocalizedContent> | null;
    /**
     * The order in which the attribute value displays. If you omit a value for this property, Mozu infers the display order from the attribute value's position the list.
     * @type {number}
     * @memberof CatalogAdminsAttributeVocabularyValue
     */
    displayOrder?: number | null;
}
/**
 * 
 * @export
 * @interface CatalogAdminsAttributeVocabularyValueDisplayInfo
 */
export interface CatalogAdminsAttributeVocabularyValueDisplayInfo {
    /**
     * Id of the image in the CMS.
     * @type {string}
     * @memberof CatalogAdminsAttributeVocabularyValueDisplayInfo
     */
    cmsId?: string | null;
    /**
     * URL of the image.
     * @type {string}
     * @memberof CatalogAdminsAttributeVocabularyValueDisplayInfo
     */
    imageUrl?: string | null;
    /**
     * Hex Color value to display in a color picker
     * @type {string}
     * @memberof CatalogAdminsAttributeVocabularyValueDisplayInfo
     */
    colorValue?: string | null;
}
/**
 * Price of the product and currency used.
 * @export
 * @interface CatalogAdminsBundledProduct
 */
export interface CatalogAdminsBundledProduct {
    /**
     * Product Code
     * @type {string}
     * @memberof CatalogAdminsBundledProduct
     */
    productCode?: string | null;
    /**
     * Qty of the bundled PRoduct
     * @type {number}
     * @memberof CatalogAdminsBundledProduct
     */
    quantity?: number;
    /**
     * 
     * @type {CatalogAdminsProductPrice}
     * @memberof CatalogAdminsBundledProduct
     */
    price?: CatalogAdminsProductPrice;
    /**
     * Read only Name of the BundledProduct
     * @type {string}
     * @memberof CatalogAdminsBundledProduct
     */
    productName?: string | null;
    /**
     * 
     * @type {CommerceRuntimeMeasurement}
     * @memberof CatalogAdminsBundledProduct
     */
    packageHeight?: CommerceRuntimeMeasurement;
    /**
     * 
     * @type {CommerceRuntimeMeasurement}
     * @memberof CatalogAdminsBundledProduct
     */
    packageWidth?: CommerceRuntimeMeasurement;
    /**
     * 
     * @type {CommerceRuntimeMeasurement}
     * @memberof CatalogAdminsBundledProduct
     */
    packageLength?: CommerceRuntimeMeasurement;
    /**
     * 
     * @type {CommerceRuntimeMeasurement}
     * @memberof CatalogAdminsBundledProduct
     */
    packageWeight?: CommerceRuntimeMeasurement;
    /**
     * Indicates the fulfillment types the product supports.
     * @type {Array<string>}
     * @memberof CatalogAdminsBundledProduct
     */
    fulfillmentTypesSupported?: Array<string> | null;
}
/**
 * Category
 * @export
 * @interface CatalogAdminsCategory
 */
export interface CatalogAdminsCategory {
    /**
     * Internal unique identifier of the category. System-supplied and read-only.
     * @type {number}
     * @memberof CatalogAdminsCategory
     */
    id?: number | null;
    /**
     * The Type of Category Static, Dyanmic, DynamicPreComputed
     * @type {string}
     * @memberof CatalogAdminsCategory
     */
    categoryType?: string | null;
    /**
     * The CatalogId that the category belongs to.
     * @type {number}
     * @memberof CatalogAdminsCategory
     */
    catalogId?: number | null;
    /**
     * Unique identifier of the category to which this category belongs. If nil, this is a top-level category. System-supplied and read-only.
     * @type {number}
     * @memberof CatalogAdminsCategory
     */
    parentCategoryId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogAdminsCategory
     */
    parentCategoryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogAdminsCategory
     */
    parentCategoryName?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CatalogAdminsCategory
     */
    parentIsActive?: boolean | null;
    /**
     * External unique identifier of the category.
     * @type {string}
     * @memberof CatalogAdminsCategory
     */
    categoryCode?: string | null;
    /**
     * If false, the category is considered unavailable in runtime (default is true if not specified on create)
     * @type {boolean}
     * @memberof CatalogAdminsCategory
     */
    isActive?: boolean | null;
    /**
     * If true, the category appears to shoppers on the storefront.
     * @type {boolean}
     * @memberof CatalogAdminsCategory
     */
    isDisplayed?: boolean | null;
    /**
     * Order in which categories appear when they are at the same level (siblings). For example, you could change the sequence of categories so that a specific category always appears first.
     * @type {number}
     * @memberof CatalogAdminsCategory
     */
    sequence?: number | null;
    /**
     * 
     * @type {CategoryLocalizedContent}
     * @memberof CatalogAdminsCategory
     */
    content?: CategoryLocalizedContent;
    /**
     * Container for language-specific content to display on the storefront. You'll have a container for each supported language (LocaleCode). 
     * This enables you to display a category in multiple languages yet manage it as a single category internally.
     * @type {Array<CategoryLocalizedContent>}
     * @memberof CatalogAdminsCategory
     */
    localizedContent?: Array<CategoryLocalizedContent> | null;
    /**
     * 
     * @type {DynamicExpression}
     * @memberof CatalogAdminsCategory
     */
    dynamicExpression?: DynamicExpression;
    /**
     * Number of products contained in this category. This count includes all products contained in any subcategories of this category.
     * @type {number}
     * @memberof CatalogAdminsCategory
     */
    productCount?: number | null;
    /**
     * Number of subcategories that belong to this category. These subcategories are at the same level (siblings).
     * @type {number}
     * @memberof CatalogAdminsCategory
     */
    childCount?: number | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CatalogAdminsCategory
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * If True, search displays sliced view
     * @type {boolean}
     * @memberof CatalogAdminsCategory
     */
    shouldSlice?: boolean | null;
    /**
     * Active Start Date
     * @type {string}
     * @memberof CatalogAdminsCategory
     */
    activeDateStart?: string | null;
    /**
     * Active end Date
     * @type {string}
     * @memberof CatalogAdminsCategory
     */
    activeDateEnd?: string | null;
    /**
     * List of attributes for the category.
     * @type {Array<CatalogAdminsCategoryAttribute>}
     * @memberof CatalogAdminsCategory
     */
    attributes?: Array<CatalogAdminsCategoryAttribute> | null;
}
/**
 * 
 * @export
 * @interface CatalogAdminsCategoryAttribute
 */
export interface CatalogAdminsCategoryAttribute {
    /**
     * 
     * @type {string}
     * @memberof CatalogAdminsCategoryAttribute
     */
    fullyQualifiedName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CatalogAdminsCategoryAttribute
     */
    attributeDefinitionId?: number | null;
    /**
     * 
     * @type {Array<any>}
     * @memberof CatalogAdminsCategoryAttribute
     */
    values?: Array<any> | null;
}
/**
 * Collection of categories returned as a whole. A collection is not paged.
 * @export
 * @interface CatalogAdminsCategoryCollection
 */
export interface CatalogAdminsCategoryCollection {
    /**
     * 
     * @type {number}
     * @memberof CatalogAdminsCategoryCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<CatalogAdminsCategory>}
     * @memberof CatalogAdminsCategoryCollection
     */
    items?: Array<CatalogAdminsCategory> | null;
}
/**
 * Collection of categories where categories are returned in a series of pages.
 * @export
 * @interface CatalogAdminsCategoryPagedCollection
 */
export interface CatalogAdminsCategoryPagedCollection {
    /**
     * 
     * @type {number}
     * @memberof CatalogAdminsCategoryPagedCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof CatalogAdminsCategoryPagedCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof CatalogAdminsCategoryPagedCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof CatalogAdminsCategoryPagedCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<CatalogAdminsCategory>}
     * @memberof CatalogAdminsCategoryPagedCollection
     */
    items?: Array<CatalogAdminsCategory> | null;
}
/**
 * The exchange rate between two currencies
 * @export
 * @interface CatalogAdminsCurrencyExchangeRate
 */
export interface CatalogAdminsCurrencyExchangeRate {
    /**
     * The source currency code
     * @type {string}
     * @memberof CatalogAdminsCurrencyExchangeRate
     */
    fromCurrencyCode?: string | null;
    /**
     * The target currency code
     * @type {string}
     * @memberof CatalogAdminsCurrencyExchangeRate
     */
    toCurrencyCode?: string | null;
    /**
     * The exchange rate
     * @type {number}
     * @memberof CatalogAdminsCurrencyExchangeRate
     */
    rate: number;
    /**
     * An additional multiplier to use in calculations
     * @type {number}
     * @memberof CatalogAdminsCurrencyExchangeRate
     */
    multiplier?: number | null;
    /**
     * Reference data for miscellaneous metadata from updates
     * @type {string}
     * @memberof CatalogAdminsCurrencyExchangeRate
     */
    referenceData?: string | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CatalogAdminsCurrencyExchangeRate
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * Represents a customer segment
 * @export
 * @interface CatalogAdminsCustomerSegment
 */
export interface CatalogAdminsCustomerSegment {
    /**
     * The Customer segment Id.
     * This is the  system Id not the code.
     * @type {number}
     * @memberof CatalogAdminsCustomerSegment
     */
    id?: number;
}
/**
 * Allows you to define and manage discounts to apply to your products, product categories, or orders. The discounts can be a specified monetary amount off the price, percentage off the price, or for free shipping.
 * You can create a coupon code that applies to the discount.
 * @export
 * @interface CatalogAdminsDiscount
 */
export interface CatalogAdminsDiscount {
    /**
     * Unique identifier of the discount. System-supplied and read-only.
     * @type {number}
     * @memberof CatalogAdminsDiscount
     */
    id?: number | null;
    /**
     * 
     * @type {DiscountLocalizedContent}
     * @memberof CatalogAdminsDiscount
     */
    content?: DiscountLocalizedContent;
    /**
     * Container for the language-specific name of the discount. You will have a container for each supported language (LocaleCode).
     * This enables you to display the discount name in multiple languages yet manage it as a single discount internally.
     * @type {Array<DiscountLocalizedContent>}
     * @memberof CatalogAdminsDiscount
     */
    localizedContent?: Array<DiscountLocalizedContent> | null;
    /**
     * Scope to which the discount applies, valid values are: Order, LineItem
     * @type {string}
     * @memberof CatalogAdminsDiscount
     */
    scope: string;
    /**
     * 
     * @type {CatalogAdminsDiscountCondition}
     * @memberof CatalogAdminsDiscount
     */
    conditions?: CatalogAdminsDiscountCondition;
    /**
     * 
     * @type {CatalogAdminsDiscountTarget}
     * @memberof CatalogAdminsDiscount
     */
    target: CatalogAdminsDiscountTarget;
    /**
     * How many times this discount has been redeemed. System-supplied and read-only.
     * @type {number}
     * @memberof CatalogAdminsDiscount
     */
    currentRedemptionCount?: number | null;
    /**
     *     Amount of the discount, as a percentage or monetary amount, for example 15% or $15.
     * Must be either null or greater than zero.
     * @type {number}
     * @memberof CatalogAdminsDiscount
     */
    amount?: number | null;
    /**
     * Type of discount, which can be either a percentage off the price, 
     * a specific monetary amount, or free. 
     * Possible values: 
     * 	Percentage 
     * 	Amount 
     * 	Free
     * 	FixedPrice
     * @type {string}
     * @memberof CatalogAdminsDiscount
     */
    amountType: string;
    /**
     * Discount status which can be "Active," "Scheduled," or "Expired." System-supplied and read-only.
     * @type {string}
     * @memberof CatalogAdminsDiscount
     */
    status?: string | null;
    /**
     * Signifies that the discount is not referenced and can be hard deleted
     * @type {boolean}
     * @memberof CatalogAdminsDiscount
     */
    canBeDeleted?: boolean;
    /**
     * Determines if the discount should apply to sale price or regular price only.
     * Discounts will apply to sale prices by default.
     * Only applies to LineItem product discounts.
     * @type {boolean}
     * @memberof CatalogAdminsDiscount
     */
    doesNotApplyToSalePrice?: boolean | null;
    /**
     * Determines whether or not a discount applies to a items with a sale price.  Applicable 
     * on order and line item discounts.  For line items, when this is true, the discount will 
     * be disqualified.  For order level discounts, when true, the discount will not be applied 
     * to those items have a sale price.
     * @type {boolean}
     * @memberof CatalogAdminsDiscount
     */
    doesNotApplyToProductsWithSalePrice?: boolean | null;
    /**
     * Signifies if the discount is disabled (Null is treated as false)
     * @type {boolean}
     * @memberof CatalogAdminsDiscount
     */
    isDisabled?: boolean | null;
    /**
     * Maximum number of times a user can redeem this discount.
     *  Must be either null or greater than zero.
     * @type {number}
     * @memberof CatalogAdminsDiscount
     */
    maximumUsesPerUser?: number | null;
    /**
     * Maximum impact this discount can apply on a single order.
     *  Must be either null or greater than zero.
     * @type {number}
     * @memberof CatalogAdminsDiscount
     */
    maximumDiscountImpactPerOrder?: number | null;
    /**
     * Maximum impact this discount can apply on a single line item.
     *  Must be either null or greater than zero.
     * @type {number}
     * @memberof CatalogAdminsDiscount
     */
    maximumDiscountImpactPerRedemption?: number | null;
    /**
     * Maximum number of redemptions allowed per order.
     * If null, defaults to unlimited.
     * @type {number}
     * @memberof CatalogAdminsDiscount
     */
    maximumRedemptionsPerOrder?: number | null;
    /**
     * Products receiving a price from a price list specified here or a child of a specified 
     * price list can be discounted.
     * @type {Array<string>}
     * @memberof CatalogAdminsDiscount
     */
    includedPriceLists?: Array<string> | null;
    /**
     * Flag to allow or prevent application to multi-ship-to orders,
     * Only applicable to shipping discounts.
     * @type {boolean}
     * @memberof CatalogAdminsDiscount
     */
    doesNotApplyToMultiShipToOrders?: boolean | null;
    /**
     * Readonly property indicating that the condition required purchase is the 
     * same as the target items.  Used in BxGx and BoGo type discounts.
     * @type {boolean}
     * @memberof CatalogAdminsDiscount
     */
    isBxGx?: boolean | null;
    /**
     * Indicates whether or not stacking is enabled for this discount
     * @type {boolean}
     * @memberof CatalogAdminsDiscount
     */
    canBeStackedUpon?: boolean | null;
    /**
     * Indicates which stacking layer this discount is a part of
     * @type {number}
     * @memberof CatalogAdminsDiscount
     */
    stackingLayer?: number | null;
    /**
     * 
     * @type {CatalogAdminsThresholdMessage}
     * @memberof CatalogAdminsDiscount
     */
    thresholdMessage?: CatalogAdminsThresholdMessage;
    /**
     * Prevents Line Item Shipping discounts from being applied when a Line Item Product  
     * discount has been applied
     * @type {boolean}
     * @memberof CatalogAdminsDiscount
     */
    preventLineItemShippingDiscounts?: boolean | null;
    /**
     * Prevents Order Product discounts from being applied when a Line Item Product  
     * or Shipping discount has been applied
     * @type {boolean}
     * @memberof CatalogAdminsDiscount
     */
    preventOrderProductDiscounts?: boolean | null;
    /**
     * Prevents Order Shipping discounts from being applied when a Line Item Product/Shipping  
     * or Order Product discount has been applied
     * @type {boolean}
     * @memberof CatalogAdminsDiscount
     */
    preventOrderShippingDiscounts?: boolean | null;
    /**
     * Indicates if this discount has purchase conditions that must be met before 
     * the discount is applied
     * @type {boolean}
     * @memberof CatalogAdminsDiscount
     */
    hasPurchaseConditions?: boolean;
    /**
     * The type of purchase requirement for this discount, either purchase conditions and targets which   
     * Supports BoGo, and BxGx scenarios. Or Target only that only have a target and no purchase conditions
     * @type {string}
     * @memberof CatalogAdminsDiscount
     */
    purchaseRequirementType?: string | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CatalogAdminsDiscount
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * System-supplied and read-only.
     * @type {Array<string>}
     * @memberof CatalogAdminsDiscount
     */
    tagCodes?: Array<string> | null;
    /**
     * Determines how discounts will be evaluated for subscription items and during continuity orders.
     * @type {boolean}
     * @memberof CatalogAdminsDiscount
     */
    isSubscriptionDiscount?: boolean | null;
    /**
     * Determines whether the discount is available for every shopper.
     * @type {boolean}
     * @memberof CatalogAdminsDiscount
     */
    isPublic?: boolean | null;
    /**
     * Indicates unique code for the discount, if not present Discount Id is used as a code.
     * @type {string}
     * @memberof CatalogAdminsDiscount
     */
    code?: string | null;
    /**
     * Indicates unique discount labels.
     * @type {Array<string>}
     * @memberof CatalogAdminsDiscount
     */
    labels?: Array<string> | null;
}
/**
 * Collection of discounts returned as a whole. A collection is not paged.
 * @export
 * @interface CatalogAdminsDiscountCollection
 */
export interface CatalogAdminsDiscountCollection {
    /**
     * 
     * @type {number}
     * @memberof CatalogAdminsDiscountCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof CatalogAdminsDiscountCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof CatalogAdminsDiscountCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof CatalogAdminsDiscountCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<CatalogAdminsDiscount>}
     * @memberof CatalogAdminsDiscountCollection
     */
    items?: Array<CatalogAdminsDiscount> | null;
}
/**
 * Specifies constraints that must be satified for a discount to be applied to a target.
 * Constraints are Anded together
 * @export
 * @interface CatalogAdminsDiscountCondition
 */
export interface CatalogAdminsDiscountCondition {
    /**
     * Maximum number of times that the discount can be redeemed. Default is null (no limit to discount redemptions).
     * @type {number}
     * @memberof CatalogAdminsDiscountCondition
     */
    maxRedemptionCount?: number | null;
    /**
     * If true, the shopper needs to enter a coupon code to redeem the discount.
     * @type {boolean}
     * @memberof CatalogAdminsDiscountCondition
     */
    requiresCoupon?: boolean;
    /**
     * Code of the coupon associated with the discount (if a coupon code is required). The merchant can supply the code or the system can generate it.
     * @type {string}
     * @memberof CatalogAdminsDiscountCondition
     */
    couponCode?: string | null;
    /**
     * Determines is this discount can be used by an anonymous user 
     * Defaults to false to allow discounts for anonymous users.
     * @type {boolean}
     * @memberof CatalogAdminsDiscountCondition
     */
    requiresAuthenticatedUser?: boolean;
    /**
     * List of payment types that trigger this discount to be valid.
     * @type {Array<string>}
     * @memberof CatalogAdminsDiscountCondition
     */
    includedPaymentWorkflows?: Array<string> | null;
    /**
     * List of categories that must be purchased in order for the discount to be valid.
     * @type {Array<CategoryDiscountCondition>}
     * @memberof CatalogAdminsDiscountCondition
     */
    includedCategories?: Array<CategoryDiscountCondition> | null;
    /**
     * List of categories to discount. When a discount applies to a category, all products in the category are discounted.
     * @type {Array<CategoryDiscountCondition>}
     * @memberof CatalogAdminsDiscountCondition
     */
    excludedCategories?: Array<CategoryDiscountCondition> | null;
    /**
     * List of products that are eligible for the discount.
     * @type {Array<ProductDiscountCondition>}
     * @memberof CatalogAdminsDiscountCondition
     */
    includedProducts?: Array<ProductDiscountCondition> | null;
    /**
     * List of products that are eligible for the discount.
     * @type {Array<ProductDiscountCondition>}
     * @memberof CatalogAdminsDiscountCondition
     */
    excludedProducts?: Array<ProductDiscountCondition> | null;
    /**
     * List of customer groups for which the discount applies
     * @type {Array<CatalogAdminsCustomerSegment>}
     * @memberof CatalogAdminsDiscountCondition
     */
    customerSegments?: Array<CatalogAdminsCustomerSegment> | null;
    /**
     * Minimum quantity of products in the specified IncludedProducts that must be purchased to
     * qualify for the associated discount.
     * Defaults to 1 if  null and IncludedProducts has values.
     * @type {number}
     * @memberof CatalogAdminsDiscountCondition
     */
    minimumQuantityRequiredProducts?: number | null;
    /**
     * Minimum quantity of products in the categories specified in IncludedCategories that must be purchased to
     * qualify for the associated discount.
     * Defaults to 1 if  null and IncludedCategories has values
     * @type {number}
     * @memberof CatalogAdminsDiscountCondition
     */
    minimumQuantityProductsRequiredInCategories?: number | null;
    /**
     * Only applies to order.
     * Minimum order subtotal after discounts in order for the associated discount to be applied
     * @type {number}
     * @memberof CatalogAdminsDiscountCondition
     */
    minimumOrderAmount?: number | null;
    /**
     * Only applies to order.
     * Maximum order subtotal after discounts in order for the associated discount to be applied
     * @type {number}
     * @memberof CatalogAdminsDiscountCondition
     */
    maximumOrderAmount?: number | null;
    /**
     * List of categories to discount. When a discount applies to a category, all products in the category are discounted.
     * @type {Array<CategoryDiscountCondition>}
     * @memberof CatalogAdminsDiscountCondition
     */
    categoriesToExcludeFromMinOrderTotal?: Array<CategoryDiscountCondition> | null;
    /**
     * List of products that are eligible for the discount.
     * @type {Array<ProductDiscountCondition>}
     * @memberof CatalogAdminsDiscountCondition
     */
    productsToExcludeFromMinOrderTotal?: Array<ProductDiscountCondition> | null;
    /**
     * Minimum lifetime value amount required for this discount to apply
     * @type {number}
     * @memberof CatalogAdminsDiscountCondition
     */
    minimumLifetimeValueAmount?: number | null;
    /**
     * Date when the discount can goes into effect, in the format yyyy-mm-dd.
     * @type {string}
     * @memberof CatalogAdminsDiscountCondition
     */
    startDate?: string | null;
    /**
     * Date when the discount expires. Default is null (no expiration date).
     * @type {string}
     * @memberof CatalogAdminsDiscountCondition
     */
    expirationDate?: string | null;
    /**
     * Minimum amount that must be purchased in the combined categories defined in 
     * IncludedCategories.  Amount is calculated before discounting.
     * Not used if IncludedCategories is empty.
     * @type {number}
     * @memberof CatalogAdminsDiscountCondition
     */
    minimumCategorySubtotalBeforeDiscounts?: number | null;
    /**
     * Defines a minimum quantity that is required for a target only discount
     * @type {number}
     * @memberof CatalogAdminsDiscountCondition
     */
    minimumRequiredQuantityPerRedemption?: number | null;
    /**
     * List of subscription frequencies to which the discount will apply.
     * @type {Array<string>}
     * @memberof CatalogAdminsDiscountCondition
     */
    validSubscriptionFrequencies?: Array<string> | null;
    /**
     * Ordinals at which a continuity order should receive the discount.
     * @type {Array<number>}
     * @memberof CatalogAdminsDiscountCondition
     */
    validSubscriptionContinuityOrdinals?: Array<number> | null;
    /**
     * The minimum number of distinct products on the order
     * Not a quantity calculation.
     * @type {number}
     * @memberof CatalogAdminsDiscountCondition
     */
    minDistinctProductsRequired?: number | null;
    /**
     * The order must contain at least this total quantity of items for the discount to apply.
     * You must buy a combined quantity of at least x amount.
     * @type {number}
     * @memberof CatalogAdminsDiscountCondition
     */
    minTotalOrderQuantity?: number | null;
    /**
     * The pricing context must match on this value for the discount to apply.
     * This only matters for tenants that use subscription products
     * @type {string}
     * @memberof CatalogAdminsDiscountCondition
     */
    pricingContext?: string | null;
    /**
     * 
     * @type {ContinuityRecurrenceSettings}
     * @memberof CatalogAdminsDiscountCondition
     */
    continuityRecurrenceSettings?: ContinuityRecurrenceSettings;
    /**
     * The discount condition for fulfillment methods, if present the discount will be applied only to these fulfillment methods.
     * This must be a value defined in FulfillmentMethodConst below.
     * @type {Array<string>}
     * @memberof CatalogAdminsDiscountCondition
     */
    validFulfillmentMethods?: Array<string> | null;
    /**
     * The discount condition for site Ids, if present the discount will be applied only to these sites.
     * If not present discount will work for all sites in a catalog.
     * @type {Array<number>}
     * @memberof CatalogAdminsDiscountCondition
     */
    exclusiveSiteIds?: Array<number> | null;
    /**
     * 
     * @type {DynamicExpression}
     * @memberof CatalogAdminsDiscountCondition
     */
    expression?: DynamicExpression;
    /**
     * List of locations where the item/order should be fulfilled for the discount to be valid.
     * @type {Array<string>}
     * @memberof CatalogAdminsDiscountCondition
     */
    exclusiveLocationCodes?: Array<string> | null;
}
/**
 * What to discount. Specifies the type of discount (percentage off, monetary amount, or free shipping) and which products, categories, or shipping methods are eligible for the discount.
 * Can also specify the minimum amount that the order must total for the discount to apply.
 * @export
 * @interface CatalogAdminsDiscountTarget
 */
export interface CatalogAdminsDiscountTarget {
    /**
     *     Type of target to which the discount applies. Possible values: <pre>Product</pre> or <pre>Shipping</pre>. 
     * If this is a <pre>Product</pre> type, you can specify which products or categories that the discount applies to.
     *     If this is a <pre>Shipping</pre> type then you must specify which shipping methods apply.
     * @type {string}
     * @memberof CatalogAdminsDiscountTarget
     */
    type: string;
    /**
     * If yes, the discount applies to all products sold on the storefront.
     * @type {boolean}
     * @memberof CatalogAdminsDiscountTarget
     */
    includeAllProducts?: boolean | null;
    /**
     * Applies to Included categories
     * When Any, the target product can belong to any specified category.
     * When All, the target product must belong to all specified categories.
     * Defaults to Any
     * @type {string}
     * @memberof CatalogAdminsDiscountTarget
     */
    includedCategoriesOperator?: string | null;
    /**
     * List of categories to discount. When a discount applies to a category, all products in the category are discounted.
     * @type {Array<TargetedCategory>}
     * @memberof CatalogAdminsDiscountTarget
     */
    categories?: Array<TargetedCategory> | null;
    /**
     * Applies to Included categories
     * Defaults to Any
     * @type {string}
     * @memberof CatalogAdminsDiscountTarget
     */
    excludedCategoriesOperator?: string | null;
    /**
     * List of categories to exclude from the discount. Useful to exclude specific child categories.
     * @type {Array<TargetedCategory>}
     * @memberof CatalogAdminsDiscountTarget
     */
    excludedCategories?: Array<TargetedCategory> | null;
    /**
     * List of products that are eligible for the discount.
     * @type {Array<TargetedProduct>}
     * @memberof CatalogAdminsDiscountTarget
     */
    products?: Array<TargetedProduct> | null;
    /**
     * List of products that are excluded from the discount.
     * @type {Array<TargetedProduct>}
     * @memberof CatalogAdminsDiscountTarget
     */
    excludedProducts?: Array<TargetedProduct> | null;
    /**
     * Prevents order scoped discounts from layering over items that already have a shipping discount with the 
     * same type.
     * @type {boolean}
     * @memberof CatalogAdminsDiscountTarget
     */
    excludeItemsWithExistingShippingDiscounts?: boolean | null;
    /**
     * Prevents order scoped discounts from layering over items that already have a product discount with the 
     * same type.
     * @type {boolean}
     * @memberof CatalogAdminsDiscountTarget
     */
    excludeItemsWithExistingProductDiscounts?: boolean | null;
    /**
     * Shipping method that is eligible for shipping discounts. This is a shipping method defined in Shipping Settings.
     * @type {Array<TargetedShippingMethod>}
     * @memberof CatalogAdminsDiscountTarget
     */
    shippingMethods?: Array<TargetedShippingMethod> | null;
    /**
     * Shipping Zones that are applicable for this discount
     * @type {Array<TargetedShippingZone>}
     * @memberof CatalogAdminsDiscountTarget
     */
    shippingZones?: Array<TargetedShippingZone> | null;
    /**
     * Prevents the discount from being applied to handling fees
     * @type {boolean}
     * @memberof CatalogAdminsDiscountTarget
     */
    doNotApplyToHandlingFees?: boolean | null;
    /**
     * When a condition is specified, this property limits the number of items that can be targeted per discount redemption with an order.
     * if multiple redemptions are allowed per order then multiples of this value would be allowed in multiples of the associated 
     * condition.
     * If no condition is specified then this value is not used.  
     * If null and condition exists, then defaults to 1.
     * @type {number}
     * @memberof CatalogAdminsDiscountTarget
     */
    maximumQuantityPerRedemption?: number | null;
    /**
     * Determines which way the discount is optimized.  Consumers favor(default - false/null) or tenants favor (when this is set to true)
     * Applies to discounts where target is not a specific product or list of products.  
     * May also impact behavior of Buy X Get Y so that X is the most expensive items and Y the least expensive.
     * @type {boolean}
     * @memberof CatalogAdminsDiscountTarget
     */
    appliesToLeastExpensiveProductsFirst?: boolean | null;
}
/**
 * The definition of a Facet
 * @export
 * @interface CatalogAdminsFacet
 */
export interface CatalogAdminsFacet {
    /**
     * The unique identifier for the facet definition
     * @type {number}
     * @memberof CatalogAdminsFacet
     */
    facetId?: number | null;
    /**
     * 
     * @type {FacetSource}
     * @memberof CatalogAdminsFacet
     */
    source?: FacetSource;
    /**
     * The type of facet. Allowable values are: Value, RangeQuery 
     * Must be a valid value for DataType defined in FacetTypeConst.
     * @type {string}
     * @memberof CatalogAdminsFacet
     */
    facetType?: string | null;
    /**
     * Used to order the display of the facets within a section
     * @type {number}
     * @memberof CatalogAdminsFacet
     */
    order?: number;
    /**
     * The category that the facet is being configured at
     * @type {number}
     * @memberof CatalogAdminsFacet
     */
    categoryId?: number | null;
    /**
     * The category that the facet is being configured at
     * @type {string}
     * @memberof CatalogAdminsFacet
     */
    categoryCode?: string | null;
    /**
     * Determines how the facet values will be sorted in the store. 
     * Must be a valid value for DataType defined in FacetValueSortTypeConst. 
     * Allowable values are: CountAscending, CountDescending, ValuesAscending, ValuesDescending, AttributeDefinition, AttributeDefinitionDescending.
     * The default if no value is specified will be CountDescending.
     * @type {string}
     * @memberof CatalogAdminsFacet
     */
    valueSortType?: string | null;
    /**
     * The ID of a parent category's facet being overriden
     * @type {number}
     * @memberof CatalogAdminsFacet
     */
    overrideFacetId?: number | null;
    /**
     * Indicates whether the facet is hidden for the given category
     * @type {boolean}
     * @memberof CatalogAdminsFacet
     */
    isHidden?: boolean;
    /**
     * 
     * @type {FacetValidity}
     * @memberof CatalogAdminsFacet
     */
    validity?: FacetValidity;
    /**
     * List of ranges if the Facet is of type Range
     * @type {Array<FacetRangeQuery>}
     * @memberof CatalogAdminsFacet
     */
    rangeQueries?: Array<FacetRangeQuery> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CatalogAdminsFacet
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * 
 * @export
 * @interface CatalogAdminsMasterCatalog
 */
export interface CatalogAdminsMasterCatalog {
    /**
     * MasterCatalogId (readonly)
     * @type {number}
     * @memberof CatalogAdminsMasterCatalog
     */
    id?: number;
    /**
     * Name of the MasterCatalog (readonly)
     * @type {string}
     * @memberof CatalogAdminsMasterCatalog
     */
    name?: string | null;
    /**
     * The product publishing mode of this MasterCatalog
     * @type {string}
     * @memberof CatalogAdminsMasterCatalog
     */
    productPublishingMode?: string | null;
    /**
     * If the publishingMode is Pending and LiveEditsEnabled = true, DataViewMode live can be passed in the header and live products can be directly edited.
     * @type {boolean}
     * @memberof CatalogAdminsMasterCatalog
     */
    enableLiveEdit?: boolean | null;
    /**
     * Master catalog supported locale codes
     * @type {Array<string>}
     * @memberof CatalogAdminsMasterCatalog
     */
    supportedLocaleCodes?: Array<string> | null;
    /**
     * Indicates whether the MasterCatalog has been deleted and should no longer be used
     * @type {boolean}
     * @memberof CatalogAdminsMasterCatalog
     */
    isDeleted?: boolean;
}
/**
 * Category
 * @export
 * @interface CatalogAdminsPriceList
 */
export interface CatalogAdminsPriceList {
    /**
     * External unique identifier of the PriceList. Must be unique an only contain url sanitized characters. Max length is 50
     * @type {string}
     * @memberof CatalogAdminsPriceList
     */
    priceListCode: string;
    /**
     * 
     * @type {number}
     * @memberof CatalogAdminsPriceList
     */
    priceListSequence?: number;
    /**
     * Parent PriceList code, Can be null for root level priceLists
     * @type {string}
     * @memberof CatalogAdminsPriceList
     */
    parentPriceListCode?: string | null;
    /**
     * Parent PriceList name, Can be null for root level priceLists. Read only in contract.
     * @type {string}
     * @memberof CatalogAdminsPriceList
     */
    parentPriceListName?: string | null;
    /**
     * Name of the priceList. Max length is 100
     * @type {string}
     * @memberof CatalogAdminsPriceList
     */
    name: string;
    /**
     * Description of the price list. Max length is 300
     * @type {string}
     * @memberof CatalogAdminsPriceList
     */
    description?: string | null;
    /**
     * Is the price list enabled and valid in the storefront. Default is true.
     * @type {boolean}
     * @memberof CatalogAdminsPriceList
     */
    enabled?: boolean | null;
    /**
     * When true, only products with valid price list entries will be visible in the storefront. Default is false
     * @type {boolean}
     * @memberof CatalogAdminsPriceList
     */
    filteredInStorefront?: boolean | null;
    /**
     * When true, no valid sites need to be specifiied. Price list is considered valid for all sites. Default is true
     * @type {boolean}
     * @memberof CatalogAdminsPriceList
     */
    validForAllSites?: boolean | null;
    /**
     * When ValidForAllSites = false, a list of siteIDs that the price list is valid for should be supplied
     * @type {Array<number>}
     * @memberof CatalogAdminsPriceList
     */
    validSites?: Array<number> | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof CatalogAdminsPriceList
     */
    defaultForSites?: Array<number> | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof CatalogAdminsPriceList
     */
    indexedSites?: Array<number> | null;
    /**
     * List of customer segment code associated with this price list.
     * Used to resolve default price list
     * @type {Array<string>}
     * @memberof CatalogAdminsPriceList
     */
    mappedCustomerSegments?: Array<string> | null;
    /**
     * Used to prioritize price list resolution when more than 1 price list maps
     * @type {number}
     * @memberof CatalogAdminsPriceList
     */
    rank?: number | null;
    /**
     * Determines if this price list can be resolved as the current price list 
     * within a session.
     * @type {boolean}
     * @memberof CatalogAdminsPriceList
     */
    resolvable?: boolean | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CatalogAdminsPriceList
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * Use the Products resource to create and manage products for your store. You can create products with options that a shopper configures (such as a T-shirt color and size). The system can manage inventory for all combinations of your product options, and can calculate tax and shipping costs.
 * @export
 * @interface CatalogAdminsProduct
 */
export interface CatalogAdminsProduct {
    /**
     * Merchant-created code identifier associated with the product, for example, a SKU or product item number.
     * @type {string}
     * @memberof CatalogAdminsProduct
     */
    productCode?: string | null;
    /**
     * Indicates the usage type of this product. Must be one of the values in ProductUsageConst.
     * @type {string}
     * @memberof CatalogAdminsProduct
     */
    productUsage?: string | null;
    /**
     * Indicates the fulfillment types the product supports.
     * @type {Array<string>}
     * @memberof CatalogAdminsProduct
     */
    fulfillmentTypesSupported?: Array<string> | null;
    /**
     * Identifier of the Master Catalog that this product is a member of. System-supplied and read-only
     * @type {number}
     * @memberof CatalogAdminsProduct
     */
    masterCatalogId?: number | null;
    /**
     * System generated monotonically increasing sequence
     * @type {number}
     * @memberof CatalogAdminsProduct
     */
    productSequence?: number | null;
    /**
     * Unique identifier of the productType of the product. Refers to a valid ProductType that was previously created with the ProductType resource.
     * @type {number}
     * @memberof CatalogAdminsProduct
     */
    productTypeId?: number | null;
    /**
     * Read only flag that indicates if the product meets the product type constraints (All adminRequired attributes have a valid value)
     * @type {boolean}
     * @memberof CatalogAdminsProduct
     */
    isValidForProductType?: boolean | null;
    /**
     * This is the base product ProductCode of a product that is a variation. It is read-only and only populated for products that are variations of a configurable base product.
     * @type {string}
     * @memberof CatalogAdminsProduct
     */
    baseProductCode?: string | null;
    /**
     * Catalog specific info for each catalog a product is valid in. There should always be one or more entries here.
     * @type {Array<ProductInCatalogInfo>}
     * @memberof CatalogAdminsProduct
     */
    productInCatalogs?: Array<ProductInCatalogInfo> | null;
    /**
     * 
     * @type {ProductLocalizedContent}
     * @memberof CatalogAdminsProduct
     */
    content?: ProductLocalizedContent;
    /**
     * The content for each locale code supported by the master catalog
     * @type {Array<ProductLocalizedContent>}
     * @memberof CatalogAdminsProduct
     */
    localizedContent?: Array<ProductLocalizedContent> | null;
    /**
     * 
     * @type {CatalogAdminsProductPrice}
     * @memberof CatalogAdminsProduct
     */
    price?: CatalogAdminsProductPrice;
    /**
     * 
     * @type {CatalogAdminsProductPricingBehaviorInfo}
     * @memberof CatalogAdminsProduct
     */
    pricingBehavior?: CatalogAdminsProductPricingBehaviorInfo;
    /**
     * 
     * @type {ProductLocalizedSEOContent}
     * @memberof CatalogAdminsProduct
     */
    seoContent?: ProductLocalizedSEOContent;
    /**
     * 
     * @type {Array<ProductLocalizedSEOContent>}
     * @memberof CatalogAdminsProduct
     */
    localizedSEOContent?: Array<ProductLocalizedSEOContent> | null;
    /**
     * The Options defined in the product Type that are currently assigned to this product
     * @type {Array<CatalogAdminsProductOption>}
     * @memberof CatalogAdminsProduct
     */
    options?: Array<CatalogAdminsProductOption> | null;
    /**
     * The Extras defined in the product Type that are currently assigned to this product
     * @type {Array<ProductExtra>}
     * @memberof CatalogAdminsProduct
     */
    extras?: Array<ProductExtra> | null;
    /**
     * The Properties defined in the product Type that are currently assigned to this product
     * @type {Array<CatalogAdminsProductProperty>}
     * @memberof CatalogAdminsProduct
     */
    properties?: Array<CatalogAdminsProductProperty> | null;
    /**
     * If true, the product is subject to tax.
     * @type {boolean}
     * @memberof CatalogAdminsProduct
     */
    isTaxable?: boolean | null;
    /**
     * 
     * @type {CatalogAdminsProductInventoryInfo}
     * @memberof CatalogAdminsProduct
     */
    inventoryInfo?: CatalogAdminsProductInventoryInfo;
    /**
     * 
     * @type {number}
     * @memberof CatalogAdminsProduct
     */
    shippingClassId?: number | null;
    /**
     * If true, the product can be purchased or fulfilled at regular intervals, for example, monthly billing or a subscription.
     * @type {boolean}
     * @memberof CatalogAdminsProduct
     */
    isRecurring?: boolean | null;
    /**
     * UPC code of the product.
     * @type {string}
     * @memberof CatalogAdminsProduct
     */
    upc?: string | null;
    /**
     * 
     * @type {ProductSupplierInfo}
     * @memberof CatalogAdminsProduct
     */
    supplierInfo?: ProductSupplierInfo;
    /**
     * Does this product need to be packaged on its own
     * @type {boolean}
     * @memberof CatalogAdminsProduct
     */
    isPackagedStandAlone?: boolean | null;
    /**
     * When packaged alone this is the package type
     * @type {string}
     * @memberof CatalogAdminsProduct
     */
    standAlonePackageType?: string | null;
    /**
     * 
     * @type {CommerceRuntimeMeasurement}
     * @memberof CatalogAdminsProduct
     */
    packageHeight?: CommerceRuntimeMeasurement;
    /**
     * 
     * @type {CommerceRuntimeMeasurement}
     * @memberof CatalogAdminsProduct
     */
    packageWidth?: CommerceRuntimeMeasurement;
    /**
     * 
     * @type {CommerceRuntimeMeasurement}
     * @memberof CatalogAdminsProduct
     */
    packageLength?: CommerceRuntimeMeasurement;
    /**
     * 
     * @type {CommerceRuntimeMeasurement}
     * @memberof CatalogAdminsProduct
     */
    packageWeight?: CommerceRuntimeMeasurement;
    /**
     * Read only. List of discounts that are available for a product.
     * @type {Array<CatalogAdminsDiscount>}
     * @memberof CatalogAdminsProduct
     */
    applicableDiscounts?: Array<CatalogAdminsDiscount> | null;
    /**
     * Read only. If true, this is a product variation of a product with configurable options. System-supplied and read-only.
     * @type {boolean}
     * @memberof CatalogAdminsProduct
     */
    isVariation?: boolean;
    /**
     * Read only. If IsVariation true, thish provides a unique key to manage the variation of the base product.
     * @type {string}
     * @memberof CatalogAdminsProduct
     */
    variationKey?: string | null;
    /**
     * Read only. If true, this product has configurable options. The product is not purchasable until the shopper selects options that resolve to a product variation. System-supplied and read-only.
     * @type {boolean}
     * @memberof CatalogAdminsProduct
     */
    hasConfigurableOptions?: boolean;
    /**
     * Read only. If true, the product has stand-alone options that a shopper may select. System-supplied and read-only.
     * @type {boolean}
     * @memberof CatalogAdminsProduct
     */
    hasStandAloneOptions?: boolean;
    /**
     * Read only List of variations that exist for a product. This is only populated when IsVariation is true. To get the list of options, the GET request must include the VariationOptions response group.
     * @type {Array<ProductVariationOption>}
     * @memberof CatalogAdminsProduct
     */
    variationOptions?: Array<ProductVariationOption> | null;
    /**
     * 
     * @type {ProductPublishingInfo}
     * @memberof CatalogAdminsProduct
     */
    publishingInfo?: ProductPublishingInfo;
    /**
     * list of other products that are included in a BundleProduct
     * This requires that the ProductUsage be set to Bundle
     * @type {Array<CatalogAdminsBundledProduct>}
     * @memberof CatalogAdminsProduct
     */
    bundledProducts?: Array<CatalogAdminsBundledProduct> | null;
    /**
     * list of other products that are members of a ProductCollection
     * This requires that the ProductUsage be set to Collection
     * @type {Array<ProductCollectionProduct>}
     * @memberof CatalogAdminsProduct
     */
    productCollectionProducts?: Array<ProductCollectionProduct> | null;
    /**
     * List of Mozu.ProductAdmin.Contracts.ProductCollectionInfo that this product belongs to
     * @type {Array<CatalogAdminsProductCollectionInfo>}
     * @memberof CatalogAdminsProduct
     */
    productCollections?: Array<CatalogAdminsProductCollectionInfo> | null;
    /**
     * List of the image groups this product uses.
     * Image groups are used to map different images to different product options.
     * If the product doesn't have options then all images will be in the default
     * image group.
     * @type {Array<CatalogAdminsProductImageGroup>}
     * @memberof CatalogAdminsProduct
     */
    productImageGroups?: Array<CatalogAdminsProductImageGroup> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CatalogAdminsProduct
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {SlicingSettings}
     * @memberof CatalogAdminsProduct
     */
    slicingSettings?: SlicingSettings;
    /**
     * When this product belongs to a product collection this is the product id for the primary collection.
     * @type {string}
     * @memberof CatalogAdminsProduct
     */
    primaryProductCollectionCode?: string | null;
}
/**
 * Collection of products returned as a whole. A collection is not paged.
 * @export
 * @interface CatalogAdminsProductCollection
 */
export interface CatalogAdminsProductCollection {
    /**
     * 
     * @type {number}
     * @memberof CatalogAdminsProductCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof CatalogAdminsProductCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof CatalogAdminsProductCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof CatalogAdminsProductCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<CatalogAdminsProduct>}
     * @memberof CatalogAdminsProductCollection
     */
    items?: Array<CatalogAdminsProduct> | null;
}
/**
 * Information about the relationship between a Mozu.ProductAdmin.Contracts.Product and a productCollection (product with usagetype of collection)
 * This is only represented on the product member side of the relationship.
 * @export
 * @interface CatalogAdminsProductCollectionInfo
 */
export interface CatalogAdminsProductCollectionInfo {
    /**
     * Product code of the product that is the collection that the containing product belongs to
     * @type {string}
     * @memberof CatalogAdminsProductCollectionInfo
     */
    collectionProductCode?: string | null;
    /**
     * Collection name in the language of the master catalog
     * @type {string}
     * @memberof CatalogAdminsProductCollectionInfo
     */
    collectionName?: string | null;
    /**
     * True when this is the primary collection for the containing product.
     * @type {boolean}
     * @memberof CatalogAdminsProductCollectionInfo
     */
    isPrimaryCollection?: boolean | null;
}
/**
 * Key to resolve a collection member
 * @export
 * @interface CatalogAdminsProductCollectionMemberKey
 */
export interface CatalogAdminsProductCollectionMemberKey {
    /**
     * Key to resolve a collection member product
     * @type {string}
     * @memberof CatalogAdminsProductCollectionMemberKey
     */
    value?: string | null;
}
/**
 * Price of the product and currency used.
 * @export
 * @interface CatalogAdminsProductCost
 */
export interface CatalogAdminsProductCost {
    /**
     * Currency code.
     * @type {string}
     * @memberof CatalogAdminsProductCost
     */
    isoCurrencyCode?: string | null;
    /**
     * Cost of the product. This is the price the merchant pays for the product.
     * @type {number}
     * @memberof CatalogAdminsProductCost
     */
    cost?: number | null;
}
/**
 * 
 * @export
 * @interface CatalogAdminsProductImageGroup
 */
export interface CatalogAdminsProductImageGroup {
    /**
     * 
     * @type {string}
     * @memberof CatalogAdminsProductImageGroup
     */
    productImageGroupId: string;
    /**
     * 
     * @type {Array<CatalogAdminsProductImageGroupTag>}
     * @memberof CatalogAdminsProductImageGroup
     */
    productImageGroupTags?: Array<CatalogAdminsProductImageGroupTag> | null;
}
/**
 * 
 * @export
 * @interface CatalogAdminsProductImageGroupTag
 */
export interface CatalogAdminsProductImageGroupTag {
    /**
     * 
     * @type {string}
     * @memberof CatalogAdminsProductImageGroupTag
     */
    fqn: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CatalogAdminsProductImageGroupTag
     */
    values?: Array<string> | null;
}
/**
 * Use the Products resource to create and manage products for your store. You can create products with options that a shopper configures (such as a T-shirt color and size). The system can manage inventory for all combinations of your product options, and can calculate tax and shipping costs.
 * @export
 * @interface CatalogAdminsProductInventoryInfo
 */
export interface CatalogAdminsProductInventoryInfo {
    /**
     * If true, the Products service manages inventory for this product.
     * @type {boolean}
     * @memberof CatalogAdminsProductInventoryInfo
     */
    manageStock?: boolean | null;
    /**
     * The behvior when the ManageStock is true and the product is not in stock.
     * @type {string}
     * @memberof CatalogAdminsProductInventoryInfo
     */
    outOfStockBehavior?: string | null;
}
/**
 * Product options for configurable or stand-alone products. A configurable option is one that the shopper chooses when ordering, for example, 
 * the color of a T-shirt. A stand-alone option is independent of the product and can be added to the product order. For example, a monogram.
 * @export
 * @interface CatalogAdminsProductOption
 */
export interface CatalogAdminsProductOption {
    /**
     * Unique identifier of the Attribute.
     * @type {string}
     * @memberof CatalogAdminsProductOption
     */
    attributeFQN?: string | null;
    /**
     * Defines whether or not this option can be used to segment product images
     * @type {boolean}
     * @memberof CatalogAdminsProductOption
     */
    isProductImageGroupSelector?: boolean | null;
    /**
     * List of all the values for this product option.
     * @type {Array<CatalogAdminsProductOptionValue>}
     * @memberof CatalogAdminsProductOption
     */
    values?: Array<CatalogAdminsProductOptionValue> | null;
}
/**
 * A value of a product option for this product. For example, a computer product may have an option called "Memory" that can have the values "6GB,"8GB," and "12GB."
 * @export
 * @interface CatalogAdminsProductOptionValue
 */
export interface CatalogAdminsProductOptionValue {
    /**
     * 
     * @type {any}
     * @memberof CatalogAdminsProductOptionValue
     */
    value?: any | null;
    /**
     * 
     * @type {CatalogAdminsAttributeVocabularyValue}
     * @memberof CatalogAdminsProductOptionValue
     */
    attributeVocabularyValueDetail?: CatalogAdminsAttributeVocabularyValue;
}
/**
 * Price of the product and currency used.
 * @export
 * @interface CatalogAdminsProductPrice
 */
export interface CatalogAdminsProductPrice {
    /**
     * Currency code.
     * @type {string}
     * @memberof CatalogAdminsProductPrice
     */
    isoCurrencyCode?: string | null;
    /**
     * Price of the product. This is the price the merchant intends to sell the product if no sale price is present.
     * @type {number}
     * @memberof CatalogAdminsProductPrice
     */
    price?: number | null;
    /**
     * Current sale price of the product. Sale price is a numeric (monetary) amount, not a percentage off.
     * @type {number}
     * @memberof CatalogAdminsProductPrice
     */
    salePrice?: number | null;
    /**
     * Manufacturer Suggested Retail Price. +
     * @type {number}
     * @memberof CatalogAdminsProductPrice
     */
    msrp?: number | null;
    /**
     * Minimum Advertised Price
     * @type {number}
     * @memberof CatalogAdminsProductPrice
     */
    map?: number | null;
    /**
     * Minimum Advertised Price effective start date (null = begining of time)
     * @type {string}
     * @memberof CatalogAdminsProductPrice
     */
    mapStartDate?: string | null;
    /**
     * Minimum Advertised Price effectivity end date (null = forever)
     * @type {string}
     * @memberof CatalogAdminsProductPrice
     */
    mapEndDate?: string | null;
    /**
     * Credit amt of the product
     * @type {number}
     * @memberof CatalogAdminsProductPrice
     */
    creditValue?: number | null;
}
/**
 * Pricing behavior associated with the product
 * @export
 * @interface CatalogAdminsProductPricingBehaviorInfo
 */
export interface CatalogAdminsProductPricingBehaviorInfo {
    /**
     * 
     * @type {boolean}
     * @memberof CatalogAdminsProductPricingBehaviorInfo
     */
    discountsRestricted?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogAdminsProductPricingBehaviorInfo
     */
    discountsRestrictedStartDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogAdminsProductPricingBehaviorInfo
     */
    discountsRestrictedEndDate?: string | null;
    /**
     * Only used when product is a variation
     * @type {string}
     * @memberof CatalogAdminsProductPricingBehaviorInfo
     */
    variationPricingMethod?: string | null;
}
/**
 * Product options for configurable or stand-alone products. A configurable option is one that the shopper chooses when ordering, for example, 
 * the color of a T-shirt. A stand-alone option is independent of the product and can be added to the product order. For example, a monogram.
 * @export
 * @interface CatalogAdminsProductProperty
 */
export interface CatalogAdminsProductProperty {
    /**
     * Unique identifier of the Attribute.
     * @type {string}
     * @memberof CatalogAdminsProductProperty
     */
    attributeFQN?: string | null;
    /**
     * 
     * @type {Array<CatalogAdminsProductPropertyValue>}
     * @memberof CatalogAdminsProductProperty
     */
    values?: Array<CatalogAdminsProductPropertyValue> | null;
    /**
     * 
     * @type {boolean}
     * @memberof CatalogAdminsProductProperty
     */
    forceOrder?: boolean | null;
}
/**
 * A value of a product option for this product. For example, a computer product may have an option called "Memory" that can have the values "6GB,"8GB," and "12GB."
 * @export
 * @interface CatalogAdminsProductPropertyValue
 */
export interface CatalogAdminsProductPropertyValue {
    /**
     * 
     * @type {any}
     * @memberof CatalogAdminsProductPropertyValue
     */
    value?: any | null;
    /**
     * 
     * @type {ProductPropertyValueLocalizedContent}
     * @memberof CatalogAdminsProductPropertyValue
     */
    content?: ProductPropertyValueLocalizedContent;
    /**
     * 
     * @type {Array<ProductPropertyValueLocalizedContent>}
     * @memberof CatalogAdminsProductPropertyValue
     */
    localizedContent?: Array<ProductPropertyValueLocalizedContent> | null;
    /**
     * 
     * @type {CatalogAdminsAttributeVocabularyValue}
     * @memberof CatalogAdminsProductPropertyValue
     */
    attributeVocabularyValueDetail?: CatalogAdminsAttributeVocabularyValue;
}
/**
 * Search Merchandizing Rule
 * @export
 * @interface CatalogAdminsSearchMerchandizingRule
 */
export interface CatalogAdminsSearchMerchandizingRule {
    /**
     * Unique identifier. Will be generated if not provided.
     * @type {string}
     * @memberof CatalogAdminsSearchMerchandizingRule
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogAdminsSearchMerchandizingRule
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogAdminsSearchMerchandizingRule
     */
    description?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CatalogAdminsSearchMerchandizingRule
     */
    isDisabled?: boolean | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof CatalogAdminsSearchMerchandizingRule
     */
    tags?: Array<string> | null;
    /**
     * 
     * @type {CatalogAdminsSearchMerchandizingRuleContext}
     * @memberof CatalogAdminsSearchMerchandizingRule
     */
    context?: CatalogAdminsSearchMerchandizingRuleContext;
    /**
     * 
     * @type {SearchMerchandizingRuleImpact}
     * @memberof CatalogAdminsSearchMerchandizingRule
     */
    ruleImpact?: SearchMerchandizingRuleImpact;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CatalogAdminsSearchMerchandizingRule
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * SearchMerchandizingRule Condition
 * @export
 * @interface CatalogAdminsSearchMerchandizingRuleCondition
 */
export interface CatalogAdminsSearchMerchandizingRuleCondition {
    /**
     * 
     * @type {Array<string>}
     * @memberof CatalogAdminsSearchMerchandizingRuleCondition
     */
    terms?: Array<string> | null;
    /**
     * 
     * @type {Array<SearchMerchandizingRuleField>}
     * @memberof CatalogAdminsSearchMerchandizingRuleCondition
     */
    fields?: Array<SearchMerchandizingRuleField> | null;
}
/**
 * SearchMerchandizingRule Condition
 * @export
 * @interface CatalogAdminsSearchMerchandizingRuleContext
 */
export interface CatalogAdminsSearchMerchandizingRuleContext {
    /**
     * 
     * @type {SearchType}
     * @memberof CatalogAdminsSearchMerchandizingRuleContext
     */
    searchType?: SearchType;
    /**
     * StartDate
     * @type {string}
     * @memberof CatalogAdminsSearchMerchandizingRuleContext
     */
    startDate?: string | null;
    /**
     * Defaults to MAXDATE
     * @type {string}
     * @memberof CatalogAdminsSearchMerchandizingRuleContext
     */
    endDate?: string | null;
    /**
     * 
     * @type {CatalogAdminsSearchMerchandizingRuleCondition}
     * @memberof CatalogAdminsSearchMerchandizingRuleContext
     */
    condition?: CatalogAdminsSearchMerchandizingRuleCondition;
}
/**
 * 
 * @export
 * @interface CatalogAdminsSpellcheck
 */
export interface CatalogAdminsSpellcheck {
    /**
     * Enables/disables the use of spell correct/auto correct at query time
     * @type {boolean}
     * @memberof CatalogAdminsSpellcheck
     */
    autocorrect?: boolean;
    /**
     * Enables/disables the use of did you mean at query time
     * @type {boolean}
     * @memberof CatalogAdminsSpellcheck
     */
    didyoumean?: boolean;
    /**
     * Does the spelling dictionary exists in SOLR
     * This determines if toggle in site search settings should be enabled/disabled
     * @type {boolean}
     * @memberof CatalogAdminsSpellcheck
     */
    spellcheckEnabled?: boolean;
}
/**
 * A generic tag that can be used for any purpose.
 * @export
 * @interface CatalogAdminsTag
 */
export interface CatalogAdminsTag {
    /**
     * A unique code per catalog. Limit 500 characters.
     * @type {string}
     * @memberof CatalogAdminsTag
     */
    tagCode: string;
    /**
     * Readonly and computed from TagCode. If using hierarchical tag-codes, only the last node
     * @type {string}
     * @memberof CatalogAdminsTag
     */
    readonly tagName?: string | null;
    /**
     * Readonly and computed from TagCode. If using hierarchical tag-codes, the node path without the TagName
     * @type {string}
     * @memberof CatalogAdminsTag
     */
    readonly tagPath?: string | null;
}
/**
 * 
 * @export
 * @interface CatalogAdminsThresholdMessage
 */
export interface CatalogAdminsThresholdMessage {
    /**
     * Unique identifier of the discount. System-supplied and read-only.
     * @type {number}
     * @memberof CatalogAdminsThresholdMessage
     */
    discountId: number;
    /**
     * The cart total amount that must be met before the threshold message is displayed
     * @type {number}
     * @memberof CatalogAdminsThresholdMessage
     */
    thresholdValue: number;
    /**
     * Indicates if threshold messages are active for this discount
     * @type {boolean}
     * @memberof CatalogAdminsThresholdMessage
     */
    isActive?: boolean;
    /**
     * Indicates if the threshold message will display in the cart
     * @type {boolean}
     * @memberof CatalogAdminsThresholdMessage
     */
    showInCart?: boolean;
    /**
     * Indicates if the threshold message will display on the checkout page
     * @type {boolean}
     * @memberof CatalogAdminsThresholdMessage
     */
    showOnCheckout?: boolean;
    /**
     * Indicates if the threshold message will display when a promo code is evaluated
     * @type {boolean}
     * @memberof CatalogAdminsThresholdMessage
     */
    requiresCouponCode?: boolean;
    /**
     * 
     * @type {ThresholdMessageLocalizedContent}
     * @memberof CatalogAdminsThresholdMessage
     */
    content?: ThresholdMessageLocalizedContent;
    /**
     * Container for the language-specific name of the threshold message. You will have a container for each supported language (LocaleCode).
     * This enables you to display the message in multiple languages yet manage it as a single message internally.
     * @type {Array<ThresholdMessageLocalizedContent>}
     * @memberof CatalogAdminsThresholdMessage
     */
    localizedContent?: Array<ThresholdMessageLocalizedContent> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CatalogAdminsThresholdMessage
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * 
 * @export
 * @interface CategoryAttributeCollection
 */
export interface CategoryAttributeCollection {
    /**
     * 
     * @type {number}
     * @memberof CategoryAttributeCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof CategoryAttributeCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof CategoryAttributeCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof CategoryAttributeCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<CatalogAdminsCategoryAttribute>}
     * @memberof CategoryAttributeCollection
     */
    items?: Array<CatalogAdminsCategoryAttribute> | null;
}
/**
 * Represents a product category and quantity constraint
 * @export
 * @interface CategoryDiscountCondition
 */
export interface CategoryDiscountCondition {
    /**
     * Unique identifier of the category to which the discount condition applies.
     * @type {number}
     * @memberof CategoryDiscountCondition
     */
    categoryId?: number;
}
/**
 * Container for language-specific content to display on the storefront. You'll have a container for each supported language (LocaleCode). This enables you to display a category in multiple languages yet manage it as a single category internally.
 * @export
 * @interface CategoryLocalizedContent
 */
export interface CategoryLocalizedContent {
    /**
     * List of images associated with the category.
     * @type {Array<CategoryLocalizedImage>}
     * @memberof CategoryLocalizedContent
     */
    categoryImages?: Array<CategoryLocalizedImage> | null;
    /**
     * Name of the category.
     * @type {string}
     * @memberof CategoryLocalizedContent
     */
    name?: string | null;
    /**
     * Description of the category to display on the storefront.
     * @type {string}
     * @memberof CategoryLocalizedContent
     */
    description?: string | null;
    /**
     * Title that appears at the top of new pages.
     * @type {string}
     * @memberof CategoryLocalizedContent
     */
    pageTitle?: string | null;
    /**
     * Lanugage used for category content. Currently, only en_US is supported.
     * @type {string}
     * @memberof CategoryLocalizedContent
     */
    localeCode?: string | null;
    /**
     * Metadata title. Metadata can be used to manage information internally. Sometimes used for SEO.
     * @type {string}
     * @memberof CategoryLocalizedContent
     */
    metaTagTitle?: string | null;
    /**
     * Metadata description. Metadata can be used to manage information internally. Sometimes used for SEO.
     * @type {string}
     * @memberof CategoryLocalizedContent
     */
    metaTagDescription?: string | null;
    /**
     * Metadata keywords. Metadata can be used to manage information internally. Sometimes used for SEO.
     * @type {string}
     * @memberof CategoryLocalizedContent
     */
    metaTagKeywords?: string | null;
    /**
     * Human-readable identifier that you can give to the category to create friendly URLs. For example, 
     * instead of "http: //example.com/products?category=2&id=25," the friendly URL can be "http: //example.com/products/category/2/25."
     * @type {string}
     * @memberof CategoryLocalizedContent
     */
    slug?: string | null;
}
/**
 * Contains the image label and alternate text for a category image or video in the language specified by LocalCode.
 * @export
 * @interface CategoryLocalizedImage
 */
export interface CategoryLocalizedImage {
    /**
     * Unique identifier of the image. System-supplied and read-only.
     * @type {number}
     * @memberof CategoryLocalizedImage
     */
    id?: number | null;
    /**
     * Language used for the image content.
     * @type {string}
     * @memberof CategoryLocalizedImage
     */
    localeCode?: string | null;
    /**
     * Image title that appears on the storefront.
     * @type {string}
     * @memberof CategoryLocalizedImage
     */
    imageLabel?: string | null;
    /**
     * Descriptive text associated with the image or video that appears on the storefront.
     * @type {string}
     * @memberof CategoryLocalizedImage
     */
    altText?: string | null;
    /**
     * URL of the image.
     * @type {string}
     * @memberof CategoryLocalizedImage
     */
    imageUrl?: string | null;
    /**
     * Id of the image in the CMS.
     * @type {string}
     * @memberof CategoryLocalizedImage
     */
    cmsId?: string | null;
    /**
     * URL of a video associated with the category.
     * @type {string}
     * @memberof CategoryLocalizedImage
     */
    videoUrl?: string | null;
    /**
     * Type of media. Used by the client to determine how to render the image or video or what have you.
     * @type {string}
     * @memberof CategoryLocalizedImage
     */
    mediaType?: string | null;
    /**
     * For categories with multiple images, the order in which this image appears on the storefront.
     * @type {number}
     * @memberof CategoryLocalizedImage
     */
    sequence?: number | null;
}
/**
 * List of JsonPatch operations to be applied to a Mozu.ProductAdmin.Contracts.Product
 * @export
 * @interface ChangeProductTypeAction
 */
export interface ChangeProductTypeAction {
    /**
     * Product code of the target product
     * @type {string}
     * @memberof ChangeProductTypeAction
     */
    productCode?: string | null;
    /**
     * Whether to ignore data loss.
     * If true, data loss will be ignored.
     * If false, the product will not be updated when warnings are encountered
     * @type {boolean}
     * @memberof ChangeProductTypeAction
     */
    ignoreDataLoss?: boolean;
    /**
     * Whether to run in test mode.  If true, no changes will be made.
     * @type {boolean}
     * @memberof ChangeProductTypeAction
     */
    testMode?: boolean;
    /**
     * 
     * @type {ProductV1PatchDocument}
     * @memberof ChangeProductTypeAction
     */
    patches?: ProductV1PatchDocument;
    /**
     * If true and publishing is enabled, actions are applied to a draft version of the product and then the draft is published otherwise
     * changes are saved to the live product.
     * @type {boolean}
     * @memberof ChangeProductTypeAction
     */
    saveAndPublish?: boolean;
}
/**
 * Settings to control product search and indexing behavior
 * @export
 * @interface CollapseSettings
 */
export interface CollapseSettings {
    /**
     * 
     * @type {boolean}
     * @memberof CollapseSettings
     */
    collapseSiteSearch?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CollapseSettings
     */
    collapseListing?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof CollapseSettings
     */
    collapseFieldName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CollapseSettings
     */
    boostFieldName?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CollapseSettings
     */
    boostRankSiteSearch?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CollapseSettings
     */
    boostRankListing?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CollapseSettings
     */
    useFieldCache?: boolean | null;
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
 * 
 * @export
 * @interface ContinuityRecurrenceSettings
 */
export interface ContinuityRecurrenceSettings {
    /**
     * Continuity ordinal to start discounting
     * @type {number}
     * @memberof ContinuityRecurrenceSettings
     */
    startOrdinal?: number | null;
    /**
     * Interval until next discount applies
     * @type {number}
     * @memberof ContinuityRecurrenceSettings
     */
    interval?: number | null;
    /**
     * Continuity ordinal to stop discounting
     * @type {number}
     * @memberof ContinuityRecurrenceSettings
     */
    stopOrdinal?: number | null;
}
/**
 * Coupon in a coupon set.
 * @export
 * @interface Coupon
 */
export interface Coupon {
    /**
     * ReadOnly system id for releated couponset.
     * @type {number}
     * @memberof Coupon
     */
    couponSetId?: number;
    /**
     * Link to associated coupon
     * @type {string}
     * @memberof Coupon
     */
    couponSetCode?: string | null;
    /**
     * The code the customer uses to claim this coupon
     * @type {string}
     * @memberof Coupon
     */
    couponCode: string;
    /**
     * 
     * @type {boolean}
     * @memberof Coupon
     */
    canBeDeleted?: boolean;
    /**
     * Total number of times this code has been redeemed. ReadOnly, calculated.
     * Only returned with response group includeCounts
     * @type {number}
     * @memberof Coupon
     */
    redemptionCount?: number | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof Coupon
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * 
 * @export
 * @interface CouponCollection
 */
export interface CouponCollection {
    /**
     * 
     * @type {number}
     * @memberof CouponCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof CouponCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof CouponCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof CouponCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<Coupon>}
     * @memberof CouponCollection
     */
    items?: Array<Coupon> | null;
}
/**
 * Represents a claimable item that allows a user to use one or more discounts.
 * @export
 * @interface CouponSet
 */
export interface CouponSet {
    /**
     * Internal unique identifier of the couponset. System-supplied and read-only.
     * @type {number}
     * @memberof CouponSet
     */
    id?: number | null;
    /**
     * Unique tenant supplied identifier.
     * Used as the prefix for generated sets.
     * Required
     * System generated if left null.
     * @type {string}
     * @memberof CouponSet
     */
    couponSetCode?: string | null;
    /**
     * CouponSet Name
     * @type {string}
     * @memberof CouponSet
     */
    name: string;
    /**
     * Determines if the coupon is a persisted list of codes (static) or a list based on generated specification
     * (dynamic).
     * @type {string}
     * @memberof CouponSet
     */
    couponCodeType?: string | null;
    /**
     * CouponSet status which can be: Active, Expired,  Inactive
     * System-supplied and read-only.
     * @type {string}
     * @memberof CouponSet
     */
    status?: string | null;
    /**
     * Signifies that the coupon has not been exported and can be updated
     * ReadOnly
     * @type {boolean}
     * @memberof CouponSet
     */
    canBeDeleted?: boolean;
    /**
     * Maximum number of times any single user can redeem any code.
     * Must be null, >=1 or -1.
     * Defaults to 1 on creation if null.
     * -1 indicates unlimited.
     * @type {number}
     * @memberof CouponSet
     */
    maxRedemptionsPerUser?: number | null;
    /**
     * Maximum number of times any code can de used.
     * Must be null, >=1 or -1.
     * Defaults to 1 on creation if null.
     * -1 indicates unlimited.
     * @type {number}
     * @memberof CouponSet
     */
    maxRedemptionsPerCouponCode?: number | null;
    /**
     * Date and time that the coupon codes becomes expired
     * @type {string}
     * @memberof CouponSet
     */
    endDate?: string | null;
    /**
     * Date and time that the coupon codes becomes active
     * @type {string}
     * @memberof CouponSet
     */
    startDate?: string | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CouponSet
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * Sets the number of codes to generate for dynamic coupons
     * Required when CouponCodeType is "Dynamic"
     * @type {number}
     * @memberof CouponSet
     */
    setSize?: number | null;
    /**
     * Count of associated couponCodes.
     * Must use "counts" response group to get this value
     * ReadOnly
     * @type {number}
     * @memberof CouponSet
     */
    couponCodeCount?: number | null;
    /**
     * ReadOnly count of all redemptions for this coupon set.
     * @type {number}
     * @memberof CouponSet
     */
    redemptionCount?: number | null;
    /**
     * ReadOnly sum of all redemptions for this coupon.
     * Use "counts" response group.
     * @type {number}
     * @memberof CouponSet
     */
    assignedDiscountCount?: number | null;
}
/**
 * Paged collection of Mozu.ProductAdmin.Contracts.CouponSet
 * @export
 * @interface CouponSetCollection
 */
export interface CouponSetCollection {
    /**
     * 
     * @type {number}
     * @memberof CouponSetCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof CouponSetCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof CouponSetCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof CouponSetCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<CouponSet>}
     * @memberof CouponSetCollection
     */
    items?: Array<CouponSet> | null;
}
/**
 * Non-pages collection of currency-exchange-rates.
 * @export
 * @interface CurrencyExchangeRateCollection
 */
export interface CurrencyExchangeRateCollection {
    /**
     * 
     * @type {number}
     * @memberof CurrencyExchangeRateCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<CatalogAdminsCurrencyExchangeRate>}
     * @memberof CurrencyExchangeRateCollection
     */
    items?: Array<CatalogAdminsCurrencyExchangeRate> | null;
}
/**
 * A currency and some localization options
 * @export
 * @interface CurrencyLocalization
 */
export interface CurrencyLocalization {
    /**
     * Currency Code
     * @type {string}
     * @memberof CurrencyLocalization
     */
    currencyCode?: string | null;
    /**
     * Number of decimal places to round to
     * @type {number}
     * @memberof CurrencyLocalization
     */
    decimalPlaces?: number | null;
    /**
     * The rounding strategy to use
     * @type {number}
     * @memberof CurrencyLocalization
     */
    roundingStrategy?: number | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CurrencyLocalization
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * Non-pages collection of currency-localizations.
 * @export
 * @interface CurrencyLocalizationCollection
 */
export interface CurrencyLocalizationCollection {
    /**
     * 
     * @type {number}
     * @memberof CurrencyLocalizationCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<CurrencyLocalization>}
     * @memberof CurrencyLocalizationCollection
     */
    items?: Array<CurrencyLocalization> | null;
}
/**
 * Container for the language-specific name of the discount. You will have a container for each supported language
 * (LocaleCode).
 * This enables you to display the discount name in multiple languages yet manage it as a single discount internally.
 * @export
 * @interface DiscountLocalizedContent
 */
export interface DiscountLocalizedContent {
    /**
     * Lanugage used for the discount in the current catalog. Defaults setting for the active catalog.
     * @type {string}
     * @memberof DiscountLocalizedContent
     */
    localeCode?: string | null;
    /**
     * Name of the discount.
     * @type {string}
     * @memberof DiscountLocalizedContent
     */
    name: string;
    /**
     * Promotional text or HTML that can be utilized as friendly content like "Buy this product now and get X!"
     * @type {string}
     * @memberof DiscountLocalizedContent
     */
    friendlyDescription?: string | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof DiscountLocalizedContent
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * Tenant level discount settings
 * @export
 * @interface DiscountSettings
 */
export interface DiscountSettings {
    /**
     * 
     * @type {StackingConfiguration}
     * @memberof DiscountSettings
     */
    stackingConfiguration?: StackingConfiguration;
    /**
     * Use the pre or post line item discounts order total to evaluate the order minimum constraint
     * @type {boolean}
     * @memberof DiscountSettings
     */
    usePostDiscountedOrderValue?: boolean | null;
    /**
     * Prevents discounts from applying to handling fees
     * @type {boolean}
     * @memberof DiscountSettings
     */
    doNotApplyToHandlingFees?: boolean | null;
}
/**
 * 
 * @export
 * @interface DiscountTag
 */
export interface DiscountTag {
    /**
     * 
     * @type {number}
     * @memberof DiscountTag
     */
    discountId?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof DiscountTag
     */
    tagCodes?: Array<string> | null;
}
/**
 * Collection of discounts returned as a whole. A collection is not paged.
 * @export
 * @interface DiscountTagCollection
 */
export interface DiscountTagCollection {
    /**
     * 
     * @type {number}
     * @memberof DiscountTagCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof DiscountTagCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof DiscountTagCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof DiscountTagCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<DiscountTag>}
     * @memberof DiscountTagCollection
     */
    items?: Array<DiscountTag> | null;
}
/**
 * Category
 * @export
 * @interface DynamicExpression
 */
export interface DynamicExpression {
    /**
     * 
     * @type {string}
     * @memberof DynamicExpression
     */
    text?: string | null;
    /**
     * 
     * @type {Expression}
     * @memberof DynamicExpression
     */
    tree?: Expression;
}
/**
 * 
 * @export
 * @interface Expression
 */
export interface Expression {
    /**
     * Container or Predicate
     * @type {string}
     * @memberof Expression
     */
    type?: string | null;
    /**
     * And or Or (if Container with More than one Node)
     * @type {string}
     * @memberof Expression
     */
    logicalOperator?: string | null;
    /**
     * 
     * @type {Array<Expression>}
     * @memberof Expression
     */
    nodes?: Array<Expression> | null;
    /**
     * The field target of a predicate
     * @type {string}
     * @memberof Expression
     */
    left?: string | null;
    /**
     * The operator of a predicate
     * @type {string}
     * @memberof Expression
     */
    operator?: string | null;
    /**
     * The literal values of a predicate
     * @type {any}
     * @memberof Expression
     */
    right?: any | null;
}
/**
 * 
 * @export
 * @interface ExpressionValidationError
 */
export interface ExpressionValidationError {
    /**
     * 
     * @type {string}
     * @memberof ExpressionValidationError
     */
    message?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExpressionValidationError
     */
    expression?: string | null;
}
/**
 * 
 * @export
 * @interface ExpressionValidationResult
 */
export interface ExpressionValidationResult {
    /**
     * 
     * @type {boolean}
     * @memberof ExpressionValidationResult
     */
    readonly hasErrors?: boolean;
    /**
     * 
     * @type {Array<ExpressionValidationError>}
     * @memberof ExpressionValidationResult
     */
    errors?: Array<ExpressionValidationError> | null;
}
/**
 * 
 * @export
 * @interface ExtensibleAttribute
 */
export interface ExtensibleAttribute {
    /**
     * 
     * @type {number}
     * @memberof ExtensibleAttribute
     */
    id?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ExtensibleAttribute
     */
    adminName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExtensibleAttribute
     */
    namespace?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExtensibleAttribute
     */
    attributeCode: string;
    /**
     * 
     * @type {string}
     * @memberof ExtensibleAttribute
     */
    inputType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExtensibleAttribute
     */
    valueType: string;
    /**
     * 
     * @type {string}
     * @memberof ExtensibleAttribute
     */
    dataType?: string | null;
    /**
     * 
     * @type {Array<ExtensibleAttributeMetadataItem>}
     * @memberof ExtensibleAttribute
     */
    attributeMetadata?: Array<ExtensibleAttributeMetadataItem> | null;
    /**
     * 
     * @type {string}
     * @memberof ExtensibleAttribute
     */
    attributeFQN?: string | null;
    /**
     * 
     * @type {ExtensibleAttributeLocalizedContent}
     * @memberof ExtensibleAttribute
     */
    content?: ExtensibleAttributeLocalizedContent;
    /**
     * 
     * @type {ExtensibleAttributeValidation}
     * @memberof ExtensibleAttribute
     */
    validation?: ExtensibleAttributeValidation;
    /**
     * 
     * @type {Array<ExtensibleAttributeVocabularyValue>}
     * @memberof ExtensibleAttribute
     */
    vocabularyValues?: Array<ExtensibleAttributeVocabularyValue> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof ExtensibleAttribute
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {boolean}
     * @memberof ExtensibleAttribute
     */
    isActive?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof ExtensibleAttribute
     */
    isRequired?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof ExtensibleAttribute
     */
    isReadOnly?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ExtensibleAttribute
     */
    isMultiValued?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof ExtensibleAttribute
     */
    isVisible?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof ExtensibleAttribute
     */
    order?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ExtensibleAttribute
     */
    displayGroup: string;
    /**
     * 
     * @type {boolean}
     * @memberof ExtensibleAttribute
     */
    availableForOrderRouting?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ExtensibleAttribute
     */
    availableForDiscounts?: boolean;
}
/**
 * 
 * @export
 * @interface ExtensibleAttributeCollection
 */
export interface ExtensibleAttributeCollection {
    /**
     * 
     * @type {number}
     * @memberof ExtensibleAttributeCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof ExtensibleAttributeCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof ExtensibleAttributeCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof ExtensibleAttributeCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<ExtensibleAttribute>}
     * @memberof ExtensibleAttributeCollection
     */
    items?: Array<ExtensibleAttribute> | null;
}
/**
 * 
 * @export
 * @interface ExtensibleAttributeLocalizedContent
 */
export interface ExtensibleAttributeLocalizedContent {
    /**
     * 
     * @type {string}
     * @memberof ExtensibleAttributeLocalizedContent
     */
    localeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExtensibleAttributeLocalizedContent
     */
    value?: string | null;
}
/**
 * 
 * @export
 * @interface ExtensibleAttributeMetadataItem
 */
export interface ExtensibleAttributeMetadataItem {
    /**
     * 
     * @type {string}
     * @memberof ExtensibleAttributeMetadataItem
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof ExtensibleAttributeMetadataItem
     */
    value: string;
}
/**
 * 
 * @export
 * @interface ExtensibleAttributeValidation
 */
export interface ExtensibleAttributeValidation {
    /**
     * 
     * @type {string}
     * @memberof ExtensibleAttributeValidation
     */
    regularExpression?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ExtensibleAttributeValidation
     */
    minStringLength?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ExtensibleAttributeValidation
     */
    maxStringLength?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ExtensibleAttributeValidation
     */
    minNumericValue?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ExtensibleAttributeValidation
     */
    maxNumericValue?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ExtensibleAttributeValidation
     */
    minDateTime?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExtensibleAttributeValidation
     */
    maxDateTime?: string | null;
}
/**
 * 
 * @export
 * @interface ExtensibleAttributeValueLocalizedContent
 */
export interface ExtensibleAttributeValueLocalizedContent {
    /**
     * 
     * @type {string}
     * @memberof ExtensibleAttributeValueLocalizedContent
     */
    localeCode: string;
    /**
     * 
     * @type {string}
     * @memberof ExtensibleAttributeValueLocalizedContent
     */
    value: string;
}
/**
 * 
 * @export
 * @interface ExtensibleAttributeVocabularyValue
 */
export interface ExtensibleAttributeVocabularyValue {
    /**
     * 
     * @type {string}
     * @memberof ExtensibleAttributeVocabularyValue
     */
    value: string;
    /**
     * 
     * @type {number}
     * @memberof ExtensibleAttributeVocabularyValue
     */
    sequence?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof ExtensibleAttributeVocabularyValue
     */
    isHidden?: boolean | null;
    /**
     * 
     * @type {ExtensibleAttributeValueLocalizedContent}
     * @memberof ExtensibleAttributeVocabularyValue
     */
    content?: ExtensibleAttributeValueLocalizedContent;
}
/**
 * 
 * @export
 * @interface FacetCollection
 */
export interface FacetCollection {
    /**
     * 
     * @type {number}
     * @memberof FacetCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof FacetCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof FacetCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof FacetCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<CatalogAdminsFacet>}
     * @memberof FacetCollection
     */
    items?: Array<CatalogAdminsFacet> | null;
}
/**
 * 
 * @export
 * @interface FacetRangeQuery
 */
export interface FacetRangeQuery {
    /**
     * 
     * @type {any}
     * @memberof FacetRangeQuery
     */
    rangeValueStart?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FacetRangeQuery
     */
    rangeValueEnd?: any | null;
}
/**
 * 
 * @export
 * @interface FacetSet
 */
export interface FacetSet {
    /**
     * Facets that are configured
     * @type {Array<CatalogAdminsFacet>}
     * @memberof FacetSet
     */
    configured?: Array<CatalogAdminsFacet> | null;
    /**
     * Facets that are not configured, but COULD BE!
     * @type {Array<FacetSource>}
     * @memberof FacetSet
     */
    available?: Array<FacetSource> | null;
}
/**
 * 
 * @export
 * @interface FacetSource
 */
export interface FacetSource {
    /**
     * Name of field, or FQN of attribute
     * @type {string}
     * @memberof FacetSource
     */
    id?: string | null;
    /**
     * The type of source field used by the facet. Allowable values are: Element, Attribute. 
     * Must be a valid value for DataType defined in FacetFieldTypeConst.
     * @type {string}
     * @memberof FacetSource
     */
    type?: string | null;
    /**
     * Read-only system-generated label for the source field.
     * @type {string}
     * @memberof FacetSource
     */
    name?: string | null;
    /**
     * Read-only system-generated DataType of the Attribute or Element source field. Will be valid value for DataType defined in DataTypeConst.
     * @type {string}
     * @memberof FacetSource
     */
    dataType?: string | null;
    /**
     * Read-only system-generated indicator of whether the source field supports RangeQuery type facets.
     * @type {boolean}
     * @memberof FacetSource
     */
    allowsRangeQuery?: boolean;
}
/**
 * 
 * @export
 * @interface FacetValidity
 */
export interface FacetValidity {
    /**
     * 
     * @type {boolean}
     * @memberof FacetValidity
     */
    isValid?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FacetValidity
     */
    reasonCode?: string | null;
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
 * 
 * @export
 * @interface FieldWeight
 */
export interface FieldWeight {
    /**
     * field in the index to target
     * @type {string}
     * @memberof FieldWeight
     */
    searchFieldName?: string | null;
    /**
     * weight to apply to boost field
     * @type {number}
     * @memberof FieldWeight
     */
    weight?: number;
}
/**
 * 
 * @export
 * @interface ListingSettings
 */
export interface ListingSettings {
    /**
     * 
     * @type {Array<string>}
     * @memberof ListingSettings
     */
    customBoosts?: Array<string> | null;
    /**
     * 
     * @type {FieldValueBoost}
     * @memberof ListingSettings
     */
    fieldValueBoost?: FieldValueBoost;
    /**
     * 
     * @type {string}
     * @memberof ListingSettings
     */
    personalizationExperience?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ListingSettings
     */
    personalizationFactor?: number | null;
}
/**
 * Collection of MasterCatalogs
 * @export
 * @interface MasterCatalogCollection
 */
export interface MasterCatalogCollection {
    /**
     * 
     * @type {number}
     * @memberof MasterCatalogCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<CatalogAdminsMasterCatalog>}
     * @memberof MasterCatalogCollection
     */
    items?: Array<CatalogAdminsMasterCatalog> | null;
}
/**
 * Category
 * @export
 * @interface PriceListBulkResult
 */
export interface PriceListBulkResult {
    /**
     * 
     * @type {number}
     * @memberof PriceListBulkResult
     */
    successCount?: number;
    /**
     * 
     * @type {number}
     * @memberof PriceListBulkResult
     */
    failureCount?: number;
    /**
     * 
     * @type {Array<PriceListEntryFailure>}
     * @memberof PriceListBulkResult
     */
    failureDetails?: Array<PriceListEntryFailure> | null;
}
/**
 * Collection of categories returned as a whole. A collection is not paged.
 * @export
 * @interface PriceListCollection
 */
export interface PriceListCollection {
    /**
     * 
     * @type {number}
     * @memberof PriceListCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof PriceListCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof PriceListCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof PriceListCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<CatalogAdminsPriceList>}
     * @memberof PriceListCollection
     */
    items?: Array<CatalogAdminsPriceList> | null;
}
/**
 * Category
 * @export
 * @interface PriceListEntry
 */
export interface PriceListEntry {
    /**
     * External unique identifier of the PriceList. Must be unique an only contain url sanitized characters. Max length is
     * 50
     * @type {string}
     * @memberof PriceListEntry
     */
    priceListCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PriceListEntry
     */
    priceListEntrySequence?: number;
    /**
     * 
     * @type {string}
     * @memberof PriceListEntry
     */
    productCode: string;
    /**
     * 
     * @type {string}
     * @memberof PriceListEntry
     */
    productName?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof PriceListEntry
     */
    isVariation?: boolean;
    /**
     * 
     * @type {Array<CatalogAdminsProductOption>}
     * @memberof PriceListEntry
     */
    options?: Array<CatalogAdminsProductOption> | null;
    /**
     * 
     * @type {string}
     * @memberof PriceListEntry
     */
    currencyCode: string;
    /**
     * 
     * @type {string}
     * @memberof PriceListEntry
     */
    startDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PriceListEntry
     */
    endDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PriceListEntry
     */
    priceListEntryMode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PriceListEntry
     */
    priceListEntryTypeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PriceListEntry
     */
    discountsRestrictedMode?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof PriceListEntry
     */
    discountsRestricted?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof PriceListEntry
     */
    discountsRestrictedStartDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PriceListEntry
     */
    discountsRestrictedEndDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PriceListEntry
     */
    msrpMode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PriceListEntry
     */
    msrp?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PriceListEntry
     */
    mapMode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PriceListEntry
     */
    map?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PriceListEntry
     */
    mapStartDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PriceListEntry
     */
    mapEndDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PriceListEntry
     */
    costMode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PriceListEntry
     */
    cost?: number | null;
    /**
     * 
     * @type {Array<PriceListEntryPrice>}
     * @memberof PriceListEntry
     */
    priceEntries?: Array<PriceListEntryPrice> | null;
    /**
     * 
     * @type {Array<PriceListEntryExtra>}
     * @memberof PriceListEntry
     */
    extraEntries?: Array<PriceListEntryExtra> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof PriceListEntry
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * Collection of categories returned as a whole. A collection is not paged.
 * @export
 * @interface PriceListEntryCollection
 */
export interface PriceListEntryCollection {
    /**
     * 
     * @type {number}
     * @memberof PriceListEntryCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof PriceListEntryCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof PriceListEntryCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof PriceListEntryCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<PriceListEntry>}
     * @memberof PriceListEntryCollection
     */
    items?: Array<PriceListEntry> | null;
}
/**
 * Extra for an entry on a price list
 * @export
 * @interface PriceListEntryExtra
 */
export interface PriceListEntryExtra {
    /**
     * AttributeFQN of the extra
     * ReadOnly
     * @type {string}
     * @memberof PriceListEntryExtra
     */
    attributeFQN: string;
    /**
     * The value stored with the extra
     * ReadOnly
     * @type {any}
     * @memberof PriceListEntryExtra
     */
    value?: any | null;
    /**
     * PriceList price for the extra
     * @type {number}
     * @memberof PriceListEntryExtra
     */
    price?: number;
    /**
     * AttributeCode.
     * ReadOnly
     * @type {string}
     * @memberof PriceListEntryExtra
     */
    attributeCode?: string | null;
    /**
     * Value to display.  Currently only vaild when Value is a string type.
     * ReadOnly
     * @type {string}
     * @memberof PriceListEntryExtra
     */
    displayValue?: string | null;
}
/**
 * 
 * @export
 * @interface PriceListEntryFailure
 */
export interface PriceListEntryFailure {
    /**
     * 
     * @type {string}
     * @memberof PriceListEntryFailure
     */
    priceListCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PriceListEntryFailure
     */
    productCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PriceListEntryFailure
     */
    currencyCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PriceListEntryFailure
     */
    startDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PriceListEntryFailure
     */
    msg?: string | null;
}
/**
 * 
 * @export
 * @interface PriceListEntryPrice
 */
export interface PriceListEntryPrice {
    /**
     * 
     * @type {number}
     * @memberof PriceListEntryPrice
     */
    minQty?: number;
    /**
     * 
     * @type {string}
     * @memberof PriceListEntryPrice
     */
    listPriceMode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PriceListEntryPrice
     */
    listPrice?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PriceListEntryPrice
     */
    salePriceMode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PriceListEntryPrice
     */
    salePrice?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PriceListEntryPrice
     */
    subscriptionPriceMode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PriceListEntryPrice
     */
    subscriptionPrice?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PriceListEntryPrice
     */
    subscriptionSalePriceMode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PriceListEntryPrice
     */
    subscriptionSalePrice?: number | null;
}
/**
 * Categories to which the product belongs.
 * @export
 * @interface ProductCategory
 */
export interface ProductCategory {
    /**
     * Unique identifier of the category. System-supplied and read-only.
     * @type {number}
     * @memberof ProductCategory
     */
    categoryId?: number;
}
/**
 * A tuple used to rename the productCode of a product
 * @export
 * @interface ProductCodeRename
 */
export interface ProductCodeRename {
    /**
     * The existing ProductCode that should be renamed
     * @type {string}
     * @memberof ProductCodeRename
     */
    existingProductCode?: string | null;
    /**
     * The new ProductCode that will be the result of the rename
     * @type {string}
     * @memberof ProductCodeRename
     */
    newProductCode?: string | null;
}
/**
 * List of products that belong to a product collection product.
 * @export
 * @interface ProductCollectionProduct
 */
export interface ProductCollectionProduct {
    /**
     * 
     * @type {CatalogAdminsProductCollectionMemberKey}
     * @memberof ProductCollectionProduct
     */
    memberKey?: CatalogAdminsProductCollectionMemberKey;
    /**
     * ReadOnly Indicates the usage type of this product. Must be one of the values in ProductUsageConst.
     * @type {string}
     * @memberof ProductCollectionProduct
     */
    productUsage?: string | null;
    /**
     * 
     * @type {ProductLocalizedContent}
     * @memberof ProductCollectionProduct
     */
    content?: ProductLocalizedContent;
    /**
     * 
     * @type {CatalogAdminsProductPrice}
     * @memberof ProductCollectionProduct
     */
    price?: CatalogAdminsProductPrice;
}
/**
 * Collection of products returned as a whole. A collection is not paged.
 * @export
 * @interface ProductCollectionV1
 */
export interface ProductCollectionV1 {
    /**
     * 
     * @type {number}
     * @memberof ProductCollectionV1
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductCollectionV1
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductCollectionV1
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductCollectionV1
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<ProductV1>}
     * @memberof ProductCollectionV1
     */
    items?: Array<ProductV1> | null;
}
/**
 * Represents a product and quantity constraint
 * @export
 * @interface ProductDiscountCondition
 */
export interface ProductDiscountCondition {
    /**
     * Product code of the product to discount.
     * @type {string}
     * @memberof ProductDiscountCondition
     */
    productCode?: string | null;
}
/**
 * Product options for configurable or stand-alone products. A configurable option is one that the shopper chooses when ordering, for example, 
 * the color of a T-shirt. A stand-alone option is independent of the product and can be added to the product order. For example, a monogram.
 * @export
 * @interface ProductExtra
 */
export interface ProductExtra {
    /**
     * Unique identifier of the Attribute.
     * @type {string}
     * @memberof ProductExtra
     */
    attributeFQN?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ProductExtra
     */
    isRequired?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof ProductExtra
     */
    isMultiSelect?: boolean | null;
    /**
     * 
     * @type {Array<ProductExtraValue>}
     * @memberof ProductExtra
     */
    values?: Array<ProductExtraValue> | null;
}
/**
 * A value of a product option for this product. For example, a computer product may have an option called "Memory" that can have the values "6GB,"8GB," and "12GB."
 * @export
 * @interface ProductExtraValue
 */
export interface ProductExtraValue {
    /**
     * 
     * @type {any}
     * @memberof ProductExtraValue
     */
    value?: any | null;
    /**
     * 
     * @type {ProductExtraValueDeltaPrice}
     * @memberof ProductExtraValue
     */
    deltaPrice?: ProductExtraValueDeltaPrice;
    /**
     * 
     * @type {Array<ProductExtraValueDeltaPrice>}
     * @memberof ProductExtraValue
     */
    localizedDeltaPrice?: Array<ProductExtraValueDeltaPrice> | null;
    /**
     * 
     * @type {number}
     * @memberof ProductExtraValue
     */
    deltaWeight?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof ProductExtraValue
     */
    isDefaulted?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof ProductExtraValue
     */
    quantity?: number | null;
    /**
     * 
     * @type {CatalogAdminsAttributeVocabularyValue}
     * @memberof ProductExtraValue
     */
    attributeVocabularyValueDetail?: CatalogAdminsAttributeVocabularyValue;
}
/**
 * How much a product option costs above the cost of the base product, if at all.
 * @export
 * @interface ProductExtraValueDeltaPrice
 */
export interface ProductExtraValueDeltaPrice {
    /**
     * Which currency to use.
     * @type {string}
     * @memberof ProductExtraValueDeltaPrice
     */
    currencyCode?: string | null;
    /**
     * Amount of money saved when discounts are applied.
     * @type {number}
     * @memberof ProductExtraValueDeltaPrice
     */
    deltaPrice?: number;
}
/**
 * Use the Products resource to create and manage products for your store.
 * You can create products with options that a shopper configures
 * (such as a T-shirt color and size). The system can manage inventory for all
 * combinations of your product options, and can calculate tax and shipping costs.
 * @export
 * @interface ProductInCatalogInfo
 */
export interface ProductInCatalogInfo {
    /**
     * The CatalogId of the catalog that the product is associated with (The catalog must a valid catalog within the MasterCatalog that the product belongs to)
     * @type {number}
     * @memberof ProductInCatalogInfo
     */
    catalogId?: number;
    /**
     * If true, the product is marked as available for sale in the catalog. Setting a product to IsActive = false will prevent it from being shown on the customer facing storefront.
     * @type {boolean}
     * @memberof ProductInCatalogInfo
     */
    isActive?: boolean | null;
    /**
     * If true, the price for this product is overridden in the catalog. If false, the MasterCatalog level price will be used for the product.
     * @type {boolean}
     * @memberof ProductInCatalogInfo
     */
    isPriceOverridden?: boolean | null;
    /**
     * 
     * @type {CatalogAdminsProductPrice}
     * @memberof ProductInCatalogInfo
     */
    price?: CatalogAdminsProductPrice;
    /**
     * Categories to which the product belongs for this catalog.
     * @type {Array<ProductCategory>}
     * @memberof ProductInCatalogInfo
     */
    productCategories?: Array<ProductCategory> | null;
    /**
     * 
     * @type {ProductCategory}
     * @memberof ProductInCatalogInfo
     */
    primaryProductCategory?: ProductCategory;
    /**
     * Date this product was first Available for sale in the catalog. This is utilized in expressions that reference DaysInCatloag.
     * @type {string}
     * @memberof ProductInCatalogInfo
     */
    dateFirstAvailableInCatalog?: string | null;
    /**
     * 
     * @type {CatalogAdminsActiveDateRange}
     * @memberof ProductInCatalogInfo
     */
    activeDateRange?: CatalogAdminsActiveDateRange;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof ProductInCatalogInfo
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * Use the Products resource to create and manage products for your store.
 * You can create products with options that a shopper configures
 * (such as a T-shirt color and size). The system can manage inventory for all
 * combinations of your product options, and can calculate tax and shipping costs.
 * @export
 * @interface ProductInCatalogInfoV1
 */
export interface ProductInCatalogInfoV1 {
    /**
     * The CatalogId of the catalog that the product is associated with (The catalog must a valid catalog within the MasterCatalog that the product belongs to)
     * @type {number}
     * @memberof ProductInCatalogInfoV1
     */
    catalogId?: number;
    /**
     * If true, the product is marked as available for sale in the catalog. Setting a product to IsActive = false will prevent it from being shown on the customer facing storefront.
     * @type {boolean}
     * @memberof ProductInCatalogInfoV1
     */
    isActive?: boolean | null;
    /**
     * If true, the content for this product is overridden in the catalog. If false, the MasterCatalog level content will be used for the product.
     * @type {boolean}
     * @memberof ProductInCatalogInfoV1
     */
    isContentOverridden?: boolean | null;
    /**
     * 
     * @type {ProductLocalizedContent}
     * @memberof ProductInCatalogInfoV1
     */
    content?: ProductLocalizedContent;
    /**
     * If true, the price for this product is overridden in the catalog. If false, the MasterCatalog level price will be used for the product.
     * @type {boolean}
     * @memberof ProductInCatalogInfoV1
     */
    isPriceOverridden?: boolean | null;
    /**
     * 
     * @type {CatalogAdminsProductPrice}
     * @memberof ProductInCatalogInfoV1
     */
    price?: CatalogAdminsProductPrice;
    /**
     * If true, the SEO content for this product is overridden in the catalog. If false, the MasterCatalog level SEO content will be used for the product.
     * @type {boolean}
     * @memberof ProductInCatalogInfoV1
     */
    isSEOContentOverridden?: boolean | null;
    /**
     * 
     * @type {ProductLocalizedSEOContent}
     * @memberof ProductInCatalogInfoV1
     */
    seoContent?: ProductLocalizedSEOContent;
    /**
     * Categories to which the product belongs for this catalog.
     * @type {Array<ProductCategory>}
     * @memberof ProductInCatalogInfoV1
     */
    productCategories?: Array<ProductCategory> | null;
    /**
     * 
     * @type {ProductCategory}
     * @memberof ProductInCatalogInfoV1
     */
    primaryProductCategory?: ProductCategory;
    /**
     * Date this product was first Available for sale in the catalog. This is utilized in expressions that reference DaysInCatloag.
     * @type {string}
     * @memberof ProductInCatalogInfoV1
     */
    dateFirstAvailableInCatalog?: string | null;
    /**
     * 
     * @type {CatalogAdminsActiveDateRange}
     * @memberof ProductInCatalogInfoV1
     */
    activeDateRange?: CatalogAdminsActiveDateRange;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof ProductInCatalogInfoV1
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * 
 * @export
 * @interface ProductInCatalogInfoV1PatchDocument
 */
export interface ProductInCatalogInfoV1PatchDocument {
    /**
     * 
     * @type {Array<ProductInCatalogInfoV1PatchOperation>}
     * @memberof ProductInCatalogInfoV1PatchDocument
     */
    operations?: Array<ProductInCatalogInfoV1PatchOperation> | null;
}
/**
 * 
 * @export
 * @interface ProductInCatalogInfoV1PatchOperation
 */
export interface ProductInCatalogInfoV1PatchOperation {
    /**
     * 
     * @type {any}
     * @memberof ProductInCatalogInfoV1PatchOperation
     */
    value?: any | null;
    /**
     * 
     * @type {string}
     * @memberof ProductInCatalogInfoV1PatchOperation
     */
    path?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductInCatalogInfoV1PatchOperation
     */
    op?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductInCatalogInfoV1PatchOperation
     */
    from?: string | null;
}
/**
 * List of JsonPatch operations to be applied to a Mozu.ProductAdmin.Contracts.ProductInCatalogInfo
 * @export
 * @interface ProductInCatalogPatchAction
 */
export interface ProductInCatalogPatchAction {
    /**
     * Product code of the target product
     * @type {string}
     * @memberof ProductInCatalogPatchAction
     */
    productCode?: string | null;
    /**
     * CatalogId
     * @type {number}
     * @memberof ProductInCatalogPatchAction
     */
    catalogId?: number;
    /**
     * 
     * @type {ProductInCatalogInfoV1PatchDocument}
     * @memberof ProductInCatalogPatchAction
     */
    patches?: ProductInCatalogInfoV1PatchDocument;
    /**
     * If true and publishing is enabled, actions are applied to a draft version of the product and then the draft is published otherwise
     * changes are saved to the live product.
     * @type {boolean}
     * @memberof ProductInCatalogPatchAction
     */
    saveAndPublish?: boolean;
}
/**
 * Container for language-specific content to display on the storefront. You'll have a container for each supported language (LocaleCode). This enables you to display a product in multiple languages yet manage it as a single product internally.
 * @export
 * @interface ProductLocalizedContent
 */
export interface ProductLocalizedContent {
    /**
     * Lanugage used for product content. Currently, only en_US is supported.
     * @type {string}
     * @memberof ProductLocalizedContent
     */
    localeCode?: string | null;
    /**
     * Name of the product.
     * @type {string}
     * @memberof ProductLocalizedContent
     */
    productName?: string | null;
    /**
     * Long description of the product typically used for a product details page.
     * @type {string}
     * @memberof ProductLocalizedContent
     */
    productFullDescription?: string | null;
    /**
     * Brief description of the product typically used when the product is displayed in a list or search results.
     * @type {string}
     * @memberof ProductLocalizedContent
     */
    productShortDescription?: string | null;
    /**
     * List of images associated with the product.
     * @type {Array<ProductLocalizedImage>}
     * @memberof ProductLocalizedContent
     */
    productImages?: Array<ProductLocalizedImage> | null;
}
/**
 * Contains the image label and alternate text for a product image or video in the language specified by LocalCode.
 * @export
 * @interface ProductLocalizedImage
 */
export interface ProductLocalizedImage {
    /**
     * Unique identifier of the image. System-supplied and read-only.
     * @type {number}
     * @memberof ProductLocalizedImage
     */
    id?: number | null;
    /**
     * Language used for the image content.
     * @type {string}
     * @memberof ProductLocalizedImage
     */
    localeCode?: string | null;
    /**
     * Image title that appears on the storefront.
     * @type {string}
     * @memberof ProductLocalizedImage
     */
    imageLabel?: string | null;
    /**
     * Descriptive text associated with the image or video that appears on the storefront.
     * @type {string}
     * @memberof ProductLocalizedImage
     */
    altText?: string | null;
    /**
     * URL of the image.
     * @type {string}
     * @memberof ProductLocalizedImage
     */
    imageUrl?: string | null;
    /**
     * Id of the image in the CMS.
     * @type {string}
     * @memberof ProductLocalizedImage
     */
    cmsId?: string | null;
    /**
     * URL of a video associated with the product.
     * @type {string}
     * @memberof ProductLocalizedImage
     */
    videoUrl?: string | null;
    /**
     * Type of media. Used by the client to determine how to render the image or video or what have you.
     * @type {string}
     * @memberof ProductLocalizedImage
     */
    mediaType?: string | null;
    /**
     * For products with multiple images, the order in which this image appears on the storefront.
     * @type {number}
     * @memberof ProductLocalizedImage
     */
    sequence?: number | null;
    /**
     * Image group to which this image belongs.  Default is null.
     * @type {string}
     * @memberof ProductLocalizedImage
     */
    productImageGroupId?: string | null;
}
/**
 * Container for language-specific content to display on the storefront. You'll have a container for each supported language (LocaleCode). This enables you to display a product in multiple languages yet manage it as a single product internally.
 * @export
 * @interface ProductLocalizedSEOContent
 */
export interface ProductLocalizedSEOContent {
    /**
     * Lanugage used for product content. Currently, only en_US is supported.
     * @type {string}
     * @memberof ProductLocalizedSEOContent
     */
    localeCode?: string | null;
    /**
     * Metadata title. Metadata can be used to manage information internally. Sometimes used for SEO.
     * @type {string}
     * @memberof ProductLocalizedSEOContent
     */
    metaTagTitle?: string | null;
    /**
     * Metadata description. Metadata can be used to manage information internally. Sometimes used for SEO.
     * @type {string}
     * @memberof ProductLocalizedSEOContent
     */
    metaTagDescription?: string | null;
    /**
     * Metadata keywords. Metadata can be used to manage information internally. Sometimes used for SEO.
     * @type {string}
     * @memberof ProductLocalizedSEOContent
     */
    metaTagKeywords?: string | null;
    /**
     * Used to customize the HTML title tag within the head section of the product details page
     * @type {string}
     * @memberof ProductLocalizedSEOContent
     */
    titleTagTitle?: string | null;
    /**
     * Human-readable identifier that you can give to the product to create friendly URLs. For example, 
     * instead of "http: //example.com/products?category=2&id=25," the friendly URL can be "http: //example.com/products/category/2/25."
     * @type {string}
     * @memberof ProductLocalizedSEOContent
     */
    seoFriendlyUrl?: string | null;
}
/**
 * List of JsonPatch operations to be applied to a Mozu.ProductAdmin.Contracts.Product
 * @export
 * @interface ProductPatchAction
 */
export interface ProductPatchAction {
    /**
     * Target product code
     * @type {string}
     * @memberof ProductPatchAction
     */
    productCode?: string | null;
    /**
     * 
     * @type {ProductV1PatchDocument}
     * @memberof ProductPatchAction
     */
    patches?: ProductV1PatchDocument;
    /**
     * If true and publishing is enabled, actions are applied to a draft version of the product and then the draft is published otherwise
     * changes are saved to the live product.
     * @type {boolean}
     * @memberof ProductPatchAction
     */
    saveAndPublish?: boolean;
}
/**
 * List of JsonPatch operations to be applied to a Mozu.ProductAdmin.Contracts.ProductProperty
 * @export
 * @interface ProductPropertyPatchAction
 */
export interface ProductPropertyPatchAction {
    /**
     * Product code of the target product
     * @type {string}
     * @memberof ProductPropertyPatchAction
     */
    productCode?: string | null;
    /**
     * AttributeFQN
     * @type {string}
     * @memberof ProductPropertyPatchAction
     */
    attributeFqn?: string | null;
    /**
     * 
     * @type {ProductPropertyPatchDocument}
     * @memberof ProductPropertyPatchAction
     */
    patches?: ProductPropertyPatchDocument;
    /**
     * If true and publishing is enabled, actions are applied to a draft version of the product and then the draft is published otherwise
     * changes are saved to the live product.
     * @type {boolean}
     * @memberof ProductPropertyPatchAction
     */
    saveAndPublish?: boolean;
}
/**
 * 
 * @export
 * @interface ProductPropertyPatchDocument
 */
export interface ProductPropertyPatchDocument {
    /**
     * 
     * @type {Array<ProductPropertyPatchOperation>}
     * @memberof ProductPropertyPatchDocument
     */
    operations?: Array<ProductPropertyPatchOperation> | null;
}
/**
 * 
 * @export
 * @interface ProductPropertyPatchOperation
 */
export interface ProductPropertyPatchOperation {
    /**
     * 
     * @type {any}
     * @memberof ProductPropertyPatchOperation
     */
    value?: any | null;
    /**
     * 
     * @type {string}
     * @memberof ProductPropertyPatchOperation
     */
    path?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductPropertyPatchOperation
     */
    op?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductPropertyPatchOperation
     */
    from?: string | null;
}
/**
 * Attribute Value Localized Resource
 * @export
 * @interface ProductPropertyValueLocalizedContent
 */
export interface ProductPropertyValueLocalizedContent {
    /**
     * Language used for the string attribute value.
     * @type {string}
     * @memberof ProductPropertyValueLocalizedContent
     */
    localeCode?: string | null;
    /**
     * Localized Value in the language of the locale code
     * @type {string}
     * @memberof ProductPropertyValueLocalizedContent
     */
    stringValue?: string | null;
}
/**
 * Price of the product and currency used.
 * @export
 * @interface ProductPublishingInfo
 */
export interface ProductPublishingInfo {
    /**
     * 
     * @type {string}
     * @memberof ProductPublishingInfo
     */
    publishedState?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductPublishingInfo
     */
    lastPublishedBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductPublishingInfo
     */
    lastPublishedDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductPublishingInfo
     */
    publishSetCode?: string | null;
}
/**
 * Defines a default sort for a list of products and allows some products to be
 * boosted to the top or pinned ot a specific position, or buried at the bottom of the
 * list.  Only 10 items can be boosted or pinned and up to
 * @export
 * @interface ProductSortDefinition
 */
export interface ProductSortDefinition {
    /**
     * System or user provided ID for the ProductSortDefinition
     * @type {number}
     * @memberof ProductSortDefinition
     */
    productSortDefinitionId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ProductSortDefinition
     */
    categoryId?: number | null;
    /**
     * Short Name for the sort definition. Required.
     * @type {string}
     * @memberof ProductSortDefinition
     */
    name: string;
    /**
     * The Start Date when the sort definition becomes active
     * @type {string}
     * @memberof ProductSortDefinition
     */
    startDate: string;
    /**
     * Optional end date for a product sort definition
     * @type {string}
     * @memberof ProductSortDefinition
     */
    endDate?: string | null;
    /**
     * Sort expression to apply
     * Max two expressions
     * @type {Array<ProductSortExpression>}
     * @memberof ProductSortDefinition
     */
    sortExpressions: Array<ProductSortExpression>;
    /**
     * List of products being positioned
     * @type {Array<ProductSortOverride>}
     * @memberof ProductSortDefinition
     */
    boosted?: Array<ProductSortOverride> | null;
    /**
     * List of products being positioned
     * @type {Array<ProductSortOverride>}
     * @memberof ProductSortDefinition
     */
    buried?: Array<ProductSortOverride> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof ProductSortDefinition
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * Collection of product sort definitions where product sort definitions are returned in a series of pages.
 * @export
 * @interface ProductSortDefinitionPagedCollection
 */
export interface ProductSortDefinitionPagedCollection {
    /**
     * 
     * @type {number}
     * @memberof ProductSortDefinitionPagedCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductSortDefinitionPagedCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductSortDefinitionPagedCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductSortDefinitionPagedCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<ProductSortDefinition>}
     * @memberof ProductSortDefinitionPagedCollection
     */
    items?: Array<ProductSortDefinition> | null;
}
/**
 * 
 * @export
 * @interface ProductSortExpression
 */
export interface ProductSortExpression {
    /**
     * The name of the field to sort on.
     * Must be a known sort field or sortable attribute
     * @type {string}
     * @memberof ProductSortExpression
     */
    field: string;
    /**
     * ASC or DESC
     * @type {string}
     * @memberof ProductSortExpression
     */
    direction?: string | null;
}
/**
 * Represents a product that is positioned out of its normal sort position.
 * It can be boosted to the top of the list, positioned exactly or buried at the bottom
 * @export
 * @interface ProductSortOverride
 */
export interface ProductSortOverride {
    /**
     * The product code of the product being overridden
     * @type {string}
     * @memberof ProductSortOverride
     */
    productCode: string;
    /**
     * The slicing value of the product being overridden
     * @type {string}
     * @memberof ProductSortOverride
     */
    sliceValue?: string | null;
    /**
     * Indicates the relative position of the product to other overridden products.
     * Position is absolute if IsPinned is true.
     * Not applicable to buried products. Buried products will be given a default
     * position of -1
     * @type {number}
     * @memberof ProductSortOverride
     */
    position?: number | null;
    /**
     * Flag to indicate that the product is pinned at the specified position.
     * Not applicable to buried products
     * @type {boolean}
     * @memberof ProductSortOverride
     */
    isPinned?: boolean | null;
}
/**
 * 
 * @export
 * @interface ProductSuggestSettings
 */
export interface ProductSuggestSettings {
    /**
     * 
     * @type {Array<string>}
     * @memberof ProductSuggestSettings
     */
    customBoosts?: Array<string> | null;
    /**
     * 
     * @type {FieldValueBoost}
     * @memberof ProductSuggestSettings
     */
    fieldValueBoost?: FieldValueBoost;
    /**
     * 
     * @type {boolean}
     * @memberof ProductSuggestSettings
     */
    searchChildProductsByDefault?: boolean;
    /**
     * 
     * @type {Array<FieldWeight>}
     * @memberof ProductSuggestSettings
     */
    fieldWeights?: Array<FieldWeight> | null;
    /**
     * 
     * @type {string}
     * @memberof ProductSuggestSettings
     */
    personalizationExperience?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ProductSuggestSettings
     */
    personalizationFactor?: number | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProductSuggestSettings
     */
    returnFields?: Array<string> | null;
    /**
     * 
     * @type {number}
     * @memberof ProductSuggestSettings
     */
    crossFieldAdditiveScoreFactor?: number;
}
/**
 * Supplier info for the product
 * @export
 * @interface ProductSupplierInfo
 */
export interface ProductSupplierInfo {
    /**
     * 
     * @type {string}
     * @memberof ProductSupplierInfo
     */
    mfgPartNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductSupplierInfo
     */
    distPartNumber?: string | null;
    /**
     * 
     * @type {CatalogAdminsProductCost}
     * @memberof ProductSupplierInfo
     */
    cost?: CatalogAdminsProductCost;
}
/**
 * 
 * @export
 * @interface ProductType
 */
export interface ProductType {
    /**
     * Unique identifier of the ProductType. System-supplied and read-only.
     * @type {number}
     * @memberof ProductType
     */
    id?: number | null;
    /**
     * Name of the productType
     * @type {string}
     * @memberof ProductType
     */
    name?: string | null;
    /**
     * Indentifier of the Master Catalog that this ProductType is a member of. System-supplied and read-only.
     * @type {number}
     * @memberof ProductType
     */
    masterCatalogId?: number | null;
    /**
     * System supplied and read only. There is only one BaseProductType per MasterCatalog.
     * @type {boolean}
     * @memberof ProductType
     */
    isBaseProductType?: boolean;
    /**
     * Indicates the number of products currently using this Product Type. System-supplied and read-only.
     * @type {number}
     * @memberof ProductType
     */
    productCount?: number | null;
    /**
     * List of ProductUsages supported by the ProductType.
     * @type {Array<string>}
     * @memberof ProductType
     */
    productUsages?: Array<string> | null;
    /**
     * The TYpe of Goods of this product
     * @type {string}
     * @memberof ProductType
     */
    goodsType?: string | null;
    /**
     * Collection of the Attributes that are Options in this productType
     * @type {Array<AttributeInProductType>}
     * @memberof ProductType
     */
    options?: Array<AttributeInProductType> | null;
    /**
     * Collection of the Attributes that are Extras in this productType
     * @type {Array<AttributeInProductType>}
     * @memberof ProductType
     */
    extras?: Array<AttributeInProductType> | null;
    /**
     * Collection of the Attributes that are Properties in this productType
     * @type {Array<AttributeInProductType>}
     * @memberof ProductType
     */
    properties?: Array<AttributeInProductType> | null;
    /**
     * Collection of the Attributes that are VariantProperties in this productType
     * @type {Array<AttributeInProductType>}
     * @memberof ProductType
     */
    variantProperties?: Array<AttributeInProductType> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof ProductType
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * 
 * @export
 * @interface ProductTypeChangeRequest
 */
export interface ProductTypeChangeRequest {
    /**
     * The target product type id to move the product to.
     * @type {number}
     * @memberof ProductTypeChangeRequest
     */
    targetProductTypeId?: number;
    /**
     * When set to true any attributes or values that were set on the product that are
     * not defined the target product type will be lost.  When false, the process will stop
     * without making updates if there are any conditions that would result in dataloss.
     * Validation output will be returned. Defaults to false.
     * @type {boolean}
     * @memberof ProductTypeChangeRequest
     */
    ignoreDataLoss?: boolean;
    /**
     * When set to true no updates will be made but the validation will return any
     * warnings or failures. Defaults to false.
     * @type {boolean}
     * @memberof ProductTypeChangeRequest
     */
    testMode?: boolean | null;
    /**
     * When true the validation will stop on the first error.  Defaults to run all validation.
     * @type {boolean}
     * @memberof ProductTypeChangeRequest
     */
    shouldFailFast?: boolean | null;
}
/**
 * 
 * @export
 * @interface ProductTypeChangeResponse
 */
export interface ProductTypeChangeResponse {
    /**
     * 
     * @type {string}
     * @memberof ProductTypeChangeResponse
     */
    productCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ProductTypeChangeResponse
     */
    initialProductTypeId?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductTypeChangeResponse
     */
    targetProductTypeId?: number;
    /**
     * 
     * @type {string}
     * @memberof ProductTypeChangeResponse
     */
    status?: string | null;
    /**
     * 
     * @type {Array<ProductTypeChangeValidationResult>}
     * @memberof ProductTypeChangeResponse
     */
    validationResults?: Array<ProductTypeChangeValidationResult> | null;
}
/**
 * 
 * @export
 * @interface ProductTypeChangeValidationResult
 */
export interface ProductTypeChangeValidationResult {
    /**
     * 
     * @type {string}
     * @memberof ProductTypeChangeValidationResult
     */
    attributeFqn?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ProductTypeChangeValidationResult
     */
    code?: number;
    /**
     * 
     * @type {string}
     * @memberof ProductTypeChangeValidationResult
     */
    severity?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductTypeChangeValidationResult
     */
    message?: string | null;
}
/**
 * Collection of attributes.
 * @export
 * @interface ProductTypeCollection
 */
export interface ProductTypeCollection {
    /**
     * 
     * @type {number}
     * @memberof ProductTypeCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductTypeCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductTypeCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductTypeCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<ProductType>}
     * @memberof ProductTypeCollection
     */
    items?: Array<ProductType> | null;
}
/**
 * Use the Products resource to create and manage products for your store. You can create products with options that a shopper configures (such as a T-shirt color and size). The system can manage inventory for all combinations of your product options, and can calculate tax and shipping costs.
 * @export
 * @interface ProductV1
 */
export interface ProductV1 {
    /**
     * Merchant-created code identifier associated with the product, for example, a SKU or product item number.
     * @type {string}
     * @memberof ProductV1
     */
    productCode?: string | null;
    /**
     * Indicates the usage type of this product. Must be one of the values in ProductUsageConst.
     * @type {string}
     * @memberof ProductV1
     */
    productUsage?: string | null;
    /**
     * Indicates the fulfillment types the product supports.
     * @type {Array<string>}
     * @memberof ProductV1
     */
    fulfillmentTypesSupported?: Array<string> | null;
    /**
     * Identifier of the Master Catalog that this product is a member of. System-supplied and read-only
     * @type {number}
     * @memberof ProductV1
     */
    masterCatalogId?: number | null;
    /**
     * System generated monotonically increasing sequence
     * @type {number}
     * @memberof ProductV1
     */
    productSequence?: number | null;
    /**
     * Unique identifier of the productType of the product. Refers to a valid ProductType that was previously created with the ProductType resource.
     * @type {number}
     * @memberof ProductV1
     */
    productTypeId?: number | null;
    /**
     * Read only flag that indicates if the product meets the product type constraints (All adminRequired attributes have a valid value)
     * @type {boolean}
     * @memberof ProductV1
     */
    isValidForProductType?: boolean | null;
    /**
     * This is the base product ProductCode of a product that is a variation. It is read-only and only populated for products that are variations of a configurable base product.
     * @type {string}
     * @memberof ProductV1
     */
    baseProductCode?: string | null;
    /**
     * Catalog specific info for each catalog a product is valid in. There should always be one or more entries here.
     * @type {Array<ProductInCatalogInfoV1>}
     * @memberof ProductV1
     */
    productInCatalogs?: Array<ProductInCatalogInfoV1> | null;
    /**
     * 
     * @type {ProductLocalizedContent}
     * @memberof ProductV1
     */
    content?: ProductLocalizedContent;
    /**
     * 
     * @type {CatalogAdminsProductPrice}
     * @memberof ProductV1
     */
    price?: CatalogAdminsProductPrice;
    /**
     * 
     * @type {CatalogAdminsProductPricingBehaviorInfo}
     * @memberof ProductV1
     */
    pricingBehavior?: CatalogAdminsProductPricingBehaviorInfo;
    /**
     * 
     * @type {ProductLocalizedSEOContent}
     * @memberof ProductV1
     */
    seoContent?: ProductLocalizedSEOContent;
    /**
     * The Options defined in the product Type that are currently assigned to this product
     * @type {Array<CatalogAdminsProductOption>}
     * @memberof ProductV1
     */
    options?: Array<CatalogAdminsProductOption> | null;
    /**
     * The Extras defined in the product Type that are currently assigned to this product
     * @type {Array<ProductExtra>}
     * @memberof ProductV1
     */
    extras?: Array<ProductExtra> | null;
    /**
     * The Properties defined in the product Type that are currently assigned to this product
     * @type {Array<CatalogAdminsProductProperty>}
     * @memberof ProductV1
     */
    properties?: Array<CatalogAdminsProductProperty> | null;
    /**
     * If true, the product is subject to tax.
     * @type {boolean}
     * @memberof ProductV1
     */
    isTaxable?: boolean | null;
    /**
     * 
     * @type {CatalogAdminsProductInventoryInfo}
     * @memberof ProductV1
     */
    inventoryInfo?: CatalogAdminsProductInventoryInfo;
    /**
     * 
     * @type {number}
     * @memberof ProductV1
     */
    shippingClassId?: number | null;
    /**
     * If true, the product can be purchased or fulfilled at regular intervals, for example, monthly billing or a subscription.
     * @type {boolean}
     * @memberof ProductV1
     */
    isRecurring?: boolean | null;
    /**
     * UPC code of the product.
     * @type {string}
     * @memberof ProductV1
     */
    upc?: string | null;
    /**
     * 
     * @type {ProductSupplierInfo}
     * @memberof ProductV1
     */
    supplierInfo?: ProductSupplierInfo;
    /**
     * Does this product need to be packaged on its own
     * @type {boolean}
     * @memberof ProductV1
     */
    isPackagedStandAlone?: boolean | null;
    /**
     * When packaged alone this is the package type
     * @type {string}
     * @memberof ProductV1
     */
    standAlonePackageType?: string | null;
    /**
     * 
     * @type {CommerceRuntimeMeasurement}
     * @memberof ProductV1
     */
    packageHeight?: CommerceRuntimeMeasurement;
    /**
     * 
     * @type {CommerceRuntimeMeasurement}
     * @memberof ProductV1
     */
    packageWidth?: CommerceRuntimeMeasurement;
    /**
     * 
     * @type {CommerceRuntimeMeasurement}
     * @memberof ProductV1
     */
    packageLength?: CommerceRuntimeMeasurement;
    /**
     * 
     * @type {CommerceRuntimeMeasurement}
     * @memberof ProductV1
     */
    packageWeight?: CommerceRuntimeMeasurement;
    /**
     * Read only. List of discounts that are available for a product.
     * @type {Array<CatalogAdminsDiscount>}
     * @memberof ProductV1
     */
    applicableDiscounts?: Array<CatalogAdminsDiscount> | null;
    /**
     * Read only. If true, this is a product variation of a product with configurable options. System-supplied and read-only.
     * @type {boolean}
     * @memberof ProductV1
     */
    isVariation?: boolean;
    /**
     * Read only. If IsVariation true, thish provides a unique key to manage the variation of the base product.
     * @type {string}
     * @memberof ProductV1
     */
    variationKey?: string | null;
    /**
     * Read only. If true, this product has configurable options. The product is not purchasable until the shopper selects options that resolve to a product variation. System-supplied and read-only.
     * @type {boolean}
     * @memberof ProductV1
     */
    hasConfigurableOptions?: boolean;
    /**
     * Read only. If true, the product has stand-alone options that a shopper may select. System-supplied and read-only.
     * @type {boolean}
     * @memberof ProductV1
     */
    hasStandAloneOptions?: boolean;
    /**
     * Read only List of variations that exist for a product. This is only populated when IsVariation is true. To get the list of options, the GET request must include the VariationOptions response group.
     * @type {Array<ProductVariationOption>}
     * @memberof ProductV1
     */
    variationOptions?: Array<ProductVariationOption> | null;
    /**
     * 
     * @type {ProductPublishingInfo}
     * @memberof ProductV1
     */
    publishingInfo?: ProductPublishingInfo;
    /**
     * list of other products that are included in a BundleProduct
     * This requires that the ProductUsage be set to Bundle
     * @type {Array<CatalogAdminsBundledProduct>}
     * @memberof ProductV1
     */
    bundledProducts?: Array<CatalogAdminsBundledProduct> | null;
    /**
     * list of other products that are members of a ProductCollection
     * This requires that the ProductUsage be set to Collection
     * @type {Array<ProductCollectionProduct>}
     * @memberof ProductV1
     */
    productCollectionProducts?: Array<ProductCollectionProduct> | null;
    /**
     * List of Mozu.ProductAdmin.Contracts.ProductCollectionInfo that this product belongs to
     * @type {Array<CatalogAdminsProductCollectionInfo>}
     * @memberof ProductV1
     */
    productCollections?: Array<CatalogAdminsProductCollectionInfo> | null;
    /**
     * List of the image groups this product uses.
     * Image groups are used to map different images to different product options.
     * If the product doesn't have options then all images will be in the default
     * image group.
     * @type {Array<CatalogAdminsProductImageGroup>}
     * @memberof ProductV1
     */
    productImageGroups?: Array<CatalogAdminsProductImageGroup> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof ProductV1
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {SlicingSettings}
     * @memberof ProductV1
     */
    slicingSettings?: SlicingSettings;
    /**
     * When this product belongs to a product collection this is the product id for the primary collection.
     * @type {string}
     * @memberof ProductV1
     */
    primaryProductCollectionCode?: string | null;
}
/**
 * 
 * @export
 * @interface ProductV1PatchDocument
 */
export interface ProductV1PatchDocument {
    /**
     * 
     * @type {Array<ProductV1PatchOperation>}
     * @memberof ProductV1PatchDocument
     */
    operations?: Array<ProductV1PatchOperation> | null;
}
/**
 * 
 * @export
 * @interface ProductV1PatchOperation
 */
export interface ProductV1PatchOperation {
    /**
     * 
     * @type {any}
     * @memberof ProductV1PatchOperation
     */
    value?: any | null;
    /**
     * 
     * @type {string}
     * @memberof ProductV1PatchOperation
     */
    path?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductV1PatchOperation
     */
    op?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductV1PatchOperation
     */
    from?: string | null;
}
/**
 * The ProductVariation resource helps merchants manage their products with configurable options. Using this resource, the system creates a matrix of all possible combinations of the product options and the merchant confirms which variations match products for sale. For example, a T-shirt with three color and three size options has nine possible product variations. The system keeps track of inventory for each variation.
 * @export
 * @interface ProductVariation
 */
export interface ProductVariation {
    /**
     * If true, the merchant accepts the variation generated from the configurable options as a product offering. If IsActive is false then the product variation is not for sale--either because it was never a product offering or it was permanently dropped. IsActive is not intended for temporary unavailability. Default is false.
     * @type {boolean}
     * @memberof ProductVariation
     */
    isActive?: boolean | null;
    /**
     * If true, the variation is no longer possible. The system sets IsOrphan to true when the merchant has changed something to make this variation impossible. For example, if the merchant stopped selling all "small" shirts, all product variations with the "small" option are set to IsOrphan. System-supplied and read-only.
     * @type {boolean}
     * @memberof ProductVariation
     */
    isOrphan?: boolean | null;
    /**
     * If true, the product variation exists. When the merchant sets IsActive to true, the system sets VariationExists to true and creates a Variation Key as a unique identifier for this variation. System-supplied and read-only.
     * @type {boolean}
     * @memberof ProductVariation
     */
    variationExists?: boolean | null;
    /**
     * Unique identifier for a single variation ("small" + "red" + "short-sleeved"). System-supplied and read-only.
     * @type {string}
     * @memberof ProductVariation
     */
    variationkey?: string | null;
    /**
     * Descriptive code to refer to a single variation. Typically this is a sequence appended to the base ProduceCode. A merchant can create this code to easily recognize a product variation. By default, the system creates this code by appending a number to the base product. After the merchant supplies this code, it becomes read-only.
     * @type {string}
     * @memberof ProductVariation
     */
    variationProductCode?: string | null;
    /**
     * 
     * @type {ProductVariationDeltaPrice}
     * @memberof ProductVariation
     */
    deltaPrice?: ProductVariationDeltaPrice;
    /**
     * How much more the variation costs above the cost of the base product. If the price of the base product changes, this price is adjusted accordingly.
     * This collection allows for multiple currencies.
     * @type {Array<ProductVariationDeltaPrice>}
     * @memberof ProductVariation
     */
    localizedDeltaPrice?: Array<ProductVariationDeltaPrice> | null;
    /**
     * 
     * @type {ProductVariationFixedPrice}
     * @memberof ProductVariation
     */
    fixedPrice?: ProductVariationFixedPrice;
    /**
     * Price of the variation using fixed per currency
     * This collection allows for multiple currencies.
     * @type {Array<ProductVariationFixedPrice>}
     * @memberof ProductVariation
     */
    localizedFixedPrice?: Array<ProductVariationFixedPrice> | null;
    /**
     * Weight of the product with this variation.
     * @type {number}
     * @memberof ProductVariation
     */
    deltaWeight?: number | null;
    /**
     * Fixed weight of the product with this variation.
     * @type {number}
     * @memberof ProductVariation
     */
    fixedWeight?: number | null;
    /**
     * List of values for this product variation: such as "small, "red.. these are read only here as the variationKey defines the values "
     * @type {Array<ProductVariationOption>}
     * @memberof ProductVariation
     */
    options?: Array<ProductVariationOption> | null;
    /**
     * List of properties specific to this variation
     * @type {Array<ProductVariationProperty>}
     * @memberof ProductVariation
     */
    properties?: Array<ProductVariationProperty> | null;
    /**
     * Price Lookup Unit code for the product
     * @type {string}
     * @memberof ProductVariation
     */
    upc?: string | null;
    /**
     * Indicates the fulfillment types the product supports.
     * @type {Array<string>}
     * @memberof ProductVariation
     */
    fulfillmentTypesSupported?: Array<string> | null;
    /**
     * 
     * @type {ProductSupplierInfo}
     * @memberof ProductVariation
     */
    supplierInfo?: ProductSupplierInfo;
}
/**
 * Collection of product variations returned as a whole. A collection is not paged.
 * @export
 * @interface ProductVariationCollection
 */
export interface ProductVariationCollection {
    /**
     * 
     * @type {number}
     * @memberof ProductVariationCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<ProductVariation>}
     * @memberof ProductVariationCollection
     */
    items?: Array<ProductVariation> | null;
}
/**
 * How much more a product variation costs above the cost of the base product. If the price of the base product changes, this price is adjusted automatically.
 * @export
 * @interface ProductVariationDeltaPrice
 */
export interface ProductVariationDeltaPrice {
    /**
     * Which currency is in use.
     * @type {string}
     * @memberof ProductVariationDeltaPrice
     */
    currencyCode?: string | null;
    /**
     * How much more the variation costs above the cost of the base product.
     * @type {number}
     * @memberof ProductVariationDeltaPrice
     */
    value?: number | null;
    /**
     * Manufacturer Suggested Retail Price.
     * @type {number}
     * @memberof ProductVariationDeltaPrice
     */
    msrp?: number | null;
    /**
     * Credit amt of the product
     * @type {number}
     * @memberof ProductVariationDeltaPrice
     */
    creditValue?: number | null;
}
/**
 * 
 * @export
 * @interface ProductVariationFixedPrice
 */
export interface ProductVariationFixedPrice {
    /**
     * Which currency is in use.
     * @type {string}
     * @memberof ProductVariationFixedPrice
     */
    currencyCode?: string | null;
    /**
     * Variation price for fixed pricing
     * @type {number}
     * @memberof ProductVariationFixedPrice
     */
    listPrice?: number | null;
    /**
     * Variation sale price whne fixed pricing
     * @type {number}
     * @memberof ProductVariationFixedPrice
     */
    salePrice?: number | null;
    /**
     * Manufacturer Suggested Retail Price.
     * @type {number}
     * @memberof ProductVariationFixedPrice
     */
    msrp?: number | null;
    /**
     * Credit amt of the product
     * @type {number}
     * @memberof ProductVariationFixedPrice
     */
    creditValue?: number | null;
}
/**
 * An option for a product variation. For example, a T-shirt with size and color configurable options, might have a product variation option of "size" or "color."
 * @export
 * @interface ProductVariationOption
 */
export interface ProductVariationOption {
    /**
     * Unique identifier of the product variation option. System-supplied and read-only.
     * @type {string}
     * @memberof ProductVariationOption
     */
    attributeFQN?: string | null;
    /**
     * Name of the product variation option used on the admin side independent of how it appears on the storefront. For example, the internal "SZ" attribute might appear as "size" on the storefront.
     * @type {any}
     * @memberof ProductVariationOption
     */
    value?: any | null;
    /**
     * 
     * @type {AttributeVocabularyValueLocalizedContent}
     * @memberof ProductVariationOption
     */
    content?: AttributeVocabularyValueLocalizedContent;
}
/**
 * Collection of product variations where the variations are returned in a series of pages.
 * @export
 * @interface ProductVariationPagedCollection
 */
export interface ProductVariationPagedCollection {
    /**
     * 
     * @type {number}
     * @memberof ProductVariationPagedCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductVariationPagedCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductVariationPagedCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductVariationPagedCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<ProductVariation>}
     * @memberof ProductVariationPagedCollection
     */
    items?: Array<ProductVariation> | null;
}
/**
 * 
 * @export
 * @interface ProductVariationProperty
 */
export interface ProductVariationProperty {
    /**
     * Unique identifier of the Attribute.
     * @type {string}
     * @memberof ProductVariationProperty
     */
    attributeFQN?: string | null;
    /**
     * 
     * @type {Array<CatalogAdminsProductPropertyValue>}
     * @memberof ProductVariationProperty
     */
    values?: Array<CatalogAdminsProductPropertyValue> | null;
}
/**
 * 
 * @export
 * @interface PublishSet
 */
export interface PublishSet {
    /**
     * The PublishSet unique identifier
     * @type {string}
     * @memberof PublishSet
     */
    code?: string | null;
    /**
     * Number of product drafts that are included in the publish set
     * @type {number}
     * @memberof PublishSet
     */
    productCount?: number;
    /**
     * List of specific product codes that are included in the publish set
     * @type {Array<string>}
     * @memberof PublishSet
     */
    productCodes?: Array<string> | null;
}
/**
 * Non-paged collection of PublishSets.
 * @export
 * @interface PublishSetCollection
 */
export interface PublishSetCollection {
    /**
     * 
     * @type {number}
     * @memberof PublishSetCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<PublishSet>}
     * @memberof PublishSetCollection
     */
    items?: Array<PublishSet> | null;
}
/**
 * 
 * @export
 * @interface PublishingScope
 */
export interface PublishingScope {
    /**
     * True = scope to all pending products
     * @type {boolean}
     * @memberof PublishingScope
     */
    allPending?: boolean | null;
    /**
     * List of specific productCodes to scope publish operation against
     * @type {Array<string>}
     * @memberof PublishingScope
     */
    productCodes?: Array<string> | null;
    /**
     * The Publish Set to publish
     * @type {string}
     * @memberof PublishingScope
     */
    publishSetCode?: string | null;
}
/**
 * List of Mozu.ProductAdmin.Contracts.ChangeProductTypeActions to be applied to a list of Mozu.ProductAdmin.Contracts.Products.
 * @export
 * @interface QuickEditChangeProductTypeActions
 */
export interface QuickEditChangeProductTypeActions {
    /**
     * 
     * @type {Array<ChangeProductTypeAction>}
     * @memberof QuickEditChangeProductTypeActions
     */
    actions?: Array<ChangeProductTypeAction> | null;
}
/**
 * Aggregates the individual results of update actions per product update
 * @export
 * @interface QuickEditChangeProductTypeResponse
 */
export interface QuickEditChangeProductTypeResponse {
    /**
     * List of Mozu.ProductAdmin.Contracts.QuickEditChangeProductTypeResult
     * @type {Array<QuickEditChangeProductTypeResult>}
     * @memberof QuickEditChangeProductTypeResponse
     */
    results?: Array<QuickEditChangeProductTypeResult> | null;
}
/**
 * 
 * @export
 * @interface QuickEditChangeProductTypeResult
 */
export interface QuickEditChangeProductTypeResult {
    /**
     * The target product type id
     * @type {number}
     * @memberof QuickEditChangeProductTypeResult
     */
    targetProductTypeId?: number;
    /**
     * The original product type id
     * @type {number}
     * @memberof QuickEditChangeProductTypeResult
     */
    initialProductTypeId?: number;
    /**
     * List of Mozu.ProductAdmin.Contracts.ProductTypeChangeValidationResult
     * @type {Array<ProductTypeChangeValidationResult>}
     * @memberof QuickEditChangeProductTypeResult
     */
    validationResults?: Array<ProductTypeChangeValidationResult> | null;
    /**
     * The unique resouce identifier
     * @type {string}
     * @memberof QuickEditChangeProductTypeResult
     */
    resourceId?: string | null;
    /**
     * true if the patch succeeded.
     * @type {boolean}
     * @memberof QuickEditChangeProductTypeResult
     */
    success?: boolean;
    /**
     * Error message if any.
     * @type {string}
     * @memberof QuickEditChangeProductTypeResult
     */
    message?: string | null;
}
/**
 * List of Mozu.ProductAdmin.Contracts.ProductPatchActions to be applied to a list of Mozu.ProductAdmin.Contracts.Products.
 * @export
 * @interface QuickEditProductActions
 */
export interface QuickEditProductActions {
    /**
     * List of Mozu.ProductAdmin.Contracts.ProductPatchAction actions to perform
     * @type {Array<ProductPatchAction>}
     * @memberof QuickEditProductActions
     */
    actions?: Array<ProductPatchAction> | null;
}
/**
 * List of Mozu.ProductAdmin.Contracts.ProductInCatalogPatchActions to be applied
 * @export
 * @interface QuickEditProductInCatalogActions
 */
export interface QuickEditProductInCatalogActions {
    /**
     * List of Mozu.ProductAdmin.Contracts.ProductPropertyPatchAction actions to perform
     * @type {Array<ProductInCatalogPatchAction>}
     * @memberof QuickEditProductInCatalogActions
     */
    actions?: Array<ProductInCatalogPatchAction> | null;
}
/**
 * List of Mozu.ProductAdmin.Contracts.ProductPropertyPatchActions to be applied to a list of
 * Mozu.ProductAdmin.Contracts.ProductPropertys.
 * @export
 * @interface QuickEditProductPropertyActions
 */
export interface QuickEditProductPropertyActions {
    /**
     * List of Mozu.ProductAdmin.Contracts.ProductPropertyPatchAction actions to perform
     * @type {Array<ProductPropertyPatchAction>}
     * @memberof QuickEditProductPropertyActions
     */
    actions?: Array<ProductPropertyPatchAction> | null;
}
/**
 * Aggregates the individual results of update actions per product update
 * @export
 * @interface QuickEditResponse
 */
export interface QuickEditResponse {
    /**
     * List of Mozu.ProductAdmin.Contracts.QuickEditResult
     * @type {Array<QuickEditResult>}
     * @memberof QuickEditResponse
     */
    results?: Array<QuickEditResult> | null;
}
/**
 * Individual update action result
 * @export
 * @interface QuickEditResult
 */
export interface QuickEditResult {
    /**
     * The unique resouce identifier
     * @type {string}
     * @memberof QuickEditResult
     */
    resourceId?: string | null;
    /**
     * true if the patch succeeded.
     * @type {boolean}
     * @memberof QuickEditResult
     */
    success?: boolean;
    /**
     * Error message if any.
     * @type {string}
     * @memberof QuickEditResult
     */
    message?: string | null;
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
     * @type {string}
     * @memberof SearchMerchandizingBoostValueExpression
     */
    value?: string | null;
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
    inclusion?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SearchMerchandizingFilter
     */
    exclusion?: string | null;
}
/**
 * 
 * @export
 * @interface SearchMerchandizingImpactItem
 */
export interface SearchMerchandizingImpactItem {
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
    /**
     * 
     * @type {number}
     * @memberof SearchMerchandizingImpactItem
     */
    position?: number;
    /**
     * 
     * @type {boolean}
     * @memberof SearchMerchandizingImpactItem
     */
    isPinned?: boolean;
}
/**
 * 
 * @export
 * @interface SearchMerchandizingRuleCollection
 */
export interface SearchMerchandizingRuleCollection {
    /**
     * 
     * @type {number}
     * @memberof SearchMerchandizingRuleCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof SearchMerchandizingRuleCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof SearchMerchandizingRuleCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof SearchMerchandizingRuleCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<CatalogAdminsSearchMerchandizingRule>}
     * @memberof SearchMerchandizingRuleCollection
     */
    items?: Array<CatalogAdminsSearchMerchandizingRule> | null;
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
    rankedItems?: Array<SearchMerchandizingImpactItem> | null;
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
     * @type {Array<SearchMerchandizingSortField>}
     * @memberof SearchMerchandizingRuleImpact
     */
    sortFields?: Array<SearchMerchandizingSortField> | null;
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
 * Redirects based on what is entered in site search
 * @export
 * @interface SearchRedirect
 */
export interface SearchRedirect {
    /**
     * 
     * @type {string}
     * @memberof SearchRedirect
     */
    redirectId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SearchRedirect
     */
    url?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SearchRedirect
     */
    statusId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SearchRedirect
     */
    tenantId?: number;
    /**
     * 
     * @type {number}
     * @memberof SearchRedirect
     */
    siteId?: number | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SearchRedirect
     */
    searchTermList?: Array<string> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof SearchRedirect
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * List of search redirects
 * @export
 * @interface SearchRedirectCollection
 */
export interface SearchRedirectCollection {
    /**
     * 
     * @type {number}
     * @memberof SearchRedirectCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<SearchRedirect>}
     * @memberof SearchRedirectCollection
     */
    items?: Array<SearchRedirect> | null;
}
/**
 * Settings to control product search and indexing behavior
 * @export
 * @interface SearchSettings
 */
export interface SearchSettings {
    /**
     * 
     * @type {string}
     * @memberof SearchSettings
     */
    settingsName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SearchSettings
     */
    description?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof SearchSettings
     */
    isDefault?: boolean;
    /**
     * 
     * @type {SiteSearchSettings}
     * @memberof SearchSettings
     */
    siteSearchSettings?: SiteSearchSettings;
    /**
     * 
     * @type {ProductSuggestSettings}
     * @memberof SearchSettings
     */
    productSuggestSettings?: ProductSuggestSettings;
    /**
     * 
     * @type {SuggestSettings}
     * @memberof SearchSettings
     */
    categorySuggestSettings?: SuggestSettings;
    /**
     * 
     * @type {ListingSettings}
     * @memberof SearchSettings
     */
    listingSettings?: ListingSettings;
    /**
     * 
     * @type {CollapseSettings}
     * @memberof SearchSettings
     */
    collapseSettings?: CollapseSettings;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof SearchSettings
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * 
 * @export
 * @interface SearchSettingsCollection
 */
export interface SearchSettingsCollection {
    /**
     * 
     * @type {number}
     * @memberof SearchSettingsCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<SearchSettings>}
     * @memberof SearchSettingsCollection
     */
    items?: Array<SearchSettings> | null;
}
/**
 * 
 * @export
 * @interface SearchTuningRule
 */
export interface SearchTuningRule {
    /**
     * 
     * @type {number}
     * @memberof SearchTuningRule
     */
    siteId?: number;
    /**
     * 
     * @type {string}
     * @memberof SearchTuningRule
     */
    searchTuningRuleCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SearchTuningRule
     */
    searchTuningRuleName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SearchTuningRule
     */
    searchTuningRuleDescription?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SearchTuningRule
     */
    keywords?: Array<string> | null;
    /**
     * 
     * @type {Array<SearchTuningRuleFilter>}
     * @memberof SearchTuningRule
     */
    filters?: Array<SearchTuningRuleFilter> | null;
    /**
     * 
     * @type {boolean}
     * @memberof SearchTuningRule
     */
    active?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SearchTuningRule
     */
    isDefault?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SearchTuningRule
     */
    activeStartDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SearchTuningRule
     */
    activeEndDate?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SearchTuningRule
     */
    boostedProductCodes?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SearchTuningRule
     */
    blockedProductCodes?: Array<string> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof SearchTuningRule
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * 
 * @export
 * @interface SearchTuningRuleCollection
 */
export interface SearchTuningRuleCollection {
    /**
     * 
     * @type {number}
     * @memberof SearchTuningRuleCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof SearchTuningRuleCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof SearchTuningRuleCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof SearchTuningRuleCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<SearchTuningRule>}
     * @memberof SearchTuningRuleCollection
     */
    items?: Array<SearchTuningRule> | null;
}
/**
 * 
 * @export
 * @interface SearchTuningRuleFilter
 */
export interface SearchTuningRuleFilter {
    /**
     * 
     * @type {string}
     * @memberof SearchTuningRuleFilter
     */
    field?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SearchTuningRuleFilter
     */
    value?: string | null;
}
/**
 * 
 * @export
 * @interface SearchTuningRuleSortFields
 */
export interface SearchTuningRuleSortFields {
    /**
     * 
     * @type {Array<string>}
     * @memberof SearchTuningRuleSortFields
     */
    sortFields?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof SearchTuningRuleSortFields
     */
    inclusionExclusionType?: string | null;
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
 * A custom field and weight value for search relevancy
 * @export
 * @interface SiteSearchFieldWeight
 */
export interface SiteSearchFieldWeight {
    /**
     * weight to apply in phrase boosting
     * @type {number}
     * @memberof SiteSearchFieldWeight
     */
    phraseWeight?: number;
    /**
     * field in the index to target
     * @type {string}
     * @memberof SiteSearchFieldWeight
     */
    searchFieldName?: string | null;
    /**
     * weight to apply to boost field
     * @type {number}
     * @memberof SiteSearchFieldWeight
     */
    weight?: number;
}
/**
 * 
 * @export
 * @interface SiteSearchSettings
 */
export interface SiteSearchSettings {
    /**
     * controls sowBehavior (Never=0, Always=1, WhenNoMultiTermSyn=2)
     * never sow=false, always sow=true,  WhenNoMultiTermSyn = (depends on existance of multitermsynonym match in query)
     * @type {number}
     * @memberof SiteSearchSettings
     */
    sowBehavior?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SiteSearchSettings
     */
    searchMode?: number | null;
    /**
     * 
     * @type {VectorSearchSettings}
     * @memberof SiteSearchSettings
     */
    vectorSettings?: VectorSearchSettings;
    /**
     * 
     * @type {Array<SiteSearchFieldWeight>}
     * @memberof SiteSearchSettings
     */
    fieldWeights?: Array<SiteSearchFieldWeight> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SiteSearchSettings
     */
    customBoosts?: Array<string> | null;
    /**
     * 
     * @type {FieldValueBoost}
     * @memberof SiteSearchSettings
     */
    fieldValueBoost?: FieldValueBoost;
    /**
     * if values present is used for mm when sowBehavior.WhenNoMultiTermSyn and multi term sym match found in query
     * if no values are present or null fallback to MinMatchPercents
     * @type {Array<number>}
     * @memberof SiteSearchSettings
     */
    multiTermSynMinimumMatchPercents?: Array<number> | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof SiteSearchSettings
     */
    minimumMatchPercents?: Array<number> | null;
    /**
     * 
     * @type {number}
     * @memberof SiteSearchSettings
     */
    phraseSlop?: number;
    /**
     * if true, 2 word shingles used for phrase boosting based on fields with phrase weights greater than 0
     * if false, only full phrase mathing used for phrase boosting
     * @type {boolean}
     * @memberof SiteSearchSettings
     */
    twoWordPhraseBoost?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof SiteSearchSettings
     */
    personalizationExperience?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SiteSearchSettings
     */
    personalizationFactor?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof SiteSearchSettings
     */
    searchChildProductsByDefault?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SiteSearchSettings
     */
    crossFieldAdditiveScoreFactor?: number;
    /**
     * 
     * @type {TypoTolerance}
     * @memberof SiteSearchSettings
     */
    typoTolerance?: TypoTolerance;
    /**
     * 
     * @type {CatalogAdminsSpellcheck}
     * @memberof SiteSearchSettings
     */
    spellcheck?: CatalogAdminsSpellcheck;
}
/**
 * Container class for Slicing Settings
 * @export
 * @interface SlicingSettings
 */
export interface SlicingSettings {
    /**
     * Product option FQN to create slices on
     * @type {string}
     * @memberof SlicingSettings
     */
    slicingAttributeFqn?: string | null;
}
/**
 * 
 * @export
 * @interface SpellcheckUpdate
 */
export interface SpellcheckUpdate {
    /**
     * Spellcheck true/false
     * @type {boolean}
     * @memberof SpellcheckUpdate
     */
    spellcheckEnabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SpellcheckUpdate
     */
    tenantId?: number;
    /**
     * 
     * @type {number}
     * @memberof SpellcheckUpdate
     */
    masterCatalogId?: number;
    /**
     * e.g en-US
     * @type {string}
     * @memberof SpellcheckUpdate
     */
    localeCode?: string | null;
}
/**
 * 
 * @export
 * @interface StackingConfiguration
 */
export interface StackingConfiguration {
    /**
     * Indicates if discount stacking is enabled for discounts in this catalog
     * @type {boolean}
     * @memberof StackingConfiguration
     */
    stackingEnabled?: boolean;
    /**
     * Number of Product Order discount layers
     * @type {number}
     * @memberof StackingConfiguration
     */
    productOrderLayers?: number;
    /**
     * Number of Product Line Item discount layers
     * @type {number}
     * @memberof StackingConfiguration
     */
    productLineItemLayers?: number;
}
/**
 * 
 * @export
 * @interface SuggestSettings
 */
export interface SuggestSettings {
    /**
     * 
     * @type {Array<FieldWeight>}
     * @memberof SuggestSettings
     */
    fieldWeights?: Array<FieldWeight> | null;
    /**
     * 
     * @type {string}
     * @memberof SuggestSettings
     */
    personalizationExperience?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SuggestSettings
     */
    personalizationFactor?: number | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SuggestSettings
     */
    returnFields?: Array<string> | null;
    /**
     * 
     * @type {number}
     * @memberof SuggestSettings
     */
    crossFieldAdditiveScoreFactor?: number;
}
/**
 * 
 * @export
 * @interface SynonymDefinition
 */
export interface SynonymDefinition {
    /**
     * The unique identifier for the synonym definition
     * @type {number}
     * @memberof SynonymDefinition
     */
    synonymId?: number | null;
    /**
     * If key is defined then map is directed
     * @type {string}
     * @memberof SynonymDefinition
     */
    key?: string | null;
    /**
     * List of synonyms.  If no key is defined the matches are bidirectional
     * @type {Array<string>}
     * @memberof SynonymDefinition
     */
    synonyms?: Array<string> | null;
}
/**
 * Non-paged collection of all synonyms for a Site-Locale. Used for bulk operations
 * @export
 * @interface SynonymDefinitionCollection
 */
export interface SynonymDefinitionCollection {
    /**
     * Read-only TenantId
     * @type {number}
     * @memberof SynonymDefinitionCollection
     */
    tenantId?: number;
    /**
     * Read-only  Site Id
     * @type {number}
     * @memberof SynonymDefinitionCollection
     */
    siteId?: number;
    /**
     * The locale code to which this definition applies
     * @type {string}
     * @memberof SynonymDefinitionCollection
     */
    localeCode?: string | null;
    /**
     * List of mappings for this definition
     * @type {Array<SynonymDefinition>}
     * @memberof SynonymDefinitionCollection
     */
    synonymDefinitions?: Array<SynonymDefinition> | null;
}
/**
 * Paged collection of synonyms for a Site-Locale.
 * @export
 * @interface SynonymDefinitionPagedCollection
 */
export interface SynonymDefinitionPagedCollection {
    /**
     * 
     * @type {number}
     * @memberof SynonymDefinitionPagedCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof SynonymDefinitionPagedCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof SynonymDefinitionPagedCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof SynonymDefinitionPagedCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<SynonymDefinition>}
     * @memberof SynonymDefinitionPagedCollection
     */
    items?: Array<SynonymDefinition> | null;
}
/**
 * Collection of Tags returned as a whole. A collection is not paged.
 * @export
 * @interface TagCollection
 */
export interface TagCollection {
    /**
     * 
     * @type {number}
     * @memberof TagCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof TagCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof TagCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof TagCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<CatalogAdminsTag>}
     * @memberof TagCollection
     */
    items?: Array<CatalogAdminsTag> | null;
}
/**
 * 
 * @export
 * @interface TagNode
 */
export interface TagNode {
    /**
     * 
     * @type {string}
     * @memberof TagNode
     */
    tagName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TagNode
     */
    tagPath?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TagNode
     */
    tagCode?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof TagNode
     */
    isRoot?: boolean;
    /**
     * 
     * @type {Array<TagNode>}
     * @memberof TagNode
     */
    children?: Array<TagNode> | null;
}
/**
 * Hierarchical tree for Tags
 * @export
 * @interface TagNodeTree
 */
export interface TagNodeTree {
    /**
     * 
     * @type {number}
     * @memberof TagNodeTree
     */
    total?: number;
    /**
     * 
     * @type {boolean}
     * @memberof TagNodeTree
     */
    success?: boolean;
    /**
     * 
     * @type {TagNode}
     * @memberof TagNodeTree
     */
    items?: TagNode;
}
/**
 * Category to discount. When a discount applies to a category, all products in the category are discounted.
 * @export
 * @interface TargetedCategory
 */
export interface TargetedCategory {
    /**
     * Unique identifier of the category to which the discount applies.
     * @type {number}
     * @memberof TargetedCategory
     */
    id?: number | null;
}
/**
 * Product to discount.
 * @export
 * @interface TargetedProduct
 */
export interface TargetedProduct {
    /**
     * Product code of the product to discount.
     * @type {string}
     * @memberof TargetedProduct
     */
    productCode?: string | null;
}
/**
 * Shipping method that is eligible for free shipping. This is the shipping method that is defined with the Shipping
 * Settings resource.
 * @export
 * @interface TargetedShippingMethod
 */
export interface TargetedShippingMethod {
    /**
     * Unique identifier of the shipping method as it appears in the SiteShippingMethod property of the Shipping Settings
     * resource.
     * @type {string}
     * @memberof TargetedShippingMethod
     */
    code: string;
    /**
     * Name of the shipping method as it appears in SiteShippingMethodLocalizedContent of the Shipping Settings resource.
     * @type {string}
     * @memberof TargetedShippingMethod
     */
    name?: string | null;
}
/**
 * Shipping method that is eligible for free shipping. This is the shipping method that is defined with the Shipping
 * Settings resource.
 * @export
 * @interface TargetedShippingZone
 */
export interface TargetedShippingZone {
    /**
     * Indicates the shipping zone that this discount is valid for.  If zone is provided the
     * method selected must be valid for the zone and both populated in the order for the discount
     * to be valid.
     * @type {string}
     * @memberof TargetedShippingZone
     */
    zone: string;
}
/**
 * 
 * @export
 * @interface ThresholdMessageLocalizedContent
 */
export interface ThresholdMessageLocalizedContent {
    /**
     * Language used for the discount in the current catalog. Defaults setting for the active catalog.
     * @type {string}
     * @memberof ThresholdMessageLocalizedContent
     */
    localeCode?: string | null;
    /**
     * Locale-based contents of the Threshold Message.
     * @type {string}
     * @memberof ThresholdMessageLocalizedContent
     */
    messageTemplate: string;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof ThresholdMessageLocalizedContent
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * 
 * @export
 * @interface TypoTolerance
 */
export interface TypoTolerance {
    /**
     * Typo tolerance distance for fuzzy match. Must be Integer 1-10.
     * @type {number}
     * @memberof TypoTolerance
     */
    factor?: number;
    /**
     * Typo tolerance distance for fuzzy match. Must be Integer 1 or 2.
     * @type {number}
     * @memberof TypoTolerance
     */
    distance?: number;
    /**
     * Only the class itself can set Enabled to some value, 
     * however anyone could read the value in Enabled.
     * @type {boolean}
     * @memberof TypoTolerance
     */
    readonly enabled?: boolean;
}
/**
 * 
 * @export
 * @interface VectorSearchSettings
 */
export interface VectorSearchSettings {
    /**
     * 
     * @type {number}
     * @memberof VectorSearchSettings
     */
    topK?: number;
    /**
     * 
     * @type {number}
     * @memberof VectorSearchSettings
     */
    hybridMode?: number;
    /**
     * 
     * @type {number}
     * @memberof VectorSearchSettings
     */
    thresholdDistance?: number;
    /**
     * 
     * @type {boolean}
     * @memberof VectorSearchSettings
     */
    filterByThresholdDistance?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof VectorSearchSettings
     */
    multiplier?: number;
    /**
     * 
     * @type {boolean}
     * @memberof VectorSearchSettings
     */
    applyBoostFunctions?: boolean;
}
