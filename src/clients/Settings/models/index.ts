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
    createBy?: string | null;
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
    updateDate?: string | null;
}
/**
 * 
 * @export
 * @interface AllocationRebalancerSettings
 */
export interface AllocationRebalancerSettings {
    /**
     * 
     * @type {RebalancerAllocationSettings}
     * @memberof AllocationRebalancerSettings
     */
    backorderAllocations?: RebalancerAllocationSettings;
    /**
     * 
     * @type {boolean}
     * @memberof AllocationRebalancerSettings
     */
    isEnabled?: boolean;
}
/**
 * Contains settings for the auto-capture payment feature.
 * @export
 * @interface AutoCaptureJob
 */
export interface AutoCaptureJob {
    /**
     * How often this job should run in minutes.
     * @type {number}
     * @memberof AutoCaptureJob
     */
    interval?: number;
    /**
     * Specifies whether this job should run.
     * @type {boolean}
     * @memberof AutoCaptureJob
     */
    isEnabled?: boolean;
    /**
     * 
     * @type {FlexibleCapture}
     * @memberof AutoCaptureJob
     */
    flexibleCapture?: FlexibleCapture;
    /**
     * Specifies whether all available funds should be collected once any shipment is ready for capture.
     * @type {boolean}
     * @memberof AutoCaptureJob
     */
    forceCaptureOnFirstCapture?: boolean;
}
/**
 * 
 * @export
 * @interface AutoCaptureJobAllOf
 */
export interface AutoCaptureJobAllOf {
    /**
     * 
     * @type {FlexibleCapture}
     * @memberof AutoCaptureJobAllOf
     */
    flexibleCapture?: FlexibleCapture;
    /**
     * Specifies whether all available funds should be collected once any shipment is ready for capture.
     * @type {boolean}
     * @memberof AutoCaptureJobAllOf
     */
    forceCaptureOnFirstCapture?: boolean;
}
/**
 * 
 * @export
 * @interface AutoRelease
 */
export interface AutoRelease {
    /**
     * 
     * @type {boolean}
     * @memberof AutoRelease
     */
    enabled?: boolean | null;
    /**
     * 
     * @type {JobInterval}
     * @memberof AutoRelease
     */
    jobInterval?: JobInterval;
}
/**
 * 
 * @export
 * @interface B2BOrderRelease
 */
export interface B2BOrderRelease {
    /**
     * 
     * @type {number}
     * @memberof B2BOrderRelease
     */
    automaticReleaseOffset?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof B2BOrderRelease
     */
    isEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof B2BOrderRelease
     */
    releaseType?: string | null;
}
/**
 * 
 * @export
 * @interface B2BSettings
 */
export interface B2BSettings {
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof B2BSettings
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {BlanketOrderSettings}
     * @memberof B2BSettings
     */
    blanketOrderSettings?: BlanketOrderSettings;
    /**
     * 
     * @type {CallOffOrderSettings}
     * @memberof B2BSettings
     */
    callOffOrderSettings?: CallOffOrderSettings;
    /**
     * 
     * @type {OrchestratorSettings}
     * @memberof B2BSettings
     */
    orchestratorSettings?: OrchestratorSettings;
}
/**
 * 
 * @export
 * @interface BPMConfiguration
 */
export interface BPMConfiguration {
    /**
     * 
     * @type {string}
     * @memberof BPMConfiguration
     */
    containerId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BPMConfiguration
     */
    processId?: string | null;
}
/**
 * 
 * @export
 * @interface BlanketOrderSettings
 */
export interface BlanketOrderSettings {
    /**
     * 
     * @type {RingFenceScopeSettings}
     * @memberof BlanketOrderSettings
     */
    ringFenceScope?: RingFenceScopeSettings;
}
/**
 * 
 * @export
 * @interface CacheSettings
 */
export interface CacheSettings {
    /**
     * 
     * @type {string}
     * @memberof CacheSettings
     */
    cdnCacheBustKey?: string | null;
}
/**
 * 
 * @export
 * @interface CallOffOrderSettings
 */
export interface CallOffOrderSettings {
    /**
     * 
     * @type {RulesEngineJobSettings}
     * @memberof CallOffOrderSettings
     */
    releaseJob?: RulesEngineJobSettings;
}
/**
 * 
 * @export
 * @interface Cancellation
 */
export interface Cancellation {
    /**
     * 
     * @type {boolean}
     * @memberof Cancellation
     */
    onParentShipment?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof Cancellation
     */
    restrictedSteps?: Array<string> | null;
}
/**
 * Cart settings defined for this site.
 * @export
 * @interface CartSettings
 */
export interface CartSettings {
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CartSettings
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {boolean}
     * @memberof CartSettings
     */
    enableHandlingFee?: boolean;
    /**
     * Specifies the amount of time to reserve inventory in cart
     * @type {number}
     * @memberof CartSettings
     */
    reserveCartInventoryInterval?: number | null;
}
/**
 * Checkout and payment settings defined for this site. Can set which payment gateway to use, whether a shopper is required to login to place an order,
 * when credit cards are authorized and charged (when the order is placed or shipped), and, in the future, 
 * whether the checkout page displays an option for shoppers to receive your email marketing campaigns.
 * @export
 * @interface CheckoutSettings
 */
export interface CheckoutSettings {
    /**
     * 
     * @type {CustomerCheckoutSettings}
     * @memberof CheckoutSettings
     */
    customerCheckoutSettings?: CustomerCheckoutSettings;
    /**
     * 
     * @type {OrderProcessingSettings}
     * @memberof CheckoutSettings
     */
    orderProcessingSettings?: OrderProcessingSettings;
    /**
     * 
     * @type {PaymentSettings}
     * @memberof CheckoutSettings
     */
    paymentSettings?: PaymentSettings;
}
/**
 * 
 * @export
 * @interface ConfigurableShipmentRelease
 */
export interface ConfigurableShipmentRelease {
    /**
     * 
     * @type {B2BOrderRelease}
     * @memberof ConfigurableShipmentRelease
     */
    b2BOrderRelease?: B2BOrderRelease;
    /**
     * 
     * @type {boolean}
     * @memberof ConfigurableShipmentRelease
     */
    isEnabled?: boolean;
    /**
     * Indicates whether pricing should be refreshed when orders are edited.
     * @type {boolean}
     * @memberof ConfigurableShipmentRelease
     */
    refreshPricingOnOrderEdit?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof ConfigurableShipmentRelease
     */
    reserveInventoryOnOrderPendingShipment?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ConfigurableShipmentRelease
     */
    shipmentCreationOffset?: number | null;
}
/**
 * 
 * @export
 * @interface CreateShipmentsOnPendingReview
 */
export interface CreateShipmentsOnPendingReview {
    /**
     * 
     * @type {boolean}
     * @memberof CreateShipmentsOnPendingReview
     */
    isEnabled?: boolean;
}
/**
 * 
 * @export
 * @interface CustomRouteSettings
 */
