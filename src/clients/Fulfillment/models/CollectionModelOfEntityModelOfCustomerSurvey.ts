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
import type { EntityModelOfCustomerSurvey } from './EntityModelOfCustomerSurvey';
import {
    EntityModelOfCustomerSurveyFromJSON,
    EntityModelOfCustomerSurveyFromJSONTyped,
    EntityModelOfCustomerSurveyToJSON,
} from './EntityModelOfCustomerSurvey';
import type { Link } from './Link';
import {
    LinkFromJSON,
    LinkFromJSONTyped,
    LinkToJSON,
} from './Link';

/**
 * 
 * @export
 * @interface CollectionModelOfEntityModelOfCustomerSurvey
 */
export interface CollectionModelOfEntityModelOfCustomerSurvey {
    /**
     * 
     * @type {{ [key: string]: Array<EntityModelOfCustomerSurvey>; }}
     * @memberof CollectionModelOfEntityModelOfCustomerSurvey
     */
    embedded?: { [key: string]: Array<EntityModelOfCustomerSurvey>; };
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof CollectionModelOfEntityModelOfCustomerSurvey
     */
    links?: { [key: string]: Link; };
}

/**
 * Check if a given object implements the CollectionModelOfEntityModelOfCustomerSurvey interface.
 */
export function instanceOfCollectionModelOfEntityModelOfCustomerSurvey(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CollectionModelOfEntityModelOfCustomerSurveyFromJSON(json: any): CollectionModelOfEntityModelOfCustomerSurvey {
    return CollectionModelOfEntityModelOfCustomerSurveyFromJSONTyped(json, false);
}

export function CollectionModelOfEntityModelOfCustomerSurveyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CollectionModelOfEntityModelOfCustomerSurvey {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'embedded': !exists(json, '_embedded') ? undefined : json['_embedded'],
        'links': !exists(json, '_links') ? undefined : (mapValues(json['_links'], LinkFromJSON)),
    };
}

export function CollectionModelOfEntityModelOfCustomerSurveyToJSON(value?: CollectionModelOfEntityModelOfCustomerSurvey | null): any {
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
