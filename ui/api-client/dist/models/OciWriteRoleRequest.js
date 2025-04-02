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
exports.instanceOfOciWriteRoleRequest = instanceOfOciWriteRoleRequest;
exports.OciWriteRoleRequestFromJSON = OciWriteRoleRequestFromJSON;
exports.OciWriteRoleRequestFromJSONTyped = OciWriteRoleRequestFromJSONTyped;
exports.OciWriteRoleRequestToJSON = OciWriteRoleRequestToJSON;
exports.OciWriteRoleRequestToJSONTyped = OciWriteRoleRequestToJSONTyped;
/**
 * Check if a given object implements the OciWriteRoleRequest interface.
 */
function instanceOfOciWriteRoleRequest(value) {
    return true;
}
function OciWriteRoleRequestFromJSON(json) {
    return OciWriteRoleRequestFromJSONTyped(json, false);
}
function OciWriteRoleRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'ocidList': json['ocid_list'] == null ? undefined : json['ocid_list'],
        'tokenBoundCidrs': json['token_bound_cidrs'] == null ? undefined : json['token_bound_cidrs'],
        'tokenExplicitMaxTtl': json['token_explicit_max_ttl'] == null ? undefined : json['token_explicit_max_ttl'],
        'tokenMaxTtl': json['token_max_ttl'] == null ? undefined : json['token_max_ttl'],
        'tokenNoDefaultPolicy': json['token_no_default_policy'] == null ? undefined : json['token_no_default_policy'],
        'tokenNumUses': json['token_num_uses'] == null ? undefined : json['token_num_uses'],
        'tokenPeriod': json['token_period'] == null ? undefined : json['token_period'],
        'tokenPolicies': json['token_policies'] == null ? undefined : json['token_policies'],
        'tokenTtl': json['token_ttl'] == null ? undefined : json['token_ttl'],
        'tokenType': json['token_type'] == null ? undefined : json['token_type'],
    };
}
function OciWriteRoleRequestToJSON(json) {
    return OciWriteRoleRequestToJSONTyped(json, false);
}
function OciWriteRoleRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'ocid_list': value['ocidList'],
        'token_bound_cidrs': value['tokenBoundCidrs'],
        'token_explicit_max_ttl': value['tokenExplicitMaxTtl'],
        'token_max_ttl': value['tokenMaxTtl'],
        'token_no_default_policy': value['tokenNoDefaultPolicy'],
        'token_num_uses': value['tokenNumUses'],
        'token_period': value['tokenPeriod'],
        'token_policies': value['tokenPolicies'],
        'token_ttl': value['tokenTtl'],
        'token_type': value['tokenType'],
    };
}
