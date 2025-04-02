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
exports.instanceOfNomadConfigureLeaseRequest = instanceOfNomadConfigureLeaseRequest;
exports.NomadConfigureLeaseRequestFromJSON = NomadConfigureLeaseRequestFromJSON;
exports.NomadConfigureLeaseRequestFromJSONTyped = NomadConfigureLeaseRequestFromJSONTyped;
exports.NomadConfigureLeaseRequestToJSON = NomadConfigureLeaseRequestToJSON;
exports.NomadConfigureLeaseRequestToJSONTyped = NomadConfigureLeaseRequestToJSONTyped;
/**
 * Check if a given object implements the NomadConfigureLeaseRequest interface.
 */
function instanceOfNomadConfigureLeaseRequest(value) {
    return true;
}
function NomadConfigureLeaseRequestFromJSON(json) {
    return NomadConfigureLeaseRequestFromJSONTyped(json, false);
}
function NomadConfigureLeaseRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'maxTtl': json['max_ttl'] == null ? undefined : json['max_ttl'],
        'ttl': json['ttl'] == null ? undefined : json['ttl'],
    };
}
function NomadConfigureLeaseRequestToJSON(json) {
    return NomadConfigureLeaseRequestToJSONTyped(json, false);
}
function NomadConfigureLeaseRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'max_ttl': value['maxTtl'],
        'ttl': value['ttl'],
    };
}
