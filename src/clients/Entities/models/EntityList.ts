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
import type { IndexedProperty } from './IndexedProperty';
import {
    IndexedPropertyFromJSON,
    IndexedPropertyFromJSONTyped,
    IndexedPropertyToJSON,
} from './IndexedProperty';
import type { ListView } from './ListView';
import {
    ListViewFromJSON,
    ListViewFromJSONTyped,
    ListViewToJSON,
} from './ListView';

/**
 * The definition of an MZDB EntityList which describes the characteristics of the EntityList on a per tenant basis. EntityLists are created at the tenant level, but instances of the EntityLists are implicitly created at the appropriate context level as entities are added or removed from the EntityList.
 * @export
 * @interface EntityList
 */
export interface EntityList {
    /**
     * 
     * @type {number}
     * @memberof EntityList
     */
    tenantId?: number;
    /**
     * The nameSpace for the EntityList which must be within the nameSpace scope of the developer Account for the creating application.  The name and namespace are formatted as name@nameSpace when specified as fullName. An EntityLists fullName must be unique within the tenant in which it is created.
     * @type {string}
     * @memberof EntityList
     */
    nameSpace?: string | null;
    /**
     * The name for the EntityList which must be unique within the namespace provided.  The name and namespace are formatted as name@nameSpace when specified as fullName. An EntityLists fullName must be unique within the tenant in which it is created.
     * @type {string}
     * @memberof EntityList
     */
    name?: string | null;
    /**
     * At which context level are entities stored in the list. Possible values are "tenant", "site", "masterCatalog" or "catalog".  Each list instance will exist at this context level for the tenant.
     * @type {string}
     * @memberof EntityList
     */
    contextLevel?: string | null;
    /**
     * Indicates whether or not Mozu should assign a generated identifier for each entity in the list or whether a unique identifier will be provided for each identity. If set to false, then a value must be provided for the IdProperty for the list.
     * @type {boolean}
     * @memberof EntityList
     */
    useSystemAssignedId?: boolean;
    /**
     * 
     * @type {IndexedProperty}
     * @memberof EntityList
     */
    idProperty?: IndexedProperty;
    /**
     * 
     * @type {IndexedProperty}
     * @memberof EntityList
     */
    indexA?: IndexedProperty;
    /**
     * 
     * @type {IndexedProperty}
     * @memberof EntityList
     */
    indexB?: IndexedProperty;
    /**
     * 
     * @type {IndexedProperty}
     * @memberof EntityList
     */
    indexC?: IndexedProperty;
    /**
     * 
     * @type {IndexedProperty}
     * @memberof EntityList
     */
    indexD?: IndexedProperty;
    /**
     * Indicates whether Enitities in the EntityList are allowed to be accessed from a Mozu storefront.
     * @type {boolean}
     * @memberof EntityList
     */
    isVisibleInStorefront?: boolean;
    /**
     * Indicates whether MZDB should store entities in the EntityList instance specific to the localeCode provided.  If true, all operations on the EntityList will be filtered by the provided localeCode on the request or using the defautLocaleCode for the context.  All entities created in the EntityList will be stored with the localeCode provided on the request or the defautLocaleCode for the context as an additional implicit key. The default value is false.
     * @type {boolean}
     * @memberof EntityList
     */
    isLocaleSpecific?: boolean;
    /**
     * Indicates whether MZDB should store entities in the EntityList instance specific to the current shopper on the request.  If true, all operations on the EntityList will be filtered by the id of the shopper from the shopper claims provided on the request.  All entities created in the EntityList will be stored with the id of the shopper from the shopper claims provided on the request as an additional implicit key. The default value is false.
     * @type {boolean}
     * @memberof EntityList
     */
    isShopperSpecific?: boolean;
    /**
     * Indicates whether MZDB should clone all of the Entities in the EntityList when cloning an existing sandbox for which this list is already defined.  The default value is false.
     * @type {boolean}
     * @memberof EntityList
     */
    isSandboxDataCloningSupported?: boolean;
    /**
     * The ListViews defined for this EntityList.  ListViews may be used to automatically filter an EntityList or transform the Entities in the list to a new Schema.
     * @type {Array<ListView>}
     * @memberof EntityList
     */
    views?: Array<ListView> | null;
    /**
     * Usages are arbitratry sting values used to provide instructions for other applications as to the intended areas where the list should be used. Mozu uses the "admin" usage valued to indicate that an EntityList should appear in the EntityManager in the Admin UI.  The values are open ended and applications may provide any value for a usage. This field can be used in queries to the EntityList.
     * @type {Array<string>}
     * @memberof EntityList
     */
    usages?: Array<string> | null;
    /**
     * An arbitrary json property to be used by external applications for any purpose. MZDB will persist and retrieve the metadata without any restrictions.
     * @type {any}
     * @memberof EntityList
     */
    metadata?: any | null;
    /**
     * 
     * @type {Date}
     * @memberof EntityList
     */
    createDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof EntityList
     */
    updateDate?: Date;
}

