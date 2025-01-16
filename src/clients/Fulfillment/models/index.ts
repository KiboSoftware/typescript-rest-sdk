/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface AddressDto
 */
export interface AddressDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof AddressDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof AddressDto
     */
    address1?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressDto
     */
    address2?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressDto
     */
    address3?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressDto
     */
    address4?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressDto
     */
    addressType?: AddressDtoAddressTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AddressDto
     */
    cityOrTown?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressDto
     */
    countryCode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AddressDto
     */
    isValidated?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AddressDto
     */
    postalOrZipCode?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressDto
     */
    stateOrProvince?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressDto
     */
    latitude?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressDto
     */
    longitude?: string;
}


/**
 * @export
 */
export const AddressDtoAddressTypeEnum = {
    Commercial: 'Commercial',
    Residential: 'Residential'
} as const;
export type AddressDtoAddressTypeEnum = typeof AddressDtoAddressTypeEnum[keyof typeof AddressDtoAddressTypeEnum];

/**
 * 
 * @export
 * @interface AppeasementReasonDto
 */
export interface AppeasementReasonDto {
    /**
     * 
     * @type {string}
     * @memberof AppeasementReasonDto
     */
    reasonCode?: string;
    /**
     * 
     * @type {string}
     * @memberof AppeasementReasonDto
     */
    moreInfo?: string;
}
/**
 * 
 * @export
 * @interface AuditInfoDto
 */
export interface AuditInfoDto {
    /**
     * 
     * @type {string}
     * @memberof AuditInfoDto
     */
    updateDate?: string;
    /**
     * 
     * @type {string}
     * @memberof AuditInfoDto
     */
    createDate?: string;
    /**
     * 
     * @type {string}
     * @memberof AuditInfoDto
     */
    updateBy?: string;
    /**
     * 
     * @type {string}
     * @memberof AuditInfoDto
     */
    createBy?: string;
}
/**
 * 
 * @export
 * @interface BackorderItemDto
 */
export interface BackorderItemDto {
    /**
     * 
     * @type {number}
     * @memberof BackorderItemDto
     */
    lineId: number;
    /**
     * 
     * @type {number}
     * @memberof BackorderItemDto
     */
    quantity: number;
    /**
     * 
     * @type {string}
     * @memberof BackorderItemDto
     */
    backorderReleaseDate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BackorderItemDto
     */
    blockAssignment?: boolean;
}
/**
 * 
 * @export
 * @interface BackorderItemUpdateDto
 */
export interface BackorderItemUpdateDto {
    /**
     * 
     * @type {number}
     * @memberof BackorderItemUpdateDto
     */
    lineId: number;
    /**
     * 
     * @type {string}
     * @memberof BackorderItemUpdateDto
     */
    backorderReleaseDate?: string;
}
/**
 * 
 * @export
 * @interface BackorderItemsRequestDto
 */
export interface BackorderItemsRequestDto {
    /**
     * 
     * @type {boolean}
     * @memberof BackorderItemsRequestDto
     */
    isUserAction?: boolean;
    /**
     * 
     * @type {Array<BackorderItemDto>}
     * @memberof BackorderItemsRequestDto
     */
    items: Array<BackorderItemDto>;
}
/**
 * 
 * @export
 * @interface BackorderItemsUpdateRequestDto
 */
export interface BackorderItemsUpdateRequestDto {
    /**
     * 
     * @type {Array<BackorderItemUpdateDto>}
     * @memberof BackorderItemsUpdateRequestDto
     */
    items: Array<BackorderItemUpdateDto>;
}
/**
 * 
 * @export
 * @interface BackorderShipmentRequestDto
 */
export interface BackorderShipmentRequestDto {
    /**
     * 
     * @type {string}
     * @memberof BackorderShipmentRequestDto
     */
    backorderReleaseDate?: string;
}
/**
 * 
 * @export
 * @interface BinShipmentProductQuantityDto
 */
export interface BinShipmentProductQuantityDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof BinShipmentProductQuantityDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof BinShipmentProductQuantityDto
     */
    binName: string;
    /**
     * 
     * @type {number}
     * @memberof BinShipmentProductQuantityDto
     */
    shipmentNumber: number;
    /**
     * 
     * @type {string}
     * @memberof BinShipmentProductQuantityDto
     */
    productCode?: string;
    /**
     * 
     * @type {string}
     * @memberof BinShipmentProductQuantityDto
     */
    variationProductCode?: string;
    /**
     * 
     * @type {number}
     * @memberof BinShipmentProductQuantityDto
     */
    actualQuantity: number;
}
/**
 * 
 * @export
 * @interface BlockActionsRequest
 */
export interface BlockActionsRequest {
    /**
     * 
     * @type {Set<string>}
     * @memberof BlockActionsRequest
     */
    blockedActions?: Set<string>;
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
 * @interface BpmVariableDto
 */
export interface BpmVariableDto {
    /**
     * 
     * @type {string}
     * @memberof BpmVariableDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof BpmVariableDto
     */
    oldValue?: string;
    /**
     * 
     * @type {string}
     * @memberof BpmVariableDto
     */
    value?: string;
    /**
     * 
     * @type {string}
     * @memberof BpmVariableDto
     */
    updateDate?: string;
}
/**
 * 
 * @export
 * @interface BundleInfoDto
 */
export interface BundleInfoDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof BundleInfoDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof BundleInfoDto
     */
    productCode?: string;
    /**
     * 
     * @type {string}
     * @memberof BundleInfoDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof BundleInfoDto
     */
    imageUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof BundleInfoDto
     */
    unitPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof BundleInfoDto
     */
    quantity?: number;
}
/**
 * 
 * @export
 * @interface BundledProductDto
 */
export interface BundledProductDto {
    /**
     * 
     * @type {string}
     * @memberof BundledProductDto
     */
    productCode?: string;
    /**
     * 
     * @type {string}
     * @memberof BundledProductDto
     */
    variationProductCode?: string;
    /**
     * 
     * @type {string}
     * @memberof BundledProductDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof BundledProductDto
     */
    imageUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof BundledProductDto
     */
    quantity?: number;
    /**
     * 
     * @type {number}
     * @memberof BundledProductDto
     */
    availableInventory?: number;
}
/**
 * 
 * @export
 * @interface CancelItemDto
 */
export interface CancelItemDto {
    /**
     * 
     * @type {number}
     * @memberof CancelItemDto
     */
    lineId: number;
    /**
     * 
     * @type {number}
     * @memberof CancelItemDto
     */
    quantity: number;
    /**
     * 
     * @type {CanceledReasonDto}
     * @memberof CancelItemDto
     */
    canceledReason?: CanceledReasonDto;
}
/**
 * 
 * @export
 * @interface CancelItemsRequestDto
 */
export interface CancelItemsRequestDto {
    /**
     * 
     * @type {boolean}
     * @memberof CancelItemsRequestDto
     */
    isUserAction?: boolean;
    /**
     * 
     * @type {Array<CancelItemDto>}
     * @memberof CancelItemsRequestDto
     */
    items: Array<CancelItemDto>;
    /**
     * 
     * @type {boolean}
     * @memberof CancelItemsRequestDto
     */
    sendNotifications?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CancelItemsRequestDto
     */
    blockAssignment?: boolean;
}
/**
 * 
 * @export
 * @interface CancelShipmentRequestDto
 */
export interface CancelShipmentRequestDto {
    /**
     * 
     * @type {CanceledReasonDto}
     * @memberof CancelShipmentRequestDto
     */
    canceledReason?: CanceledReasonDto;
    /**
     * 
     * @type {boolean}
     * @memberof CancelShipmentRequestDto
     */
    sendNotifications?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CancelShipmentRequestDto
     */
    blockAssignment?: boolean;
}
/**
 * 
 * @export
 * @interface CanceledItemDto
 */
export interface CanceledItemDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof CanceledItemDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {number}
     * @memberof CanceledItemDto
     */
    lineId: number;
    /**
     * 
     * @type {string}
     * @memberof CanceledItemDto
     */
    originalOrderItemId?: string;
    /**
     * 
     * @type {string}
     * @memberof CanceledItemDto
     */
    goodsType?: CanceledItemDtoGoodsTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CanceledItemDto
     */
    optionAttributeFQN?: string;
    /**
     * 
     * @type {string}
     * @memberof CanceledItemDto
     */
    productCode?: string;
    /**
     * 
     * @type {string}
     * @memberof CanceledItemDto
     */
    variationProductCode?: string;
    /**
     * 
     * @type {number}
     * @memberof CanceledItemDto
     */
    quantity: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItemDto
     */
    transferQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItemDto
     */
    trueTransferQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItemDto
     */
    readyForPickupQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItemDto
     */
    allocatedQuantity?: number;
    /**
     * 
     * @type {string}
     * @memberof CanceledItemDto
     */
    imageUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof CanceledItemDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CanceledItemDto
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof CanceledItemDto
     */
    upc?: string;
    /**
     * 
     * @type {string}
     * @memberof CanceledItemDto
     */
    sku?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CanceledItemDto
     */
    allowsBackOrder?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CanceledItemDto
     */
    unitPrice?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CanceledItemDto
     */
    isTaxable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CanceledItemDto
     */
    actualPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItemDto
     */
    overridePrice?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItemDto
     */
    itemDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItemDto
     */
    lineItemCost?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItemDto
     */
    itemTax: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItemDto
     */
    shipping: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItemDto
     */
    shippingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItemDto
     */
    shippingTax: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItemDto
     */
    handling: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItemDto
     */
    handlingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItemDto
     */
    handlingTax: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItemDto
     */
    duty?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItemDto
     */
    weightedShipmentAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItemDto
     */
    weightedLineItemTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItemDto
     */
    weightedShippingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItemDto
     */
    weightedShippingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItemDto
     */
    weightedHandlingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItemDto
     */
    weightedHandlingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItemDto
     */
    weightedDutyAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItemDto
     */
    taxableShipping?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItemDto
     */
    taxableLineItemCost?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItemDto
     */
    taxableHandling?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItemDto
     */
    weight?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItemDto
     */
    length?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItemDto
     */
    width?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItemDto
     */
    height?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItemDto
     */
    lineItemAdjustment?: number;
    /**
     * 
     * @type {string}
     * @memberof CanceledItemDto
     */
    weightUnit?: string;
    /**
     * 
     * @type {string}
     * @memberof CanceledItemDto
     */
    expectedDeliveryDate?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof CanceledItemDto
     */
    data?: { [key: string]: object; };
    /**
     * 
     * @type {object}
     * @memberof CanceledItemDto
     */
    taxData?: object;
    /**
     * 
     * @type {string}
     * @memberof CanceledItemDto
     */
    backorderReleaseDate?: string;
    /**
     * 
     * @type {AuditInfoDto}
     * @memberof CanceledItemDto
     */
    auditInfo?: AuditInfoDto;
    /**
     * 
     * @type {Array<ProductOptionDto>}
     * @memberof CanceledItemDto
     */
    options?: Array<ProductOptionDto>;
    /**
     * 
     * @type {boolean}
     * @memberof CanceledItemDto
     */
    manageStock?: boolean;
    /**
     * 
     * @type {Array<FulfillmentFieldDto>}
     * @memberof CanceledItemDto
     */
    fulfillmentFields?: Array<FulfillmentFieldDto>;
    /**
     * 
     * @type {string}
     * @memberof CanceledItemDto
     */
    locatorName?: string;
    /**
     * 
     * @type {AppeasementReasonDto}
     * @memberof CanceledItemDto
     * @deprecated
     */
    appeasementReason?: AppeasementReasonDto;
    /**
     * 
     * @type {string}
     * @memberof CanceledItemDto
     */
    creditCurrencyCode?: string;
    /**
     * 
     * @type {number}
     * @memberof CanceledItemDto
     */
    creditValue?: number;
    /**
     * 
     * @type {Array<GiftCardDto>}
     * @memberof CanceledItemDto
     */
    giftCards?: Array<GiftCardDto>;
    /**
     * 
     * @type {boolean}
     * @memberof CanceledItemDto
     */
    isAssemblyRequired?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CanceledItemDto
     */
    parentItemId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CanceledItemDto
     */
    childItemIds?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof CanceledItemDto
     */
    isPackagedStandAlone?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CanceledItemDto
     */
    allowsFutureAllocate?: boolean;
    /**
     * 
     * @type {Array<InventoryTagDto>}
     * @memberof CanceledItemDto
     */
    inventoryTags?: Array<InventoryTagDto>;
    /**
     * 
     * @type {string}
     * @memberof CanceledItemDto
     */
    cartItemId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CanceledItemDto
     */
    isReservedInventory?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CanceledItemDto
     */
    allowsSubstitution?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CanceledItemDto
     */
    originalQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItemDto
     */
    originalLineId?: number;
    /**
     * 
     * @type {number}
     * @memberof CanceledItemDto
     */
    substituteQuantity?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CanceledItemDto
     */
    isGift?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CanceledItemDto
     */
    giftMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof CanceledItemDto
     */
    purchaseLocation?: string;
    /**
     * 
     * @type {string}
     * @memberof CanceledItemDto
     */
    priceMode?: CanceledItemDtoPriceModeEnum;
    /**
     * 
     * @type {string}
     * @memberof CanceledItemDto
     */
    condition?: string;
    /**
     * 
     * @type {string}
     * @memberof CanceledItemDto
     */
    serialNumber?: string;
    /**
     * 
     * @type {Array<InventoryAllocationDto>}
     * @memberof CanceledItemDto
     */
    inventoryAllocations?: Array<InventoryAllocationDto>;
    /**
     * 
     * @type {SubstituteInfoDto}
     * @memberof CanceledItemDto
     */
    substituteInfo?: SubstituteInfoDto;
    /**
     * 
     * @type {boolean}
     * @memberof CanceledItemDto
     */
    autoSubstitution?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CanceledItemDto
     */
    substitutionType?: CanceledItemDtoSubstitutionTypeEnum;
    /**
     * 
     * @type {BundleInfoDto}
     * @memberof CanceledItemDto
     */
    bundleInfo?: BundleInfoDto;
    /**
     * 
     * @type {ReturnRuleInfoDto}
     * @memberof CanceledItemDto
     */
    returnRuleInfo?: ReturnRuleInfoDto;
    /**
     * 
     * @type {CanceledReasonDto}
     * @memberof CanceledItemDto
     */
    canceledReason?: CanceledReasonDto;
    /**
     * 
     * @type {boolean}
     * @memberof CanceledItemDto
     */
    blockAssignment?: boolean;
}


/**
 * @export
 */
export const CanceledItemDtoGoodsTypeEnum = {
    Physical: 'Physical',
    Digital: 'Digital',
    DigitalCredit: 'DigitalCredit',
    DigitalGiftCard: 'DigitalGiftCard',
    Service: 'Service'
} as const;
export type CanceledItemDtoGoodsTypeEnum = typeof CanceledItemDtoGoodsTypeEnum[keyof typeof CanceledItemDtoGoodsTypeEnum];

/**
 * @export
 */
export const CanceledItemDtoPriceModeEnum = {
    Internal: 'Internal',
    External: 'External'
} as const;
export type CanceledItemDtoPriceModeEnum = typeof CanceledItemDtoPriceModeEnum[keyof typeof CanceledItemDtoPriceModeEnum];

/**
 * @export
 */
export const CanceledItemDtoSubstitutionTypeEnum = {
    PreFulfillment: 'PRE_FULFILLMENT',
    AtFullfillment: 'AT_FULLFILLMENT'
} as const;
export type CanceledItemDtoSubstitutionTypeEnum = typeof CanceledItemDtoSubstitutionTypeEnum[keyof typeof CanceledItemDtoSubstitutionTypeEnum];

/**
 * 
 * @export
 * @interface CanceledReasonDto
 */
export interface CanceledReasonDto {
    /**
     * 
     * @type {string}
     * @memberof CanceledReasonDto
     */
    reasonCode?: string;
    /**
     * 
     * @type {string}
     * @memberof CanceledReasonDto
     */
    moreInfo?: string;
}
/**
 * 
 * @export
 * @interface ChangeMessageDto
 */
export interface ChangeMessageDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof ChangeMessageDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof ChangeMessageDto
     */
    changeMessageId?: string;
    /**
     * 
     * @type {number}
     * @memberof ChangeMessageDto
     */
    amount?: number;
    /**
     * 
     * @type {string}
     * @memberof ChangeMessageDto
     */
    appId?: string;
    /**
     * 
     * @type {string}
     * @memberof ChangeMessageDto
     */
    appKey?: string;
    /**
     * 
     * @type {string}
     * @memberof ChangeMessageDto
     */
    appName?: string;
    /**
     * 
     * @type {string}
     * @memberof ChangeMessageDto
     */
    createdDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ChangeMessageDto
     */
    correlationId?: string;
    /**
     * 
     * @type {string}
     * @memberof ChangeMessageDto
     */
    identifier?: string;
    /**
     * 
     * @type {string}
     * @memberof ChangeMessageDto
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof ChangeMessageDto
     */
    oldValue?: string;
    /**
     * 
     * @type {string}
     * @memberof ChangeMessageDto
     */
    newValue?: string;
    /**
     * 
     * @type {string}
     * @memberof ChangeMessageDto
     */
    subject?: string;
    /**
     * 
     * @type {string}
     * @memberof ChangeMessageDto
     */
    subjectType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ChangeMessageDto
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ChangeMessageDto
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof ChangeMessageDto
     */
    userFirstName?: string;
    /**
     * 
     * @type {string}
     * @memberof ChangeMessageDto
     */
    userLastName?: string;
    /**
     * 
     * @type {string}
     * @memberof ChangeMessageDto
     */
    userDisplayName?: string;
    /**
     * 
     * @type {string}
     * @memberof ChangeMessageDto
     */
    verb?: string;
    /**
     * 
     * @type {AppeasementReasonDto}
     * @memberof ChangeMessageDto
     * @deprecated
     */
    appeasementReason?: AppeasementReasonDto;
    /**
     * 
     * @type {string}
     * @memberof ChangeMessageDto
     * @deprecated
     */
    metadata?: string;
}
/**
 * 
 * @export
 * @interface ClosePickWaveDto
 */
export interface ClosePickWaveDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof ClosePickWaveDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {Array<BinShipmentProductQuantityDto>}
     * @memberof ClosePickWaveDto
     */
    quantities: Array<BinShipmentProductQuantityDto>;
    /**
     * 
     * @type {boolean}
     * @memberof ClosePickWaveDto
     */
    createRecovery?: boolean;
}
/**
 * 
 * @export
 * @interface CollectionModelEntityModelCustomerSurveyDto
 */
export interface CollectionModelEntityModelCustomerSurveyDto {
    /**
     * 
     * @type {CollectionModelEntityModelCustomerSurveyDtoEmbedded}
     * @memberof CollectionModelEntityModelCustomerSurveyDto
     */
    embedded?: CollectionModelEntityModelCustomerSurveyDtoEmbedded;
    /**
     * 
     * @type {{ [key: string]: FulfillmentLink; }}
     * @memberof CollectionModelEntityModelCustomerSurveyDto
     */
    links?: { [key: string]: FulfillmentLink; };
}
/**
 * 
 * @export
 * @interface CollectionModelEntityModelCustomerSurveyDtoEmbedded
 */
export interface CollectionModelEntityModelCustomerSurveyDtoEmbedded {
    /**
     * 
     * @type {Array<EntityModelCustomerSurveyDto>}
     * @memberof CollectionModelEntityModelCustomerSurveyDtoEmbedded
     */
    customerSurveys?: Array<EntityModelCustomerSurveyDto>;
}
/**
 * 
 * @export
 * @interface CollectionModelEntityModelShipmentDto
 */
export interface CollectionModelEntityModelShipmentDto {
    /**
     * 
     * @type {CollectionModelEntityModelShipmentDtoEmbedded}
     * @memberof CollectionModelEntityModelShipmentDto
     */
    embedded?: CollectionModelEntityModelShipmentDtoEmbedded;
    /**
     * 
     * @type {{ [key: string]: FulfillmentLink; }}
     * @memberof CollectionModelEntityModelShipmentDto
     */
    links?: { [key: string]: FulfillmentLink; };
}
/**
 * 
 * @export
 * @interface CollectionModelEntityModelShipmentDtoEmbedded
 */
