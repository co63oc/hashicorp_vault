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
 * @interface PkiSignVerbatimRequest
 */
export interface PkiSignVerbatimRequest {
    /**
     * The requested Subject Alternative Names, if any, in a comma-delimited list. If email protection is enabled for the role, this may contain email addresses.
     * @type {string}
     * @memberof PkiSignVerbatimRequest
     */
    altNames?: string;
    /**
     * User supplied metadata to store associated with this certificate's serial number, base64 encoded
     * @type {string}
     * @memberof PkiSignVerbatimRequest
     */
    certMetadata?: string;
    /**
     * The requested common name; if you want more than one, specify the alternative names in the alt_names map. If email protection is enabled in the role, this may be an email address.
     * @type {string}
     * @memberof PkiSignVerbatimRequest
     */
    commonName?: string;
    /**
     * PEM-format CSR to be signed. Values will be taken verbatim from the CSR, except for basic constraints.
     * @type {string}
     * @memberof PkiSignVerbatimRequest
     */
    csr?: string;
    /**
     * If true, the Common Name will not be included in DNS or Email Subject Alternate Names. Defaults to false (CN is included).
     * @type {boolean}
     * @memberof PkiSignVerbatimRequest
     */
    excludeCnFromSans?: boolean;
    /**
     * A comma-separated string or list of extended key usages. Valid values can be found at https://golang.org/pkg/crypto/x509/#ExtKeyUsage -- simply drop the "ExtKeyUsage" part of the name. To remove all key usages from being set, set this value to an empty list.
     * @type {Array<string>}
     * @memberof PkiSignVerbatimRequest
     */
    extKeyUsage?: Array<string>;
    /**
     * A comma-separated string or list of extended key usage oids.
     * @type {Array<string>}
     * @memberof PkiSignVerbatimRequest
     */
    extKeyUsageOids?: Array<string>;
    /**
     * Format for returned data. Can be "pem", "der", or "pem_bundle". If "pem_bundle", any private key and issuing cert will be appended to the certificate pem. If "der", the value will be base64 encoded. Defaults to "pem".
     * @type {string}
     * @memberof PkiSignVerbatimRequest
     */
    format?: PkiSignVerbatimRequestFormatEnum;
    /**
     * The requested IP SANs, if any, in a comma-delimited list
     * @type {Array<string>}
     * @memberof PkiSignVerbatimRequest
     */
    ipSans?: Array<string>;
    /**
     * Reference to a existing issuer; either "default" for the configured default issuer, an identifier or the name assigned to the issuer.
     * @type {string}
     * @memberof PkiSignVerbatimRequest
     */
    issuerRef?: string;
    /**
     * A comma-separated string or list of key usages (not extended key usages). Valid values can be found at https://golang.org/pkg/crypto/x509/#KeyUsage -- simply drop the "KeyUsage" part of the name. To remove all key usages from being set, set this value to an empty list.
     * @type {Array<string>}
     * @memberof PkiSignVerbatimRequest
     */
    keyUsage?: Array<string>;
    /**
     * Set the not after field of the certificate with specified date value. The value format should be given in UTC format YYYY-MM-ddTHH:MM:SSZ
     * @type {string}
     * @memberof PkiSignVerbatimRequest
     */
    notAfter?: string;
    /**
     * Requested other SANs, in an array with the format <oid>;UTF8:<utf8 string value> for each entry.
     * @type {Array<string>}
     * @memberof PkiSignVerbatimRequest
     */
    otherSans?: Array<string>;
    /**
     * Format for the returned private key. Generally the default will be controlled by the "format" parameter as either base64-encoded DER or PEM-encoded DER. However, this can be set to "pkcs8" to have the returned private key contain base64-encoded pkcs8 or PEM-encoded pkcs8 instead. Defaults to "der".
     * @type {string}
     * @memberof PkiSignVerbatimRequest
     */
    privateKeyFormat?: PkiSignVerbatimRequestPrivateKeyFormatEnum;
    /**
     * Whether or not to remove self-signed CA certificates in the output of the ca_chain field.
     * @type {boolean}
     * @memberof PkiSignVerbatimRequest
     */
    removeRootsFromChain?: boolean;
    /**
     * The Subject's requested serial number, if any. See RFC 4519 Section 2.31 'serialNumber' for a description of this field. If you want more than one, specify alternative names in the alt_names map using OID 2.5.4.5. This has no impact on the final certificate's Serial Number field.
     * @type {string}
     * @memberof PkiSignVerbatimRequest
     */
    serialNumber?: string;
    /**
     * The number of bits to use in the signature algorithm; accepts 256 for SHA-2-256, 384 for SHA-2-384, and 512 for SHA-2-512. Defaults to 0 to automatically detect based on key length (SHA-2-256 for RSA keys, and matching the curve size for NIST P-Curves).
     * @type {number}
     * @memberof PkiSignVerbatimRequest
     */
    signatureBits?: number;
    /**
     * The requested Time To Live for the certificate; sets the expiration date. If not specified the role default, backend default, or system default TTL is used, in that order. Cannot be larger than the role max TTL.
     * @type {string}
     * @memberof PkiSignVerbatimRequest
     */
    ttl?: string;
    /**
     * The requested URI SANs, if any, in a comma-delimited list.
     * @type {Array<string>}
     * @memberof PkiSignVerbatimRequest
     */
    uriSans?: Array<string>;
    /**
     * Whether or not to use PSS signatures when using a RSA key-type issuer. Defaults to false.
     * @type {boolean}
     * @memberof PkiSignVerbatimRequest
     */
    usePss?: boolean;
    /**
     * The requested user_ids value to place in the subject, if any, in a comma-delimited list. Restricted by allowed_user_ids. Any values are added with OID 0.9.2342.19200300.100.1.1.
     * @type {Array<string>}
     * @memberof PkiSignVerbatimRequest
     */
    userIds?: Array<string>;
}
/**
* @export
* @enum {string}
*/
export declare enum PkiSignVerbatimRequestFormatEnum {
    PEM = "pem",
    DER = "der",
    PEM_BUNDLE = "pem_bundle"
}
/**
* @export
* @enum {string}
*/
export declare enum PkiSignVerbatimRequestPrivateKeyFormatEnum {
    EMPTY = "",
    DER = "der",
    PEM = "pem",
    PKCS8 = "pkcs8"
}
/**
 * Check if a given object implements the PkiSignVerbatimRequest interface.
 */
export declare function instanceOfPkiSignVerbatimRequest(value: object): value is PkiSignVerbatimRequest;
export declare function PkiSignVerbatimRequestFromJSON(json: any): PkiSignVerbatimRequest;
export declare function PkiSignVerbatimRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiSignVerbatimRequest;
export declare function PkiSignVerbatimRequestToJSON(json: any): PkiSignVerbatimRequest;
export declare function PkiSignVerbatimRequestToJSONTyped(value?: PkiSignVerbatimRequest | null, ignoreDiscriminator?: boolean): any;
