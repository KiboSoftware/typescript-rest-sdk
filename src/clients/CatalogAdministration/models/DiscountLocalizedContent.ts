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
import type { AuditInfo } from './AuditInfo';
import {
    AuditInfoFromJSON,
    AuditInfoFromJSONTyped,
    AuditInfoToJSON,
} from './AuditInfo';

/**
 * Container for the language-specific name of the discount. You will have a container for each supported language
 * (LocaleCode).
 * This enables you to display the discount name in multiple languages yet manage it as a single discount internally.
 * @export
 * @interface DiscountLocalizedContent
 */
export interface DiscountLocalizedContent {
    /**
     * Lanugage used for the discount in the current catalog. Defaults setting for the active catalog.
     * @type {string}
     * @memberof DiscountLocalizedContent
     */
    localeCode?: string | null;
    /**
     * Name of the discount.
     * @type {string}
     * @memberof DiscountLocalizedContent
     */
    name: string;
    /**
     * Promotional text or HTML that can be utilized as friendly content like "Buy this product now and get X!"
     * @type {string}
     * @memberof DiscountLocalizedContent
     */
    friendlyDescription?: string | null;
    /**
     * 
     * @type {AuditInfo}
     * @memberof DiscountLocalizedContent
     */
    auditInfo?: AuditInfo;
}

/**
 * Check if a given object implements the DiscountLocalizedContent interface.
 */
export function instanceOfDiscountLocalizedContent(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function DiscountLocalizedContentFromJSON(json: any): DiscountLocalizedContent {
    return DiscountLocalizedContentFromJSONTyped(json, false);
}

export function DiscountLocalizedContentFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiscountLocalizedContent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'localeCode': !exists(json, 'localeCode') ? undefined : json['localeCode'],
        'name': json['name'],
        'friendlyDescription': !exists(json, 'friendlyDescription') ? undefined : json['friendlyDescription'],
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AuditInfoFromJSON(json['auditInfo']),
    };
}

export function DiscountLocalizedContentToJSON(value?: DiscountLocalizedContent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'localeCode': value.localeCode,
        'name': value.name,
        'friendlyDescription': value.friendlyDescription,
        'auditInfo': AuditInfoToJSON(value.auditInfo),
    };
}

