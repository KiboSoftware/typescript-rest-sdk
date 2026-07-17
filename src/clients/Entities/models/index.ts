/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface EntityCollection
 */
export interface EntityCollection {
    /**
     * 
     * @type {number}
     * @memberof EntityCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<object>}
     * @memberof EntityCollection
     */
    items?: Array<object> | null;
}
/**
 * The metadata and Entity contents for an entity persisted in an EntityList in MZDB. The Item property contains the json representation of the Entity
 * @export
 * @interface EntityContainer
 */
export interface EntityContainer {
    /**
     * 
     * @type {number}
     * @memberof EntityContainer
     */
    tenantId?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityContainer
     */
    siteId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof EntityContainer
     */
    masterCatalogId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof EntityContainer
     */
    catalogId?: number | null;
    /**
     * The localeCode for the Entity. This will only be populated for EntityLists that are created with IsLocaleSpecific set to true.
     * @type {string}
     * @memberof EntityContainer
     */
    localeCode?: string | null;
    /**
     * The nameSpace and name for the EntityList in the format name@nameSpace.
     * @type {string}
     * @memberof EntityContainer
     */
    listFullName?: string | null;
    /**
     * The userId of the shopper account associated with this Entity. This will only be populated for EntityLists that are creaetd with IsShopperSpecific set to true.
     * @type {string}
     * @memberof EntityContainer
     */
    userId?: string | null;
    /**
     * The unique identifier for the Entity.
     * @type {string}
     * @memberof EntityContainer
     */
    id?: string | null;
    /**
     * The entity in json format.
     * @type {object}
     * @memberof EntityContainer
     */
    item?: object | null;
    /**
     * 
     * @type {string}
     * @memberof EntityContainer
     */
    createBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EntityContainer
     */
    createDate?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityContainer
     */
    updateBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EntityContainer
     */
    updateDate?: string;
}
/**
 * 
 * @export
 * @interface EntityContainerCollection
 */
export interface EntityContainerCollection {
    /**
     * 
     * @type {number}
     * @memberof EntityContainerCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityContainerCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityContainerCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityContainerCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<EntityContainer>}
     * @memberof EntityContainerCollection
     */
    items?: Array<EntityContainer> | null;
}
/**
 * The definition of an MZDB EntityList which describes the characteristics of the EntityList on a per tenant basis. EntityLists are created at the tenant level, but instances of the EntityLists are implicitly created at the appropriate context level as entities are added or removed from the EntityList.
 * @export
 * @interface EntityList
 */
export interface EntityList {
    /**
     * 
     * @type {number}
     * @memberof EntityList
     */
    tenantId?: number;
    /**
     * The nameSpace for the EntityList which must be within the nameSpace scope of the developer Account for the creating application.  The name and namespace are formatted as name@nameSpace when specified as fullName. An EntityLists fullName must be unique within the tenant in which it is created.
     * @type {string}
     * @memberof EntityList
     */
    nameSpace?: string | null;
    /**
     * The name for the EntityList which must be unique within the namespace provided.  The name and namespace are formatted as name@nameSpace when specified as fullName. An EntityLists fullName must be unique within the tenant in which it is created.
     * @type {string}
     * @memberof EntityList
     */
    name?: string | null;
    /**
     * At which context level are entities stored in the list. Possible values are "tenant", "site", "masterCatalog" or "catalog".  Each list instance will exist at this context level for the tenant.
     * @type {string}
     * @memberof EntityList
     */
    contextLevel?: string | null;
    /**
     * Indicates whether or not Mozu should assign a generated identifier for each entity in the list or whether a unique identifier will be provided for each identity. If set to false, then a value must be provided for the IdProperty for the list.
     * @type {boolean}
     * @memberof EntityList
     */
    useSystemAssignedId?: boolean;
    /**
     * 
     * @type {IndexedProperty}
     * @memberof EntityList
     */
    idProperty?: IndexedProperty;
    /**
     * 
     * @type {IndexedProperty}
     * @memberof EntityList
     */
    indexA?: IndexedProperty;
    /**
     * 
     * @type {IndexedProperty}
     * @memberof EntityList
     */
    indexB?: IndexedProperty;
    /**
     * 
     * @type {IndexedProperty}
     * @memberof EntityList
     */
    indexC?: IndexedProperty;
    /**
     * 
     * @type {IndexedProperty}
     * @memberof EntityList
     */
    indexD?: IndexedProperty;
    /**
     * Indicates whether Enitities in the EntityList are allowed to be accessed from a Mozu storefront.
     * @type {boolean}
     * @memberof EntityList
     */
    isVisibleInStorefront?: boolean;
    /**
     * Indicates whether MZDB should store entities in the EntityList instance specific to the localeCode provided.  If true, all operations on the EntityList will be filtered by the provided localeCode on the request or using the defautLocaleCode for the context.  All entities created in the EntityList will be stored with the localeCode provided on the request or the defautLocaleCode for the context as an additional implicit key. The default value is false.
     * @type {boolean}
     * @memberof EntityList
     */
    isLocaleSpecific?: boolean;
    /**
     * Indicates whether MZDB should store entities in the EntityList instance specific to the current shopper on the request.  If true, all operations on the EntityList will be filtered by the id of the shopper from the shopper claims provided on the request.  All entities created in the EntityList will be stored with the id of the shopper from the shopper claims provided on the request as an additional implicit key. The default value is false.
     * @type {boolean}
     * @memberof EntityList
     */
    isShopperSpecific?: boolean;
    /**
     * Indicates whether MZDB should clone all of the Entities in the EntityList when cloning an existing sandbox for which this list is already defined.  The default value is false.
     * @type {boolean}
     * @memberof EntityList
     */
    isSandboxDataCloningSupported?: boolean;
    /**
     * The ListViews defined for this EntityList.  ListViews may be used to automatically filter an EntityList or transform the Entities in the list to a new Schema.
     * @type {Array<ListView>}
     * @memberof EntityList
     */
    views?: Array<ListView> | null;
    /**
     * Usages are arbitratry sting values used to provide instructions for other applications as to the intended areas where the list should be used. Mozu uses the "admin" usage valued to indicate that an EntityList should appear in the EntityManager in the Admin UI.  The values are open ended and applications may provide any value for a usage. This field can be used in queries to the EntityList.
     * @type {Array<string>}
     * @memberof EntityList
     */
    usages?: Array<string> | null;
    /**
     * An arbitrary json property to be used by external applications for any purpose. MZDB will persist and retrieve the metadata without any restrictions.
     * @type {object}
     * @memberof EntityList
     */
    metadata?: object | null;
    /**
     * 
     * @type {string}
     * @memberof EntityList
     */
    createDate?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityList
     */
    updateDate?: string;
}
/**
 * 
 * @export
 * @interface EntityListCollection
 */
