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
    createBy?: string | null;
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
    updateDate?: string | null;
}
/**
 * 
 * @export
 * @interface AppAuthInfo
 */
export interface AppAuthInfo {
    /**
     * 
     * @type {string}
     * @memberof AppAuthInfo
     */
    applicationId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppAuthInfo
     */
    sharedSecret?: string | null;
}
/**
 * 
 * @export
 * @interface AppDevAttribute
 */
export interface AppDevAttribute {
    /**
     * 
     * @type {string}
     * @memberof AppDevAttribute
     */
    adminName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof AppDevAttribute
     */
    applicationAttributeId?: number;
    /**
     * 
     * @type {number}
     * @memberof AppDevAttribute
     */
    attributeId?: number;
    /**
     * 
     * @type {string}
     * @memberof AppDevAttribute
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppDevAttribute
     */
    fqn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppDevAttribute
     */
    inputType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppDevAttribute
     */
    name?: string | null;
    /**
     * 
     * @type {number}
     * @memberof AppDevAttribute
     */
    sequence?: number;
    /**
     * 
     * @type {string}
     * @memberof AppDevAttribute
     */
    type?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppDevAttribute
     */
    vocabularyJson?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppDevAttribute
     */
    vocabularyValues?: string | null;
}
/**
 * Describes an event that a 3rd party developer can subscribe to.
 * @export
 * @interface AppDevEvent
 */
export interface AppDevEvent {
    /**
     * The Api Version Number which defines what events are available for a given API version.
     * @type {string}
     * @memberof AppDevEvent
     */
    apiVersionNumber?: string | null;
    /**
     * The category the event belongs to.
     * @type {string}
     * @memberof AppDevEvent
     */
    eventCategory?: string | null;
    /**
     * Unique identifier of an Event record.
     * @type {number}
     * @memberof AppDevEvent
     */
    eventId?: number;
    /**
     * The name of the event.
     * @type {string}
     * @memberof AppDevEvent
     */
    eventName?: string | null;
}
/**
 * 
 * @export
 * @interface AppDevHttpContent
 */
export interface AppDevHttpContent {
    /**
     * 
     * @type {Array<StringStringIEnumerableKeyValuePair>}
     * @memberof AppDevHttpContent
     */
    readonly headers?: Array<StringStringIEnumerableKeyValuePair> | null;
}
/**
 * 
 * @export
 * @interface AppDevHttpRequestMessage
 */
export interface AppDevHttpRequestMessage {
    /**
     * 
     * @type {AppDevHttpContent}
     * @memberof AppDevHttpRequestMessage
     */
    content?: AppDevHttpContent;
    /**
     * 
     * @type {Array<StringStringIEnumerableKeyValuePair>}
     * @memberof AppDevHttpRequestMessage
     */
    readonly headers?: Array<StringStringIEnumerableKeyValuePair> | null;
    /**
     * 
     * @type {HttpMethod}
     * @memberof AppDevHttpRequestMessage
     */
    method?: HttpMethod;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AppDevHttpRequestMessage
     */
    readonly options?: { [key: string]: any; } | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AppDevHttpRequestMessage
     * @deprecated
     */
    readonly properties?: { [key: string]: any; } | null;
    /**
     * 
     * @type {string}
     * @memberof AppDevHttpRequestMessage
     */
    requestUri?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppDevHttpRequestMessage
     */
    version?: string | null;
    /**
     * 
     * @type {HttpVersionPolicy}
     * @memberof AppDevHttpRequestMessage
     */
    versionPolicy?: HttpVersionPolicy;
}
/**
 * 
 * @export
 * @interface AppDevHttpResponseMessage
 */
export interface AppDevHttpResponseMessage {
    /**
     * 
     * @type {AppDevHttpContent}
     * @memberof AppDevHttpResponseMessage
     */
    content?: AppDevHttpContent;
    /**
     * 
     * @type {Array<StringStringIEnumerableKeyValuePair>}
     * @memberof AppDevHttpResponseMessage
     */
    readonly headers?: Array<StringStringIEnumerableKeyValuePair> | null;
    /**
     * 
     * @type {boolean}
     * @memberof AppDevHttpResponseMessage
     */
    readonly isSuccessStatusCode?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AppDevHttpResponseMessage
     */
    reasonPhrase?: string | null;
    /**
     * 
     * @type {AppDevHttpRequestMessage}
     * @memberof AppDevHttpResponseMessage
     */
    requestMessage?: AppDevHttpRequestMessage;
    /**
     * 
     * @type {AppDevHttpStatusCode}
     * @memberof AppDevHttpResponseMessage
     */
    statusCode?: AppDevHttpStatusCode;
    /**
     * 
     * @type {Array<StringStringIEnumerableKeyValuePair>}
     * @memberof AppDevHttpResponseMessage
     */
    readonly trailingHeaders?: Array<StringStringIEnumerableKeyValuePair> | null;
    /**
     * 
     * @type {string}
     * @memberof AppDevHttpResponseMessage
     */
    version?: string | null;
}

/**
 * 
 * @export
 */
