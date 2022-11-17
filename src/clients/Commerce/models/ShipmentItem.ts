/* tslint:disable */
/* eslint-disable */
/**
 * Kibo CommerceRuntime Service
 * OpenAPI Spec for Kibo CommerceRuntime Service
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AuditInfo } from './AuditInfo';
import {
    AuditInfoFromJSON,
    AuditInfoFromJSONTyped,
    AuditInfoToJSON,
} from './AuditInfo';
import type { FulfillmentField } from './FulfillmentField';
import {
    FulfillmentFieldFromJSON,
    FulfillmentFieldFromJSONTyped,
    FulfillmentFieldToJSON,
} from './FulfillmentField';
import type { GiftCard } from './GiftCard';
import {
    GiftCardFromJSON,
    GiftCardFromJSONTyped,
    GiftCardToJSON,
} from './GiftCard';
import type { InventoryTags } from './InventoryTags';
import {
    InventoryTagsFromJSON,
    InventoryTagsFromJSONTyped,
    InventoryTagsToJSON,
} from './InventoryTags';
import type { PackageMeasurements } from './PackageMeasurements';
import {
    PackageMeasurementsFromJSON,
    PackageMeasurementsFromJSONTyped,
    PackageMeasurementsToJSON,
} from './PackageMeasurements';
import type { ProductOption } from './ProductOption';
import {
    ProductOptionFromJSON,
    ProductOptionFromJSONTyped,
    ProductOptionToJSON,
} from './ProductOption';

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
     * @type {AuditInfo}
     * @memberof ShipmentItem
     */
    auditInfo?: AuditInfo;
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
     * @type {Date}
     * @memberof ShipmentItem
     */
    backorderReleaseDate?: Date | null;
    /**
     * 
     * @type {PackageMeasurements}
     * @memberof ShipmentItem
     */
    measurements?: PackageMeasurements;
    /**
     * 
     * @type {Array<ProductOption>}
     * @memberof ShipmentItem
     */
    options?: Array<ProductOption> | null;
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
}

/**
 * Check if a given object implements the ShipmentItem interface.
 */
