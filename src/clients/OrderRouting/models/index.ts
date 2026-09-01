/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface APIErrorResponse
 */
export interface APIErrorResponse {
    /**
     * 
     * @type {string}
     * @memberof APIErrorResponse
     */
    additionalInfo?: string;
    /**
     * 
     * @type {string}
     * @memberof APIErrorResponse
     */
    errorMessage?: string;
}
/**
 * 
 * @export
 * @interface AbstractFilter
 */
export interface AbstractFilter {
    /**
     * 
     * @type {string}
     * @memberof AbstractFilter
     */
    booleanOperator: AbstractFilterBooleanOperatorEnum;
    /**
     * 
     * @type {string}
     * @memberof AbstractFilter
     */
    created?: string;
    /**
     * 
     * @type {string}
     * @memberof AbstractFilter
     */
    creatorUsername?: string;
    /**
     * 
     * @type {string}
     * @memberof AbstractFilter
     */
    customAttributeName?: string;
    /**
     * 
     * @type {string}
     * @memberof AbstractFilter
     */
    dataPointExtensibleAttributeFQN?: string;
    /**
     * 
     * @type {string}
     * @memberof AbstractFilter
     */
    dataPointExtensibleAttributeName?: string;
    /**
     * 
     * @type {string}
     * @memberof AbstractFilter
     */
    dataPointExtensibleAttributeType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AbstractFilter
     */
    dataPointExtensibleFilter?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AbstractFilter
     */
    dotDelimitedPropertyName: string;
    /**
     * 
     * @type {number}
     * @memberof AbstractFilter
     */
    environmentID: number;
    /**
     * 
     * @type {string}
     * @memberof AbstractFilter
     */
    extensibleAttributeFQN?: string;
    /**
     * 
     * @type {string}
     * @memberof AbstractFilter
     */
    extensibleAttributeName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AbstractFilter
     */
    extensibleFilter?: boolean;
    /**
     * 
     * @type {number}
     * @memberof AbstractFilter
     */
    filterID?: number;
    /**
     * 
     * @type {number}
     * @memberof AbstractFilter
     */
    filterLogicalGroupOrderIndex?: number;
    /**
     * 
     * @type {AbstractFilterFilterUnit}
     * @memberof AbstractFilter
     */
    filterUnit?: AbstractFilterFilterUnit;
    /**
     * 
     * @type {boolean}
     * @memberof AbstractFilter
     */
    inventoryBasedFilter?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AbstractFilter
     */
    itemBasedFilter?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AbstractFilter
     */
    locationBasedFilter?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AbstractFilter
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof AbstractFilter
     */
    orderIndex?: number;
    /**
     * 
     * @type {boolean}
     * @memberof AbstractFilter
     */
    orderLocationFilterEqualToLocationOrInventoryFilter?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AbstractFilter
     */
    pathString?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AbstractFilter
     */
    persisted?: boolean;
    /**
     * 
     * @type {number}
     * @memberof AbstractFilter
     */
    siteID: number;
    /**
     * 
     * @type {Set<object>}
     * @memberof AbstractFilter
     */
    suggestionEventListeners?: Set<object>;
    /**
     * 
     * @type {number}
     * @memberof AbstractFilter
     */
    tenantID: number;
    /**
     * 
     * @type {string}
     * @memberof AbstractFilter
     */
    updated?: string;
    /**
     * 
     * @type {string}
     * @memberof AbstractFilter
     */
    updaterUsername?: string;
    /**
     * 
     * @type {UserContextInformation}
     * @memberof AbstractFilter
     */
    userContext?: UserContextInformation;
}


/**
 * @export
 */
export const AbstractFilterBooleanOperatorEnum = {
    Equal: 'filter.logic.equal',
    NotEqual: 'filter.logic.not.equal',
    GreaterThan: 'filter.logic.greater.than',
    LessThan: 'filter.logic.less.than',
    GreaterOrEqual: 'filter.logic.greater.or.equal',
    LessOrEqual: 'filter.logic.less.or.equal',
    In: 'filter.logic.in',
    NotIn: 'filter.logic.not.in',
    Between: 'filter.logic.between',
    StartsWith: 'filter.logic.starts.with',
    EndsWith: 'filter.logic.ends.with',
    Contains: 'filter.logic.contains',
    Subset: 'filter.logic.subset'
} as const;
export type AbstractFilterBooleanOperatorEnum = typeof AbstractFilterBooleanOperatorEnum[keyof typeof AbstractFilterBooleanOperatorEnum];

/**
 * 
 * @export
 * @interface AbstractFilterFilterUnit
 */
export interface AbstractFilterFilterUnit {
    /**
     * 
     * @type {object}
     * @memberof AbstractFilterFilterUnit
     */
    dimension?: object;
    /**
     * 
     * @type {AbstractFilterFilterUnitStandardUnit}
     * @memberof AbstractFilterFilterUnit
     */
    standardUnit?: AbstractFilterFilterUnitStandardUnit;
}
/**
 * 
 * @export
 * @interface AbstractFilterFilterUnitStandardUnit
 */
export interface AbstractFilterFilterUnitStandardUnit {
    /**
     * 
     * @type {object}
     * @memberof AbstractFilterFilterUnitStandardUnit
     */
    dimension?: object;
}
/**
 * 
 * @export
 * @interface AssignmentSuggestion
 */
export interface AssignmentSuggestion {
    /**
     * 
     * @type {string}
     * @memberof AssignmentSuggestion
     */
    bopisFulfillmentDate?: string;
    /**
     * 
     * @type {number}
     * @memberof AssignmentSuggestion
     */
    bopisProcessingTimeHours?: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof AssignmentSuggestion
     */
    data?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof AssignmentSuggestion
     */
    futureDate?: string;
    /**
     * 
     * @type {string}
     * @memberof AssignmentSuggestion
     */
    futureDateString?: string;
    /**
     * 
     * @type {string}
     * @memberof AssignmentSuggestion
     */
    locationCode?: string;
    /**
     * 
     * @type {number}
     * @memberof AssignmentSuggestion
     */
    locationID?: number;
    /**
     * 
     * @type {number}
     * @memberof AssignmentSuggestion
     */
    orderItemID?: number;
    /**
     * 
     * @type {number}
     * @memberof AssignmentSuggestion
     */
    quantity?: number;
    /**
     * 
     * @type {number}
     * @memberof AssignmentSuggestion
     */
    receiveProcessingTimeHours?: number;
    /**
     * 
     * @type {string}
     * @memberof AssignmentSuggestion
     */
    route?: AssignmentSuggestionRouteEnum;
    /**
     * 
     * @type {string}
     * @memberof AssignmentSuggestion
     */
    shipmentGroup?: string;
    /**
     * 
     * @type {string}
     * @memberof AssignmentSuggestion
     */
    sthFulfillmentDate?: string;
    /**
     * 
     * @type {number}
     * @memberof AssignmentSuggestion
     */
    sthProcessingTimeHours?: number;
    /**
     * 
     * @type {string}
     * @memberof AssignmentSuggestion
     */
    transferFulfillmentDate?: string;
    /**
     * 
     * @type {number}
     * @memberof AssignmentSuggestion
     */
    transferProcessingTimeHours?: number;
    /**
     * 
     * @type {string}
     * @memberof AssignmentSuggestion
     */
    transferToLocationCode?: string;
}


/**
 * @export
 */
export const AssignmentSuggestionRouteEnum = {
    Directship: 'DIRECTSHIP',
    Transfer: 'TRANSFER',
    SthConsolidated: 'STH_CONSOLIDATED',
    Return: 'RETURN',
    Disposition: 'DISPOSITION',
    Delivery: 'DELIVERY',
    Bopis: 'BOPIS'
} as const;
export type AssignmentSuggestionRouteEnum = typeof AssignmentSuggestionRouteEnum[keyof typeof AssignmentSuggestionRouteEnum];

/**
 * 
 * @export
 * @interface AssignmentSuggestionShipmentGroup
 */
export interface AssignmentSuggestionShipmentGroup {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof AssignmentSuggestionShipmentGroup
     */
    data?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof AssignmentSuggestionShipmentGroup
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof AssignmentSuggestionShipmentGroup
     */
    locationCode?: string;
}
/**
 * 
 * @export
 * @interface CandidateSortStrategiesModel
 */
export interface CandidateSortStrategiesModel {
    /**
     * 
     * @type {Array<string>}
     * @memberof CandidateSortStrategiesModel
     */
    candidateSortStrategies?: Array<CandidateSortStrategiesModelCandidateSortStrategiesEnum>;
}


/**
 * @export
 */
export const CandidateSortStrategiesModelCandidateSortStrategiesEnum = {
    MinimizeShipments: 'MINIMIZE_SHIPMENTS',
    GroupRankAndQuantity: 'GROUP_RANK_AND_QUANTITY',
    Quantity: 'QUANTITY',
    Distance: 'DISTANCE'
} as const;
export type CandidateSortStrategiesModelCandidateSortStrategiesEnum = typeof CandidateSortStrategiesModelCandidateSortStrategiesEnum[keyof typeof CandidateSortStrategiesModelCandidateSortStrategiesEnum];

/**
 * 
 * @export
 * @interface CandidateSuggestion
 */
export interface CandidateSuggestion {
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestion
     */
    addressLine1?: string;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestion
     */
    addressLine2?: string;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestion
     */
    addressLine3?: string;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestion
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestion
     */
    countryCode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CandidateSuggestion
     */
    directShip?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestion
     */
    distance?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CandidateSuggestion
     */
    express?: boolean;
    /**
     * 
     * @type {Array<CandidateSuggestionInventory>}
     * @memberof CandidateSuggestion
     */
    inventory?: Array<CandidateSuggestionInventory>;
    /**
     * 
     * @type {number}
     * @memberof CandidateSuggestion
     */
    latitude?: number;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestion
     */
    locationCode?: string;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestion
     */
    locationName?: string;
    /**
     * 
     * @type {number}
     * @memberof CandidateSuggestion
     */
    longitude?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CandidateSuggestion
     */
    pickup?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestion
     */
    postalCode?: string;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestion
     */
    state?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CandidateSuggestion
     */
    transferEnabled?: boolean;
}
/**
 * 
 * @export
 * @interface CandidateSuggestionFutureInventory
 */
export interface CandidateSuggestionFutureInventory {
    /**
     * 
     * @type {number}
     * @memberof CandidateSuggestionFutureInventory
     */
    available?: number;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestionFutureInventory
     */
    bopisFulfillmentDate?: string;
    /**
     * 
     * @type {number}
     * @memberof CandidateSuggestionFutureInventory
     */
    bopisProcessingTimeHours?: number;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestionFutureInventory
     */
    futureDate?: string;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestionFutureInventory
     */
    partNumber?: string;
    /**
     * 
     * @type {number}
     * @memberof CandidateSuggestionFutureInventory
     */
    receiveProcessingTimeHours?: number;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestionFutureInventory
     */
    sku?: string;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestionFutureInventory
     */
    sthFulfillmentDate?: string;
    /**
     * 
     * @type {number}
     * @memberof CandidateSuggestionFutureInventory
     */
    sthProcessingTimeHours?: number;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestionFutureInventory
     */
    transferFulfillmentDate?: string;
    /**
     * 
     * @type {number}
     * @memberof CandidateSuggestionFutureInventory
     */
    transferProcessingTimeHours?: number;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestionFutureInventory
     */
    upc?: string;
}
/**
 * 
 * @export
 * @interface CandidateSuggestionInventory
 */
export interface CandidateSuggestionInventory {
    /**
     * 
     * @type {number}
     * @memberof CandidateSuggestionInventory
     */
    available?: number;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestionInventory
     */
    bopisFulfillmentDate?: string;
    /**
     * 
     * @type {number}
     * @memberof CandidateSuggestionInventory
     */
    bopisProcessingTimeHours?: number;
    /**
     * 
     * @type {Array<CandidateSuggestionFutureInventory>}
     * @memberof CandidateSuggestionInventory
     */
    futureInventory?: Array<CandidateSuggestionFutureInventory>;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestionInventory
     */
    partNumber?: string;
    /**
     * 
     * @type {number}
     * @memberof CandidateSuggestionInventory
     */
    receiveProcessingTimeHours?: number;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestionInventory
     */
    sku?: string;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestionInventory
     */
    sthFulfillmentDate?: string;
    /**
     * 
     * @type {number}
     * @memberof CandidateSuggestionInventory
     */
    sthProcessingTimeHours?: number;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestionInventory
     */
    transferFulfillmentDate?: string;
    /**
     * 
     * @type {number}
     * @memberof CandidateSuggestionInventory
     */
    transferProcessingTimeHours?: number;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestionInventory
     */
    upc?: string;
}
/**
 * 
 * @export
 * @interface CandidateSuggestionsRequest
 */
export interface CandidateSuggestionsRequest {
    /**
     * 
     * @type {number}
     * @memberof CandidateSuggestionsRequest
     */
    environmentID?: number;
    /**
     * 
     * @type {Array<ExclusionListEntryLocationCode>}
     * @memberof CandidateSuggestionsRequest
     */
    exclusionListLocationCode?: Array<ExclusionListEntryLocationCode>;
    /**
     * 
     * @type {ExtendedCustomerInfo}
     * @memberof CandidateSuggestionsRequest
     */
    extendedCustomerInfo?: ExtendedCustomerInfo;
    /**
     * 
     * @type {ExtendedOrderInfo}
     * @memberof CandidateSuggestionsRequest
     */
    extendedOrderInfo?: ExtendedOrderInfo;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestionsRequest
     */
    futureDateLimit?: string;
    /**
     * 
     * @type {Array<ExclusionListEntryLocationCode>}
     * @memberof CandidateSuggestionsRequest
     */
    futureExclusionListLocationCode?: Array<ExclusionListEntryLocationCode>;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestionsRequest
     */
    inventoryRequestType?: CandidateSuggestionsRequestInventoryRequestTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof CandidateSuggestionsRequest
     */
    isExpress?: boolean;
    /**
     * 
     * @type {Array<OrderRoutingOrderItem>}
     * @memberof CandidateSuggestionsRequest
     */
    items: Array<OrderRoutingOrderItem>;
    /**
     * 
     * @type {Array<string>}
     * @memberof CandidateSuggestionsRequest
     */
    locationCodeWhiteList?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestionsRequest
     */
    orderType: CandidateSuggestionsRequestOrderTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestionsRequest
     */
    pickupLocationCode?: string;
    /**
     * 
     * @type {OrderRoutingShippingAddress}
     * @memberof CandidateSuggestionsRequest
     */
    shippingAddress?: OrderRoutingShippingAddress;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestionsRequest
     */
    sort?: CandidateSuggestionsRequestSortEnum;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestionsRequest
     */
    strategyID?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof CandidateSuggestionsRequest
     */
    tags?: { [key: string]: string; };
}


/**
 * @export
 */
export const CandidateSuggestionsRequestInventoryRequestTypeEnum = {
    All: 'ALL',
    Any: 'ANY',
    Partial: 'PARTIAL',
    AllStores: 'ALL_STORES'
} as const;
export type CandidateSuggestionsRequestInventoryRequestTypeEnum = typeof CandidateSuggestionsRequestInventoryRequestTypeEnum[keyof typeof CandidateSuggestionsRequestInventoryRequestTypeEnum];

/**
 * @export
 */
export const CandidateSuggestionsRequestOrderTypeEnum = {
    Directship: 'DIRECTSHIP',
    Transfer: 'TRANSFER',
    SthConsolidated: 'STH_CONSOLIDATED',
    Return: 'RETURN',
    Disposition: 'DISPOSITION',
    Delivery: 'DELIVERY',
    Bopis: 'BOPIS'
} as const;
export type CandidateSuggestionsRequestOrderTypeEnum = typeof CandidateSuggestionsRequestOrderTypeEnum[keyof typeof CandidateSuggestionsRequestOrderTypeEnum];

/**
 * @export
 */
export const CandidateSuggestionsRequestSortEnum = {
    SuggestionSort: 'SUGGESTION_SORT'
} as const;
export type CandidateSuggestionsRequestSortEnum = typeof CandidateSuggestionsRequestSortEnum[keyof typeof CandidateSuggestionsRequestSortEnum];

/**
 * 
 * @export
 * @interface CandidateSuggestionsResponse
 */
export interface CandidateSuggestionsResponse {
    /**
     * 
     * @type {Array<CandidateSuggestion>}
     * @memberof CandidateSuggestionsResponse
     */
    candidateSuggestions?: Array<CandidateSuggestion>;
}
/**
 * 
 * @export
 * @interface CreateStrategyRequest
 */
export interface CreateStrategyRequest {
    /**
     * 
     * @type {boolean}
     * @memberof CreateStrategyRequest
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CreateStrategyRequest
     */
    candidateSortStrategy?: CreateStrategyRequestCandidateSortStrategyEnum;
    /**
     * 
     * @type {string}
     * @memberof CreateStrategyRequest
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateStrategyRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CreateStrategyRequest
     */
    orderType: CreateStrategyRequestOrderTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof CreateStrategyRequest
     */
    preferAtomicAssignments: boolean;
}


/**
 * @export
 */
export const CreateStrategyRequestCandidateSortStrategyEnum = {
    MinimizeShipments: 'MINIMIZE_SHIPMENTS',
    GroupRankAndQuantity: 'GROUP_RANK_AND_QUANTITY',
    Quantity: 'QUANTITY',
    Distance: 'DISTANCE'
} as const;
export type CreateStrategyRequestCandidateSortStrategyEnum = typeof CreateStrategyRequestCandidateSortStrategyEnum[keyof typeof CreateStrategyRequestCandidateSortStrategyEnum];

/**
 * @export
 */
export const CreateStrategyRequestOrderTypeEnum = {
    Directship: 'DIRECTSHIP',
    Transfer: 'TRANSFER',
    SthConsolidated: 'STH_CONSOLIDATED',
    Return: 'RETURN',
    Disposition: 'DISPOSITION',
    Delivery: 'DELIVERY',
    Bopis: 'BOPIS'
} as const;
export type CreateStrategyRequestOrderTypeEnum = typeof CreateStrategyRequestOrderTypeEnum[keyof typeof CreateStrategyRequestOrderTypeEnum];

/**
 * 
 * @export
 * @interface CustomDataList
 */
export interface CustomDataList {
    /**
     * 
     * @type {string}
     * @memberof CustomDataList
     */
    created?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataList
     */
    creatorUsername?: string;
    /**
     * 
     * @type {number}
     * @memberof CustomDataList
     */
    customDataListID?: number;
    /**
     * 
     * @type {string}
     * @memberof CustomDataList
     */
    dataType: CustomDataListDataTypeEnum;
    /**
     * 
     * @type {Array<CustomDataListEntry>}
     * @memberof CustomDataList
     */
    entries?: Array<CustomDataListEntry>;
    /**
     * 
     * @type {number}
     * @memberof CustomDataList
     */
    environmentID: number;
    /**
     * 
     * @type {string}
     * @memberof CustomDataList
     */
    fileName?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataList
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataList
     */
    notes?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataList
     */
    pathString?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CustomDataList
     */
    persisted?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CustomDataList
     */
    siteID: number;
    /**
     * 
     * @type {string}
     * @memberof CustomDataList
     */
    state?: CustomDataListStateEnum;
    /**
     * 
     * @type {Set<string>}
     * @memberof CustomDataList
     */
    stringValues?: Set<string>;
    /**
     * 
     * @type {number}
     * @memberof CustomDataList
     */
    tenantID: number;
    /**
     * 
     * @type {string}
     * @memberof CustomDataList
     */
    updated?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataList
     */
    updaterUsername?: string;
    /**
     * 
     * @type {UserContextInformation}
     * @memberof CustomDataList
     */
    userContext?: UserContextInformation;
    /**
     * 
     * @type {Set<object>}
     * @memberof CustomDataList
     */
    values?: Set<object>;
}


/**
 * @export
 */
export const CustomDataListDataTypeEnum = {
    String: 'STRING',
    Number: 'NUMBER',
    Location: 'LOCATION',
    Date: 'DATE'
} as const;
export type CustomDataListDataTypeEnum = typeof CustomDataListDataTypeEnum[keyof typeof CustomDataListDataTypeEnum];

/**
 * @export
 */
export const CustomDataListStateEnum = {
    Ready: 'dataset.ready',
    Processing: 'dataset.processing',
    ErrorProcessing: 'dataset.error.processing'
} as const;
export type CustomDataListStateEnum = typeof CustomDataListStateEnum[keyof typeof CustomDataListStateEnum];

/**
 * 
 * @export
 * @interface CustomDataListEntry
 */
export interface CustomDataListEntry {
    /**
     * 
     * @type {number}
     * @memberof CustomDataListEntry
     */
    customDataListEntryID?: number;
    /**
     * 
     * @type {object}
     * @memberof CustomDataListEntry
     */
    data?: object;
    /**
     * 
     * @type {boolean}
     * @memberof CustomDataListEntry
     */
    dataValid?: boolean;
    /**
     * 
     * @type {CustomDataList}
     * @memberof CustomDataListEntry
     */
    list?: CustomDataList;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListEntry
     */
    notes?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListEntry
     */
    stringValue: string;
}
/**
 * 
 * @export
 * @interface CustomDataListEntryModel
 */
export interface CustomDataListEntryModel {
    /**
     * 
     * @type {number}
     * @memberof CustomDataListEntryModel
     */
    customDataListEntryId?: number;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListEntryModel
     */
    notes?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListEntryModel
     */
    stringValue?: string;
    /**
     * 
     * @type {object}
     * @memberof CustomDataListEntryModel
     */
    value?: object;
}
/**
 * 
 * @export
 * @interface CustomDataListEntryResponse
 */
export interface CustomDataListEntryResponse {
    /**
     * 
     * @type {number}
     * @memberof CustomDataListEntryResponse
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListEntryResponse
     */
    locationAddress?: string;
    /**
     * 
     * @type {number}
     * @memberof CustomDataListEntryResponse
     */
    locationID?: number;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListEntryResponse
     */
    locationName?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListEntryResponse
     */
    notes?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListEntryResponse
     */
    stringValue?: string;
}
/**
 * 
 * @export
 * @interface CustomDataListFilter
 */
export interface CustomDataListFilter {
    /**
     * 
     * @type {string}
     * @memberof CustomDataListFilter
     */
    booleanOperator: CustomDataListFilterBooleanOperatorEnum;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListFilter
     */
    created?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListFilter
     */
    creatorUsername?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListFilter
     */
    customAttributeName?: string;
    /**
     * 
     * @type {number}
     * @memberof CustomDataListFilter
     */
    customDataListID?: number;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListFilter
     */
    dataPointExtensibleAttributeFQN?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListFilter
     */
    dataPointExtensibleAttributeName?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListFilter
     */
    dataPointExtensibleAttributeType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CustomDataListFilter
     */
    dataPointExtensibleFilter?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListFilter
     */
    dotDelimitedPropertyName: string;
    /**
     * 
     * @type {number}
     * @memberof CustomDataListFilter
     */
    environmentID: number;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListFilter
     */
    extensibleAttributeFQN?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListFilter
     */
    extensibleAttributeName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CustomDataListFilter
     */
    extensibleFilter?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CustomDataListFilter
     */
    filterID?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomDataListFilter
     */
    filterLogicalGroupOrderIndex?: number;
    /**
     * 
     * @type {AbstractFilterFilterUnit}
     * @memberof CustomDataListFilter
     */
    filterUnit?: AbstractFilterFilterUnit;
    /**
     * 
     * @type {boolean}
     * @memberof CustomDataListFilter
     */
    inventoryBasedFilter?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CustomDataListFilter
     */
    itemBasedFilter?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CustomDataListFilter
     */
    locationBasedFilter?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListFilter
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof CustomDataListFilter
     */
    orderIndex?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CustomDataListFilter
     */
    orderLocationFilterEqualToLocationOrInventoryFilter?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListFilter
     */
    pathString?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CustomDataListFilter
     */
    persisted?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CustomDataListFilter
     */
    siteID: number;
    /**
     * 
     * @type {Set<object>}
     * @memberof CustomDataListFilter
     */
    suggestionEventListeners?: Set<object>;
    /**
     * 
     * @type {number}
     * @memberof CustomDataListFilter
     */
    tenantID: number;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListFilter
     */
    updated?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListFilter
     */
    updaterUsername?: string;
    /**
     * 
     * @type {UserContextInformation}
     * @memberof CustomDataListFilter
     */
    userContext?: UserContextInformation;
}


/**
 * @export
 */
export const CustomDataListFilterBooleanOperatorEnum = {
    Equal: 'filter.logic.equal',
    NotEqual: 'filter.logic.not.equal',
    GreaterThan: 'filter.logic.greater.than',
    LessThan: 'filter.logic.less.than',
    GreaterOrEqual: 'filter.logic.greater.or.equal',
    LessOrEqual: 'filter.logic.less.or.equal',
    In: 'filter.logic.in',
    NotIn: 'filter.logic.not.in',
    Between: 'filter.logic.between',
    StartsWith: 'filter.logic.starts.with',
    EndsWith: 'filter.logic.ends.with',
    Contains: 'filter.logic.contains',
    Subset: 'filter.logic.subset'
} as const;
export type CustomDataListFilterBooleanOperatorEnum = typeof CustomDataListFilterBooleanOperatorEnum[keyof typeof CustomDataListFilterBooleanOperatorEnum];

