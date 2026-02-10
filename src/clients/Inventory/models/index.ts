/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface AdjustFutureDate404Response
 */
export interface AdjustFutureDate404Response {
    /**
     * 
     * @type {string}
     * @memberof AdjustFutureDate404Response
     */
    error?: string;
    /**
     * 
     * @type {string}
     * @memberof AdjustFutureDate404Response
     */
    message?: string;
}
/**
 * Adjust Item
 * @export
 * @interface AdjustItem
 */
export interface AdjustItem {
    /**
     * Part/Product Number
     * @type {string}
     * @memberof AdjustItem
     */
    partNumber?: string;
    /**
     * Universal Product Code
     * @type {string}
     * @memberof AdjustItem
     */
    upc?: string;
    /**
     * Stock Keeping Unit
     * @type {string}
     * @memberof AdjustItem
     */
    sku?: string;
    /**
     * Bin Location Identifier
     * @type {number}
     * @memberof AdjustItem
     */
    binID?: number;
    /**
     * Current Quantity of Item
     * @type {number}
     * @memberof AdjustItem
     */
    quantity?: number;
    /**
     * Associative Map of <String, String> for tagCategoryName => tagName
     * @type {{ [key: string]: string; }}
     * @memberof AdjustItem
     */
    tags?: { [key: string]: string; };
    /**
     * Date at which this inventory will become available. Expected format '2020-09-28T12:00:00-0500'
     * @type {string}
     * @memberof AdjustItem
     */
    deliveryDate?: string;
    /**
     * External Identifier for the given future inventory record. Will not create a new future inventory record unless deliveryDate is specified
     * @type {string}
     * @memberof AdjustItem
     */
    externalID?: string;
    /**
     * Track which lot a product is manufactured in
     * @type {string}
     * @memberof AdjustItem
     */
    lotCode?: string;
    /**
     * Describes the state of the product
     * @type {string}
     * @memberof AdjustItem
     */
    condition?: string;
    /**
     * A serial number is unique to a specific, physical unit of inventory
     * @type {string}
     * @memberof AdjustItem
     */
    serialNumber?: string;
    /**
     * Used by the retailer for storing information related to manufacturing date or expiry date and use date to allocate for better stock management
     * @type {string}
     * @memberof AdjustItem
     */
    date?: string;
}
/**
 * Request needed for adjusting inventory
 * @export
 * @interface AdjustRequest
 */
export interface AdjustRequest {
    /**
     * List of items to adjust
     * @type {Array<AdjustItem>}
     * @memberof AdjustRequest
     */
    items?: Array<AdjustItem>;
    /**
     * Location Code
     * @type {string}
     * @memberof AdjustRequest
     */
    locationCode?: string;
    /**
     * user id
     * @type {number}
     * @memberof AdjustRequest
     */
    userID?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof AdjustRequest
     */
    pageSize?: number;
    /**
     * which page to show
     * @type {number}
     * @memberof AdjustRequest
     */
    pageNum?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof AdjustRequest
     */
    sortBy?: string;
}
/**
 * 
 * @export
 * @interface AdjustRequestAllOf
 */
export interface AdjustRequestAllOf {
    /**
     * List of items to adjust
     * @type {Array<AdjustItem>}
     * @memberof AdjustRequestAllOf
     */
    items?: Array<AdjustItem>;
}
/**
 * Request for aggregating inventory
 * @export
 * @interface AggregateRequest
 */
export interface AggregateRequest {
    /**
     * List of Items to search on
     * @type {Array<InventoryItem>}
     * @memberof AggregateRequest
     */
    items: Array<InventoryItem>;
    /**
     * Whether to ignore the safety stock buffer put in place
     * @type {boolean}
     * @memberof AggregateRequest
     */
    ignoreSafetyStock?: boolean;
    /**
     * Whether to allow items with negative inventory in the results
     * @type {boolean}
     * @memberof AggregateRequest
     */
    includeNegativeInventory?: boolean;
    /**
     * Whether to limit results to locations that are shipping enabled
     * @type {boolean}
     * @memberof AggregateRequest
     */
    directShip?: boolean;
    /**
     * Filter results by locations that apply tax (true) or don't (false)
     * @type {boolean}
     * @memberof AggregateRequest
     */
    transferEnabled?: boolean;
    /**
     * Filter results by pickup enabled (true) or not (false)
     * @type {boolean}
     * @memberof AggregateRequest
     */
    pickup?: boolean;
    /**
     * Associative Map of <String, String> for tagCategoryName => tagName
     * @type {{ [key: string]: string; }}
     * @memberof AggregateRequest
     */
    tags?: { [key: string]: string; };
    /**
     * Enum for including future inventory: [futureOnly, futureAndCurrent]
     * @type {string}
     * @memberof AggregateRequest
     */
    includeFutureInventory?: AggregateRequestIncludeFutureInventoryEnum;
    /**
     * Whether to allow items with negative future inventory in the results
     * @type {boolean}
     * @memberof AggregateRequest
     */
    includeNegativeFutureInventory?: boolean;
    /**
     * Future start Date at which the inventory should be allocated against.
     * @type {string}
     * @memberof AggregateRequest
     */
    futureStartDate?: string;
    /**
     * Future end Date at which the inventory should be allocated against.
     * @type {string}
     * @memberof AggregateRequest
     */
    futureEndDate?: string;
    /**
     * Whether to force populate default tags onto the request if they are unspecified for any tag category
     * @type {boolean}
     * @memberof AggregateRequest
     */
    forceDefaultsForUnspecifiedTagCategories?: boolean;
    /**
     * Location Code
     * @type {string}
     * @memberof AggregateRequest
     */
    locationCode?: string;
    /**
     * user id
     * @type {number}
     * @memberof AggregateRequest
     */
    userID?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof AggregateRequest
     */
    pageSize?: number;
    /**
     * which page to show
     * @type {number}
     * @memberof AggregateRequest
     */
    pageNum?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof AggregateRequest
     */
    sortBy?: string;
}


/**
 * @export
 */
export const AggregateRequestIncludeFutureInventoryEnum = {
    FutureOnly: 'futureOnly',
    FutureAndCurrent: 'futureAndCurrent'
} as const;
export type AggregateRequestIncludeFutureInventoryEnum = typeof AggregateRequestIncludeFutureInventoryEnum[keyof typeof AggregateRequestIncludeFutureInventoryEnum];

/**
 * 
 * @export
 * @interface AggregateRequestAllOf
 */
export interface AggregateRequestAllOf {
    /**
     * List of Items to search on
     * @type {Array<InventoryItem>}
     * @memberof AggregateRequestAllOf
     */
    items?: Array<InventoryItem>;
    /**
     * Whether to ignore the safety stock buffer put in place
     * @type {boolean}
     * @memberof AggregateRequestAllOf
     */
    ignoreSafetyStock?: boolean;
    /**
     * Whether to allow items with negative inventory in the results
     * @type {boolean}
     * @memberof AggregateRequestAllOf
     */
    includeNegativeInventory?: boolean;
    /**
     * Whether to limit results to locations that are shipping enabled
     * @type {boolean}
     * @memberof AggregateRequestAllOf
     */
    directShip?: boolean;
    /**
     * Filter results by locations that apply tax (true) or don't (false)
     * @type {boolean}
     * @memberof AggregateRequestAllOf
     */
    transferEnabled?: boolean;
    /**
     * Filter results by pickup enabled (true) or not (false)
     * @type {boolean}
     * @memberof AggregateRequestAllOf
     */
    pickup?: boolean;
    /**
     * Associative Map of <String, String> for tagCategoryName => tagName
     * @type {{ [key: string]: string; }}
     * @memberof AggregateRequestAllOf
     */
    tags?: { [key: string]: string; };
    /**
     * Enum for including future inventory: [futureOnly, futureAndCurrent]
     * @type {string}
     * @memberof AggregateRequestAllOf
     */
    includeFutureInventory?: AggregateRequestAllOfIncludeFutureInventoryEnum;
    /**
     * Whether to allow items with negative future inventory in the results
     * @type {boolean}
     * @memberof AggregateRequestAllOf
     */
    includeNegativeFutureInventory?: boolean;
    /**
     * Future start Date at which the inventory should be allocated against.
     * @type {string}
     * @memberof AggregateRequestAllOf
     */
    futureStartDate?: string;
    /**
     * Future end Date at which the inventory should be allocated against.
     * @type {string}
     * @memberof AggregateRequestAllOf
     */
    futureEndDate?: string;
    /**
     * Whether to force populate default tags onto the request if they are unspecified for any tag category
     * @type {boolean}
     * @memberof AggregateRequestAllOf
     */
    forceDefaultsForUnspecifiedTagCategories?: boolean;
}


/**
 * @export
 */
export const AggregateRequestAllOfIncludeFutureInventoryEnum = {
    FutureOnly: 'futureOnly',
    FutureAndCurrent: 'futureAndCurrent'
} as const;
export type AggregateRequestAllOfIncludeFutureInventoryEnum = typeof AggregateRequestAllOfIncludeFutureInventoryEnum[keyof typeof AggregateRequestAllOfIncludeFutureInventoryEnum];

/**
 * Response for aggregating Inventory
 * @export
 * @interface AggregateResponse
 */
export interface AggregateResponse {
    /**
     * Manufacturer Identifier
     * @type {number}
     * @memberof AggregateResponse
     */
    tenantID?: number;
    /**
     * The quantity the location has in its possession
     * @type {number}
     * @memberof AggregateResponse
     */
    onHand?: number;
    /**
     * The quantity the location has that are available for purchase
     * @type {number}
     * @memberof AggregateResponse
     */
    available?: number;
    /**
     * Part/Product Number
     * @type {string}
     * @memberof AggregateResponse
     */
    partNumber?: string;
    /**
     * Universal Product Code
     * @type {string}
     * @memberof AggregateResponse
     */
    upc?: string;
    /**
     * Stock Keeping Unit
     * @type {string}
     * @memberof AggregateResponse
     */
    sku?: string;
    /**
     * Absolute minimum quantity of this item that should be in stock at any time
     * @type {number}
     * @memberof AggregateResponse
     */
    floor?: number;
    /**
     * Associative Map of <String, String> for tagCategoryName => tagName
     * @type {{ [key: string]: string; }}
     * @memberof AggregateResponse
     */
    tags?: { [key: string]: string; };
    /**
     * Flag for success
     * @type {boolean}
     * @memberof AggregateResponse
     */
    success?: boolean;
    /**
     * List of messages
     * @type {Array<string>}
     * @memberof AggregateResponse
     */
    messages?: Array<string>;
    /**
     * Number of results
     * @type {number}
     * @memberof AggregateResponse
     */
    numResults?: number;
}
/**
 * 
 * @export
 * @interface AggregateResponseAllOf
 */
export interface AggregateResponseAllOf {
    /**
     * Manufacturer Identifier
     * @type {number}
     * @memberof AggregateResponseAllOf
     */
    tenantID?: number;
    /**
     * The quantity the location has in its possession
     * @type {number}
     * @memberof AggregateResponseAllOf
     */
    onHand?: number;
    /**
     * The quantity the location has that are available for purchase
     * @type {number}
     * @memberof AggregateResponseAllOf
     */
    available?: number;
    /**
     * Part/Product Number
     * @type {string}
     * @memberof AggregateResponseAllOf
     */
    partNumber?: string;
    /**
     * Universal Product Code
     * @type {string}
     * @memberof AggregateResponseAllOf
     */
    upc?: string;
    /**
     * Stock Keeping Unit
     * @type {string}
     * @memberof AggregateResponseAllOf
     */
    sku?: string;
    /**
     * Absolute minimum quantity of this item that should be in stock at any time
     * @type {number}
     * @memberof AggregateResponseAllOf
     */
    floor?: number;
    /**
     * Associative Map of <String, String> for tagCategoryName => tagName
     * @type {{ [key: string]: string; }}
     * @memberof AggregateResponseAllOf
     */
    tags?: { [key: string]: string; };
}
/**
 * 
 * @export
 * @interface AllocateInventory500Response
 */
export interface AllocateInventory500Response {
    /**
     * 
     * @type {string}
     * @memberof AllocateInventory500Response
     */
    error?: string;
    /**
     * 
     * @type {BaseResponse}
     * @memberof AllocateInventory500Response
     */
    message?: BaseResponse;
}
/**
 * Request needed for allocating inventory
 * @export
 * @interface AllocateInventoryRequest
 */
export interface AllocateInventoryRequest {
    /**
     * list of AllocateItems
     * @type {Array<AllocateItem>}
     * @memberof AllocateInventoryRequest
     */
    items: Array<AllocateItem>;
    /**
     * order date
     * @type {string}
     * @memberof AllocateInventoryRequest
     */
    orderDate?: string;
    /**
     * order weight
     * @type {number}
     * @memberof AllocateInventoryRequest
     */
    orderWeight?: number;
    /**
     * flag to determine deallocation on decrements
     * @type {boolean}
     * @memberof AllocateInventoryRequest
     */
    decrementOnHandOnDeallocate?: boolean;
    /**
     * flag to determine whether the allocation was due to auto assignment
     * @type {boolean}
     * @memberof AllocateInventoryRequest
     */
    autoAssign?: boolean;
    /**
     * flag to determine whether the runSyncronous flag is set and the allocation should be run synchronously
     * @type {boolean}
     * @memberof AllocateInventoryRequest
     */
    runSynchronous?: boolean;
    /**
     * Location Code
     * @type {string}
     * @memberof AllocateInventoryRequest
     */
    locationCode?: string;
    /**
     * user id
     * @type {number}
     * @memberof AllocateInventoryRequest
     */
    userID?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof AllocateInventoryRequest
     */
    pageSize?: number;
    /**
     * which page to show
     * @type {number}
     * @memberof AllocateInventoryRequest
     */
    pageNum?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof AllocateInventoryRequest
     */
    sortBy?: string;
}
/**
 * 
 * @export
 * @interface AllocateInventoryRequestAllOf
 */
export interface AllocateInventoryRequestAllOf {
    /**
     * list of AllocateItems
     * @type {Array<AllocateItem>}
     * @memberof AllocateInventoryRequestAllOf
     */
    items?: Array<AllocateItem>;
    /**
     * order date
     * @type {string}
     * @memberof AllocateInventoryRequestAllOf
     */
    orderDate?: string;
    /**
     * order weight
     * @type {number}
     * @memberof AllocateInventoryRequestAllOf
     */
    orderWeight?: number;
    /**
     * flag to determine deallocation on decrements
     * @type {boolean}
     * @memberof AllocateInventoryRequestAllOf
     */
    decrementOnHandOnDeallocate?: boolean;
    /**
     * flag to determine whether the allocation was due to auto assignment
     * @type {boolean}
     * @memberof AllocateInventoryRequestAllOf
     */
    autoAssign?: boolean;
    /**
     * flag to determine whether the runSyncronous flag is set and the allocation should be run synchronously
     * @type {boolean}
     * @memberof AllocateInventoryRequestAllOf
     */
    runSynchronous?: boolean;
}
/**
 * Item for Allocation
 * @export
 * @interface AllocateItem
 */
export interface AllocateItem {
    /**
     * part number
     * @type {string}
     * @memberof AllocateItem
     */
    partNumber?: string;
    /**
     * upc
     * @type {string}
     * @memberof AllocateItem
     */
    upc?: string;
    /**
     * sku
     * @type {string}
     * @memberof AllocateItem
     */
    sku?: string;
    /**
     * quantity
     * @type {number}
     * @memberof AllocateItem
     */
    quantity: number;
    /**
     * The Order Number in UCP
     * @type {number}
     * @memberof AllocateItem
     */
    orderID: number;
    /**
     * order item ID
     * @type {number}
     * @memberof AllocateItem
     */
    orderItemID: number;
    /**
     * The Order ID in UCP (GUID)
     * @type {string}
     * @memberof AllocateItem
     */
    ucpOrderID?: string;
    /**
     * Cart ID (GUID)
     * @type {string}
     * @memberof AllocateItem
     */
    cartID?: string;
    /**
     * Reservation ID
     * @type {string}
     * @memberof AllocateItem
     */
    reservationID?: string;
    /**
     * Cart Item ID (GUID)
     * @type {string}
     * @memberof AllocateItem
     */
    cartItemID?: string;
    /**
     * shipment ID
     * @type {number}
     * @memberof AllocateItem
     */
    shipmentID: number;
    /**
     * location Code
     * @type {string}
     * @memberof AllocateItem
     */
    locationCode?: string;
    /**
     * previous order item ID
     * @type {number}
     * @memberof AllocateItem
     */
    previousOrderItemID?: number;
    /**
     * Bin Location Identifier
     * @type {number}
     * @memberof AllocateItem
     */
    binID?: number;
    /**
     * Block assignment of item at product/location level. ONLY allowed on deallocate.
     * @type {boolean}
     * @memberof AllocateItem
     */
    blockAssignment?: boolean;
    /**
     * Hold Block assignment flag of item at product/location level. ONLY allowed on deallocate.
     * @type {boolean}
     * @memberof AllocateItem
     */
    holdBlockAssignment?: boolean;
    /**
     * Associative Map of <String, String> for tagCategoryName => tagName
     * @type {{ [key: string]: string; }}
     * @memberof AllocateItem
     */
    tags?: { [key: string]: string; };
    /**
     * Future Date at which the inventory should be allocated against. Expected format '2020-09-28T12:00:00-0500'
     * @type {string}
     * @memberof AllocateItem
     */
    futureDate?: string;
    /**
     * Extra Uniqueness Identifier used track which lot a product is manufactured in. Only used in Allocate calls.
     * @type {string}
     * @memberof AllocateItem
     */
    lotCode?: string;
    /**
     * Descriptor for the state of the product. Only used in Allocate calls.
     * @type {string}
     * @memberof AllocateItem
     */
    condition?: string;
    /**
     * A serial number unique to a specific, physical unit of inventory. Limit of 30 characters. Only used in Allocate calls.
     * @type {string}
     * @memberof AllocateItem
     */
    serialNumber?: string;
    /**
     * Used by the retailer for storing information related to manufacturing date or expiry date and use date to allocate for better stock management. Only used in Allocate calls.
     * @type {string}
     * @memberof AllocateItem
     */
    date?: string;
    /**
     * Specific inventory record to perform deallocates/fulfills against. Only used for Deallocate/Fulfill calls
     * @type {number}
     * @memberof AllocateItem
     */
    inventoryID?: number;
}
/**
 * Base Request Model
 * @export
 * @interface BaseRequest
 */
export interface BaseRequest {
    /**
     * Location Code
     * @type {string}
     * @memberof BaseRequest
     */
    locationCode?: string;
    /**
     * user id
     * @type {number}
     * @memberof BaseRequest
     */
    userID?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof BaseRequest
     */
    pageSize?: number;
    /**
     * which page to show
     * @type {number}
     * @memberof BaseRequest
     */
    pageNum?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof BaseRequest
     */
    sortBy?: string;
}
/**
 * Base Response Model
 * @export
 * @interface BaseResponse
 */
export interface BaseResponse {
    /**
     * Flag for success
     * @type {boolean}
     * @memberof BaseResponse
     */
    success?: boolean;
    /**
     * List of messages
     * @type {Array<string>}
     * @memberof BaseResponse
     */
    messages?: Array<string>;
    /**
     * Number of results
     * @type {number}
     * @memberof BaseResponse
     */
    numResults?: number;
}
/**
 * Response object for a bin
 * @export
 * @interface Bin
 */
export interface Bin {
    /**
     * Bin Name
     * @type {string}
     * @memberof Bin
     */
    name?: string;
    /**
     * Bin ID
     * @type {number}
     * @memberof Bin
     */
    binID?: number;
    /**
     * Location Code
     * @type {string}
     * @memberof Bin
     */
    locationCode?: string;
    /**
     * Bin Type ID
     * @type {number}
     * @memberof Bin
     */
    binTypeID?: number;
    /**
     * Bin Status ID
     * @type {number}
     * @memberof Bin
     */
    binStatusID?: number;
    /**
     * Flag for success
     * @type {boolean}
     * @memberof Bin
     */
    success?: boolean;
    /**
     * List of messages
     * @type {Array<string>}
     * @memberof Bin
     */
    messages?: Array<string>;
    /**
     * Number of results
     * @type {number}
     * @memberof Bin
     */
    numResults?: number;
}
/**
 * 
 * @export
 * @interface BinAllOf
 */
export interface BinAllOf {
    /**
     * Bin Name
     * @type {string}
     * @memberof BinAllOf
     */
    name?: string;
    /**
     * Bin ID
     * @type {number}
     * @memberof BinAllOf
     */
    binID?: number;
    /**
     * Location Code
     * @type {string}
     * @memberof BinAllOf
     */
    locationCode?: string;
    /**
     * Bin Type ID
     * @type {number}
     * @memberof BinAllOf
     */
    binTypeID?: number;
    /**
     * Bin Status ID
     * @type {number}
     * @memberof BinAllOf
     */
    binStatusID?: number;
}
/**
 * Bin ID Response
 * @export
 * @interface BinIDResponse
 */
export interface BinIDResponse {
    /**
     * Bin ID
     * @type {number}
     * @memberof BinIDResponse
     */
    binID?: number;
}
/**
 * Bin Model
 * @export
 * @interface BinModel
 */
export interface BinModel {
    /**
     * Unique Bin Identifier assigned by the system
     * @type {number}
     * @memberof BinModel
     */
    binID?: number;
    /**
     * Location Identifier of the owning location
     * @type {number}
     * @memberof BinModel
     */
    locationID?: number;
    /**
     * New Bin's Type ID
     * @type {number}
     * @memberof BinModel
     */
    binTypeID?: number;
    /**
     * New Bin's Status ID
     * @type {number}
     * @memberof BinModel
     */
    binStatusID?: number;
    /**
     * Client specified static bin name
     * @type {number}
     * @memberof BinModel
     */
    name?: number;
}
/**
 * A bin and its associated products and quantities
 * @export
 * @interface BinProductQuantities
 */
