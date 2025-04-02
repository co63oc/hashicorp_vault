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
 * @interface LeasesRenewLeaseWithId2Request
 */
export interface LeasesRenewLeaseWithId2Request {
    /**
     * The desired increment in seconds to the lease
     * @type {string}
     * @memberof LeasesRenewLeaseWithId2Request
     */
    increment?: string;
    /**
     * The lease identifier to renew. This is included with a lease.
     * @type {string}
     * @memberof LeasesRenewLeaseWithId2Request
     */
    leaseId?: string;
}
/**
 * Check if a given object implements the LeasesRenewLeaseWithId2Request interface.
 */
export declare function instanceOfLeasesRenewLeaseWithId2Request(value: object): value is LeasesRenewLeaseWithId2Request;
export declare function LeasesRenewLeaseWithId2RequestFromJSON(json: any): LeasesRenewLeaseWithId2Request;
export declare function LeasesRenewLeaseWithId2RequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LeasesRenewLeaseWithId2Request;
export declare function LeasesRenewLeaseWithId2RequestToJSON(json: any): LeasesRenewLeaseWithId2Request;
export declare function LeasesRenewLeaseWithId2RequestToJSONTyped(value?: LeasesRenewLeaseWithId2Request | null, ignoreDiscriminator?: boolean): any;
