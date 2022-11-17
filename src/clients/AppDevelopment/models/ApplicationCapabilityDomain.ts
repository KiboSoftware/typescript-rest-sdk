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
import type { ApplicationCapabilityDomainValue } from './ApplicationCapabilityDomainValue';
import {
    ApplicationCapabilityDomainValueFromJSON,
    ApplicationCapabilityDomainValueFromJSONTyped,
    ApplicationCapabilityDomainValueToJSON,
} from './ApplicationCapabilityDomainValue';

/**
 * 
 * @export
 * @interface ApplicationCapabilityDomain
 */
export interface ApplicationCapabilityDomain {
    /**
     * 
     * @type {number}
     * @memberof ApplicationCapabilityDomain
     */
    applicationCapabilityDomainId?: number;
    /**
     * 
     * @type {number}
     * @memberof ApplicationCapabilityDomain
     */
    applicationCapabilityTypeId?: number;
    /**
     * 
     * @type {string}
     * @memberof ApplicationCapabilityDomain
     */
    name?: string | null;
    /**
     * 
     * @type {Array<ApplicationCapabilityDomainValue>}
     * @memberof ApplicationCapabilityDomain
     */
    applicationCapabilityDomainValues1?: Array<ApplicationCapabilityDomainValue> | null;
    /**
     * 
     * @type {Array<ApplicationCapabilityDomainValue>}
     * @memberof ApplicationCapabilityDomain
     */
    applicationCapabilityDomainValues2?: Array<ApplicationCapabilityDomainValue> | null;
}

/**
 * Check if a given object implements the ApplicationCapabilityDomain interface.
 */
export function instanceOfApplicationCapabilityDomain(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApplicationCapabilityDomainFromJSON(json: any): ApplicationCapabilityDomain {
    return ApplicationCapabilityDomainFromJSONTyped(json, false);
}

export function ApplicationCapabilityDomainFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationCapabilityDomain {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'applicationCapabilityDomainId': !exists(json, 'applicationCapabilityDomainId') ? undefined : json['applicationCapabilityDomainId'],
        'applicationCapabilityTypeId': !exists(json, 'applicationCapabilityTypeId') ? undefined : json['applicationCapabilityTypeId'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'applicationCapabilityDomainValues1': !exists(json, 'applicationCapabilityDomainValues1') ? undefined : (json['applicationCapabilityDomainValues1'] === null ? null : (json['applicationCapabilityDomainValues1'] as Array<any>).map(ApplicationCapabilityDomainValueFromJSON)),
        'applicationCapabilityDomainValues2': !exists(json, 'applicationCapabilityDomainValues2') ? undefined : (json['applicationCapabilityDomainValues2'] === null ? null : (json['applicationCapabilityDomainValues2'] as Array<any>).map(ApplicationCapabilityDomainValueFromJSON)),
    };
}

export function ApplicationCapabilityDomainToJSON(value?: ApplicationCapabilityDomain | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'applicationCapabilityDomainId': value.applicationCapabilityDomainId,
        'applicationCapabilityTypeId': value.applicationCapabilityTypeId,
        'name': value.name,
        'applicationCapabilityDomainValues1': value.applicationCapabilityDomainValues1 === undefined ? undefined : (value.applicationCapabilityDomainValues1 === null ? null : (value.applicationCapabilityDomainValues1 as Array<any>).map(ApplicationCapabilityDomainValueToJSON)),
        'applicationCapabilityDomainValues2': value.applicationCapabilityDomainValues2 === undefined ? undefined : (value.applicationCapabilityDomainValues2 === null ? null : (value.applicationCapabilityDomainValues2 as Array<any>).map(ApplicationCapabilityDomainValueToJSON)),
    };
}

