/* tslint:disable */
/* eslint-disable */
/**
 * Api Documentation
 * Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CandidateSuggestion } from './CandidateSuggestion';
import {
    CandidateSuggestionFromJSON,
    CandidateSuggestionFromJSONTyped,
    CandidateSuggestionToJSON,
} from './CandidateSuggestion';

/**
 * 
 * @export
 * @interface CandidateSuggestionsResponse
 */
export interface CandidateSuggestionsResponse {
    /**
     * 
     * @type {Array<CandidateSuggestion>}
     * @memberof CandidateSuggestionsResponse
     */
    candidateSuggestions?: Array<CandidateSuggestion>;
}

/**
 * Check if a given object implements the CandidateSuggestionsResponse interface.
 */
export function instanceOfCandidateSuggestionsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CandidateSuggestionsResponseFromJSON(json: any): CandidateSuggestionsResponse {
    return CandidateSuggestionsResponseFromJSONTyped(json, false);
}

export function CandidateSuggestionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CandidateSuggestionsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'candidateSuggestions': !exists(json, 'candidateSuggestions') ? undefined : ((json['candidateSuggestions'] as Array<any>).map(CandidateSuggestionFromJSON)),
    };
}

export function CandidateSuggestionsResponseToJSON(value?: CandidateSuggestionsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'candidateSuggestions': value.candidateSuggestions === undefined ? undefined : ((value.candidateSuggestions as Array<any>).map(CandidateSuggestionToJSON)),
    };
}
