/* tslint:disable */
/* eslint-disable */
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
 * 
 * @export
 * @interface BaseTenantEntity
 */
export interface BaseTenantEntity {
    /**
     * 
     * @type {number}
     * @memberof BaseTenantEntity
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof BaseTenantEntity
     */
    name?: string | null;
}
/**
 * 
 * @export
 * @interface Catalog
 */
export interface Catalog {
    /**
     * 
     * @type {number}
     * @memberof Catalog
     */
    tenantId?: number;
    /**
     * 
     * @type {number}
     * @memberof Catalog
     */
    masterCatalogId?: number;
    /**
     * 
     * @type {string}
     * @memberof Catalog
     */
    defaultLocaleCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Catalog
     */
    defaultCurrencyCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Catalog
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Catalog
     */
    name?: string | null;
}
/**
 * 
 * @export
 * @interface Site
 */
export interface Site {
    /**
     * 
     * @type {number}
     * @memberof Site
     */
    tenantId?: number;
    /**
     * 
     * @type {number}
     * @memberof Site
     */
    catalogId?: number;
    /**
     * 
     * @type {string}
     * @memberof Site
     */
    localeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Site
     */
    countryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Site
     */
    currencyCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Site
     */
    domain?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Site
     */
    primaryCustomDomain?: string | null;
    /**
     * 
     * @type {Array<TenantAttribute>}
     * @memberof Site
     */
    attributes?: Array<TenantAttribute> | null;
    /**
     * 
     * @type {number}
     * @memberof Site
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Site
     */
    name?: string | null;
}
/**
 * 
 * @export
 * @interface TenantAttribute
 */
export interface TenantAttribute {
    /**
     * 
     * @type {string}
     * @memberof TenantAttribute
     */
    name?: string | null;
    /**
     * 
     * @type {any}
     * @memberof TenantAttribute
     */
    value?: any | null;
    /**
     * 
     * @type {string}
     * @memberof TenantAttribute
     */
    createBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TenantAttribute
     */
    createDate?: string;
    /**
     * 
     * @type {string}
     * @memberof TenantAttribute
     */
    updateBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TenantAttribute
     */
    updateDate?: string;
}
/**
 * 
 * @export
 * @interface TenantTenant
 */
export interface TenantTenant {
    /**
     * 
     * @type {boolean}
     * @memberof TenantTenant
     */
    isDevTenant?: boolean;
    /**
     * 
     * @type {Array<Site>}
     * @memberof TenantTenant
     */
    sites?: Array<Site> | null;
    /**
     * 
     * @type {Array<AdminUserMasterCatalog>}
     * @memberof TenantTenant
     */
    masterCatalogs?: Array<AdminUserMasterCatalog> | null;
    /**
     * 
     * @type {string}
     * @memberof TenantTenant
     */
    domain?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TenantTenant
     */
    lastLoginDate?: string | null;
    /**
     * 
     * @type {Array<TenantAttribute>}
     * @memberof TenantTenant
     */
    attributes?: Array<TenantAttribute> | null;
    /**
     * 
     * @type {string}
     * @memberof TenantTenant
     */
    expiry?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof TenantTenant
     */
    isUnified?: boolean;
    /**
     * 
     * @type {number}
     * @memberof TenantTenant
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof TenantTenant
     */
    name?: string | null;
}
