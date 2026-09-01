/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface AdminGroup
 */
export interface AdminGroup {
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof AdminGroup
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * Human-readable description of the group
     * @type {string}
     * @memberof AdminGroup
     */
    description?: string | null;
    /**
     * User Group Id
     * @type {string}
     * @memberof AdminGroup
     */
    groupCode?: string | null;
    /**
     * Human-readable Name of the group
     * @type {string}
     * @memberof AdminGroup
     */
    name?: string | null;
    /**
     * Scope Id
     * @type {number}
     * @memberof AdminGroup
     */
    scopeId?: number;
    /**
     * Scope Type Id
     * @type {number}
     * @memberof AdminGroup
     */
    scopeTypeId?: number;
    /**
     * Users associate with a group
     * @type {Array<User>}
     * @memberof AdminGroup
     */
    users?: Array<User> | null;
}
/**
 * 
 * @export
 * @interface AdminGroupCollection
 */
export interface AdminGroupCollection {
    /**
     * 
     * @type {Array<AdminGroup>}
     * @memberof AdminGroupCollection
     */
    items?: Array<AdminGroup> | null;
    /**
     * 
     * @type {number}
     * @memberof AdminGroupCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof AdminGroupCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof AdminGroupCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof AdminGroupCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface AdminUserAuditInfo
 */
export interface AdminUserAuditInfo {
    /**
     * 
     * @type {string}
     * @memberof AdminUserAuditInfo
     */
    createBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AdminUserAuditInfo
     */
    createDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AdminUserAuditInfo
     */
    updateBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AdminUserAuditInfo
     */
    updateDate?: string | null;
}
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
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof AdminUserMasterCatalog
     */
    name?: string | null;
    /**
     * 
     * @type {Array<Catalog>}
     * @memberof AdminUserMasterCatalog
     */
    catalogs?: Array<Catalog> | null;
    /**
     * 
     * @type {string}
     * @memberof AdminUserMasterCatalog
     */
    defaultCurrencyCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AdminUserMasterCatalog
     */
    defaultLocaleCode?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof AdminUserMasterCatalog
     */
    supportedLocaleCodes?: Array<string> | null;
    /**
     * 
     * @type {number}
     * @memberof AdminUserMasterCatalog
     */
    tenantId?: number;
}
/**
 * 
 * @export
 * @interface AdminUserMasterCatalogAllOf
 */
export interface AdminUserMasterCatalogAllOf {
    /**
     * 
     * @type {Array<Catalog>}
     * @memberof AdminUserMasterCatalogAllOf
     */
    catalogs?: Array<Catalog> | null;
    /**
     * 
     * @type {string}
     * @memberof AdminUserMasterCatalogAllOf
     */
    defaultCurrencyCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AdminUserMasterCatalogAllOf
     */
    defaultLocaleCode?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof AdminUserMasterCatalogAllOf
     */
    supportedLocaleCodes?: Array<string> | null;
    /**
     * 
     * @type {number}
     * @memberof AdminUserMasterCatalogAllOf
     */
    tenantId?: number;
}
/**
 * Old password and new password.
 * @export
 * @interface AdminUserPasswordInfo
 */
export interface AdminUserPasswordInfo {
    /**
     * New password.
     * @type {string}
     * @memberof AdminUserPasswordInfo
     */
    newPassword: string | null;
    /**
     * Old password.
     * @type {string}
     * @memberof AdminUserPasswordInfo
     */
    oldPassword: string | null;
}
/**
 * Email address of the user who is requesting a new password.
 * @export
 * @interface AdminUserResetPasswordInfo
 */
export interface AdminUserResetPasswordInfo {
    /**
     * 
     * @type {string}
     * @memberof AdminUserResetPasswordInfo
     */
    emailAddress: string | null;
}
/**
 * Collection of UserRoles for given user.
 * @export
 * @interface AdminUserUserRoleCollection
 */