export interface CollectionModelEntityModelShipmentDtoEmbedded {
    /**
     * 
     * @type {Array<EntityModelShipmentDto>}
     * @memberof CollectionModelEntityModelShipmentDtoEmbedded
     */
    shipments?: Array<EntityModelShipmentDto>;
}
/**
 * 
 * @export
 * @interface CollectionModelLocationSummaryDto
 */
export interface CollectionModelLocationSummaryDto {
    /**
     * 
     * @type {CollectionModelLocationSummaryDtoEmbedded}
     * @memberof CollectionModelLocationSummaryDto
     */
    embedded?: CollectionModelLocationSummaryDtoEmbedded;
    /**
     * 
     * @type {{ [key: string]: FulfillmentLink; }}
     * @memberof CollectionModelLocationSummaryDto
     */
    links?: { [key: string]: FulfillmentLink; };
}
/**
 * 
 * @export
 * @interface CollectionModelLocationSummaryDtoEmbedded
 */
export interface CollectionModelLocationSummaryDtoEmbedded {
    /**
     * 
     * @type {Array<LocationSummaryDto>}
     * @memberof CollectionModelLocationSummaryDtoEmbedded
     */
    locationSummaries?: Array<LocationSummaryDto>;
}
/**
 * 
 * @export
 * @interface CollectionModelManifestDto
 */
export interface CollectionModelManifestDto {
    /**
     * 
     * @type {CollectionModelManifestDtoEmbedded}
     * @memberof CollectionModelManifestDto
     */
    embedded?: CollectionModelManifestDtoEmbedded;
    /**
     * 
     * @type {{ [key: string]: FulfillmentLink; }}
     * @memberof CollectionModelManifestDto
     */
    links?: { [key: string]: FulfillmentLink; };
}
/**
 * 
 * @export
 * @interface CollectionModelManifestDtoEmbedded
 */
export interface CollectionModelManifestDtoEmbedded {
    /**
     * 
     * @type {Array<ManifestDto>}
     * @memberof CollectionModelManifestDtoEmbedded
     */
    manifests?: Array<ManifestDto>;
}
/**
 * 
 * @export
 * @interface CollectionModelPickWaveDto
 */
export interface CollectionModelPickWaveDto {
    /**
     * 
     * @type {CollectionModelPickWaveDtoEmbedded}
     * @memberof CollectionModelPickWaveDto
     */
    embedded?: CollectionModelPickWaveDtoEmbedded;
    /**
     * 
     * @type {{ [key: string]: FulfillmentLink; }}
     * @memberof CollectionModelPickWaveDto
     */
    links?: { [key: string]: FulfillmentLink; };
}
/**
 * 
 * @export
 * @interface CollectionModelPickWaveDtoEmbedded
 */
export interface CollectionModelPickWaveDtoEmbedded {
    /**
     * 
     * @type {Array<PickWaveDto>}
     * @memberof CollectionModelPickWaveDtoEmbedded
     */
    pickWaves?: Array<PickWaveDto>;
}
/**
 * 
 * @export
 * @interface CollectionModelShipmentDto
 */
export interface CollectionModelShipmentDto {
    /**
     * 
     * @type {CollectionModelShipmentDtoEmbedded}
     * @memberof CollectionModelShipmentDto
     */
    embedded?: CollectionModelShipmentDtoEmbedded;
    /**
     * 
     * @type {{ [key: string]: FulfillmentLink; }}
     * @memberof CollectionModelShipmentDto
     */
    links?: { [key: string]: FulfillmentLink; };
}
/**
 * 
 * @export
 * @interface CollectionModelShipmentDtoEmbedded
 */
export interface CollectionModelShipmentDtoEmbedded {
    /**
     * 
     * @type {Array<ShipmentDto>}
     * @memberof CollectionModelShipmentDtoEmbedded
     */
    shipments?: Array<ShipmentDto>;
}
/**
 * 
 * @export
 * @interface CollectionModelSubstitutableItemResponseDto
 */
export interface CollectionModelSubstitutableItemResponseDto {
    /**
     * 
     * @type {CollectionModelSubstitutableItemResponseDtoEmbedded}
     * @memberof CollectionModelSubstitutableItemResponseDto
     */
    embedded?: CollectionModelSubstitutableItemResponseDtoEmbedded;
    /**
     * 
     * @type {{ [key: string]: FulfillmentLink; }}
     * @memberof CollectionModelSubstitutableItemResponseDto
     */
    links?: { [key: string]: FulfillmentLink; };
}
/**
 * 
 * @export
 * @interface CollectionModelSubstitutableItemResponseDtoEmbedded
 */
export interface CollectionModelSubstitutableItemResponseDtoEmbedded {
    /**
     * 
     * @type {Array<SubstitutableItemResponseDto>}
     * @memberof CollectionModelSubstitutableItemResponseDtoEmbedded
     */
    substitutableItems?: Array<SubstitutableItemResponseDto>;
}
/**
 * 
 * @export
 * @interface ContactDto
 */
export interface ContactDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof ContactDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {number}
     * @memberof ContactDto
     */
    id?: number;
    /**
     * 
     * @type {AddressDto}
     * @memberof ContactDto
     */
    address?: AddressDto;
    /**
     * 
     * @type {string}
     * @memberof ContactDto
     */
    companyOrOrganization?: string;
    /**
     * 
     * @type {string}
     * @memberof ContactDto
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof ContactDto
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof ContactDto
     */
    lastNameOrSurname?: string;
    /**
     * 
     * @type {string}
     * @memberof ContactDto
     */
    middleNameOrInitial?: string;
    /**
     * 
     * @type {string}
     * @memberof ContactDto
     */
    shortFullName?: string;
    /**
     * 
     * @type {string}
     * @memberof ContactDto
     */
    fullName?: string;
    /**
     * 
     * @type {PhoneDto}
     * @memberof ContactDto
     */
    phoneNumbers?: PhoneDto;
}
/**
 * 
 * @export
 * @interface ContentGroupDto
 */
export interface ContentGroupDto {
    /**
     * 
     * @type {string}
     * @memberof ContentGroupDto
     */
    productCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentGroupDto
     */
    upc?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentGroupDto
     */
    imageUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentGroupDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentGroupDto
     */
    locatorName?: string;
    /**
     * 
     * @type {number}
     * @memberof ContentGroupDto
     */
    quantity?: number;
    /**
     * 
     * @type {Array<PickWaveContent>}
     * @memberof ContentGroupDto
     */
    contents?: Array<PickWaveContent>;
    /**
     * 
     * @type {FulfillmentAuditInfo}
     * @memberof ContentGroupDto
     */
    auditInfo?: FulfillmentAuditInfo;
}
/**
 * 
 * @export
 * @interface CreatePickWaveDto
 */
export interface CreatePickWaveDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof CreatePickWaveDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof CreatePickWaveDto
     */
    fulfillmentLocationCode: string;
    /**
     * 
     * @type {string}
     * @memberof CreatePickWaveDto
     */
    shipmentType: CreatePickWaveDtoShipmentTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof CreatePickWaveDto
     */
    maxShipments: number;
    /**
     * 
     * @type {string}
     * @memberof CreatePickWaveDto
     */
    pickWaveType?: CreatePickWaveDtoPickWaveTypeEnum;
    /**
     * 
     * @type {Array<PickWaveBinRangeDto>}
     * @memberof CreatePickWaveDto
     */
    binRanges?: Array<PickWaveBinRangeDto>;
    /**
     * 
     * @type {Array<PickWaveProductMatchDto>}
     * @memberof CreatePickWaveDto
     */
    products?: Array<PickWaveProductMatchDto>;
    /**
     * 
     * @type {string}
     * @memberof CreatePickWaveDto
     */
    shippingOption?: CreatePickWaveDtoShippingOptionEnum;
    /**
     * 
     * @type {string}
     * @memberof CreatePickWaveDto
     */
    shipmentDateStart?: string;
    /**
     * 
     * @type {string}
     * @memberof CreatePickWaveDto
     */
    shipmentDateEnd?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreatePickWaveDto
     */
    lockWave?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreatePickWaveDto
     */
    includeZeroInventory?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreatePickWaveDto
     */
    allowEmptyWave?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreatePickWaveDto
     */
    fulfillableShipmentsOnly?: boolean;
}


/**
 * @export
 */
export const CreatePickWaveDtoShipmentTypeEnum = {
    Sth: 'STH',
    Bopis: 'BOPIS'
} as const;
export type CreatePickWaveDtoShipmentTypeEnum = typeof CreatePickWaveDtoShipmentTypeEnum[keyof typeof CreatePickWaveDtoShipmentTypeEnum];

/**
 * @export
 */
export const CreatePickWaveDtoPickWaveTypeEnum = {
    Normal: 'NORMAL',
    Single: 'SINGLE',
    Multiple: 'MULTIPLE'
} as const;
export type CreatePickWaveDtoPickWaveTypeEnum = typeof CreatePickWaveDtoPickWaveTypeEnum[keyof typeof CreatePickWaveDtoPickWaveTypeEnum];

/**
 * @export
 */
export const CreatePickWaveDtoShippingOptionEnum = {
    StandardOnly: 'STANDARD_ONLY',
    ExpressOnly: 'EXPRESS_ONLY',
    All: 'ALL'
} as const;
export type CreatePickWaveDtoShippingOptionEnum = typeof CreatePickWaveDtoShippingOptionEnum[keyof typeof CreatePickWaveDtoShippingOptionEnum];

/**
 * 
 * @export
 * @interface CustomerDto
 */
export interface CustomerDto {
    /**
     * 
     * @type {ContactDto}
     * @memberof CustomerDto
     */
    customerContact?: ContactDto;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerDto
     */
    isDestinationCommercial?: boolean;
    /**
     * 
     * @type {object}
     * @memberof CustomerDto
     */
    data?: object;
}
/**
 * 
 * @export
 * @interface CustomerSurveyDto
 */
export interface CustomerSurveyDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof CustomerSurveyDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof CustomerSurveyDto
     */
    id?: string;
    /**
     * 
     * @type {number}
     * @memberof CustomerSurveyDto
     */
    shipmentNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerSurveyDto
     */
    tenantId?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerSurveyDto
     */
    siteId?: number;
    /**
     * 
     * @type {Array<CustomerSurveyEntryDto>}
     * @memberof CustomerSurveyDto
     */
    entries?: Array<CustomerSurveyEntryDto>;
    /**
     * 
     * @type {AuditInfoDto}
     * @memberof CustomerSurveyDto
     */
    auditInfo?: AuditInfoDto;
}
/**
 * 
 * @export
 * @interface CustomerSurveyEntryDto
 */
export interface CustomerSurveyEntryDto {
    /**
     * 
     * @type {string}
     * @memberof CustomerSurveyEntryDto
     */
    question?: string;
    /**
     * 
     * @type {object}
     * @memberof CustomerSurveyEntryDto
     */
    answer?: object;
}
/**
 * 
 * @export
 * @interface DashboardStepDto
 */
export interface DashboardStepDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof DashboardStepDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof DashboardStepDto
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof DashboardStepDto
     */
    total?: number;
    /**
     * 
     * @type {{ [key: string]: FulfillmentLink; }}
     * @memberof DashboardStepDto
     */
    links?: { [key: string]: FulfillmentLink; };
}
/**
 * 
 * @export
 * @interface DestinationDto
 */
export interface DestinationDto {
    /**
     * 
     * @type {string}
     * @memberof DestinationDto
     */
    locationCode?: string;
    /**
     * 
     * @type {ContactDto}
     * @memberof DestinationDto
     */
    destinationContact?: ContactDto;
    /**
     * 
     * @type {boolean}
     * @memberof DestinationDto
     */
    isDestinationCommercial?: boolean;
    /**
     * 
     * @type {object}
     * @memberof DestinationDto
     */
    data?: object;
}
/**
 * 
 * @export
 * @interface EntityModelContactDto
 */
export interface EntityModelContactDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof EntityModelContactDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {number}
     * @memberof EntityModelContactDto
     */
    id?: number;
    /**
     * 
     * @type {AddressDto}
     * @memberof EntityModelContactDto
     */
    address?: AddressDto;
    /**
     * 
     * @type {string}
     * @memberof EntityModelContactDto
     */
    companyOrOrganization?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelContactDto
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelContactDto
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelContactDto
     */
    lastNameOrSurname?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelContactDto
     */
    middleNameOrInitial?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelContactDto
     */
    shortFullName?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelContactDto
     */
    fullName?: string;
    /**
     * 
     * @type {PhoneDto}
     * @memberof EntityModelContactDto
     */
    phoneNumbers?: PhoneDto;
    /**
     * 
     * @type {{ [key: string]: FulfillmentLink; }}
     * @memberof EntityModelContactDto
     */
    links?: { [key: string]: FulfillmentLink; };
}
/**
 * 
 * @export
 * @interface EntityModelCustomerSurveyDto
 */
export interface EntityModelCustomerSurveyDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof EntityModelCustomerSurveyDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof EntityModelCustomerSurveyDto
     */
    id?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityModelCustomerSurveyDto
     */
    shipmentNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelCustomerSurveyDto
     */
    tenantId?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelCustomerSurveyDto
     */
    siteId?: number;
    /**
     * 
     * @type {Array<CustomerSurveyEntryDto>}
     * @memberof EntityModelCustomerSurveyDto
     */
    entries?: Array<CustomerSurveyEntryDto>;
    /**
     * 
     * @type {AuditInfoDto}
     * @memberof EntityModelCustomerSurveyDto
     */
    auditInfo?: AuditInfoDto;
    /**
     * 
     * @type {{ [key: string]: FulfillmentLink; }}
     * @memberof EntityModelCustomerSurveyDto
     */
    links?: { [key: string]: FulfillmentLink; };
}
/**
 * 
 * @export
 * @interface EntityModelDashboardResponseDto
 */
export interface EntityModelDashboardResponseDto {
    /**
     * 
     * @type {string}
     * @memberof EntityModelDashboardResponseDto
     */
    shipmentType?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelDashboardResponseDto
     */
    shipmentTypeDisplayName?: string;
    /**
     * 
     * @type {Array<DashboardStepDto>}
     * @memberof EntityModelDashboardResponseDto
     */
    steps?: Array<DashboardStepDto>;
    /**
     * 
     * @type {{ [key: string]: FulfillmentLink; }}
     * @memberof EntityModelDashboardResponseDto
     */
    links?: { [key: string]: FulfillmentLink; };
}
/**
 * 
 * @export
 * @interface EntityModelManifestDto
 */
export interface EntityModelManifestDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof EntityModelManifestDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof EntityModelManifestDto
     */
    internalId?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityModelManifestDto
     */
    tenantId?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelManifestDto
     */
    locationCode?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelManifestDto
     */
    carrierId?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelManifestDto
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelManifestDto
     */
    userDisplayName?: string;
    /**
     * 
     * @type {AuditInfoDto}
     * @memberof EntityModelManifestDto
     */
    auditInfo?: AuditInfoDto;
    /**
     * 
     * @type {Array<ManifestShipmentDto>}
     * @memberof EntityModelManifestDto
     */
    shipments?: Array<ManifestShipmentDto>;
    /**
     * 
     * @type {number}
     * @memberof EntityModelManifestDto
     */
    numberOfShipments?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelManifestDto
     */
    numberOfPackages?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelManifestDto
     */
    manifestId?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelManifestDto
     */
    manifestUrl?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EntityModelManifestDto
     */
    isSuccessfulPreviously?: boolean;
    /**
     * 
     * @type {Array<ManifestShipmentDto>}
     * @memberof EntityModelManifestDto
     */
    shipmentsSuccessfulPreviously?: Array<ManifestShipmentDto>;
    /**
     * 
     * @type {{ [key: string]: FulfillmentLink; }}
     * @memberof EntityModelManifestDto
     */
    links?: { [key: string]: FulfillmentLink; };
}
/**
 * 
 * @export
 * @interface EntityModelPackageConsolidationCandidatesResponseDto
 */
export interface EntityModelPackageConsolidationCandidatesResponseDto {
    /**
     * 
     * @type {Array<PackageConsolidationSuggestionDto>}
     * @memberof EntityModelPackageConsolidationCandidatesResponseDto
     */
    suggestions?: Array<PackageConsolidationSuggestionDto>;
    /**
     * 
     * @type {{ [key: string]: FulfillmentLink; }}
     * @memberof EntityModelPackageConsolidationCandidatesResponseDto
     */
    links?: { [key: string]: FulfillmentLink; };
}
/**
 * 
 * @export
 * @interface EntityModelPackageConsolidationResponseDto
 */
export interface EntityModelPackageConsolidationResponseDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof EntityModelPackageConsolidationResponseDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof EntityModelPackageConsolidationResponseDto
     */
    shipmentConsolidationId?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelPackageConsolidationResponseDto
     */
    packageConsolidationId?: string;
    /**
     * 
     * @type {Array<PackageConsolidationDto>}
     * @memberof EntityModelPackageConsolidationResponseDto
     */
    packageConsolidations?: Array<PackageConsolidationDto>;
    /**
     * 
     * @type {{ [key: string]: FulfillmentLink; }}
     * @memberof EntityModelPackageConsolidationResponseDto
     */
    links?: { [key: string]: FulfillmentLink; };
}
/**
 * 
 * @export
 * @interface EntityModelPickWaveDetailDto
 */
export interface EntityModelPickWaveDetailDto {
    /**
     * 
     * @type {string}
     * @memberof EntityModelPickWaveDetailDto
     */
    pickWaveId?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityModelPickWaveDetailDto
     */
    tenantId?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelPickWaveDetailDto
     */
    pickWaveNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelPickWaveDetailDto
     */
    userDisplayName?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelPickWaveDetailDto
     */
    userId?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof EntityModelPickWaveDetailDto
     */
    shipmentNumbers?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof EntityModelPickWaveDetailDto
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelPickWaveDetailDto
     */
    pickWaveStatus?: EntityModelPickWaveDetailDtoPickWaveStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof EntityModelPickWaveDetailDto
     */
    pickType?: EntityModelPickWaveDetailDtoPickTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof EntityModelPickWaveDetailDto
     */
    maxShipments?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelPickWaveDetailDto
     */
    shipmentType?: string;
    /**
     * 
     * @type {Array<ContentGroupDto>}
     * @memberof EntityModelPickWaveDetailDto
     */
    contentGroups?: Array<ContentGroupDto>;
    /**
     * 
     * @type {AuditInfoDto}
     * @memberof EntityModelPickWaveDetailDto
     */
    auditInfo?: AuditInfoDto;
    /**
     * 
     * @type {{ [key: string]: FulfillmentLink; }}
     * @memberof EntityModelPickWaveDetailDto
     */
    links?: { [key: string]: FulfillmentLink; };
}


/**
 * @export
 */
export const EntityModelPickWaveDetailDtoPickWaveStatusEnum = {
    Error: 'ERROR',
    Pending: 'PENDING',
    InProgress: 'IN_PROGRESS',
    Closed: 'CLOSED',
    PendingRecovery: 'PENDING_RECOVERY'
} as const;
export type EntityModelPickWaveDetailDtoPickWaveStatusEnum = typeof EntityModelPickWaveDetailDtoPickWaveStatusEnum[keyof typeof EntityModelPickWaveDetailDtoPickWaveStatusEnum];

/**
 * @export
 */
export const EntityModelPickWaveDetailDtoPickTypeEnum = {
    Normal: 'NORMAL',
    Single: 'SINGLE',
    Multiple: 'MULTIPLE'
} as const;
export type EntityModelPickWaveDetailDtoPickTypeEnum = typeof EntityModelPickWaveDetailDtoPickTypeEnum[keyof typeof EntityModelPickWaveDetailDtoPickTypeEnum];

/**
 * 
 * @export
 * @interface EntityModelPickWaveDto
 */
