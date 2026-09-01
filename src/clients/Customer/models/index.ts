/* tslint:disable */
/* eslint-disable */
/**
 * Customer account. Customers provide contact information, view order history, and set email preferences on their account. 
 * Merchants can edit accounts to add internal notes or assign them to segments.
 * @export
 * @interface AccountBase
 */
export interface AccountBase {
    /**
     * Type of account.
     * @type {string}
     * @memberof AccountBase
     */
    accountType?: string | null;
    /**
     * List of attributes for the account.
     * @type {Array<CustomerAttribute>}
     * @memberof AccountBase
     */
    attributes?: Array<CustomerAttribute> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof AccountBase
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {CommerceSummary}
     * @memberof AccountBase
     */
    commerceSummary?: CommerceSummary;
    /**
     * The company or organization name for an account.
     * @type {string}
     * @memberof AccountBase
     */
    companyOrOrganization?: string | null;
    /**
     * List of contacts for this account. A customer account can have multiple contacts for billing and shipping addresses.
     * @type {Array<CustomerContact>}
     * @memberof AccountBase
     */
    contacts?: Array<CustomerContact> | null;
    /**
     * 
     * @type {string}
     * @memberof AccountBase
     */
    customerSet?: string | null;
    /**
     * Date when the customer account is created.
     * @type {string}
     * @memberof AccountBase
     */
    customerSinceDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccountBase
     */
    externalId?: string | null;
    /**
     * Unique identifier of the account, also known as a customer number.
     * @type {number}
     * @memberof AccountBase
     */
    id?: number;
    /**
     * Indicates Subscription migration is required or not.
     * @type {boolean}
     * @memberof AccountBase
     */
    migrationRequired?: boolean;
    /**
     * List of notes for the account. Merchants use these internal notes, for example, to make a note of a customer's interests or complaints. 
     * Notes are available only from the merchant's view, customers cannot view these notes.
     * @type {Array<CustomerNote>}
     * @memberof AccountBase
     */
    notes?: Array<CustomerNote> | null;
    /**
     * List of segments assigned to account. Merchants create segments, for example, to manage discounts or assign VIP status. 
     * Then they assign the account to the segment. An account can belong to several segments or none at all.
     * @type {Array<CustomerCustomerSegment>}
     * @memberof AccountBase
     */
    segments?: Array<CustomerCustomerSegment> | null;
    /**
     * 
     * @type {boolean}
     * @memberof AccountBase
     */
    taxExempt?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AccountBase
     */
    taxId?: string | null;
}
/**
 * 
 * @export
 * @interface AccountHierarchyNode
 */
export interface AccountHierarchyNode {
    /**
     * 
     * @type {Array<AccountHierarchyNode>}
     * @memberof AccountHierarchyNode
     */
    children?: Array<AccountHierarchyNode> | null;
    /**
     * 
     * @type {number}
     * @memberof AccountHierarchyNode
     */
    id?: number;
}
/**
 * Password information for an Account
 * @export
 * @interface AccountPasswordInfo
 */
export interface AccountPasswordInfo {
    /**
     * The Id of the Account which this password info applies
     * @type {number}
     * @memberof AccountPasswordInfo
     */
    accountId?: number;
    /**
     * 
     * @type {CustomerPasswordInfo}
     * @memberof AccountPasswordInfo
     */
    passwordInfo?: CustomerPasswordInfo;
    /**
     * Indicates to unlock the Account
     * @type {boolean}
     * @memberof AccountPasswordInfo
     */
    unlockAccount?: boolean | null;
    /**
     * If the account has multiple users, provide the Id of a specific user
     * @type {string}
     * @memberof AccountPasswordInfo
     */
    userId?: string | null;
}
/**
 * 
 * @export
 * @interface AccountPasswordInfoCollection
 */
export interface AccountPasswordInfoCollection {
    /**
     * 
     * @type {Array<AccountPasswordInfo>}
     * @memberof AccountPasswordInfoCollection
     */
    items?: Array<AccountPasswordInfo> | null;
    /**
     * 
     * @type {number}
     * @memberof AccountPasswordInfoCollection
     */
    totalCount?: number;
}
/**
 * Represents an account priority.
 * @export
 * @interface AccountPriority
 */
export interface AccountPriority {
    /**
     * List of accounts against the priority. One account will have only 1 priority assigned to it.
     * @type {Array<number>}
     * @memberof AccountPriority
     */
    accounts?: Array<number> | null;
    /**
     * The Priority or rank of accounts. Lowest value has highest priority.
     * @type {number}
     * @memberof AccountPriority
     */
    priority?: number;
}
/**
 * Model used for B2b account priority
 * @export
 * @interface AccountPriorityModel
 */
export interface AccountPriorityModel {
    /**
     * List of account priorities.
     * @type {Array<AccountPriority>}
     * @memberof AccountPriorityModel
     */
    accountPriorities?: Array<AccountPriority> | null;
    /**
     * List of blacklisted accounts which should not be considered for priority order release.
     * @type {Array<number>}
     * @memberof AccountPriorityModel
     */
    blackListedAccounts?: Array<number> | null;
}
/**
 * Account ranking rule contract used for rules engine
 * @export
 * @interface AccountRankingRule
 */
export interface AccountRankingRule {
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof AccountRankingRule
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * unique code.
     * @type {string}
     * @memberof AccountRankingRule
     */
    code?: string | null;
    /**
     * Description for rule
     * @type {string}
     * @memberof AccountRankingRule
     */
    description?: string | null;
    /**
     * 
     * @type {CustomerCustomerDynamicExpression}
     * @memberof AccountRankingRule
     */
    expression?: CustomerCustomerDynamicExpression;
    /**
     * Unique id
     * @type {number}
     * @memberof AccountRankingRule
     */
    id?: number;
    /**
     * Rule name
     * @type {string}
     * @memberof AccountRankingRule
     */
    name?: string | null;
    /**
     * Scope id
     * @type {string}
     * @memberof AccountRankingRule
     */
    ruleType?: string | null;
}
/**
 * 
 * @export
 * @interface AccountRankingRuleCollection
 */
