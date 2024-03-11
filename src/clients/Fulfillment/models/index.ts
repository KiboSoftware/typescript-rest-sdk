/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface BackorderItem
 */
export interface BackorderItem {
    /**
     * 
     * @type {string}
     * @memberof BackorderItem
     */
    backorderReleaseDate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BackorderItem
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BackorderItem
     */
    lineId?: number;
    /**
     * 
     * @type {number}
     * @memberof BackorderItem
     */
    quantity?: number;
}
/**
 * 
 * @export
 * @interface BackorderItemUpdate
 */
export interface BackorderItemUpdate {
    /**
     * 
     * @type {string}
     * @memberof BackorderItemUpdate
     */
    backorderReleaseDate?: string;
    /**
     * 
     * @type {number}
     * @memberof BackorderItemUpdate
     */
    lineId?: number;
}
/**
 * 
 * @export
 * @interface BackorderItemsRequest
 */
export interface BackorderItemsRequest {
    /**
     * 
     * @type {boolean}
     * @memberof BackorderItemsRequest
     */
    isUserAction?: boolean;
    /**
     * 
     * @type {Array<BackorderItem>}
     * @memberof BackorderItemsRequest
     */
    items?: Array<BackorderItem>;
}
/**
 * 
 * @export
 * @interface BackorderItemsUpdateRequest
 */
export interface BackorderItemsUpdateRequest {
    /**
     * 
     * @type {Array<BackorderItemUpdate>}
     * @memberof BackorderItemsUpdateRequest
     */
    items?: Array<BackorderItemUpdate>;
}
/**
 * 
 * @export
 * @interface BackorderShipmentRequest
 */
export interface BackorderShipmentRequest {
    /**
     * 
     * @type {string}
     * @memberof BackorderShipmentRequest
     */
    backorderReleaseDate?: string;
}
/**
 * 
 * @export
 * @interface BinShipmentProductQuantity
 */
export interface BinShipmentProductQuantity {
    /**
     * 
     * @type {number}
     * @memberof BinShipmentProductQuantity
     */
    actualQuantity?: number;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof BinShipmentProductQuantity
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof BinShipmentProductQuantity
     */
    binName?: string;
    /**
     * 
     * @type {string}
     * @memberof BinShipmentProductQuantity
     */
    productCode?: string;
    /**
     * 
     * @type {number}
     * @memberof BinShipmentProductQuantity
     */
    shipmentNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof BinShipmentProductQuantity
     */
    variationProductCode?: string;
}
/**
 * 
 * @export
 * @interface BpmVariable
 */
export interface BpmVariable {
    /**
     * 
     * @type {string}
     * @memberof BpmVariable
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof BpmVariable
     */
    oldValue?: string;
    /**
     * 
     * @type {string}
     * @memberof BpmVariable
     */
    updateDate?: string;
    /**
     * 
     * @type {string}
     * @memberof BpmVariable
     */
    value?: string;
}
/**
 * 
 * @export
 * @interface CancelItem
 */
export interface CancelItem {
    /**
     * 
     * @type {FulfillmentAPIProductionProfileCanceledReason}
     * @memberof CancelItem
     */
    canceledReason?: FulfillmentAPIProductionProfileCanceledReason;
    /**
     * 
     * @type {number}
     * @memberof CancelItem
     */
    lineId?: number;
    /**
     * 
     * @type {number}
     * @memberof CancelItem
     */
    quantity?: number;
}
/**
 * 
 * @export
 * @interface CancelItemsRequest
 */
export interface CancelItemsRequest {
    /**
     * 
     * @type {boolean}
     * @memberof CancelItemsRequest
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CancelItemsRequest
     */
    isUserAction?: boolean;
    /**
     * 
     * @type {Array<CancelItem>}
     * @memberof CancelItemsRequest
     */
    items?: Array<CancelItem>;
    /**
     * 
     * @type {boolean}
     * @memberof CancelItemsRequest
     */
    sendNotifications?: boolean;
}
/**
 * 
 * @export
 * @interface CancelShipment
 */
export interface CancelShipment {
    /**
     * 
     * @type {boolean}
     * @memberof CancelShipment
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {FulfillmentAPIProductionProfileCanceledReason}
     * @memberof CancelShipment
     */
    canceledReason?: FulfillmentAPIProductionProfileCanceledReason;
    /**
     * 
     * @type {boolean}
     * @memberof CancelShipment
     */
    sendNotifications?: boolean;
}
/**
 * 
 * @export
 * @interface ClosePickWave
 */
export interface ClosePickWave {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof ClosePickWave
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {boolean}
     * @memberof ClosePickWave
     */
    createRecovery?: boolean;
    /**
     * 
     * @type {Array<BinShipmentProductQuantity>}
     * @memberof ClosePickWave
     */
    quantities?: Array<BinShipmentProductQuantity>;
}
/**
 * 
 * @export
 * @interface CollectionModelOfEntityModelOfCustomerSurvey
 */
export interface CollectionModelOfEntityModelOfCustomerSurvey {
    /**
     * 
     * @type {{ [key: string]: Array<EntityModelOfCustomerSurvey>; }}
     * @memberof CollectionModelOfEntityModelOfCustomerSurvey
     */
    embedded?: { [key: string]: Array<EntityModelOfCustomerSurvey>; };
    /**
     * 
     * @type {{ [key: string]: FulfillmentAPIProductionProfileLink; }}
     * @memberof CollectionModelOfEntityModelOfCustomerSurvey
     */
    links?: { [key: string]: FulfillmentAPIProductionProfileLink; };
}
/**
 * 
 * @export
 * @interface CollectionModelOfEntityModelOfShipment
 */
export interface CollectionModelOfEntityModelOfShipment {
    /**
     * 
     * @type {{ [key: string]: Array<EntityModelOfShipment>; }}
     * @memberof CollectionModelOfEntityModelOfShipment
     */
    embedded?: { [key: string]: Array<EntityModelOfShipment>; };
    /**
     * 
     * @type {{ [key: string]: FulfillmentAPIProductionProfileLink; }}
     * @memberof CollectionModelOfEntityModelOfShipment
     */
    links?: { [key: string]: FulfillmentAPIProductionProfileLink; };
}
/**
 * 
 * @export
 * @interface CollectionModelOfLocationSummary
 */
export interface CollectionModelOfLocationSummary {
    /**
     * 
     * @type {{ [key: string]: Array<LocationSummary>; }}
     * @memberof CollectionModelOfLocationSummary
     */
    embedded?: { [key: string]: Array<LocationSummary>; };
    /**
     * 
     * @type {{ [key: string]: FulfillmentAPIProductionProfileLink; }}
     * @memberof CollectionModelOfLocationSummary
     */
    links?: { [key: string]: FulfillmentAPIProductionProfileLink; };
}
/**
 * 
 * @export
 * @interface CollectionModelOfManifest
 */
export interface CollectionModelOfManifest {
    /**
     * 
     * @type {{ [key: string]: Array<Manifest>; }}
     * @memberof CollectionModelOfManifest
     */
    embedded?: { [key: string]: Array<Manifest>; };
    /**
     * 
     * @type {{ [key: string]: FulfillmentAPIProductionProfileLink; }}
     * @memberof CollectionModelOfManifest
     */
    links?: { [key: string]: FulfillmentAPIProductionProfileLink; };
}
/**
 * 
 * @export
 * @interface CollectionModelOfPickWave
 */
export interface CollectionModelOfPickWave {
    /**
     * 
     * @type {{ [key: string]: Array<PickWave>; }}
     * @memberof CollectionModelOfPickWave
     */
    embedded?: { [key: string]: Array<PickWave>; };
    /**
     * 
     * @type {{ [key: string]: FulfillmentAPIProductionProfileLink; }}
     * @memberof CollectionModelOfPickWave
     */
    links?: { [key: string]: FulfillmentAPIProductionProfileLink; };
}
/**
 * 
 * @export
 * @interface CollectionModelOfShipment
 */
export interface CollectionModelOfShipment {
    /**
     * 
     * @type {{ [key: string]: Array<FulfillmentAPIProductionProfileShipment>; }}
     * @memberof CollectionModelOfShipment
     */
    embedded?: { [key: string]: Array<FulfillmentAPIProductionProfileShipment>; };
    /**
     * 
     * @type {{ [key: string]: FulfillmentAPIProductionProfileLink; }}
     * @memberof CollectionModelOfShipment
     */
    links?: { [key: string]: FulfillmentAPIProductionProfileLink; };
}
/**
 * 
 * @export
 * @interface CollectionModelOfSubstitutableItemResponse
 */
export interface CollectionModelOfSubstitutableItemResponse {
    /**
     * 
     * @type {{ [key: string]: Array<SubstitutableItemResponse>; }}
     * @memberof CollectionModelOfSubstitutableItemResponse
     */
    embedded?: { [key: string]: Array<SubstitutableItemResponse>; };
    /**
     * 
     * @type {{ [key: string]: FulfillmentAPIProductionProfileLink; }}
     * @memberof CollectionModelOfSubstitutableItemResponse
     */
    links?: { [key: string]: FulfillmentAPIProductionProfileLink; };
}
/**
 * 
 * @export
 * @interface CollectionModelOfTask
 */
export interface CollectionModelOfTask {
    /**
     * 
     * @type {{ [key: string]: Array<Task>; }}
     * @memberof CollectionModelOfTask
     */
    embedded?: { [key: string]: Array<Task>; };
    /**
     * 
     * @type {{ [key: string]: FulfillmentAPIProductionProfileLink; }}
     * @memberof CollectionModelOfTask
     */
    links?: { [key: string]: FulfillmentAPIProductionProfileLink; };
}
/**
 * 
 * @export
 * @interface ContentGroup
 */
export interface ContentGroup {
    /**
     * 
     * @type {FulfillmentAPIProductionProfileAuditInfo}
     * @memberof ContentGroup
     */
    auditInfo?: FulfillmentAPIProductionProfileAuditInfo;
    /**
     * 
     * @type {Array<PickWaveContent>}
     * @memberof ContentGroup
     */
    contents?: Array<PickWaveContent>;
    /**
     * 
     * @type {string}
     * @memberof ContentGroup
     */
    imageUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentGroup
     */
    locatorName?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentGroup
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentGroup
     */
    productCode?: string;
    /**
     * 
     * @type {number}
     * @memberof ContentGroup
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof ContentGroup
     */
    upc?: string;
}
/**
 * 
 * @export
 * @interface CreatePickWave
 */
export interface CreatePickWave {
    /**
     * 
     * @type {boolean}
     * @memberof CreatePickWave
     */
    allowEmptyWave?: boolean;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof CreatePickWave
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {Array<PickWaveBinRange>}
     * @memberof CreatePickWave
     */
    binRanges?: Array<PickWaveBinRange>;
    /**
     * 
     * @type {boolean}
     * @memberof CreatePickWave
     */
    fulfillableShipmentsOnly?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CreatePickWave
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreatePickWave
     */
    includeZeroInventory?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreatePickWave
     */
    lockWave?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CreatePickWave
     */
    maxShipments?: number;
    /**
     * 
     * @type {string}
     * @memberof CreatePickWave
     */
    pickWaveType?: CreatePickWavePickWaveTypeEnum;
    /**
     * 
     * @type {Array<PickWaveProductMatch>}
     * @memberof CreatePickWave
     */
    products?: Array<PickWaveProductMatch>;
    /**
     * 
     * @type {string}
     * @memberof CreatePickWave
     */
    shipmentDateEnd?: string;
    /**
     * 
     * @type {string}
     * @memberof CreatePickWave
     */
    shipmentDateStart?: string;
    /**
     * 
     * @type {string}
     * @memberof CreatePickWave
     */
    shipmentType?: CreatePickWaveShipmentTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CreatePickWave
     */
    shippingOption?: CreatePickWaveShippingOptionEnum;
}


/**
 * @export
 */
export const CreatePickWavePickWaveTypeEnum = {
    Normal: 'NORMAL',
    Single: 'SINGLE',
    Multiple: 'MULTIPLE'
} as const;
export type CreatePickWavePickWaveTypeEnum = typeof CreatePickWavePickWaveTypeEnum[keyof typeof CreatePickWavePickWaveTypeEnum];

/**
 * @export
 */
export const CreatePickWaveShipmentTypeEnum = {
    Sth: 'STH',
    Bopis: 'BOPIS'
} as const;
export type CreatePickWaveShipmentTypeEnum = typeof CreatePickWaveShipmentTypeEnum[keyof typeof CreatePickWaveShipmentTypeEnum];

/**
 * @export
 */