export interface EntityModelPickWaveDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof EntityModelPickWaveDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof EntityModelPickWaveDto
     */
    pickWaveId?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityModelPickWaveDto
     */
    tenantId?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelPickWaveDto
     */
    pickWaveNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelPickWaveDto
     */
    parentPickWaveNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelPickWaveDto
     */
    recoveryPickWaveNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelPickWaveDto
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelPickWaveDto
     */
    userDisplayName?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof EntityModelPickWaveDto
     */
    shipmentNumbers?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof EntityModelPickWaveDto
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelPickWaveDto
     */
    pickWaveStatus?: EntityModelPickWaveDtoPickWaveStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof EntityModelPickWaveDto
     */
    pickType?: EntityModelPickWaveDtoPickTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof EntityModelPickWaveDto
     */
    maxShipments?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelPickWaveDto
     */
    shipmentType?: string;
    /**
     * 
     * @type {Array<PickWaveContentDto>}
     * @memberof EntityModelPickWaveDto
     */
    contents?: Array<PickWaveContentDto>;
    /**
     * 
     * @type {AuditInfoDto}
     * @memberof EntityModelPickWaveDto
     */
    auditInfo?: AuditInfoDto;
    /**
     * 
     * @type {Array<ChangeMessageDto>}
     * @memberof EntityModelPickWaveDto
     */
    changeMessages?: Array<ChangeMessageDto>;
    /**
     * 
     * @type {{ [key: string]: FulfillmentLink; }}
     * @memberof EntityModelPickWaveDto
     */
    links?: { [key: string]: FulfillmentLink; };
}


/**
 * @export
 */
export const EntityModelPickWaveDtoPickWaveStatusEnum = {
    Error: 'ERROR',
    Pending: 'PENDING',
    InProgress: 'IN_PROGRESS',
    Closed: 'CLOSED',
    PendingRecovery: 'PENDING_RECOVERY'
} as const;
export type EntityModelPickWaveDtoPickWaveStatusEnum = typeof EntityModelPickWaveDtoPickWaveStatusEnum[keyof typeof EntityModelPickWaveDtoPickWaveStatusEnum];

/**
 * @export
 */
export const EntityModelPickWaveDtoPickTypeEnum = {
    Normal: 'NORMAL',
    Single: 'SINGLE',
    Multiple: 'MULTIPLE'
} as const;
export type EntityModelPickWaveDtoPickTypeEnum = typeof EntityModelPickWaveDtoPickTypeEnum[keyof typeof EntityModelPickWaveDtoPickTypeEnum];

/**
 * 
 * @export
 * @interface EntityModelRenderedContentDto
 */
export interface EntityModelRenderedContentDto {
    /**
     * 
     * @type {string}
     * @memberof EntityModelRenderedContentDto
     */
    content?: string;
    /**
     * 
     * @type {{ [key: string]: FulfillmentLink; }}
     * @memberof EntityModelRenderedContentDto
     */
    links?: { [key: string]: FulfillmentLink; };
}
/**
 * 
 * @export
 * @interface EntityModelShipmentDto
 */
export interface EntityModelShipmentDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof EntityModelShipmentDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {number}
     * @memberof EntityModelShipmentDto
     */
    shipmentNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelShipmentDto
     */
    originalShipmentNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelShipmentDto
     */
    parentShipmentNumber?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof EntityModelShipmentDto
     */
    childShipmentNumbers?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof EntityModelShipmentDto
     */
    transferShipmentNumbers?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof EntityModelShipmentDto
     */
    pickWaveNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelShipmentDto
     */
    orderId: string;
    /**
     * 
     * @type {number}
     * @memberof EntityModelShipmentDto
     */
    orderNumber: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelShipmentDto
     */
    parentCheckoutNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelShipmentDto
     */
    orderSubmitDate?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelShipmentDto
     */
    externalOrderId?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelShipmentDto
     */
    userId?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityModelShipmentDto
     */
    customerAccountId?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelShipmentDto
     */
    customerTaxId?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityModelShipmentDto
     */
    tenantId?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelShipmentDto
     */
    siteId?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelShipmentDto
     */
    customerAddressId?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelShipmentDto
     */
    fulfillmentDate?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelShipmentDto
     */
    shipmentType: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelShipmentDto
     */
    shipmentStatus?: EntityModelShipmentDtoShipmentStatusEnum;
    /**
     * 
     * @type {FulfillmentShipmentStatusReason}
     * @memberof EntityModelShipmentDto
     */
    shipmentStatusReason?: FulfillmentShipmentStatusReason;
    /**
     * 
     * @type {string}
     * @memberof EntityModelShipmentDto
     */
    fulfillmentStatus?: EntityModelShipmentDtoFulfillmentStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof EntityModelShipmentDto
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelShipmentDto
     */
    assignedLocationCode?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelShipmentDto
     */
    workflowProcessId?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelShipmentDto
     */
    workflowProcessContainerId?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityModelShipmentDto
     */
    shipmentAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelShipmentDto
     */
    lineItemSubtotal?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelShipmentDto
     */
    lineItemTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelShipmentDto
     */
    lineItemTaxTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelShipmentDto
     */
    lineItemTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelShipmentDto
     */
    shippingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelShipmentDto
     */
    shippingSubtotal?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelShipmentDto
     */
    shippingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelShipmentDto
     */
    shippingTaxTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelShipmentDto
     */
    shippingTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelShipmentDto
     */
    handlingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelShipmentDto
     */
    handlingSubtotal?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelShipmentDto
     */
    handlingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelShipmentDto
     */
    handlingTaxTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelShipmentDto
     */
    handlingTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelShipmentDto
     */
    dutyAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelShipmentDto
     */
    dutyTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelShipmentDto
     */
    total: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelShipmentDto
     */
    currencyCode?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelShipmentDto
     */
    pickStatus?: EntityModelShipmentDtoPickStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof EntityModelShipmentDto
     */
    pickType?: EntityModelShipmentDtoPickTypeEnum;
    /**
     * 
     * @type {DestinationDto}
     * @memberof EntityModelShipmentDto
     */
    destination?: DestinationDto;
    /**
     * 
     * @type {CustomerDto}
     * @memberof EntityModelShipmentDto
     */
    customer?: CustomerDto;
    /**
     * 
     * @type {ContactDto}
     * @memberof EntityModelShipmentDto
     */
    alternateContact?: ContactDto;
    /**
     * 
     * @type {string}
     * @memberof EntityModelShipmentDto
     */
    shippingMethodCode?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelShipmentDto
     */
    shippingMethodName?: string;
    /**
     * 
     * @type {Array<ItemDto>}
     * @memberof EntityModelShipmentDto
     */
    items?: Array<ItemDto>;
    /**
     * 
     * @type {Array<CanceledItemDto>}
     * @memberof EntityModelShipmentDto
     */
    canceledItems?: Array<CanceledItemDto>;
    /**
     * 
     * @type {Array<ReassignedItemDto>}
     * @memberof EntityModelShipmentDto
     */
    reassignedItems?: Array<ReassignedItemDto>;
    /**
     * 
     * @type {Array<RejectedItemDto>}
     * @memberof EntityModelShipmentDto
     */
    rejectedItems?: Array<RejectedItemDto>;
    /**
     * 
     * @type {Array<TransferredItemDto>}
     * @memberof EntityModelShipmentDto
     */
    transferredItems?: Array<TransferredItemDto>;
    /**
     * 
     * @type {Array<PackageDto>}
     * @memberof EntityModelShipmentDto
     */
    packages?: Array<PackageDto>;
    /**
     * 
     * @type {WorkflowStateDto}
     * @memberof EntityModelShipmentDto
     */
    workflowState?: WorkflowStateDto;
    /**
     * 
     * @type {Array<ChangeMessageDto>}
     * @memberof EntityModelShipmentDto
     */
    changeMessages?: Array<ChangeMessageDto>;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof EntityModelShipmentDto
     */
    data?: { [key: string]: object; };
    /**
     * 
     * @type {object}
     * @memberof EntityModelShipmentDto
     */
    taxData?: object;
    /**
     * 
     * @type {string}
     * @memberof EntityModelShipmentDto
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelShipmentDto
     */
    acceptedDate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EntityModelShipmentDto
     */
    readyForPickup?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EntityModelShipmentDto
     */
    readyForPickupDate?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelShipmentDto
     */
    receivedDate?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelShipmentDto
     */
    transitTime?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EntityModelShipmentDto
     */
    isExpress?: boolean;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof EntityModelShipmentDto
     */
    pickupInfo?: { [key: string]: object; };
    /**
     * 
     * @type {AuditInfoDto}
     * @memberof EntityModelShipmentDto
     */
    auditInfo?: AuditInfoDto;
    /**
     * 
     * @type {boolean}
     * @memberof EntityModelShipmentDto
     */
    readyToCapture?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EntityModelShipmentDto
     */
    isOptInForSms?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EntityModelShipmentDto
     */
    sentCustomerInTransitNotification?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EntityModelShipmentDto
     */
    sentCustomerAtStoreNotification?: boolean;
    /**
     * 
     * @type {ShopperNotesDto}
     * @memberof EntityModelShipmentDto
     */
    shopperNotes?: ShopperNotesDto;
    /**
     * 
     * @type {AppeasementReasonDto}
     * @memberof EntityModelShipmentDto
     * @deprecated
     */
    appeasementReason?: AppeasementReasonDto;
    /**
     * 
     * @type {Array<ShipmentNoteDto>}
     * @memberof EntityModelShipmentDto
     */
    shipmentNotes?: Array<ShipmentNoteDto>;
    /**
     * 
     * @type {boolean}
     * @memberof EntityModelShipmentDto
     */
    isAutoAssigned?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EntityModelShipmentDto
     */
    isHistoricalImport?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EntityModelShipmentDto
     */
    futureDate?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelShipmentDto
     */
    cartId?: string;
    /**
     * 
     * @type {Array<SubstitutedItemDto>}
     * @memberof EntityModelShipmentDto
     */
    substitutedItems?: Array<SubstitutedItemDto>;
    /**
     * 
     * @type {string}
     * @memberof EntityModelShipmentDto
     */
    orderType?: EntityModelShipmentDtoOrderTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof EntityModelShipmentDto
     */
    workflowProcessVersion?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EntityModelShipmentDto
     */
    isFlatRateShipping?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EntityModelShipmentDto
     */
    masterTrackingNumber?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EntityModelShipmentDto
     */
    isImmutable?: boolean;
    /**
     * 
     * @type {MutabilityInfo}
     * @memberof EntityModelShipmentDto
     */
    mutabilityInfo?: MutabilityInfo;
    /**
     * 
     * @type {string}
     * @memberof EntityModelShipmentDto
     */
    shipmentConsolidationId?: string;
    /**
     * 
     * @type {Array<SlaDto>}
     * @memberof EntityModelShipmentDto
     */
    slas?: Array<SlaDto>;
    /**
     * 
     * @type {number}
     * @memberof EntityModelShipmentDto
     */
    minutesSinceOrdered?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelShipmentDto
     */
    minutesSinceOnWorkflowStep?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelShipmentDto
     */
    lowestComplianceLevel?: string;
    /**
     * 
     * @type {{ [key: string]: FulfillmentLink; }}
     * @memberof EntityModelShipmentDto
     */
    links?: { [key: string]: FulfillmentLink; };
}


/**
 * @export
 */
export const EntityModelShipmentDtoShipmentStatusEnum = {
    Ready: 'READY',
    Reassigned: 'REASSIGNED',
    Backorder: 'BACKORDER',
    Canceled: 'CANCELED',
    Fulfilled: 'FULFILLED',
    CustomerCare: 'CUSTOMER_CARE',
    Deleted: 'DELETED',
    Future: 'FUTURE'
} as const;
export type EntityModelShipmentDtoShipmentStatusEnum = typeof EntityModelShipmentDtoShipmentStatusEnum[keyof typeof EntityModelShipmentDtoShipmentStatusEnum];

/**
 * @export
 */
export const EntityModelShipmentDtoFulfillmentStatusEnum = {
    NotFulfilled: 'NotFulfilled',
    Fulfilled: 'Fulfilled'
} as const;
export type EntityModelShipmentDtoFulfillmentStatusEnum = typeof EntityModelShipmentDtoFulfillmentStatusEnum[keyof typeof EntityModelShipmentDtoFulfillmentStatusEnum];

/**
 * @export
 */
export const EntityModelShipmentDtoPickStatusEnum = {
    Available: 'AVAILABLE',
    InWave: 'IN_WAVE',
    Picked: 'PICKED',
    Transfer: 'TRANSFER',
    Complete: 'COMPLETE'
} as const;
export type EntityModelShipmentDtoPickStatusEnum = typeof EntityModelShipmentDtoPickStatusEnum[keyof typeof EntityModelShipmentDtoPickStatusEnum];

/**
 * @export
 */
export const EntityModelShipmentDtoPickTypeEnum = {
    Normal: 'NORMAL',
    Single: 'SINGLE',
    Multiple: 'MULTIPLE'
} as const;
export type EntityModelShipmentDtoPickTypeEnum = typeof EntityModelShipmentDtoPickTypeEnum[keyof typeof EntityModelShipmentDtoPickTypeEnum];

/**
 * @export
 */
export const EntityModelShipmentDtoOrderTypeEnum = {
    Offline: 'Offline',
    Online: 'Online'
} as const;
export type EntityModelShipmentDtoOrderTypeEnum = typeof EntityModelShipmentDtoOrderTypeEnum[keyof typeof EntityModelShipmentDtoOrderTypeEnum];

/**
 * 
 * @export
 * @interface EntityModelWorkflowProcessDto
 */
export interface EntityModelWorkflowProcessDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof EntityModelWorkflowProcessDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof EntityModelWorkflowProcessDto
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelWorkflowProcessDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelWorkflowProcessDto
     */
    version?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelWorkflowProcessDto
     * @deprecated
     */
    containerId?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelWorkflowProcessDto
     */
    containerAlias?: string;
    /**
     * 
     * @type {Array<TaskDefinitionDto>}
     * @memberof EntityModelWorkflowProcessDto
     */
    tasks?: Array<TaskDefinitionDto>;
    /**
     * 
     * @type {Array<WorkflowProcessVariableDto>}
     * @memberof EntityModelWorkflowProcessDto
     */
    variables?: Array<WorkflowProcessVariableDto>;
    /**
     * 
     * @type {{ [key: string]: FulfillmentLink; }}
     * @memberof EntityModelWorkflowProcessDto
     */
    links?: { [key: string]: FulfillmentLink; };
}
/**
 * 
 * @export
 * @interface ErrorItem
 */
export interface ErrorItem {
    /**
     * 
     * @type {string}
     * @memberof ErrorItem
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof ErrorItem
     */
    message?: string;
}
/**
 * 
 * @export
 * @interface ErrorResponse
 */
export interface ErrorResponse {
    /**
     * 
     * @type {string}
     * @memberof ErrorResponse
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof ErrorResponse
     */
    message?: string;
    /**
     * 
     * @type {Array<ErrorItem>}
     * @memberof ErrorResponse
     */
    errors?: Array<ErrorItem>;
}
/**
 * 
 * @export
 * @interface FilterOptionDtoLocationSummaryDetailDto
 */
