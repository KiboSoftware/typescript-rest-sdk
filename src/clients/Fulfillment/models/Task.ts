/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Fulfillment Service
 * OpenAPI Spec for Kibo Fulfillment Service
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Link } from './Link';
import {
    LinkFromJSON,
    LinkFromJSONTyped,
    LinkToJSON,
} from './Link';
import type { TaskInput } from './TaskInput';
import {
    TaskInputFromJSON,
    TaskInputFromJSONTyped,
    TaskInputToJSON,
} from './TaskInput';

/**
 * 
 * @export
 * @interface Task
 */
export interface Task {
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof Task
     */
    links?: { [key: string]: Link; };
    /**
     * 
     * @type {boolean}
     * @memberof Task
     */
    active?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Task
     */
    completed?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof Task
     */
    completedDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    description?: string;
    /**
     * 
     * @type {Array<TaskInput>}
     * @memberof Task
     */
    inputs?: Array<TaskInput>;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Task
     */
    skippable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    subject?: string;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    taskId?: string;
}

/**
 * Check if a given object implements the Task interface.
 */
export function instanceOfTask(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TaskFromJSON(json: any): Task {
    return TaskFromJSONTyped(json, false);
}

export function TaskFromJSONTyped(json: any, ignoreDiscriminator: boolean): Task {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, '_links') ? undefined : (mapValues(json['_links'], LinkFromJSON)),
        'active': !exists(json, 'active') ? undefined : json['active'],
        'completed': !exists(json, 'completed') ? undefined : json['completed'],
        'completedDate': !exists(json, 'completedDate') ? undefined : (new Date(json['completedDate'])),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'inputs': !exists(json, 'inputs') ? undefined : ((json['inputs'] as Array<any>).map(TaskInputFromJSON)),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'skippable': !exists(json, 'skippable') ? undefined : json['skippable'],
        'subject': !exists(json, 'subject') ? undefined : json['subject'],
        'taskId': !exists(json, 'taskId') ? undefined : json['taskId'],
    };
}

export function TaskToJSON(value?: Task | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_links': value.links === undefined ? undefined : (mapValues(value.links, LinkToJSON)),
        'active': value.active,
        'completed': value.completed,
        'completedDate': value.completedDate === undefined ? undefined : (value.completedDate.toISOString()),
        'description': value.description,
        'inputs': value.inputs === undefined ? undefined : ((value.inputs as Array<any>).map(TaskInputToJSON)),
        'name': value.name,
        'skippable': value.skippable,
        'subject': value.subject,
        'taskId': value.taskId,
    };
}

