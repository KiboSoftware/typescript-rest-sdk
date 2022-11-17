/* tslint:disable */
/* eslint-disable */
/**
 * Kibo SubscriptionRuntime Service
 * OpenAPI Spec for Kibo SubscriptionRuntime Service
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AuditInfo } from './AuditInfo';
import {
    AuditInfoFromJSON,
    AuditInfoFromJSONTyped,
    AuditInfoToJSON,
} from './AuditInfo';
import type { ChangeMessage } from './ChangeMessage';
import {
    ChangeMessageFromJSON,
    ChangeMessageFromJSONTyped,
    ChangeMessageToJSON,
} from './ChangeMessage';
import type { PackageItem } from './PackageItem';
import {
    PackageItemFromJSON,
    PackageItemFromJSONTyped,
    PackageItemToJSON,
} from './PackageItem';
import type { PackageMeasurements } from './PackageMeasurements';
import {
    PackageMeasurementsFromJSON,
    PackageMeasurementsFromJSONTyped,
    PackageMeasurementsToJSON,
} from './PackageMeasurements';
import type { PackingSlipItemDetail } from './PackingSlipItemDetail';
import {
    PackingSlipItemDetailFromJSON,
    PackingSlipItemDetailFromJSONTyped,
    PackingSlipItemDetailToJSON,
} from './PackingSlipItemDetail';
import type { Tracking } from './Tracking';
import {
    TrackingFromJSON,
    TrackingFromJSONTyped,
    TrackingToJSON,
} from './Tracking';

/**
 * Describes a package that will be shipped to somebody
 * @export
 * @interface Package
 */
export interface Package {
    /**
     * Code describing the shipping method.
     * @type {string}
     * @memberof Package
     */
    shippingMethodCode?: string | null;
    /**
     * Name of the shipping method
     * @type {string}
     * @memberof Package
     */
    shippingMethodName?: string | null;
    /**
     * ID of the related shipment
     * @type {string}
     * @memberof Package
     */
    shipmentId?: string | null;
    /**
     * Tracking number of this package (to support classic use cases)
     * @type {string}
     * @memberof Package
     */
    trackingNumber?: string | null;
    /**
     * Tracking number of this package
     * @type {Array<string>}
     * @memberof Package
     */
    trackingNumbers?: Array<string> | null;
    /**
     * Packaging type of this package
     * @type {string}
     * @memberof Package
     */
    packagingType?: string | null;
    /**
     * If there is a shipping label present for this Package, this will be set to true
     * @type {boolean}
     * @memberof Package
     */
    hasLabel?: boolean;
    /**
     * 
     * @type {PackageMeasurements}
     * @memberof Package
     */
    measurements?: PackageMeasurements;
    /**
     * Carrier of this package
     * @type {string}
     * @memberof Package
     */
    carrier?: string | null;
    /**
     * SignatureRequired for this package
     * @type {boolean}
     * @memberof Package
     */
    signatureRequired?: boolean | null;
    /**
     * Tracking number and url data for this package
     * @type {Array<Tracking>}
     * @memberof Package
     */
    trackings?: Array<Tracking> | null;
    /**
     * PackingSlipItemDetails for this package
     * @type {Array<PackingSlipItemDetail>}
     * @memberof Package
     */
    packingSlipItemDetails?: Array<PackingSlipItemDetail> | null;
    /**
     * PackingSlipNumber for this package
     * @type {number}
     * @memberof Package
     */
    packingSlipNumber?: number | null;
    /**
     * 
     * @type {Array<Tracking>}
     * @memberof Package
     */
    returnTrackings?: Array<Tracking> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Package
     */
    returnTrackingNumbers?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof Package
     */
    returnCarrier?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Package
     */
    packageId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Package
     */
    manifestId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Package
     */
    labelFormat?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Package
     */
    integratorId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Package
     */
    fxcbPackNotificationId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Package
     */
    fxcbDocumentsUrl?: string | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof Package
     */
    attributes?: { [key: string]: any; } | null;
    /**
     * ID of the fulfillment unit.
     * @type {string}
     * @memberof Package
     */
    id?: string | null;
    /**
     * A human-readable identifier for this fulfillment unit.  If not set on create, will be autogenerated as a string of the form
     *     {fulfillmentUnitType} #{next available int}
     * @type {string}
     * @memberof Package
     */
    code?: string | null;
    /**
     * Status of the fulfillment unit
     * See FulfillmentStatusConst
     * @type {string}
     * @memberof Package
     */
    status?: string | null;
    /**
     * List of items in the fulfillment unit
     * @type {Array<PackageItem>}
     * @memberof Package
     */
    items?: Array<PackageItem> | null;
    /**
     * Date of the pickup
     * @type {Date}
     * @memberof Package
     */
    fulfillmentDate?: Date | null;
    /**
     * Location code from which to obtain this item
     * @type {string}
     * @memberof Package
     */
    fulfillmentLocationCode?: string | null;
    /**
     * 
     * @type {AuditInfo}
     * @memberof Package
     */
    auditInfo?: AuditInfo;
    /**
     * Actions that can be taken on this fulfillment unit
     * @type {Array<string>}
     * @memberof Package
     */
    availableActions?: Array<string> | null;
    /**
     * Change messages related to the fulfillment unit.
     * @type {Array<ChangeMessage>}
     * @memberof Package
     */
    changeMessages?: Array<ChangeMessage> | null;
}

/**
 * Check if a given object implements the Package interface.
 */
