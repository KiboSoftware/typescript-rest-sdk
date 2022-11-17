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
/**
 * 
 * @export
 * @interface TagNode
 */
export interface TagNode {
    /**
     * 
     * @type {string}
     * @memberof TagNode
     */
    tagName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TagNode
     */
    tagPath?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TagNode
     */
    tagCode?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof TagNode
     */
    isRoot?: boolean;
    /**
     * 
     * @type {Array<TagNode>}
     * @memberof TagNode
     */
    children?: Array<TagNode> | null;
}

/**
 * Check if a given object implements the TagNode interface.
 */
export function instanceOfTagNode(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TagNodeFromJSON(json: any): TagNode {
    return TagNodeFromJSONTyped(json, false);
}

export function TagNodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TagNode {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tagName': !exists(json, 'tagName') ? undefined : json['tagName'],
        'tagPath': !exists(json, 'tagPath') ? undefined : json['tagPath'],
        'tagCode': !exists(json, 'tagCode') ? undefined : json['tagCode'],
        'isRoot': !exists(json, 'isRoot') ? undefined : json['isRoot'],
        'children': !exists(json, 'children') ? undefined : (json['children'] === null ? null : (json['children'] as Array<any>).map(TagNodeFromJSON)),
    };
}

export function TagNodeToJSON(value?: TagNode | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tagName': value.tagName,
        'tagPath': value.tagPath,
        'tagCode': value.tagCode,
        'isRoot': value.isRoot,
        'children': value.children === undefined ? undefined : (value.children === null ? null : (value.children as Array<any>).map(TagNodeToJSON)),
    };
}

