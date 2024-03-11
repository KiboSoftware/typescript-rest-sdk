/* tslint:disable */
/* eslint-disable */
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
    booleanOperator?: AbstractFilterBooleanOperatorEnum;
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
    dotDelimitedPropertyName?: string;
    /**
     * 
     * @type {number}
     * @memberof AbstractFilter
     */
    environmentID?: number;
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
     * @type {string}
     * @memberof AbstractFilter
     */
    extensibleAttributeType?: string;
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
     * @type {UnitOfobject}
     * @memberof AbstractFilter
     */
    filterUnit?: UnitOfobject;
    /**
     * 
     * @type {string}
     * @memberof AbstractFilter
     */
    name?: string;
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
    siteID?: number;
    /**
     * 
     * @type {number}
     * @memberof AbstractFilter
     */
    tenantID?: number;
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
 * @interface ApiDocumentationAttribute
 */
export interface ApiDocumentationAttribute {
    /**
     * 
     * @type {string}
     * @memberof ApiDocumentationAttribute
     */
    attributeFQN?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ApiDocumentationAttribute
     */
    attributeValues?: Array<string>;
}
/**
 * Future Inventory Model
 * @export
 * @interface ApiDocumentationFutureInventory
 */
export interface ApiDocumentationFutureInventory {
    /**
     * Expected change in the actual allocated inventory value when this future inventory record is released.
     * @type {number}
     * @memberof ApiDocumentationFutureInventory
     */
    allocated?: number;
    /**
     * Expected change in the actual available inventory value when this future inventory record is released.
     * @type {number}
     * @memberof ApiDocumentationFutureInventory
     */
    available?: number;
    /**
     * Date the inventory was created.
     * @type {string}
     * @memberof ApiDocumentationFutureInventory
     */
    createDate?: string;
    /**
     * Date at which this inventory will become available. Expected format '2020-09-28T12:00:00-0500'
     * @type {string}
     * @memberof ApiDocumentationFutureInventory
     */
    deliveryDate?: string;
    /**
     * Future Inventory unique identifier.
     * @type {number}
     * @memberof ApiDocumentationFutureInventory
     */
    futureInventoryID?: number;
    /**
     * Expected change in the actual onhand inventory value when this future inventory record is released.
     * @type {number}
     * @memberof ApiDocumentationFutureInventory
     */
    onhand?: number;
    /**
     * Number of new expected pending items that would be created by releasing this future inventory record assuming no actual inventory is available
     * @type {number}
     * @memberof ApiDocumentationFutureInventory
     */
    pending?: number;
    /**
     * Type of future inventory update: REFRESH or ADJUST.
     * @type {string}
     * @memberof ApiDocumentationFutureInventory
     */
    type?: string;
}
/**
 * Inventory Response
 * @export
 * @interface ApiDocumentationInventoryResponse
 */
