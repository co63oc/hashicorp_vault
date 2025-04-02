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
 * @interface PkiWriteIssuerIssuerRefRolesRoleAcmeNewOrderRequest
 */
export interface PkiWriteIssuerIssuerRefRolesRoleAcmeNewOrderRequest {
    /**
     * ACME request 'payload' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefRolesRoleAcmeNewOrderRequest
     */
    payload?: string;
    /**
     * ACME request 'protected' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefRolesRoleAcmeNewOrderRequest
     */
    _protected?: string;
    /**
     * ACME request 'signature' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefRolesRoleAcmeNewOrderRequest
     */
    signature?: string;
}
/**
 * Check if a given object implements the PkiWriteIssuerIssuerRefRolesRoleAcmeNewOrderRequest interface.
 */
export declare function instanceOfPkiWriteIssuerIssuerRefRolesRoleAcmeNewOrderRequest(value: object): value is PkiWriteIssuerIssuerRefRolesRoleAcmeNewOrderRequest;
export declare function PkiWriteIssuerIssuerRefRolesRoleAcmeNewOrderRequestFromJSON(json: any): PkiWriteIssuerIssuerRefRolesRoleAcmeNewOrderRequest;
export declare function PkiWriteIssuerIssuerRefRolesRoleAcmeNewOrderRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiWriteIssuerIssuerRefRolesRoleAcmeNewOrderRequest;
export declare function PkiWriteIssuerIssuerRefRolesRoleAcmeNewOrderRequestToJSON(json: any): PkiWriteIssuerIssuerRefRolesRoleAcmeNewOrderRequest;
export declare function PkiWriteIssuerIssuerRefRolesRoleAcmeNewOrderRequestToJSONTyped(value?: PkiWriteIssuerIssuerRefRolesRoleAcmeNewOrderRequest | null, ignoreDiscriminator?: boolean): any;
