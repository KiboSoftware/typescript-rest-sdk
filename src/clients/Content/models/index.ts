/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface AddOrDeletePublishItem
 */
export interface AddOrDeletePublishItem {
    /**
     * 
     * @type {string}
     * @memberof AddOrDeletePublishItem
     */
    documentId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddOrDeletePublishItem
     */
    docListFQN?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddOrDeletePublishItem
     */
    scopeType?: string | null;
    /**
     * 
     * @type {number}
     * @memberof AddOrDeletePublishItem
     */
    scopeId?: number;
}
/**
 * 
 * @export
 * @interface ContentActiveDateRange
 */
export interface ContentActiveDateRange {
    /**
     * The beginning of the active date range of this document
     * @type {string}
     * @memberof ContentActiveDateRange
     */
    startDate?: string | null;
    /**
     * The end of the active date range for this document
     * @type {string}
     * @memberof ContentActiveDateRange
     */
    endDate?: string | null;
}
/**
 * 
 * @export
 * @interface ContentHttpContent
 */
export interface ContentHttpContent {
    /**
     * 
     * @type {Array<KeyValuePair2>}
     * @memberof ContentHttpContent
     */
    readonly headers?: Array<KeyValuePair2> | null;
}
/**
 * 
 * @export
 * @interface ContentHttpRequestMessage
 */
export interface ContentHttpRequestMessage {
    /**
     * 
     * @type {string}
     * @memberof ContentHttpRequestMessage
     */
    version?: string | null;
    /**
     * 
     * @type {ContentHttpVersionPolicy}
     * @memberof ContentHttpRequestMessage
     */
    versionPolicy?: ContentHttpVersionPolicy;
    /**
     * 
     * @type {ContentHttpContent}
     * @memberof ContentHttpRequestMessage
     */
    content?: ContentHttpContent;
    /**
     * 
     * @type {HttpMethod}
     * @memberof ContentHttpRequestMessage
     */
    method?: HttpMethod;
    /**
     * 
     * @type {string}
     * @memberof ContentHttpRequestMessage
     */
    requestUri?: string | null;
    /**
     * 
     * @type {Array<KeyValuePair2>}
     * @memberof ContentHttpRequestMessage
     */
    readonly headers?: Array<KeyValuePair2> | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ContentHttpRequestMessage
     * @deprecated
     */
    readonly properties?: { [key: string]: any; } | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ContentHttpRequestMessage
     */
    readonly options?: { [key: string]: any; } | null;
}

/**
 * 
 * @export
 */
export const ContentHttpVersionPolicy = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2
} as const;
export type ContentHttpVersionPolicy = typeof ContentHttpVersionPolicy[keyof typeof ContentHttpVersionPolicy];

/**
 * Container for schema-enforced and schemaless data. A document is primarily used to store content (html, text,
 * numbers, dates, JSON, binary data) that is directly or indirectly used for the storefront website experience
 * and may be addressed via the Hypr theming engine language. A document belongs to a documentList and has an
 * underlying documentType.  The documentType describes any required and optional schema. Additionally, a binary
 * object may be stored on the document's content subresource and edge cached via the Mozu CDN.
 * @export
 * @interface Document
 */
