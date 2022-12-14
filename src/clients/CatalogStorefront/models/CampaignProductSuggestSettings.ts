/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Runtime Services
 * OpenAPI Spec for Kibo Catalog Runtime Services
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FieldValueBoost } from './FieldValueBoost';
import {
    FieldValueBoostFromJSON,
    FieldValueBoostFromJSONTyped,
    FieldValueBoostToJSON,
} from './FieldValueBoost';

/**
 * 
 * @export
 * @interface CampaignProductSuggestSettings
 */
export interface CampaignProductSuggestSettings {
    /**
     * 
     * @type {Array<string>}
     * @memberof CampaignProductSuggestSettings
     */
    searchTermAssociations?: Array<string> | null;
    /**
     * 
     * @type {FieldValueBoost}
     * @memberof CampaignProductSuggestSettings
     */
    fieldValueBoost?: FieldValueBoost;
}

/**
 * Check if a given object implements the CampaignProductSuggestSettings interface.
 */
export function instanceOfCampaignProductSuggestSettings(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CampaignProductSuggestSettingsFromJSON(json: any): CampaignProductSuggestSettings {
    return CampaignProductSuggestSettingsFromJSONTyped(json, false);
}

export function CampaignProductSuggestSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CampaignProductSuggestSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'searchTermAssociations': !exists(json, 'searchTermAssociations') ? undefined : json['searchTermAssociations'],
        'fieldValueBoost': !exists(json, 'fieldValueBoost') ? undefined : FieldValueBoostFromJSON(json['fieldValueBoost']),
    };
}

export function CampaignProductSuggestSettingsToJSON(value?: CampaignProductSuggestSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'searchTermAssociations': value.searchTermAssociations,
        'fieldValueBoost': FieldValueBoostToJSON(value.fieldValueBoost),
    };
}

