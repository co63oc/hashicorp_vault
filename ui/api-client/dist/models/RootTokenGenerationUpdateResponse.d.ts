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
 * @interface RootTokenGenerationUpdateResponse
 */
export interface RootTokenGenerationUpdateResponse {
    /**
     *
     * @type {boolean}
     * @memberof RootTokenGenerationUpdateResponse
     */
    complete?: boolean;
    /**
     *
     * @type {string}
     * @memberof RootTokenGenerationUpdateResponse
     */
    encodedRootToken?: string;
    /**
     *
     * @type {string}
     * @memberof RootTokenGenerationUpdateResponse
     */
    encodedToken?: string;
    /**
     *
     * @type {string}
     * @memberof RootTokenGenerationUpdateResponse
     */
    nonce?: string;
    /**
     *
     * @type {string}
     * @memberof RootTokenGenerationUpdateResponse
     */
    otp?: string;
    /**
     *
     * @type {number}
     * @memberof RootTokenGenerationUpdateResponse
     */
    otpLength?: number;
    /**
     *
     * @type {string}
     * @memberof RootTokenGenerationUpdateResponse
     */
    pgpFingerprint?: string;
    /**
     *
     * @type {number}
     * @memberof RootTokenGenerationUpdateResponse
     */
    progress?: number;
    /**
     *
     * @type {number}
     * @memberof RootTokenGenerationUpdateResponse
     */
    required?: number;
    /**
     *
     * @type {boolean}
     * @memberof RootTokenGenerationUpdateResponse
     */
    started?: boolean;
}
/**
 * Check if a given object implements the RootTokenGenerationUpdateResponse interface.
 */
export declare function instanceOfRootTokenGenerationUpdateResponse(value: object): value is RootTokenGenerationUpdateResponse;
export declare function RootTokenGenerationUpdateResponseFromJSON(json: any): RootTokenGenerationUpdateResponse;
export declare function RootTokenGenerationUpdateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RootTokenGenerationUpdateResponse;
export declare function RootTokenGenerationUpdateResponseToJSON(json: any): RootTokenGenerationUpdateResponse;
export declare function RootTokenGenerationUpdateResponseToJSONTyped(value?: RootTokenGenerationUpdateResponse | null, ignoreDiscriminator?: boolean): any;