export interface Document {
    /**
     * Read-only, system generated 32 digit alpha-numeric string that uniquely identifies the document.
     * @type {string}
     * @memberof Document
     */
    id?: string | null;
    /**
     * The fully qualified name of the document including path.
     * Unique within the documentList. This field is a required field, but it can be updated.
     * @type {string}
     * @memberof Document
     */
    name?: string | null;
    /**
     * ReadOnly, path portion of the Name property.
     * @type {string}
     * @memberof Document
     */
    path?: string | null;
    /**
     * The name of the publish set that this document belongs to, if any.
     * @type {string}
     * @memberof Document
     */
    publishSetCode?: string | null;
    /**
     * If applicable, the file extension associated with the document content.
     * @type {string}
     * @memberof Document
     */
    extension?: string | null;
    /**
     * The full name of the documentType that underlies this document.
     * This field must be supplied upon document creation and cannot be updated.
     * @type {string}
     * @memberof Document
     */
    documentTypeFQN?: string | null;
    /**
     * The fully qualified name of the documentList to which the document belongs.
     * This field is read-only and represents which documentList the document is created in.
     * @type {string}
     * @memberof Document
     */
    listFQN?: string | null;
    /**
     * The size of the content subresource in decimal number of OCTETs.
     * When updating the content subresource, the  contentLength is captured from the
     * Content-Length header, if present, or is otherwise computed from the total size of the http body.
     * @type {number}
     * @memberof Document
     */
    contentLength?: number | null;
    /**
     * The mime type of the document's binary content, provided via the Content-Type header when updating the content
     * subresource. If no value is provided then "application/octet-stream" is set by default.
     * @type {string}
     * @memberof Document
     */
    contentMimeType?: string | null;
    /**
     * The date and time the most recent content update was made via the content subresource. UTC date/time.
     * System-supplied and read-only.
     * @type {string}
     * @memberof Document
     */
    contentUpdateDate?: string | null;
    /**
     * The current publish status of the document. If publishing is not supported or is currently disabled in the
     * documentList then the value will be "active".
     * If publishing is supported and enabled, then the publish state may be "draft" or "active". A document may have both
     * an "active" and "draft" version. The publishState
     * denotes which version of the document being interacted with. This field is read-only.
     * @type {string}
     * @memberof Document
     */
    publishState?: string | null;
    /**
     * A JSON object of name/value pairs. Name parts are matched against the underlying documentType properties names. Any
     * matching name parts must have a value part that conforms to the matching property schema.
     * Any non-matching name/value pairs are considered dynamic schema and may have a value part of valid JSON.
     * The properties field can be used for sorting/filtering and can be projected in the documents returned within a
     * documentList view.
     * @type {any}
     * @memberof Document
     */
    properties?: any | null;
    /**
     * The date and time the document was added to the documentList. This field is system-supplied and read-only.
     * @type {string}
     * @memberof Document
     */
    insertDate?: string | null;
    /**
     * The date and time the most recent document update was made. If publishing is enabled, then this value will
     * represent
     * the last draft update if the publishState is draft, or the last publish date if the publishState is active.
     * @type {string}
     * @memberof Document
     */
    updateDate?: string | null;
    /**
     * 
     * @type {ContentActiveDateRange}
     * @memberof Document
     */
    activeDateRange?: ContentActiveDateRange;
}
/**
 * 
 * @export
 * @interface DocumentCollection
 */
export interface DocumentCollection {
    /**
     * 
     * @type {Array<string>}
     * @memberof DocumentCollection
     */
    subPaths?: Array<string> | null;
    /**
     * 
     * @type {number}
     * @memberof DocumentCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<Document>}
     * @memberof DocumentCollection
     */
    items?: Array<Document> | null;
}
/**
 * 
 * @export
 * @interface DocumentCopyMessage
 */
export interface DocumentCopyMessage {
    /**
     * 
     * @type {string}
     * @memberof DocumentCopyMessage
     */
    originalDocumentId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentCopyMessage
     */
    documentId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentCopyMessage
     */
    documentName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentCopyMessage
     */
    documentPublishSetCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentCopyMessage
     */
    message?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentCopyMessage
     */
    success?: boolean;
}
/**
 * 
 * @export
 * @interface DocumentCopyRequest
 */
export interface DocumentCopyRequest {
    /**
     * Document Id's to copy
     * @type {Array<string>}
     * @memberof DocumentCopyRequest
     */
    documentIds?: Array<string> | null;
    /**
     * The destination path to copy documents to
     * @type {string}
     * @memberof DocumentCopyRequest
     */
    destinationPath?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentCopyRequest
     */
    updatedBy?: string | null;
}
/**
 * 
 * @export
 * @interface DocumentCopyResponse
 */
export interface DocumentCopyResponse {
    /**
     * 
     * @type {Array<DocumentCopyMessage>}
     * @memberof DocumentCopyResponse
     */
    messages?: Array<DocumentCopyMessage> | null;
    /**
     * 
     * @type {number}
     * @memberof DocumentCopyResponse
     */
    numberFilesCopied?: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentCopyResponse
     */
    numberFilesErrored?: number;
}
/**
 * Summary information on a Document Draft
 * @export
 * @interface DocumentDraftSummary
 */
