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
 * @interface PkiConfigureClusterRequest
 */
export interface PkiConfigureClusterRequest {
    /**
     * Optional URI to this mount's AIA distribution point; may refer to an external non-Vault responder. This is for resolving AIA URLs and providing the {{cluster_aia_path}} template parameter and will not be used for other purposes. As such, unlike path above, this could safely be an insecure transit mechanism (like HTTP without TLS). For example: http://cdn.example.com/pr1/pki
     * @type {string}
     * @memberof PkiConfigureClusterRequest
     */
    aiaPath?: string;
    /**
     * Canonical URI to this mount on this performance replication cluster's external address. This is for resolving AIA URLs and providing the {{cluster_path}} template parameter but might be used for other purposes in the future. This should only point back to this particular PR replica and should not ever point to another PR cluster. It may point to any node in the PR replica, including standby nodes, and need not always point to the active node. For example: https://pr1.vault.example.com:8200/v1/pki
     * @type {string}
     * @memberof PkiConfigureClusterRequest
     */
    path?: string;
}
/**
 * Check if a given object implements the PkiConfigureClusterRequest interface.
 */
export declare function instanceOfPkiConfigureClusterRequest(value: object): value is PkiConfigureClusterRequest;
export declare function PkiConfigureClusterRequestFromJSON(json: any): PkiConfigureClusterRequest;
export declare function PkiConfigureClusterRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiConfigureClusterRequest;
export declare function PkiConfigureClusterRequestToJSON(json: any): PkiConfigureClusterRequest;
export declare function PkiConfigureClusterRequestToJSONTyped(value?: PkiConfigureClusterRequest | null, ignoreDiscriminator?: boolean): any;