/**
 * 
 * @export
 * @interface CustomDataListPagedRequest
 */
export interface CustomDataListPagedRequest {
    /**
     * 
     * @type {number}
     * @memberof CustomDataListPagedRequest
     */
    pageNum?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomDataListPagedRequest
     */
    pageSize?: number;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListPagedRequest
     */
    searchIn?: CustomDataListPagedRequestSearchInEnum;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListPagedRequest
     */
    searchTerm?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListPagedRequest
     */
    sortBy?: CustomDataListPagedRequestSortByEnum;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListPagedRequest
     */
    sortDirection?: CustomDataListPagedRequestSortDirectionEnum;
}


/**
 * @export
 */
export const CustomDataListPagedRequestSearchInEnum = {
    Name: 'NAME',
    DataType: 'DATA_TYPE'
} as const;
export type CustomDataListPagedRequestSearchInEnum = typeof CustomDataListPagedRequestSearchInEnum[keyof typeof CustomDataListPagedRequestSearchInEnum];

/**
 * @export
 */
export const CustomDataListPagedRequestSortByEnum = {
    Name: 'NAME',
    DataType: 'DATA_TYPE'
} as const;
export type CustomDataListPagedRequestSortByEnum = typeof CustomDataListPagedRequestSortByEnum[keyof typeof CustomDataListPagedRequestSortByEnum];

/**
 * @export
 */
export const CustomDataListPagedRequestSortDirectionEnum = {
    Asc: 'ASC',
    Desc: 'DESC'
} as const;
export type CustomDataListPagedRequestSortDirectionEnum = typeof CustomDataListPagedRequestSortDirectionEnum[keyof typeof CustomDataListPagedRequestSortDirectionEnum];

/**
 * 
 * @export
 * @interface CustomDataListResponse
 */
export interface CustomDataListResponse {
    /**
     * 
     * @type {string}
     * @memberof CustomDataListResponse
     */
    created?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListResponse
     */
    creator?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListResponse
     */
    dataType?: CustomDataListResponseDataTypeEnum;
    /**
     * 
     * @type {Array<CustomDataListEntryResponse>}
     * @memberof CustomDataListResponse
     */
    entries?: Array<CustomDataListEntryResponse>;
    /**
     * 
     * @type {number}
     * @memberof CustomDataListResponse
     */
    environmentID?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomDataListResponse
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListResponse
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListResponse
     */
    notes?: string;
    /**
     * 
     * @type {number}
     * @memberof CustomDataListResponse
     */
    siteID?: number;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListResponse
     */
    state?: CustomDataListResponseStateEnum;
    /**
     * 
     * @type {number}
     * @memberof CustomDataListResponse
     */
    tenantID?: number;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListResponse
     */
    updated?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListResponse
     */
    updater?: string;
}


/**
 * @export
 */
export const CustomDataListResponseDataTypeEnum = {
    String: 'STRING',
    Number: 'NUMBER',
    Location: 'LOCATION',
    Date: 'DATE'
} as const;
export type CustomDataListResponseDataTypeEnum = typeof CustomDataListResponseDataTypeEnum[keyof typeof CustomDataListResponseDataTypeEnum];

/**
 * @export
 */
export const CustomDataListResponseStateEnum = {
    Ready: 'dataset.ready',
    Processing: 'dataset.processing',
    ErrorProcessing: 'dataset.error.processing'
} as const;
export type CustomDataListResponseStateEnum = typeof CustomDataListResponseStateEnum[keyof typeof CustomDataListResponseStateEnum];

/**
 * 
 * @export
 * @interface CustomDataListUploadResponse
 */
export interface CustomDataListUploadResponse {
    /**
     * 
     * @type {number}
     * @memberof CustomDataListUploadResponse
     */
    customDataListId?: number;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListUploadResponse
     */
    dataType?: CustomDataListUploadResponseDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListUploadResponse
     */
    description?: string;
    /**
     * 
     * @type {FileUploadResponseDetails}
     * @memberof CustomDataListUploadResponse
     */
    fileDetails?: FileUploadResponseDetails;
    /**
     * 
     * @type {Array<string>}
     * @memberof CustomDataListUploadResponse
     */
    importWarnings?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListUploadResponse
     */
    name?: string;
}


/**
 * @export
 */
export const CustomDataListUploadResponseDataTypeEnum = {
    String: 'STRING',
    Number: 'NUMBER',
    Location: 'LOCATION',
    Date: 'DATE'
} as const;
export type CustomDataListUploadResponseDataTypeEnum = typeof CustomDataListUploadResponseDataTypeEnum[keyof typeof CustomDataListUploadResponseDataTypeEnum];

/**
 * 
 * @export
 * @interface CustomDataListsModel
 */
export interface CustomDataListsModel {
    /**
     * 
     * @type {number}
     * @memberof CustomDataListsModel
     */
    customDataListId?: number;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListsModel
     */
    dataType?: CustomDataListsModelDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListsModel
     */
    description?: string;
    /**
     * 
     * @type {Array<CustomDataListEntryModel>}
     * @memberof CustomDataListsModel
     */
    entries?: Array<CustomDataListEntryModel>;
    /**
     * 
     * @type {number}
     * @memberof CustomDataListsModel
     */
    entryCount?: number;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListsModel
     */
    fileName?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListsModel
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListsModel
     */
    state?: CustomDataListsModelStateEnum;
}


/**
 * @export
 */
export const CustomDataListsModelDataTypeEnum = {
    String: 'STRING',
    Number: 'NUMBER',
    Location: 'LOCATION',
    Date: 'DATE'
} as const;
export type CustomDataListsModelDataTypeEnum = typeof CustomDataListsModelDataTypeEnum[keyof typeof CustomDataListsModelDataTypeEnum];

/**
 * @export
 */
export const CustomDataListsModelStateEnum = {
    Ready: 'dataset.ready',
    Processing: 'dataset.processing',
    ErrorProcessing: 'dataset.error.processing'
} as const;
export type CustomDataListsModelStateEnum = typeof CustomDataListsModelStateEnum[keyof typeof CustomDataListsModelStateEnum];

/**
 * 
 * @export
 * @interface CustomDataValueFilter
 */
export interface CustomDataValueFilter {
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueFilter
     */
    booleanOperator: CustomDataValueFilterBooleanOperatorEnum;
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueFilter
     */
    created?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueFilter
     */
    creatorUsername?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueFilter
     */
    customAttributeName?: string;
    /**
     * 
     * @type {CustomDataValueObject}
     * @memberof CustomDataValueFilter
     */
    customDataValue?: CustomDataValueObject;
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueFilter
     */
    dataPointExtensibleAttributeFQN?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueFilter
     */
    dataPointExtensibleAttributeName?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueFilter
     */
    dataPointExtensibleAttributeType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CustomDataValueFilter
     */
    dataPointExtensibleFilter?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueFilter
     */
    dotDelimitedPropertyName: string;
    /**
     * 
     * @type {number}
     * @memberof CustomDataValueFilter
     */
    environmentID: number;
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueFilter
     */
    extensibleAttributeFQN?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueFilter
     */
    extensibleAttributeName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CustomDataValueFilter
     */
    extensibleFilter?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CustomDataValueFilter
     */
    filterID?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomDataValueFilter
     */
    filterLogicalGroupOrderIndex?: number;
    /**
     * 
     * @type {AbstractFilterFilterUnit}
     * @memberof CustomDataValueFilter
     */
    filterUnit?: AbstractFilterFilterUnit;
    /**
     * 
     * @type {boolean}
     * @memberof CustomDataValueFilter
     */
    inventoryBasedFilter?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CustomDataValueFilter
     */
    itemBasedFilter?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CustomDataValueFilter
     */
    locationBasedFilter?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueFilter
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof CustomDataValueFilter
     */
    orderIndex?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CustomDataValueFilter
     */
    orderLocationFilterEqualToLocationOrInventoryFilter?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueFilter
     */
    pathString?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CustomDataValueFilter
     */
    persisted?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CustomDataValueFilter
     */
    siteID: number;
    /**
     * 
     * @type {Set<object>}
     * @memberof CustomDataValueFilter
     */
    suggestionEventListeners?: Set<object>;
    /**
     * 
     * @type {number}
     * @memberof CustomDataValueFilter
     */
    tenantID: number;
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueFilter
     */
    updated?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueFilter
     */
    updaterUsername?: string;
    /**
     * 
     * @type {UserContextInformation}
     * @memberof CustomDataValueFilter
     */
    userContext?: UserContextInformation;
}


/**
 * @export
 */
export const CustomDataValueFilterBooleanOperatorEnum = {
    Equal: 'filter.logic.equal',
    NotEqual: 'filter.logic.not.equal',
    GreaterThan: 'filter.logic.greater.than',
    LessThan: 'filter.logic.less.than',
    GreaterOrEqual: 'filter.logic.greater.or.equal',
    LessOrEqual: 'filter.logic.less.or.equal',
    In: 'filter.logic.in',
    NotIn: 'filter.logic.not.in',
    Between: 'filter.logic.between',
    StartsWith: 'filter.logic.starts.with',
    EndsWith: 'filter.logic.ends.with',
    Contains: 'filter.logic.contains',
    Subset: 'filter.logic.subset'
} as const;
export type CustomDataValueFilterBooleanOperatorEnum = typeof CustomDataValueFilterBooleanOperatorEnum[keyof typeof CustomDataValueFilterBooleanOperatorEnum];

/**
 * 
 * @export
 * @interface CustomDataValueObject
 */
export interface CustomDataValueObject {
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueObject
     */
    created?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueObject
     */
    creatorUsername?: string;
    /**
     * 
     * @type {number}
     * @memberof CustomDataValueObject
     */
    customDataValueID?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomDataValueObject
     */
    environmentID: number;
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueObject
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueObject
     */
    pathString?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CustomDataValueObject
     */
    persisted?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CustomDataValueObject
     */
    siteID: number;
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueObject
     */
    stringValue: string;
    /**
     * 
     * @type {number}
     * @memberof CustomDataValueObject
     */
    tenantID: number;
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueObject
     */
    updated?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueObject
     */
    updaterUsername?: string;
    /**
     * 
     * @type {UserContextInformation}
     * @memberof CustomDataValueObject
     */
    userContext?: UserContextInformation;
    /**
     * 
     * @type {object}
     * @memberof CustomDataValueObject
     */
    value?: object;
}
/**
 * 
 * @export
 * @interface EDDOrderItem
 */
export interface EDDOrderItem {
    /**
     * 
     * @type {boolean}
     * @memberof EDDOrderItem
     */
    backorderable?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EDDOrderItem
     */
    basicItem?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EDDOrderItem
     */
    condition?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof EDDOrderItem
     */
    customItemData?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof EDDOrderItem
     */
    dimensionUnit?: EDDOrderItemDimensionUnitEnum;
    /**
     * 
     * @type {ExtendedProductInfo}
     * @memberof EDDOrderItem
     */
    extendedProductInfo?: ExtendedProductInfo;
    /**
     * 
     * @type {boolean}
     * @memberof EDDOrderItem
     */
    futureOrderable?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EDDOrderItem
     */
    granularInventoryItem?: boolean;
    /**
     * 
     * @type {number}
     * @memberof EDDOrderItem
     */
    height?: number;
    /**
     * 
     * @type {boolean}
     * @memberof EDDOrderItem
     */
    isPreassigned?: boolean;
    /**
     * 
     * @type {number}
     * @memberof EDDOrderItem
     */
    itemDependency?: number;
    /**
     * 
     * @type {number}
     * @memberof EDDOrderItem
     */
    length?: number;
    /**
     * 
     * @type {number}
     * @memberof EDDOrderItem
     */
    orderItemID?: number;
    /**
     * 
     * @type {string}
     * @memberof EDDOrderItem
     */
    partNumber?: string;
    /**
     * 
     * @type {Array<PreAssignedLocation>}
     * @memberof EDDOrderItem
     */
    preAssignedLocations?: Array<PreAssignedLocation>;
    /**
     * 
     * @type {Array<ProductChildItem>}
     * @memberof EDDOrderItem
     */
    productChildItems?: Array<ProductChildItem>;
    /**
     * 
     * @type {string}
     * @memberof EDDOrderItem
     */
    productTitle?: string;
    /**
     * 
     * @type {string}
     * @memberof EDDOrderItem
     */
    productUsage?: EDDOrderItemProductUsageEnum;
    /**
     * 
     * @type {number}
     * @memberof EDDOrderItem
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof EDDOrderItem
     */
    serialNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof EDDOrderItem
     */
    shippingMethod?: string;
    /**
     * 
     * @type {string}
     * @memberof EDDOrderItem
     */
    sku?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof EDDOrderItem
     */
    tags?: { [key: string]: string; };
    /**
     * 
     * @type {boolean}
     * @memberof EDDOrderItem
     */
    taxable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EDDOrderItem
     */
    upc?: string;
    /**
     * 
     * @type {number}
     * @memberof EDDOrderItem
     */
    weight?: number;
    /**
     * 
     * @type {string}
     * @memberof EDDOrderItem
     */
    weightUnit?: EDDOrderItemWeightUnitEnum;
    /**
     * 
     * @type {number}
     * @memberof EDDOrderItem
     */
    width?: number;
}


/**
 * @export
 */
export const EDDOrderItemDimensionUnitEnum = {
    Kg: 'kg',
    Cm: 'cm',
    M: 'm',
    Liters: 'liters',
    Grams: 'grams',
    Oz: 'oz',
    Lb: 'lb',
    Inches: 'inches',
    Ft: 'ft'
} as const;
export type EDDOrderItemDimensionUnitEnum = typeof EDDOrderItemDimensionUnitEnum[keyof typeof EDDOrderItemDimensionUnitEnum];

/**
 * @export
 */
export const EDDOrderItemProductUsageEnum = {
    Standard: 'standard',
    Configurable: 'configurable',
    Bundle: 'bundle',
    ProductWithExtras: 'productWithExtras'
} as const;
export type EDDOrderItemProductUsageEnum = typeof EDDOrderItemProductUsageEnum[keyof typeof EDDOrderItemProductUsageEnum];

/**
 * @export
 */
export const EDDOrderItemWeightUnitEnum = {
    Kg: 'kg',
    Cm: 'cm',
    M: 'm',
    Liters: 'liters',
    Grams: 'grams',
    Oz: 'oz',
    Lb: 'lb',
    Inches: 'inches',
    Ft: 'ft'
} as const;
export type EDDOrderItemWeightUnitEnum = typeof EDDOrderItemWeightUnitEnum[keyof typeof EDDOrderItemWeightUnitEnum];

/**
 * 
 * @export
 * @interface EDDStateChangeSuggestion
 */
export interface EDDStateChangeSuggestion {
    /**
     * 
     * @type {number}
     * @memberof EDDStateChangeSuggestion
     */
    orderItemID?: number;
    /**
     * 
     * @type {number}
     * @memberof EDDStateChangeSuggestion
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof EDDStateChangeSuggestion
     */
    stateChange?: EDDStateChangeSuggestionStateChangeEnum;
    /**
     * 
     * @type {string}
     * @memberof EDDStateChangeSuggestion
     */
    upc?: string;
}


/**
 * @export
 */
export const EDDStateChangeSuggestionStateChangeEnum = {
    Cancel: 'CANCEL',
    CustomerCare: 'CUSTOMER_CARE',
    Available: 'AVAILABLE',
    Backorder: 'BACKORDER'
} as const;
export type EDDStateChangeSuggestionStateChangeEnum = typeof EDDStateChangeSuggestionStateChangeEnum[keyof typeof EDDStateChangeSuggestionStateChangeEnum];

/**
 * 
 * @export
 * @interface EddAssignmentSuggestion
 */
export interface EddAssignmentSuggestion {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof EddAssignmentSuggestion
     */
    data?: { [key: string]: string; };
    /**
     * 
     * @type {Array<EstimatedDeliveryDate>}
     * @memberof EddAssignmentSuggestion
     */
    estimatedDeliveryDates?: Array<EstimatedDeliveryDate>;
    /**
     * 
     * @type {string}
     * @memberof EddAssignmentSuggestion
     */
    futureDate?: string;
    /**
     * 
     * @type {string}
     * @memberof EddAssignmentSuggestion
     */
    futureDateString?: string;
    /**
     * 
     * @type {string}
     * @memberof EddAssignmentSuggestion
     */
    locationCode?: string;
    /**
     * 
     * @type {number}
     * @memberof EddAssignmentSuggestion
     */
    orderItemID?: number;
    /**
     * 
     * @type {number}
     * @memberof EddAssignmentSuggestion
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof EddAssignmentSuggestion
     */
    route?: EddAssignmentSuggestionRouteEnum;
    /**
     * 
     * @type {string}
     * @memberof EddAssignmentSuggestion
     */
    shipmentGroup?: string;
    /**
     * 
     * @type {string}
     * @memberof EddAssignmentSuggestion
     */
    transferToLocationCode?: string;
    /**
     * 
     * @type {string}
     * @memberof EddAssignmentSuggestion
     */
    upc?: string;
}


/**
 * @export
 */
export const EddAssignmentSuggestionRouteEnum = {
    Directship: 'DIRECTSHIP',
    Transfer: 'TRANSFER',
    SthConsolidated: 'STH_CONSOLIDATED',
    Return: 'RETURN',
    Disposition: 'DISPOSITION',
    Delivery: 'DELIVERY',
    Bopis: 'BOPIS'
} as const;
export type EddAssignmentSuggestionRouteEnum = typeof EddAssignmentSuggestionRouteEnum[keyof typeof EddAssignmentSuggestionRouteEnum];

/**
 * 
 * @export
 * @interface EddCalculationEvent
 */
export interface EddCalculationEvent {
    /**
     * 
     * @type {number}
     * @memberof EddCalculationEvent
     */
    causeID?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof EddCalculationEvent
     */
    errors?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof EddCalculationEvent
     */
    type: EddCalculationEventTypeEnum;
}


/**
 * @export
 */
export const EddCalculationEventTypeEnum = {
    NewEddCalculationRequest: 'NEW_EDD_CALCULATION_REQUEST',
    RoutingSuggestionReceived: 'ROUTING_SUGGESTION_RECEIVED',
    PreassignmentsProcessingInitiated: 'PREASSIGNMENTS_PROCESSING_INITIATED',
    EddResponseComplete: 'EDD_RESPONSE_COMPLETE',
    LocationDetailsFetched: 'LOCATION_DETAILS_FETCHED',
    RemorsePeriodApplied: 'REMORSE_PERIOD_APPLIED',
    FulfillmentDateCalculated: 'FULFILLMENT_DATE_CALCULATED',
    CutoffTimeCalculated: 'CUTOFF_TIME_CALCULATED',
    DaySkippedForAssignment: 'DAY_SKIPPED_FOR_ASSIGNMENT',
    NoValidDayFoundForAssignment: 'NO_VALID_DAY_FOUND_FOR_ASSIGNMENT',
    ProcessingHoursRollover: 'PROCESSING_HOURS_ROLLOVER',
    TransitTimeResponse: 'TRANSIT_TIME_RESPONSE',
    AssignmentEddCalculated: 'ASSIGNMENT_EDD_CALCULATED',
    TransitTimeError: 'TRANSIT_TIME_ERROR',
    TransferEddCalculated: 'TRANSFER_EDD_CALCULATED',
    ConsolidationLatestTransferSelected: 'CONSOLIDATION_LATEST_TRANSFER_SELECTED'
} as const;
export type EddCalculationEventTypeEnum = typeof EddCalculationEventTypeEnum[keyof typeof EddCalculationEventTypeEnum];

/**
 * 
 * @export
 * @interface EddCalculationLog
 */
export interface EddCalculationLog {
    /**
     * 
     * @type {string}
     * @memberof EddCalculationLog
     */
    cartID?: string;
    /**
     * 
     * @type {string}
     * @memberof EddCalculationLog
     */
    created?: string;
    /**
     * 
     * @type {string}
     * @memberof EddCalculationLog
     */
    creatorUsername?: string;
    /**
     * 
     * @type {number}
     * @memberof EddCalculationLog
     */
    eddCalculationLogID?: number;
    /**
     * 
     * @type {number}
     * @memberof EddCalculationLog
     */
    environmentID: number;
    /**
     * 
     * @type {Array<EddCalculationEvent>}
     * @memberof EddCalculationLog
     */
    events?: Array<EddCalculationEvent>;
    /**
     * 
     * @type {NewEddCalculationRequestEvent}
     * @memberof EddCalculationLog
     */
    fieldsFromNewEddCalculationRequest?: NewEddCalculationRequestEvent;
    /**
     * 
     * @type {number}
     * @memberof EddCalculationLog
     */
    orderID?: number;
    /**
     * 
     * @type {string}
     * @memberof EddCalculationLog
     */
    pathString?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EddCalculationLog
     */
    persisted?: boolean;
    /**
     * 
     * @type {number}
     * @memberof EddCalculationLog
     */
    siteID: number;
    /**
     * 
     * @type {number}
     * @memberof EddCalculationLog
     */
    suggestionID?: number;
    /**
     * 
     * @type {number}
     * @memberof EddCalculationLog
     */
    tenantID: number;
    /**
     * 
     * @type {string}
     * @memberof EddCalculationLog
     */
    updated?: string;
    /**
     * 
     * @type {string}
     * @memberof EddCalculationLog
     */
    updaterUsername?: string;
    /**
     * 
     * @type {UserContextInformation}
     * @memberof EddCalculationLog
     */
    userContext?: UserContextInformation;
}
/**
 * 
 * @export
 * @interface EddItemSuggestion
 */
export interface EddItemSuggestion {
    /**
     * 
     * @type {Array<EddAssignmentSuggestion>}
     * @memberof EddItemSuggestion
     */
    assignments?: Array<EddAssignmentSuggestion>;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof EddItemSuggestion
     */
    customItemData?: { [key: string]: object; };
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof EddItemSuggestion
     */
    data?: { [key: string]: string; };
    /**
     * 
     * @type {Array<EstimatedDeliveryDate>}
     * @memberof EddItemSuggestion
     */
    estimatedDeliveryDates?: Array<EstimatedDeliveryDate>;
    /**
     * 
     * @type {Array<EddAssignmentSuggestion>}
     * @memberof EddItemSuggestion
     */
    futureAssignments?: Array<EddAssignmentSuggestion>;
    /**
     * 
     * @type {Array<EddAssignmentSuggestion>}
     * @memberof EddItemSuggestion
     */
    nestedItemAssignments?: Array<EddAssignmentSuggestion>;
    /**
     * 
     * @type {number}
     * @memberof EddItemSuggestion
     */
    orderItemID?: number;
    /**
     * 
     * @type {number}
     * @memberof EddItemSuggestion
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof EddItemSuggestion
     */
    shipmentGroup?: string;
    /**
     * 
     * @type {string}
     * @memberof EddItemSuggestion
     */
    upc?: string;
}
/**
 * 
 * @export
 * @interface EddSuggestionRequest
 */
export interface EddSuggestionRequest {
    /**
     * 
     * @type {string}
     * @memberof EddSuggestionRequest
     */
    bundlingStrategy?: EddSuggestionRequestBundlingStrategyEnum;
    /**
     * 
     * @type {string}
     * @memberof EddSuggestionRequest
     */
    cartID?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof EddSuggestionRequest
     */
    customData?: { [key: string]: string; };
    /**
     * 
     * @type {Array<EDDOrderItem>}
     * @memberof EddSuggestionRequest
     */
    eddItems: Array<EDDOrderItem>;
    /**
     * 
     * @type {Array<EDDOrderItem>}
     * @memberof EddSuggestionRequest
     */
    eddItemsAndRegenerateOrderItems?: Array<EDDOrderItem>;
    /**
     * 
     * @type {number}
     * @memberof EddSuggestionRequest
     */
    environmentID?: number;
    /**
     * 
     * @type {Array<ExclusionListEntryLocationCode>}
     * @memberof EddSuggestionRequest
     */
    exclusionListLocationCode?: Array<ExclusionListEntryLocationCode>;
    /**
     * 
     * @type {ExtendedCustomerInfo}
     * @memberof EddSuggestionRequest
     */
    extendedCustomerInfo?: ExtendedCustomerInfo;
    /**
     * 
     * @type {ExtendedOrderInfo}
     * @memberof EddSuggestionRequest
     */
    extendedOrderInfo?: ExtendedOrderInfo;
    /**
     * 
     * @type {string}
     * @memberof EddSuggestionRequest
     */
    externalResponseID?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EddSuggestionRequest
     */
    forceSTHConsolidationOnSplitShipments?: boolean;
    /**
     * 
     * @type {number}
     * @memberof EddSuggestionRequest
     */
    fraud?: number;
    /**
     * 
     * @type {string}
     * @memberof EddSuggestionRequest
     */
    futureDateLimit?: string;
    /**
     * 
     * @type {Array<ExclusionListEntryLocationCode>}
     * @memberof EddSuggestionRequest
     */
    futureExclusionListLocationCode?: Array<ExclusionListEntryLocationCode>;
    /**
     * 
     * @type {string}
     * @memberof EddSuggestionRequest
     */
    inventoryRequestType?: EddSuggestionRequestInventoryRequestTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof EddSuggestionRequest
     */
    isExpress?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof EddSuggestionRequest
     */
    locationCodeWhiteList?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof EddSuggestionRequest
     */
    numShipmentsNotInRequest?: number;
    /**
     * 
     * @type {number}
     * @memberof EddSuggestionRequest
     */
    orderID?: number;
    /**
     * The order type for the Estimated Delivery Date (EDD) suggestion. Accepts `DIRECTSHIP`, `TRANSFER`, `DELIVERY`, or `BOPIS`.
     * @type {string}
     * @memberof EddSuggestionRequest
     */
    orderType: EddSuggestionRequestOrderTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof EddSuggestionRequest
     */
    pickupLocationCode?: string;
    /**
     * 
     * @type {number}
     * @memberof EddSuggestionRequest
     */
    remorsePeriodInMinutes?: number;
    /**
     * 
     * @type {OrderRoutingShippingAddress}
     * @memberof EddSuggestionRequest
     */
    shippingAddress?: OrderRoutingShippingAddress;
    /**
     * 
     * @type {string}
     * @memberof EddSuggestionRequest
     */
    shippingMethod?: string;
    /**
     * 
     * @type {string}
     * @memberof EddSuggestionRequest
     */
    sort?: EddSuggestionRequestSortEnum;
    /**
     * 
     * @type {string}
     * @memberof EddSuggestionRequest
     */
    sthConsolidationLocationOverride?: string;
    /**
     * 
     * @type {string}
     * @memberof EddSuggestionRequest
     */
    strategyID?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof EddSuggestionRequest
     */
    tags?: { [key: string]: string; };
    /**
     * 
     * @type {number}
     * @memberof EddSuggestionRequest
     */
    total: number;
}