export interface CustomRouteSettings {
    /**
     * 
     * @type {{ [key: string]: Mapping; }}
     * @memberof CustomRouteSettings
     */
    mappings?: { [key: string]: Mapping; } | null;
    /**
     * 
     * @type {Array<Route>}
     * @memberof CustomRouteSettings
     */
    routes?: Array<Route> | null;
    /**
     * 
     * @type {{ [key: string]: Validator; }}
     * @memberof CustomRouteSettings
     */
    validators?: { [key: string]: Validator; } | null;
}
/**
 * Checkout requirements for customers, for example, whether they must login before purchasing from your store. 
 * Other customized checkout requirements can be defined.
 * @export
 * @interface CustomerCheckoutSettings
 */
export interface CustomerCheckoutSettings {
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CustomerCheckoutSettings
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * Checkout login setting. Value can be either "LoginOptional," where shoppers are prompted to sign in
     * but are not required to do so, or "LoginRequired," where shopppers must login before purchasing.
     * @type {string}
     * @memberof CustomerCheckoutSettings
     */
    customerCheckoutType?: string | null;
}
/**
 * 
 * @export
 * @interface DeliveryConsolidation
 */
export interface DeliveryConsolidation {
    /**
     * AllowPartialFulfillment
     * @type {boolean}
     * @memberof DeliveryConsolidation
     */
    allowPartialFulfillment?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DeliveryConsolidation
     */
    cancellationOnParentShipment?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DeliveryConsolidation
     */
    forceDeliveryConsolidation?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DeliveryConsolidation
     */
    isEnabled?: boolean;
    /**
     * MultipleConsolidation
     * @type {boolean}
     * @memberof DeliveryConsolidation
     */
    multipleConsolidation?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof DeliveryConsolidation
     */
    restrictedCancellationSteps?: Array<string> | null;
    /**
     * 
     * @type {ShippingMethod}
     * @memberof DeliveryConsolidation
     */
    shippingMethodDeliveryConsolidation?: ShippingMethod;
}
/**
 * 
 * @export
 * @interface EmailTransactionSettings
 */
export interface EmailTransactionSettings {
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    accountCreated?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    accountDenied?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    accountInactive?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    backInStock?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    backorder?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    curbsideReady?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    customerAtCurbside?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    customerIntransit?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    deliveryDateUpdated?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    digitalItemFulfilled?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    gatewayGiftCardCreated?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    giftCardCreated?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    intransitConfirmation?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    itemSubstituted?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    orderCancellation?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    orderCancellationFailed?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    orderChanged?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    orderFulfillmentDetailsChanged?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    orderItemsCanceled?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    orderPickupReady?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    orderPickupReminder?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    orderShipped?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    otpForLogin?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    partialCurbsideReady?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    partialPickupReady?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    quoteExpired?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    quoteInReview?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    quoteReadyForCheckout?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    readyForDelivery?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    refundCreated?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    returnAuthorized?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    returnCancelled?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    returnClosed?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    returnCreated?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    returnLabelAdded?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    returnRejected?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    returnUpdated?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    shipmentAssigned?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    shipmentBackorderDateChanged?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    shipmentConfirmation?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    shipmentItemCanceled?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    shopperEmailUpdated?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    shopperLoginCreated?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    shopperPasswordReset?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    shopperPasswordUpdated?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    storeCreditCreated?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    storeCreditUpdated?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    subscriptionActivated?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    subscriptionCancelled?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    subscriptionErrored?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    subscriptionFrequencyUpdated?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    subscriptionItemAdded?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    subscriptionItemQuantityUpdated?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    subscriptionItemsCancelled?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    subscriptionNextOrderDateUpdated?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    subscriptionOrderReminder?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    subscriptionOrderedNow?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    subscriptionPauseLimitReminder?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    subscriptionPaused?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    subscriptionPausedReminder?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    subscriptionPaymentUpdated?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    subscriptionShippingInfoUpdated?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    subscriptionSkipped?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    substitutionPaymentRequired?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    transferShipmentCreated?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    transferShipmentCreatedByFulfiller?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTransactionSettings
     */
    transferShipmentShipped?: boolean | null;
}
/**
 * 
 * @export
 * @interface EmailTypeSetting
 */
export interface EmailTypeSetting {
    /**
     * 
     * @type {string}
     * @memberof EmailTypeSetting
     */
    bccEmailAddressOverride?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmailTypeSetting
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmailTypeSetting
     */
    replyToEmailAddressOverride?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmailTypeSetting
     */
    senderEmailAddressOverride?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmailTypeSetting
     */
    senderEmailAliasOverride?: string | null;
}
/**
 * This class describes credentials and enablement for the various third-party payment workflows that we will integrate with.
 * Examples include Paypal Express, Amazon Payments, Google Wallet, etc.
 * @export
 * @interface ExternalPaymentWorkflowDefinition
 */
export interface ExternalPaymentWorkflowDefinition {
    /**
     * 
     * @type {Array<ThirdPartyCredentialField>}
     * @memberof ExternalPaymentWorkflowDefinition
     */
    credentials?: Array<ThirdPartyCredentialField> | null;
    /**
     * Information about this definition for display purposes in the 'Payment and Checkout Settings'
     * admin ui.  This field may contain valid html tags
     * @type {string}
     * @memberof ExternalPaymentWorkflowDefinition
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExternalPaymentWorkflowDefinition
     */
    fullyQualifiedName?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ExternalPaymentWorkflowDefinition
     */
    isEnabled?: boolean;
    /**
     * Indicates if this is a legacy implementation using ARC only
     * or using the new extensible implementation.
     * @type {boolean}
     * @memberof ExternalPaymentWorkflowDefinition
     */
    isLegacy?: boolean | null;
    /**
     * Should be one of Contracts.Constants.ThirdPartyWorkflowNames.
     * @type {string}
     * @memberof ExternalPaymentWorkflowDefinition
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExternalPaymentWorkflowDefinition
     */
    namespace?: string | null;
}
/**
 * Contains settings specifying whether the auto-capture payment feature should consider pre-fulfilled shipments.
 * @export
 * @interface FlexibleCapture
 */
export interface FlexibleCapture {
    /**
     * 
     * @type {FlexibleCaptureFlow}
     * @memberof FlexibleCapture
     */
    bopisFlow?: FlexibleCaptureFlow;
    /**
     * 
     * @type {FlexibleCaptureFlow}
     * @memberof FlexibleCapture
     */
    deliveryFlow?: FlexibleCaptureFlow;
    /**
     * 
     * @type {FlexibleCaptureFlow}
     * @memberof FlexibleCapture
     */
    sthFlow?: FlexibleCaptureFlow;
}
/**
 * Specifies a pre-fulfilled shipment state that is eligible for capture.
 * @export
 * @interface FlexibleCaptureFlow
 */