export function instanceOfPackage(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PackageFromJSON(json: any): Package {
    return PackageFromJSONTyped(json, false);
}

export function PackageFromJSONTyped(json: any, ignoreDiscriminator: boolean): Package {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'shippingMethodCode': !exists(json, 'shippingMethodCode') ? undefined : json['shippingMethodCode'],
        'shippingMethodName': !exists(json, 'shippingMethodName') ? undefined : json['shippingMethodName'],
        'shipmentId': !exists(json, 'shipmentId') ? undefined : json['shipmentId'],
        'trackingNumber': !exists(json, 'trackingNumber') ? undefined : json['trackingNumber'],
        'trackingNumbers': !exists(json, 'trackingNumbers') ? undefined : json['trackingNumbers'],
        'packagingType': !exists(json, 'packagingType') ? undefined : json['packagingType'],
        'hasLabel': !exists(json, 'hasLabel') ? undefined : json['hasLabel'],
        'measurements': !exists(json, 'measurements') ? undefined : PackageMeasurementsFromJSON(json['measurements']),
        'carrier': !exists(json, 'carrier') ? undefined : json['carrier'],
        'signatureRequired': !exists(json, 'signatureRequired') ? undefined : json['signatureRequired'],
        'trackings': !exists(json, 'trackings') ? undefined : (json['trackings'] === null ? null : (json['trackings'] as Array<any>).map(TrackingFromJSON)),
        'packingSlipItemDetails': !exists(json, 'packingSlipItemDetails') ? undefined : (json['packingSlipItemDetails'] === null ? null : (json['packingSlipItemDetails'] as Array<any>).map(PackingSlipItemDetailFromJSON)),
        'packingSlipNumber': !exists(json, 'packingSlipNumber') ? undefined : json['packingSlipNumber'],
        'returnTrackings': !exists(json, 'returnTrackings') ? undefined : (json['returnTrackings'] === null ? null : (json['returnTrackings'] as Array<any>).map(TrackingFromJSON)),
        'returnTrackingNumbers': !exists(json, 'returnTrackingNumbers') ? undefined : json['returnTrackingNumbers'],
        'returnCarrier': !exists(json, 'returnCarrier') ? undefined : json['returnCarrier'],
        'packageId': !exists(json, 'packageId') ? undefined : json['packageId'],
        'manifestId': !exists(json, 'manifestId') ? undefined : json['manifestId'],
        'labelFormat': !exists(json, 'labelFormat') ? undefined : json['labelFormat'],
        'integratorId': !exists(json, 'integratorId') ? undefined : json['integratorId'],
        'fxcbPackNotificationId': !exists(json, 'fxcbPackNotificationId') ? undefined : json['fxcbPackNotificationId'],
        'fxcbDocumentsUrl': !exists(json, 'fxcbDocumentsUrl') ? undefined : json['fxcbDocumentsUrl'],
        'attributes': !exists(json, 'attributes') ? undefined : json['attributes'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(PackageItemFromJSON)),
        'fulfillmentDate': !exists(json, 'fulfillmentDate') ? undefined : (json['fulfillmentDate'] === null ? null : new Date(json['fulfillmentDate'])),
        'fulfillmentLocationCode': !exists(json, 'fulfillmentLocationCode') ? undefined : json['fulfillmentLocationCode'],
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AuditInfoFromJSON(json['auditInfo']),
        'availableActions': !exists(json, 'availableActions') ? undefined : json['availableActions'],
        'changeMessages': !exists(json, 'changeMessages') ? undefined : (json['changeMessages'] === null ? null : (json['changeMessages'] as Array<any>).map(ChangeMessageFromJSON)),
    };
}

export function PackageToJSON(value?: Package | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'shippingMethodCode': value.shippingMethodCode,
        'shippingMethodName': value.shippingMethodName,
        'shipmentId': value.shipmentId,
        'trackingNumber': value.trackingNumber,
        'trackingNumbers': value.trackingNumbers,
        'packagingType': value.packagingType,
        'hasLabel': value.hasLabel,
        'measurements': PackageMeasurementsToJSON(value.measurements),
        'carrier': value.carrier,
        'signatureRequired': value.signatureRequired,
        'trackings': value.trackings === undefined ? undefined : (value.trackings === null ? null : (value.trackings as Array<any>).map(TrackingToJSON)),
        'packingSlipItemDetails': value.packingSlipItemDetails === undefined ? undefined : (value.packingSlipItemDetails === null ? null : (value.packingSlipItemDetails as Array<any>).map(PackingSlipItemDetailToJSON)),
        'packingSlipNumber': value.packingSlipNumber,
        'returnTrackings': value.returnTrackings === undefined ? undefined : (value.returnTrackings === null ? null : (value.returnTrackings as Array<any>).map(TrackingToJSON)),
        'returnTrackingNumbers': value.returnTrackingNumbers,
        'returnCarrier': value.returnCarrier,
        'packageId': value.packageId,
        'manifestId': value.manifestId,
        'labelFormat': value.labelFormat,
        'integratorId': value.integratorId,
        'fxcbPackNotificationId': value.fxcbPackNotificationId,
        'fxcbDocumentsUrl': value.fxcbDocumentsUrl,
        'attributes': value.attributes,
        'id': value.id,
        'code': value.code,
        'status': value.status,
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(PackageItemToJSON)),
        'fulfillmentDate': value.fulfillmentDate === undefined ? undefined : (value.fulfillmentDate === null ? null : value.fulfillmentDate.toISOString()),
        'fulfillmentLocationCode': value.fulfillmentLocationCode,
        'auditInfo': AuditInfoToJSON(value.auditInfo),
        'availableActions': value.availableActions,
        'changeMessages': value.changeMessages === undefined ? undefined : (value.changeMessages === null ? null : (value.changeMessages as Array<any>).map(ChangeMessageToJSON)),
    };
}

