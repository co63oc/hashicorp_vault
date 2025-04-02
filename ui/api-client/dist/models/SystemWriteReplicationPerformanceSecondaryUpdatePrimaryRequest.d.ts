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
 * @interface SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequest
 */
export interface SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequest {
    /**
     * A path to a file containing a PEM-encoded CA certificate to verify the call against the primary's API address
     * @type {string}
     * @memberof SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequest
     */
    caFile?: string;
    /**
     * A path to a directory containing PEM-encoded CA certificates to verify the call against the primary's API address
     * @type {string}
     * @memberof SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequest
     */
    caPath?: string;
    /**
     * The client certificate to use for authentication, in PEM format. Note: client authentication for this operation will always use TLS 1.2 or higher.
     * @type {string}
     * @memberof SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequest
     */
    clientCertPem?: string;
    /**
     * The client key to use for authentication, in PEM format.
     * @type {string}
     * @memberof SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequest
     */
    clientKeyPem?: string;
    /**
     * The API address of the primary. If not set, the value the primary supplies in the token will be used, which is the primary's redirect address.
     * @type {string}
     * @memberof SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequest
     */
    primaryApiAddr?: string;
    /**
     * The token given by the primary to activate secondary status for this cluster.
     * @type {string}
     * @memberof SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequest
     */
    token?: string;
    /**
     * A comma separated list of host:port strings to serve as new addresses for the primary cluster
     * @type {Array<string>}
     * @memberof SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequest
     */
    updatePrimaryAddrs?: Array<string>;
}
/**
 * Check if a given object implements the SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequest interface.
 */
export declare function instanceOfSystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequest(value: object): value is SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequest;
export declare function SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequestFromJSON(json: any): SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequest;
export declare function SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequest;
export declare function SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequestToJSON(json: any): SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequest;
export declare function SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequestToJSONTyped(value?: SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequest | null, ignoreDiscriminator?: boolean): any;
