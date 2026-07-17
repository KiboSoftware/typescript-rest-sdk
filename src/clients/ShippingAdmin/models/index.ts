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
 * @interface AppDevHttpContent
 */
export interface AppDevHttpContent {
    /**
     * 
     * @type {Array<StringStringIEnumerableKeyValuePair>}
     * @memberof AppDevHttpContent
     */
    readonly headers?: Array<StringStringIEnumerableKeyValuePair> | null;
}
/**
 * 
 * @export
 * @interface AttributeValueLocalizedContent
 */
export interface AttributeValueLocalizedContent {
    /**
     * 
     * @type {string}
     * @memberof AttributeValueLocalizedContent
     */
    localeCode: string;
    /**
     * 
     * @type {string}
     * @memberof AttributeValueLocalizedContent
     */
    value: string;
}
/**
 * 
 * @export
 * @interface CarrierConfiguration
 */
export interface CarrierConfiguration {
    /**
     * Carrier Id (usually a shortname of a carrier, e.g. FedEx)
     * @type {string}
     * @memberof CarrierConfiguration
     */
    id?: string | null;
    /**
     * Indicates that this CarrierConfiguration should be used at runtime
     * @type {boolean}
     * @memberof CarrierConfiguration
     */
    enabled?: boolean;
    /**
     * Indicates that this CarrierConfiguration should be the default for returns shipping
     * @type {boolean}
     * @memberof CarrierConfiguration
     */
    enabledForReturns?: boolean;
    /**
     * Carrier Configuration Settings
     * @type {Array<Setting>}
     * @memberof CarrierConfiguration
     */
    settings?: Array<Setting> | null;
    /**
     * A list of custom table rates for the 'Custom' carrier
     * <remarks>only use this if Id == 'Custom'</remarks>
     * @type {Array<CustomTableRate>}
     * @memberof CarrierConfiguration
     */
    customTableRates?: Array<CustomTableRate> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CarrierConfiguration
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * Indicates whether the credentials/passwords are set.
     * <remarks>Credetials are updated only if this flag is set to true</remarks>
     * @type {boolean}
     * @memberof CarrierConfiguration
     */
    areCredentialsSet?: boolean;
}
/**
 * Collection of carrrier configurations.
 * @export
 * @interface CarrierConfigurationCollection
 */
export interface CarrierConfigurationCollection {
    /**
     * 
     * @type {number}
     * @memberof CarrierConfigurationCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof CarrierConfigurationCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof CarrierConfigurationCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof CarrierConfigurationCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<CarrierConfiguration>}
     * @memberof CarrierConfigurationCollection
     */
    items?: Array<CarrierConfiguration> | null;
}
/**
 * Stores a reference to a Mozu.ShippingAdmin.Contracts.Carriers.CarrierCredentialSet for use at different levels.
 * Valid levels include Site, Location Group, and Location. Different levels may be used for rates versus labels.
 * Site level is overriden by Location Group level which is overriden by Location level.
 * @export
 * @interface CarrierCredential
 */
