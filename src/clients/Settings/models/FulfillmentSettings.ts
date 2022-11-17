/* tslint:disable */
/* eslint-disable */
/**
 * Kibo SiteSettings Service
 * OpenAPI Spec for Kibo SiteSettings Service
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
import type { BPMConfiguration } from './BPMConfiguration';
import {
    BPMConfigurationFromJSON,
    BPMConfigurationFromJSONTyped,
    BPMConfigurationToJSON,
} from './BPMConfiguration';
import type { CreateShipmentsOnPendingReview } from './CreateShipmentsOnPendingReview';
import {
    CreateShipmentsOnPendingReviewFromJSON,
    CreateShipmentsOnPendingReviewFromJSONTyped,
    CreateShipmentsOnPendingReviewToJSON,
} from './CreateShipmentsOnPendingReview';
import type { FulfillerSettings } from './FulfillerSettings';
import {
    FulfillerSettingsFromJSON,
    FulfillerSettingsFromJSONTyped,
    FulfillerSettingsToJSON,
} from './FulfillerSettings';
import type { FulfillmentJobSettings } from './FulfillmentJobSettings';
import {
    FulfillmentJobSettingsFromJSON,
    FulfillmentJobSettingsFromJSONTyped,
    FulfillmentJobSettingsToJSON,
} from './FulfillmentJobSettings';
import type { FutureDateLimit } from './FutureDateLimit';
import {
    FutureDateLimitFromJSON,
    FutureDateLimitFromJSONTyped,
    FutureDateLimitToJSON,
} from './FutureDateLimit';
import type { ShipToHomeConsolidation } from './ShipToHomeConsolidation';
import {
    ShipToHomeConsolidationFromJSON,
    ShipToHomeConsolidationFromJSONTyped,
    ShipToHomeConsolidationToJSON,
} from './ShipToHomeConsolidation';
import type { ShipToStore } from './ShipToStore';
import {
    ShipToStoreFromJSON,
    ShipToStoreFromJSONTyped,
    ShipToStoreToJSON,
} from './ShipToStore';

/**
 * 
 * @export
 * @interface FulfillmentSettings
 */
export interface FulfillmentSettings {
    /**
     * 
     * @type {number}
     * @memberof FulfillmentSettings
     */
    defaultBackOrderDays?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentSettings
     */
    paymentVoidAndReauth?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentSettings
     */
    futureInventoryEnabled?: boolean | null;
    /**
     * 
     * @type {BPMConfiguration}
     * @memberof FulfillmentSettings
     */
    bpmConfiguration?: BPMConfiguration;
    /**
     * 
     * @type {AuditInfo}
     * @memberof FulfillmentSettings
     */
    auditInfo?: AuditInfo;
    /**
     * 
     * @type {FulfillmentJobSettings}
     * @memberof FulfillmentSettings
     */
    fulfillmentJobSettings?: FulfillmentJobSettings;
    /**
     * 
     * @type {ShipToStore}
     * @memberof FulfillmentSettings
     */
    shipToStore?: ShipToStore;
    /**
     * 
     * @type {ShipToHomeConsolidation}
     * @memberof FulfillmentSettings
     */
    shipToHomeConsolidation?: ShipToHomeConsolidation;
    /**
     * 
     * @type {CreateShipmentsOnPendingReview}
     * @memberof FulfillmentSettings
     */
    createShipmentsOnPendingReview?: CreateShipmentsOnPendingReview;
    /**
     * 
     * @type {FutureDateLimit}
     * @memberof FulfillmentSettings
     */
    futureDateLimit?: FutureDateLimit;
    /**
     * 
     * @type {FulfillerSettings}
     * @memberof FulfillmentSettings
     */
    fulfillerSettings?: FulfillerSettings;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentSettings
     */
    actionOnBOPISReject?: string | null;
}

/**
 * Check if a given object implements the FulfillmentSettings interface.
 */
export function instanceOfFulfillmentSettings(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FulfillmentSettingsFromJSON(json: any): FulfillmentSettings {
    return FulfillmentSettingsFromJSONTyped(json, false);
}

export function FulfillmentSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FulfillmentSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'defaultBackOrderDays': !exists(json, 'defaultBackOrderDays') ? undefined : json['defaultBackOrderDays'],
        'paymentVoidAndReauth': !exists(json, 'paymentVoidAndReauth') ? undefined : json['paymentVoidAndReauth'],
        'futureInventoryEnabled': !exists(json, 'futureInventoryEnabled') ? undefined : json['futureInventoryEnabled'],
        'bpmConfiguration': !exists(json, 'bpmConfiguration') ? undefined : BPMConfigurationFromJSON(json['bpmConfiguration']),
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AuditInfoFromJSON(json['auditInfo']),
        'fulfillmentJobSettings': !exists(json, 'fulfillmentJobSettings') ? undefined : FulfillmentJobSettingsFromJSON(json['fulfillmentJobSettings']),
        'shipToStore': !exists(json, 'shipToStore') ? undefined : ShipToStoreFromJSON(json['shipToStore']),
        'shipToHomeConsolidation': !exists(json, 'shipToHomeConsolidation') ? undefined : ShipToHomeConsolidationFromJSON(json['shipToHomeConsolidation']),
        'createShipmentsOnPendingReview': !exists(json, 'createShipmentsOnPendingReview') ? undefined : CreateShipmentsOnPendingReviewFromJSON(json['createShipmentsOnPendingReview']),
        'futureDateLimit': !exists(json, 'futureDateLimit') ? undefined : FutureDateLimitFromJSON(json['futureDateLimit']),
        'fulfillerSettings': !exists(json, 'fulfillerSettings') ? undefined : FulfillerSettingsFromJSON(json['fulfillerSettings']),
        'actionOnBOPISReject': !exists(json, 'actionOnBOPISReject') ? undefined : json['actionOnBOPISReject'],
    };
}

export function FulfillmentSettingsToJSON(value?: FulfillmentSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'defaultBackOrderDays': value.defaultBackOrderDays,
        'paymentVoidAndReauth': value.paymentVoidAndReauth,
        'futureInventoryEnabled': value.futureInventoryEnabled,
        'bpmConfiguration': BPMConfigurationToJSON(value.bpmConfiguration),
        'auditInfo': AuditInfoToJSON(value.auditInfo),
        'fulfillmentJobSettings': FulfillmentJobSettingsToJSON(value.fulfillmentJobSettings),
        'shipToStore': ShipToStoreToJSON(value.shipToStore),
        'shipToHomeConsolidation': ShipToHomeConsolidationToJSON(value.shipToHomeConsolidation),
        'createShipmentsOnPendingReview': CreateShipmentsOnPendingReviewToJSON(value.createShipmentsOnPendingReview),
        'futureDateLimit': FutureDateLimitToJSON(value.futureDateLimit),
        'fulfillerSettings': FulfillerSettingsToJSON(value.fulfillerSettings),
        'actionOnBOPISReject': value.actionOnBOPISReject,
    };
}

