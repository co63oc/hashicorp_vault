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
exports.instanceOfKvV2UndeleteVersionsRequest = instanceOfKvV2UndeleteVersionsRequest;
exports.KvV2UndeleteVersionsRequestFromJSON = KvV2UndeleteVersionsRequestFromJSON;
exports.KvV2UndeleteVersionsRequestFromJSONTyped = KvV2UndeleteVersionsRequestFromJSONTyped;
exports.KvV2UndeleteVersionsRequestToJSON = KvV2UndeleteVersionsRequestToJSON;
exports.KvV2UndeleteVersionsRequestToJSONTyped = KvV2UndeleteVersionsRequestToJSONTyped;
/**
 * Check if a given object implements the KvV2UndeleteVersionsRequest interface.
 */
function instanceOfKvV2UndeleteVersionsRequest(value) {
    return true;
}
function KvV2UndeleteVersionsRequestFromJSON(json) {
    return KvV2UndeleteVersionsRequestFromJSONTyped(json, false);
}
function KvV2UndeleteVersionsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'versions': json['versions'] == null ? undefined : json['versions'],
    };
}
function KvV2UndeleteVersionsRequestToJSON(json) {
    return KvV2UndeleteVersionsRequestToJSONTyped(json, false);
}
function KvV2UndeleteVersionsRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'versions': value['versions'],
    };
}
