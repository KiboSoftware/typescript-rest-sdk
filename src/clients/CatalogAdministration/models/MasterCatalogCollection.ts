/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Admin Services
 * OpenAPI Spec for Kibo Catalog Admin Services
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { MasterCatalog } from './MasterCatalog';
import {
    MasterCatalogFromJSON,
    MasterCatalogFromJSONTyped,
    MasterCatalogToJSON,
} from './MasterCatalog';

/**
 * Collection of MasterCatalogs
 * @export
 * @interface MasterCatalogCollection
 */
export interface MasterCatalogCollection {
    /**
     * 
     * @type {number}
     * @memberof MasterCatalogCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<MasterCatalog>}
     * @memberof MasterCatalogCollection
     */
    items?: Array<MasterCatalog> | null;
}

/**
 * Check if a given object implements the MasterCatalogCollection interface.
 */
export function instanceOfMasterCatalogCollection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MasterCatalogCollectionFromJSON(json: any): MasterCatalogCollection {
    return MasterCatalogCollectionFromJSONTyped(json, false);
}

export function MasterCatalogCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): MasterCatalogCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(MasterCatalogFromJSON)),
    };
}

export function MasterCatalogCollectionToJSON(value?: MasterCatalogCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'totalCount': value.totalCount,
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(MasterCatalogToJSON)),
    };
}

