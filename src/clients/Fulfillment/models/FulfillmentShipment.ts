/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Fulfillment Service
 * OpenAPI Spec for Kibo Fulfillment Service
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AuditInfo0 } from './AuditInfo0';
import {
    AuditInfo0FromJSON,
    AuditInfo0FromJSONTyped,
    AuditInfo0ToJSON,
} from './AuditInfo0';
import type { FulfillmentAppeasementReason } from './FulfillmentAppeasementReason';
import {
    FulfillmentAppeasementReasonFromJSON,
    FulfillmentAppeasementReasonFromJSONTyped,
    FulfillmentAppeasementReasonToJSON,
} from './FulfillmentAppeasementReason';
import type { FulfillmentCanceledItem } from './FulfillmentCanceledItem';
import {
    FulfillmentCanceledItemFromJSON,
    FulfillmentCanceledItemFromJSONTyped,
    FulfillmentCanceledItemToJSON,
} from './FulfillmentCanceledItem';
import type { FulfillmentChangeMessage } from './FulfillmentChangeMessage';
import {
    FulfillmentChangeMessageFromJSON,
    FulfillmentChangeMessageFromJSONTyped,
    FulfillmentChangeMessageToJSON,
} from './FulfillmentChangeMessage';
import type { FulfillmentContact } from './FulfillmentContact';
import {
    FulfillmentContactFromJSON,
    FulfillmentContactFromJSONTyped,
    FulfillmentContactToJSON,
} from './FulfillmentContact';
import type { FulfillmentCustomer } from './FulfillmentCustomer';
import {
    FulfillmentCustomerFromJSON,
    FulfillmentCustomerFromJSONTyped,
    FulfillmentCustomerToJSON,
} from './FulfillmentCustomer';
import type { FulfillmentDestination } from './FulfillmentDestination';
import {
    FulfillmentDestinationFromJSON,
    FulfillmentDestinationFromJSONTyped,
    FulfillmentDestinationToJSON,
} from './FulfillmentDestination';
import type { FulfillmentFulfillmentShopperNotes } from './FulfillmentFulfillmentShopperNotes';
import {
    FulfillmentFulfillmentShopperNotesFromJSON,
    FulfillmentFulfillmentShopperNotesFromJSONTyped,
    FulfillmentFulfillmentShopperNotesToJSON,
} from './FulfillmentFulfillmentShopperNotes';
import type { FulfillmentItem } from './FulfillmentItem';
import {
    FulfillmentItemFromJSON,
    FulfillmentItemFromJSONTyped,
    FulfillmentItemToJSON,
} from './FulfillmentItem';
import type { FulfillmentPackage } from './FulfillmentPackage';
import {
    FulfillmentPackageFromJSON,
    FulfillmentPackageFromJSONTyped,
    FulfillmentPackageToJSON,
} from './FulfillmentPackage';
import type { FulfillmentShipmentNote } from './FulfillmentShipmentNote';
import {
    FulfillmentShipmentNoteFromJSON,
    FulfillmentShipmentNoteFromJSONTyped,
    FulfillmentShipmentNoteToJSON,
} from './FulfillmentShipmentNote';
import type { FulfillmentShipmentStatusReason } from './FulfillmentShipmentStatusReason';
import {
    FulfillmentShipmentStatusReasonFromJSON,
    FulfillmentShipmentStatusReasonFromJSONTyped,
    FulfillmentShipmentStatusReasonToJSON,
} from './FulfillmentShipmentStatusReason';
import type { FulfillmentWorkflowState } from './FulfillmentWorkflowState';
import {
    FulfillmentWorkflowStateFromJSON,
    FulfillmentWorkflowStateFromJSONTyped,
    FulfillmentWorkflowStateToJSON,
} from './FulfillmentWorkflowState';
import type { ReassignedItem } from './ReassignedItem';
import {
    ReassignedItemFromJSON,
    ReassignedItemFromJSONTyped,
    ReassignedItemToJSON,
} from './ReassignedItem';
import type { RejectedItem } from './RejectedItem';
import {
    RejectedItemFromJSON,
    RejectedItemFromJSONTyped,
    RejectedItemToJSON,
} from './RejectedItem';
import type { TransferredItem } from './TransferredItem';
import {
    TransferredItemFromJSON,
    TransferredItemFromJSONTyped,
    TransferredItemToJSON,
} from './TransferredItem';

