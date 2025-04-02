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
exports.instanceOfAppRoleWriteBindSecretIdRequest = instanceOfAppRoleWriteBindSecretIdRequest;
exports.AppRoleWriteBindSecretIdRequestFromJSON = AppRoleWriteBindSecretIdRequestFromJSON;
exports.AppRoleWriteBindSecretIdRequestFromJSONTyped = AppRoleWriteBindSecretIdRequestFromJSONTyped;
exports.AppRoleWriteBindSecretIdRequestToJSON = AppRoleWriteBindSecretIdRequestToJSON;
exports.AppRoleWriteBindSecretIdRequestToJSONTyped = AppRoleWriteBindSecretIdRequestToJSONTyped;
/**
 * Check if a given object implements the AppRoleWriteBindSecretIdRequest interface.
 */
function instanceOfAppRoleWriteBindSecretIdRequest(value) {
    return true;
}
function AppRoleWriteBindSecretIdRequestFromJSON(json) {
    return AppRoleWriteBindSecretIdRequestFromJSONTyped(json, false);
}
function AppRoleWriteBindSecretIdRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'bindSecretId': json['bind_secret_id'] == null ? undefined : json['bind_secret_id'],
    };
}
function AppRoleWriteBindSecretIdRequestToJSON(json) {
    return AppRoleWriteBindSecretIdRequestToJSONTyped(json, false);
}
function AppRoleWriteBindSecretIdRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'bind_secret_id': value['bindSecretId'],
    };
}