export interface DocumentDraftSummary {
    /**
     * The system generated 32 digit alpha-numeric string that uniquely identifies the document.
     * @type {string}
     * @memberof DocumentDraftSummary
     */
    id?: string | null;
    /**
     * The unique name of the document.
     * @type {string}
     * @memberof DocumentDraftSummary
     */
    name?: string | null;
    /**
     * The full name of the documentType that underlies this document.
     * @type {string}
     * @memberof DocumentDraftSummary
     */
    documentTypeFQN?: string | null;
    /**
     * The fully qualified name of the documentList to which the document belongs.
     * @type {string}
     * @memberof DocumentDraftSummary
     */
    listFQN?: string | null;
    /**
     * The date and time the document was last published, if any.
     * @type {string}
     * @memberof DocumentDraftSummary
     */
    activeUpdateDate?: string | null;
    /**
     * The date and time the document draft was last updated.
     * @type {string}
     * @memberof DocumentDraftSummary
     */
    draftUpdateDate?: string;
    /**
     * The userId or applicationId that last updated the draft document.
     * @type {string}
     * @memberof DocumentDraftSummary
     */
    updatedBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentDraftSummary
     */
    activeUpdatedBy?: string | null;
    /**
     * Denotes the type of draft. 
     * "Created" -- the document has never been published. 
     * "Updated" -- the document has an "active" version and this is a subsequent draft.
     * "Deleted" -- the "active" document will be permanently deleted when this draft is published.
     * @type {string}
     * @memberof DocumentDraftSummary
     */
    publishType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentDraftSummary
     */
    publishSetCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof DocumentDraftSummary
     */
    masterCatalogId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof DocumentDraftSummary
     */
    catalogId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof DocumentDraftSummary
     */
    siteId?: number | null;
}
/**
 * 
 * @export
 * @interface DocumentDraftSummaryPagedCollection
 */
export interface DocumentDraftSummaryPagedCollection {
    /**
     * 
     * @type {number}
     * @memberof DocumentDraftSummaryPagedCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentDraftSummaryPagedCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentDraftSummaryPagedCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentDraftSummaryPagedCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<DocumentDraftSummary>}
     * @memberof DocumentDraftSummaryPagedCollection
     */
    items?: Array<DocumentDraftSummary> | null;
}
/**
 * The definition of a document to create when a documentList is created.
 * @export
 * @interface DocumentInstallation
 */
export interface DocumentInstallation {
    /**
     * The name of the document to create.
     * @type {string}
     * @memberof DocumentInstallation
     */
    name?: string | null;
    /**
     * The full name of the documentType that underlies this document.
     * @type {string}
     * @memberof DocumentInstallation
     */
    documentTypeFQN?: string | null;
    /**
     * The properties of this document.
     * @type {any}
     * @memberof DocumentInstallation
     */
    properties?: any | null;
    /**
     * tbd
     * @type {string}
     * @memberof DocumentInstallation
     */
    locale?: string | null;
}
/**
 * A container for documents and related settings, such as supported documentTypes and publishing. 
 * A documentList belongs to a Mozu context, denoted by the documentList scopyeType and scopeId fields. 
 * Example: documentList A belongs to catalog 123, denoted by the documentList scopeType value of catalog and scopeId value of 123.
 * A documentList can only be accessed if the API context is inclusive of the documentList's scope.
 * Example: documentList A belongs to catalog 123. An API call with an API context of catalog 123 will be able to address documentList A.
 * Example: site 456 uses catalog 123. An API call with an API context of site 456 will be able to address documentList A.
 * Example: masterCatalog 789 is the parent of catalog 123. An API call with an API context of masterCatalog 789 will NOT be able to address documentList A.
 * Documents can be created, queried, managed and published from within a documentList. A documentList may be directly created, or indirectly created from a documentListType.
 * @export
 * @interface DocumentList
 */