export const AppDevHttpStatusCode = {
    NUMBER_100: 100,
    NUMBER_101: 101,
    NUMBER_102: 102,
    NUMBER_103: 103,
    NUMBER_200: 200,
    NUMBER_201: 201,
    NUMBER_202: 202,
    NUMBER_203: 203,
    NUMBER_204: 204,
    NUMBER_205: 205,
    NUMBER_206: 206,
    NUMBER_207: 207,
    NUMBER_208: 208,
    NUMBER_226: 226,
    NUMBER_300: 300,
    NUMBER_301: 301,
    NUMBER_302: 302,
    NUMBER_303: 303,
    NUMBER_304: 304,
    NUMBER_305: 305,
    NUMBER_306: 306,
    NUMBER_307: 307,
    NUMBER_308: 308,
    NUMBER_400: 400,
    NUMBER_401: 401,
    NUMBER_402: 402,
    NUMBER_403: 403,
    NUMBER_404: 404,
    NUMBER_405: 405,
    NUMBER_406: 406,
    NUMBER_407: 407,
    NUMBER_408: 408,
    NUMBER_409: 409,
    NUMBER_410: 410,
    NUMBER_411: 411,
    NUMBER_412: 412,
    NUMBER_413: 413,
    NUMBER_414: 414,
    NUMBER_415: 415,
    NUMBER_416: 416,
    NUMBER_417: 417,
    NUMBER_421: 421,
    NUMBER_422: 422,
    NUMBER_423: 423,
    NUMBER_424: 424,
    NUMBER_426: 426,
    NUMBER_428: 428,
    NUMBER_429: 429,
    NUMBER_431: 431,
    NUMBER_451: 451,
    NUMBER_500: 500,
    NUMBER_501: 501,
    NUMBER_502: 502,
    NUMBER_503: 503,
    NUMBER_504: 504,
    NUMBER_505: 505,
    NUMBER_506: 506,
    NUMBER_507: 507,
    NUMBER_508: 508,
    NUMBER_510: 510,
    NUMBER_511: 511
} as const;
export type AppDevHttpStatusCode = typeof AppDevHttpStatusCode[keyof typeof AppDevHttpStatusCode];

/**
 * 
 * @export
 * @interface AppDevPackage
 */
export interface AppDevPackage {
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    apiVersion?: string | null;
    /**
     * This will be used by the 3rd party developers to set a URL the intalled 
     * applications can call from the Tenant installation/
     * @type {string}
     * @memberof AppDevPackage
     */
    appConfigUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    appId?: string | null;
    /**
     * App Key for the package in question.
     * @type {string}
     * @memberof AppDevPackage
     */
    appKey?: string | null;
    /**
     * 
     * @type {number}
     * @memberof AppDevPackage
     */
    appSchemeVersion?: number;
    /**
     * 
     * @type {Array<ApplicationAttribute>}
     * @memberof AppDevPackage
     */
    applicationAttributes?: Array<ApplicationAttribute> | null;
    /**
     * List of Application Behaviors that apply to this version of the application.
     * @type {Array<ApplicationBehavior>}
     * @memberof AppDevPackage
     */
    applicationBehaviors?: Array<ApplicationBehavior> | null;
    /**
     * 
     * @type {Array<ApplicationCapability>}
     * @memberof AppDevPackage
     */
    applicationCapabilities?: Array<ApplicationCapability> | null;
    /**
     * 
     * @type {Array<ApplicationCapabilityType>}
     * @memberof AppDevPackage
     */
    applicationCapabilityTypes?: Array<ApplicationCapabilityType> | null;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    applicationDescription?: string | null;
    /**
     * 
     * @type {number}
     * @memberof AppDevPackage
     */
    applicationDetailId?: number | null;
    /**
     * 
     * @type {Array<ApplicationEntitlement>}
     * @memberof AppDevPackage
     */
    applicationEntitlements?: Array<ApplicationEntitlement> | null;
    /**
     * 
     * @type {number}
     * @memberof AppDevPackage
     */
    applicationId?: number;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    applicationName?: string | null;
    /**
     * This is the DevAccountId that owns the application
     * @type {number}
     * @memberof AppDevPackage
     */
    applicationOwnerDevAccountId?: number;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    applicationStatus?: string | null;
    /**
     * 
     * @type {number}
     * @memberof AppDevPackage
     */
    applicationStatusId?: number;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    applicationStatusName?: string | null;
    /**
     * 
     * @type {Array<ApplicationSubscription>}
     * @memberof AppDevPackage
     */
    applicationSubscriptions?: Array<ApplicationSubscription> | null;
    /**
     * 
     * @type {number}
     * @memberof AppDevPackage
     */
    applicationTypeId?: number;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    applicationTypeName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    applicationUpdateDate?: string | null;
    /**
     * 
     * @type {number}
     * @memberof AppDevPackage
     */
    assetFileCount?: number;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    attributeNamespace?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    dataNamespace?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof AppDevPackage
     */
    hasApplicationVersions?: boolean;
    /**
     * 
     * @type {number}
     * @memberof AppDevPackage
     */
    id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof AppDevPackage
     */
    isDeleted?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppDevPackage
     */
    isLocked?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppDevPackage
     */
    isReleasePackage?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    legacyNamespace?: string | null;
    /**
     * 
     * @type {number}
     * @memberof AppDevPackage
     */
    majorVersion?: number;
    /**
     * 
     * @type {number}
     * @memberof AppDevPackage
     */
    minorVersion?: number;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    namespace?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    namespaceRegistryId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    packageDescription?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    packageGuid?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    packageName?: string | null;
    /**
     * The parent theme AppKey if this is a theme and 
     * the theme extends a valid, published theme.
     * @type {string}
     * @memberof AppDevPackage
     */
    parentThemeAppKey?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    parentThemeName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    publishedParentSemanticVersion?: string | null;
    /**
     * 
     * @type {number}
     * @memberof AppDevPackage
     */
    publishedParentThemeId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AppDevPackage
     */
    revision?: number;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    semanticVersionRange?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    sharedSecret?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    themeEngineVersion?: string | null;
    /**
     * Whether or not there's a theme update.
     * @type {boolean}
     * @memberof AppDevPackage
     */
    updateAvailable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    updateDate?: string;
    /**
     * The AppKey is a runtime type.
     * This only applies for themes that inherit from another theme.
     * It shows the most current update available.
     * @type {string}
     * @memberof AppDevPackage
     */
    updateParentAppKey?: string | null;
    /**
     * This only applies for themes that inherit from another theme.
     * It shows the name of the most current update available.
     * @type {string}
     * @memberof AppDevPackage
     */
    updateParentThemeName?: string | null;
    /**
     * This only applies for themes that inherit from another theme.
     * It shows the version of the most current update available.
     * @type {string}
     * @memberof AppDevPackage
     */
    updateParentThemeVersion?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    userId?: string | null;
    /**
     * List of Statuses that the application can move to during the application lifecycle.
     * This is based on what the current value of the ApplicatinStatusId is.
     * @type {Array<number>}
     * @memberof AppDevPackage
     */
    validApplicationStatusIdList?: Array<number> | null;
}
/**
 * 
 * @export
 * @interface AppVersion
 */
