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
 * Collection of events returned as a whole.
 * @export
 * @interface EventCollection
 */
export interface EventCollection {
    /**
     * 
     * @type {number}
     * @memberof EventCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof EventCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof EventCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof EventCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<EventEvent>}
     * @memberof EventCollection
     */
    items?: Array<EventEvent> | null;
}
/**
 * The external/public Event entity used specifically in PULL/POLL event scenarios
 * @export
 * @interface EventDeliveryAttempt
 */
export interface EventDeliveryAttempt {
    /**
     * Status of the delivery process (EventDeliveryStatusType). System-supplied and read-only.
     * @type {string}
     * @memberof EventDeliveryAttempt
     */
    deliveryStatus?: string | null;
    /**
     * Type of error that occurred, if the delivery was unsuccessful
     * @type {string}
     * @memberof EventDeliveryAttempt
     */
    errorType?: string | null;
    /**
     * 
     * @type {HttpStatus}
     * @memberof EventDeliveryAttempt
     */
    httpStatus?: HttpStatus;
    /**
     * HTTP message returned by the remote endpoint
     * @type {string}
     * @memberof EventDeliveryAttempt
     */
    message?: string | null;
    /**
     * The date that the delivery was attempted
     * @type {string}
     * @memberof EventDeliveryAttempt
     */
    executionDate?: string | null;
}
/**
 * The external/public Event entity used specifically in PULL/POLL event scenarios
 * @export
 * @interface EventDeliverySummary
 */
export interface EventDeliverySummary {
    /**
     * The unique identifier for an event delivery summary
     * @type {number}
     * @memberof EventDeliverySummary
     */
    id?: number | null;
    /**
     * Status of the delivery process (EventDeliveryStatusType)
     * @type {string}
     * @memberof EventDeliverySummary
     */
    deliveryStatus?: string | null;
    /**
     * 
     * @type {EventSummary}
     * @memberof EventDeliverySummary
     */
    eventSummary?: EventSummary;
    /**
     * Indicates whether delivery of the event is currently being attempted at this moment in time
     * @type {boolean}
     * @memberof EventDeliverySummary
     */
    isRunning?: boolean;
    /**
     * The date that the delivery was last attempted (either successfully or not)
     * @type {string}
     * @memberof EventDeliverySummary
     */
    lastExecutionDate?: string;
    /**
     * The date that the delivery will next be attempted, if the event has not been successfully delivered yet and there are still retries remaining
     * @type {string}
     * @memberof EventDeliverySummary
     */
    nextExecutionDate?: string;
    /**
     * Number of delivery attempts remaining
     * @type {number}
     * @memberof EventDeliverySummary
     */
    retriesRemaining?: number | null;
    /**
     * Create Date
     * @type {string}
     * @memberof EventDeliverySummary
     */
    createDate?: string | null;
    /**
     * Update Date
     * @type {string}
     * @memberof EventDeliverySummary
     */
    updateDate?: string | null;
    /**
     * Details about each attempted delivery of the event to the endpoint
     * @type {Array<EventDeliveryAttempt>}
     * @memberof EventDeliverySummary
     */
    deliveryAttempts?: Array<EventDeliveryAttempt> | null;
}
/**
 * Collection of event deliver summaries
 * @export
 * @interface EventDeliverySummaryCollection
 */
export interface EventDeliverySummaryCollection {
    /**
     * 
     * @type {number}
     * @memberof EventDeliverySummaryCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof EventDeliverySummaryCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof EventDeliverySummaryCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof EventDeliverySummaryCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<EventDeliverySummary>}
     * @memberof EventDeliverySummaryCollection
     */
    items?: Array<EventDeliverySummary> | null;
}
/**
 * The external/public Event entity used specifically in PULL/POLL event scenarios
 * @export
 * @interface EventEvent
 */
