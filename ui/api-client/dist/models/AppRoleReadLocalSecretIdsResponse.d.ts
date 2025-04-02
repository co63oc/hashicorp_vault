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
 * @interface AppRoleReadLocalSecretIdsResponse
 */
export interface AppRoleReadLocalSecretIdsResponse {
    /**
     * If true, the secret identifiers generated using this role will be cluster local. This can only be set during role creation and once set, it can't be reset later
     * @type {boolean}
     * @memberof AppRoleReadLocalSecretIdsResponse
     */
    localSecretIds?: boolean;
}
/**
 * Check if a given object implements the AppRoleReadLocalSecretIdsResponse interface.
 */
export declare function instanceOfAppRoleReadLocalSecretIdsResponse(value: object): value is AppRoleReadLocalSecretIdsResponse;
export declare function AppRoleReadLocalSecretIdsResponseFromJSON(json: any): AppRoleReadLocalSecretIdsResponse;
export declare function AppRoleReadLocalSecretIdsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRoleReadLocalSecretIdsResponse;
export declare function AppRoleReadLocalSecretIdsResponseToJSON(json: any): AppRoleReadLocalSecretIdsResponse;
export declare function AppRoleReadLocalSecretIdsResponseToJSONTyped(value?: AppRoleReadLocalSecretIdsResponse | null, ignoreDiscriminator?: boolean): any;
