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
 * @interface SystemWriteReplicationDrSecondaryPromoteRequest
 */
export interface SystemWriteReplicationDrSecondaryPromoteRequest {
    /**
     * DR operation token used to authorize this request.
     * @type {string}
     * @memberof SystemWriteReplicationDrSecondaryPromoteRequest
     */
    drOperationToken?: string;
    /**
     * Set to true if the cluster should be promoted despite replication being in an error state. This could mean some data was not replicated to the secondary
     * @type {boolean}
     * @memberof SystemWriteReplicationDrSecondaryPromoteRequest
     */
    force?: boolean;
    /**
     * The address the secondary cluster should connect to. Defaults to the primary's cluster address.
     * @type {string}
     * @memberof SystemWriteReplicationDrSecondaryPromoteRequest
     */
    primaryClusterAddr?: string;
}
/**
 * Check if a given object implements the SystemWriteReplicationDrSecondaryPromoteRequest interface.
 */
export declare function instanceOfSystemWriteReplicationDrSecondaryPromoteRequest(value: object): value is SystemWriteReplicationDrSecondaryPromoteRequest;
export declare function SystemWriteReplicationDrSecondaryPromoteRequestFromJSON(json: any): SystemWriteReplicationDrSecondaryPromoteRequest;
export declare function SystemWriteReplicationDrSecondaryPromoteRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemWriteReplicationDrSecondaryPromoteRequest;
export declare function SystemWriteReplicationDrSecondaryPromoteRequestToJSON(json: any): SystemWriteReplicationDrSecondaryPromoteRequest;
export declare function SystemWriteReplicationDrSecondaryPromoteRequestToJSONTyped(value?: SystemWriteReplicationDrSecondaryPromoteRequest | null, ignoreDiscriminator?: boolean): any;
