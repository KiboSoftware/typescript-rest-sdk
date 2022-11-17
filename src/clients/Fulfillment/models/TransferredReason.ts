/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Fulfillment Service
 * OpenAPI Spec for Kibo Fulfillment Service
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
 * @interface TransferredReason
 */
export interface TransferredReason {
    /**
     * 
     * @type {string}
     * @memberof TransferredReason
     */
    moreInfo?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferredReason
     */
    reasonCode?: string;
}

/**
 * Check if a given object implements the TransferredReason interface.
 */
export function instanceOfTransferredReason(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TransferredReasonFromJSON(json: any): TransferredReason {
    return TransferredReasonFromJSONTyped(json, false);
}

export function TransferredReasonFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferredReason {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'moreInfo': !exists(json, 'moreInfo') ? undefined : json['moreInfo'],
        'reasonCode': !exists(json, 'reasonCode') ? undefined : json['reasonCode'],
    };
}

export function TransferredReasonToJSON(value?: TransferredReason | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'moreInfo': value.moreInfo,
        'reasonCode': value.reasonCode,
    };
}

