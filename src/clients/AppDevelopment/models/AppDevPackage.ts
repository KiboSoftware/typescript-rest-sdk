/* tslint:disable */
/* eslint-disable */
/**
 * Kibo AppDev Service
 * OpenAPI Spec for Kibo AppDev Service
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ApplicationAttribute } from './ApplicationAttribute';
import {
    ApplicationAttributeFromJSON,
    ApplicationAttributeFromJSONTyped,
    ApplicationAttributeToJSON,
} from './ApplicationAttribute';
import type { ApplicationBehavior } from './ApplicationBehavior';
import {
    ApplicationBehaviorFromJSON,
    ApplicationBehaviorFromJSONTyped,
    ApplicationBehaviorToJSON,
} from './ApplicationBehavior';
import type { ApplicationCapability } from './ApplicationCapability';
import {
    ApplicationCapabilityFromJSON,
    ApplicationCapabilityFromJSONTyped,
    ApplicationCapabilityToJSON,
} from './ApplicationCapability';
import type { ApplicationCapabilityType } from './ApplicationCapabilityType';
import {
    ApplicationCapabilityTypeFromJSON,
    ApplicationCapabilityTypeFromJSONTyped,
    ApplicationCapabilityTypeToJSON,
} from './ApplicationCapabilityType';
import type { ApplicationEntitlement } from './ApplicationEntitlement';
import {
    ApplicationEntitlementFromJSON,
    ApplicationEntitlementFromJSONTyped,
    ApplicationEntitlementToJSON,
} from './ApplicationEntitlement';
import type { ApplicationSubscription } from './ApplicationSubscription';
import {
    ApplicationSubscriptionFromJSON,
    ApplicationSubscriptionFromJSONTyped,
    ApplicationSubscriptionToJSON,
} from './ApplicationSubscription';

/**
 * 
 * @export
 * @interface AppDevPackage
 */
