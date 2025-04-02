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
exports.instanceOfOktaConfigureRequest = instanceOfOktaConfigureRequest;
exports.OktaConfigureRequestFromJSON = OktaConfigureRequestFromJSON;
exports.OktaConfigureRequestFromJSONTyped = OktaConfigureRequestFromJSONTyped;
exports.OktaConfigureRequestToJSON = OktaConfigureRequestToJSON;
exports.OktaConfigureRequestToJSONTyped = OktaConfigureRequestToJSONTyped;
/**
 * Check if a given object implements the OktaConfigureRequest interface.
 */
function instanceOfOktaConfigureRequest(value) {
    return true;
}
function OktaConfigureRequestFromJSON(json) {
    return OktaConfigureRequestFromJSONTyped(json, false);
}
function OktaConfigureRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'apiToken': json['api_token'] == null ? undefined : json['api_token'],
        'baseUrl': json['base_url'] == null ? undefined : json['base_url'],
        'bypassOktaMfa': json['bypass_okta_mfa'] == null ? undefined : json['bypass_okta_mfa'],
        'maxTtl': json['max_ttl'] == null ? undefined : json['max_ttl'],
        'orgName': json['org_name'] == null ? undefined : json['org_name'],
        'organization': json['organization'] == null ? undefined : json['organization'],
        'production': json['production'] == null ? undefined : json['production'],
        'token': json['token'] == null ? undefined : json['token'],
        'tokenBoundCidrs': json['token_bound_cidrs'] == null ? undefined : json['token_bound_cidrs'],
        'tokenExplicitMaxTtl': json['token_explicit_max_ttl'] == null ? undefined : json['token_explicit_max_ttl'],
        'tokenMaxTtl': json['token_max_ttl'] == null ? undefined : json['token_max_ttl'],
        'tokenNoDefaultPolicy': json['token_no_default_policy'] == null ? undefined : json['token_no_default_policy'],
        'tokenNumUses': json['token_num_uses'] == null ? undefined : json['token_num_uses'],
        'tokenPeriod': json['token_period'] == null ? undefined : json['token_period'],
        'tokenPolicies': json['token_policies'] == null ? undefined : json['token_policies'],
        'tokenTtl': json['token_ttl'] == null ? undefined : json['token_ttl'],
        'tokenType': json['token_type'] == null ? undefined : json['token_type'],
        'ttl': json['ttl'] == null ? undefined : json['ttl'],
    };
}
function OktaConfigureRequestToJSON(json) {
    return OktaConfigureRequestToJSONTyped(json, false);
}
function OktaConfigureRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'api_token': value['apiToken'],
        'base_url': value['baseUrl'],
        'bypass_okta_mfa': value['bypassOktaMfa'],
        'max_ttl': value['maxTtl'],
        'org_name': value['orgName'],
        'organization': value['organization'],
        'production': value['production'],
        'token': value['token'],
        'token_bound_cidrs': value['tokenBoundCidrs'],
        'token_explicit_max_ttl': value['tokenExplicitMaxTtl'],
        'token_max_ttl': value['tokenMaxTtl'],
        'token_no_default_policy': value['tokenNoDefaultPolicy'],
        'token_num_uses': value['tokenNumUses'],
        'token_period': value['tokenPeriod'],
        'token_policies': value['tokenPolicies'],
        'token_ttl': value['tokenTtl'],
        'token_type': value['tokenType'],
        'ttl': value['ttl'],
    };
}
