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
 * 
 * @export
 * @interface OrderAction
 */
export interface OrderAction {
    /**
     * 
     * @type {string}
     * @memberof OrderAction
     */
    actionName?: string | null;
}

/**
 * Check if a given object implements the OrderAction interface.
 */
export function instanceOfOrderAction(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrderActionFromJSON(json: any): OrderAction {
    return OrderActionFromJSONTyped(json, false);
}

export function OrderActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderAction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actionName': !exists(json, 'actionName') ? undefined : json['actionName'],
    };
}

export function OrderActionToJSON(value?: OrderAction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actionName': value.actionName,
    };
}

