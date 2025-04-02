/* tslint:disable */
/* eslint-disable */
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
 * Check if a given object implements the AppRoleReadSecretIdTtlResponse interface.
 */
export function instanceOfAppRoleReadSecretIdTtlResponse(value) {
    return true;
}
export function AppRoleReadSecretIdTtlResponseFromJSON(json) {
    return AppRoleReadSecretIdTtlResponseFromJSONTyped(json, false);
}
export function AppRoleReadSecretIdTtlResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'secretIdTtl': json['secret_id_ttl'] == null ? undefined : json['secret_id_ttl'],
    };
}
export function AppRoleReadSecretIdTtlResponseToJSON(json) {
    return AppRoleReadSecretIdTtlResponseToJSONTyped(json, false);
}
export function AppRoleReadSecretIdTtlResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'secret_id_ttl': value['secretIdTtl'],
    };
}