export interface ApiDocumentationInventoryResponse {
    /**
     * The quantity the location has that are already allocated.
     * @type {number}
     * @memberof ApiDocumentationInventoryResponse
     */
    allocated?: number;
    /**
     * List of Inventory Attributes
     * @type {Array<string>}
     * @memberof ApiDocumentationInventoryResponse
     */
    attributes?: Array<string>;
    /**
     * The quantity the location has that are available for purchase
     * @type {number}
     * @memberof ApiDocumentationInventoryResponse
     */
    available?: number;
    /**
     * Whether or not the product is blocked for assignment
     * @type {boolean}
     * @memberof ApiDocumentationInventoryResponse
     */
    blockAssignment?: boolean;
    /**
     * The country code of this location
     * @type {string}
     * @memberof ApiDocumentationInventoryResponse
     */
    countryCode?: string;
    /**
     * The currency identifier for the retailPrice
     * @type {number}
     * @memberof ApiDocumentationInventoryResponse
     */
    currencyID?: number;
    /**
     * Whether this location can ship to a consumer
     * @type {boolean}
     * @memberof ApiDocumentationInventoryResponse
     */
    directShip?: boolean;
    /**
     * The distance in miles from this location to the item's destination
     * @type {number}
     * @memberof ApiDocumentationInventoryResponse
     */
    distance?: number;
    /**
     * Absolute minimum quantity of this item that should be in stock at any time
     * @type {number}
     * @memberof ApiDocumentationInventoryResponse
     */
    floor?: number;
    /**
     * 
     * @type {Array<ApiDocumentationFutureInventory>}
     * @memberof ApiDocumentationInventoryResponse
     */
    futureInventory?: Array<ApiDocumentationFutureInventory>;
    /**
     * The inventory locator name of the individual item
     * @type {string}
     * @memberof ApiDocumentationInventoryResponse
     */
    inventoryLocatorName?: string;
    /**
     * Location Code
     * @type {string}
     * @memberof ApiDocumentationInventoryResponse
     */
    locationCode?: string;
    /**
     * Location Name
     * @type {string}
     * @memberof ApiDocumentationInventoryResponse
     */
    locationName?: string;
    /**
     * Custom field used for store prioritization
     * @type {number}
     * @memberof ApiDocumentationInventoryResponse
     */
    ltd?: number;
    /**
     * List of messages
     * @type {Array<string>}
     * @memberof ApiDocumentationInventoryResponse
     */
    messages?: Array<string>;
    /**
     * Number of results
     * @type {number}
     * @memberof ApiDocumentationInventoryResponse
     */
    numResults?: number;
    /**
     * The quantity the location has in its possession
     * @type {number}
     * @memberof ApiDocumentationInventoryResponse
     */
    onHand?: number;
    /**
     * Part/Product Number
     * @type {string}
     * @memberof ApiDocumentationInventoryResponse
     */
    partNumber?: string;
    /**
     * The quantity the location has that are pending.
     * @type {number}
     * @memberof ApiDocumentationInventoryResponse
     */
    pending?: number;
    /**
     * Whether a consumer can pick up product at this location (store)
     * @type {boolean}
     * @memberof ApiDocumentationInventoryResponse
     */
    pickup?: boolean;
    /**
     * The price of the product at this location
     * @type {number}
     * @memberof ApiDocumentationInventoryResponse
     */
    retailPrice?: number;
    /**
     * Quantity of this item the location wants to keep in stock to ensure stock isn't completely depleted
     * @type {number}
     * @memberof ApiDocumentationInventoryResponse
     */
    safetyStock?: number;
    /**
     * Stock Keeping Unit
     * @type {string}
     * @memberof ApiDocumentationInventoryResponse
     */
    sku?: string;
    /**
     * Flag for success
     * @type {boolean}
     * @memberof ApiDocumentationInventoryResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Array<ApiDocumentationTagQuantity>}
     * @memberof ApiDocumentationInventoryResponse
     */
    taggedInventory?: Array<ApiDocumentationTagQuantity>;
    /**
     * Tenant Identifier
     * @type {number}
     * @memberof ApiDocumentationInventoryResponse
     */
    tenantID?: number;
    /**
     * Whether the location can ship to another location (store), thus restocking that location.
     * @type {boolean}
     * @memberof ApiDocumentationInventoryResponse
     */
    transferEnabled?: boolean;
    /**
     * Universal Product Code
     * @type {string}
     * @memberof ApiDocumentationInventoryResponse
     */
    upc?: string;
}
/**
 * 
 * @export
 * @interface ApiDocumentationLocationGroup
 */
