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
     * Unique identifier of the account, also known as a customer number.
     * @type {number}
     * @memberof AccountBase
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof AccountBase
     */
    customerSet?: string | null;
    /**
     * 
     * @type {CommerceSummary}
     * @memberof AccountBase
     */
    commerceSummary?: CommerceSummary;
    /**
     * List of contacts for this account. A customer account can have multiple contacts for billing and shipping addresses.
     * @type {Array<CustomerContact>}
     * @memberof AccountBase
     */
    contacts?: Array<CustomerContact> | null;
    /**
     * The company or organization name for an account.
     * @type {string}
     * @memberof AccountBase
     */
    companyOrOrganization?: string | null;
    /**
     * List of notes for the account. Merchants use these internal notes, for example, to make a note of a customer's interests or complaints. 
     * Notes are available only from the merchant's view, customers cannot view these notes.
     * @type {Array<CustomerNote>}
     * @memberof AccountBase
     */
    notes?: Array<CustomerNote> | null;
    /**
     * List of attributes for the account.
     * @type {Array<CustomerAttribute>}
     * @memberof AccountBase
     */
    attributes?: Array<CustomerAttribute> | null;
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
    /**
     * 
     * @type {string}
     * @memberof AccountBase
     */
    externalId?: string | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof AccountBase
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * Date when the customer account is created.
     * @type {string}
     * @memberof AccountBase
     */
    customerSinceDate?: string | null;
    /**
     * Type of account.
     * @type {string}
     * @memberof AccountBase
     */
    accountType?: string | null;
    /**
     * Indicates Subscription migration is required or not.
     * @type {boolean}
     * @memberof AccountBase
     */
    migrationRequired?: boolean;
}
/**
 * 
 * @export
 * @interface AccountHierarchyNode
 */
export interface AccountHierarchyNode {
    /**
     * 
     * @type {number}
     * @memberof AccountHierarchyNode
     */
    id?: number;
    /**
     * 
     * @type {Array<AccountHierarchyNode>}
     * @memberof AccountHierarchyNode
     */
    children?: Array<AccountHierarchyNode> | null;
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
     * If the account has multiple users, provide the Id of a specific user
     * @type {string}
     * @memberof AccountPasswordInfo
     */
    userId?: string | null;
    /**
     * Indicates to unlock the Account
     * @type {boolean}
     * @memberof AccountPasswordInfo
     */
    unlockAccount?: boolean | null;
    /**
     * 
     * @type {CustomerPasswordInfo}
     * @memberof AccountPasswordInfo
     */
    passwordInfo?: CustomerPasswordInfo;
}
/**
 * 
 * @export
 * @interface AccountPasswordInfoCollection
 */
export interface AccountPasswordInfoCollection {
    /**
     * 
     * @type {number}
     * @memberof AccountPasswordInfoCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<AccountPasswordInfo>}
     * @memberof AccountPasswordInfoCollection
     */
    items?: Array<AccountPasswordInfo> | null;
}
/**
 * Represents an account priority.
 * @export
 * @interface AccountPriority
 */
export interface AccountPriority {
    /**
     * The Priority or rank of accounts. Lowest value has highest priority.
     * @type {number}
     * @memberof AccountPriority
     */
    priority?: number;
    /**
     * List of accounts against the priority. One account will have only 1 priority assigned to it.
     * @type {Array<number>}
     * @memberof AccountPriority
     */
    accounts?: Array<number> | null;
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
 * 
 * @export
 * @interface AccountRankingRule
 */
export interface AccountRankingRule {
    /**
     * Unique id
     * @type {number}
     * @memberof AccountRankingRule
     */
    id?: number;
    /**
     * unique code.
     * @type {string}
     * @memberof AccountRankingRule
     */
    code?: string | null;
    /**
     * Rule name
     * @type {string}
     * @memberof AccountRankingRule
     */
    name?: string | null;
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
     * 
     * @type {AdminUserAuditInfo}
     * @memberof AccountRankingRule
     */
    auditInfo?: AdminUserAuditInfo;
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
     * @type {number}
     * @memberof AccountRankingRuleCollection
     */
    startIndex?: number;
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
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof AccountRankingRuleCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<AccountRankingRule>}
     * @memberof AccountRankingRuleCollection
     */
    items?: Array<AccountRankingRule> | null;
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
    userId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AuthTicket2FAInfo
     */
    otpCode?: string | null;
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
    otpCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AuthTicketOtpInfo
     */
    region?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AuthTicketOtpInfo
     */
    fingerprint?: string | null;
}
/**
 * Customer account. Customers provide contact information, view order history, and set email preferences on their account. 
 * Merchants can edit accounts to add internal notes or assign them to segments.
 * @export
 * @interface B2BAccount
 */