export interface DocumentList {
    /**
     * The name component of the listFQN, name@namespace. The name must be unique within the namespace component and cannot be updated.
     * If the documentList is based on a documentListType, then this value will be derived from the documentListType.
     * @type {string}
     * @memberof DocumentList
     */
    name?: string | null;
    /**
     * The namespace component of the listFQN, name@namespace. The issued dev account namespace must be used unless elevated privileges allow a blank namespace to be used. The namespace cannot be updated.
     * If the documentList is based on a documentListType, then this value will be derived from the documentListType.
     * @type {string}
     * @memberof DocumentList
     */
    namespace?: string | null;
    /**
     * The unique identifier of the documentList, represented by name@namespace. The listFQN must be provided when creating the documentList, or the name and namespace fields must be provided.
     * If the documentList is based on a documentListType, then this value will be derived from the documentListType.
     * @type {string}
     * @memberof DocumentList
     */
    listFQN?: string | null;
    /**
     * An array of the full names (name@namespace) of the documentTypes supported by the documentList. A document in the documentList must belong to one of these documentTypes.
     * If the documentList is based on a documentListType, then this value will be derived from the documentListType. DocumentTypes can be added/removed to the documentList, even when
     * based on a documentListType. Existing documents that belong to a documentType removed from the documentList will not be removed.
     * @type {Array<string>}
     * @memberof DocumentList
     */
    documentTypes?: Array<string> | null;
    /**
     * Determines if the documentList will support drafting and publishing documents. 
     * This field defaults to false and cannot be updated.
     * If the documentList is based on a documentListType, then this value will be derived from the documentListType.
     * @type {boolean}
     * @memberof DocumentList
     */
    supportsPublishing?: boolean | null;
    /**
     * Determines if the documentList has publishing turned on or off. If the documentList has a supportsPublishing value of true, then the enablePublishing value will be honored.
     * If enablePublishing is true, then a document draft will be created for a document create or update operation. A document must then be published to become "active".
     * If enablePublish is false, then all document changes are immediately "active".
     * If enablePublish is true, then updating it to false will immediately publish all draft changes.
     * If the documentList is based on a documentListType, then this value will be derived from the documentListType, but can be overridden on update.
     * @type {boolean}
     * @memberof DocumentList
     */
    enablePublishing?: boolean | null;
    /**
     * Determines if the documentList will support ranges of dates that documents are considered 'active'. 
     * This field defaults to false and cannot be updated.
     * If the documentList is based on a documentListType, then this value will be derived from the documentListType.
     * @type {boolean}
     * @memberof DocumentList
     */
    supportsActiveDateRanges?: boolean | null;
    /**
     * Determines if the documentList has ActiveDateRanges turned on or off. If the documentList has a supportsActiveDateRanges value of true, then the enableActiveDateRanges value will be honored.
     * If enableActiveDateRanges is true, then a document will only be returned if the request is made within the time frame the document has been set to be 'active'.
     * If enableActiveDateRanges is false, then the properties can be set but will not be honored.
     * If enableActiveDateRanges is true, then updating it to false will immediately start honoring the previously-set date range.
     * If the documentList is based on a documentListType, then this value will be derived from the documentListType, but can be overridden on update.
     * @type {boolean}
     * @memberof DocumentList
     */
    enableActiveDateRanges?: boolean | null;
    /**
     * An array of one or more views, which each allow GET access to a projection of fields from the documents in the given documentList. 
     * If the documentList is based on a documentListType, then this value will be derived from the documentListType. Views can be added/removed to the documentList, even when
     * the documentList derives from a documentListType.
     * @type {Array<View>}
     * @memberof DocumentList
     */
    views?: Array<View> | null;
    /**
     * An array of strings that describes to the Mozu platform the manner(s) in which a documentList can be used. The following values are valid:
     * entitymanager -- the documentList should be visible in the Admin Content/Entities UI, which allows admin users to create, manage and publish documents within the documentList.
     * sitebuilder -- the documentList should be visible in Site Builder. A documentList will display in the Site Builder Navigation Content List node, which supports document creation, management and web cms integration.
     * If the documentList is based on a documentListType, then this value will be derived from the documentListType. Usages can be added or removed from the documentList, even when the documentList derives from a
     * documentListType.
     * @type {Array<string>}
     * @memberof DocumentList
     */
    usages?: Array<string> | null;
    /**
     * tbd
     * @type {string}
     * @memberof DocumentList
     */
    security?: string | null;
    /**
     * Used in conjunction with the scopeType field to determine the exact context within which the documentList resides.
     * Example: A documentList with a scopeId of 5 and scopeType of masterCatalog belongs to masterCatalog 5.
     * If the documentList is based on a documentListType, then this value will be derived from the documentListType. This value is read-only after the documentList is created.
     * @type {number}
     * @memberof DocumentList
     */
    scopeId?: number | null;
    /**
     * The context level the documentList resides in. Valid values are "tenant", "masterCatalog", "catalog" and "site". This field is used in conjunction with the scopeId field
     * to determine the exact context within which this documentList resides. This field is read-only after insert.
     * If the documentList is based on a documentListType, then this value will be derived from the documentListType. This value is read-only after the documentList is created.
     * @type {string}
     * @memberof DocumentList
     */
    scopeType?: string | null;
    /**
     * The full name of the documentListType (name@namespace) that underlies the documentList. This value is only populated when the Mozu platform creates a documentList from a documentListType.
     * A documentList that is directly created cannot specify a documentListType. This field is therefore read-only.
     * @type {string}
     * @memberof DocumentList
     */
    documentListType?: string | null;
    /**
     * Allows arbitrary data to be stored on the documentList.
     * If the documentList is based on a documentListType, then this value will be derived from the documentListType, but can be overridden on update.
     * @type {any}
     * @memberof DocumentList
     */
    metadata?: any | null;
}
/**
 * 
 * @export
 * @interface DocumentListCollection
 */
