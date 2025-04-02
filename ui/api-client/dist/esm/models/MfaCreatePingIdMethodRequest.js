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
 * Check if a given object implements the MfaCreatePingIdMethodRequest interface.
 */
export function instanceOfMfaCreatePingIdMethodRequest(value) {
    return true;
}
export function MfaCreatePingIdMethodRequestFromJSON(json) {
    return MfaCreatePingIdMethodRequestFromJSONTyped(json, false);
}
export function MfaCreatePingIdMethodRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'methodName': json['method_name'] == null ? undefined : json['method_name'],
        'settingsFileBase64': json['settings_file_base64'] == null ? undefined : json['settings_file_base64'],
        'usernameFormat': json['username_format'] == null ? undefined : json['username_format'],
    };
}
export function MfaCreatePingIdMethodRequestToJSON(json) {
    return MfaCreatePingIdMethodRequestToJSONTyped(json, false);
}
export function MfaCreatePingIdMethodRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'method_name': value['methodName'],
        'settings_file_base64': value['settingsFileBase64'],
        'username_format': value['usernameFormat'],
    };
}