export interface FilterOptionDtoLocationSummaryDetailDto {
    /**
     * 
     * @type {Array<LocationSummaryDetailDto>}
     * @memberof FilterOptionDtoLocationSummaryDetailDto
     */
    items?: Array<LocationSummaryDetailDto>;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoLocationSummaryDetailDto
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoLocationSummaryDetailDto
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoLocationSummaryDetailDto
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoLocationSummaryDetailDto
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface FilterOptionDtoResultItem
 */
export interface FilterOptionDtoResultItem {
    /**
     * 
     * @type {Array<ResultItem>}
     * @memberof FilterOptionDtoResultItem
     */
    items?: Array<ResultItem>;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoResultItem
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface FilterOptionDtoShipmentTypeSummaryDto
 */
export interface FilterOptionDtoShipmentTypeSummaryDto {
    /**
     * 
     * @type {Array<ShipmentTypeSummaryDto>}
     * @memberof FilterOptionDtoShipmentTypeSummaryDto
     */
    items?: Array<ShipmentTypeSummaryDto>;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoShipmentTypeSummaryDto
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoShipmentTypeSummaryDto
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoShipmentTypeSummaryDto
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoShipmentTypeSummaryDto
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface FilterOptionDtoSlaSummaryDto
 */
export interface FilterOptionDtoSlaSummaryDto {
    /**
     * 
     * @type {Array<SlaSummaryDto>}
     * @memberof FilterOptionDtoSlaSummaryDto
     */
    items?: Array<SlaSummaryDto>;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoSlaSummaryDto
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoSlaSummaryDto
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoSlaSummaryDto
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterOptionDtoSlaSummaryDto
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface FilterOptionsDto
 */
export interface FilterOptionsDto {
    /**
     * 
     * @type {FilterOptionDtoLocationSummaryDetailDto}
     * @memberof FilterOptionsDto
     */
    locations?: FilterOptionDtoLocationSummaryDetailDto;
    /**
     * 
     * @type {FilterOptionDtoShipmentTypeSummaryDto}
     * @memberof FilterOptionsDto
     */
    shipmentTypes?: FilterOptionDtoShipmentTypeSummaryDto;
    /**
     * 
     * @type {FilterOptionDtoResultItem}
     * @memberof FilterOptionsDto
     */
    workflowTasks?: FilterOptionDtoResultItem;
    /**
     * 
     * @type {FilterOptionDtoSlaSummaryDto}
     * @memberof FilterOptionsDto
     */
    slas?: FilterOptionDtoSlaSummaryDto;
    /**
     * 
     * @type {FilterOptionDtoResultItem}
     * @memberof FilterOptionsDto
     */
    slaComplianceLevels?: FilterOptionDtoResultItem;
}
/**
 * 
 * @export
 * @interface FilteredShipmentsDto
 */
export interface FilteredShipmentsDto {
    /**
     * 
     * @type {Array<ShipmentDto>}
     * @memberof FilteredShipmentsDto
     */
    items?: Array<ShipmentDto>;
    /**
     * 
     * @type {number}
     * @memberof FilteredShipmentsDto
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof FilteredShipmentsDto
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof FilteredShipmentsDto
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof FilteredShipmentsDto
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface FulfillmentAuditInfo
 */
export interface FulfillmentAuditInfo {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAuditInfo
     */
    updateDate?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAuditInfo
     */
    createDate?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAuditInfo
     */
    updateBy?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAuditInfo
     */
    createBy?: string;
}
/**
 * 
 * @export
 * @interface FulfillmentFieldDto
 */
export interface FulfillmentFieldDto {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentFieldDto
     */
    name?: string;
    /**
     * 
     * @type {object}
     * @memberof FulfillmentFieldDto
     */
    userEnteredValue?: object;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentFieldDto
     */
    required?: boolean;
}
/**
 * 
 * @export
 * @interface FulfillmentLink
 */
export interface FulfillmentLink {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentLink
     */
    href?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentLink
     */
    hreflang?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentLink
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentLink
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentLink
     */
    deprecation?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentLink
     */
    profile?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentLink
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentLink
     */
    templated?: boolean;
}
/**
 * 
 * @export
 * @interface FulfillmentMeasurement
 */
export interface FulfillmentMeasurement {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentMeasurement
     */
    unit?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentMeasurement
     */
    value?: number;
}
/**
 * 
 * @export
 * @interface FulfillmentPackage
 */
export interface FulfillmentPackage {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentPackage
     */
    packageId?: string;
    /**
     * 
     * @type {FulfillmentPackageMeasurements}
     * @memberof FulfillmentPackage
     */
    measurements?: FulfillmentPackageMeasurements;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentPackage
     */
    carrier?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentPackage
     */
    carrierName?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentPackage
     */
    returnCarrier?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentPackage
     */
    packagingType?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentPackage
     */
    shippingMethodCode?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentPackage
     */
    shippingMethodName?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof FulfillmentPackage
     */
    trackingNumbers?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof FulfillmentPackage
     */
    returnTrackingNumbers?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentPackage
     */
    stringBarcode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentPackage
     */
    hasLabel?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentPackage
     */
    signatureRequired?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentPackage
     */
    integratorId?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentPackage
     */
    manifestId?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentPackage
     */
    labelFormat?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentPackage
     */
    fxcbDocumentsUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentPackage
     */
    fxcbPackNotificationId?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentPackage
     */
    packingSlipNumber?: number;
    /**
     * 
     * @type {Array<FulfillmentPackingSlipItemDetail>}
     * @memberof FulfillmentPackage
     */
    packingSlipItemDetails?: Array<FulfillmentPackingSlipItemDetail>;
    /**
     * 
     * @type {FulfillmentAuditInfo}
     * @memberof FulfillmentPackage
     */
    auditInfo?: FulfillmentAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentPackage
     */
    packageConsolidationId?: string;
}
/**
 * 
 * @export
 * @interface FulfillmentPackageMeasurements
 */
export interface FulfillmentPackageMeasurements {
    /**
     * 
     * @type {FulfillmentMeasurement}
     * @memberof FulfillmentPackageMeasurements
     */
    height?: FulfillmentMeasurement;
    /**
     * 
     * @type {FulfillmentMeasurement}
     * @memberof FulfillmentPackageMeasurements
     */
    length?: FulfillmentMeasurement;
    /**
     * 
     * @type {FulfillmentMeasurement}
     * @memberof FulfillmentPackageMeasurements
     */
    width?: FulfillmentMeasurement;
    /**
     * 
     * @type {FulfillmentMeasurement}
     * @memberof FulfillmentPackageMeasurements
     */
    weight?: FulfillmentMeasurement;
}
/**
 * 
 * @export
 * @interface FulfillmentPackingSlipItemDetail
 */
export interface FulfillmentPackingSlipItemDetail {
    /**
     * 
     * @type {number}
     * @memberof FulfillmentPackingSlipItemDetail
     */
    lineId?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentPackingSlipItemDetail
     */
    originalOrderItemId?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentPackingSlipItemDetail
     */
    quantity?: number;
}
/**
 * 
 * @export
 * @interface FulfillmentProductOption
 */
export interface FulfillmentProductOption {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentProductOption
     */
    attributeFQN?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentProductOption
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentProductOption
     */
    dataType?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentProductOption
     */
    stringValue?: string;
    /**
     * 
     * @type {object}
     * @memberof FulfillmentProductOption
     */
    value?: object;
    /**
     * 
     * @type {object}
     * @memberof FulfillmentProductOption
     */
    shopperEnteredValue?: object;
}
/**
 * 
 * @export
 * @interface FulfillmentShipmentStatusReason
 */
export interface FulfillmentShipmentStatusReason {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentShipmentStatusReason
     */
    reasonCode?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentShipmentStatusReason
     */
    moreInfo?: string;
}
/**
 * 
 * @export
 * @interface FutureItemDto
 */
export interface FutureItemDto {
    /**
     * 
     * @type {number}
     * @memberof FutureItemDto
     */
    lineId: number;
    /**
     * 
     * @type {number}
     * @memberof FutureItemDto
     */
    quantity: number;
    /**
     * 
     * @type {string}
     * @memberof FutureItemDto
     */
    futureDate: string;
}
/**
 * 
 * @export
 * @interface FutureItemsRequestDto
 */
export interface FutureItemsRequestDto {
    /**
     * 
     * @type {boolean}
     * @memberof FutureItemsRequestDto
     */
    isUserAction?: boolean;
    /**
     * 
     * @type {Array<FutureItemDto>}
     * @memberof FutureItemsRequestDto
     */
    items: Array<FutureItemDto>;
}
/**
 * 
 * @export
 * @interface FutureShipmentUpdateDateRequestDto
 */
export interface FutureShipmentUpdateDateRequestDto {
    /**
     * 
     * @type {string}
     * @memberof FutureShipmentUpdateDateRequestDto
     */
    futureDate: string;
    /**
     * 
     * @type {boolean}
     * @memberof FutureShipmentUpdateDateRequestDto
     */
    bypassFutureAllocateDeallocate?: boolean;
}
/**
 * 
 * @export
 * @interface GetPickWaveRequest
 */
export interface GetPickWaveRequest {
    /**
     * 
     * @type {string}
     * @memberof GetPickWaveRequest
     */
    sortContents?: string;
}
/**
 * 
 * @export
 * @interface GetProcessesRequest
 */
export interface GetProcessesRequest {
    /**
     * 
     * @type {number}
     * @memberof GetProcessesRequest
     */
    page?: number;
    /**
     * 
     * @type {number}
     * @memberof GetProcessesRequest
     */
    pageSize?: number;
    /**
     * 
     * @type {string}
     * @memberof GetProcessesRequest
     */
    sort?: string;
}
/**
 * 
 * @export
 * @interface GetShipmentsAggregationRequest
 */
export interface GetShipmentsAggregationRequest {
    /**
     * 
     * @type {number}
     * @memberof GetShipmentsAggregationRequest
     */
    page?: number;
    /**
     * 
     * @type {number}
     * @memberof GetShipmentsAggregationRequest
     */
    pageSize?: number;
    /**
     * 
     * @type {string}
     * @memberof GetShipmentsAggregationRequest
     */
    sort?: string;
    /**
     * 
     * @type {string}
     * @memberof GetShipmentsAggregationRequest
     */
    filter?: string;
    /**
     * 
     * @type {string}
     * @memberof GetShipmentsAggregationRequest
     */
    quickSearch?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GetShipmentsAggregationRequest
     */
    isLate?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GetShipmentsAggregationRequest
     */
    isExpress?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GetShipmentsAggregationRequest
     */
    workflowTaskName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GetShipmentsAggregationRequest
     */
    bypassSearchIndex?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GetShipmentsAggregationRequest
     */
    slaCompliance?: string;
    /**
     * 
     * @type {string}
     * @memberof GetShipmentsAggregationRequest
     */
    locationGroupCode?: string;
    /**
     * 
     * @type {string}
     * @memberof GetShipmentsAggregationRequest
     */
    timePeriodUnit?: GetShipmentsAggregationRequestTimePeriodUnitEnum;
    /**
     * 
     * @type {number}
     * @memberof GetShipmentsAggregationRequest
     */
    timePeriodValue?: number;
    /**
     * 
     * @type {Set<string>}
     * @memberof GetShipmentsAggregationRequest
     */
    locations?: Set<string>;
    /**
     * 
     * @type {PageDimensions}
     * @memberof GetShipmentsAggregationRequest
     */
    locationPage?: PageDimensions;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetShipmentsAggregationRequest
     */
    shipmentTypes?: Array<string>;
    /**
     * 
     * @type {PageDimensions}
     * @memberof GetShipmentsAggregationRequest
     */
    shipmentTypePage?: PageDimensions;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetShipmentsAggregationRequest
     */
    workflowTaskNames?: Array<string>;
    /**
     * 
     * @type {PageDimensions}
     * @memberof GetShipmentsAggregationRequest
     */
    workflowTaskPage?: PageDimensions;
    /**
     * 
     * @type {Array<number>}
     * @memberof GetShipmentsAggregationRequest
     */
    slaDefinitionNumbers?: Array<number>;
    /**
     * 
     * @type {PageDimensions}
     * @memberof GetShipmentsAggregationRequest
     */
    slaPage?: PageDimensions;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetShipmentsAggregationRequest
     */
    slaComplianceLevels?: Array<string>;
    /**
     * 
     * @type {PageDimensions}
     * @memberof GetShipmentsAggregationRequest
     */
    slaComplianceLevelPage?: PageDimensions;
}


/**
 * @export
 */
export const GetShipmentsAggregationRequestTimePeriodUnitEnum = {
    Hours: 'HOURS',
    Days: 'DAYS',
    Weeks: 'WEEKS',
    Months: 'MONTHS',
    Years: 'YEARS'
} as const;
export type GetShipmentsAggregationRequestTimePeriodUnitEnum = typeof GetShipmentsAggregationRequestTimePeriodUnitEnum[keyof typeof GetShipmentsAggregationRequestTimePeriodUnitEnum];

/**
 * 
 * @export
 * @interface GetShipmentsRequest
 */
export interface GetShipmentsRequest {
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
    sort?: string;
    /**
     * 
     * @type {string}
     * @memberof GetShipmentsRequest
     */
    filter?: string;
    /**
     * 
     * @type {string}
     * @memberof GetShipmentsRequest
     */
    quickSearch?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GetShipmentsRequest
     */
    isLate?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GetShipmentsRequest
     */
    isExpress?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GetShipmentsRequest
     */
    workflowTaskName?: string;
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
    slaCompliance?: string;
    /**
     * 
     * @type {string}
     * @memberof GetShipmentsRequest
     */
    locationGroupCode?: string;
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
}


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
 * @interface GetSubstitutableItemsRequest
 */
export interface GetSubstitutableItemsRequest {
    /**
     * 
     * @type {string}
     * @memberof GetSubstitutableItemsRequest
     */
    productCode?: string;
    /**
     * 
     * @type {number}
     * @memberof GetSubstitutableItemsRequest
     */
    originalLineId?: number;
}
/**
 * 
 * @export
 * @interface GiftCardDto
 */
export interface GiftCardDto {
    /**
     * 
     * @type {string}
     * @memberof GiftCardDto
     */
    cardNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof GiftCardDto
     */
    currencyCode?: string;
    /**
     * 
     * @type {number}
     * @memberof GiftCardDto
     */
    creditValue?: number;
    /**
     * 
     * @type {string}
     * @memberof GiftCardDto
     */
    activationDate?: string;
    /**
     * 
     * @type {string}
     * @memberof GiftCardDto
     */
    expirationDate?: string;
    /**
     * 
     * @type {string}
     * @memberof GiftCardDto
     */
    creditType?: string;
    /**
     * 
     * @type {number}
     * @memberof GiftCardDto
     */
    initialBalance?: number;
    /**
     * 
     * @type {number}
     * @memberof GiftCardDto
     */
    customerId?: number;
    /**
     * 
     * @type {string}
     * @memberof GiftCardDto
     */
    code?: string;
    /**
     * 
     * @type {number}
     * @memberof GiftCardDto
     */
    currentBalance?: number;
}
/**
 * 
 * @export
 * @interface GiftCardInfoRequestDto
 */
export interface GiftCardInfoRequestDto {
    /**
     * 
     * @type {string}
     * @memberof GiftCardInfoRequestDto
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof GiftCardInfoRequestDto
     */
    lastNameOrSurname?: string;
    /**
     * 
     * @type {string}
     * @memberof GiftCardInfoRequestDto
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof GiftCardInfoRequestDto
     */
    giftCardMessage?: string;
}
/**
 * 
 * @export
 * @interface HandleOptionDto
 */
export interface HandleOptionDto {
    /**
     * 
     * @type {TaskReasonDto}
     * @memberof HandleOptionDto
     */
    reason?: TaskReasonDto;
    /**
     * 
     * @type {boolean}
     * @memberof HandleOptionDto
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {Array<HandleOptionItem>}
     * @memberof HandleOptionDto
     */
    items?: Array<HandleOptionItem>;
}
/**
 * 
 * @export
 * @interface HandleOptionItem
 */
export interface HandleOptionItem {
    /**
     * 
     * @type {number}
     * @memberof HandleOptionItem
     */
    lineId: number;
    /**
     * 
     * @type {number}
     * @memberof HandleOptionItem
     */
    quantity: number;
    /**
     * 
     * @type {TaskReasonDto}
     * @memberof HandleOptionItem
     */
    reason?: TaskReasonDto;
    /**
     * 
     * @type {boolean}
     * @memberof HandleOptionItem
     */
    blockAssignment?: boolean;
}
/**
 * 
 * @export
 * @interface InventoryAllocationDto
 */
export interface InventoryAllocationDto {
    /**
     * 
     * @type {number}
     * @memberof InventoryAllocationDto
     */
    inventoryId?: number;
    /**
     * 
     * @type {number}
     * @memberof InventoryAllocationDto
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof InventoryAllocationDto
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof InventoryAllocationDto
     */
    sku?: string;
    /**
     * 
     * @type {string}
     * @memberof InventoryAllocationDto
     */
    condition?: string;
    /**
     * 
     * @type {string}
     * @memberof InventoryAllocationDto
     */
    lotCode?: string;
    /**
     * 
     * @type {string}
     * @memberof InventoryAllocationDto
     */
    date?: string;
    /**
     * 
     * @type {string}
     * @memberof InventoryAllocationDto
     */
    serialNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof InventoryAllocationDto
     */
    fulfilledDate?: string;
    /**
     * 
     * @type {AuditInfoDto}
     * @memberof InventoryAllocationDto
     */
    auditInfo?: AuditInfoDto;
}
/**
 * 
 * @export
 * @interface InventoryTagDto
 */
export interface InventoryTagDto {
    /**
     * 
     * @type {string}
     * @memberof InventoryTagDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof InventoryTagDto
     */
    value?: string;
}
/**
 * 
 * @export
 * @interface ItemDto
 */
export interface ItemDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof ItemDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    lineId: number;
    /**
     * 
     * @type {string}
     * @memberof ItemDto
     */
    originalOrderItemId?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemDto
     */
    goodsType?: ItemDtoGoodsTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ItemDto
     */
    optionAttributeFQN?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemDto
     */
    productCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemDto
     */
    variationProductCode?: string;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    quantity: number;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    transferQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    trueTransferQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    readyForPickupQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    allocatedQuantity?: number;
    /**
     * 
     * @type {string}
     * @memberof ItemDto
     */
    imageUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemDto
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemDto
     */
    upc?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemDto
     */
    sku?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ItemDto
     */
    allowsBackOrder?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    unitPrice?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ItemDto
     */
    isTaxable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    actualPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    overridePrice?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    itemDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    lineItemCost?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    itemTax: number;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    shipping: number;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    shippingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    shippingTax: number;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    handling: number;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    handlingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    handlingTax: number;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    duty?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    weightedShipmentAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    weightedLineItemTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    weightedShippingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    weightedShippingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    weightedHandlingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    weightedHandlingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    weightedDutyAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    taxableShipping?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    taxableLineItemCost?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    taxableHandling?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    weight?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    length?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    width?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    height?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    lineItemAdjustment?: number;
    /**
     * 
     * @type {string}
     * @memberof ItemDto
     */
    weightUnit?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemDto
     */
    expectedDeliveryDate?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof ItemDto
     */
    data?: { [key: string]: object; };
    /**
     * 
     * @type {object}
     * @memberof ItemDto
     */
    taxData?: object;
    /**
     * 
     * @type {string}
     * @memberof ItemDto
     */
    backorderReleaseDate?: string;
    /**
     * 
     * @type {AuditInfoDto}
     * @memberof ItemDto
     */
    auditInfo?: AuditInfoDto;
    /**
     * 
     * @type {Array<ProductOptionDto>}
     * @memberof ItemDto
     */
    options?: Array<ProductOptionDto>;
    /**
     * 
     * @type {boolean}
     * @memberof ItemDto
     */
    manageStock?: boolean;
    /**
     * 
     * @type {Array<FulfillmentFieldDto>}
     * @memberof ItemDto
     */
    fulfillmentFields?: Array<FulfillmentFieldDto>;
    /**
     * 
     * @type {string}
     * @memberof ItemDto
     */
    locatorName?: string;
    /**
     * 
     * @type {AppeasementReasonDto}
     * @memberof ItemDto
     * @deprecated
     */
    appeasementReason?: AppeasementReasonDto;
    /**
     * 
     * @type {string}
     * @memberof ItemDto
     */
    creditCurrencyCode?: string;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    creditValue?: number;
    /**
     * 
     * @type {Array<GiftCardDto>}
     * @memberof ItemDto
     */
    giftCards?: Array<GiftCardDto>;
    /**
     * 
     * @type {boolean}
     * @memberof ItemDto
     */
    isAssemblyRequired?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ItemDto
     */
    parentItemId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ItemDto
     */
    childItemIds?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof ItemDto
     */
    isPackagedStandAlone?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ItemDto
     */
    allowsFutureAllocate?: boolean;
    /**
     * 
     * @type {Array<InventoryTagDto>}
     * @memberof ItemDto
     */
    inventoryTags?: Array<InventoryTagDto>;
    /**
     * 
     * @type {string}
     * @memberof ItemDto
     */
    cartItemId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ItemDto
     */
    isReservedInventory?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ItemDto
     */
    allowsSubstitution?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    originalQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    originalLineId?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemDto
     */
    substituteQuantity?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ItemDto
     */
    isGift?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ItemDto
     */
    giftMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemDto
     */
    purchaseLocation?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemDto
     */
    priceMode?: ItemDtoPriceModeEnum;
    /**
     * 
     * @type {string}
     * @memberof ItemDto
     */
    condition?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemDto
     */
    serialNumber?: string;
    /**
     * 
     * @type {Array<InventoryAllocationDto>}
     * @memberof ItemDto
     */
    inventoryAllocations?: Array<InventoryAllocationDto>;
    /**
     * 
     * @type {SubstituteInfoDto}
     * @memberof ItemDto
     */
    substituteInfo?: SubstituteInfoDto;
    /**
     * 
     * @type {boolean}
     * @memberof ItemDto
     */
    autoSubstitution?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ItemDto
     */
    substitutionType?: ItemDtoSubstitutionTypeEnum;
    /**
     * 
     * @type {BundleInfoDto}
     * @memberof ItemDto
     */
    bundleInfo?: BundleInfoDto;
    /**
     * 
     * @type {ReturnRuleInfoDto}
     * @memberof ItemDto
     */
    returnRuleInfo?: ReturnRuleInfoDto;
}


/**
 * @export
 */
export const ItemDtoGoodsTypeEnum = {
    Physical: 'Physical',
    Digital: 'Digital',
    DigitalCredit: 'DigitalCredit',
    DigitalGiftCard: 'DigitalGiftCard',
    Service: 'Service'
} as const;
export type ItemDtoGoodsTypeEnum = typeof ItemDtoGoodsTypeEnum[keyof typeof ItemDtoGoodsTypeEnum];

/**
 * @export
 */
export const ItemDtoPriceModeEnum = {
    Internal: 'Internal',
    External: 'External'
} as const;
export type ItemDtoPriceModeEnum = typeof ItemDtoPriceModeEnum[keyof typeof ItemDtoPriceModeEnum];

/**
 * @export
 */
export const ItemDtoSubstitutionTypeEnum = {
    PreFulfillment: 'PRE_FULFILLMENT',
    AtFullfillment: 'AT_FULLFILLMENT'
} as const;
export type ItemDtoSubstitutionTypeEnum = typeof ItemDtoSubstitutionTypeEnum[keyof typeof ItemDtoSubstitutionTypeEnum];

/**
 * 
 * @export
 * @interface ItemGiftReceiptRequestDto
 */
export interface ItemGiftReceiptRequestDto {
    /**
     * 
     * @type {number}
     * @memberof ItemGiftReceiptRequestDto
     */
    lineId?: number;
    /**
     * 
     * @type {string}
     * @memberof ItemGiftReceiptRequestDto
     */
    giftMessage?: string;
}
/**
 * 
 * @export
 * @interface LocationSummaryDetailDto
 */
export interface LocationSummaryDetailDto {
    /**
     * 
     * @type {string}
     * @memberof LocationSummaryDetailDto
     */
    locationCode?: string;
    /**
     * 
     * @type {number}
     * @memberof LocationSummaryDetailDto
     */
    currentShipments?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationSummaryDetailDto
     */
    totalShipments?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationSummaryDetailDto
     */
    currentItems?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationSummaryDetailDto
     */
    totalItems?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationSummaryDetailDto
     */
    currentAmount?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationSummaryDetailDto
     */
    totalAmount?: number;
    /**
     * 
     * @type {string}
     * @memberof LocationSummaryDetailDto
     */
    currencyCode?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationSummaryDetailDto
     */
    locationName?: string;
    /**
     * 
     * @type {AddressDto}
     * @memberof LocationSummaryDetailDto
     */
    address?: AddressDto;
    /**
     * 
     * @type {number}
     * @memberof LocationSummaryDetailDto
     */
    slaOnTrackCount?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationSummaryDetailDto
     */
    slaAtRiskCount?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationSummaryDetailDto
     */
    slaNonCompliantCount?: number;
}
/**
 * 
 * @export
 * @interface LocationSummaryDto
 */
export interface LocationSummaryDto {
    /**
     * 
     * @type {string}
     * @memberof LocationSummaryDto
     */
    locationCode?: string;
    /**
     * 
     * @type {number}
     * @memberof LocationSummaryDto
     */
    currentShipments?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationSummaryDto
     */
    totalShipments?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationSummaryDto
     */
    currentItems?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationSummaryDto
     */
    totalItems?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationSummaryDto
     */
    currentAmount?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationSummaryDto
     */
    totalAmount?: number;
    /**
     * 
     * @type {string}
     * @memberof LocationSummaryDto
     */
    currencyCode?: string;
}
/**
 * 
 * @export
 * @interface ManifestDto
 */
export interface ManifestDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof ManifestDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof ManifestDto
     */
    internalId?: string;
    /**
     * 
     * @type {number}
     * @memberof ManifestDto
     */
    tenantId?: number;
    /**
     * 
     * @type {string}
     * @memberof ManifestDto
     */
    locationCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ManifestDto
     */
    carrierId?: string;
    /**
     * 
     * @type {string}
     * @memberof ManifestDto
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof ManifestDto
     */
    userDisplayName?: string;
    /**
     * 
     * @type {AuditInfoDto}
     * @memberof ManifestDto
     */
    auditInfo?: AuditInfoDto;
    /**
     * 
     * @type {Array<ManifestShipmentDto>}
     * @memberof ManifestDto
     */
    shipments?: Array<ManifestShipmentDto>;
    /**
     * 
     * @type {number}
     * @memberof ManifestDto
     */
    numberOfShipments?: number;
    /**
     * 
     * @type {number}
     * @memberof ManifestDto
     */
    numberOfPackages?: number;
    /**
     * 
     * @type {string}
     * @memberof ManifestDto
     */
    manifestId?: string;
    /**
     * 
     * @type {string}
     * @memberof ManifestDto
     */
    manifestUrl?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ManifestDto
     */
    isSuccessfulPreviously?: boolean;
    /**
     * 
     * @type {Array<ManifestShipmentDto>}
     * @memberof ManifestDto
     */
    shipmentsSuccessfulPreviously?: Array<ManifestShipmentDto>;
}
/**
 * 
 * @export
 * @interface ManifestRequestDto
 */
export interface ManifestRequestDto {
    /**
     * 
     * @type {string}
     * @memberof ManifestRequestDto
     */
    carrierId: string;
    /**
     * 
     * @type {string}
     * @memberof ManifestRequestDto
     */
    locationCode: string;
    /**
     * 
     * @type {Array<ManifestRequestShipmentDto>}
     * @memberof ManifestRequestDto
     */
    includedShipments: Array<ManifestRequestShipmentDto>;
}
/**
 * 
 * @export
 * @interface ManifestRequestShipmentDto
 */
export interface ManifestRequestShipmentDto {
    /**
     * 
     * @type {number}
     * @memberof ManifestRequestShipmentDto
     */
    shipmentNumber: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof ManifestRequestShipmentDto
     */
    integratorIds: Array<string>;
}
/**
 * 
 * @export
 * @interface ManifestShipmentDto
 */
export interface ManifestShipmentDto {
    /**
     * 
     * @type {number}
     * @memberof ManifestShipmentDto
     */
    shipmentNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof ManifestShipmentDto
     */
    orderNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof ManifestShipmentDto
     */
    externalOrderId?: string;
    /**
     * 
     * @type {string}
     * @memberof ManifestShipmentDto
     */
    shipmentType?: string;
    /**
     * 
     * @type {string}
     * @memberof ManifestShipmentDto
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {DestinationDto}
     * @memberof ManifestShipmentDto
     */
    destination?: DestinationDto;
    /**
     * 
     * @type {Array<PackageDto>}
     * @memberof ManifestShipmentDto
     */
    packages?: Array<PackageDto>;
}
/**
 * 
 * @export
 * @interface MeasurementDto
 */
export interface MeasurementDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof MeasurementDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof MeasurementDto
     */
    unit?: string;
    /**
     * 
     * @type {number}
     * @memberof MeasurementDto
     */
    value?: number;
}
/**
 * 
 * @export
 * @interface MultiValueMapStringString
 */
export interface MultiValueMapStringString {
    [key: string]: Array<string> | any;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof MultiValueMapStringString
     */
    all?: { [key: string]: string; };
    /**
     * 
     * @type {boolean}
     * @memberof MultiValueMapStringString
     */
    empty?: boolean;
}
/**
 * 
 * @export
 * @interface MutabilityInfo
 */
export interface MutabilityInfo {
    /**
     * 
     * @type {string}
     * @memberof MutabilityInfo
     */
    reason?: string;
    /**
     * 
     * @type {FulfillmentAuditInfo}
     * @memberof MutabilityInfo
     */
    auditInfo?: FulfillmentAuditInfo;
    /**
     * 
     * @type {Set<string>}
     * @memberof MutabilityInfo
     */
    blockedActions?: Set<string>;
}
/**
 * 
 * @export
 * @interface PackageConsolidationDto
 */
export interface PackageConsolidationDto {
    /**
     * 
     * @type {number}
     * @memberof PackageConsolidationDto
     */
    shipmentNumber?: number;
    /**
     * 
     * @type {FulfillmentPackage}
     * @memberof PackageConsolidationDto
     */
    packageDetails?: FulfillmentPackage;
}
/**
 * 
 * @export
 * @interface PackageConsolidationRequestDto
 */
export interface PackageConsolidationRequestDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof PackageConsolidationRequestDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {Array<PackageConsolidationDto>}
     * @memberof PackageConsolidationRequestDto
     */
    packageConsolidations?: Array<PackageConsolidationDto>;
    /**
     * 
     * @type {FulfillmentPackage}
     * @memberof PackageConsolidationRequestDto
     */
    commonPackageDetails?: FulfillmentPackage;
}
/**
 * 
 * @export
 * @interface PackageConsolidationSuggestionDto
 */
export interface PackageConsolidationSuggestionDto {
    /**
     * 
     * @type {PagedModelEntityModelShipmentDto}
     * @memberof PackageConsolidationSuggestionDto
     */
    shipmentList?: PagedModelEntityModelShipmentDto;
}
/**
 * 
 * @export
 * @interface PackageDto
 */
export interface PackageDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof PackageDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof PackageDto
     */
    packageId?: string;
    /**
     * 
     * @type {PackageMeasurementsDto}
     * @memberof PackageDto
     */
    measurements?: PackageMeasurementsDto;
    /**
     * 
     * @type {string}
     * @memberof PackageDto
     */
    carrier?: string;
    /**
     * 
     * @type {string}
     * @memberof PackageDto
     */
    carrierName?: string;
    /**
     * 
     * @type {string}
     * @memberof PackageDto
     */
    returnCarrier?: string;
    /**
     * 
     * @type {string}
     * @memberof PackageDto
     */
    packagingType?: string;
    /**
     * 
     * @type {string}
     * @memberof PackageDto
     */
    shippingMethodCode?: string;
    /**
     * 
     * @type {string}
     * @memberof PackageDto
     */
    shippingMethodName?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof PackageDto
     */
    trackingNumbers?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof PackageDto
     */
    returnTrackingNumbers?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof PackageDto
     */
    stringBarcode?: string;
    /**
     * 
     * @type {Array<TrackingDto>}
     * @memberof PackageDto
     */
    trackings?: Array<TrackingDto>;
    /**
     * 
     * @type {Array<TrackingDto>}
     * @memberof PackageDto
     */
    returnTrackings?: Array<TrackingDto>;
    /**
     * 
     * @type {boolean}
     * @memberof PackageDto
     */
    hasLabel?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PackageDto
     */
    signatureRequired?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PackageDto
     */
    integratorId?: string;
    /**
     * 
     * @type {string}
     * @memberof PackageDto
     */
    manifestId?: string;
    /**
     * 
     * @type {string}
     * @memberof PackageDto
     */
    labelFormat?: string;
    /**
     * 
     * @type {string}
     * @memberof PackageDto
     */
    fxcbDocumentsUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof PackageDto
     */
    fxcbPackNotificationId?: string;
    /**
     * 
     * @type {number}
     * @memberof PackageDto
     */
    packingSlipNumber?: number;
    /**
     * 
     * @type {Array<PackingSlipItemDetailDto>}
     * @memberof PackageDto
     */
    packingSlipItemDetails?: Array<PackingSlipItemDetailDto>;
    /**
     * 
     * @type {FulfillmentAuditInfo}
     * @memberof PackageDto
     */
    auditInfo?: FulfillmentAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof PackageDto
     */
    packageConsolidationId?: string;
}
/**
 * 
 * @export
 * @interface PackageMeasurementsDto
 */