export interface AppVersion {
    /**
     * 
     * @type {number}
     * @memberof AppVersion
     */
    majorVersion?: number;
    /**
     * 
     * @type {number}
     * @memberof AppVersion
     */
    minorVersion?: number;
    /**
     * 
     * @type {number}
     * @memberof AppVersion
     */
    revision?: number;
}
/**
 * Holds attribute definitions for AppVersion
 * @export
 * @interface ApplicationAttribute
 */
export interface ApplicationAttribute {
    /**
     * Comma delimited list of attribute codes.
     * @type {string}
     * @memberof ApplicationAttribute
     */
    attributeCodes?: string | null;
    /**
     * json representation of attribute definitions
     * @type {string}
     * @memberof ApplicationAttribute
     */
    attributeJson?: string | null;
    /**
     * 
     * @type {Array<AppDevAttribute>}
     * @memberof ApplicationAttribute
     */
    attributes?: Array<AppDevAttribute> | null;
    /**
     * 
     * @type {boolean}
     * @memberof ApplicationAttribute
     */
    isAppliedToBase?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ApplicationAttribute
     */
    packageId?: number;
    /**
     * Will contain ProductTypeCollection if Product, else AttributeSet
     * @type {string}
     * @memberof ApplicationAttribute
     */
    productTypeJson?: string | null;
    /**
     * Source Tenant Id
     * @type {number}
     * @memberof ApplicationAttribute
     */
    sourceTenantId?: number;
    /**
     * Source Tenant Name
     * @type {string}
     * @memberof ApplicationAttribute
     */
    sourceTenantName?: string | null;
    /**
     * Customer, Order, or Product
     * @type {string}
     * @memberof ApplicationAttribute
     */
    subsystem?: string | null;
}
/**
 * 
 * @export
 * @interface ApplicationBehavior
 */
export interface ApplicationBehavior {
    /**
     * 
     * @type {number}
     * @memberof ApplicationBehavior
     */
    behaviorId?: number;
    /**
     * 
     * @type {number}
     * @memberof ApplicationBehavior
     */
    packageId?: number;
}
/**
 * 
 * @export
 * @interface ApplicationCapability
 */
export interface ApplicationCapability {
    /**
     * 
     * @type {number}
     * @memberof ApplicationCapability
     */
    applicationCapabilityId?: number;
    /**
     * 
     * @type {number}
     * @memberof ApplicationCapability
     */
    applicationCapabilityTypeId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicationCapability
     */
    applicationEndPoint?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ApplicationCapability
     */
    capabilityTypeContractId?: number;
    /**
     * 
     * @type {number}
     * @memberof ApplicationCapability
     */
    packageId?: number;
}
/**
 * 
 * @export
 * @interface ApplicationCapabilityDomain
 */
