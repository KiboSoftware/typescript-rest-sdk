/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface AcceptedPackingSuggestionRequest
 */
export interface AcceptedPackingSuggestionRequest {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof AcceptedPackingSuggestionRequest
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {Array<PackedBox>}
     * @memberof AcceptedPackingSuggestionRequest
     */
    boxes?: Array<PackedBox>;
    /**
     * 
     * @type {Array<PackedItem>}
     * @memberof AcceptedPackingSuggestionRequest
     */
    leftOvers?: Array<PackedItem>;
    /**
     * 
     * @type {number}
     * @memberof AcceptedPackingSuggestionRequest
     */
    lenLeftovers?: number;
    /**
     * 
     * @type {string}
     * @memberof AcceptedPackingSuggestionRequest
     */
    packingSuggestionId?: string;
}
/**
 * 
 * @export
 * @interface BackorderItem
 */
export interface BackorderItem {
    /**
     * 
     * @type {string}
     * @memberof BackorderItem
     */
    backorderReleaseDate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BackorderItem
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BackorderItem
     */
    holdBlockAssignment?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BackorderItem
     */
    lineId?: number;
    /**
     * 
     * @type {number}
     * @memberof BackorderItem
     */
    quantity?: number;
}
/**
 * 
 * @export
 * @interface BackorderItemUpdate
 */
export interface BackorderItemUpdate {
    /**
     * 
     * @type {string}
     * @memberof BackorderItemUpdate
     */
    backorderReleaseDate?: string;
    /**
     * 
     * @type {number}
     * @memberof BackorderItemUpdate
     */
    lineId?: number;
}
/**
 * 
 * @export
 * @interface BackorderItemsRequest
 */
export interface BackorderItemsRequest {
    /**
     * 
     * @type {boolean}
     * @memberof BackorderItemsRequest
     */
    isUserAction?: boolean;
    /**
     * 
     * @type {Array<BackorderItem>}
     * @memberof BackorderItemsRequest
     */
    items?: Array<BackorderItem>;
    /**
     * 
     * @type {string}
     * @memberof BackorderItemsRequest
     */
    runId?: string;
}
/**
 * 
 * @export
 * @interface BackorderItemsUpdateRequest
 */
export interface BackorderItemsUpdateRequest {
    /**
     * 
     * @type {Array<BackorderItemUpdate>}
     * @memberof BackorderItemsUpdateRequest
     */
    items?: Array<BackorderItemUpdate>;
}
/**
 * 
 * @export
 * @interface BackorderShipmentRequest
 */
export interface BackorderShipmentRequest {
    /**
     * 
     * @type {string}
     * @memberof BackorderShipmentRequest
     */
    backorderReleaseDate?: string;
    /**
     * 
     * @type {string}
     * @memberof BackorderShipmentRequest
     */
    runId?: string;
}
/**
 * 
 * @export
 * @interface BinShipmentProductQuantity
 */
export interface BinShipmentProductQuantity {
    /**
     * 
     * @type {number}
     * @memberof BinShipmentProductQuantity
     */
    actualQuantity?: number;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof BinShipmentProductQuantity
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof BinShipmentProductQuantity
     */
    binName?: string;
    /**
     * 
     * @type {string}
     * @memberof BinShipmentProductQuantity
     */
    productCode?: string;
    /**
     * 
     * @type {number}
     * @memberof BinShipmentProductQuantity
     */
    shipmentNumber?: number;
    /**
     * 
     * @type {ShortageReason}
     * @memberof BinShipmentProductQuantity
     */
    shortageReason?: ShortageReason;
    /**
     * 
     * @type {string}
     * @memberof BinShipmentProductQuantity
     */
    variationProductCode?: string;
}
/**
 * 
 * @export
 * @interface BlockActionsRequest
 */
export interface BlockActionsRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof BlockActionsRequest
     */
    blockedActions?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BlockActionsRequest
     */
    reason?: string;
}
/**
 * 
 * @export
 * @interface BoxTypeDto
 */
export interface BoxTypeDto {
    /**
     * 
     * @type {number}
     * @memberof BoxTypeDto
     */
    boxId?: number;
    /**
     * 
     * @type {DimensionsDto}
     * @memberof BoxTypeDto
     */
    dimensions?: DimensionsDto;
    /**
     * 
     * @type {string}
     * @memberof BoxTypeDto
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof BoxTypeDto
     */
    weightMax?: number;
    /**
     * 
     * @type {string}
     * @memberof BoxTypeDto
     */
    weightUnit?: string;
}
/**
 * 
 * @export
 * @interface BpmVariable
 */
export interface BpmVariable {
    /**
     * 
     * @type {string}
     * @memberof BpmVariable
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof BpmVariable
     */
    oldValue?: string;
    /**
     * 
     * @type {string}
     * @memberof BpmVariable
     */
    updateDate?: string;
    /**
     * 
     * @type {string}
     * @memberof BpmVariable
     */
    value?: string;
}
/**
 * 
 * @export
 * @interface CancelItem
 */
export interface CancelItem {
    /**
     * 
     * @type {FulfillmentAPICanceledReason}
     * @memberof CancelItem
     */
    canceledReason?: FulfillmentAPICanceledReason;
    /**
     * 
     * @type {number}
     * @memberof CancelItem
     */
    lineId?: number;
    /**
     * 
     * @type {number}
     * @memberof CancelItem
     */
    quantity?: number;
}
/**
 * 
 * @export
 * @interface CancelItemsRequest
 */
export interface CancelItemsRequest {
    /**
     * 
     * @type {boolean}
     * @memberof CancelItemsRequest
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CancelItemsRequest
     */
    holdBlockAssignment?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CancelItemsRequest
     */
    isUserAction?: boolean;
    /**
     * 
     * @type {Array<CancelItem>}
     * @memberof CancelItemsRequest
     */
    items?: Array<CancelItem>;
    /**
     * 
     * @type {boolean}
     * @memberof CancelItemsRequest
     */
    sendNotifications?: boolean;
}
/**
 * 
 * @export
 * @interface CancelShipment
 */
export interface CancelShipment {
    /**
     * 
     * @type {boolean}
     * @memberof CancelShipment
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {FulfillmentAPICanceledReason}
     * @memberof CancelShipment
     */
    canceledReason?: FulfillmentAPICanceledReason;
    /**
     * 
     * @type {boolean}
     * @memberof CancelShipment
     */
    holdBlockAssignment?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CancelShipment
     */
    sendNotifications?: boolean;
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
    actualPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    allocatedQuantity?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CanceledItem
     */
    allowsBackOrder?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CanceledItem
     */
    allowsFutureAllocate?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CanceledItem
     */
    allowsSubstitution?: boolean;
    /**
     * 
     * @type {FulfillmentAPIAppeasementReason}
     * @memberof CanceledItem
     */
    appeasementReason?: FulfillmentAPIAppeasementReason;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof CanceledItem
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIAuditInfo}
     * @memberof CanceledItem
     */
    auditInfo?: FulfillmentAPIAuditInfo;
    /**
     * 
     * @type {boolean}
     * @memberof CanceledItem
     */
    autoSubstitution?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    backorderReleaseDate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CanceledItem
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {FulfillmentAPIBundleInfo}
     * @memberof CanceledItem
     */
    bundleInfo?: FulfillmentAPIBundleInfo;
    /**
     * 
     * @type {FulfillmentAPICanceledReason}
     * @memberof CanceledItem
     */
    canceledReason?: FulfillmentAPICanceledReason;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    cartItemId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CanceledItem
     */
    childItemIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    condition?: string;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    creditCurrencyCode?: string;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    creditValue?: number;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof CanceledItem
     */
    data?: { [key: string]: object; };
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    duty?: number;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    expectedDeliveryDate?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIFulfillmentField>}
     * @memberof CanceledItem
     */
    fulfillmentFields?: Array<FulfillmentAPIFulfillmentField>;
    /**
     * 
     * @type {Array<FulfillmentAPIGiftCard>}
     * @memberof CanceledItem
     */
    giftCards?: Array<FulfillmentAPIGiftCard>;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    giftMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    goodsType?: CanceledItemGoodsTypeEnum;
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
    height?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CanceledItem
     */
    holdBlockAssignment?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    imageUrl?: string;
    /**
     * 
     * @type {Array<InventoryAllocation>}
     * @memberof CanceledItem
     */
    inventoryAllocations?: Array<InventoryAllocation>;
    /**
     * 
     * @type {Array<InventoryTag>}
     * @memberof CanceledItem
     */
    inventoryTags?: Array<InventoryTag>;
    /**
     * 
     * @type {boolean}
     * @memberof CanceledItem
     */
    isAssemblyRequired?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CanceledItem
     */
    isGift?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CanceledItem
     */
    isPackagedStandAlone?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CanceledItem
     */
    isReservedInventory?: boolean;
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
    itemDiscount?: number;
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
    length?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    lineId?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    lineItemAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    lineItemCost?: number;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    locatorName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CanceledItem
     */
    manageStock?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    optionAttributeFQN?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIProductOption>}
     * @memberof CanceledItem
     */
    options?: Array<FulfillmentAPIProductOption>;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    originalLineId?: number;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    originalOrderItemId?: string;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    originalQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    overridePrice?: number;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    parentItemId?: string;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    priceMode?: CanceledItemPriceModeEnum;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    productCode?: string;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    purchaseLocation?: string;
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
    readyForPickupQuantity?: number;
    /**
     * 
     * @type {FulfillmentAPIReturnRuleInfo}
     * @memberof CanceledItem
     */
    returnRuleInfo?: FulfillmentAPIReturnRuleInfo;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    serialNumber?: string;
    /**
     * 
     * @type {Array<ShipmentItemAttribute>}
     * @memberof CanceledItem
     */
    shipmentItemAttributes?: Array<ShipmentItemAttribute>;
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
     * @type {string}
     * @memberof CanceledItem
     */
    sku?: string;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    stockValidationStatus?: string;
    /**
     * 
     * @type {FulfillmentAPISubstituteInfo}
     * @memberof CanceledItem
     */
    substituteInfo?: FulfillmentAPISubstituteInfo;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    substituteQuantity?: number;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    substitutionType?: CanceledItemSubstitutionTypeEnum;
    /**
     * 
     * @type {object}
     * @memberof CanceledItem
     */
    taxData?: object;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    taxableHandling?: number;
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
    taxableShipping?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    timeFenceDays?: number;
    /**
     * This is deprecated.
     * @type {number}
     * @memberof CanceledItem
     */
    transferQuantity?: number;
    /**
     * This is the actual quantity transferred.
     * @type {number}
     * @memberof CanceledItem
     */
    trueTransferQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    unitPrice?: number;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    upc?: string;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    validatedQuantity?: number;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    variationProductCode?: string;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    weight?: number;
    /**
     * 
     * @type {string}
     * @memberof CanceledItem
     */
    weightUnit?: string;
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
    weightedLineItemTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    weightedOrderHandlingFee?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    weightedOrderHandlingFeeDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItem
     */
    weightedOrderHandlingFeeTax?: number;
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
    width?: number;
}


/**
 * @export
 */
export const CanceledItemGoodsTypeEnum = {
    Physical: 'Physical',
    Digital: 'Digital',
    DigitalCredit: 'DigitalCredit',
    DigitalGiftCard: 'DigitalGiftCard',
    Service: 'Service'
} as const;
export type CanceledItemGoodsTypeEnum = typeof CanceledItemGoodsTypeEnum[keyof typeof CanceledItemGoodsTypeEnum];

/**
 * @export
 */
export const CanceledItemPriceModeEnum = {
    Internal: 'Internal',
    External: 'External'
} as const;
export type CanceledItemPriceModeEnum = typeof CanceledItemPriceModeEnum[keyof typeof CanceledItemPriceModeEnum];

/**
 * @export
 */
export const CanceledItemSubstitutionTypeEnum = {
    PreFulfillment: 'PRE_FULFILLMENT',
    AtFulfillment: 'AT_FULFILLMENT'
} as const;
export type CanceledItemSubstitutionTypeEnum = typeof CanceledItemSubstitutionTypeEnum[keyof typeof CanceledItemSubstitutionTypeEnum];

/**
 * 
 * @export
 * @interface CartPackingSuggestionRequestDto
 */
export interface CartPackingSuggestionRequestDto {
    /**
     * 
     * @type {Array<BoxTypeDto>}
     * @memberof CartPackingSuggestionRequestDto
     */
    boxTypes?: Array<BoxTypeDto>;
    /**
     * 
     * @type {Array<ItemDto>}
     * @memberof CartPackingSuggestionRequestDto
     */
    items?: Array<ItemDto>;
    /**
     * 
     * @type {number}
     * @memberof CartPackingSuggestionRequestDto
     */
    maxPackingSlips?: number;
}
/**
 * 
 * @export
 * @interface CartonizationDto
 */
export interface CartonizationDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof CartonizationDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {Array<PackedBoxDto>}
     * @memberof CartonizationDto
     */
    boxes?: Array<PackedBoxDto>;
    /**
     * 
     * @type {string}
     * @memberof CartonizationDto
     */
    packingSuggestionId?: string;
}
/**
 * 
 * @export
 * @interface CartonizationRejectionReason
 */
export interface CartonizationRejectionReason {
    /**
     * 
     * @type {number}
     * @memberof CartonizationRejectionReason
     */
    displayOrder?: number;
    /**
     * 
     * @type {string}
     * @memberof CartonizationRejectionReason
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CartonizationRejectionReason
     */
    needsMoreInfo?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CartonizationRejectionReason
     */
    reasonCode?: string;
}
/**
 * 
 * @export
 * @interface ChangeDto
 */
export interface ChangeDto {
    /**
     * 
     * @type {object}
     * @memberof ChangeDto
     */
    afterValue?: object;
    /**
     * 
     * @type {object}
     * @memberof ChangeDto
     */
    beforeValue?: object;
    /**
     * 
     * @type {string}
     * @memberof ChangeDto
     */
    changeCategory?: string;
    /**
     * 
     * @type {string}
     * @memberof ChangeDto
     */
    detectedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof ChangeDto
     */
    eventId?: string;
    /**
     * 
     * @type {string}
     * @memberof ChangeDto
     */
    locationCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ChangeDto
     */
    referenceId?: string;
    /**
     * 
     * @type {number}
     * @memberof ChangeDto
     */
    sequenceId?: number;
    /**
     * 
     * @type {string}
     * @memberof ChangeDto
     */
    subtype?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ChangeDto
     */
    upcs?: Array<string>;
}
/**
 * 
 * @export
 * @interface ClosePickWave
 */
export interface ClosePickWave {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof ClosePickWave
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {boolean}
     * @memberof ClosePickWave
     */
    createRecovery?: boolean;
    /**
     * 
     * @type {Array<BinShipmentProductQuantity>}
     * @memberof ClosePickWave
     */
    quantities?: Array<BinShipmentProductQuantity>;
}
/**
 * 
 * @export
 * @interface CollectionModelOfAttributeVocabularyValue
 */
export interface CollectionModelOfAttributeVocabularyValue {
    /**
     * 
     * @type {{ [key: string]: Array<FulfillmentAPIAttributeVocabularyValue>; }}
     * @memberof CollectionModelOfAttributeVocabularyValue
     */
    embedded?: { [key: string]: Array<FulfillmentAPIAttributeVocabularyValue>; };
    /**
     * 
     * @type {{ [key: string]: FulfillmentAPILink; }}
     * @memberof CollectionModelOfAttributeVocabularyValue
     */
    links?: { [key: string]: FulfillmentAPILink; };
}
/**
 * 
 * @export
 * @interface CollectionModelOfEntityModelOfCustomerSurvey
 */
export interface CollectionModelOfEntityModelOfCustomerSurvey {
    /**
     * 
     * @type {{ [key: string]: Array<EntityModelOfCustomerSurvey>; }}
     * @memberof CollectionModelOfEntityModelOfCustomerSurvey
     */
    embedded?: { [key: string]: Array<EntityModelOfCustomerSurvey>; };
    /**
     * 
     * @type {{ [key: string]: FulfillmentAPILink; }}
     * @memberof CollectionModelOfEntityModelOfCustomerSurvey
     */
    links?: { [key: string]: FulfillmentAPILink; };
}
/**
 * 
 * @export
 * @interface CollectionModelOfEntityModelOfShipment
 */
export interface CollectionModelOfEntityModelOfShipment {
    /**
     * 
     * @type {{ [key: string]: Array<EntityModelOfShipment>; }}
     * @memberof CollectionModelOfEntityModelOfShipment
     */
    embedded?: { [key: string]: Array<EntityModelOfShipment>; };
    /**
     * 
     * @type {{ [key: string]: FulfillmentAPILink; }}
     * @memberof CollectionModelOfEntityModelOfShipment
     */
    links?: { [key: string]: FulfillmentAPILink; };
}
/**
 * 
 * @export
 * @interface CollectionModelOfLocationShipmentCount
 */
export interface CollectionModelOfLocationShipmentCount {
    /**
     * 
     * @type {{ [key: string]: Array<LocationShipmentCount>; }}
     * @memberof CollectionModelOfLocationShipmentCount
     */
    embedded?: { [key: string]: Array<LocationShipmentCount>; };
    /**
     * 
     * @type {{ [key: string]: FulfillmentAPILink; }}
     * @memberof CollectionModelOfLocationShipmentCount
     */
    links?: { [key: string]: FulfillmentAPILink; };
}
/**
 * 
 * @export
 * @interface CollectionModelOfLocationSummary
 */
export interface CollectionModelOfLocationSummary {
    /**
     * 
     * @type {{ [key: string]: Array<LocationSummary>; }}
     * @memberof CollectionModelOfLocationSummary
     */
    embedded?: { [key: string]: Array<LocationSummary>; };
    /**
     * 
     * @type {{ [key: string]: FulfillmentAPILink; }}
     * @memberof CollectionModelOfLocationSummary
     */
    links?: { [key: string]: FulfillmentAPILink; };
}
/**
 * 
 * @export
 * @interface CollectionModelOfManifest
 */
export interface CollectionModelOfManifest {
    /**
     * 
     * @type {{ [key: string]: Array<Manifest>; }}
     * @memberof CollectionModelOfManifest
     */
    embedded?: { [key: string]: Array<Manifest>; };
    /**
     * 
     * @type {{ [key: string]: FulfillmentAPILink; }}
     * @memberof CollectionModelOfManifest
     */
    links?: { [key: string]: FulfillmentAPILink; };
}
/**
 * 
 * @export
 * @interface CollectionModelOfPickWave
 */
export interface CollectionModelOfPickWave {
    /**
     * 
     * @type {{ [key: string]: Array<PickWave>; }}
     * @memberof CollectionModelOfPickWave
     */
    embedded?: { [key: string]: Array<PickWave>; };
    /**
     * 
     * @type {{ [key: string]: FulfillmentAPILink; }}
     * @memberof CollectionModelOfPickWave
     */
    links?: { [key: string]: FulfillmentAPILink; };
}
/**
 * 
 * @export
 * @interface CollectionModelOfShipment
 */
export interface CollectionModelOfShipment {
    /**
     * 
     * @type {{ [key: string]: Array<FulfillmentAPIShipment>; }}
     * @memberof CollectionModelOfShipment
     */
    embedded?: { [key: string]: Array<FulfillmentAPIShipment>; };
    /**
     * 
     * @type {{ [key: string]: FulfillmentAPILink; }}
     * @memberof CollectionModelOfShipment
     */
    links?: { [key: string]: FulfillmentAPILink; };
}
/**
 * 
 * @export
 * @interface CollectionModelOfSubstitutableItemResponse
 */
export interface CollectionModelOfSubstitutableItemResponse {
    /**
     * 
     * @type {{ [key: string]: Array<SubstitutableItemResponse>; }}
     * @memberof CollectionModelOfSubstitutableItemResponse
     */
    embedded?: { [key: string]: Array<SubstitutableItemResponse>; };
    /**
     * 
     * @type {{ [key: string]: FulfillmentAPILink; }}
     * @memberof CollectionModelOfSubstitutableItemResponse
     */
    links?: { [key: string]: FulfillmentAPILink; };
}
/**
 * 
 * @export
 * @interface CollectionModelOfTask
 */
export interface CollectionModelOfTask {
    /**
     * 
     * @type {{ [key: string]: Array<Task>; }}
     * @memberof CollectionModelOfTask
     */
    embedded?: { [key: string]: Array<Task>; };
    /**
     * 
     * @type {{ [key: string]: FulfillmentAPILink; }}
     * @memberof CollectionModelOfTask
     */
    links?: { [key: string]: FulfillmentAPILink; };
}
/**
 * 
 * @export
 * @interface ContentGroup
 */
export interface ContentGroup {
    /**
     * 
     * @type {FulfillmentAPIAuditInfo}
     * @memberof ContentGroup
     */
    auditInfo?: FulfillmentAPIAuditInfo;
    /**
     * 
     * @type {Array<PickWaveContent>}
     * @memberof ContentGroup
     */
    contents?: Array<PickWaveContent>;
    /**
     * 
     * @type {string}
     * @memberof ContentGroup
     */
    imageUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentGroup
     */
    locatorName?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentGroup
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentGroup
     */
    productCode?: string;
    /**
     * 
     * @type {number}
     * @memberof ContentGroup
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof ContentGroup
     */
    upc?: string;
}
/**
 * 
 * @export
 * @interface CreatePickWave
 */
export interface CreatePickWave {
    /**
     * 
     * @type {boolean}
     * @memberof CreatePickWave
     */
    allowEmptyWave?: boolean;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof CreatePickWave
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {Array<PickWaveBinRange>}
     * @memberof CreatePickWave
     */
    binRanges?: Array<PickWaveBinRange>;
    /**
     * 
     * @type {boolean}
     * @memberof CreatePickWave
     */
    fulfillableShipmentsOnly?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CreatePickWave
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreatePickWave
     */
    includeZeroInventory?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreatePickWave
     */
    lockWave?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CreatePickWave
     */
    maxShipments?: number;
    /**
     * 
     * @type {string}
     * @memberof CreatePickWave
     */
    pickWaveType?: CreatePickWavePickWaveTypeEnum;
    /**
     * 
     * @type {Array<PickWaveProductMatch>}
     * @memberof CreatePickWave
     */
    products?: Array<PickWaveProductMatch>;
    /**
     * 
     * @type {string}
     * @memberof CreatePickWave
     */
    shipmentDateEnd?: string;
    /**
     * 
     * @type {string}
     * @memberof CreatePickWave
     */
    shipmentDateStart?: string;
    /**
     * 
     * @type {string}
     * @memberof CreatePickWave
     */
    shipmentType?: CreatePickWaveShipmentTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CreatePickWave
     */
    shippingOption?: CreatePickWaveShippingOptionEnum;
}


/**
 * @export
 */
export const CreatePickWavePickWaveTypeEnum = {
    Normal: 'NORMAL',
    Single: 'SINGLE',
    Multiple: 'MULTIPLE'
} as const;
export type CreatePickWavePickWaveTypeEnum = typeof CreatePickWavePickWaveTypeEnum[keyof typeof CreatePickWavePickWaveTypeEnum];

/**
 * @export
 */
export const CreatePickWaveShipmentTypeEnum = {
    Sth: 'STH',
    Bopis: 'BOPIS'
} as const;
export type CreatePickWaveShipmentTypeEnum = typeof CreatePickWaveShipmentTypeEnum[keyof typeof CreatePickWaveShipmentTypeEnum];

/**
 * @export
 */
export const CreatePickWaveShippingOptionEnum = {
    StandardOnly: 'STANDARD_ONLY',
    ExpressOnly: 'EXPRESS_ONLY',
    All: 'ALL'
} as const;
export type CreatePickWaveShippingOptionEnum = typeof CreatePickWaveShippingOptionEnum[keyof typeof CreatePickWaveShippingOptionEnum];

/**
 * 
 * @export
 * @interface CreateRuleBasedPickWave
 */
export interface CreateRuleBasedPickWave {
    /**
     * 
     * @type {boolean}
     * @memberof CreateRuleBasedPickWave
     */
    allowEmptyWave?: boolean;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof CreateRuleBasedPickWave
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {boolean}
     * @memberof CreateRuleBasedPickWave
     */
    fulfillableShipmentsOnly?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CreateRuleBasedPickWave
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {number}
     * @memberof CreateRuleBasedPickWave
     */
    maxShipments?: number;
    /**
     * 
     * @type {string}
     * @memberof CreateRuleBasedPickWave
     */
    pickWaveRuleCode?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof CreateRuleBasedPickWave
     */
    shipmentNumbers?: Array<number>;
}
/**
 * 
 * @export
 * @interface CustomerSurvey
 */
export interface CustomerSurvey {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof CustomerSurvey
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIAuditInfo}
     * @memberof CustomerSurvey
     */
    auditInfo?: FulfillmentAPIAuditInfo;
    /**
     * 
     * @type {Array<CustomerSurveyEntry>}
     * @memberof CustomerSurvey
     */
    entries?: Array<CustomerSurveyEntry>;
    /**
     * 
     * @type {string}
     * @memberof CustomerSurvey
     */
    id?: string;
    /**
     * 
     * @type {number}
     * @memberof CustomerSurvey
     */
    shipmentNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerSurvey
     */
    siteId?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerSurvey
     */
    tenantId?: number;
}
/**
 * 
 * @export
 * @interface CustomerSurveyEntry
 */
export interface CustomerSurveyEntry {
    /**
     * 
     * @type {object}
     * @memberof CustomerSurveyEntry
     */
    answer?: object;
    /**
     * 
     * @type {string}
     * @memberof CustomerSurveyEntry
     */
    question?: string;
}
/**
 * 
 * @export
 * @interface DashboardStep
 */
export interface DashboardStep {
    /**
     * 
     * @type {Links}
     * @memberof DashboardStep
     */
    links?: Links;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof DashboardStep
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof DashboardStep
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof DashboardStep
     */
    total?: number;
}
/**
 * 
 * @export
 * @interface DimensionsDto
 */
export interface DimensionsDto {
    /**
     * 
     * @type {number}
     * @memberof DimensionsDto
     */
    height?: number;
    /**
     * 
     * @type {number}
     * @memberof DimensionsDto
     */
    length?: number;
    /**
     * 
     * @type {string}
     * @memberof DimensionsDto
     */
    unit?: string;
    /**
     * 
     * @type {number}
     * @memberof DimensionsDto
     */
    width?: number;
}
/**
 * 
 * @export
 * @interface DisruptionEventDto
 */
export interface DisruptionEventDto {
    /**
     * 
     * @type {Array<string>}
     * @memberof DisruptionEventDto
     */
    affectedCallOffOrderIds?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof DisruptionEventDto
     */
    affectedReservationIds?: Array<string>;
    /**
     * 
     * @type {Array<number>}
     * @memberof DisruptionEventDto
     */
    affectedShipmentIds?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof DisruptionEventDto
     */
    deltaQty?: number;
    /**
     * 
     * @type {string}
     * @memberof DisruptionEventDto
     */
    eventId?: string;
    /**
     * 
     * @type {string}
     * @memberof DisruptionEventDto
     */
    eventType?: string;
    /**
     * 
     * @type {string}
     * @memberof DisruptionEventDto
     */
    jobId?: string;
    /**
     * 
     * @type {string}
     * @memberof DisruptionEventDto
     */
    locationCode?: string;
    /**
     * 
     * @type {number}
     * @memberof DisruptionEventDto
     */
    newQuantity?: number;
    /**
     * 
     * @type {string}
     * @memberof DisruptionEventDto
     */
    occurredAt?: string;
    /**
     * 
     * @type {number}
     * @memberof DisruptionEventDto
     */
    oldQuantity?: number;
    /**
     * 
     * @type {string}
     * @memberof DisruptionEventDto
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof DisruptionEventDto
     */
    upc?: string;
}
/**
 * 
 * @export
 * @interface EntityModelOfContact
 */
