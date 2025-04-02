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
exports.instanceOfAppRoleReadPoliciesResponse = instanceOfAppRoleReadPoliciesResponse;
exports.AppRoleReadPoliciesResponseFromJSON = AppRoleReadPoliciesResponseFromJSON;
exports.AppRoleReadPoliciesResponseFromJSONTyped = AppRoleReadPoliciesResponseFromJSONTyped;
exports.AppRoleReadPoliciesResponseToJSON = AppRoleReadPoliciesResponseToJSON;
exports.AppRoleReadPoliciesResponseToJSONTyped = AppRoleReadPoliciesResponseToJSONTyped;
/**
 * Check if a given object implements the AppRoleReadPoliciesResponse interface.
 */
function instanceOfAppRoleReadPoliciesResponse(value) {
    return true;
}
function AppRoleReadPoliciesResponseFromJSON(json) {
    return AppRoleReadPoliciesResponseFromJSONTyped(json, false);
}
function AppRoleReadPoliciesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'policies': json['policies'] == null ? undefined : json['policies'],
        'tokenPolicies': json['token_policies'] == null ? undefined : json['token_policies'],
    };
}
function AppRoleReadPoliciesResponseToJSON(json) {
    return AppRoleReadPoliciesResponseToJSONTyped(json, false);
}
function AppRoleReadPoliciesResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'policies': value['policies'],
        'token_policies': value['tokenPolicies'],
    };
}
