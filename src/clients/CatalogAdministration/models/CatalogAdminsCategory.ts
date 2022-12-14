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
import type { AdminUserAuditInfo } from './AdminUserAuditInfo';
import {
    AdminUserAuditInfoFromJSON,
    AdminUserAuditInfoFromJSONTyped,
    AdminUserAuditInfoToJSON,
} from './AdminUserAuditInfo';
import type { CatalogAdminsCategoryAttribute } from './CatalogAdminsCategoryAttribute';
import {
    CatalogAdminsCategoryAttributeFromJSON,
    CatalogAdminsCategoryAttributeFromJSONTyped,
    CatalogAdminsCategoryAttributeToJSON,
} from './CatalogAdminsCategoryAttribute';
import type { CategoryLocalizedContent } from './CategoryLocalizedContent';
import {
    CategoryLocalizedContentFromJSON,
    CategoryLocalizedContentFromJSONTyped,
    CategoryLocalizedContentToJSON,
} from './CategoryLocalizedContent';
import type { DynamicExpression } from './DynamicExpression';
import {
    DynamicExpressionFromJSON,
    DynamicExpressionFromJSONTyped,
    DynamicExpressionToJSON,
} from './DynamicExpression';

/**
 * Category
 * @export
 * @interface CatalogAdminsCategory
 */
export interface CatalogAdminsCategory {
    /**
     * Internal unique identifier of the category. System-supplied and read-only.
     * @type {number}
     * @memberof CatalogAdminsCategory
     */
    id?: number | null;
    /**
     * The Type of Category Static, Dyanmic, DynamicPreComputed
     * @type {string}
     * @memberof CatalogAdminsCategory
     */
    categoryType?: string | null;
    /**
     * The CatalogId that the category belongs to.
     * @type {number}
     * @memberof CatalogAdminsCategory
     */
    catalogId?: number | null;
    /**
     * Unique identifier of the category to which this category belongs. If nil, this is a top-level category. System-supplied and read-only.
     * @type {number}
     * @memberof CatalogAdminsCategory
     */
    parentCategoryId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogAdminsCategory
     */
    parentCategoryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogAdminsCategory
     */
    parentCategoryName?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CatalogAdminsCategory
     */
    parentIsActive?: boolean | null;
    /**
     * External unique identifier of the category.
     * @type {string}
     * @memberof CatalogAdminsCategory
     */
    categoryCode?: string | null;
    /**
     * If false, the category is considered unavailable in runtime (default is true if not specified on create)
     * @type {boolean}
     * @memberof CatalogAdminsCategory
     */
    isActive?: boolean | null;
    /**
     * If true, the category appears to shoppers on the storefront.
     * @type {boolean}
     * @memberof CatalogAdminsCategory
     */
    isDisplayed?: boolean | null;
    /**
     * Order in which categories appear when they are at the same level (siblings). For example, you could change the sequence of categories so that a specific category always appears first.
     * @type {number}
     * @memberof CatalogAdminsCategory
     */
    sequence?: number | null;
    /**
     * 
     * @type {CategoryLocalizedContent}
     * @memberof CatalogAdminsCategory
     */
    content?: CategoryLocalizedContent;
    /**
     * 
     * @type {DynamicExpression}
     * @memberof CatalogAdminsCategory
     */
    dynamicExpression?: DynamicExpression;
    /**
     * Number of products contained in this category. This count includes all products contained in any subcategories of this category.
     * @type {number}
     * @memberof CatalogAdminsCategory
     */
    productCount?: number | null;
    /**
     * Number of subcategories that belong to this category. These subcategories are at the same level (siblings).
     * @type {number}
     * @memberof CatalogAdminsCategory
     */
    childCount?: number | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CatalogAdminsCategory
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * If True, search displays sliced view
     * @type {boolean}
     * @memberof CatalogAdminsCategory
     */
    shouldSlice?: boolean | null;
    /**
     * Active Start Date
     * @type {Date}
     * @memberof CatalogAdminsCategory
     */
    activeDateStart?: Date | null;
    /**
     * Active end Date
     * @type {Date}
     * @memberof CatalogAdminsCategory
     */
    activeDateEnd?: Date | null;
    /**
     * List of attributes for the category.
     * @type {Array<CatalogAdminsCategoryAttribute>}
     * @memberof CatalogAdminsCategory
     */
    attributes?: Array<CatalogAdminsCategoryAttribute> | null;
}

