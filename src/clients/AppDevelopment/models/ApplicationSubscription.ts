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
import type { Event } from './Event';
import {
    EventFromJSON,
    EventFromJSONTyped,
    EventToJSON,
} from './Event';

/**
 * Defines an event that an Application Version is subscribed to.
 * @export
 * @interface ApplicationSubscription
 */
export interface ApplicationSubscription {
    /**
     * The unique identifier of an ApplicationVersionEvent record.
     * @type {number}
     * @memberof ApplicationSubscription
     */
    applicationSubscriptionId?: number;
    /**
     * The End Point where the event information will be sent to when the event is fired.
     * @type {string}
     * @memberof ApplicationSubscription
     */
    applicationEndPoint?: string | null;
    /**
     * 
     * @type {Array<Event>}
     * @memberof ApplicationSubscription
     */
    events?: Array<Event> | null;
    /**
     * 
     * @type {number}
     * @memberof ApplicationSubscription
     */
    packageId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ApplicationSubscription
     */
    noCallback?: boolean;
}

/**
 * Check if a given object implements the ApplicationSubscription interface.
 */
export function instanceOfApplicationSubscription(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApplicationSubscriptionFromJSON(json: any): ApplicationSubscription {
    return ApplicationSubscriptionFromJSONTyped(json, false);
}

export function ApplicationSubscriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationSubscription {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'applicationSubscriptionId': !exists(json, 'applicationSubscriptionId') ? undefined : json['applicationSubscriptionId'],
        'applicationEndPoint': !exists(json, 'applicationEndPoint') ? undefined : json['applicationEndPoint'],
        'events': !exists(json, 'events') ? undefined : (json['events'] === null ? null : (json['events'] as Array<any>).map(EventFromJSON)),
        'packageId': !exists(json, 'packageId') ? undefined : json['packageId'],
        'noCallback': !exists(json, 'noCallback') ? undefined : json['noCallback'],
    };
}

export function ApplicationSubscriptionToJSON(value?: ApplicationSubscription | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'applicationSubscriptionId': value.applicationSubscriptionId,
        'applicationEndPoint': value.applicationEndPoint,
        'events': value.events === undefined ? undefined : (value.events === null ? null : (value.events as Array<any>).map(EventToJSON)),
        'packageId': value.packageId,
        'noCallback': value.noCallback,
    };
}

