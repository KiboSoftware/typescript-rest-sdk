/* tslint:disable */
/* eslint-disable */
/**
 * Kibo CommerceRuntime Service
 * OpenAPI Spec for Kibo CommerceRuntime Service
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CommerceRuntimeBundledProduct } from './CommerceRuntimeBundledProduct';
import {
    CommerceRuntimeBundledProductFromJSON,
    CommerceRuntimeBundledProductFromJSONTyped,
    CommerceRuntimeBundledProductToJSON,
} from './CommerceRuntimeBundledProduct';
import type { CommerceRuntimeCategory } from './CommerceRuntimeCategory';
import {
    CommerceRuntimeCategoryFromJSON,
    CommerceRuntimeCategoryFromJSONTyped,
    CommerceRuntimeCategoryToJSON,
} from './CommerceRuntimeCategory';
import type { CommerceRuntimeFulfillmentField } from './CommerceRuntimeFulfillmentField';
import {
    CommerceRuntimeFulfillmentFieldFromJSON,
    CommerceRuntimeFulfillmentFieldFromJSONTyped,
    CommerceRuntimeFulfillmentFieldToJSON,
} from './CommerceRuntimeFulfillmentField';
import type { CommerceRuntimePackageMeasurements } from './CommerceRuntimePackageMeasurements';
import {
    CommerceRuntimePackageMeasurementsFromJSON,
    CommerceRuntimePackageMeasurementsFromJSONTyped,
    CommerceRuntimePackageMeasurementsToJSON,
} from './CommerceRuntimePackageMeasurements';
import type { CommerceRuntimeProductOption } from './CommerceRuntimeProductOption';
import {
    CommerceRuntimeProductOptionFromJSON,
    CommerceRuntimeProductOptionFromJSONTyped,
    CommerceRuntimeProductOptionToJSON,
} from './CommerceRuntimeProductOption';
import type { CommerceRuntimeProductPrice } from './CommerceRuntimeProductPrice';
import {
    CommerceRuntimeProductPriceFromJSON,
    CommerceRuntimeProductPriceFromJSONTyped,
    CommerceRuntimeProductPriceToJSON,
} from './CommerceRuntimeProductPrice';
import type { CommerceRuntimeProductProperty } from './CommerceRuntimeProductProperty';
import {
    CommerceRuntimeProductPropertyFromJSON,
    CommerceRuntimeProductPropertyFromJSONTyped,
    CommerceRuntimeProductPropertyToJSON,
} from './CommerceRuntimeProductProperty';
import type { ProductStock } from './ProductStock';
import {
    ProductStockFromJSON,
    ProductStockFromJSONTyped,
    ProductStockToJSON,
} from './ProductStock';

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
     * @type {Date}
     * @memberof CommerceRuntimeProduct
     */
    discountsRestrictedStartDate?: Date | null;
    /**
     * Product discount restriction end date
     * @type {Date}
     * @memberof CommerceRuntimeProduct
     */
    discountsRestrictedEndDate?: Date | null;
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
     * @type {Date}
     * @memberof CommerceRuntimeProduct
     */
    allocationExpiration?: Date | null;
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
 * Check if a given object implements the CommerceRuntimeProduct interface.
 */
