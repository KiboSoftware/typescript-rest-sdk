/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface Allocati
 */
export interface Allocati {
    /**
     * 
     * @type {Array<AllocationEve>}
     * @memberof Allocati
     */
    allocationHistory?: Array<AllocationEve> | null;
    /**
     * 
     * @type {number}
     * @memberof Allocati
     */
    allocationId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Allocati
     */
    estimatedDeliveryDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Allocati
     */
    fulfillmentLocationCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Allocati
     */
    futureDate?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof Allocati
     */
    isStateChange?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Allocati
     */
    itemId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Allocati
     */
    productCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Allocati
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof Allocati
     */
    transferLocationCode?: string | null;
}
/**
 * 
 * @export
 * @interface AllocationEve
 */
export interface AllocationEve {
    /**
     * 
     * @type {string}
     * @memberof AllocationEve
     */
    allocatedAt?: string;
    /**
     * 
     * @type {number}
     * @memberof AllocationEve
     */
    deltaQuantity?: number;
    /**
     * 
     * @type {string}
     * @memberof AllocationEve
     */
    runId?: string | null;
}
/**
 * 
 * @export
 * @interface AllocationStatusDemandEntry
 */
export interface AllocationStatusDemandEntry {
    /**
     * 
     * @type {string}
     * @memberof AllocationStatusDemandEntry
     */
    allocationStatus?: string | null;
    /**
     * 
     * @type {number}
     * @memberof AllocationStatusDemandEntry
     */
    itemCount?: number;
    /**
     * 
     * @type {number}
     * @memberof AllocationStatusDemandEntry
     */
    totalDemand?: number;
}
/**
 * 
 * @export
 * @interface AuditInf
 */
export interface AuditInf {
    /**
     * 
     * @type {string}
     * @memberof AuditInf
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof AuditInf
     */
    createdBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AuditInf
     */
    updatedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AuditInf
     */
    updatedBy?: string | null;
}
/**
 * 
 * @export
 * @interface BundledProdu
 */
export interface BundledProdu {
    /**
     * 
     * @type {string}
     * @memberof BundledProdu
     */
    goodsType?: string | null;
    /**
     * 
     * @type {ReservationWebAPIPackageMeasurements}
     * @memberof BundledProdu
     */
    measurements?: ReservationWebAPIPackageMeasurements;
    /**
     * 
     * @type {string}
     * @memberof BundledProdu
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BundledProdu
     */
    optionAttributeFQN?: string | null;
    /**
     * 
     * @type {any}
     * @memberof BundledProdu
     */
    optionValue?: any | null;
    /**
     * 
     * @type {string}
     * @memberof BundledProdu
     */
    productCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof BundledProdu
     */
    quantity?: number;
}
/**
 * 
 * @export
 * @interface CallOffLineConsumpti
 */
