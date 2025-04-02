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
 * Check if a given object implements the AppRoleDestroySecretIdByAccessorRequest interface.
 */
export function instanceOfAppRoleDestroySecretIdByAccessorRequest(value) {
    return true;
}
export function AppRoleDestroySecretIdByAccessorRequestFromJSON(json) {
    return AppRoleDestroySecretIdByAccessorRequestFromJSONTyped(json, false);
}
export function AppRoleDestroySecretIdByAccessorRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'secretIdAccessor': json['secret_id_accessor'] == null ? undefined : json['secret_id_accessor'],
    };
}
export function AppRoleDestroySecretIdByAccessorRequestToJSON(json) {
    return AppRoleDestroySecretIdByAccessorRequestToJSONTyped(json, false);
}
export function AppRoleDestroySecretIdByAccessorRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'secret_id_accessor': value['secretIdAccessor'],
    };
}
