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
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof APIErrorResponse
     */
    additionalInfo?: string;
}
/**
 * 
 * @export
 * @interface AbstractFilter
 */
export interface AbstractFilter {
    /**
     * 
     * @type {number}
     * @memberof AbstractFilter
     */
    tenantID: number;
    /**
     * 
     * @type {number}
     * @memberof AbstractFilter
     */
    siteID: number;
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
    created?: string;
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
    creatorUsername?: string;
    /**
     * 
     * @type {string}
     * @memberof AbstractFilter
     */
    updaterUsername?: string;
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
    filterID?: number;
    /**
     * 
     * @type {string}
     * @memberof AbstractFilter
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AbstractFilter
     */
    dotDelimitedPropertyName: string;
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
    booleanOperator: AbstractFilterBooleanOperatorEnum;
    /**
     * 
     * @type {string}
     * @memberof AbstractFilter
     */
    extensibleAttributeName?: string;
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
    extensibleAttributeType?: string;
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
    dataPointExtensibleAttributeFQN?: string;
    /**
     * 
     * @type {string}
     * @memberof AbstractFilter
     */
    dataPointExtensibleAttributeType?: string;
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
    extensibleFilter?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AbstractFilter
     */
    dataPointExtensibleFilter?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AbstractFilter
     */
    persisted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AbstractFilter
     */
    pathString?: string;
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
    Equal: 'filter.logic.equal',
    NotEqual: 'filter.logic.not.equal',
    In: 'filter.logic.in',
    NotIn: 'filter.logic.not.in',
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
     * @type {AbstractFilterFilterUnitStandardUnit}
     * @memberof AbstractFilterFilterUnit
     */
    standardUnit?: AbstractFilterFilterUnitStandardUnit;
    /**
     * 
     * @type {object}
     * @memberof AbstractFilterFilterUnit
     */
    dimension?: object;
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
 * @interface AddFilterToGroupsData
 */
export interface AddFilterToGroupsData {
    /**
     * 
     * @type {number}
     * @memberof AddFilterToGroupsData
     */
    filterID?: number;
    /**
     * 
     * @type {Set<number>}
     * @memberof AddFilterToGroupsData
     */
    groupIDs?: Set<number>;
}
/**
 * 
 * @export
 * @interface AjaxResponse
 */
export interface AjaxResponse {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof AjaxResponse
     */
    properties?: { [key: string]: object; };
    /**
     * 
     * @type {boolean}
     * @memberof AjaxResponse
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AjaxResponse
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof AjaxResponse
     */
    html?: string;
}
/**
 * 
 * @export
 * @interface AssignmentSuggestion
 */
export interface AssignmentSuggestion {
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
    locationID?: number;
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
    quantity?: number;
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
    shipmentGroup?: string;
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
    sthFulfillmentDate?: string;
    /**
     * 
     * @type {string}
     * @memberof AssignmentSuggestion
     */
    bopisFulfillmentDate?: string;
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
    bopisProcessingTimeHours?: number;
    /**
     * 
     * @type {number}
     * @memberof AssignmentSuggestion
     */
    sthProcessingTimeHours?: number;
    /**
     * 
     * @type {number}
     * @memberof AssignmentSuggestion
     */
    transferProcessingTimeHours?: number;
    /**
     * 
     * @type {number}
     * @memberof AssignmentSuggestion
     */
    receiveProcessingTimeHours?: number;
}


/**
 * @export
 */
export const AssignmentSuggestionRouteEnum = {
    Directship: 'DIRECTSHIP',
    Transfer: 'TRANSFER',
    SthConsolidated: 'STH_CONSOLIDATED'
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
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof AssignmentSuggestionShipmentGroup
     */
    data?: { [key: string]: string; };
}
/**
 * 
 * @export
 * @interface CandidateSortStrategyForm
 */
export interface CandidateSortStrategyForm {
    /**
     * 
     * @type {number}
     * @memberof CandidateSortStrategyForm
     */
    routeID?: number;
    /**
     * 
     * @type {string}
     * @memberof CandidateSortStrategyForm
     */
    candidateSortStrategy?: CandidateSortStrategyFormCandidateSortStrategyEnum;
    /**
     * 
     * @type {string}
     * @memberof CandidateSortStrategyForm
     */
    candidateSortStrategyLabel?: string;
}


/**
 * @export
 */
export const CandidateSortStrategyFormCandidateSortStrategyEnum = {
    MinimizeShipments: 'MINIMIZE_SHIPMENTS',
    GroupRankAndQuantity: 'GROUP_RANK_AND_QUANTITY',
    Quantity: 'QUANTITY',
    Distance: 'DISTANCE'
} as const;
export type CandidateSortStrategyFormCandidateSortStrategyEnum = typeof CandidateSortStrategyFormCandidateSortStrategyEnum[keyof typeof CandidateSortStrategyFormCandidateSortStrategyEnum];

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
    locationCode?: string;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestion
     */
    locationName?: string;
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
    state?: string;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestion
     */
    countryCode?: string;
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
    distance?: string;
    /**
     * 
     * @type {number}
     * @memberof CandidateSuggestion
     */
    latitude?: number;
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
    express?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CandidateSuggestion
     */
    pickup?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CandidateSuggestion
     */
    transferEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CandidateSuggestion
     */
    directShip?: boolean;
    /**
     * 
     * @type {Array<CandidateSuggestionInventory>}
     * @memberof CandidateSuggestion
     */
    inventory?: Array<CandidateSuggestionInventory>;
}
/**
 * 
 * @export
 * @interface CandidateSuggestionFutureInventory
 */
export interface CandidateSuggestionFutureInventory {
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
    available?: number;
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
    sthFulfillmentDate?: string;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestionFutureInventory
     */
    bopisFulfillmentDate?: string;
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
    bopisProcessingTimeHours?: number;
    /**
     * 
     * @type {number}
     * @memberof CandidateSuggestionFutureInventory
     */
    sthProcessingTimeHours?: number;
    /**
     * 
     * @type {number}
     * @memberof CandidateSuggestionFutureInventory
     */
    transferProcessingTimeHours?: number;
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
    upc?: string;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestionFutureInventory
     */
    sku?: string;
}
/**
 * 
 * @export
 * @interface CandidateSuggestionInventory
 */
export interface CandidateSuggestionInventory {
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
    available?: number;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestionInventory
     */
    sthFulfillmentDate?: string;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestionInventory
     */
    bopisFulfillmentDate?: string;
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
    bopisProcessingTimeHours?: number;
    /**
     * 
     * @type {number}
     * @memberof CandidateSuggestionInventory
     */
    sthProcessingTimeHours?: number;
    /**
     * 
     * @type {number}
     * @memberof CandidateSuggestionInventory
     */
    transferProcessingTimeHours?: number;
    /**
     * 
     * @type {number}
     * @memberof CandidateSuggestionInventory
     */
    receiveProcessingTimeHours?: number;
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
    upc?: string;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestionInventory
     */
    sku?: string;
}
/**
 * 
 * @export
 * @interface CandidateSuggestionsRequest
 */
export interface CandidateSuggestionsRequest {
    /**
     * 
     * @type {Array<OrderRoutingOrderItem>}
     * @memberof CandidateSuggestionsRequest
     */
    items: Array<OrderRoutingOrderItem>;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestionsRequest
     */
    orderType: CandidateSuggestionsRequestOrderTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof CandidateSuggestionsRequest
     */
    environmentID?: number;
    /**
     * 
     * @type {ShippingAddress}
     * @memberof CandidateSuggestionsRequest
     */
    shippingAddress?: ShippingAddress;
    /**
     * 
     * @type {boolean}
     * @memberof CandidateSuggestionsRequest
     */
    isExpress?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestionsRequest
     */
    pickupLocationCode?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CandidateSuggestionsRequest
     */
    locationCodeWhiteList?: Array<string>;
    /**
     * 
     * @type {Array<ExclusionListEntryLocationCode>}
     * @memberof CandidateSuggestionsRequest
     */
    exclusionListLocationCode?: Array<ExclusionListEntryLocationCode>;
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
     * @type {{ [key: string]: string; }}
     * @memberof CandidateSuggestionsRequest
     */
    tags?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestionsRequest
     */
    futureDateLimit?: string;
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
    sort?: CandidateSuggestionsRequestSortEnum;
}


/**
 * @export
 */
export const CandidateSuggestionsRequestOrderTypeEnum = {
    Directship: 'DIRECTSHIP',
    Transfer: 'TRANSFER',
    SthConsolidated: 'STH_CONSOLIDATED'
} as const;
export type CandidateSuggestionsRequestOrderTypeEnum = typeof CandidateSuggestionsRequestOrderTypeEnum[keyof typeof CandidateSuggestionsRequestOrderTypeEnum];

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
 * @interface ChangeActiveStatusRequestData
 */
export interface ChangeActiveStatusRequestData {
    /**
     * 
     * @type {boolean}
     * @memberof ChangeActiveStatusRequestData
     */
    active?: boolean;
    /**
     * 
     * @type {Array<number>}
     * @memberof ChangeActiveStatusRequestData
     */
    locationIDs?: Array<number>;
}
/**
 * 
 * @export
 * @interface ChangeHoldStatusRequestData
 */
export interface ChangeHoldStatusRequestData {
    /**
     * 
     * @type {number}
     * @memberof ChangeHoldStatusRequestData
     */
    groupID?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ChangeHoldStatusRequestData
     */
    onHold?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof ChangeHoldStatusRequestData
     */
    locationCodes?: Array<string>;
}
/**
 * 
 * @export
 * @interface ChangeLocationRankData
 */
export interface ChangeLocationRankData {
    /**
     * 
     * @type {number}
     * @memberof ChangeLocationRankData
     */
    groupID?: number;
    /**
     * 
     * @type {number}
     * @memberof ChangeLocationRankData
     */
    locationID?: number;
    /**
     * 
     * @type {string}
     * @memberof ChangeLocationRankData
     */
    locationCode?: string;
    /**
     * 
     * @type {number}
     * @memberof ChangeLocationRankData
     */
    rank?: number;
}
/**
 * 
 * @export
 * @interface CreateCriteriaSetRowForm
 */