export interface AppDevPackage {
    /**
     * 
     * @type {Date}
     * @memberof AppDevPackage
     */
    updateDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof AppDevPackage
     */
    applicationUpdateDate?: Date | null;
    /**
     * 
     * @type {number}
     * @memberof AppDevPackage
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    applicationName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof AppDevPackage
     */
    applicationTypeId?: number;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    applicationTypeName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof AppDevPackage
     */
    majorVersion?: number;
    /**
     * 
     * @type {number}
     * @memberof AppDevPackage
     */
    minorVersion?: number;
    /**
     * 
     * @type {number}
     * @memberof AppDevPackage
     */
    revision?: number;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    sharedSecret?: string | null;
    /**
     * 
     * @type {number}
     * @memberof AppDevPackage
     */
    applicationStatusId?: number;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    applicationStatusName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    apiVersion?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    applicationDescription?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    themeEngineVersion?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    namespace?: string | null;
    /**
     * List of Statuses that the application can move to during the application lifecycle.
     * This is based on what the current value of the ApplicatinStatusId is.
     * @type {Array<number>}
     * @memberof AppDevPackage
     */
    validApplicationStatusIdList?: Array<number> | null;
    /**
     * 
     * @type {number}
     * @memberof AppDevPackage
     */
    appSchemeVersion?: number;
    /**
     * This will be used by the 3rd party developers to set a URL the intalled 
     * applications can call from the Tenant installation/
     * @type {string}
     * @memberof AppDevPackage
     */
    appConfigUrl?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof AppDevPackage
     */
    isReleasePackage?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    packageName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    packageDescription?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    dataNamespace?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    userId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    appId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof AppDevPackage
     */
    applicationId?: number;
    /**
     * 
     * @type {number}
     * @memberof AppDevPackage
     */
    applicationDetailId?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof AppDevPackage
     */
    isLocked?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppDevPackage
     */
    isDeleted?: boolean;
    /**
     * 
     * @type {number}
     * @memberof AppDevPackage
     */
    assetFileCount?: number;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    packageGuid?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    applicationStatus?: string | null;
    /**
     * List of Application Behaviors that apply to this version of the application.
     * @type {Array<ApplicationBehavior>}
     * @memberof AppDevPackage
     */
    applicationBehaviors?: Array<ApplicationBehavior> | null;
    /**
     * 
     * @type {Array<ApplicationSubscription>}
     * @memberof AppDevPackage
     */
    applicationSubscriptions?: Array<ApplicationSubscription> | null;
    /**
     * 
     * @type {Array<ApplicationCapabilityType>}
     * @memberof AppDevPackage
     */
    applicationCapabilityTypes?: Array<ApplicationCapabilityType> | null;
    /**
     * 
     * @type {Array<ApplicationAttribute>}
     * @memberof AppDevPackage
     */
    applicationAttributes?: Array<ApplicationAttribute> | null;
    /**
     * 
     * @type {Array<ApplicationCapability>}
     * @memberof AppDevPackage
     */
    applicationCapabilities?: Array<ApplicationCapability> | null;
    /**
     * 
     * @type {Array<ApplicationEntitlement>}
     * @memberof AppDevPackage
     */
    applicationEntitlements?: Array<ApplicationEntitlement> | null;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    attributeNamespace?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof AppDevPackage
     */
    hasApplicationVersions?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    legacyNamespace?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    namespaceRegistryId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof AppDevPackage
     */
    publishedParentThemeId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    publishedParentSemanticVersion?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    semanticVersionRange?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppDevPackage
     */
    parentThemeName?: string | null;
    /**
     * The parent theme AppKey if this is a theme and 
     * the theme extends a valid, published theme.
     * @type {string}
     * @memberof AppDevPackage
     */
    parentThemeAppKey?: string | null;
    /**
     * The AppKey is a runtime type.
     * This only applies for themes that inherit from another theme.
     * It shows the most current update available.
     * @type {string}
     * @memberof AppDevPackage
     */
    updateParentAppKey?: string | null;
    /**
     * Whether or not there's a theme update.
     * @type {boolean}
     * @memberof AppDevPackage
     */
    updateAvailable?: boolean;
    /**
     * App Key for the package in question.
     * @type {string}
     * @memberof AppDevPackage
     */
    appKey?: string | null;
    /**
     * This only applies for themes that inherit from another theme.
     * It shows the name of the most current update available.
     * @type {string}
     * @memberof AppDevPackage
     */
    updateParentThemeName?: string | null;
    /**
     * This only applies for themes that inherit from another theme.
     * It shows the version of the most current update available.
     * @type {string}
     * @memberof AppDevPackage
     */
    updateParentThemeVersion?: string | null;
    /**
     * This is the DevAccountId that owns the application
     * @type {number}
     * @memberof AppDevPackage
     */
    applicationOwnerDevAccountId?: number;
}

/**
 * Check if a given object implements the AppDevPackage interface.
 */
