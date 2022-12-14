/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Location Admin Service
 * OpenAPI Spec for Kibo Location Admin Service
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AttributeValueLocalizedContent } from './AttributeValueLocalizedContent';
import {
    AttributeValueLocalizedContentFromJSON,
    AttributeValueLocalizedContentFromJSONTyped,
    AttributeValueLocalizedContentToJSON,
} from './AttributeValueLocalizedContent';

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
 * Check if a given object implements the CommerceRuntimeAttributeVocabularyValue interface.
 */
export function instanceOfCommerceRuntimeAttributeVocabularyValue(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function CommerceRuntimeAttributeVocabularyValueFromJSON(json: any): CommerceRuntimeAttributeVocabularyValue {
    return CommerceRuntimeAttributeVocabularyValueFromJSONTyped(json, false);
}

export function CommerceRuntimeAttributeVocabularyValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommerceRuntimeAttributeVocabularyValue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': json['value'],
        'sequence': !exists(json, 'sequence') ? undefined : json['sequence'],
        'isHidden': !exists(json, 'isHidden') ? undefined : json['isHidden'],
        'content': !exists(json, 'content') ? undefined : AttributeValueLocalizedContentFromJSON(json['content']),
    };
}

export function CommerceRuntimeAttributeVocabularyValueToJSON(value?: CommerceRuntimeAttributeVocabularyValue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
        'sequence': value.sequence,
        'isHidden': value.isHidden,
        'content': AttributeValueLocalizedContentToJSON(value.content),
    };
}