/**
 * @export
 */
export const EddSuggestionRequestBundlingStrategyEnum = {
    ItemDependency: 'ITEM_DEPENDENCY'
} as const;
export type EddSuggestionRequestBundlingStrategyEnum = typeof EddSuggestionRequestBundlingStrategyEnum[keyof typeof EddSuggestionRequestBundlingStrategyEnum];

/**
 * @export
 */
export const EddSuggestionRequestInventoryRequestTypeEnum = {
    All: 'ALL',
    Any: 'ANY',
    Partial: 'PARTIAL',
    AllStores: 'ALL_STORES'
} as const;
export type EddSuggestionRequestInventoryRequestTypeEnum = typeof EddSuggestionRequestInventoryRequestTypeEnum[keyof typeof EddSuggestionRequestInventoryRequestTypeEnum];

/**
 * @export
 */
export const EddSuggestionRequestOrderTypeEnum = {
    Directship: 'DIRECTSHIP',
    Transfer: 'TRANSFER',
    Delivery: 'DELIVERY',
    Bopis: 'BOPIS'
} as const;
export type EddSuggestionRequestOrderTypeEnum = typeof EddSuggestionRequestOrderTypeEnum[keyof typeof EddSuggestionRequestOrderTypeEnum];

/**
 * @export
 */
export const EddSuggestionRequestSortEnum = {
    SuggestionSort: 'SUGGESTION_SORT'
} as const;
export type EddSuggestionRequestSortEnum = typeof EddSuggestionRequestSortEnum[keyof typeof EddSuggestionRequestSortEnum];

/**
 * 
 * @export
 * @interface EddSuggestionResponse
 */
export interface EddSuggestionResponse {
    /**
     * 
     * @type {Array<AssignmentSuggestionShipmentGroup>}
     * @memberof EddSuggestionResponse
     */
    assignmentSuggestionShipmentGroups?: Array<AssignmentSuggestionShipmentGroup>;
    /**
     * 
     * @type {Array<OrderRoutingOrderAttribute>}
     * @memberof EddSuggestionResponse
     */
    attributes?: Array<OrderRoutingOrderAttribute>;
    /**
     * 
     * @type {Array<number>}
     * @memberof EddSuggestionResponse
     */
    availableLocations?: Array<number>;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof EddSuggestionResponse
     */
    customData?: { [key: string]: string; };
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof EddSuggestionResponse
     */
    data?: { [key: string]: string; };
    /**
     * 
     * @type {Array<EddItemSuggestion>}
     * @memberof EddSuggestionResponse
     */
    eddAssignments?: Array<EddItemSuggestion>;
    /**
     * 
     * @type {EddCalculationLog}
     * @memberof EddSuggestionResponse
     */
    eddCalculationLog?: EddCalculationLog;
    /**
     * 
     * @type {number}
     * @memberof EddSuggestionResponse
     */
    eddCalculationLogID?: number;
    /**
     * 
     * @type {string}
     * @memberof EddSuggestionResponse
     */
    externalResponseID?: string;
    /**
     * 
     * @type {number}
     * @memberof EddSuggestionResponse
     */
    responseID?: number;
    /**
     * 
     * @type {string}
     * @memberof EddSuggestionResponse
     */
    route?: EddSuggestionResponseRouteEnum;
    /**
     * 
     * @type {{ [key: string]: Array<EDDStateChangeSuggestion>; }}
     * @memberof EddSuggestionResponse
     */
    stateChangeSuggestions?: { [key: string]: Array<EDDStateChangeSuggestion>; };
    /**
     * 
     * @type {SuggestionLog}
     * @memberof EddSuggestionResponse
     */
    suggestionLog?: SuggestionLog;
}


/**
 * @export
 */
export const EddSuggestionResponseRouteEnum = {
    Directship: 'DIRECTSHIP',
    Transfer: 'TRANSFER',
    SthConsolidated: 'STH_CONSOLIDATED',
    Return: 'RETURN',
    Disposition: 'DISPOSITION',
    Delivery: 'DELIVERY',
    Bopis: 'BOPIS'
} as const;
export type EddSuggestionResponseRouteEnum = typeof EddSuggestionResponseRouteEnum[keyof typeof EddSuggestionResponseRouteEnum];

/**
 * 
 * @export
 * @interface EddWindow
 */
export interface EddWindow {
    /**
     * 
     * @type {string}
     * @memberof EddWindow
     */
    deliveryDropoffEndTime?: string;
    /**
     * 
     * @type {string}
     * @memberof EddWindow
     */
    deliveryDropoffStartTime?: string;
}
/**
 * 
 * @export
 * @interface EstimatedDeliveryDate
 */
export interface EstimatedDeliveryDate {
    /**
     * 
     * @type {string}
     * @memberof EstimatedDeliveryDate
     */
    carrier?: string;
    /**
     * 
     * @type {object}
     * @memberof EstimatedDeliveryDate
     */
    data?: object;
    /**
     * 
     * @type {Array<EddWindow>}
     * @memberof EstimatedDeliveryDate
     */
    eddWindows?: Array<EddWindow>;
    /**
     * 
     * @type {string}
     * @memberof EstimatedDeliveryDate
     */
    estimatedDeliveryDate?: string;
    /**
     * 
     * @type {string}
     * @memberof EstimatedDeliveryDate
     */
    estimatedFulfillmentDate?: string;
    /**
     * 
     * @type {string}
     * @memberof EstimatedDeliveryDate
     */
    orderCutoffDate?: string;
    /**
     * 
     * @type {string}
     * @memberof EstimatedDeliveryDate
     */
    serviceType?: string;
}
/**
 * 
 * @export
 * @interface ExclusionListEntryLocationCode
 */
export interface ExclusionListEntryLocationCode {
    /**
     * 
     * @type {string}
     * @memberof ExclusionListEntryLocationCode
     */
    locationCode?: string;
    /**
     * 
     * @type {number}
     * @memberof ExclusionListEntryLocationCode
     */
    orderItemID?: number;
}
/**
 * 
 * @export
 * @interface ExtendedCustomerInfo
 */
export interface ExtendedCustomerInfo {
    /**
     * 
     * @type {string}
     * @memberof ExtendedCustomerInfo
     */
    accountType?: string;
    /**
     * 
     * @type {Array<OrderRoutingAttribute>}
     * @memberof ExtendedCustomerInfo
     */
    attributes?: Array<OrderRoutingAttribute>;
    /**
     * 
     * @type {string}
     * @memberof ExtendedCustomerInfo
     */
    companyOrOrganization?: string;
    /**
     * 
     * @type {string}
     * @memberof ExtendedCustomerInfo
     */
    customerId?: string;
    /**
     * 
     * @type {string}
     * @memberof ExtendedCustomerInfo
     */
    customerSinceDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ExtendedCustomerInfo
     */
    externalId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ExtendedCustomerInfo
     */
    segments?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof ExtendedCustomerInfo
     */
    taxExempt?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ExtendedCustomerInfo
     */
    taxId?: string;
}
/**
 * 
 * @export
 * @interface ExtendedOrderInfo
 */
export interface ExtendedOrderInfo {
    /**
     * 
     * @type {Array<OrderRoutingAttribute>}
     * @memberof ExtendedOrderInfo
     */
    attributes?: Array<OrderRoutingAttribute>;
    /**
     * 
     * @type {string}
     * @memberof ExtendedOrderInfo
     */
    orderId?: string;
    /**
     * 
     * @type {string}
     * @memberof ExtendedOrderInfo
     */
    type?: string;
}
/**
 * 
 * @export
 * @interface ExtendedProductInfo
 */
export interface ExtendedProductInfo {
    /**
     * 
     * @type {Array<OrderRoutingAttribute>}
     * @memberof ExtendedProductInfo
     */
    attributes?: Array<OrderRoutingAttribute>;
}
/**
 * 
 * @export
 * @interface ExtensibleInventoryAttribute
 */
export interface ExtensibleInventoryAttribute {
    /**
     * 
     * @type {string}
     * @memberof ExtensibleInventoryAttribute
     */
    attributeFQN?: string;
    /**
     * 
     * @type {string}
     * @memberof ExtensibleInventoryAttribute
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof ExtensibleInventoryAttribute
     */
    name?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ExtensibleInventoryAttribute
     */
    values?: Array<string>;
}
/**
 * 
 * @export
 * @interface FailOverActionsResponseModel
 */
export interface FailOverActionsResponseModel {
    /**
     * 
     * @type {Array<FailoverActionDto>}
     * @memberof FailOverActionsResponseModel
     */
    failOverActions?: Array<FailoverActionDto>;
}
/**
 * 
 * @export
 * @interface FailoverActionDto
 */
export interface FailoverActionDto {
    /**
     * 
     * @type {boolean}
     * @memberof FailoverActionDto
     */
    _default?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FailoverActionDto
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof FailoverActionDto
     */
    id?: string;
}
/**
 * 
 * @export
 * @interface FileUploadResponseDetails
 */
export interface FileUploadResponseDetails {
    /**
     * 
     * @type {string}
     * @memberof FileUploadResponseDetails
     */
    contentType?: string;
    /**
     * 
     * @type {Array<CustomDataListEntryModel>}
     * @memberof FileUploadResponseDetails
     */
    entries?: Array<CustomDataListEntryModel>;
    /**
     * 
     * @type {string}
     * @memberof FileUploadResponseDetails
     */
    originalFilename?: string;
    /**
     * 
     * @type {number}
     * @memberof FileUploadResponseDetails
     */
    sizeBytes?: number;
}
/**
 * 
 * @export
 * @interface FilterAttribute
 */
export interface FilterAttribute {
    /**
     * 
     * @type {string}
     * @memberof FilterAttribute
     */
    extensibleAttributeFQN?: string;
    /**
     * 
     * @type {string}
     * @memberof FilterAttribute
     */
    filterTypeGroup?: FilterAttributeFilterTypeGroupEnum;
    /**
     * 
     * @type {string}
     * @memberof FilterAttribute
     */
    langTag?: string;
    /**
     * 
     * @type {string}
     * @memberof FilterAttribute
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof FilterAttribute
     */
    propertyPath?: string;
    /**
     * 
     * @type {string}
     * @memberof FilterAttribute
     */
    unitType?: FilterAttributeUnitTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof FilterAttribute
     */
    vocabularyListValues?: string;
}


/**
 * @export
 */
export const FilterAttributeFilterTypeGroupEnum = {
    OrderInfo: 'ORDER_INFO',
    FulfillmentLocationInfo: 'FULFILLMENT_LOCATION_INFO',
    FulfillmentInventoryInfo: 'FULFILLMENT_INVENTORY_INFO',
    ItemAttributes: 'ITEM_ATTRIBUTES',
    CustomerInformation: 'CUSTOMER_INFORMATION',
    Unknown: 'UNKNOWN',
    ExtensibleFulfillmentLocationInfo: 'EXTENSIBLE_FULFILLMENT_LOCATION_INFO',
    ExtensibleOrderInfo: 'EXTENSIBLE_ORDER_INFO',
    ExtensibleProductInfo: 'EXTENSIBLE_PRODUCT_INFO',
    ExtensibleCustomerInfo: 'EXTENSIBLE_CUSTOMER_INFO',
    ExtensibleB2BCustomerInfo: 'EXTENSIBLE_B2B_CUSTOMER_INFO',
    ExtensibleInventoryInfo: 'EXTENSIBLE_INVENTORY_INFO'
} as const;
export type FilterAttributeFilterTypeGroupEnum = typeof FilterAttributeFilterTypeGroupEnum[keyof typeof FilterAttributeFilterTypeGroupEnum];

/**
 * @export
 */
export const FilterAttributeUnitTypeEnum = {
    Currency: 'unit.type.currency',
    Distance: 'unit.type.distance',
    Length: 'unit.type.length',
    Volume: 'unit.type.volume',
    Area: 'unit.type.area',
    Weight: 'unit.type.weight',
    Dimensionless: 'unit.type.dimensionless'
} as const;
export type FilterAttributeUnitTypeEnum = typeof FilterAttributeUnitTypeEnum[keyof typeof FilterAttributeUnitTypeEnum];

/**
 * 
 * @export
 * @interface FilterAttributeGroupResponse
 */
export interface FilterAttributeGroupResponse {
    /**
     * 
     * @type {Array<FilterAttributeResponse>}
     * @memberof FilterAttributeGroupResponse
     */
    attributes?: Array<FilterAttributeResponse>;
    /**
     * 
     * @type {string}
     * @memberof FilterAttributeGroupResponse
     */
    groupName?: string;
}
/**
 * 
 * @export
 * @interface FilterAttributeResponse
 */
export interface FilterAttributeResponse {
    /**
     * 
     * @type {Array<string>}
     * @memberof FilterAttributeResponse
     */
    allowedValues?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof FilterAttributeResponse
     */
    customValueTypes?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof FilterAttributeResponse
     */
    dataType?: FilterAttributeResponseDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof FilterAttributeResponse
     */
    extensibleAttributeFQN?: string;
    /**
     * 
     * @type {string}
     * @memberof FilterAttributeResponse
     */
    filterAttributePath?: string;
    /**
     * 
     * @type {string}
     * @memberof FilterAttributeResponse
     */
    id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FilterAttributeResponse
     */
    isExtensible?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FilterAttributeResponse
     */
    name?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof FilterAttributeResponse
     */
    unitOptions?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof FilterAttributeResponse
     */
    unitType?: FilterAttributeResponseUnitTypeEnum;
}


/**
 * @export
 */
export const FilterAttributeResponseDataTypeEnum = {
    String: 'STRING',
    StringList: 'STRING_LIST',
    Number: 'NUMBER',
    NumberList: 'NUMBER_LIST',
    Boolean: 'BOOLEAN',
    Date: 'DATE'
} as const;
export type FilterAttributeResponseDataTypeEnum = typeof FilterAttributeResponseDataTypeEnum[keyof typeof FilterAttributeResponseDataTypeEnum];

/**
 * @export
 */
export const FilterAttributeResponseUnitTypeEnum = {
    Currency: 'unit.type.currency',
    Distance: 'unit.type.distance',
    Length: 'unit.type.length',
    Volume: 'unit.type.volume',
    Area: 'unit.type.area',
    Weight: 'unit.type.weight',
    Dimensionless: 'unit.type.dimensionless'
} as const;
export type FilterAttributeResponseUnitTypeEnum = typeof FilterAttributeResponseUnitTypeEnum[keyof typeof FilterAttributeResponseUnitTypeEnum];

/**
 * 
 * @export
 * @interface FilterLogicalGroup
 */
export interface FilterLogicalGroup {
    /**
     * 
     * @type {boolean}
     * @memberof FilterLogicalGroup
     */
    andOperator?: boolean;
    /**
     * 
     * @type {number}
     * @memberof FilterLogicalGroup
     */
    environmentID: number;
    /**
     * 
     * @type {number}
     * @memberof FilterLogicalGroup
     */
    filterLogicalGroupID?: number;
    /**
     * 
     * @type {number}
     * @memberof FilterLogicalGroup
     */
    groupID?: number;
    /**
     * 
     * @type {string}
     * @memberof FilterLogicalGroup
     */
    logicalOperator: FilterLogicalGroupLogicalOperatorEnum;
    /**
     * 
     * @type {boolean}
     * @memberof FilterLogicalGroup
     */
    orOperator?: boolean;
    /**
     * 
     * @type {number}
     * @memberof FilterLogicalGroup
     */
    orderIndex: number;
    /**
     * 
     * @type {number}
     * @memberof FilterLogicalGroup
     */
    parentOrderIndex?: number;
    /**
     * 
     * @type {boolean}
     * @memberof FilterLogicalGroup
     */
    rootGroup?: boolean;
    /**
     * 
     * @type {number}
     * @memberof FilterLogicalGroup
     */
    siteID: number;
    /**
     * 
     * @type {number}
     * @memberof FilterLogicalGroup
     */
    tenantID: number;
}


/**
 * @export
 */
export const FilterLogicalGroupLogicalOperatorEnum = {
    And: 'AND',
    Or: 'OR'
} as const;
export type FilterLogicalGroupLogicalOperatorEnum = typeof FilterLogicalGroupLogicalOperatorEnum[keyof typeof FilterLogicalGroupLogicalOperatorEnum];

/**
 * 
 * @export
 * @interface FilterOperator
 */
