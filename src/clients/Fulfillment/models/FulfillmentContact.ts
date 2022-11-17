/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Fulfillment Service
 * OpenAPI Spec for Kibo Fulfillment Service
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FulfillmentAddress } from './FulfillmentAddress';
import {
    FulfillmentAddressFromJSON,
    FulfillmentAddressFromJSONTyped,
    FulfillmentAddressToJSON,
} from './FulfillmentAddress';
import type { FulfillmentPhone } from './FulfillmentPhone';
import {
    FulfillmentPhoneFromJSON,
    FulfillmentPhoneFromJSONTyped,
    FulfillmentPhoneToJSON,
} from './FulfillmentPhone';

/**
 * 
 * @export
 * @interface FulfillmentContact
 */
export interface FulfillmentContact {
    /**
     * 
     * @type {FulfillmentAddress}
     * @memberof FulfillmentContact
     */
    address?: FulfillmentAddress;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FulfillmentContact
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof FulfillmentContact
     */
    companyOrOrganization?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentContact
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentContact
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentContact
     */
    fullName?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentContact
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentContact
     */
    lastNameOrSurname?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentContact
     */
    middleNameOrInitial?: string;
    /**
     * 
     * @type {FulfillmentPhone}
     * @memberof FulfillmentContact
     */
    phoneNumbers?: FulfillmentPhone;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentContact
     */
    shortFullName?: string;
}

/**
 * Check if a given object implements the FulfillmentContact interface.
 */
export function instanceOfFulfillmentContact(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FulfillmentContactFromJSON(json: any): FulfillmentContact {
    return FulfillmentContactFromJSONTyped(json, false);
}

export function FulfillmentContactFromJSONTyped(json: any, ignoreDiscriminator: boolean): FulfillmentContact {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': !exists(json, 'address') ? undefined : FulfillmentAddressFromJSON(json['address']),
        'attributes': !exists(json, 'attributes') ? undefined : json['attributes'],
        'companyOrOrganization': !exists(json, 'companyOrOrganization') ? undefined : json['companyOrOrganization'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'fullName': !exists(json, 'fullName') ? undefined : json['fullName'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'lastNameOrSurname': !exists(json, 'lastNameOrSurname') ? undefined : json['lastNameOrSurname'],
        'middleNameOrInitial': !exists(json, 'middleNameOrInitial') ? undefined : json['middleNameOrInitial'],
        'phoneNumbers': !exists(json, 'phoneNumbers') ? undefined : FulfillmentPhoneFromJSON(json['phoneNumbers']),
        'shortFullName': !exists(json, 'shortFullName') ? undefined : json['shortFullName'],
    };
}

export function FulfillmentContactToJSON(value?: FulfillmentContact | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': FulfillmentAddressToJSON(value.address),
        'attributes': value.attributes,
        'companyOrOrganization': value.companyOrOrganization,
        'email': value.email,
        'firstName': value.firstName,
        'fullName': value.fullName,
        'id': value.id,
        'lastNameOrSurname': value.lastNameOrSurname,
        'middleNameOrInitial': value.middleNameOrInitial,
        'phoneNumbers': FulfillmentPhoneToJSON(value.phoneNumbers),
        'shortFullName': value.shortFullName,
    };
}

