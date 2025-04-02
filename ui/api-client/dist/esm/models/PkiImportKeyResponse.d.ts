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
 * @interface PkiImportKeyResponse
 */
export interface PkiImportKeyResponse {
    /**
     * ID assigned to this key.
     * @type {string}
     * @memberof PkiImportKeyResponse
     */
    keyId?: string;
    /**
     * Name assigned to this key.
     * @type {string}
     * @memberof PkiImportKeyResponse
     */
    keyName?: string;
    /**
     * The type of key to use; defaults to RSA. "rsa" "ec" and "ed25519" are the only valid values.
     * @type {string}
     * @memberof PkiImportKeyResponse
     */
    keyType?: string;
}
/**
 * Check if a given object implements the PkiImportKeyResponse interface.
 */
export declare function instanceOfPkiImportKeyResponse(value: object): value is PkiImportKeyResponse;
export declare function PkiImportKeyResponseFromJSON(json: any): PkiImportKeyResponse;
export declare function PkiImportKeyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiImportKeyResponse;
export declare function PkiImportKeyResponseToJSON(json: any): PkiImportKeyResponse;
export declare function PkiImportKeyResponseToJSONTyped(value?: PkiImportKeyResponse | null, ignoreDiscriminator?: boolean): any;
