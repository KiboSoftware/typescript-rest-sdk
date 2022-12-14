/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Admin Services
 * OpenAPI Spec for Kibo Catalog Admin Services
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
 * @interface CatalogAdminsMasterCatalog
 */
export interface CatalogAdminsMasterCatalog {
    /**
     * MasterCatalogId (readonly)
     * @type {number}
     * @memberof CatalogAdminsMasterCatalog
     */
    id?: number;
    /**
     * Name of the MasterCatalog (readonly)
     * @type {string}
     * @memberof CatalogAdminsMasterCatalog
     */
    name?: string | null;
    /**
     * The product publishing mode of this MasterCatalog
     * @type {string}
     * @memberof CatalogAdminsMasterCatalog
     */
    productPublishingMode?: string | null;
    /**
     * If the publishingMode is Pending and LiveEditsEnabled = true, DataViewMode live can be passed in the header and live products can be directly edited.
     * @type {boolean}
     * @memberof CatalogAdminsMasterCatalog
     */
    enableLiveEdit?: boolean | null;
    /**
     * Indicates whether the MasterCatalog has been deleted and should no longer be used
     * @type {boolean}
     * @memberof CatalogAdminsMasterCatalog
     */
    isDeleted?: boolean;
}

/**
 * Check if a given object implements the CatalogAdminsMasterCatalog interface.
 */
export function instanceOfCatalogAdminsMasterCatalog(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CatalogAdminsMasterCatalogFromJSON(json: any): CatalogAdminsMasterCatalog {
    return CatalogAdminsMasterCatalogFromJSONTyped(json, false);
}

export function CatalogAdminsMasterCatalogFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogAdminsMasterCatalog {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'productPublishingMode': !exists(json, 'productPublishingMode') ? undefined : json['productPublishingMode'],
        'enableLiveEdit': !exists(json, 'enableLiveEdit') ? undefined : json['enableLiveEdit'],
        'isDeleted': !exists(json, 'isDeleted') ? undefined : json['isDeleted'],
    };
}

export function CatalogAdminsMasterCatalogToJSON(value?: CatalogAdminsMasterCatalog | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'productPublishingMode': value.productPublishingMode,
        'enableLiveEdit': value.enableLiveEdit,
        'isDeleted': value.isDeleted,
    };
}

