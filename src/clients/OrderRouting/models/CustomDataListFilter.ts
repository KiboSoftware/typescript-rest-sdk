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
import type { UnitOfobject } from './UnitOfobject';
import {
    UnitOfobjectFromJSON,
    UnitOfobjectFromJSONTyped,
    UnitOfobjectToJSON,
} from './UnitOfobject';
import type { UserContextInformation } from './UserContextInformation';
import {
    UserContextInformationFromJSON,
    UserContextInformationFromJSONTyped,
    UserContextInformationToJSON,
} from './UserContextInformation';

/**
 * 
 * @export
 * @interface CustomDataListFilter
 */
export interface CustomDataListFilter {
    /**
     * 
     * @type {string}
     * @memberof CustomDataListFilter
     */
    booleanOperator?: CustomDataListFilterBooleanOperatorEnum;
    /**
     * 
     * @type {Date}
     * @memberof CustomDataListFilter
     */
    created?: Date;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListFilter
     */
    creatorUsername?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListFilter
     */
    customAttributeName?: string;
    /**
     * 
     * @type {number}
     * @memberof CustomDataListFilter
     */
    customDataListID?: number;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListFilter
     */
    dataPointExtensibleAttributeFQN?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListFilter
     */
    dataPointExtensibleAttributeName?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListFilter
     */
    dataPointExtensibleAttributeType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CustomDataListFilter
     */
    dataPointExtensibleFilter?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListFilter
     */
    dotDelimitedPropertyName?: string;
    /**
     * 
     * @type {number}
     * @memberof CustomDataListFilter
     */
    environmentID?: number;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListFilter
     */
    extensibleAttributeFQN?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListFilter
     */
    extensibleAttributeName?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListFilter
     */
    extensibleAttributeType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CustomDataListFilter
     */
    extensibleFilter?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CustomDataListFilter
     */
    filterID?: number;
    /**
     * 
     * @type {UnitOfobject}
     * @memberof CustomDataListFilter
     */
    filterUnit?: UnitOfobject;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListFilter
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListFilter
     */
    pathString?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CustomDataListFilter
     */
    persisted?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CustomDataListFilter
     */
    siteID?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomDataListFilter
     */
    tenantID?: number;
    /**
     * 
     * @type {Date}
     * @memberof CustomDataListFilter
     */
    updated?: Date;
    /**
     * 
     * @type {string}
     * @memberof CustomDataListFilter
     */
    updaterUsername?: string;
    /**
     * 
     * @type {UserContextInformation}
     * @memberof CustomDataListFilter
     */
    userContext?: UserContextInformation;
}


/**
 * @export
 */
export const CustomDataListFilterBooleanOperatorEnum = {
    Equal: 'filter.logic.equal',
    NotEqual: 'filter.logic.not.equal',
    GreaterThan: 'filter.logic.greater.than',
    LessThan: 'filter.logic.less.than',
    GreaterOrEqual: 'filter.logic.greater.or.equal',
    LessOrEqual: 'filter.logic.less.or.equal',
    In: 'filter.logic.in',
    NotIn: 'filter.logic.not.in',
    Between: 'filter.logic.between',
    StartsWith: 'filter.logic.starts.with',
    EndsWith: 'filter.logic.ends.with',
    Contains: 'filter.logic.contains',
    Subset: 'filter.logic.subset'
} as const;
export type CustomDataListFilterBooleanOperatorEnum = typeof CustomDataListFilterBooleanOperatorEnum[keyof typeof CustomDataListFilterBooleanOperatorEnum];


/**
 * Check if a given object implements the CustomDataListFilter interface.
 */
