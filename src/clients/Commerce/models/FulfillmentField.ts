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
 * @interface FulfillmentField
 */
export interface FulfillmentField {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentField
     */
    name?: string | null;
    /**
     * 
     * @type {any}
     * @memberof FulfillmentField
     */
    userEnteredValue?: any | null;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentField
     */
    required?: boolean;
}

/**
 * Check if a given object implements the FulfillmentField interface.
 */
export function instanceOfFulfillmentField(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FulfillmentFieldFromJSON(json: any): FulfillmentField {
    return FulfillmentFieldFromJSONTyped(json, false);
}

export function FulfillmentFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): FulfillmentField {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'userEnteredValue': !exists(json, 'userEnteredValue') ? undefined : json['userEnteredValue'],
        'required': !exists(json, 'required') ? undefined : json['required'],
    };
}

export function FulfillmentFieldToJSON(value?: FulfillmentField | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'userEnteredValue': value.userEnteredValue,
        'required': value.required,
    };
}