export interface EntityListCollection {
    /**
     * 
     * @type {number}
     * @memberof EntityListCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityListCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityListCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityListCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<EntityList>}
     * @memberof EntityListCollection
     */
    items?: Array<EntityList> | null;
}
/**
 * 
 * @export
 * @interface IndexedProperty
 */
export interface IndexedProperty {
    /**
     * A JPath query indicating the property that should be indexed to enable querying and sorting.  Non-indexed properties may be used in queries as long as at least one indexed property is also provided in the query.
     * @type {string}
     * @memberof IndexedProperty
     */
    propertyName?: string | null;
    /**
     * The datatype of the property. Valid values are "string", "integer", "decimal", "date", "bool". See SharedConstants.DataTypeConst
     * @type {string}
     * @memberof IndexedProperty
     */
    dataType?: string | null;
}
/**
 * 
 * @export
 * @interface ListView
 */
export interface ListView {
    /**
     * The name of the ListView. This must be unique for the EntityList.
     * @type {string}
     * @memberof ListView
     */
    name?: string | null;
    /**
     * Usages are arbitratry sting values used to provide instructions for other applications as to the intended areas where the view should be used. Mozu uses the "admin" usage valued to indicate that a ListView should appear in the EntityManager in the Admin UI.  The values are open ended and applications may provide any value for a usage. This field can be used in queries to the EntityList.
     * @type {Array<string>}
     * @memberof ListView
     */
    usages?: Array<string> | null;
    /**
     * An arbitrary json property to be used by external applications for any purpose. MZDB will persist and retrieve the metadata without any restrictions.
     * @type {object}
     * @memberof ListView
     */
    metaData?: object | null;
    /**
     * less restrictive than collection/list security. public | admin | owner
     * @type {string}
     * @memberof ListView
     */
    security?: string | null;
    /**
     * Indicates a implicitly applied filter to the EntityList for to which the ListView is associated. All queries to the ListView will have this filter applied implicitly.
     * @type {string}
     * @memberof ListView
     */
    filter?: string | null;
    /**
     * Indicates a default sort to be applied to the ListView.
     * @type {string}
     * @memberof ListView
     */
    defaultSort?: string | null;
    /**
     * The list of ViewFields for this view. ViewFields can be used to filter or transform the underlying Entity to provide an optimized format for applications which query the ListView.  If no ViewFields are specified, entities will be returned for the View with no transform applied.
     * @type {Array<ListViewField>}
     * @memberof ListView
     */
    fields?: Array<ListViewField> | null;
}
/**
 * 
 * @export
 * @interface ListViewCollection
 */
export interface ListViewCollection {
    /**
     * 
     * @type {number}
     * @memberof ListViewCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof ListViewCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof ListViewCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof ListViewCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<ListView>}
     * @memberof ListViewCollection
     */
    items?: Array<ListView> | null;
}
/**
 * shared by cms/mzdb.
 * @export
 * @interface ListViewField
 */
export interface ListViewField {
    /**
     * The name of the field in the view.
     * @type {string}
     * @memberof ListViewField
     */
    name?: string | null;
    /**
     * The datatype of the field. Valid values are "string", "integer", "decimal", "date", "bool". See SharedConstants.DataTypeConst
     * @type {string}
     * @memberof ListViewField
     */
    type?: string | null;
    /**
     * A JPath query to the source property for this ViewField.
     * @type {string}
     * @memberof ListViewField
     */
    target?: string | null;
}
