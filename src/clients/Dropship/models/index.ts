/* tslint:disable */
/* eslint-disable */
/**
 * Additional Item Data (IT3) - Shipped quantity information
 * @export
 * @interface AdditionalItemData
 */
export interface AdditionalItemData {
    /**
     * 
     * @type {string}
     * @memberof AdditionalItemData
     */
    numberOfUnitsShipped?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AdditionalItemData
     */
    unitOrBasisForMeasurementCode?: string | null;
}
/**
 * Additional Name Information (N2) - Additional name information
 * @export
 * @interface AdditionalNameInformation
 */
export interface AdditionalNameInformation {
    /**
     * Name
     * @type {string}
     * @memberof AdditionalNameInformation
     */
    name?: string | null;
}
/**
 * Administrative Communications Contact (PER) - Contact information (REUSABLE)
 * @export
 * @interface AdministrativeCommunicationsContact
 */
export interface AdministrativeCommunicationsContact {
    /**
     * Communication Number
     * @type {string}
     * @memberof AdministrativeCommunicationsContact
     */
    communicationNumber?: string | null;
    /**
     * Communication Number 1
     * @type {string}
     * @memberof AdministrativeCommunicationsContact
     */
    communicationNumber1?: string | null;
    /**
     * Communication Number 2
     * @type {string}
     * @memberof AdministrativeCommunicationsContact
     */
    communicationNumber2?: string | null;
    /**
     * Communication Number Qualifier
     * @type {string}
     * @memberof AdministrativeCommunicationsContact
     */
    communicationNumberQualifier?: string | null;
    /**
     * Communication Number Qualifier 1
     * @type {string}
     * @memberof AdministrativeCommunicationsContact
     */
    communicationNumberQualifier1?: string | null;
    /**
     * Communication Number Qualifier 2
     * @type {string}
     * @memberof AdministrativeCommunicationsContact
     */
    communicationNumberQualifier2?: string | null;
    /**
     * Contact Function Code
     * @type {string}
     * @memberof AdministrativeCommunicationsContact
     */
    contactFunctionCode?: string | null;
    /**
     * Contact Inquiry Reference
     * @type {string}
     * @memberof AdministrativeCommunicationsContact
     */
    contactInquiryReference?: string | null;
    /**
     * Name
     * @type {string}
     * @memberof AdministrativeCommunicationsContact
     */
    name?: string | null;
}
/**
 * Baseline Item Data (PO1) - Line item information for purchase order
 * @export
 * @interface BaselineItemData
 */
export interface BaselineItemData {
    /**
     * Assigned Identification
     * @type {string}
     * @memberof BaselineItemData
     */
    assignedIdentification?: string | null;
    /**
     * Basis of Unit Price Code
     * @type {string}
     * @memberof BaselineItemData
     */
    basisOfUnitPriceCode?: string | null;
    /**
     * Product/Service ID
     * @type {string}
     * @memberof BaselineItemData
     */
    productServiceID?: string | null;
    /**
     * Product/Service ID 2
     * @type {string}
     * @memberof BaselineItemData
     */
    productServiceID2?: string | null;
    /**
     * Product/Service ID 3
     * @type {string}
     * @memberof BaselineItemData
     */
    productServiceID3?: string | null;
    /**
     * Product/Service ID 4
     * @type {string}
     * @memberof BaselineItemData
     */
    productServiceID4?: string | null;
    /**
     * Product/Service ID Qualifier
     * @type {string}
     * @memberof BaselineItemData
     */
    productServiceIDQualifier?: string | null;
    /**
     * Product/Service ID Qualifier 2
     * @type {string}
     * @memberof BaselineItemData
     */
    productServiceIDQualifier2?: string | null;
    /**
     * Product/Service ID Qualifier 3
     * @type {string}
     * @memberof BaselineItemData
     */
    productServiceIDQualifier3?: string | null;
    /**
     * Product/Service ID Qualifier 4
     * @type {string}
     * @memberof BaselineItemData
     */
    productServiceIDQualifier4?: string | null;
    /**
     * Quantity
     * @type {string}
     * @memberof BaselineItemData
     */
    quantity?: string | null;
    /**
     * Unit or Basis for Measurement Code
     * @type {string}
     * @memberof BaselineItemData
     */
    unitOrBasisForMeasurementCode?: string | null;
    /**
     * Unit Price
     * @type {string}
     * @memberof BaselineItemData
     */
    unitPrice?: string | null;
}
/**
 * Baseline Item Data - Invoice (IT1) - Line item information for invoice
 * @export
 * @interface BaselineItemDataInvoice
 */
export interface BaselineItemDataInvoice {
    /**
     * 
     * @type {string}
     * @memberof BaselineItemDataInvoice
     */
    assignedIdentification?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BaselineItemDataInvoice
     */
    basisOfUnitPriceCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BaselineItemDataInvoice
     */
    productServiceID?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BaselineItemDataInvoice
     */
    productServiceID1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BaselineItemDataInvoice
     */
    productServiceID2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BaselineItemDataInvoice
     */
    productServiceIDQualifier?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BaselineItemDataInvoice
     */
    productServiceIDQualifier1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BaselineItemDataInvoice
     */
    productServiceIDQualifier2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BaselineItemDataInvoice
     */
    quantityInvoiced?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BaselineItemDataInvoice
     */
    unitOrBasisForMeasurementCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BaselineItemDataInvoice
     */
    unitPrice?: string | null;
}
/**
 * Beginning Segment for Invoice (BIG) - Invoice header information
 * @export
 * @interface BeginningSegmentForInvoice
 */
export interface BeginningSegmentForInvoice {
    /**
     * 
     * @type {string}
     * @memberof BeginningSegmentForInvoice
     */
    date?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeginningSegmentForInvoice
     */
    date1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeginningSegmentForInvoice
     */
    invoiceNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeginningSegmentForInvoice
     */
    purchaseOrderNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeginningSegmentForInvoice
     */
    transactionSetPurposeCode?: string | null;
}
/**
 * Beginning Segment for Purchase Order (BEG) - Indicates the beginning of a Purchase Order Transaction Set
 * @export
 * @interface BeginningSegmentForPurchaseOrder
 */