export interface BinProductQuantities {
    /**
     * Name of the bin
     * @type {string}
     * @memberof BinProductQuantities
     */
    binName?: string;
    /**
     * List of ProductQuantities - Products with their associated quantity
     * @type {Array<ProductQuantity>}
     * @memberof BinProductQuantities
     */
    products?: Array<ProductQuantity>;
}
/**
 * A response object for a bin and its associated products and quantities
 * @export
 * @interface BinProductResponseQuantities
 */
export interface BinProductResponseQuantities {
    /**
     * Name of the bin
     * @type {string}
     * @memberof BinProductResponseQuantities
     */
    binName?: string;
    /**
     * List of ProductQuantities - Products with their associated quantity
     * @type {Array<ProductQuantityResponse>}
     * @memberof BinProductResponseQuantities
     */
    products?: Array<ProductQuantityResponse>;
}
/**
 * Bin Response Object
 * @export
 * @interface BinResponseModel
 */
export interface BinResponseModel {
    /**
     * 
     * @type {BinModel}
     * @memberof BinResponseModel
     */
    bins?: BinModel;
    /**
     * number of results
     * @type {number}
     * @memberof BinResponseModel
     */
    resultCount?: number;
}
/**
 * Request needed for searching for bins
 * @export
 * @interface BinSearchRequest
 */
export interface BinSearchRequest {
    /**
     * Partial match of bin name
     * @type {string}
     * @memberof BinSearchRequest
     */
    binName?: string;
    /**
     * 
     * @type {InventoryProduct}
     * @memberof BinSearchRequest
     */
    product?: InventoryProduct;
    /**
     * Flag for sorting ascending
     * @type {boolean}
     * @memberof BinSearchRequest
     */
    sortAscending?: boolean;
    /**
     * Flag for showing negative inventory
     * @type {boolean}
     * @memberof BinSearchRequest
     */
    showNegativeInventory?: boolean;
    /**
     * Associative Map of <String, String> for tagCategoryName => tagName
     * @type {{ [key: string]: string; }}
     * @memberof BinSearchRequest
     */
    tags?: { [key: string]: string; };
    /**
     * Location Code
     * @type {string}
     * @memberof BinSearchRequest
     */
    locationCode?: string;
    /**
     * user id
     * @type {number}
     * @memberof BinSearchRequest
     */
    userID?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof BinSearchRequest
     */
    pageSize?: number;
    /**
     * which page to show
     * @type {number}
     * @memberof BinSearchRequest
     */
    pageNum?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof BinSearchRequest
     */
    sortBy?: string;
}
/**
 * 
 * @export
 * @interface BinSearchRequestAllOf
 */
export interface BinSearchRequestAllOf {
    /**
     * Partial match of bin name
     * @type {string}
     * @memberof BinSearchRequestAllOf
     */
    binName?: string;
    /**
     * 
     * @type {InventoryProduct}
     * @memberof BinSearchRequestAllOf
     */
    product?: InventoryProduct;
    /**
     * Flag for sorting ascending
     * @type {boolean}
     * @memberof BinSearchRequestAllOf
     */
    sortAscending?: boolean;
    /**
     * Flag for showing negative inventory
     * @type {boolean}
     * @memberof BinSearchRequestAllOf
     */
    showNegativeInventory?: boolean;
    /**
     * Associative Map of <String, String> for tagCategoryName => tagName
     * @type {{ [key: string]: string; }}
     * @memberof BinSearchRequestAllOf
     */
    tags?: { [key: string]: string; };
}
/**
 * Bin Search Response Object
 * @export
 * @interface BinSearchResponse
 */
export interface BinSearchResponse {
    /**
     * List of BinProductQuantities - bins with associated products and quantities
     * @type {Array<BinProductResponseQuantities>}
     * @memberof BinSearchResponse
     */
    binQuantities?: Array<BinProductResponseQuantities>;
    /**
     * Flag for success
     * @type {boolean}
     * @memberof BinSearchResponse
     */
    success?: boolean;
    /**
     * List of messages
     * @type {Array<string>}
     * @memberof BinSearchResponse
     */
    messages?: Array<string>;
    /**
     * Number of results
     * @type {number}
     * @memberof BinSearchResponse
     */
    numResults?: number;
}
/**
 * 
 * @export
 * @interface BinSearchResponseAllOf
 */
export interface BinSearchResponseAllOf {
    /**
     * List of BinProductQuantities - bins with associated products and quantities
     * @type {Array<BinProductResponseQuantities>}
     * @memberof BinSearchResponseAllOf
     */
    binQuantities?: Array<BinProductResponseQuantities>;
}
/**
 * Status of Bin
 * @export
 * @interface BinStatusModel
 */
export interface BinStatusModel {
    /**
     * Bin Status Identifier
     * @type {number}
     * @memberof BinStatusModel
     */
    binStatusID?: number;
    /**
     * Bin Status Description
     * @type {string}
     * @memberof BinStatusModel
     */
    description?: string;
}
/**
 * Type of Bin
 * @export
 * @interface BinTypeModel
 */
export interface BinTypeModel {
    /**
     * Bin Type Identifier
     * @type {number}
     * @memberof BinTypeModel
     */
    binTypeID?: number;
    /**
     * Bin Type Description
     * @type {string}
     * @memberof BinTypeModel
     */
    description?: string;
}
/**
 * Items for enabling blockAssignment
 * @export
 * @interface BlockAssignmentItem
 */
export interface BlockAssignmentItem {
    /**
     * part number
     * @type {string}
     * @memberof BlockAssignmentItem
     */
    partNumber?: string;
    /**
     * upc
     * @type {string}
     * @memberof BlockAssignmentItem
     */
    upc?: string;
    /**
     * sku
     * @type {string}
     * @memberof BlockAssignmentItem
     */
    sku?: string;
    /**
     * quantity
     * @type {number}
     * @memberof BlockAssignmentItem
     */
    quantity?: number;
    /**
     * Block assignment of item at product/location level. ONLY allowed on deallocate.
     * @type {boolean}
     * @memberof BlockAssignmentItem
     */
    blockAssignment: boolean;
    /**
     * Hold Block assignment of item at product/location level. ONLY allowed on deallocate.
     * @type {boolean}
     * @memberof BlockAssignmentItem
     */
    holdBlockAssignment?: boolean;
}
/**
 * Request to block assignment on the product
 * @export
 * @interface BlockAssignmentRequest
 */
export interface BlockAssignmentRequest {
    /**
     * list of items for blocking Assignment
     * @type {Array<BlockAssignmentItem>}
     * @memberof BlockAssignmentRequest
     */
    items: Array<BlockAssignmentItem>;
    /**
     * Location Code
     * @type {string}
     * @memberof BlockAssignmentRequest
     */
    locationCode?: string;
    /**
     * user id
     * @type {number}
     * @memberof BlockAssignmentRequest
     */
    userID?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof BlockAssignmentRequest
     */
    pageSize?: number;
    /**
     * which page to show
     * @type {number}
     * @memberof BlockAssignmentRequest
     */
    pageNum?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof BlockAssignmentRequest
     */
    sortBy?: string;
}
/**
 * 
 * @export
 * @interface BlockAssignmentRequestAllOf
 */
export interface BlockAssignmentRequestAllOf {
    /**
     * list of items for blocking Assignment
     * @type {Array<BlockAssignmentItem>}
     * @memberof BlockAssignmentRequestAllOf
     */
    items?: Array<BlockAssignmentItem>;
}
/**
 * Request needed for creating a new bin
 * @export
 * @interface CreateBinRequest
 */
export interface CreateBinRequest {
    /**
     * Bin Type Identifier
     * @type {number}
     * @memberof CreateBinRequest
     */
    binTypeID?: number;
    /**
     * Bin Status Identifier
     * @type {number}
     * @memberof CreateBinRequest
     */
    binStatusID?: number;
    /**
     * Name
     * @type {string}
     * @memberof CreateBinRequest
     */
    name?: string;
    /**
     * Location Code
     * @type {string}
     * @memberof CreateBinRequest
     */
    locationCode?: string;
    /**
     * user id
     * @type {number}
     * @memberof CreateBinRequest
     */
    userID?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof CreateBinRequest
     */
    pageSize?: number;
    /**
     * which page to show
     * @type {number}
     * @memberof CreateBinRequest
     */
    pageNum?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof CreateBinRequest
     */
    sortBy?: string;
}
/**
 * 
 * @export
 * @interface CreateBinRequestAllOf
 */
export interface CreateBinRequestAllOf {
    /**
     * Bin Type Identifier
     * @type {number}
     * @memberof CreateBinRequestAllOf
     */
    binTypeID?: number;
    /**
     * Bin Status Identifier
     * @type {number}
     * @memberof CreateBinRequestAllOf
     */
    binStatusID?: number;
    /**
     * Name
     * @type {string}
     * @memberof CreateBinRequestAllOf
     */
    name?: string;
}
/**
 * Request needed for creating Export Settings FTP
 * @export
 * @interface CreateExportSettingsFTPRequest
 */
export interface CreateExportSettingsFTPRequest {
    /**
     * Export Settings Name to associate the ftp settings with
     * @type {string}
     * @memberof CreateExportSettingsFTPRequest
     */
    exportSettingsName: string;
    /**
     * 
     * @type {ExportSettingsFTP}
     * @memberof CreateExportSettingsFTPRequest
     */
    exportSettingsFTP: ExportSettingsFTP;
    /**
     * Location Code
     * @type {string}
     * @memberof CreateExportSettingsFTPRequest
     */
    locationCode?: string;
    /**
     * user id
     * @type {number}
     * @memberof CreateExportSettingsFTPRequest
     */
    userID?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof CreateExportSettingsFTPRequest
     */
    pageSize?: number;
    /**
     * which page to show
     * @type {number}
     * @memberof CreateExportSettingsFTPRequest
     */
    pageNum?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof CreateExportSettingsFTPRequest
     */
    sortBy?: string;
}
/**
 * 
 * @export
 * @interface CreateExportSettingsFTPRequestAllOf
 */
export interface CreateExportSettingsFTPRequestAllOf {
    /**
     * Export Settings Name to associate the ftp settings with
     * @type {string}
     * @memberof CreateExportSettingsFTPRequestAllOf
     */
    exportSettingsName?: string;
    /**
     * 
     * @type {ExportSettingsFTP}
     * @memberof CreateExportSettingsFTPRequestAllOf
     */
    exportSettingsFTP?: ExportSettingsFTP;
}
/**
 * Request needed for creating Export Settings GCS
 * @export
 * @interface CreateExportSettingsGcsRequest
 */
export interface CreateExportSettingsGcsRequest {
    /**
     * Export Settings Name to associate the GCS settings with
     * @type {string}
     * @memberof CreateExportSettingsGcsRequest
     */
    exportSettingsName: string;
    /**
     * 
     * @type {ExportSettingsGcs}
     * @memberof CreateExportSettingsGcsRequest
     */
    exportSettingsGcs: ExportSettingsGcs;
    /**
     * Location Code
     * @type {string}
     * @memberof CreateExportSettingsGcsRequest
     */
    locationCode?: string;
    /**
     * user id
     * @type {number}
     * @memberof CreateExportSettingsGcsRequest
     */
    userID?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof CreateExportSettingsGcsRequest
     */
    pageSize?: number;
    /**
     * which page to show
     * @type {number}
     * @memberof CreateExportSettingsGcsRequest
     */
    pageNum?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof CreateExportSettingsGcsRequest
     */
    sortBy?: string;
}
/**
 * 
 * @export
 * @interface CreateExportSettingsGcsRequestAllOf
 */
export interface CreateExportSettingsGcsRequestAllOf {
    /**
     * Export Settings Name to associate the GCS settings with
     * @type {string}
     * @memberof CreateExportSettingsGcsRequestAllOf
     */
    exportSettingsName?: string;
    /**
     * 
     * @type {ExportSettingsGcs}
     * @memberof CreateExportSettingsGcsRequestAllOf
     */
    exportSettingsGcs?: ExportSettingsGcs;
}
/**
 * Request needed for creating Export Settings
 * @export
 * @interface CreateExportSettingsRequest
 */
export interface CreateExportSettingsRequest {
    /**
     * 
     * @type {ExportSettings}
     * @memberof CreateExportSettingsRequest
     */
    exportSettings: ExportSettings;
    /**
     * Location Code
     * @type {string}
     * @memberof CreateExportSettingsRequest
     */
    locationCode?: string;
    /**
     * user id
     * @type {number}
     * @memberof CreateExportSettingsRequest
     */
    userID?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof CreateExportSettingsRequest
     */
    pageSize?: number;
    /**
     * which page to show
     * @type {number}
     * @memberof CreateExportSettingsRequest
     */
    pageNum?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof CreateExportSettingsRequest
     */
    sortBy?: string;
}
/**
 * 
 * @export
 * @interface CreateExportSettingsRequestAllOf
 */
export interface CreateExportSettingsRequestAllOf {
    /**
     * 
     * @type {ExportSettings}
     * @memberof CreateExportSettingsRequestAllOf
     */
    exportSettings?: ExportSettings;
}
/**
 * Request needed for creating Export Settings S3
 * @export
 * @interface CreateExportSettingsS3Request
 */
export interface CreateExportSettingsS3Request {
    /**
     * Export Settings Name to associate the ftp settings with
     * @type {string}
     * @memberof CreateExportSettingsS3Request
     */
    exportSettingsName: string;
    /**
     * 
     * @type {ExportSettingsS3}
     * @memberof CreateExportSettingsS3Request
     */
    exportSettingsS3: ExportSettingsS3;
    /**
     * Location Code
     * @type {string}
     * @memberof CreateExportSettingsS3Request
     */
    locationCode?: string;
    /**
     * user id
     * @type {number}
     * @memberof CreateExportSettingsS3Request
     */
    userID?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof CreateExportSettingsS3Request
     */
    pageSize?: number;
    /**
     * which page to show
     * @type {number}
     * @memberof CreateExportSettingsS3Request
     */
    pageNum?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof CreateExportSettingsS3Request
     */
    sortBy?: string;
}
/**
 * 
 * @export
 * @interface CreateExportSettingsS3RequestAllOf
 */
export interface CreateExportSettingsS3RequestAllOf {
    /**
     * Export Settings Name to associate the ftp settings with
     * @type {string}
     * @memberof CreateExportSettingsS3RequestAllOf
     */
    exportSettingsName?: string;
    /**
     * 
     * @type {ExportSettingsS3}
     * @memberof CreateExportSettingsS3RequestAllOf
     */
    exportSettingsS3?: ExportSettingsS3;
}
/**
 * Request needed for deleting future inventory
 * @export
 * @interface DeleteFutureItemRequest
 */
export interface DeleteFutureItemRequest {
    /**
     * Flag used to differentiate between a test and a non-test run.
     * @type {boolean}
     * @memberof DeleteFutureItemRequest
     */
    dryRun?: boolean;
    /**
     * Flag used to request explicit inventory, location, pick wave, and audit information for each request item.
     * @type {boolean}
     * @memberof DeleteFutureItemRequest
     */
    explicit?: boolean;
    /**
     * An array of locationCodes to be considered for item-deletion purposes. Optional.
     *     All locationCodes associated with the requesting tenant will be considered if no locationCodes are provided.
     * @type {Array<string>}
     * @memberof DeleteFutureItemRequest
     */
    locationCodes?: Array<string>;
    /**
     * Flag used to request deletion of future inventory across all locations (overrides locationCodes).
     * @type {boolean}
     * @memberof DeleteFutureItemRequest
     */
    allLocations?: boolean;
    /**
     * The part number of the item to be deleted. Supports basic regex operators: .*+?^$[]
     * @type {string}
     * @memberof DeleteFutureItemRequest
     */
    partNumber?: string;
    /**
     * The upc of the item to be deleted. Supports basic regex operators: .*+?^$[]
     * @type {string}
     * @memberof DeleteFutureItemRequest
     */
    upc?: string;
    /**
     * The sku of the item to be deleted. Supports basic regex operators: .*+?^$[]
     * @type {string}
     * @memberof DeleteFutureItemRequest
     */
    sku?: string;
    /**
     * Start of future date range to search on. Required field example '2023-01-26T19:59:00+0000'
     * @type {string}
     * @memberof DeleteFutureItemRequest
     */
    futureStartDate?: string;
    /**
     * End of future date range to search on. Required Field example '2023-01-26T19:59:00+0000'
     * @type {string}
     * @memberof DeleteFutureItemRequest
     */
    futureEndDate?: string;
    /**
     * An array of externalIDs to be considered for item-deletion purposes. Optional.
     * @type {Array<string>}
     * @memberof DeleteFutureItemRequest
     */
    externalIDs?: Array<string>;
    /**
     * Track which lot a product is manufactured in
     * @type {string}
     * @memberof DeleteFutureItemRequest
     */
    lotCode?: string;
    /**
     * Describes the state of the product
     * @type {string}
     * @memberof DeleteFutureItemRequest
     */
    condition?: string;
    /**
     * A serial number is unique to a specific, physical unit of inventory
     * @type {string}
     * @memberof DeleteFutureItemRequest
     */
    serialNumber?: string;
    /**
     * Used by the retailer for storing information related to manufacturing date or expiry date and use date to allocate for better stock management
     * @type {string}
     * @memberof DeleteFutureItemRequest
     */
    date?: string;
    /**
     * Flag to determine whether to delete a granular record without granular fields or delete all associated granular records. Only considered when no granular fields are specified.
     * @type {boolean}
     * @memberof DeleteFutureItemRequest
     */
    deleteGranularRecord?: boolean;
}
/**
 * Delete Future Item Response
 * @export
 * @interface DeleteFutureItemResponse
 */
export interface DeleteFutureItemResponse {
    /**
     * Flag used to differentiate between a test and a non-test run.
     * @type {boolean}
     * @memberof DeleteFutureItemResponse
     */
    dryRun?: boolean;
    /**
     * Items deleted due to the request
     * @type {Array<MDeleteItem>}
     * @memberof DeleteFutureItemResponse
     */
    itemsDeleted?: Array<MDeleteItem>;
    /**
     * Flag used to differentiate between a test and a non-test run.
     * @type {boolean}
     * @memberof DeleteFutureItemResponse
     */
    totalInventoryEntriesDeleted?: boolean;
    /**
     * Flag used to differentiate between a test and a non-test run.
     * @type {boolean}
     * @memberof DeleteFutureItemResponse
     */
    totalLocationsAffected?: boolean;
    /**
     * Flag used to differentiate between a test and a non-test run.
     * @type {boolean}
     * @memberof DeleteFutureItemResponse
     */
    totalexternalIDsAffected?: boolean;
    /**
     * Flag used to differentiate between a test and a non-test run.
     * @type {boolean}
     * @memberof DeleteFutureItemResponse
     */
    jobIDs?: boolean;
}
/**
 * Request needed for deleting inventory
 * @export
 * @interface DeleteItemRequest
 */
export interface DeleteItemRequest {
    /**
     * Flag used to differentiate between a test and a non-test run.
     * @type {boolean}
     * @memberof DeleteItemRequest
     */
    dryRun?: boolean;
    /**
     * Flag used to request explicit inventory, location, pick wave, and audit information for each request item.
     * @type {boolean}
     * @memberof DeleteItemRequest
     */
    explicit?: boolean;
    /**
     * An array of locationCodes to be considered for item-deletion purposes. Optional.
     *     All locationCodes associated with the requesting tenant will be considered if no locationCodes are provided.
     * @type {Array<string>}
     * @memberof DeleteItemRequest
     */
    locationCodes?: Array<string>;
    /**
     * Flag used to request deletion of inventory across all locations (overrides locationCodes).
     * @type {boolean}
     * @memberof DeleteItemRequest
     */
    allLocations?: boolean;
    /**
     * The part number of the item to be deleted. Supports basic regex operators: .*+?^$[]
     * @type {string}
     * @memberof DeleteItemRequest
     */
    partNumber?: string;
    /**
     * The upc of the item to be deleted. Supports basic regex operators: .*+?^$[]
     * @type {string}
     * @memberof DeleteItemRequest
     */
    upc?: string;
    /**
     * The sku of the item to be deleted. Supports basic regex operators: .*+?^$[]
     * @type {string}
     * @memberof DeleteItemRequest
     */
    sku?: string;
    /**
     * Associative Map of <String, String> for tagCategoryName => tagName
     * @type {{ [key: string]: string; }}
     * @memberof DeleteItemRequest
     */
    tags?: { [key: string]: string; };
    /**
     * Track which lot a product is manufactured in
     * @type {string}
     * @memberof DeleteItemRequest
     */
    lotCode?: string;
    /**
     * Describes the state of the product
     * @type {string}
     * @memberof DeleteItemRequest
     */
    condition?: string;
    /**
     * A serial number is unique to a specific, physical unit of inventory
     * @type {string}
     * @memberof DeleteItemRequest
     */
    serialNumber?: string;
    /**
     * Used by the retailer for storing information related to manufacturing date or expiry date and use date to allocate for better stock management
     * @type {string}
     * @memberof DeleteItemRequest
     */
    date?: string;
    /**
     * Flag to determine whether to delete a granular record without granular fields or delete all associated granular records. Only considered when no granular fields are specified.
     * @type {boolean}
     * @memberof DeleteItemRequest
     */
    deleteGranularRecord?: boolean;
}
/**
 * Delete Item Response
 * @export
 * @interface DeleteItemResponse
 */
