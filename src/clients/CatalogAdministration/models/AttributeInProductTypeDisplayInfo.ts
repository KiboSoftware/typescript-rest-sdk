/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Admin Services
 * OpenAPI Spec for Kibo Catalog Admin Services
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
 * @interface AttributeInProductTypeDisplayInfo
 */
export interface AttributeInProductTypeDisplayInfo {
    /**
     * Defines the intended display of this Attribute in the storeFront (ex. DropDown, ImagePicker, RadioButtons....)
     * @type {string}
     * @memberof AttributeInProductTypeDisplayInfo
     */
    displayIntention?: string | null;
}

/**
 * Check if a given object implements the AttributeInProductTypeDisplayInfo interface.
 */
export function instanceOfAttributeInProductTypeDisplayInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AttributeInProductTypeDisplayInfoFromJSON(json: any): AttributeInProductTypeDisplayInfo {
    return AttributeInProductTypeDisplayInfoFromJSONTyped(json, false);
}

export function AttributeInProductTypeDisplayInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttributeInProductTypeDisplayInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'displayIntention': !exists(json, 'displayIntention') ? undefined : json['displayIntention'],
    };
}

export function AttributeInProductTypeDisplayInfoToJSON(value?: AttributeInProductTypeDisplayInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'displayIntention': value.displayIntention,
    };
}

