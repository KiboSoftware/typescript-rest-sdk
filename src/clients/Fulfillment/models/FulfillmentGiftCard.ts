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
/**
 * 
 * @export
 * @interface FulfillmentGiftCard
 */
export interface FulfillmentGiftCard {
    /**
     * 
     * @type {Date}
     * @memberof FulfillmentGiftCard
     */
    activationDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentGiftCard
     */
    cardNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentGiftCard
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentGiftCard
     */
    creditType?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentGiftCard
     */
    creditValue?: number;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentGiftCard
     */
    currencyCode?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentGiftCard
     */
    currentBalance?: number;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentGiftCard
     */
    customerId?: number;
    /**
     * 
     * @type {Date}
     * @memberof FulfillmentGiftCard
     */
    expirationDate?: Date;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentGiftCard
     */
    initialBalance?: number;
}

/**
 * Check if a given object implements the FulfillmentGiftCard interface.
 */
export function instanceOfFulfillmentGiftCard(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FulfillmentGiftCardFromJSON(json: any): FulfillmentGiftCard {
    return FulfillmentGiftCardFromJSONTyped(json, false);
}

export function FulfillmentGiftCardFromJSONTyped(json: any, ignoreDiscriminator: boolean): FulfillmentGiftCard {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'activationDate': !exists(json, 'activationDate') ? undefined : (new Date(json['activationDate'])),
        'cardNumber': !exists(json, 'cardNumber') ? undefined : json['cardNumber'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'creditType': !exists(json, 'creditType') ? undefined : json['creditType'],
        'creditValue': !exists(json, 'creditValue') ? undefined : json['creditValue'],
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'currentBalance': !exists(json, 'currentBalance') ? undefined : json['currentBalance'],
        'customerId': !exists(json, 'customerId') ? undefined : json['customerId'],
        'expirationDate': !exists(json, 'expirationDate') ? undefined : (new Date(json['expirationDate'])),
        'initialBalance': !exists(json, 'initialBalance') ? undefined : json['initialBalance'],
    };
}

export function FulfillmentGiftCardToJSON(value?: FulfillmentGiftCard | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'activationDate': value.activationDate === undefined ? undefined : (value.activationDate.toISOString()),
        'cardNumber': value.cardNumber,
        'code': value.code,
        'creditType': value.creditType,
        'creditValue': value.creditValue,
        'currencyCode': value.currencyCode,
        'currentBalance': value.currentBalance,
        'customerId': value.customerId,
        'expirationDate': value.expirationDate === undefined ? undefined : (value.expirationDate.toISOString()),
        'initialBalance': value.initialBalance,
    };
}