export interface DeleteItemResponse {
    /**
     * Flag used to differentiate between a test and a non-test run.
     * @type {boolean}
     * @memberof DeleteItemResponse
     */
    dryRun?: boolean;
    /**
     * Items deleted due to the request
     * @type {Array<MDeleteItem>}
     * @memberof DeleteItemResponse
     */
    itemsDeleted?: Array<MDeleteItem>;
    /**
     * Flag used to differentiate between a test and a non-test run.
     * @type {boolean}
     * @memberof DeleteItemResponse
     */
    totalAuditsDeleted?: boolean;
    /**
     * Flag used to differentiate between a test and a non-test run.
     * @type {boolean}
     * @memberof DeleteItemResponse
     */
    totalInventoryEntriesDeleted?: boolean;
    /**
     * Flag used to differentiate between a test and a non-test run.
     * @type {boolean}
     * @memberof DeleteItemResponse
     */
    totalLocationsAffected?: boolean;
    /**
     * Flag used to differentiate between a test and a non-test run.
     * @type {boolean}
     * @memberof DeleteItemResponse
     */
    totalPickWavesDeleted?: boolean;
    /**
     * Flag used to differentiate between a test and a non-test run.
     * @type {boolean}
     * @memberof DeleteItemResponse
     */
    totalProductsDeleted?: boolean;
    /**
     * Flag used to differentiate between a test and a non-test run.
     * @type {boolean}
     * @memberof DeleteItemResponse
     */
    jobIDs?: boolean;
}
/**
 * Request needed for deleting inventory
 * @export
 * @interface DeleteItemsRequest
 */
export interface DeleteItemsRequest {
    /**
     * Flag used to differentiate between a test and a non-test run.
     * @type {boolean}
     * @memberof DeleteItemsRequest
     */
    dryRun?: boolean;
    /**
     * Flag used to request explicit inventory, location, pick wave, and audit information for each request item.
     * @type {boolean}
     * @memberof DeleteItemsRequest
     */
    explicit?: boolean;
    /**
     * An array of locationCodes to be considered for item-deletion purposes. Optional.
     *     All locationCodes associated with the requesting tenant will be considered if no locationCodes are provided.
     * @type {Array<string>}
     * @memberof DeleteItemsRequest
     */
    locationCodes?: Array<string>;
    /**
     * Flag used to request deletion of inventory across all locations (overrides locationCodes).
     * @type {boolean}
     * @memberof DeleteItemsRequest
     */
    allLocations?: boolean;
    /**
     * List of items to delete. Supports basic regex operators: .*+?^$[]
     * @type {Array<InventoryItem>}
     * @memberof DeleteItemsRequest
     */
    items?: Array<InventoryItem>;
    /**
     * Associative Map of <String, String> for tagCategoryName => tagName
     * @type {{ [key: string]: string; }}
     * @memberof DeleteItemsRequest
     */
    tags?: { [key: string]: string; };
}
/**
 * Deleted Count Response Model
 * @export
 * @interface DeletedCountResponse
 */
export interface DeletedCountResponse {
    /**
     * Count of deleted entries
     * @type {number}
     * @memberof DeletedCountResponse
     */
    deleted?: number;
}
/**
 * Deleted Response Model
 * @export
 * @interface DeletedResponse
 */
export interface DeletedResponse {
    /**
     * Whether the delete was successful
     * @type {boolean}
     * @memberof DeletedResponse
     */
    deleted?: boolean;
}
/**
 * Response for each export job creation
 * @export
 * @interface ExportInventoryJobResponse
 */
export interface ExportInventoryJobResponse {
    /**
     * Export Settings ID
     * @type {number}
     * @memberof ExportInventoryJobResponse
     */
    exportSettingsID?: number;
    /**
     * ID of newly created job
     * @type {number}
     * @memberof ExportInventoryJobResponse
     */
    jobID?: number;
}
/**
 * Export Inventory Request
 * @export
 * @interface ExportInventoryRequest
 */
export interface ExportInventoryRequest {
    /**
     * Name of the Export Settings to use
     * @type {string}
     * @memberof ExportInventoryRequest
     */
    exportSettingsName?: string;
    /**
     * Name of the FTP Settings to use. Will only check for this if exportID is already set
     * @type {string}
     * @memberof ExportInventoryRequest
     */
    exportSettingsFTPName?: string;
    /**
     * Name of the S3 Settings to use. Will only check for this if exportID is already set
     * @type {string}
     * @memberof ExportInventoryRequest
     */
    exportSettingsS3Name?: string;
    /**
     * Name of the Gcs Settings to use. Will only check for this if exportID is already set
     * @type {string}
     * @memberof ExportInventoryRequest
     */
    exportSettingsGcsName?: string;
    /**
     * Flag for sending the exports to the development droppoint
     * @type {boolean}
     * @memberof ExportInventoryRequest
     */
    development?: boolean;
    /**
     * Export id post import
     * @type {number}
     * @memberof ExportInventoryRequest
     */
    exportSettingsId?: number;
    /**
     * FTP id post import
     * @type {number}
     * @memberof ExportInventoryRequest
     */
    exportSettingsFtpId?: number;
    /**
     * Location Code
     * @type {string}
     * @memberof ExportInventoryRequest
     */
    locationCode?: string;
    /**
     * user id
     * @type {number}
     * @memberof ExportInventoryRequest
     */
    userID?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof ExportInventoryRequest
     */
    pageSize?: number;
    /**
     * which page to show
     * @type {number}
     * @memberof ExportInventoryRequest
     */
    pageNum?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof ExportInventoryRequest
     */
    sortBy?: string;
}
/**
 * 
 * @export
 * @interface ExportInventoryRequestAllOf
 */
export interface ExportInventoryRequestAllOf {
    /**
     * Name of the Export Settings to use
     * @type {string}
     * @memberof ExportInventoryRequestAllOf
     */
    exportSettingsName?: string;
    /**
     * Name of the FTP Settings to use. Will only check for this if exportID is already set
     * @type {string}
     * @memberof ExportInventoryRequestAllOf
     */
    exportSettingsFTPName?: string;
    /**
     * Name of the S3 Settings to use. Will only check for this if exportID is already set
     * @type {string}
     * @memberof ExportInventoryRequestAllOf
     */
    exportSettingsS3Name?: string;
    /**
     * Name of the Gcs Settings to use. Will only check for this if exportID is already set
     * @type {string}
     * @memberof ExportInventoryRequestAllOf
     */
    exportSettingsGcsName?: string;
    /**
     * Flag for sending the exports to the development droppoint
     * @type {boolean}
     * @memberof ExportInventoryRequestAllOf
     */
    development?: boolean;
    /**
     * Export id post import
     * @type {number}
     * @memberof ExportInventoryRequestAllOf
     */
    exportSettingsId?: number;
    /**
     * FTP id post import
     * @type {number}
     * @memberof ExportInventoryRequestAllOf
     */
    exportSettingsFtpId?: number;
}
/**
 * Response for Export Inventory api
 * @export
 * @interface ExportInventoryResponse
 */
export interface ExportInventoryResponse {
    /**
     * List of Export Inventory Job Responses
     * @type {Array<ExportInventoryJobResponse>}
     * @memberof ExportInventoryResponse
     */
    exportInventoryJobResponses?: Array<ExportInventoryJobResponse>;
}
/**
 * Export Settings
 * @export
 * @interface ExportSettings
 */
export interface ExportSettings {
    /**
     * Export Settings Name
     * @type {string}
     * @memberof ExportSettings
     */
    name: string;
    /**
     * Format for the export file
     * @type {string}
     * @memberof ExportSettings
     */
    fileFormat: ExportSettingsFileFormatEnum;
    /**
     * Type of exportGG for the settings
     * @type {string}
     * @memberof ExportSettings
     */
    exportType: ExportSettingsExportTypeEnum;
    /**
     * Flag for only sending available
     * @type {boolean}
     * @memberof ExportSettings
     */
    onlySendAvailable?: boolean;
    /**
     * Flag for only sending from active locations
     * @type {boolean}
     * @memberof ExportSettings
     */
    onlySendActiveLocations?: boolean;
    /**
     * List of export FTP settings
     * @type {Array<ExportSettingsFTP>}
     * @memberof ExportSettings
     */
    ftpInformation: Array<ExportSettingsFTP>;
    /**
     * List of export S3 settings
     * @type {Array<ExportSettingsS3>}
     * @memberof ExportSettings
     */
    s3Information?: Array<ExportSettingsS3>;
    /**
     * List of export S3 settings
     * @type {Array<ExportSettingsGcs>}
     * @memberof ExportSettings
     */
    gcsInformation?: Array<ExportSettingsGcs>;
    /**
     * Flag for exporting as a single file
     * @type {boolean}
     * @memberof ExportSettings
     */
    exportSingleFile?: boolean;
    /**
     * Safety Stock
     * @type {string}
     * @memberof ExportSettings
     */
    safetyStock?: ExportSettingsSafetyStockEnum;
    /**
     * Floor
     * @type {string}
     * @memberof ExportSettings
     */
    floor?: ExportSettingsFloorEnum;
    /**
     * LTD
     * @type {string}
     * @memberof ExportSettings
     */
    ltd?: ExportSettingsLtdEnum;
    /**
     * Name for the export file
     * @type {string}
     * @memberof ExportSettings
     */
    fileName?: string;
    /**
     * Flag for using shortened filenames
     * @type {boolean}
     * @memberof ExportSettings
     */
    shortenFilename?: boolean;
    /**
     * Flag for including attributes
     * @type {boolean}
     * @memberof ExportSettings
     */
    includeAttributes?: boolean;
    /**
     * Flag for zipping the files
     * @type {boolean}
     * @memberof ExportSettings
     */
    zipFiles?: boolean;
    /**
     * Name for the zipped file
     * @type {string}
     * @memberof ExportSettings
     */
    zipFileName?: string;
    /**
     * Untransformed File Name
     * @type {string}
     * @memberof ExportSettings
     */
    untransformedFileName?: string;
    /**
     * Untransformed Zip File Name
     * @type {string}
     * @memberof ExportSettings
     */
    untransformedZipFileName?: string;
    /**
     * Location Group Ids associated with the settings
     * @type {Array<number>}
     * @memberof ExportSettings
     */
    locationGroupIDs?: Array<number>;
    /**
     * Site Ids associated with the settings
     * @type {Array<number>}
     * @memberof ExportSettings
     */
    siteIDs?: Array<number>;
    /**
     * Flag for only using locations with Direct Ship enabled
     * @type {boolean}
     * @memberof ExportSettings
     */
    directShip?: boolean;
    /**
     * Flag for only using locations with In Store Pickup enabled
     * @type {boolean}
     * @memberof ExportSettings
     */
    pickup?: boolean;
    /**
     * Flag for only using locations with Transfer enabled
     * @type {boolean}
     * @memberof ExportSettings
     */
    transfer?: boolean;
    /**
     * Enum for export productMapping
     * @type {string}
     * @memberof ExportSettings
     */
    productMapping?: ExportSettingsProductMappingEnum;
    /**
     * Flag for marking the setting as a classic export
     * @type {boolean}
     * @memberof ExportSettings
     */
    isClassic?: boolean;
    /**
     * Flag for excluding negative inventory locations
     * @type {boolean}
     * @memberof ExportSettings
     */
    ignoreNegativeInventoryLocations?: boolean;
    /**
     * Associative Map of <String, String> for tagCategoryName => tagName
     * @type {{ [key: string]: string; }}
     * @memberof ExportSettings
     */
    tags?: { [key: string]: string; };
}


/**
 * @export
 */
export const ExportSettingsFileFormatEnum = {
    Xml: 'XML',
    Csv: 'CSV'
} as const;
export type ExportSettingsFileFormatEnum = typeof ExportSettingsFileFormatEnum[keyof typeof ExportSettingsFileFormatEnum];

/**
 * @export
 */
export const ExportSettingsExportTypeEnum = {
    Aggregate: 'AGGREGATE',
    Location: 'LOCATION'
} as const;
export type ExportSettingsExportTypeEnum = typeof ExportSettingsExportTypeEnum[keyof typeof ExportSettingsExportTypeEnum];

/**
 * @export
 */
export const ExportSettingsSafetyStockEnum = {
    Max: 'SAFETY_STOCK_MAX',
    Min: 'SAFETY_STOCK_MIN',
    Avg: 'SAFETY_STOCK_AVG',
    Sum: 'SAFETY_STOCK_SUM'
} as const;
export type ExportSettingsSafetyStockEnum = typeof ExportSettingsSafetyStockEnum[keyof typeof ExportSettingsSafetyStockEnum];

/**
 * @export
 */
export const ExportSettingsFloorEnum = {
    Max: 'FLOOR_MAX',
    Min: 'FLOOR_MIN',
    Avg: 'FLOOR_AVG',
    Sum: 'FLOOR_SUM'
} as const;
export type ExportSettingsFloorEnum = typeof ExportSettingsFloorEnum[keyof typeof ExportSettingsFloorEnum];

/**
 * @export
 */
export const ExportSettingsLtdEnum = {
    Max: 'LTD_MAX',
    Min: 'LTD_MIN',
    Avg: 'LTD_AVG',
    Sum: 'LTD_SUM'
} as const;
export type ExportSettingsLtdEnum = typeof ExportSettingsLtdEnum[keyof typeof ExportSettingsLtdEnum];

/**
 * @export
 */
export const ExportSettingsProductMappingEnum = {
    PartNumberWithUpc: 'SWAP_PART_NUMBER_WITH_UPC',
    SkuWithUpc: 'SWAP_SKU_WITH_UPC'
} as const;
export type ExportSettingsProductMappingEnum = typeof ExportSettingsProductMappingEnum[keyof typeof ExportSettingsProductMappingEnum];

/**
 * Export Settings FTP
 * @export
 * @interface ExportSettingsFTP
 */
export interface ExportSettingsFTP {
    /**
     * Flag for Active State
     * @type {boolean}
     * @memberof ExportSettingsFTP
     */
    active?: boolean;
    /**
     * Export Settings ID
     * @type {number}
     * @memberof ExportSettingsFTP
     */
    exportSettingsID?: number;
    /**
     * Export Settings FTP ID
     * @type {number}
     * @memberof ExportSettingsFTP
     */
    exportSettingsFTPID?: number;
    /**
     * Export Settings FTP Name
     * @type {string}
     * @memberof ExportSettingsFTP
     */
    name: string;
    /**
     * FTP Server Address
     * @type {string}
     * @memberof ExportSettingsFTP
     */
    ftpServer: string;
    /**
     * FTP Server Port
     * @type {number}
     * @memberof ExportSettingsFTP
     */
    ftpPort: number;
    /**
     * FTP Server Directory
     * @type {string}
     * @memberof ExportSettingsFTP
     */
    ftpDirectory: string;
    /**
     * FTP Server Control File Directory
     * @type {string}
     * @memberof ExportSettingsFTP
     */
    ftpDirectoryControlFile?: string;
    /**
     * FTP Username
     * @type {string}
     * @memberof ExportSettingsFTP
     */
    ftpUser?: string;
    /**
     * FTP Password
     * @type {string}
     * @memberof ExportSettingsFTP
     */
    ftpPassword?: string;
    /**
     * FTP Delivery Class. Defaults to ExportDeliveryDefault
     * @type {string}
     * @memberof ExportSettingsFTP
     */
    deliveryClass?: string;
    /**
     * Control File
     * @type {string}
     * @memberof ExportSettingsFTP
     */
    controlFile?: string;
    /**
     * Control File Email
     * @type {string}
     * @memberof ExportSettingsFTP
     */
    controlFileEmail?: string;
    /**
     * Remote File Name
     * @type {string}
     * @memberof ExportSettingsFTP
     */
    remoteFileName?: string;
    /**
     * Control File Name
     * @type {string}
     * @memberof ExportSettingsFTP
     */
    controlFileName?: string;
    /**
     * Endpoint
     * @type {string}
     * @memberof ExportSettingsFTP
     */
    endpoint?: string;
    /**
     * Environment
     * @type {string}
     * @memberof ExportSettingsFTP
     */
    environment?: string;
}
/**
 * Export Settings GCS
 * @export
 * @interface ExportSettingsGcs
 */
export interface ExportSettingsGcs {
    /**
     * Export Settings ID
     * @type {number}
     * @memberof ExportSettingsGcs
     */
    exportSettingsID?: number;
    /**
     * Export Settings GCS ID
     * @type {number}
     * @memberof ExportSettingsGcs
     */
    exportSettingsGcsID?: number;
    /**
     * Export Settings GCS Name
     * @type {string}
     * @memberof ExportSettingsGcs
     */
    name: string;
    /**
     * Flag for Active State
     * @type {boolean}
     * @memberof ExportSettingsGcs
     */
    active?: boolean;
    /**
     * GCS Bucket (directory)
     * @type {string}
     * @memberof ExportSettingsGcs
     */
    gcsBucket?: string;
}
/**
 * Job ID Response
 * @export
 * @interface ExportSettingsResponse
 */
export interface ExportSettingsResponse {
    /**
     * Created Export Settings Name
     * @type {string}
     * @memberof ExportSettingsResponse
     */
    exportSettingsName?: string;
    /**
     * Created Export Settings FTP Name
     * @type {string}
     * @memberof ExportSettingsResponse
     */
    exportSettingsFTPName?: string;
    /**
     * Created Export Settings S3 Name
     * @type {string}
     * @memberof ExportSettingsResponse
     */
    exportSettingsS3Name?: string;
    /**
     * Created Export Settings GCS Name
     * @type {string}
     * @memberof ExportSettingsResponse
     */
    exportSettingsGcsName?: string;
}
/**
 * Export Settings S3
 * @export
 * @interface ExportSettingsS3
 */
export interface ExportSettingsS3 {
    /**
     * Export Settings ID
     * @type {number}
     * @memberof ExportSettingsS3
     */
    exportSettingsID?: number;
    /**
     * Export Settings S3 ID
     * @type {number}
     * @memberof ExportSettingsS3
     */
    exportSettingsS3ID?: number;
    /**
     * Export Settings S3 Name
     * @type {string}
     * @memberof ExportSettingsS3
     */
    name: string;
    /**
     * Flag for Active State
     * @type {boolean}
     * @memberof ExportSettingsS3
     */
    active?: boolean;
    /**
     * S3 Region
     * @type {string}
     * @memberof ExportSettingsS3
     */
    region: string;
    /**
     * S3 Bucket (directory)
     * @type {string}
     * @memberof ExportSettingsS3
     */
    bucket: string;
}
/**
 * Request for Fetch File Configs
 * @export
 * @interface FetchFileConfigRequest
 */
export interface FetchFileConfigRequest {
    /**
     * Fetch File Config ID
     * @type {number}
     * @memberof FetchFileConfigRequest
     */
    fetchFileConfigID?: number;
    /**
     * Flag for active state
     * @type {boolean}
     * @memberof FetchFileConfigRequest
     */
    active: boolean;
    /**
     * Email List
     * @type {string}
     * @memberof FetchFileConfigRequest
     */
    emailList?: string;
    /**
     * Flag for Refresh Enabled
     * @type {boolean}
     * @memberof FetchFileConfigRequest
     */
    refreshEnabled?: boolean;
    /**
     * Description for the refresh file
     * @type {string}
     * @memberof FetchFileConfigRequest
     */
    refreshFileDescription?: string;
    /**
     * Flag for Update Enabled
     * @type {boolean}
     * @memberof FetchFileConfigRequest
     */
    updateEnabled?: boolean;
    /**
     * Description for the update file
     * @type {string}
     * @memberof FetchFileConfigRequest
     */
    updateFileDescription?: string;
    /**
     * FTP server address
     * @type {string}
     * @memberof FetchFileConfigRequest
     */
    ftpServer: string;
    /**
     * FTP server username
     * @type {string}
     * @memberof FetchFileConfigRequest
     */
    ftpUsername: string;
    /**
     * FTP server password
     * @type {string}
     * @memberof FetchFileConfigRequest
     */
    ftpPassword: string;
    /**
     * FTP server port
     * @type {number}
     * @memberof FetchFileConfigRequest
     */
    ftpPort?: number;
    /**
     * FTP server remote path
     * @type {string}
     * @memberof FetchFileConfigRequest
     */
    ftpRemotePath: string;
    /**
     * FTP server remote path archive
     * @type {string}
     * @memberof FetchFileConfigRequest
     */
    ftpRemotePathArchive?: string;
    /**
     * GCS Bucket
     * @type {string}
     * @memberof FetchFileConfigRequest
     */
    gcsBucket?: string;
    /**
     * GCS Path
     * @type {string}
     * @memberof FetchFileConfigRequest
     */
    gcsPath?: string;
    /**
     * GCS Archive Path
     * @type {string}
     * @memberof FetchFileConfigRequest
     */
    gcsArchivePath?: string;
    /**
     * S3 Region
     * @type {string}
     * @memberof FetchFileConfigRequest
     */
    region?: string;
    /**
     * S3 Bucket
     * @type {string}
     * @memberof FetchFileConfigRequest
     */
    bucket?: string;
    /**
     * S3 Bucket Path (directory)
     * @type {string}
     * @memberof FetchFileConfigRequest
     */
    s3Path?: string;
    /**
     * S3 Archive Bucket
     * @type {string}
     * @memberof FetchFileConfigRequest
     */
    archiveBucket?: string;
    /**
     * S3 Archive Bucket Path (directory)
     * @type {string}
     * @memberof FetchFileConfigRequest
     */
    s3ArchivePath?: string;
    /**
     * Lock name
     * @type {string}
     * @memberof FetchFileConfigRequest
     */
    lockName: string;
    /**
     * Enum denoting action post processing
     * @type {number}
     * @memberof FetchFileConfigRequest
     */
    postProcessAction: number;
    /**
     * Flag for using control file
     * @type {boolean}
     * @memberof FetchFileConfigRequest
     */
    useControlFile?: boolean;
    /**
     * Flag for using multiple files
     * @type {boolean}
     * @memberof FetchFileConfigRequest
     */
    multipleFiles?: boolean;
    /**
     * Flag for converting negatives to zero
     * @type {boolean}
     * @memberof FetchFileConfigRequest
     */
    zeroOutNegatives?: boolean;
    /**
     * Flag for if its a test ftp config
     * @type {boolean}
     * @memberof FetchFileConfigRequest
     */
    testFTPConfigs?: boolean;
    /**
     * List of field names
     * @type {Array<string>}
     * @memberof FetchFileConfigRequest
     */
    fieldNameMap?: Array<string>;
    /**
     * Flag for ignoring extra fields
     * @type {boolean}
     * @memberof FetchFileConfigRequest
     */
    ignoreExtraFields?: boolean;
    /**
     * Flag to convert null quantities to zero
     * @type {boolean}
     * @memberof FetchFileConfigRequest
     */
    blankQuantityIsZero?: boolean;
    /**
     * Delimiter
     * @type {string}
     * @memberof FetchFileConfigRequest
     */
    csvDelimiter?: string;
    /**
     * Enum for fetch file productMapping
     * @type {string}
     * @memberof FetchFileConfigRequest
     */
    productMapping?: FetchFileConfigRequestProductMappingEnum;
    /**
     * Location Code
     * @type {string}
     * @memberof FetchFileConfigRequest
     */
    locationCode?: string;
    /**
     * user id
     * @type {number}
     * @memberof FetchFileConfigRequest
     */
    userID?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof FetchFileConfigRequest
     */
    pageSize?: number;
    /**
     * which page to show
     * @type {number}
     * @memberof FetchFileConfigRequest
     */
    pageNum?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof FetchFileConfigRequest
     */
    sortBy?: string;
}