/**
 * 
 * @export
 * @interface FulfillmentShipment
 */
export interface FulfillmentShipment {
    /**
     * 
     * @type {Date}
     * @memberof FulfillmentShipment
     */
    acceptedDate?: Date;
    /**
     * 
     * @type {FulfillmentContact}
     * @memberof FulfillmentShipment
     */
    alternateContact?: FulfillmentContact;
    /**
     * 
     * @type {FulfillmentAppeasementReason}
     * @memberof FulfillmentShipment
     */
    appeasementReason?: FulfillmentAppeasementReason;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentShipment
     */
    assignedLocationCode?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentShipment
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {AuditInfo0}
     * @memberof FulfillmentShipment
     */
    auditInfo?: AuditInfo0;
    /**
     * 
     * @type {Array<FulfillmentCanceledItem>}
     * @memberof FulfillmentShipment
     */
    canceledItems?: Array<FulfillmentCanceledItem>;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentShipment
     */
    cartId?: string;
    /**
     * 
     * @type {Array<FulfillmentChangeMessage>}
     * @memberof FulfillmentShipment
     */
    changeMessages?: Array<FulfillmentChangeMessage>;
    /**
     * 
     * @type {Array<number>}
     * @memberof FulfillmentShipment
     */
    childShipmentNumbers?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentShipment
     */
    currencyCode?: string;
    /**
     * 
     * @type {FulfillmentCustomer}
     * @memberof FulfillmentShipment
     */
    customer?: FulfillmentCustomer;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentShipment
     */
    customerAccountId?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentShipment
     */
    customerAddressId?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentShipment
     */
    customerTaxId?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentShipment
     */
    data?: { [key: string]: object; };
    /**
     * 
     * @type {FulfillmentDestination}
     * @memberof FulfillmentShipment
     */
    destination?: FulfillmentDestination;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentShipment
     */
    dutyAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentShipment
     */
    dutyTotal?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentShipment
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentShipment
     */
    externalOrderId?: string;
    /**
     * 
     * @type {Date}
     * @memberof FulfillmentShipment
     */
    fulfillmentDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentShipment
     */
    fulfillmentLocationCode?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentShipment
     */
    fulfillmentStatus?: FulfillmentShipmentFulfillmentStatusEnum;
    /**
     * 
     * @type {Date}
     * @memberof FulfillmentShipment
     */
    futureDate?: Date;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentShipment
     */
    handlingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentShipment
     */
    handlingSubtotal?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentShipment
     */
    handlingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentShipment
     */
    handlingTaxTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentShipment
     */
    handlingTotal?: number;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentShipment
     */
    isAutoAssigned?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentShipment
     */
    isExpress?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentShipment
     */
    isHistoricalImport?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentShipment
     */
    isOptInForSms?: boolean;
    /**
     * 
     * @type {Array<FulfillmentItem>}
     * @memberof FulfillmentShipment
     */
    items?: Array<FulfillmentItem>;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentShipment
     */
    lineItemSubtotal?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentShipment
     */
    lineItemTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentShipment
     */
    lineItemTaxTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentShipment
     */
    lineItemTotal?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentShipment
     */
    orderId: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentShipment
     */
    orderNumber: number;
    /**
     * 
     * @type {Date}
     * @memberof FulfillmentShipment
     */
    orderSubmitDate?: Date;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentShipment
     */
    originalShipmentNumber?: number;
    /**
     * 
     * @type {Array<FulfillmentPackage>}
     * @memberof FulfillmentShipment
     */
    packages?: Array<FulfillmentPackage>;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentShipment
     */
    parentCheckoutNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentShipment
     */
    parentShipmentNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentShipment
     */
    pickStatus?: FulfillmentShipmentPickStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentShipment
     */
    pickType?: FulfillmentShipmentPickTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentShipment
     */
    pickWaveNumber?: number;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentShipment
     */
    pickupInfo?: { [key: string]: object; };
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentShipment
     */
    readyForPickup?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof FulfillmentShipment
     */
    readyForPickupDate?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentShipment
     */
    readyToCapture?: boolean;
    /**
     * 
     * @type {Array<ReassignedItem>}
     * @memberof FulfillmentShipment
     */
    reassignedItems?: Array<ReassignedItem>;
    /**
     * 
     * @type {Date}
     * @memberof FulfillmentShipment
     */
    receivedDate?: Date;
    /**
     * 
     * @type {Array<RejectedItem>}
     * @memberof FulfillmentShipment
     */
    rejectedItems?: Array<RejectedItem>;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentShipment
     */
    sentCustomerAtStoreNotification?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentShipment
     */
    sentCustomerInTransitNotification?: boolean;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentShipment
     */
    shipmentAdjustment?: number;
    /**
     * 
     * @type {Array<FulfillmentShipmentNote>}
     * @memberof FulfillmentShipment
     */
    shipmentNotes?: Array<FulfillmentShipmentNote>;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentShipment
     */
    shipmentNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentShipment
     */
    shipmentStatus?: FulfillmentShipmentShipmentStatusEnum;
    /**
     * 
     * @type {FulfillmentShipmentStatusReason}
     * @memberof FulfillmentShipment
     */
    shipmentStatusReason?: FulfillmentShipmentStatusReason;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentShipment
     */
    shipmentType: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentShipment
     */
    shippingAdjustment?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentShipment
     */
    shippingMethodCode?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentShipment
     */
    shippingMethodName?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentShipment
     */
    shippingSubtotal?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentShipment
     */
    shippingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentShipment
     */
    shippingTaxTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentShipment
     */
    shippingTotal?: number;
    /**
     * 
     * @type {FulfillmentFulfillmentShopperNotes}
     * @memberof FulfillmentShipment
     */
    shopperNotes?: FulfillmentFulfillmentShopperNotes;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentShipment
     */
    siteId?: number;
    /**
     * 
     * @type {object}
     * @memberof FulfillmentShipment
     */
    taxData?: object;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentShipment
     */
    tenantId?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentShipment
     */
    total: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof FulfillmentShipment
     */
    transferShipmentNumbers?: Array<number>;
    /**
     * 
     * @type {Array<TransferredItem>}
     * @memberof FulfillmentShipment
     */
    transferredItems?: Array<TransferredItem>;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentShipment
     */
    transitTime?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentShipment
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentShipment
     */
    workflowProcessContainerId?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentShipment
     */
    workflowProcessId?: string;
    /**
     * 
     * @type {FulfillmentWorkflowState}
     * @memberof FulfillmentShipment
     */
    workflowState?: FulfillmentWorkflowState;
}


