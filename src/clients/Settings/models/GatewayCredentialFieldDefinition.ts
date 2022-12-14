/* tslint:disable */
/* eslint-disable */
/**
 * Kibo SiteSettings Service
 * OpenAPI Spec for Kibo SiteSettings Service
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
 * @interface GatewayCredentialFieldDefinition
 */
export interface GatewayCredentialFieldDefinition {
    /**
     * 
     * @type {string}
     * @memberof GatewayCredentialFieldDefinition
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GatewayCredentialFieldDefinition
     */
    displayName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof GatewayCredentialFieldDefinition
     */
    adminDisplayOrder?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GatewayCredentialFieldDefinition
     */
    isPublic?: boolean;
}

/**
 * Check if a given object implements the GatewayCredentialFieldDefinition interface.
 */
export function instanceOfGatewayCredentialFieldDefinition(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GatewayCredentialFieldDefinitionFromJSON(json: any): GatewayCredentialFieldDefinition {
    return GatewayCredentialFieldDefinitionFromJSONTyped(json, false);
}

export function GatewayCredentialFieldDefinitionFromJSONTyped(json: any, ignoreDiscriminator: boolean): GatewayCredentialFieldDefinition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'displayName': !exists(json, 'displayName') ? undefined : json['displayName'],
        'adminDisplayOrder': !exists(json, 'adminDisplayOrder') ? undefined : json['adminDisplayOrder'],
        'isPublic': !exists(json, 'isPublic') ? undefined : json['isPublic'],
    };
}

export function GatewayCredentialFieldDefinitionToJSON(value?: GatewayCredentialFieldDefinition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'displayName': value.displayName,
        'adminDisplayOrder': value.adminDisplayOrder,
        'isPublic': value.isPublic,
    };
}