export interface FilterOperator {
    /**
     * 
     * @type {string}
     * @memberof FilterOperator
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof FilterOperator
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface FilterTypeResponse
 */
export interface FilterTypeResponse {
    /**
     * 
     * @type {string}
     * @memberof FilterTypeResponse
     */
    id?: FilterTypeResponseIdEnum;
    /**
     * 
     * @type {string}
     * @memberof FilterTypeResponse
     */
    name?: string;
}


/**
 * @export
 */
export const FilterTypeResponseIdEnum = {
    CustomValue: 'filter.type.customValue',
    CustomDataList: 'filter.type.customDataList',
    DataSet: 'filter.type.dataSet',
    DataPoint: 'filter.type.dataPoint'
} as const;
export type FilterTypeResponseIdEnum = typeof FilterTypeResponseIdEnum[keyof typeof FilterTypeResponseIdEnum];

/**
 * 
 * @export
 * @interface FulfillmentLimit
 */
export interface FulfillmentLimit {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentLimit
     */
    created?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentLimit
     */
    creatorUsername?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentLimit
     */
    durationType: FulfillmentLimitDurationTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentLimit
     */
    environmentID: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentLimit
     */
    fulfillmentLimit: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentLimit
     */
    fulfillmentLimitID?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentLimit
     */
    fulfillmentType: FulfillmentLimitFulfillmentTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentLimit
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentLimit
     */
    pathString?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentLimit
     */
    persisted?: boolean;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentLimit
     */
    siteID: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentLimit
     */
    tenantID: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentLimit
     */
    updated?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentLimit
     */
    updaterUsername?: string;
    /**
     * 
     * @type {UserContextInformation}
     * @memberof FulfillmentLimit
     */
    userContext?: UserContextInformation;
}


/**
 * @export
 */
export const FulfillmentLimitDurationTypeEnum = {
    Hours: 'HOURS',
    Days: 'DAYS',
    Weeks: 'WEEKS',
    Months: 'MONTHS'
} as const;
export type FulfillmentLimitDurationTypeEnum = typeof FulfillmentLimitDurationTypeEnum[keyof typeof FulfillmentLimitDurationTypeEnum];

/**
 * @export
 */
export const FulfillmentLimitFulfillmentTypeEnum = {
    Orders: 'ORDERS',
    Items: 'ITEMS',
    Dollars: 'DOLLARS'
} as const;
export type FulfillmentLimitFulfillmentTypeEnum = typeof FulfillmentLimitFulfillmentTypeEnum[keyof typeof FulfillmentLimitFulfillmentTypeEnum];

/**
 * 
 * @export
 * @interface GetInventoryResponseItem
 */
export interface GetInventoryResponseItem {
    /**
     * 
     * @type {boolean}
     * @memberof GetInventoryResponseItem
     */
    active?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetInventoryResponseItem
     */
    allocated?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetInventoryResponseItem
     */
    attributes?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof GetInventoryResponseItem
     */
    available?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetInventoryResponseItem
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GetInventoryResponseItem
     */
    bopisFulfillmentDate?: string;
    /**
     * 
     * @type {number}
     * @memberof GetInventoryResponseItem
     */
    bopisProcessingTimeHours?: number;
    /**
     * 
     * @type {string}
     * @memberof GetInventoryResponseItem
     */
    condition?: string;
    /**
     * 
     * @type {string}
     * @memberof GetInventoryResponseItem
     */
    countryCode?: string;
    /**
     * 
     * @type {number}
     * @memberof GetInventoryResponseItem
     */
    currencyID?: number;
    /**
     * 
     * @type {string}
     * @memberof GetInventoryResponseItem
     */
    date?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GetInventoryResponseItem
     */
    deliveryEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GetInventoryResponseItem
     */
    directShip?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetInventoryResponseItem
     */
    distance?: number;
    /**
     * 
     * @type {number}
     * @memberof GetInventoryResponseItem
     */
    excessInventoryCount?: number;
    /**
     * 
     * @type {number}
     * @memberof GetInventoryResponseItem
     */
    excessInventoryPercentage?: number;
    /**
     * 
     * @type {number}
     * @memberof GetInventoryResponseItem
     */
    excessInventoryThreshold?: number;
    /**
     * 
     * @type {Array<ExtensibleInventoryAttribute>}
     * @memberof GetInventoryResponseItem
     */
    extensibleInventoryAttributes?: Array<ExtensibleInventoryAttribute>;
    /**
     * 
     * @type {number}
     * @memberof GetInventoryResponseItem
     */
    floor?: number;
    /**
     * 
     * @type {Array<OrderRoutingFutureInventory>}
     * @memberof GetInventoryResponseItem
     */
    futureInventory?: Array<OrderRoutingFutureInventory>;
    /**
     * 
     * @type {boolean}
     * @memberof GetInventoryResponseItem
     */
    hasInfiniteInventory?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GetInventoryResponseItem
     */
    holdBlockAssignment?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GetInventoryResponseItem
     */
    inventoryLocatorName?: string;
    /**
     * 
     * @type {string}
     * @memberof GetInventoryResponseItem
     */
    locationCode?: string;
    /**
     * 
     * @type {string}
     * @memberof GetInventoryResponseItem
     */
    locationName?: string;
    /**
     * 
     * @type {string}
     * @memberof GetInventoryResponseItem
     */
    lotCode?: string;
    /**
     * 
     * @type {number}
     * @memberof GetInventoryResponseItem
     */
    ltd?: number;
    /**
     * 
     * @type {number}
     * @memberof GetInventoryResponseItem
     */
    onHand?: number;
    /**
     * 
     * @type {string}
     * @memberof GetInventoryResponseItem
     */
    partNumber?: string;
    /**
     * 
     * @type {number}
     * @memberof GetInventoryResponseItem
     */
    pending?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetInventoryResponseItem
     */
    pickup?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetInventoryResponseItem
     */
    receiveProcessingTimeHours?: number;
    /**
     * 
     * @type {number}
     * @memberof GetInventoryResponseItem
     */
    retailPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof GetInventoryResponseItem
     */
    safetyStock?: number;
    /**
     * 
     * @type {string}
     * @memberof GetInventoryResponseItem
     */
    serialNumber?: string;
    /**
     * 
     * @type {number}
     * @memberof GetInventoryResponseItem
     */
    shortage?: number;
    /**
     * 
     * @type {string}
     * @memberof GetInventoryResponseItem
     */
    sku?: string;
    /**
     * 
     * @type {string}
     * @memberof GetInventoryResponseItem
     */
    sthFulfillmentDate?: string;
    /**
     * 
     * @type {number}
     * @memberof GetInventoryResponseItem
     */
    sthProcessingTimeHours?: number;
    /**
     * 
     * @type {Array<OrderRoutingTagQuantity>}
     * @memberof GetInventoryResponseItem
     */
    taggedInventory?: Array<OrderRoutingTagQuantity>;
    /**
     * 
     * @type {number}
     * @memberof GetInventoryResponseItem
     */
    tenantID?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetInventoryResponseItem
     */
    transferEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GetInventoryResponseItem
     */
    transferFulfillmentDate?: string;
    /**
     * 
     * @type {number}
     * @memberof GetInventoryResponseItem
     */
    transferProcessingTimeHours?: number;
    /**
     * 
     * @type {string}
     * @memberof GetInventoryResponseItem
     */
    upc?: string;
}
/**
 * 
 * @export
 * @interface GroupAfterAction
 */
export interface GroupAfterAction {
    /**
     * 
     * @type {number}
     * @memberof GroupAfterAction
     */
    actionID?: number;
    /**
     * 
     * @type {string}
     * @memberof GroupAfterAction
     */
    created?: string;
    /**
     * 
     * @type {string}
     * @memberof GroupAfterAction
     */
    creatorUsername?: string;
    /**
     * 
     * @type {number}
     * @memberof GroupAfterAction
     */
    environmentID: number;
    /**
     * 
     * @type {string}
     * @memberof GroupAfterAction
     */
    failoverAction?: GroupAfterActionFailoverActionEnum;
    /**
     * 
     * @type {string}
     * @memberof GroupAfterAction
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof GroupAfterAction
     */
    pathString?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GroupAfterAction
     */
    persisted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GroupAfterAction
     */
    restartAttempt?: GroupAfterActionRestartAttemptEnum;
    /**
     * 
     * @type {number}
     * @memberof GroupAfterAction
     */
    siteID: number;
    /**
     * 
     * @type {Set<object>}
     * @memberof GroupAfterAction
     */
    suggestionEventListeners?: Set<object>;
    /**
     * 
     * @type {number}
     * @memberof GroupAfterAction
     */
    tenantID: number;
    /**
     * 
     * @type {string}
     * @memberof GroupAfterAction
     */
    updated?: string;
    /**
     * 
     * @type {string}
     * @memberof GroupAfterAction
     */
    updaterUsername?: string;
    /**
     * 
     * @type {UserContextInformation}
     * @memberof GroupAfterAction
     */
    userContext?: UserContextInformation;
}


/**
 * @export
 */
export const GroupAfterActionFailoverActionEnum = {
    LineItemSplitAssignIfFulfilled: 'LINE_ITEM_SPLIT_ASSIGN_IF_FULFILLED',
    LineItemSplitCancelWithoutInventory: 'LINE_ITEM_SPLIT_CANCEL_WITHOUT_INVENTORY',
    QuantitySplitAssignIfFulfilled: 'QUANTITY_SPLIT_ASSIGN_IF_FULFILLED',
    QuantitySplitCancelWithoutInventory: 'QUANTITY_SPLIT_CANCEL_WITHOUT_INVENTORY',
    CancelOrder: 'CANCEL_ORDER',
    AssignToCustomerCare: 'ASSIGN_TO_CUSTOMER_CARE',
    AssignToGroup: 'ASSIGN_TO_GROUP',
    LineItemSplitAssignCustomerCareWithoutInventory: 'LINE_ITEM_SPLIT_ASSIGN_CUSTOMER_CARE_WITHOUT_INVENTORY',
    QuantitySplitAssignCustomerCareWithoutInventory: 'QUANTITY_SPLIT_ASSIGN_CUSTOMER_CARE_WITHOUT_INVENTORY',
    SendOrderToBidding: 'SEND_ORDER_TO_BIDDING',
    LineItemSplitBackorderWithoutInventory: 'LINE_ITEM_SPLIT_BACKORDER_WITHOUT_INVENTORY',
    QuantitySplitBackorderWithoutInventory: 'QUANTITY_SPLIT_BACKORDER_WITHOUT_INVENTORY',
    AssignToBackorder: 'ASSIGN_TO_BACKORDER'
} as const;
export type GroupAfterActionFailoverActionEnum = typeof GroupAfterActionFailoverActionEnum[keyof typeof GroupAfterActionFailoverActionEnum];

/**
 * @export
 */
export const GroupAfterActionRestartAttemptEnum = {
    StartAtBeginning: 'START_AT_BEGINNING',
    CurrentGroup: 'CURRENT_GROUP',
    GroupRank: 'GROUP_RANK'
} as const;
export type GroupAfterActionRestartAttemptEnum = typeof GroupAfterActionRestartAttemptEnum[keyof typeof GroupAfterActionRestartAttemptEnum];

/**
 * 
 * @export
 * @interface ItemMeasurement
 */
export interface ItemMeasurement {
    /**
     * 
     * @type {string}
     * @memberof ItemMeasurement
     */
    unit: ItemMeasurementUnitEnum;
    /**
     * 
     * @type {number}
     * @memberof ItemMeasurement
     */
    value?: number;
}


/**
 * @export
 */
export const ItemMeasurementUnitEnum = {
    Kg: 'kg',
    Cm: 'cm',
    M: 'm',
    Liters: 'liters',
    Grams: 'grams',
    Oz: 'oz',
    Lb: 'lb',
    Inches: 'inches',
    Ft: 'ft'
} as const;
export type ItemMeasurementUnitEnum = typeof ItemMeasurementUnitEnum[keyof typeof ItemMeasurementUnitEnum];

/**
 * 
 * @export
 * @interface LocationCriteriaSet
 */
export interface LocationCriteriaSet {
    /**
     * 
     * @type {Set<LocationCriteriaSetDataDefinition>}
     * @memberof LocationCriteriaSet
     */
    columnDefinitions?: Set<LocationCriteriaSetDataDefinition>;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSet
     */
    created?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSet
     */
    creatorUsername?: string;
    /**
     * 
     * @type {number}
     * @memberof LocationCriteriaSet
     */
    environmentID: number;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSet
     */
    fileName: string;
    /**
     * 
     * @type {number}
     * @memberof LocationCriteriaSet
     */
    locationCriteriaSetID?: number;
    /**
     * 
     * @type {SetMultimapIntegerLocationCriteriaSetRow}
     * @memberof LocationCriteriaSet
     */
    locationCriteriaSetMap?: SetMultimapIntegerLocationCriteriaSetRow;
    /**
     * 
     * @type {SetMultimapIntegerLocationCriteriaSetRow}
     * @memberof LocationCriteriaSet
     */
    locationCriteriaSetRows?: SetMultimapIntegerLocationCriteriaSetRow;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSet
     */
    pathString?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LocationCriteriaSet
     */
    persisted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSet
     */
    readyState?: LocationCriteriaSetReadyStateEnum;
    /**
     * 
     * @type {number}
     * @memberof LocationCriteriaSet
     */
    siteID: number;
    /**
     * 
     * @type {number}
     * @memberof LocationCriteriaSet
     */
    tenantID: number;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSet
     */
    updated?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSet
     */
    updaterUsername?: string;
    /**
     * 
     * @type {UserContextInformation}
     * @memberof LocationCriteriaSet
     */
    userContext?: UserContextInformation;
}


/**
 * @export
 */
export const LocationCriteriaSetReadyStateEnum = {
    Ready: 'dataset.ready',
    Processing: 'dataset.processing',
    ErrorProcessing: 'dataset.error.processing'
} as const;
export type LocationCriteriaSetReadyStateEnum = typeof LocationCriteriaSetReadyStateEnum[keyof typeof LocationCriteriaSetReadyStateEnum];

/**
 * 
 * @export
 * @interface LocationCriteriaSetDataDefinition
 */
export interface LocationCriteriaSetDataDefinition {
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSetDataDefinition
     */
    columnName: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSetDataDefinition
     */
    created?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSetDataDefinition
     */
    creatorUsername?: string;
    /**
     * 
     * @type {number}
     * @memberof LocationCriteriaSetDataDefinition
     */
    dataDefinitionID?: number;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSetDataDefinition
     */
    dataUnitString?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSetDataDefinition
     */
    defaultValue?: string;
    /**
     * 
     * @type {number}
     * @memberof LocationCriteriaSetDataDefinition
     */
    environmentID: number;
    /**
     * 
     * @type {boolean}
     * @memberof LocationCriteriaSetDataDefinition
     */
    filterable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSetDataDefinition
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSetDataDefinition
     */
    pathString?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LocationCriteriaSetDataDefinition
     */
    persisted?: boolean;
    /**
     * 
     * @type {number}
     * @memberof LocationCriteriaSetDataDefinition
     */
    siteID: number;
    /**
     * 
     * @type {boolean}
     * @memberof LocationCriteriaSetDataDefinition
     */
    sortable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof LocationCriteriaSetDataDefinition
     */
    tenantID: number;
    /**
     * 
     * @type {AbstractFilterFilterUnit}
     * @memberof LocationCriteriaSetDataDefinition
     */
    unit?: AbstractFilterFilterUnit;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSetDataDefinition
     */
    unitType?: LocationCriteriaSetDataDefinitionUnitTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSetDataDefinition
     */
    updated?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSetDataDefinition
     */
    updaterUsername?: string;
    /**
     * 
     * @type {UserContextInformation}
     * @memberof LocationCriteriaSetDataDefinition
     */
    userContext?: UserContextInformation;
}


/**
 * @export
 */
export const LocationCriteriaSetDataDefinitionUnitTypeEnum = {
    Currency: 'unit.type.currency',
    Distance: 'unit.type.distance',
    Length: 'unit.type.length',
    Volume: 'unit.type.volume',
    Area: 'unit.type.area',
    Weight: 'unit.type.weight',
    Dimensionless: 'unit.type.dimensionless'
} as const;
export type LocationCriteriaSetDataDefinitionUnitTypeEnum = typeof LocationCriteriaSetDataDefinitionUnitTypeEnum[keyof typeof LocationCriteriaSetDataDefinitionUnitTypeEnum];

/**
 * 
 * @export
 * @interface LocationCriteriaSetFilter
 */
export interface LocationCriteriaSetFilter {
    /**
     * 
     * @type {boolean}
     * @memberof LocationCriteriaSetFilter
     */
    acceptNulls?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSetFilter
     */
    booleanOperator: LocationCriteriaSetFilterBooleanOperatorEnum;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSetFilter
     */
    created?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSetFilter
     */
    creatorUsername?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSetFilter
     */
    customAttributeName?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSetFilter
     */
    dataPointExtensibleAttributeFQN?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSetFilter
     */
    dataPointExtensibleAttributeName?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSetFilter
     */
    dataPointExtensibleAttributeType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LocationCriteriaSetFilter
     */
    dataPointExtensibleFilter?: boolean;
    /**
     * 
     * @type {Array<LocationCriteriaSetDataDefinition>}
     * @memberof LocationCriteriaSetFilter
     */
    definitions?: Array<LocationCriteriaSetDataDefinition>;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSetFilter
     */
    dotDelimitedPropertyName: string;
    /**
     * 
     * @type {number}
     * @memberof LocationCriteriaSetFilter
     */
    environmentID: number;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSetFilter
     */
    extensibleAttributeFQN?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSetFilter
     */
    extensibleAttributeName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LocationCriteriaSetFilter
     */
    extensibleFilter?: boolean;
    /**
     * 
     * @type {number}
     * @memberof LocationCriteriaSetFilter
     */
    filterID?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationCriteriaSetFilter
     */
    filterLogicalGroupOrderIndex?: number;
    /**
     * 
     * @type {AbstractFilterFilterUnit}
     * @memberof LocationCriteriaSetFilter
     */
    filterUnit?: AbstractFilterFilterUnit;
    /**
     * 
     * @type {boolean}
     * @memberof LocationCriteriaSetFilter
     */
    inventoryBasedFilter?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LocationCriteriaSetFilter
     */
    itemBasedFilter?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LocationCriteriaSetFilter
     */
    locationBasedFilter?: boolean;
    /**
     * 
     * @type {LocationCriteriaSet}
     * @memberof LocationCriteriaSetFilter
     */
    locationCriteriaSet?: LocationCriteriaSet;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSetFilter
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof LocationCriteriaSetFilter
     */
    orderIndex?: number;
    /**
     * 
     * @type {boolean}
     * @memberof LocationCriteriaSetFilter
     */
    orderLocationFilterEqualToLocationOrInventoryFilter?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSetFilter
     */
    pathString?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LocationCriteriaSetFilter
     */
    persisted?: boolean;
    /**
     * 
     * @type {number}
     * @memberof LocationCriteriaSetFilter
     */
    siteID: number;
    /**
     * 
     * @type {Set<object>}
     * @memberof LocationCriteriaSetFilter
     */
    suggestionEventListeners?: Set<object>;
    /**
     * 
     * @type {number}
     * @memberof LocationCriteriaSetFilter
     */
    tenantID: number;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSetFilter
     */
    updated?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSetFilter
     */
    updaterUsername?: string;
    /**
     * 
     * @type {UserContextInformation}
     * @memberof LocationCriteriaSetFilter
     */
    userContext?: UserContextInformation;
}


/**
 * @export
 */
export const LocationCriteriaSetFilterBooleanOperatorEnum = {
    Equal: 'filter.logic.equal',
    NotEqual: 'filter.logic.not.equal',
    GreaterThan: 'filter.logic.greater.than',
    LessThan: 'filter.logic.less.than',
    GreaterOrEqual: 'filter.logic.greater.or.equal',
    LessOrEqual: 'filter.logic.less.or.equal',
    In: 'filter.logic.in',
    NotIn: 'filter.logic.not.in',
    Between: 'filter.logic.between',
    StartsWith: 'filter.logic.starts.with',
    EndsWith: 'filter.logic.ends.with',
    Contains: 'filter.logic.contains',
    Subset: 'filter.logic.subset'
} as const;
export type LocationCriteriaSetFilterBooleanOperatorEnum = typeof LocationCriteriaSetFilterBooleanOperatorEnum[keyof typeof LocationCriteriaSetFilterBooleanOperatorEnum];

/**
 * 
 * @export
 * @interface LocationGroupModel
 */
export interface LocationGroupModel {
    /**
     * 
     * @type {boolean}
     * @memberof LocationGroupModel
     */
    active: boolean;
    /**
     * 
     * @type {GroupAfterAction}
     * @memberof LocationGroupModel
     */
    afterActionNone?: GroupAfterAction;
    /**
     * 
     * @type {GroupAfterAction}
     * @memberof LocationGroupModel
     */
    afterActionPartial?: GroupAfterAction;
    /**
     * 
     * @type {string}
     * @memberof LocationGroupModel
     */
    created?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationGroupModel
     */
    creatorUsername?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationGroupModel
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof LocationGroupModel
     */
    environmentID: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof LocationGroupModel
     */
    excludedLocationsFromDefaultGroup?: Array<number>;
    /**
     * 
     * @type {Set<AbstractFilter>}
     * @memberof LocationGroupModel
     */
    filters?: Set<AbstractFilter>;
    /**
     * 
     * @type {FulfillmentLimit}
     * @memberof LocationGroupModel
     */
    fulfillmentLimit?: FulfillmentLimit;
    /**
     * 
     * @type {number}
     * @memberof LocationGroupModel
     */
    groupID?: number;
    /**
     * 
     * @type {boolean}
     * @memberof LocationGroupModel
     */
    isDefaultGroup?: boolean;
    /**
     * 
     * @type {Array<number>}
     * @memberof LocationGroupModel
     */
    locationIDs?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof LocationGroupModel
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof LocationGroupModel
     */
    pathString?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LocationGroupModel
     */
    persisted?: boolean;
    /**
     * 
     * @type {number}
     * @memberof LocationGroupModel
     */
    rank: number;
    /**
     * 
     * @type {Array<RankedLocation>}
     * @memberof LocationGroupModel
     */
    rankedLocations?: Array<RankedLocation>;
    /**
     * 
     * @type {number}
     * @memberof LocationGroupModel
     */
    routeID: number;
    /**
     * 
     * @type {number}
     * @memberof LocationGroupModel
     */
    siteID: number;
    /**
     * 
     * @type {Array<LocationSort>}
     * @memberof LocationGroupModel
     */
    sorts?: Array<LocationSort>;
    /**
     * 
     * @type {Set<object>}
     * @memberof LocationGroupModel
     */
    suggestionEventListeners?: Set<object>;
    /**
     * 
     * @type {number}
     * @memberof LocationGroupModel
     */
    tenantID: number;
    /**
     * 
     * @type {string}
     * @memberof LocationGroupModel
     */
    updated?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationGroupModel
     */
    updaterUsername?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LocationGroupModel
     */
    useRetailerExclusionList?: boolean;
    /**
     * 
     * @type {UserContextInformation}
     * @memberof LocationGroupModel
     */
    userContext?: UserContextInformation;
}
/**
 * 
 * @export
 * @interface LocationListResponseModel
 */
export interface LocationListResponseModel {
    /**
     * 
     * @type {number}
     * @memberof LocationListResponseModel
     */
    pageNum?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationListResponseModel
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationListResponseModel
     */
    paginatedResults?: number;
    /**
     * 
     * @type {Array<LocationResponseModel>}
     * @memberof LocationListResponseModel
     */
    results?: Array<LocationResponseModel>;
    /**
     * 
     * @type {number}
     * @memberof LocationListResponseModel
     */
    totalResults?: number;
}
/**
 * 
 * @export
 * @interface LocationResponseModel
 */
export interface LocationResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof LocationResponseModel
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LocationResponseModel
     */
    addressType?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationResponseModel
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationResponseModel
     */
    countryCode?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationResponseModel
     */
    created?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LocationResponseModel
     */
    deliveryEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LocationResponseModel
     */
    directShip?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LocationResponseModel
     */
    express?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LocationResponseModel
     */
    fridayHours?: string;
    /**
     * 
     * @type {number}
     * @memberof LocationResponseModel
     */
    latitude?: number;
    /**
     * 
     * @type {string}
     * @memberof LocationResponseModel
     */
    locationCode?: string;
    /**
     * 
     * @type {number}
     * @memberof LocationResponseModel
     */
    locationID?: number;
    /**
     * 
     * @type {string}
     * @memberof LocationResponseModel
     */
    locationName?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof LocationResponseModel
     */
    locationTypes?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof LocationResponseModel
     */
    longitude?: number;
    /**
     * 
     * @type {string}
     * @memberof LocationResponseModel
     */
    mondayHours?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LocationResponseModel
     */
    pickup?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LocationResponseModel
     */
    postalCode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LocationResponseModel
     */
    requiresManifest?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LocationResponseModel
     */
    saturdayHours?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationResponseModel
     */
    stateOrProvince?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationResponseModel
     */
    sundayHours?: string;
    /**
     * 
     * @type {number}
     * @memberof LocationResponseModel
     */
    tenantID?: number;
    /**
     * 
     * @type {string}
     * @memberof LocationResponseModel
     */
    thursdayHours?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationResponseModel
     */
    timezone?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LocationResponseModel
     */
    transferEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LocationResponseModel
     */
    tuesdayHours?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationResponseModel
     */
    updated?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationResponseModel
     */
    wednesdayHours?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LocationResponseModel
     */
    wmsEnabled?: boolean;
}
/**
 * 
 * @export
 * @interface LocationSort
 */
export interface LocationSort {
    /**
     * 
     * @type {string}
     * @memberof LocationSort
     */
    created?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationSort
     */
    creatorUsername?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LocationSort
     */
    descending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof LocationSort
     */
    environmentID: number;
    /**
     * 
     * @type {number}
     * @memberof LocationSort
     */
    locationSortID?: number;
    /**
     * 
     * @type {string}
     * @memberof LocationSort
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationSort
     */
    pathString?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LocationSort
     */
    persisted?: boolean;
    /**
     * 
     * @type {number}
     * @memberof LocationSort
     */
    siteID: number;
    /**
     * 
     * @type {string}
     * @memberof LocationSort
     */
    sortingType: LocationSortSortingTypeEnum;
    /**
     * 
     * @type {Set<object>}
     * @memberof LocationSort
     */
    suggestionEventListeners?: Set<object>;
    /**
     * 
     * @type {number}
     * @memberof LocationSort
     */
    tenantID: number;
    /**
     * 
     * @type {string}
     * @memberof LocationSort
     */
    updated?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationSort
     */
    updaterUsername?: string;
    /**
     * 
     * @type {UserContextInformation}
     * @memberof LocationSort
     */
    userContext?: UserContextInformation;
}


/**
 * @export
 */
export const LocationSortSortingTypeEnum = {
    Rank: 'RANK',
    Distance: 'DISTANCE',
    Ltd: 'LTD',
    Cost: 'COST',
    Random: 'RANDOM',
    DataSet: 'DATA_SET',
    LowestAvailable: 'LOWEST_AVAILABLE'
} as const;
export type LocationSortSortingTypeEnum = typeof LocationSortSortingTypeEnum[keyof typeof LocationSortSortingTypeEnum];

/**
 * 
 * @export
 * @interface NewEddCalculationRequestEvent
 */
export interface NewEddCalculationRequestEvent {
    /**
     * 
     * @type {number}
     * @memberof NewEddCalculationRequestEvent
     */
    causeID?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof NewEddCalculationRequestEvent
     */
    errors?: Array<string>;
    /**
     * 
     * @type {EddSuggestionRequest}
     * @memberof NewEddCalculationRequestEvent
     */
    request?: EddSuggestionRequest;
    /**
     * 
     * @type {string}
     * @memberof NewEddCalculationRequestEvent
     */
    type: NewEddCalculationRequestEventTypeEnum;
}


/**
 * @export
 */
export const NewEddCalculationRequestEventTypeEnum = {
    NewEddCalculationRequest: 'NEW_EDD_CALCULATION_REQUEST',
    RoutingSuggestionReceived: 'ROUTING_SUGGESTION_RECEIVED',
    PreassignmentsProcessingInitiated: 'PREASSIGNMENTS_PROCESSING_INITIATED',
    EddResponseComplete: 'EDD_RESPONSE_COMPLETE',
    LocationDetailsFetched: 'LOCATION_DETAILS_FETCHED',
    RemorsePeriodApplied: 'REMORSE_PERIOD_APPLIED',
    FulfillmentDateCalculated: 'FULFILLMENT_DATE_CALCULATED',
    CutoffTimeCalculated: 'CUTOFF_TIME_CALCULATED',
    DaySkippedForAssignment: 'DAY_SKIPPED_FOR_ASSIGNMENT',
    NoValidDayFoundForAssignment: 'NO_VALID_DAY_FOUND_FOR_ASSIGNMENT',
    ProcessingHoursRollover: 'PROCESSING_HOURS_ROLLOVER',
    TransitTimeResponse: 'TRANSIT_TIME_RESPONSE',
    AssignmentEddCalculated: 'ASSIGNMENT_EDD_CALCULATED',
    TransitTimeError: 'TRANSIT_TIME_ERROR',
    TransferEddCalculated: 'TRANSFER_EDD_CALCULATED',
    ConsolidationLatestTransferSelected: 'CONSOLIDATION_LATEST_TRANSFER_SELECTED'
} as const;
export type NewEddCalculationRequestEventTypeEnum = typeof NewEddCalculationRequestEventTypeEnum[keyof typeof NewEddCalculationRequestEventTypeEnum];

/**
 * 
 * @export
 * @interface NewEddRequestSuggestionEvent
 */
export interface NewEddRequestSuggestionEvent {
    /**
     * 
     * @type {number}
     * @memberof NewEddRequestSuggestionEvent
     */
    causeID?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof NewEddRequestSuggestionEvent
     */
    errors?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof NewEddRequestSuggestionEvent
     */
    name?: string;
    /**
     * 
     * @type {SuggestionRequest}
     * @memberof NewEddRequestSuggestionEvent
     */
    request?: SuggestionRequest;
    /**
     * 
     * @type {string}
     * @memberof NewEddRequestSuggestionEvent
     */
    type: NewEddRequestSuggestionEventTypeEnum;
}


/**
 * @export
 */
export const NewEddRequestSuggestionEventTypeEnum = {
    NewRequest: 'NEW_REQUEST',
    RouteSelected: 'ROUTE_SELECTED',
    MakeLocationsAvailable: 'MAKE_LOCATIONS_AVAILABLE',
    NoRouteFound: 'NO_ROUTE_FOUND',
    RemovedInactiveLocations: 'REMOVED_INACTIVE_LOCATIONS',
    RemovedOnHoldLocations: 'REMOVED_ON_HOLD_LOCATIONS',
    RemovedOverfulfilledLocations: 'REMOVED_OVERFULFILLED_LOCATIONS',
    Group: 'GROUP',
    GroupFilter: 'GROUP_FILTER',
    GroupFilterLogicalGroup: 'GROUP_FILTER_LOGICAL_GROUP',
    GroupFilterLogicalGroupMissingRoot: 'GROUP_FILTER_LOGICAL_GROUP_MISSING_ROOT',
    GroupSort: 'GROUP_SORT',
    Filter: 'FILTER',
    Sort: 'SORT',
    AfterAction: 'AFTER_ACTION',
    FoundFullOrderLocation: 'FOUND_FULL_ORDER_LOCATION',
    Response: 'RESPONSE',
    AfterActionSort: 'AFTER_ACTION_SORT',
    DefaultResponse: 'DEFAULT_RESPONSE',
    MaxSplitsExceeded: 'MAX_SPLITS_EXCEEDED',
    AutoAssignLimitExceeded: 'AUTO_ASSIGN_LIMIT_EXCEEDED',
    InventoryRequest: 'INVENTORY_REQUEST',
    RemovedInternationalLocations: 'REMOVED_INTERNATIONAL_LOCATIONS',
    SuggestionUpdated: 'SUGGESTION_UPDATED',
    NonExpressLocationsFiltered: 'NON_EXPRESS_LOCATIONS_FILTERED',
    SthConsolidatedInitiated: 'STH_CONSOLIDATED_INITIATED',
    SthConsolidatedNotUsed: 'STH_CONSOLIDATED_NOT_USED',
    SthConsolidatedUsed: 'STH_CONSOLIDATED_USED',
    FutureAtpInitiated: 'FUTURE_ATP_INITIATED',
    FutureAtpNotUsed: 'FUTURE_ATP_NOT_USED',
    FutureAtpUsed: 'FUTURE_ATP_USED',
    InventoryCallException: 'INVENTORY_CALL_EXCEPTION',
    SthConsolidationInvalidLocationOverride: 'STH_CONSOLIDATION_INVALID_LOCATION_OVERRIDE',
    SthConsolidationForceOverrideInitiated: 'STH_CONSOLIDATION_FORCE_OVERRIDE_INITIATED',
    NoSthConsolidationLocationFound: 'NO_STH_CONSOLIDATION_LOCATION_FOUND',
    ConsolidationFilterMinimizationValidation: 'CONSOLIDATION_FILTER_MINIMIZATION_VALIDATION',
    SthConsolidationForceClosestValidLocationFound: 'STH_CONSOLIDATION_FORCE_CLOSEST_VALID_LOCATION_FOUND',
    SthConsolidationForceNoValidLocationsFound: 'STH_CONSOLIDATION_FORCE_NO_VALID_LOCATIONS_FOUND',
    SthConsolidationForceNoGeoLocationValuesFound: 'STH_CONSOLIDATION_FORCE_NO_GEO_LOCATION_VALUES_FOUND',
    SthConsolidationForceInvalidShippingAddressValues: 'STH_CONSOLIDATION_FORCE_INVALID_SHIPPING_ADDRESS_VALUES',
    MultipleConsolidationLogicInitiated: 'MULTIPLE_CONSOLIDATION_LOGIC_INITIATED',
    MultipleConsolidationPotentialTransferAssignmentsFound: 'MULTIPLE_CONSOLIDATION_POTENTIAL_TRANSFER_ASSIGNMENTS_FOUND',
    MultipleConsolidationInitialCandidatesFound: 'MULTIPLE_CONSOLIDATION_INITIAL_CANDIDATES_FOUND',
    MultipleConsolidationSkippedOriginalAssignments: 'MULTIPLE_CONSOLIDATION_SKIPPED_ORIGINAL_ASSIGNMENTS',
    MultipleConsolidationLogicSkipped: 'MULTIPLE_CONSOLIDATION_LOGIC_SKIPPED',
    MultipleConsolidationAssignmentsCreated: 'MULTIPLE_CONSOLIDATION_ASSIGNMENTS_CREATED'
} as const;
export type NewEddRequestSuggestionEventTypeEnum = typeof NewEddRequestSuggestionEventTypeEnum[keyof typeof NewEddRequestSuggestionEventTypeEnum];

