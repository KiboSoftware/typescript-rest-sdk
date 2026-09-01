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
 * Request for adjusting the future date
 * @export
 * @interface AdjustFutureDateRequest
 */
export interface AdjustFutureDateRequest {
    /**
     * Future Date at which the inventory should be allocated against. Expected format '2020-09-28T12:00:00-0500'
     * @type {string}
     * @memberof AdjustFutureDateRequest
     */
    futureDate?: string;
    /**
     * Location Code
     * @type {string}
     * @memberof AdjustFutureDateRequest
     */
    locationCode?: string;
    /**
     * which page to show
     * @type {number}
     * @memberof AdjustFutureDateRequest
     */
    pageNum?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof AdjustFutureDateRequest
     */
    pageSize?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof AdjustFutureDateRequest
     */
    sortBy?: string;
    /**
     * user id
     * @type {number}
     * @memberof AdjustFutureDateRequest
     */
    userID?: number;
}
/**
 * 
 * @export
 * @interface AdjustFutureDateRequestAllOf
 */
export interface AdjustFutureDateRequestAllOf {
    /**
     * Future Date at which the inventory should be allocated against. Expected format '2020-09-28T12:00:00-0500'
     * @type {string}
     * @memberof AdjustFutureDateRequestAllOf
     */
    futureDate?: string;
}
/**
 * Adjust Item
 * @export
 * @interface AdjustItem
 */
export interface AdjustItem {
    /**
     * Bin Location Identifier
     * @type {number}
     * @memberof AdjustItem
     */
    binID?: number;
    /**
     * Describes the state of the product
     * @type {string}
     * @memberof AdjustItem
     */
    condition?: string;
    /**
     * Used by the retailer for storing information related to manufacturing date or expiry date and use date to allocate for better stock management
     * @type {string}
     * @memberof AdjustItem
     */
    date?: string;
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
     * 
     * @type {boolean}
     * @memberof AdjustItem
     */
    readonly granularInventoryTrackingEnabled?: boolean;
    /**
     * Track which lot a product is manufactured in
     * @type {string}
     * @memberof AdjustItem
     */
    lotCode?: string;
    /**
     * Part/Product Number
     * @type {string}
     * @memberof AdjustItem
     */
    partNumber?: string;
    /**
     * Current Quantity of Item
     * @type {number}
     * @memberof AdjustItem
     */
    quantity: number;
    /**
     * A serial number is unique to a specific, physical unit of inventory
     * @type {string}
     * @memberof AdjustItem
     */
    serialNumber?: string;
    /**
     * Stock Keeping Unit
     * @type {string}
     * @memberof AdjustItem
     */
    sku?: string;
    /**
     * Associative Map of <String, String> for tagCategoryName => tagName
     * @type {{ [key: string]: string; }}
     * @memberof AdjustItem
     */
    tags?: { [key: string]: string; };
    /**
     * Universal Product Code
     * @type {string}
     * @memberof AdjustItem
     */
    upc?: string;
}
/**
 * Request needed for adjusting inventory
 * @export
 * @interface AdjustRequest
 */
export interface AdjustRequest {
    /**
     * 
     * @type {any}
     * @memberof AdjustRequest
     */
    items: any | null;
    /**
     * 
     * @type {any}
     * @memberof AdjustRequest
     */
    locationCode: any | null;
    /**
     * which page to show
     * @type {number}
     * @memberof AdjustRequest
     */
    pageNum?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof AdjustRequest
     */
    pageSize?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof AdjustRequest
     */
    sortBy?: string;
    /**
     * user id
     * @type {number}
     * @memberof AdjustRequest
     */
    userID?: number;
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
     * Enum for including future inventory: [futureOnly, futureAndCurrent]
     * @type {string}
     * @memberof AggregateRequest
     */
    includeFutureInventory?: AggregateRequestIncludeFutureInventoryEnum;
    /**
     * Filter results by locations that have transfer enabled (true) or don't (false)
     * @type {any}
     * @memberof AggregateRequest
     */
    transferEnabled?: any | null;
    /**
     * Whether to limit results to locations that are shipping enabled
     * @type {boolean}
     * @memberof AggregateRequest
     */
    directShip?: boolean;
    /**
     * Whether to force populate default tags onto the request if they are unspecified for any tag category
     * @type {boolean}
     * @memberof AggregateRequest
     */
    forceDefaultsForUnspecifiedTagCategories?: boolean;
    /**
     * Future end Date at which the inventory should be allocated against.
     * @type {string}
     * @memberof AggregateRequest
     */
    futureEndDate?: string;
    /**
     * Future start Date at which the inventory should be allocated against.
     * @type {string}
     * @memberof AggregateRequest
     */
    futureStartDate?: string;
    /**
     * Whether to ignore the safety stock buffer put in place
     * @type {boolean}
     * @memberof AggregateRequest
     */
    ignoreSafetyStock?: boolean;
    /**
     * Whether to allow items with negative future inventory in the results
     * @type {boolean}
     * @memberof AggregateRequest
     */
    includeNegativeFutureInventory?: boolean;
    /**
     * Whether to allow items with negative inventory in the results
     * @type {boolean}
     * @memberof AggregateRequest
     */
    includeNegativeInventory?: boolean;
    /**
     * List of Items to search on
     * @type {Array<InventoryItem>}
     * @memberof AggregateRequest
     */
    items: Array<InventoryItem>;
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
     * Location Code
     * @type {string}
     * @memberof AggregateRequest
     */
    locationCode?: string;
    /**
     * which page to show
     * @type {number}
     * @memberof AggregateRequest
     */
    pageNum?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof AggregateRequest
     */
    pageSize?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof AggregateRequest
     */
    sortBy?: string;
    /**
     * user id
     * @type {number}
     * @memberof AggregateRequest
     */
    userID?: number;
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
     * Whether to limit results to locations that are shipping enabled
     * @type {boolean}
     * @memberof AggregateRequestAllOf
     */
    directShip?: boolean;
    /**
     * Whether to force populate default tags onto the request if they are unspecified for any tag category
     * @type {boolean}
     * @memberof AggregateRequestAllOf
     */
    forceDefaultsForUnspecifiedTagCategories?: boolean;
    /**
     * Future end Date at which the inventory should be allocated against.
     * @type {string}
     * @memberof AggregateRequestAllOf
     */
    futureEndDate?: string;
    /**
     * Future start Date at which the inventory should be allocated against.
     * @type {string}
     * @memberof AggregateRequestAllOf
     */
    futureStartDate?: string;
    /**
     * Whether to ignore the safety stock buffer put in place
     * @type {boolean}
     * @memberof AggregateRequestAllOf
     */
    ignoreSafetyStock?: boolean;
    /**
     * Include future inventory or not
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
     * Whether to allow items with negative inventory in the results
     * @type {boolean}
     * @memberof AggregateRequestAllOf
     */
    includeNegativeInventory?: boolean;
    /**
     * List of Items to search on
     * @type {Array<InventoryItem>}
     * @memberof AggregateRequestAllOf
     */
    items?: Array<InventoryItem>;
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
     * Filter results by locations that apply tax (true) or don't (false)
     * @type {boolean}
     * @memberof AggregateRequestAllOf
     */
    transferEnabled?: boolean;
}


/**
 * @export
 */
export const AggregateRequestAllOfIncludeFutureInventoryEnum = {
    Only: 'FUTURE_ONLY',
    AndCurrent: 'FUTURE_AND_CURRENT'
} as const;
export type AggregateRequestAllOfIncludeFutureInventoryEnum = typeof AggregateRequestAllOfIncludeFutureInventoryEnum[keyof typeof AggregateRequestAllOfIncludeFutureInventoryEnum];

/**
 * Response for aggregating Inventory
 * @export
 * @interface AggregateResponse
 */
export interface AggregateResponse {
    /**
     * The quantity the location has that are available for purchase
     * @type {number}
     * @memberof AggregateResponse
     */
    available?: number;
    /**
     * Absolute minimum quantity of this item that should be in stock at any time
     * @type {number}
     * @memberof AggregateResponse
     */
    floor?: number;
    /**
     * The quantity the location has in its possession
     * @type {number}
     * @memberof AggregateResponse
     */
    onHand?: number;
    /**
     * Part/Product Number
     * @type {string}
     * @memberof AggregateResponse
     */
    partNumber?: string;
    /**
     * Stock Keeping Unit
     * @type {string}
     * @memberof AggregateResponse
     */
    sku?: string;
    /**
     * Associative Map of <String, String> for tagCategoryName => tagName
     * @type {{ [key: string]: string; }}
     * @memberof AggregateResponse
     */
    tags?: { [key: string]: string; };
    /**
     * Manufacturer Identifier
     * @type {number}
     * @memberof AggregateResponse
     */
    tenantID?: number;
    /**
     * Universal Product Code
     * @type {string}
     * @memberof AggregateResponse
     */
    upc?: string;
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
    /**
     * Flag for success
     * @type {boolean}
     * @memberof AggregateResponse
     */
    success?: boolean;
}
/**
 * 
 * @export
 * @interface AggregateResponseAllOf
 */
export interface AggregateResponseAllOf {
    /**
     * The quantity the location has that are available for purchase
     * @type {number}
     * @memberof AggregateResponseAllOf
     */
    available?: number;
    /**
     * Absolute minimum quantity of this item that should be in stock at any time
     * @type {number}
     * @memberof AggregateResponseAllOf
     */
    floor?: number;
    /**
     * The quantity the location has in its possession
     * @type {number}
     * @memberof AggregateResponseAllOf
     */
    onHand?: number;
    /**
     * Part/Product Number
     * @type {string}
     * @memberof AggregateResponseAllOf
     */
    partNumber?: string;
    /**
     * Stock Keeping Unit
     * @type {string}
     * @memberof AggregateResponseAllOf
     */
    sku?: string;
    /**
     * Associative Map of <String, String> for tagCategoryName => tagName
     * @type {{ [key: string]: string; }}
     * @memberof AggregateResponseAllOf
     */
    tags?: { [key: string]: string; };
    /**
     * Manufacturer Identifier
     * @type {number}
     * @memberof AggregateResponseAllOf
     */
    tenantID?: number;
    /**
     * Universal Product Code
     * @type {string}
     * @memberof AggregateResponseAllOf
     */
    upc?: string;
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
     * flag to determine whether the runSyncronous flag is set and the allocation should be run synchronously
     * @type {any}
     * @memberof AllocateInventoryRequest
     */
    runSynchronous?: any | null;
    /**
     * flag to determine whether the allocation was due to auto assignment
     * @type {boolean}
     * @memberof AllocateInventoryRequest
     */
    autoAssign?: boolean;
    /**
     * flag to determine deallocation on decrements
     * @type {boolean}
     * @memberof AllocateInventoryRequest
     */
    decrementOnHandOnDeallocate?: boolean;
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
     * Location Code
     * @type {string}
     * @memberof AllocateInventoryRequest
     */
    locationCode?: string;
    /**
     * which page to show
     * @type {number}
     * @memberof AllocateInventoryRequest
     */
    pageNum?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof AllocateInventoryRequest
     */
    pageSize?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof AllocateInventoryRequest
     */
    sortBy?: string;
    /**
     * user id
     * @type {number}
     * @memberof AllocateInventoryRequest
     */
    userID?: number;
}
/**
 * 
 * @export
 * @interface AllocateInventoryRequestAllOf
 */
export interface AllocateInventoryRequestAllOf {
    /**
     * flag to determine whether the allocation was due to auto assignment
     * @type {boolean}
     * @memberof AllocateInventoryRequestAllOf
     */
    autoAssign?: boolean;
    /**
     * flag to determine deallocation on decrements
     * @type {boolean}
     * @memberof AllocateInventoryRequestAllOf
     */
    decrementOnHandOnDeallocate?: boolean;
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
     * flag to determine whether the allocation should run synchronously, defaults to false
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
     * Cart ID (GUID)
     * @type {string}
     * @memberof AllocateItem
     */
    cartID?: string;
    /**
     * Cart Item ID (GUID)
     * @type {string}
     * @memberof AllocateItem
     */
    cartItemID?: string;
    /**
     * Descriptor for the state of the product. Only used in Allocate calls.
     * @type {string}
     * @memberof AllocateItem
     */
    condition?: string;
    /**
     * Used by the retailer for storing information related to manufacturing date or expiry date and use date to allocate for better stock management. Only used in Allocate calls.
     * @type {string}
     * @memberof AllocateItem
     */
    date?: string;
    /**
     * Future Date at which the inventory should be allocated against. Expected format '2020-09-28T12:00:00-0500'
     * @type {string}
     * @memberof AllocateItem
     */
    futureDate?: string;
    /**
     * location Code
     * @type {string}
     * @memberof AllocateItem
     */
    locationCode?: string;
    /**
     * Extra Uniqueness Identifier used track which lot a product is manufactured in. Only used in Allocate calls.
     * @type {string}
     * @memberof AllocateItem
     */
    lotCode?: string;
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
     * part number
     * @type {string}
     * @memberof AllocateItem
     */
    partNumber?: string;
    /**
     * previous order item ID
     * @type {number}
     * @memberof AllocateItem
     */
    previousOrderItemID?: number;
    /**
     * quantity
     * @type {number}
     * @memberof AllocateItem
     */
    quantity: number;
    /**
     * Reservation ID
     * @type {string}
     * @memberof AllocateItem
     */
    reservationID?: string;
    /**
     * A serial number unique to a specific, physical unit of inventory. Limit of 30 characters. Only used in Allocate calls.
     * @type {string}
     * @memberof AllocateItem
     */
    serialNumber?: string;
    /**
     * shipment ID
     * @type {number}
     * @memberof AllocateItem
     */
    shipmentID: number;
    /**
     * sku
     * @type {string}
     * @memberof AllocateItem
     */
    sku?: string;
    /**
     * Associative Map of <String, String> for tagCategoryName => tagName
     * @type {{ [key: string]: string; }}
     * @memberof AllocateItem
     */
    tags?: { [key: string]: string; };
    /**
     * upc
     * @type {string}
     * @memberof AllocateItem
     */
    upc?: string;
}
/**
 * Audit
 * @export
 * @interface Audit
 */
export interface Audit {
    /**
     * Audit identifier
     * @type {number}
     * @memberof Audit
     */
    auditID?: number;
    /**
     * Date the audit was requested
     * @type {string}
     * @memberof Audit
     */
    dateRequested?: string;
    /**
     * Date the audit was started
     * @type {string}
     * @memberof Audit
     */
    dateStarted?: string;
    /**
     * List of Audit Items
     * @type {Array<AuditItem>}
     * @memberof Audit
     */
    items?: Array<AuditItem>;
    /**
     * Location code
     * @type {string}
     * @memberof Audit
     */
    locationCode?: string;
    /**
     * Audit status
     * @type {string}
     * @memberof Audit
     */
    status?: string;
    /**
     * User identifier
     * @type {number}
     * @memberof Audit
     */
    userID?: number;
    /**
     * List of messages
     * @type {Array<string>}
     * @memberof Audit
     */
    messages?: Array<string>;
    /**
     * Number of results
     * @type {number}
     * @memberof Audit
     */
    numResults?: number;
    /**
     * Flag for success
     * @type {boolean}
     * @memberof Audit
     */
    success?: boolean;
}
/**
 * 
 * @export
 * @interface AuditAllOf
 */
export interface AuditAllOf {
    /**
     * Audit identifier
     * @type {number}
     * @memberof AuditAllOf
     */
    auditID?: number;
    /**
     * Date the audit was requested
     * @type {string}
     * @memberof AuditAllOf
     */
    dateRequested?: string;
    /**
     * Date the audit was started
     * @type {string}
     * @memberof AuditAllOf
     */
    dateStarted?: string;
    /**
     * List of Audit Items
     * @type {Array<AuditItem>}
     * @memberof AuditAllOf
     */
    items?: Array<AuditItem>;
    /**
     * Location code
     * @type {string}
     * @memberof AuditAllOf
     */
    locationCode?: string;
    /**
     * Audit status
     * @type {string}
     * @memberof AuditAllOf
     */
    status?: string;
    /**
     * User identifier
     * @type {number}
     * @memberof AuditAllOf
     */
    userID?: number;
}
/**
 * Audit Item
 * @export
 * @interface AuditItem
 */
export interface AuditItem {
    /**
     * Audit Item identifier
     * @type {number}
     * @memberof AuditItem
     */
    auditItemID?: number;
    /**
     * Bin Name
     * @type {string}
     * @memberof AuditItem
     */
    binName?: string;
    /**
     * 
     * @type {AuditItemQuantity}
     * @memberof AuditItem
     */
    product?: AuditItemQuantity;
    /**
     * List of messages
     * @type {Array<string>}
     * @memberof AuditItem
     */
    messages?: Array<string>;
    /**
     * Number of results
     * @type {number}
     * @memberof AuditItem
     */
    numResults?: number;
    /**
     * Flag for success
     * @type {boolean}
     * @memberof AuditItem
     */
    success?: boolean;
}
/**
 * 
 * @export
 * @interface AuditItemAllOf
 */
export interface AuditItemAllOf {
    /**
     * Audit Item identifier
     * @type {number}
     * @memberof AuditItemAllOf
     */
    auditItemID?: number;
    /**
     * Bin Name
     * @type {string}
     * @memberof AuditItemAllOf
     */
    binName?: string;
    /**
     * 
     * @type {AuditItemQuantity}
     * @memberof AuditItemAllOf
     */
    product?: AuditItemQuantity;
}
/**
 * Audit Item Quantity
 * @export
 * @interface AuditItemQuantity
 */
export interface AuditItemQuantity {
    /**
     * Actual quantity of items
     * @type {number}
     * @memberof AuditItemQuantity
     */
    actualQuantity?: number;
    /**
     * Expected Quantity of items
     * @type {number}
     * @memberof AuditItemQuantity
     */
    expectedQuantity?: number;
    /**
     * Part Number
     * @type {string}
     * @memberof AuditItemQuantity
     */
    partNumber?: string;
    /**
     * SKU
     * @type {string}
     * @memberof AuditItemQuantity
     */
    sku?: string;
    /**
     * UPC
     * @type {string}
     * @memberof AuditItemQuantity
     */
    upc?: string;
}
/**
 * Request for searching audits
 * @export
 * @interface AuditSearchRequest
 */
export interface AuditSearchRequest {
    /**
     * Audit identifier
     * @type {number}
     * @memberof AuditSearchRequest
     */
    auditID?: number;
    /**
     * Audit Status
     * @type {string}
     * @memberof AuditSearchRequest
     */
    auditStatus?: string;
    /**
     * Name of the bin
     * @type {string}
     * @memberof AuditSearchRequest
     */
    binName?: string;
    /**
     * 
     * @type {DateRange}
     * @memberof AuditSearchRequest
     */
    dateRange?: DateRange;
    /**
     * List of matching products
     * @type {Array<ProductMatch>}
     * @memberof AuditSearchRequest
     */
    products?: Array<ProductMatch>;
    /**
     * Location Code
     * @type {string}
     * @memberof AuditSearchRequest
     */
    locationCode?: string;
    /**
     * which page to show
     * @type {number}
     * @memberof AuditSearchRequest
     */
    pageNum?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof AuditSearchRequest
     */
    pageSize?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof AuditSearchRequest
     */
    sortBy?: string;
    /**
     * user id
     * @type {number}
     * @memberof AuditSearchRequest
     */
    userID?: number;
}
/**
 * 
 * @export
 * @interface AuditSearchRequestAllOf
 */
