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
exports.instanceOfJwtLoginRequest = instanceOfJwtLoginRequest;
exports.JwtLoginRequestFromJSON = JwtLoginRequestFromJSON;
exports.JwtLoginRequestFromJSONTyped = JwtLoginRequestFromJSONTyped;
exports.JwtLoginRequestToJSON = JwtLoginRequestToJSON;
exports.JwtLoginRequestToJSONTyped = JwtLoginRequestToJSONTyped;
/**
 * Check if a given object implements the JwtLoginRequest interface.
 */
function instanceOfJwtLoginRequest(value) {
    return true;
}
function JwtLoginRequestFromJSON(json) {
    return JwtLoginRequestFromJSONTyped(json, false);
}
function JwtLoginRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'jwt': json['jwt'] == null ? undefined : json['jwt'],
        'role': json['role'] == null ? undefined : json['role'],
    };
}
function JwtLoginRequestToJSON(json) {
    return JwtLoginRequestToJSONTyped(json, false);
}
function JwtLoginRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'jwt': value['jwt'],
        'role': value['role'],
    };
}