/**
 * 
 * @export
 * @interface NewRequestSuggestionEvent
 */
export interface NewRequestSuggestionEvent {
    /**
     * 
     * @type {number}
     * @memberof NewRequestSuggestionEvent
     */
    causeID?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof NewRequestSuggestionEvent
     */
    errors?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof NewRequestSuggestionEvent
     */
    name?: string;
    /**
     * 
     * @type {SuggestionRequest}
     * @memberof NewRequestSuggestionEvent
     */
    request?: SuggestionRequest;
    /**
     * 
     * @type {string}
     * @memberof NewRequestSuggestionEvent
     */
    type: NewRequestSuggestionEventTypeEnum;
}


/**
 * @export
 */
export const NewRequestSuggestionEventTypeEnum = {
    NewRequest: 'NEW_REQUEST',
    RouteSelected: 'ROUTE_SELECTED',
    MakeLocationsAvailable: 'MAKE_LOCATIONS_AVAILABLE',
    NoRouteFound: 'NO_ROUTE_FOUND',
    RemovedInactiveLocations: 'REMOVED_INACTIVE_LOCATIONS',
    RemovedOnHoldLocations: 'REMOVED_ON_HOLD_LOCATIONS',
    RemovedOverfulfilledLocations: 'REMOVED_OVERFULFILLED_LOCATIONS',
    Group: 'GROUP',
    GroupFilter: 'GROUP_FILTER',
    GroupFilterLogicalGroup: 'GROUP_FILTER_LOGICAL_GROUP',
    GroupFilterLogicalGroupMissingRoot: 'GROUP_FILTER_LOGICAL_GROUP_MISSING_ROOT',
    GroupSort: 'GROUP_SORT',
    Filter: 'FILTER',
    Sort: 'SORT',
    AfterAction: 'AFTER_ACTION',
    FoundFullOrderLocation: 'FOUND_FULL_ORDER_LOCATION',
    Response: 'RESPONSE',
    AfterActionSort: 'AFTER_ACTION_SORT',
    DefaultResponse: 'DEFAULT_RESPONSE',
    MaxSplitsExceeded: 'MAX_SPLITS_EXCEEDED',
    AutoAssignLimitExceeded: 'AUTO_ASSIGN_LIMIT_EXCEEDED',
    InventoryRequest: 'INVENTORY_REQUEST',
    RemovedInternationalLocations: 'REMOVED_INTERNATIONAL_LOCATIONS',
    SuggestionUpdated: 'SUGGESTION_UPDATED',
    NonExpressLocationsFiltered: 'NON_EXPRESS_LOCATIONS_FILTERED',
    SthConsolidatedInitiated: 'STH_CONSOLIDATED_INITIATED',
    SthConsolidatedNotUsed: 'STH_CONSOLIDATED_NOT_USED',
    SthConsolidatedUsed: 'STH_CONSOLIDATED_USED',
    FutureAtpInitiated: 'FUTURE_ATP_INITIATED',
    FutureAtpNotUsed: 'FUTURE_ATP_NOT_USED',
    FutureAtpUsed: 'FUTURE_ATP_USED',
    InventoryCallException: 'INVENTORY_CALL_EXCEPTION',
    SthConsolidationInvalidLocationOverride: 'STH_CONSOLIDATION_INVALID_LOCATION_OVERRIDE',
    SthConsolidationForceOverrideInitiated: 'STH_CONSOLIDATION_FORCE_OVERRIDE_INITIATED',
    NoSthConsolidationLocationFound: 'NO_STH_CONSOLIDATION_LOCATION_FOUND',
    ConsolidationFilterMinimizationValidation: 'CONSOLIDATION_FILTER_MINIMIZATION_VALIDATION',
    SthConsolidationForceClosestValidLocationFound: 'STH_CONSOLIDATION_FORCE_CLOSEST_VALID_LOCATION_FOUND',
    SthConsolidationForceNoValidLocationsFound: 'STH_CONSOLIDATION_FORCE_NO_VALID_LOCATIONS_FOUND',
    SthConsolidationForceNoGeoLocationValuesFound: 'STH_CONSOLIDATION_FORCE_NO_GEO_LOCATION_VALUES_FOUND',
    SthConsolidationForceInvalidShippingAddressValues: 'STH_CONSOLIDATION_FORCE_INVALID_SHIPPING_ADDRESS_VALUES',
    MultipleConsolidationLogicInitiated: 'MULTIPLE_CONSOLIDATION_LOGIC_INITIATED',
    MultipleConsolidationPotentialTransferAssignmentsFound: 'MULTIPLE_CONSOLIDATION_POTENTIAL_TRANSFER_ASSIGNMENTS_FOUND',
    MultipleConsolidationInitialCandidatesFound: 'MULTIPLE_CONSOLIDATION_INITIAL_CANDIDATES_FOUND',
    MultipleConsolidationSkippedOriginalAssignments: 'MULTIPLE_CONSOLIDATION_SKIPPED_ORIGINAL_ASSIGNMENTS',
    MultipleConsolidationLogicSkipped: 'MULTIPLE_CONSOLIDATION_LOGIC_SKIPPED',
    MultipleConsolidationAssignmentsCreated: 'MULTIPLE_CONSOLIDATION_ASSIGNMENTS_CREATED'
} as const;
export type NewRequestSuggestionEventTypeEnum = typeof NewRequestSuggestionEventTypeEnum[keyof typeof NewRequestSuggestionEventTypeEnum];

/**
 * 
 * @export
 * @interface NewReverseLogisticsRequestSuggestionEvent
 */
export interface NewReverseLogisticsRequestSuggestionEvent {
    /**
     * 
     * @type {number}
     * @memberof NewReverseLogisticsRequestSuggestionEvent
     */
    causeID?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof NewReverseLogisticsRequestSuggestionEvent
     */
    errors?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof NewReverseLogisticsRequestSuggestionEvent
     */
    name?: string;
    /**
     * 
     * @type {ReturnSuggestionRequest}
     * @memberof NewReverseLogisticsRequestSuggestionEvent
     */
    request?: ReturnSuggestionRequest;
    /**
     * 
     * @type {string}
     * @memberof NewReverseLogisticsRequestSuggestionEvent
     */
    type: NewReverseLogisticsRequestSuggestionEventTypeEnum;
}


/**
 * @export
 */
export const NewReverseLogisticsRequestSuggestionEventTypeEnum = {
    NewRequest: 'NEW_REQUEST',
    RouteSelected: 'ROUTE_SELECTED',
    MakeLocationsAvailable: 'MAKE_LOCATIONS_AVAILABLE',
    NoRouteFound: 'NO_ROUTE_FOUND',
    RemovedInactiveLocations: 'REMOVED_INACTIVE_LOCATIONS',
    RemovedOnHoldLocations: 'REMOVED_ON_HOLD_LOCATIONS',
    RemovedOverfulfilledLocations: 'REMOVED_OVERFULFILLED_LOCATIONS',
    Group: 'GROUP',
    GroupFilter: 'GROUP_FILTER',
    GroupFilterLogicalGroup: 'GROUP_FILTER_LOGICAL_GROUP',
    GroupFilterLogicalGroupMissingRoot: 'GROUP_FILTER_LOGICAL_GROUP_MISSING_ROOT',
    GroupSort: 'GROUP_SORT',
    Filter: 'FILTER',
    Sort: 'SORT',
    AfterAction: 'AFTER_ACTION',
    FoundFullOrderLocation: 'FOUND_FULL_ORDER_LOCATION',
    Response: 'RESPONSE',
    AfterActionSort: 'AFTER_ACTION_SORT',
    DefaultResponse: 'DEFAULT_RESPONSE',
    MaxSplitsExceeded: 'MAX_SPLITS_EXCEEDED',
    AutoAssignLimitExceeded: 'AUTO_ASSIGN_LIMIT_EXCEEDED',
    InventoryRequest: 'INVENTORY_REQUEST',
    RemovedInternationalLocations: 'REMOVED_INTERNATIONAL_LOCATIONS',
    SuggestionUpdated: 'SUGGESTION_UPDATED',
    NonExpressLocationsFiltered: 'NON_EXPRESS_LOCATIONS_FILTERED',
    SthConsolidatedInitiated: 'STH_CONSOLIDATED_INITIATED',
    SthConsolidatedNotUsed: 'STH_CONSOLIDATED_NOT_USED',
    SthConsolidatedUsed: 'STH_CONSOLIDATED_USED',
    FutureAtpInitiated: 'FUTURE_ATP_INITIATED',
    FutureAtpNotUsed: 'FUTURE_ATP_NOT_USED',
    FutureAtpUsed: 'FUTURE_ATP_USED',
    InventoryCallException: 'INVENTORY_CALL_EXCEPTION',
    SthConsolidationInvalidLocationOverride: 'STH_CONSOLIDATION_INVALID_LOCATION_OVERRIDE',
    SthConsolidationForceOverrideInitiated: 'STH_CONSOLIDATION_FORCE_OVERRIDE_INITIATED',
    NoSthConsolidationLocationFound: 'NO_STH_CONSOLIDATION_LOCATION_FOUND',
    ConsolidationFilterMinimizationValidation: 'CONSOLIDATION_FILTER_MINIMIZATION_VALIDATION',
    SthConsolidationForceClosestValidLocationFound: 'STH_CONSOLIDATION_FORCE_CLOSEST_VALID_LOCATION_FOUND',
    SthConsolidationForceNoValidLocationsFound: 'STH_CONSOLIDATION_FORCE_NO_VALID_LOCATIONS_FOUND',
    SthConsolidationForceNoGeoLocationValuesFound: 'STH_CONSOLIDATION_FORCE_NO_GEO_LOCATION_VALUES_FOUND',
    SthConsolidationForceInvalidShippingAddressValues: 'STH_CONSOLIDATION_FORCE_INVALID_SHIPPING_ADDRESS_VALUES',
    MultipleConsolidationLogicInitiated: 'MULTIPLE_CONSOLIDATION_LOGIC_INITIATED',
    MultipleConsolidationPotentialTransferAssignmentsFound: 'MULTIPLE_CONSOLIDATION_POTENTIAL_TRANSFER_ASSIGNMENTS_FOUND',
    MultipleConsolidationInitialCandidatesFound: 'MULTIPLE_CONSOLIDATION_INITIAL_CANDIDATES_FOUND',
    MultipleConsolidationSkippedOriginalAssignments: 'MULTIPLE_CONSOLIDATION_SKIPPED_ORIGINAL_ASSIGNMENTS',
    MultipleConsolidationLogicSkipped: 'MULTIPLE_CONSOLIDATION_LOGIC_SKIPPED',
    MultipleConsolidationAssignmentsCreated: 'MULTIPLE_CONSOLIDATION_ASSIGNMENTS_CREATED'
} as const;
export type NewReverseLogisticsRequestSuggestionEventTypeEnum = typeof NewReverseLogisticsRequestSuggestionEventTypeEnum[keyof typeof NewReverseLogisticsRequestSuggestionEventTypeEnum];

/**
 * 
 * @export
 * @interface OrderRoutingAttribute
 */
export interface OrderRoutingAttribute {
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingAttribute
     */
    attributeFQN?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof OrderRoutingAttribute
     */
    attributeValues?: Array<string>;
}
/**
 * 
 * @export
 * @interface OrderRoutingFutureInventory
 */
export interface OrderRoutingFutureInventory {
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingFutureInventory
     */
    allocated?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingFutureInventory
     */
    available?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingFutureInventory
     */
    bopisFulfillmentDate?: string;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingFutureInventory
     */
    bopisProcessingTimeHours?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingFutureInventory
     */
    createDate?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingFutureInventory
     */
    deliveryDate?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingFutureInventory
     */
    externalID?: string;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingFutureInventory
     */
    futureInventoryID?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingFutureInventory
     */
    onhand?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingFutureInventory
     */
    pending?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingFutureInventory
     */
    receiveProcessingTimeHours?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingFutureInventory
     */
    shortage?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingFutureInventory
     */
    sthFulfillmentDate?: string;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingFutureInventory
     */
    sthProcessingTimeHours?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingFutureInventory
     */
    transferFulfillmentDate?: string;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingFutureInventory
     */
    transferProcessingTimeHours?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingFutureInventory
     */
    type?: string;
}
/**
 * 
 * @export
 * @interface OrderRoutingLocationGroup
 */
export interface OrderRoutingLocationGroup {
    /**
     * 
     * @type {boolean}
     * @memberof OrderRoutingLocationGroup
     */
    active: boolean;
    /**
     * 
     * @type {GroupAfterAction}
     * @memberof OrderRoutingLocationGroup
     */
    afterActionNone?: GroupAfterAction;
    /**
     * 
     * @type {GroupAfterAction}
     * @memberof OrderRoutingLocationGroup
     */
    afterActionPartial?: GroupAfterAction;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingLocationGroup
     */
    created?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingLocationGroup
     */
    creatorUsername?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingLocationGroup
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingLocationGroup
     */
    environmentID: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof OrderRoutingLocationGroup
     */
    excludedLocationsFromDefaultGroup?: Array<number>;
    /**
     * 
     * @type {Set<FilterLogicalGroup>}
     * @memberof OrderRoutingLocationGroup
     */
    filterLogicalGroups?: Set<FilterLogicalGroup>;
    /**
     * 
     * @type {Set<AbstractFilter>}
     * @memberof OrderRoutingLocationGroup
     */
    filters?: Set<AbstractFilter>;
    /**
     * 
     * @type {FulfillmentLimit}
     * @memberof OrderRoutingLocationGroup
     */
    fulfillmentLimit?: FulfillmentLimit;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingLocationGroup
     */
    groupID?: number;
    /**
     * 
     * @type {boolean}
     * @memberof OrderRoutingLocationGroup
     */
    isDefaultGroup?: boolean;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingLocationGroup
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingLocationGroup
     */
    pathString?: string;
    /**
     * 
     * @type {boolean}
     * @memberof OrderRoutingLocationGroup
     */
    persisted?: boolean;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingLocationGroup
     */
    rank: number;
    /**
     * 
     * @type {Array<RankedLocation>}
     * @memberof OrderRoutingLocationGroup
     */
    rankedLocations?: Array<RankedLocation>;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingLocationGroup
     */
    siteID: number;
    /**
     * 
     * @type {Array<LocationSort>}
     * @memberof OrderRoutingLocationGroup
     */
    sorts?: Array<LocationSort>;
    /**
     * 
     * @type {Set<object>}
     * @memberof OrderRoutingLocationGroup
     */
    suggestionEventListeners?: Set<object>;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingLocationGroup
     */
    tenantID: number;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingLocationGroup
     */
    updated?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingLocationGroup
     */
    updaterUsername?: string;
    /**
     * 
     * @type {boolean}
     * @memberof OrderRoutingLocationGroup
     */
    useRetailerExclusionList?: boolean;
    /**
     * 
     * @type {UserContextInformation}
     * @memberof OrderRoutingLocationGroup
     */
    userContext?: UserContextInformation;
}
/**
 * 
 * @export
 * @interface OrderRoutingOrderAttribute
 */
export interface OrderRoutingOrderAttribute {
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingOrderAttribute
     */
    fullyQualifiedName?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof OrderRoutingOrderAttribute
     */
    values?: Array<string>;
}
/**
 * 
 * @export
 * @interface OrderRoutingOrderItem
 */
export interface OrderRoutingOrderItem {
    /**
     * 
     * @type {boolean}
     * @memberof OrderRoutingOrderItem
     */
    backorderable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingOrderItem
     */
    condition?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof OrderRoutingOrderItem
     */
    customItemData?: { [key: string]: object; };
    /**
     * 
     * @type {ExtendedProductInfo}
     * @memberof OrderRoutingOrderItem
     */
    extendedProductInfo?: ExtendedProductInfo;
    /**
     * 
     * @type {boolean}
     * @memberof OrderRoutingOrderItem
     */
    futureOrderable?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OrderRoutingOrderItem
     */
    granularInventoryItem?: boolean;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingOrderItem
     */
    height?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingOrderItem
     */
    itemDependency?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingOrderItem
     */
    length?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingOrderItem
     */
    orderItemID?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingOrderItem
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingOrderItem
     */
    productTitle?: string;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingOrderItem
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingOrderItem
     */
    serialNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingOrderItem
     */
    shippingMethod?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingOrderItem
     */
    sku?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof OrderRoutingOrderItem
     */
    tags?: { [key: string]: string; };
    /**
     * 
     * @type {boolean}
     * @memberof OrderRoutingOrderItem
     */
    taxable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingOrderItem
     */
    upc?: string;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingOrderItem
     */
    weight?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingOrderItem
     */
    width?: number;
}
/**
 * 
 * @export
 * @interface OrderRoutingSettings
 */
export interface OrderRoutingSettings {
    /**
     * 
     * @type {boolean}
     * @memberof OrderRoutingSettings
     */
    allowInternationalAssignment: boolean;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingSettings
     */
    autoAssignLimit?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingSettings
     */
    defaultStateChange: OrderRoutingSettingsDefaultStateChangeEnum;
    /**
     * 
     * @type {Set<string>}
     * @memberof OrderRoutingSettings
     */
    failoverActions?: Set<OrderRoutingSettingsFailoverActionsEnum>;
    /**
     * 
     * @type {Set<FilterAttribute>}
     * @memberof OrderRoutingSettings
     */
    filterAttributes?: Set<FilterAttribute>;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingSettings
     */
    maxFulfillingLocations?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingSettings
     */
    maxSplitItemLocations?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingSettings
     */
    productIdentifierMapping?: OrderRoutingSettingsProductIdentifierMappingEnum;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingSettings
     */
    siteID?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingSettings
     */
    tenantID?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingSettings
     */
    tooManyAssignsAction: OrderRoutingSettingsTooManyAssignsActionEnum;
}


/**
 * @export
 */
export const OrderRoutingSettingsDefaultStateChangeEnum = {
    Cancel: 'CANCEL',
    CustomerCare: 'CUSTOMER_CARE',
    Available: 'AVAILABLE',
    Backorder: 'BACKORDER'
} as const;
export type OrderRoutingSettingsDefaultStateChangeEnum = typeof OrderRoutingSettingsDefaultStateChangeEnum[keyof typeof OrderRoutingSettingsDefaultStateChangeEnum];

/**
 * @export
 */
export const OrderRoutingSettingsFailoverActionsEnum = {
    LineItemSplitAssignIfFulfilled: 'LINE_ITEM_SPLIT_ASSIGN_IF_FULFILLED',
    LineItemSplitCancelWithoutInventory: 'LINE_ITEM_SPLIT_CANCEL_WITHOUT_INVENTORY',
    QuantitySplitAssignIfFulfilled: 'QUANTITY_SPLIT_ASSIGN_IF_FULFILLED',
    QuantitySplitCancelWithoutInventory: 'QUANTITY_SPLIT_CANCEL_WITHOUT_INVENTORY',
    CancelOrder: 'CANCEL_ORDER',
    AssignToCustomerCare: 'ASSIGN_TO_CUSTOMER_CARE',
    AssignToGroup: 'ASSIGN_TO_GROUP',
    LineItemSplitAssignCustomerCareWithoutInventory: 'LINE_ITEM_SPLIT_ASSIGN_CUSTOMER_CARE_WITHOUT_INVENTORY',
    QuantitySplitAssignCustomerCareWithoutInventory: 'QUANTITY_SPLIT_ASSIGN_CUSTOMER_CARE_WITHOUT_INVENTORY',
    SendOrderToBidding: 'SEND_ORDER_TO_BIDDING',
    LineItemSplitBackorderWithoutInventory: 'LINE_ITEM_SPLIT_BACKORDER_WITHOUT_INVENTORY',
    QuantitySplitBackorderWithoutInventory: 'QUANTITY_SPLIT_BACKORDER_WITHOUT_INVENTORY',
    AssignToBackorder: 'ASSIGN_TO_BACKORDER'
} as const;
export type OrderRoutingSettingsFailoverActionsEnum = typeof OrderRoutingSettingsFailoverActionsEnum[keyof typeof OrderRoutingSettingsFailoverActionsEnum];

/**
 * @export
 */
export const OrderRoutingSettingsProductIdentifierMappingEnum = {
    PartNumberOnly: 'PART_NUMBER_ONLY',
    UpcOnly: 'UPC_ONLY',
    SkuOnly: 'SKU_ONLY',
    PartNumberAndUpc: 'PART_NUMBER_AND_UPC',
    PartNumberAndSku: 'PART_NUMBER_AND_SKU',
    UpcAndSku: 'UPC_AND_SKU',
    PartNumberAndUpcAndSku: 'PART_NUMBER_AND_UPC_AND_SKU'
} as const;
export type OrderRoutingSettingsProductIdentifierMappingEnum = typeof OrderRoutingSettingsProductIdentifierMappingEnum[keyof typeof OrderRoutingSettingsProductIdentifierMappingEnum];

/**
 * @export
 */
export const OrderRoutingSettingsTooManyAssignsActionEnum = {
    Cancel: 'CANCEL',
    CustomerCare: 'CUSTOMER_CARE',
    Available: 'AVAILABLE',
    Backorder: 'BACKORDER'
} as const;
export type OrderRoutingSettingsTooManyAssignsActionEnum = typeof OrderRoutingSettingsTooManyAssignsActionEnum[keyof typeof OrderRoutingSettingsTooManyAssignsActionEnum];

/**
 * 
 * @export
 * @interface OrderRoutingShippingAddress
 */
export interface OrderRoutingShippingAddress {
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingShippingAddress
     */
    addressID?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingShippingAddress
     */
    addressLine1?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingShippingAddress
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingShippingAddress
     */
    countryCode?: string;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingShippingAddress
     */
    customerID?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingShippingAddress
     */
    latitude?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingShippingAddress
     */
    longitude?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingShippingAddress
     */
    phone?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingShippingAddress
     */
    postalCode?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingShippingAddress
     */
    state?: string;
}
/**
 * 
 * @export
 * @interface OrderRoutingTagQuantity
 */
export interface OrderRoutingTagQuantity {
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingTagQuantity
     */
    allocated?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingTagQuantity
     */
    available?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingTagQuantity
     */
    bopisFulfillmentDate?: string;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingTagQuantity
     */
    bopisProcessingTimeHours?: number;
    /**
     * 
     * @type {Array<OrderRoutingFutureInventory>}
     * @memberof OrderRoutingTagQuantity
     */
    futureInventory?: Array<OrderRoutingFutureInventory>;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingTagQuantity
     */
    onHand?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingTagQuantity
     */
    pending?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingTagQuantity
     */
    receiveProcessingTimeHours?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingTagQuantity
     */
    shortage?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingTagQuantity
     */
    sthFulfillmentDate?: string;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingTagQuantity
     */
    sthProcessingTimeHours?: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof OrderRoutingTagQuantity
     */
    tags?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingTagQuantity
     */
    transferFulfillmentDate?: string;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingTagQuantity
     */
    transferProcessingTimeHours?: number;
}
/**
 * 
 * @export
 * @interface OrderTypesModel
 */
