/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface AdminUserAuditInfo
 */
export interface AdminUserAuditInfo {
    /**
     * 
     * @type {string}
     * @memberof AdminUserAuditInfo
     */
    updateDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AdminUserAuditInfo
     */
    createDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AdminUserAuditInfo
     */
    updateBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AdminUserAuditInfo
     */
    createBy?: string | null;
}

/**
 * 
 * @export
 */
export const BatchDomains = {
    Catalog: 'Catalog'
} as const;
export type BatchDomains = typeof BatchDomains[keyof typeof BatchDomains];

/**
 * 
 * @export
 * @interface BatchJob
 */
export interface BatchJob {
    /**
     * 
     * @type {number}
     * @memberof BatchJob
     */
    tenantId?: number;
    /**
     * 
     * @type {string}
     * @memberof BatchJob
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BatchJob
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BatchJob
     */
    scheduledDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BatchJob
     */
    dateStarted?: string | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof BatchJob
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {BatchDomains}
     * @memberof BatchJob
     */
    domain?: BatchDomains;
    /**
     * 
     * @type {BatchJobStatuses}
     * @memberof BatchJob
     */
    status?: BatchJobStatuses;
}
/**
 * 
 * @export
 * @interface BatchJobAction
 */
export interface BatchJobAction {
    /**
     * 
     * @type {BatchJobActionTypes}
     * @memberof BatchJobAction
     */
    action?: BatchJobActionTypes;
}

/**
 * 
 * @export
 */
export const BatchJobActionTypes = {
    Start: 'Start',
    Reset: 'Reset',
    Cancel: 'Cancel'
} as const;
export type BatchJobActionTypes = typeof BatchJobActionTypes[keyof typeof BatchJobActionTypes];

/**
 * 
 * @export
 * @interface BatchJobCollection
 */
export interface BatchJobCollection {
    /**
     * 
     * @type {number}
     * @memberof BatchJobCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof BatchJobCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof BatchJobCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof BatchJobCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<BatchJob>}
     * @memberof BatchJobCollection
     */
    items?: Array<BatchJob> | null;
}
/**
 * 
 * @export
 * @interface BatchJobItem
 */
