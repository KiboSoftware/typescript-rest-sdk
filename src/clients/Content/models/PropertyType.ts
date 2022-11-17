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
 * The schema a document property value must implement. A propertyType is created at a tenant scope and is therefore shared amongst all child contexts (masterCatalog, catalog, site).
 * A propertyType is analogous to the type argument of a class property in object oriented programming. 
 * A propertyType's dataType field is analogous to an intrinsic value type in object oriented programming, or to a column data type in relational database terminology.
 * @export
 * @interface PropertyType
 */
export interface PropertyType {
    /**
     * The name component of the propertyType, name@namespace. The name must be unique within the namespace component and cannot be updated.
     * @type {string}
     * @memberof PropertyType
     */
    name?: string | null;
    /**
     * The namespace component of the propertyType, name@namespace. The issued dev account namespace must be used unless elevated privileges allow a blank namespace to be used. The namespace cannot be updated.
     * @type {string}
     * @memberof PropertyType
     */
    namespace?: string | null;
    /**
     * The unique identifier of the propertyTYpe, represented by name@namespace. The propertyTypeFQN must be provided when creating the propertyType, or the name and namespace fields must be provided.
     * @type {string}
     * @memberof PropertyType
     */
    propertyTypeFQN?: string | null;
    /**
     * The administrative name of the propertyType.
     * @type {string}
     * @memberof PropertyType
     */
    adminName?: string | null;
    /**
     * Optionally, a propertyType can be defined in an installationPackage and then installed into a tenant. Installed propertyTypes can only be updated via installation upgrades. 
     * Currently only internal Mozu platform components can create installations. This field is system-supplied and read-only.
     * @type {string}
     * @memberof PropertyType
     */
    installationPackage?: string | null;
    /**
     * The version of the installationPackge installed. This field is read-only.
     * @type {string}
     * @memberof PropertyType
     */
    version?: string | null;
    /**
     * The underlying value type that can be held in the document's property value. Valid values are
     * string
     * number
     * boolean
     * datetime
     * json
     * The dataType is analogous to an intrinsic value type in object oriented programming, or to a column data type in relational database terminology.
     * @type {string}
     * @memberof PropertyType
     */
    dataType?: string | null;
    /**
     * tbd
     * @type {boolean}
     * @memberof PropertyType
     */
    isQueryable?: boolean | null;
    /**
     * tbd
     * @type {boolean}
     * @memberof PropertyType
     */
    isSortable?: boolean | null;
    /**
     * tbd
     * @type {boolean}
     * @memberof PropertyType
     */
    isAggregatable?: boolean | null;
}

/**
 * Check if a given object implements the PropertyType interface.
 */
export function instanceOfPropertyType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PropertyTypeFromJSON(json: any): PropertyType {
    return PropertyTypeFromJSONTyped(json, false);
}

export function PropertyTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PropertyType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
        'propertyTypeFQN': !exists(json, 'propertyTypeFQN') ? undefined : json['propertyTypeFQN'],
        'adminName': !exists(json, 'adminName') ? undefined : json['adminName'],
        'installationPackage': !exists(json, 'installationPackage') ? undefined : json['installationPackage'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'dataType': !exists(json, 'dataType') ? undefined : json['dataType'],
        'isQueryable': !exists(json, 'isQueryable') ? undefined : json['isQueryable'],
        'isSortable': !exists(json, 'isSortable') ? undefined : json['isSortable'],
        'isAggregatable': !exists(json, 'isAggregatable') ? undefined : json['isAggregatable'],
    };
}

export function PropertyTypeToJSON(value?: PropertyType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'namespace': value.namespace,
        'propertyTypeFQN': value.propertyTypeFQN,
        'adminName': value.adminName,
        'installationPackage': value.installationPackage,
        'version': value.version,
        'dataType': value.dataType,
        'isQueryable': value.isQueryable,
        'isSortable': value.isSortable,
        'isAggregatable': value.isAggregatable,
    };
}

