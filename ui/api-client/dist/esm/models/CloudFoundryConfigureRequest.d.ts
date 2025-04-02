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
 * @interface CloudFoundryConfigureRequest
 */
export interface CloudFoundryConfigureRequest {
    /**
     * CF’s API address.
     * @type {string}
     * @memberof CloudFoundryConfigureRequest
     */
    cfApiAddr?: string;
    /**
     * The PEM-format certificates that are presented for mutual TLS with the CloudFoundry API. If not set, mutual TLS is not used
     * @type {string}
     * @memberof CloudFoundryConfigureRequest
     */
    cfApiMutualTlsCertificate?: string;
    /**
     * The PEM-format private key that are used for mutual TLS with the CloudFoundry API. If not set, mutual TLS is not used
     * @type {string}
     * @memberof CloudFoundryConfigureRequest
     */
    cfApiMutualTlsKey?: string;
    /**
     * The PEM-format CA certificates that are acceptable for the CF API to present.
     * @type {Array<string>}
     * @memberof CloudFoundryConfigureRequest
     */
    cfApiTrustedCertificates?: Array<string>;
    /**
     * The client id for CF’s API.
     * @type {string}
     * @memberof CloudFoundryConfigureRequest
     */
    cfClientId?: string;
    /**
     * The client secret for CF’s API.
     * @type {string}
     * @memberof CloudFoundryConfigureRequest
     */
    cfClientSecret?: string;
    /**
     * The password for CF’s API.
     * @type {string}
     * @memberof CloudFoundryConfigureRequest
     */
    cfPassword?: string;
    /**
     * The timeout for calls to CF’s API.
     * @type {string}
     * @memberof CloudFoundryConfigureRequest
     */
    cfTimeout?: string;
    /**
     * The username for CF’s API.
     * @type {string}
     * @memberof CloudFoundryConfigureRequest
     */
    cfUsername?: string;
    /**
     * The PEM-format CA certificates that are required to have issued the instance certificates presented for logging in.
     * @type {Array<string>}
     * @memberof CloudFoundryConfigureRequest
     */
    identityCaCertificates?: Array<string>;
    /**
     * Duration in seconds for the maximum acceptable length in the future a "signing_time" can be. Useful for clock drift. Set low to reduce the opportunity for replay attacks.
     * @type {number}
     * @memberof CloudFoundryConfigureRequest
     */
    loginMaxSecondsNotAfter?: number;
    /**
     * Duration in seconds for the maximum acceptable age of a "signing_time". Useful for clock drift. Set low to reduce the opportunity for replay attacks.
     * @type {string}
     * @memberof CloudFoundryConfigureRequest
     */
    loginMaxSecondsNotBefore?: string;
    /**
     * Deprecated. Please use "cf_api_addr".
     * @type {string}
     * @memberof CloudFoundryConfigureRequest
     * @deprecated
     */
    pcfApiAddr?: string;
    /**
     * Deprecated. Please use "cf_api_trusted_certificates".
     * @type {Array<string>}
     * @memberof CloudFoundryConfigureRequest
     * @deprecated
     */
    pcfApiTrustedCertificates?: Array<string>;
    /**
     * Deprecated. Please use "cf_password".
     * @type {string}
     * @memberof CloudFoundryConfigureRequest
     * @deprecated
     */
    pcfPassword?: string;
    /**
     * Deprecated. Please use "cf_username".
     * @type {string}
     * @memberof CloudFoundryConfigureRequest
     * @deprecated
     */
    pcfUsername?: string;
}
/**
 * Check if a given object implements the CloudFoundryConfigureRequest interface.
 */
export declare function instanceOfCloudFoundryConfigureRequest(value: object): value is CloudFoundryConfigureRequest;
export declare function CloudFoundryConfigureRequestFromJSON(json: any): CloudFoundryConfigureRequest;
export declare function CloudFoundryConfigureRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CloudFoundryConfigureRequest;
export declare function CloudFoundryConfigureRequestToJSON(json: any): CloudFoundryConfigureRequest;
export declare function CloudFoundryConfigureRequestToJSONTyped(value?: CloudFoundryConfigureRequest | null, ignoreDiscriminator?: boolean): any;