export interface BatchJobItem {
    /**
     * 
     * @type {string}
     * @memberof BatchJobItem
     */
    batchJobCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof BatchJobItem
     */
    masterCatalog?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BatchJobItem
     */
    siteId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BatchJobItem
     */
    catalogId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BatchJobItem
     */
    retryCount?: number | null;
    /**
     * 
     * @type {string}
     * @memberof BatchJobItem
     */
    itemKey?: string | null;
    /**
     * 
     * @type {BatchJobItemProcessingStatuses}
     * @memberof BatchJobItem
     */
    processingStatus?: BatchJobItemProcessingStatuses;
    /**
     * 
     * @type {number}
     * @memberof BatchJobItem
     */
    status?: number | null;
    /**
     * 
     * @type {Array<BatchJobItemError>}
     * @memberof BatchJobItem
     */
    errors?: Array<BatchJobItemError> | null;
    /**
     * 
     * @type {string}
     * @memberof BatchJobItem
     */
    uri?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BatchJobItem
     */
    resourceType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BatchJobItem
     */
    query?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BatchJobItem
     */
    localeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BatchJobItem
     */
    currencyCode?: string | null;
    /**
     * 
     * @type {DataViewModeType}
     * @memberof BatchJobItem
     */
    dataViewMode?: DataViewModeType;
    /**
     * 
     * @type {string}
     * @memberof BatchJobItem
     */
    httpMethod?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BatchJobItem
     */
    correlationId?: string | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof BatchJobItem
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * 
 * @export
 * @interface BatchJobItemError
 */
export interface BatchJobItemError {
    /**
     * 
     * @type {string}
     * @memberof BatchJobItemError
     */
    code?: string | null;
    /**
     * 
     * @type {Array<StringStringKeyValuePair>}
     * @memberof BatchJobItemError
     */
    itemKeys?: Array<StringStringKeyValuePair> | null;
    /**
     * 
     * @type {string}
     * @memberof BatchJobItemError
     */
    message?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BatchJobItemError
     */
    field?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BatchJobItemError
     */
    longMessage?: string | null;
    /**
     * 
     * @type {Array<BatchJobItemError>}
     * @memberof BatchJobItemError
     */
    subErrors?: Array<BatchJobItemError> | null;
}

/**
 * 
 * @export
 */
export const BatchJobItemProcessingStatuses = {
    Waiting: 'Waiting',
    Running: 'Running',
    ValidationFailed: 'ValidationFailed',
    Failed: 'Failed',
    Completed: 'Completed',
    Cancelled: 'Cancelled'
} as const;
export type BatchJobItemProcessingStatuses = typeof BatchJobItemProcessingStatuses[keyof typeof BatchJobItemProcessingStatuses];

/**
 * 
 * @export
 * @interface BatchJobItemResultSet
 */
export interface BatchJobItemResultSet {
    /**
     * 
     * @type {number}
     * @memberof BatchJobItemResultSet
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof BatchJobItemResultSet
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof BatchJobItemResultSet
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof BatchJobItemResultSet
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<BatchJobItem>}
     * @memberof BatchJobItemResultSet
     */
    items?: Array<BatchJobItem> | null;
}
/**
 * 
 * @export
 * @interface BatchJobResourceSummary
 */
export interface BatchJobResourceSummary {
    /**
     * 
     * @type {string}
     * @memberof BatchJobResourceSummary
     */
    resourceType?: string | null;
    /**
     * 
     * @type {Array<ProcessingCount>}
     * @memberof BatchJobResourceSummary
     */
    counts?: Array<ProcessingCount> | null;
}

/**
 * 
 * @export
 */
export const BatchJobStatuses = {
    Ready: 'Ready',
    Pending: 'Pending',
    Running: 'Running',
    Completed: 'Completed',
    Canceled: 'Canceled'
} as const;
export type BatchJobStatuses = typeof BatchJobStatuses[keyof typeof BatchJobStatuses];

/**
 * 
 * @export
 * @interface BatchJobSummary
 */
export interface BatchJobSummary {
    /**
     * 
     * @type {string}
     * @memberof BatchJobSummary
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BatchJobSummary
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BatchJobSummary
     */
    scheduledDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BatchJobSummary
     */
    dateStarted?: string | null;
    /**
     * 
     * @type {BatchJobStatuses}
     * @memberof BatchJobSummary
     */
    status?: BatchJobStatuses;
    /**
     * 
     * @type {Array<BatchJobResourceSummary>}
     * @memberof BatchJobSummary
     */
    resources?: Array<BatchJobResourceSummary> | null;
}
/**
 * 
 * @export
 * @interface BatchJobSummaryCollection
 */
export interface BatchJobSummaryCollection {
    /**
     * 
     * @type {number}
     * @memberof BatchJobSummaryCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof BatchJobSummaryCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof BatchJobSummaryCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof BatchJobSummaryCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<BatchJobSummary>}
     * @memberof BatchJobSummaryCollection
     */
    items?: Array<BatchJobSummary> | null;
}
/**
 * 
 * @export
 * @interface ContextOverride
 */
export interface ContextOverride {
    /**
     * 
     * @type {number}
     * @memberof ContextOverride
     */
    masterCatalog?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ContextOverride
     */
    locale?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContextOverride
     */
    currency?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ContextOverride
     */
    catalog?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ContextOverride
     */
    site?: number | null;
}

/**
 * 
 * @export
 */
export const DataViewModeType = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2
} as const;
export type DataViewModeType = typeof DataViewModeType[keyof typeof DataViewModeType];

/**
 * 
 * @export
 * @interface DropLocation
 */
export interface DropLocation {
    /**
     * 
     * @type {string}
     * @memberof DropLocation
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DropLocation
     */
    uri?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DropLocation
     */
    locationType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DropLocation
     */
    fileName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DropLocation
     */
    fileType?: string | null;
}
/**
 * 
 * @export
 * @interface ExportJob
 */
