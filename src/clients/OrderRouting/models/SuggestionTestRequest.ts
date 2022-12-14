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
import type { InventoryResponse } from './InventoryResponse';
import {
    InventoryResponseFromJSON,
    InventoryResponseFromJSONTyped,
    InventoryResponseToJSON,
} from './InventoryResponse';
import type { SuggestionRequest } from './SuggestionRequest';
import {
    SuggestionRequestFromJSON,
    SuggestionRequestFromJSONTyped,
    SuggestionRequestToJSON,
} from './SuggestionRequest';

/**
 * 
 * @export
 * @interface SuggestionTestRequest
 */
export interface SuggestionTestRequest {
    /**
     * 
     * @type {SuggestionRequest}
     * @memberof SuggestionTestRequest
     */
    suggestionRequest?: SuggestionRequest;
    /**
     * 
     * @type {Array<InventoryResponse>}
     * @memberof SuggestionTestRequest
     */
    testInventoryResponses?: Array<InventoryResponse>;
}

/**
 * Check if a given object implements the SuggestionTestRequest interface.
 */
export function instanceOfSuggestionTestRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SuggestionTestRequestFromJSON(json: any): SuggestionTestRequest {
    return SuggestionTestRequestFromJSONTyped(json, false);
}

export function SuggestionTestRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuggestionTestRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'suggestionRequest': !exists(json, 'suggestionRequest') ? undefined : SuggestionRequestFromJSON(json['suggestionRequest']),
        'testInventoryResponses': !exists(json, 'testInventoryResponses') ? undefined : ((json['testInventoryResponses'] as Array<any>).map(InventoryResponseFromJSON)),
    };
}

export function SuggestionTestRequestToJSON(value?: SuggestionTestRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'suggestionRequest': SuggestionRequestToJSON(value.suggestionRequest),
        'testInventoryResponses': value.testInventoryResponses === undefined ? undefined : ((value.testInventoryResponses as Array<any>).map(InventoryResponseToJSON)),
    };
}

