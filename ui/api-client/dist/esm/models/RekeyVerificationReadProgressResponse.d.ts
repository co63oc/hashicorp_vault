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
 * @interface RekeyVerificationReadProgressResponse
 */
export interface RekeyVerificationReadProgressResponse {
    /**
     *
     * @type {number}
     * @memberof RekeyVerificationReadProgressResponse
     */
    n?: number;
    /**
     *
     * @type {string}
     * @memberof RekeyVerificationReadProgressResponse
     */
    nonce?: string;
    /**
     *
     * @type {number}
     * @memberof RekeyVerificationReadProgressResponse
     */
    progress?: number;
    /**
     *
     * @type {boolean}
     * @memberof RekeyVerificationReadProgressResponse
     */
    started?: boolean;
    /**
     *
     * @type {number}
     * @memberof RekeyVerificationReadProgressResponse
     */
    t?: number;
}
/**
 * Check if a given object implements the RekeyVerificationReadProgressResponse interface.
 */
export declare function instanceOfRekeyVerificationReadProgressResponse(value: object): value is RekeyVerificationReadProgressResponse;
export declare function RekeyVerificationReadProgressResponseFromJSON(json: any): RekeyVerificationReadProgressResponse;
export declare function RekeyVerificationReadProgressResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RekeyVerificationReadProgressResponse;
export declare function RekeyVerificationReadProgressResponseToJSON(json: any): RekeyVerificationReadProgressResponse;
export declare function RekeyVerificationReadProgressResponseToJSONTyped(value?: RekeyVerificationReadProgressResponse | null, ignoreDiscriminator?: boolean): any;
