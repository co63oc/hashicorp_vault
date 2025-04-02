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
 * @interface PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeAccountKidRequest
 */
export interface PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeAccountKidRequest {
    /**
     * ACME request 'payload' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeAccountKidRequest
     */
    payload?: string;
    /**
     * ACME request 'protected' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeAccountKidRequest
     */
    _protected?: string;
    /**
     * ACME request 'signature' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeAccountKidRequest
     */
    signature?: string;
}
/**
 * Check if a given object implements the PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeAccountKidRequest interface.
 */
export declare function instanceOfPkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeAccountKidRequest(value: object): value is PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeAccountKidRequest;
export declare function PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeAccountKidRequestFromJSON(json: any): PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeAccountKidRequest;
export declare function PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeAccountKidRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeAccountKidRequest;
export declare function PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeAccountKidRequestToJSON(json: any): PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeAccountKidRequest;
export declare function PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeAccountKidRequestToJSONTyped(value?: PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeAccountKidRequest | null, ignoreDiscriminator?: boolean): any;