/**
 * @export
 */
export const FetchFileConfigRequestProductMappingEnum = {
    PartNumberWithUpc: 'SWAP_PART_NUMBER_WITH_UPC',
    SkuWithUpc: 'SWAP_SKU_WITH_UPC'
} as const;
export type FetchFileConfigRequestProductMappingEnum = typeof FetchFileConfigRequestProductMappingEnum[keyof typeof FetchFileConfigRequestProductMappingEnum];

/**
 * 
 * @export
 * @interface FetchFileConfigRequestAllOf
 */
export interface FetchFileConfigRequestAllOf {
    /**
     * Fetch File Config ID
     * @type {number}
     * @memberof FetchFileConfigRequestAllOf
     */
    fetchFileConfigID?: number;
    /**
     * Flag for active state
     * @type {boolean}
     * @memberof FetchFileConfigRequestAllOf
     */
    active?: boolean;
    /**
     * Email List
     * @type {string}
     * @memberof FetchFileConfigRequestAllOf
     */
    emailList?: string;
    /**
     * Flag for Refresh Enabled
     * @type {boolean}
     * @memberof FetchFileConfigRequestAllOf
     */
    refreshEnabled?: boolean;
    /**
     * Description for the refresh file
     * @type {string}
     * @memberof FetchFileConfigRequestAllOf
     */
    refreshFileDescription?: string;
    /**
     * Flag for Update Enabled
     * @type {boolean}
     * @memberof FetchFileConfigRequestAllOf
     */
    updateEnabled?: boolean;
    /**
     * Description for the update file
     * @type {string}
     * @memberof FetchFileConfigRequestAllOf
     */
    updateFileDescription?: string;
    /**
     * FTP server address
     * @type {string}
     * @memberof FetchFileConfigRequestAllOf
     */
    ftpServer?: string;
    /**
     * FTP server username
     * @type {string}
     * @memberof FetchFileConfigRequestAllOf
     */
    ftpUsername?: string;
    /**
     * FTP server password
     * @type {string}
     * @memberof FetchFileConfigRequestAllOf
     */
    ftpPassword?: string;
    /**
     * FTP server port
     * @type {number}
     * @memberof FetchFileConfigRequestAllOf
     */
    ftpPort?: number;
    /**
     * FTP server remote path
     * @type {string}
     * @memberof FetchFileConfigRequestAllOf
     */
    ftpRemotePath?: string;
    /**
     * FTP server remote path archive
     * @type {string}
     * @memberof FetchFileConfigRequestAllOf
     */
    ftpRemotePathArchive?: string;
    /**
     * GCS Bucket
     * @type {string}
     * @memberof FetchFileConfigRequestAllOf
     */
    gcsBucket?: string;
    /**
     * GCS Path
     * @type {string}
     * @memberof FetchFileConfigRequestAllOf
     */
    gcsPath?: string;
    /**
     * GCS Archive Path
     * @type {string}
     * @memberof FetchFileConfigRequestAllOf
     */
    gcsArchivePath?: string;
    /**
     * S3 Region
     * @type {string}
     * @memberof FetchFileConfigRequestAllOf
     */
    region?: string;
    /**
     * S3 Bucket
     * @type {string}
     * @memberof FetchFileConfigRequestAllOf
     */
    bucket?: string;
    /**
     * S3 Bucket Path (directory)
     * @type {string}
     * @memberof FetchFileConfigRequestAllOf
     */
    s3Path?: string;
    /**
     * S3 Archive Bucket
     * @type {string}
     * @memberof FetchFileConfigRequestAllOf
     */
    archiveBucket?: string;
    /**
     * S3 Archive Bucket Path (directory)
     * @type {string}
     * @memberof FetchFileConfigRequestAllOf
     */
    s3ArchivePath?: string;
    /**
     * Lock name
     * @type {string}
     * @memberof FetchFileConfigRequestAllOf
     */
    lockName?: string;
    /**
     * Enum denoting action post processing
     * @type {number}
     * @memberof FetchFileConfigRequestAllOf
     */
    postProcessAction?: number;
    /**
     * Flag for using control file
     * @type {boolean}
     * @memberof FetchFileConfigRequestAllOf
     */
    useControlFile?: boolean;
    /**
     * Flag for using multiple files
     * @type {boolean}
     * @memberof FetchFileConfigRequestAllOf
     */
    multipleFiles?: boolean;
    /**
     * Flag for converting negatives to zero
     * @type {boolean}
     * @memberof FetchFileConfigRequestAllOf
     */
    zeroOutNegatives?: boolean;
    /**
     * Flag for if its a test ftp config
     * @type {boolean}
     * @memberof FetchFileConfigRequestAllOf
     */
    testFTPConfigs?: boolean;
    /**
     * List of field names
     * @type {Array<string>}
     * @memberof FetchFileConfigRequestAllOf
     */
    fieldNameMap?: Array<string>;
    /**
     * Flag for ignoring extra fields
     * @type {boolean}
     * @memberof FetchFileConfigRequestAllOf
     */
    ignoreExtraFields?: boolean;
    /**
     * Flag to convert null quantities to zero
     * @type {boolean}
     * @memberof FetchFileConfigRequestAllOf
     */
    blankQuantityIsZero?: boolean;
    /**
     * Delimiter
     * @type {string}
     * @memberof FetchFileConfigRequestAllOf
     */
    csvDelimiter?: string;
    /**
     * Enum for fetch file productMapping
     * @type {string}
     * @memberof FetchFileConfigRequestAllOf
     */
    productMapping?: FetchFileConfigRequestAllOfProductMappingEnum;
}


/**
 * @export
 */
export const FetchFileConfigRequestAllOfProductMappingEnum = {
    PartNumberWithUpc: 'SWAP_PART_NUMBER_WITH_UPC',
    SkuWithUpc: 'SWAP_SKU_WITH_UPC'
} as const;
export type FetchFileConfigRequestAllOfProductMappingEnum = typeof FetchFileConfigRequestAllOfProductMappingEnum[keyof typeof FetchFileConfigRequestAllOfProductMappingEnum];

/**
 * FetchFileConnectionResponse
 * @export
 * @interface FetchFileConnectionResponse
 */
export interface FetchFileConnectionResponse {
    /**
     * List of files found on the specified sftp directory
     * @type {Array<string>}
     * @memberof FetchFileConnectionResponse
     */
    ftpFiles?: Array<string>;
    /**
     * List of files found on the specified sftp archive directory
     * @type {Array<string>}
     * @memberof FetchFileConnectionResponse
     */
    ftpArchiveFiles?: Array<string>;
    /**
     * List of files found on the specified gcs bucket/path
     * @type {Array<string>}
     * @memberof FetchFileConnectionResponse
     */
    gcsFiles?: Array<string>;
    /**
     * List of files found on the specified gcs archive bucket/path
     * @type {Array<string>}
     * @memberof FetchFileConnectionResponse
     */
    gcsArchiveFiles?: Array<string>;
    /**
     * List of files found on the specified s3 bucket/path
     * @type {Array<string>}
     * @memberof FetchFileConnectionResponse
     */
    s3Files?: Array<string>;
    /**
     * List of files found on the specified s3 archive bucket/path
     * @type {Array<string>}
     * @memberof FetchFileConnectionResponse
     */
    s3ArchiveFiles?: Array<string>;
}
/**
 * Fetch File Config Model
 * @export
 * @interface GetFetchFileConfigItem
 */
export interface GetFetchFileConfigItem {
    /**
     * Fetch File Config ID
     * @type {number}
     * @memberof GetFetchFileConfigItem
     */
    fetchFileConfigID?: number;
    /**
     * Tenant ID
     * @type {number}
     * @memberof GetFetchFileConfigItem
     */
    tenantID?: number;
    /**
     * Active
     * @type {boolean}
     * @memberof GetFetchFileConfigItem
     */
    active?: boolean;
    /**
     * Time config was last modified
     * @type {string}
     * @memberof GetFetchFileConfigItem
     */
    lastModified?: string;
    /**
     * Email List
     * @type {string}
     * @memberof GetFetchFileConfigItem
     */
    emailList?: string;
    /**
     * Flag for Refresh Enabled
     * @type {boolean}
     * @memberof GetFetchFileConfigItem
     */
    refreshEnabled?: boolean;
    /**
     * Description for the refresh file
     * @type {string}
     * @memberof GetFetchFileConfigItem
     */
    refreshFileDescription?: string;
    /**
     * Flag for Update Enabled
     * @type {boolean}
     * @memberof GetFetchFileConfigItem
     */
    updateEnabled?: boolean;
    /**
     * Description for the update file
     * @type {string}
     * @memberof GetFetchFileConfigItem
     */
    updateFileDescription?: string;
    /**
     * FTP server address
     * @type {string}
     * @memberof GetFetchFileConfigItem
     */
    ftpServer?: string;
    /**
     * FTP server username
     * @type {string}
     * @memberof GetFetchFileConfigItem
     */
    ftpUsername?: string;
    /**
     * FTP server password
     * @type {string}
     * @memberof GetFetchFileConfigItem
     */
    ftpPassword?: string;
    /**
     * FTP server port
     * @type {number}
     * @memberof GetFetchFileConfigItem
     */
    ftpPort?: number;
    /**
     * FTP server remote path
     * @type {string}
     * @memberof GetFetchFileConfigItem
     */
    ftpRemotePath?: string;
    /**
     * FTP server remote path archive
     * @type {string}
     * @memberof GetFetchFileConfigItem
     */
    ftpRemotePathArchive?: string;
    /**
     * S3 Region
     * @type {string}
     * @memberof GetFetchFileConfigItem
     */
    region?: string;
    /**
     * S3 Bucket
     * @type {string}
     * @memberof GetFetchFileConfigItem
     */
    bucket?: string;
    /**
     * S3 Bucket Path (directory)
     * @type {string}
     * @memberof GetFetchFileConfigItem
     */
    s3Path?: string;
    /**
     * S3 Archive Bucket
     * @type {string}
     * @memberof GetFetchFileConfigItem
     */
    archiveBucket?: string;
    /**
     * S3 Archive Bucket Path (directory)
     * @type {string}
     * @memberof GetFetchFileConfigItem
     */
    s3ArchivePath?: string;
    /**
     * Lock name
     * @type {string}
     * @memberof GetFetchFileConfigItem
     */
    lockName?: string;
    /**
     * Enum denoting action post processing
     * @type {number}
     * @memberof GetFetchFileConfigItem
     */
    postProcessAction?: number;
    /**
     * Flag for using control file
     * @type {boolean}
     * @memberof GetFetchFileConfigItem
     */
    useControlFile?: boolean;
    /**
     * Flag for using multiple files
     * @type {boolean}
     * @memberof GetFetchFileConfigItem
     */
    multipleFiles?: boolean;
    /**
     * Flag for converting negatives to zero
     * @type {boolean}
     * @memberof GetFetchFileConfigItem
     */
    zeroOutNegatives?: boolean;
    /**
     * List of field names
     * @type {Array<string>}
     * @memberof GetFetchFileConfigItem
     */
    fieldNameMap?: Array<string>;
    /**
     * Flag for ignoring extra fields
     * @type {boolean}
     * @memberof GetFetchFileConfigItem
     */
    ignoreExtraFields?: boolean;
    /**
     * Flag to convert null quantities to zero
     * @type {boolean}
     * @memberof GetFetchFileConfigItem
     */
    blankQuantityIsZero?: boolean;
    /**
     * CSV Delimiter
     * @type {string}
     * @memberof GetFetchFileConfigItem
     */
    csvDelimiter?: string;
    /**
     * Flag for exporting after refresh
     * @type {boolean}
     * @memberof GetFetchFileConfigItem
     */
    exportAfterRefresh?: boolean;
    /**
     * Export id post import
     * @type {number}
     * @memberof GetFetchFileConfigItem
     */
    postImportExportId?: number;
    /**
     * FTP id post import
     * @type {number}
     * @memberof GetFetchFileConfigItem
     */
    postImportFtpId?: number;
    /**
     * Enum for fetch file mapping
     * @type {string}
     * @memberof GetFetchFileConfigItem
     */
    productMapping?: GetFetchFileConfigItemProductMappingEnum;
    /**
     * GCS Bucket
     * @type {string}
     * @memberof GetFetchFileConfigItem
     */
    gcsBucket?: string;
    /**
     * GCS Path (directory)
     * @type {string}
     * @memberof GetFetchFileConfigItem
     */
    gcsPath?: string;
    /**
     * GCS Archive Bucket
     * @type {string}
     * @memberof GetFetchFileConfigItem
     */
    gcsArchivePath?: string;
}


/**
 * @export
 */
export const GetFetchFileConfigItemProductMappingEnum = {
    PartNumberWithUpc: 'SWAP_PART_NUMBER_WITH_UPC',
    SkuWithUpc: 'SWAP_SKU_WITH_UPC'
} as const;
export type GetFetchFileConfigItemProductMappingEnum = typeof GetFetchFileConfigItemProductMappingEnum[keyof typeof GetFetchFileConfigItemProductMappingEnum];

/**
 * Get Fetch File Config Response
 * @export
 * @interface GetFetchFileConfigResponse
 */
export interface GetFetchFileConfigResponse {
    /**
     * List of Fetch File Configurations
     * @type {Array<GetFetchFileConfigItem>}
     * @memberof GetFetchFileConfigResponse
     */
    items?: Array<GetFetchFileConfigItem>;
}
/**
 * 
 * @export
 * @interface GetShipmentInventoryAllocations500Response
 */
export interface GetShipmentInventoryAllocations500Response {
    /**
     * 
     * @type {string}
     * @memberof GetShipmentInventoryAllocations500Response
     */
    error?: string;
    /**
     * 
     * @type {ShipmentInventoryAllocationResponse}
     * @memberof GetShipmentInventoryAllocations500Response
     */
    message?: ShipmentInventoryAllocationResponse;
}
/**
 * 
 * @export
 * @interface InvalidateCache200Response
 */
export interface InvalidateCache200Response {
    /**
     * 
     * @type {string}
     * @memberof InvalidateCache200Response
     */
    message?: string;
}
/**
 * 
 * @export
 * @interface InvalidateCache400Response
 */
export interface InvalidateCache400Response {
    /**
     * 
     * @type {string}
     * @memberof InvalidateCache400Response
     */
    error?: string;
}
/**
 * 
 * @export
 * @interface InvalidateCache500Response
 */
export interface InvalidateCache500Response {
    /**
     * 
     * @type {string}
     * @memberof InvalidateCache500Response
     */
    error?: string;
}
/**
 * Request to invalidate a specific cache entry by its key
 * @export
 * @interface InvalidateCacheRequest
 */
export interface InvalidateCacheRequest {
    /**
     * Cache key to invalidate
     * @type {string}
     * @memberof InvalidateCacheRequest
     */
    cacheKey: string;
    /**
     * Location Code
     * @type {string}
     * @memberof InvalidateCacheRequest
     */
    locationCode?: string;
    /**
     * user id
     * @type {number}
     * @memberof InvalidateCacheRequest
     */
    userID?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof InvalidateCacheRequest
     */
    pageSize?: number;
    /**
     * which page to show
     * @type {number}
     * @memberof InvalidateCacheRequest
     */
    pageNum?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof InvalidateCacheRequest
     */
    sortBy?: string;
}
/**
 * 
 * @export
 * @interface InvalidateCacheRequestAllOf
 */
export interface InvalidateCacheRequestAllOf {
    /**
     * Cache key to invalidate
     * @type {string}
     * @memberof InvalidateCacheRequestAllOf
     */
    cacheKey?: string;
}
/**
 * InventoryAllocationResponse Object
 * @export
 * @interface InventoryAllocationResponse
 */
export interface InventoryAllocationResponse {
    /**
     * order item ID
     * @type {number}
     * @memberof InventoryAllocationResponse
     */
    orderItemID?: number;
    /**
     * upc
     * @type {string}
     * @memberof InventoryAllocationResponse
     */
    upc?: string;
    /**
     * state
     * @type {string}
     * @memberof InventoryAllocationResponse
     */
    state?: string;
    /**
     * quantity
     * @type {number}
     * @memberof InventoryAllocationResponse
     */
    quantity?: number;
    /**
     * Future Date at which the inventory should be allocated against. Expected format '2020-09-28T12:00:00-0500'
     * @type {string}
     * @memberof InventoryAllocationResponse
     */
    futureDate?: string;
    /**
     * External ID
     * @type {string}
     * @memberof InventoryAllocationResponse
     */
    externalId?: string;
    /**
     * Associative Map of <String, String> for tagCategoryName => tagName
     * @type {{ [key: string]: string; }}
     * @memberof InventoryAllocationResponse
     */
    tags?: { [key: string]: string; };
}
/**
 * Future Inventory Model
 * @export
 * @interface InventoryFutureInventory
 */
export interface InventoryFutureInventory {
    /**
     * Future Inventory unique identifier.
     * @type {number}
     * @memberof InventoryFutureInventory
     */
    futureInventoryID?: number;
    /**
     * Expected change in the actual onhand inventory value when this future inventory record is released.
     * @type {number}
     * @memberof InventoryFutureInventory
     */
    onhand?: number;
    /**
     * Expected change in the actual available inventory value when this future inventory record is released.
     * @type {number}
     * @memberof InventoryFutureInventory
     */
    available?: number;
    /**
     * Expected change in the actual allocated inventory value when this future inventory record is released.
     * @type {number}
     * @memberof InventoryFutureInventory
     */
    allocated?: number;
    /**
     * Number of new expected pending items that would be created by releasing this future inventory record assuming no actual inventory is available
     * @type {number}
     * @memberof InventoryFutureInventory
     */
    pending?: number;
    /**
     * Type of future inventory update: REFRESH or ADJUST.
     * @type {string}
     * @memberof InventoryFutureInventory
     */
    type?: string;
    /**
     * Date at which this inventory will become available. Expected format '2020-09-28T12:00:00-0500'
     * @type {string}
     * @memberof InventoryFutureInventory
     */
    deliveryDate?: string;
    /**
     * Date the inventory was created.
     * @type {string}
     * @memberof InventoryFutureInventory
     */
    createDate?: string;
}
/**
 * Item
 * @export
 * @interface InventoryItem
 */
export interface InventoryItem {
    /**
     * Part/Product Number
     * @type {string}
     * @memberof InventoryItem
     */
    partNumber?: string;
    /**
     * Universal Product Code
     * @type {string}
     * @memberof InventoryItem
     */
    upc?: string;
    /**
     * Stock Keeping Unit
     * @type {string}
     * @memberof InventoryItem
     */
    sku?: string;
    /**
     * Associative Map of <String, String> for tagCategoryName => tagName
     * @type {{ [key: string]: string; }}
     * @memberof InventoryItem
     */
    tags?: { [key: string]: string; };
}
/**
 * Product within a bin
 * @export
 * @interface InventoryProduct
 */
export interface InventoryProduct {
    /**
     * Part Number
     * @type {string}
     * @memberof InventoryProduct
     */
    partNumber?: string;
    /**
     * UPC
     * @type {string}
     * @memberof InventoryProduct
     */
    upc?: string;
    /**
     * SKU
     * @type {string}
     * @memberof InventoryProduct
     */
    sku?: string;
}
/**
 * Request for getting Inventory
 * @export
 * @interface InventoryRequest
 */
