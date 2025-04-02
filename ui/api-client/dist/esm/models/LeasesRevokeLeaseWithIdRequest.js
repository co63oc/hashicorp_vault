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
/**
 * Check if a given object implements the LeasesRevokeLeaseWithIdRequest interface.
 */
export function instanceOfLeasesRevokeLeaseWithIdRequest(value) {
    return true;
}
export function LeasesRevokeLeaseWithIdRequestFromJSON(json) {
    return LeasesRevokeLeaseWithIdRequestFromJSONTyped(json, false);
}
export function LeasesRevokeLeaseWithIdRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'leaseId': json['lease_id'] == null ? undefined : json['lease_id'],
        'sync': json['sync'] == null ? undefined : json['sync'],
    };
}
export function LeasesRevokeLeaseWithIdRequestToJSON(json) {
    return LeasesRevokeLeaseWithIdRequestToJSONTyped(json, false);
}
export function LeasesRevokeLeaseWithIdRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'lease_id': value['leaseId'],
        'sync': value['sync'],
    };
}
