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
 * @interface LeasesRevokeLeaseWithPrefixRequest
 */
export interface LeasesRevokeLeaseWithPrefixRequest {
    /**
     * Whether or not to perform the revocation synchronously
     * @type {boolean}
     * @memberof LeasesRevokeLeaseWithPrefixRequest
     */
    sync?: boolean;
}
/**
 * Check if a given object implements the LeasesRevokeLeaseWithPrefixRequest interface.
 */
export declare function instanceOfLeasesRevokeLeaseWithPrefixRequest(value: object): value is LeasesRevokeLeaseWithPrefixRequest;
export declare function LeasesRevokeLeaseWithPrefixRequestFromJSON(json: any): LeasesRevokeLeaseWithPrefixRequest;
export declare function LeasesRevokeLeaseWithPrefixRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LeasesRevokeLeaseWithPrefixRequest;
export declare function LeasesRevokeLeaseWithPrefixRequestToJSON(json: any): LeasesRevokeLeaseWithPrefixRequest;
export declare function LeasesRevokeLeaseWithPrefixRequestToJSONTyped(value?: LeasesRevokeLeaseWithPrefixRequest | null, ignoreDiscriminator?: boolean): any;
