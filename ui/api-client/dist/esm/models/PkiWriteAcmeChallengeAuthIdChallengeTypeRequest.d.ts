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
 * @interface PkiWriteAcmeChallengeAuthIdChallengeTypeRequest
 */
export interface PkiWriteAcmeChallengeAuthIdChallengeTypeRequest {
    /**
     * ACME request 'payload' value
     * @type {string}
     * @memberof PkiWriteAcmeChallengeAuthIdChallengeTypeRequest
     */
    payload?: string;
    /**
     * ACME request 'protected' value
     * @type {string}
     * @memberof PkiWriteAcmeChallengeAuthIdChallengeTypeRequest
     */
    _protected?: string;
    /**
     * ACME request 'signature' value
     * @type {string}
     * @memberof PkiWriteAcmeChallengeAuthIdChallengeTypeRequest
     */
    signature?: string;
}
/**
 * Check if a given object implements the PkiWriteAcmeChallengeAuthIdChallengeTypeRequest interface.
 */
export declare function instanceOfPkiWriteAcmeChallengeAuthIdChallengeTypeRequest(value: object): value is PkiWriteAcmeChallengeAuthIdChallengeTypeRequest;
export declare function PkiWriteAcmeChallengeAuthIdChallengeTypeRequestFromJSON(json: any): PkiWriteAcmeChallengeAuthIdChallengeTypeRequest;
export declare function PkiWriteAcmeChallengeAuthIdChallengeTypeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiWriteAcmeChallengeAuthIdChallengeTypeRequest;
export declare function PkiWriteAcmeChallengeAuthIdChallengeTypeRequestToJSON(json: any): PkiWriteAcmeChallengeAuthIdChallengeTypeRequest;
export declare function PkiWriteAcmeChallengeAuthIdChallengeTypeRequestToJSONTyped(value?: PkiWriteAcmeChallengeAuthIdChallengeTypeRequest | null, ignoreDiscriminator?: boolean): any;