export interface AuditSearchRequestAllOf {
    /**
     * Audit identifier
     * @type {number}
     * @memberof AuditSearchRequestAllOf
     */
    auditID?: number;
    /**
     * Audit Status
     * @type {string}
     * @memberof AuditSearchRequestAllOf
     */
    auditStatus?: string;
    /**
     * Name of the bin
     * @type {string}
     * @memberof AuditSearchRequestAllOf
     */
    binName?: string;
    /**
     * 
     * @type {DateRange}
     * @memberof AuditSearchRequestAllOf
     */
    dateRange?: DateRange;
    /**
     * List of matching products
     * @type {Array<ProductMatch>}
     * @memberof AuditSearchRequestAllOf
     */
    products?: Array<ProductMatch>;
}
/**
 * Audit Search Response
 * @export
 * @interface AuditSearchResponse
 */
export interface AuditSearchResponse {
    /**
     * List of found audits
     * @type {Array<Audit>}
     * @memberof AuditSearchResponse
     */
    audits?: Array<Audit>;
    /**
     * List of messages
     * @type {Array<string>}
     * @memberof AuditSearchResponse
     */
    messages?: Array<string>;
    /**
     * Number of results
     * @type {number}
     * @memberof AuditSearchResponse
     */
    numResults?: number;
    /**
     * Flag for success
     * @type {boolean}
     * @memberof AuditSearchResponse
     */
    success?: boolean;
}
/**
 * 
 * @export
 * @interface AuditSearchResponseAllOf
 */
export interface AuditSearchResponseAllOf {
    /**
     * List of found audits
     * @type {Array<Audit>}
     * @memberof AuditSearchResponseAllOf
     */
    audits?: Array<Audit>;
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
     * which page to show
     * @type {number}
     * @memberof BaseRequest
     */
    pageNum?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof BaseRequest
     */
    pageSize?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof BaseRequest
     */
    sortBy?: string;
    /**
     * user id
     * @type {number}
     * @memberof BaseRequest
     */
    userID?: number;
}
/**
 * Base Response Model
 * @export
 * @interface BaseResponse
 */
export interface BaseResponse {
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
    /**
     * Flag for success
     * @type {boolean}
     * @memberof BaseResponse
     */
    success?: boolean;
}
/**
 * Response object for a bin
 * @export
 * @interface Bin
 */
export interface Bin {
    /**
     * Bin ID
     * @type {number}
     * @memberof Bin
     */
    binID?: number;
    /**
     * Bin Status ID
     * @type {number}
     * @memberof Bin
     */
    binStatusID?: number;
    /**
     * Bin Type ID
     * @type {number}
     * @memberof Bin
     */
    binTypeID?: number;
    /**
     * Location Code
     * @type {string}
     * @memberof Bin
     */
    locationCode?: string;
    /**
     * Bin Name
     * @type {string}
     * @memberof Bin
     */
    name?: string;
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
    /**
     * Flag for success
     * @type {boolean}
     * @memberof Bin
     */
    success?: boolean;
}
/**
 * 
 * @export
 * @interface BinAllOf
 */
