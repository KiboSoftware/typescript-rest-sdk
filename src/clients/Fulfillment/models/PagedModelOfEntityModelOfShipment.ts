/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Fulfillment Service
 * OpenAPI Spec for Kibo Fulfillment Service
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { EntityModelOfShipment } from './EntityModelOfShipment';
import {
    EntityModelOfShipmentFromJSON,
    EntityModelOfShipmentFromJSONTyped,
    EntityModelOfShipmentToJSON,
} from './EntityModelOfShipment';
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { PageMetadata } from './PageMetadata';
import {
    PageMetadataFromJSON,
    PageMetadataFromJSONTyped,
    PageMetadataToJSON,
} from './PageMetadata';

/**
 * 
 * @export
 * @interface PagedModelOfEntityModelOfShipment
 */
export interface PagedModelOfEntityModelOfShipment {
    /**
     * 
     * @type {{ [key: string]: Array<EntityModelOfShipment>; }}
     * @memberof PagedModelOfEntityModelOfShipment
     */
    embedded?: { [key: string]: Array<EntityModelOfShipment>; };
    /**
     * 
     * @type {Links}
     * @memberof PagedModelOfEntityModelOfShipment
     */
    links?: Links;
    /**
     * 
     * @type {PageMetadata}
     * @memberof PagedModelOfEntityModelOfShipment
     */
    page?: PageMetadata;
}

/**
 * Check if a given object implements the PagedModelOfEntityModelOfShipment interface.
 */
export function instanceOfPagedModelOfEntityModelOfShipment(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PagedModelOfEntityModelOfShipmentFromJSON(json: any): PagedModelOfEntityModelOfShipment {
    return PagedModelOfEntityModelOfShipmentFromJSONTyped(json, false);
}

export function PagedModelOfEntityModelOfShipmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagedModelOfEntityModelOfShipment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'embedded': !exists(json, '_embedded') ? undefined : json['_embedded'],
        'links': !exists(json, '_links') ? undefined : LinksFromJSON(json['_links']),
        'page': !exists(json, 'page') ? undefined : PageMetadataFromJSON(json['page']),
    };
}

export function PagedModelOfEntityModelOfShipmentToJSON(value?: PagedModelOfEntityModelOfShipment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_embedded': value.embedded,
        '_links': LinksToJSON(value.links),
        'page': PageMetadataToJSON(value.page),
    };
}