export interface B2BAccount {
    /**
     * List of B2B users on the account.
     * @type {Array<B2BUser>}
     * @memberof B2BAccount
     */
    users?: Array<B2BUser> | null;
    /**
     * Is the B2B account active?
     * @type {boolean}
     * @memberof B2BAccount
     */
    isActive?: boolean | null;
    /**
     * Price list on B2B account.
     * @type {string}
     * @memberof B2BAccount
     */
    priceList?: string | null;
    /**
     * List of sales rep on B2B account.
     * @type {Array<AccountSalesRep>}
     * @memberof B2BAccount
     */
    salesReps?: Array<AccountSalesRep> | null;
    /**
     * Root account Id in B2B hierarchy
     * @type {number}
     * @memberof B2BAccount
     */
    rootAccountId?: number | null;
    /**
     * Parent account Id in B2B hierarchy
     * @type {number}
     * @memberof B2BAccount
     */
    parentAccountId?: number | null;
    /**
     * Status on B2B account.
     * @type {string}
     * @memberof B2BAccount
     */
    approvalStatus?: string | null;
    /**
     * Priority of the b2b account for order release
     * @type {number}
     * @memberof B2BAccount
     */
    priority?: number | null;
    /**
     * Unique identifier of the account, also known as a customer number.
     * @type {number}
     * @memberof B2BAccount
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof B2BAccount
     */
    customerSet?: string | null;
    /**
     * 
     * @type {CommerceSummary}
     * @memberof B2BAccount
     */
    commerceSummary?: CommerceSummary;
    /**
     * List of contacts for this account. A customer account can have multiple contacts for billing and shipping addresses.
     * @type {Array<CustomerContact>}
     * @memberof B2BAccount
     */
    contacts?: Array<CustomerContact> | null;
    /**
     * The company or organization name for an account.
     * @type {string}
     * @memberof B2BAccount
     */
    companyOrOrganization?: string | null;
    /**
     * List of notes for the account. Merchants use these internal notes, for example, to make a note of a customer's interests or complaints. 
     * Notes are available only from the merchant's view, customers cannot view these notes.
     * @type {Array<CustomerNote>}
     * @memberof B2BAccount
     */
    notes?: Array<CustomerNote> | null;
    /**
     * List of attributes for the account.
     * @type {Array<CustomerAttribute>}
     * @memberof B2BAccount
     */
    attributes?: Array<CustomerAttribute> | null;
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
     * 
     * @type {string}
     * @memberof B2BAccount
     */
    externalId?: string | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof B2BAccount
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * Date when the customer account is created.
     * @type {string}
     * @memberof B2BAccount
     */
    customerSinceDate?: string | null;
    /**
     * Type of account.
     * @type {string}
     * @memberof B2BAccount
     */
    accountType?: string | null;
    /**
     * Indicates Subscription migration is required or not.
     * @type {boolean}
     * @memberof B2BAccount
     */
    migrationRequired?: boolean;
}
/**
 * Collection of all the B2B Accounts returned as a whole. A collection is not paged.
 * @export
 * @interface B2BAccountCollection
 */
export interface B2BAccountCollection {
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
    pageSize?: number;
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
    totalCount?: number;
    /**
     * 
     * @type {Array<B2BAccount>}
     * @memberof B2BAccountCollection
     */
    items?: Array<B2BAccount> | null;
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
 * Customer account. Customers provide contact information, view order history, and set email preferences on their account. 
 * Merchants can edit accounts to add internal notes or assign them to segments.
 * @export
 * @interface B2BUser
 */
export interface B2BUser {
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
    userName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof B2BUser
     */
    firstName?: string | null;
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
     * Unique identifier of the user who is currently logged in. This is null if the user is anonymous (not logged in).  Unicode data with a maximum length of 55 characters.
     * @type {string}
     * @memberof B2BUser
     */
    userId?: string | null;
    /**
     * 
     * @type {Array<UserRole>}
     * @memberof B2BUser
     */
    roles?: Array<UserRole> | null;
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
    isActive?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof B2BUser
     */
    isRemoved?: boolean;
    /**
     * If true, the customer prefers to receive marketing material such as newsletters or email offers.
     * @type {boolean}
     * @memberof B2BUser
     */
    acceptsMarketing?: boolean;
    /**
     * Indicates if an external password is set on this account
     * @type {boolean}
     * @memberof B2BUser
     */
    hasExternalPassword?: boolean;
    /**
     * 
     * @type {string}
     * @memberof B2BUser
     */
    last2FaDate?: string | null;
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
     * @type {number}
     * @memberof B2BUserCollection
     */
    startIndex?: number;
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
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof B2BUserCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<B2BUser>}
     * @memberof B2BUserCollection
     */
    items?: Array<B2BUser> | null;
}
/**
 * 
 * @export
 * @interface Card
 */
export interface Card {
    /**
     * Card ID from Payment Service
     * @type {string}
     * @memberof Card
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Card
     */
    nameOnCard?: string | null;
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
    expireMonth?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Card
     */
    expireYear?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Card
     */
    cardNumberPart?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Card
     */
    contactId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Card
     */
    isDefaultPayMethod?: boolean;
}
/**
 * 
 * @export
 * @interface CardCollection
 */
export interface CardCollection {
    /**
     * 
     * @type {number}
     * @memberof CardCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<Card>}
     * @memberof CardCollection
     */
    items?: Array<Card> | null;
}
/**
 * 
 * @export
 * @interface CartAuthTicketRequest
 */