export interface FlexibleCaptureFlow {
    /**
     * Look at the `ShipmentState` or the `ShipmentWorkflow`.
     * @type {string}
     * @memberof FlexibleCaptureFlow
     */
    captureBy?: string | null;
    /**
     * Which shipment states or workflow statuses are considered eligible for capture.
     * @type {Array<string>}
     * @memberof FlexibleCaptureFlow
     */
    captureOn?: Array<string> | null;
}
/**
 * Contains settings for when payments should be auto-captured regardless of shipment status.
 * @export
 * @interface ForceCaptureJob
 */
export interface ForceCaptureJob {
    /**
     * How often this job should run in minutes.
     * @type {number}
     * @memberof ForceCaptureJob
     */
    interval?: number;
    /**
     * Specifies whether this job should run.
     * @type {boolean}
     * @memberof ForceCaptureJob
     */
    isEnabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ForceCaptureJob
     */
    captureAfterDays?: number;
}
/**
 * 
 * @export
 * @interface ForceCaptureJobAllOf
 */
export interface ForceCaptureJobAllOf {
    /**
     * 
     * @type {number}
     * @memberof ForceCaptureJobAllOf
     */
    captureAfterDays?: number;
}
/**
 * 
 * @export
 * @interface ForceSTHConsolidationOnSplitShipments
 */
export interface ForceSTHConsolidationOnSplitShipments {
    /**
     * 
     * @type {boolean}
     * @memberof ForceSTHConsolidationOnSplitShipments
     */
    isEnabled?: boolean;
}
/**
 * 
 * @export
 * @interface FulfillerSettings
 */
export interface FulfillerSettings {
    /**
     * 
     * @type {boolean}
     * @memberof FulfillerSettings
     */
    editShipment?: boolean;
}
/**
 * 
 * @export
 * @interface FulfillmentJob
 */
export interface FulfillmentJob {
    /**
     * 
     * @type {number}
     * @memberof FulfillmentJob
     */
    interval?: number;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentJob
     */
    isEnabled?: boolean;
}
/**
 * 
 * @export
 * @interface FulfillmentJobSettings
 */
export interface FulfillmentJobSettings {
    /**
     * 
     * @type {PickupReminderJob}
     * @memberof FulfillmentJobSettings
     */
    pickupReminderJob?: PickupReminderJob;
    /**
     * 
     * @type {ReleaseBackorderJob}
     * @memberof FulfillmentJobSettings
     */
    releaseBackorderJob?: ReleaseBackorderJob;
}
/**
 * 
 * @export
 * @interface FulfillmentSettings
 */
export interface FulfillmentSettings {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentSettings
     */
    actionOnBOPISReject?: string | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof FulfillmentSettings
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {BPMConfiguration}
     * @memberof FulfillmentSettings
     */
    bpmConfiguration?: BPMConfiguration;
    /**
     * 
     * @type {ConfigurableShipmentRelease}
     * @memberof FulfillmentSettings
     */
    configurableShipmentRelease?: ConfigurableShipmentRelease;
    /**
     * 
     * @type {CreateShipmentsOnPendingReview}
     * @memberof FulfillmentSettings
     */
    createShipmentsOnPendingReview?: CreateShipmentsOnPendingReview;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentSettings
     */
    defaultBackOrderDays?: number | null;
    /**
     * 
     * @type {DeliveryConsolidation}
     * @memberof FulfillmentSettings
     */
    deliveryConsolidation?: DeliveryConsolidation;
    /**
     * 
     * @type {FulfillerSettings}
     * @memberof FulfillmentSettings
     */
    fulfillerSettings?: FulfillerSettings;
    /**
     * 
     * @type {FulfillmentJobSettings}
     * @memberof FulfillmentSettings
     */
    fulfillmentJobSettings?: FulfillmentJobSettings;
    /**
     * 
     * @type {FutureDateLimit}
     * @memberof FulfillmentSettings
     */
    futureDateLimit?: FutureDateLimit;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentSettings
     */
    futureInventoryEnabled?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentSettings
     */
    paymentVoidAndReauth?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentSettings
     */
    retainFlatRatePerOrder?: boolean | null;
    /**
     * 
     * @type {ShipToHomeConsolidation}
     * @memberof FulfillmentSettings
     */
    shipToHomeConsolidation?: ShipToHomeConsolidation;
    /**
     * 
     * @type {ShipToStore}
     * @memberof FulfillmentSettings
     */
    shipToStore?: ShipToStore;
    /**
     * 
     * @type {ShipmentsOnHold}
     * @memberof FulfillmentSettings
     */
    shipmentsOnHold?: ShipmentsOnHold;
    /**
     * 
     * @type {Substitution}
     * @memberof FulfillmentSettings
     */
    substitution?: Substitution;
}
/**
 * 
 * @export
 * @interface FutureDateLimit
 */
export interface FutureDateLimit {
    /**
     * 
     * @type {number}
     * @memberof FutureDateLimit
     */
    futureDateLimitQuantity?: number;
    /**
     * 
     * @type {string}
     * @memberof FutureDateLimit
     */
    futureDateLimitUnit?: string | null;
}
/**
 * 
 * @export
 * @interface Gateway
 */
export interface Gateway {
    /**
     * Returns true if Gateway CredentialsField is set. For security purposes, Gateway subresource CredentialFields will not be returned.
     * @type {boolean}
     * @memberof Gateway
     */
    areGatewayCredentialFieldsSet?: boolean;
    /**
     * 
     * @type {GatewayAccount}
     * @memberof Gateway
     */
    gatewayAccount?: GatewayAccount;
    /**
     * 
     * @type {GatewayDefinition}
     * @memberof Gateway
     */
    gatewayDefinition?: GatewayDefinition;
    /**
     * Which credit cards the Merchant supports
     * @type {Array<SiteGatewaySupportedCard>}
     * @memberof Gateway
     */
    siteGatewaySupportedCards?: Array<SiteGatewaySupportedCard> | null;
    /**
     * Which credit cards the Merchant supports
     * @type {Array<string>}
     * @memberof Gateway
     */
    supportedCards?: Array<string> | null;
}
/**
 * 
 * @export
 * @interface GatewayAccount
 */
export interface GatewayAccount {
    /**
     * 
     * @type {Array<string>}
     * @memberof GatewayAccount
     */
    binPatterns?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof GatewayAccount
     */
    countryCode?: string | null;
    /**
     * 
     * @type {Array<GatewayCredentialFieldValue>}
     * @memberof GatewayAccount
     */
    credentialFields?: Array<GatewayCredentialFieldValue> | null;
    /**
     * 
     * @type {string}
     * @memberof GatewayAccount
     */
    gatewayDefinitionId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GatewayAccount
     */
    id?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof GatewayAccount
     */
    isActive?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GatewayAccount
     */
    name?: string | null;
}
/**
 * 
 * @export
 * @interface GatewayCredentialFieldDefinition
 */