/**
 * @export
 */
export const FulfillmentShipmentFulfillmentStatusEnum = {
    Fulfilled: 'Fulfilled',
    NotFulfilled: 'NotFulfilled'
} as const;
export type FulfillmentShipmentFulfillmentStatusEnum = typeof FulfillmentShipmentFulfillmentStatusEnum[keyof typeof FulfillmentShipmentFulfillmentStatusEnum];

/**
 * @export
 */
export const FulfillmentShipmentPickStatusEnum = {
    Available: 'AVAILABLE',
    Complete: 'COMPLETE',
    InWave: 'IN_WAVE',
    Picked: 'PICKED',
    Transfer: 'TRANSFER'
} as const;
export type FulfillmentShipmentPickStatusEnum = typeof FulfillmentShipmentPickStatusEnum[keyof typeof FulfillmentShipmentPickStatusEnum];

/**
 * @export
 */
export const FulfillmentShipmentPickTypeEnum = {
    Multiple: 'MULTIPLE',
    Normal: 'NORMAL',
    Single: 'SINGLE'
} as const;
export type FulfillmentShipmentPickTypeEnum = typeof FulfillmentShipmentPickTypeEnum[keyof typeof FulfillmentShipmentPickTypeEnum];

/**
 * @export
 */
export const FulfillmentShipmentShipmentStatusEnum = {
    Backorder: 'BACKORDER',
    Canceled: 'CANCELED',
    CustomerCare: 'CUSTOMER_CARE',
    Deleted: 'DELETED',
    Fulfilled: 'FULFILLED',
    Future: 'FUTURE',
    Ready: 'READY',
    Reassigned: 'REASSIGNED'
} as const;
export type FulfillmentShipmentShipmentStatusEnum = typeof FulfillmentShipmentShipmentStatusEnum[keyof typeof FulfillmentShipmentShipmentStatusEnum];