export interface PackageMeasurementsDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof PackageMeasurementsDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {MeasurementDto}
     * @memberof PackageMeasurementsDto
     */
    height?: MeasurementDto;
    /**
     * 
     * @type {MeasurementDto}
     * @memberof PackageMeasurementsDto
     */
    length?: MeasurementDto;
    /**
     * 
     * @type {MeasurementDto}
     * @memberof PackageMeasurementsDto
     */
    width?: MeasurementDto;
    /**
     * 
     * @type {MeasurementDto}
     * @memberof PackageMeasurementsDto
     */
    weight?: MeasurementDto;
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
}
/**
 * 
 * @export
 * @interface PageDimensions
 */
export interface PageDimensions {
    /**
     * 
     * @type {number}
     * @memberof PageDimensions
     */
    pageIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof PageDimensions
     */
    pageSize?: number;
    /**
     * 
     * @type {string}
     * @memberof PageDimensions
     */
    sort?: string;
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
    /**
     * 
     * @type {number}
     * @memberof PageMetadata
     */
    number?: number;
}
/**
 * 
 * @export
 * @interface PagedModelEntityModelShipmentDto
 */
export interface PagedModelEntityModelShipmentDto {
    /**
     * 
     * @type {CollectionModelEntityModelShipmentDtoEmbedded}
     * @memberof PagedModelEntityModelShipmentDto
     */
    embedded?: CollectionModelEntityModelShipmentDtoEmbedded;
    /**
     * 
     * @type {{ [key: string]: FulfillmentLink; }}
     * @memberof PagedModelEntityModelShipmentDto
     */
    links?: { [key: string]: FulfillmentLink; };
    /**
     * 
     * @type {PageMetadata}
     * @memberof PagedModelEntityModelShipmentDto
     */
    page?: PageMetadata;
}
/**
 * 
 * @export
 * @interface PagedModelEntityModelWorkflowProcessDto
 */
export interface PagedModelEntityModelWorkflowProcessDto {
    /**
     * 
     * @type {PagedModelEntityModelWorkflowProcessDtoEmbedded}
     * @memberof PagedModelEntityModelWorkflowProcessDto
     */
    embedded?: PagedModelEntityModelWorkflowProcessDtoEmbedded;
    /**
     * 
     * @type {{ [key: string]: FulfillmentLink; }}
     * @memberof PagedModelEntityModelWorkflowProcessDto
     */
    links?: { [key: string]: FulfillmentLink; };
    /**
     * 
     * @type {PageMetadata}
     * @memberof PagedModelEntityModelWorkflowProcessDto
     */
    page?: PageMetadata;
}
/**
 * 
 * @export
 * @interface PagedModelEntityModelWorkflowProcessDtoEmbedded
 */
export interface PagedModelEntityModelWorkflowProcessDtoEmbedded {
    /**
     * 
     * @type {Array<EntityModelWorkflowProcessDto>}
     * @memberof PagedModelEntityModelWorkflowProcessDtoEmbedded
     */
    processes?: Array<EntityModelWorkflowProcessDto>;
}
/**
 * 
 * @export
 * @interface PhoneDto
 */
export interface PhoneDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof PhoneDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof PhoneDto
     */
    home?: string;
    /**
     * 
     * @type {string}
     * @memberof PhoneDto
     */
    mobile?: string;
    /**
     * 
     * @type {string}
     * @memberof PhoneDto
     */
    work?: string;
}
/**
 * 
 * @export
 * @interface PickWaveBinRangeDto
 */
export interface PickWaveBinRangeDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof PickWaveBinRangeDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof PickWaveBinRangeDto
     */
    startBinName?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveBinRangeDto
     */
    endBinName?: string;
}
/**
 * 
 * @export
 * @interface PickWaveContent
 */
export interface PickWaveContent {
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent
     */
    contentId?: string;
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
    externalOrderId?: string;
    /**
     * 
     * @type {number}
     * @memberof PickWaveContent
     */
    shipmentNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof PickWaveContent
     */
    itemLineId?: number;
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
    actualQuantity?: number;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent
     */
    status?: PickWaveContentStatusEnum;
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
    optionAttributeFQN?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent
     */
    productCode?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent
     */
    variationProductCode?: string;
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
    upc?: string;
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
    imageUrl?: string;
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
    locatorName?: string;
    /**
     * 
     * @type {FulfillmentAuditInfo}
     * @memberof PickWaveContent
     */
    auditInfo?: FulfillmentAuditInfo;
    /**
     * 
     * @type {Array<FulfillmentProductOption>}
     * @memberof PickWaveContent
     */
    options?: Array<FulfillmentProductOption>;
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
 * @interface PickWaveContentDto
 */
export interface PickWaveContentDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof PickWaveContentDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof PickWaveContentDto
     */
    contentId?: string;
    /**
     * 
     * @type {number}
     * @memberof PickWaveContentDto
     */
    orderNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContentDto
     */
    externalOrderId?: string;
    /**
     * 
     * @type {number}
     * @memberof PickWaveContentDto
     */
    shipmentNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof PickWaveContentDto
     */
    itemLineId?: number;
    /**
     * 
     * @type {number}
     * @memberof PickWaveContentDto
     */
    quantity?: number;
    /**
     * 
     * @type {number}
     * @memberof PickWaveContentDto
     */
    actualQuantity?: number;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContentDto
     */
    status?: PickWaveContentDtoStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof PickWaveContentDto
     */
    binId?: number;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContentDto
     */
    binName?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContentDto
     */
    optionAttributeFQN?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContentDto
     */
    productCode?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContentDto
     */
    variationProductCode?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContentDto
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContentDto
     */
    upc?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContentDto
     */
    sku?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContentDto
     */
    imageUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContentDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContentDto
     */
    locatorName?: string;
    /**
     * 
     * @type {AuditInfoDto}
     * @memberof PickWaveContentDto
     */
    auditInfo?: AuditInfoDto;
    /**
     * 
     * @type {Array<ProductOptionDto>}
     * @memberof PickWaveContentDto
     */
    options?: Array<ProductOptionDto>;
}


/**
 * @export
 */
export const PickWaveContentDtoStatusEnum = {
    InProgress: 'IN_PROGRESS',
    Picked: 'PICKED',
    Removed: 'REMOVED'
} as const;
export type PickWaveContentDtoStatusEnum = typeof PickWaveContentDtoStatusEnum[keyof typeof PickWaveContentDtoStatusEnum];

/**
 * 
 * @export
 * @interface PickWaveDto
 */
export interface PickWaveDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof PickWaveDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof PickWaveDto
     */
    pickWaveId?: string;
    /**
     * 
     * @type {number}
     * @memberof PickWaveDto
     */
    tenantId?: number;
    /**
     * 
     * @type {number}
     * @memberof PickWaveDto
     */
    pickWaveNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof PickWaveDto
     */
    parentPickWaveNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof PickWaveDto
     */
    recoveryPickWaveNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof PickWaveDto
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveDto
     */
    userDisplayName?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof PickWaveDto
     */
    shipmentNumbers?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof PickWaveDto
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveDto
     */
    pickWaveStatus?: PickWaveDtoPickWaveStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof PickWaveDto
     */
    pickType?: PickWaveDtoPickTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof PickWaveDto
     */
    maxShipments?: number;
    /**
     * 
     * @type {string}
     * @memberof PickWaveDto
     */
    shipmentType?: string;
    /**
     * 
     * @type {Array<PickWaveContentDto>}
     * @memberof PickWaveDto
     */
    contents?: Array<PickWaveContentDto>;
    /**
     * 
     * @type {AuditInfoDto}
     * @memberof PickWaveDto
     */
    auditInfo?: AuditInfoDto;
    /**
     * 
     * @type {Array<ChangeMessageDto>}
     * @memberof PickWaveDto
     */
    changeMessages?: Array<ChangeMessageDto>;
}


/**
 * @export
 */
export const PickWaveDtoPickWaveStatusEnum = {
    Error: 'ERROR',
    Pending: 'PENDING',
    InProgress: 'IN_PROGRESS',
    Closed: 'CLOSED',
    PendingRecovery: 'PENDING_RECOVERY'
} as const;
export type PickWaveDtoPickWaveStatusEnum = typeof PickWaveDtoPickWaveStatusEnum[keyof typeof PickWaveDtoPickWaveStatusEnum];

/**
 * @export
 */
export const PickWaveDtoPickTypeEnum = {
    Normal: 'NORMAL',
    Single: 'SINGLE',
    Multiple: 'MULTIPLE'
} as const;
export type PickWaveDtoPickTypeEnum = typeof PickWaveDtoPickTypeEnum[keyof typeof PickWaveDtoPickTypeEnum];

/**
 * 
 * @export
 * @interface PickWaveProductMatchDto
 */
export interface PickWaveProductMatchDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof PickWaveProductMatchDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof PickWaveProductMatchDto
     */
    matchType: PickWaveProductMatchDtoMatchTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof PickWaveProductMatchDto
     */
    identifier: PickWaveProductMatchDtoIdentifierEnum;
    /**
     * 
     * @type {string}
     * @memberof PickWaveProductMatchDto
     */
    value?: string;
}


/**
 * @export
 */
export const PickWaveProductMatchDtoMatchTypeEnum = {
    Exact: 'EXACT',
    Contains: 'CONTAINS',
    StartsWith: 'STARTS_WITH',
    EndsWith: 'ENDS_WITH'
} as const;
export type PickWaveProductMatchDtoMatchTypeEnum = typeof PickWaveProductMatchDtoMatchTypeEnum[keyof typeof PickWaveProductMatchDtoMatchTypeEnum];

/**
 * @export
 */
export const PickWaveProductMatchDtoIdentifierEnum = {
    Upc: 'UPC',
    ProductCode: 'PRODUCT_CODE'
} as const;
export type PickWaveProductMatchDtoIdentifierEnum = typeof PickWaveProductMatchDtoIdentifierEnum[keyof typeof PickWaveProductMatchDtoIdentifierEnum];

/**
 * 
 * @export
 * @interface PickupItemDto
 */
export interface PickupItemDto {
    /**
     * 
     * @type {number}
     * @memberof PickupItemDto
     */
    lineId: number;
    /**
     * 
     * @type {number}
     * @memberof PickupItemDto
     */
    quantity: number;
}
/**
 * 
 * @export
 * @interface PickupItemsRequestDto
 */
export interface PickupItemsRequestDto {
    /**
     * 
     * @type {boolean}
     * @memberof PickupItemsRequestDto
     */
    isUserAction?: boolean;
    /**
     * 
     * @type {Array<PickupItemDto>}
     * @memberof PickupItemsRequestDto
     */
    items: Array<PickupItemDto>;
}
/**
 * 
 * @export
 * @interface ProductOptionDto
 */
export interface ProductOptionDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof ProductOptionDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof ProductOptionDto
     */
    attributeFQN?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductOptionDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductOptionDto
     */
    dataType?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductOptionDto
     */
    stringValue?: string;
    /**
     * 
     * @type {object}
     * @memberof ProductOptionDto
     */
    value?: object;
    /**
     * 
     * @type {object}
     * @memberof ProductOptionDto
     */
    shopperEnteredValue?: object;
}
/**
 * 
 * @export
 * @interface ReadyForPrepItemDto
 */
export interface ReadyForPrepItemDto {
    /**
     * 
     * @type {number}
     * @memberof ReadyForPrepItemDto
     */
    lineId: number;
    /**
     * 
     * @type {number}
     * @memberof ReadyForPrepItemDto
     */
    quantity: number;
}
/**
 * 
 * @export
 * @interface ReadyForPrepItemsRequestDto
 */
export interface ReadyForPrepItemsRequestDto {
    /**
     * 
     * @type {boolean}
     * @memberof ReadyForPrepItemsRequestDto
     */
    isUserAction?: boolean;
    /**
     * 
     * @type {Array<ReadyForPrepItemDto>}
     * @memberof ReadyForPrepItemsRequestDto
     */
    items: Array<ReadyForPrepItemDto>;
}
/**
 * 
 * @export
 * @interface ReassignItemDto
 */
export interface ReassignItemDto {
    /**
     * 
     * @type {number}
     * @memberof ReassignItemDto
     */
    lineId: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignItemDto
     */
    quantity: number;
    /**
     * 
     * @type {ReassignedReasonDto}
     * @memberof ReassignItemDto
     */
    reassignedReason?: ReassignedReasonDto;
    /**
     * 
     * @type {string}
     * @memberof ReassignItemDto
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignItemDto
     */
    blockAssignment?: boolean;
}
/**
 * 
 * @export
 * @interface ReassignItemsRequestDto
 */
