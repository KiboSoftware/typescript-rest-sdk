/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface Address
 */
export interface Address {
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    address1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    address2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    address3?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    address4?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    addressType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    cityOrTown?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    countryCode?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof Address
     */
    isValidated?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    postalOrZipCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    stateOrProvince?: string | null;
}
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
     * @type {any}
     * @memberof CommerceRuntimeAddress
     */
    countryCode?: any | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeAttribute
 */
export interface CommerceRuntimeAttribute {
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeAttribute
     */
    availableForOrderRouting?: any | null;
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
     * @type {TimeZone}
     * @memberof CutoffTimes
     */
    timeZone?: TimeZone;
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
     * @type {Address}
     * @memberof Location
     */
    address?: Address;
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
 * @interface LocationAttribute
 */
export interface LocationAttribute {
    /**
     * 
     * @type {LocationStorefrontAttribute}
     * @memberof LocationAttribute
     */
    attributeDefinition?: LocationStorefrontAttribute;
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
 * @interface LocationStorefrontAttribute
 */
export interface LocationStorefrontAttribute {
    /**
     * 
     * @type {string}
     * @memberof LocationStorefrontAttribute
     */
    adminName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationStorefrontAttribute
     */
    attributeCode: string;
    /**
     * 
     * @type {string}
     * @memberof LocationStorefrontAttribute
     */
    attributeFQN?: string | null;
    /**
     * 
     * @type {Array<LocationStorefrontAttributeMetadataItem>}
     * @memberof LocationStorefrontAttribute
     */
    attributeMetadata?: Array<LocationStorefrontAttributeMetadataItem> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof LocationStorefrontAttribute
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {boolean}
     * @memberof LocationStorefrontAttribute
     */
    availableForDiscounts?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LocationStorefrontAttribute
     */
    availableForOrderRouting?: boolean;
    /**
     * 
     * @type {CommerceRuntimeAttributeLocalizedContent}
     * @memberof LocationStorefrontAttribute
     */
    content?: CommerceRuntimeAttributeLocalizedContent;
    /**
     * 
     * @type {string}
     * @memberof LocationStorefrontAttribute
     */
    dataType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationStorefrontAttribute
     */
    displayGroup: string;
    /**
     * 
     * @type {number}
     * @memberof LocationStorefrontAttribute
     */
    id?: number | null;
    /**
     * 
     * @type {string}
     * @memberof LocationStorefrontAttribute
     */
    inputType?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof LocationStorefrontAttribute
     */
    isActive?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof LocationStorefrontAttribute
     */
    isMultiValued?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof LocationStorefrontAttribute
     */
    isReadOnly?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LocationStorefrontAttribute
     */
    isRequired?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof LocationStorefrontAttribute
     */
    isVisible?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof LocationStorefrontAttribute
     */
    namespace?: string | null;
    /**
     * 
     * @type {number}
     * @memberof LocationStorefrontAttribute
     */
    order?: number | null;
    /**
     * 
     * @type {CommerceRuntimeAttributeValidation}
     * @memberof LocationStorefrontAttribute
     */
    validation?: CommerceRuntimeAttributeValidation;
    /**
     * 
     * @type {string}
     * @memberof LocationStorefrontAttribute
     */
    valueType: string;
    /**
     * 
     * @type {Array<LocationStorefrontAttributeVocabularyValue>}
     * @memberof LocationStorefrontAttribute
     */
    vocabularyValues?: Array<LocationStorefrontAttributeVocabularyValue> | null;
}
/**
 * 
 * @export
 * @interface LocationStorefrontAttributeMetadataItem
 */
export interface LocationStorefrontAttributeMetadataItem {
    /**
     * 
     * @type {string}
     * @memberof LocationStorefrontAttributeMetadataItem
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof LocationStorefrontAttributeMetadataItem
     */
    value: string;
}
/**
 * 
 * @export
 * @interface LocationStorefrontAttributeValueLocalizedContent
 */
export interface LocationStorefrontAttributeValueLocalizedContent {
    /**
     * 
     * @type {string}
     * @memberof LocationStorefrontAttributeValueLocalizedContent
     */
    localeCode: string;
    /**
     * 
     * @type {string}
     * @memberof LocationStorefrontAttributeValueLocalizedContent
     */
    value: string;
}
/**
 * 
 * @export
 * @interface LocationStorefrontAttributeVocabularyValue
 */
export interface LocationStorefrontAttributeVocabularyValue {
    /**
     * 
     * @type {LocationStorefrontAttributeValueLocalizedContent}
     * @memberof LocationStorefrontAttributeVocabularyValue
     */
    content?: LocationStorefrontAttributeValueLocalizedContent;
    /**
     * 
     * @type {boolean}
     * @memberof LocationStorefrontAttributeVocabularyValue
     */
    isHidden?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof LocationStorefrontAttributeVocabularyValue
     */
    sequence?: number | null;
    /**
     * 
     * @type {string}
     * @memberof LocationStorefrontAttributeVocabularyValue
     */
    value: string;
}
/**
 * 
 * @export
 * @interface LocationTimeZone
 */
export interface LocationTimeZone {
    /**
     * 
     * @type {any}
     * @memberof LocationTimeZone
     */
    isDaylightSavingsTime?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LocationTimeZone
     */
    offset?: any | null;
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
 * @interface TimeZone
 */
export interface TimeZone {
    /**
     * 
     * @type {string}
     * @memberof TimeZone
     */
    ianaCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TimeZone
     */
    id?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof TimeZone
     */
    isDaylightSavingsTime?: boolean;
    /**
     * 
     * @type {number}
     * @memberof TimeZone
     */
    offset?: number;
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