export interface ApplicationCapabilityDomain {
    /**
     * 
     * @type {number}
     * @memberof ApplicationCapabilityDomain
     */
    applicationCapabilityDomainId?: number;
    /**
     * 
     * @type {Array<ApplicationCapabilityDomainValue>}
     * @memberof ApplicationCapabilityDomain
     */
    applicationCapabilityDomainValues1?: Array<ApplicationCapabilityDomainValue> | null;
    /**
     * 
     * @type {Array<ApplicationCapabilityDomainValue>}
     * @memberof ApplicationCapabilityDomain
     */
    applicationCapabilityDomainValues2?: Array<ApplicationCapabilityDomainValue> | null;
    /**
     * 
     * @type {number}
     * @memberof ApplicationCapabilityDomain
     */
    applicationCapabilityTypeId?: number;
    /**
     * 
     * @type {string}
     * @memberof ApplicationCapabilityDomain
     */
    name?: string | null;
}
/**
 * 
 * @export
 * @interface ApplicationCapabilityDomainValue
 */
export interface ApplicationCapabilityDomainValue {
    /**
     * 
     * @type {number}
     * @memberof ApplicationCapabilityDomainValue
     */
    applicationCapabilityDomainId1?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ApplicationCapabilityDomainValue
     */
    applicationCapabilityDomainId2?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ApplicationCapabilityDomainValue
     */
    applicationCapabilityDomainValueId?: number;
    /**
     * 
     * @type {string}
     * @memberof ApplicationCapabilityDomainValue
     */
    displayName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicationCapabilityDomainValue
     */
    valueName?: string | null;
}
/**
 * 
 * @export
 * @interface ApplicationCapabilityType
 */
export interface ApplicationCapabilityType {
    /**
     * 
     * @type {Array<ApplicationCapability>}
     * @memberof ApplicationCapabilityType
     */
    applicationCapabilities?: Array<ApplicationCapability> | null;
    /**
     * 
     * @type {Array<ApplicationCapabilityDomain>}
     * @memberof ApplicationCapabilityType
     */
    applicationCapabilityDomains?: Array<ApplicationCapabilityDomain> | null;
    /**
     * 
     * @type {number}
     * @memberof ApplicationCapabilityType
     */
    applicationCapabilityTypeId?: number;
    /**
     * 
     * @type {number}
     * @memberof ApplicationCapabilityType
     */
    applicationId?: number;
    /**
     * 
     * @type {number}
     * @memberof ApplicationCapabilityType
     */
    capabilityTypeId?: number;
    /**
     * 
     * @type {string}
     * @memberof ApplicationCapabilityType
     */
    capabilityTypeName?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ApplicationCapabilityType
     */
    isImplemented?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ApplicationCapabilityType
     */
    isInitializedByDefault?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ApplicationCapabilityType
     */
    packageId?: number;
}
/**
 * 
 * @export
 * @interface ApplicationEntitlement
 */
export interface ApplicationEntitlement {
    /**
     * 
     * @type {string}
     * @memberof ApplicationEntitlement
     */
    appKey?: string | null;
    /**
     * Denotes the application owner dev account id
     * @type {number}
     * @memberof ApplicationEntitlement
     */
    appOwnerDevAccountId?: number;
    /**
     * 
     * @type {number}
     * @memberof ApplicationEntitlement
     */
    applicationEntitlementId?: number;
    /**
     * 
     * @type {number}
     * @memberof ApplicationEntitlement
     */
    applicationId?: number;
    /**
     * 
     * @type {string}
     * @memberof ApplicationEntitlement
     */
    applicationLicenseType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicationEntitlement
     */
    applicationName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicationEntitlement
     */
    applicationStatusId?: string | null;
    /**
     * 
     * @type {Array<ApplicationTransaction>}
     * @memberof ApplicationEntitlement
     */
    applicationTransactions?: Array<ApplicationTransaction> | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicationEntitlement
     */
    applicationVersion?: string | null;
    /**
     * User id that soft-deleted this entitlement during an application delete cascade (null if active).
     * @type {string}
     * @memberof ApplicationEntitlement
     */
    deletedBy?: string | null;
    /**
     * First name of the user who soft-deleted this entitlement, resolved from Mozu.AppDev.Contracts.ApplicationEntitlement.DeletedBy on read (null if active or unresolved).
     * @type {string}
     * @memberof ApplicationEntitlement
     */
    deletedByFirstName?: string | null;
    /**
     * Last name of the user who soft-deleted this entitlement, resolved from Mozu.AppDev.Contracts.ApplicationEntitlement.DeletedBy on read (null if active or unresolved).
     * @type {string}
     * @memberof ApplicationEntitlement
     */
    deletedByLastName?: string | null;
    /**
     * UTC timestamp when this entitlement was soft-deleted during an application delete cascade (null if active).
     * @type {string}
     * @memberof ApplicationEntitlement
     */
    deletedDate?: string | null;
    /**
     * Denotes which DevAccountId is the application installed in
     * @type {number}
     * @memberof ApplicationEntitlement
     */
    devAccountId?: number;
    /**
     * 
     * @type {string}
     * @memberof ApplicationEntitlement
     */
    effectiveEndDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicationEntitlement
     */
    effectiveStartDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicationEntitlement
     */
    entitlementStatus?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicationEntitlement
     */
    installedAppsApplicationId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicationEntitlement
     */
    installedByFirstName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicationEntitlement
     */
    installedByLastName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicationEntitlement
     */
    installedDate?: string;
    /**
     * 
     * @type {number}
     * @memberof ApplicationEntitlement
     */
    packageId?: number;
    /**
     * 
     * @type {string}
     * @memberof ApplicationEntitlement
     */
    packageName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ApplicationEntitlement
     */
    siteId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ApplicationEntitlement
     */
    tenantId?: number;
    /**
     * 
     * @type {string}
     * @memberof ApplicationEntitlement
     */
    tenantName?: string | null;
}
/**
 * Defines an event that an Application Version is subscribed to.
 * @export
 * @interface ApplicationSubscription
 */