export interface ReassignItemsRequestDto {
    /**
     * 
     * @type {boolean}
     * @memberof ReassignItemsRequestDto
     */
    isUserAction?: boolean;
    /**
     * 
     * @type {Array<ReassignItemDto>}
     * @memberof ReassignItemsRequestDto
     */
    items: Array<ReassignItemDto>;
}
/**
 * 
 * @export
 * @interface ReassignShipmentRequestDto
 */
export interface ReassignShipmentRequestDto {
    /**
     * 
     * @type {boolean}
     * @memberof ReassignShipmentRequestDto
     */
    isUserAction?: boolean;
    /**
     * 
     * @type {ReassignedReasonDto}
     * @memberof ReassignShipmentRequestDto
     */
    reassignedReason?: ReassignedReasonDto;
    /**
     * 
     * @type {string}
     * @memberof ReassignShipmentRequestDto
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignShipmentRequestDto
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {Array<ReassignItemDto>}
     * @memberof ReassignShipmentRequestDto
     */
    items?: Array<ReassignItemDto>;
}
/**
 * 
 * @export
 * @interface ReassignedItemDto
 */
export interface ReassignedItemDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof ReassignedItemDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {number}
     * @memberof ReassignedItemDto
     */
    lineId: number;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItemDto
     */
    originalOrderItemId?: string;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItemDto
     */
    goodsType?: ReassignedItemDtoGoodsTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItemDto
     */
    optionAttributeFQN?: string;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItemDto
     */
    productCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItemDto
     */
    variationProductCode?: string;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItemDto
     */
    quantity: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItemDto
     */
    transferQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItemDto
     */
    trueTransferQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItemDto
     */
    readyForPickupQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItemDto
     */
    allocatedQuantity?: number;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItemDto
     */
    imageUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItemDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItemDto
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItemDto
     */
    upc?: string;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItemDto
     */
    sku?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignedItemDto
     */
    allowsBackOrder?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItemDto
     */
    unitPrice?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignedItemDto
     */
    isTaxable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItemDto
     */
    actualPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItemDto
     */
    overridePrice?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItemDto
     */
    itemDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItemDto
     */
    lineItemCost?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItemDto
     */
    itemTax: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItemDto
     */
    shipping: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItemDto
     */
    shippingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItemDto
     */
    shippingTax: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItemDto
     */
    handling: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItemDto
     */
    handlingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItemDto
     */
    handlingTax: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItemDto
     */
    duty?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItemDto
     */
    weightedShipmentAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItemDto
     */
    weightedLineItemTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItemDto
     */
    weightedShippingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItemDto
     */
    weightedShippingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItemDto
     */
    weightedHandlingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItemDto
     */
    weightedHandlingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItemDto
     */
    weightedDutyAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItemDto
     */
    taxableShipping?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItemDto
     */
    taxableLineItemCost?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItemDto
     */
    taxableHandling?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItemDto
     */
    weight?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItemDto
     */
    length?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItemDto
     */
    width?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItemDto
     */
    height?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItemDto
     */
    lineItemAdjustment?: number;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItemDto
     */
    weightUnit?: string;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItemDto
     */
    expectedDeliveryDate?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof ReassignedItemDto
     */
    data?: { [key: string]: object; };
    /**
     * 
     * @type {object}
     * @memberof ReassignedItemDto
     */
    taxData?: object;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItemDto
     */
    backorderReleaseDate?: string;
    /**
     * 
     * @type {AuditInfoDto}
     * @memberof ReassignedItemDto
     */
    auditInfo?: AuditInfoDto;
    /**
     * 
     * @type {Array<ProductOptionDto>}
     * @memberof ReassignedItemDto
     */
    options?: Array<ProductOptionDto>;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignedItemDto
     */
    manageStock?: boolean;
    /**
     * 
     * @type {Array<FulfillmentFieldDto>}
     * @memberof ReassignedItemDto
     */
    fulfillmentFields?: Array<FulfillmentFieldDto>;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItemDto
     */
    locatorName?: string;
    /**
     * 
     * @type {AppeasementReasonDto}
     * @memberof ReassignedItemDto
     * @deprecated
     */
    appeasementReason?: AppeasementReasonDto;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItemDto
     */
    creditCurrencyCode?: string;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItemDto
     */
    creditValue?: number;
    /**
     * 
     * @type {Array<GiftCardDto>}
     * @memberof ReassignedItemDto
     */
    giftCards?: Array<GiftCardDto>;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignedItemDto
     */
    isAssemblyRequired?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItemDto
     */
    parentItemId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReassignedItemDto
     */
    childItemIds?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignedItemDto
     */
    isPackagedStandAlone?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignedItemDto
     */
    allowsFutureAllocate?: boolean;
    /**
     * 
     * @type {Array<InventoryTagDto>}
     * @memberof ReassignedItemDto
     */
    inventoryTags?: Array<InventoryTagDto>;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItemDto
     */
    cartItemId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignedItemDto
     */
    isReservedInventory?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignedItemDto
     */
    allowsSubstitution?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItemDto
     */
    originalQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItemDto
     */
    originalLineId?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItemDto
     */
    substituteQuantity?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignedItemDto
     */
    isGift?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItemDto
     */
    giftMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItemDto
     */
    purchaseLocation?: string;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItemDto
     */
    priceMode?: ReassignedItemDtoPriceModeEnum;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItemDto
     */
    condition?: string;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItemDto
     */
    serialNumber?: string;
    /**
     * 
     * @type {Array<InventoryAllocationDto>}
     * @memberof ReassignedItemDto
     */
    inventoryAllocations?: Array<InventoryAllocationDto>;
    /**
     * 
     * @type {SubstituteInfoDto}
     * @memberof ReassignedItemDto
     */
    substituteInfo?: SubstituteInfoDto;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignedItemDto
     */
    autoSubstitution?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItemDto
     */
    substitutionType?: ReassignedItemDtoSubstitutionTypeEnum;
    /**
     * 
     * @type {BundleInfoDto}
     * @memberof ReassignedItemDto
     */
    bundleInfo?: BundleInfoDto;
    /**
     * 
     * @type {ReturnRuleInfoDto}
     * @memberof ReassignedItemDto
     */
    returnRuleInfo?: ReturnRuleInfoDto;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignedItemDto
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {ReassignedReasonDto}
     * @memberof ReassignedItemDto
     */
    reassignedReason?: ReassignedReasonDto;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItemDto
     */
    fulfillmentLocationCode?: string;
}


/**
 * @export
 */
export const ReassignedItemDtoGoodsTypeEnum = {
    Physical: 'Physical',
    Digital: 'Digital',
    DigitalCredit: 'DigitalCredit',
    DigitalGiftCard: 'DigitalGiftCard',
    Service: 'Service'
} as const;
export type ReassignedItemDtoGoodsTypeEnum = typeof ReassignedItemDtoGoodsTypeEnum[keyof typeof ReassignedItemDtoGoodsTypeEnum];

/**
 * @export
 */
export const ReassignedItemDtoPriceModeEnum = {
    Internal: 'Internal',
    External: 'External'
} as const;
export type ReassignedItemDtoPriceModeEnum = typeof ReassignedItemDtoPriceModeEnum[keyof typeof ReassignedItemDtoPriceModeEnum];

/**
 * @export
 */
export const ReassignedItemDtoSubstitutionTypeEnum = {
    PreFulfillment: 'PRE_FULFILLMENT',
    AtFullfillment: 'AT_FULLFILLMENT'
} as const;
export type ReassignedItemDtoSubstitutionTypeEnum = typeof ReassignedItemDtoSubstitutionTypeEnum[keyof typeof ReassignedItemDtoSubstitutionTypeEnum];

/**
 * 
 * @export
 * @interface ReassignedReasonDto
 */
export interface ReassignedReasonDto {
    /**
     * 
     * @type {string}
     * @memberof ReassignedReasonDto
     */
    reasonCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ReassignedReasonDto
     */
    moreInfo?: string;
}
/**
 * 
 * @export
 * @interface RejectItemDto
 */
export interface RejectItemDto {
    /**
     * 
     * @type {number}
     * @memberof RejectItemDto
     */
    lineId: number;
    /**
     * 
     * @type {number}
     * @memberof RejectItemDto
     */
    quantity: number;
    /**
     * 
     * @type {RejectedReasonDto}
     * @memberof RejectItemDto
     */
    rejectedReason?: RejectedReasonDto;
    /**
     * 
     * @type {boolean}
     * @memberof RejectItemDto
     */
    blockAssignment?: boolean;
}
/**
 * 
 * @export
 * @interface RejectItemsRequestDto
 */
export interface RejectItemsRequestDto {
    /**
     * 
     * @type {boolean}
     * @memberof RejectItemsRequestDto
     */
    isUserAction?: boolean;
    /**
     * 
     * @type {Array<RejectItemDto>}
     * @memberof RejectItemsRequestDto
     */
    items: Array<RejectItemDto>;
}
/**
 * 
 * @export
 * @interface RejectShipmentRequestDto
 */
export interface RejectShipmentRequestDto {
    /**
     * 
     * @type {boolean}
     * @memberof RejectShipmentRequestDto
     */
    isUserAction?: boolean;
    /**
     * 
     * @type {RejectedReasonDto}
     * @memberof RejectShipmentRequestDto
     */
    rejectedReason?: RejectedReasonDto;
    /**
     * 
     * @type {boolean}
     * @memberof RejectShipmentRequestDto
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {Array<RejectItemDto>}
     * @memberof RejectShipmentRequestDto
     */
    items?: Array<RejectItemDto>;
}
/**
 * 
 * @export
 * @interface RejectedItemDto
 */
export interface RejectedItemDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof RejectedItemDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {number}
     * @memberof RejectedItemDto
     */
    lineId: number;
    /**
     * 
     * @type {string}
     * @memberof RejectedItemDto
     */
    originalOrderItemId?: string;
    /**
     * 
     * @type {string}
     * @memberof RejectedItemDto
     */
    goodsType?: RejectedItemDtoGoodsTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RejectedItemDto
     */
    optionAttributeFQN?: string;
    /**
     * 
     * @type {string}
     * @memberof RejectedItemDto
     */
    productCode?: string;
    /**
     * 
     * @type {string}
     * @memberof RejectedItemDto
     */
    variationProductCode?: string;
    /**
     * 
     * @type {number}
     * @memberof RejectedItemDto
     */
    quantity: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItemDto
     */
    transferQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItemDto
     */
    trueTransferQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItemDto
     */
    readyForPickupQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItemDto
     */
    allocatedQuantity?: number;
    /**
     * 
     * @type {string}
     * @memberof RejectedItemDto
     */
    imageUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof RejectedItemDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RejectedItemDto
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof RejectedItemDto
     */
    upc?: string;
    /**
     * 
     * @type {string}
     * @memberof RejectedItemDto
     */
    sku?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RejectedItemDto
     */
    allowsBackOrder?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RejectedItemDto
     */
    unitPrice?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RejectedItemDto
     */
    isTaxable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RejectedItemDto
     */
    actualPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItemDto
     */
    overridePrice?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItemDto
     */
    itemDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItemDto
     */
    lineItemCost?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItemDto
     */
    itemTax: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItemDto
     */
    shipping: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItemDto
     */
    shippingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItemDto
     */
    shippingTax: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItemDto
     */
    handling: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItemDto
     */
    handlingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItemDto
     */
    handlingTax: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItemDto
     */
    duty?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItemDto
     */
    weightedShipmentAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItemDto
     */
    weightedLineItemTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItemDto
     */
    weightedShippingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItemDto
     */
    weightedShippingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItemDto
     */
    weightedHandlingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItemDto
     */
    weightedHandlingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItemDto
     */
    weightedDutyAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItemDto
     */
    taxableShipping?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItemDto
     */
    taxableLineItemCost?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItemDto
     */
    taxableHandling?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItemDto
     */
    weight?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItemDto
     */
    length?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItemDto
     */
    width?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItemDto
     */
    height?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItemDto
     */
    lineItemAdjustment?: number;
    /**
     * 
     * @type {string}
     * @memberof RejectedItemDto
     */
    weightUnit?: string;
    /**
     * 
     * @type {string}
     * @memberof RejectedItemDto
     */
    expectedDeliveryDate?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof RejectedItemDto
     */
    data?: { [key: string]: object; };
    /**
     * 
     * @type {object}
     * @memberof RejectedItemDto
     */
    taxData?: object;
    /**
     * 
     * @type {string}
     * @memberof RejectedItemDto
     */
    backorderReleaseDate?: string;
    /**
     * 
     * @type {AuditInfoDto}
     * @memberof RejectedItemDto
     */
    auditInfo?: AuditInfoDto;
    /**
     * 
     * @type {Array<ProductOptionDto>}
     * @memberof RejectedItemDto
     */
    options?: Array<ProductOptionDto>;
    /**
     * 
     * @type {boolean}
     * @memberof RejectedItemDto
     */
    manageStock?: boolean;
    /**
     * 
     * @type {Array<FulfillmentFieldDto>}
     * @memberof RejectedItemDto
     */
    fulfillmentFields?: Array<FulfillmentFieldDto>;
    /**
     * 
     * @type {string}
     * @memberof RejectedItemDto
     */
    locatorName?: string;
    /**
     * 
     * @type {AppeasementReasonDto}
     * @memberof RejectedItemDto
     * @deprecated
     */
    appeasementReason?: AppeasementReasonDto;
    /**
     * 
     * @type {string}
     * @memberof RejectedItemDto
     */
    creditCurrencyCode?: string;
    /**
     * 
     * @type {number}
     * @memberof RejectedItemDto
     */
    creditValue?: number;
    /**
     * 
     * @type {Array<GiftCardDto>}
     * @memberof RejectedItemDto
     */
    giftCards?: Array<GiftCardDto>;
    /**
     * 
     * @type {boolean}
     * @memberof RejectedItemDto
     */
    isAssemblyRequired?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RejectedItemDto
     */
    parentItemId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof RejectedItemDto
     */
    childItemIds?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof RejectedItemDto
     */
    isPackagedStandAlone?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RejectedItemDto
     */
    allowsFutureAllocate?: boolean;
    /**
     * 
     * @type {Array<InventoryTagDto>}
     * @memberof RejectedItemDto
     */
    inventoryTags?: Array<InventoryTagDto>;
    /**
     * 
     * @type {string}
     * @memberof RejectedItemDto
     */
    cartItemId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RejectedItemDto
     */
    isReservedInventory?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RejectedItemDto
     */
    allowsSubstitution?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RejectedItemDto
     */
    originalQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItemDto
     */
    originalLineId?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItemDto
     */
    substituteQuantity?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RejectedItemDto
     */
    isGift?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RejectedItemDto
     */
    giftMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof RejectedItemDto
     */
    purchaseLocation?: string;
    /**
     * 
     * @type {string}
     * @memberof RejectedItemDto
     */
    priceMode?: RejectedItemDtoPriceModeEnum;
    /**
     * 
     * @type {string}
     * @memberof RejectedItemDto
     */
    condition?: string;
    /**
     * 
     * @type {string}
     * @memberof RejectedItemDto
     */
    serialNumber?: string;
    /**
     * 
     * @type {Array<InventoryAllocationDto>}
     * @memberof RejectedItemDto
     */
    inventoryAllocations?: Array<InventoryAllocationDto>;
    /**
     * 
     * @type {SubstituteInfoDto}
     * @memberof RejectedItemDto
     */
    substituteInfo?: SubstituteInfoDto;
    /**
     * 
     * @type {boolean}
     * @memberof RejectedItemDto
     */
    autoSubstitution?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RejectedItemDto
     */
    substitutionType?: RejectedItemDtoSubstitutionTypeEnum;
    /**
     * 
     * @type {BundleInfoDto}
     * @memberof RejectedItemDto
     */
    bundleInfo?: BundleInfoDto;
    /**
     * 
     * @type {ReturnRuleInfoDto}
     * @memberof RejectedItemDto
     */
    returnRuleInfo?: ReturnRuleInfoDto;
    /**
     * 
     * @type {RejectedReasonDto}
     * @memberof RejectedItemDto
     */
    rejectedReason?: RejectedReasonDto;
    /**
     * 
     * @type {boolean}
     * @memberof RejectedItemDto
     */
    blockAssignment?: boolean;
}


/**
 * @export
 */
export const RejectedItemDtoGoodsTypeEnum = {
    Physical: 'Physical',
    Digital: 'Digital',
    DigitalCredit: 'DigitalCredit',
    DigitalGiftCard: 'DigitalGiftCard',
    Service: 'Service'
} as const;
export type RejectedItemDtoGoodsTypeEnum = typeof RejectedItemDtoGoodsTypeEnum[keyof typeof RejectedItemDtoGoodsTypeEnum];

/**
 * @export
 */
export const RejectedItemDtoPriceModeEnum = {
    Internal: 'Internal',
    External: 'External'
} as const;
export type RejectedItemDtoPriceModeEnum = typeof RejectedItemDtoPriceModeEnum[keyof typeof RejectedItemDtoPriceModeEnum];

/**
 * @export
 */
export const RejectedItemDtoSubstitutionTypeEnum = {
    PreFulfillment: 'PRE_FULFILLMENT',
    AtFullfillment: 'AT_FULLFILLMENT'
} as const;
export type RejectedItemDtoSubstitutionTypeEnum = typeof RejectedItemDtoSubstitutionTypeEnum[keyof typeof RejectedItemDtoSubstitutionTypeEnum];

/**
 * 
 * @export
 * @interface RejectedReasonDto
 */
export interface RejectedReasonDto {
    /**
     * 
     * @type {string}
     * @memberof RejectedReasonDto
     */
    reasonCode?: string;
    /**
     * 
     * @type {string}
     * @memberof RejectedReasonDto
     */
    moreInfo?: string;
}
/**
 * @type RemoveSpecificShipmentFromConsolidationGroup400Response
 * 
 * @export
 */
export type RemoveSpecificShipmentFromConsolidationGroup400Response = ErrorItem | ErrorResponse | string;
/**
 * 
 * @export
 * @interface ResultItem
 */
export interface ResultItem {
    /**
     * 
     * @type {string}
     * @memberof ResultItem
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof ResultItem
     */
    count?: number;
}
/**
 * 
 * @export
 * @interface ReturnRuleInfoDto
 */
export interface ReturnRuleInfoDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof ReturnRuleInfoDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {boolean}
     * @memberof ReturnRuleInfoDto
     */
    isReturnable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ReturnRuleInfoDto
     */
    maxQty?: number;
    /**
     * 
     * @type {number}
     * @memberof ReturnRuleInfoDto
     */
    maxDays?: number;
    /**
     * 
     * @type {string}
     * @memberof ReturnRuleInfoDto
     */
    ruleCode?: string;
}
/**
 * 
 * @export
 * @interface SaveMpsPackagesRequestDto
 */
export interface SaveMpsPackagesRequestDto {
    /**
     * 
     * @type {string}
     * @memberof SaveMpsPackagesRequestDto
     */
    masterTrackingNumber?: string;
    /**
     * 
     * @type {Array<PackageDto>}
     * @memberof SaveMpsPackagesRequestDto
     */
    packages?: Array<PackageDto>;
}
/**
 * 
 * @export
 * @interface ShipmentAttributeDto
 */