export interface GatewayCredentialFieldDefinition {
    /**
     * 
     * @type {number}
     * @memberof GatewayCredentialFieldDefinition
     */
    adminDisplayOrder?: number;
    /**
     * 
     * @type {string}
     * @memberof GatewayCredentialFieldDefinition
     */
    displayName?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof GatewayCredentialFieldDefinition
     */
    isPublic?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GatewayCredentialFieldDefinition
     */
    name?: string | null;
}
/**
 * 
 * @export
 * @interface GatewayCredentialFieldValue
 */
export interface GatewayCredentialFieldValue {
    /**
     * 
     * @type {boolean}
     * @memberof GatewayCredentialFieldValue
     */
    isValueSet?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GatewayCredentialFieldValue
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GatewayCredentialFieldValue
     */
    value?: string | null;
}
/**
 * 
 * @export
 * @interface GatewayDefinition
 */
export interface GatewayDefinition {
    /**
     * 
     * @type {Array<object>}
     * @memberof GatewayDefinition
     */
    administationUi?: Array<object> | null;
    /**
     * 
     * @type {string}
     * @memberof GatewayDefinition
     */
    countryCode?: string | null;
    /**
     * 
     * @type {Array<GatewayCredentialFieldDefinition>}
     * @memberof GatewayDefinition
     */
    credentialDefinitions?: Array<GatewayCredentialFieldDefinition> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof GatewayDefinition
     */
    features?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof GatewayDefinition
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GatewayDefinition
     */
    integrationImplTypeName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GatewayDefinition
     */
    name?: string | null;
    /**
     * 
     * @type {PreAuthorizeDefinition}
     * @memberof GatewayDefinition
     */
    preAuthorizeDefinition?: PreAuthorizeDefinition;
    /**
     * 
     * @type {string}
     * @memberof GatewayDefinition
     */
    prodServiceURL?: string | null;
    /**
     * 
     * @type {Array<SupportedCard>}
     * @memberof GatewayDefinition
     */
    supportedCards?: Array<SupportedCard> | null;
    /**
     * 
     * @type {string}
     * @memberof GatewayDefinition
     */
    testServiceURL?: string | null;
}
/**
 * 
 * @export
 * @interface GeneralSettings
 */
export interface GeneralSettings {
    /**
     * 
     * @type {boolean}
     * @memberof GeneralSettings
     */
    allowInvalidAddresses?: boolean | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof GeneralSettings
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {string}
     * @memberof GeneralSettings
     */
    bccEmailAddress?: string | null;
    /**
     * 
     * @type {CacheSettings}
     * @memberof GeneralSettings
     */
    cacheSettings?: CacheSettings;
    /**
     * 
     * @type {string}
     * @memberof GeneralSettings
     */
    customCdnHostName?: string | null;
    /**
     * 
     * @type {CustomRouteSettings}
     * @memberof GeneralSettings
     */
    customRoutes?: CustomRouteSettings;
    /**
     * 
     * @type {EmailTransactionSettings}
     * @memberof GeneralSettings
     */
    emailTransactionsOnlyOnRequest?: EmailTransactionSettings;
    /**
     * 
     * @type {Array<EmailTypeSetting>}
     * @memberof GeneralSettings
     */
    emailTypes?: Array<EmailTypeSetting> | null;
    /**
     * 
     * @type {string}
     * @memberof GeneralSettings
     */
    favIconMobilePath?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GeneralSettings
     */
    favIconPath?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GeneralSettings
     */
    googleAnalyticsCode?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof GeneralSettings
     */
    is2FAAlwaysRequired?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof GeneralSettings
     */
    is2FARequiredOnFingerprintChange?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof GeneralSettings
     */
    is2FARequiredOnRegionChange?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof GeneralSettings
     */
    isAddressValidationEnabled?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof GeneralSettings
     */
    isEmailOtpLoginAllowed?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof GeneralSettings
     */
    isGoogleAnalyticsEcommerceEnabled?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof GeneralSettings
     */
    isGoogleAnalyticsEnabled?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof GeneralSettings
     */
    isMozuWebSite?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GeneralSettings
     */
    isMultishipEnabled?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof GeneralSettings
     */
    isWishlistCreationEnabled?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof GeneralSettings
     */
    logoPath?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GeneralSettings
     */
    logoText?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GeneralSettings
     */
    missingImageSubstitute?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GeneralSettings
     */
    mobileTheme?: string | null;
    /**
     * 
     * @type {ReCaptchaSettings}
     * @memberof GeneralSettings
     */
    reCaptchaSettings?: ReCaptchaSettings;
    /**
     * 
     * @type {string}
     * @memberof GeneralSettings
     */
    replyToEmailAddress?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GeneralSettings
     */
    senderEmailAddress?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GeneralSettings
     */
    senderEmailAlias?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GeneralSettings
     */
    siteTimeFormat?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GeneralSettings
     */
    siteTimeZone?: string | null;
    /**
     * 
     * @type {Array<SMSTypeSetting>}
     * @memberof GeneralSettings
     */
    smsTypes?: Array<SMSTypeSetting> | null;
    /**
     * 
     * @type {EmailTransactionSettings}
     * @memberof GeneralSettings
     */
    supressedEmailTransactions?: EmailTransactionSettings;
    /**
     * 
     * @type {SMSTransactionSettings}
     * @memberof GeneralSettings
     */
    supressedSmsTransactions?: SMSTransactionSettings;
    /**
     * 
     * @type {string}
     * @memberof GeneralSettings
     */
    tabletTheme?: string | null;
    /**
     * 
     * @type {Array<TaxableTerritory>}
     * @memberof GeneralSettings
     */
    taxableTerritories?: Array<TaxableTerritory> | null;
    /**
     * 
     * @type {number}
     * @memberof GeneralSettings
     */
    templateSiteId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof GeneralSettings
     */
    theme?: string | null;
    /**
     * 
     * @type {ViewAuthorizations}
     * @memberof GeneralSettings
     */
    viewAuthorizations?: ViewAuthorizations;
    /**
     * 
     * @type {string}
     * @memberof GeneralSettings
     */
    websiteName?: string | null;
}
/**
 * 
 * @export
 * @interface InventoryExportJob
 */
export interface InventoryExportJob {
    /**
     * 
     * @type {boolean}
     * @memberof InventoryExportJob
     */
    isEnabled?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof InventoryExportJob
     */
    timesOfDay?: Array<string> | null;
}
/**
 * 
 * @export
 * @interface InventorySettings
 */
export interface InventorySettings {
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof InventorySettings
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {InventoryExportJob}
     * @memberof InventorySettings
     */
    inventoryExportJob?: InventoryExportJob;
    /**
     * 
     * @type {Array<LocationFulfillmentTypeSetting>}
     * @memberof InventorySettings
     */
    locationFulfillmentTypeSettings?: Array<LocationFulfillmentTypeSetting> | null;
}
/**
 * 
 * @export
 * @interface Job
 */
