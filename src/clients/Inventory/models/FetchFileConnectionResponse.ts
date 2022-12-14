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
 * FetchFileConnectionResponse
 * @export
 * @interface FetchFileConnectionResponse
 */
export interface FetchFileConnectionResponse {
    /**
     * List of files found on the specified sftp directory
     * @type {Array<string>}
     * @memberof FetchFileConnectionResponse
     */
    ftpFiles?: Array<string>;
    /**
     * List of files found on the specified sftp archive directory
     * @type {Array<string>}
     * @memberof FetchFileConnectionResponse
     */
    ftpArchiveFiles?: Array<string>;
    /**
     * List of files found on the specified s3 bucket/path
     * @type {Array<string>}
     * @memberof FetchFileConnectionResponse
     */
    s3Files?: Array<string>;
    /**
     * List of files found on the specified s3 archive bucket/path
     * @type {Array<string>}
     * @memberof FetchFileConnectionResponse
     */
    s3ArchiveFiles?: Array<string>;
}

/**
 * Check if a given object implements the FetchFileConnectionResponse interface.
 */
export function instanceOfFetchFileConnectionResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FetchFileConnectionResponseFromJSON(json: any): FetchFileConnectionResponse {
    return FetchFileConnectionResponseFromJSONTyped(json, false);
}

export function FetchFileConnectionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FetchFileConnectionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ftpFiles': !exists(json, 'ftpFiles') ? undefined : json['ftpFiles'],
        'ftpArchiveFiles': !exists(json, 'ftpArchiveFiles') ? undefined : json['ftpArchiveFiles'],
        's3Files': !exists(json, 's3Files') ? undefined : json['s3Files'],
        's3ArchiveFiles': !exists(json, 's3ArchiveFiles') ? undefined : json['s3ArchiveFiles'],
    };
}

export function FetchFileConnectionResponseToJSON(value?: FetchFileConnectionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ftpFiles': value.ftpFiles,
        'ftpArchiveFiles': value.ftpArchiveFiles,
        's3Files': value.s3Files,
        's3ArchiveFiles': value.s3ArchiveFiles,
    };
}