export interface EntityModelOfContact {
    /**
     * 
     * @type {Links}
     * @memberof EntityModelOfContact
     */
    links?: Links;
    /**
     * 
     * @type {FulfillmentAPIAddress}
     * @memberof EntityModelOfContact
     */
    address?: FulfillmentAPIAddress;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof EntityModelOfContact
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfContact
     */
    companyOrOrganization?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfContact
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfContact
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfContact
     */
    fullName?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfContact
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfContact
     */
    lastNameOrSurname?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfContact
     */
    middleNameOrInitial?: string;
    /**
     * 
     * @type {FulfillmentAPIPhone}
     * @memberof EntityModelOfContact
     */
    phoneNumbers?: FulfillmentAPIPhone;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfContact
     */
    shortFullName?: string;
}
/**
 * 
 * @export
 * @interface EntityModelOfCustomerSurvey
 */
export interface EntityModelOfCustomerSurvey {
    /**
     * 
     * @type {Links}
     * @memberof EntityModelOfCustomerSurvey
     */
    links?: Links;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof EntityModelOfCustomerSurvey
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIAuditInfo}
     * @memberof EntityModelOfCustomerSurvey
     */
    auditInfo?: FulfillmentAPIAuditInfo;
    /**
     * 
     * @type {Array<CustomerSurveyEntry>}
     * @memberof EntityModelOfCustomerSurvey
     */
    entries?: Array<CustomerSurveyEntry>;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfCustomerSurvey
     */
    id?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfCustomerSurvey
     */
    shipmentNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfCustomerSurvey
     */
    siteId?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfCustomerSurvey
     */
    tenantId?: number;
}
/**
 * 
 * @export
 * @interface EntityModelOfDashboardResponse
 */
export interface EntityModelOfDashboardResponse {
    /**
     * 
     * @type {Links}
     * @memberof EntityModelOfDashboardResponse
     */
    links?: Links;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfDashboardResponse
     */
    shipmentType?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfDashboardResponse
     */
    shipmentTypeDisplayName?: string;
    /**
     * 
     * @type {Array<DashboardStep>}
     * @memberof EntityModelOfDashboardResponse
     */
    steps?: Array<DashboardStep>;
}
/**
 * 
 * @export
 * @interface EntityModelOfManifest
 */
export interface EntityModelOfManifest {
    /**
     * 
     * @type {Links}
     * @memberof EntityModelOfManifest
     */
    links?: Links;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof EntityModelOfManifest
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIAuditInfo}
     * @memberof EntityModelOfManifest
     */
    auditInfo?: FulfillmentAPIAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfManifest
     */
    carrierId?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfManifest
     */
    internalId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EntityModelOfManifest
     */
    isSuccessfulPreviously?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfManifest
     */
    locationCode?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfManifest
     */
    manifestId?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfManifest
     */
    manifestUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfManifest
     */
    numberOfPackages?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfManifest
     */
    numberOfShipments?: number;
    /**
     * 
     * @type {Array<ManifestShipment>}
     * @memberof EntityModelOfManifest
     */
    shipments?: Array<ManifestShipment>;
    /**
     * 
     * @type {Array<ManifestShipment>}
     * @memberof EntityModelOfManifest
     */
    shipmentsSuccessfulPreviously?: Array<ManifestShipment>;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfManifest
     */
    tenantId?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfManifest
     */
    userDisplayName?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfManifest
     */
    userId?: string;
}
/**
 * 
 * @export
 * @interface EntityModelOfPackageConsolidationCandidatesResponse
 */
export interface EntityModelOfPackageConsolidationCandidatesResponse {
    /**
     * 
     * @type {Links}
     * @memberof EntityModelOfPackageConsolidationCandidatesResponse
     */
    links?: Links;
    /**
     * 
     * @type {Array<PackageConsolidationSuggestion>}
     * @memberof EntityModelOfPackageConsolidationCandidatesResponse
     */
    suggestions?: Array<PackageConsolidationSuggestion>;
}
/**
 * 
 * @export
 * @interface EntityModelOfPackageConsolidationResponse
 */
export interface EntityModelOfPackageConsolidationResponse {
    /**
     * 
     * @type {Links}
     * @memberof EntityModelOfPackageConsolidationResponse
     */
    links?: Links;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof EntityModelOfPackageConsolidationResponse
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfPackageConsolidationResponse
     */
    packageConsolidationId?: string;
    /**
     * 
     * @type {Array<PackageConsolidationDto>}
     * @memberof EntityModelOfPackageConsolidationResponse
     */
    packageConsolidations?: Array<PackageConsolidationDto>;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfPackageConsolidationResponse
     */
    shipmentConsolidationId?: string;
}
/**
 * 
 * @export
 * @interface EntityModelOfPaymentInvoice
 */
export interface EntityModelOfPaymentInvoice {
    /**
     * 
     * @type {Links}
     * @memberof EntityModelOfPaymentInvoice
     */
    links?: Links;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfPaymentInvoice
     */
    currency?: string;
    /**
     * 
     * @type {object}
     * @memberof EntityModelOfPaymentInvoice
     */
    data?: object;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfPaymentInvoice
     */
    invoiceDate?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfPaymentInvoice
     */
    invoiceNumber?: string;
    /**
     * 
     * @type {Array<InvoiceLineItem>}
     * @memberof EntityModelOfPaymentInvoice
     */
    lineItems?: Array<InvoiceLineItem>;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfPaymentInvoice
     */
    rawEdiData?: string;
    /**
     * 
     * @type {InvoiceReferences}
     * @memberof EntityModelOfPaymentInvoice
     */
    references?: InvoiceReferences;
    /**
     * 
     * @type {Array<InvoiceTax>}
     * @memberof EntityModelOfPaymentInvoice
     */
    taxes?: Array<InvoiceTax>;
    /**
     * 
     * @type {InvoiceTerms}
     * @memberof EntityModelOfPaymentInvoice
     */
    terms?: InvoiceTerms;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfPaymentInvoice
     */
    totalAmount?: number;
    /**
     * 
     * @type {InvoiceVendor}
     * @memberof EntityModelOfPaymentInvoice
     */
    vendor?: InvoiceVendor;
}
/**
 * 
 * @export
 * @interface EntityModelOfPickWave
 */
export interface EntityModelOfPickWave {
    /**
     * 
     * @type {Links}
     * @memberof EntityModelOfPickWave
     */
    links?: Links;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof EntityModelOfPickWave
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIAuditInfo}
     * @memberof EntityModelOfPickWave
     */
    auditInfo?: FulfillmentAPIAuditInfo;
    /**
     * 
     * @type {Array<FulfillmentAPIChangeMessage>}
     * @memberof EntityModelOfPickWave
     */
    changeMessages?: Array<FulfillmentAPIChangeMessage>;
    /**
     * 
     * @type {Array<PickWaveContent>}
     * @memberof EntityModelOfPickWave
     */
    contents?: Array<PickWaveContent>;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfPickWave
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfPickWave
     */
    maxShipments?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfPickWave
     */
    parentPickWaveNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfPickWave
     */
    pickType?: EntityModelOfPickWavePickTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfPickWave
     */
    pickWaveId?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfPickWave
     */
    pickWaveNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfPickWave
     */
    pickWaveRuleCode?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfPickWave
     */
    pickWaveStatus?: EntityModelOfPickWavePickWaveStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfPickWave
     */
    recoveryPickWaveNumber?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof EntityModelOfPickWave
     */
    shipmentNumbers?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfPickWave
     */
    shipmentType?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfPickWave
     */
    tenantId?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfPickWave
     */
    userDisplayName?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfPickWave
     */
    userId?: string;
}


/**
 * @export
 */
export const EntityModelOfPickWavePickTypeEnum = {
    Normal: 'NORMAL',
    Single: 'SINGLE',
    Multiple: 'MULTIPLE'
} as const;
export type EntityModelOfPickWavePickTypeEnum = typeof EntityModelOfPickWavePickTypeEnum[keyof typeof EntityModelOfPickWavePickTypeEnum];

/**
 * @export
 */
export const EntityModelOfPickWavePickWaveStatusEnum = {
    Error: 'ERROR',
    Pending: 'PENDING',
    InProgress: 'IN_PROGRESS',
    Closed: 'CLOSED',
    PendingRecovery: 'PENDING_RECOVERY'
} as const;
export type EntityModelOfPickWavePickWaveStatusEnum = typeof EntityModelOfPickWavePickWaveStatusEnum[keyof typeof EntityModelOfPickWavePickWaveStatusEnum];

/**
 * 
 * @export
 * @interface EntityModelOfPickWaveDetail
 */
export interface EntityModelOfPickWaveDetail {
    /**
     * 
     * @type {Links}
     * @memberof EntityModelOfPickWaveDetail
     */
    links?: Links;
    /**
     * 
     * @type {FulfillmentAPIAuditInfo}
     * @memberof EntityModelOfPickWaveDetail
     */
    auditInfo?: FulfillmentAPIAuditInfo;
    /**
     * 
     * @type {Array<ContentGroup>}
     * @memberof EntityModelOfPickWaveDetail
     */
    contentGroups?: Array<ContentGroup>;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfPickWaveDetail
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfPickWaveDetail
     */
    maxShipments?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfPickWaveDetail
     */
    pickType?: EntityModelOfPickWaveDetailPickTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfPickWaveDetail
     */
    pickWaveId?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfPickWaveDetail
     */
    pickWaveNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfPickWaveDetail
     */
    pickWaveStatus?: EntityModelOfPickWaveDetailPickWaveStatusEnum;
    /**
     * 
     * @type {Array<number>}
     * @memberof EntityModelOfPickWaveDetail
     */
    shipmentNumbers?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfPickWaveDetail
     */
    shipmentType?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfPickWaveDetail
     */
    tenantId?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfPickWaveDetail
     */
    userDisplayName?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfPickWaveDetail
     */
    userId?: string;
}


/**
 * @export
 */
export const EntityModelOfPickWaveDetailPickTypeEnum = {
    Normal: 'NORMAL',
    Single: 'SINGLE',
    Multiple: 'MULTIPLE'
} as const;
export type EntityModelOfPickWaveDetailPickTypeEnum = typeof EntityModelOfPickWaveDetailPickTypeEnum[keyof typeof EntityModelOfPickWaveDetailPickTypeEnum];

/**
 * @export
 */
export const EntityModelOfPickWaveDetailPickWaveStatusEnum = {
    Error: 'ERROR',
    Pending: 'PENDING',
    InProgress: 'IN_PROGRESS',
    Closed: 'CLOSED',
    PendingRecovery: 'PENDING_RECOVERY'
} as const;
export type EntityModelOfPickWaveDetailPickWaveStatusEnum = typeof EntityModelOfPickWaveDetailPickWaveStatusEnum[keyof typeof EntityModelOfPickWaveDetailPickWaveStatusEnum];

/**
 * 
 * @export
 * @interface EntityModelOfRateShoppingResponseDto
 */
export interface EntityModelOfRateShoppingResponseDto {
    /**
     * 
     * @type {Links}
     * @memberof EntityModelOfRateShoppingResponseDto
     */
    links?: Links;
    /**
     * 
     * @type {RateShoppingMetadataDto}
     * @memberof EntityModelOfRateShoppingResponseDto
     */
    metadata?: RateShoppingMetadataDto;
    /**
     * List of shipping rates from carriers
     * @type {Array<ShippingRateDto>}
     * @memberof EntityModelOfRateShoppingResponseDto
     */
    rates: Array<ShippingRateDto>;
    /**
     * 
     * @type {RecommendedRateDto}
     * @memberof EntityModelOfRateShoppingResponseDto
     */
    recommendedRate: RecommendedRateDto;
}
/**
 * 
 * @export
 * @interface EntityModelOfRenderedContent
 */
export interface EntityModelOfRenderedContent {
    /**
     * 
     * @type {Links}
     * @memberof EntityModelOfRenderedContent
     */
    links?: Links;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfRenderedContent
     */
    content?: string;
}
/**
 * 
 * @export
 * @interface EntityModelOfShipment
 */
export interface EntityModelOfShipment {
    /**
     * 
     * @type {Links}
     * @memberof EntityModelOfShipment
     */
    links?: Links;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    acceptedDate?: string;
    /**
     * 
     * @type {FulfillmentAPIContact}
     * @memberof EntityModelOfShipment
     */
    alternateContact?: FulfillmentAPIContact;
    /**
     * 
     * @type {FulfillmentAPIAppeasementReason}
     * @memberof EntityModelOfShipment
     */
    appeasementReason?: FulfillmentAPIAppeasementReason;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    assignedLocationCode?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof EntityModelOfShipment
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIAuditInfo}
     * @memberof EntityModelOfShipment
     */
    auditInfo?: FulfillmentAPIAuditInfo;
    /**
     * 
     * @type {Array<CanceledItem>}
     * @memberof EntityModelOfShipment
     */
    canceledItems?: Array<CanceledItem>;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    carrier?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    cartId?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIChangeMessage>}
     * @memberof EntityModelOfShipment
     */
    changeMessages?: Array<FulfillmentAPIChangeMessage>;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    channel?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof EntityModelOfShipment
     */
    childShipmentNumbers?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    currencyCode?: string;
    /**
     * Run currently mutating this shipment (== Kibo.Jobs jobId); null when idle (FR-059d)
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    currentRunId?: string;
    /**
     * 
     * @type {FulfillmentAPICustomer}
     * @memberof EntityModelOfShipment
     */
    customer?: FulfillmentAPICustomer;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    customerAccountId?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    customerAddressId?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    customerTaxId?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof EntityModelOfShipment
     */
    data?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIDeliveryWindow}
     * @memberof EntityModelOfShipment
     */
    deliveryWindow?: FulfillmentAPIDeliveryWindow;
    /**
     * 
     * @type {FulfillmentAPIDestination}
     * @memberof EntityModelOfShipment
     */
    destination?: FulfillmentAPIDestination;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    dutyAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    dutyTotal?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    expectedDeliveryDate?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    externalOrderId?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    fulfillmentDate?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    fulfillmentPriority?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    fulfillmentStatus?: EntityModelOfShipmentFulfillmentStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    futureDate?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    groupId?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    handlingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    handlingSubtotal?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    handlingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    handlingTaxTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    handlingTotal?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    holdReleaseDate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EntityModelOfShipment
     */
    isAutoAssigned?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EntityModelOfShipment
     */
    isCrossDockEligible?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EntityModelOfShipment
     */
    isDropship?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EntityModelOfShipment
     */
    isExpress?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EntityModelOfShipment
     */
    isFlatRateShipping?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EntityModelOfShipment
     */
    isHistoricalImport?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EntityModelOfShipment
     */
    isImmutable?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EntityModelOfShipment
     */
    isOptInForSms?: boolean;
    /**
     * 
     * @type {Array<FilterOptionDtoResultItem>}
     * @memberof EntityModelOfShipment
     */
    items?: Array<FilterOptionDtoResultItem>;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    lastCancellationDate?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    lineItemSubtotal?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    lineItemTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    lineItemTaxTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    lineItemTotal?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    lowestComplianceLevel?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    masterTrackingNumber?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    minutesSinceOnWorkflowStep?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    minutesSinceOrdered?: number;
    /**
     * 
     * @type {MutabilityInfo}
     * @memberof EntityModelOfShipment
     */
    mutabilityInfo?: MutabilityInfo;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    orderId?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    orderNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    orderSubmitDate?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    orderType?: EntityModelOfShipmentOrderTypeEnum;
    /**
     * First expectedDeliveryDate this shipment ever carried (write-once, never cleared); non-null marks that the shipment has, at some point, had an EDD. Server-managed (FR-060); ignored on inbound writes.
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    originalEdd?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    originalShipmentNumber?: number;
    /**
     * FR-014/FR-016 multi-package-receiving eligibility signal. Only present when the MULTI_PACKAGE_RECEIVING_FOR_TRANSFER_SHIPMENTS tenant attribute is enabled and the transfer shipment has at least one package; null otherwise so tenants without the attribute enabled see no shape change (US2-AC2).
     * @type {boolean}
     * @memberof EntityModelOfShipment
     */
    packageReceivingEligible?: boolean;
    /**
     * 
     * @type {Array<FulfillmentAPIPackage>}
     * @memberof EntityModelOfShipment
     */
    packages?: Array<FulfillmentAPIPackage>;
    /**
     * US4 progress display: packagesTotalCount minus packagesReceivedCount. Null when not eligible/flag disabled.
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    packagesPendingCount?: number;
    /**
     * US4 progress display: count of packages with receiptStatus=RECEIVED. Null when not eligible/flag disabled.
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    packagesReceivedCount?: number;
    /**
     * US4 progress display: total expected package count. Null when not eligible/flag disabled.
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    packagesTotalCount?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    parentCheckoutNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    parentShipmentNumber?: number;
    /**
     * 
     * @type {PaymentInvoice}
     * @memberof EntityModelOfShipment
     */
    paymentInvoice?: PaymentInvoice;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    pickStatus?: EntityModelOfShipmentPickStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    pickType?: EntityModelOfShipmentPickTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    pickWaveNumber?: number;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof EntityModelOfShipment
     */
    pickupInfo?: { [key: string]: object; };
    /**
     * 
     * @type {PriorityInfo}
     * @memberof EntityModelOfShipment
     */
    priorityInfo?: PriorityInfo;
    /**
     * 
     * @type {boolean}
     * @memberof EntityModelOfShipment
     */
    readyForPickup?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    readyForPickupDate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EntityModelOfShipment
     */
    readyToCapture?: boolean;
    /**
     * 
     * @type {Array<ReassignedItem>}
     * @memberof EntityModelOfShipment
     */
    reassignedItems?: Array<ReassignedItem>;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    receivedDate?: string;
    /**
     * 
     * @type {Array<RejectedItem>}
     * @memberof EntityModelOfShipment
     */
    rejectedItems?: Array<RejectedItem>;
    /**
     * Capped per-run history of operations that created/mutated this shipment (FR-059d)
     * @type {Array<RunInfo>}
     * @memberof EntityModelOfShipment
     */
    runInfo?: Array<RunInfo>;
    /**
     * 
     * @type {boolean}
     * @memberof EntityModelOfShipment
     */
    sentCustomerAtStoreNotification?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EntityModelOfShipment
     */
    sentCustomerInTransitNotification?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    shipDate?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    shipmentAdjustment?: number;
    /**
     * 
     * @type {Array<FulfillmentAPIShipmentAttribute>}
     * @memberof EntityModelOfShipment
     */
    shipmentAttributes?: Array<FulfillmentAPIShipmentAttribute>;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    shipmentConsolidationId?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    shipmentGroup?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIShipmentNote>}
     * @memberof EntityModelOfShipment
     */
    shipmentNotes?: Array<FulfillmentAPIShipmentNote>;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    shipmentNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    shipmentStatus?: EntityModelOfShipmentShipmentStatusEnum;
    /**
     * 
     * @type {FulfillmentAPIShipmentStatusReason}
     * @memberof EntityModelOfShipment
     */
    shipmentStatusReason?: FulfillmentAPIShipmentStatusReason;
    /**
     * Shipment type code
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    shipmentType: EntityModelOfShipmentShipmentTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    shippingAdjustment?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    shippingMethodCode?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    shippingMethodName?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    shippingSubtotal?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    shippingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    shippingTaxTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    shippingTotal?: number;
    /**
     * 
     * @type {FulfillmentAPIShopperNotes}
     * @memberof EntityModelOfShipment
     */
    shopperNotes?: FulfillmentAPIShopperNotes;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    siteId?: number;
    /**
     * 
     * @type {Array<Sla>}
     * @memberof EntityModelOfShipment
     */
    slas?: Array<Sla>;
    /**
     * 
     * @type {Array<FulfillmentAPISubstitutedItem>}
     * @memberof EntityModelOfShipment
     */
    substitutedItems?: Array<FulfillmentAPISubstitutedItem>;
    /**
     * 
     * @type {object}
     * @memberof EntityModelOfShipment
     */
    taxData?: object;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    tenantId?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    total?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof EntityModelOfShipment
     */
    transferShipmentNumbers?: Array<number>;
    /**
     * 
     * @type {Array<TransferredItem>}
     * @memberof EntityModelOfShipment
     */
    transferredItems?: Array<TransferredItem>;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    transitTime?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    workflowProcessContainerId?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    workflowProcessId?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    workflowProcessVersion?: string;
    /**
     * 
     * @type {FulfillmentAPIWorkflowState}
     * @memberof EntityModelOfShipment
     */
    workflowState?: FulfillmentAPIWorkflowState;
}


/**
 * @export
 */
export const EntityModelOfShipmentFulfillmentStatusEnum = {
    NotFulfilled: 'NotFulfilled',
    Fulfilled: 'Fulfilled'
} as const;
export type EntityModelOfShipmentFulfillmentStatusEnum = typeof EntityModelOfShipmentFulfillmentStatusEnum[keyof typeof EntityModelOfShipmentFulfillmentStatusEnum];

/**
 * @export
 */
export const EntityModelOfShipmentOrderTypeEnum = {
    Offline: 'Offline',
    Online: 'Online'
} as const;
export type EntityModelOfShipmentOrderTypeEnum = typeof EntityModelOfShipmentOrderTypeEnum[keyof typeof EntityModelOfShipmentOrderTypeEnum];

/**
 * @export
 */
export const EntityModelOfShipmentPickStatusEnum = {
    Available: 'AVAILABLE',
    InWave: 'IN_WAVE',
    Picked: 'PICKED',
    Transfer: 'TRANSFER',
    Complete: 'COMPLETE'
} as const;
export type EntityModelOfShipmentPickStatusEnum = typeof EntityModelOfShipmentPickStatusEnum[keyof typeof EntityModelOfShipmentPickStatusEnum];

/**
 * @export
 */
export const EntityModelOfShipmentPickTypeEnum = {
    Normal: 'NORMAL',
    Single: 'SINGLE',
    Multiple: 'MULTIPLE'
} as const;
export type EntityModelOfShipmentPickTypeEnum = typeof EntityModelOfShipmentPickTypeEnum[keyof typeof EntityModelOfShipmentPickTypeEnum];

/**
 * @export
 */
export const EntityModelOfShipmentShipmentStatusEnum = {
    Ready: 'READY',
    Reassigned: 'REASSIGNED',
    Backorder: 'BACKORDER',
    Canceled: 'CANCELED',
    Fulfilled: 'FULFILLED',
    CustomerCare: 'CUSTOMER_CARE',
    Deleted: 'DELETED',
    Future: 'FUTURE'
} as const;
export type EntityModelOfShipmentShipmentStatusEnum = typeof EntityModelOfShipmentShipmentStatusEnum[keyof typeof EntityModelOfShipmentShipmentStatusEnum];

/**
 * @export
 */
export const EntityModelOfShipmentShipmentTypeEnum = {
    Sth: 'STH',
    Bopis: 'BOPIS',
    BopisCurbside: 'BOPIS_Curbside',
    Transfer: 'Transfer',
    Curbside: 'Curbside',
    Digital: 'Digital',
    Delivery: 'Delivery'
} as const;
export type EntityModelOfShipmentShipmentTypeEnum = typeof EntityModelOfShipmentShipmentTypeEnum[keyof typeof EntityModelOfShipmentShipmentTypeEnum];

/**
 * 
 * @export
 * @interface EntityModelOfWorkflowProcess
 */
export interface EntityModelOfWorkflowProcess {
    /**
     * 
     * @type {Links}
     * @memberof EntityModelOfWorkflowProcess
     */
    links?: Links;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof EntityModelOfWorkflowProcess
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfWorkflowProcess
     */
    containerAlias?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfWorkflowProcess
     */
    containerId?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfWorkflowProcess
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfWorkflowProcess
     */
    name?: string;
    /**
     * 
     * @type {Array<TaskDefinition>}
     * @memberof EntityModelOfWorkflowProcess
     */
    tasks?: Array<TaskDefinition>;
    /**
     * 
     * @type {Array<WorkflowProcessVariable>}
     * @memberof EntityModelOfWorkflowProcess
     */
    variables?: Array<WorkflowProcessVariable>;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfWorkflowProcess
     */
    version?: string;
}
/**
 * 
 * @export
 * @interface EstimatedDeliveryDateUpdateRequest
 */
export interface EstimatedDeliveryDateUpdateRequest {
    /**
     * 
     * @type {string}
     * @memberof EstimatedDeliveryDateUpdateRequest
     */
    estimatedDeliveryDate?: string;
}
/**
 * 
 * @export
 * @interface FilterOptionDtoResultItem
 */
export interface FilterOptionDtoResultItem {
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    actualPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    allocatedQuantity?: number;
    /**
     * 
     * @type {boolean}
     * @memberof FilterOptionDtoResultItem
     */
    allowsBackOrder?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FilterOptionDtoResultItem
     */
    allowsFutureAllocate?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FilterOptionDtoResultItem
     */
    allowsSubstitution?: boolean;
    /**
     * 
     * @type {FulfillmentAPIAppeasementReason}
     * @memberof FilterOptionDtoResultItem
     */
    appeasementReason?: FulfillmentAPIAppeasementReason;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FilterOptionDtoResultItem
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIAuditInfo}
     * @memberof FilterOptionDtoResultItem
     */
    auditInfo?: FulfillmentAPIAuditInfo;
    /**
     * 
     * @type {boolean}
     * @memberof FilterOptionDtoResultItem
     */
    autoSubstitution?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FilterOptionDtoResultItem
     */
    backorderReleaseDate?: string;
    /**
     * 
     * @type {FulfillmentAPIBundleInfo}
     * @memberof FilterOptionDtoResultItem
     */
    bundleInfo?: FulfillmentAPIBundleInfo;
    /**
     * 
     * @type {string}
     * @memberof FilterOptionDtoResultItem
     */
    cartItemId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof FilterOptionDtoResultItem
     */
    childItemIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof FilterOptionDtoResultItem
     */
    condition?: string;
    /**
     * 
     * @type {string}
     * @memberof FilterOptionDtoResultItem
     */
    creditCurrencyCode?: string;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    creditValue?: number;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FilterOptionDtoResultItem
     */
    data?: { [key: string]: object; };
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    duty?: number;
    /**
     * 
     * @type {string}
     * @memberof FilterOptionDtoResultItem
     */
    expectedDeliveryDate?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIFulfillmentField>}
     * @memberof FilterOptionDtoResultItem
     */
    fulfillmentFields?: Array<FulfillmentAPIFulfillmentField>;
    /**
     * 
     * @type {Array<FulfillmentAPIGiftCard>}
     * @memberof FilterOptionDtoResultItem
     */
    giftCards?: Array<FulfillmentAPIGiftCard>;
    /**
     * 
     * @type {string}
     * @memberof FilterOptionDtoResultItem
     */
    giftMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof FilterOptionDtoResultItem
     */
    goodsType?: FilterOptionDtoResultItemGoodsTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    handling?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    handlingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    handlingTax?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    height?: number;
    /**
     * 
     * @type {string}
     * @memberof FilterOptionDtoResultItem
     */
    imageUrl?: string;
    /**
     * 
     * @type {Array<InventoryAllocation>}
     * @memberof FilterOptionDtoResultItem
     */
    inventoryAllocations?: Array<InventoryAllocation>;
    /**
     * 
     * @type {Array<InventoryTag>}
     * @memberof FilterOptionDtoResultItem
     */
    inventoryTags?: Array<InventoryTag>;
    /**
     * 
     * @type {boolean}
     * @memberof FilterOptionDtoResultItem
     */
    isAssemblyRequired?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FilterOptionDtoResultItem
     */
    isGift?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FilterOptionDtoResultItem
     */
    isPackagedStandAlone?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FilterOptionDtoResultItem
     */
    isReservedInventory?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FilterOptionDtoResultItem
     */
    isTaxable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    itemDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    itemTax?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    length?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    lineId?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    lineItemAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    lineItemCost?: number;
    /**
     * 
     * @type {string}
     * @memberof FilterOptionDtoResultItem
     */
    locatorName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FilterOptionDtoResultItem
     */
    manageStock?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FilterOptionDtoResultItem
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof FilterOptionDtoResultItem
     */
    optionAttributeFQN?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIProductOption>}
     * @memberof FilterOptionDtoResultItem
     */
    options?: Array<FulfillmentAPIProductOption>;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    originalLineId?: number;
    /**
     * 
     * @type {string}
     * @memberof FilterOptionDtoResultItem
     */
    originalOrderItemId?: string;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    originalQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    overridePrice?: number;
    /**
     * 
     * @type {string}
     * @memberof FilterOptionDtoResultItem
     */
    parentItemId?: string;
    /**
     * 
     * @type {string}
     * @memberof FilterOptionDtoResultItem
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof FilterOptionDtoResultItem
     */
    priceMode?: FilterOptionDtoResultItemPriceModeEnum;
    /**
     * 
     * @type {string}
     * @memberof FilterOptionDtoResultItem
     */
    productCode?: string;
    /**
     * 
     * @type {string}
     * @memberof FilterOptionDtoResultItem
     */
    purchaseLocation?: string;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    quantity?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    readyForPickupQuantity?: number;
    /**
     * 
     * @type {FulfillmentAPIReturnRuleInfo}
     * @memberof FilterOptionDtoResultItem
     */
    returnRuleInfo?: FulfillmentAPIReturnRuleInfo;
    /**
     * 
     * @type {string}
     * @memberof FilterOptionDtoResultItem
     */
    serialNumber?: string;
    /**
     * 
     * @type {Array<ShipmentItemAttribute>}
     * @memberof FilterOptionDtoResultItem
     */
    shipmentItemAttributes?: Array<ShipmentItemAttribute>;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    shipping?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    shippingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    shippingTax?: number;
    /**
     * 
     * @type {string}
     * @memberof FilterOptionDtoResultItem
     */
    sku?: string;
    /**
     * 
     * @type {string}
     * @memberof FilterOptionDtoResultItem
     */
    stockValidationStatus?: string;
    /**
     * 
     * @type {FulfillmentAPISubstituteInfo}
     * @memberof FilterOptionDtoResultItem
     */
    substituteInfo?: FulfillmentAPISubstituteInfo;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    substituteQuantity?: number;
    /**
     * 
     * @type {string}
     * @memberof FilterOptionDtoResultItem
     */
    substitutionType?: FilterOptionDtoResultItemSubstitutionTypeEnum;
    /**
     * 
     * @type {object}
     * @memberof FilterOptionDtoResultItem
     */
    taxData?: object;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    taxableHandling?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    taxableLineItemCost?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    taxableShipping?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    timeFenceDays?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    transferQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    trueTransferQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    unitPrice?: number;
    /**
     * 
     * @type {string}
     * @memberof FilterOptionDtoResultItem
     */
    upc?: string;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    validatedQuantity?: number;
    /**
     * 
     * @type {string}
     * @memberof FilterOptionDtoResultItem
     */
    variationProductCode?: string;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    weight?: number;
    /**
     * 
     * @type {string}
     * @memberof FilterOptionDtoResultItem
     */
    weightUnit?: string;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    weightedDutyAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    weightedHandlingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    weightedHandlingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    weightedLineItemTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    weightedOrderHandlingFee?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    weightedOrderHandlingFeeDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    weightedOrderHandlingFeeTax?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    weightedShipmentAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    weightedShippingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    weightedShippingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    width?: number;
}