export const CreatePickWaveShippingOptionEnum = {
    StandardOnly: 'STANDARD_ONLY',
    ExpressOnly: 'EXPRESS_ONLY',
    All: 'ALL'
} as const;
export type CreatePickWaveShippingOptionEnum = typeof CreatePickWaveShippingOptionEnum[keyof typeof CreatePickWaveShippingOptionEnum];

/**
 * 
 * @export
 * @interface CustomerSurvey
 */
export interface CustomerSurvey {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof CustomerSurvey
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIProductionProfileAuditInfo}
     * @memberof CustomerSurvey
     */
    auditInfo?: FulfillmentAPIProductionProfileAuditInfo;
    /**
     * 
     * @type {Array<CustomerSurveyEntry>}
     * @memberof CustomerSurvey
     */
    entries?: Array<CustomerSurveyEntry>;
    /**
     * 
     * @type {string}
     * @memberof CustomerSurvey
     */
    id?: string;
    /**
     * 
     * @type {number}
     * @memberof CustomerSurvey
     */
    shipmentNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerSurvey
     */
    siteId?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerSurvey
     */
    tenantId?: number;
}
/**
 * 
 * @export
 * @interface CustomerSurveyEntry
 */
export interface CustomerSurveyEntry {
    /**
     * 
     * @type {object}
     * @memberof CustomerSurveyEntry
     */
    answer?: object;
    /**
     * 
     * @type {string}
     * @memberof CustomerSurveyEntry
     */
    question?: string;
}
/**
 * 
 * @export
 * @interface DashboardStep
 */
export interface DashboardStep {
    /**
     * 
     * @type {Links}
     * @memberof DashboardStep
     */
    links?: Links;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof DashboardStep
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof DashboardStep
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof DashboardStep
     */
    total?: number;
}
/**
 * 
 * @export
 * @interface EntityModelOfContact
 */
export interface EntityModelOfContact {
    /**
     * 
     * @type {Links}
     * @memberof EntityModelOfContact
     */
    links?: Links;
    /**
     * 
     * @type {FulfillmentAPIProductionProfileAddress}
     * @memberof EntityModelOfContact
     */
    address?: FulfillmentAPIProductionProfileAddress;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof EntityModelOfContact
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfContact
     */
    companyOrOrganization?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfContact
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfContact
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfContact
     */
    fullName?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfContact
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfContact
     */
    lastNameOrSurname?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfContact
     */
    middleNameOrInitial?: string;
    /**
     * 
     * @type {FulfillmentAPIProductionProfilePhone}
     * @memberof EntityModelOfContact
     */
    phoneNumbers?: FulfillmentAPIProductionProfilePhone;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfContact
     */
    shortFullName?: string;
}
/**
 * 
 * @export
 * @interface EntityModelOfCustomerSurvey
 */
export interface EntityModelOfCustomerSurvey {
    /**
     * 
     * @type {Links}
     * @memberof EntityModelOfCustomerSurvey
     */
    links?: Links;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof EntityModelOfCustomerSurvey
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIProductionProfileAuditInfo}
     * @memberof EntityModelOfCustomerSurvey
     */
    auditInfo?: FulfillmentAPIProductionProfileAuditInfo;
    /**
     * 
     * @type {Array<CustomerSurveyEntry>}
     * @memberof EntityModelOfCustomerSurvey
     */
    entries?: Array<CustomerSurveyEntry>;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfCustomerSurvey
     */
    id?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfCustomerSurvey
     */
    shipmentNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfCustomerSurvey
     */
    siteId?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfCustomerSurvey
     */
    tenantId?: number;
}
/**
 * 
 * @export
 * @interface EntityModelOfDashboardResponse
 */
export interface EntityModelOfDashboardResponse {
    /**
     * 
     * @type {Links}
     * @memberof EntityModelOfDashboardResponse
     */
    links?: Links;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfDashboardResponse
     */
    shipmentType?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfDashboardResponse
     */
    shipmentTypeDisplayName?: string;
    /**
     * 
     * @type {Array<DashboardStep>}
     * @memberof EntityModelOfDashboardResponse
     */
    steps?: Array<DashboardStep>;
}
/**
 * 
 * @export
 * @interface EntityModelOfManifest
 */
export interface EntityModelOfManifest {
    /**
     * 
     * @type {Links}
     * @memberof EntityModelOfManifest
     */
    links?: Links;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof EntityModelOfManifest
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIProductionProfileAuditInfo}
     * @memberof EntityModelOfManifest
     */
    auditInfo?: FulfillmentAPIProductionProfileAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfManifest
     */
    carrierId?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfManifest
     */
    internalId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EntityModelOfManifest
     */
    isSuccessfulPreviously?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfManifest
     */
    locationCode?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfManifest
     */
    manifestId?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfManifest
     */
    manifestUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfManifest
     */
    numberOfPackages?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfManifest
     */
    numberOfShipments?: number;
    /**
     * 
     * @type {Array<ManifestShipment>}
     * @memberof EntityModelOfManifest
     */
    shipments?: Array<ManifestShipment>;
    /**
     * 
     * @type {Array<ManifestShipment>}
     * @memberof EntityModelOfManifest
     */
    shipmentsSuccessfulPreviously?: Array<ManifestShipment>;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfManifest
     */
    tenantId?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfManifest
     */
    userDisplayName?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfManifest
     */
    userId?: string;
}
/**
 * 
 * @export
 * @interface EntityModelOfPickWave
 */
export interface EntityModelOfPickWave {
    /**
     * 
     * @type {Links}
     * @memberof EntityModelOfPickWave
     */
    links?: Links;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof EntityModelOfPickWave
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIProductionProfileAuditInfo}
     * @memberof EntityModelOfPickWave
     */
    auditInfo?: FulfillmentAPIProductionProfileAuditInfo;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileChangeMessage>}
     * @memberof EntityModelOfPickWave
     */
    changeMessages?: Array<FulfillmentAPIProductionProfileChangeMessage>;
    /**
     * 
     * @type {Array<PickWaveContent>}
     * @memberof EntityModelOfPickWave
     */
    contents?: Array<PickWaveContent>;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfPickWave
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfPickWave
     */
    maxShipments?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfPickWave
     */
    parentPickWaveNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfPickWave
     */
    pickType?: EntityModelOfPickWavePickTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfPickWave
     */
    pickWaveId?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfPickWave
     */
    pickWaveNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfPickWave
     */
    pickWaveStatus?: EntityModelOfPickWavePickWaveStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfPickWave
     */
    recoveryPickWaveNumber?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof EntityModelOfPickWave
     */
    shipmentNumbers?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfPickWave
     */
    shipmentType?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfPickWave
     */
    tenantId?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfPickWave
     */
    userDisplayName?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfPickWave
     */
    userId?: string;
}


/**
 * @export
 */
export const EntityModelOfPickWavePickTypeEnum = {
    Normal: 'NORMAL',
    Single: 'SINGLE',
    Multiple: 'MULTIPLE'
} as const;
export type EntityModelOfPickWavePickTypeEnum = typeof EntityModelOfPickWavePickTypeEnum[keyof typeof EntityModelOfPickWavePickTypeEnum];

/**
 * @export
 */
export const EntityModelOfPickWavePickWaveStatusEnum = {
    Error: 'ERROR',
    Pending: 'PENDING',
    InProgress: 'IN_PROGRESS',
    Closed: 'CLOSED',
    PendingRecovery: 'PENDING_RECOVERY'
} as const;
export type EntityModelOfPickWavePickWaveStatusEnum = typeof EntityModelOfPickWavePickWaveStatusEnum[keyof typeof EntityModelOfPickWavePickWaveStatusEnum];

/**
 * 
 * @export
 * @interface EntityModelOfPickWaveDetail
 */
export interface EntityModelOfPickWaveDetail {
    /**
     * 
     * @type {Links}
     * @memberof EntityModelOfPickWaveDetail
     */
    links?: Links;
    /**
     * 
     * @type {FulfillmentAPIProductionProfileAuditInfo}
     * @memberof EntityModelOfPickWaveDetail
     */
    auditInfo?: FulfillmentAPIProductionProfileAuditInfo;
    /**
     * 
     * @type {Array<ContentGroup>}
     * @memberof EntityModelOfPickWaveDetail
     */
    contentGroups?: Array<ContentGroup>;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfPickWaveDetail
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfPickWaveDetail
     */
    maxShipments?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfPickWaveDetail
     */
    pickType?: EntityModelOfPickWaveDetailPickTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfPickWaveDetail
     */
    pickWaveId?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfPickWaveDetail
     */
    pickWaveNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfPickWaveDetail
     */
    pickWaveStatus?: EntityModelOfPickWaveDetailPickWaveStatusEnum;
    /**
     * 
     * @type {Array<number>}
     * @memberof EntityModelOfPickWaveDetail
     */
    shipmentNumbers?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfPickWaveDetail
     */
    shipmentType?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfPickWaveDetail
     */
    tenantId?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfPickWaveDetail
     */
    userDisplayName?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfPickWaveDetail
     */
    userId?: string;
}


/**
 * @export
 */
export const EntityModelOfPickWaveDetailPickTypeEnum = {
    Normal: 'NORMAL',
    Single: 'SINGLE',
    Multiple: 'MULTIPLE'
} as const;
export type EntityModelOfPickWaveDetailPickTypeEnum = typeof EntityModelOfPickWaveDetailPickTypeEnum[keyof typeof EntityModelOfPickWaveDetailPickTypeEnum];

/**
 * @export
 */
export const EntityModelOfPickWaveDetailPickWaveStatusEnum = {
    Error: 'ERROR',
    Pending: 'PENDING',
    InProgress: 'IN_PROGRESS',
    Closed: 'CLOSED',
    PendingRecovery: 'PENDING_RECOVERY'
} as const;
export type EntityModelOfPickWaveDetailPickWaveStatusEnum = typeof EntityModelOfPickWaveDetailPickWaveStatusEnum[keyof typeof EntityModelOfPickWaveDetailPickWaveStatusEnum];

/**
 * 
 * @export
 * @interface EntityModelOfRenderedContent
 */
export interface EntityModelOfRenderedContent {
    /**
     * 
     * @type {Links}
     * @memberof EntityModelOfRenderedContent
     */
    links?: Links;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfRenderedContent
     */
    content?: string;
}
/**
 * 
 * @export
 * @interface EntityModelOfShipment
 */