export interface BeginningSegmentForPurchaseOrder {
    /**
     * Date (CCYYMMDD format)
     * @type {string}
     * @memberof BeginningSegmentForPurchaseOrder
     */
    date?: string | null;
    /**
     * Purchase Order Number
     * @type {string}
     * @memberof BeginningSegmentForPurchaseOrder
     */
    purchaseOrderNumber?: string | null;
    /**
     * Purchase Order Type Code
     * @type {string}
     * @memberof BeginningSegmentForPurchaseOrder
     */
    purchaseOrderTypeCode?: string | null;
    /**
     * Transaction Set Purpose Code
     * @type {string}
     * @memberof BeginningSegmentForPurchaseOrder
     */
    transactionSetPurposeCode?: string | null;
}
/**
 * CTP Loop - Pricing Information Loop
 * Contains pricing information and related segments
 * @export
 * @interface CTPLoop
 */
export interface CTPLoop {
    /**
     * CTP - Pricing Information
     * To specify pricing information
     * @type {Array<PricingInformation>}
     * @memberof CTPLoop
     */
    pricingInformation?: Array<PricingInformation> | null;
}
/**
 * CTT Loop - Transaction Totals Loop
 * Contains transaction totals and related monetary information
 * @export
 * @interface CTTLoop
 */
export interface CTTLoop {
    /**
     * AMT - Monetary Amount Information
     * To indicate the total monetary amount
     * @type {Array<MonetaryAmountInformation>}
     * @memberof CTTLoop
     */
    monetaryAmountInformation?: Array<MonetaryAmountInformation> | null;
    /**
     * CTT - Transaction Totals
     * To transmit a hash total for a specific element in the transaction set
     * @type {Array<TransactionTotals>}
     * @memberof CTTLoop
     */
    transactionTotals?: Array<TransactionTotals> | null;
}
/**
 * Carrier Details (Routing Sequence/Transit Time) (TD5) - Carrier and routing information (REUSABLE)
 * @export
 * @interface CarrierDetailsRoutingSequenceTransitTime
 */
export interface CarrierDetailsRoutingSequenceTransitTime {
    /**
     * Identification Code
     * @type {string}
     * @memberof CarrierDetailsRoutingSequenceTransitTime
     */
    identificationCode?: string | null;
    /**
     * Identification Code Qualifier
     * @type {string}
     * @memberof CarrierDetailsRoutingSequenceTransitTime
     */
    identificationCodeQualifier?: string | null;
    /**
     * Location Identifier
     * @type {string}
     * @memberof CarrierDetailsRoutingSequenceTransitTime
     */
    locationIdentifier?: string | null;
    /**
     * Location Qualifier
     * @type {string}
     * @memberof CarrierDetailsRoutingSequenceTransitTime
     */
    locationQualifier?: string | null;
}
/**
 * Currency (CUR) - Identifies the monetary unit
 * @export
 * @interface Currency
 */
export interface Currency {
    /**
     * Currency Code (e.g., USD, EUR, CAD)
     * @type {string}
     * @memberof Currency
     */
    currencyCode?: string | null;
    /**
     * Entity Identifier Code
     * @type {string}
     * @memberof Currency
     */
    entityIdentifierCode?: string | null;
}
/**
 * Date/Time Reference (DTM) - Date and time information (REUSABLE)
 * @export
 * @interface DateTimeReference
 */
export interface DateTimeReference {
    /**
     * Date (CCYYMMDD format)
     * @type {string}
     * @memberof DateTimeReference
     */
    date?: string | null;
    /**
     * Date/Time Qualifier
     * @type {string}
     * @memberof DateTimeReference
     */
    dateTimeQualifier?: string | null;
    /**
     * Time (HHMM or HHMMSS format)
     * @type {string}
     * @memberof DateTimeReference
     */
    time?: string | null;
    /**
     * Time Code
     * @type {string}
     * @memberof DateTimeReference
     */
    timeCode?: string | null;
}
/**
 * Extended Reference Information (N9) - Extended reference information (REUSABLE)
 * @export
 * @interface ExtendedReferenceInformation
 */
export interface ExtendedReferenceInformation {
    /**
     * Free-form Description
     * @type {string}
     * @memberof ExtendedReferenceInformation
     */
    freeFormDescription?: string | null;
    /**
     * Reference Identification
     * @type {string}
     * @memberof ExtendedReferenceInformation
     */
    referenceIdentification?: string | null;
    /**
     * Reference Identification Qualifier
     * @type {string}
     * @memberof ExtendedReferenceInformation
     */
    referenceIdentificationQualifier?: string | null;
}
/**
 * FOB Related Instructions (FOB) - Free on board instructions
 * @export
 * @interface FOBRelatedInstructions
 */
export interface FOBRelatedInstructions {
    /**
     * 
     * @type {string}
     * @memberof FOBRelatedInstructions
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FOBRelatedInstructions
     */
    description1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FOBRelatedInstructions
     */
    locationQualifier?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FOBRelatedInstructions
     */
    locationQualifier1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FOBRelatedInstructions
     */
    shipmentMethodOfPaymentCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FOBRelatedInstructions
     */
    transportationTermsCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FOBRelatedInstructions
     */
    transportationTermsQualifierCode?: string | null;
}
/**
 * Geographic Location (N4) - City, state, postal code, and country information
 * @export
 * @interface GeographicLocation
 */
export interface GeographicLocation {
    /**
     * City Name
     * @type {string}
     * @memberof GeographicLocation
     */
    cityName?: string | null;
    /**
     * Country Code
     * @type {string}
     * @memberof GeographicLocation
     */
    countryCode?: string | null;
    /**
     * Location Identifier
     * @type {string}
     * @memberof GeographicLocation
     */
    locationIdentifier?: string | null;
    /**
     * Location Qualifier
     * @type {string}
     * @memberof GeographicLocation
     */
    locationQualifier?: string | null;
    /**
     * Postal Code
     * @type {string}
     * @memberof GeographicLocation
     */
    postalCode?: string | null;
    /**
     * State or Province Code
     * @type {string}
     * @memberof GeographicLocation
     */
    stateOrProvinceCode?: string | null;
}
/**
 * IT1 Loop - Invoice Line Item Loop
 * @export
 * @interface IT1Loop
 */
