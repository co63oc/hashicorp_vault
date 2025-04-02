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
exports.instanceOfAuditingListRequestHeadersResponse = instanceOfAuditingListRequestHeadersResponse;
exports.AuditingListRequestHeadersResponseFromJSON = AuditingListRequestHeadersResponseFromJSON;
exports.AuditingListRequestHeadersResponseFromJSONTyped = AuditingListRequestHeadersResponseFromJSONTyped;
exports.AuditingListRequestHeadersResponseToJSON = AuditingListRequestHeadersResponseToJSON;
exports.AuditingListRequestHeadersResponseToJSONTyped = AuditingListRequestHeadersResponseToJSONTyped;
/**
 * Check if a given object implements the AuditingListRequestHeadersResponse interface.
 */
function instanceOfAuditingListRequestHeadersResponse(value) {
    return true;
}
function AuditingListRequestHeadersResponseFromJSON(json) {
    return AuditingListRequestHeadersResponseFromJSONTyped(json, false);
}
function AuditingListRequestHeadersResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'headers': json['headers'] == null ? undefined : json['headers'],
    };
}
function AuditingListRequestHeadersResponseToJSON(json) {
    return AuditingListRequestHeadersResponseToJSONTyped(json, false);
}
function AuditingListRequestHeadersResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'headers': value['headers'],
    };
}