export interface BinAllOf {
    /**
     * Bin ID
     * @type {number}
     * @memberof BinAllOf
     */
    binID?: number;
    /**
     * Bin Status ID
     * @type {number}
     * @memberof BinAllOf
     */
    binStatusID?: number;
    /**
     * Bin Type ID
     * @type {number}
     * @memberof BinAllOf
     */
    binTypeID?: number;
    /**
     * Location Code
     * @type {string}
     * @memberof BinAllOf
     */
    locationCode?: string;
    /**
     * Bin Name
     * @type {string}
     * @memberof BinAllOf
     */
    name?: string;
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
     * New Bin's Status ID
     * @type {number}
     * @memberof BinModel
     */
    binStatusID?: number;
    /**
     * New Bin's Type ID
     * @type {number}
     * @memberof BinModel
     */
    binTypeID?: number;
    /**
     * Location Identifier of the owning location
     * @type {number}
     * @memberof BinModel
     */
    locationID?: number;
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
 * Range of bins
 * @export
 * @interface BinRange
 */
export interface BinRange {
    /**
     * End Bin Name
     * @type {string}
     * @memberof BinRange
     */
    endBinName?: string;
    /**
     * Start Bin Name
     * @type {string}
     * @memberof BinRange
     */
    startBinName?: string;
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
     * Flag for showing negative inventory
     * @type {boolean}
     * @memberof BinSearchRequest
     */
    showNegativeInventory?: boolean;
    /**
     * Flag for sorting ascending
     * @type {boolean}
     * @memberof BinSearchRequest
     */
    sortAscending?: boolean;
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
     * which page to show
     * @type {number}
     * @memberof BinSearchRequest
     */
    pageNum?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof BinSearchRequest
     */
    pageSize?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof BinSearchRequest
     */
    sortBy?: string;
    /**
     * user id
     * @type {number}
     * @memberof BinSearchRequest
     */
    userID?: number;
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
     * Flag for showing negative inventory
     * @type {boolean}
     * @memberof BinSearchRequestAllOf
     */
    showNegativeInventory?: boolean;
    /**
     * Flag for sorting ascending
     * @type {boolean}
     * @memberof BinSearchRequestAllOf
     */
    sortAscending?: boolean;
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
    /**
     * Flag for success
     * @type {boolean}
     * @memberof BinSearchResponse
     */
    success?: boolean;
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
     * Block assignment of item at product/location level. ONLY allowed on deallocate.
     * @type {boolean}
     * @memberof BlockAssignmentItem
     */
    blockAssignment: boolean;
    /**
     * part number
     * @type {string}
     * @memberof BlockAssignmentItem
     */
    partNumber?: string;
    /**
     * quantity
     * @type {number}
     * @memberof BlockAssignmentItem
     */
    quantity?: number;
    /**
     * sku
     * @type {string}
     * @memberof BlockAssignmentItem
     */
    sku?: string;
    /**
     * upc
     * @type {string}
     * @memberof BlockAssignmentItem
     */
    upc?: string;
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
     * which page to show
     * @type {number}
     * @memberof BlockAssignmentRequest
     */
    pageNum?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof BlockAssignmentRequest
     */
    pageSize?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof BlockAssignmentRequest
     */
    sortBy?: string;
    /**
     * user id
     * @type {number}
     * @memberof BlockAssignmentRequest
     */
    userID?: number;
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
 * ClearEventQueueRequest
 * @export
 * @interface ClearEventQueueRequest
 */
export interface ClearEventQueueRequest {
    /**
     * Clear events queued after this date. Date format looks like: 2010-01-30
     * @type {string}
     * @memberof ClearEventQueueRequest
     */
    after?: string;
    /**
     * Clear events queued before this date. Date format looks like: 2010-01-30
     * @type {string}
     * @memberof ClearEventQueueRequest
     */
    before?: string;
    /**
     * Location Code
     * @type {string}
     * @memberof ClearEventQueueRequest
     */
    locationCode?: string;
    /**
     * which page to show
     * @type {number}
     * @memberof ClearEventQueueRequest
     */
    pageNum?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof ClearEventQueueRequest
     */
    pageSize?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof ClearEventQueueRequest
     */
    sortBy?: string;
    /**
     * user id
     * @type {number}
     * @memberof ClearEventQueueRequest
     */
    userID?: number;
}
/**
 * 
 * @export
 * @interface ClearEventQueueRequestAllOf
 */
export interface ClearEventQueueRequestAllOf {
    /**
     * Clear events queued after this date. Date format looks like: 2010-01-30
     * @type {string}
     * @memberof ClearEventQueueRequestAllOf
     */
    after?: string;
    /**
     * Clear events queued before this date. Date format looks like: 2010-01-30
     * @type {string}
     * @memberof ClearEventQueueRequestAllOf
     */
    before?: string;
}
/**
 * Request for creating a tenant
 * @export
 * @interface CloneTenantRequest
 */
export interface CloneTenantRequest {
    /**
     * Source Tenant ID
     * @type {number}
     * @memberof CloneTenantRequest
     */
    sourceTenantID?: number;
    /**
     * Target Tenant ID
     * @type {number}
     * @memberof CloneTenantRequest
     */
    targetTenantID?: number;
    /**
     * Target Tenant name
     * @type {string}
     * @memberof CloneTenantRequest
     */
    targetTenantName?: string;
    /**
     * Location Code
     * @type {string}
     * @memberof CloneTenantRequest
     */
    locationCode?: string;
    /**
     * which page to show
     * @type {number}
     * @memberof CloneTenantRequest
     */
    pageNum?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof CloneTenantRequest
     */
    pageSize?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof CloneTenantRequest
     */
    sortBy?: string;
    /**
     * user id
     * @type {number}
     * @memberof CloneTenantRequest
     */
    userID?: number;
}
/**
 * 
 * @export
 * @interface CloneTenantRequestAllOf
 */
export interface CloneTenantRequestAllOf {
    /**
     * Source Tenant ID
     * @type {number}
     * @memberof CloneTenantRequestAllOf
     */
    sourceTenantID?: number;
    /**
     * Target Tenant ID
     * @type {number}
     * @memberof CloneTenantRequestAllOf
     */
    targetTenantID?: number;
    /**
     * Target Tenant name
     * @type {string}
     * @memberof CloneTenantRequestAllOf
     */
    targetTenantName?: string;
}
/**
 * Complete Wave Response
 * @export
 * @interface CompleteWaveResponse
 */
export interface CompleteWaveResponse {
    /**
     * Audit Identifier
     * @type {number}
     * @memberof CompleteWaveResponse
     */
    auditID?: number;
    /**
     * Recovery Wave Identifier
     * @type {number}
     * @memberof CompleteWaveResponse
     */
    recoveryWaveID?: number;
    /**
     * List of messages
     * @type {Array<string>}
     * @memberof CompleteWaveResponse
     */
    messages?: Array<string>;
    /**
     * Number of results
     * @type {number}
     * @memberof CompleteWaveResponse
     */
    numResults?: number;
    /**
     * Flag for success
     * @type {boolean}
     * @memberof CompleteWaveResponse
     */
    success?: boolean;
}
/**
 * 
 * @export
 * @interface CompleteWaveResponseAllOf
 */
export interface CompleteWaveResponseAllOf {
    /**
     * Audit Identifier
     * @type {number}
     * @memberof CompleteWaveResponseAllOf
     */
    auditID?: number;
    /**
     * Recovery Wave Identifier
     * @type {number}
     * @memberof CompleteWaveResponseAllOf
     */
    recoveryWaveID?: number;
}
/**
 * Request for creating an audit
 * @export
 * @interface CreateAuditRequest
 */
export interface CreateAuditRequest {
    /**
     * List of Create Audit Request Bins
     * @type {Array<CreateAuditRequestBin>}
     * @memberof CreateAuditRequest
     */
    bins?: Array<CreateAuditRequestBin>;
    /**
     * Location Code
     * @type {string}
     * @memberof CreateAuditRequest
     */
    locationCode?: string;
    /**
     * which page to show
     * @type {number}
     * @memberof CreateAuditRequest
     */
    pageNum?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof CreateAuditRequest
     */
    pageSize?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof CreateAuditRequest
     */
    sortBy?: string;
    /**
     * user id
     * @type {number}
     * @memberof CreateAuditRequest
     */
    userID?: number;
}
/**
 * 
 * @export
 * @interface CreateAuditRequestAllOf
 */
export interface CreateAuditRequestAllOf {
    /**
     * List of Create Audit Request Bins
     * @type {Array<CreateAuditRequestBin>}
     * @memberof CreateAuditRequestAllOf
     */
    bins?: Array<CreateAuditRequestBin>;
}
/**
 * Request for creating an audit bin
 * @export
 * @interface CreateAuditRequestBin
 */
export interface CreateAuditRequestBin {
    /**
     * Name of bin
     * @type {string}
     * @memberof CreateAuditRequestBin
     */
    binName?: string;
    /**
     * List of Products within a bin
     * @type {Array<InventoryProduct>}
     * @memberof CreateAuditRequestBin
     */
    products?: Array<InventoryProduct>;
}
/**
 * Request needed for creating a new bin
 * @export
 * @interface CreateBinRequest
 */
export interface CreateBinRequest {
    /**
     * Bin Status Identifier
     * @type {number}
     * @memberof CreateBinRequest
     */
    binStatusID?: number;
    /**
     * Bin Type Identifier
     * @type {number}
     * @memberof CreateBinRequest
     */
    binTypeID?: number;
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
     * which page to show
     * @type {number}
     * @memberof CreateBinRequest
     */
    pageNum?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof CreateBinRequest
     */
    pageSize?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof CreateBinRequest
     */
    sortBy?: string;
    /**
     * user id
     * @type {number}
     * @memberof CreateBinRequest
     */
    userID?: number;
}
/**
 * 
 * @export
 * @interface CreateBinRequestAllOf
 */
export interface CreateBinRequestAllOf {
    /**
     * Bin Status Identifier
     * @type {number}
     * @memberof CreateBinRequestAllOf
     */
    binStatusID?: number;
    /**
     * Bin Type Identifier
     * @type {number}
     * @memberof CreateBinRequestAllOf
     */
    binTypeID?: number;
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
     * 
     * @type {ExportSettingsFTP}
     * @memberof CreateExportSettingsFTPRequest
     */
    exportSettingsFTP: ExportSettingsFTP;
    /**
     * Export Settings Name to associate the ftp settings with
     * @type {string}
     * @memberof CreateExportSettingsFTPRequest
     */
    exportSettingsName: string;
    /**
     * Location Code
     * @type {string}
     * @memberof CreateExportSettingsFTPRequest
     */
    locationCode?: string;
    /**
     * which page to show
     * @type {number}
     * @memberof CreateExportSettingsFTPRequest
     */
    pageNum?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof CreateExportSettingsFTPRequest
     */
    pageSize?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof CreateExportSettingsFTPRequest
     */
    sortBy?: string;
    /**
     * user id
     * @type {number}
     * @memberof CreateExportSettingsFTPRequest
     */
    userID?: number;
}
/**
 * 
 * @export
 * @interface CreateExportSettingsFTPRequestAllOf
 */
export interface CreateExportSettingsFTPRequestAllOf {
    /**
     * 
     * @type {ExportSettingsFTP}
     * @memberof CreateExportSettingsFTPRequestAllOf
     */
    exportSettingsFTP?: ExportSettingsFTP;
    /**
     * Export Settings Name to associate the ftp settings with
     * @type {string}
     * @memberof CreateExportSettingsFTPRequestAllOf
     */
    exportSettingsName?: string;
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
     * which page to show
     * @type {number}
     * @memberof CreateExportSettingsRequest
     */
    pageNum?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof CreateExportSettingsRequest
     */
    pageSize?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof CreateExportSettingsRequest
     */
    sortBy?: string;
    /**
     * user id
     * @type {number}
     * @memberof CreateExportSettingsRequest
     */
    userID?: number;
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
     * which page to show
     * @type {number}
     * @memberof CreateExportSettingsS3Request
     */
    pageNum?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof CreateExportSettingsS3Request
     */
    pageSize?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof CreateExportSettingsS3Request
     */
    sortBy?: string;
    /**
     * user id
     * @type {number}
     * @memberof CreateExportSettingsS3Request
     */
    userID?: number;
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
 * Request for creating a site
 * @export
 * @interface CreateSiteRequest
 */
export interface CreateSiteRequest {
    /**
     * Site name
     * @type {string}
     * @memberof CreateSiteRequest
     */
    name?: string;
    /**
     * Site ID
     * @type {number}
     * @memberof CreateSiteRequest
     */
    siteID?: number;
    /**
     * Tenant ID
     * @type {number}
     * @memberof CreateSiteRequest
     */
    tenantID?: number;
    /**
     * Location Code
     * @type {string}
     * @memberof CreateSiteRequest
     */
    locationCode?: string;
    /**
     * which page to show
     * @type {number}
     * @memberof CreateSiteRequest
     */
    pageNum?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof CreateSiteRequest
     */
    pageSize?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof CreateSiteRequest
     */
    sortBy?: string;
    /**
     * user id
     * @type {number}
     * @memberof CreateSiteRequest
     */
    userID?: number;
}
/**
 * 
 * @export
 * @interface CreateSiteRequestAllOf
 */
export interface CreateSiteRequestAllOf {
    /**
     * Site name
     * @type {string}
     * @memberof CreateSiteRequestAllOf
     */
    name?: string;
    /**
     * Site ID
     * @type {number}
     * @memberof CreateSiteRequestAllOf
     */
    siteID?: number;
    /**
     * Tenant ID
     * @type {number}
     * @memberof CreateSiteRequestAllOf
     */
    tenantID?: number;
}
/**
 * Request for creating a tenant
 * @export
 * @interface CreateTenantRequest
 */
export interface CreateTenantRequest {
    /**
     * Tenant name
     * @type {string}
     * @memberof CreateTenantRequest
     */
    name?: string;
    /**
     * Tenant ID
     * @type {number}
     * @memberof CreateTenantRequest
     */
    tenantID?: number;
    /**
     * String Enum value for Unified Tenant Type (EcommOnly, EcommPlusOms, OmsOnly, CurbsideOnly)
     * @type {string}
     * @memberof CreateTenantRequest
     */
    unifiedTenantType?: string;
    /**
     * Location Code
     * @type {string}
     * @memberof CreateTenantRequest
     */
    locationCode?: string;
    /**
     * which page to show
     * @type {number}
     * @memberof CreateTenantRequest
     */
    pageNum?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof CreateTenantRequest
     */
    pageSize?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof CreateTenantRequest
     */
    sortBy?: string;
    /**
     * user id
     * @type {number}
     * @memberof CreateTenantRequest
     */
    userID?: number;
}
/**
 * 
 * @export
 * @interface CreateTenantRequestAllOf
 */
export interface CreateTenantRequestAllOf {
    /**
     * Tenant name
     * @type {string}
     * @memberof CreateTenantRequestAllOf
     */
    name?: string;
    /**
     * Tenant ID
     * @type {number}
     * @memberof CreateTenantRequestAllOf
     */
    tenantID?: number;
    /**
     * String Enum value for Unified Tenant Type (EcommOnly, EcommPlusOms, OmsOnly, CurbsideOnly)
     * @type {string}
     * @memberof CreateTenantRequestAllOf
     */
    unifiedTenantType?: string;
}
/**
 * Create Wave Response
 * @export
 * @interface CreateWaveResponse
 */
export interface CreateWaveResponse {
    /**
     * Wave Identifier
     * @type {number}
     * @memberof CreateWaveResponse
     */
    waveID?: number;
    /**
     * List of messages
     * @type {Array<string>}
     * @memberof CreateWaveResponse
     */
    messages?: Array<string>;
    /**
     * Number of results
     * @type {number}
     * @memberof CreateWaveResponse
     */
    numResults?: number;
    /**
     * Flag for success
     * @type {boolean}
     * @memberof CreateWaveResponse
     */
    success?: boolean;
}
/**
 * 
 * @export
 * @interface CreateWaveResponseAllOf
 */
export interface CreateWaveResponseAllOf {
    /**
     * Wave Identifier
     * @type {number}
     * @memberof CreateWaveResponseAllOf
     */
    waveID?: number;
}
/**
 * Range of dates
 * @export
 * @interface DateRange
 */
export interface DateRange {
    /**
     * End Date
     * @type {string}
     * @memberof DateRange
     */
    endDate?: string;
    /**
     * Start Date
     * @type {string}
     * @memberof DateRange
     */
    startDate?: string;
}
/**
 * Request needed for deleting future inventory
 * @export
 * @interface DeleteFutureItemRequest
 */
export interface DeleteFutureItemRequest {
    /**
     * Flag used to request deletion of future inventory across all locations (overrides locationCodes).
     * @type {boolean}
     * @memberof DeleteFutureItemRequest
     */
    allLocations?: boolean;
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
     * End of future date range to search on. Required Field example '2023-01-26T19:59:00+0000'
     * @type {string}
     * @memberof DeleteFutureItemRequest
     */
    futureEndDate?: string;
    /**
     * Start of future date range to search on. Required field example '2023-01-26T19:59:00+0000'
     * @type {string}
     * @memberof DeleteFutureItemRequest
     */
    futureStartDate?: string;
    /**
     * An array of locationCodes to be considered for item-deletion purposes. Optional.
     *     All locationCodes associated with the requesting tenant will be considered if no locationCodes are provided.
     * @type {Array<string>}
     * @memberof DeleteFutureItemRequest
     */
    locationCodes?: Array<string>;
    /**
     * The part number of the item to be deleted. Supports basic regex operators: .*+?^$[]
     * @type {string}
     * @memberof DeleteFutureItemRequest
     */
    partNumber?: string;
    /**
     * The sku of the item to be deleted. Supports basic regex operators: .*+?^$[]
     * @type {string}
     * @memberof DeleteFutureItemRequest
     */
    sku?: string;
    /**
     * The upc of the item to be deleted. Supports basic regex operators: .*+?^$[]
     * @type {string}
     * @memberof DeleteFutureItemRequest
     */
    upc?: string;
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
    jobIDs?: boolean;
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
}
/**
 * Request needed for deleting inventory
 * @export
 * @interface DeleteItemRequest
 */
export interface DeleteItemRequest {
    /**
     * Flag used to request deletion of inventory across all locations (overrides locationCodes).
     * @type {boolean}
     * @memberof DeleteItemRequest
     */
    allLocations?: boolean;
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
     * The part number of the item to be deleted. Supports basic regex operators: .*+?^$[]
     * @type {string}
     * @memberof DeleteItemRequest
     */
    partNumber?: string;
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
     * The upc of the item to be deleted. Supports basic regex operators: .*+?^$[]
     * @type {string}
     * @memberof DeleteItemRequest
     */
    upc?: string;
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
    jobIDs?: boolean;
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
}
/**
 * Request needed for deleting inventory
 * @export
 * @interface DeleteItemsRequest
 */
export interface DeleteItemsRequest {
    /**
     * Flag used to request deletion of inventory across all locations (overrides locationCodes).
     * @type {boolean}
     * @memberof DeleteItemsRequest
     */
    allLocations?: boolean;
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
     * List of items to delete. Supports basic regex operators: .*+?^$[]
     * @type {Array<InventoryItem>}
     * @memberof DeleteItemsRequest
     */
    items?: Array<InventoryItem>;
    /**
     * An array of locationCodes to be considered for item-deletion purposes. Optional.
     *     All locationCodes associated with the requesting tenant will be considered if no locationCodes are provided.
     * @type {Array<string>}
     * @memberof DeleteItemsRequest
     */
    locationCodes?: Array<string>;
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
     * Flag for sending the exports to the development droppoint
     * @type {boolean}
     * @memberof ExportInventoryRequest
     */
    development?: boolean;
    /**
     * Name of the FTP Settings to use. Will only check for this if exportID is already set
     * @type {string}
     * @memberof ExportInventoryRequest
     */
    exportSettingsFTPName?: string;
    /**
     * Name of the Export Settings to use
     * @type {string}
     * @memberof ExportInventoryRequest
     */
    exportSettingsName?: string;
    /**
     * Name of the S3 Settings to use. Will only check for this if exportID is already set
     * @type {string}
     * @memberof ExportInventoryRequest
     */
    exportSettingsS3Name?: string;
    /**
     * Location Code
     * @type {string}
     * @memberof ExportInventoryRequest
     */
    locationCode?: string;
    /**
     * which page to show
     * @type {number}
     * @memberof ExportInventoryRequest
     */
    pageNum?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof ExportInventoryRequest
     */
    pageSize?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof ExportInventoryRequest
     */
    sortBy?: string;
    /**
     * user id
     * @type {number}
     * @memberof ExportInventoryRequest
     */
    userID?: number;
}
/**
 * 
 * @export
 * @interface ExportInventoryRequestAllOf
 */
export interface ExportInventoryRequestAllOf {
    /**
     * Flag for sending the exports to the development droppoint
     * @type {boolean}
     * @memberof ExportInventoryRequestAllOf
     */
    development?: boolean;
    /**
     * Name of the FTP Settings to use. Will only check for this if exportID is already set
     * @type {string}
     * @memberof ExportInventoryRequestAllOf
     */
    exportSettingsFTPName?: string;
    /**
     * Name of the Export Settings to use
     * @type {string}
     * @memberof ExportInventoryRequestAllOf
     */
    exportSettingsName?: string;
    /**
     * Name of the S3 Settings to use. Will only check for this if exportID is already set
     * @type {string}
     * @memberof ExportInventoryRequestAllOf
     */
    exportSettingsS3Name?: string;
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
     * Flag for only using locations with Direct Ship enabled
     * @type {boolean}
     * @memberof ExportSettings
     */
    directShip?: boolean;
    /**
     * Flag for exporting as a single file
     * @type {boolean}
     * @memberof ExportSettings
     */
    exportSingleFile?: boolean;
    /**
     * Type of exportGG for the settings
     * @type {string}
     * @memberof ExportSettings
     */
    exportType: ExportSettingsExportTypeEnum;
    /**
     * Format for the export file
     * @type {string}
     * @memberof ExportSettings
     */
    fileFormat: ExportSettingsFileFormatEnum;
    /**
     * Name for the export file
     * @type {string}
     * @memberof ExportSettings
     */
    fileName?: string;
    /**
     * Floor
     * @type {string}
     * @memberof ExportSettings
     */
    floor?: ExportSettingsFloorEnum;
    /**
     * List of export FTP settings
     * @type {Array<ExportSettingsFTP>}
     * @memberof ExportSettings
     */
    ftpInformation: Array<ExportSettingsFTP>;
    /**
     * Flag for excluding negative inventory locations
     * @type {boolean}
     * @memberof ExportSettings
     */
    ignoreNegativeInventoryLocations?: boolean;
    /**
     * Flag for including attributes
     * @type {boolean}
     * @memberof ExportSettings
     */
    includeAttributes?: boolean;
    /**
     * Flag for marking the setting as a classic export
     * @type {boolean}
     * @memberof ExportSettings
     */
    isClassic?: boolean;
    /**
     * Location Group Ids associated with the settings
     * @type {Array<number>}
     * @memberof ExportSettings
     */
    locationGroupIDs?: Array<number>;
    /**
     * LTD
     * @type {string}
     * @memberof ExportSettings
     */
    ltd?: ExportSettingsLtdEnum;
    /**
     * Export Settings Name
     * @type {string}
     * @memberof ExportSettings
     */
    name: string;
    /**
     * Flag for only sending from active locations
     * @type {boolean}
     * @memberof ExportSettings
     */
    onlySendActiveLocations?: boolean;
    /**
     * Flag for only sending available
     * @type {boolean}
     * @memberof ExportSettings
     */
    onlySendAvailable?: boolean;
    /**
     * Flag for only using locations with In Store Pickup enabled
     * @type {boolean}
     * @memberof ExportSettings
     */
    pickup?: boolean;
    /**
     * Enum for export productMapping
     * @type {string}
     * @memberof ExportSettings
     */
    productMapping?: ExportSettingsProductMappingEnum;
    /**
     * List of export S3 settings
     * @type {Array<ExportSettingsS3>}
     * @memberof ExportSettings
     */
    s3Information?: Array<ExportSettingsS3>;
    /**
     * Safety Stock
     * @type {string}
     * @memberof ExportSettings
     */
    safetyStock?: ExportSettingsSafetyStockEnum;
    /**
     * Flag for using shortened filenames
     * @type {boolean}
     * @memberof ExportSettings
     */
    shortenFilename?: boolean;
    /**
     * Site Ids associated with the settings
     * @type {Array<number>}
     * @memberof ExportSettings
     */
    siteIDs?: Array<number>;
    /**
     * Associative Map of <String, String> for tagCategoryName => tagName
     * @type {{ [key: string]: string; }}
     * @memberof ExportSettings
     */
    tags?: { [key: string]: string; };
    /**
     * Flag for only using locations with Transfer enabled
     * @type {boolean}
     * @memberof ExportSettings
     */
    transfer?: boolean;
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
     * Name for the zipped file
     * @type {string}
     * @memberof ExportSettings
     */
    zipFileName?: string;
    /**
     * Flag for zipping the files
     * @type {boolean}
     * @memberof ExportSettings
     */
    zipFiles?: boolean;
}


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
export const ExportSettingsFileFormatEnum = {
    Xml: 'XML',
    Csv: 'CSV'
} as const;
export type ExportSettingsFileFormatEnum = typeof ExportSettingsFileFormatEnum[keyof typeof ExportSettingsFileFormatEnum];

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
     * Control File Name
     * @type {string}
     * @memberof ExportSettingsFTP
     */
    controlFileName?: string;
    /**
     * FTP Delivery Class. Defaults to ExportDeliveryDefault
     * @type {string}
     * @memberof ExportSettingsFTP
     */
    deliveryClass?: string;
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
    /**
     * Export Settings FTP ID
     * @type {number}
     * @memberof ExportSettingsFTP
     */
    exportSettingsFTPID?: number;
    /**
     * Export Settings ID
     * @type {number}
     * @memberof ExportSettingsFTP
     */
    exportSettingsID?: number;
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
     * FTP Password
     * @type {string}
     * @memberof ExportSettingsFTP
     */
    ftpPassword?: string;
    /**
     * FTP Server Port
     * @type {number}
     * @memberof ExportSettingsFTP
     */
    ftpPort: number;
    /**
     * FTP Server Address
     * @type {string}
     * @memberof ExportSettingsFTP
     */
    ftpServer: string;
    /**
     * FTP Username
     * @type {string}
     * @memberof ExportSettingsFTP
     */
    ftpUser?: string;
    /**
     * Export Settings FTP Name
     * @type {string}
     * @memberof ExportSettingsFTP
     */
    name: string;
    /**
     * Remote File Name
     * @type {string}
     * @memberof ExportSettingsFTP
     */
    remoteFileName?: string;
}
/**
 * Job ID Response
 * @export
 * @interface ExportSettingsResponse
 */
export interface ExportSettingsResponse {
    /**
     * Created Export Settings FTP Name
     * @type {string}
     * @memberof ExportSettingsResponse
     */
    exportSettingsFTPName?: string;
    /**
     * Created Export Settings Name
     * @type {string}
     * @memberof ExportSettingsResponse
     */
    exportSettingsName?: string;
    /**
     * Created Export Settings S3 Name
     * @type {string}
     * @memberof ExportSettingsResponse
     */
    exportSettingsS3Name?: string;
}
/**
 * Export Settings S3
 * @export
 * @interface ExportSettingsS3
 */
export interface ExportSettingsS3 {
    /**
     * Flag for Active State
     * @type {boolean}
     * @memberof ExportSettingsS3
     */
    active?: boolean;
    /**
     * S3 Bucket (directory)
     * @type {string}
     * @memberof ExportSettingsS3
     */
    bucket: string;
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
     * S3 Region
     * @type {string}
     * @memberof ExportSettingsS3
     */
    region: string;
}
/**
 * Request for Fetch File Configs
 * @export
 * @interface FetchFileConfigRequest
 */
export interface FetchFileConfigRequest {
    /**
     * 
     * @type {any}
     * @memberof FetchFileConfigRequest
     */
    active: any | null;
    /**
     * 
     * @type {any}
     * @memberof FetchFileConfigRequest
     */
    blankQuantityIsZero?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FetchFileConfigRequest
     */
    ignoreExtraFields?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FetchFileConfigRequest
     */
    multipleFiles?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FetchFileConfigRequest
     */
    refreshEnabled?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FetchFileConfigRequest
     */
    updateEnabled?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FetchFileConfigRequest
     */
    useControlFile?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FetchFileConfigRequest
     */
    zeroOutNegatives?: any | null;
    /**
     * S3 Archive Bucket
     * @type {string}
     * @memberof FetchFileConfigRequest
     */
    archiveBucket?: string;
    /**
     * S3 Bucket
     * @type {string}
     * @memberof FetchFileConfigRequest
     */
    bucket?: string;
    /**
     * Delimiter
     * @type {string}
     * @memberof FetchFileConfigRequest
     */
    csvDelimiter?: string;
    /**
     * Email List
     * @type {string}
     * @memberof FetchFileConfigRequest
     */
    emailList?: string;
    /**
     * Fetch File Config ID
     * @type {number}
     * @memberof FetchFileConfigRequest
     */
    fetchFileConfigID?: number;
    /**
     * List of field names
     * @type {Array<string>}
     * @memberof FetchFileConfigRequest
     */
    fieldNameMap?: Array<string>;
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
     * Enum for fetch file productMapping
     * @type {string}
     * @memberof FetchFileConfigRequest
     */
    productMapping?: FetchFileConfigRequestProductMappingEnum;
    /**
     * Description for the refresh file
     * @type {string}
     * @memberof FetchFileConfigRequest
     */
    refreshFileDescription?: string;
    /**
     * S3 Region
     * @type {string}
     * @memberof FetchFileConfigRequest
     */
    region?: string;
    /**
     * S3 Archive Bucket Path (directory)
     * @type {string}
     * @memberof FetchFileConfigRequest
     */
    s3ArchivePath?: string;
    /**
     * S3 Bucket Path (directory)
     * @type {string}
     * @memberof FetchFileConfigRequest
     */
    s3Path?: string;
    /**
     * Flag for if its a test ftp config
     * @type {boolean}
     * @memberof FetchFileConfigRequest
     */
    testFTPConfigs?: boolean;
    /**
     * Description for the update file
     * @type {string}
     * @memberof FetchFileConfigRequest
     */
    updateFileDescription?: string;
    /**
     * Location Code
     * @type {string}
     * @memberof FetchFileConfigRequest
     */
    locationCode?: string;
    /**
     * which page to show
     * @type {number}
     * @memberof FetchFileConfigRequest
     */
    pageNum?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof FetchFileConfigRequest
     */
    pageSize?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof FetchFileConfigRequest
     */
    sortBy?: string;
    /**
     * user id
     * @type {number}
     * @memberof FetchFileConfigRequest
     */
    userID?: number;
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
     * Flag for active state
     * @type {boolean}
     * @memberof FetchFileConfigRequestAllOf
     */
    active?: boolean;
    /**
     * S3 Archive Bucket
     * @type {string}
     * @memberof FetchFileConfigRequestAllOf
     */
    archiveBucket?: string;
    /**
     * Flag to convert null quantities to zero
     * @type {boolean}
     * @memberof FetchFileConfigRequestAllOf
     */
    blankQuantityIsZero?: boolean;
    /**
     * S3 Bucket
     * @type {string}
     * @memberof FetchFileConfigRequestAllOf
     */
    bucket?: string;
    /**
     * Delimiter
     * @type {string}
     * @memberof FetchFileConfigRequestAllOf
     */
    csvDelimiter?: string;
    /**
     * Email List
     * @type {string}
     * @memberof FetchFileConfigRequestAllOf
     */
    emailList?: string;
    /**
     * Fetch File Config ID
     * @type {number}
     * @memberof FetchFileConfigRequestAllOf
     */
    fetchFileConfigID?: number;
    /**
     * List of field names
     * @type {Array<string>}
     * @memberof FetchFileConfigRequestAllOf
     */
    fieldNameMap?: Array<string>;
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
     * Flag for ignoring extra fields
     * @type {boolean}
     * @memberof FetchFileConfigRequestAllOf
     */
    ignoreExtraFields?: boolean;
    /**
     * Lock name
     * @type {string}
     * @memberof FetchFileConfigRequestAllOf
     */
    lockName?: string;
    /**
     * Flag for using multiple files
     * @type {boolean}
     * @memberof FetchFileConfigRequestAllOf
     */
    multipleFiles?: boolean;
    /**
     * Enum denoting action post processing
     * @type {number}
     * @memberof FetchFileConfigRequestAllOf
     */
    postProcessAction?: number;
    /**
     * Enum for fetch file productMapping
     * @type {string}
     * @memberof FetchFileConfigRequestAllOf
     */
    productMapping?: FetchFileConfigRequestAllOfProductMappingEnum;
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
     * S3 Region
     * @type {string}
     * @memberof FetchFileConfigRequestAllOf
     */
    region?: string;
    /**
     * S3 Archive Bucket Path (directory)
     * @type {string}
     * @memberof FetchFileConfigRequestAllOf
     */
    s3ArchivePath?: string;
    /**
     * S3 Bucket Path (directory)
     * @type {string}
     * @memberof FetchFileConfigRequestAllOf
     */
    s3Path?: string;
    /**
     * Flag for if its a test ftp config
     * @type {boolean}
     * @memberof FetchFileConfigRequestAllOf
     */
    testFTPConfigs?: boolean;
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
     * Flag for using control file
     * @type {boolean}
     * @memberof FetchFileConfigRequestAllOf
     */
    useControlFile?: boolean;
    /**
     * Flag for converting negatives to zero
     * @type {boolean}
     * @memberof FetchFileConfigRequestAllOf
     */
    zeroOutNegatives?: boolean;
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
     * List of files found on the specified sftp archive directory
     * @type {Array<string>}
     * @memberof FetchFileConnectionResponse
     */
    ftpArchiveFiles?: Array<string>;
    /**
     * List of files found on the specified sftp directory
     * @type {Array<string>}
     * @memberof FetchFileConnectionResponse
     */
    ftpFiles?: Array<string>;
    /**
     * List of files found on the specified s3 archive bucket/path
     * @type {Array<string>}
     * @memberof FetchFileConnectionResponse
     */
    s3ArchiveFiles?: Array<string>;
    /**
     * List of files found on the specified s3 bucket/path
     * @type {Array<string>}
     * @memberof FetchFileConnectionResponse
     */
    s3Files?: Array<string>;
}
/**
 * Request needed for getting a list of bins
 * @export
 * @interface GetBinsRequest
 */
export interface GetBinsRequest {
    /**
     * term to search for
     * @type {string}
     * @memberof GetBinsRequest
     */
    searchTerm?: string;
    /**
     * Location Code
     * @type {string}
     * @memberof GetBinsRequest
     */
    locationCode?: string;
    /**
     * which page to show
     * @type {number}
     * @memberof GetBinsRequest
     */
    pageNum?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof GetBinsRequest
     */
    pageSize?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof GetBinsRequest
     */
    sortBy?: string;
    /**
     * user id
     * @type {number}
     * @memberof GetBinsRequest
     */
    userID?: number;
}
/**
 * 
 * @export
 * @interface GetBinsRequestAllOf
 */
export interface GetBinsRequestAllOf {
    /**
     * term to search for
     * @type {string}
     * @memberof GetBinsRequestAllOf
     */
    searchTerm?: string;
}
/**
 * Response for get Export Settings
 * @export
 * @interface GetExportSettingsResponse
 */
export interface GetExportSettingsResponse {
    /**
     * 
     * @type {ExportSettings}
     * @memberof GetExportSettingsResponse
     */
    exportSettings?: ExportSettings;
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
 * InventoryAllocationResponse Object
 * @export
 * @interface InventoryAllocationResponse
 */
export interface InventoryAllocationResponse {
    /**
     * 
     * @type {string}
     * @memberof InventoryAllocationResponse
     */
    condition?: string;
    /**
     * 
     * @type {string}
     * @memberof InventoryAllocationResponse
     */
    date?: string;
    /**
     * Future Date at which the inventory should be allocated against. Expected format '2020-09-28T12:00:00-0500'
     * @type {string}
     * @memberof InventoryAllocationResponse
     */
    futureDate?: string;
    /**
     * 
     * @type {string}
     * @memberof InventoryAllocationResponse
     */
    lotCode?: string;
    /**
     * order item ID
     * @type {number}
     * @memberof InventoryAllocationResponse
     */
    orderItemID?: number;
    /**
     * quantity
     * @type {number}
     * @memberof InventoryAllocationResponse
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof InventoryAllocationResponse
     */
    serialNumber?: string;
    /**
     * state
     * @type {string}
     * @memberof InventoryAllocationResponse
     */
    state?: string;
    /**
     * Associative Map of <String, String> for tagCategoryName => tagName
     * @type {{ [key: string]: string; }}
     * @memberof InventoryAllocationResponse
     */
    tags?: { [key: string]: string; };
    /**
     * upc
     * @type {string}
     * @memberof InventoryAllocationResponse
     */
    upc?: string;
}
/**
 * Future Inventory Model
 * @export
 * @interface InventoryFutureInventory
 */
export interface InventoryFutureInventory {
    /**
     * Expected change in the actual allocated inventory value when this future inventory record is released.
     * @type {number}
     * @memberof InventoryFutureInventory
     */
    allocated?: number;
    /**
     * Expected change in the actual available inventory value when this future inventory record is released.
     * @type {number}
     * @memberof InventoryFutureInventory
     */
    available?: number;
    /**
     * Date the inventory was created.
     * @type {string}
     * @memberof InventoryFutureInventory
     */
    createDate?: string;
    /**
     * Date at which this inventory will become available. Expected format '2020-09-28T12:00:00-0500'
     * @type {string}
     * @memberof InventoryFutureInventory
     */
    deliveryDate?: string;
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
}
/**
 * Item
 * @export
 * @interface InventoryItem
 */
export interface InventoryItem {
    /**
     * 
     * @type {string}
     * @memberof InventoryItem
     */
    condition?: string;
    /**
     * 
     * @type {string}
     * @memberof InventoryItem
     */
    date?: string;
    /**
     * 
     * @type {string}
     * @memberof InventoryItem
     */
    lotCode?: string;
    /**
     * Part/Product Number
     * @type {string}
     * @memberof InventoryItem
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof InventoryItem
     */
    serialNumber?: string;
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
    /**
     * Universal Product Code
     * @type {string}
     * @memberof InventoryItem
     */
    upc?: string;
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
     * SKU
     * @type {string}
     * @memberof InventoryProduct
     */
    sku?: string;
    /**
     * UPC
     * @type {string}
     * @memberof InventoryProduct
     */
    upc?: string;
}
/**
 * Request for getting Inventory
 * @export
 * @interface InventoryRequest
 */
export interface InventoryRequest {
    /**
     * DateTime to filter for only future inventory with a delivery date after or equal to the given date
     * @type {string}
     * @memberof InventoryRequest
     */
    deliveryDateAfter?: string;
    /**
     * DateTime to filter for only future inventory with a delivery date before or equal to the given date
     * @type {string}
     * @memberof InventoryRequest
     */
    deliveryDateBefore?: string;
    /**
     * Whether to limit results to locations that are shipping enabled
     * @type {boolean}
     * @memberof InventoryRequest
     */
    directShip?: boolean;
    /**
     * Filter out results that are blocked from assignment (at the product/location level) 
     * @type {boolean}
     * @memberof InventoryRequest
     */
    excludeBlockedAssignment?: boolean;
    /**
     * Whether to force populate default tags onto the request if they are unspecified for any tag category
     * @type {boolean}
     * @memberof InventoryRequest
     */
    forceDefaultsForUnspecifiedTagCategories?: boolean;
    /**
     * Whether to ignore the safety stock buffer put in place
     * @type {boolean}
     * @memberof InventoryRequest
     */
    ignoreSafetyStock?: boolean;
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
     * Whether to allow items with negative future inventory in the results
     * @type {boolean}
     * @memberof InventoryRequest
     */
    includeNegativeFutureInventory?: boolean;
    /**
     * Whether to allow items with negative inventory in the results
     * @type {boolean}
     * @memberof InventoryRequest
     */
    includeNegativeInventory?: boolean;
    /**
     * List of Items to search on
     * @type {Array<ItemQuantity>}
     * @memberof InventoryRequest
     */
    items: Array<ItemQuantity>;
    /**
     * The maximum number of results to return, defaults to 100 for most
     * @type {number}
     * @memberof InventoryRequest
     */
    limit?: number;
    /**
     * List of location codes that are NOT allowed to be included in results
     * @type {Array<string>}
     * @memberof InventoryRequest
     */
    locationBlacklist?: Array<string>;
    /**
     * List of location codes that should be returned before all others, preventing them from being excluded by limit
     * @type {Array<string>}
     * @memberof InventoryRequest
     */
    locationPriorityList?: Array<string>;
    /**
     * List of location codes that are allowed to be included in results
     * @type {Array<string>}
     * @memberof InventoryRequest
     */
    locationWhitelist?: Array<string>;
    /**
     * Filter results by locations that have finderbot enabled (true) or don't (false)
     * @type {boolean}
     * @memberof InventoryRequest
     */
    pickup?: boolean;
    /**
     * 
     * @type {RequestLocation}
     * @memberof InventoryRequest
     */
    requestLocation?: RequestLocation;
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
     * Associative Map of <String, String> for tagCategoryName => tagName
     * @type {{ [key: string]: string; }}
     * @memberof InventoryRequest
     */
    tags?: { [key: string]: string; };
    /**
     * Filter results by locations that have transfer enabled (true) or don't (false)
     * @type {boolean}
     * @memberof InventoryRequest
     */
    transferEnabled?: boolean;
    /**
     * Inventory Request Type Enum
     * @type {string}
     * @memberof InventoryRequest
     */
    type: InventoryRequestTypeEnum;
    /**
     * Location Code
     * @type {string}
     * @memberof InventoryRequest
     */
    locationCode?: string;
    /**
     * which page to show
     * @type {number}
     * @memberof InventoryRequest
     */
    pageNum?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof InventoryRequest
     */
    pageSize?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof InventoryRequest
     */
    sortBy?: string;
    /**
     * user id
     * @type {number}
     * @memberof InventoryRequest
     */
    userID?: number;
}


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
 * 
 * @export
 * @interface InventoryRequestAllOf
 */
export interface InventoryRequestAllOf {
    /**
     * DateTime to filter for only future inventory with a delivery date after or equal to the given date
     * @type {string}
     * @memberof InventoryRequestAllOf
     */
    deliveryDateAfter?: string;
    /**
     * DateTime to filter for only future inventory with a delivery date before or equal to the given date
     * @type {string}
     * @memberof InventoryRequestAllOf
     */
    deliveryDateBefore?: string;
    /**
     * Whether to limit results to locations that are shipping enabled
     * @type {boolean}
     * @memberof InventoryRequestAllOf
     */
    directShip?: boolean;
    /**
     * Filter out results that are blocked from assignment (at the product/location level) 
     * @type {boolean}
     * @memberof InventoryRequestAllOf
     */
    excludeBlockedAssignment?: boolean;
    /**
     * Whether to force populate default tags onto the request if they are unspecified for any tag category
     * @type {boolean}
     * @memberof InventoryRequestAllOf
     */
    forceDefaultsForUnspecifiedTagCategories?: boolean;
    /**
     * Whether to ignore the safety stock buffer put in place
     * @type {boolean}
     * @memberof InventoryRequestAllOf
     */
    ignoreSafetyStock?: boolean;
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
     * Whether to allow items with negative future inventory in the results
     * @type {boolean}
     * @memberof InventoryRequestAllOf
     */
    includeNegativeFutureInventory?: boolean;
    /**
     * Whether to allow items with negative inventory in the results
     * @type {boolean}
     * @memberof InventoryRequestAllOf
     */
    includeNegativeInventory?: boolean;
    /**
     * List of Items to search on
     * @type {Array<ItemQuantity>}
     * @memberof InventoryRequestAllOf
     */
    items?: Array<ItemQuantity>;
    /**
     * The maximum number of results to return, defaults to 100 for most
     * @type {number}
     * @memberof InventoryRequestAllOf
     */
    limit?: number;
    /**
     * List of location codes that are NOT allowed to be included in results
     * @type {Array<string>}
     * @memberof InventoryRequestAllOf
     */
    locationBlacklist?: Array<string>;
    /**
     * List of location codes that should be returned before all others, preventing them from being excluded by limit
     * @type {Array<string>}
     * @memberof InventoryRequestAllOf
     */
    locationPriorityList?: Array<string>;
    /**
     * List of location codes that are allowed to be included in results
     * @type {Array<string>}
     * @memberof InventoryRequestAllOf
     */
    locationWhitelist?: Array<string>;
    /**
     * Filter results by locations that have finderbot enabled (true) or don't (false)
     * @type {boolean}
     * @memberof InventoryRequestAllOf
     */
    pickup?: boolean;
    /**
     * 
     * @type {RequestLocation}
     * @memberof InventoryRequestAllOf
     */
    requestLocation?: RequestLocation;
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
     * Associative Map of <String, String> for tagCategoryName => tagName
     * @type {{ [key: string]: string; }}
     * @memberof InventoryRequestAllOf
     */
    tags?: { [key: string]: string; };
    /**
     * Filter results by locations that have transfer enabled (true) or don't (false)
     * @type {boolean}
     * @memberof InventoryRequestAllOf
     */
    transferEnabled?: boolean;
    /**
     * Inventory Request Type Enum
     * @type {string}
     * @memberof InventoryRequestAllOf
     */
    type?: InventoryRequestAllOfTypeEnum;
}


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
 * Inventory Response
 * @export
 * @interface InventoryResponse
 */
export interface InventoryResponse {
    /**
     * The quantity the location has that are already allocated.
     * @type {number}
     * @memberof InventoryResponse
     */
    allocated?: number;
    /**
     * List of Inventory Attributes
     * @type {Array<string>}
     * @memberof InventoryResponse
     */
    attributes?: Array<string>;
    /**
     * The quantity the location has that are available for purchase
     * @type {number}
     * @memberof InventoryResponse
     */
    available?: number;
    /**
     * Whether or not the product is blocked for assignment
     * @type {boolean}
     * @memberof InventoryResponse
     */
    blockAssignment?: boolean;
    /**
     * The country code of this location
     * @type {string}
     * @memberof InventoryResponse
     */
    countryCode?: string;
    /**
     * Whether this location can ship to a consumer
     * @type {boolean}
     * @memberof InventoryResponse
     */
    directShip?: boolean;
    /**
     * The distance in miles from this location to the item's destination
     * @type {number}
     * @memberof InventoryResponse
     */
    distance?: number;
    /**
     * External ID of the item
     * @type {string}
     * @memberof InventoryResponse
     */
    externalID?: string;
    /**
     * Absolute minimum quantity of this item that should be in stock at any time
     * @type {number}
     * @memberof InventoryResponse
     */
    floor?: number;
    /**
     * 
     * @type {Array<InventoryFutureInventory>}
     * @memberof InventoryResponse
     */
    futureInventory?: Array<InventoryFutureInventory>;
    /**
     * The inventory locator name of the individual item
     * @type {string}
     * @memberof InventoryResponse
     */
    inventoryLocatorName?: string;
    /**
     * Location Code
     * @type {string}
     * @memberof InventoryResponse
     */
    locationCode?: string;
    /**
     * Location Name
     * @type {string}
     * @memberof InventoryResponse
     */
    locationName?: string;
    /**
     * Custom field used for store prioritization
     * @type {number}
     * @memberof InventoryResponse
     */
    ltd?: number;
    /**
     * The quantity the location has in its possession
     * @type {number}
     * @memberof InventoryResponse
     */
    onHand?: number;
    /**
     * Part/Product Number
     * @type {string}
     * @memberof InventoryResponse
     */
    partNumber?: string;
    /**
     * The quantity the location has that are pending.
     * @type {number}
     * @memberof InventoryResponse
     */
    pending?: number;
    /**
     * Whether a consumer can pick up product at this location (store)
     * @type {boolean}
     * @memberof InventoryResponse
     */
    pickup?: boolean;
    /**
     * Quantity of this item the location wants to keep in stock to ensure stock isn't completely depleted
     * @type {number}
     * @memberof InventoryResponse
     */
    safetyStock?: number;
    /**
     * Stock Keeping Unit
     * @type {string}
     * @memberof InventoryResponse
     */
    sku?: string;
    /**
     * 
     * @type {Array<TagQuantity>}
     * @memberof InventoryResponse
     */
    taggedInventory?: Array<TagQuantity>;
    /**
     * Tenant Identifier
     * @type {number}
     * @memberof InventoryResponse
     */
    tenantID?: number;
    /**
     * Whether the location can ship to another location (store), thus restocking that location.
     * @type {boolean}
     * @memberof InventoryResponse
     */
    transferEnabled?: boolean;
    /**
     * Universal Product Code
     * @type {string}
     * @memberof InventoryResponse
     */
    upc?: string;
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
    /**
     * Flag for success
     * @type {boolean}
     * @memberof InventoryResponse
     */
    success?: boolean;
}
/**
 * 
 * @export
 * @interface InventoryResponseAllOf
 */
export interface InventoryResponseAllOf {
    /**
     * The quantity the location has that are already allocated.
     * @type {number}
     * @memberof InventoryResponseAllOf
     */
    allocated?: number;
    /**
     * List of Inventory Attributes
     * @type {Array<string>}
     * @memberof InventoryResponseAllOf
     */
    attributes?: Array<string>;
    /**
     * The quantity the location has that are available for purchase
     * @type {number}
     * @memberof InventoryResponseAllOf
     */
    available?: number;
    /**
     * Whether or not the product is blocked for assignment
     * @type {boolean}
     * @memberof InventoryResponseAllOf
     */
    blockAssignment?: boolean;
    /**
     * The country code of this location
     * @type {string}
     * @memberof InventoryResponseAllOf
     */
    countryCode?: string;
    /**
     * Whether this location can ship to a consumer
     * @type {boolean}
     * @memberof InventoryResponseAllOf
     */
    directShip?: boolean;
    /**
     * The distance in miles from this location to the item's destination
     * @type {number}
     * @memberof InventoryResponseAllOf
     */
    distance?: number;
    /**
     * External ID of the item
     * @type {string}
     * @memberof InventoryResponseAllOf
     */
    externalID?: string;
    /**
     * Absolute minimum quantity of this item that should be in stock at any time
     * @type {number}
     * @memberof InventoryResponseAllOf
     */
    floor?: number;
    /**
     * 
     * @type {Array<InventoryFutureInventory>}
     * @memberof InventoryResponseAllOf
     */
    futureInventory?: Array<InventoryFutureInventory>;
    /**
     * The inventory locator name of the individual item
     * @type {string}
     * @memberof InventoryResponseAllOf
     */
    inventoryLocatorName?: string;
    /**
     * Location Code
     * @type {string}
     * @memberof InventoryResponseAllOf
     */
    locationCode?: string;
    /**
     * Location Name
     * @type {string}
     * @memberof InventoryResponseAllOf
     */
    locationName?: string;
    /**
     * Custom field used for store prioritization
     * @type {number}
     * @memberof InventoryResponseAllOf
     */
    ltd?: number;
    /**
     * The quantity the location has in its possession
     * @type {number}
     * @memberof InventoryResponseAllOf
     */
    onHand?: number;
    /**
     * Part/Product Number
     * @type {string}
     * @memberof InventoryResponseAllOf
     */
    partNumber?: string;
    /**
     * The quantity the location has that are pending.
     * @type {number}
     * @memberof InventoryResponseAllOf
     */
    pending?: number;
    /**
     * Whether a consumer can pick up product at this location (store)
     * @type {boolean}
     * @memberof InventoryResponseAllOf
     */
    pickup?: boolean;
    /**
     * Quantity of this item the location wants to keep in stock to ensure stock isn't completely depleted
     * @type {number}
     * @memberof InventoryResponseAllOf
     */
    safetyStock?: number;
    /**
     * Stock Keeping Unit
     * @type {string}
     * @memberof InventoryResponseAllOf
     */
    sku?: string;
    /**
     * 
     * @type {Array<TagQuantity>}
     * @memberof InventoryResponseAllOf
     */
    taggedInventory?: Array<TagQuantity>;
    /**
     * Tenant Identifier
     * @type {number}
     * @memberof InventoryResponseAllOf
     */
    tenantID?: number;
    /**
     * Whether the location can ship to another location (store), thus restocking that location.
     * @type {boolean}
     * @memberof InventoryResponseAllOf
     */
    transferEnabled?: boolean;
    /**
     * Universal Product Code
     * @type {string}
     * @memberof InventoryResponseAllOf
     */
    upc?: string;
}
/**
 * Request/Response object for a tag
 * @export
 * @interface InventoryTag
 */
export interface InventoryTag {
    /**
     * Date this tag was created
     * @type {string}
     * @memberof InventoryTag
     */
    created?: string;
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
     * Date this tag was last updated
     * @type {string}
     * @memberof InventoryTag
     */
    updated?: string;
}
/**
 * 
 * @export
 * @interface InventoryTagQuantity
 */
export interface InventoryTagQuantity {
    /**
     * 
     * @type {any}
     * @memberof InventoryTagQuantity
     */
    allocated?: any | null;
    /**
     * 
     * @type {any}
     * @memberof InventoryTagQuantity
     */
    available?: any | null;
    /**
     * 
     * @type {any}
     * @memberof InventoryTagQuantity
     */
    onHand?: any | null;
    /**
     * 
     * @type {any}
     * @memberof InventoryTagQuantity
     */
    pending?: any | null;
}
/**
 * Item Quantity Model
 * @export
 * @interface ItemQuantity
 */
export interface ItemQuantity {
    /**
     * 
     * @type {string}
     * @memberof ItemQuantity
     */
    condition?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemQuantity
     */
    date?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemQuantity
     */
    lotCode?: string;
    /**
     * Part/Product Number
     * @type {string}
     * @memberof ItemQuantity
     */
    partNumber?: string;
    /**
     * Quantity
     * @type {number}
     * @memberof ItemQuantity
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof ItemQuantity
     */
    serialNumber?: string;
    /**
     * Stock Keeping Unit
     * @type {string}
     * @memberof ItemQuantity
     */
    sku?: string;
    /**
     * Associative Map of <String, String> for tagCategoryName => tagName
     * @type {{ [key: string]: string; }}
     * @memberof ItemQuantity
     */
    tags?: { [key: string]: string; };
    /**
     * Universal Product Code
     * @type {string}
     * @memberof ItemQuantity
     */
    upc?: string;
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
     * Time and date the job was added to the queue in ISO8601 format in UTC
     * @type {string}
     * @memberof JobQueueResponse
     */
    added?: string;
    /**
     * Time and date the job was finished in ISO8601 format in UTC
     * @type {string}
     * @memberof JobQueueResponse
     */
    finished?: string;
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
     * Internal identifier that uniquely identifies a single job
     * @type {number}
     * @memberof JobQueueResponse
     */
    jobID?: number;
    /**
     * Unique internal Identifier of the owning location
     * @type {string}
     * @memberof JobQueueResponse
     */
    locationCode?: string;
    /**
     * The full name of the file that was picked up at the secure droppoint server before being split up by location. Applies only to refresh and adjust jobs created via file fetch process
     * @type {string}
     * @memberof JobQueueResponse
     */
    originalFilename?: string;
    /**
     * Time and date the job was started in ISO8601 format in UTC
     * @type {string}
     * @memberof JobQueueResponse
     */
    started?: string;
    /**
     * Current status of job completion
     * @type {string}
     * @memberof JobQueueResponse
     */
    status?: JobQueueResponseStatusEnum;
    /**
     * Unique internal identifier of the tenant that owns the job
     * @type {number}
     * @memberof JobQueueResponse
     */
    tenantID?: number;
    /**
     * Purpose of the job
     * @type {string}
     * @memberof JobQueueResponse
     */
    type?: JobQueueResponseTypeEnum;
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
    /**
     * Flag for success
     * @type {boolean}
     * @memberof JobQueueResponse
     */
    success?: boolean;
}


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
 * 
 * @export
 * @interface JobQueueResponseAllOf
 */
export interface JobQueueResponseAllOf {
    /**
     * Time and date the job was added to the queue in ISO8601 format in UTC
     * @type {string}
     * @memberof JobQueueResponseAllOf
     */
    added?: string;
    /**
     * Time and date the job was finished in ISO8601 format in UTC
     * @type {string}
     * @memberof JobQueueResponseAllOf
     */
    finished?: string;
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
     * Internal identifier that uniquely identifies a single job
     * @type {number}
     * @memberof JobQueueResponseAllOf
     */
    jobID?: number;
    /**
     * Unique internal Identifier of the owning location
     * @type {string}
     * @memberof JobQueueResponseAllOf
     */
    locationCode?: string;
    /**
     * The full name of the file that was picked up at the secure droppoint server before being split up by location. Applies only to refresh and adjust jobs created via file fetch process
     * @type {string}
     * @memberof JobQueueResponseAllOf
     */
    originalFilename?: string;
    /**
     * Time and date the job was started in ISO8601 format in UTC
     * @type {string}
     * @memberof JobQueueResponseAllOf
     */
    started?: string;
    /**
     * Current status of job completion
     * @type {string}
     * @memberof JobQueueResponseAllOf
     */
    status?: JobQueueResponseAllOfStatusEnum;
    /**
     * Unique internal identifier of the tenant that owns the job
     * @type {number}
     * @memberof JobQueueResponseAllOf
     */
    tenantID?: number;
    /**
     * Purpose of the job
     * @type {string}
     * @memberof JobQueueResponseAllOf
     */
    type?: JobQueueResponseAllOfTypeEnum;
}


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
     * which page to show
     * @type {number}
     * @memberof LoadBinInventoryRequest
     */
    pageNum?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof LoadBinInventoryRequest
     */
    pageSize?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof LoadBinInventoryRequest
     */
    sortBy?: string;
    /**
     * user id
     * @type {number}
     * @memberof LoadBinInventoryRequest
     */
    userID?: number;
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
     * List of new bin product quantities
     * @type {Array<BinProductQuantities>}
     * @memberof LoadBinInventoryResponse
     */
    binQuantities?: Array<BinProductQuantities>;
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
    /**
     * Flag for success
     * @type {boolean}
     * @memberof LoadBinInventoryResponse
     */
    success?: boolean;
}
/**
 * 
 * @export
 * @interface LoadBinInventoryResponseAllOf
 */
export interface LoadBinInventoryResponseAllOf {
    /**
     * List of new bin product quantities
     * @type {Array<BinProductQuantities>}
     * @memberof LoadBinInventoryResponseAllOf
     */
    binQuantities?: Array<BinProductQuantities>;
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
}
/**
 * LocationGroup Response Object
 * @export
 * @interface LocationGroupResponse
 */
export interface LocationGroupResponse {
    /**
     * Admin Location Group ID
     * @type {number}
     * @memberof LocationGroupResponse
     */
    adminLocationGroupID?: number;
    /**
     * Created
     * @type {string}
     * @memberof LocationGroupResponse
     */
    created?: string;
    /**
     * Location IDs
     * @type {Array<string>}
     * @memberof LocationGroupResponse
     */
    locationCodes?: Array<string>;
    /**
     * Location Group Code
     * @type {string}
     * @memberof LocationGroupResponse
     */
    locationGroupCode?: string;
    /**
     * Location Group ID
     * @type {number}
     * @memberof LocationGroupResponse
     */
    locationGroupID?: number;
    /**
     * Site IDs
     * @type {Array<number>}
     * @memberof LocationGroupResponse
     */
    sites?: Array<number>;
    /**
     * Tenant ID
     * @type {number}
     * @memberof LocationGroupResponse
     */
    tenantID?: number;
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
    /**
     * Flag for success
     * @type {boolean}
     * @memberof LocationGroupResponse
     */
    success?: boolean;
}
/**
 * 
 * @export
 * @interface LocationGroupResponseAllOf
 */
export interface LocationGroupResponseAllOf {
    /**
     * Admin Location Group ID
     * @type {number}
     * @memberof LocationGroupResponseAllOf
     */
    adminLocationGroupID?: number;
    /**
     * Created
     * @type {string}
     * @memberof LocationGroupResponseAllOf
     */
    created?: string;
    /**
     * Location IDs
     * @type {Array<string>}
     * @memberof LocationGroupResponseAllOf
     */
    locationCodes?: Array<string>;
    /**
     * Location Group Code
     * @type {string}
     * @memberof LocationGroupResponseAllOf
     */
    locationGroupCode?: string;
    /**
     * Location Group ID
     * @type {number}
     * @memberof LocationGroupResponseAllOf
     */
    locationGroupID?: number;
    /**
     * Site IDs
     * @type {Array<number>}
     * @memberof LocationGroupResponseAllOf
     */
    sites?: Array<number>;
    /**
     * Tenant ID
     * @type {number}
     * @memberof LocationGroupResponseAllOf
     */
    tenantID?: number;
}
/**
 * Location Request Object
 * @export
 * @interface LocationRequest
 */
export interface LocationRequest {
    /**
     * Flag for whether the location is active
     * @type {boolean}
     * @memberof LocationRequest
     */
    active: boolean;
    /**
     * Country Code
     * @type {string}
     * @memberof LocationRequest
     */
    countryCode?: string;
    /**
     * Flag for whether the location allows Direct Ship (STH) orders
     * @type {boolean}
     * @memberof LocationRequest
     */
    directShip: boolean;
    /**
     * Flag for whether the location is express enabled or not
     * @type {boolean}
     * @memberof LocationRequest
     */
    express?: boolean;
    /**
     * Flag for whether the location is to be included in aggregate exports
     * @type {boolean}
     * @memberof LocationRequest
     */
    includeInAggregate?: boolean;
    /**
     * Flag for whether the location is to be included in location exports
     * @type {boolean}
     * @memberof LocationRequest
     */
    includeInLocationExport?: boolean;
    /**
     * Latitude
     * @type {number}
     * @memberof LocationRequest
     */
    latitude?: number;
    /**
     * Location Code
     * @type {string}
     * @memberof LocationRequest
     */
    locationCode: string;
    /**
     * Location Name
     * @type {string}
     * @memberof LocationRequest
     */
    locationName: string;
    /**
     * Longitude
     * @type {number}
     * @memberof LocationRequest
     */
    longitude?: number;
    /**
     * Flag for whether the location allows Pickup (BOPIS) orders
     * @type {boolean}
     * @memberof LocationRequest
     */
    pickup: boolean;
    /**
     * Postal Code
     * @type {string}
     * @memberof LocationRequest
     */
    postalCode?: string;
    /**
     * Tenant ID
     * @type {number}
     * @memberof LocationRequest
     */
    tenantID: number;
    /**
     * Flag for whether the location allows Transfer orders
     * @type {boolean}
     * @memberof LocationRequest
     */
    transferEnabled?: boolean;
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
     * Flag for whether the location is active
     * @type {boolean}
     * @memberof LocationResponse
     */
    active?: boolean;
    /**
     * Country Code
     * @type {string}
     * @memberof LocationResponse
     */
    countryCode?: string;
    /**
     * Flag for whether the location allows Direct Ship (STH) orders
     * @type {boolean}
     * @memberof LocationResponse
     */
    directShip?: boolean;
    /**
     * Flag for whether the location is express enabled or not
     * @type {boolean}
     * @memberof LocationResponse
     */
    express?: boolean;
    /**
     * Flag for whether the location is to be included in aggregate exports
     * @type {boolean}
     * @memberof LocationResponse
     */
    includeInAggregate?: boolean;
    /**
     * Flag for whether the location is to be included in location exports
     * @type {boolean}
     * @memberof LocationResponse
     */
    includeInLocationExport?: boolean;
    /**
     * Latitude
     * @type {number}
     * @memberof LocationResponse
     */
    latitude?: number;
    /**
     * Location Code
     * @type {string}
     * @memberof LocationResponse
     */
    locationCode?: string;
    /**
     * Internal Location ID
     * @type {number}
     * @memberof LocationResponse
     */
    locationID?: number;
    /**
     * Location Name
     * @type {string}
     * @memberof LocationResponse
     */
    locationName?: string;
    /**
     * Longitude
     * @type {number}
     * @memberof LocationResponse
     */
    longitude?: number;
    /**
     * Flag for whether the location allows Pickup (BOPIS) orders
     * @type {boolean}
     * @memberof LocationResponse
     */
    pickup?: boolean;
    /**
     * Postal Code
     * @type {string}
     * @memberof LocationResponse
     */
    postalCode?: string;
    /**
     * Tenant ID
     * @type {number}
     * @memberof LocationResponse
     */
    tenantID?: number;
    /**
     * Flag for whether the location allows Transfer orders
     * @type {boolean}
     * @memberof LocationResponse
     */
    transferEnabled?: boolean;
    /**
     * Flag for whether the location is WMS Enabled
     * @type {boolean}
     * @memberof LocationResponse
     */
    wmsEnabled?: boolean;
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
    /**
     * Flag for success
     * @type {boolean}
     * @memberof LocationResponse
     */
    success?: boolean;
}
/**
 * 
 * @export
 * @interface LocationResponseAllOf
 */
export interface LocationResponseAllOf {
    /**
     * Flag for whether the location is active
     * @type {boolean}
     * @memberof LocationResponseAllOf
     */
    active?: boolean;
    /**
     * Country Code
     * @type {string}
     * @memberof LocationResponseAllOf
     */
    countryCode?: string;
    /**
     * Flag for whether the location allows Direct Ship (STH) orders
     * @type {boolean}
     * @memberof LocationResponseAllOf
     */
    directShip?: boolean;
    /**
     * Flag for whether the location is express enabled or not
     * @type {boolean}
     * @memberof LocationResponseAllOf
     */
    express?: boolean;
    /**
     * Flag for whether the location is to be included in aggregate exports
     * @type {boolean}
     * @memberof LocationResponseAllOf
     */
    includeInAggregate?: boolean;
    /**
     * Flag for whether the location is to be included in location exports
     * @type {boolean}
     * @memberof LocationResponseAllOf
     */
    includeInLocationExport?: boolean;
    /**
     * Latitude
     * @type {number}
     * @memberof LocationResponseAllOf
     */
    latitude?: number;
    /**
     * Location Code
     * @type {string}
     * @memberof LocationResponseAllOf
     */
    locationCode?: string;
    /**
     * Internal Location ID
     * @type {number}
     * @memberof LocationResponseAllOf
     */
    locationID?: number;
    /**
     * Location Name
     * @type {string}
     * @memberof LocationResponseAllOf
     */
    locationName?: string;
    /**
     * Longitude
     * @type {number}
     * @memberof LocationResponseAllOf
     */
    longitude?: number;
    /**
     * Flag for whether the location allows Pickup (BOPIS) orders
     * @type {boolean}
     * @memberof LocationResponseAllOf
     */
    pickup?: boolean;
    /**
     * Postal Code
     * @type {string}
     * @memberof LocationResponseAllOf
     */
    postalCode?: string;
    /**
     * Tenant ID
     * @type {number}
     * @memberof LocationResponseAllOf
     */
    tenantID?: number;
    /**
     * Flag for whether the location allows Transfer orders
     * @type {boolean}
     * @memberof LocationResponseAllOf
     */
    transferEnabled?: boolean;
    /**
     * Flag for whether the location is WMS Enabled
     * @type {boolean}
     * @memberof LocationResponseAllOf
     */
    wmsEnabled?: boolean;
}
/**
 * Delete Item Model
 * @export
 * @interface MDeleteItem
 */
export interface MDeleteItem {
    /**
     * List of audit identifiers associated with the deleted item
     * @type {Array<number>}
     * @memberof MDeleteItem
     */
    auditIDs?: Array<number>;
    /**
     * List of inventory identifiers associated with the deleted item
     * @type {Array<number>}
     * @memberof MDeleteItem
     */
    inventoryIDs?: Array<number>;
    /**
     * 
     * @type {ProductIdentifier}
     * @memberof MDeleteItem
     */
    itemIdentifier?: ProductIdentifier;
    /**
     * List of location codes associated with the deleted item
     * @type {Array<string>}
     * @memberof MDeleteItem
     */
    locationCodes?: Array<string>;
    /**
     * List of location identifiers associated with the deleted item
     * @type {Array<number>}
     * @memberof MDeleteItem
     */
    locationIDs?: Array<number>;
    /**
     * Product Identifier
     * @type {number}
     * @memberof MDeleteItem
     */
    productID?: number;
}
/**
 * Fetch File Config Model
 * @export
 * @interface MFetchFileConfig
 */
export interface MFetchFileConfig {
    /**
     * Active
     * @type {boolean}
     * @memberof MFetchFileConfig
     */
    active?: boolean;
    /**
     * S3 Archive Bucket
     * @type {string}
     * @memberof MFetchFileConfig
     */
    archiveBucket?: string;
    /**
     * Flag to convert null quantities to zero
     * @type {boolean}
     * @memberof MFetchFileConfig
     */
    blankQuantityIsZero?: boolean;
    /**
     * S3 Bucket
     * @type {string}
     * @memberof MFetchFileConfig
     */
    bucket?: string;
    /**
     * CSV Delimiter
     * @type {string}
     * @memberof MFetchFileConfig
     */
    csvDelimiter?: string;
    /**
     * Email List
     * @type {string}
     * @memberof MFetchFileConfig
     */
    emailList?: string;
    /**
     * Flag for exporting after refresh
     * @type {boolean}
     * @memberof MFetchFileConfig
     */
    exportAfterRefresh?: boolean;
    /**
     * Failed Attempts
     * @type {number}
     * @memberof MFetchFileConfig
     */
    failedAttempts?: number;
    /**
     * Fetch File Config ID
     * @type {number}
     * @memberof MFetchFileConfig
     */
    fetchFileConfigID?: number;
    /**
     * List of field names
     * @type {Array<string>}
     * @memberof MFetchFileConfig
     */
    fieldNameMap?: Array<string>;
    /**
     * FTP server password
     * @type {string}
     * @memberof MFetchFileConfig
     */
    ftpPassword?: string;
    /**
     * FTP server port
     * @type {number}
     * @memberof MFetchFileConfig
     */
    ftpPort?: number;
    /**
     * FTP server remote path
     * @type {string}
     * @memberof MFetchFileConfig
     */
    ftpRemotePath?: string;
    /**
     * FTP server remote path archive
     * @type {string}
     * @memberof MFetchFileConfig
     */
    ftpRemotePathArchive?: string;
    /**
     * FTP server address
     * @type {string}
     * @memberof MFetchFileConfig
     */
    ftpServer?: string;
    /**
     * FTP server username
     * @type {string}
     * @memberof MFetchFileConfig
     */
    ftpUsername?: string;
    /**
     * Flag for ignoring extra fields
     * @type {boolean}
     * @memberof MFetchFileConfig
     */
    ignoreExtraFields?: boolean;
    /**
     * Time config was last modified
     * @type {string}
     * @memberof MFetchFileConfig
     */
    lastModified?: string;
    /**
     * Lock name
     * @type {string}
     * @memberof MFetchFileConfig
     */
    lockName?: string;
    /**
     * Flag for using multiple files
     * @type {boolean}
     * @memberof MFetchFileConfig
     */
    multipleFiles?: boolean;
    /**
     * Export id post import
     * @type {number}
     * @memberof MFetchFileConfig
     */
    postImportExportId?: number;
    /**
     * FTP id post import
     * @type {number}
     * @memberof MFetchFileConfig
     */
    postImportFtpId?: number;
    /**
     * Enum denoting action post processing
     * @type {number}
     * @memberof MFetchFileConfig
     */
    postProcessAction?: number;
    /**
     * Enum for fetch file mapping
     * @type {string}
     * @memberof MFetchFileConfig
     */
    productMapping?: MFetchFileConfigProductMappingEnum;
    /**
     * Flag for Refresh Enabled
     * @type {boolean}
     * @memberof MFetchFileConfig
     */
    refreshEnabled?: boolean;
    /**
     * Description for the refresh file
     * @type {string}
     * @memberof MFetchFileConfig
     */
    refreshFileDescription?: string;
    /**
     * S3 Region
     * @type {string}
     * @memberof MFetchFileConfig
     */
    region?: string;
    /**
     * S3 Archive Bucket Path (directory)
     * @type {string}
     * @memberof MFetchFileConfig
     */
    s3ArchivePath?: string;
    /**
     * S3 Key
     * @type {string}
     * @memberof MFetchFileConfig
     */
    s3Key?: string;
    /**
     * S3 Bucket Path (directory)
     * @type {string}
     * @memberof MFetchFileConfig
     */
    s3Path?: string;
    /**
     * S3 Secret
     * @type {string}
     * @memberof MFetchFileConfig
     */
    secret?: string;
    /**
     * Tenant ID
     * @type {number}
     * @memberof MFetchFileConfig
     */
    tenantID?: number;
    /**
     * Flag for Update Enabled
     * @type {boolean}
     * @memberof MFetchFileConfig
     */
    updateEnabled?: boolean;
    /**
     * Description for the update file
     * @type {string}
     * @memberof MFetchFileConfig
     */
    updateFileDescription?: string;
    /**
     * Flag for using control file
     * @type {boolean}
     * @memberof MFetchFileConfig
     */
    useControlFile?: boolean;
    /**
     * Flag for converting negatives to zero
     * @type {boolean}
     * @memberof MFetchFileConfig
     */
    zeroOutNegatives?: boolean;
}


/**
 * @export
 */
export const MFetchFileConfigProductMappingEnum = {
    PartNumberWithUpc: 'SWAP_PART_NUMBER_WITH_UPC',
    SkuWithUpc: 'SWAP_SKU_WITH_UPC'
} as const;
export type MFetchFileConfigProductMappingEnum = typeof MFetchFileConfigProductMappingEnum[keyof typeof MFetchFileConfigProductMappingEnum];

/**
 * Order Item Information
 * @export
 * @interface OrderItemInformation
 */
export interface OrderItemInformation {
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
     * The quantity the location has that are available for purchase
     * @type {number}
     * @memberof OrderItemInformation
     */
    available?: number;
    /**
     * Bin Identifier
     * @type {number}
     * @memberof OrderItemInformation
     */
    binID?: number;
    /**
     * Total number of deallocations
     * @type {number}
     * @memberof OrderItemInformation
     */
    deallocates?: number;
    /**
     * Order Identifier
     * @type {Array<OrderItemInformationEvent>}
     * @memberof OrderItemInformation
     */
    events?: Array<OrderItemInformationEvent>;
    /**
     * Absolute minimum quantity of this item that should be in stock at any time
     * @type {number}
     * @memberof OrderItemInformation
     */
    floor?: number;
    /**
     * Total number of fulfillments. Should never be greater than 1.
     * @type {number}
     * @memberof OrderItemInformation
     */
    fulfills?: number;
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
     * Location Identifier
     * @type {number}
     * @memberof OrderItemInformation
     */
    locationID?: number;
    /**
     * Location Name
     * @type {string}
     * @memberof OrderItemInformation
     */
    locationName?: string;
    /**
     * Custom field used for store prioritization
     * @type {string}
     * @memberof OrderItemInformation
     */
    ltd?: string;
    /**
     * The quantity the location has in its possession
     * @type {number}
     * @memberof OrderItemInformation
     */
    onHand?: number;
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
     * Part/Product Number
     * @type {string}
     * @memberof OrderItemInformation
     */
    partNumber?: string;
    /**
     * Pending quantity (WMS only)
     * @type {number}
     * @memberof OrderItemInformation
     */
    pendingQuantity?: number;
    /**
     * Total number of picks (WMS only)
     * @type {number}
     * @memberof OrderItemInformation
     */
    picks?: number;
    /**
     * Quantity of this item the location wants to keep in stock to ensure stock isn't completely depleted
     * @type {number}
     * @memberof OrderItemInformation
     */
    safetyStock?: number;
    /**
     * Stock Keeping Unit
     * @type {string}
     * @memberof OrderItemInformation
     */
    sku?: string;
    /**
     * Universal Product Code
     * @type {string}
     * @memberof OrderItemInformation
     */
    upc?: string;
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
    /**
     * Flag for success
     * @type {boolean}
     * @memberof OrderItemInformation
     */
    success?: boolean;
}
/**
 * 
 * @export
 * @interface OrderItemInformationAllOf
 */
export interface OrderItemInformationAllOf {
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
     * The quantity the location has that are available for purchase
     * @type {number}
     * @memberof OrderItemInformationAllOf
     */
    available?: number;
    /**
     * Bin Identifier
     * @type {number}
     * @memberof OrderItemInformationAllOf
     */
    binID?: number;
    /**
     * Total number of deallocations
     * @type {number}
     * @memberof OrderItemInformationAllOf
     */
    deallocates?: number;
    /**
     * Order Identifier
     * @type {Array<OrderItemInformationEvent>}
     * @memberof OrderItemInformationAllOf
     */
    events?: Array<OrderItemInformationEvent>;
    /**
     * Absolute minimum quantity of this item that should be in stock at any time
     * @type {number}
     * @memberof OrderItemInformationAllOf
     */
    floor?: number;
    /**
     * Total number of fulfillments. Should never be greater than 1.
     * @type {number}
     * @memberof OrderItemInformationAllOf
     */
    fulfills?: number;
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
     * Location Identifier
     * @type {number}
     * @memberof OrderItemInformationAllOf
     */
    locationID?: number;
    /**
     * Location Name
     * @type {string}
     * @memberof OrderItemInformationAllOf
     */
    locationName?: string;
    /**
     * Custom field used for store prioritization
     * @type {string}
     * @memberof OrderItemInformationAllOf
     */
    ltd?: string;
    /**
     * The quantity the location has in its possession
     * @type {number}
     * @memberof OrderItemInformationAllOf
     */
    onHand?: number;
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
     * Part/Product Number
     * @type {string}
     * @memberof OrderItemInformationAllOf
     */
    partNumber?: string;
    /**
     * Pending quantity (WMS only)
     * @type {number}
     * @memberof OrderItemInformationAllOf
     */
    pendingQuantity?: number;
    /**
     * Total number of picks (WMS only)
     * @type {number}
     * @memberof OrderItemInformationAllOf
     */
    picks?: number;
    /**
     * Quantity of this item the location wants to keep in stock to ensure stock isn't completely depleted
     * @type {number}
     * @memberof OrderItemInformationAllOf
     */
    safetyStock?: number;
    /**
     * Stock Keeping Unit
     * @type {string}
     * @memberof OrderItemInformationAllOf
     */
    sku?: string;
    /**
     * Universal Product Code
     * @type {string}
     * @memberof OrderItemInformationAllOf
     */
    upc?: string;
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
    /**
     * Flag for success
     * @type {boolean}
     * @memberof OrderItemInformationEvent
     */
    success?: boolean;
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
     * List of Items to search on
     * @type {Array<InventoryItem>}
     * @memberof OrderItemInformationRequest
     */
    items?: Array<InventoryItem>;
    /**
     * Order Identifier
     * @type {number}
     * @memberof OrderItemInformationRequest
     */
    orderID?: number;
    /**
     * Location Code
     * @type {string}
     * @memberof OrderItemInformationRequest
     */
    locationCode?: string;
    /**
     * which page to show
     * @type {number}
     * @memberof OrderItemInformationRequest
     */
    pageNum?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof OrderItemInformationRequest
     */
    pageSize?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof OrderItemInformationRequest
     */
    sortBy?: string;
    /**
     * user id
     * @type {number}
     * @memberof OrderItemInformationRequest
     */
    userID?: number;
}
/**
 * 
 * @export
 * @interface OrderItemInformationRequestAllOf
 */
export interface OrderItemInformationRequestAllOf {
    /**
     * List of Items to search on
     * @type {Array<InventoryItem>}
     * @memberof OrderItemInformationRequestAllOf
     */
    items?: Array<InventoryItem>;
    /**
     * Order Identifier
     * @type {number}
     * @memberof OrderItemInformationRequestAllOf
     */
    orderID?: number;
}
/**
 * OrderItem Log Identifier
 * @export
 * @interface OrderItemLogIdentifier
 */
export interface OrderItemLogIdentifier {
    /**
     * Order Identifier
     * @type {number}
     * @memberof OrderItemLogIdentifier
     */
    orderID?: number;
    /**
     * Order Item Identifier
     * @type {number}
     * @memberof OrderItemLogIdentifier
     */
    orderItemID?: number;
    /**
     * Part/Product Number
     * @type {string}
     * @memberof OrderItemLogIdentifier
     */
    partNumber?: string;
    /**
     * Shipment Identifier
     * @type {number}
     * @memberof OrderItemLogIdentifier
     */
    shipmentID?: number;
    /**
     * Universal Product Code
     * @type {string}
     * @memberof OrderItemLogIdentifier
     */
    upc?: string;
}
/**
 * OrderItem Log Request
 * @export
 * @interface OrderItemLogRequest
 */
export interface OrderItemLogRequest {
    /**
     * A list of order item log identifiers to search for
     * @type {Array<OrderItemLogIdentifier>}
     * @memberof OrderItemLogRequest
     */
    identifiers?: Array<OrderItemLogIdentifier>;
    /**
     * The maximum number of results to return
     * @type {number}
     * @memberof OrderItemLogRequest
     */
    limit?: number;
    /**
     * Order Identifier
     * @type {string}
     * @memberof OrderItemLogRequest
     */
    orderBy?: OrderItemLogRequestOrderByEnum;
    /**
     * Whether to sort results ascending, based on orderBy
     * @type {boolean}
     * @memberof OrderItemLogRequest
     */
    sortAscending?: boolean;
    /**
     * The type of logs to retrieve
     * @type {string}
     * @memberof OrderItemLogRequest
     */
    type?: OrderItemLogRequestTypeEnum;
    /**
     * Location Code
     * @type {string}
     * @memberof OrderItemLogRequest
     */
    locationCode?: string;
    /**
     * which page to show
     * @type {number}
     * @memberof OrderItemLogRequest
     */
    pageNum?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof OrderItemLogRequest
     */
    pageSize?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof OrderItemLogRequest
     */
    sortBy?: string;
    /**
     * user id
     * @type {number}
     * @memberof OrderItemLogRequest
     */
    userID?: number;
}


/**
 * @export
 */
export const OrderItemLogRequestOrderByEnum = {
    OrderId: 'ORDER_ID',
    OrderItemId: 'ORDER_ITEM_ID',
    InventoryId: 'INVENTORY_ID',
    TenantId: 'TENANT_ID',
    LocationId: 'LOCATION_ID',
    UserId: 'USER_ID',
    Quantity: 'QUANTITY',
    Type: 'TYPE',
    Resolved: 'RESOLVED',
    Fixed: 'FIXED',
    Date: 'DATE',
    ShipmentId: 'SHIPMENT_ID'
} as const;
export type OrderItemLogRequestOrderByEnum = typeof OrderItemLogRequestOrderByEnum[keyof typeof OrderItemLogRequestOrderByEnum];

/**
 * @export
 */
export const OrderItemLogRequestTypeEnum = {
    Allocate: 'ALLOCATE',
    Deallocate: 'DEALLOCATE',
    Fulfill: 'FULFILL',
    Pick: 'PICK'
} as const;
export type OrderItemLogRequestTypeEnum = typeof OrderItemLogRequestTypeEnum[keyof typeof OrderItemLogRequestTypeEnum];

/**
 * 
 * @export
 * @interface OrderItemLogRequestAllOf
 */
export interface OrderItemLogRequestAllOf {
    /**
     * A list of order item log identifiers to search for
     * @type {Array<OrderItemLogIdentifier>}
     * @memberof OrderItemLogRequestAllOf
     */
    identifiers?: Array<OrderItemLogIdentifier>;
    /**
     * The maximum number of results to return
     * @type {number}
     * @memberof OrderItemLogRequestAllOf
     */
    limit?: number;
    /**
     * Order Identifier
     * @type {string}
     * @memberof OrderItemLogRequestAllOf
     */
    orderBy?: OrderItemLogRequestAllOfOrderByEnum;
    /**
     * Whether to sort results ascending, based on orderBy
     * @type {boolean}
     * @memberof OrderItemLogRequestAllOf
     */
    sortAscending?: boolean;
    /**
     * The type of logs to retrieve
     * @type {string}
     * @memberof OrderItemLogRequestAllOf
     */
    type?: OrderItemLogRequestAllOfTypeEnum;
}


/**
 * @export
 */
export const OrderItemLogRequestAllOfOrderByEnum = {
    OrderId: 'ORDER_ID',
    OrderItemId: 'ORDER_ITEM_ID',
    InventoryId: 'INVENTORY_ID',
    TenantId: 'TENANT_ID',
    LocationId: 'LOCATION_ID',
    UserId: 'USER_ID',
    Quantity: 'QUANTITY',
    Type: 'TYPE',
    Resolved: 'RESOLVED',
    Fixed: 'FIXED',
    Date: 'DATE',
    ShipmentId: 'SHIPMENT_ID'
} as const;
export type OrderItemLogRequestAllOfOrderByEnum = typeof OrderItemLogRequestAllOfOrderByEnum[keyof typeof OrderItemLogRequestAllOfOrderByEnum];

/**
 * @export
 */
export const OrderItemLogRequestAllOfTypeEnum = {
    Allocate: 'ALLOCATE',
    Deallocate: 'DEALLOCATE',
    Fulfill: 'FULFILL',
    Pick: 'PICK'
} as const;
export type OrderItemLogRequestAllOfTypeEnum = typeof OrderItemLogRequestAllOfTypeEnum[keyof typeof OrderItemLogRequestAllOfTypeEnum];

/**
 * OrderItem Log Response
 * @export
 * @interface OrderItemLogResponse
 */
export interface OrderItemLogResponse {
    /**
     * The date of this log entry
     * @type {string}
     * @memberof OrderItemLogResponse
     */
    date?: string;
    /**
     * Whether this event has been fixed
     * @type {boolean}
     * @memberof OrderItemLogResponse
     */
    fixed?: boolean;
    /**
     * Inventory Identifier
     * @type {number}
     * @memberof OrderItemLogResponse
     */
    inventoryID?: number;
    /**
     * Location Code Identifier
     * @type {string}
     * @memberof OrderItemLogResponse
     */
    locationCode?: string;
    /**
     * Order Identifier
     * @type {number}
     * @memberof OrderItemLogResponse
     */
    orderID?: number;
    /**
     * Order Item Identifier
     * @type {number}
     * @memberof OrderItemLogResponse
     */
    orderItemID?: number;
    /**
     * Part/Product Number
     * @type {string}
     * @memberof OrderItemLogResponse
     */
    partNumber?: string;
    /**
     * The number of items affected for this log entry
     * @type {number}
     * @memberof OrderItemLogResponse
     */
    quantity?: number;
    /**
     * Whether this event is resolved
     * @type {boolean}
     * @memberof OrderItemLogResponse
     */
    resolved?: boolean;
    /**
     * Shipment Identifier
     * @type {number}
     * @memberof OrderItemLogResponse
     */
    shipmentID?: number;
    /**
     * Tenant Identifier
     * @type {number}
     * @memberof OrderItemLogResponse
     */
    tenantID?: number;
    /**
     * The type of logs to retrieve
     * @type {string}
     * @memberof OrderItemLogResponse
     */
    type?: OrderItemLogResponseTypeEnum;
    /**
     * Universal Product Code
     * @type {string}
     * @memberof OrderItemLogResponse
     */
    upc?: string;
    /**
     * User Identifier
     * @type {number}
     * @memberof OrderItemLogResponse
     */
    userID?: number;
    /**
     * List of messages
     * @type {Array<string>}
     * @memberof OrderItemLogResponse
     */
    messages?: Array<string>;
    /**
     * Number of results
     * @type {number}
     * @memberof OrderItemLogResponse
     */
    numResults?: number;
    /**
     * Flag for success
     * @type {boolean}
     * @memberof OrderItemLogResponse
     */
    success?: boolean;
}


/**
 * @export
 */
export const OrderItemLogResponseTypeEnum = {
    Allocate: 'ALLOCATE',
    Deallocate: 'DEALLOCATE',
    Fulfill: 'FULFILL',
    Pick: 'PICK'
} as const;
export type OrderItemLogResponseTypeEnum = typeof OrderItemLogResponseTypeEnum[keyof typeof OrderItemLogResponseTypeEnum];

/**
 * 
 * @export
 * @interface OrderItemLogResponseAllOf
 */
export interface OrderItemLogResponseAllOf {
    /**
     * The date of this log entry
     * @type {string}
     * @memberof OrderItemLogResponseAllOf
     */
    date?: string;
    /**
     * Whether this event has been fixed
     * @type {boolean}
     * @memberof OrderItemLogResponseAllOf
     */
    fixed?: boolean;
    /**
     * Inventory Identifier
     * @type {number}
     * @memberof OrderItemLogResponseAllOf
     */
    inventoryID?: number;
    /**
     * Location Code Identifier
     * @type {string}
     * @memberof OrderItemLogResponseAllOf
     */
    locationCode?: string;
    /**
     * Order Identifier
     * @type {number}
     * @memberof OrderItemLogResponseAllOf
     */
    orderID?: number;
    /**
     * Order Item Identifier
     * @type {number}
     * @memberof OrderItemLogResponseAllOf
     */
    orderItemID?: number;
    /**
     * Part/Product Number
     * @type {string}
     * @memberof OrderItemLogResponseAllOf
     */
    partNumber?: string;
    /**
     * The number of items affected for this log entry
     * @type {number}
     * @memberof OrderItemLogResponseAllOf
     */
    quantity?: number;
    /**
     * Whether this event is resolved
     * @type {boolean}
     * @memberof OrderItemLogResponseAllOf
     */
    resolved?: boolean;
    /**
     * Shipment Identifier
     * @type {number}
     * @memberof OrderItemLogResponseAllOf
     */
    shipmentID?: number;
    /**
     * Tenant Identifier
     * @type {number}
     * @memberof OrderItemLogResponseAllOf
     */
    tenantID?: number;
    /**
     * The type of logs to retrieve
     * @type {string}
     * @memberof OrderItemLogResponseAllOf
     */
    type?: OrderItemLogResponseAllOfTypeEnum;
    /**
     * Universal Product Code
     * @type {string}
     * @memberof OrderItemLogResponseAllOf
     */
    upc?: string;
    /**
     * User Identifier
     * @type {number}
     * @memberof OrderItemLogResponseAllOf
     */
    userID?: number;
}


/**
 * @export
 */
export const OrderItemLogResponseAllOfTypeEnum = {
    Allocate: 'ALLOCATE',
    Deallocate: 'DEALLOCATE',
    Fulfill: 'FULFILL',
    Pick: 'PICK'
} as const;
export type OrderItemLogResponseAllOfTypeEnum = typeof OrderItemLogResponseAllOfTypeEnum[keyof typeof OrderItemLogResponseAllOfTypeEnum];

/**
 * Pending Item
 * @export
 * @interface PendingItem
 */
export interface PendingItem {
    /**
     * Location Code
     * @type {string}
     * @memberof PendingItem
     */
    locationCode?: string;
    /**
     * Order Identifier
     * @type {number}
     * @memberof PendingItem
     */
    orderID?: number;
    /**
     * Part/Product Number
     * @type {string}
     * @memberof PendingItem
     */
    partNumber?: string;
    /**
     * Pending Item Identifier
     * @type {number}
     * @memberof PendingItem
     */
    pendingItemID?: number;
    /**
     * The number of items affected for this log entry
     * @type {number}
     * @memberof PendingItem
     */
    quantity?: number;
    /**
     * Shipment Identifier
     * @type {number}
     * @memberof PendingItem
     */
    shipmentID?: number;
    /**
     * Stock Keeping Unit
     * @type {string}
     * @memberof PendingItem
     */
    sku?: string;
    /**
     * To Bin ID
     * @type {string}
     * @memberof PendingItem
     */
    toBin?: string;
    /**
     * To Bin ID
     * @type {number}
     * @memberof PendingItem
     */
    toBinID?: number;
    /**
     * Pending Item type
     * @type {string}
     * @memberof PendingItem
     */
    type?: PendingItemTypeEnum;
    /**
     * Universal Product Code
     * @type {string}
     * @memberof PendingItem
     */
    upc?: string;
    /**
     * List of messages
     * @type {Array<string>}
     * @memberof PendingItem
     */
    messages?: Array<string>;
    /**
     * Number of results
     * @type {number}
     * @memberof PendingItem
     */
    numResults?: number;
    /**
     * Flag for success
     * @type {boolean}
     * @memberof PendingItem
     */
    success?: boolean;
}


/**
 * @export
 */
export const PendingItemTypeEnum = {
    Bin: 'TYPE_BIN',
    Dc: 'TYPE_DC',
    Audit: 'TYPE_AUDIT',
    Restock: 'TYPE_RESTOCK'
} as const;
export type PendingItemTypeEnum = typeof PendingItemTypeEnum[keyof typeof PendingItemTypeEnum];

/**
 * 
 * @export
 * @interface PendingItemAllOf
 */
export interface PendingItemAllOf {
    /**
     * Location Code
     * @type {string}
     * @memberof PendingItemAllOf
     */
    locationCode?: string;
    /**
     * Order Identifier
     * @type {number}
     * @memberof PendingItemAllOf
     */
    orderID?: number;
    /**
     * Part/Product Number
     * @type {string}
     * @memberof PendingItemAllOf
     */
    partNumber?: string;
    /**
     * Pending Item Identifier
     * @type {number}
     * @memberof PendingItemAllOf
     */
    pendingItemID?: number;
    /**
     * The number of items affected for this log entry
     * @type {number}
     * @memberof PendingItemAllOf
     */
    quantity?: number;
    /**
     * Shipment Identifier
     * @type {number}
     * @memberof PendingItemAllOf
     */
    shipmentID?: number;
    /**
     * Stock Keeping Unit
     * @type {string}
     * @memberof PendingItemAllOf
     */
    sku?: string;
    /**
     * To Bin ID
     * @type {string}
     * @memberof PendingItemAllOf
     */
    toBin?: string;
    /**
     * To Bin ID
     * @type {number}
     * @memberof PendingItemAllOf
     */
    toBinID?: number;
    /**
     * Pending Item type
     * @type {string}
     * @memberof PendingItemAllOf
     */
    type?: PendingItemAllOfTypeEnum;
    /**
     * Universal Product Code
     * @type {string}
     * @memberof PendingItemAllOf
     */
    upc?: string;
}


/**
 * @export
 */
export const PendingItemAllOfTypeEnum = {
    Bin: 'TYPE_BIN',
    Dc: 'TYPE_DC',
    Audit: 'TYPE_AUDIT',
    Restock: 'TYPE_RESTOCK'
} as const;
export type PendingItemAllOfTypeEnum = typeof PendingItemAllOfTypeEnum[keyof typeof PendingItemAllOfTypeEnum];

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
     * Stock Keeping Unit
     * @type {string}
     * @memberof ProductIdentifier
     */
    sku?: string;
    /**
     * Universal Product Code
     * @type {string}
     * @memberof ProductIdentifier
     */
    upc?: string;
}
/**
 * Product Mapping
 * @export
 * @interface ProductMapping
 */
export interface ProductMapping {
    /**
     * Enum for direction of the mapping
     * @type {string}
     * @memberof ProductMapping
     */
    direction?: ProductMappingDirectionEnum;
    /**
     * Enum for mapping rule
     * @type {string}
     * @memberof ProductMapping
     */
    mapping?: ProductMappingMappingEnum;
    /**
     * Tenant Identifier
     * @type {number}
     * @memberof ProductMapping
     */
    tenantID?: number;
}


/**
 * @export
 */
export const ProductMappingDirectionEnum = {
    Inbound: 'INBOUND',
    Outbound: 'OUTBOUND',
    Skip: 'SKIP'
} as const;
export type ProductMappingDirectionEnum = typeof ProductMappingDirectionEnum[keyof typeof ProductMappingDirectionEnum];

/**
 * @export
 */
export const ProductMappingMappingEnum = {
    DefaultMapping: 'DEFAULT_MAPPING',
    CustomMappingPartToAll: 'CUSTOM_MAPPING_PART_TO_ALL',
    CustomMappingPartToSku: 'CUSTOM_MAPPING_PART_TO_SKU',
    CustomMappingOnlyUpc: 'CUSTOM_MAPPING_ONLY_UPC',
    CustomMappingPartToUpcIfEmpty: 'CUSTOM_MAPPING_PART_TO_UPC_IF_EMPTY',
    CustomMappingSkuToPartUpcSku: 'CUSTOM_MAPPING_SKU_TO_PART_UPC_SKU',
    CustomMappingSkuToPart: 'CUSTOM_MAPPING_SKU_TO_PART',
    CustomMappingSkuToUpcIfEmpty: 'CUSTOM_MAPPING_SKU_TO_UPC_IF_EMPTY'
} as const;
export type ProductMappingMappingEnum = typeof ProductMappingMappingEnum[keyof typeof ProductMappingMappingEnum];

/**
 * Request needed to interact with Product Mappings
 * @export
 * @interface ProductMappingRequest
 */
export interface ProductMappingRequest {
    /**
     * Enum for direction of the mapping
     * @type {string}
     * @memberof ProductMappingRequest
     */
    direction?: ProductMappingRequestDirectionEnum;
    /**
     * Enum for mapping rule
     * @type {string}
     * @memberof ProductMappingRequest
     */
    mapping?: ProductMappingRequestMappingEnum;
    /**
     * Location Code
     * @type {string}
     * @memberof ProductMappingRequest
     */
    locationCode?: string;
    /**
     * which page to show
     * @type {number}
     * @memberof ProductMappingRequest
     */
    pageNum?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof ProductMappingRequest
     */
    pageSize?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof ProductMappingRequest
     */
    sortBy?: string;
    /**
     * user id
     * @type {number}
     * @memberof ProductMappingRequest
     */
    userID?: number;
}


/**
 * @export
 */
export const ProductMappingRequestDirectionEnum = {
    Inbound: 'INBOUND',
    Outbound: 'OUTBOUND',
    Skip: 'SKIP'
} as const;
export type ProductMappingRequestDirectionEnum = typeof ProductMappingRequestDirectionEnum[keyof typeof ProductMappingRequestDirectionEnum];

/**
 * @export
 */
export const ProductMappingRequestMappingEnum = {
    DefaultMapping: 'DEFAULT_MAPPING',
    CustomMappingPartToAll: 'CUSTOM_MAPPING_PART_TO_ALL',
    CustomMappingPartToSku: 'CUSTOM_MAPPING_PART_TO_SKU',
    CustomMappingOnlyUpc: 'CUSTOM_MAPPING_ONLY_UPC',
    CustomMappingPartToUpcIfEmpty: 'CUSTOM_MAPPING_PART_TO_UPC_IF_EMPTY',
    CustomMappingSkuToPartUpcSku: 'CUSTOM_MAPPING_SKU_TO_PART_UPC_SKU',
    CustomMappingSkuToPart: 'CUSTOM_MAPPING_SKU_TO_PART'
} as const;
export type ProductMappingRequestMappingEnum = typeof ProductMappingRequestMappingEnum[keyof typeof ProductMappingRequestMappingEnum];

/**
 * 
 * @export
 * @interface ProductMappingRequestAllOf
 */
export interface ProductMappingRequestAllOf {
    /**
     * Enum for direction of the mapping
     * @type {string}
     * @memberof ProductMappingRequestAllOf
     */
    direction?: ProductMappingRequestAllOfDirectionEnum;
    /**
     * Enum for mapping rule
     * @type {string}
     * @memberof ProductMappingRequestAllOf
     */
    mapping?: ProductMappingRequestAllOfMappingEnum;
}


/**
 * @export
 */
export const ProductMappingRequestAllOfDirectionEnum = {
    Inbound: 'INBOUND',
    Outbound: 'OUTBOUND',
    Skip: 'SKIP'
} as const;
export type ProductMappingRequestAllOfDirectionEnum = typeof ProductMappingRequestAllOfDirectionEnum[keyof typeof ProductMappingRequestAllOfDirectionEnum];

/**
 * @export
 */
export const ProductMappingRequestAllOfMappingEnum = {
    DefaultMapping: 'DEFAULT_MAPPING',
    CustomMappingPartToAll: 'CUSTOM_MAPPING_PART_TO_ALL',
    CustomMappingPartToSku: 'CUSTOM_MAPPING_PART_TO_SKU',
    CustomMappingOnlyUpc: 'CUSTOM_MAPPING_ONLY_UPC',
    CustomMappingPartToUpcIfEmpty: 'CUSTOM_MAPPING_PART_TO_UPC_IF_EMPTY',
    CustomMappingSkuToPartUpcSku: 'CUSTOM_MAPPING_SKU_TO_PART_UPC_SKU',
    CustomMappingSkuToPart: 'CUSTOM_MAPPING_SKU_TO_PART'
} as const;
export type ProductMappingRequestAllOfMappingEnum = typeof ProductMappingRequestAllOfMappingEnum[keyof typeof ProductMappingRequestAllOfMappingEnum];

/**
 * Product Mapping Response
 * @export
 * @interface ProductMappingResponse
 */
export interface ProductMappingResponse {
    /**
     * 
     * @type {ProductMapping}
     * @memberof ProductMappingResponse
     */
    productMappings?: ProductMapping;
    /**
     * List of messages
     * @type {Array<string>}
     * @memberof ProductMappingResponse
     */
    messages?: Array<string>;
    /**
     * Number of results
     * @type {number}
     * @memberof ProductMappingResponse
     */
    numResults?: number;
    /**
     * Flag for success
     * @type {boolean}
     * @memberof ProductMappingResponse
     */
    success?: boolean;
}
/**
 * 
 * @export
 * @interface ProductMappingResponseAllOf
 */
export interface ProductMappingResponseAllOf {
    /**
     * 
     * @type {ProductMapping}
     * @memberof ProductMappingResponseAllOf
     */
    productMappings?: ProductMapping;
}
/**
 * Product Match
 * @export
 * @interface ProductMatch
 */
export interface ProductMatch {
    /**
     * Identifier
     * @type {string}
     * @memberof ProductMatch
     */
    identifier?: string;
    /**
     * How the product matches with the identifier
     * @type {string}
     * @memberof ProductMatch
     */
    matchType?: string;
    /**
     * Value
     * @type {string}
     * @memberof ProductMatch
     */
    value?: string;
}
/**
 * A product and its associated quantity
 * @export
 * @interface ProductQuantity
 */
export interface ProductQuantity {
    /**
     * Amount of product allocated
     * @type {number}
     * @memberof ProductQuantity
     */
    allocated?: number;
    /**
     * Audit ID
     * @type {number}
     * @memberof ProductQuantity
     */
    auditID?: number;
    /**
     * Audit Product ID
     * @type {number}
     * @memberof ProductQuantity
     */
    auditProductID?: number;
    /**
     * Amount of product available
     * @type {number}
     * @memberof ProductQuantity
     */
    available?: number;
    /**
     * ID of associated bin
     * @type {number}
     * @memberof ProductQuantity
     */
    binID?: number;
    /**
     * Bin Status ID
     * @type {number}
     * @memberof ProductQuantity
     */
    binStatusID?: number;
    /**
     * Bin Type ID
     * @type {number}
     * @memberof ProductQuantity
     */
    binTypeID?: number;
    /**
     * Absolute minimum quantity of this item that should be in stock at any time
     * @type {number}
     * @memberof ProductQuantity
     */
    floor?: number;
    /**
     * Inventory ID
     * @type {number}
     * @memberof ProductQuantity
     */
    inventoryID?: number;
    /**
     * Location Identifier of the owning location
     * @type {number}
     * @memberof ProductQuantity
     */
    locationID?: number;
    /**
     * Custom field used for store prioritization
     * @type {number}
     * @memberof ProductQuantity
     */
    ltd?: number;
    /**
     * Name of the product
     * @type {string}
     * @memberof ProductQuantity
     */
    name?: string;
    /**
     * Amount of product on hand
     * @type {number}
     * @memberof ProductQuantity
     */
    onHand?: number;
    /**
     * Part Number
     * @type {string}
     * @memberof ProductQuantity
     */
    partNumber?: string;
    /**
     * Amount of product pending
     * @type {number}
     * @memberof ProductQuantity
     */
    pending?: number;
    /**
     * Quantity of product
     * @type {number}
     * @memberof ProductQuantity
     */
    quantity?: number;
    /**
     * Quantity of this item the location wants to keep in stock to ensure stock isn't completely depleted
     * @type {number}
     * @memberof ProductQuantity
     */
    safetystock?: number;
    /**
     * SKU
     * @type {string}
     * @memberof ProductQuantity
     */
    sku?: string;
    /**
     * Associative Map of <String, String> for tagCategoryName => tagName
     * @type {{ [key: string]: string; }}
     * @memberof ProductQuantity
     */
    tags?: { [key: string]: string; };
    /**
     * Tenant Location Product ID
     * @type {number}
     * @memberof ProductQuantity
     */
    tenantLocProductID?: number;
    /**
     * UPC
     * @type {string}
     * @memberof ProductQuantity
     */
    upc?: string;
}
/**
 * A response object for a product and its associated quantity
 * @export
 * @interface ProductQuantityResponse
 */
export interface ProductQuantityResponse {
    /**
     * Amount of product allocated
     * @type {number}
     * @memberof ProductQuantityResponse
     */
    allocated?: number;
    /**
     * Audit ID
     * @type {number}
     * @memberof ProductQuantityResponse
     */
    auditID?: number;
    /**
     * Audit Product ID
     * @type {number}
     * @memberof ProductQuantityResponse
     */
    auditProductID?: number;
    /**
     * Amount of product available
     * @type {number}
     * @memberof ProductQuantityResponse
     */
    available?: number;
    /**
     * ID of associated bin
     * @type {number}
     * @memberof ProductQuantityResponse
     */
    binID?: number;
    /**
     * Bin Status ID
     * @type {number}
     * @memberof ProductQuantityResponse
     */
    binStatusID?: number;
    /**
     * Bin Type ID
     * @type {number}
     * @memberof ProductQuantityResponse
     */
    binTypeID?: number;
    /**
     * Absolute minimum quantity of this item that should be in stock at any time
     * @type {number}
     * @memberof ProductQuantityResponse
     */
    floor?: number;
    /**
     * Inventory ID
     * @type {number}
     * @memberof ProductQuantityResponse
     */
    inventoryID?: number;
    /**
     * Location Code of the owning location
     * @type {string}
     * @memberof ProductQuantityResponse
     */
    locationCode?: string;
    /**
     * Custom field used for store prioritization
     * @type {number}
     * @memberof ProductQuantityResponse
     */
    ltd?: number;
    /**
     * Name of the product
     * @type {string}
     * @memberof ProductQuantityResponse
     */
    name?: string;
    /**
     * Amount of product on hand
     * @type {number}
     * @memberof ProductQuantityResponse
     */
    onHand?: number;
    /**
     * Part Number
     * @type {string}
     * @memberof ProductQuantityResponse
     */
    partNumber?: string;
    /**
     * Amount of product pending
     * @type {number}
     * @memberof ProductQuantityResponse
     */
    pending?: number;
    /**
     * Quantity of product
     * @type {number}
     * @memberof ProductQuantityResponse
     */
    quantity?: number;
    /**
     * Quantity of this item the location wants to keep in stock to ensure stock isn't completely depleted
     * @type {number}
     * @memberof ProductQuantityResponse
     */
    safetystock?: number;
    /**
     * SKU
     * @type {string}
     * @memberof ProductQuantityResponse
     */
    sku?: string;
    /**
     * 
     * @type {Array<TagQuantity>}
     * @memberof ProductQuantityResponse
     */
    tags?: Array<TagQuantity>;
    /**
     * Tenant Location Product ID
     * @type {number}
     * @memberof ProductQuantityResponse
     */
    tenantLocProductID?: number;
    /**
     * UPC
     * @type {string}
     * @memberof ProductQuantityResponse
     */
    upc?: string;
}
/**
 * Request for creating a site
 * @export
 * @interface ProvisionSiloRequest
 */
export interface ProvisionSiloRequest {
    /**
     * Tenant ID
     * @type {number}
     * @memberof ProvisionSiloRequest
     */
    tenantID?: number;
    /**
     * Location Code
     * @type {string}
     * @memberof ProvisionSiloRequest
     */
    locationCode?: string;
    /**
     * which page to show
     * @type {number}
     * @memberof ProvisionSiloRequest
     */
    pageNum?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof ProvisionSiloRequest
     */
    pageSize?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof ProvisionSiloRequest
     */
    sortBy?: string;
    /**
     * user id
     * @type {number}
     * @memberof ProvisionSiloRequest
     */
    userID?: number;
}
/**
 * 
 * @export
 * @interface ProvisionSiloRequestAllOf
 */
export interface ProvisionSiloRequestAllOf {
    /**
     * Tenant ID
     * @type {number}
     * @memberof ProvisionSiloRequestAllOf
     */
    tenantID?: number;
}
/**
 * Refresh Item
 * @export
 * @interface RefreshItem
 */
export interface RefreshItem {
    /**
     * Custom field used for store prioritization
     * @type {number}
     * @memberof RefreshItem
     */
    lTD?: number;
    /**
     * List of Item Attributes
     * @type {Array<string>}
     * @memberof RefreshItem
     */
    attributes?: Array<string>;
    /**
     * Bin Location Identifier
     * @type {number}
     * @memberof RefreshItem
     */
    binID?: number;
    /**
     * Describes the state of the product
     * @type {string}
     * @memberof RefreshItem
     */
    condition?: string;
    /**
     * Used by the retailer for storing information related to manufacturing date or expiry date and use date to allocate for better stock management
     * @type {string}
     * @memberof RefreshItem
     */
    date?: string;
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
     * Absolute minimum quantity of this item that should be in stock at any time
     * @type {number}
     * @memberof RefreshItem
     */
    floor?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RefreshItem
     */
    readonly granularInventoryTrackingEnabled?: boolean;
    /**
     * The inventory locator name of the item
     * @type {string}
     * @memberof RefreshItem
     */
    inventoryLocatorName?: string;
    /**
     * Track which lot a product is manufactured in
     * @type {string}
     * @memberof RefreshItem
     */
    lotCode?: string;
    /**
     * Part/Product Number
     * @type {string}
     * @memberof RefreshItem
     */
    partNumber?: string;
    /**
     * Current Quantity of Item
     * @type {number}
     * @memberof RefreshItem
     */
    quantity?: number;
    /**
     * Quantity of this item the location wants to keep in stock to ensure stock isn't completely depleted
     * @type {number}
     * @memberof RefreshItem
     */
    safetyStock?: number;
    /**
     * A serial number is unique to a specific, physical unit of inventory
     * @type {string}
     * @memberof RefreshItem
     */
    serialNumber?: string;
    /**
     * Stock Keeping Unit
     * @type {string}
     * @memberof RefreshItem
     */
    sku?: string;
    /**
     * Associative Map of <String, String> for tagCategoryName => tagName
     * @type {{ [key: string]: string; }}
     * @memberof RefreshItem
     */
    tags?: { [key: string]: string; };
    /**
     * Universal Product Code
     * @type {string}
     * @memberof RefreshItem
     */
    upc?: string;
}
/**
 * Request needed for refreshing inventory
 * @export
 * @interface RefreshRequest
 */
export interface RefreshRequest {
    /**
     * 
     * @type {any}
     * @memberof RefreshRequest
     */
    items: any | null;
    /**
     * 
     * @type {any}
     * @memberof RefreshRequest
     */
    locationCode: any | null;
    /**
     * which page to show
     * @type {number}
     * @memberof RefreshRequest
     */
    pageNum?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof RefreshRequest
     */
    pageSize?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof RefreshRequest
     */
    sortBy?: string;
    /**
     * user id
     * @type {number}
     * @memberof RefreshRequest
     */
    userID?: number;
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
     * Address ID for this location
     * @type {number}
     * @memberof RequestLocation
     */
    addressID?: number;
    /**
     * Address line 1 for this location
     * @type {string}
     * @memberof RequestLocation
     */
    addressLine1?: string;
    /**
     * City for this location
     * @type {string}
     * @memberof RequestLocation
     */
    city?: string;
    /**
     * Country Code for this location
     * @type {string}
     * @memberof RequestLocation
     */
    countryCode?: string;
    /**
     * CustomerID ID for this location
     * @type {number}
     * @memberof RequestLocation
     */
    customerID?: number;
    /**
     * Latitude coordinate of this location
     * @type {number}
     * @memberof RequestLocation
     */
    latitude?: number;
    /**
     * Location Code for this location. This being set will trigger GetInventoryByLocation
     * @type {string}
     * @memberof RequestLocation
     */
    locationCode?: string;
    /**
     * Longitude coordinate of this location
     * @type {number}
     * @memberof RequestLocation
     */
    longitude?: number;
    /**
     * Phone number for this location
     * @type {string}
     * @memberof RequestLocation
     */
    phone?: string;
    /**
     * Postal Code of this location
     * @type {string}
     * @memberof RequestLocation
     */
    postalCode?: string;
    /**
     * Distance from location
     * @type {number}
     * @memberof RequestLocation
     */
    radius?: number;
    /**
     * State for this location
     * @type {string}
     * @memberof RequestLocation
     */
    state?: string;
    /**
     * Unit of distance used for radius
     * @type {string}
     * @memberof RequestLocation
     */
    unit?: RequestLocationUnitEnum;
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
 * Response from smart inventory endpoints indicating the processing method used
 * @export
 * @interface SmartInventoryResponse
 */
export interface SmartInventoryResponse {
    /**
     * The job identifier for tracking asynchronous requests. This field is null for synchronous requests.
     * @type {string}
     * @memberof SmartInventoryResponse
     */
    jobID?: string | null;
    /**
     * The processing method used: 'sync' for synchronous processing or 'async' for asynchronous processing. Kibo determines the routing based on payload size.
     * @type {string}
     * @memberof SmartInventoryResponse
     */
    method?: SmartInventoryResponseMethodEnum;
}


/**
 * @export
 */
export const SmartInventoryResponseMethodEnum = {
    Sync: 'sync',
    Async: 'async'
} as const;
export type SmartInventoryResponseMethodEnum = typeof SmartInventoryResponseMethodEnum[keyof typeof SmartInventoryResponseMethodEnum];

/**
 * Request and response object for a tag category
 * @export
 * @interface TagCategory
 */
export interface TagCategory {
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
     * Tag Category Name
     * @type {string}
     * @memberof TagCategory
     */
    name?: string;
    /**
     * Tag Category ID
     * @type {number}
     * @memberof TagCategory
     */
    tagCategoryID?: number;
    /**
     * Tags within this category
     * @type {Array<InventoryTag>}
     * @memberof TagCategory
     */
    tags?: Array<InventoryTag>;
}
/**
 * Response object for a tag quantity
 * @export
 * @interface TagQuantity
 */
export interface TagQuantity {
    /**
     * The quantity the location has that are already allocated for this tag
     * @type {number}
     * @memberof TagQuantity
     */
    allocated?: number;
    /**
     * The quantity the location has that are available for purchase for this tag
     * @type {number}
     * @memberof TagQuantity
     */
    available?: number;
    /**
     * 
     * @type {Array<InventoryFutureInventory>}
     * @memberof TagQuantity
     */
    futureInventory?: Array<InventoryFutureInventory>;
    /**
     * The quantity the the location has in its possession for this tag
     * @type {number}
     * @memberof TagQuantity
     */
    onHand?: number;
    /**
     * The quantity the location has that are pending for this tag
     * @type {number}
     * @memberof TagQuantity
     */
    pending?: number;
    /**
     * Associative Map of <String, String> for tagCategoryName => tagName
     * @type {{ [key: string]: string; }}
     * @memberof TagQuantity
     */
    tags?: { [key: string]: string; };
}
/**
 * Model of a tenant silo config.
 * @export
 * @interface TenantSiloConfigModel
 */
export interface TenantSiloConfigModel {
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
     * Description of silo configuration
     * @type {string}
     * @memberof TenantSiloConfigModel
     */
    description?: string;
    /**
     * Number of Event Sender Workers to run for this tenant.
     * @type {number}
     * @memberof TenantSiloConfigModel
     */
    eventSenderWorkers?: number;
    /**
     * Name of the Silo
     * @type {string}
     * @memberof TenantSiloConfigModel
     */
    name?: string;
    /**
     * A Silo ID
     * @type {number}
     * @memberof TenantSiloConfigModel
     */
    siloID?: number;
    /**
     * A Tenant ID
     * @type {number}
     * @memberof TenantSiloConfigModel
     */
    tenantID?: number;
    /**
     * Whether the  silo config is usable or not
     * @type {boolean}
     * @memberof TenantSiloConfigModel
     */
    usable?: boolean;
}
/**
 * Item for Transitioning Cart allocations
 * @export
 * @interface TransitionCartItem
 */
export interface TransitionCartItem {
    /**
     * Cart Item ID (GUID)
     * @type {string}
     * @memberof TransitionCartItem
     */
    cartItemID: string;
    /**
     * order item ID
     * @type {number}
     * @memberof TransitionCartItem
     */
    orderItemID: number;
    /**
     * shipment ID
     * @type {number}
     * @memberof TransitionCartItem
     */
    shipmentID: number;
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
     * Cart ID that we are transitioning the allocation from
     * @type {string}
     * @memberof TransitionCartRequest
     */
    cartID: string;
    /**
     * list of TransitionCartItem
     * @type {Array<TransitionCartItem>}
     * @memberof TransitionCartRequest
     */
    items: Array<TransitionCartItem>;
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
     * which page to show
     * @type {number}
     * @memberof TransitionCartRequest
     */
    pageNum?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof TransitionCartRequest
     */
    pageSize?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof TransitionCartRequest
     */
    sortBy?: string;
    /**
     * user id
     * @type {number}
     * @memberof TransitionCartRequest
     */
    userID?: number;
}
/**
 * 
 * @export
 * @interface TransitionCartRequestAllOf
 */
export interface TransitionCartRequestAllOf {
    /**
     * Cart ID that we are transitioning the allocation from
     * @type {string}
     * @memberof TransitionCartRequestAllOf
     */
    cartID?: string;
    /**
     * list of TransitionCartItem
     * @type {Array<TransitionCartItem>}
     * @memberof TransitionCartRequestAllOf
     */
    items?: Array<TransitionCartItem>;
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
     * New Bin's Status ID
     * @type {number}
     * @memberof UpdateBinRequest
     */
    binStatusID?: number;
    /**
     * New Bin's Type ID
     * @type {number}
     * @memberof UpdateBinRequest
     */
    binTypeID?: number;
    /**
     * Location Code
     * @type {string}
     * @memberof UpdateBinRequest
     */
    locationCode: string;
    /**
     * which page to show
     * @type {number}
     * @memberof UpdateBinRequest
     */
    pageNum?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof UpdateBinRequest
     */
    pageSize?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof UpdateBinRequest
     */
    sortBy?: string;
    /**
     * user id
     * @type {number}
     * @memberof UpdateBinRequest
     */
    userID?: number;
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
     * New Bin's Status ID
     * @type {number}
     * @memberof UpdateBinRequestAllOf
     */
    binStatusID?: number;
    /**
     * New Bin's Type ID
     * @type {number}
     * @memberof UpdateBinRequestAllOf
     */
    binTypeID?: number;
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
     * which page to show
     * @type {number}
     * @memberof UpdateBinsRequest
     */
    pageNum?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof UpdateBinsRequest
     */
    pageSize?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof UpdateBinsRequest
     */
    sortBy?: string;
    /**
     * user id
     * @type {number}
     * @memberof UpdateBinsRequest
     */
    userID?: number;
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
    /**
     * Flag for success
     * @type {boolean}
     * @memberof UpdateBinsResponse
     */
    success?: boolean;
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
     * 
     * @type {ExportSettingsFTP}
     * @memberof UpdateExportSettingsFTPRequest
     */
    exportSettingsFTP: ExportSettingsFTP;
    /**
     * Export Settings Name to associate the ftp settings with
     * @type {string}
     * @memberof UpdateExportSettingsFTPRequest
     */
    exportSettingsName: string;
    /**
     * Location Code
     * @type {string}
     * @memberof UpdateExportSettingsFTPRequest
     */
    locationCode?: string;
    /**
     * which page to show
     * @type {number}
     * @memberof UpdateExportSettingsFTPRequest
     */
    pageNum?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof UpdateExportSettingsFTPRequest
     */
    pageSize?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof UpdateExportSettingsFTPRequest
     */
    sortBy?: string;
    /**
     * user id
     * @type {number}
     * @memberof UpdateExportSettingsFTPRequest
     */
    userID?: number;
}
/**
 * 
 * @export
 * @interface UpdateExportSettingsFTPResponse
 */
export interface UpdateExportSettingsFTPResponse {
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
     * Tenant ID
     * @type {number}
     * @memberof UpdateExportSettingsFTPResponse
     */
    tenantID?: number;
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
    /**
     * Flag for success
     * @type {boolean}
     * @memberof UpdateExportSettingsFTPResponse
     */
    success?: boolean;
}
/**
 * 
 * @export
 * @interface UpdateExportSettingsFTPResponseAllOf
 */
export interface UpdateExportSettingsFTPResponseAllOf {
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
    /**
     * Tenant ID
     * @type {number}
     * @memberof UpdateExportSettingsFTPResponseAllOf
     */
    tenantID?: number;
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
     * which page to show
     * @type {number}
     * @memberof UpdateExportSettingsRequest
     */
    pageNum?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof UpdateExportSettingsRequest
     */
    pageSize?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof UpdateExportSettingsRequest
     */
    sortBy?: string;
    /**
     * user id
     * @type {number}
     * @memberof UpdateExportSettingsRequest
     */
    userID?: number;
}
/**
 * Update Export Settings Response
 * @export
 * @interface UpdateExportSettingsResponse
 */
export interface UpdateExportSettingsResponse {
    /**
     * Name
     * @type {string}
     * @memberof UpdateExportSettingsResponse
     */
    name?: string;
    /**
     * Tenant ID
     * @type {number}
     * @memberof UpdateExportSettingsResponse
     */
    tenantID?: number;
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
    /**
     * Flag for success
     * @type {boolean}
     * @memberof UpdateExportSettingsResponse
     */
    success?: boolean;
}
/**
 * 
 * @export
 * @interface UpdateExportSettingsResponseAllOf
 */
export interface UpdateExportSettingsResponseAllOf {
    /**
     * Name
     * @type {string}
     * @memberof UpdateExportSettingsResponseAllOf
     */
    name?: string;
    /**
     * Tenant ID
     * @type {number}
     * @memberof UpdateExportSettingsResponseAllOf
     */
    tenantID?: number;
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
     * which page to show
     * @type {number}
     * @memberof UpdateExportSettingsS3Request
     */
    pageNum?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof UpdateExportSettingsS3Request
     */
    pageSize?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof UpdateExportSettingsS3Request
     */
    sortBy?: string;
    /**
     * user id
     * @type {number}
     * @memberof UpdateExportSettingsS3Request
     */
    userID?: number;
}
/**
 * Update Export Settings S3 Response
 * @export
 * @interface UpdateExportSettingsS3Response
 */
export interface UpdateExportSettingsS3Response {
    /**
     * Export Settings ID to associate the s3 settings with
     * @type {number}
     * @memberof UpdateExportSettingsS3Response
     */
    exportSettingsID?: number;
    /**
     * Export Settings S3 ID
     * @type {number}
     * @memberof UpdateExportSettingsS3Response
     */
    exportSettingsS3ID?: number;
    /**
     * Tenant ID
     * @type {number}
     * @memberof UpdateExportSettingsS3Response
     */
    tenantID?: number;
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
    /**
     * Flag for success
     * @type {boolean}
     * @memberof UpdateExportSettingsS3Response
     */
    success?: boolean;
}
/**
 * 
 * @export
 * @interface UpdateExportSettingsS3ResponseAllOf
 */
export interface UpdateExportSettingsS3ResponseAllOf {
    /**
     * Export Settings ID to associate the s3 settings with
     * @type {number}
     * @memberof UpdateExportSettingsS3ResponseAllOf
     */
    exportSettingsID?: number;
    /**
     * Export Settings S3 ID
     * @type {number}
     * @memberof UpdateExportSettingsS3ResponseAllOf
     */
    exportSettingsS3ID?: number;
    /**
     * Tenant ID
     * @type {number}
     * @memberof UpdateExportSettingsS3ResponseAllOf
     */
    tenantID?: number;
}
/**
 * Request for creating or updating tenant silo config.
 * @export
 * @interface UpdateTenantSiloConfigRequest
 */
export interface UpdateTenantSiloConfigRequest {
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
     * A Tenant ID
     * @type {number}
     * @memberof UpdateTenantSiloConfigRequest
     */
    tenantID?: number;
}
/**
 * Wave Completion
 * @export
 * @interface WaveCompletion
 */
export interface WaveCompletion {
    /**
     * Maximum number of orders
     * @type {Array<BinProductQuantities>}
     * @memberof WaveCompletion
     */
    bins?: Array<BinProductQuantities>;
    /**
     * Flag for creating a recovery
     * @type {boolean}
     * @memberof WaveCompletion
     */
    createRecovery?: boolean;
    /**
     * Location Code
     * @type {string}
     * @memberof WaveCompletion
     */
    locationCode?: string;
    /**
     * which page to show
     * @type {number}
     * @memberof WaveCompletion
     */
    pageNum?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof WaveCompletion
     */
    pageSize?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof WaveCompletion
     */
    sortBy?: string;
    /**
     * user id
     * @type {number}
     * @memberof WaveCompletion
     */
    userID?: number;
}
/**
 * 
 * @export
 * @interface WaveCompletionAllOf
 */
export interface WaveCompletionAllOf {
    /**
     * Maximum number of orders
     * @type {Array<BinProductQuantities>}
     * @memberof WaveCompletionAllOf
     */
    bins?: Array<BinProductQuantities>;
    /**
     * Flag for creating a recovery
     * @type {boolean}
     * @memberof WaveCompletionAllOf
     */
    createRecovery?: boolean;
}
/**
 * Wave Content Model
 * @export
 * @interface WaveContent
 */
export interface WaveContent {
    /**
     * Actual Quantity of Item
     * @type {number}
     * @memberof WaveContent
     */
    actualQuantity?: number;
    /**
     * Bin Name
     * @type {string}
     * @memberof WaveContent
     */
    binName?: string;
    /**
     * Order Identifier
     * @type {number}
     * @memberof WaveContent
     */
    orderID?: number;
    /**
     * Part/Product Number
     * @type {string}
     * @memberof WaveContent
     */
    partNumber?: string;
    /**
     * Current Quantity of Item
     * @type {number}
     * @memberof WaveContent
     */
    quantity?: number;
    /**
     * Shipment Identifier
     * @type {number}
     * @memberof WaveContent
     */
    shipmentID?: number;
    /**
     * Stock Keeping Unit
     * @type {string}
     * @memberof WaveContent
     */
    sku?: string;
    /**
     * Slot Identifier
     * @type {number}
     * @memberof WaveContent
     */
    slotID?: number;
    /**
     * Universal Product Code
     * @type {string}
     * @memberof WaveContent
     */
    upc?: string;
    /**
     * List of messages
     * @type {Array<string>}
     * @memberof WaveContent
     */
    messages?: Array<string>;
    /**
     * Number of results
     * @type {number}
     * @memberof WaveContent
     */
    numResults?: number;
    /**
     * Flag for success
     * @type {boolean}
     * @memberof WaveContent
     */
    success?: boolean;
}
/**
 * 
 * @export
 * @interface WaveContentAllOf
 */
export interface WaveContentAllOf {
    /**
     * Actual Quantity of Item
     * @type {number}
     * @memberof WaveContentAllOf
     */
    actualQuantity?: number;
    /**
     * Bin Name
     * @type {string}
     * @memberof WaveContentAllOf
     */
    binName?: string;
    /**
     * Order Identifier
     * @type {number}
     * @memberof WaveContentAllOf
     */
    orderID?: number;
    /**
     * Part/Product Number
     * @type {string}
     * @memberof WaveContentAllOf
     */
    partNumber?: string;
    /**
     * Current Quantity of Item
     * @type {number}
     * @memberof WaveContentAllOf
     */
    quantity?: number;
    /**
     * Shipment Identifier
     * @type {number}
     * @memberof WaveContentAllOf
     */
    shipmentID?: number;
    /**
     * Stock Keeping Unit
     * @type {string}
     * @memberof WaveContentAllOf
     */
    sku?: string;
    /**
     * Slot Identifier
     * @type {number}
     * @memberof WaveContentAllOf
     */
    slotID?: number;
    /**
     * Universal Product Code
     * @type {string}
     * @memberof WaveContentAllOf
     */
    upc?: string;
}
/**
 * An item quantity used in wave shipments
 * @export
 * @interface WaveItem
 */
export interface WaveItem {
    /**
     * Order Item ID
     * @type {number}
     * @memberof WaveItem
     */
    orderItemID: number;
    /**
     * Part Number
     * @type {string}
     * @memberof WaveItem
     */
    partNumber?: string;
    /**
     * Current Quantity of Item
     * @type {number}
     * @memberof WaveItem
     */
    quantity: number;
    /**
     * SKU
     * @type {string}
     * @memberof WaveItem
     */
    sku?: string;
    /**
     * Upc
     * @type {string}
     * @memberof WaveItem
     */
    upc?: string;
}
/**
 * A shipment (used in getting wave suggestions)
 * @export
 * @interface WaveShipment
 */
export interface WaveShipment {
    /**
     * List of Items in the shipment
     * @type {Array<WaveItem>}
     * @memberof WaveShipment
     */
    items: Array<WaveItem>;
    /**
     * Order Identifier
     * @type {number}
     * @memberof WaveShipment
     */
    orderID: number;
    /**
     * Shipment Identifier
     * @type {number}
     * @memberof WaveShipment
     */
    shipmentID: number;
}
/**
 * A suggestion of where to add an item to a pick wave.
 * @export
 * @interface WaveSuggestionItem
 */
export interface WaveSuggestionItem {
    /**
     * Bin Name
     * @type {string}
     * @memberof WaveSuggestionItem
     */
    binName: string;
    /**
     * Order Item ID
     * @type {number}
     * @memberof WaveSuggestionItem
     */
    orderItemID: number;
    /**
     * Part Number
     * @type {string}
     * @memberof WaveSuggestionItem
     */
    partNumber?: string;
    /**
     * Current Quantity of Item
     * @type {number}
     * @memberof WaveSuggestionItem
     */
    quantity: number;
    /**
     * SKU
     * @type {string}
     * @memberof WaveSuggestionItem
     */
    sku?: string;
    /**
     * Upc
     * @type {string}
     * @memberof WaveSuggestionItem
     */
    upc?: string;
}
/**
 * 
 * @export
 * @interface WaveSuggestionItemAllOf
 */
export interface WaveSuggestionItemAllOf {
    /**
     * Bin Name
     * @type {string}
     * @memberof WaveSuggestionItemAllOf
     */
    binName?: string;
}
/**
 * Wave Suggestion Request
 * @export
 * @interface WaveSuggestionRequest
 */
export interface WaveSuggestionRequest {
    /**
     * List of Bin Ranges
     * @type {Array<BinRange>}
     * @memberof WaveSuggestionRequest
     */
    binRanges?: Array<BinRange>;
    /**
     * Flag for including zero inventory items
     * @type {boolean}
     * @memberof WaveSuggestionRequest
     */
    includeZeroInventory?: boolean;
    /**
     * List of Wave Shipments
     * @type {Array<WaveShipment>}
     * @memberof WaveSuggestionRequest
     */
    shipments: Array<WaveShipment>;
    /**
     * Location Code
     * @type {string}
     * @memberof WaveSuggestionRequest
     */
    locationCode: string;
    /**
     * which page to show
     * @type {number}
     * @memberof WaveSuggestionRequest
     */
    pageNum?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof WaveSuggestionRequest
     */
    pageSize?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof WaveSuggestionRequest
     */
    sortBy?: string;
    /**
     * user id
     * @type {number}
     * @memberof WaveSuggestionRequest
     */
    userID?: number;
}
/**
 * 
 * @export
 * @interface WaveSuggestionRequestAllOf
 */
export interface WaveSuggestionRequestAllOf {
    /**
     * List of Bin Ranges
     * @type {Array<BinRange>}
     * @memberof WaveSuggestionRequestAllOf
     */
    binRanges?: Array<BinRange>;
    /**
     * Flag for including zero inventory items
     * @type {boolean}
     * @memberof WaveSuggestionRequestAllOf
     */
    includeZeroInventory?: boolean;
    /**
     * List of Wave Shipments
     * @type {Array<WaveShipment>}
     * @memberof WaveSuggestionRequestAllOf
     */
    shipments?: Array<WaveShipment>;
}
