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
/**
 * Job ID Response
 * @export
 * @interface ExportSettingsResponse
 */
export interface ExportSettingsResponse {
    /**
     * Created Export Settings Name
     * @type {string}
     * @memberof ExportSettingsResponse
     */
    exportSettingsName?: string;
    /**
     * Created Export Settings FTP Name
     * @type {string}
     * @memberof ExportSettingsResponse
     */
    exportSettingsFTPName?: string;
    /**
     * Created Export Settings S3 Name
     * @type {string}
     * @memberof ExportSettingsResponse
     */
    exportSettingsS3Name?: string;
}

/**
 * Check if a given object implements the ExportSettingsResponse interface.
 */
export function instanceOfExportSettingsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExportSettingsResponseFromJSON(json: any): ExportSettingsResponse {
    return ExportSettingsResponseFromJSONTyped(json, false);
}

export function ExportSettingsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportSettingsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'exportSettingsName': !exists(json, 'exportSettingsName') ? undefined : json['exportSettingsName'],
        'exportSettingsFTPName': !exists(json, 'exportSettingsFTPName') ? undefined : json['exportSettingsFTPName'],
        'exportSettingsS3Name': !exists(json, 'exportSettingsS3Name') ? undefined : json['exportSettingsS3Name'],
    };
}

export function ExportSettingsResponseToJSON(value?: ExportSettingsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'exportSettingsName': value.exportSettingsName,
        'exportSettingsFTPName': value.exportSettingsFTPName,
        'exportSettingsS3Name': value.exportSettingsS3Name,
    };
}