export interface EventEvent {
    /**
     * The unique identifier for an event
     * @type {string}
     * @memberof EventEvent
     */
    id?: string | null;
    /**
     * TenantId
     * @type {number}
     * @memberof EventEvent
     */
    tenantId?: number | null;
    /**
     * MasterCatalogId
     * @type {number}
     * @memberof EventEvent
     */
    masterCatalogId?: number | null;
    /**
     * CatalogId
     * @type {number}
     * @memberof EventEvent
     */
    catalogId?: number | null;
    /**
     * SiteId
     * @type {number}
     * @memberof EventEvent
     */
    siteId?: number | null;
    /**
     * The topic of the event (i.e. product.created)
     * @type {string}
     * @memberof EventEvent
     */
    topic?: string | null;
    /**
     * The identifier / ID of the entity that changed (i.e. product code)
     * @type {string}
     * @memberof EventEvent
     */
    entityId?: string | null;
    /**
     * Is this a test?
     * @type {boolean}
     * @memberof EventEvent
     */
    isTest?: boolean | null;
    /**
     * The Correlation Id of the original API request that caused this event to occur
     * @type {string}
     * @memberof EventEvent
     */
    correlationId?: string | null;
    /**
     * Extended properties. Note: This is purposefully not a CollectionBase type wrapper so consumers start to get used to not having counts returned.
     * @type {Array<EventExtendedProperty>}
     * @memberof EventEvent
     */
    extendedProperties?: Array<EventExtendedProperty> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof EventEvent
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * Event Extended Property
 * @export
 * @interface EventExtendedProperty
 */
export interface EventExtendedProperty {
    /**
     * 
     * @type {string}
     * @memberof EventExtendedProperty
     */
    key?: string | null;
    /**
     * 
     * @type {any}
     * @memberof EventExtendedProperty
     */
    value?: any | null;
}
/**
 * The subscription entity used specifically in PUSH event scenarios where a third-party desires to receive notification of events
 * @export
 * @interface EventSubscription
 */
export interface EventSubscription {
    /**
     * The unique identifier for a subscription
     * @type {string}
     * @memberof EventSubscription
     */
    id?: string | null;
    /**
     * Application identifier for subscription
     * @type {string}
     * @memberof EventSubscription
     */
    appId?: string | null;
    /**
     * ApiVersion
     * @type {string}
     * @memberof EventSubscription
     */
    apiVersion?: string | null;
    /**
     * A list of topics that the subscription relates to
     * @type {Array<string>}
     * @memberof EventSubscription
     */
    topics?: Array<string> | null;
    /**
     * A list of subscribers or subscribing tenants that the subscription relates to
     * @type {Array<SubscribingTenant>}
     * @memberof EventSubscription
     */
    subscribingTenants?: Array<SubscribingTenant> | null;
    /**
     * Notification delivery type which is a string representation of an enumeration of values.  Example: Http (this is case insensitive, so http may also be passed in)
     * @type {string}
     * @memberof EventSubscription
     */
    notificationDeliveryType?: string | null;
    /**
     * Content type of the payload that will be delivered.  This is utilized in combination with the notification delivery type.  Example:  A HTTP Post (notification delivery type) is performed with a JSON representation of the event data (content type).
     * @type {string}
     * @memberof EventSubscription
     */
    contentType?: string | null;
    /**
     * The delivery endpoint that will receive notifications when events concerning the specified topics on the subscription occur.  The format of the endpoint may differ depending on the notification type.  For example, the endpoint may be a URL in some cases and an email address in others if multiple notification types are available.
     * @type {string}
     * @memberof EventSubscription
     */
    endpoint?: string | null;
    /**
     * A boolean value that indicates if the subscription endpoint has been confirmed
     * @type {boolean}
     * @memberof EventSubscription
     */
    confirmed?: boolean | null;
    /**
     * A boolean value that indicates if the subscription is active.  The subscription may be inactive due to repeated downtimes at the endpoint.  If they subscription is deactivated the subscription owner or application will need to reactivate it for notifications to be delivered.
     * @type {boolean}
     * @memberof EventSubscription
     */
    isActive?: boolean | null;
    /**
     * A boolean value that indicates if events should be delivered that resulted from an API call by the application.  If true, any events that occur as a result of a direct API call by the same application will not be delivered. This can prevent an endless loop in certain scenarios.
     * @type {boolean}
     * @memberof EventSubscription
     */
    noCallback?: boolean | null;
    /**
     * When the entity was created. System-supplied and read-only.
     * @type {string}
     * @memberof EventSubscription
     */
    createDate?: string | null;
    /**
     * When the entity was updated. System-supplied and read-only.
     * @type {string}
     * @memberof EventSubscription
     */
    updateDate?: string | null;
    /**
     * Identifier of the user who created the entity. System-supplied and read-only.
     * @type {string}
     * @memberof EventSubscription
     */
    createBy?: string | null;
    /**
     * Identifier of the user who updated the entity. System-supplied and read-only.
     * @type {string}
     * @memberof EventSubscription
     */
    updateBy?: string | null;
}
/**
 * Collection of subscriptions returned as a whole.
 * @export
 * @interface EventSubscriptionCollection
 */
export interface EventSubscriptionCollection {
    /**
     * 
     * @type {number}
     * @memberof EventSubscriptionCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof EventSubscriptionCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof EventSubscriptionCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof EventSubscriptionCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<EventSubscription>}
     * @memberof EventSubscriptionCollection
     */
    items?: Array<EventSubscription> | null;
}
/**
 * Event Summary is a trimmed version of an event that is utilized when displaying the event delivery (aka webhook, HTTP callback, HTTP POST) process history/details
 * @export
 * @interface EventSummary
 */
export interface EventSummary {
    /**
     * Note: Remember in the contract version to convert this Guid to ToString("N") so the dashes are not present
     * @type {string}
     * @memberof EventSummary
     */
    eventId?: string | null;
    /**
     * Tenant Id
     * @type {number}
     * @memberof EventSummary
     */
    tenantId?: number | null;
    /**
     * Master Catalog Id
     * @type {number}
     * @memberof EventSummary
     */
    masterCatalogId?: number | null;
    /**
     * Catalog Id
     * @type {number}
     * @memberof EventSummary
     */
    catalogId?: number | null;
    /**
     * Site Id
     * @type {number}
     * @memberof EventSummary
     */
    siteId?: number | null;
    /**
     * Entity Id
     * @type {string}
     * @memberof EventSummary
     */
    entityId?: string | null;
    /**
     * Topic
     * @type {string}
     * @memberof EventSummary
     */
    topic?: string | null;
    /**
     * Extended properties. Note: This is purposefully not a CollectionBase type wrapper so consumers start to get used to not having counts returned.
     * @type {Array<EventExtendedProperty>}
     * @memberof EventSummary
     */
    extendedProperties?: Array<EventExtendedProperty> | null;
    /**
     * Correlation Id
     * @type {string}
     * @memberof EventSummary
     */
    correlationId?: string | null;
    /**
     * Create Date
     * @type {string}
     * @memberof EventSummary
     */
    createDate?: string | null;
}
/**
 * Http Status
 * @export
 * @interface HttpStatus
 */
export interface HttpStatus {
    /**
     * The higher-level integer based HTTP Status Code returned by the remote endpoint
     * @type {number}
     * @memberof HttpStatus
     */
    code?: number;
    /**
     * Friendly text the HTTP Status Code returned by the remote endpoint
     * @type {string}
     * @memberof HttpStatus
     */
    name?: string | null;
}
/**
 * A site that is associated with a subscription
 * @export
 * @interface SubscribingSite
 */
export interface SubscribingSite {
    /**
     * The site identifier
     * @type {number}
     * @memberof SubscribingSite
     */
    siteId?: number | null;
    /**
     * Is the subscription active at the site level?
     * @type {boolean}
     * @memberof SubscribingSite
     */
    isActive?: boolean | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof SubscribingSite
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * A tenant that is associated with a subscription
 * @export
 * @interface SubscribingTenant
 */
export interface SubscribingTenant {
    /**
     * Type of Subscribing Context
     * !:SubscribingContextLevelTypeConst
     * Derived from state of the subscription.  If any Subscribing Sites exist (e.g. subscription is not at the Tenant Level, then the value will be Site)
     * @type {string}
     * @memberof SubscribingTenant
     */
    subscribingContextLevelType?: string | null;
    /**
     * The tenant identifier
     * @type {number}
     * @memberof SubscribingTenant
     */
    tenantId?: number | null;
    /**
     * Is the subscription active at the tenant level?  If the subscription context is at the Tenant Level this property will be utilized over the SiteLevel
     * @type {boolean}
     * @memberof SubscribingTenant
     */
    isActive?: boolean | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof SubscribingTenant
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * Subscribing Sites
     * @type {Array<SubscribingSite>}
     * @memberof SubscribingTenant
     */
    subscribingSites?: Array<SubscribingSite> | null;
}