export interface ExportJob {
    /**
     * 
     * @type {string}
     * @memberof ExportJob
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExportJob
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExportJob
     */
    requester?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ExportJob
     */
    tenant?: number;
    /**
     * 
     * @type {ContextOverride}
     * @memberof ExportJob
     */
    contextOverride?: ContextOverride;
    /**
     * 
     * @type {string}
     * @memberof ExportJob
     */
    domain?: string | null;
    /**
     * 
     * @type {Array<ExportResource>}
     * @memberof ExportJob
     */
    resources?: Array<ExportResource> | null;
    /**
     * 
     * @type {string}
     * @memberof ExportJob
     */
    exportDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExportJob
     */
    format?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExportJob
     */
    status?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExportJob
     */
    statusDetails?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExportJob
     */
    statusMessage?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ExportJob
     */
    isComplete?: boolean;
    /**
     * 
     * @type {Array<DropLocation>}
     * @memberof ExportJob
     */
    files?: Array<DropLocation> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof ExportJob
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {any}
     * @memberof ExportJob
     */
    _configuration?: any | null;
}
/**
 * 
 * @export
 * @interface ExportResource
 */
export interface ExportResource {
    /**
     * 
     * @type {string}
     * @memberof ExportResource
     */
    resource?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExportResource
     */
    filter?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ExportResource
     */
    fields?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof ExportResource
     */
    format?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExportResource
     */
    status?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ExportResource
     */
    isComplete?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ExportResource
     */
    statusMessage?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExportResource
     */
    stateDetails?: string | null;
    /**
     * 
     * @type {any}
     * @memberof ExportResource
     */
    _configuration?: any | null;
}
/**
 * 
 * @export
 * @interface ImportJob
 */
export interface ImportJob {
    /**
     * 
     * @type {string}
     * @memberof ImportJob
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ImportJob
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ImportJob
     */
    requester?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ImportJob
     */
    domain?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ImportJob
     */
    format?: string | null;
    /**
     * 
     * @type {Array<ImportResource>}
     * @memberof ImportJob
     */
    resources?: Array<ImportResource> | null;
    /**
     * 
     * @type {ContextOverride}
     * @memberof ImportJob
     */
    contextOverride?: ContextOverride;
    /**
     * 
     * @type {boolean}
     * @memberof ImportJob
     */
    isComplete?: boolean;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof ImportJob
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {number}
     * @memberof ImportJob
     */
    tenant?: number;
    /**
     * 
     * @type {string}
     * @memberof ImportJob
     */
    status?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ImportJob
     */
    statusDetails?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ImportJob
     */
    statusMessage?: string | null;
    /**
     * 
     * @type {any}
     * @memberof ImportJob
     */
    _configuration?: any | null;
    /**
     * 
     * @type {Array<DropLocation>}
     * @memberof ImportJob
     */
    files?: Array<DropLocation> | null;
}
/**
 * 
 * @export
 * @interface ImportResource
 */
export interface ImportResource {
    /**
     * 
     * @type {string}
     * @memberof ImportResource
     */
    format?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ImportResource
     */
    resource?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ImportResource
     */
    fields?: Array<string> | null;
    /**
     * 
     * @type {boolean}
     * @memberof ImportResource
     */
    deleteOmitted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ImportResource
     */
    status?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ImportResource
     */
    isComplete?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ImportResource
     */
    statusMessage?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ImportResource
     */
    stateDetails?: string | null;
    /**
     * 
     * @type {any}
     * @memberof ImportResource
     */
    _configuration?: any | null;
    /**
     * 
     * @type {boolean}
     * @memberof ImportResource
     */
    allowSyscalcValueUpdates?: boolean;
}
/**
 * 
 * @export
 * @interface ProcessingCount
 */
export interface ProcessingCount {
    /**
     * 
     * @type {BatchJobItemProcessingStatuses}
     * @memberof ProcessingCount
     */
    status?: BatchJobItemProcessingStatuses;
    /**
     * 
     * @type {number}
     * @memberof ProcessingCount
     */
    count?: number;
}
/**
 * 
 * @export
 * @interface StringStringKeyValuePair
 */
export interface StringStringKeyValuePair {
    /**
     * 
     * @type {string}
     * @memberof StringStringKeyValuePair
     */
    key?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StringStringKeyValuePair
     */
    value?: string | null;
}