export interface CreateCriteriaSetRowForm {
    /**
     * 
     * @type {number}
     * @memberof CreateCriteriaSetRowForm
     */
    locationID: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof CreateCriteriaSetRowForm
     */
    entries: { [key: string]: string; };
}
/**
 * 
 * @export
 * @interface CustomDataList
 */
export interface CustomDataList {
    /**
     * 
     * @type {number}
     * @memberof CustomDataList
     */
    tenantID: number;
    /**
     * 
     * @type {number}
     * @memberof CustomDataList
     */
    siteID: number;
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
    created?: string;
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
    creatorUsername?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataList
     */
    updaterUsername?: string;
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
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataList
     */
    dataType: CustomDataListDataTypeEnum;
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
    fileName?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataList
     */
    state?: CustomDataListStateEnum;
    /**
     * 
     * @type {Array<CustomDataListEntry>}
     * @memberof CustomDataList
     */
    entries?: Array<CustomDataListEntry>;
    /**
     * 
     * @type {Set<object>}
     * @memberof CustomDataList
     */
    values?: Set<object>;
    /**
     * 
     * @type {Set<string>}
     * @memberof CustomDataList
     */
    stringValues?: Set<string>;
    /**
     * 
     * @type {boolean}
     * @memberof CustomDataList
     */
    persisted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CustomDataList
     */
    pathString?: string;
    /**
     * 
     * @type {UserContextInformation}
     * @memberof CustomDataList
     */
    userContext?: UserContextInformation;
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
     * @type {CustomDataList}
     * @memberof CustomDataListEntry
     */
    list?: CustomDataList;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListEntry
     */
    stringValue: string;
    /**
     * 
     * @type {object}
     * @memberof CustomDataListEntry
     */
    data?: object;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListEntry
     */
    notes?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CustomDataListEntry
     */
    dataValid?: boolean;
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
    notes?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListEntryResponse
     */
    stringValue?: string;
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
    locationAddress?: string;
}
/**
 * 
 * @export
 * @interface CustomDataListFilter
 */
export interface CustomDataListFilter {
    /**
     * 
     * @type {number}
     * @memberof CustomDataListFilter
     */
    tenantID: number;
    /**
     * 
     * @type {number}
     * @memberof CustomDataListFilter
     */
    siteID: number;
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
    created?: string;
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
    creatorUsername?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListFilter
     */
    updaterUsername?: string;
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
    filterID?: number;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListFilter
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListFilter
     */
    dotDelimitedPropertyName: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListFilter
     */
    customAttributeName?: string;
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
    extensibleAttributeName?: string;
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
    extensibleAttributeType?: string;
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
    dataPointExtensibleAttributeFQN?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListFilter
     */
    dataPointExtensibleAttributeType?: string;
    /**
     * 
     * @type {AbstractFilterFilterUnit}
     * @memberof CustomDataListFilter
     */
    filterUnit?: AbstractFilterFilterUnit;
    /**
     * 
     * @type {number}
     * @memberof CustomDataListFilter
     */
    customDataListID?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CustomDataListFilter
     */
    extensibleFilter?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CustomDataListFilter
     */
    dataPointExtensibleFilter?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CustomDataListFilter
     */
    persisted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListFilter
     */
    pathString?: string;
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
    Equal: 'filter.logic.equal',
    NotEqual: 'filter.logic.not.equal',
    In: 'filter.logic.in',
    NotIn: 'filter.logic.not.in',
    Subset: 'filter.logic.subset'
} as const;
export type CustomDataListFilterBooleanOperatorEnum = typeof CustomDataListFilterBooleanOperatorEnum[keyof typeof CustomDataListFilterBooleanOperatorEnum];

/**
 * 
 * @export
 * @interface CustomDataListResponse
 */