export interface IT1Loop {
    /**
     * 
     * @type {Array<AdditionalItemData>}
     * @memberof IT1Loop
     */
    additionalItemData?: Array<AdditionalItemData> | null;
    /**
     * 
     * @type {Array<BaselineItemDataInvoice>}
     * @memberof IT1Loop
     */
    baselineItemDataInvoice?: Array<BaselineItemDataInvoice> | null;
    /**
     * 
     * @type {Array<DateTimeReference>}
     * @memberof IT1Loop
     */
    dateTimeReference?: Array<DateTimeReference> | null;
    /**
     * 
     * @type {Array<ItemPhysicalDetails>}
     * @memberof IT1Loop
     */
    itemPhysicalDetails?: Array<ItemPhysicalDetails> | null;
    /**
     * 
     * @type {Array<PIDLoop>}
     * @memberof IT1Loop
     */
    piDLoop?: Array<PIDLoop> | null;
    /**
     * 
     * @type {Array<PricingInformation>}
     * @memberof IT1Loop
     */
    pricingInformation?: Array<PricingInformation> | null;
    /**
     * 
     * @type {Array<TaxInformation>}
     * @memberof IT1Loop
     */
    taxInformation?: Array<TaxInformation> | null;
}
/**
 * Item Physical Details (PO4) - Physical characteristics of items
 * @export
 * @interface ItemPhysicalDetails
 */
export interface ItemPhysicalDetails {
    /**
     * Gross Volume per Pack
     * @type {string}
     * @memberof ItemPhysicalDetails
     */
    grossVolumePerPack?: string | null;
    /**
     * Gross Weight per Pack
     * @type {string}
     * @memberof ItemPhysicalDetails
     */
    grossWeightPerPack?: string | null;
    /**
     * Height
     * @type {string}
     * @memberof ItemPhysicalDetails
     */
    height?: string | null;
    /**
     * Length
     * @type {string}
     * @memberof ItemPhysicalDetails
     */
    length?: string | null;
    /**
     * Pack
     * @type {string}
     * @memberof ItemPhysicalDetails
     */
    pack?: string | null;
    /**
     * Packaging Code
     * @type {string}
     * @memberof ItemPhysicalDetails
     */
    packagingCode?: string | null;
    /**
     * Size
     * @type {string}
     * @memberof ItemPhysicalDetails
     */
    size?: string | null;
    /**
     * Unit or Basis for Measurement Code
     * @type {string}
     * @memberof ItemPhysicalDetails
     */
    unitOrBasisForMeasurementCode?: string | null;
    /**
     * Unit or Basis for Measurement Code 1
     * @type {string}
     * @memberof ItemPhysicalDetails
     */
    unitOrBasisForMeasurementCode1?: string | null;
    /**
     * Unit or Basis for Measurement Code 2
     * @type {string}
     * @memberof ItemPhysicalDetails
     */
    unitOrBasisForMeasurementCode2?: string | null;
    /**
     * Unit or Basis for Measurement Code 3
     * @type {string}
     * @memberof ItemPhysicalDetails
     */
    unitOrBasisForMeasurementCode3?: string | null;
    /**
     * Weight Qualifier
     * @type {string}
     * @memberof ItemPhysicalDetails
     */
    weightQualifier?: string | null;
    /**
     * Width
     * @type {string}
     * @memberof ItemPhysicalDetails
     */
    width?: string | null;
}
/**
 * Monetary Amount Information (AMT) - Monetary amount information (REUSABLE)
 * @export
 * @interface MonetaryAmountInformation
 */
export interface MonetaryAmountInformation {
    /**
     * Amount Qualifier Code
     * @type {string}
     * @memberof MonetaryAmountInformation
     */
    amountQualifierCode?: string | null;
    /**
     * Monetary Amount
     * @type {number}
     * @memberof MonetaryAmountInformation
     */
    monetaryAmount?: number | null;
}
/**
 * N1 Loop - Party Identification Loop
 * Contains party information including identification, additional names, location, and geographic details
 * @export
 * @interface N1Loop
 */
export interface N1Loop {
    /**
     * N2 - Additional Name Information
     * To specify additional names or those longer than 35 characters in length
     * @type {Array<AdditionalNameInformation>}
     * @memberof N1Loop
     */
    additionalNameInformation?: Array<AdditionalNameInformation> | null;
    /**
     * PER - Administrative Communications Contact
     * To identify a person or office to whom administrative communications should be directed
     * @type {Array<AdministrativeCommunicationsContact>}
     * @memberof N1Loop
     */
    administrativeCommunicationsContact?: Array<AdministrativeCommunicationsContact> | null;
    /**
     * N4 - Geographic Location
     * To specify the geographic place of the named party
     * @type {Array<GeographicLocation>}
     * @memberof N1Loop
     */
    geographicLocation?: Array<GeographicLocation> | null;
    /**
     * N1 - Party Identification
     * To identify a party by type of organization, name, and code
     * @type {Array<PartyIdentification>}
     * @memberof N1Loop
     */
    partyIdentification?: Array<PartyIdentification> | null;
    /**
     * N3 - Party Location
     * To specify the location of the named party
     * @type {Array<PartyLocation>}
     * @memberof N1Loop
     */
    partyLocation?: Array<PartyLocation> | null;
    /**
     * REF - Reference Information
     * To specify identifying information
     * @type {Array<ReferenceInformation>}
     * @memberof N1Loop
     */
    referenceInformation?: Array<ReferenceInformation> | null;
}
/**
 * N9 Loop - Extended Reference Information Loop
 * Contains Extended Reference Information and related Message Text segments
 * @export
 * @interface N9Loop
 */
export interface N9Loop {
    /**
     * N9 - Extended Reference Information
     * To transmit identifying information as specified by the Reference Identification Qualifier
     * @type {Array<ExtendedReferenceInformation>}
     * @memberof N9Loop
     */
    extendedReferenceInformation?: Array<ExtendedReferenceInformation> | null;
    /**
     * MSG - Message Text
     * To provide a free-form format that allows the transmission of text information
     * @type {Array<Text>}
     * @memberof N9Loop
     */
    messageText?: Array<Text> | null;
}
/**
 * PID Loop - Product/Item Description Loop
 * Contains product/item descriptions and related information
 * @export
 * @interface PIDLoop
 */
