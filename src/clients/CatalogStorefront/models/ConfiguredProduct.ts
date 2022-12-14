/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Runtime Services
 * OpenAPI Spec for Kibo Catalog Runtime Services
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Discount } from './Discount';
import {
    DiscountFromJSON,
    DiscountFromJSONTyped,
    DiscountToJSON,
} from './Discount';
import type { PackageMeasurements } from './PackageMeasurements';
import {
    PackageMeasurementsFromJSON,
    PackageMeasurementsFromJSONTyped,
    PackageMeasurementsToJSON,
} from './PackageMeasurements';
import type { ProductImage } from './ProductImage';
import {
    ProductImageFromJSON,
    ProductImageFromJSONTyped,
    ProductImageToJSON,
} from './ProductImage';
import type { ProductInventoryInfo } from './ProductInventoryInfo';
import {
    ProductInventoryInfoFromJSON,
    ProductInventoryInfoFromJSONTyped,
    ProductInventoryInfoToJSON,
} from './ProductInventoryInfo';
import type { ProductOption } from './ProductOption';
import {
    ProductOptionFromJSON,
    ProductOptionFromJSONTyped,
    ProductOptionToJSON,
} from './ProductOption';
import type { ProductPrice } from './ProductPrice';
import {
    ProductPriceFromJSON,
    ProductPriceFromJSONTyped,
    ProductPriceToJSON,
} from './ProductPrice';
import type { ProductPriceRange } from './ProductPriceRange';
import {
    ProductPriceRangeFromJSON,
    ProductPriceRangeFromJSONTyped,
    ProductPriceRangeToJSON,
} from './ProductPriceRange';
import type { ProductProperty } from './ProductProperty';
import {
    ProductPropertyFromJSON,
    ProductPropertyFromJSONTyped,
    ProductPropertyToJSON,
} from './ProductProperty';
import type { ProductPurchasableState } from './ProductPurchasableState';
import {
    ProductPurchasableStateFromJSON,
    ProductPurchasableStateFromJSONTyped,
    ProductPurchasableStateToJSON,
} from './ProductPurchasableState';
import type { ProductVolumePrice } from './ProductVolumePrice';
import {
    ProductVolumePriceFromJSON,
    ProductVolumePriceFromJSONTyped,
    ProductVolumePriceToJSON,
} from './ProductVolumePrice';

/**
 * Product as it is currently configured on the storefront. The configuration changes each time the shopper changes the product order.
 * @export
 * @interface ConfiguredProduct
 */
export interface ConfiguredProduct {
    /**
     * Merchant-created code associated with the product, for example, a SKU.
     * @type {string}
     * @memberof ConfiguredProduct
     */
    productCode?: string | null;
    /**
     * The location where the product is being purchased.. default is null. Products can have different prices
     * by purchaseLocation via custom priceListResolution....
     * @type {string}
     * @memberof ConfiguredProduct
     */
    purchaseLocation?: string | null;
    /**
     * Indicates the fulfillment types the product supports.
     * @type {Array<string>}
     * @memberof ConfiguredProduct
     */
    fulfillmentTypesSupported?: Array<string> | null;
    /**
     * For a product with options, the code of the product variation that represents the current selection of product options. 
     * Question: is this right?
     * @type {string}
     * @memberof ConfiguredProduct
     */
    variationProductCode?: string | null;
    /**
     * UPC code of the product.
     * @type {string}
     * @memberof ConfiguredProduct
     */
    upc?: string | null;
    /**
     * Manufacturer part number.
     * @type {string}
     * @memberof ConfiguredProduct
     */
    mfgPartNumber?: string | null;
    /**
     * 
     * @type {ProductPurchasableState}
     * @memberof ConfiguredProduct
     */
    purchasableState?: ProductPurchasableState;
    /**
     * 
     * @type {ProductPriceRange}
     * @memberof ConfiguredProduct
     */
    priceRange?: ProductPriceRange;
    /**
     * For products with bulk pricing... this will be populated with pricebands, depending on what options have been selected...
     * @type {Array<ProductVolumePrice>}
     * @memberof ConfiguredProduct
     */
    volumePriceBands?: Array<ProductVolumePrice> | null;
    /**
     * 
     * @type {ProductPriceRange}
     * @memberof ConfiguredProduct
     */
    volumePriceRange?: ProductPriceRange;
    /**
     * 
     * @type {ProductPrice}
     * @memberof ConfiguredProduct
     */
    price?: ProductPrice;
    /**
     * List of potential shipping discounts available for this product.
     * @type {Array<Discount>}
     * @memberof ConfiguredProduct
     */
    availableShippingDiscounts?: Array<Discount> | null;
    /**
     * 
     * @type {PackageMeasurements}
     * @memberof ConfiguredProduct
     */
    measurements?: PackageMeasurements;
    /**
     * 
     * @type {ProductInventoryInfo}
     * @memberof ConfiguredProduct
     */
    inventoryInfo?: ProductInventoryInfo;
    /**
     * Remaining options and option values that can be selected given the shopper's current selection of options.
     * @type {Array<ProductOption>}
     * @memberof ConfiguredProduct
     */
    options?: Array<ProductOption> | null;
    /**
     * Remaining options and option values that can be selected given the shopper's current selection of options.
     * @type {Array<ProductProperty>}
     * @memberof ConfiguredProduct
     */
    properties?: Array<ProductProperty> | null;
    /**
     * 
     * @type {ProductProperty}
     * @memberof ConfiguredProduct
     */
    priceListEntryTypeProperty?: ProductProperty;
    /**
     * Images associated with the product.
     * @type {Array<ProductImage>}
     * @memberof ConfiguredProduct
     */
    productImages?: Array<ProductImage> | null;
}

