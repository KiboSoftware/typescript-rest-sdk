/* tslint:disable */
/* eslint-disable */
/**
 * Kibo ProductRuntime Service
 * OpenAPI Spec for Kibo ProductRuntime Service
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Suggester
 */
export interface Suggester {
    /**
     * 
     * @type {string}
     * @memberof Suggester
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Suggester
     */
    highlight?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Suggester
     */
    allTermsRequired?: string | null;
}

/**
 * Check if a given object implements the Suggester interface.
 */
export function instanceOfSuggester(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SuggesterFromJSON(json: any): Suggester {
    return SuggesterFromJSONTyped(json, false);
}

export function SuggesterFromJSONTyped(json: any, ignoreDiscriminator: boolean): Suggester {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'highlight': !exists(json, 'highlight') ? undefined : json['highlight'],
        'allTermsRequired': !exists(json, 'allTermsRequired') ? undefined : json['allTermsRequired'],
    };
}

export function SuggesterToJSON(value?: Suggester | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'highlight': value.highlight,
        'allTermsRequired': value.allTermsRequired,
    };
}

