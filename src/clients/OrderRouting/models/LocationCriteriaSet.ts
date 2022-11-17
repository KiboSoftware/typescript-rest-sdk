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
import type { LocationCriteriaSetDataDefinition } from './LocationCriteriaSetDataDefinition';
import {
    LocationCriteriaSetDataDefinitionFromJSON,
    LocationCriteriaSetDataDefinitionFromJSONTyped,
    LocationCriteriaSetDataDefinitionToJSON,
} from './LocationCriteriaSetDataDefinition';
import type { UserContextInformation } from './UserContextInformation';
import {
    UserContextInformationFromJSON,
    UserContextInformationFromJSONTyped,
    UserContextInformationToJSON,
} from './UserContextInformation';

/**
 * 
 * @export
 * @interface LocationCriteriaSet
 */
export interface LocationCriteriaSet {
    /**
     * 
     * @type {Array<LocationCriteriaSetDataDefinition>}
     * @memberof LocationCriteriaSet
     */
    columnDefinitions?: Array<LocationCriteriaSetDataDefinition>;
    /**
     * 
     * @type {Date}
     * @memberof LocationCriteriaSet
     */
    created?: Date;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSet
     */
    creatorUsername?: string;
    /**
     * 
     * @type {number}
     * @memberof LocationCriteriaSet
     */
    environmentID?: number;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSet
     */
    fileName?: string;
    /**
     * 
     * @type {number}
     * @memberof LocationCriteriaSet
     */
    locationCriteriaSetID?: number;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSet
     */
    pathString?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LocationCriteriaSet
     */
    persisted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSet
     */
    readyState?: LocationCriteriaSetReadyStateEnum;
    /**
     * 
     * @type {number}
     * @memberof LocationCriteriaSet
     */
    siteID?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationCriteriaSet
     */
    tenantID?: number;
    /**
     * 
     * @type {Date}
     * @memberof LocationCriteriaSet
     */
    updated?: Date;
    /**
     * 
     * @type {string}
     * @memberof LocationCriteriaSet
     */
    updaterUsername?: string;
    /**
     * 
     * @type {UserContextInformation}
     * @memberof LocationCriteriaSet
     */
    userContext?: UserContextInformation;
}


/**
 * @export
 */
export const LocationCriteriaSetReadyStateEnum = {
    Ready: 'dataset.ready',
    Processing: 'dataset.processing',
    ErrorProcessing: 'dataset.error.processing'
} as const;
export type LocationCriteriaSetReadyStateEnum = typeof LocationCriteriaSetReadyStateEnum[keyof typeof LocationCriteriaSetReadyStateEnum];


/**
 * Check if a given object implements the LocationCriteriaSet interface.
 */
export function instanceOfLocationCriteriaSet(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LocationCriteriaSetFromJSON(json: any): LocationCriteriaSet {
    return LocationCriteriaSetFromJSONTyped(json, false);
}

export function LocationCriteriaSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocationCriteriaSet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'columnDefinitions': !exists(json, 'columnDefinitions') ? undefined : ((json['columnDefinitions'] as Array<any>).map(LocationCriteriaSetDataDefinitionFromJSON)),
        'created': !exists(json, 'created') ? undefined : (new Date(json['created'])),
        'creatorUsername': !exists(json, 'creatorUsername') ? undefined : json['creatorUsername'],
        'environmentID': !exists(json, 'environmentID') ? undefined : json['environmentID'],
        'fileName': !exists(json, 'fileName') ? undefined : json['fileName'],
        'locationCriteriaSetID': !exists(json, 'locationCriteriaSetID') ? undefined : json['locationCriteriaSetID'],
        'pathString': !exists(json, 'pathString') ? undefined : json['pathString'],
        'persisted': !exists(json, 'persisted') ? undefined : json['persisted'],
        'readyState': !exists(json, 'readyState') ? undefined : json['readyState'],
        'siteID': !exists(json, 'siteID') ? undefined : json['siteID'],
        'tenantID': !exists(json, 'tenantID') ? undefined : json['tenantID'],
        'updated': !exists(json, 'updated') ? undefined : (new Date(json['updated'])),
        'updaterUsername': !exists(json, 'updaterUsername') ? undefined : json['updaterUsername'],
        'userContext': !exists(json, 'userContext') ? undefined : UserContextInformationFromJSON(json['userContext']),
    };
}

export function LocationCriteriaSetToJSON(value?: LocationCriteriaSet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'columnDefinitions': value.columnDefinitions === undefined ? undefined : ((value.columnDefinitions as Array<any>).map(LocationCriteriaSetDataDefinitionToJSON)),
        'created': value.created === undefined ? undefined : (value.created.toISOString()),
        'creatorUsername': value.creatorUsername,
        'environmentID': value.environmentID,
        'fileName': value.fileName,
        'locationCriteriaSetID': value.locationCriteriaSetID,
        'pathString': value.pathString,
        'persisted': value.persisted,
        'readyState': value.readyState,
        'siteID': value.siteID,
        'tenantID': value.tenantID,
        'updated': value.updated === undefined ? undefined : (value.updated.toISOString()),
        'updaterUsername': value.updaterUsername,
        'userContext': UserContextInformationToJSON(value.userContext),
    };
}

