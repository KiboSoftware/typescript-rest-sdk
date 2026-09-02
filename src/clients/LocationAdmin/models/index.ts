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
 * @interface BoxType
 */
export interface BoxType {
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
    length?: number | null;
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
    width?: number | null;
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
 * @interface Capacity
 */
export interface Capacity {
    /**
     * 
     * @type {number}
     * @memberof Capacity
     */
    shipmentsPerUnit?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Capacity
     */
    unitOfMeasure?: string | null;
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
    addressType?: string | null;
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
    countryCode?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeAddress
     */
    isValidated?: boolean | null;
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
    stateOrProvince?: string | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeAttributeCollection
 */
export interface CommerceRuntimeAttributeCollection {
    /**
     * 
     * @type {Array<LocationAdminAttribute>}
     * @memberof CommerceRuntimeAttributeCollection
     */
    items?: Array<LocationAdminAttribute> | null;
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
    pageSize?: number;
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
    totalCount?: number;
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
 * @interface CommerceRuntimeAttributeValidation
 */
export interface CommerceRuntimeAttributeValidation {
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttributeValidation
     */
    maxDateTime?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeAttributeValidation
     */
    maxNumericValue?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeAttributeValidation
     */
    maxStringLength?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttributeValidation
     */
    minDateTime?: string | null;
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
    minStringLength?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttributeValidation
     */
    regularExpression?: string | null;
}
/**
 * 
 * @export
 * @interface ContactInfo
 */
export interface ContactInfo {
    /**
     * 
     * @type {CommerceRuntimeAddress}
     * @memberof ContactInfo
     */
    address?: CommerceRuntimeAddress;
    /**
     * 
     * @type {string}
     * @memberof ContactInfo
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContactInfo
     */
    phone?: string | null;
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
 * @interface CutOffTimeRequest
 */
export interface CutOffTimeRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof CutOffTimeRequest
     */
    dates?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof CutOffTimeRequest
     */
    fulfillmentType?: string | null;
}
/**
 * 
 * @export
 * @interface CutoffHours
 */
export interface CutoffHours {
    /**
     * 
     * @type {string}
     * @memberof CutoffHours
     */
    endTime?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CutoffHours
     */
    isClosed?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CutoffHours
     */
    startTime?: string | null;
}
/**
 * 
 * @export
 * @interface CutoffSchedule
 */
export interface CutoffSchedule {
    /**
     * 
     * @type {string}
     * @memberof CutoffSchedule
     */
    fulfillmentType?: string | null;
    /**
     * 
     * @type {WeeklyCutoffHours}
     * @memberof CutoffSchedule
     */
    times?: WeeklyCutoffHours;
}
/**
 * 
 * @export
 * @interface CutoffTimeOverride
 */
export interface CutoffTimeOverride {
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CutoffTimeOverride
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof CutoffTimeOverride
     */
    date?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CutoffTimeOverride
     */
    endTime?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CutoffTimeOverride
     */
    fulfillmentType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CutoffTimeOverride
     */
    id?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CutoffTimeOverride
     */
    isClosed?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CutoffTimeOverride
     */
    label?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CutoffTimeOverride
     */
    locationCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CutoffTimeOverride
     */
    startTime?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CutoffTimeOverride
     */
    tenantId?: number;
}
/**
 * 
 * @export
 * @interface CutoffTimeOverrideCollection
 */
export interface CutoffTimeOverrideCollection {
    /**
     * 
     * @type {Array<CutoffTimeOverride>}
     * @memberof CutoffTimeOverrideCollection
     */
    items?: Array<CutoffTimeOverride> | null;
    /**
     * 
     * @type {number}
     * @memberof CutoffTimeOverrideCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof CutoffTimeOverrideCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof CutoffTimeOverrideCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof CutoffTimeOverrideCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface CutoffTimeResponse
 */
export interface CutoffTimeResponse {
    /**
     * 
     * @type {string}
     * @memberof CutoffTimeResponse
     */
    date?: string;
    /**
     * 
     * @type {string}
     * @memberof CutoffTimeResponse
     */
    endTime?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CutoffTimeResponse
     */
    fulfillmentType?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CutoffTimeResponse
     */
    isClosed?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof CutoffTimeResponse
     */
    label?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CutoffTimeResponse
     */
    lastUpdated?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CutoffTimeResponse
     */
    startTime?: string | null;
    /**
     * 
     * @type {LocationTimeZone}
     * @memberof CutoffTimeResponse
     */
    timeZone?: LocationTimeZone;
}
/**
 * 
 * @export
 * @interface CutoffTimes
 */
export interface CutoffTimes {
    /**
     * 
     * @type {Array<CutoffSchedule>}
     * @memberof CutoffTimes
     */
    schedules?: Array<CutoffSchedule> | null;
    /**
     * 
     * @type {LocationTimeZone}
     * @memberof CutoffTimes
     */
    timeZone?: LocationTimeZone;
}
/**
 * 
 * @export
 * @interface DropShip
 */
export interface DropShip {
    /**
     * 
     * @type {string}
     * @memberof DropShip
     */
    vendorCode?: string | null;
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
    closeTime?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof Hours
     */
    isClosed?: boolean;
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
}
/**
 * 
 * @export
 * @interface Location
 */
export interface Location {
    /**
     * 
     * @type {CommerceRuntimeAddress}
     * @memberof Location
     */
    address?: CommerceRuntimeAddress;
    /**
     * 
     * @type {boolean}
     * @memberof Location
     */
    allowFulfillmentWithNoStock?: boolean;
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
     * @type {Capacity}
     * @memberof Location
     */
    capacity?: Capacity;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    code?: string | null;
    /**
     * 
     * @type {CutoffTimes}
     * @memberof Location
     */
    cutoffTimes?: CutoffTimes;
    /**
     * 
     * @type {boolean}
     * @memberof Location
     */
    deliveryConsolidation?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    description?: string | null;
    /**
     * 
     * @type {DropShip}
     * @memberof Location
     */
    dropShip?: DropShip;
    /**
     * 
     * @type {boolean}
     * @memberof Location
     */
    express?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    fax?: string | null;
    /**
     * 
     * @type {Array<FulfillmentType>}
     * @memberof Location
     */
    fulfillmentTypes?: Array<FulfillmentType> | null;
    /**
     * 
     * @type {Coordinates}
     * @memberof Location
     */
    geo?: Coordinates;
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
    isDisabled?: boolean;
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
    note?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    phone?: string | null;
    /**
     * 
     * @type {ProcessingTimes}
     * @memberof Location
     */
    processingTimes?: ProcessingTimes;
    /**
     * 
     * @type {RegularHours}
     * @memberof Location
     */
    regularHours?: RegularHours;
    /**
     * 
     * @type {boolean}
     * @memberof Location
     */
    requiresManifest?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Location
     */
    shipToHomeConsolidation?: boolean;
    /**
     * 
     * @type {ShippingOriginContact}
     * @memberof Location
     */
    shippingOriginContact?: ShippingOriginContact;
    /**
     * 
     * @type {Array<SlaConfiguration>}
     * @memberof Location
     */
    slaConfigurations?: Array<SlaConfiguration> | null;
    /**
     * 
     * @type {boolean}
     * @memberof Location
     */
    supportsInventory?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof Location
     */
    tags?: Array<string> | null;
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
    warehouseEnabled?: boolean;
}
/**
 * 
 * @export
 * @interface LocationAdminAttribute
 */
export interface LocationAdminAttribute {
    /**
     * 
     * @type {string}
     * @memberof LocationAdminAttribute
     */
    adminName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationAdminAttribute
     */
    attributeCode: string;
    /**
     * 
     * @type {string}
     * @memberof LocationAdminAttribute
     */
    attributeFQN?: string | null;
    /**
     * 
     * @type {Array<LocationAdminAttributeMetadataItem>}
     * @memberof LocationAdminAttribute
     */
    attributeMetadata?: Array<LocationAdminAttributeMetadataItem> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof LocationAdminAttribute
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {boolean}
     * @memberof LocationAdminAttribute
     */
    availableForDiscounts?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LocationAdminAttribute
     */
    availableForOrderRouting?: boolean;
    /**
     * 
     * @type {CommerceRuntimeAttributeLocalizedContent}
     * @memberof LocationAdminAttribute
     */
    content?: CommerceRuntimeAttributeLocalizedContent;
    /**
     * 
     * @type {string}
     * @memberof LocationAdminAttribute
     */
    dataType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationAdminAttribute
     */
    displayGroup: string;
    /**
     * 
     * @type {number}
     * @memberof LocationAdminAttribute
     */
    id?: number | null;
    /**
     * 
     * @type {string}
     * @memberof LocationAdminAttribute
     */
    inputType?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof LocationAdminAttribute
     */
    isActive?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof LocationAdminAttribute
     */
    isMultiValued?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof LocationAdminAttribute
     */
    isReadOnly?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LocationAdminAttribute
     */
    isRequired?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof LocationAdminAttribute
     */
    isVisible?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof LocationAdminAttribute
     */
    namespace?: string | null;
    /**
     * 
     * @type {number}
     * @memberof LocationAdminAttribute
     */
    order?: number | null;
    /**
     * 
     * @type {CommerceRuntimeAttributeValidation}
     * @memberof LocationAdminAttribute
     */
    validation?: CommerceRuntimeAttributeValidation;
    /**
     * 
     * @type {string}
     * @memberof LocationAdminAttribute
     */
    valueType: string;
    /**
     * 
     * @type {Array<LocationAdminAttributeVocabularyValue>}
     * @memberof LocationAdminAttribute
     */
    vocabularyValues?: Array<LocationAdminAttributeVocabularyValue> | null;
}
/**
 * 
 * @export
 * @interface LocationAdminAttributeMetadataItem
 */
export interface LocationAdminAttributeMetadataItem {
    /**
     * 
     * @type {string}
     * @memberof LocationAdminAttributeMetadataItem
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof LocationAdminAttributeMetadataItem
     */
    value: string;
}
/**
 * 
 * @export
 * @interface LocationAdminAttributeValueLocalizedContent
 */
export interface LocationAdminAttributeValueLocalizedContent {
    /**
     * 
     * @type {string}
     * @memberof LocationAdminAttributeValueLocalizedContent
     */
    localeCode: string;
    /**
     * 
     * @type {string}
     * @memberof LocationAdminAttributeValueLocalizedContent
     */
    value: string;
}
/**
 * 
 * @export
 * @interface LocationAdminAttributeVocabularyValue
 */
export interface LocationAdminAttributeVocabularyValue {
    /**
     * 
     * @type {LocationAdminAttributeValueLocalizedContent}
     * @memberof LocationAdminAttributeVocabularyValue
     */
    content?: LocationAdminAttributeValueLocalizedContent;
    /**
     * 
     * @type {boolean}
     * @memberof LocationAdminAttributeVocabularyValue
     */
    isHidden?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof LocationAdminAttributeVocabularyValue
     */
    sequence?: number | null;
    /**
     * 
     * @type {string}
     * @memberof LocationAdminAttributeVocabularyValue
     */
    value: string;
}
/**
 * 
 * @export
 * @interface LocationAttribute
 */
export interface LocationAttribute {
    /**
     * 
     * @type {LocationAdminAttribute}
     * @memberof LocationAttribute
     */
    attributeDefinition?: LocationAdminAttribute;
    /**
     * 
     * @type {number}
     * @memberof LocationAttribute
     */
    attributeDefinitionId?: number | null;
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
     * @type {Array<any>}
     * @memberof LocationAttribute
     */
    values?: Array<any> | null;
}
/**
 * 
 * @export
 * @interface LocationAttributeAddRequest
 */
export interface LocationAttributeAddRequest {
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof LocationAttributeAddRequest
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof LocationAttributeAddRequest
     */
    fullyQualifiedName?: string | null;
    /**
     * 
     * @type {Array<any>}
     * @memberof LocationAttributeAddRequest
     */
    values?: Array<any> | null;
}
/**
 * 
 * @export
 * @interface LocationAttributeUpdateRequest
 */
export interface LocationAttributeUpdateRequest {
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof LocationAttributeUpdateRequest
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {Array<any>}
     * @memberof LocationAttributeUpdateRequest
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
    enableMultiPieceShipment?: boolean | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof LocationCarrier
     */
    features?: Array<string> | null;
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
}
/**
 * 
 * @export
 * @interface LocationCollection
 */
export interface LocationCollection {
    /**
     * 
     * @type {Array<Location>}
     * @memberof LocationCollection
     */
    items?: Array<Location> | null;
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
    pageSize?: number;
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
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface LocationGroupCodesRequest
 */
export interface LocationGroupCodesRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof LocationGroupCodesRequest
     */
    locationCodes?: Array<string> | null;
}
/**
 * 
 * @export
 * @interface LocationGroupCollection
 */
export interface LocationGroupCollection {
    /**
     * 
     * @type {Array<LocationLocationGroup>}
     * @memberof LocationGroupCollection
     */
    items?: Array<LocationLocationGroup> | null;
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
    pageSize?: number;
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
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface LocationGroupConfiguration
 */
export interface LocationGroupConfiguration {
    /**
     * 
     * @type {boolean}
     * @memberof LocationGroupConfiguration
     */
    allowReturns?: boolean | null;
    /**
     * 
     * @type {Array<LocationAttribute>}
     * @memberof LocationGroupConfiguration
     */
    attributes?: Array<LocationAttribute> | null;
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
    blockPartialCancel?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof LocationGroupConfiguration
     */
    blockPartialStock?: boolean | null;
    /**
     * 
     * @type {Array<BoxType>}
     * @memberof LocationGroupConfiguration
     */
    boxTypes?: Array<BoxType> | null;
    /**
     * 
     * @type {Array<BpmConfiguration>}
     * @memberof LocationGroupConfiguration
     */
    bpmConfigurations?: Array<BpmConfiguration> | null;
    /**
     * 
     * @type {Array<LocationCarrier>}
     * @memberof LocationGroupConfiguration
     */
    carriers?: Array<LocationCarrier> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof LocationGroupConfiguration
     */
    closePickWavePermissions?: Array<string> | null;
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
     * @type {string}
     * @memberof LocationGroupConfiguration
     */
    defaultCarrier?: string | null;
    /**
     * 
     * @type {number}
     * @memberof LocationGroupConfiguration
     */
    defaultMaxNumberOfShipmentsInPickWave?: number | null;
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
    defaultPrinterType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationGroupConfiguration
     */
    defaultReturnCarrier?: string | null;
    /**
     * 
     * @type {number}
     * @memberof LocationGroupConfiguration
     */
    defaultReturnRefundReductionAmount?: number | null;
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
    enableAdvancedOptionForPickWaveCreation?: boolean | null;
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
    enableForSTH?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof LocationGroupConfiguration
     */
    enablePnp?: boolean | null;
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
    enablePnpForDelivery?: boolean | null;
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
    enableScanningOfUpcForShipToHome?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof LocationGroupConfiguration
     */
    locationGroupCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof LocationGroupConfiguration
     */
    locationGroupId?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationGroupConfiguration
     */
    maxNumberOfPackingSlipsByGroup?: number | null;
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
    maximumReturnRefundReductionAmount?: number | null;
    /**
     * 
     * @type {PackageSettings}
     * @memberof LocationGroupConfiguration
     */
    packageSettings?: PackageSettings;
    /**
     * 
     * @type {string}
     * @memberof LocationGroupConfiguration
     */
    pickWavePrintFormat?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof LocationGroupConfiguration
     */
    printReturnLabel?: boolean | null;
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
    sendCustomerPickupReminder?: number | null;
    /**
     * 
     * @type {number}
     * @memberof LocationGroupConfiguration
     */
    siteId?: number;
    /**
     * 
     * @type {Array<SlaConfiguration>}
     * @memberof LocationGroupConfiguration
     */
    slaConfigurations?: Array<SlaConfiguration> | null;
    /**
     * 
     * @type {number}
     * @memberof LocationGroupConfiguration
     */
    tenantId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof LocationGroupConfiguration
     */
    wmsEnabled?: boolean | null;
}
/**
 * 
 * @export
 * @interface LocationLocationGroup
 */
export interface LocationLocationGroup {
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof LocationLocationGroup
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {Array<string>}
     * @memberof LocationLocationGroup
     */
    locationCodes?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof LocationLocationGroup
     */
    locationGroupCode?: string | null;
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
    name?: string | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof LocationLocationGroup
     */
    siteIds?: Array<number> | null;
}
/**
 * 
 * @export
 * @interface LocationTimeZone
 */
export interface LocationTimeZone {
    /**
     * 
     * @type {string}
     * @memberof LocationTimeZone
     */
    ianaCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationTimeZone
     */
    id?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof LocationTimeZone
     */
    isDaylightSavingsTime?: boolean;
    /**
     * 
     * @type {number}
     * @memberof LocationTimeZone
     */
    offset?: number;
}
/**
 * 
 * @export
 * @interface LocationTransferTime
 */
export interface LocationTransferTime {
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof LocationTransferTime
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof LocationTransferTime
     */
    fromId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationTransferTime
     */
    fromName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationTransferTime
     */
    id?: string | null;
    /**
     * 
     * @type {number}
     * @memberof LocationTransferTime
     */
    tenantId?: number;
    /**
     * 
     * @type {string}
     * @memberof LocationTransferTime
     */
    toId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationTransferTime
     */
    toName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof LocationTransferTime
     */
    transferTimeInHours?: number;
    /**
     * 
     * @type {string}
     * @memberof LocationTransferTime
     */
    type?: string | null;
}
/**
 * 
 * @export
 * @interface LocationType
 */
export interface LocationType {
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof LocationType
     */
    auditInfo?: AdminUserAuditInfo;
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
}
/**
 * 
 * @export
 * @interface LocationTypeCollection
 */
export interface LocationTypeCollection {
    /**
     * 
     * @type {Array<LocationType>}
     * @memberof LocationTypeCollection
     */
    items?: Array<LocationType> | null;
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
    pageSize?: number;
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
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface LocationUsage
 */
export interface LocationUsage {
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof LocationUsage
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {Array<string>}
     * @memberof LocationUsage
     */
    locationCodes?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof LocationUsage
     */
    locationTypeCodes?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof LocationUsage
     */
    locationUsageTypeCode?: string | null;
}
/**
 * 
 * @export
 * @interface LocationUsageCollection
 */
export interface LocationUsageCollection {
    /**
     * 
     * @type {Array<LocationUsage>}
     * @memberof LocationUsageCollection
     */
    items?: Array<LocationUsage> | null;
    /**
     * 
     * @type {number}
     * @memberof LocationUsageCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface Operation
 */
export interface Operation {
    /**
     * 
     * @type {any}
     * @memberof Operation
     */
    value?: any | null;
    /**
     * 
     * @type {string}
     * @memberof Operation
     */
    from?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Operation
     */
    op?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Operation
     */
    path?: string | null;
}
/**
 * 
 * @export
 * @interface Operation1
 */
export interface Operation1 {
    /**
     * 
     * @type {string}
     * @memberof Operation1
     */
    from?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Operation1
     */
    op?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Operation1
     */
    path?: string | null;
}
/**
 * 
 * @export
 * @interface OperationBase
 */
export interface OperationBase {
    /**
     * 
     * @type {string}
     * @memberof OperationBase
     */
    from?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OperationBase
     */
    op?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OperationBase
     */
    path?: string | null;
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
    friday?: Hours;
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
    saturday?: Hours;
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
    thursday?: Hours;
    /**
     * 
     * @type {string}
     * @memberof RegularHours
     */
    timeZone?: string | null;
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
}
/**
 * 
 * @export
 * @interface ShippingMethodMappings
 */
export interface ShippingMethodMappings {
    /**
     * 
     * @type {boolean}
     * @memberof ShippingMethodMappings
     */
    enableSmartPost?: boolean | null;
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
    /**
     * 
     * @type {string}
     * @memberof ShippingMethodMappings
     */
    returnLabelShippingMethod?: string | null;
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
    signatureOption?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingMethodMappings
     */
    standardDefault?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ShippingMethodMappings
     */
    useDeclaredValue?: boolean | null;
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
    companyOrOrganization?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingOriginContact
     */
    email?: string | null;
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
    lastNameOrSurname?: string | null;
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
    phoneNumber?: string | null;
}
/**
 * 
 * @export
 * @interface SlaConfiguration
 */
export interface SlaConfiguration {
    /**
     * 
     * @type {boolean}
     * @memberof SlaConfiguration
     */
    isEnabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SlaConfiguration
     */
    slaId?: number;
    /**
     * 
     * @type {number}
     * @memberof SlaConfiguration
     */
    targetServiceLevelPercentage?: number;
}
/**
 * 
 * @export
 * @interface TransferTimesCollection
 */
export interface TransferTimesCollection {
    /**
     * 
     * @type {Array<LocationTransferTime>}
     * @memberof TransferTimesCollection
     */
    items?: Array<LocationTransferTime> | null;
    /**
     * 
     * @type {number}
     * @memberof TransferTimesCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferTimesCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferTimesCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferTimesCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface Vendor
 */
export interface Vendor {
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof Vendor
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {ContactInfo}
     * @memberof Vendor
     */
    contactInfo?: ContactInfo;
    /**
     * 
     * @type {string}
     * @memberof Vendor
     */
    inventoryRefresh?: string | null;
    /**
     * 
     * @type {Array<VendorLocation>}
     * @memberof Vendor
     */
    locations?: Array<VendorLocation> | null;
    /**
     * 
     * @type {string}
     * @memberof Vendor
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Vendor
     */
    status?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Vendor
     */
    tenantId?: number;
    /**
     * 
     * @type {string}
     * @memberof Vendor
     */
    vendorCode?: string | null;
}
/**
 * 
 * @export
 * @interface VendorCollection
 */
export interface VendorCollection {
    /**
     * 
     * @type {Array<Vendor>}
     * @memberof VendorCollection
     */
    items?: Array<Vendor> | null;
    /**
     * 
     * @type {number}
     * @memberof VendorCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof VendorCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof VendorCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof VendorCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface VendorLocation
 */
export interface VendorLocation {
    /**
     * 
     * @type {any}
     * @memberof VendorLocation
     */
    data?: any | null;
    /**
     * 
     * @type {string}
     * @memberof VendorLocation
     */
    locationCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VendorLocation
     */
    receiverId?: string | null;
}
/**
 * 
 * @export
 * @interface VendorSkuMapping
 */
export interface VendorSkuMapping {
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof VendorSkuMapping
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {number}
     * @memberof VendorSkuMapping
     */
    tenantId?: number;
    /**
     * 
     * @type {string}
     * @memberof VendorSkuMapping
     */
    upc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VendorSkuMapping
     */
    vendorCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof VendorSkuMapping
     */
    vendorPrice?: number;
    /**
     * 
     * @type {string}
     * @memberof VendorSkuMapping
     */
    vendorSku?: string | null;
}
/**
 * 
 * @export
 * @interface VendorSkuMappingCollection
 */
export interface VendorSkuMappingCollection {
    /**
     * 
     * @type {Array<VendorSkuMapping>}
     * @memberof VendorSkuMappingCollection
     */
    items?: Array<VendorSkuMapping> | null;
    /**
     * 
     * @type {number}
     * @memberof VendorSkuMappingCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof VendorSkuMappingCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof VendorSkuMappingCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof VendorSkuMappingCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface WeeklyCutoffHours
 */
export interface WeeklyCutoffHours {
    /**
     * 
     * @type {CutoffHours}
     * @memberof WeeklyCutoffHours
     */
    friday?: CutoffHours;
    /**
     * 
     * @type {CutoffHours}
     * @memberof WeeklyCutoffHours
     */
    monday?: CutoffHours;
    /**
     * 
     * @type {CutoffHours}
     * @memberof WeeklyCutoffHours
     */
    saturday?: CutoffHours;
    /**
     * 
     * @type {CutoffHours}
     * @memberof WeeklyCutoffHours
     */
    sunday?: CutoffHours;
    /**
     * 
     * @type {CutoffHours}
     * @memberof WeeklyCutoffHours
     */
    thursday?: CutoffHours;
    /**
     * 
     * @type {CutoffHours}
     * @memberof WeeklyCutoffHours
     */
    tuesday?: CutoffHours;
    /**
     * 
     * @type {CutoffHours}
     * @memberof WeeklyCutoffHours
     */
    wednesday?: CutoffHours;
}
