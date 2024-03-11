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
     * @type {number}
     * @memberof AddressSchema
     */
    id?: number;
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
}
/**
 * 
 * @export
 * @interface AddressSchemaCollection
 */
export interface AddressSchemaCollection {
    /**
     * 
     * @type {number}
     * @memberof AddressSchemaCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<AddressSchema>}
     * @memberof AddressSchemaCollection
     */
    items?: Array<AddressSchema> | null;
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
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof Behavior
     */
    categoryId?: number;
    /**
     * 
     * @type {string}
     * @memberof Behavior
     */
    name?: string | null;
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
    validUserTypes?: Array<string> | null;
    /**
     * 
     * @type {boolean}
     * @memberof Behavior
     */
    isPrivate?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof Behavior
     */
    systemRoles?: Array<string> | null;
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
     * @type {number}
     * @memberof BehaviorCategoryCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<BehaviorCategory>}
     * @memberof BehaviorCategoryCollection
     */
    items?: Array<BehaviorCategory> | null;
}
/**
 * 
 * @export
 * @interface BehaviorCategoryCollectionBase
 */
export interface BehaviorCategoryCollectionBase {
    /**
     * 
     * @type {number}
     * @memberof BehaviorCategoryCollectionBase
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<BehaviorCategory>}
     * @memberof BehaviorCategoryCollectionBase
     */
    items?: Array<BehaviorCategory> | null;
}
/**
 * 
 * @export
 * @interface BehaviorCollection
 */
export interface BehaviorCollection {
    /**
     * 
     * @type {number}
     * @memberof BehaviorCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<Behavior>}
     * @memberof BehaviorCollection
     */
    items?: Array<Behavior> | null;
}
/**
 * 
 * @export
 * @interface BehaviorCollectionBase
 */
export interface BehaviorCollectionBase {
    /**
     * 
     * @type {number}
     * @memberof BehaviorCollectionBase
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<Behavior>}
     * @memberof BehaviorCollectionBase
     */
    items?: Array<Behavior> | null;
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
     * @type {number}
     * @memberof ContentLocaleCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<ContentLocale>}
     * @memberof ContentLocaleCollection
     */
    items?: Array<ContentLocale> | null;
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
     * @type {number}
     * @memberof CountryCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<Country>}
     * @memberof CountryCollection
     */
    items?: Array<Country> | null;
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
     * @type {number}
     * @memberof CountryWithStatesCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<CountryWithStates>}
     * @memberof CountryWithStatesCollection
     */
    items?: Array<CountryWithStates> | null;
}
/**
 * 
 * @export
 * @interface Currency
 */
export interface Currency {
    /**
     * 
     * @type {string}
     * @memberof Currency
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Currency
     */
    name?: string | null;
}
/**
 * 
 * @export
 * @interface CurrencyCollection
 */
export interface CurrencyCollection {
    /**
     * 
     * @type {number}
     * @memberof CurrencyCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<Currency>}
     * @memberof CurrencyCollection
     */
    items?: Array<Currency> | null;
}
/**
 * 
 * @export
 * @interface Field
 */
export interface Field {
    /**
     * 
     * @type {string}
     * @memberof Field
     */
    type?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Field
     */
    label?: string | null;
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
     * @type {number}
     * @memberof Field
     */
    order?: number;
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
    value?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FieldData
     */
    code?: string | null;
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
 * @interface TimeZone
 */
export interface TimeZone {
    /**
     * The Id of the TimeZone (examples include: "Central Standard Time", ...)
     * @type {string}
     * @memberof TimeZone
     */
    id?: string | null;
    /**
     * The current offset for this TimeZone in hours
     * @type {number}
     * @memberof TimeZone
     */
    offset?: number;
    /**
     * 
     * @type {boolean}
     * @memberof TimeZone
     */
    isDaylightSavingsTime?: boolean;
}
/**
 * 
 * @export
 * @interface TimeZoneCollection
 */
export interface TimeZoneCollection {
    /**
     * 
     * @type {number}
     * @memberof TimeZoneCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<TimeZone>}
     * @memberof TimeZoneCollection
     */
    items?: Array<TimeZone> | null;
}
/**
 * 
 * @export
 * @interface TopLevelDomainCollection
 */
export interface TopLevelDomainCollection {
    /**
     * 
     * @type {number}
     * @memberof TopLevelDomainCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof TopLevelDomainCollection
     */
    items?: Array<string> | null;
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
    symbol?: string | null;
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
     * @type {number}
     * @memberof UnitOfMeasureCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<UnitOfMeasure>}
     * @memberof UnitOfMeasureCollection
     */
    items?: Array<UnitOfMeasure> | null;
}
