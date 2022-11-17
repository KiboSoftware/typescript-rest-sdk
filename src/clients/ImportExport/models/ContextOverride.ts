/* tslint:disable */
/* eslint-disable */
/**
 * Kibo MongoAdmin Service
 * OpenAPI Spec for Kibo MongoAdmin Service
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
 * @interface ContextOverride
 */
export interface ContextOverride {
    /**
     * 
     * @type {number}
     * @memberof ContextOverride
     */
    masterCatalog?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ContextOverride
     */
    locale?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContextOverride
     */
    currency?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ContextOverride
     */
    catalog?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ContextOverride
     */
    site?: number | null;
}

/**
 * Check if a given object implements the ContextOverride interface.
 */
export function instanceOfContextOverride(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ContextOverrideFromJSON(json: any): ContextOverride {
    return ContextOverrideFromJSONTyped(json, false);
}

export function ContextOverrideFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContextOverride {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'masterCatalog': !exists(json, 'masterCatalog') ? undefined : json['masterCatalog'],
        'locale': !exists(json, 'locale') ? undefined : json['locale'],
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        'catalog': !exists(json, 'catalog') ? undefined : json['catalog'],
        'site': !exists(json, 'site') ? undefined : json['site'],
    };
}

export function ContextOverrideToJSON(value?: ContextOverride | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'masterCatalog': value.masterCatalog,
        'locale': value.locale,
        'currency': value.currency,
        'catalog': value.catalog,
        'site': value.site,
    };
}