export interface Job {
    /**
     * 
     * @type {boolean}
     * @memberof Job
     */
    isEnabled?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof Job
     */
    timesOfDay?: Array<string> | null;
}
/**
 * 
 * @export
 * @interface JobInterval
 */
export interface JobInterval {
    /**
     * 
     * @type {string}
     * @memberof JobInterval
     */
    unit?: string | null;
    /**
     * 
     * @type {number}
     * @memberof JobInterval
     */
    value?: number | null;
}
/**
 * 
 * @export
 * @interface LocalizedContent
 */
export interface LocalizedContent {
    /**
     * 
     * @type {string}
     * @memberof LocalizedContent
     */
    localeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocalizedContent
     */
    value?: string | null;
}
/**
 * 
 * @export
 * @interface LocationFulfillmentTypeSetting
 */
export interface LocationFulfillmentTypeSetting {
    /**
     * 
     * @type {string}
     * @memberof LocationFulfillmentTypeSetting
     */
    id?: string | null;
}
/**
 * 
 * @export
 * @interface Mapping
 */
export interface Mapping {
    /**
     * 
     * @type {boolean}
     * @memberof Mapping
     */
    beforeRouting?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof Mapping
     */
    docId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Mapping
     */
    facetId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Mapping
     */
    listFqn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Mapping
     */
    mapTo?: string | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof Mapping
     */
    mappings?: { [key: string]: any; } | null;
    /**
     * 
     * @type {string}
     * @memberof Mapping
     */
    pattern?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Mapping
     */
    replacement?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Mapping
     */
    type?: string | null;
}
/**
 * 
 * @export
 * @interface MultipleConsolidation
 */
export interface MultipleConsolidation {
    /**
     * 
     * @type {boolean}
     * @memberof MultipleConsolidation
     */
    isEnabled?: boolean;
}
/**
 * 
 * @export
 * @interface OrchestratorSettings
 */
export interface OrchestratorSettings {
    /**
     * 
     * @type {AllocationRebalancerSettings}
     * @memberof OrchestratorSettings
     */
    allocationRebalancer?: AllocationRebalancerSettings;
    /**
     * 
     * @type {number}
     * @memberof OrchestratorSettings
     */
    interval?: number | null;
    /**
     * 
     * @type {string}
     * @memberof OrchestratorSettings
     */
    intervalUnit?: string | null;
    /**
     * 
     * @type {ReservationRebalancerSettings}
     * @memberof OrchestratorSettings
     */
    reservationRebalancer?: ReservationRebalancerSettings;
    /**
     * 
     * @type {ReservationsJobSettings}
     * @memberof OrchestratorSettings
     */
    reservationsJob?: ReservationsJobSettings;
    /**
     * 
     * @type {string}
     * @memberof OrchestratorSettings
     */
    runMode?: string | null;
}
/**
 * Contains settings for a job that can run on a regular basis.
 * @export
 * @interface OrderJob
 */
export interface OrderJob {
    /**
     * How often this job should run in minutes.
     * @type {number}
     * @memberof OrderJob
     */
    interval?: number;
    /**
     * Specifies whether this job should run.
     * @type {boolean}
     * @memberof OrderJob
     */
    isEnabled?: boolean;
}
/**
 * Contains settings for the auto-capture payment feature.
 * @export
 * @interface OrderJobSettings
 */
export interface OrderJobSettings {
    /**
     * 
     * @type {AutoCaptureJob}
     * @memberof OrderJobSettings
     */
    autoCaptureJob?: AutoCaptureJob;
    /**
     * 
     * @type {ForceCaptureJob}
     * @memberof OrderJobSettings
     */
    forceCaptureJob?: ForceCaptureJob;
}
/**
 * Order processing (credit card payment authorization) setting defined for this site. 
 * Can choose when the shopper’s credit card is authorized and charged. Possibilities include, "authorize and charge the shopper's credit card for the full 
 * order amount when the order is placed," "authorize the shopper's credit card for the full amount when the order is placed and charge the credit card when the order is shipped," or 
 * "authorize and charge the shopper's credit card for the full amount when the order is shipped."
 * @export
 * @interface OrderProcessingSettings
 */
export interface OrderProcessingSettings {
    /**
     * Abandoned Order Threshold in minutes indicates the number of minutes until a pending order is considered abandoned.
     * @type {number}
     * @memberof OrderProcessingSettings
     */
    abandonedOrderThresholdInMinutes?: number | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof OrderProcessingSettings
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * Gift card payment authorization setting. Options can be authorize and charge the shopper's credit card when the order is placed, "AuthorizeAndCaptureOnOrderPlacement," 
     * authorize the shopper's gift card when the order is placed and charge the gift card when it is shipped, "AuthorizeOnOrderPlacementAndCaptureOnOrderShipment," 
     * or authorize and charge the shopper's gift card for the full amount when the order is shipped, "AuthorizeAndCaptureOnOrderShipment."
     * @type {string}
     * @memberof OrderProcessingSettings
     */
    giftCardProcessingType?: string | null;
    /**
     * GiftCrd Refund/Credit flow, wither to existing or new giftcard
     * @type {string}
     * @memberof OrderProcessingSettings
     */
    giftCardRefundCreditProcessingType?: string | null;
    /**
     * Credit card payment authorization setting. Options can be authorize and charge the shopper's credit card when the order is placed, "AuthorizeAndCaptureOnOrderPlacement," 
     * authorize the shopper's credit card when the order is placed and charge the credit card when the shipped, "AuthorizeOnOrderPlacementAndCaptureOnOrderShipment," 
     * or authorize and charge the shopper's credit card for the full amount when the order is shipped, "AuthorizeAndCaptureOnOrderShipment."
     * @type {string}
     * @memberof OrderProcessingSettings
     */
    paymentProcessingFlowType?: string | null;
    /**
     * Order processing settings for Third party payments
     * Ex- ApplePay using AuthorizeOnOrderPlacementAndCaptureOnOrderShipment for processing orders
     * @type {Array<ThirdPartyPaymentSetting>}
     * @memberof OrderProcessingSettings
     */
    thirdPartyPaymentSettings?: Array<ThirdPartyPaymentSetting> | null;
    /**
     * Use the override price on products to calculate discounts
     * @type {boolean}
     * @memberof OrderProcessingSettings
     */
    useOverridePriceToCalculateDiscounts?: boolean;
}
/**
 * Payment gateway settings defined for this site. A payment gateway is an e-commerce application service provider that authorizes 
 * payments for e-businesses and online retailers. You can define multiple payment gateway settings but only one is active at a time. 
 * Authorize.net is the only payment gateway supported currently.
 * @export
 * @interface PaymentSettings
 */