export function instanceOfAppDevPackage(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppDevPackageFromJSON(json: any): AppDevPackage {
    return AppDevPackageFromJSONTyped(json, false);
}

export function AppDevPackageFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppDevPackage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'updateDate': !exists(json, 'updateDate') ? undefined : (new Date(json['updateDate'])),
        'applicationUpdateDate': !exists(json, 'applicationUpdateDate') ? undefined : (json['applicationUpdateDate'] === null ? null : new Date(json['applicationUpdateDate'])),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'applicationName': !exists(json, 'applicationName') ? undefined : json['applicationName'],
        'applicationTypeId': !exists(json, 'applicationTypeId') ? undefined : json['applicationTypeId'],
        'applicationTypeName': !exists(json, 'applicationTypeName') ? undefined : json['applicationTypeName'],
        'majorVersion': !exists(json, 'majorVersion') ? undefined : json['majorVersion'],
        'minorVersion': !exists(json, 'minorVersion') ? undefined : json['minorVersion'],
        'revision': !exists(json, 'revision') ? undefined : json['revision'],
        'sharedSecret': !exists(json, 'sharedSecret') ? undefined : json['sharedSecret'],
        'applicationStatusId': !exists(json, 'applicationStatusId') ? undefined : json['applicationStatusId'],
        'applicationStatusName': !exists(json, 'applicationStatusName') ? undefined : json['applicationStatusName'],
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'applicationDescription': !exists(json, 'applicationDescription') ? undefined : json['applicationDescription'],
        'themeEngineVersion': !exists(json, 'themeEngineVersion') ? undefined : json['themeEngineVersion'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
        'validApplicationStatusIdList': !exists(json, 'validApplicationStatusIdList') ? undefined : json['validApplicationStatusIdList'],
        'appSchemeVersion': !exists(json, 'appSchemeVersion') ? undefined : json['appSchemeVersion'],
        'appConfigUrl': !exists(json, 'appConfigUrl') ? undefined : json['appConfigUrl'],
        'isReleasePackage': !exists(json, 'isReleasePackage') ? undefined : json['isReleasePackage'],
        'packageName': !exists(json, 'packageName') ? undefined : json['packageName'],
        'packageDescription': !exists(json, 'packageDescription') ? undefined : json['packageDescription'],
        'dataNamespace': !exists(json, 'dataNamespace') ? undefined : json['dataNamespace'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'appId': !exists(json, 'appId') ? undefined : json['appId'],
        'applicationId': !exists(json, 'applicationId') ? undefined : json['applicationId'],
        'applicationDetailId': !exists(json, 'applicationDetailId') ? undefined : json['applicationDetailId'],
        'isLocked': !exists(json, 'isLocked') ? undefined : json['isLocked'],
        'isDeleted': !exists(json, 'isDeleted') ? undefined : json['isDeleted'],
        'assetFileCount': !exists(json, 'assetFileCount') ? undefined : json['assetFileCount'],
        'packageGuid': !exists(json, 'packageGuid') ? undefined : json['packageGuid'],
        'applicationStatus': !exists(json, 'applicationStatus') ? undefined : json['applicationStatus'],
        'applicationBehaviors': !exists(json, 'applicationBehaviors') ? undefined : (json['applicationBehaviors'] === null ? null : (json['applicationBehaviors'] as Array<any>).map(ApplicationBehaviorFromJSON)),
        'applicationSubscriptions': !exists(json, 'applicationSubscriptions') ? undefined : (json['applicationSubscriptions'] === null ? null : (json['applicationSubscriptions'] as Array<any>).map(ApplicationSubscriptionFromJSON)),
        'applicationCapabilityTypes': !exists(json, 'applicationCapabilityTypes') ? undefined : (json['applicationCapabilityTypes'] === null ? null : (json['applicationCapabilityTypes'] as Array<any>).map(ApplicationCapabilityTypeFromJSON)),
        'applicationAttributes': !exists(json, 'applicationAttributes') ? undefined : (json['applicationAttributes'] === null ? null : (json['applicationAttributes'] as Array<any>).map(ApplicationAttributeFromJSON)),
        'applicationCapabilities': !exists(json, 'applicationCapabilities') ? undefined : (json['applicationCapabilities'] === null ? null : (json['applicationCapabilities'] as Array<any>).map(ApplicationCapabilityFromJSON)),
        'applicationEntitlements': !exists(json, 'applicationEntitlements') ? undefined : (json['applicationEntitlements'] === null ? null : (json['applicationEntitlements'] as Array<any>).map(ApplicationEntitlementFromJSON)),
        'attributeNamespace': !exists(json, 'attributeNamespace') ? undefined : json['attributeNamespace'],
        'hasApplicationVersions': !exists(json, 'hasApplicationVersions') ? undefined : json['hasApplicationVersions'],
        'legacyNamespace': !exists(json, 'legacyNamespace') ? undefined : json['legacyNamespace'],
        'namespaceRegistryId': !exists(json, 'namespaceRegistryId') ? undefined : json['namespaceRegistryId'],
        'publishedParentThemeId': !exists(json, 'publishedParentThemeId') ? undefined : json['publishedParentThemeId'],
        'publishedParentSemanticVersion': !exists(json, 'publishedParentSemanticVersion') ? undefined : json['publishedParentSemanticVersion'],
        'semanticVersionRange': !exists(json, 'semanticVersionRange') ? undefined : json['semanticVersionRange'],
        'parentThemeName': !exists(json, 'parentThemeName') ? undefined : json['parentThemeName'],
        'parentThemeAppKey': !exists(json, 'parentThemeAppKey') ? undefined : json['parentThemeAppKey'],
        'updateParentAppKey': !exists(json, 'updateParentAppKey') ? undefined : json['updateParentAppKey'],
        'updateAvailable': !exists(json, 'updateAvailable') ? undefined : json['updateAvailable'],
        'appKey': !exists(json, 'appKey') ? undefined : json['appKey'],
        'updateParentThemeName': !exists(json, 'updateParentThemeName') ? undefined : json['updateParentThemeName'],
        'updateParentThemeVersion': !exists(json, 'updateParentThemeVersion') ? undefined : json['updateParentThemeVersion'],
        'applicationOwnerDevAccountId': !exists(json, 'applicationOwnerDevAccountId') ? undefined : json['applicationOwnerDevAccountId'],
    };
}

export function AppDevPackageToJSON(value?: AppDevPackage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'updateDate': value.updateDate === undefined ? undefined : (value.updateDate.toISOString()),
        'applicationUpdateDate': value.applicationUpdateDate === undefined ? undefined : (value.applicationUpdateDate === null ? null : value.applicationUpdateDate.toISOString()),
        'id': value.id,
        'applicationName': value.applicationName,
        'applicationTypeId': value.applicationTypeId,
        'applicationTypeName': value.applicationTypeName,
        'majorVersion': value.majorVersion,
        'minorVersion': value.minorVersion,
        'revision': value.revision,
        'sharedSecret': value.sharedSecret,
        'applicationStatusId': value.applicationStatusId,
        'applicationStatusName': value.applicationStatusName,
        'apiVersion': value.apiVersion,
        'applicationDescription': value.applicationDescription,
        'themeEngineVersion': value.themeEngineVersion,
        'namespace': value.namespace,
        'validApplicationStatusIdList': value.validApplicationStatusIdList,
        'appSchemeVersion': value.appSchemeVersion,
        'appConfigUrl': value.appConfigUrl,
        'isReleasePackage': value.isReleasePackage,
        'packageName': value.packageName,
        'packageDescription': value.packageDescription,
        'dataNamespace': value.dataNamespace,
        'userId': value.userId,
        'appId': value.appId,
        'applicationId': value.applicationId,
        'applicationDetailId': value.applicationDetailId,
        'isLocked': value.isLocked,
        'isDeleted': value.isDeleted,
        'assetFileCount': value.assetFileCount,
        'packageGuid': value.packageGuid,
        'applicationStatus': value.applicationStatus,
        'applicationBehaviors': value.applicationBehaviors === undefined ? undefined : (value.applicationBehaviors === null ? null : (value.applicationBehaviors as Array<any>).map(ApplicationBehaviorToJSON)),
        'applicationSubscriptions': value.applicationSubscriptions === undefined ? undefined : (value.applicationSubscriptions === null ? null : (value.applicationSubscriptions as Array<any>).map(ApplicationSubscriptionToJSON)),
        'applicationCapabilityTypes': value.applicationCapabilityTypes === undefined ? undefined : (value.applicationCapabilityTypes === null ? null : (value.applicationCapabilityTypes as Array<any>).map(ApplicationCapabilityTypeToJSON)),
        'applicationAttributes': value.applicationAttributes === undefined ? undefined : (value.applicationAttributes === null ? null : (value.applicationAttributes as Array<any>).map(ApplicationAttributeToJSON)),
        'applicationCapabilities': value.applicationCapabilities === undefined ? undefined : (value.applicationCapabilities === null ? null : (value.applicationCapabilities as Array<any>).map(ApplicationCapabilityToJSON)),
        'applicationEntitlements': value.applicationEntitlements === undefined ? undefined : (value.applicationEntitlements === null ? null : (value.applicationEntitlements as Array<any>).map(ApplicationEntitlementToJSON)),
        'attributeNamespace': value.attributeNamespace,
        'hasApplicationVersions': value.hasApplicationVersions,
        'legacyNamespace': value.legacyNamespace,
        'namespaceRegistryId': value.namespaceRegistryId,
        'publishedParentThemeId': value.publishedParentThemeId,
        'publishedParentSemanticVersion': value.publishedParentSemanticVersion,
        'semanticVersionRange': value.semanticVersionRange,
        'parentThemeName': value.parentThemeName,
        'parentThemeAppKey': value.parentThemeAppKey,
        'updateParentAppKey': value.updateParentAppKey,
        'updateAvailable': value.updateAvailable,
        'appKey': value.appKey,
        'updateParentThemeName': value.updateParentThemeName,
        'updateParentThemeVersion': value.updateParentThemeVersion,
        'applicationOwnerDevAccountId': value.applicationOwnerDevAccountId,
    };
}

