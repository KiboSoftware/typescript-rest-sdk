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
import type { AuditInfo0 } from './AuditInfo0';
import {
    AuditInfo0FromJSON,
    AuditInfo0FromJSONTyped,
    AuditInfo0ToJSON,
} from './AuditInfo0';
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { ManifestShipment } from './ManifestShipment';
import {
    ManifestShipmentFromJSON,
    ManifestShipmentFromJSONTyped,
    ManifestShipmentToJSON,
} from './ManifestShipment';

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
     * @type {AuditInfo0}
     * @memberof EntityModelOfManifest
     */
    auditInfo?: AuditInfo0;
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
 * Check if a given object implements the EntityModelOfManifest interface.
 */
export function instanceOfEntityModelOfManifest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EntityModelOfManifestFromJSON(json: any): EntityModelOfManifest {
    return EntityModelOfManifestFromJSONTyped(json, false);
}

export function EntityModelOfManifestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntityModelOfManifest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, '_links') ? undefined : LinksFromJSON(json['_links']),
        'attributes': !exists(json, 'attributes') ? undefined : json['attributes'],
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AuditInfo0FromJSON(json['auditInfo']),
        'carrierId': !exists(json, 'carrierId') ? undefined : json['carrierId'],
        'internalId': !exists(json, 'internalId') ? undefined : json['internalId'],
        'locationCode': !exists(json, 'locationCode') ? undefined : json['locationCode'],
        'manifestId': !exists(json, 'manifestId') ? undefined : json['manifestId'],
        'manifestUrl': !exists(json, 'manifestUrl') ? undefined : json['manifestUrl'],
        'numberOfPackages': !exists(json, 'numberOfPackages') ? undefined : json['numberOfPackages'],
        'numberOfShipments': !exists(json, 'numberOfShipments') ? undefined : json['numberOfShipments'],
        'shipments': !exists(json, 'shipments') ? undefined : ((json['shipments'] as Array<any>).map(ManifestShipmentFromJSON)),
        'tenantId': !exists(json, 'tenantId') ? undefined : json['tenantId'],
        'userDisplayName': !exists(json, 'userDisplayName') ? undefined : json['userDisplayName'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
    };
}

export function EntityModelOfManifestToJSON(value?: EntityModelOfManifest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_links': LinksToJSON(value.links),
        'attributes': value.attributes,
        'auditInfo': AuditInfo0ToJSON(value.auditInfo),
        'carrierId': value.carrierId,
        'internalId': value.internalId,
        'locationCode': value.locationCode,
        'manifestId': value.manifestId,
        'manifestUrl': value.manifestUrl,
        'numberOfPackages': value.numberOfPackages,
        'numberOfShipments': value.numberOfShipments,
        'shipments': value.shipments === undefined ? undefined : ((value.shipments as Array<any>).map(ManifestShipmentToJSON)),
        'tenantId': value.tenantId,
        'userDisplayName': value.userDisplayName,
        'userId': value.userId,
    };
}