export interface EntityModelOfShipment {
    /**
     * 
     * @type {Links}
     * @memberof EntityModelOfShipment
     */
    links?: Links;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    acceptedDate?: string;
    /**
     * 
     * @type {FulfillmentAPIProductionProfileContact}
     * @memberof EntityModelOfShipment
     */
    alternateContact?: FulfillmentAPIProductionProfileContact;
    /**
     * 
     * @type {FulfillmentAPIProductionProfileAppeasementReason}
     * @memberof EntityModelOfShipment
     */
    appeasementReason?: FulfillmentAPIProductionProfileAppeasementReason;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    assignedLocationCode?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof EntityModelOfShipment
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIProductionProfileAuditInfo}
     * @memberof EntityModelOfShipment
     */
    auditInfo?: FulfillmentAPIProductionProfileAuditInfo;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileCanceledItem>}
     * @memberof EntityModelOfShipment
     */
    canceledItems?: Array<FulfillmentAPIProductionProfileCanceledItem>;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    cartId?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileChangeMessage>}
     * @memberof EntityModelOfShipment
     */
    changeMessages?: Array<FulfillmentAPIProductionProfileChangeMessage>;
    /**
     * 
     * @type {Array<number>}
     * @memberof EntityModelOfShipment
     */
    childShipmentNumbers?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    currencyCode?: string;
    /**
     * 
     * @type {FulfillmentAPIProductionProfileCustomer}
     * @memberof EntityModelOfShipment
     */
    customer?: FulfillmentAPIProductionProfileCustomer;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    customerAccountId?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    customerAddressId?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    customerTaxId?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof EntityModelOfShipment
     */
    data?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIProductionProfileDestination}
     * @memberof EntityModelOfShipment
     */
    destination?: FulfillmentAPIProductionProfileDestination;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    dutyAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    dutyTotal?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    externalOrderId?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    fulfillmentDate?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    fulfillmentStatus?: EntityModelOfShipmentFulfillmentStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    futureDate?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    handlingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    handlingSubtotal?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    handlingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    handlingTaxTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    handlingTotal?: number;
    /**
     * 
     * @type {boolean}
     * @memberof EntityModelOfShipment
     */
    isAutoAssigned?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EntityModelOfShipment
     */
    isExpress?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EntityModelOfShipment
     */
    isFlatRateShipping?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EntityModelOfShipment
     */
    isHistoricalImport?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EntityModelOfShipment
     */
    isOptInForSms?: boolean;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileItem>}
     * @memberof EntityModelOfShipment
     */
    items?: Array<FulfillmentAPIProductionProfileItem>;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    lineItemSubtotal?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    lineItemTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    lineItemTaxTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    lineItemTotal?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    masterTrackingNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    orderId?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    orderNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    orderSubmitDate?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    orderType?: EntityModelOfShipmentOrderTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    originalShipmentNumber?: number;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfilePackage>}
     * @memberof EntityModelOfShipment
     */
    packages?: Array<FulfillmentAPIProductionProfilePackage>;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    parentCheckoutNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    parentShipmentNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    pickStatus?: EntityModelOfShipmentPickStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    pickType?: EntityModelOfShipmentPickTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    pickWaveNumber?: number;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof EntityModelOfShipment
     */
    pickupInfo?: { [key: string]: object; };
    /**
     * 
     * @type {boolean}
     * @memberof EntityModelOfShipment
     */
    readyForPickup?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    readyForPickupDate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EntityModelOfShipment
     */
    readyToCapture?: boolean;
    /**
     * 
     * @type {Array<ReassignedItem>}
     * @memberof EntityModelOfShipment
     */
    reassignedItems?: Array<ReassignedItem>;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    receivedDate?: string;
    /**
     * 
     * @type {Array<RejectedItem>}
     * @memberof EntityModelOfShipment
     */
    rejectedItems?: Array<RejectedItem>;
    /**
     * 
     * @type {boolean}
     * @memberof EntityModelOfShipment
     */
    sentCustomerAtStoreNotification?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EntityModelOfShipment
     */
    sentCustomerInTransitNotification?: boolean;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    shipmentAdjustment?: number;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileShipmentNote>}
     * @memberof EntityModelOfShipment
     */
    shipmentNotes?: Array<FulfillmentAPIProductionProfileShipmentNote>;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    shipmentNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    shipmentStatus?: EntityModelOfShipmentShipmentStatusEnum;
    /**
     * 
     * @type {FulfillmentAPIProductionProfileShipmentStatusReason}
     * @memberof EntityModelOfShipment
     */
    shipmentStatusReason?: FulfillmentAPIProductionProfileShipmentStatusReason;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    shipmentType?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    shippingAdjustment?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    shippingMethodCode?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    shippingMethodName?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    shippingSubtotal?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    shippingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    shippingTaxTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    shippingTotal?: number;
    /**
     * 
     * @type {FulfillmentAPIProductionProfileShopperNotes}
     * @memberof EntityModelOfShipment
     */
    shopperNotes?: FulfillmentAPIProductionProfileShopperNotes;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    siteId?: number;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileSubstitutedItem>}
     * @memberof EntityModelOfShipment
     */
    substitutedItems?: Array<FulfillmentAPIProductionProfileSubstitutedItem>;
    /**
     * 
     * @type {object}
     * @memberof EntityModelOfShipment
     */
    taxData?: object;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    tenantId?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityModelOfShipment
     */
    total?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof EntityModelOfShipment
     */
    transferShipmentNumbers?: Array<number>;
    /**
     * 
     * @type {Array<TransferredItem>}
     * @memberof EntityModelOfShipment
     */
    transferredItems?: Array<TransferredItem>;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    transitTime?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    workflowProcessContainerId?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    workflowProcessId?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfShipment
     */
    workflowProcessVersion?: string;
    /**
     * 
     * @type {FulfillmentAPIProductionProfileWorkflowState}
     * @memberof EntityModelOfShipment
     */
    workflowState?: FulfillmentAPIProductionProfileWorkflowState;
}


/**
 * @export
 */
export const EntityModelOfShipmentFulfillmentStatusEnum = {
    NotFulfilled: 'NotFulfilled',
    Fulfilled: 'Fulfilled'
} as const;
export type EntityModelOfShipmentFulfillmentStatusEnum = typeof EntityModelOfShipmentFulfillmentStatusEnum[keyof typeof EntityModelOfShipmentFulfillmentStatusEnum];

/**
 * @export
 */
export const EntityModelOfShipmentOrderTypeEnum = {
    Offline: 'Offline',
    Online: 'Online'
} as const;
export type EntityModelOfShipmentOrderTypeEnum = typeof EntityModelOfShipmentOrderTypeEnum[keyof typeof EntityModelOfShipmentOrderTypeEnum];

/**
 * @export
 */
export const EntityModelOfShipmentPickStatusEnum = {
    Available: 'AVAILABLE',
    InWave: 'IN_WAVE',
    Picked: 'PICKED',
    Transfer: 'TRANSFER',
    Complete: 'COMPLETE'
} as const;
export type EntityModelOfShipmentPickStatusEnum = typeof EntityModelOfShipmentPickStatusEnum[keyof typeof EntityModelOfShipmentPickStatusEnum];

/**
 * @export
 */
export const EntityModelOfShipmentPickTypeEnum = {
    Normal: 'NORMAL',
    Single: 'SINGLE',
    Multiple: 'MULTIPLE'
} as const;
export type EntityModelOfShipmentPickTypeEnum = typeof EntityModelOfShipmentPickTypeEnum[keyof typeof EntityModelOfShipmentPickTypeEnum];

/**
 * @export
 */
export const EntityModelOfShipmentShipmentStatusEnum = {
    Ready: 'READY',
    Reassigned: 'REASSIGNED',
    Backorder: 'BACKORDER',
    Canceled: 'CANCELED',
    Fulfilled: 'FULFILLED',
    CustomerCare: 'CUSTOMER_CARE',
    Deleted: 'DELETED',
    Future: 'FUTURE'
} as const;
export type EntityModelOfShipmentShipmentStatusEnum = typeof EntityModelOfShipmentShipmentStatusEnum[keyof typeof EntityModelOfShipmentShipmentStatusEnum];

/**
 * 
 * @export
 * @interface EntityModelOfWorkflowProcess
 */
