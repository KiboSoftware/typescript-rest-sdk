/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Runtime Services
 * OpenAPI Spec for Kibo Catalog Runtime Services
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CatalogRuntimesDiscount } from './CatalogRuntimesDiscount';
import {
    CatalogRuntimesDiscountFromJSON,
    CatalogRuntimesDiscountFromJSONTyped,
    CatalogRuntimesDiscountToJSON,
} from './CatalogRuntimesDiscount';

/**
 * Discount applied to the product.
 * @export
 * @interface CatalogRuntimesAppliedDiscount
 */
export interface CatalogRuntimesAppliedDiscount {
    /**
     * If the discount is a coupon, code associated with the coupon.
     * @type {string}
     * @memberof CatalogRuntimesAppliedDiscount
     */
    couponCode?: string | null;
    /**
     * 
     * @type {CatalogRuntimesDiscount}
     * @memberof CatalogRuntimesAppliedDiscount
     */
    discount?: CatalogRuntimesDiscount;
    /**
     * Discount name and expiration date.
     * @type {Array<CatalogRuntimesDiscount>}
     * @memberof CatalogRuntimesAppliedDiscount
     */
    discounts?: Array<CatalogRuntimesDiscount> | null;
    /**
     * The new calculated price of the product. That is, the product price minus the discount amount.
     * @type {number}
     * @memberof CatalogRuntimesAppliedDiscount
     */
    impact?: number;
}

/**
 * Check if a given object implements the CatalogRuntimesAppliedDiscount interface.
 */
export function instanceOfCatalogRuntimesAppliedDiscount(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CatalogRuntimesAppliedDiscountFromJSON(json: any): CatalogRuntimesAppliedDiscount {
    return CatalogRuntimesAppliedDiscountFromJSONTyped(json, false);
}

export function CatalogRuntimesAppliedDiscountFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogRuntimesAppliedDiscount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'couponCode': !exists(json, 'couponCode') ? undefined : json['couponCode'],
        'discount': !exists(json, 'discount') ? undefined : CatalogRuntimesDiscountFromJSON(json['discount']),
        'discounts': !exists(json, 'discounts') ? undefined : (json['discounts'] === null ? null : (json['discounts'] as Array<any>).map(CatalogRuntimesDiscountFromJSON)),
        'impact': !exists(json, 'impact') ? undefined : json['impact'],
    };
}

export function CatalogRuntimesAppliedDiscountToJSON(value?: CatalogRuntimesAppliedDiscount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'couponCode': value.couponCode,
        'discount': CatalogRuntimesDiscountToJSON(value.discount),
        'discounts': value.discounts === undefined ? undefined : (value.discounts === null ? null : (value.discounts as Array<any>).map(CatalogRuntimesDiscountToJSON)),
        'impact': value.impact,
    };
}

