/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface AbstractFulfillmentItem
 */
export interface AbstractFulfillmentItem {
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
}
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
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof Adjustment
     */
    internalComment?: string;
}
/**
 * 
 * @export
 * @interface AlternateContact
 */
export interface AlternateContact {
    /**
     * Email Address of alternate contact during order process
     * @type {string}
     * @memberof AlternateContact
     */
    emailAddress?: string;
    /**
     * First Name of alternate contact during order process
     * @type {string}
     * @memberof AlternateContact
     */
    firstName?: string;
    /**
     * Last Name of alternate contact during order process
     * @type {string}
     * @memberof AlternateContact
     */
    lastNameOrSurname?: string;
    /**
     * Phone Number of alternate contact during order process
     * @type {string}
     * @memberof AlternateContact
     */
    phoneNumber?: string | null;
}
/**
 * 
 * @export
 * @interface AppliedLineItemProductDiscount
 */
export interface AppliedLineItemProductDiscount {
    /**
     * Code of the coupon associated with the discount if a coupon code is required to get the discount.
     * @type {string}
     * @memberof AppliedLineItemProductDiscount
     */
    couponCode?: string | null;
    /**
     * Stores any custom data sent from external discounts.
     * @type {object}
     * @memberof AppliedLineItemProductDiscount
     */
    data?: object | null;
    /**
     * 
     * @type {Discount}
     * @memberof AppliedLineItemProductDiscount
     */
    discount?: Discount;
    /**
     * Determines whether or not this discount is set up to be ignored by the pricing runtime.
     * @type {boolean}
     * @memberof AppliedLineItemProductDiscount
     */
    excluded?: boolean | null;
    /**
     * Group identifier for the discount.
     * @type {string}
     * @memberof AppliedLineItemProductDiscount
     */
    groupId?: string | null;
    /**
     * Value of the discount applied. This is a negative number to be subtracted from the original price to get the final price.
     * @type {number}
     * @memberof AppliedLineItemProductDiscount
     */
    impact?: number | null;
    /**
     * Determines if the discount applies to the sale price of the order
     * @type {boolean}
     * @memberof AppliedLineItemProductDiscount
     */
    appliesToSalePrice?: boolean | null;
    /**
     * Impact for a quantity of one product; that is, the value of the discount for one product.
     * @type {number}
     * @memberof AppliedLineItemProductDiscount
     * @deprecated
     */
    impactPerUnit?: number | null;
    /**
     * Quantity of products priced. This is always one unless calculating pricing on the order or cart.
     * @type {number}
     * @memberof AppliedLineItemProductDiscount
     * @deprecated
     */
    productQuantity?: number | null;
    /**
     * The number of the line item that can be used for this particular discount.
     * @type {number}
     * @memberof AppliedLineItemProductDiscount
     */
    discountQuantity?: number;
}
/**
 * 
 * @export
 * @interface AppliedLineItemProductDiscountAllOf
 */
export interface AppliedLineItemProductDiscountAllOf {
    /**
     * Determines if the discount applies to the sale price of the order
     * @type {boolean}
     * @memberof AppliedLineItemProductDiscountAllOf
     */
    appliesToSalePrice?: boolean | null;
    /**
     * The number of the line item that can be used for this particular discount.
     * @type {number}
     * @memberof AppliedLineItemProductDiscountAllOf
     */
    discountQuantity?: number;
}
/**
 * 
 * @export
 * @interface AppliedLineItemShippingDiscount
 */
export interface AppliedLineItemShippingDiscount {
    /**
     * 
     * @type {CommerceRuntimeAppliedDiscount}
     * @memberof AppliedLineItemShippingDiscount
     */
    discount?: CommerceRuntimeAppliedDiscount;
    /**
     * Unique identifier of the shipping method discount.
     * @type {string}
     * @memberof AppliedLineItemShippingDiscount
     */
    methodCode?: string | null;
    /**
     * The number of the line item that can be used for this particular discount.
     * @type {number}
     * @memberof AppliedLineItemShippingDiscount
     */
    discountQuantity?: number;
    /**
     * The impact of this discount pur discount quantity.
     * @type {number}
     * @memberof AppliedLineItemShippingDiscount
     */
    impactPerUnit?: number;
}
/**
 * 
 * @export
 * @interface AppliedLineItemShippingDiscountAllOf
 */
export interface AppliedLineItemShippingDiscountAllOf {
    /**
     * 
     * @type {CommerceRuntimeAppliedDiscount}
     * @memberof AppliedLineItemShippingDiscountAllOf
     */
    discount?: CommerceRuntimeAppliedDiscount;
    /**
     * The number of the line item that can be used for this particular discount.
     * @type {number}
     * @memberof AppliedLineItemShippingDiscountAllOf
     */
    discountQuantity?: number;
    /**
     * The impact of this discount pur discount quantity.
     * @type {number}
     * @memberof AppliedLineItemShippingDiscountAllOf
     */
    impactPerUnit?: number;
    /**
     * Unique identifier of the shipping method discount.
     * @type {string}
     * @memberof AppliedLineItemShippingDiscountAllOf
     */
    methodCode?: string | null;
}
/**
 * Details of the discount applied to a product.
 * @export
 * @interface AppliedProductDiscount
 */
export interface AppliedProductDiscount {
    /**
     * Code of the coupon associated with the discount if a coupon code is required to get the discount.
     * @type {string}
     * @memberof AppliedProductDiscount
     */
    couponCode?: string | null;
    /**
     * Stores any custom data sent from external discounts.
     * @type {object}
     * @memberof AppliedProductDiscount
     */
    data?: object | null;
    /**
     * 
     * @type {Discount}
     * @memberof AppliedProductDiscount
     */
    discount?: Discount;
    /**
     * Determines whether or not this discount is set up to be ignored by the pricing runtime.
     * @type {boolean}
     * @memberof AppliedProductDiscount
     */
    excluded?: boolean | null;
    /**
     * Group identifier for the discount.
     * @type {string}
     * @memberof AppliedProductDiscount
     */
    groupId?: string | null;
    /**
     * Value of the discount applied. This is a negative number to be subtracted from the original price to get the final price.
     * @type {number}
     * @memberof AppliedProductDiscount
     */
    impact?: number | null;
    /**
     * Determines if the discount applies to the sale price of the order
     * @type {boolean}
     * @memberof AppliedProductDiscount
     */
    appliesToSalePrice?: boolean | null;
    /**
     * Impact for a quantity of one product; that is, the value of the discount for one product.
     * @type {number}
     * @memberof AppliedProductDiscount
     * @deprecated
     */
    impactPerUnit?: number | null;
    /**
     * Quantity of products priced. This is always one unless calculating pricing on the order or cart.
     * @type {number}
     * @memberof AppliedProductDiscount
     * @deprecated
     */
    productQuantity?: number | null;
}
/**
 * 
 * @export
 * @interface AppliedProductDiscountAllOf
 */
export interface AppliedProductDiscountAllOf {
    /**
     * Determines if the discount applies to the sale price of the order
     * @type {boolean}
     * @memberof AppliedProductDiscountAllOf
     */
    appliesToSalePrice?: boolean | null;
    /**
     * Impact for a quantity of one product; that is, the value of the discount for one product.
     * @type {number}
     * @memberof AppliedProductDiscountAllOf
     * @deprecated
     */
    impactPerUnit?: number | null;
    /**
     * Quantity of products priced. This is always one unless calculating pricing on the order or cart.
     * @type {number}
     * @memberof AppliedProductDiscountAllOf
     * @deprecated
     */
    productQuantity?: number | null;
}
/**
 * 
 * @export
 * @interface AppliedReturnRuleInfo
 */
export interface AppliedReturnRuleInfo {
    /**
     * Indicates if item is eligible for return after applying the return rule
     * @type {boolean}
     * @memberof AppliedReturnRuleInfo
     */
    isItemReturnable?: boolean | null;
    /**
     * Indicates if item is not eligible for return because it surpassed max return quantity
     * @type {boolean}
     * @memberof AppliedReturnRuleInfo
     */
    maxReturnQtyExceeded?: boolean | null;
    /**
     * 
     * @type {ReturnRuleInfo}
     * @memberof AppliedReturnRuleInfo
     */
    returnRuleInfo?: ReturnRuleInfo;
    /**
     * Indicates if item is not eligible for return because if passed the return window
     * @type {boolean}
     * @memberof AppliedReturnRuleInfo
     */
    returnWindowClosed?: boolean | null;
}
/**
 * 
 * @export
 * @interface AttributeEntityConfig
 */
export interface AttributeEntityConfig {
    /**
     * 
     * @type {CoreAuditInfo}
     * @memberof AttributeEntityConfig
     */
    auditInfo?: CoreAuditInfo;
    /**
     * 
     * @type {boolean}
     * @memberof AttributeEntityConfig
     */
    editable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AttributeEntityConfig
     */
    entityType?: string | null;
    /**
     * 
     * @type {number}
     * @memberof AttributeEntityConfig
     */
    id?: number | null;
}
/**
 * 
 * @export
 * @interface AttributeInheritanceRule
 */
export interface AttributeInheritanceRule {
    /**
     * 
     * @type {CoreAuditInfo}
     * @memberof AttributeInheritanceRule
     */
    auditInfo?: CoreAuditInfo;
    /**
     * 
     * @type {number}
     * @memberof AttributeInheritanceRule
     */
    id?: number | null;
    /**
     * 
     * @type {string}
     * @memberof AttributeInheritanceRule
     */
    inheritanceMode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttributeInheritanceRule
     */
    sourceEntityType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttributeInheritanceRule
     */
    targetEntityType?: string | null;
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
 * Group a set of changes made by a single user into a single audit history entry.
 * @export
 * @interface AuditRecord
 */
export interface AuditRecord {
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof AuditRecord
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * List of changes for this audit history entry.
     * @type {Array<AuditRecordChange>}
     * @memberof AuditRecord
     */
    changes?: Array<AuditRecordChange> | null;
    /**
     * 
     * @type {string}
     * @memberof AuditRecord
     */
    id?: string | null;
}
/**
 * Group all related audit changes into AuditRecordChange.
 * @export
 * @interface AuditRecordChange
 */
export interface AuditRecordChange {
    /**
     * List of actual changes.
     * @type {Array<AuditRecordChangeField>}
     * @memberof AuditRecordChange
     */
    fields?: Array<AuditRecordChangeField> | null;
    /**
     * This will applicable only to the nested objects (Collection) on the quote like Quote Items, Destination contacts.
     * This field will indicate which item in the collection got modified exactly.
     * Null path means it's not nested on the quote object.
     * @type {string}
     * @memberof AuditRecordChange
     */
    path?: string | null;
    /**
     * Indicate type of change like Add, Update, Remove.
     * @type {string}
     * @memberof AuditRecordChange
     */
    type?: string | null;
}
/**
 * This will contains actual change in the AuditHistory.
 * @export
 * @interface AuditRecordChangeField
 */
export interface AuditRecordChangeField {
    /**
     * Field/Property name which got Modified.
     * @type {string}
     * @memberof AuditRecordChangeField
     */
    name?: string | null;
    /**
     * Newly updated value of the field.
     * @type {string}
     * @memberof AuditRecordChangeField
     */
    newValue?: string | null;
    /**
     * Old value of the field.
     * @type {string}
     * @memberof AuditRecordChangeField
     */
    oldValue?: string | null;
}
/**
 * 
 * @export
 * @interface AutoRefundRequest
 */
export interface AutoRefundRequest {
    /**
     * 
     * @type {string}
     * @memberof AutoRefundRequest
     */
    itemId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof AutoRefundRequest
     */
    quantity?: number;
    /**
     * 
     * @type {boolean}
     * @memberof AutoRefundRequest
     */
    refundShippingAndHandling?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof AutoRefundRequest
     */
    returnProcessingFee?: number | null;
}
/**
 * Customer's payment details such as payment type (credit card, check by mail, or PayPal)
 * and cardholder information if payment is by credit card.
 * @export
 * @interface BillingInfo
 */
export interface BillingInfo {
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof BillingInfo
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * 
     * @type {Contact}
     * @memberof BillingInfo
     */
    billingContact?: Contact;
    /**
     * 
     * @type {PaymentCard}
     * @memberof BillingInfo
     */
    card?: PaymentCard;
    /**
     * 
     * @type {CheckPayment}
     * @memberof BillingInfo
     */
    check?: CheckPayment;
    /**
     * Name of custom stored credit type
     * @type {string}
     * @memberof BillingInfo
     */
    customCreditType?: string | null;
    /**
     * Custom data from payment providers
     * @type {object}
     * @memberof BillingInfo
     */
    data?: object | null;
    /**
     * 
     * @type {ExternalPaymentToken}
     * @memberof BillingInfo
     */
    externalToken?: ExternalPaymentToken;
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
     * Indicates that billing and shipping address are the same
     * @type {boolean}
     * @memberof BillingInfo
     */
    isSameBillingShippingAddress?: boolean;
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
     * @type {PurchaseOrderPayment}
     * @memberof BillingInfo
     */
    purchaseOrder?: PurchaseOrderPayment;
    /**
     * Recurring Payment Id returned by Payment Gateway
     * networkTransactionId for vantiv
     * previousTransactionId for cybersource etc
     * @type {string}
     * @memberof BillingInfo
     */
    recurringTransactionId?: string | null;
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
     * 
     * @type {PaymentToken}
     * @memberof BillingInfo
     */
    token?: PaymentToken;
}
/**
 * Represents a contractual commitment between the seller and a B2B Account
 * to supply goods at predetermined prices and quantities over a specified period.
 * @export
 * @interface BlanketOrder
 */
export interface BlanketOrder {
    /**
     * Custom attributes at the header level.
     * @type {Array<BlanketOrderAttribute>}
     * @memberof BlanketOrder
     */
    attributes?: Array<BlanketOrderAttribute> | null;
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof BlanketOrder
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * Available lifecycle actions from the current status. Populated on read.
     * @type {Array<string>}
     * @memberof BlanketOrder
     */
    availableActions?: Array<string> | null;
    /**
     * 
     * @type {AlternateContact}
     * @memberof BlanketOrder
     */
    buyerContact?: AlternateContact;
    /**
     * 
     * @type {CommerceRuntimeCanceledReason}
     * @memberof BlanketOrder
     */
    canceledReason?: CommerceRuntimeCanceledReason;
    /**
     * Date when the order was cancelled. System-supplied, read-only.
     * @type {string}
     * @memberof BlanketOrder
     */
    cancelledDate?: string | null;
    /**
     * Change messages associated with this Blanket Order. Hydrated from a separate collection.
     * @type {Array<CommerceRuntimeChangeMessage>}
     * @memberof BlanketOrder
     */
    changeMessages?: Array<CommerceRuntimeChangeMessage> | null;
    /**
     * Channel code for multi-channel context.
     * @type {string}
     * @memberof BlanketOrder
     */
    channelCode?: string | null;
    /**
     * Currency code (default "USD").
     * @type {string}
     * @memberof BlanketOrder
     */
    currencyCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof BlanketOrder
     */
    customerAccountId?: number | null;
    /**
     * Extensibility data bag for tenant-specific custom data.
     * @type {object}
     * @memberof BlanketOrder
     */
    data?: object | null;
    /**
     * External reference identifier for integration with external systems.
     * @type {string}
     * @memberof BlanketOrder
     */
    externalId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BlanketOrder
     */
    id?: string | null;
    /**
     * Product commitment Items for this Blanket Order.
     * @type {Array<BlanketOrderItem>}
     * @memberof BlanketOrder
     */
    items?: Array<BlanketOrderItem> | null;
    /**
     * Internal notes for merchant use.
     * @type {Array<OrderNote>}
     * @memberof BlanketOrder
     */
    notes?: Array<OrderNote> | null;
    /**
     * Auto-generated sequential Blanket Order number. System-supplied, read-only.
     * @type {number}
     * @memberof BlanketOrder
     */
    number?: number | null;
    /**
     * Price list code for pricing context. Resolved and locked at create. Immutable.
     * @type {string}
     * @memberof BlanketOrder
     */
    priceListCode?: string | null;
    /**
     * Pricing mode: `Kibo` (default — prices resolved from catalog/price list) or
     * `External` (caller-supplied prices stored as-is). Immutable after create.
     * See Mozu.CommerceRuntime.Contracts.PricingModeConst.
     * @type {string}
     * @memberof BlanketOrder
     */
    pricingMode?: string | null;
    /**
     * Reservation mode for this blanket order. Values: `NetworkLevel` | `CallOffLevel`
     * (default). When `NetworkLevel`, the blanket's uncalled balance is tracked in a
     * ledger used for network-wide ATS/ATP netting.
     * Immutable after creation.
     * @type {string}
     * @memberof BlanketOrder
     */
    reservationMode?: string | null;
    /**
     * 
     * @type {AlternateContact}
     * @memberof BlanketOrder
     */
    sellerContact?: AlternateContact;
    /**
     * 
     * @type {number}
     * @memberof BlanketOrder
     */
    siteId?: number;
    /**
     * Current status managed by the StatusEngine transition table.
     * @type {string}
     * @memberof BlanketOrder
     */
    status?: string | null;
    /**
     * 
     * @type {number}
     * @memberof BlanketOrder
     */
    tenantId?: number;
    /**
     * 
     * @type {string}
     * @memberof BlanketOrder
     */
    userId?: string | null;
    /**
     * 
     * @type {ValidityPeriod}
     * @memberof BlanketOrder
     */
    validityPeriod?: ValidityPeriod;
    /**
     * Optimistic concurrency token. System-supplied.
     * @type {string}
     * @memberof BlanketOrder
     */
    version?: string | null;
}
/**
 * Result of aggregating blanket order remaining quantity. Includes the grand total,
 * per-product-code sums, and optional breakdowns by customer account and order status.
 * @export
 * @interface BlanketOrderAggregateResult
 */
export interface BlanketOrderAggregateResult {
    /**
     * Remaining quantity broken down by customer account. Each entry's `Key` is the
     * customer account id as a string, or `"anonymous"` for orders without an account.
     * @type {Array<BlanketOrderDemandEntry>}
     * @memberof BlanketOrderAggregateResult
     */
    byCustomer?: Array<BlanketOrderDemandEntry> | null;
    /**
     * Remaining quantity broken down by product code. Each entry's `Key` is a product code.
     * Only product codes with at least one matching item appear here (no zero-quantity back-fill).
     * @type {Array<BlanketOrderDemandEntry>}
     * @memberof BlanketOrderAggregateResult
     */
    byProductCode?: Array<BlanketOrderDemandEntry> | null;
    /**
     * Remaining quantity broken down by blanket order status. Each entry's `Key` is the
     * order-level status string (e.g. `"Active"`, `"Completed"`).
     * @type {Array<BlanketOrderDemandEntry>}
     * @memberof BlanketOrderAggregateResult
     */
    byStatus?: Array<BlanketOrderDemandEntry> | null;
    /**
     * Sum of `items[].remainingQuantity` across all matched blanket orders.
     * @type {number}
     * @memberof BlanketOrderAggregateResult
     */
    totalRemainingQuantity?: number;
}
/**
 * Custom attribute for Blanket Orders, following the same pattern
 * as OrderAttribute and ReturnAttribute.
 * Inherits FullyQualifiedName, AttributeDefinitionId, and Values
 * from AbstractAttribute.
 * @export
 * @interface BlanketOrderAttribute
 */
export interface BlanketOrderAttribute {
    /**
     * 
     * @type {number}
     * @memberof BlanketOrderAttribute
     */
    attributeDefinitionId?: number | null;
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof BlanketOrderAttribute
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof BlanketOrderAttribute
     */
    fullyQualifiedName?: string | null;
    /**
     * 
     * @type {Array<any>}
     * @memberof BlanketOrderAttribute
     */
    values?: Array<any> | null;
}
/**
 * Paged collection of Blanket Orders.
 * @export
 * @interface BlanketOrderCollection
 */
export interface BlanketOrderCollection {
    /**
     * 
     * @type {Array<BlanketOrder>}
     * @memberof BlanketOrderCollection
     */
    items?: Array<BlanketOrder> | null;
    /**
     * 
     * @type {number}
     * @memberof BlanketOrderCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof BlanketOrderCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof BlanketOrderCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof BlanketOrderCollection
     */
    totalCount?: number;
}
/**
 * A single bucket in a blanket-order aggregate breakdown: the summed remaining quantity
 * for a group (product code, customer account, or status) plus a count of matching orders.
 * @export
 * @interface BlanketOrderDemandEntry
 */
export interface BlanketOrderDemandEntry {
    /**
     * The grouping key value. Meaning depends on the breakdown dimension:
     * product code string, customer account id string, or order status string.
     * @type {string}
     * @memberof BlanketOrderDemandEntry
     */
    key?: string | null;
    /**
     * Number of distinct blanket orders in this bucket.
     * @type {number}
     * @memberof BlanketOrderDemandEntry
     */
    orderCount?: number;
    /**
     * Sum of `items[].remainingQuantity` for blanket orders in this bucket.
     * @type {number}
     * @memberof BlanketOrderDemandEntry
     */
    totalRemainingQuantity?: number;
}
/**
 * A single product commitment within a Blanket Order.
 * Each line tracks its own lifecycle independently.
 * @export
 * @interface BlanketOrderItem
 */
export interface BlanketOrderItem {
    /**
     * Line-level extensible attributes. Use Mozu.CommerceRuntime.Contracts.BlanketOrders.BlanketOrderAttribute on
     * `BlanketOrder.Attributes` for header-level attributes.
     * @type {Array<BlanketOrderItemAttribute>}
     * @memberof BlanketOrderItem
     */
    attributes?: Array<BlanketOrderItemAttribute> | null;
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof BlanketOrderItem
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * Total quantity consumed by call-off orders. System-managed.
     * @type {number}
     * @memberof BlanketOrderItem
     */
    consumedQuantity?: number;
    /**
     * Unique identifier for this line. System-supplied.
     * @type {string}
     * @memberof BlanketOrderItem
     */
    id?: string | null;
    /**
     * Auto-assigned sequential line number within the order.
     * @type {number}
     * @memberof BlanketOrderItem
     */
    lineId?: number | null;
    /**
     * 
     * @type {BlanketOrderProductReference}
     * @memberof BlanketOrderItem
     */
    product?: BlanketOrderProductReference;
    /**
     * Total committed quantity for this product line.
     * @type {number}
     * @memberof BlanketOrderItem
     */
    quantity?: number;
    /**
     * Remaining available quantity (Quantity - ConsumedQuantity). System-managed.
     * @type {number}
     * @memberof BlanketOrderItem
     */
    remainingQuantity?: number;
    /**
     * Quantity currently reserved by active call-off allocations against this blanket item.
     * System-managed; not client-settable. Updated only via the internal consumption/
     * restoration ledger (BlanketOrderHandler.ConsumeAsync/RestoreAsync).
     * @type {number}
     * @memberof BlanketOrderItem
     */
    reservedQuantity?: number;
    /**
     * Current line status managed by the line-level transition table.
     * @type {string}
     * @memberof BlanketOrderItem
     */
    status?: string | null;
    /**
     * Agreed unit price for this product line.
     * @type {number}
     * @memberof BlanketOrderItem
     */
    unitPrice?: number;
    /**
     * Computed: Quantity - ReservedQuantity. The blanket's balance not yet reserved by
     * call-off allocations. Not persisted.
     * @type {number}
     * @memberof BlanketOrderItem
     */
    readonly unreservedQuantity?: number;
}
/**
 * Attribute instance on a Blanket Order line item.
 * Separate from Mozu.CommerceRuntime.Contracts.BlanketOrders.BlanketOrderAttribute (header-level) for type safety
 * and to allow consumers to distinguish header vs line attributes.
 * @export
 * @interface BlanketOrderItemAttribute
 */
export interface BlanketOrderItemAttribute {
    /**
     * 
     * @type {number}
     * @memberof BlanketOrderItemAttribute
     */
    attributeDefinitionId?: number | null;
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof BlanketOrderItemAttribute
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof BlanketOrderItemAttribute
     */
    fullyQualifiedName?: string | null;
    /**
     * 
     * @type {Array<any>}
     * @memberof BlanketOrderItemAttribute
     */
    values?: Array<any> | null;
}
/**
 * Lightweight product identity for Blanket Order Items.
 * Extended fields are stamped from the catalog at blanket creation
 * and carried through to consumption tracking and call-off integration.
 * @export
 * @interface BlanketOrderProductReference
 */
export interface BlanketOrderProductReference {
    /**
     * Bundle component lines. Populated only when Mozu.CommerceRuntime.Contracts.BlanketOrders.ProductReference.ProductUsage is "Bundle".
     * Stamped at create. Immutable.
     * @type {Array<BundledProduct>}
     * @memberof BlanketOrderProductReference
     */
    bundledProducts?: Array<BundledProduct> | null;
    /**
     * Returns VariationProductCode if not null/whitespace, otherwise ProductCode.
     * This value is computed on the domain model and mapped directly to the contract
     * via Mapster convention-based mapping — no recalculation on the contract side.
     * UI should use the items.product.combinedproductcode filter for variation-aware
     * product searches instead of items.product.productcode.
     * @type {string}
     * @memberof BlanketOrderProductReference
     */
    combinedProductCode?: string | null;
    /**
     * Fulfillment types the product supports (e.g. "Shipping", "Pickup"). Stamped from
     * the catalog at blanket create. Immutable.
     * @type {Array<string>}
     * @memberof BlanketOrderProductReference
     */
    fulfillmentTypesSupported?: Array<string> | null;
    /**
     * Goods type (e.g. "Physical", "Digital", "Service"). Routes shipment creation.
     * Stamped at create. Immutable.
     * @type {string}
     * @memberof BlanketOrderProductReference
     */
    goodsType?: string | null;
    /**
     * Indicates if this product is a bundle (ProductUsage="Bundle" and has bundled products).
     * @type {boolean}
     * @memberof BlanketOrderProductReference
     */
    readonly isBundle?: boolean;
    /**
     * Product display name.
     * @type {string}
     * @memberof BlanketOrderProductReference
     */
    name?: string | null;
    /**
     * Configurable option selections for this variant. Stamped at create. Immutable.
     * @type {Array<CommerceRuntimeProductOption>}
     * @memberof BlanketOrderProductReference
     */
    options?: Array<CommerceRuntimeProductOption> | null;
    /**
     * Product code used for identification.
     * @type {string}
     * @memberof BlanketOrderProductReference
     */
    productCode?: string | null;
    /**
     * Product usage type (e.g., "simple", "collection", "bundle_component", "Configurable").
     * Used to enforce product eligibility rules for blanket orders.
     * @type {string}
     * @memberof BlanketOrderProductReference
     */
    productUsage?: string | null;
    /**
     * For configurable products, the unique identifier of the product variation.
     * Either ProductCode or VariationProductCode must be provided.
     * @type {string}
     * @memberof BlanketOrderProductReference
     */
    variationProductCode?: string | null;
}
/**
 * 
 * @export
 * @interface BulkCancelError
 */
export interface BulkCancelError {
    /**
     * 
     * @type {string}
     * @memberof BulkCancelError
     */
    category?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BulkCancelError
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BulkCancelError
     */
    message?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof BulkCancelError
     */
    retryable?: boolean;
}
/**
 * 
 * @export
 * @interface BulkCancelRequest
 */
export interface BulkCancelRequest {
    /**
     * 
     * @type {string}
     * @memberof BulkCancelRequest
     */
    correlationId?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof BulkCancelRequest
     */
    orderIds?: Array<string> | null;
    /**
     * 
     * @type {CommerceRuntimeCanceledReason}
     * @memberof BulkCancelRequest
     */
    reason?: CommerceRuntimeCanceledReason;
}
/**
 * 
 * @export
 * @interface BulkCancelResult
 */
export interface BulkCancelResult {
    /**
     * 
     * @type {string}
     * @memberof BulkCancelResult
     */
    correlationId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BulkCancelResult
     */
    resourceType?: string | null;
    /**
     * 
     * @type {Array<BulkCancelResultItem>}
     * @memberof BulkCancelResult
     */
    results?: Array<BulkCancelResultItem> | null;
    /**
     * 
     * @type {number}
     * @memberof BulkCancelResult
     */
    totalFailed?: number;
    /**
     * 
     * @type {number}
     * @memberof BulkCancelResult
     */
    totalProcessed?: number;
    /**
     * 
     * @type {number}
     * @memberof BulkCancelResult
     */
    totalRequested?: number;
    /**
     * 
     * @type {number}
     * @memberof BulkCancelResult
     */
    totalSucceeded?: number;
}
/**
 * 
 * @export
 * @interface BulkCancelResultItem
 */
export interface BulkCancelResultItem {
    /**
     * 
     * @type {any}
     * @memberof BulkCancelResultItem
     */
    cancelledResource?: any | null;
    /**
     * 
     * @type {BulkCancelError}
     * @memberof BulkCancelResultItem
     */
    error?: BulkCancelError;
    /**
     * 
     * @type {string}
     * @memberof BulkCancelResultItem
     */
    orderId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BulkCancelResultItem
     */
    outcome?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BulkCancelResultItem
     */
    resourceType?: string | null;
}
/**
 * 
 * @export
 * @interface BulkShipmentItemAdjustment
 */
export interface BulkShipmentItemAdjustment {
    /**
     * 
     * @type {CommerceRuntimeAppeasementReason}
     * @memberof BulkShipmentItemAdjustment
     */
    appeasementReason?: CommerceRuntimeAppeasementReason;
    /**
     * Unit price override
     * @type {number}
     * @memberof BulkShipmentItemAdjustment
     */
    overridePrice?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BulkShipmentItemAdjustment
     */
    itemId?: number;
}
/**
 * 
 * @export
 * @interface BulkShipmentItemAdjustmentAllOf
 */
export interface BulkShipmentItemAdjustmentAllOf {
    /**
     * 
     * @type {number}
     * @memberof BulkShipmentItemAdjustmentAllOf
     */
    itemId?: number;
}
/**
 * 
 * @export
 * @interface BundleInfo
 */
export interface BundleInfo {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BundleInfo
     */
    attributes?: { [key: string]: any; } | null;
    /**
     * 
     * @type {string}
     * @memberof BundleInfo
     */
    imageUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BundleInfo
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BundleInfo
     */
    productCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof BundleInfo
     */
    quantity?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BundleInfo
     */
    unitPrice?: number | null;
}
/**
 * Describes products that are bundled inside of a main bundle product.
 * @export
 * @interface BundledProduct
 */
export interface BundledProduct {
    /**
     * Allocation ID associated with this product on this order.
     * @type {string}
     * @memberof BundledProduct
     */
    allocationExpiration?: string | null;
    /**
     * Allocation ID associated with this product on this order.
     * @type {number}
     * @memberof BundledProduct
     */
    allocationId?: number | null;
    /**
     * Short description of the product in the language specified by LocaleCode.
     * @type {string}
     * @memberof BundledProduct
     */
    description?: string | null;
    /**
     * Fulfillment status of the product.
     * @type {string}
     * @memberof BundledProduct
     */
    fulfillmentStatus?: string | null;
    /**
     * Goods Type
     * @type {string}
     * @memberof BundledProduct
     */
    goodsType?: string | null;
    /**
     * Indicates that this product ships by itself.
     * @type {boolean}
     * @memberof BundledProduct
     */
    isPackagedStandAlone?: boolean;
    /**
     * 
     * @type {CommerceRuntimePackageMeasurements}
     * @memberof BundledProduct
     */
    measurements?: CommerceRuntimePackageMeasurements;
    /**
     * Name of the product, this is the current value of the product's name in the language specified by LocaleCode.
     * @type {string}
     * @memberof BundledProduct
     */
    name?: string | null;
    /**
     * Merchant-created code that uniquely identifies the product.
     * @type {string}
     * @memberof BundledProduct
     */
    productCode?: string | null;
    /**
     * Reservation ID associated with this product in the bundle.
     * @type {number}
     * @memberof BundledProduct
     */
    productReservationId?: number | null;
    /**
     * 
     * @type {ProductStock}
     * @memberof BundledProduct
     */
    stock?: ProductStock;
    /**
     * Credit value.  Only populated if the bundled product is a gift card or digital credit
     * @type {number}
     * @memberof BundledProduct
     */
    creditValue?: number | null;
    /**
     * Only populated for extras
     * @type {number}
     * @memberof BundledProduct
     */
    deltaPrice?: number | null;
    /**
     * ImageUrl of product
     * @type {string}
     * @memberof BundledProduct
     */
    imageUrl?: string | null;
    /**
     * Fully Qualified Name of the selected option's attribute
     * @type {string}
     * @memberof BundledProduct
     */
    optionAttributeFQN?: string | null;
    /**
     * Value of the selected option
     * @type {any}
     * @memberof BundledProduct
     */
    optionValue?: any | null;
    /**
     * Quantity of the product included in the bundle.
     * @type {number}
     * @memberof BundledProduct
     */
    quantity?: number;
}
/**
 * 
 * @export
 * @interface BundledProductAllOf
 */
export interface BundledProductAllOf {
    /**
     * Credit value.  Only populated if the bundled product is a gift card or digital credit
     * @type {number}
     * @memberof BundledProductAllOf
     */
    creditValue?: number | null;
    /**
     * Only populated for extras
     * @type {number}
     * @memberof BundledProductAllOf
     */
    deltaPrice?: number | null;
    /**
     * ImageUrl of product
     * @type {string}
     * @memberof BundledProductAllOf
     */
    imageUrl?: string | null;
    /**
     * Fully Qualified Name of the selected option's attribute
     * @type {string}
     * @memberof BundledProductAllOf
     */
    optionAttributeFQN?: string | null;
    /**
     * Value of the selected option
     * @type {any}
     * @memberof BundledProductAllOf
     */
    optionValue?: any | null;
    /**
     * Quantity of the product included in the bundle.
     * @type {number}
     * @memberof BundledProductAllOf
     */
    quantity?: number;
}
/**
 * A buyer's delivery request, either linked to a Blanket Order or standalone.
 * @export
 * @interface CallOffOrder
 */
export interface CallOffOrder {
    /**
     * Custom attributes extending AbstractAttribute. Flows downstream to
     * Sales Orders and Shipments in later phases.
     * @type {Array<CallOffOrderAttribute>}
     * @memberof CallOffOrder
     */
    attributes?: Array<CallOffOrderAttribute> | null;
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof CallOffOrder
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * Actions valid for the current status. Computed on read; not persisted.
     * @type {Array<string>}
     * @memberof CallOffOrder
     */
    availableActions?: Array<string> | null;
    /**
     * Identifier of the parent Blanket Order if this call-off draws from one;
     * null for standalone call-offs.
     * @type {string}
     * @memberof CallOffOrder
     */
    blanketOrderId?: string | null;
    /**
     * User who cancelled the call-off order.
     * @type {string}
     * @memberof CallOffOrder
     */
    cancelledBy?: string | null;
    /**
     * Cancellation timestamp.
     * @type {string}
     * @memberof CallOffOrder
     */
    cancelledDate?: string | null;
    /**
     * 
     * @type {CommerceRuntimeCanceledReason}
     * @memberof CallOffOrder
     */
    cancelledReason?: CommerceRuntimeCanceledReason;
    /**
     * Change messages describing mutations to this call-off order.
     * Hydrated from a separate collection on read; not embedded on the document.
     * @type {Array<CallOffOrderChangeMessage>}
     * @memberof CallOffOrder
     */
    changeMessages?: Array<CallOffOrderChangeMessage> | null;
    /**
     * Channel origin (e.g. "wholesale", "ecommerce", "EDI").
     * @type {string}
     * @memberof CallOffOrder
     */
    channelCode?: string | null;
    /**
     * Timestamp when all lines reached terminal status.
     * @type {string}
     * @memberof CallOffOrder
     */
    completedAt?: string | null;
    /**
     * 
     * @type {CreditHoldStatus}
     * @memberof CallOffOrder
     */
    creditHold?: CreditHoldStatus;
    /**
     * Currency code (ISO 4217). Must match the parent Blanket Order currency
     * when one is referenced.
     * @type {string}
     * @memberof CallOffOrder
     */
    currencyCode?: string | null;
    /**
     * B2B Account identifier. Must reference an active B2B account.
     * @type {number}
     * @memberof CallOffOrder
     */
    customerAccountId?: number | null;
    /**
     * Vendor / extension custom data, free-form JSON.
     * @type {object}
     * @memberof CallOffOrder
     */
    data?: object | null;
    /**
     * Shipping destinations. Items reference these by DestinationId
     * (IDestinationContainer pattern).
     * @type {Array<CommerceRuntimeDestination>}
     * @memberof CallOffOrder
     */
    destinations?: Array<CommerceRuntimeDestination> | null;
    /**
     * Buyer's own reference number / idempotency key (e.g. release number from
     * an ERP). Unique per tenant when supplied.
     * @type {string}
     * @memberof CallOffOrder
     */
    externalId?: string | null;
    /**
     * System-generated unique identifier (MozuObjectId).
     * @type {string}
     * @memberof CallOffOrder
     */
    id?: string | null;
    /**
     * Requested product line items.
     * @type {Array<CallOffOrderItem>}
     * @memberof CallOffOrder
     */
    items?: Array<CallOffOrderItem> | null;
    /**
     * Structured notes attached to the call-off order.
     * @type {Array<OrderNote>}
     * @memberof CallOffOrder
     */
    notes?: Array<OrderNote> | null;
    /**
     * Human-readable sequential number, auto-generated per tenant.
     * @type {number}
     * @memberof CallOffOrder
     */
    number?: number | null;
    /**
     * Optional payment(s) on this call-off order. Max 1 in v1 (PurchaseOrder only).
     * At release, each sibling Sales Order carries the same PO number and billing info,
     * with Amount = that order's individual Total.
     * @type {Array<CallOffPayment>}
     * @memberof CallOffOrder
     */
    payments?: Array<CallOffPayment> | null;
    /**
     * Resolved price list code locked at create. Null for External mode.
     * Not body-settable — set by the service via price-list resolution. Immutable after create.
     * @type {string}
     * @memberof CallOffOrder
     */
    priceListCode?: string | null;
    /**
     * Pricing mode: `Kibo` (default — prices resolved from catalog/price list) or
     * `External` (caller-supplied prices stored as-is). Immutable after create.
     * See Mozu.CommerceRuntime.Contracts.PricingModeConst.
     * @type {string}
     * @memberof CallOffOrder
     */
    pricingMode?: string | null;
    /**
     * Inventory reservation identifier. Set when inventory is reserved
     * for this call-off order.
     * @type {string}
     * @memberof CallOffOrder
     */
    reservationId?: string | null;
    /**
     * Site identifier. Populated from the API context on read.
     * @type {number}
     * @memberof CallOffOrder
     */
    siteId?: number;
    /**
     * Current call-off order status. One of: Hold, PartiallyReserved,
     * PartiallyReleased, Completed, Cancelled.
     * @type {string}
     * @memberof CallOffOrder
     */
    status?: string | null;
    /**
     * Tenant identifier. Populated from the API context on read.
     * @type {number}
     * @memberof CallOffOrder
     */
    tenantId?: number;
    /**
     * Denormalized header total — sum of non-cancelled line LineTotal values.
     * System-maintained; not client-settable.
     * @type {number}
     * @memberof CallOffOrder
     */
    totalAmount?: number;
    /**
     * Optimistic locking version. Initialized to "1" and incremented as a
     * string on each update.
     * @type {string}
     * @memberof CallOffOrder
     */
    version?: string | null;
}
/**
 * Request payload for executing a lifecycle action on a Call-Off Order
 * (e.g. cancel, release).
 * @export
 * @interface CallOffOrderAction
 */
export interface CallOffOrderAction {
    /**
     * Name of the action to execute. Must be present in the call-off order's
     * current AvailableActions list.
     * @type {string}
     * @memberof CallOffOrderAction
     */
    actionName?: string | null;
    /**
     * Optional list of item IDs to target. When null or empty, the action
     * applies to every item on the order.
     * @type {Array<string>}
     * @memberof CallOffOrderAction
     */
    itemIds?: Array<string> | null;
    /**
     * 
     * @type {Reason}
     * @memberof CallOffOrderAction
     */
    reason?: Reason;
}
/**
 * Result of aggregating call-off order requested quantity across all sites for a tenant.
 * Includes the grand total and optional breakdowns by product code, customer account,
 * order status, and requested ship month.
 * @export
 * @interface CallOffOrderAggregateResult
 */
export interface CallOffOrderAggregateResult {
    /**
     * Requested quantity broken down by customer account. Each entry's `Key` is the
     * customer account id as a string, or `"anonymous"` for orders without an account.
     * @type {Array<CallOffOrderDemandEntry>}
     * @memberof CallOffOrderAggregateResult
     */
    byCustomer?: Array<CallOffOrderDemandEntry> | null;
    /**
     * Requested quantity broken down by product code. Each entry's `Key` is a product code.
     * Only product codes with at least one matching item appear here.
     * @type {Array<CallOffOrderDemandEntry>}
     * @memberof CallOffOrderAggregateResult
     */
    byProductCode?: Array<CallOffOrderDemandEntry> | null;
    /**
     * Requested quantity broken down by the month of `items[].requestedShipDate`.
     * Each entry's `Key` is an ISO-8601 month string (e.g. `"2026-03"`).
     * Items without a requested ship date are excluded from this breakdown.
     * @type {Array<CallOffOrderDemandEntry>}
     * @memberof CallOffOrderAggregateResult
     */
    byRequestedShipMonth?: Array<CallOffOrderDemandEntry> | null;
    /**
     * Requested quantity broken down by call-off order status. Each entry's `Key` is the
     * order-level status string (e.g. `"Open"`, `"Completed"`).
     * @type {Array<CallOffOrderDemandEntry>}
     * @memberof CallOffOrderAggregateResult
     */
    byStatus?: Array<CallOffOrderDemandEntry> | null;
    /**
     * Sum of `items[].requestedQty` across all matched call-off order items.
     * @type {number}
     * @memberof CallOffOrderAggregateResult
     */
    totalRequestedQty?: number;
}
/**
 * Custom attribute for Call-Off Orders, following the same pattern
 * as BlanketOrderAttribute and OrderAttribute.
 * @export
 * @interface CallOffOrderAttribute
 */
export interface CallOffOrderAttribute {
    /**
     * 
     * @type {number}
     * @memberof CallOffOrderAttribute
     */
    attributeDefinitionId?: number | null;
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof CallOffOrderAttribute
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof CallOffOrderAttribute
     */
    fullyQualifiedName?: string | null;
    /**
     * 
     * @type {Array<any>}
     * @memberof CallOffOrderAttribute
     */
    values?: Array<any> | null;
}
/**
 * Audit trail entry for Call-Off Order lifecycle events.
 * @export
 * @interface CallOffOrderChangeMessage
 */
export interface CallOffOrderChangeMessage {
    /**
     * Human-readable description of what changed.
     * @type {string}
     * @memberof CallOffOrderChangeMessage
     */
    body?: string | null;
    /**
     * Identifier of the parent call-off order this message belongs to.
     * @type {string}
     * @memberof CallOffOrderChangeMessage
     */
    callOffOrderId?: string | null;
    /**
     * User who triggered the change.
     * @type {string}
     * @memberof CallOffOrderChangeMessage
     */
    createBy?: string | null;
    /**
     * Timestamp when the change was recorded.
     * @type {string}
     * @memberof CallOffOrderChangeMessage
     */
    createDate?: string;
    /**
     * System-generated change message identifier.
     * @type {string}
     * @memberof CallOffOrderChangeMessage
     */
    id?: string | null;
    /**
     * Optional identifier of the specific sub-entity that changed
     * (e.g. line id).
     * @type {string}
     * @memberof CallOffOrderChangeMessage
     */
    identifier?: string | null;
    /**
     * New value when the change represents a single-field mutation.
     * @type {string}
     * @memberof CallOffOrderChangeMessage
     */
    newValue?: string | null;
    /**
     * Prior value when the change represents a single-field mutation.
     * @type {string}
     * @memberof CallOffOrderChangeMessage
     */
    oldValue?: string | null;
    /**
     * Site identifier.
     * @type {number}
     * @memberof CallOffOrderChangeMessage
     */
    siteId?: number;
    /**
     * Subject of the change (e.g. "status", "line.status").
     * @type {string}
     * @memberof CallOffOrderChangeMessage
     */
    subject?: string | null;
    /**
     * Tenant identifier.
     * @type {number}
     * @memberof CallOffOrderChangeMessage
     */
    tenantId?: number;
}
/**
 * Paged result for Call-Off Order change-message queries.
 * @export
 * @interface CallOffOrderChangeMessageCollection
 */
export interface CallOffOrderChangeMessageCollection {
    /**
     * Page of change messages matching the query.
     * @type {Array<CallOffOrderChangeMessage>}
     * @memberof CallOffOrderChangeMessageCollection
     */
    items?: Array<CallOffOrderChangeMessage> | null;
    /**
     * Maximum number of records per page.
     * @type {number}
     * @memberof CallOffOrderChangeMessageCollection
     */
    pageSize?: number;
    /**
     * Zero-based index of the first record in this page.
     * @type {number}
     * @memberof CallOffOrderChangeMessageCollection
     */
    startIndex?: number;
    /**
     * Total number of matching messages across all pages.
     * @type {number}
     * @memberof CallOffOrderChangeMessageCollection
     */
    totalCount?: number;
}
/**
 * Paged result for Call-Off Order list queries.
 * @export
 * @interface CallOffOrderCollection
 */
export interface CallOffOrderCollection {
    /**
     * Page of call-off orders matching the query.
     * @type {Array<CallOffOrder>}
     * @memberof CallOffOrderCollection
     */
    items?: Array<CallOffOrder> | null;
    /**
     * Total number of pages.
     * @type {number}
     * @memberof CallOffOrderCollection
     */
    pageCount?: number;
    /**
     * Maximum number of records per page.
     * @type {number}
     * @memberof CallOffOrderCollection
     */
    pageSize?: number;
    /**
     * Zero-based index of the first record in this page.
     * @type {number}
     * @memberof CallOffOrderCollection
     */
    startIndex?: number;
    /**
     * Total number of matching records across all pages.
     * @type {number}
     * @memberof CallOffOrderCollection
     */
    totalCount?: number;
}
/**
 * A single bucket in a call-off order aggregate breakdown: the summed requested quantity
 * for a group (product code, customer account, status, or month) plus a count of matching orders.
 * @export
 * @interface CallOffOrderDemandEntry
 */
export interface CallOffOrderDemandEntry {
    /**
     * The grouping key value. Meaning depends on the breakdown dimension:
     * product code string, customer account id string, order status string,
     * or ISO-8601 month string (yyyy-MM) for the monthly breakdown.
     * @type {string}
     * @memberof CallOffOrderDemandEntry
     */
    key?: string | null;
    /**
     * Number of distinct call-off orders in this bucket.
     * @type {number}
     * @memberof CallOffOrderDemandEntry
     */
    orderCount?: number;
    /**
     * Sum of `items[].requestedQty` for call-off orders in this bucket.
     * @type {number}
     * @memberof CallOffOrderDemandEntry
     */
    totalRequestedQty?: number;
}
/**
 * A requested product quantity for delivery to a specific address.
 * @export
 * @interface CallOffOrderItem
 */
export interface CallOffOrderItem {
    /**
     * Actual delivery date, recorded once the line has been physically delivered.
     * @type {string}
     * @memberof CallOffOrderItem
     */
    actualDeliveryDate?: string | null;
    /**
     * Line-level custom attributes extending AbstractAttribute.
     * @type {Array<CallOffOrderItemAttribute>}
     * @memberof CallOffOrderItem
     */
    attributes?: Array<CallOffOrderItemAttribute> | null;
    /**
     * Identifier of the Blanket Order item this item draws from. Required
     * when the parent call-off references a Blanket Order.
     * @type {string}
     * @memberof CallOffOrderItem
     */
    blanketOrderItemId?: string | null;
    /**
     * User who cancelled this line.
     * @type {string}
     * @memberof CallOffOrderItem
     */
    cancelledBy?: string | null;
    /**
     * Line cancellation timestamp.
     * @type {string}
     * @memberof CallOffOrderItem
     */
    cancelledDate?: string | null;
    /**
     * 
     * @type {CommerceRuntimeCanceledReason}
     * @memberof CallOffOrderItem
     */
    cancelledReason?: CommerceRuntimeCanceledReason;
    /**
     * Identifier of the Destination in the parent call-off's Destinations
     * collection that this line ships to.
     * @type {string}
     * @memberof CallOffOrderItem
     */
    destinationId?: string | null;
    /**
     * Lifecycle state of Mozu.CommerceRuntime.Contracts.CallOffOrders.CallOffOrderItem.ExpectedDeliveryDate: null until first calculated,
     * "Provisional" while Hold/PartiallyReserved/FullyReserved, then locked to "Final"
     * at release. Exposed as a string on this Contracts DTO (not the Domain-layer enum),
     * matching this entity's existing convention for enum-backed fields (see FulfillmentType).
     * @type {string}
     * @memberof CallOffOrderItem
     */
    eddStatus?: string | null;
    /**
     * Expected delivery date, typically provided by the supplier or fulfillment system.
     * @type {string}
     * @memberof CallOffOrderItem
     */
    expectedDeliveryDate?: string | null;
    /**
     * Computed fill ratio (ReservedQty / RequestedQty). Phase 2+.
     * @type {number}
     * @memberof CallOffOrderItem
     */
    fillRate?: number | null;
    /**
     * Pickup location code. Meaningful only when `FulfillmentType == "Pickup"`;
     * ignored for Ship / Digital / Curbside / Delivery (downstream Order
     * Routing handles those). Carried into the SalesOrder created by the
     * Release Rules Engine (spec 005 FR-021).
     * @type {string}
     * @memberof CallOffOrderItem
     */
    fulfillmentLocationCode?: string | null;
    /**
     * Per-line fulfillment method. One of: Ship, Pickup, Digital, Curbside, Delivery.
     * In a future release, CallOffOrderItem may extend FulfillableCommerceItem.
     * @type {string}
     * @memberof CallOffOrderItem
     */
    fulfillmentType?: string | null;
    /**
     * System-generated item identifier.
     * @type {string}
     * @memberof CallOffOrderItem
     */
    id?: string | null;
    /**
     * Name-value pairs scoping the inventory pool for reservation. Set at
     * item creation and immutable once a reservation exists.
     * @type {Array<InventoryTags>}
     * @memberof CallOffOrderItem
     */
    inventoryTags?: Array<InventoryTags> | null;
    /**
     * Sequential line identifier within the call-off, auto-assigned.
     * @type {number}
     * @memberof CallOffOrderItem
     */
    lineId?: number | null;
    /**
     * Total amount for this line. Client-supplied in Mode 1; computed in
     * Mode 2.
     * @type {number}
     * @memberof CallOffOrderItem
     */
    lineTotal?: number | null;
    /**
     * 
     * @type {CallOffOrderProductReference}
     * @memberof CallOffOrderItem
     */
    product?: CallOffOrderProductReference;
    /**
     * Purchase location (store/location code) captured from the request context at
     * line creation. Used for catalog price resolution and carried to the released
     * Sales Order. Immutable after create.
     * @type {string}
     * @memberof CallOffOrderItem
     */
    purchaseLocation?: string | null;
    /**
     * Timestamp when this line was released to a Sales Order (Phase 3).
     * @type {string}
     * @memberof CallOffOrderItem
     */
    releasedDate?: string | null;
    /**
     * Quantity released to a Sales Order. Written in Phase 3; zero in
     * Phases 1–2.
     * @type {number}
     * @memberof CallOffOrderItem
     */
    releasedQty?: number;
    /**
     * Buyer-requested delivery date for this line.
     * @type {string}
     * @memberof CallOffOrderItem
     */
    requestedDeliveryDate?: string | null;
    /**
     * Buyer-requested quantity.
     * @type {number}
     * @memberof CallOffOrderItem
     */
    requestedQty?: number;
    /**
     * Buyer-requested ship date. Must fall within the parent Blanket Order's
     * validity period when a Blanket Order is referenced.
     * @type {string}
     * @memberof CallOffOrderItem
     */
    requestedShipDate?: string | null;
    /**
     * Quantity reserved by the inventory reservation engine.
     * Written in Phase 2; zero in Phase 1.
     * @type {number}
     * @memberof CallOffOrderItem
     */
    reservedQty?: number;
    /**
     * The SalesOrder id this line was released into. Null until the line
     * transitions to `Released` by the Release Rules Engine (spec 005).
     * Immutable thereafter.
     * @type {string}
     * @memberof CallOffOrderItem
     */
    salesOrderId?: string | null;
    /**
     * Current line status. One of: Hold, PartiallyReserved, Released,
     * Converted, Cancelled.
     * @type {string}
     * @memberof CallOffOrderItem
     */
    status?: string | null;
    /**
     * Time-fence tolerance (days) from the ReservationRule that produced this line's most
     * recent reservation delta (spec COM-10941 follow-up).
     * @type {number}
     * @memberof CallOffOrderItem
     */
    timeFenceDays?: number | null;
    /**
     * Per-line unit price. Overridable — may come from the Blanket Order,
     * be client-supplied, or be buyer-negotiated.
     * @type {number}
     * @memberof CallOffOrderItem
     */
    unitPrice?: number | null;
}
/**
 * Custom attribute for Call-Off Order line items, following the same pattern
 * as CallOffOrderAttribute.
 * @export
 * @interface CallOffOrderItemAttribute
 */
export interface CallOffOrderItemAttribute {
    /**
     * 
     * @type {number}
     * @memberof CallOffOrderItemAttribute
     */
    attributeDefinitionId?: number | null;
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof CallOffOrderItemAttribute
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof CallOffOrderItemAttribute
     */
    fullyQualifiedName?: string | null;
    /**
     * 
     * @type {Array<any>}
     * @memberof CallOffOrderItemAttribute
     */
    values?: Array<any> | null;
}
/**
 * Lightweight product identity for Call-Off Order Items.
 * Extended fields are stamped from the catalog at call-off creation (Kibo mode)
 * and carried through to the released Sales Order, avoiding per-line catalog
 * lookups at release time.
 * @export
 * @interface CallOffOrderProductReference
 */
export interface CallOffOrderProductReference {
    /**
     * Bundle component lines. Populated only when Mozu.CommerceRuntime.Contracts.CallOffOrders.ProductReference.ProductUsage is "Bundle".
     * Stamped at create. Immutable.
     * @type {Array<BundledProduct>}
     * @memberof CallOffOrderProductReference
     */
    bundledProducts?: Array<BundledProduct> | null;
    /**
     * Returns VariationProductCode if not null/whitespace, otherwise ProductCode.
     * This value is computed on the domain model and mapped directly to the contract
     * via Mapster convention-based mapping — no recalculation on the contract side.
     * UI should use the items.product.combinedproductcode filter for variation-aware
     * product searches instead of items.product.productcode.
     * @type {string}
     * @memberof CallOffOrderProductReference
     */
    combinedProductCode?: string | null;
    /**
     * Fulfillment types the product supports (e.g. "Shipping", "Pickup"). Stamped from
     * the catalog at call-off creation. Immutable.
     * @type {Array<string>}
     * @memberof CallOffOrderProductReference
     */
    fulfillmentTypesSupported?: Array<string> | null;
    /**
     * Goods type (e.g. "Physical", "Digital", "Service"). Routes shipment creation.
     * Stamped at create. Immutable.
     * @type {string}
     * @memberof CallOffOrderProductReference
     */
    goodsType?: string | null;
    /**
     * Display name of the product.
     * @type {string}
     * @memberof CallOffOrderProductReference
     */
    name?: string | null;
    /**
     * Configurable option selections for this variant. Stamped at create. Immutable.
     * @type {Array<CommerceRuntimeProductOption>}
     * @memberof CallOffOrderProductReference
     */
    options?: Array<CommerceRuntimeProductOption> | null;
    /**
     * Product code (SKU). Must match the Blanket Order line product when
     * the parent call-off references a Blanket Order.
     * @type {string}
     * @memberof CallOffOrderProductReference
     */
    productCode?: string | null;
    /**
     * Product usage classification (e.g. "Bundle", "Standard"). Drives bundle line
     * splitting at shipment creation. Stamped at create. Immutable.
     * @type {string}
     * @memberof CallOffOrderProductReference
     */
    productUsage?: string | null;
    /**
     * Variation product code for the selected variant. Stamped at create. Immutable.
     * @type {string}
     * @memberof CallOffOrderProductReference
     */
    variationProductCode?: string | null;
}
/**
 * Tenant-scoped, expression-based rule that selects Mozu.CommerceRuntime.Contracts.CallOffOrders.CallOffOrder
 * entities for downstream composite consumers (e.g. CallOff Reservation Rule in Catalog).
 * @export
 * @interface CallOffOrderRule
 */
export interface CallOffOrderRule {
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof CallOffOrderRule
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * Tenant-unique stable identifier referenced by composite consumers. Matches
     * `[A-Za-z0-9_-]+`. Auto-generated from Mozu.CommerceRuntime.Contracts.CallOffOrderRules.CallOffOrderRule.Name when omitted
     * on create. Immutable after create.
     * @type {string}
     * @memberof CallOffOrderRule
     */
    code?: string | null;
    /**
     * Optional rule purpose / authoring notes. Max 2000 chars.
     * @type {string}
     * @memberof CallOffOrderRule
     */
    description?: string | null;
    /**
     * If `false`, the evaluate endpoint rejects the rule with HTTP 400.
     * Lifecycle CRUD reads continue to return it. Default `true` on create.
     * @type {boolean}
     * @memberof CallOffOrderRule
     */
    enabled?: boolean;
    /**
     * 
     * @type {DynamicExpression}
     * @memberof CallOffOrderRule
     */
    expression?: DynamicExpression;
    /**
     * System-generated unique identifier (MozuObjectId). Server-set; ignored on write.
     * @type {string}
     * @memberof CallOffOrderRule
     */
    id?: string | null;
    /**
     * Free-form consumer-specific metadata. Mirrors `PurchaseLimitRule.MetaData`.
     * @type {object}
     * @memberof CallOffOrderRule
     */
    metaData?: object | null;
    /**
     * Human-readable rule name. Required; non-empty; max 255 chars.
     * @type {string}
     * @memberof CallOffOrderRule
     */
    name?: string | null;
    /**
     * Identifies which composite consumer family uses this rule. Free string
     * matching `[A-Za-z0-9_-]+`. Well-known values: `"Reservation"`,
     * `"PurchaseLimit"`, `"Custom"`.
     * @type {string}
     * @memberof CallOffOrderRule
     */
    ruleType?: string | null;
    /**
     * Tenant identifier. Populated from `IApiContext` on the server. Never
     * accepted from the client request body.
     * @type {number}
     * @memberof CallOffOrderRule
     */
    tenantId?: number;
}
/**
 * Paged result for Call-Off Order Rule list queries.
 * @export
 * @interface CallOffOrderRuleCollection
 */
export interface CallOffOrderRuleCollection {
    /**
     * Page of call-off order rules matching the query.
     * @type {Array<CallOffOrderRule>}
     * @memberof CallOffOrderRuleCollection
     */
    items?: Array<CallOffOrderRule> | null;
    /**
     * Total number of pages.
     * @type {number}
     * @memberof CallOffOrderRuleCollection
     */
    pageCount?: number;
    /**
     * Maximum number of records per page.
     * @type {number}
     * @memberof CallOffOrderRuleCollection
     */
    pageSize?: number;
    /**
     * Zero-based index of the first record in this page.
     * @type {number}
     * @memberof CallOffOrderRuleCollection
     */
    startIndex?: number;
    /**
     * Total number of matching records across all pages.
     * @type {number}
     * @memberof CallOffOrderRuleCollection
     */
    totalCount?: number;
}
/**
 * Request body for `POST /commerce/rules/callOffOrder/{code}/evaluate`.
 * @export
 * @interface CallOffOrderRuleEvalRequest
 */
export interface CallOffOrderRuleEvalRequest {
    /**
     * Requested page size. Defaults to 50 when omitted. Values above 200 are
     * silently clamped to 200 per FR-009.
     * @type {number}
     * @memberof CallOffOrderRuleEvalRequest
     */
    pageSize?: number | null;
    /**
     * Opaque cursor returned by a prior response's `NextPageToken`. Null on
     * the first page.
     * @type {string}
     * @memberof CallOffOrderRuleEvalRequest
     */
    pageToken?: string | null;
    /**
     * Optional Call-Off Order status (e.g. `"Hold"`) AND-composed with the
     * rule predicate at evaluation time.
     * @type {string}
     * @memberof CallOffOrderRuleEvalRequest
     */
    statusFilter?: string | null;
}
/**
 * Response body for `POST /commerce/rules/callOffOrder/{code}/evaluate`.
 * @export
 * @interface CallOffOrderRuleEvalResponse
 */
export interface CallOffOrderRuleEvalResponse {
    /**
     * Matched Call-Off Order ids, up to `PageSize`, ordered by `_id`
     * ascending.
     * @type {Array<string>}
     * @memberof CallOffOrderRuleEvalResponse
     */
    callOffOrderIds?: Array<string> | null;
    /**
     * Cursor for the next page; null when this is the last page.
     * @type {string}
     * @memberof CallOffOrderRuleEvalResponse
     */
    nextPageToken?: string | null;
    /**
     * Echoed input rule code for client correlation.
     * @type {string}
     * @memberof CallOffOrderRuleEvalResponse
     */
    ruleCode?: string | null;
    /**
     * Total number of matching orders across all pages (not capped at
     * `PageSize`).
     * @type {number}
     * @memberof CallOffOrderRuleEvalResponse
     */
    totalCount?: number;
}
/**
 * Response body for `GET /commerce/rules/callOffOrder/schema`. Tenant-scoped
 * authoring contract for rule-builder UIs — reflects
 * `CallOffOrderExpressionContext` and `CallOffOrderItemExpressionContext`
 * plus the tenant's dynamic call-off order attribute slot.
 * @export
 * @interface CallOffOrderRuleSchema
 */
export interface CallOffOrderRuleSchema {
    /**
     * Schema-version identifier. Always `"CallOffOrderExpressionContext"` in v1.
     * @type {string}
     * @memberof CallOffOrderRuleSchema
     */
    context?: string | null;
    /**
     * One entry per dynamic slot. v1 has a single entry for `attributes.*`.
     * @type {Array<DynamicFieldSlot>}
     * @memberof CallOffOrderRuleSchema
     */
    dynamicFields?: Array<DynamicFieldSlot> | null;
    /**
     * One entry per `[ExpressionContextProperty]` on the context: header
     * fields plus the flattened item-level fields under the `items.*`
     * namespace.
     * @type {Array<StaticField>}
     * @memberof CallOffOrderRuleSchema
     */
    staticFields?: Array<StaticField> | null;
}
/**
 * Optional payment commitment on a call-off order.
 * v1 supports only PurchaseOrder payment type.
 * At release, this payment is mapped onto each sibling Sales Order via
 * `IPaymentHandler.CreatePaymentActionAsync` with Amount = that order's Total.
 * @export
 * @interface CallOffPayment
 */
export interface CallOffPayment {
    /**
     * Optional total authorization amount. Defaults to the call-off TotalAmount when null.
     * Per-destination Sales Order payment uses that order's individual Total.
     * @type {number}
     * @memberof CallOffPayment
     */
    amount?: number | null;
    /**
     * 
     * @type {BillingInfo}
     * @memberof CallOffPayment
     */
    billingInfo?: BillingInfo;
    /**
     * ERP / extensibility data bag.
     * @type {object}
     * @memberof CallOffPayment
     */
    data?: object | null;
    /**
     * Payment terms code (e.g. "Net30"). Optional; defaults to B2B account terms downstream.
     * @type {string}
     * @memberof CallOffPayment
     */
    paymentTerms?: string | null;
    /**
     * Payment type — only `PurchaseOrder` is supported in v1.
     * See Mozu.CommerceRuntime.Contracts.CallOffOrders.CallOffPayment.PaymentTypeConst.
     * @type {string}
     * @memberof CallOffPayment
     */
    paymentType?: string | null;
    /**
     * Buyer's PO number. Required when Mozu.CommerceRuntime.Contracts.CallOffOrders.CallOffPayment.PaymentType is PurchaseOrder.
     * @type {string}
     * @memberof CallOffPayment
     */
    purchaseOrderNumber?: string | null;
}
/**
 * 
 * @export
 * @interface CancelReasonCollection
 */
export interface CancelReasonCollection {
    /**
     * 
     * @type {Array<CancelReasonItem>}
     * @memberof CancelReasonCollection
     */
    items?: Array<CancelReasonItem> | null;
    /**
     * 
     * @type {number}
     * @memberof CancelReasonCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface CancelReasonItem
 */
export interface CancelReasonItem {
    /**
     * 
     * @type {string}
     * @memberof CancelReasonItem
     */
    name?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CancelReasonItem
     */
    needsMoreInfo?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CancelReasonItem
     */
    reasonCode?: string | null;
}
/**
 * 
 * @export
 * @interface CapturableShipmentSummary
 */
export interface CapturableShipmentSummary {
    /**
     * The amount applied by the payment action
     * @type {number}
     * @memberof CapturableShipmentSummary
     */
    amountApplied?: number;
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
}
/**
 * Details of the current cart, including shopper's user ID, items listed in the cart, and any system messages. 
 * For each item, contains the list of available discounts and the actual discount applied to the cart item.
 * @export
 * @interface Cart
 */
export interface Cart {
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof Cart
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * List of messages displayed by the system based on the last cart action, for example, when a product price has changed or is out-of-stock. System-supplied and read-only.
     * @type {Array<CommerceRuntimeChangeMessage>}
     * @memberof Cart
     */
    changeMessages?: Array<CommerceRuntimeChangeMessage> | null;
    /**
     * Unique identifier of the channel for this item.
     * @type {string}
     * @memberof Cart
     */
    channelCode?: string | null;
    /**
     * ISO Currency Code. Currently, only USD is supported.
     * @type {string}
     * @memberof Cart
     */
    currencyCode?: string | null;
    /**
     * Determines the interaction type that a customer will use to create this object.
     * Valid values are: Website, Store, Call, Unknown
     * @type {string}
     * @memberof Cart
     */
    customerInteractionType?: string | null;
    /**
     * Custom data for a given vendor set within the commerce process.
     * @type {object}
     * @memberof Cart
     */
    data?: object | null;
    /**
     * List of Mozu.CommerceRuntime.Contracts.Commerce.ThresholdMessage objects that are valid for the current value of the cart/order.
     * @type {Array<ThresholdMessage>}
     * @memberof Cart
     */
    discountThresholdMessages?: Array<ThresholdMessage> | null;
    /**
     * Amount of the discounts applied to all items in the cart. This is a negative number.  This also includes the order level discounts.
     * @type {number}
     * @memberof Cart
     */
    discountTotal?: number | null;
    /**
     * Combined price for all cart items, including all selected options as well as any discounts.
     * @type {number}
     * @memberof Cart
     */
    discountedSubtotal?: number | null;
    /**
     * Subtotal minus the discounted total
     * @type {number}
     * @memberof Cart
     */
    discountedTotal?: number | null;
    /**
     * When the order will no longer be active. That is, the order is considered abandoned. 
     * Orders of anonymous shoppers expire after 14 days of inactivity. 
     * An order never expires for shoppers who are logged into their account. 
     * Date in UTC Date/Time.
     * @type {string}
     * @memberof Cart
     */
    expirationDate?: string | null;
    /**
     * Extra properties (key-value pairs) that extend the primary object. Think of this as a property bag of string keys and string values.
     * @type {Array<ExtendedProperty>}
     * @memberof Cart
     */
    extendedProperties?: Array<ExtendedProperty> | null;
    /**
     * Not implemented. Total cost of fees for all items in the cart.
     * @type {number}
     * @memberof Cart
     */
    feeTotal?: number | null;
    /**
     * 
     * @type {FulfillmentInfo}
     * @memberof Cart
     */
    fulfillmentInfo?: FulfillmentInfo;
    /**
     * Total tax on handling
     * @type {number}
     * @memberof Cart
     */
    handlingTaxTotal?: number | null;
    /**
     * Unique identifier of the CommerceAggregate object (e.g. order, cart, wishlist, etc.).
     * @type {string}
     * @memberof Cart
     */
    id?: string | null;
    /**
     * Not implemented. Tax does not appear on cart.
     * @type {number}
     * @memberof Cart
     */
    itemTaxTotal?: number | null;
    /**
     * Occasionally the commerce runtime may validate that item/product names, descriptions, and prices have not changed. 
     * If changed, it updates LastValidationDate.
     * @type {string}
     * @memberof Cart
     */
    lastValidationDate?: string | null;
    /**
     * Line Item Subtotals with Order Adjustments
     * @type {number}
     * @memberof Cart
     */
    lineItemSubtotalWithOrderAdjustments?: number | null;
    /**
     * The discount that has been applied to the cart itself. If multiple discounts exist, this is the discount that the system applies because it offers the best savings for the shopper. This is a negative number.
     * @type {Array<CommerceRuntimeAppliedDiscount>}
     * @memberof Cart
     */
    orderDiscounts?: Array<CommerceRuntimeAppliedDiscount> | null;
    /**
     * 
     * @type {Array<SuggestedDiscount>}
     * @memberof Cart
     */
    rejectedDiscounts?: Array<SuggestedDiscount> | null;
    /**
     * Shipping Amount before discount and adjustments
     * @type {number}
     * @memberof Cart
     */
    shippingAmountBeforeDiscountsAndAdjustments?: number | null;
    /**
     * Shipping total without discounts applied.
     * @type {number}
     * @memberof Cart
     */
    shippingSubTotal?: number | null;
    /**
     * Not implemented. Tax does not appear on cart.
     * @type {number}
     * @memberof Cart
     */
    shippingTaxTotal?: number | null;
    /**
     * Shipping does not appear on cart.
     * @type {number}
     * @memberof Cart
     */
    shippingTotal?: number | null;
    /**
     * Unique identifier of the Site.
     * @type {number}
     * @memberof Cart
     */
    siteId?: number | null;
    /**
     * Combined price for all cart items, including all selected options but excluding any discounts.
     * @type {number}
     * @memberof Cart
     */
    subtotal?: number | null;
    /**
     * 
     * @type {Array<SuggestedDiscount>}
     * @memberof Cart
     */
    suggestedDiscounts?: Array<SuggestedDiscount> | null;
    /**
     * Storage for any additional/custom tax data.
     * @type {object}
     * @memberof Cart
     */
    taxData?: object | null;
    /**
     * Tax does not appear on cart.
     * @type {number}
     * @memberof Cart
     */
    taxTotal?: number | null;
    /**
     * Unique identifier of the Tenant.
     * @type {number}
     * @memberof Cart
     */
    tenantId?: number | null;
    /**
     * Final total amount of the order including all discounts, shipping, and tax.
     * @type {number}
     * @memberof Cart
     */
    total?: number | null;
    /**
     * Unique identifier of the shopper who created the cart.
     * @type {string}
     * @memberof Cart
     */
    userId?: string | null;
    /**
     * Identifies the Visit ID that was current when the order was placed or when the cart was last updated.
     * @type {string}
     * @memberof Cart
     */
    visitId?: string | null;
    /**
     * Identifies the web session used to place the order or last update the cart.
     * @type {string}
     * @memberof Cart
     */
    webSessionId?: string | null;
    /**
     * 
     * @type {CartMessage}
     * @memberof Cart
     */
    cartMessage?: CartMessage;
    /**
     * 
     * @type {Array<CartMessage>}
     * @memberof Cart
     */
    cartMessages?: Array<CartMessage> | null;
    /**
     * Coupon codes associated with this order.  Only set on order import.
     * @type {Array<string>}
     * @memberof Cart
     */
    couponCodes?: Array<string> | null;
    /**
     * Order level handling fees excluding any discounts.
     * @type {number}
     * @memberof Cart
     */
    handlingAmount?: number | null;
    /**
     * Handling fees for the Order as well as CartItems (e.g. if the Cart has a $5 handling fee and an CartItem has a $2 handling fee per item quantity and the quantity of items is 2 then the value in this property would be $9)
     * @type {number}
     * @memberof Cart
     */
    handlingSubTotal?: number | null;
    /**
     * Handling fees including any discounts.
     * @type {number}
     * @memberof Cart
     */
    handlingTotal?: number | null;
    /**
     * A list of invalid coupons that were attempted on the cart
     * @type {Array<InvalidCoupon>}
     * @memberof Cart
     */
    invalidCoupons?: Array<InvalidCoupon> | null;
    /**
     * List of items in the cart.
     * @type {Array<CartItem>}
     * @memberof Cart
     */
    items?: Array<CartItem> | null;
    /**
     * Pricelist code
     * @type {string}
     * @memberof Cart
     */
    priceListCode?: string | null;
    /**
     * Inventory Reservation id for a cart.
     * @type {string}
     * @memberof Cart
     */
    reservationId?: string | null;
    /**
     * List of groupings.
     * The grouping is determined by the ShippingGrouper based on the items in the cart. 
     * Each grouping represents a set of items that can be fulfilled together, typically because they share the same fulfillment method, shipping method and a location.
     * @type {Array<ShippingGrouping>}
     * @memberof Cart
     */
    shippingGroups?: Array<ShippingGrouping> | null;
    /**
     * 
     * @type {string}
     * @memberof Cart
     */
    zipCode?: string | null;
}
/**
 * 
 * @export
 * @interface CartAllOf
 */
export interface CartAllOf {
    /**
     * 
     * @type {CartMessage}
     * @memberof CartAllOf
     */
    cartMessage?: CartMessage;
    /**
     * 
     * @type {Array<CartMessage>}
     * @memberof CartAllOf
     */
    cartMessages?: Array<CartMessage> | null;
    /**
     * Coupon codes associated with this order.  Only set on order import.
     * @type {Array<string>}
     * @memberof CartAllOf
     */
    couponCodes?: Array<string> | null;
    /**
     * Order level handling fees excluding any discounts.
     * @type {number}
     * @memberof CartAllOf
     */
    handlingAmount?: number | null;
    /**
     * Handling fees for the Order as well as CartItems (e.g. if the Cart has a $5 handling fee and an CartItem has a $2 handling fee per item quantity and the quantity of items is 2 then the value in this property would be $9)
     * @type {number}
     * @memberof CartAllOf
     */
    handlingSubTotal?: number | null;
    /**
     * Handling fees including any discounts.
     * @type {number}
     * @memberof CartAllOf
     */
    handlingTotal?: number | null;
    /**
     * A list of invalid coupons that were attempted on the cart
     * @type {Array<InvalidCoupon>}
     * @memberof CartAllOf
     */
    invalidCoupons?: Array<InvalidCoupon> | null;
    /**
     * List of items in the cart.
     * @type {Array<CartItem>}
     * @memberof CartAllOf
     */
    items?: Array<CartItem> | null;
    /**
     * Pricelist code
     * @type {string}
     * @memberof CartAllOf
     */
    priceListCode?: string | null;
    /**
     * Inventory Reservation id for a cart.
     * @type {string}
     * @memberof CartAllOf
     */
    reservationId?: string | null;
    /**
     * List of groupings.
     * The grouping is determined by the ShippingGrouper based on the items in the cart. 
     * Each grouping represents a set of items that can be fulfilled together, typically because they share the same fulfillment method, shipping method and a location.
     * @type {Array<ShippingGrouping>}
     * @memberof CartAllOf
     */
    shippingGroups?: Array<ShippingGrouping> | null;
    /**
     * 
     * @type {string}
     * @memberof CartAllOf
     */
    zipCode?: string | null;
}
/**
 * Collection of cart messages returned as a whole. A collection is not paged.
 * @export
 * @interface CartChangeMessageCollection
 */
export interface CartChangeMessageCollection {
    /**
     * 
     * @type {Array<CommerceRuntimeChangeMessage>}
     * @memberof CartChangeMessageCollection
     */
    items?: Array<CommerceRuntimeChangeMessage> | null;
    /**
     * 
     * @type {number}
     * @memberof CartChangeMessageCollection
     */
    totalCount?: number;
}
/**
 * Details of an item in the shopper's cart, such as the product name, stock count, unit price, discounts, quantity ordered, and total price.
 * @export
 * @interface CartItem
 */
export interface CartItem {
    /**
     * Order Level taxable sub total
     * @type {number}
     * @memberof CartItem
     */
    adjustedLineItemSubtotal?: number | null;
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof CartItem
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * Track the discountId from which the item was auto added
     * @type {number}
     * @memberof CartItem
     */
    autoAddDiscountId?: number | null;
    /**
     * List of Child Item Ids for this order item
     * @type {Array<string>}
     * @memberof CartItem
     */
    childItemIds?: Array<string> | null;
    /**
     * Custom data for a given vendor set within the commerce process.
     * @type {object}
     * @memberof CartItem
     */
    data?: object | null;
    /**
     * How much the shopper saves with the applied discount or sale price. This is a negative number.
     * @type {number}
     * @memberof CartItem
     */
    discountTotal?: number | null;
    /**
     * Subtotal minus any discounts.
     * @type {number}
     * @memberof CartItem
     */
    discountedTotal?: number | null;
    /**
     * Indicate Duty Amount for this item.
     * @type {number}
     * @memberof CartItem
     */
    dutyAmount?: number | null;
    /**
     * Line item extended total (quantity multiplied by unit extended price) before discounts.
     * @type {number}
     * @memberof CartItem
     */
    extendedTotal?: number | null;
    /**
     * Not implemented. Total cost of fees that apply to this item.
     * @type {number}
     * @memberof CartItem
     */
    feeTotal?: number | null;
    /**
     * Product-level handling fee for this item (e.g. special packaging, hazmat fees).
     * This does NOT include order-level handling fees — those are in Mozu.CommerceRuntime.Contracts.Commerce.CommerceItem.WeightedOrderHandlingFee.
     * Total handling on the shipment = HandlingAmount + WeightedOrderHandlingFee.
     * @type {number}
     * @memberof CartItem
     */
    handlingAmount?: number | null;
    /**
     * 
     * @type {Array<InventoryTags>}
     * @memberof CartItem
     */
    inventoryTags?: Array<InventoryTags> | null;
    /**
     * Assembly Required for this order item
     * @type {boolean}
     * @memberof CartItem
     */
    isAssemblyRequired?: boolean;
    /**
     * If true, the cart item lists a product that can be purchased or fulfilled at regular intervals, for example, monthly billing or a subscription.
     * @type {boolean}
     * @memberof CartItem
     */
    isRecurring?: boolean | null;
    /**
     * Not implemented. If true, the cart item is eligible for tax.
     * @type {boolean}
     * @memberof CartItem
     */
    isTaxable?: boolean | null;
    /**
     * Total price of taxes that apply to products in this item.
     * @type {number}
     * @memberof CartItem
     */
    itemTaxTotal?: number | null;
    /**
     * The line id assigned to the order item. Visible only in the Admin, this is set from the Admin or
     * in CommerceRuntime when a cart is converted to an order.
     * @type {number}
     * @memberof CartItem
     */
    lineId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CartItem
     */
    lineItemAdjustment?: number | null;
    /**
     * Locale code for language that appears in text and descriptions on the site, for example, en_US. 
     * This is not the currency code. Currently only en_US is supported.
     * @type {string}
     * @memberof CartItem
     */
    localeCode?: string | null;
    /**
     * Indicates Parent Item Id for this order item
     * @type {string}
     * @memberof CartItem
     */
    parentItemId?: string | null;
    /**
     * 
     * @type {CommerceRuntimeProduct}
     * @memberof CartItem
     */
    product?: CommerceRuntimeProduct;
    /**
     * 
     * @type {AppliedLineItemProductDiscount}
     * @memberof CartItem
     */
    productDiscount?: AppliedLineItemProductDiscount;
    /**
     * A list of discounts applied to the product
     * @type {Array<AppliedLineItemProductDiscount>}
     * @memberof CartItem
     */
    productDiscounts?: Array<AppliedLineItemProductDiscount> | null;
    /**
     * The location where the product is being purchased.. default is null. Products can have different prices
     * by purchaseLocation via custom priceListResolution...
     * @type {string}
     * @memberof CartItem
     */
    purchaseLocation?: string | null;
    /**
     * Number of products ordered.
     * @type {number}
     * @memberof CartItem
     */
    quantity?: number;
    /**
     * Shipping amount before Discounts and adjustments
     * @type {number}
     * @memberof CartItem
     */
    shippingAmountBeforeDiscountsAndAdjustments?: number | null;
    /**
     * A discount applied to the shipping
     * @type {Array<AppliedLineItemShippingDiscount>}
     * @memberof CartItem
     */
    shippingDiscounts?: Array<AppliedLineItemShippingDiscount> | null;
    /**
     * Total price of taxes that apply to the shipping of this item.
     * @type {number}
     * @memberof CartItem
     */
    shippingTaxTotal?: number | null;
    /**
     * Total price of shipping that apply to this item.
     * @type {number}
     * @memberof CartItem
     */
    shippingTotal?: number | null;
    /**
     * 
     * @type {SubstituteInfo}
     * @memberof CartItem
     */
    substituteInfo?: SubstituteInfo;
    /**
     * Line item subtotal (quantity multiplied by price) before discounts.
     * @type {number}
     * @memberof CartItem
     */
    subtotal?: number | null;
    /**
     * Storage for any additional/custom tax data.
     * @type {object}
     * @memberof CartItem
     */
    taxData?: object | null;
    /**
     * Line item subtotal (quantity multiplied by price) before discounts.
     * @type {number}
     * @memberof CartItem
     */
    taxableTotal?: number | null;
    /**
     * Total price of this cart item taking into account any discounts.
     * @type {number}
     * @memberof CartItem
     */
    total?: number | null;
    /**
     * Line item total with line item, Tax, Weighted Tax with Weighted shipping and handling costs
     * @type {number}
     * @memberof CartItem
     */
    totalWithWeightedShippingAndHandling?: number | null;
    /**
     * Taxable Subtotal including Weighted Order amounts
     * @type {number}
     * @memberof CartItem
     */
    totalWithoutWeightedShippingAndHandling?: number | null;
    /**
     * 
     * @type {CommerceUnitPrice}
     * @memberof CartItem
     */
    unitPrice?: CommerceUnitPrice;
    /**
     * Order Level Manual Adjustment applied to this Item
     * @type {number}
     * @memberof CartItem
     */
    weightedOrderAdjustment?: number | null;
    /**
     * Order Level Discount applied to this Item
     * @type {number}
     * @memberof CartItem
     */
    weightedOrderDiscount?: number | null;
    /**
     * Order Level Duty applied to this Item
     * @type {number}
     * @memberof CartItem
     */
    weightedOrderDuty?: number | null;
    /**
     * Order-level handling manual adjustment allocated to this item.
     * @type {number}
     * @memberof CartItem
     */
    weightedOrderHandlingAdjustment?: number | null;
    /**
     * Order-level handling fee allocated to this item (e.g. flat handling fee spread across all items).
     * This is separate from product-level handling in Mozu.CommerceRuntime.Contracts.Commerce.CommerceItem.HandlingAmount.
     * Total handling on the shipment = HandlingAmount + WeightedOrderHandlingFee.
     * @type {number}
     * @memberof CartItem
     */
    weightedOrderHandlingFee?: number | null;
    /**
     * Order-level handling fee discount allocated to this item.
     * @type {number}
     * @memberof CartItem
     */
    weightedOrderHandlingFeeDiscount?: number | null;
    /**
     * Total handling tax for this item (covers both product-level and order-level handling tax combined).
     * On the shipment item, this is split into: HandlingTax (total) and WeightedOrderHandlingFeeTax (order-level portion only).
     * @type {number}
     * @memberof CartItem
     */
    weightedOrderHandlingFeeTax?: number | null;
    /**
     * Order Level Shipping applied to this Item
     * @type {number}
     * @memberof CartItem
     */
    weightedOrderShipping?: number | null;
    /**
     * Order Level Shipping discount applied to this Item
     * @type {number}
     * @memberof CartItem
     */
    weightedOrderShippingDiscount?: number | null;
    /**
     * Order Level Shipping Manual Adjustment applied to this Item
     * @type {number}
     * @memberof CartItem
     */
    weightedOrderShippingManualAdjustment?: number | null;
    /**
     * Order Level Shipping Tax applied to this Item
     * @type {number}
     * @memberof CartItem
     */
    weightedOrderShippingTax?: number | null;
    /**
     * Order Level tax applied to this Item
     * @type {number}
     * @memberof CartItem
     */
    weightedOrderTax?: number | null;
    /**
     * Location code from which to obtain this item
     * @type {string}
     * @memberof CartItem
     */
    fulfillmentLocationCode?: string | null;
    /**
     * Fulfillment method used to fulfill this item
     * @type {string}
     * @memberof CartItem
     */
    fulfillmentMethod?: string | null;
    /**
     * Unique identifier of the item in the cart.
     * @type {string}
     * @memberof CartItem
     */
    id?: string | null;
    /**
     * Determines if the item is using external or internal(catalog) pricing
     * @type {string}
     * @memberof CartItem
     */
    priceMode?: string | null;
    /**
     * 
     * @type {SubscriptionInfo}
     * @memberof CartItem
     */
    subscription?: SubscriptionInfo;
}
/**
 * 
 * @export
 * @interface CartItemAllOf
 */
export interface CartItemAllOf {
    /**
     * Location code from which to obtain this item
     * @type {string}
     * @memberof CartItemAllOf
     */
    fulfillmentLocationCode?: string | null;
    /**
     * Fulfillment method used to fulfill this item
     * @type {string}
     * @memberof CartItemAllOf
     */
    fulfillmentMethod?: string | null;
    /**
     * Unique identifier of the item in the cart.
     * @type {string}
     * @memberof CartItemAllOf
     */
    id?: string | null;
    /**
     * Determines if the item is using external or internal(catalog) pricing
     * @type {string}
     * @memberof CartItemAllOf
     */
    priceMode?: string | null;
    /**
     * 
     * @type {SubscriptionInfo}
     * @memberof CartItemAllOf
     */
    subscription?: SubscriptionInfo;
}
/**
 * Collection of items in the cart. A collection is not paged.
 * @export
 * @interface CartItemCollection
 */
export interface CartItemCollection {
    /**
     * 
     * @type {Array<CartItem>}
     * @memberof CartItemCollection
     */
    items?: Array<CartItem> | null;
    /**
     * 
     * @type {number}
     * @memberof CartItemCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface CartMessage
 */
export interface CartMessage {
    /**
     * 
     * @type {string}
     * @memberof CartMessage
     */
    message?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CartMessage
     */
    messageType?: string | null;
    /**
     * 
     * @type {Array<CommerceRuntimeProduct>}
     * @memberof CartMessage
     */
    productsRemoved?: Array<CommerceRuntimeProduct> | null;
}
/**
 * Cart summary, which is the number of items in the active cart, total cost of items in the cart, and whether the cart has expired.
 * @export
 * @interface CartSummary
 */
export interface CartSummary {
    /**
     * If true, the cart is active. A shopper has added an item to a cart.
     * @type {boolean}
     * @memberof CartSummary
     */
    hasActiveCart?: boolean | null;
    /**
     * If true, the cart has reached its expiration date (Cart.ExpirationDate) and considered abandoned. 
     * Carts of anonymous shoppers expire after 14 days of inactivity.
     * @type {boolean}
     * @memberof CartSummary
     */
    isExpired?: boolean | null;
    /**
     * Number of items in the active cart.
     * @type {number}
     * @memberof CartSummary
     */
    itemCount?: number | null;
    /**
     * Total cost of items in the active cart.
     * @type {number}
     * @memberof CartSummary
     */
    total?: number | null;
    /**
     * Total quantity of all items in the cart
     * @type {number}
     * @memberof CartSummary
     */
    totalQuantity?: number | null;
}
/**
 * Paged collection
 * @export
 * @interface ChangeMessageCollection
 */
export interface ChangeMessageCollection {
    /**
     * 
     * @type {Array<CommerceRuntimeChangeMessage>}
     * @memberof ChangeMessageCollection
     */
    items?: Array<CommerceRuntimeChangeMessage> | null;
    /**
     * 
     * @type {number}
     * @memberof ChangeMessageCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof ChangeMessageCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof ChangeMessageCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof ChangeMessageCollection
     */
    totalCount?: number;
}
/**
 * Channel used to group sites for commerce purposes.
 * @export
 * @interface Channel
 */
export interface Channel {
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof Channel
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * Code to uniquely identify the channel.
     * @type {string}
     * @memberof Channel
     */
    code?: string | null;
    /**
     * Country code of the channel.
     * @type {string}
     * @memberof Channel
     */
    countryCode?: string | null;
    /**
     * Code to uniquely identify the channel group, if any that contains this channel.
     * @type {string}
     * @memberof Channel
     */
    groupCode?: string | null;
    /**
     * Friendly name of the channel.
     * @type {string}
     * @memberof Channel
     */
    name?: string | null;
    /**
     * Region of the channel.
     * @type {string}
     * @memberof Channel
     */
    region?: string | null;
    /**
     * A list of site Id's that this channel contains.
     * @type {Array<number>}
     * @memberof Channel
     */
    siteIds?: Array<number> | null;
    /**
     * Tenant that owns the channel.
     * @type {number}
     * @memberof Channel
     */
    tenantId?: number;
}
/**
 * 
 * @export
 * @interface ChannelCollection
 */
export interface ChannelCollection {
    /**
     * 
     * @type {Array<Channel>}
     * @memberof ChannelCollection
     */
    items?: Array<Channel> | null;
    /**
     * 
     * @type {number}
     * @memberof ChannelCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof ChannelCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof ChannelCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof ChannelCollection
     */
    totalCount?: number;
}
/**
 * Used to group channels together to manage common channel information.
 * @export
 * @interface ChannelGroup
 */
export interface ChannelGroup {
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof ChannelGroup
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * Code to uniquely identify the channel.
     * @type {string}
     * @memberof ChannelGroup
     */
    code?: string | null;
    /**
     * Friendly name of the channel.
     * @type {string}
     * @memberof ChannelGroup
     */
    name?: string | null;
    /**
     * Tenant that owns the channel.
     * @type {number}
     * @memberof ChannelGroup
     */
    tenantId?: number;
}
/**
 * 
 * @export
 * @interface ChannelGroupCollection
 */
export interface ChannelGroupCollection {
    /**
     * 
     * @type {Array<ChannelGroup>}
     * @memberof ChannelGroupCollection
     */
    items?: Array<ChannelGroup> | null;
    /**
     * 
     * @type {number}
     * @memberof ChannelGroupCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof ChannelGroupCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof ChannelGroupCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof ChannelGroupCollection
     */
    totalCount?: number;
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
 * @interface Checkout
 */
export interface Checkout {
    /**
     * Does the customer accept marketing
     * @type {boolean}
     * @memberof Checkout
     */
    acceptsMarketing?: boolean | null;
    /**
     * 
     * @type {AlternateContact}
     * @memberof Checkout
     */
    alternateContact?: AlternateContact;
    /**
     * A counter for how much of the total has not been claimed by payments.
     * This is computed by Total - (sum of Payments where State is not Voided/Declined)
     * @type {number}
     * @memberof Checkout
     */
    amountRemainingForPayment?: number;
    /**
     * 
     * @type {Array<CommerceRuntimeOrderAttribute>}
     * @memberof Checkout
     */
    attributes?: Array<CommerceRuntimeOrderAttribute> | null;
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof Checkout
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * 
     * @type {Array<string>}
     * @memberof Checkout
     */
    availableActions?: Array<string> | null;
    /**
     * Unique identifier of the channel for this item.
     * @type {string}
     * @memberof Checkout
     */
    channelCode?: string | null;
    /**
     * Coupon codes associated with this order.
     * @type {Array<string>}
     * @memberof Checkout
     */
    couponCodes?: Array<string> | null;
    /**
     * ISO Currency Code.
     * @type {string}
     * @memberof Checkout
     */
    currencyCode?: string | null;
    /**
     * Unique identifier of the customer account.
     * @type {number}
     * @memberof Checkout
     */
    customerAccountId?: number | null;
    /**
     * Determines the interaction type that a customer will use to create this object.
     * Valid values are: Website, Store, Call, Unknown
     * @type {string}
     * @memberof Checkout
     */
    customerInteractionType?: string | null;
    /**
     * The customers tax ID. If Customer Account ID exists in the system, will set this.
     * @type {string}
     * @memberof Checkout
     */
    readonly customerTaxId?: string | null;
    /**
     * Custom data for a given vendor set within the commerce process.
     * @type {object}
     * @memberof Checkout
     */
    data?: object | null;
    /**
     * 
     * @type {Array<CommerceRuntimeDestination>}
     * @memberof Checkout
     */
    destinations?: Array<CommerceRuntimeDestination> | null;
    /**
     * List of Mozu.CommerceRuntime.Contracts.Commerce.ThresholdMessage objects that are valid for the current value of the cart/order.
     * @type {Array<ThresholdMessage>}
     * @memberof Checkout
     */
    discountThresholdMessages?: Array<ThresholdMessage> | null;
    /**
     * Total duty fees
     * @type {number}
     * @memberof Checkout
     */
    dutyTotal?: number | null;
    /**
     * Email address for checkout
     * @type {string}
     * @memberof Checkout
     */
    email?: string | null;
    /**
     * Total Fees
     * @type {number}
     * @memberof Checkout
     */
    feeTotal?: number;
    /**
     * List of checkout grouping.
     * @type {Array<CheckoutGrouping>}
     * @memberof Checkout
     */
    groupings?: Array<CheckoutGrouping> | null;
    /**
     * Pre-Discounted Handling Subtotal of the CommerceAggregate and its Items.
     * Returns `null` if the calculated value is negative.
     * @type {number}
     * @memberof Checkout
     */
    handlingSubTotal?: number;
    /**
     * Total tax on handling.
     * @type {number}
     * @memberof Checkout
     */
    handlingTaxTotal?: number;
    /**
     * Overall handling total, accounting for line and order-level handling costs, any handling discounts, and handling tax.
     * @type {number}
     * @memberof Checkout
     */
    handlingTotal?: number;
    /**
     * Unique identifier.
     * @type {string}
     * @memberof Checkout
     */
    id?: string | null;
    /**
     * A list of invalid coupons that were attempted on the order.
     * @type {Array<InvalidCoupon>}
     * @memberof Checkout
     */
    invalidCoupons?: Array<InvalidCoupon> | null;
    /**
     * IP address of the user placing the order. (User or customer?)
     * @type {string}
     * @memberof Checkout
     */
    ipAddress?: string | null;
    /**
     * Unique identifier of the customer account.
     * @type {boolean}
     * @memberof Checkout
     */
    readonly isTaxExempt?: boolean | null;
    /**
     * The total value of item-level handling discounts.
     * @type {number}
     * @memberof Checkout
     */
    itemLevelHandlingDiscountTotal?: number;
    /**
     * The total value of item-level product discounts.
     * @type {number}
     * @memberof Checkout
     */
    itemLevelProductDiscountTotal?: number;
    /**
     * The total value of item-level shipping discounts.
     * @type {number}
     * @memberof Checkout
     */
    itemLevelShippingDiscountTotal?: number;
    /**
     * Total tax on products.
     * @type {number}
     * @memberof Checkout
     */
    itemTaxTotal?: number;
    /**
     * The total product cost, accounting for discounts and tax.
     * @type {number}
     * @memberof Checkout
     */
    itemTotal?: number;
    /**
     * List of items in the checkout.
     * @type {Array<OrderItem>}
     * @memberof Checkout
     */
    items?: Array<OrderItem> | null;
    /**
     * Identifies the location at which the order was placed if the order was placed externally.
     * @type {string}
     * @memberof Checkout
     */
    locationCode?: string | null;
    /**
     * A checkout number that is only assigned after the checkout is placed.
     * @type {number}
     * @memberof Checkout
     */
    number?: number | null;
    /**
     * 
     * @type {Array<CommerceRuntimeAppliedDiscount>}
     * @memberof Checkout
     */
    orderDiscounts?: Array<CommerceRuntimeAppliedDiscount> | null;
    /**
     * The total value of order-level (group-level) handling discounts.
     * @type {number}
     * @memberof Checkout
     */
    orderLevelHandlingDiscountTotal?: number;
    /**
     * The total value of order-level (group-level) product discounts.
     * @type {number}
     * @memberof Checkout
     */
    orderLevelProductDiscountTotal?: number;
    /**
     * The total value of order-level (group-level) shipping discounts.
     * @type {number}
     * @memberof Checkout
     */
    orderLevelShippingDiscountTotal?: number;
    /**
     * Unique identifier for the cart that was converted to checkout.
     * @type {string}
     * @memberof Checkout
     */
    originalCartId?: string | null;
    /**
     * Payment transaction associated with this checkout. It is the entire payment interchange between the merchant 
     * who is forwarding the customer's payment information and the payment service who is authorizing and 
     * capturing payment. Payment can be either by credit card, check, or PayPal.
     * @type {Array<Payment>}
     * @memberof Checkout
     */
    payments?: Array<Payment> | null;
    /**
     * Pricelist code for the checkout
     * @type {string}
     * @memberof Checkout
     */
    priceListCode?: string | null;
    /**
     * Shipping does not appear on cart.
     * @type {number}
     * @memberof Checkout
     */
    shippingSubTotal?: number;
    /**
     * Total tax on shipping.
     * @type {number}
     * @memberof Checkout
     */
    shippingTaxTotal?: number;
    /**
     * Overall shipping total, accounting for item and order-level shipping costs, any shipping discounts, and shipping tax.
     * @type {number}
     * @memberof Checkout
     */
    shippingTotal?: number;
    /**
     * 
     * @type {ShopperNotes}
     * @memberof Checkout
     */
    shopperNotes?: ShopperNotes;
    /**
     * Unique identifier of the Site.
     * @type {number}
     * @memberof Checkout
     */
    siteId?: number;
    /**
     * Source device of the user placing the order. (User or customer?)
     * @type {string}
     * @memberof Checkout
     */
    sourceDevice?: string | null;
    /**
     * Subtotal before any coupon codes, taxes, fees, etc.
     * @type {number}
     * @memberof Checkout
     */
    subTotal?: number;
    /**
     * When the customer placed (submitted) the order.
     * @type {string}
     * @memberof Checkout
     */
    submittedDate?: string | null;
    /**
     * 
     * @type {Array<SuggestedDiscount>}
     * @memberof Checkout
     */
    suggestedDiscounts?: Array<SuggestedDiscount> | null;
    /**
     * Storage for any additional/custom tax data.
     * @type {object}
     * @memberof Checkout
     */
    taxData?: object | null;
    /**
     * Unique identifier of the Tenant.
     * @type {number}
     * @memberof Checkout
     */
    tenantId?: number;
    /**
     * Final total
     * @type {number}
     * @memberof Checkout
     */
    total?: number;
    /**
     * Is this Order Online or Offline? Online means shopper entered at checkout, offline means a phone order.
     * @type {string}
     * @memberof Checkout
     */
    type?: string | null;
    /**
     * Identifies the Visit ID that was current when the order was placed or when the cart was last updated.
     * @type {string}
     * @memberof Checkout
     */
    visitId?: string | null;
    /**
     * Identifies the web session used to place the order or last update the cart.
     * @type {string}
     * @memberof Checkout
     */
    webSessionId?: string | null;
}
/**
 * 
 * @export
 * @interface CheckoutAction
 */
export interface CheckoutAction {
    /**
     * 
     * @type {string}
     * @memberof CheckoutAction
     */
    actionName?: string | null;
}
/**
 * Paged collection of checkouts.
 * @export
 * @interface CheckoutCollection
 */
export interface CheckoutCollection {
    /**
     * 
     * @type {Array<Checkout>}
     * @memberof CheckoutCollection
     */
    items?: Array<Checkout> | null;
    /**
     * 
     * @type {number}
     * @memberof CheckoutCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof CheckoutCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof CheckoutCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof CheckoutCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface CheckoutGroupRates
 */
export interface CheckoutGroupRates {
    /**
     * 
     * @type {string}
     * @memberof CheckoutGroupRates
     */
    groupingId?: string | null;
    /**
     * 
     * @type {Array<CommerceRuntimeShippingRate>}
     * @memberof CheckoutGroupRates
     */
    shippingRates?: Array<CommerceRuntimeShippingRate> | null;
}
/**
 * 
 * @export
 * @interface CheckoutGroupShippingMethod
 */
export interface CheckoutGroupShippingMethod {
    /**
     * 
     * @type {string}
     * @memberof CheckoutGroupShippingMethod
     */
    groupingId?: string | null;
    /**
     * 
     * @type {CommerceRuntimeShippingRate}
     * @memberof CheckoutGroupShippingMethod
     */
    shippingRate?: CommerceRuntimeShippingRate;
}
/**
 * 
 * @export
 * @interface CheckoutGrouping
 */
export interface CheckoutGrouping {
    /**
     * The DestinationId used by items in this grouping, which may be `null`.
     * @type {string}
     * @memberof CheckoutGrouping
     */
    destinationId?: string | null;
    /**
     * Any duty fee applied directly to this group. Items can also have their own duty fee.
     * @type {number}
     * @memberof CheckoutGrouping
     */
    dutyAmount?: number | null;
    /**
     * Total raw duty amounts for this group.
     * @type {number}
     * @memberof CheckoutGrouping
     */
    dutyTotal?: number;
    /**
     * The FulfillmentMethod used by items in this grouping.
     * @type {string}
     * @memberof CheckoutGrouping
     */
    fulfillmentMethod?: string | null;
    /**
     * The handling fee amount that's applicable to this grouping.
     * @type {number}
     * @memberof CheckoutGrouping
     */
    handlingAmount?: number | null;
    /**
     * 
     * @type {Array<CommerceRuntimeAppliedDiscount>}
     * @memberof CheckoutGrouping
     */
    handlingDiscounts?: Array<CommerceRuntimeAppliedDiscount> | null;
    /**
     * The total raw handling amounts minus handling discounts.
     * @type {number}
     * @memberof CheckoutGrouping
     */
    handlingSubTotal?: number;
    /**
     * Group-level handling tax. Does not account for item handling tax.
     * @type {number}
     * @memberof CheckoutGrouping
     */
    handlingTax?: number | null;
    /**
     * The total handling tax for this group, accounting for both group-level and item-level handling tax.
     * @type {number}
     * @memberof CheckoutGrouping
     */
    handlingTaxTotal?: number;
    /**
     * The total handling cost for this group, accounting for discounts and tax.
     * @type {number}
     * @memberof CheckoutGrouping
     */
    handlingTotal?: number;
    /**
     * A unique identifier for this grouping.
     * @type {string}
     * @memberof CheckoutGrouping
     */
    id?: string | null;
    /**
     * The total value of item-level handling discounts applied to this group.
     * @type {number}
     * @memberof CheckoutGrouping
     */
    itemLevelHandlingDiscountTotal?: number;
    /**
     * The total value of item-level shipping discounts applied to this group.
     * @type {number}
     * @memberof CheckoutGrouping
     */
    itemLevelShippingDiscountTotal?: number;
    /**
     * Identifiers of the items that make up this grouping.
     * @type {Array<string>}
     * @memberof CheckoutGrouping
     */
    orderItemIds?: Array<string> | null;
    /**
     * The total value of order-level (group-level) handling discounts applied to this group.
     * @type {number}
     * @memberof CheckoutGrouping
     */
    orderLevelHandlingDiscountTotal?: number;
    /**
     * The total value of order-level (group-level) shipping discounts applied to this group.
     * @type {number}
     * @memberof CheckoutGrouping
     */
    orderLevelShippingDiscountTotal?: number;
    /**
     * If a shipping method applies directly to this grouping (versus the items), this is the raw shipping amount for the group.
     * @type {number}
     * @memberof CheckoutGrouping
     */
    shippingAmount?: number | null;
    /**
     * 
     * @type {Array<ShippingDiscount>}
     * @memberof CheckoutGrouping
     */
    shippingDiscounts?: Array<ShippingDiscount> | null;
    /**
     * Code that uniquely identifies the shipping method such as "Ground," "Overnight," or "Digital."
     * The site's shipping settings lists the valid shipping methods specified for this site.
     * @type {string}
     * @memberof CheckoutGrouping
     */
    shippingMethodCode?: string | null;
    /**
     * Readable name of the shipping method.
     * @type {string}
     * @memberof CheckoutGrouping
     */
    shippingMethodName?: string | null;
    /**
     * The raw shipping amount minus shipping discounts.
     * @type {number}
     * @memberof CheckoutGrouping
     */
    shippingSubTotal?: number;
    /**
     * Group-level shipping tax. Does not account for item shipping tax.
     * @type {number}
     * @memberof CheckoutGrouping
     */
    shippingTax?: number | null;
    /**
     * The total shipping tax for this group, accounting for both group-level and item-level shipping tax.
     * @type {number}
     * @memberof CheckoutGrouping
     */
    shippingTaxTotal?: number;
    /**
     * The total shipping cost for this group, accounting for discounts and tax.
     * @type {number}
     * @memberof CheckoutGrouping
     */
    shippingTotal?: number;
    /**
     * Indicates whether a non ship group should combine with a ship group
     * @type {boolean}
     * @memberof CheckoutGrouping
     */
    standaloneGroup?: boolean;
    /**
     * 
     * @type {object}
     * @memberof CheckoutGrouping
     */
    taxData?: object | null;
}
/**
 * 
 * @export
 * @interface CollectionOfDigitalPackageItem
 */
export interface CollectionOfDigitalPackageItem {
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof CollectionOfDigitalPackageItem
     */
    auditInfo?: CoreApiContractsAuditInfo;
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
    /**
     * A human-readable identifier for this fulfillment unit.  If not set on create, will be autogenerated as a string of the form
     *     {fulfillmentUnitType} #{next available int}
     * @type {string}
     * @memberof CollectionOfDigitalPackageItem
     */
    code?: string | null;
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
     * ID of the fulfillment unit.
     * @type {string}
     * @memberof CollectionOfDigitalPackageItem
     */
    id?: string | null;
    /**
     * List of items in the fulfillment unit
     * @type {Array<DigitalPackageItem>}
     * @memberof CollectionOfDigitalPackageItem
     */
    items?: Array<DigitalPackageItem> | null;
    /**
     * Status of the fulfillment unit
     * See FulfillmentStatusConst
     * @type {string}
     * @memberof CollectionOfDigitalPackageItem
     */
    status?: string | null;
}
/**
 * 
 * @export
 * @interface CollectionOfPackageItem
 */
export interface CollectionOfPackageItem {
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof CollectionOfPackageItem
     */
    auditInfo?: CoreApiContractsAuditInfo;
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
    /**
     * A human-readable identifier for this fulfillment unit.  If not set on create, will be autogenerated as a string of the form
     *     {fulfillmentUnitType} #{next available int}
     * @type {string}
     * @memberof CollectionOfPackageItem
     */
    code?: string | null;
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
     * ID of the fulfillment unit.
     * @type {string}
     * @memberof CollectionOfPackageItem
     */
    id?: string | null;
    /**
     * List of items in the fulfillment unit
     * @type {Array<PackageItem>}
     * @memberof CollectionOfPackageItem
     */
    items?: Array<PackageItem> | null;
    /**
     * Status of the fulfillment unit
     * See FulfillmentStatusConst
     * @type {string}
     * @memberof CollectionOfPackageItem
     */
    status?: string | null;
}
/**
 * 
 * @export
 * @interface CollectionOfPickupItem
 */
export interface CollectionOfPickupItem {
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof CollectionOfPickupItem
     */
    auditInfo?: CoreApiContractsAuditInfo;
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
    /**
     * A human-readable identifier for this fulfillment unit.  If not set on create, will be autogenerated as a string of the form
     *     {fulfillmentUnitType} #{next available int}
     * @type {string}
     * @memberof CollectionOfPickupItem
     */
    code?: string | null;
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
     * ID of the fulfillment unit.
     * @type {string}
     * @memberof CollectionOfPickupItem
     */
    id?: string | null;
    /**
     * List of items in the fulfillment unit
     * @type {Array<CommerceRuntimePickupItem>}
     * @memberof CollectionOfPickupItem
     */
    items?: Array<CommerceRuntimePickupItem> | null;
    /**
     * Status of the fulfillment unit
     * See FulfillmentStatusConst
     * @type {string}
     * @memberof CollectionOfPickupItem
     */
    status?: string | null;
}
/**
 * Base class for cart and order
 * @export
 * @interface CommerceAggregate
 */
export interface CommerceAggregate {
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof CommerceAggregate
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * List of messages displayed by the system based on the last cart action, for example, when a product price has changed or is out-of-stock. System-supplied and read-only.
     * @type {Array<CommerceRuntimeChangeMessage>}
     * @memberof CommerceAggregate
     */
    changeMessages?: Array<CommerceRuntimeChangeMessage> | null;
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
     * Determines the interaction type that a customer will use to create this object.
     * Valid values are: Website, Store, Call, Unknown
     * @type {string}
     * @memberof CommerceAggregate
     */
    customerInteractionType?: string | null;
    /**
     * Custom data for a given vendor set within the commerce process.
     * @type {object}
     * @memberof CommerceAggregate
     */
    data?: object | null;
    /**
     * List of Mozu.CommerceRuntime.Contracts.Commerce.ThresholdMessage objects that are valid for the current value of the cart/order.
     * @type {Array<ThresholdMessage>}
     * @memberof CommerceAggregate
     */
    discountThresholdMessages?: Array<ThresholdMessage> | null;
    /**
     * Amount of the discounts applied to all items in the cart. This is a negative number.  This also includes the order level discounts.
     * @type {number}
     * @memberof CommerceAggregate
     */
    discountTotal?: number | null;
    /**
     * Combined price for all cart items, including all selected options as well as any discounts.
     * @type {number}
     * @memberof CommerceAggregate
     */
    discountedSubtotal?: number | null;
    /**
     * Subtotal minus the discounted total
     * @type {number}
     * @memberof CommerceAggregate
     */
    discountedTotal?: number | null;
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
     * Extra properties (key-value pairs) that extend the primary object. Think of this as a property bag of string keys and string values.
     * @type {Array<ExtendedProperty>}
     * @memberof CommerceAggregate
     */
    extendedProperties?: Array<ExtendedProperty> | null;
    /**
     * Not implemented. Total cost of fees for all items in the cart.
     * @type {number}
     * @memberof CommerceAggregate
     */
    feeTotal?: number | null;
    /**
     * 
     * @type {FulfillmentInfo}
     * @memberof CommerceAggregate
     */
    fulfillmentInfo?: FulfillmentInfo;
    /**
     * Total tax on handling
     * @type {number}
     * @memberof CommerceAggregate
     */
    handlingTaxTotal?: number | null;
    /**
     * Unique identifier of the CommerceAggregate object (e.g. order, cart, wishlist, etc.).
     * @type {string}
     * @memberof CommerceAggregate
     */
    id?: string | null;
    /**
     * Not implemented. Tax does not appear on cart.
     * @type {number}
     * @memberof CommerceAggregate
     */
    itemTaxTotal?: number | null;
    /**
     * Occasionally the commerce runtime may validate that item/product names, descriptions, and prices have not changed. 
     * If changed, it updates LastValidationDate.
     * @type {string}
     * @memberof CommerceAggregate
     */
    lastValidationDate?: string | null;
    /**
     * Line Item Subtotals with Order Adjustments
     * @type {number}
     * @memberof CommerceAggregate
     */
    lineItemSubtotalWithOrderAdjustments?: number | null;
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
    rejectedDiscounts?: Array<SuggestedDiscount> | null;
    /**
     * Shipping Amount before discount and adjustments
     * @type {number}
     * @memberof CommerceAggregate
     */
    shippingAmountBeforeDiscountsAndAdjustments?: number | null;
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
     * Shipping does not appear on cart.
     * @type {number}
     * @memberof CommerceAggregate
     */
    shippingTotal?: number | null;
    /**
     * Unique identifier of the Site.
     * @type {number}
     * @memberof CommerceAggregate
     */
    siteId?: number | null;
    /**
     * Combined price for all cart items, including all selected options but excluding any discounts.
     * @type {number}
     * @memberof CommerceAggregate
     */
    subtotal?: number | null;
    /**
     * 
     * @type {Array<SuggestedDiscount>}
     * @memberof CommerceAggregate
     */
    suggestedDiscounts?: Array<SuggestedDiscount> | null;
    /**
     * Storage for any additional/custom tax data.
     * @type {object}
     * @memberof CommerceAggregate
     */
    taxData?: object | null;
    /**
     * Tax does not appear on cart.
     * @type {number}
     * @memberof CommerceAggregate
     */
    taxTotal?: number | null;
    /**
     * Unique identifier of the Tenant.
     * @type {number}
     * @memberof CommerceAggregate
     */
    tenantId?: number | null;
    /**
     * Final total amount of the order including all discounts, shipping, and tax.
     * @type {number}
     * @memberof CommerceAggregate
     */
    total?: number | null;
    /**
     * Unique identifier of the shopper who created the cart.
     * @type {string}
     * @memberof CommerceAggregate
     */
    userId?: string | null;
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
}
/**
 * Base class for cart and order items
 * @export
 * @interface CommerceItem
 */
export interface CommerceItem {
    /**
     * Order Level taxable sub total
     * @type {number}
     * @memberof CommerceItem
     */
    adjustedLineItemSubtotal?: number | null;
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof CommerceItem
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * Track the discountId from which the item was auto added
     * @type {number}
     * @memberof CommerceItem
     */
    autoAddDiscountId?: number | null;
    /**
     * List of Child Item Ids for this order item
     * @type {Array<string>}
     * @memberof CommerceItem
     */
    childItemIds?: Array<string> | null;
    /**
     * Custom data for a given vendor set within the commerce process.
     * @type {object}
     * @memberof CommerceItem
     */
    data?: object | null;
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
     * Indicate Duty Amount for this item.
     * @type {number}
     * @memberof CommerceItem
     */
    dutyAmount?: number | null;
    /**
     * Line item extended total (quantity multiplied by unit extended price) before discounts.
     * @type {number}
     * @memberof CommerceItem
     */
    extendedTotal?: number | null;
    /**
     * Not implemented. Total cost of fees that apply to this item.
     * @type {number}
     * @memberof CommerceItem
     */
    feeTotal?: number | null;
    /**
     * Product-level handling fee for this item (e.g. special packaging, hazmat fees).
     * This does NOT include order-level handling fees — those are in Mozu.CommerceRuntime.Contracts.Commerce.CommerceItem.WeightedOrderHandlingFee.
     * Total handling on the shipment = HandlingAmount + WeightedOrderHandlingFee.
     * @type {number}
     * @memberof CommerceItem
     */
    handlingAmount?: number | null;
    /**
     * 
     * @type {Array<InventoryTags>}
     * @memberof CommerceItem
     */
    inventoryTags?: Array<InventoryTags> | null;
    /**
     * Assembly Required for this order item
     * @type {boolean}
     * @memberof CommerceItem
     */
    isAssemblyRequired?: boolean;
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
     * Total price of taxes that apply to products in this item.
     * @type {number}
     * @memberof CommerceItem
     */
    itemTaxTotal?: number | null;
    /**
     * The line id assigned to the order item. Visible only in the Admin, this is set from the Admin or
     * in CommerceRuntime when a cart is converted to an order.
     * @type {number}
     * @memberof CommerceItem
     */
    lineId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceItem
     */
    lineItemAdjustment?: number | null;
    /**
     * Locale code for language that appears in text and descriptions on the site, for example, en_US. 
     * This is not the currency code. Currently only en_US is supported.
     * @type {string}
     * @memberof CommerceItem
     */
    localeCode?: string | null;
    /**
     * Indicates Parent Item Id for this order item
     * @type {string}
     * @memberof CommerceItem
     */
    parentItemId?: string | null;
    /**
     * 
     * @type {CommerceRuntimeProduct}
     * @memberof CommerceItem
     */
    product?: CommerceRuntimeProduct;
    /**
     * 
     * @type {AppliedLineItemProductDiscount}
     * @memberof CommerceItem
     */
    productDiscount?: AppliedLineItemProductDiscount;
    /**
     * A list of discounts applied to the product
     * @type {Array<AppliedLineItemProductDiscount>}
     * @memberof CommerceItem
     */
    productDiscounts?: Array<AppliedLineItemProductDiscount> | null;
    /**
     * The location where the product is being purchased.. default is null. Products can have different prices
     * by purchaseLocation via custom priceListResolution...
     * @type {string}
     * @memberof CommerceItem
     */
    purchaseLocation?: string | null;
    /**
     * Number of products ordered.
     * @type {number}
     * @memberof CommerceItem
     */
    quantity?: number;
    /**
     * Shipping amount before Discounts and adjustments
     * @type {number}
     * @memberof CommerceItem
     */
    shippingAmountBeforeDiscountsAndAdjustments?: number | null;
    /**
     * A discount applied to the shipping
     * @type {Array<AppliedLineItemShippingDiscount>}
     * @memberof CommerceItem
     */
    shippingDiscounts?: Array<AppliedLineItemShippingDiscount> | null;
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
     * 
     * @type {SubstituteInfo}
     * @memberof CommerceItem
     */
    substituteInfo?: SubstituteInfo;
    /**
     * Line item subtotal (quantity multiplied by price) before discounts.
     * @type {number}
     * @memberof CommerceItem
     */
    subtotal?: number | null;
    /**
     * Storage for any additional/custom tax data.
     * @type {object}
     * @memberof CommerceItem
     */
    taxData?: object | null;
    /**
     * Line item subtotal (quantity multiplied by price) before discounts.
     * @type {number}
     * @memberof CommerceItem
     */
    taxableTotal?: number | null;
    /**
     * Total price of this cart item taking into account any discounts.
     * @type {number}
     * @memberof CommerceItem
     */
    total?: number | null;
    /**
     * Line item total with line item, Tax, Weighted Tax with Weighted shipping and handling costs
     * @type {number}
     * @memberof CommerceItem
     */
    totalWithWeightedShippingAndHandling?: number | null;
    /**
     * Taxable Subtotal including Weighted Order amounts
     * @type {number}
     * @memberof CommerceItem
     */
    totalWithoutWeightedShippingAndHandling?: number | null;
    /**
     * 
     * @type {CommerceUnitPrice}
     * @memberof CommerceItem
     */
    unitPrice?: CommerceUnitPrice;
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
     * Order Level Duty applied to this Item
     * @type {number}
     * @memberof CommerceItem
     */
    weightedOrderDuty?: number | null;
    /**
     * Order-level handling manual adjustment allocated to this item.
     * @type {number}
     * @memberof CommerceItem
     */
    weightedOrderHandlingAdjustment?: number | null;
    /**
     * Order-level handling fee allocated to this item (e.g. flat handling fee spread across all items).
     * This is separate from product-level handling in Mozu.CommerceRuntime.Contracts.Commerce.CommerceItem.HandlingAmount.
     * Total handling on the shipment = HandlingAmount + WeightedOrderHandlingFee.
     * @type {number}
     * @memberof CommerceItem
     */
    weightedOrderHandlingFee?: number | null;
    /**
     * Order-level handling fee discount allocated to this item.
     * @type {number}
     * @memberof CommerceItem
     */
    weightedOrderHandlingFeeDiscount?: number | null;
    /**
     * Total handling tax for this item (covers both product-level and order-level handling tax combined).
     * On the shipment item, this is split into: HandlingTax (total) and WeightedOrderHandlingFeeTax (order-level portion only).
     * @type {number}
     * @memberof CommerceItem
     */
    weightedOrderHandlingFeeTax?: number | null;
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
     * Order Level tax applied to this Item
     * @type {number}
     * @memberof CommerceItem
     */
    weightedOrderTax?: number | null;
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
 * @interface CommerceRuntimeAppeasementReason
 */
export interface CommerceRuntimeAppeasementReason {
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAppeasementReason
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAppeasementReason
     */
    moreInfo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAppeasementReason
     */
    reasonCode?: string | null;
}
/**
 * Discount applied to the order, which is a negative number to be subtracted from the original price to get the final price. 
 * If multiple discounts for the order exist, this is the value most advantageous to the shopper.
 * @export
 * @interface CommerceRuntimeAppliedDiscount
 */
export interface CommerceRuntimeAppliedDiscount {
    /**
     * Code of the coupon associated with the discount if a coupon code is required to get the discount.
     * @type {string}
     * @memberof CommerceRuntimeAppliedDiscount
     */
    couponCode?: string | null;
    /**
     * Stores any custom data sent from external discounts.
     * @type {object}
     * @memberof CommerceRuntimeAppliedDiscount
     */
    data?: object | null;
    /**
     * 
     * @type {Discount}
     * @memberof CommerceRuntimeAppliedDiscount
     */
    discount?: Discount;
    /**
     * Determines whether or not this discount is set up to be ignored by the pricing runtime.
     * @type {boolean}
     * @memberof CommerceRuntimeAppliedDiscount
     */
    excluded?: boolean | null;
    /**
     * Group identifier for the discount.
     * @type {string}
     * @memberof CommerceRuntimeAppliedDiscount
     */
    groupId?: string | null;
    /**
     * Value of the discount applied. This is a negative number to be subtracted from the original price to get the final price.
     * @type {number}
     * @memberof CommerceRuntimeAppliedDiscount
     */
    impact?: number | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeAppliedLineItemProductDiscount
 */
export interface CommerceRuntimeAppliedLineItemProductDiscount {
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeAppliedLineItemProductDiscount
     */
    discountQuantity?: any | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeAppliedLineItemShippingDiscount
 */
export interface CommerceRuntimeAppliedLineItemShippingDiscount {
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeAppliedLineItemShippingDiscount
     */
    discountQuantity?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeAppliedLineItemShippingDiscount
     */
    impactPerUnit?: any | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeAttribute
 */
export interface CommerceRuntimeAttribute {
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
    attributeCode: string;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttribute
     */
    attributeFQN?: string | null;
    /**
     * 
     * @type {Array<CommerceRuntimeAttributeMetadataItem>}
     * @memberof CommerceRuntimeAttribute
     */
    attributeMetadata?: Array<CommerceRuntimeAttributeMetadataItem> | null;
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof CommerceRuntimeAttribute
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeAttribute
     */
    availableForDiscounts?: boolean;
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
    availableInRules?: boolean;
    /**
     * 
     * @type {CommerceRuntimeAttributeLocalizedContent}
     * @memberof CommerceRuntimeAttribute
     */
    content?: CommerceRuntimeAttributeLocalizedContent;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttribute
     */
    dataType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttribute
     */
    displayGroup: string;
    /**
     * 
     * @type {Array<AttributeEntityConfig>}
     * @memberof CommerceRuntimeAttribute
     */
    entityConfigs?: Array<AttributeEntityConfig> | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeAttribute
     */
    id?: number | null;
    /**
     * 
     * @type {Array<AttributeInheritanceRule>}
     * @memberof CommerceRuntimeAttribute
     */
    inheritanceRules?: Array<AttributeInheritanceRule> | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttribute
     */
    inputType?: string | null;
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
    isMultiValued?: boolean | null;
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
    isRequired?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeAttribute
     */
    isVisible?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttribute
     */
    namespace?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeAttribute
     */
    order?: number | null;
    /**
     * 
     * @type {CommerceRuntimeAttributeValidation}
     * @memberof CommerceRuntimeAttribute
     */
    validation?: CommerceRuntimeAttributeValidation;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttribute
     */
    valueType: string;
    /**
     * 
     * @type {Array<CommerceRuntimeAttributeVocabularyValue>}
     * @memberof CommerceRuntimeAttribute
     */
    vocabularyValues?: Array<CommerceRuntimeAttributeVocabularyValue> | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeAttributeCollection
 */
export interface CommerceRuntimeAttributeCollection {
    /**
     * 
     * @type {Array<CommerceRuntimeAttribute>}
     * @memberof CommerceRuntimeAttributeCollection
     */
    items?: Array<CommerceRuntimeAttribute> | null;
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
 * @interface CommerceRuntimeAttributeVocabularyValue
 */
export interface CommerceRuntimeAttributeVocabularyValue {
    /**
     * 
     * @type {AttributeValueLocalizedContent}
     * @memberof CommerceRuntimeAttributeVocabularyValue
     */
    content?: AttributeValueLocalizedContent;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeAttributeVocabularyValue
     */
    isHidden?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeAttributeVocabularyValue
     */
    sequence?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttributeVocabularyValue
     */
    value: string;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeBillingInfo
 */
export interface CommerceRuntimeBillingInfo {
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeBillingInfo
     */
    isRecurring?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeBillingInfo
     */
    isSameBillingShippingAddress?: any | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeBundledProduct
 */
export interface CommerceRuntimeBundledProduct {
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeBundledProduct
     */
    quantity?: any | null;
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
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeCanceledReason
     */
    moreInfo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeCanceledReason
     */
    reasonCode?: string | null;
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
     * Monetary amount that pertains to the change if applicable
     * @type {number}
     * @memberof CommerceRuntimeChangeMessage
     * @deprecated
     */
    amount?: number | null;
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
     * Additional Data. This property will be a Dictionary of objects.
     * @type {{ [key: string]: any; }}
     * @memberof CommerceRuntimeChangeMessage
     */
    attributes?: { [key: string]: any; } | null;
    /**
     * Correlation Id
     * @type {string}
     * @memberof CommerceRuntimeChangeMessage
     */
    correlationId?: string | null;
    /**
     * When the message was created. System-supplied. Read-only.
     * @type {string}
     * @memberof CommerceRuntimeChangeMessage
     */
    createDate?: string | null;
    /**
     * Unique identifier of the  message. System-supplied. Read-only.
     * @type {string}
     * @memberof CommerceRuntimeChangeMessage
     */
    id?: string | null;
    /**
     * Unique identifier to what the message pertains, which can be a cart item, cart or another generic entity. System-supplied. Read-only.
     * @type {string}
     * @memberof CommerceRuntimeChangeMessage
     */
    identifier?: string | null;
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
     * Current price of the item. System-supplied. Read-only.
     * @type {string}
     * @memberof CommerceRuntimeChangeMessage
     * @deprecated
     */
    newValue?: string | null;
    /**
     * Original price of the item. System-supplied. Read-only.
     * @type {string}
     * @memberof CommerceRuntimeChangeMessage
     * @deprecated
     */
    oldValue?: string | null;
    /**
     * Text on the subject line of the message, for example, the product name. System-supplied. Read-only.
     * @type {string}
     * @memberof CommerceRuntimeChangeMessage
     */
    subject?: string | null;
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
     * User First Name
     * @type {string}
     * @memberof CommerceRuntimeChangeMessage
     */
    userFirstName?: string | null;
    /**
     * User Id that identifies the user that performed the related change
     * @type {string}
     * @memberof CommerceRuntimeChangeMessage
     */
    userId?: string | null;
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
     * Action applicable to the message. This can be "Increased," when the product price has increased, "Decreased," when the 
     * product price has decreased, and "Invalidated," when the product is no longer available. System-supplied. Read-only.
     * @type {string}
     * @memberof CommerceRuntimeChangeMessage
     */
    verb?: string | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeCommerceItem
 */
export interface CommerceRuntimeCommerceItem {
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeCommerceItem
     */
    isAssemblyRequired?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeCommerceItem
     */
    quantity?: any | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeContact
 */
export interface CommerceRuntimeContact {
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeContact
     */
    email?: any | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeCredit
 */
export interface CommerceRuntimeCredit {
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeCredit
     */
    amount?: any | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeCustomer
 */
export interface CommerceRuntimeCustomer {
    /**
     * 
     * @type {Contact}
     * @memberof CommerceRuntimeCustomer
     */
    customerContact?: Contact;
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
 * @interface CommerceRuntimeDeliveryWindow
 */
export interface CommerceRuntimeDeliveryWindow {
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeDeliveryWindow
     */
    endTime?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeDeliveryWindow
     */
    startTime?: any | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeDestination
 */
export interface CommerceRuntimeDestination {
    /**
     * Custom data
     * @type {object}
     * @memberof CommerceRuntimeDestination
     */
    data?: object | null;
    /**
     * 
     * @type {Contact}
     * @memberof CommerceRuntimeDestination
     */
    destinationContact?: Contact;
    /**
     * An identifier for this entry.
     * @type {string}
     * @memberof CommerceRuntimeDestination
     */
    id?: string | null;
    /**
     * Indicates that the destination is commercial
     * @type {boolean}
     * @memberof CommerceRuntimeDestination
     */
    isDestinationCommercial?: boolean | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeDiscount
 */
export interface CommerceRuntimeDiscount {
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeDiscount
     */
    hasMultipleTargetProducts?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeDiscount
     */
    id?: any | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeFulfillmentField
 */
export interface CommerceRuntimeFulfillmentField {
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeFulfillmentField
     */
    required?: any | null;
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
    allocated?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeFutureInventory
     */
    available?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeFutureInventory
     */
    createDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeFutureInventory
     */
    deliveryDate?: string | null;
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
    pending?: number | null;
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
 * @interface CommerceRuntimeOrder
 */
export interface CommerceRuntimeOrder {
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeOrder
     */
    amountAvailableForRefund?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeOrder
     */
    amountRefunded?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeOrder
     */
    amountRemainingForPayment?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeOrder
     */
    continuityOrderOrdinal?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeOrder
     */
    email?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeOrder
     */
    externalId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeOrder
     */
    isContinuityOrder?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeOrder
     */
    isEligibleForReturns?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeOrder
     */
    isFulfillable?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeOrder
     */
    isOptInForSms?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeOrder
     */
    isPartialOrder?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeOrder
     */
    isUnified?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeOrder
     */
    items?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeOrder
     */
    readyToCapture?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeOrder
     */
    sourceDevice?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeOrder
     */
    totalCollected?: any | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeOrderAttribute
 */
export interface CommerceRuntimeOrderAttribute {
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeOrderAttribute
     */
    attributeDefinitionId?: number | null;
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof CommerceRuntimeOrderAttribute
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeOrderAttribute
     */
    fullyQualifiedName?: string | null;
    /**
     * 
     * @type {Array<any>}
     * @memberof CommerceRuntimeOrderAttribute
     */
    values?: Array<any> | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeOrderCanceledItem
 */
export interface CommerceRuntimeOrderCanceledItem {
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeOrderCanceledItem
     */
    canceledQuantity?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeOrderCanceledItem
     */
    originalQuantity?: any | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeOrderItem
 */
export interface CommerceRuntimeOrderItem {
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeOrderItem
     */
    isReservationEnabled?: any | null;
}
/**
 * Describes a package that will be shipped to somebody
 * @export
 * @interface CommerceRuntimePackage
 */
export interface CommerceRuntimePackage {
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimePackage
     */
    hasLabel?: any | null;
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof CommerceRuntimePackage
     */
    auditInfo?: CoreApiContractsAuditInfo;
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
    /**
     * A human-readable identifier for this fulfillment unit.  If not set on create, will be autogenerated as a string of the form
     *     {fulfillmentUnitType} #{next available int}
     * @type {string}
     * @memberof CommerceRuntimePackage
     */
    code?: string | null;
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
     * ID of the fulfillment unit.
     * @type {string}
     * @memberof CommerceRuntimePackage
     */
    id?: string | null;
    /**
     * List of items in the fulfillment unit
     * @type {Array<PackageItem>}
     * @memberof CommerceRuntimePackage
     */
    items?: Array<PackageItem> | null;
    /**
     * Status of the fulfillment unit
     * See FulfillmentStatusConst
     * @type {string}
     * @memberof CommerceRuntimePackage
     */
    status?: string | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof CommerceRuntimePackage
     */
    attributes?: { [key: string]: any; } | null;
    /**
     * Carrier of this package
     * @type {string}
     * @memberof CommerceRuntimePackage
     */
    carrier?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimePackage
     */
    fxcbDocumentsUrl?: string | null;
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
    integratorId?: string | null;
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
    manifestId?: string | null;
    /**
     * 
     * @type {CommerceRuntimePackageMeasurements}
     * @memberof CommerceRuntimePackage
     */
    measurements?: CommerceRuntimePackageMeasurements;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimePackage
     */
    packageId?: string | null;
    /**
     * Packaging type of this package
     * @type {string}
     * @memberof CommerceRuntimePackage
     */
    packagingType?: string | null;
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
     * @type {string}
     * @memberof CommerceRuntimePackage
     */
    returnCarrier?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof CommerceRuntimePackage
     */
    returnTrackingNumbers?: Array<string> | null;
    /**
     * 
     * @type {Array<CommerceRuntimeTracking>}
     * @memberof CommerceRuntimePackage
     */
    returnTrackings?: Array<CommerceRuntimeTracking> | null;
    /**
     * ID of the related shipment
     * @type {string}
     * @memberof CommerceRuntimePackage
     */
    shipmentId?: string | null;
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
     * SignatureRequired for this package
     * @type {boolean}
     * @memberof CommerceRuntimePackage
     */
    signatureRequired?: boolean | null;
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
     * Tracking number and url data for this package
     * @type {Array<CommerceRuntimeTracking>}
     * @memberof CommerceRuntimePackage
     */
    trackings?: Array<CommerceRuntimeTracking> | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimePackageAllOf
 */
export interface CommerceRuntimePackageAllOf {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof CommerceRuntimePackageAllOf
     */
    attributes?: { [key: string]: any; } | null;
    /**
     * Carrier of this package
     * @type {string}
     * @memberof CommerceRuntimePackageAllOf
     */
    carrier?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimePackageAllOf
     */
    fxcbDocumentsUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimePackageAllOf
     */
    fxcbPackNotificationId?: string | null;
    /**
     * If there is a shipping label present for this Package, this will be set to true
     * @type {boolean}
     * @memberof CommerceRuntimePackageAllOf
     */
    hasLabel?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimePackageAllOf
     */
    integratorId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimePackageAllOf
     */
    labelFormat?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimePackageAllOf
     */
    manifestId?: string | null;
    /**
     * 
     * @type {CommerceRuntimePackageMeasurements}
     * @memberof CommerceRuntimePackageAllOf
     */
    measurements?: CommerceRuntimePackageMeasurements;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimePackageAllOf
     */
    packageId?: string | null;
    /**
     * Packaging type of this package
     * @type {string}
     * @memberof CommerceRuntimePackageAllOf
     */
    packagingType?: string | null;
    /**
     * PackingSlipItemDetails for this package
     * @type {Array<PackingSlipItemDetail>}
     * @memberof CommerceRuntimePackageAllOf
     */
    packingSlipItemDetails?: Array<PackingSlipItemDetail> | null;
    /**
     * PackingSlipNumber for this package
     * @type {number}
     * @memberof CommerceRuntimePackageAllOf
     */
    packingSlipNumber?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimePackageAllOf
     */
    returnCarrier?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof CommerceRuntimePackageAllOf
     */
    returnTrackingNumbers?: Array<string> | null;
    /**
     * 
     * @type {Array<CommerceRuntimeTracking>}
     * @memberof CommerceRuntimePackageAllOf
     */
    returnTrackings?: Array<CommerceRuntimeTracking> | null;
    /**
     * ID of the related shipment
     * @type {string}
     * @memberof CommerceRuntimePackageAllOf
     */
    shipmentId?: string | null;
    /**
     * Code describing the shipping method.
     * @type {string}
     * @memberof CommerceRuntimePackageAllOf
     */
    shippingMethodCode?: string | null;
    /**
     * Name of the shipping method
     * @type {string}
     * @memberof CommerceRuntimePackageAllOf
     */
    shippingMethodName?: string | null;
    /**
     * SignatureRequired for this package
     * @type {boolean}
     * @memberof CommerceRuntimePackageAllOf
     */
    signatureRequired?: boolean | null;
    /**
     * Tracking number of this package (to support classic use cases)
     * @type {string}
     * @memberof CommerceRuntimePackageAllOf
     */
    trackingNumber?: string | null;
    /**
     * Tracking number of this package
     * @type {Array<string>}
     * @memberof CommerceRuntimePackageAllOf
     */
    trackingNumbers?: Array<string> | null;
    /**
     * Tracking number and url data for this package
     * @type {Array<CommerceRuntimeTracking>}
     * @memberof CommerceRuntimePackageAllOf
     */
    trackings?: Array<CommerceRuntimeTracking> | null;
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
    length?: CommerceRuntimeMeasurement;
    /**
     * 
     * @type {CommerceRuntimeMeasurement}
     * @memberof CommerceRuntimePackageMeasurements
     */
    weight?: CommerceRuntimeMeasurement;
    /**
     * 
     * @type {CommerceRuntimeMeasurement}
     * @memberof CommerceRuntimePackageMeasurements
     */
    width?: CommerceRuntimeMeasurement;
}
/**
 * 
 * @export
 * @interface CommerceRuntimePackageResponse
 */
export interface CommerceRuntimePackageResponse {
    /**
     * 
     * @type {Array<CustomAttribute>}
     * @memberof CommerceRuntimePackageResponse
     */
    customAttributes?: Array<CustomAttribute> | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimePackageResponse
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimePackageResponse
     */
    integratorId?: string | null;
    /**
     * 
     * @type {ShippingLabel}
     * @memberof CommerceRuntimePackageResponse
     */
    label?: ShippingLabel;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimePackageResponse
     */
    trackingNumber?: string | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimePayment
 */
export interface CommerceRuntimePayment {
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimePayment
     */
    amountCollected?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimePayment
     */
    amountCredited?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimePayment
     */
    amountRequested?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimePayment
     */
    isRecurring?: any | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimePaymentCard
 */
export interface CommerceRuntimePaymentCard {
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimePaymentCard
     */
    isCardInfoSaved?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimePaymentCard
     */
    isTokenized?: any | null;
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
}
/**
 * The product as it appears on the order item.
 * @export
 * @interface CommerceRuntimeProduct
 */
export interface CommerceRuntimeProduct {
    /**
     * Allocation ID associated with this product on this order.
     * @type {string}
     * @memberof CommerceRuntimeProduct
     */
    allocationExpiration?: string | null;
    /**
     * Allocation ID associated with this product on this order.
     * @type {number}
     * @memberof CommerceRuntimeProduct
     */
    allocationId?: number | null;
    /**
     * Short description of the product in the language specified by LocaleCode.
     * @type {string}
     * @memberof CommerceRuntimeProduct
     */
    description?: string | null;
    /**
     * Fulfillment status of the product.
     * @type {string}
     * @memberof CommerceRuntimeProduct
     */
    fulfillmentStatus?: string | null;
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
     * @type {CommerceRuntimePackageMeasurements}
     * @memberof CommerceRuntimeProduct
     */
    measurements?: CommerceRuntimePackageMeasurements;
    /**
     * Name of the product, this is the current value of the product's name in the language specified by LocaleCode.
     * @type {string}
     * @memberof CommerceRuntimeProduct
     */
    name?: string | null;
    /**
     * Merchant-created code that uniquely identifies the product.
     * @type {string}
     * @memberof CommerceRuntimeProduct
     */
    productCode?: string | null;
    /**
     * Reservation ID associated with this product in the bundle.
     * @type {number}
     * @memberof CommerceRuntimeProduct
     */
    productReservationId?: number | null;
    /**
     * 
     * @type {ProductStock}
     * @memberof CommerceRuntimeProduct
     */
    stock?: ProductStock;
    /**
     * Products bundled with this product (if the current product is a bundle)
     * @type {Array<BundledProduct>}
     * @memberof CommerceRuntimeProduct
     */
    bundledProducts?: Array<BundledProduct> | null;
    /**
     * Categories to which this product belongs.
     * @type {Array<CommerceRuntimeCategory>}
     * @memberof CommerceRuntimeProduct
     */
    categories?: Array<CommerceRuntimeCategory> | null;
    /**
     * Condition
     * @type {string}
     * @memberof CommerceRuntimeProduct
     */
    condition?: string | null;
    /**
     * Is the product discount restricted
     * @type {boolean}
     * @memberof CommerceRuntimeProduct
     */
    discountsRestricted?: boolean | null;
    /**
     * Product discount restriction end date
     * @type {string}
     * @memberof CommerceRuntimeProduct
     */
    discountsRestrictedEndDate?: string | null;
    /**
     * Product discount restriction start date
     * @type {string}
     * @memberof CommerceRuntimeProduct
     */
    discountsRestrictedStartDate?: string | null;
    /**
     * List of unique product identifiers for an item on shipment
     * @type {Array<FulfillmentField>}
     * @memberof CommerceRuntimeProduct
     */
    fulfillmentFields?: Array<FulfillmentField> | null;
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
     * Manufacturing Part Number of the product.
     * @type {string}
     * @memberof CommerceRuntimeProduct
     */
    mfgPartNumber?: string | null;
    /**
     * If the product contains configurable or stand-alone options, the list of product options that the shopper selected for this product.
     * @type {Array<CommerceRuntimeProductOption>}
     * @memberof CommerceRuntimeProduct
     */
    options?: Array<CommerceRuntimeProductOption> | null;
    /**
     * 
     * @type {CommerceRuntimeProductPrice}
     * @memberof CommerceRuntimeProduct
     */
    price?: CommerceRuntimeProductPrice;
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
     * If the product contains properties, the list of properties that the shopper selected for this product.
     * @type {Array<ProductProperty>}
     * @memberof CommerceRuntimeProduct
     */
    properties?: Array<ProductProperty> | null;
    /**
     * Serial Number
     * @type {string}
     * @memberof CommerceRuntimeProduct
     */
    serialNumber?: string | null;
    /**
     * Product Identifier specific to the store
     * @type {string}
     * @memberof CommerceRuntimeProduct
     */
    sku?: string | null;
    /**
     * Universal Product Code of the product.
     * @type {string}
     * @memberof CommerceRuntimeProduct
     */
    upc?: string | null;
    /**
     * For configurable products, the unique identifier of the product variation that has been selected.
     * @type {string}
     * @memberof CommerceRuntimeProduct
     */
    variationProductCode?: string | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeProductAllOf
 */
export interface CommerceRuntimeProductAllOf {
    /**
     * Products bundled with this product (if the current product is a bundle)
     * @type {Array<BundledProduct>}
     * @memberof CommerceRuntimeProductAllOf
     */
    bundledProducts?: Array<BundledProduct> | null;
    /**
     * Categories to which this product belongs.
     * @type {Array<CommerceRuntimeCategory>}
     * @memberof CommerceRuntimeProductAllOf
     */
    categories?: Array<CommerceRuntimeCategory> | null;
    /**
     * Condition
     * @type {string}
     * @memberof CommerceRuntimeProductAllOf
     */
    condition?: string | null;
    /**
     * Is the product discount restricted
     * @type {boolean}
     * @memberof CommerceRuntimeProductAllOf
     */
    discountsRestricted?: boolean | null;
    /**
     * Product discount restriction end date
     * @type {string}
     * @memberof CommerceRuntimeProductAllOf
     */
    discountsRestrictedEndDate?: string | null;
    /**
     * Product discount restriction start date
     * @type {string}
     * @memberof CommerceRuntimeProductAllOf
     */
    discountsRestrictedStartDate?: string | null;
    /**
     * List of unique product identifiers for an item on shipment
     * @type {Array<FulfillmentField>}
     * @memberof CommerceRuntimeProductAllOf
     */
    fulfillmentFields?: Array<FulfillmentField> | null;
    /**
     * Types of fulfillment that are supported for this product.
     * @type {Array<string>}
     * @memberof CommerceRuntimeProductAllOf
     */
    fulfillmentTypesSupported?: Array<string> | null;
    /**
     * Descriptive text of the image associated with the product in the language specified by LocaleCode.
     * @type {string}
     * @memberof CommerceRuntimeProductAllOf
     */
    imageAlternateText?: string | null;
    /**
     * URL of the image that appears next to the product on the order item. Optional.
     * @type {string}
     * @memberof CommerceRuntimeProductAllOf
     */
    imageUrl?: string | null;
    /**
     * If true, the product is purchased or fulfilled at regular intervals, for example, a monthly billing or a subscription.
     * @type {boolean}
     * @memberof CommerceRuntimeProductAllOf
     */
    isRecurring?: boolean | null;
    /**
     * If true, the product is eligible for tax.
     * @type {boolean}
     * @memberof CommerceRuntimeProductAllOf
     */
    isTaxable?: boolean | null;
    /**
     * Manufacturing Part Number of the product.
     * @type {string}
     * @memberof CommerceRuntimeProductAllOf
     */
    mfgPartNumber?: string | null;
    /**
     * If the product contains configurable or stand-alone options, the list of product options that the shopper selected for this product.
     * @type {Array<CommerceRuntimeProductOption>}
     * @memberof CommerceRuntimeProductAllOf
     */
    options?: Array<CommerceRuntimeProductOption> | null;
    /**
     * 
     * @type {CommerceRuntimeProductPrice}
     * @memberof CommerceRuntimeProductAllOf
     */
    price?: CommerceRuntimeProductPrice;
    /**
     * Type of product, which can be a product with configurable options, a product with stand-alone options, or a simple product with no options.
     * @type {string}
     * @memberof CommerceRuntimeProductAllOf
     */
    productType?: string | null;
    /**
     * Usage of the product, primarily used to indicate a bundle in this context
     * @type {string}
     * @memberof CommerceRuntimeProductAllOf
     */
    productUsage?: string | null;
    /**
     * If the product contains properties, the list of properties that the shopper selected for this product.
     * @type {Array<ProductProperty>}
     * @memberof CommerceRuntimeProductAllOf
     */
    properties?: Array<ProductProperty> | null;
    /**
     * Serial Number
     * @type {string}
     * @memberof CommerceRuntimeProductAllOf
     */
    serialNumber?: string | null;
    /**
     * Product Identifier specific to the store
     * @type {string}
     * @memberof CommerceRuntimeProductAllOf
     */
    sku?: string | null;
    /**
     * Universal Product Code of the product.
     * @type {string}
     * @memberof CommerceRuntimeProductAllOf
     */
    upc?: string | null;
    /**
     * For configurable products, the unique identifier of the product variation that has been selected.
     * @type {string}
     * @memberof CommerceRuntimeProductAllOf
     */
    variationProductCode?: string | null;
}
/**
 * Product option for the product listed on this order item. If the product contains 
 * configurable or stand-alone options, this is a product option that the shopper has selected.
 * @export
 * @interface CommerceRuntimeProductOption
 */
export interface CommerceRuntimeProductOption {
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
     * Name of the product option that appears with the order item in the language specified by LocaleCode.
     * @type {string}
     * @memberof CommerceRuntimeProductOption
     */
    name?: string | null;
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
    stringValue?: string | null;
    /**
     * Value of the product option.
     * @type {any}
     * @memberof CommerceRuntimeProductOption
     */
    value?: any | null;
}
/**
 * Price of the product with any sale and discounts applied.
 * @export
 * @interface CommerceRuntimeProductPrice
 */
export interface CommerceRuntimeProductPrice {
    /**
     * Credit Value when the product happens to be a gift card or similar product
     * @type {number}
     * @memberof CommerceRuntimeProductPrice
     */
    creditValue?: number | null;
    /**
     * Indicate that External Price (TenantOverridePrice) is a Sale Price. And is used to calculate the line item discounts.
     * @type {boolean}
     * @memberof CommerceRuntimeProductPrice
     */
    isOverRidePriceSalePrice?: boolean | null;
    /**
     * MSRP of product.
     * @type {number}
     * @memberof CommerceRuntimeProductPrice
     */
    msrp?: number | null;
    /**
     * Price of the product. This is the price that the merchant intends to sell the product if no sale price is present.
     * @type {number}
     * @memberof CommerceRuntimeProductPrice
     */
    price?: number | null;
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
}
/**
 * 
 * @export
 * @interface CommerceRuntimeProductProperty
 */
export interface CommerceRuntimeProductProperty {
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeProductProperty
     */
    isMultiValue?: any | null;
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
 * @interface CommerceRuntimeRefund
 */
export interface CommerceRuntimeRefund {
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeRefund
     */
    amount?: any | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeShipment
 */
export interface CommerceRuntimeShipment {
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipment
     */
    dutyAdjustment?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipment
     */
    dutyTotal?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipment
     */
    handlingAdjustment?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipment
     */
    handlingSubtotal?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipment
     */
    handlingTaxAdjustment?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipment
     */
    handlingTaxTotal?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipment
     */
    handlingTotal?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipment
     */
    lineItemSubtotal?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipment
     */
    lineItemTaxAdjustment?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipment
     */
    lineItemTaxTotal?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipment
     */
    lineItemTotal?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipment
     */
    orderNumber?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipment
     */
    readyToCapture?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipment
     */
    shipmentAdjustment?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipment
     */
    shippingAdjustment?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipment
     */
    shippingSubtotal?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipment
     */
    shippingTaxAdjustment?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipment
     */
    shippingTaxTotal?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipment
     */
    shippingTotal?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipment
     */
    total?: any | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeShipmentItem
 */
export interface CommerceRuntimeShipmentItem {
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipmentItem
     */
    actualPrice?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipmentItem
     */
    duty?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipmentItem
     */
    handling?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipmentItem
     */
    handlingDiscount?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipmentItem
     */
    handlingTax?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipmentItem
     */
    isReservedInventory?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipmentItem
     */
    isTaxable?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipmentItem
     */
    itemDiscount?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipmentItem
     */
    itemTax?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipmentItem
     */
    lineId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipmentItem
     */
    lineItemCost?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipmentItem
     */
    quantity?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipmentItem
     */
    shipping?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipmentItem
     */
    shippingDiscount?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipmentItem
     */
    shippingTax?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipmentItem
     */
    taxableHandling?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipmentItem
     */
    taxableLineItemCost?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipmentItem
     */
    taxableShipping?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipmentItem
     */
    unitPrice?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipmentItem
     */
    weightedDutyAdjustment?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipmentItem
     */
    weightedHandlingAdjustment?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipmentItem
     */
    weightedHandlingTaxAdjustment?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipmentItem
     */
    weightedLineItemTaxAdjustment?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipmentItem
     */
    weightedShipmentAdjustment?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipmentItem
     */
    weightedShippingAdjustment?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShipmentItem
     */
    weightedShippingTaxAdjustment?: any | null;
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
     * @type {CoreApiContractsAuditInfo}
     * @memberof CommerceRuntimeShipmentNote
     */
    auditInfo?: CoreApiContractsAuditInfo;
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
 * @interface CommerceRuntimeShipmentResponse
 */
export interface CommerceRuntimeShipmentResponse {
    /**
     * 
     * @type {Array<CustomAttribute>}
     * @memberof CommerceRuntimeShipmentResponse
     */
    customAttributes?: Array<CustomAttribute> | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeShipmentResponse
     */
    isSuccessful?: boolean;
    /**
     * 
     * @type {Array<Notification>}
     * @memberof CommerceRuntimeShipmentResponse
     */
    messages?: Array<Notification> | null;
    /**
     * 
     * @type {Array<CommerceRuntimePackageResponse>}
     * @memberof CommerceRuntimeShipmentResponse
     */
    packageResponses?: Array<CommerceRuntimePackageResponse> | null;
    /**
     * 
     * @type {Money}
     * @memberof CommerceRuntimeShipmentResponse
     */
    shippingTotal?: Money;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipmentResponse
     */
    trackingNumber?: string | null;
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
    moreInfo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipmentStatusReason
     */
    reasonCode?: string | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeShippingGrouping
 */
export interface CommerceRuntimeShippingGrouping {
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShippingGrouping
     */
    handlingTaxTotal?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShippingGrouping
     */
    handlingTotal?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShippingGrouping
     */
    shippingTaxTotal?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShippingGrouping
     */
    shippingTotal?: any | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeShippingItemRate
 */
export interface CommerceRuntimeShippingItemRate {
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShippingItemRate
     */
    amount?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShippingItemRate
     */
    itemId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShippingItemRate
     */
    quantity?: number | null;
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
    /**
     * Custom data returned by the shipping service.
     * @type {object}
     * @memberof CommerceRuntimeShippingRate
     */
    data?: object | null;
    /**
     * Fulfillment method of the shipping rate. eg) Ship or Delivery
     * @type {string}
     * @memberof CommerceRuntimeShippingRate
     */
    fulfillmentMethod?: string | null;
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
     * 
     * @type {Array<CommerceRuntimeShippingItemRate>}
     * @memberof CommerceRuntimeShippingRate
     */
    shippingItemRates?: Array<CommerceRuntimeShippingItemRate> | null;
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
}
/**
 * 
 * @export
 * @interface CommerceRuntimeShippingRateAllOf
 */
export interface CommerceRuntimeShippingRateAllOf {
    /**
     * Custom data returned by the shipping service.
     * @type {object}
     * @memberof CommerceRuntimeShippingRateAllOf
     */
    data?: object | null;
    /**
     * Fulfillment method of the shipping rate. eg) Ship or Delivery
     * @type {string}
     * @memberof CommerceRuntimeShippingRateAllOf
     */
    fulfillmentMethod?: string | null;
    /**
     * If true, the shipping rate is valid.
     * @type {boolean}
     * @memberof CommerceRuntimeShippingRateAllOf
     */
    isValid?: boolean | null;
    /**
     * Messages and detail about why the shipping rate may be invalid.
     * @type {Array<string>}
     * @memberof CommerceRuntimeShippingRateAllOf
     */
    messages?: Array<string> | null;
    /**
     * 
     * @type {Array<CommerceRuntimeShippingItemRate>}
     * @memberof CommerceRuntimeShippingRateAllOf
     */
    shippingItemRates?: Array<CommerceRuntimeShippingItemRate> | null;
    /**
     * Code that uniquely identifies the selected shipping method.
     * @type {string}
     * @memberof CommerceRuntimeShippingRateAllOf
     */
    shippingMethodCode?: string | null;
    /**
     * Shipping Method Name
     * @type {string}
     * @memberof CommerceRuntimeShippingRateAllOf
     */
    shippingMethodName?: string | null;
    /**
     * The shipping zone to which this rate applies.
     * @type {string}
     * @memberof CommerceRuntimeShippingRateAllOf
     */
    shippingZoneCode?: string | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeShopperNotes
 */
export interface CommerceRuntimeShopperNotes {
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShopperNotes
     */
    comments?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShopperNotes
     */
    deliveryInstructions?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeShopperNotes
     */
    giftMessage?: any | null;
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
     * @type {boolean}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    autoSubstitution?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    backorderReleaseDate?: string | null;
    /**
     * 
     * @type {FulfillmentServiceBundleInfo}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    bundleInfo?: FulfillmentServiceBundleInfo;
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
    condition?: string | null;
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
     * @type {Array<FulfillmentServiceInventoryAllocation>}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    inventoryAllocations?: Array<FulfillmentServiceInventoryAllocation> | null;
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
    priceMode?: string | null;
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
     * @type {FulfillmentServiceReturnRuleInfo}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    returnRuleInfo?: FulfillmentServiceReturnRuleInfo;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    serialNumber?: string | null;
    /**
     * 
     * @type {Array<FulfillmentServiceShipmentItemAttribute>}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    shipmentItemAttributes?: Array<FulfillmentServiceShipmentItemAttribute> | null;
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
     * @type {string}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    stockValidationStatus?: string | null;
    /**
     * 
     * @type {FulfillmentServiceSubstituteInfo}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    substituteInfo?: FulfillmentServiceSubstituteInfo;
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
     * @type {string}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    substitutionType?: string | null;
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
    timeFenceDays?: number | null;
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
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    validatedQuantity?: number | null;
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
    weightedOrderHandlingFee?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    weightedOrderHandlingFeeDiscount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeSubstitutedItem
     */
    weightedOrderHandlingFeeTax?: number | null;
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
     * @type {any}
     * @memberof CommerceRuntimeTaskInput
     */
    maximum?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeTaskInput
     */
    minimum?: any | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeThresholdMessage
 */
export interface CommerceRuntimeThresholdMessage {
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeThresholdMessage
     */
    discountId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeThresholdMessage
     */
    requiresCouponCode?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeThresholdMessage
     */
    showInCart?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeThresholdMessage
     */
    showOnCheckout?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CommerceRuntimeThresholdMessage
     */
    thresholdValue?: any | null;
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
     * @type {CoreApiContractsAuditInfo}
     * @memberof CommerceRuntimeWorkflowState
     */
    auditInfo?: CoreApiContractsAuditInfo;
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
     * Amount as manually overridden by the Merchant
     * @type {number}
     * @memberof CommerceUnitPrice
     */
    overrideAmount?: number | null;
    /**
     * Sale amount indicated on the product.
     * @type {number}
     * @memberof CommerceUnitPrice
     */
    saleAmount?: number | null;
}
/**
 * Audit entry recording the consumption or restoration of Blanket Order balance
 * by a call-off order. Stored in a separate BlanketOrderConsumptionRecord collection.
 * @export
 * @interface ConsumptionRecord
 */
export interface ConsumptionRecord {
    /**
     * The call-off order that triggered this consumption or reversal.
     * @type {string}
     * @memberof ConsumptionRecord
     */
    callOffOrderId?: string | null;
    /**
     * Timestamp of the consumption event. System-supplied.
     * @type {string}
     * @memberof ConsumptionRecord
     */
    consumptionTime?: string;
    /**
     * Unique identifier. System-supplied.
     * @type {string}
     * @memberof ConsumptionRecord
     */
    id?: string | null;
    /**
     * Per-line consumption details.
     * @type {Array<ItemConsumption>}
     * @memberof ConsumptionRecord
     */
    itemConsumptions?: Array<ItemConsumption> | null;
    /**
     * Type of record: "Consumption" or "Reversal".
     * @type {string}
     * @memberof ConsumptionRecord
     */
    type?: string | null;
    /**
     * User who performed the action.
     * @type {string}
     * @memberof ConsumptionRecord
     */
    userId?: string | null;
}
/**
 * Paged collection of ConsumptionRecords.
 * @export
 * @interface ConsumptionRecordCollection
 */
export interface ConsumptionRecordCollection {
    /**
     * 
     * @type {Array<ConsumptionRecord>}
     * @memberof ConsumptionRecordCollection
     */
    items?: Array<ConsumptionRecord> | null;
    /**
     * 
     * @type {number}
     * @memberof ConsumptionRecordCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof ConsumptionRecordCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof ConsumptionRecordCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof ConsumptionRecordCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface Contact
 */
export interface Contact {
    /**
     * 
     * @type {Address}
     * @memberof Contact
     */
    address?: Address;
    /**
     * 
     * @type {string}
     * @memberof Contact
     */
    companyOrOrganization?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Contact
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Contact
     */
    firstName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Contact
     */
    id?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Contact
     */
    lastNameOrSurname?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Contact
     */
    middleNameOrInitial?: string | null;
    /**
     * 
     * @type {CommerceRuntimePhone}
     * @memberof Contact
     */
    phoneNumbers?: CommerceRuntimePhone;
}
/**
 * 
 * @export
 * @interface CoreApiContractsAuditInfo
 */
export interface CoreApiContractsAuditInfo {
    /**
     * 
     * @type {string}
     * @memberof CoreApiContractsAuditInfo
     */
    createBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CoreApiContractsAuditInfo
     */
    createDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CoreApiContractsAuditInfo
     */
    updateBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CoreApiContractsAuditInfo
     */
    updateDate?: string | null;
}
/**
 * 
 * @export
 * @interface CoreAuditInfo
 */
export interface CoreAuditInfo {
    /**
     * 
     * @type {string}
     * @memberof CoreAuditInfo
     */
    createBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CoreAuditInfo
     */
    createDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CoreAuditInfo
     */
    updateBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CoreAuditInfo
     */
    updateDate?: string | null;
}
/**
 * 
 * @export
 * @interface Credit
 */
export interface Credit {
    /**
     * Amount credited.
     * @type {number}
     * @memberof Credit
     */
    amount?: number;
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof Credit
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * 
     * @type {GatewayGiftCard}
     * @memberof Credit
     */
    giftCard?: GatewayGiftCard;
    /**
     * Unique identifier of this order transaction.
     * @type {string}
     * @memberof Credit
     */
    id?: string | null;
    /**
     * The paymentid of the Parent Payment associated with this Credit (if applicable).
     * @type {string}
     * @memberof Credit
     */
    parentPaymentId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Credit
     */
    parentPaymentInteractionId?: string | null;
}
/**
 * 
 * @export
 * @interface CreditHoldReason
 */
export interface CreditHoldReason {
    /**
     * 
     * @type {string}
     * @memberof CreditHoldReason
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreditHoldReason
     */
    moreInfo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreditHoldReason
     */
    reasonCode?: string | null;
}
/**
 * 
 * @export
 * @interface CreditHoldReasonCollection
 */
export interface CreditHoldReasonCollection {
    /**
     * 
     * @type {Array<CreditHoldReasonItem>}
     * @memberof CreditHoldReasonCollection
     */
    items?: Array<CreditHoldReasonItem> | null;
    /**
     * 
     * @type {number}
     * @memberof CreditHoldReasonCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface CreditHoldReasonItem
 */
export interface CreditHoldReasonItem {
    /**
     * 
     * @type {string}
     * @memberof CreditHoldReasonItem
     */
    name?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CreditHoldReasonItem
     */
    needsMoreInfo?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CreditHoldReasonItem
     */
    reasonCode?: string | null;
}
/**
 * Header-level credit-hold state for a CallOffOrder. Replaces the per-item
 * CreditHold + CreditHoldReason fields that lived on CallOffOrderItem prior
 * to this change — credit-hold is a header concern (one decision per order)
 * not a per-line concern.
 * @export
 * @interface CreditHoldStatus
 */
export interface CreditHoldStatus {
    /**
     * True when the order is on credit hold.
     * @type {boolean}
     * @memberof CreditHoldStatus
     */
    onHold?: boolean;
    /**
     * 
     * @type {CreditHoldReason}
     * @memberof CreditHoldStatus
     */
    reason?: CreditHoldReason;
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
 * @interface DeliveryWindow
 */
export interface DeliveryWindow {
    /**
     * End time for delivery window.
     * @type {string}
     * @memberof DeliveryWindow
     */
    endTime?: string;
    /**
     * Start time for delivery window.
     * @type {string}
     * @memberof DeliveryWindow
     */
    startTime?: string;
}
/**
 * 
 * @export
 * @interface DigitalPackage
 */
export interface DigitalPackage {
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof DigitalPackage
     */
    auditInfo?: CoreApiContractsAuditInfo;
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
    /**
     * A human-readable identifier for this fulfillment unit.  If not set on create, will be autogenerated as a string of the form
     *     {fulfillmentUnitType} #{next available int}
     * @type {string}
     * @memberof DigitalPackage
     */
    code?: string | null;
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
     * ID of the fulfillment unit.
     * @type {string}
     * @memberof DigitalPackage
     */
    id?: string | null;
    /**
     * List of items in the fulfillment unit
     * @type {Array<DigitalPackageItem>}
     * @memberof DigitalPackage
     */
    items?: Array<DigitalPackageItem> | null;
    /**
     * Status of the fulfillment unit
     * See FulfillmentStatusConst
     * @type {string}
     * @memberof DigitalPackage
     */
    status?: string | null;
}
/**
 * 
 * @export
 * @interface DigitalPackageItem
 */
export interface DigitalPackageItem {
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
     * 
     * @type {string}
     * @memberof DigitalPackageItem
     */
    giftCardCode?: string | null;
}
/**
 * 
 * @export
 * @interface DigitalPackageItemAllOf
 */
export interface DigitalPackageItemAllOf {
    /**
     * 
     * @type {string}
     * @memberof DigitalPackageItemAllOf
     */
    giftCardCode?: string | null;
}
/**
 * Digital wallet contract
 * @export
 * @interface DigitalWallet
 */
export interface DigitalWallet {
    /**
     * Cart ID
     * Note: This property should only be set if the order is not created and user opted to 
     * create the order from cart using digital wallet.
     * @type {string}
     * @memberof DigitalWallet
     */
    cartId?: string | null;
    /**
     * Digital wallet data.
     * Note: Transform the Json data to a string.
     * @type {string}
     * @memberof DigitalWallet
     */
    digitalWalletData?: string | null;
}
/**
 * Discounts that apply to the order, if any. For example, when the 
 * subtotal of the order exceeds a certain amount, or for free shipping.
 * @export
 * @interface Discount
 */
export interface Discount {
    /**
     * Date when the discount expires. Default is null (no expiration date).
     * @type {string}
     * @memberof Discount
     */
    expirationDate?: string | null;
    /**
     * Indicates that the discount targets more than a product.  Used
     * primarily for BoGa discounts with multiple targets.
     * @type {boolean}
     * @memberof Discount
     */
    hasMultipleTargetProducts?: boolean;
    /**
     * Unique identifier of the discount.
     * @type {number}
     * @memberof Discount
     */
    id?: number;
    /**
     * List of discounts for each order item.
     * @type {Array<string>}
     * @memberof Discount
     */
    itemIds?: Array<string> | null;
    /**
     * Name of the discount in the language specified by LocaleCode.
     * @type {string}
     * @memberof Discount
     */
    name?: string | null;
}
/**
 * 
 * @export
 * @interface DisposeItemInfo
 */
export interface DisposeItemInfo {
    /**
     * 
     * @type {string}
     * @memberof DisposeItemInfo
     */
    condition?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DisposeItemInfo
     */
    locationCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof DisposeItemInfo
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof DisposeItemInfo
     */
    status?: string | null;
}
/**
 * 
 * @export
 * @interface DisposeReturnItem
 */
export interface DisposeReturnItem {
    /**
     * 
     * @type {string}
     * @memberof DisposeReturnItem
     */
    condition?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DisposeReturnItem
     */
    locationCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof DisposeReturnItem
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof DisposeReturnItem
     */
    status?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DisposeReturnItem
     */
    returnItemId?: string | null;
}
/**
 * 
 * @export
 * @interface DisposeReturnItemAllOf
 */
export interface DisposeReturnItemAllOf {
    /**
     * 
     * @type {string}
     * @memberof DisposeReturnItemAllOf
     */
    returnItemId?: string | null;
}
/**
 * 
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
 * Authoring descriptor for a dynamic field slot.
 * @export
 * @interface DynamicFieldSlot
 */
export interface DynamicFieldSlot {
    /**
     * Endpoint the UI fans out to in order to resolve dynamic values.
     * @type {string}
     * @memberof DynamicFieldSlot
     */
    definitionsEndpoint?: string | null;
    /**
     * Always `true` for a dynamic slot.
     * @type {boolean}
     * @memberof DynamicFieldSlot
     */
    isDynamic?: boolean;
    /**
     * Name template, e.g. `"attributes.{fqn}"`.
     * @type {string}
     * @memberof DynamicFieldSlot
     */
    namePattern?: string | null;
    /**
     * Map from `AttributeDataType` name to allowed operators. Drives the
     * per-data-type operator narrowing the validator enforces at save time.
     * @type {{ [key: string]: Array<string>; }}
     * @memberof DynamicFieldSlot
     */
    operatorsByDataType?: { [key: string]: Array<string>; } | null;
    /**
     * Human-readable UI label.
     * @type {string}
     * @memberof DynamicFieldSlot
     */
    pathLabel?: string | null;
}
/**
 * 
 * @export
 * @interface EmailGatewayGiftCard
 */
export interface EmailGatewayGiftCard {
    /**
     * 
     * @type {number}
     * @memberof EmailGatewayGiftCard
     */
    amount?: number;
    /**
     * 
     * @type {string}
     * @memberof EmailGatewayGiftCard
     */
    cardNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmailGatewayGiftCard
     */
    cardPin?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmailGatewayGiftCard
     */
    currencyCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmailGatewayGiftCard
     */
    id?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailGatewayGiftCard
     */
    isRefund?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EmailGatewayGiftCard
     */
    orderId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmailGatewayGiftCard
     */
    orderItemId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmailGatewayGiftCard
     */
    paymentId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmailGatewayGiftCard
     */
    returnId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmailGatewayGiftCard
     */
    shipmentId?: string | null;
}
/**
 * 
 * @export
 * @interface EmailGatewayGiftCardAllOf
 */
export interface EmailGatewayGiftCardAllOf {
    /**
     * 
     * @type {string}
     * @memberof EmailGatewayGiftCardAllOf
     */
    cardPin?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailGatewayGiftCardAllOf
     */
    isRefund?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EmailGatewayGiftCardAllOf
     */
    orderId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmailGatewayGiftCardAllOf
     */
    orderItemId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmailGatewayGiftCardAllOf
     */
    paymentId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmailGatewayGiftCardAllOf
     */
    returnId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmailGatewayGiftCardAllOf
     */
    shipmentId?: string | null;
}
/**
 * 
 * @export
 * @interface Expression
 */
export interface Expression {
    /**
     * 
     * @type {string}
     * @memberof Expression
     */
    left?: string | null;
    /**
     * 
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
     * 
     * @type {string}
     * @memberof Expression
     */
    operator?: string | null;
    /**
     * 
     * @type {any}
     * @memberof Expression
     */
    right?: any | null;
    /**
     * 
     * @type {string}
     * @memberof Expression
     */
    type?: string | null;
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
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof ExtendedProperty
     */
    value?: string | null;
}
/**
 * Structured payment token for external (non-Mozu) payment processors.
 * 
 * Distinct from legacy PaymentToken (Apple Pay / PayPal).
 * 
 * Used in COM-10873 externally tokenized payments feature.
 * 
 * Validation rules:
 * - All three fields (PaymentServiceTokenId, Type, Provider) are required
 * - Type must match BillingInfo.PaymentType (case-insensitive)
 * - Feature gate (externalTokenizationEnabled) must be true
 * @export
 * @interface ExternalPaymentToken
 */
export interface ExternalPaymentToken {
    /**
     * Actual token value from the external payment provider.
     * @type {string}
     * @memberof ExternalPaymentToken
     */
    paymentServiceTokenId?: string | null;
    /**
     * External token provider identifier (e.g., "Stripe", "Square", "PayPal").
     * @type {string}
     * @memberof ExternalPaymentToken
     */
    provider?: string | null;
    /**
     * Payment method type (e.g., "CreditCard", "PayPal", "ApplePay").
     * Must match BillingInfo.PaymentType exactly (case-insensitive).
     * @type {string}
     * @memberof ExternalPaymentToken
     */
    type?: string | null;
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
 * Action to perform a fulfillment operation on the order.
 * @export
 * @interface FulfillmentAction
 */
export interface FulfillmentAction {
    /**
     * Name of the fulfillment action to perform
     * @type {string}
     * @memberof FulfillmentAction
     */
    actionName?: string | null;
    /**
     * Ids of digital packages to mark as fulfilled
     * @type {Array<string>}
     * @memberof FulfillmentAction
     */
    digitalPackageIds?: Array<string> | null;
    /**
     * Ids of packages to mark as fulfilled
     * @type {Array<string>}
     * @memberof FulfillmentAction
     */
    packageIds?: Array<string> | null;
    /**
     * Ids of pickups to mark as fulfilled
     * @type {Array<string>}
     * @memberof FulfillmentAction
     */
    pickupIds?: Array<string> | null;
}
/**
 * 
 * @export
 * @interface FulfillmentAlternateContact
 */
export interface FulfillmentAlternateContact {
    /**
     * Email Address of alternate contact during order process
     * @type {string}
     * @memberof FulfillmentAlternateContact
     */
    email?: string | null;
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
     * Phone Number of alternate contact during order process
     * @type {string}
     * @memberof FulfillmentAlternateContact
     */
    phoneNumber?: string | null;
}
/**
 * 
 * @export
 * @interface FulfillmentCanceledItem
 */
export interface FulfillmentCanceledItem {
    /**
     * 
     * @type {number}
     * @memberof FulfillmentCanceledItem
     */
    actualPrice?: number;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentCanceledItem
     */
    allowsSubstitution?: boolean | null;
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof FulfillmentCanceledItem
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentCanceledItem
     */
    backorderReleaseDate?: string | null;
    /**
     * 
     * @type {BundleInfo}
     * @memberof FulfillmentCanceledItem
     */
    bundleInfo?: BundleInfo;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentCanceledItem
     */
    cartItemId?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof FulfillmentCanceledItem
     */
    childItemIds?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentCanceledItem
     */
    condition?: string | null;
    /**
     * 
     * @type {object}
     * @memberof FulfillmentCanceledItem
     */
    data?: object | null;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentCanceledItem
     */
    duty?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentCanceledItem
     */
    expectedDeliveryDate?: string | null;
    /**
     * 
     * @type {Array<FulfillmentField>}
     * @memberof FulfillmentCanceledItem
     */
    fulfillmentFields?: Array<FulfillmentField> | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentCanceledItem
     */
    fulfillmentLocationCode?: string | null;
    /**
     * 
     * @type {Array<CommerceRuntimeGiftCard>}
     * @memberof FulfillmentCanceledItem
     */
    giftCards?: Array<CommerceRuntimeGiftCard> | null;
    /**
     * Gift message for item
     * @type {string}
     * @memberof FulfillmentCanceledItem
     */
    giftMessage?: string | null;
    /**
     * Total handling amount for this item, combining both product-level and order-level handling fees.
     * To get the product-level handling portion: Handling - WeightedOrderHandlingFee.
     * @type {number}
     * @memberof FulfillmentCanceledItem
     */
    handling?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentCanceledItem
     */
    handlingDiscount?: number;
    /**
     * Total handling tax for this item, combining both product-level and order-level handling tax.
     * To get the product-level handling tax: HandlingTax - WeightedOrderHandlingFeeTax.
     * @type {number}
     * @memberof FulfillmentCanceledItem
     */
    handlingTax?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentCanceledItem
     */
    imageUrl?: string | null;
    /**
     * 
     * @type {Array<InventoryTags>}
     * @memberof FulfillmentCanceledItem
     */
    inventoryTags?: Array<InventoryTags> | null;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentCanceledItem
     */
    isAssemblyRequired?: boolean | null;
    /**
     * Indicate item is gift or not
     * @type {boolean}
     * @memberof FulfillmentCanceledItem
     */
    isGift?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentCanceledItem
     */
    isPackagedStandAlone?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentCanceledItem
     */
    isReservedInventory?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentCanceledItem
     */
    isSubstitutable?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentCanceledItem
     */
    isTaxable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentCanceledItem
     */
    itemDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentCanceledItem
     */
    itemTax?: number;
    /**
     * Extensible attributes for this shipment line.
     * Named `LineAttributes` rather than `Attributes` because
     * `Attributes` is already a System.Collections.Generic.Dictionary`2 of
     * product attributes on Mozu.CommerceRuntime.Contracts.Fulfillment.ShipmentItem.
     * @type {Array<ShipmentLineAttribute>}
     * @memberof FulfillmentCanceledItem
     */
    lineAttributes?: Array<ShipmentLineAttribute> | null;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentCanceledItem
     */
    lineId?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentCanceledItem
     */
    lineItemAdjustment?: number | null;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentCanceledItem
     */
    lineItemCost?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentCanceledItem
     */
    locatorName?: string | null;
    /**
     * 
     * @type {CommerceRuntimePackageMeasurements}
     * @memberof FulfillmentCanceledItem
     */
    measurements?: CommerceRuntimePackageMeasurements;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentCanceledItem
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentCanceledItem
     */
    optionAttributeFQN?: string | null;
    /**
     * 
     * @type {Array<CommerceRuntimeProductOption>}
     * @memberof FulfillmentCanceledItem
     */
    options?: Array<CommerceRuntimeProductOption> | null;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentCanceledItem
     */
    originalLineId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentCanceledItem
     */
    originalOrderItemId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentCanceledItem
     */
    originalQuantity?: number | null;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentCanceledItem
     */
    overridePrice?: number | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentCanceledItem
     */
    parentId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentCanceledItem
     */
    parentItemId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentCanceledItem
     */
    partNumber?: string | null;
    /**
     * Determines if the item is using external or internal(catalog) pricing
     * @type {string}
     * @memberof FulfillmentCanceledItem
     */
    priceMode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentCanceledItem
     */
    productCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentCanceledItem
     */
    purchaseLocation?: string | null;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentCanceledItem
     */
    quantity?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentCanceledItem
     */
    readyForPickupQuantity?: number | null;
    /**
     * 
     * @type {ReturnRuleInfo}
     * @memberof FulfillmentCanceledItem
     */
    returnRuleInfo?: ReturnRuleInfo;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentCanceledItem
     */
    serialNumber?: string | null;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentCanceledItem
     */
    shipping?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentCanceledItem
     */
    shippingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentCanceledItem
     */
    shippingTax?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentCanceledItem
     */
    sku?: string | null;
    /**
     * 
     * @type {SubstituteInfo}
     * @memberof FulfillmentCanceledItem
     */
    substituteInfo?: SubstituteInfo;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentCanceledItem
     */
    substituteQuantity?: number | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentCanceledItem
     */
    substitutionType?: string | null;
    /**
     * 
     * @type {object}
     * @memberof FulfillmentCanceledItem
     */
    taxData?: object | null;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentCanceledItem
     */
    taxableHandling?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentCanceledItem
     */
    taxableLineItemCost?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentCanceledItem
     */
    taxableShipping?: number;
    /**
     * Time-fence tolerance (days), carried from the originating OrderItem (Call-Off release,
     * spec COM-10941 follow-up). Null for shipment items not tied to a Call-Off Order line.
     * @type {number}
     * @memberof FulfillmentCanceledItem
     */
    timeFenceDays?: number | null;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentCanceledItem
     */
    unitPrice?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentCanceledItem
     */
    upc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentCanceledItem
     */
    variationProductCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentCanceledItem
     */
    weightedDutyAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentCanceledItem
     */
    weightedHandlingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentCanceledItem
     */
    weightedHandlingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentCanceledItem
     */
    weightedLineItemTaxAdjustment?: number;
    /**
     * Order-level handling fee allocated to this item. This represents only the order-level portion
     * of handling, not product-level handling fees. Product-level handling can be derived as:
     * Handling - WeightedOrderHandlingFee.
     * During item cancellation with Granular Retention, order-level handling is retained on active items
     * while product-level handling scales proportionally with quantity.
     * @type {number}
     * @memberof FulfillmentCanceledItem
     */
    weightedOrderHandlingFee?: number;
    /**
     * Discount applied to the order-level handling fee only.
     * @type {number}
     * @memberof FulfillmentCanceledItem
     */
    weightedOrderHandlingFeeDiscount?: number;
    /**
     * Tax on the order-level handling fee only (not total handling tax).
     * Product-level handling tax can be derived as: HandlingTax - WeightedOrderHandlingFeeTax.
     * @type {number}
     * @memberof FulfillmentCanceledItem
     */
    weightedOrderHandlingFeeTax?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentCanceledItem
     */
    weightedShipmentAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentCanceledItem
     */
    weightedShippingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentCanceledItem
     */
    weightedShippingTaxAdjustment?: number;
    /**
     * 
     * @type {CommerceRuntimeCanceledReason}
     * @memberof FulfillmentCanceledItem
     */
    canceledReason?: CommerceRuntimeCanceledReason;
}
/**
 * 
 * @export
 * @interface FulfillmentCanceledItemAllOf
 */
export interface FulfillmentCanceledItemAllOf {
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof FulfillmentCanceledItemAllOf
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * 
     * @type {CommerceRuntimeCanceledReason}
     * @memberof FulfillmentCanceledItemAllOf
     */
    canceledReason?: CommerceRuntimeCanceledReason;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentCanceledItemAllOf
     */
    originalQuantity?: number | null;
}
/**
 * 
 * @export
 * @interface FulfillmentField
 */
export interface FulfillmentField {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentField
     */
    name?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentField
     */
    required?: boolean;
    /**
     * 
     * @type {any}
     * @memberof FulfillmentField
     */
    userEnteredValue?: any | null;
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
     * @type {CoreApiContractsAuditInfo}
     * @memberof FulfillmentInfo
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * Custom data originated by the shipping service.
     * @type {object}
     * @memberof FulfillmentInfo
     */
    data?: object | null;
    /**
     * 
     * @type {Contact}
     * @memberof FulfillmentInfo
     */
    fulfillmentContact?: Contact;
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
 * @interface FulfillmentServiceBundleInfo
 */
export interface FulfillmentServiceBundleInfo {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof FulfillmentServiceBundleInfo
     */
    attributes?: { [key: string]: any; } | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceBundleInfo
     */
    imageUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceBundleInfo
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceBundleInfo
     */
    productCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentServiceBundleInfo
     */
    quantity?: number | null;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentServiceBundleInfo
     */
    unitPrice?: number | null;
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
    required?: boolean;
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
 * @interface FulfillmentServiceInventoryAllocation
 */
export interface FulfillmentServiceInventoryAllocation {
    /**
     * 
     * @type {FulfillmentServiceAuditInfo}
     * @memberof FulfillmentServiceInventoryAllocation
     */
    auditInfo?: FulfillmentServiceAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceInventoryAllocation
     */
    condition?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceInventoryAllocation
     */
    date?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceInventoryAllocation
     */
    fulfilledDate?: string | null;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentServiceInventoryAllocation
     */
    inventoryId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceInventoryAllocation
     */
    lotCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentServiceInventoryAllocation
     */
    originalQuantity?: number | null;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentServiceInventoryAllocation
     */
    quantity?: number | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceInventoryAllocation
     */
    serialNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceInventoryAllocation
     */
    sku?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceInventoryAllocation
     */
    status?: string | null;
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
 * @interface FulfillmentServiceReturnRuleInfo
 */
export interface FulfillmentServiceReturnRuleInfo {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof FulfillmentServiceReturnRuleInfo
     */
    attributes?: { [key: string]: any; } | null;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentServiceReturnRuleInfo
     */
    isReturnable?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentServiceReturnRuleInfo
     */
    maxDays?: number | null;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentServiceReturnRuleInfo
     */
    maxQty?: number | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceReturnRuleInfo
     */
    ruleCode?: string | null;
}
/**
 * 
 * @export
 * @interface FulfillmentServiceShipmentItemAttribute
 */
export interface FulfillmentServiceShipmentItemAttribute {
    /**
     * 
     * @type {number}
     * @memberof FulfillmentServiceShipmentItemAttribute
     */
    attributeDefinitionId?: number | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof FulfillmentServiceShipmentItemAttribute
     */
    attributes?: { [key: string]: any; } | null;
    /**
     * 
     * @type {FulfillmentServiceAuditInfo}
     * @memberof FulfillmentServiceShipmentItemAttribute
     */
    auditInfo?: FulfillmentServiceAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceShipmentItemAttribute
     */
    fullyQualifiedName?: string | null;
    /**
     * 
     * @type {Array<any>}
     * @memberof FulfillmentServiceShipmentItemAttribute
     */
    values?: Array<any> | null;
}
/**
 * 
 * @export
 * @interface FulfillmentServiceSubstituteInfo
 */
export interface FulfillmentServiceSubstituteInfo {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceSubstituteInfo
     */
    optIn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceSubstituteInfo
     */
    substituteProductCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceSubstituteInfo
     */
    substituteVariantCode?: string | null;
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
     * @type {Array<TaskInput>}
     * @memberof FulfillmentTask
     */
    inputs?: Array<TaskInput> | null;
    /**
     * 
     * @type {{ [key: string]: CommerceRuntimeLink; }}
     * @memberof FulfillmentTask
     */
    links?: { [key: string]: CommerceRuntimeLink; } | null;
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
     * @type {number}
     * @memberof GatewayGiftCard
     */
    amount?: number;
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
     * @type {string}
     * @memberof GatewayGiftCard
     */
    currencyCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GatewayGiftCard
     */
    id?: string | null;
}
/**
 * 
 * @export
 * @interface GiftInfo
 */
export interface GiftInfo {
    /**
     * Item level gift message
     * @type {string}
     * @memberof GiftInfo
     */
    giftMessage?: string | null;
    /**
     * Flag to indicate whether the item is a gift item
     * @type {boolean}
     * @memberof GiftInfo
     */
    isGiftItem?: boolean | null;
}
/**
 * 
 * @export
 * @interface GiftMessage
 */
export interface GiftMessage {
    /**
     * Gift Message
     * @type {string}
     * @memberof GiftMessage
     */
    message?: string | null;
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
    /**
     * Description text of the reason.
     * @type {string}
     * @memberof InvalidCoupon
     */
    reason?: string | null;
    /**
     * Code that identifies the reason the coupon was invalid.
     * @type {number}
     * @memberof InvalidCoupon
     */
    reasonCode?: number;
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
 * Per-item detail within a ConsumptionRecord, tracking the quantity consumed
 * from a specific Blanket Order item and the remaining balance after the operation.
 * @export
 * @interface ItemConsumption
 */
export interface ItemConsumption {
    /**
     * The Blanket Order item ID that was consumed.
     * @type {string}
     * @memberof ItemConsumption
     */
    blanketOrderItemId?: string | null;
    /**
     * Product code of the consumed item.
     * @type {string}
     * @memberof ItemConsumption
     */
    productCode?: string | null;
    /**
     * Quantity consumed (positive) or restored (negative for reversals).
     * @type {number}
     * @memberof ItemConsumption
     */
    quantity?: number;
    /**
     * Remaining quantity on the Blanket Order item after this operation.
     * @type {number}
     * @memberof ItemConsumption
     */
    remainingAfter?: number;
    /**
     * Reservation-ledger adjustment magnitude for BlanketOrderItem.ReservedQuantity.
     * Always a non-negative magnitude — direction is determined by which method applies
     * it (BlanketOrderHandler.ConsumeAsync adds it, RestoreAsync subtracts it), mirroring
     * the existing Mozu.CommerceRuntime.Contracts.BlanketOrders.ItemConsumption.Quantity field's convention. Defaults to 0 for
     * commitment-only operations (e.g. new call-off creation before any allocation).
     * @type {number}
     * @memberof ItemConsumption
     */
    reservedQuantity?: number;
    /**
     * For configurable products, the variation product code of the consumed item.
     * @type {string}
     * @memberof ItemConsumption
     */
    variationProductCode?: string | null;
}
/**
 * 
 * @export
 * @interface ItemFulfillmentInfo
 */
export interface ItemFulfillmentInfo {
    /**
     * 
     * @type {DeliveryWindow}
     * @memberof ItemFulfillmentInfo
     */
    deliveryWindow?: DeliveryWindow;
    /**
     * Expected Delivery Date of shipment
     * @type {string}
     * @memberof ItemFulfillmentInfo
     */
    expectedDeliveryDate?: string | null;
    /**
     * Code that uniquely identifies the shipping method such as "Ground," "Overnight".
     * @type {string}
     * @memberof ItemFulfillmentInfo
     */
    shippingMethodCode?: string | null;
    /**
     * Readable name of the shipping method.
     * @type {string}
     * @memberof ItemFulfillmentInfo
     */
    shippingMethodName?: string | null;
    /**
     * Routing suggestions
     * @type {Array<Suggestion>}
     * @memberof ItemFulfillmentInfo
     */
    suggestions?: Array<Suggestion> | null;
}
/**
 * 
 * @export
 * @interface ItemQuantityUpdate
 */
export interface ItemQuantityUpdate {
    /**
     * Indicate that External Price (TenantOverridePrice) is a Sale Price or List Price. And is used to calculate the line item discounts.
     * @type {boolean}
     * @memberof ItemQuantityUpdate
     */
    isOverRidePriceSalePrice?: boolean | null;
    /**
     * An external price applied to the item.
     * @type {number}
     * @memberof ItemQuantityUpdate
     */
    tenantOverridePrice?: number | null;
}
/**
 * 
 * @export
 * @interface ItemsAndDeliveryDates
 */
export interface ItemsAndDeliveryDates {
    /**
     * 
     * @type {string}
     * @memberof ItemsAndDeliveryDates
     */
    deliveryDate?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ItemsAndDeliveryDates
     */
    itemIds?: Array<string> | null;
}
/**
 * 
 * @export
 * @interface ItemsForDestination
 */
export interface ItemsForDestination {
    /**
     * 
     * @type {string}
     * @memberof ItemsForDestination
     */
    destinationId?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ItemsForDestination
     */
    itemIds?: Array<string> | null;
}
/**
 * 
 * @export
 * @interface JobKey
 */
export interface JobKey {
    /**
     * 
     * @type {string}
     * @memberof JobKey
     */
    group?: string | null;
    /**
     * 
     * @type {string}
     * @memberof JobKey
     */
    name?: string | null;
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
 * Order form.
 * @export
 * @interface Order
 */
export interface Order {
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof Order
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * List of messages displayed by the system based on the last cart action, for example, when a product price has changed or is out-of-stock. System-supplied and read-only.
     * @type {Array<CommerceRuntimeChangeMessage>}
     * @memberof Order
     */
    changeMessages?: Array<CommerceRuntimeChangeMessage> | null;
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
     * Determines the interaction type that a customer will use to create this object.
     * Valid values are: Website, Store, Call, Unknown
     * @type {string}
     * @memberof Order
     */
    customerInteractionType?: string | null;
    /**
     * Custom data for a given vendor set within the commerce process.
     * @type {object}
     * @memberof Order
     */
    data?: object | null;
    /**
     * List of Mozu.CommerceRuntime.Contracts.Commerce.ThresholdMessage objects that are valid for the current value of the cart/order.
     * @type {Array<ThresholdMessage>}
     * @memberof Order
     */
    discountThresholdMessages?: Array<ThresholdMessage> | null;
    /**
     * Amount of the discounts applied to all items in the cart. This is a negative number.  This also includes the order level discounts.
     * @type {number}
     * @memberof Order
     */
    discountTotal?: number | null;
    /**
     * Combined price for all cart items, including all selected options as well as any discounts.
     * @type {number}
     * @memberof Order
     */
    discountedSubtotal?: number | null;
    /**
     * Subtotal minus the discounted total
     * @type {number}
     * @memberof Order
     */
    discountedTotal?: number | null;
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
     * Extra properties (key-value pairs) that extend the primary object. Think of this as a property bag of string keys and string values.
     * @type {Array<ExtendedProperty>}
     * @memberof Order
     */
    extendedProperties?: Array<ExtendedProperty> | null;
    /**
     * Not implemented. Total cost of fees for all items in the cart.
     * @type {number}
     * @memberof Order
     */
    feeTotal?: number | null;
    /**
     * 
     * @type {FulfillmentInfo}
     * @memberof Order
     */
    fulfillmentInfo?: FulfillmentInfo;
    /**
     * Total tax on handling
     * @type {number}
     * @memberof Order
     */
    handlingTaxTotal?: number | null;
    /**
     * Unique identifier of the CommerceAggregate object (e.g. order, cart, wishlist, etc.).
     * @type {string}
     * @memberof Order
     */
    id?: string | null;
    /**
     * Not implemented. Tax does not appear on cart.
     * @type {number}
     * @memberof Order
     */
    itemTaxTotal?: number | null;
    /**
     * Occasionally the commerce runtime may validate that item/product names, descriptions, and prices have not changed. 
     * If changed, it updates LastValidationDate.
     * @type {string}
     * @memberof Order
     */
    lastValidationDate?: string | null;
    /**
     * Line Item Subtotals with Order Adjustments
     * @type {number}
     * @memberof Order
     */
    lineItemSubtotalWithOrderAdjustments?: number | null;
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
    rejectedDiscounts?: Array<SuggestedDiscount> | null;
    /**
     * Shipping Amount before discount and adjustments
     * @type {number}
     * @memberof Order
     */
    shippingAmountBeforeDiscountsAndAdjustments?: number | null;
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
     * Shipping does not appear on cart.
     * @type {number}
     * @memberof Order
     */
    shippingTotal?: number | null;
    /**
     * Unique identifier of the Site.
     * @type {number}
     * @memberof Order
     */
    siteId?: number | null;
    /**
     * Combined price for all cart items, including all selected options but excluding any discounts.
     * @type {number}
     * @memberof Order
     */
    subtotal?: number | null;
    /**
     * 
     * @type {Array<SuggestedDiscount>}
     * @memberof Order
     */
    suggestedDiscounts?: Array<SuggestedDiscount> | null;
    /**
     * Storage for any additional/custom tax data.
     * @type {object}
     * @memberof Order
     */
    taxData?: object | null;
    /**
     * Tax does not appear on cart.
     * @type {number}
     * @memberof Order
     */
    taxTotal?: number | null;
    /**
     * Unique identifier of the Tenant.
     * @type {number}
     * @memberof Order
     */
    tenantId?: number | null;
    /**
     * Final total amount of the order including all discounts, shipping, and tax.
     * @type {number}
     * @memberof Order
     */
    total?: number | null;
    /**
     * Unique identifier of the shopper who created the cart.
     * @type {string}
     * @memberof Order
     */
    userId?: string | null;
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
     * When the order was accepted by the merchant
     * @type {string}
     * @memberof Order
     */
    acceptedDate?: string | null;
    /**
     * Does the customer accept marketing
     * @type {boolean}
     * @memberof Order
     */
    acceptsMarketing?: boolean | null;
    /**
     * 
     * @type {Adjustment}
     * @memberof Order
     */
    adjustment?: Adjustment;
    /**
     * 
     * @type {AlternateContact}
     * @memberof Order
     */
    alternateContact?: AlternateContact;
    /**
     * This property represents AmountCaptured - AmountRefunded via returns.
     * It is read only.
     * @type {number}
     * @memberof Order
     */
    amountAvailableForRefund?: number;
    /**
     * A counter for how much money has been issued in refunds.
     * This calculated field does NOT include refunds issued in returns.
     * @type {number}
     * @memberof Order
     */
    amountRefunded?: number;
    /**
     * A counter for how much of the order total has not been claimed by payments.
     * This is computed by Order.Total-(sum of Order.Payments where State is not voided/declined)
     * @type {number}
     * @memberof Order
     */
    amountRemainingForPayment?: number;
    /**
     * 
     * @type {Array<CommerceRuntimeOrderAttribute>}
     * @memberof Order
     */
    attributes?: Array<CommerceRuntimeOrderAttribute> | null;
    /**
     * Actions available to the payment
     * @type {Array<string>}
     * @memberof Order
     */
    availableActions?: Array<string> | null;
    /**
     * 
     * @type {BillingInfo}
     * @memberof Order
     */
    billingInfo?: BillingInfo;
    /**
     * Identifier of the originating Call-Off Order, if this Sales Order was released
     * from a Call-Off Order. Null for standard orders.
     * @type {string}
     * @memberof Order
     */
    callOffOrderId?: string | null;
    /**
     * Items canceled on the Order due to Rule violation
     * @type {Array<OrderCanceledItem>}
     * @memberof Order
     */
    canceledItems?: Array<OrderCanceledItem> | null;
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
     * The ordinal to track the Continuity order.
     * @type {number}
     * @memberof Order
     */
    continuityOrderOrdinal?: number;
    /**
     * Coupon codes associated with this order.  Only set on order import.
     * @type {Array<string>}
     * @memberof Order
     */
    couponCodes?: Array<string> | null;
    /**
     * 
     * @type {Array<Credit>}
     * @memberof Order
     */
    credits?: Array<Credit> | null;
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
     * Fulfillment digital packages associated with this order.
     * @type {Array<DigitalPackage>}
     * @memberof Order
     */
    digitalPackages?: Array<DigitalPackage> | null;
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
     * Email address of the customer at the time the order is placed.
     * @type {string}
     * @memberof Order
     */
    email?: string | null;
    /**
     * An order number to link this order to an external system
     * @type {string}
     * @memberof Order
     */
    externalId?: string | null;
    /**
     * Overrides the Fulfillment SiteSetting value for `ForceDeliveryConsolidationOnSplitShipments`.
     * TODO autogen instead of manual addition
     * @type {boolean}
     * @memberof Order
     */
    forceDeliveryConsolidationOnSplitShipments?: boolean | null;
    /**
     * Overrides the Fulfillment SiteSetting value for `ForceSTHConsolidationOnSplitShipments`.
     * TODO autogen instead of manual addition
     * @type {boolean}
     * @memberof Order
     */
    forceSTHConsolidationOnSplitShipments?: boolean | null;
    /**
     * Current fulfillment status, which can be "NotFulfilled,", "PartiallyFulfilled", or "Fufilled." 
     * System-supplied and read-only.  Values are available in FulfillmentStatusConst of this class.
     * @type {string}
     * @memberof Order
     */
    fulfillmentStatus?: string | null;
    /**
     * 
     * @type {Adjustment}
     * @memberof Order
     */
    handlingAdjustment?: Adjustment;
    /**
     * Order level handling fees excluding any discounts.
     * @type {number}
     * @memberof Order
     */
    handlingAmount?: number | null;
    /**
     * The list of historically-applied handling discounts.  The active one will have IsExcluded == false
     * @type {Array<CommerceRuntimeAppliedDiscount>}
     * @memberof Order
     */
    handlingDiscounts?: Array<CommerceRuntimeAppliedDiscount> | null;
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
     * Does this order have a draft version.
     * @type {boolean}
     * @memberof Order
     */
    hasDraft?: boolean | null;
    /**
     * Date this item was imported
     * @type {string}
     * @memberof Order
     */
    importDate?: string | null;
    /**
     * A list of invalid coupons that were attempted on the order
     * @type {Array<InvalidCoupon>}
     * @memberof Order
     */
    invalidCoupons?: Array<InvalidCoupon> | null;
    /**
     * IP address of the user placing the order. (User or customer?)
     * @type {string}
     * @memberof Order
     */
    ipAddress?: string | null;
    /**
     * Flag to check if the order is continuityOrder.
     * @type {boolean}
     * @memberof Order
     */
    isContinuityOrder?: boolean;
    /**
     * Is this order a draft version
     * @type {boolean}
     * @memberof Order
     */
    isDraft?: boolean | null;
    /**
     * Marker for determining if the order is a) complete or b) has some items that are shipped and not part of any other return
     * @type {boolean}
     * @memberof Order
     */
    isEligibleForReturns?: boolean;
    /**
     * Flag to indicate whether it is safe to proceed with fulfillment on shipments on the order.
     * @type {boolean}
     * @memberof Order
     */
    isFulfillable?: boolean;
    /**
     * Indicates this was an order in a terminal state (completed/canceled) that was imported into the system for historical purposes.
     * @type {boolean}
     * @memberof Order
     */
    isHistoricalImport?: boolean | null;
    /**
     * Was this order initiated from an external system
     * @type {boolean}
     * @memberof Order
     */
    isImport?: boolean | null;
    /**
     * Whether the shopper opts in to curbside text notifications.
     * @type {boolean}
     * @memberof Order
     */
    isOptInForSms?: boolean;
    /**
     * Returns `true` if this order originated from a checkout and has sibling partial orders, otherwise `false`.
     * @type {boolean}
     * @memberof Order
     */
    isPartialOrder?: boolean;
    /**
     * Unique identifier of the customer account.
     * @type {boolean}
     * @memberof Order
     */
    isTaxExempt?: boolean | null;
    /**
     * Was this order created by the Unified platform.
     * @type {boolean}
     * @memberof Order
     */
    isUnified?: boolean;
    /**
     * List of items in the order.
     * @type {Array<OrderItem>}
     * @memberof Order
     */
    items?: Array<OrderItem> | null;
    /**
     * Identifies the location at which the order was placed if the order was placed externally.
     * @type {string}
     * @memberof Order
     */
    locationCode?: string | null;
    /**
     * Internal notes that a merchant may add to the order. Maximum 250 characters.
     * @type {Array<OrderNote>}
     * @memberof Order
     */
    notes?: Array<OrderNote> | null;
    /**
     * Order Number. This is an integer that is only assigned after an order is placed and enters the open state.
     * @type {number}
     * @memberof Order
     */
    orderNumber?: number | null;
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
     * Shipping package associated with this order.
     * @type {Array<CommerceRuntimePackage>}
     * @memberof Order
     */
    packages?: Array<CommerceRuntimePackage> | null;
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
     * If this order originated from a checkout, this is the total number of orders created from that checkout.
     * @type {number}
     * @memberof Order
     */
    partialOrderCount?: number | null;
    /**
     * If this order originated from a checkout, this is a sequence number out of the total orders created from that checkout.
     * @type {number}
     * @memberof Order
     */
    partialOrderNumber?: number | null;
    /**
     * Current status of payment, which can be "Null," "AwaitingCheck," "AwaitingPayment," "Paid," "Authorized," or "Void." 
     * System-supplied and read-only.
     * @type {string}
     * @memberof Order
     */
    paymentStatus?: string | null;
    /**
     * Payment transaction associated with this order. It is the entire payment interchange between the merchant 
     * who is forwarding the customer's payment information and the payment service who is authorizing and 
     * capturing payment. Payment can be either by credit card, check, or PayPal.
     * @type {Array<Payment>}
     * @memberof Order
     */
    payments?: Array<Payment> | null;
    /**
     * Fulfillment pickups associated with this order.
     * @type {Array<Pickup>}
     * @memberof Order
     */
    pickups?: Array<Pickup> | null;
    /**
     * Pricelist code for the order
     * @type {string}
     * @memberof Order
     */
    priceListCode?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof Order
     */
    readyToCapture?: boolean;
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
     * @type {string}
     * @memberof Order
     */
    releaseShipmentDate?: string | null;
    /**
     * Inventory Reservation id for order.
     * @type {string}
     * @memberof Order
     */
    reservationId?: string | null;
    /**
     * Settings this flag on the order will restrict user from Cancelling the order
     * @type {boolean}
     * @memberof Order
     */
    restrictCancellation?: boolean | null;
    /**
     * Setting this flag on the order will restrict user from editing the order
     * @type {boolean}
     * @memberof Order
     */
    restrictEdit?: boolean | null;
    /**
     * System-supplied and read-only.
     * @type {string}
     * @memberof Order
     */
    returnStatus?: string | null;
    /**
     * Release Shipment After(in minutes) (Order Submitted Date).
     * @type {number}
     * @memberof Order
     */
    shipmentCreationOffset?: number | null;
    /**
     * Package shipments associated with this order.
     * @type {Array<Shipment>}
     * @memberof Order
     */
    shipments?: Array<Shipment> | null;
    /**
     * 
     * @type {Adjustment}
     * @memberof Order
     */
    shippingAdjustment?: Adjustment;
    /**
     * 
     * @type {Array<ShippingDiscount>}
     * @memberof Order
     */
    shippingDiscounts?: Array<ShippingDiscount> | null;
    /**
     * List of order grouping.
     * @type {Array<ShippingGrouping>}
     * @memberof Order
     */
    shippingGroups?: Array<ShippingGrouping> | null;
    /**
     * 
     * @type {ShopperNotes}
     * @memberof Order
     */
    shopperNotes?: ShopperNotes;
    /**
     * Source device of the user placing the order. (User or customer?)
     * @type {string}
     * @memberof Order
     */
    sourceDevice?: string | null;
    /**
     * Current status of the order, which can be viewed in OrderStatusConst. System-supplied and read-only.
     * @type {string}
     * @memberof Order
     */
    status?: string | null;
    /**
     * When the customer placed (submitted) the order.
     * @type {string}
     * @memberof Order
     */
    submittedDate?: string | null;
    /**
     * All the subscriptions associated with the current order.
     * @type {Array<string>}
     * @memberof Order
     */
    subscriptionIds?: Array<string> | null;
    /**
     * Total amount of money collected on the order via payments.
     * @type {number}
     * @memberof Order
     */
    totalCollected?: number;
    /**
     * Is this Order Online or Offline? Online means shopper entered at checkout, offline means a phone order.
     * @type {string}
     * @memberof Order
     */
    type?: string | null;
    /**
     * Validation results for the order when processes against validation capabilities.
     * @type {Array<OrderValidationResult>}
     * @memberof Order
     */
    validationResults?: Array<OrderValidationResult> | null;
    /**
     * Version for concurrency purposes
     * @type {string}
     * @memberof Order
     */
    version?: string | null;
}
/**
 * 
 * @export
 * @interface OrderAction
 */
export interface OrderAction {
    /**
     * 
     * @type {string}
     * @memberof OrderAction
     */
    actionName?: string | null;
}
/**
 * 
 * @export
 * @interface OrderAllOf
 */
export interface OrderAllOf {
    /**
     * When the order was accepted by the merchant
     * @type {string}
     * @memberof OrderAllOf
     */
    acceptedDate?: string | null;
    /**
     * Does the customer accept marketing
     * @type {boolean}
     * @memberof OrderAllOf
     */
    acceptsMarketing?: boolean | null;
    /**
     * 
     * @type {Adjustment}
     * @memberof OrderAllOf
     */
    adjustment?: Adjustment;
    /**
     * 
     * @type {AlternateContact}
     * @memberof OrderAllOf
     */
    alternateContact?: AlternateContact;
    /**
     * This property represents AmountCaptured - AmountRefunded via returns.
     * It is read only.
     * @type {number}
     * @memberof OrderAllOf
     */
    amountAvailableForRefund?: number;
    /**
     * A counter for how much money has been issued in refunds.
     * This calculated field does NOT include refunds issued in returns.
     * @type {number}
     * @memberof OrderAllOf
     */
    amountRefunded?: number;
    /**
     * A counter for how much of the order total has not been claimed by payments.
     * This is computed by Order.Total-(sum of Order.Payments where State is not voided/declined)
     * @type {number}
     * @memberof OrderAllOf
     */
    amountRemainingForPayment?: number;
    /**
     * 
     * @type {Array<CommerceRuntimeOrderAttribute>}
     * @memberof OrderAllOf
     */
    attributes?: Array<CommerceRuntimeOrderAttribute> | null;
    /**
     * Actions available to the payment
     * @type {Array<string>}
     * @memberof OrderAllOf
     */
    availableActions?: Array<string> | null;
    /**
     * 
     * @type {BillingInfo}
     * @memberof OrderAllOf
     */
    billingInfo?: BillingInfo;
    /**
     * Identifier of the originating Call-Off Order, if this Sales Order was released
     * from a Call-Off Order. Null for standard orders.
     * @type {string}
     * @memberof OrderAllOf
     */
    callOffOrderId?: string | null;
    /**
     * Items canceled on the Order due to Rule violation
     * @type {Array<OrderCanceledItem>}
     * @memberof OrderAllOf
     */
    canceledItems?: Array<OrderCanceledItem> | null;
    /**
     * Date the order was cancelled.
     * @type {string}
     * @memberof OrderAllOf
     */
    cancelledDate?: string | null;
    /**
     * Date the order was closed. A closed order means that the order has been processed and items shipped.
     * @type {string}
     * @memberof OrderAllOf
     */
    closedDate?: string | null;
    /**
     * The ordinal to track the Continuity order.
     * @type {number}
     * @memberof OrderAllOf
     */
    continuityOrderOrdinal?: number;
    /**
     * Coupon codes associated with this order.  Only set on order import.
     * @type {Array<string>}
     * @memberof OrderAllOf
     */
    couponCodes?: Array<string> | null;
    /**
     * 
     * @type {Array<Credit>}
     * @memberof OrderAllOf
     */
    credits?: Array<Credit> | null;
    /**
     * Unique identifier of the customer account.
     * @type {number}
     * @memberof OrderAllOf
     */
    customerAccountId?: number | null;
    /**
     * The customers tax ID.  If Customer Account ID exists in the system, will set this.
     * @type {string}
     * @memberof OrderAllOf
     */
    customerTaxId?: string | null;
    /**
     * Fulfillment digital packages associated with this order.
     * @type {Array<DigitalPackage>}
     * @memberof OrderAllOf
     */
    digitalPackages?: Array<DigitalPackage> | null;
    /**
     * Order level duty or tariff amount. Does not take into account duties or tariffs specifically on items on the order
     * @type {number}
     * @memberof OrderAllOf
     */
    dutyAmount?: number | null;
    /**
     * Duties or tariffs for the Order as well as OrderItems (e.g. if the Order has a $5 duty or tariff for any reason and an OrderItem has a $2 duty or tariff then the value in this property would be $7)
     * @type {number}
     * @memberof OrderAllOf
     */
    dutyTotal?: number | null;
    /**
     * Email address of the customer at the time the order is placed.
     * @type {string}
     * @memberof OrderAllOf
     */
    email?: string | null;
    /**
     * An order number to link this order to an external system
     * @type {string}
     * @memberof OrderAllOf
     */
    externalId?: string | null;
    /**
     * Overrides the Fulfillment SiteSetting value for `ForceDeliveryConsolidationOnSplitShipments`.
     * TODO autogen instead of manual addition
     * @type {boolean}
     * @memberof OrderAllOf
     */
    forceDeliveryConsolidationOnSplitShipments?: boolean | null;
    /**
     * Overrides the Fulfillment SiteSetting value for `ForceSTHConsolidationOnSplitShipments`.
     * TODO autogen instead of manual addition
     * @type {boolean}
     * @memberof OrderAllOf
     */
    forceSTHConsolidationOnSplitShipments?: boolean | null;
    /**
     * Current fulfillment status, which can be "NotFulfilled,", "PartiallyFulfilled", or "Fufilled." 
     * System-supplied and read-only.  Values are available in FulfillmentStatusConst of this class.
     * @type {string}
     * @memberof OrderAllOf
     */
    fulfillmentStatus?: string | null;
    /**
     * 
     * @type {Adjustment}
     * @memberof OrderAllOf
     */
    handlingAdjustment?: Adjustment;
    /**
     * Order level handling fees excluding any discounts.
     * @type {number}
     * @memberof OrderAllOf
     */
    handlingAmount?: number | null;
    /**
     * The list of historically-applied handling discounts.  The active one will have IsExcluded == false
     * @type {Array<CommerceRuntimeAppliedDiscount>}
     * @memberof OrderAllOf
     */
    handlingDiscounts?: Array<CommerceRuntimeAppliedDiscount> | null;
    /**
     * Handling fees for the Order as well as OrderItems (e.g. if the Order has a $5 handling fee and an OrderItem has a $2 handling fee per item quantity and the quantity of items is 2 then the value in this property would be $9)
     * @type {number}
     * @memberof OrderAllOf
     */
    handlingSubTotal?: number | null;
    /**
     * Handling fees including any discounts.
     * @type {number}
     * @memberof OrderAllOf
     */
    handlingTotal?: number | null;
    /**
     * Does this order have a draft version.
     * @type {boolean}
     * @memberof OrderAllOf
     */
    hasDraft?: boolean | null;
    /**
     * Date this item was imported
     * @type {string}
     * @memberof OrderAllOf
     */
    importDate?: string | null;
    /**
     * A list of invalid coupons that were attempted on the order
     * @type {Array<InvalidCoupon>}
     * @memberof OrderAllOf
     */
    invalidCoupons?: Array<InvalidCoupon> | null;
    /**
     * IP address of the user placing the order. (User or customer?)
     * @type {string}
     * @memberof OrderAllOf
     */
    ipAddress?: string | null;
    /**
     * Flag to check if the order is continuityOrder.
     * @type {boolean}
     * @memberof OrderAllOf
     */
    isContinuityOrder?: boolean;
    /**
     * Is this order a draft version
     * @type {boolean}
     * @memberof OrderAllOf
     */
    isDraft?: boolean | null;
    /**
     * Marker for determining if the order is a) complete or b) has some items that are shipped and not part of any other return
     * @type {boolean}
     * @memberof OrderAllOf
     */
    isEligibleForReturns?: boolean;
    /**
     * Flag to indicate whether it is safe to proceed with fulfillment on shipments on the order.
     * @type {boolean}
     * @memberof OrderAllOf
     */
    isFulfillable?: boolean;
    /**
     * Indicates this was an order in a terminal state (completed/canceled) that was imported into the system for historical purposes.
     * @type {boolean}
     * @memberof OrderAllOf
     */
    isHistoricalImport?: boolean | null;
    /**
     * Was this order initiated from an external system
     * @type {boolean}
     * @memberof OrderAllOf
     */
    isImport?: boolean | null;
    /**
     * Whether the shopper opts in to curbside text notifications.
     * @type {boolean}
     * @memberof OrderAllOf
     */
    isOptInForSms?: boolean;
    /**
     * Returns `true` if this order originated from a checkout and has sibling partial orders, otherwise `false`.
     * @type {boolean}
     * @memberof OrderAllOf
     */
    isPartialOrder?: boolean;
    /**
     * Unique identifier of the customer account.
     * @type {boolean}
     * @memberof OrderAllOf
     */
    isTaxExempt?: boolean | null;
    /**
     * Was this order created by the Unified platform.
     * @type {boolean}
     * @memberof OrderAllOf
     */
    isUnified?: boolean;
    /**
     * List of items in the order.
     * @type {Array<OrderItem>}
     * @memberof OrderAllOf
     */
    items?: Array<OrderItem> | null;
    /**
     * Identifies the location at which the order was placed if the order was placed externally.
     * @type {string}
     * @memberof OrderAllOf
     */
    locationCode?: string | null;
    /**
     * Internal notes that a merchant may add to the order. Maximum 250 characters.
     * @type {Array<OrderNote>}
     * @memberof OrderAllOf
     */
    notes?: Array<OrderNote> | null;
    /**
     * Order Number. This is an integer that is only assigned after an order is placed and enters the open state.
     * @type {number}
     * @memberof OrderAllOf
     */
    orderNumber?: number | null;
    /**
     * Unique identifier for the cart that was converted to order.
     * @type {string}
     * @memberof OrderAllOf
     */
    originalCartId?: string | null;
    /**
     * If this order originated from a quote, this is the identifier of the originating quote.
     * @type {string}
     * @memberof OrderAllOf
     */
    originalQuoteId?: string | null;
    /**
     * If this order originated from a quote, this is the number of the originating quote.
     * @type {number}
     * @memberof OrderAllOf
     */
    originalQuoteNumber?: number | null;
    /**
     * Shipping package associated with this order.
     * @type {Array<CommerceRuntimePackage>}
     * @memberof OrderAllOf
     */
    packages?: Array<CommerceRuntimePackage> | null;
    /**
     * If this order originated from a multi-ship enabled site, this is the identifier of the originating checkout.
     * @type {string}
     * @memberof OrderAllOf
     */
    parentCheckoutId?: string | null;
    /**
     * If this order originated from a multi-ship enabled site, this is the number of the originating checkout.
     * @type {number}
     * @memberof OrderAllOf
     */
    parentCheckoutNumber?: number | null;
    /**
     * If this Order has a parent order, this should be the parent's ID.
     * @type {string}
     * @memberof OrderAllOf
     */
    parentOrderId?: string | null;
    /**
     * If this order has a parent order, this should be the parent's Mozu.CommerceRuntime.Contracts.Orders.Order.OrderNumber.
     * @type {number}
     * @memberof OrderAllOf
     */
    parentOrderNumber?: number | null;
    /**
     * If this order was created as part of a return, this should be the return's ID.
     * @type {string}
     * @memberof OrderAllOf
     */
    parentReturnId?: string | null;
    /**
     * If this order was created as part of a return, this should be the return's ReturnNumber.
     * @type {number}
     * @memberof OrderAllOf
     */
    parentReturnNumber?: number | null;
    /**
     * If this order originated from a checkout, this is the total number of orders created from that checkout.
     * @type {number}
     * @memberof OrderAllOf
     */
    partialOrderCount?: number | null;
    /**
     * If this order originated from a checkout, this is a sequence number out of the total orders created from that checkout.
     * @type {number}
     * @memberof OrderAllOf
     */
    partialOrderNumber?: number | null;
    /**
     * Current status of payment, which can be "Null," "AwaitingCheck," "AwaitingPayment," "Paid," "Authorized," or "Void." 
     * System-supplied and read-only.
     * @type {string}
     * @memberof OrderAllOf
     */
    paymentStatus?: string | null;
    /**
     * Payment transaction associated with this order. It is the entire payment interchange between the merchant 
     * who is forwarding the customer's payment information and the payment service who is authorizing and 
     * capturing payment. Payment can be either by credit card, check, or PayPal.
     * @type {Array<Payment>}
     * @memberof OrderAllOf
     */
    payments?: Array<Payment> | null;
    /**
     * Fulfillment pickups associated with this order.
     * @type {Array<Pickup>}
     * @memberof OrderAllOf
     */
    pickups?: Array<Pickup> | null;
    /**
     * Pricelist code for the order
     * @type {string}
     * @memberof OrderAllOf
     */
    priceListCode?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof OrderAllOf
     */
    readyToCapture?: boolean;
    /**
     * Refunds associated with this order. A refund is a single exchange of money from merchant to customer
     * that either encapsulates a refund to a credit card or an issuance of a store credit.
     * Refunds does not reduce the 'amount collected' on an order and it is possible for refunds to exceed the total order amount.
     * @type {Array<Refund>}
     * @memberof OrderAllOf
     */
    refunds?: Array<Refund> | null;
    /**
     * 
     * @type {string}
     * @memberof OrderAllOf
     */
    releaseShipmentDate?: string | null;
    /**
     * Inventory Reservation id for order.
     * @type {string}
     * @memberof OrderAllOf
     */
    reservationId?: string | null;
    /**
     * Settings this flag on the order will restrict user from Cancelling the order
     * @type {boolean}
     * @memberof OrderAllOf
     */
    restrictCancellation?: boolean | null;
    /**
     * Setting this flag on the order will restrict user from editing the order
     * @type {boolean}
     * @memberof OrderAllOf
     */
    restrictEdit?: boolean | null;
    /**
     * System-supplied and read-only.
     * @type {string}
     * @memberof OrderAllOf
     */
    returnStatus?: string | null;
    /**
     * Release Shipment After(in minutes) (Order Submitted Date).
     * @type {number}
     * @memberof OrderAllOf
     */
    shipmentCreationOffset?: number | null;
    /**
     * Package shipments associated with this order.
     * @type {Array<Shipment>}
     * @memberof OrderAllOf
     */
    shipments?: Array<Shipment> | null;
    /**
     * 
     * @type {Adjustment}
     * @memberof OrderAllOf
     */
    shippingAdjustment?: Adjustment;
    /**
     * 
     * @type {Array<ShippingDiscount>}
     * @memberof OrderAllOf
     */
    shippingDiscounts?: Array<ShippingDiscount> | null;
    /**
     * List of order grouping.
     * @type {Array<ShippingGrouping>}
     * @memberof OrderAllOf
     */
    shippingGroups?: Array<ShippingGrouping> | null;
    /**
     * 
     * @type {ShopperNotes}
     * @memberof OrderAllOf
     */
    shopperNotes?: ShopperNotes;
    /**
     * Source device of the user placing the order. (User or customer?)
     * @type {string}
     * @memberof OrderAllOf
     */
    sourceDevice?: string | null;
    /**
     * Current status of the order, which can be viewed in OrderStatusConst. System-supplied and read-only.
     * @type {string}
     * @memberof OrderAllOf
     */
    status?: string | null;
    /**
     * When the customer placed (submitted) the order.
     * @type {string}
     * @memberof OrderAllOf
     */
    submittedDate?: string | null;
    /**
     * All the subscriptions associated with the current order.
     * @type {Array<string>}
     * @memberof OrderAllOf
     */
    subscriptionIds?: Array<string> | null;
    /**
     * Total amount of money collected on the order via payments.
     * @type {number}
     * @memberof OrderAllOf
     */
    totalCollected?: number;
    /**
     * Is this Order Online or Offline? Online means shopper entered at checkout, offline means a phone order.
     * @type {string}
     * @memberof OrderAllOf
     */
    type?: string | null;
    /**
     * Validation results for the order when processes against validation capabilities.
     * @type {Array<OrderValidationResult>}
     * @memberof OrderAllOf
     */
    validationResults?: Array<OrderValidationResult> | null;
    /**
     * Version for concurrency purposes
     * @type {string}
     * @memberof OrderAllOf
     */
    version?: string | null;
}
/**
 * 
 * @export
 * @interface OrderCanceledItem
 */
export interface OrderCanceledItem {
    /**
     * Order Level taxable sub total
     * @type {number}
     * @memberof OrderCanceledItem
     */
    adjustedLineItemSubtotal?: number | null;
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof OrderCanceledItem
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * Track the discountId from which the item was auto added
     * @type {number}
     * @memberof OrderCanceledItem
     */
    autoAddDiscountId?: number | null;
    /**
     * List of Child Item Ids for this order item
     * @type {Array<string>}
     * @memberof OrderCanceledItem
     */
    childItemIds?: Array<string> | null;
    /**
     * Custom data for a given vendor set within the commerce process.
     * @type {object}
     * @memberof OrderCanceledItem
     */
    data?: object | null;
    /**
     * How much the shopper saves with the applied discount or sale price. This is a negative number.
     * @type {number}
     * @memberof OrderCanceledItem
     */
    discountTotal?: number | null;
    /**
     * Subtotal minus any discounts.
     * @type {number}
     * @memberof OrderCanceledItem
     */
    discountedTotal?: number | null;
    /**
     * Duty or Tariff for this item
     * @type {number}
     * @memberof OrderCanceledItem
     */
    dutyAmount?: number | null;
    /**
     * Line item extended total (quantity multiplied by unit extended price) before discounts.
     * @type {number}
     * @memberof OrderCanceledItem
     */
    extendedTotal?: number | null;
    /**
     * Not implemented. Total cost of fees that apply to this item.
     * @type {number}
     * @memberof OrderCanceledItem
     */
    feeTotal?: number | null;
    /**
     * Product-level handling fee for this item (e.g. special packaging, hazmat fees).
     * This does NOT include order-level handling fees — those are in Mozu.CommerceRuntime.Contracts.Commerce.CommerceItem.WeightedOrderHandlingFee.
     * Total handling on the shipment = HandlingAmount + WeightedOrderHandlingFee.
     * @type {number}
     * @memberof OrderCanceledItem
     */
    handlingAmount?: number | null;
    /**
     * 
     * @type {Array<InventoryTags>}
     * @memberof OrderCanceledItem
     */
    inventoryTags?: Array<InventoryTags> | null;
    /**
     * Assembly Required for this order item
     * @type {boolean}
     * @memberof OrderCanceledItem
     */
    isAssemblyRequired?: boolean;
    /**
     * If true, the cart item lists a product that can be purchased or fulfilled at regular intervals, for example, monthly billing or a subscription.
     * @type {boolean}
     * @memberof OrderCanceledItem
     */
    isRecurring?: boolean | null;
    /**
     * Not implemented. If true, the cart item is eligible for tax.
     * @type {boolean}
     * @memberof OrderCanceledItem
     */
    isTaxable?: boolean | null;
    /**
     * Total price of taxes that apply to products in this item.
     * @type {number}
     * @memberof OrderCanceledItem
     */
    itemTaxTotal?: number | null;
    /**
     * The line id assigned to the order item. Visible only in the Admin, this is set from the Admin or
     * in CommerceRuntime when a cart is converted to an order.
     * @type {number}
     * @memberof OrderCanceledItem
     */
    lineId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof OrderCanceledItem
     */
    lineItemAdjustment?: number | null;
    /**
     * Locale code for language that appears in text and descriptions on the site, for example, en_US. 
     * This is not the currency code. Currently only en_US is supported.
     * @type {string}
     * @memberof OrderCanceledItem
     */
    localeCode?: string | null;
    /**
     * Indicates Parent Item Id for this order item
     * @type {string}
     * @memberof OrderCanceledItem
     */
    parentItemId?: string | null;
    /**
     * 
     * @type {CommerceRuntimeProduct}
     * @memberof OrderCanceledItem
     */
    product?: CommerceRuntimeProduct;
    /**
     * 
     * @type {AppliedLineItemProductDiscount}
     * @memberof OrderCanceledItem
     */
    productDiscount?: AppliedLineItemProductDiscount;
    /**
     * A list of discounts applied to the product
     * @type {Array<AppliedLineItemProductDiscount>}
     * @memberof OrderCanceledItem
     */
    productDiscounts?: Array<AppliedLineItemProductDiscount> | null;
    /**
     * The location where the product is being purchased.. default is null. Products can have different prices
     * by purchaseLocation via custom priceListResolution...
     * @type {string}
     * @memberof OrderCanceledItem
     */
    purchaseLocation?: string | null;
    /**
     * Number of products ordered.
     * @type {number}
     * @memberof OrderCanceledItem
     */
    quantity?: number;
    /**
     * Shipping amount before Discounts and adjustments
     * @type {number}
     * @memberof OrderCanceledItem
     */
    shippingAmountBeforeDiscountsAndAdjustments?: number | null;
    /**
     * A discount applied to the shipping
     * @type {Array<AppliedLineItemShippingDiscount>}
     * @memberof OrderCanceledItem
     */
    shippingDiscounts?: Array<AppliedLineItemShippingDiscount> | null;
    /**
     * Total price of taxes that apply to the shipping of this item.
     * @type {number}
     * @memberof OrderCanceledItem
     */
    shippingTaxTotal?: number | null;
    /**
     * Total price of shipping that apply to this item.
     * @type {number}
     * @memberof OrderCanceledItem
     */
    shippingTotal?: number | null;
    /**
     * 
     * @type {SubstituteInfo}
     * @memberof OrderCanceledItem
     */
    substituteInfo?: SubstituteInfo;
    /**
     * Line item subtotal (quantity multiplied by price) before discounts.
     * @type {number}
     * @memberof OrderCanceledItem
     */
    subtotal?: number | null;
    /**
     * Storage for any additional/custom tax data.
     * @type {object}
     * @memberof OrderCanceledItem
     */
    taxData?: object | null;
    /**
     * Line item subtotal (quantity multiplied by price) before discounts.
     * @type {number}
     * @memberof OrderCanceledItem
     */
    taxableTotal?: number | null;
    /**
     * Total price of this cart item taking into account any discounts.
     * @type {number}
     * @memberof OrderCanceledItem
     */
    total?: number | null;
    /**
     * Line item total with line item, Tax, Weighted Tax with Weighted shipping and handling costs
     * @type {number}
     * @memberof OrderCanceledItem
     */
    totalWithWeightedShippingAndHandling?: number | null;
    /**
     * Taxable Subtotal including Weighted Order amounts
     * @type {number}
     * @memberof OrderCanceledItem
     */
    totalWithoutWeightedShippingAndHandling?: number | null;
    /**
     * 
     * @type {CommerceUnitPrice}
     * @memberof OrderCanceledItem
     */
    unitPrice?: CommerceUnitPrice;
    /**
     * Order Level Manual Adjustment applied to this Item
     * @type {number}
     * @memberof OrderCanceledItem
     */
    weightedOrderAdjustment?: number | null;
    /**
     * Order Level Discount applied to this Item
     * @type {number}
     * @memberof OrderCanceledItem
     */
    weightedOrderDiscount?: number | null;
    /**
     * Order Level Duty applied to this Item
     * @type {number}
     * @memberof OrderCanceledItem
     */
    weightedOrderDuty?: number | null;
    /**
     * Order-level handling manual adjustment allocated to this item.
     * @type {number}
     * @memberof OrderCanceledItem
     */
    weightedOrderHandlingAdjustment?: number | null;
    /**
     * Order-level handling fee allocated to this item (e.g. flat handling fee spread across all items).
     * This is separate from product-level handling in Mozu.CommerceRuntime.Contracts.Commerce.CommerceItem.HandlingAmount.
     * Total handling on the shipment = HandlingAmount + WeightedOrderHandlingFee.
     * @type {number}
     * @memberof OrderCanceledItem
     */
    weightedOrderHandlingFee?: number | null;
    /**
     * Order-level handling fee discount allocated to this item.
     * @type {number}
     * @memberof OrderCanceledItem
     */
    weightedOrderHandlingFeeDiscount?: number | null;
    /**
     * Total handling tax for this item (covers both product-level and order-level handling tax combined).
     * On the shipment item, this is split into: HandlingTax (total) and WeightedOrderHandlingFeeTax (order-level portion only).
     * @type {number}
     * @memberof OrderCanceledItem
     */
    weightedOrderHandlingFeeTax?: number | null;
    /**
     * Order Level Shipping applied to this Item
     * @type {number}
     * @memberof OrderCanceledItem
     */
    weightedOrderShipping?: number | null;
    /**
     * Order Level Shipping discount applied to this Item
     * @type {number}
     * @memberof OrderCanceledItem
     */
    weightedOrderShippingDiscount?: number | null;
    /**
     * Order Level Shipping Manual Adjustment applied to this Item
     * @type {number}
     * @memberof OrderCanceledItem
     */
    weightedOrderShippingManualAdjustment?: number | null;
    /**
     * Order Level Shipping Tax applied to this Item
     * @type {number}
     * @memberof OrderCanceledItem
     */
    weightedOrderShippingTax?: number | null;
    /**
     * Order Level tax applied to this Item
     * @type {number}
     * @memberof OrderCanceledItem
     */
    weightedOrderTax?: number | null;
    /**
     * Extensible attributes for this order line.
     * @type {Array<OrderLineAttribute>}
     * @memberof OrderCanceledItem
     */
    attributes?: Array<OrderLineAttribute> | null;
    /**
     * Identifier of the originating Call-Off Order line item, if this item was released
     * from a Call-Off Order line. Null for standard order items.
     * @type {string}
     * @memberof OrderCanceledItem
     */
    callOffOrderItemId?: string | null;
    /**
     * 
     * @type {DeliveryWindow}
     * @memberof OrderCanceledItem
     */
    deliveryWindow?: DeliveryWindow;
    /**
     * The destination associated with this item when used with a multi-ship checkout.
     * @type {string}
     * @memberof OrderCanceledItem
     */
    destinationId?: string | null;
    /**
     * Expected Delivery Date of shipment
     * @type {string}
     * @memberof OrderCanceledItem
     */
    expectedDeliveryDate?: string | null;
    /**
     * Location code from which to obtain this item
     * @type {string}
     * @memberof OrderCanceledItem
     */
    fulfillmentLocationCode?: string | null;
    /**
     * Fulfillment method used to fulfill this item
     * @type {string}
     * @memberof OrderCanceledItem
     */
    fulfillmentMethod?: string | null;
    /**
     * 
     * @type {GiftInfo}
     * @memberof OrderCanceledItem
     */
    giftInfo?: GiftInfo;
    /**
     * Unique identifier of the order line item. System-supplied and read-only.
     * @type {string}
     * @memberof OrderCanceledItem
     */
    id?: string | null;
    /**
     * Flag to indicate reserve inventory in cart
     * @type {boolean}
     * @memberof OrderCanceledItem
     */
    isReservationEnabled?: boolean;
    /**
     * Unique identifier of the cart item that is associated with this line item. 
     * (This is the original Cart Item ID expressed as a GUID.)
     * @type {string}
     * @memberof OrderCanceledItem
     */
    originalCartItemId?: string | null;
    /**
     * Determines if the item is using external or internal(catalog) pricing
     * @type {string}
     * @memberof OrderCanceledItem
     */
    priceMode?: string | null;
    /**
     * Requested ship date carried from the Call-Off Order line (spec COM-10941 follow-up).
     * @type {string}
     * @memberof OrderCanceledItem
     */
    requestedShipDate?: string | null;
    /**
     * 
     * @type {ReturnRuleInfo}
     * @memberof OrderCanceledItem
     */
    returnRuleInfo?: ReturnRuleInfo;
    /**
     * Code that uniquely identifies the shipping method.
     * @type {string}
     * @memberof OrderCanceledItem
     */
    shippingMethodCode?: string | null;
    /**
     * Readable name of the shipping method.
     * @type {string}
     * @memberof OrderCanceledItem
     */
    shippingMethodName?: string | null;
    /**
     * 
     * @type {SubscriptionInfo}
     * @memberof OrderCanceledItem
     */
    subscription?: SubscriptionInfo;
    /**
     * Routing suggestions
     * @type {Array<Suggestion>}
     * @memberof OrderCanceledItem
     */
    suggestions?: Array<Suggestion> | null;
    /**
     * Time-fence tolerance (days) carried from the Call-Off Order line's bound ReservationRule.
     * @type {number}
     * @memberof OrderCanceledItem
     */
    timeFenceDays?: number | null;
    /**
     * Quantity Canceled on the OrderItem
     * @type {number}
     * @memberof OrderCanceledItem
     */
    canceledQuantity?: number;
    /**
     * Original Quantity of OrderItem before Cancellation
     * @type {number}
     * @memberof OrderCanceledItem
     */
    originalQuantity?: number;
    /**
     * Max Quantity Rule Code that was violated and led to Item Cancellation
     * @type {string}
     * @memberof OrderCanceledItem
     */
    ruleCode?: string | null;
}
/**
 * 
 * @export
 * @interface OrderCanceledItemAllOf
 */
export interface OrderCanceledItemAllOf {
    /**
     * Quantity Canceled on the OrderItem
     * @type {number}
     * @memberof OrderCanceledItemAllOf
     */
    canceledQuantity?: number;
    /**
     * Original Quantity of OrderItem before Cancellation
     * @type {number}
     * @memberof OrderCanceledItemAllOf
     */
    originalQuantity?: number;
    /**
     * Max Quantity Rule Code that was violated and led to Item Cancellation
     * @type {string}
     * @memberof OrderCanceledItemAllOf
     */
    ruleCode?: string | null;
}
/**
 * Paged collection of orders. This is paged in case it's returning a long list the orders. 
 * for a store.
 * @export
 * @interface OrderCollection
 */
export interface OrderCollection {
    /**
     * 
     * @type {Array<Order>}
     * @memberof OrderCollection
     */
    items?: Array<Order> | null;
    /**
     * 
     * @type {number}
     * @memberof OrderCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderCollection
     */
    totalCount?: number;
}
/**
 * A single line item of an order.
 * @export
 * @interface OrderItem
 */
export interface OrderItem {
    /**
     * Order Level taxable sub total
     * @type {number}
     * @memberof OrderItem
     */
    adjustedLineItemSubtotal?: number | null;
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof OrderItem
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * Track the discountId from which the item was auto added
     * @type {number}
     * @memberof OrderItem
     */
    autoAddDiscountId?: number | null;
    /**
     * List of Child Item Ids for this order item
     * @type {Array<string>}
     * @memberof OrderItem
     */
    childItemIds?: Array<string> | null;
    /**
     * Custom data for a given vendor set within the commerce process.
     * @type {object}
     * @memberof OrderItem
     */
    data?: object | null;
    /**
     * How much the shopper saves with the applied discount or sale price. This is a negative number.
     * @type {number}
     * @memberof OrderItem
     */
    discountTotal?: number | null;
    /**
     * Subtotal minus any discounts.
     * @type {number}
     * @memberof OrderItem
     */
    discountedTotal?: number | null;
    /**
     * Duty or Tariff for this item
     * @type {number}
     * @memberof OrderItem
     */
    dutyAmount?: number | null;
    /**
     * Line item extended total (quantity multiplied by unit extended price) before discounts.
     * @type {number}
     * @memberof OrderItem
     */
    extendedTotal?: number | null;
    /**
     * Not implemented. Total cost of fees that apply to this item.
     * @type {number}
     * @memberof OrderItem
     */
    feeTotal?: number | null;
    /**
     * Product-level handling fee for this item (e.g. special packaging, hazmat fees).
     * This does NOT include order-level handling fees — those are in Mozu.CommerceRuntime.Contracts.Commerce.CommerceItem.WeightedOrderHandlingFee.
     * Total handling on the shipment = HandlingAmount + WeightedOrderHandlingFee.
     * @type {number}
     * @memberof OrderItem
     */
    handlingAmount?: number | null;
    /**
     * 
     * @type {Array<InventoryTags>}
     * @memberof OrderItem
     */
    inventoryTags?: Array<InventoryTags> | null;
    /**
     * Assembly Required for this order item
     * @type {boolean}
     * @memberof OrderItem
     */
    isAssemblyRequired?: boolean;
    /**
     * If true, the cart item lists a product that can be purchased or fulfilled at regular intervals, for example, monthly billing or a subscription.
     * @type {boolean}
     * @memberof OrderItem
     */
    isRecurring?: boolean | null;
    /**
     * Not implemented. If true, the cart item is eligible for tax.
     * @type {boolean}
     * @memberof OrderItem
     */
    isTaxable?: boolean | null;
    /**
     * Total price of taxes that apply to products in this item.
     * @type {number}
     * @memberof OrderItem
     */
    itemTaxTotal?: number | null;
    /**
     * The line id assigned to the order item. Visible only in the Admin, this is set from the Admin or
     * in CommerceRuntime when a cart is converted to an order.
     * @type {number}
     * @memberof OrderItem
     */
    lineId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof OrderItem
     */
    lineItemAdjustment?: number | null;
    /**
     * Locale code for language that appears in text and descriptions on the site, for example, en_US. 
     * This is not the currency code. Currently only en_US is supported.
     * @type {string}
     * @memberof OrderItem
     */
    localeCode?: string | null;
    /**
     * Indicates Parent Item Id for this order item
     * @type {string}
     * @memberof OrderItem
     */
    parentItemId?: string | null;
    /**
     * 
     * @type {CommerceRuntimeProduct}
     * @memberof OrderItem
     */
    product?: CommerceRuntimeProduct;
    /**
     * 
     * @type {AppliedLineItemProductDiscount}
     * @memberof OrderItem
     */
    productDiscount?: AppliedLineItemProductDiscount;
    /**
     * A list of discounts applied to the product
     * @type {Array<AppliedLineItemProductDiscount>}
     * @memberof OrderItem
     */
    productDiscounts?: Array<AppliedLineItemProductDiscount> | null;
    /**
     * The location where the product is being purchased.. default is null. Products can have different prices
     * by purchaseLocation via custom priceListResolution...
     * @type {string}
     * @memberof OrderItem
     */
    purchaseLocation?: string | null;
    /**
     * Number of products ordered.
     * @type {number}
     * @memberof OrderItem
     */
    quantity?: number;
    /**
     * Shipping amount before Discounts and adjustments
     * @type {number}
     * @memberof OrderItem
     */
    shippingAmountBeforeDiscountsAndAdjustments?: number | null;
    /**
     * A discount applied to the shipping
     * @type {Array<AppliedLineItemShippingDiscount>}
     * @memberof OrderItem
     */
    shippingDiscounts?: Array<AppliedLineItemShippingDiscount> | null;
    /**
     * Total price of taxes that apply to the shipping of this item.
     * @type {number}
     * @memberof OrderItem
     */
    shippingTaxTotal?: number | null;
    /**
     * Total price of shipping that apply to this item.
     * @type {number}
     * @memberof OrderItem
     */
    shippingTotal?: number | null;
    /**
     * 
     * @type {SubstituteInfo}
     * @memberof OrderItem
     */
    substituteInfo?: SubstituteInfo;
    /**
     * Line item subtotal (quantity multiplied by price) before discounts.
     * @type {number}
     * @memberof OrderItem
     */
    subtotal?: number | null;
    /**
     * Storage for any additional/custom tax data.
     * @type {object}
     * @memberof OrderItem
     */
    taxData?: object | null;
    /**
     * Line item subtotal (quantity multiplied by price) before discounts.
     * @type {number}
     * @memberof OrderItem
     */
    taxableTotal?: number | null;
    /**
     * Total price of this cart item taking into account any discounts.
     * @type {number}
     * @memberof OrderItem
     */
    total?: number | null;
    /**
     * Line item total with line item, Tax, Weighted Tax with Weighted shipping and handling costs
     * @type {number}
     * @memberof OrderItem
     */
    totalWithWeightedShippingAndHandling?: number | null;
    /**
     * Taxable Subtotal including Weighted Order amounts
     * @type {number}
     * @memberof OrderItem
     */
    totalWithoutWeightedShippingAndHandling?: number | null;
    /**
     * 
     * @type {CommerceUnitPrice}
     * @memberof OrderItem
     */
    unitPrice?: CommerceUnitPrice;
    /**
     * Order Level Manual Adjustment applied to this Item
     * @type {number}
     * @memberof OrderItem
     */
    weightedOrderAdjustment?: number | null;
    /**
     * Order Level Discount applied to this Item
     * @type {number}
     * @memberof OrderItem
     */
    weightedOrderDiscount?: number | null;
    /**
     * Order Level Duty applied to this Item
     * @type {number}
     * @memberof OrderItem
     */
    weightedOrderDuty?: number | null;
    /**
     * Order-level handling manual adjustment allocated to this item.
     * @type {number}
     * @memberof OrderItem
     */
    weightedOrderHandlingAdjustment?: number | null;
    /**
     * Order-level handling fee allocated to this item (e.g. flat handling fee spread across all items).
     * This is separate from product-level handling in Mozu.CommerceRuntime.Contracts.Commerce.CommerceItem.HandlingAmount.
     * Total handling on the shipment = HandlingAmount + WeightedOrderHandlingFee.
     * @type {number}
     * @memberof OrderItem
     */
    weightedOrderHandlingFee?: number | null;
    /**
     * Order-level handling fee discount allocated to this item.
     * @type {number}
     * @memberof OrderItem
     */
    weightedOrderHandlingFeeDiscount?: number | null;
    /**
     * Total handling tax for this item (covers both product-level and order-level handling tax combined).
     * On the shipment item, this is split into: HandlingTax (total) and WeightedOrderHandlingFeeTax (order-level portion only).
     * @type {number}
     * @memberof OrderItem
     */
    weightedOrderHandlingFeeTax?: number | null;
    /**
     * Order Level Shipping applied to this Item
     * @type {number}
     * @memberof OrderItem
     */
    weightedOrderShipping?: number | null;
    /**
     * Order Level Shipping discount applied to this Item
     * @type {number}
     * @memberof OrderItem
     */
    weightedOrderShippingDiscount?: number | null;
    /**
     * Order Level Shipping Manual Adjustment applied to this Item
     * @type {number}
     * @memberof OrderItem
     */
    weightedOrderShippingManualAdjustment?: number | null;
    /**
     * Order Level Shipping Tax applied to this Item
     * @type {number}
     * @memberof OrderItem
     */
    weightedOrderShippingTax?: number | null;
    /**
     * Order Level tax applied to this Item
     * @type {number}
     * @memberof OrderItem
     */
    weightedOrderTax?: number | null;
    /**
     * Extensible attributes for this order line.
     * @type {Array<OrderLineAttribute>}
     * @memberof OrderItem
     */
    attributes?: Array<OrderLineAttribute> | null;
    /**
     * Identifier of the originating Call-Off Order line item, if this item was released
     * from a Call-Off Order line. Null for standard order items.
     * @type {string}
     * @memberof OrderItem
     */
    callOffOrderItemId?: string | null;
    /**
     * 
     * @type {DeliveryWindow}
     * @memberof OrderItem
     */
    deliveryWindow?: DeliveryWindow;
    /**
     * The destination associated with this item when used with a multi-ship checkout.
     * @type {string}
     * @memberof OrderItem
     */
    destinationId?: string | null;
    /**
     * Expected Delivery Date of shipment
     * @type {string}
     * @memberof OrderItem
     */
    expectedDeliveryDate?: string | null;
    /**
     * Location code from which to obtain this item
     * @type {string}
     * @memberof OrderItem
     */
    fulfillmentLocationCode?: string | null;
    /**
     * Fulfillment method used to fulfill this item
     * @type {string}
     * @memberof OrderItem
     */
    fulfillmentMethod?: string | null;
    /**
     * 
     * @type {GiftInfo}
     * @memberof OrderItem
     */
    giftInfo?: GiftInfo;
    /**
     * Unique identifier of the order line item. System-supplied and read-only.
     * @type {string}
     * @memberof OrderItem
     */
    id?: string | null;
    /**
     * Flag to indicate reserve inventory in cart
     * @type {boolean}
     * @memberof OrderItem
     */
    isReservationEnabled?: boolean;
    /**
     * Unique identifier of the cart item that is associated with this line item. 
     * (This is the original Cart Item ID expressed as a GUID.)
     * @type {string}
     * @memberof OrderItem
     */
    originalCartItemId?: string | null;
    /**
     * Determines if the item is using external or internal(catalog) pricing
     * @type {string}
     * @memberof OrderItem
     */
    priceMode?: string | null;
    /**
     * Requested ship date carried from the Call-Off Order line (spec COM-10941 follow-up).
     * @type {string}
     * @memberof OrderItem
     */
    requestedShipDate?: string | null;
    /**
     * 
     * @type {ReturnRuleInfo}
     * @memberof OrderItem
     */
    returnRuleInfo?: ReturnRuleInfo;
    /**
     * Code that uniquely identifies the shipping method.
     * @type {string}
     * @memberof OrderItem
     */
    shippingMethodCode?: string | null;
    /**
     * Readable name of the shipping method.
     * @type {string}
     * @memberof OrderItem
     */
    shippingMethodName?: string | null;
    /**
     * 
     * @type {SubscriptionInfo}
     * @memberof OrderItem
     */
    subscription?: SubscriptionInfo;
    /**
     * Routing suggestions
     * @type {Array<Suggestion>}
     * @memberof OrderItem
     */
    suggestions?: Array<Suggestion> | null;
    /**
     * Time-fence tolerance (days) carried from the Call-Off Order line's bound ReservationRule.
     * @type {number}
     * @memberof OrderItem
     */
    timeFenceDays?: number | null;
}
/**
 * 
 * @export
 * @interface OrderItemAllOf
 */
export interface OrderItemAllOf {
    /**
     * Extensible attributes for this order line.
     * @type {Array<OrderLineAttribute>}
     * @memberof OrderItemAllOf
     */
    attributes?: Array<OrderLineAttribute> | null;
    /**
     * Identifier of the originating Call-Off Order line item, if this item was released
     * from a Call-Off Order line. Null for standard order items.
     * @type {string}
     * @memberof OrderItemAllOf
     */
    callOffOrderItemId?: string | null;
    /**
     * 
     * @type {DeliveryWindow}
     * @memberof OrderItemAllOf
     */
    deliveryWindow?: DeliveryWindow;
    /**
     * The destination associated with this item when used with a multi-ship checkout.
     * @type {string}
     * @memberof OrderItemAllOf
     */
    destinationId?: string | null;
    /**
     * Duty or Tariff for this item
     * @type {number}
     * @memberof OrderItemAllOf
     */
    dutyAmount?: number | null;
    /**
     * Expected Delivery Date of shipment
     * @type {string}
     * @memberof OrderItemAllOf
     */
    expectedDeliveryDate?: string | null;
    /**
     * Location code from which to obtain this item
     * @type {string}
     * @memberof OrderItemAllOf
     */
    fulfillmentLocationCode?: string | null;
    /**
     * Fulfillment method used to fulfill this item
     * @type {string}
     * @memberof OrderItemAllOf
     */
    fulfillmentMethod?: string | null;
    /**
     * 
     * @type {GiftInfo}
     * @memberof OrderItemAllOf
     */
    giftInfo?: GiftInfo;
    /**
     * Unique identifier of the order line item. System-supplied and read-only.
     * @type {string}
     * @memberof OrderItemAllOf
     */
    id?: string | null;
    /**
     * Flag to indicate reserve inventory in cart
     * @type {boolean}
     * @memberof OrderItemAllOf
     */
    isReservationEnabled?: boolean;
    /**
     * Unique identifier of the cart item that is associated with this line item. 
     * (This is the original Cart Item ID expressed as a GUID.)
     * @type {string}
     * @memberof OrderItemAllOf
     */
    originalCartItemId?: string | null;
    /**
     * Determines if the item is using external or internal(catalog) pricing
     * @type {string}
     * @memberof OrderItemAllOf
     */
    priceMode?: string | null;
    /**
     * Requested ship date carried from the Call-Off Order line (spec COM-10941 follow-up).
     * @type {string}
     * @memberof OrderItemAllOf
     */
    requestedShipDate?: string | null;
    /**
     * 
     * @type {ReturnRuleInfo}
     * @memberof OrderItemAllOf
     */
    returnRuleInfo?: ReturnRuleInfo;
    /**
     * Code that uniquely identifies the shipping method.
     * @type {string}
     * @memberof OrderItemAllOf
     */
    shippingMethodCode?: string | null;
    /**
     * Readable name of the shipping method.
     * @type {string}
     * @memberof OrderItemAllOf
     */
    shippingMethodName?: string | null;
    /**
     * 
     * @type {SubscriptionInfo}
     * @memberof OrderItemAllOf
     */
    subscription?: SubscriptionInfo;
    /**
     * Routing suggestions
     * @type {Array<Suggestion>}
     * @memberof OrderItemAllOf
     */
    suggestions?: Array<Suggestion> | null;
    /**
     * Time-fence tolerance (days) carried from the Call-Off Order line's bound ReservationRule.
     * @type {number}
     * @memberof OrderItemAllOf
     */
    timeFenceDays?: number | null;
}
/**
 * Collection of items listed on the order.
 * @export
 * @interface OrderItemCollection
 */
export interface OrderItemCollection {
    /**
     * 
     * @type {Array<OrderItem>}
     * @memberof OrderItemCollection
     */
    items?: Array<OrderItem> | null;
    /**
     * 
     * @type {number}
     * @memberof OrderItemCollection
     */
    totalCount?: number;
}
/**
 * Attribute instance on an Order line item.
 * @export
 * @interface OrderLineAttribute
 */
export interface OrderLineAttribute {
    /**
     * 
     * @type {number}
     * @memberof OrderLineAttribute
     */
    attributeDefinitionId?: number | null;
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof OrderLineAttribute
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof OrderLineAttribute
     */
    fullyQualifiedName?: string | null;
    /**
     * 
     * @type {Array<any>}
     * @memberof OrderLineAttribute
     */
    values?: Array<any> | null;
}
/**
 * Internal notes that a merchant may add to the order. Maximum 250 characters.
 * @export
 * @interface OrderNote
 */
export interface OrderNote {
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof OrderNote
     */
    auditInfo?: CoreApiContractsAuditInfo;
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
    text?: string;
}
/**
 * 
 * @export
 * @interface OrderReturnableItem
 */
export interface OrderReturnableItem {
    /**
     * 
     * @type {AppliedReturnRuleInfo}
     * @memberof OrderReturnableItem
     */
    appliedReturnRuleInfo?: AppliedReturnRuleInfo;
    /**
     * List of unique product identifiers for an item on shipment
     * @type {Array<FulfillmentField>}
     * @memberof OrderReturnableItem
     */
    fulfillmentFields?: Array<FulfillmentField> | null;
    /**
     * 
     * @type {string}
     * @memberof OrderReturnableItem
     */
    fulfillmentStatus?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderReturnableItem
     */
    mfgPartNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderReturnableItem
     */
    orderItemId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderReturnableItem
     */
    orderItemOptionAttributeFQN?: string | null;
    /**
     * 
     * @type {number}
     * @memberof OrderReturnableItem
     */
    orderLineId?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderReturnableItem
     */
    parentProductCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderReturnableItem
     */
    parentProductName?: string | null;
    /**
     * The product code of the associated item.
     * @type {string}
     * @memberof OrderReturnableItem
     */
    productCode?: string | null;
    /**
     * The name of the associated product.
     * @type {string}
     * @memberof OrderReturnableItem
     */
    productName?: string | null;
    /**
     * The number of units fulfilled.
     * @type {number}
     * @memberof OrderReturnableItem
     */
    quantityFulfilled?: number;
    /**
     * The number of units ordered.
     * @type {number}
     * @memberof OrderReturnableItem
     */
    quantityOrdered?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderReturnableItem
     */
    quantityRejected?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderReturnableItem
     */
    readonly quantityReturnable?: number;
    /**
     * The number if times this item configuration was found in live returns (not cancelled or rejected).
     * @type {number}
     * @memberof OrderReturnableItem
     */
    quantityReturned?: number;
    /**
     * Shipment Item Id Number associated with product
     * @type {number}
     * @memberof OrderReturnableItem
     */
    shipmentItemId?: number | null;
    /**
     * Shipment Number associated with product
     * @type {number}
     * @memberof OrderReturnableItem
     */
    shipmentNumber?: number | null;
    /**
     * 
     * @type {string}
     * @memberof OrderReturnableItem
     */
    sku?: string | null;
    /**
     * 
     * @type {number}
     * @memberof OrderReturnableItem
     */
    unitQuantity?: number;
}
/**
 * Collection of fulfillment information for items on an order.
 * @export
 * @interface OrderReturnableItemCollection
 */
export interface OrderReturnableItemCollection {
    /**
     * 
     * @type {Array<OrderReturnableItem>}
     * @memberof OrderReturnableItemCollection
     */
    items?: Array<OrderReturnableItem> | null;
    /**
     * 
     * @type {number}
     * @memberof OrderReturnableItemCollection
     */
    totalCount?: number;
}
/**
 * Validation message returned by an order validator.
 * @export
 * @interface OrderValidationMessage
 */
export interface OrderValidationMessage {
    /**
     * Actual message returned by the validator.
     * @type {string}
     * @memberof OrderValidationMessage
     */
    message?: string | null;
    /**
     * Identifier to indicate the type of the message, See OrderValidatorMessageTypeConst for options.
     * @type {string}
     * @memberof OrderValidationMessage
     */
    messageType?: string | null;
    /**
     * Order item id that this message applies to.  Can be empty.
     * @type {string}
     * @memberof OrderValidationMessage
     */
    orderItemId?: string | null;
}
/**
 * The result of an order validator.
 * @export
 * @interface OrderValidationResult
 */
export interface OrderValidationResult {
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
    /**
     * Status of the order validation result.  See OrderValidatorStatusConst for options.
     * @type {string}
     * @memberof OrderValidationResult
     */
    status?: string | null;
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
}
/**
 * An item in a package representing a particular product.
 * @export
 * @interface PackageItem
 */
export interface PackageItem {
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
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof Payment
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * Actions available to the payment
     * @type {Array<string>}
     * @memberof Payment
     */
    availableActions?: Array<string> | null;
    /**
     * 
     * @type {BillingInfo}
     * @memberof Payment
     */
    billingInfo?: BillingInfo;
    /**
     * Change messages related to the payment.
     * @type {Array<CommerceRuntimeChangeMessage>}
     * @memberof Payment
     */
    changeMessages?: Array<CommerceRuntimeChangeMessage> | null;
    /**
     * Custom data from payment providers
     * @type {object}
     * @memberof Payment
     */
    data?: object | null;
    /**
     * The external/third party transaction Id for this payment. This is used to store the transaction Id from digital wallet like Visa Checkout
     * @type {string}
     * @memberof Payment
     */
    externalTransactionId?: string | null;
    /**
     * 
     * @type {GatewayGiftCard}
     * @memberof Payment
     */
    gatewayGiftCard?: GatewayGiftCard;
    /**
     * 
     * @type {PaymentActionTarget}
     * @memberof Payment
     */
    groupId?: PaymentActionTarget;
    /**
     * Unique identifier of this order transaction.
     * @type {string}
     * @memberof Payment
     */
    id?: string | null;
    /**
     * Stores the Installment Plan code. Installment is only supported on subscription orders
     * @type {string}
     * @memberof Payment
     */
    installmentPlanCode?: string | null;
    /**
     * List of interactions for this transaction. A transaction is created upon authorization and lasts across the payment 
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
     * Unique identifier of the order with which this transaction is associated.
     * @type {string}
     * @memberof Payment
     */
    orderId?: string | null;
    /**
     * Unique identifier of the transaction, specified by the payment service processesing this transaction.
     * @type {string}
     * @memberof Payment
     */
    paymentServiceTransactionId?: string | null;
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
}
/**
 * 
 * @export
 * @interface PaymentAction
 */
export interface PaymentAction {
    /**
     * Name of the Action to post
     * @type {string}
     * @memberof PaymentAction
     */
    actionName?: string | null;
    /**
     * Amount of funds to withdraw to pay for this order.
     * @type {number}
     * @memberof PaymentAction
     */
    amount?: number | null;
    /**
     * If paying by Paypal Express or some other potential non-gateway payment provider, a cancel redirect URL must be provided.
     * This will be used if something goes wrong on the third-party side.
     * @type {string}
     * @memberof PaymentAction
     */
    cancelUrl?: string | null;
    /**
     * If paying by check, the check number.
     * @type {string}
     * @memberof PaymentAction
     */
    checkNumber?: string | null;
    /**
     * ISO currency code for the transaction. Currently, only USD is supported.
     * @type {string}
     * @memberof PaymentAction
     */
    currencyCode?: string | null;
    /**
     * Custom data from payment providers
     * @type {object}
     * @memberof PaymentAction
     */
    data?: object | null;
    /**
     * 
     * @type {string}
     * @memberof PaymentAction
     */
    externalTransactionId?: string | null;
    /**
     * Stores the Installment Plan code. Installment is only supported on subscription orders
     * @type {string}
     * @memberof PaymentAction
     */
    installmentPlanCode?: string | null;
    /**
     * Date the interaction occurred
     * @type {string}
     * @memberof PaymentAction
     */
    interactionDate?: string | null;
    /**
     * 
     * @type {PaymentGatewayInteraction}
     * @memberof PaymentAction
     */
    manualGatewayInteraction?: PaymentGatewayInteraction;
    /**
     * 
     * @type {BillingInfo}
     * @memberof PaymentAction
     */
    newBillingInfo?: BillingInfo;
    /**
     * Recaptcha for validation.
     * @type {string}
     * @memberof PaymentAction
     */
    recaptcha?: string | null;
    /**
     * Reference payment id from which to copy the billing info.
     * @type {string}
     * @memberof PaymentAction
     */
    referenceSourcePaymentId?: string | null;
    /**
     * If paying by Paypal Express or some other potential non-gateway payment provider, a return redirect URL must be provided.
     * @type {string}
     * @memberof PaymentAction
     */
    returnUrl?: string | null;
}
/**
 * 
 * @export
 * @interface PaymentActionTarget
 */
export interface PaymentActionTarget {
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
    /**
     * Specifies if the Mozu.CommerceRuntime.Contracts.Payments.PaymentActionTarget.TargetId is a Checkout Id, Order Id, or Return Id.
     * @type {string}
     * @memberof PaymentActionTarget
     */
    targetType?: string | null;
}
/**
 * If the customer is paying by credit card, the card holder's details, such as the name on the card, number, billing 
 * address, and expiration dates.
 * @export
 * @interface PaymentCard
 */
export interface PaymentCard {
    /**
     * Year when the card expires.
     * @type {string}
     * @memberof PaymentCard
     */
    bin?: string | null;
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
     * Card type such as Visa, MasterCard, American Express, or Discover.
     * @type {string}
     * @memberof PaymentCard
     */
    paymentOrCardType?: string | null;
    /**
     * Last four digit of Credit card
     * Only for OMS Only tenant.
     * @type {string}
     * @memberof PaymentCard
     */
    ccLastFour?: string | null;
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
     * Credit card number.
     * @type {string}
     * @memberof PaymentCard
     */
    paymentServiceCardId?: string | null;
}
/**
 * 
 * @export
 * @interface PaymentCardAllOf
 */
export interface PaymentCardAllOf {
    /**
     * Last four digit of Credit card
     * Only for OMS Only tenant.
     * @type {string}
     * @memberof PaymentCardAllOf
     */
    ccLastFour?: string | null;
    /**
     * If true, the card information is stored in the customer's account.
     * @type {boolean}
     * @memberof PaymentCardAllOf
     */
    isCardInfoSaved?: boolean;
    /**
     * If true, the card is tokenized by external provider
     * @type {boolean}
     * @memberof PaymentCardAllOf
     */
    isTokenized?: boolean;
    /**
     * If true, the credit card is charged on a regular interval, such as for a subscription. (Not supported currently.)
     * @type {boolean}
     * @memberof PaymentCardAllOf
     */
    isUsedRecurring?: boolean | null;
    /**
     * Card holder's name as it appears on the card.
     * @type {string}
     * @memberof PaymentCardAllOf
     */
    nameOnCard?: string | null;
    /**
     * Credit card number.
     * @type {string}
     * @memberof PaymentCardAllOf
     */
    paymentServiceCardId?: string | null;
}
/**
 * 
 * @export
 * @interface PaymentCardReference
 */
export interface PaymentCardReference {
    /**
     * Year when the card expires.
     * @type {string}
     * @memberof PaymentCardReference
     */
    bin?: string | null;
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
     * Card type such as Visa, MasterCard, American Express, or Discover.
     * @type {string}
     * @memberof PaymentCardReference
     */
    paymentOrCardType?: string | null;
}
/**
 * A collection of payment transactions.
 * @export
 * @interface PaymentCollection
 */
export interface PaymentCollection {
    /**
     * 
     * @type {Array<Payment>}
     * @memberof PaymentCollection
     */
    items?: Array<Payment> | null;
    /**
     * 
     * @type {number}
     * @memberof PaymentCollection
     */
    totalCount?: number;
}
/**
 * Represents a manually entered payment gateway interaction.
 * @export
 * @interface PaymentGatewayInteraction
 */
export interface PaymentGatewayInteraction {
    /**
     * Not populated by incoming request.
     * @type {string}
     * @memberof PaymentGatewayInteraction
     */
    gatewayAVSCodes?: string | null;
    /**
     * Gateway Transaction Id from PCIaaS.  Not populated by incoming request.
     * @type {string}
     * @memberof PaymentGatewayInteraction
     */
    gatewayAuthCode?: string | null;
    /**
     * Not populated by incoming request.
     * @type {string}
     * @memberof PaymentGatewayInteraction
     */
    gatewayCVV2Codes?: string | null;
    /**
     * Gateway Transaction Id from PCIaaS.  Not populated by incoming request.
     * @type {number}
     * @memberof PaymentGatewayInteraction
     */
    gatewayInteractionId?: number | null;
    /**
     * Not populated by incoming request.
     * @type {string}
     * @memberof PaymentGatewayInteraction
     */
    gatewayResponseCode?: string | null;
    /**
     * Gateway response text. Supplied by PCIaaS.
     * @type {string}
     * @memberof PaymentGatewayInteraction
     */
    gatewayResponseText?: string | null;
    /**
     * Gateway Transaction Id from PCIaaS.  Not populated by incoming request.
     * @type {string}
     * @memberof PaymentGatewayInteraction
     */
    gatewayTransactionId?: string | null;
    /**
     * Indicates the manual interaction is for a refund on an order.
     * @type {boolean}
     * @memberof PaymentGatewayInteraction
     */
    isOrderRefund?: boolean;
}
/**
 * Payment gateway response data
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
 * A single interaction of a potential list of interactions for a transaction. The scope of the transaction is the entire payment
 * interchange. It is created upon authorization and is used for all subsequent interactions performed against the authorize,
 * such as consecutive captures.
 * @export
 * @interface PaymentInteraction
 */
export interface PaymentInteraction {
    /**
     * Amount of funds associated with this interaction.
     * @type {number}
     * @memberof PaymentInteraction
     */
    amount?: number | null;
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof PaymentInteraction
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * Stores pairings of shipment number to shipment total for all captured shipments. This was added for generating TLogs.
     * @type {Array<CapturableShipmentSummary>}
     * @memberof PaymentInteraction
     */
    capturableShipmentsSummary?: Array<CapturableShipmentSummary> | null;
    /**
     * If paying by check, the check number.
     * @type {string}
     * @memberof PaymentInteraction
     */
    checkNumber?: string | null;
    /**
     * ISO currency code for the transaction. Currently, only USD is supported.
     * @type {string}
     * @memberof PaymentInteraction
     */
    currencyCode?: string | null;
    /**
     * Gateway AVS Codes. Supplied by PCIaaS.
     * @type {string}
     * @memberof PaymentInteraction
     */
    gatewayAVSCodes?: string | null;
    /**
     * If required by the payment gateway, the authorization code of the transaction. Supplied by PCIaaS.
     * @type {string}
     * @memberof PaymentInteraction
     */
    gatewayAuthCode?: string | null;
    /**
     * Gateway CVV2 Codes. Supplied by PCIaaS.
     * @type {string}
     * @memberof PaymentInteraction
     */
    gatewayCVV2Codes?: string | null;
    /**
     * Unique identifier of the gateway interaction. Used for credit card transactions, where the
     * payment service creates a GatewayInteractionId for each transaction interaction.
     * @type {number}
     * @memberof PaymentInteraction
     */
    gatewayInteractionId?: number | null;
    /**
     * Gateway response code. Supplied by PCIaaS.
     * @type {string}
     * @memberof PaymentInteraction
     */
    gatewayResponseCode?: string | null;
    /**
     * A List of payment response data required to act on authorization when using external order management systems
     * @type {Array<PaymentGatewayResponseData>}
     * @memberof PaymentInteraction
     */
    gatewayResponseData?: Array<PaymentGatewayResponseData> | null;
    /**
     * Gateway response text. Supplied by PCIaaS.
     * @type {string}
     * @memberof PaymentInteraction
     */
    gatewayResponseText?: string | null;
    /**
     * Unique identifier of the transaction supplied by PCIaaS.
     * @type {string}
     * @memberof PaymentInteraction
     */
    gatewayTransactionId?: string | null;
    /**
     * Unique identifier of this payment transaction interaction.
     * @type {string}
     * @memberof PaymentInteraction
     */
    id?: string | null;
    /**
     * Date the interaction occurred
     * @type {string}
     * @memberof PaymentInteraction
     */
    interactionDate?: string | null;
    /**
     * Types of transaction interactions which can be "Authorization," "Capture," "AuthorizeAndCapture,"
     * "Void," or "Credit," "CheckRequested," or "CheckReceived."
     * @type {string}
     * @memberof PaymentInteraction
     */
    interactionType?: string | null;
    /**
     * If the payment is a manual payment, this is set to true
     * @type {boolean}
     * @memberof PaymentInteraction
     */
    isManual?: boolean;
    /**
     * If true, indicates payment action is still pending and not yet confirmed.
     * @type {boolean}
     * @memberof PaymentInteraction
     */
    isPending?: boolean;
    /**
     * If true, the product is purchased or fulfilled at regular intervals, for example, a monthly billing or a subscription. (Not currently implemented.)
     * @type {boolean}
     * @memberof PaymentInteraction
     */
    isRecurring?: boolean | null;
    /**
     * Note to be entered by merchant/application
     * @type {string}
     * @memberof PaymentInteraction
     */
    note?: string | null;
    /**
     * Unique identifier of the order with which this transaction is associated.
     * @type {string}
     * @memberof PaymentInteraction
     */
    orderId?: string | null;
    /**
     * Status of the payment when the transaction interaction was created
     * @type {string}
     * @memberof PaymentInteraction
     */
    paymentEntryStatus?: string | null;
    /**
     * Unique identifier of the original transaction of which this current interaction is a part.
     * @type {string}
     * @memberof PaymentInteraction
     */
    paymentId?: string | null;
    /**
     * Unique identifier of previous PaymentTransactionInteraction that this PaymentTransactionInteraction is modifying.
     * For instance, when crediting a capture, set the PaymentTransactionInteractionIdReference to the capture PaymentTransactionInteractionID.
     * @type {number}
     * @memberof PaymentInteraction
     */
    paymentTransactionInteractionIdReference?: number | null;
    /**
     * Refund Id, if the interaction is for a stand alone refund.
     * @type {string}
     * @memberof PaymentInteraction
     */
    refundId?: string | null;
    /**
     * Return Id, if the interaction is a Credit for a return-refund.
     * @type {string}
     * @memberof PaymentInteraction
     */
    returnId?: string | null;
    /**
     * Status of the payment transaction interaction which can be either "Success" or "Failure."
     * @type {string}
     * @memberof PaymentInteraction
     */
    status?: string | null;
    /**
     * 
     * @type {PaymentActionTarget}
     * @memberof PaymentInteraction
     */
    target?: PaymentActionTarget;
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
    provider?: string | null;
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
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof Pickup
     */
    auditInfo?: CoreApiContractsAuditInfo;
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
    /**
     * A human-readable identifier for this fulfillment unit.  If not set on create, will be autogenerated as a string of the form
     *     {fulfillmentUnitType} #{next available int}
     * @type {string}
     * @memberof Pickup
     */
    code?: string | null;
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
     * ID of the fulfillment unit.
     * @type {string}
     * @memberof Pickup
     */
    id?: string | null;
    /**
     * List of items in the fulfillment unit
     * @type {Array<CommerceRuntimePickupItem>}
     * @memberof Pickup
     */
    items?: Array<CommerceRuntimePickupItem> | null;
    /**
     * Status of the fulfillment unit
     * See FulfillmentStatusConst
     * @type {string}
     * @memberof Pickup
     */
    status?: string | null;
}
/**
 * 
 * @export
 * @interface PricingAppliedDiscount
 */
export interface PricingAppliedDiscount {
    /**
     * 
     * @type {string}
     * @memberof PricingAppliedDiscount
     */
    couponCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PricingAppliedDiscount
     */
    couponSetId?: number | null;
    /**
     * 
     * @type {PricingDiscount}
     * @memberof PricingAppliedDiscount
     */
    discount?: PricingDiscount;
    /**
     * 
     * @type {number}
     * @memberof PricingAppliedDiscount
     */
    impact?: number;
}
/**
 * 
 * @export
 * @interface PricingAppliedLineItemDiscount
 */
export interface PricingAppliedLineItemDiscount {
    /**
     * 
     * @type {string}
     * @memberof PricingAppliedLineItemDiscount
     */
    couponCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PricingAppliedLineItemDiscount
     */
    couponSetId?: number | null;
    /**
     * 
     * @type {PricingDiscount}
     * @memberof PricingAppliedLineItemDiscount
     */
    discount?: PricingDiscount;
    /**
     * 
     * @type {number}
     * @memberof PricingAppliedLineItemDiscount
     */
    impact?: number;
    /**
     * 
     * @type {number}
     * @memberof PricingAppliedLineItemDiscount
     */
    impactPerUnit?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PricingAppliedLineItemDiscount
     */
    isForced?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PricingAppliedLineItemDiscount
     */
    normalizedImpact?: number;
    /**
     * 
     * @type {number}
     * @memberof PricingAppliedLineItemDiscount
     */
    quantity?: number;
}
/**
 * 
 * @export
 * @interface PricingAppliedLineItemDiscountAllOf
 */
export interface PricingAppliedLineItemDiscountAllOf {
    /**
     * 
     * @type {number}
     * @memberof PricingAppliedLineItemDiscountAllOf
     */
    impactPerUnit?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PricingAppliedLineItemDiscountAllOf
     */
    isForced?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PricingAppliedLineItemDiscountAllOf
     */
    normalizedImpact?: number;
    /**
     * 
     * @type {number}
     * @memberof PricingAppliedLineItemDiscountAllOf
     */
    quantity?: number;
}
/**
 * 
 * @export
 * @interface PricingAppliedLineItemProductDiscount
 */
export interface PricingAppliedLineItemProductDiscount {
    /**
     * 
     * @type {string}
     * @memberof PricingAppliedLineItemProductDiscount
     */
    couponCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PricingAppliedLineItemProductDiscount
     */
    couponSetId?: number | null;
    /**
     * 
     * @type {PricingDiscount}
     * @memberof PricingAppliedLineItemProductDiscount
     */
    discount?: PricingDiscount;
    /**
     * 
     * @type {number}
     * @memberof PricingAppliedLineItemProductDiscount
     */
    impact?: number;
    /**
     * 
     * @type {number}
     * @memberof PricingAppliedLineItemProductDiscount
     */
    impactPerUnit?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PricingAppliedLineItemProductDiscount
     */
    isForced?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PricingAppliedLineItemProductDiscount
     */
    normalizedImpact?: number;
    /**
     * 
     * @type {number}
     * @memberof PricingAppliedLineItemProductDiscount
     */
    quantity?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PricingAppliedLineItemProductDiscount
     */
    appliesToSalePrice?: boolean;
}
/**
 * 
 * @export
 * @interface PricingAppliedLineItemProductDiscountAllOf
 */
export interface PricingAppliedLineItemProductDiscountAllOf {
    /**
     * 
     * @type {boolean}
     * @memberof PricingAppliedLineItemProductDiscountAllOf
     */
    appliesToSalePrice?: boolean;
}
/**
 * 
 * @export
 * @interface PricingAppliedLineItemShippingDiscount
 */
export interface PricingAppliedLineItemShippingDiscount {
    /**
     * 
     * @type {string}
     * @memberof PricingAppliedLineItemShippingDiscount
     */
    couponCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PricingAppliedLineItemShippingDiscount
     */
    couponSetId?: number | null;
    /**
     * 
     * @type {PricingDiscount}
     * @memberof PricingAppliedLineItemShippingDiscount
     */
    discount?: PricingDiscount;
    /**
     * 
     * @type {number}
     * @memberof PricingAppliedLineItemShippingDiscount
     */
    impact?: number;
    /**
     * 
     * @type {number}
     * @memberof PricingAppliedLineItemShippingDiscount
     */
    impactPerUnit?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PricingAppliedLineItemShippingDiscount
     */
    isForced?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PricingAppliedLineItemShippingDiscount
     */
    normalizedImpact?: number;
    /**
     * 
     * @type {number}
     * @memberof PricingAppliedLineItemShippingDiscount
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof PricingAppliedLineItemShippingDiscount
     */
    shippingMethodCode?: string | null;
}
/**
 * 
 * @export
 * @interface PricingAppliedLineItemShippingDiscountAllOf
 */
export interface PricingAppliedLineItemShippingDiscountAllOf {
    /**
     * 
     * @type {string}
     * @memberof PricingAppliedLineItemShippingDiscountAllOf
     */
    shippingMethodCode?: string | null;
}
/**
 * 
 * @export
 * @interface PricingAppliedOrderShippingDiscount
 */
export interface PricingAppliedOrderShippingDiscount {
    /**
     * 
     * @type {string}
     * @memberof PricingAppliedOrderShippingDiscount
     */
    couponCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PricingAppliedOrderShippingDiscount
     */
    couponSetId?: number | null;
    /**
     * 
     * @type {PricingDiscount}
     * @memberof PricingAppliedOrderShippingDiscount
     */
    discount?: PricingDiscount;
    /**
     * 
     * @type {number}
     * @memberof PricingAppliedOrderShippingDiscount
     */
    impact?: number;
    /**
     * 
     * @type {string}
     * @memberof PricingAppliedOrderShippingDiscount
     */
    shippingMethodCode?: string | null;
}
/**
 * 
 * @export
 * @interface PricingAppliedProductDiscount
 */
export interface PricingAppliedProductDiscount {
    /**
     * 
     * @type {string}
     * @memberof PricingAppliedProductDiscount
     */
    couponCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PricingAppliedProductDiscount
     */
    couponSetId?: number | null;
    /**
     * 
     * @type {PricingDiscount}
     * @memberof PricingAppliedProductDiscount
     */
    discount?: PricingDiscount;
    /**
     * 
     * @type {number}
     * @memberof PricingAppliedProductDiscount
     */
    impact?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PricingAppliedProductDiscount
     */
    appliesToSalePrice?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PricingAppliedProductDiscount
     */
    normalizedImpact?: number;
}
/**
 * 
 * @export
 * @interface PricingAppliedProductDiscountAllOf
 */
export interface PricingAppliedProductDiscountAllOf {
    /**
     * 
     * @type {boolean}
     * @memberof PricingAppliedProductDiscountAllOf
     */
    appliesToSalePrice?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PricingAppliedProductDiscountAllOf
     */
    normalizedImpact?: number;
}
/**
 * 
 * @export
 * @interface PricingDiscount
 */
export interface PricingDiscount {
    /**
     * 
     * @type {number}
     * @memberof PricingDiscount
     */
    amount?: number;
    /**
     * 
     * @type {string}
     * @memberof PricingDiscount
     */
    amountType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PricingDiscount
     */
    code?: string | null;
    /**
     * 
     * @type {PricingDiscountCondition}
     * @memberof PricingDiscount
     */
    condition?: PricingDiscountCondition;
    /**
     * 
     * @type {number}
     * @memberof PricingDiscount
     */
    discountId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PricingDiscount
     */
    doesNotApplyToMultiShipToOrders?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof PricingDiscount
     */
    doesNotApplyToProductsWithSalePrice?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PricingDiscount
     * @deprecated
     */
    expirationDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PricingDiscount
     */
    friendlyDescription?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof PricingDiscount
     */
    includedPriceLists?: Array<string> | null;
    /**
     * 
     * @type {boolean}
     * @memberof PricingDiscount
     */
    isPublic?: boolean | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof PricingDiscount
     */
    labels?: Array<string> | null;
    /**
     * 
     * @type {number}
     * @memberof PricingDiscount
     */
    maxDiscountValuePerRedemption?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PricingDiscount
     */
    maxRedemptions?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PricingDiscount
     */
    maximumDiscountValuePerOrder?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PricingDiscount
     */
    maximumRedemptionsPerOrder?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PricingDiscount
     */
    maximumUsesPerUser?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PricingDiscount
     */
    name?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PricingDiscount
     */
    redemptions?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PricingDiscount
     */
    requiresAuthenticatedUser?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PricingDiscount
     */
    scope?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PricingDiscount
     */
    stackingLayer?: number;
    /**
     * 
     * @type {PricingDiscountTarget}
     * @memberof PricingDiscount
     */
    target?: PricingDiscountTarget;
    /**
     * 
     * @type {string}
     * @memberof PricingDiscount
     */
    type?: string | null;
}
/**
 * 
 * @export
 * @interface PricingDiscountCondition
 */
export interface PricingDiscountCondition {
    /**
     * 
     * @type {string}
     * @memberof PricingDiscountCondition
     */
    couponCode?: string | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof PricingDiscountCondition
     */
    customerSegmentIds?: Array<number> | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof PricingDiscountCondition
     */
    excludedCategoryIds?: Array<number> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof PricingDiscountCondition
     */
    excludedProductCodes?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof PricingDiscountCondition
     */
    expirationDate?: string | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof PricingDiscountCondition
     */
    includedCategoryIds?: Array<number> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof PricingDiscountCondition
     */
    includedProductCodes?: Array<string> | null;
    /**
     * 
     * @type {number}
     * @memberof PricingDiscountCondition
     */
    maximumOrderAmount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PricingDiscountCondition
     */
    minDistinctProductsRequired?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PricingDiscountCondition
     */
    minimumCategorySubtotalBeforeDiscounts?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PricingDiscountCondition
     */
    minimumLifetimeValueAmount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PricingDiscountCondition
     */
    minimumOrderAmount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PricingDiscountCondition
     */
    minimumQuantityProductsRequiredInCategories?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PricingDiscountCondition
     */
    minimumQuantityRequiredProducts?: number | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof PricingDiscountCondition
     */
    paymentWorkflows?: Array<string> | null;
    /**
     * 
     * @type {boolean}
     * @memberof PricingDiscountCondition
     */
    requiresCoupon?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PricingDiscountCondition
     */
    startDate?: string | null;
}
/**
 * 
 * @export
 * @interface PricingDiscountTarget
 */
export interface PricingDiscountTarget {
    /**
     * 
     * @type {string}
     * @memberof PricingDiscountTarget
     */
    excludedCategoriesOperator?: string | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof PricingDiscountTarget
     */
    excludedCategoryIds?: Array<number> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof PricingDiscountTarget
     */
    excludedProductCodes?: Array<string> | null;
    /**
     * 
     * @type {boolean}
     * @memberof PricingDiscountTarget
     */
    includeAllProducts?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PricingDiscountTarget
     */
    includedCategoriesOperator?: string | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof PricingDiscountTarget
     */
    includedCategoryIds?: Array<number> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof PricingDiscountTarget
     */
    includedProductCodes?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof PricingDiscountTarget
     */
    shippingMethods?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof PricingDiscountTarget
     */
    shippingZones?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof PricingDiscountTarget
     */
    type?: string | null;
}
/**
 * 
 * @export
 * @interface PricingProductAttribute
 */
export interface PricingProductAttribute {
    /**
     * 
     * @type {string}
     * @memberof PricingProductAttribute
     */
    dataType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PricingProductAttribute
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PricingProductAttribute
     */
    inputType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PricingProductAttribute
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PricingProductAttribute
     */
    valueType?: string | null;
}
/**
 * 
 * @export
 * @interface PricingProductProperty
 */
export interface PricingProductProperty {
    /**
     * 
     * @type {PricingProductAttribute}
     * @memberof PricingProductProperty
     */
    attributeDetail?: PricingProductAttribute;
    /**
     * 
     * @type {string}
     * @memberof PricingProductProperty
     */
    attributeFQN?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof PricingProductProperty
     */
    isHidden?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof PricingProductProperty
     */
    isMultiValue?: boolean | null;
    /**
     * 
     * @type {Array<PricingProductPropertyValue>}
     * @memberof PricingProductProperty
     */
    values?: Array<PricingProductPropertyValue> | null;
}
/**
 * 
 * @export
 * @interface PricingProductPropertyValue
 */
export interface PricingProductPropertyValue {
    /**
     * 
     * @type {string}
     * @memberof PricingProductPropertyValue
     */
    stringValue?: string | null;
    /**
     * 
     * @type {any}
     * @memberof PricingProductPropertyValue
     */
    value?: any | null;
}
/**
 * 
 * @export
 * @interface PricingTaxAttribute
 */
export interface PricingTaxAttribute {
    /**
     * 
     * @type {number}
     * @memberof PricingTaxAttribute
     */
    attributeDefinitionId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PricingTaxAttribute
     */
    fullyQualifiedName?: string | null;
    /**
     * 
     * @type {Array<any>}
     * @memberof PricingTaxAttribute
     */
    values?: Array<any> | null;
}
/**
 * 
 * @export
 * @interface PricingTaxContext
 */
export interface PricingTaxContext {
    /**
     * 
     * @type {string}
     * @memberof PricingTaxContext
     */
    customerId?: string | null;
    /**
     * 
     * @type {Address}
     * @memberof PricingTaxContext
     */
    destinationAddress?: Address;
    /**
     * 
     * @type {Address}
     * @memberof PricingTaxContext
     */
    originAddress?: Address;
    /**
     * 
     * @type {string}
     * @memberof PricingTaxContext
     */
    taxContextId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PricingTaxContext
     */
    taxExemptId?: string | null;
}
/**
 * 
 * @export
 * @interface PricingTaxableLineItem
 */
export interface PricingTaxableLineItem {
    /**
     * 
     * @type {object}
     * @memberof PricingTaxableLineItem
     */
    data?: object | null;
    /**
     * 
     * @type {Address}
     * @memberof PricingTaxableLineItem
     */
    destinationAddress?: Address;
    /**
     * 
     * @type {number}
     * @memberof PricingTaxableLineItem
     */
    discountTotal?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PricingTaxableLineItem
     */
    discountedTotal?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PricingTaxableLineItem
     */
    feeTotal?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PricingTaxableLineItem
     */
    handlingAmount?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PricingTaxableLineItem
     */
    id?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof PricingTaxableLineItem
     */
    isTaxable?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof PricingTaxableLineItem
     */
    lineItemPrice?: number;
    /**
     * 
     * @type {Address}
     * @memberof PricingTaxableLineItem
     */
    originAddress?: Address;
    /**
     * 
     * @type {string}
     * @memberof PricingTaxableLineItem
     */
    productCode?: string | null;
    /**
     * 
     * @type {PricingAppliedLineItemProductDiscount}
     * @memberof PricingTaxableLineItem
     */
    productDiscount?: PricingAppliedLineItemProductDiscount;
    /**
     * 
     * @type {Array<PricingAppliedLineItemProductDiscount>}
     * @memberof PricingTaxableLineItem
     */
    productDiscounts?: Array<PricingAppliedLineItemProductDiscount> | null;
    /**
     * 
     * @type {string}
     * @memberof PricingTaxableLineItem
     */
    productName?: string | null;
    /**
     * 
     * @type {Array<PricingProductProperty>}
     * @memberof PricingTaxableLineItem
     */
    productProperties?: Array<PricingProductProperty> | null;
    /**
     * 
     * @type {number}
     * @memberof PricingTaxableLineItem
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof PricingTaxableLineItem
     */
    reason?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PricingTaxableLineItem
     */
    shippingAmount?: number;
    /**
     * 
     * @type {PricingAppliedLineItemShippingDiscount}
     * @memberof PricingTaxableLineItem
     */
    shippingDiscount?: PricingAppliedLineItemShippingDiscount;
    /**
     * 
     * @type {Array<PricingAppliedLineItemShippingDiscount>}
     * @memberof PricingTaxableLineItem
     */
    shippingDiscounts?: Array<PricingAppliedLineItemShippingDiscount> | null;
    /**
     * 
     * @type {string}
     * @memberof PricingTaxableLineItem
     */
    variantProductCode?: string | null;
}
/**
 * 
 * @export
 * @interface PricingTaxableOrder
 */
export interface PricingTaxableOrder {
    /**
     * 
     * @type {Array<PricingTaxAttribute>}
     * @memberof PricingTaxableOrder
     */
    attributes?: Array<PricingTaxAttribute> | null;
    /**
     * 
     * @type {string}
     * @memberof PricingTaxableOrder
     */
    currencyCode?: string | null;
    /**
     * 
     * @type {object}
     * @memberof PricingTaxableOrder
     */
    data?: object | null;
    /**
     * 
     * @type {PricingAppliedDiscount}
     * @memberof PricingTaxableOrder
     */
    handlingDiscount?: PricingAppliedDiscount;
    /**
     * 
     * @type {Array<PricingAppliedDiscount>}
     * @memberof PricingTaxableOrder
     */
    handlingDiscounts?: Array<PricingAppliedDiscount> | null;
    /**
     * 
     * @type {number}
     * @memberof PricingTaxableOrder
     */
    handlingFee?: number;
    /**
     * 
     * @type {Array<PricingTaxableLineItem>}
     * @memberof PricingTaxableOrder
     */
    lineItems?: Array<PricingTaxableLineItem> | null;
    /**
     * 
     * @type {string}
     * @memberof PricingTaxableOrder
     */
    orderDate?: string;
    /**
     * 
     * @type {PricingAppliedDiscount}
     * @memberof PricingTaxableOrder
     */
    orderDiscount?: PricingAppliedDiscount;
    /**
     * 
     * @type {Array<PricingAppliedDiscount>}
     * @memberof PricingTaxableOrder
     */
    orderDiscounts?: Array<PricingAppliedDiscount> | null;
    /**
     * 
     * @type {string}
     * @memberof PricingTaxableOrder
     */
    orderId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PricingTaxableOrder
     */
    orderNumber?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PricingTaxableOrder
     */
    originalDocumentCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PricingTaxableOrder
     */
    originalOrderDate?: string;
    /**
     * 
     * @type {number}
     * @memberof PricingTaxableOrder
     */
    shippingAmount?: number;
    /**
     * 
     * @type {PricingAppliedOrderShippingDiscount}
     * @memberof PricingTaxableOrder
     */
    shippingDiscount?: PricingAppliedOrderShippingDiscount;
    /**
     * 
     * @type {Array<PricingAppliedOrderShippingDiscount>}
     * @memberof PricingTaxableOrder
     */
    shippingDiscounts?: Array<PricingAppliedOrderShippingDiscount> | null;
    /**
     * 
     * @type {string}
     * @memberof PricingTaxableOrder
     */
    shippingMethodCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PricingTaxableOrder
     */
    shippingMethodName?: string | null;
    /**
     * 
     * @type {PricingTaxContext}
     * @memberof PricingTaxableOrder
     */
    taxContext?: PricingTaxContext;
    /**
     * 
     * @type {string}
     * @memberof PricingTaxableOrder
     */
    taxRequestType?: string | null;
}
/**
 * 
 * @export
 * @interface ProcessReturnRuleItem
 */
export interface ProcessReturnRuleItem {
    /**
     * 
     * @type {number}
     * @memberof ProcessReturnRuleItem
     */
    quantityToReturn?: number;
    /**
     * 
     * @type {number}
     * @memberof ProcessReturnRuleItem
     */
    shipmentItemId?: number;
    /**
     * 
     * @type {number}
     * @memberof ProcessReturnRuleItem
     */
    shipmentNumber?: number;
}
/**
 * 
 * @export
 * @interface ProcessReturnRuleItemCollection
 */
export interface ProcessReturnRuleItemCollection {
    /**
     * 
     * @type {Array<ProcessReturnRuleItem>}
     * @memberof ProcessReturnRuleItemCollection
     */
    items?: Array<ProcessReturnRuleItem> | null;
    /**
     * 
     * @type {number}
     * @memberof ProcessReturnRuleItemCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface ProcessReturnRuleItemResponse
 */
export interface ProcessReturnRuleItemResponse {
    /**
     * 
     * @type {AppliedReturnRuleInfo}
     * @memberof ProcessReturnRuleItemResponse
     */
    appliedReturnRuleInfo?: AppliedReturnRuleInfo;
    /**
     * 
     * @type {number}
     * @memberof ProcessReturnRuleItemResponse
     */
    shipmentItemId?: number;
    /**
     * 
     * @type {number}
     * @memberof ProcessReturnRuleItemResponse
     */
    shipmentNumber?: number;
}
/**
 * 
 * @export
 * @interface ProductBase
 */
export interface ProductBase {
    /**
     * Allocation ID associated with this product on this order.
     * @type {string}
     * @memberof ProductBase
     */
    allocationExpiration?: string | null;
    /**
     * Allocation ID associated with this product on this order.
     * @type {number}
     * @memberof ProductBase
     */
    allocationId?: number | null;
    /**
     * Short description of the product in the language specified by LocaleCode.
     * @type {string}
     * @memberof ProductBase
     */
    description?: string | null;
    /**
     * Fulfillment status of the product.
     * @type {string}
     * @memberof ProductBase
     */
    fulfillmentStatus?: string | null;
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
     * @type {CommerceRuntimePackageMeasurements}
     * @memberof ProductBase
     */
    measurements?: CommerceRuntimePackageMeasurements;
    /**
     * Name of the product, this is the current value of the product's name in the language specified by LocaleCode.
     * @type {string}
     * @memberof ProductBase
     */
    name?: string | null;
    /**
     * Merchant-created code that uniquely identifies the product.
     * @type {string}
     * @memberof ProductBase
     */
    productCode?: string | null;
    /**
     * Reservation ID associated with this product in the bundle.
     * @type {number}
     * @memberof ProductBase
     */
    productReservationId?: number | null;
    /**
     * 
     * @type {ProductStock}
     * @memberof ProductBase
     */
    stock?: ProductStock;
}
/**
 * 
 * @export
 * @interface ProductProperty
 */
export interface ProductProperty {
    /**
     * 
     * @type {string}
     * @memberof ProductProperty
     */
    attributeFQN?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductProperty
     */
    dataType?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ProductProperty
     */
    isMultiValue?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProductProperty
     */
    name?: string | null;
    /**
     * 
     * @type {Array<CommerceRuntimeProductPropertyValue>}
     * @memberof ProductProperty
     */
    values?: Array<CommerceRuntimeProductPropertyValue> | null;
}
/**
 * 
 * @export
 * @interface ProductStock
 */
export interface ProductStock {
    /**
     * 
     * @type {number}
     * @memberof ProductStock
     */
    aggregateInventory?: number | null;
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
    readonly availableFutureInventories?: number;
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
    isOnBackOrder?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ProductStock
     */
    isSubstitutable?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof ProductStock
     */
    manageStock?: boolean;
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
    readonly totalAvailableStock?: number;
}
/**
 * Purchase order payment
 * @export
 * @interface PurchaseOrderPayment
 */
export interface PurchaseOrderPayment {
    /**
     * Memo/custom fields
     * @type {Array<CommerceRuntimePurchaseOrderCustomField>}
     * @memberof PurchaseOrderPayment
     */
    customFields?: Array<CommerceRuntimePurchaseOrderCustomField> | null;
    /**
     * 
     * @type {CommerceRuntimePurchaseOrderPaymentTerm}
     * @memberof PurchaseOrderPayment
     */
    paymentTerm?: CommerceRuntimePurchaseOrderPaymentTerm;
    /**
     * Purchase order number
     * @type {string}
     * @memberof PurchaseOrderPayment
     */
    purchaseOrderNumber?: string | null;
}
/**
 * 
 * @export
 * @interface QueuedOrder
 */
export interface QueuedOrder {
    /**
     * 
     * @type {string}
     * @memberof QueuedOrder
     */
    createDate?: string;
    /**
     * 
     * @type {string}
     * @memberof QueuedOrder
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof QueuedOrder
     */
    lastErrorMessage?: string | null;
    /**
     * 
     * @type {Order}
     * @memberof QueuedOrder
     */
    order?: Order;
    /**
     * 
     * @type {string}
     * @memberof QueuedOrder
     */
    processingStatus?: string | null;
    /**
     * 
     * @type {string}
     * @memberof QueuedOrder
     */
    updateDate?: string;
}
/**
 * 
 * @export
 * @interface QueuedOrderCollection
 */
export interface QueuedOrderCollection {
    /**
     * 
     * @type {Array<QueuedOrder>}
     * @memberof QueuedOrderCollection
     */
    items?: Array<QueuedOrder> | null;
    /**
     * 
     * @type {number}
     * @memberof QueuedOrderCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof QueuedOrderCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof QueuedOrderCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof QueuedOrderCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface Quote
 */
export interface Quote {
    /**
     * 
     * @type {Adjustment}
     * @memberof Quote
     */
    adjustment?: Adjustment;
    /**
     * User modified Audit History
     * @type {Array<AuditRecord>}
     * @memberof Quote
     */
    auditHistory?: Array<AuditRecord> | null;
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof Quote
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * Unique identifier of the channel for this item.
     * @type {string}
     * @memberof Quote
     */
    channelCode?: string | null;
    /**
     * Comments on a quote
     * @type {Array<QuoteComment>}
     * @memberof Quote
     */
    comments?: Array<QuoteComment> | null;
    /**
     * Coupon codes associated with this Quote.
     * @type {Array<string>}
     * @memberof Quote
     */
    couponCodes?: Array<string> | null;
    /**
     * ISO Currency Code.
     * @type {string}
     * @memberof Quote
     */
    currencyCode?: string | null;
    /**
     * Unique identifier of the customer account.
     * @type {number}
     * @memberof Quote
     */
    customerAccountId?: number | null;
    /**
     * Determines the interaction type that a customer will use to create this object.
     * Valid values are: Website, Store, Call, Unknown
     * @type {string}
     * @memberof Quote
     */
    customerInteractionType?: string | null;
    /**
     * The customers tax ID. If Customer Account ID exists in the system, will set this.
     * @type {string}
     * @memberof Quote
     */
    readonly customerTaxId?: string | null;
    /**
     * Custom data for a given vendor set within the commerce process.
     * @type {object}
     * @memberof Quote
     */
    data?: object | null;
    /**
     * 
     * @type {number}
     * @memberof Quote
     */
    dutyAmount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Quote
     */
    dutyTotal?: number;
    /**
     * Email address for checkout
     * @type {string}
     * @memberof Quote
     */
    email?: string | null;
    /**
     * When the quote will no longer be active. That is, the quote is considered abandoned. 
     * Date in UTC Date/Time.
     * @type {string}
     * @memberof Quote
     */
    expirationDate?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Quote
     */
    feeTotal?: number;
    /**
     * 
     * @type {FulfillmentInfo}
     * @memberof Quote
     */
    fulfillmentInfo?: FulfillmentInfo;
    /**
     * 
     * @type {Adjustment}
     * @memberof Quote
     */
    handlingAdjustment?: Adjustment;
    /**
     * 
     * @type {number}
     * @memberof Quote
     */
    handlingAmount?: number | null;
    /**
     * 
     * @type {Array<CommerceRuntimeAppliedDiscount>}
     * @memberof Quote
     */
    handlingDiscounts?: Array<CommerceRuntimeAppliedDiscount> | null;
    /**
     * 
     * @type {number}
     * @memberof Quote
     */
    handlingSubTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof Quote
     */
    handlingTax?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Quote
     */
    handlingTaxTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof Quote
     */
    handlingTotal?: number;
    /**
     * Does this quote have a draft
     * @type {boolean}
     * @memberof Quote
     */
    hasDraft?: boolean;
    /**
     * Unique identifier.
     * @type {string}
     * @memberof Quote
     */
    id?: string | null;
    /**
     * A list of invalid coupons that were attempted on the quote
     * @type {Array<InvalidCoupon>}
     * @memberof Quote
     */
    invalidCoupons?: Array<InvalidCoupon> | null;
    /**
     * IP address of the user placing the order. (User or customer?)
     * @type {string}
     * @memberof Quote
     */
    ipAddress?: string | null;
    /**
     * Is this quote a draft
     * @type {boolean}
     * @memberof Quote
     */
    isDraft?: boolean;
    /**
     * Unique identifier of the customer account.
     * @type {boolean}
     * @memberof Quote
     */
    readonly isTaxExempt?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof Quote
     */
    itemLevelHandlingDiscountTotal?: number;
    /**
     * The total value of item-level product discounts.
     * @type {number}
     * @memberof Quote
     */
    itemLevelProductDiscountTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof Quote
     */
    itemLevelShippingDiscountTotal?: number;
    /**
     * Total tax on products.
     * @type {number}
     * @memberof Quote
     */
    itemTaxTotal?: number;
    /**
     * The total product cost, accounting for discounts and tax.
     * @type {number}
     * @memberof Quote
     */
    itemTotal?: number;
    /**
     * List of items in the Quote.
     * @type {Array<OrderItem>}
     * @memberof Quote
     */
    items?: Array<OrderItem> | null;
    /**
     * Identifies the location at which the order was placed if the order was placed externally.
     * @type {string}
     * @memberof Quote
     */
    locationCode?: string | null;
    /**
     * Name of the quote
     * @type {string}
     * @memberof Quote
     */
    name?: string | null;
    /**
     * Auto generated number that is assigned to the quote when creation.
     * @type {number}
     * @memberof Quote
     */
    number?: number | null;
    /**
     * 
     * @type {Array<CommerceRuntimeAppliedDiscount>}
     * @memberof Quote
     */
    orderDiscounts?: Array<CommerceRuntimeAppliedDiscount> | null;
    /**
     * 
     * @type {number}
     * @memberof Quote
     */
    orderLevelHandlingDiscountTotal?: number;
    /**
     * The total value of order-level (group-level) product discounts.
     * @type {number}
     * @memberof Quote
     */
    orderLevelProductDiscountTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof Quote
     */
    orderLevelShippingDiscountTotal?: number;
    /**
     * Pricelist code for the checkout
     * @type {string}
     * @memberof Quote
     */
    priceListCode?: string | null;
    /**
     * 
     * @type {Adjustment}
     * @memberof Quote
     */
    shippingAdjustment?: Adjustment;
    /**
     * 
     * @type {number}
     * @memberof Quote
     */
    shippingAmount?: number;
    /**
     * 
     * @type {Array<ShippingDiscount>}
     * @memberof Quote
     */
    shippingDiscounts?: Array<ShippingDiscount> | null;
    /**
     * 
     * @type {number}
     * @memberof Quote
     */
    shippingSubTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof Quote
     */
    shippingTax?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Quote
     */
    shippingTaxTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof Quote
     */
    shippingTotal?: number;
    /**
     * Unique identifier of the Site.
     * @type {number}
     * @memberof Quote
     */
    siteId?: number;
    /**
     * Source device of the user placing the order. (User or customer?)
     * @type {string}
     * @memberof Quote
     */
    sourceDevice?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Quote
     */
    status?: string | null;
    /**
     * Subtotal before any coupon codes, taxes, fees, etc.
     * @type {number}
     * @memberof Quote
     */
    subTotal?: number;
    /**
     * When the customer placed (submitted) the Quote.
     * @type {string}
     * @memberof Quote
     */
    submittedDate?: string | null;
    /**
     * Storage for any additional/custom tax data.
     * @type {object}
     * @memberof Quote
     */
    taxData?: object | null;
    /**
     * Unique identifier of the Tenant.
     * @type {number}
     * @memberof Quote
     */
    tenantId?: number;
    /**
     * Final total
     * @type {number}
     * @memberof Quote
     */
    total?: number;
    /**
     * 
     * @type {string}
     * @memberof Quote
     */
    userId?: string | null;
    /**
     * Identifies the Visit ID that was current when the order was placed or when the cart was last updated.
     * @type {string}
     * @memberof Quote
     */
    visitId?: string | null;
    /**
     * Identifies the web session used to place the order or last update the cart.
     * @type {string}
     * @memberof Quote
     */
    webSessionId?: string | null;
}
/**
 * 
 * @export
 * @interface QuoteAdjustment
 */
export interface QuoteAdjustment {
    /**
     * 
     * @type {number}
     * @memberof QuoteAdjustment
     */
    adjustment?: number | null;
    /**
     * 
     * @type {number}
     * @memberof QuoteAdjustment
     */
    handlingAdjustment?: number | null;
    /**
     * 
     * @type {number}
     * @memberof QuoteAdjustment
     */
    shippingAdjustment?: number | null;
}
/**
 * 
 * @export
 * @interface QuoteCollection
 */
export interface QuoteCollection {
    /**
     * 
     * @type {Array<Quote>}
     * @memberof QuoteCollection
     */
    items?: Array<Quote> | null;
    /**
     * 
     * @type {number}
     * @memberof QuoteCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof QuoteCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof QuoteCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof QuoteCollection
     */
    totalCount?: number;
}
/**
 * Quote Comments submitted by B2B buyer/seller.
 * @export
 * @interface QuoteComment
 */
export interface QuoteComment {
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof QuoteComment
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * Unique identifier of the comment. System-supplied and read-only.
     * @type {string}
     * @memberof QuoteComment
     */
    id?: string | null;
    /**
     * Text of the comment.
     * @type {string}
     * @memberof QuoteComment
     */
    text?: string | null;
}
/**
 * 
 * @export
 * @interface QuoteEmailMessage
 */
export interface QuoteEmailMessage {
    /**
     * 
     * @type {Adjustment}
     * @memberof QuoteEmailMessage
     */
    adjustment?: Adjustment;
    /**
     * User modified Audit History
     * @type {Array<AuditRecord>}
     * @memberof QuoteEmailMessage
     */
    auditHistory?: Array<AuditRecord> | null;
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof QuoteEmailMessage
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * Unique identifier of the channel for this item.
     * @type {string}
     * @memberof QuoteEmailMessage
     */
    channelCode?: string | null;
    /**
     * Comments on a quote
     * @type {Array<QuoteComment>}
     * @memberof QuoteEmailMessage
     */
    comments?: Array<QuoteComment> | null;
    /**
     * Coupon codes associated with this Quote.
     * @type {Array<string>}
     * @memberof QuoteEmailMessage
     */
    couponCodes?: Array<string> | null;
    /**
     * ISO Currency Code.
     * @type {string}
     * @memberof QuoteEmailMessage
     */
    currencyCode?: string | null;
    /**
     * Unique identifier of the customer account.
     * @type {number}
     * @memberof QuoteEmailMessage
     */
    customerAccountId?: number | null;
    /**
     * Determines the interaction type that a customer will use to create this object.
     * Valid values are: Website, Store, Call, Unknown
     * @type {string}
     * @memberof QuoteEmailMessage
     */
    customerInteractionType?: string | null;
    /**
     * The customers tax ID. If Customer Account ID exists in the system, will set this.
     * @type {string}
     * @memberof QuoteEmailMessage
     */
    readonly customerTaxId?: string | null;
    /**
     * Custom data for a given vendor set within the commerce process.
     * @type {object}
     * @memberof QuoteEmailMessage
     */
    data?: object | null;
    /**
     * 
     * @type {number}
     * @memberof QuoteEmailMessage
     */
    dutyAmount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof QuoteEmailMessage
     */
    dutyTotal?: number;
    /**
     * Email address for checkout
     * @type {string}
     * @memberof QuoteEmailMessage
     */
    email?: string | null;
    /**
     * When the quote will no longer be active. That is, the quote is considered abandoned. 
     * Date in UTC Date/Time.
     * @type {string}
     * @memberof QuoteEmailMessage
     */
    expirationDate?: string | null;
    /**
     * 
     * @type {number}
     * @memberof QuoteEmailMessage
     */
    feeTotal?: number;
    /**
     * 
     * @type {FulfillmentInfo}
     * @memberof QuoteEmailMessage
     */
    fulfillmentInfo?: FulfillmentInfo;
    /**
     * 
     * @type {Adjustment}
     * @memberof QuoteEmailMessage
     */
    handlingAdjustment?: Adjustment;
    /**
     * 
     * @type {number}
     * @memberof QuoteEmailMessage
     */
    handlingAmount?: number | null;
    /**
     * 
     * @type {Array<CommerceRuntimeAppliedDiscount>}
     * @memberof QuoteEmailMessage
     */
    handlingDiscounts?: Array<CommerceRuntimeAppliedDiscount> | null;
    /**
     * 
     * @type {number}
     * @memberof QuoteEmailMessage
     */
    handlingSubTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof QuoteEmailMessage
     */
    handlingTax?: number | null;
    /**
     * 
     * @type {number}
     * @memberof QuoteEmailMessage
     */
    handlingTaxTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof QuoteEmailMessage
     */
    handlingTotal?: number;
    /**
     * Does this quote have a draft
     * @type {boolean}
     * @memberof QuoteEmailMessage
     */
    hasDraft?: boolean;
    /**
     * Unique identifier.
     * @type {string}
     * @memberof QuoteEmailMessage
     */
    id?: string | null;
    /**
     * A list of invalid coupons that were attempted on the quote
     * @type {Array<InvalidCoupon>}
     * @memberof QuoteEmailMessage
     */
    invalidCoupons?: Array<InvalidCoupon> | null;
    /**
     * IP address of the user placing the order. (User or customer?)
     * @type {string}
     * @memberof QuoteEmailMessage
     */
    ipAddress?: string | null;
    /**
     * Is this quote a draft
     * @type {boolean}
     * @memberof QuoteEmailMessage
     */
    isDraft?: boolean;
    /**
     * Unique identifier of the customer account.
     * @type {boolean}
     * @memberof QuoteEmailMessage
     */
    readonly isTaxExempt?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof QuoteEmailMessage
     */
    itemLevelHandlingDiscountTotal?: number;
    /**
     * The total value of item-level product discounts.
     * @type {number}
     * @memberof QuoteEmailMessage
     */
    itemLevelProductDiscountTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof QuoteEmailMessage
     */
    itemLevelShippingDiscountTotal?: number;
    /**
     * Total tax on products.
     * @type {number}
     * @memberof QuoteEmailMessage
     */
    itemTaxTotal?: number;
    /**
     * The total product cost, accounting for discounts and tax.
     * @type {number}
     * @memberof QuoteEmailMessage
     */
    itemTotal?: number;
    /**
     * List of items in the Quote.
     * @type {Array<OrderItem>}
     * @memberof QuoteEmailMessage
     */
    items?: Array<OrderItem> | null;
    /**
     * Identifies the location at which the order was placed if the order was placed externally.
     * @type {string}
     * @memberof QuoteEmailMessage
     */
    locationCode?: string | null;
    /**
     * Name of the quote
     * @type {string}
     * @memberof QuoteEmailMessage
     */
    name?: string | null;
    /**
     * Auto generated number that is assigned to the quote when creation.
     * @type {number}
     * @memberof QuoteEmailMessage
     */
    number?: number | null;
    /**
     * 
     * @type {Array<CommerceRuntimeAppliedDiscount>}
     * @memberof QuoteEmailMessage
     */
    orderDiscounts?: Array<CommerceRuntimeAppliedDiscount> | null;
    /**
     * 
     * @type {number}
     * @memberof QuoteEmailMessage
     */
    orderLevelHandlingDiscountTotal?: number;
    /**
     * The total value of order-level (group-level) product discounts.
     * @type {number}
     * @memberof QuoteEmailMessage
     */
    orderLevelProductDiscountTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof QuoteEmailMessage
     */
    orderLevelShippingDiscountTotal?: number;
    /**
     * Pricelist code for the checkout
     * @type {string}
     * @memberof QuoteEmailMessage
     */
    priceListCode?: string | null;
    /**
     * 
     * @type {Adjustment}
     * @memberof QuoteEmailMessage
     */
    shippingAdjustment?: Adjustment;
    /**
     * 
     * @type {number}
     * @memberof QuoteEmailMessage
     */
    shippingAmount?: number;
    /**
     * 
     * @type {Array<ShippingDiscount>}
     * @memberof QuoteEmailMessage
     */
    shippingDiscounts?: Array<ShippingDiscount> | null;
    /**
     * 
     * @type {number}
     * @memberof QuoteEmailMessage
     */
    shippingSubTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof QuoteEmailMessage
     */
    shippingTax?: number | null;
    /**
     * 
     * @type {number}
     * @memberof QuoteEmailMessage
     */
    shippingTaxTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof QuoteEmailMessage
     */
    shippingTotal?: number;
    /**
     * Unique identifier of the Site.
     * @type {number}
     * @memberof QuoteEmailMessage
     */
    siteId?: number;
    /**
     * Source device of the user placing the order. (User or customer?)
     * @type {string}
     * @memberof QuoteEmailMessage
     */
    sourceDevice?: string | null;
    /**
     * 
     * @type {string}
     * @memberof QuoteEmailMessage
     */
    status?: string | null;
    /**
     * Subtotal before any coupon codes, taxes, fees, etc.
     * @type {number}
     * @memberof QuoteEmailMessage
     */
    subTotal?: number;
    /**
     * When the customer placed (submitted) the Quote.
     * @type {string}
     * @memberof QuoteEmailMessage
     */
    submittedDate?: string | null;
    /**
     * Storage for any additional/custom tax data.
     * @type {object}
     * @memberof QuoteEmailMessage
     */
    taxData?: object | null;
    /**
     * Unique identifier of the Tenant.
     * @type {number}
     * @memberof QuoteEmailMessage
     */
    tenantId?: number;
    /**
     * Final total
     * @type {number}
     * @memberof QuoteEmailMessage
     */
    total?: number;
    /**
     * 
     * @type {string}
     * @memberof QuoteEmailMessage
     */
    userId?: string | null;
    /**
     * Identifies the Visit ID that was current when the order was placed or when the cart was last updated.
     * @type {string}
     * @memberof QuoteEmailMessage
     */
    visitId?: string | null;
    /**
     * Identifies the web session used to place the order or last update the cart.
     * @type {string}
     * @memberof QuoteEmailMessage
     */
    webSessionId?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof QuoteEmailMessage
     */
    isSeller?: boolean;
}
/**
 * 
 * @export
 * @interface QuoteEmailMessageAllOf
 */
export interface QuoteEmailMessageAllOf {
    /**
     * 
     * @type {boolean}
     * @memberof QuoteEmailMessageAllOf
     */
    isSeller?: boolean;
}
/**
 * 
 * @export
 * @interface Reason
 */
export interface Reason {
    /**
     * 
     * @type {string}
     * @memberof Reason
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Reason
     */
    moreInfo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Reason
     */
    reasonCode?: string | null;
}
/**
 * 
 * @export
 * @interface ReasonCollection
 */
export interface ReasonCollection {
    /**
     * 
     * @type {Array<string>}
     * @memberof ReasonCollection
     */
    items?: Array<string> | null;
    /**
     * 
     * @type {number}
     * @memberof ReasonCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface ReasonItemBase
 */
export interface ReasonItemBase {
    /**
     * 
     * @type {string}
     * @memberof ReasonItemBase
     */
    name?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ReasonItemBase
     */
    needsMoreInfo?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReasonItemBase
     */
    reasonCode?: string | null;
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
     * Amount refunded.
     * @type {number}
     * @memberof Refund
     */
    amount?: number;
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof Refund
     */
    auditInfo?: CoreApiContractsAuditInfo;
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
     * 
     * @type {Payment}
     * @memberof Refund
     */
    payment?: Payment;
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
     * Refund Method.
     * @type {string}
     * @memberof Refund
     */
    refundMethod?: string | null;
}
/**
 * 
 * @export
 * @interface RefundPaymentAction
 */
export interface RefundPaymentAction {
    /**
     * 
     * @type {number}
     * @memberof RefundPaymentAction
     */
    amount?: number;
    /**
     * 
     * @type {number}
     * @memberof RefundPaymentAction
     */
    amountCollected?: number;
    /**
     * 
     * @type {number}
     * @memberof RefundPaymentAction
     */
    amountRefunded?: number;
    /**
     * 
     * @type {string}
     * @memberof RefundPaymentAction
     */
    paymentId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RefundPaymentAction
     */
    paymentSource?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RefundPaymentAction
     */
    paymentType?: string | null;
}
/**
 * 
 * @export
 * @interface RefundReasonCollection
 */
export interface RefundReasonCollection {
    /**
     * 
     * @type {Array<RefundReasonItem>}
     * @memberof RefundReasonCollection
     */
    items?: Array<RefundReasonItem> | null;
    /**
     * 
     * @type {number}
     * @memberof RefundReasonCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface RefundReasonItem
 */
export interface RefundReasonItem {
    /**
     * 
     * @type {string}
     * @memberof RefundReasonItem
     */
    name?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof RefundReasonItem
     */
    needsMoreInfo?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RefundReasonItem
     */
    reasonCode?: string | null;
}
/**
 * Request payload for releasing a Call-Off Order.
 * @export
 * @interface ReleaseCallOffOrderRequest
 */
export interface ReleaseCallOffOrderRequest {
    /**
     * Optional list of item IDs to release. When null or empty, all eligible
     * items on the order are released.
     * @type {Array<string>}
     * @memberof ReleaseCallOffOrderRequest
     */
    itemIds?: Array<string> | null;
}
/**
 * Per-line outcome surfaced on Mozu.CommerceRuntime.Contracts.SupplyChain.ReleaseRules.ReleaseRunHistoryRecord.LineOutcomes.
 * @export
 * @interface ReleaseLineOutcome
 */
export interface ReleaseLineOutcome {
    /**
     * 
     * @type {number}
     * @memberof ReleaseLineOutcome
     */
    evaluatedFillRate?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ReleaseLineOutcome
     */
    evaluatedShipDate?: string | null;
    /**
     * The CallOffOrder line — the auto-generated GUID
     *             `CallOffOrderItem.Id`, used as the join key into `order.Items[]`.
     * @type {string}
     * @memberof ReleaseLineOutcome
     */
    itemId?: string | null;
    /**
     * The operator-visible line sequence number (1, 2, ...) from
     *             `CallOffOrderItem.LineId`. Null when the line could not be resolved
     *             back to the live order.
     * @type {number}
     * @memberof ReleaseLineOutcome
     */
    lineId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ReleaseLineOutcome
     */
    lineOutcome?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReleaseLineOutcome
     */
    salesOrderId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReleaseLineOutcome
     */
    skipReason?: string | null;
}
/**
 * Per-destination failure detail surfaced on
 * Mozu.CommerceRuntime.Contracts.SupplyChain.ReleaseRules.ReleaseRunHistoryRecord.FailureDetail.
 * @export
 * @interface ReleaseRunFailureDetail
 */
export interface ReleaseRunFailureDetail {
    /**
     * 
     * @type {string}
     * @memberof ReleaseRunFailureDetail
     */
    destinationId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReleaseRunFailureDetail
     */
    errorMessage?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReleaseRunFailureDetail
     */
    exceptionType?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ReleaseRunFailureDetail
     */
    httpStatus?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof ReleaseRunFailureDetail
     */
    isTimeout?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReleaseRunFailureDetail
     */
    responseBody?: string | null;
}
/**
 * Audit record returned by the 4 history GET endpoints under
 * `/commerce/jobs/release-rules/`. Schema mirrors the domain entity in
 * `Mozu.CommerceRuntime.Domain.Entities.SupplyChain.ReleaseRules.ReleaseRunHistoryRecord`.
 * @export
 * @interface ReleaseRunHistoryRecord
 */
export interface ReleaseRunHistoryRecord {
    /**
     * 
     * @type {string}
     * @memberof ReleaseRunHistoryRecord
     */
    callOffOrderId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ReleaseRunHistoryRecord
     */
    callOffOrderNumber?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ReleaseRunHistoryRecord
     */
    eligibilityReason?: string | null;
    /**
     * 
     * @type {Array<ReleaseRunFailureDetail>}
     * @memberof ReleaseRunHistoryRecord
     */
    failureDetail?: Array<ReleaseRunFailureDetail> | null;
    /**
     * 
     * @type {string}
     * @memberof ReleaseRunHistoryRecord
     */
    finishedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof ReleaseRunHistoryRecord
     */
    holderId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReleaseRunHistoryRecord
     */
    id?: string | null;
    /**
     * 
     * @type {Array<ReleaseLineOutcome>}
     * @memberof ReleaseRunHistoryRecord
     */
    lineOutcomes?: Array<ReleaseLineOutcome> | null;
    /**
     * 
     * @type {string}
     * @memberof ReleaseRunHistoryRecord
     */
    newHeaderStatus?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReleaseRunHistoryRecord
     */
    outcome?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReleaseRunHistoryRecord
     */
    previousHeaderStatus?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReleaseRunHistoryRecord
     */
    ruleId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ReleaseRunHistoryRecord
     */
    ruleRank?: number;
    /**
     * 
     * @type {string}
     * @memberof ReleaseRunHistoryRecord
     */
    runId?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReleaseRunHistoryRecord
     */
    salesOrderIds?: Array<string> | null;
    /**
     * 
     * @type {number}
     * @memberof ReleaseRunHistoryRecord
     */
    siteId?: number;
    /**
     * 
     * @type {string}
     * @memberof ReleaseRunHistoryRecord
     */
    startedAt?: string;
    /**
     * 
     * @type {number}
     * @memberof ReleaseRunHistoryRecord
     */
    tenantId?: number;
}
/**
 * 
 * @export
 * @interface ReleaseRunHistoryRecordCollection
 */
export interface ReleaseRunHistoryRecordCollection {
    /**
     * 
     * @type {Array<ReleaseRunHistoryRecord>}
     * @memberof ReleaseRunHistoryRecordCollection
     */
    items?: Array<ReleaseRunHistoryRecord> | null;
    /**
     * 
     * @type {string}
     * @memberof ReleaseRunHistoryRecordCollection
     */
    nextPageToken?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ReleaseRunHistoryRecordCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof ReleaseRunHistoryRecordCollection
     */
    totalCount?: number;
}
/**
 * Aggregated per-run summary returned by `GET /commerce/jobs/release-rules/runs`.
 * Counts mirror the four terminal outcomes on `ReleaseRunOutcome`.
 * @export
 * @interface ReleaseRunSummary
 */
export interface ReleaseRunSummary {
    /**
     * 
     * @type {number}
     * @memberof ReleaseRunSummary
     */
    failedCount?: number;
    /**
     * 
     * @type {string}
     * @memberof ReleaseRunSummary
     */
    finishedAt?: string;
    /**
     * 
     * @type {number}
     * @memberof ReleaseRunSummary
     */
    partialFailedCount?: number;
    /**
     * 
     * @type {number}
     * @memberof ReleaseRunSummary
     */
    releasedCount?: number;
    /**
     * 
     * @type {string}
     * @memberof ReleaseRunSummary
     */
    runId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ReleaseRunSummary
     */
    siteId?: number;
    /**
     * 
     * @type {number}
     * @memberof ReleaseRunSummary
     */
    skippedNotEligibleCount?: number;
    /**
     * 
     * @type {string}
     * @memberof ReleaseRunSummary
     */
    startedAt?: string;
    /**
     * 
     * @type {number}
     * @memberof ReleaseRunSummary
     */
    tenantId?: number;
    /**
     * 
     * @type {number}
     * @memberof ReleaseRunSummary
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface ReleaseRunSummaryCollection
 */
export interface ReleaseRunSummaryCollection {
    /**
     * 
     * @type {Array<ReleaseRunSummary>}
     * @memberof ReleaseRunSummaryCollection
     */
    items?: Array<ReleaseRunSummary> | null;
    /**
     * 
     * @type {string}
     * @memberof ReleaseRunSummaryCollection
     */
    nextPageToken?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ReleaseRunSummaryCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof ReleaseRunSummaryCollection
     */
    totalCount?: number;
}
/**
 * <param name="CanceledShipment">Shipment being canceled</param>
 * <param name="ActiveShipments">The active shipments to redistribute costs to</param>
 * @export
 * @interface RepriceCanceledShipmentRequest
 */
export interface RepriceCanceledShipmentRequest {
    /**
     * 
     * @type {Array<Shipment>}
     * @memberof RepriceCanceledShipmentRequest
     */
    activeShipments?: Array<Shipment> | null;
    /**
     * 
     * @type {Shipment}
     * @memberof RepriceCanceledShipmentRequest
     */
    canceledShipment?: Shipment;
}
/**
 * 
 * @export
 * @interface RepriceCanceledShipmentResponse
 */
export interface RepriceCanceledShipmentResponse {
    /**
     * 
     * @type {Shipment}
     * @memberof RepriceCanceledShipmentResponse
     */
    activeShipment?: Shipment;
    /**
     * 
     * @type {Shipment}
     * @memberof RepriceCanceledShipmentResponse
     */
    canceledShipment?: Shipment;
}
/**
 * 
 * @export
 * @interface RepriceShipmentObject
 */
export interface RepriceShipmentObject {
    /**
     * 
     * @type {Shipment}
     * @memberof RepriceShipmentObject
     */
    newShipment?: Shipment;
    /**
     * 
     * @type {Shipment}
     * @memberof RepriceShipmentObject
     */
    originalShipment?: Shipment;
}
/**
 * 
 * @export
 * @interface ReservationLineOutcome
 */
export interface ReservationLineOutcome {
    /**
     * The CallOffOrder line — the auto-generated GUID
     *             `CallOffOrderItem.Id`, used as the join key into `order.Items[]`.
     * @type {string}
     * @memberof ReservationLineOutcome
     */
    itemId?: string | null;
    /**
     * The operator-visible line sequence number (1, 2, ...) from
     *             `CallOffOrderItem.LineId`.
     * @type {number}
     * @memberof ReservationLineOutcome
     */
    lineId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ReservationLineOutcome
     */
    newFillRate?: number;
    /**
     * 
     * @type {string}
     * @memberof ReservationLineOutcome
     */
    newLineStatus?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ReservationLineOutcome
     */
    newReservedQty?: number;
    /**
     * 
     * @type {number}
     * @memberof ReservationLineOutcome
     */
    previousReservedQty?: number;
    /**
     * 
     * @type {string}
     * @memberof ReservationLineOutcome
     */
    productCode?: string | null;
}
/**
 * 
 * @export
 * @interface ReservationRunFailureDetail
 */
export interface ReservationRunFailureDetail {
    /**
     * 
     * @type {string}
     * @memberof ReservationRunFailureDetail
     */
    errorMessage?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ReservationRunFailureDetail
     */
    httpStatus?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof ReservationRunFailureDetail
     */
    isTimeout?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReservationRunFailureDetail
     */
    responseBody?: string | null;
}
/**
 * 
 * @export
 * @interface ReservationRunHistoryRecord
 */
export interface ReservationRunHistoryRecord {
    /**
     * 
     * @type {string}
     * @memberof ReservationRunHistoryRecord
     */
    callOffOrderId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ReservationRunHistoryRecord
     */
    callOffOrderNumber?: number | null;
    /**
     * 
     * @type {ReservationRunFailureDetail}
     * @memberof ReservationRunHistoryRecord
     */
    failureDetail?: ReservationRunFailureDetail;
    /**
     * 
     * @type {string}
     * @memberof ReservationRunHistoryRecord
     */
    finishedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof ReservationRunHistoryRecord
     */
    holderId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationRunHistoryRecord
     */
    id?: string | null;
    /**
     * 
     * @type {Array<ReservationLineOutcome>}
     * @memberof ReservationRunHistoryRecord
     */
    lineOutcomes?: Array<ReservationLineOutcome> | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationRunHistoryRecord
     */
    outcome?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationRunHistoryRecord
     */
    ruleId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ReservationRunHistoryRecord
     */
    ruleRank?: number;
    /**
     * 
     * @type {string}
     * @memberof ReservationRunHistoryRecord
     */
    runId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ReservationRunHistoryRecord
     */
    siteId?: number;
    /**
     * 
     * @type {string}
     * @memberof ReservationRunHistoryRecord
     */
    startedAt?: string;
    /**
     * 
     * @type {number}
     * @memberof ReservationRunHistoryRecord
     */
    tenantId?: number;
}
/**
 * 
 * @export
 * @interface ReservationRunHistoryRecordCollection
 */
export interface ReservationRunHistoryRecordCollection {
    /**
     * 
     * @type {Array<ReservationRunHistoryRecord>}
     * @memberof ReservationRunHistoryRecordCollection
     */
    items?: Array<ReservationRunHistoryRecord> | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationRunHistoryRecordCollection
     */
    nextPageToken?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ReservationRunHistoryRecordCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface ReservationRunSummary
 */
export interface ReservationRunSummary {
    /**
     * 
     * @type {number}
     * @memberof ReservationRunSummary
     */
    allocatedCount?: number;
    /**
     * 
     * @type {number}
     * @memberof ReservationRunSummary
     */
    failedCount?: number;
    /**
     * 
     * @type {string}
     * @memberof ReservationRunSummary
     */
    finishedAt?: string;
    /**
     * 
     * @type {number}
     * @memberof ReservationRunSummary
     */
    noOpDeltaZeroCount?: number;
    /**
     * 
     * @type {number}
     * @memberof ReservationRunSummary
     */
    noOpFullyReservedCount?: number;
    /**
     * 
     * @type {string}
     * @memberof ReservationRunSummary
     */
    runId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ReservationRunSummary
     */
    siteId?: number;
    /**
     * 
     * @type {string}
     * @memberof ReservationRunSummary
     */
    startedAt?: string;
    /**
     * 
     * @type {number}
     * @memberof ReservationRunSummary
     */
    tenantId?: number;
    /**
     * 
     * @type {number}
     * @memberof ReservationRunSummary
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface ReservationRunSummaryCollection
 */
export interface ReservationRunSummaryCollection {
    /**
     * 
     * @type {Array<ReservationRunSummary>}
     * @memberof ReservationRunSummaryCollection
     */
    items?: Array<ReservationRunSummary> | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationRunSummaryCollection
     */
    nextPageToken?: string | null;
}
/**
 * 
 * @export
 * @interface RestockableReturnItem
 */
export interface RestockableReturnItem {
    /**
     * 
     * @type {string}
     * @memberof RestockableReturnItem
     */
    locationCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof RestockableReturnItem
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof RestockableReturnItem
     */
    returnItemId?: string | null;
}
/**
 * 
 * @export
 * @interface Return
 */
export interface Return {
    /**
     * To find Returns that have failed to refund.
     * @type {boolean}
     * @memberof Return
     */
    actionRequired?: boolean;
    /**
     * Collection of custom attributes associated with the return.
     * @type {Array<ReturnAttribute>}
     * @memberof Return
     */
    attributes?: Array<ReturnAttribute> | null;
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof Return
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * Current available actions.
     * @type {Array<string>}
     * @memberof Return
     */
    availableActions?: Array<string> | null;
    /**
     * To identify Return is refundable or not.
     * @type {boolean}
     * @memberof Return
     */
    canInitiateRefund?: boolean;
    /**
     * Change messages related to the return.
     * @type {Array<CommerceRuntimeChangeMessage>}
     * @memberof Return
     */
    changeMessages?: Array<CommerceRuntimeChangeMessage> | null;
    /**
     * Unique identifier of the channel for this item.
     * @type {string}
     * @memberof Return
     */
    channelCode?: string | null;
    /**
     * 
     * @type {Contact}
     * @memberof Return
     */
    contact?: Contact;
    /**
     * ISO Currency Code. Currently, only USD is supported.
     * @type {string}
     * @memberof Return
     */
    currencyCode?: string | null;
    /**
     * Unique identifier of the customer account.
     * @type {number}
     * @memberof Return
     */
    customerAccountId?: number | null;
    /**
     * Determines the interaction type that a customer will use to create this object.
     * Valid values are: Website, Store, Call, Unknown
     * @type {string}
     * @memberof Return
     */
    customerInteractionType?: string | null;
    /**
     * Custom data for a given vendor set within the commerce process.
     * @type {object}
     * @memberof Return
     */
    data?: object | null;
    /**
     * A return can be created from an external system. This field is used to store the external id.
     * @type {string}
     * @memberof Return
     */
    externalId?: string | null;
    /**
     * Unique Identifier for this Return
     * @type {string}
     * @memberof Return
     */
    id?: string | null;
    /**
     * Was this return created by the Unified platform.
     * @type {boolean}
     * @memberof Return
     */
    isUnified?: boolean;
    /**
     * The list of items being returned by the Shopper and replaced by the Merchant in this Return.
     * @type {Array<ReturnItem>}
     * @memberof Return
     */
    items?: Array<ReturnItem> | null;
    /**
     * Location code where the return was made/processed
     * @type {string}
     * @memberof Return
     */
    locationCode?: string | null;
    /**
     * Sum of the ProductLossTotal and the ShippingLossTotal.
     * @type {number}
     * @memberof Return
     */
    lossTotal?: number | null;
    /**
     * Any Merchant Notes for this Return.
     * @type {Array<OrderNote>}
     * @memberof Return
     */
    notes?: Array<OrderNote> | null;
    /**
     * The Id of the Order that this Return was generated from.
     * @type {string}
     * @memberof Return
     */
    originalOrderId?: string | null;
    /**
     * The order number that this return was generated from.
     * @type {number}
     * @memberof Return
     */
    originalOrderNumber?: number | null;
    /**
     * When this is set to true, the  return rules will be ignored, and a return will be created without any checks.
     * @type {boolean}
     * @memberof Return
     */
    overrideReturnRule?: boolean;
    /**
     * Shipping package associated with this return.
     * @type {Array<CommerceRuntimePackage>}
     * @memberof Return
     */
    packages?: Array<CommerceRuntimePackage> | null;
    /**
     * Any Refund payments associated with this Return.
     * @type {Array<Payment>}
     * @memberof Return
     */
    payments?: Array<Payment> | null;
    /**
     * Pickupdate is the date when the return was picked up by the carrier.
     * This is optional.
     * @type {string}
     * @memberof Return
     */
    pickupDate?: string | null;
    /**
     * The Total Taxes assessed on the product loss.
     * @type {number}
     * @memberof Return
     */
    productLossTaxTotal?: number | null;
    /**
     * The Total Loss Amount is equal to the (cost of item) * quantity of item returned.
     * It is meant to represent the product value to the merchant of the items damaged or returned by a shopper.
     * @type {number}
     * @memberof Return
     */
    productLossTotal?: number | null;
    /**
     * A rollup status describing whether the return items have been received.
     * See Mozu.CommerceRuntime.Contracts.Returns.Return.ReceiveStatusConst for possible values.
     * @type {string}
     * @memberof Return
     */
    receiveStatus?: string | null;
    /**
     * If this Return was refunded,  how much was credited to the shopper? This amount is summed from the refund payments.
     * @type {number}
     * @memberof Return
     */
    refundAmount?: number | null;
    /**
     * A rollup status describing whether the return items have been refunded.
     * See Mozu.CommerceRuntime.Contracts.Returns.Return.RefundStatusConst for possible values.
     * @type {string}
     * @memberof Return
     */
    refundStatus?: string | null;
    /**
     * If this Flag is true, Refund will be done on new Gift Card.
     * @type {boolean}
     * @memberof Return
     */
    refundToGC?: boolean;
    /**
     * A rollup status describing whether the return items have been marked as replaced.
     * See Mozu.CommerceRuntime.Contracts.Returns.Return.ReplaceStatusConst for possible values.
     * @type {string}
     * @memberof Return
     */
    replaceStatus?: string | null;
    /**
     * A human-facing identifier that is unique within a tenant to represent the sequential ordering of Returns.
     * @type {number}
     * @memberof Return
     */
    returnNumber?: number | null;
    /**
     * The Id of the Order that represents the items shipped to the shopper for this Return.
     * @type {string}
     * @memberof Return
     */
    returnOrderId?: string | null;
    /**
     * Specifies whether this Return was a Refund or a Replace
     * @type {string}
     * @memberof Return
     */
    returnType?: string | null;
    /**
     * The deadline for a Shopper to ship the items in this Return to the Merchant.
     * @type {string}
     * @memberof Return
     */
    rmaDeadline?: string | null;
    /**
     * ShipOrBillCountryCode contains country code of shipping address or Billing address
     * @type {string}
     * @memberof Return
     */
    shipOrBillCountryCode?: string | null;
    /**
     * ShipOrBillState contains state/province of shipping address or Billing address
     * @type {string}
     * @memberof Return
     */
    shipOrBillState?: string | null;
    /**
     * The Total Taxes assessed on the shipping loss.
     * @type {number}
     * @memberof Return
     */
    shippingLossTaxTotal?: number | null;
    /**
     * The Shipping Loss Total is equal to the (shipping cost of item) * quantity of item returned.
     * It is meant to represent the product value to the merchant of the items damaged or returned by a shopper.
     * @type {number}
     * @memberof Return
     */
    shippingLossTotal?: number | null;
    /**
     * Unique identifier of the Site.
     * @type {number}
     * @memberof Return
     */
    siteId?: number | null;
    /**
     * The Status of the Return.  Valid values are 
     *     Null, Created, ReturnAuthorized, ReturnPending, ReturnReceived, ReplacementShipped, Cancelled, and Closed.
     * @type {string}
     * @memberof Return
     */
    status?: string | null;
    /**
     * Storage for any additional/custom tax data.
     * @type {object}
     * @memberof Return
     */
    taxData?: object | null;
    /**
     * Unique identifier of the Tenant.
     * @type {number}
     * @memberof Return
     */
    tenantId?: number | null;
    /**
     * Unique identifier of the current user.
     * @type {string}
     * @memberof Return
     */
    userId?: string | null;
    /**
     * Identifies the Visit ID that was current when the order was placed or when the cart was last updated.
     * @type {string}
     * @memberof Return
     */
    visitId?: string | null;
    /**
     * Identifies the web session used to place the order or last update the cart.
     * @type {string}
     * @memberof Return
     */
    webSessionId?: string | null;
}
/**
 * 
 * @export
 * @interface ReturnAction
 */
export interface ReturnAction {
    /**
     * The name of the action to perform, query the Return for Available actions to get valid values. This is required.
     * @type {string}
     * @memberof ReturnAction
     */
    actionName?: string | null;
    /**
     * The list of Returns upon which to perform the action. This is required.
     * @type {Array<string>}
     * @memberof ReturnAction
     */
    returnIds?: Array<string> | null;
}
/**
 * 
 * @export
 * @interface ReturnAttribute
 */
export interface ReturnAttribute {
    /**
     * 
     * @type {number}
     * @memberof ReturnAttribute
     */
    attributeDefinitionId?: number | null;
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof ReturnAttribute
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof ReturnAttribute
     */
    fullyQualifiedName?: string | null;
    /**
     * 
     * @type {Array<any>}
     * @memberof ReturnAttribute
     */
    values?: Array<any> | null;
}
/**
 * 
 * @export
 * @interface ReturnBundle
 */
export interface ReturnBundle {
    /**
     * Merchant-created code that uniquely identifies the product.
     * @type {string}
     * @memberof ReturnBundle
     */
    productCode?: string | null;
    /**
     * The amount of this particular product in a bundle that is in this Return
     * @type {number}
     * @memberof ReturnBundle
     */
    quantity?: number;
}
/**
 * Paged collection of returns. This is paged in case it's returning a long list of returns. 
 * for a store.
 * @export
 * @interface ReturnCollection
 */
export interface ReturnCollection {
    /**
     * 
     * @type {Array<Return>}
     * @memberof ReturnCollection
     */
    items?: Array<Return> | null;
    /**
     * 
     * @type {number}
     * @memberof ReturnCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof ReturnCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof ReturnCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof ReturnCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface ReturnItem
 */
export interface ReturnItem {
    /**
     * Collection of attributes defined for this return item.
     * @type {Array<ReturnAttribute>}
     * @memberof ReturnItem
     */
    attributes?: Array<ReturnAttribute> | null;
    /**
     * Deprecated. Not used.
     * @type {Array<ReturnBundle>}
     * @memberof ReturnItem
     * @deprecated
     */
    bundledProducts?: Array<ReturnBundle> | null;
    /**
     * Custom data for a given vendor set within the commerce process.
     * @type {object}
     * @memberof ReturnItem
     */
    data?: object | null;
    /**
     * 
     * @type {Array<DisposeItemInfo>}
     * @memberof ReturnItem
     */
    dispositionInfo?: Array<DisposeItemInfo> | null;
    /**
     * If this return item refers to a product/bundle that has product extras, this specifies whether those child items should be included or excluded.
     * For backward compatibility, a null value will be treated as false, i.e. include the extras.
     * @type {boolean}
     * @memberof ReturnItem
     */
    excludeProductExtras?: boolean | null;
    /**
     * The identifier of the return
     * @type {string}
     * @memberof ReturnItem
     */
    id?: string | null;
    /**
     * 
     * @type {Array<InventoryTags>}
     * @memberof ReturnItem
     */
    inventoryTags?: Array<InventoryTags> | null;
    /**
     * Any merchant-supplied notes for this ReturnItem.
     * @type {Array<OrderNote>}
     * @memberof ReturnItem
     */
    notes?: Array<OrderNote> | null;
    /**
     * The OrderItem that this ReturnItem is associated with. Either the Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.Product or the OrderItemId must be present.
     * @type {string}
     * @memberof ReturnItem
     */
    orderItemId?: string | null;
    /**
     * If this item refers to a product extra, provide the item's corresponding OptionAttributeFQN.
     * @type {string}
     * @memberof ReturnItem
     */
    orderItemOptionAttributeFQN?: string | null;
    /**
     * The OrderLineId that this ReturnItem is associated with. If Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.OrderItemId is present, the OrderLineId should be present also.
     * @type {number}
     * @memberof ReturnItem
     */
    orderLineId?: number | null;
    /**
     * 
     * @type {CommerceRuntimeProduct}
     * @memberof ReturnItem
     */
    product?: CommerceRuntimeProduct;
    /**
     * The loss incurred of the returned products, used for accounting purposes.
     * @type {number}
     * @memberof ReturnItem
     */
    productLossAmount?: number | null;
    /**
     * The tax on the returned products, used for accounting purposes.
     * @type {number}
     * @memberof ReturnItem
     */
    productLossTaxAmount?: number | null;
    /**
     * The amount of this item actually received from the shopper. It may differ from the sum of the ReturnReasons.
     * This is populated by the system when the Receive action is performed.
     * @type {number}
     * @memberof ReturnItem
     */
    quantityReceived?: number;
    /**
     * The quantity of the item being refunded is specified in this field
     * @type {number}
     * @memberof ReturnItem
     */
    quantityRefunded?: number;
    /**
     * Specifies the quantity of this item that has been marked as replaced, i.e. it has been used to generate a replacement order for the return.
     * Note that the quantity replaced may not line up with the quantity of the item actually sent back to the shopper,
     * such as in the case of an exchange, e.g. swapping a medium shirt for a large shirt.
     * @type {number}
     * @memberof ReturnItem
     */
    quantityReplaced?: number | null;
    /**
     * Of the quantity returned, how many of this item can be added back into the inventory? This item is set by the merchant via an UpdateReturn call.
     * It is used during the Restock action to set some quantity of this item back into the inventory management system.
     * @type {number}
     * @memberof ReturnItem
     */
    quantityRestockable?: number;
    /**
     * Field to specify How many items added to inventory
     * @type {number}
     * @memberof ReturnItem
     */
    quantityRestocked?: number;
    /**
     * The quantity of this item fulfilled on the parent order.
     * @type {number}
     * @memberof ReturnItem
     */
    quantityShipped?: number;
    /**
     * For a given return reason (Damaged, Defective, MissingParts, DifferentExpectations, Late, NoLongerWanted, Other),
     * how many of the above OrderItem are to be replaced.  This value is provided by the Shopper when they request a Return.
     * @type {Array<ReturnReason>}
     * @memberof ReturnItem
     */
    reasons?: Array<ReturnReason> | null;
    /**
     * Describes the receive status of this item.
     * If Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.ReturnNotRequired is `true`, then this should be Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.ItemReceiveStatusConst.NOT_REQUESTED.
     * Otherwise the value should be Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.ItemReceiveStatusConst.RECEIVED or Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.ItemReceiveStatusConst.WAITING depending on Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.QuantityReceived.
     * @type {string}
     * @memberof ReturnItem
     */
    receiveStatus?: string | null;
    /**
     * If a refund is issued for the return, how much of the refund amount is for this particular item.
     * @type {number}
     * @memberof ReturnItem
     */
    refundAmount?: number | null;
    /**
     * Describes the refund status of this item.
     * If Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.ReturnType is Mozu.CommerceRuntime.Contracts.Returns.Return.ReturnTypeConst.REPLACE, then this should be Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.ItemRefundStatusConst.NOT_REQUESTED.
     * Otherwise the value should be Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.ItemRefundStatusConst.REFUNDED or Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.ItemRefundStatusConst.NOT_REFUNDED depending on Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.RefundAmount.
     * @type {string}
     * @memberof ReturnItem
     */
    refundStatus?: string | null;
    /**
     * Describes the replace status of this item.
     * If Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.ReturnType is Mozu.CommerceRuntime.Contracts.Returns.Return.ReturnTypeConst.REFUND, then this should be Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.ItemReplaceStatusConst.NOT_REQUESTED.
     * Otherwise the value should be Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.ItemReplaceStatusConst.REPLACED or Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.ItemReplaceStatusConst.NOT_REPLACED depending on Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.QuantityReplaced.
     * @type {string}
     * @memberof ReturnItem
     */
    replaceStatus?: string | null;
    /**
     * Specifies whether this item should be returned to the merchant, e.g. if the item is irreparably damaged and it's not worth shipping back.
     * Even if this is set to true, Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.QuantityShipped should still be set to the quantity of items involved in the return.
     * @type {boolean}
     * @memberof ReturnItem
     */
    returnNotRequired?: boolean;
    /**
     * The processing fee on the item that gets persisted into the database
     * @type {number}
     * @memberof ReturnItem
     */
    returnProcessingFeeApplied?: number | null;
    /**
     * Specifies whether the requested resolution for this item is Refund or Replace.
     * @type {string}
     * @memberof ReturnItem
     */
    returnType?: string | null;
    /**
     * The identifier of the item
     * @type {number}
     * @memberof ReturnItem
     */
    shipmentItemId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ReturnItem
     */
    shipmentNumber?: number | null;
    /**
     * Determines if shipping and handling is returned on the item
     * @type {boolean}
     * @memberof ReturnItem
     */
    shippingAndHandlingRefunded?: boolean | null;
    /**
     * The loss incurred of the returned product shipping, used for accounting purposes.
     * @type {number}
     * @memberof ReturnItem
     */
    shippingLossAmount?: number | null;
    /**
     * The tax on the returned product shipping, used for accounting purposes.
     * @type {number}
     * @memberof ReturnItem
     */
    shippingLossTaxAmount?: number | null;
    /**
     * Additional tax-related data for this return item.
     * @type {object}
     * @memberof ReturnItem
     */
    taxData?: object | null;
    /**
     * Line item total with line item, Tax, Weighted Tax with Weighted shipping and handling costs
     * @type {number}
     * @memberof ReturnItem
     */
    totalWithWeightedShippingAndHandling?: number | null;
    /**
     * Taxable Subtotal including Weighted Order amounts
     * @type {number}
     * @memberof ReturnItem
     */
    totalWithoutWeightedShippingAndHandling?: number | null;
}
/**
 * Collection of return items listed on the order.
 * @export
 * @interface ReturnItemCollection
 */
export interface ReturnItemCollection {
    /**
     * 
     * @type {Array<ReturnItem>}
     * @memberof ReturnItemCollection
     */
    items?: Array<ReturnItem> | null;
    /**
     * 
     * @type {number}
     * @memberof ReturnItemCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface ReturnItemSpecifier
 */
export interface ReturnItemSpecifier {
    /**
     * 
     * @type {number}
     * @memberof ReturnItemSpecifier
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof ReturnItemSpecifier
     */
    returnItemId?: string | null;
}
/**
 * Represents a quantity associated with a given reason for a return
 * @export
 * @interface ReturnReason
 */
export interface ReturnReason {
    /**
     * The quantity associated with this Reason.
     * @type {number}
     * @memberof ReturnReason
     */
    quantity?: number;
    /**
     * The reason this item has been returned.
     * @type {string}
     * @memberof ReturnReason
     */
    reason?: string | null;
}
/**
 * 
 * @export
 * @interface ReturnRefundDetails
 */
export interface ReturnRefundDetails {
    /**
     * 
     * @type {number}
     * @memberof ReturnRefundDetails
     */
    defaultReturnProcessingFee?: number;
    /**
     * 
     * @type {Array<ReturnItem>}
     * @memberof ReturnRefundDetails
     */
    items?: Array<ReturnItem> | null;
    /**
     * 
     * @type {Array<RefundPaymentAction>}
     * @memberof ReturnRefundDetails
     */
    refunds?: Array<RefundPaymentAction> | null;
    /**
     * 
     * @type {string}
     * @memberof ReturnRefundDetails
     */
    returnId?: string | null;
}
/**
 * 
 * @export
 * @interface ReturnRuleInfo
 */
export interface ReturnRuleInfo {
    /**
     * Indicate product is returnable or not
     * @type {boolean}
     * @memberof ReturnRuleInfo
     */
    isReturnable?: boolean | null;
    /**
     * Return window within which an item can be returned
     * @type {number}
     * @memberof ReturnRuleInfo
     */
    maxDays?: number | null;
    /**
     * Maximum quantity that can be returned
     * @type {number}
     * @memberof ReturnRuleInfo
     */
    maxQty?: number | null;
    /**
     * Return rule code which is applied
     * @type {string}
     * @memberof ReturnRuleInfo
     */
    ruleCode?: string | null;
}
/**
 * Request DTO for rolling over an expired Blanket Order to a new order.
 * Used by POST /blanketorders/{blanketOrderId}/rollover endpoint.
 * ICKY-2647: Blanket Order Rollover
 * @export
 * @interface RolloverBlanketOrderRequest
 */
export interface RolloverBlanketOrderRequest {
    /**
     * End date for the new Blanket Order's validity period.
     * Must be after StartDate.
     * @type {string}
     * @memberof RolloverBlanketOrderRequest
     */
    endDate?: string;
    /**
     * Line item IDs to include in the new Blanket Order.
     * Only Open status items are eligible for rollover.
     * @type {Array<string>}
     * @memberof RolloverBlanketOrderRequest
     */
    selectedLineItemIds?: Array<string> | null;
    /**
     * Start date for the new Blanket Order's validity period.
     * @type {string}
     * @memberof RolloverBlanketOrderRequest
     */
    startDate?: string;
}
/**
 * 
 * @export
 * @interface Shipment
 */
export interface Shipment {
    /**
     * 
     * @type {FulfillmentAlternateContact}
     * @memberof Shipment
     */
    alternateContact?: FulfillmentAlternateContact;
    /**
     * 
     * @type {Array<ShipmentAttribute>}
     * @memberof Shipment
     */
    attributes?: Array<ShipmentAttribute> | null;
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof Shipment
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * 
     * @type {number}
     * @memberof Shipment
     */
    backorderCreatedDate?: number | null;
    /**
     * 
     * @type {Array<FulfillmentCanceledItem>}
     * @memberof Shipment
     */
    canceledItems?: Array<FulfillmentCanceledItem> | null;
    /**
     * 
     * @type {Array<CommerceRuntimeChangeMessage>}
     * @memberof Shipment
     */
    changeMessages?: Array<CommerceRuntimeChangeMessage> | null;
    /**
     * 
     * @type {number}
     * @memberof Shipment
     */
    cost?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Shipment
     */
    currencyCode?: string | null;
    /**
     * 
     * @type {CommerceRuntimeCustomer}
     * @memberof Shipment
     */
    customer?: CommerceRuntimeCustomer;
    /**
     * 
     * @type {number}
     * @memberof Shipment
     */
    customerAccountId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Shipment
     */
    readonly customerTaxId?: string | null;
    /**
     * 
     * @type {object}
     * @memberof Shipment
     */
    data?: object | null;
    /**
     * 
     * @type {CommerceRuntimeDestination}
     * @memberof Shipment
     */
    destination?: CommerceRuntimeDestination;
    /**
     * 
     * @type {number}
     * @memberof Shipment
     */
    dutyAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof Shipment
     */
    dutyTotal?: number;
    /**
     * 
     * @type {string}
     * @memberof Shipment
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Shipment
     */
    expectedDeliveryDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Shipment
     */
    externalOrderId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Shipment
     */
    externalShipmentId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Shipment
     */
    fulfillmentDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Shipment
     */
    fulfillmentLocationCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Shipment
     */
    fulfillmentStatus?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Shipment
     */
    futureDate?: string | null;
    /**
     * Identifier of the order-level shipping group (`ShippingGrouping.Id`) whose items are fulfilled
     * by this shipment.  Distinct from the internal routing group key stored on the domain entity.
     * @type {string}
     * @memberof Shipment
     */
    groupId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Shipment
     */
    handlingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof Shipment
     */
    handlingSubtotal?: number;
    /**
     * 
     * @type {number}
     * @memberof Shipment
     */
    handlingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof Shipment
     */
    handlingTaxTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof Shipment
     */
    handlingTotal?: number;
    /**
     * 
     * @type {string}
     * @memberof Shipment
     */
    holdReleaseDate?: string | null;
    /**
     * ID of the shipment
     * @type {string}
     * @memberof Shipment
     */
    id?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof Shipment
     */
    isExpress?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof Shipment
     */
    isFlatRateShipping?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof Shipment
     */
    isTransfer?: boolean | null;
    /**
     * 
     * @type {Array<ShipmentItem>}
     * @memberof Shipment
     */
    items?: Array<ShipmentItem> | null;
    /**
     * 
     * @type {number}
     * @memberof Shipment
     */
    lineItemSubtotal?: number;
    /**
     * 
     * @type {number}
     * @memberof Shipment
     */
    lineItemTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof Shipment
     */
    lineItemTaxTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof Shipment
     */
    lineItemTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof Shipment
     */
    number?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Shipment
     */
    orderId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Shipment
     */
    orderNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof Shipment
     */
    orderSubmitDate?: string | null;
    /**
     * 
     * @type {Contact}
     * @memberof Shipment
     */
    origin?: Contact;
    /**
     * 
     * @type {number}
     * @memberof Shipment
     */
    originalShipmentNumber?: number | null;
    /**
     * 
     * @type {Array<CommerceRuntimePackage>}
     * @memberof Shipment
     */
    packages?: Array<CommerceRuntimePackage> | null;
    /**
     * 
     * @type {number}
     * @memberof Shipment
     */
    parentCheckoutNumber?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Shipment
     */
    parentShipmentNumber?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Shipment
     */
    pickStatus?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Shipment
     */
    pickType?: string | null;
    /**
     * 
     * @type {object}
     * @memberof Shipment
     */
    pickupInfo?: object | null;
    /**
     * 
     * @type {boolean}
     * @memberof Shipment
     */
    readyToCapture?: boolean;
    /**
     * Requested ship date, carried from the originating OrderItem (Call-Off release, spec
     * COM-10941 follow-up). Null for shipments not tied to a Call-Off Order line.
     * @type {string}
     * @memberof Shipment
     */
    requestedShipDate?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Shipment
     */
    shipmentAdjustment?: number;
    /**
     * 
     * @type {Array<CommerceRuntimeShipmentNote>}
     * @memberof Shipment
     */
    shipmentNotes?: Array<CommerceRuntimeShipmentNote> | null;
    /**
     * 
     * @type {string}
     * @memberof Shipment
     */
    shipmentStatus?: string | null;
    /**
     * 
     * @type {CommerceRuntimeShipmentStatusReason}
     * @memberof Shipment
     */
    shipmentStatusReason?: CommerceRuntimeShipmentStatusReason;
    /**
     * 
     * @type {string}
     * @memberof Shipment
     */
    shipmentType?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Shipment
     */
    shippingAdjustment?: number;
    /**
     * 
     * @type {string}
     * @memberof Shipment
     */
    shippingMethodCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Shipment
     */
    shippingMethodName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Shipment
     */
    shippingSubtotal?: number;
    /**
     * 
     * @type {number}
     * @memberof Shipment
     */
    shippingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof Shipment
     */
    shippingTaxTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof Shipment
     */
    shippingTotal?: number;
    /**
     * 
     * @type {FulfillmentShopperNotes}
     * @memberof Shipment
     */
    shopperNotes?: FulfillmentShopperNotes;
    /**
     * 
     * @type {Array<CommerceRuntimeSubstitutedItem>}
     * @memberof Shipment
     */
    substitutedItems?: Array<CommerceRuntimeSubstitutedItem> | null;
    /**
     * 
     * @type {object}
     * @memberof Shipment
     */
    taxData?: object | null;
    /**
     * 
     * @type {number}
     * @memberof Shipment
     */
    total?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof Shipment
     */
    transferShipmentNumbers?: Array<number> | null;
    /**
     * 
     * @type {string}
     * @memberof Shipment
     */
    workflowProcessContainerId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Shipment
     */
    workflowProcessId?: string | null;
    /**
     * 
     * @type {CommerceRuntimeWorkflowState}
     * @memberof Shipment
     */
    workflowState?: CommerceRuntimeWorkflowState;
}
/**
 * 
 * @export
 * @interface ShipmentAdjustment
 */
export interface ShipmentAdjustment {
    /**
     * 
     * @type {CommerceRuntimeAppeasementReason}
     * @memberof ShipmentAdjustment
     */
    appeasementReason?: CommerceRuntimeAppeasementReason;
    /**
     * 
     * @type {number}
     * @memberof ShipmentAdjustment
     */
    dutyAdjustment?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ShipmentAdjustment
     */
    handlingAdjustment?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ShipmentAdjustment
     */
    handlingTaxAdjustment?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ShipmentAdjustment
     */
    itemAdjustment?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ShipmentAdjustment
     */
    itemTaxAdjustment?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ShipmentAdjustment
     */
    shippingAdjustment?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ShipmentAdjustment
     */
    shippingTaxAdjustment?: number | null;
}
/**
 * 
 * @export
 * @interface ShipmentAndItemsAdjustment
 */
export interface ShipmentAndItemsAdjustment {
    /**
     * 
     * @type {Array<BulkShipmentItemAdjustment>}
     * @memberof ShipmentAndItemsAdjustment
     */
    itemAdjustments?: Array<BulkShipmentItemAdjustment> | null;
    /**
     * 
     * @type {ShipmentAdjustment}
     * @memberof ShipmentAndItemsAdjustment
     */
    shipmentAdjustment?: ShipmentAdjustment;
}
/**
 * Attribute instance on a Shipment entity.
 * Separate from OrderAttribute for type safety and future divergence.
 * @export
 * @interface ShipmentAttribute
 */
export interface ShipmentAttribute {
    /**
     * 
     * @type {number}
     * @memberof ShipmentAttribute
     */
    attributeDefinitionId?: number | null;
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof ShipmentAttribute
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof ShipmentAttribute
     */
    fullyQualifiedName?: string | null;
    /**
     * 
     * @type {Array<any>}
     * @memberof ShipmentAttribute
     */
    values?: Array<any> | null;
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
    actualPrice?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ShipmentItem
     */
    allowsSubstitution?: boolean | null;
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof ShipmentItem
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof ShipmentItem
     */
    backorderReleaseDate?: string | null;
    /**
     * 
     * @type {BundleInfo}
     * @memberof ShipmentItem
     */
    bundleInfo?: BundleInfo;
    /**
     * 
     * @type {string}
     * @memberof ShipmentItem
     */
    cartItemId?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ShipmentItem
     */
    childItemIds?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof ShipmentItem
     */
    condition?: string | null;
    /**
     * 
     * @type {object}
     * @memberof ShipmentItem
     */
    data?: object | null;
    /**
     * 
     * @type {number}
     * @memberof ShipmentItem
     */
    duty?: number;
    /**
     * 
     * @type {string}
     * @memberof ShipmentItem
     */
    expectedDeliveryDate?: string | null;
    /**
     * 
     * @type {Array<FulfillmentField>}
     * @memberof ShipmentItem
     */
    fulfillmentFields?: Array<FulfillmentField> | null;
    /**
     * 
     * @type {string}
     * @memberof ShipmentItem
     */
    fulfillmentLocationCode?: string | null;
    /**
     * 
     * @type {Array<CommerceRuntimeGiftCard>}
     * @memberof ShipmentItem
     */
    giftCards?: Array<CommerceRuntimeGiftCard> | null;
    /**
     * Gift message for item
     * @type {string}
     * @memberof ShipmentItem
     */
    giftMessage?: string | null;
    /**
     * Total handling amount for this item, combining both product-level and order-level handling fees.
     * To get the product-level handling portion: Handling - WeightedOrderHandlingFee.
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
     * Total handling tax for this item, combining both product-level and order-level handling tax.
     * To get the product-level handling tax: HandlingTax - WeightedOrderHandlingFeeTax.
     * @type {number}
     * @memberof ShipmentItem
     */
    handlingTax?: number;
    /**
     * 
     * @type {string}
     * @memberof ShipmentItem
     */
    imageUrl?: string | null;
    /**
     * 
     * @type {Array<InventoryTags>}
     * @memberof ShipmentItem
     */
    inventoryTags?: Array<InventoryTags> | null;
    /**
     * 
     * @type {boolean}
     * @memberof ShipmentItem
     */
    isAssemblyRequired?: boolean | null;
    /**
     * Indicate item is gift or not
     * @type {boolean}
     * @memberof ShipmentItem
     */
    isGift?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof ShipmentItem
     */
    isPackagedStandAlone?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof ShipmentItem
     */
    isReservedInventory?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ShipmentItem
     */
    isSubstitutable?: boolean | null;
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
    itemDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentItem
     */
    itemTax?: number;
    /**
     * Extensible attributes for this shipment line.
     * Named `LineAttributes` rather than `Attributes` because
     * `Attributes` is already a System.Collections.Generic.Dictionary`2 of
     * product attributes on Mozu.CommerceRuntime.Contracts.Fulfillment.ShipmentItem.
     * @type {Array<ShipmentLineAttribute>}
     * @memberof ShipmentItem
     */
    lineAttributes?: Array<ShipmentLineAttribute> | null;
    /**
     * 
     * @type {number}
     * @memberof ShipmentItem
     */
    lineId?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentItem
     */
    lineItemAdjustment?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ShipmentItem
     */
    lineItemCost?: number;
    /**
     * 
     * @type {string}
     * @memberof ShipmentItem
     */
    locatorName?: string | null;
    /**
     * 
     * @type {CommerceRuntimePackageMeasurements}
     * @memberof ShipmentItem
     */
    measurements?: CommerceRuntimePackageMeasurements;
    /**
     * 
     * @type {string}
     * @memberof ShipmentItem
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShipmentItem
     */
    optionAttributeFQN?: string | null;
    /**
     * 
     * @type {Array<CommerceRuntimeProductOption>}
     * @memberof ShipmentItem
     */
    options?: Array<CommerceRuntimeProductOption> | null;
    /**
     * 
     * @type {number}
     * @memberof ShipmentItem
     */
    originalLineId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ShipmentItem
     */
    originalOrderItemId?: string | null;
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
    overridePrice?: number | null;
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
    parentItemId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShipmentItem
     */
    partNumber?: string | null;
    /**
     * Determines if the item is using external or internal(catalog) pricing
     * @type {string}
     * @memberof ShipmentItem
     */
    priceMode?: string | null;
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
    purchaseLocation?: string | null;
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
    readyForPickupQuantity?: number | null;
    /**
     * 
     * @type {ReturnRuleInfo}
     * @memberof ShipmentItem
     */
    returnRuleInfo?: ReturnRuleInfo;
    /**
     * 
     * @type {string}
     * @memberof ShipmentItem
     */
    serialNumber?: string | null;
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
     * @type {string}
     * @memberof ShipmentItem
     */
    sku?: string | null;
    /**
     * 
     * @type {SubstituteInfo}
     * @memberof ShipmentItem
     */
    substituteInfo?: SubstituteInfo;
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
    substitutionType?: string | null;
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
    taxableHandling?: number;
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
    taxableShipping?: number;
    /**
     * Time-fence tolerance (days), carried from the originating OrderItem (Call-Off release,
     * spec COM-10941 follow-up). Null for shipment items not tied to a Call-Off Order line.
     * @type {number}
     * @memberof ShipmentItem
     */
    timeFenceDays?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ShipmentItem
     */
    unitPrice?: number;
    /**
     * 
     * @type {string}
     * @memberof ShipmentItem
     */
    upc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShipmentItem
     */
    variationProductCode?: string | null;
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
    weightedLineItemTaxAdjustment?: number;
    /**
     * Order-level handling fee allocated to this item. This represents only the order-level portion
     * of handling, not product-level handling fees. Product-level handling can be derived as:
     * Handling - WeightedOrderHandlingFee.
     * During item cancellation with Granular Retention, order-level handling is retained on active items
     * while product-level handling scales proportionally with quantity.
     * @type {number}
     * @memberof ShipmentItem
     */
    weightedOrderHandlingFee?: number;
    /**
     * Discount applied to the order-level handling fee only.
     * @type {number}
     * @memberof ShipmentItem
     */
    weightedOrderHandlingFeeDiscount?: number;
    /**
     * Tax on the order-level handling fee only (not total handling tax).
     * Product-level handling tax can be derived as: HandlingTax - WeightedOrderHandlingFeeTax.
     * @type {number}
     * @memberof ShipmentItem
     */
    weightedOrderHandlingFeeTax?: number;
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
    weightedShippingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentItem
     */
    weightedShippingTaxAdjustment?: number;
}
/**
 * 
 * @export
 * @interface ShipmentItemAdjustment
 */
export interface ShipmentItemAdjustment {
    /**
     * 
     * @type {CommerceRuntimeAppeasementReason}
     * @memberof ShipmentItemAdjustment
     */
    appeasementReason?: CommerceRuntimeAppeasementReason;
    /**
     * Unit price override
     * @type {number}
     * @memberof ShipmentItemAdjustment
     */
    overridePrice?: number | null;
}
/**
 * Attribute instance on a Shipment line item.
 * @export
 * @interface ShipmentLineAttribute
 */
export interface ShipmentLineAttribute {
    /**
     * 
     * @type {number}
     * @memberof ShipmentLineAttribute
     */
    attributeDefinitionId?: number | null;
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof ShipmentLineAttribute
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof ShipmentLineAttribute
     */
    fullyQualifiedName?: string | null;
    /**
     * 
     * @type {Array<any>}
     * @memberof ShipmentLineAttribute
     */
    values?: Array<any> | null;
}
/**
 * Value of the shipping discount.
 * @export
 * @interface ShippingDiscount
 */
export interface ShippingDiscount {
    /**
     * 
     * @type {CommerceRuntimeAppliedDiscount}
     * @memberof ShippingDiscount
     */
    discount?: CommerceRuntimeAppliedDiscount;
    /**
     * Unique identifier of the shipping method discount.
     * @type {string}
     * @memberof ShippingDiscount
     */
    methodCode?: string | null;
}
/**
 * 
 * @export
 * @interface ShippingGrouping
 */
export interface ShippingGrouping {
    /**
     * The Fulfillment location used by items in this grouping.
     * @type {string}
     * @memberof ShippingGrouping
     */
    fulfillmentLocationCode?: string | null;
    /**
     * The FulfillmentMethod used by items in this grouping.
     * @type {string}
     * @memberof ShippingGrouping
     */
    fulfillmentMethod?: string | null;
    /**
     * Group level order handling fees.
     * @type {number}
     * @memberof ShippingGrouping
     */
    handlingAmount?: number | null;
    /**
     * 
     * @type {Array<CommerceRuntimeAppliedDiscount>}
     * @memberof ShippingGrouping
     */
    handlingDiscounts?: Array<CommerceRuntimeAppliedDiscount> | null;
    /**
     * Group level order handling taxes.
     * @type {number}
     * @memberof ShippingGrouping
     */
    handlingTax?: number | null;
    /**
     * The total handling tax for this group, accounting for both group-level and item-level handling tax.
     * @type {number}
     * @memberof ShippingGrouping
     */
    handlingTaxTotal?: number;
    /**
     * The total handling cost for this group, accounting for discounts and tax.
     * @type {number}
     * @memberof ShippingGrouping
     */
    handlingTotal?: number;
    /**
     * A unique identifier for this grouping.
     * @type {string}
     * @memberof ShippingGrouping
     */
    id?: string | null;
    /**
     * Identifiers of the items that make up this grouping.
     * @type {Array<string>}
     * @memberof ShippingGrouping
     */
    orderItemIds?: Array<string> | null;
    /**
     * 
     * @type {Array<ShippingDiscount>}
     * @memberof ShippingGrouping
     */
    shippingDiscounts?: Array<ShippingDiscount> | null;
    /**
     * Code that uniquely identifies the shipping method such as "Ground," "Overnight".
     * @type {string}
     * @memberof ShippingGrouping
     */
    shippingMethodCode?: string | null;
    /**
     * Readable name of the shipping method.
     * @type {string}
     * @memberof ShippingGrouping
     */
    shippingMethodName?: string | null;
    /**
     * The total shipping tax for this group, accounting for both group-level and item-level shipping tax.
     * @type {number}
     * @memberof ShippingGrouping
     */
    shippingTaxTotal?: number;
    /**
     * The total shipping cost for this group, accounting for discounts and tax.
     * @type {number}
     * @memberof ShippingGrouping
     */
    shippingTotal?: number;
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
 * Notes that the shopper has added to this order, for example, a gift message or other comments.
 * @export
 * @interface ShopperNotes
 */
export interface ShopperNotes {
    /**
     * Comments associated with this order.
     * @type {string}
     * @memberof ShopperNotes
     */
    comments?: string | null;
    /**
     * DeliveryInstructions associated with this order.
     * @type {string}
     * @memberof ShopperNotes
     */
    deliveryInstructions?: string | null;
    /**
     * Gift message associated with this order.
     * @type {string}
     * @memberof ShopperNotes
     */
    giftMessage?: string | null;
}
/**
 * 
 * @export
 * @interface SplitShipmentsObject
 */
export interface SplitShipmentsObject {
    /**
     * 
     * @type {Array<Shipment>}
     * @memberof SplitShipmentsObject
     */
    newShipments?: Array<Shipment> | null;
    /**
     * 
     * @type {Shipment}
     * @memberof SplitShipmentsObject
     */
    originalShipment?: Shipment;
}
/**
 * Authoring descriptor for a single declared expression field.
 * @export
 * @interface StaticField
 */
export interface StaticField {
    /**
     * True when `eq null` / `ne null` predicates are valid.
     * @type {boolean}
     * @memberof StaticField
     */
    allowNullRightSide?: boolean | null;
    /**
     * One of: `String`, `Integer`, `Decimal`, `DateTime`,
     * `Boolean`.
     * @type {string}
     * @memberof StaticField
     */
    dataType?: string | null;
    /**
     * Present when the field has a constrained value set
     * (e.g. `status`, `items.fulfillmentType`).
     * @type {Array<string>}
     * @memberof StaticField
     */
    enumValues?: Array<string> | null;
    /**
     * Filter-syntax field name (e.g. `"items.fulfillmentType"`).
     * @type {string}
     * @memberof StaticField
     */
    name?: string | null;
    /**
     * True when the underlying field accepts null comparison values.
     * @type {boolean}
     * @memberof StaticField
     */
    nullable?: boolean | null;
    /**
     * Allowed operator codes for this field. Subset of
     * `eq`, `ne`, `in`, `gt`, `ge`, `lt`, `le`.
     * @type {Array<string>}
     * @memberof StaticField
     */
    operators?: Array<string> | null;
    /**
     * Human-readable UI label (e.g. `"Item Fulfillment Type"`).
     * @type {string}
     * @memberof StaticField
     */
    pathLabel?: string | null;
    /**
     * `"item"` for item-level fields; absent for header fields.
     * @type {string}
     * @memberof StaticField
     */
    scope?: string | null;
    /**
     * `"anyMatch"` on item-level fields to communicate
     *             ANY-item-matches semantics.
     * @type {string}
     * @memberof StaticField
     */
    semantics?: string | null;
}
/**
 * 
 * @export
 * @interface SubPayment
 */
export interface SubPayment {
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
    amountRefunded?: number;
    /**
     * 
     * @type {number}
     * @memberof SubPayment
     */
    amountRequested?: number;
    /**
     * 
     * @type {string}
     * @memberof SubPayment
     */
    status?: string | null;
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
 * @interface SubscriptionAttribute
 */
export interface SubscriptionAttribute {
    /**
     * 
     * @type {number}
     * @memberof SubscriptionAttribute
     */
    attributeDefinitionId?: number | null;
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof SubscriptionAttribute
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionAttribute
     */
    fullyQualifiedName?: string | null;
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
 * @interface SubscriptionInfo
 */
export interface SubscriptionInfo {
    /**
     * 
     * @type {Frequency}
     * @memberof SubscriptionInfo
     */
    frequency?: Frequency;
    /**
     * Indicates commerce item is subscribed or not.
     * @type {boolean}
     * @memberof SubscriptionInfo
     */
    required?: boolean | null;
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
     * Order Level taxable sub total
     * @type {number}
     * @memberof SubscriptionItem
     */
    adjustedLineItemSubtotal?: number | null;
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof SubscriptionItem
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * Track the discountId from which the item was auto added
     * @type {number}
     * @memberof SubscriptionItem
     */
    autoAddDiscountId?: number | null;
    /**
     * List of Child Item Ids for this order item
     * @type {Array<string>}
     * @memberof SubscriptionItem
     */
    childItemIds?: Array<string> | null;
    /**
     * Custom data for a given vendor set within the commerce process.
     * @type {object}
     * @memberof SubscriptionItem
     */
    data?: object | null;
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
     * Indicate Duty Amount for this item.
     * @type {number}
     * @memberof SubscriptionItem
     */
    dutyAmount?: number | null;
    /**
     * Line item extended total (quantity multiplied by unit extended price) before discounts.
     * @type {number}
     * @memberof SubscriptionItem
     */
    extendedTotal?: number | null;
    /**
     * Not implemented. Total cost of fees that apply to this item.
     * @type {number}
     * @memberof SubscriptionItem
     */
    feeTotal?: number | null;
    /**
     * Product-level handling fee for this item (e.g. special packaging, hazmat fees).
     * This does NOT include order-level handling fees — those are in Mozu.CommerceRuntime.Contracts.Commerce.CommerceItem.WeightedOrderHandlingFee.
     * Total handling on the shipment = HandlingAmount + WeightedOrderHandlingFee.
     * @type {number}
     * @memberof SubscriptionItem
     */
    handlingAmount?: number | null;
    /**
     * 
     * @type {Array<InventoryTags>}
     * @memberof SubscriptionItem
     */
    inventoryTags?: Array<InventoryTags> | null;
    /**
     * Assembly Required for this order item
     * @type {boolean}
     * @memberof SubscriptionItem
     */
    isAssemblyRequired?: boolean;
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
     * Total price of taxes that apply to products in this item.
     * @type {number}
     * @memberof SubscriptionItem
     */
    itemTaxTotal?: number | null;
    /**
     * The line id assigned to the order item. Visible only in the Admin, this is set from the Admin or
     * in CommerceRuntime when a cart is converted to an order.
     * @type {number}
     * @memberof SubscriptionItem
     */
    lineId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionItem
     */
    lineItemAdjustment?: number | null;
    /**
     * Locale code for language that appears in text and descriptions on the site, for example, en_US. 
     * This is not the currency code. Currently only en_US is supported.
     * @type {string}
     * @memberof SubscriptionItem
     */
    localeCode?: string | null;
    /**
     * Indicates Parent Item Id for this order item
     * @type {string}
     * @memberof SubscriptionItem
     */
    parentItemId?: string | null;
    /**
     * 
     * @type {CommerceRuntimeProduct}
     * @memberof SubscriptionItem
     */
    product?: CommerceRuntimeProduct;
    /**
     * 
     * @type {AppliedLineItemProductDiscount}
     * @memberof SubscriptionItem
     */
    productDiscount?: AppliedLineItemProductDiscount;
    /**
     * A list of discounts applied to the product
     * @type {Array<AppliedLineItemProductDiscount>}
     * @memberof SubscriptionItem
     */
    productDiscounts?: Array<AppliedLineItemProductDiscount> | null;
    /**
     * The location where the product is being purchased.. default is null. Products can have different prices
     * by purchaseLocation via custom priceListResolution...
     * @type {string}
     * @memberof SubscriptionItem
     */
    purchaseLocation?: string | null;
    /**
     * Number of products ordered.
     * @type {number}
     * @memberof SubscriptionItem
     */
    quantity?: number;
    /**
     * Shipping amount before Discounts and adjustments
     * @type {number}
     * @memberof SubscriptionItem
     */
    shippingAmountBeforeDiscountsAndAdjustments?: number | null;
    /**
     * A discount applied to the shipping
     * @type {Array<AppliedLineItemShippingDiscount>}
     * @memberof SubscriptionItem
     */
    shippingDiscounts?: Array<AppliedLineItemShippingDiscount> | null;
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
     * 
     * @type {SubstituteInfo}
     * @memberof SubscriptionItem
     */
    substituteInfo?: SubstituteInfo;
    /**
     * Line item subtotal (quantity multiplied by price) before discounts.
     * @type {number}
     * @memberof SubscriptionItem
     */
    subtotal?: number | null;
    /**
     * Storage for any additional/custom tax data.
     * @type {object}
     * @memberof SubscriptionItem
     */
    taxData?: object | null;
    /**
     * Line item subtotal (quantity multiplied by price) before discounts.
     * @type {number}
     * @memberof SubscriptionItem
     */
    taxableTotal?: number | null;
    /**
     * Total price of this cart item taking into account any discounts.
     * @type {number}
     * @memberof SubscriptionItem
     */
    total?: number | null;
    /**
     * Line item total with line item, Tax, Weighted Tax with Weighted shipping and handling costs
     * @type {number}
     * @memberof SubscriptionItem
     */
    totalWithWeightedShippingAndHandling?: number | null;
    /**
     * Taxable Subtotal including Weighted Order amounts
     * @type {number}
     * @memberof SubscriptionItem
     */
    totalWithoutWeightedShippingAndHandling?: number | null;
    /**
     * 
     * @type {CommerceUnitPrice}
     * @memberof SubscriptionItem
     */
    unitPrice?: CommerceUnitPrice;
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
     * Order Level Duty applied to this Item
     * @type {number}
     * @memberof SubscriptionItem
     */
    weightedOrderDuty?: number | null;
    /**
     * Order-level handling manual adjustment allocated to this item.
     * @type {number}
     * @memberof SubscriptionItem
     */
    weightedOrderHandlingAdjustment?: number | null;
    /**
     * Order-level handling fee allocated to this item (e.g. flat handling fee spread across all items).
     * This is separate from product-level handling in Mozu.CommerceRuntime.Contracts.Commerce.CommerceItem.HandlingAmount.
     * Total handling on the shipment = HandlingAmount + WeightedOrderHandlingFee.
     * @type {number}
     * @memberof SubscriptionItem
     */
    weightedOrderHandlingFee?: number | null;
    /**
     * Order-level handling fee discount allocated to this item.
     * @type {number}
     * @memberof SubscriptionItem
     */
    weightedOrderHandlingFeeDiscount?: number | null;
    /**
     * Total handling tax for this item (covers both product-level and order-level handling tax combined).
     * On the shipment item, this is split into: HandlingTax (total) and WeightedOrderHandlingFeeTax (order-level portion only).
     * @type {number}
     * @memberof SubscriptionItem
     */
    weightedOrderHandlingFeeTax?: number | null;
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
     * Order Level tax applied to this Item
     * @type {number}
     * @memberof SubscriptionItem
     */
    weightedOrderTax?: number | null;
    /**
     * Extensible attributes for this subscription line.
     * @type {Array<SubscriptionLineAttribute>}
     * @memberof SubscriptionItem
     */
    attributes?: Array<SubscriptionLineAttribute> | null;
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
     * Unique identifier of the order line item. System-supplied and read-only.
     * @type {string}
     * @memberof SubscriptionItem
     */
    id?: string | null;
    /**
     * is onetime item
     * @type {boolean}
     * @memberof SubscriptionItem
     */
    isOnetimeItem?: boolean;
    /**
     * Product code of the parent item if split because of the splitItemOnSubsription attribute on the item
     * @type {string}
     * @memberof SubscriptionItem
     */
    parentItemCode?: string | null;
    /**
     * Code that uniquely identifies the shipping method.
     * @type {string}
     * @memberof SubscriptionItem
     */
    shippingMethodCode?: string | null;
    /**
     * Readable name of the shipping method.
     * @type {string}
     * @memberof SubscriptionItem
     */
    shippingMethodName?: string | null;
}
/**
 * 
 * @export
 * @interface SubscriptionItemAllOf
 */
export interface SubscriptionItemAllOf {
    /**
     * Extensible attributes for this subscription line.
     * @type {Array<SubscriptionLineAttribute>}
     * @memberof SubscriptionItemAllOf
     */
    attributes?: Array<SubscriptionLineAttribute> | null;
    /**
     * Location code from which to obtain this item
     * @type {string}
     * @memberof SubscriptionItemAllOf
     */
    fulfillmentLocationCode?: string | null;
    /**
     * Fulfillment method used to fulfill this item
     * @type {string}
     * @memberof SubscriptionItemAllOf
     */
    fulfillmentMethod?: string | null;
    /**
     * Unique identifier of the order line item. System-supplied and read-only.
     * @type {string}
     * @memberof SubscriptionItemAllOf
     */
    id?: string | null;
    /**
     * is onetime item
     * @type {boolean}
     * @memberof SubscriptionItemAllOf
     */
    isOnetimeItem?: boolean;
    /**
     * Product code of the parent item if split because of the splitItemOnSubsription attribute on the item
     * @type {string}
     * @memberof SubscriptionItemAllOf
     */
    parentItemCode?: string | null;
    /**
     * Code that uniquely identifies the shipping method.
     * @type {string}
     * @memberof SubscriptionItemAllOf
     */
    shippingMethodCode?: string | null;
    /**
     * Readable name of the shipping method.
     * @type {string}
     * @memberof SubscriptionItemAllOf
     */
    shippingMethodName?: string | null;
}
/**
 * Attribute instance on a Subscription line item.
 * @export
 * @interface SubscriptionLineAttribute
 */
export interface SubscriptionLineAttribute {
    /**
     * 
     * @type {number}
     * @memberof SubscriptionLineAttribute
     */
    attributeDefinitionId?: number | null;
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof SubscriptionLineAttribute
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionLineAttribute
     */
    fullyQualifiedName?: string | null;
    /**
     * 
     * @type {Array<any>}
     * @memberof SubscriptionLineAttribute
     */
    values?: Array<any> | null;
}
/**
 * 
 * @export
 * @interface SubstituteInfo
 */
export interface SubstituteInfo {
    /**
     * Determines if and when substitution is allowed. Allowed values are `None`, `Yes`, `No`, or `OnlyAtFulfillment`. Default is `None`.
     * @type {string}
     * @memberof SubstituteInfo
     */
    optIn?: string | null;
    /**
     * Allows user to provide a specific product that should be substituted if substitution occurs.
     * @type {string}
     * @memberof SubstituteInfo
     */
    substituteProductCode?: string | null;
    /**
     * Allows user to provide a specific variant that should be substituted if substitution occurs.
     * @type {string}
     * @memberof SubstituteInfo
     */
    substituteVariantCode?: string | null;
}
/**
 * 
 * @export
 * @interface SuggestedDiscount
 */
export interface SuggestedDiscount {
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
    /**
     * 
     * @type {string}
     * @memberof SuggestedDiscount
     */
    productCode?: string | null;
}
/**
 * 
 * @export
 * @interface Suggestion
 */
export interface Suggestion {
    /**
     * Used for future inventory suggestions.
     * @type {string}
     * @memberof Suggestion
     */
    futureDate?: string | null;
    /**
     * Location Code
     * @type {string}
     * @memberof Suggestion
     */
    locationCode?: string | null;
    /**
     * Unique identifier for the product.
     * @type {string}
     * @memberof Suggestion
     */
    productCode?: string | null;
    /**
     * Quantity
     * @type {number}
     * @memberof Suggestion
     */
    quantity?: number;
    /**
     * Indicate whether suggestion is Transfer or Future.
     * @type {string}
     * @memberof Suggestion
     */
    suggestionType?: string | null;
    /**
     * Used in STH Consolidation, to indicate consolidation location on Transfer suggestion.
     * @type {string}
     * @memberof Suggestion
     */
    transferToLocationCode?: string | null;
}
/**
 * 
 * @export
 * @interface TaskInput
 */
export interface TaskInput {
    /**
     * 
     * @type {string}
     * @memberof TaskInput
     */
    helpMessage?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TaskInput
     */
    label?: string | null;
    /**
     * 
     * @type {number}
     * @memberof TaskInput
     */
    maxLength?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TaskInput
     */
    maximum?: number;
    /**
     * 
     * @type {number}
     * @memberof TaskInput
     */
    minLength?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TaskInput
     */
    minimum?: number;
    /**
     * 
     * @type {string}
     * @memberof TaskInput
     */
    name?: string | null;
    /**
     * 
     * @type {Array<any>}
     * @memberof TaskInput
     */
    options?: Array<any> | null;
    /**
     * 
     * @type {string}
     * @memberof TaskInput
     */
    pattern?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof TaskInput
     */
    required?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof TaskInput
     */
    type?: string | null;
}
/**
 * 
 * @export
 * @interface ThresholdMessage
 */
export interface ThresholdMessage {
    /**
     * 
     * @type {number}
     * @memberof ThresholdMessage
     */
    discountId?: number;
    /**
     * 
     * @type {string}
     * @memberof ThresholdMessage
     */
    message?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ThresholdMessage
     */
    requiresCouponCode?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ThresholdMessage
     */
    showInCart?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ThresholdMessage
     */
    showOnCheckout?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ThresholdMessage
     */
    thresholdValue?: number;
}
/**
 * 
 * @export
 * @interface Trial
 */
export interface Trial {
    /**
     * Trial duration in days
     * @type {number}
     * @memberof Trial
     */
    duration?: number;
    /**
     * Indicates if the trial is enabled
     * @type {boolean}
     * @memberof Trial
     */
    enabled?: boolean;
    /**
     * Product code to substitute once the trial period is finished.
     * @type {string}
     * @memberof Trial
     */
    substituteProductCode?: string | null;
    /**
     * Configurable Options to substitute once the trial period is finished.
     * @type {Array<CommerceRuntimeProductOption>}
     * @memberof Trial
     */
    substituteProductOptions?: Array<CommerceRuntimeProductOption> | null;
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
}
/**
 * Represents the validity window for a Blanket Order.
 * Call-off orders can only be placed while the current date is within this period.
 * @export
 * @interface ValidityPeriod
 */
export interface ValidityPeriod {
    /**
     * End date of the validity period. Must be after StartDate.
     * @type {string}
     * @memberof ValidityPeriod
     */
    endDate?: string;
    /**
     * Start date of the validity period. Must be today or in the future on creation.
     * @type {string}
     * @memberof ValidityPeriod
     */
    startDate?: string;
}
/**
 * Details of the wishlist, items listed in the wishlist, and any system messages.
 * @export
 * @interface Wishlist
 */
export interface Wishlist {
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof Wishlist
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * List of messages displayed by the system based on the last cart action, for example, when a product price has changed or is out-of-stock. System-supplied and read-only.
     * @type {Array<CommerceRuntimeChangeMessage>}
     * @memberof Wishlist
     */
    changeMessages?: Array<CommerceRuntimeChangeMessage> | null;
    /**
     * Unique identifier of the channel for this item.
     * @type {string}
     * @memberof Wishlist
     */
    channelCode?: string | null;
    /**
     * ISO Currency Code. Currently, only USD is supported.
     * @type {string}
     * @memberof Wishlist
     */
    currencyCode?: string | null;
    /**
     * Determines the interaction type that a customer will use to create this object.
     * Valid values are: Website, Store, Call, Unknown
     * @type {string}
     * @memberof Wishlist
     */
    customerInteractionType?: string | null;
    /**
     * Custom data for a given vendor set within the commerce process.
     * @type {object}
     * @memberof Wishlist
     */
    data?: object | null;
    /**
     * List of Mozu.CommerceRuntime.Contracts.Commerce.ThresholdMessage objects that are valid for the current value of the cart/order.
     * @type {Array<ThresholdMessage>}
     * @memberof Wishlist
     */
    discountThresholdMessages?: Array<ThresholdMessage> | null;
    /**
     * Amount of the discounts applied to all items in the cart. This is a negative number.  This also includes the order level discounts.
     * @type {number}
     * @memberof Wishlist
     */
    discountTotal?: number | null;
    /**
     * Combined price for all cart items, including all selected options as well as any discounts.
     * @type {number}
     * @memberof Wishlist
     */
    discountedSubtotal?: number | null;
    /**
     * Subtotal minus the discounted total
     * @type {number}
     * @memberof Wishlist
     */
    discountedTotal?: number | null;
    /**
     * When the order will no longer be active. That is, the order is considered abandoned. 
     * Orders of anonymous shoppers expire after 14 days of inactivity. 
     * An order never expires for shoppers who are logged into their account. 
     * Date in UTC Date/Time.
     * @type {string}
     * @memberof Wishlist
     */
    expirationDate?: string | null;
    /**
     * Extra properties (key-value pairs) that extend the primary object. Think of this as a property bag of string keys and string values.
     * @type {Array<ExtendedProperty>}
     * @memberof Wishlist
     */
    extendedProperties?: Array<ExtendedProperty> | null;
    /**
     * Not implemented. Total cost of fees for all items in the cart.
     * @type {number}
     * @memberof Wishlist
     */
    feeTotal?: number | null;
    /**
     * 
     * @type {FulfillmentInfo}
     * @memberof Wishlist
     */
    fulfillmentInfo?: FulfillmentInfo;
    /**
     * Total tax on handling
     * @type {number}
     * @memberof Wishlist
     */
    handlingTaxTotal?: number | null;
    /**
     * Unique identifier of the CommerceAggregate object (e.g. order, cart, wishlist, etc.).
     * @type {string}
     * @memberof Wishlist
     */
    id?: string | null;
    /**
     * Not implemented. Tax does not appear on cart.
     * @type {number}
     * @memberof Wishlist
     */
    itemTaxTotal?: number | null;
    /**
     * Occasionally the commerce runtime may validate that item/product names, descriptions, and prices have not changed. 
     * If changed, it updates LastValidationDate.
     * @type {string}
     * @memberof Wishlist
     */
    lastValidationDate?: string | null;
    /**
     * Line Item Subtotals with Order Adjustments
     * @type {number}
     * @memberof Wishlist
     */
    lineItemSubtotalWithOrderAdjustments?: number | null;
    /**
     * The discount that has been applied to the cart itself. If multiple discounts exist, this is the discount that the system applies because it offers the best savings for the shopper. This is a negative number.
     * @type {Array<CommerceRuntimeAppliedDiscount>}
     * @memberof Wishlist
     */
    orderDiscounts?: Array<CommerceRuntimeAppliedDiscount> | null;
    /**
     * 
     * @type {Array<SuggestedDiscount>}
     * @memberof Wishlist
     */
    rejectedDiscounts?: Array<SuggestedDiscount> | null;
    /**
     * Shipping Amount before discount and adjustments
     * @type {number}
     * @memberof Wishlist
     */
    shippingAmountBeforeDiscountsAndAdjustments?: number | null;
    /**
     * Shipping total without discounts applied.
     * @type {number}
     * @memberof Wishlist
     */
    shippingSubTotal?: number | null;
    /**
     * Not implemented. Tax does not appear on cart.
     * @type {number}
     * @memberof Wishlist
     */
    shippingTaxTotal?: number | null;
    /**
     * Shipping does not appear on cart.
     * @type {number}
     * @memberof Wishlist
     */
    shippingTotal?: number | null;
    /**
     * Unique identifier of the Site.
     * @type {number}
     * @memberof Wishlist
     */
    siteId?: number | null;
    /**
     * Combined price for all cart items, including all selected options but excluding any discounts.
     * @type {number}
     * @memberof Wishlist
     */
    subtotal?: number | null;
    /**
     * 
     * @type {Array<SuggestedDiscount>}
     * @memberof Wishlist
     */
    suggestedDiscounts?: Array<SuggestedDiscount> | null;
    /**
     * Storage for any additional/custom tax data.
     * @type {object}
     * @memberof Wishlist
     */
    taxData?: object | null;
    /**
     * Tax does not appear on cart.
     * @type {number}
     * @memberof Wishlist
     */
    taxTotal?: number | null;
    /**
     * Unique identifier of the Tenant.
     * @type {number}
     * @memberof Wishlist
     */
    tenantId?: number | null;
    /**
     * Final total amount of the order including all discounts, shipping, and tax.
     * @type {number}
     * @memberof Wishlist
     */
    total?: number | null;
    /**
     * Unique identifier of the shopper who created the cart.
     * @type {string}
     * @memberof Wishlist
     */
    userId?: string | null;
    /**
     * Identifies the Visit ID that was current when the order was placed or when the cart was last updated.
     * @type {string}
     * @memberof Wishlist
     */
    visitId?: string | null;
    /**
     * Identifies the web session used to place the order or last update the cart.
     * @type {string}
     * @memberof Wishlist
     */
    webSessionId?: string | null;
    /**
     * Unique identifier of the customer account.
     * @type {number}
     * @memberof Wishlist
     */
    customerAccountId?: number | null;
    /**
     * Id in an external system this item may have been imported from
     * @type {string}
     * @memberof Wishlist
     */
    externalId?: string | null;
    /**
     * Date this item was imported
     * @type {string}
     * @memberof Wishlist
     */
    importDate?: string | null;
    /**
     * Was this object imported from an external system?
     * @type {boolean}
     * @memberof Wishlist
     */
    isImport?: boolean | null;
    /**
     * List of items in the wishlist.
     * @type {Array<WishlistItem>}
     * @memberof Wishlist
     */
    items?: Array<WishlistItem> | null;
    /**
     * Name of the list that is display or potentially shared (e.g. friends and family may view this description if the list is public and the list owner may see this description when viewing the list)
     * @type {string}
     * @memberof Wishlist
     */
    name?: string | null;
    /**
     * Is the wishlist public, viewable only through a shared link, or private (only the owner of the list may view the wishlist)?
     * @type {string}
     * @memberof Wishlist
     */
    privacyType?: string | null;
    /**
     * The wishlist sort order.  Useful for scenarios where there is a default wishlist and other wishlists or arbitrary ordering
     * @type {number}
     * @memberof Wishlist
     */
    sortOrder?: number | null;
    /**
     * Open-ended Wishlist type, e.g. giftlist, gift, wish, wishlist, wedding, baby.  If the merchant does not need this level of granularity this is always null.
     * @type {string}
     * @memberof Wishlist
     */
    typeTag?: string | null;
    /**
     * Version for concurrency purposes
     * @type {string}
     * @memberof Wishlist
     */
    version?: string | null;
}
/**
 * 
 * @export
 * @interface WishlistAllOf
 */
export interface WishlistAllOf {
    /**
     * Unique identifier of the customer account.
     * @type {number}
     * @memberof WishlistAllOf
     */
    customerAccountId?: number | null;
    /**
     * Id in an external system this item may have been imported from
     * @type {string}
     * @memberof WishlistAllOf
     */
    externalId?: string | null;
    /**
     * Date this item was imported
     * @type {string}
     * @memberof WishlistAllOf
     */
    importDate?: string | null;
    /**
     * Was this object imported from an external system?
     * @type {boolean}
     * @memberof WishlistAllOf
     */
    isImport?: boolean | null;
    /**
     * List of items in the wishlist.
     * @type {Array<WishlistItem>}
     * @memberof WishlistAllOf
     */
    items?: Array<WishlistItem> | null;
    /**
     * Name of the list that is display or potentially shared (e.g. friends and family may view this description if the list is public and the list owner may see this description when viewing the list)
     * @type {string}
     * @memberof WishlistAllOf
     */
    name?: string | null;
    /**
     * Is the wishlist public, viewable only through a shared link, or private (only the owner of the list may view the wishlist)?
     * @type {string}
     * @memberof WishlistAllOf
     */
    privacyType?: string | null;
    /**
     * The wishlist sort order.  Useful for scenarios where there is a default wishlist and other wishlists or arbitrary ordering
     * @type {number}
     * @memberof WishlistAllOf
     */
    sortOrder?: number | null;
    /**
     * Open-ended Wishlist type, e.g. giftlist, gift, wish, wishlist, wedding, baby.  If the merchant does not need this level of granularity this is always null.
     * @type {string}
     * @memberof WishlistAllOf
     */
    typeTag?: string | null;
    /**
     * Version for concurrency purposes
     * @type {string}
     * @memberof WishlistAllOf
     */
    version?: string | null;
}
/**
 * Paged collection of wishlists.
 * @export
 * @interface WishlistCollection
 */
export interface WishlistCollection {
    /**
     * 
     * @type {Array<Wishlist>}
     * @memberof WishlistCollection
     */
    items?: Array<Wishlist> | null;
    /**
     * 
     * @type {number}
     * @memberof WishlistCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof WishlistCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof WishlistCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof WishlistCollection
     */
    totalCount?: number;
}
/**
 * A single line item of an order.
 * @export
 * @interface WishlistItem
 */
export interface WishlistItem {
    /**
     * Order Level taxable sub total
     * @type {number}
     * @memberof WishlistItem
     */
    adjustedLineItemSubtotal?: number | null;
    /**
     * 
     * @type {CoreApiContractsAuditInfo}
     * @memberof WishlistItem
     */
    auditInfo?: CoreApiContractsAuditInfo;
    /**
     * Track the discountId from which the item was auto added
     * @type {number}
     * @memberof WishlistItem
     */
    autoAddDiscountId?: number | null;
    /**
     * List of Child Item Ids for this order item
     * @type {Array<string>}
     * @memberof WishlistItem
     */
    childItemIds?: Array<string> | null;
    /**
     * Custom data for a given vendor set within the commerce process.
     * @type {object}
     * @memberof WishlistItem
     */
    data?: object | null;
    /**
     * How much the shopper saves with the applied discount or sale price. This is a negative number.
     * @type {number}
     * @memberof WishlistItem
     */
    discountTotal?: number | null;
    /**
     * Subtotal minus any discounts.
     * @type {number}
     * @memberof WishlistItem
     */
    discountedTotal?: number | null;
    /**
     * Indicate Duty Amount for this item.
     * @type {number}
     * @memberof WishlistItem
     */
    dutyAmount?: number | null;
    /**
     * Line item extended total (quantity multiplied by unit extended price) before discounts.
     * @type {number}
     * @memberof WishlistItem
     */
    extendedTotal?: number | null;
    /**
     * Not implemented. Total cost of fees that apply to this item.
     * @type {number}
     * @memberof WishlistItem
     */
    feeTotal?: number | null;
    /**
     * Product-level handling fee for this item (e.g. special packaging, hazmat fees).
     * This does NOT include order-level handling fees — those are in Mozu.CommerceRuntime.Contracts.Commerce.CommerceItem.WeightedOrderHandlingFee.
     * Total handling on the shipment = HandlingAmount + WeightedOrderHandlingFee.
     * @type {number}
     * @memberof WishlistItem
     */
    handlingAmount?: number | null;
    /**
     * 
     * @type {Array<InventoryTags>}
     * @memberof WishlistItem
     */
    inventoryTags?: Array<InventoryTags> | null;
    /**
     * Assembly Required for this order item
     * @type {boolean}
     * @memberof WishlistItem
     */
    isAssemblyRequired?: boolean;
    /**
     * If true, the cart item lists a product that can be purchased or fulfilled at regular intervals, for example, monthly billing or a subscription.
     * @type {boolean}
     * @memberof WishlistItem
     */
    isRecurring?: boolean | null;
    /**
     * Not implemented. If true, the cart item is eligible for tax.
     * @type {boolean}
     * @memberof WishlistItem
     */
    isTaxable?: boolean | null;
    /**
     * Total price of taxes that apply to products in this item.
     * @type {number}
     * @memberof WishlistItem
     */
    itemTaxTotal?: number | null;
    /**
     * The line id assigned to the order item. Visible only in the Admin, this is set from the Admin or
     * in CommerceRuntime when a cart is converted to an order.
     * @type {number}
     * @memberof WishlistItem
     */
    lineId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof WishlistItem
     */
    lineItemAdjustment?: number | null;
    /**
     * Locale code for language that appears in text and descriptions on the site, for example, en_US. 
     * This is not the currency code. Currently only en_US is supported.
     * @type {string}
     * @memberof WishlistItem
     */
    localeCode?: string | null;
    /**
     * Indicates Parent Item Id for this order item
     * @type {string}
     * @memberof WishlistItem
     */
    parentItemId?: string | null;
    /**
     * 
     * @type {CommerceRuntimeProduct}
     * @memberof WishlistItem
     */
    product?: CommerceRuntimeProduct;
    /**
     * 
     * @type {AppliedLineItemProductDiscount}
     * @memberof WishlistItem
     */
    productDiscount?: AppliedLineItemProductDiscount;
    /**
     * A list of discounts applied to the product
     * @type {Array<AppliedLineItemProductDiscount>}
     * @memberof WishlistItem
     */
    productDiscounts?: Array<AppliedLineItemProductDiscount> | null;
    /**
     * The location where the product is being purchased.. default is null. Products can have different prices
     * by purchaseLocation via custom priceListResolution...
     * @type {string}
     * @memberof WishlistItem
     */
    purchaseLocation?: string | null;
    /**
     * Number of products ordered.
     * @type {number}
     * @memberof WishlistItem
     */
    quantity?: number;
    /**
     * Shipping amount before Discounts and adjustments
     * @type {number}
     * @memberof WishlistItem
     */
    shippingAmountBeforeDiscountsAndAdjustments?: number | null;
    /**
     * A discount applied to the shipping
     * @type {Array<AppliedLineItemShippingDiscount>}
     * @memberof WishlistItem
     */
    shippingDiscounts?: Array<AppliedLineItemShippingDiscount> | null;
    /**
     * Total price of taxes that apply to the shipping of this item.
     * @type {number}
     * @memberof WishlistItem
     */
    shippingTaxTotal?: number | null;
    /**
     * Total price of shipping that apply to this item.
     * @type {number}
     * @memberof WishlistItem
     */
    shippingTotal?: number | null;
    /**
     * 
     * @type {SubstituteInfo}
     * @memberof WishlistItem
     */
    substituteInfo?: SubstituteInfo;
    /**
     * Line item subtotal (quantity multiplied by price) before discounts.
     * @type {number}
     * @memberof WishlistItem
     */
    subtotal?: number | null;
    /**
     * Storage for any additional/custom tax data.
     * @type {object}
     * @memberof WishlistItem
     */
    taxData?: object | null;
    /**
     * Line item subtotal (quantity multiplied by price) before discounts.
     * @type {number}
     * @memberof WishlistItem
     */
    taxableTotal?: number | null;
    /**
     * Total price of this cart item taking into account any discounts.
     * @type {number}
     * @memberof WishlistItem
     */
    total?: number | null;
    /**
     * Line item total with line item, Tax, Weighted Tax with Weighted shipping and handling costs
     * @type {number}
     * @memberof WishlistItem
     */
    totalWithWeightedShippingAndHandling?: number | null;
    /**
     * Taxable Subtotal including Weighted Order amounts
     * @type {number}
     * @memberof WishlistItem
     */
    totalWithoutWeightedShippingAndHandling?: number | null;
    /**
     * 
     * @type {CommerceUnitPrice}
     * @memberof WishlistItem
     */
    unitPrice?: CommerceUnitPrice;
    /**
     * Order Level Manual Adjustment applied to this Item
     * @type {number}
     * @memberof WishlistItem
     */
    weightedOrderAdjustment?: number | null;
    /**
     * Order Level Discount applied to this Item
     * @type {number}
     * @memberof WishlistItem
     */
    weightedOrderDiscount?: number | null;
    /**
     * Order Level Duty applied to this Item
     * @type {number}
     * @memberof WishlistItem
     */
    weightedOrderDuty?: number | null;
    /**
     * Order-level handling manual adjustment allocated to this item.
     * @type {number}
     * @memberof WishlistItem
     */
    weightedOrderHandlingAdjustment?: number | null;
    /**
     * Order-level handling fee allocated to this item (e.g. flat handling fee spread across all items).
     * This is separate from product-level handling in Mozu.CommerceRuntime.Contracts.Commerce.CommerceItem.HandlingAmount.
     * Total handling on the shipment = HandlingAmount + WeightedOrderHandlingFee.
     * @type {number}
     * @memberof WishlistItem
     */
    weightedOrderHandlingFee?: number | null;
    /**
     * Order-level handling fee discount allocated to this item.
     * @type {number}
     * @memberof WishlistItem
     */
    weightedOrderHandlingFeeDiscount?: number | null;
    /**
     * Total handling tax for this item (covers both product-level and order-level handling tax combined).
     * On the shipment item, this is split into: HandlingTax (total) and WeightedOrderHandlingFeeTax (order-level portion only).
     * @type {number}
     * @memberof WishlistItem
     */
    weightedOrderHandlingFeeTax?: number | null;
    /**
     * Order Level Shipping applied to this Item
     * @type {number}
     * @memberof WishlistItem
     */
    weightedOrderShipping?: number | null;
    /**
     * Order Level Shipping discount applied to this Item
     * @type {number}
     * @memberof WishlistItem
     */
    weightedOrderShippingDiscount?: number | null;
    /**
     * Order Level Shipping Manual Adjustment applied to this Item
     * @type {number}
     * @memberof WishlistItem
     */
    weightedOrderShippingManualAdjustment?: number | null;
    /**
     * Order Level Shipping Tax applied to this Item
     * @type {number}
     * @memberof WishlistItem
     */
    weightedOrderShippingTax?: number | null;
    /**
     * Order Level tax applied to this Item
     * @type {number}
     * @memberof WishlistItem
     */
    weightedOrderTax?: number | null;
    /**
     * Comments for the wishlist item that are entered by the wishlist owner
     * @type {string}
     * @memberof WishlistItem
     */
    comments?: string | null;
    /**
     * Unique identifier of the wishlist line item. System-supplied and read-only.
     * @type {string}
     * @memberof WishlistItem
     */
    id?: string | null;
    /**
     * Determines if the item is using external or internal(catalog) pricing
     * @type {string}
     * @memberof WishlistItem
     */
    priceMode?: string | null;
    /**
     * Wishlist item priority that is a hint to how much this item is needed or desired
     * @type {string}
     * @memberof WishlistItem
     */
    priorityType?: string | null;
    /**
     * Is the item purchasable?
     * @type {string}
     * @memberof WishlistItem
     */
    purchasableStatusType?: string | null;
}
/**
 * 
 * @export
 * @interface WishlistItemAllOf
 */
export interface WishlistItemAllOf {
    /**
     * Comments for the wishlist item that are entered by the wishlist owner
     * @type {string}
     * @memberof WishlistItemAllOf
     */
    comments?: string | null;
    /**
     * Unique identifier of the wishlist line item. System-supplied and read-only.
     * @type {string}
     * @memberof WishlistItemAllOf
     */
    id?: string | null;
    /**
     * Determines if the item is using external or internal(catalog) pricing
     * @type {string}
     * @memberof WishlistItemAllOf
     */
    priceMode?: string | null;
    /**
     * Wishlist item priority that is a hint to how much this item is needed or desired
     * @type {string}
     * @memberof WishlistItemAllOf
     */
    priorityType?: string | null;
    /**
     * Is the item purchasable?
     * @type {string}
     * @memberof WishlistItemAllOf
     */
    purchasableStatusType?: string | null;
}
/**
 * Paged collection of wishlists.
 * @export
 * @interface WishlistItemCollection
 */
export interface WishlistItemCollection {
    /**
     * 
     * @type {Array<WishlistItem>}
     * @memberof WishlistItemCollection
     */
    items?: Array<WishlistItem> | null;
    /**
     * 
     * @type {number}
     * @memberof WishlistItemCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof WishlistItemCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof WishlistItemCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof WishlistItemCollection
     */
    totalCount?: number;
}