export interface PIDLoop {
    /**
     * PID - Product/Item Description
     * To describe a product or process in coded or free-form format
     * @type {Array<ProductItemDescription>}
     * @memberof PIDLoop
     */
    productItemDescription?: Array<ProductItemDescription> | null;
}
/**
 * PO1 Loop - Baseline Item Data Loop
 * Contains complete line item information including baseline data, pricing, physical details, and related segments
 * @export
 * @interface PO1Loop
 */
export interface PO1Loop {
    /**
     * PER - Administrative Communications Contact
     * To identify a person or office to whom administrative communications should be directed
     * @type {Array<AdministrativeCommunicationsContact>}
     * @memberof PO1Loop
     */
    administrativeCommunicationsContact?: Array<AdministrativeCommunicationsContact> | null;
    /**
     * PO1 - Baseline Item Data
     * To specify basic and most frequently used line item data
     * @type {Array<BaselineItemData>}
     * @memberof PO1Loop
     */
    baselineItemData?: Array<BaselineItemData> | null;
    /**
     * TD5 - Carrier Details (Routing Sequence/Transit Time)
     * To specify the carrier and sequence of routing and provide transit time information
     * @type {Array<CarrierDetailsRoutingSequenceTransitTime>}
     * @memberof PO1Loop
     */
    carrierDetailsRoutingSequenceTransitTime?: Array<CarrierDetailsRoutingSequenceTransitTime> | null;
    /**
     * IT8 - Conditions of Sale
     * To specify the conditions under which the sale is made
     * @type {Array<SalesRequirements>}
     * @memberof PO1Loop
     */
    conditionsOfSale?: Array<SalesRequirements> | null;
    /**
     * CUR - Currency
     * To specify the currency (dollars, pounds, francs, etc.) used in a transaction
     * @type {Array<Currency>}
     * @memberof PO1Loop
     */
    currency?: Array<Currency> | null;
    /**
     * DTM - Date/Time Reference
     * To specify pertinent dates and times
     * @type {Array<DateTimeReference>}
     * @memberof PO1Loop
     */
    dateTimeReference?: Array<DateTimeReference> | null;
    /**
     * DIS - Discount Detail
     * To specify the exact type and terms of various discount information
     * @type {Array<MonetaryAmountInformation>}
     * @memberof PO1Loop
     */
    discountDetail?: Array<MonetaryAmountInformation> | null;
    /**
     * INC - Installment Information
     * To specify installment billing arrangement information
     * @type {Array<MonetaryAmountInformation>}
     * @memberof PO1Loop
     */
    installmentInformation?: Array<MonetaryAmountInformation> | null;
    /**
     * LIN - Item Identification
     * To specify basic item identification data
     * @type {Array<BaselineItemData>}
     * @memberof PO1Loop
     */
    itemIdentification?: Array<BaselineItemData> | null;
    /**
     * PO4 - Item Physical Details
     * To specify physical measurements or counts, including dimensions, tolerances, variances, and weights
     * @type {Array<ItemPhysicalDetails>}
     * @memberof PO1Loop
     */
    itemPhysicalDetails?: Array<ItemPhysicalDetails> | null;
    /**
     * LDT - Lead Time
     * To specify lead time for availability of products and services
     * @type {Array<DateTimeReference>}
     * @memberof PO1Loop
     */
    leadTime?: Array<DateTimeReference> | null;
    /**
     * LS/LE - Loop Header/Loop Trailer
     * To indicate that the next segment begins a loop
     * @type {Array<Text>}
     * @memberof PO1Loop
     */
    loopHeaderTrailer?: Array<Text> | null;
    /**
     * AMT - Monetary Amount Information
     * To indicate the total monetary amount
     * @type {Array<MonetaryAmountInformation>}
     * @memberof PO1Loop
     */
    monetaryAmountInformation?: Array<MonetaryAmountInformation> | null;
    /**
     * N1 Loop - Party Identification Loop
     * Contains party information for the line item
     * @type {Array<N1Loop>}
     * @memberof PO1Loop
     */
    n1Loop?: Array<N1Loop> | null;
    /**
     * PKG - Marking, Packaging, Loading
     * To describe marking, packaging, loading, and unloading requirements
     * @type {Array<Text>}
     * @memberof PO1Loop
     */
    packagingInformation?: Array<Text> | null;
    /**
     * PKG - Marking, Packaging, Loading Loop
     * Contains packaging information and related details
     * @type {Array<Text>}
     * @memberof PO1Loop
     */
    packagingLoop?: Array<Text> | null;
    /**
     * PWK - Paperwork
     * To identify the type or transmission or both of paperwork or supporting information
     * @type {Array<Text>}
     * @memberof PO1Loop
     */
    paperwork?: Array<Text> | null;
    /**
     * PWK - Paperwork Loop
     * Contains paperwork identification and related information
     * @type {Array<Text>}
     * @memberof PO1Loop
     */
    paperworkLoop?: Array<Text> | null;
    /**
     * PID - Product/Item Description
     * To describe a product or process in coded or free-form format
     * @type {Array<PIDLoop>}
     * @memberof PO1Loop
     */
    piDLoop?: Array<PIDLoop> | null;
    /**
     * CTP - Pricing Information
     * To specify pricing information
     * @type {Array<CTPLoop>}
     * @memberof PO1Loop
     */
    pricingLoop?: Array<CTPLoop> | null;
    /**
     * PID Loop - Product/Item Description Loop
     * Contains product/item descriptions and related information
     * @type {Array<PIDLoop>}
     * @memberof PO1Loop
     */
    productItemDescriptionLoop?: Array<PIDLoop> | null;
    /**
     * REF - Reference Information
     * To specify identifying information
     * @type {Array<ReferenceInformation>}
     * @memberof PO1Loop
     */
    referenceInformation?: Array<ReferenceInformation> | null;
    /**
     * CSH - Sales Requirements
     * To specify sales conditions
     * @type {Array<SalesRequirements>}
     * @memberof PO1Loop
     */
    salesRequirements?: Array<SalesRequirements> | null;
    /**
     * SI - Service Characteristic Identification
     * To specify service characteristic data
     * @type {Array<ProductItemDescription>}
     * @memberof PO1Loop
     */
    serviceCharacteristic?: Array<ProductItemDescription> | null;
    /**
     * SAC - Service, Promotion, Allowance, or Charge Information
     * To request or identify a service, promotion, allowance, or charge; or to report a condition
     * @type {Array<SACLoop>}
     * @memberof PO1Loop
     */
    servicePromotionAllowanceChargeLoop?: Array<SACLoop> | null;
    /**
     * SLN - Subline Item Detail
     * To specify product subline detail item data
     * @type {Array<BaselineItemData>}
     * @memberof PO1Loop
     */
    sublineItemDetail?: Array<BaselineItemData> | null;
    /**
     * ITD - Terms of Sale/Deferred Terms of Sale
     * To specify terms of sale
     * @type {Array<TermsOfSaleDeferredTermsOfSale>}
     * @memberof PO1Loop
     */
    termsOfSale?: Array<TermsOfSaleDeferredTermsOfSale> | null;
}
/**
 * Party Identification (N1) - Name and identification information
 * @export
 * @interface PartyIdentification
 */