export interface CartAuthTicketRequest {
    /**
     * Cart Id of the user
     * @type {string}
     * @memberof CartAuthTicketRequest
     */
    cartId?: string | null;
    /**
     * Account Id of the user.
     * @type {number}
     * @memberof CartAuthTicketRequest
     */
    accountId?: number;
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
     * @type {boolean}
     * @memberof ChangePasswordResult
     */
    succeeded?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ChangePasswordResult
     */
    errorMessage?: string | null;
}
/**
 * 
 * @export
 * @interface ChangePasswordResultCollection
 */
export interface ChangePasswordResultCollection {
    /**
     * 
     * @type {number}
     * @memberof ChangePasswordResultCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<ChangePasswordResult>}
     * @memberof ChangePasswordResultCollection
     */
    items?: Array<ChangePasswordResult> | null;
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
    cityOrTown?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAddress
     */
    stateOrProvince?: string | null;
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
    countryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAddress
     */
    addressType?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeAddress
     */
    isValidated?: boolean | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeAttribute
 */
export interface CommerceRuntimeAttribute {
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeAttribute
     */
    id?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttribute
     */
    adminName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttribute
     */
    namespace?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttribute
     */
    attributeCode: string;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttribute
     */
    inputType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttribute
     */
    valueType: string;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttribute
     */
    dataType?: string | null;
    /**
     * 
     * @type {Array<CommerceRuntimeAttributeMetadataItem>}
     * @memberof CommerceRuntimeAttribute
     */
    attributeMetadata?: Array<CommerceRuntimeAttributeMetadataItem> | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttribute
     */
    attributeFQN?: string | null;
    /**
     * 
     * @type {CommerceRuntimeAttributeLocalizedContent}
     * @memberof CommerceRuntimeAttribute
     */
    content?: CommerceRuntimeAttributeLocalizedContent;
    /**
     * 
     * @type {CommerceRuntimeAttributeValidation}
     * @memberof CommerceRuntimeAttribute
     */
    validation?: CommerceRuntimeAttributeValidation;
    /**
     * 
     * @type {Array<CommerceRuntimeAttributeVocabularyValue>}
     * @memberof CommerceRuntimeAttribute
     */
    vocabularyValues?: Array<CommerceRuntimeAttributeVocabularyValue> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CommerceRuntimeAttribute
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeAttribute
     */
    isActive?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeAttribute
     */
    isRequired?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeAttribute
     */
    isReadOnly?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeAttribute
     */
    isMultiValued?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeAttribute
     */
    isVisible?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeAttribute
     */
    order?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttribute
     */
    displayGroup: string;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeAttribute
     */
    availableForOrderRouting?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeAttribute
     */
    availableForDiscounts?: boolean;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeAttributeCollection
 */
export interface CommerceRuntimeAttributeCollection {
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
    pageSize?: number;
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
    totalCount?: number;
    /**
     * 
     * @type {Array<CommerceRuntimeAttribute>}
     * @memberof CommerceRuntimeAttributeCollection
     */
    items?: Array<CommerceRuntimeAttribute> | null;
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
    regularExpression?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeAttributeValidation
     */
    minStringLength?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeAttributeValidation
     */
    maxStringLength?: number | null;
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
    maxNumericValue?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttributeValidation
     */
    minDateTime?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttributeValidation
     */
    maxDateTime?: string | null;
}
/**
 * 
 * @export
 * @interface CommerceRuntimeAttributeVocabularyValue
 */
export interface CommerceRuntimeAttributeVocabularyValue {
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttributeVocabularyValue
     */
    value: string;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeAttributeVocabularyValue
     */
    sequence?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeAttributeVocabularyValue
     */
    isHidden?: boolean | null;
    /**
     * 
     * @type {AttributeValueLocalizedContent}
     * @memberof CommerceRuntimeAttributeVocabularyValue
     */
    content?: AttributeValueLocalizedContent;
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
     * 
     * @type {CurrencyAmount}
     * @memberof CommerceSummary
     */
    totalOrderAmount?: CurrencyAmount;
    /**
     * Number of orders listed in the order history of a customer account.
     * @type {number}
     * @memberof CommerceSummary
     */
    orderCount?: number;
    /**
     * When the last order was placed.
     * @type {string}
     * @memberof CommerceSummary
     */
    lastOrderDate?: string | null;
    /**
     * Number of wishlists listed in the wishlist count of a customer account
     * @type {number}
     * @memberof CommerceSummary
     */
    wishlistCount?: number;
    /**
     * Number of visits for this customer across the entire tenant.
     * @type {number}
     * @memberof CommerceSummary
     */
    visitsCount?: number;
}
/**
 * Used to update a user's forgotten password. Contains the user's email address, new password, and the confirmation code 
 * that is required to update the password.
 * @export
 * @interface ConfirmationInfo
 */
export interface ConfirmationInfo {
    /**
     * UserName of the user who has requested a new password.
     * @type {string}
     * @memberof ConfirmationInfo
     */
    userName?: string | null;
    /**
     * Confirmation code that a user supplies when requesting a new password.
     * @type {string}
     * @memberof ConfirmationInfo
     */
    confirmationCode?: string | null;
    /**
     * The user's new password.
     * @type {string}
     * @memberof ConfirmationInfo
     */
    newPassword?: string | null;
}
/**
 * 
 * @export
 * @interface ContactType
 */
export interface ContactType {
    /**
     * 
     * @type {string}
     * @memberof ContactType
     */
    name?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ContactType
     */
    isPrimary?: boolean;
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
     * Detials of what was done
     * @type {string}
     * @memberof CreditAuditEntry
     */
    details?: string | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CreditAuditEntry
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {number}
     * @memberof CreditAuditEntry
     */
    activityTypeId?: number;
}
/**
 * 
 * @export
 * @interface CreditAuditEntryCollection
 */
export interface CreditAuditEntryCollection {
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
    pageSize?: number;
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
    totalCount?: number;
    /**
     * 
     * @type {Array<CreditAuditEntry>}
     * @memberof CreditAuditEntryCollection
     */
    items?: Array<CreditAuditEntry> | null;
}
/**
 * 
 * @export
 * @interface CreditCollection
 */
export interface CreditCollection {
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
    pageSize?: number;
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
    totalCount?: number;
    /**
     * 
     * @type {Array<CustomerCredit>}
     * @memberof CreditCollection
     */
    items?: Array<CustomerCredit> | null;
}
/**
 * Credit Transactions are used to make adjustments to a Credit Balance
 * @export
 * @interface CreditTransaction
 */
export interface CreditTransaction {
    /**
     * Id unique within the tenant
     * ReadOnly
     * @type {number}
     * @memberof CreditTransaction
     */
    id?: number | null;
    /**
     * Mozu.Customer.Contracts.Credit.CreditTransaction.CreditTransactionType
     *             Requried
     * @type {string}
     * @memberof CreditTransaction
     */
    transactionType?: string | null;
    /**
     * Comments about the transaction.  Depending on the user interface, these comments may be readable by authorized users or customers.
     * @type {string}
     * @memberof CreditTransaction
     */
    comments?: string | null;
    /**
     * Amount to apply to Credit Balance
     * Required
     * @type {number}
     * @memberof CreditTransaction
     */
    impactAmount?: number | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CreditTransaction
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof CreditTransaction
     */
    orderId?: string | null;
    /**
     * Custom data for credit transactions
     * @type {any}
     * @memberof CreditTransaction
     */
    data?: any | null;
}
/**
 * 
 * @export
 * @interface CreditTransactionCollection
 */
export interface CreditTransactionCollection {
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
    pageSize?: number;
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
    totalCount?: number;
    /**
     * 
     * @type {Array<CreditTransaction>}
     * @memberof CreditTransactionCollection
     */
    items?: Array<CreditTransaction> | null;
}
/**
 * The currency code and amount of an order listed in the order history of a customer account. Currently, only USD is supported.
 * @export
 * @interface CurrencyAmount
 */
export interface CurrencyAmount {
    /**
     * Currency code for the amount of the order. Currently, only "USD" is supported.
     * @type {string}
     * @memberof CurrencyAmount
     */
    currencyCode?: string | null;
    /**
     * Total amount of the order. Currently, only US dollar amounts are supported.
     * @type {number}
     * @memberof CurrencyAmount
     */
    amount?: number;
}
/**
 * Customer account. Customers provide contact information, view order history, and set email preferences on their account. 
 * Merchants can edit accounts to add internal notes or assign them to segments.
 * @export
 * @interface CustomerAccount
 */
export interface CustomerAccount {
    /**
     * "Email addresss of the customer.
     * @type {string}
     * @memberof CustomerAccount
     */
    emailAddress?: string | null;
    /**
     * User name for the customer account.
     * @type {string}
     * @memberof CustomerAccount
     */
    userName?: string | null;
    /**
     * First name of the customer.
     * @type {string}
     * @memberof CustomerAccount
     */
    firstName?: string | null;
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
     * Is the account active?
     * @type {boolean}
     * @memberof CustomerAccount
     */
    isActive?: boolean;
    /**
     * If true, the customer prefers to receive marketing material such as newsletters or email offers.
     * @type {boolean}
     * @memberof CustomerAccount
     */
    acceptsMarketing?: boolean;
    /**
     * Indicates if an external password is set on this account
     * @type {boolean}
     * @memberof CustomerAccount
     */
    hasExternalPassword?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CustomerAccount
     */
    last2FaDate?: string | null;
    /**
     * Unique identifier of the account, also known as a customer number.
     * @type {number}
     * @memberof CustomerAccount
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof CustomerAccount
     */
    customerSet?: string | null;
    /**
     * 
     * @type {CommerceSummary}
     * @memberof CustomerAccount
     */
    commerceSummary?: CommerceSummary;
    /**
     * List of contacts for this account. A customer account can have multiple contacts for billing and shipping addresses.
     * @type {Array<CustomerContact>}
     * @memberof CustomerAccount
     */
    contacts?: Array<CustomerContact> | null;
    /**
     * The company or organization name for an account.
     * @type {string}
     * @memberof CustomerAccount
     */
    companyOrOrganization?: string | null;
    /**
     * List of notes for the account. Merchants use these internal notes, for example, to make a note of a customer's interests or complaints. 
     * Notes are available only from the merchant's view, customers cannot view these notes.
     * @type {Array<CustomerNote>}
     * @memberof CustomerAccount
     */
    notes?: Array<CustomerNote> | null;
    /**
     * List of attributes for the account.
     * @type {Array<CustomerAttribute>}
     * @memberof CustomerAccount
     */
    attributes?: Array<CustomerAttribute> | null;
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
     * 
     * @type {string}
     * @memberof CustomerAccount
     */
    externalId?: string | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CustomerAccount
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * Date when the customer account is created.
     * @type {string}
     * @memberof CustomerAccount
     */
    customerSinceDate?: string | null;
    /**
     * Type of account.
     * @type {string}
     * @memberof CustomerAccount
     */
    accountType?: string | null;
    /**
     * Indicates Subscription migration is required or not.
     * @type {boolean}
     * @memberof CustomerAccount
     */
    migrationRequired?: boolean;
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
     * 
     * @type {string}
     * @memberof CustomerAccountAndAuthInfo
     */
    password?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerAccountAndAuthInfo
     */
    externalPassword?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerAccountAndAuthInfo
     */
    isImport?: boolean;
    /**
     * Specifies the fingerprint of the user for two-factor authentication.
     * @type {string}
     * @memberof CustomerAccountAndAuthInfo
     */
    fingerprint?: string | null;
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
     * @type {number}
     * @memberof CustomerAccountCollection
     */
    startIndex?: number;
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
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerAccountCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<CustomerAccount>}
     * @memberof CustomerAccountCollection
     */
    items?: Array<CustomerAccount> | null;
}
/**
 * 
 * @export
 * @interface CustomerAttribute
 */
export interface CustomerAttribute {
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
     * @type {number}
     * @memberof CustomerAttribute
     */
    attributeDefinitionId?: number | null;
    /**
     * 
     * @type {Array<any>}
     * @memberof CustomerAttribute
     */
    values?: Array<any> | null;
}
/**
 * Collection of notes added to a customer account returned as a whole. A collection is not paged.
 * @export
 * @interface CustomerAttributeCollection
 */
export interface CustomerAttributeCollection {
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
    pageSize?: number;
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
    totalCount?: number;
    /**
     * 
     * @type {Array<CustomerAttribute>}
     * @memberof CustomerAttributeCollection
     */
    items?: Array<CustomerAttribute> | null;
}
/**
 * 
 * @export
 * @interface CustomerAuditEntry
 */
export interface CustomerAuditEntry {
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
     * Applicattion associated with this entry
     * @type {string}
     * @memberof CustomerAuditEntry
     */
    application?: string | null;
    /**
     * Site associated wit this entry
     * @type {string}
     * @memberof CustomerAuditEntry
     */
    site?: string | null;
    /**
     * Description of the change (UI Displayable)
     * @type {string}
     * @memberof CustomerAuditEntry
     */
    description?: string | null;
    /**
     * Path of the field value being changed (e.g. /Customer/Contacts/1/FirstName)
     * @type {string}
     * @memberof CustomerAuditEntry
     */
    fieldPath?: string | null;
    /**
     * Original value before this event
     * @type {string}
     * @memberof CustomerAuditEntry
     */
    oldValue?: string | null;
    /**
     * New Value after this event
     * @type {string}
     * @memberof CustomerAuditEntry
     */
    newValue?: string | null;
}
/**
 * 
 * @export
 * @interface CustomerAuditEntryCollection
 */
export interface CustomerAuditEntryCollection {
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
    pageSize?: number;
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
    totalCount?: number;
    /**
     * 
     * @type {Array<CustomerAuditEntry>}
     * @memberof CustomerAuditEntryCollection
     */
    items?: Array<CustomerAuditEntry> | null;
}
/**
 * 
 * @export
 * @interface CustomerAuthTicket
 */
export interface CustomerAuthTicket {
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
    accessToken?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerAuthTicket
     */
    accessTokenExpiration?: string;
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
     * @type {string}
     * @memberof CustomerAuthTicket
     */
    userId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerAuthTicket
     */
    jwtAccessToken?: string | null;
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
     * @type {Array<ContactType>}
     * @memberof CustomerContact
     */
    types?: Array<ContactType> | null;
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
    faxNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerContact
     */
    label?: string | null;
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
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerContact
     */
    firstName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerContact
     */
    middleNameOrInitial?: string | null;
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
    companyOrOrganization?: string | null;
    /**
     * 
     * @type {CommerceRuntimePhone}
     * @memberof CustomerContact
     */
    phoneNumbers?: CommerceRuntimePhone;
    /**
     * 
     * @type {CommerceRuntimeAddress}
     * @memberof CustomerContact
     */
    address?: CommerceRuntimeAddress;
}
/**
 * Collection of contacts returned as a whole.
 * @export
 * @interface CustomerContactCollection
 */
export interface CustomerContactCollection {
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
    pageSize?: number;
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
    totalCount?: number;
    /**
     * 
     * @type {Array<CustomerContact>}
     * @memberof CustomerContactCollection
     */
    items?: Array<CustomerContact> | null;
}
/**
 * Represetation of a store credit or gift card.
 * @export
 * @interface CustomerCredit
 */
export interface CustomerCredit {
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
     * Date the credit was activated.  Null if card is not active.
     * Credits must be activated before they can be used.
     * ReadOnly after activation
     * @type {string}
     * @memberof CustomerCredit
     */
    activationDate?: string | null;
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
     * Name of custom credit type
     * Optional.
     * @type {string}
     * @memberof CustomerCredit
     */
    customCreditType?: string | null;
    /**
     * Currency Code
     * @type {string}
     * @memberof CustomerCredit
     */
    currencyCode?: string | null;
    /**
     * Balance assigned when credit was initially created.
     * May be zero and updated later.
     * ReadOnly after intial credit creation
     * @type {number}
     * @memberof CustomerCredit
     */
    initialBalance?: number | null;
    /**
     * Do we want to track this here?
     * Current Balance
     * ReadOnly
     * @type {number}
     * @memberof CustomerCredit
     */
    currentBalance?: number | null;
    /**
     * Date after which this credit is no longer valid
     * Optional
     * Defaults to 365 days
     * @type {string}
     * @memberof CustomerCredit
     */
    expirationDate?: string | null;
    /**
     * Id of the N:Mozu.Customer
     * that this credit is assigned to.
     * Optional.
     * @type {number}
     * @memberof CustomerCredit
     */
    customerId?: number | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CustomerCredit
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {number}
     * @memberof CustomerCredit
     */
    creditTypeId?: number;
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
     * Unique identifier of the customer segment.
     * @type {number}
     * @memberof CustomerCustomerSegment
     */
    id?: number;
    /**
     * Unique identifier of the customer segment.
     * @type {string}
     * @memberof CustomerCustomerSegment
     */
    code?: string | null;
    /**
     * Name of the customer segment.
     * @type {string}
     * @memberof CustomerCustomerSegment
     */
    name?: string | null;
    /**
     * Description of the customer segment.
     * @type {string}
     * @memberof CustomerCustomerSegment
     */
    description?: string | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CustomerCustomerSegment
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * 
 * @export
 * @interface CustomerExpression
 */
export interface CustomerExpression {
    /**
     * Container or Predicate
     * @type {string}
     * @memberof CustomerExpression
     */
    type?: string | null;
    /**
     * And or Or (if Container with More than one Node)
     * @type {string}
     * @memberof CustomerExpression
     */
    logicalOperator?: string | null;
    /**
     * The field target of a predicate
     * @type {string}
     * @memberof CustomerExpression
     */
    left?: string | null;
    /**
     * The literal values of a predicate
     * @type {any}
     * @memberof CustomerExpression
     */
    right?: any | null;
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
}
/**
 * 
 * @export
 * @interface CustomerLoginInfo
 */
export interface CustomerLoginInfo {
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
    username?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerLoginInfo
     */
    password?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerLoginInfo
     */
    externalPassword?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerLoginInfo
     */
    isImport?: boolean | null;
    /**
     * Specifies the fingerprint of the user for two-factor authentication.
     * @type {string}
     * @memberof CustomerLoginInfo
     */
    fingerprint?: string | null;
    /**
     * Specifies the region of the user for two-factor authentication.
     * @type {string}
     * @memberof CustomerLoginInfo
     */
    region?: string | null;
}
/**
 * Note added to the customer account. Merchants can add internal notes, for example, to keep track of a customer's interests or complaints.
 * @export
 * @interface CustomerNote
 */
export interface CustomerNote {
    /**
     * Unique identifier of the note.
     * @type {number}
     * @memberof CustomerNote
     */
    id?: number;
    /**
     * Content of the note that the merchant added.
     * @type {string}
     * @memberof CustomerNote
     */
    content?: string | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CustomerNote
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * Collection of notes added to a customer account returned as a whole. A collection is not paged.
 * @export
 * @interface CustomerNoteCollection
 */
export interface CustomerNoteCollection {
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
    pageSize?: number;
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
    totalCount?: number;
    /**
     * 
     * @type {Array<CustomerNote>}
     * @memberof CustomerNoteCollection
     */
    items?: Array<CustomerNote> | null;
}
/**
 * Old password and new password.
 * @export
 * @interface CustomerPasswordInfo
 */
export interface CustomerPasswordInfo {
    /**
     * Old password.
     * @type {string}
     * @memberof CustomerPasswordInfo
     */
    oldPassword?: string | null;
    /**
     * New password.
     * @type {string}
     * @memberof CustomerPasswordInfo
     */
    newPassword?: string | null;
    /**
     * The External Password, typically used for imports in conjunction with a custom action
     * @type {string}
     * @memberof CustomerPasswordInfo
     */
    externalPassword?: string | null;
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
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerPurchaseOrderAccount
     */
    accountId?: number;
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
    creditLimit?: number;
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
    totalAvailableBalance?: number;
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
     * @type {Array<CustomerPurchaseOrderPaymentTerm>}
     * @memberof CustomerPurchaseOrderAccount
     */
    customerPurchaseOrderPaymentTerms?: Array<CustomerPurchaseOrderPaymentTerm> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CustomerPurchaseOrderAccount
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * 
 * @export
 * @interface CustomerPurchaseOrderAccountCollection
 */
export interface CustomerPurchaseOrderAccountCollection {
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
    pageSize?: number;
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
    totalCount?: number;
    /**
     * 
     * @type {Array<CustomerPurchaseOrderAccount>}
     * @memberof CustomerPurchaseOrderAccountCollection
     */
    items?: Array<CustomerPurchaseOrderAccount> | null;
}
/**
 * 
 * @export
 * @interface CustomerPurchaseOrderPaymentTerm
 */
export interface CustomerPurchaseOrderPaymentTerm {
    /**
     * 
     * @type {number}
     * @memberof CustomerPurchaseOrderPaymentTerm
     */
    siteId?: number;
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
     * @type {AdminUserAuditInfo}
     * @memberof CustomerPurchaseOrderPaymentTerm
     */
    auditInfo?: AdminUserAuditInfo;
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
    emailAddress?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerResetPasswordInfo
     */
    userName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerResetPasswordInfo
     */
    customerSetCode?: string | null;
}
/**
 * Represents a customer rule usage
 * @export
 * @interface CustomerRuleUsage
 */
export interface CustomerRuleUsage {
    /**
     * The type of rule (Return, PurchaseLimit, etc.)
     * @type {string}
     * @memberof CustomerRuleUsage
     */
    ruleType?: string | null;
    /**
     * The code/name of the rule
     * @type {string}
     * @memberof CustomerRuleUsage
     */
    code?: string | null;
}
/**
 * Collection of customer segements returned as a whole. A collection is not paged.
 * @export
 * @interface CustomerSegmentCollection
 */
export interface CustomerSegmentCollection {
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
    pageSize?: number;
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
    totalCount?: number;
    /**
     * 
     * @type {Array<CustomerCustomerSegment>}
     * @memberof CustomerSegmentCollection
     */
    items?: Array<CustomerCustomerSegment> | null;
}
/**
 * A customer segment.
 * @export
 * @interface CustomerSet
 */
export interface CustomerSet {
    /**
     * Unique identifier of the customer segment.
     * @type {string}
     * @memberof CustomerSet
     */
    code?: string | null;
    /**
     * Name of the customer segment.
     * @type {string}
     * @memberof CustomerSet
     */
    name?: string | null;
    /**
     * Description of the customer segment.
     * @type {string}
     * @memberof CustomerSet
     */
    description?: string | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CustomerSet
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {Array<CustomerSetSite>}
     * @memberof CustomerSet
     */
    sites?: Array<CustomerSetSite> | null;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerSet
     */
    isDefault?: boolean;
    /**
     * 
     * @type {CustomerSetAggregateInfo}
     * @memberof CustomerSet
     */
    aggregateInfo?: CustomerSetAggregateInfo;
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
     * @type {number}
     * @memberof CustomerSetCollection
     */
    startIndex?: number;
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
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerSetCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<CustomerSet>}
     * @memberof CustomerSetCollection
     */
    items?: Array<CustomerSet> | null;
}
/**
 * 
 * @export
 * @interface CustomerSetSite
 */
export interface CustomerSetSite {
    /**
     * 
     * @type {number}
     * @memberof CustomerSetSite
     */
    siteId?: number;
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
}
/**
 * 
 * @export
 * @interface CustomerUserAuthInfo
 */
export interface CustomerUserAuthInfo {
    /**
     * 
     * @type {string}
     * @memberof CustomerUserAuthInfo
     */
    username?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerUserAuthInfo
     */
    password?: string | null;
    /**
     * Account Id specifies the account for which the user requests an authentication token.
     * @type {number}
     * @memberof CustomerUserAuthInfo
     */
    accountId?: number | null;
    /**
     * Specifies the fingerprint of the user for two-factor authentication.
     * @type {string}
     * @memberof CustomerUserAuthInfo
     */
    fingerprint?: string | null;
    /**
     * Specifies the region of the user for two-factor authentication.
     * @type {string}
     * @memberof CustomerUserAuthInfo
     */
    region?: string | null;
}
/**
 * 
 * @export
 * @interface CustomerUserRoleCollection
 */
export interface CustomerUserRoleCollection {
    /**
     * 
     * @type {number}
     * @memberof CustomerUserRoleCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<UserRole>}
     * @memberof CustomerUserRoleCollection
     */
    items?: Array<UserRole> | null;
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
     * @type {string}
     * @memberof ExtendedCustomerContact
     */
    accountName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ExtendedCustomerContact
     */
    accountId?: number;
    /**
     * 
     * @type {Array<ContactType>}
     * @memberof ExtendedCustomerContact
     */
    types?: Array<ContactType> | null;
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
    faxNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExtendedCustomerContact
     */
    label?: string | null;
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
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExtendedCustomerContact
     */
    firstName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExtendedCustomerContact
     */
    middleNameOrInitial?: string | null;
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
    companyOrOrganization?: string | null;
    /**
     * 
     * @type {CommerceRuntimePhone}
     * @memberof ExtendedCustomerContact
     */
    phoneNumbers?: CommerceRuntimePhone;
    /**
     * 
     * @type {CommerceRuntimeAddress}
     * @memberof ExtendedCustomerContact
     */
    address?: CommerceRuntimeAddress;
}
/**
 * Collection of contacts returned as a whole.
 * @export
 * @interface ExtendedCustomerContactCollection
 */
export interface ExtendedCustomerContactCollection {
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
    pageSize?: number;
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
    totalCount?: number;
    /**
     * 
     * @type {Array<ExtendedCustomerContact>}
     * @memberof ExtendedCustomerContactCollection
     */
    items?: Array<ExtendedCustomerContact> | null;
}
/**
 * Inventory in-stock notification subscription.  Notification sender/processor view.  Generally for internal consumption only.
 * @export
 * @interface InStockNotificationSubscription
 */
export interface InStockNotificationSubscription {
    /**
     * Unique identifier
     * @type {number}
     * @memberof InStockNotificationSubscription
     */
    id?: number | null;
    /**
     * Email.  E-mail or CustomerId are required.
     * @type {string}
     * @memberof InStockNotificationSubscription
     */
    email?: string | null;
    /**
     * Id of the N:Mozu.Customer
     * that this subscription is assigned to.
     * Optional.  E-mail or CustomerId are required.
     * @type {number}
     * @memberof InStockNotificationSubscription
     */
    customerId?: number | null;
    /**
     * Product Code
     * @type {string}
     * @memberof InStockNotificationSubscription
     */
    productCode?: string | null;
    /**
     * Location Code
     * @type {string}
     * @memberof InStockNotificationSubscription
     */
    locationCode?: string | null;
    /**
     * User Id for multi-user b2b accounts
     * @type {string}
     * @memberof InStockNotificationSubscription
     */
    userId?: string | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof InStockNotificationSubscription
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * Collection of InStockNotificationSubscriptions
 * @export
 * @interface InStockNotificationSubscriptionCollection
 */
export interface InStockNotificationSubscriptionCollection {
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
    pageSize?: number;
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
    totalCount?: number;
    /**
     * 
     * @type {Array<InStockNotificationSubscription>}
     * @memberof InStockNotificationSubscriptionCollection
     */
    items?: Array<InStockNotificationSubscription> | null;
}
/**
 * 
 * @export
 * @interface LoginState
 */
export interface LoginState {
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
    lastPasswordChangeOn?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof LoginState
     */
    isLocked?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LoginState
     */
    lastLockedOn?: string | null;
    /**
     * 
     * @type {number}
     * @memberof LoginState
     */
    failedLoginAttemptCount?: number;
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
    firstFailedLoginAttemptOn?: string | null;
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
    createdOn?: string | null;
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
     * Date when the transaction was made on a purchase order account
     * @type {string}
     * @memberof PurchaseOrderTransaction
     */
    transactionDate?: string;
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
     * Transaction amount in transaction log for a purchase order account
     * @type {number}
     * @memberof PurchaseOrderTransaction
     */
    transactionAmount?: number;
    /**
     * Maximum credit available on a purchase order account
     * @type {number}
     * @memberof PurchaseOrderTransaction
     */
    creditLimit?: number;
    /**
     * Any additional transaction detail other than transaction description
     * @type {string}
     * @memberof PurchaseOrderTransaction
     */
    additionalTransactionDetail?: string | null;
    /**
     * Current available balance on Purchase Order account
     * @type {number}
     * @memberof PurchaseOrderTransaction
     */
    availableBalance?: number;
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
     * 
     * @type {string}
     * @memberof PurchaseOrderTransaction
     */
    author?: string | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof PurchaseOrderTransaction
     */
    auditInfo?: AdminUserAuditInfo;
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
     * @type {number}
     * @memberof PurchaseOrderTransactionCollection
     */
    startIndex?: number;
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
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof PurchaseOrderTransactionCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<PurchaseOrderTransaction>}
     * @memberof PurchaseOrderTransactionCollection
     */
    items?: Array<PurchaseOrderTransaction> | null;
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
 * @interface Transaction
 */
export interface Transaction {
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
    visitId?: string | null;
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
    interactionType?: string | null;
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
    date?: string;
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    currencyCode?: string | null;
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
     * @type {Array<number>}
     * @memberof UpgradeToB2BAccountResponse
     */
    successAccountIds?: Array<number> | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof UpgradeToB2BAccountResponse
     */
    skippedAccountIds?: Array<number> | null;
    /**
     * 
     * @type {Array<UpgradeToB2BAccountError>}
     * @memberof UpgradeToB2BAccountResponse
     */
    errorAccountIds?: Array<UpgradeToB2BAccountError> | null;
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
 * @interface Visit
 */
export interface Visit {
    /**
     * 
     * @type {string}
     * @memberof Visit
     */
    id?: string | null;
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
    type?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Visit
     */
    date?: string;
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
    userId?: string | null;
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
    webReferrer?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Visit
     */
    webSessionId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Visit
     */
    webUserAgent?: string | null;
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
    locationCode?: string | null;
}
/**
 * 
 * @export
 * @interface VisitCollection
 */
export interface VisitCollection {
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
    pageSize?: number;
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
    totalCount?: number;
    /**
     * 
     * @type {Array<Visit>}
     * @memberof VisitCollection
     */
    items?: Array<Visit> | null;
}