export interface PaymentSettings {
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof PaymentSettings
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {Array<ExternalPaymentWorkflowDefinition>}
     * @memberof PaymentSettings
     */
    externalPaymentWorkflowDefinitions?: Array<ExternalPaymentWorkflowDefinition> | null;
    /**
     * 
     * @type {Array<Gateway>}
     * @memberof PaymentSettings
     */
    gateways?: Array<Gateway> | null;
    /**
     * 
     * @type {OrderJobSettings}
     * @memberof PaymentSettings
     */
    jobSettings?: OrderJobSettings;
    /**
     * 
     * @type {boolean}
     * @memberof PaymentSettings
     */
    payByMail?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PaymentSettings
     */
    paymentRanking?: string | null;
    /**
     * 
     * @type {PurchaseOrderPaymentDefinition}
     * @memberof PaymentSettings
     */
    purchaseOrder?: PurchaseOrderPaymentDefinition;
    /**
     * 
     * @type {string}
     * @memberof PaymentSettings
     */
    refundRanking?: string | null;
}
/**
 * 
 * @export
 * @interface PickupReminderJob
 */
export interface PickupReminderJob {
    /**
     * 
     * @type {number}
     * @memberof PickupReminderJob
     */
    interval?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PickupReminderJob
     */
    isEnabled?: boolean;
}
/**
 * 
 * @export
 * @interface PreAuthorizeDefinition
 */
export interface PreAuthorizeDefinition {
    /**
     * 
     * @type {number}
     * @memberof PreAuthorizeDefinition
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof PreAuthorizeDefinition
     */
    preAuthorizeProdUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PreAuthorizeDefinition
     */
    preAuthorizeTestUrl?: string | null;
    /**
     * 
     * @type {PreAuthorizeTransactionTypeDataContract}
     * @memberof PreAuthorizeDefinition
     */
    type?: PreAuthorizeTransactionTypeDataContract;
}
/**
 * 
 * @export
 * @interface PreAuthorizeTransactionTypeDataContract
 */
export interface PreAuthorizeTransactionTypeDataContract {
    /**
     * 
     * @type {string}
     * @memberof PreAuthorizeTransactionTypeDataContract
     */
    description?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PreAuthorizeTransactionTypeDataContract
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof PreAuthorizeTransactionTypeDataContract
     */
    type?: string | null;
}
/**
 * 
 * @export
 * @interface PurchaseOrderPaymentDefinition
 */
export interface PurchaseOrderPaymentDefinition {
    /**
     * Indicates whether another payment can be used with the purchase order
     * @type {boolean}
     * @memberof PurchaseOrderPaymentDefinition
     */
    allowSplitPayment?: boolean;
    /**
     * 
     * @type {Array<SiteSettingsPurchaseOrderCustomField>}
     * @memberof PurchaseOrderPaymentDefinition
     */
    customFields?: Array<SiteSettingsPurchaseOrderCustomField> | null;
    /**
     * Is purchase order payment enabled
     * @type {boolean}
     * @memberof PurchaseOrderPaymentDefinition
     */
    isEnabled?: boolean;
    /**
     * Allowed net terms
     * @type {Array<SiteSettingsPurchaseOrderPaymentTerm>}
     * @memberof PurchaseOrderPaymentDefinition
     */
    paymentTerms?: Array<SiteSettingsPurchaseOrderPaymentTerm> | null;
}
/**
 * 
 * @export
 * @interface ReCaptchaSettings
 */
export interface ReCaptchaSettings {
    /**
     * 
     * @type {Array<string>}
     * @memberof ReCaptchaSettings
     */
    actions?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof ReCaptchaSettings
     */
    secret?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReCaptchaSettings
     */
    siteKey?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ReCaptchaSettings
     */
    validScore?: number;
}
/**
 * 
 * @export
 * @interface RebalancerAllocationSettings
 */
export interface RebalancerAllocationSettings {
    /**
     * 
     * @type {boolean}
     * @memberof RebalancerAllocationSettings
     */
    allowPartialRelease?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RebalancerAllocationSettings
     */
    partialReleaseType?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof RebalancerAllocationSettings
     */
    useCurrentInventory?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RebalancerAllocationSettings
     */
    useFutureBeforeCurrent?: boolean;
}
/**
 * 
 * @export
 * @interface ReleaseBackorderJob
 */
export interface ReleaseBackorderJob {
    /**
     * 
     * @type {number}
     * @memberof ReleaseBackorderJob
     */
    interval?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ReleaseBackorderJob
     */
    isEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ReleaseBackorderJob
     */
    partialReleaseEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReleaseBackorderJob
     */
    partialReleaseType?: string | null;
}
/**
 * 
 * @export
 * @interface ReleaseBackorderJobAllOf
 */
export interface ReleaseBackorderJobAllOf {
    /**
     * 
     * @type {boolean}
     * @memberof ReleaseBackorderJobAllOf
     */
    partialReleaseEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReleaseBackorderJobAllOf
     */
    partialReleaseType?: string | null;
}
/**
 * 
 * @export
 * @interface ReservationRebalancerSettings
 */
export interface ReservationRebalancerSettings {
    /**
     * 
     * @type {boolean}
     * @memberof ReservationRebalancerSettings
     */
    isEnabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ReservationRebalancerSettings
     */
    shipDateBufferDays?: number | null;
}
/**
 * 
 * @export
 * @interface ReservationsJobSettings
 */
export interface ReservationsJobSettings {
    /**
     * 
     * @type {boolean}
     * @memberof ReservationsJobSettings
     */
    isEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ReservationsJobSettings
     */
    useCurrentInventory?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ReservationsJobSettings
     */
    useFutureBeforeCurrent?: boolean;
}
/**
 * 
 * @export
 * @interface ReturnSettings
 */
export interface ReturnSettings {
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof ReturnSettings
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {boolean}
     * @memberof ReturnSettings
     */
    createLabelOnFulfillment?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ReturnSettings
     */
    defaultProcessingFee?: number;
    /**
     * 
     * @type {string}
     * @memberof ReturnSettings
     */
    defaultShippingLocation?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ReturnSettings
     */
    displayRefundToNewGiftCard?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ReturnSettings
     */
    refundShippingAndHandling?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ReturnSettings
     */
    returnOrCreditOnImportedOrders?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ReturnSettings
     */
    updateInventoryOnRestock?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ReturnSettings
     */
    useFulfillmentLocationAsReturnLocation?: boolean;
}
/**
 * 
 * @export
 * @interface RingFenceScopeSettings
 */
export interface RingFenceScopeSettings {
    /**
     * 
     * @type {string}
     * @memberof RingFenceScopeSettings
     */
    locationGroupCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RingFenceScopeSettings
     */
    scope?: string | null;
}
/**
 * 
 * @export
 * @interface Route
 */