/**
 * @export
 */
export const FilterOptionDtoResultItemGoodsTypeEnum = {
    Physical: 'Physical',
    Digital: 'Digital',
    DigitalCredit: 'DigitalCredit',
    DigitalGiftCard: 'DigitalGiftCard',
    Service: 'Service'
} as const;
export type FilterOptionDtoResultItemGoodsTypeEnum = typeof FilterOptionDtoResultItemGoodsTypeEnum[keyof typeof FilterOptionDtoResultItemGoodsTypeEnum];

/**
 * @export
 */
export const FilterOptionDtoResultItemPriceModeEnum = {
    Internal: 'Internal',
    External: 'External'
} as const;
export type FilterOptionDtoResultItemPriceModeEnum = typeof FilterOptionDtoResultItemPriceModeEnum[keyof typeof FilterOptionDtoResultItemPriceModeEnum];

/**
 * @export
 */
export const FilterOptionDtoResultItemSubstitutionTypeEnum = {
    PreFulfillment: 'PRE_FULFILLMENT',
    AtFulfillment: 'AT_FULFILLMENT'
} as const;
export type FilterOptionDtoResultItemSubstitutionTypeEnum = typeof FilterOptionDtoResultItemSubstitutionTypeEnum[keyof typeof FilterOptionDtoResultItemSubstitutionTypeEnum];

/**
 * 
 * @export
 * @interface FilterOptionOfLocationSummaryDetail
 */
