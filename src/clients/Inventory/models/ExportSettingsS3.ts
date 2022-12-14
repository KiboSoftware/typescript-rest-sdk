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
 * Export Settings S3
 * @export
 * @interface ExportSettingsS3
 */
export interface ExportSettingsS3 {
    /**
     * Export Settings ID
     * @type {number}
     * @memberof ExportSettingsS3
     */
    exportSettingsID?: number;
    /**
     * Export Settings S3 ID
     * @type {number}
     * @memberof ExportSettingsS3
     */
    exportSettingsS3ID?: number;
    /**
     * Export Settings S3 Name
     * @type {string}
     * @memberof ExportSettingsS3
     */
    name: string;
    /**
     * Flag for Active State
     * @type {boolean}
     * @memberof ExportSettingsS3
     */
    active?: boolean;
    /**
     * S3 Region
     * @type {string}
     * @memberof ExportSettingsS3
     */
    region: string;
    /**
     * S3 Bucket (directory)
     * @type {string}
     * @memberof ExportSettingsS3
     */
    bucket: string;
}

/**
 * Check if a given object implements the ExportSettingsS3 interface.
 */
export function instanceOfExportSettingsS3(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "region" in value;
    isInstance = isInstance && "bucket" in value;

    return isInstance;
}

export function ExportSettingsS3FromJSON(json: any): ExportSettingsS3 {
    return ExportSettingsS3FromJSONTyped(json, false);
}

export function ExportSettingsS3FromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportSettingsS3 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'exportSettingsID': !exists(json, 'exportSettingsID') ? undefined : json['exportSettingsID'],
        'exportSettingsS3ID': !exists(json, 'exportSettingsS3ID') ? undefined : json['exportSettingsS3ID'],
        'name': json['name'],
        'active': !exists(json, 'active') ? undefined : json['active'],
        'region': json['region'],
        'bucket': json['bucket'],
    };
}

export function ExportSettingsS3ToJSON(value?: ExportSettingsS3 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'exportSettingsID': value.exportSettingsID,
        'exportSettingsS3ID': value.exportSettingsS3ID,
        'name': value.name,
        'active': value.active,
        'region': value.region,
        'bucket': value.bucket,
    };
}

