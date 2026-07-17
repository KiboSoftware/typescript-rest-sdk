/* tslint:disable */
/* eslint-disable */
/**
 * Details of the discount applied to a product.
 * @export
 * @interface AppliedLineItemDiscount
 */
export interface AppliedLineItemDiscount {
    /**
     * Quantity of items from the line item that the discount applies to.
     * @type {number}
     * @memberof AppliedLineItemDiscount
     */
    quantity?: number;
    /**
     * Discount impact per unit for the quantity applied.
     * This value is not rounded.
     * ImpactPerUnit * Quantity = Impact @ Quantity
     * @type {number}
     * @memberof AppliedLineItemDiscount
     */
    impactPerUnit?: number;
    /**
     * Signifies that the discount is forced and not applied via best match.
     * @type {boolean}
     * @memberof AppliedLineItemDiscount
     */
    isForced?: boolean;
    /**
     * 
     * @type {number}
     * @memberof AppliedLineItemDiscount
     */
    normalizedImpact?: number;
    /**
     * Value of the discount, that is how much the shopper saves if discount is applied.
     * @type {number}
     * @memberof AppliedLineItemDiscount
     */
    impact?: number;
    /**
     * 
     * @type {PricingRuntimeDiscount}
     * @memberof AppliedLineItemDiscount
     */
    discount?: PricingRuntimeDiscount;
    /**
     * Code of the coupon associated with the discount (if a coupon code is required in order to receive the discount).
     * @type {string}
     * @memberof AppliedLineItemDiscount
     */
    couponCode?: string | null;
    /**
     * Contains coupon set id if there is one
     * @type {number}
     * @memberof AppliedLineItemDiscount
     */
    couponSetId?: number | null;
}
/**
 * 
 * @export
 * @interface AppliedOrderShippingDiscount
 */
export interface AppliedOrderShippingDiscount {
    /**
     * Unique identifier of the shipping method discount.
     * @type {string}
     * @memberof AppliedOrderShippingDiscount
     */
    shippingMethodCode?: string | null;
    /**
     * Value of the discount, that is how much the shopper saves if discount is applied.
     * @type {number}
     * @memberof AppliedOrderShippingDiscount
     */
    impact?: number;
    /**
     * 
     * @type {PricingRuntimeDiscount}
     * @memberof AppliedOrderShippingDiscount
     */
    discount?: PricingRuntimeDiscount;
    /**
     * Code of the coupon associated with the discount (if a coupon code is required in order to receive the discount).
     * @type {string}
     * @memberof AppliedOrderShippingDiscount
     */
    couponCode?: string | null;
    /**
     * Contains coupon set id if there is one
     * @type {number}
     * @memberof AppliedOrderShippingDiscount
     */
    couponSetId?: number | null;
}
/**
 * 
 * @export
 * @interface AutoAddDiscountTarget
 */
export interface AutoAddDiscountTarget {
    /**
     * Unique identifier of the discount. System-supplied and read-only.
     * @type {number}
     * @memberof AutoAddDiscountTarget
     */
    discountId?: number;
    /**
     * Friendly description of the discount.
     * @type {string}
     * @memberof AutoAddDiscountTarget
     */
    friendlyDescription?: string | null;
    /**
     * Included product codes
     * @type {Array<string>}
     * @memberof AutoAddDiscountTarget
     */
    includedProductCodes?: Array<string> | null;
}
/**
 * Represents a product category and quantity constraint
 * @export
 * @interface CategoryDiscountCondition
 */
