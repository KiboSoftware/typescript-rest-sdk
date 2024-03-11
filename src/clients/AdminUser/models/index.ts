/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface AdminGroup
 */
export interface AdminGroup {
    /**
     * User Group Id
     * @type {string}
     * @memberof AdminGroup
     */
    groupCode?: string | null;
    /**
     * Scope Type Id
     * @type {number}
     * @memberof AdminGroup
     */
    scopeTypeId?: number;
    /**
     * Scope Id
     * @type {number}
     * @memberof AdminGroup
     */
    scopeId?: number;
    /**
     * Human-readable Name of the group
     * @type {string}
     * @memberof AdminGroup
     */
    name?: string | null;
    /**
     * Human-readable description of the group
     * @type {string}
     * @memberof AdminGroup
     */
    description?: string | null;
    /**
     * Users associate with a group
     * @type {Array<User>}
     * @memberof AdminGroup
     */
    users?: Array<User> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof AdminGroup
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * 
 * @export
 * @interface AdminGroupCollection
 */
export interface AdminGroupCollection {
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
    pageSize?: number;
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
    totalCount?: number;
    /**
     * 
     * @type {Array<AdminGroup>}
     * @memberof AdminGroupCollection
     */
    items?: Array<AdminGroup> | null;
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
    updateDate?: string | null;
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
    createBy?: string | null;
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
 * Old password and new password.
 * @export
 * @interface AdminUserPasswordInfo
 */
export interface AdminUserPasswordInfo {
    /**
     * Old password.
     * @type {string}
     * @memberof AdminUserPasswordInfo
     */
    oldPassword?: string | null;
    /**
     * New password.
     * @type {string}
     * @memberof AdminUserPasswordInfo
     */
    newPassword?: string | null;
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
    emailAddress?: string | null;
}
/**
 * 
 * @export
 * @interface AdminUserTenant
 */
export interface AdminUserTenant {
    /**
     * 
     * @type {boolean}
     * @memberof AdminUserTenant
     */
    isDevTenant?: boolean;
    /**
     * 
     * @type {Array<Site>}
     * @memberof AdminUserTenant
     */
    sites?: Array<Site> | null;
    /**
     * 
     * @type {Array<AdminUserMasterCatalog>}
     * @memberof AdminUserTenant
     */
    masterCatalogs?: Array<AdminUserMasterCatalog> | null;
    /**
     * 
     * @type {string}
     * @memberof AdminUserTenant
     */
    domain?: string | null;
    /**
     * 
     * @type {Array<TenantAttribute>}
     * @memberof AdminUserTenant
     */
    attributes?: Array<TenantAttribute> | null;
    /**
     * 
     * @type {string}
     * @memberof AdminUserTenant
     */
    expiry?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof AdminUserTenant
     */
    isUnified?: boolean;
    /**
     * 
     * @type {number}
     * @memberof AdminUserTenant
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof AdminUserTenant
     */
    name?: string | null;
}
/**
 * Collection of UserRoles for given user.
 * @export
 * @interface AdminUserUserRoleCollection
 */
export interface AdminUserUserRoleCollection {
    /**
     * 
     * @type {number}
     * @memberof AdminUserUserRoleCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<UserRole>}
     * @memberof AdminUserUserRoleCollection
     */
    items?: Array<UserRole> | null;
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
 * @interface Behavior
 */
export interface Behavior {
    /**
     * 
     * @type {number}
     * @memberof Behavior
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof Behavior
     */
    categoryId?: number;
    /**
     * 
     * @type {string}
     * @memberof Behavior
     */
    name?: string | null;
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
    validUserTypes?: Array<string> | null;
    /**
     * 
     * @type {boolean}
     * @memberof Behavior
     */
    isPrivate?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof Behavior
     */
    systemRoles?: Array<string> | null;
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
     * @type {number}
     * @memberof CollectionOfRole
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<Role>}
     * @memberof CollectionOfRole
     */
    items?: Array<Role> | null;
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
     * @type {UserProfile}
     * @memberof DeveloperAdminUserAuthTicket
     */
    user?: UserProfile;
    /**
     * 
     * @type {string}
     * @memberof DeveloperAdminUserAuthTicket
     */
    createdOn?: string;
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
    accessToken?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DeveloperAdminUserAuthTicket
     */
    accessTokenExpiration?: string;
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
     * @type {Array<number>}
     * @memberof DeveloperAdminUserAuthTicket
     */
    grantedBehaviors?: Array<number> | null;
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
    type?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Owner
     */
    id?: string | null;
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
    type?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Resource
     */
    id?: string | null;
}
/**
 * 
 * @export
 * @interface Role
 */
export interface Role {
    /**
     * 
     * @type {string}
     * @memberof Role
     */
    name?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof Role
     */
    isSystemRole?: boolean;
    /**
     * 
     * @type {Array<Behavior>}
     * @memberof Role
     */
    behaviors?: Array<Behavior> | null;
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
     * @type {number}
     * @memberof Role
     */
    id?: number;
    /**
     * 
     * @type {UserScope}
     * @memberof Role
     */
    userScope?: UserScope;
    /**
     * 
     * @type {Array<Owner>}
     * @memberof Role
     */
    owners?: Array<Owner> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof Role
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * 
 * @export
 * @interface RoleCollection
 */
export interface RoleCollection {
    /**
     * 
     * @type {number}
     * @memberof RoleCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<Role>}
     * @memberof RoleCollection
     */
    items?: Array<Role> | null;
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
 * @interface TenantAdminUserAuthTicket
 */
export interface TenantAdminUserAuthTicket {
    /**
     * 
     * @type {UserProfile}
     * @memberof TenantAdminUserAuthTicket
     */
    user?: UserProfile;
    /**
     * 
     * @type {string}
     * @memberof TenantAdminUserAuthTicket
     */
    createdOn?: string;
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
    accessToken?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TenantAdminUserAuthTicket
     */
    accessTokenExpiration?: string;
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
    redirect?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TenantAdminUserAuthTicket
     */
    refreshTokenExpiration?: string;
    /**
     * 
     * @type {AdminUserTenant}
     * @memberof TenantAdminUserAuthTicket
     */
    tenant?: AdminUserTenant;
    /**
     * 
     * @type {Array<AdminUserTenant>}
     * @memberof TenantAdminUserAuthTicket
     */
    availableTenants?: Array<AdminUserTenant> | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof TenantAdminUserAuthTicket
     */
    grantedBehaviors?: Array<number> | null;
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
 * @interface TenantCollection
 */
export interface TenantCollection {
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
    pageSize?: number;
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
    totalCount?: number;
    /**
     * 
     * @type {Array<AdminUserTenant>}
     * @memberof TenantCollection
     */
    items?: Array<AdminUserTenant> | null;
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
    userName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    phoneNumber?: string | null;
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
    localeCode?: string | null;
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
    lastName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    password?: string | null;
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
    id?: string | null;
    /**
     * 
     * @type {UserSystemData}
     * @memberof User
     */
    systemData?: UserSystemData;
    /**
     * 
     * @type {Array<UserRole>}
     * @memberof User
     */
    roles?: Array<UserRole> | null;
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
    identityProviderId?: string | null;
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
    userId?: string | null;
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
    emailAddress?: string | null;
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
     * @type {string}
     * @memberof UserRole
     */
    userId?: string | null;
    /**
     * 
     * @type {UserScope}
     * @memberof UserRole
     */
    assignedInScope?: UserScope;
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
     * @type {AdminUserAuditInfo}
     * @memberof UserRole
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * 
 * @export
 * @interface UserScope
 */
export interface UserScope {
    /**
     * 
     * @type {string}
     * @memberof UserScope
     */
    type?: string | null;
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
}
/**
 * 
 * @export
 * @interface UserSystemData
 */
export interface UserSystemData {
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
    lastPasswordChangeOn?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof UserSystemData
     */
    isLocked?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserSystemData
     */
    lastLockedOn?: string | null;
    /**
     * 
     * @type {number}
     * @memberof UserSystemData
     */
    failedLoginAttemptCount?: number;
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
    firstFailedLoginAttemptOn?: string | null;
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
    createdOn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserSystemData
     */
    updatedOn?: string | null;
}
