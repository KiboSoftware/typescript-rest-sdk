/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Location Storefront Service
 * OpenAPI Spec for Kibo Location Storefront Service
 *
 * The version of the OpenAPI document: v1_storefront
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AttributeLocalizedContent } from './AttributeLocalizedContent';
import {
    AttributeLocalizedContentFromJSON,
    AttributeLocalizedContentFromJSONTyped,
    AttributeLocalizedContentToJSON,
} from './AttributeLocalizedContent';
import type { AttributeMetadataItem } from './AttributeMetadataItem';
import {
    AttributeMetadataItemFromJSON,
    AttributeMetadataItemFromJSONTyped,
    AttributeMetadataItemToJSON,
} from './AttributeMetadataItem';
import type { AttributeValidation } from './AttributeValidation';
import {
    AttributeValidationFromJSON,
    AttributeValidationFromJSONTyped,
    AttributeValidationToJSON,
} from './AttributeValidation';
import type { AttributeVocabularyValue } from './AttributeVocabularyValue';
import {
    AttributeVocabularyValueFromJSON,
    AttributeVocabularyValueFromJSONTyped,
    AttributeVocabularyValueToJSON,
} from './AttributeVocabularyValue';
import type { AuditInfo } from './AuditInfo';
import {
    AuditInfoFromJSON,
    AuditInfoFromJSONTyped,
    AuditInfoToJSON,
} from './AuditInfo';

/**
 * 
 * @export
 * @interface Attribute
 */
export interface Attribute {
    /**
     * 
     * @type {number}
     * @memberof Attribute
     */
    id?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Attribute
     */
    adminName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Attribute
     */
    namespace?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Attribute
     */
    attributeCode: string;
    /**
     * 
     * @type {string}
     * @memberof Attribute
     */
    inputType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Attribute
     */
    valueType: string;
    /**
     * 
     * @type {string}
     * @memberof Attribute
     */
    dataType?: string | null;
    /**
     * 
     * @type {Array<AttributeMetadataItem>}
     * @memberof Attribute
     */
    attributeMetadata?: Array<AttributeMetadataItem> | null;
    /**
     * 
     * @type {string}
     * @memberof Attribute
     */
    attributeFQN?: string | null;
    /**
     * 
     * @type {AttributeLocalizedContent}
     * @memberof Attribute
     */
    content?: AttributeLocalizedContent;
    /**
     * 
     * @type {AttributeValidation}
     * @memberof Attribute
     */
    validation?: AttributeValidation;
    /**
     * 
     * @type {Array<AttributeVocabularyValue>}
     * @memberof Attribute
     */
    vocabularyValues?: Array<AttributeVocabularyValue> | null;
    /**
     * 
     * @type {AuditInfo}
     * @memberof Attribute
     */
    auditInfo?: AuditInfo;
    /**
     * 
     * @type {boolean}
     * @memberof Attribute
     */
    isActive?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof Attribute
     */
    isRequired?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof Attribute
     */
    isReadOnly?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Attribute
     */
    isMultiValued?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof Attribute
     */
    isVisible?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof Attribute
     */
    order?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Attribute
     */
    displayGroup: string;
}

/**
 * Check if a given object implements the Attribute interface.
 */
export function instanceOfAttribute(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "attributeCode" in value;
    isInstance = isInstance && "valueType" in value;
    isInstance = isInstance && "displayGroup" in value;

    return isInstance;
}

export function AttributeFromJSON(json: any): Attribute {
    return AttributeFromJSONTyped(json, false);
}

export function AttributeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Attribute {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'adminName': !exists(json, 'adminName') ? undefined : json['adminName'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
        'attributeCode': json['attributeCode'],
        'inputType': !exists(json, 'inputType') ? undefined : json['inputType'],
        'valueType': json['valueType'],
        'dataType': !exists(json, 'dataType') ? undefined : json['dataType'],
        'attributeMetadata': !exists(json, 'attributeMetadata') ? undefined : (json['attributeMetadata'] === null ? null : (json['attributeMetadata'] as Array<any>).map(AttributeMetadataItemFromJSON)),
        'attributeFQN': !exists(json, 'attributeFQN') ? undefined : json['attributeFQN'],
        'content': !exists(json, 'content') ? undefined : AttributeLocalizedContentFromJSON(json['content']),
        'validation': !exists(json, 'validation') ? undefined : AttributeValidationFromJSON(json['validation']),
        'vocabularyValues': !exists(json, 'vocabularyValues') ? undefined : (json['vocabularyValues'] === null ? null : (json['vocabularyValues'] as Array<any>).map(AttributeVocabularyValueFromJSON)),
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AuditInfoFromJSON(json['auditInfo']),
        'isActive': !exists(json, 'isActive') ? undefined : json['isActive'],
        'isRequired': !exists(json, 'isRequired') ? undefined : json['isRequired'],
        'isReadOnly': !exists(json, 'isReadOnly') ? undefined : json['isReadOnly'],
        'isMultiValued': !exists(json, 'isMultiValued') ? undefined : json['isMultiValued'],
        'isVisible': !exists(json, 'isVisible') ? undefined : json['isVisible'],
        'order': !exists(json, 'order') ? undefined : json['order'],
        'displayGroup': json['displayGroup'],
    };
}

export function AttributeToJSON(value?: Attribute | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'adminName': value.adminName,
        'namespace': value.namespace,
        'attributeCode': value.attributeCode,
        'inputType': value.inputType,
        'valueType': value.valueType,
        'dataType': value.dataType,
        'attributeMetadata': value.attributeMetadata === undefined ? undefined : (value.attributeMetadata === null ? null : (value.attributeMetadata as Array<any>).map(AttributeMetadataItemToJSON)),
        'attributeFQN': value.attributeFQN,
        'content': AttributeLocalizedContentToJSON(value.content),
        'validation': AttributeValidationToJSON(value.validation),
        'vocabularyValues': value.vocabularyValues === undefined ? undefined : (value.vocabularyValues === null ? null : (value.vocabularyValues as Array<any>).map(AttributeVocabularyValueToJSON)),
        'auditInfo': AuditInfoToJSON(value.auditInfo),
        'isActive': value.isActive,
        'isRequired': value.isRequired,
        'isReadOnly': value.isReadOnly,
        'isMultiValued': value.isMultiValued,
        'isVisible': value.isVisible,
        'order': value.order,
        'displayGroup': value.displayGroup,
    };
}

