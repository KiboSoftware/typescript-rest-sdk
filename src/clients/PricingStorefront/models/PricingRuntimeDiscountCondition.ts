/* tslint:disable */
/* eslint-disable */
/**
 * Kibo PricingRuntime Service
 * OpenAPI Spec for Kibo PricingRuntime Service
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
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
     * @type {Date}
     * @memberof PricingRuntimeDiscountCondition
     */
    startDate?: Date | null;
    /**
     * Date when the discount expires. Default is null (no expiration date).
     * @type {Date}
     * @memberof PricingRuntimeDiscountCondition
     */
    expirationDate?: Date | null;
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
 * Check if a given object implements the PricingRuntimeDiscountCondition interface.
 */
export function instanceOfPricingRuntimeDiscountCondition(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PricingRuntimeDiscountConditionFromJSON(json: any): PricingRuntimeDiscountCondition {
    return PricingRuntimeDiscountConditionFromJSONTyped(json, false);
}

export function PricingRuntimeDiscountConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PricingRuntimeDiscountCondition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'requiresCoupon': !exists(json, 'requiresCoupon') ? undefined : json['requiresCoupon'],
        'couponCode': !exists(json, 'couponCode') ? undefined : json['couponCode'],
        'minimumQuantityProductsRequiredInCategories': !exists(json, 'minimumQuantityProductsRequiredInCategories') ? undefined : json['minimumQuantityProductsRequiredInCategories'],
        'includedCategoryIds': !exists(json, 'includedCategoryIds') ? undefined : json['includedCategoryIds'],
        'excludedCategoryIds': !exists(json, 'excludedCategoryIds') ? undefined : json['excludedCategoryIds'],
        'minimumQuantityRequiredProducts': !exists(json, 'minimumQuantityRequiredProducts') ? undefined : json['minimumQuantityRequiredProducts'],
        'includedProductCodes': !exists(json, 'includedProductCodes') ? undefined : json['includedProductCodes'],
        'excludedProductCodes': !exists(json, 'excludedProductCodes') ? undefined : json['excludedProductCodes'],
        'paymentWorkflows': !exists(json, 'paymentWorkflows') ? undefined : json['paymentWorkflows'],
        'customerSegmentIds': !exists(json, 'customerSegmentIds') ? undefined : json['customerSegmentIds'],
        'minimumOrderAmount': !exists(json, 'minimumOrderAmount') ? undefined : json['minimumOrderAmount'],
        'maximumOrderAmount': !exists(json, 'maximumOrderAmount') ? undefined : json['maximumOrderAmount'],
        'minimumLifetimeValueAmount': !exists(json, 'minimumLifetimeValueAmount') ? undefined : json['minimumLifetimeValueAmount'],
        'startDate': !exists(json, 'startDate') ? undefined : (json['startDate'] === null ? null : new Date(json['startDate'])),
        'expirationDate': !exists(json, 'expirationDate') ? undefined : (json['expirationDate'] === null ? null : new Date(json['expirationDate'])),
        'minimumCategorySubtotalBeforeDiscounts': !exists(json, 'minimumCategorySubtotalBeforeDiscounts') ? undefined : json['minimumCategorySubtotalBeforeDiscounts'],
        'minDistinctProductsRequired': !exists(json, 'minDistinctProductsRequired') ? undefined : json['minDistinctProductsRequired'],
    };
}

export function PricingRuntimeDiscountConditionToJSON(value?: PricingRuntimeDiscountCondition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'requiresCoupon': value.requiresCoupon,
        'couponCode': value.couponCode,
        'minimumQuantityProductsRequiredInCategories': value.minimumQuantityProductsRequiredInCategories,
        'includedCategoryIds': value.includedCategoryIds,
        'excludedCategoryIds': value.excludedCategoryIds,
        'minimumQuantityRequiredProducts': value.minimumQuantityRequiredProducts,
        'includedProductCodes': value.includedProductCodes,
        'excludedProductCodes': value.excludedProductCodes,
        'paymentWorkflows': value.paymentWorkflows,
        'customerSegmentIds': value.customerSegmentIds,
        'minimumOrderAmount': value.minimumOrderAmount,
        'maximumOrderAmount': value.maximumOrderAmount,
        'minimumLifetimeValueAmount': value.minimumLifetimeValueAmount,
        'startDate': value.startDate === undefined ? undefined : (value.startDate === null ? null : value.startDate.toISOString()),
        'expirationDate': value.expirationDate === undefined ? undefined : (value.expirationDate === null ? null : value.expirationDate.toISOString()),
        'minimumCategorySubtotalBeforeDiscounts': value.minimumCategorySubtotalBeforeDiscounts,
        'minDistinctProductsRequired': value.minDistinctProductsRequired,
    };
}

