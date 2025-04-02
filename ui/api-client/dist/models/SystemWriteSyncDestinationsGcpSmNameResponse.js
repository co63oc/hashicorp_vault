"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfSystemWriteSyncDestinationsGcpSmNameResponse = instanceOfSystemWriteSyncDestinationsGcpSmNameResponse;
exports.SystemWriteSyncDestinationsGcpSmNameResponseFromJSON = SystemWriteSyncDestinationsGcpSmNameResponseFromJSON;
exports.SystemWriteSyncDestinationsGcpSmNameResponseFromJSONTyped = SystemWriteSyncDestinationsGcpSmNameResponseFromJSONTyped;
exports.SystemWriteSyncDestinationsGcpSmNameResponseToJSON = SystemWriteSyncDestinationsGcpSmNameResponseToJSON;
exports.SystemWriteSyncDestinationsGcpSmNameResponseToJSONTyped = SystemWriteSyncDestinationsGcpSmNameResponseToJSONTyped;
/**
 * Check if a given object implements the SystemWriteSyncDestinationsGcpSmNameResponse interface.
 */
function instanceOfSystemWriteSyncDestinationsGcpSmNameResponse(value) {
    return true;
}
function SystemWriteSyncDestinationsGcpSmNameResponseFromJSON(json) {
    return SystemWriteSyncDestinationsGcpSmNameResponseFromJSONTyped(json, false);
}
function SystemWriteSyncDestinationsGcpSmNameResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'connectionDetails': json['connection_details'] == null ? undefined : json['connection_details'],
        'name': json['name'] == null ? undefined : json['name'],
        'type': json['type'] == null ? undefined : json['type'],
    };
}
function SystemWriteSyncDestinationsGcpSmNameResponseToJSON(json) {
    return SystemWriteSyncDestinationsGcpSmNameResponseToJSONTyped(json, false);
}
function SystemWriteSyncDestinationsGcpSmNameResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'connection_details': value['connectionDetails'],
        'name': value['name'],
        'type': value['type'],
    };
}
