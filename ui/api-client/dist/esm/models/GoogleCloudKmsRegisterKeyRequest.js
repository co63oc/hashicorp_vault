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
 * Check if a given object implements the GoogleCloudKmsRegisterKeyRequest interface.
 */
export function instanceOfGoogleCloudKmsRegisterKeyRequest(value) {
    return true;
}
export function GoogleCloudKmsRegisterKeyRequestFromJSON(json) {
    return GoogleCloudKmsRegisterKeyRequestFromJSONTyped(json, false);
}
export function GoogleCloudKmsRegisterKeyRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'cryptoKey': json['crypto_key'] == null ? undefined : json['crypto_key'],
        'verify': json['verify'] == null ? undefined : json['verify'],
    };
}
export function GoogleCloudKmsRegisterKeyRequestToJSON(json) {
    return GoogleCloudKmsRegisterKeyRequestToJSONTyped(json, false);
}
export function GoogleCloudKmsRegisterKeyRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'crypto_key': value['cryptoKey'],
        'verify': value['verify'],
    };
}
