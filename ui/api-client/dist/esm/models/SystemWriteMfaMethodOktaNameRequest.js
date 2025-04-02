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
 * Check if a given object implements the SystemWriteMfaMethodOktaNameRequest interface.
 */
export function instanceOfSystemWriteMfaMethodOktaNameRequest(value) {
    return true;
}
export function SystemWriteMfaMethodOktaNameRequestFromJSON(json) {
    return SystemWriteMfaMethodOktaNameRequestFromJSONTyped(json, false);
}
export function SystemWriteMfaMethodOktaNameRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'apiToken': json['api_token'] == null ? undefined : json['api_token'],
        'baseUrl': json['base_url'] == null ? undefined : json['base_url'],
        'mountAccessor': json['mount_accessor'] == null ? undefined : json['mount_accessor'],
        'orgName': json['org_name'] == null ? undefined : json['org_name'],
        'primaryEmail': json['primary_email'] == null ? undefined : json['primary_email'],
        'production': json['production'] == null ? undefined : json['production'],
        'usernameFormat': json['username_format'] == null ? undefined : json['username_format'],
    };
}
export function SystemWriteMfaMethodOktaNameRequestToJSON(json) {
    return SystemWriteMfaMethodOktaNameRequestToJSONTyped(json, false);
}
export function SystemWriteMfaMethodOktaNameRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'api_token': value['apiToken'],
        'base_url': value['baseUrl'],
        'mount_accessor': value['mountAccessor'],
        'org_name': value['orgName'],
        'primary_email': value['primaryEmail'],
        'production': value['production'],
        'username_format': value['usernameFormat'],
    };
}