/**
 * Check if a given object implements the FulfillmentShipment interface.
 */
export function instanceOfFulfillmentShipment(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "orderId" in value;
    isInstance = isInstance && "orderNumber" in value;
    isInstance = isInstance && "shipmentType" in value;
    isInstance = isInstance && "total" in value;

    return isInstance;
}

export function FulfillmentShipmentFromJSON(json: any): FulfillmentShipment {
    return FulfillmentShipmentFromJSONTyped(json, false);
}

export function FulfillmentShipmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): FulfillmentShipment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'acceptedDate': !exists(json, 'acceptedDate') ? undefined : (new Date(json['acceptedDate'])),
        'alternateContact': !exists(json, 'alternateContact') ? undefined : FulfillmentContactFromJSON(json['alternateContact']),
        'appeasementReason': !exists(json, 'appeasementReason') ? undefined : FulfillmentAppeasementReasonFromJSON(json['appeasementReason']),
        'assignedLocationCode': !exists(json, 'assignedLocationCode') ? undefined : json['assignedLocationCode'],
        'attributes': !exists(json, 'attributes') ? undefined : json['attributes'],
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AuditInfo0FromJSON(json['auditInfo']),
        'canceledItems': !exists(json, 'canceledItems') ? undefined : ((json['canceledItems'] as Array<any>).map(FulfillmentCanceledItemFromJSON)),
        'cartId': !exists(json, 'cartId') ? undefined : json['cartId'],
        'changeMessages': !exists(json, 'changeMessages') ? undefined : ((json['changeMessages'] as Array<any>).map(FulfillmentChangeMessageFromJSON)),
        'childShipmentNumbers': !exists(json, 'childShipmentNumbers') ? undefined : json['childShipmentNumbers'],
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'customer': !exists(json, 'customer') ? undefined : FulfillmentCustomerFromJSON(json['customer']),
        'customerAccountId': !exists(json, 'customerAccountId') ? undefined : json['customerAccountId'],
        'customerAddressId': !exists(json, 'customerAddressId') ? undefined : json['customerAddressId'],
        'customerTaxId': !exists(json, 'customerTaxId') ? undefined : json['customerTaxId'],
        'data': !exists(json, 'data') ? undefined : json['data'],
        'destination': !exists(json, 'destination') ? undefined : FulfillmentDestinationFromJSON(json['destination']),
        'dutyAdjustment': !exists(json, 'dutyAdjustment') ? undefined : json['dutyAdjustment'],
        'dutyTotal': !exists(json, 'dutyTotal') ? undefined : json['dutyTotal'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'externalOrderId': !exists(json, 'externalOrderId') ? undefined : json['externalOrderId'],
        'fulfillmentDate': !exists(json, 'fulfillmentDate') ? undefined : (new Date(json['fulfillmentDate'])),
        'fulfillmentLocationCode': !exists(json, 'fulfillmentLocationCode') ? undefined : json['fulfillmentLocationCode'],
        'fulfillmentStatus': !exists(json, 'fulfillmentStatus') ? undefined : json['fulfillmentStatus'],
        'futureDate': !exists(json, 'futureDate') ? undefined : (new Date(json['futureDate'])),
        'handlingAdjustment': !exists(json, 'handlingAdjustment') ? undefined : json['handlingAdjustment'],
        'handlingSubtotal': !exists(json, 'handlingSubtotal') ? undefined : json['handlingSubtotal'],
        'handlingTaxAdjustment': !exists(json, 'handlingTaxAdjustment') ? undefined : json['handlingTaxAdjustment'],
        'handlingTaxTotal': !exists(json, 'handlingTaxTotal') ? undefined : json['handlingTaxTotal'],
        'handlingTotal': !exists(json, 'handlingTotal') ? undefined : json['handlingTotal'],
        'isAutoAssigned': !exists(json, 'isAutoAssigned') ? undefined : json['isAutoAssigned'],
        'isExpress': !exists(json, 'isExpress') ? undefined : json['isExpress'],
        'isHistoricalImport': !exists(json, 'isHistoricalImport') ? undefined : json['isHistoricalImport'],
        'isOptInForSms': !exists(json, 'isOptInForSms') ? undefined : json['isOptInForSms'],
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(FulfillmentItemFromJSON)),
        'lineItemSubtotal': !exists(json, 'lineItemSubtotal') ? undefined : json['lineItemSubtotal'],
        'lineItemTaxAdjustment': !exists(json, 'lineItemTaxAdjustment') ? undefined : json['lineItemTaxAdjustment'],
        'lineItemTaxTotal': !exists(json, 'lineItemTaxTotal') ? undefined : json['lineItemTaxTotal'],
        'lineItemTotal': !exists(json, 'lineItemTotal') ? undefined : json['lineItemTotal'],
        'orderId': json['orderId'],
        'orderNumber': json['orderNumber'],
        'orderSubmitDate': !exists(json, 'orderSubmitDate') ? undefined : (new Date(json['orderSubmitDate'])),
        'originalShipmentNumber': !exists(json, 'originalShipmentNumber') ? undefined : json['originalShipmentNumber'],
        'packages': !exists(json, 'packages') ? undefined : ((json['packages'] as Array<any>).map(FulfillmentPackageFromJSON)),
        'parentCheckoutNumber': !exists(json, 'parentCheckoutNumber') ? undefined : json['parentCheckoutNumber'],
        'parentShipmentNumber': !exists(json, 'parentShipmentNumber') ? undefined : json['parentShipmentNumber'],
        'pickStatus': !exists(json, 'pickStatus') ? undefined : json['pickStatus'],
        'pickType': !exists(json, 'pickType') ? undefined : json['pickType'],
        'pickWaveNumber': !exists(json, 'pickWaveNumber') ? undefined : json['pickWaveNumber'],
        'pickupInfo': !exists(json, 'pickupInfo') ? undefined : json['pickupInfo'],
        'readyForPickup': !exists(json, 'readyForPickup') ? undefined : json['readyForPickup'],
        'readyForPickupDate': !exists(json, 'readyForPickupDate') ? undefined : (new Date(json['readyForPickupDate'])),
        'readyToCapture': !exists(json, 'readyToCapture') ? undefined : json['readyToCapture'],
        'reassignedItems': !exists(json, 'reassignedItems') ? undefined : ((json['reassignedItems'] as Array<any>).map(ReassignedItemFromJSON)),
        'receivedDate': !exists(json, 'receivedDate') ? undefined : (new Date(json['receivedDate'])),
        'rejectedItems': !exists(json, 'rejectedItems') ? undefined : ((json['rejectedItems'] as Array<any>).map(RejectedItemFromJSON)),
        'sentCustomerAtStoreNotification': !exists(json, 'sentCustomerAtStoreNotification') ? undefined : json['sentCustomerAtStoreNotification'],
        'sentCustomerInTransitNotification': !exists(json, 'sentCustomerInTransitNotification') ? undefined : json['sentCustomerInTransitNotification'],
        'shipmentAdjustment': !exists(json, 'shipmentAdjustment') ? undefined : json['shipmentAdjustment'],
        'shipmentNotes': !exists(json, 'shipmentNotes') ? undefined : ((json['shipmentNotes'] as Array<any>).map(FulfillmentShipmentNoteFromJSON)),
        'shipmentNumber': !exists(json, 'shipmentNumber') ? undefined : json['shipmentNumber'],
        'shipmentStatus': !exists(json, 'shipmentStatus') ? undefined : json['shipmentStatus'],
        'shipmentStatusReason': !exists(json, 'shipmentStatusReason') ? undefined : FulfillmentShipmentStatusReasonFromJSON(json['shipmentStatusReason']),
        'shipmentType': json['shipmentType'],
        'shippingAdjustment': !exists(json, 'shippingAdjustment') ? undefined : json['shippingAdjustment'],
        'shippingMethodCode': !exists(json, 'shippingMethodCode') ? undefined : json['shippingMethodCode'],
        'shippingMethodName': !exists(json, 'shippingMethodName') ? undefined : json['shippingMethodName'],
        'shippingSubtotal': !exists(json, 'shippingSubtotal') ? undefined : json['shippingSubtotal'],
        'shippingTaxAdjustment': !exists(json, 'shippingTaxAdjustment') ? undefined : json['shippingTaxAdjustment'],
        'shippingTaxTotal': !exists(json, 'shippingTaxTotal') ? undefined : json['shippingTaxTotal'],
        'shippingTotal': !exists(json, 'shippingTotal') ? undefined : json['shippingTotal'],
        'shopperNotes': !exists(json, 'shopperNotes') ? undefined : FulfillmentFulfillmentShopperNotesFromJSON(json['shopperNotes']),
        'siteId': !exists(json, 'siteId') ? undefined : json['siteId'],
        'taxData': !exists(json, 'taxData') ? undefined : json['taxData'],
        'tenantId': !exists(json, 'tenantId') ? undefined : json['tenantId'],
        'total': json['total'],
        'transferShipmentNumbers': !exists(json, 'transferShipmentNumbers') ? undefined : json['transferShipmentNumbers'],
        'transferredItems': !exists(json, 'transferredItems') ? undefined : ((json['transferredItems'] as Array<any>).map(TransferredItemFromJSON)),
        'transitTime': !exists(json, 'transitTime') ? undefined : json['transitTime'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'workflowProcessContainerId': !exists(json, 'workflowProcessContainerId') ? undefined : json['workflowProcessContainerId'],
        'workflowProcessId': !exists(json, 'workflowProcessId') ? undefined : json['workflowProcessId'],
        'workflowState': !exists(json, 'workflowState') ? undefined : FulfillmentWorkflowStateFromJSON(json['workflowState']),
    };
}