export interface ShipmentAttributeDto {
    /**
     * 
     * @type {string}
     * @memberof ShipmentAttributeDto
     */
    key?: string;
    /**
     * 
     * @type {object}
     * @memberof ShipmentAttributeDto
     */
    value?: object;
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
 * @interface ShipmentDto
 */
export interface ShipmentDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof ShipmentDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {number}
     * @memberof ShipmentDto
     */
    shipmentNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentDto
     */
    originalShipmentNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentDto
     */
    parentShipmentNumber?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof ShipmentDto
     */
    childShipmentNumbers?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ShipmentDto
     */
    transferShipmentNumbers?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof ShipmentDto
     */
    pickWaveNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof ShipmentDto
     */
    orderId: string;
    /**
     * 
     * @type {number}
     * @memberof ShipmentDto
     */
    orderNumber: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentDto
     */
    parentCheckoutNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof ShipmentDto
     */
    orderSubmitDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ShipmentDto
     */
    externalOrderId?: string;
    /**
     * 
     * @type {string}
     * @memberof ShipmentDto
     */
    userId?: string;
    /**
     * 
     * @type {number}
     * @memberof ShipmentDto
     */
    customerAccountId?: number;
    /**
     * 
     * @type {string}
     * @memberof ShipmentDto
     */
    customerTaxId?: string;
    /**
     * 
     * @type {number}
     * @memberof ShipmentDto
     */
    tenantId?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentDto
     */
    siteId?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentDto
     */
    customerAddressId?: number;
    /**
     * 
     * @type {string}
     * @memberof ShipmentDto
     */
    fulfillmentDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ShipmentDto
     */
    shipmentType: string;
    /**
     * 
     * @type {string}
     * @memberof ShipmentDto
     */
    shipmentStatus?: ShipmentDtoShipmentStatusEnum;
    /**
     * 
     * @type {FulfillmentShipmentStatusReason}
     * @memberof ShipmentDto
     */
    shipmentStatusReason?: FulfillmentShipmentStatusReason;
    /**
     * 
     * @type {string}
     * @memberof ShipmentDto
     */
    fulfillmentStatus?: ShipmentDtoFulfillmentStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof ShipmentDto
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ShipmentDto
     */
    assignedLocationCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ShipmentDto
     */
    workflowProcessId?: string;
    /**
     * 
     * @type {string}
     * @memberof ShipmentDto
     */
    workflowProcessContainerId?: string;
    /**
     * 
     * @type {number}
     * @memberof ShipmentDto
     */
    shipmentAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentDto
     */
    lineItemSubtotal?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentDto
     */
    lineItemTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentDto
     */
    lineItemTaxTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentDto
     */
    lineItemTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentDto
     */
    shippingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentDto
     */
    shippingSubtotal?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentDto
     */
    shippingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentDto
     */
    shippingTaxTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentDto
     */
    shippingTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentDto
     */
    handlingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentDto
     */
    handlingSubtotal?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentDto
     */
    handlingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentDto
     */
    handlingTaxTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentDto
     */
    handlingTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentDto
     */
    dutyAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentDto
     */
    dutyTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentDto
     */
    total: number;
    /**
     * 
     * @type {string}
     * @memberof ShipmentDto
     */
    currencyCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ShipmentDto
     */
    pickStatus?: ShipmentDtoPickStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof ShipmentDto
     */
    pickType?: ShipmentDtoPickTypeEnum;
    /**
     * 
     * @type {DestinationDto}
     * @memberof ShipmentDto
     */
    destination?: DestinationDto;
    /**
     * 
     * @type {CustomerDto}
     * @memberof ShipmentDto
     */
    customer?: CustomerDto;
    /**
     * 
     * @type {ContactDto}
     * @memberof ShipmentDto
     */
    alternateContact?: ContactDto;
    /**
     * 
     * @type {string}
     * @memberof ShipmentDto
     */
    shippingMethodCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ShipmentDto
     */
    shippingMethodName?: string;
    /**
     * 
     * @type {Array<ItemDto>}
     * @memberof ShipmentDto
     */
    items?: Array<ItemDto>;
    /**
     * 
     * @type {Array<CanceledItemDto>}
     * @memberof ShipmentDto
     */
    canceledItems?: Array<CanceledItemDto>;
    /**
     * 
     * @type {Array<ReassignedItemDto>}
     * @memberof ShipmentDto
     */
    reassignedItems?: Array<ReassignedItemDto>;
    /**
     * 
     * @type {Array<RejectedItemDto>}
     * @memberof ShipmentDto
     */
    rejectedItems?: Array<RejectedItemDto>;
    /**
     * 
     * @type {Array<TransferredItemDto>}
     * @memberof ShipmentDto
     */
    transferredItems?: Array<TransferredItemDto>;
    /**
     * 
     * @type {Array<PackageDto>}
     * @memberof ShipmentDto
     */
    packages?: Array<PackageDto>;
    /**
     * 
     * @type {WorkflowStateDto}
     * @memberof ShipmentDto
     */
    workflowState?: WorkflowStateDto;
    /**
     * 
     * @type {Array<ChangeMessageDto>}
     * @memberof ShipmentDto
     */
    changeMessages?: Array<ChangeMessageDto>;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof ShipmentDto
     */
    data?: { [key: string]: object; };
    /**
     * 
     * @type {object}
     * @memberof ShipmentDto
     */
    taxData?: object;
    /**
     * 
     * @type {string}
     * @memberof ShipmentDto
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof ShipmentDto
     */
    acceptedDate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ShipmentDto
     */
    readyForPickup?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ShipmentDto
     */
    readyForPickupDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ShipmentDto
     */
    receivedDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ShipmentDto
     */
    transitTime?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ShipmentDto
     */
    isExpress?: boolean;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof ShipmentDto
     */
    pickupInfo?: { [key: string]: object; };
    /**
     * 
     * @type {AuditInfoDto}
     * @memberof ShipmentDto
     */
    auditInfo?: AuditInfoDto;
    /**
     * 
     * @type {boolean}
     * @memberof ShipmentDto
     */
    readyToCapture?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ShipmentDto
     */
    isOptInForSms?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ShipmentDto
     */
    sentCustomerInTransitNotification?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ShipmentDto
     */
    sentCustomerAtStoreNotification?: boolean;
    /**
     * 
     * @type {ShopperNotesDto}
     * @memberof ShipmentDto
     */
    shopperNotes?: ShopperNotesDto;
    /**
     * 
     * @type {AppeasementReasonDto}
     * @memberof ShipmentDto
     * @deprecated
     */
    appeasementReason?: AppeasementReasonDto;
    /**
     * 
     * @type {Array<ShipmentNoteDto>}
     * @memberof ShipmentDto
     */
    shipmentNotes?: Array<ShipmentNoteDto>;
    /**
     * 
     * @type {boolean}
     * @memberof ShipmentDto
     */
    isAutoAssigned?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ShipmentDto
     */
    isHistoricalImport?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ShipmentDto
     */
    futureDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ShipmentDto
     */
    cartId?: string;
    /**
     * 
     * @type {Array<SubstitutedItemDto>}
     * @memberof ShipmentDto
     */
    substitutedItems?: Array<SubstitutedItemDto>;
    /**
     * 
     * @type {string}
     * @memberof ShipmentDto
     */
    orderType?: ShipmentDtoOrderTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ShipmentDto
     */
    workflowProcessVersion?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ShipmentDto
     */
    isFlatRateShipping?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ShipmentDto
     */
    masterTrackingNumber?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ShipmentDto
     */
    isImmutable?: boolean;
    /**
     * 
     * @type {MutabilityInfo}
     * @memberof ShipmentDto
     */
    mutabilityInfo?: MutabilityInfo;
    /**
     * 
     * @type {string}
     * @memberof ShipmentDto
     */
    shipmentConsolidationId?: string;
    /**
     * 
     * @type {Array<SlaDto>}
     * @memberof ShipmentDto
     */
    slas?: Array<SlaDto>;
    /**
     * 
     * @type {number}
     * @memberof ShipmentDto
     */
    minutesSinceOrdered?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipmentDto
     */
    minutesSinceOnWorkflowStep?: number;
    /**
     * 
     * @type {string}
     * @memberof ShipmentDto
     */
    lowestComplianceLevel?: string;
}


/**
 * @export
 */
export const ShipmentDtoShipmentStatusEnum = {
    Ready: 'READY',
    Reassigned: 'REASSIGNED',
    Backorder: 'BACKORDER',
    Canceled: 'CANCELED',
    Fulfilled: 'FULFILLED',
    CustomerCare: 'CUSTOMER_CARE',
    Deleted: 'DELETED',
    Future: 'FUTURE'
} as const;
export type ShipmentDtoShipmentStatusEnum = typeof ShipmentDtoShipmentStatusEnum[keyof typeof ShipmentDtoShipmentStatusEnum];

/**
 * @export
 */
export const ShipmentDtoFulfillmentStatusEnum = {
    NotFulfilled: 'NotFulfilled',
    Fulfilled: 'Fulfilled'
} as const;
export type ShipmentDtoFulfillmentStatusEnum = typeof ShipmentDtoFulfillmentStatusEnum[keyof typeof ShipmentDtoFulfillmentStatusEnum];

/**
 * @export
 */
export const ShipmentDtoPickStatusEnum = {
    Available: 'AVAILABLE',
    InWave: 'IN_WAVE',
    Picked: 'PICKED',
    Transfer: 'TRANSFER',
    Complete: 'COMPLETE'
} as const;
export type ShipmentDtoPickStatusEnum = typeof ShipmentDtoPickStatusEnum[keyof typeof ShipmentDtoPickStatusEnum];

/**
 * @export
 */
export const ShipmentDtoPickTypeEnum = {
    Normal: 'NORMAL',
    Single: 'SINGLE',
    Multiple: 'MULTIPLE'
} as const;
export type ShipmentDtoPickTypeEnum = typeof ShipmentDtoPickTypeEnum[keyof typeof ShipmentDtoPickTypeEnum];

/**
 * @export
 */
export const ShipmentDtoOrderTypeEnum = {
    Offline: 'Offline',
    Online: 'Online'
} as const;
export type ShipmentDtoOrderTypeEnum = typeof ShipmentDtoOrderTypeEnum[keyof typeof ShipmentDtoOrderTypeEnum];

/**
 * 
 * @export
 * @interface ShipmentGiftReceiptRequestDto
 */
export interface ShipmentGiftReceiptRequestDto {
    /**
     * 
     * @type {string}
     * @memberof ShipmentGiftReceiptRequestDto
     */
    giftMessage?: string;
}
/**
 * 
 * @export
 * @interface ShipmentNoteDto
 */
export interface ShipmentNoteDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof ShipmentNoteDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof ShipmentNoteDto
     */
    noteId?: string;
    /**
     * 
     * @type {string}
     * @memberof ShipmentNoteDto
     */
    noteText?: string;
    /**
     * 
     * @type {string}
     * @memberof ShipmentNoteDto
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof ShipmentNoteDto
     */
    role?: string;
    /**
     * 
     * @type {FulfillmentAuditInfo}
     * @memberof ShipmentNoteDto
     */
    auditInfo?: FulfillmentAuditInfo;
}
/**
 * 
 * @export
 * @interface ShipmentTypeSummaryDto
 */
export interface ShipmentTypeSummaryDto {
    /**
     * 
     * @type {string}
     * @memberof ShipmentTypeSummaryDto
     */
    shipmentType?: string;
    /**
     * 
     * @type {string}
     * @memberof ShipmentTypeSummaryDto
     */
    shipmentTypeDisplayName?: string;
    /**
     * 
     * @type {number}
     * @memberof ShipmentTypeSummaryDto
     */
    totalShipments?: number;
    /**
     * 
     * @type {Array<ResultItem>}
     * @memberof ShipmentTypeSummaryDto
     */
    workflowTaskNames?: Array<ResultItem>;
}
/**
 * 
 * @export
 * @interface ShipmentsAggregationResponseDto
 */
export interface ShipmentsAggregationResponseDto {
    /**
     * 
     * @type {FilterOptionsDto}
     * @memberof ShipmentsAggregationResponseDto
     */
    filterOptions?: FilterOptionsDto;
    /**
     * 
     * @type {FilteredShipmentsDto}
     * @memberof ShipmentsAggregationResponseDto
     */
    filteredShipmentsDto?: FilteredShipmentsDto;
}
/**
 * 
 * @export
 * @interface ShopperNotesDto
 */
export interface ShopperNotesDto {
    /**
     * 
     * @type {string}
     * @memberof ShopperNotesDto
     */
    giftMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof ShopperNotesDto
     */
    comments?: string;
    /**
     * 
     * @type {string}
     * @memberof ShopperNotesDto
     */
    deliveryInstructions?: string;
}
/**
 * 
 * @export
 * @interface SlaDto
 */
export interface SlaDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof SlaDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {number}
     * @memberof SlaDto
     */
    slaId?: number;
    /**
     * 
     * @type {string}
     * @memberof SlaDto
     */
    slaStatus?: string;
    /**
     * 
     * @type {string}
     * @memberof SlaDto
     */
    slaDefinitionId?: string;
    /**
     * 
     * @type {number}
     * @memberof SlaDto
     */
    slaDefinitionNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof SlaDto
     */
    slaName?: string;
    /**
     * 
     * @type {string}
     * @memberof SlaDto
     */
    slaCode?: string;
    /**
     * 
     * @type {string}
     * @memberof SlaDto
     */
    slaDueDate?: string;
    /**
     * 
     * @type {string}
     * @memberof SlaDto
     */
    slaDefinitionStatus?: string;
    /**
     * 
     * @type {string}
     * @memberof SlaDto
     */
    startDisplayValue?: string;
    /**
     * 
     * @type {string}
     * @memberof SlaDto
     */
    endDisplayValue?: string;
    /**
     * 
     * @type {string}
     * @memberof SlaDto
     */
    slaComplianceLevel?: string;
    /**
     * 
     * @type {ThresholdTrackingInfoDto}
     * @memberof SlaDto
     */
    compliantTrackingInfo?: ThresholdTrackingInfoDto;
    /**
     * 
     * @type {ThresholdTrackingInfoDto}
     * @memberof SlaDto
     */
    atRiskTrackingInfo?: ThresholdTrackingInfoDto;
    /**
     * 
     * @type {ThresholdTrackingInfoDto}
     * @memberof SlaDto
     */
    nonCompliantTrackingInfo?: ThresholdTrackingInfoDto;
}
/**
 * 
 * @export
 * @interface SlaSummaryDto
 */
export interface SlaSummaryDto {
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
    slaCode?: string;
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
    /**
     * 
     * @type {string}
     * @memberof SlaSummaryDto
     */
    endDisplayValue?: string;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof SlaSummaryDto
     */
    slaComplianceCounts?: { [key: string]: number; };
}
/**
 * 
 * @export
 * @interface SubstitutableItemResponseDto
 */
export interface SubstitutableItemResponseDto {
    /**
     * 
     * @type {string}
     * @memberof SubstitutableItemResponseDto
     */
    productCode?: string;
    /**
     * 
     * @type {string}
     * @memberof SubstitutableItemResponseDto
     */
    productUsage?: string;
    /**
     * 
     * @type {string}
     * @memberof SubstitutableItemResponseDto
     */
    baseProductCode?: string;
    /**
     * 
     * @type {string}
     * @memberof SubstitutableItemResponseDto
     */
    imageUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof SubstitutableItemResponseDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof SubstitutableItemResponseDto
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof SubstitutableItemResponseDto
     */
    upc?: string;
    /**
     * 
     * @type {string}
     * @memberof SubstitutableItemResponseDto
     */
    sku?: string;
    /**
     * 
     * @type {number}
     * @memberof SubstitutableItemResponseDto
     */
    unitPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof SubstitutableItemResponseDto
     */
    itemDiscount?: number;
    /**
     * 
     * @type {Array<BundledProductDto>}
     * @memberof SubstitutableItemResponseDto
     */
    bundledProducts?: Array<BundledProductDto>;
    /**
     * 
     * @type {number}
     * @memberof SubstitutableItemResponseDto
     */
    availableInventory?: number;
}
/**
 * 
 * @export
 * @interface SubstituteInfoDto
 */
export interface SubstituteInfoDto {
    /**
     * 
     * @type {string}
     * @memberof SubstituteInfoDto
     */
    optIn?: string;
    /**
     * 
     * @type {string}
     * @memberof SubstituteInfoDto
     */
    substituteProductCode?: string;
    /**
     * 
     * @type {string}
     * @memberof SubstituteInfoDto
     */
    substituteVariantCode?: string;
}
/**
 * 
 * @export
 * @interface SubstituteItemDto
 */
export interface SubstituteItemDto {
    /**
     * 
     * @type {number}
     * @memberof SubstituteItemDto
     */
    lineId: number;
    /**
     * 
     * @type {number}
     * @memberof SubstituteItemDto
     */
    quantity: number;
    /**
     * 
     * @type {string}
     * @memberof SubstituteItemDto
     */
    productCode?: string;
    /**
     * 
     * @type {string}
     * @memberof SubstituteItemDto
     */
    variationProductCode?: string;
    /**
     * 
     * @type {SubstituteReasonDto}
     * @memberof SubstituteItemDto
     */
    substituteReason?: SubstituteReasonDto;
}
/**
 * 
 * @export
 * @interface SubstituteItemsRequestDto
 */
export interface SubstituteItemsRequestDto {
    /**
     * 
     * @type {boolean}
     * @memberof SubstituteItemsRequestDto
     */
    isUserAction?: boolean;
    /**
     * 
     * @type {Array<SubstituteItemDto>}
     * @memberof SubstituteItemsRequestDto
     */
    items: Array<SubstituteItemDto>;
    /**
     * 
     * @type {number}
     * @memberof SubstituteItemsRequestDto
     */
    lineId?: number;
    /**
     * 
     * @type {number}
     * @memberof SubstituteItemsRequestDto
     */
    quantity?: number;
    /**
     * 
     * @type {boolean}
     * @memberof SubstituteItemsRequestDto
     */
    blockAssignment?: boolean;
}
/**
 * 
 * @export
 * @interface SubstituteReasonDto
 */
export interface SubstituteReasonDto {
    /**
     * 
     * @type {string}
     * @memberof SubstituteReasonDto
     */
    reasonCode?: string;
    /**
     * 
     * @type {string}
     * @memberof SubstituteReasonDto
     */
    moreInfo?: string;
}
/**
 * 
 * @export
 * @interface SubstitutedItemDto
 */