export interface InventoryRequest {
    /**
     * Inventory Request Type Enum
     * @type {string}
     * @memberof InventoryRequest
     */
    type: InventoryRequestTypeEnum;
    /**
     * List of Items to search on
     * @type {Array<ItemQuantity>}
     * @memberof InventoryRequest
     */
    items: Array<ItemQuantity>;
    /**
     * 
     * @type {RequestLocation}
     * @memberof InventoryRequest
     */
    requestLocation?: RequestLocation;
    /**
     * The maximum number of results to return, defaults to 100 for most
     * @type {number}
     * @memberof InventoryRequest
     */
    limit?: number;
    /**
     * List of location codes that are allowed to be included in results
     * @type {Array<string>}
     * @memberof InventoryRequest
     */
    locationWhitelist?: Array<string>;
    /**
     * List of location codes that should be returned before all others, preventing them from being excluded by limit
     * @type {Array<string>}
     * @memberof InventoryRequest
     */
    locationPriorityList?: Array<string>;
    /**
     * List of location codes that are NOT allowed to be included in results
     * @type {Array<string>}
     * @memberof InventoryRequest
     */
    locationBlacklist?: Array<string>;
    /**
     * Whether to ignore the safety stock buffer put in place
     * @type {boolean}
     * @memberof InventoryRequest
     */
    ignoreSafetyStock?: boolean;
    /**
     * Whether to allow items with negative inventory in the results
     * @type {boolean}
     * @memberof InventoryRequest
     */
    includeNegativeInventory?: boolean;
    /**
     * Whether to limit results to locations that are shipping enabled
     * @type {boolean}
     * @memberof InventoryRequest
     */
    directShip?: boolean;
    /**
     * Filter results by locations that have transfer enabled (true) or don't (false)
     * @type {boolean}
     * @memberof InventoryRequest
     */
    transferEnabled?: boolean;
    /**
     * Filter results by locations that have finderbot enabled (true) or don't (false)
     * @type {boolean}
     * @memberof InventoryRequest
     */
    pickup?: boolean;
    /**
     * Filter results by locations that have aggregate export enabled (true) or don't (false)
     * @type {boolean}
     * @memberof InventoryRequest
     */
    includeInAggregateExport?: boolean;
    /**
     * Filter results by locations that have physical storefronts (true) or don't (false)
     * @type {boolean}
     * @memberof InventoryRequest
     */
    includeInLocationExport?: boolean;
    /**
     * Filter out results that are blocked from assignment (at the product/location level) 
     * @type {boolean}
     * @memberof InventoryRequest
     */
    excludeBlockedAssignment?: boolean;
    /**
     * Flag to include attributes or not
     * @type {boolean}
     * @memberof InventoryRequest
     */
    includeAttributes?: boolean;
    /**
     * If set to true, include future inventory in response (records that were set with a deliveryDate).
     * @type {boolean}
     * @memberof InventoryRequest
     */
    includeFutureInventory?: boolean;
    /**
     * Whether to allow items with negative future inventory in the results
     * @type {boolean}
     * @memberof InventoryRequest
     */
    includeNegativeFutureInventory?: boolean;
    /**
     * DateTime to filter for only future inventory with a delivery date before or equal to the given date
     * @type {string}
     * @memberof InventoryRequest
     */
    deliveryDateBefore?: string;
    /**
     * DateTime to filter for only future inventory with a delivery date after or equal to the given date
     * @type {string}
     * @memberof InventoryRequest
     */
    deliveryDateAfter?: string;
    /**
     * What to sort the inventory results by. Only used for GetInventoryByLocation calls (locationCode must be set)
     * @type {string}
     * @memberof InventoryRequest
     */
    sortByEnum?: InventoryRequestSortByEnumEnum;
    /**
     * Whether to sort by descending order or not. Must be used in conjunction with the sortByEnum value
     * @type {boolean}
     * @memberof InventoryRequest
     */
    sortDescending?: boolean;
    /**
     * Whether to force populate default tags onto the request if they are unspecified for any tag category
     * @type {boolean}
     * @memberof InventoryRequest
     */
    forceDefaultsForUnspecifiedTagCategories?: boolean;
    /**
     * Associative Map of <String, String> for tagCategoryName => tagName
     * @type {{ [key: string]: string; }}
     * @memberof InventoryRequest
     */
    tags?: { [key: string]: string; };
    /**
     * Location Code
     * @type {string}
     * @memberof InventoryRequest
     */
    locationCode?: string;
    /**
     * user id
     * @type {number}
     * @memberof InventoryRequest
     */
    userID?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof InventoryRequest
     */
    pageSize?: number;
    /**
     * which page to show
     * @type {number}
     * @memberof InventoryRequest
     */
    pageNum?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof InventoryRequest
     */
    sortBy?: string;
}


/**
 * @export
 */
export const InventoryRequestTypeEnum = {
    All: 'ALL',
    Partial: 'PARTIAL',
    Any: 'ANY',
    AllStores: 'ALL_STORES'
} as const;
export type InventoryRequestTypeEnum = typeof InventoryRequestTypeEnum[keyof typeof InventoryRequestTypeEnum];

/**
 * @export
 */
export const InventoryRequestSortByEnumEnum = {
    OnHand: 'ON_HAND',
    Available: 'AVAILABLE',
    Allocated: 'ALLOCATED',
    PartNumber: 'PART_NUMBER',
    ProductId: 'PRODUCT_ID'
} as const;
export type InventoryRequestSortByEnumEnum = typeof InventoryRequestSortByEnumEnum[keyof typeof InventoryRequestSortByEnumEnum];

/**
 * 
 * @export
 * @interface InventoryRequestAllOf
 */
export interface InventoryRequestAllOf {
    /**
     * Inventory Request Type Enum
     * @type {string}
     * @memberof InventoryRequestAllOf
     */
    type?: InventoryRequestAllOfTypeEnum;
    /**
     * List of Items to search on
     * @type {Array<ItemQuantity>}
     * @memberof InventoryRequestAllOf
     */
    items?: Array<ItemQuantity>;
    /**
     * 
     * @type {RequestLocation}
     * @memberof InventoryRequestAllOf
     */
    requestLocation?: RequestLocation;
    /**
     * The maximum number of results to return, defaults to 100 for most
     * @type {number}
     * @memberof InventoryRequestAllOf
     */
    limit?: number;
    /**
     * List of location codes that are allowed to be included in results
     * @type {Array<string>}
     * @memberof InventoryRequestAllOf
     */
    locationWhitelist?: Array<string>;
    /**
     * List of location codes that should be returned before all others, preventing them from being excluded by limit
     * @type {Array<string>}
     * @memberof InventoryRequestAllOf
     */
    locationPriorityList?: Array<string>;
    /**
     * List of location codes that are NOT allowed to be included in results
     * @type {Array<string>}
     * @memberof InventoryRequestAllOf
     */
    locationBlacklist?: Array<string>;
    /**
     * Whether to ignore the safety stock buffer put in place
     * @type {boolean}
     * @memberof InventoryRequestAllOf
     */
    ignoreSafetyStock?: boolean;
    /**
     * Whether to allow items with negative inventory in the results
     * @type {boolean}
     * @memberof InventoryRequestAllOf
     */
    includeNegativeInventory?: boolean;
    /**
     * Whether to limit results to locations that are shipping enabled
     * @type {boolean}
     * @memberof InventoryRequestAllOf
     */
    directShip?: boolean;
    /**
     * Filter results by locations that have transfer enabled (true) or don't (false)
     * @type {boolean}
     * @memberof InventoryRequestAllOf
     */
    transferEnabled?: boolean;
    /**
     * Filter results by locations that have finderbot enabled (true) or don't (false)
     * @type {boolean}
     * @memberof InventoryRequestAllOf
     */
    pickup?: boolean;
    /**
     * Filter results by locations that have aggregate export enabled (true) or don't (false)
     * @type {boolean}
     * @memberof InventoryRequestAllOf
     */
    includeInAggregateExport?: boolean;
    /**
     * Filter results by locations that have physical storefronts (true) or don't (false)
     * @type {boolean}
     * @memberof InventoryRequestAllOf
     */
    includeInLocationExport?: boolean;
    /**
     * Filter out results that are blocked from assignment (at the product/location level) 
     * @type {boolean}
     * @memberof InventoryRequestAllOf
     */
    excludeBlockedAssignment?: boolean;
    /**
     * Flag to include attributes or not
     * @type {boolean}
     * @memberof InventoryRequestAllOf
     */
    includeAttributes?: boolean;
    /**
     * If set to true, include future inventory in response (records that were set with a deliveryDate).
     * @type {boolean}
     * @memberof InventoryRequestAllOf
     */
    includeFutureInventory?: boolean;
    /**
     * Whether to allow items with negative future inventory in the results
     * @type {boolean}
     * @memberof InventoryRequestAllOf
     */
    includeNegativeFutureInventory?: boolean;
    /**
     * DateTime to filter for only future inventory with a delivery date before or equal to the given date
     * @type {string}
     * @memberof InventoryRequestAllOf
     */
    deliveryDateBefore?: string;
    /**
     * DateTime to filter for only future inventory with a delivery date after or equal to the given date
     * @type {string}
     * @memberof InventoryRequestAllOf
     */
    deliveryDateAfter?: string;
    /**
     * What to sort the inventory results by. Only used for GetInventoryByLocation calls (locationCode must be set)
     * @type {string}
     * @memberof InventoryRequestAllOf
     */
    sortByEnum?: InventoryRequestAllOfSortByEnumEnum;
    /**
     * Whether to sort by descending order or not. Must be used in conjunction with the sortByEnum value
     * @type {boolean}
     * @memberof InventoryRequestAllOf
     */
    sortDescending?: boolean;
    /**
     * Whether to force populate default tags onto the request if they are unspecified for any tag category
     * @type {boolean}
     * @memberof InventoryRequestAllOf
     */
    forceDefaultsForUnspecifiedTagCategories?: boolean;
    /**
     * Associative Map of <String, String> for tagCategoryName => tagName
     * @type {{ [key: string]: string; }}
     * @memberof InventoryRequestAllOf
     */
    tags?: { [key: string]: string; };
}


/**
 * @export
 */
export const InventoryRequestAllOfTypeEnum = {
    All: 'ALL',
    Partial: 'PARTIAL',
    Any: 'ANY',
    AllStores: 'ALL_STORES'
} as const;
export type InventoryRequestAllOfTypeEnum = typeof InventoryRequestAllOfTypeEnum[keyof typeof InventoryRequestAllOfTypeEnum];

/**
 * @export
 */
export const InventoryRequestAllOfSortByEnumEnum = {
    OnHand: 'ON_HAND',
    Available: 'AVAILABLE',
    Allocated: 'ALLOCATED',
    PartNumber: 'PART_NUMBER',
    ProductId: 'PRODUCT_ID'
} as const;
export type InventoryRequestAllOfSortByEnumEnum = typeof InventoryRequestAllOfSortByEnumEnum[keyof typeof InventoryRequestAllOfSortByEnumEnum];

/**
 * Inventory Response
 * @export
 * @interface InventoryResponse
 */
export interface InventoryResponse {
    /**
     * Location Name
     * @type {string}
     * @memberof InventoryResponse
     */
    locationName?: string;
    /**
     * Location Code
     * @type {string}
     * @memberof InventoryResponse
     */
    locationCode?: string;
    /**
     * Tenant Identifier
     * @type {number}
     * @memberof InventoryResponse
     */
    tenantID?: number;
    /**
     * The quantity the location has in its possession
     * @type {number}
     * @memberof InventoryResponse
     */
    onHand?: number;
    /**
     * The quantity the location has that are available for purchase
     * @type {number}
     * @memberof InventoryResponse
     */
    available?: number;
    /**
     * The quantity the location has that are already allocated.
     * @type {number}
     * @memberof InventoryResponse
     */
    allocated?: number;
    /**
     * The quantity the location has that are pending.
     * @type {number}
     * @memberof InventoryResponse
     */
    pending?: number;
    /**
     * Part/Product Number
     * @type {string}
     * @memberof InventoryResponse
     */
    partNumber?: string;
    /**
     * Universal Product Code
     * @type {string}
     * @memberof InventoryResponse
     */
    upc?: string;
    /**
     * Stock Keeping Unit
     * @type {string}
     * @memberof InventoryResponse
     */
    sku?: string;
    /**
     * Whether or not the product is blocked for assignment
     * @type {boolean}
     * @memberof InventoryResponse
     */
    blockAssignment?: boolean;
    /**
     * Custom field used for store prioritization
     * @type {number}
     * @memberof InventoryResponse
     */
    ltd?: number;
    /**
     * Absolute minimum quantity of this item that should be in stock at any time
     * @type {number}
     * @memberof InventoryResponse
     */
    floor?: number;
    /**
     * Quantity of this item the location wants to keep in stock to ensure stock isn't completely depleted
     * @type {number}
     * @memberof InventoryResponse
     */
    safetyStock?: number;
    /**
     * The distance in miles from this location to the item's destination
     * @type {number}
     * @memberof InventoryResponse
     */
    distance?: number;
    /**
     * Whether this location can ship to a consumer
     * @type {boolean}
     * @memberof InventoryResponse
     */
    directShip?: boolean;
    /**
     * Whether the location can ship to another location (store), thus restocking that location.
     * @type {boolean}
     * @memberof InventoryResponse
     */
    transferEnabled?: boolean;
    /**
     * Whether a consumer can pick up product at this location (store)
     * @type {boolean}
     * @memberof InventoryResponse
     */
    pickup?: boolean;
    /**
     * The country code of this location
     * @type {string}
     * @memberof InventoryResponse
     */
    countryCode?: string;
    /**
     * The currency identifier for the retailPrice
     * @type {number}
     * @memberof InventoryResponse
     */
    currencyID?: number;
    /**
     * The price of the product at this location
     * @type {number}
     * @memberof InventoryResponse
     */
    retailPrice?: number;
    /**
     * The inventory locator name of the individual item
     * @type {string}
     * @memberof InventoryResponse
     */
    inventoryLocatorName?: string;
    /**
     * List of Inventory Attributes
     * @type {Array<string>}
     * @memberof InventoryResponse
     */
    attributes?: Array<string>;
    /**
     * 
     * @type {Array<InventoryTagQuantity>}
     * @memberof InventoryResponse
     */
    taggedInventory?: Array<InventoryTagQuantity>;
    /**
     * 
     * @type {Array<InventoryFutureInventory>}
     * @memberof InventoryResponse
     */
    futureInventory?: Array<InventoryFutureInventory>;
    /**
     * Flag for success
     * @type {boolean}
     * @memberof InventoryResponse
     */
    success?: boolean;
    /**
     * List of messages
     * @type {Array<string>}
     * @memberof InventoryResponse
     */
    messages?: Array<string>;
    /**
     * Number of results
     * @type {number}
     * @memberof InventoryResponse
     */
    numResults?: number;
}
/**
 * 
 * @export
 * @interface InventoryResponseAllOf
 */
export interface InventoryResponseAllOf {
    /**
     * Location Name
     * @type {string}
     * @memberof InventoryResponseAllOf
     */
    locationName?: string;
    /**
     * Location Code
     * @type {string}
     * @memberof InventoryResponseAllOf
     */
    locationCode?: string;
    /**
     * Tenant Identifier
     * @type {number}
     * @memberof InventoryResponseAllOf
     */
    tenantID?: number;
    /**
     * The quantity the location has in its possession
     * @type {number}
     * @memberof InventoryResponseAllOf
     */
    onHand?: number;
    /**
     * The quantity the location has that are available for purchase
     * @type {number}
     * @memberof InventoryResponseAllOf
     */
    available?: number;
    /**
     * The quantity the location has that are already allocated.
     * @type {number}
     * @memberof InventoryResponseAllOf
     */
    allocated?: number;
    /**
     * The quantity the location has that are pending.
     * @type {number}
     * @memberof InventoryResponseAllOf
     */
    pending?: number;
    /**
     * Part/Product Number
     * @type {string}
     * @memberof InventoryResponseAllOf
     */
    partNumber?: string;
    /**
     * Universal Product Code
     * @type {string}
     * @memberof InventoryResponseAllOf
     */
    upc?: string;
    /**
     * Stock Keeping Unit
     * @type {string}
     * @memberof InventoryResponseAllOf
     */
    sku?: string;
    /**
     * Whether or not the product is blocked for assignment
     * @type {boolean}
     * @memberof InventoryResponseAllOf
     */
    blockAssignment?: boolean;
    /**
     * Custom field used for store prioritization
     * @type {number}
     * @memberof InventoryResponseAllOf
     */
    ltd?: number;
    /**
     * Absolute minimum quantity of this item that should be in stock at any time
     * @type {number}
     * @memberof InventoryResponseAllOf
     */
    floor?: number;
    /**
     * Quantity of this item the location wants to keep in stock to ensure stock isn't completely depleted
     * @type {number}
     * @memberof InventoryResponseAllOf
     */
    safetyStock?: number;
    /**
     * The distance in miles from this location to the item's destination
     * @type {number}
     * @memberof InventoryResponseAllOf
     */
    distance?: number;
    /**
     * Whether this location can ship to a consumer
     * @type {boolean}
     * @memberof InventoryResponseAllOf
     */
    directShip?: boolean;
    /**
     * Whether the location can ship to another location (store), thus restocking that location.
     * @type {boolean}
     * @memberof InventoryResponseAllOf
     */
    transferEnabled?: boolean;
    /**
     * Whether a consumer can pick up product at this location (store)
     * @type {boolean}
     * @memberof InventoryResponseAllOf
     */
    pickup?: boolean;
    /**
     * The country code of this location
     * @type {string}
     * @memberof InventoryResponseAllOf
     */
    countryCode?: string;
    /**
     * The currency identifier for the retailPrice
     * @type {number}
     * @memberof InventoryResponseAllOf
     */
    currencyID?: number;
    /**
     * The price of the product at this location
     * @type {number}
     * @memberof InventoryResponseAllOf
     */
    retailPrice?: number;
    /**
     * The inventory locator name of the individual item
     * @type {string}
     * @memberof InventoryResponseAllOf
     */
    inventoryLocatorName?: string;
    /**
     * List of Inventory Attributes
     * @type {Array<string>}
     * @memberof InventoryResponseAllOf
     */
    attributes?: Array<string>;
    /**
     * 
     * @type {Array<InventoryTagQuantity>}
     * @memberof InventoryResponseAllOf
     */
    taggedInventory?: Array<InventoryTagQuantity>;
    /**
     * 
     * @type {Array<InventoryFutureInventory>}
     * @memberof InventoryResponseAllOf
     */
    futureInventory?: Array<InventoryFutureInventory>;
}
/**
 * Request/Response object for a tag
 * @export
 * @interface InventoryTag
 */
export interface InventoryTag {
    /**
     * Tag ID
     * @type {number}
     * @memberof InventoryTag
     */
    tagID?: number;
    /**
     * Tag Value
     * @type {string}
     * @memberof InventoryTag
     */
    tagValue?: string;
    /**
     * Whether or not this tag is the default tag for its category.
     * @type {boolean}
     * @memberof InventoryTag
     */
    isDefault?: boolean;
    /**
     * Percentage of available inventory this tag will get when the percentage update is performed. Must be between 0 and 100 (inclusive).
     * @type {number}
     * @memberof InventoryTag
     */
    percent?: number;
    /**
     * Date this tag was created
     * @type {string}
     * @memberof InventoryTag
     */
    created?: string;
    /**
     * Date this tag was last updated
     * @type {string}
     * @memberof InventoryTag
     */
    updated?: string;
}
/**
 * Response object for a tag quantity
 * @export
 * @interface InventoryTagQuantity
 */
export interface InventoryTagQuantity {
    /**
     * The quantity the the location has in its possession for this tag
     * @type {number}
     * @memberof InventoryTagQuantity
     */
    onHand?: number;
    /**
     * The quantity the location has that are available for purchase for this tag
     * @type {number}
     * @memberof InventoryTagQuantity
     */
    available?: number;
    /**
     * The quantity the location has that are already allocated for this tag
     * @type {number}
     * @memberof InventoryTagQuantity
     */
    allocated?: number;
    /**
     * The quantity the location has that are pending for this tag
     * @type {number}
     * @memberof InventoryTagQuantity
     */
    pending?: number;
    /**
     * Associative Map of <String, String> for tagCategoryName => tagName
     * @type {{ [key: string]: string; }}
     * @memberof InventoryTagQuantity
     */
    tags?: { [key: string]: string; };
    /**
     * 
     * @type {Array<InventoryFutureInventory>}
     * @memberof InventoryTagQuantity
     */
    futureInventory?: Array<InventoryFutureInventory>;
}
/**
 * Item Quantity Model
 * @export
 * @interface ItemQuantity
 */
export interface ItemQuantity {
    /**
     * Part/Product Number
     * @type {string}
     * @memberof ItemQuantity
     */
    partNumber?: string;
    /**
     * Universal Product Code
     * @type {string}
     * @memberof ItemQuantity
     */
    upc?: string;
    /**
     * Stock Keeping Unit
     * @type {string}
     * @memberof ItemQuantity
     */
    sku?: string;
    /**
     * Quantity
     * @type {number}
     * @memberof ItemQuantity
     */
    quantity?: number;
    /**
     * Associative Map of <String, String> for tagCategoryName => tagName
     * @type {{ [key: string]: string; }}
     * @memberof ItemQuantity
     */
    tags?: { [key: string]: string; };
}
/**
 * Job ID Response
 * @export
 * @interface JobIDResponse
 */
export interface JobIDResponse {
    /**
     * Job ID
     * @type {number}
     * @memberof JobIDResponse
     */
    jobID?: number;
}
/**
 * Response for getting a job
 * @export
 * @interface JobQueueResponse
 */