export interface AdminUserUserRoleCollection {
    /**
     * 
     * @type {Array<UserRole>}
     * @memberof AdminUserUserRoleCollection
     */
    items?: Array<UserRole> | null;
    /**
     * 
     * @type {number}
     * @memberof AdminUserUserRoleCollection
     */
    totalCount?: number;
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
 * @interface BaseTenantEntityInternal
 */
export interface BaseTenantEntityInternal {
    /**
     * 
     * @type {number}
     * @memberof BaseTenantEntityInternal
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof BaseTenantEntityInternal
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BaseTenantEntityInternal
     */
    createDate?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseTenantEntityInternal
     */
    deleteDate?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof BaseTenantEntityInternal
     */
    isDeleted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BaseTenantEntityInternal
     */
    status?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BaseTenantEntityInternal
     */
    updateDate?: string;
}
/**
 * 
 * @export
 * @interface BaseTenantEntityInternalAllOf
 */
export interface BaseTenantEntityInternalAllOf {
    /**
     * 
     * @type {string}
     * @memberof BaseTenantEntityInternalAllOf
     */
    createDate?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseTenantEntityInternalAllOf
     */
    deleteDate?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof BaseTenantEntityInternalAllOf
     */
    isDeleted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BaseTenantEntityInternalAllOf
     */
    status?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BaseTenantEntityInternalAllOf
     */
    updateDate?: string;
}
/**
 * 
 * @export
 * @interface Behavior
 */
export interface Behavior {
    /**
     * 
     * @type {number}
     * @memberof Behavior
     */
    categoryId?: number;
    /**
     * 
     * @type {number}
     * @memberof Behavior
     */
    id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Behavior
     */
    isPrivate?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Behavior
     */
    name?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Behavior
     */
    oAuthScopes?: Array<string> | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof Behavior
     */
    requiresBehaviorIds?: Array<number> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Behavior
     */
    systemRoles?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Behavior
     */
    validUserTypes?: Array<string> | null;
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
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Catalog
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Catalog
     */
    defaultCurrencyCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Catalog
     */
    defaultLocaleCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Catalog
     */
    masterCatalogId?: number;
    /**
     * 
     * @type {number}
     * @memberof Catalog
     */
    tenantId?: number;
}
/**
 * 
 * @export
 * @interface CatalogAllOf
 */
export interface CatalogAllOf {
    /**
     * 
     * @type {string}
     * @memberof CatalogAllOf
     */
    defaultCurrencyCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogAllOf
     */
    defaultLocaleCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CatalogAllOf
     */
    masterCatalogId?: number;
    /**
     * 
     * @type {number}
     * @memberof CatalogAllOf
     */
    tenantId?: number;
}
/**
 * 
 * @export
 * @interface CatalogExtended
 */
export interface CatalogExtended {
    /**
     * 
     * @type {number}
     * @memberof CatalogExtended
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof CatalogExtended
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogExtended
     */
    createDate?: string;
    /**
     * 
     * @type {string}
     * @memberof CatalogExtended
     */
    deleteDate?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CatalogExtended
     */
    isDeleted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CatalogExtended
     */
    status?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogExtended
     */
    updateDate?: string;
    /**
     * 
     * @type {string}
     * @memberof CatalogExtended
     */
    defaultCurrencyCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogExtended
     */
    defaultLocaleCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CatalogExtended
     */
    masterCatalogId?: number;
    /**
     * 
     * @type {number}
     * @memberof CatalogExtended
     */
    tenantId?: number;
}
/**
 * 
 * @export
 * @interface ChangeUserPasswordInfo
 */
export interface ChangeUserPasswordInfo {
    /**
     * 
     * @type {string}
     * @memberof ChangeUserPasswordInfo
     */
    newPassword?: string | null;
}
/**
 * 
 * @export
 * @interface CollectionOfRole
 */
export interface CollectionOfRole {
    /**
     * 
     * @type {Array<Role>}
     * @memberof CollectionOfRole
     */
    items?: Array<Role> | null;
    /**
     * 
     * @type {number}
     * @memberof CollectionOfRole
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface DeveloperAccount
 */
export interface DeveloperAccount {
    /**
     * 
     * @type {number}
     * @memberof DeveloperAccount
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof DeveloperAccount
     */
    name?: string | null;
}
/**
 * 
 * @export
 * @interface DeveloperAdminUserAuthTicket
 */
export interface DeveloperAdminUserAuthTicket {
    /**
     * 
     * @type {string}
     * @memberof DeveloperAdminUserAuthTicket
     */
    accessToken?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DeveloperAdminUserAuthTicket
     */
    accessTokenExpiration?: string;
    /**
     * 
     * @type {DeveloperAccount}
     * @memberof DeveloperAdminUserAuthTicket
     */
    account?: DeveloperAccount;
    /**
     * 
     * @type {Array<DeveloperAccount>}
     * @memberof DeveloperAdminUserAuthTicket
     */
    availableAccounts?: Array<DeveloperAccount> | null;
    /**
     * 
     * @type {string}
     * @memberof DeveloperAdminUserAuthTicket
     */
    createdOn?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof DeveloperAdminUserAuthTicket
     */
    grantedBehaviors?: Array<number> | null;
    /**
     * 
     * @type {string}
     * @memberof DeveloperAdminUserAuthTicket
     */
    jwtAccessToken?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DeveloperAdminUserAuthTicket
     */
    refreshToken?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DeveloperAdminUserAuthTicket
     */
    refreshTokenExpiration?: string;
    /**
     * 
     * @type {UserProfile}
     * @memberof DeveloperAdminUserAuthTicket
     */
    user?: UserProfile;
}
/**
 * 
 * @export
 * @interface Domain
 */
export interface Domain {
    /**
     * 
     * @type {string}
     * @memberof Domain
     */
    cName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Domain
     */
    createDate?: string;
    /**
     * 
     * @type {string}
     * @memberof Domain
     */
    domainName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Domain
     */
    ipAddress?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof Domain
     */
    isDomainManaged?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Domain
     */
    isInfrastructureRecord?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Domain
     */
    isPrimary?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Domain
     */
    isSystemAssigned?: boolean;
    /**
     * 
     * @type {number}
     * @memberof Domain
     */
    siteId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Domain
     */
    tenantId?: number;
    /**
     * 
     * @type {string}
     * @memberof Domain
     */
    updateDate?: string;
    /**
     * 
     * @type {string}
     * @memberof Domain
     */
    zone?: string | null;
}
/**
 * 
 * @export
 * @interface MasterCatalogExtended
 */
export interface MasterCatalogExtended {
    /**
     * 
     * @type {number}
     * @memberof MasterCatalogExtended
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterCatalogExtended
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MasterCatalogExtended
     */
    createDate?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCatalogExtended
     */
    deleteDate?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof MasterCatalogExtended
     */
    isDeleted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MasterCatalogExtended
     */
    status?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MasterCatalogExtended
     */
    updateDate?: string;
    /**
     * 
     * @type {Array<CatalogExtended>}
     * @memberof MasterCatalogExtended
     */
    catalogs?: Array<CatalogExtended> | null;
    /**
     * 
     * @type {string}
     * @memberof MasterCatalogExtended
     */
    defaultCurrencyCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MasterCatalogExtended
     */
    defaultLocaleCode?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof MasterCatalogExtended
     */
    supportedLocaleCodes?: Array<string> | null;
    /**
     * 
     * @type {number}
     * @memberof MasterCatalogExtended
     */
    tenantId?: number;
}
/**
 * 
 * @export
 * @interface MasterCatalogExtendedAllOf
 */
export interface MasterCatalogExtendedAllOf {
    /**
     * 
     * @type {Array<CatalogExtended>}
     * @memberof MasterCatalogExtendedAllOf
     */
    catalogs?: Array<CatalogExtended> | null;
    /**
     * 
     * @type {string}
     * @memberof MasterCatalogExtendedAllOf
     */
    defaultCurrencyCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MasterCatalogExtendedAllOf
     */
    defaultLocaleCode?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof MasterCatalogExtendedAllOf
     */
    supportedLocaleCodes?: Array<string> | null;
    /**
     * 
     * @type {number}
     * @memberof MasterCatalogExtendedAllOf
     */
    tenantId?: number;
}
/**
 * 
 * @export
 * @interface Owner
 */
export interface Owner {
    /**
     * 
     * @type {string}
     * @memberof Owner
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Owner
     */
    type?: string | null;
}
/**
 * 
 * @export
 * @interface Resource
 */
export interface Resource {
    /**
     * 
     * @type {string}
     * @memberof Resource
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Resource
     */
    type?: string | null;
}
/**
 * 
 * @export
 * @interface Role
 */
export interface Role {
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof Role
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {Array<Behavior>}
     * @memberof Role
     */
    behaviors?: Array<Behavior> | null;
    /**
     * 
     * @type {number}
     * @memberof Role
     */
    id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Role
     */
    isSystemRole?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Role
     */
    name?: string | null;
    /**
     * 
     * @type {Array<Owner>}
     * @memberof Role
     */
    owners?: Array<Owner> | null;
    /**
     * 
     * @type {Array<Resource>}
     * @memberof Role
     */
    resources?: Array<Resource> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Role
     */
    tags?: Array<string> | null;
    /**
     * 
     * @type {UserScope}
     * @memberof Role
     */
    userScope?: UserScope;
}
/**
 * 
 * @export
 * @interface RoleCollection
 */
export interface RoleCollection {
    /**
     * 
     * @type {Array<Role>}
     * @memberof RoleCollection
     */
    items?: Array<Role> | null;
    /**
     * 
     * @type {number}
     * @memberof RoleCollection
     */
    totalCount?: number;
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
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Site
     */
    name?: string | null;
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
    catalogId?: number;
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
    localeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Site
     */
    primaryCustomDomain?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Site
     */
    tenantId?: number;
}
/**
 * 
 * @export
 * @interface SiteAllOf
 */
export interface SiteAllOf {
    /**
     * 
     * @type {Array<TenantAttribute>}
     * @memberof SiteAllOf
     */
    attributes?: Array<TenantAttribute> | null;
    /**
     * 
     * @type {number}
     * @memberof SiteAllOf
     */
    catalogId?: number;
    /**
     * 
     * @type {string}
     * @memberof SiteAllOf
     */
    countryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SiteAllOf
     */
    currencyCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SiteAllOf
     */
    domain?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SiteAllOf
     */
    localeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SiteAllOf
     */
    primaryCustomDomain?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SiteAllOf
     */
    tenantId?: number;
}
/**
 * 
 * @export
 * @interface SiteExtended
 */
export interface SiteExtended {
    /**
     * 
     * @type {number}
     * @memberof SiteExtended
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof SiteExtended
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SiteExtended
     */
    createDate?: string;
    /**
     * 
     * @type {string}
     * @memberof SiteExtended
     */
    deleteDate?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof SiteExtended
     */
    isDeleted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SiteExtended
     */
    status?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SiteExtended
     */
    updateDate?: string;
    /**
     * 
     * @type {Array<TenantAttribute>}
     * @memberof SiteExtended
     */
    attributes?: Array<TenantAttribute> | null;
    /**
     * 
     * @type {number}
     * @memberof SiteExtended
     */
    catalogId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SiteExtended
     */
    countryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SiteExtended
     */
    defaultCurrencyCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SiteExtended
     */
    defaultLocaleCode?: string | null;
    /**
     * 
     * @type {Array<Domain>}
     * @memberof SiteExtended
     */
    domains?: Array<Domain> | null;
    /**
     * 
     * @type {boolean}
     * @memberof SiteExtended
     */
    isMozuRendered?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof SiteExtended
     */
    masterCatalogId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SiteExtended
     */
    omsCatalogId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SiteExtended
     */
    routingTargetInfo?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SiteExtended
     */
    tenantId?: number;
}
/**
 * 
 * @export
 * @interface SiteExtendedAllOf
 */
export interface SiteExtendedAllOf {
    /**
     * 
     * @type {Array<TenantAttribute>}
     * @memberof SiteExtendedAllOf
     */
    attributes?: Array<TenantAttribute> | null;
    /**
     * 
     * @type {number}
     * @memberof SiteExtendedAllOf
     */
    catalogId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SiteExtendedAllOf
     */
    countryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SiteExtendedAllOf
     */
    defaultCurrencyCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SiteExtendedAllOf
     */
    defaultLocaleCode?: string | null;
    /**
     * 
     * @type {Array<Domain>}
     * @memberof SiteExtendedAllOf
     */
    domains?: Array<Domain> | null;
    /**
     * 
     * @type {boolean}
     * @memberof SiteExtendedAllOf
     */
    isMozuRendered?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof SiteExtendedAllOf
     */
    masterCatalogId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SiteExtendedAllOf
     */
    omsCatalogId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SiteExtendedAllOf
     */
    routingTargetInfo?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SiteExtendedAllOf
     */
    tenantId?: number;
}
/**
 * 
 * @export
 * @interface Tenant
 */
export interface Tenant {
    /**
     * 
     * @type {number}
     * @memberof Tenant
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Tenant
     */
    name?: string | null;
    /**
     * 
     * @type {Array<TenantAttribute>}
     * @memberof Tenant
     */
    attributes?: Array<TenantAttribute> | null;
    /**
     * 
     * @type {string}
     * @memberof Tenant
     */
    domain?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Tenant
     */
    expiry?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof Tenant
     */
    isDevTenant?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Tenant
     */
    isUnified?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Tenant
     */
    lastLoginDate?: string | null;
    /**
     * 
     * @type {Array<AdminUserMasterCatalog>}
     * @memberof Tenant
     */
    masterCatalogs?: Array<AdminUserMasterCatalog> | null;
    /**
     * 
     * @type {Array<Site>}
     * @memberof Tenant
     */
    sites?: Array<Site> | null;
}
/**
 * 
 * @export
 * @interface TenantAdminUserAuthTicket
 */
export interface TenantAdminUserAuthTicket {
    /**
     * 
     * @type {string}
     * @memberof TenantAdminUserAuthTicket
     */
    accessToken?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TenantAdminUserAuthTicket
     */
    accessTokenExpiration?: string;
    /**
     * 
     * @type {Array<Tenant>}
     * @memberof TenantAdminUserAuthTicket
     */
    availableTenants?: Array<Tenant> | null;
    /**
     * 
     * @type {string}
     * @memberof TenantAdminUserAuthTicket
     */
    createdOn?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof TenantAdminUserAuthTicket
     */
    grantedBehaviors?: Array<number> | null;
    /**
     * 
     * @type {string}
     * @memberof TenantAdminUserAuthTicket
     */
    jwtAccessToken?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TenantAdminUserAuthTicket
     */
    redirect?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TenantAdminUserAuthTicket
     */
    refreshToken?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TenantAdminUserAuthTicket
     */
    refreshTokenExpiration?: string;
    /**
     * 
     * @type {string}
     * @memberof TenantAdminUserAuthTicket
     */
    ssoNameId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TenantAdminUserAuthTicket
     */
    ssoSession?: string | null;
    /**
     * 
     * @type {Tenant}
     * @memberof TenantAdminUserAuthTicket
     */
    tenant?: Tenant;
    /**
     * 
     * @type {UserProfile}
     * @memberof TenantAdminUserAuthTicket
     */
    user?: UserProfile;
}
/**
 * 
 * @export
 * @interface TenantAllOf
 */
export interface TenantAllOf {
    /**
     * 
     * @type {Array<TenantAttribute>}
     * @memberof TenantAllOf
     */
    attributes?: Array<TenantAttribute> | null;
    /**
     * 
     * @type {string}
     * @memberof TenantAllOf
     */
    domain?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TenantAllOf
     */
    expiry?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof TenantAllOf
     */
    isDevTenant?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TenantAllOf
     */
    isUnified?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TenantAllOf
     */
    lastLoginDate?: string | null;
    /**
     * 
     * @type {Array<AdminUserMasterCatalog>}
     * @memberof TenantAllOf
     */
    masterCatalogs?: Array<AdminUserMasterCatalog> | null;
    /**
     * 
     * @type {Array<Site>}
     * @memberof TenantAllOf
     */
    sites?: Array<Site> | null;
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
    name?: string | null;
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
    /**
     * 
     * @type {any}
     * @memberof TenantAttribute
     */
    value?: any | null;
}
/**
 * 
 * @export
 * @interface TenantCollection
 */
export interface TenantCollection {
    /**
     * 
     * @type {Array<Tenant>}
     * @memberof TenantCollection
     */
    items?: Array<Tenant> | null;
    /**
     * 
     * @type {number}
     * @memberof TenantCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof TenantCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof TenantCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof TenantCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface TenantExtended
 */
export interface TenantExtended {
    /**
     * 
     * @type {number}
     * @memberof TenantExtended
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof TenantExtended
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TenantExtended
     */
    createDate?: string;
    /**
     * 
     * @type {string}
     * @memberof TenantExtended
     */
    deleteDate?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof TenantExtended
     */
    isDeleted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TenantExtended
     */
    status?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TenantExtended
     */
    updateDate?: string;
    /**
     * 
     * @type {Array<TenantAttribute>}
     * @memberof TenantExtended
     */
    attributes?: Array<TenantAttribute> | null;
    /**
     * 
     * @type {number}
     * @memberof TenantExtended
     */
    devAccountId?: number | null;
    /**
     * 
     * @type {Domain}
     * @memberof TenantExtended
     */
    domain?: Domain;
    /**
     * 
     * @type {string}
     * @memberof TenantExtended
     */
    hardDeleteExpiry?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof TenantExtended
     */
    isDevTenant?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TenantExtended
     */
    isHardDeleted?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof TenantExtended
     */
    isHeadless?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TenantExtended
     */
    isPermanent?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof TenantExtended
     */
    isUnified?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TenantExtended
     */
    kubeNamespace?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TenantExtended
     */
    lastLoginDate?: string | null;
    /**
     * 
     * @type {Array<MasterCatalogExtended>}
     * @memberof TenantExtended
     */
    masterCatalogs?: Array<MasterCatalogExtended> | null;
    /**
     * 
     * @type {string}
     * @memberof TenantExtended
     */
    mozuInstanceId?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof TenantExtended
     */
    omsEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TenantExtended
     */
    routingTargetInfo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TenantExtended
     */
    scaleUnitId?: string | null;
    /**
     * 
     * @type {Array<SiteExtended>}
     * @memberof TenantExtended
     */
    sites?: Array<SiteExtended> | null;
    /**
     * 
     * @type {string}
     * @memberof TenantExtended
     */
    softDeleteExpiry?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof TenantExtended
     */
    supportsCustomExtensions?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TenantExtended
     */
    unifiedTenantType?: string | null;
}
/**
 * 
 * @export
 * @interface TenantExtendedAllOf
 */
export interface TenantExtendedAllOf {
    /**
     * 
     * @type {Array<TenantAttribute>}
     * @memberof TenantExtendedAllOf
     */
    attributes?: Array<TenantAttribute> | null;
    /**
     * 
     * @type {number}
     * @memberof TenantExtendedAllOf
     */
    devAccountId?: number | null;
    /**
     * 
     * @type {Domain}
     * @memberof TenantExtendedAllOf
     */
    domain?: Domain;
    /**
     * 
     * @type {string}
     * @memberof TenantExtendedAllOf
     */
    hardDeleteExpiry?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof TenantExtendedAllOf
     */
    isDevTenant?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TenantExtendedAllOf
     */
    isHardDeleted?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof TenantExtendedAllOf
     */
    isHeadless?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TenantExtendedAllOf
     */
    isPermanent?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof TenantExtendedAllOf
     */
    isUnified?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TenantExtendedAllOf
     */
    kubeNamespace?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TenantExtendedAllOf
     */
    lastLoginDate?: string | null;
    /**
     * 
     * @type {Array<MasterCatalogExtended>}
     * @memberof TenantExtendedAllOf
     */
    masterCatalogs?: Array<MasterCatalogExtended> | null;
    /**
     * 
     * @type {string}
     * @memberof TenantExtendedAllOf
     */
    mozuInstanceId?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof TenantExtendedAllOf
     */
    omsEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TenantExtendedAllOf
     */
    routingTargetInfo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TenantExtendedAllOf
     */
    scaleUnitId?: string | null;
    /**
     * 
     * @type {Array<SiteExtended>}
     * @memberof TenantExtendedAllOf
     */
    sites?: Array<SiteExtended> | null;
    /**
     * 
     * @type {string}
     * @memberof TenantExtendedAllOf
     */
    softDeleteExpiry?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof TenantExtendedAllOf
     */
    supportsCustomExtensions?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TenantExtendedAllOf
     */
    unifiedTenantType?: string | null;
}
/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {string}
     * @memberof User
     */
    emailAddress?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    externalId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    firstName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    identityProviderId?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    isActive?: boolean;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    lastName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    localeCode?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    optInToEmail?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    optInToTextMessage?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    password?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    phoneNumber?: string | null;
    /**
     * 
     * @type {Array<UserRole>}
     * @memberof User
     */
    roles?: Array<UserRole> | null;
    /**
     * 
     * @type {UserSystemData}
     * @memberof User
     */
    systemData?: UserSystemData;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    userName?: string | null;
}
/**
 * 
 * @export
 * @interface UserAuthInfo
 */
export interface UserAuthInfo {
    /**
     * 
     * @type {string}
     * @memberof UserAuthInfo
     */
    emailAddress?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserAuthInfo
     */
    password?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserAuthInfo
     */
    userName?: string | null;
}
/**
 * 
 * @export
 * @interface UserProfile
 */
export interface UserProfile {
    /**
     * 
     * @type {string}
     * @memberof UserProfile
     */
    emailAddress?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserProfile
     */
    firstName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserProfile
     */
    lastName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserProfile
     */
    userId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserProfile
     */
    userName?: string | null;
}
/**
 * 
 * @export
 * @interface UserRole
 */
export interface UserRole {
    /**
     * 
     * @type {UserScope}
     * @memberof UserRole
     */
    assignedInScope?: UserScope;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof UserRole
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {number}
     * @memberof UserRole
     */
    roleId?: number;
    /**
     * 
     * @type {string}
     * @memberof UserRole
     */
    roleName?: string | null;
    /**
     * 
     * @type {Array<Resource>}
     * @memberof UserRole
     */
    roleResources?: Array<Resource> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserRole
     */
    roleTags?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof UserRole
     */
    userId?: string | null;
}
/**
 * 
 * @export
 * @interface UserScope
 */
export interface UserScope {
    /**
     * 
     * @type {number}
     * @memberof UserScope
     */
    id?: number | null;
    /**
     * 
     * @type {string}
     * @memberof UserScope
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserScope
     */
    type?: string | null;
}
/**
 * 
 * @export
 * @interface UserSystemData
 */
export interface UserSystemData {
    /**
     * 
     * @type {string}
     * @memberof UserSystemData
     */
    createdOn?: string | null;
    /**
     * 
     * @type {number}
     * @memberof UserSystemData
     */
    failedLoginAttemptCount?: number;
    /**
     * 
     * @type {string}
     * @memberof UserSystemData
     */
    firstFailedLoginAttemptOn?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof UserSystemData
     */
    isLocked?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserSystemData
     */
    isPasswordChangeRequired?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserSystemData
     */
    lastLockedOn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserSystemData
     */
    lastLoginOn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserSystemData
     */
    lastPasswordChangeOn?: string | null;
    /**
     * 
     * @type {number}
     * @memberof UserSystemData
     */
    remainingLoginAttempts?: number;
    /**
     * 
     * @type {string}
     * @memberof UserSystemData
     */
    updatedOn?: string | null;
}
