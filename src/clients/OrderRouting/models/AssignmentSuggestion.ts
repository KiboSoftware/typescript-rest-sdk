/* tslint:disable */
/* eslint-disable */
/**
 * Api Documentation
 * Api Documentation
 *
 * The version of the OpenAPI document: 1.0
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
 * @interface AssignmentSuggestion
 */
export interface AssignmentSuggestion {
    /**
     * 
     * @type {Date}
     * @memberof AssignmentSuggestion
     */
    futureDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof AssignmentSuggestion
     */
    futureDateString?: string;
    /**
     * 
     * @type {string}
     * @memberof AssignmentSuggestion
     */
    locationCode?: string;
    /**
     * 
     * @type {number}
     * @memberof AssignmentSuggestion
     */
    locationID?: number;
    /**
     * 
     * @type {number}
     * @memberof AssignmentSuggestion
     */
    orderItemID?: number;
    /**
     * 
     * @type {number}
     * @memberof AssignmentSuggestion
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof AssignmentSuggestion
     */
    route?: AssignmentSuggestionRouteEnum;
}


/**
 * @export
 */
export const AssignmentSuggestionRouteEnum = {
    Directship: 'DIRECTSHIP',
    Transfer: 'TRANSFER',
    SthConsolidated: 'STH_CONSOLIDATED'
} as const;
export type AssignmentSuggestionRouteEnum = typeof AssignmentSuggestionRouteEnum[keyof typeof AssignmentSuggestionRouteEnum];


/**
 * Check if a given object implements the AssignmentSuggestion interface.
 */
export function instanceOfAssignmentSuggestion(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AssignmentSuggestionFromJSON(json: any): AssignmentSuggestion {
    return AssignmentSuggestionFromJSONTyped(json, false);
}

export function AssignmentSuggestionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssignmentSuggestion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'futureDate': !exists(json, 'futureDate') ? undefined : (new Date(json['futureDate'])),
        'futureDateString': !exists(json, 'futureDateString') ? undefined : json['futureDateString'],
        'locationCode': !exists(json, 'locationCode') ? undefined : json['locationCode'],
        'locationID': !exists(json, 'locationID') ? undefined : json['locationID'],
        'orderItemID': !exists(json, 'orderItemID') ? undefined : json['orderItemID'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'route': !exists(json, 'route') ? undefined : json['route'],
    };
}

export function AssignmentSuggestionToJSON(value?: AssignmentSuggestion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'futureDate': value.futureDate === undefined ? undefined : (value.futureDate.toISOString()),
        'futureDateString': value.futureDateString,
        'locationCode': value.locationCode,
        'locationID': value.locationID,
        'orderItemID': value.orderItemID,
        'quantity': value.quantity,
        'route': value.route,
    };
}