export interface OrderTypesModel {
    /**
     * 
     * @type {Array<string>}
     * @memberof OrderTypesModel
     */
    orderTypes?: Array<OrderTypesModelOrderTypesEnum>;
}


/**
 * @export
 */
export const OrderTypesModelOrderTypesEnum = {
    Directship: 'DIRECTSHIP',
    Transfer: 'TRANSFER',
    SthConsolidated: 'STH_CONSOLIDATED',
    Return: 'RETURN',
    Disposition: 'DISPOSITION',
    Delivery: 'DELIVERY',
    Bopis: 'BOPIS'
} as const;
export type OrderTypesModelOrderTypesEnum = typeof OrderTypesModelOrderTypesEnum[keyof typeof OrderTypesModelOrderTypesEnum];

/**
 * 
 * @export
 * @interface PagedRequest
 */
export interface PagedRequest {
    /**
     * 
     * @type {number}
     * @memberof PagedRequest
     */
    pageNum?: number;
    /**
     * 
     * @type {number}
     * @memberof PagedRequest
     */
    pageSize?: number;
    /**
     * 
     * @type {string}
     * @memberof PagedRequest
     */
    sortDirection?: PagedRequestSortDirectionEnum;
}


/**
 * @export
 */
export const PagedRequestSortDirectionEnum = {
    Asc: 'ASC',
    Desc: 'DESC'
} as const;
export type PagedRequestSortDirectionEnum = typeof PagedRequestSortDirectionEnum[keyof typeof PagedRequestSortDirectionEnum];

/**
 * 
 * @export
 * @interface PagedResponseCustomDataListsModel
 */
export interface PagedResponseCustomDataListsModel {
    /**
     * 
     * @type {Array<CustomDataListsModel>}
     * @memberof PagedResponseCustomDataListsModel
     */
    items?: Array<CustomDataListsModel>;
    /**
     * 
     * @type {number}
     * @memberof PagedResponseCustomDataListsModel
     */
    pageNum?: number;
    /**
     * 
     * @type {number}
     * @memberof PagedResponseCustomDataListsModel
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof PagedResponseCustomDataListsModel
     */
    paginatedItems?: number;
    /**
     * 
     * @type {number}
     * @memberof PagedResponseCustomDataListsModel
     */
    totalItems?: number;
    /**
     * 
     * @type {number}
     * @memberof PagedResponseCustomDataListsModel
     */
    totalPages?: number;
}
/**
 * 
 * @export
 * @interface PagedResponseScenarioDto
 */
export interface PagedResponseScenarioDto {
    /**
     * 
     * @type {Array<ScenarioDto>}
     * @memberof PagedResponseScenarioDto
     */
    items?: Array<ScenarioDto>;
    /**
     * 
     * @type {number}
     * @memberof PagedResponseScenarioDto
     */
    pageNum?: number;
    /**
     * 
     * @type {number}
     * @memberof PagedResponseScenarioDto
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof PagedResponseScenarioDto
     */
    paginatedItems?: number;
    /**
     * 
     * @type {number}
     * @memberof PagedResponseScenarioDto
     */
    totalItems?: number;
    /**
     * 
     * @type {number}
     * @memberof PagedResponseScenarioDto
     */
    totalPages?: number;
}
/**
 * 
 * @export
 * @interface PagedResponseScenarioFilterLogicalGroupResponse
 */
export interface PagedResponseScenarioFilterLogicalGroupResponse {
    /**
     * 
     * @type {Array<ScenarioFilterLogicalGroupResponse>}
     * @memberof PagedResponseScenarioFilterLogicalGroupResponse
     */
    items?: Array<ScenarioFilterLogicalGroupResponse>;
    /**
     * 
     * @type {number}
     * @memberof PagedResponseScenarioFilterLogicalGroupResponse
     */
    pageNum?: number;
    /**
     * 
     * @type {number}
     * @memberof PagedResponseScenarioFilterLogicalGroupResponse
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof PagedResponseScenarioFilterLogicalGroupResponse
     */
    paginatedItems?: number;
    /**
     * 
     * @type {number}
     * @memberof PagedResponseScenarioFilterLogicalGroupResponse
     */
    totalItems?: number;
    /**
     * 
     * @type {number}
     * @memberof PagedResponseScenarioFilterLogicalGroupResponse
     */
    totalPages?: number;
}
/**
 * 
 * @export
 * @interface PagedResponseScenarioFilterResponse
 */
export interface PagedResponseScenarioFilterResponse {
    /**
     * 
     * @type {Array<ScenarioFilterResponse>}
     * @memberof PagedResponseScenarioFilterResponse
     */
    items?: Array<ScenarioFilterResponse>;
    /**
     * 
     * @type {number}
     * @memberof PagedResponseScenarioFilterResponse
     */
    pageNum?: number;
    /**
     * 
     * @type {number}
     * @memberof PagedResponseScenarioFilterResponse
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof PagedResponseScenarioFilterResponse
     */
    paginatedItems?: number;
    /**
     * 
     * @type {number}
     * @memberof PagedResponseScenarioFilterResponse
     */
    totalItems?: number;
    /**
     * 
     * @type {number}
     * @memberof PagedResponseScenarioFilterResponse
     */
    totalPages?: number;
}
/**
 * 
 * @export
 * @interface PagedResponseStrategyResponseModel
 */
export interface PagedResponseStrategyResponseModel {
    /**
     * 
     * @type {Array<StrategyResponseModel>}
     * @memberof PagedResponseStrategyResponseModel
     */
    items?: Array<StrategyResponseModel>;
    /**
     * 
     * @type {number}
     * @memberof PagedResponseStrategyResponseModel
     */
    pageNum?: number;
    /**
     * 
     * @type {number}
     * @memberof PagedResponseStrategyResponseModel
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof PagedResponseStrategyResponseModel
     */
    paginatedItems?: number;
    /**
     * 
     * @type {number}
     * @memberof PagedResponseStrategyResponseModel
     */
    totalItems?: number;
    /**
     * 
     * @type {number}
     * @memberof PagedResponseStrategyResponseModel
     */
    totalPages?: number;
}
/**
 * 
 * @export
 * @interface PreAssignedLocation
 */
export interface PreAssignedLocation {
    /**
     * 
     * @type {string}
     * @memberof PreAssignedLocation
     */
    futureDate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PreAssignedLocation
     */
    isTransfer?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PreAssignedLocation
     */
    locationCode?: string;
    /**
     * 
     * @type {number}
     * @memberof PreAssignedLocation
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof PreAssignedLocation
     */
    transferToLocationCode?: string;
}
/**
 * 
 * @export
 * @interface ProductChildItem
 */
export interface ProductChildItem {
    /**
     * 
     * @type {boolean}
     * @memberof ProductChildItem
     */
    backorderable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProductChildItem
     */
    condition?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof ProductChildItem
     */
    customItemData?: { [key: string]: object; };
    /**
     * 
     * @type {ItemMeasurement}
     * @memberof ProductChildItem
     */
    eddHeight?: ItemMeasurement;
    /**
     * 
     * @type {ItemMeasurement}
     * @memberof ProductChildItem
     */
    eddLength?: ItemMeasurement;
    /**
     * 
     * @type {ItemMeasurement}
     * @memberof ProductChildItem
     */
    eddWeight?: ItemMeasurement;
    /**
     * 
     * @type {ItemMeasurement}
     * @memberof ProductChildItem
     */
    eddWidth?: ItemMeasurement;
    /**
     * 
     * @type {ExtendedProductInfo}
     * @memberof ProductChildItem
     */
    extendedProductInfo?: ExtendedProductInfo;
    /**
     * 
     * @type {boolean}
     * @memberof ProductChildItem
     */
    futureOrderable?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ProductChildItem
     */
    granularInventoryItem?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ProductChildItem
     */
    itemDependency?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductChildItem
     */
    orderItemID?: number;
    /**
     * 
     * @type {string}
     * @memberof ProductChildItem
     */
    partNumber?: string;
    /**
     * 
     * @type {Array<PreAssignedLocation>}
     * @memberof ProductChildItem
     */
    preAssignedLocations?: Array<PreAssignedLocation>;
    /**
     * 
     * @type {string}
     * @memberof ProductChildItem
     */
    productTitle?: string;
    /**
     * 
     * @type {number}
     * @memberof ProductChildItem
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof ProductChildItem
     */
    serialNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductChildItem
     */
    shippingMethod?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductChildItem
     */
    sku?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ProductChildItem
     */
    tags?: { [key: string]: string; };
    /**
     * 
     * @type {boolean}
     * @memberof ProductChildItem
     */
    taxable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProductChildItem
     */
    upc?: string;
}
/**
 * 
 * @export
 * @interface RankedLocation
 */
export interface RankedLocation {
    /**
     * 
     * @type {string}
     * @memberof RankedLocation
     */
    locationCode?: string;
    /**
     * 
     * @type {number}
     * @memberof RankedLocation
     */
    locationID?: number;
    /**
     * 
     * @type {number}
     * @memberof RankedLocation
     */
    rank?: number;
}
/**
 * 
 * @export
 * @interface ReturnAssignmentSuggestion
 */
export interface ReturnAssignmentSuggestion {
    /**
     * 
     * @type {Array<ReverseLogisticsAssignmentSuggestionItem>}
     * @memberof ReturnAssignmentSuggestion
     */
    items?: Array<ReverseLogisticsAssignmentSuggestionItem>;
    /**
     * 
     * @type {string}
     * @memberof ReturnAssignmentSuggestion
     */
    locationCode?: string;
    /**
     * 
     * @type {number}
     * @memberof ReturnAssignmentSuggestion
     */
    locationID?: number;
    /**
     * 
     * @type {string}
     * @memberof ReturnAssignmentSuggestion
     */
    route?: ReturnAssignmentSuggestionRouteEnum;
}


/**
 * @export
 */
export const ReturnAssignmentSuggestionRouteEnum = {
    Directship: 'DIRECTSHIP',
    Transfer: 'TRANSFER',
    SthConsolidated: 'STH_CONSOLIDATED',
    Return: 'RETURN',
    Disposition: 'DISPOSITION',
    Delivery: 'DELIVERY',
    Bopis: 'BOPIS'
} as const;
export type ReturnAssignmentSuggestionRouteEnum = typeof ReturnAssignmentSuggestionRouteEnum[keyof typeof ReturnAssignmentSuggestionRouteEnum];

/**
 * 
 * @export
 * @interface ReturnSuggestionRequest
 */
export interface ReturnSuggestionRequest {
    /**
     * 
     * @type {string}
     * @memberof ReturnSuggestionRequest
     */
    bundlingStrategy?: ReturnSuggestionRequestBundlingStrategyEnum;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ReturnSuggestionRequest
     */
    customData?: { [key: string]: string; };
    /**
     * 
     * @type {number}
     * @memberof ReturnSuggestionRequest
     */
    environmentID?: number;
    /**
     * 
     * @type {Array<ExclusionListEntryLocationCode>}
     * @memberof ReturnSuggestionRequest
     */
    exclusionListLocationCode?: Array<ExclusionListEntryLocationCode>;
    /**
     * 
     * @type {ExtendedCustomerInfo}
     * @memberof ReturnSuggestionRequest
     */
    extendedCustomerInfo?: ExtendedCustomerInfo;
    /**
     * 
     * @type {ExtendedOrderInfo}
     * @memberof ReturnSuggestionRequest
     */
    extendedOrderInfo?: ExtendedOrderInfo;
    /**
     * 
     * @type {string}
     * @memberof ReturnSuggestionRequest
     */
    externalResponseID?: string;
    /**
     * 
     * @type {number}
     * @memberof ReturnSuggestionRequest
     */
    fraud?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ReturnSuggestionRequest
     */
    isExpress?: boolean;
    /**
     * 
     * @type {Array<ReverseLogisticsItem>}
     * @memberof ReturnSuggestionRequest
     */
    items: Array<ReverseLogisticsItem>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReturnSuggestionRequest
     */
    locationCodeWhiteList?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof ReturnSuggestionRequest
     */
    orderID?: number;
    /**
     * 
     * @type {string}
     * @memberof ReturnSuggestionRequest
     */
    orderType: ReturnSuggestionRequestOrderTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof ReturnSuggestionRequest
     */
    returnID?: number;
    /**
     * 
     * @type {OrderRoutingShippingAddress}
     * @memberof ReturnSuggestionRequest
     */
    shippingAddress?: OrderRoutingShippingAddress;
    /**
     * 
     * @type {string}
     * @memberof ReturnSuggestionRequest
     */
    strategyID?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ReturnSuggestionRequest
     */
    tags?: { [key: string]: string; };
    /**
     * 
     * @type {number}
     * @memberof ReturnSuggestionRequest
     */
    total: number;
}


/**
 * @export
 */
export const ReturnSuggestionRequestBundlingStrategyEnum = {
    ItemDependency: 'ITEM_DEPENDENCY'
} as const;
export type ReturnSuggestionRequestBundlingStrategyEnum = typeof ReturnSuggestionRequestBundlingStrategyEnum[keyof typeof ReturnSuggestionRequestBundlingStrategyEnum];

/**
 * @export
 */
export const ReturnSuggestionRequestOrderTypeEnum = {
    Directship: 'DIRECTSHIP',
    Transfer: 'TRANSFER',
    SthConsolidated: 'STH_CONSOLIDATED',
    Return: 'RETURN',
    Disposition: 'DISPOSITION',
    Delivery: 'DELIVERY',
    Bopis: 'BOPIS'
} as const;
export type ReturnSuggestionRequestOrderTypeEnum = typeof ReturnSuggestionRequestOrderTypeEnum[keyof typeof ReturnSuggestionRequestOrderTypeEnum];

/**
 * 
 * @export
 * @interface ReverseLogisticsAssignmentSuggestionItem
 */
export interface ReverseLogisticsAssignmentSuggestionItem {
    /**
     * 
     * @type {string}
     * @memberof ReverseLogisticsAssignmentSuggestionItem
     */
    dispositionCondition?: string;
    /**
     * 
     * @type {number}
     * @memberof ReverseLogisticsAssignmentSuggestionItem
     */
    orderItemID?: number;
    /**
     * 
     * @type {number}
     * @memberof ReverseLogisticsAssignmentSuggestionItem
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof ReverseLogisticsAssignmentSuggestionItem
     */
    returnReason?: string;
}
/**
 * 
 * @export
 * @interface ReverseLogisticsItem
 */
export interface ReverseLogisticsItem {
    /**
     * 
     * @type {string}
     * @memberof ReverseLogisticsItem
     */
    condition?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof ReverseLogisticsItem
     */
    customItemData?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof ReverseLogisticsItem
     */
    dispositionCondition?: string;
    /**
     * 
     * @type {ExtendedProductInfo}
     * @memberof ReverseLogisticsItem
     */
    extendedProductInfo?: ExtendedProductInfo;
    /**
     * 
     * @type {number}
     * @memberof ReverseLogisticsItem
     */
    height?: number;
    /**
     * 
     * @type {number}
     * @memberof ReverseLogisticsItem
     */
    itemDependency?: number;
    /**
     * 
     * @type {number}
     * @memberof ReverseLogisticsItem
     */
    length?: number;
    /**
     * 
     * @type {number}
     * @memberof ReverseLogisticsItem
     */
    orderItemID?: number;
    /**
     * 
     * @type {string}
     * @memberof ReverseLogisticsItem
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof ReverseLogisticsItem
     */
    productTitle?: string;
    /**
     * 
     * @type {number}
     * @memberof ReverseLogisticsItem
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof ReverseLogisticsItem
     */
    returnReason?: string;
    /**
     * 
     * @type {string}
     * @memberof ReverseLogisticsItem
     */
    serialNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof ReverseLogisticsItem
     */
    sku?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ReverseLogisticsItem
     */
    tags?: { [key: string]: string; };
    /**
     * 
     * @type {boolean}
     * @memberof ReverseLogisticsItem
     */
    taxable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReverseLogisticsItem
     */
    upc?: string;
    /**
     * 
     * @type {number}
     * @memberof ReverseLogisticsItem
     */
    weight?: number;
    /**
     * 
     * @type {number}
     * @memberof ReverseLogisticsItem
     */
    width?: number;
}
/**
 * 
 * @export
 * @interface ReverseLogisticsStateChangeSuggestion
 */
export interface ReverseLogisticsStateChangeSuggestion {
    /**
     * 
     * @type {string}
     * @memberof ReverseLogisticsStateChangeSuggestion
     */
    dispositionCondition?: string;
    /**
     * 
     * @type {number}
     * @memberof ReverseLogisticsStateChangeSuggestion
     */
    orderItemID?: number;
    /**
     * 
     * @type {number}
     * @memberof ReverseLogisticsStateChangeSuggestion
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof ReverseLogisticsStateChangeSuggestion
     */
    returnReason?: string;
    /**
     * 
     * @type {string}
     * @memberof ReverseLogisticsStateChangeSuggestion
     */
    stateChange?: ReverseLogisticsStateChangeSuggestionStateChangeEnum;
}


/**
 * @export
 */
export const ReverseLogisticsStateChangeSuggestionStateChangeEnum = {
    Cancel: 'CANCEL',
    CustomerCare: 'CUSTOMER_CARE',
    Available: 'AVAILABLE',
    Backorder: 'BACKORDER'
} as const;
export type ReverseLogisticsStateChangeSuggestionStateChangeEnum = typeof ReverseLogisticsStateChangeSuggestionStateChangeEnum[keyof typeof ReverseLogisticsStateChangeSuggestionStateChangeEnum];

/**
 * 
 * @export
 * @interface ReverseLogisticsSuggestionResponse
 */
export interface ReverseLogisticsSuggestionResponse {
    /**
     * 
     * @type {string}
     * @memberof ReverseLogisticsSuggestionResponse
     */
    externalResponseID?: string;
    /**
     * 
     * @type {number}
     * @memberof ReverseLogisticsSuggestionResponse
     */
    responseID?: number;
    /**
     * 
     * @type {{ [key: string]: ReturnAssignmentSuggestion; }}
     * @memberof ReverseLogisticsSuggestionResponse
     */
    reverseLogisticsSuggestions?: { [key: string]: ReturnAssignmentSuggestion; };
    /**
     * 
     * @type {string}
     * @memberof ReverseLogisticsSuggestionResponse
     */
    route?: ReverseLogisticsSuggestionResponseRouteEnum;
    /**
     * 
     * @type {{ [key: string]: ReverseLogisticsStateChangeSuggestion; }}
     * @memberof ReverseLogisticsSuggestionResponse
     */
    stateChangeSuggestions?: { [key: string]: ReverseLogisticsStateChangeSuggestion; };
    /**
     * 
     * @type {SuggestionLog}
     * @memberof ReverseLogisticsSuggestionResponse
     */
    suggestionLog?: SuggestionLog;
}


/**
 * @export
 */
export const ReverseLogisticsSuggestionResponseRouteEnum = {
    Directship: 'DIRECTSHIP',
    Transfer: 'TRANSFER',
    SthConsolidated: 'STH_CONSOLIDATED',
    Return: 'RETURN',
    Disposition: 'DISPOSITION',
    Delivery: 'DELIVERY',
    Bopis: 'BOPIS'
} as const;
export type ReverseLogisticsSuggestionResponseRouteEnum = typeof ReverseLogisticsSuggestionResponseRouteEnum[keyof typeof ReverseLogisticsSuggestionResponseRouteEnum];

/**
 * 
 * @export
 * @interface ScenarioDto
 */
export interface ScenarioDto {
    /**
     * 
     * @type {string}
     * @memberof ScenarioDto
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof ScenarioDto
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof ScenarioDto
     */
    rank?: number;
    /**
     * 
     * @type {number}
     * @memberof ScenarioDto
     */
    scenarioID?: number;
}
/**
 * 
 * @export
 * @interface ScenarioFilterLogicalGroupResponse
 */
export interface ScenarioFilterLogicalGroupResponse {
    /**
     * 
     * @type {number}
     * @memberof ScenarioFilterLogicalGroupResponse
     */
    filterLogicalGroupID?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ScenarioFilterLogicalGroupResponse
     */
    isRootGroup?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ScenarioFilterLogicalGroupResponse
     */
    logicalOperator?: ScenarioFilterLogicalGroupResponseLogicalOperatorEnum;
    /**
     * 
     * @type {number}
     * @memberof ScenarioFilterLogicalGroupResponse
     */
    orderIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof ScenarioFilterLogicalGroupResponse
     */
    parentOrderIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof ScenarioFilterLogicalGroupResponse
     */
    scenarioID?: number;
}


/**
 * @export
 */
export const ScenarioFilterLogicalGroupResponseLogicalOperatorEnum = {
    And: 'AND',
    Or: 'OR'
} as const;
export type ScenarioFilterLogicalGroupResponseLogicalOperatorEnum = typeof ScenarioFilterLogicalGroupResponseLogicalOperatorEnum[keyof typeof ScenarioFilterLogicalGroupResponseLogicalOperatorEnum];

/**
 * 
 * @export
 * @interface ScenarioFilterLogicalGroupUpsertRequest
 */
export interface ScenarioFilterLogicalGroupUpsertRequest {
    /**
     * 
     * @type {number}
     * @memberof ScenarioFilterLogicalGroupUpsertRequest
     */
    filterLogicalGroupID?: number;
    /**
     * 
     * @type {string}
     * @memberof ScenarioFilterLogicalGroupUpsertRequest
     */
    logicalOperator: ScenarioFilterLogicalGroupUpsertRequestLogicalOperatorEnum;
    /**
     * 
     * @type {number}
     * @memberof ScenarioFilterLogicalGroupUpsertRequest
     */
    orderIndex: number;
    /**
     * 
     * @type {number}
     * @memberof ScenarioFilterLogicalGroupUpsertRequest
     */
    parentOrderIndex?: number;
}


/**
 * @export
 */
export const ScenarioFilterLogicalGroupUpsertRequestLogicalOperatorEnum = {
    And: 'AND',
    Or: 'OR'
} as const;
export type ScenarioFilterLogicalGroupUpsertRequestLogicalOperatorEnum = typeof ScenarioFilterLogicalGroupUpsertRequestLogicalOperatorEnum[keyof typeof ScenarioFilterLogicalGroupUpsertRequestLogicalOperatorEnum];

/**
 * 
 * @export
 * @interface ScenarioFilterResponse
 */
export interface ScenarioFilterResponse {
    /**
     * 
     * @type {string}
     * @memberof ScenarioFilterResponse
     */
    booleanOperator?: ScenarioFilterResponseBooleanOperatorEnum;
    /**
     * 
     * @type {object}
     * @memberof ScenarioFilterResponse
     */
    customValue?: object;
    /**
     * 
     * @type {string}
     * @memberof ScenarioFilterResponse
     */
    customValueUnit?: string;
    /**
     * 
     * @type {number}
     * @memberof ScenarioFilterResponse
     */
    dataListID?: number;
    /**
     * 
     * @type {string}
     * @memberof ScenarioFilterResponse
     */
    dataPointAttributePath?: string;
    /**
     * 
     * @type {string}
     * @memberof ScenarioFilterResponse
     */
    dataPointExtensibleAttributeFQN?: string;
    /**
     * 
     * @type {string}
     * @memberof ScenarioFilterResponse
     */
    dataPointExtensibleAttributeName?: string;
    /**
     * 
     * @type {string}
     * @memberof ScenarioFilterResponse
     */
    dataPointExtensibleAttributeType?: string;
    /**
     * 
     * @type {string}
     * @memberof ScenarioFilterResponse
     */
    extensibleAttributeFQN?: string;
    /**
     * 
     * @type {string}
     * @memberof ScenarioFilterResponse
     */
    extensibleAttributeName?: string;
    /**
     * 
     * @type {string}
     * @memberof ScenarioFilterResponse
     */
    filterAttributePath?: string;
    /**
     * 
     * @type {number}
     * @memberof ScenarioFilterResponse
     */
    filterID?: number;
    /**
     * 
     * @type {number}
     * @memberof ScenarioFilterResponse
     */
    filterLogicalGroupOrderIndex?: number;
    /**
     * 
     * @type {string}
     * @memberof ScenarioFilterResponse
     */
    filterType?: ScenarioFilterResponseFilterTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof ScenarioFilterResponse
     */
    isDataPointExtensible?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ScenarioFilterResponse
     */
    isExtensible?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ScenarioFilterResponse
     */
    itemCustomAttributeName?: string;
    /**
     * 
     * @type {string}
     * @memberof ScenarioFilterResponse
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof ScenarioFilterResponse
     */
    orderIndex?: number;
}


/**
 * @export
 */
export const ScenarioFilterResponseBooleanOperatorEnum = {
    Equal: 'filter.logic.equal',
    NotEqual: 'filter.logic.not.equal',
    GreaterThan: 'filter.logic.greater.than',
    LessThan: 'filter.logic.less.than',
    GreaterOrEqual: 'filter.logic.greater.or.equal',
    LessOrEqual: 'filter.logic.less.or.equal',
    In: 'filter.logic.in',
    NotIn: 'filter.logic.not.in',
    Between: 'filter.logic.between',
    StartsWith: 'filter.logic.starts.with',
    EndsWith: 'filter.logic.ends.with',
    Contains: 'filter.logic.contains',
    DoesNotContain: 'filter.logic.does.not.contain',
    Subset: 'filter.logic.subset'
} as const;
export type ScenarioFilterResponseBooleanOperatorEnum = typeof ScenarioFilterResponseBooleanOperatorEnum[keyof typeof ScenarioFilterResponseBooleanOperatorEnum];