export interface AccountRankingRuleCollection {
    /**
     * 
     * @type {Array<AccountRankingRule>}
     * @memberof AccountRankingRuleCollection
     */
    items?: Array<AccountRankingRule> | null;
    /**
     * 
     * @type {number}
     * @memberof AccountRankingRuleCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof AccountRankingRuleCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof AccountRankingRuleCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof AccountRankingRuleCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface AccountSalesRep
 */
export interface AccountSalesRep {
    /**
     * 
     * @type {number}
     * @memberof AccountSalesRep
     */
    accountId?: number;
    /**
     * 
     * @type {string}
     * @memberof AccountSalesRep
     */
    adminUserId?: string | null;
}
/**
 * Address Validation Request
 * @export
 * @interface AddressValidationRequest
 */
export interface AddressValidationRequest {
    /**
     * 
     * @type {CommerceRuntimeAddress}
     * @memberof AddressValidationRequest
     */
    address?: CommerceRuntimeAddress;
}
/**
 * Address Validation Response
 * @export
 * @interface AddressValidationResponse
 */
export interface AddressValidationResponse {
    /**
     * Address Candidates
     * @type {Array<CommerceRuntimeAddress>}
     * @memberof AddressValidationResponse
     */
    addressCandidates?: Array<CommerceRuntimeAddress> | null;
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
 * @interface AttributeValueLocalizedContent
 */
export interface AttributeValueLocalizedContent {
    /**
     * 
     * @type {string}
     * @memberof AttributeValueLocalizedContent
     */
    localeCode: string;
    /**
     * 
     * @type {string}
     * @memberof AttributeValueLocalizedContent
     */
    value: string;
}
/**
 * 
 * @export
 * @interface AuthTicket2FAInfo
 */
export interface AuthTicket2FAInfo {
    /**
     * 
     * @type {string}
     * @memberof AuthTicket2FAInfo
     */
    otpCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AuthTicket2FAInfo
     */
    userId?: string | null;
}
/**
 * 
 * @export
 * @interface AuthTicketOtpInfo
 */
export interface AuthTicketOtpInfo {
    /**
     * 
     * @type {string}
     * @memberof AuthTicketOtpInfo
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AuthTicketOtpInfo
     */
    fingerprint?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AuthTicketOtpInfo
     */
    otpCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AuthTicketOtpInfo
     */
    region?: string | null;
}
/**
 * Customer account. Customers provide contact information, view order history, and set email preferences on their account. 
 * Merchants can edit accounts to add internal notes or assign them to segments.
 * @export
 * @interface B2BAccount
 */
export interface B2BAccount {
    /**
     * Type of account.
     * @type {string}
     * @memberof B2BAccount
     */
    accountType?: string | null;
    /**
     * List of attributes for the account.
     * @type {Array<CustomerAttribute>}
     * @memberof B2BAccount
     */
    attributes?: Array<CustomerAttribute> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof B2BAccount
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {CommerceSummary}
     * @memberof B2BAccount
     */
    commerceSummary?: CommerceSummary;
    /**
     * The company or organization name for an account.
     * @type {string}
     * @memberof B2BAccount
     */
    companyOrOrganization?: string | null;
    /**
     * List of contacts for this account. A customer account can have multiple contacts for billing and shipping addresses.
     * @type {Array<CustomerContact>}
     * @memberof B2BAccount
     */
    contacts?: Array<CustomerContact> | null;
    /**
     * 
     * @type {string}
     * @memberof B2BAccount
     */
    customerSet?: string | null;
    /**
     * Date when the customer account is created.
     * @type {string}
     * @memberof B2BAccount
     */
    customerSinceDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof B2BAccount
     */
    externalId?: string | null;
    /**
     * Unique identifier of the account, also known as a customer number.
     * @type {number}
     * @memberof B2BAccount
     */
    id?: number;
    /**
     * Indicates Subscription migration is required or not.
     * @type {boolean}
     * @memberof B2BAccount
     */
    migrationRequired?: boolean;
    /**
     * List of notes for the account. Merchants use these internal notes, for example, to make a note of a customer's interests or complaints. 
     * Notes are available only from the merchant's view, customers cannot view these notes.
     * @type {Array<CustomerNote>}
     * @memberof B2BAccount
     */
    notes?: Array<CustomerNote> | null;
    /**
     * List of segments assigned to account. Merchants create segments, for example, to manage discounts or assign VIP status. 
     * Then they assign the account to the segment. An account can belong to several segments or none at all.
     * @type {Array<CustomerCustomerSegment>}
     * @memberof B2BAccount
     */
    segments?: Array<CustomerCustomerSegment> | null;
    /**
     * 
     * @type {boolean}
     * @memberof B2BAccount
     */
    taxExempt?: boolean;
    /**
     * 
     * @type {string}
     * @memberof B2BAccount
     */
    taxId?: string | null;
    /**
     * Status on B2B account.
     * @type {string}
     * @memberof B2BAccount
     */
    approvalStatus?: string | null;
    /**
     * Is the B2B account active?
     * @type {boolean}
     * @memberof B2BAccount
     */
    isActive?: boolean | null;
    /**
     * Parent account Id in B2B hierarchy
     * @type {number}
     * @memberof B2BAccount
     */
    parentAccountId?: number | null;
    /**
     * Price list on B2B account.
     * @type {string}
     * @memberof B2BAccount
     */
    priceList?: string | null;
    /**
     * Priority of the b2b account for order release
     * @type {number}
     * @memberof B2BAccount
     */
    priority?: number | null;
    /**
     * Root account Id in B2B hierarchy
     * @type {number}
     * @memberof B2BAccount
     */
    rootAccountId?: number | null;
    /**
     * List of sales rep on B2B account.
     * @type {Array<AccountSalesRep>}
     * @memberof B2BAccount
     */
    salesReps?: Array<AccountSalesRep> | null;
    /**
     * List of B2B users on the account.
     * @type {Array<B2BUser>}
     * @memberof B2BAccount
     */
    users?: Array<B2BUser> | null;
}
/**
 * 
 * @export
 * @interface B2BAccountAllOf
 */
export interface B2BAccountAllOf {
    /**
     * Status on B2B account.
     * @type {string}
     * @memberof B2BAccountAllOf
     */
    approvalStatus?: string | null;
    /**
     * Is the B2B account active?
     * @type {boolean}
     * @memberof B2BAccountAllOf
     */
    isActive?: boolean | null;
    /**
     * Parent account Id in B2B hierarchy
     * @type {number}
     * @memberof B2BAccountAllOf
     */
    parentAccountId?: number | null;
    /**
     * Price list on B2B account.
     * @type {string}
     * @memberof B2BAccountAllOf
     */
    priceList?: string | null;
    /**
     * Priority of the b2b account for order release
     * @type {number}
     * @memberof B2BAccountAllOf
     */
    priority?: number | null;
    /**
     * Root account Id in B2B hierarchy
     * @type {number}
     * @memberof B2BAccountAllOf
     */
    rootAccountId?: number | null;
    /**
     * List of sales rep on B2B account.
     * @type {Array<AccountSalesRep>}
     * @memberof B2BAccountAllOf
     */
    salesReps?: Array<AccountSalesRep> | null;
    /**
     * List of B2B users on the account.
     * @type {Array<B2BUser>}
     * @memberof B2BAccountAllOf
     */
    users?: Array<B2BUser> | null;
}
/**
 * Collection of all the B2B Accounts returned as a whole. A collection is not paged.
 * @export
 * @interface B2BAccountCollection
 */
export interface B2BAccountCollection {
    /**
     * 
     * @type {Array<B2BAccount>}
     * @memberof B2BAccountCollection
     */
    items?: Array<B2BAccount> | null;
    /**
     * 
     * @type {number}
     * @memberof B2BAccountCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof B2BAccountCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof B2BAccountCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof B2BAccountCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface B2BAccountHierarchyResult
 */
export interface B2BAccountHierarchyResult {
    /**
     * All accounts belonging to this account hierarchy.
     * @type {Array<B2BAccount>}
     * @memberof B2BAccountHierarchyResult
     */
    accounts?: Array<B2BAccount> | null;
    /**
     * 
     * @type {AccountHierarchyNode}
     * @memberof B2BAccountHierarchyResult
     */
    hierarchy?: AccountHierarchyNode;
}
/**
 * 
 * @export
 * @interface B2BRole
 */
export interface B2BRole {
    /**
     * List of Account IDs associated with this role.
     * Required for CreateRole and UpdateRole operations.
     * @type {Array<number>}
     * @memberof B2BRole
     */
    accountIds?: Array<number> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof B2BRole
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * List of Role Behaviors
     * @type {Array<number>}
     * @memberof B2BRole
     */
    behaviors?: Array<number> | null;
    /**
     * Unique Identifier for the Role
     * @type {number}
     * @memberof B2BRole
     */
    id?: number;
    /**
     * Indicate if the Role is a System Role or Custom Role
     * @type {boolean}
     * @memberof B2BRole
     */
    isSystemRole?: boolean;
    /**
     * Name for the Role
     * @type {string}
     * @memberof B2BRole
     */
    name?: string | null;
}
/**
 * 
 * @export
 * @interface B2BRoleCollection
 */
export interface B2BRoleCollection {
    /**
     * 
     * @type {Array<B2BRole>}
     * @memberof B2BRoleCollection
     */
    items?: Array<B2BRole> | null;
    /**
     * 
     * @type {number}
     * @memberof B2BRoleCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof B2BRoleCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof B2BRoleCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof B2BRoleCollection
     */
    totalCount?: number;
}
/**
 * Customer account. Customers provide contact information, view order history, and set email preferences on their account. 
 * Merchants can edit accounts to add internal notes or assign them to segments.
 * @export
 * @interface B2BUser
 */
export interface B2BUser {
    /**
     * If true, the customer prefers to receive marketing material such as newsletters or email offers.
     * @type {boolean}
     * @memberof B2BUser
     */
    acceptsMarketing?: boolean;
    /**
     * 
     * @type {string}
     * @memberof B2BUser
     */
    emailAddress?: string | null;
    /**
     * 
     * @type {string}
     * @memberof B2BUser
     */
    firstName?: string | null;
    /**
     * Indicates if an external password is set on this account
     * @type {boolean}
     * @memberof B2BUser
     */
    hasExternalPassword?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof B2BUser
     */
    isActive?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof B2BUser
     */
    isLocked?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof B2BUser
     */
    isRemoved?: boolean;
    /**
     * 
     * @type {string}
     * @memberof B2BUser
     */
    last2FaDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof B2BUser
     */
    lastName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof B2BUser
     */
    localeCode?: string | null;
    /**
     * 
     * @type {Array<UserRole>}
     * @memberof B2BUser
     */
    roles?: Array<UserRole> | null;
    /**
     * Unique identifier of the user who is currently logged in. This is null if the user is anonymous (not logged in).  Unicode data with a maximum length of 55 characters.
     * @type {string}
     * @memberof B2BUser
     */
    userId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof B2BUser
     */
    userName?: string | null;
}
/**
 * 
 * @export
 * @interface B2BUserAndAuthInfo
 */
export interface B2BUserAndAuthInfo {
    /**
     * 
     * @type {B2BUser}
     * @memberof B2BUserAndAuthInfo
     */
    b2BUser?: B2BUser;
    /**
     * 
     * @type {string}
     * @memberof B2BUserAndAuthInfo
     */
    externalPassword?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof B2BUserAndAuthInfo
     */
    isImport?: boolean;
}
/**
 * Collection of users in a B2B account.
 * @export
 * @interface B2BUserCollection
 */
export interface B2BUserCollection {
    /**
     * 
     * @type {Array<B2BUser>}
     * @memberof B2BUserCollection
     */
    items?: Array<B2BUser> | null;
    /**
     * 
     * @type {number}
     * @memberof B2BUserCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof B2BUserCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof B2BUserCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof B2BUserCollection
     */
    totalCount?: number;
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
 * @interface BehaviorCategory
 */
export interface BehaviorCategory {
    /**
     * 
     * @type {number}
     * @memberof BehaviorCategory
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof BehaviorCategory
     */
    name?: string | null;
}
/**
 * 
 * @export
 * @interface BehaviorCategoryCollection
 */
export interface BehaviorCategoryCollection {
    /**
     * 
     * @type {Array<BehaviorCategory>}
     * @memberof BehaviorCategoryCollection
     */
    items?: Array<BehaviorCategory> | null;
    /**
     * 
     * @type {number}
     * @memberof BehaviorCategoryCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface BehaviorCategoryCollectionBase
 */
export interface BehaviorCategoryCollectionBase {
    /**
     * 
     * @type {Array<BehaviorCategory>}
     * @memberof BehaviorCategoryCollectionBase
     */
    items?: Array<BehaviorCategory> | null;
    /**
     * 
     * @type {number}
     * @memberof BehaviorCategoryCollectionBase
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface BehaviorCollection
 */
export interface BehaviorCollection {
    /**
     * 
     * @type {Array<Behavior>}
     * @memberof BehaviorCollection
     */
    items?: Array<Behavior> | null;
    /**
     * 
     * @type {number}
     * @memberof BehaviorCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface BehaviorCollectionBase
 */
export interface BehaviorCollectionBase {
    /**
     * 
     * @type {Array<Behavior>}
     * @memberof BehaviorCollectionBase
     */
    items?: Array<Behavior> | null;
    /**
     * 
     * @type {number}
     * @memberof BehaviorCollectionBase
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface Card
 */
export interface Card {
    /**
     * 
     * @type {string}
     * @memberof Card
     */
    cardNumberPart?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Card
     */
    cardType?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Card
     */
    contactId?: number;
    /**
     * 
     * @type {number}
     * @memberof Card
     */
    expireMonth?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Card
     */
    expireYear?: number | null;
    /**
     * Card ID from Payment Service
     * @type {string}
     * @memberof Card
     */
    id?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof Card
     */
    isDefaultPayMethod?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Card
     */
    nameOnCard?: string | null;
}
/**
 * 
 * @export
 * @interface CardCollection
 */
export interface CardCollection {
    /**
     * 
     * @type {Array<Card>}
     * @memberof CardCollection
     */
    items?: Array<Card> | null;
    /**
     * 
     * @type {number}
     * @memberof CardCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface CartAuthTicketRequest
 */
export interface CartAuthTicketRequest {
    /**
     * Account Id of the user.
     * @type {number}
     * @memberof CartAuthTicketRequest
     */
    accountId?: number;
    /**
     * Cart Id of the user
     * @type {string}
     * @memberof CartAuthTicketRequest
     */
    cartId?: string | null;
    /**
     * User Id of the user.
     * @type {string}
     * @memberof CartAuthTicketRequest
     */
    userId?: string | null;
}
/**
 * 
 * @export
 * @interface ChangePasswordResult
 */
export interface ChangePasswordResult {
    /**
     * 
     * @type {number}
     * @memberof ChangePasswordResult
     */
    accountId?: number;
    /**
     * 
     * @type {string}
     * @memberof ChangePasswordResult
     */
    errorMessage?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ChangePasswordResult
     */
    succeeded?: boolean;
}
/**
 * 
 * @export
 * @interface ChangePasswordResultCollection
 */
export interface ChangePasswordResultCollection {
    /**
     * 
     * @type {Array<ChangePasswordResult>}
     * @memberof ChangePasswordResultCollection
     */
    items?: Array<ChangePasswordResult> | null;
    /**
     * 
     * @type {number}
     * @memberof ChangePasswordResultCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeAddress
 */
export interface CommerceRuntimeAddress {
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAddress
     */
    address1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAddress
     */
    address2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAddress
     */
    address3?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAddress
     */
    address4?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAddress
     */
    addressType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAddress
     */
    cityOrTown?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAddress
     */
    countryCode?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeAddress
     */
    isValidated?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAddress
     */
    postalOrZipCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAddress
     */
    stateOrProvince?: string | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeAttributeCollection
 */
export interface CommerceRuntimeAttributeCollection {
    /**
     * 
     * @type {Array<CustomerAttribute2>}
     * @memberof CommerceRuntimeAttributeCollection
     */
    items?: Array<CustomerAttribute2> | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeAttributeCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeAttributeCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeAttributeCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeAttributeCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeAttributeLocalizedContent
 */
export interface CommerceRuntimeAttributeLocalizedContent {
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttributeLocalizedContent
     */
    localeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttributeLocalizedContent
     */
    value?: string | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeAttributeMetadataItem
 */
export interface CommerceRuntimeAttributeMetadataItem {
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttributeMetadataItem
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttributeMetadataItem
     */
    value: string;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeAttributeValidation
 */
export interface CommerceRuntimeAttributeValidation {
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttributeValidation
     */
    maxDateTime?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeAttributeValidation
     */
    maxNumericValue?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeAttributeValidation
     */
    maxStringLength?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttributeValidation
     */
    minDateTime?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeAttributeValidation
     */
    minNumericValue?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeAttributeValidation
     */
    minStringLength?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttributeValidation
     */
    regularExpression?: string | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeAttributeVocabularyValue
 */
export interface CommerceRuntimeAttributeVocabularyValue {
    /**
     * 
     * @type {AttributeValueLocalizedContent}
     * @memberof CommerceRuntimeAttributeVocabularyValue
     */
    content?: AttributeValueLocalizedContent;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeAttributeVocabularyValue
     */
    isHidden?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeAttributeVocabularyValue
     */
    sequence?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttributeVocabularyValue
     */
    value: string;
}
/**
 * 
 * @export
 * @interface CommerceRuntimePhone
 */
export interface CommerceRuntimePhone {
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimePhone
     */
    home?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimePhone
     */
    mobile?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimePhone
     */
    work?: string | null;
}
/**
 * Commerce (orders and wishlists) on a customer account which lists all the orders the customer has made with the order date, order amount, and status. Includes cancellations and returns.  Also includes wishlist information.
 * @export
 * @interface CommerceSummary
 */
export interface CommerceSummary {
    /**
     * When the last order was placed.
     * @type {string}
     * @memberof CommerceSummary
     */
    lastOrderDate?: string | null;
    /**
     * Number of orders listed in the order history of a customer account.
     * @type {number}
     * @memberof CommerceSummary
     */
    orderCount?: number;
    /**
     * 
     * @type {CurrencyAmount}
     * @memberof CommerceSummary
     */
    totalOrderAmount?: CurrencyAmount;
    /**
     * Number of visits for this customer across the entire tenant.
     * @type {number}
     * @memberof CommerceSummary
     */
    visitsCount?: number;
    /**
     * Number of wishlists listed in the wishlist count of a customer account
     * @type {number}
     * @memberof CommerceSummary
     */
    wishlistCount?: number;
}
/**
 * Used to update a user's forgotten password. Contains the user's email address, new password, and the confirmation code 
 * that is required to update the password.
 * @export
 * @interface ConfirmationInfo
 */
export interface ConfirmationInfo {
    /**
     * Confirmation code that a user supplies when requesting a new password.
     * @type {string}
     * @memberof ConfirmationInfo
     */
    confirmationCode: string | null;
    /**
     * The user's new password.
     * @type {string}
     * @memberof ConfirmationInfo
     */
    newPassword: string | null;
    /**
     * UserName of the user who has requested a new password.
     * @type {string}
     * @memberof ConfirmationInfo
     */
    userName: string | null;
}
/**
 * 
 * @export
 * @interface ContactType
 */
export interface ContactType {
    /**
     * 
     * @type {boolean}
     * @memberof ContactType
     */
    isPrimary?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ContactType
     */
    name?: string | null;
}
/**
 * Log entry for any change made to a Credit.
 * 
 * The system will generate all entries.  Contract is for display only.
 * All values are ReadOnly.
 * @export
 * @interface CreditAuditEntry
 */
export interface CreditAuditEntry {
    /**
     * Mozu.Customer.Contracts.Credit.CreditAuditEntry.CreditAuditActivityType
     * @type {string}
     * @memberof CreditAuditEntry
     */
    activityType?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CreditAuditEntry
     */
    activityTypeId?: number;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CreditAuditEntry
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * Detials of what was done
     * @type {string}
     * @memberof CreditAuditEntry
     */
    details?: string | null;
}
/**
 * 
 * @export
 * @interface CreditAuditEntryCollection
 */
export interface CreditAuditEntryCollection {
    /**
     * 
     * @type {Array<CreditAuditEntry>}
     * @memberof CreditAuditEntryCollection
     */
    items?: Array<CreditAuditEntry> | null;
    /**
     * 
     * @type {number}
     * @memberof CreditAuditEntryCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof CreditAuditEntryCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof CreditAuditEntryCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof CreditAuditEntryCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface CreditCollection
 */
export interface CreditCollection {
    /**
     * 
     * @type {Array<CustomerCredit>}
     * @memberof CreditCollection
     */
    items?: Array<CustomerCredit> | null;
    /**
     * 
     * @type {number}
     * @memberof CreditCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof CreditCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof CreditCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof CreditCollection
     */
    totalCount?: number;
}
/**
 * Credit Transactions are used to make adjustments to a Credit Balance
 * @export
 * @interface CreditTransaction
 */
export interface CreditTransaction {
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CreditTransaction
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * Comments about the transaction.  Depending on the user interface, these comments may be readable by authorized users or customers.
     * @type {string}
     * @memberof CreditTransaction
     */
    comments?: string | null;
    /**
     * Custom data for credit transactions
     * @type {any}
     * @memberof CreditTransaction
     */
    data?: any | null;
    /**
     * Id unique within the tenant
     * ReadOnly
     * @type {number}
     * @memberof CreditTransaction
     */
    id?: number | null;
    /**
     * Amount to apply to Credit Balance
     * Required
     * @type {number}
     * @memberof CreditTransaction
     */
    impactAmount?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CreditTransaction
     */
    orderId?: string | null;
    /**
     * Mozu.Customer.Contracts.Credit.CreditTransaction.CreditTransactionType
     *             Requried
     * @type {string}
     * @memberof CreditTransaction
     */
    transactionType?: string | null;
}
/**
 * 
 * @export
 * @interface CreditTransactionCollection
 */
export interface CreditTransactionCollection {
    /**
     * 
     * @type {Array<CreditTransaction>}
     * @memberof CreditTransactionCollection
     */
    items?: Array<CreditTransaction> | null;
    /**
     * 
     * @type {number}
     * @memberof CreditTransactionCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof CreditTransactionCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof CreditTransactionCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof CreditTransactionCollection
     */
    totalCount?: number;
}
/**
 * The currency code and amount of an order listed in the order history of a customer account. Currently, only USD is supported.
 * @export
 * @interface CurrencyAmount
 */
export interface CurrencyAmount {
    /**
     * Total amount of the order. Currently, only US dollar amounts are supported.
     * @type {number}
     * @memberof CurrencyAmount
     */
    amount?: number;
    /**
     * Currency code for the amount of the order. Currently, only "USD" is supported.
     * @type {string}
     * @memberof CurrencyAmount
     */
    currencyCode?: string | null;
}
/**
 * Customer account. Customers provide contact information, view order history, and set email preferences on their account. 
 * Merchants can edit accounts to add internal notes or assign them to segments.
 * @export
 * @interface CustomerAccount
 */
export interface CustomerAccount {
    /**
     * Type of account.
     * @type {string}
     * @memberof CustomerAccount
     */
    accountType?: string | null;
    /**
     * List of attributes for the account.
     * @type {Array<CustomerAttribute>}
     * @memberof CustomerAccount
     */
    attributes?: Array<CustomerAttribute> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CustomerAccount
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {CommerceSummary}
     * @memberof CustomerAccount
     */
    commerceSummary?: CommerceSummary;
    /**
     * The company or organization name for an account.
     * @type {string}
     * @memberof CustomerAccount
     */
    companyOrOrganization?: string | null;
    /**
     * List of contacts for this account. A customer account can have multiple contacts for billing and shipping addresses.
     * @type {Array<CustomerContact>}
     * @memberof CustomerAccount
     */
    contacts?: Array<CustomerContact> | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerAccount
     */
    customerSet?: string | null;
    /**
     * Date when the customer account is created.
     * @type {string}
     * @memberof CustomerAccount
     */
    customerSinceDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerAccount
     */
    externalId?: string | null;
    /**
     * Unique identifier of the account, also known as a customer number.
     * @type {number}
     * @memberof CustomerAccount
     */
    id?: number;
    /**
     * Indicates Subscription migration is required or not.
     * @type {boolean}
     * @memberof CustomerAccount
     */
    migrationRequired?: boolean;
    /**
     * List of notes for the account. Merchants use these internal notes, for example, to make a note of a customer's interests or complaints. 
     * Notes are available only from the merchant's view, customers cannot view these notes.
     * @type {Array<CustomerNote>}
     * @memberof CustomerAccount
     */
    notes?: Array<CustomerNote> | null;
    /**
     * List of segments assigned to account. Merchants create segments, for example, to manage discounts or assign VIP status. 
     * Then they assign the account to the segment. An account can belong to several segments or none at all.
     * @type {Array<CustomerCustomerSegment>}
     * @memberof CustomerAccount
     */
    segments?: Array<CustomerCustomerSegment> | null;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerAccount
     */
    taxExempt?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CustomerAccount
     */
    taxId?: string | null;
    /**
     * If true, the customer prefers to receive marketing material such as newsletters or email offers.
     * @type {boolean}
     * @memberof CustomerAccount
     */
    acceptsMarketing?: boolean;
    /**
     * "Email addresss of the customer.
     * @type {string}
     * @memberof CustomerAccount
     */
    emailAddress?: string | null;
    /**
     * First name of the customer.
     * @type {string}
     * @memberof CustomerAccount
     */
    firstName?: string | null;
    /**
     * Indicates if an external password is set on this account
     * @type {boolean}
     * @memberof CustomerAccount
     */
    hasExternalPassword?: boolean;
    /**
     * Is the account active?
     * @type {boolean}
     * @memberof CustomerAccount
     */
    isActive?: boolean;
    /**
     * Is the account Anonymous?
     * @type {boolean}
     * @memberof CustomerAccount
     */
    isAnonymous?: boolean;
    /**
     * Is the account locked?
     * @type {boolean}
     * @memberof CustomerAccount
     */
    isLocked?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CustomerAccount
     */
    last2FaDate?: string | null;
    /**
     * Last name of the customer.
     * @type {string}
     * @memberof CustomerAccount
     */
    lastName?: string | null;
    /**
     * Locale Code.
     * @type {string}
     * @memberof CustomerAccount
     */
    localeCode?: string | null;
    /**
     * Unique identifier of the user who is currently logged in. This is null if the user is anonymous (not logged in).  Unicode data with a maximum length of 55 characters.
     * @type {string}
     * @memberof CustomerAccount
     */
    userId?: string | null;
    /**
     * User name for the customer account.
     * @type {string}
     * @memberof CustomerAccount
     */
    userName?: string | null;
}
/**
 * 
 * @export
 * @interface CustomerAccountAllOf
 */
export interface CustomerAccountAllOf {
    /**
     * If true, the customer prefers to receive marketing material such as newsletters or email offers.
     * @type {boolean}
     * @memberof CustomerAccountAllOf
     */
    acceptsMarketing?: boolean;
    /**
     * "Email addresss of the customer.
     * @type {string}
     * @memberof CustomerAccountAllOf
     */
    emailAddress?: string | null;
    /**
     * First name of the customer.
     * @type {string}
     * @memberof CustomerAccountAllOf
     */
    firstName?: string | null;
    /**
     * Indicates if an external password is set on this account
     * @type {boolean}
     * @memberof CustomerAccountAllOf
     */
    hasExternalPassword?: boolean;
    /**
     * Is the account active?
     * @type {boolean}
     * @memberof CustomerAccountAllOf
     */
    isActive?: boolean;
    /**
     * Is the account Anonymous?
     * @type {boolean}
     * @memberof CustomerAccountAllOf
     */
    isAnonymous?: boolean;
    /**
     * Is the account locked?
     * @type {boolean}
     * @memberof CustomerAccountAllOf
     */
    isLocked?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CustomerAccountAllOf
     */
    last2FaDate?: string | null;
    /**
     * Last name of the customer.
     * @type {string}
     * @memberof CustomerAccountAllOf
     */
    lastName?: string | null;
    /**
     * Locale Code.
     * @type {string}
     * @memberof CustomerAccountAllOf
     */
    localeCode?: string | null;
    /**
     * Unique identifier of the user who is currently logged in. This is null if the user is anonymous (not logged in).  Unicode data with a maximum length of 55 characters.
     * @type {string}
     * @memberof CustomerAccountAllOf
     */
    userId?: string | null;
    /**
     * User name for the customer account.
     * @type {string}
     * @memberof CustomerAccountAllOf
     */
    userName?: string | null;
}
/**
 * 
 * @export
 * @interface CustomerAccountAndAuthInfo
 */
export interface CustomerAccountAndAuthInfo {
    /**
     * 
     * @type {CustomerAccount}
     * @memberof CustomerAccountAndAuthInfo
     */
    account?: CustomerAccount;
    /**
     * Optional requested duration for the authentication ticket in minutes.
     * Must not exceed tenant configuration or platform hard caps.
     * Requires 'customer-auth:configure-token-durations' behavior.
     * @type {number}
     * @memberof CustomerAccountAndAuthInfo
     */
    authTicketTtlMinutes?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerAccountAndAuthInfo
     */
    externalPassword?: string | null;
    /**
     * Specifies the fingerprint of the user for two-factor authentication.
     * @type {string}
     * @memberof CustomerAccountAndAuthInfo
     */
    fingerprint?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerAccountAndAuthInfo
     */
    isImport?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CustomerAccountAndAuthInfo
     */
    password?: string | null;
    /**
     * Optional requested duration for the refresh token in minutes.
     * Must not exceed tenant configuration or platform hard caps.
     * Requires 'customer-auth:configure-token-durations' behavior.
     * @type {number}
     * @memberof CustomerAccountAndAuthInfo
     */
    refreshTokenTtlMinutes?: number | null;
    /**
     * Specifies the region of the user for two-factor authentication.
     * @type {string}
     * @memberof CustomerAccountAndAuthInfo
     */
    region?: string | null;
}
/**
 * Collection of all the merchant's customers returned as a whole. A collection is not paged.
 * @export
 * @interface CustomerAccountCollection
 */
export interface CustomerAccountCollection {
    /**
     * 
     * @type {Array<CustomerAccount>}
     * @memberof CustomerAccountCollection
     */
    items?: Array<CustomerAccount> | null;
    /**
     * 
     * @type {number}
     * @memberof CustomerAccountCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerAccountCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerAccountCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerAccountCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface CustomerAttribute
 */
export interface CustomerAttribute {
    /**
     * 
     * @type {number}
     * @memberof CustomerAttribute
     */
    attributeDefinitionId?: number | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CustomerAttribute
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof CustomerAttribute
     */
    fullyQualifiedName?: string | null;
    /**
     * 
     * @type {Array<any>}
     * @memberof CustomerAttribute
     */
    values?: Array<any> | null;
}
/**
 * 
 * @export
 * @interface CustomerAttribute2
 */
export interface CustomerAttribute2 {
    /**
     * 
     * @type {string}
     * @memberof CustomerAttribute2
     */
    adminName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerAttribute2
     */
    attributeCode: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerAttribute2
     */
    attributeFQN?: string | null;
    /**
     * 
     * @type {Array<CommerceRuntimeAttributeMetadataItem>}
     * @memberof CustomerAttribute2
     */
    attributeMetadata?: Array<CommerceRuntimeAttributeMetadataItem> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CustomerAttribute2
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerAttribute2
     */
    availableForDiscounts?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerAttribute2
     */
    availableForOrderRouting?: boolean;
    /**
     * 
     * @type {CommerceRuntimeAttributeLocalizedContent}
     * @memberof CustomerAttribute2
     */
    content?: CommerceRuntimeAttributeLocalizedContent;
    /**
     * 
     * @type {string}
     * @memberof CustomerAttribute2
     */
    dataType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerAttribute2
     */
    displayGroup: string;
    /**
     * 
     * @type {number}
     * @memberof CustomerAttribute2
     */
    id?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerAttribute2
     */
    inputType?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerAttribute2
     */
    isActive?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerAttribute2
     */
    isMultiValued?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerAttribute2
     */
    isReadOnly?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerAttribute2
     */
    isRequired?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerAttribute2
     */
    isVisible?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerAttribute2
     */
    namespace?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CustomerAttribute2
     */
    order?: number | null;
    /**
     * 
     * @type {CommerceRuntimeAttributeValidation}
     * @memberof CustomerAttribute2
     */
    validation?: CommerceRuntimeAttributeValidation;
    /**
     * 
     * @type {string}
     * @memberof CustomerAttribute2
     */
    valueType: string;
    /**
     * 
     * @type {Array<CommerceRuntimeAttributeVocabularyValue>}
     * @memberof CustomerAttribute2
     */
    vocabularyValues?: Array<CommerceRuntimeAttributeVocabularyValue> | null;
}
/**
 * Collection of notes added to a customer account returned as a whole. A collection is not paged.
 * @export
 * @interface CustomerAttributeCollection
 */
export interface CustomerAttributeCollection {
    /**
     * 
     * @type {Array<CustomerAttribute>}
     * @memberof CustomerAttributeCollection
     */
    items?: Array<CustomerAttribute> | null;
    /**
     * 
     * @type {number}
     * @memberof CustomerAttributeCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerAttributeCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerAttributeCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerAttributeCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface CustomerAuditEntry
 */
export interface CustomerAuditEntry {
    /**
     * Applicattion associated with this entry
     * @type {string}
     * @memberof CustomerAuditEntry
     */
    application?: string | null;
    /**
     * Customer associated with this entry
     * @type {number}
     * @memberof CustomerAuditEntry
     */
    customerAccountId?: number;
    /**
     * Id of this entry
     * @type {number}
     * @memberof CustomerAuditEntry
     */
    customerAuditEntryId?: number;
    /**
     * Description of the change (UI Displayable)
     * @type {string}
     * @memberof CustomerAuditEntry
     */
    description?: string | null;
    /**
     * Date of the Entry
     * @type {string}
     * @memberof CustomerAuditEntry
     */
    entryDate?: string;
    /**
     * User ID associated with this Entry
     * @type {string}
     * @memberof CustomerAuditEntry
     */
    entryUser?: string | null;
    /**
     * Path of the field value being changed (e.g. /Customer/Contacts/1/FirstName)
     * @type {string}
     * @memberof CustomerAuditEntry
     */
    fieldPath?: string | null;
    /**
     * New Value after this event
     * @type {string}
     * @memberof CustomerAuditEntry
     */
    newValue?: string | null;
    /**
     * Original value before this event
     * @type {string}
     * @memberof CustomerAuditEntry
     */
    oldValue?: string | null;
    /**
     * Site associated wit this entry
     * @type {string}
     * @memberof CustomerAuditEntry
     */
    site?: string | null;
}
/**
 * 
 * @export
 * @interface CustomerAuditEntryCollection
 */
export interface CustomerAuditEntryCollection {
    /**
     * 
     * @type {Array<CustomerAuditEntry>}
     * @memberof CustomerAuditEntryCollection
     */
    items?: Array<CustomerAuditEntry> | null;
    /**
     * 
     * @type {number}
     * @memberof CustomerAuditEntryCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerAuditEntryCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerAuditEntryCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerAuditEntryCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface CustomerAuthTicket
 */
export interface CustomerAuthTicket {
    /**
     * 
     * @type {string}
     * @memberof CustomerAuthTicket
     */
    accessToken?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerAuthTicket
     */
    accessTokenExpiration?: string;
    /**
     * 
     * @type {CustomerAccount}
     * @memberof CustomerAuthTicket
     */
    customerAccount?: CustomerAccount;
    /**
     * 
     * @type {string}
     * @memberof CustomerAuthTicket
     */
    jwtAccessToken?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerAuthTicket
     */
    refreshToken?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerAuthTicket
     */
    refreshTokenExpiration?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerAuthTicket
     */
    requires2FA?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CustomerAuthTicket
     */
    userId?: string | null;
}
/**
 * CustomerContact information for a customer account including the name, company, phone numbers, email addresses, and billing and shipping addresses (if supplied).
 * @export
 * @interface CustomerContact
 */
export interface CustomerContact {
    /**
     * 
     * @type {number}
     * @memberof CustomerContact
     */
    accountId?: number;
    /**
     * 
     * @type {CommerceRuntimeAddress}
     * @memberof CustomerContact
     */
    address?: CommerceRuntimeAddress;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CustomerContact
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof CustomerContact
     */
    companyOrOrganization?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerContact
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerContact
     */
    faxNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerContact
     */
    firstName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CustomerContact
     */
    id?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerContact
     */
    label?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerContact
     */
    lastNameOrSurname?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerContact
     */
    middleNameOrInitial?: string | null;
    /**
     * 
     * @type {CommerceRuntimePhone}
     * @memberof CustomerContact
     */
    phoneNumbers?: CommerceRuntimePhone;
    /**
     * 
     * @type {Array<ContactType>}
     * @memberof CustomerContact
     */
    types?: Array<ContactType> | null;
}
/**
 * Collection of contacts returned as a whole.
 * @export
 * @interface CustomerContactCollection
 */
export interface CustomerContactCollection {
    /**
     * 
     * @type {Array<CustomerContact>}
     * @memberof CustomerContactCollection
     */
    items?: Array<CustomerContact> | null;
    /**
     * 
     * @type {number}
     * @memberof CustomerContactCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerContactCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerContactCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerContactCollection
     */
    totalCount?: number;
}
/**
 * Represetation of a store credit or gift card.
 * @export
 * @interface CustomerCredit
 */
export interface CustomerCredit {
    /**
     * Date the credit was activated.  Null if card is not active.
     * Credits must be activated before they can be used.
     * ReadOnly after activation
     * @type {string}
     * @memberof CustomerCredit
     */
    activationDate?: string | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CustomerCredit
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * Unique number identifier representing this credit.
     * Number may be generated or set by the Tenant
     * Number is unique within the Tenant context.
     * ReadOnly after credit creation
     * @type {string}
     * @memberof CustomerCredit
     */
    code?: string | null;
    /**
     * Type of Credit.
     * Mozu.Customer.Contracts.Credit.Credit.CreditTypeConst
     * Required.
     * ReadOnly after credit creation
     * @type {string}
     * @memberof CustomerCredit
     */
    creditType?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CustomerCredit
     */
    creditTypeId?: number;
    /**
     * Currency Code
     * @type {string}
     * @memberof CustomerCredit
     */
    currencyCode?: string | null;
    /**
     * Do we want to track this here?
     * Current Balance
     * ReadOnly
     * @type {number}
     * @memberof CustomerCredit
     */
    currentBalance?: number | null;
    /**
     * Name of custom credit type
     * Optional.
     * @type {string}
     * @memberof CustomerCredit
     */
    customCreditType?: string | null;
    /**
     * Id of the N:Mozu.Customer
     * that this credit is assigned to.
     * Optional.
     * @type {number}
     * @memberof CustomerCredit
     */
    customerId?: number | null;
    /**
     * Date after which this credit is no longer valid
     * Optional
     * Defaults to 365 days
     * @type {string}
     * @memberof CustomerCredit
     */
    expirationDate?: string | null;
    /**
     * Balance assigned when credit was initially created.
     * May be zero and updated later.
     * ReadOnly after intial credit creation
     * @type {number}
     * @memberof CustomerCredit
     */
    initialBalance?: number | null;
}
/**
 * Category
 * @export
 * @interface CustomerCustomerDynamicExpression
 */
export interface CustomerCustomerDynamicExpression {
    /**
     * 
     * @type {string}
     * @memberof CustomerCustomerDynamicExpression
     */
    text?: string | null;
    /**
     * 
     * @type {CustomerExpression}
     * @memberof CustomerCustomerDynamicExpression
     */
    tree?: CustomerExpression;
}
/**
 * A customer segment.
 * @export
 * @interface CustomerCustomerSegment
 */
export interface CustomerCustomerSegment {
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CustomerCustomerSegment
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * Unique identifier of the customer segment.
     * @type {string}
     * @memberof CustomerCustomerSegment
     */
    code?: string | null;
    /**
     * Description of the customer segment.
     * @type {string}
     * @memberof CustomerCustomerSegment
     */
    description?: string | null;
    /**
     * Unique identifier of the customer segment.
     * @type {number}
     * @memberof CustomerCustomerSegment
     */
    id?: number;
    /**
     * Name of the customer segment.
     * @type {string}
     * @memberof CustomerCustomerSegment
     */
    name?: string | null;
}
/**
 * 
 * @export
 * @interface CustomerExpression
 */
export interface CustomerExpression {
    /**
     * The field target of a predicate
     * @type {string}
     * @memberof CustomerExpression
     */
    left?: string | null;
    /**
     * And or Or (if Container with More than one Node)
     * @type {string}
     * @memberof CustomerExpression
     */
    logicalOperator?: string | null;
    /**
     * 
     * @type {Array<CustomerExpression>}
     * @memberof CustomerExpression
     */
    nodes?: Array<CustomerExpression> | null;
    /**
     * The operator of a predicate
     * @type {string}
     * @memberof CustomerExpression
     */
    operator?: string | null;
    /**
     * The literal values of a predicate
     * @type {any}
     * @memberof CustomerExpression
     */
    right?: any | null;
    /**
     * Container or Predicate
     * @type {string}
     * @memberof CustomerExpression
     */
    type?: string | null;
}
/**
 * 
 * @export
 * @interface CustomerLoginInfo
 */
export interface CustomerLoginInfo {
    /**
     * Optional requested duration for the authentication ticket in minutes.
     * Must not exceed tenant configuration or platform hard caps.
     * Requires 'customer-auth:configure-token-durations' behavior.
     * @type {number}
     * @memberof CustomerLoginInfo
     */
    authTicketTtlMinutes?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerLoginInfo
     */
    emailAddress?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerLoginInfo
     */
    externalPassword?: string | null;
    /**
     * Specifies the fingerprint of the user for two-factor authentication.
     * @type {string}
     * @memberof CustomerLoginInfo
     */
    fingerprint?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerLoginInfo
     */
    isImport?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerLoginInfo
     */
    password?: string | null;
    /**
     * Optional requested duration for the refresh token in minutes.
     * Must not exceed tenant configuration or platform hard caps.
     * Requires 'customer-auth:configure-token-durations' behavior.
     * @type {number}
     * @memberof CustomerLoginInfo
     */
    refreshTokenTtlMinutes?: number | null;
    /**
     * Specifies the region of the user for two-factor authentication.
     * @type {string}
     * @memberof CustomerLoginInfo
     */
    region?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerLoginInfo
     */
    username?: string | null;
}
/**
 * Note added to the customer account. Merchants can add internal notes, for example, to keep track of a customer's interests or complaints.
 * @export
 * @interface CustomerNote
 */
export interface CustomerNote {
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CustomerNote
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * Content of the note that the merchant added.
     * @type {string}
     * @memberof CustomerNote
     */
    content?: string | null;
    /**
     * Unique identifier of the note.
     * @type {number}
     * @memberof CustomerNote
     */
    id?: number;
}
/**
 * Collection of notes added to a customer account returned as a whole. A collection is not paged.
 * @export
 * @interface CustomerNoteCollection
 */
export interface CustomerNoteCollection {
    /**
     * 
     * @type {Array<CustomerNote>}
     * @memberof CustomerNoteCollection
     */
    items?: Array<CustomerNote> | null;
    /**
     * 
     * @type {number}
     * @memberof CustomerNoteCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerNoteCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerNoteCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerNoteCollection
     */
    totalCount?: number;
}
/**
 * Old password and new password.
 * @export
 * @interface CustomerPasswordInfo
 */
export interface CustomerPasswordInfo {
    /**
     * The External Password, typically used for imports in conjunction with a custom action
     * @type {string}
     * @memberof CustomerPasswordInfo
     */
    externalPassword?: string | null;
    /**
     * New password.
     * @type {string}
     * @memberof CustomerPasswordInfo
     */
    newPassword?: string | null;
    /**
     * Old password.
     * @type {string}
     * @memberof CustomerPasswordInfo
     */
    oldPassword?: string | null;
}
/**
 * 
 * @export
 * @interface CustomerPurchaseOrderAccount
 */
export interface CustomerPurchaseOrderAccount {
    /**
     * 
     * @type {number}
     * @memberof CustomerPurchaseOrderAccount
     */
    accountId?: number;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CustomerPurchaseOrderAccount
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {number}
     * @memberof CustomerPurchaseOrderAccount
     */
    availableBalance?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerPurchaseOrderAccount
     */
    creditLimit?: number;
    /**
     * 
     * @type {Array<CustomerPurchaseOrderPaymentTerm>}
     * @memberof CustomerPurchaseOrderAccount
     */
    customerPurchaseOrderPaymentTerms?: Array<CustomerPurchaseOrderPaymentTerm> | null;
    /**
     * 
     * @type {number}
     * @memberof CustomerPurchaseOrderAccount
     */
    id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerPurchaseOrderAccount
     */
    isEnabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CustomerPurchaseOrderAccount
     */
    overdraftAllowance?: number | null;
    /**
     * Indicates type of overdraft. Possible values are "Percent" and "Amount"
     * @type {string}
     * @memberof CustomerPurchaseOrderAccount
     */
    overdraftAllowanceType?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CustomerPurchaseOrderAccount
     */
    totalAvailableBalance?: number;
}
/**
 * 
 * @export
 * @interface CustomerPurchaseOrderAccountCollection
 */
export interface CustomerPurchaseOrderAccountCollection {
    /**
     * 
     * @type {Array<CustomerPurchaseOrderAccount>}
     * @memberof CustomerPurchaseOrderAccountCollection
     */
    items?: Array<CustomerPurchaseOrderAccount> | null;
    /**
     * 
     * @type {number}
     * @memberof CustomerPurchaseOrderAccountCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerPurchaseOrderAccountCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerPurchaseOrderAccountCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerPurchaseOrderAccountCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface CustomerPurchaseOrderPaymentTerm
 */
export interface CustomerPurchaseOrderPaymentTerm {
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CustomerPurchaseOrderPaymentTerm
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof CustomerPurchaseOrderPaymentTerm
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerPurchaseOrderPaymentTerm
     */
    description?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CustomerPurchaseOrderPaymentTerm
     */
    siteId?: number;
}
/**
 * 
 * @export
 * @interface CustomerResetPasswordInfo
 */
export interface CustomerResetPasswordInfo {
    /**
     * 
     * @type {string}
     * @memberof CustomerResetPasswordInfo
     */
    customerSetCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerResetPasswordInfo
     */
    emailAddress?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerResetPasswordInfo
     */
    userName?: string | null;
}
/**
 * Represents a customer rule usage
 * @export
 * @interface CustomerRuleUsage
 */
export interface CustomerRuleUsage {
    /**
     * The code/name of the rule
     * @type {string}
     * @memberof CustomerRuleUsage
     */
    code?: string | null;
    /**
     * The type of rule (Return, PurchaseLimit, etc.)
     * @type {string}
     * @memberof CustomerRuleUsage
     */
    ruleType?: string | null;
}
/**
 * Collection of customer segements returned as a whole. A collection is not paged.
 * @export
 * @interface CustomerSegmentCollection
 */
export interface CustomerSegmentCollection {
    /**
     * 
     * @type {Array<CustomerCustomerSegment>}
     * @memberof CustomerSegmentCollection
     */
    items?: Array<CustomerCustomerSegment> | null;
    /**
     * 
     * @type {number}
     * @memberof CustomerSegmentCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerSegmentCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerSegmentCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerSegmentCollection
     */
    totalCount?: number;
}
/**
 * A customer segment.
 * @export
 * @interface CustomerSet
 */
export interface CustomerSet {
    /**
     * 
     * @type {CustomerSetAggregateInfo}
     * @memberof CustomerSet
     */
    aggregateInfo?: CustomerSetAggregateInfo;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CustomerSet
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * Unique identifier of the customer segment.
     * @type {string}
     * @memberof CustomerSet
     */
    code?: string | null;
    /**
     * Description of the customer segment.
     * @type {string}
     * @memberof CustomerSet
     */
    description?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerSet
     */
    isDefault?: boolean;
    /**
     * Name of the customer segment.
     * @type {string}
     * @memberof CustomerSet
     */
    name?: string | null;
    /**
     * 
     * @type {Array<CustomerSetSite>}
     * @memberof CustomerSet
     */
    sites?: Array<CustomerSetSite> | null;
}
/**
 * 
 * @export
 * @interface CustomerSetAggregateInfo
 */
export interface CustomerSetAggregateInfo {
    /**
     * 
     * @type {number}
     * @memberof CustomerSetAggregateInfo
     */
    customerCount?: number;
}
/**
 * 
 * @export
 * @interface CustomerSetCollection
 */
export interface CustomerSetCollection {
    /**
     * 
     * @type {Array<CustomerSet>}
     * @memberof CustomerSetCollection
     */
    items?: Array<CustomerSet> | null;
    /**
     * 
     * @type {number}
     * @memberof CustomerSetCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerSetCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerSetCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerSetCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface CustomerSetSite
 */
export interface CustomerSetSite {
    /**
     * 
     * @type {string}
     * @memberof CustomerSetSite
     */
    customerSetCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerSetSite
     */
    name?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CustomerSetSite
     */
    siteId?: number;
}
/**
 * 
 * @export
 * @interface CustomerUserAuthInfo
 */
export interface CustomerUserAuthInfo {
    /**
     * Account Id specifies the account for which the user requests an authentication token.
     * @type {number}
     * @memberof CustomerUserAuthInfo
     */
    accountId?: number | null;
    /**
     * Optional requested duration for the authentication ticket in minutes.
     * Must not exceed tenant configuration or platform hard caps.
     * Requires 'customer-auth:configure-token-durations' behavior.
     * @type {number}
     * @memberof CustomerUserAuthInfo
     */
    authTicketTtlMinutes?: number | null;
    /**
     * Specifies the fingerprint of the user for two-factor authentication.
     * @type {string}
     * @memberof CustomerUserAuthInfo
     */
    fingerprint?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerUserAuthInfo
     */
    password?: string | null;
    /**
     * Optional requested duration for the refresh token in minutes.
     * Must not exceed tenant configuration or platform hard caps.
     * Requires 'customer-auth:configure-token-durations' behavior.
     * @type {number}
     * @memberof CustomerUserAuthInfo
     */
    refreshTokenTtlMinutes?: number | null;
    /**
     * Specifies the region of the user for two-factor authentication.
     * @type {string}
     * @memberof CustomerUserAuthInfo
     */
    region?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerUserAuthInfo
     */
    username?: string | null;
}
/**
 * 
 * @export
 * @interface CustomerUserRoleCollection
 */
export interface CustomerUserRoleCollection {
    /**
     * 
     * @type {Array<UserRole>}
     * @memberof CustomerUserRoleCollection
     */
    items?: Array<UserRole> | null;
    /**
     * 
     * @type {number}
     * @memberof CustomerUserRoleCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface EvaluateAccountRankingRuleRequest
 */
export interface EvaluateAccountRankingRuleRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof EvaluateAccountRankingRuleRequest
     */
    codes?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof EvaluateAccountRankingRuleRequest
     */
    ruleType?: string | null;
}
/**
 * 
 * @export
 * @interface ExtendedCustomerContact
 */
export interface ExtendedCustomerContact {
    /**
     * 
     * @type {number}
     * @memberof ExtendedCustomerContact
     */
    accountId?: number;
    /**
     * 
     * @type {string}
     * @memberof ExtendedCustomerContact
     */
    accountName?: string | null;
    /**
     * 
     * @type {CommerceRuntimeAddress}
     * @memberof ExtendedCustomerContact
     */
    address?: CommerceRuntimeAddress;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof ExtendedCustomerContact
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof ExtendedCustomerContact
     */
    companyOrOrganization?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExtendedCustomerContact
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExtendedCustomerContact
     */
    faxNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExtendedCustomerContact
     */
    firstName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ExtendedCustomerContact
     */
    id?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ExtendedCustomerContact
     */
    label?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExtendedCustomerContact
     */
    lastNameOrSurname?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExtendedCustomerContact
     */
    middleNameOrInitial?: string | null;
    /**
     * 
     * @type {CommerceRuntimePhone}
     * @memberof ExtendedCustomerContact
     */
    phoneNumbers?: CommerceRuntimePhone;
    /**
     * 
     * @type {Array<ContactType>}
     * @memberof ExtendedCustomerContact
     */
    types?: Array<ContactType> | null;
}
/**
 * Collection of contacts returned as a whole.
 * @export
 * @interface ExtendedCustomerContactCollection
 */
export interface ExtendedCustomerContactCollection {
    /**
     * 
     * @type {Array<ExtendedCustomerContact>}
     * @memberof ExtendedCustomerContactCollection
     */
    items?: Array<ExtendedCustomerContact> | null;
    /**
     * 
     * @type {number}
     * @memberof ExtendedCustomerContactCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof ExtendedCustomerContactCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof ExtendedCustomerContactCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof ExtendedCustomerContactCollection
     */
    totalCount?: number;
}
/**
 * Inventory in-stock notification subscription.  Notification sender/processor view.  Generally for internal consumption only.
 * @export
 * @interface InStockNotificationSubscription
 */
export interface InStockNotificationSubscription {
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof InStockNotificationSubscription
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * Id of the N:Mozu.Customer
     * that this subscription is assigned to.
     * Optional.  E-mail or CustomerId are required.
     * @type {number}
     * @memberof InStockNotificationSubscription
     */
    customerId?: number | null;
    /**
     * Email.  E-mail or CustomerId are required.
     * @type {string}
     * @memberof InStockNotificationSubscription
     */
    email?: string | null;
    /**
     * Unique identifier
     * @type {number}
     * @memberof InStockNotificationSubscription
     */
    id?: number | null;
    /**
     * Location Code
     * @type {string}
     * @memberof InStockNotificationSubscription
     */
    locationCode?: string | null;
    /**
     * Product Code
     * @type {string}
     * @memberof InStockNotificationSubscription
     */
    productCode?: string | null;
    /**
     * User Id for multi-user b2b accounts
     * @type {string}
     * @memberof InStockNotificationSubscription
     */
    userId?: string | null;
}
/**
 * Collection of InStockNotificationSubscriptions
 * @export
 * @interface InStockNotificationSubscriptionCollection
 */
export interface InStockNotificationSubscriptionCollection {
    /**
     * 
     * @type {Array<InStockNotificationSubscription>}
     * @memberof InStockNotificationSubscriptionCollection
     */
    items?: Array<InStockNotificationSubscription> | null;
    /**
     * 
     * @type {number}
     * @memberof InStockNotificationSubscriptionCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof InStockNotificationSubscriptionCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof InStockNotificationSubscriptionCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof InStockNotificationSubscriptionCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface LoginState
 */
export interface LoginState {
    /**
     * 
     * @type {string}
     * @memberof LoginState
     */
    createdOn?: string | null;
    /**
     * 
     * @type {number}
     * @memberof LoginState
     */
    failedLoginAttemptCount?: number;
    /**
     * 
     * @type {string}
     * @memberof LoginState
     */
    firstFailedLoginAttemptOn?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof LoginState
     */
    isLocked?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LoginState
     */
    isPasswordChangeRequired?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LoginState
     */
    lastLockedOn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LoginState
     */
    lastLoginOn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LoginState
     */
    lastPasswordChangeOn?: string | null;
    /**
     * 
     * @type {number}
     * @memberof LoginState
     */
    remainingLoginAttempts?: number;
    /**
     * 
     * @type {string}
     * @memberof LoginState
     */
    updatedOn?: string | null;
}
/**
 * Request for generating a one-time password (OTP)
 * @export
 * @interface OtpRequest
 */
export interface OtpRequest {
    /**
     * Email address for which to generate the OTP code
     * @type {string}
     * @memberof OtpRequest
     */
    email?: string | null;
}
/**
 * Customer purchase order transaction log
 * @export
 * @interface PurchaseOrderTransaction
 */
export interface PurchaseOrderTransaction {
    /**
     * Any additional transaction detail other than transaction description
     * @type {string}
     * @memberof PurchaseOrderTransaction
     */
    additionalTransactionDetail?: string | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof PurchaseOrderTransaction
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof PurchaseOrderTransaction
     */
    author?: string | null;
    /**
     * Current available balance on Purchase Order account
     * @type {number}
     * @memberof PurchaseOrderTransaction
     */
    availableBalance?: number;
    /**
     * Maximum credit available on a purchase order account
     * @type {number}
     * @memberof PurchaseOrderTransaction
     */
    creditLimit?: number;
    /**
     * Unique identifier for Customer purchase order account
     * @type {number}
     * @memberof PurchaseOrderTransaction
     */
    customerPurchaseOrderAccountId?: number;
    /**
     * 
     * @type {string}
     * @memberof PurchaseOrderTransaction
     */
    externalId?: string | null;
    /**
     * Unique identifier for an order
     * @type {string}
     * @memberof PurchaseOrderTransaction
     */
    orderId?: string | null;
    /**
     * Purchase order number
     * @type {string}
     * @memberof PurchaseOrderTransaction
     */
    purchaseOrderNumber?: string | null;
    /**
     * Site Id associated with transaction log
     * @type {number}
     * @memberof PurchaseOrderTransaction
     */
    siteId?: number;
    /**
     * Tenant Id associated with transaction log
     * @type {number}
     * @memberof PurchaseOrderTransaction
     */
    tenantId?: number;
    /**
     * Transaction amount in transaction log for a purchase order account
     * @type {number}
     * @memberof PurchaseOrderTransaction
     */
    transactionAmount?: number;
    /**
     * Date when the transaction was made on a purchase order account
     * @type {string}
     * @memberof PurchaseOrderTransaction
     */
    transactionDate?: string;
    /**
     * Purchase Order transaction description
     * Line of Credit Change
     * Order Submitted
     * Payment Collected
     * Payment Voided
     * Payment Refund
     * Manual Adjustment
     * @type {string}
     * @memberof PurchaseOrderTransaction
     */
    transactionDescription?: string | null;
    /**
     *  Purchase Order transaction type
     * 1 - Line of Credit Change
     * 2 - Order Submitted
     * 3 - Payment Collected
     * 4 - Payment Voided
     * 5 - Payment Refund
     * 6 - Manual Adjustment
     * @type {number}
     * @memberof PurchaseOrderTransaction
     */
    transactionTypeId?: number;
}
/**
 * Collection of purchase order transactions returned as a whole. 
 * A collection is not paged.
 * @export
 * @interface PurchaseOrderTransactionCollection
 */
export interface PurchaseOrderTransactionCollection {
    /**
     * 
     * @type {Array<PurchaseOrderTransaction>}
     * @memberof PurchaseOrderTransactionCollection
     */
    items?: Array<PurchaseOrderTransaction> | null;
    /**
     * 
     * @type {number}
     * @memberof PurchaseOrderTransactionCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof PurchaseOrderTransactionCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof PurchaseOrderTransactionCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof PurchaseOrderTransactionCollection
     */
    totalCount?: number;
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
 * @interface Transaction
 */
export interface Transaction {
    /**
     * 
     * @type {number}
     * @memberof Transaction
     */
    amount?: number;
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    currencyCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    date?: string;
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    interactionType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    transactionId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    transactionType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    visitId?: string | null;
}
/**
 * This class is used for reporting errors while upgrading the B2C account to B2B.
 * @export
 * @interface UpgradeToB2BAccountError
 */
export interface UpgradeToB2BAccountError {
    /**
     * 
     * @type {number}
     * @memberof UpgradeToB2BAccountError
     */
    accountID?: number;
    /**
     * 
     * @type {string}
     * @memberof UpgradeToB2BAccountError
     */
    errorMessage?: string | null;
}
/**
 * This class is used for sending custom response while upgrading the B2C accounts to B2B.
 * The custom response returns a list of success, skipped and error accountIDs while upgrade.
 * @export
 * @interface UpgradeToB2BAccountResponse
 */
export interface UpgradeToB2BAccountResponse {
    /**
     * 
     * @type {Array<UpgradeToB2BAccountError>}
     * @memberof UpgradeToB2BAccountResponse
     */
    errorAccountIds?: Array<UpgradeToB2BAccountError> | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof UpgradeToB2BAccountResponse
     */
    skippedAccountIds?: Array<number> | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof UpgradeToB2BAccountResponse
     */
    successAccountIds?: Array<number> | null;
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
 * @interface Visit
 */
export interface Visit {
    /**
     * 
     * @type {number}
     * @memberof Visit
     */
    accountId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Visit
     */
    browserLocationCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Visit
     */
    date?: string;
    /**
     * 
     * @type {string}
     * @memberof Visit
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Visit
     */
    locationCode?: string | null;
    /**
     * 
     * @type {Array<Transaction>}
     * @memberof Visit
     */
    transactions?: Array<Transaction> | null;
    /**
     * 
     * @type {string}
     * @memberof Visit
     */
    type?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Visit
     */
    userId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Visit
     */
    webReferrer?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Visit
     */
    webSessionId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Visit
     */
    webSiteId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Visit
     */
    webUserAgent?: string | null;
}
/**
 * 
 * @export
 * @interface VisitCollection
 */
export interface VisitCollection {
    /**
     * 
     * @type {Array<Visit>}
     * @memberof VisitCollection
     */
    items?: Array<Visit> | null;
    /**
     * 
     * @type {number}
     * @memberof VisitCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof VisitCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof VisitCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof VisitCollection
     */
    totalCount?: number;
}
