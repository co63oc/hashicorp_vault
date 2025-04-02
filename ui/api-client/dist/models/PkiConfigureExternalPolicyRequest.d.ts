/**
 * HashiCorp Vault API
 * HTTP API that gives you full access to Vault. All API routes are prefixed with `/v1/`.
 *
 * The version of the OpenAPI document: 1.20.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface PkiConfigureExternalPolicyRequest
 */
export interface PkiConfigureExternalPolicyRequest {
    /**
     * Whether the external validation engine is enabled at all for this mount
     * @type {boolean}
     * @memberof PkiConfigureExternalPolicyRequest
     */
    enabled?: boolean;
    /**
     * A JMESPath search string that will extract the entity meta data to be sent to the CIEPS service. If blank, none of the entity metadata will be sent to the service.
     * @type {string}
     * @memberof PkiConfigureExternalPolicyRequest
     */
    entityJmespath?: string;
    /**
     * The URL where the external policy service is accessible to vault
     * @type {string}
     * @memberof PkiConfigureExternalPolicyRequest
     */
    externalServiceUrl?: string;
    /**
     * A JMESPath search string that will extract the entity group information to be sent to the CIEPS service. If blank, none of the group entity metadata will be sent to the service.
     * @type {string}
     * @memberof PkiConfigureExternalPolicyRequest
     */
    groupJmespath?: string;
    /**
     * This is how long any particular request should wait for a timeout
     * @type {string}
     * @memberof PkiConfigureExternalPolicyRequest
     */
    timeout?: string;
    /**
     * If this is set, vault will trust any leaf-certificate issued by this certificate to be the external policy service
     * @type {string}
     * @memberof PkiConfigureExternalPolicyRequest
     */
    trustedCa?: string;
    /**
     * This is the PEM of the leaf certificate(s) that vault will expect to do certificate pinning
     * @type {string}
     * @memberof PkiConfigureExternalPolicyRequest
     */
    trustedLeafCertificateBundle?: string;
    /**
     * The vault client certificate used to authenticate vault to the external policy engine, and theprivate key to use it.
     * @type {string}
     * @memberof PkiConfigureExternalPolicyRequest
     */
    vaultClientCertBundle?: string;
}
/**
 * Check if a given object implements the PkiConfigureExternalPolicyRequest interface.
 */
export declare function instanceOfPkiConfigureExternalPolicyRequest(value: object): value is PkiConfigureExternalPolicyRequest;
export declare function PkiConfigureExternalPolicyRequestFromJSON(json: any): PkiConfigureExternalPolicyRequest;
export declare function PkiConfigureExternalPolicyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiConfigureExternalPolicyRequest;
export declare function PkiConfigureExternalPolicyRequestToJSON(json: any): PkiConfigureExternalPolicyRequest;
export declare function PkiConfigureExternalPolicyRequestToJSONTyped(value?: PkiConfigureExternalPolicyRequest | null, ignoreDiscriminator?: boolean): any;