/**
 * @export
 */
export const ScenarioFilterResponseFilterTypeEnum = {
    CustomValue: 'filter.type.customValue',
    CustomDataList: 'filter.type.customDataList',
    DataSet: 'filter.type.dataSet',
    DataPoint: 'filter.type.dataPoint'
} as const;
export type ScenarioFilterResponseFilterTypeEnum = typeof ScenarioFilterResponseFilterTypeEnum[keyof typeof ScenarioFilterResponseFilterTypeEnum];

/**
 * 
 * @export
 * @interface ScenarioFilterUpsertRequest
 */
export interface ScenarioFilterUpsertRequest {
    /**
     * 
     * @type {string}
     * @memberof ScenarioFilterUpsertRequest
     */
    booleanOperator: ScenarioFilterUpsertRequestBooleanOperatorEnum;
    /**
     * 
     * @type {boolean}
     * @memberof ScenarioFilterUpsertRequest
     */
    changed?: boolean;
    /**
     * 
     * @type {object}
     * @memberof ScenarioFilterUpsertRequest
     */
    customValue?: object;
    /**
     * 
     * @type {string}
     * @memberof ScenarioFilterUpsertRequest
     */
    customValueUnit?: string;
    /**
     * 
     * @type {number}
     * @memberof ScenarioFilterUpsertRequest
     */
    dataListID?: number;
    /**
     * 
     * @type {string}
     * @memberof ScenarioFilterUpsertRequest
     */
    dataPointAttributePath?: string;
    /**
     * 
     * @type {string}
     * @memberof ScenarioFilterUpsertRequest
     */
    dataPointExtensibleAttributeFQN?: string;
    /**
     * 
     * @type {string}
     * @memberof ScenarioFilterUpsertRequest
     */
    dataPointExtensibleAttributeName?: string;
    /**
     * 
     * @type {string}
     * @memberof ScenarioFilterUpsertRequest
     */
    dataPointExtensibleAttributeType?: string;
    /**
     * 
     * @type {string}
     * @memberof ScenarioFilterUpsertRequest
     */
    extensibleAttributeFQN?: string;
    /**
     * 
     * @type {string}
     * @memberof ScenarioFilterUpsertRequest
     */
    extensibleAttributeName?: string;
    /**
     * 
     * @type {string}
     * @memberof ScenarioFilterUpsertRequest
     */
    filterAttributePath: string;
    /**
     * 
     * @type {number}
     * @memberof ScenarioFilterUpsertRequest
     */
    filterID?: number;
    /**
     * 
     * @type {number}
     * @memberof ScenarioFilterUpsertRequest
     */
    filterLogicalGroupOrderIndex: number;
    /**
     * 
     * @type {string}
     * @memberof ScenarioFilterUpsertRequest
     */
    filterType: ScenarioFilterUpsertRequestFilterTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof ScenarioFilterUpsertRequest
     */
    isDataPointExtensible?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ScenarioFilterUpsertRequest
     */
    isExtensible?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ScenarioFilterUpsertRequest
     */
    itemCustomAttributeName?: string;
    /**
     * 
     * @type {string}
     * @memberof ScenarioFilterUpsertRequest
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof ScenarioFilterUpsertRequest
     */
    orderIndex: number;
}


/**
 * @export
 */
export const ScenarioFilterUpsertRequestBooleanOperatorEnum = {
    Equal: 'filter.logic.equal',
    NotEqual: 'filter.logic.not.equal',
    GreaterThan: 'filter.logic.greater.than',
    LessThan: 'filter.logic.less.than',
    GreaterOrEqual: 'filter.logic.greater.or.equal',
    LessOrEqual: 'filter.logic.less.or.equal',
    In: 'filter.logic.in',
    NotIn: 'filter.logic.not.in',
    Between: 'filter.logic.between',
    StartsWith: 'filter.logic.starts.with',
    EndsWith: 'filter.logic.ends.with',
    Contains: 'filter.logic.contains',
    DoesNotContain: 'filter.logic.does.not.contain',
    Subset: 'filter.logic.subset'
} as const;
export type ScenarioFilterUpsertRequestBooleanOperatorEnum = typeof ScenarioFilterUpsertRequestBooleanOperatorEnum[keyof typeof ScenarioFilterUpsertRequestBooleanOperatorEnum];

/**
 * @export
 */
export const ScenarioFilterUpsertRequestFilterTypeEnum = {
    CustomValue: 'filter.type.customValue',
    CustomDataList: 'filter.type.customDataList',
    DataSet: 'filter.type.dataSet',
    DataPoint: 'filter.type.dataPoint'
} as const;
export type ScenarioFilterUpsertRequestFilterTypeEnum = typeof ScenarioFilterUpsertRequestFilterTypeEnum[keyof typeof ScenarioFilterUpsertRequestFilterTypeEnum];

/**
 * 
 * @export
 * @interface ScenarioRankDto
 */
export interface ScenarioRankDto {
    /**
     * 
     * @type {string}
     * @memberof ScenarioRankDto
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof ScenarioRankDto
     */
    rank: number;
    /**
     * 
     * @type {number}
     * @memberof ScenarioRankDto
     */
    scenarioID: number;
}
/**
 * 
 * @export
 * @interface ScenarioResponse
 */
export interface ScenarioResponse {
    /**
     * 
     * @type {boolean}
     * @memberof ScenarioResponse
     */
    active?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ScenarioResponse
     */
    defaultGroup?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ScenarioResponse
     */
    description?: string;
    /**
     * 
     * @type {Array<ScenarioFilterLogicalGroupResponse>}
     * @memberof ScenarioResponse
     */
    filterLogicalGroups?: Array<ScenarioFilterLogicalGroupResponse>;
    /**
     * 
     * @type {Array<ScenarioFilterResponse>}
     * @memberof ScenarioResponse
     */
    filters?: Array<ScenarioFilterResponse>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ScenarioResponse
     */
    locations?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ScenarioResponse
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ScenarioResponse
     */
    noMatch?: ScenarioResponseNoMatchEnum;
    /**
     * 
     * @type {string}
     * @memberof ScenarioResponse
     */
    partialMatch?: ScenarioResponsePartialMatchEnum;
    /**
     * 
     * @type {string}
     * @memberof ScenarioResponse
     */
    primarySorting?: ScenarioResponsePrimarySortingEnum;
    /**
     * 
     * @type {number}
     * @memberof ScenarioResponse
     */
    rank?: number;
    /**
     * 
     * @type {string}
     * @memberof ScenarioResponse
     */
    restartAttemptForNoMatch?: ScenarioResponseRestartAttemptForNoMatchEnum;
    /**
     * 
     * @type {string}
     * @memberof ScenarioResponse
     */
    restartAttemptForPartialAssignment?: ScenarioResponseRestartAttemptForPartialAssignmentEnum;
    /**
     * 
     * @type {number}
     * @memberof ScenarioResponse
     */
    restartGroupIdForNoMatch?: number;
    /**
     * 
     * @type {number}
     * @memberof ScenarioResponse
     */
    restartGroupIdForPartialAssignment?: number;
    /**
     * 
     * @type {number}
     * @memberof ScenarioResponse
     */
    scenarioID?: number;
    /**
     * 
     * @type {string}
     * @memberof ScenarioResponse
     */
    secondarySorting?: ScenarioResponseSecondarySortingEnum;
    /**
     * 
     * @type {string}
     * @memberof ScenarioResponse
     */
    strategyID?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ScenarioResponse
     */
    unselectedLocations?: Array<string>;
}


/**
 * @export
 */
export const ScenarioResponseNoMatchEnum = {
    LineItemSplitAssignIfFulfilled: 'LINE_ITEM_SPLIT_ASSIGN_IF_FULFILLED',
    LineItemSplitCancelWithoutInventory: 'LINE_ITEM_SPLIT_CANCEL_WITHOUT_INVENTORY',
    QuantitySplitAssignIfFulfilled: 'QUANTITY_SPLIT_ASSIGN_IF_FULFILLED',
    QuantitySplitCancelWithoutInventory: 'QUANTITY_SPLIT_CANCEL_WITHOUT_INVENTORY',
    CancelOrder: 'CANCEL_ORDER',
    AssignToCustomerCare: 'ASSIGN_TO_CUSTOMER_CARE',
    AssignToGroup: 'ASSIGN_TO_GROUP',
    LineItemSplitAssignCustomerCareWithoutInventory: 'LINE_ITEM_SPLIT_ASSIGN_CUSTOMER_CARE_WITHOUT_INVENTORY',
    QuantitySplitAssignCustomerCareWithoutInventory: 'QUANTITY_SPLIT_ASSIGN_CUSTOMER_CARE_WITHOUT_INVENTORY',
    SendOrderToBidding: 'SEND_ORDER_TO_BIDDING',
    LineItemSplitBackorderWithoutInventory: 'LINE_ITEM_SPLIT_BACKORDER_WITHOUT_INVENTORY',
    QuantitySplitBackorderWithoutInventory: 'QUANTITY_SPLIT_BACKORDER_WITHOUT_INVENTORY',
    AssignToBackorder: 'ASSIGN_TO_BACKORDER'
} as const;
export type ScenarioResponseNoMatchEnum = typeof ScenarioResponseNoMatchEnum[keyof typeof ScenarioResponseNoMatchEnum];

/**
 * @export
 */
export const ScenarioResponsePartialMatchEnum = {
    LineItemSplitAssignIfFulfilled: 'LINE_ITEM_SPLIT_ASSIGN_IF_FULFILLED',
    LineItemSplitCancelWithoutInventory: 'LINE_ITEM_SPLIT_CANCEL_WITHOUT_INVENTORY',
    QuantitySplitAssignIfFulfilled: 'QUANTITY_SPLIT_ASSIGN_IF_FULFILLED',
    QuantitySplitCancelWithoutInventory: 'QUANTITY_SPLIT_CANCEL_WITHOUT_INVENTORY',
    CancelOrder: 'CANCEL_ORDER',
    AssignToCustomerCare: 'ASSIGN_TO_CUSTOMER_CARE',
    AssignToGroup: 'ASSIGN_TO_GROUP',
    LineItemSplitAssignCustomerCareWithoutInventory: 'LINE_ITEM_SPLIT_ASSIGN_CUSTOMER_CARE_WITHOUT_INVENTORY',
    QuantitySplitAssignCustomerCareWithoutInventory: 'QUANTITY_SPLIT_ASSIGN_CUSTOMER_CARE_WITHOUT_INVENTORY',
    SendOrderToBidding: 'SEND_ORDER_TO_BIDDING',
    LineItemSplitBackorderWithoutInventory: 'LINE_ITEM_SPLIT_BACKORDER_WITHOUT_INVENTORY',
    QuantitySplitBackorderWithoutInventory: 'QUANTITY_SPLIT_BACKORDER_WITHOUT_INVENTORY',
    AssignToBackorder: 'ASSIGN_TO_BACKORDER'
} as const;
export type ScenarioResponsePartialMatchEnum = typeof ScenarioResponsePartialMatchEnum[keyof typeof ScenarioResponsePartialMatchEnum];

/**
 * @export
 */
export const ScenarioResponsePrimarySortingEnum = {
    Rank: 'RANK',
    Distance: 'DISTANCE',
    Ltd: 'LTD',
    Cost: 'COST',
    Random: 'RANDOM',
    DataSet: 'DATA_SET',
    LowestAvailable: 'LOWEST_AVAILABLE',
    HighestAvailable: 'HIGHEST_AVAILABLE',
    ExcessCount: 'EXCESS_COUNT',
    ExcessPercentage: 'EXCESS_PERCENTAGE'
} as const;
export type ScenarioResponsePrimarySortingEnum = typeof ScenarioResponsePrimarySortingEnum[keyof typeof ScenarioResponsePrimarySortingEnum];

/**
 * @export
 */
export const ScenarioResponseRestartAttemptForNoMatchEnum = {
    StartAtBeginning: 'START_AT_BEGINNING',
    CurrentGroup: 'CURRENT_GROUP',
    GroupRank: 'GROUP_RANK'
} as const;
export type ScenarioResponseRestartAttemptForNoMatchEnum = typeof ScenarioResponseRestartAttemptForNoMatchEnum[keyof typeof ScenarioResponseRestartAttemptForNoMatchEnum];

/**
 * @export
 */
export const ScenarioResponseRestartAttemptForPartialAssignmentEnum = {
    StartAtBeginning: 'START_AT_BEGINNING',
    CurrentGroup: 'CURRENT_GROUP',
    GroupRank: 'GROUP_RANK'
} as const;
export type ScenarioResponseRestartAttemptForPartialAssignmentEnum = typeof ScenarioResponseRestartAttemptForPartialAssignmentEnum[keyof typeof ScenarioResponseRestartAttemptForPartialAssignmentEnum];

/**
 * @export
 */
export const ScenarioResponseSecondarySortingEnum = {
    Rank: 'RANK',
    Distance: 'DISTANCE',
    Ltd: 'LTD',
    Cost: 'COST',
    Random: 'RANDOM',
    DataSet: 'DATA_SET',
    LowestAvailable: 'LOWEST_AVAILABLE',
    HighestAvailable: 'HIGHEST_AVAILABLE',
    ExcessCount: 'EXCESS_COUNT',
    ExcessPercentage: 'EXCESS_PERCENTAGE'
} as const;
export type ScenarioResponseSecondarySortingEnum = typeof ScenarioResponseSecondarySortingEnum[keyof typeof ScenarioResponseSecondarySortingEnum];

/**
 * 
 * @export
 * @interface SetMultimapIntegerLocationCriteriaSetRow
 */
export interface SetMultimapIntegerLocationCriteriaSetRow {
    /**
     * 
     * @type {boolean}
     * @memberof SetMultimapIntegerLocationCriteriaSetRow
     */
    empty?: boolean;
}
/**
 * 
 * @export
 * @interface SortCriteriaModel
 */
export interface SortCriteriaModel {
    /**
     * 
     * @type {Array<SortCriterionDto>}
     * @memberof SortCriteriaModel
     */
    sortCriteria?: Array<SortCriterionDto>;
}
/**
 * 
 * @export
 * @interface SortCriterionDto
 */
export interface SortCriterionDto {
    /**
     * 
     * @type {string}
     * @memberof SortCriterionDto
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof SortCriterionDto
     */
    id?: string;
}
/**
 * 
 * @export
 * @interface StateChangeSuggestion
 */
export interface StateChangeSuggestion {
    /**
     * 
     * @type {number}
     * @memberof StateChangeSuggestion
     */
    orderItemID?: number;
    /**
     * 
     * @type {number}
     * @memberof StateChangeSuggestion
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof StateChangeSuggestion
     */
    stateChange?: StateChangeSuggestionStateChangeEnum;
}


/**
 * @export
 */
export const StateChangeSuggestionStateChangeEnum = {
    Cancel: 'CANCEL',
    CustomerCare: 'CUSTOMER_CARE',
    Available: 'AVAILABLE',
    Backorder: 'BACKORDER'
} as const;
export type StateChangeSuggestionStateChangeEnum = typeof StateChangeSuggestionStateChangeEnum[keyof typeof StateChangeSuggestionStateChangeEnum];

/**
 * 
 * @export
 * @interface StrategyExportDto
 */
export interface StrategyExportDto {
    /**
     * 
     * @type {boolean}
     * @memberof StrategyExportDto
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof StrategyExportDto
     */
    candidateSortStrategy?: StrategyExportDtoCandidateSortStrategyEnum;
    /**
     * 
     * @type {Array<CustomDataListsModel>}
     * @memberof StrategyExportDto
     */
    dependentDataLists?: Array<CustomDataListsModel>;
    /**
     * 
     * @type {string}
     * @memberof StrategyExportDto
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof StrategyExportDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof StrategyExportDto
     */
    orderType?: StrategyExportDtoOrderTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof StrategyExportDto
     */
    preferAtomicAssignments?: boolean;
    /**
     * 
     * @type {Array<ScenarioResponse>}
     * @memberof StrategyExportDto
     */
    scenarios?: Array<ScenarioResponse>;
    /**
     * 
     * @type {string}
     * @memberof StrategyExportDto
     */
    status?: StrategyExportDtoStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof StrategyExportDto
     */
    strategyId?: string;
}


/**
 * @export
 */
export const StrategyExportDtoCandidateSortStrategyEnum = {
    MinimizeShipments: 'MINIMIZE_SHIPMENTS',
    GroupRankAndQuantity: 'GROUP_RANK_AND_QUANTITY',
    Quantity: 'QUANTITY',
    Distance: 'DISTANCE'
} as const;
export type StrategyExportDtoCandidateSortStrategyEnum = typeof StrategyExportDtoCandidateSortStrategyEnum[keyof typeof StrategyExportDtoCandidateSortStrategyEnum];

/**
 * @export
 */
export const StrategyExportDtoOrderTypeEnum = {
    Directship: 'DIRECTSHIP',
    Transfer: 'TRANSFER',
    SthConsolidated: 'STH_CONSOLIDATED',
    Return: 'RETURN',
    Disposition: 'DISPOSITION',
    Delivery: 'DELIVERY',
    Bopis: 'BOPIS'
} as const;
export type StrategyExportDtoOrderTypeEnum = typeof StrategyExportDtoOrderTypeEnum[keyof typeof StrategyExportDtoOrderTypeEnum];

/**
 * @export
 */
export const StrategyExportDtoStatusEnum = {
    Live: 'LIVE',
    Staged: 'STAGED',
    Archived: 'ARCHIVED',
    Ignored: 'IGNORED'
} as const;
export type StrategyExportDtoStatusEnum = typeof StrategyExportDtoStatusEnum[keyof typeof StrategyExportDtoStatusEnum];

/**
 * 
 * @export
 * @interface StrategyImportDto
 */
export interface StrategyImportDto {
    /**
     * 
     * @type {boolean}
     * @memberof StrategyImportDto
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof StrategyImportDto
     */
    candidateSortStrategy?: StrategyImportDtoCandidateSortStrategyEnum;
    /**
     * 
     * @type {Array<CustomDataListsModel>}
     * @memberof StrategyImportDto
     */
    dependentDataLists?: Array<CustomDataListsModel>;
    /**
     * 
     * @type {string}
     * @memberof StrategyImportDto
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof StrategyImportDto
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof StrategyImportDto
     */
    orderType: StrategyImportDtoOrderTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof StrategyImportDto
     */
    preferAtomicAssignments: boolean;
    /**
     * 
     * @type {Array<UpsertScenarioRequest>}
     * @memberof StrategyImportDto
     */
    scenarios?: Array<UpsertScenarioRequest>;
}


/**
 * @export
 */
export const StrategyImportDtoCandidateSortStrategyEnum = {
    MinimizeShipments: 'MINIMIZE_SHIPMENTS',
    GroupRankAndQuantity: 'GROUP_RANK_AND_QUANTITY',
    Quantity: 'QUANTITY',
    Distance: 'DISTANCE'
} as const;
export type StrategyImportDtoCandidateSortStrategyEnum = typeof StrategyImportDtoCandidateSortStrategyEnum[keyof typeof StrategyImportDtoCandidateSortStrategyEnum];

/**
 * @export
 */
export const StrategyImportDtoOrderTypeEnum = {
    Directship: 'DIRECTSHIP',
    Transfer: 'TRANSFER',
    SthConsolidated: 'STH_CONSOLIDATED',
    Return: 'RETURN',
    Disposition: 'DISPOSITION',
    Delivery: 'DELIVERY',
    Bopis: 'BOPIS'
} as const;
export type StrategyImportDtoOrderTypeEnum = typeof StrategyImportDtoOrderTypeEnum[keyof typeof StrategyImportDtoOrderTypeEnum];

/**
 * 
 * @export
 * @interface StrategyResponseModel
 */
export interface StrategyResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof StrategyResponseModel
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof StrategyResponseModel
     */
    candidateSortStrategy?: StrategyResponseModelCandidateSortStrategyEnum;
    /**
     * 
     * @type {string}
     * @memberof StrategyResponseModel
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof StrategyResponseModel
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof StrategyResponseModel
     */
    orderType?: StrategyResponseModelOrderTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof StrategyResponseModel
     */
    preferAtomicAssignments?: boolean;
    /**
     * 
     * @type {string}
     * @memberof StrategyResponseModel
     */
    strategyID?: string;
}


/**
 * @export
 */
export const StrategyResponseModelCandidateSortStrategyEnum = {
    MinimizeShipments: 'MINIMIZE_SHIPMENTS',
    GroupRankAndQuantity: 'GROUP_RANK_AND_QUANTITY',
    Quantity: 'QUANTITY',
    Distance: 'DISTANCE'
} as const;
export type StrategyResponseModelCandidateSortStrategyEnum = typeof StrategyResponseModelCandidateSortStrategyEnum[keyof typeof StrategyResponseModelCandidateSortStrategyEnum];

/**
 * @export
 */
export const StrategyResponseModelOrderTypeEnum = {
    Directship: 'DIRECTSHIP',
    Transfer: 'TRANSFER',
    SthConsolidated: 'STH_CONSOLIDATED',
    Return: 'RETURN',
    Disposition: 'DISPOSITION',
    Delivery: 'DELIVERY',
    Bopis: 'BOPIS'
} as const;
export type StrategyResponseModelOrderTypeEnum = typeof StrategyResponseModelOrderTypeEnum[keyof typeof StrategyResponseModelOrderTypeEnum];

/**
 * 
 * @export
 * @interface SuggestionEvent
 */
export interface SuggestionEvent {
    /**
     * 
     * @type {number}
     * @memberof SuggestionEvent
     */
    causeID?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof SuggestionEvent
     */
    errors?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof SuggestionEvent
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof SuggestionEvent
     */
    type: SuggestionEventTypeEnum;
}


/**
 * @export
 */
export const SuggestionEventTypeEnum = {
    NewRequest: 'NEW_REQUEST',
    RouteSelected: 'ROUTE_SELECTED',
    MakeLocationsAvailable: 'MAKE_LOCATIONS_AVAILABLE',
    NoRouteFound: 'NO_ROUTE_FOUND',
    RemovedInactiveLocations: 'REMOVED_INACTIVE_LOCATIONS',
    RemovedOnHoldLocations: 'REMOVED_ON_HOLD_LOCATIONS',
    RemovedOverfulfilledLocations: 'REMOVED_OVERFULFILLED_LOCATIONS',
    Group: 'GROUP',
    GroupFilter: 'GROUP_FILTER',
    GroupSort: 'GROUP_SORT',
    Filter: 'FILTER',
    Sort: 'SORT',
    AfterAction: 'AFTER_ACTION',
    FoundFullOrderLocation: 'FOUND_FULL_ORDER_LOCATION',
    Response: 'RESPONSE',
    AfterActionSort: 'AFTER_ACTION_SORT',
    DefaultResponse: 'DEFAULT_RESPONSE',
    MaxSplitsExceeded: 'MAX_SPLITS_EXCEEDED',
    AutoAssignLimitExceeded: 'AUTO_ASSIGN_LIMIT_EXCEEDED',
    InventoryRequest: 'INVENTORY_REQUEST',
    RemovedInternationalLocations: 'REMOVED_INTERNATIONAL_LOCATIONS',
    SuggestionUpdated: 'SUGGESTION_UPDATED',
    NonExpressLocationsFiltered: 'NON_EXPRESS_LOCATIONS_FILTERED',
    SthConsolidatedInitiated: 'STH_CONSOLIDATED_INITIATED',
    SthConsolidatedNotUsed: 'STH_CONSOLIDATED_NOT_USED',
    SthConsolidatedUsed: 'STH_CONSOLIDATED_USED',
    FutureAtpInitiated: 'FUTURE_ATP_INITIATED',
    FutureAtpNotUsed: 'FUTURE_ATP_NOT_USED',
    FutureAtpUsed: 'FUTURE_ATP_USED',
    InventoryCallException: 'INVENTORY_CALL_EXCEPTION',
    SthConsolidationInvalidLocationOverride: 'STH_CONSOLIDATION_INVALID_LOCATION_OVERRIDE',
    SthConsolidationForceOverrideInitiated: 'STH_CONSOLIDATION_FORCE_OVERRIDE_INITIATED',
    NoSthConsolidationLocationFound: 'NO_STH_CONSOLIDATION_LOCATION_FOUND',
    SthConsolidationForceClosestValidLocationFound: 'STH_CONSOLIDATION_FORCE_CLOSEST_VALID_LOCATION_FOUND',
    SthConsolidationForceNoValidLocationsFound: 'STH_CONSOLIDATION_FORCE_NO_VALID_LOCATIONS_FOUND',
    SthConsolidationForceNoGeoLocationValuesFound: 'STH_CONSOLIDATION_FORCE_NO_GEO_LOCATION_VALUES_FOUND',
    SthConsolidationForceInvalidShippingAddressValues: 'STH_CONSOLIDATION_FORCE_INVALID_SHIPPING_ADDRESS_VALUES'
} as const;
export type SuggestionEventTypeEnum = typeof SuggestionEventTypeEnum[keyof typeof SuggestionEventTypeEnum];

/**
 * 
 * @export
 * @interface SuggestionLog
 */