export interface ApiDocumentationLocationGroup {
    /**
     * 
     * @type {boolean}
     * @memberof ApiDocumentationLocationGroup
     */
    active?: boolean;
    /**
     * 
     * @type {GroupAfterAction}
     * @memberof ApiDocumentationLocationGroup
     */
    afterActionNone?: GroupAfterAction;
    /**
     * 
     * @type {GroupAfterAction}
     * @memberof ApiDocumentationLocationGroup
     */
    afterActionPartial?: GroupAfterAction;
    /**
     * 
     * @type {string}
     * @memberof ApiDocumentationLocationGroup
     */
    created?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiDocumentationLocationGroup
     */
    creatorUsername?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiDocumentationLocationGroup
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof ApiDocumentationLocationGroup
     */
    environmentID?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof ApiDocumentationLocationGroup
     */
    excludedLocationsFromDefaultGroup?: Array<number>;
    /**
     * 
     * @type {Array<AbstractFilter>}
     * @memberof ApiDocumentationLocationGroup
     */
    filters?: Array<AbstractFilter>;
    /**
     * 
     * @type {FulfillmentLimit}
     * @memberof ApiDocumentationLocationGroup
     */
    fulfillmentLimit?: FulfillmentLimit;
    /**
     * 
     * @type {number}
     * @memberof ApiDocumentationLocationGroup
     */
    groupID?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ApiDocumentationLocationGroup
     */
    isDefaultGroup?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ApiDocumentationLocationGroup
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiDocumentationLocationGroup
     */
    pathString?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ApiDocumentationLocationGroup
     */
    persisted?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ApiDocumentationLocationGroup
     */
    rank?: number;
    /**
     * 
     * @type {Array<RankedLocation>}
     * @memberof ApiDocumentationLocationGroup
     */
    rankedLocations?: Array<RankedLocation>;
    /**
     * 
     * @type {number}
     * @memberof ApiDocumentationLocationGroup
     */
    siteID?: number;
    /**
     * 
     * @type {Array<LocationSort>}
     * @memberof ApiDocumentationLocationGroup
     */
    sorts?: Array<LocationSort>;
    /**
     * 
     * @type {number}
     * @memberof ApiDocumentationLocationGroup
     */
    tenantID?: number;
    /**
     * 
     * @type {string}
     * @memberof ApiDocumentationLocationGroup
     */
    updated?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiDocumentationLocationGroup
     */
    updaterUsername?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ApiDocumentationLocationGroup
     */
    useRetailerExclusionList?: boolean;
}
/**
 * 
 * @export
 * @interface ApiDocumentationOrderItem
 */
export interface ApiDocumentationOrderItem {
    /**
     * 
     * @type {boolean}
     * @memberof ApiDocumentationOrderItem
     */
    backorderable?: boolean;
    /**
     * 
     * @type {object}
     * @memberof ApiDocumentationOrderItem
     */
    customItemData?: object;
    /**
     * 
     * @type {ExtendedProductInfo}
     * @memberof ApiDocumentationOrderItem
     */
    extendedProductInfo?: ExtendedProductInfo;
    /**
     * 
     * @type {boolean}
     * @memberof ApiDocumentationOrderItem
     */
    futureOrderable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ApiDocumentationOrderItem
     */
    height?: number;
    /**
     * 
     * @type {number}
     * @memberof ApiDocumentationOrderItem
     */
    itemDependency?: number;
    /**
     * 
     * @type {number}
     * @memberof ApiDocumentationOrderItem
     */
    length?: number;
    /**
     * 
     * @type {number}
     * @memberof ApiDocumentationOrderItem
     */
    orderItemID?: number;
    /**
     * 
     * @type {string}
     * @memberof ApiDocumentationOrderItem
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiDocumentationOrderItem
     */
    productTitle?: string;
    /**
     * 
     * @type {number}
     * @memberof ApiDocumentationOrderItem
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof ApiDocumentationOrderItem
     */
    sku?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ApiDocumentationOrderItem
     */
    taxable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ApiDocumentationOrderItem
     */
    upc?: string;
    /**
     * 
     * @type {number}
     * @memberof ApiDocumentationOrderItem
     */
    weight?: number;
    /**
     * 
     * @type {number}
     * @memberof ApiDocumentationOrderItem
     */
    width?: number;
}
/**
 * Response object for a tag quantity
 * @export
 * @interface ApiDocumentationTagQuantity
 */
