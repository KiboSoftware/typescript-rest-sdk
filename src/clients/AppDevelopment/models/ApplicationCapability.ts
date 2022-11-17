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
    capabilityTypeContractId?: number;
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
    applicationCapabilityTypeId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ApplicationCapability
     */
    packageId?: number;
}

/**
 * Check if a given object implements the ApplicationCapability interface.
 */
export function instanceOfApplicationCapability(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApplicationCapabilityFromJSON(json: any): ApplicationCapability {
    return ApplicationCapabilityFromJSONTyped(json, false);
}

export function ApplicationCapabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationCapability {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'applicationCapabilityId': !exists(json, 'applicationCapabilityId') ? undefined : json['applicationCapabilityId'],
        'capabilityTypeContractId': !exists(json, 'capabilityTypeContractId') ? undefined : json['capabilityTypeContractId'],
        'applicationEndPoint': !exists(json, 'applicationEndPoint') ? undefined : json['applicationEndPoint'],
        'applicationCapabilityTypeId': !exists(json, 'applicationCapabilityTypeId') ? undefined : json['applicationCapabilityTypeId'],
        'packageId': !exists(json, 'packageId') ? undefined : json['packageId'],
    };
}

export function ApplicationCapabilityToJSON(value?: ApplicationCapability | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'applicationCapabilityId': value.applicationCapabilityId,
        'capabilityTypeContractId': value.capabilityTypeContractId,
        'applicationEndPoint': value.applicationEndPoint,
        'applicationCapabilityTypeId': value.applicationCapabilityTypeId,
        'packageId': value.packageId,
    };
}