export interface DocumentListCollection {
    /**
     * 
     * @type {number}
     * @memberof DocumentListCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentListCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentListCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentListCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<DocumentList>}
     * @memberof DocumentListCollection
     */
    items?: Array<DocumentList> | null;
}
/**
 * A documentListType instructs the Mozu platform to automatically create documentLists within a scopeType. Example: Creating a documentListType in tenant X with a 
 * scopeType of site tells the Mozu platform to immediately create a documentList in each site tenant X has. The Mozu platform will also automatically create a new 
 * documentList for every site subsequently provisioned in tenant X. Any defaultDocuments defined on the documentListType will be created within 
 * each documentList. Each documentList will be addressable via the documenetListType's fully qualified name and will, by default, use the documentListType's views, 
 * usages and metadata. Therefore the documentListType can be used to centrally manage each associated documentList.
 * @export
 * @interface DocumentListType
 */
export interface DocumentListType {
    /**
     * The name component of the documentListTypeFQN, name@namespace. The name must be unique within the namespace component and cannot be updated.
     * Each documentList created from the documentListType will use this value.
     * @type {string}
     * @memberof DocumentListType
     */
    name?: string | null;
    /**
     * The namespace component of the documentListTypeFQN, name@namespace. The issued dev account namespace must be used unless elevated privileges allow a blank namespace to be used. The namespace cannot be updated.
     * Each documentList created from the documentListType will use this value.
     * @type {string}
     * @memberof DocumentListType
     */
    namespace?: string | null;
    /**
     * The unique identifier of the documentListType, represented by name@namespace. The documentListTypeFQN must be provided when creating the documentListType, or the name and namespace fields must be provided.
     * This field cannot be updated and each documentList created from the documentListType will use this value.
     * @type {string}
     * @memberof DocumentListType
     */
    documentListTypeFQN?: string | null;
    /**
     * The context level at which this documentListType will create documentLists. Valid values are "tenant", "masterCatalog", "catalog" and "site". This field is read-only after insert.
     * @type {string}
     * @memberof DocumentListType
     */
    scopeType?: string | null;
    /**
     * Optionally, a documentListType can be defined in an installationPackage and then installed into a tenant. Installed documentListsTypes can only be updated via installation upgrades. 
     * Currently only internal Mozu platform components can create installations. This field is system-supplied and read-only.
     * @type {string}
     * @memberof DocumentListType
     */
    installationPackage?: string | null;
    /**
     * The version of the installationPackge installed. This field is read-only.
     * @type {string}
     * @memberof DocumentListType
     */
    version?: string | null;
    /**
     * The definition of any documents to create when a documentList is created.
     * @type {Array<DocumentInstallation>}
     * @memberof DocumentListType
     */
    defaultDocuments?: Array<DocumentInstallation> | null;
    /**
     * The full names (name@namespace) of the types of documents that can be created within the documentLists belonging to this documentListType. 
     * Each documentList created from the documentListType will use this value, but it can be overridden in an individual documentList.
     * @type {Array<string>}
     * @memberof DocumentListType
     */
    documentTypeFQNs?: Array<string> | null;
    /**
     * Determines if documentLists belonging to this documentListType will support drafting and publishing documents. 
     * This field defaults to false and cannot be updated. Each documentList created from the documentListType will use this value.
     * @type {boolean}
     * @memberof DocumentListType
     */
    supportsPublishing?: boolean;
    /**
     * Determines if documentLists belonging to this documentListType have publishing turned on or off. 
     * Each documentList created from the documentListType will use this value, but it can be overridden in an individual documentList.
     * @type {boolean}
     * @memberof DocumentListType
     */
    enablePublishing?: boolean | null;
    /**
     * Determines if documentLists belonging to this documentListType will support drafting and ActiveDateRanges documents. 
     * This field defaults to false and cannot be updated. Each documentList created from the documentListType will use this value.
     * @type {boolean}
     * @memberof DocumentListType
     */
    supportsActiveDateRanges?: boolean;
    /**
     * Determines if documentLists belonging to this documentListType have ActiveDateRanges turned on or off. 
     * Each documentList created from the documentListType will use this value, but it can be overridden in an individual documentList.
     * @type {boolean}
     * @memberof DocumentListType
     */
    enableActiveDateRanges?: boolean | null;
    /**
     * An array of one or more views, which each allow GET access to a projection of fields from the documents in the given documentList. 
     * Each documentList created from this documentListType will use this value, but it can be overridden in an individual documentList.
     * @type {Array<View>}
     * @memberof DocumentListType
     */
    views?: Array<View> | null;
    /**
     * An array of strings that describes to the Mozu platform the manner(s) in which a documentList can be used. The following values are valid:
     * entitymanager -- the documentList should be visible in the Admin Content/Entities screen, which allows admin users to create, manage and publish documents within the documentList.
     * sitebuilder -- the documentList should be visible in Sitebuilder. A documentList will display in the Sitebuilder Navigation Content List node, which supports document creation, management and web cms integration.
     * Each documentList created from this documentListType will use this value, but it can be overridden in an individual documentList.
     * @type {Array<string>}
     * @memberof DocumentListType
     */
    usages?: Array<string> | null;
    /**
     * Allows arbitrary data to be stored on the documentListType. Each documentList created from this documentListType will use this value, 
     * but it can be overridden in an individual documentList.
     * @type {any}
     * @memberof DocumentListType
     */
    metadata?: any | null;
}
/**
 * 
 * @export
 * @interface DocumentListTypeCollection
 */
