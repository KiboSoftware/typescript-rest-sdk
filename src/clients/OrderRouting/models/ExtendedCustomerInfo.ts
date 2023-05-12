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
import type { Attribute } from './Attribute';
import {
    AttributeFromJSON,
    AttributeFromJSONTyped,
    AttributeToJSON,
} from './Attribute';

/**
 * 
 * @export
 * @interface ExtendedCustomerInfo
 */
export interface ExtendedCustomerInfo {
    /**
     * 
     * @type {Array<Attribute>}
     * @memberof ExtendedCustomerInfo
     */
    attributes?: Array<Attribute>;
    /**
     * 
     * @type {string}
     * @memberof ExtendedCustomerInfo
     */
    customerId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ExtendedCustomerInfo
     */
    segments?: Array<string>;
}

/**
 * Check if a given object implements the ExtendedCustomerInfo interface.
 */
export function instanceOfExtendedCustomerInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExtendedCustomerInfoFromJSON(json: any): ExtendedCustomerInfo {
    return ExtendedCustomerInfoFromJSONTyped(json, false);
}

export function ExtendedCustomerInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExtendedCustomerInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attributes': !exists(json, 'attributes') ? undefined : ((json['attributes'] as Array<any>).map(AttributeFromJSON)),
        'customerId': !exists(json, 'customerId') ? undefined : json['customerId'],
        'segments': !exists(json, 'segments') ? undefined : json['segments'],
    };
}

export function ExtendedCustomerInfoToJSON(value?: ExtendedCustomerInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attributes': value.attributes === undefined ? undefined : ((value.attributes as Array<any>).map(AttributeToJSON)),
        'customerId': value.customerId,
        'segments': value.segments,
    };
}
