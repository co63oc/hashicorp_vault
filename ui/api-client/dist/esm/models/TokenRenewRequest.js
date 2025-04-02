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
 * Check if a given object implements the TokenRenewRequest interface.
 */
export function instanceOfTokenRenewRequest(value) {
    return true;
}
export function TokenRenewRequestFromJSON(json) {
    return TokenRenewRequestFromJSONTyped(json, false);
}
export function TokenRenewRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'increment': json['increment'] == null ? undefined : json['increment'],
        'token': json['token'] == null ? undefined : json['token'],
    };
}
export function TokenRenewRequestToJSON(json) {
    return TokenRenewRequestToJSONTyped(json, false);
}
export function TokenRenewRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'increment': value['increment'],
        'token': value['token'],
    };
}
