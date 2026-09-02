/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface AffectedEntitiesResponse
 */
export interface AffectedEntitiesResponse {
    /**
     * 
     * @type {EntityGroupResponse}
     * @memberof AffectedEntitiesResponse
     */
    checkouts?: EntityGroupResponse;
    /**
     * 
     * @type {number}
     * @memberof AffectedEntitiesResponse
     */
    customerAccountId?: number;
    /**
     * 
     * @type {EntityGroupResponse}
     * @memberof AffectedEntitiesResponse
     */
    orders?: EntityGroupResponse;
    /**
     * 
     * @type {EntityGroupResponse}
     * @memberof AffectedEntitiesResponse
     */
    payments?: EntityGroupResponse;
    /**
     * 
     * @type {EntityGroupResponse}
     * @memberof AffectedEntitiesResponse
     */
    returns?: EntityGroupResponse;
    /**
     * 
     * @type {EntityGroupResponse}
     * @memberof AffectedEntitiesResponse
     */
    shipments?: EntityGroupResponse;
    /**
     * 
     * @type {EntityGroupResponse}
     * @memberof AffectedEntitiesResponse
     */
    wishlists?: EntityGroupResponse;
}
/**
 * 
 * @export
 * @interface AttributeFqnsRequest
 */
export interface AttributeFqnsRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof AttributeFqnsRequest
     */
    customer?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof AttributeFqnsRequest
     */
    order?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof AttributeFqnsRequest
     */
    _return?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof AttributeFqnsRequest
     */
    shipment?: Array<string> | null;
}
/**
 * 
 * @export
 * @interface AttributeFqnsResponse
 */
export interface AttributeFqnsResponse {
    /**
     * 
     * @type {Array<string>}
     * @memberof AttributeFqnsResponse
     */
    customer?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof AttributeFqnsResponse
     */
    order?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof AttributeFqnsResponse
     */
    _return?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof AttributeFqnsResponse
     */
    shipment?: Array<string> | null;
}
/**
 * 
 * @export
 * @interface AuditInfoResponse
 */
export interface AuditInfoResponse {
    /**
     * 
     * @type {string}
     * @memberof AuditInfoResponse
     */
    createBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AuditInfoResponse
     */
    createDate?: string;
    /**
     * 
     * @type {string}
     * @memberof AuditInfoResponse
     */
    updateBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AuditInfoResponse
     */
    updateDate?: string | null;
}
/**
 * 
 * @export
 * @interface ClearDataNodesRequest
 */
export interface ClearDataNodesRequest {
    /**
     * 
     * @type {boolean}
     * @memberof ClearDataNodesRequest
     */
    checkouts?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof ClearDataNodesRequest
     */
    orders?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof ClearDataNodesRequest
     */
    shipments?: boolean | null;
}
/**
 * 
 * @export
 * @interface ClearDataNodesResponse
 */
export interface ClearDataNodesResponse {
    /**
     * 
     * @type {boolean}
     * @memberof ClearDataNodesResponse
     */
    checkouts?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ClearDataNodesResponse
     */
    orders?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ClearDataNodesResponse
     */
    shipments?: boolean;
}
/**
 * 
 * @export
 * @interface CreateReportRequest
 */
export interface CreateReportRequest {
    /**
     * 
     * @type {AttributeFqnsRequest}
     * @memberof CreateReportRequest
     */
    attributeFqns?: AttributeFqnsRequest;
    /**
     * 
     * @type {ClearDataNodesRequest}
     * @memberof CreateReportRequest
     */
    clearDataNodes?: ClearDataNodesRequest;
    /**
     * 
     * @type {number}
     * @memberof CreateReportRequest
     */
    customerAccountId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CreateReportRequest
     */
    userId?: string | null;
}
/**
 * 
 * @export
 * @interface EntityGroupResponse
 */
export interface EntityGroupResponse {
    /**
     * 
     * @type {number}
     * @memberof EntityGroupResponse
     */
    count?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof EntityGroupResponse
     */
    ids?: Array<string> | null;
}
/**
 * 
 * @export
 * @interface OperationLogEntry
 */