export interface CarrierCredential {
    /**
     * The Carrier ID associated with this carrier credential.
     * Usually the short name of a carrier (e.g., "FedEx").
     * @type {string}
     * @memberof CarrierCredential
     */
    carrierId?: string | null;
    /**
     * The Site ID associated with this carrier credential, if any.
     * @type {number}
     * @memberof CarrierCredential
     */
    siteId?: number | null;
    /**
     * The Location Group Code associated with this carrier credential, if any.
     * @type {string}
     * @memberof CarrierCredential
     */
    locationGroupCode?: string | null;
    /**
     * The Location Code associated with this carrier credential, if any.
     * @type {string}
     * @memberof CarrierCredential
     */
    locationCode?: string | null;
    /**
     * 
     * @type {CarrierCredentialSet}
     * @memberof CarrierCredential
     */
    credentialSet?: CarrierCredentialSet;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CarrierCredential
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * A collection of <see cref="T:Mozu.ShippingAdmin.Contracts.Carriers.CarrierCredential">carrier credentials</see>.
 * @export
 * @interface CarrierCredentialCollection
 */
export interface CarrierCredentialCollection {
    /**
     * 
     * @type {number}
     * @memberof CarrierCredentialCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof CarrierCredentialCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof CarrierCredentialCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof CarrierCredentialCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<CarrierCredential>}
     * @memberof CarrierCredentialCollection
     */
    items?: Array<CarrierCredential> | null;
}
/**
 * Stores a set of <see cref="T:Mozu.ShippingAdmin.Contracts.Carriers.CarrierCredentialSetValue">carrier credential key-value pairs</see>.
 * Sets are stored at the tenant level and referenced by a Mozu.ShippingAdmin.Contracts.Carriers.CarrierCredential.
 * @export
 * @interface CarrierCredentialSet
 */
export interface CarrierCredentialSet {
    /**
     * The Carrier ID associated with this credential set.
     * Usually the short name of a carrier (e.g., "FedEx").
     * @type {string}
     * @memberof CarrierCredentialSet
     */
    carrierId?: string | null;
    /**
     * A unique code identifying this credential set.
     * The code is only guaranteed to be unique at the tenant and carrier level.
     * @type {string}
     * @memberof CarrierCredentialSet
     */
    code?: string | null;
    /**
     * A name (i.e., nickname) for this credential set.
     * @type {string}
     * @memberof CarrierCredentialSet
     */
    name?: string | null;
    /**
     * A collection of values contained in this credential set.
     * @type {Array<CarrierCredentialSetValue>}
     * @memberof CarrierCredentialSet
     */
    values?: Array<CarrierCredentialSetValue> | null;
    /**
     * Specifies the ID returned from an integration.
     * @type {string}
     * @memberof CarrierCredentialSet
     */
    integrationId?: string | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CarrierCredentialSet
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * A collection of <see cref="T:Mozu.ShippingAdmin.Contracts.Carriers.CarrierCredentialSet">carrier credential sets</see>.
 * @export
 * @interface CarrierCredentialSetCollection
 */
export interface CarrierCredentialSetCollection {
    /**
     * 
     * @type {number}
     * @memberof CarrierCredentialSetCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof CarrierCredentialSetCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof CarrierCredentialSetCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof CarrierCredentialSetCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<CarrierCredentialSet>}
     * @memberof CarrierCredentialSetCollection
     */
    items?: Array<CarrierCredentialSet> | null;
}
/**
 * The metadata for a single field on a Mozu.ShippingAdmin.Contracts.Carriers.CarrierCredentialSet.
 * This metadata is used during carrier installation and carrier credential set validation.
 * @export
 * @interface CarrierCredentialSetMetadata
 */
export interface CarrierCredentialSetMetadata {
    /**
     * 
     * @type {string}
     * @memberof CarrierCredentialSetMetadata
     */
    name?: string | null;
    /**
     * 
     * @type {CarrierCredentialSetMetadataDataType}
     * @memberof CarrierCredentialSetMetadata
     */
    dataType?: CarrierCredentialSetMetadataDataType;
    /**
     * 
     * @type {boolean}
     * @memberof CarrierCredentialSetMetadata
     */
    required?: boolean;
    /**
     * 
     * @type {Array<CarrierCredentialSetMetadataLocalizedContent>}
     * @memberof CarrierCredentialSetMetadata
     */
    localizations?: Array<CarrierCredentialSetMetadataLocalizedContent> | null;
}

/**
 * The type of field stored in a Mozu.ShippingAdmin.Contracts.Carriers.CarrierCredentialSetMetadata item.
 * @export
 */
export const CarrierCredentialSetMetadataDataType = {
    String: 'String',
    Integer: 'Integer',
    Boolean: 'Boolean',
    Password: 'Password'
} as const;
export type CarrierCredentialSetMetadataDataType = typeof CarrierCredentialSetMetadataDataType[keyof typeof CarrierCredentialSetMetadataDataType];

/**
 * The localized content for a Mozu.ShippingAdmin.Contracts.Carriers.CarrierCredentialSetMetadata item.
 * @export
 * @interface CarrierCredentialSetMetadataLocalizedContent
 */
export interface CarrierCredentialSetMetadataLocalizedContent {
    /**
     * 
     * @type {string}
     * @memberof CarrierCredentialSetMetadataLocalizedContent
     */
    localeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CarrierCredentialSetMetadataLocalizedContent
     */
    label?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CarrierCredentialSetMetadataLocalizedContent
     */
    description?: string | null;
}
/**
 * A key-value pair associated with a Mozu.ShippingAdmin.Contracts.Carriers.CarrierCredentialSet.
 * @export
 * @interface CarrierCredentialSetValue
 */
export interface CarrierCredentialSetValue {
    /**
     * 
     * @type {string}
     * @memberof CarrierCredentialSetValue
     */
    key?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CarrierCredentialSetValue
     */
    value?: string | null;
}
/**
 * A carrier definition including config field metadata.
 * Can either be a built-in system carrier or an Extensible Carrier installed via a <see cref="T:Mozu.ShippingAdmin.Contracts.Carriers.CarrierInstallation">carrier installation</see>.
 * @export
 * @interface CarrierDefinition
 */
export interface CarrierDefinition {
    /**
     * 
     * @type {string}
     * @memberof CarrierDefinition
     */
    carrierId?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CarrierDefinition
     */
    isBuiltIn?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CarrierDefinition
     */
    certified?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof CarrierDefinition
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CarrierDefinition
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CarrierDefinition
     */
    logoUrl?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof CarrierDefinition
     */
    features?: Array<string> | null;
    /**
     * 
     * @type {Array<CarrierCredentialSetMetadata>}
     * @memberof CarrierDefinition
     */
    configFields?: Array<CarrierCredentialSetMetadata> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CarrierDefinition
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeAttribute
 */
export interface CommerceRuntimeAttribute {
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeAttribute
     */
    id?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttribute
     */
    adminName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttribute
     */
    namespace?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttribute
     */
    attributeCode: string;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttribute
     */
    inputType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttribute
     */
    valueType: string;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttribute
     */
    dataType?: string | null;
    /**
     * 
     * @type {Array<CommerceRuntimeAttributeMetadataItem>}
     * @memberof CommerceRuntimeAttribute
     */
    attributeMetadata?: Array<CommerceRuntimeAttributeMetadataItem> | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttribute
     */
    attributeFQN?: string | null;
    /**
     * 
     * @type {CommerceRuntimeAttributeLocalizedContent}
     * @memberof CommerceRuntimeAttribute
     */
    content?: CommerceRuntimeAttributeLocalizedContent;
    /**
     * 
     * @type {CommerceRuntimeAttributeValidation}
     * @memberof CommerceRuntimeAttribute
     */
    validation?: CommerceRuntimeAttributeValidation;
    /**
     * 
     * @type {Array<CommerceRuntimeAttributeVocabularyValue>}
     * @memberof CommerceRuntimeAttribute
     */
    vocabularyValues?: Array<CommerceRuntimeAttributeVocabularyValue> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CommerceRuntimeAttribute
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeAttribute
     */
    isActive?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeAttribute
     */
    isRequired?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeAttribute
     */
    isReadOnly?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeAttribute
     */
    isMultiValued?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeAttribute
     */
    isVisible?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeAttribute
     */
    order?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttribute
     */
    displayGroup: string;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeAttribute
     */
    availableForOrderRouting?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeAttribute
     */
    availableForDiscounts?: boolean;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeAttributeCollection
 */
export interface CommerceRuntimeAttributeCollection {
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeAttributeCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeAttributeCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeAttributeCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeAttributeCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<CommerceRuntimeAttribute>}
     * @memberof CommerceRuntimeAttributeCollection
     */
    items?: Array<CommerceRuntimeAttribute> | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeAttributeLocalizedContent
 */
export interface CommerceRuntimeAttributeLocalizedContent {
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttributeLocalizedContent
     */
    localeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttributeLocalizedContent
     */
    value?: string | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeAttributeMetadataItem
 */
export interface CommerceRuntimeAttributeMetadataItem {
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttributeMetadataItem
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttributeMetadataItem
     */
    value: string;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeAttributeValidation
 */
export interface CommerceRuntimeAttributeValidation {
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttributeValidation
     */
    regularExpression?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeAttributeValidation
     */
    minStringLength?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeAttributeValidation
     */
    maxStringLength?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeAttributeValidation
     */
    minNumericValue?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeAttributeValidation
     */
    maxNumericValue?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttributeValidation
     */
    minDateTime?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttributeValidation
     */
    maxDateTime?: string | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeAttributeVocabularyValue
 */
export interface CommerceRuntimeAttributeVocabularyValue {
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttributeVocabularyValue
     */
    value: string;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeAttributeVocabularyValue
     */
    sequence?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeAttributeVocabularyValue
     */
    isHidden?: boolean | null;
    /**
     * 
     * @type {AttributeValueLocalizedContent}
     * @memberof CommerceRuntimeAttributeVocabularyValue
     */
    content?: AttributeValueLocalizedContent;
}
/**
 * 
 * @export
 * @interface CustomTableRate
 */
export interface CustomTableRate {
    /**
     * The Id of the CustomTableRate
     * @type {string}
     * @memberof CustomTableRate
     */
    id?: string | null;
    /**
     * 
     * @type {CustomTableRateContent}
     * @memberof CustomTableRate
     */
    content?: CustomTableRateContent;
    /**
     * The type of this rate
     * <value>see ../commerce/catalog/admin/shipping/global/carriers/custom/serviceTypes/en-us</value>
     * @type {string}
     * @memberof CustomTableRate
     */
    rateType?: string | null;
    /**
     * The value of this custom table rate
     * @type {number}
     * @memberof CustomTableRate
     */
    value?: number;
    /**
     * The number of days it takes to ship the item on custom carrier types. 
     * Allowed values : EXPRESS, 1_DAY, 2_DAY, 3_DAY
     * @type {string}
     * @memberof CustomTableRate
     */
    deliveryDuration?: string | null;
}
/**
 * 
 * @export
 * @interface CustomTableRateContent
 */
export interface CustomTableRateContent {
    /**
     * 
     * @type {string}
     * @memberof CustomTableRateContent
     */
    localeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomTableRateContent
     */
    name?: string | null;
}
/**
 * An object to group a handling fee with zones, rules, and servicetypes
 * @export
 * @interface HandlingFeeRule
 */
export interface HandlingFeeRule {
    /**
     * The system generated id for this rule
     * @type {string}
     * @memberof HandlingFeeRule
     */
    id?: string | null;
    /**
     * The sequence in which this rule is preferred over others
     * @type {number}
     * @memberof HandlingFeeRule
     */
    sequence?: number;
    /**
     * The shipping target rule codes associated with this rule
     * <remarks>leave empty or null to denote all destinations</remarks>
     * @type {Array<string>}
     * @memberof HandlingFeeRule
     */
    shippingTargetRuleCodes?: Array<string> | null;
    /**
     * the product target rule codes associated with this rule
     * <remarks>leave empty or null to denote all products</remarks>
     * @type {Array<string>}
     * @memberof HandlingFeeRule
     */
    productTargetRuleCodes?: Array<string> | null;
    /**
     * the servicetypes associated with this rule
     * <remarks>leave empty or null to denote all carriers and subsequent service types</remarks>
     * @type {Array<ServiceType>}
     * @memberof HandlingFeeRule
     */
    serviceTypes?: Array<ServiceType> | null;
    /**
     * The type of this handling fee
     * <value>percentage</value><value>flatrate</value>
     * @type {string}
     * @memberof HandlingFeeRule
     */
    valueType?: string | null;
    /**
     * The level at which this fee applies
     * <value>shippingrate</value><value>order</value>
     * @type {string}
     * @memberof HandlingFeeRule
     */
    appliesTo?: string | null;
    /**
     * The value of this fee
     * @type {number}
     * @memberof HandlingFeeRule
     */
    value?: number;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof HandlingFeeRule
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * A collection of FeeGroups
 * @export
 * @interface HandlingFeeRuleCollection
 */
export interface HandlingFeeRuleCollection {
    /**
     * 
     * @type {number}
     * @memberof HandlingFeeRuleCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<HandlingFeeRule>}
     * @memberof HandlingFeeRuleCollection
     */
    items?: Array<HandlingFeeRule> | null;
}
/**
 * 
 * @export
 * @interface HttpMethod
 */
export interface HttpMethod {
    /**
     * 
     * @type {string}
     * @memberof HttpMethod
     */
    method?: string | null;
}
/**
 * Option class for signature option
 * @export
 * @interface Option
 */
export interface Option {
    /**
     * User readable value to be shown to the user
     * @type {string}
     * @memberof Option
     */
    displayName?: string | null;
    /**
     * Value required by the actual carrier in carrier request
     * @type {string}
     * @memberof Option
     */
    carrierValue?: string | null;
    /**
     * Value required by other carrier or carrier aggragator like Easypost
     * @type {string}
     * @memberof Option
     */
    alternateCarrierValue?: string | null;
}
/**
 * Service Type aka Shipping Method
 * @export
 * @interface ServiceType
 */
export interface ServiceType {
    /**
     * Unique Service Type Code for a particular Carrier
     * @type {string}
     * @memberof ServiceType
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ServiceType
     */
    deliveryDuration?: string | null;
    /**
     * 
     * @type {ServiceTypeLocalizedContent}
     * @memberof ServiceType
     */
    content?: ServiceTypeLocalizedContent;
}
/**
 * 
 * @export
 * @interface ServiceTypeLocalizedContent
 */
export interface ServiceTypeLocalizedContent {
    /**
     * 
     * @type {string}
     * @memberof ServiceTypeLocalizedContent
     */
    localeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ServiceTypeLocalizedContent
     */
    name?: string | null;
}
/**
 * 
 * @export
 * @interface Setting
 */
export interface Setting {
    /**
     * 
     * @type {string}
     * @memberof Setting
     */
    key?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Setting
     */
    value?: string | null;
}
/**
 * 
 * @export
 * @interface ShippingAdminHttpRequestMessage
 */
export interface ShippingAdminHttpRequestMessage {
    /**
     * 
     * @type {string}
     * @memberof ShippingAdminHttpRequestMessage
     */
    version?: string | null;
    /**
     * 
     * @type {ShippingAdminHttpVersionPolicy}
     * @memberof ShippingAdminHttpRequestMessage
     */
    versionPolicy?: ShippingAdminHttpVersionPolicy;
    /**
     * 
     * @type {AppDevHttpContent}
     * @memberof ShippingAdminHttpRequestMessage
     */
    content?: AppDevHttpContent;
    /**
     * 
     * @type {HttpMethod}
     * @memberof ShippingAdminHttpRequestMessage
     */
    method?: HttpMethod;
    /**
     * 
     * @type {string}
     * @memberof ShippingAdminHttpRequestMessage
     */
    requestUri?: string | null;
    /**
     * 
     * @type {Array<StringStringIEnumerableKeyValuePair>}
     * @memberof ShippingAdminHttpRequestMessage
     */
    readonly headers?: Array<StringStringIEnumerableKeyValuePair> | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ShippingAdminHttpRequestMessage
     * @deprecated
     */
    readonly properties?: { [key: string]: any; } | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ShippingAdminHttpRequestMessage
     */
    readonly options?: { [key: string]: any; } | null;
}
/**
 * 
 * @export
 * @interface ShippingAdminHttpResponseMessage
 */
export interface ShippingAdminHttpResponseMessage {
    /**
     * 
     * @type {string}
     * @memberof ShippingAdminHttpResponseMessage
     */
    version?: string | null;
    /**
     * 
     * @type {AppDevHttpContent}
     * @memberof ShippingAdminHttpResponseMessage
     */
    content?: AppDevHttpContent;
    /**
     * 
     * @type {ShippingAdminHttpStatusCode}
     * @memberof ShippingAdminHttpResponseMessage
     */
    statusCode?: ShippingAdminHttpStatusCode;
    /**
     * 
     * @type {string}
     * @memberof ShippingAdminHttpResponseMessage
     */
    reasonPhrase?: string | null;
    /**
     * 
     * @type {Array<StringStringIEnumerableKeyValuePair>}
     * @memberof ShippingAdminHttpResponseMessage
     */
    readonly headers?: Array<StringStringIEnumerableKeyValuePair> | null;
    /**
     * 
     * @type {Array<StringStringIEnumerableKeyValuePair>}
     * @memberof ShippingAdminHttpResponseMessage
     */
    readonly trailingHeaders?: Array<StringStringIEnumerableKeyValuePair> | null;
    /**
     * 
     * @type {ShippingAdminHttpRequestMessage}
     * @memberof ShippingAdminHttpResponseMessage
     */
    requestMessage?: ShippingAdminHttpRequestMessage;
    /**
     * 
     * @type {boolean}
     * @memberof ShippingAdminHttpResponseMessage
     */
    readonly isSuccessStatusCode?: boolean;
}

/**
 * 
 * @export
 */
export const ShippingAdminHttpStatusCode = {
    Continue: 'Continue',
    SwitchingProtocols: 'SwitchingProtocols',
    Processing: 'Processing',
    EarlyHints: 'EarlyHints',
    Ok: 'OK',
    Created: 'Created',
    Accepted: 'Accepted',
    NonAuthoritativeInformation: 'NonAuthoritativeInformation',
    NoContent: 'NoContent',
    ResetContent: 'ResetContent',
    PartialContent: 'PartialContent',
    MultiStatus: 'MultiStatus',
    AlreadyReported: 'AlreadyReported',
    ImUsed: 'IMUsed',
    MultipleChoices: 'MultipleChoices',
    Ambiguous: 'Ambiguous',
    MovedPermanently: 'MovedPermanently',
    Moved: 'Moved',
    Found: 'Found',
    Redirect: 'Redirect',
    SeeOther: 'SeeOther',
    RedirectMethod: 'RedirectMethod',
    NotModified: 'NotModified',
    UseProxy: 'UseProxy',
    Unused: 'Unused',
    TemporaryRedirect: 'TemporaryRedirect',
    RedirectKeepVerb: 'RedirectKeepVerb',
    PermanentRedirect: 'PermanentRedirect',
    BadRequest: 'BadRequest',
    Unauthorized: 'Unauthorized',
    PaymentRequired: 'PaymentRequired',
    Forbidden: 'Forbidden',
    NotFound: 'NotFound',
    MethodNotAllowed: 'MethodNotAllowed',
    NotAcceptable: 'NotAcceptable',
    ProxyAuthenticationRequired: 'ProxyAuthenticationRequired',
    RequestTimeout: 'RequestTimeout',
    Conflict: 'Conflict',
    Gone: 'Gone',
    LengthRequired: 'LengthRequired',
    PreconditionFailed: 'PreconditionFailed',
    RequestEntityTooLarge: 'RequestEntityTooLarge',
    RequestUriTooLong: 'RequestUriTooLong',
    UnsupportedMediaType: 'UnsupportedMediaType',
    RequestedRangeNotSatisfiable: 'RequestedRangeNotSatisfiable',
    ExpectationFailed: 'ExpectationFailed',
    MisdirectedRequest: 'MisdirectedRequest',
    UnprocessableEntity: 'UnprocessableEntity',
    Locked: 'Locked',
    FailedDependency: 'FailedDependency',
    UpgradeRequired: 'UpgradeRequired',
    PreconditionRequired: 'PreconditionRequired',
    TooManyRequests: 'TooManyRequests',
    RequestHeaderFieldsTooLarge: 'RequestHeaderFieldsTooLarge',
    UnavailableForLegalReasons: 'UnavailableForLegalReasons',
    InternalServerError: 'InternalServerError',
    NotImplemented: 'NotImplemented',
    BadGateway: 'BadGateway',
    ServiceUnavailable: 'ServiceUnavailable',
    GatewayTimeout: 'GatewayTimeout',
    HttpVersionNotSupported: 'HttpVersionNotSupported',
    VariantAlsoNegotiates: 'VariantAlsoNegotiates',
    InsufficientStorage: 'InsufficientStorage',
    LoopDetected: 'LoopDetected',
    NotExtended: 'NotExtended',
    NetworkAuthenticationRequired: 'NetworkAuthenticationRequired'
} as const;
export type ShippingAdminHttpStatusCode = typeof ShippingAdminHttpStatusCode[keyof typeof ShippingAdminHttpStatusCode];


/**
 * 
 * @export
 */
export const ShippingAdminHttpVersionPolicy = {
    RequestVersionOrLower: 'RequestVersionOrLower',
    RequestVersionOrHigher: 'RequestVersionOrHigher',
    RequestVersionExact: 'RequestVersionExact'
} as const;
export type ShippingAdminHttpVersionPolicy = typeof ShippingAdminHttpVersionPolicy[keyof typeof ShippingAdminHttpVersionPolicy];

/**
 * 
 * @export
 * @interface ShippingAdminState
 */
export interface ShippingAdminState {
    /**
     * 
     * @type {string}
     * @memberof ShippingAdminState
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingAdminState
     */
    name?: string | null;
}
/**
 * An object to bind service types to shipping target rules and/or product target rules
 * @export
 * @interface ShippingInclusionRule
 */
export interface ShippingInclusionRule {
    /**
     * The system generated id of this shipping inclusion rule
     * @type {string}
     * @memberof ShippingInclusionRule
     */
    id?: string | null;
    /**
     * The sequence in which this rule is preferred over others
     * @type {number}
     * @memberof ShippingInclusionRule
     */
    sequence?: number;
    /**
     * The shipping target rule codes associated with this rule
     * <remarks>leave empty or null to denote all destinations</remarks>
     * @type {Array<string>}
     * @memberof ShippingInclusionRule
     */
    shippingTargetRuleCodes?: Array<string> | null;
    /**
     * the product target rule codes associated with this rule
     * <remarks>leave empty or null to denote all products</remarks>
     * @type {Array<string>}
     * @memberof ShippingInclusionRule
     */
    productTargetRuleCodes?: Array<string> | null;
    /**
     * the servicetypes associated with this rule
     * <remarks>leave empty or null to denote all carriers and subsequent service types</remarks>
     * @type {Array<ServiceType>}
     * @memberof ShippingInclusionRule
     */
    serviceTypes?: Array<ServiceType> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof ShippingInclusionRule
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * A collection of methodgroup
 * @export
 * @interface ShippingInclusionRuleCollection
 */
export interface ShippingInclusionRuleCollection {
    /**
     * 
     * @type {number}
     * @memberof ShippingInclusionRuleCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<ShippingInclusionRule>}
     * @memberof ShippingInclusionRuleCollection
     */
    items?: Array<ShippingInclusionRule> | null;
}
/**
 * 
 * @export
 * @interface ShippingProfile
 */
export interface ShippingProfile {
    /**
     * Merchant entered unique identifier for a ShippingProfile
     * @type {string}
     * @memberof ShippingProfile
     */
    code?: string | null;
    /**
     * The siteid's for which this profile applies
     * <remarks>for now there is a 1-1 relationship between this profile and site so only 1 siteid should be in this list</remarks>
     * @type {Array<number>}
     * @memberof ShippingProfile
     */
    targetedSiteIds?: Array<number> | null;
    /**
     * 
     * @type {Array<ShippingInclusionRule>}
     * @memberof ShippingProfile
     */
    shippingInclusionRules?: Array<ShippingInclusionRule> | null;
    /**
     * 
     * @type {Array<HandlingFeeRule>}
     * @memberof ShippingProfile
     */
    productHandlingFeeRules?: Array<HandlingFeeRule> | null;
    /**
     * 
     * @type {Array<HandlingFeeRule>}
     * @memberof ShippingProfile
     */
    orderHandlingFeeRules?: Array<HandlingFeeRule> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof ShippingProfile
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * a collection of profiles
 * @export
 * @interface ShippingProfileCollection
 */
export interface ShippingProfileCollection {
    /**
     * 
     * @type {number}
     * @memberof ShippingProfileCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<ShippingProfile>}
     * @memberof ShippingProfileCollection
     */
    items?: Array<ShippingProfile> | null;
}
/**
 * 
 * @export
 * @interface ShippingStates
 */
export interface ShippingStates {
    /**
     * 
     * @type {string}
     * @memberof ShippingStates
     */
    countryCode?: string | null;
    /**
     * 
     * @type {Set<ShippingAdminState>}
     * @memberof ShippingStates
     */
    states?: Set<ShippingAdminState> | null;
}
/**
 * Signature options against a carrier
 * @export
 * @interface SignatureOption
 */
export interface SignatureOption {
    /**
     * If carrier is enabled for signature option.
     * @type {boolean}
     * @memberof SignatureOption
     */
    isEnabled?: boolean;
    /**
     * Supported signature options
     * @type {Array<Option>}
     * @memberof SignatureOption
     */
    options?: Array<Option> | null;
    /**
     * Carrier Id
     * @type {string}
     * @memberof SignatureOption
     */
    carrierId?: string | null;
}
/**
 * 
 * @export
 * @interface StringStringIEnumerableKeyValuePair
 */
export interface StringStringIEnumerableKeyValuePair {
    /**
     * 
     * @type {string}
     * @memberof StringStringIEnumerableKeyValuePair
     */
    key?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof StringStringIEnumerableKeyValuePair
     */
    value?: Array<string> | null;
}
/**
 * An object used to define a bool expression against a particular domain type
 * @export
 * @interface TargetRule
 */
export interface TargetRule {
    /**
     * The user defined code for this rule
     * <remarks>must be unique</remarks>
     * @type {string}
     * @memberof TargetRule
     */
    code?: string | null;
    /**
     * The description of this rule
     * @type {string}
     * @memberof TargetRule
     */
    description?: string | null;
    /**
     * The domain of this rule
     * <value>Product</value><value>Order</value>
     * @type {string}
     * @memberof TargetRule
     */
    domain?: string | null;
    /**
     * the expression of this rule
     * @type {string}
     * @memberof TargetRule
     */
    expression?: string | null;
}
/**
 * A collection of zones
 * @export
 * @interface TargetRuleCollection
 */
export interface TargetRuleCollection {
    /**
     * 
     * @type {number}
     * @memberof TargetRuleCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<TargetRule>}
     * @memberof TargetRuleCollection
     */
    items?: Array<TargetRule> | null;
}
