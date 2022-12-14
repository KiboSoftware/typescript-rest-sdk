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
import type { CustomerSurveyEntry } from './CustomerSurveyEntry';
import {
    CustomerSurveyEntryFromJSON,
    CustomerSurveyEntryFromJSONTyped,
    CustomerSurveyEntryToJSON,
} from './CustomerSurveyEntry';
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';

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
     * @type {AuditInfo}
     * @memberof EntityModelOfCustomerSurvey
     */
    auditInfo?: AuditInfo;
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
 * Check if a given object implements the EntityModelOfCustomerSurvey interface.
 */
export function instanceOfEntityModelOfCustomerSurvey(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EntityModelOfCustomerSurveyFromJSON(json: any): EntityModelOfCustomerSurvey {
    return EntityModelOfCustomerSurveyFromJSONTyped(json, false);
}

export function EntityModelOfCustomerSurveyFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntityModelOfCustomerSurvey {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, '_links') ? undefined : LinksFromJSON(json['_links']),
        'attributes': !exists(json, 'attributes') ? undefined : json['attributes'],
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AuditInfoFromJSON(json['auditInfo']),
        'entries': !exists(json, 'entries') ? undefined : ((json['entries'] as Array<any>).map(CustomerSurveyEntryFromJSON)),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'shipmentNumber': !exists(json, 'shipmentNumber') ? undefined : json['shipmentNumber'],
        'siteId': !exists(json, 'siteId') ? undefined : json['siteId'],
        'tenantId': !exists(json, 'tenantId') ? undefined : json['tenantId'],
    };
}

export function EntityModelOfCustomerSurveyToJSON(value?: EntityModelOfCustomerSurvey | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_links': LinksToJSON(value.links),
        'attributes': value.attributes,
        'auditInfo': AuditInfoToJSON(value.auditInfo),
        'entries': value.entries === undefined ? undefined : ((value.entries as Array<any>).map(CustomerSurveyEntryToJSON)),
        'id': value.id,
        'shipmentNumber': value.shipmentNumber,
        'siteId': value.siteId,
        'tenantId': value.tenantId,
    };
}

