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
 * @interface CarrierRatesResponse
 */
export interface CarrierRatesResponse {
    /**
     * 
     * @type {string}
     * @memberof CarrierRatesResponse
     */
    carrierId?: string | null;
    /**
     * 
     * @type {Array<ShippingRuntimeShippingRate>}
     * @memberof CarrierRatesResponse
     */
    shippingRates?: Array<ShippingRuntimeShippingRate> | null;
    /**
     * 
     * @type {Array<CustomAttribute>}
     * @memberof CarrierRatesResponse
     * @deprecated
     */
    customAttributes?: Array<CustomAttribute> | null;
}
/**
 * Response containing a list of Carriers supported on a tenant / site.
 * @export
 * @interface CarrierResponse
 */
export interface CarrierResponse {
    /**
     * 
     * @type {Array<ShippingRuntimeCarrier>}
     * @memberof CarrierResponse
     */
    carriers?: Array<ShippingRuntimeCarrier> | null;
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
 * @interface CommerceRuntimeContact
 */
export interface CommerceRuntimeContact {
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
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeContact
     */
    firstName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeContact
     */
    middleNameOrInitial?: string | null;
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
    companyOrOrganization?: string | null;
    /**
     * 
     * @type {CommerceRuntimePhone}
     * @memberof CommerceRuntimeContact
     */
    phoneNumbers?: CommerceRuntimePhone;
    /**
     * 
     * @type {CommerceRuntimeAddress}
     * @memberof CommerceRuntimeContact
     */
    address?: CommerceRuntimeAddress;
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
 * @interface CustomAttribute
 */
export interface CustomAttribute {
    /**
     * 
     * @type {Array<CustomAttribute>}
     * @memberof CustomAttribute
     */
    childAttributes?: Array<CustomAttribute> | null;
    /**
     * 
     * @type {string}
     * @memberof CustomAttribute
     */
    key?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomAttribute
     */
    value?: string | null;
}
/**
 * 
 * @export
 * @interface CustomerReferences
 */
export interface CustomerReferences {
    /**
     * 
     * @type {string}
     * @memberof CustomerReferences
     */
    key?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerReferences
     */
    value?: string | null;
}
/**
 * 
 * @export
 * @interface ItemMeasurements
 */
export interface ItemMeasurements {
    /**
     * 
     * @type {CommerceRuntimeMeasurement}
     * @memberof ItemMeasurements
     */
    height?: CommerceRuntimeMeasurement;
    /**
     * 
     * @type {CommerceRuntimeMeasurement}
     * @memberof ItemMeasurements
     */
    width?: CommerceRuntimeMeasurement;
    /**
     * 
     * @type {CommerceRuntimeMeasurement}
     * @memberof ItemMeasurements
     */
    length?: CommerceRuntimeMeasurement;
    /**
     * 
     * @type {CommerceRuntimeMeasurement}
     * @memberof ItemMeasurements
     */
    weight?: CommerceRuntimeMeasurement;
    /**
     * Not exposed publicly
     * @type {number}
     * @memberof ItemMeasurements
     */
    girth?: number | null;
}
/**
 * 
 * @export
 * @interface LabelRequest
 */
export interface LabelRequest {
    /**
     * 
     * @type {string}
     * @memberof LabelRequest
     */
    carrierId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LabelRequest
     */
    labelFormat?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LabelRequest
     */
    trackingNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LabelRequest
     */
    packageTrackingNumber?: string | null;
}
/**
 * 
 * @export
 * @interface LabelResponse
 */
export interface LabelResponse {
    /**
     * 
     * @type {string}
     * @memberof LabelResponse
     */
    trackingNumber?: string | null;
    /**
     * 
     * @type {Array<PackageLabelResponse>}
     * @memberof LabelResponse
     */
    packageLabels?: Array<PackageLabelResponse> | null;
}
/**
 * 
 * @export
 * @interface Money
 */
export interface Money {
    /**
     * 
     * @type {string}
     * @memberof Money
     */
    currencyCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Money
     */
    value?: number;
}
/**
 * 
 * @export
 * @interface Notification
 */
export interface Notification {
    /**
     * 
     * @type {string}
     * @memberof Notification
     */
    source?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Notification
     */
    message?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Notification
     */
    code?: string | null;
}
/**
 * 
 * @export
 * @interface PackageLabelResponse
 */
export interface PackageLabelResponse {
    /**
     * 
     * @type {string}
     * @memberof PackageLabelResponse
     */
    trackingNumber?: string | null;
    /**
     * 
     * @type {ShippingLabel}
     * @memberof PackageLabelResponse
     */
    label?: ShippingLabel;
}
/**
 * 
 * @export
 * @interface ProductSummary
 */
export interface ProductSummary {
    /**
     * Merchant-created code that uniquely identifies the product.
     * @type {string}
     * @memberof ProductSummary
     */
    productCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductSummary
     */
    productType?: string | null;
    /**
     * 
     * @type {Array<ShippingRuntimeCategory>}
     * @memberof ProductSummary
     */
    categories?: Array<ShippingRuntimeCategory> | null;
    /**
     * 
     * @type {ItemMeasurements}
     * @memberof ProductSummary
     */
    unitMeasurements?: ItemMeasurements;
    /**
     * 
     * @type {Array<ShippingRuntimeProductProperty>}
     * @memberof ProductSummary
     */
    properties?: Array<ShippingRuntimeProductProperty> | null;
    /**
     * 
     * @type {Array<ShippingRuntimeProductOption>}
     * @memberof ProductSummary
     */
    options?: Array<ShippingRuntimeProductOption> | null;
    /**
     * Product name/description
     * @type {string}
     * @memberof ProductSummary
     */
    productDescription?: string | null;
    /**
     * Product quantity
     * @type {number}
     * @memberof ProductSummary
     */
    quantity?: number;
    /**
     * Price (unit price * quantity)
     * @type {number}
     * @memberof ProductSummary
     */
    price?: number;
}
/**
 * 
 * @export
 * @interface RateRequest
 */
export interface RateRequest {
    /**
     * 
     * @type {string}
     * @memberof RateRequest
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RateRequest
     */
    isoCurrencyCode?: string | null;
    /**
     * 
     * @type {CommerceRuntimeAddress}
     * @memberof RateRequest
     */
    originAddress?: CommerceRuntimeAddress;
    /**
     * 
     * @type {CommerceRuntimeAddress}
     * @memberof RateRequest
     */
    destinationAddress?: CommerceRuntimeAddress;
    /**
     * Optional.  If one or more Carrier Ids are specified then only the rates for the specified carrier('s/s') configured service types or shipping methods will be calculated resulting in better performance.
     * @type {Array<string>}
     * @memberof RateRequest
     */
    carrierIds?: Array<string> | null;
    /**
     * Optional.  If one or more Shipping Service Type Codes are specified then only the specified rates for the specified carrier('s/s') configured service types or shipping methods will be calculated resulting in better performance.
     * @type {Array<string>}
     * @memberof RateRequest
     */
    shippingServiceTypes?: Array<string> | null;
    /**
     * The OrderTotal to be used in rate calculation
     * @type {number}
     * @memberof RateRequest
     */
    orderTotal?: number | null;
    /**
     * The Order SubTotal After Discounts to be used in rate calculation
     * @type {number}
     * @memberof RateRequest
     */
    orderDiscountedSubTotal?: number | null;
    /**
     * The order Handling total after discounts to be used in rate calculation
     * @type {number}
     * @memberof RateRequest
     */
    handlingTotal?: number | null;
    /**
     * The Order ID to be used in rate calculation
     * Informational only
     * @type {string}
     * @memberof RateRequest
     */
    relatedOrderId?: string | null;
    /**
     * The Order Number to be used in rate calculation
     * Informational only
     * @type {number}
     * @memberof RateRequest
     */
    relatedOrderNumber?: number | null;
    /**
     * Is the destination address a commercial address?
     * @type {boolean}
     * @memberof RateRequest
     */
    isDestinationAddressCommercial?: boolean | null;
    /**
     * 
     * @type {Array<RateRequestItem>}
     * @memberof RateRequest
     */
    items?: Array<RateRequestItem> | null;
    /**
     * Estimate Date/Time when the shipment for this will be sent.  Primarily utilize to estimate delivery date.
     * @type {string}
     * @memberof RateRequest
     */
    estimatedShipmentDate?: string | null;
    /**
     * Order Attributes. Made available for Arc.js to use
     * @type {Array<RateRequestAttribute>}
     * @memberof RateRequest
     */
    attributes?: Array<RateRequestAttribute> | null;
    /**
     * 
     * @type {Array<CustomAttribute>}
     * @memberof RateRequest
     * @deprecated
     */
    customAttributes?: Array<CustomAttribute> | null;
    /**
     * 
     * @type {object}
     * @memberof RateRequest
     */
    data?: object | null;
}
/**
 * 
 * @export
 * @interface RateRequestAttribute
 */
export interface RateRequestAttribute {
    /**
     * 
     * @type {string}
     * @memberof RateRequestAttribute
     */
    fullyQualifiedName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof RateRequestAttribute
     */
    attributeDefinitionId?: number | null;
    /**
     * 
     * @type {Array<any>}
     * @memberof RateRequestAttribute
     */
    values?: Array<any> | null;
}
/**
 * 
 * @export
 * @interface RateRequestGroup
 */
export interface RateRequestGroup {
    /**
     * 
     * @type {Array<RateRequest>}
     * @memberof RateRequestGroup
     */
    rateRequests?: Array<RateRequest> | null;
    /**
     * 
     * @type {string}
     * @memberof RateRequestGroup
     */
    id?: string | null;
}
/**
 * 
 * @export
 * @interface RateRequestItem
 */
export interface RateRequestItem {
    /**
     * 
     * @type {string}
     * @memberof RateRequestItem
     */
    itemId?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof RateRequestItem
     */
    shipsByItself?: boolean | null;
    /**
     * If Product Summaries are populated, this information will be utilized in Product Rules (e.g. ProductCode eq "ABC" or (Weight.Unit eq "lbs" and Weight.Value ge 50)
     * @type {Array<ProductSummary>}
     * @memberof RateRequestItem
     */
    productSummaries?: Array<ProductSummary> | null;
    /**
     * 
     * @type {ItemMeasurements}
     * @memberof RateRequestItem
     */
    unitMeasurements?: ItemMeasurements;
    /**
     * 
     * @type {number}
     * @memberof RateRequestItem
     */
    quantity?: number | null;
    /**
     * 
     * @type {object}
     * @memberof RateRequestItem
     */
    data?: object | null;
}
/**
 * 
 * @export
 * @interface RatesResponse
 */
export interface RatesResponse {
    /**
     * Resolved Shipping Zone Code.  This value can be null if the tenant/site does not have shipping zones defined or there are no matching 
     * shipping zones for the request (e.g. the only zone defined is "UNITED-STATES" and the destination address of the rate request is in Canada)
     * @type {string}
     * @memberof RatesResponse
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RatesResponse
     */
    resolvedShippingZoneCode?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof RatesResponse
     */
    shippingZoneCodes?: Array<string> | null;
    /**
     * 
     * @type {Array<CarrierRatesResponse>}
     * @memberof RatesResponse
     */
    rates?: Array<CarrierRatesResponse> | null;
}
/**
 * 
 * @export
 * @interface RatesResponseGroup
 */
export interface RatesResponseGroup {
    /**
     * 
     * @type {string}
     * @memberof RatesResponseGroup
     */
    id?: string | null;
    /**
     * 
     * @type {RatesResponse}
     * @memberof RatesResponseGroup
     */
    ratesResponse?: RatesResponse;
    /**
     * 
     * @type {Array<RatesResponse>}
     * @memberof RatesResponseGroup
     */
    componentRates?: Array<RatesResponse> | null;
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
 * @interface ShipmentRequest
 */
export interface ShipmentRequest {
    /**
     * 
     * @type {string}
     * @memberof ShipmentRequest
     */
    isoCurrencyCode?: string | null;
    /**
     * 
     * @type {ShippingRuntimeShipment}
     * @memberof ShipmentRequest
     */
    shipment?: ShippingRuntimeShipment;
    /**
     * Carrier specific options
     * 
     * Ex: RequiresDeliveryConfirmation when using usps with non-express mail service type.
     * @type {Array<CustomAttribute>}
     * @memberof ShipmentRequest
     */
    customAttributes?: Array<CustomAttribute> | null;
    /**
     * 
     * @type {string}
     * @memberof ShipmentRequest
     */
    carrierId?: string | null;
    /**
     * Selected Shipping Service Type.
     * @type {string}
     * @memberof ShipmentRequest
     */
    shippingServiceType?: string | null;
    /**
     * Selected Shipment Request Type.
     * @type {string}
     * @memberof ShipmentRequest
     */
    shipmentRequestType?: string | null;
    /**
     * Designates that the shipment requires a signature for delivery
     * Not fully implemented...
     * @type {boolean}
     * @memberof ShipmentRequest
     */
    requiresSignature?: boolean | null;
    /**
     * Returns the Label in the requested format.
     * Specify either "LASER" or "THERMAL" format.
     * Actual supported image formats vary by carrier.
     * @type {string}
     * @memberof ShipmentRequest
     */
    labelFormat?: string | null;
    /**
     * 
     * @type {Array<CustomerReferences>}
     * @memberof ShipmentRequest
     */
    customerReferences?: Array<CustomerReferences> | null;
    /**
     * The related Order ID for this shipment request.
     * Informational only.
     * @type {string}
     * @memberof ShipmentRequest
     */
    relatedOrderId?: string | null;
    /**
     * The related Order Number for this shipment request.
     * Informational only.
     * @type {number}
     * @memberof ShipmentRequest
     */
    relatedOrderNumber?: number | null;
    /**
     * The related Shipment Number for this shipment request.
     * Informational only.
     * @type {number}
     * @memberof ShipmentRequest
     */
    relatedShipmentNumber?: number | null;
}
/**
 * The shipping rate for a particular line item
 * @export
 * @interface ShippingItemRate
 */
export interface ShippingItemRate {
    /**
     * 
     * @type {string}
     * @memberof ShippingItemRate
     */
    itemId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ShippingItemRate
     */
    quantity?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ShippingItemRate
     */
    amount?: number | null;
}
/**
 * 
 * @export
 * @interface ShippingLabel
 */
export interface ShippingLabel {
    /**
     * 
     * @type {string}
     * @memberof ShippingLabel
     */
    imageFormat?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingLabel
     */
    imageData?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingLabel
     */
    labelUrl?: string | null;
}
/**
 * 
 * @export
 * @interface ShippingRateLocalizedContent
 */
export interface ShippingRateLocalizedContent {
    /**
     * 
     * @type {string}
     * @memberof ShippingRateLocalizedContent
     */
    localeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingRateLocalizedContent
     */
    name?: string | null;
}
/**
 * Shipping Rate Validation Message
 * @export
 * @interface ShippingRateValidationMessage
 */
export interface ShippingRateValidationMessage {
    /**
     * Severity
     * @type {string}
     * @memberof ShippingRateValidationMessage
     */
    severity?: string | null;
    /**
     * Message
     * @type {string}
     * @memberof ShippingRateValidationMessage
     */
    message?: string | null;
    /**
     * Help Link
     * @type {string}
     * @memberof ShippingRateValidationMessage
     */
    helpLink?: string | null;
}
/**
 * A Carrier definition supported by Shipping Runtime.
 * @export
 * @interface ShippingRuntimeCarrier
 */
export interface ShippingRuntimeCarrier {
    /**
     * 
     * @type {string}
     * @memberof ShippingRuntimeCarrier
     */
    carrierId?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ShippingRuntimeCarrier
     */
    isBuiltIn?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ShippingRuntimeCarrier
     */
    certified?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingRuntimeCarrier
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingRuntimeCarrier
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingRuntimeCarrier
     */
    logoUrl?: string | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof ShippingRuntimeCarrier
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * Categories to which the product belongs.
 * @export
 * @interface ShippingRuntimeCategory
 */
export interface ShippingRuntimeCategory {
    /**
     * 
     * @type {number}
     * @memberof ShippingRuntimeCategory
     */
    id?: number;
    /**
     * 
     * @type {ShippingRuntimeCategory}
     * @memberof ShippingRuntimeCategory
     */
    parent?: ShippingRuntimeCategory;
}
/**
 * 
 * @export
 * @interface ShippingRuntimePackage
 */
export interface ShippingRuntimePackage {
    /**
     * 
     * @type {string}
     * @memberof ShippingRuntimePackage
     */
    id?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ShippingRuntimePackage
     */
    contentsValue?: number | null;
    /**
     * 
     * @type {ReservationWebAPIPackageMeasurements}
     * @memberof ShippingRuntimePackage
     */
    measurements?: ReservationWebAPIPackageMeasurements;
    /**
     * 
     * @type {boolean}
     * @memberof ShippingRuntimePackage
     */
    isGift?: boolean | null;
    /**
     * 
     * @type {Array<CustomAttribute>}
     * @memberof ShippingRuntimePackage
     */
    customAttributes?: Array<CustomAttribute> | null;
    /**
     * Package delivery requires a signature when true.
     * @type {boolean}
     * @memberof ShippingRuntimePackage
     */
    requiresSignature?: boolean | null;
    /**
     * Selected PackagingType.  Shipping provider dependent.
     * @type {string}
     * @memberof ShippingRuntimePackage
     */
    packagingType?: string | null;
    /**
     * Product details in the package
     * @type {Array<ProductSummary>}
     * @memberof ShippingRuntimePackage
     */
    productSummaries?: Array<ProductSummary> | null;
}
/**
 * 
 * @export
 * @interface ShippingRuntimePackageResponse
 */
export interface ShippingRuntimePackageResponse {
    /**
     * 
     * @type {string}
     * @memberof ShippingRuntimePackageResponse
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingRuntimePackageResponse
     */
    trackingNumber?: string | null;
    /**
     * 
     * @type {ShippingLabel}
     * @memberof ShippingRuntimePackageResponse
     */
    label?: ShippingLabel;
    /**
     * 
     * @type {Array<CustomAttribute>}
     * @memberof ShippingRuntimePackageResponse
     */
    customAttributes?: Array<CustomAttribute> | null;
    /**
     * Easypost ShipmentId required for manifests
     * @type {string}
     * @memberof ShippingRuntimePackageResponse
     */
    integratorId?: string | null;
}
/**
 * 
 * @export
 * @interface ShippingRuntimeProductOption
 */
export interface ShippingRuntimeProductOption {
    /**
     * 
     * @type {string}
     * @memberof ShippingRuntimeProductOption
     */
    attributeFQN?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingRuntimeProductOption
     */
    dataType?: string | null;
    /**
     * 
     * @type {any}
     * @memberof ShippingRuntimeProductOption
     */
    value?: any | null;
}
/**
 * 
 * @export
 * @interface ShippingRuntimeProductProperty
 */
export interface ShippingRuntimeProductProperty {
    /**
     * 
     * @type {string}
     * @memberof ShippingRuntimeProductProperty
     */
    attributeFQN?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingRuntimeProductProperty
     */
    dataType?: string | null;
    /**
     * 
     * @type {Array<any>}
     * @memberof ShippingRuntimeProductProperty
     */
    values?: Array<any> | null;
}
/**
 * 
 * @export
 * @interface ShippingRuntimeShipment
 */
export interface ShippingRuntimeShipment {
    /**
     * 
     * @type {number}
     * @memberof ShippingRuntimeShipment
     */
    orderTotal?: number | null;
    /**
     * 
     * @type {CommerceRuntimeContact}
     * @memberof ShippingRuntimeShipment
     */
    origin?: CommerceRuntimeContact;
    /**
     * 
     * @type {CommerceRuntimeContact}
     * @memberof ShippingRuntimeShipment
     */
    destination?: CommerceRuntimeContact;
    /**
     * 
     * @type {string}
     * @memberof ShippingRuntimeShipment
     */
    fulfillmentLocationCode?: string | null;
    /**
     * 
     * @type {Array<ShippingRuntimePackage>}
     * @memberof ShippingRuntimeShipment
     */
    packages?: Array<ShippingRuntimePackage> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ShippingRuntimeShipment
     */
    shippingMethodCodes?: Array<string> | null;
    /**
     * 
     * @type {Array<CustomAttribute>}
     * @memberof ShippingRuntimeShipment
     */
    customAttributes?: Array<CustomAttribute> | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingRuntimeShipment
     */
    estimatedShipmentDate?: string | null;
}
/**
 * 
 * @export
 * @interface ShippingRuntimeShipmentResponse
 */
export interface ShippingRuntimeShipmentResponse {
    /**
     * 
     * @type {Money}
     * @memberof ShippingRuntimeShipmentResponse
     */
    shippingTotal?: Money;
    /**
     * 
     * @type {string}
     * @memberof ShippingRuntimeShipmentResponse
     */
    trackingNumber?: string | null;
    /**
     * 
     * @type {Array<ShippingRuntimePackageResponse>}
     * @memberof ShippingRuntimeShipmentResponse
     */
    packageResponses?: Array<ShippingRuntimePackageResponse> | null;
    /**
     * 
     * @type {Array<CustomAttribute>}
     * @memberof ShippingRuntimeShipmentResponse
     */
    customAttributes?: Array<CustomAttribute> | null;
    /**
     * 
     * @type {Array<Notification>}
     * @memberof ShippingRuntimeShipmentResponse
     */
    messages?: Array<Notification> | null;
    /**
     * 
     * @type {boolean}
     * @memberof ShippingRuntimeShipmentResponse
     */
    isSuccessful?: boolean;
}
/**
 * 
 * @export
 * @interface ShippingRuntimeShippingRate
 */
export interface ShippingRuntimeShippingRate {
    /**
     * 
     * @type {string}
     * @memberof ShippingRuntimeShippingRate
     */
    code?: string | null;
    /**
     * 
     * @type {ShippingRateLocalizedContent}
     * @memberof ShippingRuntimeShippingRate
     */
    content?: ShippingRateLocalizedContent;
    /**
     * 
     * @type {number}
     * @memberof ShippingRuntimeShippingRate
     */
    amount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ShippingRuntimeShippingRate
     */
    daysInTransit?: number | null;
    /**
     * 
     * @type {Array<ShippingItemRate>}
     * @memberof ShippingRuntimeShippingRate
     */
    shippingItemRates?: Array<ShippingItemRate> | null;
    /**
     * 
     * @type {Array<CustomAttribute>}
     * @memberof ShippingRuntimeShippingRate
     */
    customAttributes?: Array<CustomAttribute> | null;
    /**
     * 
     * @type {Array<ShippingRateValidationMessage>}
     * @memberof ShippingRuntimeShippingRate
     */
    messages?: Array<ShippingRateValidationMessage> | null;
    /**
     * 
     * @type {object}
     * @memberof ShippingRuntimeShippingRate
     */
    data?: object | null;
}