export interface FilterOptionOfLocationSummaryDetail {
    /**
     * 
     * @type {Array<LocationSummaryDetail>}
     * @memberof FilterOptionOfLocationSummaryDetail
     */
    items?: Array<LocationSummaryDetail>;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionOfLocationSummaryDetail
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionOfLocationSummaryDetail
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionOfLocationSummaryDetail
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionOfLocationSummaryDetail
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface FilterOptionOfResultItem
 */
export interface FilterOptionOfResultItem {
    /**
     * 
     * @type {Array<ResultItem>}
     * @memberof FilterOptionOfResultItem
     */
    items?: Array<ResultItem>;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionOfResultItem
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionOfResultItem
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionOfResultItem
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionOfResultItem
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface FilterOptionOfShipmentTypeSummary
 */
export interface FilterOptionOfShipmentTypeSummary {
    /**
     * 
     * @type {Array<ShipmentTypeSummary>}
     * @memberof FilterOptionOfShipmentTypeSummary
     */
    items?: Array<ShipmentTypeSummary>;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionOfShipmentTypeSummary
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionOfShipmentTypeSummary
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionOfShipmentTypeSummary
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionOfShipmentTypeSummary
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface FilterOptionOfSlaSummaryDto
 */
export interface FilterOptionOfSlaSummaryDto {
    /**
     * 
     * @type {Array<SlaSummaryDto>}
     * @memberof FilterOptionOfSlaSummaryDto
     */
    items?: Array<SlaSummaryDto>;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionOfSlaSummaryDto
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionOfSlaSummaryDto
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionOfSlaSummaryDto
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionOfSlaSummaryDto
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface FilterOptions
 */
export interface FilterOptions {
    /**
     * 
     * @type {FilterOptionOfLocationSummaryDetail}
     * @memberof FilterOptions
     */
    locations?: FilterOptionOfLocationSummaryDetail;
    /**
     * 
     * @type {FilterOptionOfShipmentTypeSummary}
     * @memberof FilterOptions
     */
    shipmentTypes?: FilterOptionOfShipmentTypeSummary;
    /**
     * 
     * @type {FilterOptionOfResultItem}
     * @memberof FilterOptions
     */
    slaComplianceLevels?: FilterOptionOfResultItem;
    /**
     * 
     * @type {FilterOptionOfSlaSummaryDto}
     * @memberof FilterOptions
     */
    slas?: FilterOptionOfSlaSummaryDto;
    /**
     * 
     * @type {FilterOptionOfResultItem}
     * @memberof FilterOptions
     */
    workflowTasks?: FilterOptionOfResultItem;
}
/**
 * 
 * @export
 * @interface FilteredShipments
 */
export interface FilteredShipments {
    /**
     * 
     * @type {Array<FulfillmentAPIShipment>}
     * @memberof FilteredShipments
     */
    items?: Array<FulfillmentAPIShipment>;
    /**
     * 
     * @type {number}
     * @memberof FilteredShipments
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof FilteredShipments
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof FilteredShipments
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof FilteredShipments
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIAddress
 */
export interface FulfillmentAPIAddress {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIAddress
     */
    address1?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIAddress
     */
    address2?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIAddress
     */
    address3?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIAddress
     */
    address4?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIAddress
     */
    addressType?: FulfillmentAPIAddressAddressTypeEnum;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentAPIAddress
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIAddress
     */
    cityOrTown?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIAddress
     */
    countryCode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIAddress
     */
    isValidated?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIAddress
     */
    latitude?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIAddress
     */
    longitude?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIAddress
     */
    postalOrZipCode?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIAddress
     */
    stateOrProvince?: string;
}


/**
 * @export
 */
export const FulfillmentAPIAddressAddressTypeEnum = {
    Commercial: 'Commercial',
    Residential: 'Residential'
} as const;
export type FulfillmentAPIAddressAddressTypeEnum = typeof FulfillmentAPIAddressAddressTypeEnum[keyof typeof FulfillmentAPIAddressAddressTypeEnum];

/**
 * 
 * @export
 * @interface FulfillmentAPIAppeasementReason
 */
export interface FulfillmentAPIAppeasementReason {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIAppeasementReason
     */
    moreInfo?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIAppeasementReason
     */
    reasonCode?: string;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIAttribute
 */
export interface FulfillmentAPIAttribute {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIAttribute
     */
    adminName?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIAttribute
     */
    attributeCode: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIAttribute
     */
    attributeFQN?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIAttributeMetadataItem>}
     * @memberof FulfillmentAPIAttribute
     */
    attributeMetadata?: Array<FulfillmentAPIAttributeMetadataItem>;
    /**
     * 
     * @type {FulfillmentAPICoreApiContractsAuditInfo}
     * @memberof FulfillmentAPIAttribute
     */
    auditInfo?: FulfillmentAPICoreApiContractsAuditInfo;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIAttribute
     */
    availableForDiscounts?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIAttribute
     */
    availableForOrderRouting?: boolean;
    /**
     * 
     * @type {FulfillmentAPIAttributeLocalizedContent}
     * @memberof FulfillmentAPIAttribute
     */
    content?: FulfillmentAPIAttributeLocalizedContent;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIAttribute
     */
    dataType?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIAttribute
     */
    displayGroup: string;
    /**
     * 
     * @type {Array<FulfillmentAPIAttributeEntityConfig>}
     * @memberof FulfillmentAPIAttribute
     */
    entityConfigs?: Array<FulfillmentAPIAttributeEntityConfig>;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIAttribute
     */
    id?: number;
    /**
     * 
     * @type {Array<FulfillmentAPIAttributeInheritanceRule>}
     * @memberof FulfillmentAPIAttribute
     */
    inheritanceRules?: Array<FulfillmentAPIAttributeInheritanceRule>;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIAttribute
     */
    inputType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIAttribute
     */
    isActive?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIAttribute
     */
    isMultiValued?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIAttribute
     */
    isReadOnly?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIAttribute
     */
    isRequired?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIAttribute
     */
    isVisible?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIAttribute
     */
    namespace?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIAttribute
     */
    order?: number;
    /**
     * 
     * @type {FulfillmentAPIAttributeValidation}
     * @memberof FulfillmentAPIAttribute
     */
    validation?: FulfillmentAPIAttributeValidation;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIAttribute
     */
    valueType: string;
    /**
     * 
     * @type {Array<FulfillmentAPIAttributeVocabularyValue>}
     * @memberof FulfillmentAPIAttribute
     */
    vocabularyValues?: Array<FulfillmentAPIAttributeVocabularyValue>;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIAttributeCollection
 */
export interface FulfillmentAPIAttributeCollection {
    /**
     * 
     * @type {Array<FulfillmentAPIAttribute>}
     * @memberof FulfillmentAPIAttributeCollection
     */
    items?: Array<FulfillmentAPIAttribute>;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIAttributeCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIAttributeCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIAttributeCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIAttributeCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIAttributeEntityConfig
 */
export interface FulfillmentAPIAttributeEntityConfig {
    /**
     * 
     * @type {FulfillmentAPICoreAuditInfo}
     * @memberof FulfillmentAPIAttributeEntityConfig
     */
    auditInfo?: FulfillmentAPICoreAuditInfo;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIAttributeEntityConfig
     */
    editable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIAttributeEntityConfig
     */
    entityType?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIAttributeEntityConfig
     */
    id?: number;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIAttributeInheritanceRule
 */
export interface FulfillmentAPIAttributeInheritanceRule {
    /**
     * 
     * @type {FulfillmentAPICoreAuditInfo}
     * @memberof FulfillmentAPIAttributeInheritanceRule
     */
    auditInfo?: FulfillmentAPICoreAuditInfo;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIAttributeInheritanceRule
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIAttributeInheritanceRule
     */
    inheritanceMode?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIAttributeInheritanceRule
     */
    sourceEntityType?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIAttributeInheritanceRule
     */
    targetEntityType?: string;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIAttributeLocalizedContent
 */
export interface FulfillmentAPIAttributeLocalizedContent {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIAttributeLocalizedContent
     */
    localeCode?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIAttributeLocalizedContent
     */
    value?: string;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIAttributeMetadataItem
 */
export interface FulfillmentAPIAttributeMetadataItem {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIAttributeMetadataItem
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIAttributeMetadataItem
     */
    value: string;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIAttributeValidation
 */
export interface FulfillmentAPIAttributeValidation {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIAttributeValidation
     */
    maxDateTime?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIAttributeValidation
     */
    maxNumericValue?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIAttributeValidation
     */
    maxStringLength?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIAttributeValidation
     */
    minDateTime?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIAttributeValidation
     */
    minNumericValue?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIAttributeValidation
     */
    minStringLength?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIAttributeValidation
     */
    regularExpression?: string;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIAttributeValueLocalizedContent
 */
export interface FulfillmentAPIAttributeValueLocalizedContent {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIAttributeValueLocalizedContent
     */
    localeCode: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIAttributeValueLocalizedContent
     */
    value: string;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIAttributeVocabularyValue
 */
export interface FulfillmentAPIAttributeVocabularyValue {
    /**
     * 
     * @type {FulfillmentAPIAttributeValueLocalizedContent}
     * @memberof FulfillmentAPIAttributeVocabularyValue
     */
    content?: FulfillmentAPIAttributeValueLocalizedContent;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIAttributeVocabularyValue
     */
    isHidden?: boolean;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIAttributeVocabularyValue
     */
    sequence?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIAttributeVocabularyValue
     */
    value: string;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIAuditInfo
 */
export interface FulfillmentAPIAuditInfo {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIAuditInfo
     */
    createBy?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIAuditInfo
     */
    createDate?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIAuditInfo
     */
    updateBy?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIAuditInfo
     */
    updateDate?: string;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIBundleInfo
 */
export interface FulfillmentAPIBundleInfo {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentAPIBundleInfo
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIBundleInfo
     */
    imageUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIBundleInfo
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIBundleInfo
     */
    productCode?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIBundleInfo
     */
    quantity?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIBundleInfo
     */
    unitPrice?: number;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIBundledProduct
 */
export interface FulfillmentAPIBundledProduct {
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIBundledProduct
     */
    availableInventory?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIBundledProduct
     */
    imageUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIBundledProduct
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIBundledProduct
     */
    productCode?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIBundledProduct
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIBundledProduct
     */
    variationProductCode?: string;
}
/**
 * 
 * @export
 * @interface FulfillmentAPICanceledReason
 */
export interface FulfillmentAPICanceledReason {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPICanceledReason
     */
    moreInfo?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPICanceledReason
     */
    reasonCode?: string;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIChangeMessage
 */
export interface FulfillmentAPIChangeMessage {
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIChangeMessage
     */
    amount?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIChangeMessage
     */
    appId?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIChangeMessage
     */
    appKey?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIChangeMessage
     */
    appName?: string;
    /**
     * 
     * @type {FulfillmentAPIAppeasementReason}
     * @memberof FulfillmentAPIChangeMessage
     */
    appeasementReason?: FulfillmentAPIAppeasementReason;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentAPIChangeMessage
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIChangeMessage
     */
    changeMessageId?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIChangeMessage
     */
    correlationId?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIChangeMessage
     */
    createdDate?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIChangeMessage
     */
    identifier?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIChangeMessage
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIChangeMessage
     */
    metadata?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIChangeMessage
     */
    newValue?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIChangeMessage
     */
    oldValue?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIChangeMessage
     */
    subject?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIChangeMessage
     */
    subjectType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIChangeMessage
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIChangeMessage
     */
    userDisplayName?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIChangeMessage
     */
    userFirstName?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIChangeMessage
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIChangeMessage
     */
    userLastName?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIChangeMessage
     */
    verb?: string;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIContact
 */
export interface FulfillmentAPIContact {
    /**
     * 
     * @type {FulfillmentAPIAddress}
     * @memberof FulfillmentAPIContact
     */
    address?: FulfillmentAPIAddress;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentAPIContact
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIContact
     */
    companyOrOrganization?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIContact
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIContact
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIContact
     */
    fullName?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIContact
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIContact
     */
    lastNameOrSurname?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIContact
     */
    middleNameOrInitial?: string;
    /**
     * 
     * @type {FulfillmentAPIPhone}
     * @memberof FulfillmentAPIContact
     */
    phoneNumbers?: FulfillmentAPIPhone;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIContact
     */
    shortFullName?: string;
}
/**
 * 
 * @export
 * @interface FulfillmentAPICoreApiContractsAuditInfo
 */
export interface FulfillmentAPICoreApiContractsAuditInfo {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPICoreApiContractsAuditInfo
     */
    createBy?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPICoreApiContractsAuditInfo
     */
    createDate?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPICoreApiContractsAuditInfo
     */
    updateBy?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPICoreApiContractsAuditInfo
     */
    updateDate?: string;
}
/**
 * 
 * @export
 * @interface FulfillmentAPICoreAuditInfo
 */
export interface FulfillmentAPICoreAuditInfo {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPICoreAuditInfo
     */
    createBy?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPICoreAuditInfo
     */
    createDate?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPICoreAuditInfo
     */
    updateBy?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPICoreAuditInfo
     */
    updateDate?: string;
}
/**
 * 
 * @export
 * @interface FulfillmentAPICustomer
 */
export interface FulfillmentAPICustomer {
    /**
     * 
     * @type {FulfillmentAPIContact}
     * @memberof FulfillmentAPICustomer
     */
    customerContact?: FulfillmentAPIContact;
    /**
     * 
     * @type {object}
     * @memberof FulfillmentAPICustomer
     */
    data?: object;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPICustomer
     */
    isDestinationCommercial?: boolean;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIDeliveryWindow
 */
export interface FulfillmentAPIDeliveryWindow {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIDeliveryWindow
     */
    endTime?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIDeliveryWindow
     */
    startTime?: string;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIDestination
 */
export interface FulfillmentAPIDestination {
    /**
     * 
     * @type {object}
     * @memberof FulfillmentAPIDestination
     */
    data?: object;
    /**
     * 
     * @type {FulfillmentAPIContact}
     * @memberof FulfillmentAPIDestination
     */
    destinationContact?: FulfillmentAPIContact;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIDestination
     */
    isDestinationCommercial?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIDestination
     */
    locationCode?: string;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIFulfillmentField
 */
export interface FulfillmentAPIFulfillmentField {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIFulfillmentField
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIFulfillmentField
     */
    required?: boolean;
    /**
     * 
     * @type {object}
     * @memberof FulfillmentAPIFulfillmentField
     */
    userEnteredValue?: object;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIGiftCard
 */
export interface FulfillmentAPIGiftCard {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIGiftCard
     */
    activationDate?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIGiftCard
     */
    cardNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIGiftCard
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIGiftCard
     */
    creditType?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIGiftCard
     */
    creditValue?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIGiftCard
     */
    currencyCode?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIGiftCard
     */
    currentBalance?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIGiftCard
     */
    customerId?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIGiftCard
     */
    expirationDate?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIGiftCard
     */
    initialBalance?: number;
}
/**
 * 
 * @export
 * @interface FulfillmentAPILink
 */
export interface FulfillmentAPILink {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPILink
     */
    deprecation?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPILink
     */
    href?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPILink
     */
    hreflang?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPILink
     */
    media?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPILink
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPILink
     */
    profile?: string;
    /**
     * 
     * @type {object}
     * @memberof FulfillmentAPILink
     */
    rel?: object;
    /**
     * 
     * @type {UriTemplate}
     * @memberof FulfillmentAPILink
     */
    template?: UriTemplate;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPILink
     */
    templated?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPILink
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPILink
     */
    type?: string;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIMeasurement
 */
export interface FulfillmentAPIMeasurement {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentAPIMeasurement
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIMeasurement
     */
    unit?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIMeasurement
     */
    value?: number;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIPackage
 */
export interface FulfillmentAPIPackage {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentAPIPackage
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIAuditInfo}
     * @memberof FulfillmentAPIPackage
     */
    auditInfo?: FulfillmentAPIAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIPackage
     */
    carrier?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIPackage
     */
    carrierName?: string;
    /**
     * 
     * @type {CartonizationDto}
     * @memberof FulfillmentAPIPackage
     */
    cartonization?: CartonizationDto;
    /**
     * Whether every line item's received+substituted quantity matched its expected quantity for this package. Null until received or when not eligible/flag disabled.
     * @type {boolean}
     * @memberof FulfillmentAPIPackage
     */
    fullyMatched?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIPackage
     */
    fxcbDocumentsUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIPackage
     */
    fxcbPackNotificationId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIPackage
     */
    hasLabel?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIPackage
     */
    integratorId?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIPackage
     */
    labelFormat?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIPackage
     */
    manifestId?: string;
    /**
     * 
     * @type {FulfillmentAPIPackageMeasurements}
     * @memberof FulfillmentAPIPackage
     */
    measurements?: FulfillmentAPIPackageMeasurements;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIPackage
     */
    packageConsolidationId?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIPackage
     */
    packageId?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIPackage
     */
    packagingType?: string;
    /**
     * 
     * @type {Array<PackingSlipItemDetailDto>}
     * @memberof FulfillmentAPIPackage
     */
    packingSlipItemDetails?: Array<PackingSlipItemDetailDto>;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIPackage
     */
    packingSlipNumber?: number;
    /**
     * Package-level receipt status (NOT_RECEIVED/RECEIVED). Null when not eligible/tenant attribute disabled.
     * @type {string}
     * @memberof FulfillmentAPIPackage
     */
    receiptStatus?: FulfillmentAPIPackageReceiptStatusEnum;
    /**
     * User ID that received this package. Null until received or when not eligible/flag disabled.
     * @type {string}
     * @memberof FulfillmentAPIPackage
     */
    receivedBy?: string;
    /**
     * Timestamp this package was marked received. Null until received or when not eligible/flag disabled.
     * @type {string}
     * @memberof FulfillmentAPIPackage
     */
    receivedDate?: string;
    /**
     * Method used to receive this package (TRACKING_NUMBER_RECEIPT/ITEM_VALIDATION). Null until received or when not eligible/flag disabled.
     * @type {string}
     * @memberof FulfillmentAPIPackage
     */
    receivingMethod?: FulfillmentAPIPackageReceivingMethodEnum;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIPackage
     */
    returnCarrier?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof FulfillmentAPIPackage
     */
    returnTrackingNumbers?: Array<string>;
    /**
     * 
     * @type {Array<FulfillmentAPITracking>}
     * @memberof FulfillmentAPIPackage
     */
    returnTrackings?: Array<FulfillmentAPITracking>;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIPackage
     */
    shippingMethodCode?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIPackage
     */
    shippingMethodName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIPackage
     */
    signatureRequired?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIPackage
     */
    stringBarcode?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof FulfillmentAPIPackage
     */
    trackingNumbers?: Array<string>;
    /**
     * 
     * @type {Array<FulfillmentAPITracking>}
     * @memberof FulfillmentAPIPackage
     */
    trackings?: Array<FulfillmentAPITracking>;
}


/**
 * @export
 */
export const FulfillmentAPIPackageReceiptStatusEnum = {
    NotReceived: 'NOT_RECEIVED',
    Received: 'RECEIVED'
} as const;
export type FulfillmentAPIPackageReceiptStatusEnum = typeof FulfillmentAPIPackageReceiptStatusEnum[keyof typeof FulfillmentAPIPackageReceiptStatusEnum];

/**
 * @export
 */
export const FulfillmentAPIPackageReceivingMethodEnum = {
    TrackingNumberReceipt: 'TRACKING_NUMBER_RECEIPT',
    ItemValidation: 'ITEM_VALIDATION',
    WholeShipmentReceipt: 'WHOLE_SHIPMENT_RECEIPT'
} as const;
export type FulfillmentAPIPackageReceivingMethodEnum = typeof FulfillmentAPIPackageReceivingMethodEnum[keyof typeof FulfillmentAPIPackageReceivingMethodEnum];

/**
 * 
 * @export
 * @interface FulfillmentAPIPackageMeasurements
 */
export interface FulfillmentAPIPackageMeasurements {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentAPIPackageMeasurements
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIMeasurement}
     * @memberof FulfillmentAPIPackageMeasurements
     */
    height?: FulfillmentAPIMeasurement;
    /**
     * 
     * @type {FulfillmentAPIMeasurement}
     * @memberof FulfillmentAPIPackageMeasurements
     */
    length?: FulfillmentAPIMeasurement;
    /**
     * 
     * @type {FulfillmentAPIMeasurement}
     * @memberof FulfillmentAPIPackageMeasurements
     */
    weight?: FulfillmentAPIMeasurement;
    /**
     * 
     * @type {FulfillmentAPIMeasurement}
     * @memberof FulfillmentAPIPackageMeasurements
     */
    width?: FulfillmentAPIMeasurement;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIPhone
 */
export interface FulfillmentAPIPhone {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentAPIPhone
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIPhone
     */
    home?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIPhone
     */
    mobile?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIPhone
     */
    work?: string;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIPickupItem
 */
export interface FulfillmentAPIPickupItem {
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIPickupItem
     */
    lineId?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIPickupItem
     */
    quantity?: number;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIProductOption
 */
export interface FulfillmentAPIProductOption {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductOption
     */
    attributeFQN?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentAPIProductOption
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductOption
     */
    dataType?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductOption
     */
    name?: string;
    /**
     * 
     * @type {object}
     * @memberof FulfillmentAPIProductOption
     */
    shopperEnteredValue?: object;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductOption
     */
    stringValue?: string;
    /**
     * 
     * @type {object}
     * @memberof FulfillmentAPIProductOption
     */
    value?: object;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIReturnRuleInfo
 */
export interface FulfillmentAPIReturnRuleInfo {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentAPIReturnRuleInfo
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIReturnRuleInfo
     */
    isReturnable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIReturnRuleInfo
     */
    maxDays?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIReturnRuleInfo
     */
    maxQty?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIReturnRuleInfo
     */
    ruleCode?: string;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIShipment
 */
export interface FulfillmentAPIShipment {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    acceptedDate?: string;
    /**
     * 
     * @type {FulfillmentAPIContact}
     * @memberof FulfillmentAPIShipment
     */
    alternateContact?: FulfillmentAPIContact;
    /**
     * 
     * @type {FulfillmentAPIAppeasementReason}
     * @memberof FulfillmentAPIShipment
     */
    appeasementReason?: FulfillmentAPIAppeasementReason;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    assignedLocationCode?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentAPIShipment
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIAuditInfo}
     * @memberof FulfillmentAPIShipment
     */
    auditInfo?: FulfillmentAPIAuditInfo;
    /**
     * 
     * @type {Array<CanceledItem>}
     * @memberof FulfillmentAPIShipment
     */
    canceledItems?: Array<CanceledItem>;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    carrier?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    cartId?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIChangeMessage>}
     * @memberof FulfillmentAPIShipment
     */
    changeMessages?: Array<FulfillmentAPIChangeMessage>;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    channel?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof FulfillmentAPIShipment
     */
    childShipmentNumbers?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    currencyCode?: string;
    /**
     * Run currently mutating this shipment (== Kibo.Jobs jobId); null when idle (FR-059d)
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    currentRunId?: string;
    /**
     * 
     * @type {FulfillmentAPICustomer}
     * @memberof FulfillmentAPIShipment
     */
    customer?: FulfillmentAPICustomer;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIShipment
     */
    customerAccountId?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIShipment
     */
    customerAddressId?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    customerTaxId?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentAPIShipment
     */
    data?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIDeliveryWindow}
     * @memberof FulfillmentAPIShipment
     */
    deliveryWindow?: FulfillmentAPIDeliveryWindow;
    /**
     * 
     * @type {FulfillmentAPIDestination}
     * @memberof FulfillmentAPIShipment
     */
    destination?: FulfillmentAPIDestination;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIShipment
     */
    dutyAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIShipment
     */
    dutyTotal?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    expectedDeliveryDate?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    externalOrderId?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    fulfillmentDate?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIShipment
     */
    fulfillmentPriority?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    fulfillmentStatus?: FulfillmentAPIShipmentFulfillmentStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    futureDate?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    groupId?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIShipment
     */
    handlingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIShipment
     */
    handlingSubtotal?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIShipment
     */
    handlingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIShipment
     */
    handlingTaxTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIShipment
     */
    handlingTotal?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    holdReleaseDate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIShipment
     */
    isAutoAssigned?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIShipment
     */
    isCrossDockEligible?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIShipment
     */
    isDropship?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIShipment
     */
    isExpress?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIShipment
     */
    isFlatRateShipping?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIShipment
     */
    isHistoricalImport?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIShipment
     */
    isImmutable?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIShipment
     */
    isOptInForSms?: boolean;
    /**
     * 
     * @type {Array<FilterOptionDtoResultItem>}
     * @memberof FulfillmentAPIShipment
     */
    items?: Array<FilterOptionDtoResultItem>;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    lastCancellationDate?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIShipment
     */
    lineItemSubtotal?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIShipment
     */
    lineItemTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIShipment
     */
    lineItemTaxTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIShipment
     */
    lineItemTotal?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    lowestComplianceLevel?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    masterTrackingNumber?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIShipment
     */
    minutesSinceOnWorkflowStep?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIShipment
     */
    minutesSinceOrdered?: number;
    /**
     * 
     * @type {MutabilityInfo}
     * @memberof FulfillmentAPIShipment
     */
    mutabilityInfo?: MutabilityInfo;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    orderId?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIShipment
     */
    orderNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    orderSubmitDate?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    orderType?: FulfillmentAPIShipmentOrderTypeEnum;
    /**
     * First expectedDeliveryDate this shipment ever carried (write-once, never cleared); non-null marks that the shipment has, at some point, had an EDD. Server-managed (FR-060); ignored on inbound writes.
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    originalEdd?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIShipment
     */
    originalShipmentNumber?: number;
    /**
     * FR-014/FR-016 multi-package-receiving eligibility signal. Only present when the MULTI_PACKAGE_RECEIVING_FOR_TRANSFER_SHIPMENTS tenant attribute is enabled and the transfer shipment has at least one package; null otherwise so tenants without the attribute enabled see no shape change (US2-AC2).
     * @type {boolean}
     * @memberof FulfillmentAPIShipment
     */
    packageReceivingEligible?: boolean;
    /**
     * 
     * @type {Array<FulfillmentAPIPackage>}
     * @memberof FulfillmentAPIShipment
     */
    packages?: Array<FulfillmentAPIPackage>;
    /**
     * US4 progress display: packagesTotalCount minus packagesReceivedCount. Null when not eligible/flag disabled.
     * @type {number}
     * @memberof FulfillmentAPIShipment
     */
    packagesPendingCount?: number;
    /**
     * US4 progress display: count of packages with receiptStatus=RECEIVED. Null when not eligible/flag disabled.
     * @type {number}
     * @memberof FulfillmentAPIShipment
     */
    packagesReceivedCount?: number;
    /**
     * US4 progress display: total expected package count. Null when not eligible/flag disabled.
     * @type {number}
     * @memberof FulfillmentAPIShipment
     */
    packagesTotalCount?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIShipment
     */
    parentCheckoutNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIShipment
     */
    parentShipmentNumber?: number;
    /**
     * 
     * @type {PaymentInvoice}
     * @memberof FulfillmentAPIShipment
     */
    paymentInvoice?: PaymentInvoice;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    pickStatus?: FulfillmentAPIShipmentPickStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    pickType?: FulfillmentAPIShipmentPickTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIShipment
     */
    pickWaveNumber?: number;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentAPIShipment
     */
    pickupInfo?: { [key: string]: object; };
    /**
     * 
     * @type {PriorityInfo}
     * @memberof FulfillmentAPIShipment
     */
    priorityInfo?: PriorityInfo;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIShipment
     */
    readyForPickup?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    readyForPickupDate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIShipment
     */
    readyToCapture?: boolean;
    /**
     * 
     * @type {Array<ReassignedItem>}
     * @memberof FulfillmentAPIShipment
     */
    reassignedItems?: Array<ReassignedItem>;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    receivedDate?: string;
    /**
     * 
     * @type {Array<RejectedItem>}
     * @memberof FulfillmentAPIShipment
     */
    rejectedItems?: Array<RejectedItem>;
    /**
     * Capped per-run history of operations that created/mutated this shipment (FR-059d)
     * @type {Array<RunInfo>}
     * @memberof FulfillmentAPIShipment
     */
    runInfo?: Array<RunInfo>;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIShipment
     */
    sentCustomerAtStoreNotification?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIShipment
     */
    sentCustomerInTransitNotification?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    shipDate?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIShipment
     */
    shipmentAdjustment?: number;
    /**
     * 
     * @type {Array<FulfillmentAPIShipmentAttribute>}
     * @memberof FulfillmentAPIShipment
     */
    shipmentAttributes?: Array<FulfillmentAPIShipmentAttribute>;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    shipmentConsolidationId?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    shipmentGroup?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIShipmentNote>}
     * @memberof FulfillmentAPIShipment
     */
    shipmentNotes?: Array<FulfillmentAPIShipmentNote>;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIShipment
     */
    shipmentNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    shipmentStatus?: FulfillmentAPIShipmentShipmentStatusEnum;
    /**
     * 
     * @type {FulfillmentAPIShipmentStatusReason}
     * @memberof FulfillmentAPIShipment
     */
    shipmentStatusReason?: FulfillmentAPIShipmentStatusReason;
    /**
     * Shipment type code
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    shipmentType: FulfillmentAPIShipmentShipmentTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIShipment
     */
    shippingAdjustment?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    shippingMethodCode?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    shippingMethodName?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIShipment
     */
    shippingSubtotal?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIShipment
     */
    shippingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIShipment
     */
    shippingTaxTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIShipment
     */
    shippingTotal?: number;
    /**
     * 
     * @type {FulfillmentAPIShopperNotes}
     * @memberof FulfillmentAPIShipment
     */
    shopperNotes?: FulfillmentAPIShopperNotes;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIShipment
     */
    siteId?: number;
    /**
     * 
     * @type {Array<Sla>}
     * @memberof FulfillmentAPIShipment
     */
    slas?: Array<Sla>;
    /**
     * 
     * @type {Array<FulfillmentAPISubstitutedItem>}
     * @memberof FulfillmentAPIShipment
     */
    substitutedItems?: Array<FulfillmentAPISubstitutedItem>;
    /**
     * 
     * @type {object}
     * @memberof FulfillmentAPIShipment
     */
    taxData?: object;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIShipment
     */
    tenantId?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIShipment
     */
    total?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof FulfillmentAPIShipment
     */
    transferShipmentNumbers?: Array<number>;
    /**
     * 
     * @type {Array<TransferredItem>}
     * @memberof FulfillmentAPIShipment
     */
    transferredItems?: Array<TransferredItem>;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    transitTime?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    workflowProcessContainerId?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    workflowProcessId?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipment
     */
    workflowProcessVersion?: string;
    /**
     * 
     * @type {FulfillmentAPIWorkflowState}
     * @memberof FulfillmentAPIShipment
     */
    workflowState?: FulfillmentAPIWorkflowState;
}


/**
 * @export
 */
export const FulfillmentAPIShipmentFulfillmentStatusEnum = {
    NotFulfilled: 'NotFulfilled',
    Fulfilled: 'Fulfilled'
} as const;
export type FulfillmentAPIShipmentFulfillmentStatusEnum = typeof FulfillmentAPIShipmentFulfillmentStatusEnum[keyof typeof FulfillmentAPIShipmentFulfillmentStatusEnum];

/**
 * @export
 */
export const FulfillmentAPIShipmentOrderTypeEnum = {
    Offline: 'Offline',
    Online: 'Online'
} as const;
export type FulfillmentAPIShipmentOrderTypeEnum = typeof FulfillmentAPIShipmentOrderTypeEnum[keyof typeof FulfillmentAPIShipmentOrderTypeEnum];

/**
 * @export
 */
export const FulfillmentAPIShipmentPickStatusEnum = {
    Available: 'AVAILABLE',
    InWave: 'IN_WAVE',
    Picked: 'PICKED',
    Transfer: 'TRANSFER',
    Complete: 'COMPLETE'
} as const;
export type FulfillmentAPIShipmentPickStatusEnum = typeof FulfillmentAPIShipmentPickStatusEnum[keyof typeof FulfillmentAPIShipmentPickStatusEnum];

/**
 * @export
 */
export const FulfillmentAPIShipmentPickTypeEnum = {
    Normal: 'NORMAL',
    Single: 'SINGLE',
    Multiple: 'MULTIPLE'
} as const;
export type FulfillmentAPIShipmentPickTypeEnum = typeof FulfillmentAPIShipmentPickTypeEnum[keyof typeof FulfillmentAPIShipmentPickTypeEnum];

/**
 * @export
 */
export const FulfillmentAPIShipmentShipmentStatusEnum = {
    Ready: 'READY',
    Reassigned: 'REASSIGNED',
    Backorder: 'BACKORDER',
    Canceled: 'CANCELED',
    Fulfilled: 'FULFILLED',
    CustomerCare: 'CUSTOMER_CARE',
    Deleted: 'DELETED',
    Future: 'FUTURE',
    Hold: 'HOLD',
    PartiallyReceived: 'PARTIALLY_RECEIVED'
} as const;
export type FulfillmentAPIShipmentShipmentStatusEnum = typeof FulfillmentAPIShipmentShipmentStatusEnum[keyof typeof FulfillmentAPIShipmentShipmentStatusEnum];

/**
 * @export
 */
export const FulfillmentAPIShipmentShipmentTypeEnum = {
    Sth: 'STH',
    Bopis: 'BOPIS',
    BopisCurbside: 'BOPIS_Curbside',
    Transfer: 'Transfer',
    Curbside: 'Curbside',
    Digital: 'Digital',
    Delivery: 'Delivery'
} as const;
export type FulfillmentAPIShipmentShipmentTypeEnum = typeof FulfillmentAPIShipmentShipmentTypeEnum[keyof typeof FulfillmentAPIShipmentShipmentTypeEnum];

/**
 * 
 * @export
 * @interface FulfillmentAPIShipmentAttribute
 */
export interface FulfillmentAPIShipmentAttribute {
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIShipmentAttribute
     */
    attributeDefinitionId?: number;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentAPIShipmentAttribute
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIAuditInfo}
     * @memberof FulfillmentAPIShipmentAttribute
     */
    auditInfo?: FulfillmentAPIAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipmentAttribute
     */
    fullyQualifiedName?: string;
    /**
     * 
     * @type {Array<object>}
     * @memberof FulfillmentAPIShipmentAttribute
     */
    values?: Array<object>;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIShipmentNote
 */
export interface FulfillmentAPIShipmentNote {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentAPIShipmentNote
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIAuditInfo}
     * @memberof FulfillmentAPIShipmentNote
     */
    auditInfo?: FulfillmentAPIAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipmentNote
     */
    noteId?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipmentNote
     */
    noteText?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipmentNote
     */
    role?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipmentNote
     */
    username?: string;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIShipmentStatusReason
 */
export interface FulfillmentAPIShipmentStatusReason {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipmentStatusReason
     */
    moreInfo?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShipmentStatusReason
     */
    reasonCode?: string;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIShopperNotes
 */
export interface FulfillmentAPIShopperNotes {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShopperNotes
     */
    comments?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShopperNotes
     */
    deliveryInstructions?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIShopperNotes
     */
    giftMessage?: string;
}
/**
 * 
 * @export
 * @interface FulfillmentAPISubstituteInfo
 */
export interface FulfillmentAPISubstituteInfo {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPISubstituteInfo
     */
    optIn?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPISubstituteInfo
     */
    substituteProductCode?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPISubstituteInfo
     */
    substituteVariantCode?: string;
}
/**
 * 
 * @export
 * @interface FulfillmentAPISubstitutedItem
 */
export interface FulfillmentAPISubstitutedItem {
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    actualPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    allocatedQuantity?: number;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPISubstitutedItem
     */
    allowsBackOrder?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPISubstitutedItem
     */
    allowsFutureAllocate?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPISubstitutedItem
     */
    allowsSubstitution?: boolean;
    /**
     * 
     * @type {FulfillmentAPIAppeasementReason}
     * @memberof FulfillmentAPISubstitutedItem
     */
    appeasementReason?: FulfillmentAPIAppeasementReason;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentAPISubstitutedItem
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIAuditInfo}
     * @memberof FulfillmentAPISubstitutedItem
     */
    auditInfo?: FulfillmentAPIAuditInfo;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPISubstitutedItem
     */
    autoSubstitution?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPISubstitutedItem
     */
    backorderReleaseDate?: string;
    /**
     * 
     * @type {FulfillmentAPIBundleInfo}
     * @memberof FulfillmentAPISubstitutedItem
     */
    bundleInfo?: FulfillmentAPIBundleInfo;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPISubstitutedItem
     */
    cartItemId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof FulfillmentAPISubstitutedItem
     */
    childItemIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPISubstitutedItem
     */
    condition?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPISubstitutedItem
     */
    creditCurrencyCode?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    creditValue?: number;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentAPISubstitutedItem
     */
    data?: { [key: string]: object; };
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    duty?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPISubstitutedItem
     */
    expectedDeliveryDate?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIFulfillmentField>}
     * @memberof FulfillmentAPISubstitutedItem
     */
    fulfillmentFields?: Array<FulfillmentAPIFulfillmentField>;
    /**
     * 
     * @type {Array<FulfillmentAPIGiftCard>}
     * @memberof FulfillmentAPISubstitutedItem
     */
    giftCards?: Array<FulfillmentAPIGiftCard>;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPISubstitutedItem
     */
    giftMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPISubstitutedItem
     */
    goodsType?: FulfillmentAPISubstitutedItemGoodsTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    handling?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    handlingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    handlingTax?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    height?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPISubstitutedItem
     */
    imageUrl?: string;
    /**
     * 
     * @type {Array<InventoryAllocation>}
     * @memberof FulfillmentAPISubstitutedItem
     */
    inventoryAllocations?: Array<InventoryAllocation>;
    /**
     * 
     * @type {Array<InventoryTag>}
     * @memberof FulfillmentAPISubstitutedItem
     */
    inventoryTags?: Array<InventoryTag>;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPISubstitutedItem
     */
    isAssemblyRequired?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPISubstitutedItem
     */
    isGift?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPISubstitutedItem
     */
    isPackagedStandAlone?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPISubstitutedItem
     */
    isReservedInventory?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPISubstitutedItem
     */
    isTaxable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    itemDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    itemTax?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    length?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    lineId?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    lineItemAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    lineItemCost?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPISubstitutedItem
     */
    locatorName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPISubstitutedItem
     */
    manageStock?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPISubstitutedItem
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPISubstitutedItem
     */
    optionAttributeFQN?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIProductOption>}
     * @memberof FulfillmentAPISubstitutedItem
     */
    options?: Array<FulfillmentAPIProductOption>;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    originalLineId?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPISubstitutedItem
     */
    originalOrderItemId?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    originalQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    overridePrice?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPISubstitutedItem
     */
    parentItemId?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPISubstitutedItem
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPISubstitutedItem
     */
    priceMode?: FulfillmentAPISubstitutedItemPriceModeEnum;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPISubstitutedItem
     */
    productCode?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPISubstitutedItem
     */
    purchaseLocation?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    quantity?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    readyForPickupQuantity?: number;
    /**
     * 
     * @type {FulfillmentAPIReturnRuleInfo}
     * @memberof FulfillmentAPISubstitutedItem
     */
    returnRuleInfo?: FulfillmentAPIReturnRuleInfo;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPISubstitutedItem
     */
    serialNumber?: string;
    /**
     * 
     * @type {Array<ShipmentItemAttribute>}
     * @memberof FulfillmentAPISubstitutedItem
     */
    shipmentItemAttributes?: Array<ShipmentItemAttribute>;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    shipping?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    shippingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    shippingTax?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPISubstitutedItem
     */
    sku?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPISubstitutedItem
     */
    stockValidationStatus?: string;
    /**
     * 
     * @type {FulfillmentAPISubstituteInfo}
     * @memberof FulfillmentAPISubstitutedItem
     */
    substituteInfo?: FulfillmentAPISubstituteInfo;
    /**
     * 
     * @type {Array<number>}
     * @memberof FulfillmentAPISubstitutedItem
     */
    substituteItemLineIds?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    substituteQuantity?: number;
    /**
     * 
     * @type {SubstituteReason}
     * @memberof FulfillmentAPISubstitutedItem
     */
    substituteReason?: SubstituteReason;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPISubstitutedItem
     */
    substitutionType?: FulfillmentAPISubstitutedItemSubstitutionTypeEnum;
    /**
     * 
     * @type {object}
     * @memberof FulfillmentAPISubstitutedItem
     */
    taxData?: object;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    taxableHandling?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    taxableLineItemCost?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    taxableShipping?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    timeFenceDays?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    transferQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    trueTransferQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    unitPrice?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPISubstitutedItem
     */
    upc?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    validatedQuantity?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPISubstitutedItem
     */
    variationProductCode?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    weight?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPISubstitutedItem
     */
    weightUnit?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    weightedDutyAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    weightedHandlingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    weightedHandlingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    weightedLineItemTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    weightedOrderHandlingFee?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    weightedOrderHandlingFeeDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    weightedOrderHandlingFeeTax?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    weightedShipmentAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    weightedShippingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    weightedShippingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPISubstitutedItem
     */
    width?: number;
}


/**
 * @export
 */
export const FulfillmentAPISubstitutedItemGoodsTypeEnum = {
    Physical: 'Physical',
    Digital: 'Digital',
    DigitalCredit: 'DigitalCredit',
    DigitalGiftCard: 'DigitalGiftCard',
    Service: 'Service'
} as const;
export type FulfillmentAPISubstitutedItemGoodsTypeEnum = typeof FulfillmentAPISubstitutedItemGoodsTypeEnum[keyof typeof FulfillmentAPISubstitutedItemGoodsTypeEnum];

/**
 * @export
 */
export const FulfillmentAPISubstitutedItemPriceModeEnum = {
    Internal: 'Internal',
    External: 'External'
} as const;
export type FulfillmentAPISubstitutedItemPriceModeEnum = typeof FulfillmentAPISubstitutedItemPriceModeEnum[keyof typeof FulfillmentAPISubstitutedItemPriceModeEnum];

/**
 * @export
 */
export const FulfillmentAPISubstitutedItemSubstitutionTypeEnum = {
    PreFulfillment: 'PRE_FULFILLMENT',
    AtFulfillment: 'AT_FULFILLMENT'
} as const;
export type FulfillmentAPISubstitutedItemSubstitutionTypeEnum = typeof FulfillmentAPISubstitutedItemSubstitutionTypeEnum[keyof typeof FulfillmentAPISubstitutedItemSubstitutionTypeEnum];

/**
 * 
 * @export
 * @interface FulfillmentAPITaskInput
 */
export interface FulfillmentAPITaskInput {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPITaskInput
     */
    helpMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPITaskInput
     */
    label?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPITaskInput
     */
    maxLength?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPITaskInput
     */
    maximum?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPITaskInput
     */
    minLength?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPITaskInput
     */
    minimum?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPITaskInput
     */
    name?: string;
    /**
     * 
     * @type {Array<object>}
     * @memberof FulfillmentAPITaskInput
     */
    options?: Array<object>;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPITaskInput
     */
    pattern?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPITaskInput
     */
    required?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPITaskInput
     */
    type?: FulfillmentAPITaskInputTypeEnum;
}


/**
 * @export
 */
export const FulfillmentAPITaskInputTypeEnum = {
    String: 'STRING',
    Integer: 'INTEGER',
    Number: 'NUMBER',
    Boolean: 'BOOLEAN',
    Object: 'OBJECT',
    List: 'LIST',
    Unknown: 'UNKNOWN'
} as const;
export type FulfillmentAPITaskInputTypeEnum = typeof FulfillmentAPITaskInputTypeEnum[keyof typeof FulfillmentAPITaskInputTypeEnum];

/**
 * 
 * @export
 * @interface FulfillmentAPITracking
 */
export interface FulfillmentAPITracking {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentAPITracking
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPITracking
     */
    number?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPITracking
     */
    url?: string;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIWorkflowState
 */
export interface FulfillmentAPIWorkflowState {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIWorkflowState
     */
    activeTaskName?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentAPIWorkflowState
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIAuditInfo}
     * @memberof FulfillmentAPIWorkflowState
     */
    auditInfo?: FulfillmentAPIAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIWorkflowState
     */
    completedDate?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIWorkflowState
     */
    processInstanceId?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIWorkflowState
     */
    shipmentState?: string;
    /**
     * 
     * @type {Array<Task>}
     * @memberof FulfillmentAPIWorkflowState
     */
    taskList?: Array<Task>;
    /**
     * 
     * @type {{ [key: string]: BpmVariable; }}
     * @memberof FulfillmentAPIWorkflowState
     */
    variables?: { [key: string]: BpmVariable; };
}
/**
 * 
 * @export
 * @interface FutureItem
 */
export interface FutureItem {
    /**
     * 
     * @type {string}
     * @memberof FutureItem
     */
    futureDate?: string;
    /**
     * 
     * @type {number}
     * @memberof FutureItem
     */
    lineId?: number;
    /**
     * 
     * @type {number}
     * @memberof FutureItem
     */
    quantity?: number;
}
/**
 * 
 * @export
 * @interface FutureItemsRequest
 */
export interface FutureItemsRequest {
    /**
     * 
     * @type {boolean}
     * @memberof FutureItemsRequest
     */
    isUserAction?: boolean;
    /**
     * 
     * @type {Array<FutureItem>}
     * @memberof FutureItemsRequest
     */
    items?: Array<FutureItem>;
    /**
     * 
     * @type {string}
     * @memberof FutureItemsRequest
     */
    runId?: string;
}
/**
 * 
 * @export
 * @interface FutureShipmentUpdateDateRequest
 */
export interface FutureShipmentUpdateDateRequest {
    /**
     * 
     * @type {boolean}
     * @memberof FutureShipmentUpdateDateRequest
     */
    bypassFutureAllocateDeallocate?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FutureShipmentUpdateDateRequest
     */
    futureDate?: string;
    /**
     * 
     * @type {string}
     * @memberof FutureShipmentUpdateDateRequest
     */
    runId?: string;
}
/**
 * 
 * @export
 * @interface GetShipmentsRequest
 */
export interface GetShipmentsRequest {
    /**
     * 
     * @type {boolean}
     * @memberof GetShipmentsRequest
     */
    bypassSearchIndex?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GetShipmentsRequest
     */
    filter?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GetShipmentsRequest
     */
    isExpress?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GetShipmentsRequest
     */
    isLate?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GetShipmentsRequest
     */
    locationGroupCode?: string;
    /**
     * 
     * @type {number}
     * @memberof GetShipmentsRequest
     */
    page?: number;
    /**
     * 
     * @type {number}
     * @memberof GetShipmentsRequest
     */
    pageSize?: number;
    /**
     * 
     * @type {string}
     * @memberof GetShipmentsRequest
     */
    pickStatus?: GetShipmentsRequestPickStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof GetShipmentsRequest
     */
    pickWaveType?: GetShipmentsRequestPickWaveTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof GetShipmentsRequest
     */
    pickable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GetShipmentsRequest
     */
    quickSearch?: string;
    /**
     * 
     * @type {string}
     * @memberof GetShipmentsRequest
     */
    slaCompliance?: string;
    /**
     * 
     * @type {string}
     * @memberof GetShipmentsRequest
     */
    sort?: string;
    /**
     * 
     * @type {string}
     * @memberof GetShipmentsRequest
     */
    timePeriodUnit?: GetShipmentsRequestTimePeriodUnitEnum;
    /**
     * 
     * @type {number}
     * @memberof GetShipmentsRequest
     */
    timePeriodValue?: number;
    /**
     * 
     * @type {string}
     * @memberof GetShipmentsRequest
     */
    workflowTaskName?: string;
}


/**
 * @export
 */
export const GetShipmentsRequestPickStatusEnum = {
    Available: 'AVAILABLE',
    InWave: 'IN_WAVE',
    Picked: 'PICKED',
    Transfer: 'TRANSFER',
    Complete: 'COMPLETE'
} as const;
export type GetShipmentsRequestPickStatusEnum = typeof GetShipmentsRequestPickStatusEnum[keyof typeof GetShipmentsRequestPickStatusEnum];

/**
 * @export
 */
export const GetShipmentsRequestPickWaveTypeEnum = {
    Normal: 'NORMAL',
    Single: 'SINGLE',
    Multiple: 'MULTIPLE'
} as const;
export type GetShipmentsRequestPickWaveTypeEnum = typeof GetShipmentsRequestPickWaveTypeEnum[keyof typeof GetShipmentsRequestPickWaveTypeEnum];

/**
 * @export
 */
export const GetShipmentsRequestTimePeriodUnitEnum = {
    Hours: 'HOURS',
    Days: 'DAYS',
    Weeks: 'WEEKS',
    Months: 'MONTHS',
    Years: 'YEARS'
} as const;
export type GetShipmentsRequestTimePeriodUnitEnum = typeof GetShipmentsRequestTimePeriodUnitEnum[keyof typeof GetShipmentsRequestTimePeriodUnitEnum];

/**
 * 
 * @export
 * @interface GiftCardInfoRequest
 */
export interface GiftCardInfoRequest {
    /**
     * 
     * @type {string}
     * @memberof GiftCardInfoRequest
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof GiftCardInfoRequest
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof GiftCardInfoRequest
     */
    giftCardMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof GiftCardInfoRequest
     */
    lastNameOrSurname?: string;
}
/**
 * 
 * @export
 * @interface HandleOption
 */
export interface HandleOption {
    /**
     * 
     * @type {boolean}
     * @memberof HandleOption
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof HandleOption
     */
    holdBlockAssignment?: boolean;
    /**
     * 
     * @type {Array<HandleOptionItem>}
     * @memberof HandleOption
     */
    items?: Array<HandleOptionItem>;
    /**
     * 
     * @type {TaskReason}
     * @memberof HandleOption
     */
    reason?: TaskReason;
}
/**
 * 
 * @export
 * @interface HandleOptionItem
 */
export interface HandleOptionItem {
    /**
     * 
     * @type {boolean}
     * @memberof HandleOptionItem
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof HandleOptionItem
     */
    holdBlockAssignment?: boolean;
    /**
     * 
     * @type {number}
     * @memberof HandleOptionItem
     */
    lineId?: number;
    /**
     * 
     * @type {number}
     * @memberof HandleOptionItem
     */
    quantity?: number;
    /**
     * 
     * @type {TaskReason}
     * @memberof HandleOptionItem
     */
    reason?: TaskReason;
}
/**
 * 
 * @export
 * @interface HoldReleaseDateUpdateRequest
 */
export interface HoldReleaseDateUpdateRequest {
    /**
     * 
     * @type {string}
     * @memberof HoldReleaseDateUpdateRequest
     */
    holdReleaseDate?: string;
}
/**
 * 
 * @export
 * @interface InventoryAllocation
 */
export interface InventoryAllocation {
    /**
     * 
     * @type {FulfillmentAPIAuditInfo}
     * @memberof InventoryAllocation
     */
    auditInfo?: FulfillmentAPIAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof InventoryAllocation
     */
    condition?: string;
    /**
     * 
     * @type {string}
     * @memberof InventoryAllocation
     */
    date?: string;
    /**
     * 
     * @type {string}
     * @memberof InventoryAllocation
     */
    fulfilledDate?: string;
    /**
     * 
     * @type {number}
     * @memberof InventoryAllocation
     */
    inventoryId?: number;
    /**
     * 
     * @type {string}
     * @memberof InventoryAllocation
     */
    lotCode?: string;
    /**
     * 
     * @type {number}
     * @memberof InventoryAllocation
     */
    originalQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof InventoryAllocation
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof InventoryAllocation
     */
    serialNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof InventoryAllocation
     */
    sku?: string;
    /**
     * 
     * @type {string}
     * @memberof InventoryAllocation
     */
    status?: string;
}
/**
 * 
 * @export
 * @interface InventoryTag
 */
export interface InventoryTag {
    /**
     * 
     * @type {string}
     * @memberof InventoryTag
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof InventoryTag
     */
    value?: string;
}
/**
 * 
 * @export
 * @interface InvoiceLineItem
 */
export interface InvoiceLineItem {
    /**
     * 
     * @type {object}
     * @memberof InvoiceLineItem
     */
    data?: object;
    /**
     * 
     * @type {string}
     * @memberof InvoiceLineItem
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof InvoiceLineItem
     */
    lineItemType?: string;
    /**
     * 
     * @type {number}
     * @memberof InvoiceLineItem
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof InvoiceLineItem
     */
    sku?: string;
    /**
     * 
     * @type {number}
     * @memberof InvoiceLineItem
     */
    totalPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof InvoiceLineItem
     */
    unitPrice?: number;
}
/**
 * 
 * @export
 * @interface InvoiceReferences
 */
export interface InvoiceReferences {
    /**
     * 
     * @type {object}
     * @memberof InvoiceReferences
     */
    data?: object;
    /**
     * 
     * @type {number}
     * @memberof InvoiceReferences
     */
    orderNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof InvoiceReferences
     */
    purchaseOrderNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof InvoiceReferences
     */
    shipmentId?: string;
}
/**
 * 
 * @export
 * @interface InvoiceTax
 */
export interface InvoiceTax {
    /**
     * 
     * @type {number}
     * @memberof InvoiceTax
     */
    amount?: number;
    /**
     * 
     * @type {object}
     * @memberof InvoiceTax
     */
    data?: object;
    /**
     * 
     * @type {string}
     * @memberof InvoiceTax
     */
    jurisdiction?: string;
    /**
     * 
     * @type {number}
     * @memberof InvoiceTax
     */
    rate?: number;
    /**
     * 
     * @type {string}
     * @memberof InvoiceTax
     */
    type?: string;
}
/**
 * 
 * @export
 * @interface InvoiceTerms
 */
export interface InvoiceTerms {
    /**
     * 
     * @type {object}
     * @memberof InvoiceTerms
     */
    data?: object;
    /**
     * 
     * @type {string}
     * @memberof InvoiceTerms
     */
    dueDate?: string;
    /**
     * 
     * @type {string}
     * @memberof InvoiceTerms
     */
    paymentTerms?: string;
}
/**
 * 
 * @export
 * @interface InvoiceVendor
 */
export interface InvoiceVendor {
    /**
     * 
     * @type {FulfillmentAPIAddress}
     * @memberof InvoiceVendor
     */
    address?: FulfillmentAPIAddress;
    /**
     * 
     * @type {object}
     * @memberof InvoiceVendor
     */
    data?: object;
    /**
     * 
     * @type {string}
     * @memberof InvoiceVendor
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof InvoiceVendor
     */
    taxId?: string;
    /**
     * 
     * @type {string}
     * @memberof InvoiceVendor
     */
    vendorId?: string;
}
/**
 * 
 * @export
 * @interface ItemAttributes
 */
export interface ItemAttributes {
    /**
     * 
     * @type {Array<ShipmentItemAttribute>}
     * @memberof ItemAttributes
     */
    attributes?: Array<ShipmentItemAttribute>;
    /**
     * 
     * @type {number}
     * @memberof ItemAttributes
     */
    lineId?: number;
}
/**
 * 
 * @export
 * @interface ItemAuditDetailDto
 */
export interface ItemAuditDetailDto {
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDetailDto
     */
    accountName?: string;
    /**
     * 
     * @type {number}
     * @memberof ItemAuditDetailDto
     */
    accountNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemAuditDetailDto
     */
    assignedPriority?: number;
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDetailDto
     */
    callOffState?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof ItemAuditDetailDto
     */
    childShipmentNumbers?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof ItemAuditDetailDto
     */
    contractedQty?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemAuditDetailDto
     */
    distinctProductCount?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof ItemAuditDetailDto
     */
    donorReservationIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDetailDto
     */
    fulfillmentType?: string;
    /**
     * 
     * @type {number}
     * @memberof ItemAuditDetailDto
     */
    lineItemCount?: number;
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDetailDto
     */
    locationCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDetailDto
     */
    locationName?: string;
    /**
     * 
     * @type {number}
     * @memberof ItemAuditDetailDto
     */
    newPriority?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemAuditDetailDto
     */
    orderNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemAuditDetailDto
     */
    originShipmentNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDetailDto
     */
    outcomeCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDetailDto
     */
    outcomeText?: string;
    /**
     * 
     * @type {number}
     * @memberof ItemAuditDetailDto
     */
    previousPriority?: number;
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDetailDto
     */
    queue?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDetailDto
     */
    reservationCategory?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDetailDto
     */
    reservationId?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDetailDto
     */
    reservationState?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDetailDto
     */
    reservationType?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDetailDto
     */
    ruleCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDetailDto
     */
    ruleDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDetailDto
     */
    ruleName?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDetailDto
     */
    shipDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDetailDto
     */
    shipWindowEnd?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDetailDto
     */
    shipWindowStart?: string;
    /**
     * 
     * @type {number}
     * @memberof ItemAuditDetailDto
     */
    shipmentNumber?: number;
    /**
     * 
     * @type {SourcingDto}
     * @memberof ItemAuditDetailDto
     */
    sourcing?: SourcingDto;
    /**
     * 
     * @type {SplitLineageDto}
     * @memberof ItemAuditDetailDto
     */
    splitLineage?: SplitLineageDto;
    /**
     * 
     * @type {number}
     * @memberof ItemAuditDetailDto
     */
    totalUnits?: number;
    /**
     * 
     * @type {Array<ChangeDto>}
     * @memberof ItemAuditDetailDto
     */
    triggeringEvents?: Array<ChangeDto>;
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDetailDto
     */
    view?: string;
}
/**
 * 
 * @export
 * @interface ItemAuditDto
 */
export interface ItemAuditDto {
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDto
     */
    accountName?: string;
    /**
     * 
     * @type {number}
     * @memberof ItemAuditDto
     */
    accountNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemAuditDto
     */
    assignedPriority?: number;
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDto
     */
    callOffState?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof ItemAuditDto
     */
    childShipmentNumbers?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof ItemAuditDto
     */
    contractedQty?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemAuditDto
     */
    distinctProductCount?: number;
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDto
     */
    fulfillmentType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ItemAuditDto
     */
    isDonor?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ItemAuditDto
     */
    lineItemCount?: number;
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDto
     */
    locationCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDto
     */
    locationName?: string;
    /**
     * 
     * @type {number}
     * @memberof ItemAuditDto
     */
    orderNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemAuditDto
     */
    originShipmentNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDto
     */
    outcomeCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDto
     */
    outcomeText?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDto
     */
    queue?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDto
     */
    recipientReservationId?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDto
     */
    reservationCategory?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDto
     */
    reservationId?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDto
     */
    reservationState?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDto
     */
    reservationType?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDto
     */
    ruleCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDto
     */
    ruleDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDto
     */
    ruleName?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDto
     */
    shipDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDto
     */
    shipWindowEnd?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDto
     */
    shipWindowStart?: string;
    /**
     * 
     * @type {number}
     * @memberof ItemAuditDto
     */
    shipmentNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDto
     */
    splitGroupId?: string;
    /**
     * 
     * @type {number}
     * @memberof ItemAuditDto
     */
    totalUnits?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof ItemAuditDto
     */
    triggeringEventIds?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof ItemAuditDto
     */
    unitsGivenUp?: number;
    /**
     * 
     * @type {string}
     * @memberof ItemAuditDto
     */
    view?: string;
}
/**
 * 
 * @export
 * @interface ItemDto
 */
export interface ItemDto {
    /**
     * 
     * @type {DimensionsDto}
     * @memberof ItemDto
     */
    dimensions?: DimensionsDto;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    lineId?: number;
    /**
     * 
     * @type {string}
     * @memberof ItemDto
     */
    productCode?: string;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    quantity?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ItemDto
     */
    shipByItself?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    sourceShipmentNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    weight?: number;
    /**
     * 
     * @type {string}
     * @memberof ItemDto
     */
    weightUnit?: string;
}
/**
 * 
 * @export
 * @interface ItemGiftReceiptRequest
 */
export interface ItemGiftReceiptRequest {
    /**
     * 
     * @type {string}
     * @memberof ItemGiftReceiptRequest
     */
    giftMessage?: string;
    /**
     * 
     * @type {number}
     * @memberof ItemGiftReceiptRequest
     */
    lineId?: number;
}
/**
 * 
 * @export
 * @interface ItemLineDto
 */
export interface ItemLineDto {
    /**
     * 
     * @type {number}
     * @memberof ItemLineDto
     */
    calledQty?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemLineDto
     */
    lineId?: number;
    /**
     * 
     * @type {string}
     * @memberof ItemLineDto
     */
    movement?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemLineDto
     */
    productDescription?: string;
    /**
     * 
     * @type {number}
     * @memberof ItemLineDto
     */
    qty?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemLineDto
     */
    reservedQty?: number;
    /**
     * 
     * @type {string}
     * @memberof ItemLineDto
     */
    sku?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemLineDto
     */
    state?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemLineDto
     */
    supplyDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemLineDto
     */
    supplySource?: string;
    /**
     * 
     * @type {number}
     * @memberof ItemLineDto
     */
    uncalledQty?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemLineDto
     */
    unitsChanged?: number;
}
/**
 * 
 * @export
 * @interface ItemLinesResponseDto
 */
export interface ItemLinesResponseDto {
    /**
     * 
     * @type {Array<ItemLineDto>}
     * @memberof ItemLinesResponseDto
     */
    content?: Array<ItemLineDto>;
    /**
     * 
     * @type {number}
     * @memberof ItemLinesResponseDto
     */
    page?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemLinesResponseDto
     */
    pageSize?: number;
    /**
     * 
     * @type {LineRollupDto}
     * @memberof ItemLinesResponseDto
     */
    rollup?: LineRollupDto;
    /**
     * 
     * @type {number}
     * @memberof ItemLinesResponseDto
     */
    totalElements?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemLinesResponseDto
     */
    totalPages?: number;
}
/**
 * 
 * @export
 * @interface LastCancellationDateDto
 */
export interface LastCancellationDateDto {
    /**
     * 
     * @type {string}
     * @memberof LastCancellationDateDto
     */
    lastCancellationDate?: string;
}
/**
 * 
 * @export
 * @interface Line
 */
export interface Line {
    /**
     * 
     * @type {number}
     * @memberof Line
     */
    inventoryId?: number;
    /**
     * 
     * @type {number}
     * @memberof Line
     */
    lineId?: number;
    /**
     * 
     * @type {string}
     * @memberof Line
     */
    movement?: string;
    /**
     * 
     * @type {string}
     * @memberof Line
     */
    productCode?: string;
    /**
     * 
     * @type {string}
     * @memberof Line
     */
    productDescription?: string;
    /**
     * 
     * @type {number}
     * @memberof Line
     */
    qty?: number;
    /**
     * 
     * @type {string}
     * @memberof Line
     */
    sku?: string;
    /**
     * 
     * @type {string}
     * @memberof Line
     */
    supplyDate?: string;
    /**
     * 
     * @type {string}
     * @memberof Line
     */
    supplySource?: string;
    /**
     * 
     * @type {number}
     * @memberof Line
     */
    unitsChanged?: number;
    /**
     * 
     * @type {string}
     * @memberof Line
     */
    upc?: string;
}
/**
 * 
 * @export
 * @interface LineRollupDto
 */
export interface LineRollupDto {
    /**
     * 
     * @type {number}
     * @memberof LineRollupDto
     */
    backordered?: number;
    /**
     * 
     * @type {number}
     * @memberof LineRollupDto
     */
    evaluatedOnly?: number;
    /**
     * 
     * @type {number}
     * @memberof LineRollupDto
     */
    repegged?: number;
    /**
     * 
     * @type {number}
     * @memberof LineRollupDto
     */
    unchanged?: number;
    /**
     * 
     * @type {number}
     * @memberof LineRollupDto
     */
    unitsRepegged?: number;
    /**
     * 
     * @type {number}
     * @memberof LineRollupDto
     */
    unitsUnpegged?: number;
}
/**
 * 
 * @export
 * @interface Links
 */
export interface Links {
    /**
     * 
     * @type {boolean}
     * @memberof Links
     */
    empty?: boolean;
}
/**
 * 
 * @export
 * @interface LocationShipmentCount
 */
export interface LocationShipmentCount {
    /**
     * 
     * @type {string}
     * @memberof LocationShipmentCount
     */
    locationCode?: string;
    /**
     * 
     * @type {number}
     * @memberof LocationShipmentCount
     */
    totalShipments?: number;
}
/**
 * 
 * @export
 * @interface LocationSummary
 */
export interface LocationSummary {
    /**
     * 
     * @type {string}
     * @memberof LocationSummary
     */
    currencyCode?: string;
    /**
     * 
     * @type {number}
     * @memberof LocationSummary
     */
    currentAmount?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationSummary
     */
    currentItems?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationSummary
     */
    currentShipments?: number;
    /**
     * 
     * @type {string}
     * @memberof LocationSummary
     */
    locationCode?: string;
    /**
     * 
     * @type {number}
     * @memberof LocationSummary
     */
    totalAmount?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationSummary
     */
    totalItems?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationSummary
     */
    totalShipments?: number;
}
/**
 * 
 * @export
 * @interface LocationSummaryDetail
 */
export interface LocationSummaryDetail {
    /**
     * 
     * @type {FulfillmentAPIAddress}
     * @memberof LocationSummaryDetail
     */
    address?: FulfillmentAPIAddress;
    /**
     * 
     * @type {boolean}
     * @memberof LocationSummaryDetail
     */
    allowFulfillmentWithNoStock?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LocationSummaryDetail
     */
    currencyCode?: string;
    /**
     * 
     * @type {number}
     * @memberof LocationSummaryDetail
     */
    currentAmount?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationSummaryDetail
     */
    currentItems?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationSummaryDetail
     */
    currentShipments?: number;
    /**
     * 
     * @type {boolean}
     * @memberof LocationSummaryDetail
     */
    deliveryConsolidation?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LocationSummaryDetail
     */
    express?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LocationSummaryDetail
     */
    includeInInventoryAggregrate?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LocationSummaryDetail
     */
    includeInLocationExport?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LocationSummaryDetail
     */
    isDisabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LocationSummaryDetail
     */
    locationCode?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationSummaryDetail
     */
    locationName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LocationSummaryDetail
     */
    requiresManifest?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LocationSummaryDetail
     */
    shipToHomeConsolidation?: boolean;
    /**
     * 
     * @type {number}
     * @memberof LocationSummaryDetail
     */
    slaAtRiskCount?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationSummaryDetail
     */
    slaNonCompliantCount?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationSummaryDetail
     */
    slaOnTrackCount?: number;
    /**
     * 
     * @type {boolean}
     * @memberof LocationSummaryDetail
     */
    supportsInventory?: boolean;
    /**
     * 
     * @type {number}
     * @memberof LocationSummaryDetail
     */
    totalAmount?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationSummaryDetail
     */
    totalItems?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationSummaryDetail
     */
    totalShipments?: number;
    /**
     * 
     * @type {boolean}
     * @memberof LocationSummaryDetail
     */
    transferEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LocationSummaryDetail
     */
    warehouseEnabled?: boolean;
}
/**
 * 
 * @export
 * @interface LogBatchRequestDto
 */
export interface LogBatchRequestDto {
    /**
     * 
     * @type {Array<LogEntryRequestDto>}
     * @memberof LogBatchRequestDto
     */
    entries?: Array<LogEntryRequestDto>;
}
/**
 * 
 * @export
 * @interface LogBatchResponseDto
 */
export interface LogBatchResponseDto {
    /**
     * 
     * @type {number}
     * @memberof LogBatchResponseDto
     */
    accepted?: number;
    /**
     * 
     * @type {number}
     * @memberof LogBatchResponseDto
     */
    duplicates?: number;
}
/**
 * 
 * @export
 * @interface LogEntryRequestDto
 */
export interface LogEntryRequestDto {
    /**
     * 
     * @type {number}
     * @memberof LogEntryRequestDto
     */
    accountNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof LogEntryRequestDto
     */
    assignedPriority?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof LogEntryRequestDto
     */
    childShipmentNumbers?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof LogEntryRequestDto
     */
    distinctProductCount?: number;
    /**
     * 
     * @type {string}
     * @memberof LogEntryRequestDto
     */
    entityId?: string;
    /**
     * 
     * @type {string}
     * @memberof LogEntryRequestDto
     */
    entityType?: string;
    /**
     * 
     * @type {string}
     * @memberof LogEntryRequestDto
     */
    fulfillmentType?: string;
    /**
     * 
     * @type {string}
     * @memberof LogEntryRequestDto
     */
    inventoryRef?: string;
    /**
     * 
     * @type {number}
     * @memberof LogEntryRequestDto
     */
    lineItemCount?: number;
    /**
     * 
     * @type {Array<Line>}
     * @memberof LogEntryRequestDto
     */
    lines?: Array<Line>;
    /**
     * 
     * @type {string}
     * @memberof LogEntryRequestDto
     */
    locationFromCode?: string;
    /**
     * 
     * @type {string}
     * @memberof LogEntryRequestDto
     */
    locationToCode?: string;
    /**
     * 
     * @type {number}
     * @memberof LogEntryRequestDto
     */
    newPriority?: number;
    /**
     * 
     * @type {string}
     * @memberof LogEntryRequestDto
     */
    newStatus?: string;
    /**
     * 
     * @type {string}
     * @memberof LogEntryRequestDto
     */
    occurredAt?: string;
    /**
     * 
     * @type {string}
     * @memberof LogEntryRequestDto
     */
    orderId?: string;
    /**
     * 
     * @type {number}
     * @memberof LogEntryRequestDto
     */
    originShipmentNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof LogEntryRequestDto
     */
    outcome?: string;
    /**
     * 
     * @type {string}
     * @memberof LogEntryRequestDto
     */
    phase?: string;
    /**
     * 
     * @type {number}
     * @memberof LogEntryRequestDto
     */
    previousPriority?: number;
    /**
     * 
     * @type {string}
     * @memberof LogEntryRequestDto
     */
    priorStatus?: string;
    /**
     * 
     * @type {string}
     * @memberof LogEntryRequestDto
     */
    reason?: string;
    /**
     * 
     * @type {string}
     * @memberof LogEntryRequestDto
     */
    ruleCode?: string;
    /**
     * 
     * @type {string}
     * @memberof LogEntryRequestDto
     */
    ruleDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof LogEntryRequestDto
     */
    ruleName?: string;
    /**
     * 
     * @type {number}
     * @memberof LogEntryRequestDto
     */
    ruleRank?: number;
    /**
     * 
     * @type {string}
     * @memberof LogEntryRequestDto
     */
    ruleVersionHash?: string;
    /**
     * 
     * @type {number}
     * @memberof LogEntryRequestDto
     */
    sequenceId?: number;
    /**
     * 
     * @type {string}
     * @memberof LogEntryRequestDto
     */
    serviceOrigin?: string;
    /**
     * 
     * @type {string}
     * @memberof LogEntryRequestDto
     */
    shipWindowEnd?: string;
    /**
     * 
     * @type {string}
     * @memberof LogEntryRequestDto
     */
    shipWindowStart?: string;
    /**
     * 
     * @type {string}
     * @memberof LogEntryRequestDto
     */
    splitGroupId?: string;
    /**
     * 
     * @type {number}
     * @memberof LogEntryRequestDto
     */
    totalUnits?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof LogEntryRequestDto
     */
    triggeringEventIds?: Array<string>;
}
/**
 * 
 * @export
 * @interface LogicalOperatorsDto
 */
export interface LogicalOperatorsDto {
    /**
     * 
     * @type {string}
     * @memberof LogicalOperatorsDto
     */
    and?: string;
    /**
     * 
     * @type {string}
     * @memberof LogicalOperatorsDto
     */
    or?: string;
}
/**
 * 
 * @export
 * @interface Manifest
 */
export interface Manifest {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof Manifest
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIAuditInfo}
     * @memberof Manifest
     */
    auditInfo?: FulfillmentAPIAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof Manifest
     */
    carrierId?: string;
    /**
     * 
     * @type {string}
     * @memberof Manifest
     */
    internalId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Manifest
     */
    isSuccessfulPreviously?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Manifest
     */
    locationCode?: string;
    /**
     * 
     * @type {string}
     * @memberof Manifest
     */
    manifestId?: string;
    /**
     * 
     * @type {string}
     * @memberof Manifest
     */
    manifestUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof Manifest
     */
    numberOfPackages?: number;
    /**
     * 
     * @type {number}
     * @memberof Manifest
     */
    numberOfShipments?: number;
    /**
     * 
     * @type {Array<ManifestShipment>}
     * @memberof Manifest
     */
    shipments?: Array<ManifestShipment>;
    /**
     * 
     * @type {Array<ManifestShipment>}
     * @memberof Manifest
     */
    shipmentsSuccessfulPreviously?: Array<ManifestShipment>;
    /**
     * 
     * @type {number}
     * @memberof Manifest
     */
    tenantId?: number;
    /**
     * 
     * @type {string}
     * @memberof Manifest
     */
    userDisplayName?: string;
    /**
     * 
     * @type {string}
     * @memberof Manifest
     */
    userId?: string;
}
/**
 * 
 * @export
 * @interface ManifestRequest
 */
export interface ManifestRequest {
    /**
     * 
     * @type {string}
     * @memberof ManifestRequest
     */
    carrierId?: string;
    /**
     * 
     * @type {Array<ManifestRequestShipment>}
     * @memberof ManifestRequest
     */
    includedShipments?: Array<ManifestRequestShipment>;
    /**
     * 
     * @type {string}
     * @memberof ManifestRequest
     */
    locationCode?: string;
}
/**
 * 
 * @export
 * @interface ManifestRequestShipment
 */
export interface ManifestRequestShipment {
    /**
     * 
     * @type {Array<string>}
     * @memberof ManifestRequestShipment
     */
    integratorIds?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof ManifestRequestShipment
     */
    shipmentNumber?: number;
}
/**
 * 
 * @export
 * @interface ManifestShipment
 */
export interface ManifestShipment {
    /**
     * 
     * @type {FulfillmentAPIDestination}
     * @memberof ManifestShipment
     */
    destination?: FulfillmentAPIDestination;
    /**
     * 
     * @type {string}
     * @memberof ManifestShipment
     */
    externalOrderId?: string;
    /**
     * 
     * @type {string}
     * @memberof ManifestShipment
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {number}
     * @memberof ManifestShipment
     */
    orderNumber?: number;
    /**
     * 
     * @type {Array<FulfillmentAPIPackage>}
     * @memberof ManifestShipment
     */
    packages?: Array<FulfillmentAPIPackage>;
    /**
     * 
     * @type {number}
     * @memberof ManifestShipment
     */
    shipmentNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof ManifestShipment
     */
    shipmentType?: string;
}
/**
 * 
 * @export
 * @interface ModifiedReason
 */
export interface ModifiedReason {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof ModifiedReason
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof ModifiedReason
     */
    moreInfo?: string;
    /**
     * 
     * @type {string}
     * @memberof ModifiedReason
     */
    reasonCode?: string;
}
/**
 * 
 * @export
 * @interface MutabilityInfo
 */
export interface MutabilityInfo {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof MutabilityInfo
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIAuditInfo}
     * @memberof MutabilityInfo
     */
    auditInfo?: FulfillmentAPIAuditInfo;
    /**
     * 
     * @type {Array<string>}
     * @memberof MutabilityInfo
     */
    blockedActions?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof MutabilityInfo
     */
    reason?: string;
}
/**
 * 
 * @export
 * @interface PackageConsolidationDto
 */
export interface PackageConsolidationDto {
    /**
     * 
     * @type {FulfillmentAPIPackage}
     * @memberof PackageConsolidationDto
     */
    packageDetails?: FulfillmentAPIPackage;
    /**
     * 
     * @type {string}
     * @memberof PackageConsolidationDto
     */
    packageId?: string;
    /**
     * 
     * @type {number}
     * @memberof PackageConsolidationDto
     */
    shipmentNumber?: number;
}
/**
 * 
 * @export
 * @interface PackageConsolidationRequest
 */
export interface PackageConsolidationRequest {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof PackageConsolidationRequest
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIPackage}
     * @memberof PackageConsolidationRequest
     */
    commonPackageDetails?: FulfillmentAPIPackage;
    /**
     * 
     * @type {Array<PackageConsolidationDto>}
     * @memberof PackageConsolidationRequest
     */
    packageConsolidations?: Array<PackageConsolidationDto>;
}
/**
 * 
 * @export
 * @interface PackageConsolidationSuggestion
 */
export interface PackageConsolidationSuggestion {
    /**
     * 
     * @type {PagedModelOfEntityModelOfShipment}
     * @memberof PackageConsolidationSuggestion
     */
    shipmentList?: PagedModelOfEntityModelOfShipment;
}
/**
 * 
 * @export
 * @interface PackedBox
 */
export interface PackedBox {
    /**
     * 
     * @type {number}
     * @memberof PackedBox
     */
    boxId?: number;
    /**
     * 
     * @type {PageDimensions}
     * @memberof PackedBox
     */
    dimensions?: PageDimensions;
    /**
     * 
     * @type {Array<PackedItem>}
     * @memberof PackedBox
     */
    items?: Array<PackedItem>;
    /**
     * 
     * @type {string}
     * @memberof PackedBox
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof PackedBox
     */
    volumeUtilization?: number;
    /**
     * 
     * @type {string}
     * @memberof PackedBox
     */
    weightUnit?: string;
    /**
     * 
     * @type {number}
     * @memberof PackedBox
     */
    weightUsed?: number;
    /**
     * 
     * @type {number}
     * @memberof PackedBox
     */
    weightUtilization?: number;
}
/**
 * 
 * @export
 * @interface PackedBoxDto
 */
export interface PackedBoxDto {
    /**
     * 
     * @type {number}
     * @memberof PackedBoxDto
     */
    boxId?: number;
    /**
     * 
     * @type {DimensionsDto}
     * @memberof PackedBoxDto
     */
    dimensions?: DimensionsDto;
    /**
     * 
     * @type {Array<PackedItemDto>}
     * @memberof PackedBoxDto
     */
    items?: Array<PackedItemDto>;
    /**
     * 
     * @type {string}
     * @memberof PackedBoxDto
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof PackedBoxDto
     */
    volumeUtilization?: number;
    /**
     * 
     * @type {string}
     * @memberof PackedBoxDto
     */
    weightUnit?: string;
    /**
     * 
     * @type {number}
     * @memberof PackedBoxDto
     */
    weightUsed?: number;
    /**
     * 
     * @type {number}
     * @memberof PackedBoxDto
     */
    weightUtilization?: number;
}
/**
 * 
 * @export
 * @interface PackedItem
 */
export interface PackedItem {
    /**
     * 
     * @type {PageDimensions}
     * @memberof PackedItem
     */
    dimensions?: PageDimensions;
    /**
     * 
     * @type {number}
     * @memberof PackedItem
     */
    lineId?: number;
    /**
     * 
     * @type {Position}
     * @memberof PackedItem
     */
    origin?: Position;
    /**
     * 
     * @type {string}
     * @memberof PackedItem
     */
    productCode?: string;
    /**
     * 
     * @type {number}
     * @memberof PackedItem
     */
    quantity?: number;
    /**
     * 
     * @type {number}
     * @memberof PackedItem
     */
    sourceShipmentNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof PackedItem
     */
    uniqueId?: string;
    /**
     * 
     * @type {number}
     * @memberof PackedItem
     */
    weight?: number;
    /**
     * 
     * @type {string}
     * @memberof PackedItem
     */
    weightUnit?: string;
}
/**
 * 
 * @export
 * @interface PackedItemDto
 */
export interface PackedItemDto {
    /**
     * 
     * @type {DimensionsDto}
     * @memberof PackedItemDto
     */
    dimensions?: DimensionsDto;
    /**
     * 
     * @type {number}
     * @memberof PackedItemDto
     */
    lineId?: number;
    /**
     * 
     * @type {PositionDto}
     * @memberof PackedItemDto
     */
    origin?: PositionDto;
    /**
     * 
     * @type {number}
     * @memberof PackedItemDto
     */
    quantity?: number;
    /**
     * 
     * @type {number}
     * @memberof PackedItemDto
     */
    sourceShipmentNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof PackedItemDto
     */
    uniqueId?: string;
    /**
     * 
     * @type {number}
     * @memberof PackedItemDto
     */
    weight?: number;
    /**
     * 
     * @type {string}
     * @memberof PackedItemDto
     */
    weightUnit?: string;
}
/**
 * 
 * @export
 * @interface PackingSlipItemDetailDto
 */
export interface PackingSlipItemDetailDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof PackingSlipItemDetailDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {number}
     * @memberof PackingSlipItemDetailDto
     */
    lineId?: number;
    /**
     * 
     * @type {string}
     * @memberof PackingSlipItemDetailDto
     */
    originalOrderItemId?: string;
    /**
     * 
     * @type {number}
     * @memberof PackingSlipItemDetailDto
     */
    quantity?: number;
    /**
     * 
     * @type {number}
     * @memberof PackingSlipItemDetailDto
     */
    receivedQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof PackingSlipItemDetailDto
     */
    substitutedQuantity?: number;
}
/**
 * 
 * @export
 * @interface PackingSuggestionRejectionRequest
 */
export interface PackingSuggestionRejectionRequest {
    /**
     * 
     * @type {string}
     * @memberof PackingSuggestionRejectionRequest
     */
    additionalDetails?: string;
    /**
     * 
     * @type {string}
     * @memberof PackingSuggestionRejectionRequest
     */
    packingSuggestionId?: string;
    /**
     * 
     * @type {string}
     * @memberof PackingSuggestionRejectionRequest
     */
    rejectionReasonCode?: string;
}
/**
 * 
 * @export
 * @interface PackingSuggestionRequestDto
 */
export interface PackingSuggestionRequestDto {
    /**
     * 
     * @type {Array<BoxTypeDto>}
     * @memberof PackingSuggestionRequestDto
     */
    boxTypes?: Array<BoxTypeDto>;
    /**
     * 
     * @type {Array<ItemDto>}
     * @memberof PackingSuggestionRequestDto
     */
    items?: Array<ItemDto>;
}
/**
 * 
 * @export
 * @interface PackingSuggestionResponseDto
 */
export interface PackingSuggestionResponseDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof PackingSuggestionResponseDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {Array<PackedBoxDto>}
     * @memberof PackingSuggestionResponseDto
     */
    boxes?: Array<PackedBoxDto>;
    /**
     * 
     * @type {Array<PackedItemDto>}
     * @memberof PackingSuggestionResponseDto
     */
    leftOvers?: Array<PackedItemDto>;
    /**
     * 
     * @type {number}
     * @memberof PackingSuggestionResponseDto
     */
    lenLeftovers?: number;
    /**
     * 
     * @type {string}
     * @memberof PackingSuggestionResponseDto
     */
    packingSuggestionId?: string;
}
/**
 * 
 * @export
 * @interface PageDimensions
 */
export interface PageDimensions {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof PageDimensions
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {number}
     * @memberof PageDimensions
     */
    height?: number;
    /**
     * 
     * @type {number}
     * @memberof PageDimensions
     */
    length?: number;
    /**
     * 
     * @type {string}
     * @memberof PageDimensions
     */
    unit?: string;
    /**
     * 
     * @type {number}
     * @memberof PageDimensions
     */
    width?: number;
}
/**
 * 
 * @export
 * @interface PageMetadata
 */
export interface PageMetadata {
    /**
     * 
     * @type {number}
     * @memberof PageMetadata
     */
    number?: number;
    /**
     * 
     * @type {number}
     * @memberof PageMetadata
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof PageMetadata
     */
    totalElements?: number;
    /**
     * 
     * @type {number}
     * @memberof PageMetadata
     */
    totalPages?: number;
}
/**
 * 
 * @export
 * @interface PageOfDisruptionEventDto
 */
export interface PageOfDisruptionEventDto {
    /**
     * 
     * @type {Array<DisruptionEventDto>}
     * @memberof PageOfDisruptionEventDto
     */
    content?: Array<DisruptionEventDto>;
    /**
     * 
     * @type {boolean}
     * @memberof PageOfDisruptionEventDto
     */
    empty?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PageOfDisruptionEventDto
     */
    first?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PageOfDisruptionEventDto
     */
    last?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PageOfDisruptionEventDto
     */
    number?: number;
    /**
     * 
     * @type {number}
     * @memberof PageOfDisruptionEventDto
     */
    numberOfElements?: number;
    /**
     * 
     * @type {Pageable}
     * @memberof PageOfDisruptionEventDto
     */
    pageable?: Pageable;
    /**
     * 
     * @type {number}
     * @memberof PageOfDisruptionEventDto
     */
    size?: number;
    /**
     * 
     * @type {Sort}
     * @memberof PageOfDisruptionEventDto
     */
    sort?: Sort;
    /**
     * 
     * @type {number}
     * @memberof PageOfDisruptionEventDto
     */
    totalElements?: number;
    /**
     * 
     * @type {number}
     * @memberof PageOfDisruptionEventDto
     */
    totalPages?: number;
}
/**
 * 
 * @export
 * @interface PageOfRuleDto
 */
export interface PageOfRuleDto {
    /**
     * 
     * @type {Array<RuleDto>}
     * @memberof PageOfRuleDto
     */
    content?: Array<RuleDto>;
    /**
     * 
     * @type {boolean}
     * @memberof PageOfRuleDto
     */
    empty?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PageOfRuleDto
     */
    first?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PageOfRuleDto
     */
    last?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PageOfRuleDto
     */
    number?: number;
    /**
     * 
     * @type {number}
     * @memberof PageOfRuleDto
     */
    numberOfElements?: number;
    /**
     * 
     * @type {Pageable}
     * @memberof PageOfRuleDto
     */
    pageable?: Pageable;
    /**
     * 
     * @type {number}
     * @memberof PageOfRuleDto
     */
    size?: number;
    /**
     * 
     * @type {Sort}
     * @memberof PageOfRuleDto
     */
    sort?: Sort;
    /**
     * 
     * @type {number}
     * @memberof PageOfRuleDto
     */
    totalElements?: number;
    /**
     * 
     * @type {number}
     * @memberof PageOfRuleDto
     */
    totalPages?: number;
}
/**
 * 
 * @export
 * @interface Pageable
 */
export interface Pageable {
    /**
     * 
     * @type {number}
     * @memberof Pageable
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof Pageable
     */
    pageNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof Pageable
     */
    pageSize?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Pageable
     */
    paged?: boolean;
    /**
     * 
     * @type {Sort}
     * @memberof Pageable
     */
    sort?: Sort;
    /**
     * 
     * @type {boolean}
     * @memberof Pageable
     */
    unpaged?: boolean;
}
/**
 * 
 * @export
 * @interface PagedModelOfEntityModelOfShipment
 */
export interface PagedModelOfEntityModelOfShipment {
    /**
     * 
     * @type {{ [key: string]: Array<EntityModelOfShipment>; }}
     * @memberof PagedModelOfEntityModelOfShipment
     */
    embedded?: { [key: string]: Array<EntityModelOfShipment>; };
    /**
     * 
     * @type {Links}
     * @memberof PagedModelOfEntityModelOfShipment
     */
    links?: Links;
    /**
     * 
     * @type {PageMetadata}
     * @memberof PagedModelOfEntityModelOfShipment
     */
    page?: PageMetadata;
}
/**
 * 
 * @export
 * @interface PagedModelOfEntityModelOfWorkflowProcess
 */
export interface PagedModelOfEntityModelOfWorkflowProcess {
    /**
     * 
     * @type {{ [key: string]: Array<EntityModelOfWorkflowProcess>; }}
     * @memberof PagedModelOfEntityModelOfWorkflowProcess
     */
    embedded?: { [key: string]: Array<EntityModelOfWorkflowProcess>; };
    /**
     * 
     * @type {Links}
     * @memberof PagedModelOfEntityModelOfWorkflowProcess
     */
    links?: Links;
    /**
     * 
     * @type {PageMetadata}
     * @memberof PagedModelOfEntityModelOfWorkflowProcess
     */
    page?: PageMetadata;
}
/**
 * 
 * @export
 * @interface PagedResponseDtoOfChangeDto
 */
export interface PagedResponseDtoOfChangeDto {
    /**
     * 
     * @type {Array<ChangeDto>}
     * @memberof PagedResponseDtoOfChangeDto
     */
    content?: Array<ChangeDto>;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof PagedResponseDtoOfChangeDto
     */
    outcomeCounts?: { [key: string]: number; };
    /**
     * 
     * @type {number}
     * @memberof PagedResponseDtoOfChangeDto
     */
    page?: number;
    /**
     * 
     * @type {number}
     * @memberof PagedResponseDtoOfChangeDto
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof PagedResponseDtoOfChangeDto
     */
    totalElements?: number;
    /**
     * 
     * @type {number}
     * @memberof PagedResponseDtoOfChangeDto
     */
    totalPages?: number;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof PagedResponseDtoOfChangeDto
     */
    viewTotals?: { [key: string]: number; };
}
/**
 * 
 * @export
 * @interface PagedResponseDtoOfItemAuditDto
 */
export interface PagedResponseDtoOfItemAuditDto {
    /**
     * 
     * @type {Array<ItemAuditDto>}
     * @memberof PagedResponseDtoOfItemAuditDto
     */
    content?: Array<ItemAuditDto>;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof PagedResponseDtoOfItemAuditDto
     */
    outcomeCounts?: { [key: string]: number; };
    /**
     * 
     * @type {number}
     * @memberof PagedResponseDtoOfItemAuditDto
     */
    page?: number;
    /**
     * 
     * @type {number}
     * @memberof PagedResponseDtoOfItemAuditDto
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof PagedResponseDtoOfItemAuditDto
     */
    totalElements?: number;
    /**
     * 
     * @type {number}
     * @memberof PagedResponseDtoOfItemAuditDto
     */
    totalPages?: number;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof PagedResponseDtoOfItemAuditDto
     */
    viewTotals?: { [key: string]: number; };
}
/**
 * 
 * @export
 * @interface PagedResponseDtoOfRunSummaryDto
 */
export interface PagedResponseDtoOfRunSummaryDto {
    /**
     * 
     * @type {Array<RunSummaryDto>}
     * @memberof PagedResponseDtoOfRunSummaryDto
     */
    content?: Array<RunSummaryDto>;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof PagedResponseDtoOfRunSummaryDto
     */
    outcomeCounts?: { [key: string]: number; };
    /**
     * 
     * @type {number}
     * @memberof PagedResponseDtoOfRunSummaryDto
     */
    page?: number;
    /**
     * 
     * @type {number}
     * @memberof PagedResponseDtoOfRunSummaryDto
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof PagedResponseDtoOfRunSummaryDto
     */
    totalElements?: number;
    /**
     * 
     * @type {number}
     * @memberof PagedResponseDtoOfRunSummaryDto
     */
    totalPages?: number;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof PagedResponseDtoOfRunSummaryDto
     */
    viewTotals?: { [key: string]: number; };
}
/**
 * 
 * @export
 * @interface PaginationDto
 */
export interface PaginationDto {
    /**
     * 
     * @type {number}
     * @memberof PaginationDto
     */
    defaultPageSize?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginationDto
     */
    pageParam?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginationDto
     */
    pageSizeParam?: string;
}
/**
 * 
 * @export
 * @interface PaymentInvoice
 */
export interface PaymentInvoice {
    /**
     * 
     * @type {string}
     * @memberof PaymentInvoice
     */
    currency?: string;
    /**
     * 
     * @type {object}
     * @memberof PaymentInvoice
     */
    data?: object;
    /**
     * 
     * @type {string}
     * @memberof PaymentInvoice
     */
    invoiceDate?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentInvoice
     */
    invoiceNumber?: string;
    /**
     * 
     * @type {Array<InvoiceLineItem>}
     * @memberof PaymentInvoice
     */
    lineItems?: Array<InvoiceLineItem>;
    /**
     * 
     * @type {string}
     * @memberof PaymentInvoice
     */
    rawEdiData?: string;
    /**
     * 
     * @type {InvoiceReferences}
     * @memberof PaymentInvoice
     */
    references?: InvoiceReferences;
    /**
     * 
     * @type {Array<InvoiceTax>}
     * @memberof PaymentInvoice
     */
    taxes?: Array<InvoiceTax>;
    /**
     * 
     * @type {InvoiceTerms}
     * @memberof PaymentInvoice
     */
    terms?: InvoiceTerms;
    /**
     * 
     * @type {number}
     * @memberof PaymentInvoice
     */
    totalAmount?: number;
    /**
     * 
     * @type {InvoiceVendor}
     * @memberof PaymentInvoice
     */
    vendor?: InvoiceVendor;
}
/**
 * 
 * @export
 * @interface PickWave
 */
export interface PickWave {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof PickWave
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIAuditInfo}
     * @memberof PickWave
     */
    auditInfo?: FulfillmentAPIAuditInfo;
    /**
     * 
     * @type {Array<FulfillmentAPIChangeMessage>}
     * @memberof PickWave
     */
    changeMessages?: Array<FulfillmentAPIChangeMessage>;
    /**
     * 
     * @type {Array<PickWaveContent>}
     * @memberof PickWave
     */
    contents?: Array<PickWaveContent>;
    /**
     * 
     * @type {string}
     * @memberof PickWave
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {number}
     * @memberof PickWave
     */
    maxShipments?: number;
    /**
     * 
     * @type {number}
     * @memberof PickWave
     */
    parentPickWaveNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof PickWave
     */
    pickType?: PickWavePickTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof PickWave
     */
    pickWaveId?: string;
    /**
     * 
     * @type {number}
     * @memberof PickWave
     */
    pickWaveNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof PickWave
     */
    pickWaveRuleCode?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWave
     */
    pickWaveStatus?: PickWavePickWaveStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof PickWave
     */
    recoveryPickWaveNumber?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof PickWave
     */
    shipmentNumbers?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof PickWave
     */
    shipmentType?: string;
    /**
     * 
     * @type {number}
     * @memberof PickWave
     */
    tenantId?: number;
    /**
     * 
     * @type {string}
     * @memberof PickWave
     */
    userDisplayName?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWave
     */
    userId?: string;
}


/**
 * @export
 */
export const PickWavePickTypeEnum = {
    Normal: 'NORMAL',
    Single: 'SINGLE',
    Multiple: 'MULTIPLE'
} as const;
export type PickWavePickTypeEnum = typeof PickWavePickTypeEnum[keyof typeof PickWavePickTypeEnum];

/**
 * @export
 */
export const PickWavePickWaveStatusEnum = {
    Error: 'ERROR',
    Pending: 'PENDING',
    InProgress: 'IN_PROGRESS',
    Closed: 'CLOSED',
    PendingRecovery: 'PENDING_RECOVERY'
} as const;
export type PickWavePickWaveStatusEnum = typeof PickWavePickWaveStatusEnum[keyof typeof PickWavePickWaveStatusEnum];

/**
 * 
 * @export
 * @interface PickWaveBinRange
 */
export interface PickWaveBinRange {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof PickWaveBinRange
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof PickWaveBinRange
     */
    endBinName?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveBinRange
     */
    startBinName?: string;
}
/**
 * 
 * @export
 * @interface PickWaveContent
 */
export interface PickWaveContent {
    /**
     * 
     * @type {number}
     * @memberof PickWaveContent
     */
    actualQuantity?: number;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof PickWaveContent
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIAuditInfo}
     * @memberof PickWaveContent
     */
    auditInfo?: FulfillmentAPIAuditInfo;
    /**
     * 
     * @type {number}
     * @memberof PickWaveContent
     */
    binId?: number;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent
     */
    binName?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent
     */
    contentId?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent
     */
    externalOrderId?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent
     */
    imageUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof PickWaveContent
     */
    itemLineId?: number;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent
     */
    locatorName?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent
     */
    optionAttributeFQN?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIProductOption>}
     * @memberof PickWaveContent
     */
    options?: Array<FulfillmentAPIProductOption>;
    /**
     * 
     * @type {number}
     * @memberof PickWaveContent
     */
    orderNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent
     */
    productCode?: string;
    /**
     * 
     * @type {number}
     * @memberof PickWaveContent
     */
    quantity?: number;
    /**
     * 
     * @type {number}
     * @memberof PickWaveContent
     */
    shipmentNumber?: number;
    /**
     * 
     * @type {ModifiedReason}
     * @memberof PickWaveContent
     */
    shortageReason?: ModifiedReason;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent
     */
    sku?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent
     */
    status?: PickWaveContentStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent
     */
    upc?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent
     */
    variationProductCode?: string;
}


/**
 * @export
 */
export const PickWaveContentStatusEnum = {
    InProgress: 'IN_PROGRESS',
    Picked: 'PICKED',
    Removed: 'REMOVED'
} as const;
export type PickWaveContentStatusEnum = typeof PickWaveContentStatusEnum[keyof typeof PickWaveContentStatusEnum];

/**
 * 
 * @export
 * @interface PickWaveProductMatch
 */
export interface PickWaveProductMatch {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof PickWaveProductMatch
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof PickWaveProductMatch
     */
    identifier?: PickWaveProductMatchIdentifierEnum;
    /**
     * 
     * @type {string}
     * @memberof PickWaveProductMatch
     */
    matchType?: PickWaveProductMatchMatchTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof PickWaveProductMatch
     */
    value?: string;
}


/**
 * @export
 */
export const PickWaveProductMatchIdentifierEnum = {
    Upc: 'UPC',
    ProductCode: 'PRODUCT_CODE'
} as const;
export type PickWaveProductMatchIdentifierEnum = typeof PickWaveProductMatchIdentifierEnum[keyof typeof PickWaveProductMatchIdentifierEnum];

/**
 * @export
 */
export const PickWaveProductMatchMatchTypeEnum = {
    Exact: 'EXACT',
    Contains: 'CONTAINS',
    StartsWith: 'STARTS_WITH',
    EndsWith: 'ENDS_WITH'
} as const;
export type PickWaveProductMatchMatchTypeEnum = typeof PickWaveProductMatchMatchTypeEnum[keyof typeof PickWaveProductMatchMatchTypeEnum];

/**
 * 
 * @export
 * @interface PickupItemsRequest
 */
export interface PickupItemsRequest {
    /**
     * 
     * @type {Array<BpmVariable>}
     * @memberof PickupItemsRequest
     */
    bpmVariables?: Array<BpmVariable>;
    /**
     * 
     * @type {boolean}
     * @memberof PickupItemsRequest
     */
    forceFulfill?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PickupItemsRequest
     */
    isUserAction?: boolean;
    /**
     * 
     * @type {Array<FulfillmentAPIPickupItem>}
     * @memberof PickupItemsRequest
     */
    items?: Array<FulfillmentAPIPickupItem>;
}
/**
 * 
 * @export
 * @interface Position
 */
export interface Position {
    /**
     * 
     * @type {number}
     * @memberof Position
     */
    x?: number;
    /**
     * 
     * @type {number}
     * @memberof Position
     */
    y?: number;
    /**
     * 
     * @type {number}
     * @memberof Position
     */
    z?: number;
}
/**
 * 
 * @export
 * @interface PositionDto
 */
export interface PositionDto {
    /**
     * 
     * @type {number}
     * @memberof PositionDto
     */
    x?: number;
    /**
     * 
     * @type {number}
     * @memberof PositionDto
     */
    y?: number;
    /**
     * 
     * @type {number}
     * @memberof PositionDto
     */
    z?: number;
}
/**
 * 
 * @export
 * @interface PriorityAssignment
 */
export interface PriorityAssignment {
    /**
     * 
     * @type {number}
     * @memberof PriorityAssignment
     */
    fulfillmentPriority?: number;
    /**
     * 
     * @type {string}
     * @memberof PriorityAssignment
     */
    ruleCode?: string;
    /**
     * 
     * @type {number}
     * @memberof PriorityAssignment
     */
    shipmentNumber?: number;
}
/**
 * 
 * @export
 * @interface PriorityEvent
 */
export interface PriorityEvent {
    /**
     * 
     * @type {string}
     * @memberof PriorityEvent
     */
    action?: string;
    /**
     * 
     * @type {number}
     * @memberof PriorityEvent
     */
    priority?: number;
    /**
     * 
     * @type {string}
     * @memberof PriorityEvent
     */
    ruleCode?: string;
    /**
     * 
     * @type {string}
     * @memberof PriorityEvent
     */
    ruleType?: string;
    /**
     * 
     * @type {string}
     * @memberof PriorityEvent
     */
    shipmentStatus?: string;
    /**
     * 
     * @type {string}
     * @memberof PriorityEvent
     */
    timestamp?: string;
}
/**
 * 
 * @export
 * @interface PriorityInfo
 */
export interface PriorityInfo {
    /**
     * 
     * @type {Array<PriorityEvent>}
     * @memberof PriorityInfo
     */
    history?: Array<PriorityEvent>;
    /**
     * 
     * @type {string}
     * @memberof PriorityInfo
     */
    prioritizedAt?: string;
    /**
     * 
     * @type {number}
     * @memberof PriorityInfo
     */
    priority?: number;
    /**
     * 
     * @type {string}
     * @memberof PriorityInfo
     */
    ruleCode?: string;
    /**
     * 
     * @type {string}
     * @memberof PriorityInfo
     */
    ruleType?: string;
    /**
     * 
     * @type {string}
     * @memberof PriorityInfo
     */
    statusWhenPrioritized?: string;
}
/**
 * 
 * @export
 * @interface PriorityResult
 */
export interface PriorityResult {
    /**
     * 
     * @type {string}
     * @memberof PriorityResult
     */
    actual?: string;
    /**
     * 
     * @type {string}
     * @memberof PriorityResult
     */
    expected?: string;
    /**
     * 
     * @type {number}
     * @memberof PriorityResult
     */
    fulfillmentPriority?: number;
    /**
     * 
     * @type {number}
     * @memberof PriorityResult
     */
    previousPriority?: number;
    /**
     * 
     * @type {string}
     * @memberof PriorityResult
     */
    reason?: string;
    /**
     * 
     * @type {string}
     * @memberof PriorityResult
     */
    ruleCode?: string;
    /**
     * 
     * @type {number}
     * @memberof PriorityResult
     */
    shipmentNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof PriorityResult
     */
    status?: string;
}
/**
 * 
 * @export
 * @interface QueryDescriptorDto
 */
export interface QueryDescriptorDto {
    /**
     * 
     * @type {string}
     * @memberof QueryDescriptorDto
     */
    endpoint?: string;
    /**
     * 
     * @type {string}
     * @memberof QueryDescriptorDto
     */
    filterParam?: string;
    /**
     * 
     * @type {LogicalOperatorsDto}
     * @memberof QueryDescriptorDto
     */
    logicalOperators?: LogicalOperatorsDto;
    /**
     * 
     * @type {string}
     * @memberof QueryDescriptorDto
     */
    multiSortSeparator?: string;
    /**
     * 
     * @type {PaginationDto}
     * @memberof QueryDescriptorDto
     */
    pagination?: PaginationDto;
    /**
     * 
     * @type {string}
     * @memberof QueryDescriptorDto
     */
    ruleFieldsEndpoint?: string;
    /**
     * 
     * @type {string}
     * @memberof QueryDescriptorDto
     */
    sortAscPrefix?: string;
    /**
     * 
     * @type {string}
     * @memberof QueryDescriptorDto
     */
    sortDescPrefix?: string;
    /**
     * 
     * @type {string}
     * @memberof QueryDescriptorDto
     */
    sortParam?: string;
}
/**
 * 
 * @export
 * @interface RateShoppingMetadataDto
 */
export interface RateShoppingMetadataDto {
    /**
     * Destination ZIP code
     * @type {string}
     * @memberof RateShoppingMetadataDto
     */
    destinationZip: string;
    /**
     * Expected delivery date used for rate shopping
     * @type {string}
     * @memberof RateShoppingMetadataDto
     */
    expectedDeliveryDate: string;
    /**
     * Origin ZIP code
     * @type {string}
     * @memberof RateShoppingMetadataDto
     */
    originZip: string;
    /**
     * Number of packages in the shipment
     * @type {number}
     * @memberof RateShoppingMetadataDto
     */
    packageCount: number;
    /**
     * 
     * @type {object}
     * @memberof RateShoppingMetadataDto
     */
    scoringWeights: object;
    /**
     * Ship Date used for rate shopping
     * @type {string}
     * @memberof RateShoppingMetadataDto
     */
    shipDate: string;
}
/**
 * 
 * @export
 * @interface RateShoppingPackage
 */
export interface RateShoppingPackage {
    /**
     * 
     * @type {FulfillmentAPIPackageMeasurements}
     * @memberof RateShoppingPackage
     */
    measurements?: FulfillmentAPIPackageMeasurements;
    /**
     * 
     * @type {string}
     * @memberof RateShoppingPackage
     */
    packageId?: string;
}
/**
 * Rate shopping request containing shipment details
 * @export
 * @interface RateShoppingRequestDto
 */
export interface RateShoppingRequestDto {
    /**
     * Packages override
     * @type {Array<RateShoppingPackage>}
     * @memberof RateShoppingRequestDto
     */
    packagesOverride?: Array<RateShoppingPackage>;
}
/**
 * 
 * @export
 * @interface ReadyForPackItemsRequest
 */
export interface ReadyForPackItemsRequest {
    /**
     * 
     * @type {boolean}
     * @memberof ReadyForPackItemsRequest
     */
    isUserAction?: boolean;
    /**
     * 
     * @type {Array<ReadyForPrepItem>}
     * @memberof ReadyForPackItemsRequest
     */
    items?: Array<ReadyForPrepItem>;
}
/**
 * 
 * @export
 * @interface ReadyForPrepItem
 */
export interface ReadyForPrepItem {
    /**
     * 
     * @type {number}
     * @memberof ReadyForPrepItem
     */
    lineId?: number;
    /**
     * 
     * @type {number}
     * @memberof ReadyForPrepItem
     */
    quantity?: number;
}
/**
 * 
 * @export
 * @interface ReadyForPrepItemsRequest
 */
export interface ReadyForPrepItemsRequest {
    /**
     * 
     * @type {boolean}
     * @memberof ReadyForPrepItemsRequest
     */
    isUserAction?: boolean;
    /**
     * 
     * @type {Array<ReadyForPrepItem>}
     * @memberof ReadyForPrepItemsRequest
     */
    items?: Array<ReadyForPrepItem>;
}
/**
 * 
 * @export
 * @interface ReassignItem
 */
export interface ReassignItem {
    /**
     * 
     * @type {boolean}
     * @memberof ReassignItem
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReassignItem
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignItem
     */
    holdBlockAssignment?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignItem
     */
    isReservedInventory?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ReassignItem
     */
    lineId?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignItem
     */
    quantity?: number;
    /**
     * 
     * @type {ReassignedReason}
     * @memberof ReassignItem
     */
    reassignedReason?: ReassignedReason;
}
/**
 * 
 * @export
 * @interface ReassignItemsRequest
 */
export interface ReassignItemsRequest {
    /**
     * 
     * @type {boolean}
     * @memberof ReassignItemsRequest
     */
    isUserAction?: boolean;
    /**
     * 
     * @type {Array<ReassignItem>}
     * @memberof ReassignItemsRequest
     */
    items?: Array<ReassignItem>;
    /**
     * 
     * @type {string}
     * @memberof ReassignItemsRequest
     */
    runId?: string;
}
/**
 * 
 * @export
 * @interface ReassignShipment
 */
export interface ReassignShipment {
    /**
     * 
     * @type {boolean}
     * @memberof ReassignShipment
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReassignShipment
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignShipment
     */
    holdBlockAssignment?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignShipment
     */
    isUserAction?: boolean;
    /**
     * 
     * @type {Array<ReassignItem>}
     * @memberof ReassignShipment
     */
    items?: Array<ReassignItem>;
    /**
     * 
     * @type {ReassignedReason}
     * @memberof ReassignShipment
     */
    reassignedReason?: ReassignedReason;
    /**
     * 
     * @type {string}
     * @memberof ReassignShipment
     */
    runId?: string;
}
/**
 * 
 * @export
 * @interface ReassignedItem
 */
export interface ReassignedItem {
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    actualPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    allocatedQuantity?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignedItem
     */
    allowsBackOrder?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignedItem
     */
    allowsFutureAllocate?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignedItem
     */
    allowsSubstitution?: boolean;
    /**
     * 
     * @type {FulfillmentAPIAppeasementReason}
     * @memberof ReassignedItem
     */
    appeasementReason?: FulfillmentAPIAppeasementReason;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof ReassignedItem
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIAuditInfo}
     * @memberof ReassignedItem
     */
    auditInfo?: FulfillmentAPIAuditInfo;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignedItem
     */
    autoSubstitution?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    backorderReleaseDate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignedItem
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {FulfillmentAPIBundleInfo}
     * @memberof ReassignedItem
     */
    bundleInfo?: FulfillmentAPIBundleInfo;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    cartItemId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReassignedItem
     */
    childItemIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    condition?: string;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    creditCurrencyCode?: string;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    creditValue?: number;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof ReassignedItem
     */
    data?: { [key: string]: object; };
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    duty?: number;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    expectedDeliveryDate?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIFulfillmentField>}
     * @memberof ReassignedItem
     */
    fulfillmentFields?: Array<FulfillmentAPIFulfillmentField>;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIGiftCard>}
     * @memberof ReassignedItem
     */
    giftCards?: Array<FulfillmentAPIGiftCard>;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    giftMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    goodsType?: ReassignedItemGoodsTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    handling?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    handlingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    handlingTax?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    height?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignedItem
     */
    holdBlockAssignment?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    imageUrl?: string;
    /**
     * 
     * @type {Array<InventoryAllocation>}
     * @memberof ReassignedItem
     */
    inventoryAllocations?: Array<InventoryAllocation>;
    /**
     * 
     * @type {Array<InventoryTag>}
     * @memberof ReassignedItem
     */
    inventoryTags?: Array<InventoryTag>;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignedItem
     */
    isAssemblyRequired?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignedItem
     */
    isGift?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignedItem
     */
    isPackagedStandAlone?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignedItem
     */
    isReservedInventory?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignedItem
     */
    isTaxable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    itemDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    itemTax?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    length?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    lineId?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    lineItemAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    lineItemCost?: number;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    locatorName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignedItem
     */
    manageStock?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    optionAttributeFQN?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIProductOption>}
     * @memberof ReassignedItem
     */
    options?: Array<FulfillmentAPIProductOption>;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    originalLineId?: number;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    originalOrderItemId?: string;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    originalQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    overridePrice?: number;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    parentItemId?: string;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    priceMode?: ReassignedItemPriceModeEnum;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    productCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    purchaseLocation?: string;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    quantity?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    readyForPickupQuantity?: number;
    /**
     * 
     * @type {ReassignedReason}
     * @memberof ReassignedItem
     */
    reassignedReason?: ReassignedReason;
    /**
     * 
     * @type {FulfillmentAPIReturnRuleInfo}
     * @memberof ReassignedItem
     */
    returnRuleInfo?: FulfillmentAPIReturnRuleInfo;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    serialNumber?: string;
    /**
     * 
     * @type {Array<ShipmentItemAttribute>}
     * @memberof ReassignedItem
     */
    shipmentItemAttributes?: Array<ShipmentItemAttribute>;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    shipping?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    shippingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    shippingTax?: number;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    sku?: string;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    stockValidationStatus?: string;
    /**
     * 
     * @type {FulfillmentAPISubstituteInfo}
     * @memberof ReassignedItem
     */
    substituteInfo?: FulfillmentAPISubstituteInfo;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    substituteQuantity?: number;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    substitutionType?: ReassignedItemSubstitutionTypeEnum;
    /**
     * 
     * @type {object}
     * @memberof ReassignedItem
     */
    taxData?: object;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    taxableHandling?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    taxableLineItemCost?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    taxableShipping?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    timeFenceDays?: number;
    /**
     * This is deprecated.
     * @type {number}
     * @memberof ReassignedItem
     */
    transferQuantity?: number;
    /**
     * This is the actual quantity transferred.
     * @type {number}
     * @memberof ReassignedItem
     */
    trueTransferQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    unitPrice?: number;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    upc?: string;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    validatedQuantity?: number;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    variationProductCode?: string;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    weight?: number;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    weightUnit?: string;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    weightedDutyAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    weightedHandlingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    weightedHandlingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    weightedLineItemTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    weightedOrderHandlingFee?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    weightedOrderHandlingFeeDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    weightedOrderHandlingFeeTax?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    weightedShipmentAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    weightedShippingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    weightedShippingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    width?: number;
}


/**
 * @export
 */
export const ReassignedItemGoodsTypeEnum = {
    Physical: 'Physical',
    Digital: 'Digital',
    DigitalCredit: 'DigitalCredit',
    DigitalGiftCard: 'DigitalGiftCard',
    Service: 'Service'
} as const;
export type ReassignedItemGoodsTypeEnum = typeof ReassignedItemGoodsTypeEnum[keyof typeof ReassignedItemGoodsTypeEnum];

/**
 * @export
 */
export const ReassignedItemPriceModeEnum = {
    Internal: 'Internal',
    External: 'External'
} as const;
export type ReassignedItemPriceModeEnum = typeof ReassignedItemPriceModeEnum[keyof typeof ReassignedItemPriceModeEnum];

/**
 * @export
 */
export const ReassignedItemSubstitutionTypeEnum = {
    PreFulfillment: 'PRE_FULFILLMENT',
    AtFulfillment: 'AT_FULFILLMENT'
} as const;
export type ReassignedItemSubstitutionTypeEnum = typeof ReassignedItemSubstitutionTypeEnum[keyof typeof ReassignedItemSubstitutionTypeEnum];

/**
 * 
 * @export
 * @interface ReassignedReason
 */
export interface ReassignedReason {
    /**
     * 
     * @type {string}
     * @memberof ReassignedReason
     */
    moreInfo?: string;
    /**
     * 
     * @type {string}
     * @memberof ReassignedReason
     */
    reasonCode?: string;
}
/**
 * 
 * @export
 * @interface RebalanceTriggerResponseDto
 */
export interface RebalanceTriggerResponseDto {
    /**
     * 
     * @type {boolean}
     * @memberof RebalanceTriggerResponseDto
     */
    accepted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RebalanceTriggerResponseDto
     */
    jobGroup?: string;
    /**
     * 
     * @type {string}
     * @memberof RebalanceTriggerResponseDto
     */
    jobName?: string;
    /**
     * 
     * @type {string}
     * @memberof RebalanceTriggerResponseDto
     */
    reason?: string;
}
/**
 * 
 * @export
 * @interface RecommendedRateDto
 */
export interface RecommendedRateDto {
    /**
     * Carrier code
     * @type {string}
     * @memberof RecommendedRateDto
     */
    carrier: string;
    /**
     * Estimated delivery date
     * @type {string}
     * @memberof RecommendedRateDto
     */
    estimatedDeliveryDate: string;
    /**
     * Service type code
     * @type {string}
     * @memberof RecommendedRateDto
     */
    serviceType: string;
    /**
     * Total rate
     * @type {number}
     * @memberof RecommendedRateDto
     */
    totalRate: number;
}
/**
 * 
 * @export
 * @interface RejectItem
 */
export interface RejectItem {
    /**
     * 
     * @type {boolean}
     * @memberof RejectItem
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RejectItem
     */
    holdBlockAssignment?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RejectItem
     */
    lineId?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectItem
     */
    quantity?: number;
    /**
     * 
     * @type {RejectedReason}
     * @memberof RejectItem
     */
    rejectedReason?: RejectedReason;
}
/**
 * 
 * @export
 * @interface RejectItemsRequest
 */
export interface RejectItemsRequest {
    /**
     * 
     * @type {boolean}
     * @memberof RejectItemsRequest
     */
    isUserAction?: boolean;
    /**
     * 
     * @type {Array<RejectItem>}
     * @memberof RejectItemsRequest
     */
    items?: Array<RejectItem>;
}
/**
 * 
 * @export
 * @interface RejectShipment
 */
export interface RejectShipment {
    /**
     * 
     * @type {boolean}
     * @memberof RejectShipment
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RejectShipment
     */
    holdBlockAssignment?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RejectShipment
     */
    isUserAction?: boolean;
    /**
     * 
     * @type {Array<RejectItem>}
     * @memberof RejectShipment
     */
    items?: Array<RejectItem>;
    /**
     * 
     * @type {RejectedReason}
     * @memberof RejectShipment
     */
    rejectedReason?: RejectedReason;
}
/**
 * 
 * @export
 * @interface RejectedItem
 */
export interface RejectedItem {
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    actualPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    allocatedQuantity?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RejectedItem
     */
    allowsBackOrder?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RejectedItem
     */
    allowsFutureAllocate?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RejectedItem
     */
    allowsSubstitution?: boolean;
    /**
     * 
     * @type {FulfillmentAPIAppeasementReason}
     * @memberof RejectedItem
     */
    appeasementReason?: FulfillmentAPIAppeasementReason;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof RejectedItem
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIAuditInfo}
     * @memberof RejectedItem
     */
    auditInfo?: FulfillmentAPIAuditInfo;
    /**
     * 
     * @type {boolean}
     * @memberof RejectedItem
     */
    autoSubstitution?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    backorderReleaseDate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RejectedItem
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {FulfillmentAPIBundleInfo}
     * @memberof RejectedItem
     */
    bundleInfo?: FulfillmentAPIBundleInfo;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    cartItemId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof RejectedItem
     */
    childItemIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    condition?: string;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    creditCurrencyCode?: string;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    creditValue?: number;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof RejectedItem
     */
    data?: { [key: string]: object; };
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    duty?: number;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    expectedDeliveryDate?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIFulfillmentField>}
     * @memberof RejectedItem
     */
    fulfillmentFields?: Array<FulfillmentAPIFulfillmentField>;
    /**
     * 
     * @type {Array<FulfillmentAPIGiftCard>}
     * @memberof RejectedItem
     */
    giftCards?: Array<FulfillmentAPIGiftCard>;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    giftMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    goodsType?: RejectedItemGoodsTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    handling?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    handlingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    handlingTax?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    height?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RejectedItem
     */
    holdBlockAssignment?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    imageUrl?: string;
    /**
     * 
     * @type {Array<InventoryAllocation>}
     * @memberof RejectedItem
     */
    inventoryAllocations?: Array<InventoryAllocation>;
    /**
     * 
     * @type {Array<InventoryTag>}
     * @memberof RejectedItem
     */
    inventoryTags?: Array<InventoryTag>;
    /**
     * 
     * @type {boolean}
     * @memberof RejectedItem
     */
    isAssemblyRequired?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RejectedItem
     */
    isGift?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RejectedItem
     */
    isPackagedStandAlone?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RejectedItem
     */
    isReservedInventory?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RejectedItem
     */
    isTaxable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    itemDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    itemTax?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    length?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    lineId?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    lineItemAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    lineItemCost?: number;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    locatorName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RejectedItem
     */
    manageStock?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    optionAttributeFQN?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIProductOption>}
     * @memberof RejectedItem
     */
    options?: Array<FulfillmentAPIProductOption>;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    originalLineId?: number;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    originalOrderItemId?: string;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    originalQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    overridePrice?: number;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    parentItemId?: string;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    priceMode?: RejectedItemPriceModeEnum;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    productCode?: string;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    purchaseLocation?: string;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    quantity?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    readyForPickupQuantity?: number;
    /**
     * 
     * @type {RejectedReason}
     * @memberof RejectedItem
     */
    rejectedReason?: RejectedReason;
    /**
     * 
     * @type {FulfillmentAPIReturnRuleInfo}
     * @memberof RejectedItem
     */
    returnRuleInfo?: FulfillmentAPIReturnRuleInfo;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    serialNumber?: string;
    /**
     * 
     * @type {Array<ShipmentItemAttribute>}
     * @memberof RejectedItem
     */
    shipmentItemAttributes?: Array<ShipmentItemAttribute>;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    shipping?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    shippingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    shippingTax?: number;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    sku?: string;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    stockValidationStatus?: string;
    /**
     * 
     * @type {FulfillmentAPISubstituteInfo}
     * @memberof RejectedItem
     */
    substituteInfo?: FulfillmentAPISubstituteInfo;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    substituteQuantity?: number;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    substitutionType?: RejectedItemSubstitutionTypeEnum;
    /**
     * 
     * @type {object}
     * @memberof RejectedItem
     */
    taxData?: object;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    taxableHandling?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    taxableLineItemCost?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    taxableShipping?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    timeFenceDays?: number;
    /**
     * This is deprecated.
     * @type {number}
     * @memberof RejectedItem
     */
    transferQuantity?: number;
    /**
     * This is the actual quantity transferred.
     * @type {number}
     * @memberof RejectedItem
     */
    trueTransferQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    unitPrice?: number;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    upc?: string;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    validatedQuantity?: number;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    variationProductCode?: string;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    weight?: number;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    weightUnit?: string;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    weightedDutyAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    weightedHandlingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    weightedHandlingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    weightedLineItemTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    weightedOrderHandlingFee?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    weightedOrderHandlingFeeDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    weightedOrderHandlingFeeTax?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    weightedShipmentAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    weightedShippingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    weightedShippingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    width?: number;
}


/**
 * @export
 */
export const RejectedItemGoodsTypeEnum = {
    Physical: 'Physical',
    Digital: 'Digital',
    DigitalCredit: 'DigitalCredit',
    DigitalGiftCard: 'DigitalGiftCard',
    Service: 'Service'
} as const;
export type RejectedItemGoodsTypeEnum = typeof RejectedItemGoodsTypeEnum[keyof typeof RejectedItemGoodsTypeEnum];

/**
 * @export
 */
export const RejectedItemPriceModeEnum = {
    Internal: 'Internal',
    External: 'External'
} as const;
export type RejectedItemPriceModeEnum = typeof RejectedItemPriceModeEnum[keyof typeof RejectedItemPriceModeEnum];

/**
 * @export
 */
export const RejectedItemSubstitutionTypeEnum = {
    PreFulfillment: 'PRE_FULFILLMENT',
    AtFulfillment: 'AT_FULFILLMENT'
} as const;
export type RejectedItemSubstitutionTypeEnum = typeof RejectedItemSubstitutionTypeEnum[keyof typeof RejectedItemSubstitutionTypeEnum];

/**
 * 
 * @export
 * @interface RejectedReason
 */
export interface RejectedReason {
    /**
     * 
     * @type {string}
     * @memberof RejectedReason
     */
    moreInfo?: string;
    /**
     * 
     * @type {string}
     * @memberof RejectedReason
     */
    reasonCode?: string;
}
/**
 * 
 * @export
 * @interface ResultItem
 */
export interface ResultItem {
    /**
     * 
     * @type {number}
     * @memberof ResultItem
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof ResultItem
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface RuleAuditInfoDto
 */
export interface RuleAuditInfoDto {
    /**
     * 
     * @type {string}
     * @memberof RuleAuditInfoDto
     */
    createBy?: string;
    /**
     * 
     * @type {string}
     * @memberof RuleAuditInfoDto
     */
    createDate?: string;
    /**
     * 
     * @type {string}
     * @memberof RuleAuditInfoDto
     */
    updateBy?: string;
    /**
     * 
     * @type {string}
     * @memberof RuleAuditInfoDto
     */
    updateDate?: string;
}
/**
 * 
 * @export
 * @interface RuleDto
 */
export interface RuleDto {
    /**
     * 
     * @type {RuleAuditInfoDto}
     * @memberof RuleDto
     */
    auditInfo?: RuleAuditInfoDto;
    /**
     * 
     * @type {string}
     * @memberof RuleDto
     */
    code?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof RuleDto
     */
    customerRules?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof RuleDto
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RuleDto
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RuleDto
     */
    name?: string;
    /**
     * 
     * @type {Array<RuleReferenceDto>}
     * @memberof RuleDto
     */
    productRules?: Array<RuleReferenceDto>;
    /**
     * 
     * @type {number}
     * @memberof RuleDto
     */
    rank?: number;
    /**
     * 
     * @type {Array<RuleReferenceDto>}
     * @memberof RuleDto
     */
    shipmentRules?: Array<RuleReferenceDto>;
    /**
     * 
     * @type {string}
     * @memberof RuleDto
     */
    sortAttribute?: string;
}
/**
 * Metadata for a rule field operator including display text and RSQL syntax
 * @export
 * @interface RuleOperatorDto
 */
export interface RuleOperatorDto {
    /**
     * Operator code identifier
     * @type {string}
     * @memberof RuleOperatorDto
     */
    code: RuleOperatorDtoCodeEnum;
    /**
     * Human-readable operator display text for UI
     * @type {string}
     * @memberof RuleOperatorDto
     */
    display: string;
    /**
     * RSQL filter syntax token for query construction
     * @type {string}
     * @memberof RuleOperatorDto
     */
    filterSyntax: string;
}


/**
 * @export
 */
export const RuleOperatorDtoCodeEnum = {
    Eq: 'eq',
    Ne: 'ne',
    In: 'in',
    Le: 'le',
    Lt: 'lt',
    Ge: 'ge',
    Gt: 'gt',
    Cont: 'cont',
    Sw: 'sw'
} as const;
export type RuleOperatorDtoCodeEnum = typeof RuleOperatorDtoCodeEnum[keyof typeof RuleOperatorDtoCodeEnum];

/**
 * 
 * @export
 * @interface RuleReferenceDto
 */
export interface RuleReferenceDto {
    /**
     * 
     * @type {string}
     * @memberof RuleReferenceDto
     */
    code?: string;
}
/**
 * 
 * @export
 * @interface RunCountsDto
 */
export interface RunCountsDto {
    /**
     * 
     * @type {number}
     * @memberof RunCountsDto
     */
    affected?: number;
    /**
     * 
     * @type {number}
     * @memberof RunCountsDto
     */
    affectedBackorder?: number;
    /**
     * 
     * @type {number}
     * @memberof RunCountsDto
     */
    affectedFuture?: number;
    /**
     * 
     * @type {number}
     * @memberof RunCountsDto
     */
    createdBackorder?: number;
    /**
     * 
     * @type {number}
     * @memberof RunCountsDto
     */
    createdFuture?: number;
    /**
     * 
     * @type {number}
     * @memberof RunCountsDto
     */
    evaluatedBackorder?: number;
    /**
     * 
     * @type {number}
     * @memberof RunCountsDto
     */
    evaluatedFuture?: number;
    /**
     * 
     * @type {number}
     * @memberof RunCountsDto
     */
    eventsTracked?: number;
    /**
     * 
     * @type {number}
     * @memberof RunCountsDto
     */
    reservationsEvaluated?: number;
    /**
     * 
     * @type {number}
     * @memberof RunCountsDto
     */
    stealFromDonors?: number;
}
/**
 * 
 * @export
 * @interface RunDetailDto
 */
export interface RunDetailDto {
    /**
     * 
     * @type {string}
     * @memberof RunDetailDto
     */
    completedAt?: string;
    /**
     * 
     * @type {RunCountsDto}
     * @memberof RunDetailDto
     */
    counts?: RunCountsDto;
    /**
     * 
     * @type {string}
     * @memberof RunDetailDto
     */
    displayStatus?: string;
    /**
     * 
     * @type {string}
     * @memberof RunDetailDto
     */
    primaryChangeReferenceId?: string;
    /**
     * 
     * @type {string}
     * @memberof RunDetailDto
     */
    primaryChangeType?: string;
    /**
     * 
     * @type {string}
     * @memberof RunDetailDto
     */
    runId?: string;
    /**
     * 
     * @type {string}
     * @memberof RunDetailDto
     */
    runType?: string;
    /**
     * 
     * @type {string}
     * @memberof RunDetailDto
     */
    startedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof RunDetailDto
     */
    summaryText?: string;
    /**
     * 
     * @type {Array<RunDetailTabDto>}
     * @memberof RunDetailDto
     */
    tabs?: Array<RunDetailTabDto>;
    /**
     * 
     * @type {string}
     * @memberof RunDetailDto
     */
    trigger?: string;
}
/**
 * 
 * @export
 * @interface RunDetailTabDto
 */
export interface RunDetailTabDto {
    /**
     * 
     * @type {number}
     * @memberof RunDetailTabDto
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof RunDetailTabDto
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface RunInfo
 */
export interface RunInfo {
    /**
     * 
     * @type {string}
     * @memberof RunInfo
     */
    action?: string;
    /**
     * 
     * @type {string}
     * @memberof RunInfo
     */
    occurredAt?: string;
    /**
     * 
     * @type {string}
     * @memberof RunInfo
     */
    queue?: string;
    /**
     * 
     * @type {string}
     * @memberof RunInfo
     */
    routedLocationCode?: string;
    /**
     * 
     * @type {string}
     * @memberof RunInfo
     */
    runId?: string;
    /**
     * 
     * @type {string}
     * @memberof RunInfo
     */
    runType?: string;
    /**
     * 
     * @type {string}
     * @memberof RunInfo
     */
    shipmentStatus?: string;
}
/**
 * 
 * @export
 * @interface RunSummaryDto
 */
export interface RunSummaryDto {
    /**
     * 
     * @type {string}
     * @memberof RunSummaryDto
     */
    completedAt?: string;
    /**
     * 
     * @type {RunCountsDto}
     * @memberof RunSummaryDto
     */
    counts?: RunCountsDto;
    /**
     * 
     * @type {string}
     * @memberof RunSummaryDto
     */
    displayStatus?: string;
    /**
     * 
     * @type {string}
     * @memberof RunSummaryDto
     */
    primaryChangeReferenceId?: string;
    /**
     * 
     * @type {string}
     * @memberof RunSummaryDto
     */
    primaryChangeType?: string;
    /**
     * 
     * @type {string}
     * @memberof RunSummaryDto
     */
    runId?: string;
    /**
     * 
     * @type {string}
     * @memberof RunSummaryDto
     */
    runType?: string;
    /**
     * 
     * @type {string}
     * @memberof RunSummaryDto
     */
    startedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof RunSummaryDto
     */
    summaryText?: string;
    /**
     * 
     * @type {string}
     * @memberof RunSummaryDto
     */
    trigger?: string;
}
/**
 * 
 * @export
 * @interface SaveMpsPackagesRequest
 */
export interface SaveMpsPackagesRequest {
    /**
     * 
     * @type {string}
     * @memberof SaveMpsPackagesRequest
     */
    masterTrackingNumber?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIPackage>}
     * @memberof SaveMpsPackagesRequest
     */
    packages?: Array<FulfillmentAPIPackage>;
}
/**
 * 
 * @export
 * @interface ShipmentConsolidationRequest
 */
export interface ShipmentConsolidationRequest {
    /**
     * 
     * @type {Array<number>}
     * @memberof ShipmentConsolidationRequest
     */
    shipmentNumbers?: Array<number>;
}
/**
 * 
 * @export
 * @interface ShipmentGiftReceiptRequest
 */
export interface ShipmentGiftReceiptRequest {
    /**
     * 
     * @type {string}
     * @memberof ShipmentGiftReceiptRequest
     */
    giftMessage?: string;
}
/**
 * 
 * @export
 * @interface ShipmentItemAttribute
 */
export interface ShipmentItemAttribute {
    /**
     * 
     * @type {number}
     * @memberof ShipmentItemAttribute
     */
    attributeDefinitionId?: number;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof ShipmentItemAttribute
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIAuditInfo}
     * @memberof ShipmentItemAttribute
     */
    auditInfo?: FulfillmentAPIAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof ShipmentItemAttribute
     */
    fullyQualifiedName?: string;
    /**
     * 
     * @type {Array<object>}
     * @memberof ShipmentItemAttribute
     */
    values?: Array<object>;
}
/**
 * 
 * @export
 * @interface ShipmentReleaseDto
 */
export interface ShipmentReleaseDto {
    /**
     * 
     * @type {boolean}
     * @memberof ShipmentReleaseDto
     */
    isCrossDockEligible?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ShipmentReleaseDto
     */
    shipDate?: string;
}
/**
 * 
 * @export
 * @interface ShipmentRuleEnumValueDto
 */
export interface ShipmentRuleEnumValueDto {
    /**
     * 
     * @type {string}
     * @memberof ShipmentRuleEnumValueDto
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof ShipmentRuleEnumValueDto
     */
    name?: string;
}
/**
 * Metadata for a shipment rule field including operators, data type, and UI grouping information
 * @export
 * @interface ShipmentRuleFieldDto
 */
export interface ShipmentRuleFieldDto {
    /**
     * Whether null values are allowed on the right side of the operator
     * @type {boolean}
     * @memberof ShipmentRuleFieldDto
     */
    allowNullOnRight: boolean;
    /**
     * API field name for RSQL filter construction
     * @type {string}
     * @memberof ShipmentRuleFieldDto
     */
    apiFieldName?: string;
    /**
     * Comprehensive operator metadata with display text and RSQL syntax
     * @type {Array<RuleOperatorDto>}
     * @memberof ShipmentRuleFieldDto
     */
    apiOperators?: Array<RuleOperatorDto>;
    /**
     * Attribute scope (Shipment, ShipmentItem, ShipmentAndShipmentItem) for custom attributes only
     * @type {string}
     * @memberof ShipmentRuleFieldDto
     */
    applicableTo?: string;
    /**
     * Data type of the field (string, enum, date, boolean, number)
     * @type {string}
     * @memberof ShipmentRuleFieldDto
     */
    dataType: string;
    /**
     * Human-readable display name for UI
     * @type {string}
     * @memberof ShipmentRuleFieldDto
     */
    displayValue: string;
    /**
     * Field name identifier used internally
     * @type {string}
     * @memberof ShipmentRuleFieldDto
     */
    fieldName: string;
    /**
     * Field type for UI grouping (ShipmentField, ShipmentAttribute, ItemAttribute)
     * @type {string}
     * @memberof ShipmentRuleFieldDto
     */
    ruleFieldType?: string;
    /**
     * Display value for the field type group header
     * @type {string}
     * @memberof ShipmentRuleFieldDto
     */
    ruleFieldTypeDisplayValue?: string;
    /**
     * 
     * @type {SortDescriptorDto}
     * @memberof ShipmentRuleFieldDto
     */
    sortDescriptor?: SortDescriptorDto;
    /**
     * Whether this field supports sorting in result sets
     * @type {boolean}
     * @memberof ShipmentRuleFieldDto
     */
    sortable?: boolean;
    /**
     * List of supported operator codes (legacy, use apiOperators instead)
     * @type {Array<string>}
     * @memberof ShipmentRuleFieldDto
     */
    supportedOperators: Array<string>;
    /**
     * List of valid enumerated values for enum/list data types
     * @type {Array<ShipmentRuleEnumValueDto>}
     * @memberof ShipmentRuleFieldDto
     */
    validEnumValues?: Array<ShipmentRuleEnumValueDto>;
}
/**
 * 
 * @export
 * @interface ShipmentTypeSummary
 */
export interface ShipmentTypeSummary {
    /**
     * Shipment type code
     * @type {string}
     * @memberof ShipmentTypeSummary
     */
    shipmentType?: ShipmentTypeSummaryShipmentTypeEnum;
    /**
     * Display name for the shipment type
     * @type {string}
     * @memberof ShipmentTypeSummary
     */
    shipmentTypeDisplayName?: string;
    /**
     * 
     * @type {number}
     * @memberof ShipmentTypeSummary
     */
    totalShipments?: number;
    /**
     * 
     * @type {Array<ResultItem>}
     * @memberof ShipmentTypeSummary
     */
    workflowTaskNames?: Array<ResultItem>;
}


/**
 * @export
 */
export const ShipmentTypeSummaryShipmentTypeEnum = {
    Sth: 'STH',
    Bopis: 'BOPIS',
    BopisCurbside: 'BOPIS_Curbside',
    Transfer: 'Transfer',
    Curbside: 'Curbside',
    Digital: 'Digital',
    Delivery: 'Delivery'
} as const;
export type ShipmentTypeSummaryShipmentTypeEnum = typeof ShipmentTypeSummaryShipmentTypeEnum[keyof typeof ShipmentTypeSummaryShipmentTypeEnum];

/**
 * 
 * @export
 * @interface ShipmentsAggregation
 */
export interface ShipmentsAggregation {
    /**
     * 
     * @type {Array<UpcQuantity>}
     * @memberof ShipmentsAggregation
     */
    demandByUpc?: Array<UpcQuantity>;
    /**
     * 
     * @type {FilterOptions}
     * @memberof ShipmentsAggregation
     */
    filterOptions?: FilterOptions;
    /**
     * 
     * @type {FilteredShipments}
     * @memberof ShipmentsAggregation
     */
    filteredShipmentsDto?: FilteredShipments;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof ShipmentsAggregation
     */
    statusCounts?: { [key: string]: number; };
}
/**
 * Shipping rate from a carrier
 * @export
 * @interface ShippingRateDto
 */
export interface ShippingRateDto {
    /**
     * Carrier code
     * @type {string}
     * @memberof ShippingRateDto
     */
    carrier: string;
    /**
     * Currency code
     * @type {string}
     * @memberof ShippingRateDto
     */
    currency: string;
    /**
     * Estimated delivery date
     * @type {string}
     * @memberof ShippingRateDto
     */
    estimatedDeliveryDate: string;
    /**
     * Exclusion code
     * @type {string}
     * @memberof ShippingRateDto
     */
    exclusionCode: string;
    /**
     * Exclusion message
     * @type {string}
     * @memberof ShippingRateDto
     */
    exclusionMessage: string;
    /**
     * Normalized cost
     * @type {number}
     * @memberof ShippingRateDto
     */
    normalizedCost: number;
    /**
     * Normalized speed
     * @type {number}
     * @memberof ShippingRateDto
     */
    normalizedSpeed: number;
    /**
     * Service Type code
     * @type {string}
     * @memberof ShippingRateDto
     */
    serviceType: string;
    /**
     * Service Type Name
     * @type {string}
     * @memberof ShippingRateDto
     */
    serviceTypeName?: string;
    /**
     * Total rate
     * @type {number}
     * @memberof ShippingRateDto
     */
    totalRate: number;
    /**
     * Transit time in business days
     * @type {number}
     * @memberof ShippingRateDto
     */
    transitDays: number;
    /**
     * Weighted score
     * @type {number}
     * @memberof ShippingRateDto
     */
    weightedScore: number;
}
/**
 * 
 * @export
 * @interface ShortageReason
 */
export interface ShortageReason {
    /**
     * 
     * @type {string}
     * @memberof ShortageReason
     */
    moreInfo?: string;
    /**
     * 
     * @type {string}
     * @memberof ShortageReason
     */
    reasonCode?: string;
}
/**
 * 
 * @export
 * @interface Sla
 */
export interface Sla {
    /**
     * 
     * @type {ThresholdTrackingInfo}
     * @memberof Sla
     */
    atRiskTrackingInfo?: ThresholdTrackingInfo;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof Sla
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {ThresholdTrackingInfo}
     * @memberof Sla
     */
    compliantTrackingInfo?: ThresholdTrackingInfo;
    /**
     * 
     * @type {string}
     * @memberof Sla
     */
    endDisplayValue?: string;
    /**
     * 
     * @type {ThresholdTrackingInfo}
     * @memberof Sla
     */
    nonCompliantTrackingInfo?: ThresholdTrackingInfo;
    /**
     * 
     * @type {string}
     * @memberof Sla
     */
    slaCode?: string;
    /**
     * 
     * @type {string}
     * @memberof Sla
     */
    slaComplianceLevel?: string;
    /**
     * 
     * @type {string}
     * @memberof Sla
     */
    slaDefinitionId?: string;
    /**
     * 
     * @type {number}
     * @memberof Sla
     */
    slaDefinitionNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof Sla
     */
    slaDefinitionStatus?: string;
    /**
     * 
     * @type {string}
     * @memberof Sla
     */
    slaDueDate?: string;
    /**
     * 
     * @type {number}
     * @memberof Sla
     */
    slaId?: number;
    /**
     * 
     * @type {string}
     * @memberof Sla
     */
    slaName?: string;
    /**
     * 
     * @type {string}
     * @memberof Sla
     */
    slaStatus?: string;
    /**
     * 
     * @type {string}
     * @memberof Sla
     */
    startDisplayValue?: string;
}
/**
 * 
 * @export
 * @interface SlaSummaryDto
 */
export interface SlaSummaryDto {
    /**
     * 
     * @type {string}
     * @memberof SlaSummaryDto
     */
    endDisplayValue?: string;
    /**
     * 
     * @type {string}
     * @memberof SlaSummaryDto
     */
    slaCode?: string;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof SlaSummaryDto
     */
    slaComplianceCounts?: { [key: string]: number; };
    /**
     * 
     * @type {number}
     * @memberof SlaSummaryDto
     */
    slaDefinitionNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof SlaSummaryDto
     */
    slaName?: string;
    /**
     * 
     * @type {string}
     * @memberof SlaSummaryDto
     */
    slaStatus?: string;
    /**
     * 
     * @type {string}
     * @memberof SlaSummaryDto
     */
    startDisplayValue?: string;
}
/**
 * 
 * @export
 * @interface Sort
 */
export interface Sort {
    /**
     * 
     * @type {boolean}
     * @memberof Sort
     */
    empty?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Sort
     */
    sorted?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Sort
     */
    unsorted?: boolean;
}
/**
 * 
 * @export
 * @interface SortDescriptorDto
 */
export interface SortDescriptorDto {
    /**
     * 
     * @type {string}
     * @memberof SortDescriptorDto
     */
    ascValue?: string;
    /**
     * 
     * @type {string}
     * @memberof SortDescriptorDto
     */
    descValue?: string;
    /**
     * 
     * @type {string}
     * @memberof SortDescriptorDto
     */
    multiFieldSeparator?: string;
    /**
     * 
     * @type {string}
     * @memberof SortDescriptorDto
     */
    queryParam?: string;
}
/**
 * 
 * @export
 * @interface SourcingDto
 */
export interface SourcingDto {
    /**
     * 
     * @type {number}
     * @memberof SourcingDto
     */
    atpAtScope?: number;
    /**
     * 
     * @type {number}
     * @memberof SourcingDto
     */
    atsAtScope?: number;
    /**
     * 
     * @type {number}
     * @memberof SourcingDto
     */
    balanceCalled?: number;
    /**
     * 
     * @type {number}
     * @memberof SourcingDto
     */
    balanceContracted?: number;
    /**
     * 
     * @type {number}
     * @memberof SourcingDto
     */
    balanceUncalled?: number;
    /**
     * 
     * @type {number}
     * @memberof SourcingDto
     */
    heldBeforeRun?: number;
    /**
     * 
     * @type {number}
     * @memberof SourcingDto
     */
    lostUnits?: number;
    /**
     * 
     * @type {number}
     * @memberof SourcingDto
     */
    nettingPosition?: number;
    /**
     * 
     * @type {number}
     * @memberof SourcingDto
     */
    reSecuredUnits?: number;
    /**
     * 
     * @type {Array<StolenFromDto>}
     * @memberof SourcingDto
     */
    stolenFrom?: Array<StolenFromDto>;
}
/**
 * 
 * @export
 * @interface SplitLineageDto
 */
export interface SplitLineageDto {
    /**
     * 
     * @type {SplitLineageOriginDto}
     * @memberof SplitLineageDto
     */
    origin?: SplitLineageOriginDto;
    /**
     * 
     * @type {Array<SplitLineageEntryDto>}
     * @memberof SplitLineageDto
     */
    results?: Array<SplitLineageEntryDto>;
}
/**
 * 
 * @export
 * @interface SplitLineageEntryDto
 */
export interface SplitLineageEntryDto {
    /**
     * 
     * @type {boolean}
     * @memberof SplitLineageEntryDto
     */
    origin?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SplitLineageEntryDto
     */
    queue?: string;
    /**
     * 
     * @type {number}
     * @memberof SplitLineageEntryDto
     */
    shipmentNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof SplitLineageEntryDto
     */
    units?: number;
}
/**
 * 
 * @export
 * @interface SplitLineageOriginDto
 */
export interface SplitLineageOriginDto {
    /**
     * 
     * @type {string}
     * @memberof SplitLineageOriginDto
     */
    queue?: string;
    /**
     * 
     * @type {number}
     * @memberof SplitLineageOriginDto
     */
    shipmentNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof SplitLineageOriginDto
     */
    totalUnits?: number;
}
/**
 * 
 * @export
 * @interface StolenFromDto
 */
export interface StolenFromDto {
    /**
     * 
     * @type {number}
     * @memberof StolenFromDto
     */
    orderNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof StolenFromDto
     */
    shipDate?: string;
    /**
     * 
     * @type {number}
     * @memberof StolenFromDto
     */
    unitsStolen?: number;
}
/**
 * 
 * @export
 * @interface SubstitutableItemResponse
 */
export interface SubstitutableItemResponse {
    /**
     * 
     * @type {number}
     * @memberof SubstitutableItemResponse
     */
    availableInventory?: number;
    /**
     * 
     * @type {string}
     * @memberof SubstitutableItemResponse
     */
    baseProductCode?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIBundledProduct>}
     * @memberof SubstitutableItemResponse
     */
    bundledProducts?: Array<FulfillmentAPIBundledProduct>;
    /**
     * 
     * @type {string}
     * @memberof SubstitutableItemResponse
     */
    condition?: string;
    /**
     * 
     * @type {string}
     * @memberof SubstitutableItemResponse
     */
    imageUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof SubstitutableItemResponse
     */
    itemDiscount?: number;
    /**
     * 
     * @type {string}
     * @memberof SubstitutableItemResponse
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof SubstitutableItemResponse
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof SubstitutableItemResponse
     */
    productCode?: string;
    /**
     * 
     * @type {string}
     * @memberof SubstitutableItemResponse
     */
    productUsage?: string;
    /**
     * 
     * @type {string}
     * @memberof SubstitutableItemResponse
     */
    sku?: string;
    /**
     * 
     * @type {number}
     * @memberof SubstitutableItemResponse
     */
    unitPrice?: number;
    /**
     * 
     * @type {string}
     * @memberof SubstitutableItemResponse
     */
    upc?: string;
}
/**
 * 
 * @export
 * @interface SubstituteItem
 */
export interface SubstituteItem {
    /**
     * 
     * @type {FulfillmentAPIBundleInfo}
     * @memberof SubstituteItem
     */
    bundleInfo?: FulfillmentAPIBundleInfo;
    /**
     * 
     * @type {number}
     * @memberof SubstituteItem
     */
    lineId?: number;
    /**
     * 
     * @type {string}
     * @memberof SubstituteItem
     */
    productCode?: string;
    /**
     * 
     * @type {number}
     * @memberof SubstituteItem
     */
    quantity?: number;
    /**
     * 
     * @type {SubstituteReason}
     * @memberof SubstituteItem
     */
    substituteReason?: SubstituteReason;
    /**
     * 
     * @type {string}
     * @memberof SubstituteItem
     */
    variationProductCode?: string;
}
/**
 * 
 * @export
 * @interface SubstituteItemsRequest
 */
export interface SubstituteItemsRequest {
    /**
     * 
     * @type {boolean}
     * @memberof SubstituteItemsRequest
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SubstituteItemsRequest
     */
    holdBlockAssignment?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SubstituteItemsRequest
     */
    isUserAction?: boolean;
    /**
     * 
     * @type {Array<SubstituteItem>}
     * @memberof SubstituteItemsRequest
     */
    items?: Array<SubstituteItem>;
    /**
     * 
     * @type {number}
     * @memberof SubstituteItemsRequest
     */
    lineId?: number;
    /**
     * 
     * @type {string}
     * @memberof SubstituteItemsRequest
     */
    packageId?: string;
    /**
     * 
     * @type {number}
     * @memberof SubstituteItemsRequest
     */
    quantity?: number;
}
/**
 * 
 * @export
 * @interface SubstituteReason
 */
export interface SubstituteReason {
    /**
     * 
     * @type {string}
     * @memberof SubstituteReason
     */
    moreInfo?: string;
    /**
     * 
     * @type {string}
     * @memberof SubstituteReason
     */
    reasonCode?: string;
}
/**
 * 
 * @export
 * @interface Task
 */
export interface Task {
    /**
     * 
     * @type {{ [key: string]: FulfillmentAPILink; }}
     * @memberof Task
     */
    links?: { [key: string]: FulfillmentAPILink; };
    /**
     * 
     * @type {boolean}
     * @memberof Task
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    activeDate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Task
     */
    completed?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    completedDate?: string;
    /**
     * 
     * @type {number}
     * @memberof Task
     */
    completedDurationMillis?: number;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    description?: string;
    /**
     * 
     * @type {Array<FulfillmentAPITaskInput>}
     * @memberof Task
     */
    inputs?: Array<FulfillmentAPITaskInput>;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Task
     */
    skippable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    subject?: string;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    taskId?: string;
}
/**
 * 
 * @export
 * @interface TaskComplete
 */
export interface TaskComplete {
    /**
     * Caller-supplied email template name; required when triggerEmail is true
     * @type {string}
     * @memberof TaskComplete
     */
    emailTemplateName?: string;
    /**
     * 
     * @type {HandleOption}
     * @memberof TaskComplete
     */
    handleOption?: HandleOption;
    /**
     * Recipient audience (Shopper, Fulfiller, Recipient, AlternateContact); required when triggerEmail is true
     * @type {string}
     * @memberof TaskComplete
     */
    recipientType?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof TaskComplete
     */
    taskBody?: { [key: string]: object; };
    /**
     * When true, publishes a SendWorkflowTaskCompletedEmail after the task completes
     * @type {boolean}
     * @memberof TaskComplete
     */
    triggerEmail?: boolean;
}
/**
 * 
 * @export
 * @interface TaskDefinition
 */
export interface TaskDefinition {
    /**
     * 
     * @type {string}
     * @memberof TaskDefinition
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskDefinition
     */
    id?: string;
    /**
     * 
     * @type {Array<FulfillmentAPITaskInput>}
     * @memberof TaskDefinition
     */
    inputs?: Array<FulfillmentAPITaskInput>;
    /**
     * 
     * @type {string}
     * @memberof TaskDefinition
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof TaskDefinition
     */
    priority?: number;
    /**
     * 
     * @type {boolean}
     * @memberof TaskDefinition
     */
    skippable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TaskDefinition
     */
    subject?: string;
}
/**
 * 
 * @export
 * @interface TaskReason
 */
export interface TaskReason {
    /**
     * 
     * @type {string}
     * @memberof TaskReason
     */
    moreInfo?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskReason
     */
    reasonCode?: string;
}
/**
 * 
 * @export
 * @interface TemplateVariable
 */
export interface TemplateVariable {
    /**
     * 
     * @type {string}
     * @memberof TemplateVariable
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof TemplateVariable
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof TemplateVariable
     */
    type?: TemplateVariableTypeEnum;
}


/**
 * @export
 */
export const TemplateVariableTypeEnum = {
    Empty: '',
    QuestionMark: '?',
    Ampersand: '&',
    Slash: '/',
    Hash: '#',
    Star: '*'
} as const;
export type TemplateVariableTypeEnum = typeof TemplateVariableTypeEnum[keyof typeof TemplateVariableTypeEnum];

/**
 * 
 * @export
 * @interface ThresholdTrackingInfo
 */
export interface ThresholdTrackingInfo {
    /**
     * 
     * @type {string}
     * @memberof ThresholdTrackingInfo
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof ThresholdTrackingInfo
     */
    endDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ThresholdTrackingInfo
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ThresholdTrackingInfo
     */
    startDate?: string;
}
/**
 * 
 * @export
 * @interface TransferItem
 */
export interface TransferItem {
    /**
     * 
     * @type {boolean}
     * @memberof TransferItem
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TransferItem
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TransferItem
     */
    holdBlockAssignment?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TransferItem
     */
    isReservedInventory?: boolean;
    /**
     * 
     * @type {number}
     * @memberof TransferItem
     */
    lineId?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferItem
     */
    quantity?: number;
    /**
     * 
     * @type {TransferredReason}
     * @memberof TransferItem
     */
    transferredReason?: TransferredReason;
}
/**
 * 
 * @export
 * @interface TransferItemsRequest
 */
export interface TransferItemsRequest {
    /**
     * 
     * @type {boolean}
     * @memberof TransferItemsRequest
     */
    isUserAction?: boolean;
    /**
     * 
     * @type {Array<TransferItem>}
     * @memberof TransferItemsRequest
     */
    items?: Array<TransferItem>;
}
/**
 * 
 * @export
 * @interface TransferShipment
 */
export interface TransferShipment {
    /**
     * 
     * @type {boolean}
     * @memberof TransferShipment
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TransferShipment
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TransferShipment
     */
    holdBlockAssignment?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TransferShipment
     */
    isUserAction?: boolean;
    /**
     * 
     * @type {Array<TransferItem>}
     * @memberof TransferShipment
     */
    items?: Array<TransferItem>;
    /**
     * 
     * @type {TransferredReason}
     * @memberof TransferShipment
     */
    transferredReason?: TransferredReason;
}
/**
 * 
 * @export
 * @interface TransferredItem
 */
export interface TransferredItem {
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    actualPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    allocatedQuantity?: number;
    /**
     * 
     * @type {boolean}
     * @memberof TransferredItem
     */
    allowsBackOrder?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TransferredItem
     */
    allowsFutureAllocate?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TransferredItem
     */
    allowsSubstitution?: boolean;
    /**
     * 
     * @type {FulfillmentAPIAppeasementReason}
     * @memberof TransferredItem
     */
    appeasementReason?: FulfillmentAPIAppeasementReason;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof TransferredItem
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIAuditInfo}
     * @memberof TransferredItem
     */
    auditInfo?: FulfillmentAPIAuditInfo;
    /**
     * 
     * @type {boolean}
     * @memberof TransferredItem
     */
    autoSubstitution?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    backorderReleaseDate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TransferredItem
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {FulfillmentAPIBundleInfo}
     * @memberof TransferredItem
     */
    bundleInfo?: FulfillmentAPIBundleInfo;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    cartItemId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof TransferredItem
     */
    childItemIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    condition?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    creditCurrencyCode?: string;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    creditValue?: number;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof TransferredItem
     */
    data?: { [key: string]: object; };
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    duty?: number;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    expectedDeliveryDate?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIFulfillmentField>}
     * @memberof TransferredItem
     */
    fulfillmentFields?: Array<FulfillmentAPIFulfillmentField>;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIGiftCard>}
     * @memberof TransferredItem
     */
    giftCards?: Array<FulfillmentAPIGiftCard>;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    giftMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    goodsType?: TransferredItemGoodsTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    handling?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    handlingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    handlingTax?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    height?: number;
    /**
     * 
     * @type {boolean}
     * @memberof TransferredItem
     */
    holdBlockAssignment?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    imageUrl?: string;
    /**
     * 
     * @type {Array<InventoryAllocation>}
     * @memberof TransferredItem
     */
    inventoryAllocations?: Array<InventoryAllocation>;
    /**
     * 
     * @type {Array<InventoryTag>}
     * @memberof TransferredItem
     */
    inventoryTags?: Array<InventoryTag>;
    /**
     * 
     * @type {boolean}
     * @memberof TransferredItem
     */
    isAssemblyRequired?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TransferredItem
     */
    isGift?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TransferredItem
     */
    isPackagedStandAlone?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TransferredItem
     */
    isReservedInventory?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TransferredItem
     */
    isTaxable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    itemDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    itemTax?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    length?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    lineId?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    lineItemAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    lineItemCost?: number;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    locatorName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TransferredItem
     */
    manageStock?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    optionAttributeFQN?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIProductOption>}
     * @memberof TransferredItem
     */
    options?: Array<FulfillmentAPIProductOption>;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    originalLineId?: number;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    originalOrderItemId?: string;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    originalQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    overridePrice?: number;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    parentItemId?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    priceMode?: TransferredItemPriceModeEnum;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    productCode?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    purchaseLocation?: string;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    quantity?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    readyForPickupQuantity?: number;
    /**
     * 
     * @type {RejectedReason}
     * @memberof TransferredItem
     */
    rejectedReason?: RejectedReason;
    /**
     * 
     * @type {FulfillmentAPIReturnRuleInfo}
     * @memberof TransferredItem
     */
    returnRuleInfo?: FulfillmentAPIReturnRuleInfo;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    serialNumber?: string;
    /**
     * 
     * @type {Array<ShipmentItemAttribute>}
     * @memberof TransferredItem
     */
    shipmentItemAttributes?: Array<ShipmentItemAttribute>;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    shipping?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    shippingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    shippingTax?: number;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    sku?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    stockValidationStatus?: string;
    /**
     * 
     * @type {FulfillmentAPISubstituteInfo}
     * @memberof TransferredItem
     */
    substituteInfo?: FulfillmentAPISubstituteInfo;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    substituteQuantity?: number;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    substitutionType?: TransferredItemSubstitutionTypeEnum;
    /**
     * 
     * @type {object}
     * @memberof TransferredItem
     */
    taxData?: object;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    taxableHandling?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    taxableLineItemCost?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    taxableShipping?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    timeFenceDays?: number;
    /**
     * This is deprecated.
     * @type {number}
     * @memberof TransferredItem
     */
    transferQuantity?: number;
    /**
     * This is the actual quantity transferred.
     * @type {number}
     * @memberof TransferredItem
     */
    trueTransferQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    unitPrice?: number;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    upc?: string;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    validatedQuantity?: number;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    variationProductCode?: string;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    weight?: number;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    weightUnit?: string;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    weightedDutyAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    weightedHandlingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    weightedHandlingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    weightedLineItemTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    weightedOrderHandlingFee?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    weightedOrderHandlingFeeDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    weightedOrderHandlingFeeTax?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    weightedShipmentAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    weightedShippingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    weightedShippingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    width?: number;
}


/**
 * @export
 */
export const TransferredItemGoodsTypeEnum = {
    Physical: 'Physical',
    Digital: 'Digital',
    DigitalCredit: 'DigitalCredit',
    DigitalGiftCard: 'DigitalGiftCard',
    Service: 'Service'
} as const;
export type TransferredItemGoodsTypeEnum = typeof TransferredItemGoodsTypeEnum[keyof typeof TransferredItemGoodsTypeEnum];

/**
 * @export
 */
export const TransferredItemPriceModeEnum = {
    Internal: 'Internal',
    External: 'External'
} as const;
export type TransferredItemPriceModeEnum = typeof TransferredItemPriceModeEnum[keyof typeof TransferredItemPriceModeEnum];

/**
 * @export
 */
export const TransferredItemSubstitutionTypeEnum = {
    PreFulfillment: 'PRE_FULFILLMENT',
    AtFulfillment: 'AT_FULFILLMENT'
} as const;
export type TransferredItemSubstitutionTypeEnum = typeof TransferredItemSubstitutionTypeEnum[keyof typeof TransferredItemSubstitutionTypeEnum];

/**
 * 
 * @export
 * @interface TransferredReason
 */
export interface TransferredReason {
    /**
     * 
     * @type {string}
     * @memberof TransferredReason
     */
    moreInfo?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferredReason
     */
    reasonCode?: string;
}
/**
 * 
 * @export
 * @interface UpcQuantity
 */
export interface UpcQuantity {
    /**
     * 
     * @type {number}
     * @memberof UpcQuantity
     */
    shipmentQuantity?: number;
    /**
     * 
     * @type {string}
     * @memberof UpcQuantity
     */
    upc?: string;
}
/**
 * 
 * @export
 * @interface UpdateContactRequest
 */
export interface UpdateContactRequest {
    /**
     * 
     * @type {FulfillmentAPIContact}
     * @memberof UpdateContactRequest
     */
    contact?: FulfillmentAPIContact;
}
/**
 * 
 * @export
 * @interface UpdatePrioritiesDto
 */
export interface UpdatePrioritiesDto {
    /**
     * 
     * @type {string}
     * @memberof UpdatePrioritiesDto
     */
    locationCode?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdatePrioritiesDto
     */
    moreInfo?: string;
    /**
     * 
     * @type {Array<PriorityAssignment>}
     * @memberof UpdatePrioritiesDto
     */
    priorities?: Array<PriorityAssignment>;
    /**
     * 
     * @type {string}
     * @memberof UpdatePrioritiesDto
     */
    reasonCode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UpdatePrioritiesDto
     */
    resetOrphanedPriorities?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UpdatePrioritiesDto
     */
    ruleType?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdatePrioritiesDto
     */
    shipmentStatus?: string;
}
/**
 * 
 * @export
 * @interface UpdatePrioritiesResponseDto
 */
export interface UpdatePrioritiesResponseDto {
    /**
     * 
     * @type {Array<PriorityResult>}
     * @memberof UpdatePrioritiesResponseDto
     */
    results?: Array<PriorityResult>;
    /**
     * 
     * @type {number}
     * @memberof UpdatePrioritiesResponseDto
     */
    shipmentsReset?: number;
    /**
     * 
     * @type {number}
     * @memberof UpdatePrioritiesResponseDto
     */
    shipmentsUnchanged?: number;
    /**
     * 
     * @type {number}
     * @memberof UpdatePrioritiesResponseDto
     */
    shipmentsUpdated?: number;
}
/**
 * 
 * @export
 * @interface UriTemplate
 */
export interface UriTemplate {
    /**
     * 
     * @type {Array<string>}
     * @memberof UriTemplate
     */
    variableNames?: Array<string>;
    /**
     * 
     * @type {Array<TemplateVariable>}
     * @memberof UriTemplate
     */
    variables?: Array<TemplateVariable>;
}
/**
 * 
 * @export
 * @interface ValidatePackageItemEntry
 */
export interface ValidatePackageItemEntry {
    /**
     * 
     * @type {number}
     * @memberof ValidatePackageItemEntry
     */
    lineId?: number;
    /**
     * 
     * @type {number}
     * @memberof ValidatePackageItemEntry
     */
    quantity?: number;
    /**
     * 
     * @type {Array<SubstituteItem>}
     * @memberof ValidatePackageItemEntry
     */
    substituteItems?: Array<SubstituteItem>;
}
/**
 * 
 * @export
 * @interface ValidatePackageReceipt
 */
export interface ValidatePackageReceipt {
    /**
     * 
     * @type {Array<ValidatePackageItemEntry>}
     * @memberof ValidatePackageReceipt
     */
    items?: Array<ValidatePackageItemEntry>;
}
/**
 * 
 * @export
 * @interface ValidateStockItem
 */
export interface ValidateStockItem {
    /**
     * 
     * @type {Array<SubstituteItem>}
     * @memberof ValidateStockItem
     */
    substituteItems?: Array<SubstituteItem>;
    /**
     * 
     * @type {number}
     * @memberof ValidateStockItem
     */
    validatedQuantity?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ValidateStockItem
     */
    validationComplete?: boolean;
}
/**
 * 
 * @export
 * @interface WorkflowProcessVariable
 */
export interface WorkflowProcessVariable {
    /**
     * 
     * @type {string}
     * @memberof WorkflowProcessVariable
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkflowProcessVariable
     */
    type?: WorkflowProcessVariableTypeEnum;
}


/**
 * @export
 */
export const WorkflowProcessVariableTypeEnum = {
    String: 'STRING',
    Integer: 'INTEGER',
    Number: 'NUMBER',
    Boolean: 'BOOLEAN',
    Object: 'OBJECT',
    List: 'LIST',
    Unknown: 'UNKNOWN'
} as const;
export type WorkflowProcessVariableTypeEnum = typeof WorkflowProcessVariableTypeEnum[keyof typeof WorkflowProcessVariableTypeEnum];

