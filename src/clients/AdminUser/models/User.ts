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
import type { UserRole } from './UserRole';
import {
    UserRoleFromJSON,
    UserRoleFromJSONTyped,
    UserRoleToJSON,
} from './UserRole';
import type { UserSystemData } from './UserSystemData';
import {
    UserSystemDataFromJSON,
    UserSystemDataFromJSONTyped,
    UserSystemDataToJSON,
} from './UserSystemData';

/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {string}
     * @memberof User
     */
    emailAddress?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    userName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    phoneNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    externalId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    localeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    firstName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    lastName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    password?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    optInToEmail?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    optInToTextMessage?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    id?: string | null;
    /**
     * 
     * @type {UserSystemData}
     * @memberof User
     */
    systemData?: UserSystemData;
    /**
     * 
     * @type {Array<UserRole>}
     * @memberof User
     */
    roles?: Array<UserRole> | null;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    isActive?: boolean;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    identityProviderId?: string | null;
}

/**
 * Check if a given object implements the User interface.
 */
export function instanceOfUser(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UserFromJSON(json: any): User {
    return UserFromJSONTyped(json, false);
}

export function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'emailAddress': !exists(json, 'emailAddress') ? undefined : json['emailAddress'],
        'userName': !exists(json, 'userName') ? undefined : json['userName'],
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'externalId': !exists(json, 'externalId') ? undefined : json['externalId'],
        'localeCode': !exists(json, 'localeCode') ? undefined : json['localeCode'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'optInToEmail': !exists(json, 'optInToEmail') ? undefined : json['optInToEmail'],
        'optInToTextMessage': !exists(json, 'optInToTextMessage') ? undefined : json['optInToTextMessage'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'systemData': !exists(json, 'systemData') ? undefined : UserSystemDataFromJSON(json['systemData']),
        'roles': !exists(json, 'roles') ? undefined : (json['roles'] === null ? null : (json['roles'] as Array<any>).map(UserRoleFromJSON)),
        'isActive': !exists(json, 'isActive') ? undefined : json['isActive'],
        'identityProviderId': !exists(json, 'identityProviderId') ? undefined : json['identityProviderId'],
    };
}

export function UserToJSON(value?: User | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'emailAddress': value.emailAddress,
        'userName': value.userName,
        'phoneNumber': value.phoneNumber,
        'externalId': value.externalId,
        'localeCode': value.localeCode,
        'firstName': value.firstName,
        'lastName': value.lastName,
        'password': value.password,
        'optInToEmail': value.optInToEmail,
        'optInToTextMessage': value.optInToTextMessage,
        'id': value.id,
        'systemData': UserSystemDataToJSON(value.systemData),
        'roles': value.roles === undefined ? undefined : (value.roles === null ? null : (value.roles as Array<any>).map(UserRoleToJSON)),
        'isActive': value.isActive,
        'identityProviderId': value.identityProviderId,
    };
}