export interface EntityModelOfWorkflowProcess {
    /**
     * 
     * @type {Links}
     * @memberof EntityModelOfWorkflowProcess
     */
    links?: Links;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof EntityModelOfWorkflowProcess
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfWorkflowProcess
     */
    containerAlias?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfWorkflowProcess
     */
    containerId?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfWorkflowProcess
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfWorkflowProcess
     */
    name?: string;
    /**
     * 
     * @type {Array<TaskDefinition>}
     * @memberof EntityModelOfWorkflowProcess
     */
    tasks?: Array<TaskDefinition>;
    /**
     * 
     * @type {Array<WorkflowProcessVariable>}
     * @memberof EntityModelOfWorkflowProcess
     */
    variables?: Array<WorkflowProcessVariable>;
    /**
     * 
     * @type {string}
     * @memberof EntityModelOfWorkflowProcess
     */
    version?: string;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIProductionProfileAddress
 */
export interface FulfillmentAPIProductionProfileAddress {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileAddress
     */
    address1?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileAddress
     */
    address2?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileAddress
     */
    address3?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileAddress
     */
    address4?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileAddress
     */
    addressType?: FulfillmentAPIProductionProfileAddressAddressTypeEnum;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentAPIProductionProfileAddress
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileAddress
     */
    cityOrTown?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileAddress
     */
    countryCode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileAddress
     */
    isValidated?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileAddress
     */
    latitude?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileAddress
     */
    longitude?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileAddress
     */
    postalOrZipCode?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileAddress
     */
    stateOrProvince?: string;
}


/**
 * @export
 */
export const FulfillmentAPIProductionProfileAddressAddressTypeEnum = {
    Commercial: 'Commercial',
    Residential: 'Residential'
} as const;
export type FulfillmentAPIProductionProfileAddressAddressTypeEnum = typeof FulfillmentAPIProductionProfileAddressAddressTypeEnum[keyof typeof FulfillmentAPIProductionProfileAddressAddressTypeEnum];

/**
 * 
 * @export
 * @interface FulfillmentAPIProductionProfileAppeasementReason
 */
export interface FulfillmentAPIProductionProfileAppeasementReason {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileAppeasementReason
     */
    moreInfo?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileAppeasementReason
     */
    reasonCode?: string;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIProductionProfileAuditInfo
 */
export interface FulfillmentAPIProductionProfileAuditInfo {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileAuditInfo
     */
    createBy?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileAuditInfo
     */
    createDate?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileAuditInfo
     */
    updateBy?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileAuditInfo
     */
    updateDate?: string;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIProductionProfileCanceledItem
 */
export interface FulfillmentAPIProductionProfileCanceledItem {
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    actualPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    allocatedQuantity?: number;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    allowsBackOrder?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    allowsFutureAllocate?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    allowsSubstitution?: boolean;
    /**
     * 
     * @type {FulfillmentAPIProductionProfileAppeasementReason}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    appeasementReason?: FulfillmentAPIProductionProfileAppeasementReason;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIProductionProfileAuditInfo}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    auditInfo?: FulfillmentAPIProductionProfileAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    backorderReleaseDate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {FulfillmentAPIProductionProfileCanceledReason}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    canceledReason?: FulfillmentAPIProductionProfileCanceledReason;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    cartItemId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    childItemIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    creditCurrencyCode?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    creditValue?: number;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    data?: { [key: string]: object; };
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    duty?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    expectedDeliveryDate?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileFulfillmentField>}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    fulfillmentFields?: Array<FulfillmentAPIProductionProfileFulfillmentField>;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileGiftCard>}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    giftCards?: Array<FulfillmentAPIProductionProfileGiftCard>;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    giftMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    goodsType?: FulfillmentAPIProductionProfileCanceledItemGoodsTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    handling?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    handlingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    handlingTax?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    height?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    imageUrl?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileInventoryTag>}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    inventoryTags?: Array<FulfillmentAPIProductionProfileInventoryTag>;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    isAssemblyRequired?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    isGift?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    isPackagedStandAlone?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    isReservedInventory?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    isTaxable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    itemDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    itemTax?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    length?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    lineId?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    lineItemAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    lineItemCost?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    locatorName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    manageStock?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    optionAttributeFQN?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileProductOption>}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    options?: Array<FulfillmentAPIProductionProfileProductOption>;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    originalLineId?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    originalOrderItemId?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    originalQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    overridePrice?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    parentItemId?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    productCode?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    purchaseLocation?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    quantity?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    readyForPickupQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    shipping?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    shippingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    shippingTax?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    sku?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    substituteQuantity?: number;
    /**
     * 
     * @type {object}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    taxData?: object;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    taxableHandling?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    taxableLineItemCost?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    taxableShipping?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    transferQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    trueTransferQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    unitPrice?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    upc?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    variationProductCode?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    weight?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    weightUnit?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    weightedDutyAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    weightedHandlingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    weightedHandlingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    weightedLineItemTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    weightedShipmentAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    weightedShippingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    weightedShippingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileCanceledItem
     */
    width?: number;
}


/**
 * @export
 */
export const FulfillmentAPIProductionProfileCanceledItemGoodsTypeEnum = {
    Physical: 'Physical',
    Digital: 'Digital',
    DigitalCredit: 'DigitalCredit',
    DigitalGiftCard: 'DigitalGiftCard',
    Service: 'Service'
} as const;
export type FulfillmentAPIProductionProfileCanceledItemGoodsTypeEnum = typeof FulfillmentAPIProductionProfileCanceledItemGoodsTypeEnum[keyof typeof FulfillmentAPIProductionProfileCanceledItemGoodsTypeEnum];

/**
 * 
 * @export
 * @interface FulfillmentAPIProductionProfileCanceledReason
 */
export interface FulfillmentAPIProductionProfileCanceledReason {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileCanceledReason
     */
    moreInfo?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileCanceledReason
     */
    reasonCode?: string;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIProductionProfileChangeMessage
 */
export interface FulfillmentAPIProductionProfileChangeMessage {
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileChangeMessage
     */
    amount?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileChangeMessage
     */
    appId?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileChangeMessage
     */
    appKey?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileChangeMessage
     */
    appName?: string;
    /**
     * 
     * @type {FulfillmentAPIProductionProfileAppeasementReason}
     * @memberof FulfillmentAPIProductionProfileChangeMessage
     */
    appeasementReason?: FulfillmentAPIProductionProfileAppeasementReason;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentAPIProductionProfileChangeMessage
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileChangeMessage
     */
    changeMessageId?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileChangeMessage
     */
    correlationId?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileChangeMessage
     */
    createdDate?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileChangeMessage
     */
    identifier?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileChangeMessage
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileChangeMessage
     */
    metadata?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileChangeMessage
     */
    newValue?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileChangeMessage
     */
    oldValue?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileChangeMessage
     */
    subject?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileChangeMessage
     */
    subjectType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileChangeMessage
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileChangeMessage
     */
    userDisplayName?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileChangeMessage
     */
    userFirstName?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileChangeMessage
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileChangeMessage
     */
    userLastName?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileChangeMessage
     */
    verb?: string;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIProductionProfileContact
 */
export interface FulfillmentAPIProductionProfileContact {
    /**
     * 
     * @type {FulfillmentAPIProductionProfileAddress}
     * @memberof FulfillmentAPIProductionProfileContact
     */
    address?: FulfillmentAPIProductionProfileAddress;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentAPIProductionProfileContact
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileContact
     */
    companyOrOrganization?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileContact
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileContact
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileContact
     */
    fullName?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileContact
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileContact
     */
    lastNameOrSurname?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileContact
     */
    middleNameOrInitial?: string;
    /**
     * 
     * @type {FulfillmentAPIProductionProfilePhone}
     * @memberof FulfillmentAPIProductionProfileContact
     */
    phoneNumbers?: FulfillmentAPIProductionProfilePhone;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileContact
     */
    shortFullName?: string;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIProductionProfileCustomer
 */
export interface FulfillmentAPIProductionProfileCustomer {
    /**
     * 
     * @type {FulfillmentAPIProductionProfileContact}
     * @memberof FulfillmentAPIProductionProfileCustomer
     */
    customerContact?: FulfillmentAPIProductionProfileContact;
    /**
     * 
     * @type {object}
     * @memberof FulfillmentAPIProductionProfileCustomer
     */
    data?: object;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileCustomer
     */
    isDestinationCommercial?: boolean;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIProductionProfileDestination
 */
export interface FulfillmentAPIProductionProfileDestination {
    /**
     * 
     * @type {object}
     * @memberof FulfillmentAPIProductionProfileDestination
     */
    data?: object;
    /**
     * 
     * @type {FulfillmentAPIProductionProfileContact}
     * @memberof FulfillmentAPIProductionProfileDestination
     */
    destinationContact?: FulfillmentAPIProductionProfileContact;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileDestination
     */
    isDestinationCommercial?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileDestination
     */
    locationCode?: string;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIProductionProfileFulfillmentField
 */
export interface FulfillmentAPIProductionProfileFulfillmentField {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileFulfillmentField
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileFulfillmentField
     */
    required?: boolean;
    /**
     * 
     * @type {object}
     * @memberof FulfillmentAPIProductionProfileFulfillmentField
     */
    userEnteredValue?: object;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIProductionProfileGiftCard
 */
export interface FulfillmentAPIProductionProfileGiftCard {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileGiftCard
     */
    activationDate?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileGiftCard
     */
    cardNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileGiftCard
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileGiftCard
     */
    creditType?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileGiftCard
     */
    creditValue?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileGiftCard
     */
    currencyCode?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileGiftCard
     */
    currentBalance?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileGiftCard
     */
    customerId?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileGiftCard
     */
    expirationDate?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileGiftCard
     */
    initialBalance?: number;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIProductionProfileInventoryTag
 */
export interface FulfillmentAPIProductionProfileInventoryTag {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileInventoryTag
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileInventoryTag
     */
    value?: string;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIProductionProfileItem
 */
export interface FulfillmentAPIProductionProfileItem {
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    actualPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    allocatedQuantity?: number;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    allowsBackOrder?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    allowsFutureAllocate?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    allowsSubstitution?: boolean;
    /**
     * 
     * @type {FulfillmentAPIProductionProfileAppeasementReason}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    appeasementReason?: FulfillmentAPIProductionProfileAppeasementReason;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIProductionProfileAuditInfo}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    auditInfo?: FulfillmentAPIProductionProfileAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    backorderReleaseDate?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    cartItemId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    childItemIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    creditCurrencyCode?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    creditValue?: number;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    data?: { [key: string]: object; };
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    duty?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    expectedDeliveryDate?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileFulfillmentField>}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    fulfillmentFields?: Array<FulfillmentAPIProductionProfileFulfillmentField>;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileGiftCard>}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    giftCards?: Array<FulfillmentAPIProductionProfileGiftCard>;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    giftMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    goodsType?: FulfillmentAPIProductionProfileItemGoodsTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    handling?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    handlingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    handlingTax?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    height?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    imageUrl?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileInventoryTag>}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    inventoryTags?: Array<FulfillmentAPIProductionProfileInventoryTag>;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    isAssemblyRequired?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    isGift?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    isPackagedStandAlone?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    isReservedInventory?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    isTaxable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    itemDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    itemTax?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    length?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    lineId?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    lineItemAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    lineItemCost?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    locatorName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    manageStock?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    optionAttributeFQN?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileProductOption>}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    options?: Array<FulfillmentAPIProductionProfileProductOption>;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    originalLineId?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    originalOrderItemId?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    originalQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    overridePrice?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    parentItemId?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    productCode?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    purchaseLocation?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    quantity?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    readyForPickupQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    shipping?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    shippingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    shippingTax?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    sku?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    substituteQuantity?: number;
    /**
     * 
     * @type {object}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    taxData?: object;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    taxableHandling?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    taxableLineItemCost?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    taxableShipping?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    transferQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    trueTransferQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    unitPrice?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    upc?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    variationProductCode?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    weight?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    weightUnit?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    weightedDutyAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    weightedHandlingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    weightedHandlingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    weightedLineItemTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    weightedShipmentAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    weightedShippingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    weightedShippingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileItem
     */
    width?: number;
}


/**
 * @export
 */
export const FulfillmentAPIProductionProfileItemGoodsTypeEnum = {
    Physical: 'Physical',
    Digital: 'Digital',
    DigitalCredit: 'DigitalCredit',
    DigitalGiftCard: 'DigitalGiftCard',
    Service: 'Service'
} as const;
export type FulfillmentAPIProductionProfileItemGoodsTypeEnum = typeof FulfillmentAPIProductionProfileItemGoodsTypeEnum[keyof typeof FulfillmentAPIProductionProfileItemGoodsTypeEnum];

/**
 * 
 * @export
 * @interface FulfillmentAPIProductionProfileLink
 */
export interface FulfillmentAPIProductionProfileLink {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileLink
     */
    deprecation?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileLink
     */
    href?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileLink
     */
    hreflang?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileLink
     */
    media?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileLink
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileLink
     */
    profile?: string;
    /**
     * 
     * @type {object}
     * @memberof FulfillmentAPIProductionProfileLink
     */
    rel?: object;
    /**
     * 
     * @type {UriTemplate}
     * @memberof FulfillmentAPIProductionProfileLink
     */
    template?: UriTemplate;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileLink
     */
    templated?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileLink
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileLink
     */
    type?: string;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIProductionProfileMeasurement
 */
export interface FulfillmentAPIProductionProfileMeasurement {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentAPIProductionProfileMeasurement
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileMeasurement
     */
    unit?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileMeasurement
     */
    value?: number;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIProductionProfilePackage
 */
export interface FulfillmentAPIProductionProfilePackage {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentAPIProductionProfilePackage
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIProductionProfileAuditInfo}
     * @memberof FulfillmentAPIProductionProfilePackage
     */
    auditInfo?: FulfillmentAPIProductionProfileAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfilePackage
     */
    carrier?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfilePackage
     */
    fxcbDocumentsUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfilePackage
     */
    fxcbPackNotificationId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfilePackage
     */
    hasLabel?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfilePackage
     */
    integratorId?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfilePackage
     */
    labelFormat?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfilePackage
     */
    manifestId?: string;
    /**
     * 
     * @type {FulfillmentAPIProductionProfilePackageMeasurements}
     * @memberof FulfillmentAPIProductionProfilePackage
     */
    measurements?: FulfillmentAPIProductionProfilePackageMeasurements;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfilePackage
     */
    packageId?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfilePackage
     */
    packagingType?: string;
    /**
     * 
     * @type {Array<PackingSlipItemDetailDto>}
     * @memberof FulfillmentAPIProductionProfilePackage
     */
    packingSlipItemDetails?: Array<PackingSlipItemDetailDto>;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfilePackage
     */
    packingSlipNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfilePackage
     */
    returnCarrier?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof FulfillmentAPIProductionProfilePackage
     */
    returnTrackingNumbers?: Array<string>;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileTracking>}
     * @memberof FulfillmentAPIProductionProfilePackage
     */
    returnTrackings?: Array<FulfillmentAPIProductionProfileTracking>;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfilePackage
     */
    shippingMethodCode?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfilePackage
     */
    shippingMethodName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfilePackage
     */
    signatureRequired?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfilePackage
     */
    stringBarcode?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof FulfillmentAPIProductionProfilePackage
     */
    trackingNumbers?: Array<string>;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileTracking>}
     * @memberof FulfillmentAPIProductionProfilePackage
     */
    trackings?: Array<FulfillmentAPIProductionProfileTracking>;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIProductionProfilePackageMeasurements
 */
export interface FulfillmentAPIProductionProfilePackageMeasurements {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentAPIProductionProfilePackageMeasurements
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIProductionProfileMeasurement}
     * @memberof FulfillmentAPIProductionProfilePackageMeasurements
     */
    height?: FulfillmentAPIProductionProfileMeasurement;
    /**
     * 
     * @type {FulfillmentAPIProductionProfileMeasurement}
     * @memberof FulfillmentAPIProductionProfilePackageMeasurements
     */
    length?: FulfillmentAPIProductionProfileMeasurement;
    /**
     * 
     * @type {FulfillmentAPIProductionProfileMeasurement}
     * @memberof FulfillmentAPIProductionProfilePackageMeasurements
     */
    weight?: FulfillmentAPIProductionProfileMeasurement;
    /**
     * 
     * @type {FulfillmentAPIProductionProfileMeasurement}
     * @memberof FulfillmentAPIProductionProfilePackageMeasurements
     */
    width?: FulfillmentAPIProductionProfileMeasurement;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIProductionProfilePhone
 */
export interface FulfillmentAPIProductionProfilePhone {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentAPIProductionProfilePhone
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfilePhone
     */
    home?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfilePhone
     */
    mobile?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfilePhone
     */
    work?: string;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIProductionProfilePickupItem
 */
export interface FulfillmentAPIProductionProfilePickupItem {
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfilePickupItem
     */
    lineId?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfilePickupItem
     */
    quantity?: number;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIProductionProfileProductOption
 */
export interface FulfillmentAPIProductionProfileProductOption {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileProductOption
     */
    attributeFQN?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentAPIProductionProfileProductOption
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileProductOption
     */
    dataType?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileProductOption
     */
    name?: string;
    /**
     * 
     * @type {object}
     * @memberof FulfillmentAPIProductionProfileProductOption
     */
    shopperEnteredValue?: object;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileProductOption
     */
    stringValue?: string;
    /**
     * 
     * @type {object}
     * @memberof FulfillmentAPIProductionProfileProductOption
     */
    value?: object;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIProductionProfileShipment
 */
export interface FulfillmentAPIProductionProfileShipment {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    acceptedDate?: string;
    /**
     * 
     * @type {FulfillmentAPIProductionProfileContact}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    alternateContact?: FulfillmentAPIProductionProfileContact;
    /**
     * 
     * @type {FulfillmentAPIProductionProfileAppeasementReason}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    appeasementReason?: FulfillmentAPIProductionProfileAppeasementReason;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    assignedLocationCode?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIProductionProfileAuditInfo}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    auditInfo?: FulfillmentAPIProductionProfileAuditInfo;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileCanceledItem>}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    canceledItems?: Array<FulfillmentAPIProductionProfileCanceledItem>;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    cartId?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileChangeMessage>}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    changeMessages?: Array<FulfillmentAPIProductionProfileChangeMessage>;
    /**
     * 
     * @type {Array<number>}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    childShipmentNumbers?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    currencyCode?: string;
    /**
     * 
     * @type {FulfillmentAPIProductionProfileCustomer}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    customer?: FulfillmentAPIProductionProfileCustomer;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    customerAccountId?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    customerAddressId?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    customerTaxId?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    data?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIProductionProfileDestination}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    destination?: FulfillmentAPIProductionProfileDestination;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    dutyAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    dutyTotal?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    externalOrderId?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    fulfillmentDate?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    fulfillmentStatus?: FulfillmentAPIProductionProfileShipmentFulfillmentStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    futureDate?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    handlingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    handlingSubtotal?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    handlingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    handlingTaxTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    handlingTotal?: number;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    isAutoAssigned?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    isExpress?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    isFlatRateShipping?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    isHistoricalImport?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    isOptInForSms?: boolean;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileItem>}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    items?: Array<FulfillmentAPIProductionProfileItem>;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    lineItemSubtotal?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    lineItemTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    lineItemTaxTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    lineItemTotal?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    masterTrackingNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    orderId?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    orderNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    orderSubmitDate?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    orderType?: FulfillmentAPIProductionProfileShipmentOrderTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    originalShipmentNumber?: number;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfilePackage>}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    packages?: Array<FulfillmentAPIProductionProfilePackage>;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    parentCheckoutNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    parentShipmentNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    pickStatus?: FulfillmentAPIProductionProfileShipmentPickStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    pickType?: FulfillmentAPIProductionProfileShipmentPickTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    pickWaveNumber?: number;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    pickupInfo?: { [key: string]: object; };
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    readyForPickup?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    readyForPickupDate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    readyToCapture?: boolean;
    /**
     * 
     * @type {Array<ReassignedItem>}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    reassignedItems?: Array<ReassignedItem>;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    receivedDate?: string;
    /**
     * 
     * @type {Array<RejectedItem>}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    rejectedItems?: Array<RejectedItem>;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    sentCustomerAtStoreNotification?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    sentCustomerInTransitNotification?: boolean;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    shipmentAdjustment?: number;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileShipmentNote>}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    shipmentNotes?: Array<FulfillmentAPIProductionProfileShipmentNote>;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    shipmentNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    shipmentStatus?: FulfillmentAPIProductionProfileShipmentShipmentStatusEnum;
    /**
     * 
     * @type {FulfillmentAPIProductionProfileShipmentStatusReason}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    shipmentStatusReason?: FulfillmentAPIProductionProfileShipmentStatusReason;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    shipmentType?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    shippingAdjustment?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    shippingMethodCode?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    shippingMethodName?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    shippingSubtotal?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    shippingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    shippingTaxTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    shippingTotal?: number;
    /**
     * 
     * @type {FulfillmentAPIProductionProfileShopperNotes}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    shopperNotes?: FulfillmentAPIProductionProfileShopperNotes;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    siteId?: number;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileSubstitutedItem>}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    substitutedItems?: Array<FulfillmentAPIProductionProfileSubstitutedItem>;
    /**
     * 
     * @type {object}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    taxData?: object;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    tenantId?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    total?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    transferShipmentNumbers?: Array<number>;
    /**
     * 
     * @type {Array<TransferredItem>}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    transferredItems?: Array<TransferredItem>;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    transitTime?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    workflowProcessContainerId?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    workflowProcessId?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    workflowProcessVersion?: string;
    /**
     * 
     * @type {FulfillmentAPIProductionProfileWorkflowState}
     * @memberof FulfillmentAPIProductionProfileShipment
     */
    workflowState?: FulfillmentAPIProductionProfileWorkflowState;
}


/**
 * @export
 */
export const FulfillmentAPIProductionProfileShipmentFulfillmentStatusEnum = {
    NotFulfilled: 'NotFulfilled',
    Fulfilled: 'Fulfilled'
} as const;
export type FulfillmentAPIProductionProfileShipmentFulfillmentStatusEnum = typeof FulfillmentAPIProductionProfileShipmentFulfillmentStatusEnum[keyof typeof FulfillmentAPIProductionProfileShipmentFulfillmentStatusEnum];

/**
 * @export
 */
export const FulfillmentAPIProductionProfileShipmentOrderTypeEnum = {
    Offline: 'Offline',
    Online: 'Online'
} as const;
export type FulfillmentAPIProductionProfileShipmentOrderTypeEnum = typeof FulfillmentAPIProductionProfileShipmentOrderTypeEnum[keyof typeof FulfillmentAPIProductionProfileShipmentOrderTypeEnum];

/**
 * @export
 */
export const FulfillmentAPIProductionProfileShipmentPickStatusEnum = {
    Available: 'AVAILABLE',
    InWave: 'IN_WAVE',
    Picked: 'PICKED',
    Transfer: 'TRANSFER',
    Complete: 'COMPLETE'
} as const;
export type FulfillmentAPIProductionProfileShipmentPickStatusEnum = typeof FulfillmentAPIProductionProfileShipmentPickStatusEnum[keyof typeof FulfillmentAPIProductionProfileShipmentPickStatusEnum];

/**
 * @export
 */
export const FulfillmentAPIProductionProfileShipmentPickTypeEnum = {
    Normal: 'NORMAL',
    Single: 'SINGLE',
    Multiple: 'MULTIPLE'
} as const;
export type FulfillmentAPIProductionProfileShipmentPickTypeEnum = typeof FulfillmentAPIProductionProfileShipmentPickTypeEnum[keyof typeof FulfillmentAPIProductionProfileShipmentPickTypeEnum];

/**
 * @export
 */
export const FulfillmentAPIProductionProfileShipmentShipmentStatusEnum = {
    Ready: 'READY',
    Reassigned: 'REASSIGNED',
    Backorder: 'BACKORDER',
    Canceled: 'CANCELED',
    Fulfilled: 'FULFILLED',
    CustomerCare: 'CUSTOMER_CARE',
    Deleted: 'DELETED',
    Future: 'FUTURE'
} as const;
export type FulfillmentAPIProductionProfileShipmentShipmentStatusEnum = typeof FulfillmentAPIProductionProfileShipmentShipmentStatusEnum[keyof typeof FulfillmentAPIProductionProfileShipmentShipmentStatusEnum];

/**
 * 
 * @export
 * @interface FulfillmentAPIProductionProfileShipmentNote
 */
export interface FulfillmentAPIProductionProfileShipmentNote {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentAPIProductionProfileShipmentNote
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIProductionProfileAuditInfo}
     * @memberof FulfillmentAPIProductionProfileShipmentNote
     */
    auditInfo?: FulfillmentAPIProductionProfileAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileShipmentNote
     */
    noteId?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileShipmentNote
     */
    noteText?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileShipmentNote
     */
    role?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileShipmentNote
     */
    username?: string;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIProductionProfileShipmentStatusReason
 */
export interface FulfillmentAPIProductionProfileShipmentStatusReason {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileShipmentStatusReason
     */
    moreInfo?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileShipmentStatusReason
     */
    reasonCode?: string;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIProductionProfileShopperNotes
 */
export interface FulfillmentAPIProductionProfileShopperNotes {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileShopperNotes
     */
    comments?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileShopperNotes
     */
    deliveryInstructions?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileShopperNotes
     */
    giftMessage?: string;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIProductionProfileSubstitutedItem
 */
export interface FulfillmentAPIProductionProfileSubstitutedItem {
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    actualPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    allocatedQuantity?: number;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    allowsBackOrder?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    allowsFutureAllocate?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    allowsSubstitution?: boolean;
    /**
     * 
     * @type {FulfillmentAPIProductionProfileAppeasementReason}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    appeasementReason?: FulfillmentAPIProductionProfileAppeasementReason;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIProductionProfileAuditInfo}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    auditInfo?: FulfillmentAPIProductionProfileAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    backorderReleaseDate?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    cartItemId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    childItemIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    creditCurrencyCode?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    creditValue?: number;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    data?: { [key: string]: object; };
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    duty?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    expectedDeliveryDate?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileFulfillmentField>}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    fulfillmentFields?: Array<FulfillmentAPIProductionProfileFulfillmentField>;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileGiftCard>}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    giftCards?: Array<FulfillmentAPIProductionProfileGiftCard>;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    giftMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    goodsType?: FulfillmentAPIProductionProfileSubstitutedItemGoodsTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    handling?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    handlingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    handlingTax?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    height?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    imageUrl?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileInventoryTag>}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    inventoryTags?: Array<FulfillmentAPIProductionProfileInventoryTag>;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    isAssemblyRequired?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    isGift?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    isPackagedStandAlone?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    isReservedInventory?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    isTaxable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    itemDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    itemTax?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    length?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    lineId?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    lineItemAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    lineItemCost?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    locatorName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    manageStock?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    optionAttributeFQN?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileProductOption>}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    options?: Array<FulfillmentAPIProductionProfileProductOption>;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    originalLineId?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    originalOrderItemId?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    originalQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    overridePrice?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    parentItemId?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    productCode?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    purchaseLocation?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    quantity?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    readyForPickupQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    shipping?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    shippingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    shippingTax?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    sku?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    substituteItemLineIds?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    substituteQuantity?: number;
    /**
     * 
     * @type {SubstituteReason}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    substituteReason?: SubstituteReason;
    /**
     * 
     * @type {object}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    taxData?: object;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    taxableHandling?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    taxableLineItemCost?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    taxableShipping?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    transferQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    trueTransferQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    unitPrice?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    upc?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    variationProductCode?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    weight?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    weightUnit?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    weightedDutyAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    weightedHandlingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    weightedHandlingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    weightedLineItemTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    weightedShipmentAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    weightedShippingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    weightedShippingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileSubstitutedItem
     */
    width?: number;
}


/**
 * @export
 */
export const FulfillmentAPIProductionProfileSubstitutedItemGoodsTypeEnum = {
    Physical: 'Physical',
    Digital: 'Digital',
    DigitalCredit: 'DigitalCredit',
    DigitalGiftCard: 'DigitalGiftCard',
    Service: 'Service'
} as const;
export type FulfillmentAPIProductionProfileSubstitutedItemGoodsTypeEnum = typeof FulfillmentAPIProductionProfileSubstitutedItemGoodsTypeEnum[keyof typeof FulfillmentAPIProductionProfileSubstitutedItemGoodsTypeEnum];

/**
 * 
 * @export
 * @interface FulfillmentAPIProductionProfileTaskInput
 */
export interface FulfillmentAPIProductionProfileTaskInput {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileTaskInput
     */
    helpMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileTaskInput
     */
    label?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileTaskInput
     */
    maxLength?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileTaskInput
     */
    maximum?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileTaskInput
     */
    minLength?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentAPIProductionProfileTaskInput
     */
    minimum?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileTaskInput
     */
    name?: string;
    /**
     * 
     * @type {Array<object>}
     * @memberof FulfillmentAPIProductionProfileTaskInput
     */
    options?: Array<object>;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileTaskInput
     */
    pattern?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentAPIProductionProfileTaskInput
     */
    required?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileTaskInput
     */
    type?: FulfillmentAPIProductionProfileTaskInputTypeEnum;
}


/**
 * @export
 */
export const FulfillmentAPIProductionProfileTaskInputTypeEnum = {
    String: 'STRING',
    Integer: 'INTEGER',
    Number: 'NUMBER',
    Boolean: 'BOOLEAN',
    Object: 'OBJECT',
    List: 'LIST',
    Unknown: 'UNKNOWN'
} as const;
export type FulfillmentAPIProductionProfileTaskInputTypeEnum = typeof FulfillmentAPIProductionProfileTaskInputTypeEnum[keyof typeof FulfillmentAPIProductionProfileTaskInputTypeEnum];

/**
 * 
 * @export
 * @interface FulfillmentAPIProductionProfileTracking
 */
export interface FulfillmentAPIProductionProfileTracking {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentAPIProductionProfileTracking
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileTracking
     */
    number?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileTracking
     */
    url?: string;
}
/**
 * 
 * @export
 * @interface FulfillmentAPIProductionProfileWorkflowState
 */
export interface FulfillmentAPIProductionProfileWorkflowState {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileWorkflowState
     */
    activeTaskName?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentAPIProductionProfileWorkflowState
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIProductionProfileAuditInfo}
     * @memberof FulfillmentAPIProductionProfileWorkflowState
     */
    auditInfo?: FulfillmentAPIProductionProfileAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileWorkflowState
     */
    completedDate?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileWorkflowState
     */
    processInstanceId?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentAPIProductionProfileWorkflowState
     */
    shipmentState?: string;
    /**
     * 
     * @type {Array<Task>}
     * @memberof FulfillmentAPIProductionProfileWorkflowState
     */
    taskList?: Array<Task>;
    /**
     * 
     * @type {{ [key: string]: BpmVariable; }}
     * @memberof FulfillmentAPIProductionProfileWorkflowState
     */
    variables?: { [key: string]: BpmVariable; };
}
/**
 * 
 * @export
 * @interface FutureItem
 */
export interface FutureItem {
    /**
     * 
     * @type {string}
     * @memberof FutureItem
     */
    futureDate?: string;
    /**
     * 
     * @type {number}
     * @memberof FutureItem
     */
    lineId?: number;
    /**
     * 
     * @type {number}
     * @memberof FutureItem
     */
    quantity?: number;
}
/**
 * 
 * @export
 * @interface FutureItemsRequest
 */
export interface FutureItemsRequest {
    /**
     * 
     * @type {boolean}
     * @memberof FutureItemsRequest
     */
    isUserAction?: boolean;
    /**
     * 
     * @type {Array<FutureItem>}
     * @memberof FutureItemsRequest
     */
    items?: Array<FutureItem>;
}
/**
 * 
 * @export
 * @interface FutureShipmentUpdateDateRequest
 */
export interface FutureShipmentUpdateDateRequest {
    /**
     * 
     * @type {boolean}
     * @memberof FutureShipmentUpdateDateRequest
     */
    bypassFutureAllocateDeallocate?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FutureShipmentUpdateDateRequest
     */
    futureDate?: string;
}
/**
 * 
 * @export
 * @interface GiftCardInfoRequest
 */
export interface GiftCardInfoRequest {
    /**
     * 
     * @type {string}
     * @memberof GiftCardInfoRequest
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof GiftCardInfoRequest
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof GiftCardInfoRequest
     */
    giftCardMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof GiftCardInfoRequest
     */
    lastNameOrSurname?: string;
}
/**
 * 
 * @export
 * @interface HandleOption
 */
export interface HandleOption {
    /**
     * 
     * @type {boolean}
     * @memberof HandleOption
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileItem>}
     * @memberof HandleOption
     */
    items?: Array<FulfillmentAPIProductionProfileItem>;
    /**
     * 
     * @type {TaskReason}
     * @memberof HandleOption
     */
    reason?: TaskReason;
}
/**
 * 
 * @export
 * @interface ItemGiftReceiptRequest
 */
export interface ItemGiftReceiptRequest {
    /**
     * 
     * @type {string}
     * @memberof ItemGiftReceiptRequest
     */
    giftMessage?: string;
    /**
     * 
     * @type {number}
     * @memberof ItemGiftReceiptRequest
     */
    lineId?: number;
}
/**
 * 
 * @export
 * @interface Links
 */
export interface Links {
    /**
     * 
     * @type {boolean}
     * @memberof Links
     */
    empty?: boolean;
}
/**
 * 
 * @export
 * @interface LocationSummary
 */
export interface LocationSummary {
    /**
     * 
     * @type {string}
     * @memberof LocationSummary
     */
    currencyCode?: string;
    /**
     * 
     * @type {number}
     * @memberof LocationSummary
     */
    currentAmount?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationSummary
     */
    currentItems?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationSummary
     */
    currentShipments?: number;
    /**
     * 
     * @type {string}
     * @memberof LocationSummary
     */
    locationCode?: string;
    /**
     * 
     * @type {number}
     * @memberof LocationSummary
     */
    totalAmount?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationSummary
     */
    totalItems?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationSummary
     */
    totalShipments?: number;
}
/**
 * 
 * @export
 * @interface Manifest
 */
export interface Manifest {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof Manifest
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIProductionProfileAuditInfo}
     * @memberof Manifest
     */
    auditInfo?: FulfillmentAPIProductionProfileAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof Manifest
     */
    carrierId?: string;
    /**
     * 
     * @type {string}
     * @memberof Manifest
     */
    internalId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Manifest
     */
    isSuccessfulPreviously?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Manifest
     */
    locationCode?: string;
    /**
     * 
     * @type {string}
     * @memberof Manifest
     */
    manifestId?: string;
    /**
     * 
     * @type {string}
     * @memberof Manifest
     */
    manifestUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof Manifest
     */
    numberOfPackages?: number;
    /**
     * 
     * @type {number}
     * @memberof Manifest
     */
    numberOfShipments?: number;
    /**
     * 
     * @type {Array<ManifestShipment>}
     * @memberof Manifest
     */
    shipments?: Array<ManifestShipment>;
    /**
     * 
     * @type {Array<ManifestShipment>}
     * @memberof Manifest
     */
    shipmentsSuccessfulPreviously?: Array<ManifestShipment>;
    /**
     * 
     * @type {number}
     * @memberof Manifest
     */
    tenantId?: number;
    /**
     * 
     * @type {string}
     * @memberof Manifest
     */
    userDisplayName?: string;
    /**
     * 
     * @type {string}
     * @memberof Manifest
     */
    userId?: string;
}
/**
 * 
 * @export
 * @interface ManifestRequest
 */
export interface ManifestRequest {
    /**
     * 
     * @type {string}
     * @memberof ManifestRequest
     */
    carrierId?: string;
    /**
     * 
     * @type {Array<ManifestRequestShipment>}
     * @memberof ManifestRequest
     */
    includedShipments?: Array<ManifestRequestShipment>;
    /**
     * 
     * @type {string}
     * @memberof ManifestRequest
     */
    locationCode?: string;
}
/**
 * 
 * @export
 * @interface ManifestRequestShipment
 */
export interface ManifestRequestShipment {
    /**
     * 
     * @type {Array<string>}
     * @memberof ManifestRequestShipment
     */
    integratorIds?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof ManifestRequestShipment
     */
    shipmentNumber?: number;
}
/**
 * 
 * @export
 * @interface ManifestShipment
 */
export interface ManifestShipment {
    /**
     * 
     * @type {FulfillmentAPIProductionProfileDestination}
     * @memberof ManifestShipment
     */
    destination?: FulfillmentAPIProductionProfileDestination;
    /**
     * 
     * @type {string}
     * @memberof ManifestShipment
     */
    externalOrderId?: string;
    /**
     * 
     * @type {string}
     * @memberof ManifestShipment
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {number}
     * @memberof ManifestShipment
     */
    orderNumber?: number;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfilePackage>}
     * @memberof ManifestShipment
     */
    packages?: Array<FulfillmentAPIProductionProfilePackage>;
    /**
     * 
     * @type {number}
     * @memberof ManifestShipment
     */
    shipmentNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof ManifestShipment
     */
    shipmentType?: string;
}
/**
 * 
 * @export
 * @interface PackingSlipItemDetailDto
 */
export interface PackingSlipItemDetailDto {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof PackingSlipItemDetailDto
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {number}
     * @memberof PackingSlipItemDetailDto
     */
    lineId?: number;
    /**
     * 
     * @type {string}
     * @memberof PackingSlipItemDetailDto
     */
    originalOrderItemId?: string;
    /**
     * 
     * @type {number}
     * @memberof PackingSlipItemDetailDto
     */
    quantity?: number;
}
/**
 * 
 * @export
 * @interface PageMetadata
 */
export interface PageMetadata {
    /**
     * 
     * @type {number}
     * @memberof PageMetadata
     */
    number?: number;
    /**
     * 
     * @type {number}
     * @memberof PageMetadata
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof PageMetadata
     */
    totalElements?: number;
    /**
     * 
     * @type {number}
     * @memberof PageMetadata
     */
    totalPages?: number;
}
/**
 * 
 * @export
 * @interface PagedModelOfEntityModelOfShipment
 */
export interface PagedModelOfEntityModelOfShipment {
    /**
     * 
     * @type {{ [key: string]: Array<EntityModelOfShipment>; }}
     * @memberof PagedModelOfEntityModelOfShipment
     */
    embedded?: { [key: string]: Array<EntityModelOfShipment>; };
    /**
     * 
     * @type {Links}
     * @memberof PagedModelOfEntityModelOfShipment
     */
    links?: Links;
    /**
     * 
     * @type {PageMetadata}
     * @memberof PagedModelOfEntityModelOfShipment
     */
    page?: PageMetadata;
}
/**
 * 
 * @export
 * @interface PagedModelOfEntityModelOfWorkflowProcess
 */
export interface PagedModelOfEntityModelOfWorkflowProcess {
    /**
     * 
     * @type {{ [key: string]: Array<EntityModelOfWorkflowProcess>; }}
     * @memberof PagedModelOfEntityModelOfWorkflowProcess
     */
    embedded?: { [key: string]: Array<EntityModelOfWorkflowProcess>; };
    /**
     * 
     * @type {Links}
     * @memberof PagedModelOfEntityModelOfWorkflowProcess
     */
    links?: Links;
    /**
     * 
     * @type {PageMetadata}
     * @memberof PagedModelOfEntityModelOfWorkflowProcess
     */
    page?: PageMetadata;
}
/**
 * 
 * @export
 * @interface PickWave
 */
export interface PickWave {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof PickWave
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIProductionProfileAuditInfo}
     * @memberof PickWave
     */
    auditInfo?: FulfillmentAPIProductionProfileAuditInfo;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileChangeMessage>}
     * @memberof PickWave
     */
    changeMessages?: Array<FulfillmentAPIProductionProfileChangeMessage>;
    /**
     * 
     * @type {Array<PickWaveContent>}
     * @memberof PickWave
     */
    contents?: Array<PickWaveContent>;
    /**
     * 
     * @type {string}
     * @memberof PickWave
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {number}
     * @memberof PickWave
     */
    maxShipments?: number;
    /**
     * 
     * @type {number}
     * @memberof PickWave
     */
    parentPickWaveNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof PickWave
     */
    pickType?: PickWavePickTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof PickWave
     */
    pickWaveId?: string;
    /**
     * 
     * @type {number}
     * @memberof PickWave
     */
    pickWaveNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof PickWave
     */
    pickWaveStatus?: PickWavePickWaveStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof PickWave
     */
    recoveryPickWaveNumber?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof PickWave
     */
    shipmentNumbers?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof PickWave
     */
    shipmentType?: string;
    /**
     * 
     * @type {number}
     * @memberof PickWave
     */
    tenantId?: number;
    /**
     * 
     * @type {string}
     * @memberof PickWave
     */
    userDisplayName?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWave
     */
    userId?: string;
}


/**
 * @export
 */
export const PickWavePickTypeEnum = {
    Normal: 'NORMAL',
    Single: 'SINGLE',
    Multiple: 'MULTIPLE'
} as const;
export type PickWavePickTypeEnum = typeof PickWavePickTypeEnum[keyof typeof PickWavePickTypeEnum];

/**
 * @export
 */
export const PickWavePickWaveStatusEnum = {
    Error: 'ERROR',
    Pending: 'PENDING',
    InProgress: 'IN_PROGRESS',
    Closed: 'CLOSED',
    PendingRecovery: 'PENDING_RECOVERY'
} as const;
export type PickWavePickWaveStatusEnum = typeof PickWavePickWaveStatusEnum[keyof typeof PickWavePickWaveStatusEnum];

/**
 * 
 * @export
 * @interface PickWaveBinRange
 */
export interface PickWaveBinRange {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof PickWaveBinRange
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof PickWaveBinRange
     */
    endBinName?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveBinRange
     */
    startBinName?: string;
}
/**
 * 
 * @export
 * @interface PickWaveContent
 */
export interface PickWaveContent {
    /**
     * 
     * @type {number}
     * @memberof PickWaveContent
     */
    actualQuantity?: number;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof PickWaveContent
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIProductionProfileAuditInfo}
     * @memberof PickWaveContent
     */
    auditInfo?: FulfillmentAPIProductionProfileAuditInfo;
    /**
     * 
     * @type {number}
     * @memberof PickWaveContent
     */
    binId?: number;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent
     */
    binName?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent
     */
    contentId?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent
     */
    externalOrderId?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent
     */
    imageUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof PickWaveContent
     */
    itemLineId?: number;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent
     */
    locatorName?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent
     */
    optionAttributeFQN?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileProductOption>}
     * @memberof PickWaveContent
     */
    options?: Array<FulfillmentAPIProductionProfileProductOption>;
    /**
     * 
     * @type {number}
     * @memberof PickWaveContent
     */
    orderNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent
     */
    productCode?: string;
    /**
     * 
     * @type {number}
     * @memberof PickWaveContent
     */
    quantity?: number;
    /**
     * 
     * @type {number}
     * @memberof PickWaveContent
     */
    shipmentNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent
     */
    sku?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent
     */
    status?: PickWaveContentStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent
     */
    upc?: string;
    /**
     * 
     * @type {string}
     * @memberof PickWaveContent
     */
    variationProductCode?: string;
}


/**
 * @export
 */
export const PickWaveContentStatusEnum = {
    InProgress: 'IN_PROGRESS',
    Picked: 'PICKED',
    Removed: 'REMOVED'
} as const;
export type PickWaveContentStatusEnum = typeof PickWaveContentStatusEnum[keyof typeof PickWaveContentStatusEnum];

/**
 * 
 * @export
 * @interface PickWaveProductMatch
 */
export interface PickWaveProductMatch {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof PickWaveProductMatch
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof PickWaveProductMatch
     */
    identifier?: PickWaveProductMatchIdentifierEnum;
    /**
     * 
     * @type {string}
     * @memberof PickWaveProductMatch
     */
    matchType?: PickWaveProductMatchMatchTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof PickWaveProductMatch
     */
    value?: string;
}


/**
 * @export
 */
export const PickWaveProductMatchIdentifierEnum = {
    Upc: 'UPC',
    ProductCode: 'PRODUCT_CODE'
} as const;
export type PickWaveProductMatchIdentifierEnum = typeof PickWaveProductMatchIdentifierEnum[keyof typeof PickWaveProductMatchIdentifierEnum];

/**
 * @export
 */
export const PickWaveProductMatchMatchTypeEnum = {
    Exact: 'EXACT',
    Contains: 'CONTAINS',
    StartsWith: 'STARTS_WITH',
    EndsWith: 'ENDS_WITH'
} as const;
export type PickWaveProductMatchMatchTypeEnum = typeof PickWaveProductMatchMatchTypeEnum[keyof typeof PickWaveProductMatchMatchTypeEnum];

/**
 * 
 * @export
 * @interface PickupItemsRequest
 */
export interface PickupItemsRequest {
    /**
     * 
     * @type {boolean}
     * @memberof PickupItemsRequest
     */
    isUserAction?: boolean;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfilePickupItem>}
     * @memberof PickupItemsRequest
     */
    items?: Array<FulfillmentAPIProductionProfilePickupItem>;
}
/**
 * 
 * @export
 * @interface ReadyForPrepItem
 */
export interface ReadyForPrepItem {
    /**
     * 
     * @type {number}
     * @memberof ReadyForPrepItem
     */
    lineId?: number;
    /**
     * 
     * @type {number}
     * @memberof ReadyForPrepItem
     */
    quantity?: number;
}
/**
 * 
 * @export
 * @interface ReadyForPrepItemsRequest
 */
export interface ReadyForPrepItemsRequest {
    /**
     * 
     * @type {boolean}
     * @memberof ReadyForPrepItemsRequest
     */
    isUserAction?: boolean;
    /**
     * 
     * @type {Array<ReadyForPrepItem>}
     * @memberof ReadyForPrepItemsRequest
     */
    items?: Array<ReadyForPrepItem>;
}
/**
 * 
 * @export
 * @interface ReassignItem
 */
export interface ReassignItem {
    /**
     * 
     * @type {boolean}
     * @memberof ReassignItem
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReassignItem
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {number}
     * @memberof ReassignItem
     */
    lineId?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignItem
     */
    quantity?: number;
    /**
     * 
     * @type {ReassignedReason}
     * @memberof ReassignItem
     */
    reassignedReason?: ReassignedReason;
}
/**
 * 
 * @export
 * @interface ReassignItemsRequest
 */
export interface ReassignItemsRequest {
    /**
     * 
     * @type {boolean}
     * @memberof ReassignItemsRequest
     */
    isUserAction?: boolean;
    /**
     * 
     * @type {Array<ReassignItem>}
     * @memberof ReassignItemsRequest
     */
    items?: Array<ReassignItem>;
}
/**
 * 
 * @export
 * @interface ReassignShipment
 */
export interface ReassignShipment {
    /**
     * 
     * @type {boolean}
     * @memberof ReassignShipment
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReassignShipment
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignShipment
     */
    isUserAction?: boolean;
    /**
     * 
     * @type {Array<ReassignItem>}
     * @memberof ReassignShipment
     */
    items?: Array<ReassignItem>;
    /**
     * 
     * @type {ReassignedReason}
     * @memberof ReassignShipment
     */
    reassignedReason?: ReassignedReason;
}
/**
 * 
 * @export
 * @interface ReassignedItem
 */
export interface ReassignedItem {
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    actualPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    allocatedQuantity?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignedItem
     */
    allowsBackOrder?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignedItem
     */
    allowsFutureAllocate?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignedItem
     */
    allowsSubstitution?: boolean;
    /**
     * 
     * @type {FulfillmentAPIProductionProfileAppeasementReason}
     * @memberof ReassignedItem
     */
    appeasementReason?: FulfillmentAPIProductionProfileAppeasementReason;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof ReassignedItem
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIProductionProfileAuditInfo}
     * @memberof ReassignedItem
     */
    auditInfo?: FulfillmentAPIProductionProfileAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    backorderReleaseDate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignedItem
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    cartItemId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReassignedItem
     */
    childItemIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    creditCurrencyCode?: string;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    creditValue?: number;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof ReassignedItem
     */
    data?: { [key: string]: object; };
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    duty?: number;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    expectedDeliveryDate?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileFulfillmentField>}
     * @memberof ReassignedItem
     */
    fulfillmentFields?: Array<FulfillmentAPIProductionProfileFulfillmentField>;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileGiftCard>}
     * @memberof ReassignedItem
     */
    giftCards?: Array<FulfillmentAPIProductionProfileGiftCard>;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    giftMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    goodsType?: ReassignedItemGoodsTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    handling?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    handlingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    handlingTax?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    height?: number;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    imageUrl?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileInventoryTag>}
     * @memberof ReassignedItem
     */
    inventoryTags?: Array<FulfillmentAPIProductionProfileInventoryTag>;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignedItem
     */
    isAssemblyRequired?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignedItem
     */
    isGift?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignedItem
     */
    isPackagedStandAlone?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignedItem
     */
    isReservedInventory?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignedItem
     */
    isTaxable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    itemDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    itemTax?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    length?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    lineId?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    lineItemAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    lineItemCost?: number;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    locatorName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ReassignedItem
     */
    manageStock?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    optionAttributeFQN?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileProductOption>}
     * @memberof ReassignedItem
     */
    options?: Array<FulfillmentAPIProductionProfileProductOption>;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    originalLineId?: number;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    originalOrderItemId?: string;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    originalQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    overridePrice?: number;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    parentItemId?: string;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    productCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    purchaseLocation?: string;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    quantity?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    readyForPickupQuantity?: number;
    /**
     * 
     * @type {ReassignedReason}
     * @memberof ReassignedItem
     */
    reassignedReason?: ReassignedReason;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    shipping?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    shippingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    shippingTax?: number;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    sku?: string;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    substituteQuantity?: number;
    /**
     * 
     * @type {object}
     * @memberof ReassignedItem
     */
    taxData?: object;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    taxableHandling?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    taxableLineItemCost?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    taxableShipping?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    transferQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    trueTransferQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    unitPrice?: number;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    upc?: string;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    variationProductCode?: string;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    weight?: number;
    /**
     * 
     * @type {string}
     * @memberof ReassignedItem
     */
    weightUnit?: string;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    weightedDutyAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    weightedHandlingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    weightedHandlingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    weightedLineItemTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    weightedShipmentAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    weightedShippingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    weightedShippingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ReassignedItem
     */
    width?: number;
}


/**
 * @export
 */
export const ReassignedItemGoodsTypeEnum = {
    Physical: 'Physical',
    Digital: 'Digital',
    DigitalCredit: 'DigitalCredit',
    DigitalGiftCard: 'DigitalGiftCard',
    Service: 'Service'
} as const;
export type ReassignedItemGoodsTypeEnum = typeof ReassignedItemGoodsTypeEnum[keyof typeof ReassignedItemGoodsTypeEnum];

/**
 * 
 * @export
 * @interface ReassignedReason
 */
export interface ReassignedReason {
    /**
     * 
     * @type {string}
     * @memberof ReassignedReason
     */
    moreInfo?: string;
    /**
     * 
     * @type {string}
     * @memberof ReassignedReason
     */
    reasonCode?: string;
}
/**
 * 
 * @export
 * @interface RejectItem
 */
export interface RejectItem {
    /**
     * 
     * @type {boolean}
     * @memberof RejectItem
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RejectItem
     */
    lineId?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectItem
     */
    quantity?: number;
    /**
     * 
     * @type {RejectedReason}
     * @memberof RejectItem
     */
    rejectedReason?: RejectedReason;
}
/**
 * 
 * @export
 * @interface RejectItemsRequest
 */
export interface RejectItemsRequest {
    /**
     * 
     * @type {boolean}
     * @memberof RejectItemsRequest
     */
    isUserAction?: boolean;
    /**
     * 
     * @type {Array<RejectItem>}
     * @memberof RejectItemsRequest
     */
    items?: Array<RejectItem>;
}
/**
 * 
 * @export
 * @interface RejectShipment
 */
export interface RejectShipment {
    /**
     * 
     * @type {boolean}
     * @memberof RejectShipment
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RejectShipment
     */
    isUserAction?: boolean;
    /**
     * 
     * @type {Array<RejectItem>}
     * @memberof RejectShipment
     */
    items?: Array<RejectItem>;
    /**
     * 
     * @type {RejectedReason}
     * @memberof RejectShipment
     */
    rejectedReason?: RejectedReason;
}
/**
 * 
 * @export
 * @interface RejectedItem
 */
export interface RejectedItem {
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    actualPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    allocatedQuantity?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RejectedItem
     */
    allowsBackOrder?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RejectedItem
     */
    allowsFutureAllocate?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RejectedItem
     */
    allowsSubstitution?: boolean;
    /**
     * 
     * @type {FulfillmentAPIProductionProfileAppeasementReason}
     * @memberof RejectedItem
     */
    appeasementReason?: FulfillmentAPIProductionProfileAppeasementReason;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof RejectedItem
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIProductionProfileAuditInfo}
     * @memberof RejectedItem
     */
    auditInfo?: FulfillmentAPIProductionProfileAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    backorderReleaseDate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RejectedItem
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    cartItemId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof RejectedItem
     */
    childItemIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    creditCurrencyCode?: string;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    creditValue?: number;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof RejectedItem
     */
    data?: { [key: string]: object; };
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    duty?: number;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    expectedDeliveryDate?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileFulfillmentField>}
     * @memberof RejectedItem
     */
    fulfillmentFields?: Array<FulfillmentAPIProductionProfileFulfillmentField>;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileGiftCard>}
     * @memberof RejectedItem
     */
    giftCards?: Array<FulfillmentAPIProductionProfileGiftCard>;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    giftMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    goodsType?: RejectedItemGoodsTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    handling?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    handlingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    handlingTax?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    height?: number;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    imageUrl?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileInventoryTag>}
     * @memberof RejectedItem
     */
    inventoryTags?: Array<FulfillmentAPIProductionProfileInventoryTag>;
    /**
     * 
     * @type {boolean}
     * @memberof RejectedItem
     */
    isAssemblyRequired?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RejectedItem
     */
    isGift?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RejectedItem
     */
    isPackagedStandAlone?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RejectedItem
     */
    isReservedInventory?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RejectedItem
     */
    isTaxable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    itemDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    itemTax?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    length?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    lineId?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    lineItemAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    lineItemCost?: number;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    locatorName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RejectedItem
     */
    manageStock?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    optionAttributeFQN?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileProductOption>}
     * @memberof RejectedItem
     */
    options?: Array<FulfillmentAPIProductionProfileProductOption>;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    originalLineId?: number;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    originalOrderItemId?: string;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    originalQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    overridePrice?: number;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    parentItemId?: string;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    productCode?: string;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    purchaseLocation?: string;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    quantity?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    readyForPickupQuantity?: number;
    /**
     * 
     * @type {RejectedReason}
     * @memberof RejectedItem
     */
    rejectedReason?: RejectedReason;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    shipping?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    shippingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    shippingTax?: number;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    sku?: string;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    substituteQuantity?: number;
    /**
     * 
     * @type {object}
     * @memberof RejectedItem
     */
    taxData?: object;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    taxableHandling?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    taxableLineItemCost?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    taxableShipping?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    transferQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    trueTransferQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    unitPrice?: number;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    upc?: string;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    variationProductCode?: string;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    weight?: number;
    /**
     * 
     * @type {string}
     * @memberof RejectedItem
     */
    weightUnit?: string;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    weightedDutyAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    weightedHandlingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    weightedHandlingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    weightedLineItemTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    weightedShipmentAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    weightedShippingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    weightedShippingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof RejectedItem
     */
    width?: number;
}


