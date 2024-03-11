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
import type { ActiveDateRange } from './ActiveDateRange';
import {
    ActiveDateRangeFromJSON,
    ActiveDateRangeFromJSONTyped,
    ActiveDateRangeToJSON,
} from './ActiveDateRange';

/**
 * Container for schema-enforced and schemaless data. A document is primarily used to store content (html, text,
 * numbers, dates, JSON, binary data) that is directly or indirectly used for the storefront website experience
 * and may be addressed via the Hypr theming engine language. A document belongs to a documentList and has an
 * underlying documentType.  The documentType describes any required and optional schema. Additionally, a binary
 * object may be stored on the document's content subresource and edge cached via the Mozu CDN.
 * @export
 * @interface Document
 */
export interface Document {
    /**
     * Read-only, system generated 32 digit alpha-numeric string that uniquely identifies the document.
     * @type {string}
     * @memberof Document
     */
    id?: string | null;
    /**
     * The fully qualified name of the document including path.
     * Unique within the documentList. This field is a required field, but it can be updated.
     * @type {string}
     * @memberof Document
     */
    name?: string | null;
    /**
     * ReadOnly, path portion of the Name property.
     * @type {string}
     * @memberof Document
     */
    path?: string | null;
    /**
     * The name of the publish set that this document belongs to, if any.
     * @type {string}
     * @memberof Document
     */
    publishSetCode?: string | null;
    /**
     * If applicable, the file extension associated with the document content.
     * @type {string}
     * @memberof Document
     */
    extension?: string | null;
    /**
     * The full name of the documentType that underlies this document.
     * This field must be supplied upon document creation and cannot be updated.
     * @type {string}
     * @memberof Document
     */
    documentTypeFQN?: string | null;
    /**
     * The fully qualified name of the documentList to which the document belongs.
     * This field is read-only and represents which documentList the document is created in.
     * @type {string}
     * @memberof Document
     */
    listFQN?: string | null;
    /**
     * The size of the content subresource in decimal number of OCTETs.
     * When updating the content subresource, the  contentLength is captured from the
     * Content-Length header, if present, or is otherwise computed from the total size of the http body.
     * @type {number}
     * @memberof Document
     */
    contentLength?: number | null;
    /**
     * The mime type of the document's binary content, provided via the Content-Type header when updating the content
     * subresource. If no value is provided then "application/octet-stream" is set by default.
     * @type {string}
     * @memberof Document
     */
    contentMimeType?: string | null;
    /**
     * The date and time the most recent content update was made via the content subresource. UTC date/time.
     * System-supplied and read-only.
     * @type {Date}
     * @memberof Document
     */
    contentUpdateDate?: Date | null;
    /**
     * The current publish status of the document. If publishing is not supported or is currently disabled in the
     * documentList then the value will be "active".
     * If publishing is supported and enabled, then the publish state may be "draft" or "active". A document may have both
     * an "active" and "draft" version. The publishState
     * denotes which version of the document being interacted with. This field is read-only.
     * @type {string}
     * @memberof Document
     */
    publishState?: string | null;
    /**
     * A JSON object of name/value pairs. Name parts are matched against the underlying documentType properties names. Any
     * matching name parts must have a value part that conforms to the matching property schema.
     * Any non-matching name/value pairs are considered dynamic schema and may have a value part of valid JSON.
     * The properties field can be used for sorting/filtering and can be projected in the documents returned within a
     * documentList view.
     * @type {any}
     * @memberof Document
     */
    properties?: any | null;
    /**
     * The date and time the document was added to the documentList. This field is system-supplied and read-only.
     * @type {Date}
     * @memberof Document
     */
    insertDate?: Date | null;
    /**
     * The date and time the most recent document update was made. If publishing is enabled, then this value will
     * represent
     * the last draft update if the publishState is draft, or the last publish date if the publishState is active.
     * @type {Date}
     * @memberof Document
     */
    updateDate?: Date | null;
    /**
     * 
     * @type {ActiveDateRange}
     * @memberof Document
     */
    activeDateRange?: ActiveDateRange;
}

/**
 * Check if a given object implements the Document interface.
 */
export function instanceOfDocument(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DocumentFromJSON(json: any): Document {
    return DocumentFromJSONTyped(json, false);
}

export function DocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): Document {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'publishSetCode': !exists(json, 'publishSetCode') ? undefined : json['publishSetCode'],
        'extension': !exists(json, 'extension') ? undefined : json['extension'],
        'documentTypeFQN': !exists(json, 'documentTypeFQN') ? undefined : json['documentTypeFQN'],
        'listFQN': !exists(json, 'listFQN') ? undefined : json['listFQN'],
        'contentLength': !exists(json, 'contentLength') ? undefined : json['contentLength'],
        'contentMimeType': !exists(json, 'contentMimeType') ? undefined : json['contentMimeType'],
        'contentUpdateDate': !exists(json, 'contentUpdateDate') ? undefined : (json['contentUpdateDate'] === null ? null : new Date(json['contentUpdateDate'])),
        'publishState': !exists(json, 'publishState') ? undefined : json['publishState'],
        'properties': !exists(json, 'properties') ? undefined : json['properties'],
        'insertDate': !exists(json, 'insertDate') ? undefined : (json['insertDate'] === null ? null : new Date(json['insertDate'])),
        'updateDate': !exists(json, 'updateDate') ? undefined : (json['updateDate'] === null ? null : new Date(json['updateDate'])),
        'activeDateRange': !exists(json, 'activeDateRange') ? undefined : ActiveDateRangeFromJSON(json['activeDateRange']),
    };
}

export function DocumentToJSON(value?: Document | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'path': value.path,
        'publishSetCode': value.publishSetCode,
        'extension': value.extension,
        'documentTypeFQN': value.documentTypeFQN,
        'listFQN': value.listFQN,
        'contentLength': value.contentLength,
        'contentMimeType': value.contentMimeType,
        'contentUpdateDate': value.contentUpdateDate === undefined ? undefined : (value.contentUpdateDate === null ? null : value.contentUpdateDate.toISOString()),
        'publishState': value.publishState,
        'properties': value.properties,
        'insertDate': value.insertDate === undefined ? undefined : (value.insertDate === null ? null : value.insertDate.toISOString()),
        'updateDate': value.updateDate === undefined ? undefined : (value.updateDate === null ? null : value.updateDate.toISOString()),
        'activeDateRange': ActiveDateRangeToJSON(value.activeDateRange),
    };
}
