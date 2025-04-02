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
 * Check if a given object implements the SystemPatchSyncDestinationsGcpSmNameResponse interface.
 */
export function instanceOfSystemPatchSyncDestinationsGcpSmNameResponse(value) {
    return true;
}
export function SystemPatchSyncDestinationsGcpSmNameResponseFromJSON(json) {
    return SystemPatchSyncDestinationsGcpSmNameResponseFromJSONTyped(json, false);
}
export function SystemPatchSyncDestinationsGcpSmNameResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'connectionDetails': json['connection_details'] == null ? undefined : json['connection_details'],
        'name': json['name'] == null ? undefined : json['name'],
        'type': json['type'] == null ? undefined : json['type'],
    };
}
export function SystemPatchSyncDestinationsGcpSmNameResponseToJSON(json) {
    return SystemPatchSyncDestinationsGcpSmNameResponseToJSONTyped(json, false);
}
export function SystemPatchSyncDestinationsGcpSmNameResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'connection_details': value['connectionDetails'],
        'name': value['name'],
        'type': value['type'],
    };
}
