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
 * @interface LeasesRevokeLease2Request
 */
export interface LeasesRevokeLease2Request {
    /**
     * The lease identifier to renew. This is included with a lease.
     * @type {string}
     * @memberof LeasesRevokeLease2Request
     */
    leaseId?: string;
    /**
     * Whether or not to perform the revocation synchronously
     * @type {boolean}
     * @memberof LeasesRevokeLease2Request
     */
    sync?: boolean;
}
/**
 * Check if a given object implements the LeasesRevokeLease2Request interface.
 */
export declare function instanceOfLeasesRevokeLease2Request(value: object): value is LeasesRevokeLease2Request;
export declare function LeasesRevokeLease2RequestFromJSON(json: any): LeasesRevokeLease2Request;
export declare function LeasesRevokeLease2RequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LeasesRevokeLease2Request;
export declare function LeasesRevokeLease2RequestToJSON(json: any): LeasesRevokeLease2Request;
export declare function LeasesRevokeLease2RequestToJSONTyped(value?: LeasesRevokeLease2Request | null, ignoreDiscriminator?: boolean): any;