export interface CategoryDiscountCondition {
    /**
     * Unique identifier of the category to which the discount condition applies.
     * @type {number}
     * @memberof CategoryDiscountCondition
     */
    categoryId?: number;
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
 * @interface ContinuityRecurrenceSettings
 */
export interface ContinuityRecurrenceSettings {
    /**
     * Continuity ordinal to start discounting
     * @type {number}
     * @memberof ContinuityRecurrenceSettings
     */
    startOrdinal?: number | null;
    /**
     * Interval until next discount applies
     * @type {number}
     * @memberof ContinuityRecurrenceSettings
     */
    interval?: number | null;
    /**
     * Continuity ordinal to stop discounting
     * @type {number}
     * @memberof ContinuityRecurrenceSettings
     */
    stopOrdinal?: number | null;
}
/**
 * Represents a custom property for a discount.
 * @export
 * @interface DiscountCustomProperty
 */
export interface DiscountCustomProperty {
    /**
     * Gets or sets the code of the discount custom property.
     * @type {string}
     * @memberof DiscountCustomProperty
     */
    code?: string | null;
    /**
     * Gets or sets the name of the discount custom property.
     * @type {string}
     * @memberof DiscountCustomProperty
     */
    name?: string | null;
    /**
     * Gets or sets the value of the discount custom property.
     * @type {string}
     * @memberof DiscountCustomProperty
     */
    value?: string | null;
}
/**
 * Request parameters to search for discounts
 * @export
 * @interface FindDiscountsRequestBase
 */
export interface FindDiscountsRequestBase {
    /**
     * List of product codes to query for discounts
     * Limit: 20 product codes
     * @type {Array<string>}
     * @memberof FindDiscountsRequestBase
     */
    productCodes?: Array<string> | null;
    /**
     * Set false to exclude discounts that require one of the specified products to be purchased
     * default is true
     * @type {boolean}
     * @memberof FindDiscountsRequestBase
     */
    isPurchaseRequirement?: boolean;
    /**
     * When true, include discounts that are applied when there is no condition on the discount.
     * By default, these are not included.
     * @type {boolean}
     * @memberof FindDiscountsRequestBase
     */
    includeUnconditional?: boolean;
    /**
     * List of customer segments that the discounts are applicable to.
     * If not specified, only discounts that are not restricted to any customer segment are returned.
     * When specified, only discounts that are applicable to one of the specified customer segments are returned.
     * @type {Array<number>}
     * @memberof FindDiscountsRequestBase
     */
    customerSegmentIds?: Array<number> | null;
    /**
     * List of discount labels to filter discounts by.
     * Limit: 10 labels
     * @type {Array<string>}
     * @memberof FindDiscountsRequestBase
     */
    labels?: Array<string> | null;
    /**
     * Types of discounts to search for Product, Shipping, or All
     * when not specified, all types are returned.
     * @type {string}
     * @memberof FindDiscountsRequestBase
     */
    targetType?: string | null;
    /**
     * List of location codes to filter discounts by.
     * when not specified all discounts are returned.
     * @type {Array<string>}
     * @memberof FindDiscountsRequestBase
     */
    locationCodes?: Array<string> | null;
}
/**
 * 
 * @export
 * @interface FindDiscountsResponse
 */
export interface FindDiscountsResponse {
    /**
     * 
     * @type {Array<PricingRuntimeDiscount>}
     * @memberof FindDiscountsResponse
     */
    discounts?: Array<PricingRuntimeDiscount> | null;
    /**
     * 
     * @type {Array<ProductDiscountMap>}
     * @memberof FindDiscountsResponse
     */
    targets?: Array<ProductDiscountMap> | null;
    /**
     * 
     * @type {Array<ProductDiscountMap>}
     * @memberof FindDiscountsResponse
     */
    purchaseRequirements?: Array<ProductDiscountMap> | null;
}
/**
 * Request parameters to search for discounts
 * @export
 * @interface FindItemDiscountsRequest
 */
export interface FindItemDiscountsRequest {
    /**
     * Set false to exclude discounts that require one of the specified products to be a target
     * Default is true
     * @type {boolean}
     * @memberof FindItemDiscountsRequest
     */
    isTarget?: boolean;
    /**
     * List of product codes to query for discounts
     * Limit: 20 product codes
     * @type {Array<string>}
     * @memberof FindItemDiscountsRequest
     */
    productCodes?: Array<string> | null;
    /**
     * Set false to exclude discounts that require one of the specified products to be purchased
     * default is true
     * @type {boolean}
     * @memberof FindItemDiscountsRequest
     */
    isPurchaseRequirement?: boolean;
    /**
     * When true, include discounts that are applied when there is no condition on the discount.
     * By default, these are not included.
     * @type {boolean}
     * @memberof FindItemDiscountsRequest
     */
    includeUnconditional?: boolean;
    /**
     * List of customer segments that the discounts are applicable to.
     * If not specified, only discounts that are not restricted to any customer segment are returned.
     * When specified, only discounts that are applicable to one of the specified customer segments are returned.
     * @type {Array<number>}
     * @memberof FindItemDiscountsRequest
     */
    customerSegmentIds?: Array<number> | null;
    /**
     * List of discount labels to filter discounts by.
     * Limit: 10 labels
     * @type {Array<string>}
     * @memberof FindItemDiscountsRequest
     */
    labels?: Array<string> | null;
    /**
     * Types of discounts to search for Product, Shipping, or All
     * when not specified, all types are returned.
     * @type {string}
     * @memberof FindItemDiscountsRequest
     */
    targetType?: string | null;
    /**
     * List of location codes to filter discounts by.
     * when not specified all discounts are returned.
     * @type {Array<string>}
     * @memberof FindItemDiscountsRequest
     */
    locationCodes?: Array<string> | null;
}
/**
 * Request parameters to search for order level discounts
 * @export
 * @interface FindOrderDiscountsRequest
 */
export interface FindOrderDiscountsRequest {
    /**
     * List of product codes to query for discounts
     * Limit: 20 product codes
     * @type {Array<string>}
     * @memberof FindOrderDiscountsRequest
     */
    productCodes?: Array<string> | null;
    /**
     * Set false to exclude discounts that require one of the specified products to be purchased
     * default is true
     * @type {boolean}
     * @memberof FindOrderDiscountsRequest
     */
    isPurchaseRequirement?: boolean;
    /**
     * When true, include discounts that are applied when there is no condition on the discount.
     * By default, these are not included.
     * @type {boolean}
     * @memberof FindOrderDiscountsRequest
     */
    includeUnconditional?: boolean;
    /**
     * List of customer segments that the discounts are applicable to.
     * If not specified, only discounts that are not restricted to any customer segment are returned.
     * When specified, only discounts that are applicable to one of the specified customer segments are returned.
     * @type {Array<number>}
     * @memberof FindOrderDiscountsRequest
     */
    customerSegmentIds?: Array<number> | null;
    /**
     * List of discount labels to filter discounts by.
     * Limit: 10 labels
     * @type {Array<string>}
     * @memberof FindOrderDiscountsRequest
     */
    labels?: Array<string> | null;
    /**
     * Types of discounts to search for Product, Shipping, or All
     * when not specified, all types are returned.
     * @type {string}
     * @memberof FindOrderDiscountsRequest
     */
    targetType?: string | null;
    /**
     * List of location codes to filter discounts by.
     * when not specified all discounts are returned.
     * @type {Array<string>}
     * @memberof FindOrderDiscountsRequest
     */
    locationCodes?: Array<string> | null;
}
/**
 * The tax applied to an individual order item.
 * @export
 * @interface ItemTaxContext
 */
export interface ItemTaxContext {
    /**
     * Unique identifier of the line item.
     * @type {string}
     * @memberof ItemTaxContext
     */
    id?: string | null;
    /**
     * Merchant-created code that uniquely identifies the product.
     * @type {string}
     * @memberof ItemTaxContext
     */
    productCode?: string | null;
    /**
     * The number of products in this lineitem
     * @type {number}
     * @memberof ItemTaxContext
     */
    quantity?: number;
    /**
     * Line item tax amount not including shipping
     * @type {number}
     * @memberof ItemTaxContext
     */
    tax?: number;
    /**
     * The shipping tax amount for this line item
     * @type {number}
     * @memberof ItemTaxContext
     */
    shippingTax?: number;
    /**
     * Duty Amount for this line item
     * @type {number}
     * @memberof ItemTaxContext
     */
    duty?: number | null;
    /**
     * Storage for any additional/custom tax data.
     * @type {object}
     * @memberof ItemTaxContext
     */
    taxData?: object | null;
}
/**
 * 
 * @export
 * @interface OrderTaxContext
 */
export interface OrderTaxContext {
    /**
     * Taxes applied to each item in the order.
     * @type {Array<ItemTaxContext>}
     * @memberof OrderTaxContext
     */
    itemTaxContexts?: Array<ItemTaxContext> | null;
    /**
     * Rollup shipping tax for this order
     * @type {number}
     * @memberof OrderTaxContext
     */
    shippingTax?: number;
    /**
     * The handling fee tax amount for this line item
     * @type {number}
     * @memberof OrderTaxContext
     */
    handlingFeeTax?: number;
    /**
     * Rollup tax on the order not including shipping
     * @type {number}
     * @memberof OrderTaxContext
     */
    orderTax?: number;
    /**
     * Storage for any additional/custom tax data.
     * @type {object}
     * @memberof OrderTaxContext
     */
    taxData?: object | null;
}
/**
 * Details of the applied discount, including how much the shopper saves if the discount is applied and the coupon
 * code
 * required to redeem the discount, if any.
 * @export
 * @interface PricingRuntimeAppliedDiscount
 */
export interface PricingRuntimeAppliedDiscount {
    /**
     * Value of the discount, that is how much the shopper saves if discount is applied.
     * @type {number}
     * @memberof PricingRuntimeAppliedDiscount
     */
    impact?: number;
    /**
     * 
     * @type {PricingRuntimeDiscount}
     * @memberof PricingRuntimeAppliedDiscount
     */
    discount?: PricingRuntimeDiscount;
    /**
     * Code of the coupon associated with the discount (if a coupon code is required in order to receive the discount).
     * @type {string}
     * @memberof PricingRuntimeAppliedDiscount
     */
    couponCode?: string | null;
    /**
     * Contains coupon set id if there is one
     * @type {number}
     * @memberof PricingRuntimeAppliedDiscount
     */
    couponSetId?: number | null;
}
/**
 * 
 * @export
 * @interface PricingRuntimeAppliedLineItemProductDiscount
 */
export interface PricingRuntimeAppliedLineItemProductDiscount {
    /**
     * Indicates that this discount is to be applied to the sale price if true or the list price if false.
     * This only applies to product and line item discounts.
     * @type {boolean}
     * @memberof PricingRuntimeAppliedLineItemProductDiscount
     */
    appliesToSalePrice?: boolean;
    /**
     * Value of the discount, that is how much the shopper saves if discount is applied.
     * @type {number}
     * @memberof PricingRuntimeAppliedLineItemProductDiscount
     */
    impact?: number;
    /**
     * 
     * @type {PricingRuntimeDiscount}
     * @memberof PricingRuntimeAppliedLineItemProductDiscount
     */
    discount?: PricingRuntimeDiscount;
    /**
     * Code of the coupon associated with the discount (if a coupon code is required in order to receive the discount).
     * @type {string}
     * @memberof PricingRuntimeAppliedLineItemProductDiscount
     */
    couponCode?: string | null;
    /**
     * Contains coupon set id if there is one
     * @type {number}
     * @memberof PricingRuntimeAppliedLineItemProductDiscount
     */
    couponSetId?: number | null;
}
/**
 * 
 * @export
 * @interface PricingRuntimeAppliedLineItemShippingDiscount
 */
export interface PricingRuntimeAppliedLineItemShippingDiscount {
    /**
     * Unique identifier of the shipping method discount.
     * @type {string}
     * @memberof PricingRuntimeAppliedLineItemShippingDiscount
     */
    shippingMethodCode?: string | null;
    /**
     * Value of the discount, that is how much the shopper saves if discount is applied.
     * @type {number}
     * @memberof PricingRuntimeAppliedLineItemShippingDiscount
     */
    impact?: number;
    /**
     * 
     * @type {PricingRuntimeDiscount}
     * @memberof PricingRuntimeAppliedLineItemShippingDiscount
     */
    discount?: PricingRuntimeDiscount;
    /**
     * Code of the coupon associated with the discount (if a coupon code is required in order to receive the discount).
     * @type {string}
     * @memberof PricingRuntimeAppliedLineItemShippingDiscount
     */
    couponCode?: string | null;
    /**
     * Contains coupon set id if there is one
     * @type {number}
     * @memberof PricingRuntimeAppliedLineItemShippingDiscount
     */
    couponSetId?: number | null;
}
/**
 * Represents a customer segment
 * @export
 * @interface PricingRuntimeCustomerSegment
 */
export interface PricingRuntimeCustomerSegment {
    /**
     * The Customer segment Id.
     * This is the  system Id not the code.
     * @type {number}
     * @memberof PricingRuntimeCustomerSegment
     */
    id?: number;
}
/**
 * Name of the discount that can be applied and its expiration date. The discount can be on a single product or the
 * entire order.
 * @export
 * @interface PricingRuntimeDiscount
 */
export interface PricingRuntimeDiscount {
    /**
     * Unique identifier of the discount. System-supplied and read-only.
     * @type {number}
     * @memberof PricingRuntimeDiscount
     */
    discountId?: number;
    /**
     * Unique identifier of the discount.
     * @type {string}
     * @memberof PricingRuntimeDiscount
     */
    code?: string | null;
    /**
     * Name of the discount.
     * @type {string}
     * @memberof PricingRuntimeDiscount
     */
    name?: string | null;
    /**
     * Friendly description of the discount.
     * @type {string}
     * @memberof PricingRuntimeDiscount
     */
    friendlyDescription?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PricingRuntimeDiscount
     */
    amount?: number;
    /**
     * 
     * @type {string}
     * @memberof PricingRuntimeDiscount
     */
    scope?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PricingRuntimeDiscount
     */
    maxRedemptions?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PricingRuntimeDiscount
     */
    maximumUsesPerUser?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof PricingRuntimeDiscount
     */
    requiresAuthenticatedUser?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PricingRuntimeDiscount
     */
    doesNotApplyToProductsWithSalePrice?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PricingRuntimeDiscount
     */
    maximumRedemptionsPerOrder?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PricingRuntimeDiscount
     */
    maximumDiscountValuePerOrder?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PricingRuntimeDiscount
     */
    maxDiscountValuePerRedemption?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof PricingRuntimeDiscount
     */
    doesNotApplyToMultiShipToOrders?: boolean | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof PricingRuntimeDiscount
     */
    includedPriceLists?: Array<string> | null;
    /**
     * 
     * @type {number}
     * @memberof PricingRuntimeDiscount
     */
    redemptions?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PricingRuntimeDiscount
     */
    isPublic?: boolean | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof PricingRuntimeDiscount
     */
    labels?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof PricingRuntimeDiscount
     */
    type?: string | null;
    /**
     * Type of discount, which can be either a percentage off the price, a specific monetary amount, or free. Possible values: "Percentage," "Amount," and "Free".
     * @type {string}
     * @memberof PricingRuntimeDiscount
     */
    amountType?: string | null;
    /**
     * 
     * @type {PricingRuntimeDiscountTarget}
     * @memberof PricingRuntimeDiscount
     */
    target?: PricingRuntimeDiscountTarget;
    /**
     * 
     * @type {PricingRuntimeDiscountCondition}
     * @memberof PricingRuntimeDiscount
     */
    condition?: PricingRuntimeDiscountCondition;
    /**
     * When the discount expires. If null, there's no expiration date.
     * @type {string}
     * @memberof PricingRuntimeDiscount
     * @deprecated
     */
    expirationDate?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PricingRuntimeDiscount
     */
    stackingLayer?: number;
}
/**
 * 
 * @export
 * @interface PricingRuntimeDiscountCollection
 */
export interface PricingRuntimeDiscountCollection {
    /**
     * 
     * @type {Array<PricingRuntimeDiscount>}
     * @memberof PricingRuntimeDiscountCollection
     */
    discounts?: Array<PricingRuntimeDiscount> | null;
}
/**
 * 
 * @export
 * @interface PricingRuntimeDiscountCondition
 */
export interface PricingRuntimeDiscountCondition {
    /**
     * If true, the shopper needs to enter a coupon code to redeem the discount.
     * @type {boolean}
     * @memberof PricingRuntimeDiscountCondition
     */
    requiresCoupon?: boolean;
    /**
     * ShippingMethodCode of the coupon associated with the discount (if a coupon code is required). The merchant can supply the code or the system can generate it.
     * @type {string}
     * @memberof PricingRuntimeDiscountCondition
     */
    couponCode?: string | null;
    /**
     * Minimum quantity of products in the categories specified in IncludedCategories that must be purchased to
     * qualify for the associated discount.
     * Valid values are null and ints greater than zero
     * @type {number}
     * @memberof PricingRuntimeDiscountCondition
     */
    minimumQuantityProductsRequiredInCategories?: number | null;
    /**
     * List of categories to discount. When a discount applies to a category, all products in the category are discounted.
     * @type {Array<number>}
     * @memberof PricingRuntimeDiscountCondition
     */
    includedCategoryIds?: Array<number> | null;
    /**
     * List of categories to discount. When a discount applies to a category, all products in the category are discounted.
     * @type {Array<number>}
     * @memberof PricingRuntimeDiscountCondition
     */
    excludedCategoryIds?: Array<number> | null;
    /**
     * Minimum quantity of products in the specified IncludedProducts that must be purchased to
     * qualify for the associated discount.
     * Defaults to 0
     * @type {number}
     * @memberof PricingRuntimeDiscountCondition
     */
    minimumQuantityRequiredProducts?: number | null;
    /**
     * List of products that are eligible for the discount.
     * @type {Array<string>}
     * @memberof PricingRuntimeDiscountCondition
     */
    includedProductCodes?: Array<string> | null;
    /**
     * List of products that are eligible for the discount.
     * @type {Array<string>}
     * @memberof PricingRuntimeDiscountCondition
     */
    excludedProductCodes?: Array<string> | null;
    /**
     * List of payment types that are valid for this discount.
     * An empty list signifies all payment types.
     * @type {Array<string>}
     * @memberof PricingRuntimeDiscountCondition
     */
    paymentWorkflows?: Array<string> | null;
    /**
     * List of customer groups for which the discount applies
     * @type {Array<number>}
     * @memberof PricingRuntimeDiscountCondition
     */
    customerSegmentIds?: Array<number> | null;
    /**
     * If the discount is for products, how many products must be purchased to be eligible for the discount.
     * If the discount is for an order, how much the order must total to be eligible for the discount. For example, you might want to offer a 10% discount on orders over $100.
     * @type {number}
     * @memberof PricingRuntimeDiscountCondition
     */
    minimumOrderAmount?: number | null;
    /**
     * If the discount is for products, how many product can you have and still be eligible for the discount.
     * If the discount is for an order, what is the max the order can total to be eligible for the discount. For example, you might want to offer a 10% discount on orders under $100.
     * @type {number}
     * @memberof PricingRuntimeDiscountCondition
     */
    maximumOrderAmount?: number | null;
    /**
     * Minimum lifetime value amount required for this discount to apply
     * @type {number}
     * @memberof PricingRuntimeDiscountCondition
     */
    minimumLifetimeValueAmount?: number | null;
    /**
     * Date when the discount can goes into effect, in the format yyyy-mm-dd.
     * @type {string}
     * @memberof PricingRuntimeDiscountCondition
     */
    startDate?: string | null;
    /**
     * Date when the discount expires. Default is null (no expiration date).
     * @type {string}
     * @memberof PricingRuntimeDiscountCondition
     */
    expirationDate?: string | null;
    /**
     * Minimum amount that must be purchased in the combined categories defined in 
     * IncludedCategories.  Amount is calculated before discounting.
     * @type {number}
     * @memberof PricingRuntimeDiscountCondition
     */
    minimumCategorySubtotalBeforeDiscounts?: number | null;
    /**
     * Minimum number of distinct products that must be purchased that are also not free.
     * @type {number}
     * @memberof PricingRuntimeDiscountCondition
     */
    minDistinctProductsRequired?: number | null;
}
/**
 * 
 * @export
 * @interface PricingRuntimeDiscountTarget
 */
export interface PricingRuntimeDiscountTarget {
    /**
     * 
     * @type {string}
     * @memberof PricingRuntimeDiscountTarget
     */
    type?: string | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof PricingRuntimeDiscountTarget
     */
    includedCategoryIds?: Array<number> | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof PricingRuntimeDiscountTarget
     */
    excludedCategoryIds?: Array<number> | null;
    /**
     * 
     * @type {string}
     * @memberof PricingRuntimeDiscountTarget
     */
    includedCategoriesOperator?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PricingRuntimeDiscountTarget
     */
    excludedCategoriesOperator?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof PricingRuntimeDiscountTarget
     */
    includedProductCodes?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof PricingRuntimeDiscountTarget
     */
    excludedProductCodes?: Array<string> | null;
    /**
     * When IncludeAllProducts is true then IncludedCategories and IncludedProducts are not evaluated and should be 
     * empty.  Only exclusions apply.
     * @type {boolean}
     * @memberof PricingRuntimeDiscountTarget
     */
    includeAllProducts?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof PricingRuntimeDiscountTarget
     */
    shippingMethods?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof PricingRuntimeDiscountTarget
     */
    shippingZones?: Array<string> | null;
}
/**
 * Duplicate definition from ProductRuntime
 * @export
 * @interface PricingRuntimeProductProperty
 */
export interface PricingRuntimeProductProperty {
    /**
     * Attribute fully qualified name
     * @type {string}
     * @memberof PricingRuntimeProductProperty
     */
    attributeFQN?: string | null;
    /**
     * Value(s) of the product property
     * @type {Array<PricingRuntimeProductPropertyValue>}
     * @memberof PricingRuntimeProductProperty
     */
    values?: Array<PricingRuntimeProductPropertyValue> | null;
    /**
     * 
     * @type {ProductAttribute}
     * @memberof PricingRuntimeProductProperty
     */
    attributeDetail?: ProductAttribute;
    /**
     * Indicates whether the product property should be hidden from the customer
     * @type {boolean}
     * @memberof PricingRuntimeProductProperty
     */
    isHidden?: boolean | null;
    /**
     * Indicates whether it's possible for there to be more than one value in the Values field
     * @type {boolean}
     * @memberof PricingRuntimeProductProperty
     */
    isMultiValue?: boolean | null;
}
/**
 * Duplicate definition from ProductRuntime
 * @export
 * @interface PricingRuntimeProductPropertyValue
 */
export interface PricingRuntimeProductPropertyValue {
    /**
     * 
     * @type {any}
     * @memberof PricingRuntimeProductPropertyValue
     */
    value?: any | null;
    /**
     * Localized Value in the language of the locale code
     * @type {string}
     * @memberof PricingRuntimeProductPropertyValue
     */
    stringValue?: string | null;
}
/**
 * 
 * @export
 * @interface PricingRuntimeTargetedCategory
 */
export interface PricingRuntimeTargetedCategory {
    /**
     * Unique identifier of the category to which the discount applies.
     * @type {number}
     * @memberof PricingRuntimeTargetedCategory
     */
    id?: number | null;
}
/**
 * Shipping method that is eligible for free shipping. This is the shipping method that is defined with the Shipping
 * Settings resource.
 * @export
 * @interface PricingRuntimeTargetedShippingMethod
 */
export interface PricingRuntimeTargetedShippingMethod {
    /**
     * Unique identifier of the shipping method as it appears in the SiteShippingMethod property of the Shipping Settings
     * resource.
     * @type {string}
     * @memberof PricingRuntimeTargetedShippingMethod
     */
    code?: string | null;
    /**
     * Name of the shipping method as it appears in SiteShippingMethodLocalizedContent of the Shipping Settings resource.
     * @type {string}
     * @memberof PricingRuntimeTargetedShippingMethod
     */
    name?: string | null;
}
/**
 * Shipping method that is eligible for free shipping. This is the shipping method that is defined with the Shipping
 * Settings resource.
 * @export
 * @interface PricingRuntimeTargetedShippingZone
 */
export interface PricingRuntimeTargetedShippingZone {
    /**
     * Indicates the shipping zone that this discount is valid for.  If zone is provided the
     * method selected must be valid for the zone and both populated in the order for the discount
     * to be valid.
     * @type {string}
     * @memberof PricingRuntimeTargetedShippingZone
     */
    zone?: string | null;
}
/**
 * Duplicate definition from ProductRuntime
 * @export
 * @interface ProductAttribute
 */
export interface ProductAttribute {
    /**
     * The InputType type of the attribute. Valid values for InputType are defined in InputTypeConst.
     * @type {string}
     * @memberof ProductAttribute
     */
    inputType?: string | null;
    /**
     * The ValueType of the attribute. Valid values for ValueType are defined in ValueTypeTypeConst.
     * @type {string}
     * @memberof ProductAttribute
     */
    valueType?: string | null;
    /**
     * The DataType of the attribute. Valid values for DataType are defined in DataTypeTypeConst.
     * @type {string}
     * @memberof ProductAttribute
     */
    dataType?: string | null;
    /**
     * Name of the attribute in the language specified by LocaleCode.
     * @type {string}
     * @memberof ProductAttribute
     */
    name?: string | null;
    /**
     * Description of the attribute in the language specified by LocaleCode.
     * @type {string}
     * @memberof ProductAttribute
     */
    description?: string | null;
}
/**
 * Represents a product and quantity constraint
 * @export
 * @interface ProductDiscountCondition
 */
export interface ProductDiscountCondition {
    /**
     * Product code of the product to discount.
     * @type {string}
     * @memberof ProductDiscountCondition
     */
    productCode?: string | null;
}
/**
 * 
 * @export
 * @interface ProductDiscountMap
 */
export interface ProductDiscountMap {
    /**
     * 
     * @type {string}
     * @memberof ProductDiscountMap
     */
    productCode?: string | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof ProductDiscountMap
     */
    discountIds?: Array<number> | null;
}
/**
 * 
 * @export
 * @interface RuntimeDiscountCondition
 */
export interface RuntimeDiscountCondition {
    /**
     * Maximum number of times that the discount can be redeemed. Default is null (no limit to discount redemptions).
     * @type {number}
     * @memberof RuntimeDiscountCondition
     */
    maxRedemptionCount?: number | null;
    /**
     * If true, the shopper needs to enter a coupon code to redeem the discount.
     * @type {boolean}
     * @memberof RuntimeDiscountCondition
     */
    requiresCoupon?: boolean;
    /**
     * Code of the coupon associated with the discount (if a coupon code is required). The merchant can supply the code or the system can generate it.
     * @type {string}
     * @memberof RuntimeDiscountCondition
     */
    couponCode?: string | null;
    /**
     * Determines is this discount can be used by an anonymous user 
     * Defaults to false to allow discounts for anonymous users.
     * @type {boolean}
     * @memberof RuntimeDiscountCondition
     */
    requiresAuthenticatedUser?: boolean;
    /**
     * List of payment types that trigger this discount to be valid.
     * @type {Array<string>}
     * @memberof RuntimeDiscountCondition
     */
    includedPaymentWorkflows?: Array<string> | null;
    /**
     * List of categories that must be purchased in order for the discount to be valid.
     * @type {Array<CategoryDiscountCondition>}
     * @memberof RuntimeDiscountCondition
     */
    includedCategories?: Array<CategoryDiscountCondition> | null;
    /**
     * List of categories to discount. When a discount applies to a category, all products in the category are discounted.
     * @type {Array<CategoryDiscountCondition>}
     * @memberof RuntimeDiscountCondition
     */
    excludedCategories?: Array<CategoryDiscountCondition> | null;
    /**
     * List of products that are eligible for the discount.
     * @type {Array<ProductDiscountCondition>}
     * @memberof RuntimeDiscountCondition
     */
    includedProducts?: Array<ProductDiscountCondition> | null;
    /**
     * List of products that are eligible for the discount.
     * @type {Array<ProductDiscountCondition>}
     * @memberof RuntimeDiscountCondition
     */
    excludedProducts?: Array<ProductDiscountCondition> | null;
    /**
     * List of customer groups for which the discount applies
     * @type {Array<PricingRuntimeCustomerSegment>}
     * @memberof RuntimeDiscountCondition
     */
    customerSegments?: Array<PricingRuntimeCustomerSegment> | null;
    /**
     * Minimum quantity of products in the specified IncludedProducts that must be purchased to
     * qualify for the associated discount.
     * Defaults to 1 if  null and IncludedProducts has values.
     * @type {number}
     * @memberof RuntimeDiscountCondition
     */
    minimumQuantityRequiredProducts?: number | null;
    /**
     * Minimum quantity of products in the categories specified in IncludedCategories that must be purchased to
     * qualify for the associated discount.
     * Defaults to 1 if  null and IncludedCategories has values
     * @type {number}
     * @memberof RuntimeDiscountCondition
     */
    minimumQuantityProductsRequiredInCategories?: number | null;
    /**
     * Only applies to order.
     * Minimum order subtotal after discounts in order for the associated discount to be applied
     * @type {number}
     * @memberof RuntimeDiscountCondition
     */
    minimumOrderAmount?: number | null;
    /**
     * Only applies to order.
     * Maximum order subtotal after discounts in order for the associated discount to be applied
     * @type {number}
     * @memberof RuntimeDiscountCondition
     */
    maximumOrderAmount?: number | null;
    /**
     * List of categories to discount. When a discount applies to a category, all products in the category are discounted.
     * @type {Array<CategoryDiscountCondition>}
     * @memberof RuntimeDiscountCondition
     */
    categoriesToExcludeFromMinOrderTotal?: Array<CategoryDiscountCondition> | null;
    /**
     * List of products that are eligible for the discount.
     * @type {Array<ProductDiscountCondition>}
     * @memberof RuntimeDiscountCondition
     */
    productsToExcludeFromMinOrderTotal?: Array<ProductDiscountCondition> | null;
    /**
     * Minimum lifetime value amount required for this discount to apply
     * @type {number}
     * @memberof RuntimeDiscountCondition
     */
    minimumLifetimeValueAmount?: number | null;
    /**
     * Minimum amount that must be purchased in the combined categories defined in 
     * IncludedCategories.  Amount is calculated before discounting.
     * Not used if IncludedCategories is empty.
     * @type {number}
     * @memberof RuntimeDiscountCondition
     */
    minimumCategorySubtotalBeforeDiscounts?: number | null;
    /**
     * Defines a minimum quantity that is required for a target only discount
     * @type {number}
     * @memberof RuntimeDiscountCondition
     */
    minimumRequiredQuantityPerRedemption?: number | null;
    /**
     * List of subscription frequencies to which the discount will apply.
     * @type {Array<string>}
     * @memberof RuntimeDiscountCondition
     */
    validSubscriptionFrequencies?: Array<string> | null;
    /**
     * Ordinals at which a continuity order should receive the discount.
     * @type {Array<number>}
     * @memberof RuntimeDiscountCondition
     */
    validSubscriptionContinuityOrdinals?: Array<number> | null;
    /**
     * The minimum number of distinct products on the order
     * Not a quantity calculation.
     * @type {number}
     * @memberof RuntimeDiscountCondition
     */
    minDistinctProductsRequired?: number | null;
    /**
     * The order must contain at least this total quantity of items for the discount to apply.
     * You must buy a combined quantity of at least x amount.
     * @type {number}
     * @memberof RuntimeDiscountCondition
     */
    minTotalOrderQuantity?: number | null;
    /**
     * 
     * @type {ContinuityRecurrenceSettings}
     * @memberof RuntimeDiscountCondition
     */
    continuityRecurrenceSettings?: ContinuityRecurrenceSettings;
    /**
     * The discount condition for fulfillment methods, if present the discount will be applied only to these fulfillment methods.
     * This must be a value defined in FulfillmentMethodConst below.
     * @type {Array<string>}
     * @memberof RuntimeDiscountCondition
     */
    validFulfillmentMethods?: Array<string> | null;
    /**
     * The discount condition for site Ids, if present the discount will be applied only to these sites.
     * If not present discount will work for all sites in a catalog.
     * @type {Array<number>}
     * @memberof RuntimeDiscountCondition
     */
    exclusiveSiteIds?: Array<number> | null;
    /**
     * List of locations where the item/order should be fulfilled for the discount to be valid.
     * @type {Array<string>}
     * @memberof RuntimeDiscountCondition
     */
    exclusiveLocationCodes?: Array<string> | null;
}
/**
 * 
 * @export
 * @interface RuntimeDiscountTarget
 */
export interface RuntimeDiscountTarget {
    /**
     *     Type of target to which the discount applies. Possible values: <pre>Product</pre> or <pre>Shipping</pre>. 
     * If this is a <pre>Product</pre> type, you can specify which products or categories that the discount applies to.
     *     If this is a <pre>Shipping</pre> type then you must specify which shipping methods apply.
     * @type {string}
     * @memberof RuntimeDiscountTarget
     */
    type?: string | null;
    /**
     * If yes, the discount applies to all products sold on the storefront.
     * @type {boolean}
     * @memberof RuntimeDiscountTarget
     */
    includeAllProducts?: boolean | null;
    /**
     * Applies to Included categories
     * When Any, the target product can belong to any specified category.
     * When All, the target product must belong to all specified categories.
     * Defaults to Any
     * @type {string}
     * @memberof RuntimeDiscountTarget
     */
    includedCategoriesOperator?: string | null;
    /**
     * List of categories to discount. When a discount applies to a category, all products in the category are discounted.
     * @type {Array<PricingRuntimeTargetedCategory>}
     * @memberof RuntimeDiscountTarget
     */
    categories?: Array<PricingRuntimeTargetedCategory> | null;
    /**
     * Applies to Included categories
     * Defaults to Any
     * @type {string}
     * @memberof RuntimeDiscountTarget
     */
    excludedCategoriesOperator?: string | null;
    /**
     * List of categories to exclude from the discount. Useful to exclude specific child categories.
     * @type {Array<PricingRuntimeTargetedCategory>}
     * @memberof RuntimeDiscountTarget
     */
    excludedCategories?: Array<PricingRuntimeTargetedCategory> | null;
    /**
     * List of products that are eligible for the discount.
     * @type {Array<TargetedProduct>}
     * @memberof RuntimeDiscountTarget
     */
    products?: Array<TargetedProduct> | null;
    /**
     * List of products that are excluded from the discount.
     * @type {Array<TargetedProduct>}
     * @memberof RuntimeDiscountTarget
     */
    excludedProducts?: Array<TargetedProduct> | null;
    /**
     * Prevents order scoped discounts from layering over items that already have a shipping discount with the 
     * same type.
     * @type {boolean}
     * @memberof RuntimeDiscountTarget
     */
    excludeItemsWithExistingShippingDiscounts?: boolean | null;
    /**
     * Prevents order scoped discounts from layering over items that already have a product discount with the 
     * same type.
     * @type {boolean}
     * @memberof RuntimeDiscountTarget
     */
    excludeItemsWithExistingProductDiscounts?: boolean | null;
    /**
     * Shipping method that is eligible for shipping discounts. This is a shipping method defined in Shipping Settings.
     * @type {Array<PricingRuntimeTargetedShippingMethod>}
     * @memberof RuntimeDiscountTarget
     */
    shippingMethods?: Array<PricingRuntimeTargetedShippingMethod> | null;
    /**
     * Shipping Zones that are applicable for this discount
     * @type {Array<PricingRuntimeTargetedShippingZone>}
     * @memberof RuntimeDiscountTarget
     */
    shippingZones?: Array<PricingRuntimeTargetedShippingZone> | null;
    /**
     * Prevents the discount from being applied to handling fees
     * @type {boolean}
     * @memberof RuntimeDiscountTarget
     */
    doNotApplyToHandlingFees?: boolean | null;
    /**
     * When a condition is specified, this property limits the number of items that can be targeted per discount redemption with an order.
     * if multiple redemptions are allowed per order then multiples of this value would be allowed in multiples of the associated 
     * condition.
     * If no condition is specified then this value is not used.  
     * If null and condition exists, then defaults to 1.
     * @type {number}
     * @memberof RuntimeDiscountTarget
     */
    maximumQuantityPerRedemption?: number | null;
}
/**
 * Product to discount.
 * @export
 * @interface TargetedProduct
 */
export interface TargetedProduct {
    /**
     * Product code of the product to discount.
     * @type {string}
     * @memberof TargetedProduct
     */
    productCode?: string | null;
}
/**
 * 
 * @export
 * @interface TaxAttribute
 */
export interface TaxAttribute {
    /**
     * 
     * @type {string}
     * @memberof TaxAttribute
     */
    fullyQualifiedName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof TaxAttribute
     */
    attributeDefinitionId?: number | null;
    /**
     * 
     * @type {Array<any>}
     * @memberof TaxAttribute
     */
    values?: Array<any> | null;
}
/**
 * The context for the tax calculation.
 * @export
 * @interface TaxContext
 */
export interface TaxContext {
    /**
     * The unique id of this context. Will typically be the OrderId or CartId, depending when the tax is being calculated.
     * @type {string}
     * @memberof TaxContext
     */
    taxContextId?: string | null;
    /**
     * A unique id for a customer.  This may be the userid, checking with Avalara to determine the meaning of this
     * @type {string}
     * @memberof TaxContext
     */
    customerId?: string | null;
    /**
     * Tax exemption id.  Indicates that this customer or user is tax exempt
     * @type {string}
     * @memberof TaxContext
     */
    taxExemptId?: string | null;
    /**
     * 
     * @type {CommerceRuntimeAddress}
     * @memberof TaxContext
     */
    originAddress?: CommerceRuntimeAddress;
    /**
     * 
     * @type {CommerceRuntimeAddress}
     * @memberof TaxContext
     */
    destinationAddress?: CommerceRuntimeAddress;
}
/**
 * 
 * @export
 * @interface TaxableLineItem
 */
export interface TaxableLineItem {
    /**
     * Unique identifier of the line item.
     * @type {string}
     * @memberof TaxableLineItem
     */
    id?: string | null;
    /**
     * Unique code of the product.
     * @type {string}
     * @memberof TaxableLineItem
     */
    productCode?: string | null;
    /**
     * For configurable products, the unique identifier of the product variation that has been selected.
     * @type {string}
     * @memberof TaxableLineItem
     */
    variantProductCode?: string | null;
    /**
     * Name of the product.
     * @type {string}
     * @memberof TaxableLineItem
     */
    productName?: string | null;
    /**
     * Custom Properties of the product (i.e. inclues TaxCode)
     * @type {Array<PricingRuntimeProductProperty>}
     * @memberof TaxableLineItem
     */
    productProperties?: Array<PricingRuntimeProductProperty> | null;
    /**
     * The number of products for this line item
     * @type {number}
     * @memberof TaxableLineItem
     */
    quantity?: number;
    /**
     * The line item subtotal of quantity * Product.TaxablePrice
     * @type {number}
     * @memberof TaxableLineItem
     */
    lineItemPrice?: number;
    /**
     * How much the shopper saves with the applied discount or sale price. This is a negative number.
     * @type {number}
     * @memberof TaxableLineItem
     */
    discountTotal?: number | null;
    /**
     * Subtotal minus any discounts.
     * @type {number}
     * @memberof TaxableLineItem
     */
    discountedTotal?: number | null;
    /**
     * The line item shipping amount.
     * @type {number}
     * @memberof TaxableLineItem
     */
    shippingAmount?: number;
    /**
     * Handling Amount for this item
     * @type {number}
     * @memberof TaxableLineItem
     */
    handlingAmount?: number | null;
    /**
     * Not implemented. Total cost of fees that apply to this item.
     * @type {number}
     * @memberof TaxableLineItem
     */
    feeTotal?: number | null;
    /**
     * Is the Product taxable
     * @type {boolean}
     * @memberof TaxableLineItem
     */
    isTaxable?: boolean | null;
    /**
     * Clarifications on the reason this item is being taxed/returned?
     * @type {string}
     * @memberof TaxableLineItem
     */
    reason?: string | null;
    /**
     * 
     * @type {object}
     * @memberof TaxableLineItem
     */
    data?: object | null;
    /**
     * 
     * @type {PricingRuntimeAppliedLineItemProductDiscount}
     * @memberof TaxableLineItem
     */
    productDiscount?: PricingRuntimeAppliedLineItemProductDiscount;
    /**
     * 
     * @type {PricingRuntimeAppliedLineItemShippingDiscount}
     * @memberof TaxableLineItem
     */
    shippingDiscount?: PricingRuntimeAppliedLineItemShippingDiscount;
    /**
     * A list of discounts applied to the product
     * @type {Array<PricingRuntimeAppliedLineItemProductDiscount>}
     * @memberof TaxableLineItem
     */
    productDiscounts?: Array<PricingRuntimeAppliedLineItemProductDiscount> | null;
    /**
     * A discount applied to the shipping
     * @type {Array<PricingRuntimeAppliedLineItemShippingDiscount>}
     * @memberof TaxableLineItem
     */
    shippingDiscounts?: Array<PricingRuntimeAppliedLineItemShippingDiscount> | null;
    /**
     * 
     * @type {CommerceRuntimeAddress}
     * @memberof TaxableLineItem
     */
    originAddress?: CommerceRuntimeAddress;
    /**
     * 
     * @type {CommerceRuntimeAddress}
     * @memberof TaxableLineItem
     */
    destinationAddress?: CommerceRuntimeAddress;
}
/**
 * Properties of a taxable order
 * @export
 * @interface TaxableOrder
 */
export interface TaxableOrder {
    /**
     * Date on which the order is/was submitted.
     * Cannot be a future date.
     * @type {string}
     * @memberof TaxableOrder
     */
    orderDate?: string;
    /**
     * 
     * @type {TaxContext}
     * @memberof TaxableOrder
     */
    taxContext?: TaxContext;
    /**
     * List of taxable items.
     * @type {Array<TaxableLineItem>}
     * @memberof TaxableOrder
     */
    lineItems?: Array<TaxableLineItem> | null;
    /**
     * Shipping Amount rolled up for the order
     * @type {number}
     * @memberof TaxableOrder
     */
    shippingAmount?: number;
    /**
     * The currency code for this order
     * @type {string}
     * @memberof TaxableOrder
     */
    currencyCode?: string | null;
    /**
     * Handling Fee
     * @type {number}
     * @memberof TaxableOrder
     */
    handlingFee?: number;
    /**
     * The order id of the original order.  This can be used to track changes to the order for taxing purposes.
     * @type {string}
     * @memberof TaxableOrder
     */
    originalDocumentCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TaxableOrder
     */
    orderId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof TaxableOrder
     */
    orderNumber?: number | null;
    /**
     * The date of the original order.  This is used when calculating changes to the Taxable Order, evaluating them at this time rather than the present.
     * @type {string}
     * @memberof TaxableOrder
     */
    originalOrderDate?: string;
    /**
     * 
     * @type {object}
     * @memberof TaxableOrder
     */
    data?: object | null;
    /**
     * 
     * @type {Array<TaxAttribute>}
     * @memberof TaxableOrder
     */
    attributes?: Array<TaxAttribute> | null;
    /**
     * The list of historically-applied shipping discounts.  The active one will have IsExcluded == false
     * @type {Array<AppliedOrderShippingDiscount>}
     * @memberof TaxableOrder
     */
    shippingDiscounts?: Array<AppliedOrderShippingDiscount> | null;
    /**
     * 
     * @type {AppliedOrderShippingDiscount}
     * @memberof TaxableOrder
     */
    shippingDiscount?: AppliedOrderShippingDiscount;
    /**
     * The discount that has been applied to the cart itself. If multiple discounts exist, this is the discount that the system applies because it offers the best savings for the shopper. This is a negative number.
     * @type {Array<PricingRuntimeAppliedDiscount>}
     * @memberof TaxableOrder
     */
    orderDiscounts?: Array<PricingRuntimeAppliedDiscount> | null;
    /**
     * 
     * @type {PricingRuntimeAppliedDiscount}
     * @memberof TaxableOrder
     */
    orderDiscount?: PricingRuntimeAppliedDiscount;
    /**
     * The list of historically-applied handling discounts.  The active one will have IsExcluded == false
     * @type {Array<PricingRuntimeAppliedDiscount>}
     * @memberof TaxableOrder
     */
    handlingDiscounts?: Array<PricingRuntimeAppliedDiscount> | null;
    /**
     * 
     * @type {PricingRuntimeAppliedDiscount}
     * @memberof TaxableOrder
     */
    handlingDiscount?: PricingRuntimeAppliedDiscount;
    /**
     * Code that uniquely identifies the shipping method such as "Ground," "Overnight," or "Digital."
     * The site's shipping settings lists the valid shipping methods specified for this site.
     * @type {string}
     * @memberof TaxableOrder
     */
    shippingMethodCode?: string | null;
    /**
     * Readable name of the shipping method
     * @type {string}
     * @memberof TaxableOrder
     */
    shippingMethodName?: string | null;
    /**
     * Used to differentiate between an Order and a Return being used as the source of this Taxable Order
     * @type {string}
     * @memberof TaxableOrder
     */
    taxRequestType?: string | null;
}