export interface SuggestionLog {
    /**
     * 
     * @type {string}
     * @memberof SuggestionLog
     */
    created?: string;
    /**
     * 
     * @type {string}
     * @memberof SuggestionLog
     */
    creatorUsername?: string;
    /**
     * 
     * @type {number}
     * @memberof SuggestionLog
     */
    environmentID: number;
    /**
     * 
     * @type {Array<SuggestionEvent>}
     * @memberof SuggestionLog
     */
    events?: Array<SuggestionEvent>;
    /**
     * 
     * @type {string}
     * @memberof SuggestionLog
     */
    externalResponseID?: string;
    /**
     * 
     * @type {NewEddRequestSuggestionEvent}
     * @memberof SuggestionLog
     */
    fieldsForNewEddSuggestionRequest?: NewEddRequestSuggestionEvent;
    /**
     * 
     * @type {NewReverseLogisticsRequestSuggestionEvent}
     * @memberof SuggestionLog
     */
    fieldsForNewReturnsSuggestionRequest?: NewReverseLogisticsRequestSuggestionEvent;
    /**
     * 
     * @type {NewRequestSuggestionEvent}
     * @memberof SuggestionLog
     */
    fieldsForNewSuggestionRequest?: NewRequestSuggestionEvent;
    /**
     * 
     * @type {number}
     * @memberof SuggestionLog
     */
    orderID?: number;
    /**
     * 
     * @type {string}
     * @memberof SuggestionLog
     */
    orderTypeCategory?: SuggestionLogOrderTypeCategoryEnum;
    /**
     * 
     * @type {string}
     * @memberof SuggestionLog
     */
    pathString?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SuggestionLog
     */
    persisted?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SuggestionLog
     */
    returnID?: number;
    /**
     * 
     * @type {number}
     * @memberof SuggestionLog
     */
    siteID: number;
    /**
     * 
     * @type {number}
     * @memberof SuggestionLog
     */
    suggestionID?: number;
    /**
     * 
     * @type {number}
     * @memberof SuggestionLog
     */
    tenantID: number;
    /**
     * 
     * @type {string}
     * @memberof SuggestionLog
     */
    updated?: string;
    /**
     * 
     * @type {string}
     * @memberof SuggestionLog
     */
    updaterUsername?: string;
    /**
     * 
     * @type {UserContextInformation}
     * @memberof SuggestionLog
     */
    userContext?: UserContextInformation;
}


/**
 * @export
 */
export const SuggestionLogOrderTypeCategoryEnum = {
    Standard: 'STANDARD',
    ReverseLogistics: 'REVERSE_LOGISTICS',
    EstimatedDeliveryDate: 'ESTIMATED_DELIVERY_DATE',
    EddSuggestion: 'EDD_SUGGESTION'
} as const;
export type SuggestionLogOrderTypeCategoryEnum = typeof SuggestionLogOrderTypeCategoryEnum[keyof typeof SuggestionLogOrderTypeCategoryEnum];

/**
 * 
 * @export
 * @interface SuggestionRequest
 */
export interface SuggestionRequest {
    /**
     * 
     * @type {string}
     * @memberof SuggestionRequest
     */
    bundlingStrategy?: SuggestionRequestBundlingStrategyEnum;
    /**
     * 
     * @type {string}
     * @memberof SuggestionRequest
     */
    cartID?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof SuggestionRequest
     */
    customData?: { [key: string]: string; };
    /**
     * 
     * @type {number}
     * @memberof SuggestionRequest
     */
    environmentID?: number;
    /**
     * 
     * @type {Array<ExclusionListEntryLocationCode>}
     * @memberof SuggestionRequest
     */
    exclusionListLocationCode?: Array<ExclusionListEntryLocationCode>;
    /**
     * 
     * @type {ExtendedCustomerInfo}
     * @memberof SuggestionRequest
     */
    extendedCustomerInfo?: ExtendedCustomerInfo;
    /**
     * 
     * @type {ExtendedOrderInfo}
     * @memberof SuggestionRequest
     */
    extendedOrderInfo?: ExtendedOrderInfo;
    /**
     * 
     * @type {string}
     * @memberof SuggestionRequest
     */
    externalResponseID?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SuggestionRequest
     */
    forceSTHConsolidationOnSplitShipments?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SuggestionRequest
     */
    fraud?: number;
    /**
     * 
     * @type {string}
     * @memberof SuggestionRequest
     */
    futureDateLimit?: string;
    /**
     * 
     * @type {Array<ExclusionListEntryLocationCode>}
     * @memberof SuggestionRequest
     */
    futureExclusionListLocationCode?: Array<ExclusionListEntryLocationCode>;
    /**
     * 
     * @type {string}
     * @memberof SuggestionRequest
     */
    inventoryRequestType?: SuggestionRequestInventoryRequestTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof SuggestionRequest
     */
    isExpress?: boolean;
    /**
     * 
     * @type {Array<OrderRoutingOrderItem>}
     * @memberof SuggestionRequest
     */
    items: Array<OrderRoutingOrderItem>;
    /**
     * 
     * @type {Array<string>}
     * @memberof SuggestionRequest
     */
    locationCodeWhiteList?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof SuggestionRequest
     */
    numShipmentsNotInRequest?: number;
    /**
     * 
     * @type {number}
     * @memberof SuggestionRequest
     */
    orderID?: number;
    /**
     * 
     * @type {string}
     * @memberof SuggestionRequest
     */
    orderType: SuggestionRequestOrderTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SuggestionRequest
     */
    pickupLocationCode?: string;
    /**
     * 
     * @type {OrderRoutingShippingAddress}
     * @memberof SuggestionRequest
     */
    shippingAddress?: OrderRoutingShippingAddress;
    /**
     * 
     * @type {string}
     * @memberof SuggestionRequest
     */
    shippingMethod?: string;
    /**
     * 
     * @type {string}
     * @memberof SuggestionRequest
     */
    sort?: SuggestionRequestSortEnum;
    /**
     * 
     * @type {string}
     * @memberof SuggestionRequest
     */
    sthConsolidationLocationOverride?: string;
    /**
     * 
     * @type {string}
     * @memberof SuggestionRequest
     */
    strategyID?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof SuggestionRequest
     */
    tags?: { [key: string]: string; };
    /**
     * 
     * @type {number}
     * @memberof SuggestionRequest
     */
    total: number;
}


/**
 * @export
 */
export const SuggestionRequestBundlingStrategyEnum = {
    ItemDependency: 'ITEM_DEPENDENCY'
} as const;
export type SuggestionRequestBundlingStrategyEnum = typeof SuggestionRequestBundlingStrategyEnum[keyof typeof SuggestionRequestBundlingStrategyEnum];

/**
 * @export
 */
export const SuggestionRequestInventoryRequestTypeEnum = {
    All: 'ALL',
    Any: 'ANY',
    Partial: 'PARTIAL',
    AllStores: 'ALL_STORES'
} as const;
export type SuggestionRequestInventoryRequestTypeEnum = typeof SuggestionRequestInventoryRequestTypeEnum[keyof typeof SuggestionRequestInventoryRequestTypeEnum];

/**
 * @export
 */
export const SuggestionRequestOrderTypeEnum = {
    Directship: 'DIRECTSHIP',
    Transfer: 'TRANSFER',
    SthConsolidated: 'STH_CONSOLIDATED',
    Return: 'RETURN',
    Disposition: 'DISPOSITION',
    Delivery: 'DELIVERY',
    Bopis: 'BOPIS'
} as const;
export type SuggestionRequestOrderTypeEnum = typeof SuggestionRequestOrderTypeEnum[keyof typeof SuggestionRequestOrderTypeEnum];

/**
 * @export
 */
export const SuggestionRequestSortEnum = {
    SuggestionSort: 'SUGGESTION_SORT'
} as const;
export type SuggestionRequestSortEnum = typeof SuggestionRequestSortEnum[keyof typeof SuggestionRequestSortEnum];

/**
 * 
 * @export
 * @interface SuggestionResponse
 */
export interface SuggestionResponse {
    /**
     * 
     * @type {Array<AssignmentSuggestionShipmentGroup>}
     * @memberof SuggestionResponse
     */
    assignmentSuggestionShipmentGroups?: Array<AssignmentSuggestionShipmentGroup>;
    /**
     * 
     * @type {{ [key: string]: Array<AssignmentSuggestion>; }}
     * @memberof SuggestionResponse
     */
    assignmentSuggestions?: { [key: string]: Array<AssignmentSuggestion>; };
    /**
     * 
     * @type {Array<OrderRoutingOrderAttribute>}
     * @memberof SuggestionResponse
     */
    attributes?: Array<OrderRoutingOrderAttribute>;
    /**
     * 
     * @type {Array<number>}
     * @memberof SuggestionResponse
     */
    availableLocations?: Array<number>;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof SuggestionResponse
     */
    data?: { [key: string]: string; };
    /**
     * 
     * @type {boolean}
     * @memberof SuggestionResponse
     */
    emptyResponse?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SuggestionResponse
     */
    externalResponseID?: string;
    /**
     * 
     * @type {{ [key: string]: Array<AssignmentSuggestion>; }}
     * @memberof SuggestionResponse
     */
    futureAssignmentSuggestions?: { [key: string]: Array<AssignmentSuggestion>; };
    /**
     * 
     * @type {number}
     * @memberof SuggestionResponse
     */
    responseID?: number;
    /**
     * 
     * @type {string}
     * @memberof SuggestionResponse
     */
    route?: SuggestionResponseRouteEnum;
    /**
     * 
     * @type {{ [key: string]: StateChangeSuggestion; }}
     * @memberof SuggestionResponse
     */
    stateChangeSuggestions?: { [key: string]: StateChangeSuggestion; };
    /**
     * 
     * @type {SuggestionLog}
     * @memberof SuggestionResponse
     */
    suggestionLog?: SuggestionLog;
}


/**
 * @export
 */
export const SuggestionResponseRouteEnum = {
    Directship: 'DIRECTSHIP',
    Transfer: 'TRANSFER',
    SthConsolidated: 'STH_CONSOLIDATED',
    Return: 'RETURN',
    Disposition: 'DISPOSITION',
    Delivery: 'DELIVERY',
    Bopis: 'BOPIS'
} as const;
export type SuggestionResponseRouteEnum = typeof SuggestionResponseRouteEnum[keyof typeof SuggestionResponseRouteEnum];

/**
 * 
 * @export
 * @interface SuggestionTestRequest
 */
export interface SuggestionTestRequest {
    /**
     * 
     * @type {SuggestionRequest}
     * @memberof SuggestionTestRequest
     */
    suggestionRequest?: SuggestionRequest;
    /**
     * 
     * @type {Array<GetInventoryResponseItem>}
     * @memberof SuggestionTestRequest
     */
    testInventoryResponses?: Array<GetInventoryResponseItem>;
}
/**
 * 
 * @export
 * @interface TenantService
 */
export interface TenantService {
    /**
     * 
     * @type {object}
     * @memberof TenantService
     */
    tenantAttributesCache?: object;
    /**
     * 
     * @type {object}
     * @memberof TenantService
     */
    tenantClient?: object;
}
/**
 * 
 * @export
 * @interface UpdateDataListEntryRequest
 */
export interface UpdateDataListEntryRequest {
    /**
     * 
     * @type {number}
     * @memberof UpdateDataListEntryRequest
     */
    dataListEntryId?: number;
    /**
     * 
     * @type {string}
     * @memberof UpdateDataListEntryRequest
     */
    notes?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateDataListEntryRequest
     */
    value: string;
}
/**
 * 
 * @export
 * @interface UpdateDataListRequest
 */
export interface UpdateDataListRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateDataListRequest
     */
    dataType: UpdateDataListRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof UpdateDataListRequest
     */
    description?: string;
    /**
     * 
     * @type {Array<UpdateDataListEntryRequest>}
     * @memberof UpdateDataListRequest
     */
    entries?: Array<UpdateDataListEntryRequest>;
    /**
     * 
     * @type {string}
     * @memberof UpdateDataListRequest
     */
    name: string;
}


/**
 * @export
 */
export const UpdateDataListRequestDataTypeEnum = {
    String: 'STRING',
    Number: 'NUMBER',
    Location: 'LOCATION',
    Date: 'DATE'
} as const;
export type UpdateDataListRequestDataTypeEnum = typeof UpdateDataListRequestDataTypeEnum[keyof typeof UpdateDataListRequestDataTypeEnum];

/**
 * 
 * @export
 * @interface UpdateStrategyRequest
 */
export interface UpdateStrategyRequest {
    /**
     * 
     * @type {boolean}
     * @memberof UpdateStrategyRequest
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UpdateStrategyRequest
     */
    candidateSortStrategy?: UpdateStrategyRequestCandidateSortStrategyEnum;
    /**
     * 
     * @type {string}
     * @memberof UpdateStrategyRequest
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateStrategyRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateStrategyRequest
     */
    orderType: UpdateStrategyRequestOrderTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateStrategyRequest
     */
    preferAtomicAssignments: boolean;
    /**
     * 
     * @type {Array<ScenarioRankDto>}
     * @memberof UpdateStrategyRequest
     */
    scenarios?: Array<ScenarioRankDto>;
}


/**
 * @export
 */
export const UpdateStrategyRequestCandidateSortStrategyEnum = {
    MinimizeShipments: 'MINIMIZE_SHIPMENTS',
    GroupRankAndQuantity: 'GROUP_RANK_AND_QUANTITY',
    Quantity: 'QUANTITY',
    Distance: 'DISTANCE'
} as const;
export type UpdateStrategyRequestCandidateSortStrategyEnum = typeof UpdateStrategyRequestCandidateSortStrategyEnum[keyof typeof UpdateStrategyRequestCandidateSortStrategyEnum];

/**
 * @export
 */
export const UpdateStrategyRequestOrderTypeEnum = {
    Directship: 'DIRECTSHIP',
    Transfer: 'TRANSFER',
    SthConsolidated: 'STH_CONSOLIDATED',
    Return: 'RETURN',
    Disposition: 'DISPOSITION',
    Delivery: 'DELIVERY',
    Bopis: 'BOPIS'
} as const;
export type UpdateStrategyRequestOrderTypeEnum = typeof UpdateStrategyRequestOrderTypeEnum[keyof typeof UpdateStrategyRequestOrderTypeEnum];

/**
 * 
 * @export
 * @interface UpdateStrategyResponse
 */
export interface UpdateStrategyResponse {
    /**
     * 
     * @type {boolean}
     * @memberof UpdateStrategyResponse
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UpdateStrategyResponse
     */
    candidateSortStrategy?: UpdateStrategyResponseCandidateSortStrategyEnum;
    /**
     * 
     * @type {string}
     * @memberof UpdateStrategyResponse
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateStrategyResponse
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateStrategyResponse
     */
    orderType?: UpdateStrategyResponseOrderTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateStrategyResponse
     */
    preferAtomicAssignments?: boolean;
    /**
     * 
     * @type {Array<ScenarioRankDto>}
     * @memberof UpdateStrategyResponse
     */
    scenarios?: Array<ScenarioRankDto>;
    /**
     * 
     * @type {string}
     * @memberof UpdateStrategyResponse
     */
    strategyID?: string;
}


/**
 * @export
 */
export const UpdateStrategyResponseCandidateSortStrategyEnum = {
    MinimizeShipments: 'MINIMIZE_SHIPMENTS',
    GroupRankAndQuantity: 'GROUP_RANK_AND_QUANTITY',
    Quantity: 'QUANTITY',
    Distance: 'DISTANCE'
} as const;
export type UpdateStrategyResponseCandidateSortStrategyEnum = typeof UpdateStrategyResponseCandidateSortStrategyEnum[keyof typeof UpdateStrategyResponseCandidateSortStrategyEnum];

/**
 * @export
 */
export const UpdateStrategyResponseOrderTypeEnum = {
    Directship: 'DIRECTSHIP',
    Transfer: 'TRANSFER',
    SthConsolidated: 'STH_CONSOLIDATED',
    Return: 'RETURN',
    Disposition: 'DISPOSITION',
    Delivery: 'DELIVERY',
    Bopis: 'BOPIS'
} as const;
export type UpdateStrategyResponseOrderTypeEnum = typeof UpdateStrategyResponseOrderTypeEnum[keyof typeof UpdateStrategyResponseOrderTypeEnum];

/**
 * 
 * @export
 * @interface UpsertScenarioRequest
 */
export interface UpsertScenarioRequest {
    /**
     * 
     * @type {boolean}
     * @memberof UpsertScenarioRequest
     */
    active?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UpsertScenarioRequest
     */
    defaultGroup?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UpsertScenarioRequest
     */
    description?: string;
    /**
     * 
     * @type {Array<ScenarioFilterLogicalGroupUpsertRequest>}
     * @memberof UpsertScenarioRequest
     */
    filterLogicalGroups?: Array<ScenarioFilterLogicalGroupUpsertRequest>;
    /**
     * 
     * @type {Array<ScenarioFilterUpsertRequest>}
     * @memberof UpsertScenarioRequest
     */
    filters?: Array<ScenarioFilterUpsertRequest>;
    /**
     * 
     * @type {Array<string>}
     * @memberof UpsertScenarioRequest
     */
    locations?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof UpsertScenarioRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof UpsertScenarioRequest
     */
    noMatch?: UpsertScenarioRequestNoMatchEnum;
    /**
     * 
     * @type {string}
     * @memberof UpsertScenarioRequest
     */
    partialMatch?: UpsertScenarioRequestPartialMatchEnum;
    /**
     * 
     * @type {string}
     * @memberof UpsertScenarioRequest
     */
    primarySorting?: UpsertScenarioRequestPrimarySortingEnum;
    /**
     * 
     * @type {string}
     * @memberof UpsertScenarioRequest
     */
    restartAttemptForNoMatch?: UpsertScenarioRequestRestartAttemptForNoMatchEnum;
    /**
     * 
     * @type {string}
     * @memberof UpsertScenarioRequest
     */
    restartAttemptForPartialAssignment?: UpsertScenarioRequestRestartAttemptForPartialAssignmentEnum;
    /**
     * 
     * @type {number}
     * @memberof UpsertScenarioRequest
     */
    restartGroupIdForNoMatch?: number;
    /**
     * 
     * @type {number}
     * @memberof UpsertScenarioRequest
     */
    restartGroupIdForPartialAssignment?: number;
    /**
     * 
     * @type {string}
     * @memberof UpsertScenarioRequest
     */
    secondarySorting?: UpsertScenarioRequestSecondarySortingEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof UpsertScenarioRequest
     */
    unselectedLocations?: Array<string>;
}


/**
 * @export
 */
export const UpsertScenarioRequestNoMatchEnum = {
    LineItemSplitAssignIfFulfilled: 'LINE_ITEM_SPLIT_ASSIGN_IF_FULFILLED',
    LineItemSplitCancelWithoutInventory: 'LINE_ITEM_SPLIT_CANCEL_WITHOUT_INVENTORY',
    QuantitySplitAssignIfFulfilled: 'QUANTITY_SPLIT_ASSIGN_IF_FULFILLED',
    QuantitySplitCancelWithoutInventory: 'QUANTITY_SPLIT_CANCEL_WITHOUT_INVENTORY',
    CancelOrder: 'CANCEL_ORDER',
    AssignToCustomerCare: 'ASSIGN_TO_CUSTOMER_CARE',
    AssignToGroup: 'ASSIGN_TO_GROUP',
    LineItemSplitAssignCustomerCareWithoutInventory: 'LINE_ITEM_SPLIT_ASSIGN_CUSTOMER_CARE_WITHOUT_INVENTORY',
    QuantitySplitAssignCustomerCareWithoutInventory: 'QUANTITY_SPLIT_ASSIGN_CUSTOMER_CARE_WITHOUT_INVENTORY',
    SendOrderToBidding: 'SEND_ORDER_TO_BIDDING',
    LineItemSplitBackorderWithoutInventory: 'LINE_ITEM_SPLIT_BACKORDER_WITHOUT_INVENTORY',
    QuantitySplitBackorderWithoutInventory: 'QUANTITY_SPLIT_BACKORDER_WITHOUT_INVENTORY',
    AssignToBackorder: 'ASSIGN_TO_BACKORDER'
} as const;
export type UpsertScenarioRequestNoMatchEnum = typeof UpsertScenarioRequestNoMatchEnum[keyof typeof UpsertScenarioRequestNoMatchEnum];

/**
 * @export
 */
export const UpsertScenarioRequestPartialMatchEnum = {
    LineItemSplitAssignIfFulfilled: 'LINE_ITEM_SPLIT_ASSIGN_IF_FULFILLED',
    LineItemSplitCancelWithoutInventory: 'LINE_ITEM_SPLIT_CANCEL_WITHOUT_INVENTORY',
    QuantitySplitAssignIfFulfilled: 'QUANTITY_SPLIT_ASSIGN_IF_FULFILLED',
    QuantitySplitCancelWithoutInventory: 'QUANTITY_SPLIT_CANCEL_WITHOUT_INVENTORY',
    CancelOrder: 'CANCEL_ORDER',
    AssignToCustomerCare: 'ASSIGN_TO_CUSTOMER_CARE',
    AssignToGroup: 'ASSIGN_TO_GROUP',
    LineItemSplitAssignCustomerCareWithoutInventory: 'LINE_ITEM_SPLIT_ASSIGN_CUSTOMER_CARE_WITHOUT_INVENTORY',
    QuantitySplitAssignCustomerCareWithoutInventory: 'QUANTITY_SPLIT_ASSIGN_CUSTOMER_CARE_WITHOUT_INVENTORY',
    SendOrderToBidding: 'SEND_ORDER_TO_BIDDING',
    LineItemSplitBackorderWithoutInventory: 'LINE_ITEM_SPLIT_BACKORDER_WITHOUT_INVENTORY',
    QuantitySplitBackorderWithoutInventory: 'QUANTITY_SPLIT_BACKORDER_WITHOUT_INVENTORY',
    AssignToBackorder: 'ASSIGN_TO_BACKORDER'
} as const;
export type UpsertScenarioRequestPartialMatchEnum = typeof UpsertScenarioRequestPartialMatchEnum[keyof typeof UpsertScenarioRequestPartialMatchEnum];

/**
 * @export
 */
export const UpsertScenarioRequestPrimarySortingEnum = {
    Rank: 'RANK',
    Distance: 'DISTANCE',
    Ltd: 'LTD',
    Cost: 'COST',
    Random: 'RANDOM',
    DataSet: 'DATA_SET',
    LowestAvailable: 'LOWEST_AVAILABLE',
    HighestAvailable: 'HIGHEST_AVAILABLE',
    ExcessCount: 'EXCESS_COUNT',
    ExcessPercentage: 'EXCESS_PERCENTAGE'
} as const;
export type UpsertScenarioRequestPrimarySortingEnum = typeof UpsertScenarioRequestPrimarySortingEnum[keyof typeof UpsertScenarioRequestPrimarySortingEnum];

/**
 * @export
 */
export const UpsertScenarioRequestRestartAttemptForNoMatchEnum = {
    StartAtBeginning: 'START_AT_BEGINNING',
    CurrentGroup: 'CURRENT_GROUP',
    GroupRank: 'GROUP_RANK'
} as const;
export type UpsertScenarioRequestRestartAttemptForNoMatchEnum = typeof UpsertScenarioRequestRestartAttemptForNoMatchEnum[keyof typeof UpsertScenarioRequestRestartAttemptForNoMatchEnum];

/**
 * @export
 */
export const UpsertScenarioRequestRestartAttemptForPartialAssignmentEnum = {
    StartAtBeginning: 'START_AT_BEGINNING',
    CurrentGroup: 'CURRENT_GROUP',
    GroupRank: 'GROUP_RANK'
} as const;
export type UpsertScenarioRequestRestartAttemptForPartialAssignmentEnum = typeof UpsertScenarioRequestRestartAttemptForPartialAssignmentEnum[keyof typeof UpsertScenarioRequestRestartAttemptForPartialAssignmentEnum];

/**
 * @export
 */
export const UpsertScenarioRequestSecondarySortingEnum = {
    Rank: 'RANK',
    Distance: 'DISTANCE',
    Ltd: 'LTD',
    Cost: 'COST',
    Random: 'RANDOM',
    DataSet: 'DATA_SET',
    LowestAvailable: 'LOWEST_AVAILABLE',
    HighestAvailable: 'HIGHEST_AVAILABLE',
    ExcessCount: 'EXCESS_COUNT',
    ExcessPercentage: 'EXCESS_PERCENTAGE'
} as const;
export type UpsertScenarioRequestSecondarySortingEnum = typeof UpsertScenarioRequestSecondarySortingEnum[keyof typeof UpsertScenarioRequestSecondarySortingEnum];

/**
 * 
 * @export
 * @interface UserContextInformation
 */
export interface UserContextInformation {
    /**
     * 
     * @type {number}
     * @memberof UserContextInformation
     */
    environmentID?: number;
    /**
     * 
     * @type {boolean}
     * @memberof UserContextInformation
     */
    loaded?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserContextInformation
     */
    pathString?: string;
    /**
     * 
     * @type {number}
     * @memberof UserContextInformation
     */
    siteID?: number;
    /**
     * 
     * @type {object}
     * @memberof UserContextInformation
     */
    siteService?: object;
    /**
     * 
     * @type {number}
     * @memberof UserContextInformation
     */
    tenantID?: number;
    /**
     * 
     * @type {TenantService}
     * @memberof UserContextInformation
     */
    tenantService?: TenantService;
}
