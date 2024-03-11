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
 * @interface BoxType
 */
export interface BoxType {
    /**
     * 
     * @type {string}
     * @memberof BoxType
     */
    name?: string | null;
    /**
     * 
     * @type {number}
     * @memberof BoxType
     */
    height?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BoxType
     */
    width?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BoxType
     */
    length?: number | null;
}
/**
 * 
 * @export
 * @interface BpmConfiguration
 */
export interface BpmConfiguration {
    /**
     * 
     * @type {string}
     * @memberof BpmConfiguration
     */
    shipmentType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BpmConfiguration
     */
    workflowContainerId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BpmConfiguration
     */
    workflowProcessId?: string | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeAddress
 */
export interface CommerceRuntimeAddress {
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAddress
     */
    address1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAddress
     */
    address2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAddress
     */
    address3?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAddress
     */
    address4?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAddress
     */
    cityOrTown?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAddress
     */
    stateOrProvince?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAddress
     */
    postalOrZipCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAddress
     */
    countryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAddress
     */
    addressType?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeAddress
     */
    isValidated?: boolean | null;
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
 * @interface Coordinates
 */
export interface Coordinates {
    /**
     * 
     * @type {number}
     * @memberof Coordinates
     */
    lat?: number;
    /**
     * 
     * @type {number}
     * @memberof Coordinates
     */
    lng?: number;
}
/**
 * 
 * @export
 * @interface FulfillmentProcessingTime
 */
export interface FulfillmentProcessingTime {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentProcessingTime
     */
    fulfillmentTypeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentProcessingTime
     */
    unit?: string | null;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentProcessingTime
     */
    value?: number;
}
/**
 * 
 * @export
 * @interface FulfillmentType
 */
export interface FulfillmentType {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentType
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentType
     */
    name?: string | null;
}
/**
 * 
 * @export
 * @interface Hours
 */
export interface Hours {
    /**
     * 
     * @type {string}
     * @memberof Hours
     */
    label?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Hours
     */
    openTime?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Hours
     */
    closeTime?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof Hours
     */
    isClosed?: boolean;
}
/**
 * 
 * @export
 * @interface Location
 */
export interface Location {
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    code?: string | null;
    /**
     * 
     * @type {Array<LocationType>}
     * @memberof Location
     */
    locationTypes?: Array<LocationType> | null;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    description?: string | null;
    /**
     * 
     * @type {CommerceRuntimeAddress}
     * @memberof Location
     */
    address?: CommerceRuntimeAddress;
    /**
     * 
     * @type {Coordinates}
     * @memberof Location
     */
    geo?: Coordinates;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    phone?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    fax?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof Location
     */
    supportsInventory?: boolean;
    /**
     * 
     * @type {Array<FulfillmentType>}
     * @memberof Location
     */
    fulfillmentTypes?: Array<FulfillmentType> | null;
    /**
     * 
     * @type {RegularHours}
     * @memberof Location
     */
    regularHours?: RegularHours;
    /**
     * 
     * @type {ShippingOriginContact}
     * @memberof Location
     */
    shippingOriginContact?: ShippingOriginContact;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    note?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Location
     */
    tags?: Array<string> | null;
    /**
     * 
     * @type {Array<LocationAttribute>}
     * @memberof Location
     */
    attributes?: Array<LocationAttribute> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof Location
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {boolean}
     * @memberof Location
     */
    allowFulfillmentWithNoStock?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Location
     */
    isDisabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Location
     */
    express?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Location
     */
    transferEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Location
     */
    shipToHomeConsolidation?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Location
     */
    includeInInventoryAggregrate?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Location
     */
    includeInLocationExport?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Location
     */
    warehouseEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Location
     */
    requiresManifest?: boolean;
    /**
     * 
     * @type {ProcessingTimes}
     * @memberof Location
     */
    processingTimes?: ProcessingTimes;
}
/**
 * 
 * @export
 * @interface LocationAttribute
 */
export interface LocationAttribute {
    /**
     * 
     * @type {CommerceRuntimeAttribute}
     * @memberof LocationAttribute
     */
    attributeDefinition?: CommerceRuntimeAttribute;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof LocationAttribute
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof LocationAttribute
     */
    fullyQualifiedName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof LocationAttribute
     */
    attributeDefinitionId?: number | null;
    /**
     * 
     * @type {Array<any>}
     * @memberof LocationAttribute
     */
    values?: Array<any> | null;
}
/**
 * 
 * @export
 * @interface LocationCarrier
 */
export interface LocationCarrier {
    /**
     * 
     * @type {string}
     * @memberof LocationCarrier
     */
    carrierType?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof LocationCarrier
     */
    isEnabled?: boolean;
    /**
     * 
     * @type {ShippingMethodMappings}
     * @memberof LocationCarrier
     */
    shippingMethodMappings?: ShippingMethodMappings;
    /**
     * 
     * @type {boolean}
     * @memberof LocationCarrier
     */
    enableMultiPieceShipment?: boolean | null;
}
/**
 * 
 * @export
 * @interface LocationCollection
 */
export interface LocationCollection {
    /**
     * 
     * @type {number}
     * @memberof LocationCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<Location>}
     * @memberof LocationCollection
     */
    items?: Array<Location> | null;
}
/**
 * 
 * @export
 * @interface LocationGroupCollection
 */
export interface LocationGroupCollection {
    /**
     * 
     * @type {number}
     * @memberof LocationGroupCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationGroupCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationGroupCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationGroupCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<LocationLocationGroup>}
     * @memberof LocationGroupCollection
     */
    items?: Array<LocationLocationGroup> | null;
}
/**
 * 
 * @export
 * @interface LocationGroupConfiguration
 */
export interface LocationGroupConfiguration {
    /**
     * 
     * @type {number}
     * @memberof LocationGroupConfiguration
     */
    tenantId?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationGroupConfiguration
     */
    siteId?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationGroupConfiguration
     */
    locationGroupId?: number;
    /**
     * 
     * @type {string}
     * @memberof LocationGroupConfiguration
     */
    locationGroupCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationGroupConfiguration
     */
    customerFailedToPickupAfterAction?: string | null;
    /**
     * 
     * @type {number}
     * @memberof LocationGroupConfiguration
     */
    customerFailedToPickupDeadline?: number | null;
    /**
     * 
     * @type {number}
     * @memberof LocationGroupConfiguration
     */
    sendCustomerPickupReminder?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof LocationGroupConfiguration
     */
    enableForSTH?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof LocationGroupConfiguration
     */
    enableForISPU?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof LocationGroupConfiguration
     */
    enableAdvancedOptionForPickWaveCreation?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof LocationGroupConfiguration
     */
    maximumNumberOfOrdersInPickWave?: number | null;
    /**
     * 
     * @type {number}
     * @memberof LocationGroupConfiguration
     */
    defaultNumberOfOrdersInPickWave?: number | null;
    /**
     * 
     * @type {string}
     * @memberof LocationGroupConfiguration
     */
    pickWavePrintFormat?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof LocationGroupConfiguration
     */
    closePickWavePermissions?: Array<string> | null;
    /**
     * 
     * @type {boolean}
     * @memberof LocationGroupConfiguration
     */
    wmsEnabled?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof LocationGroupConfiguration
     */
    enableScanningOfUpcForShipToHome?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof LocationGroupConfiguration
     */
    allowReturns?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof LocationGroupConfiguration
     */
    returnRefundReduction?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof LocationGroupConfiguration
     */
    defaultReturnRefundReductionAmount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof LocationGroupConfiguration
     */
    maximumReturnRefundReductionAmount?: number | null;
    /**
     * 
     * @type {string}
     * @memberof LocationGroupConfiguration
     */
    defaultCarrier?: string | null;
    /**
     * 
     * @type {Array<LocationCarrier>}
     * @memberof LocationGroupConfiguration
     */
    carriers?: Array<LocationCarrier> | null;
    /**
     * 
     * @type {boolean}
     * @memberof LocationGroupConfiguration
     */
    printReturnLabel?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof LocationGroupConfiguration
     */
    defaultPrinterType?: string | null;
    /**
     * 
     * @type {Array<BoxType>}
     * @memberof LocationGroupConfiguration
     */
    boxTypes?: Array<BoxType> | null;
    /**
     * 
     * @type {Array<LocationAttribute>}
     * @memberof LocationGroupConfiguration
     */
    attributes?: Array<LocationAttribute> | null;
    /**
     * 
     * @type {Array<BpmConfiguration>}
     * @memberof LocationGroupConfiguration
     */
    bpmConfigurations?: Array<BpmConfiguration> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof LocationGroupConfiguration
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {boolean}
     * @memberof LocationGroupConfiguration
     */
    autoPackingListPopup?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof LocationGroupConfiguration
     */
    blockPartialStock?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof LocationGroupConfiguration
     */
    defaultMaxNumberOfShipmentsInPickWave?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof LocationGroupConfiguration
     */
    displayProductImagesInPickWaveDetails?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof LocationGroupConfiguration
     */
    enablePnpForSTH?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof LocationGroupConfiguration
     */
    enablePnpForBOPIS?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof LocationGroupConfiguration
     */
    blockPartialCancel?: boolean | null;
    /**
     * 
     * @type {PackageSettings}
     * @memberof LocationGroupConfiguration
     */
    packageSettings?: PackageSettings;
    /**
     * 
     * @type {number}
     * @memberof LocationGroupConfiguration
     */
    maxNumberOfPackingSlipsByGroup?: number | null;
}
/**
 * 
 * @export
 * @interface LocationLocationGroup
 */
export interface LocationLocationGroup {
    /**
     * 
     * @type {number}
     * @memberof LocationLocationGroup
     */
    locationGroupId?: number;
    /**
     * 
     * @type {string}
     * @memberof LocationLocationGroup
     */
    locationGroupCode?: string | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof LocationLocationGroup
     */
    siteIds?: Array<number> | null;
    /**
     * 
     * @type {string}
     * @memberof LocationLocationGroup
     */
    name?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof LocationLocationGroup
     */
    locationCodes?: Array<string> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof LocationLocationGroup
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * 
 * @export
 * @interface LocationType
 */
export interface LocationType {
    /**
     * 
     * @type {string}
     * @memberof LocationType
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationType
     */
    name?: string | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof LocationType
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * 
 * @export
 * @interface LocationTypeCollection
 */
export interface LocationTypeCollection {
    /**
     * 
     * @type {number}
     * @memberof LocationTypeCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationTypeCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationTypeCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationTypeCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<LocationType>}
     * @memberof LocationTypeCollection
     */
    items?: Array<LocationType> | null;
}
/**
 * 
 * @export
 * @interface LocationUsage
 */
export interface LocationUsage {
    /**
     * 
     * @type {string}
     * @memberof LocationUsage
     */
    locationUsageTypeCode?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof LocationUsage
     */
    locationTypeCodes?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof LocationUsage
     */
    locationCodes?: Array<string> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof LocationUsage
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * 
 * @export
 * @interface LocationUsageCollection
 */
export interface LocationUsageCollection {
    /**
     * 
     * @type {number}
     * @memberof LocationUsageCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<LocationUsage>}
     * @memberof LocationUsageCollection
     */
    items?: Array<LocationUsage> | null;
}
/**
 * 
 * @export
 * @interface PackageSettings
 */
export interface PackageSettings {
    /**
     * 
     * @type {string}
     * @memberof PackageSettings
     */
    unitType?: string | null;
}
/**
 * 
 * @export
 * @interface ProcessingTimes
 */
export interface ProcessingTimes {
    /**
     * 
     * @type {Array<FulfillmentProcessingTime>}
     * @memberof ProcessingTimes
     */
    fulfillment?: Array<FulfillmentProcessingTime> | null;
    /**
     * 
     * @type {TransferTime}
     * @memberof ProcessingTimes
     */
    transfer?: TransferTime;
    /**
     * 
     * @type {ReceiveProcessingTime}
     * @memberof ProcessingTimes
     */
    receive?: ReceiveProcessingTime;
}
/**
 * 
 * @export
 * @interface ReceiveProcessingTime
 */
export interface ReceiveProcessingTime {
    /**
     * 
     * @type {string}
     * @memberof ReceiveProcessingTime
     */
    unit?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ReceiveProcessingTime
     */
    value?: number;
}
/**
 * 
 * @export
 * @interface RegularHours
 */
export interface RegularHours {
    /**
     * 
     * @type {Hours}
     * @memberof RegularHours
     */
    sunday?: Hours;
    /**
     * 
     * @type {Hours}
     * @memberof RegularHours
     */
    monday?: Hours;
    /**
     * 
     * @type {Hours}
     * @memberof RegularHours
     */
    tuesday?: Hours;
    /**
     * 
     * @type {Hours}
     * @memberof RegularHours
     */
    wednesday?: Hours;
    /**
     * 
     * @type {Hours}
     * @memberof RegularHours
     */
    thursday?: Hours;
    /**
     * 
     * @type {Hours}
     * @memberof RegularHours
     */
    friday?: Hours;
    /**
     * 
     * @type {Hours}
     * @memberof RegularHours
     */
    saturday?: Hours;
    /**
     * 
     * @type {string}
     * @memberof RegularHours
     */
    timeZone?: string | null;
}
/**
 * 
 * @export
 * @interface ShippingMethodMappings
 */
export interface ShippingMethodMappings {
    /**
     * 
     * @type {Array<string>}
     * @memberof ShippingMethodMappings
     */
    shippingMethods?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingMethodMappings
     */
    returnLabelShippingMethod?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingMethodMappings
     */
    standardDefault?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingMethodMappings
     */
    express1DayDefault?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingMethodMappings
     */
    express2DayDefault?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingMethodMappings
     */
    express3DayDefault?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ShippingMethodMappings
     */
    enableSmartPost?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof ShippingMethodMappings
     */
    useDeclaredValue?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingMethodMappings
     */
    internationalUsReturnLabelShippingMethod?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ShippingMethodMappings
     */
    requireSignatureAmount?: number | null;
}
/**
 * 
 * @export
 * @interface ShippingOriginContact
 */
export interface ShippingOriginContact {
    /**
     * 
     * @type {string}
     * @memberof ShippingOriginContact
     */
    firstName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingOriginContact
     */
    middleNameOrInitial?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingOriginContact
     */
    lastNameOrSurname?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingOriginContact
     */
    companyOrOrganization?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingOriginContact
     */
    phoneNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingOriginContact
     */
    email?: string | null;
}
/**
 * 
 * @export
 * @interface TransferTime
 */
export interface TransferTime {
    /**
     * 
     * @type {string}
     * @memberof TransferTime
     */
    unit?: string | null;
    /**
     * 
     * @type {number}
     * @memberof TransferTime
     */
    value?: number;
}
