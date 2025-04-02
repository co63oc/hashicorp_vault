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
exports.instanceOfSshVerifyOtpRequest = instanceOfSshVerifyOtpRequest;
exports.SshVerifyOtpRequestFromJSON = SshVerifyOtpRequestFromJSON;
exports.SshVerifyOtpRequestFromJSONTyped = SshVerifyOtpRequestFromJSONTyped;
exports.SshVerifyOtpRequestToJSON = SshVerifyOtpRequestToJSON;
exports.SshVerifyOtpRequestToJSONTyped = SshVerifyOtpRequestToJSONTyped;
/**
 * Check if a given object implements the SshVerifyOtpRequest interface.
 */
function instanceOfSshVerifyOtpRequest(value) {
    return true;
}
function SshVerifyOtpRequestFromJSON(json) {
    return SshVerifyOtpRequestFromJSONTyped(json, false);
}
function SshVerifyOtpRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'otp': json['otp'] == null ? undefined : json['otp'],
    };
}
function SshVerifyOtpRequestToJSON(json) {
    return SshVerifyOtpRequestToJSONTyped(json, false);
}
function SshVerifyOtpRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'otp': value['otp'],
    };
}
