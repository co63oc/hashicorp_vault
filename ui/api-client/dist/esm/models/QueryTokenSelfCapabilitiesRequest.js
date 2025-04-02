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
 * Check if a given object implements the QueryTokenSelfCapabilitiesRequest interface.
 */
export function instanceOfQueryTokenSelfCapabilitiesRequest(value) {
    return true;
}
export function QueryTokenSelfCapabilitiesRequestFromJSON(json) {
    return QueryTokenSelfCapabilitiesRequestFromJSONTyped(json, false);
}
export function QueryTokenSelfCapabilitiesRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'path': json['path'] == null ? undefined : json['path'],
        'paths': json['paths'] == null ? undefined : json['paths'],
        'token': json['token'] == null ? undefined : json['token'],
    };
}
export function QueryTokenSelfCapabilitiesRequestToJSON(json) {
    return QueryTokenSelfCapabilitiesRequestToJSONTyped(json, false);
}
export function QueryTokenSelfCapabilitiesRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'path': value['path'],
        'paths': value['paths'],
        'token': value['token'],
    };
}