export interface DocumentListTypeCollection {
    /**
     * 
     * @type {number}
     * @memberof DocumentListTypeCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentListTypeCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentListTypeCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentListTypeCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<DocumentListType>}
     * @memberof DocumentListTypeCollection
     */
    items?: Array<DocumentListType> | null;
}
/**
 * Summary information for Move operation
 * @export
 * @interface DocumentMoveSummary
 */
export interface DocumentMoveSummary {
    /**
     * 
     * @type {number}
     * @memberof DocumentMoveSummary
     */
    totalCount?: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentMoveSummary
     */
    moveCount?: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentMoveSummary
     */
    duplicateCount?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof DocumentMoveSummary
     */
    messages?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentMoveSummary
     */
    sourcePath?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentMoveSummary
     */
    destPath?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentMoveSummary
     */
    preview?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentMoveSummary
     */
    renameDuplicates?: boolean;
}
/**
 * The schema a document must implement and associated metadata. A documentType is created at a tenant scope and is therefore shared amongst all child contexts (masterCatalog, catalog, site).
 * @export
 * @interface DocumentType
 */
export interface DocumentType {
    /**
     * The name component of the documentType, name@namespace. The name must be unique within the namespace component and cannot be updated.
     * @type {string}
     * @memberof DocumentType
     */
    name?: string | null;
    /**
     * The namespace component of the documentType, name@namespace. The issued dev account namespace must be used unless elevated privileges allow a blank namespace to be used. The namespace cannot be updated.
     * @type {string}
     * @memberof DocumentType
     */
    namespace?: string | null;
    /**
     * The unique identifier of the documentType, represented by name@namespace. The documentTypeFQN must be provided when creating the documentType, or the name and namespace fields must be provided.
     * @type {string}
     * @memberof DocumentType
     */
    documentTypeFQN?: string | null;
    /**
     * The administrative name of the documentType.
     * @type {string}
     * @memberof DocumentType
     */
    adminName?: string | null;
    /**
     * Optionally, a documentType can be defined in an installationPackage and then installed into a tenant. Installed documentTypes can only be updated via installation upgrades. 
     * Currently only internal Mozu platform components can create installations. This field is system-supplied and read-only.
     * @type {string}
     * @memberof DocumentType
     */
    installationPackage?: string | null;
    /**
     * The version of the installationPackge installed. This field is read-only.
     * @type {string}
     * @memberof DocumentType
     */
    version?: string | null;
    /**
     * Allows arbitrary data to be stored on the documentType.
     * @type {any}
     * @memberof DocumentType
     */
    metadata?: any | null;
    /**
     * An array of the schema elements that a document implementing this documentType will have.
     * @type {Array<Property>}
     * @memberof DocumentType
     */
    properties?: Array<Property> | null;
}
/**
 * 
 * @export
 * @interface DocumentTypeCollection
 */
