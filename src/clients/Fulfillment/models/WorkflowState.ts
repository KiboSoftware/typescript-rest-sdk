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
import type { AuditInfo0 } from './AuditInfo0';
import {
    AuditInfo0FromJSON,
    AuditInfo0FromJSONTyped,
    AuditInfo0ToJSON,
} from './AuditInfo0';
import type { BpmVariable } from './BpmVariable';
import {
    BpmVariableFromJSON,
    BpmVariableFromJSONTyped,
    BpmVariableToJSON,
} from './BpmVariable';
import type { Task } from './Task';
import {
    TaskFromJSON,
    TaskFromJSONTyped,
    TaskToJSON,
} from './Task';

/**
 * 
 * @export
 * @interface WorkflowState
 */
export interface WorkflowState {
    /**
     * 
     * @type {string}
     * @memberof WorkflowState
     */
    activeTaskName?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof WorkflowState
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {AuditInfo0}
     * @memberof WorkflowState
     */
    auditInfo?: AuditInfo0;
    /**
     * 
     * @type {Date}
     * @memberof WorkflowState
     */
    completedDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof WorkflowState
     */
    processInstanceId?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkflowState
     */
    shipmentState?: string;
    /**
     * 
     * @type {Array<Task>}
     * @memberof WorkflowState
     */
    taskList?: Array<Task>;
    /**
     * 
     * @type {{ [key: string]: BpmVariable; }}
     * @memberof WorkflowState
     */
    variables?: { [key: string]: BpmVariable; };
}

/**
 * Check if a given object implements the WorkflowState interface.
 */
export function instanceOfWorkflowState(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WorkflowStateFromJSON(json: any): WorkflowState {
    return WorkflowStateFromJSONTyped(json, false);
}

export function WorkflowStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkflowState {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'activeTaskName': !exists(json, 'activeTaskName') ? undefined : json['activeTaskName'],
        'attributes': !exists(json, 'attributes') ? undefined : json['attributes'],
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AuditInfo0FromJSON(json['auditInfo']),
        'completedDate': !exists(json, 'completedDate') ? undefined : (new Date(json['completedDate'])),
        'processInstanceId': !exists(json, 'processInstanceId') ? undefined : json['processInstanceId'],
        'shipmentState': !exists(json, 'shipmentState') ? undefined : json['shipmentState'],
        'taskList': !exists(json, 'taskList') ? undefined : ((json['taskList'] as Array<any>).map(TaskFromJSON)),
        'variables': !exists(json, 'variables') ? undefined : (mapValues(json['variables'], BpmVariableFromJSON)),
    };
}

export function WorkflowStateToJSON(value?: WorkflowState | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'activeTaskName': value.activeTaskName,
        'attributes': value.attributes,
        'auditInfo': AuditInfo0ToJSON(value.auditInfo),
        'completedDate': value.completedDate === undefined ? undefined : (value.completedDate.toISOString()),
        'processInstanceId': value.processInstanceId,
        'shipmentState': value.shipmentState,
        'taskList': value.taskList === undefined ? undefined : ((value.taskList as Array<any>).map(TaskToJSON)),
        'variables': value.variables === undefined ? undefined : (mapValues(value.variables, BpmVariableToJSON)),
    };
}
