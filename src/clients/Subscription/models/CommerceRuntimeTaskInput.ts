/* tslint:disable */
/* eslint-disable */
/**
 * Kibo SubscriptionRuntime Service
 * OpenAPI Spec for Kibo SubscriptionRuntime Service
 *
 * The version of the OpenAPI document: 1.0.0
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
 * @interface CommerceRuntimeTaskInput
 */
export interface CommerceRuntimeTaskInput {
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeTaskInput
     */
    helpMessage?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeTaskInput
     */
    label?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeTaskInput
     */
    maxLength?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeTaskInput
     */
    maximum?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeTaskInput
     */
    minLength?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeTaskInput
     */
    minimum?: number;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeTaskInput
     */
    name?: string | null;
    /**
     * 
     * @type {Array<any>}
     * @memberof CommerceRuntimeTaskInput
     */
    options?: Array<any> | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeTaskInput
     */
    pattern?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeTaskInput
     */
    required?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeTaskInput
     */
    type?: string | null;
}

/**
 * Check if a given object implements the CommerceRuntimeTaskInput interface.
 */
export function instanceOfCommerceRuntimeTaskInput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommerceRuntimeTaskInputFromJSON(json: any): CommerceRuntimeTaskInput {
    return CommerceRuntimeTaskInputFromJSONTyped(json, false);
}

export function CommerceRuntimeTaskInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommerceRuntimeTaskInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'helpMessage': !exists(json, 'helpMessage') ? undefined : json['helpMessage'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'maxLength': !exists(json, 'maxLength') ? undefined : json['maxLength'],
        'maximum': !exists(json, 'maximum') ? undefined : json['maximum'],
        'minLength': !exists(json, 'minLength') ? undefined : json['minLength'],
        'minimum': !exists(json, 'minimum') ? undefined : json['minimum'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'options': !exists(json, 'options') ? undefined : json['options'],
        'pattern': !exists(json, 'pattern') ? undefined : json['pattern'],
        'required': !exists(json, 'required') ? undefined : json['required'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function CommerceRuntimeTaskInputToJSON(value?: CommerceRuntimeTaskInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'helpMessage': value.helpMessage,
        'label': value.label,
        'maxLength': value.maxLength,
        'maximum': value.maximum,
        'minLength': value.minLength,
        'minimum': value.minimum,
        'name': value.name,
        'options': value.options,
        'pattern': value.pattern,
        'required': value.required,
        'type': value.type,
    };
}