export interface Route {
    /**
     * 
     * @type {boolean}
     * @memberof Route
     */
    canonical?: boolean | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof Route
     */
    defaults?: { [key: string]: any; } | null;
    /**
     * 
     * @type {string}
     * @memberof Route
     */
    functionId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Route
     */
    internalRoute?: string | null;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof Route
     */
    mappings?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof Route
     */
    template?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Route
     */
    urlScheme?: string | null;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof Route
     */
    validators?: { [key: string]: Array<string>; } | null;
}
/**
 * 
 * @export
 * @interface RulesEngineJobSettings
 */
export interface RulesEngineJobSettings {
    /**
     * 
     * @type {number}
     * @memberof RulesEngineJobSettings
     */
    interval?: number;
    /**
     * 
     * @type {string}
     * @memberof RulesEngineJobSettings
     */
    intervalUnit?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof RulesEngineJobSettings
     */
    isEnabled?: boolean;
}
/**
 * 
 * @export
 * @interface SMSTransactionSettings
 */
export interface SMSTransactionSettings {
    /**
     * 
     * @type {boolean}
     * @memberof SMSTransactionSettings
     */
    curbsideReady?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof SMSTransactionSettings
     */
    customerAtCurbside?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof SMSTransactionSettings
     */
    customerAtStore?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof SMSTransactionSettings
     */
    customerIntransit?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof SMSTransactionSettings
     */
    intransitConfirmation?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof SMSTransactionSettings
     */
    optOutAcknowledgement?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof SMSTransactionSettings
     */
    orderConfirmation?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof SMSTransactionSettings
     */
    orderPickupReady?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof SMSTransactionSettings
     */
    orderPickupReminder?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof SMSTransactionSettings
     */
    shipmentAssigned?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof SMSTransactionSettings
     */
    shipmentFulfilled?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof SMSTransactionSettings
     */
    shipmentItemCanceled?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof SMSTransactionSettings
     */
    storeItemsCanceled?: boolean | null;
}
/**
 * 
 * @export
 * @interface SMSTypeSetting
 */
export interface SMSTypeSetting {
    /**
     * 
     * @type {string}
     * @memberof SMSTypeSetting
     */
    id?: string | null;
}
/**
 * 
 * @export
 * @interface ShipToHomeConsolidation
 */
export interface ShipToHomeConsolidation {
    /**
     * AllowPartialFulfillment
     * @type {boolean}
     * @memberof ShipToHomeConsolidation
     */
    allowPartialFulfillment?: boolean;
    /**
     * 
     * @type {Cancellation}
     * @memberof ShipToHomeConsolidation
     */
    cancellationSTHC?: Cancellation;
    /**
     * 
     * @type {ForceSTHConsolidationOnSplitShipments}
     * @memberof ShipToHomeConsolidation
     */
    forceSTHConsolidationOnSplitShipments?: ForceSTHConsolidationOnSplitShipments;
    /**
     * 
     * @type {boolean}
     * @memberof ShipToHomeConsolidation
     */
    isEnabled?: boolean;
    /**
     * 
     * @type {MultipleConsolidation}
     * @memberof ShipToHomeConsolidation
     */
    multipleConsolidation?: MultipleConsolidation;
    /**
     * 
     * @type {ShippingMethod}
     * @memberof ShipToHomeConsolidation
     */
    shippingMethodSTHC?: ShippingMethod;
}
/**
 * 
 * @export
 * @interface ShipToStore
 */
export interface ShipToStore {
    /**
     * 
     * @type {boolean}
     * @memberof ShipToStore
     */
    alwaysCreateTransferShipments?: boolean;
    /**
     * 
     * @type {Cancellation}
     * @memberof ShipToStore
     */
    cancellation?: Cancellation;
    /**
     * 
     * @type {boolean}
     * @memberof ShipToStore
     */
    isEnabled?: boolean;
    /**
     * 
     * @type {ShippingMethod}
     * @memberof ShipToStore
     */
    shippingMethod?: ShippingMethod;
}
/**
 * 
 * @export
 * @interface ShipmentsOnHold
 */
export interface ShipmentsOnHold {
    /**
     * 
     * @type {AutoRelease}
     * @memberof ShipmentsOnHold
     */
    autoRelease?: AutoRelease;
    /**
     * 
     * @type {boolean}
     * @memberof ShipmentsOnHold
     */
    enabled?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof ShipmentsOnHold
     */
    manualRelease?: boolean | null;
}
/**
 * 
 * @export
 * @interface ShippingMethod
 */
export interface ShippingMethod {
    /**
     * 
     * @type {string}
     * @memberof ShippingMethod
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShippingMethod
     */
    name?: string | null;
}
/**
 * 
 * @export
 * @interface SiteGatewaySupportedCard
 */
export interface SiteGatewaySupportedCard {
    /**
     * 
     * @type {string}
     * @memberof SiteGatewaySupportedCard
     */
    cardTypeId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SiteGatewaySupportedCard
     */
    gatewayAccountId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SiteGatewaySupportedCard
     */
    paymentType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SiteGatewaySupportedCard
     */
    processingGatewayAccountId?: string | null;
}
/**
 * 
 * @export
 * @interface SiteSettingsPurchaseOrderCustomField
 */
export interface SiteSettingsPurchaseOrderCustomField {
    /**
     * Unique code/name for memo field
     * @type {string}
     * @memberof SiteSettingsPurchaseOrderCustomField
     */
    code?: string | null;
    /**
     * Whether this memo field is enabled
     * @type {boolean}
     * @memberof SiteSettingsPurchaseOrderCustomField
     */
    isEnabled?: boolean;
    /**
     * Whether this memo field is mandatory to be filled in when placing an order
     * @type {boolean}
     * @memberof SiteSettingsPurchaseOrderCustomField
     */
    isRequired?: boolean;
    /**
     * Memo field label that appers on the store front
     * @type {string}
     * @memberof SiteSettingsPurchaseOrderCustomField
     */
    label?: string | null;
    /**
     * Sequence Number
     * @type {number}
     * @memberof SiteSettingsPurchaseOrderCustomField
     */
    sequenceNumber?: number;
}
/**
 * 
 * @export
 * @interface SiteSettingsPurchaseOrderPaymentTerm
 */
export interface SiteSettingsPurchaseOrderPaymentTerm {
    /**
     * A unique code for purchase order payment term
     * @type {string}
     * @memberof SiteSettingsPurchaseOrderPaymentTerm
     */
    code?: string | null;
    /**
     * Value of the net term
     * @type {string}
     * @memberof SiteSettingsPurchaseOrderPaymentTerm
     */
    description?: string | null;
    /**
     * Sequence Number
     * @type {number}
     * @memberof SiteSettingsPurchaseOrderPaymentTerm
     */
    sequenceNumber?: number;
}
/**
 * The site setting that specifies the store's handling fees
 * @export
 * @interface SiteShippingHandlingFee
 */
export interface SiteShippingHandlingFee {
    /**
     * Site setting for the name that appears as the sender of the shipping origin.
     * @type {number}
     * @memberof SiteShippingHandlingFee
     */
    amount?: number | null;
}
/**
 * Defines the site setting for the active shipping rate provider that rate provider calculates domestic and international shipping rates.
 * Your site may have multiple shipping rate providers, for example, FedEx, DHL, USPS. However, only one shipping rate provider can be active at the same time.
 * @export
 * @interface SiteShippingSettings
 */
