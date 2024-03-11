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
import type { AttributeVocabularyValueLocalizedContent } from './AttributeVocabularyValueLocalizedContent';
import {
    AttributeVocabularyValueLocalizedContentFromJSON,
    AttributeVocabularyValueLocalizedContentFromJSONTyped,
    AttributeVocabularyValueLocalizedContentToJSON,
} from './AttributeVocabularyValueLocalizedContent';

/**
 * Value of an attribute
 * @export
 * @interface AttributeVocabularyValue
 */
export interface AttributeVocabularyValue {
    /**
     * Read only System generated monotonically increasing unique sequence.
     * @type {number}
     * @memberof AttributeVocabularyValue
     */
    valueSequence?: number | null;
    /**
     * The actual value of the attribute vocabulary. This value must be unique within the vocabulary for a single attribute and match the datatype of the attribute. 
     * String data type requires a canonical value here or one will be system generated if null. The actual string content displayed to users should be stored as Content. 
     * String values require content to be present.
     * Once this value is set it cannot be changed.
     * @type {any}
     * @memberof AttributeVocabularyValue
     */
    value?: any | null;
    /**
     * The actual values of the related generic attribute. This value must match the datatype of the attribute and already exist 
     * within the Vocabulary values of the related ValueMappingAttribute. Only supporting string at this time.
     * @type {Array<any>}
     * @memberof AttributeVocabularyValue
     */
    mappedGenericValues?: Array<any> | null;
    /**
     * The ProductName when the Attribute DataType is ProductCode.
     * @type {string}
     * @memberof AttributeVocabularyValue
     */
    productName?: string | null;
    /**
     * 
     * @type {AttributeVocabularyValueLocalizedContent}
     * @memberof AttributeVocabularyValue
     */
    content?: AttributeVocabularyValueLocalizedContent;
    /**
     * The Content of an attribute value. This content is in multiple locals supported by the master catalog and is only valid for String DataType.
     * @type {Array<AttributeVocabularyValueLocalizedContent>}
     * @memberof AttributeVocabularyValue
     */
    localizedContent?: Array<AttributeVocabularyValueLocalizedContent> | null;
    /**
     * The order in which the attribute value displays. If you omit a value for this property, Mozu infers the display order from the attribute value's position the list.
     * @type {number}
     * @memberof AttributeVocabularyValue
     */
    displayOrder?: number | null;
}

/**
 * Check if a given object implements the AttributeVocabularyValue interface.
 */
export function instanceOfAttributeVocabularyValue(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AttributeVocabularyValueFromJSON(json: any): AttributeVocabularyValue {
    return AttributeVocabularyValueFromJSONTyped(json, false);
}

export function AttributeVocabularyValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttributeVocabularyValue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'valueSequence': !exists(json, 'valueSequence') ? undefined : json['valueSequence'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'mappedGenericValues': !exists(json, 'mappedGenericValues') ? undefined : json['mappedGenericValues'],
        'productName': !exists(json, 'productName') ? undefined : json['productName'],
        'content': !exists(json, 'content') ? undefined : AttributeVocabularyValueLocalizedContentFromJSON(json['content']),
        'localizedContent': !exists(json, 'localizedContent') ? undefined : (json['localizedContent'] === null ? null : (json['localizedContent'] as Array<any>).map(AttributeVocabularyValueLocalizedContentFromJSON)),
        'displayOrder': !exists(json, 'displayOrder') ? undefined : json['displayOrder'],
    };
}

export function AttributeVocabularyValueToJSON(value?: AttributeVocabularyValue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'valueSequence': value.valueSequence,
        'value': value.value,
        'mappedGenericValues': value.mappedGenericValues,
        'productName': value.productName,
        'content': AttributeVocabularyValueLocalizedContentToJSON(value.content),
        'localizedContent': value.localizedContent === undefined ? undefined : (value.localizedContent === null ? null : (value.localizedContent as Array<any>).map(AttributeVocabularyValueLocalizedContentToJSON)),
        'displayOrder': value.displayOrder,
    };
}