export interface JobQueueResponse {
    /**
     * Internal identifier that uniquely identifies a single job
     * @type {number}
     * @memberof JobQueueResponse
     */
    jobID?: number;
    /**
     * Unique internal identifier of the tenant that owns the job
     * @type {number}
     * @memberof JobQueueResponse
     */
    tenantID?: number;
    /**
     * Unique internal Identifier of the owning location
     * @type {string}
     * @memberof JobQueueResponse
     */
    locationCode?: string;
    /**
     * Purpose of the job
     * @type {string}
     * @memberof JobQueueResponse
     */
    type?: JobQueueResponseTypeEnum;
    /**
     * Time and date the job was added to the queue in ISO8601 format in UTC
     * @type {string}
     * @memberof JobQueueResponse
     */
    added?: string;
    /**
     * Time and date the job was started in ISO8601 format in UTC
     * @type {string}
     * @memberof JobQueueResponse
     */
    started?: string;
    /**
     * Time and date the job was finished in ISO8601 format in UTC
     * @type {string}
     * @memberof JobQueueResponse
     */
    finished?: string;
    /**
     * The full name of the file that was picked up at the secure droppoint server before being split up by location. Applies only to refresh and adjust jobs created via file fetch process
     * @type {string}
     * @memberof JobQueueResponse
     */
    originalFilename?: string;
    /**
     * True if the job was not created from a fetched file
     * @type {boolean}
     * @memberof JobQueueResponse
     */
    hasData?: boolean;
    /**
     * The number of items processed, only for job types REFRESH and ADJUST
     * @type {number}
     * @memberof JobQueueResponse
     */
    itemCount?: number;
    /**
     * Current status of job completion
     * @type {string}
     * @memberof JobQueueResponse
     */
    status?: JobQueueResponseStatusEnum;
    /**
     * Flag for success
     * @type {boolean}
     * @memberof JobQueueResponse
     */
    success?: boolean;
    /**
     * List of messages
     * @type {Array<string>}
     * @memberof JobQueueResponse
     */
    messages?: Array<string>;
    /**
     * Number of results
     * @type {number}
     * @memberof JobQueueResponse
     */
    numResults?: number;
}


/**
 * @export
 */
export const JobQueueResponseTypeEnum = {
    Refresh: 'REFRESH',
    Adjust: 'ADJUST',
    ReleaseShipments: 'RELEASE_SHIPMENTS',
    CreatePickWave: 'CREATE_PICK_WAVE',
    ClosePickWave: 'CLOSE_PICK_WAVE',
    PutAwayFile: 'PUT_AWAY_FILE',
    ShortPickError: 'SHORT_PICK_ERROR',
    BinAuditStart: 'BIN_AUDIT_START',
    BinAuditCompletion: 'BIN_AUDIT_COMPLETION',
    CreateBinAudit: 'CREATE_BIN_AUDIT',
    ReleasePendingItems: 'RELEASE_PENDING_ITEMS',
    Allocate: 'ALLOCATE',
    Deallocate: 'DEALLOCATE',
    Fulfill: 'FULFILL',
    Delete: 'DELETE'
} as const;
export type JobQueueResponseTypeEnum = typeof JobQueueResponseTypeEnum[keyof typeof JobQueueResponseTypeEnum];

/**
 * @export
 */
export const JobQueueResponseStatusEnum = {
    Pending: 'PENDING',
    Working: 'WORKING',
    Success: 'SUCCESS',
    Failed: 'FAILED'
} as const;
export type JobQueueResponseStatusEnum = typeof JobQueueResponseStatusEnum[keyof typeof JobQueueResponseStatusEnum];

/**
 * 
 * @export
 * @interface JobQueueResponseAllOf
 */
export interface JobQueueResponseAllOf {
    /**
     * Internal identifier that uniquely identifies a single job
     * @type {number}
     * @memberof JobQueueResponseAllOf
     */
    jobID?: number;
    /**
     * Unique internal identifier of the tenant that owns the job
     * @type {number}
     * @memberof JobQueueResponseAllOf
     */
    tenantID?: number;
    /**
     * Unique internal Identifier of the owning location
     * @type {string}
     * @memberof JobQueueResponseAllOf
     */
    locationCode?: string;
    /**
     * Purpose of the job
     * @type {string}
     * @memberof JobQueueResponseAllOf
     */
    type?: JobQueueResponseAllOfTypeEnum;
    /**
     * Time and date the job was added to the queue in ISO8601 format in UTC
     * @type {string}
     * @memberof JobQueueResponseAllOf
     */
    added?: string;
    /**
     * Time and date the job was started in ISO8601 format in UTC
     * @type {string}
     * @memberof JobQueueResponseAllOf
     */
    started?: string;
    /**
     * Time and date the job was finished in ISO8601 format in UTC
     * @type {string}
     * @memberof JobQueueResponseAllOf
     */
    finished?: string;
    /**
     * The full name of the file that was picked up at the secure droppoint server before being split up by location. Applies only to refresh and adjust jobs created via file fetch process
     * @type {string}
     * @memberof JobQueueResponseAllOf
     */
    originalFilename?: string;
    /**
     * True if the job was not created from a fetched file
     * @type {boolean}
     * @memberof JobQueueResponseAllOf
     */
    hasData?: boolean;
    /**
     * The number of items processed, only for job types REFRESH and ADJUST
     * @type {number}
     * @memberof JobQueueResponseAllOf
     */
    itemCount?: number;
    /**
     * Current status of job completion
     * @type {string}
     * @memberof JobQueueResponseAllOf
     */
    status?: JobQueueResponseAllOfStatusEnum;
}


/**
 * @export
 */
export const JobQueueResponseAllOfTypeEnum = {
    Refresh: 'REFRESH',
    Adjust: 'ADJUST',
    ReleaseShipments: 'RELEASE_SHIPMENTS',
    CreatePickWave: 'CREATE_PICK_WAVE',
    ClosePickWave: 'CLOSE_PICK_WAVE',
    PutAwayFile: 'PUT_AWAY_FILE',
    ShortPickError: 'SHORT_PICK_ERROR',
    BinAuditStart: 'BIN_AUDIT_START',
    BinAuditCompletion: 'BIN_AUDIT_COMPLETION',
    CreateBinAudit: 'CREATE_BIN_AUDIT',
    ReleasePendingItems: 'RELEASE_PENDING_ITEMS',
    Allocate: 'ALLOCATE',
    Deallocate: 'DEALLOCATE',
    Fulfill: 'FULFILL',
    Delete: 'DELETE'
} as const;
export type JobQueueResponseAllOfTypeEnum = typeof JobQueueResponseAllOfTypeEnum[keyof typeof JobQueueResponseAllOfTypeEnum];

/**
 * @export
 */
export const JobQueueResponseAllOfStatusEnum = {
    Pending: 'PENDING',
    Working: 'WORKING',
    Success: 'SUCCESS',
    Failed: 'FAILED'
} as const;
export type JobQueueResponseAllOfStatusEnum = typeof JobQueueResponseAllOfStatusEnum[keyof typeof JobQueueResponseAllOfStatusEnum];

/**
 * Request needed for loading bin inventory
 * @export
 * @interface LoadBinInventoryRequest
 */
export interface LoadBinInventoryRequest {
    /**
     * List of bins and their associated product quantities
     * @type {Array<BinProductQuantities>}
     * @memberof LoadBinInventoryRequest
     */
    bins?: Array<BinProductQuantities>;
    /**
     * Flag for dry runs
     * @type {boolean}
     * @memberof LoadBinInventoryRequest
     */
    dryRun?: boolean;
    /**
     * Location Code
     * @type {string}
     * @memberof LoadBinInventoryRequest
     */
    locationCode?: string;
    /**
     * user id
     * @type {number}
     * @memberof LoadBinInventoryRequest
     */
    userID?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof LoadBinInventoryRequest
     */
    pageSize?: number;
    /**
     * which page to show
     * @type {number}
     * @memberof LoadBinInventoryRequest
     */
    pageNum?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof LoadBinInventoryRequest
     */
    sortBy?: string;
}
/**
 * 
 * @export
 * @interface LoadBinInventoryRequestAllOf
 */
export interface LoadBinInventoryRequestAllOf {
    /**
     * List of bins and their associated product quantities
     * @type {Array<BinProductQuantities>}
     * @memberof LoadBinInventoryRequestAllOf
     */
    bins?: Array<BinProductQuantities>;
    /**
     * Flag for dry runs
     * @type {boolean}
     * @memberof LoadBinInventoryRequestAllOf
     */
    dryRun?: boolean;
}
/**
 * Response object for loading bin inventory
 * @export
 * @interface LoadBinInventoryResponse
 */
export interface LoadBinInventoryResponse {
    /**
     * Number of units added
     * @type {number}
     * @memberof LoadBinInventoryResponse
     */
    unitsAdded?: number;
    /**
     * Number of removed units
     * @type {number}
     * @memberof LoadBinInventoryResponse
     */
    unitsRemoved?: number;
    /**
     * Names of created bins
     * @type {Array<string>}
     * @memberof LoadBinInventoryResponse
     */
    binsCreated?: Array<string>;
    /**
     * List of products created
     * @type {Array<InventoryProduct>}
     * @memberof LoadBinInventoryResponse
     */
    productsCreated?: Array<InventoryProduct>;
    /**
     * List of new bin product quantities
     * @type {Array<BinProductQuantities>}
     * @memberof LoadBinInventoryResponse
     */
    binQuantities?: Array<BinProductQuantities>;
    /**
     * Flag for success
     * @type {boolean}
     * @memberof LoadBinInventoryResponse
     */
    success?: boolean;
    /**
     * List of messages
     * @type {Array<string>}
     * @memberof LoadBinInventoryResponse
     */
    messages?: Array<string>;
    /**
     * Number of results
     * @type {number}
     * @memberof LoadBinInventoryResponse
     */
    numResults?: number;
}
/**
 * 
 * @export
 * @interface LoadBinInventoryResponseAllOf
 */
export interface LoadBinInventoryResponseAllOf {
    /**
     * Number of units added
     * @type {number}
     * @memberof LoadBinInventoryResponseAllOf
     */
    unitsAdded?: number;
    /**
     * Number of removed units
     * @type {number}
     * @memberof LoadBinInventoryResponseAllOf
     */
    unitsRemoved?: number;
    /**
     * Names of created bins
     * @type {Array<string>}
     * @memberof LoadBinInventoryResponseAllOf
     */
    binsCreated?: Array<string>;
    /**
     * List of products created
     * @type {Array<InventoryProduct>}
     * @memberof LoadBinInventoryResponseAllOf
     */
    productsCreated?: Array<InventoryProduct>;
    /**
     * List of new bin product quantities
     * @type {Array<BinProductQuantities>}
     * @memberof LoadBinInventoryResponseAllOf
     */
    binQuantities?: Array<BinProductQuantities>;
}
/**
 * LocationGroup Response Object
 * @export
 * @interface LocationGroupResponse
 */
export interface LocationGroupResponse {
    /**
     * Location Group ID
     * @type {number}
     * @memberof LocationGroupResponse
     */
    locationGroupID?: number;
    /**
     * Tenant ID
     * @type {number}
     * @memberof LocationGroupResponse
     */
    tenantID?: number;
    /**
     * Location Group Code
     * @type {string}
     * @memberof LocationGroupResponse
     */
    locationGroupCode?: string;
    /**
     * Created
     * @type {string}
     * @memberof LocationGroupResponse
     */
    created?: string;
    /**
     * Admin Location Group ID
     * @type {number}
     * @memberof LocationGroupResponse
     */
    adminLocationGroupID?: number;
    /**
     * Site IDs
     * @type {Array<number>}
     * @memberof LocationGroupResponse
     */
    sites?: Array<number>;
    /**
     * Location IDs
     * @type {Array<string>}
     * @memberof LocationGroupResponse
     */
    locationCodes?: Array<string>;
    /**
     * Flag for success
     * @type {boolean}
     * @memberof LocationGroupResponse
     */
    success?: boolean;
    /**
     * List of messages
     * @type {Array<string>}
     * @memberof LocationGroupResponse
     */
    messages?: Array<string>;
    /**
     * Number of results
     * @type {number}
     * @memberof LocationGroupResponse
     */
    numResults?: number;
}
/**
 * 
 * @export
 * @interface LocationGroupResponseAllOf
 */
export interface LocationGroupResponseAllOf {
    /**
     * Location Group ID
     * @type {number}
     * @memberof LocationGroupResponseAllOf
     */
    locationGroupID?: number;
    /**
     * Tenant ID
     * @type {number}
     * @memberof LocationGroupResponseAllOf
     */
    tenantID?: number;
    /**
     * Location Group Code
     * @type {string}
     * @memberof LocationGroupResponseAllOf
     */
    locationGroupCode?: string;
    /**
     * Created
     * @type {string}
     * @memberof LocationGroupResponseAllOf
     */
    created?: string;
    /**
     * Admin Location Group ID
     * @type {number}
     * @memberof LocationGroupResponseAllOf
     */
    adminLocationGroupID?: number;
    /**
     * Site IDs
     * @type {Array<number>}
     * @memberof LocationGroupResponseAllOf
     */
    sites?: Array<number>;
    /**
     * Location IDs
     * @type {Array<string>}
     * @memberof LocationGroupResponseAllOf
     */
    locationCodes?: Array<string>;
}
/**
 * Location Request Object
 * @export
 * @interface LocationRequest
 */
export interface LocationRequest {
    /**
     * Tenant ID
     * @type {number}
     * @memberof LocationRequest
     */
    tenantID: number;
    /**
     * Location Code
     * @type {string}
     * @memberof LocationRequest
     */
    locationCode: string;
    /**
     * Flag for whether the location is express enabled or not
     * @type {boolean}
     * @memberof LocationRequest
     */
    express?: boolean;
    /**
     * Flag for whether the location is to be included in location exports
     * @type {boolean}
     * @memberof LocationRequest
     */
    includeInLocationExport?: boolean;
    /**
     * Flag for whether the location is to be included in aggregate exports
     * @type {boolean}
     * @memberof LocationRequest
     */
    includeInAggregate?: boolean;
    /**
     * Flag for whether the location is active
     * @type {boolean}
     * @memberof LocationRequest
     */
    active: boolean;
    /**
     * Flag for whether the location allows Direct Ship (STH) orders
     * @type {boolean}
     * @memberof LocationRequest
     */
    directShip: boolean;
    /**
     * Flag for whether the location allows Pickup (BOPIS) orders
     * @type {boolean}
     * @memberof LocationRequest
     */
    pickup: boolean;
    /**
     * Flag for whether the location allows Transfer orders
     * @type {boolean}
     * @memberof LocationRequest
     */
    transferEnabled?: boolean;
    /**
     * Postal Code
     * @type {string}
     * @memberof LocationRequest
     */
    postalCode?: string;
    /**
     * Country Code
     * @type {string}
     * @memberof LocationRequest
     */
    countryCode?: string;
    /**
     * Latitude
     * @type {number}
     * @memberof LocationRequest
     */
    latitude?: number;
    /**
     * Longitude
     * @type {number}
     * @memberof LocationRequest
     */
    longitude?: number;
    /**
     * Location Name
     * @type {string}
     * @memberof LocationRequest
     */
    locationName: string;
    /**
     * Flag for whether the location is WMS Enabled
     * @type {boolean}
     * @memberof LocationRequest
     */
    wmsEnabled?: boolean;
}
/**
 * Location Response Object
 * @export
 * @interface LocationResponse
 */
export interface LocationResponse {
    /**
     * Internal Location ID
     * @type {number}
     * @memberof LocationResponse
     */
    locationID?: number;
    /**
     * Tenant ID
     * @type {number}
     * @memberof LocationResponse
     */
    tenantID?: number;
    /**
     * Location Code
     * @type {string}
     * @memberof LocationResponse
     */
    locationCode?: string;
    /**
     * Flag for whether the location is express enabled or not
     * @type {boolean}
     * @memberof LocationResponse
     */
    express?: boolean;
    /**
     * Flag for whether the location is to be included in location exports
     * @type {boolean}
     * @memberof LocationResponse
     */
    includeInLocationExport?: boolean;
    /**
     * Flag for whether the location is to be included in aggregate exports
     * @type {boolean}
     * @memberof LocationResponse
     */
    includeInAggregate?: boolean;
    /**
     * Flag for whether the location is active
     * @type {boolean}
     * @memberof LocationResponse
     */
    active?: boolean;
    /**
     * Flag for whether the location allows Direct Ship (STH) orders
     * @type {boolean}
     * @memberof LocationResponse
     */
    directShip?: boolean;
    /**
     * Flag for whether the location allows Pickup (BOPIS) orders
     * @type {boolean}
     * @memberof LocationResponse
     */
    pickup?: boolean;
    /**
     * Flag for whether the location allows Transfer orders
     * @type {boolean}
     * @memberof LocationResponse
     */
    transferEnabled?: boolean;
    /**
     * Postal Code
     * @type {string}
     * @memberof LocationResponse
     */
    postalCode?: string;
    /**
     * Country Code
     * @type {string}
     * @memberof LocationResponse
     */
    countryCode?: string;
    /**
     * Latitude
     * @type {number}
     * @memberof LocationResponse
     */
    latitude?: number;
    /**
     * Longitude
     * @type {number}
     * @memberof LocationResponse
     */
    longitude?: number;
    /**
     * Location Name
     * @type {string}
     * @memberof LocationResponse
     */
    locationName?: string;
    /**
     * Flag for whether the location is WMS Enabled
     * @type {boolean}
     * @memberof LocationResponse
     */
    wmsEnabled?: boolean;
    /**
     * Flag for whether the location is deliveryEnabled
     * @type {boolean}
     * @memberof LocationResponse
     */
    deliveryEnabled?: boolean;
    /**
     * Flag for success
     * @type {boolean}
     * @memberof LocationResponse
     */
    success?: boolean;
    /**
     * List of messages
     * @type {Array<string>}
     * @memberof LocationResponse
     */
    messages?: Array<string>;
    /**
     * Number of results
     * @type {number}
     * @memberof LocationResponse
     */
    numResults?: number;
}
/**
 * 
 * @export
 * @interface LocationResponseAllOf
 */
export interface LocationResponseAllOf {
    /**
     * Internal Location ID
     * @type {number}
     * @memberof LocationResponseAllOf
     */
    locationID?: number;
    /**
     * Tenant ID
     * @type {number}
     * @memberof LocationResponseAllOf
     */
    tenantID?: number;
    /**
     * Location Code
     * @type {string}
     * @memberof LocationResponseAllOf
     */
    locationCode?: string;
    /**
     * Flag for whether the location is express enabled or not
     * @type {boolean}
     * @memberof LocationResponseAllOf
     */
    express?: boolean;
    /**
     * Flag for whether the location is to be included in location exports
     * @type {boolean}
     * @memberof LocationResponseAllOf
     */
    includeInLocationExport?: boolean;
    /**
     * Flag for whether the location is to be included in aggregate exports
     * @type {boolean}
     * @memberof LocationResponseAllOf
     */
    includeInAggregate?: boolean;
    /**
     * Flag for whether the location is active
     * @type {boolean}
     * @memberof LocationResponseAllOf
     */
    active?: boolean;
    /**
     * Flag for whether the location allows Direct Ship (STH) orders
     * @type {boolean}
     * @memberof LocationResponseAllOf
     */
    directShip?: boolean;
    /**
     * Flag for whether the location allows Pickup (BOPIS) orders
     * @type {boolean}
     * @memberof LocationResponseAllOf
     */
    pickup?: boolean;
    /**
     * Flag for whether the location allows Transfer orders
     * @type {boolean}
     * @memberof LocationResponseAllOf
     */
    transferEnabled?: boolean;
    /**
     * Postal Code
     * @type {string}
     * @memberof LocationResponseAllOf
     */
    postalCode?: string;
    /**
     * Country Code
     * @type {string}
     * @memberof LocationResponseAllOf
     */
    countryCode?: string;
    /**
     * Latitude
     * @type {number}
     * @memberof LocationResponseAllOf
     */
    latitude?: number;
    /**
     * Longitude
     * @type {number}
     * @memberof LocationResponseAllOf
     */
    longitude?: number;
    /**
     * Location Name
     * @type {string}
     * @memberof LocationResponseAllOf
     */
    locationName?: string;
    /**
     * Flag for whether the location is WMS Enabled
     * @type {boolean}
     * @memberof LocationResponseAllOf
     */
    wmsEnabled?: boolean;
    /**
     * Flag for whether the location is deliveryEnabled
     * @type {boolean}
     * @memberof LocationResponseAllOf
     */
    deliveryEnabled?: boolean;
}
/**
 * Delete Item Model
 * @export
 * @interface MDeleteItem
 */
export interface MDeleteItem {
    /**
     * Product Identifier
     * @type {number}
     * @memberof MDeleteItem
     */
    productID?: number;
    /**
     * List of inventory identifiers associated with the deleted item
     * @type {Array<number>}
     * @memberof MDeleteItem
     */
    inventoryIDs?: Array<number>;
    /**
     * List of location identifiers associated with the deleted item
     * @type {Array<number>}
     * @memberof MDeleteItem
     */
    locationIDs?: Array<number>;
    /**
     * List of location codes associated with the deleted item
     * @type {Array<string>}
     * @memberof MDeleteItem
     */
    locationCodes?: Array<string>;
    /**
     * List of audit identifiers associated with the deleted item
     * @type {Array<number>}
     * @memberof MDeleteItem
     */
    auditIDs?: Array<number>;
    /**
     * 
     * @type {ProductIdentifier}
     * @memberof MDeleteItem
     */
    itemIdentifier?: ProductIdentifier;
}
/**
 * Order Item Information
 * @export
 * @interface OrderItemInformation
 */
