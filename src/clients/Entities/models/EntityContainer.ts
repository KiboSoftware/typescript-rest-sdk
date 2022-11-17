/* tslint:disable */
/* eslint-disable */
/**
 * Kibo MZDB Service
 * OpenAPI Spec for Kibo MZDB Service
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
 * The metadata and Entity contents for an entity persisted in an EntityList in MZDB. The Item property contains the json representation of the Entity
 * @export
 * @interface EntityContainer
 */
export interface EntityContainer {
    /**
     * 
     * @type {number}
     * @memberof EntityContainer
     */
    tenantId?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityContainer
     */
    siteId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof EntityContainer
     */
    masterCatalogId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof EntityContainer
     */
    catalogId?: number | null;
    /**
     * The localeCode for the Entity. This will only be populated for EntityLists that are created with IsLocaleSpecific set to true.
     * @type {string}
     * @memberof EntityContainer
     */
    localeCode?: string | null;
    /**
     * The nameSpace and name for the EntityList in the format name@nameSpace.
     * @type {string}
     * @memberof EntityContainer
     */
    listFullName?: string | null;
    /**
     * The userId of the shopper account associated with this Entity. This will only be populated for EntityLists that are creaetd with IsShopperSpecific set to true.
     * @type {string}
     * @memberof EntityContainer
     */
    userId?: string | null;
    /**
     * The unique identifier for the Entity.
     * @type {string}
     * @memberof EntityContainer
     */
    id?: string | null;
    /**
     * The entity in json format.
     * @type {any}
     * @memberof EntityContainer
     */
    item?: any | null;
    /**
     * 
     * @type {string}
     * @memberof EntityContainer
     */
    createBy?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof EntityContainer
     */
    createDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof EntityContainer
     */
    updateBy?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof EntityContainer
     */
    updateDate?: Date;
}

/**
 * Check if a given object implements the EntityContainer interface.
 */
export function instanceOfEntityContainer(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EntityContainerFromJSON(json: any): EntityContainer {
    return EntityContainerFromJSONTyped(json, false);
}

export function EntityContainerFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntityContainer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tenantId': !exists(json, 'tenantId') ? undefined : json['tenantId'],
        'siteId': !exists(json, 'siteId') ? undefined : json['siteId'],
        'masterCatalogId': !exists(json, 'masterCatalogId') ? undefined : json['masterCatalogId'],
        'catalogId': !exists(json, 'catalogId') ? undefined : json['catalogId'],
        'localeCode': !exists(json, 'localeCode') ? undefined : json['localeCode'],
        'listFullName': !exists(json, 'listFullName') ? undefined : json['listFullName'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'item': !exists(json, 'item') ? undefined : json['item'],
        'createBy': !exists(json, 'createBy') ? undefined : json['createBy'],
        'createDate': !exists(json, 'createDate') ? undefined : (new Date(json['createDate'])),
        'updateBy': !exists(json, 'updateBy') ? undefined : json['updateBy'],
        'updateDate': !exists(json, 'updateDate') ? undefined : (new Date(json['updateDate'])),
    };
}

export function EntityContainerToJSON(value?: EntityContainer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tenantId': value.tenantId,
        'siteId': value.siteId,
        'masterCatalogId': value.masterCatalogId,
        'catalogId': value.catalogId,
        'localeCode': value.localeCode,
        'listFullName': value.listFullName,
        'userId': value.userId,
        'id': value.id,
        'item': value.item,
        'createBy': value.createBy,
        'createDate': value.createDate === undefined ? undefined : (value.createDate.toISOString()),
        'updateBy': value.updateBy,
        'updateDate': value.updateDate === undefined ? undefined : (value.updateDate.toISOString()),
    };
}