export interface CallOffLineConsumpti {
    /**
     * 
     * @type {string}
     * @memberof CallOffLineConsumpti
     */
    consumedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof CallOffLineConsumpti
     */
    consumedBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CallOffLineConsumpti
     */
    lineId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CallOffLineConsumpti
     */
    salesOrderId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CallOffLineConsumpti
     */
    salesOrderNumber?: number;
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
 * @interface CommerceRuntimeContact
 */
export interface CommerceRuntimeContact {
    /**
     * 
     * @type {CommerceRuntimeAddress}
     * @memberof CommerceRuntimeContact
     */
    address?: CommerceRuntimeAddress;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeContact
     */
    companyOrOrganization?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeContact
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeContact
     */
    firstName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeContact
     */
    id?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeContact
     */
    lastNameOrSurname?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeContact
     */
    middleNameOrInitial?: string | null;
    /**
     * 
     * @type {CommerceRuntimePhone}
     * @memberof CommerceRuntimeContact
     */
    phoneNumbers?: CommerceRuntimePhone;
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
 * @interface CommerceRuntimePhone
 */
export interface CommerceRuntimePhone {
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimePhone
     */
    home?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimePhone
     */
    mobile?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimePhone
     */
    work?: string | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeProductPropertyValue
 */
export interface CommerceRuntimeProductPropertyValue {
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeProductPropertyValue
     */
    stringValue?: string | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeProductPropertyValue
     */
    value?: any | null;
}
/**
 * 
 * @export
 * @interface CustomerDemandEntry
 */
export interface CustomerDemandEntry {
    /**
     * 
     * @type {number}
     * @memberof CustomerDemandEntry
     */
    customerAccountId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CustomerDemandEntry
     */
    reservationCount?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerDemandEntry
     */
    totalDemand?: number;
}
/**
 * 
 * @export
 * @interface FulfillmentInf
 */
export interface FulfillmentInf {
    /**
     * 
     * @type {CommerceRuntimeContact}
     * @memberof FulfillmentInf
     */
    fulfillmentContact?: CommerceRuntimeContact;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentInf
     */
    isDestinationCommercial?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentInf
     */
    itemLevelShippingMethod?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentInf
     */
    shippingMethodCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentInf
     */
    shippingMethodName?: string | null;
}
/**
 * 
 * @export
 * @interface HttpValidationProblemDetails
 */
export interface HttpValidationProblemDetails {
    /**
     * 
     * @type {string}
     * @memberof HttpValidationProblemDetails
     */
    detail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HttpValidationProblemDetails
     */
    instance?: string | null;
    /**
     * 
     * @type {number}
     * @memberof HttpValidationProblemDetails
     */
    status?: number | null;
    /**
     * 
     * @type {string}
     * @memberof HttpValidationProblemDetails
     */
    title?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HttpValidationProblemDetails
     */
    type?: string | null;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof HttpValidationProblemDetails
     */
    errors?: { [key: string]: Array<string>; } | null;
}
/**
 * 
 * @export
 * @interface HttpValidationProblemDetailsAllOf
 */
export interface HttpValidationProblemDetailsAllOf {
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof HttpValidationProblemDetailsAllOf
     */
    errors?: { [key: string]: Array<string>; } | null;
}
/**
 * 
 * @export
 * @interface InventoryTags
 */
export interface InventoryTags {
    /**
     * 
     * @type {string}
     * @memberof InventoryTags
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InventoryTags
     */
    value?: string | null;
}
/**
 * 
 * @export
 * @interface OrderReservati
 */
export interface OrderReservati {
    /**
     * 
     * @type {FulfillmentInf}
     * @memberof OrderReservati
     */
    fulfillmentInfo?: FulfillmentInf;
    /**
     * 
     * @type {string}
     * @memberof OrderReservati
     */
    orderId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof OrderReservati
     */
    orderNumber?: number;
    /**
     * 
     * @type {Array<ReservationItem>}
     * @memberof OrderReservati
     */
    reservationItems?: Array<ReservationItem> | null;
    /**
     * 
     * @type {string}
     * @memberof OrderReservati
     */
    zipCode?: string | null;
}
/**
 * 
 * @export
 * @interface ProblemDetails
 */
export interface ProblemDetails {
    [key: string]: any | any;
    /**
     * 
     * @type {string}
     * @memberof ProblemDetails
     */
    detail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProblemDetails
     */
    instance?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ProblemDetails
     */
    status?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ProblemDetails
     */
    title?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProblemDetails
     */
    type?: string | null;
}
/**
 * 
 * @export
 * @interface Produ
 */
export interface Produ {
    /**
     * 
     * @type {Array<BundledProdu>}
     * @memberof Produ
     */
    bundledProducts?: Array<BundledProdu> | null;
    /**
     * 
     * @type {string}
     * @memberof Produ
     */
    condition?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Produ
     */
    goodsType?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof Produ
     */
    isSplitExtrasInShipment?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Produ
     */
    isTaxable?: boolean | null;
    /**
     * 
     * @type {ReservationWebAPIPackageMeasurements}
     * @memberof Produ
     */
    measurements?: ReservationWebAPIPackageMeasurements;
    /**
     * 
     * @type {string}
     * @memberof Produ
     */
    mfgPartNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Produ
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Produ
     */
    productCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Produ
     */
    productType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Produ
     */
    productUsage?: string | null;
    /**
     * 
     * @type {Array<ReservationWebAPIProductProperty>}
     * @memberof Produ
     */
    properties?: Array<ReservationWebAPIProductProperty> | null;
    /**
     * 
     * @type {string}
     * @memberof Produ
     */
    serialNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Produ
     */
    sku?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Produ
     */
    variationProductCode?: string | null;
}
/**
 * 
 * @export
 * @interface Reservati
 */
export interface Reservati {
    /**
     * 
     * @type {AuditInf}
     * @memberof Reservati
     */
    auditInfo?: AuditInf;
    /**
     * 
     * @type {string}
     * @memberof Reservati
     */
    callOffOrderId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Reservati
     */
    cartId?: string | null;
    /**
     * 
     * @type {Array<ReservationWebAPIChangeMessage>}
     * @memberof Reservati
     */
    changeMessages?: Array<ReservationWebAPIChangeMessage> | null;
    /**
     * 
     * @type {Array<CallOffLineConsumpti>}
     * @memberof Reservati
     */
    consumptionHistory?: Array<CallOffLineConsumpti> | null;
    /**
     * 
     * @type {number}
     * @memberof Reservati
     */
    customerAccountId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Reservati
     */
    expirationDateTime?: string | null;
    /**
     * 
     * @type {FulfillmentInf}
     * @memberof Reservati
     */
    fulfillmentInfo?: FulfillmentInf;
    /**
     * 
     * @type {string}
     * @memberof Reservati
     */
    id?: string | null;
    /**
     * 
     * @type {Array<ReservationItem>}
     * @memberof Reservati
     */
    items?: Array<ReservationItem> | null;
    /**
     * 
     * @type {string}
     * @memberof Reservati
     */
    orderId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Reservati
     */
    orderNumber?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Reservati
     */
    reservationType?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Reservati
     */
    siteId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Reservati
     */
    status?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Reservati
     */
    tenantId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Reservati
     */
    userId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Reservati
     */
    zipCode?: string | null;
}
/**
 * 
 * @export
 * @interface ReservationAggregateSummary
 */
export interface ReservationAggregateSummary {
    /**
     * 
     * @type {number}
     * @memberof ReservationAggregateSummary
     */
    allocatedDemand?: number;
    /**
     * 
     * @type {Array<AllocationStatusDemandEntry>}
     * @memberof ReservationAggregateSummary
     */
    byAllocationStatus?: Array<AllocationStatusDemandEntry> | null;
    /**
     * 
     * @type {Array<CustomerDemandEntry>}
     * @memberof ReservationAggregateSummary
     */
    byCustomer?: Array<CustomerDemandEntry> | null;
    /**
     * 
     * @type {Array<ReservationStatusDemandEntry>}
     * @memberof ReservationAggregateSummary
     */
    byReservationStatus?: Array<ReservationStatusDemandEntry> | null;
    /**
     * 
     * @type {number}
     * @memberof ReservationAggregateSummary
     */
    totalDemand?: number;
    /**
     * 
     * @type {number}
     * @memberof ReservationAggregateSummary
     */
    unallocatedDemand?: number;
}
/**
 * 
 * @export
 * @interface ReservationCollecti
 */
export interface ReservationCollecti {
    /**
     * 
     * @type {Array<Reservati>}
     * @memberof ReservationCollecti
     */
    items?: Array<Reservati> | null;
    /**
     * 
     * @type {number}
     * @memberof ReservationCollecti
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof ReservationCollecti
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof ReservationCollecti
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof ReservationCollecti
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface ReservationItem
 */
export interface ReservationItem {
    /**
     * 
     * @type {string}
     * @memberof ReservationItem
     */
    allocationStatus?: string | null;
    /**
     * 
     * @type {Array<Allocati>}
     * @memberof ReservationItem
     */
    allocations?: Array<Allocati> | null;
    /**
     * 
     * @type {boolean}
     * @memberof ReservationItem
     */
    allowsBackOrder?: boolean;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ReservationItem
     */
    data?: { [key: string]: any; } | null;
    /**
     * 
     * @type {FulfillmentInf}
     * @memberof ReservationItem
     */
    fulfillmentInfo?: FulfillmentInf;
    /**
     * 
     * @type {string}
     * @memberof ReservationItem
     */
    fulfillmentLocationCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationItem
     */
    fulfillmentMethod?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationItem
     */
    id?: string | null;
    /**
     * 
     * @type {Array<InventoryTags>}
     * @memberof ReservationItem
     */
    inventoryTags?: Array<InventoryTags> | null;
    /**
     * 
     * @type {number}
     * @memberof ReservationItem
     */
    lineId?: number;
    /**
     * 
     * @type {string}
     * @memberof ReservationItem
     */
    orderItemId?: string | null;
    /**
     * 
     * @type {Produ}
     * @memberof ReservationItem
     */
    product?: Produ;
    /**
     * 
     * @type {number}
     * @memberof ReservationItem
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof ReservationItem
     */
    requestedShipDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationItem
     */
    shippingMethodCode?: string | null;
    /**
     * 
     * @type {Array<Suggesti>}
     * @memberof ReservationItem
     */
    suggestions?: Array<Suggesti> | null;
    /**
     * 
     * @type {number}
     * @memberof ReservationItem
     */
    timeFenceDays?: number | null;
}
/**
 * 
 * @export
 * @interface ReservationStatusDemandEntry
 */
export interface ReservationStatusDemandEntry {
    /**
     * 
     * @type {number}
     * @memberof ReservationStatusDemandEntry
     */
    reservationCount?: number;
    /**
     * 
     * @type {string}
     * @memberof ReservationStatusDemandEntry
     */
    reservationStatus?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ReservationStatusDemandEntry
     */
    totalDemand?: number;
}
/**
 * 
 * @export
 * @interface ReservationWebAPIChangeMessage
 */
export interface ReservationWebAPIChangeMessage {
    /**
     * 
     * @type {string}
     * @memberof ReservationWebAPIChangeMessage
     */
    appKey?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationWebAPIChangeMessage
     */
    appName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationWebAPIChangeMessage
     */
    correlationId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationWebAPIChangeMessage
     */
    createDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ReservationWebAPIChangeMessage
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationWebAPIChangeMessage
     */
    identifier?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationWebAPIChangeMessage
     */
    message?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationWebAPIChangeMessage
     */
    subject?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationWebAPIChangeMessage
     */
    subjectType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationWebAPIChangeMessage
     */
    userId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationWebAPIChangeMessage
     */
    verb?: string | null;
}
/**
 * 
 * @export
 * @interface ReservationWebAPIOrderAttribute
 */
export interface ReservationWebAPIOrderAttribute {
    /**
     * 
     * @type {number}
     * @memberof ReservationWebAPIOrderAttribute
     */
    attributeDefinitionId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationWebAPIOrderAttribute
     */
    fullyQualifiedName?: string | null;
    /**
     * 
     * @type {Array<any>}
     * @memberof ReservationWebAPIOrderAttribute
     */
    values?: Array<any> | null;
}
/**
 * 
 * @export
 * @interface ReservationWebAPIPackageMeasurements
 */
export interface ReservationWebAPIPackageMeasurements {
    /**
     * 
     * @type {CommerceRuntimeMeasurement}
     * @memberof ReservationWebAPIPackageMeasurements
     */
    height?: CommerceRuntimeMeasurement;
    /**
     * 
     * @type {CommerceRuntimeMeasurement}
     * @memberof ReservationWebAPIPackageMeasurements
     */
    length?: CommerceRuntimeMeasurement;
    /**
     * 
     * @type {CommerceRuntimeMeasurement}
     * @memberof ReservationWebAPIPackageMeasurements
     */
    weight?: CommerceRuntimeMeasurement;
    /**
     * 
     * @type {CommerceRuntimeMeasurement}
     * @memberof ReservationWebAPIPackageMeasurements
     */
    width?: CommerceRuntimeMeasurement;
}
/**
 * 
 * @export
 * @interface ReservationWebAPIProductProperty
 */
export interface ReservationWebAPIProductProperty {
    /**
     * 
     * @type {string}
     * @memberof ReservationWebAPIProductProperty
     */
    attributeFQN?: string | null;
    /**
     * 
     * @type {Array<CommerceRuntimeProductPropertyValue>}
     * @memberof ReservationWebAPIProductProperty
     */
    values?: Array<CommerceRuntimeProductPropertyValue> | null;
}
/**
 * 
 * @export
 * @interface Suggesti
 */
export interface Suggesti {
    /**
     * 
     * @type {string}
     * @memberof Suggesti
     */
    futureDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Suggesti
     */
    locationCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Suggesti
     */
    productCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Suggesti
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof Suggesti
     */
    suggestionType?: string | null;
}