export interface ApplicationSubscription {
    /**
     * The End Point where the event information will be sent to when the event is fired.
     * @type {string}
     * @memberof ApplicationSubscription
     */
    applicationEndPoint?: string | null;
    /**
     * The unique identifier of an ApplicationVersionEvent record.
     * @type {number}
     * @memberof ApplicationSubscription
     */
    applicationSubscriptionId?: number;
    /**
     * 
     * @type {Array<AppDevEvent>}
     * @memberof ApplicationSubscription
     */
    events?: Array<AppDevEvent> | null;
    /**
     * 
     * @type {boolean}
     * @memberof ApplicationSubscription
     */
    noCallback?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ApplicationSubscription
     */
    packageId?: number;
}
/**
 * 
 * @export
 * @interface ApplicationSummary
 */
export interface ApplicationSummary {
    /**
     * 
     * @type {string}
     * @memberof ApplicationSummary
     */
    appId?: string | null;
    /**
     * The AppKey is a runtime type.
     * @type {string}
     * @memberof ApplicationSummary
     */
    appKey?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ApplicationSummary
     */
    appSchemeVersion?: number;
    /**
     * 
     * @type {number}
     * @memberof ApplicationSummary
     */
    applicationId?: number;
    /**
     * 
     * @type {string}
     * @memberof ApplicationSummary
     */
    applicationNamespace?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ApplicationSummary
     */
    applicationStatusId?: number;
    /**
     * 
     * @type {string}
     * @memberof ApplicationSummary
     */
    applicationStatusName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ApplicationSummary
     */
    applicationTypeId?: number;
    /**
     * 
     * @type {AppVersion}
     * @memberof ApplicationSummary
     */
    applicationVersion?: AppVersion;
    /**
     * Indicates whether the application has been upgraded to V2 credentials.
     * @type {boolean}
     * @memberof ApplicationSummary
     */
    hasV2Credentials?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ApplicationSummary
     */
    hasVersions?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ApplicationSummary
     */
    name?: string | null;
    /**
     * The AppKey is a runtime type.
     * This only applies for themes that inherit from another theme.
     * @type {string}
     * @memberof ApplicationSummary
     */
    parentAppKey?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicationSummary
     */
    parentName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ApplicationSummary
     */
    releasePackageId?: number;
    /**
     * 
     * @type {string}
     * @memberof ApplicationSummary
     */
    releasePackageName?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ApplicationSummary
     */
    updateAvailable?: boolean;
    /**
     * The AppKey is a runtime type.
     * This only applies for themes that inherit from another theme.
     * It shows the most current update available.
     * @type {string}
     * @memberof ApplicationSummary
     */
    updateParentAppKey?: string | null;
}
/**
 * Collection of products returned as a whole. A collection is not paged.
 * @export
 * @interface ApplicationSummaryCollection
 */
