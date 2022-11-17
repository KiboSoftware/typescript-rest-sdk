/* tslint:disable */
/* eslint-disable */
/**
 * Kibo CommerceRuntime Service
 * OpenAPI Spec for Kibo CommerceRuntime Service
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { OrderValidationMessage } from './OrderValidationMessage';
import {
    OrderValidationMessageFromJSON,
    OrderValidationMessageFromJSONTyped,
    OrderValidationMessageToJSON,
} from './OrderValidationMessage';

/**
 * The result of an order validator.
 * @export
 * @interface OrderValidationResult
 */
export interface OrderValidationResult {
    /**
     * Identifier set by the capability that states the id of this specific validation attempt
     * @type {string}
     * @memberof OrderValidationResult
     */
    validationId?: string | null;
    /**
     * Identifier set by the capability that states the specific name of this validator.
     * @type {string}
     * @memberof OrderValidationResult
     */
    validatorName?: string | null;
    /**
     * Identifies the type of the validator (types are enumerated in OrderValidatorTypeConst)
     * @type {string}
     * @memberof OrderValidationResult
     */
    validatorType?: string | null;
    /**
     * Status of the order validation result.  See OrderValidatorStatusConst for options.
     * @type {string}
     * @memberof OrderValidationResult
     */
    status?: string | null;
    /**
     * DateTime that this validation result was created
     * @type {Date}
     * @memberof OrderValidationResult
     */
    createdDate?: Date | null;
    /**
     * Messages returned by the order validator
     * @type {Array<OrderValidationMessage>}
     * @memberof OrderValidationResult
     */
    messages?: Array<OrderValidationMessage> | null;
}

/**
 * Check if a given object implements the OrderValidationResult interface.
 */
export function instanceOfOrderValidationResult(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrderValidationResultFromJSON(json: any): OrderValidationResult {
    return OrderValidationResultFromJSONTyped(json, false);
}

export function OrderValidationResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderValidationResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'validationId': !exists(json, 'validationId') ? undefined : json['validationId'],
        'validatorName': !exists(json, 'validatorName') ? undefined : json['validatorName'],
        'validatorType': !exists(json, 'validatorType') ? undefined : json['validatorType'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'createdDate': !exists(json, 'createdDate') ? undefined : (json['createdDate'] === null ? null : new Date(json['createdDate'])),
        'messages': !exists(json, 'messages') ? undefined : (json['messages'] === null ? null : (json['messages'] as Array<any>).map(OrderValidationMessageFromJSON)),
    };
}

export function OrderValidationResultToJSON(value?: OrderValidationResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'validationId': value.validationId,
        'validatorName': value.validatorName,
        'validatorType': value.validatorType,
        'status': value.status,
        'createdDate': value.createdDate === undefined ? undefined : (value.createdDate === null ? null : value.createdDate.toISOString()),
        'messages': value.messages === undefined ? undefined : (value.messages === null ? null : (value.messages as Array<any>).map(OrderValidationMessageToJSON)),
    };
}

