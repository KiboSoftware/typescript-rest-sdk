/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Admin User Service
 * OpenAPI Spec for Kibo Admin User Service
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Tenant } from './Tenant';
import {
    TenantFromJSON,
    TenantFromJSONTyped,
    TenantToJSON,
} from './Tenant';
import type { UserProfile } from './UserProfile';
import {
    UserProfileFromJSON,
    UserProfileFromJSONTyped,
    UserProfileToJSON,
} from './UserProfile';

/**
 * 
 * @export
 * @interface TenantAdminUserAuthTicket
 */
export interface TenantAdminUserAuthTicket {
    /**
     * 
     * @type {UserProfile}
     * @memberof TenantAdminUserAuthTicket
     */
    user?: UserProfile;
    /**
     * 
     * @type {Date}
     * @memberof TenantAdminUserAuthTicket
     */
    createdOn?: Date;
    /**
     * 
     * @type {string}
     * @memberof TenantAdminUserAuthTicket
     */
    jwtAccessToken?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TenantAdminUserAuthTicket
     */
    accessToken?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof TenantAdminUserAuthTicket
     */
    accessTokenExpiration?: Date;
    /**
     * 
     * @type {string}
     * @memberof TenantAdminUserAuthTicket
     */
    refreshToken?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TenantAdminUserAuthTicket
     */
    redirect?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof TenantAdminUserAuthTicket
     */
    refreshTokenExpiration?: Date;
    /**
     * 
     * @type {Tenant}
     * @memberof TenantAdminUserAuthTicket
     */
    tenant?: Tenant;
    /**
     * 
     * @type {Array<Tenant>}
     * @memberof TenantAdminUserAuthTicket
     */
    availableTenants?: Array<Tenant> | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof TenantAdminUserAuthTicket
     */
    grantedBehaviors?: Array<number> | null;
}

/**
 * Check if a given object implements the TenantAdminUserAuthTicket interface.
 */
export function instanceOfTenantAdminUserAuthTicket(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TenantAdminUserAuthTicketFromJSON(json: any): TenantAdminUserAuthTicket {
    return TenantAdminUserAuthTicketFromJSONTyped(json, false);
}

export function TenantAdminUserAuthTicketFromJSONTyped(json: any, ignoreDiscriminator: boolean): TenantAdminUserAuthTicket {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'user': !exists(json, 'user') ? undefined : UserProfileFromJSON(json['user']),
        'createdOn': !exists(json, 'createdOn') ? undefined : (new Date(json['createdOn'])),
        'jwtAccessToken': !exists(json, 'jwtAccessToken') ? undefined : json['jwtAccessToken'],
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'accessTokenExpiration': !exists(json, 'accessTokenExpiration') ? undefined : (new Date(json['accessTokenExpiration'])),
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
        'redirect': !exists(json, 'redirect') ? undefined : json['redirect'],
        'refreshTokenExpiration': !exists(json, 'refreshTokenExpiration') ? undefined : (new Date(json['refreshTokenExpiration'])),
        'tenant': !exists(json, 'tenant') ? undefined : TenantFromJSON(json['tenant']),
        'availableTenants': !exists(json, 'availableTenants') ? undefined : (json['availableTenants'] === null ? null : (json['availableTenants'] as Array<any>).map(TenantFromJSON)),
        'grantedBehaviors': !exists(json, 'grantedBehaviors') ? undefined : json['grantedBehaviors'],
    };
}

export function TenantAdminUserAuthTicketToJSON(value?: TenantAdminUserAuthTicket | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user': UserProfileToJSON(value.user),
        'createdOn': value.createdOn === undefined ? undefined : (value.createdOn.toISOString()),
        'jwtAccessToken': value.jwtAccessToken,
        'accessToken': value.accessToken,
        'accessTokenExpiration': value.accessTokenExpiration === undefined ? undefined : (value.accessTokenExpiration.toISOString()),
        'refreshToken': value.refreshToken,
        'redirect': value.redirect,
        'refreshTokenExpiration': value.refreshTokenExpiration === undefined ? undefined : (value.refreshTokenExpiration.toISOString()),
        'tenant': TenantToJSON(value.tenant),
        'availableTenants': value.availableTenants === undefined ? undefined : (value.availableTenants === null ? null : (value.availableTenants as Array<any>).map(TenantToJSON)),
        'grantedBehaviors': value.grantedBehaviors,
    };
}

