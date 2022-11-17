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
/**
 * Action to perform a fulfillment operation on the order.
 * @export
 * @interface FulfillmentAction
 */
export interface FulfillmentAction {
    /**
     * Name of the fulfillment action to perform
     * @type {string}
     * @memberof FulfillmentAction
     */
    actionName?: string | null;
    /**
     * Ids of packages to mark as fulfilled
     * @type {Array<string>}
     * @memberof FulfillmentAction
     */
    packageIds?: Array<string> | null;
    /**
     * Ids of pickups to mark as fulfilled
     * @type {Array<string>}
     * @memberof FulfillmentAction
     */
    pickupIds?: Array<string> | null;
    /**
     * Ids of digital packages to mark as fulfilled
     * @type {Array<string>}
     * @memberof FulfillmentAction
     */
    digitalPackageIds?: Array<string> | null;
}

/**
 * Check if a given object implements the FulfillmentAction interface.
 */
export function instanceOfFulfillmentAction(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FulfillmentActionFromJSON(json: any): FulfillmentAction {
    return FulfillmentActionFromJSONTyped(json, false);
}

export function FulfillmentActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): FulfillmentAction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actionName': !exists(json, 'actionName') ? undefined : json['actionName'],
        'packageIds': !exists(json, 'packageIds') ? undefined : json['packageIds'],
        'pickupIds': !exists(json, 'pickupIds') ? undefined : json['pickupIds'],
        'digitalPackageIds': !exists(json, 'digitalPackageIds') ? undefined : json['digitalPackageIds'],
    };
}

export function FulfillmentActionToJSON(value?: FulfillmentAction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actionName': value.actionName,
        'packageIds': value.packageIds,
        'pickupIds': value.pickupIds,
        'digitalPackageIds': value.digitalPackageIds,
    };
}

