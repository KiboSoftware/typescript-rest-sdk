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
     * @type {string}
     * @memberof Allocati
     */
    itemId?: string | null;
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
    fulfillmentLocationCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Allocati
     */
    transferLocationCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Allocati
     */
    productCode?: string | null;
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
     * @type {number}
     * @memberof Allocati
     */
    allocationId?: number | null;
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
    createdBy?: string | null;
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
    updatedBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AuditInf
     */
    updatedAt?: string | null;
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
    productCode?: string | null;
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
    goodsType?: string | null;
    /**
     * 
     * @type {number}
     * @memberof BundledProdu
     */
    quantity?: number;
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
     * @type {ReservationWebAPIPackageMeasurements}
     * @memberof BundledProdu
     */
    measurements?: ReservationWebAPIPackageMeasurements;
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
     * @type {string}
     * @memberof OrderReservati
     */
    zipCode?: string | null;
    /**
     * 
     * @type {Array<ReservationItem>}
     * @memberof OrderReservati
     */
    reservationItems?: Array<ReservationItem> | null;
}
/**
 * 
 * @export
 * @interface Produ
 */
export interface Produ {
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
    name?: string | null;
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
    mfgPartNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Produ
     */
    variationProductCode?: string | null;
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
    goodsType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Produ
     */
    productUsage?: string | null;
    /**
     * 
     * @type {Array<BundledProdu>}
     * @memberof Produ
     */
    bundledProducts?: Array<BundledProdu> | null;
    /**
     * 
     * @type {boolean}
     * @memberof Produ
     */
    isSplitExtrasInShipment?: boolean;
    /**
     * 
     * @type {Array<ReservationWebAPIProductProperty>}
     * @memberof Produ
     */
    properties?: Array<ReservationWebAPIProductProperty> | null;
    /**
     * 
     * @type {ReservationWebAPIPackageMeasurements}
     * @memberof Produ
     */
    measurements?: ReservationWebAPIPackageMeasurements;
    /**
     * 
     * @type {boolean}
     * @memberof Produ
     */
    isTaxable?: boolean | null;
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
    condition?: string | null;
}
/**
 * 
 * @export
 * @interface Reservati
 */
export interface Reservati {
    /**
     * 
     * @type {string}
     * @memberof Reservati
     */
    id?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Reservati
     */
    siteId?: number | null;
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
     * @type {number}
     * @memberof Reservati
     */
    customerAccountId?: number | null;
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
    cartId?: string | null;
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
    expirationDateTime?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Reservati
     */
    zipCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Reservati
     */
    status?: string | null;
    /**
     * 
     * @type {AuditInf}
     * @memberof Reservati
     */
    auditInfo?: AuditInf;
    /**
     * 
     * @type {Array<ReservationWebAPIChangeMessage>}
     * @memberof Reservati
     */
    changeMessages?: Array<ReservationWebAPIChangeMessage> | null;
    /**
     * 
     * @type {string}
     * @memberof Reservati
     */
    reservationType?: string | null;
}
/**
 * 
 * @export
 * @interface ReservationCollecti
 */
export interface ReservationCollecti {
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
    pageSize?: number;
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
    totalCount?: number;
    /**
     * 
     * @type {Array<Reservati>}
     * @memberof ReservationCollecti
     */
    items?: Array<Reservati> | null;
}
/**
 * 
 * @export
 * @interface ReservationItem
 */
export interface ReservationItem {
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
    id?: string | null;
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
    fulfillmentLocationCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationItem
     */
    fulfillmentMethod?: string | null;
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
     * @type {string}
     * @memberof ReservationItem
     */
    allocationStatus?: string | null;
    /**
     * 
     * @type {Array<InventoryTags>}
     * @memberof ReservationItem
     */
    inventoryTags?: Array<InventoryTags> | null;
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
    correlationId?: string | null;
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
    subjectType?: string | null;
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
    verb?: string | null;
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
    createDate?: string;
}
/**
 * 
 * @export
 * @interface ReservationWebAPIOrderAttribute
 */
export interface ReservationWebAPIOrderAttribute {
    /**
     * 
     * @type {string}
     * @memberof ReservationWebAPIOrderAttribute
     */
    fullyQualifiedName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ReservationWebAPIOrderAttribute
     */
    attributeDefinitionId?: number | null;
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
    width?: CommerceRuntimeMeasurement;
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