export interface PartyIdentification {
    /**
     * Entity Identifier Code
     * @type {string}
     * @memberof PartyIdentification
     */
    entityIdentifierCode?: string | null;
    /**
     * Identification Code
     * @type {string}
     * @memberof PartyIdentification
     */
    identificationCode?: string | null;
    /**
     * Identification Code Qualifier
     * @type {string}
     * @memberof PartyIdentification
     */
    identificationCodeQualifier?: string | null;
    /**
     * Name
     * @type {string}
     * @memberof PartyIdentification
     */
    name?: string | null;
}
/**
 * Party Location (N3) - Address information
 * @export
 * @interface PartyLocation
 */
export interface PartyLocation {
    /**
     * Address Information
     * @type {string}
     * @memberof PartyLocation
     */
    addressInformation?: string | null;
}
/**
 * Pricing Information (CTP) - Pricing information for items
 * @export
 * @interface PricingInformation
 */
export interface PricingInformation {
    /**
     * 
     * @type {string}
     * @memberof PricingInformation
     */
    classOfTradeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PricingInformation
     */
    multiplier5?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PricingInformation
     */
    priceIdentifierCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PricingInformation
     */
    priceMultiplierQualifier?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PricingInformation
     */
    unitPrice?: string | null;
}
/**
 * Product/Item Description (PID) - Product description information (REUSABLE)
 * @export
 * @interface ProductItemDescription
 */
export interface ProductItemDescription {
    /**
     * Description
     * @type {string}
     * @memberof ProductItemDescription
     */
    description?: string | null;
    /**
     * Item Description Type Code
     * @type {string}
     * @memberof ProductItemDescription
     */
    itemDescriptionTypeCode?: string | null;
    /**
     * Product/Process Characteristic Code
     * @type {string}
     * @memberof ProductItemDescription
     */
    productProcessCharacteristicCode?: string | null;
}
/**
 * Reference Information (REF) - Reference identification information (REUSABLE)
 * @export
 * @interface ReferenceInformation
 */
export interface ReferenceInformation {
    /**
     * Reference Identification
     * @type {string}
     * @memberof ReferenceInformation
     */
    referenceIdentification?: string | null;
    /**
     * Reference Identification Qualifier
     * @type {string}
     * @memberof ReferenceInformation
     */
    referenceIdentificationQualifier?: string | null;
}
/**
 * SAC Loop - Service, Promotion, Allowance, or Charge Information Loop
 * Contains Service/Promotion/Allowance/Charge Information segments
 * @export
 * @interface SACLoop
 */
export interface SACLoop {
    /**
     * SAC01 - Allowance or Charge Indicator
     * Code which indicates an allowance or charge for the service specified
     * @type {Array<ServicePromotionAllowanceOrChargeInformation>}
     * @memberof SACLoop
     */
    servicePromotionAllowanceOrChargeInformation?: Array<ServicePromotionAllowanceOrChargeInformation> | null;
}
/**
 * Sales Requirements (SAL) - Sales information
 * @export
 * @interface SalesRequirements
 */
export interface SalesRequirements {
    /**
     * Action Code
     * @type {string}
     * @memberof SalesRequirements
     */
    actionCode?: string | null;
    /**
     * Amount
     * @type {string}
     * @memberof SalesRequirements
     */
    amount?: string | null;
    /**
     * Sales Requirement Code
     * @type {string}
     * @memberof SalesRequirements
     */
    salesRequirementCode?: string | null;
}
/**
 * Service, Promotion, Allowance, or Charge Information (SAC) - Service, allowance, or charge information (REUSABLE)
 * @export
 * @interface ServicePromotionAllowanceOrChargeInformation
 */
export interface ServicePromotionAllowanceOrChargeInformation {
    /**
     * Agency Qualifier Code
     * @type {string}
     * @memberof ServicePromotionAllowanceOrChargeInformation
     */
    agencyQualifierCode?: string | null;
    /**
     * Agency Service, Promotion, Allowance, or Charge Code
     * @type {string}
     * @memberof ServicePromotionAllowanceOrChargeInformation
     */
    agencyServicePromotionAllowanceOrChargeCode?: string | null;
    /**
     * Allowance/Charge Percent Qualifier
     * @type {string}
     * @memberof ServicePromotionAllowanceOrChargeInformation
     */
    allowanceChargePercentQualifier?: string | null;
    /**
     * Allowance or Charge Indicator Code
     * @type {string}
     * @memberof ServicePromotionAllowanceOrChargeInformation
     */
    allowanceOrChargeIndicatorCode?: string | null;
    /**
     * Allowance or Charge Method of Handling Code
     * @type {string}
     * @memberof ServicePromotionAllowanceOrChargeInformation
     */
    allowanceOrChargeMethodOfHandlingCode?: string | null;
    /**
     * Amount
     * @type {string}
     * @memberof ServicePromotionAllowanceOrChargeInformation
     */
    amount?: string | null;
    /**
     * Description
     * @type {string}
     * @memberof ServicePromotionAllowanceOrChargeInformation
     */
    description?: string | null;
    /**
     * Option Number
     * @type {string}
     * @memberof ServicePromotionAllowanceOrChargeInformation
     */
    optionNumber?: string | null;
    /**
     * Percent (Decimal Format)
     * @type {string}
     * @memberof ServicePromotionAllowanceOrChargeInformation
     */
    percentDecimalFormat?: string | null;
    /**
     * Reference Identification
     * @type {string}
     * @memberof ServicePromotionAllowanceOrChargeInformation
     */
    referenceIdentification?: string | null;
    /**
     * Service, Promotion, Allowance, or Charge Code
     * @type {string}
     * @memberof ServicePromotionAllowanceOrChargeInformation
     */
    servicePromotionAllowanceOrChargeCode?: string | null;
    /**
     * Unit or Basis for Measurement Code
     * @type {string}
     * @memberof ServicePromotionAllowanceOrChargeInformation
     */
    unitOrBasisForMeasurementCode?: string | null;
}
/**
 * 
 * @export
 * @interface ShippingAddress
 */