/**
 * @export
 */
export const RejectedItemGoodsTypeEnum = {
    Physical: 'Physical',
    Digital: 'Digital',
    DigitalCredit: 'DigitalCredit',
    DigitalGiftCard: 'DigitalGiftCard',
    Service: 'Service'
} as const;
export type RejectedItemGoodsTypeEnum = typeof RejectedItemGoodsTypeEnum[keyof typeof RejectedItemGoodsTypeEnum];

/**
 * 
 * @export
 * @interface RejectedReason
 */
export interface RejectedReason {
    /**
     * 
     * @type {string}
     * @memberof RejectedReason
     */
    moreInfo?: string;
    /**
     * 
     * @type {string}
     * @memberof RejectedReason
     */
    reasonCode?: string;
}
/**
 * 
 * @export
 * @interface SaveMpsPackagesRequest
 */
export interface SaveMpsPackagesRequest {
    /**
     * 
     * @type {string}
     * @memberof SaveMpsPackagesRequest
     */
    masterTrackingNumber?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfilePackage>}
     * @memberof SaveMpsPackagesRequest
     */
    packages?: Array<FulfillmentAPIProductionProfilePackage>;
}
/**
 * 
 * @export
 * @interface ShipmentAttribute
 */
export interface ShipmentAttribute {
    /**
     * 
     * @type {string}
     * @memberof ShipmentAttribute
     */
    key?: string;
    /**
     * 
     * @type {object}
     * @memberof ShipmentAttribute
     */
    value?: object;
}
/**
 * 
 * @export
 * @interface ShipmentGiftReceiptRequest
 */
