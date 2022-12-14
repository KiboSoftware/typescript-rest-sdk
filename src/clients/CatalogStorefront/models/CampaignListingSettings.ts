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
 * @interface CampaignListingSettings
 */
export interface CampaignListingSettings {
    /**
     * 
     * @type {FieldValueBoost}
     * @memberof CampaignListingSettings
     */
    fieldValueBoost?: FieldValueBoost;
}

/**
 * Check if a given object implements the CampaignListingSettings interface.
 */
export function instanceOfCampaignListingSettings(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CampaignListingSettingsFromJSON(json: any): CampaignListingSettings {
    return CampaignListingSettingsFromJSONTyped(json, false);
}

export function CampaignListingSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CampaignListingSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fieldValueBoost': !exists(json, 'fieldValueBoost') ? undefined : FieldValueBoostFromJSON(json['fieldValueBoost']),
    };
}

export function CampaignListingSettingsToJSON(value?: CampaignListingSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fieldValueBoost': FieldValueBoostToJSON(value.fieldValueBoost),
    };
}

