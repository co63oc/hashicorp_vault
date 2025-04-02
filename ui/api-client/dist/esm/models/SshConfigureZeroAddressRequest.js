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
 * Check if a given object implements the SshConfigureZeroAddressRequest interface.
 */
export function instanceOfSshConfigureZeroAddressRequest(value) {
    return true;
}
export function SshConfigureZeroAddressRequestFromJSON(json) {
    return SshConfigureZeroAddressRequestFromJSONTyped(json, false);
}
export function SshConfigureZeroAddressRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'roles': json['roles'] == null ? undefined : json['roles'],
    };
}
export function SshConfigureZeroAddressRequestToJSON(json) {
    return SshConfigureZeroAddressRequestToJSONTyped(json, false);
}
export function SshConfigureZeroAddressRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'roles': value['roles'],
    };
}