export function FulfillmentShipmentToJSON(value?: FulfillmentShipment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'acceptedDate': value.acceptedDate === undefined ? undefined : (value.acceptedDate.toISOString()),
        'alternateContact': FulfillmentContactToJSON(value.alternateContact),
        'appeasementReason': FulfillmentAppeasementReasonToJSON(value.appeasementReason),
        'assignedLocationCode': value.assignedLocationCode,
        'attributes': value.attributes,
        'auditInfo': AuditInfo0ToJSON(value.auditInfo),
        'canceledItems': value.canceledItems === undefined ? undefined : ((value.canceledItems as Array<any>).map(FulfillmentCanceledItemToJSON)),
        'cartId': value.cartId,
        'changeMessages': value.changeMessages === undefined ? undefined : ((value.changeMessages as Array<any>).map(FulfillmentChangeMessageToJSON)),
        'childShipmentNumbers': value.childShipmentNumbers,
        'currencyCode': value.currencyCode,
        'customer': FulfillmentCustomerToJSON(value.customer),
        'customerAccountId': value.customerAccountId,
        'customerAddressId': value.customerAddressId,
        'customerTaxId': value.customerTaxId,
        'data': value.data,
        'destination': FulfillmentDestinationToJSON(value.destination),
        'dutyAdjustment': value.dutyAdjustment,
        'dutyTotal': value.dutyTotal,
        'email': value.email,
        'externalOrderId': value.externalOrderId,
        'fulfillmentDate': value.fulfillmentDate === undefined ? undefined : (value.fulfillmentDate.toISOString()),
        'fulfillmentLocationCode': value.fulfillmentLocationCode,
        'fulfillmentStatus': value.fulfillmentStatus,
        'futureDate': value.futureDate === undefined ? undefined : (value.futureDate.toISOString()),
        'handlingAdjustment': value.handlingAdjustment,
        'handlingSubtotal': value.handlingSubtotal,
        'handlingTaxAdjustment': value.handlingTaxAdjustment,
        'handlingTaxTotal': value.handlingTaxTotal,
        'handlingTotal': value.handlingTotal,
        'isAutoAssigned': value.isAutoAssigned,
        'isExpress': value.isExpress,
        'isHistoricalImport': value.isHistoricalImport,
        'isOptInForSms': value.isOptInForSms,
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(FulfillmentItemToJSON)),
        'lineItemSubtotal': value.lineItemSubtotal,
        'lineItemTaxAdjustment': value.lineItemTaxAdjustment,
        'lineItemTaxTotal': value.lineItemTaxTotal,
        'lineItemTotal': value.lineItemTotal,
        'orderId': value.orderId,
        'orderNumber': value.orderNumber,
        'orderSubmitDate': value.orderSubmitDate === undefined ? undefined : (value.orderSubmitDate.toISOString()),
        'originalShipmentNumber': value.originalShipmentNumber,
        'packages': value.packages === undefined ? undefined : ((value.packages as Array<any>).map(FulfillmentPackageToJSON)),
        'parentCheckoutNumber': value.parentCheckoutNumber,
        'parentShipmentNumber': value.parentShipmentNumber,
        'pickStatus': value.pickStatus,
        'pickType': value.pickType,
        'pickWaveNumber': value.pickWaveNumber,
        'pickupInfo': value.pickupInfo,
        'readyForPickup': value.readyForPickup,
        'readyForPickupDate': value.readyForPickupDate === undefined ? undefined : (value.readyForPickupDate.toISOString()),
        'readyToCapture': value.readyToCapture,
        'reassignedItems': value.reassignedItems === undefined ? undefined : ((value.reassignedItems as Array<any>).map(ReassignedItemToJSON)),
        'receivedDate': value.receivedDate === undefined ? undefined : (value.receivedDate.toISOString()),
        'rejectedItems': value.rejectedItems === undefined ? undefined : ((value.rejectedItems as Array<any>).map(RejectedItemToJSON)),
        'sentCustomerAtStoreNotification': value.sentCustomerAtStoreNotification,
        'sentCustomerInTransitNotification': value.sentCustomerInTransitNotification,
        'shipmentAdjustment': value.shipmentAdjustment,
        'shipmentNotes': value.shipmentNotes === undefined ? undefined : ((value.shipmentNotes as Array<any>).map(FulfillmentShipmentNoteToJSON)),
        'shipmentNumber': value.shipmentNumber,
        'shipmentStatus': value.shipmentStatus,
        'shipmentStatusReason': FulfillmentShipmentStatusReasonToJSON(value.shipmentStatusReason),
        'shipmentType': value.shipmentType,
        'shippingAdjustment': value.shippingAdjustment,
        'shippingMethodCode': value.shippingMethodCode,
        'shippingMethodName': value.shippingMethodName,
        'shippingSubtotal': value.shippingSubtotal,
        'shippingTaxAdjustment': value.shippingTaxAdjustment,
        'shippingTaxTotal': value.shippingTaxTotal,
        'shippingTotal': value.shippingTotal,
        'shopperNotes': FulfillmentFulfillmentShopperNotesToJSON(value.shopperNotes),
        'siteId': value.siteId,
        'taxData': value.taxData,
        'tenantId': value.tenantId,
        'total': value.total,
        'transferShipmentNumbers': value.transferShipmentNumbers,
        'transferredItems': value.transferredItems === undefined ? undefined : ((value.transferredItems as Array<any>).map(TransferredItemToJSON)),
        'transitTime': value.transitTime,
        'userId': value.userId,
        'workflowProcessContainerId': value.workflowProcessContainerId,
        'workflowProcessId': value.workflowProcessId,
        'workflowState': FulfillmentWorkflowStateToJSON(value.workflowState),
    };
}
