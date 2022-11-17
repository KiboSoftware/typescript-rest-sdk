/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Admin User Service
 * OpenAPI Spec for Kibo Admin User Service
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Catalog } from './Catalog';
import {
    CatalogFromJSON,
    CatalogFromJSONTyped,
    CatalogToJSON,
} from './Catalog';

/**
 * 
 * @export
 * @interface AdminUserMasterCatalog
 */
export interface AdminUserMasterCatalog {
    /**
     * 
     * @type {number}
     * @memberof AdminUserMasterCatalog
     */
    tenantId?: number;
    /**
     * 
     * @type {string}
     * @memberof AdminUserMasterCatalog
     */
    defaultLocaleCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AdminUserMasterCatalog
     */
    defaultCurrencyCode?: string | null;
    /**
     * 
     * @type {Array<Catalog>}
     * @memberof AdminUserMasterCatalog
     */
    catalogs?: Array<Catalog> | null;
    /**
     * 
     * @type {number}
     * @memberof AdminUserMasterCatalog
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof AdminUserMasterCatalog
     */
    name?: string | null;
}

/**
 * Check if a given object implements the AdminUserMasterCatalog interface.
 */
export function instanceOfAdminUserMasterCatalog(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AdminUserMasterCatalogFromJSON(json: any): AdminUserMasterCatalog {
    return AdminUserMasterCatalogFromJSONTyped(json, false);
}

export function AdminUserMasterCatalogFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdminUserMasterCatalog {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tenantId': !exists(json, 'tenantId') ? undefined : json['tenantId'],
        'defaultLocaleCode': !exists(json, 'defaultLocaleCode') ? undefined : json['defaultLocaleCode'],
        'defaultCurrencyCode': !exists(json, 'defaultCurrencyCode') ? undefined : json['defaultCurrencyCode'],
        'catalogs': !exists(json, 'catalogs') ? undefined : (json['catalogs'] === null ? null : (json['catalogs'] as Array<any>).map(CatalogFromJSON)),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function AdminUserMasterCatalogToJSON(value?: AdminUserMasterCatalog | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tenantId': value.tenantId,
        'defaultLocaleCode': value.defaultLocaleCode,
        'defaultCurrencyCode': value.defaultCurrencyCode,
        'catalogs': value.catalogs === undefined ? undefined : (value.catalogs === null ? null : (value.catalogs as Array<any>).map(CatalogToJSON)),
        'id': value.id,
        'name': value.name,
    };
}

