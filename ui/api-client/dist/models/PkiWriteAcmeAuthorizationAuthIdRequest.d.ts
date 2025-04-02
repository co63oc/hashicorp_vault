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
 * @interface PkiWriteAcmeAuthorizationAuthIdRequest
 */
export interface PkiWriteAcmeAuthorizationAuthIdRequest {
    /**
     * ACME request 'payload' value
     * @type {string}
     * @memberof PkiWriteAcmeAuthorizationAuthIdRequest
     */
    payload?: string;
    /**
     * ACME request 'protected' value
     * @type {string}
     * @memberof PkiWriteAcmeAuthorizationAuthIdRequest
     */
    _protected?: string;
    /**
     * ACME request 'signature' value
     * @type {string}
     * @memberof PkiWriteAcmeAuthorizationAuthIdRequest
     */
    signature?: string;
}
/**
 * Check if a given object implements the PkiWriteAcmeAuthorizationAuthIdRequest interface.
 */
export declare function instanceOfPkiWriteAcmeAuthorizationAuthIdRequest(value: object): value is PkiWriteAcmeAuthorizationAuthIdRequest;
export declare function PkiWriteAcmeAuthorizationAuthIdRequestFromJSON(json: any): PkiWriteAcmeAuthorizationAuthIdRequest;
export declare function PkiWriteAcmeAuthorizationAuthIdRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiWriteAcmeAuthorizationAuthIdRequest;
export declare function PkiWriteAcmeAuthorizationAuthIdRequestToJSON(json: any): PkiWriteAcmeAuthorizationAuthIdRequest;
export declare function PkiWriteAcmeAuthorizationAuthIdRequestToJSONTyped(value?: PkiWriteAcmeAuthorizationAuthIdRequest | null, ignoreDiscriminator?: boolean): any;
