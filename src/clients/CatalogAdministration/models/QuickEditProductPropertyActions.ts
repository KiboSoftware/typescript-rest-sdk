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
import type { ProductPropertyPatchAction } from './ProductPropertyPatchAction';
import {
    ProductPropertyPatchActionFromJSON,
    ProductPropertyPatchActionFromJSONTyped,
    ProductPropertyPatchActionToJSON,
} from './ProductPropertyPatchAction';

/**
 * List of Mozu.ProductAdmin.Contracts.ProductPropertyPatchActions to be applied to a list of
 * Mozu.ProductAdmin.Contracts.ProductPropertys.
 * @export
 * @interface QuickEditProductPropertyActions
 */
export interface QuickEditProductPropertyActions {
    /**
     * List of Mozu.ProductAdmin.Contracts.ProductPropertyPatchAction actions to perform
     * @type {Array<ProductPropertyPatchAction>}
     * @memberof QuickEditProductPropertyActions
     */
    actions?: Array<ProductPropertyPatchAction> | null;
}

/**
 * Check if a given object implements the QuickEditProductPropertyActions interface.
 */
export function instanceOfQuickEditProductPropertyActions(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function QuickEditProductPropertyActionsFromJSON(json: any): QuickEditProductPropertyActions {
    return QuickEditProductPropertyActionsFromJSONTyped(json, false);
}

export function QuickEditProductPropertyActionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuickEditProductPropertyActions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actions': !exists(json, 'actions') ? undefined : (json['actions'] === null ? null : (json['actions'] as Array<any>).map(ProductPropertyPatchActionFromJSON)),
    };
}

export function QuickEditProductPropertyActionsToJSON(value?: QuickEditProductPropertyActions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actions': value.actions === undefined ? undefined : (value.actions === null ? null : (value.actions as Array<any>).map(ProductPropertyPatchActionToJSON)),
    };
}