/**
 * Check if a given object implements the ConfiguredProduct interface.
 */
export function instanceOfConfiguredProduct(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConfiguredProductFromJSON(json: any): ConfiguredProduct {
    return ConfiguredProductFromJSONTyped(json, false);
}

export function ConfiguredProductFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfiguredProduct {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'productCode': !exists(json, 'productCode') ? undefined : json['productCode'],
        'purchaseLocation': !exists(json, 'purchaseLocation') ? undefined : json['purchaseLocation'],
        'fulfillmentTypesSupported': !exists(json, 'fulfillmentTypesSupported') ? undefined : json['fulfillmentTypesSupported'],
        'variationProductCode': !exists(json, 'variationProductCode') ? undefined : json['variationProductCode'],
        'upc': !exists(json, 'upc') ? undefined : json['upc'],
        'mfgPartNumber': !exists(json, 'mfgPartNumber') ? undefined : json['mfgPartNumber'],
        'purchasableState': !exists(json, 'purchasableState') ? undefined : ProductPurchasableStateFromJSON(json['purchasableState']),
        'priceRange': !exists(json, 'priceRange') ? undefined : ProductPriceRangeFromJSON(json['priceRange']),
        'volumePriceBands': !exists(json, 'volumePriceBands') ? undefined : (json['volumePriceBands'] === null ? null : (json['volumePriceBands'] as Array<any>).map(ProductVolumePriceFromJSON)),
        'volumePriceRange': !exists(json, 'volumePriceRange') ? undefined : ProductPriceRangeFromJSON(json['volumePriceRange']),
        'price': !exists(json, 'price') ? undefined : ProductPriceFromJSON(json['price']),
        'availableShippingDiscounts': !exists(json, 'availableShippingDiscounts') ? undefined : (json['availableShippingDiscounts'] === null ? null : (json['availableShippingDiscounts'] as Array<any>).map(DiscountFromJSON)),
        'measurements': !exists(json, 'measurements') ? undefined : PackageMeasurementsFromJSON(json['measurements']),
        'inventoryInfo': !exists(json, 'inventoryInfo') ? undefined : ProductInventoryInfoFromJSON(json['inventoryInfo']),
        'options': !exists(json, 'options') ? undefined : (json['options'] === null ? null : (json['options'] as Array<any>).map(ProductOptionFromJSON)),
        'properties': !exists(json, 'properties') ? undefined : (json['properties'] === null ? null : (json['properties'] as Array<any>).map(ProductPropertyFromJSON)),
        'priceListEntryTypeProperty': !exists(json, 'priceListEntryTypeProperty') ? undefined : ProductPropertyFromJSON(json['priceListEntryTypeProperty']),
        'productImages': !exists(json, 'productImages') ? undefined : (json['productImages'] === null ? null : (json['productImages'] as Array<any>).map(ProductImageFromJSON)),
    };
}

export function ConfiguredProductToJSON(value?: ConfiguredProduct | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'productCode': value.productCode,
        'purchaseLocation': value.purchaseLocation,
        'fulfillmentTypesSupported': value.fulfillmentTypesSupported,
        'variationProductCode': value.variationProductCode,
        'upc': value.upc,
        'mfgPartNumber': value.mfgPartNumber,
        'purchasableState': ProductPurchasableStateToJSON(value.purchasableState),
        'priceRange': ProductPriceRangeToJSON(value.priceRange),
        'volumePriceBands': value.volumePriceBands === undefined ? undefined : (value.volumePriceBands === null ? null : (value.volumePriceBands as Array<any>).map(ProductVolumePriceToJSON)),
        'volumePriceRange': ProductPriceRangeToJSON(value.volumePriceRange),
        'price': ProductPriceToJSON(value.price),
        'availableShippingDiscounts': value.availableShippingDiscounts === undefined ? undefined : (value.availableShippingDiscounts === null ? null : (value.availableShippingDiscounts as Array<any>).map(DiscountToJSON)),
        'measurements': PackageMeasurementsToJSON(value.measurements),
        'inventoryInfo': ProductInventoryInfoToJSON(value.inventoryInfo),
        'options': value.options === undefined ? undefined : (value.options === null ? null : (value.options as Array<any>).map(ProductOptionToJSON)),
        'properties': value.properties === undefined ? undefined : (value.properties === null ? null : (value.properties as Array<any>).map(ProductPropertyToJSON)),
        'priceListEntryTypeProperty': ProductPropertyToJSON(value.priceListEntryTypeProperty),
        'productImages': value.productImages === undefined ? undefined : (value.productImages === null ? null : (value.productImages as Array<any>).map(ProductImageToJSON)),
    };
}

