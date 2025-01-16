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
    cityOrTown?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    stateOrProvince?: string | null;
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
    countryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    addressType?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof Address
     */
    isValidated?: boolean | null;
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
 * 
 * @export
 * @interface AppeasementReason
 */
export interface AppeasementReason {
    /**
     * 
     * @type {string}
     * @memberof AppeasementReason
     */
    reasonCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppeasementReason
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppeasementReason
     */
    moreInfo?: string | null;
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
    /**
     * Stores any custom data sent from external discounts.
     * @type {object}
     * @memberof AppliedProductDiscount
     */
    data?: object | null;
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
     * Indicates if item is not eligible for return because if passed the return window
     * @type {boolean}
     * @memberof AppliedReturnRuleInfo
     */
    returnWindowClosed?: boolean | null;
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
     * @type {string}
     * @memberof AuditRecord
     */
    id?: string | null;
    /**
     * List of changes for this audit history entry.
     * @type {Array<AuditRecordChange>}
     * @memberof AuditRecord
     */
    changes?: Array<AuditRecordChange> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof AuditRecord
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * Group all related audit changes into AuditRecordChange.
 * @export
 * @interface AuditRecordChange
 */
export interface AuditRecordChange {
    /**
     * Indicate type of change like Add, Update, Remove.
     * @type {string}
     * @memberof AuditRecordChange
     */
    type?: string | null;
    /**
     * This will applicable only to the nested objects (Collection) on the quote like Quote Items, Destination contacts.
     * This field will indicate which item in the collection got modified exactly.
     * Null path means it's not nested on the quote object.
     * @type {string}
     * @memberof AuditRecordChange
     */
    path?: string | null;
    /**
     * List of actual changes.
     * @type {Array<AuditRecordChangeField>}
     * @memberof AuditRecordChange
     */
    fields?: Array<AuditRecordChangeField> | null;
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
     * Old value of the field.
     * @type {string}
     * @memberof AuditRecordChangeField
     */
    oldValue?: string | null;
    /**
     * Newly updated value of the field.
     * @type {string}
     * @memberof AuditRecordChangeField
     */
    newValue?: string | null;
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
    returnProcessingFee?: number | null;
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
    quantity?: number;
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
     * @type {Contact}
     * @memberof BillingInfo
     */
    billingContact?: Contact;
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
 * @interface BulkShipmentItemAdjustment
 */
export interface BulkShipmentItemAdjustment {
    /**
     * 
     * @type {number}
     * @memberof BulkShipmentItemAdjustment
     */
    itemId?: number;
    /**
     * Unit price override
     * @type {number}
     * @memberof BulkShipmentItemAdjustment
     */
    overridePrice?: number | null;
    /**
     * 
     * @type {AppeasementReason}
     * @memberof BulkShipmentItemAdjustment
     */
    appeasementReason?: AppeasementReason;
}
/**
 * 
 * @export
 * @interface CancelReasonCollection
 */
export interface CancelReasonCollection {
    /**
     * 
     * @type {number}
     * @memberof CancelReasonCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<CancelReasonItem>}
     * @memberof CancelReasonCollection
     */
    items?: Array<CancelReasonItem> | null;
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
    reasonCode?: string | null;
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
}
/**
 * 
 * @export
 * @interface CanceledItem
 */
export interface CanceledItem {
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    originalQuantity?: number | null;
    /**
     * 
     * @type {CanceledReason}
     * @memberof CanceledItem
     */
    canceledReason?: CanceledReason;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CanceledItem
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    lineId?: number;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    originalOrderItemId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    parentId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    productCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    variationProductCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    optionAttributeFQN?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    fulfillmentLocationCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    imageUrl?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CanceledItem
     */
    isTaxable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    quantity?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    unitPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    actualPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    overridePrice?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    itemDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    lineItemCost?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    itemTax?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    shipping?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    shippingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    shippingTax?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    handling?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    handlingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    handlingTax?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    duty?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CanceledItem
     */
    isPackagedStandAlone?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    readyForPickupQuantity?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    backorderReleaseDate?: string | null;
    /**
     * 
     * @type {CommerceRuntimePackageMeasurements}
     * @memberof CanceledItem
     */
    measurements?: CommerceRuntimePackageMeasurements;
    /**
     * 
     * @type {Array<CommerceRuntimeProductOption>}
     * @memberof CanceledItem
     */
    options?: Array<CommerceRuntimeProductOption> | null;
    /**
     * 
     * @type {object}
     * @memberof CanceledItem
     */
    data?: object | null;
    /**
     * 
     * @type {object}
     * @memberof CanceledItem
     */
    taxData?: object | null;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    weightedShipmentAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    weightedLineItemTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    weightedShippingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    weightedShippingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    weightedHandlingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    weightedHandlingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    weightedDutyAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    taxableShipping?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    taxableLineItemCost?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    taxableHandling?: number;
    /**
     * 
     * @type {Array<FulfillmentField>}
     * @memberof CanceledItem
     */
    fulfillmentFields?: Array<FulfillmentField> | null;
    /**
     * 
     * @type {boolean}
     * @memberof CanceledItem
     */
    isAssemblyRequired?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    parentItemId?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof CanceledItem
     */
    childItemIds?: Array<string> | null;
    /**
     * 
     * @type {Array<GiftCard>}
     * @memberof CanceledItem
     */
    giftCards?: Array<GiftCard> | null;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    locatorName?: string | null;
    /**
     * 
     * @type {Array<InventoryTags>}
     * @memberof CanceledItem
     */
    inventoryTags?: Array<InventoryTags> | null;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    lineItemAdjustment?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof CanceledItem
     */
    isReservedInventory?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    cartItemId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    sku?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    partNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    upc?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CanceledItem
     */
    isSubstitutable?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    originalLineId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    substituteQuantity?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    purchaseLocation?: string | null;
    /**
     * Indicate item is gift or not
     * @type {boolean}
     * @memberof CanceledItem
     */
    isGift?: boolean | null;
    /**
     * Gift message for item
     * @type {string}
     * @memberof CanceledItem
     */
    giftMessage?: string | null;
    /**
     * Determines if the item is using external or internal(catalog) pricing
     * @type {string}
     * @memberof CanceledItem
     */
    priceMode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    serialNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    condition?: string | null;
    /**
     * 
     * @type {SubstituteInfo}
     * @memberof CanceledItem
     */
    substituteInfo?: SubstituteInfo;
    /**
     * 
     * @type {boolean}
     * @memberof CanceledItem
     */
    allowsSubstitution?: boolean | null;
    /**
     * 
     * @type {ReturnRuleInfo}
     * @memberof CanceledItem
     */
    returnRuleInfo?: ReturnRuleInfo;
}
/**
 * 
 * @export
 * @interface CanceledReason
 */
export interface CanceledReason {
    /**
     * 
     * @type {string}
     * @memberof CanceledReason
     */
    reasonCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CanceledReason
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CanceledReason
     */
    moreInfo?: string | null;
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
 * Details of the current cart, including shopper's user ID, items listed in the cart, and any system messages. 
 * For each item, contains the list of available discounts and the actual discount applied to the cart item.
 * @export
 * @interface Cart
 */
export interface Cart {
    /**
     * List of items in the cart.
     * @type {Array<CartItem>}
     * @memberof Cart
     */
    items?: Array<CartItem> | null;
    /**
     * Coupon codes associated with this order.  Only set on order import.
     * @type {Array<string>}
     * @memberof Cart
     */
    couponCodes?: Array<string> | null;
    /**
     * A list of invalid coupons that were attempted on the cart
     * @type {Array<InvalidCoupon>}
     * @memberof Cart
     */
    invalidCoupons?: Array<InvalidCoupon> | null;
    /**
     * Pricelist code
     * @type {string}
     * @memberof Cart
     */
    priceListCode?: string | null;
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
     * Inventory Reservation id for a cart.
     * @type {string}
     * @memberof Cart
     */
    reservationId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Cart
     */
    zipCode?: string | null;
    /**
     * Unique identifier of the shopper who created the cart.
     * @type {string}
     * @memberof Cart
     */
    userId?: string | null;
    /**
     * Unique identifier of the CommerceAggregate object (e.g. order, cart, wishlist, etc.).
     * @type {string}
     * @memberof Cart
     */
    id?: string | null;
    /**
     * Unique identifier of the Tenant.
     * @type {number}
     * @memberof Cart
     */
    tenantId?: number | null;
    /**
     * Unique identifier of the Site.
     * @type {number}
     * @memberof Cart
     */
    siteId?: number | null;
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
     * Determines the interaction type that a customer will use to create this object.
     * Valid values are: Website, Store, Call, Unknown
     * @type {string}
     * @memberof Cart
     */
    customerInteractionType?: string | null;
    /**
     * 
     * @type {FulfillmentInfo}
     * @memberof Cart
     */
    fulfillmentInfo?: FulfillmentInfo;
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
    suggestedDiscounts?: Array<SuggestedDiscount> | null;
    /**
     * 
     * @type {Array<SuggestedDiscount>}
     * @memberof Cart
     */
    rejectedDiscounts?: Array<SuggestedDiscount> | null;
    /**
     * Custom data for a given vendor set within the commerce process.
     * @type {object}
     * @memberof Cart
     */
    data?: object | null;
    /**
     * Storage for any additional/custom tax data.
     * @type {object}
     * @memberof Cart
     */
    taxData?: object | null;
    /**
     * Combined price for all cart items, including all selected options but excluding any discounts.
     * @type {number}
     * @memberof Cart
     */
    subtotal?: number | null;
    /**
     * Combined price for all cart items, including all selected options as well as any discounts.
     * @type {number}
     * @memberof Cart
     */
    discountedSubtotal?: number | null;
    /**
     * Amount of the discounts applied to all items in the cart. This is a negative number.  This also includes the order level discounts.
     * @type {number}
     * @memberof Cart
     */
    discountTotal?: number | null;
    /**
     * Subtotal minus the discounted total
     * @type {number}
     * @memberof Cart
     */
    discountedTotal?: number | null;
    /**
     * Shipping does not appear on cart.
     * @type {number}
     * @memberof Cart
     */
    shippingTotal?: number | null;
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
     * Total tax on handling
     * @type {number}
     * @memberof Cart
     */
    handlingTaxTotal?: number | null;
    /**
     * Not implemented. Tax does not appear on cart.
     * @type {number}
     * @memberof Cart
     */
    itemTaxTotal?: number | null;
    /**
     * Tax does not appear on cart.
     * @type {number}
     * @memberof Cart
     */
    taxTotal?: number | null;
    /**
     * Not implemented. Total cost of fees for all items in the cart.
     * @type {number}
     * @memberof Cart
     */
    feeTotal?: number | null;
    /**
     * Final total amount of the order including all discounts, shipping, and tax.
     * @type {number}
     * @memberof Cart
     */
    total?: number | null;
    /**
     * Line Item Subtotals with Order Adjustments
     * @type {number}
     * @memberof Cart
     */
    lineItemSubtotalWithOrderAdjustments?: number | null;
    /**
     * Shipping Amount before discount and adjustments
     * @type {number}
     * @memberof Cart
     */
    shippingAmountBeforeDiscountsAndAdjustments?: number | null;
    /**
     * Occasionally the commerce runtime may validate that item/product names, descriptions, and prices have not changed. 
     * If changed, it updates LastValidationDate.
     * @type {string}
     * @memberof Cart
     */
    lastValidationDate?: string | null;
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
     * List of messages displayed by the system based on the last cart action, for example, when a product price has changed or is out-of-stock. System-supplied and read-only.
     * @type {Array<CommerceRuntimeChangeMessage>}
     * @memberof Cart
     */
    changeMessages?: Array<CommerceRuntimeChangeMessage> | null;
    /**
     * Extra properties (key-value pairs) that extend the primary object. Think of this as a property bag of string keys and string values.
     * @type {Array<ExtendedProperty>}
     * @memberof Cart
     */
    extendedProperties?: Array<ExtendedProperty> | null;
    /**
     * List of Mozu.CommerceRuntime.Contracts.Commerce.ThresholdMessage objects that are valid for the current value of the cart/order.
     * @type {Array<CommerceRuntimeThresholdMessage>}
     * @memberof Cart
     */
    discountThresholdMessages?: Array<CommerceRuntimeThresholdMessage> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof Cart
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * Collection of cart messages returned as a whole. A collection is not paged.
 * @export
 * @interface CartChangeMessageCollection
 */
export interface CartChangeMessageCollection {
    /**
     * 
     * @type {number}
     * @memberof CartChangeMessageCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<CommerceRuntimeChangeMessage>}
     * @memberof CartChangeMessageCollection
     */
    items?: Array<CommerceRuntimeChangeMessage> | null;
}
/**
 * Details of an item in the shopper's cart, such as the product name, stock count, unit price, discounts, quantity ordered, and total price.
 * @export
 * @interface CartItem
 */
export interface CartItem {
    /**
     * Unique identifier of the item in the cart.
     * @type {string}
     * @memberof CartItem
     */
    id?: string | null;
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
     * 
     * @type {SubscriptionInfo}
     * @memberof CartItem
     */
    subscription?: SubscriptionInfo;
    /**
     * Determines if the item is using external or internal(catalog) pricing
     * @type {string}
     * @memberof CartItem
     */
    priceMode?: string | null;
    /**
     * Locale code for language that appears in text and descriptions on the site, for example, en_US. 
     * This is not the currency code. Currently only en_US is supported.
     * @type {string}
     * @memberof CartItem
     */
    localeCode?: string | null;
    /**
     * The location where the product is being purchased.. default is null. Products can have different prices
     * by purchaseLocation via custom priceListResolution...
     * @type {string}
     * @memberof CartItem
     */
    purchaseLocation?: string | null;
    /**
     * The line id assigned to the order item. Visible only in the Admin, this is set from the Admin or
     * in CommerceRuntime when a cart is converted to an order.
     * @type {number}
     * @memberof CartItem
     */
    lineId?: number | null;
    /**
     * 
     * @type {CommerceRuntimeProduct}
     * @memberof CartItem
     */
    product?: CommerceRuntimeProduct;
    /**
     * Number of products ordered.
     * @type {number}
     * @memberof CartItem
     */
    quantity?: number;
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
     * Line item subtotal (quantity multiplied by price) before discounts.
     * @type {number}
     * @memberof CartItem
     */
    subtotal?: number | null;
    /**
     * Line item extended total (quantity multiplied by unit extended price) before discounts.
     * @type {number}
     * @memberof CartItem
     */
    extendedTotal?: number | null;
    /**
     * Line item subtotal (quantity multiplied by price) before discounts.
     * @type {number}
     * @memberof CartItem
     */
    taxableTotal?: number | null;
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
     * Total price of taxes that apply to products in this item.
     * @type {number}
     * @memberof CartItem
     */
    itemTaxTotal?: number | null;
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
     * Handling Amount for this item
     * @type {number}
     * @memberof CartItem
     */
    handlingAmount?: number | null;
    /**
     * Not implemented. Total cost of fees that apply to this item.
     * @type {number}
     * @memberof CartItem
     */
    feeTotal?: number | null;
    /**
     * Total price of this cart item taking into account any discounts.
     * @type {number}
     * @memberof CartItem
     */
    total?: number | null;
    /**
     * 
     * @type {CommerceUnitPrice}
     * @memberof CartItem
     */
    unitPrice?: CommerceUnitPrice;
    /**
     * 
     * @type {CommerceRuntimeAppliedLineItemProductDiscount}
     * @memberof CartItem
     */
    productDiscount?: CommerceRuntimeAppliedLineItemProductDiscount;
    /**
     * A list of discounts applied to the product
     * @type {Array<CommerceRuntimeAppliedLineItemProductDiscount>}
     * @memberof CartItem
     */
    productDiscounts?: Array<CommerceRuntimeAppliedLineItemProductDiscount> | null;
    /**
     * A discount applied to the shipping
     * @type {Array<CommerceRuntimeAppliedLineItemShippingDiscount>}
     * @memberof CartItem
     */
    shippingDiscounts?: Array<CommerceRuntimeAppliedLineItemShippingDiscount> | null;
    /**
     * Custom data for a given vendor set within the commerce process.
     * @type {object}
     * @memberof CartItem
     */
    data?: object | null;
    /**
     * Storage for any additional/custom tax data.
     * @type {object}
     * @memberof CartItem
     */
    taxData?: object | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CartItem
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * Shipping amount before Discounts and adjustments
     * @type {number}
     * @memberof CartItem
     */
    shippingAmountBeforeDiscountsAndAdjustments?: number | null;
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
     * Order Level taxable sub total
     * @type {number}
     * @memberof CartItem
     */
    adjustedLineItemSubtotal?: number | null;
    /**
     * Taxable Subtotal including Weighted Order amounts
     * @type {number}
     * @memberof CartItem
     */
    totalWithoutWeightedShippingAndHandling?: number | null;
    /**
     * Order Level tax applied to this Item
     * @type {number}
     * @memberof CartItem
     */
    weightedOrderTax?: number | null;
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
     * Order Level handling fee applied to this item
     * @type {number}
     * @memberof CartItem
     */
    weightedOrderHandlingFee?: number | null;
    /**
     * Order Level handling fee tax applied to this item
     * @type {number}
     * @memberof CartItem
     */
    weightedOrderHandlingFeeTax?: number | null;
    /**
     * Order Level handling fee discount applied to this item
     * @type {number}
     * @memberof CartItem
     */
    weightedOrderHandlingFeeDiscount?: number | null;
    /**
     * Order Level Duty applied to this Item
     * @type {number}
     * @memberof CartItem
     */
    weightedOrderDuty?: number | null;
    /**
     * Line item total with line item, Tax, Weighted Tax with Weighted shipping and handling costs
     * @type {number}
     * @memberof CartItem
     */
    totalWithWeightedShippingAndHandling?: number | null;
    /**
     * Order level handling adjusment that applies to this item.
     * @type {number}
     * @memberof CartItem
     */
    weightedOrderHandlingAdjustment?: number | null;
    /**
     * Track the discoutid from which the item was auto added
     * @type {number}
     * @memberof CartItem
     */
    autoAddDiscountId?: number | null;
    /**
     * Assembly Required for this order item
     * @type {boolean}
     * @memberof CartItem
     */
    isAssemblyRequired?: boolean;
    /**
     * List of Child Item Ids for this order item
     * @type {Array<string>}
     * @memberof CartItem
     */
    childItemIds?: Array<string> | null;
    /**
     * Indicates Parent Item Id for this order item
     * @type {string}
     * @memberof CartItem
     */
    parentItemId?: string | null;
    /**
     * 
     * @type {Array<InventoryTags>}
     * @memberof CartItem
     */
    inventoryTags?: Array<InventoryTags> | null;
    /**
     * 
     * @type {number}
     * @memberof CartItem
     */
    lineItemAdjustment?: number | null;
    /**
     * Indicate Duty Amount for this item.
     * @type {number}
     * @memberof CartItem
     */
    dutyAmount?: number | null;
    /**
     * 
     * @type {SubstituteInfo}
     * @memberof CartItem
     */
    substituteInfo?: SubstituteInfo;
}
/**
 * Collection of items in the cart. A collection is not paged.
 * @export
 * @interface CartItemCollection
 */
export interface CartItemCollection {
    /**
     * 
     * @type {number}
     * @memberof CartItemCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<CartItem>}
     * @memberof CartItemCollection
     */
    items?: Array<CartItem> | null;
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
     * Number of items in the active cart.
     * @type {number}
     * @memberof CartSummary
     */
    itemCount?: number | null;
    /**
     * Total quantity of all items in the cart
     * @type {number}
     * @memberof CartSummary
     */
    totalQuantity?: number | null;
    /**
     * Total cost of items in the active cart.
     * @type {number}
     * @memberof CartSummary
     */
    total?: number | null;
    /**
     * If true, the cart has reached its expiration date (Cart.ExpirationDate) and considered abandoned. 
     * Carts of anonymous shoppers expire after 14 days of inactivity.
     * @type {boolean}
     * @memberof CartSummary
     */
    isExpired?: boolean | null;
    /**
     * If true, the cart is active. A shopper has added an item to a cart.
     * @type {boolean}
     * @memberof CartSummary
     */
    hasActiveCart?: boolean | null;
}
/**
 * Channel used to group sites for commerce purposes.
 * @export
 * @interface Channel
 */
export interface Channel {
    /**
     * Tenant that owns the channel.
     * @type {number}
     * @memberof Channel
     */
    tenantId?: number;
    /**
     * Code to uniquely identify the channel.
     * @type {string}
     * @memberof Channel
     */
    code?: string | null;
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
     * A list of site Id's that this channel contains.
     * @type {Array<number>}
     * @memberof Channel
     */
    siteIds?: Array<number> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof Channel
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * 
 * @export
 * @interface ChannelCollection
 */
export interface ChannelCollection {
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
    pageSize?: number;
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
    totalCount?: number;
    /**
     * 
     * @type {Array<Channel>}
     * @memberof ChannelCollection
     */
    items?: Array<Channel> | null;
}
/**
 * Used to group channels together to manage common channel information.
 * @export
 * @interface ChannelGroup
 */
export interface ChannelGroup {
    /**
     * Tenant that owns the channel.
     * @type {number}
     * @memberof ChannelGroup
     */
    tenantId?: number;
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
     * 
     * @type {AdminUserAuditInfo}
     * @memberof ChannelGroup
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * 
 * @export
 * @interface ChannelGroupCollection
 */
export interface ChannelGroupCollection {
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
    pageSize?: number;
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
    totalCount?: number;
    /**
     * 
     * @type {Array<ChannelGroup>}
     * @memberof ChannelGroupCollection
     */
    items?: Array<ChannelGroup> | null;
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
     * Unique identifier.
     * @type {string}
     * @memberof Checkout
     */
    id?: string | null;
    /**
     * Unique identifier of the Site.
     * @type {number}
     * @memberof Checkout
     */
    siteId?: number;
    /**
     * Unique identifier of the Tenant.
     * @type {number}
     * @memberof Checkout
     */
    tenantId?: number;
    /**
     * A checkout number that is only assigned after the checkout is placed.
     * @type {number}
     * @memberof Checkout
     */
    number?: number | null;
    /**
     * Unique identifier for the cart that was converted to checkout.
     * @type {string}
     * @memberof Checkout
     */
    originalCartId?: string | null;
    /**
     * When the customer placed (submitted) the order.
     * @type {string}
     * @memberof Checkout
     */
    submittedDate?: string | null;
    /**
     * Is this Order Online or Offline? Online means shopper entered at checkout, offline means a phone order.
     * @type {string}
     * @memberof Checkout
     */
    type?: string | null;
    /**
     * List of items in the checkout.
     * @type {Array<CommerceRuntimeOrderItem>}
     * @memberof Checkout
     */
    items?: Array<CommerceRuntimeOrderItem> | null;
    /**
     * List of checkout grouping.
     * @type {Array<CheckoutGrouping>}
     * @memberof Checkout
     */
    groupings?: Array<CheckoutGrouping> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof Checkout
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {Array<Destination>}
     * @memberof Checkout
     */
    destinations?: Array<Destination> | null;
    /**
     * Payment transaction associated with this checkout. It is the entire payment interchange between the merchant 
     * who is forwarding the customer's payment information and the payment service who is authorizing and 
     * capturing payment. Payment can be either by credit card, check, or PayPal.
     * @type {Array<Payment>}
     * @memberof Checkout
     */
    payments?: Array<Payment> | null;
    /**
     * A counter for how much of the total has not been claimed by payments.
     * This is computed by Total - (sum of Payments where State is not Voided/Declined)
     * @type {number}
     * @memberof Checkout
     */
    amountRemainingForPayment?: number;
    /**
     * Does the customer accept marketing
     * @type {boolean}
     * @memberof Checkout
     */
    acceptsMarketing?: boolean | null;
    /**
     * Unique identifier of the customer account.
     * @type {number}
     * @memberof Checkout
     */
    customerAccountId?: number | null;
    /**
     * Email address for checkout
     * @type {string}
     * @memberof Checkout
     */
    email?: string | null;
    /**
     * 
     * @type {AlternateContact}
     * @memberof Checkout
     */
    alternateContact?: AlternateContact;
    /**
     * The customers tax ID. If Customer Account ID exists in the system, will set this.
     * @type {string}
     * @memberof Checkout
     */
    readonly customerTaxId?: string | null;
    /**
     * Unique identifier of the customer account.
     * @type {boolean}
     * @memberof Checkout
     */
    readonly isTaxExempt?: boolean | null;
    /**
     * ISO Currency Code.
     * @type {string}
     * @memberof Checkout
     */
    currencyCode?: string | null;
    /**
     * Pricelist code for the checkout
     * @type {string}
     * @memberof Checkout
     */
    priceListCode?: string | null;
    /**
     * 
     * @type {Array<CommerceRuntimeOrderAttribute>}
     * @memberof Checkout
     */
    attributes?: Array<CommerceRuntimeOrderAttribute> | null;
    /**
     * 
     * @type {ShopperNotes}
     * @memberof Checkout
     */
    shopperNotes?: ShopperNotes;
    /**
     * 
     * @type {Array<string>}
     * @memberof Checkout
     */
    availableActions?: Array<string> | null;
    /**
     * Custom data for a given vendor set within the commerce process.
     * @type {object}
     * @memberof Checkout
     */
    data?: object | null;
    /**
     * Storage for any additional/custom tax data.
     * @type {object}
     * @memberof Checkout
     */
    taxData?: object | null;
    /**
     * Unique identifier of the channel for this item.
     * @type {string}
     * @memberof Checkout
     */
    channelCode?: string | null;
    /**
     * Identifies the location at which the order was placed if the order was placed externally.
     * @type {string}
     * @memberof Checkout
     */
    locationCode?: string | null;
    /**
     * IP address of the user placing the order. (User or customer?)
     * @type {string}
     * @memberof Checkout
     */
    ipAddress?: string | null;
    /**
     * Source device of the user placing the order. (User or customer?)
     * @type {string}
     * @memberof Checkout
     */
    sourceDevice?: string | null;
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
    /**
     * Determines the interaction type that a customer will use to create this object.
     * Valid values are: Website, Store, Call, Unknown
     * @type {string}
     * @memberof Checkout
     */
    customerInteractionType?: string | null;
    /**
     * 
     * @type {Array<CommerceRuntimeAppliedDiscount>}
     * @memberof Checkout
     */
    orderDiscounts?: Array<CommerceRuntimeAppliedDiscount> | null;
    /**
     * Coupon codes associated with this order.
     * @type {Array<string>}
     * @memberof Checkout
     */
    couponCodes?: Array<string> | null;
    /**
     * A list of invalid coupons that were attempted on the order.
     * @type {Array<InvalidCoupon>}
     * @memberof Checkout
     */
    invalidCoupons?: Array<InvalidCoupon> | null;
    /**
     * 
     * @type {Array<SuggestedDiscount>}
     * @memberof Checkout
     */
    suggestedDiscounts?: Array<SuggestedDiscount> | null;
    /**
     * List of Mozu.CommerceRuntime.Contracts.Commerce.ThresholdMessage objects that are valid for the current value of the cart/order.
     * @type {Array<CommerceRuntimeThresholdMessage>}
     * @memberof Checkout
     */
    discountThresholdMessages?: Array<CommerceRuntimeThresholdMessage> | null;
    /**
     * Total duty fees
     * @type {number}
     * @memberof Checkout
     */
    dutyTotal?: number | null;
    /**
     * Total Fees
     * @type {number}
     * @memberof Checkout
     */
    feeTotal?: number;
    /**
     * Subtotal before any coupon codes, taxes, fees, etc.
     * @type {number}
     * @memberof Checkout
     */
    subTotal?: number;
    /**
     * The total value of item-level product discounts.
     * @type {number}
     * @memberof Checkout
     */
    itemLevelProductDiscountTotal?: number;
    /**
     * The total value of order-level (group-level) product discounts.
     * @type {number}
     * @memberof Checkout
     */
    orderLevelProductDiscountTotal?: number;
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
     * Shipping does not appear on cart.
     * @type {number}
     * @memberof Checkout
     */
    shippingSubTotal?: number;
    /**
     * The total value of item-level shipping discounts.
     * @type {number}
     * @memberof Checkout
     */
    itemLevelShippingDiscountTotal?: number;
    /**
     * The total value of order-level (group-level) shipping discounts.
     * @type {number}
     * @memberof Checkout
     */
    orderLevelShippingDiscountTotal?: number;
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
     * Pre-Discounted Handling Subtotal of the CommerceAggregate and its Items.
     * Returns {null} if the calculated value is negative.
     * @type {number}
     * @memberof Checkout
     */
    handlingSubTotal?: number;
    /**
     * The total value of item-level handling discounts.
     * @type {number}
     * @memberof Checkout
     */
    itemLevelHandlingDiscountTotal?: number;
    /**
     * The total value of order-level (group-level) handling discounts.
     * @type {number}
     * @memberof Checkout
     */
    orderLevelHandlingDiscountTotal?: number;
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
     * Final total
     * @type {number}
     * @memberof Checkout
     */
    total?: number;
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
     * @type {number}
     * @memberof CheckoutCollection
     */
    startIndex?: number;
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
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof CheckoutCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<Checkout>}
     * @memberof CheckoutCollection
     */
    items?: Array<Checkout> | null;
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
     * A unique identifier for this grouping.
     * @type {string}
     * @memberof CheckoutGrouping
     */
    id?: string | null;
    /**
     * The DestinationId used by items in this grouping, which may be {null}.
     * @type {string}
     * @memberof CheckoutGrouping
     */
    destinationId?: string | null;
    /**
     * The FulfillmentMethod used by items in this grouping.
     * @type {string}
     * @memberof CheckoutGrouping
     */
    fulfillmentMethod?: string | null;
    /**
     * Identifiers of the items that make up this grouping.
     * @type {Array<string>}
     * @memberof CheckoutGrouping
     */
    orderItemIds?: Array<string> | null;
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
     * Indicates whether a non ship group should combine with a ship group
     * @type {boolean}
     * @memberof CheckoutGrouping
     */
    standaloneGroup?: boolean;
    /**
     * 
     * @type {Array<ShippingDiscount>}
     * @memberof CheckoutGrouping
     */
    shippingDiscounts?: Array<ShippingDiscount> | null;
    /**
     * 
     * @type {Array<CommerceRuntimeAppliedDiscount>}
     * @memberof CheckoutGrouping
     */
    handlingDiscounts?: Array<CommerceRuntimeAppliedDiscount> | null;
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
     * If a shipping method applies directly to this grouping (versus the items), this is the raw shipping amount for the group.
     * @type {number}
     * @memberof CheckoutGrouping
     */
    shippingAmount?: number | null;
    /**
     * The raw shipping amount minus shipping discounts.
     * @type {number}
     * @memberof CheckoutGrouping
     */
    shippingSubTotal?: number;
    /**
     * The total value of item-level shipping discounts applied to this group.
     * @type {number}
     * @memberof CheckoutGrouping
     */
    itemLevelShippingDiscountTotal?: number;
    /**
     * The total value of order-level (group-level) shipping discounts applied to this group.
     * @type {number}
     * @memberof CheckoutGrouping
     */
    orderLevelShippingDiscountTotal?: number;
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
     * The handling fee amount that's applicable to this grouping.
     * @type {number}
     * @memberof CheckoutGrouping
     */
    handlingAmount?: number | null;
    /**
     * The total raw handling amounts minus handling discounts.
     * @type {number}
     * @memberof CheckoutGrouping
     */
    handlingSubTotal?: number;
    /**
     * The total value of item-level handling discounts applied to this group.
     * @type {number}
     * @memberof CheckoutGrouping
     */
    itemLevelHandlingDiscountTotal?: number;
    /**
     * The total value of order-level (group-level) handling discounts applied to this group.
     * @type {number}
     * @memberof CheckoutGrouping
     */
    orderLevelHandlingDiscountTotal?: number;
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
     * @type {Array<PickupItem>}
     * @memberof CollectionOfPickupItem
     */
    items?: Array<PickupItem> | null;
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
    /**
     * 
     * @type {SubstituteInfo}
     * @memberof CommerceItem
     */
    substituteInfo?: SubstituteInfo;
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
    /**
     * Stores any custom data sent from external discounts.
     * @type {object}
     * @memberof CommerceRuntimeAppliedDiscount
     */
    data?: object | null;
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
    /**
     * Stores any custom data sent from external discounts.
     * @type {object}
     * @memberof CommerceRuntimeAppliedLineItemProductDiscount
     */
    data?: object | null;
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
     * Determines if the item is using external or internal(catalog) pricing
     * @type {string}
     * @memberof CommerceRuntimeOrderItem
     */
    priceMode?: string | null;
    /**
     * 
     * @type {ReturnRuleInfo}
     * @memberof CommerceRuntimeOrderItem
     */
    returnRuleInfo?: ReturnRuleInfo;
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
    /**
     * 
     * @type {SubstituteInfo}
     * @memberof CommerceRuntimeOrderItem
     */
    substituteInfo?: SubstituteInfo;
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
     * @type {Array<Tracking>}
     * @memberof CommerceRuntimePackage
     */
    trackings?: Array<Tracking> | null;
    /**
     * PackingSlipItemDetails for this package
     * @type {Array<CommerceRuntimePackingSlipItemDetail>}
     * @memberof CommerceRuntimePackage
     */
    packingSlipItemDetails?: Array<CommerceRuntimePackingSlipItemDetail> | null;
    /**
     * PackingSlipNumber for this package
     * @type {number}
     * @memberof CommerceRuntimePackage
     */
    packingSlipNumber?: number | null;
    /**
     * 
     * @type {Array<Tracking>}
     * @memberof CommerceRuntimePackage
     */
    returnTrackings?: Array<Tracking> | null;
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
 * @interface CommerceRuntimePackageResponse
 */
export interface CommerceRuntimePackageResponse {
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
    trackingNumber?: string | null;
    /**
     * 
     * @type {ShippingLabel}
     * @memberof CommerceRuntimePackageResponse
     */
    label?: ShippingLabel;
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
    integratorId?: string | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimePackingSlipItemDetail
 */
export interface CommerceRuntimePackingSlipItemDetail {
    /**
     * Gets or Sets Attributes
     * @type {{ [key: string]: any; }}
     * @memberof CommerceRuntimePackingSlipItemDetail
     */
    attributes?: { [key: string]: any; } | null;
    /**
     * Gets or Sets LineId
     * @type {number}
     * @memberof CommerceRuntimePackingSlipItemDetail
     */
    lineId?: number | null;
    /**
     * Gets or Sets OriginalOrderItemId
     * @type {string}
     * @memberof CommerceRuntimePackingSlipItemDetail
     */
    originalOrderItemId?: string | null;
    /**
     * Gets or Sets Quantity
     * @type {number}
     * @memberof CommerceRuntimePackingSlipItemDetail
     */
    quantity?: number | null;
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
     * Serial Number
     * @type {string}
     * @memberof CommerceRuntimeProduct
     */
    serialNumber?: string | null;
    /**
     * Condition
     * @type {string}
     * @memberof CommerceRuntimeProduct
     */
    condition?: string | null;
    /**
     * Products bundled with this product (if the current product is a bundle)
     * @type {Array<CommerceRuntimeBundledProduct>}
     * @memberof CommerceRuntimeProduct
     */
    bundledProducts?: Array<CommerceRuntimeBundledProduct> | null;
    /**
     * List of unique product identifiers for an item on shipment
     * @type {Array<FulfillmentField>}
     * @memberof CommerceRuntimeProduct
     */
    fulfillmentFields?: Array<FulfillmentField> | null;
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
    /**
     * Indicate that External Price (TenantOverridePrice) is a Sale Price. And is used to calculate the line item discounts.
     * @type {boolean}
     * @memberof CommerceRuntimeProductPrice
     */
    isOverRidePriceSalePrice?: boolean | null;
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
     * @type {Contact}
     * @memberof CommerceRuntimeShipment
     */
    origin?: Contact;
    /**
     * 
     * @type {Destination}
     * @memberof CommerceRuntimeShipment
     */
    destination?: Destination;
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
     * @type {WorkflowState}
     * @memberof CommerceRuntimeShipment
     */
    workflowState?: WorkflowState;
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
     * @type {Array<CanceledItem>}
     * @memberof CommerceRuntimeShipment
     */
    canceledItems?: Array<CanceledItem> | null;
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
     * @type {Customer}
     * @memberof CommerceRuntimeShipment
     */
    customer?: Customer;
    /**
     * 
     * @type {Array<ShipmentNote>}
     * @memberof CommerceRuntimeShipment
     */
    shipmentNotes?: Array<ShipmentNote> | null;
    /**
     * 
     * @type {FulfillmentAlternateContact}
     * @memberof CommerceRuntimeShipment
     */
    alternateContact?: FulfillmentAlternateContact;
    /**
     * 
     * @type {Array<SubstitutedItem>}
     * @memberof CommerceRuntimeShipment
     */
    substitutedItems?: Array<SubstitutedItem> | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeShipmentResponse
 */
export interface CommerceRuntimeShipmentResponse {
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
    /**
     * 
     * @type {Array<CommerceRuntimePackageResponse>}
     * @memberof CommerceRuntimeShipmentResponse
     */
    packageResponses?: Array<CommerceRuntimePackageResponse> | null;
    /**
     * 
     * @type {Array<CustomAttribute>}
     * @memberof CommerceRuntimeShipmentResponse
     */
    customAttributes?: Array<CustomAttribute> | null;
    /**
     * 
     * @type {Array<Notification>}
     * @memberof CommerceRuntimeShipmentResponse
     */
    messages?: Array<Notification> | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeShipmentResponse
     */
    isSuccessful?: boolean;
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
 * @interface Contact
 */
export interface Contact {
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
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Contact
     */
    firstName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Contact
     */
    middleNameOrInitial?: string | null;
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
    companyOrOrganization?: string | null;
    /**
     * 
     * @type {Phone}
     * @memberof Contact
     */
    phoneNumbers?: Phone;
    /**
     * 
     * @type {Address}
     * @memberof Contact
     */
    address?: Address;
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
 * @interface Customer
 */
export interface Customer {
    /**
     * 
     * @type {Contact}
     * @memberof Customer
     */
    customerContact?: Contact;
    /**
     * Custom data
     * @type {any}
     * @memberof Customer
     */
    data?: any | null;
    /**
     * Destination Commercial Flag
     * @type {boolean}
     * @memberof Customer
     */
    isDestinationCommercial?: boolean | null;
}
/**
 * 
 * @export
 * @interface Destination
 */
export interface Destination {
    /**
     * An identifier for this entry.
     * @type {string}
     * @memberof Destination
     */
    id?: string | null;
    /**
     * 
     * @type {Contact}
     * @memberof Destination
     */
    destinationContact?: Contact;
    /**
     * Indicates that the destination is commercial
     * @type {boolean}
     * @memberof Destination
     */
    isDestinationCommercial?: boolean | null;
    /**
     * Custom data
     * @type {object}
     * @memberof Destination
     */
    data?: object | null;
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
 * Digital wallet contract
 * @export
 * @interface DigitalWallet
 */
export interface DigitalWallet {
    /**
     * Digital wallet data.
     * Note: Transform the Json data to a string.
     * @type {string}
     * @memberof DigitalWallet
     */
    digitalWalletData?: string | null;
    /**
     * Cart ID
     * Note: This property should only be set if the order is not created and user opted to 
     * create the order from cart using digital wallet.
     * @type {string}
     * @memberof DigitalWallet
     */
    cartId?: string | null;
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
    /**
     * Ids of digital packages to mark as fulfilled
     * @type {Array<string>}
     * @memberof FulfillmentAction
     */
    digitalPackageIds?: Array<string> | null;
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
     * @type {any}
     * @memberof FulfillmentField
     */
    userEnteredValue?: any | null;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentField
     */
    required?: boolean;
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
     * @type {Array<TaskInput>}
     * @memberof FulfillmentTask
     */
    inputs?: Array<TaskInput> | null;
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
 * @interface GiftCard
 */
export interface GiftCard {
    /**
     * 
     * @type {string}
     * @memberof GiftCard
     */
    activationDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GiftCard
     */
    cardNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GiftCard
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GiftCard
     */
    creditType?: string | null;
    /**
     * 
     * @type {number}
     * @memberof GiftCard
     */
    creditValue?: number | null;
    /**
     * 
     * @type {string}
     * @memberof GiftCard
     */
    currencyCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof GiftCard
     */
    currentBalance?: number | null;
    /**
     * 
     * @type {number}
     * @memberof GiftCard
     */
    customerId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof GiftCard
     */
    expirationDate?: string | null;
    /**
     * 
     * @type {number}
     * @memberof GiftCard
     */
    initialBalance?: number | null;
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
 * 
 * @export
 * @interface ItemQuantityUpdate
 */
export interface ItemQuantityUpdate {
    /**
     * An external price applied to the item.
     * @type {number}
     * @memberof ItemQuantityUpdate
     */
    tenantOverridePrice?: number | null;
    /**
     * Indicate that External Price (TenantOverridePrice) is a Sale Price or List Price. And is used to calculate the line item discounts.
     * @type {boolean}
     * @memberof ItemQuantityUpdate
     */
    isOverRidePriceSalePrice?: boolean | null;
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
     * @type {ShopperNotes}
     * @memberof Order
     */
    shopperNotes?: ShopperNotes;
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
 * Paged collection of orders. This is paged in case it's returning a long list the orders. 
 * for a store.
 * @export
 * @interface OrderCollection
 */
export interface OrderCollection {
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
    pageSize?: number;
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
    totalCount?: number;
    /**
     * 
     * @type {Array<Order>}
     * @memberof OrderCollection
     */
    items?: Array<Order> | null;
}
/**
 * Collection of items listed on the order.
 * @export
 * @interface OrderItemCollection
 */
export interface OrderItemCollection {
    /**
     * 
     * @type {number}
     * @memberof OrderItemCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<CommerceRuntimeOrderItem>}
     * @memberof OrderItemCollection
     */
    items?: Array<CommerceRuntimeOrderItem> | null;
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
 * 
 * @export
 * @interface OrderReturnableItem
 */
export interface OrderReturnableItem {
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
     * Shipment Number associated with product
     * @type {number}
     * @memberof OrderReturnableItem
     */
    shipmentNumber?: number | null;
    /**
     * Shipment Item Id Number associated with product
     * @type {number}
     * @memberof OrderReturnableItem
     */
    shipmentItemId?: number | null;
    /**
     * The number of units ordered.
     * @type {number}
     * @memberof OrderReturnableItem
     */
    quantityOrdered?: number;
    /**
     * The number of units fulfilled.
     * @type {number}
     * @memberof OrderReturnableItem
     */
    quantityFulfilled?: number;
    /**
     * The number if times this item configuration was found in live returns (not cancelled or rejected).
     * @type {number}
     * @memberof OrderReturnableItem
     */
    quantityReturned?: number;
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
    orderItemId?: string | null;
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
    orderItemOptionAttributeFQN?: string | null;
    /**
     * 
     * @type {number}
     * @memberof OrderReturnableItem
     */
    unitQuantity?: number;
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
    sku?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderReturnableItem
     */
    mfgPartNumber?: string | null;
    /**
     * 
     * @type {AppliedReturnRuleInfo}
     * @memberof OrderReturnableItem
     */
    appliedReturnRuleInfo?: AppliedReturnRuleInfo;
}
/**
 * Collection of fulfillment information for items on an order.
 * @export
 * @interface OrderReturnableItemCollection
 */
export interface OrderReturnableItemCollection {
    /**
     * 
     * @type {number}
     * @memberof OrderReturnableItemCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<OrderReturnableItem>}
     * @memberof OrderReturnableItemCollection
     */
    items?: Array<OrderReturnableItem> | null;
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
     * ISO currency code for the transaction. Currently, only USD is supported.
     * @type {string}
     * @memberof PaymentAction
     */
    currencyCode?: string | null;
    /**
     * If paying by check, the check number.
     * @type {string}
     * @memberof PaymentAction
     */
    checkNumber?: string | null;
    /**
     * If paying by Paypal Express or some other potential non-gateway payment provider, a return redirect URL must be provided.
     * @type {string}
     * @memberof PaymentAction
     */
    returnUrl?: string | null;
    /**
     * If paying by Paypal Express or some other potential non-gateway payment provider, a cancel redirect URL must be provided.
     * This will be used if something goes wrong on the third-party side.
     * @type {string}
     * @memberof PaymentAction
     */
    cancelUrl?: string | null;
    /**
     * Amount of funds to withdraw to pay for this order.
     * @type {number}
     * @memberof PaymentAction
     */
    amount?: number | null;
    /**
     * Date the interaction occurred
     * @type {string}
     * @memberof PaymentAction
     */
    interactionDate?: string | null;
    /**
     * 
     * @type {BillingInfo}
     * @memberof PaymentAction
     */
    newBillingInfo?: BillingInfo;
    /**
     * Reference payment id from which to copy the billing info.
     * @type {string}
     * @memberof PaymentAction
     */
    referenceSourcePaymentId?: string | null;
    /**
     * 
     * @type {PaymentGatewayInteraction}
     * @memberof PaymentAction
     */
    manualGatewayInteraction?: PaymentGatewayInteraction;
    /**
     * 
     * @type {string}
     * @memberof PaymentAction
     */
    externalTransactionId?: string | null;
    /**
     * Custom data from payment providers
     * @type {object}
     * @memberof PaymentAction
     */
    data?: object | null;
    /**
     * Recaptcha for validation.
     * @type {string}
     * @memberof PaymentAction
     */
    recaptcha?: string | null;
    /**
     * Stores the Installment Plan code. Installment is only supported on subscription orders
     * @type {string}
     * @memberof PaymentAction
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
 * A collection of payment transactions.
 * @export
 * @interface PaymentCollection
 */
export interface PaymentCollection {
    /**
     * 
     * @type {number}
     * @memberof PaymentCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<Payment>}
     * @memberof PaymentCollection
     */
    items?: Array<Payment> | null;
}
/**
 * Represents a manually entered payment gateway interaction.
 * @export
 * @interface PaymentGatewayInteraction
 */
export interface PaymentGatewayInteraction {
    /**
     * Gateway Transaction Id from PCIaaS.  Not populated by incoming request.
     * @type {number}
     * @memberof PaymentGatewayInteraction
     */
    gatewayInteractionId?: number | null;
    /**
     * Gateway Transaction Id from PCIaaS.  Not populated by incoming request.
     * @type {string}
     * @memberof PaymentGatewayInteraction
     */
    gatewayTransactionId?: string | null;
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
    gatewayAVSCodes?: string | null;
    /**
     * Not populated by incoming request.
     * @type {string}
     * @memberof PaymentGatewayInteraction
     */
    gatewayCVV2Codes?: string | null;
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
     * Indicates the manual interaction is for a refund on an order.
     * @type {boolean}
     * @memberof PaymentGatewayInteraction
     */
    isOrderRefund?: boolean;
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
     * If true, indicates payment action is still pending and not yet confirmed.
     * @type {boolean}
     * @memberof PaymentInteraction
     */
    isPending?: boolean;
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
 * 
 * @export
 * @interface Phone
 */
export interface Phone {
    /**
     * 
     * @type {string}
     * @memberof Phone
     */
    home?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Phone
     */
    mobile?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Phone
     */
    work?: string | null;
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
     * @type {Array<PickupItem>}
     * @memberof Pickup
     */
    items?: Array<PickupItem> | null;
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
 * Item that goes into the pickup to determine which items will be picked up.
 * @export
 * @interface PickupItem
 */
export interface PickupItem {
    /**
     * Code of the Product to be fulfilled.
     * @type {string}
     * @memberof PickupItem
     */
    productCode?: string | null;
    /**
     * Quantity of the order item
     * @type {number}
     * @memberof PickupItem
     */
    quantity?: number;
    /**
     * The type of fulfillment item
     * @type {string}
     * @memberof PickupItem
     */
    fulfillmentItemType?: string | null;
    /**
     * The line id associated with the fulfillment.
     * @type {number}
     * @memberof PickupItem
     */
    lineId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PickupItem
     */
    optionAttributeFQN?: string | null;
}
/**
 * 
 * @export
 * @interface PricingAppliedDiscount
 */
export interface PricingAppliedDiscount {
    /**
     * 
     * @type {number}
     * @memberof PricingAppliedDiscount
     */
    impact?: number;
    /**
     * 
     * @type {PricingDiscount}
     * @memberof PricingAppliedDiscount
     */
    discount?: PricingDiscount;
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
}
/**
 * 
 * @export
 * @interface PricingAppliedLineItemDiscount
 */
export interface PricingAppliedLineItemDiscount {
    /**
     * 
     * @type {number}
     * @memberof PricingAppliedLineItemDiscount
     */
    quantity?: number;
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
    impact?: number;
    /**
     * 
     * @type {PricingDiscount}
     * @memberof PricingAppliedLineItemDiscount
     */
    discount?: PricingDiscount;
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
}
/**
 * 
 * @export
 * @interface PricingAppliedLineItemProductDiscount
 */
export interface PricingAppliedLineItemProductDiscount {
    /**
     * 
     * @type {boolean}
     * @memberof PricingAppliedLineItemProductDiscount
     */
    appliesToSalePrice?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PricingAppliedLineItemProductDiscount
     */
    impact?: number;
    /**
     * 
     * @type {PricingDiscount}
     * @memberof PricingAppliedLineItemProductDiscount
     */
    discount?: PricingDiscount;
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
    shippingMethodCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PricingAppliedLineItemShippingDiscount
     */
    impact?: number;
    /**
     * 
     * @type {PricingDiscount}
     * @memberof PricingAppliedLineItemShippingDiscount
     */
    discount?: PricingDiscount;
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
    shippingMethodCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PricingAppliedOrderShippingDiscount
     */
    impact?: number;
    /**
     * 
     * @type {PricingDiscount}
     * @memberof PricingAppliedOrderShippingDiscount
     */
    discount?: PricingDiscount;
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
    discountId?: number;
    /**
     * 
     * @type {string}
     * @memberof PricingDiscount
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PricingDiscount
     */
    friendlyDescription?: string | null;
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
    scope?: string | null;
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
    maximumUsesPerUser?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof PricingDiscount
     */
    requiresAuthenticatedUser?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PricingDiscount
     */
    doesNotApplyToProductsWithSalePrice?: boolean;
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
    maximumDiscountValuePerOrder?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PricingDiscount
     */
    maxDiscountValuePerRedemption?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof PricingDiscount
     */
    doesNotApplyToMultiShipToOrders?: boolean | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof PricingDiscount
     */
    includedPriceLists?: Array<string> | null;
    /**
     * 
     * @type {number}
     * @memberof PricingDiscount
     */
    redemptions?: number;
    /**
     * 
     * @type {string}
     * @memberof PricingDiscount
     */
    type?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PricingDiscount
     */
    amountType?: string | null;
    /**
     * 
     * @type {PricingDiscountTarget}
     * @memberof PricingDiscount
     */
    target?: PricingDiscountTarget;
    /**
     * 
     * @type {PricingDiscountCondition}
     * @memberof PricingDiscount
     */
    condition?: PricingDiscountCondition;
    /**
     * 
     * @type {string}
     * @memberof PricingDiscount
     * @deprecated
     */
    expirationDate?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PricingDiscount
     */
    stackingLayer?: number;
}
/**
 * 
 * @export
 * @interface PricingDiscountCondition
 */
export interface PricingDiscountCondition {
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
    couponCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PricingDiscountCondition
     */
    minimumQuantityProductsRequiredInCategories?: number | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof PricingDiscountCondition
     */
    includedCategoryIds?: Array<number> | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof PricingDiscountCondition
     */
    excludedCategoryIds?: Array<number> | null;
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
    includedProductCodes?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof PricingDiscountCondition
     */
    excludedProductCodes?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof PricingDiscountCondition
     */
    paymentWorkflows?: Array<string> | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof PricingDiscountCondition
     */
    customerSegmentIds?: Array<number> | null;
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
    maximumOrderAmount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PricingDiscountCondition
     */
    minimumLifetimeValueAmount?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PricingDiscountCondition
     */
    startDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PricingDiscountCondition
     */
    expirationDate?: string | null;
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
    minDistinctProductsRequired?: number | null;
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
    type?: string | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof PricingDiscountTarget
     */
    includedCategoryIds?: Array<number> | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof PricingDiscountTarget
     */
    excludedCategoryIds?: Array<number> | null;
    /**
     * 
     * @type {string}
     * @memberof PricingDiscountTarget
     */
    includedCategoriesOperator?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PricingDiscountTarget
     */
    excludedCategoriesOperator?: string | null;
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
    excludedProductCodes?: Array<string> | null;
    /**
     * 
     * @type {boolean}
     * @memberof PricingDiscountTarget
     */
    includeAllProducts?: boolean;
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
    inputType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PricingProductAttribute
     */
    valueType?: string | null;
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
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PricingProductAttribute
     */
    description?: string | null;
}
/**
 * 
 * @export
 * @interface PricingProductProperty
 */
export interface PricingProductProperty {
    /**
     * 
     * @type {string}
     * @memberof PricingProductProperty
     */
    attributeFQN?: string | null;
    /**
     * 
     * @type {Array<PricingProductPropertyValue>}
     * @memberof PricingProductProperty
     */
    values?: Array<PricingProductPropertyValue> | null;
    /**
     * 
     * @type {PricingProductAttribute}
     * @memberof PricingProductProperty
     */
    attributeDetail?: PricingProductAttribute;
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
}
/**
 * 
 * @export
 * @interface PricingProductPropertyValue
 */
export interface PricingProductPropertyValue {
    /**
     * 
     * @type {any}
     * @memberof PricingProductPropertyValue
     */
    value?: any | null;
    /**
     * 
     * @type {string}
     * @memberof PricingProductPropertyValue
     */
    stringValue?: string | null;
}
/**
 * 
 * @export
 * @interface PricingTaxAttribute
 */
export interface PricingTaxAttribute {
    /**
     * 
     * @type {string}
     * @memberof PricingTaxAttribute
     */
    fullyQualifiedName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PricingTaxAttribute
     */
    attributeDefinitionId?: number | null;
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
    taxContextId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PricingTaxContext
     */
    customerId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PricingTaxContext
     */
    taxExemptId?: string | null;
    /**
     * 
     * @type {Address}
     * @memberof PricingTaxContext
     */
    originAddress?: Address;
    /**
     * 
     * @type {Address}
     * @memberof PricingTaxContext
     */
    destinationAddress?: Address;
}
/**
 * 
 * @export
 * @interface PricingTaxableLineItem
 */
export interface PricingTaxableLineItem {
    /**
     * 
     * @type {string}
     * @memberof PricingTaxableLineItem
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PricingTaxableLineItem
     */
    productCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PricingTaxableLineItem
     */
    variantProductCode?: string | null;
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
     * @type {number}
     * @memberof PricingTaxableLineItem
     */
    lineItemPrice?: number;
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
    shippingAmount?: number;
    /**
     * 
     * @type {number}
     * @memberof PricingTaxableLineItem
     */
    handlingAmount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PricingTaxableLineItem
     */
    feeTotal?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof PricingTaxableLineItem
     */
    isTaxable?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof PricingTaxableLineItem
     */
    reason?: string | null;
    /**
     * 
     * @type {object}
     * @memberof PricingTaxableLineItem
     */
    data?: object | null;
    /**
     * 
     * @type {PricingAppliedLineItemProductDiscount}
     * @memberof PricingTaxableLineItem
     */
    productDiscount?: PricingAppliedLineItemProductDiscount;
    /**
     * 
     * @type {PricingAppliedLineItemShippingDiscount}
     * @memberof PricingTaxableLineItem
     */
    shippingDiscount?: PricingAppliedLineItemShippingDiscount;
    /**
     * 
     * @type {Array<PricingAppliedLineItemProductDiscount>}
     * @memberof PricingTaxableLineItem
     */
    productDiscounts?: Array<PricingAppliedLineItemProductDiscount> | null;
    /**
     * 
     * @type {Array<PricingAppliedLineItemShippingDiscount>}
     * @memberof PricingTaxableLineItem
     */
    shippingDiscounts?: Array<PricingAppliedLineItemShippingDiscount> | null;
    /**
     * 
     * @type {Address}
     * @memberof PricingTaxableLineItem
     */
    originAddress?: Address;
    /**
     * 
     * @type {Address}
     * @memberof PricingTaxableLineItem
     */
    destinationAddress?: Address;
}
/**
 * 
 * @export
 * @interface PricingTaxableOrder
 */
export interface PricingTaxableOrder {
    /**
     * 
     * @type {string}
     * @memberof PricingTaxableOrder
     */
    orderDate?: string;
    /**
     * 
     * @type {PricingTaxContext}
     * @memberof PricingTaxableOrder
     */
    taxContext?: PricingTaxContext;
    /**
     * 
     * @type {Array<PricingTaxableLineItem>}
     * @memberof PricingTaxableOrder
     */
    lineItems?: Array<PricingTaxableLineItem> | null;
    /**
     * 
     * @type {number}
     * @memberof PricingTaxableOrder
     */
    shippingAmount?: number;
    /**
     * 
     * @type {string}
     * @memberof PricingTaxableOrder
     */
    currencyCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PricingTaxableOrder
     */
    handlingFee?: number;
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
    originalOrderDate?: string;
    /**
     * 
     * @type {object}
     * @memberof PricingTaxableOrder
     */
    data?: object | null;
    /**
     * 
     * @type {Array<PricingTaxAttribute>}
     * @memberof PricingTaxableOrder
     */
    attributes?: Array<PricingTaxAttribute> | null;
    /**
     * 
     * @type {Array<PricingAppliedOrderShippingDiscount>}
     * @memberof PricingTaxableOrder
     */
    shippingDiscounts?: Array<PricingAppliedOrderShippingDiscount> | null;
    /**
     * 
     * @type {PricingAppliedOrderShippingDiscount}
     * @memberof PricingTaxableOrder
     */
    shippingDiscount?: PricingAppliedOrderShippingDiscount;
    /**
     * 
     * @type {Array<PricingAppliedDiscount>}
     * @memberof PricingTaxableOrder
     */
    orderDiscounts?: Array<PricingAppliedDiscount> | null;
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
    handlingDiscounts?: Array<PricingAppliedDiscount> | null;
    /**
     * 
     * @type {PricingAppliedDiscount}
     * @memberof PricingTaxableOrder
     */
    handlingDiscount?: PricingAppliedDiscount;
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
    shipmentNumber?: number;
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
    quantityToReturn?: number;
}
/**
 * 
 * @export
 * @interface ProcessReturnRuleItemCollection
 */
export interface ProcessReturnRuleItemCollection {
    /**
     * 
     * @type {number}
     * @memberof ProcessReturnRuleItemCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<ProcessReturnRuleItem>}
     * @memberof ProcessReturnRuleItemCollection
     */
    items?: Array<ProcessReturnRuleItem> | null;
}
/**
 * 
 * @export
 * @interface ProcessReturnRuleItemResponse
 */
export interface ProcessReturnRuleItemResponse {
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
    /**
     * 
     * @type {AppliedReturnRuleInfo}
     * @memberof ProcessReturnRuleItemResponse
     */
    appliedReturnRuleInfo?: AppliedReturnRuleInfo;
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
     * @type {number}
     * @memberof ProductStock
     */
    readonly availableFutureInventories?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductStock
     */
    readonly totalAvailableStock?: number;
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
    id?: string | null;
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
    lastErrorMessage?: string | null;
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
    createDate?: string;
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
     * @type {number}
     * @memberof QueuedOrderCollection
     */
    startIndex?: number;
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
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof QueuedOrderCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<QueuedOrder>}
     * @memberof QueuedOrderCollection
     */
    items?: Array<QueuedOrder> | null;
}
/**
 * 
 * @export
 * @interface Quote
 */
export interface Quote {
    /**
     * Unique identifier.
     * @type {string}
     * @memberof Quote
     */
    id?: string | null;
    /**
     * Name of the quote
     * @type {string}
     * @memberof Quote
     */
    name?: string | null;
    /**
     * Unique identifier of the Site.
     * @type {number}
     * @memberof Quote
     */
    siteId?: number;
    /**
     * Unique identifier of the Tenant.
     * @type {number}
     * @memberof Quote
     */
    tenantId?: number;
    /**
     * Auto generated number that is assigned to the quote when creation.
     * @type {number}
     * @memberof Quote
     */
    number?: number | null;
    /**
     * When the customer placed (submitted) the Quote.
     * @type {string}
     * @memberof Quote
     */
    submittedDate?: string | null;
    /**
     * List of items in the Quote.
     * @type {Array<CommerceRuntimeOrderItem>}
     * @memberof Quote
     */
    items?: Array<CommerceRuntimeOrderItem> | null;
    /**
     * User modified Audit History
     * @type {Array<AuditRecord>}
     * @memberof Quote
     */
    auditHistory?: Array<AuditRecord> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof Quote
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * Comments on a quote
     * @type {Array<QuoteComment>}
     * @memberof Quote
     */
    comments?: Array<QuoteComment> | null;
    /**
     * When the quote will no longer be active. That is, the quote is considered abandoned. 
     * Date in UTC Date/Time.
     * @type {string}
     * @memberof Quote
     */
    expirationDate?: string | null;
    /**
     * 
     * @type {FulfillmentInfo}
     * @memberof Quote
     */
    fulfillmentInfo?: FulfillmentInfo;
    /**
     * 
     * @type {string}
     * @memberof Quote
     */
    userId?: string | null;
    /**
     * Unique identifier of the customer account.
     * @type {number}
     * @memberof Quote
     */
    customerAccountId?: number | null;
    /**
     * Email address for checkout
     * @type {string}
     * @memberof Quote
     */
    email?: string | null;
    /**
     * The customers tax ID. If Customer Account ID exists in the system, will set this.
     * @type {string}
     * @memberof Quote
     */
    readonly customerTaxId?: string | null;
    /**
     * Unique identifier of the customer account.
     * @type {boolean}
     * @memberof Quote
     */
    readonly isTaxExempt?: boolean | null;
    /**
     * ISO Currency Code.
     * @type {string}
     * @memberof Quote
     */
    currencyCode?: string | null;
    /**
     * Pricelist code for the checkout
     * @type {string}
     * @memberof Quote
     */
    priceListCode?: string | null;
    /**
     * Custom data for a given vendor set within the commerce process.
     * @type {object}
     * @memberof Quote
     */
    data?: object | null;
    /**
     * Storage for any additional/custom tax data.
     * @type {object}
     * @memberof Quote
     */
    taxData?: object | null;
    /**
     * Unique identifier of the channel for this item.
     * @type {string}
     * @memberof Quote
     */
    channelCode?: string | null;
    /**
     * Identifies the location at which the order was placed if the order was placed externally.
     * @type {string}
     * @memberof Quote
     */
    locationCode?: string | null;
    /**
     * IP address of the user placing the order. (User or customer?)
     * @type {string}
     * @memberof Quote
     */
    ipAddress?: string | null;
    /**
     * Source device of the user placing the order. (User or customer?)
     * @type {string}
     * @memberof Quote
     */
    sourceDevice?: string | null;
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
    /**
     * Determines the interaction type that a customer will use to create this object.
     * Valid values are: Website, Store, Call, Unknown
     * @type {string}
     * @memberof Quote
     */
    customerInteractionType?: string | null;
    /**
     * 
     * @type {Array<CommerceRuntimeAppliedDiscount>}
     * @memberof Quote
     */
    orderDiscounts?: Array<CommerceRuntimeAppliedDiscount> | null;
    /**
     * Subtotal before any coupon codes, taxes, fees, etc.
     * @type {number}
     * @memberof Quote
     */
    subTotal?: number;
    /**
     * The total value of item-level product discounts.
     * @type {number}
     * @memberof Quote
     */
    itemLevelProductDiscountTotal?: number;
    /**
     * The total value of order-level (group-level) product discounts.
     * @type {number}
     * @memberof Quote
     */
    orderLevelProductDiscountTotal?: number;
    /**
     * Total tax on products.
     * @type {number}
     * @memberof Quote
     */
    itemTaxTotal?: number;
    /**
     * 
     * @type {Adjustment}
     * @memberof Quote
     */
    adjustment?: Adjustment;
    /**
     * The total product cost, accounting for discounts and tax.
     * @type {number}
     * @memberof Quote
     */
    itemTotal?: number;
    /**
     * Final total
     * @type {number}
     * @memberof Quote
     */
    total?: number;
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
    itemLevelShippingDiscountTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof Quote
     */
    orderLevelShippingDiscountTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof Quote
     */
    shippingAmount?: number;
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
    itemLevelHandlingDiscountTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof Quote
     */
    orderLevelHandlingDiscountTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof Quote
     */
    handlingAmount?: number | null;
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
     * 
     * @type {number}
     * @memberof Quote
     */
    feeTotal?: number;
    /**
     * Is this quote a draft
     * @type {boolean}
     * @memberof Quote
     */
    isDraft?: boolean;
    /**
     * Does this quote have a draft
     * @type {boolean}
     * @memberof Quote
     */
    hasDraft?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Quote
     */
    status?: string | null;
    /**
     * Coupon codes associated with this Quote.
     * @type {Array<string>}
     * @memberof Quote
     */
    couponCodes?: Array<string> | null;
    /**
     * A list of invalid coupons that were attempted on the quote
     * @type {Array<InvalidCoupon>}
     * @memberof Quote
     */
    invalidCoupons?: Array<InvalidCoupon> | null;
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
    shippingAdjustment?: number | null;
    /**
     * 
     * @type {number}
     * @memberof QuoteAdjustment
     */
    handlingAdjustment?: number | null;
}
/**
 * 
 * @export
 * @interface QuoteCollection
 */
export interface QuoteCollection {
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
    pageSize?: number;
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
    totalCount?: number;
    /**
     * 
     * @type {Array<Quote>}
     * @memberof QuoteCollection
     */
    items?: Array<Quote> | null;
}
/**
 * Quote Comments submitted by B2B buyer/seller.
 * @export
 * @interface QuoteComment
 */
export interface QuoteComment {
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
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof QuoteComment
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * 
 * @export
 * @interface ReasonCollection
 */
export interface ReasonCollection {
    /**
     * 
     * @type {number}
     * @memberof ReasonCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReasonCollection
     */
    items?: Array<string> | null;
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
    reasonCode?: string | null;
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
 * @interface RefundPaymentAction
 */
export interface RefundPaymentAction {
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
    paymentType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RefundPaymentAction
     */
    paymentSource?: string | null;
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
}
/**
 * 
 * @export
 * @interface RefundReasonCollection
 */
export interface RefundReasonCollection {
    /**
     * 
     * @type {number}
     * @memberof RefundReasonCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<RefundReasonItem>}
     * @memberof RefundReasonCollection
     */
    items?: Array<RefundReasonItem> | null;
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
    reasonCode?: string | null;
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
}
/**
 * <param name="CanceledShipment">Shipment being canceled</param>
 * <param name="ActiveShipment">One of the active shipment</param>
 * @export
 * @interface RepriceCanceledShipmentObject
 */
export interface RepriceCanceledShipmentObject {
    /**
     * 
     * @type {CommerceRuntimeShipment}
     * @memberof RepriceCanceledShipmentObject
     */
    canceledShipment?: CommerceRuntimeShipment;
    /**
     * 
     * @type {CommerceRuntimeShipment}
     * @memberof RepriceCanceledShipmentObject
     */
    activeShipment?: CommerceRuntimeShipment;
}
/**
 * 
 * @export
 * @interface RepriceShipmentObject
 */
export interface RepriceShipmentObject {
    /**
     * 
     * @type {CommerceRuntimeShipment}
     * @memberof RepriceShipmentObject
     */
    originalShipment?: CommerceRuntimeShipment;
    /**
     * 
     * @type {CommerceRuntimeShipment}
     * @memberof RepriceShipmentObject
     */
    newShipment?: CommerceRuntimeShipment;
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
    returnItemId?: string | null;
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
    locationCode?: string | null;
}
/**
 * 
 * @export
 * @interface Return
 */
export interface Return {
    /**
     * Unique Identifier for this Return
     * @type {string}
     * @memberof Return
     */
    id?: string | null;
    /**
     * Unique identifier of the customer account.
     * @type {number}
     * @memberof Return
     */
    customerAccountId?: number | null;
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
    /**
     * Determines the interaction type that a customer will use to create this object.
     * Valid values are: Website, Store, Call, Unknown
     * @type {string}
     * @memberof Return
     */
    customerInteractionType?: string | null;
    /**
     * Current available actions.
     * @type {Array<string>}
     * @memberof Return
     */
    availableActions?: Array<string> | null;
    /**
     * A human-facing identifier that is unique within a tenant to represent the sequential ordering of Returns.
     * @type {number}
     * @memberof Return
     */
    returnNumber?: number | null;
    /**
     * 
     * @type {Contact}
     * @memberof Return
     */
    contact?: Contact;
    /**
     * Location code where the return was made/processed
     * @type {string}
     * @memberof Return
     */
    locationCode?: string | null;
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
     * The Id of the Order that represents the items shipped to the shopper for this Return.
     * @type {string}
     * @memberof Return
     */
    returnOrderId?: string | null;
    /**
     * ISO Currency Code. Currently, only USD is supported.
     * @type {string}
     * @memberof Return
     */
    currencyCode?: string | null;
    /**
     * The Status of the Return.  Valid values are 
     *     Null, Created, ReturnAuthorized, ReturnPending, ReturnReceived, ReplacementShipped, Cancelled, and Closed.
     * @type {string}
     * @memberof Return
     */
    status?: string | null;
    /**
     * A rollup status describing whether the return items have been received.
     * See Mozu.CommerceRuntime.Contracts.Returns.Return.ReceiveStatusConst for possible values.
     * @type {string}
     * @memberof Return
     */
    receiveStatus?: string | null;
    /**
     * A rollup status describing whether the return items have been refunded.
     * See Mozu.CommerceRuntime.Contracts.Returns.Return.RefundStatusConst for possible values.
     * @type {string}
     * @memberof Return
     */
    refundStatus?: string | null;
    /**
     * A rollup status describing whether the return items have been marked as replaced.
     * See Mozu.CommerceRuntime.Contracts.Returns.Return.ReplaceStatusConst for possible values.
     * @type {string}
     * @memberof Return
     */
    replaceStatus?: string | null;
    /**
     * The list of items being returned by the Shopper and replaced by the Merchant in this Return.
     * @type {Array<ReturnItem>}
     * @memberof Return
     */
    items?: Array<ReturnItem> | null;
    /**
     * Any Merchant Notes for this Return.
     * @type {Array<OrderNote>}
     * @memberof Return
     */
    notes?: Array<OrderNote> | null;
    /**
     * The deadline for a Shopper to ship the items in this Return to the Merchant.
     * @type {string}
     * @memberof Return
     */
    rmaDeadline?: string | null;
    /**
     * Specifies whether this Return was a Refund or a Replace
     * @type {string}
     * @memberof Return
     */
    returnType?: string | null;
    /**
     * If this Return was refunded,  how much was credited to the shopper? This amount is summed from the refund payments.
     * @type {number}
     * @memberof Return
     */
    refundAmount?: number | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof Return
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * Any Refund payments associated with this Return.
     * @type {Array<Payment>}
     * @memberof Return
     */
    payments?: Array<Payment> | null;
    /**
     * Shipping package associated with this return.
     * @type {Array<CommerceRuntimePackage>}
     * @memberof Return
     */
    packages?: Array<CommerceRuntimePackage> | null;
    /**
     * The Total Loss Amount is equal to the (cost of item) * quantity of item returned.
     * It is meant to represent the product value to the merchant of the items damaged or returned by a shopper.
     * @type {number}
     * @memberof Return
     */
    productLossTotal?: number | null;
    /**
     * The Shipping Loss Total is equal to the (shipping cost of item) * quantity of item returned.
     * It is meant to represent the product value to the merchant of the items damaged or returned by a shopper.
     * @type {number}
     * @memberof Return
     */
    shippingLossTotal?: number | null;
    /**
     * Sum of the ProductLossTotal and the ShippingLossTotal.
     * @type {number}
     * @memberof Return
     */
    lossTotal?: number | null;
    /**
     * The Total Taxes assessed on the product loss.
     * @type {number}
     * @memberof Return
     */
    productLossTaxTotal?: number | null;
    /**
     * The Total Taxes assessed on the shipping loss.
     * @type {number}
     * @memberof Return
     */
    shippingLossTaxTotal?: number | null;
    /**
     * Unique identifier of the Tenant.
     * @type {number}
     * @memberof Return
     */
    tenantId?: number | null;
    /**
     * Unique identifier of the Site.
     * @type {number}
     * @memberof Return
     */
    siteId?: number | null;
    /**
     * Unique identifier of the current user.
     * @type {string}
     * @memberof Return
     */
    userId?: string | null;
    /**
     * Unique identifier of the channel for this item.
     * @type {string}
     * @memberof Return
     */
    channelCode?: string | null;
    /**
     * Change messages related to the return.
     * @type {Array<CommerceRuntimeChangeMessage>}
     * @memberof Return
     */
    changeMessages?: Array<CommerceRuntimeChangeMessage> | null;
    /**
     * To find Returns that have failed to refund.
     * @type {boolean}
     * @memberof Return
     */
    actionRequired?: boolean;
    /**
     * Was this return created by the Unified platform.
     * @type {boolean}
     * @memberof Return
     */
    isUnified?: boolean;
    /**
     * To identify Return is refundable or not.
     * @type {boolean}
     * @memberof Return
     */
    canInitiateRefund?: boolean;
    /**
     * If this Flag is true, Refund will be done on new Gift Card.
     * @type {boolean}
     * @memberof Return
     */
    refundToGC?: boolean;
    /**
     * ShipOrBillCountryCode contains country code of shipping address or Billing address
     * @type {string}
     * @memberof Return
     */
    shipOrBillCountryCode?: string | null;
    /**
     * A return can be created from an external system. This field is used to store the external id.
     * @type {string}
     * @memberof Return
     */
    externalId?: string | null;
    /**
     * When this is set to true, the  return rules will be ignored, and a return will be created without any checks.
     * @type {boolean}
     * @memberof Return
     */
    overrideReturnRule?: boolean;
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
     * @type {number}
     * @memberof ReturnCollection
     */
    startIndex?: number;
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
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof ReturnCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<Return>}
     * @memberof ReturnCollection
     */
    items?: Array<Return> | null;
}
/**
 * 
 * @export
 * @interface ReturnItem
 */
export interface ReturnItem {
    /**
     * The identifer of the return
     * @type {string}
     * @memberof ReturnItem
     */
    id?: string | null;
    /**
     * The OrderItem that this ReturnItem is associated with. Either the Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.Product or the OrderItemId must be present.
     * @type {string}
     * @memberof ReturnItem
     */
    orderItemId?: string | null;
    /**
     * The OrderLineId that this ReturnItem is associated with. If Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.OrderItemId is present, the OrderLineId should be present also.
     * @type {number}
     * @memberof ReturnItem
     */
    orderLineId?: number | null;
    /**
     * If this item refers to a product extra, provide the item's corresponding OptionAttributeFQN.
     * @type {string}
     * @memberof ReturnItem
     */
    orderItemOptionAttributeFQN?: string | null;
    /**
     * 
     * @type {CommerceRuntimeProduct}
     * @memberof ReturnItem
     */
    product?: CommerceRuntimeProduct;
    /**
     * For a given return reason (Damaged, Defective, MissingParts, DifferentExpectations, Late, NoLongerWanted, Other),
     * how many of the above OrderItem are to be replaced.  This value is provided by the Shopper when they request a Return.
     * @type {Array<ReturnReason>}
     * @memberof ReturnItem
     */
    reasons?: Array<ReturnReason> | null;
    /**
     * If this return item refers to a product/bundle that has product extras, this specifies whether those child items should be included or excluded.
     * For backward compatibility, a null value will be treated as false, i.e. include the extras.
     * @type {boolean}
     * @memberof ReturnItem
     */
    excludeProductExtras?: boolean | null;
    /**
     * Specifies whether the requested resolution for this item is Refund or Replace.
     * @type {string}
     * @memberof ReturnItem
     */
    returnType?: string | null;
    /**
     * Specifies whether this item should be returned to the merchant, e.g. if the item is irreparably damaged and it's not worth shipping back.
     * Even if this is set to true, Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.QuantityShipped should still be set to the quantity of items involved in the return.
     * @type {boolean}
     * @memberof ReturnItem
     */
    returnNotRequired?: boolean;
    /**
     * The amount of this item actually received from the shopper. It may differ from the sum of the ReturnReasons.
     * This is populated by the system when the Receive action is performed.
     * @type {number}
     * @memberof ReturnItem
     */
    quantityReceived?: number;
    /**
     * Describes the receive status of this item.
     * If Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.ReturnNotRequired is {true}, then this should be Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.ItemReceiveStatusConst.NOT_REQUESTED.
     * Otherwise the value should be Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.ItemReceiveStatusConst.RECEIVED or Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.ItemReceiveStatusConst.WAITING depending on Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.QuantityReceived.
     * @type {string}
     * @memberof ReturnItem
     */
    receiveStatus?: string | null;
    /**
     * The quantity of this item fulfilled on the parent order.
     * @type {number}
     * @memberof ReturnItem
     */
    quantityShipped?: number;
    /**
     * Describes the replace status of this item.
     * If Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.ReturnType is Mozu.CommerceRuntime.Contracts.Returns.Return.ReturnTypeConst.REFUND, then this should be Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.ItemReplaceStatusConst.NOT_REQUESTED.
     * Otherwise the value should be Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.ItemReplaceStatusConst.REPLACED or Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.ItemReplaceStatusConst.NOT_REPLACED depending on Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.QuantityReplaced.
     * @type {string}
     * @memberof ReturnItem
     */
    replaceStatus?: string | null;
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
     * If a refund is issued for the return, how much of the refund amount is for this particular item.
     * @type {number}
     * @memberof ReturnItem
     */
    refundAmount?: number | null;
    /**
     * The processing fee on the item that gets persisted into the database
     * @type {number}
     * @memberof ReturnItem
     */
    returnProcessingFeeApplied?: number | null;
    /**
     * Determines if shipping and handling is returned on the item
     * @type {boolean}
     * @memberof ReturnItem
     */
    shippingAndHandlingRefunded?: boolean | null;
    /**
     * The quantity of the item being refunded is specified in this field
     * @type {number}
     * @memberof ReturnItem
     */
    quantityRefunded?: number;
    /**
     * Describes the refund status of this item.
     * If Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.ReturnType is Mozu.CommerceRuntime.Contracts.Returns.Return.ReturnTypeConst.REPLACE, then this should be Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.ItemRefundStatusConst.NOT_REQUESTED.
     * Otherwise the value should be Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.ItemRefundStatusConst.REFUNDED or Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.ItemRefundStatusConst.NOT_REFUNDED depending on Mozu.CommerceRuntime.Contracts.Returns.ReturnItem.RefundAmount.
     * @type {string}
     * @memberof ReturnItem
     */
    refundStatus?: string | null;
    /**
     * Specifies the quantity of this item that has been marked as replaced, i.e. it has been used to generate a replacement order for the return.
     * Note that the quantity replaced may not line up with the quantity of the item actually sent back to the shopper,
     * such as in the case of an exchange, e.g. swapping a medium shirt for a large shirt.
     * @type {number}
     * @memberof ReturnItem
     */
    quantityReplaced?: number | null;
    /**
     * Any merchant-supplied notes for this ReturnItem.
     * @type {Array<OrderNote>}
     * @memberof ReturnItem
     */
    notes?: Array<OrderNote> | null;
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
     * Deprecated. Not used.
     * @type {Array<ReturnBundle>}
     * @memberof ReturnItem
     * @deprecated
     */
    bundledProducts?: Array<ReturnBundle> | null;
    /**
     * Taxable Subtotal including Weighted Order amounts
     * @type {number}
     * @memberof ReturnItem
     */
    totalWithoutWeightedShippingAndHandling?: number | null;
    /**
     * Line item total with line item, Tax, Weighted Tax with Weighted shipping and handling costs
     * @type {number}
     * @memberof ReturnItem
     */
    totalWithWeightedShippingAndHandling?: number | null;
    /**
     * The identifer of the item
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
     * Custom data for a given vendor set within the commerce process.
     * @type {object}
     * @memberof ReturnItem
     */
    data?: object | null;
    /**
     * 
     * @type {Array<InventoryTags>}
     * @memberof ReturnItem
     */
    inventoryTags?: Array<InventoryTags> | null;
}
/**
 * Collection of return items listed on the order.
 * @export
 * @interface ReturnItemCollection
 */
export interface ReturnItemCollection {
    /**
     * 
     * @type {number}
     * @memberof ReturnItemCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<ReturnItem>}
     * @memberof ReturnItemCollection
     */
    items?: Array<ReturnItem> | null;
}
/**
 * 
 * @export
 * @interface ReturnItemSpecifier
 */
export interface ReturnItemSpecifier {
    /**
     * 
     * @type {string}
     * @memberof ReturnItemSpecifier
     */
    returnItemId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ReturnItemSpecifier
     */
    quantity?: number;
}
/**
 * Represents a quantity associated with a given reason for a return
 * @export
 * @interface ReturnReason
 */
export interface ReturnReason {
    /**
     * The reason this item has been returned.
     * @type {string}
     * @memberof ReturnReason
     */
    reason?: string | null;
    /**
     * The quantity associated with this Reason.
     * @type {number}
     * @memberof ReturnReason
     */
    quantity?: number;
}
/**
 * 
 * @export
 * @interface ReturnRefundDetails
 */
export interface ReturnRefundDetails {
    /**
     * 
     * @type {string}
     * @memberof ReturnRefundDetails
     */
    returnId?: string | null;
    /**
     * 
     * @type {Array<RefundPaymentAction>}
     * @memberof ReturnRefundDetails
     */
    refunds?: Array<RefundPaymentAction> | null;
    /**
     * 
     * @type {Array<ReturnItem>}
     * @memberof ReturnRefundDetails
     */
    items?: Array<ReturnItem> | null;
    /**
     * 
     * @type {number}
     * @memberof ReturnRefundDetails
     */
    defaultReturnProcessingFee?: number;
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
     * Maximum quantity that can be returned
     * @type {number}
     * @memberof ReturnRuleInfo
     */
    maxQty?: number | null;
    /**
     * Return window within which an item can be returned
     * @type {number}
     * @memberof ReturnRuleInfo
     */
    maxDays?: number | null;
    /**
     * Return rule code which is applied
     * @type {string}
     * @memberof ReturnRuleInfo
     */
    ruleCode?: string | null;
}
/**
 * 
 * @export
 * @interface ShipmentAdjustment
 */
export interface ShipmentAdjustment {
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
    dutyAdjustment?: number | null;
    /**
     * 
     * @type {AppeasementReason}
     * @memberof ShipmentAdjustment
     */
    appeasementReason?: AppeasementReason;
}
/**
 * 
 * @export
 * @interface ShipmentAndItemsAdjustment
 */
export interface ShipmentAndItemsAdjustment {
    /**
     * 
     * @type {ShipmentAdjustment}
     * @memberof ShipmentAndItemsAdjustment
     */
    shipmentAdjustment?: ShipmentAdjustment;
    /**
     * 
     * @type {Array<BulkShipmentItemAdjustment>}
     * @memberof ShipmentAndItemsAdjustment
     */
    itemAdjustments?: Array<BulkShipmentItemAdjustment> | null;
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
     * @type {Array<FulfillmentField>}
     * @memberof ShipmentItem
     */
    fulfillmentFields?: Array<FulfillmentField> | null;
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
     * @type {Array<GiftCard>}
     * @memberof ShipmentItem
     */
    giftCards?: Array<GiftCard> | null;
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
    serialNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShipmentItem
     */
    condition?: string | null;
    /**
     * 
     * @type {SubstituteInfo}
     * @memberof ShipmentItem
     */
    substituteInfo?: SubstituteInfo;
    /**
     * 
     * @type {boolean}
     * @memberof ShipmentItem
     */
    allowsSubstitution?: boolean | null;
    /**
     * 
     * @type {ReturnRuleInfo}
     * @memberof ShipmentItem
     */
    returnRuleInfo?: ReturnRuleInfo;
}
/**
 * 
 * @export
 * @interface ShipmentItemAdjustment
 */
export interface ShipmentItemAdjustment {
    /**
     * Unit price override
     * @type {number}
     * @memberof ShipmentItemAdjustment
     */
    overridePrice?: number | null;
    /**
     * 
     * @type {AppeasementReason}
     * @memberof ShipmentItemAdjustment
     */
    appeasementReason?: AppeasementReason;
}
/**
 * 
 * @export
 * @interface ShipmentNote
 */
export interface ShipmentNote {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ShipmentNote
     */
    attributes?: { [key: string]: any; } | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof ShipmentNote
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof ShipmentNote
     */
    noteId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShipmentNote
     */
    noteText?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShipmentNote
     */
    role?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShipmentNote
     */
    username?: string | null;
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
     * Gift message associated with this order.
     * @type {string}
     * @memberof ShopperNotes
     */
    giftMessage?: string | null;
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
}
/**
 * 
 * @export
 * @interface SplitShipmentsObject
 */
export interface SplitShipmentsObject {
    /**
     * 
     * @type {CommerceRuntimeShipment}
     * @memberof SplitShipmentsObject
     */
    originalShipment?: CommerceRuntimeShipment;
    /**
     * 
     * @type {Array<CommerceRuntimeShipment>}
     * @memberof SplitShipmentsObject
     */
    newShipments?: Array<CommerceRuntimeShipment> | null;
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
 * @interface SubstitutedItem
 */
export interface SubstitutedItem {
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    actualPrice?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    allocatedQuantity?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof SubstitutedItem
     */
    allowsBackOrder?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof SubstitutedItem
     */
    allowsFutureAllocate?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof SubstitutedItem
     */
    allowsSubstitution?: boolean | null;
    /**
     * 
     * @type {FulfillmentServiceAppeasementReason}
     * @memberof SubstitutedItem
     */
    appeasementReason?: FulfillmentServiceAppeasementReason;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof SubstitutedItem
     */
    attributes?: { [key: string]: any; } | null;
    /**
     * 
     * @type {FulfillmentServiceAuditInfo}
     * @memberof SubstitutedItem
     */
    auditInfo?: FulfillmentServiceAuditInfo;
    /**
     * 
     * @type {boolean}
     * @memberof SubstitutedItem
     */
    autoSubstitution?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItem
     */
    backorderReleaseDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItem
     */
    cartItemId?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SubstitutedItem
     */
    childItemIds?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItem
     */
    condition?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItem
     */
    creditCurrencyCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    creditValue?: number | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof SubstitutedItem
     */
    data?: { [key: string]: any; } | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    duty?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItem
     */
    expectedDeliveryDate?: string | null;
    /**
     * 
     * @type {Array<FulfillmentServiceFulfillmentField>}
     * @memberof SubstitutedItem
     */
    fulfillmentFields?: Array<FulfillmentServiceFulfillmentField> | null;
    /**
     * 
     * @type {Array<FulfillmentServiceGiftCard>}
     * @memberof SubstitutedItem
     */
    giftCards?: Array<FulfillmentServiceGiftCard> | null;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItem
     */
    giftMessage?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItem
     */
    goodsType?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    handling?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    handlingDiscount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    handlingTax?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    height?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItem
     */
    imageUrl?: string | null;
    /**
     * 
     * @type {Array<FulfillmentServiceInventoryAllocation>}
     * @memberof SubstitutedItem
     */
    inventoryAllocations?: Array<FulfillmentServiceInventoryAllocation> | null;
    /**
     * 
     * @type {Array<FulfillmentServiceInventoryTag>}
     * @memberof SubstitutedItem
     */
    inventoryTags?: Array<FulfillmentServiceInventoryTag> | null;
    /**
     * 
     * @type {boolean}
     * @memberof SubstitutedItem
     */
    isAssemblyRequired?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof SubstitutedItem
     */
    isGift?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof SubstitutedItem
     */
    isPackagedStandAlone?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof SubstitutedItem
     */
    isReservedInventory?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof SubstitutedItem
     */
    isTaxable?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    itemDiscount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    itemTax?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    length?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    lineId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    lineItemAdjustment?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    lineItemCost?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItem
     */
    locatorName?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof SubstitutedItem
     */
    manageStock?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItem
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItem
     */
    optionAttributeFQN?: string | null;
    /**
     * 
     * @type {Array<FulfillmentServiceProductOption>}
     * @memberof SubstitutedItem
     */
    options?: Array<FulfillmentServiceProductOption> | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    originalLineId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItem
     */
    originalOrderItemId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    originalQuantity?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    overridePrice?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItem
     */
    parentItemId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItem
     */
    partNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItem
     */
    priceMode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItem
     */
    productCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItem
     */
    purchaseLocation?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    quantity?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    readyForPickupQuantity?: number | null;
    /**
     * 
     * @type {FulfillmentServiceReturnRuleInfo}
     * @memberof SubstitutedItem
     */
    returnRuleInfo?: FulfillmentServiceReturnRuleInfo;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItem
     */
    serialNumber?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    shipping?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    shippingDiscount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    shippingTax?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItem
     */
    sku?: string | null;
    /**
     * 
     * @type {FulfillmentServiceSubstituteInfo}
     * @memberof SubstitutedItem
     */
    substituteInfo?: FulfillmentServiceSubstituteInfo;
    /**
     * 
     * @type {Array<number>}
     * @memberof SubstitutedItem
     */
    substituteItemLineIds?: Array<number> | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    substituteQuantity?: number | null;
    /**
     * 
     * @type {FulfillmentServiceSubstituteReason}
     * @memberof SubstitutedItem
     */
    substituteReason?: FulfillmentServiceSubstituteReason;
    /**
     * 
     * @type {any}
     * @memberof SubstitutedItem
     */
    taxData?: any | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    taxableHandling?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    taxableLineItemCost?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    taxableShipping?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    transferQuantity?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    trueTransferQuantity?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    unitPrice?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItem
     */
    upc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItem
     */
    variationProductCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    weight?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItem
     */
    weightUnit?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    weightedDutyAdjustment?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    weightedHandlingAdjustment?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    weightedHandlingTaxAdjustment?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    weightedLineItemTaxAdjustment?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    weightedShipmentAdjustment?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    weightedShippingAdjustment?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    weightedShippingTaxAdjustment?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    width?: number | null;
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
 * @interface Tracking
 */
export interface Tracking {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof Tracking
     */
    attributes?: { [key: string]: any; } | null;
    /**
     * 
     * @type {string}
     * @memberof Tracking
     */
    number?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Tracking
     */
    url?: string | null;
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
/**
 * Details of the wishlist, items listed in the wishlist, and any system messages.
 * @export
 * @interface Wishlist
 */
export interface Wishlist {
    /**
     * Unique identifier of the customer account.
     * @type {number}
     * @memberof Wishlist
     */
    customerAccountId?: number | null;
    /**
     * Open-ended Wishlist type, e.g. giftlist, gift, wish, wishlist, wedding, baby.  If the merchant does not need this level of granularity this is always null.
     * @type {string}
     * @memberof Wishlist
     */
    typeTag?: string | null;
    /**
     * Name of the list that is display or potentially shared (e.g. friends and family may view this description if the list is public and the list owner may see this description when viewing the list)
     * @type {string}
     * @memberof Wishlist
     */
    name?: string | null;
    /**
     * List of items in the wishlist.
     * @type {Array<WishlistItem>}
     * @memberof Wishlist
     */
    items?: Array<WishlistItem> | null;
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
     * Version for concurrency purposes
     * @type {string}
     * @memberof Wishlist
     */
    version?: string | null;
    /**
     * Was this object imported from an external system?
     * @type {boolean}
     * @memberof Wishlist
     */
    isImport?: boolean | null;
    /**
     * Date this item was imported
     * @type {string}
     * @memberof Wishlist
     */
    importDate?: string | null;
    /**
     * Id in an external system this item may have been imported from
     * @type {string}
     * @memberof Wishlist
     */
    externalId?: string | null;
    /**
     * Unique identifier of the shopper who created the cart.
     * @type {string}
     * @memberof Wishlist
     */
    userId?: string | null;
    /**
     * Unique identifier of the CommerceAggregate object (e.g. order, cart, wishlist, etc.).
     * @type {string}
     * @memberof Wishlist
     */
    id?: string | null;
    /**
     * Unique identifier of the Tenant.
     * @type {number}
     * @memberof Wishlist
     */
    tenantId?: number | null;
    /**
     * Unique identifier of the Site.
     * @type {number}
     * @memberof Wishlist
     */
    siteId?: number | null;
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
     * Determines the interaction type that a customer will use to create this object.
     * Valid values are: Website, Store, Call, Unknown
     * @type {string}
     * @memberof Wishlist
     */
    customerInteractionType?: string | null;
    /**
     * 
     * @type {FulfillmentInfo}
     * @memberof Wishlist
     */
    fulfillmentInfo?: FulfillmentInfo;
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
    suggestedDiscounts?: Array<SuggestedDiscount> | null;
    /**
     * 
     * @type {Array<SuggestedDiscount>}
     * @memberof Wishlist
     */
    rejectedDiscounts?: Array<SuggestedDiscount> | null;
    /**
     * Custom data for a given vendor set within the commerce process.
     * @type {object}
     * @memberof Wishlist
     */
    data?: object | null;
    /**
     * Storage for any additional/custom tax data.
     * @type {object}
     * @memberof Wishlist
     */
    taxData?: object | null;
    /**
     * Combined price for all cart items, including all selected options but excluding any discounts.
     * @type {number}
     * @memberof Wishlist
     */
    subtotal?: number | null;
    /**
     * Combined price for all cart items, including all selected options as well as any discounts.
     * @type {number}
     * @memberof Wishlist
     */
    discountedSubtotal?: number | null;
    /**
     * Amount of the discounts applied to all items in the cart. This is a negative number.  This also includes the order level discounts.
     * @type {number}
     * @memberof Wishlist
     */
    discountTotal?: number | null;
    /**
     * Subtotal minus the discounted total
     * @type {number}
     * @memberof Wishlist
     */
    discountedTotal?: number | null;
    /**
     * Shipping does not appear on cart.
     * @type {number}
     * @memberof Wishlist
     */
    shippingTotal?: number | null;
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
     * Total tax on handling
     * @type {number}
     * @memberof Wishlist
     */
    handlingTaxTotal?: number | null;
    /**
     * Not implemented. Tax does not appear on cart.
     * @type {number}
     * @memberof Wishlist
     */
    itemTaxTotal?: number | null;
    /**
     * Tax does not appear on cart.
     * @type {number}
     * @memberof Wishlist
     */
    taxTotal?: number | null;
    /**
     * Not implemented. Total cost of fees for all items in the cart.
     * @type {number}
     * @memberof Wishlist
     */
    feeTotal?: number | null;
    /**
     * Final total amount of the order including all discounts, shipping, and tax.
     * @type {number}
     * @memberof Wishlist
     */
    total?: number | null;
    /**
     * Line Item Subtotals with Order Adjustments
     * @type {number}
     * @memberof Wishlist
     */
    lineItemSubtotalWithOrderAdjustments?: number | null;
    /**
     * Shipping Amount before discount and adjustments
     * @type {number}
     * @memberof Wishlist
     */
    shippingAmountBeforeDiscountsAndAdjustments?: number | null;
    /**
     * Occasionally the commerce runtime may validate that item/product names, descriptions, and prices have not changed. 
     * If changed, it updates LastValidationDate.
     * @type {string}
     * @memberof Wishlist
     */
    lastValidationDate?: string | null;
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
     * List of messages displayed by the system based on the last cart action, for example, when a product price has changed or is out-of-stock. System-supplied and read-only.
     * @type {Array<CommerceRuntimeChangeMessage>}
     * @memberof Wishlist
     */
    changeMessages?: Array<CommerceRuntimeChangeMessage> | null;
    /**
     * Extra properties (key-value pairs) that extend the primary object. Think of this as a property bag of string keys and string values.
     * @type {Array<ExtendedProperty>}
     * @memberof Wishlist
     */
    extendedProperties?: Array<ExtendedProperty> | null;
    /**
     * List of Mozu.CommerceRuntime.Contracts.Commerce.ThresholdMessage objects that are valid for the current value of the cart/order.
     * @type {Array<CommerceRuntimeThresholdMessage>}
     * @memberof Wishlist
     */
    discountThresholdMessages?: Array<CommerceRuntimeThresholdMessage> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof Wishlist
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * Paged collection of wishlists.
 * @export
 * @interface WishlistCollection
 */
export interface WishlistCollection {
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
    pageSize?: number;
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
    totalCount?: number;
    /**
     * 
     * @type {Array<Wishlist>}
     * @memberof WishlistCollection
     */
    items?: Array<Wishlist> | null;
}
/**
 * A single line item of an order.
 * @export
 * @interface WishlistItem
 */
export interface WishlistItem {
    /**
     * Unique identifier of the wishlist line item. System-supplied and read-only.
     * @type {string}
     * @memberof WishlistItem
     */
    id?: string | null;
    /**
     * Comments for the wishlist item that are entered by the wishlist owner
     * @type {string}
     * @memberof WishlistItem
     */
    comments?: string | null;
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
    /**
     * Determines if the item is using external or internal(catalog) pricing
     * @type {string}
     * @memberof WishlistItem
     */
    priceMode?: string | null;
    /**
     * Locale code for language that appears in text and descriptions on the site, for example, en_US. 
     * This is not the currency code. Currently only en_US is supported.
     * @type {string}
     * @memberof WishlistItem
     */
    localeCode?: string | null;
    /**
     * The location where the product is being purchased.. default is null. Products can have different prices
     * by purchaseLocation via custom priceListResolution...
     * @type {string}
     * @memberof WishlistItem
     */
    purchaseLocation?: string | null;
    /**
     * The line id assigned to the order item. Visible only in the Admin, this is set from the Admin or
     * in CommerceRuntime when a cart is converted to an order.
     * @type {number}
     * @memberof WishlistItem
     */
    lineId?: number | null;
    /**
     * 
     * @type {CommerceRuntimeProduct}
     * @memberof WishlistItem
     */
    product?: CommerceRuntimeProduct;
    /**
     * Number of products ordered.
     * @type {number}
     * @memberof WishlistItem
     */
    quantity?: number;
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
     * Line item subtotal (quantity multiplied by price) before discounts.
     * @type {number}
     * @memberof WishlistItem
     */
    subtotal?: number | null;
    /**
     * Line item extended total (quantity multiplied by unit extended price) before discounts.
     * @type {number}
     * @memberof WishlistItem
     */
    extendedTotal?: number | null;
    /**
     * Line item subtotal (quantity multiplied by price) before discounts.
     * @type {number}
     * @memberof WishlistItem
     */
    taxableTotal?: number | null;
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
     * Total price of taxes that apply to products in this item.
     * @type {number}
     * @memberof WishlistItem
     */
    itemTaxTotal?: number | null;
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
     * Handling Amount for this item
     * @type {number}
     * @memberof WishlistItem
     */
    handlingAmount?: number | null;
    /**
     * Not implemented. Total cost of fees that apply to this item.
     * @type {number}
     * @memberof WishlistItem
     */
    feeTotal?: number | null;
    /**
     * Total price of this cart item taking into account any discounts.
     * @type {number}
     * @memberof WishlistItem
     */
    total?: number | null;
    /**
     * 
     * @type {CommerceUnitPrice}
     * @memberof WishlistItem
     */
    unitPrice?: CommerceUnitPrice;
    /**
     * 
     * @type {CommerceRuntimeAppliedLineItemProductDiscount}
     * @memberof WishlistItem
     */
    productDiscount?: CommerceRuntimeAppliedLineItemProductDiscount;
    /**
     * A list of discounts applied to the product
     * @type {Array<CommerceRuntimeAppliedLineItemProductDiscount>}
     * @memberof WishlistItem
     */
    productDiscounts?: Array<CommerceRuntimeAppliedLineItemProductDiscount> | null;
    /**
     * A discount applied to the shipping
     * @type {Array<CommerceRuntimeAppliedLineItemShippingDiscount>}
     * @memberof WishlistItem
     */
    shippingDiscounts?: Array<CommerceRuntimeAppliedLineItemShippingDiscount> | null;
    /**
     * Custom data for a given vendor set within the commerce process.
     * @type {object}
     * @memberof WishlistItem
     */
    data?: object | null;
    /**
     * Storage for any additional/custom tax data.
     * @type {object}
     * @memberof WishlistItem
     */
    taxData?: object | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof WishlistItem
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * Shipping amount before Discounts and adjustments
     * @type {number}
     * @memberof WishlistItem
     */
    shippingAmountBeforeDiscountsAndAdjustments?: number | null;
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
     * Order Level taxable sub total
     * @type {number}
     * @memberof WishlistItem
     */
    adjustedLineItemSubtotal?: number | null;
    /**
     * Taxable Subtotal including Weighted Order amounts
     * @type {number}
     * @memberof WishlistItem
     */
    totalWithoutWeightedShippingAndHandling?: number | null;
    /**
     * Order Level tax applied to this Item
     * @type {number}
     * @memberof WishlistItem
     */
    weightedOrderTax?: number | null;
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
     * Order Level handling fee applied to this item
     * @type {number}
     * @memberof WishlistItem
     */
    weightedOrderHandlingFee?: number | null;
    /**
     * Order Level handling fee tax applied to this item
     * @type {number}
     * @memberof WishlistItem
     */
    weightedOrderHandlingFeeTax?: number | null;
    /**
     * Order Level handling fee discount applied to this item
     * @type {number}
     * @memberof WishlistItem
     */
    weightedOrderHandlingFeeDiscount?: number | null;
    /**
     * Order Level Duty applied to this Item
     * @type {number}
     * @memberof WishlistItem
     */
    weightedOrderDuty?: number | null;
    /**
     * Line item total with line item, Tax, Weighted Tax with Weighted shipping and handling costs
     * @type {number}
     * @memberof WishlistItem
     */
    totalWithWeightedShippingAndHandling?: number | null;
    /**
     * Order level handling adjusment that applies to this item.
     * @type {number}
     * @memberof WishlistItem
     */
    weightedOrderHandlingAdjustment?: number | null;
    /**
     * Track the discoutid from which the item was auto added
     * @type {number}
     * @memberof WishlistItem
     */
    autoAddDiscountId?: number | null;
    /**
     * Assembly Required for this order item
     * @type {boolean}
     * @memberof WishlistItem
     */
    isAssemblyRequired?: boolean;
    /**
     * List of Child Item Ids for this order item
     * @type {Array<string>}
     * @memberof WishlistItem
     */
    childItemIds?: Array<string> | null;
    /**
     * Indicates Parent Item Id for this order item
     * @type {string}
     * @memberof WishlistItem
     */
    parentItemId?: string | null;
    /**
     * 
     * @type {Array<InventoryTags>}
     * @memberof WishlistItem
     */
    inventoryTags?: Array<InventoryTags> | null;
    /**
     * 
     * @type {number}
     * @memberof WishlistItem
     */
    lineItemAdjustment?: number | null;
    /**
     * Indicate Duty Amount for this item.
     * @type {number}
     * @memberof WishlistItem
     */
    dutyAmount?: number | null;
    /**
     * 
     * @type {SubstituteInfo}
     * @memberof WishlistItem
     */
    substituteInfo?: SubstituteInfo;
}
/**
 * Paged collection of wishlists.
 * @export
 * @interface WishlistItemCollection
 */
export interface WishlistItemCollection {
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
    pageSize?: number;
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
    totalCount?: number;
    /**
     * 
     * @type {Array<WishlistItem>}
     * @memberof WishlistItemCollection
     */
    items?: Array<WishlistItem> | null;
}
/**
 * 
 * @export
 * @interface WorkflowState
 */
export interface WorkflowState {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof WorkflowState
     */
    attributes?: { [key: string]: any; } | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof WorkflowState
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof WorkflowState
     */
    completedDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof WorkflowState
     */
    processInstanceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof WorkflowState
     */
    shipmentState?: string | null;
    /**
     * 
     * @type {Array<FulfillmentTask>}
     * @memberof WorkflowState
     */
    taskList?: Array<FulfillmentTask> | null;
}
