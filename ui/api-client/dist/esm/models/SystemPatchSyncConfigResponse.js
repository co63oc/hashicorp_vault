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
 * Check if a given object implements the SystemPatchSyncConfigResponse interface.
 */
export function instanceOfSystemPatchSyncConfigResponse(value) {
    return true;
}
export function SystemPatchSyncConfigResponseFromJSON(json) {
    return SystemPatchSyncConfigResponseFromJSONTyped(json, false);
}
export function SystemPatchSyncConfigResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'disabled': json['disabled'] == null ? undefined : json['disabled'],
        'queueCapacity': json['queue_capacity'] == null ? undefined : json['queue_capacity'],
    };
}
export function SystemPatchSyncConfigResponseToJSON(json) {
    return SystemPatchSyncConfigResponseToJSONTyped(json, false);
}
export function SystemPatchSyncConfigResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'disabled': value['disabled'],
        'queue_capacity': value['queueCapacity'],
    };
}
