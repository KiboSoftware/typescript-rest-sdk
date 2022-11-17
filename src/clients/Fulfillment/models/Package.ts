/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Fulfillment Service
 * OpenAPI Spec for Kibo Fulfillment Service
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
import type { PackageMeasurements } from './PackageMeasurements';
import {
    PackageMeasurementsFromJSON,
    PackageMeasurementsFromJSONTyped,
    PackageMeasurementsToJSON,
} from './PackageMeasurements';
import type { PackingSlipItemDetailDto } from './PackingSlipItemDetailDto';
import {
    PackingSlipItemDetailDtoFromJSON,
    PackingSlipItemDetailDtoFromJSONTyped,
    PackingSlipItemDetailDtoToJSON,
} from './PackingSlipItemDetailDto';
import type { Tracking } from './Tracking';
import {
    TrackingFromJSON,
    TrackingFromJSONTyped,
    TrackingToJSON,
} from './Tracking';

/**
 * 
 * @export
 * @interface Package
 */
export interface Package {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof Package
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {AuditInfo}
     * @memberof Package
     */
    auditInfo?: AuditInfo;
    /**
     * 
     * @type {string}
     * @memberof Package
     */
    carrier?: string;
    /**
     * 
     * @type {string}
     * @memberof Package
     */
    fxcbDocumentsUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof Package
     */
    fxcbPackNotificationId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Package
     */
    hasLabel?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Package
     */
    integratorId?: string;
    /**
     * 
     * @type {string}
     * @memberof Package
     */
    labelFormat?: string;
    /**
     * 
     * @type {string}
     * @memberof Package
     */
    manifestId?: string;
    /**
     * 
     * @type {PackageMeasurements}
     * @memberof Package
     */
    measurements?: PackageMeasurements;
    /**
     * 
     * @type {string}
     * @memberof Package
     */
    packageId?: string;
    /**
     * 
     * @type {string}
     * @memberof Package
     */
    packagingType?: string;
    /**
     * 
     * @type {Array<PackingSlipItemDetailDto>}
     * @memberof Package
     */
    packingSlipItemDetails?: Array<PackingSlipItemDetailDto>;
    /**
     * 
     * @type {number}
     * @memberof Package
     */
    packingSlipNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof Package
     */
    returnCarrier?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Package
     */
    returnTrackingNumbers?: Array<string>;
    /**
     * 
     * @type {Array<Tracking>}
     * @memberof Package
     */
    returnTrackings?: Array<Tracking>;
    /**
     * 
     * @type {string}
     * @memberof Package
     */
    shippingMethodCode?: string;
    /**
     * 
     * @type {string}
     * @memberof Package
     */
    shippingMethodName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Package
     */
    signatureRequired?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Package
     */
    stringBarcode?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Package
     */
    trackingNumbers?: Array<string>;
    /**
     * 
     * @type {Array<Tracking>}
     * @memberof Package
     */
    trackings?: Array<Tracking>;
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
        
        'attributes': !exists(json, 'attributes') ? undefined : json['attributes'],
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AuditInfoFromJSON(json['auditInfo']),
        'carrier': !exists(json, 'carrier') ? undefined : json['carrier'],
        'fxcbDocumentsUrl': !exists(json, 'fxcbDocumentsUrl') ? undefined : json['fxcbDocumentsUrl'],
        'fxcbPackNotificationId': !exists(json, 'fxcbPackNotificationId') ? undefined : json['fxcbPackNotificationId'],
        'hasLabel': !exists(json, 'hasLabel') ? undefined : json['hasLabel'],
        'integratorId': !exists(json, 'integratorId') ? undefined : json['integratorId'],
        'labelFormat': !exists(json, 'labelFormat') ? undefined : json['labelFormat'],
        'manifestId': !exists(json, 'manifestId') ? undefined : json['manifestId'],
        'measurements': !exists(json, 'measurements') ? undefined : PackageMeasurementsFromJSON(json['measurements']),
        'packageId': !exists(json, 'packageId') ? undefined : json['packageId'],
        'packagingType': !exists(json, 'packagingType') ? undefined : json['packagingType'],
        'packingSlipItemDetails': !exists(json, 'packingSlipItemDetails') ? undefined : ((json['packingSlipItemDetails'] as Array<any>).map(PackingSlipItemDetailDtoFromJSON)),
        'packingSlipNumber': !exists(json, 'packingSlipNumber') ? undefined : json['packingSlipNumber'],
        'returnCarrier': !exists(json, 'returnCarrier') ? undefined : json['returnCarrier'],
        'returnTrackingNumbers': !exists(json, 'returnTrackingNumbers') ? undefined : json['returnTrackingNumbers'],
        'returnTrackings': !exists(json, 'returnTrackings') ? undefined : ((json['returnTrackings'] as Array<any>).map(TrackingFromJSON)),
        'shippingMethodCode': !exists(json, 'shippingMethodCode') ? undefined : json['shippingMethodCode'],
        'shippingMethodName': !exists(json, 'shippingMethodName') ? undefined : json['shippingMethodName'],
        'signatureRequired': !exists(json, 'signatureRequired') ? undefined : json['signatureRequired'],
        'stringBarcode': !exists(json, 'stringBarcode') ? undefined : json['stringBarcode'],
        'trackingNumbers': !exists(json, 'trackingNumbers') ? undefined : json['trackingNumbers'],
        'trackings': !exists(json, 'trackings') ? undefined : ((json['trackings'] as Array<any>).map(TrackingFromJSON)),
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
        
        'attributes': value.attributes,
        'auditInfo': AuditInfoToJSON(value.auditInfo),
        'carrier': value.carrier,
        'fxcbDocumentsUrl': value.fxcbDocumentsUrl,
        'fxcbPackNotificationId': value.fxcbPackNotificationId,
        'hasLabel': value.hasLabel,
        'integratorId': value.integratorId,
        'labelFormat': value.labelFormat,
        'manifestId': value.manifestId,
        'measurements': PackageMeasurementsToJSON(value.measurements),
        'packageId': value.packageId,
        'packagingType': value.packagingType,
        'packingSlipItemDetails': value.packingSlipItemDetails === undefined ? undefined : ((value.packingSlipItemDetails as Array<any>).map(PackingSlipItemDetailDtoToJSON)),
        'packingSlipNumber': value.packingSlipNumber,
        'returnCarrier': value.returnCarrier,
        'returnTrackingNumbers': value.returnTrackingNumbers,
        'returnTrackings': value.returnTrackings === undefined ? undefined : ((value.returnTrackings as Array<any>).map(TrackingToJSON)),
        'shippingMethodCode': value.shippingMethodCode,
        'shippingMethodName': value.shippingMethodName,
        'signatureRequired': value.signatureRequired,
        'stringBarcode': value.stringBarcode,
        'trackingNumbers': value.trackingNumbers,
        'trackings': value.trackings === undefined ? undefined : ((value.trackings as Array<any>).map(TrackingToJSON)),
    };
}

