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
exports.instanceOfSystemWriteReplicationDrSecondaryEnableRequest = instanceOfSystemWriteReplicationDrSecondaryEnableRequest;
exports.SystemWriteReplicationDrSecondaryEnableRequestFromJSON = SystemWriteReplicationDrSecondaryEnableRequestFromJSON;
exports.SystemWriteReplicationDrSecondaryEnableRequestFromJSONTyped = SystemWriteReplicationDrSecondaryEnableRequestFromJSONTyped;
exports.SystemWriteReplicationDrSecondaryEnableRequestToJSON = SystemWriteReplicationDrSecondaryEnableRequestToJSON;
exports.SystemWriteReplicationDrSecondaryEnableRequestToJSONTyped = SystemWriteReplicationDrSecondaryEnableRequestToJSONTyped;
/**
 * Check if a given object implements the SystemWriteReplicationDrSecondaryEnableRequest interface.
 */
function instanceOfSystemWriteReplicationDrSecondaryEnableRequest(value) {
    return true;
}
function SystemWriteReplicationDrSecondaryEnableRequestFromJSON(json) {
    return SystemWriteReplicationDrSecondaryEnableRequestFromJSONTyped(json, false);
}
function SystemWriteReplicationDrSecondaryEnableRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'caFile': json['ca_file'] == null ? undefined : json['ca_file'],
        'caPath': json['ca_path'] == null ? undefined : json['ca_path'],
        'clientCertPem': json['client_cert_pem'] == null ? undefined : json['client_cert_pem'],
        'clientKeyPem': json['client_key_pem'] == null ? undefined : json['client_key_pem'],
        'primaryApiAddr': json['primary_api_addr'] == null ? undefined : json['primary_api_addr'],
        'token': json['token'] == null ? undefined : json['token'],
    };
}
function SystemWriteReplicationDrSecondaryEnableRequestToJSON(json) {
    return SystemWriteReplicationDrSecondaryEnableRequestToJSONTyped(json, false);
}
function SystemWriteReplicationDrSecondaryEnableRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'ca_file': value['caFile'],
        'ca_path': value['caPath'],
        'client_cert_pem': value['clientCertPem'],
        'client_key_pem': value['clientKeyPem'],
        'primary_api_addr': value['primaryApiAddr'],
        'token': value['token'],
    };
}