export function instanceOfShipmentItem(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ShipmentItemFromJSON(json: any): ShipmentItem {
    return ShipmentItemFromJSONTyped(json, false);
}

export function ShipmentItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShipmentItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lineId': !exists(json, 'lineId') ? undefined : json['lineId'],
        'originalOrderItemId': !exists(json, 'originalOrderItemId') ? undefined : json['originalOrderItemId'],
        'parentId': !exists(json, 'parentId') ? undefined : json['parentId'],
        'productCode': !exists(json, 'productCode') ? undefined : json['productCode'],
        'variationProductCode': !exists(json, 'variationProductCode') ? undefined : json['variationProductCode'],
        'optionAttributeFQN': !exists(json, 'optionAttributeFQN') ? undefined : json['optionAttributeFQN'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AuditInfoFromJSON(json['auditInfo']),
        'fulfillmentLocationCode': !exists(json, 'fulfillmentLocationCode') ? undefined : json['fulfillmentLocationCode'],
        'imageUrl': !exists(json, 'imageUrl') ? undefined : json['imageUrl'],
        'isTaxable': !exists(json, 'isTaxable') ? undefined : json['isTaxable'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'unitPrice': !exists(json, 'unitPrice') ? undefined : json['unitPrice'],
        'actualPrice': !exists(json, 'actualPrice') ? undefined : json['actualPrice'],
        'overridePrice': !exists(json, 'overridePrice') ? undefined : json['overridePrice'],
        'itemDiscount': !exists(json, 'itemDiscount') ? undefined : json['itemDiscount'],
        'lineItemCost': !exists(json, 'lineItemCost') ? undefined : json['lineItemCost'],
        'itemTax': !exists(json, 'itemTax') ? undefined : json['itemTax'],
        'shipping': !exists(json, 'shipping') ? undefined : json['shipping'],
        'shippingDiscount': !exists(json, 'shippingDiscount') ? undefined : json['shippingDiscount'],
        'shippingTax': !exists(json, 'shippingTax') ? undefined : json['shippingTax'],
        'handling': !exists(json, 'handling') ? undefined : json['handling'],
        'handlingDiscount': !exists(json, 'handlingDiscount') ? undefined : json['handlingDiscount'],
        'handlingTax': !exists(json, 'handlingTax') ? undefined : json['handlingTax'],
        'duty': !exists(json, 'duty') ? undefined : json['duty'],
        'isPackagedStandAlone': !exists(json, 'isPackagedStandAlone') ? undefined : json['isPackagedStandAlone'],
        'readyForPickupQuantity': !exists(json, 'readyForPickupQuantity') ? undefined : json['readyForPickupQuantity'],
        'backorderReleaseDate': !exists(json, 'backorderReleaseDate') ? undefined : (json['backorderReleaseDate'] === null ? null : new Date(json['backorderReleaseDate'])),
        'measurements': !exists(json, 'measurements') ? undefined : PackageMeasurementsFromJSON(json['measurements']),
        'options': !exists(json, 'options') ? undefined : (json['options'] === null ? null : (json['options'] as Array<any>).map(ProductOptionFromJSON)),
        'data': !exists(json, 'data') ? undefined : json['data'],
        'taxData': !exists(json, 'taxData') ? undefined : json['taxData'],
        'weightedShipmentAdjustment': !exists(json, 'weightedShipmentAdjustment') ? undefined : json['weightedShipmentAdjustment'],
        'weightedLineItemTaxAdjustment': !exists(json, 'weightedLineItemTaxAdjustment') ? undefined : json['weightedLineItemTaxAdjustment'],
        'weightedShippingAdjustment': !exists(json, 'weightedShippingAdjustment') ? undefined : json['weightedShippingAdjustment'],
        'weightedShippingTaxAdjustment': !exists(json, 'weightedShippingTaxAdjustment') ? undefined : json['weightedShippingTaxAdjustment'],
        'weightedHandlingAdjustment': !exists(json, 'weightedHandlingAdjustment') ? undefined : json['weightedHandlingAdjustment'],
        'weightedHandlingTaxAdjustment': !exists(json, 'weightedHandlingTaxAdjustment') ? undefined : json['weightedHandlingTaxAdjustment'],
        'weightedDutyAdjustment': !exists(json, 'weightedDutyAdjustment') ? undefined : json['weightedDutyAdjustment'],
        'taxableShipping': !exists(json, 'taxableShipping') ? undefined : json['taxableShipping'],
        'taxableLineItemCost': !exists(json, 'taxableLineItemCost') ? undefined : json['taxableLineItemCost'],
        'taxableHandling': !exists(json, 'taxableHandling') ? undefined : json['taxableHandling'],
        'fulfillmentFields': !exists(json, 'fulfillmentFields') ? undefined : (json['fulfillmentFields'] === null ? null : (json['fulfillmentFields'] as Array<any>).map(FulfillmentFieldFromJSON)),
        'isAssemblyRequired': !exists(json, 'isAssemblyRequired') ? undefined : json['isAssemblyRequired'],
        'parentItemId': !exists(json, 'parentItemId') ? undefined : json['parentItemId'],
        'childItemIds': !exists(json, 'childItemIds') ? undefined : json['childItemIds'],
        'giftCards': !exists(json, 'giftCards') ? undefined : (json['giftCards'] === null ? null : (json['giftCards'] as Array<any>).map(GiftCardFromJSON)),
        'locatorName': !exists(json, 'locatorName') ? undefined : json['locatorName'],
        'inventoryTags': !exists(json, 'inventoryTags') ? undefined : (json['inventoryTags'] === null ? null : (json['inventoryTags'] as Array<any>).map(InventoryTagsFromJSON)),
        'lineItemAdjustment': !exists(json, 'lineItemAdjustment') ? undefined : json['lineItemAdjustment'],
        'isReservedInventory': !exists(json, 'isReservedInventory') ? undefined : json['isReservedInventory'],
        'cartItemId': !exists(json, 'cartItemId') ? undefined : json['cartItemId'],
        'sku': !exists(json, 'sku') ? undefined : json['sku'],
        'partNumber': !exists(json, 'partNumber') ? undefined : json['partNumber'],
        'upc': !exists(json, 'upc') ? undefined : json['upc'],
    };
}

export function ShipmentItemToJSON(value?: ShipmentItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lineId': value.lineId,
        'originalOrderItemId': value.originalOrderItemId,
        'parentId': value.parentId,
        'productCode': value.productCode,
        'variationProductCode': value.variationProductCode,
        'optionAttributeFQN': value.optionAttributeFQN,
        'name': value.name,
        'auditInfo': AuditInfoToJSON(value.auditInfo),
        'fulfillmentLocationCode': value.fulfillmentLocationCode,
        'imageUrl': value.imageUrl,
        'isTaxable': value.isTaxable,
        'quantity': value.quantity,
        'unitPrice': value.unitPrice,
        'actualPrice': value.actualPrice,
        'overridePrice': value.overridePrice,
        'itemDiscount': value.itemDiscount,
        'lineItemCost': value.lineItemCost,
        'itemTax': value.itemTax,
        'shipping': value.shipping,
        'shippingDiscount': value.shippingDiscount,
        'shippingTax': value.shippingTax,
        'handling': value.handling,
        'handlingDiscount': value.handlingDiscount,
        'handlingTax': value.handlingTax,
        'duty': value.duty,
        'isPackagedStandAlone': value.isPackagedStandAlone,
        'readyForPickupQuantity': value.readyForPickupQuantity,
        'backorderReleaseDate': value.backorderReleaseDate === undefined ? undefined : (value.backorderReleaseDate === null ? null : value.backorderReleaseDate.toISOString()),
        'measurements': PackageMeasurementsToJSON(value.measurements),
        'options': value.options === undefined ? undefined : (value.options === null ? null : (value.options as Array<any>).map(ProductOptionToJSON)),
        'data': value.data,
        'taxData': value.taxData,
        'weightedShipmentAdjustment': value.weightedShipmentAdjustment,
        'weightedLineItemTaxAdjustment': value.weightedLineItemTaxAdjustment,
        'weightedShippingAdjustment': value.weightedShippingAdjustment,
        'weightedShippingTaxAdjustment': value.weightedShippingTaxAdjustment,
        'weightedHandlingAdjustment': value.weightedHandlingAdjustment,
        'weightedHandlingTaxAdjustment': value.weightedHandlingTaxAdjustment,
        'weightedDutyAdjustment': value.weightedDutyAdjustment,
        'taxableShipping': value.taxableShipping,
        'taxableLineItemCost': value.taxableLineItemCost,
        'taxableHandling': value.taxableHandling,
        'fulfillmentFields': value.fulfillmentFields === undefined ? undefined : (value.fulfillmentFields === null ? null : (value.fulfillmentFields as Array<any>).map(FulfillmentFieldToJSON)),
        'isAssemblyRequired': value.isAssemblyRequired,
        'parentItemId': value.parentItemId,
        'childItemIds': value.childItemIds,
        'giftCards': value.giftCards === undefined ? undefined : (value.giftCards === null ? null : (value.giftCards as Array<any>).map(GiftCardToJSON)),
        'locatorName': value.locatorName,
        'inventoryTags': value.inventoryTags === undefined ? undefined : (value.inventoryTags === null ? null : (value.inventoryTags as Array<any>).map(InventoryTagsToJSON)),
        'lineItemAdjustment': value.lineItemAdjustment,
        'isReservedInventory': value.isReservedInventory,
        'cartItemId': value.cartItemId,
        'sku': value.sku,
        'partNumber': value.partNumber,
        'upc': value.upc,
    };
}