export interface ShippingAddress {
    /**
     * 
     * @type {string}
     * @memberof ShippingAddress
     */
    address1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingAddress
     */
    address2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingAddress
     */
    cityOrTown?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingAddress
     */
    companyOrOrganization?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingAddress
     */
    countryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingAddress
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingAddress
     */
    firstName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingAddress
     */
    lastNameOrSurname?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingAddress
     */
    postalOrZipCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingAddress
     */
    stateOrProvince?: string | null;
}
/**
 * Tax Information (TXI) - Tax details
 * @export
 * @interface TaxInformation
 */
export interface TaxInformation {
    /**
     * 
     * @type {string}
     * @memberof TaxInformation
     */
    dollarBasisForPercent?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TaxInformation
     */
    monetaryAmount?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TaxInformation
     */
    percentageAsDecimal?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TaxInformation
     */
    taxExemptCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TaxInformation
     */
    taxIdentificationNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TaxInformation
     */
    taxTypeCode?: string | null;
}
/**
 * Terms of Sale/Deferred Terms of Sale (ITD) - Terms of sale information
 * @export
 * @interface TermsOfSaleDeferredTermsOfSale
 */
export interface TermsOfSaleDeferredTermsOfSale {
    /**
     * Day of Month
     * @type {string}
     * @memberof TermsOfSaleDeferredTermsOfSale
     */
    dayOfMonth?: string | null;
    /**
     * Description
     * @type {string}
     * @memberof TermsOfSaleDeferredTermsOfSale
     */
    description?: string | null;
    /**
     * Payment Method Type Code
     * @type {string}
     * @memberof TermsOfSaleDeferredTermsOfSale
     */
    paymentMethodTypeCode?: string | null;
    /**
     * Terms Basis Date Code
     * @type {string}
     * @memberof TermsOfSaleDeferredTermsOfSale
     */
    termsBasisDateCode?: string | null;
    /**
     * Terms Discount Amount
     * @type {string}
     * @memberof TermsOfSaleDeferredTermsOfSale
     */
    termsDiscountAmount?: string | null;
    /**
     * Terms Net Days
     * @type {string}
     * @memberof TermsOfSaleDeferredTermsOfSale
     */
    termsNetDays?: string | null;
    /**
     * Terms Type Code
     * @type {string}
     * @memberof TermsOfSaleDeferredTermsOfSale
     */
    termsTypeCode?: string | null;
}
/**
 * Text (MSG) - Text information
 * @export
 * @interface Text
 */
export interface Text {
    /**
     * Textual Data
     * @type {string}
     * @memberof Text
     */
    textualData?: string | null;
}
/**
 * Total Monetary Value Summary (TDS) - Invoice total amounts
 * @export
 * @interface TotalMonetaryValueSummary
 */
export interface TotalMonetaryValueSummary {
    /**
     * 
     * @type {string}
     * @memberof TotalMonetaryValueSummary
     */
    amount?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TotalMonetaryValueSummary
     */
    amount1?: string | null;
}
/**
 * TransactionSet - Complete 850 Purchase Order Transaction Set
 * Contains all segments and loops for a complete EDI 850 Purchase Order transaction
 * @export
 * @interface TransactionSet
 */