export interface CustomDataListResponse {
    /**
     * 
     * @type {number}
     * @memberof CustomDataListResponse
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomDataListResponse
     */
    tenantID?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomDataListResponse
     */
    siteID?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomDataListResponse
     */
    environmentID?: number;
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
    updated?: string;
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
    updater?: string;
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
    dataType?: CustomDataListResponseDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListResponse
     */
    notes?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListResponse
     */
    state?: CustomDataListResponseStateEnum;
    /**
     * 
     * @type {Array<CustomDataListEntryResponse>}
     * @memberof CustomDataListResponse
     */
    entries?: Array<CustomDataListEntryResponse>;
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
 * @interface CustomDataValueFilter
 */
export interface CustomDataValueFilter {
    /**
     * 
     * @type {number}
     * @memberof CustomDataValueFilter
     */
    tenantID: number;
    /**
     * 
     * @type {number}
     * @memberof CustomDataValueFilter
     */
    siteID: number;
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
    created?: string;
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
    creatorUsername?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueFilter
     */
    updaterUsername?: string;
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
    filterID?: number;
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueFilter
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueFilter
     */
    dotDelimitedPropertyName: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueFilter
     */
    customAttributeName?: string;
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
    extensibleAttributeName?: string;
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
    extensibleAttributeType?: string;
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
    dataPointExtensibleAttributeFQN?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueFilter
     */
    dataPointExtensibleAttributeType?: string;
    /**
     * 
     * @type {AbstractFilterFilterUnit}
     * @memberof CustomDataValueFilter
     */
    filterUnit?: AbstractFilterFilterUnit;
    /**
     * 
     * @type {CustomDataValueObject}
     * @memberof CustomDataValueFilter
     */
    customDataValue?: CustomDataValueObject;
    /**
     * 
     * @type {boolean}
     * @memberof CustomDataValueFilter
     */
    extensibleFilter?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CustomDataValueFilter
     */
    dataPointExtensibleFilter?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CustomDataValueFilter
     */
    persisted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueFilter
     */
    pathString?: string;
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
    Equal: 'filter.logic.equal',
    NotEqual: 'filter.logic.not.equal',
    In: 'filter.logic.in',
    NotIn: 'filter.logic.not.in',
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
     * @type {number}
     * @memberof CustomDataValueObject
     */
    tenantID: number;
    /**
     * 
     * @type {number}
     * @memberof CustomDataValueObject
     */
    siteID: number;
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
    created?: string;
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
    creatorUsername?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueObject
     */
    updaterUsername?: string;
    /**
     * 
     * @type {number}
     * @memberof CustomDataValueObject
     */
    customDataValueID?: number;
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueObject
     */
    name: string;
    /**
     * 
     * @type {object}
     * @memberof CustomDataValueObject
     */
    value?: object;
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueObject
     */
    stringValue: string;
    /**
     * 
     * @type {boolean}
     * @memberof CustomDataValueObject
     */
    persisted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueObject
     */
    pathString?: string;
    /**
     * 
     * @type {UserContextInformation}
     * @memberof CustomDataValueObject
     */
    userContext?: UserContextInformation;
}
/**
 * 
 * @export
 * @interface DataDefinitionForm
 */
export interface DataDefinitionForm {
    /**
     * 
     * @type {number}
     * @memberof DataDefinitionForm
     */
    definitionID?: number;
    /**
     * 
     * @type {string}
     * @memberof DataDefinitionForm
     */
    columnName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof DataDefinitionForm
     */
    filterable?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DataDefinitionForm
     */
    sortable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DataDefinitionForm
     */
    unit?: string;
    /**
     * 
     * @type {object}
     * @memberof DataDefinitionForm
     */
    defaultValue?: object;
    /**
     * 
     * @type {string}
     * @memberof DataDefinitionForm
     */
    defaultValueString?: string;
}
/**
 * 
 * @export
 * @interface EditCriteriaSetRowForm
 */
export interface EditCriteriaSetRowForm {
    /**
     * 
     * @type {number}
     * @memberof EditCriteriaSetRowForm
     */
    locationID: number;
    /**
     * 
     * @type {number}
     * @memberof EditCriteriaSetRowForm
     */
    rowNumber: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof EditCriteriaSetRowForm
     */
    entries: { [key: string]: string; };
}
/**
 * 
 * @export
 * @interface EditCustomDataListForm
 */
export interface EditCustomDataListForm {
    /**
     * 
     * @type {string}
     * @memberof EditCustomDataListForm
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof EditCustomDataListForm
     */
    notes?: string;
}
/**
 * 
 * @export
 * @interface EditDataListEntryForm
 */
export interface EditDataListEntryForm {
    /**
     * 
     * @type {string}
     * @memberof EditDataListEntryForm
     */
    value: string;
    /**
     * 
     * @type {string}
     * @memberof EditDataListEntryForm
     */
    notes?: string;
}
/**
 * 
 * @export
 * @interface EditGroupDetailsForm
 */
export interface EditGroupDetailsForm {
    /**
     * 
     * @type {number}
     * @memberof EditGroupDetailsForm
     */
    groupID?: number;
    /**
     * 
     * @type {string}
     * @memberof EditGroupDetailsForm
     */
    groupName: string;
    /**
     * 
     * @type {string}
     * @memberof EditGroupDetailsForm
     */
    groupDescription?: string;
    /**
     * 
     * @type {number}
     * @memberof EditGroupDetailsForm
     */
    primarySortingMethod?: number;
    /**
     * 
     * @type {number}
     * @memberof EditGroupDetailsForm
     */
    secondarySortingMethod?: number;
    /**
     * 
     * @type {boolean}
     * @memberof EditGroupDetailsForm
     */
    defaultGroup?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EditGroupDetailsForm
     */
    useRetailerExclusionList?: boolean;
    /**
     * 
     * @type {number}
     * @memberof EditGroupDetailsForm
     */
    fulfillmentLimit?: number;
    /**
     * 
     * @type {string}
     * @memberof EditGroupDetailsForm
     */
    fulfillmentLimitType?: EditGroupDetailsFormFulfillmentLimitTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof EditGroupDetailsForm
     */
    fulfillmentDuration?: EditGroupDetailsFormFulfillmentDurationEnum;
}


/**
 * @export
 */
export const EditGroupDetailsFormFulfillmentLimitTypeEnum = {
    Orders: 'ORDERS',
    Items: 'ITEMS',
    Dollars: 'DOLLARS'
} as const;
export type EditGroupDetailsFormFulfillmentLimitTypeEnum = typeof EditGroupDetailsFormFulfillmentLimitTypeEnum[keyof typeof EditGroupDetailsFormFulfillmentLimitTypeEnum];

/**
 * @export
 */
export const EditGroupDetailsFormFulfillmentDurationEnum = {
    Hours: 'HOURS',
    Days: 'DAYS',
    Weeks: 'WEEKS',
    Months: 'MONTHS'
} as const;
export type EditGroupDetailsFormFulfillmentDurationEnum = typeof EditGroupDetailsFormFulfillmentDurationEnum[keyof typeof EditGroupDetailsFormFulfillmentDurationEnum];

/**
 * 
 * @export
 * @interface EditSetNameForm
 */
export interface EditSetNameForm {
    /**
     * 
     * @type {number}
     * @memberof EditSetNameForm
     */
    setId: number;
    /**
     * 
     * @type {string}
     * @memberof EditSetNameForm
     */
    setName: string;
}
/**
 * 
 * @export
 * @interface EnvironmentForm
 */
export interface EnvironmentForm {
    /**
     * 
     * @type {string}
     * @memberof EnvironmentForm
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof EnvironmentForm
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof EnvironmentForm
     */
    environmentID?: number;
    /**
     * 
     * @type {string}
     * @memberof EnvironmentForm
     */
    operation?: EnvironmentFormOperationEnum;
}


/**
 * @export
 */
export const EnvironmentFormOperationEnum = {
    Create: 'CREATE',
    Edit: 'EDIT',
    Copy: 'COPY'
} as const;
export type EnvironmentFormOperationEnum = typeof EnvironmentFormOperationEnum[keyof typeof EnvironmentFormOperationEnum];

/**
 * 
 * @export
 * @interface ExclusionListEntryLocationCode
 */
export interface ExclusionListEntryLocationCode {
    /**
     * 
     * @type {number}
     * @memberof ExclusionListEntryLocationCode
     */
    orderItemID?: number;
    /**
     * 
     * @type {string}
     * @memberof ExclusionListEntryLocationCode
     */
    locationCode?: string;
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
    customerId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ExtendedCustomerInfo
     */
    segments?: Array<string>;
    /**
     * 
     * @type {Array<OrderRoutingAttribute>}
     * @memberof ExtendedCustomerInfo
     */
    attributes?: Array<OrderRoutingAttribute>;
}
/**
 * 
 * @export
 * @interface ExtendedOrderInfo
 */
export interface ExtendedOrderInfo {
    /**
     * 
     * @type {string}
     * @memberof ExtendedOrderInfo
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof ExtendedOrderInfo
     */
    orderId?: string;
    /**
     * 
     * @type {Array<OrderRoutingAttribute>}
     * @memberof ExtendedOrderInfo
     */
    attributes?: Array<OrderRoutingAttribute>;
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
 * @interface FilterAttribute
 */
export interface FilterAttribute {
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
    langTag?: string;
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
    filterTypeGroup?: FilterAttributeFilterTypeGroupEnum;
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
    vocabularyListValues?: string;
}


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
    ExtensibleCustomerInfo: 'EXTENSIBLE_CUSTOMER_INFO'
} as const;
export type FilterAttributeFilterTypeGroupEnum = typeof FilterAttributeFilterTypeGroupEnum[keyof typeof FilterAttributeFilterTypeGroupEnum];

/**
 * 
 * @export
 * @interface FilterCustomItemDataFormFragment
 */
export interface FilterCustomItemDataFormFragment {
    /**
     * 
     * @type {string}
     * @memberof FilterCustomItemDataFormFragment
     */
    customAttributeName?: string;
}
/**
 * 
 * @export
 * @interface FilterCustomValueFormFragment
 */
export interface FilterCustomValueFormFragment {
    /**
     * 
     * @type {object}
     * @memberof FilterCustomValueFormFragment
     */
    customAttributeValue?: object;
    /**
     * 
     * @type {string}
     * @memberof FilterCustomValueFormFragment
     */
    customAttributeUnit?: string;
}
/**
 * 
 * @export
 * @interface FilterDataListFormFragment
 */
export interface FilterDataListFormFragment {
    /**
     * 
     * @type {number}
     * @memberof FilterDataListFormFragment
     */
    dataListId?: number;
    /**
     * 
     * @type {string}
     * @memberof FilterDataListFormFragment
     */
    unit?: string;
}
/**
 * 
 * @export
 * @interface FilterDataPointFormFragment
 */
export interface FilterDataPointFormFragment {
    /**
     * 
     * @type {string}
     * @memberof FilterDataPointFormFragment
     */
    dataPoint?: FilterDataPointFormFragmentDataPointEnum;
    /**
     * 
     * @type {string}
     * @memberof FilterDataPointFormFragment
     */
    extensibleDataPoint?: FilterDataPointFormFragmentExtensibleDataPointEnum;
}


/**
 * @export
 */
export const FilterDataPointFormFragmentDataPointEnum = {
    DistanceFromOrder: 'DISTANCE_FROM_ORDER',
    InventoryAttributes: 'INVENTORY_ATTRIBUTES',
    InventoryItemQuantity: 'INVENTORY_ITEM_QUANTITY',
    ItemCustomData: 'ITEM_CUSTOM_DATA',
    ItemPartnumber: 'ITEM_PARTNUMBER',
    ItemSku: 'ITEM_SKU',
    ItemUpc: 'ITEM_UPC',
    ItemBackorderable: 'ITEM_BACKORDERABLE',
    ProductTitle: 'PRODUCT_TITLE',
    ProductTaxable: 'PRODUCT_TAXABLE',
    ProductWeight: 'PRODUCT_WEIGHT',
    ProductLength: 'PRODUCT_LENGTH',
    ProductWidth: 'PRODUCT_WIDTH',
    ProductHeight: 'PRODUCT_HEIGHT',
    LocationCountryCode: 'LOCATION_COUNTRY_CODE',
    LocationItemVelocity: 'LOCATION_ITEM_VELOCITY',
    LocationName: 'LOCATION_NAME',
    LocationPostalCode: 'LOCATION_POSTAL_CODE',
    LocationRank: 'LOCATION_RANK',
    LocationState: 'LOCATION_STATE',
    LocationCity: 'LOCATION_CITY',
    LocationAddressType: 'LOCATION_ADDRESS_TYPE',
    LocationWms: 'LOCATION_WMS',
    LocationManifest: 'LOCATION_MANIFEST',
    OrderCountryCode: 'ORDER_COUNTRY_CODE',
    OrderCustomDataExpress: 'ORDER_CUSTOM_DATA_EXPRESS',
    OrderType: 'ORDER_TYPE',
    OrderItemPartNumber: 'ORDER_ITEM_PART_NUMBER',
    OrderItemQuantity: 'ORDER_ITEM_QUANTITY',
    OrderPickupLocationCode: 'ORDER_PICKUP_LOCATION_CODE',
    OrderPostalCode: 'ORDER_POSTAL_CODE',
    OrderState: 'ORDER_STATE',
    OrderTotal: 'ORDER_TOTAL',
    Unknown: 'UNKNOWN'
} as const;
export type FilterDataPointFormFragmentDataPointEnum = typeof FilterDataPointFormFragmentDataPointEnum[keyof typeof FilterDataPointFormFragmentDataPointEnum];

/**
 * @export
 */
export const FilterDataPointFormFragmentExtensibleDataPointEnum = {
    ExtensibleLocationAttribute: 'EXTENSIBLE_LOCATION_ATTRIBUTE',
    ExtensibleOrderAttribute: 'EXTENSIBLE_ORDER_ATTRIBUTE',
    ExtensibleProductAttribute: 'EXTENSIBLE_PRODUCT_ATTRIBUTE',
    ExtensibleCustomerAttribute: 'EXTENSIBLE_CUSTOMER_ATTRIBUTE',
    Unknown: 'UNKNOWN'
} as const;
export type FilterDataPointFormFragmentExtensibleDataPointEnum = typeof FilterDataPointFormFragmentExtensibleDataPointEnum[keyof typeof FilterDataPointFormFragmentExtensibleDataPointEnum];

/**
 * 
 * @export
 * @interface FilterDataSetFormFragment
 */
export interface FilterDataSetFormFragment {
    /**
     * 
     * @type {number}
     * @memberof FilterDataSetFormFragment
     */
    dataSetComparisonColumnID?: number;
    /**
     * 
     * @type {string}
     * @memberof FilterDataSetFormFragment
     */
    dataSetComparisonColumnUnit?: string;
    /**
     * 
     * @type {number}
     * @memberof FilterDataSetFormFragment
     */
    dataSetAuxComparisonColumnID?: number;
    /**
     * 
     * @type {string}
     * @memberof FilterDataSetFormFragment
     */
    dataSetAuxComparisonColumnUnit?: string;
}
/**
 * 
 * @export
 * @interface FilterForm
 */
export interface FilterForm {
    /**
     * 
     * @type {number}
     * @memberof FilterForm
     */
    existingFilterID?: number;
    /**
     * 
     * @type {string}
     * @memberof FilterForm
     */
    filterEditType?: FilterFormFilterEditTypeEnum;
    /**
     * 
     * @type {Array<number>}
     * @memberof FilterForm
     */
    selectedGroups?: Array<number>;
    /**
     * 
     * @type {boolean}
     * @memberof FilterForm
     */
    createFromGroupPage?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FilterForm
     */
    referer?: string;
    /**
     * 
     * @type {string}
     * @memberof FilterForm
     */
    filterName?: string;
    /**
     * 
     * @type {string}
     * @memberof FilterForm
     */
    filterType?: FilterFormFilterTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof FilterForm
     */
    filterAttributeType?: FilterFormFilterAttributeTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof FilterForm
     */
    extensibleFilterAttributeType?: FilterFormExtensibleFilterAttributeTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof FilterForm
     */
    dataPointExtensibleFilterAttributeType?: FilterFormDataPointExtensibleFilterAttributeTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof FilterForm
     */
    extensibleAttributeName?: string;
    /**
     * 
     * @type {string}
     * @memberof FilterForm
     */
    extensibleAttributeType?: string;
    /**
     * 
     * @type {string}
     * @memberof FilterForm
     */
    extensibleAttributeFQN?: string;
    /**
     * 
     * @type {string}
     * @memberof FilterForm
     */
    dataPointExtensibleAttributeName?: string;
    /**
     * 
     * @type {string}
     * @memberof FilterForm
     */
    dataPointExtensibleAttributeType?: string;
    /**
     * 
     * @type {string}
     * @memberof FilterForm
     */
    dataPointExtensibleAttributeFQN?: string;
    /**
     * 
     * @type {string}
     * @memberof FilterForm
     */
    filterAttribute?: string;
    /**
     * 
     * @type {string}
     * @memberof FilterForm
     */
    dataPointAttribute?: string;
    /**
     * 
     * @type {string}
     * @memberof FilterForm
     */
    filterLogicOperator?: FilterFormFilterLogicOperatorEnum;
    /**
     * 
     * @type {FilterCustomItemDataFormFragment}
     * @memberof FilterForm
     */
    filterCustomItemDataFormFragment?: FilterCustomItemDataFormFragment;
    /**
     * 
     * @type {FilterCustomValueFormFragment}
     * @memberof FilterForm
     */
    filterCustomValueFormFragment?: FilterCustomValueFormFragment;
    /**
     * 
     * @type {FilterDataPointFormFragment}
     * @memberof FilterForm
     */
    filterDataPointFormFragment?: FilterDataPointFormFragment;
    /**
     * 
     * @type {FilterDataSetFormFragment}
     * @memberof FilterForm
     */
    filterDataSetFormFragment?: FilterDataSetFormFragment;
    /**
     * 
     * @type {FilterDataListFormFragment}
     * @memberof FilterForm
     */
    filterDataListFormFragment?: FilterDataListFormFragment;
    /**
     * 
     * @type {boolean}
     * @memberof FilterForm
     */
    extensible?: boolean;
}


/**
 * @export
 */
export const FilterFormFilterEditTypeEnum = {
    Create: 'CREATE',
    Edit: 'EDIT',
    Copy: 'COPY'
} as const;
export type FilterFormFilterEditTypeEnum = typeof FilterFormFilterEditTypeEnum[keyof typeof FilterFormFilterEditTypeEnum];

/**
 * @export
 */
export const FilterFormFilterTypeEnum = {
    CustomValue: 'filter.type.customValue',
    CustomDataList: 'filter.type.customDataList',
    DataSet: 'filter.type.dataSet',
    DataPoint: 'filter.type.dataPoint'
} as const;
export type FilterFormFilterTypeEnum = typeof FilterFormFilterTypeEnum[keyof typeof FilterFormFilterTypeEnum];

/**
 * @export
 */
export const FilterFormFilterAttributeTypeEnum = {
    DistanceFromOrder: 'DISTANCE_FROM_ORDER',
    InventoryAttributes: 'INVENTORY_ATTRIBUTES',
    InventoryItemQuantity: 'INVENTORY_ITEM_QUANTITY',
    ItemCustomData: 'ITEM_CUSTOM_DATA',
    ItemPartnumber: 'ITEM_PARTNUMBER',
    ItemSku: 'ITEM_SKU',
    ItemUpc: 'ITEM_UPC',
    ItemBackorderable: 'ITEM_BACKORDERABLE',
    ProductTitle: 'PRODUCT_TITLE',
    ProductTaxable: 'PRODUCT_TAXABLE',
    ProductWeight: 'PRODUCT_WEIGHT',
    ProductLength: 'PRODUCT_LENGTH',
    ProductWidth: 'PRODUCT_WIDTH',
    ProductHeight: 'PRODUCT_HEIGHT',
    LocationCountryCode: 'LOCATION_COUNTRY_CODE',
    LocationItemVelocity: 'LOCATION_ITEM_VELOCITY',
    LocationName: 'LOCATION_NAME',
    LocationPostalCode: 'LOCATION_POSTAL_CODE',
    LocationRank: 'LOCATION_RANK',
    LocationState: 'LOCATION_STATE',
    LocationCity: 'LOCATION_CITY',
    LocationAddressType: 'LOCATION_ADDRESS_TYPE',
    LocationWms: 'LOCATION_WMS',
    LocationManifest: 'LOCATION_MANIFEST',
    OrderCountryCode: 'ORDER_COUNTRY_CODE',
    OrderCustomDataExpress: 'ORDER_CUSTOM_DATA_EXPRESS',
    OrderType: 'ORDER_TYPE',
    OrderItemPartNumber: 'ORDER_ITEM_PART_NUMBER',
    OrderItemQuantity: 'ORDER_ITEM_QUANTITY',
    OrderPickupLocationCode: 'ORDER_PICKUP_LOCATION_CODE',
    OrderPostalCode: 'ORDER_POSTAL_CODE',
    OrderState: 'ORDER_STATE',
    OrderTotal: 'ORDER_TOTAL',
    Unknown: 'UNKNOWN'
} as const;
export type FilterFormFilterAttributeTypeEnum = typeof FilterFormFilterAttributeTypeEnum[keyof typeof FilterFormFilterAttributeTypeEnum];

/**
 * @export
 */
export const FilterFormExtensibleFilterAttributeTypeEnum = {
    ExtensibleLocationAttribute: 'EXTENSIBLE_LOCATION_ATTRIBUTE',
    ExtensibleOrderAttribute: 'EXTENSIBLE_ORDER_ATTRIBUTE',
    ExtensibleProductAttribute: 'EXTENSIBLE_PRODUCT_ATTRIBUTE',
    ExtensibleCustomerAttribute: 'EXTENSIBLE_CUSTOMER_ATTRIBUTE',
    Unknown: 'UNKNOWN'
} as const;
export type FilterFormExtensibleFilterAttributeTypeEnum = typeof FilterFormExtensibleFilterAttributeTypeEnum[keyof typeof FilterFormExtensibleFilterAttributeTypeEnum];

/**
 * @export
 */
export const FilterFormDataPointExtensibleFilterAttributeTypeEnum = {
    ExtensibleLocationAttribute: 'EXTENSIBLE_LOCATION_ATTRIBUTE',
    ExtensibleOrderAttribute: 'EXTENSIBLE_ORDER_ATTRIBUTE',
    ExtensibleProductAttribute: 'EXTENSIBLE_PRODUCT_ATTRIBUTE',
    ExtensibleCustomerAttribute: 'EXTENSIBLE_CUSTOMER_ATTRIBUTE',
    Unknown: 'UNKNOWN'
} as const;
export type FilterFormDataPointExtensibleFilterAttributeTypeEnum = typeof FilterFormDataPointExtensibleFilterAttributeTypeEnum[keyof typeof FilterFormDataPointExtensibleFilterAttributeTypeEnum];

/**
 * @export
 */
export const FilterFormFilterLogicOperatorEnum = {
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
    Equal: 'filter.logic.equal',
    NotEqual: 'filter.logic.not.equal',
    In: 'filter.logic.in',
    NotIn: 'filter.logic.not.in',
    Subset: 'filter.logic.subset'
} as const;
export type FilterFormFilterLogicOperatorEnum = typeof FilterFormFilterLogicOperatorEnum[keyof typeof FilterFormFilterLogicOperatorEnum];

/**
 * 
 * @export
 * @interface FulfillmentLimit
 */
export interface FulfillmentLimit {
    /**
     * 
     * @type {number}
     * @memberof FulfillmentLimit
     */
    tenantID: number;
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
    environmentID: number;
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
    updated?: string;
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
    updaterUsername?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentLimit
     */
    fulfillmentLimitID?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentLimit
     */
    fulfillmentLimit: number;
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
    durationType: FulfillmentLimitDurationTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentLimit
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentLimit
     */
    persisted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentLimit
     */
    pathString?: string;
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
export const FulfillmentLimitFulfillmentTypeEnum = {
    Orders: 'ORDERS',
    Items: 'ITEMS',
    Dollars: 'DOLLARS'
} as const;
export type FulfillmentLimitFulfillmentTypeEnum = typeof FulfillmentLimitFulfillmentTypeEnum[keyof typeof FulfillmentLimitFulfillmentTypeEnum];

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
 * 
 * @export
 * @interface GetInventoryResponseItem
 */
export interface GetInventoryResponseItem {
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
    locationCode?: string;
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
    tenantID?: number;
    /**
     * 
     * @type {number}
     * @memberof GetInventoryResponseItem
     */
    onHand?: number;
    /**
     * 
     * @type {number}
     * @memberof GetInventoryResponseItem
     */
    available?: number;
    /**
     * 
     * @type {number}
     * @memberof GetInventoryResponseItem
     */
    allocated?: number;
    /**
     * 
     * @type {number}
     * @memberof GetInventoryResponseItem
     */
    pending?: number;
    /**
     * 
     * @type {string}
     * @memberof GetInventoryResponseItem
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof GetInventoryResponseItem
     */
    upc?: string;
    /**
     * 
     * @type {string}
     * @memberof GetInventoryResponseItem
     */
    sku?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GetInventoryResponseItem
     */
    blockAssignment?: boolean;
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
    floor?: number;
    /**
     * 
     * @type {number}
     * @memberof GetInventoryResponseItem
     */
    safetyStock?: number;
    /**
     * 
     * @type {number}
     * @memberof GetInventoryResponseItem
     */
    distance?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetInventoryResponseItem
     */
    directShip?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GetInventoryResponseItem
     */
    transferEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GetInventoryResponseItem
     */
    pickup?: boolean;
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
     * @type {number}
     * @memberof GetInventoryResponseItem
     */
    retailPrice?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetInventoryResponseItem
     */
    attributes?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof GetInventoryResponseItem
     */
    inventoryLocatorName?: string;
    /**
     * 
     * @type {Array<OrderRoutingTagQuantity>}
     * @memberof GetInventoryResponseItem
     */
    taggedInventory?: Array<OrderRoutingTagQuantity>;
    /**
     * 
     * @type {Array<OrderRoutingFutureInventory>}
     * @memberof GetInventoryResponseItem
     */
    futureInventory?: Array<OrderRoutingFutureInventory>;
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
    lotCode?: string;
    /**
     * 
     * @type {string}
     * @memberof GetInventoryResponseItem
     */
    date?: string;
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
    bopisProcessingTimeHours?: number;
    /**
     * 
     * @type {number}
     * @memberof GetInventoryResponseItem
     */
    sthProcessingTimeHours?: number;
    /**
     * 
     * @type {number}
     * @memberof GetInventoryResponseItem
     */
    transferProcessingTimeHours?: number;
    /**
     * 
     * @type {number}
     * @memberof GetInventoryResponseItem
     */
    receiveProcessingTimeHours?: number;
    /**
     * 
     * @type {string}
     * @memberof GetInventoryResponseItem
     */
    sthFulfillmentDate?: string;
    /**
     * 
     * @type {string}
     * @memberof GetInventoryResponseItem
     */
    bopisFulfillmentDate?: string;
    /**
     * 
     * @type {string}
     * @memberof GetInventoryResponseItem
     */
    transferFulfillmentDate?: string;
}
/**
 * 
 * @export
 * @interface GrantedAuthority
 */
export interface GrantedAuthority {
    /**
     * 
     * @type {string}
     * @memberof GrantedAuthority
     */
    authority?: string;
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
    tenantID: number;
    /**
     * 
     * @type {number}
     * @memberof GroupAfterAction
     */
    siteID: number;
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
    created?: string;
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
    creatorUsername?: string;
    /**
     * 
     * @type {string}
     * @memberof GroupAfterAction
     */
    updaterUsername?: string;
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
    actionID?: number;
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
    failoverAction?: GroupAfterActionFailoverActionEnum;
    /**
     * 
     * @type {string}
     * @memberof GroupAfterAction
     */
    restartAttempt?: GroupAfterActionRestartAttemptEnum;
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
    pathString?: string;
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
 * @interface GroupFiltersData
 */
export interface GroupFiltersData {
    /**
     * 
     * @type {number}
     * @memberof GroupFiltersData
     */
    groupID?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof GroupFiltersData
     */
    selectedFilters?: Array<number>;
}
/**
 * 
 * @export
 * @interface GroupSessionAttributes
 */
export interface GroupSessionAttributes {
    /**
     * 
     * @type {string}
     * @memberof GroupSessionAttributes
     */
    operation?: GroupSessionAttributesOperationEnum;
    /**
     * 
     * @type {Array<number>}
     * @memberof GroupSessionAttributes
     */
    groupIDs?: Array<number>;
}


/**
 * @export
 */
export const GroupSessionAttributesOperationEnum = {
    Create: 'CREATE',
    Edit: 'EDIT',
    Copy: 'COPY'
} as const;
export type GroupSessionAttributesOperationEnum = typeof GroupSessionAttributesOperationEnum[keyof typeof GroupSessionAttributesOperationEnum];

/**
 * 
 * @export
 * @interface LocationCriteriaSet
 */
export interface LocationCriteriaSet {
    /**
     * 
     * @type {number}
     * @memberof LocationCriteriaSet
     */
    tenantID: number;
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
    environmentID: number;
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
    updated?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSet
     */
    creatorUsername?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSet
     */
    updaterUsername?: string;
    /**
     * 
     * @type {SetMultimapIntegerLocationCriteriaSetRow}
     * @memberof LocationCriteriaSet
     */
    locationCriteriaSetMap?: SetMultimapIntegerLocationCriteriaSetRow;
    /**
     * 
     * @type {number}
     * @memberof LocationCriteriaSet
     */
    locationCriteriaSetID?: number;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSet
     */
    fileName: string;
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
    readyState?: LocationCriteriaSetReadyStateEnum;
    /**
     * 
     * @type {SetMultimapIntegerLocationCriteriaSetRow}
     * @memberof LocationCriteriaSet
     */
    locationCriteriaSetRows?: SetMultimapIntegerLocationCriteriaSetRow;
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
    pathString?: string;
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
     * @type {number}
     * @memberof LocationCriteriaSetDataDefinition
     */
    tenantID: number;
    /**
     * 
     * @type {number}
     * @memberof LocationCriteriaSetDataDefinition
     */
    siteID: number;
    /**
     * 
     * @type {number}
     * @memberof LocationCriteriaSetDataDefinition
     */
    environmentID: number;
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
    updated?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSetDataDefinition
     */
    creatorUsername?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSetDataDefinition
     */
    updaterUsername?: string;
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
    columnName: string;
    /**
     * 
     * @type {boolean}
     * @memberof LocationCriteriaSetDataDefinition
     */
    filterable?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LocationCriteriaSetDataDefinition
     */
    sortable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSetDataDefinition
     */
    unitType?: LocationCriteriaSetDataDefinitionUnitTypeEnum;
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
    defaultValue?: string;
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
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LocationCriteriaSetDataDefinition
     */
    persisted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSetDataDefinition
     */
    pathString?: string;
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
     * @type {number}
     * @memberof LocationCriteriaSetFilter
     */
    tenantID: number;
    /**
     * 
     * @type {number}
     * @memberof LocationCriteriaSetFilter
     */
    siteID: number;
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
    created?: string;
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
    creatorUsername?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSetFilter
     */
    updaterUsername?: string;
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
    filterID?: number;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSetFilter
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSetFilter
     */
    dotDelimitedPropertyName: string;
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
    booleanOperator: LocationCriteriaSetFilterBooleanOperatorEnum;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSetFilter
     */
    extensibleAttributeName?: string;
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
    extensibleAttributeType?: string;
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
    dataPointExtensibleAttributeFQN?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSetFilter
     */
    dataPointExtensibleAttributeType?: string;
    /**
     * 
     * @type {AbstractFilterFilterUnit}
     * @memberof LocationCriteriaSetFilter
     */
    filterUnit?: AbstractFilterFilterUnit;
    /**
     * 
     * @type {Array<LocationCriteriaSetDataDefinition>}
     * @memberof LocationCriteriaSetFilter
     */
    definitions?: Array<LocationCriteriaSetDataDefinition>;
    /**
     * 
     * @type {LocationCriteriaSet}
     * @memberof LocationCriteriaSetFilter
     */
    locationCriteriaSet?: LocationCriteriaSet;
    /**
     * 
     * @type {boolean}
     * @memberof LocationCriteriaSetFilter
     */
    acceptNulls?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LocationCriteriaSetFilter
     */
    extensibleFilter?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LocationCriteriaSetFilter
     */
    dataPointExtensibleFilter?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LocationCriteriaSetFilter
     */
    persisted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSetFilter
     */
    pathString?: string;
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
    Equal: 'filter.logic.equal',
    NotEqual: 'filter.logic.not.equal',
    In: 'filter.logic.in',
    NotIn: 'filter.logic.not.in',
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
     * @type {number}
     * @memberof LocationGroupModel
     */
    tenantID: number;
    /**
     * 
     * @type {number}
     * @memberof LocationGroupModel
     */
    siteID: number;
    /**
     * 
     * @type {number}
     * @memberof LocationGroupModel
     */
    environmentID: number;
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
    updated?: string;
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
    updaterUsername?: string;
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
    groupID?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationGroupModel
     */
    routeID: number;
    /**
     * 
     * @type {string}
     * @memberof LocationGroupModel
     */
    name: string;
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
     * @type {boolean}
     * @memberof LocationGroupModel
     */
    isDefaultGroup?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LocationGroupModel
     */
    useRetailerExclusionList?: boolean;
    /**
     * 
     * @type {Array<LocationSort>}
     * @memberof LocationGroupModel
     */
    sorts?: Array<LocationSort>;
    /**
     * 
     * @type {Set<AbstractFilter>}
     * @memberof LocationGroupModel
     */
    filters?: Set<AbstractFilter>;
    /**
     * 
     * @type {Array<number>}
     * @memberof LocationGroupModel
     */
    excludedLocationsFromDefaultGroup?: Array<number>;
    /**
     * 
     * @type {GroupAfterAction}
     * @memberof LocationGroupModel
     */
    afterActionPartial?: GroupAfterAction;
    /**
     * 
     * @type {GroupAfterAction}
     * @memberof LocationGroupModel
     */
    afterActionNone?: GroupAfterAction;
    /**
     * 
     * @type {string}
     * @memberof LocationGroupModel
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LocationGroupModel
     */
    active: boolean;
    /**
     * 
     * @type {FulfillmentLimit}
     * @memberof LocationGroupModel
     */
    fulfillmentLimit?: FulfillmentLimit;
    /**
     * 
     * @type {Array<number>}
     * @memberof LocationGroupModel
     */
    locationIDs?: Array<number>;
    /**
     * 
     * @type {boolean}
     * @memberof LocationGroupModel
     */
    persisted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LocationGroupModel
     */
    pathString?: string;
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
    totalResults?: number;
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
}
/**
 * 
 * @export
 * @interface LocationResponseModel
 */
export interface LocationResponseModel {
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
    locationCode?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationResponseModel
     */
    locationName?: string;
    /**
     * 
     * @type {number}
     * @memberof LocationResponseModel
     */
    tenantID?: number;
    /**
     * 
     * @type {boolean}
     * @memberof LocationResponseModel
     */
    express?: boolean;
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
    postalCode?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationResponseModel
     */
    countryCode?: string;
    /**
     * 
     * @type {number}
     * @memberof LocationResponseModel
     */
    latitude?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationResponseModel
     */
    longitude?: number;
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
    transferEnabled?: boolean;
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
    created?: string;
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
    stateOrProvince?: string;
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
    addressType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LocationResponseModel
     */
    wmsEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LocationResponseModel
     */
    requiresManifest?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof LocationResponseModel
     */
    locationTypes?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof LocationResponseModel
     */
    timezone?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationResponseModel
     */
    mondayHours?: string;
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
    wednesdayHours?: string;
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
    fridayHours?: string;
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
    sundayHours?: string;
}
/**
 * 
 * @export
 * @interface LocationSort
 */
export interface LocationSort {
    /**
     * 
     * @type {number}
     * @memberof LocationSort
     */
    tenantID: number;
    /**
     * 
     * @type {number}
     * @memberof LocationSort
     */
    siteID: number;
    /**
     * 
     * @type {number}
     * @memberof LocationSort
     */
    environmentID: number;
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
    updated?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationSort
     */
    creatorUsername?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationSort
     */
    updaterUsername?: string;
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
    locationSortID?: number;
    /**
     * 
     * @type {boolean}
     * @memberof LocationSort
     */
    descending?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LocationSort
     */
    sortingType: LocationSortSortingTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof LocationSort
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LocationSort
     */
    persisted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LocationSort
     */
    pathString?: string;
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
    DataSet: 'DATA_SET'
} as const;
export type LocationSortSortingTypeEnum = typeof LocationSortSortingTypeEnum[keyof typeof LocationSortSortingTypeEnum];

/**
 * 
 * @export
 * @interface LocationsData
 */
export interface LocationsData {
    /**
     * 
     * @type {boolean}
     * @memberof LocationsData
     */
    actionString?: boolean;
    /**
     * 
     * @type {Array<number>}
     * @memberof LocationsData
     */
    groupIDs?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof LocationsData
     */
    locationIDs?: Array<number>;
}
/**
 * 
 * @export
 * @interface ModelAndView
 */
export interface ModelAndView {
    /**
     * 
     * @type {OrderRoutingView}
     * @memberof ModelAndView
     */
    view?: OrderRoutingView;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof ModelAndView
     */
    model?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof ModelAndView
     */
    status?: ModelAndViewStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof ModelAndView
     */
    viewName?: string;
    /**
     * 
     * @type {ModelAndViewModelMap}
     * @memberof ModelAndView
     */
    modelMap?: ModelAndViewModelMap;
    /**
     * 
     * @type {boolean}
     * @memberof ModelAndView
     */
    reference?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ModelAndView
     */
    empty?: boolean;
}


/**
 * @export
 */
export const ModelAndViewStatusEnum = {
    _100Continue: '100 CONTINUE',
    _101SwitchingProtocols: '101 SWITCHING_PROTOCOLS',
    _102Processing: '102 PROCESSING',
    _103Checkpoint: '103 CHECKPOINT',
    _200Ok: '200 OK',
    _201Created: '201 CREATED',
    _202Accepted: '202 ACCEPTED',
    _203NonAuthoritativeInformation: '203 NON_AUTHORITATIVE_INFORMATION',
    _204NoContent: '204 NO_CONTENT',
    _205ResetContent: '205 RESET_CONTENT',
    _206PartialContent: '206 PARTIAL_CONTENT',
    _207MultiStatus: '207 MULTI_STATUS',
    _208AlreadyReported: '208 ALREADY_REPORTED',
    _226ImUsed: '226 IM_USED',
    _300MultipleChoices: '300 MULTIPLE_CHOICES',
    _301MovedPermanently: '301 MOVED_PERMANENTLY',
    _302Found: '302 FOUND',
    _302MovedTemporarily: '302 MOVED_TEMPORARILY',
    _303SeeOther: '303 SEE_OTHER',
    _304NotModified: '304 NOT_MODIFIED',
    _305UseProxy: '305 USE_PROXY',
    _307TemporaryRedirect: '307 TEMPORARY_REDIRECT',
    _308PermanentRedirect: '308 PERMANENT_REDIRECT',
    _400BadRequest: '400 BAD_REQUEST',
    _401Unauthorized: '401 UNAUTHORIZED',
    _402PaymentRequired: '402 PAYMENT_REQUIRED',
    _403Forbidden: '403 FORBIDDEN',
    _404NotFound: '404 NOT_FOUND',
    _405MethodNotAllowed: '405 METHOD_NOT_ALLOWED',
    _406NotAcceptable: '406 NOT_ACCEPTABLE',
    _407ProxyAuthenticationRequired: '407 PROXY_AUTHENTICATION_REQUIRED',
    _408RequestTimeout: '408 REQUEST_TIMEOUT',
    _409Conflict: '409 CONFLICT',
    _410Gone: '410 GONE',
    _411LengthRequired: '411 LENGTH_REQUIRED',
    _412PreconditionFailed: '412 PRECONDITION_FAILED',
    _413PayloadTooLarge: '413 PAYLOAD_TOO_LARGE',
    _413RequestEntityTooLarge: '413 REQUEST_ENTITY_TOO_LARGE',
    _414UriTooLong: '414 URI_TOO_LONG',
    _414RequestUriTooLong: '414 REQUEST_URI_TOO_LONG',
    _415UnsupportedMediaType: '415 UNSUPPORTED_MEDIA_TYPE',
    _416RequestedRangeNotSatisfiable: '416 REQUESTED_RANGE_NOT_SATISFIABLE',
    _417ExpectationFailed: '417 EXPECTATION_FAILED',
    _418IAmATeapot: '418 I_AM_A_TEAPOT',
    _419InsufficientSpaceOnResource: '419 INSUFFICIENT_SPACE_ON_RESOURCE',
    _420MethodFailure: '420 METHOD_FAILURE',
    _421DestinationLocked: '421 DESTINATION_LOCKED',
    _422UnprocessableEntity: '422 UNPROCESSABLE_ENTITY',
    _423Locked: '423 LOCKED',
    _424FailedDependency: '424 FAILED_DEPENDENCY',
    _425TooEarly: '425 TOO_EARLY',
    _426UpgradeRequired: '426 UPGRADE_REQUIRED',
    _428PreconditionRequired: '428 PRECONDITION_REQUIRED',
    _429TooManyRequests: '429 TOO_MANY_REQUESTS',
    _431RequestHeaderFieldsTooLarge: '431 REQUEST_HEADER_FIELDS_TOO_LARGE',
    _451UnavailableForLegalReasons: '451 UNAVAILABLE_FOR_LEGAL_REASONS',
    _500InternalServerError: '500 INTERNAL_SERVER_ERROR',
    _501NotImplemented: '501 NOT_IMPLEMENTED',
    _502BadGateway: '502 BAD_GATEWAY',
    _503ServiceUnavailable: '503 SERVICE_UNAVAILABLE',
    _504GatewayTimeout: '504 GATEWAY_TIMEOUT',
    _505HttpVersionNotSupported: '505 HTTP_VERSION_NOT_SUPPORTED',
    _506VariantAlsoNegotiates: '506 VARIANT_ALSO_NEGOTIATES',
    _507InsufficientStorage: '507 INSUFFICIENT_STORAGE',
    _508LoopDetected: '508 LOOP_DETECTED',
    _509BandwidthLimitExceeded: '509 BANDWIDTH_LIMIT_EXCEEDED',
    _510NotExtended: '510 NOT_EXTENDED',
    _511NetworkAuthenticationRequired: '511 NETWORK_AUTHENTICATION_REQUIRED'
} as const;
export type ModelAndViewStatusEnum = typeof ModelAndViewStatusEnum[keyof typeof ModelAndViewStatusEnum];

/**
 * 
 * @export
 * @interface ModelAndViewModelMap
 */
export interface ModelAndViewModelMap {
    [key: string]: object | any;
    /**
     * 
     * @type {boolean}
     * @memberof ModelAndViewModelMap
     */
    empty?: boolean;
}
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
    futureInventoryID?: number;
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
    onhand?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingFutureInventory
     */
    available?: number;
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
    pending?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingFutureInventory
     */
    type?: string;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingFutureInventory
     */
    bopisProcessingTimeHours?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingFutureInventory
     */
    sthProcessingTimeHours?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingFutureInventory
     */
    transferProcessingTimeHours?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingFutureInventory
     */
    receiveProcessingTimeHours?: number;
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
    createDate?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingFutureInventory
     */
    sthFulfillmentDate?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingFutureInventory
     */
    bopisFulfillmentDate?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingFutureInventory
     */
    transferFulfillmentDate?: string;
}
/**
 * 
 * @export
 * @interface OrderRoutingLink
 */
export interface OrderRoutingLink {
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingLink
     */
    href?: string;
    /**
     * 
     * @type {boolean}
     * @memberof OrderRoutingLink
     */
    templated?: boolean;
}
/**
 * 
 * @export
 * @interface OrderRoutingLocationGroup
 */
export interface OrderRoutingLocationGroup {
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingLocationGroup
     */
    tenantID: number;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingLocationGroup
     */
    siteID: number;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingLocationGroup
     */
    environmentID: number;
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
    updated?: string;
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
    updaterUsername?: string;
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
    groupID?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingLocationGroup
     */
    name: string;
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
     * @type {Array<number>}
     * @memberof OrderRoutingLocationGroup
     */
    excludedLocationsFromDefaultGroup?: Array<number>;
    /**
     * 
     * @type {boolean}
     * @memberof OrderRoutingLocationGroup
     */
    isDefaultGroup?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OrderRoutingLocationGroup
     */
    useRetailerExclusionList?: boolean;
    /**
     * 
     * @type {Array<LocationSort>}
     * @memberof OrderRoutingLocationGroup
     */
    sorts?: Array<LocationSort>;
    /**
     * 
     * @type {Set<AbstractFilter>}
     * @memberof OrderRoutingLocationGroup
     */
    filters?: Set<AbstractFilter>;
    /**
     * 
     * @type {GroupAfterAction}
     * @memberof OrderRoutingLocationGroup
     */
    afterActionPartial?: GroupAfterAction;
    /**
     * 
     * @type {GroupAfterAction}
     * @memberof OrderRoutingLocationGroup
     */
    afterActionNone?: GroupAfterAction;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingLocationGroup
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof OrderRoutingLocationGroup
     */
    active: boolean;
    /**
     * 
     * @type {FulfillmentLimit}
     * @memberof OrderRoutingLocationGroup
     */
    fulfillmentLimit?: FulfillmentLimit;
    /**
     * 
     * @type {boolean}
     * @memberof OrderRoutingLocationGroup
     */
    persisted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingLocationGroup
     */
    pathString?: string;
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
    sku?: string;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingOrderItem
     */
    quantity?: number;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof OrderRoutingOrderItem
     */
    customItemData?: { [key: string]: object; };
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingOrderItem
     */
    itemDependency?: number;
    /**
     * 
     * @type {boolean}
     * @memberof OrderRoutingOrderItem
     */
    backorderable?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OrderRoutingOrderItem
     */
    futureOrderable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingOrderItem
     */
    productTitle?: string;
    /**
     * 
     * @type {boolean}
     * @memberof OrderRoutingOrderItem
     */
    taxable?: boolean;
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
    length?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingOrderItem
     */
    width?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingOrderItem
     */
    height?: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof OrderRoutingOrderItem
     */
    tags?: { [key: string]: string; };
    /**
     * 
     * @type {ExtendedProductInfo}
     * @memberof OrderRoutingOrderItem
     */
    extendedProductInfo?: ExtendedProductInfo;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingOrderItem
     */
    condition?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingOrderItem
     */
    serialNumber?: string;
    /**
     * 
     * @type {boolean}
     * @memberof OrderRoutingOrderItem
     */
    granularInventoryItem?: boolean;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingOrderItem
     */
    upc?: string;
}
/**
 * 
 * @export
 * @interface OrderRoutingSettings
 */
export interface OrderRoutingSettings {
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingSettings
     */
    tenantID?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingSettings
     */
    siteID?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingSettings
     */
    defaultStateChange: OrderRoutingSettingsDefaultStateChangeEnum;
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
    maxFulfillingLocations?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingSettings
     */
    maxSplitItemLocations?: number;
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
    tooManyAssignsAction: OrderRoutingSettingsTooManyAssignsActionEnum;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingSettings
     */
    productIdentifierMapping?: OrderRoutingSettingsProductIdentifierMappingEnum;
    /**
     * 
     * @type {Set<FilterAttribute>}
     * @memberof OrderRoutingSettings
     */
    filterAttributes?: Set<FilterAttribute>;
    /**
     * 
     * @type {Set<string>}
     * @memberof OrderRoutingSettings
     */
    failoverActions?: Set<OrderRoutingSettingsFailoverActionsEnum>;
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
export const OrderRoutingSettingsTooManyAssignsActionEnum = {
    Cancel: 'CANCEL',
    CustomerCare: 'CUSTOMER_CARE',
    Available: 'AVAILABLE',
    Backorder: 'BACKORDER'
} as const;
export type OrderRoutingSettingsTooManyAssignsActionEnum = typeof OrderRoutingSettingsTooManyAssignsActionEnum[keyof typeof OrderRoutingSettingsTooManyAssignsActionEnum];

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
    onHand?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingTagQuantity
     */
    available?: number;
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
    pending?: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof OrderRoutingTagQuantity
     */
    tags?: { [key: string]: string; };
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
    bopisProcessingTimeHours?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingTagQuantity
     */
    sthProcessingTimeHours?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingTagQuantity
     */
    transferProcessingTimeHours?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderRoutingTagQuantity
     */
    receiveProcessingTimeHours?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingTagQuantity
     */
    sthFulfillmentDate?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingTagQuantity
     */
    bopisFulfillmentDate?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingTagQuantity
     */
    transferFulfillmentDate?: string;
}
/**
 * 
 * @export
 * @interface OrderRoutingView
 */
export interface OrderRoutingView {
    /**
     * 
     * @type {string}
     * @memberof OrderRoutingView
     */
    contentType?: string;
}
/**
 * 
 * @export
 * @interface PostCreateFromGroupPageRequest
 */
export interface PostCreateFromGroupPageRequest {
    /**
     * 
     * @type {FilterForm}
     * @memberof PostCreateFromGroupPageRequest
     */
    filterForm?: FilterForm;
    /**
     * 
     * @type {GroupSessionAttributes}
     * @memberof PostCreateFromGroupPageRequest
     */
    groupSessionAttributes?: GroupSessionAttributes;
}
/**
 * 
 * @export
 * @interface PreferAtomicAssignmentsRequestData
 */
export interface PreferAtomicAssignmentsRequestData {
    /**
     * 
     * @type {boolean}
     * @memberof PreferAtomicAssignmentsRequestData
     */
    preferAtomicAssignments?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PreferAtomicAssignmentsRequestData
     */
    routeID?: number;
}
/**
 * 
 * @export
 * @interface RankedLocation
 */
export interface RankedLocation {
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
    /**
     * 
     * @type {string}
     * @memberof RankedLocation
     */
    locationCode?: string;
}
/**
 * 
 * @export
 * @interface SessionTest
 */
export interface SessionTest {
    /**
     * 
     * @type {number}
     * @memberof SessionTest
     */
    sessionVar?: number;
}
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
 * @interface ShippingAddress
 */
export interface ShippingAddress {
    /**
     * 
     * @type {number}
     * @memberof ShippingAddress
     */
    addressID?: number;
    /**
     * 
     * @type {number}
     * @memberof ShippingAddress
     */
    customerID?: number;
    /**
     * 
     * @type {string}
     * @memberof ShippingAddress
     */
    addressLine1?: string;
    /**
     * 
     * @type {string}
     * @memberof ShippingAddress
     */
    phone?: string;
    /**
     * 
     * @type {string}
     * @memberof ShippingAddress
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof ShippingAddress
     */
    state?: string;
    /**
     * 
     * @type {string}
     * @memberof ShippingAddress
     */
    postalCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ShippingAddress
     */
    countryCode?: string;
    /**
     * 
     * @type {number}
     * @memberof ShippingAddress
     */
    latitude?: number;
    /**
     * 
     * @type {number}
     * @memberof ShippingAddress
     */
    longitude?: number;
}
/**
 * 
 * @export
 * @interface ShopatronUser
 */
export interface ShopatronUser {
    /**
     * 
     * @type {string}
     * @memberof ShopatronUser
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof ShopatronUser
     */
    username?: string;
    /**
     * 
     * @type {Array<GrantedAuthority>}
     * @memberof ShopatronUser
     */
    authorities?: Array<GrantedAuthority>;
    /**
     * 
     * @type {boolean}
     * @memberof ShopatronUser
     */
    accountNonExpired?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ShopatronUser
     */
    accountNonLocked?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ShopatronUser
     */
    credentialsNonExpired?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ShopatronUser
     */
    enabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ShopatronUser
     */
    userId?: number;
    /**
     * 
     * @type {string}
     * @memberof ShopatronUser
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof ShopatronUser
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof ShopatronUser
     */
    email?: string;
    /**
     * 
     * @type {number}
     * @memberof ShopatronUser
     */
    manufacturerId?: number;
    /**
     * 
     * @type {number}
     * @memberof ShopatronUser
     */
    catalogId?: number;
    /**
     * 
     * @type {number}
     * @memberof ShopatronUser
     */
    retailerId?: number;
    /**
     * 
     * @type {number}
     * @memberof ShopatronUser
     */
    fulfillerId?: number;
    /**
     * 
     * @type {Set<string>}
     * @memberof ShopatronUser
     */
    permissions?: Set<ShopatronUserPermissionsEnum>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ShopatronUser
     */
    allowedCatalogs?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof ShopatronUser
     */
    emailMd5?: string;
}


/**
 * @export
 */
export const ShopatronUserPermissionsEnum = {
    AccessCcui: 'access_ccui',
    AccessMessagingCenter: 'access_messaging_center',
    AccessOrderRouting: 'access_order_routing',
    AccessReports: 'access_reports',
    AccessGlobalResources: 'access_global_resources',
    AddPaymentLogs: 'add_payment_logs',
    AddOrderItem: 'add_order_item',
    Admin: 'admin',
    Advertrack: 'advertrack',
    ApproveEmail: 'approve_email',
    Bid: 'bid',
    Catalog: 'catalog',
    CatalogDesc: 'catalog_desc',
    CcLimited: 'cc_limited',
    CheckoutOpimization: 'checkout_opimization',
    ClearPermissionsCache: 'clear_permissions_cache',
    Cms: 'cms',
    CmsContent: 'cms_content',
    CreateOrder: 'create_order',
    CreateSpecialSingup: 'create_special_singup',
    CreditCard: 'credit_card',
    CustServiceAdv: 'cust_service_adv',
    CustServiceMgr: 'cust_service_mgr',
    CustomReport: 'custom_report',
    CustomerService: 'customer_service',
    DebugTools: 'debug_tools',
    Dev: 'dev',
    EditEmail: 'edit_email',
    EditFeeData: 'edit_fee_data',
    EditMerchantId: 'edit_merchant_id',
    EditOrders: 'edit_orders',
    ExpressShip: 'express_ship',
    Financial: 'financial',
    FprCeiling: 'fpr_ceiling',
    HasProstore: 'has_prostore',
    Hidden: 'hidden',
    Image: 'image',
    Info: 'info',
    InternalCs: 'internal_cs',
    LanguageManagement: 'language_management',
    LocalPickup: 'local_pickup',
    Mail: 'mail',
    ManageRtl: 'manage_rtl',
    ManualTax: 'manual_tax',
    Marketing: 'marketing',
    MerchantChecklistAdmin: 'merchant_checklist_admin',
    MerchantChecklistImplementer: 'merchant_checklist_implementer',
    MfgCertifications: 'mfg_certifications',
    MfgService: 'mfg_service',
    NotesAdmin: 'notes_admin',
    OrderPostStatementAdjustment: 'order_post_statement_adjustment',
    OrderSource: 'order_source',
    Product: 'product',
    ProductAvail: 'product_avail',
    ProductCategory: 'product_category',
    ProductDesc: 'product_desc',
    Rep: 'rep',
    RetailerService: 'retailer_service',
    SalesRep: 'sales_rep',
    SeeOrders: 'see_orders',
    SessionCertLevels: 'session_cert_levels',
    SessionExpressShip: 'session_express_ship',
    SessionLocalPickup: 'session_local_pickup',
    SessionLocalPickupApproved: 'session_local_pickup_approved',
    SessionStsPickup: 'session_sts_pickup',
    Shipping: 'shipping',
    Strategic: 'strategic',
    StsPickup: 'STS-Pickup',
    Subscription: 'subscription',
    TechnicalImplementations: 'Technical Implementations',
    Uber: 'uber',
    Users: 'users',
    UsersShopatron: 'users_shopatron',
    ViewCc: 'view_cc',
    ViewPassword: 'view_password',
    XmlAuth: 'xml_auth',
    XmlUse: 'xml_use',
    V1AppAccessPerfectSyncDev: 'v1.app.access.perfect_sync_dev',
    V1AppAccessCustomerCare: 'v1.app.access.customer_care',
    V1AppAccessMessagingCenter: 'v1.app.access.messaging_center',
    V1AppAccessOrderRouting: 'v1.app.access.order_routing',
    V1AppAccessOrderQueues: 'v1.app.access.order_queues',
    V1AppAccessGlobalResources: 'v1.app.access.global_resources',
    V1AppAccessConfigurations: 'v1.app.access.configurations',
    V1AppAccessCars: 'v1.app.access.cars',
    V1AppAccessManufacturer: 'v1.app.access.manufacturer',
    V1AppAccessRetailer: 'v1.app.access.retailer',
    V1AppAccessFulfiller: 'v1.app.access.fulfiller',
    V1OrdersItemsAddItem: 'v1.orders.items.add_item',
    V1OrderCreateCreateOrder: 'v1.order.create.create_order',
    V1OrdersAssignSplitRemoveRestriction: 'v1.orders.assign.split.remove_restriction',
    V1OrdersAssignSplitReassignItemAutomatically: 'v1.orders.assign.split.reassign_item_automatically',
    V1OrdersAssignSplitReassignItemManually: 'v1.orders.assign.split.reassign_item_manually',
    V1OrdersAssignSplitQuantity: 'v1.orders.assign.split.quantity',
    V1OrdersAssignSplitBackorder: 'v1.orders.assign.split.backorder',
    V1OrdersAppeaseUnrestrictedAmount: 'v1.orders.appease.unrestricted_amount',
    V1OrdersAppeaseTax: 'v1.orders.appease.tax',
    V1OrdersAppeaseShipping: 'v1.orders.appease.shipping'
} as const;
export type ShopatronUserPermissionsEnum = typeof ShopatronUserPermissionsEnum[keyof typeof ShopatronUserPermissionsEnum];

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
     * @type {string}
     * @memberof StateChangeSuggestion
     */
    stateChange?: StateChangeSuggestionStateChangeEnum;
    /**
     * 
     * @type {number}
     * @memberof StateChangeSuggestion
     */
    quantity?: number;
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
 * @interface SuggestionEvent
 */
export interface SuggestionEvent {
    /**
     * 
     * @type {string}
     * @memberof SuggestionEvent
     */
    type: SuggestionEventTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SuggestionEvent
     */
    name?: string;
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
     * @type {number}
     * @memberof SuggestionLog
     */
    tenantID: number;
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
    environmentID: number;
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
    updated?: string;
    /**
     * 
     * @type {string}
     * @memberof SuggestionLog
     */
    creatorUsername?: string;
    /**
     * 
     * @type {string}
     * @memberof SuggestionLog
     */
    updaterUsername?: string;
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
    orderID?: number;
    /**
     * 
     * @type {string}
     * @memberof SuggestionLog
     */
    externalResponseID?: string;
    /**
     * 
     * @type {Array<SuggestionEvent>}
     * @memberof SuggestionLog
     */
    events?: Array<SuggestionEvent>;
    /**
     * 
     * @type {boolean}
     * @memberof SuggestionLog
     */
    persisted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SuggestionLog
     */
    pathString?: string;
    /**
     * 
     * @type {UserContextInformation}
     * @memberof SuggestionLog
     */
    userContext?: UserContextInformation;
}
/**
 * 
 * @export
 * @interface SuggestionRequest
 */
export interface SuggestionRequest {
    /**
     * 
     * @type {Array<OrderRoutingOrderItem>}
     * @memberof SuggestionRequest
     */
    items: Array<OrderRoutingOrderItem>;
    /**
     * 
     * @type {string}
     * @memberof SuggestionRequest
     */
    orderType: SuggestionRequestOrderTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof SuggestionRequest
     */
    environmentID?: number;
    /**
     * 
     * @type {ShippingAddress}
     * @memberof SuggestionRequest
     */
    shippingAddress?: ShippingAddress;
    /**
     * 
     * @type {boolean}
     * @memberof SuggestionRequest
     */
    isExpress?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SuggestionRequest
     */
    pickupLocationCode?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof SuggestionRequest
     */
    locationCodeWhiteList?: Array<string>;
    /**
     * 
     * @type {Array<ExclusionListEntryLocationCode>}
     * @memberof SuggestionRequest
     */
    exclusionListLocationCode?: Array<ExclusionListEntryLocationCode>;
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
     * @type {{ [key: string]: string; }}
     * @memberof SuggestionRequest
     */
    tags?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof SuggestionRequest
     */
    futureDateLimit?: string;
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
     * @type {number}
     * @memberof SuggestionRequest
     */
    orderID?: number;
    /**
     * 
     * @type {string}
     * @memberof SuggestionRequest
     */
    cartID?: string;
    /**
     * 
     * @type {number}
     * @memberof SuggestionRequest
     */
    total: number;
    /**
     * 
     * @type {number}
     * @memberof SuggestionRequest
     */
    fraud?: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof SuggestionRequest
     */
    customData?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof SuggestionRequest
     */
    bundlingStrategy?: SuggestionRequestBundlingStrategyEnum;
    /**
     * 
     * @type {boolean}
     * @memberof SuggestionRequest
     */
    forceSTHConsolidationOnSplitShipments?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SuggestionRequest
     */
    sthConsolidationLocationOverride?: string;
    /**
     * 
     * @type {number}
     * @memberof SuggestionRequest
     */
    numShipmentsNotInRequest?: number;
}


/**
 * @export
 */
export const SuggestionRequestOrderTypeEnum = {
    Directship: 'DIRECTSHIP',
    Transfer: 'TRANSFER',
    SthConsolidated: 'STH_CONSOLIDATED'
} as const;
export type SuggestionRequestOrderTypeEnum = typeof SuggestionRequestOrderTypeEnum[keyof typeof SuggestionRequestOrderTypeEnum];

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
export const SuggestionRequestBundlingStrategyEnum = {
    ItemDependency: 'ITEM_DEPENDENCY'
} as const;
export type SuggestionRequestBundlingStrategyEnum = typeof SuggestionRequestBundlingStrategyEnum[keyof typeof SuggestionRequestBundlingStrategyEnum];

/**
 * 
 * @export
 * @interface SuggestionResponse
 */
export interface SuggestionResponse {
    /**
     * 
     * @type {{ [key: string]: Array<AssignmentSuggestion>; }}
     * @memberof SuggestionResponse
     */
    assignmentSuggestions?: { [key: string]: Array<AssignmentSuggestion>; };
    /**
     * 
     * @type {{ [key: string]: Array<AssignmentSuggestion>; }}
     * @memberof SuggestionResponse
     */
    futureAssignmentSuggestions?: { [key: string]: Array<AssignmentSuggestion>; };
    /**
     * 
     * @type {{ [key: string]: StateChangeSuggestion; }}
     * @memberof SuggestionResponse
     */
    stateChangeSuggestions?: { [key: string]: StateChangeSuggestion; };
    /**
     * 
     * @type {Array<number>}
     * @memberof SuggestionResponse
     */
    availableLocations?: Array<number>;
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
    externalResponseID?: string;
    /**
     * 
     * @type {SuggestionLog}
     * @memberof SuggestionResponse
     */
    suggestionLog?: SuggestionLog;
    /**
     * 
     * @type {string}
     * @memberof SuggestionResponse
     */
    route?: SuggestionResponseRouteEnum;
    /**
     * 
     * @type {Array<AssignmentSuggestionShipmentGroup>}
     * @memberof SuggestionResponse
     */
    assignmentSuggestionShipmentGroups?: Array<AssignmentSuggestionShipmentGroup>;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof SuggestionResponse
     */
    data?: { [key: string]: string; };
    /**
     * 
     * @type {Array<OrderRoutingOrderAttribute>}
     * @memberof SuggestionResponse
     */
    attributes?: Array<OrderRoutingOrderAttribute>;
    /**
     * 
     * @type {boolean}
     * @memberof SuggestionResponse
     */
    emptyResponse?: boolean;
}


/**
 * @export
 */
export const SuggestionResponseRouteEnum = {
    Directship: 'DIRECTSHIP',
    Transfer: 'TRANSFER',
    SthConsolidated: 'STH_CONSOLIDATED'
} as const;
export type SuggestionResponseRouteEnum = typeof SuggestionResponseRouteEnum[keyof typeof SuggestionResponseRouteEnum];

/**
 * 
 * @export
 * @interface SuggestionTestForm
 */
export interface SuggestionTestForm {
    /**
     * 
     * @type {string}
     * @memberof SuggestionTestForm
     */
    suggestionRequest?: string;
    /**
     * 
     * @type {string}
     * @memberof SuggestionTestForm
     */
    inventoryResponses?: string;
}
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
    tenantClient?: object;
}
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
    tenantID?: number;
    /**
     * 
     * @type {number}
     * @memberof UserContextInformation
     */
    siteID?: number;
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
     * @type {TenantService}
     * @memberof UserContextInformation
     */
    tenantService?: TenantService;
    /**
     * 
     * @type {object}
     * @memberof UserContextInformation
     */
    siteService?: object;
    /**
     * 
     * @type {string}
     * @memberof UserContextInformation
     */
    pathString?: string;
}