/**
 * Check if a given object implements the CatalogAdminsCategory interface.
 */
export function instanceOfCatalogAdminsCategory(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CatalogAdminsCategoryFromJSON(json: any): CatalogAdminsCategory {
    return CatalogAdminsCategoryFromJSONTyped(json, false);
}

export function CatalogAdminsCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogAdminsCategory {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'categoryType': !exists(json, 'categoryType') ? undefined : json['categoryType'],
        'catalogId': !exists(json, 'catalogId') ? undefined : json['catalogId'],
        'parentCategoryId': !exists(json, 'parentCategoryId') ? undefined : json['parentCategoryId'],
        'parentCategoryCode': !exists(json, 'parentCategoryCode') ? undefined : json['parentCategoryCode'],
        'parentCategoryName': !exists(json, 'parentCategoryName') ? undefined : json['parentCategoryName'],
        'parentIsActive': !exists(json, 'parentIsActive') ? undefined : json['parentIsActive'],
        'categoryCode': !exists(json, 'categoryCode') ? undefined : json['categoryCode'],
        'isActive': !exists(json, 'isActive') ? undefined : json['isActive'],
        'isDisplayed': !exists(json, 'isDisplayed') ? undefined : json['isDisplayed'],
        'sequence': !exists(json, 'sequence') ? undefined : json['sequence'],
        'content': !exists(json, 'content') ? undefined : CategoryLocalizedContentFromJSON(json['content']),
        'dynamicExpression': !exists(json, 'dynamicExpression') ? undefined : DynamicExpressionFromJSON(json['dynamicExpression']),
        'productCount': !exists(json, 'productCount') ? undefined : json['productCount'],
        'childCount': !exists(json, 'childCount') ? undefined : json['childCount'],
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AdminUserAuditInfoFromJSON(json['auditInfo']),
        'shouldSlice': !exists(json, 'shouldSlice') ? undefined : json['shouldSlice'],
        'activeDateStart': !exists(json, 'activeDateStart') ? undefined : (json['activeDateStart'] === null ? null : new Date(json['activeDateStart'])),
        'activeDateEnd': !exists(json, 'activeDateEnd') ? undefined : (json['activeDateEnd'] === null ? null : new Date(json['activeDateEnd'])),
        'attributes': !exists(json, 'attributes') ? undefined : (json['attributes'] === null ? null : (json['attributes'] as Array<any>).map(CatalogAdminsCategoryAttributeFromJSON)),
    };
}

export function CatalogAdminsCategoryToJSON(value?: CatalogAdminsCategory | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'categoryType': value.categoryType,
        'catalogId': value.catalogId,
        'parentCategoryId': value.parentCategoryId,
        'parentCategoryCode': value.parentCategoryCode,
        'parentCategoryName': value.parentCategoryName,
        'parentIsActive': value.parentIsActive,
        'categoryCode': value.categoryCode,
        'isActive': value.isActive,
        'isDisplayed': value.isDisplayed,
        'sequence': value.sequence,
        'content': CategoryLocalizedContentToJSON(value.content),
        'dynamicExpression': DynamicExpressionToJSON(value.dynamicExpression),
        'productCount': value.productCount,
        'childCount': value.childCount,
        'auditInfo': AdminUserAuditInfoToJSON(value.auditInfo),
        'shouldSlice': value.shouldSlice,
        'activeDateStart': value.activeDateStart === undefined ? undefined : (value.activeDateStart === null ? null : value.activeDateStart.toISOString()),
        'activeDateEnd': value.activeDateEnd === undefined ? undefined : (value.activeDateEnd === null ? null : value.activeDateEnd.toISOString()),
        'attributes': value.attributes === undefined ? undefined : (value.attributes === null ? null : (value.attributes as Array<any>).map(CatalogAdminsCategoryAttributeToJSON)),
    };
}