export interface TransactionSet {
    /**
     * PER - Administrative Communications Contact
     * To identify a person or office to whom administrative communications should be directed
     * @type {Array<AdministrativeCommunicationsContact>}
     * @memberof TransactionSet
     */
    administrativeCommunicationsContact?: Array<AdministrativeCommunicationsContact> | null;
    /**
     * ADV - Advertising Demographic Information
     * To specify advertising demographic information
     * @type {Array<Text>}
     * @memberof TransactionSet
     */
    advertisingDemographicInformation?: Array<Text> | null;
    /**
     * BEG - Beginning Segment for Purchase Order
     * To indicate the beginning of the Purchase Order Transaction Set and transmit identifying numbers and dates
     * @type {Array<BeginningSegmentForPurchaseOrder>}
     * @memberof TransactionSet
     */
    beginningSegmentForPurchaseOrder?: Array<BeginningSegmentForPurchaseOrder> | null;
    /**
     * TD1 - Carrier Details (Quantity and Weight)
     * To specify the transportation details relative to commodity, weight, and quantity
     * @type {Array<CarrierDetailsRoutingSequenceTransitTime>}
     * @memberof TransactionSet
     */
    carrierDetails?: Array<CarrierDetailsRoutingSequenceTransitTime> | null;
    /**
     * TD3 - Carrier Details (Equipment)
     * To specify transportation details relating to the equipment used by the carrier
     * @type {Array<CarrierDetailsRoutingSequenceTransitTime>}
     * @memberof TransactionSet
     */
    carrierEquipmentDetails?: Array<CarrierDetailsRoutingSequenceTransitTime> | null;
    /**
     * TD4 - Carrier Details (Special Handling, or Hazardous Materials, or Both)
     * To specify transportation special handling requirements, or hazardous materials, or both
     * @type {Array<CarrierDetailsRoutingSequenceTransitTime>}
     * @memberof TransactionSet
     */
    carrierSpecialHandling?: Array<CarrierDetailsRoutingSequenceTransitTime> | null;
    /**
     * LM - Code Source Information
     * To transmit standard code list identification information
     * @type {Array<Text>}
     * @memberof TransactionSet
     */
    codeSourceInformation?: Array<Text> | null;
    /**
     * CTT Loop - Transaction Totals Loop
     * Contains transaction totals and related monetary information
     * @type {Array<CTTLoop>}
     * @memberof TransactionSet
     */
    ctTLoop?: Array<CTTLoop> | null;
    /**
     * CUR - Currency
     * To specify the currency (dollars, pounds, francs, etc.) used in a transaction
     * @type {Array<Currency>}
     * @memberof TransactionSet
     */
    currency?: Array<Currency> | null;
    /**
     * DTM - Date/Time Reference
     * To specify pertinent dates and times
     * @type {Array<DateTimeReference>}
     * @memberof TransactionSet
     */
    dateTimeReference?: Array<DateTimeReference> | null;
    /**
     * DIS - Discount Detail
     * To specify the exact type and terms of various discount information
     * @type {Array<MonetaryAmountInformation>}
     * @memberof TransactionSet
     */
    discountDetail?: Array<MonetaryAmountInformation> | null;
    /**
     * N9 Loop - Extended Reference Information Loop
     * Contains extended reference information and related text
     * @type {Array<N9Loop>}
     * @memberof TransactionSet
     */
    extendedReferenceLoop?: Array<N9Loop> | null;
    /**
     * INC - Installment Information
     * To specify installment billing arrangement information
     * @type {Array<MonetaryAmountInformation>}
     * @memberof TransactionSet
     */
    installmentInformation?: Array<MonetaryAmountInformation> | null;
    /**
     * LIN - Item Identification
     * To specify basic item identification data
     * @type {Array<BaselineItemData>}
     * @memberof TransactionSet
     */
    itemIdentification?: Array<BaselineItemData> | null;
    /**
     * LDT - Lead Time
     * To specify lead time for availability of products and services
     * @type {Array<DateTimeReference>}
     * @memberof TransactionSet
     */
    leadTime?: Array<DateTimeReference> | null;
    /**
     * MAN - Marks and Numbers
     * To indicate identifying marks and numbers for shipping containers
     * @type {Array<Text>}
     * @memberof TransactionSet
     */
    marksAndNumbers?: Array<Text> | null;
    /**
     * MEA - Measurements
     * To specify physical measurements or counts, including dimensions, tolerances, variances, and weights
     * @type {Array<ItemPhysicalDetails>}
     * @memberof TransactionSet
     */
    measurements?: Array<ItemPhysicalDetails> | null;
    /**
     * N1 Loop - Party Identification Loop
     * Contains party information including identification, additional names, location, and geographic details
     * @type {Array<N1Loop>}
     * @memberof TransactionSet
     */
    n1Loop?: Array<N1Loop> | null;
    /**
     * PO1 Loop - Baseline Item Data Loop
     * Contains complete line item information including baseline data, pricing, physical details, and related segments
     * @type {Array<PO1Loop>}
     * @memberof TransactionSet
     */
    pO1Loop?: Array<PO1Loop> | null;
    /**
     * PKG - Marking, Packaging, Loading
     * To describe marking, packaging, loading, and unloading requirements
     * @type {Array<Text>}
     * @memberof TransactionSet
     */
    packagingInformation?: Array<Text> | null;
    /**
     * PWK - Paperwork
     * To identify the type or transmission or both of paperwork or supporting information
     * @type {Array<Text>}
     * @memberof TransactionSet
     */
    paperwork?: Array<Text> | null;
    /**
     * PAM - Period Amount
     * To indicate a quantity, and/or amount for an identified period
     * @type {Array<MonetaryAmountInformation>}
     * @memberof TransactionSet
     */
    periodAmount?: Array<MonetaryAmountInformation> | null;
    /**
     * CTP - Pricing Information
     * To specify pricing information
     * @type {Array<PricingInformation>}
     * @memberof TransactionSet
     */
    pricingInformation?: Array<PricingInformation> | null;
    /**
     * PID - Product/Item Description
     * To describe a product or process in coded or free-form format
     * @type {Array<ProductItemDescription>}
     * @memberof TransactionSet
     */
    productItemDescription?: Array<ProductItemDescription> | null;
    /**
     * REF - Reference Information
     * To specify identifying information
     * @type {Array<ReferenceInformation>}
     * @memberof TransactionSet
     */
    referenceInformation?: Array<ReferenceInformation> | null;
    /**
     * CSH - Sales Requirements
     * To specify sales conditions
     * @type {Array<SalesRequirements>}
     * @memberof TransactionSet
     */
    salesRequirements?: Array<SalesRequirements> | null;
    /**
     * SI - Service Characteristic Identification
     * To specify service characteristic data
     * @type {Array<ProductItemDescription>}
     * @memberof TransactionSet
     */
    serviceCharacteristic?: Array<ProductItemDescription> | null;
    /**
     * SAC Loop - Service, Promotion, Allowance, or Charge Information Loop
     * To request or identify a service, promotion, allowance, or charge; or to report a condition
     * @type {Array<SACLoop>}
     * @memberof TransactionSet
     */
    servicePromotionAllowanceChargeLoop?: Array<SACLoop> | null;
    /**
     * SPI - Specification Identifier
     * To provide a description of the included specification or technical data items
     * @type {Array<ProductItemDescription>}
     * @memberof TransactionSet
     */
    specificationIdentifier?: Array<ProductItemDescription> | null;
    /**
     * TAX - Tax Reference
     * To specify tax information
     * @type {Array<ReferenceInformation>}
     * @memberof TransactionSet
     */
    taxReference?: Array<ReferenceInformation> | null;
    /**
     * ITD - Terms of Sale/Deferred Terms of Sale
     * To specify terms of sale
     * @type {Array<TermsOfSaleDeferredTermsOfSale>}
     * @memberof TransactionSet
     */
    termsOfSaleDeferredTermsOfSale?: Array<TermsOfSaleDeferredTermsOfSale> | null;
    /**
     * ST - Transaction Set Header
     * To indicate the start of a transaction set and to assign a control number
     * @type {Array<TransactionSetHeader>}
     * @memberof TransactionSet
     */
    transactionSetHeader?: Array<TransactionSetHeader> | null;
    /**
     * SE - Transaction Set Trailer
     * To indicate the end of the transaction set and provide the count of the transmitted segments (including the beginning (ST) and ending (SE) segments)
     * @type {Array<TransactionSetTrailer>}
     * @memberof TransactionSet
     */
    transactionSetTrailer?: Array<TransactionSetTrailer> | null;
}
/**
 * TransactionSet810 - Complete 810 Invoice Transaction Set (Contract DTO)
 * @export
 * @interface TransactionSet810
 */