export interface ShipmentGiftReceiptRequest {
    /**
     * 
     * @type {string}
     * @memberof ShipmentGiftReceiptRequest
     */
    giftMessage?: string;
}
/**
 * 
 * @export
 * @interface SubstitutableItemResponse
 */
export interface SubstitutableItemResponse {
    /**
     * 
     * @type {number}
     * @memberof SubstitutableItemResponse
     */
    availableInventory?: number;
    /**
     * 
     * @type {string}
     * @memberof SubstitutableItemResponse
     */
    baseProductCode?: string;
    /**
     * 
     * @type {string}
     * @memberof SubstitutableItemResponse
     */
    imageUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof SubstitutableItemResponse
     */
    itemDiscount?: number;
    /**
     * 
     * @type {string}
     * @memberof SubstitutableItemResponse
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof SubstitutableItemResponse
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof SubstitutableItemResponse
     */
    productCode?: string;
    /**
     * 
     * @type {string}
     * @memberof SubstitutableItemResponse
     */
    sku?: string;
    /**
     * 
     * @type {number}
     * @memberof SubstitutableItemResponse
     */
    unitPrice?: number;
    /**
     * 
     * @type {string}
     * @memberof SubstitutableItemResponse
     */
    upc?: string;
}
/**
 * 
 * @export
 * @interface SubstituteItem
 */
