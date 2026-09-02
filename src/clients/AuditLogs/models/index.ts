/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface History
 */
export interface History {
    /**
     * 
     * @type {string}
     * @memberof History
     */
    action?: string | null;
    /**
     * 
     * @type {string}
     * @memberof History
     */
    appKey?: string | null;
    /**
     * 
     * @type {string}
     * @memberof History
     */
    correlationId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof History
     */
    entityId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof History
     */
    entityType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof History
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof History
     */
    initiatingAppId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof History
     */
    ipAddress?: string | null;
    /**
     * 
     * @type {string}
     * @memberof History
     */
    objectName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof History
     */
    siteId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof History
     */
    tenantId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof History
     */
    timestamp?: string;
    /**
     * 
     * @type {string}
     * @memberof History
     */
    userId?: string | null;
}
/**
 * 
 * @export
 * @interface HistoryCollection
 */
export interface HistoryCollection {
    /**
     * 
     * @type {Array<History>}
     * @memberof HistoryCollection
     */
    items?: Array<History> | null;
    /**
     * 
     * @type {number}
     * @memberof HistoryCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof HistoryCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof HistoryCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof HistoryCollection
     */
    totalCount?: number;
}