export interface OperationLogEntry {
    /**
     * 
     * @type {number}
     * @memberof OperationLogEntry
     */
    durationMs?: number;
    /**
     * 
     * @type {string}
     * @memberof OperationLogEntry
     */
    entityId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OperationLogEntry
     */
    entityType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OperationLogEntry
     */
    errorMessage?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OperationLogEntry
     */
    operation?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OperationLogEntry
     */
    phase?: string | null;
    /**
     * 
     * @type {number}
     * @memberof OperationLogEntry
     */
    recordsAffected?: number;
    /**
     * 
     * @type {string}
     * @memberof OperationLogEntry
     */
    status?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OperationLogEntry
     */
    store?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OperationLogEntry
     */
    timestamp?: string;
}
/**
 * 
 * @export
 * @interface RedactionReportResponse
 */
export interface RedactionReportResponse {
    /**
     * 
     * @type {AffectedEntitiesResponse}
     * @memberof RedactionReportResponse
     */
    affectedEntities?: AffectedEntitiesResponse;
    /**
     * 
     * @type {AuditInfoResponse}
     * @memberof RedactionReportResponse
     */
    auditInfo?: AuditInfoResponse;
    /**
     * 
     * @type {string}
     * @memberof RedactionReportResponse
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof RedactionReportResponse
     */
    errorSummary?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RedactionReportResponse
     */
    executionCompletedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RedactionReportResponse
     */
    executionStartedAt?: string | null;
    /**
     * 
     * @type {Array<OperationLogEntry>}
     * @memberof RedactionReportResponse
     */
    operationLog?: Array<OperationLogEntry> | null;
    /**
     * 
     * @type {string}
     * @memberof RedactionReportResponse
     */
    reportId?: string | null;
    /**
     * 
     * @type {RequestResponse}
     * @memberof RedactionReportResponse
     */
    request?: RequestResponse;
    /**
     * 
     * @type {number}
     * @memberof RedactionReportResponse
     */
    schemaVersion?: number;
    /**
     * 
     * @type {string}
     * @memberof RedactionReportResponse
     */
    status?: string | null;
    /**
     * 
     * @type {SubjectResponse}
     * @memberof RedactionReportResponse
     */
    subject?: SubjectResponse;
    /**
     * 
     * @type {number}
     * @memberof RedactionReportResponse
     */
    tenantId?: number;
}
/**
 * 
 * @export
 * @interface RedactionReportSummaryListResponse
 */
export interface RedactionReportSummaryListResponse {
    /**
     * 
     * @type {Array<RedactionReportSummaryResponse>}
     * @memberof RedactionReportSummaryListResponse
     */
    items?: Array<RedactionReportSummaryResponse> | null;
    /**
     * 
     * @type {number}
     * @memberof RedactionReportSummaryListResponse
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof RedactionReportSummaryListResponse
     */
    startIndex?: number;
}
/**
 * 
 * @export
 * @interface RedactionReportSummaryResponse
 */
export interface RedactionReportSummaryResponse {
    /**
     * 
     * @type {AuditInfoResponse}
     * @memberof RedactionReportSummaryResponse
     */
    auditInfo?: AuditInfoResponse;
    /**
     * 
     * @type {string}
     * @memberof RedactionReportSummaryResponse
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof RedactionReportSummaryResponse
     */
    errorSummary?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RedactionReportSummaryResponse
     */
    executionCompletedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RedactionReportSummaryResponse
     */
    executionStartedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RedactionReportSummaryResponse
     */
    reportId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof RedactionReportSummaryResponse
     */
    schemaVersion?: number;
    /**
     * 
     * @type {string}
     * @memberof RedactionReportSummaryResponse
     */
    status?: string | null;
    /**
     * 
     * @type {SubjectResponse}
     * @memberof RedactionReportSummaryResponse
     */
    subject?: SubjectResponse;
    /**
     * 
     * @type {number}
     * @memberof RedactionReportSummaryResponse
     */
    tenantId?: number;
}
/**
 * 
 * @export
 * @interface RequestResponse
 */
export interface RequestResponse {
    /**
     * 
     * @type {AttributeFqnsResponse}
     * @memberof RequestResponse
     */
    attributeFqns?: AttributeFqnsResponse;
    /**
     * 
     * @type {ClearDataNodesResponse}
     * @memberof RequestResponse
     */
    clearDataNodes?: ClearDataNodesResponse;
    /**
     * 
     * @type {string}
     * @memberof RequestResponse
     */
    correlationId?: string | null;
}
/**
 * 
 * @export
 * @interface SubjectResponse
 */
export interface SubjectResponse {
    /**
     * 
     * @type {number}
     * @memberof SubjectResponse
     */
    customerAccountId?: number | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SubjectResponse
     */
    resolvedEmailAddresses?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof SubjectResponse
     */
    userId?: string | null;
}