export interface SubstituteItem {
    /**
     * 
     * @type {number}
     * @memberof SubstituteItem
     */
    lineId?: number;
    /**
     * 
     * @type {string}
     * @memberof SubstituteItem
     */
    productCode?: string;
    /**
     * 
     * @type {number}
     * @memberof SubstituteItem
     */
    quantity?: number;
    /**
     * 
     * @type {SubstituteReason}
     * @memberof SubstituteItem
     */
    substituteReason?: SubstituteReason;
    /**
     * 
     * @type {string}
     * @memberof SubstituteItem
     */
    variationProductCode?: string;
}
/**
 * 
 * @export
 * @interface SubstituteItemsRequest
 */
export interface SubstituteItemsRequest {
    /**
     * 
     * @type {boolean}
     * @memberof SubstituteItemsRequest
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SubstituteItemsRequest
     */
    isUserAction?: boolean;
    /**
     * 
     * @type {Array<SubstituteItem>}
     * @memberof SubstituteItemsRequest
     */
    items?: Array<SubstituteItem>;
    /**
     * 
     * @type {number}
     * @memberof SubstituteItemsRequest
     */
    lineId?: number;
    /**
     * 
     * @type {number}
     * @memberof SubstituteItemsRequest
     */
    quantity?: number;
}
/**
 * 
 * @export
 * @interface SubstituteReason
 */
