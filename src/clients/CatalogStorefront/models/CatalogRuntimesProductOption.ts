/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Runtime Services
 * OpenAPI Spec for Kibo Catalog Runtime Services
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AttributeDetail } from './AttributeDetail';
import {
    AttributeDetailFromJSON,
    AttributeDetailFromJSONTyped,
    AttributeDetailToJSON,
} from './AttributeDetail';
import type { CatalogRuntimesProductOptionValue } from './CatalogRuntimesProductOptionValue';
import {
    CatalogRuntimesProductOptionValueFromJSON,
    CatalogRuntimesProductOptionValueFromJSONTyped,
    CatalogRuntimesProductOptionValueToJSON,
} from './CatalogRuntimesProductOptionValue';

/**
 * An option for a product and its list of values, if any. Also includes whether the option is configurable or stand-alone, whether it is required, whether it can have mulitple values and whether the shopper can supply its value (for example, engraved initials).
 * @export
 * @interface CatalogRuntimesProductOption
 */
export interface CatalogRuntimesProductOption {
    /**
     * Attribute fully qualified name
     * @type {string}
     * @memberof CatalogRuntimesProductOption
     */
    attributeFQN?: string | null;
    /**
     * If true, the shopper must provide a value for the option before it can be purchased.
     * @type {boolean}
     * @memberof CatalogRuntimesProductOption
     */
    isRequired?: boolean | null;
    /**
     * If true, more than one value can be assigned to an option. Only possible with stand-alone options.
     * @type {boolean}
     * @memberof CatalogRuntimesProductOption
     */
    isMultiValue?: boolean | null;
    /**
     * Possible choices for an option, for example, values of the option "Color" can be "red," "white," and "blue."
     * @type {Array<CatalogRuntimesProductOptionValue>}
     * @memberof CatalogRuntimesProductOption
     */
    values?: Array<CatalogRuntimesProductOptionValue> | null;
    /**
     * 
     * @type {AttributeDetail}
     * @memberof CatalogRuntimesProductOption
     */
    attributeDetail?: AttributeDetail;
    /**
     * 
     * @type {boolean}
     * @memberof CatalogRuntimesProductOption
     */
    isProductImageGroupSelector?: boolean;
}

/**
 * Check if a given object implements the CatalogRuntimesProductOption interface.
 */
export function instanceOfCatalogRuntimesProductOption(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CatalogRuntimesProductOptionFromJSON(json: any): CatalogRuntimesProductOption {
    return CatalogRuntimesProductOptionFromJSONTyped(json, false);
}

export function CatalogRuntimesProductOptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogRuntimesProductOption {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attributeFQN': !exists(json, 'attributeFQN') ? undefined : json['attributeFQN'],
        'isRequired': !exists(json, 'isRequired') ? undefined : json['isRequired'],
        'isMultiValue': !exists(json, 'isMultiValue') ? undefined : json['isMultiValue'],
        'values': !exists(json, 'values') ? undefined : (json['values'] === null ? null : (json['values'] as Array<any>).map(CatalogRuntimesProductOptionValueFromJSON)),
        'attributeDetail': !exists(json, 'attributeDetail') ? undefined : AttributeDetailFromJSON(json['attributeDetail']),
        'isProductImageGroupSelector': !exists(json, 'isProductImageGroupSelector') ? undefined : json['isProductImageGroupSelector'],
    };
}

export function CatalogRuntimesProductOptionToJSON(value?: CatalogRuntimesProductOption | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attributeFQN': value.attributeFQN,
        'isRequired': value.isRequired,
        'isMultiValue': value.isMultiValue,
        'values': value.values === undefined ? undefined : (value.values === null ? null : (value.values as Array<any>).map(CatalogRuntimesProductOptionValueToJSON)),
        'attributeDetail': AttributeDetailToJSON(value.attributeDetail),
        'isProductImageGroupSelector': value.isProductImageGroupSelector,
    };
}
