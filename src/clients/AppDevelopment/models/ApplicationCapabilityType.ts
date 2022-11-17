/* tslint:disable */
/* eslint-disable */
/**
 * Kibo AppDev Service
 * OpenAPI Spec for Kibo AppDev Service
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ApplicationCapability } from './ApplicationCapability';
import {
    ApplicationCapabilityFromJSON,
    ApplicationCapabilityFromJSONTyped,
    ApplicationCapabilityToJSON,
} from './ApplicationCapability';
import type { ApplicationCapabilityDomain } from './ApplicationCapabilityDomain';
import {
    ApplicationCapabilityDomainFromJSON,
    ApplicationCapabilityDomainFromJSONTyped,
    ApplicationCapabilityDomainToJSON,
} from './ApplicationCapabilityDomain';

/**
 * 
 * @export
 * @interface ApplicationCapabilityType
 */
export interface ApplicationCapabilityType {
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
    packageId?: number;
}

/**
 * Check if a given object implements the ApplicationCapabilityType interface.
 */
export function instanceOfApplicationCapabilityType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApplicationCapabilityTypeFromJSON(json: any): ApplicationCapabilityType {
    return ApplicationCapabilityTypeFromJSONTyped(json, false);
}

export function ApplicationCapabilityTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationCapabilityType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'applicationCapabilityTypeId': !exists(json, 'applicationCapabilityTypeId') ? undefined : json['applicationCapabilityTypeId'],
        'applicationId': !exists(json, 'applicationId') ? undefined : json['applicationId'],
        'capabilityTypeId': !exists(json, 'capabilityTypeId') ? undefined : json['capabilityTypeId'],
        'capabilityTypeName': !exists(json, 'capabilityTypeName') ? undefined : json['capabilityTypeName'],
        'isImplemented': !exists(json, 'isImplemented') ? undefined : json['isImplemented'],
        'isInitializedByDefault': !exists(json, 'isInitializedByDefault') ? undefined : json['isInitializedByDefault'],
        'applicationCapabilities': !exists(json, 'applicationCapabilities') ? undefined : (json['applicationCapabilities'] === null ? null : (json['applicationCapabilities'] as Array<any>).map(ApplicationCapabilityFromJSON)),
        'applicationCapabilityDomains': !exists(json, 'applicationCapabilityDomains') ? undefined : (json['applicationCapabilityDomains'] === null ? null : (json['applicationCapabilityDomains'] as Array<any>).map(ApplicationCapabilityDomainFromJSON)),
        'packageId': !exists(json, 'packageId') ? undefined : json['packageId'],
    };
}

export function ApplicationCapabilityTypeToJSON(value?: ApplicationCapabilityType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'applicationCapabilityTypeId': value.applicationCapabilityTypeId,
        'applicationId': value.applicationId,
        'capabilityTypeId': value.capabilityTypeId,
        'capabilityTypeName': value.capabilityTypeName,
        'isImplemented': value.isImplemented,
        'isInitializedByDefault': value.isInitializedByDefault,
        'applicationCapabilities': value.applicationCapabilities === undefined ? undefined : (value.applicationCapabilities === null ? null : (value.applicationCapabilities as Array<any>).map(ApplicationCapabilityToJSON)),
        'applicationCapabilityDomains': value.applicationCapabilityDomains === undefined ? undefined : (value.applicationCapabilityDomains === null ? null : (value.applicationCapabilityDomains as Array<any>).map(ApplicationCapabilityDomainToJSON)),
        'packageId': value.packageId,
    };
}

