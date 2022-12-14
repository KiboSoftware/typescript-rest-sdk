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
import type { Link } from './Link';
import {
    LinkFromJSON,
    LinkFromJSONTyped,
    LinkToJSON,
} from './Link';
import type { LocationSummary } from './LocationSummary';
import {
    LocationSummaryFromJSON,
    LocationSummaryFromJSONTyped,
    LocationSummaryToJSON,
} from './LocationSummary';

/**
 * 
 * @export
 * @interface CollectionModelOfLocationSummary
 */
export interface CollectionModelOfLocationSummary {
    /**
     * 
     * @type {{ [key: string]: Array<LocationSummary>; }}
     * @memberof CollectionModelOfLocationSummary
     */
    embedded?: { [key: string]: Array<LocationSummary>; };
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof CollectionModelOfLocationSummary
     */
    links?: { [key: string]: Link; };
}

/**
 * Check if a given object implements the CollectionModelOfLocationSummary interface.
 */
export function instanceOfCollectionModelOfLocationSummary(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CollectionModelOfLocationSummaryFromJSON(json: any): CollectionModelOfLocationSummary {
    return CollectionModelOfLocationSummaryFromJSONTyped(json, false);
}

export function CollectionModelOfLocationSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): CollectionModelOfLocationSummary {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'embedded': !exists(json, '_embedded') ? undefined : json['_embedded'],
        'links': !exists(json, '_links') ? undefined : (mapValues(json['_links'], LinkFromJSON)),
    };
}

export function CollectionModelOfLocationSummaryToJSON(value?: CollectionModelOfLocationSummary | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_embedded': value.embedded,
        '_links': value.links === undefined ? undefined : (mapValues(value.links, LinkToJSON)),
    };
}

