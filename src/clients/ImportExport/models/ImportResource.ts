/* tslint:disable */
/* eslint-disable */
/**
 * Kibo MongoAdmin Service
 * OpenAPI Spec for Kibo MongoAdmin Service
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
 * @interface ImportResource
 */
export interface ImportResource {
    /**
     * 
     * @type {string}
     * @memberof ImportResource
     */
    format?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ImportResource
     */
    resource?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ImportResource
     */
    fields?: Array<string> | null;
    /**
     * 
     * @type {boolean}
     * @memberof ImportResource
     */
    deleteOmitted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ImportResource
     */
    status?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ImportResource
     */
    isComplete?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ImportResource
     */
    statusMessage?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ImportResource
     */
    stateDetails?: string | null;
    /**
     * 
     * @type {any}
     * @memberof ImportResource
     */
    _configuration?: any | null;
}

/**
 * Check if a given object implements the ImportResource interface.
 */
export function instanceOfImportResource(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ImportResourceFromJSON(json: any): ImportResource {
    return ImportResourceFromJSONTyped(json, false);
}

export function ImportResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImportResource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'format': !exists(json, 'format') ? undefined : json['format'],
        'resource': !exists(json, 'resource') ? undefined : json['resource'],
        'fields': !exists(json, 'fields') ? undefined : json['fields'],
        'deleteOmitted': !exists(json, 'deleteOmitted') ? undefined : json['deleteOmitted'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'isComplete': !exists(json, 'isComplete') ? undefined : json['isComplete'],
        'statusMessage': !exists(json, 'statusMessage') ? undefined : json['statusMessage'],
        'stateDetails': !exists(json, 'stateDetails') ? undefined : json['stateDetails'],
        '_configuration': !exists(json, 'configuration') ? undefined : json['configuration'],
    };
}

export function ImportResourceToJSON(value?: ImportResource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'format': value.format,
        'resource': value.resource,
        'fields': value.fields,
        'deleteOmitted': value.deleteOmitted,
        'status': value.status,
        'isComplete': value.isComplete,
        'statusMessage': value.statusMessage,
        'stateDetails': value.stateDetails,
        'configuration': value._configuration,
    };
}

