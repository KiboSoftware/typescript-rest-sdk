/* tslint:disable */
/* eslint-disable */
/**
 * Inventory
 * Swagger JSON for inventory apis
 *
 * The version of the OpenAPI document: 5.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ExportSettings } from './ExportSettings';
import {
    ExportSettingsFromJSON,
    ExportSettingsFromJSONTyped,
    ExportSettingsToJSON,
} from './ExportSettings';

/**
 * Request needed for creating Export Settings
 * @export
 * @interface CreateExportSettingsRequest
 */
export interface CreateExportSettingsRequest {
    /**
     * 
     * @type {ExportSettings}
     * @memberof CreateExportSettingsRequest
     */
    exportSettings: ExportSettings;
}

/**
 * Check if a given object implements the CreateExportSettingsRequest interface.
 */
export function instanceOfCreateExportSettingsRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "exportSettings" in value;

    return isInstance;
}

export function CreateExportSettingsRequestFromJSON(json: any): CreateExportSettingsRequest {
    return CreateExportSettingsRequestFromJSONTyped(json, false);
}

export function CreateExportSettingsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateExportSettingsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'exportSettings': json['exportSettings'],
    };
}

export function CreateExportSettingsRequestToJSON(value?: CreateExportSettingsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'exportSettings': value.exportSettings,
    };
}

