/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Customer Service
 * OpenAPI Spec for Kibo Customer Service
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AccountSalesRep } from './AccountSalesRep';
import {
    AccountSalesRepFromJSON,
    AccountSalesRepFromJSONTyped,
    AccountSalesRepToJSON,
} from './AccountSalesRep';
import type { AuditInfo } from './AuditInfo';
import {
    AuditInfoFromJSON,
    AuditInfoFromJSONTyped,
    AuditInfoToJSON,
} from './AuditInfo';
import type { B2BUser } from './B2BUser';
import {
    B2BUserFromJSON,
    B2BUserFromJSONTyped,
    B2BUserToJSON,
} from './B2BUser';
import type { CommerceSummary } from './CommerceSummary';
import {
    CommerceSummaryFromJSON,
    CommerceSummaryFromJSONTyped,
    CommerceSummaryToJSON,
} from './CommerceSummary';
import type { CustomerAttribute } from './CustomerAttribute';
import {
    CustomerAttributeFromJSON,
    CustomerAttributeFromJSONTyped,
    CustomerAttributeToJSON,
} from './CustomerAttribute';
import type { CustomerContact } from './CustomerContact';
import {
    CustomerContactFromJSON,
    CustomerContactFromJSONTyped,
    CustomerContactToJSON,
} from './CustomerContact';
import type { CustomerNote } from './CustomerNote';
import {
    CustomerNoteFromJSON,
    CustomerNoteFromJSONTyped,
    CustomerNoteToJSON,
} from './CustomerNote';
import type { CustomerSegment } from './CustomerSegment';
import {
    CustomerSegmentFromJSON,
    CustomerSegmentFromJSONTyped,
    CustomerSegmentToJSON,
} from './CustomerSegment';

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
     * @type {Array<CustomerSegment>}
     * @memberof B2BAccount
     */
    segments?: Array<CustomerSegment> | null;
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
     * @type {AuditInfo}
     * @memberof B2BAccount
     */
    auditInfo?: AuditInfo;
    /**
     * Date when the customer account is created.
     * @type {Date}
     * @memberof B2BAccount
     */
    customerSinceDate?: Date | null;
    /**
     * Type of account.
     * @type {string}
     * @memberof B2BAccount
     */
    accountType?: string | null;
}

/**
 * Check if a given object implements the B2BAccount interface.
 */
export function instanceOfB2BAccount(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function B2BAccountFromJSON(json: any): B2BAccount {
    return B2BAccountFromJSONTyped(json, false);
}

export function B2BAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): B2BAccount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'users': !exists(json, 'users') ? undefined : (json['users'] === null ? null : (json['users'] as Array<any>).map(B2BUserFromJSON)),
        'isActive': !exists(json, 'isActive') ? undefined : json['isActive'],
        'priceList': !exists(json, 'priceList') ? undefined : json['priceList'],
        'salesReps': !exists(json, 'salesReps') ? undefined : (json['salesReps'] === null ? null : (json['salesReps'] as Array<any>).map(AccountSalesRepFromJSON)),
        'rootAccountId': !exists(json, 'rootAccountId') ? undefined : json['rootAccountId'],
        'parentAccountId': !exists(json, 'parentAccountId') ? undefined : json['parentAccountId'],
        'approvalStatus': !exists(json, 'approvalStatus') ? undefined : json['approvalStatus'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'customerSet': !exists(json, 'customerSet') ? undefined : json['customerSet'],
        'commerceSummary': !exists(json, 'commerceSummary') ? undefined : CommerceSummaryFromJSON(json['commerceSummary']),
        'contacts': !exists(json, 'contacts') ? undefined : (json['contacts'] === null ? null : (json['contacts'] as Array<any>).map(CustomerContactFromJSON)),
        'companyOrOrganization': !exists(json, 'companyOrOrganization') ? undefined : json['companyOrOrganization'],
        'notes': !exists(json, 'notes') ? undefined : (json['notes'] === null ? null : (json['notes'] as Array<any>).map(CustomerNoteFromJSON)),
        'attributes': !exists(json, 'attributes') ? undefined : (json['attributes'] === null ? null : (json['attributes'] as Array<any>).map(CustomerAttributeFromJSON)),
        'segments': !exists(json, 'segments') ? undefined : (json['segments'] === null ? null : (json['segments'] as Array<any>).map(CustomerSegmentFromJSON)),
        'taxExempt': !exists(json, 'taxExempt') ? undefined : json['taxExempt'],
        'taxId': !exists(json, 'taxId') ? undefined : json['taxId'],
        'externalId': !exists(json, 'externalId') ? undefined : json['externalId'],
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AuditInfoFromJSON(json['auditInfo']),
        'customerSinceDate': !exists(json, 'customerSinceDate') ? undefined : (json['customerSinceDate'] === null ? null : new Date(json['customerSinceDate'])),
        'accountType': !exists(json, 'accountType') ? undefined : json['accountType'],
    };
}

export function B2BAccountToJSON(value?: B2BAccount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'users': value.users === undefined ? undefined : (value.users === null ? null : (value.users as Array<any>).map(B2BUserToJSON)),
        'isActive': value.isActive,
        'priceList': value.priceList,
        'salesReps': value.salesReps === undefined ? undefined : (value.salesReps === null ? null : (value.salesReps as Array<any>).map(AccountSalesRepToJSON)),
        'rootAccountId': value.rootAccountId,
        'parentAccountId': value.parentAccountId,
        'approvalStatus': value.approvalStatus,
        'id': value.id,
        'customerSet': value.customerSet,
        'commerceSummary': CommerceSummaryToJSON(value.commerceSummary),
        'contacts': value.contacts === undefined ? undefined : (value.contacts === null ? null : (value.contacts as Array<any>).map(CustomerContactToJSON)),
        'companyOrOrganization': value.companyOrOrganization,
        'notes': value.notes === undefined ? undefined : (value.notes === null ? null : (value.notes as Array<any>).map(CustomerNoteToJSON)),
        'attributes': value.attributes === undefined ? undefined : (value.attributes === null ? null : (value.attributes as Array<any>).map(CustomerAttributeToJSON)),
        'segments': value.segments === undefined ? undefined : (value.segments === null ? null : (value.segments as Array<any>).map(CustomerSegmentToJSON)),
        'taxExempt': value.taxExempt,
        'taxId': value.taxId,
        'externalId': value.externalId,
        'auditInfo': AuditInfoToJSON(value.auditInfo),
        'customerSinceDate': value.customerSinceDate === undefined ? undefined : (value.customerSinceDate === null ? null : value.customerSinceDate.toISOString()),
        'accountType': value.accountType,
    };
}
