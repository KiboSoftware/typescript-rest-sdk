/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface AbstractFulfillmentItem
 */
export interface AbstractFulfillmentItem {
    /**
     * Code of the Product to be fulfilled.
     * @type {string}
     * @memberof AbstractFulfillmentItem
     */
    productCode?: string | null;
    /**
     * Quantity of the order item
     * @type {number}
     * @memberof AbstractFulfillmentItem
     */
    quantity?: number;
    /**
     * The type of fulfillment item
     * @type {string}
     * @memberof AbstractFulfillmentItem
     */
    fulfillmentItemType?: string | null;
    /**
     * The line id associated with the fulfillment.
     * @type {number}
     * @memberof AbstractFulfillmentItem
     */
    lineId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof AbstractFulfillmentItem
     */
    optionAttributeFQN?: string | null;
}
/**
 * 
 * @export
 * @interface Adjustment
 */
export interface Adjustment {
    /**
     * 
     * @type {number}
     * @memberof Adjustment
     */
    amount?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Adjustment
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Adjustment
     */
    internalComment?: string | null;
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
 * @interface AlternateContact
 */
export interface AlternateContact {
    /**
     * First Name of alternate contact during order process
     * @type {string}
     * @memberof AlternateContact
     */
    firstName?: string | null;
    /**
     * Last Name of alternate contact during order process
     * @type {string}
     * @memberof AlternateContact
     */
    lastNameOrSurname?: string | null;
    /**
     * Email Address of alternate contact during order process
     * @type {string}
     * @memberof AlternateContact
     */
    emailAddress?: string | null;
    /**
     * Phone Number of alternate contact during order process
     * @type {string}
     * @memberof AlternateContact
     */
    phoneNumber?: string | null;
}
/**
 * Details of the discount applied to a product.
 * @export
 * @interface AppliedProductDiscount
 */
export interface AppliedProductDiscount {
    /**
     * Quantity of products priced. This is always one unless calculating pricing on the order or cart.
     * @type {number}
     * @memberof AppliedProductDiscount
     * @deprecated
     */
    productQuantity?: number | null;
    /**
     * Impact for a quantity of one product; that is, the value of the discount for one product.
     * @type {number}
     * @memberof AppliedProductDiscount
     * @deprecated
     */
    impactPerUnit?: number | null;
    /**
     * Determines if the discount applies to the sale price of the order
     * @type {boolean}
     * @memberof AppliedProductDiscount
     */
    appliesToSalePrice?: boolean | null;
    /**
     * Value of the discount applied. This is a negative number to be subtracted from the original price to get the final price.
     * @type {number}
     * @memberof AppliedProductDiscount
     */
    impact?: number | null;
    /**
     * 
     * @type {CommerceRuntimeDiscount}
     * @memberof AppliedProductDiscount
     */
    discount?: CommerceRuntimeDiscount;
    /**
     * Code of the coupon associated with the discount if a coupon code is required to get the discount.
     * @type {string}
     * @memberof AppliedProductDiscount
     */
    couponCode?: string | null;
    /**
     * Determines whether or not this discount is set up to be ignored by the pricing runtime.
     * @type {boolean}
     * @memberof AppliedProductDiscount
     */
    excluded?: boolean | null;
}
/**
 * Customer's payment details such as payment type (credit card, check by mail, or PayPal)
 * and cardholder information if payment is by credit card.
 * @export
 * @interface BillingInfo
 */
export interface BillingInfo {
    /**
     * Type of payment, such as credit card, check by mail, or PayPal.
     * see Mozu.CommerceRuntime.Contracts.Payments.PaymentTypeConst for valid values
     * @type {string}
     * @memberof BillingInfo
     */
    paymentType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BillingInfo
     */
    paymentWorkflow?: string | null;
    /**
     * 
     * @type {CommerceRuntimeContact}
     * @memberof BillingInfo
     */
    billingContact?: CommerceRuntimeContact;
    /**
     * Indicates that billing and shipping address are the same
     * @type {boolean}
     * @memberof BillingInfo
     */
    isSameBillingShippingAddress?: boolean;
    /**
     * 
     * @type {PaymentCard}
     * @memberof BillingInfo
     */
    card?: PaymentCard;
    /**
     * 
     * @type {PaymentToken}
     * @memberof BillingInfo
     */
    token?: PaymentToken;
    /**
     * 
     * @type {PurchaseOrderPayment}
     * @memberof BillingInfo
     */
    purchaseOrder?: PurchaseOrderPayment;
    /**
     * 
     * @type {CheckPayment}
     * @memberof BillingInfo
     */
    check?: CheckPayment;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof BillingInfo
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * The store credit to use for this purchase
     * @type {string}
     * @memberof BillingInfo
     */
    storeCreditCode?: string | null;
    /**
     * The type of store credit used for this purchase
     * @type {string}
     * @memberof BillingInfo
     */
    storeCreditType?: string | null;
    /**
     * Name of custom stored credit type
     * @type {string}
     * @memberof BillingInfo
     */
    customCreditType?: string | null;
    /**
     * Transaction Id from third party payment source like Visa Checkout, Amazon
     * @type {string}
     * @memberof BillingInfo
     */
    externalTransactionId?: string | null;
    /**
     * Indicates whether the payment is used in recurring transactions. ex- subscription payments
     * @type {boolean}
     * @memberof BillingInfo
     */
    isRecurring?: boolean;
    /**
     * Recurring Payment Id returned by Payment Gateway
     * networkTransactionId for vantiv
     * previousTransactionId for cybersource etc
     * @type {string}
     * @memberof BillingInfo
     */
    recurringTransactionId?: string | null;
    /**
     * Custom data from payment providers
     * @type {object}
     * @memberof BillingInfo
     */
    data?: object | null;
}
/**
 * 
 * @export
 * @interface CapturableShipmentSummary
 */
export interface CapturableShipmentSummary {
    /**
     * The identifying number of the shipment affected by the payment action
     * @type {number}
     * @memberof CapturableShipmentSummary
     */
    shipmentNumber?: number;
    /**
     * The shipment's total when the payment action occurred
     * @type {number}
     * @memberof CapturableShipmentSummary
     */
    shipmentTotal?: number;
    /**
     * The amount applied by the payment action
     * @type {number}
     * @memberof CapturableShipmentSummary
     */
    amountApplied?: number;
}
/**
 * 
 * @export
 * @interface CheckPayment
 */
export interface CheckPayment {
    /**
     * 
     * @type {string}
     * @memberof CheckPayment
     */
    checkNumber?: string | null;
}
/**
 * 
 * @export
 * @interface CollectionOfDigitalPackageItem
 */
export interface CollectionOfDigitalPackageItem {
    /**
     * ID of the fulfillment unit.
     * @type {string}
     * @memberof CollectionOfDigitalPackageItem
     */
    id?: string | null;
    /**
     * A human-readable identifier for this fulfillment unit.  If not set on create, will be autogenerated as a string of the form
     *     {fulfillmentUnitType} #{next available int}
     * @type {string}
     * @memberof CollectionOfDigitalPackageItem
     */
    code?: string | null;
    /**
     * Status of the fulfillment unit
     * See FulfillmentStatusConst
     * @type {string}
     * @memberof CollectionOfDigitalPackageItem
     */
    status?: string | null;
    /**
     * List of items in the fulfillment unit
     * @type {Array<DigitalPackageItem>}
     * @memberof CollectionOfDigitalPackageItem
     */
    items?: Array<DigitalPackageItem> | null;
    /**
     * Date of the pickup
     * @type {string}
     * @memberof CollectionOfDigitalPackageItem
     */
    fulfillmentDate?: string | null;
    /**
     * Location code from which to obtain this item
     * @type {string}
     * @memberof CollectionOfDigitalPackageItem
     */
    fulfillmentLocationCode?: string | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CollectionOfDigitalPackageItem
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * Actions that can be taken on this fulfillment unit
     * @type {Array<string>}
     * @memberof CollectionOfDigitalPackageItem
     */
    availableActions?: Array<string> | null;
    /**
     * Change messages related to the fulfillment unit.
     * @type {Array<CommerceRuntimeChangeMessage>}
     * @memberof CollectionOfDigitalPackageItem
     */
    changeMessages?: Array<CommerceRuntimeChangeMessage> | null;
}
/**
 * 
 * @export
 * @interface CollectionOfPackageItem
 */
export interface CollectionOfPackageItem {
    /**
     * ID of the fulfillment unit.
     * @type {string}
     * @memberof CollectionOfPackageItem
     */
    id?: string | null;
    /**
     * A human-readable identifier for this fulfillment unit.  If not set on create, will be autogenerated as a string of the form
     *     {fulfillmentUnitType} #{next available int}
     * @type {string}
     * @memberof CollectionOfPackageItem
     */
    code?: string | null;
    /**
     * Status of the fulfillment unit
     * See FulfillmentStatusConst
     * @type {string}
     * @memberof CollectionOfPackageItem
     */
    status?: string | null;
    /**
     * List of items in the fulfillment unit
     * @type {Array<PackageItem>}
     * @memberof CollectionOfPackageItem
     */
    items?: Array<PackageItem> | null;
    /**
     * Date of the pickup
     * @type {string}
     * @memberof CollectionOfPackageItem
     */
    fulfillmentDate?: string | null;
    /**
     * Location code from which to obtain this item
     * @type {string}
     * @memberof CollectionOfPackageItem
     */
    fulfillmentLocationCode?: string | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CollectionOfPackageItem
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * Actions that can be taken on this fulfillment unit
     * @type {Array<string>}
     * @memberof CollectionOfPackageItem
     */
    availableActions?: Array<string> | null;
    /**
     * Change messages related to the fulfillment unit.
     * @type {Array<CommerceRuntimeChangeMessage>}
     * @memberof CollectionOfPackageItem
     */
    changeMessages?: Array<CommerceRuntimeChangeMessage> | null;
}
/**
 * 
 * @export
 * @interface CollectionOfPickupItem
 */
export interface CollectionOfPickupItem {
    /**
     * ID of the fulfillment unit.
     * @type {string}
     * @memberof CollectionOfPickupItem
     */
    id?: string | null;
    /**
     * A human-readable identifier for this fulfillment unit.  If not set on create, will be autogenerated as a string of the form
     *     {fulfillmentUnitType} #{next available int}
     * @type {string}
     * @memberof CollectionOfPickupItem
     */
    code?: string | null;
    /**
     * Status of the fulfillment unit
     * See FulfillmentStatusConst
     * @type {string}
     * @memberof CollectionOfPickupItem
     */
    status?: string | null;
    /**
     * List of items in the fulfillment unit
     * @type {Array<CommerceRuntimePickupItem>}
     * @memberof CollectionOfPickupItem
     */
    items?: Array<CommerceRuntimePickupItem> | null;
    /**
     * Date of the pickup
     * @type {string}
     * @memberof CollectionOfPickupItem
     */
    fulfillmentDate?: string | null;
    /**
     * Location code from which to obtain this item
     * @type {string}
     * @memberof CollectionOfPickupItem
     */
    fulfillmentLocationCode?: string | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CollectionOfPickupItem
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * Actions that can be taken on this fulfillment unit
     * @type {Array<string>}
     * @memberof CollectionOfPickupItem
     */
    availableActions?: Array<string> | null;
    /**
     * Change messages related to the fulfillment unit.
     * @type {Array<CommerceRuntimeChangeMessage>}
     * @memberof CollectionOfPickupItem
     */
    changeMessages?: Array<CommerceRuntimeChangeMessage> | null;
}
/**
 * Base class for cart and order
 * @export
 * @interface CommerceAggregate
 */
export interface CommerceAggregate {
    /**
     * Unique identifier of the shopper who created the cart.
     * @type {string}
     * @memberof CommerceAggregate
     */
    userId?: string | null;
    /**
     * Unique identifier of the CommerceAggregate object (e.g. order, cart, wishlist, etc.).
     * @type {string}
     * @memberof CommerceAggregate
     */
    id?: string | null;
    /**
     * Unique identifier of the Tenant.
     * @type {number}
     * @memberof CommerceAggregate
     */
    tenantId?: number | null;
    /**
     * Unique identifier of the Site.
     * @type {number}
     * @memberof CommerceAggregate
     */
    siteId?: number | null;
    /**
     * Unique identifier of the channel for this item.
     * @type {string}
     * @memberof CommerceAggregate
     */
    channelCode?: string | null;
    /**
     * ISO Currency Code. Currently, only USD is supported.
     * @type {string}
     * @memberof CommerceAggregate
     */
    currencyCode?: string | null;
    /**
     * Identifies the Visit ID that was current when the order was placed or when the cart was last updated.
     * @type {string}
     * @memberof CommerceAggregate
     */
    visitId?: string | null;
    /**
     * Identifies the web session used to place the order or last update the cart.
     * @type {string}
     * @memberof CommerceAggregate
     */
    webSessionId?: string | null;
    /**
     * Determines the interaction type that a customer will use to create this object.
     * Valid values are: Website, Store, Call, Unknown
     * @type {string}
     * @memberof CommerceAggregate
     */
    customerInteractionType?: string | null;
    /**
     * 
     * @type {FulfillmentInfo}
     * @memberof CommerceAggregate
     */
    fulfillmentInfo?: FulfillmentInfo;
    /**
     * The discount that has been applied to the cart itself. If multiple discounts exist, this is the discount that the system applies because it offers the best savings for the shopper. This is a negative number.
     * @type {Array<CommerceRuntimeAppliedDiscount>}
     * @memberof CommerceAggregate
     */
    orderDiscounts?: Array<CommerceRuntimeAppliedDiscount> | null;
    /**
     * 
     * @type {Array<SuggestedDiscount>}
     * @memberof CommerceAggregate
     */
    suggestedDiscounts?: Array<SuggestedDiscount> | null;
    /**
     * 
     * @type {Array<SuggestedDiscount>}
     * @memberof CommerceAggregate
     */
    rejectedDiscounts?: Array<SuggestedDiscount> | null;
    /**
     * Custom data for a given vendor set within the commerce process.
     * @type {object}
     * @memberof CommerceAggregate
     */
    data?: object | null;
    /**
     * Storage for any additional/custom tax data.
     * @type {object}
     * @memberof CommerceAggregate
     */
    taxData?: object | null;
    /**
     * Combined price for all cart items, including all selected options but excluding any discounts.
     * @type {number}
     * @memberof CommerceAggregate
     */
    subtotal?: number | null;
    /**
     * Combined price for all cart items, including all selected options as well as any discounts.
     * @type {number}
     * @memberof CommerceAggregate
     */
    discountedSubtotal?: number | null;
    /**
     * Amount of the discounts applied to all items in the cart. This is a negative number.  This also includes the order level discounts.
     * @type {number}
     * @memberof CommerceAggregate
     */
    discountTotal?: number | null;
    /**
     * Subtotal minus the discounted total
     * @type {number}
     * @memberof CommerceAggregate
     */
    discountedTotal?: number | null;
    /**
     * Shipping does not appear on cart.
     * @type {number}
     * @memberof CommerceAggregate
     */
    shippingTotal?: number | null;
    /**
     * Shipping total without discounts applied.
     * @type {number}
     * @memberof CommerceAggregate
     */
    shippingSubTotal?: number | null;
    /**
     * Not implemented. Tax does not appear on cart.
     * @type {number}
     * @memberof CommerceAggregate
     */
    shippingTaxTotal?: number | null;
    /**
     * Total tax on handling
     * @type {number}
     * @memberof CommerceAggregate
     */
    handlingTaxTotal?: number | null;
    /**
     * Not implemented. Tax does not appear on cart.
     * @type {number}
     * @memberof CommerceAggregate
     */
    itemTaxTotal?: number | null;
    /**
     * Tax does not appear on cart.
     * @type {number}
     * @memberof CommerceAggregate
     */
    taxTotal?: number | null;
    /**
     * Not implemented. Total cost of fees for all items in the cart.
     * @type {number}
     * @memberof CommerceAggregate
     */
    feeTotal?: number | null;
    /**
     * Final total amount of the order including all discounts, shipping, and tax.
     * @type {number}
     * @memberof CommerceAggregate
     */
    total?: number | null;
    /**
     * Line Item Subtotals with Order Adjustments
     * @type {number}
     * @memberof CommerceAggregate
     */
    lineItemSubtotalWithOrderAdjustments?: number | null;
    /**
     * Shipping Amount before discount and adjustments
     * @type {number}
     * @memberof CommerceAggregate
     */
    shippingAmountBeforeDiscountsAndAdjustments?: number | null;
    /**
     * Occasionally the commerce runtime may validate that item/product names, descriptions, and prices have not changed. 
     * If changed, it updates LastValidationDate.
     * @type {string}
     * @memberof CommerceAggregate
     */
    lastValidationDate?: string | null;
    /**
     * When the order will no longer be active. That is, the order is considered abandoned. 
     * Orders of anonymous shoppers expire after 14 days of inactivity. 
     * An order never expires for shoppers who are logged into their account. 
     * Date in UTC Date/Time.
     * @type {string}
     * @memberof CommerceAggregate
     */
    expirationDate?: string | null;
    /**
     * List of messages displayed by the system based on the last cart action, for example, when a product price has changed or is out-of-stock. System-supplied and read-only.
     * @type {Array<CommerceRuntimeChangeMessage>}
     * @memberof CommerceAggregate
     */
    changeMessages?: Array<CommerceRuntimeChangeMessage> | null;
    /**
     * Extra properties (key-value pairs) that extend the primary object. Think of this as a property bag of string keys and string values.
     * @type {Array<ExtendedProperty>}
     * @memberof CommerceAggregate
     */
    extendedProperties?: Array<ExtendedProperty> | null;
    /**
     * List of Mozu.CommerceRuntime.Contracts.Commerce.ThresholdMessage objects that are valid for the current value of the cart/order.
     * @type {Array<CommerceRuntimeThresholdMessage>}
     * @memberof CommerceAggregate
     */
    discountThresholdMessages?: Array<CommerceRuntimeThresholdMessage> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CommerceAggregate
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * Base class for cart and order items
 * @export
 * @interface CommerceItem
 */
export interface CommerceItem {
    /**
     * Locale code for language that appears in text and descriptions on the site, for example, en_US. 
     * This is not the currency code. Currently only en_US is supported.
     * @type {string}
     * @memberof CommerceItem
     */
    localeCode?: string | null;
    /**
     * The location where the product is being purchased.. default is null. Products can have different prices
     * by purchaseLocation via custom priceListResolution...
     * @type {string}
     * @memberof CommerceItem
     */
    purchaseLocation?: string | null;
    /**
     * The line id assigned to the order item. Visible only in the Admin, this is set from the Admin or
     * in CommerceRuntime when a cart is converted to an order.
     * @type {number}
     * @memberof CommerceItem
     */
    lineId?: number | null;
    /**
     * 
     * @type {CommerceRuntimeProduct}
     * @memberof CommerceItem
     */
    product?: CommerceRuntimeProduct;
    /**
     * Number of products ordered.
     * @type {number}
     * @memberof CommerceItem
     */
    quantity?: number;
    /**
     * If true, the cart item lists a product that can be purchased or fulfilled at regular intervals, for example, monthly billing or a subscription.
     * @type {boolean}
     * @memberof CommerceItem
     */
    isRecurring?: boolean | null;
    /**
     * Not implemented. If true, the cart item is eligible for tax.
     * @type {boolean}
     * @memberof CommerceItem
     */
    isTaxable?: boolean | null;
    /**
     * Line item subtotal (quantity multiplied by price) before discounts.
     * @type {number}
     * @memberof CommerceItem
     */
    subtotal?: number | null;
    /**
     * Line item extended total (quantity multiplied by unit extended price) before discounts.
     * @type {number}
     * @memberof CommerceItem
     */
    extendedTotal?: number | null;
    /**
     * Line item subtotal (quantity multiplied by price) before discounts.
     * @type {number}
     * @memberof CommerceItem
     */
    taxableTotal?: number | null;
    /**
     * How much the shopper saves with the applied discount or sale price. This is a negative number.
     * @type {number}
     * @memberof CommerceItem
     */
    discountTotal?: number | null;
    /**
     * Subtotal minus any discounts.
     * @type {number}
     * @memberof CommerceItem
     */
    discountedTotal?: number | null;
    /**
     * Total price of taxes that apply to products in this item.
     * @type {number}
     * @memberof CommerceItem
     */
    itemTaxTotal?: number | null;
    /**
     * Total price of taxes that apply to the shipping of this item.
     * @type {number}
     * @memberof CommerceItem
     */
    shippingTaxTotal?: number | null;
    /**
     * Total price of shipping that apply to this item.
     * @type {number}
     * @memberof CommerceItem
     */
    shippingTotal?: number | null;
    /**
     * Handling Amount for this item
     * @type {number}
     * @memberof CommerceItem
     */
    handlingAmount?: number | null;
    /**
     * Not implemented. Total cost of fees that apply to this item.
     * @type {number}
     * @memberof CommerceItem
     */
    feeTotal?: number | null;
    /**
     * Total price of this cart item taking into account any discounts.
     * @type {number}
     * @memberof CommerceItem
     */
    total?: number | null;
    /**
     * 
     * @type {CommerceUnitPrice}
     * @memberof CommerceItem
     */
    unitPrice?: CommerceUnitPrice;
    /**
     * 
     * @type {CommerceRuntimeAppliedLineItemProductDiscount}
     * @memberof CommerceItem
     */
    productDiscount?: CommerceRuntimeAppliedLineItemProductDiscount;
    /**
     * A list of discounts applied to the product
     * @type {Array<CommerceRuntimeAppliedLineItemProductDiscount>}
     * @memberof CommerceItem
     */
    productDiscounts?: Array<CommerceRuntimeAppliedLineItemProductDiscount> | null;
    /**
     * A discount applied to the shipping
     * @type {Array<CommerceRuntimeAppliedLineItemShippingDiscount>}
     * @memberof CommerceItem
     */
    shippingDiscounts?: Array<CommerceRuntimeAppliedLineItemShippingDiscount> | null;
    /**
     * Custom data for a given vendor set within the commerce process.
     * @type {object}
     * @memberof CommerceItem
     */
    data?: object | null;
    /**
     * Storage for any additional/custom tax data.
     * @type {object}
     * @memberof CommerceItem
     */
    taxData?: object | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CommerceItem
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * Shipping amount before Discounts and adjustments
     * @type {number}
     * @memberof CommerceItem
     */
    shippingAmountBeforeDiscountsAndAdjustments?: number | null;
    /**
     * Order Level Manual Adjustment applied to this Item
     * @type {number}
     * @memberof CommerceItem
     */
    weightedOrderAdjustment?: number | null;
    /**
     * Order Level Discount applied to this Item
     * @type {number}
     * @memberof CommerceItem
     */
    weightedOrderDiscount?: number | null;
    /**
     * Order Level taxable sub total
     * @type {number}
     * @memberof CommerceItem
     */
    adjustedLineItemSubtotal?: number | null;
    /**
     * Taxable Subtotal including Weighted Order amounts
     * @type {number}
     * @memberof CommerceItem
     */
    totalWithoutWeightedShippingAndHandling?: number | null;
    /**
     * Order Level tax applied to this Item
     * @type {number}
     * @memberof CommerceItem
     */
    weightedOrderTax?: number | null;
    /**
     * Order Level Shipping applied to this Item
     * @type {number}
     * @memberof CommerceItem
     */
    weightedOrderShipping?: number | null;
    /**
     * Order Level Shipping discount applied to this Item
     * @type {number}
     * @memberof CommerceItem
     */
    weightedOrderShippingDiscount?: number | null;
    /**
     * Order Level Shipping Manual Adjustment applied to this Item
     * @type {number}
     * @memberof CommerceItem
     */
    weightedOrderShippingManualAdjustment?: number | null;
    /**
     * Order Level Shipping Tax applied to this Item
     * @type {number}
     * @memberof CommerceItem
     */
    weightedOrderShippingTax?: number | null;
    /**
     * Order Level handling fee applied to this item
     * @type {number}
     * @memberof CommerceItem
     */
    weightedOrderHandlingFee?: number | null;
    /**
     * Order Level handling fee tax applied to this item
     * @type {number}
     * @memberof CommerceItem
     */
    weightedOrderHandlingFeeTax?: number | null;
    /**
     * Order Level handling fee discount applied to this item
     * @type {number}
     * @memberof CommerceItem
     */
    weightedOrderHandlingFeeDiscount?: number | null;
    /**
     * Order Level Duty applied to this Item
     * @type {number}
     * @memberof CommerceItem
     */
    weightedOrderDuty?: number | null;
    /**
     * Line item total with line item, Tax, Weighted Tax with Weighted shipping and handling costs
     * @type {number}
     * @memberof CommerceItem
     */
    totalWithWeightedShippingAndHandling?: number | null;
    /**
     * Order level handling adjusment that applies to this item.
     * @type {number}
     * @memberof CommerceItem
     */
    weightedOrderHandlingAdjustment?: number | null;
    /**
     * Track the discoutid from which the item was auto added
     * @type {number}
     * @memberof CommerceItem
     */
    autoAddDiscountId?: number | null;
    /**
     * Assembly Required for this order item
     * @type {boolean}
     * @memberof CommerceItem
     */
    isAssemblyRequired?: boolean;
    /**
     * List of Child Item Ids for this order item
     * @type {Array<string>}
     * @memberof CommerceItem
     */
    childItemIds?: Array<string> | null;
    /**
     * Indicates Parent Item Id for this order item
     * @type {string}
     * @memberof CommerceItem
     */
    parentItemId?: string | null;
    /**
     * 
     * @type {Array<InventoryTags>}
     * @memberof CommerceItem
     */
    inventoryTags?: Array<InventoryTags> | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceItem
     */
    lineItemAdjustment?: number | null;
    /**
     * Indicate Duty Amount for this item.
     * @type {number}
     * @memberof CommerceItem
     */
    dutyAmount?: number | null;
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
 * Discount applied to the order, which is a negative number to be subtracted from the original price to get the final price. 
 * If multiple discounts for the order exist, this is the value most advantageous to the shopper.
 * @export
 * @interface CommerceRuntimeAppliedDiscount
 */
export interface CommerceRuntimeAppliedDiscount {
    /**
     * Value of the discount applied. This is a negative number to be subtracted from the original price to get the final price.
     * @type {number}
     * @memberof CommerceRuntimeAppliedDiscount
     */
    impact?: number | null;
    /**
     * 
     * @type {CommerceRuntimeDiscount}
     * @memberof CommerceRuntimeAppliedDiscount
     */
    discount?: CommerceRuntimeDiscount;
    /**
     * Code of the coupon associated with the discount if a coupon code is required to get the discount.
     * @type {string}
     * @memberof CommerceRuntimeAppliedDiscount
     */
    couponCode?: string | null;
    /**
     * Determines whether or not this discount is set up to be ignored by the pricing runtime.
     * @type {boolean}
     * @memberof CommerceRuntimeAppliedDiscount
     */
    excluded?: boolean | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeAppliedLineItemProductDiscount
 */
export interface CommerceRuntimeAppliedLineItemProductDiscount {
    /**
     * Determines if the discount applies to the sale price of the order
     * @type {boolean}
     * @memberof CommerceRuntimeAppliedLineItemProductDiscount
     */
    appliesToSalePrice?: boolean | null;
    /**
     * The number of the line item that can be used for this particular discount.
     * @type {number}
     * @memberof CommerceRuntimeAppliedLineItemProductDiscount
     */
    discountQuantity?: number;
    /**
     * Value of the discount applied. This is a negative number to be subtracted from the original price to get the final price.
     * @type {number}
     * @memberof CommerceRuntimeAppliedLineItemProductDiscount
     */
    impact?: number | null;
    /**
     * 
     * @type {CommerceRuntimeDiscount}
     * @memberof CommerceRuntimeAppliedLineItemProductDiscount
     */
    discount?: CommerceRuntimeDiscount;
    /**
     * Code of the coupon associated with the discount if a coupon code is required to get the discount.
     * @type {string}
     * @memberof CommerceRuntimeAppliedLineItemProductDiscount
     */
    couponCode?: string | null;
    /**
     * Determines whether or not this discount is set up to be ignored by the pricing runtime.
     * @type {boolean}
     * @memberof CommerceRuntimeAppliedLineItemProductDiscount
     */
    excluded?: boolean | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeAppliedLineItemShippingDiscount
 */
export interface CommerceRuntimeAppliedLineItemShippingDiscount {
    /**
     * Unique identifier of the shipping method discount.
     * @type {string}
     * @memberof CommerceRuntimeAppliedLineItemShippingDiscount
     */
    methodCode?: string | null;
    /**
     * 
     * @type {CommerceRuntimeAppliedDiscount}
     * @memberof CommerceRuntimeAppliedLineItemShippingDiscount
     */
    discount?: CommerceRuntimeAppliedDiscount;
    /**
     * The number of the line item that can be used for this particular discount.
     * @type {number}
     * @memberof CommerceRuntimeAppliedLineItemShippingDiscount
     */
    discountQuantity?: number;
    /**
     * The impact of this discount pur discount quantity.
     * @type {number}
     * @memberof CommerceRuntimeAppliedLineItemShippingDiscount
     */
    impactPerUnit?: number;
}
/**
 * Describes products that are bundled inside of a main bundle product.
 * @export
 * @interface CommerceRuntimeBundledProduct
 */
export interface CommerceRuntimeBundledProduct {
    /**
     * Quantity of the product included in the bundle.
     * @type {number}
     * @memberof CommerceRuntimeBundledProduct
     */
    quantity?: number;
    /**
     * Fully Qualified Name of the selected option's attribute
     * @type {string}
     * @memberof CommerceRuntimeBundledProduct
     */
    optionAttributeFQN?: string | null;
    /**
     * Value of the selected option
     * @type {any}
     * @memberof CommerceRuntimeBundledProduct
     */
    optionValue?: any | null;
    /**
     * Credit value.  Only populated if the bundled product is a gift card or digital credit
     * @type {number}
     * @memberof CommerceRuntimeBundledProduct
     */
    creditValue?: number | null;
    /**
     * Only populated for extras
     * @type {number}
     * @memberof CommerceRuntimeBundledProduct
     */
    deltaPrice?: number | null;
    /**
     * ImageUrl of product
     * @type {string}
     * @memberof CommerceRuntimeBundledProduct
     */
    imageUrl?: string | null;
    /**
     * Merchant-created code that uniquely identifies the product.
     * @type {string}
     * @memberof CommerceRuntimeBundledProduct
     */
    productCode?: string | null;
    /**
     * Name of the product, this is the current value of the product's name in the language specified by LocaleCode.
     * @type {string}
     * @memberof CommerceRuntimeBundledProduct
     */
    name?: string | null;
    /**
     * Short description of the product in the language specified by LocaleCode.
     * @type {string}
     * @memberof CommerceRuntimeBundledProduct
     */
    description?: string | null;
    /**
     * Goods Type
     * @type {string}
     * @memberof CommerceRuntimeBundledProduct
     */
    goodsType?: string | null;
    /**
     * Indicates that this product ships by itself.
     * @type {boolean}
     * @memberof CommerceRuntimeBundledProduct
     */
    isPackagedStandAlone?: boolean;
    /**
     * 
     * @type {ProductStock}
     * @memberof CommerceRuntimeBundledProduct
     */
    stock?: ProductStock;
    /**
     * Reservation ID associated with this product in the bundle.
     * @type {number}
     * @memberof CommerceRuntimeBundledProduct
     */
    productReservationId?: number | null;
    /**
     * Allocation ID associated with this product on this order.
     * @type {number}
     * @memberof CommerceRuntimeBundledProduct
     */
    allocationId?: number | null;
    /**
     * Allocation ID associated with this product on this order.
     * @type {string}
     * @memberof CommerceRuntimeBundledProduct
     */
    allocationExpiration?: string | null;
    /**
     * 
     * @type {CommerceRuntimePackageMeasurements}
     * @memberof CommerceRuntimeBundledProduct
     */
    measurements?: CommerceRuntimePackageMeasurements;
    /**
     * Fulfillment status of the product.
     * @type {string}
     * @memberof CommerceRuntimeBundledProduct
     */
    fulfillmentStatus?: string | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeCanceledItem
 */
export interface CommerceRuntimeCanceledItem {
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeCanceledItem
     */
    originalQuantity?: number | null;
    /**
     * 
     * @type {CommerceRuntimeCanceledReason}
     * @memberof CommerceRuntimeCanceledItem
     */
    canceledReason?: CommerceRuntimeCanceledReason;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CommerceRuntimeCanceledItem
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeCanceledItem
     */
    lineId?: number;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeCanceledItem
     */
    originalOrderItemId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeCanceledItem
     */
    parentId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeCanceledItem
     */
    productCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeCanceledItem
     */
    variationProductCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeCanceledItem
     */
    optionAttributeFQN?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeCanceledItem
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeCanceledItem
     */
    fulfillmentLocationCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeCanceledItem
     */
    imageUrl?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeCanceledItem
     */
    isTaxable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeCanceledItem
     */
    quantity?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeCanceledItem
     */
    unitPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeCanceledItem
     */
    actualPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeCanceledItem
     */
    overridePrice?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeCanceledItem
     */
    itemDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeCanceledItem
     */
    lineItemCost?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeCanceledItem
     */
    itemTax?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeCanceledItem
     */
    shipping?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeCanceledItem
     */
    shippingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeCanceledItem
     */
    shippingTax?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeCanceledItem
     */
    handling?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeCanceledItem
     */
    handlingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeCanceledItem
     */
    handlingTax?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeCanceledItem
     */
    duty?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeCanceledItem
     */
    isPackagedStandAlone?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeCanceledItem
     */
    readyForPickupQuantity?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeCanceledItem
     */
    backorderReleaseDate?: string | null;
    /**
     * 
     * @type {CommerceRuntimePackageMeasurements}
     * @memberof CommerceRuntimeCanceledItem
     */
    measurements?: CommerceRuntimePackageMeasurements;
    /**
     * 
     * @type {Array<CommerceRuntimeProductOption>}
     * @memberof CommerceRuntimeCanceledItem
     */
    options?: Array<CommerceRuntimeProductOption> | null;
    /**
     * 
     * @type {object}
     * @memberof CommerceRuntimeCanceledItem
     */
    data?: object | null;
    /**
     * 
     * @type {object}
     * @memberof CommerceRuntimeCanceledItem
     */
    taxData?: object | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeCanceledItem
     */
    weightedShipmentAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeCanceledItem
     */
    weightedLineItemTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeCanceledItem
     */
    weightedShippingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeCanceledItem
     */
    weightedShippingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeCanceledItem
     */
    weightedHandlingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeCanceledItem
     */
    weightedHandlingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeCanceledItem
     */
    weightedDutyAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeCanceledItem
     */
    taxableShipping?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeCanceledItem
     */
    taxableLineItemCost?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeCanceledItem
     */
    taxableHandling?: number;
    /**
     * 
     * @type {Array<CommerceRuntimeFulfillmentField>}
     * @memberof CommerceRuntimeCanceledItem
     */
    fulfillmentFields?: Array<CommerceRuntimeFulfillmentField> | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeCanceledItem
     */
    isAssemblyRequired?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeCanceledItem
     */
    parentItemId?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof CommerceRuntimeCanceledItem
     */
    childItemIds?: Array<string> | null;
    /**
     * 
     * @type {Array<CommerceRuntimeGiftCard>}
     * @memberof CommerceRuntimeCanceledItem
     */
    giftCards?: Array<CommerceRuntimeGiftCard> | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeCanceledItem
     */
    locatorName?: string | null;
    /**
     * 
     * @type {Array<InventoryTags>}
     * @memberof CommerceRuntimeCanceledItem
     */
    inventoryTags?: Array<InventoryTags> | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeCanceledItem
     */
    lineItemAdjustment?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeCanceledItem
     */
    isReservedInventory?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeCanceledItem
     */
    cartItemId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeCanceledItem
     */
    sku?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeCanceledItem
     */
    partNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeCanceledItem
     */
    upc?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeCanceledItem
     */
    isSubstitutable?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeCanceledItem
     */
    originalLineId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeCanceledItem
     */
    substituteQuantity?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeCanceledItem
     */
    purchaseLocation?: string | null;
    /**
     * Indicate item is gift or not
     * @type {boolean}
     * @memberof CommerceRuntimeCanceledItem
     */
    isGift?: boolean | null;
    /**
     * Gift message for item
     * @type {string}
     * @memberof CommerceRuntimeCanceledItem
     */
    giftMessage?: string | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeCanceledReason
 */
export interface CommerceRuntimeCanceledReason {
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeCanceledReason
     */
    reasonCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeCanceledReason
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeCanceledReason
     */
    moreInfo?: string | null;
}
/**
 * Categories to which the product belongs. Discounts can apply to categories where any product in the category is discounted.
 * @export
 * @interface CommerceRuntimeCategory
 */
export interface CommerceRuntimeCategory {
    /**
     * Unique identifier of the category. System-supplied and read-only.
     * @type {number}
     * @memberof CommerceRuntimeCategory
     */
    id?: number | null;
    /**
     * 
     * @type {CommerceRuntimeCategory}
     * @memberof CommerceRuntimeCategory
     */
    parent?: CommerceRuntimeCategory;
}
/**
 * A message displayed by the system based on the last  action, for example, when a product price has changed. System-supplied and read-only.
 * @export
 * @interface CommerceRuntimeChangeMessage
 */
export interface CommerceRuntimeChangeMessage {
    /**
     * Unique identifier of the  message. System-supplied. Read-only.
     * @type {string}
     * @memberof CommerceRuntimeChangeMessage
     */
    id?: string | null;
    /**
     * Correlation Id
     * @type {string}
     * @memberof CommerceRuntimeChangeMessage
     */
    correlationId?: string | null;
    /**
     * User Id that identifies the user that performed the related change
     * @type {string}
     * @memberof CommerceRuntimeChangeMessage
     */
    userId?: string | null;
    /**
     * User First Name
     * @type {string}
     * @memberof CommerceRuntimeChangeMessage
     */
    userFirstName?: string | null;
    /**
     * User Last Name
     * @type {string}
     * @memberof CommerceRuntimeChangeMessage
     */
    userLastName?: string | null;
    /**
     * User Type (e.g. Shopper, Admin, etc.)
     * @type {string}
     * @memberof CommerceRuntimeChangeMessage
     */
    userScopeType?: string | null;
    /**
     * App Id that identifies the user that performed the related change
     * @type {string}
     * @memberof CommerceRuntimeChangeMessage
     */
    appId?: string | null;
    /**
     * App Key
     * @type {string}
     * @memberof CommerceRuntimeChangeMessage
     */
    appKey?: string | null;
    /**
     * App Name
     * @type {string}
     * @memberof CommerceRuntimeChangeMessage
     */
    appName?: string | null;
    /**
     * Subject of the message, for example, "Product." System-supplied. Read-only.
     * @type {string}
     * @memberof CommerceRuntimeChangeMessage
     */
    subjectType?: string | null;
    /**
     * Indicates if the message is related to a success or failure.
     * @type {boolean}
     * @memberof CommerceRuntimeChangeMessage
     */
    success?: boolean | null;
    /**
     * Unique identifier to what the message pertains, which can be a cart item, cart or another generic entity. System-supplied. Read-only.
     * @type {string}
     * @memberof CommerceRuntimeChangeMessage
     */
    identifier?: string | null;
    /**
     * Text on the subject line of the message, for example, the product name. System-supplied. Read-only.
     * @type {string}
     * @memberof CommerceRuntimeChangeMessage
     */
    subject?: string | null;
    /**
     * Action applicable to the message. This can be "Increased," when the product price has increased, "Decreased," when the 
     * product price has decreased, and "Invalidated," when the product is no longer available. System-supplied. Read-only.
     * @type {string}
     * @memberof CommerceRuntimeChangeMessage
     */
    verb?: string | null;
    /**
     * Human readable message. System-supplied. Read-only.
     * @type {string}
     * @memberof CommerceRuntimeChangeMessage
     */
    message?: string | null;
    /**
     * Data. This property will be a JSON array that will contain 0-N items, when there is 1 item it will still be an array containing only one item. System-supplied. Read-only.
     * @type {any}
     * @memberof CommerceRuntimeChangeMessage
     */
    metadata?: any | null;
    /**
     * Original price of the item. System-supplied. Read-only.
     * @type {string}
     * @memberof CommerceRuntimeChangeMessage
     * @deprecated
     */
    oldValue?: string | null;
    /**
     * Current price of the item. System-supplied. Read-only.
     * @type {string}
     * @memberof CommerceRuntimeChangeMessage
     * @deprecated
     */
    newValue?: string | null;
    /**
     * Monetary amount that pertains to the change if applicable
     * @type {number}
     * @memberof CommerceRuntimeChangeMessage
     * @deprecated
     */
    amount?: number | null;
    /**
     * When the message was created. System-supplied. Read-only.
     * @type {string}
     * @memberof CommerceRuntimeChangeMessage
     */
    createDate?: string | null;
    /**
     * Additional Data. This property will be a Dictionary of objects.
     * @type {{ [key: string]: any; }}
     * @memberof CommerceRuntimeChangeMessage
     */
    attributes?: { [key: string]: any; } | null;
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
 * @interface CommerceRuntimeCredit
 */
export interface CommerceRuntimeCredit {
    /**
     * Unique identifier of this order transaction.
     * @type {string}
     * @memberof CommerceRuntimeCredit
     */
    id?: string | null;
    /**
     * The paymentid of the Parent Payment associated with this Credit (if applicable).
     * @type {string}
     * @memberof CommerceRuntimeCredit
     */
    parentPaymentId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeCredit
     */
    parentPaymentInteractionId?: string | null;
    /**
     * Amount credited.
     * @type {number}
     * @memberof CommerceRuntimeCredit
     */
    amount?: number;
    /**
     * 
     * @type {GatewayGiftCard}
     * @memberof CommerceRuntimeCredit
     */
    giftCard?: GatewayGiftCard;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CommerceRuntimeCredit
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeCustomer
 */
export interface CommerceRuntimeCustomer {
    /**
     * 
     * @type {CommerceRuntimeContact}
     * @memberof CommerceRuntimeCustomer
     */
    customerContact?: CommerceRuntimeContact;
    /**
     * Custom data
     * @type {any}
     * @memberof CommerceRuntimeCustomer
     */
    data?: any | null;
    /**
     * Destination Commercial Flag
     * @type {boolean}
     * @memberof CommerceRuntimeCustomer
     */
    isDestinationCommercial?: boolean | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeDestination
 */
export interface CommerceRuntimeDestination {
    /**
     * An identifier for this entry.
     * @type {string}
     * @memberof CommerceRuntimeDestination
     */
    id?: string | null;
    /**
     * 
     * @type {CommerceRuntimeContact}
     * @memberof CommerceRuntimeDestination
     */
    destinationContact?: CommerceRuntimeContact;
    /**
     * Indicates that the destination is commercial
     * @type {boolean}
     * @memberof CommerceRuntimeDestination
     */
    isDestinationCommercial?: boolean | null;
    /**
     * Custom data
     * @type {object}
     * @memberof CommerceRuntimeDestination
     */
    data?: object | null;
}
/**
 * Discounts that apply to the order, if any. For example, when the 
 * subtotal of the order exceeds a certain amount, or for free shipping.
 * @export
 * @interface CommerceRuntimeDiscount
 */
export interface CommerceRuntimeDiscount {
    /**
     * Unique identifier of the discount.
     * @type {number}
     * @memberof CommerceRuntimeDiscount
     */
    id?: number;
    /**
     * Name of the discount in the language specified by LocaleCode.
     * @type {string}
     * @memberof CommerceRuntimeDiscount
     */
    name?: string | null;
    /**
     * List of discounts for each order item.
     * @type {Array<string>}
     * @memberof CommerceRuntimeDiscount
     */
    itemIds?: Array<string> | null;
    /**
     * Date when the discount expires. Default is null (no expiration date).
     * @type {string}
     * @memberof CommerceRuntimeDiscount
     */
    expirationDate?: string | null;
    /**
     * Indicates that the discount targets more than a product.  Used
     * primarily for BoGa discounts with multiple targets.
     * @type {boolean}
     * @memberof CommerceRuntimeDiscount
     */
    hasMultipleTargetProducts?: boolean;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeFulfillmentField
 */
export interface CommerceRuntimeFulfillmentField {
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeFulfillmentField
     */
    name?: string | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeFulfillmentField
     */
    userEnteredValue?: any | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeFulfillmentField
     */
    required?: boolean;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeFutureInventory
 */
export interface CommerceRuntimeFutureInventory {
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeFutureInventory
     */
    futureInventoryID?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeFutureInventory
     */
    onhand?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeFutureInventory
     */
    available?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeFutureInventory
     */
    allocated?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeFutureInventory
     */
    pending?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeFutureInventory
     */
    deliveryDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeFutureInventory
     */
    createDate?: string | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeGiftCard
 */
export interface CommerceRuntimeGiftCard {
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeGiftCard
     */
    activationDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeGiftCard
     */
    cardNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeGiftCard
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeGiftCard
     */
    creditType?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeGiftCard
     */
    creditValue?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeGiftCard
     */
    currencyCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeGiftCard
     */
    currentBalance?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeGiftCard
     */
    customerId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeGiftCard
     */
    expirationDate?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeGiftCard
     */
    initialBalance?: number | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeLink
 */
export interface CommerceRuntimeLink {
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeLink
     */
    deprecation?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeLink
     */
    href?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeLink
     */
    hreflang?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeLink
     */
    media?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeLink
     */
    rel?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeLink
     */
    templated?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeLink
     */
    title?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeLink
     */
    type?: string | null;
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
 * @interface CommerceRuntimeOrderAttribute
 */
export interface CommerceRuntimeOrderAttribute {
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CommerceRuntimeOrderAttribute
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeOrderAttribute
     */
    fullyQualifiedName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeOrderAttribute
     */
    attributeDefinitionId?: number | null;
    /**
     * 
     * @type {Array<any>}
     * @memberof CommerceRuntimeOrderAttribute
     */
    values?: Array<any> | null;
}
/**
 * A single line item of an order.
 * @export
 * @interface CommerceRuntimeOrderItem
 */
export interface CommerceRuntimeOrderItem {
    /**
     * Unique identifier of the order line item. System-supplied and read-only.
     * @type {string}
     * @memberof CommerceRuntimeOrderItem
     */
    id?: string | null;
    /**
     * The destination associated with this item when used with a multi-ship checkout.
     * @type {string}
     * @memberof CommerceRuntimeOrderItem
     */
    destinationId?: string | null;
    /**
     * Unique identifier of the cart item that is associated with this line item. 
     * (This is the original Cart Item ID expressed as a GUID.)
     * @type {string}
     * @memberof CommerceRuntimeOrderItem
     */
    originalCartItemId?: string | null;
    /**
     * Location code from which to obtain this item
     * @type {string}
     * @memberof CommerceRuntimeOrderItem
     */
    fulfillmentLocationCode?: string | null;
    /**
     * Fulfillment method used to fulfill this item
     * @type {string}
     * @memberof CommerceRuntimeOrderItem
     */
    fulfillmentMethod?: string | null;
    /**
     * Duty or Tariff for this item
     * @type {number}
     * @memberof CommerceRuntimeOrderItem
     */
    dutyAmount?: number | null;
    /**
     * Expected Delivery Date of shipment
     * @type {string}
     * @memberof CommerceRuntimeOrderItem
     */
    expectedDeliveryDate?: string | null;
    /**
     * 
     * @type {SubscriptionInfo}
     * @memberof CommerceRuntimeOrderItem
     */
    subscription?: SubscriptionInfo;
    /**
     * Flag to indicate reserve inventory in cart
     * @type {boolean}
     * @memberof CommerceRuntimeOrderItem
     */
    isReservationEnabled?: boolean;
    /**
     * 
     * @type {GiftInfo}
     * @memberof CommerceRuntimeOrderItem
     */
    giftInfo?: GiftInfo;
    /**
     * Locale code for language that appears in text and descriptions on the site, for example, en_US. 
     * This is not the currency code. Currently only en_US is supported.
     * @type {string}
     * @memberof CommerceRuntimeOrderItem
     */
    localeCode?: string | null;
    /**
     * The location where the product is being purchased.. default is null. Products can have different prices
     * by purchaseLocation via custom priceListResolution...
     * @type {string}
     * @memberof CommerceRuntimeOrderItem
     */
    purchaseLocation?: string | null;
    /**
     * The line id assigned to the order item. Visible only in the Admin, this is set from the Admin or
     * in CommerceRuntime when a cart is converted to an order.
     * @type {number}
     * @memberof CommerceRuntimeOrderItem
     */
    lineId?: number | null;
    /**
     * 
     * @type {CommerceRuntimeProduct}
     * @memberof CommerceRuntimeOrderItem
     */
    product?: CommerceRuntimeProduct;
    /**
     * Number of products ordered.
     * @type {number}
     * @memberof CommerceRuntimeOrderItem
     */
    quantity?: number;
    /**
     * If true, the cart item lists a product that can be purchased or fulfilled at regular intervals, for example, monthly billing or a subscription.
     * @type {boolean}
     * @memberof CommerceRuntimeOrderItem
     */
    isRecurring?: boolean | null;
    /**
     * Not implemented. If true, the cart item is eligible for tax.
     * @type {boolean}
     * @memberof CommerceRuntimeOrderItem
     */
    isTaxable?: boolean | null;
    /**
     * Line item subtotal (quantity multiplied by price) before discounts.
     * @type {number}
     * @memberof CommerceRuntimeOrderItem
     */
    subtotal?: number | null;
    /**
     * Line item extended total (quantity multiplied by unit extended price) before discounts.
     * @type {number}
     * @memberof CommerceRuntimeOrderItem
     */
    extendedTotal?: number | null;
    /**
     * Line item subtotal (quantity multiplied by price) before discounts.
     * @type {number}
     * @memberof CommerceRuntimeOrderItem
     */
    taxableTotal?: number | null;
    /**
     * How much the shopper saves with the applied discount or sale price. This is a negative number.
     * @type {number}
     * @memberof CommerceRuntimeOrderItem
     */
    discountTotal?: number | null;
    /**
     * Subtotal minus any discounts.
     * @type {number}
     * @memberof CommerceRuntimeOrderItem
     */
    discountedTotal?: number | null;
    /**
     * Total price of taxes that apply to products in this item.
     * @type {number}
     * @memberof CommerceRuntimeOrderItem
     */
    itemTaxTotal?: number | null;
    /**
     * Total price of taxes that apply to the shipping of this item.
     * @type {number}
     * @memberof CommerceRuntimeOrderItem
     */
    shippingTaxTotal?: number | null;
    /**
     * Total price of shipping that apply to this item.
     * @type {number}
     * @memberof CommerceRuntimeOrderItem
     */
    shippingTotal?: number | null;
    /**
     * Handling Amount for this item
     * @type {number}
     * @memberof CommerceRuntimeOrderItem
     */
    handlingAmount?: number | null;
    /**
     * Not implemented. Total cost of fees that apply to this item.
     * @type {number}
     * @memberof CommerceRuntimeOrderItem
     */
    feeTotal?: number | null;
    /**
     * Total price of this cart item taking into account any discounts.
     * @type {number}
     * @memberof CommerceRuntimeOrderItem
     */
    total?: number | null;
    /**
     * 
     * @type {CommerceUnitPrice}
     * @memberof CommerceRuntimeOrderItem
     */
    unitPrice?: CommerceUnitPrice;
    /**
     * 
     * @type {CommerceRuntimeAppliedLineItemProductDiscount}
     * @memberof CommerceRuntimeOrderItem
     */
    productDiscount?: CommerceRuntimeAppliedLineItemProductDiscount;
    /**
     * A list of discounts applied to the product
     * @type {Array<CommerceRuntimeAppliedLineItemProductDiscount>}
     * @memberof CommerceRuntimeOrderItem
     */
    productDiscounts?: Array<CommerceRuntimeAppliedLineItemProductDiscount> | null;
    /**
     * A discount applied to the shipping
     * @type {Array<CommerceRuntimeAppliedLineItemShippingDiscount>}
     * @memberof CommerceRuntimeOrderItem
     */
    shippingDiscounts?: Array<CommerceRuntimeAppliedLineItemShippingDiscount> | null;
    /**
     * Custom data for a given vendor set within the commerce process.
     * @type {object}
     * @memberof CommerceRuntimeOrderItem
     */
    data?: object | null;
    /**
     * Storage for any additional/custom tax data.
     * @type {object}
     * @memberof CommerceRuntimeOrderItem
     */
    taxData?: object | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CommerceRuntimeOrderItem
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * Shipping amount before Discounts and adjustments
     * @type {number}
     * @memberof CommerceRuntimeOrderItem
     */
    shippingAmountBeforeDiscountsAndAdjustments?: number | null;
    /**
     * Order Level Manual Adjustment applied to this Item
     * @type {number}
     * @memberof CommerceRuntimeOrderItem
     */
    weightedOrderAdjustment?: number | null;
    /**
     * Order Level Discount applied to this Item
     * @type {number}
     * @memberof CommerceRuntimeOrderItem
     */
    weightedOrderDiscount?: number | null;
    /**
     * Order Level taxable sub total
     * @type {number}
     * @memberof CommerceRuntimeOrderItem
     */
    adjustedLineItemSubtotal?: number | null;
    /**
     * Taxable Subtotal including Weighted Order amounts
     * @type {number}
     * @memberof CommerceRuntimeOrderItem
     */
    totalWithoutWeightedShippingAndHandling?: number | null;
    /**
     * Order Level tax applied to this Item
     * @type {number}
     * @memberof CommerceRuntimeOrderItem
     */
    weightedOrderTax?: number | null;
    /**
     * Order Level Shipping applied to this Item
     * @type {number}
     * @memberof CommerceRuntimeOrderItem
     */
    weightedOrderShipping?: number | null;
    /**
     * Order Level Shipping discount applied to this Item
     * @type {number}
     * @memberof CommerceRuntimeOrderItem
     */
    weightedOrderShippingDiscount?: number | null;
    /**
     * Order Level Shipping Manual Adjustment applied to this Item
     * @type {number}
     * @memberof CommerceRuntimeOrderItem
     */
    weightedOrderShippingManualAdjustment?: number | null;
    /**
     * Order Level Shipping Tax applied to this Item
     * @type {number}
     * @memberof CommerceRuntimeOrderItem
     */
    weightedOrderShippingTax?: number | null;
    /**
     * Order Level handling fee applied to this item
     * @type {number}
     * @memberof CommerceRuntimeOrderItem
     */
    weightedOrderHandlingFee?: number | null;
    /**
     * Order Level handling fee tax applied to this item
     * @type {number}
     * @memberof CommerceRuntimeOrderItem
     */
    weightedOrderHandlingFeeTax?: number | null;
    /**
     * Order Level handling fee discount applied to this item
     * @type {number}
     * @memberof CommerceRuntimeOrderItem
     */
    weightedOrderHandlingFeeDiscount?: number | null;
    /**
     * Order Level Duty applied to this Item
     * @type {number}
     * @memberof CommerceRuntimeOrderItem
     */
    weightedOrderDuty?: number | null;
    /**
     * Line item total with line item, Tax, Weighted Tax with Weighted shipping and handling costs
     * @type {number}
     * @memberof CommerceRuntimeOrderItem
     */
    totalWithWeightedShippingAndHandling?: number | null;
    /**
     * Order level handling adjusment that applies to this item.
     * @type {number}
     * @memberof CommerceRuntimeOrderItem
     */
    weightedOrderHandlingAdjustment?: number | null;
    /**
     * Track the discoutid from which the item was auto added
     * @type {number}
     * @memberof CommerceRuntimeOrderItem
     */
    autoAddDiscountId?: number | null;
    /**
     * Assembly Required for this order item
     * @type {boolean}
     * @memberof CommerceRuntimeOrderItem
     */
    isAssemblyRequired?: boolean;
    /**
     * List of Child Item Ids for this order item
     * @type {Array<string>}
     * @memberof CommerceRuntimeOrderItem
     */
    childItemIds?: Array<string> | null;
    /**
     * Indicates Parent Item Id for this order item
     * @type {string}
     * @memberof CommerceRuntimeOrderItem
     */
    parentItemId?: string | null;
    /**
     * 
     * @type {Array<InventoryTags>}
     * @memberof CommerceRuntimeOrderItem
     */
    inventoryTags?: Array<InventoryTags> | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeOrderItem
     */
    lineItemAdjustment?: number | null;
}
/**
 * Describes a package that will be shipped to somebody
 * @export
 * @interface CommerceRuntimePackage
 */
export interface CommerceRuntimePackage {
    /**
     * Code describing the shipping method.
     * @type {string}
     * @memberof CommerceRuntimePackage
     */
    shippingMethodCode?: string | null;
    /**
     * Name of the shipping method
     * @type {string}
     * @memberof CommerceRuntimePackage
     */
    shippingMethodName?: string | null;
    /**
     * ID of the related shipment
     * @type {string}
     * @memberof CommerceRuntimePackage
     */
    shipmentId?: string | null;
    /**
     * Tracking number of this package (to support classic use cases)
     * @type {string}
     * @memberof CommerceRuntimePackage
     */
    trackingNumber?: string | null;
    /**
     * Tracking number of this package
     * @type {Array<string>}
     * @memberof CommerceRuntimePackage
     */
    trackingNumbers?: Array<string> | null;
    /**
     * Packaging type of this package
     * @type {string}
     * @memberof CommerceRuntimePackage
     */
    packagingType?: string | null;
    /**
     * If there is a shipping label present for this Package, this will be set to true
     * @type {boolean}
     * @memberof CommerceRuntimePackage
     */
    hasLabel?: boolean;
    /**
     * 
     * @type {CommerceRuntimePackageMeasurements}
     * @memberof CommerceRuntimePackage
     */
    measurements?: CommerceRuntimePackageMeasurements;
    /**
     * Carrier of this package
     * @type {string}
     * @memberof CommerceRuntimePackage
     */
    carrier?: string | null;
    /**
     * SignatureRequired for this package
     * @type {boolean}
     * @memberof CommerceRuntimePackage
     */
    signatureRequired?: boolean | null;
    /**
     * Tracking number and url data for this package
     * @type {Array<CommerceRuntimeTracking>}
     * @memberof CommerceRuntimePackage
     */
    trackings?: Array<CommerceRuntimeTracking> | null;
    /**
     * PackingSlipItemDetails for this package
     * @type {Array<PackingSlipItemDetail>}
     * @memberof CommerceRuntimePackage
     */
    packingSlipItemDetails?: Array<PackingSlipItemDetail> | null;
    /**
     * PackingSlipNumber for this package
     * @type {number}
     * @memberof CommerceRuntimePackage
     */
    packingSlipNumber?: number | null;
    /**
     * 
     * @type {Array<CommerceRuntimeTracking>}
     * @memberof CommerceRuntimePackage
     */
    returnTrackings?: Array<CommerceRuntimeTracking> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof CommerceRuntimePackage
     */
    returnTrackingNumbers?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimePackage
     */
    returnCarrier?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimePackage
     */
    packageId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimePackage
     */
    manifestId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimePackage
     */
    labelFormat?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimePackage
     */
    integratorId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimePackage
     */
    fxcbPackNotificationId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimePackage
     */
    fxcbDocumentsUrl?: string | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof CommerceRuntimePackage
     */
    attributes?: { [key: string]: any; } | null;
    /**
     * ID of the fulfillment unit.
     * @type {string}
     * @memberof CommerceRuntimePackage
     */
    id?: string | null;
    /**
     * A human-readable identifier for this fulfillment unit.  If not set on create, will be autogenerated as a string of the form
     *     {fulfillmentUnitType} #{next available int}
     * @type {string}
     * @memberof CommerceRuntimePackage
     */
    code?: string | null;
    /**
     * Status of the fulfillment unit
     * See FulfillmentStatusConst
     * @type {string}
     * @memberof CommerceRuntimePackage
     */
    status?: string | null;
    /**
     * List of items in the fulfillment unit
     * @type {Array<PackageItem>}
     * @memberof CommerceRuntimePackage
     */
    items?: Array<PackageItem> | null;
    /**
     * Date of the pickup
     * @type {string}
     * @memberof CommerceRuntimePackage
     */
    fulfillmentDate?: string | null;
    /**
     * Location code from which to obtain this item
     * @type {string}
     * @memberof CommerceRuntimePackage
     */
    fulfillmentLocationCode?: string | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CommerceRuntimePackage
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * Actions that can be taken on this fulfillment unit
     * @type {Array<string>}
     * @memberof CommerceRuntimePackage
     */
    availableActions?: Array<string> | null;
    /**
     * Change messages related to the fulfillment unit.
     * @type {Array<CommerceRuntimeChangeMessage>}
     * @memberof CommerceRuntimePackage
     */
    changeMessages?: Array<CommerceRuntimeChangeMessage> | null;
}
/**
 * Physical dimensions of the package required to ship the product and its weight.
 * @export
 * @interface CommerceRuntimePackageMeasurements
 */
export interface CommerceRuntimePackageMeasurements {
    /**
     * 
     * @type {CommerceRuntimeMeasurement}
     * @memberof CommerceRuntimePackageMeasurements
     */
    height?: CommerceRuntimeMeasurement;
    /**
     * 
     * @type {CommerceRuntimeMeasurement}
     * @memberof CommerceRuntimePackageMeasurements
     */
    width?: CommerceRuntimeMeasurement;
    /**
     * 
     * @type {CommerceRuntimeMeasurement}
     * @memberof CommerceRuntimePackageMeasurements
     */
    length?: CommerceRuntimeMeasurement;
    /**
     * 
     * @type {CommerceRuntimeMeasurement}
     * @memberof CommerceRuntimePackageMeasurements
     */
    weight?: CommerceRuntimeMeasurement;
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
 * Item that goes into the pickup to determine which items will be picked up.
 * @export
 * @interface CommerceRuntimePickupItem
 */
export interface CommerceRuntimePickupItem {
    /**
     * Code of the Product to be fulfilled.
     * @type {string}
     * @memberof CommerceRuntimePickupItem
     */
    productCode?: string | null;
    /**
     * Quantity of the order item
     * @type {number}
     * @memberof CommerceRuntimePickupItem
     */
    quantity?: number;
    /**
     * The type of fulfillment item
     * @type {string}
     * @memberof CommerceRuntimePickupItem
     */
    fulfillmentItemType?: string | null;
    /**
     * The line id associated with the fulfillment.
     * @type {number}
     * @memberof CommerceRuntimePickupItem
     */
    lineId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimePickupItem
     */
    optionAttributeFQN?: string | null;
}
/**
 * The product as it appears on the order item.
 * @export
 * @interface CommerceRuntimeProduct
 */
export interface CommerceRuntimeProduct {
    /**
     * Manufacturing Part Number of the product.
     * @type {string}
     * @memberof CommerceRuntimeProduct
     */
    mfgPartNumber?: string | null;
    /**
     * Universal Product Code of the product.
     * @type {string}
     * @memberof CommerceRuntimeProduct
     */
    upc?: string | null;
    /**
     * Product Identifier specific to the store
     * @type {string}
     * @memberof CommerceRuntimeProduct
     */
    sku?: string | null;
    /**
     * Types of fulfillment that are supported for this product.
     * @type {Array<string>}
     * @memberof CommerceRuntimeProduct
     */
    fulfillmentTypesSupported?: Array<string> | null;
    /**
     * Descriptive text of the image associated with the product in the language specified by LocaleCode.
     * @type {string}
     * @memberof CommerceRuntimeProduct
     */
    imageAlternateText?: string | null;
    /**
     * URL of the image that appears next to the product on the order item. Optional.
     * @type {string}
     * @memberof CommerceRuntimeProduct
     */
    imageUrl?: string | null;
    /**
     * For configurable products, the unique identifier of the product variation that has been selected.
     * @type {string}
     * @memberof CommerceRuntimeProduct
     */
    variationProductCode?: string | null;
    /**
     * If the product contains configurable or stand-alone options, the list of product options that the shopper selected for this product.
     * @type {Array<CommerceRuntimeProductOption>}
     * @memberof CommerceRuntimeProduct
     */
    options?: Array<CommerceRuntimeProductOption> | null;
    /**
     * If the product contains properties, the list of properties that the shopper selected for this product.
     * @type {Array<CommerceRuntimeProductProperty>}
     * @memberof CommerceRuntimeProduct
     */
    properties?: Array<CommerceRuntimeProductProperty> | null;
    /**
     * Categories to which this product belongs.
     * @type {Array<CommerceRuntimeCategory>}
     * @memberof CommerceRuntimeProduct
     */
    categories?: Array<CommerceRuntimeCategory> | null;
    /**
     * 
     * @type {CommerceRuntimeProductPrice}
     * @memberof CommerceRuntimeProduct
     */
    price?: CommerceRuntimeProductPrice;
    /**
     * Is the product discount restricted
     * @type {boolean}
     * @memberof CommerceRuntimeProduct
     */
    discountsRestricted?: boolean | null;
    /**
     * Product discount restriction start date
     * @type {string}
     * @memberof CommerceRuntimeProduct
     */
    discountsRestrictedStartDate?: string | null;
    /**
     * Product discount restriction end date
     * @type {string}
     * @memberof CommerceRuntimeProduct
     */
    discountsRestrictedEndDate?: string | null;
    /**
     * If true, the product is purchased or fulfilled at regular intervals, for example, a monthly billing or a subscription.
     * @type {boolean}
     * @memberof CommerceRuntimeProduct
     */
    isRecurring?: boolean | null;
    /**
     * If true, the product is eligible for tax.
     * @type {boolean}
     * @memberof CommerceRuntimeProduct
     */
    isTaxable?: boolean | null;
    /**
     * Type of product, which can be a product with configurable options, a product with stand-alone options, or a simple product with no options.
     * @type {string}
     * @memberof CommerceRuntimeProduct
     */
    productType?: string | null;
    /**
     * Usage of the product, primarily used to indicate a bundle in this context
     * @type {string}
     * @memberof CommerceRuntimeProduct
     */
    productUsage?: string | null;
    /**
     * Products bundled with this product (if the current product is a bundle)
     * @type {Array<CommerceRuntimeBundledProduct>}
     * @memberof CommerceRuntimeProduct
     */
    bundledProducts?: Array<CommerceRuntimeBundledProduct> | null;
    /**
     * List of unique product identifiers for an item on shipment
     * @type {Array<CommerceRuntimeFulfillmentField>}
     * @memberof CommerceRuntimeProduct
     */
    fulfillmentFields?: Array<CommerceRuntimeFulfillmentField> | null;
    /**
     * Merchant-created code that uniquely identifies the product.
     * @type {string}
     * @memberof CommerceRuntimeProduct
     */
    productCode?: string | null;
    /**
     * Name of the product, this is the current value of the product's name in the language specified by LocaleCode.
     * @type {string}
     * @memberof CommerceRuntimeProduct
     */
    name?: string | null;
    /**
     * Short description of the product in the language specified by LocaleCode.
     * @type {string}
     * @memberof CommerceRuntimeProduct
     */
    description?: string | null;
    /**
     * Goods Type
     * @type {string}
     * @memberof CommerceRuntimeProduct
     */
    goodsType?: string | null;
    /**
     * Indicates that this product ships by itself.
     * @type {boolean}
     * @memberof CommerceRuntimeProduct
     */
    isPackagedStandAlone?: boolean;
    /**
     * 
     * @type {ProductStock}
     * @memberof CommerceRuntimeProduct
     */
    stock?: ProductStock;
    /**
     * Reservation ID associated with this product in the bundle.
     * @type {number}
     * @memberof CommerceRuntimeProduct
     */
    productReservationId?: number | null;
    /**
     * Allocation ID associated with this product on this order.
     * @type {number}
     * @memberof CommerceRuntimeProduct
     */
    allocationId?: number | null;
    /**
     * Allocation ID associated with this product on this order.
     * @type {string}
     * @memberof CommerceRuntimeProduct
     */
    allocationExpiration?: string | null;
    /**
     * 
     * @type {CommerceRuntimePackageMeasurements}
     * @memberof CommerceRuntimeProduct
     */
    measurements?: CommerceRuntimePackageMeasurements;
    /**
     * Fulfillment status of the product.
     * @type {string}
     * @memberof CommerceRuntimeProduct
     */
    fulfillmentStatus?: string | null;
}
/**
 * Product option for the product listed on this order item. If the product contains 
 * configurable or stand-alone options, this is a product option that the shopper has selected.
 * @export
 * @interface CommerceRuntimeProductOption
 */
export interface CommerceRuntimeProductOption {
    /**
     * Name of the product option that appears with the order item in the language specified by LocaleCode.
     * @type {string}
     * @memberof CommerceRuntimeProductOption
     */
    name?: string | null;
    /**
     * Value of the product option.
     * @type {any}
     * @memberof CommerceRuntimeProductOption
     */
    value?: any | null;
    /**
     * The value entered by the shopper if this is an option that requires shopper input, for example, a monogram.
     * @type {any}
     * @memberof CommerceRuntimeProductOption
     */
    shopperEnteredValue?: any | null;
    /**
     * Value of the product option.
     * @type {string}
     * @memberof CommerceRuntimeProductOption
     */
    attributeFQN?: string | null;
    /**
     * Value of the product option.
     * @type {string}
     * @memberof CommerceRuntimeProductOption
     */
    dataType?: string | null;
    /**
     * Value of the product option.
     * @type {string}
     * @memberof CommerceRuntimeProductOption
     */
    stringValue?: string | null;
}
/**
 * Price of the product with any sale and discounts applied.
 * @export
 * @interface CommerceRuntimeProductPrice
 */
export interface CommerceRuntimeProductPrice {
    /**
     * Price of the product. This is the price that the merchant intends to sell the product if no sale price is present.
     * @type {number}
     * @memberof CommerceRuntimeProductPrice
     */
    price?: number | null;
    /**
     * Current sale price of the product, which is a specific numerical amount (not a percentage off).
     * @type {number}
     * @memberof CommerceRuntimeProductPrice
     */
    salePrice?: number | null;
    /**
     * An override price applied on the product by the tenant.
     * @type {number}
     * @memberof CommerceRuntimeProductPrice
     */
    tenantOverridePrice?: number | null;
    /**
     * MSRP of product.
     * @type {number}
     * @memberof CommerceRuntimeProductPrice
     */
    msrp?: number | null;
    /**
     * Credit Value when the product happens to be a gift card or similar product
     * @type {number}
     * @memberof CommerceRuntimeProductPrice
     */
    creditValue?: number | null;
    /**
     * Pricelist code for the product
     * @type {string}
     * @memberof CommerceRuntimeProductPrice
     */
    priceListCode?: string | null;
    /**
     * Pricelist entry mode of the product.
     * Note: possible values are below
     * 1. null : Product doesn't participate in pricelist
     * 2. Bulk : Bulk volume price available(unit price vary based on quantity)
     * 3. Simple:
     * @type {string}
     * @memberof CommerceRuntimeProductPrice
     */
    priceListEntryMode?: string | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeProductProperty
 */
export interface CommerceRuntimeProductProperty {
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeProductProperty
     */
    attributeFQN?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeProductProperty
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeProductProperty
     */
    dataType?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeProductProperty
     */
    isMultiValue?: boolean;
    /**
     * 
     * @type {Array<CommerceRuntimeProductPropertyValue>}
     * @memberof CommerceRuntimeProductProperty
     */
    values?: Array<CommerceRuntimeProductPropertyValue> | null;
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
 * @interface CommerceRuntimePurchaseOrderCustomField
 */
export interface CommerceRuntimePurchaseOrderCustomField {
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimePurchaseOrderCustomField
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimePurchaseOrderCustomField
     */
    label?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimePurchaseOrderCustomField
     */
    value?: string | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimePurchaseOrderPaymentTerm
 */
export interface CommerceRuntimePurchaseOrderPaymentTerm {
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimePurchaseOrderPaymentTerm
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimePurchaseOrderPaymentTerm
     */
    description?: string | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeShipment
 */
export interface CommerceRuntimeShipment {
    /**
     * ID of the shipment
     * @type {string}
     * @memberof CommerceRuntimeShipment
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipment
     */
    externalShipmentId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    number?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipment
     */
    orderId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    orderNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipment
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipment
     */
    currencyCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    customerAccountId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipment
     */
    readonly customerTaxId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipment
     */
    shipmentType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipment
     */
    shippingMethodCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipment
     */
    shippingMethodName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipment
     */
    fulfillmentLocationCode?: string | null;
    /**
     * 
     * @type {CommerceRuntimeContact}
     * @memberof CommerceRuntimeShipment
     */
    origin?: CommerceRuntimeContact;
    /**
     * 
     * @type {CommerceRuntimeDestination}
     * @memberof CommerceRuntimeShipment
     */
    destination?: CommerceRuntimeDestination;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipment
     */
    shipmentStatus?: string | null;
    /**
     * 
     * @type {CommerceRuntimeShipmentStatusReason}
     * @memberof CommerceRuntimeShipment
     */
    shipmentStatusReason?: CommerceRuntimeShipmentStatusReason;
    /**
     * 
     * @type {Array<number>}
     * @memberof CommerceRuntimeShipment
     */
    transferShipmentNumbers?: Array<number> | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeShipment
     */
    isTransfer?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    originalShipmentNumber?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    parentCheckoutNumber?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    parentShipmentNumber?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipment
     */
    fulfillmentStatus?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipment
     */
    workflowProcessId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipment
     */
    workflowProcessContainerId?: string | null;
    /**
     * 
     * @type {CommerceRuntimeWorkflowState}
     * @memberof CommerceRuntimeShipment
     */
    workflowState?: CommerceRuntimeWorkflowState;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    backorderCreatedDate?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipment
     */
    fulfillmentDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipment
     */
    futureDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipment
     */
    orderSubmitDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipment
     */
    pickStatus?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipment
     */
    pickType?: string | null;
    /**
     * 
     * @type {Array<CommerceRuntimeChangeMessage>}
     * @memberof CommerceRuntimeShipment
     */
    changeMessages?: Array<CommerceRuntimeChangeMessage> | null;
    /**
     * 
     * @type {Array<CommerceRuntimePackage>}
     * @memberof CommerceRuntimeShipment
     */
    packages?: Array<CommerceRuntimePackage> | null;
    /**
     * 
     * @type {Array<ShipmentItem>}
     * @memberof CommerceRuntimeShipment
     */
    items?: Array<ShipmentItem> | null;
    /**
     * 
     * @type {Array<CommerceRuntimeCanceledItem>}
     * @memberof CommerceRuntimeShipment
     */
    canceledItems?: Array<CommerceRuntimeCanceledItem> | null;
    /**
     * 
     * @type {object}
     * @memberof CommerceRuntimeShipment
     */
    data?: object | null;
    /**
     * 
     * @type {object}
     * @memberof CommerceRuntimeShipment
     */
    taxData?: object | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CommerceRuntimeShipment
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    shipmentAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    lineItemSubtotal?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    lineItemTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    lineItemTaxTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    lineItemTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    shippingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    shippingSubtotal?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    shippingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    shippingTaxTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    shippingTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    handlingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    handlingSubtotal?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    handlingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    handlingTaxTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    handlingTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    dutyAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    dutyTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    total?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    cost?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipment
     */
    externalOrderId?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeShipment
     */
    isExpress?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeShipment
     */
    isFlatRateShipping?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeShipment
     */
    readyToCapture?: boolean;
    /**
     * 
     * @type {object}
     * @memberof CommerceRuntimeShipment
     */
    pickupInfo?: object | null;
    /**
     * 
     * @type {FulfillmentShopperNotes}
     * @memberof CommerceRuntimeShipment
     */
    shopperNotes?: FulfillmentShopperNotes;
    /**
     * 
     * @type {CommerceRuntimeCustomer}
     * @memberof CommerceRuntimeShipment
     */
    customer?: CommerceRuntimeCustomer;
    /**
     * 
     * @type {Array<CommerceRuntimeShipmentNote>}
     * @memberof CommerceRuntimeShipment
     */
    shipmentNotes?: Array<CommerceRuntimeShipmentNote> | null;
    /**
     * 
     * @type {FulfillmentAlternateContact}
     * @memberof CommerceRuntimeShipment
     */
    alternateContact?: FulfillmentAlternateContact;
    /**
     * 
     * @type {Array<CommerceRuntimeSubstitutedItem>}
     * @memberof CommerceRuntimeShipment
     */
    substitutedItems?: Array<CommerceRuntimeSubstitutedItem> | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeShipmentNote
 */
export interface CommerceRuntimeShipmentNote {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof CommerceRuntimeShipmentNote
     */
    attributes?: { [key: string]: any; } | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CommerceRuntimeShipmentNote
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipmentNote
     */
    noteId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipmentNote
     */
    noteText?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipmentNote
     */
    role?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipmentNote
     */
    username?: string | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeShipmentStatusReason
 */
export interface CommerceRuntimeShipmentStatusReason {
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipmentStatusReason
     */
    reasonCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipmentStatusReason
     */
    moreInfo?: string | null;
}
/**
 * How much the customer and merchant pay for shipping based on the current shipping rate. 
 * The cost can differ between the merchant and customer depending on any merchant discounts or 
 * extra fees.
 * @export
 * @interface CommerceRuntimeShippingRate
 */
export interface CommerceRuntimeShippingRate {
    /**
     * Code that uniquely identifies the selected shipping method.
     * @type {string}
     * @memberof CommerceRuntimeShippingRate
     */
    shippingMethodCode?: string | null;
    /**
     * Shipping Method Name
     * @type {string}
     * @memberof CommerceRuntimeShippingRate
     */
    shippingMethodName?: string | null;
    /**
     * The shipping zone to which this rate applies.
     * @type {string}
     * @memberof CommerceRuntimeShippingRate
     */
    shippingZoneCode?: string | null;
    /**
     * If true, the shipping rate is valid.
     * @type {boolean}
     * @memberof CommerceRuntimeShippingRate
     */
    isValid?: boolean | null;
    /**
     * Messages and detail about why the shipping rate may be invalid.
     * @type {Array<string>}
     * @memberof CommerceRuntimeShippingRate
     */
    messages?: Array<string> | null;
    /**
     * Custom data returned by the shipping service.
     * @type {object}
     * @memberof CommerceRuntimeShippingRate
     */
    data?: object | null;
    /**
     * ISO currency code such as US dollars. Currently, only USD is supported.
     * @type {string}
     * @memberof CommerceRuntimeShippingRate
     */
    currencyCode?: string | null;
    /**
     * How much the customer pays for shipping which includes any shipping discounts that the merchant offers.
     * @type {number}
     * @memberof CommerceRuntimeShippingRate
     */
    price?: number | null;
}
/**
 * Notes that the shopper has added to this order, for example, a gift message or other comments.
 * @export
 * @interface CommerceRuntimeShopperNotes
 */
export interface CommerceRuntimeShopperNotes {
    /**
     * Gift message associated with this order.
     * @type {string}
     * @memberof CommerceRuntimeShopperNotes
     */
    giftMessage?: string | null;
    /**
     * Comments associated with this order.
     * @type {string}
     * @memberof CommerceRuntimeShopperNotes
     */
    comments?: string | null;
    /**
     * DeliveryInstructions associated with this order.
     * @type {string}
     * @memberof CommerceRuntimeShopperNotes
     */
    deliveryInstructions?: string | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeSubstitutedItem
 */
export interface CommerceRuntimeSubstitutedItem {
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    actualPrice?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    allocatedQuantity?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    allowsBackOrder?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    allowsFutureAllocate?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    allowsSubstitution?: boolean | null;
    /**
     * 
     * @type {FulfillmentServiceAppeasementReason}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    appeasementReason?: FulfillmentServiceAppeasementReason;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    attributes?: { [key: string]: any; } | null;
    /**
     * 
     * @type {FulfillmentServiceAuditInfo}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    auditInfo?: FulfillmentServiceAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    backorderReleaseDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    cartItemId?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    childItemIds?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    creditCurrencyCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    creditValue?: number | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    data?: { [key: string]: any; } | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    duty?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    expectedDeliveryDate?: string | null;
    /**
     * 
     * @type {Array<FulfillmentServiceFulfillmentField>}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    fulfillmentFields?: Array<FulfillmentServiceFulfillmentField> | null;
    /**
     * 
     * @type {Array<FulfillmentServiceGiftCard>}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    giftCards?: Array<FulfillmentServiceGiftCard> | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    giftMessage?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    goodsType?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    handling?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    handlingDiscount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    handlingTax?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    height?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    imageUrl?: string | null;
    /**
     * 
     * @type {Array<FulfillmentServiceInventoryTag>}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    inventoryTags?: Array<FulfillmentServiceInventoryTag> | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    isAssemblyRequired?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    isGift?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    isPackagedStandAlone?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    isReservedInventory?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    isTaxable?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    itemDiscount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    itemTax?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    length?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    lineId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    lineItemAdjustment?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    lineItemCost?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    locatorName?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    manageStock?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    optionAttributeFQN?: string | null;
    /**
     * 
     * @type {Array<FulfillmentServiceProductOption>}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    options?: Array<FulfillmentServiceProductOption> | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    originalLineId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    originalOrderItemId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    originalQuantity?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    overridePrice?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    parentItemId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    partNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    productCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    purchaseLocation?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    quantity?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    readyForPickupQuantity?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    shipping?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    shippingDiscount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    shippingTax?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    sku?: string | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    substituteItemLineIds?: Array<number> | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    substituteQuantity?: number | null;
    /**
     * 
     * @type {FulfillmentServiceSubstituteReason}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    substituteReason?: FulfillmentServiceSubstituteReason;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    taxData?: any | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    taxableHandling?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    taxableLineItemCost?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    taxableShipping?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    transferQuantity?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    trueTransferQuantity?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    unitPrice?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    upc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    variationProductCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    weight?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    weightUnit?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    weightedDutyAdjustment?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    weightedHandlingAdjustment?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    weightedHandlingTaxAdjustment?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    weightedLineItemTaxAdjustment?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    weightedShipmentAdjustment?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    weightedShippingAdjustment?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    weightedShippingTaxAdjustment?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    width?: number | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeTaskInput
 */
export interface CommerceRuntimeTaskInput {
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeTaskInput
     */
    helpMessage?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeTaskInput
     */
    label?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeTaskInput
     */
    maxLength?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeTaskInput
     */
    maximum?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeTaskInput
     */
    minLength?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeTaskInput
     */
    minimum?: number;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeTaskInput
     */
    name?: string | null;
    /**
     * 
     * @type {Array<any>}
     * @memberof CommerceRuntimeTaskInput
     */
    options?: Array<any> | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeTaskInput
     */
    pattern?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeTaskInput
     */
    required?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeTaskInput
     */
    type?: string | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeThresholdMessage
 */
export interface CommerceRuntimeThresholdMessage {
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeThresholdMessage
     */
    discountId?: number;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeThresholdMessage
     */
    message?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeThresholdMessage
     */
    thresholdValue?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeThresholdMessage
     */
    showOnCheckout?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeThresholdMessage
     */
    showInCart?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeThresholdMessage
     */
    requiresCouponCode?: boolean;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeTracking
 */
export interface CommerceRuntimeTracking {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof CommerceRuntimeTracking
     */
    attributes?: { [key: string]: any; } | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeTracking
     */
    number?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeTracking
     */
    url?: string | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeWorkflowState
 */
export interface CommerceRuntimeWorkflowState {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof CommerceRuntimeWorkflowState
     */
    attributes?: { [key: string]: any; } | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CommerceRuntimeWorkflowState
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeWorkflowState
     */
    completedDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeWorkflowState
     */
    processInstanceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeWorkflowState
     */
    shipmentState?: string | null;
    /**
     * 
     * @type {Array<FulfillmentTask>}
     * @memberof CommerceRuntimeWorkflowState
     */
    taskList?: Array<FulfillmentTask> | null;
}
/**
 * Pricing details for the product listed on a cart item, including the original price, discount amount, and final price.
 * @export
 * @interface CommerceUnitPrice
 */
export interface CommerceUnitPrice {
    /**
     * Extended amount, this is in order of precedence: OverrideAmount, SaleAmount, ListAmount
     * @type {number}
     * @memberof CommerceUnitPrice
     */
    extendedAmount?: number | null;
    /**
     * Product list amount.
     * @type {number}
     * @memberof CommerceUnitPrice
     */
    listAmount?: number | null;
    /**
     * Sale amount indicated on the product.
     * @type {number}
     * @memberof CommerceUnitPrice
     */
    saleAmount?: number | null;
    /**
     * Amount as manually overridden by the Merchant
     * @type {number}
     * @memberof CommerceUnitPrice
     */
    overrideAmount?: number | null;
}
/**
 * 
 * @export
 * @interface DigitalPackage
 */
export interface DigitalPackage {
    /**
     * ID of the fulfillment unit.
     * @type {string}
     * @memberof DigitalPackage
     */
    id?: string | null;
    /**
     * A human-readable identifier for this fulfillment unit.  If not set on create, will be autogenerated as a string of the form
     *     {fulfillmentUnitType} #{next available int}
     * @type {string}
     * @memberof DigitalPackage
     */
    code?: string | null;
    /**
     * Status of the fulfillment unit
     * See FulfillmentStatusConst
     * @type {string}
     * @memberof DigitalPackage
     */
    status?: string | null;
    /**
     * List of items in the fulfillment unit
     * @type {Array<DigitalPackageItem>}
     * @memberof DigitalPackage
     */
    items?: Array<DigitalPackageItem> | null;
    /**
     * Date of the pickup
     * @type {string}
     * @memberof DigitalPackage
     */
    fulfillmentDate?: string | null;
    /**
     * Location code from which to obtain this item
     * @type {string}
     * @memberof DigitalPackage
     */
    fulfillmentLocationCode?: string | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof DigitalPackage
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * Actions that can be taken on this fulfillment unit
     * @type {Array<string>}
     * @memberof DigitalPackage
     */
    availableActions?: Array<string> | null;
    /**
     * Change messages related to the fulfillment unit.
     * @type {Array<CommerceRuntimeChangeMessage>}
     * @memberof DigitalPackage
     */
    changeMessages?: Array<CommerceRuntimeChangeMessage> | null;
}
/**
 * 
 * @export
 * @interface DigitalPackageItem
 */
export interface DigitalPackageItem {
    /**
     * 
     * @type {string}
     * @memberof DigitalPackageItem
     */
    giftCardCode?: string | null;
    /**
     * Code of the Product to be fulfilled.
     * @type {string}
     * @memberof DigitalPackageItem
     */
    productCode?: string | null;
    /**
     * Quantity of the order item
     * @type {number}
     * @memberof DigitalPackageItem
     */
    quantity?: number;
    /**
     * The type of fulfillment item
     * @type {string}
     * @memberof DigitalPackageItem
     */
    fulfillmentItemType?: string | null;
    /**
     * The line id associated with the fulfillment.
     * @type {number}
     * @memberof DigitalPackageItem
     */
    lineId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof DigitalPackageItem
     */
    optionAttributeFQN?: string | null;
}
/**
 * 
 * @export
 * @interface ExtendedProperty
 */
export interface ExtendedProperty {
    /**
     * 
     * @type {string}
     * @memberof ExtendedProperty
     */
    key?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExtendedProperty
     */
    value?: string | null;
}
/**
 * 
 * @export
 * @interface Frequency
 */
export interface Frequency {
    /**
     * 
     * @type {string}
     * @memberof Frequency
     */
    unit?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Frequency
     */
    value?: number;
}
/**
 * 
 * @export
 * @interface FulfillmentAlternateContact
 */
export interface FulfillmentAlternateContact {
    /**
     * First Name of alternate contact during order process
     * @type {string}
     * @memberof FulfillmentAlternateContact
     */
    firstName?: string | null;
    /**
     * Last Name of alternate contact during order process
     * @type {string}
     * @memberof FulfillmentAlternateContact
     */
    lastNameOrSurname?: string | null;
    /**
     * Email Address of alternate contact during order process
     * @type {string}
     * @memberof FulfillmentAlternateContact
     */
    email?: string | null;
    /**
     * Phone Number of alternate contact during order process
     * @type {string}
     * @memberof FulfillmentAlternateContact
     */
    phoneNumber?: string | null;
}
/**
 * Shipment information, which includes the shipping address, price, estimated delivery date, tracking information, method (for example, Ground, Overnight, or Pick-up), 
 * carrier (for example, USPS, UPS, FedEx), and current status (for example, Not Shipped, In Transit, Delayed, or Returned To Sender).
 * @export
 * @interface FulfillmentInfo
 */
export interface FulfillmentInfo {
    /**
     * 
     * @type {CommerceRuntimeContact}
     * @memberof FulfillmentInfo
     */
    fulfillmentContact?: CommerceRuntimeContact;
    /**
     * Indicates that the destination is commercial
     * @type {boolean}
     * @memberof FulfillmentInfo
     */
    isDestinationCommercial?: boolean | null;
    /**
     * Code that uniquely identifies the shipping method such as "Ground," "Overnight," or "Digital."
     * The site's shipping settings lists the valid shipping methods specified for this site.
     * @type {string}
     * @memberof FulfillmentInfo
     */
    shippingMethodCode?: string | null;
    /**
     * Readable name of the shipping method
     * @type {string}
     * @memberof FulfillmentInfo
     */
    shippingMethodName?: string | null;
    /**
     * Custom data originated by the shipping service.
     * @type {object}
     * @memberof FulfillmentInfo
     */
    data?: object | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof FulfillmentInfo
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * 
 * @export
 * @interface FulfillmentServiceAppeasementReason
 */
export interface FulfillmentServiceAppeasementReason {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceAppeasementReason
     */
    moreInfo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceAppeasementReason
     */
    reasonCode?: string | null;
}
/**
 * 
 * @export
 * @interface FulfillmentServiceAuditInfo
 */
export interface FulfillmentServiceAuditInfo {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceAuditInfo
     */
    createBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceAuditInfo
     */
    createDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceAuditInfo
     */
    updateBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceAuditInfo
     */
    updateDate?: string | null;
}
/**
 * 
 * @export
 * @interface FulfillmentServiceFulfillmentField
 */
export interface FulfillmentServiceFulfillmentField {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceFulfillmentField
     */
    name?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentServiceFulfillmentField
     */
    required?: boolean | null;
    /**
     * 
     * @type {any}
     * @memberof FulfillmentServiceFulfillmentField
     */
    userEnteredValue?: any | null;
}
/**
 * 
 * @export
 * @interface FulfillmentServiceGiftCard
 */
export interface FulfillmentServiceGiftCard {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceGiftCard
     */
    activationDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceGiftCard
     */
    cardNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceGiftCard
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceGiftCard
     */
    creditType?: string | null;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentServiceGiftCard
     */
    creditValue?: number | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceGiftCard
     */
    currencyCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentServiceGiftCard
     */
    currentBalance?: number | null;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentServiceGiftCard
     */
    customerId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceGiftCard
     */
    expirationDate?: string | null;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentServiceGiftCard
     */
    initialBalance?: number | null;
}
/**
 * 
 * @export
 * @interface FulfillmentServiceInventoryTag
 */
export interface FulfillmentServiceInventoryTag {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceInventoryTag
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceInventoryTag
     */
    value?: string | null;
}
/**
 * 
 * @export
 * @interface FulfillmentServiceProductOption
 */
export interface FulfillmentServiceProductOption {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceProductOption
     */
    attributeFQN?: string | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof FulfillmentServiceProductOption
     */
    attributes?: { [key: string]: any; } | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceProductOption
     */
    dataType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceProductOption
     */
    name?: string | null;
    /**
     * 
     * @type {any}
     * @memberof FulfillmentServiceProductOption
     */
    shopperEnteredValue?: any | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceProductOption
     */
    stringValue?: string | null;
    /**
     * 
     * @type {any}
     * @memberof FulfillmentServiceProductOption
     */
    value?: any | null;
}
/**
 * 
 * @export
 * @interface FulfillmentServiceSubstituteReason
 */
export interface FulfillmentServiceSubstituteReason {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceSubstituteReason
     */
    moreInfo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceSubstituteReason
     */
    reasonCode?: string | null;
}
/**
 * 
 * @export
 * @interface FulfillmentShopperNotes
 */
export interface FulfillmentShopperNotes {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentShopperNotes
     */
    comments?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentShopperNotes
     */
    deliveryInstructions?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentShopperNotes
     */
    giftMessage?: string | null;
}
/**
 * 
 * @export
 * @interface FulfillmentTask
 */
export interface FulfillmentTask {
    /**
     * 
     * @type {{ [key: string]: CommerceRuntimeLink; }}
     * @memberof FulfillmentTask
     */
    links?: { [key: string]: CommerceRuntimeLink; } | null;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentTask
     */
    active?: boolean | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof FulfillmentTask
     */
    attributes?: { [key: string]: any; } | null;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentTask
     */
    completed?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentTask
     */
    completedDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentTask
     */
    description?: string | null;
    /**
     * 
     * @type {Array<CommerceRuntimeTaskInput>}
     * @memberof FulfillmentTask
     */
    inputs?: Array<CommerceRuntimeTaskInput> | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentTask
     */
    name?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentTask
     */
    skippable?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentTask
     */
    subject?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentTask
     */
    taskId?: string | null;
}
/**
 * 
 * @export
 * @interface GatewayGiftCard
 */
export interface GatewayGiftCard {
    /**
     * 
     * @type {string}
     * @memberof GatewayGiftCard
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GatewayGiftCard
     */
    cardNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GatewayGiftCard
     */
    cardPin?: string | null;
    /**
     * 
     * @type {number}
     * @memberof GatewayGiftCard
     */
    amount?: number;
    /**
     * 
     * @type {string}
     * @memberof GatewayGiftCard
     */
    currencyCode?: string | null;
}
/**
 * 
 * @export
 * @interface GiftInfo
 */
export interface GiftInfo {
    /**
     * Flag to indicate whether the item is a gift item
     * @type {boolean}
     * @memberof GiftInfo
     */
    isGiftItem?: boolean | null;
    /**
     * Item level gift message
     * @type {string}
     * @memberof GiftInfo
     */
    giftMessage?: string | null;
}
/**
 * Installment plan to be updated on the subscription
 * @export
 * @interface InstallmentPlanRequest
 */
export interface InstallmentPlanRequest {
    /**
     * Installment Plan code on the subscription. Installment is only supported on subscription orders
     * @type {string}
     * @memberof InstallmentPlanRequest
     */
    installmentPlanCode?: string | null;
}
/**
 * Represents a coupon that is considered invalid by the Mozu pricing service.
 * @export
 * @interface InvalidCoupon
 */
export interface InvalidCoupon {
    /**
     * Code that identifies the coupon.
     * @type {string}
     * @memberof InvalidCoupon
     */
    couponCode?: string | null;
    /**
     * Code that identifies the reason the coupon was invalid.
     * @type {number}
     * @memberof InvalidCoupon
     */
    reasonCode?: number;
    /**
     * Description text of the reason.
     * @type {string}
     * @memberof InvalidCoupon
     */
    reason?: string | null;
    /**
     * Create date of the invalid coupon.
     * @type {string}
     * @memberof InvalidCoupon
     */
    createDate?: string;
    /**
     * 
     * @type {number}
     * @memberof InvalidCoupon
     */
    discountId?: number;
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
 * Order form.
 * @export
 * @interface Order
 */
export interface Order {
    /**
     * Order Number. This is an integer that is only assigned after an order is placed and enters the open state.
     * @type {number}
     * @memberof Order
     */
    orderNumber?: number | null;
    /**
     * Identifies the location at which the order was placed if the order was placed externally.
     * @type {string}
     * @memberof Order
     */
    locationCode?: string | null;
    /**
     * Version for concurrency purposes
     * @type {string}
     * @memberof Order
     */
    version?: string | null;
    /**
     * If this Order has a parent order, this should be the parent's ID.
     * @type {string}
     * @memberof Order
     */
    parentOrderId?: string | null;
    /**
     * If this order has a parent order, this should be the parent's Mozu.CommerceRuntime.Contracts.Orders.Order.OrderNumber.
     * @type {number}
     * @memberof Order
     */
    parentOrderNumber?: number | null;
    /**
     * If this order originated from a multi-ship enabled site, this is the identifier of the originating checkout.
     * @type {string}
     * @memberof Order
     */
    parentCheckoutId?: string | null;
    /**
     * If this order originated from a multi-ship enabled site, this is the number of the originating checkout.
     * @type {number}
     * @memberof Order
     */
    parentCheckoutNumber?: number | null;
    /**
     * If this order originated from a checkout, this is a sequence number out of the total orders created from that checkout.
     * @type {number}
     * @memberof Order
     */
    partialOrderNumber?: number | null;
    /**
     * If this order originated from a checkout, this is the total number of orders created from that checkout.
     * @type {number}
     * @memberof Order
     */
    partialOrderCount?: number | null;
    /**
     * Returns {true} if this order originated from a checkout and has sibling partial orders, otherwise {false}.
     * @type {boolean}
     * @memberof Order
     */
    isPartialOrder?: boolean;
    /**
     * If this order was created as part of a return, this should be the return's ID.
     * @type {string}
     * @memberof Order
     */
    parentReturnId?: string | null;
    /**
     * If this order was created as part of a return, this should be the return's ReturnNumber.
     * @type {number}
     * @memberof Order
     */
    parentReturnNumber?: number | null;
    /**
     * Unique identifier for the cart that was converted to order.
     * @type {string}
     * @memberof Order
     */
    originalCartId?: string | null;
    /**
     * If this order originated from a quote, this is the identifier of the originating quote.
     * @type {string}
     * @memberof Order
     */
    originalQuoteId?: string | null;
    /**
     * If this order originated from a quote, this is the number of the originating quote.
     * @type {number}
     * @memberof Order
     */
    originalQuoteNumber?: number | null;
    /**
     * Pricelist code for the order
     * @type {string}
     * @memberof Order
     */
    priceListCode?: string | null;
    /**
     * Actions available to the payment
     * @type {Array<string>}
     * @memberof Order
     */
    availableActions?: Array<string> | null;
    /**
     * 
     * @type {CommerceRuntimeShopperNotes}
     * @memberof Order
     */
    shopperNotes?: CommerceRuntimeShopperNotes;
    /**
     * Unique identifier of the customer account.
     * @type {number}
     * @memberof Order
     */
    customerAccountId?: number | null;
    /**
     * The customers tax ID.  If Customer Account ID exists in the system, will set this.
     * @type {string}
     * @memberof Order
     */
    customerTaxId?: string | null;
    /**
     * Unique identifier of the customer account.
     * @type {boolean}
     * @memberof Order
     */
    isTaxExempt?: boolean | null;
    /**
     * Email address of the customer at the time the order is placed.
     * @type {string}
     * @memberof Order
     */
    email?: string | null;
    /**
     * 
     * @type {AlternateContact}
     * @memberof Order
     */
    alternateContact?: AlternateContact;
    /**
     * IP address of the user placing the order. (User or customer?)
     * @type {string}
     * @memberof Order
     */
    ipAddress?: string | null;
    /**
     * Source device of the user placing the order. (User or customer?)
     * @type {string}
     * @memberof Order
     */
    sourceDevice?: string | null;
    /**
     * Does the customer accept marketing
     * @type {boolean}
     * @memberof Order
     */
    acceptsMarketing?: boolean | null;
    /**
     * Current status of the order, which can be viewed in OrderStatusConst. System-supplied and read-only.
     * @type {string}
     * @memberof Order
     */
    status?: string | null;
    /**
     * Is this Order Online or Offline? Online means shopper entered at checkout, offline means a phone order.
     * @type {string}
     * @memberof Order
     */
    type?: string | null;
    /**
     * Current status of payment, which can be "Null," "AwaitingCheck," "AwaitingPayment," "Paid," "Authorized," or "Void." 
     * System-supplied and read-only.
     * @type {string}
     * @memberof Order
     */
    paymentStatus?: string | null;
    /**
     * System-supplied and read-only.
     * @type {string}
     * @memberof Order
     */
    returnStatus?: string | null;
    /**
     * Marker for determining if the order is a) complete or b) has some items that are shipped and not part of any other return
     * @type {boolean}
     * @memberof Order
     */
    isEligibleForReturns?: boolean;
    /**
     * Total amount of money collected on the order via payments.
     * @type {number}
     * @memberof Order
     */
    totalCollected?: number;
    /**
     * 
     * @type {Array<CommerceRuntimeOrderAttribute>}
     * @memberof Order
     */
    attributes?: Array<CommerceRuntimeOrderAttribute> | null;
    /**
     * 
     * @type {Adjustment}
     * @memberof Order
     */
    adjustment?: Adjustment;
    /**
     * 
     * @type {Adjustment}
     * @memberof Order
     */
    shippingAdjustment?: Adjustment;
    /**
     * 
     * @type {Adjustment}
     * @memberof Order
     */
    handlingAdjustment?: Adjustment;
    /**
     * 
     * @type {Array<ShippingDiscount>}
     * @memberof Order
     */
    shippingDiscounts?: Array<ShippingDiscount> | null;
    /**
     * The list of historically-applied handling discounts.  The active one will have IsExcluded == false
     * @type {Array<CommerceRuntimeAppliedDiscount>}
     * @memberof Order
     */
    handlingDiscounts?: Array<CommerceRuntimeAppliedDiscount> | null;
    /**
     * Order level handling fees excluding any discounts.
     * @type {number}
     * @memberof Order
     */
    handlingAmount?: number | null;
    /**
     * Handling fees for the Order as well as OrderItems (e.g. if the Order has a $5 handling fee and an OrderItem has a $2 handling fee per item quantity and the quantity of items is 2 then the value in this property would be $9)
     * @type {number}
     * @memberof Order
     */
    handlingSubTotal?: number | null;
    /**
     * Handling fees including any discounts.
     * @type {number}
     * @memberof Order
     */
    handlingTotal?: number | null;
    /**
     * Order level duty or tariff amount. Does not take into account duties or tariffs specifically on items on the order
     * @type {number}
     * @memberof Order
     */
    dutyAmount?: number | null;
    /**
     * Duties or tariffs for the Order as well as OrderItems (e.g. if the Order has a $5 duty or tariff for any reason and an OrderItem has a $2 duty or tariff then the value in this property would be $7)
     * @type {number}
     * @memberof Order
     */
    dutyTotal?: number | null;
    /**
     * Current fulfillment status, which can be "NotFulfilled,", "PartiallyFulfilled", or "Fufilled." 
     * System-supplied and read-only.  Values are available in FulfillmentStatusConst of this class.
     * @type {string}
     * @memberof Order
     */
    fulfillmentStatus?: string | null;
    /**
     * Flag to indicate whether it is safe to proceed with fulfillment on shipments on the order.
     * @type {boolean}
     * @memberof Order
     */
    isFulfillable?: boolean;
    /**
     * When the customer placed (submitted) the order.
     * @type {string}
     * @memberof Order
     */
    submittedDate?: string | null;
    /**
     * Release Shipment After(in minutes) (Order Submitted Date).
     * @type {number}
     * @memberof Order
     */
    shipmentCreationOffset?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Order
     */
    releaseShipmentDate?: string | null;
    /**
     * Date the order was cancelled.
     * @type {string}
     * @memberof Order
     */
    cancelledDate?: string | null;
    /**
     * Date the order was closed. A closed order means that the order has been processed and items shipped.
     * @type {string}
     * @memberof Order
     */
    closedDate?: string | null;
    /**
     * When the order was accepted by the merchant
     * @type {string}
     * @memberof Order
     */
    acceptedDate?: string | null;
    /**
     * Internal notes that a merchant may add to the order. Maximum 250 characters.
     * @type {Array<OrderNote>}
     * @memberof Order
     */
    notes?: Array<OrderNote> | null;
    /**
     * List of items in the order.
     * @type {Array<CommerceRuntimeOrderItem>}
     * @memberof Order
     */
    items?: Array<CommerceRuntimeOrderItem> | null;
    /**
     * Validation results for the order when processes against validation capabilities.
     * @type {Array<OrderValidationResult>}
     * @memberof Order
     */
    validationResults?: Array<OrderValidationResult> | null;
    /**
     * 
     * @type {BillingInfo}
     * @memberof Order
     */
    billingInfo?: BillingInfo;
    /**
     * Payment transaction associated with this order. It is the entire payment interchange between the merchant 
     * who is forwarding the customer's payment information and the payment service who is authorizing and 
     * capturing payment. Payment can be either by credit card, check, or PayPal.
     * @type {Array<Payment>}
     * @memberof Order
     */
    payments?: Array<Payment> | null;
    /**
     * Refunds associated with this order. A refund is a single exchange of money from merchant to customer
     * that either encapsulates a refund to a credit card or an issuance of a store credit.
     * Refunds does not reduce the 'amount collected' on an order and it is possible for refunds to exceed the total order amount.
     * @type {Array<Refund>}
     * @memberof Order
     */
    refunds?: Array<Refund> | null;
    /**
     * 
     * @type {Array<CommerceRuntimeCredit>}
     * @memberof Order
     */
    credits?: Array<CommerceRuntimeCredit> | null;
    /**
     * Shipping package associated with this order.
     * @type {Array<CommerceRuntimePackage>}
     * @memberof Order
     */
    packages?: Array<CommerceRuntimePackage> | null;
    /**
     * Fulfillment pickups associated with this order.
     * @type {Array<Pickup>}
     * @memberof Order
     */
    pickups?: Array<Pickup> | null;
    /**
     * Fulfillment digital packages associated with this order.
     * @type {Array<DigitalPackage>}
     * @memberof Order
     */
    digitalPackages?: Array<DigitalPackage> | null;
    /**
     * Package shipments associated with this order.
     * @type {Array<CommerceRuntimeShipment>}
     * @memberof Order
     */
    shipments?: Array<CommerceRuntimeShipment> | null;
    /**
     * Is this order a draft version
     * @type {boolean}
     * @memberof Order
     */
    isDraft?: boolean | null;
    /**
     * Does this order have a draft version.
     * @type {boolean}
     * @memberof Order
     */
    hasDraft?: boolean | null;
    /**
     * Was this order initiated from an external system
     * @type {boolean}
     * @memberof Order
     */
    isImport?: boolean | null;
    /**
     * Indicates this was an order in a terminal state (completed/canceled) that was imported into the system for historical purposes.
     * @type {boolean}
     * @memberof Order
     */
    isHistoricalImport?: boolean | null;
    /**
     * Date this item was imported
     * @type {string}
     * @memberof Order
     */
    importDate?: string | null;
    /**
     * Was this order created by the Unified platform.
     * @type {boolean}
     * @memberof Order
     */
    isUnified?: boolean;
    /**
     * An order number to link this order to an external system
     * @type {string}
     * @memberof Order
     */
    externalId?: string | null;
    /**
     * Coupon codes associated with this order.  Only set on order import.
     * @type {Array<string>}
     * @memberof Order
     */
    couponCodes?: Array<string> | null;
    /**
     * A list of invalid coupons that were attempted on the order
     * @type {Array<InvalidCoupon>}
     * @memberof Order
     */
    invalidCoupons?: Array<InvalidCoupon> | null;
    /**
     * This property represents AmountCaptured - AmountRefunded via returns.
     * It is read only.
     * @type {number}
     * @memberof Order
     */
    amountAvailableForRefund?: number;
    /**
     * A counter for how much of the order total has not been claimed by payments.
     * This is computed by Order.Total-(sum of Order.Payments where State is not voided/declined)
     * @type {number}
     * @memberof Order
     */
    amountRemainingForPayment?: number;
    /**
     * A counter for how much money has been issued in refunds.
     * This calculated field does NOT include refunds issued in returns.
     * @type {number}
     * @memberof Order
     */
    amountRefunded?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Order
     */
    readyToCapture?: boolean;
    /**
     * Whether the shopper opts in to curbside text notifications.
     * @type {boolean}
     * @memberof Order
     */
    isOptInForSms?: boolean;
    /**
     * Overrides the Fulfillment SiteSetting value for `ForceSTHConsolidationOnSplitShipments`.
     * TODO autogen instead of manual addition
     * @type {boolean}
     * @memberof Order
     */
    forceSTHConsolidationOnSplitShipments?: boolean | null;
    /**
     * All the subscriptions associated with the current order.
     * @type {Array<string>}
     * @memberof Order
     */
    subscriptionIds?: Array<string> | null;
    /**
     * The ordinal to track the Continuity order.
     * @type {number}
     * @memberof Order
     */
    continuityOrderOrdinal?: number;
    /**
     * Inventory Reservation id for order.
     * @type {string}
     * @memberof Order
     */
    reservationId?: string | null;
    /**
     * Setting this flag on the order will restrict user from editing the order
     * @type {boolean}
     * @memberof Order
     */
    restrictEdit?: boolean | null;
    /**
     * Settings this flag on the order will restrict user from Cancelling the order
     * @type {boolean}
     * @memberof Order
     */
    restrictCancellation?: boolean | null;
    /**
     * Flag to check if the order is continuityOrder.
     * @type {boolean}
     * @memberof Order
     */
    isContinuityOrder?: boolean;
    /**
     * Unique identifier of the shopper who created the cart.
     * @type {string}
     * @memberof Order
     */
    userId?: string | null;
    /**
     * Unique identifier of the CommerceAggregate object (e.g. order, cart, wishlist, etc.).
     * @type {string}
     * @memberof Order
     */
    id?: string | null;
    /**
     * Unique identifier of the Tenant.
     * @type {number}
     * @memberof Order
     */
    tenantId?: number | null;
    /**
     * Unique identifier of the Site.
     * @type {number}
     * @memberof Order
     */
    siteId?: number | null;
    /**
     * Unique identifier of the channel for this item.
     * @type {string}
     * @memberof Order
     */
    channelCode?: string | null;
    /**
     * ISO Currency Code. Currently, only USD is supported.
     * @type {string}
     * @memberof Order
     */
    currencyCode?: string | null;
    /**
     * Identifies the Visit ID that was current when the order was placed or when the cart was last updated.
     * @type {string}
     * @memberof Order
     */
    visitId?: string | null;
    /**
     * Identifies the web session used to place the order or last update the cart.
     * @type {string}
     * @memberof Order
     */
    webSessionId?: string | null;
    /**
     * Determines the interaction type that a customer will use to create this object.
     * Valid values are: Website, Store, Call, Unknown
     * @type {string}
     * @memberof Order
     */
    customerInteractionType?: string | null;
    /**
     * 
     * @type {FulfillmentInfo}
     * @memberof Order
     */
    fulfillmentInfo?: FulfillmentInfo;
    /**
     * The discount that has been applied to the cart itself. If multiple discounts exist, this is the discount that the system applies because it offers the best savings for the shopper. This is a negative number.
     * @type {Array<CommerceRuntimeAppliedDiscount>}
     * @memberof Order
     */
    orderDiscounts?: Array<CommerceRuntimeAppliedDiscount> | null;
    /**
     * 
     * @type {Array<SuggestedDiscount>}
     * @memberof Order
     */
    suggestedDiscounts?: Array<SuggestedDiscount> | null;
    /**
     * 
     * @type {Array<SuggestedDiscount>}
     * @memberof Order
     */
    rejectedDiscounts?: Array<SuggestedDiscount> | null;
    /**
     * Custom data for a given vendor set within the commerce process.
     * @type {object}
     * @memberof Order
     */
    data?: object | null;
    /**
     * Storage for any additional/custom tax data.
     * @type {object}
     * @memberof Order
     */
    taxData?: object | null;
    /**
     * Combined price for all cart items, including all selected options but excluding any discounts.
     * @type {number}
     * @memberof Order
     */
    subtotal?: number | null;
    /**
     * Combined price for all cart items, including all selected options as well as any discounts.
     * @type {number}
     * @memberof Order
     */
    discountedSubtotal?: number | null;
    /**
     * Amount of the discounts applied to all items in the cart. This is a negative number.  This also includes the order level discounts.
     * @type {number}
     * @memberof Order
     */
    discountTotal?: number | null;
    /**
     * Subtotal minus the discounted total
     * @type {number}
     * @memberof Order
     */
    discountedTotal?: number | null;
    /**
     * Shipping does not appear on cart.
     * @type {number}
     * @memberof Order
     */
    shippingTotal?: number | null;
    /**
     * Shipping total without discounts applied.
     * @type {number}
     * @memberof Order
     */
    shippingSubTotal?: number | null;
    /**
     * Not implemented. Tax does not appear on cart.
     * @type {number}
     * @memberof Order
     */
    shippingTaxTotal?: number | null;
    /**
     * Total tax on handling
     * @type {number}
     * @memberof Order
     */
    handlingTaxTotal?: number | null;
    /**
     * Not implemented. Tax does not appear on cart.
     * @type {number}
     * @memberof Order
     */
    itemTaxTotal?: number | null;
    /**
     * Tax does not appear on cart.
     * @type {number}
     * @memberof Order
     */
    taxTotal?: number | null;
    /**
     * Not implemented. Total cost of fees for all items in the cart.
     * @type {number}
     * @memberof Order
     */
    feeTotal?: number | null;
    /**
     * Final total amount of the order including all discounts, shipping, and tax.
     * @type {number}
     * @memberof Order
     */
    total?: number | null;
    /**
     * Line Item Subtotals with Order Adjustments
     * @type {number}
     * @memberof Order
     */
    lineItemSubtotalWithOrderAdjustments?: number | null;
    /**
     * Shipping Amount before discount and adjustments
     * @type {number}
     * @memberof Order
     */
    shippingAmountBeforeDiscountsAndAdjustments?: number | null;
    /**
     * Occasionally the commerce runtime may validate that item/product names, descriptions, and prices have not changed. 
     * If changed, it updates LastValidationDate.
     * @type {string}
     * @memberof Order
     */
    lastValidationDate?: string | null;
    /**
     * When the order will no longer be active. That is, the order is considered abandoned. 
     * Orders of anonymous shoppers expire after 14 days of inactivity. 
     * An order never expires for shoppers who are logged into their account. 
     * Date in UTC Date/Time.
     * @type {string}
     * @memberof Order
     */
    expirationDate?: string | null;
    /**
     * List of messages displayed by the system based on the last cart action, for example, when a product price has changed or is out-of-stock. System-supplied and read-only.
     * @type {Array<CommerceRuntimeChangeMessage>}
     * @memberof Order
     */
    changeMessages?: Array<CommerceRuntimeChangeMessage> | null;
    /**
     * Extra properties (key-value pairs) that extend the primary object. Think of this as a property bag of string keys and string values.
     * @type {Array<ExtendedProperty>}
     * @memberof Order
     */
    extendedProperties?: Array<ExtendedProperty> | null;
    /**
     * List of Mozu.CommerceRuntime.Contracts.Commerce.ThresholdMessage objects that are valid for the current value of the cart/order.
     * @type {Array<CommerceRuntimeThresholdMessage>}
     * @memberof Order
     */
    discountThresholdMessages?: Array<CommerceRuntimeThresholdMessage> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof Order
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * Internal notes that a merchant may add to the order. Maximum 250 characters.
 * @export
 * @interface OrderNote
 */
export interface OrderNote {
    /**
     * Unique identifier of the note. System-supplied and read-only.
     * @type {string}
     * @memberof OrderNote
     */
    id?: string | null;
    /**
     * Text of the note. Maximum 250 characters.
     * @type {string}
     * @memberof OrderNote
     */
    text?: string | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof OrderNote
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * Validation message returned by an order validator.
 * @export
 * @interface OrderValidationMessage
 */
export interface OrderValidationMessage {
    /**
     * Order item id that this message applies to.  Can be empty.
     * @type {string}
     * @memberof OrderValidationMessage
     */
    orderItemId?: string | null;
    /**
     * Identifier to indicate the type of the message, See OrderValidatorMessageTypeConst for options.
     * @type {string}
     * @memberof OrderValidationMessage
     */
    messageType?: string | null;
    /**
     * Actual message returned by the validator.
     * @type {string}
     * @memberof OrderValidationMessage
     */
    message?: string | null;
}
/**
 * The result of an order validator.
 * @export
 * @interface OrderValidationResult
 */
export interface OrderValidationResult {
    /**
     * Identifier set by the capability that states the id of this specific validation attempt
     * @type {string}
     * @memberof OrderValidationResult
     */
    validationId?: string | null;
    /**
     * Identifier set by the capability that states the specific name of this validator.
     * @type {string}
     * @memberof OrderValidationResult
     */
    validatorName?: string | null;
    /**
     * Identifies the type of the validator (types are enumerated in OrderValidatorTypeConst)
     * @type {string}
     * @memberof OrderValidationResult
     */
    validatorType?: string | null;
    /**
     * Status of the order validation result.  See OrderValidatorStatusConst for options.
     * @type {string}
     * @memberof OrderValidationResult
     */
    status?: string | null;
    /**
     * DateTime that this validation result was created
     * @type {string}
     * @memberof OrderValidationResult
     */
    createdDate?: string | null;
    /**
     * Messages returned by the order validator
     * @type {Array<OrderValidationMessage>}
     * @memberof OrderValidationResult
     */
    messages?: Array<OrderValidationMessage> | null;
}
/**
 * An item in a package representing a particular product.
 * @export
 * @interface PackageItem
 */
export interface PackageItem {
    /**
     * Code of the Product to be fulfilled.
     * @type {string}
     * @memberof PackageItem
     */
    productCode?: string | null;
    /**
     * Quantity of the order item
     * @type {number}
     * @memberof PackageItem
     */
    quantity?: number;
    /**
     * The type of fulfillment item
     * @type {string}
     * @memberof PackageItem
     */
    fulfillmentItemType?: string | null;
    /**
     * The line id associated with the fulfillment.
     * @type {number}
     * @memberof PackageItem
     */
    lineId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PackageItem
     */
    optionAttributeFQN?: string | null;
}
/**
 * 
 * @export
 * @interface PackingSlipItemDetail
 */
export interface PackingSlipItemDetail {
    /**
     * Gets or Sets Attributes
     * @type {{ [key: string]: any; }}
     * @memberof PackingSlipItemDetail
     */
    attributes?: { [key: string]: any; } | null;
    /**
     * Gets or Sets LineId
     * @type {number}
     * @memberof PackingSlipItemDetail
     */
    lineId?: number | null;
    /**
     * Gets or Sets OriginalOrderItemId
     * @type {string}
     * @memberof PackingSlipItemDetail
     */
    originalOrderItemId?: string | null;
    /**
     * Gets or Sets Quantity
     * @type {number}
     * @memberof PackingSlipItemDetail
     */
    quantity?: number | null;
}
/**
 * Payment transaction associated with this order. It is the entire payment interchange between the merchant who is forwarding the customer's payment 
 * information and the payment service who is authorizing and capturing payment. Payment can be either by credit card, check, or PayPal. (PayPal not
 * currently supported.)
 * @export
 * @interface Payment
 */
export interface Payment {
    /**
     * Unique identifier of this order transaction.
     * @type {string}
     * @memberof Payment
     */
    id?: string | null;
    /**
     * 
     * @type {PaymentActionTarget}
     * @memberof Payment
     */
    groupId?: PaymentActionTarget;
    /**
     * Unique identifier of the transaction, specified by the payment service processesing this transaction.
     * @type {string}
     * @memberof Payment
     */
    paymentServiceTransactionId?: string | null;
    /**
     * Actions available to the payment
     * @type {Array<string>}
     * @memberof Payment
     */
    availableActions?: Array<string> | null;
    /**
     * Unique identifier of the order with which this transaction is associated.
     * @type {string}
     * @memberof Payment
     */
    orderId?: string | null;
    /**
     * Type of Payment
     * @type {string}
     * @memberof Payment
     */
    paymentType?: string | null;
    /**
     * The source of data for this payment.  By default, this will be set to 'mozu'
     * @type {string}
     * @memberof Payment
     */
    paymentWorkflow?: string | null;
    /**
     * The external/third party transaction Id for this payment. This is used to store the transaction Id from digital wallet like Visa Checkout
     * @type {string}
     * @memberof Payment
     */
    externalTransactionId?: string | null;
    /**
     * 
     * @type {BillingInfo}
     * @memberof Payment
     */
    billingInfo?: BillingInfo;
    /**
     * Custom data from payment providers
     * @type {object}
     * @memberof Payment
     */
    data?: object | null;
    /**
     * Current status of this transaction which are described by the PaymentStatusConst class.
     * @type {string}
     * @memberof Payment
     */
    status?: string | null;
    /**
     * List of sub payments that correspond to child orders in case of multiship orders.
     * @type {Array<SubPayment>}
     * @memberof Payment
     */
    subPayments?: Array<SubPayment> | null;
    /**
     * List of intereactions for this transaction. A transaction is created upon authorization and lasts across the payment 
     * interchange, which can consist of multiple interactions, such as consecutive captures.
     * @type {Array<PaymentInteraction>}
     * @memberof Payment
     */
    interactions?: Array<PaymentInteraction> | null;
    /**
     * If true, the product is purchased or fulfilled at regular intervals, for example, 
     * monthly billing or a subscription. (Not currently supported.)
     * @type {boolean}
     * @memberof Payment
     */
    isRecurring?: boolean;
    /**
     * Amount collected on the payment
     * @type {number}
     * @memberof Payment
     */
    amountCollected?: number;
    /**
     * Amount credited back to the payment.
     * @type {number}
     * @memberof Payment
     */
    amountCredited?: number;
    /**
     * Derived from the Amount on the initial payment create, used to help storefront determine how much can be captured for multiple payments.
     * See Order.AmountRemainingForPayment for an example.
     * @type {number}
     * @memberof Payment
     */
    amountRequested?: number;
    /**
     * Change messages related to the payment.
     * @type {Array<CommerceRuntimeChangeMessage>}
     * @memberof Payment
     */
    changeMessages?: Array<CommerceRuntimeChangeMessage> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof Payment
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {GatewayGiftCard}
     * @memberof Payment
     */
    gatewayGiftCard?: GatewayGiftCard;
    /**
     * Stores the Installment Plan code. Installment is only supported on subscription orders
     * @type {string}
     * @memberof Payment
     */
    installmentPlanCode?: string | null;
}
/**
 * 
 * @export
 * @interface PaymentActionTarget
 */
export interface PaymentActionTarget {
    /**
     * Specifies if the Mozu.CommerceRuntime.Contracts.Payments.PaymentActionTarget.TargetId is a Checkout Id, Order Id, or Return Id.
     * @type {string}
     * @memberof PaymentActionTarget
     */
    targetType?: string | null;
    /**
     * The Id of the Checkout/Order/Return to target.
     * @type {string}
     * @memberof PaymentActionTarget
     */
    targetId?: string | null;
    /**
     * The number of the Checkout/Order/Return to target.
     * @type {number}
     * @memberof PaymentActionTarget
     */
    targetNumber?: number | null;
}
/**
 * If the customer is paying by credit card, the card holder's details, such as the name on the card, number, billing 
 * address, and expiration dates.
 * @export
 * @interface PaymentCard
 */
export interface PaymentCard {
    /**
     * Credit card number.
     * @type {string}
     * @memberof PaymentCard
     */
    paymentServiceCardId?: string | null;
    /**
     * If true, the credit card is charged on a regular interval, such as for a subscription. (Not supported currently.)
     * @type {boolean}
     * @memberof PaymentCard
     */
    isUsedRecurring?: boolean | null;
    /**
     * Card holder's name as it appears on the card.
     * @type {string}
     * @memberof PaymentCard
     */
    nameOnCard?: string | null;
    /**
     * If true, the card information is stored in the customer's account.
     * @type {boolean}
     * @memberof PaymentCard
     */
    isCardInfoSaved?: boolean;
    /**
     * If true, the card is tokenized by external provider
     * @type {boolean}
     * @memberof PaymentCard
     */
    isTokenized?: boolean;
    /**
     * Last four digit of Credit card
     * Only for OMS Only tenant.
     * @type {string}
     * @memberof PaymentCard
     */
    ccLastFour?: string | null;
    /**
     * Card type such as Visa, MasterCard, American Express, or Discover.
     * @type {string}
     * @memberof PaymentCard
     */
    paymentOrCardType?: string | null;
    /**
     * The visible part of the card number that the merchant uses to refer to 
     * payment information, for example, the last for digits of the card number.
     * @type {string}
     * @memberof PaymentCard
     */
    cardNumberPartOrMask?: string | null;
    /**
     * Month when the card expires.
     * @type {number}
     * @memberof PaymentCard
     */
    expireMonth?: number;
    /**
     * Year when the card expires.
     * @type {number}
     * @memberof PaymentCard
     */
    expireYear?: number;
    /**
     * Year when the card expires.
     * @type {string}
     * @memberof PaymentCard
     */
    bin?: string | null;
}
/**
 * 
 * @export
 * @interface PaymentCardReference
 */
export interface PaymentCardReference {
    /**
     * Card type such as Visa, MasterCard, American Express, or Discover.
     * @type {string}
     * @memberof PaymentCardReference
     */
    paymentOrCardType?: string | null;
    /**
     * The visible part of the card number that the merchant uses to refer to 
     * payment information, for example, the last for digits of the card number.
     * @type {string}
     * @memberof PaymentCardReference
     */
    cardNumberPartOrMask?: string | null;
    /**
     * Month when the card expires.
     * @type {number}
     * @memberof PaymentCardReference
     */
    expireMonth?: number;
    /**
     * Year when the card expires.
     * @type {number}
     * @memberof PaymentCardReference
     */
    expireYear?: number;
    /**
     * Year when the card expires.
     * @type {string}
     * @memberof PaymentCardReference
     */
    bin?: string | null;
}
/**
 * Payment gateway reponse data
 * @export
 * @interface PaymentGatewayResponseData
 */
export interface PaymentGatewayResponseData {
    /**
     * Key from payment gateway
     * @type {string}
     * @memberof PaymentGatewayResponseData
     */
    key?: string | null;
    /**
     * Value from payment gateway
     * @type {string}
     * @memberof PaymentGatewayResponseData
     */
    value?: string | null;
}
/**
 * A single interaction of a potential list of intereactions for a transaction. The scope of the transaction is the entire payment
 * interchange. It is created upon authorization and is used for all subsequent interactions performed against the authorize,
 * such as consecutive captures.
 * @export
 * @interface PaymentInteraction
 */
export interface PaymentInteraction {
    /**
     * Unique identifier of this payment transaction interaction.
     * @type {string}
     * @memberof PaymentInteraction
     */
    id?: string | null;
    /**
     * Unique identifier of the gateway interaction. Used for credit card transactions, where the
     * payment service creates a GatewayInteractionId for each transaction interaction.
     * @type {number}
     * @memberof PaymentInteraction
     */
    gatewayInteractionId?: number | null;
    /**
     * Unique identifier of the original transaction of which this current interaction is a part.
     * @type {string}
     * @memberof PaymentInteraction
     */
    paymentId?: string | null;
    /**
     * Unique identifier of the order with which this transaction is associated.
     * @type {string}
     * @memberof PaymentInteraction
     */
    orderId?: string | null;
    /**
     * 
     * @type {PaymentActionTarget}
     * @memberof PaymentInteraction
     */
    target?: PaymentActionTarget;
    /**
     * ISO currency code for the transaction. Currently, only USD is supported.
     * @type {string}
     * @memberof PaymentInteraction
     */
    currencyCode?: string | null;
    /**
     * Types of transaction interactions which can be "Authorization," "Capture," "AuthorizeAndCapture,"
     * "Void," or "Credit," "CheckRequested," or "CheckReceived."
     * @type {string}
     * @memberof PaymentInteraction
     */
    interactionType?: string | null;
    /**
     * If paying by check, the check number.
     * @type {string}
     * @memberof PaymentInteraction
     */
    checkNumber?: string | null;
    /**
     * Status of the payment transaction interaction which can be either "Success" or "Failure."
     * @type {string}
     * @memberof PaymentInteraction
     */
    status?: string | null;
    /**
     * Status of the payment when the transaction interaction was created
     * @type {string}
     * @memberof PaymentInteraction
     */
    paymentEntryStatus?: string | null;
    /**
     * If true, the product is purchased or fulfilled at regular intervals, for example, a monthly billing or a subscription. (Not currently implemented.)
     * @type {boolean}
     * @memberof PaymentInteraction
     */
    isRecurring?: boolean | null;
    /**
     * If the payment is a manual payment, this is set to true
     * @type {boolean}
     * @memberof PaymentInteraction
     */
    isManual?: boolean;
    /**
     * Unique identifier of the transaction supplied by PCIaaS.
     * @type {string}
     * @memberof PaymentInteraction
     */
    gatewayTransactionId?: string | null;
    /**
     * If required by the payment gateway, the authorization code of the transaction. Supplied by PCIaaS.
     * @type {string}
     * @memberof PaymentInteraction
     */
    gatewayAuthCode?: string | null;
    /**
     * Gateway AVS Codes. Supplied by PCIaaS.
     * @type {string}
     * @memberof PaymentInteraction
     */
    gatewayAVSCodes?: string | null;
    /**
     * Gateway CVV2 Codes. Supplied by PCIaaS.
     * @type {string}
     * @memberof PaymentInteraction
     */
    gatewayCVV2Codes?: string | null;
    /**
     * Gateway response code. Supplied by PCIaaS.
     * @type {string}
     * @memberof PaymentInteraction
     */
    gatewayResponseCode?: string | null;
    /**
     * Gateway response text. Supplied by PCIaaS.
     * @type {string}
     * @memberof PaymentInteraction
     */
    gatewayResponseText?: string | null;
    /**
     * A List of payment response data required to act on authorization when using external order management systems
     * @type {Array<PaymentGatewayResponseData>}
     * @memberof PaymentInteraction
     */
    gatewayResponseData?: Array<PaymentGatewayResponseData> | null;
    /**
     * Unique identifier of previous PaymentTransactionInteraction that this PaymentTransactionInteraction is modifying.
     * For instance, when crediting a capture, set the PaymentTransactionInteractionIdReference to the capture PaymentTransactionInteractionID.
     * @type {number}
     * @memberof PaymentInteraction
     */
    paymentTransactionInteractionIdReference?: number | null;
    /**
     * Amount of funds associated with this interaction.
     * @type {number}
     * @memberof PaymentInteraction
     */
    amount?: number | null;
    /**
     * Note to be entered by merchant/application
     * @type {string}
     * @memberof PaymentInteraction
     */
    note?: string | null;
    /**
     * Date the interaction occurred
     * @type {string}
     * @memberof PaymentInteraction
     */
    interactionDate?: string | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof PaymentInteraction
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * Return Id, if the interaction is a Credit for a return-refund.
     * @type {string}
     * @memberof PaymentInteraction
     */
    returnId?: string | null;
    /**
     * Refund Id, if the interaction is for a stand alone refund.
     * @type {string}
     * @memberof PaymentInteraction
     */
    refundId?: string | null;
    /**
     * Stores pairings of shipment number to shipment total for all captured shipments. This was added for generating TLogs.
     * @type {Array<CapturableShipmentSummary>}
     * @memberof PaymentInteraction
     */
    capturableShipmentsSummary?: Array<CapturableShipmentSummary> | null;
}
/**
 * 
 * @export
 * @interface PaymentToken
 */
export interface PaymentToken {
    /**
     * 
     * @type {string}
     * @memberof PaymentToken
     */
    paymentServiceTokenId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaymentToken
     */
    type?: string | null;
}
/**
 * Represents a pickup by a customer from a merchant.
 * @export
 * @interface Pickup
 */
export interface Pickup {
    /**
     * ID of the fulfillment unit.
     * @type {string}
     * @memberof Pickup
     */
    id?: string | null;
    /**
     * A human-readable identifier for this fulfillment unit.  If not set on create, will be autogenerated as a string of the form
     *     {fulfillmentUnitType} #{next available int}
     * @type {string}
     * @memberof Pickup
     */
    code?: string | null;
    /**
     * Status of the fulfillment unit
     * See FulfillmentStatusConst
     * @type {string}
     * @memberof Pickup
     */
    status?: string | null;
    /**
     * List of items in the fulfillment unit
     * @type {Array<CommerceRuntimePickupItem>}
     * @memberof Pickup
     */
    items?: Array<CommerceRuntimePickupItem> | null;
    /**
     * Date of the pickup
     * @type {string}
     * @memberof Pickup
     */
    fulfillmentDate?: string | null;
    /**
     * Location code from which to obtain this item
     * @type {string}
     * @memberof Pickup
     */
    fulfillmentLocationCode?: string | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof Pickup
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * Actions that can be taken on this fulfillment unit
     * @type {Array<string>}
     * @memberof Pickup
     */
    availableActions?: Array<string> | null;
    /**
     * Change messages related to the fulfillment unit.
     * @type {Array<CommerceRuntimeChangeMessage>}
     * @memberof Pickup
     */
    changeMessages?: Array<CommerceRuntimeChangeMessage> | null;
}
/**
 * 
 * @export
 * @interface ProductBase
 */
export interface ProductBase {
    /**
     * Merchant-created code that uniquely identifies the product.
     * @type {string}
     * @memberof ProductBase
     */
    productCode?: string | null;
    /**
     * Name of the product, this is the current value of the product's name in the language specified by LocaleCode.
     * @type {string}
     * @memberof ProductBase
     */
    name?: string | null;
    /**
     * Short description of the product in the language specified by LocaleCode.
     * @type {string}
     * @memberof ProductBase
     */
    description?: string | null;
    /**
     * Goods Type
     * @type {string}
     * @memberof ProductBase
     */
    goodsType?: string | null;
    /**
     * Indicates that this product ships by itself.
     * @type {boolean}
     * @memberof ProductBase
     */
    isPackagedStandAlone?: boolean;
    /**
     * 
     * @type {ProductStock}
     * @memberof ProductBase
     */
    stock?: ProductStock;
    /**
     * Reservation ID associated with this product in the bundle.
     * @type {number}
     * @memberof ProductBase
     */
    productReservationId?: number | null;
    /**
     * Allocation ID associated with this product on this order.
     * @type {number}
     * @memberof ProductBase
     */
    allocationId?: number | null;
    /**
     * Allocation ID associated with this product on this order.
     * @type {string}
     * @memberof ProductBase
     */
    allocationExpiration?: string | null;
    /**
     * 
     * @type {CommerceRuntimePackageMeasurements}
     * @memberof ProductBase
     */
    measurements?: CommerceRuntimePackageMeasurements;
    /**
     * Fulfillment status of the product.
     * @type {string}
     * @memberof ProductBase
     */
    fulfillmentStatus?: string | null;
}
/**
 * 
 * @export
 * @interface ProductStock
 */
export interface ProductStock {
    /**
     * 
     * @type {boolean}
     * @memberof ProductStock
     */
    manageStock?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ProductStock
     */
    isOnBackOrder?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProductStock
     */
    availableDate?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ProductStock
     */
    stockAvailable?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ProductStock
     */
    aggregateInventory?: number | null;
    /**
     * 
     * @type {Array<CommerceRuntimeFutureInventory>}
     * @memberof ProductStock
     */
    futureInventories?: Array<CommerceRuntimeFutureInventory> | null;
    /**
     * 
     * @type {boolean}
     * @memberof ProductStock
     */
    isSubstitutable?: boolean | null;
}
/**
 * Purchase order payment
 * @export
 * @interface PurchaseOrderPayment
 */
export interface PurchaseOrderPayment {
    /**
     * Purchase order number
     * @type {string}
     * @memberof PurchaseOrderPayment
     */
    purchaseOrderNumber?: string | null;
    /**
     * 
     * @type {CommerceRuntimePurchaseOrderPaymentTerm}
     * @memberof PurchaseOrderPayment
     */
    paymentTerm?: CommerceRuntimePurchaseOrderPaymentTerm;
    /**
     * Memo/custom fields
     * @type {Array<CommerceRuntimePurchaseOrderCustomField>}
     * @memberof PurchaseOrderPayment
     */
    customFields?: Array<CommerceRuntimePurchaseOrderCustomField> | null;
}
/**
 * Refund associated with an order. A refund is a single exchange of money from merchant to customer
 * that either encapsulates a refund to a credit card or an issuance of a store credit.
 * A refund does not reduce the 'amount collected' on an order and it is possible for a refund to exceed the total order amount.
 * @export
 * @interface Refund
 */
export interface Refund {
    /**
     * Unique identifier of this order transaction.
     * @type {string}
     * @memberof Refund
     */
    id?: string | null;
    /**
     * Unique identifier of the order with which this refund is associated.
     * @type {string}
     * @memberof Refund
     */
    orderId?: string | null;
    /**
     * Merchant-entered reason for this refund.
     * @type {string}
     * @memberof Refund
     */
    reason?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Refund
     */
    reasonCode?: string | null;
    /**
     * 
     * @type {Payment}
     * @memberof Refund
     */
    payment?: Payment;
    /**
     * Amount refunded.
     * @type {number}
     * @memberof Refund
     */
    amount?: number;
    /**
     * Refund Method.
     * @type {string}
     * @memberof Refund
     */
    refundMethod?: string | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof Refund
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * 
 * @export
 * @interface ShipmentItem
 */
export interface ShipmentItem {
    /**
     * 
     * @type {number}
     * @memberof ShipmentItem
     */
    lineId?: number;
    /**
     * 
     * @type {string}
     * @memberof ShipmentItem
     */
    originalOrderItemId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShipmentItem
     */
    parentId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShipmentItem
     */
    productCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShipmentItem
     */
    variationProductCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShipmentItem
     */
    optionAttributeFQN?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShipmentItem
     */
    name?: string | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof ShipmentItem
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof ShipmentItem
     */
    fulfillmentLocationCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShipmentItem
     */
    imageUrl?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ShipmentItem
     */
    isTaxable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ShipmentItem
     */
    quantity?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentItem
     */
    unitPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentItem
     */
    actualPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentItem
     */
    overridePrice?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ShipmentItem
     */
    itemDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentItem
     */
    lineItemCost?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentItem
     */
    itemTax?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentItem
     */
    shipping?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentItem
     */
    shippingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentItem
     */
    shippingTax?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentItem
     */
    handling?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentItem
     */
    handlingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentItem
     */
    handlingTax?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentItem
     */
    duty?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ShipmentItem
     */
    isPackagedStandAlone?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof ShipmentItem
     */
    readyForPickupQuantity?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ShipmentItem
     */
    backorderReleaseDate?: string | null;
    /**
     * 
     * @type {CommerceRuntimePackageMeasurements}
     * @memberof ShipmentItem
     */
    measurements?: CommerceRuntimePackageMeasurements;
    /**
     * 
     * @type {Array<CommerceRuntimeProductOption>}
     * @memberof ShipmentItem
     */
    options?: Array<CommerceRuntimeProductOption> | null;
    /**
     * 
     * @type {object}
     * @memberof ShipmentItem
     */
    data?: object | null;
    /**
     * 
     * @type {object}
     * @memberof ShipmentItem
     */
    taxData?: object | null;
    /**
     * 
     * @type {number}
     * @memberof ShipmentItem
     */
    weightedShipmentAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentItem
     */
    weightedLineItemTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentItem
     */
    weightedShippingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentItem
     */
    weightedShippingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentItem
     */
    weightedHandlingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentItem
     */
    weightedHandlingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentItem
     */
    weightedDutyAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentItem
     */
    taxableShipping?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentItem
     */
    taxableLineItemCost?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentItem
     */
    taxableHandling?: number;
    /**
     * 
     * @type {Array<CommerceRuntimeFulfillmentField>}
     * @memberof ShipmentItem
     */
    fulfillmentFields?: Array<CommerceRuntimeFulfillmentField> | null;
    /**
     * 
     * @type {boolean}
     * @memberof ShipmentItem
     */
    isAssemblyRequired?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof ShipmentItem
     */
    parentItemId?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ShipmentItem
     */
    childItemIds?: Array<string> | null;
    /**
     * 
     * @type {Array<CommerceRuntimeGiftCard>}
     * @memberof ShipmentItem
     */
    giftCards?: Array<CommerceRuntimeGiftCard> | null;
    /**
     * 
     * @type {string}
     * @memberof ShipmentItem
     */
    locatorName?: string | null;
    /**
     * 
     * @type {Array<InventoryTags>}
     * @memberof ShipmentItem
     */
    inventoryTags?: Array<InventoryTags> | null;
    /**
     * 
     * @type {number}
     * @memberof ShipmentItem
     */
    lineItemAdjustment?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof ShipmentItem
     */
    isReservedInventory?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ShipmentItem
     */
    cartItemId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShipmentItem
     */
    sku?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShipmentItem
     */
    partNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShipmentItem
     */
    upc?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ShipmentItem
     */
    isSubstitutable?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof ShipmentItem
     */
    originalLineId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ShipmentItem
     */
    originalQuantity?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ShipmentItem
     */
    substituteQuantity?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ShipmentItem
     */
    purchaseLocation?: string | null;
    /**
     * Indicate item is gift or not
     * @type {boolean}
     * @memberof ShipmentItem
     */
    isGift?: boolean | null;
    /**
     * Gift message for item
     * @type {string}
     * @memberof ShipmentItem
     */
    giftMessage?: string | null;
}
/**
 * Value of the shipping discount.
 * @export
 * @interface ShippingDiscount
 */
export interface ShippingDiscount {
    /**
     * Unique identifier of the shipping method discount.
     * @type {string}
     * @memberof ShippingDiscount
     */
    methodCode?: string | null;
    /**
     * 
     * @type {CommerceRuntimeAppliedDiscount}
     * @memberof ShippingDiscount
     */
    discount?: CommerceRuntimeAppliedDiscount;
}
/**
 * Shipping pricing information which includes the cost to the merchant and the price that the customer pays.
 * @export
 * @interface ShippingPrice
 */
export interface ShippingPrice {
    /**
     * ISO currency code such as US dollars. Currently, only USD is supported.
     * @type {string}
     * @memberof ShippingPrice
     */
    currencyCode?: string | null;
    /**
     * How much the customer pays for shipping which includes any shipping discounts that the merchant offers.
     * @type {number}
     * @memberof ShippingPrice
     */
    price?: number | null;
}
/**
 * 
 * @export
 * @interface SubPayment
 */
export interface SubPayment {
    /**
     * 
     * @type {string}
     * @memberof SubPayment
     */
    status?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SubPayment
     */
    amountCollected?: number;
    /**
     * 
     * @type {number}
     * @memberof SubPayment
     */
    amountCredited?: number;
    /**
     * 
     * @type {number}
     * @memberof SubPayment
     */
    amountRequested?: number;
    /**
     * 
     * @type {number}
     * @memberof SubPayment
     */
    amountRefunded?: number;
    /**
     * 
     * @type {PaymentActionTarget}
     * @memberof SubPayment
     */
    target?: PaymentActionTarget;
}
/**
 * 
 * @export
 * @interface SubscriptionAction
 */
export interface SubscriptionAction {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionAction
     */
    actionName?: string | null;
    /**
     * 
     * @type {SubscriptionReason}
     * @memberof SubscriptionAction
     */
    reason?: SubscriptionReason;
}
/**
 * 
 * @export
 * @interface SubscriptionAdjustment
 */
export interface SubscriptionAdjustment {
    /**
     * 
     * @type {SubscriptionReason}
     * @memberof SubscriptionAdjustment
     */
    reason?: SubscriptionReason;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionAdjustment
     */
    itemAdjustment?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionAdjustment
     */
    shippingAdjustment?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionAdjustment
     */
    handlingAdjustment?: number | null;
}
/**
 * 
 * @export
 * @interface SubscriptionAttribute
 */
export interface SubscriptionAttribute {
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof SubscriptionAttribute
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionAttribute
     */
    fullyQualifiedName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionAttribute
     */
    attributeDefinitionId?: number | null;
    /**
     * 
     * @type {Array<any>}
     * @memberof SubscriptionAttribute
     */
    values?: Array<any> | null;
}
/**
 * 
 * @export
 * @interface SubscriptionCoupons
 */
export interface SubscriptionCoupons {
    /**
     * 
     * @type {Array<string>}
     * @memberof SubscriptionCoupons
     */
    couponCodes?: Array<string> | null;
}
/**
 * 
 * @export
 * @interface SubscriptionInfo
 */
export interface SubscriptionInfo {
    /**
     * Indicates commerce item is subscribed or not.
     * @type {boolean}
     * @memberof SubscriptionInfo
     */
    required?: boolean | null;
    /**
     * 
     * @type {Frequency}
     * @memberof SubscriptionInfo
     */
    frequency?: Frequency;
    /**
     * 
     * @type {Trial}
     * @memberof SubscriptionInfo
     */
    trial?: Trial;
}
/**
 * 
 * @export
 * @interface SubscriptionItem
 */
export interface SubscriptionItem {
    /**
     * Unique identifier of the order line item. System-supplied and read-only.
     * @type {string}
     * @memberof SubscriptionItem
     */
    id?: string | null;
    /**
     * Location code from which to obtain this item
     * @type {string}
     * @memberof SubscriptionItem
     */
    fulfillmentLocationCode?: string | null;
    /**
     * Fulfillment method used to fulfill this item
     * @type {string}
     * @memberof SubscriptionItem
     */
    fulfillmentMethod?: string | null;
    /**
     * Product code of the parent item if split because of the splitItemOnSubsription attribute on the item
     * @type {string}
     * @memberof SubscriptionItem
     */
    parentItemCode?: string | null;
    /**
     * is onetime item
     * @type {boolean}
     * @memberof SubscriptionItem
     */
    isOnetimeItem?: boolean;
    /**
     * Locale code for language that appears in text and descriptions on the site, for example, en_US. 
     * This is not the currency code. Currently only en_US is supported.
     * @type {string}
     * @memberof SubscriptionItem
     */
    localeCode?: string | null;
    /**
     * The location where the product is being purchased.. default is null. Products can have different prices
     * by purchaseLocation via custom priceListResolution...
     * @type {string}
     * @memberof SubscriptionItem
     */
    purchaseLocation?: string | null;
    /**
     * The line id assigned to the order item. Visible only in the Admin, this is set from the Admin or
     * in CommerceRuntime when a cart is converted to an order.
     * @type {number}
     * @memberof SubscriptionItem
     */
    lineId?: number | null;
    /**
     * 
     * @type {CommerceRuntimeProduct}
     * @memberof SubscriptionItem
     */
    product?: CommerceRuntimeProduct;
    /**
     * Number of products ordered.
     * @type {number}
     * @memberof SubscriptionItem
     */
    quantity?: number;
    /**
     * If true, the cart item lists a product that can be purchased or fulfilled at regular intervals, for example, monthly billing or a subscription.
     * @type {boolean}
     * @memberof SubscriptionItem
     */
    isRecurring?: boolean | null;
    /**
     * Not implemented. If true, the cart item is eligible for tax.
     * @type {boolean}
     * @memberof SubscriptionItem
     */
    isTaxable?: boolean | null;
    /**
     * Line item subtotal (quantity multiplied by price) before discounts.
     * @type {number}
     * @memberof SubscriptionItem
     */
    subtotal?: number | null;
    /**
     * Line item extended total (quantity multiplied by unit extended price) before discounts.
     * @type {number}
     * @memberof SubscriptionItem
     */
    extendedTotal?: number | null;
    /**
     * Line item subtotal (quantity multiplied by price) before discounts.
     * @type {number}
     * @memberof SubscriptionItem
     */
    taxableTotal?: number | null;
    /**
     * How much the shopper saves with the applied discount or sale price. This is a negative number.
     * @type {number}
     * @memberof SubscriptionItem
     */
    discountTotal?: number | null;
    /**
     * Subtotal minus any discounts.
     * @type {number}
     * @memberof SubscriptionItem
     */
    discountedTotal?: number | null;
    /**
     * Total price of taxes that apply to products in this item.
     * @type {number}
     * @memberof SubscriptionItem
     */
    itemTaxTotal?: number | null;
    /**
     * Total price of taxes that apply to the shipping of this item.
     * @type {number}
     * @memberof SubscriptionItem
     */
    shippingTaxTotal?: number | null;
    /**
     * Total price of shipping that apply to this item.
     * @type {number}
     * @memberof SubscriptionItem
     */
    shippingTotal?: number | null;
    /**
     * Handling Amount for this item
     * @type {number}
     * @memberof SubscriptionItem
     */
    handlingAmount?: number | null;
    /**
     * Not implemented. Total cost of fees that apply to this item.
     * @type {number}
     * @memberof SubscriptionItem
     */
    feeTotal?: number | null;
    /**
     * Total price of this cart item taking into account any discounts.
     * @type {number}
     * @memberof SubscriptionItem
     */
    total?: number | null;
    /**
     * 
     * @type {CommerceUnitPrice}
     * @memberof SubscriptionItem
     */
    unitPrice?: CommerceUnitPrice;
    /**
     * 
     * @type {CommerceRuntimeAppliedLineItemProductDiscount}
     * @memberof SubscriptionItem
     */
    productDiscount?: CommerceRuntimeAppliedLineItemProductDiscount;
    /**
     * A list of discounts applied to the product
     * @type {Array<CommerceRuntimeAppliedLineItemProductDiscount>}
     * @memberof SubscriptionItem
     */
    productDiscounts?: Array<CommerceRuntimeAppliedLineItemProductDiscount> | null;
    /**
     * A discount applied to the shipping
     * @type {Array<CommerceRuntimeAppliedLineItemShippingDiscount>}
     * @memberof SubscriptionItem
     */
    shippingDiscounts?: Array<CommerceRuntimeAppliedLineItemShippingDiscount> | null;
    /**
     * Custom data for a given vendor set within the commerce process.
     * @type {object}
     * @memberof SubscriptionItem
     */
    data?: object | null;
    /**
     * Storage for any additional/custom tax data.
     * @type {object}
     * @memberof SubscriptionItem
     */
    taxData?: object | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof SubscriptionItem
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * Shipping amount before Discounts and adjustments
     * @type {number}
     * @memberof SubscriptionItem
     */
    shippingAmountBeforeDiscountsAndAdjustments?: number | null;
    /**
     * Order Level Manual Adjustment applied to this Item
     * @type {number}
     * @memberof SubscriptionItem
     */
    weightedOrderAdjustment?: number | null;
    /**
     * Order Level Discount applied to this Item
     * @type {number}
     * @memberof SubscriptionItem
     */
    weightedOrderDiscount?: number | null;
    /**
     * Order Level taxable sub total
     * @type {number}
     * @memberof SubscriptionItem
     */
    adjustedLineItemSubtotal?: number | null;
    /**
     * Taxable Subtotal including Weighted Order amounts
     * @type {number}
     * @memberof SubscriptionItem
     */
    totalWithoutWeightedShippingAndHandling?: number | null;
    /**
     * Order Level tax applied to this Item
     * @type {number}
     * @memberof SubscriptionItem
     */
    weightedOrderTax?: number | null;
    /**
     * Order Level Shipping applied to this Item
     * @type {number}
     * @memberof SubscriptionItem
     */
    weightedOrderShipping?: number | null;
    /**
     * Order Level Shipping discount applied to this Item
     * @type {number}
     * @memberof SubscriptionItem
     */
    weightedOrderShippingDiscount?: number | null;
    /**
     * Order Level Shipping Manual Adjustment applied to this Item
     * @type {number}
     * @memberof SubscriptionItem
     */
    weightedOrderShippingManualAdjustment?: number | null;
    /**
     * Order Level Shipping Tax applied to this Item
     * @type {number}
     * @memberof SubscriptionItem
     */
    weightedOrderShippingTax?: number | null;
    /**
     * Order Level handling fee applied to this item
     * @type {number}
     * @memberof SubscriptionItem
     */
    weightedOrderHandlingFee?: number | null;
    /**
     * Order Level handling fee tax applied to this item
     * @type {number}
     * @memberof SubscriptionItem
     */
    weightedOrderHandlingFeeTax?: number | null;
    /**
     * Order Level handling fee discount applied to this item
     * @type {number}
     * @memberof SubscriptionItem
     */
    weightedOrderHandlingFeeDiscount?: number | null;
    /**
     * Order Level Duty applied to this Item
     * @type {number}
     * @memberof SubscriptionItem
     */
    weightedOrderDuty?: number | null;
    /**
     * Line item total with line item, Tax, Weighted Tax with Weighted shipping and handling costs
     * @type {number}
     * @memberof SubscriptionItem
     */
    totalWithWeightedShippingAndHandling?: number | null;
    /**
     * Order level handling adjusment that applies to this item.
     * @type {number}
     * @memberof SubscriptionItem
     */
    weightedOrderHandlingAdjustment?: number | null;
    /**
     * Track the discoutid from which the item was auto added
     * @type {number}
     * @memberof SubscriptionItem
     */
    autoAddDiscountId?: number | null;
    /**
     * Assembly Required for this order item
     * @type {boolean}
     * @memberof SubscriptionItem
     */
    isAssemblyRequired?: boolean;
    /**
     * List of Child Item Ids for this order item
     * @type {Array<string>}
     * @memberof SubscriptionItem
     */
    childItemIds?: Array<string> | null;
    /**
     * Indicates Parent Item Id for this order item
     * @type {string}
     * @memberof SubscriptionItem
     */
    parentItemId?: string | null;
    /**
     * 
     * @type {Array<InventoryTags>}
     * @memberof SubscriptionItem
     */
    inventoryTags?: Array<InventoryTags> | null;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionItem
     */
    lineItemAdjustment?: number | null;
    /**
     * Indicate Duty Amount for this item.
     * @type {number}
     * @memberof SubscriptionItem
     */
    dutyAmount?: number | null;
}
/**
 * 
 * @export
 * @interface SubscriptionNextOrderDate
 */
export interface SubscriptionNextOrderDate {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionNextOrderDate
     */
    nextOrderDate?: string;
}
/**
 * 
 * @export
 * @interface SubscriptionPriceList
 */
export interface SubscriptionPriceList {
    /**
     * Price-list code for the Subscription
     * @type {string}
     * @memberof SubscriptionPriceList
     */
    priceListCode?: string | null;
}
/**
 * 
 * @export
 * @interface SubscriptionReason
 */
export interface SubscriptionReason {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionReason
     */
    reasonCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionReason
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionReason
     */
    moreInfo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionReason
     */
    actionName?: string | null;
}
/**
 * 
 * @export
 * @interface SubscriptionReasonCollection
 */
export interface SubscriptionReasonCollection {
    /**
     * 
     * @type {number}
     * @memberof SubscriptionReasonCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<SubscriptionReasonOption>}
     * @memberof SubscriptionReasonCollection
     */
    items?: Array<SubscriptionReasonOption> | null;
}
/**
 * 
 * @export
 * @interface SubscriptionReasonOption
 */
export interface SubscriptionReasonOption {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionReasonOption
     */
    reasonCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionReasonOption
     */
    name?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionReasonOption
     */
    needsMoreInfo?: boolean;
}
/**
 * 
 * @export
 * @interface SubscriptionRuntimeSubscription
 */
export interface SubscriptionRuntimeSubscription {
    /**
     * Unique identifier.
     * @type {string}
     * @memberof SubscriptionRuntimeSubscription
     */
    id?: string | null;
    /**
     * Unique identifier of the Site.
     * @type {number}
     * @memberof SubscriptionRuntimeSubscription
     */
    siteId?: number;
    /**
     * Unique identifier of the Tenant.
     * @type {number}
     * @memberof SubscriptionRuntimeSubscription
     */
    tenantId?: number;
    /**
     * Subscription number.
     * @type {number}
     * @memberof SubscriptionRuntimeSubscription
     */
    number?: number;
    /**
     * The parent order id from which the subscription was created.
     * @type {string}
     * @memberof SubscriptionRuntimeSubscription
     */
    parentOrderId?: string | null;
    /**
     * List of items in the Subscription.
     * @type {Array<SubscriptionItem>}
     * @memberof SubscriptionRuntimeSubscription
     */
    items?: Array<SubscriptionItem> | null;
    /**
     * 
     * @type {Payment}
     * @memberof SubscriptionRuntimeSubscription
     */
    payment?: Payment;
    /**
     * Price-list code for the Subscription
     * @type {string}
     * @memberof SubscriptionRuntimeSubscription
     */
    priceListCode?: string | null;
    /**
     * Notes
     * @type {Array<OrderNote>}
     * @memberof SubscriptionRuntimeSubscription
     */
    notes?: Array<OrderNote> | null;
    /**
     * Change Messages
     * @type {Array<CommerceRuntimeChangeMessage>}
     * @memberof SubscriptionRuntimeSubscription
     */
    changeMessages?: Array<CommerceRuntimeChangeMessage> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof SubscriptionRuntimeSubscription
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {FulfillmentInfo}
     * @memberof SubscriptionRuntimeSubscription
     */
    fulfillmentInfo?: FulfillmentInfo;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionRuntimeSubscription
     */
    userId?: string | null;
    /**
     * Unique identifier of the customer account.
     * @type {number}
     * @memberof SubscriptionRuntimeSubscription
     */
    customerAccountId?: number | null;
    /**
     * Email address for checkout
     * @type {string}
     * @memberof SubscriptionRuntimeSubscription
     */
    email?: string | null;
    /**
     * The customers tax ID. If Customer Account ID exists in the system, will set this.
     * @type {string}
     * @memberof SubscriptionRuntimeSubscription
     */
    readonly customerTaxId?: string | null;
    /**
     * Unique identifier of the customer account.
     * @type {boolean}
     * @memberof SubscriptionRuntimeSubscription
     */
    readonly isTaxExempt?: boolean | null;
    /**
     * ISO Currency Code.
     * @type {string}
     * @memberof SubscriptionRuntimeSubscription
     */
    currencyCode?: string | null;
    /**
     * Custom data for a given vendor set within the commerce process.
     * @type {object}
     * @memberof SubscriptionRuntimeSubscription
     */
    data?: object | null;
    /**
     * Storage for any additional/custom tax data.
     * @type {object}
     * @memberof SubscriptionRuntimeSubscription
     */
    taxData?: object | null;
    /**
     * Unique identifier of the channel for this item.
     * @type {string}
     * @memberof SubscriptionRuntimeSubscription
     */
    channelCode?: string | null;
    /**
     * Identifies the location at which the order was placed if the order was placed externally.
     * @type {string}
     * @memberof SubscriptionRuntimeSubscription
     */
    locationCode?: string | null;
    /**
     * IP address of the user placing the order. (User or customer?)
     * @type {string}
     * @memberof SubscriptionRuntimeSubscription
     */
    ipAddress?: string | null;
    /**
     * Source device of the user placing the order. (User or customer?)
     * @type {string}
     * @memberof SubscriptionRuntimeSubscription
     */
    sourceDevice?: string | null;
    /**
     * Identifies the Visit ID that was current when the order was placed or when the cart was last updated.
     * @type {string}
     * @memberof SubscriptionRuntimeSubscription
     */
    visitId?: string | null;
    /**
     * Identifies the web session used to place the order or last update the cart.
     * @type {string}
     * @memberof SubscriptionRuntimeSubscription
     */
    webSessionId?: string | null;
    /**
     * Determines the interaction type that a customer will use to create this object.
     * Valid values are: Website, Store, Call, Unknown
     * @type {string}
     * @memberof SubscriptionRuntimeSubscription
     */
    customerInteractionType?: string | null;
    /**
     * 
     * @type {Frequency}
     * @memberof SubscriptionRuntimeSubscription
     */
    frequency?: Frequency;
    /**
     * 
     * @type {Frequency}
     * @memberof SubscriptionRuntimeSubscription
     */
    previousFrequency?: Frequency;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof SubscriptionRuntimeSubscription
     */
    frequencyAuditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionRuntimeSubscription
     */
    nextOrderDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionRuntimeSubscription
     */
    previousNextOrderDate?: string | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof SubscriptionRuntimeSubscription
     */
    nextOrderDateAuditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionRuntimeSubscription
     */
    lastContinuityOrderDateOnSubPaused?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionRuntimeSubscription
     */
    ordinal?: number;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionRuntimeSubscription
     */
    paymentErrorCode?: string | null;
    /**
     * 
     * @type {Trial}
     * @memberof SubscriptionRuntimeSubscription
     */
    trial?: Trial;
    /**
     * 
     * @type {Array<CommerceRuntimeAppliedDiscount>}
     * @memberof SubscriptionRuntimeSubscription
     */
    orderDiscounts?: Array<CommerceRuntimeAppliedDiscount> | null;
    /**
     * Subtotal before any coupon codes, taxes, fees, etc.
     * @type {number}
     * @memberof SubscriptionRuntimeSubscription
     */
    subTotal?: number;
    /**
     * The total value of item-level product discounts.
     * @type {number}
     * @memberof SubscriptionRuntimeSubscription
     */
    itemLevelProductDiscountTotal?: number;
    /**
     * The total value of all line item adjustments
     * @type {number}
     * @memberof SubscriptionRuntimeSubscription
     */
    itemLevelAdjustmentsTotal?: number;
    /**
     * The total value of order-level (group-level) product discounts.
     * @type {number}
     * @memberof SubscriptionRuntimeSubscription
     */
    orderLevelProductDiscountTotal?: number;
    /**
     * Total tax on products.
     * @type {number}
     * @memberof SubscriptionRuntimeSubscription
     */
    itemTaxTotal?: number;
    /**
     * 
     * @type {Adjustment}
     * @memberof SubscriptionRuntimeSubscription
     */
    adjustment?: Adjustment;
    /**
     * The total product cost, accounting for discounts and tax.
     * @type {number}
     * @memberof SubscriptionRuntimeSubscription
     */
    itemTotal?: number;
    /**
     * Final total
     * @type {number}
     * @memberof SubscriptionRuntimeSubscription
     */
    total?: number;
    /**
     * 
     * @type {Array<ShippingDiscount>}
     * @memberof SubscriptionRuntimeSubscription
     */
    shippingDiscounts?: Array<ShippingDiscount> | null;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionRuntimeSubscription
     */
    itemLevelShippingDiscountTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionRuntimeSubscription
     */
    orderLevelShippingDiscountTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionRuntimeSubscription
     */
    shippingAmount?: number;
    /**
     * 
     * @type {Adjustment}
     * @memberof SubscriptionRuntimeSubscription
     */
    shippingAdjustment?: Adjustment;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionRuntimeSubscription
     */
    shippingSubTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionRuntimeSubscription
     */
    shippingTax?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionRuntimeSubscription
     */
    shippingTaxTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionRuntimeSubscription
     */
    shippingTotal?: number;
    /**
     * 
     * @type {Array<CommerceRuntimeAppliedDiscount>}
     * @memberof SubscriptionRuntimeSubscription
     */
    handlingDiscounts?: Array<CommerceRuntimeAppliedDiscount> | null;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionRuntimeSubscription
     */
    itemLevelHandlingDiscountTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionRuntimeSubscription
     */
    orderLevelHandlingDiscountTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionRuntimeSubscription
     */
    handlingAmount?: number | null;
    /**
     * 
     * @type {Adjustment}
     * @memberof SubscriptionRuntimeSubscription
     */
    handlingAdjustment?: Adjustment;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionRuntimeSubscription
     */
    handlingSubTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionRuntimeSubscription
     */
    handlingTax?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionRuntimeSubscription
     */
    handlingTaxTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionRuntimeSubscription
     */
    handlingTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionRuntimeSubscription
     */
    dutyAmount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionRuntimeSubscription
     */
    dutyTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionRuntimeSubscription
     */
    feeTotal?: number;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionRuntimeSubscription
     */
    status?: string | null;
    /**
     * 
     * @type {Array<SubscriptionReason>}
     * @memberof SubscriptionRuntimeSubscription
     */
    reasons?: Array<SubscriptionReason> | null;
    /**
     * Coupon codes associated with this Subscription.
     * @type {Array<string>}
     * @memberof SubscriptionRuntimeSubscription
     */
    couponCodes?: Array<string> | null;
    /**
     * A list of invalid coupons that were attempted on the Subscription
     * @type {Array<InvalidCoupon>}
     * @memberof SubscriptionRuntimeSubscription
     */
    invalidCoupons?: Array<InvalidCoupon> | null;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionRuntimeSubscription
     */
    isImport?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionRuntimeSubscription
     */
    externalId?: string | null;
    /**
     * Line Item Subtotals with Order Adjustments
     * @type {number}
     * @memberof SubscriptionRuntimeSubscription
     */
    lineItemSubtotalWithOrderAdjustments?: number | null;
    /**
     * Discounted Subtotal
     * @type {number}
     * @memberof SubscriptionRuntimeSubscription
     */
    discountedSubtotal?: number;
    /**
     * counter to keep track of nextOrderDate limit.
     * @type {number}
     * @memberof SubscriptionRuntimeSubscription
     */
    nextOrderDateOffsetCounter?: number | null;
    /**
     * counter to keep track of skip limit
     * @type {number}
     * @memberof SubscriptionRuntimeSubscription
     */
    skipCounter?: number | null;
    /**
     * Is this subscription a draft version
     * @type {boolean}
     * @memberof SubscriptionRuntimeSubscription
     */
    isDraft?: boolean | null;
    /**
     * Does this subscription have a draft version.
     * @type {boolean}
     * @memberof SubscriptionRuntimeSubscription
     */
    hasDraft?: boolean | null;
    /**
     * Is this subscription draft is a partial draft.
     * @type {boolean}
     * @memberof SubscriptionRuntimeSubscription
     */
    isPartialDraft?: boolean;
    /**
     * Has order reminder email sent.
     * @type {boolean}
     * @memberof SubscriptionRuntimeSubscription
     */
    isOrderReminderEmailSent?: boolean;
    /**
     * Has reactivation reminder email sent.
     * @type {boolean}
     * @memberof SubscriptionRuntimeSubscription
     */
    isReactivationReminderEmailSent?: boolean;
    /**
     * This property is being used for reactivation email templete
     * @type {string}
     * @memberof SubscriptionRuntimeSubscription
     */
    reactivationDate?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionRuntimeSubscription
     */
    pauseDate?: string | null;
    /**
     * 
     * @type {Array<SubscriptionAttribute>}
     * @memberof SubscriptionRuntimeSubscription
     */
    attributes?: Array<SubscriptionAttribute> | null;
    /**
     * LastErrorMessage from subscription ProcessingInfo.
     * @type {string}
     * @memberof SubscriptionRuntimeSubscription
     */
    processingErrorMessage?: string | null;
    /**
     * Indicate when "order now" and "partial order now" performed last time.
     * @type {string}
     * @memberof SubscriptionRuntimeSubscription
     */
    lastOrderNowDate?: string | null;
}
/**
 * 
 * @export
 * @interface SubscriptionRuntimeSubscriptionCollection
 */
export interface SubscriptionRuntimeSubscriptionCollection {
    /**
     * 
     * @type {number}
     * @memberof SubscriptionRuntimeSubscriptionCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionRuntimeSubscriptionCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionRuntimeSubscriptionCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionRuntimeSubscriptionCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<SubscriptionRuntimeSubscription>}
     * @memberof SubscriptionRuntimeSubscriptionCollection
     */
    items?: Array<SubscriptionRuntimeSubscription> | null;
}
/**
 * 
 * @export
 * @interface SuggestedDiscount
 */
export interface SuggestedDiscount {
    /**
     * 
     * @type {string}
     * @memberof SuggestedDiscount
     */
    productCode?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof SuggestedDiscount
     */
    autoAdd?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SuggestedDiscount
     */
    discountId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof SuggestedDiscount
     */
    hasMultipleProducts?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SuggestedDiscount
     */
    hasOptions?: boolean;
}
/**
 * 
 * @export
 * @interface Trial
 */
export interface Trial {
    /**
     * Indicates if the trial is enabled
     * @type {boolean}
     * @memberof Trial
     */
    enabled?: boolean;
    /**
     * Trial duration in days
     * @type {number}
     * @memberof Trial
     */
    duration?: number;
    /**
     * Product code to substitute once the trial period is finished.
     * @type {string}
     * @memberof Trial
     */
    substituteProductCode?: string | null;
    /**
     * Product quantity to substitute once the trail period is finished.
     * @type {number}
     * @memberof Trial
     */
    substituteProductQuantity?: number;
    /**
     * Variation product code to substitute once the trail period is finished.
     * @type {string}
     * @memberof Trial
     */
    substituteVariationProductCode?: string | null;
    /**
     * Configurable Options to substitute once the trial period is finished.
     * @type {Array<CommerceRuntimeProductOption>}
     * @memberof Trial
     */
    substituteProductOptions?: Array<CommerceRuntimeProductOption> | null;
}