export interface ApiDocumentationTagQuantity {
    /**
     * The quantity the location has that are already allocated for this tag
     * @type {number}
     * @memberof ApiDocumentationTagQuantity
     */
    allocated?: number;
    /**
     * The quantity the location has that are available for purchase for this tag
     * @type {number}
     * @memberof ApiDocumentationTagQuantity
     */
    available?: number;
    /**
     * 
     * @type {Array<ApiDocumentationFutureInventory>}
     * @memberof ApiDocumentationTagQuantity
     */
    futureInventory?: Array<ApiDocumentationFutureInventory>;
    /**
     * The quantity the the location has in its possession for this tag
     * @type {number}
     * @memberof ApiDocumentationTagQuantity
     */
    onHand?: number;
    /**
     * The quantity the location has that are pending for this tag
     * @type {number}
     * @memberof ApiDocumentationTagQuantity
     */
    pending?: number;
    /**
     * Associative Map of <String, String> for tagCategoryName => tagName
     * @type {{ [key: string]: string; }}
     * @memberof ApiDocumentationTagQuantity
     */
    tags?: { [key: string]: string; };
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
     * @type {string}
     * @memberof AssignmentSuggestion
     */
    route?: AssignmentSuggestionRouteEnum;
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
    futureDate?: string;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestionFutureInventory
     */
    partNumber?: string;
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
     * @type {string}
     * @memberof CandidateSuggestionInventory
     */
    sku?: string;
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
     * @type {Array<ApiDocumentationOrderItem>}
     * @memberof CandidateSuggestionsRequest
     */
    items?: Array<ApiDocumentationOrderItem>;
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
    orderType?: CandidateSuggestionsRequestOrderTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestionsRequest
     */
    pickupLocationCode?: string;
    /**
     * 
     * @type {ShippingAddress}
     * @memberof CandidateSuggestionsRequest
     */
    shippingAddress?: ShippingAddress;
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
    Partial: 'PARTIAL',
    Any: 'ANY',
    AllStores: 'ALL_STORES'
} as const;
export type CandidateSuggestionsRequestInventoryRequestTypeEnum = typeof CandidateSuggestionsRequestInventoryRequestTypeEnum[keyof typeof CandidateSuggestionsRequestInventoryRequestTypeEnum];

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
    dataType?: CustomDataListDataTypeEnum;
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
    environmentID?: number;
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
    name?: string;
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
    siteID?: number;
    /**
     * 
     * @type {string}
     * @memberof CustomDataList
     */
    state?: CustomDataListStateEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof CustomDataList
     */
    stringValues?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof CustomDataList
     */
    tenantID?: number;
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
     * @type {Array<object>}
     * @memberof CustomDataList
     */
    values?: Array<object>;
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
    stringValue?: string;
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
    booleanOperator?: CustomDataListFilterBooleanOperatorEnum;
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
    dotDelimitedPropertyName?: string;
    /**
     * 
     * @type {number}
     * @memberof CustomDataListFilter
     */
    environmentID?: number;
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
     * @type {string}
     * @memberof CustomDataListFilter
     */
    extensibleAttributeType?: string;
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
     * @type {UnitOfobject}
     * @memberof CustomDataListFilter
     */
    filterUnit?: UnitOfobject;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListFilter
     */
    name?: string;
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
    siteID?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomDataListFilter
     */
    tenantID?: number;
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
 * @interface CustomDataValueFilter
 */