export interface DocumentTypeCollection {
    /**
     * 
     * @type {number}
     * @memberof DocumentTypeCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentTypeCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentTypeCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentTypeCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<DocumentType>}
     * @memberof DocumentTypeCollection
     */
    items?: Array<DocumentType> | null;
}
/**
 * 
 * @export
 * @interface HttpMethod
 */
export interface HttpMethod {
    /**
     * 
     * @type {string}
     * @memberof HttpMethod
     */
    method?: string | null;
}
/**
 * 
 * @export
 * @interface KeyValuePair2
 */
export interface KeyValuePair2 {
    /**
     * 
     * @type {string}
     * @memberof KeyValuePair2
     */
    key?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof KeyValuePair2
     */
    value?: Array<string> | null;
}
/**
 * A schema element describing a name/value pair that can be stored on a document's properties field, where the name is directly defined by the propertyName and the value is constrained by the propertyType.
 * @export
 * @interface Property
 */
export interface Property {
    /**
     * The name portion of the name/value pair stored on a document's properties field. The property name value must be unique within the properties defined on the documentType.
     * This value cannot be updated after property creation.
     * @type {string}
     * @memberof Property
     */
    name?: string | null;
    /**
     * True if the property must be present on the document. This value is false by default.
     * @type {boolean}
     * @memberof Property
     */
    isRequired?: boolean;
    /**
     * True if the property value is an array, where each array value must conform to the propertyType. When false, the property value must directly conform to the propertyType. This value is false by default.
     * @type {boolean}
     * @memberof Property
     */
    isMultiValued?: boolean;
    /**
     * 
     * @type {PropertyType}
     * @memberof Property
     */
    propertyType?: PropertyType;
}
/**
 * The schema a document property value must implement. A propertyType is created at a tenant scope and is therefore shared amongst all child contexts (masterCatalog, catalog, site).
 * A propertyType is analogous to the type argument of a class property in object oriented programming. 
 * A propertyType's dataType field is analogous to an intrinsic value type in object oriented programming, or to a column data type in relational database terminology.
 * @export
 * @interface PropertyType
 */
export interface PropertyType {
    /**
     * The name component of the propertyType, name@namespace. The name must be unique within the namespace component and cannot be updated.
     * @type {string}
     * @memberof PropertyType
     */
    name?: string | null;
    /**
     * The namespace component of the propertyType, name@namespace. The issued dev account namespace must be used unless elevated privileges allow a blank namespace to be used. The namespace cannot be updated.
     * @type {string}
     * @memberof PropertyType
     */
    namespace?: string | null;
    /**
     * The unique identifier of the propertyTYpe, represented by name@namespace. The propertyTypeFQN must be provided when creating the propertyType, or the name and namespace fields must be provided.
     * @type {string}
     * @memberof PropertyType
     */
    propertyTypeFQN?: string | null;
    /**
     * The administrative name of the propertyType.
     * @type {string}
     * @memberof PropertyType
     */
    adminName?: string | null;
    /**
     * Optionally, a propertyType can be defined in an installationPackage and then installed into a tenant. Installed propertyTypes can only be updated via installation upgrades. 
     * Currently only internal Mozu platform components can create installations. This field is system-supplied and read-only.
     * @type {string}
     * @memberof PropertyType
     */
    installationPackage?: string | null;
    /**
     * The version of the installationPackge installed. This field is read-only.
     * @type {string}
     * @memberof PropertyType
     */
    version?: string | null;
    /**
     * The underlying value type that can be held in the document's property value. Valid values are
     * string
     * number
     * boolean
     * datetime
     * json
     * The dataType is analogous to an intrinsic value type in object oriented programming, or to a column data type in relational database terminology.
     * @type {string}
     * @memberof PropertyType
     */
    dataType?: string | null;
    /**
     * tbd
     * @type {boolean}
     * @memberof PropertyType
     */
    isQueryable?: boolean | null;
    /**
     * tbd
     * @type {boolean}
     * @memberof PropertyType
     */
    isSortable?: boolean | null;
    /**
     * tbd
     * @type {boolean}
     * @memberof PropertyType
     */
    isAggregatable?: boolean | null;
}
/**
 * 
 * @export
 * @interface PropertyTypeCollection
 */
