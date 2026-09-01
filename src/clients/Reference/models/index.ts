/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface AddressSchema
 */
export interface AddressSchema {
    /**
     * 
     * @type {string}
     * @memberof AddressSchema
     */
    countryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressSchema
     */
    countryLabel?: string | null;
    /**
     * 
     * @type {Array<Field>}
     * @memberof AddressSchema
     */
    fields?: Array<Field> | null;
    /**
     * 
     * @type {number}
     * @memberof AddressSchema
     */
    id?: number;
}
/**
 * 
 * @export
 * @interface AddressSchemaCollection
 */
export interface AddressSchemaCollection {
    /**
     * 
     * @type {Array<AddressSchema>}
     * @memberof AddressSchemaCollection
     */
    items?: Array<AddressSchema> | null;
    /**
     * 
     * @type {number}
     * @memberof AddressSchemaCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface Behavior
 */
export interface Behavior {
    /**
     * 
     * @type {number}
     * @memberof Behavior
     */
    categoryId?: number;
    /**
     * 
     * @type {number}
     * @memberof Behavior
     */
    id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Behavior
     */
    isPrivate?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Behavior
     */
    name?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Behavior
     */
    oAuthScopes?: Array<string> | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof Behavior
     */
    requiresBehaviorIds?: Array<number> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Behavior
     */
    systemRoles?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Behavior
     */
    validUserTypes?: Array<string> | null;
}
/**
 * 
 * @export
 * @interface BehaviorCategory
 */
export interface BehaviorCategory {
    /**
     * 
     * @type {number}
     * @memberof BehaviorCategory
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof BehaviorCategory
     */
    name?: string | null;
}
/**
 * 
 * @export
 * @interface BehaviorCategoryCollection
 */
export interface BehaviorCategoryCollection {
    /**
     * 
     * @type {Array<BehaviorCategory>}
     * @memberof BehaviorCategoryCollection
     */
    items?: Array<BehaviorCategory> | null;
    /**
     * 
     * @type {number}
     * @memberof BehaviorCategoryCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface BehaviorCategoryCollectionBase
 */
export interface BehaviorCategoryCollectionBase {
    /**
     * 
     * @type {Array<BehaviorCategory>}
     * @memberof BehaviorCategoryCollectionBase
     */
    items?: Array<BehaviorCategory> | null;
    /**
     * 
     * @type {number}
     * @memberof BehaviorCategoryCollectionBase
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface BehaviorCollection
 */
export interface BehaviorCollection {
    /**
     * 
     * @type {Array<Behavior>}
     * @memberof BehaviorCollection
     */
    items?: Array<Behavior> | null;
    /**
     * 
     * @type {number}
     * @memberof BehaviorCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface BehaviorCollectionBase
 */
export interface BehaviorCollectionBase {
    /**
     * 
     * @type {Array<Behavior>}
     * @memberof BehaviorCollectionBase
     */
    items?: Array<Behavior> | null;
    /**
     * 
     * @type {number}
     * @memberof BehaviorCollectionBase
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface ContentLocale
 */
export interface ContentLocale {
    /**
     * 
     * @type {string}
     * @memberof ContentLocale
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContentLocale
     */
    name?: string | null;
}
/**
 * 
 * @export
 * @interface ContentLocaleCollection
 */
export interface ContentLocaleCollection {
    /**
     * 
     * @type {Array<ContentLocale>}
     * @memberof ContentLocaleCollection
     */
    items?: Array<ContentLocale> | null;
    /**
     * 
     * @type {number}
     * @memberof ContentLocaleCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface Country
 */
export interface Country {
    /**
     * 
     * @type {string}
     * @memberof Country
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Country
     */
    name?: string | null;
}
/**
 * 
 * @export
 * @interface CountryCollection
 */
export interface CountryCollection {
    /**
     * 
     * @type {Array<Country>}
     * @memberof CountryCollection
     */
    items?: Array<Country> | null;
    /**
     * 
     * @type {number}
     * @memberof CountryCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface CountryWithStates
 */
export interface CountryWithStates {
    /**
     * 
     * @type {string}
     * @memberof CountryWithStates
     */
    code?: string | null;
    /**
     * 
     * @type {Array<ReferenceState>}
     * @memberof CountryWithStates
     */
    states?: Array<ReferenceState> | null;
}
/**
 * 
 * @export
 * @interface CountryWithStatesCollection
 */
export interface CountryWithStatesCollection {
    /**
     * 
     * @type {Array<CountryWithStates>}
     * @memberof CountryWithStatesCollection
     */
    items?: Array<CountryWithStates> | null;
    /**
     * 
     * @type {number}
     * @memberof CountryWithStatesCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface CurrencyCollection
 */
export interface CurrencyCollection {
    /**
     * 
     * @type {Array<ReferenceCurrency>}
     * @memberof CurrencyCollection
     */
    items?: Array<ReferenceCurrency> | null;
    /**
     * 
     * @type {number}
     * @memberof CurrencyCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface Field
 */
export interface Field {
    /**
     * 
     * @type {Array<FieldData>}
     * @memberof Field
     */
    data?: Array<FieldData> | null;
    /**
     * 
     * @type {number}
     * @memberof Field
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Field
     */
    label?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Field
     */
    order?: number;
    /**
     * 
     * @type {string}
     * @memberof Field
     */
    type?: string | null;
}
/**
 * 
 * @export
 * @interface FieldData
 */
export interface FieldData {
    /**
     * 
     * @type {string}
     * @memberof FieldData
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FieldData
     */
    value?: string | null;
}
/**
 * 
 * @export
 * @interface ReferenceCurrency
 */
export interface ReferenceCurrency {
    /**
     * 
     * @type {string}
     * @memberof ReferenceCurrency
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReferenceCurrency
     */
    name?: string | null;
}
/**
 * 
 * @export
 * @interface ReferenceState
 */
export interface ReferenceState {
    /**
     * 
     * @type {string}
     * @memberof ReferenceState
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReferenceState
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReferenceState
     */
    tags?: string | null;
}
/**
 * 
 * @export
 * @interface ReferenceTimeZone
 */
export interface ReferenceTimeZone {
    /**
     * IANA Code valid for the Windows Code used as Id
     * @type {string}
     * @memberof ReferenceTimeZone
     */
    ianaCode?: string | null;
    /**
     * The Id of the TimeZone (examples include: "Central Standard Time", ...)
     * @type {string}
     * @memberof ReferenceTimeZone
     */
    id?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ReferenceTimeZone
     */
    isDaylightSavingsTime?: boolean;
    /**
     * The current offset for this TimeZone in hours
     * @type {number}
     * @memberof ReferenceTimeZone
     */
    offset?: number;
}
/**
 * 
 * @export
 * @interface StateCollection
 */
export interface StateCollection {
    /**
     * 
     * @type {string}
     * @memberof StateCollection
     */
    countryCode?: string | null;
    /**
     * 
     * @type {Array<ReferenceState>}
     * @memberof StateCollection
     */
    items?: Array<ReferenceState> | null;
    /**
     * 
     * @type {number}
     * @memberof StateCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface TimeZoneCollection
 */
export interface TimeZoneCollection {
    /**
     * 
     * @type {Array<ReferenceTimeZone>}
     * @memberof TimeZoneCollection
     */
    items?: Array<ReferenceTimeZone> | null;
    /**
     * 
     * @type {number}
     * @memberof TimeZoneCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface TopLevelDomainCollection
 */
export interface TopLevelDomainCollection {
    /**
     * 
     * @type {Array<string>}
     * @memberof TopLevelDomainCollection
     */
    items?: Array<string> | null;
    /**
     * 
     * @type {number}
     * @memberof TopLevelDomainCollection
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface UnitOfMeasure
 */
export interface UnitOfMeasure {
    /**
     * 
     * @type {string}
     * @memberof UnitOfMeasure
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UnitOfMeasure
     */
    pluralName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UnitOfMeasure
     */
    symbol?: string | null;
    /**
     * This value can be "Length", "Weight", or "Volume"
     * @type {string}
     * @memberof UnitOfMeasure
     */
    unitOfMeasureType?: string | null;
}
/**
 * 
 * @export
 * @interface UnitOfMeasureCollection
 */
export interface UnitOfMeasureCollection {
    /**
     * 
     * @type {Array<UnitOfMeasure>}
     * @memberof UnitOfMeasureCollection
     */
    items?: Array<UnitOfMeasure> | null;
    /**
     * 
     * @type {number}
     * @memberof UnitOfMeasureCollection
     */
    totalCount?: number;
}
