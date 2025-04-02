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
 * @interface PkiWriteExternalPolicySignIntermediateResponse
 */
export interface PkiWriteExternalPolicySignIntermediateResponse {
    /**
     * Certificate Chain
     * @type {Array<string>}
     * @memberof PkiWriteExternalPolicySignIntermediateResponse
     */
    caChain?: Array<string>;
    /**
     * Certificate
     * @type {string}
     * @memberof PkiWriteExternalPolicySignIntermediateResponse
     */
    certificate?: string;
    /**
     * Time of expiration
     * @type {number}
     * @memberof PkiWriteExternalPolicySignIntermediateResponse
     */
    expiration?: number;
    /**
     * Issuing Certificate Authority
     * @type {string}
     * @memberof PkiWriteExternalPolicySignIntermediateResponse
     */
    issuingCa?: string;
    /**
     * Serial Number
     * @type {string}
     * @memberof PkiWriteExternalPolicySignIntermediateResponse
     */
    serialNumber?: string;
}
/**
 * Check if a given object implements the PkiWriteExternalPolicySignIntermediateResponse interface.
 */
export declare function instanceOfPkiWriteExternalPolicySignIntermediateResponse(value: object): value is PkiWriteExternalPolicySignIntermediateResponse;
export declare function PkiWriteExternalPolicySignIntermediateResponseFromJSON(json: any): PkiWriteExternalPolicySignIntermediateResponse;
export declare function PkiWriteExternalPolicySignIntermediateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiWriteExternalPolicySignIntermediateResponse;
export declare function PkiWriteExternalPolicySignIntermediateResponseToJSON(json: any): PkiWriteExternalPolicySignIntermediateResponse;
export declare function PkiWriteExternalPolicySignIntermediateResponseToJSONTyped(value?: PkiWriteExternalPolicySignIntermediateResponse | null, ignoreDiscriminator?: boolean): any;