export interface TransactionSet810 {
    /**
     * 
     * @type {Array<AdministrativeCommunicationsContact>}
     * @memberof TransactionSet810
     */
    administrativeCommunicationsContact?: Array<AdministrativeCommunicationsContact> | null;
    /**
     * 
     * @type {Array<BeginningSegmentForInvoice>}
     * @memberof TransactionSet810
     */
    beginningSegmentForInvoice?: Array<BeginningSegmentForInvoice> | null;
    /**
     * 
     * @type {Array<Currency>}
     * @memberof TransactionSet810
     */
    currency?: Array<Currency> | null;
    /**
     * 
     * @type {Array<DateTimeReference>}
     * @memberof TransactionSet810
     */
    dateTimeReference?: Array<DateTimeReference> | null;
    /**
     * 
     * @type {Array<FOBRelatedInstructions>}
     * @memberof TransactionSet810
     */
    fobRelatedInstructions?: Array<FOBRelatedInstructions> | null;
    /**
     * 
     * @type {Array<IT1Loop>}
     * @memberof TransactionSet810
     */
    iT1Loop?: Array<IT1Loop> | null;
    /**
     * 
     * @type {Array<MonetaryAmountInformation>}
     * @memberof TransactionSet810
     */
    monetaryAmountInformation?: Array<MonetaryAmountInformation> | null;
    /**
     * 
     * @type {Array<N1Loop>}
     * @memberof TransactionSet810
     */
    n1Loop?: Array<N1Loop> | null;
    /**
     * 
     * @type {Array<TaxInformation>}
     * @memberof TransactionSet810
     */
    taxInformation?: Array<TaxInformation> | null;
    /**
     * 
     * @type {Array<TermsOfSaleDeferredTermsOfSale>}
     * @memberof TransactionSet810
     */
    termsOfSaleDeferredTermsOfSale?: Array<TermsOfSaleDeferredTermsOfSale> | null;
    /**
     * 
     * @type {Array<TotalMonetaryValueSummary>}
     * @memberof TransactionSet810
     */
    totalMonetaryValueSummary?: Array<TotalMonetaryValueSummary> | null;
    /**
     * 
     * @type {Array<TransactionSetHeader>}
     * @memberof TransactionSet810
     */
    transactionSetHeader?: Array<TransactionSetHeader> | null;
    /**
     * 
     * @type {Array<TransactionSetTrailer>}
     * @memberof TransactionSet810
     */
    transactionSetTrailer?: Array<TransactionSetTrailer> | null;
    /**
     * 
     * @type {Array<TransactionTotals>}
     * @memberof TransactionSet810
     */
    transactionTotals?: Array<TransactionTotals> | null;
}
/**
 * Transaction Set Header (ST) - Starts a transaction set and assigns a control number
 * @export
 * @interface TransactionSetHeader
 */
export interface TransactionSetHeader {
    /**
     * Transaction Set Control Number
     * @type {string}
     * @memberof TransactionSetHeader
     */
    transactionSetControlNumber?: string | null;
    /**
     * Transaction Set Identifier Code (e.g., "850" for Purchase Order)
     * @type {string}
     * @memberof TransactionSetHeader
     */
    transactionSetIdentifierCode?: string | null;
}
/**
 * Transaction Set Trailer (SE) - Ends a transaction set and provides segment count
 * @export
 * @interface TransactionSetTrailer
 */
export interface TransactionSetTrailer {
    /**
     * Number of Included Segments (including ST and SE segments)
     * @type {string}
     * @memberof TransactionSetTrailer
     */
    numberOfIncludedSegments?: string | null;
    /**
     * Transaction Set Control Number (must match ST02)
     * @type {string}
     * @memberof TransactionSetTrailer
     */
    transactionSetControlNumber?: string | null;
}
/**
 * Transaction Totals (CTT) - Transaction set totals
 * @export
 * @interface TransactionTotals
 */
export interface TransactionTotals {
    /**
     * Hash Total
     * @type {string}
     * @memberof TransactionTotals
     */
    hashTotal?: string | null;
    /**
     * Number of Line Items
     * @type {string}
     * @memberof TransactionTotals
     */
    numberOfLineItems?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TransactionTotals
     */
    unitOrBasisForMeasurementCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TransactionTotals
     */
    unitOrBasisForMeasurementCode1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TransactionTotals
     */
    volume?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TransactionTotals
     */
    weight?: string | null;
}
/**
 * 
 * @export
 * @interface TranslatedShipment
 */
export interface TranslatedShipment {
    /**
     * 
     * @type {Array<TranslatedShipmentItem>}
     * @memberof TranslatedShipment
     */
    items?: Array<TranslatedShipmentItem> | null;
    /**
     * 
     * @type {string}
     * @memberof TranslatedShipment
     */
    orderId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof TranslatedShipment
     */
    shipmentNumber?: number;
    /**
     * 
     * @type {ShippingAddress}
     * @memberof TranslatedShipment
     */
    shippingAddress?: ShippingAddress;
    /**
     * 
     * @type {number}
     * @memberof TranslatedShipment
     */
    subtotal?: number;
    /**
     * 
     * @type {string}
     * @memberof TranslatedShipment
     */
    vendorCode?: string | null;
}
/**
 * 
 * @export
 * @interface TranslatedShipmentItem
 */
export interface TranslatedShipmentItem {
    /**
     * 
     * @type {string}
     * @memberof TranslatedShipmentItem
     */
    imageUrl?: string | null;
    /**
     * 
     * @type {number}
     * @memberof TranslatedShipmentItem
     */
    lineId?: number;
    /**
     * 
     * @type {string}
     * @memberof TranslatedShipmentItem
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TranslatedShipmentItem
     */
    originalOrderItemId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TranslatedShipmentItem
     */
    productCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof TranslatedShipmentItem
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof TranslatedShipmentItem
     */
    sku?: string | null;
    /**
     * 
     * @type {number}
     * @memberof TranslatedShipmentItem
     */
    subtotal?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TranslatedShipmentItem
     */
    unitPrice?: number;
    /**
     * 
     * @type {string}
     * @memberof TranslatedShipmentItem
     */
    variationProductCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof TranslatedShipmentItem
     */
    vendorContractedPrice?: number | null;
    /**
     * 
     * @type {string}
     * @memberof TranslatedShipmentItem
     */
    vendorSku?: string | null;
}