export interface SubstituteReason {
    /**
     * 
     * @type {string}
     * @memberof SubstituteReason
     */
    moreInfo?: string;
    /**
     * 
     * @type {string}
     * @memberof SubstituteReason
     */
    reasonCode?: string;
}
/**
 * 
 * @export
 * @interface Task
 */
export interface Task {
    /**
     * 
     * @type {{ [key: string]: FulfillmentAPIProductionProfileLink; }}
     * @memberof Task
     */
    links?: { [key: string]: FulfillmentAPIProductionProfileLink; };
    /**
     * 
     * @type {boolean}
     * @memberof Task
     */
    active?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Task
     */
    completed?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    completedDate?: string;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    description?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileTaskInput>}
     * @memberof Task
     */
    inputs?: Array<FulfillmentAPIProductionProfileTaskInput>;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Task
     */
    skippable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    subject?: string;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    taskId?: string;
}
/**
 * 
 * @export
 * @interface TaskComplete
 */
export interface TaskComplete {
    /**
     * 
     * @type {HandleOption}
     * @memberof TaskComplete
     */
    handleOption?: HandleOption;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof TaskComplete
     */
    taskBody?: { [key: string]: object; };
}
/**
 * 
 * @export
 * @interface TaskDefinition
 */
export interface TaskDefinition {
    /**
     * 
     * @type {string}
     * @memberof TaskDefinition
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskDefinition
     */
    id?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileTaskInput>}
     * @memberof TaskDefinition
     */
    inputs?: Array<FulfillmentAPIProductionProfileTaskInput>;
    /**
     * 
     * @type {string}
     * @memberof TaskDefinition
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof TaskDefinition
     */
    priority?: number;
    /**
     * 
     * @type {boolean}
     * @memberof TaskDefinition
     */
    skippable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TaskDefinition
     */
    subject?: string;
}
/**
 * 
 * @export
 * @interface TaskReason
 */
export interface TaskReason {
    /**
     * 
     * @type {string}
     * @memberof TaskReason
     */
    moreInfo?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskReason
     */
    reasonCode?: string;
}
/**
 * 
 * @export
 * @interface TemplateVariable
 */
export interface TemplateVariable {
    /**
     * 
     * @type {string}
     * @memberof TemplateVariable
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof TemplateVariable
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof TemplateVariable
     */
    type?: TemplateVariableTypeEnum;
}


/**
 * @export
 */
export const TemplateVariableTypeEnum = {
    Empty: '',
    QuestionMark: '?',
    Ampersand: '&',
    Slash: '/',
    Hash: '#',
    Star: '*'
} as const;
export type TemplateVariableTypeEnum = typeof TemplateVariableTypeEnum[keyof typeof TemplateVariableTypeEnum];

/**
 * 
 * @export
 * @interface TransferItem
 */
export interface TransferItem {
    /**
     * 
     * @type {boolean}
     * @memberof TransferItem
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TransferItem
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {number}
     * @memberof TransferItem
     */
    lineId?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferItem
     */
    quantity?: number;
    /**
     * 
     * @type {TransferredReason}
     * @memberof TransferItem
     */
    transferredReason?: TransferredReason;
}
/**
 * 
 * @export
 * @interface TransferItemsRequest
 */
export interface TransferItemsRequest {
    /**
     * 
     * @type {boolean}
     * @memberof TransferItemsRequest
     */
    isUserAction?: boolean;
    /**
     * 
     * @type {Array<TransferItem>}
     * @memberof TransferItemsRequest
     */
    items?: Array<TransferItem>;
}
/**
 * 
 * @export
 * @interface TransferShipment
 */
export interface TransferShipment {
    /**
     * 
     * @type {boolean}
     * @memberof TransferShipment
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TransferShipment
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TransferShipment
     */
    isUserAction?: boolean;
    /**
     * 
     * @type {Array<TransferItem>}
     * @memberof TransferShipment
     */
    items?: Array<TransferItem>;
    /**
     * 
     * @type {TransferredReason}
     * @memberof TransferShipment
     */
    transferredReason?: TransferredReason;
}
/**
 * 
 * @export
 * @interface TransferredItem
 */
export interface TransferredItem {
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    actualPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    allocatedQuantity?: number;
    /**
     * 
     * @type {boolean}
     * @memberof TransferredItem
     */
    allowsBackOrder?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TransferredItem
     */
    allowsFutureAllocate?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TransferredItem
     */
    allowsSubstitution?: boolean;
    /**
     * 
     * @type {FulfillmentAPIProductionProfileAppeasementReason}
     * @memberof TransferredItem
     */
    appeasementReason?: FulfillmentAPIProductionProfileAppeasementReason;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof TransferredItem
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentAPIProductionProfileAuditInfo}
     * @memberof TransferredItem
     */
    auditInfo?: FulfillmentAPIProductionProfileAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    backorderReleaseDate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TransferredItem
     */
    blockAssignment?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    cartItemId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof TransferredItem
     */
    childItemIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    creditCurrencyCode?: string;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    creditValue?: number;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof TransferredItem
     */
    data?: { [key: string]: object; };
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    duty?: number;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    expectedDeliveryDate?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileFulfillmentField>}
     * @memberof TransferredItem
     */
    fulfillmentFields?: Array<FulfillmentAPIProductionProfileFulfillmentField>;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileGiftCard>}
     * @memberof TransferredItem
     */
    giftCards?: Array<FulfillmentAPIProductionProfileGiftCard>;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    giftMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    goodsType?: TransferredItemGoodsTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    handling?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    handlingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    handlingTax?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    height?: number;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    imageUrl?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileInventoryTag>}
     * @memberof TransferredItem
     */
    inventoryTags?: Array<FulfillmentAPIProductionProfileInventoryTag>;
    /**
     * 
     * @type {boolean}
     * @memberof TransferredItem
     */
    isAssemblyRequired?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TransferredItem
     */
    isGift?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TransferredItem
     */
    isPackagedStandAlone?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TransferredItem
     */
    isReservedInventory?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TransferredItem
     */
    isTaxable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    itemDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    itemTax?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    length?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    lineId?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    lineItemAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    lineItemCost?: number;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    locatorName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TransferredItem
     */
    manageStock?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    optionAttributeFQN?: string;
    /**
     * 
     * @type {Array<FulfillmentAPIProductionProfileProductOption>}
     * @memberof TransferredItem
     */
    options?: Array<FulfillmentAPIProductionProfileProductOption>;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    originalLineId?: number;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    originalOrderItemId?: string;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    originalQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    overridePrice?: number;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    parentItemId?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    productCode?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    purchaseLocation?: string;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    quantity?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    readyForPickupQuantity?: number;
    /**
     * 
     * @type {RejectedReason}
     * @memberof TransferredItem
     */
    rejectedReason?: RejectedReason;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    shipping?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    shippingDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    shippingTax?: number;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    sku?: string;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    substituteQuantity?: number;
    /**
     * 
     * @type {object}
     * @memberof TransferredItem
     */
    taxData?: object;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    taxableHandling?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    taxableLineItemCost?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    taxableShipping?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    transferQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    trueTransferQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    unitPrice?: number;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    upc?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    variationProductCode?: string;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    weight?: number;
    /**
     * 
     * @type {string}
     * @memberof TransferredItem
     */
    weightUnit?: string;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    weightedDutyAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    weightedHandlingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    weightedHandlingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    weightedLineItemTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    weightedShipmentAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    weightedShippingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    weightedShippingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof TransferredItem
     */
    width?: number;
}


/**
 * @export
 */
export const TransferredItemGoodsTypeEnum = {
    Physical: 'Physical',
    Digital: 'Digital',
    DigitalCredit: 'DigitalCredit',
    DigitalGiftCard: 'DigitalGiftCard',
    Service: 'Service'
} as const;
export type TransferredItemGoodsTypeEnum = typeof TransferredItemGoodsTypeEnum[keyof typeof TransferredItemGoodsTypeEnum];

/**
 * 
 * @export
 * @interface TransferredReason
 */
export interface TransferredReason {
    /**
     * 
     * @type {string}
     * @memberof TransferredReason
     */
    moreInfo?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferredReason
     */
    reasonCode?: string;
}
/**
 * 
 * @export
 * @interface UpdateContactRequest
 */
export interface UpdateContactRequest {
    /**
     * 
     * @type {FulfillmentAPIProductionProfileContact}
     * @memberof UpdateContactRequest
     */
    contact?: FulfillmentAPIProductionProfileContact;
}
/**
 * 
 * @export
 * @interface UriTemplate
 */
export interface UriTemplate {
    /**
     * 
     * @type {Array<string>}
     * @memberof UriTemplate
     */
    variableNames?: Array<string>;
    /**
     * 
     * @type {Array<TemplateVariable>}
     * @memberof UriTemplate
     */
    variables?: Array<TemplateVariable>;
}
/**
 * 
 * @export
 * @interface WorkflowProcessVariable
 */
export interface WorkflowProcessVariable {
    /**
     * 
     * @type {string}
     * @memberof WorkflowProcessVariable
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkflowProcessVariable
     */
    type?: WorkflowProcessVariableTypeEnum;
}


/**
 * @export
 */
export const WorkflowProcessVariableTypeEnum = {
    String: 'STRING',
    Integer: 'INTEGER',
    Number: 'NUMBER',
    Boolean: 'BOOLEAN',
    Object: 'OBJECT',
    List: 'LIST',
    Unknown: 'UNKNOWN'
} as const;
export type WorkflowProcessVariableTypeEnum = typeof WorkflowProcessVariableTypeEnum[keyof typeof WorkflowProcessVariableTypeEnum];

