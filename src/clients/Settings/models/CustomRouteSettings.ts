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
import type { Mapping } from './Mapping';
import {
    MappingFromJSON,
    MappingFromJSONTyped,
    MappingToJSON,
} from './Mapping';
import type { Route } from './Route';
import {
    RouteFromJSON,
    RouteFromJSONTyped,
    RouteToJSON,
} from './Route';
import type { Validator } from './Validator';
import {
    ValidatorFromJSON,
    ValidatorFromJSONTyped,
    ValidatorToJSON,
} from './Validator';

/**
 * 
 * @export
 * @interface CustomRouteSettings
 */
export interface CustomRouteSettings {
    /**
     * 
     * @type {{ [key: string]: Mapping; }}
     * @memberof CustomRouteSettings
     */
    mappings?: { [key: string]: Mapping; } | null;
    /**
     * 
     * @type {{ [key: string]: Validator; }}
     * @memberof CustomRouteSettings
     */
    validators?: { [key: string]: Validator; } | null;
    /**
     * 
     * @type {Array<Route>}
     * @memberof CustomRouteSettings
     */
    routes?: Array<Route> | null;
}

/**
 * Check if a given object implements the CustomRouteSettings interface.
 */
export function instanceOfCustomRouteSettings(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomRouteSettingsFromJSON(json: any): CustomRouteSettings {
    return CustomRouteSettingsFromJSONTyped(json, false);
}

export function CustomRouteSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomRouteSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mappings': !exists(json, 'mappings') ? undefined : (json['mappings'] === null ? null : mapValues(json['mappings'], MappingFromJSON)),
        'validators': !exists(json, 'validators') ? undefined : (json['validators'] === null ? null : mapValues(json['validators'], ValidatorFromJSON)),
        'routes': !exists(json, 'routes') ? undefined : (json['routes'] === null ? null : (json['routes'] as Array<any>).map(RouteFromJSON)),
    };
}

export function CustomRouteSettingsToJSON(value?: CustomRouteSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mappings': value.mappings === undefined ? undefined : (value.mappings === null ? null : mapValues(value.mappings, MappingToJSON)),
        'validators': value.validators === undefined ? undefined : (value.validators === null ? null : mapValues(value.validators, ValidatorToJSON)),
        'routes': value.routes === undefined ? undefined : (value.routes === null ? null : (value.routes as Array<any>).map(RouteToJSON)),
    };
}