export interface PropertyTypeCollection {
    /**
     * 
     * @type {number}
     * @memberof PropertyTypeCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof PropertyTypeCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof PropertyTypeCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof PropertyTypeCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<PropertyType>}
     * @memberof PropertyTypeCollection
     */
    items?: Array<PropertyType> | null;
}
/**
 * Summary information of documents in a publishing set
 * @export
 * @interface PublishSetSummary
 */
export interface PublishSetSummary {
    /**
     * the code of the associated publish set
     * @type {string}
     * @memberof PublishSetSummary
     */
    publishSetCode?: string | null;
    /**
     * the count of documents in the associated publish set
     * @type {number}
     * @memberof PublishSetSummary
     */
    count?: number;
}
/**
 * 
 * @export
 * @interface PublishSetSummaryPagedCollection
 */
export interface PublishSetSummaryPagedCollection {
    /**
     * 
     * @type {number}
     * @memberof PublishSetSummaryPagedCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof PublishSetSummaryPagedCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof PublishSetSummaryPagedCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof PublishSetSummaryPagedCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<PublishSetSummary>}
     * @memberof PublishSetSummaryPagedCollection
     */
    items?: Array<PublishSetSummary> | null;
}
/**
 * A view provides GET access to documents within the documentList the view belongs to. The view can designate which document fields are returned (projection) and
 * a security model for providing GET access independent of the documentList's security model.
 * @export
 * @interface View
 */
export interface View {
    /**
     * A view is addressed via its name, which is unique within the documentList or documentListType in which it is defined.
     * @type {string}
     * @memberof View
     */
    name?: string | null;
    /**
     * tbd
     * @type {Array<string>}
     * @memberof View
     */
    usages?: Array<string> | null;
    /**
     * The metadata field allows arbitrary data to be stored on the view.
     * @type {any}
     * @memberof View
     */
    metadata?: any | null;
    /**
     * The isVisibleInStorefront field indicates whether documents in the view can be accessed from the Mozu storefront application. If true, the storefront application and storefront client application (javascript tier) 
     * can GET documents from the view.
     * @type {boolean}
     * @memberof View
     */
    isVisibleInStorefront?: boolean | null;
    /**
     * Filter criteria to apply automatically when documents from this view are accessed, using the standard Mozu filter syntax. Only documents matching the filter criteria will be returned. 
     * Any filter provided by an operation is combined with the view filter.
     * @type {string}
     * @memberof View
     */
    filter?: string | null;
    /**
     * If view documents are requested with includeInactive=true, then this controls which documents return. If includeInactive is not provided or set to false, then only active documents return.
     * If not set, or set to "all", then all documents return.
     * If set to "active", then only documents within the active date range and documents with no active date range are returned.
     * If set to "scheduled", then only documents with an active date range in the future are returned.
     * If set to "activeOrScheduled", then only documents that are active or documents with an active date range in the future are returned.
     * If set to "ended", then only documents with an active date range in the past are returned.
     * @type {string}
     * @memberof View
     */
    includeInactiveMode?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof View
     */
    isAdminDefault?: boolean | null;
    /**
     * Designation of which document fields are returned (projection) when GETing documents from the view.
     * @type {Array<ViewField>}
     * @memberof View
     */
    fields?: Array<ViewField> | null;
}
/**
 * The projection of an individual field in a view.
 * @export
 * @interface ViewField
 */
export interface ViewField {
    /**
     * The name of the field projected into the view document, meaning the name given to the target field after it is projected.
     * The name must be unique within the list of viewFields provided in the view.
     * @type {string}
     * @memberof ViewField
     */
    name?: string | null;
    /**
     * Specifies the document field to project. First-class fields will be returned on the document, but can be projected into the view properties. 
     * Valid first-class fields include name, id, documentTypeFqn, listFqn and publishState. Dynamic fields within the properties field can be projected by prefixing the target string with "properties."
     * Example: "properties.property1". If a property is an object, then dot notation can be used to walk to particular subelements. Example: "properties.property1.subProperty1"
     * Individual array elements can be selected as well. Example: "properties.property1.subProperty1.subSubArray[2].propertyOnArrayItem"
     * Any target miss will result in a null value returning for the projected field.
     * @type {string}
     * @memberof ViewField
     */
    target?: string | null;
}
