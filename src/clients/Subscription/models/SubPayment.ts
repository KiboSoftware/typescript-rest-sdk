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
import type { PaymentActionTarget } from './PaymentActionTarget';
import {
    PaymentActionTargetFromJSON,
    PaymentActionTargetFromJSONTyped,
    PaymentActionTargetToJSON,
} from './PaymentActionTarget';

/**
 * 
 * @export
 * @interface SubPayment
 */
export interface SubPayment {
    /**
     * 
     * @type {string}
     * @memberof SubPayment
     */
    status?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SubPayment
     */
    amountCollected?: number;
    /**
     * 
     * @type {number}
     * @memberof SubPayment
     */
    amountCredited?: number;
    /**
     * 
     * @type {number}
     * @memberof SubPayment
     */
    amountRequested?: number;
    /**
     * 
     * @type {number}
     * @memberof SubPayment
     */
    amountRefunded?: number;
    /**
     * 
     * @type {PaymentActionTarget}
     * @memberof SubPayment
     */
    target?: PaymentActionTarget;
}

/**
 * Check if a given object implements the SubPayment interface.
 */
export function instanceOfSubPayment(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubPaymentFromJSON(json: any): SubPayment {
    return SubPaymentFromJSONTyped(json, false);
}

export function SubPaymentFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubPayment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'amountCollected': !exists(json, 'amountCollected') ? undefined : json['amountCollected'],
        'amountCredited': !exists(json, 'amountCredited') ? undefined : json['amountCredited'],
        'amountRequested': !exists(json, 'amountRequested') ? undefined : json['amountRequested'],
        'amountRefunded': !exists(json, 'amountRefunded') ? undefined : json['amountRefunded'],
        'target': !exists(json, 'target') ? undefined : PaymentActionTargetFromJSON(json['target']),
    };
}

export function SubPaymentToJSON(value?: SubPayment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'amountCollected': value.amountCollected,
        'amountCredited': value.amountCredited,
        'amountRequested': value.amountRequested,
        'amountRefunded': value.amountRefunded,
        'target': PaymentActionTargetToJSON(value.target),
    };
}