export interface CustomDataValueFilter {
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueFilter
     */
    booleanOperator?: CustomDataValueFilterBooleanOperatorEnum;
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
     * @type {CustomDataValueOfobject}
     * @memberof CustomDataValueFilter
     */
    customDataValue?: CustomDataValueOfobject;
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
    dotDelimitedPropertyName?: string;
    /**
     * 
     * @type {number}
     * @memberof CustomDataValueFilter
     */
    environmentID?: number;
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
     * @type {string}
     * @memberof CustomDataValueFilter
     */
    extensibleAttributeType?: string;
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
     * @type {UnitOfobject}
     * @memberof CustomDataValueFilter
     */
    filterUnit?: UnitOfobject;
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueFilter
     */
    name?: string;
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
    siteID?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomDataValueFilter
     */
    tenantID?: number;
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
 * @interface CustomDataValueOfobject
 */
export interface CustomDataValueOfobject {
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueOfobject
     */
    created?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueOfobject
     */
    creatorUsername?: string;
    /**
     * 
     * @type {number}
     * @memberof CustomDataValueOfobject
     */
    customDataValueID?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomDataValueOfobject
     */
    environmentID?: number;
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueOfobject
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueOfobject
     */
    pathString?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CustomDataValueOfobject
     */
    persisted?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CustomDataValueOfobject
     */
    siteID?: number;
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueOfobject
     */
    stringValue?: string;
    /**
     * 
     * @type {number}
     * @memberof CustomDataValueOfobject
     */
    tenantID?: number;
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueOfobject
     */
    updated?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataValueOfobject
     */
    updaterUsername?: string;
    /**
     * 
     * @type {UserContextInformation}
     * @memberof CustomDataValueOfobject
     */
    userContext?: UserContextInformation;
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
     * @type {Array<ApiDocumentationAttribute>}
     * @memberof ExtendedCustomerInfo
     */
    attributes?: Array<ApiDocumentationAttribute>;
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
}
/**
 * 
 * @export
 * @interface ExtendedOrderInfo
 */
export interface ExtendedOrderInfo {
    /**
     * 
     * @type {Array<ApiDocumentationAttribute>}
     * @memberof ExtendedOrderInfo
     */
    attributes?: Array<ApiDocumentationAttribute>;
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
     * @type {Array<ApiDocumentationAttribute>}
     * @memberof ExtendedProductInfo
     */
    attributes?: Array<ApiDocumentationAttribute>;
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
    ExtensibleCustomerInfo: 'EXTENSIBLE_CUSTOMER_INFO'
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
    durationType?: FulfillmentLimitDurationTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentLimit
     */
    environmentID?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentLimit
     */
    fulfillmentLimit?: number;
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
    fulfillmentType?: FulfillmentLimitFulfillmentTypeEnum;
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
    siteID?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentLimit
     */
    tenantID?: number;
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
    environmentID?: number;
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
    siteID?: number;
    /**
     * 
     * @type {number}
     * @memberof GroupAfterAction
     */
    tenantID?: number;
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
 * @interface LocationCriteriaSet
 */
export interface LocationCriteriaSet {
    /**
     * 
     * @type {Array<LocationCriteriaSetDataDefinition>}
     * @memberof LocationCriteriaSet
     */
    columnDefinitions?: Array<LocationCriteriaSetDataDefinition>;
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
    environmentID?: number;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSet
     */
    fileName?: string;
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
    siteID?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationCriteriaSet
     */
    tenantID?: number;
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
    columnName?: string;
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
    environmentID?: number;
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
    siteID?: number;
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
    tenantID?: number;
    /**
     * 
     * @type {UnitOfobject}
     * @memberof LocationCriteriaSetDataDefinition
     */
    unit?: UnitOfobject;
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
    booleanOperator?: LocationCriteriaSetFilterBooleanOperatorEnum;
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
    dotDelimitedPropertyName?: string;
    /**
     * 
     * @type {number}
     * @memberof LocationCriteriaSetFilter
     */
    environmentID?: number;
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
     * @type {string}
     * @memberof LocationCriteriaSetFilter
     */
    extensibleAttributeType?: string;
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
     * @type {UnitOfobject}
     * @memberof LocationCriteriaSetFilter
     */
    filterUnit?: UnitOfobject;
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
    name?: string;
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
    siteID?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationCriteriaSetFilter
     */
    tenantID?: number;
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
    active?: boolean;
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
    environmentID?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof LocationGroupModel
     */
    excludedLocationsFromDefaultGroup?: Array<number>;
    /**
     * 
     * @type {Array<AbstractFilter>}
     * @memberof LocationGroupModel
     */
    filters?: Array<AbstractFilter>;
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
    name?: string;
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
    rank?: number;
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
    routeID?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationGroupModel
     */
    siteID?: number;
    /**
     * 
     * @type {Array<LocationSort>}
     * @memberof LocationGroupModel
     */
    sorts?: Array<LocationSort>;
    /**
     * 
     * @type {number}
     * @memberof LocationGroupModel
     */
    tenantID?: number;
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
    environmentID?: number;
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
    siteID?: number;
    /**
     * 
     * @type {string}
     * @memberof LocationSort
     */
    sortingType?: LocationSortSortingTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof LocationSort
     */
    tenantID?: number;
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
    DataSet: 'DATA_SET'
} as const;
export type LocationSortSortingTypeEnum = typeof LocationSortSortingTypeEnum[keyof typeof LocationSortSortingTypeEnum];

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
    allowInternationalAssignment?: boolean;
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
    defaultStateChange?: OrderRoutingSettingsDefaultStateChangeEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof OrderRoutingSettings
     */
    failoverActions?: Array<OrderRoutingSettingsFailoverActionsEnum>;
    /**
     * 
     * @type {Array<FilterAttribute>}
     * @memberof OrderRoutingSettings
     */
    filterAttributes?: Array<FilterAttribute>;
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
    tooManyAssignsAction?: OrderRoutingSettingsTooManyAssignsActionEnum;
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
     * @type {string}
     * @memberof ShippingAddress
     */
    addressLine1?: string;
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
    countryCode?: string;
    /**
     * 
     * @type {number}
     * @memberof ShippingAddress
     */
    customerID?: number;
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
    postalCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ShippingAddress
     */
    state?: string;
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
    type?: SuggestionEventTypeEnum;
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
    FutureAtpUsed: 'FUTURE_ATP_USED'
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
    environmentID?: number;
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
     * @type {number}
     * @memberof SuggestionLog
     */
    orderID?: number;
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
    siteID?: number;
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
    tenantID?: number;
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
}
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
     * @type {Array<ApiDocumentationOrderItem>}
     * @memberof SuggestionRequest
     */
    items?: Array<ApiDocumentationOrderItem>;
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
    orderType?: SuggestionRequestOrderTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SuggestionRequest
     */
    pickupLocationCode?: string;
    /**
     * 
     * @type {ShippingAddress}
     * @memberof SuggestionRequest
     */
    shippingAddress?: ShippingAddress;
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
    total?: number;
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
    Partial: 'PARTIAL',
    Any: 'ANY',
    AllStores: 'ALL_STORES'
} as const;
export type SuggestionRequestInventoryRequestTypeEnum = typeof SuggestionRequestInventoryRequestTypeEnum[keyof typeof SuggestionRequestInventoryRequestTypeEnum];

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
     * @type {Array<number>}
     * @memberof SuggestionResponse
     */
    availableLocations?: Array<number>;
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
    SthConsolidated: 'STH_CONSOLIDATED'
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
     * @type {Array<ApiDocumentationInventoryResponse>}
     * @memberof SuggestionTestRequest
     */
    testInventoryResponses?: Array<ApiDocumentationInventoryResponse>;
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
 * @interface UnitOfobject
 */
export interface UnitOfobject {
    /**
     * 
     * @type {object}
     * @memberof UnitOfobject
     */
    dimension?: object;
    /**
     * 
     * @type {UnitOfobject}
     * @memberof UnitOfobject
     */
    standardUnit?: UnitOfobject;
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
