/* tslint:disable */
/* eslint-disable */
/**
 * Kibo CommerceRuntime Service
 * OpenAPI Spec for Kibo CommerceRuntime Service
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
import type { Contact } from './Contact';
import {
    ContactFromJSON,
    ContactFromJSONTyped,
    ContactToJSON,
} from './Contact';

/**
 * Shipment information, which includes the shipping address, price, estimated delivery date, tracking information, method (for example, Ground, Overnight, or Pick-up), 
 * carrier (for example, USPS, UPS, FedEx), and current status (for example, Not Shipped, In Transit, Delayed, or Returned To Sender).
 * @export
 * @interface FulfillmentInfo
 */
export interface FulfillmentInfo {
    /**
     * 
     * @type {Contact}
     * @memberof FulfillmentInfo
     */
    fulfillmentContact?: Contact;
    /**
     * Indicates that the destination is commercial
     * @type {boolean}
     * @memberof FulfillmentInfo
     */
    isDestinationCommercial?: boolean | null;
    /**
     * Code that uniquely identifies the shipping method such as "Ground," "Overnight," or "Digital."
     * The site's shipping settings lists the valid shipping methods specified for this site.
     * @type {string}
     * @memberof FulfillmentInfo
     */
    shippingMethodCode?: string | null;
    /**
     * Readable name of the shipping method
     * @type {string}
     * @memberof FulfillmentInfo
     */
    shippingMethodName?: string | null;
    /**
     * Custom data originated by the shipping service.
     * @type {object}
     * @memberof FulfillmentInfo
     */
    data?: object | null;
    /**
     * 
     * @type {AuditInfo}
     * @memberof FulfillmentInfo
     */
    auditInfo?: AuditInfo;
}

/**
 * Check if a given object implements the FulfillmentInfo interface.
 */
export function instanceOfFulfillmentInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FulfillmentInfoFromJSON(json: any): FulfillmentInfo {
    return FulfillmentInfoFromJSONTyped(json, false);
}

export function FulfillmentInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): FulfillmentInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fulfillmentContact': !exists(json, 'fulfillmentContact') ? undefined : ContactFromJSON(json['fulfillmentContact']),
        'isDestinationCommercial': !exists(json, 'isDestinationCommercial') ? undefined : json['isDestinationCommercial'],
        'shippingMethodCode': !exists(json, 'shippingMethodCode') ? undefined : json['shippingMethodCode'],
        'shippingMethodName': !exists(json, 'shippingMethodName') ? undefined : json['shippingMethodName'],
        'data': !exists(json, 'data') ? undefined : json['data'],
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AuditInfoFromJSON(json['auditInfo']),
    };
}

export function FulfillmentInfoToJSON(value?: FulfillmentInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fulfillmentContact': ContactToJSON(value.fulfillmentContact),
        'isDestinationCommercial': value.isDestinationCommercial,
        'shippingMethodCode': value.shippingMethodCode,
        'shippingMethodName': value.shippingMethodName,
        'data': value.data,
        'auditInfo': AuditInfoToJSON(value.auditInfo),
    };
}

