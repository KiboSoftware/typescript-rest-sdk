/* tslint:disable */
/* eslint-disable */
/**
 * Kibo SubscriptionRuntime Service
 * OpenAPI Spec for Kibo SubscriptionRuntime Service
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
 * If the customer is paying by credit card, the card holder's details, such as the name on the card, number, billing 
 * address, and expiration dates.
 * @export
 * @interface PaymentCard
 */
export interface PaymentCard {
    /**
     * Credit card number.
     * @type {string}
     * @memberof PaymentCard
     */
    paymentServiceCardId?: string | null;
    /**
     * If true, the credit card is charged on a regular interval, such as for a subscription. (Not supported currently.)
     * @type {boolean}
     * @memberof PaymentCard
     */
    isUsedRecurring?: boolean | null;
    /**
     * Card holder's name as it appears on the card.
     * @type {string}
     * @memberof PaymentCard
     */
    nameOnCard?: string | null;
    /**
     * If true, the card information is stored in the customer's account.
     * @type {boolean}
     * @memberof PaymentCard
     */
    isCardInfoSaved?: boolean;
    /**
     * If true, the card is tokenized by external provider
     * @type {boolean}
     * @memberof PaymentCard
     */
    isTokenized?: boolean;
    /**
     * Last four digit of Credit card
     * Only for OMS Only tenant.
     * @type {string}
     * @memberof PaymentCard
     */
    ccLastFour?: string | null;
    /**
     * Card type such as Visa, MasterCard, American Express, or Discover.
     * @type {string}
     * @memberof PaymentCard
     */
    paymentOrCardType?: string | null;
    /**
     * The visible part of the card number that the merchant uses to refer to 
     * payment information, for example, the last for digits of the card number.
     * @type {string}
     * @memberof PaymentCard
     */
    cardNumberPartOrMask?: string | null;
    /**
     * Month when the card expires.
     * @type {number}
     * @memberof PaymentCard
     */
    expireMonth?: number;
    /**
     * Year when the card expires.
     * @type {number}
     * @memberof PaymentCard
     */
    expireYear?: number;
    /**
     * Year when the card expires.
     * @type {string}
     * @memberof PaymentCard
     */
    bin?: string | null;
}

/**
 * Check if a given object implements the PaymentCard interface.
 */
export function instanceOfPaymentCard(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PaymentCardFromJSON(json: any): PaymentCard {
    return PaymentCardFromJSONTyped(json, false);
}

export function PaymentCardFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentCard {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'paymentServiceCardId': !exists(json, 'paymentServiceCardId') ? undefined : json['paymentServiceCardId'],
        'isUsedRecurring': !exists(json, 'isUsedRecurring') ? undefined : json['isUsedRecurring'],
        'nameOnCard': !exists(json, 'nameOnCard') ? undefined : json['nameOnCard'],
        'isCardInfoSaved': !exists(json, 'isCardInfoSaved') ? undefined : json['isCardInfoSaved'],
        'isTokenized': !exists(json, 'isTokenized') ? undefined : json['isTokenized'],
        'ccLastFour': !exists(json, 'ccLastFour') ? undefined : json['ccLastFour'],
        'paymentOrCardType': !exists(json, 'paymentOrCardType') ? undefined : json['paymentOrCardType'],
        'cardNumberPartOrMask': !exists(json, 'cardNumberPartOrMask') ? undefined : json['cardNumberPartOrMask'],
        'expireMonth': !exists(json, 'expireMonth') ? undefined : json['expireMonth'],
        'expireYear': !exists(json, 'expireYear') ? undefined : json['expireYear'],
        'bin': !exists(json, 'bin') ? undefined : json['bin'],
    };
}

export function PaymentCardToJSON(value?: PaymentCard | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'paymentServiceCardId': value.paymentServiceCardId,
        'isUsedRecurring': value.isUsedRecurring,
        'nameOnCard': value.nameOnCard,
        'isCardInfoSaved': value.isCardInfoSaved,
        'isTokenized': value.isTokenized,
        'ccLastFour': value.ccLastFour,
        'paymentOrCardType': value.paymentOrCardType,
        'cardNumberPartOrMask': value.cardNumberPartOrMask,
        'expireMonth': value.expireMonth,
        'expireYear': value.expireYear,
        'bin': value.bin,
    };
}

