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
 * @interface TaskInput
 */
export interface TaskInput {
    /**
     * 
     * @type {string}
     * @memberof TaskInput
     */
    helpMessage?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TaskInput
     */
    label?: string | null;
    /**
     * 
     * @type {number}
     * @memberof TaskInput
     */
    maxLength?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TaskInput
     */
    maximum?: number;
    /**
     * 
     * @type {number}
     * @memberof TaskInput
     */
    minLength?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TaskInput
     */
    minimum?: number;
    /**
     * 
     * @type {string}
     * @memberof TaskInput
     */
    name?: string | null;
    /**
     * 
     * @type {Array<any>}
     * @memberof TaskInput
     */
    options?: Array<any> | null;
    /**
     * 
     * @type {string}
     * @memberof TaskInput
     */
    pattern?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof TaskInput
     */
    required?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof TaskInput
     */
    type?: string | null;
}

/**
 * Check if a given object implements the TaskInput interface.
 */
export function instanceOfTaskInput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TaskInputFromJSON(json: any): TaskInput {
    return TaskInputFromJSONTyped(json, false);
}

export function TaskInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskInput {
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

export function TaskInputToJSON(value?: TaskInput | null): any {
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

