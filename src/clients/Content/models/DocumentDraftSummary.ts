/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Content Service
 * OpenAPI Spec for Kibo Content Service
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
 * Summary information on a Document Draft
 * @export
 * @interface DocumentDraftSummary
 */
export interface DocumentDraftSummary {
    /**
     * The system generated 32 digit alpha-numeric string that uniquely identifies the document.
     * @type {string}
     * @memberof DocumentDraftSummary
     */
    id?: string | null;
    /**
     * The unique name of the document.
     * @type {string}
     * @memberof DocumentDraftSummary
     */
    name?: string | null;
    /**
     * The full name of the documentType that underlies this document.
     * @type {string}
     * @memberof DocumentDraftSummary
     */
    documentTypeFQN?: string | null;
    /**
     * The fully qualified name of the documentList to which the document belongs.
     * @type {string}
     * @memberof DocumentDraftSummary
     */
    listFQN?: string | null;
    /**
     * The date and time the document was last published, if any.
     * @type {Date}
     * @memberof DocumentDraftSummary
     */
    activeUpdateDate?: Date | null;
    /**
     * The date and time the document draft was last updated.
     * @type {Date}
     * @memberof DocumentDraftSummary
     */
    draftUpdateDate?: Date;
    /**
     * The userId or applicationId that last updated the draft document.
     * @type {string}
     * @memberof DocumentDraftSummary
     */
    updatedBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentDraftSummary
     */
    activeUpdatedBy?: string | null;
    /**
     * Denotes the type of draft. 
     * "Created" -- the document has never been published. 
     * "Updated" -- the document has an "active" version and this is a subsequent draft.
     * "Deleted" -- the "active" document will be permanently deleted when this draft is published.
     * @type {string}
     * @memberof DocumentDraftSummary
     */
    publishType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentDraftSummary
     */
    publishSetCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof DocumentDraftSummary
     */
    masterCatalogId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof DocumentDraftSummary
     */
    catalogId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof DocumentDraftSummary
     */
    siteId?: number | null;
}

/**
 * Check if a given object implements the DocumentDraftSummary interface.
 */
export function instanceOfDocumentDraftSummary(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DocumentDraftSummaryFromJSON(json: any): DocumentDraftSummary {
    return DocumentDraftSummaryFromJSONTyped(json, false);
}

export function DocumentDraftSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): DocumentDraftSummary {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'documentTypeFQN': !exists(json, 'documentTypeFQN') ? undefined : json['documentTypeFQN'],
        'listFQN': !exists(json, 'listFQN') ? undefined : json['listFQN'],
        'activeUpdateDate': !exists(json, 'activeUpdateDate') ? undefined : (json['activeUpdateDate'] === null ? null : new Date(json['activeUpdateDate'])),
        'draftUpdateDate': !exists(json, 'draftUpdateDate') ? undefined : (new Date(json['draftUpdateDate'])),
        'updatedBy': !exists(json, 'updatedBy') ? undefined : json['updatedBy'],
        'activeUpdatedBy': !exists(json, 'activeUpdatedBy') ? undefined : json['activeUpdatedBy'],
        'publishType': !exists(json, 'publishType') ? undefined : json['publishType'],
        'publishSetCode': !exists(json, 'publishSetCode') ? undefined : json['publishSetCode'],
        'masterCatalogId': !exists(json, 'masterCatalogId') ? undefined : json['masterCatalogId'],
        'catalogId': !exists(json, 'catalogId') ? undefined : json['catalogId'],
        'siteId': !exists(json, 'siteId') ? undefined : json['siteId'],
    };
}

export function DocumentDraftSummaryToJSON(value?: DocumentDraftSummary | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'documentTypeFQN': value.documentTypeFQN,
        'listFQN': value.listFQN,
        'activeUpdateDate': value.activeUpdateDate === undefined ? undefined : (value.activeUpdateDate === null ? null : value.activeUpdateDate.toISOString()),
        'draftUpdateDate': value.draftUpdateDate === undefined ? undefined : (value.draftUpdateDate.toISOString()),
        'updatedBy': value.updatedBy,
        'activeUpdatedBy': value.activeUpdatedBy,
        'publishType': value.publishType,
        'publishSetCode': value.publishSetCode,
        'masterCatalogId': value.masterCatalogId,
        'catalogId': value.catalogId,
        'siteId': value.siteId,
    };
}

