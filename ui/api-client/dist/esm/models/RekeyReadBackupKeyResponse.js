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
 * Check if a given object implements the RekeyReadBackupKeyResponse interface.
 */
export function instanceOfRekeyReadBackupKeyResponse(value) {
    return true;
}
export function RekeyReadBackupKeyResponseFromJSON(json) {
    return RekeyReadBackupKeyResponseFromJSONTyped(json, false);
}
export function RekeyReadBackupKeyResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'keys': json['keys'] == null ? undefined : json['keys'],
        'keysBase64': json['keys_base64'] == null ? undefined : json['keys_base64'],
        'nonce': json['nonce'] == null ? undefined : json['nonce'],
    };
}
export function RekeyReadBackupKeyResponseToJSON(json) {
    return RekeyReadBackupKeyResponseToJSONTyped(json, false);
}
export function RekeyReadBackupKeyResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'keys': value['keys'],
        'keys_base64': value['keysBase64'],
        'nonce': value['nonce'],
    };
}
