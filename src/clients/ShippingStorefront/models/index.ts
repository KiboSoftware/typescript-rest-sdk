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
 * @interface CarrierMethods
 */
export interface CarrierMethods {
    /**
     * 
     * @type {string}
     * @memberof CarrierMethods
     */
    carrierId?: string | null;
    /**
     * Selected Shipping Service Type.
     * @type {Array<string>}
     * @memberof CarrierMethods
     */
    shippingMethods?: Array<string> | null;
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
     * @type {Array<CustomAttribute>}
     * @memberof CarrierRatesResponse
     * @deprecated
     */
    customAttributes?: Array<CustomAttribute> | null;
    /**
     * The fulfillment method for which this carrier rate is applicable to. Possible values are Ship and Delivery.
     * @type {string}
     * @memberof CarrierRatesResponse
     */
    fulfillmentMethod?: string | null;
    /**
     * 
     * @type {Array<ShippingRuntimeShippingRate>}
     * @memberof CarrierRatesResponse
     */
    shippingRates?: Array<ShippingRuntimeShippingRate> | null;
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
 * @interface CarrierTransitTimes
 */
export interface CarrierTransitTimes {
    /**
     * 
     * @type {string}
     * @memberof CarrierTransitTimes
     */
    carrierId?: string | null;
    /**
     * 
     * @type {Array<ShippingRuntimeEstimatedDeliveryDate>}
     * @memberof CarrierTransitTimes
     */
    estimatedDeliveryDates?: Array<ShippingRuntimeEstimatedDeliveryDate> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof CarrierTransitTimes
     */
    itemIds?: Array<string> | null;
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
 * @interface ConsolidationReference
 */
export interface ConsolidationReference {
    /**
     * 
     * @type {string}
     * @memberof ConsolidationReference
     */
    relatedOrderId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ConsolidationReference
     */
    relatedOrderNumber?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ConsolidationReference
     */
    relatedShipmentNumber?: number | null;
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
 * @interface ExternalRateRequest
 */
export interface ExternalRateRequest {
    /**
     * Order Attributes. Made available for Arc.js to use
     * @type {Array<RateRequestAttribute>}
     * @memberof ExternalRateRequest
     */
    attributes?: Array<RateRequestAttribute> | null;
    /**
     * Optional.  If one or more Carrier Ids are specified then only the rates for the specified carrier('s/s') configured service types or shipping methods will be calculated resulting in better performance.
     * @type {Array<string>}
     * @memberof ExternalRateRequest
     */
    carrierIds?: Array<string> | null;
    /**
     * 
     * @type {Array<CustomAttribute>}
     * @memberof ExternalRateRequest
     * @deprecated
     */
    customAttributes?: Array<CustomAttribute> | null;
    /**
     * 
     * @type {object}
     * @memberof ExternalRateRequest
     */
    data?: object | null;
    /**
     * 
     * @type {CommerceRuntimeAddress}
     * @memberof ExternalRateRequest
     */
    destinationAddress?: CommerceRuntimeAddress;
    /**
     * Estimate Date/Time when the shipment for this will be sent.  Primarily utilize to estimate delivery date.
     * @type {string}
     * @memberof ExternalRateRequest
     */
    estimatedShipmentDate?: string | null;
    /**
     * The order Handling total after discounts to be used in rate calculation
     * @type {number}
     * @memberof ExternalRateRequest
     */
    handlingTotal?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ExternalRateRequest
     */
    id?: string | null;
    /**
     * Is the destination address a commercial address?
     * @type {boolean}
     * @memberof ExternalRateRequest
     */
    isDestinationAddressCommercial?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof ExternalRateRequest
     */
    isoCurrencyCode?: string | null;
    /**
     * 
     * @type {Array<RateRequestItem>}
     * @memberof ExternalRateRequest
     */
    items?: Array<RateRequestItem> | null;
    /**
     * The Order SubTotal After Discounts to be used in rate calculation
     * @type {number}
     * @memberof ExternalRateRequest
     */
    orderDiscountedSubTotal?: number | null;
    /**
     * The OrderTotal to be used in rate calculation
     * @type {number}
     * @memberof ExternalRateRequest
     */
    orderTotal?: number | null;
    /**
     * 
     * @type {CommerceRuntimeAddress}
     * @memberof ExternalRateRequest
     */
    originAddress?: CommerceRuntimeAddress;
    /**
     * Optional for STH rates. The location code of the origin location. Used for calculation of Delivery rates.
     * @type {string}
     * @memberof ExternalRateRequest
     */
    originLocationCode?: string | null;
    /**
     * The Order ID to be used in rate calculation
     * Informational only
     * @type {string}
     * @memberof ExternalRateRequest
     */
    relatedOrderId?: string | null;
    /**
     * The Order Number to be used in rate calculation
     * Informational only
     * @type {number}
     * @memberof ExternalRateRequest
     */
    relatedOrderNumber?: number | null;
    /**
     * Optional.  If one or more Shipping Service Type Codes are specified then only the specified rates for the specified carrier('s/s') configured service types or shipping methods will be calculated resulting in better performance.
     * @type {Array<string>}
     * @memberof ExternalRateRequest
     */
    shippingServiceTypes?: Array<string> | null;
    /**
     * The list of carriers and their respected rates for which this request needs calculated
     * @type {Array<CarrierMethods>}
     * @memberof ExternalRateRequest
     */
    carrierRates?: Array<CarrierMethods> | null;
}
/**
 * 
 * @export
 * @interface ExternalRateRequestAllOf
 */
export interface ExternalRateRequestAllOf {
    /**
     * The list of carriers and their respected rates for which this request needs calculated
     * @type {Array<CarrierMethods>}
     * @memberof ExternalRateRequestAllOf
     */
    carrierRates?: Array<CarrierMethods> | null;
}
/**
 * 
 * @export
 * @interface ItemMeasurements
 */
export interface ItemMeasurements {
    /**
     * Not exposed publicly
     * @type {number}
     * @memberof ItemMeasurements
     */
    girth?: number | null;
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
    length?: CommerceRuntimeMeasurement;
    /**
     * 
     * @type {CommerceRuntimeMeasurement}
     * @memberof ItemMeasurements
     */
    weight?: CommerceRuntimeMeasurement;
    /**
     * 
     * @type {CommerceRuntimeMeasurement}
     * @memberof ItemMeasurements
     */
    width?: CommerceRuntimeMeasurement;
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
    packageTrackingNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LabelRequest
     */
    trackingNumber?: string | null;
}
/**
 * 
 * @export
 * @interface LabelResponse
 */
export interface LabelResponse {
    /**
     * 
     * @type {Array<PackageLabelResponse>}
     * @memberof LabelResponse
     */
    packageLabels?: Array<PackageLabelResponse> | null;
    /**
     * 
     * @type {string}
     * @memberof LabelResponse
     */
    trackingNumber?: string | null;
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
    code?: string | null;
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
    source?: string | null;
}
/**
 * 
 * @export
 * @interface PackageLabelResponse
 */
export interface PackageLabelResponse {
    /**
     * 
     * @type {ShippingLabel}
     * @memberof PackageLabelResponse
     */
    label?: ShippingLabel;
    /**
     * 
     * @type {string}
     * @memberof PackageLabelResponse
     */
    trackingNumber?: string | null;
}
/**
 * 
 * @export
 * @interface ProductSummary
 */
export interface ProductSummary {
    /**
     * 
     * @type {Array<ShippingRuntimeCategory>}
     * @memberof ProductSummary
     */
    categories?: Array<ShippingRuntimeCategory> | null;
    /**
     * 
     * @type {Array<ShippingRuntimeProductOption>}
     * @memberof ProductSummary
     */
    options?: Array<ShippingRuntimeProductOption> | null;
    /**
     * Price (unit price * quantity)
     * @type {number}
     * @memberof ProductSummary
     */
    price?: number;
    /**
     * Merchant-created code that uniquely identifies the product.
     * @type {string}
     * @memberof ProductSummary
     */
    productCode?: string | null;
    /**
     * Product name/description
     * @type {string}
     * @memberof ProductSummary
     */
    productDescription?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductSummary
     */
    productType?: string | null;
    /**
     * 
     * @type {Array<ShippingRuntimeProductProperty>}
     * @memberof ProductSummary
     */
    properties?: Array<ShippingRuntimeProductProperty> | null;
    /**
     * Product quantity
     * @type {number}
     * @memberof ProductSummary
     */
    quantity?: number;
    /**
     * 
     * @type {ItemMeasurements}
     * @memberof ProductSummary
     */
    unitMeasurements?: ItemMeasurements;
}
/**
 * 
 * @export
 * @interface RateRequest
 */
export interface RateRequest {
    /**
     * Order Attributes. Made available for Arc.js to use
     * @type {Array<RateRequestAttribute>}
     * @memberof RateRequest
     */
    attributes?: Array<RateRequestAttribute> | null;
    /**
     * Optional.  If one or more Carrier Ids are specified then only the rates for the specified carrier('s/s') configured service types or shipping methods will be calculated resulting in better performance.
     * @type {Array<string>}
     * @memberof RateRequest
     */
    carrierIds?: Array<string> | null;
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
    /**
     * 
     * @type {CommerceRuntimeAddress}
     * @memberof RateRequest
     */
    destinationAddress?: CommerceRuntimeAddress;
    /**
     * Estimate Date/Time when the shipment for this will be sent.  Primarily utilize to estimate delivery date.
     * @type {string}
     * @memberof RateRequest
     */
    estimatedShipmentDate?: string | null;
    /**
     * The order Handling total after discounts to be used in rate calculation
     * @type {number}
     * @memberof RateRequest
     */
    handlingTotal?: number | null;
    /**
     * 
     * @type {string}
     * @memberof RateRequest
     */
    id?: string | null;
    /**
     * Is the destination address a commercial address?
     * @type {boolean}
     * @memberof RateRequest
     */
    isDestinationAddressCommercial?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof RateRequest
     */
    isoCurrencyCode?: string | null;
    /**
     * 
     * @type {Array<RateRequestItem>}
     * @memberof RateRequest
     */
    items?: Array<RateRequestItem> | null;
    /**
     * The Order SubTotal After Discounts to be used in rate calculation
     * @type {number}
     * @memberof RateRequest
     */
    orderDiscountedSubTotal?: number | null;
    /**
     * The OrderTotal to be used in rate calculation
     * @type {number}
     * @memberof RateRequest
     */
    orderTotal?: number | null;
    /**
     * 
     * @type {CommerceRuntimeAddress}
     * @memberof RateRequest
     */
    originAddress?: CommerceRuntimeAddress;
    /**
     * Optional for STH rates. The location code of the origin location. Used for calculation of Delivery rates.
     * @type {string}
     * @memberof RateRequest
     */
    originLocationCode?: string | null;
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
     * Optional.  If one or more Shipping Service Type Codes are specified then only the specified rates for the specified carrier('s/s') configured service types or shipping methods will be calculated resulting in better performance.
     * @type {Array<string>}
     * @memberof RateRequest
     */
    shippingServiceTypes?: Array<string> | null;
}
/**
 * 
 * @export
 * @interface RateRequestAttribute
 */
export interface RateRequestAttribute {
    /**
     * 
     * @type {number}
     * @memberof RateRequestAttribute
     */
    attributeDefinitionId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof RateRequestAttribute
     */
    fullyQualifiedName?: string | null;
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
     * @type {string}
     * @memberof RateRequestGroup
     */
    id?: string | null;
    /**
     * 
     * @type {Array<RateRequest>}
     * @memberof RateRequestGroup
     */
    rateRequests?: Array<RateRequest> | null;
}
/**
 * Represents an item in a rate request, inheriting from RequestItem.
 * @export
 * @interface RateRequestItem
 */
export interface RateRequestItem {
    /**
     * 
     * @type {object}
     * @memberof RateRequestItem
     */
    data?: object | null;
    /**
     * 
     * @type {string}
     * @memberof RateRequestItem
     */
    itemId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof RateRequestItem
     */
    quantity?: number | null;
    /**
     * 
     * @type {ItemMeasurements}
     * @memberof RateRequestItem
     */
    unitMeasurements?: ItemMeasurements;
    /**
     * The fulfillment method on item to fetch rates for. Supported values are Ship and Delivery. Will assume Ship if nothing is passed.
     * @type {string}
     * @memberof RateRequestItem
     */
    fulfillmentMethod?: string | null;
    /**
     * Item total.
     * @type {number}
     * @memberof RateRequestItem
     */
    itemTotal?: number | null;
    /**
     * If Product Summaries are populated, this information will be utilized in Product Rules (e.g. ProductCode eq "ABC" or (Weight.Unit eq "lbs" and Weight.Value ge 50)
     * @type {Array<ProductSummary>}
     * @memberof RateRequestItem
     */
    productSummaries?: Array<ProductSummary> | null;
    /**
     * 
     * @type {boolean}
     * @memberof RateRequestItem
     */
    shipsByItself?: boolean | null;
}
/**
 * 
 * @export
 * @interface RateRequestItemAllOf
 */
export interface RateRequestItemAllOf {
    /**
     * The fulfillment method on item to fetch rates for. Supported values are Ship and Delivery. Will assume Ship if nothing is passed.
     * @type {string}
     * @memberof RateRequestItemAllOf
     */
    fulfillmentMethod?: string | null;
    /**
     * Item total.
     * @type {number}
     * @memberof RateRequestItemAllOf
     */
    itemTotal?: number | null;
    /**
     * If Product Summaries are populated, this information will be utilized in Product Rules (e.g. ProductCode eq "ABC" or (Weight.Unit eq "lbs" and Weight.Value ge 50)
     * @type {Array<ProductSummary>}
     * @memberof RateRequestItemAllOf
     */
    productSummaries?: Array<ProductSummary> | null;
    /**
     * 
     * @type {boolean}
     * @memberof RateRequestItemAllOf
     */
    shipsByItself?: boolean | null;
}
/**
 * 
 * @export
 * @interface RatesResponse
 */
export interface RatesResponse {
    /**
     * 
     * @type {string}
     * @memberof RatesResponse
     */
    id?: string | null;
    /**
     * 
     * @type {Array<CarrierRatesResponse>}
     * @memberof RatesResponse
     */
    rates?: Array<CarrierRatesResponse> | null;
    /**
     * Resolved Shipping Zone Code.  This value can be null if the tenant/site does not have shipping zones defined or there are no matching 
     * shipping zones for the request (e.g. the only zone defined is "UNITED-STATES" and the destination address of the rate request is in Canada)
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
}
/**
 * 
 * @export
 * @interface RatesResponseGroup
 */
export interface RatesResponseGroup {
    /**
     * 
     * @type {Array<RatesResponse>}
     * @memberof RatesResponseGroup
     */
    componentRates?: Array<RatesResponse> | null;
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
}
/**
 * 
 * @export
 * @interface RequestItem
 */
export interface RequestItem {
    /**
     * 
     * @type {object}
     * @memberof RequestItem
     */
    data?: object | null;
    /**
     * 
     * @type {string}
     * @memberof RequestItem
     */
    itemId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof RequestItem
     */
    quantity?: number | null;
    /**
     * 
     * @type {ItemMeasurements}
     * @memberof RequestItem
     */
    unitMeasurements?: ItemMeasurements;
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
    carrierId?: string | null;
    /**
     * Consolidation references for Order Number, Shipment Number and Order Id
     * @type {Array<ConsolidationReference>}
     * @memberof ShipmentRequest
     */
    consolidationReferences?: Array<ConsolidationReference> | null;
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
     * @type {Array<CustomerReferences>}
     * @memberof ShipmentRequest
     */
    customerReferences?: Array<CustomerReferences> | null;
    /**
     * Fulfillment method for the shipment. STH / Delivery. Empty will be assumed as STH.
     * @type {string}
     * @memberof ShipmentRequest
     */
    fulfillmentMethod?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShipmentRequest
     */
    isoCurrencyCode?: string | null;
    /**
     * Returns the Label in the requested format.
     * Specify either "LASER" or "THERMAL" format.
     * Actual supported image formats vary by carrier.
     * @type {string}
     * @memberof ShipmentRequest
     */
    labelFormat?: string | null;
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
    /**
     * 
     * @type {ShippingRuntimeShipment}
     * @memberof ShipmentRequest
     */
    shipment?: ShippingRuntimeShipment;
    /**
     * Selected Shipment Request Type.
     * @type {string}
     * @memberof ShipmentRequest
     */
    shipmentRequestType?: string | null;
    /**
     * Selected Shipping Service Type.
     * @type {string}
     * @memberof ShipmentRequest
     */
    shippingServiceType?: string | null;
    /**
     * Specify an optional signature option for this shipment.
     * All packages will inherit this option value automatically.
     * Set this option on the package level to override this value.
     * @type {string}
     * @memberof ShipmentRequest
     */
    signatureOption?: string | null;
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
    imageData?: string | null;
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
     * Help Link
     * @type {string}
     * @memberof ShippingRateValidationMessage
     */
    helpLink?: string | null;
    /**
     * Message
     * @type {string}
     * @memberof ShippingRateValidationMessage
     */
    message?: string | null;
    /**
     * Severity
     * @type {string}
     * @memberof ShippingRateValidationMessage
     */
    severity?: string | null;
}
/**
 * A Carrier definition supported by Shipping Runtime.
 * @export
 * @interface ShippingRuntimeCarrier
 */
export interface ShippingRuntimeCarrier {
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof ShippingRuntimeCarrier
     */
    auditInfo?: AdminUserAuditInfo;
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
    certified?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingRuntimeCarrier
     */
    description?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ShippingRuntimeCarrier
     */
    features?: Array<string> | null;
    /**
     * 
     * @type {boolean}
     * @memberof ShippingRuntimeCarrier
     */
    isBuiltIn?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ShippingRuntimeCarrier
     */
    logoUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingRuntimeCarrier
     */
    name?: string | null;
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
 * @interface ShippingRuntimeDeliveryWindow
 */
export interface ShippingRuntimeDeliveryWindow {
    /**
     * 
     * @type {TimeWindow}
     * @memberof ShippingRuntimeDeliveryWindow
     */
    dropoffTime?: TimeWindow;
    /**
     * 
     * @type {TimeWindow}
     * @memberof ShippingRuntimeDeliveryWindow
     */
    pickupTime?: TimeWindow;
}
/**
 * 
 * @export
 * @interface ShippingRuntimeEstimatedDeliveryDate
 */
export interface ShippingRuntimeEstimatedDeliveryDate {
    /**
     * 
     * @type {object}
     * @memberof ShippingRuntimeEstimatedDeliveryDate
     */
    data?: object | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingRuntimeEstimatedDeliveryDate
     */
    deliveryDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingRuntimeEstimatedDeliveryDate
     */
    fulfillmentMethod?: string | null;
    /**
     * 
     * @type {Array<ShippingRateValidationMessage>}
     * @memberof ShippingRuntimeEstimatedDeliveryDate
     */
    messages?: Array<ShippingRateValidationMessage> | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingRuntimeEstimatedDeliveryDate
     */
    serviceType?: string | null;
    /**
     * 
     * @type {Array<ShippingRuntimeDeliveryWindow>}
     * @memberof ShippingRuntimeEstimatedDeliveryDate
     */
    windows?: Array<ShippingRuntimeDeliveryWindow> | null;
}
/**
 * 
 * @export
 * @interface ShippingRuntimePackage
 */
export interface ShippingRuntimePackage {
    /**
     * 
     * @type {number}
     * @memberof ShippingRuntimePackage
     */
    contentsValue?: number | null;
    /**
     * 
     * @type {Array<CustomAttribute>}
     * @memberof ShippingRuntimePackage
     */
    customAttributes?: Array<CustomAttribute> | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingRuntimePackage
     */
    id?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ShippingRuntimePackage
     */
    isGift?: boolean | null;
    /**
     * 
     * @type {ShippingRuntimePackageMeasurements}
     * @memberof ShippingRuntimePackage
     */
    measurements?: ShippingRuntimePackageMeasurements;
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
    /**
     * Specify an optional signature option for this package.
     * If not specified, will inherit the option value from the shipment.
     * @type {string}
     * @memberof ShippingRuntimePackage
     */
    signatureOption?: string | null;
}
/**
 * 
 * @export
 * @interface ShippingRuntimePackageMeasurements
 */
export interface ShippingRuntimePackageMeasurements {
    /**
     * 
     * @type {CommerceRuntimeMeasurement}
     * @memberof ShippingRuntimePackageMeasurements
     */
    height?: CommerceRuntimeMeasurement;
    /**
     * 
     * @type {CommerceRuntimeMeasurement}
     * @memberof ShippingRuntimePackageMeasurements
     */
    length?: CommerceRuntimeMeasurement;
    /**
     * 
     * @type {CommerceRuntimeMeasurement}
     * @memberof ShippingRuntimePackageMeasurements
     */
    weight?: CommerceRuntimeMeasurement;
    /**
     * 
     * @type {CommerceRuntimeMeasurement}
     * @memberof ShippingRuntimePackageMeasurements
     */
    width?: CommerceRuntimeMeasurement;
}
/**
 * 
 * @export
 * @interface ShippingRuntimePackageResponse
 */
export interface ShippingRuntimePackageResponse {
    /**
     * 
     * @type {Array<CustomAttribute>}
     * @memberof ShippingRuntimePackageResponse
     */
    customAttributes?: Array<CustomAttribute> | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingRuntimePackageResponse
     */
    id?: string | null;
    /**
     * Easypost ShipmentId required for manifests
     * @type {string}
     * @memberof ShippingRuntimePackageResponse
     */
    integratorId?: string | null;
    /**
     * 
     * @type {ShippingLabel}
     * @memberof ShippingRuntimePackageResponse
     */
    label?: ShippingLabel;
    /**
     * 
     * @type {string}
     * @memberof ShippingRuntimePackageResponse
     */
    trackingNumber?: string | null;
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
     * @type {Array<CustomAttribute>}
     * @memberof ShippingRuntimeShipment
     */
    customAttributes?: Array<CustomAttribute> | null;
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
    estimatedShipmentDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingRuntimeShipment
     */
    fulfillmentLocationCode?: string | null;
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
}
/**
 * 
 * @export
 * @interface ShippingRuntimeShipmentResponse
 */
export interface ShippingRuntimeShipmentResponse {
    /**
     * 
     * @type {Array<CustomAttribute>}
     * @memberof ShippingRuntimeShipmentResponse
     */
    customAttributes?: Array<CustomAttribute> | null;
    /**
     * 
     * @type {boolean}
     * @memberof ShippingRuntimeShipmentResponse
     */
    isSuccessful?: boolean;
    /**
     * 
     * @type {Array<Notification>}
     * @memberof ShippingRuntimeShipmentResponse
     */
    messages?: Array<Notification> | null;
    /**
     * 
     * @type {Array<ShippingRuntimePackageResponse>}
     * @memberof ShippingRuntimeShipmentResponse
     */
    packageResponses?: Array<ShippingRuntimePackageResponse> | null;
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
}
/**
 * The shipping rate for a particular line item
 * @export
 * @interface ShippingRuntimeShippingItemRate
 */
export interface ShippingRuntimeShippingItemRate {
    /**
     * 
     * @type {number}
     * @memberof ShippingRuntimeShippingItemRate
     */
    amount?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingRuntimeShippingItemRate
     */
    itemId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ShippingRuntimeShippingItemRate
     */
    quantity?: number | null;
}
/**
 * 
 * @export
 * @interface ShippingRuntimeShippingRate
 */
export interface ShippingRuntimeShippingRate {
    /**
     * 
     * @type {number}
     * @memberof ShippingRuntimeShippingRate
     */
    amount?: number | null;
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
     * @type {Array<CustomAttribute>}
     * @memberof ShippingRuntimeShippingRate
     */
    customAttributes?: Array<CustomAttribute> | null;
    /**
     * 
     * @type {object}
     * @memberof ShippingRuntimeShippingRate
     */
    data?: object | null;
    /**
     * 
     * @type {number}
     * @memberof ShippingRuntimeShippingRate
     */
    daysInTransit?: number | null;
    /**
     * 
     * @type {Array<ShippingRateValidationMessage>}
     * @memberof ShippingRuntimeShippingRate
     */
    messages?: Array<ShippingRateValidationMessage> | null;
    /**
     * 
     * @type {Array<ShippingRuntimeShippingItemRate>}
     * @memberof ShippingRuntimeShippingRate
     */
    shippingItemRates?: Array<ShippingRuntimeShippingItemRate> | null;
    /**
     * 
     * @type {Array<ShippingRuntimeDeliveryWindow>}
     * @memberof ShippingRuntimeShippingRate
     */
    windows?: Array<ShippingRuntimeDeliveryWindow> | null;
}
/**
 * Represents a time window with a start and end time.
 * @export
 * @interface TimeWindow
 */
export interface TimeWindow {
    /**
     * Gets or sets the end time of the time window.
     * @type {string}
     * @memberof TimeWindow
     */
    endsAt?: string | null;
    /**
     * Gets or sets the start time of the time window.
     * @type {string}
     * @memberof TimeWindow
     */
    startsAt?: string;
}
/**
 * 
 * @export
 * @interface TransitTimesItem
 */
export interface TransitTimesItem {
    /**
     * 
     * @type {object}
     * @memberof TransitTimesItem
     */
    data?: object | null;
    /**
     * 
     * @type {string}
     * @memberof TransitTimesItem
     */
    itemId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof TransitTimesItem
     */
    quantity?: number | null;
    /**
     * 
     * @type {ItemMeasurements}
     * @memberof TransitTimesItem
     */
    unitMeasurements?: ItemMeasurements;
    /**
     * 
     * @type {string}
     * @memberof TransitTimesItem
     */
    productCode?: string | null;
}
/**
 * 
 * @export
 * @interface TransitTimesItemAllOf
 */
export interface TransitTimesItemAllOf {
    /**
     * 
     * @type {string}
     * @memberof TransitTimesItemAllOf
     */
    productCode?: string | null;
}
/**
 * 
 * @export
 * @interface TransitTimesRequest
 */
export interface TransitTimesRequest {
    /**
     * Custom data for the request
     * @type {object}
     * @memberof TransitTimesRequest
     */
    data?: object | null;
    /**
     * 
     * @type {CommerceRuntimeAddress}
     * @memberof TransitTimesRequest
     */
    destinationAddress?: CommerceRuntimeAddress;
    /**
     * 
     * @type {string}
     * @memberof TransitTimesRequest
     */
    fulfillmentMethod?: string | null;
    /**
     * 
     * @type {Array<TransitTimesItem>}
     * @memberof TransitTimesRequest
     */
    items?: Array<TransitTimesItem> | null;
    /**
     * 
     * @type {CommerceRuntimeAddress}
     * @memberof TransitTimesRequest
     */
    originAddress?: CommerceRuntimeAddress;
    /**
     * 
     * @type {string}
     * @memberof TransitTimesRequest
     */
    originLocationCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TransitTimesRequest
     */
    shipDate?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof TransitTimesRequest
     */
    shippingServiceTypes?: Array<string> | null;
}
/**
 * 
 * @export
 * @interface TransitTimesResponse
 */
export interface TransitTimesResponse {
    /**
     * 
     * @type {object}
     * @memberof TransitTimesResponse
     */
    data?: object | null;
    /**
     * 
     * @type {CommerceRuntimeAddress}
     * @memberof TransitTimesResponse
     */
    destinationAddress?: CommerceRuntimeAddress;
    /**
     * 
     * @type {Array<TransitTimesItem>}
     * @memberof TransitTimesResponse
     */
    items?: Array<TransitTimesItem> | null;
    /**
     * 
     * @type {string}
     * @memberof TransitTimesResponse
     */
    originLocationCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TransitTimesResponse
     */
    shipDate?: string;
    /**
     * 
     * @type {Array<CarrierTransitTimes>}
     * @memberof TransitTimesResponse
     */
    transitTimes?: Array<CarrierTransitTimes> | null;
}