export interface OrderItemInformation {
    /**
     * Order Identifier
     * @type {number}
     * @memberof OrderItemInformation
     */
    orderID?: number;
    /**
     * Order Item Identifier
     * @type {number}
     * @memberof OrderItemInformation
     */
    orderItemID?: number;
    /**
     * Location Identifier
     * @type {number}
     * @memberof OrderItemInformation
     */
    locationID?: number;
    /**
     * Flag for whether the location is active
     * @type {boolean}
     * @memberof OrderItemInformation
     */
    locationActive?: boolean;
    /**
     * External Store Identifier
     * @type {number}
     * @memberof OrderItemInformation
     */
    locationCode?: number;
    /**
     * Location Name
     * @type {string}
     * @memberof OrderItemInformation
     */
    locationName?: string;
    /**
     * Bin Identifier
     * @type {number}
     * @memberof OrderItemInformation
     */
    binID?: number;
    /**
     * Part/Product Number
     * @type {string}
     * @memberof OrderItemInformation
     */
    partNumber?: string;
    /**
     * Universal Product Code
     * @type {string}
     * @memberof OrderItemInformation
     */
    upc?: string;
    /**
     * Stock Keeping Unit
     * @type {string}
     * @memberof OrderItemInformation
     */
    sku?: string;
    /**
     * Custom field used for store prioritization
     * @type {string}
     * @memberof OrderItemInformation
     */
    ltd?: string;
    /**
     * Absolute minimum quantity of this item that should be in stock at any time
     * @type {number}
     * @memberof OrderItemInformation
     */
    floor?: number;
    /**
     * Quantity of this item the location wants to keep in stock to ensure stock isn't completely depleted
     * @type {number}
     * @memberof OrderItemInformation
     */
    safetyStock?: number;
    /**
     * The quantity the location has in its possession
     * @type {number}
     * @memberof OrderItemInformation
     */
    onHand?: number;
    /**
     * The quantity the location has that are available for purchase
     * @type {number}
     * @memberof OrderItemInformation
     */
    available?: number;
    /**
     * The quantity the location has that are allocated
     * @type {number}
     * @memberof OrderItemInformation
     */
    allocated?: number;
    /**
     * Total number of allocations
     * @type {number}
     * @memberof OrderItemInformation
     */
    allocates?: number;
    /**
     * Total number of deallocations
     * @type {number}
     * @memberof OrderItemInformation
     */
    deallocates?: number;
    /**
     * Total number of fulfillments. Should never be greater than 1.
     * @type {number}
     * @memberof OrderItemInformation
     */
    fulfills?: number;
    /**
     * Total number of picks (WMS only)
     * @type {number}
     * @memberof OrderItemInformation
     */
    picks?: number;
    /**
     * Pending quantity (WMS only)
     * @type {number}
     * @memberof OrderItemInformation
     */
    pendingQuantity?: number;
    /**
     * Order Identifier
     * @type {Array<OrderItemInformationEvent>}
     * @memberof OrderItemInformation
     */
    events?: Array<OrderItemInformationEvent>;
    /**
     * Flag for success
     * @type {boolean}
     * @memberof OrderItemInformation
     */
    success?: boolean;
    /**
     * List of messages
     * @type {Array<string>}
     * @memberof OrderItemInformation
     */
    messages?: Array<string>;
    /**
     * Number of results
     * @type {number}
     * @memberof OrderItemInformation
     */
    numResults?: number;
}
/**
 * 
 * @export
 * @interface OrderItemInformationAllOf
 */
export interface OrderItemInformationAllOf {
    /**
     * Order Identifier
     * @type {number}
     * @memberof OrderItemInformationAllOf
     */
    orderID?: number;
    /**
     * Order Item Identifier
     * @type {number}
     * @memberof OrderItemInformationAllOf
     */
    orderItemID?: number;
    /**
     * Location Identifier
     * @type {number}
     * @memberof OrderItemInformationAllOf
     */
    locationID?: number;
    /**
     * Flag for whether the location is active
     * @type {boolean}
     * @memberof OrderItemInformationAllOf
     */
    locationActive?: boolean;
    /**
     * External Store Identifier
     * @type {number}
     * @memberof OrderItemInformationAllOf
     */
    locationCode?: number;
    /**
     * Location Name
     * @type {string}
     * @memberof OrderItemInformationAllOf
     */
    locationName?: string;
    /**
     * Bin Identifier
     * @type {number}
     * @memberof OrderItemInformationAllOf
     */
    binID?: number;
    /**
     * Part/Product Number
     * @type {string}
     * @memberof OrderItemInformationAllOf
     */
    partNumber?: string;
    /**
     * Universal Product Code
     * @type {string}
     * @memberof OrderItemInformationAllOf
     */
    upc?: string;
    /**
     * Stock Keeping Unit
     * @type {string}
     * @memberof OrderItemInformationAllOf
     */
    sku?: string;
    /**
     * Custom field used for store prioritization
     * @type {string}
     * @memberof OrderItemInformationAllOf
     */
    ltd?: string;
    /**
     * Absolute minimum quantity of this item that should be in stock at any time
     * @type {number}
     * @memberof OrderItemInformationAllOf
     */
    floor?: number;
    /**
     * Quantity of this item the location wants to keep in stock to ensure stock isn't completely depleted
     * @type {number}
     * @memberof OrderItemInformationAllOf
     */
    safetyStock?: number;
    /**
     * The quantity the location has in its possession
     * @type {number}
     * @memberof OrderItemInformationAllOf
     */
    onHand?: number;
    /**
     * The quantity the location has that are available for purchase
     * @type {number}
     * @memberof OrderItemInformationAllOf
     */
    available?: number;
    /**
     * The quantity the location has that are allocated
     * @type {number}
     * @memberof OrderItemInformationAllOf
     */
    allocated?: number;
    /**
     * Total number of allocations
     * @type {number}
     * @memberof OrderItemInformationAllOf
     */
    allocates?: number;
    /**
     * Total number of deallocations
     * @type {number}
     * @memberof OrderItemInformationAllOf
     */
    deallocates?: number;
    /**
     * Total number of fulfillments. Should never be greater than 1.
     * @type {number}
     * @memberof OrderItemInformationAllOf
     */
    fulfills?: number;
    /**
     * Total number of picks (WMS only)
     * @type {number}
     * @memberof OrderItemInformationAllOf
     */
    picks?: number;
    /**
     * Pending quantity (WMS only)
     * @type {number}
     * @memberof OrderItemInformationAllOf
     */
    pendingQuantity?: number;
    /**
     * Order Identifier
     * @type {Array<OrderItemInformationEvent>}
     * @memberof OrderItemInformationAllOf
     */
    events?: Array<OrderItemInformationEvent>;
}
/**
 * Order Item Information Event
 * @export
 * @interface OrderItemInformationEvent
 */
export interface OrderItemInformationEvent {
    /**
     * Date of the event
     * @type {string}
     * @memberof OrderItemInformationEvent
     */
    date?: string;
    /**
     * Type of event
     * @type {string}
     * @memberof OrderItemInformationEvent
     */
    eventType?: OrderItemInformationEventEventTypeEnum;
    /**
     * Quantity
     * @type {number}
     * @memberof OrderItemInformationEvent
     */
    quantity?: number;
    /**
     * Flag for success
     * @type {boolean}
     * @memberof OrderItemInformationEvent
     */
    success?: boolean;
    /**
     * List of messages
     * @type {Array<string>}
     * @memberof OrderItemInformationEvent
     */
    messages?: Array<string>;
    /**
     * Number of results
     * @type {number}
     * @memberof OrderItemInformationEvent
     */
    numResults?: number;
}


/**
 * @export
 */
export const OrderItemInformationEventEventTypeEnum = {
    Allocated: 'ALLOCATED',
    Deallocated: 'DEALLOCATED',
    Fulfilled: 'FULFILLED',
    Picked: 'PICKED',
    DeallocateFulfill: 'DEALLOCATE_FULFILL'
} as const;
export type OrderItemInformationEventEventTypeEnum = typeof OrderItemInformationEventEventTypeEnum[keyof typeof OrderItemInformationEventEventTypeEnum];

/**
 * 
 * @export
 * @interface OrderItemInformationEventAllOf
 */
export interface OrderItemInformationEventAllOf {
    /**
     * Date of the event
     * @type {string}
     * @memberof OrderItemInformationEventAllOf
     */
    date?: string;
    /**
     * Type of event
     * @type {string}
     * @memberof OrderItemInformationEventAllOf
     */
    eventType?: OrderItemInformationEventAllOfEventTypeEnum;
    /**
     * Quantity
     * @type {number}
     * @memberof OrderItemInformationEventAllOf
     */
    quantity?: number;
}


/**
 * @export
 */
export const OrderItemInformationEventAllOfEventTypeEnum = {
    Allocated: 'ALLOCATED',
    Deallocated: 'DEALLOCATED',
    Fulfilled: 'FULFILLED',
    Picked: 'PICKED',
    DeallocateFulfill: 'DEALLOCATE_FULFILL'
} as const;
export type OrderItemInformationEventAllOfEventTypeEnum = typeof OrderItemInformationEventAllOfEventTypeEnum[keyof typeof OrderItemInformationEventAllOfEventTypeEnum];

/**
 * Request for getting order item information
 * @export
 * @interface OrderItemInformationRequest
 */
export interface OrderItemInformationRequest {
    /**
     * Order Identifier
     * @type {number}
     * @memberof OrderItemInformationRequest
     */
    orderID?: number;
    /**
     * List of Items to search on
     * @type {Array<InventoryItem>}
     * @memberof OrderItemInformationRequest
     */
    items?: Array<InventoryItem>;
    /**
     * Location Code
     * @type {string}
     * @memberof OrderItemInformationRequest
     */
    locationCode?: string;
    /**
     * user id
     * @type {number}
     * @memberof OrderItemInformationRequest
     */
    userID?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof OrderItemInformationRequest
     */
    pageSize?: number;
    /**
     * which page to show
     * @type {number}
     * @memberof OrderItemInformationRequest
     */
    pageNum?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof OrderItemInformationRequest
     */
    sortBy?: string;
}
/**
 * 
 * @export
 * @interface OrderItemInformationRequestAllOf
 */
export interface OrderItemInformationRequestAllOf {
    /**
     * Order Identifier
     * @type {number}
     * @memberof OrderItemInformationRequestAllOf
     */
    orderID?: number;
    /**
     * List of Items to search on
     * @type {Array<InventoryItem>}
     * @memberof OrderItemInformationRequestAllOf
     */
    items?: Array<InventoryItem>;
}
/**
 * Product Identifier Model
 * @export
 * @interface ProductIdentifier
 */
export interface ProductIdentifier {
    /**
     * Part/Product Number
     * @type {string}
     * @memberof ProductIdentifier
     */
    partNumber?: string;
    /**
     * Universal Product Code
     * @type {string}
     * @memberof ProductIdentifier
     */
    upc?: string;
    /**
     * Stock Keeping Unit
     * @type {string}
     * @memberof ProductIdentifier
     */
    sku?: string;
}
/**
 * A product and its associated quantity
 * @export
 * @interface ProductQuantity
 */
export interface ProductQuantity {
    /**
     * Part Number
     * @type {string}
     * @memberof ProductQuantity
     */
    partNumber?: string;
    /**
     * UPC
     * @type {string}
     * @memberof ProductQuantity
     */
    upc?: string;
    /**
     * SKU
     * @type {string}
     * @memberof ProductQuantity
     */
    sku?: string;
    /**
     * Quantity of product
     * @type {number}
     * @memberof ProductQuantity
     */
    quantity?: number;
    /**
     * ID of associated bin
     * @type {number}
     * @memberof ProductQuantity
     */
    binID?: number;
    /**
     * Location Identifier of the owning location
     * @type {number}
     * @memberof ProductQuantity
     */
    locationID?: number;
    /**
     * Bin Type ID
     * @type {number}
     * @memberof ProductQuantity
     */
    binTypeID?: number;
    /**
     * Bin Status ID
     * @type {number}
     * @memberof ProductQuantity
     */
    binStatusID?: number;
    /**
     * Name of the product
     * @type {string}
     * @memberof ProductQuantity
     */
    name?: string;
    /**
     * Inventory ID
     * @type {number}
     * @memberof ProductQuantity
     */
    inventoryID?: number;
    /**
     * Tenant Location Product ID
     * @type {number}
     * @memberof ProductQuantity
     */
    tenantLocProductID?: number;
    /**
     * Audit Product ID
     * @type {number}
     * @memberof ProductQuantity
     */
    auditProductID?: number;
    /**
     * Audit ID
     * @type {number}
     * @memberof ProductQuantity
     */
    auditID?: number;
    /**
     * Amount of product on hand
     * @type {number}
     * @memberof ProductQuantity
     */
    onHand?: number;
    /**
     * Amount of product available
     * @type {number}
     * @memberof ProductQuantity
     */
    available?: number;
    /**
     * Amount of product allocated
     * @type {number}
     * @memberof ProductQuantity
     */
    allocated?: number;
    /**
     * Amount of product pending
     * @type {number}
     * @memberof ProductQuantity
     */
    pending?: number;
    /**
     * Custom field used for store prioritization
     * @type {number}
     * @memberof ProductQuantity
     */
    ltd?: number;
    /**
     * Absolute minimum quantity of this item that should be in stock at any time
     * @type {number}
     * @memberof ProductQuantity
     */
    floor?: number;
    /**
     * Quantity of this item the location wants to keep in stock to ensure stock isn't completely depleted
     * @type {number}
     * @memberof ProductQuantity
     */
    safetystock?: number;
    /**
     * Associative Map of <String, String> for tagCategoryName => tagName
     * @type {{ [key: string]: string; }}
     * @memberof ProductQuantity
     */
    tags?: { [key: string]: string; };
}
/**
 * A response object for a product and its associated quantity
 * @export
 * @interface ProductQuantityResponse
 */
export interface ProductQuantityResponse {
    /**
     * Part Number
     * @type {string}
     * @memberof ProductQuantityResponse
     */
    partNumber?: string;
    /**
     * UPC
     * @type {string}
     * @memberof ProductQuantityResponse
     */
    upc?: string;
    /**
     * SKU
     * @type {string}
     * @memberof ProductQuantityResponse
     */
    sku?: string;
    /**
     * Quantity of product
     * @type {number}
     * @memberof ProductQuantityResponse
     */
    quantity?: number;
    /**
     * ID of associated bin
     * @type {number}
     * @memberof ProductQuantityResponse
     */
    binID?: number;
    /**
     * Location Code of the owning location
     * @type {string}
     * @memberof ProductQuantityResponse
     */
    locationCode?: string;
    /**
     * Bin Type ID
     * @type {number}
     * @memberof ProductQuantityResponse
     */
    binTypeID?: number;
    /**
     * Bin Status ID
     * @type {number}
     * @memberof ProductQuantityResponse
     */
    binStatusID?: number;
    /**
     * Name of the product
     * @type {string}
     * @memberof ProductQuantityResponse
     */
    name?: string;
    /**
     * Inventory ID
     * @type {number}
     * @memberof ProductQuantityResponse
     */
    inventoryID?: number;
    /**
     * Tenant Location Product ID
     * @type {number}
     * @memberof ProductQuantityResponse
     */
    tenantLocProductID?: number;
    /**
     * Audit Product ID
     * @type {number}
     * @memberof ProductQuantityResponse
     */
    auditProductID?: number;
    /**
     * Audit ID
     * @type {number}
     * @memberof ProductQuantityResponse
     */
    auditID?: number;
    /**
     * Amount of product on hand
     * @type {number}
     * @memberof ProductQuantityResponse
     */
    onHand?: number;
    /**
     * Amount of product available
     * @type {number}
     * @memberof ProductQuantityResponse
     */
    available?: number;
    /**
     * Amount of product allocated
     * @type {number}
     * @memberof ProductQuantityResponse
     */
    allocated?: number;
    /**
     * Amount of product pending
     * @type {number}
     * @memberof ProductQuantityResponse
     */
    pending?: number;
    /**
     * Custom field used for store prioritization
     * @type {number}
     * @memberof ProductQuantityResponse
     */
    ltd?: number;
    /**
     * Absolute minimum quantity of this item that should be in stock at any time
     * @type {number}
     * @memberof ProductQuantityResponse
     */
    floor?: number;
    /**
     * Quantity of this item the location wants to keep in stock to ensure stock isn't completely depleted
     * @type {number}
     * @memberof ProductQuantityResponse
     */
    safetystock?: number;
    /**
     * 
     * @type {Array<InventoryTagQuantity>}
     * @memberof ProductQuantityResponse
     */
    tags?: Array<InventoryTagQuantity>;
}
/**
 * Refresh Item
 * @export
 * @interface RefreshItem
 */
export interface RefreshItem {
    /**
     * Part/Product Number
     * @type {string}
     * @memberof RefreshItem
     */
    partNumber?: string;
    /**
     * Universal Product Code
     * @type {string}
     * @memberof RefreshItem
     */
    upc?: string;
    /**
     * Stock Keeping Unit
     * @type {string}
     * @memberof RefreshItem
     */
    sku?: string;
    /**
     * Bin Location Identifier
     * @type {number}
     * @memberof RefreshItem
     */
    binID?: number;
    /**
     * Custom field used for store prioritization
     * @type {number}
     * @memberof RefreshItem
     */
    lTD?: number;
    /**
     * Absolute minimum quantity of this item that should be in stock at any time
     * @type {number}
     * @memberof RefreshItem
     */
    floor?: number;
    /**
     * Quantity of this item the location wants to keep in stock to ensure stock isn't completely depleted
     * @type {number}
     * @memberof RefreshItem
     */
    safetyStock?: number;
    /**
     * Current Quantity of Item
     * @type {number}
     * @memberof RefreshItem
     */
    quantity?: number;
    /**
     * Stock Keeping Unit
     * @type {number}
     * @memberof RefreshItem
     */
    retailPrice?: number;
    /**
     * The price of the item
     * @type {number}
     * @memberof RefreshItem
     */
    currencyID?: number;
    /**
     * The inventory locator name of the item
     * @type {string}
     * @memberof RefreshItem
     */
    inventoryLocatorName?: string;
    /**
     * List of Item Attributes
     * @type {Array<string>}
     * @memberof RefreshItem
     */
    attributes?: Array<string>;
    /**
     * Associative Map of <String, String> for tagCategoryName => tagName
     * @type {{ [key: string]: string; }}
     * @memberof RefreshItem
     */
    tags?: { [key: string]: string; };
    /**
     * Date at which this inventory will become available. Expected format '2020-09-28T12:00:00-0500'
     * @type {string}
     * @memberof RefreshItem
     */
    deliveryDate?: string;
    /**
     * External Identifier for the given future inventory record. Will not create a new future inventory record unless deliveryDate is specified
     * @type {string}
     * @memberof RefreshItem
     */
    externalID?: string;
    /**
     * Track which lot a product is manufactured in
     * @type {string}
     * @memberof RefreshItem
     */
    lotCode?: string;
    /**
     * Describes the state of the product
     * @type {string}
     * @memberof RefreshItem
     */
    condition?: string;
    /**
     * A serial number is unique to a specific, physical unit of inventory
     * @type {string}
     * @memberof RefreshItem
     */
    serialNumber?: string;
    /**
     * Used by the retailer for storing information related to manufacturing date or expiry date and use date to allocate for better stock management
     * @type {string}
     * @memberof RefreshItem
     */
    date?: string;
}
/**
 * Request needed for refreshing inventory
 * @export
 * @interface RefreshRequest
 */
export interface RefreshRequest {
    /**
     * List of items to refresh
     * @type {Array<RefreshItem>}
     * @memberof RefreshRequest
     */
    items?: Array<RefreshItem>;
    /**
     * Location Code
     * @type {string}
     * @memberof RefreshRequest
     */
    locationCode: string;
    /**
     * user id
     * @type {number}
     * @memberof RefreshRequest
     */
    userID?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof RefreshRequest
     */
    pageSize?: number;
    /**
     * which page to show
     * @type {number}
     * @memberof RefreshRequest
     */
    pageNum?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof RefreshRequest
     */
    sortBy?: string;
}
/**
 * 
 * @export
 * @interface RefreshRequestAllOf
 */
export interface RefreshRequestAllOf {
    /**
     * List of items to refresh
     * @type {Array<RefreshItem>}
     * @memberof RefreshRequestAllOf
     */
    items?: Array<RefreshItem>;
}
/**
 * Request Location
 * @export
 * @interface RequestLocation
 */
export interface RequestLocation {
    /**
     * Unit of distance used for radius
     * @type {string}
     * @memberof RequestLocation
     */
    unit?: RequestLocationUnitEnum;
    /**
     * Distance from location
     * @type {number}
     * @memberof RequestLocation
     */
    radius?: number;
    /**
     * Postal Code of this location
     * @type {string}
     * @memberof RequestLocation
     */
    postalCode?: string;
    /**
     * Latitude coordinate of this location
     * @type {number}
     * @memberof RequestLocation
     */
    latitude?: number;
    /**
     * Longitude coordinate of this location
     * @type {number}
     * @memberof RequestLocation
     */
    longitude?: number;
    /**
     * Country Code for this location
     * @type {string}
     * @memberof RequestLocation
     */
    countryCode?: string;
    /**
     * Location Code for this location. This being set will trigger GetInventoryByLocation
     * @type {string}
     * @memberof RequestLocation
     */
    locationCode?: string;
    /**
     * Address ID for this location
     * @type {number}
     * @memberof RequestLocation
     */
    addressID?: number;
    /**
     * CustomerID ID for this location
     * @type {number}
     * @memberof RequestLocation
     */
    customerID?: number;
    /**
     * Address line 1 for this location
     * @type {string}
     * @memberof RequestLocation
     */
    addressLine1?: string;
    /**
     * Phone number for this location
     * @type {string}
     * @memberof RequestLocation
     */
    phone?: string;
    /**
     * City for this location
     * @type {string}
     * @memberof RequestLocation
     */
    city?: string;
    /**
     * State for this location
     * @type {string}
     * @memberof RequestLocation
     */
    state?: string;
}


/**
 * @export
 */
export const RequestLocationUnitEnum = {
    Miles: 'MILES',
    Km: 'KM'
} as const;
export type RequestLocationUnitEnum = typeof RequestLocationUnitEnum[keyof typeof RequestLocationUnitEnum];