export function instanceOfCommerceRuntimeProduct(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommerceRuntimeProductFromJSON(json: any): CommerceRuntimeProduct {
    return CommerceRuntimeProductFromJSONTyped(json, false);
}

export function CommerceRuntimeProductFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommerceRuntimeProduct {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mfgPartNumber': !exists(json, 'mfgPartNumber') ? undefined : json['mfgPartNumber'],
        'upc': !exists(json, 'upc') ? undefined : json['upc'],
        'sku': !exists(json, 'sku') ? undefined : json['sku'],
        'fulfillmentTypesSupported': !exists(json, 'fulfillmentTypesSupported') ? undefined : json['fulfillmentTypesSupported'],
        'imageAlternateText': !exists(json, 'imageAlternateText') ? undefined : json['imageAlternateText'],
        'imageUrl': !exists(json, 'imageUrl') ? undefined : json['imageUrl'],
        'variationProductCode': !exists(json, 'variationProductCode') ? undefined : json['variationProductCode'],
        'options': !exists(json, 'options') ? undefined : (json['options'] === null ? null : (json['options'] as Array<any>).map(CommerceRuntimeProductOptionFromJSON)),
        'properties': !exists(json, 'properties') ? undefined : (json['properties'] === null ? null : (json['properties'] as Array<any>).map(CommerceRuntimeProductPropertyFromJSON)),
        'categories': !exists(json, 'categories') ? undefined : (json['categories'] === null ? null : (json['categories'] as Array<any>).map(CommerceRuntimeCategoryFromJSON)),
        'price': !exists(json, 'price') ? undefined : CommerceRuntimeProductPriceFromJSON(json['price']),
        'discountsRestricted': !exists(json, 'discountsRestricted') ? undefined : json['discountsRestricted'],
        'discountsRestrictedStartDate': !exists(json, 'discountsRestrictedStartDate') ? undefined : (json['discountsRestrictedStartDate'] === null ? null : new Date(json['discountsRestrictedStartDate'])),
        'discountsRestrictedEndDate': !exists(json, 'discountsRestrictedEndDate') ? undefined : (json['discountsRestrictedEndDate'] === null ? null : new Date(json['discountsRestrictedEndDate'])),
        'isRecurring': !exists(json, 'isRecurring') ? undefined : json['isRecurring'],
        'isTaxable': !exists(json, 'isTaxable') ? undefined : json['isTaxable'],
        'productType': !exists(json, 'productType') ? undefined : json['productType'],
        'productUsage': !exists(json, 'productUsage') ? undefined : json['productUsage'],
        'bundledProducts': !exists(json, 'bundledProducts') ? undefined : (json['bundledProducts'] === null ? null : (json['bundledProducts'] as Array<any>).map(CommerceRuntimeBundledProductFromJSON)),
        'fulfillmentFields': !exists(json, 'fulfillmentFields') ? undefined : (json['fulfillmentFields'] === null ? null : (json['fulfillmentFields'] as Array<any>).map(CommerceRuntimeFulfillmentFieldFromJSON)),
        'productCode': !exists(json, 'productCode') ? undefined : json['productCode'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'goodsType': !exists(json, 'goodsType') ? undefined : json['goodsType'],
        'isPackagedStandAlone': !exists(json, 'isPackagedStandAlone') ? undefined : json['isPackagedStandAlone'],
        'stock': !exists(json, 'stock') ? undefined : ProductStockFromJSON(json['stock']),
        'productReservationId': !exists(json, 'productReservationId') ? undefined : json['productReservationId'],
        'allocationId': !exists(json, 'allocationId') ? undefined : json['allocationId'],
        'allocationExpiration': !exists(json, 'allocationExpiration') ? undefined : (json['allocationExpiration'] === null ? null : new Date(json['allocationExpiration'])),
        'measurements': !exists(json, 'measurements') ? undefined : CommerceRuntimePackageMeasurementsFromJSON(json['measurements']),
        'fulfillmentStatus': !exists(json, 'fulfillmentStatus') ? undefined : json['fulfillmentStatus'],
    };
}

export function CommerceRuntimeProductToJSON(value?: CommerceRuntimeProduct | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mfgPartNumber': value.mfgPartNumber,
        'upc': value.upc,
        'sku': value.sku,
        'fulfillmentTypesSupported': value.fulfillmentTypesSupported,
        'imageAlternateText': value.imageAlternateText,
        'imageUrl': value.imageUrl,
        'variationProductCode': value.variationProductCode,
        'options': value.options === undefined ? undefined : (value.options === null ? null : (value.options as Array<any>).map(CommerceRuntimeProductOptionToJSON)),
        'properties': value.properties === undefined ? undefined : (value.properties === null ? null : (value.properties as Array<any>).map(CommerceRuntimeProductPropertyToJSON)),
        'categories': value.categories === undefined ? undefined : (value.categories === null ? null : (value.categories as Array<any>).map(CommerceRuntimeCategoryToJSON)),
        'price': CommerceRuntimeProductPriceToJSON(value.price),
        'discountsRestricted': value.discountsRestricted,
        'discountsRestrictedStartDate': value.discountsRestrictedStartDate === undefined ? undefined : (value.discountsRestrictedStartDate === null ? null : value.discountsRestrictedStartDate.toISOString()),
        'discountsRestrictedEndDate': value.discountsRestrictedEndDate === undefined ? undefined : (value.discountsRestrictedEndDate === null ? null : value.discountsRestrictedEndDate.toISOString()),
        'isRecurring': value.isRecurring,
        'isTaxable': value.isTaxable,
        'productType': value.productType,
        'productUsage': value.productUsage,
        'bundledProducts': value.bundledProducts === undefined ? undefined : (value.bundledProducts === null ? null : (value.bundledProducts as Array<any>).map(CommerceRuntimeBundledProductToJSON)),
        'fulfillmentFields': value.fulfillmentFields === undefined ? undefined : (value.fulfillmentFields === null ? null : (value.fulfillmentFields as Array<any>).map(CommerceRuntimeFulfillmentFieldToJSON)),
        'productCode': value.productCode,
        'name': value.name,
        'description': value.description,
        'goodsType': value.goodsType,
        'isPackagedStandAlone': value.isPackagedStandAlone,
        'stock': ProductStockToJSON(value.stock),
        'productReservationId': value.productReservationId,
        'allocationId': value.allocationId,
        'allocationExpiration': value.allocationExpiration === undefined ? undefined : (value.allocationExpiration === null ? null : value.allocationExpiration.toISOString()),
        'measurements': CommerceRuntimePackageMeasurementsToJSON(value.measurements),
        'fulfillmentStatus': value.fulfillmentStatus,
    };
}

