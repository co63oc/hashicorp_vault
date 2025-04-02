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
 * Check if a given object implements the AppRoleDestroySecretIdRequest interface.
 */
export function instanceOfAppRoleDestroySecretIdRequest(value) {
    return true;
}
export function AppRoleDestroySecretIdRequestFromJSON(json) {
    return AppRoleDestroySecretIdRequestFromJSONTyped(json, false);
}
export function AppRoleDestroySecretIdRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'secretId': json['secret_id'] == null ? undefined : json['secret_id'],
    };
}
export function AppRoleDestroySecretIdRequestToJSON(json) {
    return AppRoleDestroySecretIdRequestToJSONTyped(json, false);
}
export function AppRoleDestroySecretIdRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'secret_id': value['secretId'],
    };
}
