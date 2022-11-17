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
import type { AttributeInProductType } from './AttributeInProductType';
import {
    AttributeInProductTypeFromJSON,
    AttributeInProductTypeFromJSONTyped,
    AttributeInProductTypeToJSON,
} from './AttributeInProductType';
import type { AuditInfo } from './AuditInfo';
import {
    AuditInfoFromJSON,
    AuditInfoFromJSONTyped,
    AuditInfoToJSON,
} from './AuditInfo';

/**
 * 
 * @export
 * @interface ProductType
 */
export interface ProductType {
    /**
     * Unique identifier of the ProductType. System-supplied and read-only.
     * @type {number}
     * @memberof ProductType
     */
    id?: number | null;
    /**
     * Name of the productType
     * @type {string}
     * @memberof ProductType
     */
    name?: string | null;
    /**
     * Indentifier of the Master Catalog that this ProductType is a member of. System-supplied and read-only.
     * @type {number}
     * @memberof ProductType
     */
    masterCatalogId?: number | null;
    /**
     * System supplied and read only. There is only one BaseProductType per MasterCatalog.
     * @type {boolean}
     * @memberof ProductType
     */
    isBaseProductType?: boolean;
    /**
     * Indicates the number of products currently using this Product Type. System-supplied and read-only.
     * @type {number}
     * @memberof ProductType
     */
    productCount?: number | null;
    /**
     * List of ProductUsages supported by the ProductType.
     * @type {Array<string>}
     * @memberof ProductType
     */
    productUsages?: Array<string> | null;
    /**
     * The TYpe of Goods of this product
     * @type {string}
     * @memberof ProductType
     */
    goodsType?: string | null;
    /**
     * Collection of the Attributes that are Options in this productType
     * @type {Array<AttributeInProductType>}
     * @memberof ProductType
     */
    options?: Array<AttributeInProductType> | null;
    /**
     * Collection of the Attributes that are Extras in this productType
     * @type {Array<AttributeInProductType>}
     * @memberof ProductType
     */
    extras?: Array<AttributeInProductType> | null;
    /**
     * Collection of the Attributes that are Properties in this productType
     * @type {Array<AttributeInProductType>}
     * @memberof ProductType
     */
    properties?: Array<AttributeInProductType> | null;
    /**
     * Collection of the Attributes that are VariantProperties in this productType
     * @type {Array<AttributeInProductType>}
     * @memberof ProductType
     */
    variantProperties?: Array<AttributeInProductType> | null;
    /**
     * 
     * @type {AuditInfo}
     * @memberof ProductType
     */
    auditInfo?: AuditInfo;
}

/**
 * Check if a given object implements the ProductType interface.
 */
export function instanceOfProductType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductTypeFromJSON(json: any): ProductType {
    return ProductTypeFromJSONTyped(json, false);
}

export function ProductTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'masterCatalogId': !exists(json, 'masterCatalogId') ? undefined : json['masterCatalogId'],
        'isBaseProductType': !exists(json, 'isBaseProductType') ? undefined : json['isBaseProductType'],
        'productCount': !exists(json, 'productCount') ? undefined : json['productCount'],
        'productUsages': !exists(json, 'productUsages') ? undefined : json['productUsages'],
        'goodsType': !exists(json, 'goodsType') ? undefined : json['goodsType'],
        'options': !exists(json, 'options') ? undefined : (json['options'] === null ? null : (json['options'] as Array<any>).map(AttributeInProductTypeFromJSON)),
        'extras': !exists(json, 'extras') ? undefined : (json['extras'] === null ? null : (json['extras'] as Array<any>).map(AttributeInProductTypeFromJSON)),
        'properties': !exists(json, 'properties') ? undefined : (json['properties'] === null ? null : (json['properties'] as Array<any>).map(AttributeInProductTypeFromJSON)),
        'variantProperties': !exists(json, 'variantProperties') ? undefined : (json['variantProperties'] === null ? null : (json['variantProperties'] as Array<any>).map(AttributeInProductTypeFromJSON)),
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AuditInfoFromJSON(json['auditInfo']),
    };
}

export function ProductTypeToJSON(value?: ProductType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'masterCatalogId': value.masterCatalogId,
        'isBaseProductType': value.isBaseProductType,
        'productCount': value.productCount,
        'productUsages': value.productUsages,
        'goodsType': value.goodsType,
        'options': value.options === undefined ? undefined : (value.options === null ? null : (value.options as Array<any>).map(AttributeInProductTypeToJSON)),
        'extras': value.extras === undefined ? undefined : (value.extras === null ? null : (value.extras as Array<any>).map(AttributeInProductTypeToJSON)),
        'properties': value.properties === undefined ? undefined : (value.properties === null ? null : (value.properties as Array<any>).map(AttributeInProductTypeToJSON)),
        'variantProperties': value.variantProperties === undefined ? undefined : (value.variantProperties === null ? null : (value.variantProperties as Array<any>).map(AttributeInProductTypeToJSON)),
        'auditInfo': AuditInfoToJSON(value.auditInfo),
    };
}
