/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface AdminUserAuditInfo
 */
export interface AdminUserAuditInfo {
    /**
     * 
     * @type {string}
     * @memberof AdminUserAuditInfo
     */
    updateDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AdminUserAuditInfo
     */
    createDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AdminUserAuditInfo
     */
    updateBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AdminUserAuditInfo
     */
    createBy?: string | null;
}
/**
 * 
 * @export
 * @interface FieldTypeDefinitionRepositoryEntry
 */
export interface FieldTypeDefinitionRepositoryEntry {
    /**
     * 
     * @type {string}
     * @memberof FieldTypeDefinitionRepositoryEntry
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FieldTypeDefinitionRepositoryEntry
     */
    suffix?: string | null;
    /**
     * 
     * @type {any}
     * @memberof FieldTypeDefinitionRepositoryEntry
     */
    solrFieldType?: any | null;
    /**
     * 
     * @type {string}
     * @memberof FieldTypeDefinitionRepositoryEntry
     */
    description?: string | null;
    /**
     * Restricts the fields used by specific SOLR analyzer.
     * Originally developed for entity extraction/ aka noun_extraction
     * (e.g. searching for sofa tables should return tables, not sofas)
     * @type {any}
     * @memberof FieldTypeDefinitionRepositoryEntry
     */
    usageRestrictions?: any | null;
}
/**
 * 
 * @export
 * @interface SchemaDefinition
 */
export interface SchemaDefinition {
    /**
     * 
     * @type {string}
     * @memberof SchemaDefinition
     */
    language: string;
    /**
     * 
     * @type {boolean}
     * @memberof SchemaDefinition
     */
    isPublished?: boolean;
    /**
     * 
     * @type {Array<SchemaDefinitionField>}
     * @memberof SchemaDefinition
     */
    fields: Array<SchemaDefinitionField>;
    /**
     * List of attributes used in the spelling dictionary
     * @type {Array<SpellingSchemaDefinitionField>}
     * @memberof SchemaDefinition
     */
    spellingFields?: Array<SpellingSchemaDefinitionField> | null;
    /**
     * Returns boolean if contains any SpellingFields members.
     * @type {boolean}
     * @memberof SchemaDefinition
     */
    spellCorrectEnabled?: boolean | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof SchemaDefinition
     */
    auditInfo?: AdminUserAuditInfo;
}
/**
 * 
 * @export
 * @interface SchemaDefinitionField
 */
export interface SchemaDefinitionField {
    /**
     * 
     * @type {string}
     * @memberof SchemaDefinitionField
     */
    fieldName: string;
    /**
     * 
     * @type {string}
     * @memberof SchemaDefinitionField
     */
    fieldDefinition: string;
    /**
     * 
     * @type {string}
     * @memberof SchemaDefinitionField
     */
    friendlyName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SchemaDefinitionField
     */
    searchFieldName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SchemaDefinitionField
     */
    ingestFieldName?: string | null;
}
/**
 * 
 * @export
 * @interface SpellingSchemaDefinitionField
 */
export interface SpellingSchemaDefinitionField {
    /**
     * 
     * @type {string}
     * @memberof SpellingSchemaDefinitionField
     */
    ingestFieldName?: string | null;
}
/**
 * 
 * @export
 * @interface Suggester
 */
export interface Suggester {
    /**
     * 
     * @type {string}
     * @memberof Suggester
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Suggester
     */
    highlight?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Suggester
     */
    allTermsRequired?: string | null;
}
