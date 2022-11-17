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
import type { CandidateSuggestionFutureInventory } from './CandidateSuggestionFutureInventory';
import {
    CandidateSuggestionFutureInventoryFromJSON,
    CandidateSuggestionFutureInventoryFromJSONTyped,
    CandidateSuggestionFutureInventoryToJSON,
} from './CandidateSuggestionFutureInventory';

/**
 * 
 * @export
 * @interface CandidateSuggestionInventory
 */
export interface CandidateSuggestionInventory {
    /**
     * 
     * @type {number}
     * @memberof CandidateSuggestionInventory
     */
    available?: number;
    /**
     * 
     * @type {Array<CandidateSuggestionFutureInventory>}
     * @memberof CandidateSuggestionInventory
     */
    futureInventory?: Array<CandidateSuggestionFutureInventory>;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestionInventory
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestionInventory
     */
    sku?: string;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestionInventory
     */
    upc?: string;
}

/**
 * Check if a given object implements the CandidateSuggestionInventory interface.
 */
export function instanceOfCandidateSuggestionInventory(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CandidateSuggestionInventoryFromJSON(json: any): CandidateSuggestionInventory {
    return CandidateSuggestionInventoryFromJSONTyped(json, false);
}

export function CandidateSuggestionInventoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): CandidateSuggestionInventory {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'available': !exists(json, 'available') ? undefined : json['available'],
        'futureInventory': !exists(json, 'futureInventory') ? undefined : ((json['futureInventory'] as Array<any>).map(CandidateSuggestionFutureInventoryFromJSON)),
        'partNumber': !exists(json, 'partNumber') ? undefined : json['partNumber'],
        'sku': !exists(json, 'sku') ? undefined : json['sku'],
        'upc': !exists(json, 'upc') ? undefined : json['upc'],
    };
}

export function CandidateSuggestionInventoryToJSON(value?: CandidateSuggestionInventory | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'available': value.available,
        'futureInventory': value.futureInventory === undefined ? undefined : ((value.futureInventory as Array<any>).map(CandidateSuggestionFutureInventoryToJSON)),
        'partNumber': value.partNumber,
        'sku': value.sku,
        'upc': value.upc,
    };
}