/**
 * ShipmentAllocationsResponse Object
 * @export
 * @interface ShipmentAllocationsResponse
 */
export interface ShipmentAllocationsResponse {
    /**
     * List of InventoryAllocationResponse objects
     * @type {Array<InventoryAllocationResponse>}
     * @memberof ShipmentAllocationsResponse
     */
    currentAllocations?: Array<InventoryAllocationResponse>;
    /**
     * List of InventoryAllocationResponse objects
     * @type {Array<InventoryAllocationResponse>}
     * @memberof ShipmentAllocationsResponse
     */
    futureAllocations?: Array<InventoryAllocationResponse>;
}
/**
 * ShipmentInventoryAllocation Request Object
 * @export
 * @interface ShipmentInventoryAllocationRequest
 */
export interface ShipmentInventoryAllocationRequest {
    /**
     * Shipment Ids
     * @type {Array<number>}
     * @memberof ShipmentInventoryAllocationRequest
     */
    shipmentIDs: Array<number>;
}
/**
 * ShipmentInventoryAllocation Response Object
 * @export
 * @interface ShipmentInventoryAllocationResponse
 */
export interface ShipmentInventoryAllocationResponse {
    /**
     * Associative Map of Map<shipmentId, ShipmentAllocationsResponse>
     * @type {{ [key: string]: ShipmentAllocationsResponse; }}
     * @memberof ShipmentInventoryAllocationResponse
     */
    shipments?: { [key: string]: ShipmentAllocationsResponse; };
}
/**
 * Request and response object for a tag category
 * @export
 * @interface TagCategory
 */
export interface TagCategory {
    /**
     * Tag Category ID
     * @type {number}
     * @memberof TagCategory
     */
    tagCategoryID?: number;
    /**
     * Tag Category Name
     * @type {string}
     * @memberof TagCategory
     */
    name?: string;
    /**
     * Date tag category was created.
     * @type {string}
     * @memberof TagCategory
     */
    created?: string;
    /**
     * List of deletion job ID's
     * @type {Array<number>}
     * @memberof TagCategory
     */
    deletionJobIds?: Array<number>;
    /**
     * Tags within this category
     * @type {Array<InventoryTag>}
     * @memberof TagCategory
     */
    tags?: Array<InventoryTag>;
}
/**
 * Model of a tenant silo config.
 * @export
 * @interface TenantSiloConfigModel
 */
export interface TenantSiloConfigModel {
    /**
     * A Silo ID
     * @type {number}
     * @memberof TenantSiloConfigModel
     */
    siloID?: number;
    /**
     * Name of the Silo
     * @type {string}
     * @memberof TenantSiloConfigModel
     */
    name?: string;
    /**
     * Description of silo configuration
     * @type {string}
     * @memberof TenantSiloConfigModel
     */
    description?: string;
    /**
     * Whether the  silo config is usable or not
     * @type {boolean}
     * @memberof TenantSiloConfigModel
     */
    usable?: boolean;
    /**
     * Check whether theAdditional tenants allowed or not 
     * @type {boolean}
     * @memberof TenantSiloConfigModel
     */
    additonalTenantsAllowed?: boolean;
    /**
     * Number of Batch Workers to run for this tenant.
     * @type {number}
     * @memberof TenantSiloConfigModel
     */
    batchWorkers?: number;
    /**
     * Number of Event Sender Workers to run for this tenant.
     * @type {number}
     * @memberof TenantSiloConfigModel
     */
    eventSenderWorkers?: number;
    /**
     * Number of Non-Batch Workers to run for this tenant.
     * @type {number}
     * @memberof TenantSiloConfigModel
     */
    nonBatchWorkers?: number;
    /**
     * Whether to isolate non-batch jobs or not
     * @type {boolean}
     * @memberof TenantSiloConfigModel
     */
    isolateNonBatchJobs?: boolean;
    /**
     * A Tenant ID
     * @type {number}
     * @memberof TenantSiloConfigModel
     */
    tenantID?: number;
}
/**
 * Item for Transitioning Cart allocations
 * @export
 * @interface TransitionCartItem
 */
export interface TransitionCartItem {
    /**
     * order item ID
     * @type {number}
     * @memberof TransitionCartItem
     */
    orderItemID: number;
    /**
     * Cart Item ID (GUID)
     * @type {string}
     * @memberof TransitionCartItem
     */
    cartItemID: string;
    /**
     * shipment ID
     * @type {number}
     * @memberof TransitionCartItem
     */
    shipmentID: number;
    /**
     * Expected format '2020-09-28T12:00:00-0500'
     * @type {string}
     * @memberof TransitionCartItem
     */
    futureDate?: string;
    /**
     * Location Code
     * @type {string}
     * @memberof TransitionCartItem
     */
    locationCode?: string;
    /**
     * If provided, overrides the order item ID (orderItemID) in the db records
     * @type {number}
     * @memberof TransitionCartItem
     */
    transitionItemID?: number;
}
/**
 * Request needed for transitioning cart allocations to order/shipment allocations
 * @export
 * @interface TransitionCartRequest
 */
export interface TransitionCartRequest {
    /**
     * list of TransitionCartItem
     * @type {Array<TransitionCartItem>}
     * @memberof TransitionCartRequest
     */
    items: Array<TransitionCartItem>;
    /**
     * Cart ID that we are transitioning the allocation from
     * @type {string}
     * @memberof TransitionCartRequest
     */
    cartID: string;
    /**
     * Order ID for the cart to transition to
     * @type {number}
     * @memberof TransitionCartRequest
     */
    orderID: number;
    /**
     * Location Code
     * @type {string}
     * @memberof TransitionCartRequest
     */
    locationCode?: string;
    /**
     * user id
     * @type {number}
     * @memberof TransitionCartRequest
     */
    userID?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof TransitionCartRequest
     */
    pageSize?: number;
    /**
     * which page to show
     * @type {number}
     * @memberof TransitionCartRequest
     */
    pageNum?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof TransitionCartRequest
     */
    sortBy?: string;
}
/**
 * 
 * @export
 * @interface TransitionCartRequestAllOf
 */
export interface TransitionCartRequestAllOf {
    /**
     * list of TransitionCartItem
     * @type {Array<TransitionCartItem>}
     * @memberof TransitionCartRequestAllOf
     */
    items?: Array<TransitionCartItem>;
    /**
     * Cart ID that we are transitioning the allocation from
     * @type {string}
     * @memberof TransitionCartRequestAllOf
     */
    cartID?: string;
    /**
     * Order ID for the cart to transition to
     * @type {number}
     * @memberof TransitionCartRequestAllOf
     */
    orderID?: number;
}
/**
 * Request needed for updating a bin
 * @export
 * @interface UpdateBinRequest
 */
export interface UpdateBinRequest {
    /**
     * Bin identifier
     * @type {number}
     * @memberof UpdateBinRequest
     */
    binID: number;
    /**
     * New Bin's Type ID
     * @type {number}
     * @memberof UpdateBinRequest
     */
    binTypeID?: number;
    /**
     * New Bin's Status ID
     * @type {number}
     * @memberof UpdateBinRequest
     */
    binStatusID?: number;
    /**
     * Location Code
     * @type {string}
     * @memberof UpdateBinRequest
     */
    locationCode: string;
    /**
     * user id
     * @type {number}
     * @memberof UpdateBinRequest
     */
    userID?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof UpdateBinRequest
     */
    pageSize?: number;
    /**
     * which page to show
     * @type {number}
     * @memberof UpdateBinRequest
     */
    pageNum?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof UpdateBinRequest
     */
    sortBy?: string;
}
/**
 * 
 * @export
 * @interface UpdateBinRequestAllOf
 */
export interface UpdateBinRequestAllOf {
    /**
     * Bin identifier
     * @type {number}
     * @memberof UpdateBinRequestAllOf
     */
    binID?: number;
    /**
     * New Bin's Type ID
     * @type {number}
     * @memberof UpdateBinRequestAllOf
     */
    binTypeID?: number;
    /**
     * New Bin's Status ID
     * @type {number}
     * @memberof UpdateBinRequestAllOf
     */
    binStatusID?: number;
}
/**
 * Request needed for updating bins
 * @export
 * @interface UpdateBinsRequest
 */
export interface UpdateBinsRequest {
    /**
     * List of Update Bin Requests
     * @type {Array<UpdateBinRequest>}
     * @memberof UpdateBinsRequest
     */
    bins?: Array<UpdateBinRequest>;
    /**
     * Location Code
     * @type {string}
     * @memberof UpdateBinsRequest
     */
    locationCode?: string;
    /**
     * user id
     * @type {number}
     * @memberof UpdateBinsRequest
     */
    userID?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof UpdateBinsRequest
     */
    pageSize?: number;
    /**
     * which page to show
     * @type {number}
     * @memberof UpdateBinsRequest
     */
    pageNum?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof UpdateBinsRequest
     */
    sortBy?: string;
}
/**
 * 
 * @export
 * @interface UpdateBinsRequestAllOf
 */
export interface UpdateBinsRequestAllOf {
    /**
     * List of Update Bin Requests
     * @type {Array<UpdateBinRequest>}
     * @memberof UpdateBinsRequestAllOf
     */
    bins?: Array<UpdateBinRequest>;
}
/**
 * Response for updating bins
 * @export
 * @interface UpdateBinsResponse
 */
export interface UpdateBinsResponse {
    /**
     * Number of affected bins
     * @type {number}
     * @memberof UpdateBinsResponse
     */
    numberAffected?: number;
    /**
     * Flag for success
     * @type {boolean}
     * @memberof UpdateBinsResponse
     */
    success?: boolean;
    /**
     * List of messages
     * @type {Array<string>}
     * @memberof UpdateBinsResponse
     */
    messages?: Array<string>;
    /**
     * Number of results
     * @type {number}
     * @memberof UpdateBinsResponse
     */
    numResults?: number;
}
/**
 * 
 * @export
 * @interface UpdateBinsResponseAllOf
 */
export interface UpdateBinsResponseAllOf {
    /**
     * Number of affected bins
     * @type {number}
     * @memberof UpdateBinsResponseAllOf
     */
    numberAffected?: number;
}
/**
 * Request needed updating existing Export Settings FTP
 * @export
 * @interface UpdateExportSettingsFTPRequest
 */
export interface UpdateExportSettingsFTPRequest {
    /**
     * Export Settings Name to associate the ftp settings with
     * @type {string}
     * @memberof UpdateExportSettingsFTPRequest
     */
    exportSettingsName: string;
    /**
     * 
     * @type {ExportSettingsFTP}
     * @memberof UpdateExportSettingsFTPRequest
     */
    exportSettingsFTP: ExportSettingsFTP;
    /**
     * Location Code
     * @type {string}
     * @memberof UpdateExportSettingsFTPRequest
     */
    locationCode?: string;
    /**
     * user id
     * @type {number}
     * @memberof UpdateExportSettingsFTPRequest
     */
    userID?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof UpdateExportSettingsFTPRequest
     */
    pageSize?: number;
    /**
     * which page to show
     * @type {number}
     * @memberof UpdateExportSettingsFTPRequest
     */
    pageNum?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof UpdateExportSettingsFTPRequest
     */
    sortBy?: string;
}
/**
 * Update Export Settings FTP Response
 * @export
 * @interface UpdateExportSettingsFTPResponse
 */
export interface UpdateExportSettingsFTPResponse {
    /**
     * Tenant ID
     * @type {number}
     * @memberof UpdateExportSettingsFTPResponse
     */
    tenantID?: number;
    /**
     * Export Settings FTP Name
     * @type {string}
     * @memberof UpdateExportSettingsFTPResponse
     */
    exportSettingsFTPName?: string;
    /**
     * Export Settings Name to associate the ftp settings with
     * @type {string}
     * @memberof UpdateExportSettingsFTPResponse
     */
    exportSettingsName?: string;
    /**
     * Flag for success
     * @type {boolean}
     * @memberof UpdateExportSettingsFTPResponse
     */
    success?: boolean;
    /**
     * List of messages
     * @type {Array<string>}
     * @memberof UpdateExportSettingsFTPResponse
     */
    messages?: Array<string>;
    /**
     * Number of results
     * @type {number}
     * @memberof UpdateExportSettingsFTPResponse
     */
    numResults?: number;
}
/**
 * 
 * @export
 * @interface UpdateExportSettingsFTPResponseAllOf
 */
export interface UpdateExportSettingsFTPResponseAllOf {
    /**
     * Tenant ID
     * @type {number}
     * @memberof UpdateExportSettingsFTPResponseAllOf
     */
    tenantID?: number;
    /**
     * Export Settings FTP Name
     * @type {string}
     * @memberof UpdateExportSettingsFTPResponseAllOf
     */
    exportSettingsFTPName?: string;
    /**
     * Export Settings Name to associate the ftp settings with
     * @type {string}
     * @memberof UpdateExportSettingsFTPResponseAllOf
     */
    exportSettingsName?: string;
}
/**
 * Update Export Settings Gcs Response
 * @export
 * @interface UpdateExportSettingsGCSResponse
 */
export interface UpdateExportSettingsGCSResponse {
    /**
     * Tenant ID
     * @type {number}
     * @memberof UpdateExportSettingsGCSResponse
     */
    tenantID?: number;
    /**
     * Export Settings Gcs ID
     * @type {number}
     * @memberof UpdateExportSettingsGCSResponse
     */
    exportSettingsGcsID?: number;
    /**
     * Export Settings ID to associate the Gcs settings with
     * @type {number}
     * @memberof UpdateExportSettingsGCSResponse
     */
    exportSettingsID?: number;
    /**
     * Flag for success
     * @type {boolean}
     * @memberof UpdateExportSettingsGCSResponse
     */
    success?: boolean;
    /**
     * List of messages
     * @type {Array<string>}
     * @memberof UpdateExportSettingsGCSResponse
     */
    messages?: Array<string>;
    /**
     * Number of results
     * @type {number}
     * @memberof UpdateExportSettingsGCSResponse
     */
    numResults?: number;
}
/**
 * 
 * @export
 * @interface UpdateExportSettingsGCSResponseAllOf
 */
export interface UpdateExportSettingsGCSResponseAllOf {
    /**
     * Tenant ID
     * @type {number}
     * @memberof UpdateExportSettingsGCSResponseAllOf
     */
    tenantID?: number;
    /**
     * Export Settings Gcs ID
     * @type {number}
     * @memberof UpdateExportSettingsGCSResponseAllOf
     */
    exportSettingsGcsID?: number;
    /**
     * Export Settings ID to associate the Gcs settings with
     * @type {number}
     * @memberof UpdateExportSettingsGCSResponseAllOf
     */
    exportSettingsID?: number;
}
/**
 * Request needed for updating existing Export Settings GCS
 * @export
 * @interface UpdateExportSettingsGcsRequest
 */
export interface UpdateExportSettingsGcsRequest {
    /**
     * Export Settings Name to associate the ftp settings with
     * @type {string}
     * @memberof UpdateExportSettingsGcsRequest
     */
    exportSettingsName: string;
    /**
     * 
     * @type {ExportSettingsGcs}
     * @memberof UpdateExportSettingsGcsRequest
     */
    exportSettingsGcs: ExportSettingsGcs;
    /**
     * Location Code
     * @type {string}
     * @memberof UpdateExportSettingsGcsRequest
     */
    locationCode?: string;
    /**
     * user id
     * @type {number}
     * @memberof UpdateExportSettingsGcsRequest
     */
    userID?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof UpdateExportSettingsGcsRequest
     */
    pageSize?: number;
    /**
     * which page to show
     * @type {number}
     * @memberof UpdateExportSettingsGcsRequest
     */
    pageNum?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof UpdateExportSettingsGcsRequest
     */
    sortBy?: string;
}
/**
 * 
 * @export
 * @interface UpdateExportSettingsGcsRequestAllOf
 */
export interface UpdateExportSettingsGcsRequestAllOf {
    /**
     * Export Settings Name to associate the ftp settings with
     * @type {string}
     * @memberof UpdateExportSettingsGcsRequestAllOf
     */
    exportSettingsName?: string;
    /**
     * 
     * @type {ExportSettingsGcs}
     * @memberof UpdateExportSettingsGcsRequestAllOf
     */
    exportSettingsGcs?: ExportSettingsGcs;
}
/**
 * Request needed updating existing Export Settings
 * @export
 * @interface UpdateExportSettingsRequest
 */
export interface UpdateExportSettingsRequest {
    /**
     * 
     * @type {ExportSettings}
     * @memberof UpdateExportSettingsRequest
     */
    exportSettings: ExportSettings;
    /**
     * Location Code
     * @type {string}
     * @memberof UpdateExportSettingsRequest
     */
    locationCode?: string;
    /**
     * user id
     * @type {number}
     * @memberof UpdateExportSettingsRequest
     */
    userID?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof UpdateExportSettingsRequest
     */
    pageSize?: number;
    /**
     * which page to show
     * @type {number}
     * @memberof UpdateExportSettingsRequest
     */
    pageNum?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof UpdateExportSettingsRequest
     */
    sortBy?: string;
}
/**
 * Update Export Settings Response
 * @export
 * @interface UpdateExportSettingsResponse
 */
export interface UpdateExportSettingsResponse {
    /**
     * Tenant ID
     * @type {number}
     * @memberof UpdateExportSettingsResponse
     */
    tenantID?: number;
    /**
     * Name
     * @type {string}
     * @memberof UpdateExportSettingsResponse
     */
    name?: string;
    /**
     * Flag for success
     * @type {boolean}
     * @memberof UpdateExportSettingsResponse
     */
    success?: boolean;
    /**
     * List of messages
     * @type {Array<string>}
     * @memberof UpdateExportSettingsResponse
     */
    messages?: Array<string>;
    /**
     * Number of results
     * @type {number}
     * @memberof UpdateExportSettingsResponse
     */
    numResults?: number;
}
/**
 * 
 * @export
 * @interface UpdateExportSettingsResponseAllOf
 */
export interface UpdateExportSettingsResponseAllOf {
    /**
     * Tenant ID
     * @type {number}
     * @memberof UpdateExportSettingsResponseAllOf
     */
    tenantID?: number;
    /**
     * Name
     * @type {string}
     * @memberof UpdateExportSettingsResponseAllOf
     */
    name?: string;
}
/**
 * Request needed updating existing Export Settings S3
 * @export
 * @interface UpdateExportSettingsS3Request
 */
export interface UpdateExportSettingsS3Request {
    /**
     * Export Settings Name to associate the ftp settings with
     * @type {string}
     * @memberof UpdateExportSettingsS3Request
     */
    exportSettingsName: string;
    /**
     * 
     * @type {ExportSettingsS3}
     * @memberof UpdateExportSettingsS3Request
     */
    exportSettingsS3: ExportSettingsS3;
    /**
     * Location Code
     * @type {string}
     * @memberof UpdateExportSettingsS3Request
     */
    locationCode?: string;
    /**
     * user id
     * @type {number}
     * @memberof UpdateExportSettingsS3Request
     */
    userID?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof UpdateExportSettingsS3Request
     */
    pageSize?: number;
    /**
     * which page to show
     * @type {number}
     * @memberof UpdateExportSettingsS3Request
     */
    pageNum?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof UpdateExportSettingsS3Request
     */
    sortBy?: string;
}
/**
 * Update Export Settings S3 Response
 * @export
 * @interface UpdateExportSettingsS3Response
 */
export interface UpdateExportSettingsS3Response {
    /**
     * Tenant ID
     * @type {number}
     * @memberof UpdateExportSettingsS3Response
     */
    tenantID?: number;
    /**
     * Export Settings S3 ID
     * @type {number}
     * @memberof UpdateExportSettingsS3Response
     */
    exportSettingsS3ID?: number;
    /**
     * Export Settings ID to associate the s3 settings with
     * @type {number}
     * @memberof UpdateExportSettingsS3Response
     */
    exportSettingsID?: number;
    /**
     * Flag for success
     * @type {boolean}
     * @memberof UpdateExportSettingsS3Response
     */
    success?: boolean;
    /**
     * List of messages
     * @type {Array<string>}
     * @memberof UpdateExportSettingsS3Response
     */
    messages?: Array<string>;
    /**
     * Number of results
     * @type {number}
     * @memberof UpdateExportSettingsS3Response
     */
    numResults?: number;
}
/**
 * 
 * @export
 * @interface UpdateExportSettingsS3ResponseAllOf
 */
export interface UpdateExportSettingsS3ResponseAllOf {
    /**
     * Tenant ID
     * @type {number}
     * @memberof UpdateExportSettingsS3ResponseAllOf
     */
    tenantID?: number;
    /**
     * Export Settings S3 ID
     * @type {number}
     * @memberof UpdateExportSettingsS3ResponseAllOf
     */
    exportSettingsS3ID?: number;
    /**
     * Export Settings ID to associate the s3 settings with
     * @type {number}
     * @memberof UpdateExportSettingsS3ResponseAllOf
     */
    exportSettingsID?: number;
}
/**
 * Request for creating or updating tenant silo config.
 * @export
 * @interface UpdateTenantSiloConfigRequest
 */
export interface UpdateTenantSiloConfigRequest {
    /**
     * A Tenant ID
     * @type {number}
     * @memberof UpdateTenantSiloConfigRequest
     */
    tenantID?: number;
    /**
     * Number of batch workers to run for this tenant.
     * @type {number}
     * @memberof UpdateTenantSiloConfigRequest
     */
    batchWorkers?: number;
    /**
     * Number of event sender workers to run for this tenant.
     * @type {number}
     * @memberof UpdateTenantSiloConfigRequest
     */
    eventSenderWorkers?: number;
    /**
     * Number of event dedicated non-batch workers to run for this silo.
     * @type {number}
     * @memberof UpdateTenantSiloConfigRequest
     */
    nonBatchWorkers?: number;
}