export interface ApplicationSummaryCollection {
    /**
     * 
     * @type {Array<ApplicationSummary>}
     * @memberof ApplicationSummaryCollection
     */
    items?: Array<ApplicationSummary> | null;
    /**
     * 
     * @type {number}
     * @memberof ApplicationSummaryCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof ApplicationSummaryCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof ApplicationSummaryCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof ApplicationSummaryCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface ApplicationTransaction
 */
export interface ApplicationTransaction {
    /**
     * 
     * @type {number}
     * @memberof ApplicationTransaction
     */
    applicationEntitlementId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ApplicationTransaction
     */
    applicationId?: number;
    /**
     * 
     * @type {number}
     * @memberof ApplicationTransaction
     */
    applicationTransactionId?: number;
    /**
     * 
     * @type {string}
     * @memberof ApplicationTransaction
     */
    isoCurrencyCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ApplicationTransaction
     */
    localeCode?: number;
    /**
     * 
     * @type {string}
     * @memberof ApplicationTransaction
     */
    orderNumber?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ApplicationTransaction
     */
    siteId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ApplicationTransaction
     */
    tenantId?: number;
    /**
     * 
     * @type {string}
     * @memberof ApplicationTransaction
     */
    transactionDate?: string;
    /**
     * 
     * @type {number}
     * @memberof ApplicationTransaction
     */
    transactionPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof ApplicationTransaction
     */
    transactionTax?: number;
    /**
     * 
     * @type {number}
     * @memberof ApplicationTransaction
     */
    transactionTotal?: number;
}
/**
 * 
 * @export
 * @interface ApplicationVersionsCollection
 */
export interface ApplicationVersionsCollection {
    /**
     * 
     * @type {Array<string>}
     * @memberof ApplicationVersionsCollection
     */
    items?: Array<string> | null;
    /**
     * 
     * @type {number}
     * @memberof ApplicationVersionsCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface AuthTicket
 */
export interface AuthTicket {
    /**
     * 
     * @type {string}
     * @memberof AuthTicket
     */
    accessToken?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AuthTicket
     */
    accessTokenExpiration?: string;
    /**
     * For V2 credentials, indicates the environment scope (Sandbox/Production).
     * Null for V1 credentials (no environment restriction).
     * @type {string}
     * @memberof AuthTicket
     */
    environmentScope?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AuthTicket
     */
    refreshToken?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AuthTicket
     */
    refreshTokenExpiration?: string;
}
/**
 * Complex object to have the refresh token sent in the body intead of as clear text in the query string.
 * @export
 * @interface AuthTicketRequest
 */
export interface AuthTicketRequest {
    /**
     * The refresh token for renewing the authorization.
     * @type {string}
     * @memberof AuthTicketRequest
     */
    refreshToken?: string | null;
}
/**
 * 
 * @export
 * @interface BehaviorCategoryBehavior
 */
export interface BehaviorCategoryBehavior {
    /**
     * 
     * @type {Array<BehaviorItem>}
     * @memberof BehaviorCategoryBehavior
     */
    behaviorItems?: Array<BehaviorItem> | null;
    /**
     * 
     * @type {number}
     * @memberof BehaviorCategoryBehavior
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof BehaviorCategoryBehavior
     */
    name?: string | null;
}
/**
 * 
 * @export
 * @interface BehaviorCategoryBehaviorCollection
 */
export interface BehaviorCategoryBehaviorCollection {
    /**
     * 
     * @type {Array<BehaviorCategoryBehavior>}
     * @memberof BehaviorCategoryBehaviorCollection
     */
    items?: Array<BehaviorCategoryBehavior> | null;
    /**
     * 
     * @type {number}
     * @memberof BehaviorCategoryBehaviorCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface BehaviorItem
 */
export interface BehaviorItem {
    /**
     * 
     * @type {number}
     * @memberof BehaviorItem
     */
    categoryId?: number;
    /**
     * 
     * @type {number}
     * @memberof BehaviorItem
     */
    id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BehaviorItem
     */
    isPrivate?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BehaviorItem
     */
    name?: string | null;
}
/**
 * 
 * @export
 * @interface BrotliDecompressedContent
 */
export interface BrotliDecompressedContent {
    /**
     * 
     * @type {Array<StringStringIEnumerableKeyValuePair>}
     * @memberof BrotliDecompressedContent
     */
    readonly headers?: Array<StringStringIEnumerableKeyValuePair> | null;
}
/**
 * 
 * @export
 * @interface ByteArrayContent
 */
export interface ByteArrayContent {
    /**
     * 
     * @type {Array<StringStringIEnumerableKeyValuePair>}
     * @memberof ByteArrayContent
     */
    readonly headers?: Array<StringStringIEnumerableKeyValuePair> | null;
}
/**
 * 
 * @export
 * @interface DecompressedContent
 */
export interface DecompressedContent {
    /**
     * 
     * @type {Array<StringStringIEnumerableKeyValuePair>}
     * @memberof DecompressedContent
     */
    readonly headers?: Array<StringStringIEnumerableKeyValuePair> | null;
}
/**
 * 
 * @export
 * @interface DeflateDecompressedContent
 */
export interface DeflateDecompressedContent {
    /**
     * 
     * @type {Array<StringStringIEnumerableKeyValuePair>}
     * @memberof DeflateDecompressedContent
     */
    readonly headers?: Array<StringStringIEnumerableKeyValuePair> | null;
}
/**
 * 
 * @export
 * @interface EmptyContent
 */
export interface EmptyContent {
    /**
     * 
     * @type {Array<StringStringIEnumerableKeyValuePair>}
     * @memberof EmptyContent
     */
    readonly headers?: Array<StringStringIEnumerableKeyValuePair> | null;
}
/**
 * 
 * @export
 * @interface FileMetadata
 */
export interface FileMetadata {
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof FileMetadata
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof FileMetadata
     */
    checkSum?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FileMetadata
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FileMetadata
     */
    path?: string | null;
    /**
     * 
     * @type {number}
     * @memberof FileMetadata
     */
    sizeInBytes?: number;
    /**
     * 
     * @type {string}
     * @memberof FileMetadata
     */
    type?: string | null;
}
/**
 * 
 * @export
 * @interface FolderMetadata
 */
export interface FolderMetadata {
    /**
     * 
     * @type {Array<FileMetadata>}
     * @memberof FolderMetadata
     */
    files?: Array<FileMetadata> | null;
    /**
     * 
     * @type {string}
     * @memberof FolderMetadata
     */
    fullPath?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FolderMetadata
     */
    name?: string | null;
    /**
     * 
     * @type {Array<FolderMetadata>}
     * @memberof FolderMetadata
     */
    subFolders?: Array<FolderMetadata> | null;
}
/**
 * 
 * @export
 * @interface FormUrlEncodedContent
 */
export interface FormUrlEncodedContent {
    /**
     * 
     * @type {Array<StringStringIEnumerableKeyValuePair>}
     * @memberof FormUrlEncodedContent
     */
    readonly headers?: Array<StringStringIEnumerableKeyValuePair> | null;
}
/**
 * 
 * @export
 * @interface GZipDecompressedContent
 */
export interface GZipDecompressedContent {
    /**
     * 
     * @type {Array<StringStringIEnumerableKeyValuePair>}
     * @memberof GZipDecompressedContent
     */
    readonly headers?: Array<StringStringIEnumerableKeyValuePair> | null;
}
/**
 * A job that represents the build of a Kibo hosted headless application.
 * @export
 * @interface HeadlessAppBuildJob
 */
export interface HeadlessAppBuildJob {
    /**
     * The Commit ID for the build job.
     * @type {string}
     * @memberof HeadlessAppBuildJob
     */
    commitId?: string | null;
    /**
     * The time of code commit for the build job.
     * @type {string}
     * @memberof HeadlessAppBuildJob
     */
    commitTime?: string;
    /**
     * The end time for the build job.
     * @type {string}
     * @memberof HeadlessAppBuildJob
     */
    endTime?: string;
    /**
     * The unique identifier for a Headless Application Build Job.
     * @type {string}
     * @memberof HeadlessAppBuildJob
     */
    jobId?: string | null;
    /**
     * The start time for the build job.
     * @type {string}
     * @memberof HeadlessAppBuildJob
     */
    startTime?: string;
    /**
     * The name of the third party feature.
     * @type {string}
     * @memberof HeadlessAppBuildJob
     */
    status?: string | null;
}
/**
 * Response object for looking up headless storefront build jobs.
 * @export
 * @interface HeadlessAppBuildJobResponse
 */
export interface HeadlessAppBuildJobResponse {
    /**
     * A list of items representing headless application build jobs.
     * @type {Array<HeadlessAppBuildJob>}
     * @memberof HeadlessAppBuildJobResponse
     */
    jobs?: Array<HeadlessAppBuildJob> | null;
    /**
     * A token used for paginating through build jobs on subsequent requests.
     * @type {string}
     * @memberof HeadlessAppBuildJobResponse
     */
    nextToken?: string | null;
}
/**
 * The list of steps taken during the build job with links to logs.
 * @export
 * @interface HeadlessAppBuildLog
 */
export interface HeadlessAppBuildLog {
    /**
     * 
     * @type {string}
     * @memberof HeadlessAppBuildLog
     */
    jobId?: string | null;
    /**
     * 
     * @type {Array<HeadlessAppBuildStep>}
     * @memberof HeadlessAppBuildLog
     */
    steps?: Array<HeadlessAppBuildStep> | null;
}
/**
 * A job that represents the build of a Kibo hosted headless application.
 * @export
 * @interface HeadlessAppBuildStep
 */
export interface HeadlessAppBuildStep {
    /**
     * The end time for the build job step.
     * @type {string}
     * @memberof HeadlessAppBuildStep
     */
    endTime?: string;
    /**
     * The url to access logs generated during the build step.
     * @type {string}
     * @memberof HeadlessAppBuildStep
     */
    logUrl?: string | null;
    /**
     * The start time for the build job step.
     * @type {string}
     * @memberof HeadlessAppBuildStep
     */
    startTime?: string;
    /**
     * The status result of the step during the build job
     * @type {string}
     * @memberof HeadlessAppBuildStep
     */
    status?: string | null;
    /**
     * The name of the build step producing logs during the build Job.
     * @type {string}
     * @memberof HeadlessAppBuildStep
     */
    stepName?: string | null;
}
/**
 * Response object representing a s3 object containing headless storefront runtime logs.
 * @export
 * @interface HeadlessAppRuntimeLog
 */
export interface HeadlessAppRuntimeLog {
    /**
     * The key for the s3 log object.
     * @type {string}
     * @memberof HeadlessAppRuntimeLog
     */
    key?: string | null;
    /**
     * The last modified datetime
     * @type {string}
     * @memberof HeadlessAppRuntimeLog
     */
    lastModified?: string;
    /**
     * The presigned URL to download the log collection, valid for 4 hours.
     * @type {string}
     * @memberof HeadlessAppRuntimeLog
     */
    logUrl?: string | null;
    /**
     * The size of the log collection
     * @type {number}
     * @memberof HeadlessAppRuntimeLog
     */
    size?: number;
}
/**
 * Response object for looking up headless storefront runtime logs.
 * @export
 * @interface HeadlessAppRuntimeLogResponse
 */
export interface HeadlessAppRuntimeLogResponse {
    /**
     * Flag to indicate if all results were returned. If IsTruncated is true, use NextToken to retrieve additional results.
     * @type {boolean}
     * @memberof HeadlessAppRuntimeLogResponse
     */
    isTruncated?: boolean;
    /**
     * A list of items representing headless application build jobs.
     * @type {Array<HeadlessAppRuntimeLog>}
     * @memberof HeadlessAppRuntimeLogResponse
     */
    logs?: Array<HeadlessAppRuntimeLog> | null;
    /**
     * The max result provided in runtime log lookup
     * @type {number}
     * @memberof HeadlessAppRuntimeLogResponse
     */
    maxResults?: number;
    /**
     * A token used for paginating through runtime logs on subsequent requests.
     * @type {string}
     * @memberof HeadlessAppRuntimeLogResponse
     */
    nextToken?: string | null;
    /**
     * The prefix provided in runtime log lookup
     * @type {string}
     * @memberof HeadlessAppRuntimeLogResponse
     */
    prefix?: string | null;
}
/**
 * 
 * @export
 * @interface HttpConnectionResponseContent
 */
export interface HttpConnectionResponseContent {
    /**
     * 
     * @type {Array<StringStringIEnumerableKeyValuePair>}
     * @memberof HttpConnectionResponseContent
     */
    readonly headers?: Array<StringStringIEnumerableKeyValuePair> | null;
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
 */
export const HttpVersionPolicy = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2
} as const;
export type HttpVersionPolicy = typeof HttpVersionPolicy[keyof typeof HttpVersionPolicy];

/**
 * 
 * @export
 * @interface OAuthAccessTokenResponse
 */
export interface OAuthAccessTokenResponse {
    /**
     * 
     * @type {string}
     * @memberof OAuthAccessTokenResponse
     */
    accessToken?: string | null;
    /**
     * 
     * @type {number}
     * @memberof OAuthAccessTokenResponse
     */
    expiresIn?: number;
    /**
     * 
     * @type {string}
     * @memberof OAuthAccessTokenResponse
     */
    refreshToken?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OAuthAccessTokenResponse
     */
    tokenType?: string | null;
}
/**
 * 
 * @export
 * @interface OauthAuthRequest
 */
export interface OauthAuthRequest {
    /**
     * 
     * @type {string}
     * @memberof OauthAuthRequest
     */
    clientId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OauthAuthRequest
     */
    clientSecret?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OauthAuthRequest
     */
    grantType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OauthAuthRequest
     */
    refreshToken?: string | null;
}
/**
 * 
 * @export
 * @interface OauthAuthRequestInternal
 */
export interface OauthAuthRequestInternal {
    /**
     * 
     * @type {string}
     * @memberof OauthAuthRequestInternal
     */
    clientId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OauthAuthRequestInternal
     */
    clientSecret?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OauthAuthRequestInternal
     */
    grantType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OauthAuthRequestInternal
     */
    refreshToken?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OauthAuthRequestInternal
     */
    applicationName?: string | null;
}
/**
 * 
 * @export
 * @interface OauthAuthRequestInternalAllOf
 */
export interface OauthAuthRequestInternalAllOf {
    /**
     * 
     * @type {string}
     * @memberof OauthAuthRequestInternalAllOf
     */
    applicationName?: string | null;
}
/**
 * 
 * @export
 * @interface PackageCollection
 */
export interface PackageCollection {
    /**
     * 
     * @type {Array<AppDevPackage>}
     * @memberof PackageCollection
     */
    items?: Array<AppDevPackage> | null;
    /**
     * 
     * @type {number}
     * @memberof PackageCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof PackageCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof PackageCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof PackageCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface PackageNamesCollection
 */
export interface PackageNamesCollection {
    /**
     * 
     * @type {Array<string>}
     * @memberof PackageNamesCollection
     */
    items?: Array<string> | null;
    /**
     * 
     * @type {number}
     * @memberof PackageNamesCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface PackageRequest
 */
export interface PackageRequest {
    /**
     * 
     * @type {string}
     * @memberof PackageRequest
     */
    appKey?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PackageRequest
     */
    parentThemeAppKey?: string | null;
}
/**
 * 
 * @export
 * @interface ReadOnlyMemoryContent
 */
export interface ReadOnlyMemoryContent {
    /**
     * 
     * @type {Array<StringStringIEnumerableKeyValuePair>}
     * @memberof ReadOnlyMemoryContent
     */
    readonly headers?: Array<StringStringIEnumerableKeyValuePair> | null;
}
/**
 * 
 * @export
 * @interface RenameInfo
 */
export interface RenameInfo {
    /**
     * 
     * @type {string}
     * @memberof RenameInfo
     */
    newFullPath?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RenameInfo
     */
    oldFullPath?: string | null;
}
/**
 * 
 * @export
 * @interface StreamContent
 */
export interface StreamContent {
    /**
     * 
     * @type {Array<StringStringIEnumerableKeyValuePair>}
     * @memberof StreamContent
     */
    readonly headers?: Array<StringStringIEnumerableKeyValuePair> | null;
}
/**
 * 
 * @export
 * @interface StringContent
 */
export interface StringContent {
    /**
     * 
     * @type {Array<StringStringIEnumerableKeyValuePair>}
     * @memberof StringContent
     */
    readonly headers?: Array<StringStringIEnumerableKeyValuePair> | null;
}
/**
 * 
 * @export
 * @interface StringStringIEnumerableKeyValuePair
 */
export interface StringStringIEnumerableKeyValuePair {
    /**
     * 
     * @type {string}
     * @memberof StringStringIEnumerableKeyValuePair
     */
    key?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof StringStringIEnumerableKeyValuePair
     */
    value?: Array<string> | null;
}