/**
 * Check if a given object implements the EntityList interface.
 */
export function instanceOfEntityList(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EntityListFromJSON(json: any): EntityList {
    return EntityListFromJSONTyped(json, false);
}

export function EntityListFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntityList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tenantId': !exists(json, 'tenantId') ? undefined : json['tenantId'],
        'nameSpace': !exists(json, 'nameSpace') ? undefined : json['nameSpace'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'contextLevel': !exists(json, 'contextLevel') ? undefined : json['contextLevel'],
        'useSystemAssignedId': !exists(json, 'useSystemAssignedId') ? undefined : json['useSystemAssignedId'],
        'idProperty': !exists(json, 'idProperty') ? undefined : IndexedPropertyFromJSON(json['idProperty']),
        'indexA': !exists(json, 'indexA') ? undefined : IndexedPropertyFromJSON(json['indexA']),
        'indexB': !exists(json, 'indexB') ? undefined : IndexedPropertyFromJSON(json['indexB']),
        'indexC': !exists(json, 'indexC') ? undefined : IndexedPropertyFromJSON(json['indexC']),
        'indexD': !exists(json, 'indexD') ? undefined : IndexedPropertyFromJSON(json['indexD']),
        'isVisibleInStorefront': !exists(json, 'isVisibleInStorefront') ? undefined : json['isVisibleInStorefront'],
        'isLocaleSpecific': !exists(json, 'isLocaleSpecific') ? undefined : json['isLocaleSpecific'],
        'isShopperSpecific': !exists(json, 'isShopperSpecific') ? undefined : json['isShopperSpecific'],
        'isSandboxDataCloningSupported': !exists(json, 'isSandboxDataCloningSupported') ? undefined : json['isSandboxDataCloningSupported'],
        'views': !exists(json, 'views') ? undefined : (json['views'] === null ? null : (json['views'] as Array<any>).map(ListViewFromJSON)),
        'usages': !exists(json, 'usages') ? undefined : json['usages'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'createDate': !exists(json, 'createDate') ? undefined : (new Date(json['createDate'])),
        'updateDate': !exists(json, 'updateDate') ? undefined : (new Date(json['updateDate'])),
    };
}

export function EntityListToJSON(value?: EntityList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tenantId': value.tenantId,
        'nameSpace': value.nameSpace,
        'name': value.name,
        'contextLevel': value.contextLevel,
        'useSystemAssignedId': value.useSystemAssignedId,
        'idProperty': IndexedPropertyToJSON(value.idProperty),
        'indexA': IndexedPropertyToJSON(value.indexA),
        'indexB': IndexedPropertyToJSON(value.indexB),
        'indexC': IndexedPropertyToJSON(value.indexC),
        'indexD': IndexedPropertyToJSON(value.indexD),
        'isVisibleInStorefront': value.isVisibleInStorefront,
        'isLocaleSpecific': value.isLocaleSpecific,
        'isShopperSpecific': value.isShopperSpecific,
        'isSandboxDataCloningSupported': value.isSandboxDataCloningSupported,
        'views': value.views === undefined ? undefined : (value.views === null ? null : (value.views as Array<any>).map(ListViewToJSON)),
        'usages': value.usages,
        'metadata': value.metadata,
        'createDate': value.createDate === undefined ? undefined : (value.createDate.toISOString()),
        'updateDate': value.updateDate === undefined ? undefined : (value.updateDate.toISOString()),
    };
}