export interface SubstitutedItemDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof SubstitutedItemDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItemDto
     */
    lineId: number;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItemDto
     */
    originalOrderItemId?: string;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItemDto
     */
    goodsType?: SubstitutedItemDtoGoodsTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItemDto
     */
    optionAttributeFQN?: string;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItemDto
     */
    productCode?: string;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItemDto
     */
    variationProductCode?: string;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItemDto
     */
    quantity: number;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItemDto
     */
    transferQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItemDto
     */
    trueTransferQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItemDto
     */
    readyForPickupQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItemDto
     */
    allocatedQuantity?: number;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItemDto
     */
    imageUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItemDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItemDto
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItemDto
     */
    upc?: string;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItemDto
     */
    sku?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SubstitutedItemDto
     */
    allowsBackOrder?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItemDto
     */
    unitPrice?: number;
    /**
     * 
     * @type {boolean}
     * @memberof SubstitutedItemDto
     */
    isTaxable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItemDto
     */
    actualPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItemDto
     */
    overridePrice?: number;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItemDto
     */
    itemDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItemDto
     */
    lineItemCost?: number;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItemDto
     */
    itemTax: number;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItemDto
     */
    shipping: number;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItemDto
     */
    shippingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItemDto
     */
    shippingTax: number;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItemDto
     */
    handling: number;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItemDto
     */
    handlingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItemDto
     */
    handlingTax: number;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItemDto
     */
    duty?: number;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItemDto
     */
    weightedShipmentAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItemDto
     */
    weightedLineItemTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItemDto
     */
    weightedShippingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItemDto
     */
    weightedShippingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItemDto
     */
    weightedHandlingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItemDto
     */
    weightedHandlingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItemDto
     */
    weightedDutyAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItemDto
     */
    taxableShipping?: number;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItemDto
     */
    taxableLineItemCost?: number;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItemDto
     */
    taxableHandling?: number;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItemDto
     */
    weight?: number;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItemDto
     */
    length?: number;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItemDto
     */
    width?: number;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItemDto
     */
    height?: number;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItemDto
     */
    lineItemAdjustment?: number;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItemDto
     */
    weightUnit?: string;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItemDto
     */
    expectedDeliveryDate?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof SubstitutedItemDto
     */
    data?: { [key: string]: object; };
    /**
     * 
     * @type {object}
     * @memberof SubstitutedItemDto
     */
    taxData?: object;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItemDto
     */
    backorderReleaseDate?: string;
    /**
     * 
     * @type {AuditInfoDto}
     * @memberof SubstitutedItemDto
     */
    auditInfo?: AuditInfoDto;
    /**
     * 
     * @type {Array<ProductOptionDto>}
     * @memberof SubstitutedItemDto
     */
    options?: Array<ProductOptionDto>;
    /**
     * 
     * @type {boolean}
     * @memberof SubstitutedItemDto
     */
    manageStock?: boolean;
    /**
     * 
     * @type {Array<FulfillmentFieldDto>}
     * @memberof SubstitutedItemDto
     */
    fulfillmentFields?: Array<FulfillmentFieldDto>;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItemDto
     */
    locatorName?: string;
    /**
     * 
     * @type {AppeasementReasonDto}
     * @memberof SubstitutedItemDto
     * @deprecated
     */
    appeasementReason?: AppeasementReasonDto;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItemDto
     */
    creditCurrencyCode?: string;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItemDto
     */
    creditValue?: number;
    /**
     * 
     * @type {Array<GiftCardDto>}
     * @memberof SubstitutedItemDto
     */
    giftCards?: Array<GiftCardDto>;
    /**
     * 
     * @type {boolean}
     * @memberof SubstitutedItemDto
     */
    isAssemblyRequired?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItemDto
     */
    parentItemId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof SubstitutedItemDto
     */
    childItemIds?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof SubstitutedItemDto
     */
    isPackagedStandAlone?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SubstitutedItemDto
     */
    allowsFutureAllocate?: boolean;
    /**
     * 
     * @type {Array<InventoryTagDto>}
     * @memberof SubstitutedItemDto
     */
    inventoryTags?: Array<InventoryTagDto>;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItemDto
     */
    cartItemId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SubstitutedItemDto
     */
    isReservedInventory?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SubstitutedItemDto
     */
    allowsSubstitution?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItemDto
     */
    originalQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItemDto
     */
    originalLineId?: number;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItemDto
     */
    substituteQuantity?: number;
    /**
     * 
     * @type {boolean}
     * @memberof SubstitutedItemDto
     */
    isGift?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItemDto
     */
    giftMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItemDto
     */
    purchaseLocation?: string;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItemDto
     */
    priceMode?: SubstitutedItemDtoPriceModeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItemDto
     */
    condition?: string;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItemDto
     */
    serialNumber?: string;
    /**
     * 
     * @type {Array<InventoryAllocationDto>}
     * @memberof SubstitutedItemDto
     */
    inventoryAllocations?: Array<InventoryAllocationDto>;
    /**
     * 
     * @type {SubstituteInfoDto}
     * @memberof SubstitutedItemDto
     */
    substituteInfo?: SubstituteInfoDto;
    /**
     * 
     * @type {boolean}
     * @memberof SubstitutedItemDto
     */
    autoSubstitution?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItemDto
     */
    substitutionType?: SubstitutedItemDtoSubstitutionTypeEnum;
    /**
     * 
     * @type {BundleInfoDto}
     * @memberof SubstitutedItemDto
     */
    bundleInfo?: BundleInfoDto;
    /**
     * 
     * @type {ReturnRuleInfoDto}
     * @memberof SubstitutedItemDto
     */
    returnRuleInfo?: ReturnRuleInfoDto;
    /**
     * 
     * @type {SubstituteReasonDto}
     * @memberof SubstitutedItemDto
     */
    substituteReason?: SubstituteReasonDto;
    /**
     * 
     * @type {Array<number>}
     * @memberof SubstitutedItemDto
     */
    substituteItemLineIds?: Array<number>;
}


/**
 * @export
 */
export const SubstitutedItemDtoGoodsTypeEnum = {
    Physical: 'Physical',
    Digital: 'Digital',
    DigitalCredit: 'DigitalCredit',
    DigitalGiftCard: 'DigitalGiftCard',
    Service: 'Service'
} as const;
export type SubstitutedItemDtoGoodsTypeEnum = typeof SubstitutedItemDtoGoodsTypeEnum[keyof typeof SubstitutedItemDtoGoodsTypeEnum];

/**
 * @export
 */
export const SubstitutedItemDtoPriceModeEnum = {
    Internal: 'Internal',
    External: 'External'
} as const;
export type SubstitutedItemDtoPriceModeEnum = typeof SubstitutedItemDtoPriceModeEnum[keyof typeof SubstitutedItemDtoPriceModeEnum];

/**
 * @export
 */
export const SubstitutedItemDtoSubstitutionTypeEnum = {
    PreFulfillment: 'PRE_FULFILLMENT',
    AtFullfillment: 'AT_FULLFILLMENT'
} as const;
export type SubstitutedItemDtoSubstitutionTypeEnum = typeof SubstitutedItemDtoSubstitutionTypeEnum[keyof typeof SubstitutedItemDtoSubstitutionTypeEnum];

/**
 * 
 * @export
 * @interface TaskCompleteDto
 */
export interface TaskCompleteDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof TaskCompleteDto
     */
    taskBody?: { [key: string]: object; };
    /**
     * 
     * @type {HandleOptionDto}
     * @memberof TaskCompleteDto
     */
    handleOption?: HandleOptionDto;
}
/**
 * 
 * @export
 * @interface TaskDefinitionDto
 */
export interface TaskDefinitionDto {
    /**
     * 
     * @type {string}
     * @memberof TaskDefinitionDto
     * @deprecated
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskDefinitionDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskDefinitionDto
     */
    subject?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskDefinitionDto
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof TaskDefinitionDto
     */
    priority?: number;
    /**
     * 
     * @type {boolean}
     * @memberof TaskDefinitionDto
     */
    skippable?: boolean;
    /**
     * 
     * @type {Array<TaskInputDto>}
     * @memberof TaskDefinitionDto
     */
    inputs?: Array<TaskInputDto>;
}
/**
 * 
 * @export
 * @interface TaskDto
 */
export interface TaskDto {
    /**
     * 
     * @type {string}
     * @memberof TaskDto
     * @deprecated
     */
    taskId?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskDto
     */
    subject?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskDto
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TaskDto
     */
    skippable?: boolean;
    /**
     * 
     * @type {Array<TaskInputDto>}
     * @memberof TaskDto
     */
    inputs?: Array<TaskInputDto>;
    /**
     * 
     * @type {boolean}
     * @memberof TaskDto
     */
    active?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TaskDto
     */
    completed?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TaskDto
     */
    completedDate?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskDto
     */
    activeDate?: string;
    /**
     * 
     * @type {number}
     * @memberof TaskDto
     */
    completedDurationMillis?: number;
    /**
     * 
     * @type {{ [key: string]: FulfillmentLink; }}
     * @memberof TaskDto
     */
    links?: { [key: string]: FulfillmentLink; };
}
/**
 * 
 * @export
 * @interface TaskInputDto
 */
export interface TaskInputDto {
    /**
     * 
     * @type {string}
     * @memberof TaskInputDto
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TaskInputDto
     */
    required?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TaskInputDto
     */
    label?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskInputDto
     */
    helpMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskInputDto
     */
    type?: TaskInputDtoTypeEnum;
    /**
     * 
     * @type {Array<object>}
     * @memberof TaskInputDto
     */
    options?: Array<object>;
    /**
     * 
     * @type {string}
     * @memberof TaskInputDto
     */
    pattern?: string;
    /**
     * 
     * @type {number}
     * @memberof TaskInputDto
     */
    maxLength?: number;
    /**
     * 
     * @type {number}
     * @memberof TaskInputDto
     */
    minLength?: number;
    /**
     * 
     * @type {number}
     * @memberof TaskInputDto
     */
    maximum?: number;
    /**
     * 
     * @type {number}
     * @memberof TaskInputDto
     */
    minimum?: number;
}


/**
 * @export
 */
export const TaskInputDtoTypeEnum = {
    String: 'STRING',
    Integer: 'INTEGER',
    Number: 'NUMBER',
    Boolean: 'BOOLEAN',
    Object: 'OBJECT',
    List: 'LIST',
    Unknown: 'UNKNOWN'
} as const;
export type TaskInputDtoTypeEnum = typeof TaskInputDtoTypeEnum[keyof typeof TaskInputDtoTypeEnum];

/**
 * 
 * @export
 * @interface TaskReasonDto
 */
export interface TaskReasonDto {
    /**
     * 
     * @type {string}
     * @memberof TaskReasonDto
     */
    reasonCode?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskReasonDto
     */
    moreInfo?: string;
}
/**
 * 
 * @export
 * @interface ThresholdTrackingInfoDto
 */
export interface ThresholdTrackingInfoDto {
    /**
     * 
     * @type {string}
     * @memberof ThresholdTrackingInfoDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ThresholdTrackingInfoDto
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof ThresholdTrackingInfoDto
     */
    startDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ThresholdTrackingInfoDto
     */
    endDate?: string;
}
/**
 * 
 * @export
 * @interface TrackingDto
 */
export interface TrackingDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof TrackingDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof TrackingDto
     */
    number?: string;
    /**
     * 
     * @type {string}
     * @memberof TrackingDto
     */
    url?: string;
}
/**
 * 
 * @export
 * @interface TransferItemDto
 */
export interface TransferItemDto {
    /**
     * 
     * @type {number}
     * @memberof TransferItemDto
     */
    lineId: number;
    /**
     * 
     * @type {number}
     * @memberof TransferItemDto
     */
    quantity: number;
    /**
     * 
     * @type {TransferredReasonDto}
     * @memberof TransferItemDto
     */
    transferredReason?: TransferredReasonDto;
    /**
     * 
     * @type {string}
     * @memberof TransferItemDto
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TransferItemDto
     */
    blockAssignment?: boolean;
}
/**
 * 
 * @export
 * @interface TransferItemsRequestDto
 */
export interface TransferItemsRequestDto {
    /**
     * 
     * @type {boolean}
     * @memberof TransferItemsRequestDto
     */
    isUserAction?: boolean;
    /**
     * 
     * @type {Array<TransferItemDto>}
     * @memberof TransferItemsRequestDto
     */
    items: Array<TransferItemDto>;
}
/**
 * 
 * @export
 * @interface TransferShipmentRequestDto
 */
export interface TransferShipmentRequestDto {
    /**
     * 
     * @type {boolean}
     * @memberof TransferShipmentRequestDto
     */
    isUserAction?: boolean;
    /**
     * 
     * @type {TransferredReasonDto}
     * @memberof TransferShipmentRequestDto
     */
    transferredReason?: TransferredReasonDto;
    /**
     * 
     * @type {string}
     * @memberof TransferShipmentRequestDto
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TransferShipmentRequestDto
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {Array<TransferItemDto>}
     * @memberof TransferShipmentRequestDto
     */
    items?: Array<TransferItemDto>;
}
/**
 * 
 * @export
 * @interface TransferredItemDto
 */
export interface TransferredItemDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof TransferredItemDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {number}
     * @memberof TransferredItemDto
     */
    lineId: number;
    /**
     * 
     * @type {string}
     * @memberof TransferredItemDto
     */
    originalOrderItemId?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferredItemDto
     */
    goodsType?: TransferredItemDtoGoodsTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof TransferredItemDto
     */
    optionAttributeFQN?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferredItemDto
     */
    productCode?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferredItemDto
     */
    variationProductCode?: string;
    /**
     * 
     * @type {number}
     * @memberof TransferredItemDto
     */
    quantity: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItemDto
     */
    transferQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItemDto
     */
    trueTransferQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItemDto
     */
    readyForPickupQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItemDto
     */
    allocatedQuantity?: number;
    /**
     * 
     * @type {string}
     * @memberof TransferredItemDto
     */
    imageUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferredItemDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferredItemDto
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferredItemDto
     */
    upc?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferredItemDto
     */
    sku?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TransferredItemDto
     */
    allowsBackOrder?: boolean;
    /**
     * 
     * @type {number}
     * @memberof TransferredItemDto
     */
    unitPrice?: number;
    /**
     * 
     * @type {boolean}
     * @memberof TransferredItemDto
     */
    isTaxable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof TransferredItemDto
     */
    actualPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItemDto
     */
    overridePrice?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItemDto
     */
    itemDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItemDto
     */
    lineItemCost?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItemDto
     */
    itemTax: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItemDto
     */
    shipping: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItemDto
     */
    shippingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItemDto
     */
    shippingTax: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItemDto
     */
    handling: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItemDto
     */
    handlingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItemDto
     */
    handlingTax: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItemDto
     */
    duty?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItemDto
     */
    weightedShipmentAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItemDto
     */
    weightedLineItemTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItemDto
     */
    weightedShippingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItemDto
     */
    weightedShippingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItemDto
     */
    weightedHandlingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItemDto
     */
    weightedHandlingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItemDto
     */
    weightedDutyAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItemDto
     */
    taxableShipping?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItemDto
     */
    taxableLineItemCost?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItemDto
     */
    taxableHandling?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItemDto
     */
    weight?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItemDto
     */
    length?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItemDto
     */
    width?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItemDto
     */
    height?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItemDto
     */
    lineItemAdjustment?: number;
    /**
     * 
     * @type {string}
     * @memberof TransferredItemDto
     */
    weightUnit?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferredItemDto
     */
    expectedDeliveryDate?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof TransferredItemDto
     */
    data?: { [key: string]: object; };
    /**
     * 
     * @type {object}
     * @memberof TransferredItemDto
     */
    taxData?: object;
    /**
     * 
     * @type {string}
     * @memberof TransferredItemDto
     */
    backorderReleaseDate?: string;
    /**
     * 
     * @type {AuditInfoDto}
     * @memberof TransferredItemDto
     */
    auditInfo?: AuditInfoDto;
    /**
     * 
     * @type {Array<ProductOptionDto>}
     * @memberof TransferredItemDto
     */
    options?: Array<ProductOptionDto>;
    /**
     * 
     * @type {boolean}
     * @memberof TransferredItemDto
     */
    manageStock?: boolean;
    /**
     * 
     * @type {Array<FulfillmentFieldDto>}
     * @memberof TransferredItemDto
     */
    fulfillmentFields?: Array<FulfillmentFieldDto>;
    /**
     * 
     * @type {string}
     * @memberof TransferredItemDto
     */
    locatorName?: string;
    /**
     * 
     * @type {AppeasementReasonDto}
     * @memberof TransferredItemDto
     * @deprecated
     */
    appeasementReason?: AppeasementReasonDto;
    /**
     * 
     * @type {string}
     * @memberof TransferredItemDto
     */
    creditCurrencyCode?: string;
    /**
     * 
     * @type {number}
     * @memberof TransferredItemDto
     */
    creditValue?: number;
    /**
     * 
     * @type {Array<GiftCardDto>}
     * @memberof TransferredItemDto
     */
    giftCards?: Array<GiftCardDto>;
    /**
     * 
     * @type {boolean}
     * @memberof TransferredItemDto
     */
    isAssemblyRequired?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TransferredItemDto
     */
    parentItemId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof TransferredItemDto
     */
    childItemIds?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof TransferredItemDto
     */
    isPackagedStandAlone?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TransferredItemDto
     */
    allowsFutureAllocate?: boolean;
    /**
     * 
     * @type {Array<InventoryTagDto>}
     * @memberof TransferredItemDto
     */
    inventoryTags?: Array<InventoryTagDto>;
    /**
     * 
     * @type {string}
     * @memberof TransferredItemDto
     */
    cartItemId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TransferredItemDto
     */
    isReservedInventory?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TransferredItemDto
     */
    allowsSubstitution?: boolean;
    /**
     * 
     * @type {number}
     * @memberof TransferredItemDto
     */
    originalQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItemDto
     */
    originalLineId?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItemDto
     */
    substituteQuantity?: number;
    /**
     * 
     * @type {boolean}
     * @memberof TransferredItemDto
     */
    isGift?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TransferredItemDto
     */
    giftMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferredItemDto
     */
    purchaseLocation?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferredItemDto
     */
    priceMode?: TransferredItemDtoPriceModeEnum;
    /**
     * 
     * @type {string}
     * @memberof TransferredItemDto
     */
    condition?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferredItemDto
     */
    serialNumber?: string;
    /**
     * 
     * @type {Array<InventoryAllocationDto>}
     * @memberof TransferredItemDto
     */
    inventoryAllocations?: Array<InventoryAllocationDto>;
    /**
     * 
     * @type {SubstituteInfoDto}
     * @memberof TransferredItemDto
     */
    substituteInfo?: SubstituteInfoDto;
    /**
     * 
     * @type {boolean}
     * @memberof TransferredItemDto
     */
    autoSubstitution?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TransferredItemDto
     */
    substitutionType?: TransferredItemDtoSubstitutionTypeEnum;
    /**
     * 
     * @type {BundleInfoDto}
     * @memberof TransferredItemDto
     */
    bundleInfo?: BundleInfoDto;
    /**
     * 
     * @type {ReturnRuleInfoDto}
     * @memberof TransferredItemDto
     */
    returnRuleInfo?: ReturnRuleInfoDto;
    /**
     * 
     * @type {boolean}
     * @memberof TransferredItemDto
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {RejectedReasonDto}
     * @memberof TransferredItemDto
     */
    rejectedReason?: RejectedReasonDto;
    /**
     * 
     * @type {string}
     * @memberof TransferredItemDto
     */
    fulfillmentLocationCode?: string;
}


/**
 * @export
 */
export const TransferredItemDtoGoodsTypeEnum = {
    Physical: 'Physical',
    Digital: 'Digital',
    DigitalCredit: 'DigitalCredit',
    DigitalGiftCard: 'DigitalGiftCard',
    Service: 'Service'
} as const;
export type TransferredItemDtoGoodsTypeEnum = typeof TransferredItemDtoGoodsTypeEnum[keyof typeof TransferredItemDtoGoodsTypeEnum];

/**
 * @export
 */
export const TransferredItemDtoPriceModeEnum = {
    Internal: 'Internal',
    External: 'External'
} as const;
export type TransferredItemDtoPriceModeEnum = typeof TransferredItemDtoPriceModeEnum[keyof typeof TransferredItemDtoPriceModeEnum];

/**
 * @export
 */
export const TransferredItemDtoSubstitutionTypeEnum = {
    PreFulfillment: 'PRE_FULFILLMENT',
    AtFullfillment: 'AT_FULLFILLMENT'
} as const;
export type TransferredItemDtoSubstitutionTypeEnum = typeof TransferredItemDtoSubstitutionTypeEnum[keyof typeof TransferredItemDtoSubstitutionTypeEnum];

/**
 * 
 * @export
 * @interface TransferredReasonDto
 */
export interface TransferredReasonDto {
    /**
     * 
     * @type {string}
     * @memberof TransferredReasonDto
     */
    reasonCode?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferredReasonDto
     */
    moreInfo?: string;
}
/**
 * 
 * @export
 * @interface UpdateContactRequest
 */
export interface UpdateContactRequest {
    /**
     * 
     * @type {ContactDto}
     * @memberof UpdateContactRequest
     */
    contact?: ContactDto;
}
/**
 * 
 * @export
 * @interface WorkflowProcessVariableDto
 */
export interface WorkflowProcessVariableDto {
    /**
     * 
     * @type {string}
     * @memberof WorkflowProcessVariableDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkflowProcessVariableDto
     */
    type?: WorkflowProcessVariableDtoTypeEnum;
}


/**
 * @export
 */
export const WorkflowProcessVariableDtoTypeEnum = {
    String: 'STRING',
    Integer: 'INTEGER',
    Number: 'NUMBER',
    Boolean: 'BOOLEAN',
    Object: 'OBJECT',
    List: 'LIST',
    Unknown: 'UNKNOWN'
} as const;
export type WorkflowProcessVariableDtoTypeEnum = typeof WorkflowProcessVariableDtoTypeEnum[keyof typeof WorkflowProcessVariableDtoTypeEnum];

/**
 * 
 * @export
 * @interface WorkflowStateDto
 */
export interface WorkflowStateDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof WorkflowStateDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof WorkflowStateDto
     */
    shipmentState?: string;
    /**
     * 
     * @type {Array<TaskDto>}
     * @memberof WorkflowStateDto
     */
    taskList?: Array<TaskDto>;
    /**
     * 
     * @type {string}
     * @memberof WorkflowStateDto
     */
    activeTaskName?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkflowStateDto
     */
    processInstanceId?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkflowStateDto
     */
    completedDate?: string;
    /**
     * 
     * @type {AuditInfoDto}
     * @memberof WorkflowStateDto
     */
    auditInfo?: AuditInfoDto;
    /**
     * 
     * @type {{ [key: string]: BpmVariableDto; }}
     * @memberof WorkflowStateDto
     */
    variables?: { [key: string]: BpmVariableDto; };
}
