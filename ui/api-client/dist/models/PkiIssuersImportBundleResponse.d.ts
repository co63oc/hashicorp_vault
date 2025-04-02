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
 * @interface PkiIssuersImportBundleResponse
 */
export interface PkiIssuersImportBundleResponse {
    /**
     * Existing issuers specified as part of the import bundle of this request
     * @type {Array<string>}
     * @memberof PkiIssuersImportBundleResponse
     */
    existingIssuers?: Array<string>;
    /**
     * Existing keys specified as part of the import bundle of this request
     * @type {Array<string>}
     * @memberof PkiIssuersImportBundleResponse
     */
    existingKeys?: Array<string>;
    /**
     * Net-new issuers imported as a part of this request
     * @type {Array<string>}
     * @memberof PkiIssuersImportBundleResponse
     */
    importedIssuers?: Array<string>;
    /**
     * Net-new keys imported as a part of this request
     * @type {Array<string>}
     * @memberof PkiIssuersImportBundleResponse
     */
    importedKeys?: Array<string>;
    /**
     * A mapping of issuer_id to key_id for all issuers included in this request
     * @type {object}
     * @memberof PkiIssuersImportBundleResponse
     */
    mapping?: object;
}
/**
 * Check if a given object implements the PkiIssuersImportBundleResponse interface.
 */
export declare function instanceOfPkiIssuersImportBundleResponse(value: object): value is PkiIssuersImportBundleResponse;
export declare function PkiIssuersImportBundleResponseFromJSON(json: any): PkiIssuersImportBundleResponse;
export declare function PkiIssuersImportBundleResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiIssuersImportBundleResponse;
export declare function PkiIssuersImportBundleResponseToJSON(json: any): PkiIssuersImportBundleResponse;
export declare function PkiIssuersImportBundleResponseToJSONTyped(value?: PkiIssuersImportBundleResponse | null, ignoreDiscriminator?: boolean): any;
