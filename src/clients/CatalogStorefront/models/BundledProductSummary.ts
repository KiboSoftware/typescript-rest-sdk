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
import type { PackageMeasurements } from './PackageMeasurements';
import {
    PackageMeasurementsFromJSON,
    PackageMeasurementsFromJSONTyped,
    PackageMeasurementsToJSON,
} from './PackageMeasurements';
import type { ProductInventoryInfo } from './ProductInventoryInfo';
import {
    ProductInventoryInfoFromJSON,
    ProductInventoryInfoFromJSONTyped,
    ProductInventoryInfoToJSON,
} from './ProductInventoryInfo';

/**
 * 
 * @export
 * @interface BundledProductSummary
 */
export interface BundledProductSummary {
    /**
     * 
     * @type {string}
     * @memberof BundledProductSummary
     */
    productShortDescription?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BundledProductSummary
     */
    productName?: string | null;
    /**
     * Merchant-created code associated with the product, for example, a SKU.
     * @type {string}
     * @memberof BundledProductSummary
     */
    productCode?: string | null;
    /**
     * The GoodsType of this product (Physical, Digital, DigitalCredit)
     * @type {string}
     * @memberof BundledProductSummary
     */
    goodsType?: string | null;
    /**
     * The quantity of the bundled product
     * @type {number}
     * @memberof BundledProductSummary
     */
    quantity?: number;
    /**
     * 
     * @type {PackageMeasurements}
     * @memberof BundledProductSummary
     */
    measurements?: PackageMeasurements;
    /**
     * Is this product shipped in its own package
     * @type {boolean}
     * @memberof BundledProductSummary
     */
    isPackagedStandAlone?: boolean | null;
    /**
     * 
     * @type {ProductInventoryInfo}
     * @memberof BundledProductSummary
     */
    inventoryInfo?: ProductInventoryInfo;
    /**
     * Fully Qualified Name of the selected option's attribute (only applies to Products as extras)
     * @type {string}
     * @memberof BundledProductSummary
     */
    optionAttributeFQN?: string | null;
    /**
     * Value of the selected option (only applies to Products as extras)
     * @type {any}
     * @memberof BundledProductSummary
     */
    optionValue?: any | null;
    /**
     * Credit Value applicable to this product. Should only be present on DigitalCredit goodsType....
     * @type {number}
     * @memberof BundledProductSummary
     */
    creditValue?: number | null;
    /**
     * 
     * @type {string}
     * @memberof BundledProductSummary
     */
    productType?: string | null;
}

/**
 * Check if a given object implements the BundledProductSummary interface.
 */
export function instanceOfBundledProductSummary(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BundledProductSummaryFromJSON(json: any): BundledProductSummary {
    return BundledProductSummaryFromJSONTyped(json, false);
}

export function BundledProductSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundledProductSummary {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'productShortDescription': !exists(json, 'productShortDescription') ? undefined : json['productShortDescription'],
        'productName': !exists(json, 'productName') ? undefined : json['productName'],
        'productCode': !exists(json, 'productCode') ? undefined : json['productCode'],
        'goodsType': !exists(json, 'goodsType') ? undefined : json['goodsType'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'measurements': !exists(json, 'measurements') ? undefined : PackageMeasurementsFromJSON(json['measurements']),
        'isPackagedStandAlone': !exists(json, 'isPackagedStandAlone') ? undefined : json['isPackagedStandAlone'],
        'inventoryInfo': !exists(json, 'inventoryInfo') ? undefined : ProductInventoryInfoFromJSON(json['inventoryInfo']),
        'optionAttributeFQN': !exists(json, 'optionAttributeFQN') ? undefined : json['optionAttributeFQN'],
        'optionValue': !exists(json, 'optionValue') ? undefined : json['optionValue'],
        'creditValue': !exists(json, 'creditValue') ? undefined : json['creditValue'],
        'productType': !exists(json, 'productType') ? undefined : json['productType'],
    };
}

export function BundledProductSummaryToJSON(value?: BundledProductSummary | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'productShortDescription': value.productShortDescription,
        'productName': value.productName,
        'productCode': value.productCode,
        'goodsType': value.goodsType,
        'quantity': value.quantity,
        'measurements': PackageMeasurementsToJSON(value.measurements),
        'isPackagedStandAlone': value.isPackagedStandAlone,
        'inventoryInfo': ProductInventoryInfoToJSON(value.inventoryInfo),
        'optionAttributeFQN': value.optionAttributeFQN,
        'optionValue': value.optionValue,
        'creditValue': value.creditValue,
        'productType': value.productType,
    };
}