export function instanceOfCustomDataListFilter(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomDataListFilterFromJSON(json: any): CustomDataListFilter {
    return CustomDataListFilterFromJSONTyped(json, false);
}

export function CustomDataListFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomDataListFilter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'booleanOperator': !exists(json, 'booleanOperator') ? undefined : json['booleanOperator'],
        'created': !exists(json, 'created') ? undefined : (new Date(json['created'])),
        'creatorUsername': !exists(json, 'creatorUsername') ? undefined : json['creatorUsername'],
        'customAttributeName': !exists(json, 'customAttributeName') ? undefined : json['customAttributeName'],
        'customDataListID': !exists(json, 'customDataListID') ? undefined : json['customDataListID'],
        'dataPointExtensibleAttributeFQN': !exists(json, 'dataPointExtensibleAttributeFQN') ? undefined : json['dataPointExtensibleAttributeFQN'],
        'dataPointExtensibleAttributeName': !exists(json, 'dataPointExtensibleAttributeName') ? undefined : json['dataPointExtensibleAttributeName'],
        'dataPointExtensibleAttributeType': !exists(json, 'dataPointExtensibleAttributeType') ? undefined : json['dataPointExtensibleAttributeType'],
        'dataPointExtensibleFilter': !exists(json, 'dataPointExtensibleFilter') ? undefined : json['dataPointExtensibleFilter'],
        'dotDelimitedPropertyName': !exists(json, 'dotDelimitedPropertyName') ? undefined : json['dotDelimitedPropertyName'],
        'environmentID': !exists(json, 'environmentID') ? undefined : json['environmentID'],
        'extensibleAttributeFQN': !exists(json, 'extensibleAttributeFQN') ? undefined : json['extensibleAttributeFQN'],
        'extensibleAttributeName': !exists(json, 'extensibleAttributeName') ? undefined : json['extensibleAttributeName'],
        'extensibleAttributeType': !exists(json, 'extensibleAttributeType') ? undefined : json['extensibleAttributeType'],
        'extensibleFilter': !exists(json, 'extensibleFilter') ? undefined : json['extensibleFilter'],
        'filterID': !exists(json, 'filterID') ? undefined : json['filterID'],
        'filterUnit': !exists(json, 'filterUnit') ? undefined : UnitOfobjectFromJSON(json['filterUnit']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'pathString': !exists(json, 'pathString') ? undefined : json['pathString'],
        'persisted': !exists(json, 'persisted') ? undefined : json['persisted'],
        'siteID': !exists(json, 'siteID') ? undefined : json['siteID'],
        'tenantID': !exists(json, 'tenantID') ? undefined : json['tenantID'],
        'updated': !exists(json, 'updated') ? undefined : (new Date(json['updated'])),
        'updaterUsername': !exists(json, 'updaterUsername') ? undefined : json['updaterUsername'],
        'userContext': !exists(json, 'userContext') ? undefined : UserContextInformationFromJSON(json['userContext']),
    };
}

export function CustomDataListFilterToJSON(value?: CustomDataListFilter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'booleanOperator': value.booleanOperator,
        'created': value.created === undefined ? undefined : (value.created.toISOString()),
        'creatorUsername': value.creatorUsername,
        'customAttributeName': value.customAttributeName,
        'customDataListID': value.customDataListID,
        'dataPointExtensibleAttributeFQN': value.dataPointExtensibleAttributeFQN,
        'dataPointExtensibleAttributeName': value.dataPointExtensibleAttributeName,
        'dataPointExtensibleAttributeType': value.dataPointExtensibleAttributeType,
        'dataPointExtensibleFilter': value.dataPointExtensibleFilter,
        'dotDelimitedPropertyName': value.dotDelimitedPropertyName,
        'environmentID': value.environmentID,
        'extensibleAttributeFQN': value.extensibleAttributeFQN,
        'extensibleAttributeName': value.extensibleAttributeName,
        'extensibleAttributeType': value.extensibleAttributeType,
        'extensibleFilter': value.extensibleFilter,
        'filterID': value.filterID,
        'filterUnit': UnitOfobjectToJSON(value.filterUnit),
        'name': value.name,
        'pathString': value.pathString,
        'persisted': value.persisted,
        'siteID': value.siteID,
        'tenantID': value.tenantID,
        'updated': value.updated === undefined ? undefined : (value.updated.toISOString()),
        'updaterUsername': value.updaterUsername,
        'userContext': UserContextInformationToJSON(value.userContext),
    };
}
