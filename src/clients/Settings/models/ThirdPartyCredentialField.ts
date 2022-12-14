/* tslint:disable */
/* eslint-disable */
/**
 * Kibo SiteSettings Service
 * OpenAPI Spec for Kibo SiteSettings Service
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { VocabularyValue } from './VocabularyValue';
import {
    VocabularyValueFromJSON,
    VocabularyValueFromJSONTyped,
    VocabularyValueToJSON,
} from './VocabularyValue';

/**
 * Describes the name and value of a third party credential field.
 * @export
 * @interface ThirdPartyCredentialField
 */
export interface ThirdPartyCredentialField {
    /**
     * The displayable name of this credential field
     * @type {string}
     * @memberof ThirdPartyCredentialField
     */
    displayName?: string | null;
    /**
     * The name of this credential that should be used for web requests.
     * @type {string}
     * @memberof ThirdPartyCredentialField
     */
    apiName?: string | null;
    /**
     * The value for this credential that should be used for web requests.
     * @type {string}
     * @memberof ThirdPartyCredentialField
     */
    value?: string | null;
    /**
     * 
     * @type {Array<VocabularyValue>}
     * @memberof ThirdPartyCredentialField
     */
    vocabularyValues?: Array<VocabularyValue> | null;
    /**
     * The input field type for the value.
     * @type {string}
     * @memberof ThirdPartyCredentialField
     */
    inputType?: string | null;
    /**
     * the value holds sensitive information.
     * @type {boolean}
     * @memberof ThirdPartyCredentialField
     */
    isSensitive?: boolean | null;
}

/**
 * Check if a given object implements the ThirdPartyCredentialField interface.
 */
export function instanceOfThirdPartyCredentialField(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ThirdPartyCredentialFieldFromJSON(json: any): ThirdPartyCredentialField {
    return ThirdPartyCredentialFieldFromJSONTyped(json, false);
}

export function ThirdPartyCredentialFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThirdPartyCredentialField {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'displayName': !exists(json, 'displayName') ? undefined : json['displayName'],
        'apiName': !exists(json, 'apiName') ? undefined : json['apiName'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'vocabularyValues': !exists(json, 'vocabularyValues') ? undefined : (json['vocabularyValues'] === null ? null : (json['vocabularyValues'] as Array<any>).map(VocabularyValueFromJSON)),
        'inputType': !exists(json, 'inputType') ? undefined : json['inputType'],
        'isSensitive': !exists(json, 'isSensitive') ? undefined : json['isSensitive'],
    };
}

export function ThirdPartyCredentialFieldToJSON(value?: ThirdPartyCredentialField | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'displayName': value.displayName,
        'apiName': value.apiName,
        'value': value.value,
        'vocabularyValues': value.vocabularyValues === undefined ? undefined : (value.vocabularyValues === null ? null : (value.vocabularyValues as Array<any>).map(VocabularyValueToJSON)),
        'inputType': value.inputType,
        'isSensitive': value.isSensitive,
    };
}