export interface SiteShippingSettings {
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof SiteShippingSettings
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {SiteShippingHandlingFee}
     * @memberof SiteShippingSettings
     */
    orderHandlingFee?: SiteShippingHandlingFee;
    /**
     * 
     * @type {SiteShippingSignatureRequirement}
     * @memberof SiteShippingSettings
     */
    signatureRequirement?: SiteShippingSignatureRequirement;
}
/**
 * The site setting that specifies the store's handling fees
 * @export
 * @interface SiteShippingSignatureRequirement
 */
export interface SiteShippingSignatureRequirement {
    /**
     * Is Signature Required?
     * @type {boolean}
     * @memberof SiteShippingSignatureRequirement
     */
    isSignatureRequired?: boolean | null;
    /**
     * If set, this is exact amount a shipment must be greater than to trigger usage of the IsSignatureRequired property
     * @type {number}
     * @memberof SiteShippingSignatureRequirement
     */
    minimumValueThreshold?: number | null;
}
/**
 * Subscription settings defined or this site
 * @export
 * @interface SubscriptionSettings
 */
export interface SubscriptionSettings {
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionSettings
     */
    applyBestPriceOnContinuityOrder?: boolean | null;
    /**
     * If this setting is enabled, the item price on the continuity order will be updated to the current price upon creation.
     * @type {boolean}
     * @memberof SubscriptionSettings
     */
    applyLatestItemPriceOnContinuityOrder?: boolean | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof SubscriptionSettings
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * Specifies the number of days before the next order date to create the continuity order.
     * @type {number}
     * @memberof SubscriptionSettings
     */
    continuityOrderDateOffset?: number;
    /**
     * Specifies the number of days to update the next order date from existing next order date.
     * @type {number}
     * @memberof SubscriptionSettings
     */
    nextOrderDateOffset?: number | null;
    /**
     * Specifies if order now action resets next order date
     * @type {boolean}
     * @memberof SubscriptionSettings
     */
    orderNowResetNextOrderDate?: boolean | null;
    /**
     * Specifies the number of continuity orders should be placed before activating the subscription.
     * @type {number}
     * @memberof SubscriptionSettings
     */
    pauseSubscriptionOffset?: number | null;
    /**
     * Specifies the number of days, `order all items now` or `order partial items now` actions cannot be repeated from the last action.
     * @type {number}
     * @memberof SubscriptionSettings
     */
    restrictOrderNowOffset?: number | null;
    /**
     * Specifies the number of times the subscription can be skipped
     * @type {number}
     * @memberof SubscriptionSettings
     */
    skipSubscriptionOffset?: number | null;
    /**
     * Specifies the number of days to send subscription order reminder email before the next continuity order.
     * @type {number}
     * @memberof SubscriptionSettings
     */
    subscriptionOrderReminderOffset?: number | null;
    /**
     * Specifies the number of days prior to when we need to send a 
     * "subscription pause limit reached reminder" email before the pause limit is reached.
     * @type {number}
     * @memberof SubscriptionSettings
     */
    subscriptionPauseLimitReminderOffset?: number | null;
    /**
     * Specifies the number of days to send subscription paused reminder email.
     * @type {number}
     * @memberof SubscriptionSettings
     */
    subscriptionPausedReminderOffset?: number | null;
}
/**
 * 
 * @export
 * @interface Substitution
 */
export interface Substitution {
    /**
     * 
     * @type {boolean}
     * @memberof Substitution
     */
    repriceOnSubstitution?: boolean;
}
/**
 * 
 * @export
 * @interface SupportedCard
 */
export interface SupportedCard {
    /**
     * 
     * @type {string}
     * @memberof SupportedCard
     */
    friendlyName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SupportedCard
     */
    paymentType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SupportedCard
     */
    type?: string | null;
}
/**
 * 
 * @export
 * @interface TaxableTerritory
 */
export interface TaxableTerritory {
    /**
     * 
     * @type {string}
     * @memberof TaxableTerritory
     */
    countryCode?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof TaxableTerritory
     */
    isShippingTaxable?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof TaxableTerritory
     */
    stateOrProvinceCode?: string | null;
}
/**
 * Describes the name and value of a third party credential field.
 * @export
 * @interface ThirdPartyCredentialField
 */
export interface ThirdPartyCredentialField {
    /**
     * The name of this credential that should be used for web requests.
     * @type {string}
     * @memberof ThirdPartyCredentialField
     */
    apiName?: string | null;
    /**
     * The displayable name of this credential field
     * @type {string}
     * @memberof ThirdPartyCredentialField
     */
    displayName?: string | null;
    /**
     * The input field type for the value.
     * @type {string}
     * @memberof ThirdPartyCredentialField
     */
    inputType?: string | null;
    /**
     * the value holds sensitive information.
     * @type {boolean}
     * @memberof ThirdPartyCredentialField
     */
    isSensitive?: boolean | null;
    /**
     * The value for this credential that should be used for web requests.
     * @type {string}
     * @memberof ThirdPartyCredentialField
     */
    value?: string | null;
    /**
     * 
     * @type {Array<VocabularyValue>}
     * @memberof ThirdPartyCredentialField
     */
    vocabularyValues?: Array<VocabularyValue> | null;
}
/**
 * 
 * @export
 * @interface ThirdPartyPaymentSetting
 */
export interface ThirdPartyPaymentSetting {
    /**
     * 
     * @type {string}
     * @memberof ThirdPartyPaymentSetting
     */
    paymentProcessingFlowType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ThirdPartyPaymentSetting
     */
    type?: string | null;
}
/**
 * 
 * @export
 * @interface Validator
 */
export interface Validator {
    /**
     * 
     * @type {string}
     * @memberof Validator
     */
    attributeFQN?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Validator
     */
    docId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Validator
     */
    field?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Validator
     */
    listFqn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Validator
     */
    pattern?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Validator
     */
    type?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Validator
     */
    values?: Array<string> | null;
}
/**
 * 
 * @export
 * @interface ViewAuthorizations
 */
export interface ViewAuthorizations {
    /**
     * 
     * @type {boolean}
     * @memberof ViewAuthorizations
     */
    enforceSitewideSSL?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof ViewAuthorizations
     */
    requireAuthForLive?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ViewAuthorizations
     */
    requireAuthForPending?: boolean;
}
/**
 * 
 * @export
 * @interface VocabularyValue
 */
export interface VocabularyValue {
    /**
     * 
     * @type {Array<LocalizedContent>}
     * @memberof VocabularyValue
     */
    contents?: Array<LocalizedContent> | null;
    /**
     * 
     * @type {string}
     * @memberof VocabularyValue
     */
    key?: string | null;
}
